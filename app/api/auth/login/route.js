import { prisma } from '@/lib/db';
import { verifyPassword, isHashed, hashPassword } from '@/lib/password';
import { setSession } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// ユーザーID + パスワードでログイン。
// 既存の平文パスワードは初回ログイン成功時に scrypt へ自動移行する。
export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const id = String(body.id || body.email || '').trim();
  const password = String(body.password || '');
  const fail = () => Response.json({ data: null, error: { message: 'IDまたはパスワードが違います' } });

  if (!id || !password) {
    return Response.json({ data: null, error: { message: 'IDとパスワードを入力してください' } });
  }

  let u;
  try {
    u = await prisma.appUser.findUnique({ where: { id } });
  } catch (e) {
    return Response.json({ data: null, error: { message: 'サーバーエラー: ' + (e.message || '') } }, { status: 500 });
  }
  if (!u || u.archived) return fail();

  let ok = false;
  if (isHashed(u.password)) {
    ok = verifyPassword(password, u.password);
  } else {
    ok = u.password === password; // 移行前の平文
    if (ok) {
      try { await prisma.appUser.update({ where: { id: u.id }, data: { password: hashPassword(password) } }); } catch {}
    }
  }
  if (!ok) return fail();

  await setSession(u.id);
  const { password: _pw, ...safe } = u;
  return Response.json({ data: { user: safe, session: { user: { id: u.id } } }, error: null });
}
