/*
 * 既存 Supabase(Postgres) → 新 Postgres(Vercel/Neon) データ移行
 *
 * 使い方:
 *   SOURCE_DB_URL="postgresql://postgres:PW@db.<ref>.supabase.co:5432/postgres" \
 *   DATABASE_URL="postgresql://...neon..." \
 *   node scripts/migrate-from-supabase.js [--overwrite]
 *
 *   - SOURCE_DB_URL : 移行元 Supabase の「直接接続」文字列（ダッシュボードの
 *                     Project Settings → Database → Connection string）
 *   - DATABASE_URL  : 移行先（.env と同じ）。事前に `prisma migrate deploy` 済みであること
 *   - --overwrite   : 既存行を上書き（既定は ON CONFLICT DO NOTHING で非破壊）
 *
 * 列は「移行先テーブルに存在する列」だけをコピーするため、スキーマの差異に強い。
 * app_users.password は平文のまま移り、初回ログイン時にサーバー側で scrypt へ自動移行される。
 */
const { Client } = require('pg');

// マスタ → 依存データの順（外部キーは張っていないが、見通しのため）
const TABLES = [
  { name: 'brands', conflict: 'id' },
  { name: 'stores', conflict: 'id' },
  { name: 'items', conflict: 'id' },
  { name: 'app_users', conflict: 'id' },
  { name: 'suppliers', conflict: 'brand,name' },
  { name: 'supplier_notes', conflict: 'supplier' },
  { name: 'app_settings', conflict: 'key' },
  { name: 'app_config', conflict: 'key' },
  { name: 'profiles', conflict: 'id' },
  { name: 'inventory_entries', conflict: 'store_id,month,item_id' },
  { name: 'inventory_meta', conflict: 'store_id,month' },
  { name: 'alert_comments', conflict: 'store_id,month' },
  { name: 'approvals', conflict: 'brand,month' },
  { name: 'transfer_slips', conflict: 'id' },
  { name: 'seal_stamps', conflict: 'id' },
  { name: 'coin_awards', conflict: 'id' },
  { name: 'food_loss', conflict: 'id' },
  { name: 'breakage', conflict: 'id' },
  { name: 'breakage_items', conflict: 'id' },
];

function q(id) { return '"' + String(id).replace(/"/g, '""') + '"'; }

async function targetColumns(target, table) {
  const { rows } = await target.query(
    `select column_name from information_schema.columns
     where table_schema='public' and table_name=$1`, [table]);
  return new Set(rows.map((r) => r.column_name));
}

async function sourceHasTable(source, table) {
  const { rows } = await source.query(
    `select 1 from information_schema.tables
     where table_schema='public' and table_name=$1`, [table]);
  return rows.length > 0;
}

async function migrateTable(source, target, table, conflict, overwrite) {
  if (!(await sourceHasTable(source, table))) {
    console.log(`- ${table}: 移行元に無いためスキップ`);
    return;
  }
  const tcols = await targetColumns(target, table);
  const src = await source.query(`select * from ${q(table)}`);
  if (src.rows.length === 0) { console.log(`- ${table}: 0件`); return; }

  // 移行先に存在する列だけを対象に
  const cols = Object.keys(src.rows[0]).filter((c) => tcols.has(c));
  const conflictCols = conflict.split(',').map((s) => s.trim());
  const setCols = cols.filter((c) => !conflictCols.includes(c));

  const onConflict = overwrite && setCols.length
    ? `on conflict (${conflictCols.map(q).join(',')}) do update set ` +
      setCols.map((c) => `${q(c)}=excluded.${q(c)}`).join(',')
    : `on conflict (${conflictCols.map(q).join(',')}) do nothing`;

  let n = 0;
  await target.query('begin');
  try {
    for (const row of src.rows) {
      const vals = cols.map((c) => {
        const v = row[c];
        // json/jsonb 列は JS のオブジェクト/配列で返るため、文字列化して渡す
        // （そのまま渡すと node-postgres が Postgres 配列として送り json エラーになる）
        if (v !== null && typeof v === 'object' && !(v instanceof Date) && !Buffer.isBuffer(v)) {
          return JSON.stringify(v);
        }
        return v;
      });
      const ph = cols.map((_, i) => '$' + (i + 1)).join(',');
      const sql = `insert into ${q(table)} (${cols.map(q).join(',')}) values (${ph}) ${onConflict}`;
      const res = await target.query(sql, vals);
      n += res.rowCount || 0;
    }
    await target.query('commit');
  } catch (e) {
    await target.query('rollback');
    throw new Error(`${table} の移行に失敗: ${e.message}`);
  }
  console.log(`- ${table}: ${src.rows.length}件中 ${n}件を反映 (${overwrite ? '上書き' : '新規のみ'})`);
}

function noSsl(url) { return url.includes('localhost') || url.includes('127.0.0.1'); }

// 移行元(Supabase)→移行先(DATABASE_URL) をコピー。ビルドからも呼べるよう関数化。
async function migrateFromSupabase({ overwrite = false, sourceUrl, targetUrl } = {}) {
  const SOURCE = sourceUrl || process.env.SOURCE_DB_URL;
  const TARGET = targetUrl || process.env.DATABASE_URL;
  if (!SOURCE || !TARGET) throw new Error('SOURCE_DB_URL と DATABASE_URL が必要です。');
  const source = new Client({ connectionString: SOURCE, ssl: noSsl(SOURCE) ? false : { rejectUnauthorized: false } });
  const target = new Client({ connectionString: TARGET, ssl: noSsl(TARGET) ? false : { rejectUnauthorized: false } });
  await source.connect();
  await target.connect();
  console.log(`移行開始 (${overwrite ? '上書きモード' : '非破壊モード'})`);
  try {
    for (const t of TABLES) await migrateTable(source, target, t.name, t.conflict, overwrite);
    console.log('移行完了。');
  } finally {
    await source.end().catch(() => {});
    await target.end().catch(() => {});
  }
}

module.exports = { migrateFromSupabase };

// コマンドラインから直接実行された場合のみ動かす
if (require.main === module) {
  migrateFromSupabase({ overwrite: process.argv.includes('--overwrite') })
    .catch((e) => { console.error(e); process.exit(1); });
}
