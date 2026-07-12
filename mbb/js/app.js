/* =========================================================================
   My Brain Bank（GCMBB）／グロースカレッジ — 学んでFevaCOINを貯めよう
   Growth College(growthcollege.jp)で動画学習 → 学びを投稿 → FevaCOINが
   「貯まる」＋ガチャで「当たる」個人向け学習リワードアプリ。

   データはこの端末のブラウザ(localStorage)に保存されます。複数人・複数端末で
   共有するにはバックエンド(Supabase等)が必要です。ファイル末尾の SUPABASE
   コメントに移行用のテーブル定義(SQL)を記載しています。
   ========================================================================= */

const STORE_KEY = 'FEVA_COLLEGE_v1';
// グロースカレッジLMSのログイン画面（すべての動画の入口）
const GROWTH_URL = 'https://lms.growthcollege.jp/auth/login';

/* ---------- 初期データ（管理者が編集可能） ---------- */
const SEED_COURSES = [
  { id:'c-lead',   icon:'🧭', title:'リーダーシップ',       cat:'マネジメント', desc:'チームを導く考え方・部下育成' },
  { id:'c-mng',    icon:'📊', title:'マネジメント基礎',     cat:'マネジメント', desc:'目標設定・PDCA・数値管理' },
  { id:'c-cs',     icon:'🤝', title:'接客・CS向上',          cat:'店舗運営',     desc:'おもてなし・クレーム対応' },
  { id:'c-sales',  icon:'📈', title:'売上づくり・販促',      cat:'店舗運営',     desc:'客単価UP・リピート施策' },
  { id:'c-mkt',    icon:'📣', title:'マーケティング',        cat:'ビジネス',     desc:'集客・SNS・ブランディング' },
  { id:'c-fin',    icon:'💴', title:'数字に強くなる(財務)',  cat:'ビジネス',     desc:'損益・原価・利益の見方' },
  { id:'c-hygiene',icon:'🧼', title:'衛生・食品安全',        cat:'店舗運営',     desc:'HACCP・クレンリネス' },
  { id:'c-dx',     icon:'💻', title:'DX・IT活用',            cat:'ビジネス',     desc:'業務効率化・データ活用' },
  { id:'c-mind',   icon:'🌱', title:'自己成長・マインド',    cat:'自己啓発',     desc:'習慣化・目標達成・思考法' },
  { id:'c-comm',   icon:'💬', title:'コミュニケーション',    cat:'自己啓発',     desc:'報連相・1on1・対話力' },
  { id:'c-video',  icon:'🎬', title:'動画編集・コンテンツ制作',cat:'実務スキル',  desc:'撮影・編集・テロップ・発信' },
  { id:'c-doc',    icon:'📝', title:'資料作成・プレゼン',     cat:'実務スキル',   desc:'スライド・伝わる構成' },
  { id:'c-sns',    icon:'📱', title:'SNS運用・情報発信',      cat:'実務スキル',   desc:'投稿企画・運用・分析' },
  { id:'c-share',  icon:'🔄', title:'学び共有・ナレッジ共有',  cat:'自己啓発',     desc:'学びをチームに伝える・横展開' },
];
const SEED_REWARDS = [
  { id:'r-amazon1k', icon:'🎁', title:'Amazonギフト 1,000円分', cost:30, desc:'人気No.1' },
  { id:'r-book',     icon:'📚', title:'図書カード 1,000円分',   cost:25, desc:'学びを次の学びへ' },
  { id:'r-lunch',    icon:'🍱', title:'ランチ補助券 1,000円',   cost:25, desc:'お昼に使える' },
  { id:'r-coffee',   icon:'☕', title:'カフェチケット 500円',   cost:12, desc:'ちょっと一息' },
  { id:'r-half',     icon:'🌴', title:'半休チケット',           cost:60, desc:'頑張った自分にご褒美' },
  { id:'r-award',    icon:'🏆', title:'社内表彰ノミネート',     cost:20, desc:'全社で称賛' },
];
const SEED_RULES = {
  base: 1,             // 学び投稿の基本付与（コイン）
  streakBonusPer: 0.1, // 連続学習1日あたりのボーナス
  streakBonusMax: 7,   // ボーナス対象の連続日数上限（日）
  likeGive: 0.1,       // いいねを送ると送り手に付与
  likeGiveMax: 10,     // 1日にいいねで稼げる回数上限
  likeReceive: 0.2,    // いいねされると投稿者に付与
  postsPerDayCoin: 3,  // 1日にコイン付与される投稿数の上限
  // ガチャ：投稿のたびに回る。0.1単位・最大2.0コイン。tier=結果, w=重み, bonus=加算コイン
  gacha: [
    { key:'g01', label:'0.1コイン',  color:'#94a3b8', w:32, bonus:0.1 },
    { key:'g02', label:'0.2コイン',  color:'#64748b', w:24, bonus:0.2 },
    { key:'g03', label:'0.3コイン',  color:'#0ea5e9', w:18, bonus:0.3 },
    { key:'g05', label:'0.5コイン',  color:'#d97706', w:13, bonus:0.5 },
    { key:'g10', label:'1.0コイン',  color:'#7c3aed', w:8,  bonus:1.0 },
    { key:'g15', label:'1.5コイン',  color:'#db2777', w:4,  bonus:1.5 },
    { key:'g20', label:'★2コイン★', color:'#dc2626', w:1,  bonus:2.0 },
  ],
};
const LEVELS = [
  { lv:1, name:'見習い',     min:0 },
  { lv:2, name:'学習者',     min:10 },
  { lv:3, name:'実践者',     min:30 },
  { lv:4, name:'達人',       min:80 },
  { lv:5, name:'マスター',   min:150 },
  { lv:6, name:'レジェンド', min:300 },
];
const AVATAR_COLORS = ['#ef4444','#f59e0b','#10b981','#3b82f6','#8b5cf6','#ec4899','#14b8a6','#f97316'];
const SEED_STORES = [
  { id:'s-honten',   name:'本店' },
  { id:'s-kanazawa', name:'金沢支店' },
  { id:'s-toyama',   name:'富山支店' },
];
const DEFAULT_ADMIN = { passcode:'admin2564', email:'' }; // 管理者コンソールのパスコード＋交換申請の通知先メール
// 初期メンバー（ID＋パスワードでログイン。以後はコンソールで追加）
function seedMembers(){
  const now=new Date().toISOString();
  return {
    '管理者':    { name:'管理者',    loginId:'admin',  password:'admin2564', store:'s-honten',   role:'admin',  joinedAt:now },
    '山田 太郎': { name:'山田 太郎', loginId:'yamada', password:'1111',      store:'s-honten',   role:'member', joinedAt:now },
    '佐藤 花子': { name:'佐藤 花子', loginId:'sato',   password:'1111',      store:'s-kanazawa', role:'member', joinedAt:now },
  };
}

/* ---------- ストレージ ---------- */
function freshDB(){
  return {
    currentUser: null,
    users: seedMembers(),  // name -> { name, loginId, password, store, storeName, role, joinedAt }
    posts: [],        // { id, user, courseId, courseTitle, learn, action, watchMin, createdAt, likes:[name], coinsAwarded }
    ledger: [],       // { id, user, amount, type, reason, app, createdAt }
    redemptions: [],  // { id, user, rewardId, title, cost, status, createdAt }
    config: {
      courses: deepCopy(SEED_COURSES),
      rewards: deepCopy(SEED_REWARDS),   // 各景品に store:'' (全社共通) or storeId
      rules:   deepCopy(SEED_RULES),     // 全社共通のデフォルト
      stores:  deepCopy(SEED_STORES),
      storeRules: {},                    // { storeId: { base?, streakBonusPer?, ... } } 店舗別上書き
      admin:   deepCopy(DEFAULT_ADMIN),
    },
  };
}
function deepCopy(o){ return JSON.parse(JSON.stringify(o)); }
let DB = loadDB();
function loadDB(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(!raw) return freshDB();
    const d = JSON.parse(raw);
    // 後方互換: 不足キーを補完
    const base = freshDB();
    d.users = d.users || {}; d.posts = d.posts || []; d.ledger = d.ledger || []; d.redemptions = d.redemptions || [];
    d.config = d.config || base.config;
    d.config.courses = d.config.courses || base.config.courses;
    d.config.rewards = d.config.rewards || base.config.rewards;
    d.config.rules   = Object.assign({}, base.config.rules, d.config.rules || {});
    d.config.stores  = d.config.stores || base.config.stores;
    d.config.storeRules = d.config.storeRules || {};
    d.config.admin   = Object.assign({}, base.config.admin, d.config.admin || {});
    return d;
  }catch(e){ return freshDB(); }
}
function saveDB(){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(DB)); }catch(e){ toast('保存に失敗しました','error'); } }

/* ============================ Remote（Supabase 共有同期） ============================
   Supabaseが使えれば全社共有、使えなければ自動でローカル(localStorage)のみ。
   ・起動時に全件ロード → 以後の変更は楽観的にローカル反映＋裏でSupabaseへupsert
   ・home/feed/rank表示中は定期的に再取得して最新化
   ================================================================================= */
