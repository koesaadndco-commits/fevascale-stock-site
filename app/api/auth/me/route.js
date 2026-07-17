import { getCurrentUser } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// 現在のセッション。未ログインなら session: null。
export async function GET() {
  const u = await getCurrentUser().catch(() => null);
  if (!u) return Response.json({ data: { session: null }, error: null });
  const { password: _pw, ...safe } = u;
  return Response.json({ data: { session: { user: safe } }, error: null });
}
