/* =========================================================================
   My Brain Bank（GCMBB）／グロースカレッジ — 学んでFevaCOINを貯めよう
   Growth College(growthcollege.jp)で動画学習 → 学びを投稿 → FevaCOINが
   「貯まる」＋ガチャで「当たる」個人向け学習リワードアプリ。

   データはこの端末のブラウザ(localStorage)に保存されます。複数人・複数端末で
   共有するにはバックエンド(Supabase等)が必要です。ファイル末尾の SUPABASE
   コメントに移行用のテーブル定義(SQL)を記載しています。
   ========================================================================= */

const STORE_KEY = 'FEVA_COLLEGE_v1';
const GROWTH_URL = 'https://www.growthcollege.jp';

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
  { id:'r-amazon1k', icon:'🎁', title:'Amazonギフト 1,000円分', cost:500,  desc:'人気No.1' },
  { id:'r-book',     icon:'📚', title:'図書カード 1,000円分',   cost:480,  desc:'学びを次の学びへ' },
  { id:'r-lunch',    icon:'🍱', title:'ランチ補助券 1,000円',   cost:450,  desc:'お昼に使える' },
  { id:'r-coffee',   icon:'☕', title:'カフェチケット 500円',   cost:240,  desc:'ちょっと一息' },
  { id:'r-half',     icon:'🌴', title:'半休チケット',           cost:1500, desc:'頑張った自分にご褒美' },
  { id:'r-award',    icon:'🏆', title:'社内表彰ノミネート',     cost:300,  desc:'全社で称賛' },
];
const SEED_RULES = {
  base: 30,            // 学び投稿の基本付与
  streakBonusPer: 5,   // 連続学習1日あたりのボーナス
  streakBonusMax: 7,   // ボーナス対象の連続日数上限
  likeGive: 1,         // いいねを送ると送り手に付与
  likeGiveMax: 10,     // 1日にいいねで稼げる上限
  likeReceive: 2,      // いいねされると投稿者に付与
  postsPerDayCoin: 3,  // 1日にコイン付与される投稿数の上限
  // ガチャ：投稿のたびに回る。tier=結果, w=重み, bonus=加算コイン
  gacha: [
    { key:'normal',  label:'ノーマル',     color:'#94a3b8', w:50, bonus:10 },
    { key:'silver',  label:'シルバー',     color:'#64748b', w:25, bonus:30 },
    { key:'gold',    label:'ゴールド',     color:'#d97706', w:15, bonus:50 },
    { key:'rainbow', label:'レインボー',   color:'#7c3aed', w:8,  bonus:100 },
    { key:'jackpot', label:'★ジャックポット★', color:'#dc2626', w:2, bonus:300 },
  ],
};
const LEVELS = [
  { lv:1, name:'見習い',     min:0 },
  { lv:2, name:'学習者',     min:150 },
  { lv:3, name:'実践者',     min:500 },
  { lv:4, name:'達人',       min:1200 },
  { lv:5, name:'マスター',   min:2500 },
  { lv:6, name:'レジェンド', min:5000 },
];
const AVATAR_COLORS = ['#ef4444','#f59e0b','#10b981','#3b82f6','#8b5cf6','#ec4899','#14b8a6','#f97316'];

/* ---------- ストレージ ---------- */
function freshDB(){
  return {
    currentUser: null,
    users: {},        // name -> { dept, joinedAt }
    posts: [],        // { id, user, courseId, courseTitle, learn, action, watchMin, createdAt, likes:[name], coinsAwarded }
    ledger: [],       // { id, user, amount, type, reason, createdAt }
    redemptions: [],  // { id, user, rewardId, title, cost, status, createdAt }
    config: { courses: deepCopy(SEED_COURSES), rewards: deepCopy(SEED_REWARDS), rules: deepCopy(SEED_RULES) },
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
    return d;
  }catch(e){ return freshDB(); }
}
function saveDB(){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(DB)); }catch(e){ toast('保存に失敗しました','error'); } }

