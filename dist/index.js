// @__NO_SIDE_EFFECTS__
function fn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const V = {}, Le = [], un = () => {
}, cs = () => !1, Ct = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), At = (e) => e.startsWith("onUpdate:"), de = Object.assign, ur = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ar = Object.prototype.hasOwnProperty, N = (e, t) => ar.call(e, t), I = Array.isArray, ke = (e) => dt(e) === "[object Map]", dr = (e) => dt(e) === "[object Set]", Ln = (e) => dt(e) === "[object Date]", L = (e) => typeof e == "function", B = (e) => typeof e == "string", ae = (e) => typeof e == "symbol", j = (e) => e !== null && typeof e == "object", fs = (e) => (j(e) || L(e)) && L(e.then) && L(e.catch), us = Object.prototype.toString, dt = (e) => us.call(e), hr = (e) => dt(e).slice(8, -1), pr = (e) => dt(e) === "[object Object]", an = (e) => B(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, et = /* @__PURE__ */ fn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ot = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, gr = /-\w/g, te = Ot(
  (e) => e.replace(gr, (t) => t.slice(1).toUpperCase())
), _r = /\B([A-Z])/g, Me = Ot(
  (e) => e.replace(_r, "-$1").toLowerCase()
), as = Ot((e) => e.charAt(0).toUpperCase() + e.slice(1)), jt = Ot(
  (e) => e ? `on${as(e)}` : ""
), we = (e, t) => !Object.is(e, t), Vt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ds = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, mr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Hn;
const Pt = () => Hn || (Hn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function dn(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = B(s) ? Sr(s) : dn(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (B(e) || j(e))
    return e;
}
const br = /;(?![^(]*\))/g, yr = /:([^]+)/, vr = /\/\*[^]*?\*\//g;
function Sr(e) {
  const t = {};
  return e.replace(vr, "").split(br).forEach((n) => {
    if (n) {
      const s = n.split(yr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function hn(e) {
  let t = "";
  if (B(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = hn(e[n]);
      s && (t += s + " ");
    }
  else if (j(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const xr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Tr = /* @__PURE__ */ fn(xr);
function hs(e) {
  return !!e || e === "";
}
function wr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = pn(e[s], t[s]);
  return n;
}
function pn(e, t) {
  if (e === t) return !0;
  let n = Ln(e), s = Ln(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = ae(e), s = ae(t), n || s)
    return e === t;
  if (n = I(e), s = I(t), n || s)
    return n && s ? wr(e, t) : !1;
  if (n = j(e), s = j(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const c = e.hasOwnProperty(o), u = t.hasOwnProperty(o);
      if (c && !u || !c && u || !pn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ps = (e) => !!(e && e.__v_isRef === !0), kt = (e) => B(e) ? e : e == null ? "" : I(e) || j(e) && (e.toString === us || !L(e.toString)) ? ps(e) ? kt(e.value) : JSON.stringify(e, gs, 2) : String(e), gs = (e, t) => ps(t) ? gs(e, t.value) : ke(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Kt(s, i) + " =>"] = r, n),
    {}
  )
} : dr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Kt(n))
} : ae(t) ? Kt(t) : j(t) && !I(t) && !pr(t) ? String(t) : t, Kt = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ae(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let q;
class Er {
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
const Bt = /* @__PURE__ */ new WeakSet();
class Cr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, q && (q.active ? q.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Bt.has(this) && (Bt.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ar(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, jn(this), ms(this);
    const t = $, n = ne;
    $ = this, ne = !0;
    try {
      return this.fn();
    } finally {
      bs(this), $ = t, ne = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        mn(t);
      this.deps = this.depsTail = void 0, jn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Bt.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    en(this) && this.run();
  }
  get dirty() {
    return en(this);
  }
}
let _s = 0, tt, nt;
function Ar(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = nt, nt = e;
    return;
  }
  e.next = tt, tt = e;
}
function gn() {
  _s++;
}
function _n() {
  if (--_s > 0)
    return;
  if (nt) {
    let t = nt;
    for (nt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; tt; ) {
    let t = tt;
    for (tt = void 0; t; ) {
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
function ms(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function bs(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), mn(s), Pr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function en(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Or(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Or(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === yt) || (e.globalVersion = yt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !en(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = $, s = ne;
  $ = e, ne = !0;
  try {
    ms(e);
    const r = e.fn(e._value);
    (t.version === 0 || we(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    $ = n, ne = s, bs(e), e.flags &= -3;
  }
}
function mn(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      mn(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Pr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ne = !0;
const ys = [];
function je() {
  ys.push(ne), ne = !1;
}
function Ve() {
  const e = ys.pop();
  ne = e === void 0 ? !0 : e;
}
function jn(e) {
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
let yt = 0;
class Ir {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Rr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!$ || !ne || $ === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== $)
      n = this.activeLink = new Ir($, this), $.deps ? (n.prevDep = $.depsTail, $.depsTail.nextDep = n, $.depsTail = n) : $.deps = $.depsTail = n, vs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = $.depsTail, n.nextDep = void 0, $.depsTail.nextDep = n, $.depsTail = n, $.deps === n && ($.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, yt++, this.notify(t);
  }
  notify(t) {
    gn();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      _n();
    }
  }
}
function vs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        vs(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const tn = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ Symbol(
  ""
), nn = /* @__PURE__ */ Symbol(
  ""
), lt = /* @__PURE__ */ Symbol(
  ""
);
function Y(e, t, n) {
  if (ne && $) {
    let s = tn.get(e);
    s || tn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Rr()), r.map = s, r.key = n), r.track();
  }
}
function me(e, t, n, s, r, i) {
  const o = tn.get(e);
  if (!o) {
    yt++;
    return;
  }
  const c = (u) => {
    u && u.trigger();
  };
  if (gn(), t === "clear")
    o.forEach(c);
  else {
    const u = I(e), h = u && an(n);
    if (u && n === "length") {
      const d = Number(s);
      o.forEach((b, w) => {
        (w === "length" || w === lt || !ae(w) && w >= d) && c(b);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && c(o.get(n)), h && c(o.get(lt)), t) {
        case "add":
          u ? h && c(o.get("length")) : (c(o.get(Ee)), ke(e) && c(o.get(nn)));
          break;
        case "delete":
          u || (c(o.get(Ee)), ke(e) && c(o.get(nn)));
          break;
        case "set":
          ke(e) && c(o.get(Ee));
          break;
      }
  }
  _n();
}
function Ne(e) {
  const t = /* @__PURE__ */ M(e);
  return t === e ? t : (Y(t, "iterate", lt), /* @__PURE__ */ Pe(e) ? t : t.map(Ie));
}
function bn(e) {
  return Y(e = /* @__PURE__ */ M(e), "iterate", lt), e;
}
function fe(e, t) {
  return /* @__PURE__ */ Oe(e) ? ct(/* @__PURE__ */ Sn(e) ? Ie(t) : t) : Ie(t);
}
const Mr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ut(this, Symbol.iterator, (e) => fe(this, e));
  },
  concat(...e) {
    return Ne(this).concat(
      ...e.map((t) => I(t) ? Ne(t) : t)
    );
  },
  entries() {
    return Ut(this, "entries", (e) => (e[1] = fe(this, e[1]), e));
  },
  every(e, t) {
    return he(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return he(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => fe(this, s)),
      arguments
    );
  },
  find(e, t) {
    return he(
      this,
      "find",
      e,
      t,
      (n) => fe(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return he(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return he(
      this,
      "findLast",
      e,
      t,
      (n) => fe(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return he(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return he(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Wt(this, "includes", e);
  },
  indexOf(...e) {
    return Wt(this, "indexOf", e);
  },
  join(e) {
    return Ne(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Wt(this, "lastIndexOf", e);
  },
  map(e, t) {
    return he(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Xe(this, "pop");
  },
  push(...e) {
    return Xe(this, "push", e);
  },
  reduce(e, ...t) {
    return Vn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Vn(this, "reduceRight", e, t);
  },
  shift() {
    return Xe(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return he(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Xe(this, "splice", e);
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
    return Xe(this, "unshift", e);
  },
  values() {
    return Ut(this, "values", (e) => fe(this, e));
  }
};
function Ut(e, t, n) {
  const s = bn(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ Pe(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const Fr = Array.prototype;
function he(e, t, n, s, r, i) {
  const o = bn(e), c = o !== e && !/* @__PURE__ */ Pe(e), u = o[t];
  if (u !== Fr[t]) {
    const b = u.apply(e, i);
    return c ? Ie(b) : b;
  }
  let h = n;
  o !== e && (c ? h = function(b, w) {
    return n.call(this, fe(e, b), w, e);
  } : n.length > 2 && (h = function(b, w) {
    return n.call(this, b, w, e);
  }));
  const d = u.call(o, h, s);
  return c && r ? r(d) : d;
}
function Vn(e, t, n, s) {
  const r = bn(e), i = r !== e && !/* @__PURE__ */ Pe(e);
  let o = n, c = !1;
  r !== e && (i ? (c = s.length === 0, o = function(h, d, b) {
    return c && (c = !1, h = fe(e, h)), n.call(this, h, fe(e, d), b, e);
  }) : n.length > 3 && (o = function(h, d, b) {
    return n.call(this, h, d, b, e);
  }));
  const u = r[t](o, ...s);
  return c ? fe(e, u) : u;
}
function Wt(e, t, n) {
  const s = /* @__PURE__ */ M(e);
  Y(s, "iterate", lt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ xn(n[0]) ? (n[0] = /* @__PURE__ */ M(n[0]), s[t](...n)) : r;
}
function Xe(e, t, n = []) {
  je(), gn();
  const s = (/* @__PURE__ */ M(e))[t].apply(e, n);
  return _n(), Ve(), s;
}
const Nr = /* @__PURE__ */ fn("__proto__,__v_isRef,__isVue"), Ss = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ae)
);
function Dr(e) {
  ae(e) || (e = String(e));
  const t = /* @__PURE__ */ M(this);
  return Y(t, "has", e), t.hasOwnProperty(e);
}
class xs {
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
      return s === (r ? i ? qr : Cs : i ? Es : ws).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = I(t);
    if (!r) {
      let u;
      if (o && (u = Mr[n]))
        return u;
      if (n === "hasOwnProperty")
        return Dr;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ se(t) ? t : s
    );
    if ((ae(n) ? Ss.has(n) : Nr(n)) || (r || Y(t, "get", n), i))
      return c;
    if (/* @__PURE__ */ se(c)) {
      const u = o && an(n) ? c : c.value;
      return r && j(u) ? /* @__PURE__ */ rn(u) : u;
    }
    return j(c) ? r ? /* @__PURE__ */ rn(c) : /* @__PURE__ */ As(c) : c;
  }
}
class Ts extends xs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = I(t) && an(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ Oe(i);
      if (!/* @__PURE__ */ Pe(s) && !/* @__PURE__ */ Oe(s) && (i = /* @__PURE__ */ M(i), s = /* @__PURE__ */ M(s)), !o && /* @__PURE__ */ se(i) && !/* @__PURE__ */ se(s))
        return h || (i.value = s), !0;
    }
    const c = o ? Number(n) < t.length : N(t, n), u = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ se(t) ? t : r
    );
    return t === /* @__PURE__ */ M(r) && u && (c ? we(s, i) && me(t, "set", n, s) : me(t, "add", n, s)), u;
  }
  deleteProperty(t, n) {
    const s = N(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && me(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ae(n) || !Ss.has(n)) && Y(t, "has", n), s;
  }
  ownKeys(t) {
    return Y(
      t,
      "iterate",
      I(t) ? "length" : Ee
    ), Reflect.ownKeys(t);
  }
}
class $r extends xs {
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
const Lr = /* @__PURE__ */ new Ts(), Hr = /* @__PURE__ */ new $r(), jr = /* @__PURE__ */ new Ts(!0);
const sn = (e) => e, _t = (e) => Reflect.getPrototypeOf(e);
function Vr(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ M(r), o = ke(i), c = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, h = r[e](...s), d = n ? sn : t ? ct : Ie;
    return !t && Y(
      i,
      "iterate",
      u ? nn : Ee
    ), de(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: b, done: w } = h.next();
          return w ? { value: b, done: w } : {
            value: c ? [d(b[0]), d(b[1])] : d(b),
            done: w
          };
        }
      }
    );
  };
}
function mt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Kr(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ M(i), c = /* @__PURE__ */ M(r);
      e || (we(r, c) && Y(o, "get", r), Y(o, "get", c));
      const { has: u } = _t(o), h = t ? sn : e ? ct : Ie;
      if (u.call(o, r))
        return h(i.get(r));
      if (u.call(o, c))
        return h(i.get(c));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Y(/* @__PURE__ */ M(r), "iterate", Ee), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ M(i), c = /* @__PURE__ */ M(r);
      return e || (we(r, c) && Y(o, "has", r), Y(o, "has", c)), r === c ? i.has(r) : i.has(r) || i.has(c);
    },
    forEach(r, i) {
      const o = this, c = o.__v_raw, u = /* @__PURE__ */ M(c), h = t ? sn : e ? ct : Ie;
      return !e && Y(u, "iterate", Ee), c.forEach((d, b) => r.call(i, h(d), h(b), o));
    }
  };
  return de(
    n,
    e ? {
      add: mt("add"),
      set: mt("set"),
      delete: mt("delete"),
      clear: mt("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ M(this), o = _t(i), c = /* @__PURE__ */ M(r), u = !t && !/* @__PURE__ */ Pe(r) && !/* @__PURE__ */ Oe(r) ? c : r;
        return o.has.call(i, u) || we(r, u) && o.has.call(i, r) || we(c, u) && o.has.call(i, c) || (i.add(u), me(i, "add", u, u)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ Pe(i) && !/* @__PURE__ */ Oe(i) && (i = /* @__PURE__ */ M(i));
        const o = /* @__PURE__ */ M(this), { has: c, get: u } = _t(o);
        let h = c.call(o, r);
        h || (r = /* @__PURE__ */ M(r), h = c.call(o, r));
        const d = u.call(o, r);
        return o.set(r, i), h ? we(i, d) && me(o, "set", r, i) : me(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ M(this), { has: o, get: c } = _t(i);
        let u = o.call(i, r);
        u || (r = /* @__PURE__ */ M(r), u = o.call(i, r)), c && c.call(i, r);
        const h = i.delete(r);
        return u && me(i, "delete", r, void 0), h;
      },
      clear() {
        const r = /* @__PURE__ */ M(this), i = r.size !== 0, o = r.clear();
        return i && me(
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
    n[r] = Vr(r, e, t);
  }), n;
}
function yn(e, t) {
  const n = Kr(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    N(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Br = {
  get: /* @__PURE__ */ yn(!1, !1)
}, Ur = {
  get: /* @__PURE__ */ yn(!1, !0)
}, Wr = {
  get: /* @__PURE__ */ yn(!0, !1)
};
const ws = /* @__PURE__ */ new WeakMap(), Es = /* @__PURE__ */ new WeakMap(), Cs = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap();
function Yr(e) {
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
function As(e) {
  return /* @__PURE__ */ Oe(e) ? e : vn(
    e,
    !1,
    Lr,
    Br,
    ws
  );
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  return vn(
    e,
    !1,
    jr,
    Ur,
    Es
  );
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
  return vn(
    e,
    !0,
    Hr,
    Wr,
    Cs
  );
}
function vn(e, t, n, s, r) {
  if (!j(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = Yr(hr(e));
  if (o === 0)
    return e;
  const c = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  return /* @__PURE__ */ Oe(e) ? /* @__PURE__ */ Sn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function xn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function M(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ M(t) : e;
}
function Xr(e) {
  return !N(e, "__v_skip") && Object.isExtensible(e) && ds(e, "__v_skip", !0), e;
}
const Ie = (e) => j(e) ? /* @__PURE__ */ As(e) : e, ct = (e) => j(e) ? /* @__PURE__ */ rn(e) : e;
// @__NO_SIDE_EFFECTS__
function se(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Jr(e) {
  return /* @__PURE__ */ se(e) ? e.value : e;
}
const zr = {
  get: (e, t, n) => t === "__v_raw" ? e : Jr(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ se(r) && !/* @__PURE__ */ se(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Os(e) {
  return /* @__PURE__ */ Sn(e) ? e : new Proxy(e, zr);
}
function ht(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    It(r, t, n);
  }
}
function Se(e, t, n, s) {
  if (L(e)) {
    const r = ht(e, t, n, s);
    return r && fs(r) && r.catch((i) => {
      It(i, t, n);
    }), r;
  }
  if (I(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Se(e[i], t, n, s));
    return r;
  }
}
function It(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || V;
  if (t) {
    let c = t.parent;
    const u = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const d = c.ec;
      if (d) {
        for (let b = 0; b < d.length; b++)
          if (d[b](e, u, h) === !1)
            return;
      }
      c = c.parent;
    }
    if (i) {
      je(), ht(i, null, 10, [
        e,
        u,
        h
      ]), Ve();
      return;
    }
  }
  Zr(e, n, r, s, o);
}
function Zr(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const z = [];
let ce = -1;
const He = [];
let ve = null, De = 0;
const Ps = /* @__PURE__ */ Promise.resolve();
let vt = null;
function Qr(e) {
  const t = vt || Ps;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kr(e) {
  let t = ce + 1, n = z.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = z[s], i = ft(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Is(e) {
  if (!(e.flags & 1)) {
    const t = ft(e), n = z[z.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ft(n) ? z.push(e) : z.splice(kr(t), 0, e), e.flags |= 1, Rs();
  }
}
function Rs() {
  vt || (vt = Ps.then(Fs));
}
function ei(e) {
  if (!I(e))
    ve && e.id === -1 ? ve.splice(De + 1, 0, e) : e.flags & 1 || (He.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      He.push(e[t]);
  Rs();
}
function Kn(e, t, n = ce + 1) {
  for (; n < z.length; n++) {
    const s = z[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      z.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Ms(e) {
  if (He.length) {
    const t = [...new Set(He)].sort(
      (n, s) => ft(n) - ft(s)
    );
    if (He.length = 0, ve) {
      for (let n = 0; n < t.length; n++)
        ve.push(t[n]);
      return;
    }
    for (ve = t, De = 0; De < ve.length; De++) {
      const n = ve[De];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ve = null, De = 0;
  }
}
const ft = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Fs(e) {
  try {
    for (ce = 0; ce < z.length; ce++) {
      const t = z[ce];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ht(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ce < z.length; ce++) {
      const t = z[ce];
      t && (t.flags &= -2);
    }
    ce = -1, z.length = 0, Ms(), vt = null, (z.length || He.length) && Fs();
  }
}
let be = null, Ns = null;
function St(e) {
  const t = be;
  return be = e, Ns = e && e.type.__scopeId || null, t;
}
function ti(e, t = be, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Xn(-1);
    const i = St(t), o = Ce.length;
    let c;
    try {
      c = e(...r);
    } finally {
      for (let u = Ce.length; u > o; u--) zs();
      St(i), s._d && Xn(1);
    }
    return c;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function xe(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const c = r[o];
    i && (c.oldValue = i[o].value);
    let u = c.dir[s];
    u && (je(), Se(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Ve());
  }
}
const ni = /* @__PURE__ */ Symbol("_vte"), Rt = (e) => e.__isTeleport, qt = /* @__PURE__ */ Symbol("_leaveCb");
function si(e) {
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
function Ds(e) {
  if (!$s(e))
    return Rt(e.type) && e.children ? si(e.children) : e;
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
      Rt(n.type) && Ds(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function ri(e, t) {
  return L(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    de({ name: e.name }, t, { setup: e })
  ) : e;
}
function ii(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Bn(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const xt = /* @__PURE__ */ new WeakMap();
function st(e, t, n, s, r = !1) {
  if (I(e)) {
    e.forEach(
      (P, G) => st(
        P,
        t && (I(t) ? t[G] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (rt(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && st(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Cn(s.component) : s.el, o = r ? null : i, { i: c, r: u } = e, h = t && t.r, d = c.refs === V ? c.refs = {} : c.refs, b = c.setupState, w = /* @__PURE__ */ M(b), A = b === V ? cs : (P) => Bn(d, P) ? !1 : N(w, P), D = (P, G) => !(G && Bn(d, G));
  if (h != null && h !== u) {
    if (Un(t), B(h))
      d[h] = null, A(h) && (b[h] = null);
    else if (/* @__PURE__ */ se(h)) {
      const P = t;
      D(h, P.k) && (h.value = null), P.k && (d[P.k] = null);
    }
  }
  if (L(u))
    ht(u, c, 12, [o, d]);
  else {
    const P = B(u), G = /* @__PURE__ */ se(u);
    if (P || G) {
      const X = () => {
        if (e.f) {
          const H = P ? A(u) ? b[u] : d[u] : D() || !e.k ? u.value : d[e.k];
          if (r)
            I(H) && ur(H, i);
          else if (I(H))
            H.includes(i) || H.push(i);
          else if (P)
            d[u] = [i], A(u) && (b[u] = d[u]);
          else {
            const U = [i];
            D(u, e.k) && (u.value = U), e.k && (d[e.k] = U);
          }
        } else P ? (d[u] = o, A(u) && (b[u] = o)) : G && (D(u, e.k) && (u.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const H = () => {
          X(), xt.delete(e);
        };
        H.id = -1, xt.set(e, H), Q(H, n);
      } else
        Un(e), X();
    }
  }
}
function Un(e) {
  const t = xt.get(e);
  t && (t.flags |= 8, xt.delete(e));
}
Pt().requestIdleCallback;
Pt().cancelIdleCallback;
const rt = (e) => !!e.type.__asyncLoader, $s = (e) => e.type.__isKeepAlive, oi = /* @__PURE__ */ Symbol.for("v-ndc"), on = (e) => e ? er(e) ? Cn(e) : on(e.parent) : null, it = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ de(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => on(e.parent),
    $root: (e) => on(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Is(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qr.bind(e.proxy)),
    $watch: (e) => un
  })
), Yt = (e, t) => e !== V && !e.__isScriptSetup && N(e, t), li = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: c, appContext: u } = e;
    if (t[0] !== "$") {
      const w = o[t];
      if (w !== void 0)
        switch (w) {
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
        if (Yt(s, t))
          return o[t] = 1, s[t];
        if (N(i, t))
          return o[t] = 3, i[t];
        if (n !== V && N(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const h = it[t];
    let d, b;
    if (h)
      return t === "$attrs" && Y(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (d = c.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== V && N(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      b = u.config.globalProperties, N(b, t)
    )
      return b[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Yt(r, t) ? (r[t] = n, !0) : N(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, c) {
    let u;
    return !!(n[c] || Yt(t, c) || N(i, c) || N(s, c) || N(it, c) || N(r.config.globalProperties, c) || (u = o.__cssModules) && u[c]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ls() {
  return {
    app: null,
    config: {
      isNativeTag: cs,
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
let ci = 0;
function fi(e, t) {
  return function(s, r = null) {
    L(s) || (s = de({}, s)), r != null && !j(r) && (r = null);
    const i = Ls(), o = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const h = i.app = {
      _uid: ci++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Ui,
      get config() {
        return i.config;
      },
      set config(d) {
      },
      use(d, ...b) {
        return o.has(d) || (d && L(d.install) ? (o.add(d), d.install(h, ...b)) : L(d) && (o.add(d), d(h, ...b))), h;
      },
      mixin(d) {
        return h;
      },
      component(d, b) {
        return b ? (i.components[d] = b, h) : i.components[d];
      },
      directive(d, b) {
        return b ? (i.directives[d] = b, h) : i.directives[d];
      },
      mount(d, b, w) {
        if (!u) {
          const A = h._ceVNode || Ae(s, r);
          return A.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(A, d, w), u = !0, h._container = d, d.__vue_app__ = h, Cn(A.component);
        }
      },
      onUnmount(d) {
        c.push(d);
      },
      unmount() {
        u && (Se(
          c,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(d, b) {
        return i.provides[d] = b, h;
      },
      runWithContext(d) {
        return d();
      }
    };
    return h;
  };
}
const ui = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${te(t)}Modifiers`] || e[`${Me(t)}Modifiers`];
function ai(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || V;
  let r = n;
  const i = t.startsWith("update:"), o = i && ui(s, t.slice(7));
  o && (o.trim && (r = n.map((d) => B(d) ? d.trim() : d)), o.number && (r = n.map(mr)));
  let c, u = s[c = jt(t)] || // also try camelCase event handler (#2249)
  s[c = jt(te(t))];
  !u && i && (u = s[c = jt(Me(t))]), u && Se(
    u,
    e,
    6,
    r
  );
  const h = s[c + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Se(
      h,
      e,
      6,
      r
    );
  }
}
function di(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {};
  return i ? (I(i) ? i.forEach((c) => o[c] = null) : de(o, i), j(e) && s.set(e, o), o) : (j(e) && s.set(e, null), null);
}
function Mt(e, t) {
  return !e || !Ct(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), N(e, t[0].toLowerCase() + t.slice(1)) || N(e, Me(t)) || N(e, t));
}
function Wn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: c,
    emit: u,
    render: h,
    renderCache: d,
    props: b,
    data: w,
    setupState: A,
    ctx: D,
    inheritAttrs: P
  } = e, G = St(e);
  let X, H;
  try {
    if (n.shapeFlag & 4) {
      const J = r || s, We = J;
      X = ue(
        h.call(
          We,
          J,
          d,
          b,
          A,
          w,
          D
        )
      ), H = c;
    } else {
      const J = t;
      X = ue(
        J.length > 1 ? J(
          b,
          { attrs: c, slots: o, emit: u }
        ) : J(
          b,
          null
        )
      ), H = t.props ? c : hi(c);
    }
  } catch (J) {
    Ce.length = 0, It(J, e, 1), X = Ae(Re);
  }
  let U = X;
  if (H && P !== !1) {
    const J = Object.keys(H), { shapeFlag: We } = U;
    J.length && We & 7 && (i && J.some(At) && (H = pi(
      H,
      i
    )), U = Ke(U, H, !1, !0));
  }
  if (n.dirs && (U = Ke(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const J = Rt(U.type) && Ds(U) || U;
    Tn(J, n.transition);
  }
  return X = U, St(G), X;
}
const hi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ct(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, pi = (e, t) => {
  const n = {};
  for (const s in e)
    (!At(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function gi(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: c, patchFlag: u } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? qn(s, o, h) : !!o;
    if (u & 8) {
      const d = t.dynamicProps;
      for (let b = 0; b < d.length; b++) {
        const w = d[b];
        if (Hs(o, s, w) && !Mt(h, w))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : s === o ? !1 : s ? o ? qn(s, o, h) : !0 : !!o;
  return !1;
}
function qn(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (Hs(t, e, i) && !Mt(n, i))
      return !0;
  }
  return !1;
}
function Hs(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && j(s) && j(r) ? !pn(s, r) : s !== r;
}
function _i({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const js = {}, Vs = () => Object.create(js), Ks = (e) => Object.getPrototypeOf(e) === js;
function mi(e, t, n, s = !1) {
  const r = {}, i = Vs();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Bs(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ Gr(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function bi(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, c = /* @__PURE__ */ M(r), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let b = 0; b < d.length; b++) {
        let w = d[b];
        if (Mt(e.emitsOptions, w))
          continue;
        const A = t[w];
        if (u)
          if (N(i, w))
            A !== i[w] && (i[w] = A, h = !0);
          else {
            const D = te(w);
            r[D] = ln(
              u,
              c,
              D,
              A,
              e,
              !1
            );
          }
        else
          A !== i[w] && (i[w] = A, h = !0);
      }
    }
  } else {
    Bs(e, t, r, i) && (h = !0);
    let d;
    for (const b in c)
      (!t || // for camelCase
      !N(t, b) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Me(b)) === b || !N(t, d))) && (u ? n && // for camelCase
      (n[b] !== void 0 || // for kebab-case
      n[d] !== void 0) && (r[b] = ln(
        u,
        c,
        b,
        void 0,
        e,
        !0
      )) : delete r[b]);
    if (i !== c)
      for (const b in i)
        (!t || !N(t, b)) && (delete i[b], h = !0);
  }
  h && me(e.attrs, "set", "");
}
function Bs(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let u in t) {
      if (et(u))
        continue;
      const h = t[u];
      let d;
      r && N(r, d = te(u)) ? !i || !i.includes(d) ? n[d] = h : (c || (c = {}))[d] = h : Mt(e.emitsOptions, u) || (!(u in s) || h !== s[u]) && (s[u] = h, o = !0);
    }
  if (i) {
    const u = /* @__PURE__ */ M(n), h = c || V;
    for (let d = 0; d < i.length; d++) {
      const b = i[d];
      n[b] = ln(
        r,
        u,
        b,
        h[b],
        e,
        !N(h, b)
      );
    }
  }
  return o;
}
function ln(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const c = N(o, "default");
    if (c && s === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && L(u)) {
        const { propsDefaults: h } = r;
        if (n in h)
          s = h[n];
        else {
          const d = ks(r);
          s = h[n] = u.call(
            null,
            t
          ), d();
        }
      } else
        s = u;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !c ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Me(n)) && (s = !0));
  }
  return s;
}
function yi(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, c = [];
  if (!i)
    return j(e) && s.set(e, Le), Le;
  if (I(i))
    for (let h = 0; h < i.length; h++) {
      const d = te(i[h]);
      Yn(d) && (o[d] = V);
    }
  else if (i)
    for (const h in i) {
      const d = te(h);
      if (Yn(d)) {
        const b = i[h], w = o[d] = I(b) || L(b) ? { type: b } : de({}, b), A = w.type;
        let D = !1, P = !0;
        if (I(A))
          for (let G = 0; G < A.length; ++G) {
            const X = A[G], H = L(X) && X.name;
            if (H === "Boolean") {
              D = !0;
              break;
            } else H === "String" && (P = !1);
          }
        else
          D = L(A) && A.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = D, w[
          1
          /* shouldCastTrue */
        ] = P, (D || N(w, "default")) && c.push(d);
      }
    }
  const u = [o, c];
  return j(e) && s.set(e, u), u;
}
function Yn(e) {
  return e[0] !== "$" && !et(e);
}
const wn = (e) => e === "_" || e === "_ctx" || e === "$stable", En = (e) => I(e) ? e.map(ue) : [ue(e)], vi = (e, t, n) => {
  if (t._n)
    return t;
  const s = ti((...r) => En(t(...r)), n);
  return s._c = !1, s;
}, Us = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (wn(r)) continue;
    const i = e[r];
    if (L(i))
      t[r] = vi(r, i, s);
    else if (i != null) {
      const o = En(i);
      t[r] = () => o;
    }
  }
}, Ws = (e, t) => {
  const n = En(t);
  e.slots.default = () => n;
}, qs = (e, t, n) => {
  for (const s in t)
    (n || !wn(s)) && (e[s] = t[s]);
}, Si = (e, t, n) => {
  const s = e.slots = Vs();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (qs(s, t, n), n && ds(s, "_", r, !0)) : Us(t, s);
  } else t && Ws(e, t);
}, xi = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = V;
  if (s.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? i = !1 : qs(r, t, n) : (i = !t.$stable, Us(t, r)), o = t;
  } else t && (Ws(e, t), o = { default: 1 });
  if (i)
    for (const c in r)
      !wn(c) && o[c] == null && delete r[c];
}, Q = Ai;
function Ti(e) {
  return wi(e);
}
function wi(e, t) {
  const n = Pt();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: c,
    createComment: u,
    setText: h,
    setElementText: d,
    parentNode: b,
    nextSibling: w,
    setScopeId: A = un,
    insertStaticContent: D
  } = e, P = (l, f, a, m = null, _ = null, p = null, S = void 0, v = null, y = !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !Je(l, f) && (m = gt(l), ye(l, _, p, !0), l = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: g, ref: E, shapeFlag: x } = f;
    switch (g) {
      case Ft:
        G(l, f, a, m);
        break;
      case Re:
        X(l, f, a, m);
        break;
      case Xt:
        l == null && H(f, a, m, S);
        break;
      case ge:
        rr(
          l,
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
        x & 1 ? We(
          l,
          f,
          a,
          m,
          _,
          p,
          S,
          v,
          y
        ) : x & 6 ? ir(
          l,
          f,
          a,
          m,
          _,
          p,
          S,
          v,
          y
        ) : (x & 64 || x & 128) && g.process(
          l,
          f,
          a,
          m,
          _,
          p,
          S,
          v,
          y,
          Ye
        );
    }
    E != null && _ ? st(E, l && l.ref, p, f || l, !f) : E == null && l && l.ref != null && st(l.ref, null, p, l, !0);
  }, G = (l, f, a, m) => {
    if (l == null)
      s(
        f.el = c(f.children),
        a,
        m
      );
    else {
      const _ = f.el = l.el;
      f.children !== l.children && h(_, f.children);
    }
  }, X = (l, f, a, m) => {
    l == null ? s(
      f.el = u(f.children || ""),
      a,
      m
    ) : f.el = l.el;
  }, H = (l, f, a, m) => {
    [l.el, l.anchor] = D(
      l.children,
      f,
      a,
      m,
      l.el,
      l.anchor
    );
  }, U = ({ el: l, anchor: f }, a, m) => {
    let _;
    for (; l && l !== f; )
      _ = w(l), s(l, a, m), l = _;
    s(f, a, m);
  }, J = ({ el: l, anchor: f }) => {
    let a;
    for (; l && l !== f; )
      a = w(l), r(l), l = a;
    r(f);
  }, We = (l, f, a, m, _, p, S, v, y) => {
    if (f.type === "svg" ? S = "svg" : f.type === "math" && (S = "mathml"), l == null)
      An(
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
      const g = l.el && l.el._isVueCE ? l.el : null;
      try {
        g && g._beginPatch(), sr(
          l,
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
  }, An = (l, f, a, m, _, p, S, v) => {
    let y, g;
    const { props: E, shapeFlag: x, transition: T, dirs: C } = l;
    if (y = l.el = o(
      l.type,
      p,
      E && E.is,
      E
    ), x & 8 ? d(y, l.children) : x & 16 && Fe(
      l.children,
      y,
      null,
      m,
      _,
      Gt(l, p),
      S,
      v
    ), C && xe(l, null, m, "created"), Nt(y, l, l.scopeId, S, m), E) {
      for (const F in E)
        F !== "value" && !et(F) && i(y, F, null, E[F], p, m);
      "value" in E && i(y, "value", null, E.value, p), (g = E.onVnodeBeforeMount) && le(g, m, l);
    }
    C && xe(l, null, m, "beforeMount");
    const O = Ei(_, T);
    O && T.beforeEnter(y), s(y, f, a), ((g = E && E.onVnodeMounted) || O || C) && Q(() => {
      g && le(g, m, l), O && T.enter(y), C && xe(l, null, m, "mounted");
    }, _);
  }, Nt = (l, f, a, m, _) => {
    if (a && A(l, a), m)
      for (let p = 0; p < m.length; p++)
        A(l, m[p]);
    if (_) {
      let p = _.subTree;
      if (f === p || Js(p.type) && (p.ssContent === f || p.ssFallback === f)) {
        const S = _.vnode;
        Nt(
          l,
          S,
          S.scopeId,
          S.slotScopeIds,
          _.parent
        );
      }
    }
  }, Fe = (l, f, a, m, _, p, S, v, y = 0) => {
    for (let g = y; g < l.length; g++) {
      const E = l[g] = v ? _e(l[g]) : ue(l[g]);
      P(
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
  }, sr = (l, f, a, m, _, p, S) => {
    const v = f.el = l.el;
    let { patchFlag: y, dynamicChildren: g, dirs: E } = f;
    y |= l.patchFlag & 16;
    const x = l.props || V, T = f.props || V;
    let C;
    if (a && Te(a, !1), (C = T.onVnodeBeforeUpdate) && le(C, a, f, l), E && xe(f, l, a, "beforeUpdate"), a && Te(a, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    g && (!l.dynamicChildren || l.dynamicChildren.length !== g.length) && (y = 0, S = !1, g = null), (x.innerHTML && T.innerHTML == null || x.textContent && T.textContent == null) && d(v, ""), g ? Dt(
      l.dynamicChildren,
      g,
      v,
      a,
      m,
      Gt(f, _),
      p
    ) : S || Lt(
      l,
      f,
      v,
      null,
      a,
      m,
      Gt(f, _),
      p,
      !1
    ), y > 0) {
      if (y & 16)
        On(v, x, T, a, _);
      else if (y & 2 && x.class !== T.class && i(v, "class", null, T.class, _), y & 4 && i(v, "style", x.style, T.style, _), y & 8) {
        const O = f.dynamicProps;
        for (let F = 0; F < O.length; F++) {
          const R = O[F], K = x[R], W = T[R];
          (W !== K || R === "value") && i(v, R, K, W, _, a);
        }
      }
      y & 1 && l.children !== f.children && d(v, f.children);
    } else !S && g == null && On(v, x, T, a, _);
    ((C = T.onVnodeUpdated) || E) && Q(() => {
      C && le(C, a, f, l), E && xe(f, l, a, "updated");
    }, m);
  }, Dt = (l, f, a, m, _, p, S) => {
    for (let v = 0; v < f.length; v++) {
      const y = l[v], g = f[v], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === ge || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Je(y, g) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? b(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          a
        )
      );
      P(
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
  }, On = (l, f, a, m, _) => {
    if (f !== a) {
      if (f !== V)
        for (const p in f)
          !et(p) && !(p in a) && i(
            l,
            p,
            f[p],
            null,
            _,
            m
          );
      for (const p in a) {
        if (et(p)) continue;
        const S = a[p], v = f[p];
        S !== v && p !== "value" && i(l, p, v, S, _, m);
      }
      "value" in a && i(l, "value", f.value, a.value, _);
    }
  }, rr = (l, f, a, m, _, p, S, v, y) => {
    const g = f.el = l ? l.el : c(""), E = f.anchor = l ? l.anchor : c("");
    let { patchFlag: x, dynamicChildren: T, slotScopeIds: C } = f;
    C && (v = v ? v.concat(C) : C), l == null ? (s(g, a, m), s(E, a, m), Fe(
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
    )) : x > 0 && x & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren && l.dynamicChildren.length === T.length ? (Dt(
      l.dynamicChildren,
      T,
      a,
      _,
      p,
      S,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || _ && f === _.subTree) && Ys(
      l,
      f,
      !0
      /* shallow */
    )) : Lt(
      l,
      f,
      a,
      E,
      _,
      p,
      S,
      v,
      y
    );
  }, ir = (l, f, a, m, _, p, S, v, y) => {
    f.slotScopeIds = v, l == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      a,
      m,
      S,
      y
    ) : Pn(
      f,
      a,
      m,
      _,
      p,
      S,
      y
    ) : or(l, f, y);
  }, Pn = (l, f, a, m, _, p, S) => {
    const v = l.component = Li(
      l,
      m,
      _
    );
    if ($s(l) && (v.ctx.renderer = Ye), Hi(v, !1, S), v.asyncDep) {
      if (_ && _.registerDep(v, In, S), !l.el) {
        const y = v.subTree = Ae(Re);
        X(null, y, f, a), l.placeholder = y.el;
      }
    } else
      In(
        v,
        l,
        f,
        a,
        _,
        p,
        S
      );
  }, or = (l, f, a) => {
    const m = f.component = l.component;
    if (gi(l, f, a))
      if (m.asyncDep && !m.asyncResolved) {
        $t(m, f, a);
        return;
      } else
        m.next = f, m.update();
    else
      f.el = l.el, m.vnode = f;
  }, In = (l, f, a, m, _, p, S) => {
    const v = () => {
      if (l.isMounted) {
        let { next: x, bu: T, u: C, parent: O, vnode: F } = l;
        {
          const ie = Gs(l);
          if (ie) {
            x && (x.el = F.el, $t(l, x, S)), ie.asyncDep.then(() => {
              Q(() => {
                l.isUnmounted || g();
              }, _);
            });
            return;
          }
        }
        let R = x, K;
        Te(l, !1), x ? (x.el = F.el, $t(l, x, S)) : x = F, T && Vt(T), (K = x.props && x.props.onVnodeBeforeUpdate) && le(K, O, x, F), Te(l, !0);
        const W = Wn(l), re = l.subTree;
        l.subTree = W, P(
          re,
          W,
          // parent may have changed if it's in a teleport
          b(re.el),
          // anchor may have changed if it's in a fragment
          gt(re),
          l,
          _,
          p
        ), x.el = W.el, R === null && _i(l, W.el), C && Q(C, _), (K = x.props && x.props.onVnodeUpdated) && Q(
          () => le(K, O, x, F),
          _
        );
      } else {
        let x;
        const { el: T, props: C } = f, { bm: O, m: F, parent: R, root: K, type: W } = l, re = rt(f);
        Te(l, !1), O && Vt(O), !re && (x = C && C.onVnodeBeforeMount) && le(x, R, f), Te(l, !0);
        {
          K.ce && K.ce._hasShadowRoot() && K.ce._injectChildStyle(
            W,
            l.parent ? l.parent.type : void 0
          );
          const ie = l.subTree = Wn(l);
          P(
            null,
            ie,
            a,
            m,
            l,
            _,
            p
          ), f.el = ie.el;
        }
        if (F && Q(F, _), !re && (x = C && C.onVnodeMounted)) {
          const ie = f;
          Q(
            () => le(x, R, ie),
            _
          );
        }
        (f.shapeFlag & 256 || R && rt(R.vnode) && R.vnode.shapeFlag & 256) && l.a && Q(l.a, _), l.isMounted = !0, f = a = m = null;
      }
    };
    l.scope.on();
    const y = l.effect = new Cr(v);
    l.scope.off();
    const g = l.update = y.run.bind(y), E = l.job = y.runIfDirty.bind(y);
    E.i = l, E.id = l.uid, y.scheduler = () => Is(E), Te(l, !0), g();
  }, $t = (l, f, a) => {
    f.component = l;
    const m = l.vnode.props;
    l.vnode = f, l.next = null, bi(l, f.props, m, a), xi(l, f.children, a), je(), Kn(l), Ve();
  }, Lt = (l, f, a, m, _, p, S, v, y = !1) => {
    const g = l && l.children, E = l ? l.shapeFlag : 0, x = f.children, { patchFlag: T, shapeFlag: C } = f;
    if (T > 0) {
      if (T & 128) {
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
      } else if (T & 256) {
        lr(
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
    C & 8 ? (E & 16 && qe(g, _, p), x !== g && d(a, x)) : E & 16 ? C & 16 ? Rn(
      g,
      x,
      a,
      m,
      _,
      p,
      S,
      v,
      y
    ) : qe(g, _, p, !0) : (E & 8 && d(a, ""), C & 16 && Fe(
      x,
      a,
      m,
      _,
      p,
      S,
      v,
      y
    ));
  }, lr = (l, f, a, m, _, p, S, v, y) => {
    l = l || Le, f = f || Le;
    const g = l.length, E = f.length, x = Math.min(g, E);
    let T;
    for (T = 0; T < x; T++) {
      const C = f[T] = y ? _e(f[T]) : ue(f[T]);
      P(
        l[T],
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
    g > E ? qe(
      l,
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
  }, Rn = (l, f, a, m, _, p, S, v, y) => {
    let g = 0;
    const E = f.length;
    let x = l.length - 1, T = E - 1;
    for (; g <= x && g <= T; ) {
      const C = l[g], O = f[g] = y ? _e(f[g]) : ue(f[g]);
      if (Je(C, O))
        P(
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
    for (; g <= x && g <= T; ) {
      const C = l[x], O = f[T] = y ? _e(f[T]) : ue(f[T]);
      if (Je(C, O))
        P(
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
      x--, T--;
    }
    if (g > x) {
      if (g <= T) {
        const C = T + 1, O = C < E ? f[C].el : m;
        for (; g <= T; )
          P(
            null,
            f[g] = y ? _e(f[g]) : ue(f[g]),
            a,
            O,
            _,
            p,
            S,
            v,
            y
          ), g++;
      }
    } else if (g > T)
      for (; g <= x; )
        ye(l[g], _, p, !0), g++;
    else {
      const C = g, O = g, F = /* @__PURE__ */ new Map();
      for (g = O; g <= T; g++) {
        const Z = f[g] = y ? _e(f[g]) : ue(f[g]);
        Z.key != null && F.set(Z.key, g);
      }
      let R, K = 0;
      const W = T - O + 1;
      let re = !1, ie = 0;
      const Ge = new Array(W);
      for (g = 0; g < W; g++) Ge[g] = 0;
      for (g = C; g <= x; g++) {
        const Z = l[g];
        if (K >= W) {
          ye(Z, _, p, !0);
          continue;
        }
        let oe;
        if (Z.key != null)
          oe = F.get(Z.key);
        else
          for (R = O; R <= T; R++)
            if (Ge[R - O] === 0 && Je(Z, f[R])) {
              oe = R;
              break;
            }
        oe === void 0 ? ye(Z, _, p, !0) : (Ge[oe - O] = g + 1, oe >= ie ? ie = oe : re = !0, P(
          Z,
          f[oe],
          a,
          null,
          _,
          p,
          S,
          v,
          y
        ), K++);
      }
      const Nn = re ? Ci(Ge) : Le;
      for (R = Nn.length - 1, g = W - 1; g >= 0; g--) {
        const Z = O + g, oe = f[Z], Dn = f[Z + 1], $n = Z + 1 < E ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Dn.el || Xs(Dn)
        ) : m;
        Ge[g] === 0 ? P(
          null,
          oe,
          a,
          $n,
          _,
          p,
          S,
          v,
          y
        ) : re && (R < 0 || g !== Nn[R] ? pt(oe, a, $n, 2) : R--);
      }
    }
  }, pt = (l, f, a, m, _ = null) => {
    const { el: p, type: S, transition: v, children: y, shapeFlag: g } = l;
    if (g & 6) {
      pt(l.component.subTree, f, a, m);
      return;
    }
    if (g & 128) {
      l.suspense.move(f, a, m);
      return;
    }
    if (g & 64) {
      S.move(l, f, a, Ye);
      return;
    }
    if (S === ge) {
      s(p, f, a);
      for (let x = 0; x < y.length; x++)
        pt(y[x], f, a, m);
      s(l.anchor, f, a);
      return;
    }
    if (S === Xt) {
      U(l, f, a);
      return;
    }
    if (m !== 2 && g & 1 && v)
      if (m === 0)
        v.persisted && !p[qt] ? s(p, f, a) : (v.beforeEnter(p), s(p, f, a), Q(() => v.enter(p), _));
      else {
        const { leave: x, delayLeave: T, afterLeave: C } = v, O = () => {
          l.ctx.isUnmounted ? r(p) : s(p, f, a);
        }, F = () => {
          const R = p._isLeaving || !!p[qt];
          p._isLeaving && p[qt](
            !0
            /* cancelled */
          ), v.persisted && !R ? O() : x(p, () => {
            O(), C && C();
          });
        };
        T ? T(p, O, F) : F();
      }
    else
      s(p, f, a);
  }, ye = (l, f, a, m = !1, _ = !1) => {
    const {
      type: p,
      props: S,
      ref: v,
      children: y,
      dynamicChildren: g,
      shapeFlag: E,
      patchFlag: x,
      dirs: T,
      cacheIndex: C,
      memo: O
    } = l;
    if (x === -2 && (_ = !1), v != null && (je(), st(v, null, a, l, !0), Ve()), C != null && (f.renderCache[C] = void 0), E & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const F = E & 1 && T, R = !rt(l);
    let K;
    if (R && (K = S && S.onVnodeBeforeUnmount) && le(K, f, l), E & 6)
      fr(l.component, a, m);
    else {
      if (E & 128) {
        l.suspense.unmount(a, m);
        return;
      }
      F && xe(l, null, f, "beforeUnmount"), E & 64 ? l.type.remove(
        l,
        f,
        a,
        Ye,
        m
      ) : g && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !g.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (p !== ge || x > 0 && x & 64) ? qe(
        g,
        f,
        a,
        !1,
        !0
      ) : (p === ge && x & 384 || !_ && E & 16) && qe(y, f, a), m && Mn(l);
    }
    const W = O != null && C == null;
    (R && (K = S && S.onVnodeUnmounted) || F || W) && Q(() => {
      K && le(K, f, l), F && xe(l, null, f, "unmounted"), W && (l.el = null);
    }, a);
  }, Mn = (l) => {
    const { type: f, el: a, anchor: m, transition: _ } = l;
    if (f === ge) {
      cr(a, m);
      return;
    }
    if (f === Xt) {
      J(l);
      return;
    }
    const p = () => {
      r(a), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (l.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: S, delayLeave: v } = _, y = () => S(a, p);
      v ? v(l.el, p, y) : y();
    } else
      p();
  }, cr = (l, f) => {
    let a;
    for (; l !== f; )
      a = w(l), r(l), l = a;
    r(f);
  }, fr = (l, f, a) => {
    const { bum: m, scope: _, job: p, subTree: S, um: v, m: y, a: g } = l;
    Gn(y), Gn(g), m && Vt(m), _.stop(), p && (p.flags |= 8, ye(S, l, f, a)), v && Q(v, f), Q(() => {
      l.isUnmounted = !0;
    }, f);
  }, qe = (l, f, a, m = !1, _ = !1, p = 0) => {
    for (let S = p; S < l.length; S++)
      ye(l[S], f, a, m, _);
  }, gt = (l) => {
    if (l.shapeFlag & 6)
      return gt(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const f = w(l.anchor || l.el), a = f && f[ni];
    return a ? w(a) : f;
  };
  let Ht = !1;
  const Fn = (l, f, a) => {
    let m;
    l == null ? f._vnode && (ye(f._vnode, null, null, !0), m = f._vnode.component) : P(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      a
    ), f._vnode = l, Ht || (Ht = !0, Kn(m), Ms(), Ht = !1);
  }, Ye = {
    p: P,
    um: ye,
    m: pt,
    r: Mn,
    mt: Pn,
    mc: Fe,
    pc: Lt,
    pbc: Dt,
    n: gt,
    o: e
  };
  return {
    render: Fn,
    hydrate: void 0,
    createApp: fi(Fn)
  };
}
function Gt({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Te({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ei(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ys(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (I(s) && I(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let c = r[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[i] = _e(r[i]), c.el = o.el), !n && c.patchFlag !== -2 && Ys(o, c)), c.type === Ft && (c.patchFlag === -1 && (c = r[i] = _e(c)), c.el = o.el), c.type === Re && !c.el && (c.el = o.el);
    }
}
function Ci(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, c;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const h = e[s];
    if (h !== 0) {
      if (r = n[n.length - 1], e[r] < h) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        c = i + o >> 1, e[n[c]] < h ? i = c + 1 : o = c;
      h < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function Gs(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Gs(t);
}
function Gn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Xs(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Xs(t.subTree) : null;
}
const Js = (e) => e.__isSuspense;
function Ai(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : ei(e);
}
const ge = /* @__PURE__ */ Symbol.for("v-fgt"), Ft = /* @__PURE__ */ Symbol.for("v-txt"), Re = /* @__PURE__ */ Symbol.for("v-cmt"), Xt = /* @__PURE__ */ Symbol.for("v-stc"), Ce = [];
let ee = null;
function Oi(e = !1) {
  Ce.push(ee = e ? null : []);
}
function zs() {
  Ce.pop(), ee = Ce[Ce.length - 1] || null;
}
let ut = 1;
function Xn(e, t = !1) {
  ut += e, e < 0 && ee && t && (ee.hasOnce = !0);
}
function Pi(e) {
  return e.dynamicChildren = ut > 0 ? ee || Le : null, zs(), ut > 0 && ee && ee.push(e), e;
}
function Ii(e, t, n, s, r, i) {
  return Pi(
    k(
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
function Zs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Je(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Qs = ({ key: e }) => e ?? null, bt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? B(e) || /* @__PURE__ */ se(e) || L(e) ? { i: be, r: e, k: t, f: !!n } : e : null);
function k(e, t = null, n = null, s = 0, r = null, i = e === ge ? 0 : 1, o = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Qs(t),
    ref: t && bt(t),
    scopeId: Ns,
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
    ctx: be
  };
  return c ? (Tt(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= B(n) ? 8 : 16), ut > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ee.push(u), u;
}
const Ae = Ri;
function Ri(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === oi) && (e = Re), Zs(e)) {
    const c = Ke(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Tt(c, n), ut > 0 && !i && ee && (c.shapeFlag & 6 ? ee[ee.indexOf(e)] = c : ee.push(c)), c.patchFlag = -2, c;
  }
  if (Bi(e) && (e = e.__vccOpts), t) {
    t = Mi(t);
    let { class: c, style: u } = t;
    c && !B(c) && (t.class = hn(c)), j(u) && (/* @__PURE__ */ xn(u) && !I(u) && (u = de({}, u)), t.style = dn(u));
  }
  const o = B(e) ? 1 : Js(e) ? 128 : Rt(e) ? 64 : j(e) ? 4 : L(e) ? 2 : 0;
  return k(
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
function Mi(e) {
  return e ? /* @__PURE__ */ xn(e) || Ks(e) ? de({}, e) : e : null;
}
function Ke(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: c, transition: u } = e, h = t ? Ni(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Qs(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? I(i) ? i.concat(bt(t)) : [i, bt(t)] : bt(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ge ? o === -1 ? 16 : o | 16 : o,
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
    d,
    u.clone(d)
  ), d;
}
function Fi(e = " ", t = 0) {
  return Ae(Ft, null, e, t);
}
function ue(e) {
  return e == null || typeof e == "boolean" ? Ae(Re) : I(e) ? Ae(
    ge,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Zs(e) ? _e(e) : Ae(Ft, null, String(e));
}
function _e(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ke(e);
}
function Tt(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Tt(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ks(t) ? t._ctx = be : r === 3 && be && (be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (L(t)) {
    if (s & 65) {
      Tt(e, { default: t });
      return;
    }
    t = { default: t, _ctx: be }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Fi(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Ni(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = hn([t.class, s.class]));
      else if (r === "style")
        t.style = dn([t.style, s.style]);
      else if (Ct(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(I(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !At(r) && (t[r] = o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function le(e, t, n, s = null) {
  Se(e, t, 7, [
    n,
    s
  ]);
}
const Di = Ls();
let $i = 0;
function Li(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Di, i = {
    uid: $i++,
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
    scope: new Er(
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
    propsOptions: yi(s, r),
    emitsOptions: di(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: V,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: V,
    data: V,
    props: V,
    attrs: V,
    slots: V,
    refs: V,
    setupState: V,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ai.bind(null, i), e.ce && e.ce(i), i;
}
let wt = null, Et, at;
{
  const e = Pt(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Et = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => wt = n
  ), at = t(
    "__VUE_SSR_SETTERS__",
    (n) => n
  );
}
const ks = (e) => {
  const t = wt;
  return Et(e), e.scope.on(), () => {
    e.scope.off(), Et(t);
  };
}, Jn = () => {
  wt && wt.scope.off(), Et(null);
};
function er(e) {
  return e.vnode.shapeFlag & 4;
}
function Hi(e, t = !1, n = !1) {
  t && at(t);
  const { props: s, children: r } = e.vnode, i = er(e);
  mi(e, s, i, t), Si(e, r, n || t);
  const o = i ? ji(e, t) : void 0;
  return t && at(!1), o;
}
function ji(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, li);
  const { setup: s } = n;
  if (s) {
    je();
    const r = e.setupContext = s.length > 1 ? Ki(e) : null, i = ks(e), o = ht(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), c = fs(o);
    if (Ve(), i(), (c || e.sp) && !rt(e) && ii(e), c) {
      if (o.then(Jn, Jn), t)
        return o.then((u) => {
          at(!0);
          try {
            zn(e, u, t);
          } finally {
            at(!1);
          }
        }).catch((u) => {
          It(u, e, 0);
        });
      e.asyncDep = o;
    } else
      zn(e, o);
  } else
    tr(e);
}
function zn(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : j(t) && (e.setupState = Os(t)), tr(e);
}
function tr(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || un);
}
const Vi = {
  get(e, t) {
    return Y(e, "get", ""), e[t];
  }
};
function Ki(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Vi),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Cn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Os(Xr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in it)
        return it[n](e);
    },
    has(t, n) {
      return n in t || n in it;
    }
  })) : e.proxy;
}
function Bi(e) {
  return L(e) && "__vccOpts" in e;
}
const Ui = "3.5.41";
let cn;
const Zn = typeof window < "u" && window.trustedTypes;
if (Zn)
  try {
    cn = /* @__PURE__ */ Zn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const nr = cn ? (e) => cn.createHTML(e) : (e) => e, Wi = "http://www.w3.org/2000/svg", qi = "http://www.w3.org/1998/Math/MathML", pe = typeof document < "u" ? document : null, Qn = pe && /* @__PURE__ */ pe.createElement("template"), Yi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? pe.createElementNS(Wi, e) : t === "mathml" ? pe.createElementNS(qi, e) : n ? pe.createElement(e, { is: n }) : pe.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => pe.createTextNode(e),
  createComment: (e) => pe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => pe.querySelector(e),
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
      Qn.innerHTML = nr(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Qn.content;
      if (s === "svg" || s === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Gi = /* @__PURE__ */ Symbol("_vtc");
function Xi(e, t, n) {
  const s = e[Gi];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const kn = /* @__PURE__ */ Symbol("_vod"), Ji = /* @__PURE__ */ Symbol("_vsh"), zi = /* @__PURE__ */ Symbol(""), Zi = /(?:^|;)\s*display\s*:/;
function Qi(e, t, n) {
  const s = e.style, r = B(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (B(t))
        for (const o of t.split(";")) {
          const c = o.slice(0, o.indexOf(":")).trim();
          n[c] == null && Qe(s, c, "");
        }
      else
        for (const o in t)
          n[o] == null && Qe(s, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const c = n[o];
      c != null ? eo(
        e,
        o,
        !B(t) && t ? t[o] : void 0,
        c
      ) || Qe(s, o, c) : Qe(s, o, "");
    }
  } else if (r) {
    if (t !== n) {
      const o = s[zi];
      o && (n += ";" + o), s.cssText = n, i = Zi.test(n);
    }
  } else t && e.removeAttribute("style");
  kn in e && (e[kn] = i ? s.display : "", e[Ji] && (s.display = "none"));
}
const es = /\s*!important$/;
function Qe(e, t, n) {
  if (I(n))
    n.forEach((s) => Qe(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = ki(e, t);
    es.test(n) ? e.setProperty(
      Me(s),
      n.replace(es, ""),
      "important"
    ) : e[s] = n;
  }
}
const ts = ["Webkit", "Moz", "ms"], Jt = {};
function ki(e, t) {
  const n = Jt[t];
  if (n)
    return n;
  let s = te(t);
  if (s !== "filter" && s in e)
    return Jt[t] = s;
  s = as(s);
  for (let r = 0; r < ts.length; r++) {
    const i = ts[r] + s;
    if (i in e)
      return Jt[t] = i;
  }
  return t;
}
function eo(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && B(s) && n === s;
}
const ns = "http://www.w3.org/1999/xlink";
function ss(e, t, n, s, r, i = Tr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ns, t.slice(6, t.length)) : e.setAttributeNS(ns, t, n) : n == null || i && !hs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ae(n) ? String(n) : n
  );
}
function rs(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? nr(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const c = i === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = hs(n) : n == null && c === "string" ? (n = "", o = !0) : c === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function to(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function no(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const is = /* @__PURE__ */ Symbol("_vei");
function so(e, t, n, s, r = null) {
  const i = e[is] || (e[is] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [c, u] = oo(t);
    if (s) {
      const h = i[t] = fo(
        s,
        r
      );
      to(e, c, h, u);
    } else o && (no(e, c, o, u), i[t] = void 0);
  }
}
const ro = /(Once|Passive|Capture)$/, io = /^on:?(?:Once|Passive|Capture)$/;
function oo(e) {
  let t, n;
  for (; (n = e.match(ro)) && !io.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Me(e.slice(2)), t];
}
let zt = 0;
const lo = /* @__PURE__ */ Promise.resolve(), co = () => zt || (lo.then(() => zt = 0), zt = Date.now());
function fo(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const r = n.value;
    if (I(r)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        i.call(s), s._stopped = !0;
      };
      const o = r.slice(), c = [s];
      for (let u = 0; u < o.length && !s._stopped; u++) {
        const h = o[u];
        h && Se(
          h,
          t,
          5,
          c
        );
      }
    } else
      Se(
        r,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = co(), n;
}
const os = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uo = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? Xi(e, s, o) : t === "style" ? Qi(e, n, s) : Ct(t) ? At(t) || so(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ao(e, t, s, o)) ? (rs(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ss(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ho(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !B(s))) ? rs(e, te(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), ss(e, t, s, o));
};
function ao(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && os(t) && L(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return os(t) && B(n) ? !1 : t in e;
}
function ho(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = te(t);
  return Array.isArray(n) ? n.some((r) => te(r) === s) : Object.keys(n).some((r) => te(r) === s);
}
const po = /* @__PURE__ */ de({ patchProp: uo }, Yi);
let ls;
function go() {
  return ls || (ls = Ti(po));
}
const _o = ((...e) => {
  const t = go().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = bo(s);
    if (!r) return;
    const i = t._component;
    !L(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, mo(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function mo(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function bo(e) {
  return B(e) ? document.querySelector(e) : e;
}
const yo = "Tavern Multi-TTS", Zt = "tavern_multi_tts", vo = "0.1.0", Qt = "tavern-multi-tts-root", $e = "[Tavern Multi-TTS]", So = 1, xo = {
  enabled: !0
};
function To(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function wo(e) {
  const t = To(e) ? e : {};
  return {
    schemaVersion: So,
    enabled: typeof t.enabled == "boolean" ? t.enabled : xo.enabled
  };
}
function Eo(e, t) {
  let n = !1, s = !1, r = null, i = null, o = null;
  function c() {
    return wo(e.readRawSettings());
  }
  function u() {
    const A = c();
    return e.writeSettings(A), A;
  }
  function h() {
    if (n)
      return !0;
    const A = document.getElementById(Qt);
    A && A.remove();
    const D = e.findSettingsRoot();
    return D ? (o = document.createElement("div"), o.id = Qt, o.dataset.tavernMultiTts = "settings", D.appendChild(o), t.mount(o, c()), i = e.onPageHide(() => {
      d({ removeSettings: !1 });
    }), n = !0, console.info(`${$e} settings panel mounted`), !0) : !1;
  }
  function d(A) {
    r?.(), r = null, s = !1, i?.(), i = null, t.unmount(), (o ?? document.getElementById(Qt))?.remove(), o = null, n = !1, A.removeSettings && e.removeSettings();
  }
  function b() {
    n || s || (u(), !h() && (s = !0, r = e.onAppReady(() => {
      const A = s;
      s = !1;
      const D = r;
      r = null, D?.(), A && (h() || console.error(
        `${$e} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`
      ));
    })));
  }
  function w(A) {
    const D = c();
    D.enabled = A, e.writeSettings(D);
  }
  return {
    activate: b,
    disable() {
      d({ removeSettings: !1 }), console.info(`${$e} disabled`);
    },
    destroy() {
      d({ removeSettings: !1 });
    },
    install() {
      u();
    },
    clean() {
      d({ removeSettings: !0 }), console.info(`${$e} settings cleaned`);
    },
    delete() {
      d({ removeSettings: !0 }), console.info(`${$e} deleted`);
    },
    setEnabled: w,
    isActive() {
      return n;
    }
  };
}
function Co() {
  return document.querySelector("#extensions_settings2") ?? document.querySelector("#extensions_settings");
}
function ot(e) {
  return typeof e == "object" && e !== null;
}
function Ao(e) {
  if (ot(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function Oo(e) {
  return !ot(e) || typeof e.getContext != "function" ? null : e;
}
function Po(e) {
  if (!ot(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!ot(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = Ao(e.eventSource), n = ot(e.eventTypes) ? {
    APP_READY: typeof e.eventTypes.APP_READY == "string" ? e.eventTypes.APP_READY : void 0
  } : void 0;
  return {
    extensionSettings: e.extensionSettings,
    saveSettingsDebounced: e.saveSettingsDebounced,
    eventSource: t,
    eventTypes: n
  };
}
function Io() {
  const e = Oo(globalThis.SillyTavern);
  if (!e)
    throw new Error(
      "SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行"
    );
  return Po(e.getContext());
}
function Ro() {
  const e = Io();
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
    findSettingsRoot: Co,
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
const Mo = { class: "tavern-multi-tts-settings" }, Fo = { class: "inline-drawer" }, No = { class: "inline-drawer-toggle inline-drawer-header" }, Do = { class: "inline-drawer-content" }, $o = { class: "tavern-multi-tts-block" }, Lo = { class: "tavern-multi-tts-version" }, Ho = { class: "tavern-multi-tts-block" }, jo = { class: "checkbox_label" }, Vo = ["checked"], Ko = /* @__PURE__ */ ri({
  __name: "settings-panel",
  props: {
    displayName: {},
    version: {},
    enabled: { type: Boolean },
    onEnabledChange: { type: Function }
  },
  setup(e) {
    return (t, n) => (Oi(), Ii("div", Mo, [
      k("div", Fo, [
        k("div", No, [
          k("b", null, kt(e.displayName), 1),
          n[1] || (n[1] = k("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        k("div", Do, [
          k("div", $o, [
            k("small", Lo, "版本 " + kt(e.version), 1)
          ]),
          k("div", Ho, [
            k("label", jo, [
              k("input", {
                type: "checkbox",
                checked: e.enabled,
                onChange: n[0] || (n[0] = (s) => e.onEnabledChange(s.target.checked))
              }, null, 40, Vo),
              n[2] || (n[2] = k("span", null, "启用 TTS 功能", -1))
            ])
          ])
        ])
      ])
    ]));
  }
});
let ze = null, Ze = null;
function Be() {
  return Ze || (Ze = Eo(Ro(), {
    mount(e, t) {
      ze?.unmount(), ze = _o(Ko, {
        displayName: yo,
        version: vo,
        enabled: t.enabled,
        onEnabledChange(n) {
          Ze?.setEnabled(n);
        }
      }), ze.mount(e);
    },
    unmount() {
      ze?.unmount(), ze = null;
    }
  }), Ze);
}
function Ue(e, t) {
  try {
    t();
  } catch (n) {
    const s = n instanceof Error ? n.message : String(n);
    throw console.error(`${$e} ${e} failed: ${s}`), n;
  }
}
function Uo() {
  Ue("onInstall", () => Be().install());
}
function Wo() {
  Ue("onActivate", () => Be().activate());
}
function qo() {
  Ue("onEnable", () => Be().activate());
}
function Yo() {
  Ue("onDisable", () => Be().disable());
}
function Go() {
  Ue("onClean", () => Be().clean());
}
function Xo() {
  Ue("onDelete", () => Be().delete());
}
export {
  Wo as onActivate,
  Go as onClean,
  Xo as onDelete,
  Yo as onDisable,
  qo as onEnable,
  Uo as onInstall
};
//# sourceMappingURL=index.js.map
