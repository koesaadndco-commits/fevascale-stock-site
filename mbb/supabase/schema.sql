-- =====================================================================
--  My Brain Bank（GCMBB）SUPABASE 移行用テーブル定義
-- =====================================================================
--  mbb.js の保存先は現在ブラウザのlocalStorageです。社内の全員で投稿・
--  ランキング・コインを共有するには、棚簡アプリと同じSupabaseにテーブルを
--  追加し、localStorage部分を sb.from(...) に置き換えます。
--  このSQLをSupabaseの SQL Editor で実行してください
--  （テーブルだけ用意すれば移行の土台になります）。
-- =====================================================================

create table if not exists fc_users (
  name text primary key,
  store text,                 -- 所属店舗ID（config.stores）
  dept text,
  joined_at timestamptz default now()
);

create table if not exists fc_posts (
  id text primary key,
  user_name text references fc_users(name),
  course_id text,
  course_title text,
  learn text,
  action text,
  watch_min int,
  coins_awarded int default 0,
  likes jsonb default '[]'::jsonb,
  created_at timestamptz default now()
);

-- コイン台帳（全アプリ共有＝「努力の交換所」の残高の元）
-- 他アプリ（棚簡など）も、このテーブルに app 列を自分の名前にして
-- 付与レコードを insert すれば、GCMBBの残高に自動で合算されます。
create table if not exists fc_ledger (
  id text primary key,
  user_name text references fc_users(name),
  amount int not null,
  type text,
  reason text,
  app text default 'mbb',     -- コインの発生元アプリ（mbb / tanakan など）
  created_at timestamptz default now()
);

create table if not exists fc_redemptions (
  id text primary key,
  user_name text references fc_users(name),
  reward_id text,
  title text,
  cost int,
  status text default 'requested',
  created_at timestamptz default now()
);

-- 設定（コース／景品／コインルール）は1行のJSONで保持します。
create table if not exists fc_config (
  key text primary key,
  value jsonb
);

-- ※ アクセス制御（RLS）について
--   新規テーブルは既定でRLSが無効＝anonキーで読み書きできます（棚簡アプリと同じ方式）。
--   社内限定の簡易運用ならこのままでOK。より厳密にしたい場合は各テーブルで
--   alter table ... enable row level security; とポリシー追加を行ってください。

-- ＜次のステップ案＞
--  ・棚簡(index.html)のログイン(profiles/app_users)と連携して同じ社員IDで使う
--  ・店舗FevaCOIN(店舗表彰)と個人FevaCOIN(学習)を1つの残高に統合する
--  ・上長承認フロー・月次自動表彰・Slack/LINE通知 など
