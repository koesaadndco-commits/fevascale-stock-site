import { getCurrentUser } from '@/lib/auth';
import { executeQuery } from '@/lib/dataApi';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// クライアントの Supabase 互換アダプタ（public/sb-adapter.js）からのクエリを実行。
export async function POST(req) {
  let spec;
  try {
    spec = await req.json();
  } catch {
    return Response.json({ data: null, error: { message: '不正なリクエストです' } }, { status: 400 });
  }
  const user = await getCurrentUser().catch(() => null);
  const result = await executeQuery(spec, user);
  return Response.json(result);
}
