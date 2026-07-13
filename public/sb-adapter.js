/*
 * Supabase 互換アダプタ（Supabase → Postgres/Prisma 移行 Phase 2）
 *
 * アプリ本体（tanakan-app.js）は Supabase の
 *   supabase.createClient(url, key) が返す sb を使って
 *   sb.from(table).select()/.upsert()/.delete()... と sb.auth.* を呼ぶ。
 * このファイルは同じ形の window.supabase を提供し、内部で自前の
 * サーバー API（/api/data, /api/auth/*）へ fetch する。
 * これにより tanakan-app.js の呼び出し箇所（約76）は無改変で動く。
 *
 * リアルタイム同期は廃止（channel は no-op）。更新は「更新」ボタンで手動。
 */
(function () {
  'use strict';

  async function postData(spec) {
    try {
      const res = await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(spec),
      });
      if (!res.ok && res.status !== 200) {
        // サーバーが JSON を返せなかった場合の保険
        let msg = 'HTTP ' + res.status;
        try { const j = await res.json(); msg = (j.error && j.error.message) || msg; } catch {}
        return { data: null, error: { message: msg } };
      }
      return await res.json();
    } catch (e) {
      return { data: null, error: { message: String((e && e.message) || e) } };
    }
  }

  // Supabase の from() が返すクエリビルダ相当（thenable）
  function QueryBuilder(table) {
    this.spec = {
      table: table,
      action: 'select',
      select: '*',
      filters: [],
      order: [],
      range: null,
      limit: null,
      single: null,
      rows: null,
      onConflict: null,
      updateData: null,
      returning: false,
    };
  }

  QueryBuilder.prototype.select = function (cols) {
    if (this.spec.action === 'select') {
      this.spec.select = cols || '*';
    } else {
      // 変更系の後の .select() は「変更結果を返す」指定
      this.spec.returning = true;
      this.spec.select = cols || '*';
    }
    return this;
  };
  QueryBuilder.prototype.insert = function (rows) {
    this.spec.action = 'insert';
    this.spec.rows = Array.isArray(rows) ? rows : [rows];
    return this;
  };
  QueryBuilder.prototype.upsert = function (rows, opts) {
    this.spec.action = 'upsert';
    this.spec.rows = Array.isArray(rows) ? rows : [rows];
    this.spec.onConflict = (opts && opts.onConflict) || null;
    return this;
  };
  QueryBuilder.prototype.update = function (data) {
    this.spec.action = 'update';
    this.spec.updateData = data || {};
    return this;
  };
  QueryBuilder.prototype.delete = function () {
    this.spec.action = 'delete';
    return this;
  };
  QueryBuilder.prototype.eq = function (col, val) {
    this.spec.filters.push({ type: 'eq', column: col, value: val });
    return this;
  };
  QueryBuilder.prototype.in = function (col, arr) {
    this.spec.filters.push({ type: 'in', column: col, value: arr });
    return this;
  };
  QueryBuilder.prototype.like = function (col, pat) {
    this.spec.filters.push({ type: 'like', column: col, value: pat });
    return this;
  };
  QueryBuilder.prototype.match = function (obj) {
    for (const k in obj) this.spec.filters.push({ type: 'eq', column: k, value: obj[k] });
    return this;
  };
  QueryBuilder.prototype.order = function (col, opts) {
    this.spec.order.push({ column: col, ascending: !opts || opts.ascending !== false });
    return this;
  };
  QueryBuilder.prototype.range = function (from, to) {
    this.spec.range = { from: from, to: to };
    return this;
  };
  QueryBuilder.prototype.limit = function (n) {
    this.spec.limit = n;
    return this;
  };
  QueryBuilder.prototype.maybeSingle = function () {
    this.spec.single = 'maybe';
    return this;
  };
  QueryBuilder.prototype.single = function () {
    this.spec.single = 'maybe';
    return this;
  };

  QueryBuilder.prototype._exec = async function () {
    const res = await postData(this.spec);
    // maybeSingle: 配列が返ってきたら先頭要素へ（変更系 + select + maybeSingle 対応）
    if (this.spec.single === 'maybe' && res && Array.isArray(res.data)) {
      res.data = res.data.length ? res.data[0] : null;
    }
    return res;
  };
  // thenable：await sb.from(...).select()... がそのまま {data,error} に解決される
  QueryBuilder.prototype.then = function (onFulfilled, onRejected) {
    return this._exec().then(onFulfilled, onRejected);
  };
  QueryBuilder.prototype.catch = function (onRejected) {
    return this._exec().catch(onRejected);
  };

  // ---- 認証（/api/auth/*）----
  const auth = {
    async signInWithPassword(creds) {
      const id = (creds && (creds.email || creds.id)) || '';
      const password = (creds && creds.password) || '';
      try {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify({ id: id, password: password }),
        });
        return await res.json();
      } catch (e) {
        return { data: null, error: { message: String((e && e.message) || e) } };
      }
    },
    async signOut() {
      try { await fetch('/api/auth/logout', { method: 'POST', credentials: 'same-origin' }); } catch {}
      return { error: null };
    },
    async getSession() {
      try {
        const res = await fetch('/api/auth/me', { credentials: 'same-origin' });
        return await res.json();
      } catch (e) {
        return { data: { session: null }, error: { message: String((e && e.message) || e) } };
      }
    },
    async resetPasswordForEmail() {
      // メール再設定は廃止。管理者によるパスワード変更を案内。
      return { data: null, error: { message: 'メールでの再設定は使えません。管理者にパスワード変更を依頼してください。' } };
    },
    async updateUser(attrs) {
      try {
        const res = await fetch('/api/auth/password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify({ newPassword: (attrs && attrs.password) || '' }),
        });
        return await res.json();
      } catch (e) {
        return { data: null, error: { message: String((e && e.message) || e) } };
      }
    },
  };

  // ---- リアルタイムは廃止（no-op）----
  function noopChannel() {
    const ch = {};
    ch.on = function () { return ch; };
    ch.subscribe = function () { return ch; };
    ch.unsubscribe = function () { return ch; };
    return ch;
  }

  function createClient() {
    return {
      from: function (table) { return new QueryBuilder(table); },
      auth: auth,
      channel: function () { return noopChannel(); },
      removeChannel: function () {},
      removeAllChannels: function () {},
    };
  }

  // Supabase CDN と同じグローバル形にする
  window.supabase = { createClient: createClient };
})();
