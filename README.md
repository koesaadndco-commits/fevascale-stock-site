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

## バックエンド（Supabase）

認証・データ保存はブラウザから Supabase を直接呼び出します（サーバー側の実装は不要）。
接続情報は `public/tanakan-app.js` 先頭の `SUPABASE_URL` / `SUPABASE_KEY`（anon 公開キー）に記載。

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
