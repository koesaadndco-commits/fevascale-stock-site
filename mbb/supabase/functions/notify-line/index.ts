// Supabase Edge Function: notify-line
// 交換申請(fc_redemptions への INSERT)を Database Webhook で受け取り、
// 管理者のLINEにプッシュ通知する。
// デプロイ・設定手順は mbb/supabase/line-notify.md を参照。
//
//   supabase functions deploy notify-line --no-verify-jwt
//   supabase secrets set LINE_CHANNEL_ACCESS_TOKEN="..."
//   supabase secrets set LINE_ADMIN_TO="Uxxxx or Cxxxx"

const LINE_TOKEN = Deno.env.get("LINE_CHANNEL_ACCESS_TOKEN") ?? "";
const TO = Deno.env.get("LINE_ADMIN_TO") ?? "";

Deno.serve(async (req) => {
  try {
    const payload = await req.json();
    // Database Webhook は { type, table, record, old_record } を送る。
    // 手動テスト時はそのまま行データを送ってもよい。
    const r = payload.record ?? payload;

    const text =
      "🎁 景品交換の申請\n" +
      `申請者: ${r.user_name ?? "-"}\n` +
      `景品: ${r.title ?? "-"}\n` +
      `コイン: ${r.cost ?? "-"} FevaCOIN\n` +
      "GCMBBコンソール → 交換申請 で承認できます";

    if (!LINE_TOKEN || !TO) {
      return new Response(
        JSON.stringify({ ok: false, error: "LINE_CHANNEL_ACCESS_TOKEN / LINE_ADMIN_TO 未設定" }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }

    const res = await fetch("https://api.line.me/v2/bot/message/push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LINE_TOKEN}`,
      },
      body: JSON.stringify({ to: TO, messages: [{ type: "text", text }] }),
    });

    return new Response(JSON.stringify({ ok: res.ok, status: res.status }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String(e) }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
});
