import 'server-only';
import { PrismaClient } from '@prisma/client';

// Prisma クライアントはシングルトンで持つ（開発時のホットリロードで
// コネクションが増え続けるのを防ぐ）。Vercel/Neon 本番でも使い回す。
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.__fevascalePrisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.__fevascalePrisma = prisma;
}
