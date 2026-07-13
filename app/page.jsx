import Script from 'next/script';

// 棚簡は #app にクライアント側で描画する SPA。
// マークアップの箱だけをここで用意し、アプリ本体 (public/tanakan-app.js) は
// ライブラリ読み込み後・ハイドレーション後に実行する。
export default function Page() {
  return (
    <>
      <div id="app" suppressHydrationWarning>
        <div className="loading">読み込み中</div>
      </div>

      <div id="print-area" className="print-area" suppressHydrationWarning />

      <Script src="/tanakan-app.js" strategy="afterInteractive" />
    </>
  );
}
