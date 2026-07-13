import 'server-only';
import crypto from 'node:crypto';
import { cookies } from 'next/headers';
import { prisma } from './db';

export { hashPassword, verifyPassword, isHashed } from './password';

// =========================================================
// 個人アカウント認証（Supabase Auth の置き換え）
//   - パスワードは scrypt でハッシュ化して app_users.password に保存
//   - ログイン状態は HMAC 署名した Cookie セッションで保持
//   Phase 2 の /api/auth/* から利用する。
// =========================================================

const COOKIE_NAME = 'fevascale_session';
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30日

function secret() {
  const s = process.env.APP_SECRET;
  if (!s) throw new Error('APP_SECRET が設定されていません（.env を確認してください）');
  return s;
}

// ---- セッショントークン（`${userId}.${exp}.${hmac}`） ----
function sign(value) {
  return crypto.createHmac('sha256', secret()).update(value).digest('base64url');
}

function createToken(userId) {
  const exp = Math.floor(Date.now() / 1000) + MAX_AGE_SECONDS;
  const payload = `${userId}.${exp}`;
  return `${payload}.${sign(payload)}`;
}

function verifyToken(token) {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [userId, expStr, mac] = parts;
  const payload = `${userId}.${expStr}`;
  const expected = sign(payload);
  const a = Buffer.from(mac);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  if (Number(expStr) < Math.floor(Date.now() / 1000)) return null;
  return userId;
}

// ---- Cookie 操作（Next.js App Router） ----
export async function setSession(userId) {
  const jar = await cookies();
  jar.set(COOKIE_NAME, createToken(userId), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE_SECONDS,
  });
}

export async function clearSession() {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
}

export async function getSessionUserId() {
  const jar = await cookies();
  return verifyToken(jar.get(COOKIE_NAME)?.value);
}

// 現在のログインユーザー（app_users）。未ログイン/無効なら null。
export async function getCurrentUser() {
  const id = await getSessionUserId();
  if (!id) return null;
  const u = await prisma.appUser.findUnique({ where: { id } });
  if (!u || u.archived) return null;
  return u;
}
