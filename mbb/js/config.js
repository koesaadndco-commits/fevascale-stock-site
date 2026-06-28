/* My Brain Bank（GCMBB）接続設定
   ------------------------------------------------------------------
   全社で投稿・ランキング・コインを共有するための Supabase 接続先。
   ここでは棚簡アプリと同じ Supabase プロジェクトを利用します。
   別プロジェクトに分けたい場合は、下記2つを差し替えてください。

   ※ 共有を有効にするには、Supabase の SQL Editor で
     mbb/supabase/schema.sql を一度だけ実行してテーブルを作成してください。
     未作成・接続不可のときは自動でこの端末内(localStorage)保存に切り替わります。
*/
window.GCMBB_CONFIG = {
  SUPABASE_URL: 'https://bvfpfbryzsavmilngxgr.supabase.co',
  SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2ZnBmYnJ5enNhdm1pbG5neGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4Njg3MDIsImV4cCI6MjA5NTQ0NDcwMn0._EZDmFzXZD_NmUOA8LKbhvuu0eXGnprw_-13tW9X6Fs',
};
