// 初期データ投入（ビルド時 / `npx prisma db seed`）
//   - SOURCE_DB_URL があれば、Supabase から実データを一度だけ移行する。
//   - 無ければ、app_users に既定ユーザー（admin/admin ほか）を投入する。
//   商品マスタ・店舗・業態などはログイン後にアプリが自動投入する。
const crypto = require('node:crypto');
const path = require('node:path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

function hashPassword(plain) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(String(plain), salt, 64).toString('hex');
  return `scrypt$${salt}$${hash}`;
}

// Supabase からの一度きりのデータ移行（app_config の __data_imported マーカーで管理）
async function importFromSupabaseOnce() {
  const marker = await prisma.appConfig.findUnique({ where: { key: '__data_imported' } });
  if (marker && process.env.FORCE_IMPORT !== '1') {
    console.log('データ移行は既に完了済み（__data_imported）。スキップします。');
    return;
  }
  const { migrateFromSupabase } = require('../scripts/migrate-from-supabase');
  console.log('SOURCE_DB_URL を検出 → Supabase から実データを移行します（上書きモード）。');
  await migrateFromSupabase({ overwrite: true });
  await prisma.appConfig.upsert({
    where: { key: '__data_imported' },
    create: { key: '__data_imported', value: new Date().toISOString() },
    update: { value: new Date().toISOString() },
  });
  console.log('✅ Supabase からのデータ移行が完了しました。');
}

async function seedDefaultUsers() {
  const users = require(path.join(__dirname, 'seed-users.json'));
  let created = 0;
  for (const u of users) {
    const row = {
      id: u.id,
      name: u.name,
      position: u.position || '',
      password: hashPassword(u.password || 'pass'),
      role: u.role || 'staff',
      approve_brand: u.approveBrand || null,
      default_store: u.defaultStore || null,
      archived: false,
    };
    // 既存ユーザーは一切変更しない（運用中の氏名・権限・パスワードを尊重）。
    // 無い場合だけ作成する。毎デプロイで実行されても、データ移行後でも安全。
    // 例外: パスワードが空になってしまったユーザーは既定値で修復する
    // （空のままだとログイン不能のため）。
    const existing = await prisma.appUser.findUnique({ where: { id: u.id } });
    if (!existing) {
      await prisma.appUser.create({ data: row });
    } else if (!existing.password) {
      await prisma.appUser.update({ where: { id: u.id }, data: { password: row.password } });
    }
    created++;
  }
  console.log(`seeded/updated ${created} app_users`);
}

async function main() {
  if (process.env.SOURCE_DB_URL) {
    // 実データ移行モード（Supabase → 新DB）。既定ユーザー投入はしない。
    await importFromSupabaseOnce();
  } else {
    // 通常モード：既定ユーザーを投入
    await seedDefaultUsers();
  }
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
