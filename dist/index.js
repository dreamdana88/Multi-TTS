// @__NO_SIDE_EFFECTS__
function un(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const B = {}, He = [], an = () => {
}, as = () => !1, At = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ot = (e) => e.startsWith("onUpdate:"), he = Object.assign, hr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, pr = Object.prototype.hasOwnProperty, N = (e, t) => pr.call(e, t), P = Array.isArray, et = (e) => ht(e) === "[object Map]", gr = (e) => ht(e) === "[object Set]", Hn = (e) => ht(e) === "[object Date]", L = (e) => typeof e == "function", K = (e) => typeof e == "string", de = (e) => typeof e == "symbol", j = (e) => e !== null && typeof e == "object", ds = (e) => (j(e) || L(e)) && L(e.then) && L(e.catch), hs = Object.prototype.toString, ht = (e) => hs.call(e), _r = (e) => ht(e).slice(8, -1), mr = (e) => ht(e) === "[object Object]", dn = (e) => K(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tt = /* @__PURE__ */ un(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Pt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, br = /-\w/g, ne = Pt(
  (e) => e.replace(br, (t) => t.slice(1).toUpperCase())
), yr = /\B([A-Z])/g, De = Pt(
  (e) => e.replace(yr, "-$1").toLowerCase()
), ps = Pt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Bt = Pt(
  (e) => e ? `on${ps(e)}` : ""
), Ee = (e, t) => !Object.is(e, t), Vt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, gs = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, vr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let jn;
const It = () => jn || (jn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function hn(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = K(s) ? Tr(s) : hn(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (K(e) || j(e))
    return e;
}
const Sr = /;(?![^(]*\))/g, xr = /:([^]+)/, wr = /\/\*[^]*?\*\//g;
function Tr(e) {
  const t = {};
  return e.replace(wr, "").split(Sr).forEach((n) => {
    if (n) {
      const s = n.split(xr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function pn(e) {
  let t = "";
  if (K(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const s = pn(e[n]);
      s && (t += s + " ");
    }
  else if (j(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Er = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Cr = /* @__PURE__ */ un(Er);
function _s(e) {
  return !!e || e === "";
}
function Ar(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = gn(e[s], t[s]);
  return n;
}
function gn(e, t) {
  if (e === t) return !0;
  let n = Hn(e), s = Hn(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = de(e), s = de(t), n || s)
    return e === t;
  if (n = P(e), s = P(t), n || s)
    return n && s ? Ar(e, t) : !1;
  if (n = j(e), s = j(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), u = t.hasOwnProperty(o);
      if (l && !u || !l && u || !gn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ms = (e) => !!(e && e.__v_isRef === !0), en = (e) => K(e) ? e : e == null ? "" : P(e) || j(e) && (e.toString === hs || !L(e.toString)) ? ms(e) ? en(e.value) : JSON.stringify(e, bs, 2) : String(e), bs = (e, t) => ms(t) ? bs(e, t.value) : et(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Kt(s, i) + " =>"] = r, n),
    {}
  )
} : gr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Kt(n))
} : de(t) ? Kt(t) : j(t) && !P(t) && !mr(t) ? String(t) : t, Kt = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    de(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let q;
class Or {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && q && (q.active ? (this.parent = q, this.index = (q.scopes || (q.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes) {
        const s = this.scopes.slice();
        for (t = 0, n = s.length; t < n; t++)
          s[t].pause();
      }
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes) {
        const r = this.scopes.slice();
        for (t = 0, n = r.length; t < n; t++)
          r[t].resume();
      }
      const s = this.effects.slice();
      for (t = 0, n = s.length; t < n; t++)
        s[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = q;
      try {
        return q = this, t();
      } finally {
        q = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = q, q = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (q === this)
        q = this.prevScope;
      else {
        let t = q;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const r = this.scopes.slice();
        for (n = 0, s = r.length; n < s; n++)
          r[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
let $;
const Ut = /* @__PURE__ */ new WeakSet();
class Pr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, q && (q.active ? q.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ut.has(this) && (Ut.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ir(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bn(this), vs(this);
    const t = $, n = se;
    $ = this, se = !0;
    try {
      return this.fn();
    } finally {
      Ss(this), $ = t, se = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        bn(t);
      this.deps = this.depsTail = void 0, Bn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ut.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    tn(this) && this.run();
  }
  get dirty() {
    return tn(this);
  }
}
let ys = 0, nt, st;
function Ir(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = st, st = e;
    return;
  }
  e.next = nt, nt = e;
}
function _n() {
  ys++;
}
function mn() {
  if (--ys > 0)
    return;
  if (st) {
    let t = st;
    for (st = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; nt; ) {
    let t = nt;
    for (nt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function vs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ss(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), bn(s), Rr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function tn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Mr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Mr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === vt) || (e.globalVersion = vt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !tn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = $, s = se;
  $ = e, se = !0;
  try {
    vs(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ee(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    $ = n, se = s, Ss(e), e.flags &= -3;
  }
}
function bn(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      bn(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Rr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let se = !0;
const xs = [];
function Be() {
  xs.push(se), se = !1;
}
function Ve() {
  const e = xs.pop();
  se = e === void 0 ? !0 : e;
}
function Bn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = $;
    $ = void 0;
    try {
      t();
    } finally {
      $ = n;
    }
  }
}
let vt = 0;
class Dr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Fr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!$ || !se || $ === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== $)
      n = this.activeLink = new Dr($, this), $.deps ? (n.prevDep = $.depsTail, $.depsTail.nextDep = n, $.depsTail = n) : $.deps = $.depsTail = n, ws(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = $.depsTail, n.nextDep = void 0, $.depsTail.nextDep = n, $.depsTail = n, $.deps === n && ($.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, vt++, this.notify(t);
  }
  notify(t) {
    _n();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      mn();
    }
  }
}
function ws(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        ws(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const nn = /* @__PURE__ */ new WeakMap(), Ce = /* @__PURE__ */ Symbol(
  ""
), sn = /* @__PURE__ */ Symbol(
  ""
), ct = /* @__PURE__ */ Symbol(
  ""
);
function Y(e, t, n) {
  if (se && $) {
    let s = nn.get(e);
    s || nn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Fr()), r.map = s, r.key = n), r.track();
  }
}
function be(e, t, n, s, r, i) {
  const o = nn.get(e);
  if (!o) {
    vt++;
    return;
  }
  const l = (u) => {
    u && u.trigger();
  };
  if (_n(), t === "clear")
    o.forEach(l);
  else {
    const u = P(e), d = u && dn(n);
    if (u && n === "length") {
      const h = Number(s);
      o.forEach((b, T) => {
        (T === "length" || T === ct || !de(T) && T >= h) && l(b);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), d && l(o.get(ct)), t) {
        case "add":
          u ? d && l(o.get("length")) : (l(o.get(Ce)), et(e) && l(o.get(sn)));
          break;
        case "delete":
          u || (l(o.get(Ce)), et(e) && l(o.get(sn)));
          break;
        case "set":
          et(e) && l(o.get(Ce));
          break;
      }
  }
  mn();
}
function Ne(e) {
  const t = /* @__PURE__ */ R(e);
  return t === e ? t : (Y(t, "iterate", ct), /* @__PURE__ */ Ie(e) ? t : t.map(Me));
}
function yn(e) {
  return Y(e = /* @__PURE__ */ R(e), "iterate", ct), e;
}
function ue(e, t) {
  return /* @__PURE__ */ Pe(e) ? ft(/* @__PURE__ */ xn(e) ? Me(t) : t) : Me(t);
}
const Nr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Wt(this, Symbol.iterator, (e) => ue(this, e));
  },
  concat(...e) {
    return Ne(this).concat(
      ...e.map((t) => P(t) ? Ne(t) : t)
    );
  },
  entries() {
    return Wt(this, "entries", (e) => (e[1] = ue(this, e[1]), e));
  },
  every(e, t) {
    return pe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return pe(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => ue(this, s)),
      arguments
    );
  },
  find(e, t) {
    return pe(
      this,
      "find",
      e,
      t,
      (n) => ue(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return pe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return pe(
      this,
      "findLast",
      e,
      t,
      (n) => ue(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return pe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return pe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return qt(this, "includes", e);
  },
  indexOf(...e) {
    return qt(this, "indexOf", e);
  },
  join(e) {
    return Ne(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return qt(this, "lastIndexOf", e);
  },
  map(e, t) {
    return pe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Je(this, "pop");
  },
  push(...e) {
    return Je(this, "push", e);
  },
  reduce(e, ...t) {
    return Vn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Vn(this, "reduceRight", e, t);
  },
  shift() {
    return Je(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return pe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Je(this, "splice", e);
  },
  toReversed() {
    return Ne(this).toReversed();
  },
  toSorted(e) {
    return Ne(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ne(this).toSpliced(...e);
  },
  unshift(...e) {
    return Je(this, "unshift", e);
  },
  values() {
    return Wt(this, "values", (e) => ue(this, e));
  }
};
function Wt(e, t, n) {
  const s = yn(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ Ie(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const $r = Array.prototype;
function pe(e, t, n, s, r, i) {
  const o = yn(e), l = o !== e && !/* @__PURE__ */ Ie(e), u = o[t];
  if (u !== $r[t]) {
    const b = u.apply(e, i);
    return l ? Me(b) : b;
  }
  let d = n;
  o !== e && (l ? d = function(b, T) {
    return n.call(this, ue(e, b), T, e);
  } : n.length > 2 && (d = function(b, T) {
    return n.call(this, b, T, e);
  }));
  const h = u.call(o, d, s);
  return l && r ? r(h) : h;
}
function Vn(e, t, n, s) {
  const r = yn(e), i = r !== e && !/* @__PURE__ */ Ie(e);
  let o = n, l = !1;
  r !== e && (i ? (l = s.length === 0, o = function(d, h, b) {
    return l && (l = !1, d = ue(e, d)), n.call(this, d, ue(e, h), b, e);
  }) : n.length > 3 && (o = function(d, h, b) {
    return n.call(this, d, h, b, e);
  }));
  const u = r[t](o, ...s);
  return l ? ue(e, u) : u;
}
function qt(e, t, n) {
  const s = /* @__PURE__ */ R(e);
  Y(s, "iterate", ct);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ wn(n[0]) ? (n[0] = /* @__PURE__ */ R(n[0]), s[t](...n)) : r;
}
function Je(e, t, n = []) {
  Be(), _n();
  const s = (/* @__PURE__ */ R(e))[t].apply(e, n);
  return mn(), Ve(), s;
}
const Lr = /* @__PURE__ */ un("__proto__,__v_isRef,__isVue"), Ts = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(de)
);
function Hr(e) {
  de(e) || (e = String(e));
  const t = /* @__PURE__ */ R(this);
  return Y(t, "has", e), t.hasOwnProperty(e);
}
class Es {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? Xr : Ps : i ? Os : As).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = P(t);
    if (!r) {
      let u;
      if (o && (u = Nr[n]))
        return u;
      if (n === "hasOwnProperty")
        return Hr;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ re(t) ? t : s
    );
    if ((de(n) ? Ts.has(n) : Lr(n)) || (r || Y(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ re(l)) {
      const u = o && dn(n) ? l : l.value;
      return r && j(u) ? /* @__PURE__ */ on(u) : u;
    }
    return j(l) ? r ? /* @__PURE__ */ on(l) : /* @__PURE__ */ Is(l) : l;
  }
}
class Cs extends Es {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = P(t) && dn(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Pe(i);
      if (!/* @__PURE__ */ Ie(s) && !/* @__PURE__ */ Pe(s) && (i = /* @__PURE__ */ R(i), s = /* @__PURE__ */ R(s)), !o && /* @__PURE__ */ re(i) && !/* @__PURE__ */ re(s))
        return d || (i.value = s), !0;
    }
    const l = o ? Number(n) < t.length : N(t, n), u = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ re(t) ? t : r
    );
    return t === /* @__PURE__ */ R(r) && u && (l ? Ee(s, i) && be(t, "set", n, s) : be(t, "add", n, s)), u;
  }
  deleteProperty(t, n) {
    const s = N(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && be(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!de(n) || !Ts.has(n)) && Y(t, "has", n), s;
  }
  ownKeys(t) {
    return Y(
      t,
      "iterate",
      P(t) ? "length" : Ce
    ), Reflect.ownKeys(t);
  }
}
class jr extends Es {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Br = /* @__PURE__ */ new Cs(), Vr = /* @__PURE__ */ new jr(), Kr = /* @__PURE__ */ new Cs(!0);
const rn = (e) => e, mt = (e) => Reflect.getPrototypeOf(e);
function Ur(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ R(r), o = et(i), l = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, d = r[e](...s), h = n ? rn : t ? ft : Me;
    return !t && Y(
      i,
      "iterate",
      u ? sn : Ce
    ), he(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: b, done: T } = d.next();
          return T ? { value: b, done: T } : {
            value: l ? [h(b[0]), h(b[1])] : h(b),
            done: T
          };
        }
      }
    );
  };
}
function bt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Wr(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ R(i), l = /* @__PURE__ */ R(r);
      e || (Ee(r, l) && Y(o, "get", r), Y(o, "get", l));
      const { has: u } = mt(o), d = t ? rn : e ? ft : Me;
      if (u.call(o, r))
        return d(i.get(r));
      if (u.call(o, l))
        return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Y(/* @__PURE__ */ R(r), "iterate", Ce), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ R(i), l = /* @__PURE__ */ R(r);
      return e || (Ee(r, l) && Y(o, "has", r), Y(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, u = /* @__PURE__ */ R(l), d = t ? rn : e ? ft : Me;
      return !e && Y(u, "iterate", Ce), l.forEach((h, b) => r.call(i, d(h), d(b), o));
    }
  };
  return he(
    n,
    e ? {
      add: bt("add"),
      set: bt("set"),
      delete: bt("delete"),
      clear: bt("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ R(this), o = mt(i), l = /* @__PURE__ */ R(r), u = !t && !/* @__PURE__ */ Ie(r) && !/* @__PURE__ */ Pe(r) ? l : r;
        return o.has.call(i, u) || Ee(r, u) && o.has.call(i, r) || Ee(l, u) && o.has.call(i, l) || (i.add(u), be(i, "add", u, u)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ Ie(i) && !/* @__PURE__ */ Pe(i) && (i = /* @__PURE__ */ R(i));
        const o = /* @__PURE__ */ R(this), { has: l, get: u } = mt(o);
        let d = l.call(o, r);
        d || (r = /* @__PURE__ */ R(r), d = l.call(o, r));
        const h = u.call(o, r);
        return o.set(r, i), d ? Ee(i, h) && be(o, "set", r, i) : be(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ R(this), { has: o, get: l } = mt(i);
        let u = o.call(i, r);
        u || (r = /* @__PURE__ */ R(r), u = o.call(i, r)), l && l.call(i, r);
        const d = i.delete(r);
        return u && be(i, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ R(this), i = r.size !== 0, o = r.clear();
        return i && be(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Ur(r, e, t);
  }), n;
}
function vn(e, t) {
  const n = Wr(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    N(n, r) && r in s ? n : s,
    r,
    i
  );
}
const qr = {
  get: /* @__PURE__ */ vn(!1, !1)
}, Yr = {
  get: /* @__PURE__ */ vn(!1, !0)
}, Gr = {
  get: /* @__PURE__ */ vn(!0, !1)
};
const As = /* @__PURE__ */ new WeakMap(), Os = /* @__PURE__ */ new WeakMap(), Ps = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap();
function Jr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function Is(e) {
  return /* @__PURE__ */ Pe(e) ? e : Sn(
    e,
    !1,
    Br,
    qr,
    As
  );
}
// @__NO_SIDE_EFFECTS__
function zr(e) {
  return Sn(
    e,
    !1,
    Kr,
    Yr,
    Os
  );
}
// @__NO_SIDE_EFFECTS__
function on(e) {
  return Sn(
    e,
    !0,
    Vr,
    Gr,
    Ps
  );
}
function Sn(e, t, n, s, r) {
  if (!j(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = Jr(_r(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function xn(e) {
  return /* @__PURE__ */ Pe(e) ? /* @__PURE__ */ xn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function wn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function R(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ R(t) : e;
}
function kr(e) {
  return !N(e, "__v_skip") && Object.isExtensible(e) && gs(e, "__v_skip", !0), e;
}
const Me = (e) => j(e) ? /* @__PURE__ */ Is(e) : e, ft = (e) => j(e) ? /* @__PURE__ */ on(e) : e;
// @__NO_SIDE_EFFECTS__
function re(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Zr(e) {
  return /* @__PURE__ */ re(e) ? e.value : e;
}
const Qr = {
  get: (e, t, n) => t === "__v_raw" ? e : Zr(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ re(r) && !/* @__PURE__ */ re(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Ms(e) {
  return /* @__PURE__ */ xn(e) ? e : new Proxy(e, Qr);
}
function pt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Mt(r, t, n);
  }
}
function xe(e, t, n, s) {
  if (L(e)) {
    const r = pt(e, t, n, s);
    return r && ds(r) && r.catch((i) => {
      Mt(i, t, n);
    }), r;
  }
  if (P(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(xe(e[i], t, n, s));
    return r;
  }
}
function Mt(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || B;
  if (t) {
    let l = t.parent;
    const u = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const h = l.ec;
      if (h) {
        for (let b = 0; b < h.length; b++)
          if (h[b](e, u, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Be(), pt(i, null, 10, [
        e,
        u,
        d
      ]), Ve();
      return;
    }
  }
  ei(e, n, r, s, o);
}
function ei(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const z = [];
let fe = -1;
const je = [];
let Se = null, $e = 0;
const Rs = /* @__PURE__ */ Promise.resolve();
let St = null;
function ti(e) {
  const t = St || Rs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ni(e) {
  let t = fe + 1, n = z.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = z[s], i = ut(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ds(e) {
  if (!(e.flags & 1)) {
    const t = ut(e), n = z[z.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ut(n) ? z.push(e) : z.splice(ni(t), 0, e), e.flags |= 1, Fs();
  }
}
function Fs() {
  St || (St = Rs.then($s));
}
function si(e) {
  if (!P(e))
    Se && e.id === -1 ? Se.splice($e + 1, 0, e) : e.flags & 1 || (je.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      je.push(e[t]);
  Fs();
}
function Kn(e, t, n = fe + 1) {
  for (; n < z.length; n++) {
    const s = z[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      z.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Ns(e) {
  if (je.length) {
    const t = [...new Set(je)].sort(
      (n, s) => ut(n) - ut(s)
    );
    if (je.length = 0, Se) {
      for (let n = 0; n < t.length; n++)
        Se.push(t[n]);
      return;
    }
    for (Se = t, $e = 0; $e < Se.length; $e++) {
      const n = Se[$e];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Se = null, $e = 0;
  }
}
const ut = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $s(e) {
  try {
    for (fe = 0; fe < z.length; fe++) {
      const t = z[fe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), pt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; fe < z.length; fe++) {
      const t = z[fe];
      t && (t.flags &= -2);
    }
    fe = -1, z.length = 0, Ns(), St = null, (z.length || je.length) && $s();
  }
}
let ye = null, Ls = null;
function xt(e) {
  const t = ye;
  return ye = e, Ls = e && e.type.__scopeId || null, t;
}
function ri(e, t = ye, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Jn(-1);
    const i = xt(t), o = Ae.length;
    let l;
    try {
      l = e(...r);
    } finally {
      for (let u = Ae.length; u > o; u--) Qs();
      xt(i), s._d && Jn(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function we(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let u = l.dir[s];
    u && (Be(), xe(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ve());
  }
}
const ii = /* @__PURE__ */ Symbol("_vte"), Rt = (e) => e.__isTeleport, Yt = /* @__PURE__ */ Symbol("_leaveCb");
function oi(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Re) {
        t = n;
        break;
      }
  }
  return t;
}
function Hs(e) {
  if (!js(e))
    return Rt(e.type) && e.children ? oi(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && L(n.default))
      return n.default();
  }
}
function Tn(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Tn(
      Rt(n.type) && Hs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function li(e, t) {
  return L(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    he({ name: e.name }, t, { setup: e })
  ) : e;
}
function ci(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Un(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const wt = /* @__PURE__ */ new WeakMap();
function rt(e, t, n, s, r = !1) {
  if (P(e)) {
    e.forEach(
      (A, G) => rt(
        A,
        t && (P(t) ? t[G] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (it(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && rt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? An(s.component) : s.el, o = r ? null : i, { i: l, r: u } = e, d = t && t.r, h = l.refs === B ? l.refs = {} : l.refs, b = l.setupState, T = /* @__PURE__ */ R(b), D = b === B ? as : (A) => Un(h, A) ? !1 : N(T, A), I = (A, G) => !(G && Un(h, G));
  if (d != null && d !== u) {
    if (Wn(t), K(d))
      h[d] = null, D(d) && (b[d] = null);
    else if (/* @__PURE__ */ re(d)) {
      const A = t;
      I(d, A.k) && (d.value = null), A.k && (h[A.k] = null);
    }
  }
  if (L(u))
    pt(u, l, 12, [o, h]);
  else {
    const A = K(u), G = /* @__PURE__ */ re(u);
    if (A || G) {
      const X = () => {
        if (e.f) {
          const H = A ? D(u) ? b[u] : h[u] : I() || !e.k ? u.value : h[e.k];
          if (r)
            P(H) && hr(H, i);
          else if (P(H))
            H.includes(i) || H.push(i);
          else if (A)
            h[u] = [i], D(u) && (b[u] = h[u]);
          else {
            const U = [i];
            I(u, e.k) && (u.value = U), e.k && (h[e.k] = U);
          }
        } else A ? (h[u] = o, D(u) && (b[u] = o)) : G && (I(u, e.k) && (u.value = o), e.k && (h[e.k] = o));
      };
      if (o) {
        const H = () => {
          X(), wt.delete(e);
        };
        H.id = -1, wt.set(e, H), Z(H, n);
      } else
        Wn(e), X();
    }
  }
}
function Wn(e) {
  const t = wt.get(e);
  t && (t.flags |= 8, wt.delete(e));
}
It().requestIdleCallback;
It().cancelIdleCallback;
const it = (e) => !!e.type.__asyncLoader, js = (e) => e.type.__isKeepAlive, fi = /* @__PURE__ */ Symbol.for("v-ndc"), ln = (e) => e ? sr(e) ? An(e) : ln(e.parent) : null, ot = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ he(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ln(e.parent),
    $root: (e) => ln(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ds(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ti.bind(e.proxy)),
    $watch: (e) => an
  })
), Gt = (e, t) => e !== B && !e.__isScriptSetup && N(e, t), ui = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: u } = e;
    if (t[0] !== "$") {
      const T = o[t];
      if (T !== void 0)
        switch (T) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Gt(s, t))
          return o[t] = 1, s[t];
        if (N(i, t))
          return o[t] = 3, i[t];
        if (n !== B && N(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const d = ot[t];
    let h, b;
    if (d)
      return t === "$attrs" && Y(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (h = l.__cssModules) && (h = h[t])
    )
      return h;
    if (n !== B && N(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      b = u.config.globalProperties, N(b, t)
    )
      return b[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Gt(r, t) ? (r[t] = n, !0) : N(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, l) {
    let u;
    return !!(n[l] || Gt(t, l) || N(i, l) || N(s, l) || N(ot, l) || N(r.config.globalProperties, l) || (u = o.__cssModules) && u[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Bs() {
  return {
    app: null,
    config: {
      isNativeTag: as,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ai = 0;
function di(e, t) {
  return function(s, r = null) {
    L(s) || (s = he({}, s)), r != null && !j(r) && (r = null);
    const i = Bs(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const d = i.app = {
      _uid: ai++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Yi,
      get config() {
        return i.config;
      },
      set config(h) {
      },
      use(h, ...b) {
        return o.has(h) || (h && L(h.install) ? (o.add(h), h.install(d, ...b)) : L(h) && (o.add(h), h(d, ...b))), d;
      },
      mixin(h) {
        return d;
      },
      component(h, b) {
        return b ? (i.components[h] = b, d) : i.components[h];
      },
      directive(h, b) {
        return b ? (i.directives[h] = b, d) : i.directives[h];
      },
      mount(h, b, T) {
        if (!u) {
          const D = d._ceVNode || Oe(s, r);
          return D.appContext = i, T === !0 ? T = "svg" : T === !1 && (T = void 0), e(D, h, T), u = !0, d._container = h, h.__vue_app__ = d, An(D.component);
        }
      },
      onUnmount(h) {
        l.push(h);
      },
      unmount() {
        u && (xe(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(h, b) {
        return i.provides[h] = b, d;
      },
      runWithContext(h) {
        return h();
      }
    };
    return d;
  };
}
const hi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ne(t)}Modifiers`] || e[`${De(t)}Modifiers`];
function pi(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || B;
  let r = n;
  const i = t.startsWith("update:"), o = i && hi(s, t.slice(7));
  o && (o.trim && (r = n.map((h) => K(h) ? h.trim() : h)), o.number && (r = n.map(vr)));
  let l, u = s[l = Bt(t)] || // also try camelCase event handler (#2249)
  s[l = Bt(ne(t))];
  !u && i && (u = s[l = Bt(De(t))]), u && xe(
    u,
    e,
    6,
    r
  );
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, xe(
      d,
      e,
      6,
      r
    );
  }
}
function gi(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {};
  return i ? (P(i) ? i.forEach((l) => o[l] = null) : he(o, i), j(e) && s.set(e, o), o) : (j(e) && s.set(e, null), null);
}
function Dt(e, t) {
  return !e || !At(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), N(e, t[0].toLowerCase() + t.slice(1)) || N(e, De(t)) || N(e, t));
}
function qn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: u,
    render: d,
    renderCache: h,
    props: b,
    data: T,
    setupState: D,
    ctx: I,
    inheritAttrs: A
  } = e, G = xt(e);
  let X, H;
  try {
    if (n.shapeFlag & 4) {
      const J = r || s, qe = J;
      X = ae(
        d.call(
          qe,
          J,
          h,
          b,
          D,
          T,
          I
        )
      ), H = l;
    } else {
      const J = t;
      X = ae(
        J.length > 1 ? J(
          b,
          { attrs: l, slots: o, emit: u }
        ) : J(
          b,
          null
        )
      ), H = t.props ? l : _i(l);
    }
  } catch (J) {
    Ae.length = 0, Mt(J, e, 1), X = Oe(Re);
  }
  let U = X;
  if (H && A !== !1) {
    const J = Object.keys(H), { shapeFlag: qe } = U;
    J.length && qe & 7 && (i && J.some(Ot) && (H = mi(
      H,
      i
    )), U = Ke(U, H, !1, !0));
  }
  if (n.dirs && (U = Ke(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const J = Rt(U.type) && Hs(U) || U;
    Tn(J, n.transition);
  }
  return X = U, xt(G), X;
}
const _i = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || At(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, mi = (e, t) => {
  const n = {};
  for (const s in e)
    (!Ot(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function bi(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: u } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? Yn(s, o, d) : !!o;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let b = 0; b < h.length; b++) {
        const T = h[b];
        if (Vs(o, s, T) && !Dt(d, T))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Yn(s, o, d) : !0 : !!o;
  return !1;
}
function Yn(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (Vs(t, e, i) && !Dt(n, i))
      return !0;
  }
  return !1;
}
function Vs(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && j(s) && j(r) ? !gn(s, r) : s !== r;
}
function yi({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Ks = {}, Us = () => Object.create(Ks), Ws = (e) => Object.getPrototypeOf(e) === Ks;
function vi(e, t, n, s = !1) {
  const r = {}, i = Us();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), qs(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ zr(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Si(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ R(r), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const h = e.vnode.dynamicProps;
      for (let b = 0; b < h.length; b++) {
        let T = h[b];
        if (Dt(e.emitsOptions, T))
          continue;
        const D = t[T];
        if (u)
          if (N(i, T))
            D !== i[T] && (i[T] = D, d = !0);
          else {
            const I = ne(T);
            r[I] = cn(
              u,
              l,
              I,
              D,
              e,
              !1
            );
          }
        else
          D !== i[T] && (i[T] = D, d = !0);
      }
    }
  } else {
    qs(e, t, r, i) && (d = !0);
    let h;
    for (const b in l)
      (!t || // for camelCase
      !N(t, b) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = De(b)) === b || !N(t, h))) && (u ? n && // for camelCase
      (n[b] !== void 0 || // for kebab-case
      n[h] !== void 0) && (r[b] = cn(
        u,
        l,
        b,
        void 0,
        e,
        !0
      )) : delete r[b]);
    if (i !== l)
      for (const b in i)
        (!t || !N(t, b)) && (delete i[b], d = !0);
  }
  d && be(e.attrs, "set", "");
}
function qs(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let u in t) {
      if (tt(u))
        continue;
      const d = t[u];
      let h;
      r && N(r, h = ne(u)) ? !i || !i.includes(h) ? n[h] = d : (l || (l = {}))[h] = d : Dt(e.emitsOptions, u) || (!(u in s) || d !== s[u]) && (s[u] = d, o = !0);
    }
  if (i) {
    const u = /* @__PURE__ */ R(n), d = l || B;
    for (let h = 0; h < i.length; h++) {
      const b = i[h];
      n[b] = cn(
        r,
        u,
        b,
        d[b],
        e,
        !N(d, b)
      );
    }
  }
  return o;
}
function cn(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = N(o, "default");
    if (l && s === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && L(u)) {
        const { propsDefaults: d } = r;
        if (n in d)
          s = d[n];
        else {
          const h = nr(r);
          s = d[n] = u.call(
            null,
            t
          ), h();
        }
      } else
        s = u;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === De(n)) && (s = !0));
  }
  return s;
}
function xi(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  if (!i)
    return j(e) && s.set(e, He), He;
  if (P(i))
    for (let d = 0; d < i.length; d++) {
      const h = ne(i[d]);
      Gn(h) && (o[h] = B);
    }
  else if (i)
    for (const d in i) {
      const h = ne(d);
      if (Gn(h)) {
        const b = i[d], T = o[h] = P(b) || L(b) ? { type: b } : he({}, b), D = T.type;
        let I = !1, A = !0;
        if (P(D))
          for (let G = 0; G < D.length; ++G) {
            const X = D[G], H = L(X) && X.name;
            if (H === "Boolean") {
              I = !0;
              break;
            } else H === "String" && (A = !1);
          }
        else
          I = L(D) && D.name === "Boolean";
        T[
          0
          /* shouldCast */
        ] = I, T[
          1
          /* shouldCastTrue */
        ] = A, (I || N(T, "default")) && l.push(h);
      }
    }
  const u = [o, l];
  return j(e) && s.set(e, u), u;
}
function Gn(e) {
  return e[0] !== "$" && !tt(e);
}
const En = (e) => e === "_" || e === "_ctx" || e === "$stable", Cn = (e) => P(e) ? e.map(ae) : [ae(e)], wi = (e, t, n) => {
  if (t._n)
    return t;
  const s = ri((...r) => Cn(t(...r)), n);
  return s._c = !1, s;
}, Ys = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (En(r)) continue;
    const i = e[r];
    if (L(i))
      t[r] = wi(r, i, s);
    else if (i != null) {
      const o = Cn(i);
      t[r] = () => o;
    }
  }
}, Gs = (e, t) => {
  const n = Cn(t);
  e.slots.default = () => n;
}, Xs = (e, t, n) => {
  for (const s in t)
    (n || !En(s)) && (e[s] = t[s]);
}, Ti = (e, t, n) => {
  const s = e.slots = Us();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Xs(s, t, n), n && gs(s, "_", r, !0)) : Ys(t, s);
  } else t && Gs(e, t);
}, Ei = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = B;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Xs(r, t, n) : (i = !t.$stable, Ys(t, r)), o = t;
  } else t && (Gs(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !En(l) && o[l] == null && delete r[l];
}, Z = Ii;
function Ci(e) {
  return Ai(e);
}
function Ai(e, t) {
  const n = It();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: u,
    setText: d,
    setElementText: h,
    parentNode: b,
    nextSibling: T,
    setScopeId: D = an,
    insertStaticContent: I
  } = e, A = (c, f, a, m = null, _ = null, p = null, S = void 0, v = null, y = !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !ze(c, f) && (m = _t(c), ve(c, _, p, !0), c = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: g, ref: E, shapeFlag: x } = f;
    switch (g) {
      case Ft:
        G(c, f, a, m);
        break;
      case Re:
        X(c, f, a, m);
        break;
      case Jt:
        c == null && H(f, a, m, S);
        break;
      case _e:
        lr(
          c,
          f,
          a,
          m,
          _,
          p,
          S,
          v,
          y
        );
        break;
      default:
        x & 1 ? qe(
          c,
          f,
          a,
          m,
          _,
          p,
          S,
          v,
          y
        ) : x & 6 ? cr(
          c,
          f,
          a,
          m,
          _,
          p,
          S,
          v,
          y
        ) : (x & 64 || x & 128) && g.process(
          c,
          f,
          a,
          m,
          _,
          p,
          S,
          v,
          y,
          Ge
        );
    }
    E != null && _ ? rt(E, c && c.ref, p, f || c, !f) : E == null && c && c.ref != null && rt(c.ref, null, p, c, !0);
  }, G = (c, f, a, m) => {
    if (c == null)
      s(
        f.el = l(f.children),
        a,
        m
      );
    else {
      const _ = f.el = c.el;
      f.children !== c.children && d(_, f.children);
    }
  }, X = (c, f, a, m) => {
    c == null ? s(
      f.el = u(f.children || ""),
      a,
      m
    ) : f.el = c.el;
  }, H = (c, f, a, m) => {
    [c.el, c.anchor] = I(
      c.children,
      f,
      a,
      m,
      c.el,
      c.anchor
    );
  }, U = ({ el: c, anchor: f }, a, m) => {
    let _;
    for (; c && c !== f; )
      _ = T(c), s(c, a, m), c = _;
    s(f, a, m);
  }, J = ({ el: c, anchor: f }) => {
    let a;
    for (; c && c !== f; )
      a = T(c), r(c), c = a;
    r(f);
  }, qe = (c, f, a, m, _, p, S, v, y) => {
    if (f.type === "svg" ? S = "svg" : f.type === "math" && (S = "mathml"), c == null)
      On(
        f,
        a,
        m,
        _,
        p,
        S,
        v,
        y
      );
    else {
      const g = c.el && c.el._isVueCE ? c.el : null;
      try {
        g && g._beginPatch(), or(
          c,
          f,
          _,
          p,
          S,
          v,
          y
        );
      } finally {
        g && g._endPatch();
      }
    }
  }, On = (c, f, a, m, _, p, S, v) => {
    let y, g;
    const { props: E, shapeFlag: x, transition: w, dirs: C } = c;
    if (y = c.el = o(
      c.type,
      p,
      E && E.is,
      E
    ), x & 8 ? h(y, c.children) : x & 16 && Fe(
      c.children,
      y,
      null,
      m,
      _,
      Xt(c, p),
      S,
      v
    ), C && we(c, null, m, "created"), Nt(y, c, c.scopeId, S, m), E) {
      for (const F in E)
        F !== "value" && !tt(F) && i(y, F, null, E[F], p, m);
      "value" in E && i(y, "value", null, E.value, p), (g = E.onVnodeBeforeMount) && ce(g, m, c);
    }
    C && we(c, null, m, "beforeMount");
    const O = Oi(_, w);
    O && w.beforeEnter(y), s(y, f, a), ((g = E && E.onVnodeMounted) || O || C) && Z(() => {
      g && ce(g, m, c), O && w.enter(y), C && we(c, null, m, "mounted");
    }, _);
  }, Nt = (c, f, a, m, _) => {
    if (a && D(c, a), m)
      for (let p = 0; p < m.length; p++)
        D(c, m[p]);
    if (_) {
      let p = _.subTree;
      if (f === p || Zs(p.type) && (p.ssContent === f || p.ssFallback === f)) {
        const S = _.vnode;
        Nt(
          c,
          S,
          S.scopeId,
          S.slotScopeIds,
          _.parent
        );
      }
    }
  }, Fe = (c, f, a, m, _, p, S, v, y = 0) => {
    for (let g = y; g < c.length; g++) {
      const E = c[g] = v ? me(c[g]) : ae(c[g]);
      A(
        null,
        E,
        f,
        a,
        m,
        _,
        p,
        S,
        v
      );
    }
  }, or = (c, f, a, m, _, p, S) => {
    const v = f.el = c.el;
    let { patchFlag: y, dynamicChildren: g, dirs: E } = f;
    y |= c.patchFlag & 16;
    const x = c.props || B, w = f.props || B;
    let C;
    if (a && Te(a, !1), (C = w.onVnodeBeforeUpdate) && ce(C, a, f, c), E && we(f, c, a, "beforeUpdate"), a && Te(a, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    g && (!c.dynamicChildren || c.dynamicChildren.length !== g.length) && (y = 0, S = !1, g = null), (x.innerHTML && w.innerHTML == null || x.textContent && w.textContent == null) && h(v, ""), g ? $t(
      c.dynamicChildren,
      g,
      v,
      a,
      m,
      Xt(f, _),
      p
    ) : S || Ht(
      c,
      f,
      v,
      null,
      a,
      m,
      Xt(f, _),
      p,
      !1
    ), y > 0) {
      if (y & 16)
        Pn(v, x, w, a, _);
      else if (y & 2 && x.class !== w.class && i(v, "class", null, w.class, _), y & 4 && i(v, "style", x.style, w.style, _), y & 8) {
        const O = f.dynamicProps;
        for (let F = 0; F < O.length; F++) {
          const M = O[F], V = x[M], W = w[M];
          (W !== V || M === "value") && i(v, M, V, W, _, a);
        }
      }
      y & 1 && c.children !== f.children && h(v, f.children);
    } else !S && g == null && Pn(v, x, w, a, _);
    ((C = w.onVnodeUpdated) || E) && Z(() => {
      C && ce(C, a, f, c), E && we(f, c, a, "updated");
    }, m);
  }, $t = (c, f, a, m, _, p, S) => {
    for (let v = 0; v < f.length; v++) {
      const y = c[v], g = f[v], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ze(y, g) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? b(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          a
        )
      );
      A(
        y,
        g,
        E,
        null,
        m,
        _,
        p,
        S,
        !0
      );
    }
  }, Pn = (c, f, a, m, _) => {
    if (f !== a) {
      if (f !== B)
        for (const p in f)
          !tt(p) && !(p in a) && i(
            c,
            p,
            f[p],
            null,
            _,
            m
          );
      for (const p in a) {
        if (tt(p)) continue;
        const S = a[p], v = f[p];
        S !== v && p !== "value" && i(c, p, v, S, _, m);
      }
      "value" in a && i(c, "value", f.value, a.value, _);
    }
  }, lr = (c, f, a, m, _, p, S, v, y) => {
    const g = f.el = c ? c.el : l(""), E = f.anchor = c ? c.anchor : l("");
    let { patchFlag: x, dynamicChildren: w, slotScopeIds: C } = f;
    C && (v = v ? v.concat(C) : C), c == null ? (s(g, a, m), s(E, a, m), Fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      a,
      E,
      _,
      p,
      S,
      v,
      y
    )) : x > 0 && x & 64 && w && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === w.length ? ($t(
      c.dynamicChildren,
      w,
      a,
      _,
      p,
      S,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || _ && f === _.subTree) && Js(
      c,
      f,
      !0
      /* shallow */
    )) : Ht(
      c,
      f,
      a,
      E,
      _,
      p,
      S,
      v,
      y
    );
  }, cr = (c, f, a, m, _, p, S, v, y) => {
    f.slotScopeIds = v, c == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      a,
      m,
      S,
      y
    ) : In(
      f,
      a,
      m,
      _,
      p,
      S,
      y
    ) : fr(c, f, y);
  }, In = (c, f, a, m, _, p, S) => {
    const v = c.component = Bi(
      c,
      m,
      _
    );
    if (js(c) && (v.ctx.renderer = Ge), Vi(v, !1, S), v.asyncDep) {
      if (_ && _.registerDep(v, Mn, S), !c.el) {
        const y = v.subTree = Oe(Re);
        X(null, y, f, a), c.placeholder = y.el;
      }
    } else
      Mn(
        v,
        c,
        f,
        a,
        _,
        p,
        S
      );
  }, fr = (c, f, a) => {
    const m = f.component = c.component;
    if (bi(c, f, a))
      if (m.asyncDep && !m.asyncResolved) {
        Lt(m, f, a);
        return;
      } else
        m.next = f, m.update();
    else
      f.el = c.el, m.vnode = f;
  }, Mn = (c, f, a, m, _, p, S) => {
    const v = () => {
      if (c.isMounted) {
        let { next: x, bu: w, u: C, parent: O, vnode: F } = c;
        {
          const oe = zs(c);
          if (oe) {
            x && (x.el = F.el, Lt(c, x, S)), oe.asyncDep.then(() => {
              Z(() => {
                c.isUnmounted || g();
              }, _);
            });
            return;
          }
        }
        let M = x, V;
        Te(c, !1), x ? (x.el = F.el, Lt(c, x, S)) : x = F, w && Vt(w), (V = x.props && x.props.onVnodeBeforeUpdate) && ce(V, O, x, F), Te(c, !0);
        const W = qn(c), ie = c.subTree;
        c.subTree = W, A(
          ie,
          W,
          // parent may have changed if it's in a teleport
          b(ie.el),
          // anchor may have changed if it's in a fragment
          _t(ie),
          c,
          _,
          p
        ), x.el = W.el, M === null && yi(c, W.el), C && Z(C, _), (V = x.props && x.props.onVnodeUpdated) && Z(
          () => ce(V, O, x, F),
          _
        );
      } else {
        let x;
        const { el: w, props: C } = f, { bm: O, m: F, parent: M, root: V, type: W } = c, ie = it(f);
        Te(c, !1), O && Vt(O), !ie && (x = C && C.onVnodeBeforeMount) && ce(x, M, f), Te(c, !0);
        {
          V.ce && V.ce._hasShadowRoot() && V.ce._injectChildStyle(
            W,
            c.parent ? c.parent.type : void 0
          );
          const oe = c.subTree = qn(c);
          A(
            null,
            oe,
            a,
            m,
            c,
            _,
            p
          ), f.el = oe.el;
        }
        if (F && Z(F, _), !ie && (x = C && C.onVnodeMounted)) {
          const oe = f;
          Z(
            () => ce(x, M, oe),
            _
          );
        }
        (f.shapeFlag & 256 || M && it(M.vnode) && M.vnode.shapeFlag & 256) && c.a && Z(c.a, _), c.isMounted = !0, f = a = m = null;
      }
    };
    c.scope.on();
    const y = c.effect = new Pr(v);
    c.scope.off();
    const g = c.update = y.run.bind(y), E = c.job = y.runIfDirty.bind(y);
    E.i = c, E.id = c.uid, y.scheduler = () => Ds(E), Te(c, !0), g();
  }, Lt = (c, f, a) => {
    f.component = c;
    const m = c.vnode.props;
    c.vnode = f, c.next = null, Si(c, f.props, m, a), Ei(c, f.children, a), Be(), Kn(c), Ve();
  }, Ht = (c, f, a, m, _, p, S, v, y = !1) => {
    const g = c && c.children, E = c ? c.shapeFlag : 0, x = f.children, { patchFlag: w, shapeFlag: C } = f;
    if (w > 0) {
      if (w & 128) {
        Rn(
          g,
          x,
          a,
          m,
          _,
          p,
          S,
          v,
          y
        );
        return;
      } else if (w & 256) {
        ur(
          g,
          x,
          a,
          m,
          _,
          p,
          S,
          v,
          y
        );
        return;
      }
    }
    C & 8 ? (E & 16 && Ye(g, _, p), x !== g && h(a, x)) : E & 16 ? C & 16 ? Rn(
      g,
      x,
      a,
      m,
      _,
      p,
      S,
      v,
      y
    ) : Ye(g, _, p, !0) : (E & 8 && h(a, ""), C & 16 && Fe(
      x,
      a,
      m,
      _,
      p,
      S,
      v,
      y
    ));
  }, ur = (c, f, a, m, _, p, S, v, y) => {
    c = c || He, f = f || He;
    const g = c.length, E = f.length, x = Math.min(g, E);
    let w;
    for (w = 0; w < x; w++) {
      const C = f[w] = y ? me(f[w]) : ae(f[w]);
      A(
        c[w],
        C,
        a,
        null,
        _,
        p,
        S,
        v,
        y
      );
    }
    g > E ? Ye(
      c,
      _,
      p,
      !0,
      !1,
      x
    ) : Fe(
      f,
      a,
      m,
      _,
      p,
      S,
      v,
      y,
      x
    );
  }, Rn = (c, f, a, m, _, p, S, v, y) => {
    let g = 0;
    const E = f.length;
    let x = c.length - 1, w = E - 1;
    for (; g <= x && g <= w; ) {
      const C = c[g], O = f[g] = y ? me(f[g]) : ae(f[g]);
      if (ze(C, O))
        A(
          C,
          O,
          a,
          null,
          _,
          p,
          S,
          v,
          y
        );
      else
        break;
      g++;
    }
    for (; g <= x && g <= w; ) {
      const C = c[x], O = f[w] = y ? me(f[w]) : ae(f[w]);
      if (ze(C, O))
        A(
          C,
          O,
          a,
          null,
          _,
          p,
          S,
          v,
          y
        );
      else
        break;
      x--, w--;
    }
    if (g > x) {
      if (g <= w) {
        const C = w + 1, O = C < E ? f[C].el : m;
        for (; g <= w; )
          A(
            null,
            f[g] = y ? me(f[g]) : ae(f[g]),
            a,
            O,
            _,
            p,
            S,
            v,
            y
          ), g++;
      }
    } else if (g > w)
      for (; g <= x; )
        ve(c[g], _, p, !0), g++;
    else {
      const C = g, O = g, F = /* @__PURE__ */ new Map();
      for (g = O; g <= w; g++) {
        const k = f[g] = y ? me(f[g]) : ae(f[g]);
        k.key != null && F.set(k.key, g);
      }
      let M, V = 0;
      const W = w - O + 1;
      let ie = !1, oe = 0;
      const Xe = new Array(W);
      for (g = 0; g < W; g++) Xe[g] = 0;
      for (g = C; g <= x; g++) {
        const k = c[g];
        if (V >= W) {
          ve(k, _, p, !0);
          continue;
        }
        let le;
        if (k.key != null)
          le = F.get(k.key);
        else
          for (M = O; M <= w; M++)
            if (Xe[M - O] === 0 && ze(k, f[M])) {
              le = M;
              break;
            }
        le === void 0 ? ve(k, _, p, !0) : (Xe[le - O] = g + 1, le >= oe ? oe = le : ie = !0, A(
          k,
          f[le],
          a,
          null,
          _,
          p,
          S,
          v,
          y
        ), V++);
      }
      const Nn = ie ? Pi(Xe) : He;
      for (M = Nn.length - 1, g = W - 1; g >= 0; g--) {
        const k = O + g, le = f[k], $n = f[k + 1], Ln = k + 1 < E ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          $n.el || ks($n)
        ) : m;
        Xe[g] === 0 ? A(
          null,
          le,
          a,
          Ln,
          _,
          p,
          S,
          v,
          y
        ) : ie && (M < 0 || g !== Nn[M] ? gt(le, a, Ln, 2) : M--);
      }
    }
  }, gt = (c, f, a, m, _ = null) => {
    const { el: p, type: S, transition: v, children: y, shapeFlag: g } = c;
    if (g & 6) {
      gt(c.component.subTree, f, a, m);
      return;
    }
    if (g & 128) {
      c.suspense.move(f, a, m);
      return;
    }
    if (g & 64) {
      S.move(c, f, a, Ge);
      return;
    }
    if (S === _e) {
      s(p, f, a);
      for (let x = 0; x < y.length; x++)
        gt(y[x], f, a, m);
      s(c.anchor, f, a);
      return;
    }
    if (S === Jt) {
      U(c, f, a);
      return;
    }
    if (m !== 2 && g & 1 && v)
      if (m === 0)
        v.persisted && !p[Yt] ? s(p, f, a) : (v.beforeEnter(p), s(p, f, a), Z(() => v.enter(p), _));
      else {
        const { leave: x, delayLeave: w, afterLeave: C } = v, O = () => {
          c.ctx.isUnmounted ? r(p) : s(p, f, a);
        }, F = () => {
          const M = p._isLeaving || !!p[Yt];
          p._isLeaving && p[Yt](
            !0
            /* cancelled */
          ), v.persisted && !M ? O() : x(p, () => {
            O(), C && C();
          });
        };
        w ? w(p, O, F) : F();
      }
    else
      s(p, f, a);
  }, ve = (c, f, a, m = !1, _ = !1) => {
    const {
      type: p,
      props: S,
      ref: v,
      children: y,
      dynamicChildren: g,
      shapeFlag: E,
      patchFlag: x,
      dirs: w,
      cacheIndex: C,
      memo: O
    } = c;
    if (x === -2 && (_ = !1), v != null && (Be(), rt(v, null, a, c, !0), Ve()), C != null && (f.renderCache[C] = void 0), E & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const F = E & 1 && w, M = !it(c);
    let V;
    if (M && (V = S && S.onVnodeBeforeUnmount) && ce(V, f, c), E & 6)
      dr(c.component, a, m);
    else {
      if (E & 128) {
        c.suspense.unmount(a, m);
        return;
      }
      F && we(c, null, f, "beforeUnmount"), E & 64 ? c.type.remove(
        c,
        f,
        a,
        Ge,
        m
      ) : g && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !g.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (p !== _e || x > 0 && x & 64) ? Ye(
        g,
        f,
        a,
        !1,
        !0
      ) : (p === _e && x & 384 || !_ && E & 16) && Ye(y, f, a), m && Dn(c);
    }
    const W = O != null && C == null;
    (M && (V = S && S.onVnodeUnmounted) || F || W) && Z(() => {
      V && ce(V, f, c), F && we(c, null, f, "unmounted"), W && (c.el = null);
    }, a);
  }, Dn = (c) => {
    const { type: f, el: a, anchor: m, transition: _ } = c;
    if (f === _e) {
      ar(a, m);
      return;
    }
    if (f === Jt) {
      J(c);
      return;
    }
    const p = () => {
      r(a), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: S, delayLeave: v } = _, y = () => S(a, p);
      v ? v(c.el, p, y) : y();
    } else
      p();
  }, ar = (c, f) => {
    let a;
    for (; c !== f; )
      a = T(c), r(c), c = a;
    r(f);
  }, dr = (c, f, a) => {
    const { bum: m, scope: _, job: p, subTree: S, um: v, m: y, a: g } = c;
    Xn(y), Xn(g), m && Vt(m), _.stop(), p && (p.flags |= 8, ve(S, c, f, a)), v && Z(v, f), Z(() => {
      c.isUnmounted = !0;
    }, f);
  }, Ye = (c, f, a, m = !1, _ = !1, p = 0) => {
    for (let S = p; S < c.length; S++)
      ve(c[S], f, a, m, _);
  }, _t = (c) => {
    if (c.shapeFlag & 6)
      return _t(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const f = T(c.anchor || c.el), a = f && f[ii];
    return a ? T(a) : f;
  };
  let jt = !1;
  const Fn = (c, f, a) => {
    let m;
    c == null ? f._vnode && (ve(f._vnode, null, null, !0), m = f._vnode.component) : A(
      f._vnode || null,
      c,
      f,
      null,
      null,
      null,
      a
    ), f._vnode = c, jt || (jt = !0, Kn(m), Ns(), jt = !1);
  }, Ge = {
    p: A,
    um: ve,
    m: gt,
    r: Dn,
    mt: In,
    mc: Fe,
    pc: Ht,
    pbc: $t,
    n: _t,
    o: e
  };
  return {
    render: Fn,
    hydrate: void 0,
    createApp: di(Fn)
  };
}
function Xt({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Te({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Oi(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Js(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (P(s) && P(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = me(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Js(o, l)), l.type === Ft && (l.patchFlag === -1 && (l = r[i] = me(l)), l.el = o.el), l.type === Re && !l.el && (l.el = o.el);
    }
}
function Pi(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const d = e[s];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < d ? i = l + 1 : o = l;
      d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function zs(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : zs(t);
}
function Xn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ks(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ks(t.subTree) : null;
}
const Zs = (e) => e.__isSuspense;
function Ii(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : si(e);
}
const _e = /* @__PURE__ */ Symbol.for("v-fgt"), Ft = /* @__PURE__ */ Symbol.for("v-txt"), Re = /* @__PURE__ */ Symbol.for("v-cmt"), Jt = /* @__PURE__ */ Symbol.for("v-stc"), Ae = [];
let ee = null;
function Mi(e = !1) {
  Ae.push(ee = e ? null : []);
}
function Qs() {
  Ae.pop(), ee = Ae[Ae.length - 1] || null;
}
let at = 1;
function Jn(e, t = !1) {
  at += e, e < 0 && ee && t && (ee.hasOnce = !0);
}
function Ri(e) {
  return e.dynamicChildren = at > 0 ? ee || He : null, Qs(), at > 0 && ee && ee.push(e), e;
}
function Di(e, t, n, s, r, i) {
  return Ri(
    Q(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function er(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ze(e, t) {
  return e.type === t.type && e.key === t.key;
}
const tr = ({ key: e }) => e ?? null, yt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? K(e) || /* @__PURE__ */ re(e) || L(e) ? { i: ye, r: e, k: t, f: !!n } : e : null);
function Q(e, t = null, n = null, s = 0, r = null, i = e === _e ? 0 : 1, o = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && tr(t),
    ref: t && yt(t),
    scopeId: Ls,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ye
  };
  return l ? (Tt(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= K(n) ? 8 : 16), at > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ee.push(u), u;
}
const Oe = Fi;
function Fi(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === fi) && (e = Re), er(e)) {
    const l = Ke(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Tt(l, n), at > 0 && !i && ee && (l.shapeFlag & 6 ? ee[ee.indexOf(e)] = l : ee.push(l)), l.patchFlag = -2, l;
  }
  if (qi(e) && (e = e.__vccOpts), t) {
    t = Ni(t);
    let { class: l, style: u } = t;
    l && !K(l) && (t.class = pn(l)), j(u) && (/* @__PURE__ */ wn(u) && !P(u) && (u = he({}, u)), t.style = hn(u));
  }
  const o = K(e) ? 1 : Zs(e) ? 128 : Rt(e) ? 64 : j(e) ? 4 : L(e) ? 2 : 0;
  return Q(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function Ni(e) {
  return e ? /* @__PURE__ */ wn(e) || Ws(e) ? he({}, e) : e : null;
}
function Ke(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: u } = e, d = t ? Li(r || {}, t) : r, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && tr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? P(i) ? i.concat(yt(t)) : [i, yt(t)] : yt(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== _e ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ke(e.ssContent),
    ssFallback: e.ssFallback && Ke(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && s && Tn(
    h,
    u.clone(h)
  ), h;
}
function $i(e = " ", t = 0) {
  return Oe(Ft, null, e, t);
}
function ae(e) {
  return e == null || typeof e == "boolean" ? Oe(Re) : P(e) ? Oe(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : er(e) ? me(e) : Oe(Ft, null, String(e));
}
function me(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ke(e);
}
function Tt(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (P(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Tt(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ws(t) ? t._ctx = ye : r === 3 && ye && (ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (L(t)) {
    if (s & 65) {
      Tt(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ye }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [$i(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Li(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = pn([t.class, s.class]));
      else if (r === "style")
        t.style = hn([t.style, s.style]);
      else if (At(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(P(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ot(r) && (t[r] = o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function ce(e, t, n, s = null) {
  xe(e, t, 7, [
    n,
    s
  ]);
}
const Hi = Bs();
let ji = 0;
function Bi(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Hi, i = {
    uid: ji++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Or(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: xi(s, r),
    emitsOptions: gi(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = pi.bind(null, i), e.ce && e.ce(i), i;
}
let Et = null, Ct, dt;
{
  const e = It(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Ct = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Et = n
  ), dt = t(
    "__VUE_SSR_SETTERS__",
    (n) => n
  );
}
const nr = (e) => {
  const t = Et;
  return Ct(e), e.scope.on(), () => {
    e.scope.off(), Ct(t);
  };
}, zn = () => {
  Et && Et.scope.off(), Ct(null);
};
function sr(e) {
  return e.vnode.shapeFlag & 4;
}
function Vi(e, t = !1, n = !1) {
  t && dt(t);
  const { props: s, children: r } = e.vnode, i = sr(e);
  vi(e, s, i, t), Ti(e, r, n || t);
  const o = i ? Ki(e, t) : void 0;
  return t && dt(!1), o;
}
function Ki(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ui);
  const { setup: s } = n;
  if (s) {
    Be();
    const r = e.setupContext = s.length > 1 ? Wi(e) : null, i = nr(e), o = pt(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = ds(o);
    if (Ve(), i(), (l || e.sp) && !it(e) && ci(e), l) {
      if (o.then(zn, zn), t)
        return o.then((u) => {
          dt(!0);
          try {
            kn(e, u, t);
          } finally {
            dt(!1);
          }
        }).catch((u) => {
          Mt(u, e, 0);
        });
      e.asyncDep = o;
    } else
      kn(e, o);
  } else
    rr(e);
}
function kn(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : j(t) && (e.setupState = Ms(t)), rr(e);
}
function rr(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || an);
}
const Ui = {
  get(e, t) {
    return Y(e, "get", ""), e[t];
  }
};
function Wi(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ui),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function An(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ms(kr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ot)
        return ot[n](e);
    },
    has(t, n) {
      return n in t || n in ot;
    }
  })) : e.proxy;
}
function qi(e) {
  return L(e) && "__vccOpts" in e;
}
const Yi = "3.5.41";
let fn;
const Zn = typeof window < "u" && window.trustedTypes;
if (Zn)
  try {
    fn = /* @__PURE__ */ Zn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ir = fn ? (e) => fn.createHTML(e) : (e) => e, Gi = "http://www.w3.org/2000/svg", Xi = "http://www.w3.org/1998/Math/MathML", ge = typeof document < "u" ? document : null, Qn = ge && /* @__PURE__ */ ge.createElement("template"), Ji = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? ge.createElementNS(Gi, e) : t === "mathml" ? ge.createElementNS(Xi, e) : n ? ge.createElement(e, { is: n }) : ge.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => ge.createTextNode(e),
  createComment: (e) => ge.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ge.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Qn.innerHTML = ir(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Qn.content;
      if (s === "svg" || s === "mathml") {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, zi = /* @__PURE__ */ Symbol("_vtc");
function ki(e, t, n) {
  const s = e[zi];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const es = /* @__PURE__ */ Symbol("_vod"), Zi = /* @__PURE__ */ Symbol("_vsh"), Qi = /* @__PURE__ */ Symbol(""), eo = /(?:^|;)\s*display\s*:/;
function to(e, t, n) {
  const s = e.style, r = K(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (K(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Qe(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Qe(s, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? so(
        e,
        o,
        !K(t) && t ? t[o] : void 0,
        l
      ) || Qe(s, o, l) : Qe(s, o, "");
    }
  } else if (r) {
    if (t !== n) {
      const o = s[Qi];
      o && (n += ";" + o), s.cssText = n, i = eo.test(n);
    }
  } else t && e.removeAttribute("style");
  es in e && (e[es] = i ? s.display : "", e[Zi] && (s.display = "none"));
}
const ts = /\s*!important$/;
function Qe(e, t, n) {
  if (P(n))
    n.forEach((s) => Qe(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = no(e, t);
    ts.test(n) ? e.setProperty(
      De(s),
      n.replace(ts, ""),
      "important"
    ) : e[s] = n;
  }
}
const ns = ["Webkit", "Moz", "ms"], zt = {};
function no(e, t) {
  const n = zt[t];
  if (n)
    return n;
  let s = ne(t);
  if (s !== "filter" && s in e)
    return zt[t] = s;
  s = ps(s);
  for (let r = 0; r < ns.length; r++) {
    const i = ns[r] + s;
    if (i in e)
      return zt[t] = i;
  }
  return t;
}
function so(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && K(s) && n === s;
}
const ss = "http://www.w3.org/1999/xlink";
function rs(e, t, n, s, r, i = Cr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ss, t.slice(6, t.length)) : e.setAttributeNS(ss, t, n) : n == null || i && !_s(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : de(n) ? String(n) : n
  );
}
function is(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ir(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = _s(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function ro(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function io(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const os = /* @__PURE__ */ Symbol("_vei");
function oo(e, t, n, s, r = null) {
  const i = e[os] || (e[os] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, u] = fo(t);
    if (s) {
      const d = i[t] = ho(
        s,
        r
      );
      ro(e, l, d, u);
    } else o && (io(e, l, o, u), i[t] = void 0);
  }
}
const lo = /(Once|Passive|Capture)$/, co = /^on:?(?:Once|Passive|Capture)$/;
function fo(e) {
  let t, n;
  for (; (n = e.match(lo)) && !co.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : De(e.slice(2)), t];
}
let kt = 0;
const uo = /* @__PURE__ */ Promise.resolve(), ao = () => kt || (uo.then(() => kt = 0), kt = Date.now());
function ho(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const r = n.value;
    if (P(r)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        i.call(s), s._stopped = !0;
      };
      const o = r.slice(), l = [s];
      for (let u = 0; u < o.length && !s._stopped; u++) {
        const d = o[u];
        d && xe(
          d,
          t,
          5,
          l
        );
      }
    } else
      xe(
        r,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = ao(), n;
}
const ls = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, po = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? ki(e, s, o) : t === "style" ? to(e, n, s) : At(t) ? Ot(t) || oo(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : go(e, t, s, o)) ? (is(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && rs(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (_o(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !K(s))) ? is(e, ne(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), rs(e, t, s, o));
};
function go(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ls(t) && L(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ls(t) && K(n) ? !1 : t in e;
}
function _o(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = ne(t);
  return Array.isArray(n) ? n.some((r) => ne(r) === s) : Object.keys(n).some((r) => ne(r) === s);
}
const mo = /* @__PURE__ */ he({ patchProp: po }, Ji);
let cs;
function bo() {
  return cs || (cs = Ci(mo));
}
const yo = ((...e) => {
  const t = bo().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = So(s);
    if (!r) return;
    const i = t._component;
    !L(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, vo(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function vo(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function So(e) {
  return K(e) ? document.querySelector(e) : e;
}
const xo = "tavern_multi_tts_cache", te = "audio_cache", wo = 1, fs = 100, us = 50 * 1024 * 1024;
function To() {
  const e = /* @__PURE__ */ new Map();
  return {
    async get(t) {
      return e.get(t);
    },
    async put(t) {
      e.set(t.key, t);
    },
    async delete(t) {
      e.delete(t);
    },
    async clear() {
      e.clear();
    },
    async getAll() {
      return [...e.values()];
    }
  };
}
function Eo(e, t) {
  function n() {
    return new Promise((s, r) => {
      const i = e.open(t, wo);
      i.onupgradeneeded = () => {
        const o = i.result;
        o.objectStoreNames.contains(te) || o.createObjectStore(te, { keyPath: "key" });
      }, i.onsuccess = () => s(i.result), i.onerror = () => r(i.error ?? Error("IndexedDB 打开失败"));
    });
  }
  return {
    async get(s) {
      const r = await n();
      return await new Promise((i, o) => {
        const u = r.transaction(te, "readonly").objectStore(te).get(s);
        u.onsuccess = () => i(u.result), u.onerror = () => o(u.error ?? Error("读取缓存失败"));
      });
    },
    async put(s) {
      const r = await n();
      await new Promise((i, o) => {
        const l = r.transaction(te, "readwrite");
        l.objectStore(te).put(s), l.oncomplete = () => i(), l.onerror = () => o(l.error ?? Error("写入缓存失败"));
      });
    },
    async delete(s) {
      const r = await n();
      await new Promise((i, o) => {
        const l = r.transaction(te, "readwrite");
        l.objectStore(te).delete(s), l.oncomplete = () => i(), l.onerror = () => o(l.error ?? Error("删除缓存失败"));
      });
    },
    async clear() {
      const s = await n();
      await new Promise((r, i) => {
        const o = s.transaction(te, "readwrite");
        o.objectStore(te).clear(), o.oncomplete = () => r(), o.onerror = () => i(o.error ?? Error("清空缓存失败"));
      });
    },
    async getAll() {
      const s = await n();
      return await new Promise((r, i) => {
        const l = s.transaction(te, "readonly").objectStore(te).openCursor(), u = [];
        l.onsuccess = () => {
          const d = l.result;
          if (!d) {
            r(u);
            return;
          }
          u.push(d.value), d.continue();
        }, l.onerror = () => i(l.error ?? Error("读取缓存记录失败"));
      });
    }
  };
}
async function Co(e) {
  const t = await e.getAll();
  let n = t.reduce((i, o) => i + (o.blob?.size ?? 0), 0);
  if (t.length <= fs && n <= us)
    return;
  const s = [...t].sort((i, o) => i.created_at - o.created_at);
  let r = t.length;
  for (const i of s) {
    if (r <= fs && n <= us)
      break;
    await e.delete(i.key), r -= 1, n -= i.blob?.size ?? 0;
  }
}
function Ao(e) {
  const t = e?.backend === "memory" ? To() : Eo(
    e?.indexedDB ?? indexedDB,
    e?.dbName ?? xo
  );
  return {
    async get(n) {
      return (await t.get(n))?.blob ?? null;
    },
    async set(n, s, r = Date.now()) {
      await t.put({
        key: n,
        blob: s,
        created_at: r
      }), await Co(t);
    },
    async delete(n) {
      await t.delete(n);
    },
    async clear() {
      await t.clear();
    },
    async stats() {
      const n = await t.getAll();
      return {
        count: n.length,
        totalBytes: n.reduce((s, r) => s + (r.blob?.size ?? 0), 0)
      };
    },
    async list(n, s) {
      const i = (await t.getAll()).sort((l, u) => u.created_at - l.created_at), o = Math.max(0, (n - 1) * s);
      return {
        items: i.slice(o, o + s).map((l) => ({
          key: l.key,
          size: l.blob?.size ?? 0,
          createdAt: l.created_at
        })),
        total: i.length,
        totalBytes: i.reduce((l, u) => l + (u.blob?.size ?? 0), 0)
      };
    }
  };
}
const Oo = Ao({
  backend: typeof indexedDB > "u" ? "memory" : "indexeddb"
});
function Po() {
  return Oo.clear();
}
function Io() {
}
const Mo = "Tavern Multi-TTS", Zt = "tavern_multi_tts", Ro = "0.1.0", Qt = "tavern-multi-tts-root", Le = "[Tavern Multi-TTS]", Do = 1, Fo = {
  enabled: !0
};
function No(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function $o(e) {
  const t = No(e) ? e : {};
  return {
    schemaVersion: Do,
    enabled: typeof t.enabled == "boolean" ? t.enabled : Fo.enabled
  };
}
function Lo(e, t, n = {}) {
  let s = !1, r = !1, i = null, o = null, l = null;
  function u() {
    return $o(e.readRawSettings());
  }
  function d() {
    const I = u();
    return e.writeSettings(I), I;
  }
  function h() {
    if (s)
      return !0;
    const I = document.getElementById(Qt);
    I && I.remove();
    const A = e.findSettingsRoot();
    return A ? (l = document.createElement("div"), l.id = Qt, l.dataset.tavernMultiTts = "settings", A.appendChild(l), t.mount(l, u()), o = e.onPageHide(() => {
      b({ removeSettings: !1 });
    }), s = !0, console.info(`${Le} settings panel mounted`), !0) : !1;
  }
  function b(I) {
    n.stopPlayback?.(), i?.(), i = null, r = !1, o?.(), o = null, t.unmount(), (l ?? document.getElementById(Qt))?.remove(), l = null, s = !1, I.removeSettings && e.removeSettings();
  }
  function T() {
    s || r || (d(), !h() && (r = !0, i = e.onAppReady(() => {
      const I = r;
      r = !1;
      const A = i;
      i = null, A?.(), I && (h() || console.error(
        `${Le} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`
      ));
    })));
  }
  function D(I) {
    const A = u();
    A.enabled = I, e.writeSettings(A);
  }
  return {
    activate: T,
    disable() {
      b({ removeSettings: !1 }), console.info(`${Le} disabled`);
    },
    destroy() {
      b({ removeSettings: !1 });
    },
    install() {
      d();
    },
    clean() {
      return b({ removeSettings: !0 }), console.info(`${Le} settings cleaned`), n.clearCache?.();
    },
    delete() {
      return b({ removeSettings: !0 }), console.info(`${Le} deleted`), n.clearCache?.();
    },
    setEnabled: D,
    isActive() {
      return s;
    }
  };
}
function Ho() {
  return document.querySelector("#extensions_settings2") ?? document.querySelector("#extensions_settings");
}
function lt(e) {
  return typeof e == "object" && e !== null;
}
function jo(e) {
  if (lt(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function Bo(e) {
  return !lt(e) || typeof e.getContext != "function" ? null : e;
}
function Vo(e) {
  if (!lt(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!lt(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = jo(e.eventSource), n = lt(e.eventTypes) ? {
    APP_READY: typeof e.eventTypes.APP_READY == "string" ? e.eventTypes.APP_READY : void 0
  } : void 0;
  return {
    extensionSettings: e.extensionSettings,
    saveSettingsDebounced: e.saveSettingsDebounced,
    eventSource: t,
    eventTypes: n
  };
}
function Ko() {
  const e = Bo(globalThis.SillyTavern);
  if (!e)
    throw new Error(
      "SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行"
    );
  return Vo(e.getContext());
}
function Uo() {
  const e = Ko();
  return {
    readRawSettings() {
      return e.extensionSettings[Zt];
    },
    writeSettings(t) {
      e.extensionSettings[Zt] = t, e.saveSettingsDebounced();
    },
    removeSettings() {
      delete e.extensionSettings[Zt], e.saveSettingsDebounced();
    },
    findSettingsRoot: Ho,
    onAppReady(t) {
      const n = e.eventTypes?.APP_READY ?? "app_ready", s = e.eventSource;
      if (!s)
        throw new Error("SillyTavern eventSource 缺少 on/removeListener，无法注册 APP_READY 监听");
      return s.on(n, t), () => {
        s.removeListener(n, t);
      };
    },
    onPageHide(t) {
      const n = () => t();
      return window.addEventListener("pagehide", n), () => window.removeEventListener("pagehide", n);
    }
  };
}
const Wo = { class: "tavern-multi-tts-settings" }, qo = { class: "inline-drawer" }, Yo = { class: "inline-drawer-toggle inline-drawer-header" }, Go = { class: "inline-drawer-content" }, Xo = { class: "tavern-multi-tts-block" }, Jo = { class: "tavern-multi-tts-version" }, zo = { class: "tavern-multi-tts-block" }, ko = { class: "checkbox_label" }, Zo = ["checked"], Qo = /* @__PURE__ */ li({
  __name: "settings-panel",
  props: {
    displayName: {},
    version: {},
    enabled: { type: Boolean },
    onEnabledChange: { type: Function }
  },
  setup(e) {
    return (t, n) => (Mi(), Di("div", Wo, [
      Q("div", qo, [
        Q("div", Yo, [
          Q("b", null, en(e.displayName), 1),
          n[1] || (n[1] = Q("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        Q("div", Go, [
          Q("div", Xo, [
            Q("small", Jo, "版本 " + en(e.version), 1)
          ]),
          Q("div", zo, [
            Q("label", ko, [
              Q("input", {
                type: "checkbox",
                checked: e.enabled,
                onChange: n[0] || (n[0] = (s) => e.onEnabledChange(s.target.checked))
              }, null, 40, Zo),
              n[2] || (n[2] = Q("span", null, "启用 TTS 功能", -1))
            ])
          ])
        ])
      ])
    ]));
  }
});
let ke = null, Ze = null;
function Ue() {
  return Ze || (Ze = Lo(
    Uo(),
    {
      mount(e, t) {
        ke?.unmount(), ke = yo(Qo, {
          displayName: Mo,
          version: Ro,
          enabled: t.enabled,
          onEnabledChange(n) {
            Ze?.setEnabled(n);
          }
        }), ke.mount(e);
      },
      unmount() {
        ke?.unmount(), ke = null;
      }
    },
    {
      stopPlayback: Io,
      clearCache: Po
    }
  ), Ze);
}
async function We(e, t) {
  try {
    await t();
  } catch (n) {
    const s = n instanceof Error ? n.message : String(n);
    throw console.error(`${Le} ${e} failed: ${s}`), n;
  }
}
async function tl() {
  await We("onInstall", () => Ue().install());
}
async function nl() {
  await We("onActivate", () => Ue().activate());
}
async function sl() {
  await We("onEnable", () => Ue().activate());
}
async function rl() {
  await We("onDisable", () => Ue().disable());
}
async function il() {
  await We("onClean", () => Ue().clean());
}
async function ol() {
  await We("onDelete", () => Ue().delete());
}
export {
  nl as onActivate,
  il as onClean,
  ol as onDelete,
  rl as onDisable,
  sl as onEnable,
  tl as onInstall
};
//# sourceMappingURL=index.js.map
