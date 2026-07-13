import Script from 'next/script';

export const metadata = {
  title: '株式会社アモーレながすぎ 棚卸管理プロダクト「棚簡」',
  appleWebApp: {
    capable: true,
    title: '棚簡',
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
        <link rel="stylesheet" href="/tanakan.css" />
      </head>
      <body>
        {children}
        {/* 外部ライブラリ（グローバル supabase / XLSX を定義）はアプリ本体より前に読み込む */}
        <Script
          src="https://cdn.jsdelivr.net/npm/xlsx-js-style@1.2.0/dist/xlsx.bundle.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