/* ---------- 小物 ---------- */
function uid(){ return Date.now().toString(36) + Math.floor(Math.random()*1e6).toString(36); }
function escapeHtml(s){ return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function nl2br(s){ return escapeHtml(s).replace(/\n/g,'<br>'); }
function todayStr(d){ const x=d?new Date(d):new Date(); return x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0'); }
function ym(d){ const x=d?new Date(d):new Date(); return x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0'); }
function fmtNum(n){ return Number(n||0).toLocaleString('ja-JP'); }
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
  DB.ledger.push({ id:uid(), user, amount, type, reason, createdAt:new Date().toISOString() });
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
    ['shop','交換','🎁'],
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
    case 'admin':  return viewAdmin();
    case 'profile':return viewProfile();
    default:       return viewHome();
  }
}

/* ---------------- Login ---------------- */
function renderLogin(){
  const names=Object.keys(DB.users);
  return `<div class="login-wrap"><div class="login-shell">
    <div class="login-hero">
      <img class="logo-img" src="assets/logo.png" alt="My Brain Bank">

      <h1>My Brain Bank</h1>
      <p><b>GCMBB｜グロースカレッジ</b><br>動画で学んで、学びを投稿。<br>知識とFevaCOINが貯まる。当たる。</p>
    </div>
    <div class="login-card">
      ${names.length? `<label class="field">既存ユーザーで入る</label>
        <div class="stack" style="margin-bottom:14px;">
          <select class="select" id="login-existing">
            <option value="">— 名前を選択 —</option>
            ${names.map(n=>`<option value="${escapeHtml(n)}">${escapeHtml(n)}（${escapeHtml(DB.users[n].dept||'—')}）</option>`).join('')}
          </select>
          <button class="btn btn-dark btn-block" data-act="login-existing">この名前で入る</button>
        </div>
        <div class="divider"></div>`:''}
      <label class="field">はじめての方（名前を登録）</label>
      <div class="field-wrap"><input class="input" id="login-name" placeholder="お名前（例：山田 太郎）" autocomplete="off"></div>
      <div class="field-wrap"><input class="input" id="login-dept" placeholder="部署・店舗（例：本店 / 営業）" autocomplete="off"></div>
      <button class="btn btn-primary btn-block btn-lg" style="margin-top:14px;" data-act="login-new">はじめる 🚀</button>
      <p class="muted small" style="text-align:center;margin-top:12px;">データはこの端末に保存されます</p>
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
      <a class="btn btn-secondary" href="${GROWTH_URL}" target="_blank" rel="noopener">▶️ Growth Collegeで見る</a>
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
  <div class="sec-title">Growth College で学ぶ</div>
  <div class="card" style="background:linear-gradient(135deg,#11203b,#13294a);color:#fff;border-color:#1e3a5f;">
    <h2 style="color:#fff;">▶️ 動画を視聴 → 学びを投稿</h2>
    <p style="color:#9fb3cc;font-size:13px;">下のテーマから興味のある動画を選び、Growth Collegeで視聴。見終わったら「このテーマで投稿」から学びを記録するとFevaCOINがもらえます。</p>
    <a class="btn btn-primary" style="margin-top:12px;" href="${GROWTH_URL}" target="_blank" rel="noopener">Growth College を開く ↗</a>
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
  const r=DB.config.rules;
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
      投稿すると <b>基本 ${r.base}🪙</b> ＋ 連続学習ボーナス ＋ <b>コインガチャ</b>で最大 <b>${Math.max(...r.gacha.map(g=>g.bonus))}🪙</b> が当たる！
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
        <div class="who">${escapeHtml(p.user)} <span class="meta">${escapeHtml((DB.users[p.user]&&DB.users[p.user].dept)||'')}</span></div>
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
function viewRank(){
  const me=DB.currentUser;
  const isMonth=rankTab==='month';
  const scope = isMonth ? ym() : null;
  // 集計
  const agg={};
  DB.ledger.forEach(l=>{ if(l.amount<=0) return; if(scope && ym(l.createdAt)!==scope) return; agg[l.user]=(agg[l.user]||0)+l.amount; });
  Object.keys(DB.users).forEach(u=>{ if(agg[u]===undefined) agg[u]=0; });
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
  <div class="card">
    <table class="rk-table">
      <thead><tr><th class="pos">順位</th><th>名前</th><th class="num">投稿</th><th class="num">獲得🪙</th></tr></thead>
      <tbody>
        ${rows.length? rows.map(([u,c],i)=>`
          <tr class="${u===me?'me':''} ${i===0?'rk1':''}">
            <td class="pos">${medal(i)}</td>
            <td><span class="avatar" style="width:24px;height:24px;font-size:11px;display:inline-flex;vertical-align:middle;background:${avatarColor(u)}">${escapeHtml(initials(u))}</span> ${escapeHtml(u)}</td>
            <td class="num">${postAgg[u]||0}</td>
            <td class="num">${fmtNum(c)}</td>
          </tr>`).join('') : `<tr><td colspan="4" class="empty">データがありません</td></tr>`}
      </tbody>
    </table>
  </div>
  <p class="muted small" style="text-align:center;">${isMonth?'今月':'通算'}に獲得したFevaCOINの合計で順位が決まります。</p>`;
}

/* ---------------- Shop / Redeem ---------------- */
function viewShop(){
  const user=DB.currentUser, bal=balance(user);
  const myReds=DB.redemptions.filter(r=>r.user===user).sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  const stLabel=(s)=> s==='done'?'<span class="badge green">受け渡し済</span>': s==='approved'?'<span class="badge blue">承認済</span>':'<span class="badge gold">申請中</span>';
  return `
  <div class="sec-title">コインを交換する</div>
  <div class="card" style="text-align:center;background:linear-gradient(135deg,#fffbeb,#fef3c7);border-color:#fde68a;">
    <div class="muted small">交換に使えるコイン</div>
    <div style="font-size:34px;font-weight:800;color:#b45309;">🪙 ${fmtNum(bal)}</div>
  </div>
  <div class="card">
    <h2>🎁 景品カタログ</h2>
    ${DB.config.rewards.map(r=>{
      const can=bal>=r.cost;
      return `<div class="reward">
        <div class="ic">${r.icon||'🎁'}</div>
        <div class="body"><div class="t">${escapeHtml(r.title)}</div><div class="muted small">${escapeHtml(r.desc||'')}</div></div>
        <div style="text-align:right;">
          <div class="cost">🪙 ${fmtNum(r.cost)}</div>
          <button class="btn ${can?'btn-primary':'btn-secondary'} btn-sm" style="margin-top:6px;" data-act="redeem" data-id="${r.id}" ${can?'':'disabled'}>${can?'交換':'コイン不足'}</button>
        </div>
      </div>`;
    }).join('')}
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
      <div><div style="font-weight:800;font-size:18px;">${escapeHtml(user)}</div><div class="muted">${escapeHtml((DB.users[user]&&DB.users[user].dept)||'部署未設定')}</div></div></div>
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
      <button class="btn btn-secondary btn-block" data-act="admin">⚙️ 管理（コース・景品・コイン設定）</button>
      <button class="btn btn-secondary btn-block" data-act="export">⬇️ データをエクスポート（バックアップ）</button>
      <label class="btn btn-secondary btn-block" style="position:relative;overflow:hidden;">⬆️ データをインポート
        <input type="file" id="import-file" accept="application/json" style="position:absolute;inset:0;opacity:0;cursor:pointer;"></label>
      <button class="btn btn-ghost btn-block" data-act="logout">ログアウト</button>
    </div>
  </div>
  <p class="muted small" style="text-align:center;">My Brain Bank（GCMBB） ・ データはこの端末に保存されています</p>`;
}

/* ---------------- Admin ---------------- */
function viewAdmin(){
  const r=DB.config.rules;
  return `
  <div class="sec-title">管理</div>
  <div class="card">
    <h2>🪙 コイン設定</h2>
    <div class="kv"><span class="k">投稿の基本付与</span><input class="input" style="width:90px" type="number" id="cfg-base" value="${r.base}">🪙</div>
    <div class="kv"><span class="k">連続ボーナス/日</span><input class="input" style="width:90px" type="number" id="cfg-streak" value="${r.streakBonusPer}">🪙（上限${r.streakBonusMax}日）</div>
    <div class="kv"><span class="k">いいね送信</span><input class="input" style="width:90px" type="number" id="cfg-likegive" value="${r.likeGive}">🪙（1日上限${r.likeGiveMax}）</div>
    <div class="kv"><span class="k">いいね受信</span><input class="input" style="width:90px" type="number" id="cfg-likerecv" value="${r.likeReceive}">🪙</div>
    <div class="kv"><span class="k">コイン付与の投稿/日</span><input class="input" style="width:90px" type="number" id="cfg-perday" value="${r.postsPerDayCoin}">投稿</div>
    <button class="btn btn-primary btn-sm" style="margin-top:10px;" data-act="save-rules">設定を保存</button>
    <p class="muted small" style="margin-top:8px;">ガチャ確率・景品・コース内容はこのHTML内の SEED 定義を編集してください（または下のJSONエクスポートで調整）。</p>
  </div>
  <div class="card">
    <h2>📘 コース（学習テーマ）</h2>
    <div id="course-list">
      ${DB.config.courses.map((c,i)=>`<div class="row" style="margin:6px 0;">
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
  </div>
  <div class="card">
    <h2>🎁 景品</h2>
    ${DB.config.rewards.map(rw=>`<div class="row" style="margin:6px 0;">
      <span style="font-size:18px;">${rw.icon}</span>
      <span class="grow">${escapeHtml(rw.title)} <span class="tag">🪙${rw.cost}</span></span>
      <button class="btn btn-ghost btn-sm" data-act="del-reward" data-id="${rw.id}">削除</button>
    </div>`).join('')}
    <div class="divider"></div>
    <h3>景品を追加</h3>
    <div class="row" style="gap:6px;flex-wrap:wrap;">
      <input class="input" style="width:64px" id="nr-icon" placeholder="🎁" value="🎁">
      <input class="input grow" id="nr-title" placeholder="景品名">
      <input class="input" style="width:100px" id="nr-cost" type="number" placeholder="コスト">
    </div>
    <button class="btn btn-secondary btn-sm" style="margin-top:8px;" data-act="add-reward">＋ 追加</button>
  </div>
  <div class="card">
    <h2>📨 交換申請（全員）</h2>
    ${DB.redemptions.length? [...DB.redemptions].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).map(rd=>`
      <div class="ledger-row">
        <div><div>${escapeHtml(rd.user)} → ${escapeHtml(rd.title)}</div><div class="when">${timeAgo(rd.createdAt)} ・ -${rd.cost}🪙</div></div>
        <div class="row" style="gap:6px;">
          ${rd.status!=='done'?`<button class="btn btn-secondary btn-sm" data-act="red-status" data-id="${rd.id}" data-s="${rd.status==='requested'?'approved':'done'}">${rd.status==='requested'?'承認':'完了'}</button>`:`<span class="badge green">完了</span>`}
        </div>
      </div>`).join('') : `<div class="empty">申請はありません</div>`}
  </div>
  <button class="btn btn-ghost btn-block" data-go="home">← ホームに戻る</button>`;
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
    const total=base+streakBonus+tier.bonus;
    const el=document.getElementById('gacha');
    if(!el) return;
    el.classList.add('done');
    el.innerHTML=`
      <div class="coin3d">${tier.key==='jackpot'?'💎':'🪙'}</div>
      <div class="tier" style="background:${tier.color}22;color:${tier.color}">${escapeHtml(tier.label)}</div>
      <div class="result-amt">+${fmtNum(total)}<small>🪙</small></div>
      <div class="breakdown">
        <div class="ln"><span>投稿ボーナス</span><span>+${base}🪙</span></div>
        ${streakBonus>0?`<div class="ln"><span>🔥 連続学習ボーナス</span><span>+${streakBonus}🪙</span></div>`:''}
        <div class="ln"><span>🎰 ガチャ（${escapeHtml(tier.label)}）</span><span>+${tier.bonus}🪙</span></div>
        <div class="ln tot"><span>合計獲得</span><span>+${fmtNum(total)}🪙</span></div>
      </div>
      <button class="btn btn-primary btn-block btn-lg" style="margin-top:16px;" data-act="gacha-close">受け取る 🎉</button>`;
    if(tier.bonus>=100) fireConfetti();
    onClose(tier, total);
    // モーダルはrender()の外で生成されるため、ボタンに直接ハンドラを付与
    const closeBtn=el.querySelector('[data-act="gacha-close"]');
    if(closeBtn) closeBtn.onclick=()=>{ closeModal(); go('home'); toast('コインを獲得しました！','success'); };
  }, 1400);
}
function closeModal(){ document.getElementById('modal-root').innerHTML=''; }

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

  const r=DB.config.rules;
  const post={ id:uid(), user, courseId:sel, courseTitle, learn, action, watchMin:isNaN(min)?null:min, createdAt:new Date().toISOString(), likes:[], coinsAwarded:0 };

  // コイン付与は1日 postsPerDayCoin 件まで
  const paidToday = postsToday(user).filter(p=>p.coinsAwarded>0).length;
  const willPay = paidToday < r.postsPerDayCoin;

  DB.posts.push(post);

  if(!willPay){
    saveDB();
    toast('投稿しました（本日のコイン付与上限に達したため記録のみ）','success');
    postDraftCourse=''; go('feed'); return;
  }

  // ストリークボーナス（この投稿を含めて算出）
  const streak=streakOf(user);
  const streakBonus = streak>0 ? Math.min(streak, r.streakBonusMax)*r.streakBonusPer : 0;

  showGacha(r.base, streakBonus, (tier, total)=>{
    post.coinsAwarded=total;
    addLedger(user, total, 'post', `学び投稿（${courseTitle}）${tier.key!=='normal'?'・'+tier.label:''}`);
    saveDB();
  });
  postDraftCourse='';
}

function doLike(postId){
  const me=DB.currentUser;
  const p=DB.posts.find(x=>x.id===postId); if(!p) return;
  p.likes=p.likes||[];
  const r=DB.config.rules;
  if(p.likes.includes(me)){
    // いいね解除（コインは戻さない）
    p.likes=p.likes.filter(n=>n!==me);
    saveDB(); render(); return;
  }
  p.likes.push(me);
  // 送り手ボーナス（1日上限、自分の投稿には付与しない）
  if(p.user!==me && likesGivenToday(me) < r.likeGiveMax){
    addLedger(me, r.likeGive, 'like-give', 'いいねを送った');
  }
  // 受け手ボーナス
  if(p.user!==me){
    addLedger(p.user, r.likeReceive, 'like-recv', `${me}さんからいいね`);
  }
  saveDB(); render();
}

function doRedeem(rewardId){
  const user=DB.currentUser;
  const rw=DB.config.rewards.find(r=>r.id===rewardId); if(!rw) return;
  if(balance(user)<rw.cost){ toast('コインが足りません','error'); return; }
  if(!confirm(`「${rw.title}」を 🪙${rw.cost} で交換しますか？`)) return;
  addLedger(user, -rw.cost, 'redeem', `景品交換：${rw.title}`);
  DB.redemptions.push({ id:uid(), user, rewardId, title:rw.title, cost:rw.cost, status:'requested', createdAt:new Date().toISOString() });
  saveDB(); render();
  toast('交換を申請しました！担当者の承認をお待ちください','success');
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
  reader.onload=()=>{
    try{
      const d=JSON.parse(reader.result);
      if(!d || typeof d!=='object' || !('ledger' in d)) throw new Error('形式が不正です');
      if(!confirm('現在のデータを上書きします。よろしいですか？')) return;
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

  // ログイン
  const ln=document.querySelector('[data-act="login-new"]');
  if(ln) ln.onclick=()=>{
    const name=(document.getElementById('login-name').value||'').trim();
    const dept=(document.getElementById('login-dept').value||'').trim();
    if(!name){ toast('お名前を入力してください','error'); return; }
    if(!DB.users[name]) DB.users[name]={ dept, joinedAt:new Date().toISOString() };
    else if(dept) DB.users[name].dept=dept;
    DB.currentUser=name; saveDB(); VIEW='home'; render();
    toast(`ようこそ、${name}さん！`,'success');
  };
  const le=document.querySelector('[data-act="login-existing"]');
  if(le) le.onclick=()=>{
    const v=document.getElementById('login-existing').value;
    if(!v){ toast('名前を選択してください','error'); return; }
    DB.currentUser=v; saveDB(); VIEW='home'; render();
  };

  // generic data-act
  document.querySelectorAll('[data-act]').forEach(el=>{
    const act=el.getAttribute('data-act');
    if(['login-new','login-existing'].includes(act)) return;
    el.onclick=(ev)=>handleAct(act, el, ev);
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
    case 'admin': go('admin'); break;
    case 'submit-post': doSubmitPost(); break;
    case 'post-course': postDraftCourse=id; go('post'); break;
    case 'like': doLike(id); break;
    case 'redeem': doRedeem(id); break;
    case 'rank-tab': rankTab=el.getAttribute('data-v'); render(); break;
    case 'gacha-close': closeModal(); go('home'); toast('コインを獲得しました！','success'); break;
    case 'export': exportData(); break;
    case 'logout': if(confirm('ログアウトしますか？')){ DB.currentUser=null; saveDB(); VIEW='home'; render(); } break;
    case 'save-rules': saveRules(); break;
    case 'add-course': addCourse(); break;
    case 'del-course': if(confirm('このテーマを削除しますか？')){ DB.config.courses=DB.config.courses.filter(c=>c.id!==id); saveDB(); render(); } break;
    case 'add-reward': addReward(); break;
    case 'del-reward': if(confirm('この景品を削除しますか？')){ DB.config.rewards=DB.config.rewards.filter(r=>r.id!==id); saveDB(); render(); } break;
    case 'red-status': { const rd=DB.redemptions.find(r=>r.id===id); if(rd){ rd.status=el.getAttribute('data-s'); saveDB(); render(); } break; }
  }
}

function saveRules(){
  const r=DB.config.rules;
  const v=(idv)=>{ const n=parseInt(document.getElementById(idv).value,10); return isNaN(n)?null:n; };
  const map={ base:'cfg-base', streakBonusPer:'cfg-streak', likeGive:'cfg-likegive', likeReceive:'cfg-likerecv', postsPerDayCoin:'cfg-perday' };
  Object.entries(map).forEach(([k,idv])=>{ const n=v(idv); if(n!==null) r[k]=n; });
  saveDB(); toast('コイン設定を保存しました','success');
}
function addCourse(){
  const icon=(document.getElementById('nc-icon').value||'📘').trim();
  const title=(document.getElementById('nc-title').value||'').trim();
  const cat=(document.getElementById('nc-cat').value||'その他').trim();
  if(!title){ toast('テーマ名を入力してください','error'); return; }
  DB.config.courses.push({ id:'c-'+uid(), icon, title, cat, desc:'' });
  saveDB(); render(); toast('テーマを追加しました','success');
}
function addReward(){
  const icon=(document.getElementById('nr-icon').value||'🎁').trim();
  const title=(document.getElementById('nr-title').value||'').trim();
  const cost=parseInt(document.getElementById('nr-cost').value,10);
  if(!title){ toast('景品名を入力してください','error'); return; }
  if(isNaN(cost)||cost<=0){ toast('コストを入力してください','error'); return; }
  DB.config.rewards.push({ id:'r-'+uid(), icon, title, cost, desc:'' });
  saveDB(); render(); toast('景品を追加しました','success');
}

/* ---------- 起動 ---------- */
render();
