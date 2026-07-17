// 初期データ投入（`npx prisma db seed`）
//   - app_users に既定ユーザーを投入（パスワードは scrypt でハッシュ化）
//   これで新規 DB でも最初のログインができる。
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

async function main() {
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
    await prisma.appUser.upsert({
      where: { id: u.id },
      create: row,
      update: {},
    });
    created++;
  }
  console.log(`seeded/updated ${created} app_users`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
