import { prisma } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';
import { hashPassword } from '@/lib/password';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// ログイン中ユーザー自身のパスワード変更。
export async function POST(req) {
  const u = await getCurrentUser().catch(() => null);
  if (!u) return Response.json({ error: { message: 'ログインが必要です' } }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const newPassword = String(body.newPassword || body.password || '');
  if (newPassword.length < 8) {
    return Response.json({ error: { message: 'パスワードは8文字以上にしてください' } });
  }
  try {
    await prisma.appUser.update({ where: { id: u.id }, data: { password: hashPassword(newPassword) } });
  } catch (e) {
    return Response.json({ error: { message: 'サーバーエラー: ' + (e.message || '') } }, { status: 500 });
  }
  return Response.json({ error: null });
}
