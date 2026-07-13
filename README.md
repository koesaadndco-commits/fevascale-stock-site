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
- **Phase 2（予定）… 切替**
  - サーバー API（`/api/auth/*`、データ用エンドポイント）を Prisma で実装
  - クライアントの `sb`（Supabase）を API 互換アダプタへ差し替え、Supabase CDN を撤去
  - リアルタイム同期は廃止し「更新」ボタンでの手動更新に一本化
- **Phase 3（予定）… 移行仕上げ**
  - 既存 Supabase データの移行手順／スクリプト、パスワード初期設定、堅牢化

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