let syncStatus = 'local'; // 'local' | 'cloud'
const Remote = (function(){
  let sb=null;
  // ---- ローカル⇔リモートの変換 ----
  const toUser = (name)=>{ const u=DB.users[name]||{}; return { name, login_id:u.loginId||null, password:u.password||null, role:u.role||'member', store:u.store||null, dept:u.dept||null, joined_at:u.joinedAt||new Date().toISOString() }; };
  const fromUser = (r)=>[r.name, { name:r.name, loginId:r.login_id||'', password:r.password||'', role:r.role||'member', store:r.store||'', storeName:'', dept:r.dept||'', joinedAt:r.joined_at }];
  const toPost = (p)=>({ id:p.id, user_name:p.user, course_id:p.courseId, course_title:p.courseTitle, learn:p.learn, action:p.action, watch_min:p.watchMin, coins_awarded:p.coinsAwarded, likes:p.likes||[], created_at:p.createdAt });
  const fromPost = (r)=>({ id:r.id, user:r.user_name, courseId:r.course_id, courseTitle:r.course_title, learn:r.learn, action:r.action, watchMin:r.watch_min, coinsAwarded:r.coins_awarded||0, likes:r.likes||[], createdAt:r.created_at });
  const toLedger = (l)=>({ id:l.id, user_name:l.user, amount:l.amount, type:l.type, reason:l.reason, app:l.app||'mbb', created_at:l.createdAt });
  const fromLedger = (r)=>({ id:r.id, user:r.user_name, amount:r.amount, type:r.type, reason:r.reason, app:r.app||'mbb', createdAt:r.created_at });
  const toRedemption = (x)=>({ id:x.id, user_name:x.user, reward_id:x.rewardId, title:x.title, cost:x.cost, status:x.status, created_at:x.createdAt });
  const fromRedemption = (r)=>({ id:r.id, user:r.user_name, rewardId:r.reward_id, title:r.title, cost:r.cost, status:r.status, createdAt:r.created_at });

  function init(){
    const cfg=window.GCMBB_CONFIG;
    if(!cfg || !cfg.SUPABASE_URL || typeof supabase==='undefined' || !supabase.createClient) return false;
    try{ sb=supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_KEY); return true; }catch(e){ sb=null; return false; }
  }
  async function probe(){
    if(!sb) return false;
    try{ const { error } = await sb.from('fc_users').select('name').limit(1); return !error; }catch(e){ return false; }
  }
  async function loadAll(){
    if(!sb) return false;
    try{
      const [u,p,l,rd,cf] = await Promise.all([
        sb.from('fc_users').select('*'),
        sb.from('fc_posts').select('*'),
        sb.from('fc_ledger').select('*'),
        sb.from('fc_redemptions').select('*'),
        sb.from('fc_config').select('*').eq('key','config').maybeSingle(),
      ]);
      if(u.error||p.error||l.error||rd.error) return false;
      DB.users = Object.fromEntries((u.data||[]).map(fromUser));
      DB.posts = (p.data||[]).map(fromPost);
      DB.ledger = (l.data||[]).map(fromLedger);
      DB.redemptions = (rd.data||[]).map(fromRedemption);
      if(cf && cf.data && cf.data.value){ const base=freshDB().config; const v=cf.data.value;
        DB.config = {
          courses: v.courses||base.courses,
          rewards: v.rewards||base.rewards,
          rules:   Object.assign({}, base.rules, v.rules||{}),
          stores:  v.stores||base.stores,
          storeRules: v.storeRules||{},
          admin:   Object.assign({}, base.admin, v.admin||{}),
        }; }
      saveDB();
      return true;
    }catch(e){ return false; }
  }
  function up(table, row, conflict){ if(!sb||syncStatus!=='cloud') return; try{ sb.from(table).upsert([row], conflict?{onConflict:conflict}:undefined).then(()=>{}, ()=>{}); }catch(e){} }
  function del(table, id){ if(!sb||syncStatus!=='cloud') return; try{ sb.from(table).delete().eq('id', id).then(()=>{}, ()=>{}); }catch(e){} }

  return {
    init, probe, loadAll,
    available: ()=>!!sb && syncStatus==='cloud',
    pushUser: (name)=> up('fc_users', toUser(name), 'name'),
    pushPost: (p)=> up('fc_posts', toPost(p), 'id'),
    pushLedger: (l)=> up('fc_ledger', toLedger(l), 'id'),
    pushRedemption: (x)=> up('fc_redemptions', toRedemption(x), 'id'),
    pushConfig: ()=> up('fc_config', { key:'config', value:{ courses:DB.config.courses, rewards:DB.config.rewards, rules:DB.config.rules, stores:DB.config.stores, storeRules:DB.config.storeRules, admin:DB.config.admin } }, 'key'),
  };
})();

let _poll=null;
function startPolling(){
  if(_poll) return;
  _poll=setInterval(()=>{
    if(syncStatus!=='cloud' || document.hidden) return;
    if(document.querySelector('.modal-back')) return;
    const ae=document.activeElement;
    if(ae && ['INPUT','TEXTAREA','SELECT'].includes(ae.tagName)) return;
    if(!['home','feed','rank'].includes(VIEW)) return;
    Remote.loadAll().then(ok=>{ if(ok) render(); }).catch(()=>{});
  }, 25000);
}
async function initSync(){
  if(!Remote.init()) { syncStatus='local'; return; }
  const ok = await Remote.probe();
  if(!ok){ syncStatus='local'; render(); return; }
  syncStatus='cloud';
  await Remote.loadAll();
  if(DB.currentUser && !DB.users[DB.currentUser]) DB.users[DB.currentUser]={ dept:'', joinedAt:new Date().toISOString() };
  render();
  startPolling();
}

