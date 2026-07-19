import fs from 'node:fs';
import path from 'node:path';
import Script from 'next/script';

// Supabase 互換アダプタ（Postgres/Prisma バックエンド）は tanakan-app.js の
// トップレベル `supabase.createClient(...)` より前に window.supabase を定義する
// 必要がある。CDN 依存や next/script の読み込み順に左右されないよう、
// 同一オリジンのアダプタを <head> にインライン展開して同期実行する。
const BUILD = (process.env.VERCEL_GIT_COMMIT_SHA || String(Date.now())).slice(0, 8);
const ADAPTER_JS = fs.readFileSync(
  path.join(process.cwd(), 'public', 'sb-adapter.js'),
  'utf8',
);

export const metadata = {
  title: '棚卸管理プロダクト「FEVASCALE STOCK」',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/assets/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/app-icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/assets/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    title: 'FEVASCALE STOCK',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0f1c14',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=BIZ+UDPGothic:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Noto+Sans+JP:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        {/* 棚簡のスタイル（埋め込み base64 画像を含むため静的配信） */}
        <link rel="stylesheet" href={`/tanakan.css?v=${BUILD}`} />
        {/* Supabase 互換アダプタを同期実行（window.supabase.createClient を定義） */}
        <script dangerouslySetInnerHTML={{ __html: ADAPTER_JS }} />
      </head>
      <body>
        {children}
        {/* Excel 出力ライブラリ（グローバル XLSX）。未読込でも中核機能は動作する。 */}
        <Script
          src="https://cdn.jsdelivr.net/npm/xlsx-js-style@1.2.0/dist/xlsx.bundle.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
