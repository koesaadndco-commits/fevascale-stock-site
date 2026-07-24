# My Brain Bank（GCMBB）

グロースカレッジ（[growthcollege.jp](https://www.growthcollege.jp)）の動画で学習し、
学びを投稿すると **FevaCOIN が「貯まる」＋ガチャで「当たる」** 個人向け学習リワードアプリです。

## 使い方

`index.html` をブラウザで開くだけで動作します（ビルド不要・外部依存なし）。

GitHub Pages 公開時は `…/mbb/` で開けます。

## フォルダ構成

```
mbb/
├── index.html          エントリ（マークアップ）
├── css/
│   └── style.css       スタイル
├── js/
│   └── app.js          アプリ本体（バニラJS）
├── assets/
│   └── logo.png        ロゴ
└── supabase/
    └── schema.sql      全社共有用のテーブル定義（移行時に使用）
```

## 主な機能

- ホーム：FevaCOIN残高 / レベル / 連続学習ストリーク / 今日の学び状況
- 学ぶ：学習テーマ一覧とグロースカレッジへのリンク
- 投稿：学び・実践宣言を投稿 → コインガチャで獲得
- フィード：みんなの学びといいね
- ランキング：今月／通算の獲得コイン順
- 交換：コインを景品と交換
- 管理：コース・景品・コイン設定の編集

## データ保存

現在はブラウザの **localStorage** に保存します（端末ごと）。
社内の全員で投稿・ランキング・コインを共有する場合は、`supabase/schema.sql`
のテーブルを Supabase に作成し、`js/app.js` の保存処理を Supabase 連携へ
置き換えます。
