# fevascale-stock-site（棚簡 / FEVASCALE STOCK）

株式会社アモーレながすぎ 棚卸管理プロダクト「棚簡」。
単一の `index.html` で動いていたクライアントサイド SPA を、Next.js（App Router）+ Vercel 構成に載せ替えたものです。

## 構成

これまでの `index.html` を役割ごとに分割しました。

```
app/
  layout.jsx      ルートレイアウト。<head> メタ情報・フォント・CSS/外部ライブラリの読み込み
  page.jsx        アプリのマウント先（#app / #print-area）とアプリ本体スクリプトの読み込み
public/
  tanakan.css     元の <style> 2 ブロックを結合したスタイル（埋め込み base64 画像を含むため静的配信）
  tanakan-app.js  元の <script>（約 8,000 行）そのままのアプリ本体（バニラ JS + Supabase）
next.config.mjs
package.json
jsconfig.json
```

アプリのロジック（描画・Supabase 連携・Excel 出力など）は既存のまま無改変で、Next.js は「箱」として載せているだけです。段階的に画面単位で React 化していくこともできます。

### 読み込み順

- `xlsx-js-style` と `@supabase/supabase-js`（CDN）は `next/script` の `beforeInteractive` で先に読み込み、グローバル `XLSX` / `supabase` を定義。
- アプリ本体 `/tanakan-app.js` は `afterInteractive` で、DOM とライブラリが揃った後に実行。
- フォント（BIZ UDPGothic / Anton / Noto Sans JP）は `<link>` で読み込み。

## バックエンド移行（Supabase → Postgres/Prisma）

Supabase をやめ、reportlink と同じ **Postgres(Vercel/Neon) + Prisma** 構成へ段階移行中です。

- **Phase 1（完了・本コミット）… 土台**
  - 全 19 テーブルの Prisma スキーマ（`prisma/schema.prisma`）
  - Prisma クライアント（`lib/db.js`）
  - 個人アカウント認証の土台（`lib/auth.js`：scrypt パスワード＋HMAC 署名 Cookie セッション）
  - 環境変数テンプレート（`.env.example`）
  - ※この段階では**アプリ本体は従来どおり Supabase で動作**します（壊さない追加のみ）。
- **Phase 2（完了）… 切替（Supabase 撤去）**
  - サーバー API を Prisma で実装
    - 認証：`/api/auth/login`（ユーザーID＋パスワード）・`/logout`・`/me`・`/password`
    - データ：`/api/data`（Supabase 互換クエリを Prisma で実行。`app_users.password` は返却時に必ず除去）
  - クライアントの `sb` を `public/sb-adapter.js`（`window.supabase.createClient` 互換）へ差し替え。
    Supabase CDN は撤去。tanakan-app.js の約 76 箇所の `sb.from(...)` は無改変で動作。
  - ログインはサーバー側で検証（既存の平文パスワードは初回ログイン時に scrypt へ自動移行）。
  - リアルタイム同期は廃止（`channel` は no-op）。データ更新は topbar の「更新」ボタンで手動。
  - ローカル Postgres を立てて **ログイン→ダッシュボード描画→保存→別セッションで再取得** まで検証済み。
- **Phase 3（進行中）… 移行仕上げ**
  - 既存 Supabase データの移行スクリプト（`scripts/migrate-from-supabase.js`）を用意。
  - 役割別認可の厳格化、Next.js のパッチ更新（順次）。

### 既存 Supabase データの移行

Supabase も中身は Postgres なので、両 DB を直結してテーブル単位でコピーする。

```bash
# 移行先スキーマを先に用意
npx prisma migrate deploy

# 移行元(Supabase 直接接続) → 移行先(DATABASE_URL) へコピー（非破壊：新規行のみ）
SOURCE_DB_URL="postgresql://postgres:PW@db.<ref>.supabase.co:5432/postgres" \
DATABASE_URL="postgresql://...neon..." \
node scripts/migrate-from-supabase.js
#   既存行も上書きしたい場合は末尾に --overwrite
```

- 移行先テーブルに存在する列だけをコピーするためスキーマ差異に強い。
- 冪等（再実行しても重複しない）。`app_users.password` は平文でも移り、
  初回ログイン時にサーバー側で scrypt へ自動移行される。

### 初回セットアップ（Phase 2 完了後の実行手順）

```bash
cp .env.example .env         # DATABASE_URL / DATABASE_URL_UNPOOLED / APP_SECRET を設定
npm install
npx prisma migrate deploy    # もしくは開発は  npx prisma migrate dev --name init
npx prisma db seed           # 既定ユーザーを投入（初回ログイン用。パスワードはハッシュ化）
npm run build && npm run start
```

既定の管理者は `admin` / `admin`（本番では必ず変更してください）。商品マスタ・店舗・業態は
管理者の初回ログイン時にアプリが自動投入します。

### データベースのセットアップ（Phase 1 の受け入れ手順）

1. Vercel/Neon で Postgres を作成し、接続文字列を取得。
2. `.env.example` を `.env` にコピーし、`DATABASE_URL` / `DATABASE_URL_UNPOOLED` / `APP_SECRET` を設定。
3. スキーマを DB へ反映：
   ```bash
   npx prisma migrate dev --name init   # 開発
   # 本番は  npx prisma migrate deploy
   ```
4. Vercel の環境変数にも同じ値（`DATABASE_URL` ほか）を登録。

> 現状はアプリの読み書きがまだ Supabase 向けのため、DB を用意しても Phase 2 の切替までは使われません。

## 開発

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 本番ビルド
npm run start    # 本番起動
```

## Vercel へのデプロイ

1. このリポジトリを Vercel にインポート（Framework Preset は自動で **Next.js** が選択されます）。
2. Build Command / Output はデフォルトのまま（`next build`）。
3. Deploy。環境変数の設定は不要です（接続情報はクライアント側に含まれます）。
