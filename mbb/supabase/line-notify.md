# 交換申請の LINE 通知（設定ガイド）

「努力の交換所」で景品交換の申請が入ったら、**管理者のLINEに自動でプッシュ**する構成です。

## 前提・結論

- **「LINE Notify」は 2025年3月末で終了**したため使えません。
- 現行の方法は **LINE公式アカウント（旧「LINE@」）＋ Messaging API** です。
  → **はい、LINE公式アカウントの作成が必要**です（無料プランでOK）。
- LINEのトークンは秘密情報なのでアプリ（ブラウザ）には置けません。
  **Supabaseの小さなサーバー関数（Edge Function）**からLINEに送信します。
- 申請が入ると Supabase が自動で関数を呼ぶ（DB Webhook）ので、**アプリ側の変更は不要**。
  棚簡など他アプリからの申請でも同じく通知されます。

## 必要なもの

1. LINE公式アカウント（LINE Official Account）
2. LINE Developers の Messaging API チャネル（＝チャネルアクセストークン）
3. 通知先（管理者個人 or 店長グループ）の LINE の宛先ID
4. Supabase（すでに利用中のプロジェクトでOK）

---

## 手順

### 1. LINE公式アカウントを作成
- LINE Official Account Manager（`manager.line.biz`）で公式アカウントを無料作成。

### 2. Messaging API を有効化してトークン取得
- LINE Developers（`developers.line.biz`）でプロバイダー→**Messaging APIチャネル**を作成
  （既存の公式アカウントと連携）。
- 「Messaging API設定」→ **チャネルアクセストークン（長期）** を発行して控える。

### 3. 通知先IDを用意
- **個人に送る場合**：管理者がその公式アカウントを「友だち追加」し、userId（`U`から始まる）を取得。
  （友だち追加やメッセージ時のWebhookで取得、または管理画面のテスト機能で確認）
- **グループに送る場合**：公式アカウントをLINEグループに招待し、groupId（`C`から始まる）を取得。

### 4. Edge Function をデプロイ
`mbb/supabase/functions/notify-line/index.ts` を Supabase にデプロイします。

```bash
# Supabase CLI（初回のみ）: npm i -g supabase && supabase login && supabase link --project-ref bvfpfbryzsavmilngxgr
supabase functions deploy notify-line --no-verify-jwt
supabase secrets set LINE_CHANNEL_ACCESS_TOKEN="＜手順2のトークン＞"
supabase secrets set LINE_ADMIN_TO="＜手順3のuserId または groupId＞"
```

### 5. 交換申請で自動通知（DB Webhook）
- Supabase ダッシュボード → **Database → Webhooks → Create**
  - Table: `fc_redemptions`
  - Events: **Insert**
  - Type: **Supabase Edge Functions** → `notify-line`
- 保存すると、交換申請（fc_redemptions への INSERT）のたびに関数が呼ばれ、LINEに届きます。

---

## Edge Function コード

`mbb/supabase/functions/notify-line/index.ts` に用意済み。要点：

```ts
const LINE_TOKEN = Deno.env.get("LINE_CHANNEL_ACCESS_TOKEN");
const TO = Deno.env.get("LINE_ADMIN_TO");
// Database Webhook から { record: <fc_redemptionsの行> } が届く
const r = payload.record ?? payload;
const text =
  `🎁 景品交換の申請\n` +
  `申請者: ${r.user_name}\n` +
  `景品: ${r.title}\n` +
  `コイン: ${r.cost}\n` +
  `GCMBBコンソール → 交換申請 で承認できます`;
await fetch("https://api.line.me/v2/bot/message/push", {
  method: "POST",
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${LINE_TOKEN}` },
  body: JSON.stringify({ to: TO, messages: [{ type: "text", text }] }),
});
```

---

## メール通知との違い

| 方式 | 事前準備 | 届き方 | 実装 |
|---|---|---|---|
| メール（実装済み） | なし | 申請時にメール作成画面が開く→送信 | 済 |
| LINE（この手順） | 公式アカウント＋関数デプロイ | 申請時に**自動でLINEにプッシュ** | 関数＋Webhook |

LINE は「アプリを開いていなくても自動で届く」ため、店舗スタッフに見逃されにくいのが利点です。
