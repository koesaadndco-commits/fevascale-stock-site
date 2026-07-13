import 'server-only';
import { prisma } from './db';
import { hashPassword, isHashed } from './password';

// =========================================================
// クライアントの Supabase 互換アダプタ（public/sb-adapter.js）から届く
// クエリ仕様を Prisma で実行する層。
//   - テーブル名 → Prisma デリゲート＋一意キー情報を登録
//   - select / insert / upsert / update / delete をサポート
//   - app_users の password は返却時に必ず除去
// =========================================================

// テーブル名 → { model: prisma デリゲート名, pk: 単一PK名 or 複合キー配列 }
const REGISTRY = {
  items:             { model: 'item',           pk: 'id' },
  stores:            { model: 'store',          pk: 'id' },
  brands:            { model: 'brand',          pk: 'id' },
  app_users:         { model: 'appUser',        pk: 'id' },
  inventory_entries: { model: 'inventoryEntry', pk: ['store_id', 'month', 'item_id'] },
  inventory_meta:    { model: 'inventoryMeta',  pk: ['store_id', 'month'] },
  alert_comments:    { model: 'alertComment',   pk: ['store_id', 'month'] },
  transfer_slips:    { model: 'transferSlip',   pk: 'id' },
  suppliers:         { model: 'supplier',       pk: 'id', uniques: { 'brand,name': ['brand', 'name'] } },
  supplier_notes:    { model: 'supplierNote',   pk: 'supplier' },
  approvals:         { model: 'approval',       pk: ['brand', 'month'] },
  seal_stamps:       { model: 'sealStamp',      pk: 'id' },
  coin_awards:       { model: 'coinAward',      pk: 'id' },
  food_loss:         { model: 'foodLoss',       pk: 'id' },
  breakage:          { model: 'breakage',       pk: 'id' },
  breakage_items:    { model: 'breakageItem',   pk: 'id' },
  app_settings:      { model: 'appSetting',     pk: 'key' },
  app_config:        { model: 'appConfig',      pk: 'key' },
  profiles:          { model: 'profile',        pk: 'id' },
};

// ログイン前でも読める（＝セッション不要）テーブル。ブランディング/機能フラグ用。
export const PUBLIC_READ_TABLES = new Set(['app_settings', 'app_config']);
// 書き込みに管理者権限を要するテーブル
const ADMIN_WRITE_TABLES = new Set(['app_users']);

function delegate(table) {
  const r = REGISTRY[table];
  if (!r) throw new Error(`未登録のテーブル: ${table}`);
  const d = prisma[r.model];
  if (!d) throw new Error(`Prisma モデル未生成: ${r.model}`);
  return { d, r };
}

// SQL LIKE パターン → Prisma の where 条件
function likeToWhere(column, pattern) {
  const p = String(pattern);
  const starts = p.endsWith('%');
  const ends = p.startsWith('%');
  const core = p.replace(/^%/, '').replace(/%$/, '');
  if (starts && ends) return { [column]: { contains: core } };
  if (starts) return { [column]: { startsWith: core } };
  if (ends) return { [column]: { endsWith: core } };
  return { [column]: p };
}

function buildWhere(filters) {
  const where = {};
  for (const f of filters || []) {
    if (f.type === 'eq') where[f.column] = f.value;
    else if (f.type === 'in') where[f.column] = { in: f.value };
    else if (f.type === 'like') Object.assign(where, likeToWhere(f.column, f.value));
  }
  return where;
}

// onConflict 列名（'a,b'）→ Prisma の複合一意 where（{ a_b: {a,b} }）または { id: v }
function uniqueWhere(r, cols, row) {
  const list = Array.isArray(cols) ? cols : String(cols).split(',').map((s) => s.trim());
  if (list.length === 1) return { [list[0]]: row[list[0]] };
  const key = list.join('_');
  const obj = {};
  for (const c of list) obj[c] = row[c];
  return { [key]: obj };
}

function stripSecret(table, rows) {
  if (table !== 'app_users') return rows;
  const clean = (o) => { if (o && typeof o === 'object') { const { password, ...rest } = o; return rest; } return o; };
  return Array.isArray(rows) ? rows.map(clean) : clean(rows);
}

// user: 現在のセッションユーザー（null 可）
export async function executeQuery(spec, user) {
  const { table, action } = spec || {};
  if (!table || !action) return { data: null, error: { message: 'table と action は必須です' } };
  if (!REGISTRY[table]) return { data: null, error: { message: `未登録のテーブル: ${table}` } };

  const isAdmin = user && (user.role === 'admin' || user.role === 'super_admin');

  // 認可
  if (action === 'select') {
    if (!user && !PUBLIC_READ_TABLES.has(table)) {
      return { data: null, error: { message: '認証が必要です' } };
    }
  } else {
    if (!user) return { data: null, error: { message: '認証が必要です' } };
    if (ADMIN_WRITE_TABLES.has(table) && !isAdmin) {
      return { data: null, error: { message: '権限がありません' } };
    }
  }

  try {
    const { d, r } = delegate(table);

    if (action === 'select') {
      const where = buildWhere(spec.filters);
      const orderBy = (spec.order || []).map((o) => ({ [o.column]: o.ascending === false ? 'desc' : 'asc' }));
      const args = { where };
      if (orderBy.length) args.orderBy = orderBy;
      if (spec.range) { args.skip = spec.range.from; args.take = spec.range.to - spec.range.from + 1; }
      if (spec.limit != null) args.take = spec.limit;
      if (spec.single === 'maybe') {
        const row = await d.findFirst(args);
        return { data: stripSecret(table, row) || null, error: null };
      }
      const rows = await d.findMany(args);
      return { data: stripSecret(table, rows), error: null };
    }

    if (action === 'insert') {
      const rows = (spec.rows || []).map((row) => sanitizeWrite(table, row));
      await d.createMany({ data: rows, skipDuplicates: false });
      return { data: spec.returning ? stripSecret(table, rows) : null, error: null };
    }

    if (action === 'upsert') {
      const cols = spec.onConflict || r.pk;
      const out = [];
      for (const raw of spec.rows || []) {
        const row = sanitizeWrite(table, raw);
        const where = uniqueWhere(r, cols, row);
        const saved = await d.upsert({ where, create: row, update: row });
        out.push(saved);
      }
      return { data: spec.returning ? stripSecret(table, out) : null, error: null };
    }

    if (action === 'update') {
      const where = buildWhere(spec.filters);
      const data = sanitizeWrite(table, spec.updateData || {});
      await d.updateMany({ where, data });
      return { data: null, error: null };
    }

    if (action === 'delete') {
      const where = buildWhere(spec.filters);
      await d.deleteMany({ where });
      return { data: null, error: null };
    }

    return { data: null, error: { message: `未対応の action: ${action}` } };
  } catch (e) {
    return { data: null, error: { message: String((e && e.message) || e) } };
  }
}

// 書き込み値の整形：app_users の password は平文で来たらハッシュ化
function sanitizeWrite(table, row) {
  const out = { ...row };
  if (table === 'app_users' && typeof out.password === 'string' && out.password !== '' && !isHashed(out.password)) {
    out.password = hashPassword(out.password);
  }
  return out;
}