/* ---------- 小物 ---------- */
function uid(){ return Date.now().toString(36) + Math.floor(Math.random()*1e6).toString(36); }
function escapeHtml(s){ return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function nl2br(s){ return escapeHtml(s).replace(/\n/g,'<br>'); }
function todayStr(d){ const x=d?new Date(d):new Date(); return x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0'); }
function ym(d){ const x=d?new Date(d):new Date(); return x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0'); }
function round1(n){ return Math.round((Number(n)||0)*10)/10; }
// コイン表示（0.1単位。整数はそのまま、小数は1桁）
function fmtCoin(n){ const r=round1(n); return Number.isInteger(r) ? r.toLocaleString('ja-JP') : r.toFixed(1); }
// 旧来のコイン表示呼び出しも小数対応にする（呼び出し箇所はすべてコイン額）
function fmtNum(n){ return fmtCoin(n); }
function timeAgo(iso){
  const diff = (Date.now()-new Date(iso).getTime())/1000;
  if(diff<60) return 'たった今';
  if(diff<3600) return Math.floor(diff/60)+'分前';
  if(diff<86400) return Math.floor(diff/3600)+'時間前';
  if(diff<7*86400) return Math.floor(diff/86400)+'日前';
  const d=new Date(iso); return (d.getMonth()+1)+'/'+d.getDate();
}
function avatarColor(name){ let h=0; for(const ch of String(name)) h=(h*31+ch.charCodeAt(0))%AVATAR_COLORS.length; return AVATAR_COLORS[h]; }
function initials(name){ return String(name||'?').trim().slice(0,2); }

function toast(msg, kind){
  const root=document.getElementById('toast');
  const el=document.createElement('div'); el.className='toast'+(kind?(' '+kind):''); el.textContent=msg;
  root.appendChild(el);
  setTimeout(()=>{ el.style.transition='opacity .3s'; el.style.opacity='0'; setTimeout(()=>el.remove(),300); }, 2200);
}

/* ---------- コイン計算 ---------- */
function ledgerFor(user){ return DB.ledger.filter(l=>l.user===user); }
function balance(user){ return ledgerFor(user).reduce((a,b)=>a+b.amount,0); }
function totalEarned(user){ return ledgerFor(user).filter(l=>l.amount>0).reduce((a,b)=>a+b.amount,0); }
function levelOf(earned){
  let cur=LEVELS[0];
  for(const l of LEVELS){ if(earned>=l.min) cur=l; }
  const next=LEVELS.find(l=>l.min>earned)||null;
  return { ...cur, next, earned };
}
function addLedger(user, amount, type, reason){
  const row={ id:uid(), user, amount:round1(amount), type, reason, app:'mbb', createdAt:new Date().toISOString() };
  DB.ledger.push(row);
  Remote.pushLedger(row);
  return row;
}
function postsByUser(user){ return DB.posts.filter(p=>p.user===user); }
function postsToday(user){ const t=todayStr(); return DB.posts.filter(p=>p.user===user && todayStr(p.createdAt)===t); }
function likesGivenToday(user){
  const t=todayStr();
  return DB.ledger.filter(l=>l.user===user && l.type==='like-give' && todayStr(l.createdAt)===t).reduce((a,b)=>a+b.amount,0);
}
function streakOf(user){
  // 学習投稿のある連続日数（今日 or 昨日が起点）
  const days = new Set(postsByUser(user).map(p=>todayStr(p.createdAt)));
  if(days.size===0) return 0;
  let streak=0; const d=new Date();
  // 今日投稿が無ければ昨日起点
  if(!days.has(todayStr(d))) d.setDate(d.getDate()-1);
  while(days.has(todayStr(d))){ streak++; d.setDate(d.getDate()-1); }
  return streak;
}

/* ---------- 店舗・ルール・管理者 ---------- */
function storeList(){ return DB.config.stores || []; }
function storeName(id){ const s=storeList().find(x=>x.id===id); return s?s.name:''; }
function userStoreId(name){ const u=DB.users[name]||{}; return u.store||''; }
function userStoreName(name){ const u=DB.users[name]||{}; return storeName(u.store) || u.storeName || u.dept || ''; }
// 全社デフォルト＋店舗別上書きを合成したコインルール
function effectiveRules(name){
  const base=DB.config.rules||{};
  const ov=(DB.config.storeRules||{})[userStoreId(name)]||{};
  return Object.assign({}, base, ov);
}
// ユーザーが交換できる景品（全社共通＋自店舗）
function rewardsForUser(name){
  const sid=userStoreId(name);
  return (DB.config.rewards||[]).filter(r=>!r.store || r.store===sid);
}
// 管理者コンソール
let adminUnlocked=false;
function isAdmin(){ return adminUnlocked; }
const OVERRIDABLE_RULE_KEYS=['base','streakBonusPer','streakBonusMax','likeGive','likeGiveMax','likeReceive','postsPerDayCoin'];

/* ---------- ルーティング ---------- */
let VIEW = 'home';
function go(v){ VIEW=v; window.scrollTo(0,0); render(); }

/* ============================ RENDER ============================ */
function render(){
  const app=document.getElementById('app');
  if(!DB.currentUser){ app.innerHTML = renderLogin(); bind(); return; }
  const user=DB.currentUser;
  app.innerHTML = `
    ${renderTopbar(user)}
    <main>${renderView()}</main>
    ${renderNav()}
  `;
  bind();
}

function renderTopbar(user){
  return `<div class="topbar">
    <div class="logo"><img class="mark-img" src="assets/logo.png" alt="MBB"><div><b>My Brain Bank</b><small>GCMBB｜グロースカレッジ</small></div></div>
    <div class="spacer"></div>
    <span class="user-chip sync-chip ${syncStatus}" data-act="refresh" title="${syncStatus==='cloud'?'全社で共有中・タップで更新':'この端末内に保存中'}">${syncStatus==='cloud'?'☁️ 共有':'📵 端末'}</span>
    <span class="coin-pill"><span class="c">🪙</span><span>${fmtNum(balance(user))}</span></span>
    <span class="user-chip" data-act="profile">${escapeHtml(user)} ▾</span>
  </div>`;
}

function renderNav(){
  const items=[
    ['home','ホーム','🏠'],
    ['learn','学ぶ','▶️'],
    ['post','投稿','✍️'],
    ['feed','フィード','📰'],
    ['rank','ランキング','🏆'],
    ['shop','交換所','🏪'],
  ];
  return `<div class="bottomnav">${items.map(([v,l,i])=>
    `<button data-go="${v}" class="${VIEW===v?'active':''}"><span class="i">${i}</span><span>${l}</span></button>`).join('')}</div>`;
}

function renderView(){
  switch(VIEW){
    case 'home':   return viewHome();
    case 'learn':  return viewLearn();
    case 'post':   return viewPost();
    case 'feed':   return viewFeed();
    case 'rank':   return viewRank();
    case 'shop':   return viewShop();
    case 'history':return viewHistory();
    case 'console':return viewConsole();
    case 'profile':return viewProfile();
    default:       return viewHome();
  }
}

/* ---------------- Login ---------------- */
function renderLogin(){
  return `<div class="login-wrap"><div class="login-shell">
    <div class="login-hero">
      <img class="logo-img" src="assets/logo.png" alt="My Brain Bank">

      <h1>My Brain Bank</h1>
      <p><b>GCMBB｜グロースカレッジ</b><br>動画で学んで、学びを投稿。<br>知識とFevaCOINが貯まる。当たる。</p>
    </div>
    <div class="login-card">
      <label class="field">ログインID</label>
      <div class="field-wrap"><input class="input" id="login-id" placeholder="ID（例：yamada）" autocomplete="username"></div>
      <label class="field">パスワード</label>
      <div class="field-wrap"><input class="input" id="login-pass" type="password" placeholder="パスワード" autocomplete="current-password"></div>
      <button class="btn btn-primary btn-block btn-lg" style="margin-top:14px;" data-act="login-idpass">ログイン 🔑</button>
      <p class="muted small" style="text-align:center;margin-top:12px;">アカウントは管理者が発行します</p>
    </div>
  </div></div>`;
}

/* ---------------- Home ---------------- */
function viewHome(){
  const user=DB.currentUser;
  const bal=balance(user), earned=totalEarned(user), lv=levelOf(earned), streak=streakOf(user);
  const myPosts=postsByUser(user).length;
  const postedToday = postsToday(user).length>0;
  const progPct = lv.next ? Math.min(100, Math.round((earned-lv.min)/(lv.next.min-lv.min)*100)) : 100;

  const recent = [...DB.posts].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).slice(0,3);

  return `
  <div class="hero">
    <div class="hello">こんにちは、${escapeHtml(user)} さん</div>
    <div class="bal"><span class="n">${fmtNum(bal)}</span><span class="u">FevaCOIN 🪙</span></div>
    <div class="stats">
      <div class="stat"><div class="lab">レベル</div><div class="val">Lv.${lv.lv} ${escapeHtml(lv.name)}</div></div>
      <div class="stat"><div class="lab">連続学習</div><div class="val">🔥 ${streak}日</div></div>
      <div class="stat"><div class="lab">投稿数</div><div class="val">${myPosts}件</div></div>
    </div>
    <div class="lvlbar"><i style="width:${progPct}%"></i></div>
    <div class="lvl-row"><span>累計 ${fmtNum(earned)} 獲得</span><span>${lv.next? '次のLvまで '+fmtNum(lv.next.min-earned) : '最高レベル達成！'}</span></div>
  </div>

  <div class="card" style="text-align:center;background:linear-gradient(135deg,#fffbeb,#fef3c7);border-color:#fde68a;">
    ${postedToday
      ? `<div style="font-size:30px;">✅</div><h2 style="justify-content:center;color:#92400e;">今日の学び、投稿済み！</h2><p class="muted">明日も続けて連続ボーナスを伸ばそう。もう1本見て追加投稿もOK。</p>`
      : `<div style="font-size:30px;">📚</div><h2 style="justify-content:center;color:#92400e;">今日の学びを投稿しよう</h2><p class="muted">動画を1本見て、学びを投稿するとFevaCOINが当たる！</p>`}
    <div class="row" style="justify-content:center;gap:10px;margin-top:14px;flex-wrap:wrap;">
      <button class="btn btn-primary" data-go="post">✍️ 学びを投稿する</button>
      <a class="btn btn-secondary" href="${GROWTH_URL}" target="_blank" rel="noopener">▶️ グロースカレッジにログイン</a>
    </div>
  </div>

  <div class="sec-title">みんなの最近の学び</div>
  <div class="card">
    ${recent.length? recent.map(renderPostHTML).join('') : `<div class="empty">まだ投稿がありません。最初の学びを投稿しよう！</div>`}
    <div style="text-align:center;margin-top:8px;"><button class="btn btn-ghost btn-sm" data-go="feed">フィードをすべて見る →</button></div>
  </div>

  <div class="row" style="gap:10px;">
    <button class="btn btn-secondary grow" data-go="history">🪙 コイン履歴</button>
    <button class="btn btn-secondary grow" data-go="rank">🏆 ランキング</button>
  </div>`;
}

/* ---------------- Learn ---------------- */
function viewLearn(){
  const cats=[...new Set(DB.config.courses.map(c=>c.cat))];
  return `
  <div class="sec-title">グロースカレッジで学ぶ</div>
  <div class="card" style="background:linear-gradient(135deg,#11203b,#13294a);color:#fff;border-color:#1e3a5f;">
    <h2 style="color:#fff;">▶️ 動画を視聴 → 学びを投稿</h2>
    <p style="color:#9fb3cc;font-size:13px;">まずグロースカレッジのログイン画面から入り、動画を視聴。見終わったら「学びを投稿」から記録するとFevaCOINがもらえます。</p>
    <a class="btn btn-primary" style="margin-top:12px;" href="${GROWTH_URL}" target="_blank" rel="noopener">🔑 グロースカレッジにログイン ↗</a>
  </div>
  ${cats.map(cat=>`
    <div class="card">
      <h3>${escapeHtml(cat)}</h3>
      ${DB.config.courses.filter(c=>c.cat===cat).map(c=>`
        <div class="course">
          <div class="ic">${c.icon||'📘'}</div>
          <div class="body">
            <div class="t">${escapeHtml(c.title)}</div>
            <div class="d">${escapeHtml(c.desc||'')}</div>
          </div>
          <div class="acts">
            <a class="btn btn-secondary btn-sm" href="${GROWTH_URL}" target="_blank" rel="noopener">視聴 ↗</a>
            <button class="btn btn-primary btn-sm" data-act="post-course" data-id="${c.id}">学びを投稿</button>
          </div>
        </div>`).join('')}
    </div>`).join('')}
  `;
}

/* ---------------- Post ---------------- */
let postDraftCourse='';
function viewPost(){
  const courses=DB.config.courses;
  const r=effectiveRules(DB.currentUser);
  return `
  <div class="sec-title">学びを投稿する</div>
  <div class="card">
    <div class="field-wrap">
      <label class="field">どの動画・テーマを学びましたか？</label>
      <select class="select" id="post-course">
        <option value="">— テーマを選択 —</option>
        ${courses.map(c=>`<option value="${c.id}" ${postDraftCourse===c.id?'selected':''}>${escapeHtml(c.icon+' '+c.title)}</option>`).join('')}
        <option value="__free__" ${postDraftCourse==='__free__'?'selected':''}>その他（自由入力）</option>
      </select>
    </div>
    <div class="field-wrap" id="post-free-wrap" style="display:${postDraftCourse==='__free__'?'block':'none'}">
      <label class="field">テーマ名（自由入力）</label>
      <input class="input" id="post-free" placeholder="例：朝礼スピーチの作り方">
    </div>
    <div class="field-wrap">
      <label class="field">学び・気づき <span class="muted small">（必須）</span></label>
      <textarea class="textarea" id="post-learn" placeholder="動画から学んだこと、印象に残ったことを書きましょう。"></textarea>
    </div>
    <div class="field-wrap">
      <label class="field">明日からの実践宣言 <span class="muted small">（任意）</span></label>
      <textarea class="textarea" id="post-action" style="min-height:64px;" placeholder="例：朝礼で学んだ3つのポイントを実践する"></textarea>
    </div>
    <div class="field-wrap">
      <label class="field">視聴時間（分・任意）</label>
      <input class="input" id="post-min" type="number" inputmode="numeric" min="0" placeholder="例：15">
    </div>
    <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:12px;padding:12px;font-size:13px;color:#92400e;margin-top:4px;">
      投稿すると <b>基本 ${fmtCoin(r.base)}🪙</b> ＋ 連続学習ボーナス ＋ <b>コインガチャ</b>で最大 <b>${fmtCoin(Math.max(...r.gacha.map(g=>g.bonus)))}🪙</b> が当たる！
    </div>
    <button class="btn btn-primary btn-block btn-lg" style="margin-top:14px;" data-act="submit-post">🪙 投稿してコインを獲得</button>
    <p class="muted small" style="margin-top:8px;text-align:center;">コイン付与は1日 ${r.postsPerDayCoin} 投稿まで（それ以上は記録のみ）</p>
  </div>`;
}

/* ---------------- Feed ---------------- */
function renderPostHTML(p){
  const me=DB.currentUser;
  const liked=(p.likes||[]).includes(me);
  const courseLabel = p.courseTitle || 'その他';
  return `<div class="post">
    <div class="head">
      <div class="avatar" style="background:${avatarColor(p.user)}">${escapeHtml(initials(p.user))}</div>
      <div class="grow">
        <div class="who">${escapeHtml(p.user)} <span class="meta">${escapeHtml(userStoreName(p.user)||'')}</span></div>
        <div class="meta">${timeAgo(p.createdAt)}</div>
      </div>
    </div>
    <div class="course-chip">📘 ${escapeHtml(courseLabel)}${p.watchMin?` ・ ${p.watchMin}分`:''}</div>
    <div class="learn">${nl2br(p.learn)}</div>
    ${p.action? `<div class="action"><b>🎯 実践宣言：</b>${nl2br(p.action)}</div>`:''}
    <div class="foot">
      <button class="like-btn ${liked?'on':''}" data-act="like" data-id="${p.id}">${liked?'❤️':'🤍'} <span>${(p.likes||[]).length||''}</span> いいね</button>
    </div>
  </div>`;
}
function viewFeed(){
  const posts=[...DB.posts].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  return `
  <div class="sec-title">みんなの学び</div>
  <div class="card">
    ${posts.length? posts.map(renderPostHTML).join('') : `<div class="empty">まだ投稿がありません。<br>最初の学びを投稿してみんなに共有しよう！</div>`}
  </div>`;
}

/* ---------------- Ranking ---------------- */
let rankTab='month';
let rankStore='all'; // 'all' | storeId
function viewRank(){
  const me=DB.currentUser;
  const isMonth=rankTab==='month';
  const scope = isMonth ? ym() : null;
  const inStore=(u)=> rankStore==='all' || userStoreId(u)===rankStore;
  // 集計
  const agg={};
  DB.ledger.forEach(l=>{ if(l.amount<=0) return; if(scope && ym(l.createdAt)!==scope) return; if(!inStore(l.user)) return; agg[l.user]=(agg[l.user]||0)+l.amount; });
  Object.keys(DB.users).forEach(u=>{ if(inStore(u) && agg[u]===undefined) agg[u]=0; });
  const rows=Object.entries(agg).sort((a,b)=>b[1]-a[1]);
  const postAgg={};
  DB.posts.forEach(p=>{ if(scope && ym(p.createdAt)!==scope) return; postAgg[p.user]=(postAgg[p.user]||0)+1; });
  const medal=(i)=> i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1);

  return `
  <div class="sec-title">ランキング</div>
  <div class="pill-tabs">
    <button class="${isMonth?'active':''}" data-act="rank-tab" data-v="month">今月（${ym()}）</button>
    <button class="${!isMonth?'active':''}" data-act="rank-tab" data-v="all">通算</button>
  </div>
  <div class="field-wrap" style="margin-bottom:12px;">
    <select class="select" id="rank-store" data-act="rank-store">
      <option value="all" ${rankStore==='all'?'selected':''}>🏢 全店舗</option>
      ${storeList().map(s=>`<option value="${s.id}" ${rankStore===s.id?'selected':''}>${escapeHtml(s.name)}</option>`).join('')}
    </select>
  </div>
  <div class="card">
    <table class="rk-table">
      <thead><tr><th class="pos">順位</th><th>名前</th><th>店舗</th><th class="num">投稿</th><th class="num">獲得🪙</th></tr></thead>
      <tbody>
        ${rows.length? rows.map(([u,c],i)=>`
          <tr class="${u===me?'me':''} ${i===0?'rk1':''}">
            <td class="pos">${medal(i)}</td>
            <td><span class="avatar" style="width:24px;height:24px;font-size:11px;display:inline-flex;vertical-align:middle;background:${avatarColor(u)}">${escapeHtml(initials(u))}</span> ${escapeHtml(u)}</td>
            <td class="small muted">${escapeHtml(userStoreName(u)||'—')}</td>
            <td class="num">${postAgg[u]||0}</td>
            <td class="num">${fmtNum(c)}</td>
          </tr>`).join('') : `<tr><td colspan="5" class="empty">データがありません</td></tr>`}
      </tbody>
    </table>
  </div>
  <p class="muted small" style="text-align:center;">${isMonth?'今月':'通算'}・${rankStore==='all'?'全店舗':escapeHtml(storeName(rankStore))}で獲得したFevaCOINの合計で順位が決まります。</p>`;
}

/* ---------------- 努力の交換所 / Redeem ---------------- */
function viewShop(){
  const user=DB.currentUser, bal=balance(user);
  const myReds=DB.redemptions.filter(r=>r.user===user).sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  const stLabel=(s)=> s==='done'?'<span class="badge green">受け渡し済</span>': s==='approved'?'<span class="badge blue">承認済</span>':'<span class="badge gold">申請中</span>';
  const rewards=rewardsForUser(user);
  const earnedByApp={};
  ledgerFor(user).forEach(l=>{ if(l.amount>0){ const a=l.app||'mbb'; earnedByApp[a]=(earnedByApp[a]||0)+l.amount; } });
  const appLabel={ mbb:'📚 学び（GCMBB）', tanakan:'🏪 棚簡', store:'🏬 店舗' };
  return `
  <div class="sec-title">努力の交換所</div>
  <div class="card" style="text-align:center;background:linear-gradient(135deg,#11203b,#13294a);border-color:#1e3a5f;color:#fff;">
    <div style="color:#9fb3cc;font-size:13px;">交換に使えるFevaCOIN（全アプリ合算）</div>
    <div style="font-size:38px;font-weight:800;color:#fde68a;">🪙 ${fmtNum(bal)}</div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:8px;">
      ${Object.keys(earnedByApp).length? Object.entries(earnedByApp).map(([a,c])=>`<span class="badge" style="background:rgba(255,255,255,.1);color:#cbd5e1;">${appLabel[a]||a} ${fmtNum(c)}</span>`).join('') : ''}
    </div>
    <div style="color:#7e93b0;font-size:11px;margin-top:8px;">🔗 他アプリで貯めたコインもここに合算され、どのアプリからも同じ残高で交換できます。</div>
  </div>
  <div class="card">
    <h2>🎁 景品カタログ ${userStoreName(user)?`<span class="tag">${escapeHtml(userStoreName(user))}</span>`:''}</h2>
    ${rewards.length? rewards.map(r=>{
      const can=bal>=r.cost;
      return `<div class="reward">
        <div class="ic">${r.icon||'🎁'}</div>
        <div class="body"><div class="t">${escapeHtml(r.title)} ${r.store?`<span class="tag">${escapeHtml(storeName(r.store))}限定</span>`:''}</div><div class="muted small">${escapeHtml(r.desc||'')}</div></div>
        <div style="text-align:right;">
          <div class="cost">🪙 ${fmtNum(r.cost)}</div>
          <button class="btn ${can?'btn-primary':'btn-secondary'} btn-sm" style="margin-top:6px;" data-act="redeem" data-id="${r.id}" ${can?'':'disabled'}>${can?'交換':'コイン不足'}</button>
        </div>
      </div>`;
    }).join('') : `<div class="empty">交換できる景品がまだありません（管理者コンソールで追加できます）</div>`}
  </div>
  <div class="card">
    <h2>📋 交換履歴</h2>
    ${myReds.length? myReds.map(r=>`<div class="ledger-row">
        <div><div>${escapeHtml(r.title)}</div><div class="when">${timeAgo(r.createdAt)}</div></div>
        <div style="text-align:right;"><div class="amt minus">-${fmtNum(r.cost)}🪙</div><div>${stLabel(r.status)}</div></div>
      </div>`).join('') : `<div class="empty">まだ交換していません</div>`}
  </div>`;
}

/* ---------------- History ---------------- */
function viewHistory(){
  const user=DB.currentUser;
  const rows=ledgerFor(user).sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  return `
  <div class="sec-title">コイン履歴</div>
  <div class="card" style="text-align:center;">
    <div class="muted small">現在の残高</div>
    <div style="font-size:34px;font-weight:800;color:#b45309;">🪙 ${fmtNum(balance(user))}</div>
    <div class="muted small">累計獲得 ${fmtNum(totalEarned(user))}🪙</div>
  </div>
  <div class="card">
    ${rows.length? rows.map(l=>`<div class="ledger-row">
        <div><div>${escapeHtml(l.reason)}</div><div class="when">${timeAgo(l.createdAt)}</div></div>
        <div class="amt ${l.amount>=0?'plus':'minus'}">${l.amount>=0?'+':''}${fmtNum(l.amount)}🪙</div>
      </div>`).join('') : `<div class="empty">まだ履歴がありません</div>`}
  </div>`;
}

/* ---------------- Profile ---------------- */
function viewProfile(){
  const user=DB.currentUser;
  return `
  <div class="sec-title">マイページ</div>
  <div class="card">
    <div class="row"><div class="avatar" style="width:54px;height:54px;font-size:20px;background:${avatarColor(user)}">${escapeHtml(initials(user))}</div>
      <div><div style="font-weight:800;font-size:18px;">${escapeHtml(user)}</div><div class="muted">🏬 ${escapeHtml(userStoreName(user)||'店舗未設定')}</div></div></div>
    <div class="divider"></div>
    <div class="field-wrap">
      <label class="field">店舗を変更</label>
      <select class="select" id="prof-store" data-act="prof-store">
        <option value="">— 未設定 —</option>
        ${storeList().map(s=>`<option value="${s.id}" ${userStoreId(user)===s.id?'selected':''}>${escapeHtml(s.name)}</option>`).join('')}
      </select>
    </div>
    <div class="divider"></div>
    <div class="kv"><span class="k">残高</span><b>🪙 ${fmtNum(balance(user))}</b></div>
    <div class="kv"><span class="k">累計獲得</span><b>🪙 ${fmtNum(totalEarned(user))}</b></div>
    <div class="kv"><span class="k">レベル</span><b>Lv.${levelOf(totalEarned(user)).lv} ${escapeHtml(levelOf(totalEarned(user)).name)}</b></div>
    <div class="kv"><span class="k">連続学習</span><b>🔥 ${streakOf(user)}日</b></div>
    <div class="kv"><span class="k">投稿数</span><b>${postsByUser(user).length}件</b></div>
  </div>
  <div class="card">
    <h3>設定・データ</h3>
    <div class="stack">
      <button class="btn btn-dark btn-block" data-act="console-open">🔐 管理者コンソール</button>
      <button class="btn btn-secondary btn-block" data-act="export">⬇️ データをエクスポート（バックアップ）</button>
      <label class="btn btn-secondary btn-block" style="position:relative;overflow:hidden;">⬆️ データをインポート
        <input type="file" id="import-file" accept="application/json" style="position:absolute;inset:0;opacity:0;cursor:pointer;"></label>
      <button class="btn btn-ghost btn-block" data-act="logout">ログアウト</button>
    </div>
  </div>
  <p class="muted small" style="text-align:center;">My Brain Bank（GCMBB） ・ データはこの端末に保存されています</p>`;
}

/* ---------------- 管理者コンソール ---------------- */
let consoleTab='coins';
function viewConsole(){
  if(!isAdmin()) return consoleLockScreen();
  const tabs=[['coins','🪙 コイン'],['rewards','🎁 景品'],['stores','🏬 店舗'],['courses','📘 コース'],['redeem','📨 交換申請'],['users','👥 メンバー'],['system','⚙️ システム']];
  return `
  <div class="sec-title">🔐 管理者コンソール</div>
  <div class="console-tabs">
    ${tabs.map(([k,l])=>`<button class="${consoleTab===k?'active':''}" data-act="console-tab" data-v="${k}">${l}</button>`).join('')}
  </div>
  ${consoleSection()}
  <button class="btn btn-ghost btn-block" style="margin-top:10px;" data-act="console-lock">🔒 コンソールを閉じる</button>`;
}
function consoleLockScreen(){
  return `
  <div class="sec-title">🔐 管理者コンソール</div>
  <div class="card" style="text-align:center;">
    <div style="font-size:40px;">🔒</div>
    <h2 style="justify-content:center;">管理パスコードを入力</h2>
    <p class="muted small">店舗・景品・コイン設定などを変更できます。</p>
    <div class="field-wrap" style="max-width:220px;margin:14px auto 0;">
      <input class="input" id="console-pass" type="password" inputmode="numeric" placeholder="パスコード" style="text-align:center;letter-spacing:.3em;">
    </div>
    <button class="btn btn-primary" style="margin-top:12px;" data-act="console-unlock">開く</button>
    <div style="margin-top:12px;"><button class="btn btn-ghost btn-sm" data-go="profile">← 戻る</button></div>
  </div>`;
}
function consoleSection(){
  switch(consoleTab){
    case 'coins':   return consoleCoins();
    case 'rewards': return consoleRewards();
    case 'stores':  return consoleStores();
    case 'courses': return consoleCourses();
    case 'redeem':  return consoleRedeem();
    case 'users':   return consoleUsers();
    case 'system':  return consoleSystem();
    default:        return consoleCoins();
  }
}
let cfgStore=''; // コイン設定の対象店舗（''=全社デフォルト）
function consoleCoins(){
  const r=DB.config.rules;
  const isGlobal=!cfgStore;
  const ov=(DB.config.storeRules||{})[cfgStore]||{};
  const val=(k)=> isGlobal ? r[k] : (ov[k]!==undefined?ov[k]:'');
  const ph=(k)=> isGlobal ? '' : `全社:${r[k]}`;
  const rowF=(k,label,unit)=>`<div class="kv"><span class="k">${label}</span><input class="input" style="width:96px" type="number" step="0.1" id="cfg-${k}" value="${val(k)}" placeholder="${ph(k)}">${unit||'🪙'}</div>`;
  return `
  <div class="card">
    <h2>🪙 コイン設定</h2>
    <div class="field-wrap">
      <label class="field">設定対象</label>
      <select class="select" id="cfg-store" data-act="cfg-store">
        <option value="" ${isGlobal?'selected':''}>🏢 全社共通（デフォルト）</option>
        ${storeList().map(s=>`<option value="${s.id}" ${cfgStore===s.id?'selected':''}>${escapeHtml(s.name)}（店舗別上書き）</option>`).join('')}
      </select>
    </div>
    ${rowF('base','投稿の基本付与')}
    ${rowF('streakBonusPer','連続ボーナス/日')}
    ${rowF('streakBonusMax','連続ボーナス上限','日')}
    ${rowF('likeGive','いいね送信')}
    ${rowF('likeGiveMax','いいね送信の1日上限','回')}
    ${rowF('likeReceive','いいね受信')}
    ${rowF('postsPerDayCoin','コイン付与の投稿/日','投稿')}
    <button class="btn btn-primary btn-sm" style="margin-top:10px;" data-act="save-rules">${isGlobal?'全社デフォルトを保存':escapeHtml(storeName(cfgStore))+'の設定を保存'}</button>
    ${!isGlobal?`<button class="btn btn-ghost btn-sm" style="margin-top:10px;margin-left:6px;" data-act="clear-store-rules">この店舗の上書きを消す</button>`:''}
    <p class="muted small" style="margin-top:8px;">${isGlobal?'全店舗の基準値です。':'空欄の項目は全社デフォルトが使われます。'}ガチャ確率は「システム」タブのJSONで調整できます。</p>
  </div>`;
}
function consoleRewards(){
  const scopeName=(r)=> r.store?storeName(r.store)+'限定':'全社共通';
  return `
  <div class="card">
    <h2>🎁 景品の編集</h2>
    ${(DB.config.rewards||[]).map(rw=>`<div class="reward" style="padding:10px 0;">
      <div class="ic">${rw.icon||'🎁'}</div>
      <div class="body"><div class="t">${escapeHtml(rw.title)} <span class="tag">${escapeHtml(scopeName(rw))}</span></div>
        <div class="muted small">🪙${fmtNum(rw.cost)}${rw.desc?' ・ '+escapeHtml(rw.desc):''}</div></div>
      <button class="btn btn-ghost btn-sm" data-act="del-reward" data-id="${rw.id}">削除</button>
    </div>`).join('') || `<div class="empty">景品がありません</div>`}
    <div class="divider"></div>
    <h3>景品を追加</h3>
    <div class="stack">
      <div class="row" style="gap:6px;">
        <input class="input" style="width:64px" id="nr-icon" placeholder="🎁" value="🎁">
        <input class="input grow" id="nr-title" placeholder="景品名（例：Amazonギフト500円）">
      </div>
      <div class="row" style="gap:6px;">
        <input class="input" style="width:110px" id="nr-cost" type="number" placeholder="コスト🪙">
        <select class="select grow" id="nr-store">
          <option value="">全社共通</option>
          ${storeList().map(s=>`<option value="${s.id}">${escapeHtml(s.name)}限定</option>`).join('')}
        </select>
      </div>
      <input class="input" id="nr-desc" placeholder="説明（任意）">
    </div>
    <button class="btn btn-secondary btn-sm" style="margin-top:8px;" data-act="add-reward">＋ 追加</button>
  </div>`;
}
function consoleStores(){
  return `
  <div class="card">
    <h2>🏬 店舗の管理</h2>
    ${storeList().map(s=>{
      const cnt=Object.keys(DB.users).filter(u=>userStoreId(u)===s.id).length;
      return `<div class="row between" style="margin:8px 0;">
        <input class="input grow" value="${escapeHtml(s.name)}" data-act="rename-store" data-id="${s.id}">
        <span class="tag">${cnt}人</span>
        <button class="btn btn-ghost btn-sm" data-act="del-store" data-id="${s.id}">削除</button>
      </div>`;
    }).join('') || `<div class="empty">店舗がありません</div>`}
    <div class="divider"></div>
    <h3>店舗を追加</h3>
    <div class="row" style="gap:6px;">
      <input class="input grow" id="ns-name" placeholder="店舗名（例：福井支店）">
      <button class="btn btn-secondary btn-sm" data-act="add-store">＋ 追加</button>
    </div>
    <p class="muted small" style="margin-top:8px;">店舗名を変更すると、その場で反映されます（Enterまたはフォーカスを外すと保存）。</p>
  </div>`;
}
function consoleCourses(){
  return `
  <div class="card">
    <h2>📘 コース（学習テーマ）</h2>
    <div id="course-list">
      ${DB.config.courses.map(c=>`<div class="row" style="margin:6px 0;">
        <span style="font-size:18px;">${c.icon}</span>
        <span class="grow">${escapeHtml(c.title)} <span class="tag">${escapeHtml(c.cat)}</span></span>
        <button class="btn btn-ghost btn-sm" data-act="del-course" data-id="${c.id}">削除</button>
      </div>`).join('')}
    </div>
    <div class="divider"></div>
    <h3>テーマを追加</h3>
    <div class="row" style="gap:6px;flex-wrap:wrap;">
      <input class="input" style="width:64px" id="nc-icon" placeholder="📘" value="📘">
      <input class="input grow" id="nc-title" placeholder="テーマ名">
      <input class="input" style="width:120px" id="nc-cat" placeholder="カテゴリ">
    </div>
    <button class="btn btn-secondary btn-sm" style="margin-top:8px;" data-act="add-course">＋ 追加</button>
  </div>`;
}
function consoleRedeem(){
  const reds=[...DB.redemptions].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  return `
  <div class="card">
    <h2>📨 交換申請（全員）</h2>
    ${reds.length? reds.map(rd=>`
      <div class="ledger-row">
        <div><div>${escapeHtml(rd.user)} → ${escapeHtml(rd.title)} <span class="tag">${escapeHtml(userStoreName(rd.user)||'—')}</span></div>
          <div class="when">${timeAgo(rd.createdAt)} ・ -${fmtNum(rd.cost)}🪙</div></div>
        <div class="row" style="gap:6px;">
          ${rd.status==='requested'?`<a class="btn btn-ghost btn-sm" href="${mailtoRedeem(rd)}" title="申請者への確認メールを作成">📧</a>`:''}
          ${rd.status!=='done'?`<button class="btn btn-secondary btn-sm" data-act="red-status" data-id="${rd.id}" data-s="${rd.status==='requested'?'approved':'done'}">${rd.status==='requested'?'承認':'完了'}</button>`:`<span class="badge green">完了</span>`}
        </div>
      </div>`).join('') : `<div class="empty">申請はありません</div>`}
  </div>`;
}
function consoleUsers(){
  const users=Object.keys(DB.users).sort();
  return `
  <div class="card">
    <h2>👥 メンバー（${users.length}人）</h2>
    ${users.length? users.map(u=>{ const m=DB.users[u]||{};
      return `<div style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
      <div class="row" style="gap:8px;">
        <span class="avatar" style="width:30px;height:30px;font-size:12px;background:${avatarColor(u)}">${escapeHtml(initials(u))}</span>
        <div class="grow"><div style="font-weight:700;">${escapeHtml(u)} ${m.role==='admin'?'<span class="tag">管理者</span>':''}</div>
          <div class="muted small">ID: ${escapeHtml(m.loginId||'—')} ・ 🪙${fmtCoin(balance(u))}</div></div>
        <button class="btn btn-ghost btn-sm" data-act="reset-pass" data-id="${escapeHtml(u)}">パス再設定</button>
        <button class="btn btn-ghost btn-sm" data-act="del-user" data-id="${escapeHtml(u)}">削除</button>
      </div>
      <div class="row" style="gap:8px;margin-top:6px;">
        <select class="select" style="flex:1" data-act="user-store" data-id="${escapeHtml(u)}">
          <option value="">店舗未設定</option>
          ${storeList().map(s=>`<option value="${s.id}" ${userStoreId(u)===s.id?'selected':''}>${escapeHtml(s.name)}</option>`).join('')}
        </select>
        <select class="select" style="width:120px" data-act="user-role" data-id="${escapeHtml(u)}">
          <option value="member" ${m.role!=='admin'?'selected':''}>メンバー</option>
          <option value="admin" ${m.role==='admin'?'selected':''}>管理者</option>
        </select>
      </div>
    </div>`; }).join('') : `<div class="empty">メンバーがいません</div>`}
    <div class="divider"></div>
    <h3>メンバーを追加</h3>
    <div class="stack">
      <div class="row" style="gap:6px;">
        <input class="input grow" id="nm-name" placeholder="お名前（例：鈴木 一郎）">
        <select class="select" style="width:130px" id="nm-store">
          <option value="">店舗</option>
          ${storeList().map(s=>`<option value="${s.id}">${escapeHtml(s.name)}</option>`).join('')}
        </select>
      </div>
      <div class="row" style="gap:6px;">
        <input class="input grow" id="nm-id" placeholder="ログインID（例：suzuki）" autocomplete="off">
        <input class="input" style="width:130px" id="nm-pass" placeholder="パスワード">
        <select class="select" style="width:110px" id="nm-role">
          <option value="member">メンバー</option>
          <option value="admin">管理者</option>
        </select>
      </div>
    </div>
    <button class="btn btn-secondary btn-sm" style="margin-top:8px;" data-act="add-user">＋ メンバー追加</button>
    <p class="muted small" style="margin-top:8px;">ログインは「ログインID＋パスワード」。IDは重複できません。</p>
  </div>`;
}
function consoleSystem(){
  return `
  <div class="card">
    <h2>⚙️ システム</h2>
    <div class="kv"><span class="k">管理パスコード変更</span>
      <input class="input" style="width:120px" id="sys-pass" type="text" placeholder="新パスコード">
      <button class="btn btn-secondary btn-sm" data-act="save-passcode">変更</button></div>
    <div class="kv" style="align-items:flex-start;"><span class="k">交換申請の通知先メール</span>
      <input class="input grow" style="min-width:180px" id="sys-email" type="email" value="${escapeHtml((DB.config.admin||{}).email||'')}" placeholder="admin@example.com">
      <button class="btn btn-secondary btn-sm" data-act="save-email">保存</button></div>
    <p class="muted small" style="margin:2px 0 6px;">設定すると、交換申請時に管理者宛のメール作成画面が自動で開きます（送信ボタンで通知）。</p>
    <div class="kv"><span class="k">同期状態</span><b>${syncStatus==='cloud'?'☁️ 全社共有（Supabase）':'📵 この端末のみ'}</b></div>
    <div class="divider"></div>
    <h3>🎰 ガチャ確率（JSON）</h3>
    <textarea class="textarea" id="sys-gacha" style="font-family:monospace;font-size:12px;min-height:120px;">${escapeHtml(JSON.stringify(DB.config.rules.gacha,null,1))}</textarea>
    <button class="btn btn-secondary btn-sm" style="margin-top:8px;" data-act="save-gacha">ガチャ設定を保存</button>
    <div class="divider"></div>
    <h3>💾 データ</h3>
    <div class="stack">
      <button class="btn btn-secondary btn-block" data-act="export">⬇️ エクスポート（バックアップ）</button>
      <label class="btn btn-secondary btn-block" style="position:relative;overflow:hidden;">⬆️ インポート
        <input type="file" id="import-file" accept="application/json" style="position:absolute;inset:0;opacity:0;cursor:pointer;"></label>
    </div>
    <p class="muted small" style="margin-top:8px;">🔗 「努力の交換所」のコインは全アプリ合算です。他アプリ（棚簡など）から fc_ledger に付与レコードを追加すると、ここに自動で合算されます（supabase/schema.sql 参照）。</p>
  </div>`;
}

/* ============================ GACHA ============================ */
function pickGacha(){
  const g=DB.config.rules.gacha;
  const total=g.reduce((a,b)=>a+b.w,0);
  let r=Math.random()*total;
  for(const t of g){ if(r<t.w) return t; r-=t.w; }
  return g[0];
}
function fireConfetti(){
  const wrap=document.createElement('div'); wrap.className='confetti';
  const colors=['#fbbf24','#f59e0b','#ef4444','#3b82f6','#10b981','#8b5cf6'];
  for(let i=0;i<70;i++){
    const c=document.createElement('i');
    c.style.left=Math.random()*100+'vw';
    c.style.background=colors[i%colors.length];
    c.style.animationDuration=(1.6+Math.random()*1.6)+'s';
    c.style.animationDelay=(Math.random()*0.4)+'s';
    wrap.appendChild(c);
  }
  document.body.appendChild(wrap);
  setTimeout(()=>wrap.remove(),3400);
}
function showGacha(base, streakBonus, onClose){
  const root=document.getElementById('modal-root');
  root.innerHTML=`<div class="modal-back"><div class="modal">
    <div class="gacha" id="gacha">
      <div class="coin3d">🪙</div>
      <div class="spinmsg">コインガチャ抽選中…</div>
    </div>
  </div></div>`;
  setTimeout(()=>{
    const tier=pickGacha();
    const total=round1(base+streakBonus+tier.bonus);
    const el=document.getElementById('gacha');
    if(!el) return;
    el.classList.add('done');
    el.innerHTML=`
      <div class="coin3d">${tier.key==='g20'?'💎':'🪙'}</div>
      <div class="tier" style="background:${tier.color}22;color:${tier.color}">🎰 ${escapeHtml(tier.label)}</div>
      <div class="result-amt">+${fmtCoin(total)}<small>🪙</small></div>
      <div class="breakdown">
        <div class="ln"><span>投稿ボーナス</span><span>+${fmtCoin(base)}🪙</span></div>
        ${streakBonus>0?`<div class="ln"><span>🔥 連続学習ボーナス</span><span>+${fmtCoin(streakBonus)}🪙</span></div>`:''}
        <div class="ln"><span>🎰 ガチャ（${escapeHtml(tier.label)}）</span><span>+${fmtCoin(tier.bonus)}🪙</span></div>
        <div class="ln tot"><span>合計獲得</span><span>+${fmtCoin(total)}🪙</span></div>
      </div>
      <button class="btn btn-primary btn-block btn-lg" style="margin-top:16px;" data-act="gacha-close">受け取る 🎉</button>`;
    if(tier.bonus>=1.5) fireConfetti();
    onClose(tier, total);
    // モーダルはrender()の外で生成されるため、ボタンに直接ハンドラを付与
    const closeBtn=el.querySelector('[data-act="gacha-close"]');
    if(closeBtn) closeBtn.onclick=()=>{ closeModal(); go('home'); toast('コインを獲得しました！','success'); };
  }, 1400);
}
function closeModal(){ document.getElementById('modal-root').innerHTML=''; }

/* ---- アプリ内ダイアログ（標準のconfirm/promptはiframe内でブロックされるため自前実装） ---- */
function uiConfirm(msg, okLabel){
  return new Promise(res=>{
    const root=document.getElementById('modal-root');
    root.innerHTML=`<div class="modal-back"><div class="modal">
      <div style="white-space:pre-wrap;font-weight:700;color:#1e293b;line-height:1.6;">${escapeHtml(msg)}</div>
      <div class="row" style="gap:8px;margin-top:18px;">
        <button class="btn btn-secondary grow" id="ui-cancel">キャンセル</button>
        <button class="btn btn-primary grow" id="ui-ok">${escapeHtml(okLabel||'OK')}</button>
      </div></div></div>`;
    const close=(v)=>{ root.innerHTML=''; res(v); };
    root.querySelector('#ui-ok').onclick=()=>close(true);
    root.querySelector('#ui-cancel').onclick=()=>close(false);
    root.querySelector('.modal-back').onclick=(e)=>{ if(e.target.classList.contains('modal-back')) close(false); };
  });
}
function uiPrompt(msg, def){
  return new Promise(res=>{
    const root=document.getElementById('modal-root');
    root.innerHTML=`<div class="modal-back"><div class="modal">
      <div style="font-weight:700;color:#1e293b;margin-bottom:10px;">${escapeHtml(msg)}</div>
      <input class="input" id="ui-input" value="${escapeHtml(def||'')}">
      <div class="row" style="gap:8px;margin-top:18px;">
        <button class="btn btn-secondary grow" id="ui-cancel">キャンセル</button>
        <button class="btn btn-primary grow" id="ui-ok">OK</button>
      </div></div></div>`;
    const inp=root.querySelector('#ui-input'); setTimeout(()=>inp.focus(),0);
    const close=(v)=>{ root.innerHTML=''; res(v); };
    root.querySelector('#ui-ok').onclick=()=>close(inp.value);
    root.querySelector('#ui-cancel').onclick=()=>close(null);
    inp.onkeydown=(e)=>{ if(e.key==='Enter') close(inp.value); };
  });
}

/* ============================ ACTIONS ============================ */
function doSubmitPost(){
  const user=DB.currentUser;
  const sel=document.getElementById('post-course').value;
  const learn=(document.getElementById('post-learn').value||'').trim();
  const action=(document.getElementById('post-action').value||'').trim();
  const min=parseInt(document.getElementById('post-min').value,10);
  if(!sel){ toast('学んだテーマを選んでください','error'); return; }
  if(!learn){ toast('学び・気づきを入力してください','error'); return; }
  let courseTitle='';
  if(sel==='__free__'){ courseTitle=(document.getElementById('post-free').value||'').trim(); if(!courseTitle){ toast('テーマ名を入力してください','error'); return; } }
  else { const c=DB.config.courses.find(x=>x.id===sel); courseTitle=c?c.title:'その他'; }

  const r=effectiveRules(user);
  const post={ id:uid(), user, courseId:sel, courseTitle, learn, action, watchMin:isNaN(min)?null:min, createdAt:new Date().toISOString(), likes:[], coinsAwarded:0 };

  // コイン付与は1日 postsPerDayCoin 件まで
  const paidToday = postsToday(user).filter(p=>p.coinsAwarded>0).length;
  const willPay = paidToday < r.postsPerDayCoin;

  DB.posts.push(post);

  if(!willPay){
    saveDB(); Remote.pushPost(post);
    toast('投稿しました（本日のコイン付与上限に達したため記録のみ）','success');
    postDraftCourse=''; go('feed'); return;
  }

  // ストリークボーナス（この投稿を含めて算出）
  const streak=streakOf(user);
  const streakBonus = streak>0 ? Math.min(streak, r.streakBonusMax)*r.streakBonusPer : 0;

  showGacha(r.base, streakBonus, (tier, total)=>{
    post.coinsAwarded=total;
    addLedger(user, total, 'post', `学び投稿（${courseTitle}）・ガチャ${tier.label}`);
    saveDB(); Remote.pushPost(post);
  });
  postDraftCourse='';
}

function doLike(postId){
  const me=DB.currentUser;
  const p=DB.posts.find(x=>x.id===postId); if(!p) return;
  p.likes=p.likes||[];
  const rMe=effectiveRules(me), rOwner=effectiveRules(p.user);
  if(p.likes.includes(me)){
    // いいね解除（コインは戻さない）
    p.likes=p.likes.filter(n=>n!==me);
    saveDB(); Remote.pushPost(p); render(); return;
  }
  p.likes.push(me);
  // 送り手ボーナス（1日上限、自分の投稿には付与しない）
  if(p.user!==me && likesGivenToday(me) < rMe.likeGiveMax){
    addLedger(me, rMe.likeGive, 'like-give', 'いいねを送った');
  }
  // 受け手ボーナス
  if(p.user!==me){
    addLedger(p.user, rOwner.likeReceive, 'like-recv', `${me}さんからいいね`);
  }
  saveDB(); Remote.pushPost(p); render();
}

async function doRedeem(rewardId){
  const user=DB.currentUser;
  const rw=DB.config.rewards.find(r=>r.id===rewardId); if(!rw) return;
  if(balance(user)<rw.cost){ toast('コインが足りません','error'); return; }
  if(!(await uiConfirm(`「${rw.title}」を 🪙${fmtCoin(rw.cost)} で交換しますか？`,'交換する'))) return;
  addLedger(user, -rw.cost, 'redeem', `景品交換：${rw.title}`);
  const redemption={ id:uid(), user, rewardId, title:rw.title, cost:rw.cost, status:'requested', createdAt:new Date().toISOString() };
  DB.redemptions.push(redemption);
  saveDB(); Remote.pushRedemption(redemption); render();
  toast('交換を申請しました！担当者の承認をお待ちください','success');
  notifyRedeem(redemption); // 管理者へメール通知（設定時）
}
// 交換申請を管理者へメール通知（mailto：バックエンド不要）
function mailtoRedeem(rd){
  const to=(DB.config.admin||{}).email||'';
  const subject=`【GCMBB】景品交換の申請：${rd.title}`;
  const body=[
    '努力の交換所で景品交換の申請がありました。',
    '',
    `申請者：${rd.user}`,
    `店舗　：${userStoreName(rd.user)||'—'}`,
    `景品　：${rd.title}`,
    `消費コイン：${rd.cost} FevaCOIN`,
    `申請日時：${new Date(rd.createdAt).toLocaleString('ja-JP')}`,
    '',
    'アプリの「管理者コンソール → 交換申請」から承認できます。',
  ].join('\n');
  return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
function notifyRedeem(rd){
  const to=(DB.config.admin||{}).email||'';
  if(!to) return; // 通知先未設定なら何もしない（コンソールに残るのでOK）
  try{ window.location.href=mailtoRedeem(rd); }catch(e){}
}

function exportData(){
  const blob=new Blob([JSON.stringify(DB,null,2)],{type:'application/json'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob);
  a.download='mbb-backup-'+todayStr()+'.json'; a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  toast('バックアップを書き出しました','success');
}
function importData(file){
  const reader=new FileReader();
  reader.onload=async()=>{
    try{
      const d=JSON.parse(reader.result);
      if(!d || typeof d!=='object' || !('ledger' in d)) throw new Error('形式が不正です');
      if(!(await uiConfirm('現在のデータを上書きします。よろしいですか？','上書き'))) return;
      const keepUser=DB.currentUser;
      DB=d; if(!DB.currentUser) DB.currentUser=keepUser;
      saveDB(); render(); toast('インポートしました','success');
    }catch(e){ toast('読み込みに失敗：'+e.message,'error'); }
  };
  reader.readAsText(file);
}

/* ============================ BIND ============================ */
function bind(){
  // ナビ
  document.querySelectorAll('[data-go]').forEach(el=> el.onclick=()=>go(el.getAttribute('data-go')) );

  // ログイン（ID＋パスワード）
  const ln=document.querySelector('[data-act="login-idpass"]');
  const doLogin=()=>{
    const id=(document.getElementById('login-id').value||'').trim();
    const pass=(document.getElementById('login-pass').value||'');
    if(!id||!pass){ toast('IDとパスワードを入力してください','error'); return; }
    const name=Object.keys(DB.users).find(n=>((DB.users[n].loginId||'').toLowerCase())===id.toLowerCase());
    if(!name || String(DB.users[name].password||'')!==pass){ toast('IDまたはパスワードが違います','error'); return; }
    DB.currentUser=name; saveDB(); VIEW='home'; render();
    toast(`ようこそ、${name}さん！`,'success');
  };
  if(ln) ln.onclick=doLogin;
  const passEl=document.getElementById('login-pass');
  if(passEl) passEl.onkeydown=(e)=>{ if(e.key==='Enter') doLogin(); };

  // generic data-act（select/input は change、それ以外は click）
  document.querySelectorAll('[data-act]').forEach(el=>{
    const act=el.getAttribute('data-act');
    if(['login-idpass'].includes(act)) return;
    const tag=el.tagName;
    if(tag==='SELECT' || tag==='INPUT' || tag==='TEXTAREA'){ el.onchange=(ev)=>handleAct(act, el, ev); }
    else { el.onclick=(ev)=>handleAct(act, el, ev); }
  });

  // ポスト課程プルダウン
  const pc=document.getElementById('post-course');
  if(pc) pc.onchange=()=>{ postDraftCourse=pc.value; const fw=document.getElementById('post-free-wrap'); if(fw) fw.style.display = pc.value==='__free__'?'block':'none'; };

  // インポート
  const imp=document.getElementById('import-file');
  if(imp) imp.onchange=()=>{ if(imp.files&&imp.files[0]) importData(imp.files[0]); };
}

function handleAct(act, el, ev){
  const id=el.getAttribute('data-id');
  switch(act){
    case 'profile': go('profile'); break;
    case 'submit-post': doSubmitPost(); break;
    case 'post-course': postDraftCourse=id; go('post'); break;
    case 'like': doLike(id); break;
    case 'redeem': doRedeem(id); break;
    case 'rank-tab': rankTab=el.getAttribute('data-v'); render(); break;
    case 'rank-store': rankStore=el.value; render(); break;
    case 'gacha-close': closeModal(); go('home'); toast('コインを獲得しました！','success'); break;
    case 'export': exportData(); break;
    case 'logout': doLogout(); break;
    case 'prof-store': { const u=DB.currentUser; DB.users[u].store=el.value; DB.users[u].storeName=storeName(el.value); saveDB(); Remote.pushUser(u); render(); toast('店舗を変更しました','success'); break; }
    // --- コンソール ---
    case 'console-open': go('console'); break;
    case 'console-unlock': doConsoleUnlock(); break;
    case 'console-lock': adminUnlocked=false; go('profile'); break;
    case 'console-tab': consoleTab=el.getAttribute('data-v'); render(); break;
    case 'cfg-store': cfgStore=el.value; render(); break;
    case 'clear-store-rules': if(cfgStore){ delete DB.config.storeRules[cfgStore]; saveDB(); Remote.pushConfig(); render(); toast('店舗の上書きを消しました','success'); } break;
    case 'save-rules': saveRules(); break;
    case 'save-gacha': saveGacha(); break;
    case 'save-passcode': savePasscode(); break;
    case 'save-email': saveAdminEmail(); break;
    case 'add-course': addCourse(); break;
    case 'del-course': delCourse(id); break;
    case 'add-reward': addReward(); break;
    case 'del-reward': delReward(id); break;
    case 'add-store': addStore(); break;
    case 'del-store': delStore(id); break;
    case 'rename-store': renameStore(id, el.value); break;
    case 'user-store': { const u=id; if(DB.users[u]){ DB.users[u].store=el.value; DB.users[u].storeName=storeName(el.value); saveDB(); Remote.pushUser(u); render(); } break; }
    case 'user-role': { const u=id; if(DB.users[u]){ DB.users[u].role=el.value; saveDB(); Remote.pushUser(u); render(); } break; }
    case 'add-user': addMember(); break;
    case 'del-user': delMember(id); break;
    case 'reset-pass': resetPass(id); break;
    case 'red-status': { const rd=DB.redemptions.find(r=>r.id===id); if(rd){ rd.status=el.getAttribute('data-s'); saveDB(); Remote.pushRedemption(rd); render(); } break; }
    case 'refresh': doRefresh(); break;
  }
}
function doConsoleUnlock(){
  const v=(document.getElementById('console-pass')||{}).value||'';
  if(v===String((DB.config.admin||{}).passcode||'')){ adminUnlocked=true; consoleTab='coins'; render(); toast('コンソールを開きました','success'); }
  else toast('パスコードが違います','error');
}
async function doLogout(){
  if(await uiConfirm('ログアウトしますか？','ログアウト')){ DB.currentUser=null; adminUnlocked=false; saveDB(); VIEW='home'; render(); }
}
async function delCourse(id){
  if(await uiConfirm('このテーマを削除しますか？','削除')){ DB.config.courses=DB.config.courses.filter(c=>c.id!==id); saveDB(); Remote.pushConfig(); render(); }
}
async function delReward(id){
  if(await uiConfirm('この景品を削除しますか？','削除')){ DB.config.rewards=DB.config.rewards.filter(r=>r.id!==id); saveDB(); Remote.pushConfig(); render(); }
}
function doRefresh(){
  if(!Remote.available()){ toast('この端末内に保存中（共有オフ）','error'); return; }
  Remote.loadAll().then(ok=>{ render(); toast(ok?'最新の状態に更新しました':'更新に失敗しました', ok?'success':'error'); });
}

function saveRules(){
  const num=(k)=>{ const el=document.getElementById('cfg-'+k); if(!el) return undefined; const s=el.value.trim(); if(s==='') return ''; const n=round1(parseFloat(s)); return isNaN(n)?undefined:n; };
  if(!cfgStore){
    // 全社デフォルト
    OVERRIDABLE_RULE_KEYS.forEach(k=>{ const n=num(k); if(typeof n==='number') DB.config.rules[k]=n; });
  } else {
    // 店舗別上書き（空欄はデフォルトに従う＝上書きを消す）
    const ov=Object.assign({}, DB.config.storeRules[cfgStore]||{});
    OVERRIDABLE_RULE_KEYS.forEach(k=>{ const n=num(k); if(n==='') delete ov[k]; else if(typeof n==='number') ov[k]=n; });
    if(Object.keys(ov).length) DB.config.storeRules[cfgStore]=ov; else delete DB.config.storeRules[cfgStore];
  }
  saveDB(); Remote.pushConfig(); toast('コイン設定を保存しました','success'); render();
}
function saveGacha(){
  try{
    const arr=JSON.parse(document.getElementById('sys-gacha').value);
    if(!Array.isArray(arr)||!arr.length) throw new Error('配列で入力してください');
    arr.forEach(t=>{ if(typeof t.w!=='number'||typeof t.bonus!=='number') throw new Error('w と bonus は数値で'); });
    DB.config.rules.gacha=arr;
    saveDB(); Remote.pushConfig(); toast('ガチャ設定を保存しました','success');
  }catch(e){ toast('JSONエラー：'+e.message,'error'); }
}
function savePasscode(){
  const v=(document.getElementById('sys-pass').value||'').trim();
  if(!v){ toast('新しいパスコードを入力してください','error'); return; }
  DB.config.admin.passcode=v; saveDB(); Remote.pushConfig(); toast('パスコードを変更しました','success'); render();
}
function saveAdminEmail(){
  const v=(document.getElementById('sys-email').value||'').trim();
  DB.config.admin.email=v; saveDB(); Remote.pushConfig(); toast(v?'通知先メールを保存しました':'通知先メールを空にしました','success');
}
function addMember(){
  const name=(document.getElementById('nm-name').value||'').trim();
  const loginId=(document.getElementById('nm-id').value||'').trim();
  const password=(document.getElementById('nm-pass').value||'').trim();
  const store=(document.getElementById('nm-store')||{}).value||'';
  const role=(document.getElementById('nm-role')||{}).value||'member';
  if(!name){ toast('お名前を入力してください','error'); return; }
  if(!loginId){ toast('ログインIDを入力してください','error'); return; }
  if(!password){ toast('パスワードを入力してください','error'); return; }
  if(DB.users[name]){ toast('その名前は既に登録済みです','error'); return; }
  if(Object.keys(DB.users).some(n=>(DB.users[n].loginId||'').toLowerCase()===loginId.toLowerCase())){ toast('そのログインIDは既に使われています','error'); return; }
  DB.users[name]={ name, loginId, password, store, storeName:storeName(store), role, joinedAt:new Date().toISOString() };
  saveDB(); Remote.pushUser(name); render(); toast(`${name}さんを追加しました`,'success');
}
async function delMember(name){
  if(!(await uiConfirm(`「${name}」を削除しますか？\n（投稿・コイン履歴は残ります）`,'削除'))) return;
  delete DB.users[name];
  if(DB.currentUser===name) DB.currentUser=null;
  saveDB(); render(); toast('メンバーを削除しました','success');
}
async function resetPass(name){
  const p=await uiPrompt(`「${name}」の新しいパスワード`,'');
  if(p===null) return;
  const np=String(p).trim(); if(!np){ toast('パスワードが空です','error'); return; }
  DB.users[name].password=np; saveDB(); Remote.pushUser(name); toast('パスワードを再設定しました','success');
}
function addStore(){
  const name=(document.getElementById('ns-name').value||'').trim();
  if(!name){ toast('店舗名を入力してください','error'); return; }
  DB.config.stores.push({ id:'s-'+uid(), name });
  saveDB(); Remote.pushConfig(); render(); toast('店舗を追加しました','success');
}
async function delStore(id){
  const cnt=Object.keys(DB.users).filter(u=>userStoreId(u)===id).length;
  if(!(await uiConfirm(`この店舗を削除しますか？${cnt>0?`\n（所属${cnt}人は未設定になります）`:''}`,'削除'))) return;
  DB.config.stores=DB.config.stores.filter(s=>s.id!==id);
  delete DB.config.storeRules[id];
  Object.keys(DB.users).forEach(u=>{ if(DB.users[u].store===id){ DB.users[u].store=''; DB.users[u].storeName=''; Remote.pushUser(u); } });
  saveDB(); Remote.pushConfig(); render(); toast('店舗を削除しました','success');
}
function renameStore(id, name){
  const s=DB.config.stores.find(x=>x.id===id); if(!s) return;
  name=(name||'').trim(); if(!name) return;
  s.name=name;
  // 表示名キャッシュも更新
  Object.keys(DB.users).forEach(u=>{ if(DB.users[u].store===id) DB.users[u].storeName=name; });
  saveDB(); Remote.pushConfig();
}
function addCourse(){
  const icon=(document.getElementById('nc-icon').value||'📘').trim();
  const title=(document.getElementById('nc-title').value||'').trim();
  const cat=(document.getElementById('nc-cat').value||'その他').trim();
  if(!title){ toast('テーマ名を入力してください','error'); return; }
  DB.config.courses.push({ id:'c-'+uid(), icon, title, cat, desc:'' });
  saveDB(); Remote.pushConfig(); render(); toast('テーマを追加しました','success');
}
function addReward(){
  const icon=(document.getElementById('nr-icon').value||'🎁').trim();
  const title=(document.getElementById('nr-title').value||'').trim();
  const cost=parseInt(document.getElementById('nr-cost').value,10);
  const store=(document.getElementById('nr-store')||{}).value||'';
  const desc=(document.getElementById('nr-desc')||{}).value||'';
  if(!title){ toast('景品名を入力してください','error'); return; }
  if(isNaN(cost)||cost<=0){ toast('コストを入力してください','error'); return; }
  DB.config.rewards.push({ id:'r-'+uid(), icon, title, cost, desc, store });
  saveDB(); Remote.pushConfig(); render(); toast('景品を追加しました','success');
}

/* ---------- 起動 ---------- */
render();
initSync(); // Supabaseが使えれば全社共有モードに切り替え、ダメならローカルのまま

/* ---------- PWA: Service Worker 登録（オフライン対応・ホーム画面に追加可能に） ---------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
