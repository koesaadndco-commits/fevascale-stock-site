import crypto from 'node:crypto';

// パスワードは scrypt でハッシュ化（ネイティブ依存なし）。
// 形式: `scrypt$<salt>$<hash>`

export function hashPassword(plain) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(String(plain), salt, 64).toString('hex');
  return `scrypt$${salt}$${hash}`;
}

export function verifyPassword(plain, stored) {
  if (!stored || typeof stored !== 'string') return false;
  const parts = stored.split('$');
  if (parts.length !== 3 || parts[0] !== 'scrypt') return false;
  const [, salt, hash] = parts;
  const calc = crypto.scryptSync(String(plain), salt, 64).toString('hex');
  const a = Buffer.from(calc, 'hex');
  const b = Buffer.from(hash, 'hex');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function isHashed(stored) {
  return typeof stored === 'string' && stored.startsWith('scrypt$');
}
