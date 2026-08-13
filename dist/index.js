// @__NO_SIDE_EFFECTS__
function Is(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ie = {}, Pt = [], _t = () => {
}, ko = () => !1, Ln = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), On = (e) => e.startsWith("onUpdate:"), Oe = Object.assign, Fo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ar = Object.prototype.hasOwnProperty, ee = (e, t) => ar.call(e, t), F = Array.isArray, Nt = (e) => pn(e) === "[object Map]", Ut = (e) => pn(e) === "[object Set]", Ys = (e) => pn(e) === "[object Date]", Q = (e) => typeof e == "function", ue = (e) => typeof e == "string", Xe = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", Bo = (e) => (re(e) || Q(e)) && Q(e.then) && Q(e.catch), Ho = Object.prototype.toString, pn = (e) => Ho.call(e), cr = (e) => pn(e).slice(8, -1), Ko = (e) => pn(e) === "[object Object]", Rs = (e) => ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qt = /* @__PURE__ */ Is(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), $n = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ur = /-\w/g, Ve = $n(
  (e) => e.replace(ur, (t) => t.slice(1).toUpperCase())
), fr = /\B([A-Z])/g, Et = $n(
  (e) => e.replace(fr, "-$1").toLowerCase()
), zo = $n((e) => e.charAt(0).toUpperCase() + e.slice(1)), Zn = $n(
  (e) => e ? `on${zo(e)}` : ""
), We = (e, t) => !Object.is(e, t), xn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Wo = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Dn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Zs;
const jn = () => Zs || (Zs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ps(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = ue(s) ? hr(s) : Ps(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (ue(e) || re(e))
    return e;
}
const dr = /;(?![^(]*\))/g, pr = /:([^]+)/, mr = /\/\*[^]*?\*\//g;
function hr(e) {
  const t = {};
  return e.replace(mr, "").split(dr).forEach((n) => {
    if (n) {
      const s = n.split(pr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Un(e) {
  let t = "";
  if (ue(e))
    t = e;
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const s = Un(e[n]);
      s && (t += s + " ");
    }
  else if (re(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const gr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vr = /* @__PURE__ */ Is(gr);
function Jo(e) {
  return !!e || e === "";
}
function _r(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = kt(e[s], t[s]);
  return n;
}
function kt(e, t) {
  if (e === t) return !0;
  let n = Ys(e), s = Ys(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Xe(e), s = Xe(t), n || s)
    return e === t;
  if (n = F(e), s = F(t), n || s)
    return n && s ? _r(e, t) : !1;
  if (n = re(e), s = re(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !kt(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ns(e, t) {
  return e.findIndex((n) => kt(n, t));
}
const Xo = (e) => !!(e && e.__v_isRef === !0), z = (e) => ue(e) ? e : e == null ? "" : F(e) || re(e) && (e.toString === Ho || !Q(e.toString)) ? Xo(e) ? z(e.value) : JSON.stringify(e, Yo, 2) : String(e), Yo = (e, t) => Xo(t) ? Yo(e, t.value) : Nt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[Qn(s, i) + " =>"] = o, n),
    {}
  )
} : Ut(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Qn(n))
} : Xe(t) ? Qn(t) : re(t) && !F(t) && !Ko(t) ? String(t) : t, Qn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Xe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let he;
class yr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && he && (he.active ? (this.parent = he, this.index = (he.scopes || (he.scopes = [])).push(
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
        const o = this.scopes.slice();
        for (t = 0, n = o.length; t < n; t++)
          o[t].resume();
      }
      const s = this.effects.slice();
      for (t = 0, n = s.length; t < n; t++)
        s[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = he;
      try {
        return he = this, t();
      } finally {
        he = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = he, he = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (he === this)
        he = this.prevScope;
      else {
        let t = he;
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
        const o = this.scopes.slice();
        for (n = 0, s = o.length; n < s; n++)
          o[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function br() {
  return he;
}
let te;
const qn = /* @__PURE__ */ new WeakSet();
class Zo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, he && (he.active ? he.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qn.has(this) && (qn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || qo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Qs(this), ei(this);
    const t = te, n = Ge;
    te = this, Ge = !0;
    try {
      return this.fn();
    } finally {
      ti(this), te = t, Ge = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ls(t);
      this.deps = this.depsTail = void 0, Qs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ms(this) && this.run();
  }
  get dirty() {
    return ms(this);
  }
}
let Qo = 0, qt, en;
function qo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = en, en = e;
    return;
  }
  e.next = qt, qt = e;
}
function Vs() {
  Qo++;
}
function Gs() {
  if (--Qo > 0)
    return;
  if (en) {
    let t = en;
    for (en = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; qt; ) {
    let t = qt;
    for (qt = void 0; t; ) {
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
function ei(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ti(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Ls(s), xr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function ms(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ni(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ni(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === rn) || (e.globalVersion = rn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ms(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = te, s = Ge;
  te = e, Ge = !0;
  try {
    ei(e);
    const o = e.fn(e._value);
    (t.version === 0 || We(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    te = n, Ge = s, ti(e), e.flags &= -3;
  }
}
function Ls(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Ls(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function xr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ge = !0;
const si = [];
function St() {
  si.push(Ge), Ge = !1;
}
function wt() {
  const e = si.pop();
  Ge = e === void 0 ? !0 : e;
}
function Qs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = te;
    te = void 0;
    try {
      t();
    } finally {
      te = n;
    }
  }
}
let rn = 0;
class Sr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Os {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!te || !Ge || te === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== te)
      n = this.activeLink = new Sr(te, this), te.deps ? (n.prevDep = te.depsTail, te.depsTail.nextDep = n, te.depsTail = n) : te.deps = te.depsTail = n, oi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = te.depsTail, n.nextDep = void 0, te.depsTail.nextDep = n, te.depsTail = n, te.deps === n && (te.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, rn++, this.notify(t);
  }
  notify(t) {
    Vs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Gs();
    }
  }
}
function oi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        oi(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const hs = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ Symbol(
  ""
), gs = /* @__PURE__ */ Symbol(
  ""
), ln = /* @__PURE__ */ Symbol(
  ""
);
function ge(e, t, n) {
  if (Ge && te) {
    let s = hs.get(e);
    s || hs.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Os()), o.map = s, o.key = n), o.track();
  }
}
function st(e, t, n, s, o, i) {
  const r = hs.get(e);
  if (!r) {
    rn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Vs(), t === "clear")
    r.forEach(l);
  else {
    const a = F(e), u = a && Rs(n);
    if (a && n === "length") {
      const f = Number(s);
      r.forEach((m, w) => {
        (w === "length" || w === ln || !Xe(w) && w >= f) && l(m);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), u && l(r.get(ln)), t) {
        case "add":
          a ? u && l(r.get("length")) : (l(r.get(yt)), Nt(e) && l(r.get(gs)));
          break;
        case "delete":
          a || (l(r.get(yt)), Nt(e) && l(r.get(gs)));
          break;
        case "set":
          Nt(e) && l(r.get(yt));
          break;
      }
  }
  Gs();
}
function Mt(e) {
  const t = /* @__PURE__ */ J(e);
  return t === e ? t : (ge(t, "iterate", ln), /* @__PURE__ */ Pe(e) ? t : t.map(Le));
}
function kn(e) {
  return ge(e = /* @__PURE__ */ J(e), "iterate", ln), e;
}
function Ke(e, t) {
  return /* @__PURE__ */ rt(e) ? Ot(/* @__PURE__ */ bt(e) ? Le(t) : t) : Le(t);
}
const wr = {
  __proto__: null,
  [Symbol.iterator]() {
    return es(this, Symbol.iterator, (e) => Ke(this, e));
  },
  concat(...e) {
    return Mt(this).concat(
      ...e.map((t) => F(t) ? Mt(t) : t)
    );
  },
  entries() {
    return es(this, "entries", (e) => (e[1] = Ke(this, e[1]), e));
  },
  every(e, t) {
    return Qe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Qe(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Ke(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Qe(
      this,
      "find",
      e,
      t,
      (n) => Ke(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Qe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Qe(
      this,
      "findLast",
      e,
      t,
      (n) => Ke(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Qe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Qe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ts(this, "includes", e);
  },
  indexOf(...e) {
    return ts(this, "indexOf", e);
  },
  join(e) {
    return Mt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ts(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Qe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Wt(this, "pop");
  },
  push(...e) {
    return Wt(this, "push", e);
  },
  reduce(e, ...t) {
    return qs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return qs(this, "reduceRight", e, t);
  },
  shift() {
    return Wt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Qe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Wt(this, "splice", e);
  },
  toReversed() {
    return Mt(this).toReversed();
  },
  toSorted(e) {
    return Mt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Mt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Wt(this, "unshift", e);
  },
  values() {
    return es(this, "values", (e) => Ke(this, e));
  }
};
function es(e, t, n) {
  const s = kn(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Pe(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const Er = Array.prototype;
function Qe(e, t, n, s, o, i) {
  const r = kn(e), l = r !== e && !/* @__PURE__ */ Pe(e), a = r[t];
  if (a !== Er[t]) {
    const m = a.apply(e, i);
    return l ? Le(m) : m;
  }
  let u = n;
  r !== e && (l ? u = function(m, w) {
    return n.call(this, Ke(e, m), w, e);
  } : n.length > 2 && (u = function(m, w) {
    return n.call(this, m, w, e);
  }));
  const f = a.call(r, u, s);
  return l && o ? o(f) : f;
}
function qs(e, t, n, s) {
  const o = kn(e), i = o !== e && !/* @__PURE__ */ Pe(e);
  let r = n, l = !1;
  o !== e && (i ? (l = s.length === 0, r = function(u, f, m) {
    return l && (l = !1, u = Ke(e, u)), n.call(this, u, Ke(e, f), m, e);
  }) : n.length > 3 && (r = function(u, f, m) {
    return n.call(this, u, f, m, e);
  }));
  const a = o[t](r, ...s);
  return l ? Ke(e, a) : a;
}
function ts(e, t, n) {
  const s = /* @__PURE__ */ J(e);
  ge(s, "iterate", ln);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Us(n[0]) ? (n[0] = /* @__PURE__ */ J(n[0]), s[t](...n)) : o;
}
function Wt(e, t, n = []) {
  St(), Vs();
  const s = (/* @__PURE__ */ J(e))[t].apply(e, n);
  return Gs(), wt(), s;
}
const Tr = /* @__PURE__ */ Is("__proto__,__v_isRef,__isVue"), ii = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xe)
);
function Cr(e) {
  Xe(e) || (e = String(e));
  const t = /* @__PURE__ */ J(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
}
class ri {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (o ? i ? Or : ui : i ? ci : ai).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = F(t);
    if (!o) {
      let a;
      if (r && (a = wr[n]))
        return a;
      if (n === "hasOwnProperty")
        return Cr;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ xe(t) ? t : s
    );
    if ((Xe(n) ? ii.has(n) : Tr(n)) || (o || ge(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ xe(l)) {
      const a = r && Rs(n) ? l : l.value;
      return o && re(a) ? /* @__PURE__ */ _s(a) : a;
    }
    return re(l) ? o ? /* @__PURE__ */ _s(l) : /* @__PURE__ */ Ds(l) : l;
  }
}
class li extends ri {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const r = F(t) && Rs(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ rt(i);
      if (!/* @__PURE__ */ Pe(s) && !/* @__PURE__ */ rt(s) && (i = /* @__PURE__ */ J(i), s = /* @__PURE__ */ J(s)), !r && /* @__PURE__ */ xe(i) && !/* @__PURE__ */ xe(s))
        return u || (i.value = s), !0;
    }
    const l = r ? Number(n) < t.length : ee(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ xe(t) ? t : o
    );
    return t === /* @__PURE__ */ J(o) && a && (l ? We(s, i) && st(t, "set", n, s) : st(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = ee(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && st(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Xe(n) || !ii.has(n)) && ge(t, "has", n), s;
  }
  ownKeys(t) {
    return ge(
      t,
      "iterate",
      F(t) ? "length" : yt
    ), Reflect.ownKeys(t);
  }
}
class Mr extends ri {
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
const Ar = /* @__PURE__ */ new li(), Ir = /* @__PURE__ */ new Mr(), Rr = /* @__PURE__ */ new li(!0);
const vs = (e) => e, vn = (e) => Reflect.getPrototypeOf(e);
function Pr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ J(o), r = Nt(i), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, u = o[e](...s), f = n ? vs : t ? Ot : Le;
    return !t && ge(
      i,
      "iterate",
      a ? gs : yt
    ), Oe(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: m, done: w } = u.next();
          return w ? { value: m, done: w } : {
            value: l ? [f(m[0]), f(m[1])] : f(m),
            done: w
          };
        }
      }
    );
  };
}
function _n(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Nr(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ J(i), l = /* @__PURE__ */ J(o);
      e || (We(o, l) && ge(r, "get", o), ge(r, "get", l));
      const { has: a } = vn(r), u = t ? vs : e ? Ot : Le;
      if (a.call(r, o))
        return u(i.get(o));
      if (a.call(r, l))
        return u(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ge(/* @__PURE__ */ J(o), "iterate", yt), o.size;
    },
    has(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ J(i), l = /* @__PURE__ */ J(o);
      return e || (We(o, l) && ge(r, "has", o), ge(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ J(l), u = t ? vs : e ? Ot : Le;
      return !e && ge(a, "iterate", yt), l.forEach((f, m) => o.call(i, u(f), u(m), r));
    }
  };
  return Oe(
    n,
    e ? {
      add: _n("add"),
      set: _n("set"),
      delete: _n("delete"),
      clear: _n("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ J(this), r = vn(i), l = /* @__PURE__ */ J(o), a = !t && !/* @__PURE__ */ Pe(o) && !/* @__PURE__ */ rt(o) ? l : o;
        return r.has.call(i, a) || We(o, a) && r.has.call(i, o) || We(l, a) && r.has.call(i, l) || (i.add(a), st(i, "add", a, a)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Pe(i) && !/* @__PURE__ */ rt(i) && (i = /* @__PURE__ */ J(i));
        const r = /* @__PURE__ */ J(this), { has: l, get: a } = vn(r);
        let u = l.call(r, o);
        u || (o = /* @__PURE__ */ J(o), u = l.call(r, o));
        const f = a.call(r, o);
        return r.set(o, i), u ? We(i, f) && st(r, "set", o, i) : st(r, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ J(this), { has: r, get: l } = vn(i);
        let a = r.call(i, o);
        a || (o = /* @__PURE__ */ J(o), a = r.call(i, o)), l && l.call(i, o);
        const u = i.delete(o);
        return a && st(i, "delete", o, void 0), u;
      },
      clear() {
        const o = /* @__PURE__ */ J(this), i = o.size !== 0, r = o.clear();
        return i && st(
          o,
          "clear",
          void 0,
          void 0
        ), r;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = Pr(o, e, t);
  }), n;
}
function $s(e, t) {
  const n = Nr(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ee(n, o) && o in s ? n : s,
    o,
    i
  );
}
const Vr = {
  get: /* @__PURE__ */ $s(!1, !1)
}, Gr = {
  get: /* @__PURE__ */ $s(!1, !0)
}, Lr = {
  get: /* @__PURE__ */ $s(!0, !1)
};
const ai = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap();
function $r(e) {
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
function Ds(e) {
  return /* @__PURE__ */ rt(e) ? e : js(
    e,
    !1,
    Ar,
    Vr,
    ai
  );
}
// @__NO_SIDE_EFFECTS__
function Dr(e) {
  return js(
    e,
    !1,
    Rr,
    Gr,
    ci
  );
}
// @__NO_SIDE_EFFECTS__
function _s(e) {
  return js(
    e,
    !0,
    Ir,
    Lr,
    ui
  );
}
function js(e, t, n, s, o) {
  if (!re(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const r = $r(cr(e));
  if (r === 0)
    return e;
  const l = new Proxy(
    e,
    r === 2 ? s : n
  );
  return o.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  return /* @__PURE__ */ rt(e) ? /* @__PURE__ */ bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Us(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function J(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ J(t) : e;
}
function jr(e) {
  return !ee(e, "__v_skip") && Object.isExtensible(e) && Wo(e, "__v_skip", !0), e;
}
const Le = (e) => re(e) ? /* @__PURE__ */ Ds(e) : e, Ot = (e) => re(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return Ur(e, !1);
}
function Ur(e, t) {
  return /* @__PURE__ */ xe(e) ? e : new kr(e, t);
}
class kr {
  constructor(t, n) {
    this.dep = new Os(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ J(t), this._value = n ? t : Le(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Pe(t) || /* @__PURE__ */ rt(t);
    t = s ? t : /* @__PURE__ */ J(t), We(t, n) && (this._rawValue = t, this._value = s ? t : Le(t), this.dep.trigger());
  }
}
function It(e) {
  return /* @__PURE__ */ xe(e) ? e.value : e;
}
const Fr = {
  get: (e, t, n) => t === "__v_raw" ? e : It(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ xe(o) && !/* @__PURE__ */ xe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function fi(e) {
  return /* @__PURE__ */ bt(e) ? e : new Proxy(e, Fr);
}
class Br {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Os(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = rn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    te !== this)
      return qo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ni(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Hr(e, t, n = !1) {
  let s, o;
  return Q(e) ? s = e : (s = e.get, o = e.set), new Br(s, o, n);
}
const yn = {}, En = /* @__PURE__ */ new WeakMap();
let vt;
function Kr(e, t = !1, n = vt) {
  if (n) {
    let s = En.get(n);
    s || En.set(n, s = []), s.push(e);
  }
}
function zr(e, t, n = ie) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: a } = n, u = (C) => o ? C : /* @__PURE__ */ Pe(C) || o === !1 || o === 0 ? ot(C, 1) : ot(C);
  let f, m, w, S, N = !1, A = !1;
  if (/* @__PURE__ */ xe(e) ? (m = () => e.value, N = /* @__PURE__ */ Pe(e)) : /* @__PURE__ */ bt(e) ? (m = () => u(e), N = !0) : F(e) ? (A = !0, N = e.some((C) => /* @__PURE__ */ bt(C) || /* @__PURE__ */ Pe(C)), m = () => e.map((C) => {
    if (/* @__PURE__ */ xe(C))
      return C.value;
    if (/* @__PURE__ */ bt(C))
      return u(C);
    if (Q(C))
      return a ? a(C, 2) : C();
  })) : Q(e) ? t ? m = a ? () => a(e, 2) : e : m = () => {
    if (w) {
      St();
      try {
        w();
      } finally {
        wt();
      }
    }
    const C = vt;
    vt = f;
    try {
      return a ? a(e, 3, [S]) : e(S);
    } finally {
      vt = C;
    }
  } : m = _t, t && o) {
    const C = m, D = o === !0 ? 1 / 0 : o;
    m = () => ot(C(), D);
  }
  const P = br(), G = () => {
    f.stop(), P && P.active && Fo(P.effects, f);
  };
  if (i && t) {
    const C = t;
    t = (...D) => {
      const ne = C(...D);
      return G(), ne;
    };
  }
  let $ = A ? new Array(e.length).fill(yn) : yn;
  const X = (C) => {
    if (!(!(f.flags & 1) || !f.dirty && !C))
      if (t) {
        const D = f.run();
        if (C || o || N || (A ? D.some((ne, B) => We(ne, $[B])) : We(D, $))) {
          w && w();
          const ne = vt;
          vt = f;
          try {
            const B = [
              D,
              // pass undefined as the old value when it's changed for the first time
              $ === yn ? void 0 : A && $[0] === yn ? [] : $,
              S
            ];
            $ = D, a ? a(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            );
          } finally {
            vt = ne;
          }
        }
      } else
        f.run();
  };
  return l && l(X), f = new Zo(m), f.scheduler = r ? () => r(X, !1) : X, S = (C) => Kr(C, !1, f), w = f.onStop = () => {
    const C = En.get(f);
    if (C) {
      if (a)
        a(C, 4);
      else
        for (const D of C) D();
      En.delete(f);
    }
  }, t ? s ? X(!0) : $ = f.run() : r ? r(X.bind(null, !0), !0) : f.run(), G.pause = f.pause.bind(f), G.resume = f.resume.bind(f), G.stop = G, G;
}
function ot(e, t = 1 / 0, n) {
  if (t <= 0 || !re(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ xe(e))
    ot(e.value, t, n);
  else if (F(e))
    for (let s = 0; s < e.length; s++)
      ot(e[s], t, n);
  else if (Ut(e) || Nt(e))
    e.forEach((s) => {
      ot(s, t, n);
    });
  else if (Ko(e)) {
    for (const s in e)
      ot(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ot(e[s], t, n);
  }
  return e;
}
function mn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Fn(o, t, n);
  }
}
function lt(e, t, n, s) {
  if (Q(e)) {
    const o = mn(e, t, n, s);
    return o && Bo(o) && o.catch((i) => {
      Fn(i, t, n);
    }), o;
  }
  if (F(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(lt(e[i], t, n, s));
    return o;
  }
}
function Fn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || ie;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let m = 0; m < f.length; m++)
          if (f[m](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      St(), mn(i, null, 10, [
        e,
        a,
        u
      ]), wt();
      return;
    }
  }
  Wr(e, n, o, s, r);
}
function Wr(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const ye = [];
let He = -1;
const Vt = [];
let ut = null, Rt = 0;
const di = /* @__PURE__ */ Promise.resolve();
let Tn = null;
function pi(e) {
  const t = Tn || di;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Jr(e) {
  let t = He + 1, n = ye.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = ye[s], i = an(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ks(e) {
  if (!(e.flags & 1)) {
    const t = an(e), n = ye[ye.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= an(n) ? ye.push(e) : ye.splice(Jr(t), 0, e), e.flags |= 1, mi();
  }
}
function mi() {
  Tn || (Tn = di.then(gi));
}
function Xr(e) {
  if (!F(e))
    ut && e.id === -1 ? ut.splice(Rt + 1, 0, e) : e.flags & 1 || (Vt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Vt.push(e[t]);
  mi();
}
function eo(e, t, n = He + 1) {
  for (; n < ye.length; n++) {
    const s = ye[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ye.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function hi(e) {
  if (Vt.length) {
    const t = [...new Set(Vt)].sort(
      (n, s) => an(n) - an(s)
    );
    if (Vt.length = 0, ut) {
      for (let n = 0; n < t.length; n++)
        ut.push(t[n]);
      return;
    }
    for (ut = t, Rt = 0; Rt < ut.length; Rt++) {
      const n = ut[Rt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ut = null, Rt = 0;
  }
}
const an = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function gi(e) {
  try {
    for (He = 0; He < ye.length; He++) {
      const t = ye[He];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), mn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; He < ye.length; He++) {
      const t = ye[He];
      t && (t.flags &= -2);
    }
    He = -1, ye.length = 0, hi(), Tn = null, (ye.length || Vt.length) && gi();
  }
}
let Re = null, vi = null;
function Cn(e) {
  const t = Re;
  return Re = e, vi = e && e.type.__scopeId || null, t;
}
function Yr(e, t = Re, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && lo(-1);
    const i = Cn(t), r = xt.length;
    let l;
    try {
      l = e(...o);
    } finally {
      for (let a = xt.length; a > r; a--) Vi();
      Cn(i), s._d && lo(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function H(e, t) {
  if (Re === null)
    return e;
  const n = zn(Re), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, l, a = ie] = t[o];
    i && (Q(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ot(r), s.push({
      dir: i,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function ht(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let a = l.dir[s];
    a && (St(), lt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), wt());
  }
}
function Zr(e, t, n = !1) {
  const s = Ll();
  if (s || Gt) {
    let o = Gt ? Gt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Q(t) ? t.call(s && s.proxy) : t;
  }
}
const Qr = /* @__PURE__ */ Symbol.for("v-scx"), qr = () => Zr(Qr);
function el(e, t, n) {
  return tl(e, t, n);
}
function tl(e, t, n = ie) {
  const { immediate: s, deep: o, flush: i, once: r } = n, l = Oe({}, n), a = t && s || !t && i !== "post";
  let u;
  if (Rn) {
    if (i === "sync") {
      const S = qr();
      u = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!a) {
      const S = () => {
      };
      return S.stop = _t, S.resume = _t, S.pause = _t, S;
    }
  }
  const f = Dt;
  l.call = (S, N, A) => lt(S, f, N, A);
  let m = !1;
  i === "post" ? l.scheduler = (S) => {
    Ee(S, f && f.suspense);
  } : i !== "sync" && (m = !0, l.scheduler = (S, N) => {
    N ? S() : ks(S);
  }), l.augmentJob = (S) => {
    t && (S.flags |= 4), m && (S.flags |= 2, f && (S.id = f.uid, S.i = f));
  };
  const w = zr(e, t, l);
  return Rn && (u ? u.push(w) : a && w()), w;
}
const nl = /* @__PURE__ */ Symbol("_vte"), Bn = (e) => e.__isTeleport, ns = /* @__PURE__ */ Symbol("_leaveCb");
function sl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== at) {
        t = n;
        break;
      }
  }
  return t;
}
function _i(e) {
  if (!yi(e))
    return Bn(e.type) && e.children ? sl(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Q(n.default))
      return n.default();
  }
}
function Fs(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Fs(
      Bn(n.type) && _i(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function ol(e, t) {
  return Q(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Oe({ name: e.name }, t, { setup: e })
  ) : e;
}
function il(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function to(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Mn = /* @__PURE__ */ new WeakMap();
function tn(e, t, n, s, o = !1) {
  if (F(e)) {
    e.forEach(
      (A, P) => tn(
        A,
        t && (F(t) ? t[P] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (nn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && tn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? zn(s.component) : s.el, r = o ? null : i, { i: l, r: a } = e, u = t && t.r, f = l.refs === ie ? l.refs = {} : l.refs, m = l.setupState, w = /* @__PURE__ */ J(m), S = m === ie ? ko : (A) => to(f, A) ? !1 : ee(w, A), N = (A, P) => !(P && to(f, P));
  if (u != null && u !== a) {
    if (no(t), ue(u))
      f[u] = null, S(u) && (m[u] = null);
    else if (/* @__PURE__ */ xe(u)) {
      const A = t;
      N(u, A.k) && (u.value = null), A.k && (f[A.k] = null);
    }
  }
  if (Q(a))
    mn(a, l, 12, [r, f]);
  else {
    const A = ue(a), P = /* @__PURE__ */ xe(a);
    if (A || P) {
      const G = () => {
        if (e.f) {
          const $ = A ? S(a) ? m[a] : f[a] : N() || !e.k ? a.value : f[e.k];
          if (o)
            F($) && Fo($, i);
          else if (F($))
            $.includes(i) || $.push(i);
          else if (A)
            f[a] = [i], S(a) && (m[a] = f[a]);
          else {
            const X = [i];
            N(a, e.k) && (a.value = X), e.k && (f[e.k] = X);
          }
        } else A ? (f[a] = r, S(a) && (m[a] = r)) : P && (N(a, e.k) && (a.value = r), e.k && (f[e.k] = r));
      };
      if (r) {
        const $ = () => {
          G(), Mn.delete(e);
        };
        $.id = -1, Mn.set(e, $), Ee($, n);
      } else
        no(e), G();
    }
  }
}
function no(e) {
  const t = Mn.get(e);
  t && (t.flags |= 8, Mn.delete(e));
}
jn().requestIdleCallback;
jn().cancelIdleCallback;
const nn = (e) => !!e.type.__asyncLoader, yi = (e) => e.type.__isKeepAlive, rl = /* @__PURE__ */ Symbol.for("v-ndc");
function _e(e, t, n, s) {
  let o;
  const i = n, r = F(e);
  if (r || ue(e)) {
    const l = r && /* @__PURE__ */ bt(e);
    let a = !1, u = !1;
    l && (a = !/* @__PURE__ */ Pe(e), u = /* @__PURE__ */ rt(e), e = kn(e)), o = new Array(e.length);
    for (let f = 0, m = e.length; f < m; f++)
      o[f] = t(
        a ? u ? Ot(Le(e[f])) : Le(e[f]) : e[f],
        f,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, i);
  } else if (re(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, i)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const f = l[a];
        o[a] = t(e[f], f, a, i);
      }
    }
  else
    o = [];
  return o;
}
const ys = (e) => e ? Di(e) ? zn(e) : ys(e.parent) : null, sn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Oe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ys(e.parent),
    $root: (e) => ys(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      ks(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = pi.bind(e.proxy)),
    $watch: (e) => _t
  })
), ss = (e, t) => e !== ie && !e.__isScriptSetup && ee(e, t), ll = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const w = r[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (ss(s, t))
          return r[t] = 1, s[t];
        if (ee(i, t))
          return r[t] = 3, i[t];
        if (n !== ie && ee(n, t))
          return r[t] = 4, n[t];
        r[t] = 0;
      }
    }
    const u = sn[t];
    let f, m;
    if (u)
      return t === "$attrs" && ge(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== ie && ee(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      m = a.config.globalProperties, ee(m, t)
    )
      return m[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return ss(o, t) ? (o[t] = n, !0) : ee(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: r }
  }, l) {
    let a;
    return !!(n[l] || ss(t, l) || ee(i, l) || ee(s, l) || ee(sn, l) || ee(o.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ee(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function bi() {
  return {
    app: null,
    config: {
      isNativeTag: ko,
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
let al = 0;
function cl(e, t) {
  return function(s, o = null) {
    Q(s) || (s = Oe({}, s)), o != null && !re(o) && (o = null);
    const i = bi(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = i.app = {
      _uid: al++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: kl,
      get config() {
        return i.config;
      },
      set config(f) {
      },
      use(f, ...m) {
        return r.has(f) || (f && Q(f.install) ? (r.add(f), f.install(u, ...m)) : Q(f) && (r.add(f), f(u, ...m))), u;
      },
      mixin(f) {
        return u;
      },
      component(f, m) {
        return m ? (i.components[f] = m, u) : i.components[f];
      },
      directive(f, m) {
        return m ? (i.directives[f] = m, u) : i.directives[f];
      },
      mount(f, m, w) {
        if (!a) {
          const S = u._ceVNode || it(s, o);
          return S.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(S, f, w), a = !0, u._container = f, f.__vue_app__ = u, zn(S.component);
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        a && (lt(
          l,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(f, m) {
        return i.provides[f] = m, u;
      },
      runWithContext(f) {
        const m = Gt;
        Gt = u;
        try {
          return f();
        } finally {
          Gt = m;
        }
      }
    };
    return u;
  };
}
let Gt = null;
const ul = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ve(t)}Modifiers`] || e[`${Et(t)}Modifiers`];
function fl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ie;
  let o = n;
  const i = t.startsWith("update:"), r = i && ul(s, t.slice(7));
  r && (r.trim && (o = n.map((f) => ue(f) ? f.trim() : f)), r.number && (o = n.map(Dn)));
  let l, a = s[l = Zn(t)] || // also try camelCase event handler (#2249)
  s[l = Zn(Ve(t))];
  !a && i && (a = s[l = Zn(Et(t))]), a && lt(
    a,
    e,
    6,
    o
  );
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, lt(
      u,
      e,
      6,
      o
    );
  }
}
function dl(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {};
  return i ? (F(i) ? i.forEach((l) => r[l] = null) : Oe(r, i), re(e) && s.set(e, r), r) : (re(e) && s.set(e, null), null);
}
function Hn(e, t) {
  return !e || !Ln(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ee(e, t[0].toLowerCase() + t.slice(1)) || ee(e, Et(t)) || ee(e, t));
}
function so(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [i],
    slots: r,
    attrs: l,
    emit: a,
    render: u,
    renderCache: f,
    props: m,
    data: w,
    setupState: S,
    ctx: N,
    inheritAttrs: A
  } = e, P = Cn(e);
  let G, $;
  try {
    if (n.shapeFlag & 4) {
      const C = o || s, D = C;
      G = ze(
        u.call(
          D,
          C,
          f,
          m,
          S,
          w,
          N
        )
      ), $ = l;
    } else {
      const C = t;
      G = ze(
        C.length > 1 ? C(
          m,
          { attrs: l, slots: r, emit: a }
        ) : C(
          m,
          null
        )
      ), $ = t.props ? l : pl(l);
    }
  } catch (C) {
    xt.length = 0, Fn(C, e, 1), G = it(at);
  }
  let X = G;
  if ($ && A !== !1) {
    const C = Object.keys($), { shapeFlag: D } = X;
    C.length && D & 7 && (i && C.some(On) && ($ = ml(
      $,
      i
    )), X = $t(X, $, !1, !0));
  }
  if (n.dirs && (X = $t(X, null, !1, !0), X.dirs = X.dirs ? X.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const C = Bn(X.type) && _i(X) || X;
    Fs(C, n.transition);
  }
  return G = X, Cn(P), G;
}
const pl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ln(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ml = (e, t) => {
  const n = {};
  for (const s in e)
    (!On(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function hl(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: l, patchFlag: a } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? oo(s, r, u) : !!r;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let m = 0; m < f.length; m++) {
        const w = f[m];
        if (xi(r, s, w) && !Hn(u, w))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? oo(s, r, u) : !0 : !!r;
  return !1;
}
function oo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (xi(t, e, i) && !Hn(n, i))
      return !0;
  }
  return !1;
}
function xi(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && re(s) && re(o) ? !kt(s, o) : s !== o;
}
function gl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = s, e = o), o === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Si = {}, wi = () => Object.create(Si), Ei = (e) => Object.getPrototypeOf(e) === Si;
function vl(e, t, n, s = !1) {
  const o = {}, i = wi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ti(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ Dr(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function _l(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ J(o), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const f = e.vnode.dynamicProps;
      for (let m = 0; m < f.length; m++) {
        let w = f[m];
        if (Hn(e.emitsOptions, w))
          continue;
        const S = t[w];
        if (a)
          if (ee(i, w))
            S !== i[w] && (i[w] = S, u = !0);
          else {
            const N = Ve(w);
            o[N] = bs(
              a,
              l,
              N,
              S,
              e,
              !1
            );
          }
        else
          S !== i[w] && (i[w] = S, u = !0);
      }
    }
  } else {
    Ti(e, t, o, i) && (u = !0);
    let f;
    for (const m in l)
      (!t || // for camelCase
      !ee(t, m) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Et(m)) === m || !ee(t, f))) && (a ? n && // for camelCase
      (n[m] !== void 0 || // for kebab-case
      n[f] !== void 0) && (o[m] = bs(
        a,
        l,
        m,
        void 0,
        e,
        !0
      )) : delete o[m]);
    if (i !== l)
      for (const m in i)
        (!t || !ee(t, m)) && (delete i[m], u = !0);
  }
  u && st(e.attrs, "set", "");
}
function Ti(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (Qt(a))
        continue;
      const u = t[a];
      let f;
      o && ee(o, f = Ve(a)) ? !i || !i.includes(f) ? n[f] = u : (l || (l = {}))[f] = u : Hn(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, r = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ J(n), u = l || ie;
    for (let f = 0; f < i.length; f++) {
      const m = i[f];
      n[m] = bs(
        o,
        a,
        m,
        u[m],
        e,
        !ee(u, m)
      );
    }
  }
  return r;
}
function bs(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const l = ee(r, "default");
    if (l && s === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && Q(a)) {
        const { propsDefaults: u } = o;
        if (n in u)
          s = u[n];
        else {
          const f = $i(o);
          s = u[n] = a.call(
            null,
            t
          ), f();
        }
      } else
        s = a;
      o.ce && o.ce._setProp(n, s);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Et(n)) && (s = !0));
  }
  return s;
}
function yl(e, t, n = !1) {
  const s = t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  if (!i)
    return re(e) && s.set(e, Pt), Pt;
  if (F(i))
    for (let u = 0; u < i.length; u++) {
      const f = Ve(i[u]);
      io(f) && (r[f] = ie);
    }
  else if (i)
    for (const u in i) {
      const f = Ve(u);
      if (io(f)) {
        const m = i[u], w = r[f] = F(m) || Q(m) ? { type: m } : Oe({}, m), S = w.type;
        let N = !1, A = !0;
        if (F(S))
          for (let P = 0; P < S.length; ++P) {
            const G = S[P], $ = Q(G) && G.name;
            if ($ === "Boolean") {
              N = !0;
              break;
            } else $ === "String" && (A = !1);
          }
        else
          N = Q(S) && S.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = N, w[
          1
          /* shouldCastTrue */
        ] = A, (N || ee(w, "default")) && l.push(f);
      }
    }
  const a = [r, l];
  return re(e) && s.set(e, a), a;
}
function io(e) {
  return e[0] !== "$" && !Qt(e);
}
const Bs = (e) => e === "_" || e === "_ctx" || e === "$stable", Hs = (e) => F(e) ? e.map(ze) : [ze(e)], bl = (e, t, n) => {
  if (t._n)
    return t;
  const s = Yr((...o) => Hs(t(...o)), n);
  return s._c = !1, s;
}, Ci = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Bs(o)) continue;
    const i = e[o];
    if (Q(i))
      t[o] = bl(o, i, s);
    else if (i != null) {
      const r = Hs(i);
      t[o] = () => r;
    }
  }
}, Mi = (e, t) => {
  const n = Hs(t);
  e.slots.default = () => n;
}, Ai = (e, t, n) => {
  for (const s in t)
    (n || !Bs(s)) && (e[s] = t[s]);
}, xl = (e, t, n) => {
  const s = e.slots = wi();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Ai(s, t, n), n && Wo(s, "_", o, !0)) : Ci(t, s);
  } else t && Mi(e, t);
}, Sl = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = ie;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Ai(o, t, n) : (i = !t.$stable, Ci(t, o)), r = t;
  } else t && (Mi(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !Bs(l) && r[l] == null && delete o[l];
}, Ee = Ml;
function wl(e) {
  return El(e);
}
function El(e, t) {
  const n = jn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: o,
    patchProp: i,
    createElement: r,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: f,
    parentNode: m,
    nextSibling: w,
    setScopeId: S = _t,
    insertStaticContent: N
  } = e, A = (c, d, v, x = null, b = null, _ = null, I = void 0, T = null, E = !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !Jt(c, d) && (x = p(c), De(c, b, _, !0), c = null), d.patchFlag === -2 && (E = !1, d.dynamicChildren = null);
    const { type: y, ref: L, shapeFlag: R } = d;
    switch (y) {
      case Kn:
        P(c, d, v, x);
        break;
      case at:
        G(c, d, v, x);
        break;
      case is:
        c == null && $(d, v, x, I);
        break;
      case Z:
        Se(
          c,
          d,
          v,
          x,
          b,
          _,
          I,
          T,
          E
        );
        break;
      default:
        R & 1 ? D(
          c,
          d,
          v,
          x,
          b,
          _,
          I,
          T,
          E
        ) : R & 6 ? mt(
          c,
          d,
          v,
          x,
          b,
          _,
          I,
          T,
          E
        ) : (R & 64 || R & 128) && y.process(
          c,
          d,
          v,
          x,
          b,
          _,
          I,
          T,
          E,
          U
        );
    }
    L != null && b ? tn(L, c && c.ref, _, d || c, !d) : L == null && c && c.ref != null && tn(c.ref, null, _, c, !0);
  }, P = (c, d, v, x) => {
    if (c == null)
      s(
        d.el = l(d.children),
        v,
        x
      );
    else {
      const b = d.el = c.el;
      d.children !== c.children && u(b, d.children);
    }
  }, G = (c, d, v, x) => {
    c == null ? s(
      d.el = a(d.children || ""),
      v,
      x
    ) : d.el = c.el;
  }, $ = (c, d, v, x) => {
    [c.el, c.anchor] = N(
      c.children,
      d,
      v,
      x,
      c.el,
      c.anchor
    );
  }, X = ({ el: c, anchor: d }, v, x) => {
    let b;
    for (; c && c !== d; )
      b = w(c), s(c, v, x), c = b;
    s(d, v, x);
  }, C = ({ el: c, anchor: d }) => {
    let v;
    for (; c && c !== d; )
      v = w(c), o(c), c = v;
    o(d);
  }, D = (c, d, v, x, b, _, I, T, E) => {
    if (d.type === "svg" ? I = "svg" : d.type === "math" && (I = "mathml"), c == null)
      ne(
        d,
        v,
        x,
        b,
        _,
        I,
        T,
        E
      );
    else {
      const y = c.el && c.el._isVueCE ? c.el : null;
      try {
        y && y._beginPatch(), ct(
          c,
          d,
          b,
          _,
          I,
          T,
          E
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, ne = (c, d, v, x, b, _, I, T) => {
    let E, y;
    const { props: L, shapeFlag: R, transition: V, dirs: O } = c;
    if (E = c.el = r(
      c.type,
      _,
      L && L.is,
      L
    ), R & 8 ? f(E, c.children) : R & 16 && se(
      c.children,
      E,
      null,
      x,
      b,
      os(c, _),
      I,
      T
    ), O && ht(c, null, x, "created"), B(E, c, c.scopeId, I, x), L) {
      for (const q in L)
        q !== "value" && !Qt(q) && i(E, q, null, L[q], _, x);
      "value" in L && i(E, "value", null, L.value, _), (y = L.onVnodeBeforeMount) && Fe(y, x, c);
    }
    O && ht(c, null, x, "beforeMount");
    const K = Tl(b, V);
    K && V.beforeEnter(E), s(E, d, v), ((y = L && L.onVnodeMounted) || K || O) && Ee(() => {
      y && Fe(y, x, c), K && V.enter(E), O && ht(c, null, x, "mounted");
    }, b);
  }, B = (c, d, v, x, b) => {
    if (v && S(c, v), x)
      for (let _ = 0; _ < x.length; _++)
        S(c, x[_]);
    if (b) {
      let _ = b.subTree;
      if (d === _ || Ni(_.type) && (_.ssContent === d || _.ssFallback === d)) {
        const I = b.vnode;
        B(
          c,
          I,
          I.scopeId,
          I.slotScopeIds,
          b.parent
        );
      }
    }
  }, se = (c, d, v, x, b, _, I, T, E = 0) => {
    for (let y = E; y < c.length; y++) {
      const L = c[y] = T ? nt(c[y]) : ze(c[y]);
      A(
        null,
        L,
        d,
        v,
        x,
        b,
        _,
        I,
        T
      );
    }
  }, ct = (c, d, v, x, b, _, I) => {
    const T = d.el = c.el;
    let { patchFlag: E, dynamicChildren: y, dirs: L } = d;
    E |= c.patchFlag & 16;
    const R = c.props || ie, V = d.props || ie;
    let O;
    if (v && gt(v, !1), (O = V.onVnodeBeforeUpdate) && Fe(O, v, d, c), L && ht(d, c, v, "beforeUpdate"), v && gt(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!c.dynamicChildren || c.dynamicChildren.length !== y.length) && (E = 0, I = !1, y = null), (R.innerHTML && V.innerHTML == null || R.textContent && V.textContent == null) && f(T, ""), y ? ve(
      c.dynamicChildren,
      y,
      T,
      v,
      x,
      os(d, b),
      _
    ) : I || Ye(
      c,
      d,
      T,
      null,
      v,
      x,
      os(d, b),
      _,
      !1
    ), E > 0) {
      if (E & 16)
        pe(T, R, V, v, b);
      else if (E & 2 && R.class !== V.class && i(T, "class", null, V.class, b), E & 4 && i(T, "style", R.style, V.style, b), E & 8) {
        const K = d.dynamicProps;
        for (let q = 0; q < K.length; q++) {
          const Y = K[q], ce = R[Y], me = V[Y];
          (me !== ce || Y === "value") && i(T, Y, ce, me, b, v);
        }
      }
      E & 1 && c.children !== d.children && f(T, d.children);
    } else !I && y == null && pe(T, R, V, v, b);
    ((O = V.onVnodeUpdated) || L) && Ee(() => {
      O && Fe(O, v, d, c), L && ht(d, c, v, "updated");
    }, x);
  }, ve = (c, d, v, x, b, _, I) => {
    for (let T = 0; T < d.length; T++) {
      const E = c[T], y = d[T], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === Z || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Jt(E, y) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 198) ? m(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      A(
        E,
        y,
        L,
        null,
        x,
        b,
        _,
        I,
        !0
      );
    }
  }, pe = (c, d, v, x, b) => {
    if (d !== v) {
      if (d !== ie)
        for (const _ in d)
          !Qt(_) && !(_ in v) && i(
            c,
            _,
            d[_],
            null,
            b,
            x
          );
      for (const _ in v) {
        if (Qt(_)) continue;
        const I = v[_], T = d[_];
        I !== T && _ !== "value" && i(c, _, T, I, b, x);
      }
      "value" in v && i(c, "value", d.value, v.value, b);
    }
  }, Se = (c, d, v, x, b, _, I, T, E) => {
    const y = d.el = c ? c.el : l(""), L = d.anchor = c ? c.anchor : l("");
    let { patchFlag: R, dynamicChildren: V, slotScopeIds: O } = d;
    O && (T = T ? T.concat(O) : O), c == null ? (s(y, v, x), s(L, v, x), se(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      v,
      L,
      b,
      _,
      I,
      T,
      E
    )) : R > 0 && R & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === V.length ? (ve(
      c.dynamicChildren,
      V,
      v,
      b,
      _,
      I,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || b && d === b.subTree) && Ii(
      c,
      d,
      !0
      /* shallow */
    )) : Ye(
      c,
      d,
      v,
      L,
      b,
      _,
      I,
      T,
      E
    );
  }, mt = (c, d, v, x, b, _, I, T, E) => {
    d.slotScopeIds = T, c == null ? d.shapeFlag & 512 ? b.ctx.activate(
      d,
      v,
      x,
      I,
      E
    ) : Ae(
      d,
      v,
      x,
      b,
      _,
      I,
      E
    ) : Tt(c, d, E);
  }, Ae = (c, d, v, x, b, _, I) => {
    const T = c.component = Gl(
      c,
      x,
      b
    );
    if (yi(c) && (T.ctx.renderer = U), Ol(T, !1, I), T.asyncDep) {
      if (b && b.registerDep(T, le, I), !c.el) {
        const E = T.subTree = it(at);
        G(null, E, d, v), c.placeholder = E.el;
      }
    } else
      le(
        T,
        c,
        d,
        v,
        b,
        _,
        I
      );
  }, Tt = (c, d, v) => {
    const x = d.component = c.component;
    if (hl(c, d, v))
      if (x.asyncDep && !x.asyncResolved) {
        $e(x, d, v);
        return;
      } else
        x.next = d, x.update();
    else
      d.el = c.el, x.vnode = d;
  }, le = (c, d, v, x, b, _, I) => {
    const T = () => {
      if (c.isMounted) {
        let { next: R, bu: V, u: O, parent: K, vnode: q } = c;
        {
          const Ue = Ri(c);
          if (Ue) {
            R && (R.el = q.el, $e(c, R, I)), Ue.asyncDep.then(() => {
              Ee(() => {
                c.isUnmounted || y();
              }, b);
            });
            return;
          }
        }
        let Y = R, ce;
        gt(c, !1), R ? (R.el = q.el, $e(c, R, I)) : R = q, V && xn(V), (ce = R.props && R.props.onVnodeBeforeUpdate) && Fe(ce, K, R, q), gt(c, !0);
        const me = so(c), je = c.subTree;
        c.subTree = me, A(
          je,
          me,
          // parent may have changed if it's in a teleport
          m(je.el),
          // anchor may have changed if it's in a fragment
          p(je),
          c,
          b,
          _
        ), R.el = me.el, Y === null && gl(c, me.el), O && Ee(O, b), (ce = R.props && R.props.onVnodeUpdated) && Ee(
          () => Fe(ce, K, R, q),
          b
        );
      } else {
        let R;
        const { el: V, props: O } = d, { bm: K, m: q, parent: Y, root: ce, type: me } = c, je = nn(d);
        gt(c, !1), K && xn(K), !je && (R = O && O.onVnodeBeforeMount) && Fe(R, Y, d), gt(c, !0);
        {
          ce.ce && ce.ce._hasShadowRoot() && ce.ce._injectChildStyle(
            me,
            c.parent ? c.parent.type : void 0
          );
          const Ue = c.subTree = so(c);
          A(
            null,
            Ue,
            v,
            x,
            c,
            b,
            _
          ), d.el = Ue.el;
        }
        if (q && Ee(q, b), !je && (R = O && O.onVnodeMounted)) {
          const Ue = d;
          Ee(
            () => Fe(R, Y, Ue),
            b
          );
        }
        (d.shapeFlag & 256 || Y && nn(Y.vnode) && Y.vnode.shapeFlag & 256) && c.a && Ee(c.a, b), c.isMounted = !0, d = v = x = null;
      }
    };
    c.scope.on();
    const E = c.effect = new Zo(T);
    c.scope.off();
    const y = c.update = E.run.bind(E), L = c.job = E.runIfDirty.bind(E);
    L.i = c, L.id = c.uid, E.scheduler = () => ks(L), gt(c, !0), y();
  }, $e = (c, d, v) => {
    d.component = c;
    const x = c.vnode.props;
    c.vnode = d, c.next = null, _l(c, d.props, x, v), Sl(c, d.children, v), St(), eo(c), wt();
  }, Ye = (c, d, v, x, b, _, I, T, E = !1) => {
    const y = c && c.children, L = c ? c.shapeFlag : 0, R = d.children, { patchFlag: V, shapeFlag: O } = d;
    if (V > 0) {
      if (V & 128) {
        Kt(
          y,
          R,
          v,
          x,
          b,
          _,
          I,
          T,
          E
        );
        return;
      } else if (V & 256) {
        Ze(
          y,
          R,
          v,
          x,
          b,
          _,
          I,
          T,
          E
        );
        return;
      }
    }
    O & 8 ? (L & 16 && M(y, b, _), R !== y && f(v, R)) : L & 16 ? O & 16 ? Kt(
      y,
      R,
      v,
      x,
      b,
      _,
      I,
      T,
      E
    ) : M(y, b, _, !0) : (L & 8 && f(v, ""), O & 16 && se(
      R,
      v,
      x,
      b,
      _,
      I,
      T,
      E
    ));
  }, Ze = (c, d, v, x, b, _, I, T, E) => {
    c = c || Pt, d = d || Pt;
    const y = c.length, L = d.length, R = Math.min(y, L);
    let V;
    for (V = 0; V < R; V++) {
      const O = d[V] = E ? nt(d[V]) : ze(d[V]);
      A(
        c[V],
        O,
        v,
        null,
        b,
        _,
        I,
        T,
        E
      );
    }
    y > L ? M(
      c,
      b,
      _,
      !0,
      !1,
      R
    ) : se(
      d,
      v,
      x,
      b,
      _,
      I,
      T,
      E,
      R
    );
  }, Kt = (c, d, v, x, b, _, I, T, E) => {
    let y = 0;
    const L = d.length;
    let R = c.length - 1, V = L - 1;
    for (; y <= R && y <= V; ) {
      const O = c[y], K = d[y] = E ? nt(d[y]) : ze(d[y]);
      if (Jt(O, K))
        A(
          O,
          K,
          v,
          null,
          b,
          _,
          I,
          T,
          E
        );
      else
        break;
      y++;
    }
    for (; y <= R && y <= V; ) {
      const O = c[R], K = d[V] = E ? nt(d[V]) : ze(d[V]);
      if (Jt(O, K))
        A(
          O,
          K,
          v,
          null,
          b,
          _,
          I,
          T,
          E
        );
      else
        break;
      R--, V--;
    }
    if (y > R) {
      if (y <= V) {
        const O = V + 1, K = O < L ? d[O].el : x;
        for (; y <= V; )
          A(
            null,
            d[y] = E ? nt(d[y]) : ze(d[y]),
            v,
            K,
            b,
            _,
            I,
            T,
            E
          ), y++;
      }
    } else if (y > V)
      for (; y <= R; )
        De(c[y], b, _, !0), y++;
    else {
      const O = y, K = y, q = /* @__PURE__ */ new Map();
      for (y = K; y <= V; y++) {
        const Ce = d[y] = E ? nt(d[y]) : ze(d[y]);
        Ce.key != null && q.set(Ce.key, y);
      }
      let Y, ce = 0;
      const me = V - K + 1;
      let je = !1, Ue = 0;
      const zt = new Array(me);
      for (y = 0; y < me; y++) zt[y] = 0;
      for (y = O; y <= R; y++) {
        const Ce = c[y];
        if (ce >= me) {
          De(Ce, b, _, !0);
          continue;
        }
        let ke;
        if (Ce.key != null)
          ke = q.get(Ce.key);
        else
          for (Y = K; Y <= V; Y++)
            if (zt[Y - K] === 0 && Jt(Ce, d[Y])) {
              ke = Y;
              break;
            }
        ke === void 0 ? De(Ce, b, _, !0) : (zt[ke - K] = y + 1, ke >= Ue ? Ue = ke : je = !0, A(
          Ce,
          d[ke],
          v,
          null,
          b,
          _,
          I,
          T,
          E
        ), ce++);
      }
      const Ws = je ? Cl(zt) : Pt;
      for (Y = Ws.length - 1, y = me - 1; y >= 0; y--) {
        const Ce = K + y, ke = d[Ce], Js = d[Ce + 1], Xs = Ce + 1 < L ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Js.el || Pi(Js)
        ) : x;
        zt[y] === 0 ? A(
          null,
          ke,
          v,
          Xs,
          b,
          _,
          I,
          T,
          E
        ) : je && (Y < 0 || y !== Ws[Y] ? Ct(ke, v, Xs, 2) : Y--);
      }
    }
  }, Ct = (c, d, v, x, b = null) => {
    const { el: _, type: I, transition: T, children: E, shapeFlag: y } = c;
    if (y & 6) {
      Ct(c.component.subTree, d, v, x);
      return;
    }
    if (y & 128) {
      c.suspense.move(d, v, x);
      return;
    }
    if (y & 64) {
      I.move(c, d, v, U);
      return;
    }
    if (I === Z) {
      s(_, d, v);
      for (let R = 0; R < E.length; R++)
        Ct(E[R], d, v, x);
      s(c.anchor, d, v);
      return;
    }
    if (I === is) {
      X(c, d, v);
      return;
    }
    if (x !== 2 && y & 1 && T)
      if (x === 0)
        T.persisted && !_[ns] ? s(_, d, v) : (T.beforeEnter(_), s(_, d, v), Ee(() => T.enter(_), b));
      else {
        const { leave: R, delayLeave: V, afterLeave: O } = T, K = () => {
          c.ctx.isUnmounted ? o(_) : s(_, d, v);
        }, q = () => {
          const Y = _._isLeaving || !!_[ns];
          _._isLeaving && _[ns](
            !0
            /* cancelled */
          ), T.persisted && !Y ? K() : R(_, () => {
            K(), O && O();
          });
        };
        V ? V(_, K, q) : q();
      }
    else
      s(_, d, v);
  }, De = (c, d, v, x = !1, b = !1) => {
    const {
      type: _,
      props: I,
      ref: T,
      children: E,
      dynamicChildren: y,
      shapeFlag: L,
      patchFlag: R,
      dirs: V,
      cacheIndex: O,
      memo: K
    } = c;
    if (R === -2 && (b = !1), T != null && (St(), tn(T, null, v, c, !0), wt()), O != null && (d.renderCache[O] = void 0), L & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const q = L & 1 && V, Y = !nn(c);
    let ce;
    if (Y && (ce = I && I.onVnodeBeforeUnmount) && Fe(ce, d, c), L & 6)
      Yn(c.component, v, x);
    else {
      if (L & 128) {
        c.suspense.unmount(v, x);
        return;
      }
      q && ht(c, null, d, "beforeUnmount"), L & 64 ? c.type.remove(
        c,
        d,
        v,
        U,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Z || R > 0 && R & 64) ? M(
        y,
        d,
        v,
        !1,
        !0
      ) : (_ === Z && R & 384 || !b && L & 16) && M(E, d, v), x && gn(c);
    }
    const me = K != null && O == null;
    (Y && (ce = I && I.onVnodeUnmounted) || q || me) && Ee(() => {
      ce && Fe(ce, d, c), q && ht(c, null, d, "unmounted"), me && (c.el = null);
    }, v);
  }, gn = (c) => {
    const { type: d, el: v, anchor: x, transition: b } = c;
    if (d === Z) {
      Xn(v, x);
      return;
    }
    if (d === is) {
      C(c);
      return;
    }
    const _ = () => {
      o(v), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: I, delayLeave: T } = b, E = () => I(v, _);
      T ? T(c.el, _, E) : E();
    } else
      _();
  }, Xn = (c, d) => {
    let v;
    for (; c !== d; )
      v = w(c), o(c), c = v;
    o(d);
  }, Yn = (c, d, v) => {
    const { bum: x, scope: b, job: _, subTree: I, um: T, m: E, a: y } = c;
    ro(E), ro(y), x && xn(x), b.stop(), _ && (_.flags |= 8, De(I, c, d, v)), T && Ee(T, d), Ee(() => {
      c.isUnmounted = !0;
    }, d);
  }, M = (c, d, v, x = !1, b = !1, _ = 0) => {
    for (let I = _; I < c.length; I++)
      De(c[I], d, v, x, b);
  }, p = (c) => {
    if (c.shapeFlag & 6)
      return p(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = w(c.anchor || c.el), v = d && d[nl];
    return v ? w(v) : d;
  };
  let h = !1;
  const we = (c, d, v) => {
    let x;
    c == null ? d._vnode && (De(d._vnode, null, null, !0), x = d._vnode.component) : A(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      v
    ), d._vnode = c, h || (h = !0, eo(x), hi(), h = !1);
  }, U = {
    p: A,
    um: De,
    m: Ct,
    r: gn,
    mt: Ae,
    mc: se,
    pc: Ye,
    pbc: ve,
    n: p,
    o: e
  };
  return {
    render: we,
    hydrate: void 0,
    createApp: cl(we)
  };
}
function os({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function gt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Tl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ii(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (F(s) && F(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = nt(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && Ii(r, l)), l.type === Kn && (l.patchFlag === -1 && (l = o[i] = nt(l)), l.el = r.el), l.type === at && !l.el && (l.el = r.el);
    }
}
function Cl(e) {
  const t = e.slice(), n = [0];
  let s, o, i, r, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        l = i + r >> 1, e[n[l]] < u ? i = l + 1 : r = l;
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
function Ri(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ri(t);
}
function ro(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Pi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Pi(t.subTree) : null;
}
const Ni = (e) => e.__isSuspense;
function Ml(e, t) {
  t && t.pendingBranch ? F(e) ? t.effects.push(...e) : t.effects.push(e) : Xr(e);
}
const Z = /* @__PURE__ */ Symbol.for("v-fgt"), Kn = /* @__PURE__ */ Symbol.for("v-txt"), at = /* @__PURE__ */ Symbol.for("v-cmt"), is = /* @__PURE__ */ Symbol.for("v-stc"), xt = [];
let Me = null;
function j(e = !1) {
  xt.push(Me = e ? null : []);
}
function Vi() {
  xt.pop(), Me = xt[xt.length - 1] || null;
}
let cn = 1;
function lo(e, t = !1) {
  cn += e, e < 0 && Me && t && (Me.hasOnce = !0);
}
function Gi(e) {
  return e.dynamicChildren = cn > 0 ? Me || Pt : null, Vi(), cn > 0 && Me && Me.push(e), e;
}
function k(e, t, n, s, o, i) {
  return Gi(
    g(
      e,
      t,
      n,
      s,
      o,
      i,
      !0
    )
  );
}
function Al(e, t, n, s, o) {
  return Gi(
    it(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Li(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Oi = ({ key: e }) => e ?? null, Sn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ue(e) || /* @__PURE__ */ xe(e) || Q(e) ? { i: Re, r: e, k: t, f: !!n } : e : null);
function g(e, t = null, n = null, s = 0, o = null, i = e === Z ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Oi(t),
    ref: t && Sn(t),
    scopeId: vi,
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
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Re
  };
  return l ? (An(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= ue(n) ? 8 : 16), cn > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Me.push(a), a;
}
const it = Il;
function Il(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === rl) && (e = at), Li(e)) {
    const l = $t(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && An(l, n), cn > 0 && !i && Me && (l.shapeFlag & 6 ? Me[Me.indexOf(e)] = l : Me.push(l)), l.patchFlag = -2, l;
  }
  if (Ul(e) && (e = e.__vccOpts), t) {
    t = Rl(t);
    let { class: l, style: a } = t;
    l && !ue(l) && (t.class = Un(l)), re(a) && (/* @__PURE__ */ Us(a) && !F(a) && (a = Oe({}, a)), t.style = Ps(a));
  }
  const r = ue(e) ? 1 : Ni(e) ? 128 : Bn(e) ? 64 : re(e) ? 4 : Q(e) ? 2 : 0;
  return g(
    e,
    t,
    n,
    s,
    o,
    r,
    i,
    !0
  );
}
function Rl(e) {
  return e ? /* @__PURE__ */ Us(e) || Ei(e) ? Oe({}, e) : e : null;
}
function $t(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: a } = e, u = t ? Pl(o || {}, t) : o, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Oi(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? F(i) ? i.concat(Sn(t)) : [i, Sn(t)] : Sn(t)
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
    patchFlag: t && e.type !== Z ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && $t(e.ssContent),
    ssFallback: e.ssFallback && $t(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Fs(
    f,
    a.clone(f)
  ), f;
}
function oe(e = " ", t = 0) {
  return it(Kn, null, e, t);
}
function At(e = "", t = !1) {
  return t ? (j(), Al(at, null, e)) : it(at, null, e);
}
function ze(e) {
  return e == null || typeof e == "boolean" ? it(at) : F(e) ? it(
    Z,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Li(e) ? nt(e) : it(Kn, null, String(e));
}
function nt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : $t(e);
}
function An(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (F(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), An(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Ei(t) ? t._ctx = Re : o === 3 && Re && (Re.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Q(t)) {
    if (s & 65) {
      An(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Re }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [oe(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Pl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Un([t.class, s.class]));
      else if (o === "style")
        t.style = Ps([t.style, s.style]);
      else if (Ln(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(F(i) && i.includes(r)) ? t[o] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !On(o) && (t[o] = r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Fe(e, t, n, s = null) {
  lt(e, t, 7, [
    n,
    s
  ]);
}
const Nl = bi();
let Vl = 0;
function Gl(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Nl, i = {
    uid: Vl++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new yr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: yl(s, o),
    emitsOptions: dl(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ie,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ie,
    data: ie,
    props: ie,
    attrs: ie,
    slots: ie,
    refs: ie,
    setupState: ie,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = fl.bind(null, i), e.ce && e.ce(i), i;
}
let Dt = null;
const Ll = () => Dt || Re;
let In, un;
{
  const e = jn(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  In = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Dt = n
  ), un = t(
    "__VUE_SSR_SETTERS__",
    (n) => Rn = n
  );
}
const $i = (e) => {
  const t = Dt;
  return In(e), e.scope.on(), () => {
    e.scope.off(), In(t);
  };
}, ao = () => {
  Dt && Dt.scope.off(), In(null);
};
function Di(e) {
  return e.vnode.shapeFlag & 4;
}
let Rn = !1;
function Ol(e, t = !1, n = !1) {
  t && un(t);
  const { props: s, children: o } = e.vnode, i = Di(e);
  vl(e, s, i, t), xl(e, o, n || t);
  const r = i ? $l(e, t) : void 0;
  return t && un(!1), r;
}
function $l(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ll);
  const { setup: s } = n;
  if (s) {
    St();
    const o = e.setupContext = s.length > 1 ? jl(e) : null, i = $i(e), r = mn(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), l = Bo(r);
    if (wt(), i(), (l || e.sp) && !nn(e) && il(e), l) {
      if (r.then(ao, ao), t)
        return r.then((a) => {
          un(!0);
          try {
            co(e, a, t);
          } finally {
            un(!1);
          }
        }).catch((a) => {
          Fn(a, e, 0);
        });
      e.asyncDep = r;
    } else
      co(e, r);
  } else
    ji(e);
}
function co(e, t, n) {
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = fi(t)), ji(e);
}
function ji(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || _t);
}
const Dl = {
  get(e, t) {
    return ge(e, "get", ""), e[t];
  }
};
function jl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Dl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function zn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fi(jr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in sn)
        return sn[n](e);
    },
    has(t, n) {
      return n in t || n in sn;
    }
  })) : e.proxy;
}
function Ul(e) {
  return Q(e) && "__vccOpts" in e;
}
const qe = (e, t) => /* @__PURE__ */ Hr(e, t, Rn), kl = "3.5.41";
let xs;
const uo = typeof window < "u" && window.trustedTypes;
if (uo)
  try {
    xs = /* @__PURE__ */ uo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ui = xs ? (e) => xs.createHTML(e) : (e) => e, Fl = "http://www.w3.org/2000/svg", Bl = "http://www.w3.org/1998/Math/MathML", tt = typeof document < "u" ? document : null, fo = tt && /* @__PURE__ */ tt.createElement("template"), Hl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? tt.createElementNS(Fl, e) : t === "mathml" ? tt.createElementNS(Bl, e) : n ? tt.createElement(e, { is: n }) : tt.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => tt.createTextNode(e),
  createComment: (e) => tt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => tt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, i) {
    const r = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      fo.innerHTML = Ui(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = fo.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Kl = /* @__PURE__ */ Symbol("_vtc");
function zl(e, t, n) {
  const s = e[Kl];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const po = /* @__PURE__ */ Symbol("_vod"), Wl = /* @__PURE__ */ Symbol("_vsh"), Jl = /* @__PURE__ */ Symbol(""), Xl = /(?:^|;)\s*display\s*:/;
function Yl(e, t, n) {
  const s = e.style, o = ue(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (ue(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && Zt(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && Zt(s, r, "");
    for (const r in n) {
      r === "display" && (i = !0);
      const l = n[r];
      l != null ? Ql(
        e,
        r,
        !ue(t) && t ? t[r] : void 0,
        l
      ) || Zt(s, r, l) : Zt(s, r, "");
    }
  } else if (o) {
    if (t !== n) {
      const r = s[Jl];
      r && (n += ";" + r), s.cssText = n, i = Xl.test(n);
    }
  } else t && e.removeAttribute("style");
  po in e && (e[po] = i ? s.display : "", e[Wl] && (s.display = "none"));
}
const mo = /\s*!important$/;
function Zt(e, t, n) {
  if (F(n))
    n.forEach((s) => Zt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Zl(e, t);
    mo.test(n) ? e.setProperty(
      Et(s),
      n.replace(mo, ""),
      "important"
    ) : e[s] = n;
  }
}
const ho = ["Webkit", "Moz", "ms"], rs = {};
function Zl(e, t) {
  const n = rs[t];
  if (n)
    return n;
  let s = Ve(t);
  if (s !== "filter" && s in e)
    return rs[t] = s;
  s = zo(s);
  for (let o = 0; o < ho.length; o++) {
    const i = ho[o] + s;
    if (i in e)
      return rs[t] = i;
  }
  return t;
}
function Ql(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ue(s) && n === s;
}
const go = "http://www.w3.org/1999/xlink";
function vo(e, t, n, s, o, i = vr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(go, t.slice(6, t.length)) : e.setAttributeNS(go, t, n) : n == null || i && !Jo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Xe(n) ? String(n) : n
  );
}
function _o(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ui(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Jo(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(o || t);
}
function dt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ql(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const yo = /* @__PURE__ */ Symbol("_vei");
function ea(e, t, n, s, o = null) {
  const i = e[yo] || (e[yo] = {}), r = i[t];
  if (s && r)
    r.value = s;
  else {
    const [l, a] = sa(t);
    if (s) {
      const u = i[t] = ra(
        s,
        o
      );
      dt(e, l, u, a);
    } else r && (ql(e, l, r, a), i[t] = void 0);
  }
}
const ta = /(Once|Passive|Capture)$/, na = /^on:?(?:Once|Passive|Capture)$/;
function sa(e) {
  let t, n;
  for (; (n = e.match(ta)) && !na.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Et(e.slice(2)), t];
}
let ls = 0;
const oa = /* @__PURE__ */ Promise.resolve(), ia = () => ls || (oa.then(() => ls = 0), ls = Date.now());
function ra(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const o = n.value;
    if (F(o)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        i.call(s), s._stopped = !0;
      };
      const r = o.slice(), l = [s];
      for (let a = 0; a < r.length && !s._stopped; a++) {
        const u = r[a];
        u && lt(
          u,
          t,
          5,
          l
        );
      }
    } else
      lt(
        o,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = ia(), n;
}
const bo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, la = (e, t, n, s, o, i) => {
  const r = o === "svg";
  t === "class" ? zl(e, s, r) : t === "style" ? Yl(e, n, s) : Ln(t) ? On(t) || ea(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : aa(e, t, s, r)) ? (_o(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && vo(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ca(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ue(s))) ? _o(e, Ve(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), vo(e, t, s, r));
};
function aa(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && bo(t) && Q(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return bo(t) && ue(n) ? !1 : t in e;
}
function ca(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Ve(t);
  return Array.isArray(n) ? n.some((o) => Ve(o) === s) : Object.keys(n).some((o) => Ve(o) === s);
}
const jt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return F(t) ? (n) => xn(t, n) : t;
};
function ua(e) {
  e.target.composing = !0;
}
function xo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Je = /* @__PURE__ */ Symbol("_assign"), bn = /* @__PURE__ */ Symbol("_initialValue");
function as(e, t, n) {
  return t && (e = e.trim()), n && (e = Dn(e)), e;
}
const fe = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e.parentNode && (e.type === "text" ? e[bn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[bn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Je] = jt(o);
    const i = s || o.props && o.props.type === "number";
    dt(e, t ? "change" : "input", (r) => {
      r.target.composing || e[Je](as(e.value, n, i));
    }), (n || i) && dt(e, "change", () => {
      e.value = as(e.value, n, i);
    }), t || (dt(e, "compositionstart", ua), dt(e, "compositionend", xo), dt(e, "change", xo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const o = t ?? "", i = e[bn];
    delete e[bn], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[Je](as(e.value, n, s)) : e.value = o;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, r) {
    if (e[Je] = jt(r), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Dn(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const u = e.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a);
  }
}, So = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Je] = jt(n), dt(e, "change", () => {
      const s = e._modelValue, o = fn(e), i = e.checked, r = e[Je];
      if (F(s)) {
        const l = Ns(s, o), a = l !== -1;
        if (i && !a)
          r(s.concat(o));
        else if (!i && a) {
          const u = [...s];
          u.splice(l, 1), r(u);
        }
      } else if (Ut(s)) {
        const l = new Set(s);
        i ? l.add(o) : l.delete(o), r(l);
      } else
        r(ki(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: wo,
  beforeUpdate(e, t, n) {
    e[Je] = jt(n), wo(e, t, n);
  }
};
function wo(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (F(t))
    o = Ns(t, s.props.value) > -1;
  else if (Ut(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = kt(t, ki(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const de = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, dt(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Dn(fn(i)) : fn(i)
      );
      e[Je](
        e.multiple ? Ut(e._modelValue) ? new Set(o) : o : o[0]
      ), e._assigning = !0, pi(() => {
        e._assigning = !1;
      });
    }), e[Je] = jt(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Eo(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Je] = jt(n);
  },
  updated(e, { value: t }) {
    e._assigning || Eo(e, t);
  }
};
function Eo(e, t) {
  const n = e.multiple, s = F(t);
  if (!(n && !s && !Ut(t))) {
    for (let o = 0, i = e.options.length; o < i; o++) {
      const r = e.options[o], l = fn(r);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? r.selected = t.some((u) => String(u) === String(l)) : r.selected = Ns(t, l) > -1;
        } else
          r.selected = t.has(l);
      else if (kt(fn(r), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function fn(e) {
  return "_value" in e ? e._value : e.value;
}
function ki(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const fa = /* @__PURE__ */ Oe({ patchProp: la }, Hl);
let To;
function da() {
  return To || (To = wl(fa));
}
const pa = ((...e) => {
  const t = da().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = ha(s);
    if (!o) return;
    const i = t._component;
    !Q(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = n(o, !1, ma(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
});
function ma(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ha(e) {
  return ue(e) ? document.querySelector(e) : e;
}
const ga = "tavern_multi_tts_cache", Ie = "audio_cache", va = 1, Co = 100, Mo = 50 * 1024 * 1024;
function _a(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
async function ya(e) {
  const t = e.engine === "minimax" ? {
    text: e.text,
    engine: e.engine,
    region: e.minimax?.region ?? "",
    groupId: e.minimax?.groupId ?? "",
    model: e.minimax?.model ?? "",
    voiceId: e.minimax?.voiceId ?? "",
    speed: e.minimax?.speed,
    vol: e.minimax?.vol,
    format: e.minimax?.format ?? "mp3"
  } : {
    text: e.text,
    engine: e.engine,
    origin: e.localGsvi?.origin ?? "",
    model: e.localGsvi?.model ?? "",
    format: e.localGsvi?.format ?? "mp3",
    useReferenceAudio: e.localGsvi?.useReferenceAudio ?? !1,
    character: e.localGsvi?.character ?? "",
    language: e.localGsvi?.language ?? "",
    emotion: e.localGsvi?.emotion ?? "",
    referenceText: e.localGsvi?.referenceText ?? "",
    speed: e.localGsvi?.speed,
    topK: e.localGsvi?.topK,
    topP: e.localGsvi?.topP,
    temperature: e.localGsvi?.temperature,
    textLang: e.localGsvi?.textLang ?? "",
    textSplitMethod: e.localGsvi?.textSplitMethod ?? ""
  }, n = JSON.stringify(t);
  if (Object.keys(t).some((o) => /api[_-]?key|authorization|token|secret|password/i.test(o)))
    throw new Error("音频缓存键不得包含密钥字段");
  const s = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(n));
  return [...new Uint8Array(s)].map((o) => o.toString(16).padStart(2, "0")).join("");
}
function ba() {
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
function xa(e, t) {
  let n = null, s = null, o = 0;
  function i(l) {
    n = l, l.onversionchange = () => {
      l.close(), n === l && (n = null);
    };
    const a = l.onclose;
    return l.onclose = (u) => {
      n === l && (n = null), typeof a == "function" && a.call(l, u);
    }, l;
  }
  async function r() {
    return n || (s ? await s : (s = new Promise((l, a) => {
      const u = e.open(t, va);
      o += 1, u.onupgradeneeded = () => {
        const f = u.result;
        f.objectStoreNames.contains(Ie) || f.createObjectStore(Ie, { keyPath: "key" });
      }, u.onsuccess = () => l(i(u.result)), u.onerror = () => a(u.error ?? Error("IndexedDB 打开失败"));
    }).finally(() => {
      s = null;
    }), await s));
  }
  return {
    getDb: r,
    close() {
      n?.close(), n = null;
    },
    getOpenCount() {
      return o;
    }
  };
}
function Sa(e, t) {
  const n = xa(e, t);
  async function s() {
    return await n.getDb();
  }
  return {
    async get(o) {
      const i = await s();
      return await new Promise((r, l) => {
        const u = i.transaction(Ie, "readonly").objectStore(Ie).get(o);
        u.onsuccess = () => r(u.result), u.onerror = () => l(u.error ?? Error("读取缓存失败"));
      });
    },
    async put(o) {
      const i = await s();
      await new Promise((r, l) => {
        const a = i.transaction(Ie, "readwrite");
        a.objectStore(Ie).put(o), a.oncomplete = () => r(), a.onerror = () => l(a.error ?? Error("写入缓存失败"));
      });
    },
    async delete(o) {
      const i = await s();
      await new Promise((r, l) => {
        const a = i.transaction(Ie, "readwrite");
        a.objectStore(Ie).delete(o), a.oncomplete = () => r(), a.onerror = () => l(a.error ?? Error("删除缓存失败"));
      });
    },
    async clear() {
      const o = await s();
      await new Promise((i, r) => {
        const l = o.transaction(Ie, "readwrite");
        l.objectStore(Ie).clear(), l.oncomplete = () => i(), l.onerror = () => r(l.error ?? Error("清空缓存失败"));
      });
    },
    async getAll() {
      const o = await s();
      return await new Promise((i, r) => {
        const a = o.transaction(Ie, "readonly").objectStore(Ie).openCursor(), u = [];
        a.onsuccess = () => {
          const f = a.result;
          if (!f) {
            i(u);
            return;
          }
          u.push(f.value), f.continue();
        }, a.onerror = () => r(a.error ?? Error("读取缓存记录失败"));
      });
    }
  };
}
async function wa(e) {
  const t = await e.getAll();
  let n = t.reduce((i, r) => i + (r.blob?.size ?? 0), 0);
  if (t.length <= Co && n <= Mo)
    return;
  const s = [...t].sort((i, r) => i.created_at - r.created_at);
  let o = t.length;
  for (const i of s) {
    if (o <= Co && n <= Mo)
      break;
    await e.delete(i.key), o -= 1, n -= i.blob?.size ?? 0;
  }
}
function Ea(e) {
  const t = e?.backend === "memory" ? ba() : Sa(
    e?.indexedDB ?? indexedDB,
    e?.dbName ?? ga
  );
  return {
    async get(n) {
      return (await t.get(n))?.blob ?? null;
    },
    async set(n, s, o = Date.now()) {
      await t.put({
        key: n,
        blob: s,
        created_at: o
      }), await wa(t);
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
        totalBytes: n.reduce((s, o) => s + (o.blob?.size ?? 0), 0)
      };
    },
    async list(n, s) {
      const i = (await t.getAll()).sort((l, a) => a.created_at - l.created_at), r = Math.max(0, (n - 1) * s);
      return {
        items: i.slice(r, r + s).map((l) => ({
          key: l.key,
          size: l.blob?.size ?? 0,
          createdAt: l.created_at
        })),
        total: i.length,
        totalBytes: i.reduce((l, a) => l + (a.blob?.size ?? 0), 0)
      };
    }
  };
}
const Wn = Ea({
  backend: typeof indexedDB > "u" ? "memory" : "indexeddb"
});
function Ta(e) {
  return Wn.get(e);
}
function Ca(e, t) {
  return Wn.set(e, t);
}
function Fi() {
  return Wn.clear();
}
function Ma() {
  return Wn.stats();
}
let ft = null, wn = null;
function Bi() {
  ft && (ft.pause(), wn?.());
}
function Hi(e, t, n, s, o) {
  const i = URL.createObjectURL(e), r = new Audio(i);
  let l = "paused";
  const a = () => {
    URL.revokeObjectURL(i), ft === r && (ft = null, wn = null);
  }, u = () => {
    ft && ft !== r && (ft.pause(), wn?.()), ft = r, wn = a;
  };
  r.onplay = () => {
    l = "playing", t?.();
  }, r.onpause = () => {
    l === "ended" || l === "error" || (l = "paused", o?.());
  }, r.onended = () => {
    l = "ended", a(), n?.();
  }, r.onerror = (m) => {
    l = "error", a(), s?.(m);
  };
  const f = async () => {
    u();
    try {
      await r.play();
    } catch (m) {
      throw l = "error", a(), s?.(m), m;
    }
  };
  return f().catch(() => {
  }), {
    stop: () => {
      l = "ended", r.pause(), a();
    },
    pause: () => {
      l === "playing" && r.pause();
    },
    resume: f,
    restart: async () => {
      r.currentTime = 0, await f();
    },
    getState: () => l
  };
}
function Ki(e) {
  return [...e].map((n) => n.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(n) ? "_" : n).join("").trim() || "audio.mp3";
}
function Aa(e, t, n = "mp3") {
  return Ki(`tavern_multi_tts_${e}_${t}.${n}`);
}
function Ia(e, t) {
  const n = Ki(t), s = URL.createObjectURL(e), o = URL.revokeObjectURL.bind(URL), i = document.createElement("a");
  i.href = s, i.download = n, document.body.appendChild(i), i.click(), i.remove(), window.setTimeout(() => o(s), 0);
}
const Ra = "Tavern Multi-TTS", cs = "tavern_multi_tts", Pa = "0.1.0", us = "tavern-multi-tts-root", be = "[Tavern Multi-TTS]", zi = 2, Wi = [
  "speech-02-hd",
  "speech-02-turbo",
  "speech-2.8-hd",
  "speech-2.8-turbo",
  "speech-2.6-hd",
  "speech-2.6-turbo"
], Ss = [
  "<VOICE_RULE>",
  "请仅对角色：${mapped_characters} 的“直接台词”添加 <say char=“角色名”>...</say> 标签。",
  "角色映射名单：${mapped_characters}",
  "若说话者在映射名单中，char 必须与映射角色名完全一致。",
  "若说话者不在映射名单中，也必须填写真实说话角色名，char 不可省略。",
  " <say char=“角色名”>不要填<user>。",
  "不要给旁白、动作描写、心理活动添、双语的中文翻译内容加 <say> 标签。",
  "可在 <say> </say> 之间自然加入语气词标签，但不要滥用。",
  "仅可使用以下语气词标签：",
  "(laughs), (chuckle), (coughs), (clear-throat), (groans), (breath), (pant), (inhale), (exhale), (gasps), (sniffs), (sighs), (snorts), (burps), (lip-smacking), (humming), (hissing), (emm), (sneezes)",
  "除上述外，禁止输出其它括号语气词（如 (softly)、(gently)）。",
  "不要输出空的 <say></say>，不要嵌套 <say> 标签。",
  "示例:",
  " <say char=“角色名”>“(laughs)你好呀！” </say>",
  "</VOICE_RULE>"
].join(`
`), Ft = {
  schemaVersion: zi,
  enabled: !0,
  ttsEngine: "minimax",
  apiKey: "",
  groupId: "",
  voiceId: "",
  voiceCatalogSelectedId: "",
  minimaxRegion: "international",
  testLanguage: "ja",
  model: "speech-2.8-hd",
  speed: 1,
  vol: 1,
  requestTimeoutMs: 15e3,
  maxConcurrency: 3,
  prefetchMode: "auto_all",
  prefetchFirstCount: 2,
  localGsviBaseUrl: "",
  localGsviAuthToken: "",
  localGsviModel: "",
  localGsviFormat: "mp3",
  localGsviUseReferenceAudio: !1,
  localGsviCharacter: "",
  localGsviLanguage: "ja",
  localGsviEmotion: "",
  localGsviReferenceText: "",
  localGsviTopK: 20,
  localGsviTopP: 0.7,
  localGsviTemperature: 0.7,
  localGsviTextLang: "多语种混合",
  localGsviTextSplitMethod: "按标点符号切",
  localGsviBatchSize: 1,
  characterMappings: [],
  characterMappingPresets: [],
  gsviCharacterMappings: [],
  gsviCharacterMappingPresets: [],
  injectEnabled: !0,
  injectDepth: 1,
  injectRole: "system",
  injectTemplate: Ss
};
function hn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function ae(e, t) {
  return typeof e == "string" ? e : t;
}
function fs(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Be(e, t, n, s, o = !1) {
  const i = typeof e == "number" ? e : Number(e);
  if (!Number.isFinite(i))
    return s;
  const r = o ? Math.round(i) : i;
  return Math.min(n, Math.max(t, r));
}
function Na(e) {
  return e === "local_gsvi" ? "local_gsvi" : "minimax";
}
function Va(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Ga(e) {
  return Wi.includes(String(e)) ? e : Ft.model;
}
function La(e) {
  return e === "manual" || e === "auto_first_n" || e === "auto_all" ? e : Ft.prefetchMode;
}
function Oa(e) {
  return e === "user" || e === "assistant" || e === "system" ? e : Ft.injectRole;
}
function $a(e) {
  return e === "zh" || e === "en" || e === "ja" ? e : Ft.testLanguage;
}
function Da(e) {
  return e === "wav" ? "wav" : "mp3";
}
function Ji(e) {
  return Array.isArray(e) ? e.filter(hn).map((t) => ({
    characterName: ae(t.characterName, "").trim(),
    minimaxVoiceId: ae(t.minimaxVoiceId, "").trim()
  })).filter((t) => t.characterName || t.minimaxVoiceId) : [];
}
function ja(e) {
  return Array.isArray(e) ? e.filter(hn).map((t) => ({
    name: ae(t.name, "").trim(),
    mappings: Ji(t.mappings)
  })).filter((t) => t.name) : [];
}
function Xi(e) {
  return Array.isArray(e) ? e.filter(hn).map((t) => ({
    characterName: ae(t.characterName, "").trim(),
    gsviVoiceId: ae(t.gsviVoiceId, "").trim(),
    gsviLanguage: ae(t.gsviLanguage, "").trim(),
    gsviEmotion: ae(t.gsviEmotion, "").trim()
  })).filter((t) => t.characterName || t.gsviVoiceId) : [];
}
function Ua(e) {
  return Array.isArray(e) ? e.filter(hn).map((t) => ({
    name: ae(t.name, "").trim(),
    mappings: Xi(t.mappings)
  })).filter((t) => t.name) : [];
}
function Lt(e) {
  const t = hn(e) ? e : {};
  return {
    schemaVersion: zi,
    enabled: fs(t.enabled, Ft.enabled),
    ttsEngine: Na(t.ttsEngine),
    apiKey: ae(t.apiKey, ""),
    groupId: ae(t.groupId, ""),
    voiceId: ae(t.voiceId, ""),
    voiceCatalogSelectedId: ae(t.voiceCatalogSelectedId, ""),
    minimaxRegion: Va(t.minimaxRegion),
    testLanguage: $a(t.testLanguage),
    model: Ga(t.model),
    speed: Be(t.speed, 0.5, 2, 1),
    vol: Be(t.vol, 0, 10, 1),
    requestTimeoutMs: Be(t.requestTimeoutMs, 1e3, 3e4, 15e3, !0),
    maxConcurrency: Be(t.maxConcurrency, 1, 10, 3, !0),
    prefetchMode: La(t.prefetchMode),
    prefetchFirstCount: Be(t.prefetchFirstCount, 1, 10, 2, !0),
    localGsviBaseUrl: ae(t.localGsviBaseUrl, ""),
    localGsviAuthToken: ae(t.localGsviAuthToken, ""),
    localGsviModel: ae(t.localGsviModel, ""),
    localGsviFormat: Da(t.localGsviFormat),
    localGsviUseReferenceAudio: fs(t.localGsviUseReferenceAudio, !1),
    localGsviCharacter: ae(t.localGsviCharacter, ""),
    localGsviLanguage: ae(t.localGsviLanguage, "ja"),
    localGsviEmotion: ae(t.localGsviEmotion, ""),
    localGsviReferenceText: ae(t.localGsviReferenceText, ""),
    localGsviTopK: Be(t.localGsviTopK, 1, 200, 20, !0),
    localGsviTopP: Be(t.localGsviTopP, 0, 1, 0.7),
    localGsviTemperature: Be(t.localGsviTemperature, 0, 2, 0.7),
    localGsviTextLang: ae(t.localGsviTextLang, "多语种混合"),
    localGsviTextSplitMethod: ae(t.localGsviTextSplitMethod, "按标点符号切"),
    localGsviBatchSize: Be(t.localGsviBatchSize, 1, 8, 1, !0),
    characterMappings: Ji(t.characterMappings),
    characterMappingPresets: ja(t.characterMappingPresets),
    gsviCharacterMappings: Xi(t.gsviCharacterMappings),
    gsviCharacterMappingPresets: Ua(t.gsviCharacterMappingPresets),
    injectEnabled: fs(t.injectEnabled, !0),
    injectDepth: Be(t.injectDepth, 0, 50, 1, !0),
    injectRole: Oa(t.injectRole),
    injectTemplate: ae(t.injectTemplate, Ss) || Ss
  };
}
function ka(e, t, n = {}) {
  let s = !1, o = !1, i = null, r = null, l = null;
  function a() {
    return Lt(e.readRawSettings());
  }
  function u() {
    const A = a();
    return e.writeSettings(A), A;
  }
  function f() {
    if (s)
      return !0;
    const A = document.getElementById(us);
    A && A.remove();
    const P = e.findSettingsRoot();
    return P ? (l = document.createElement("div"), l.id = us, l.dataset.tavernMultiTts = "settings", P.appendChild(l), t.mount(l, a()), r = e.onPageHide(() => {
      m({ removeSettings: !1 });
    }), s = !0, n.startRuntime?.(), console.info(`${be} settings panel mounted`), !0) : !1;
  }
  function m(A) {
    n.stopRuntime?.(), n.stopPlayback?.(), i?.(), i = null, o = !1, r?.(), r = null, t.unmount(), (l ?? document.getElementById(us))?.remove(), l = null, s = !1, A.removeSettings && e.removeSettings();
  }
  function w() {
    s || o || (u(), !f() && (o = !0, i = e.onAppReady(() => {
      const A = o;
      o = !1;
      const P = i;
      i = null, P?.(), A && (f() || console.error(
        `${be} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`
      ));
    })));
  }
  function S(A) {
    const P = a();
    P.enabled = A, e.writeSettings(P), n.syncRuntime?.();
  }
  function N(A) {
    const P = a();
    P.injectEnabled = A, e.writeSettings(P), n.syncRuntime?.();
  }
  return {
    activate: w,
    disable() {
      m({ removeSettings: !1 }), console.info(`${be} disabled`);
    },
    destroy() {
      m({ removeSettings: !1 });
    },
    install() {
      u();
    },
    clean() {
      return m({ removeSettings: !0 }), console.info(`${be} settings cleaned`), n.clearCache?.();
    },
    delete() {
      return m({ removeSettings: !0 }), console.info(`${be} deleted`), n.clearCache?.();
    },
    updateSettings(A) {
      e.writeSettings(Lt(A)), n.syncRuntime?.();
    },
    setEnabled: S,
    setInjectEnabled: N,
    isActive() {
      return s;
    }
  };
}
function Fa() {
  return document.querySelector("#extensions_settings2") ?? document.querySelector("#extensions_settings");
}
class W extends Error {
  code;
  status;
  constructor(t, n, s) {
    super(t), this.name = "TtsRequestError", this.code = n, this.status = s;
  }
}
function Ba(e) {
  return e instanceof W;
}
function Ha(e) {
  return new W(`请求超时（${e}ms），请检查网络或增大超时时间`, "timeout");
}
function Ka() {
  return new W("请求已取消", "cancelled");
}
async function on(e, t, n, s) {
  const o = new AbortController();
  let i = !1, r = !1, l = null;
  const a = () => {
    r || (r = !0, clearTimeout(f), m?.removeEventListener("abort", w));
  }, u = () => i && !m?.aborted ? Ha(s) : Ka(), f = setTimeout(() => {
    i = !0, o.abort("timeout");
  }, s), m = n.signal, w = () => {
    o.abort(m?.reason ?? "cancelled");
  };
  m && (m.aborted ? o.abort(m.reason ?? "cancelled") : m.addEventListener("abort", w, { once: !0 }));
  const S = () => {
    l?.(u());
  };
  o.signal.addEventListener("abort", S);
  const N = () => new Promise((P, G) => {
    if (o.signal.aborted) {
      G(u());
      return;
    }
    l = G;
  }), A = async (P) => {
    try {
      return await Promise.race([P, N()]);
    } catch (G) {
      throw G instanceof W ? G : o.signal.aborted ? u() : G;
    } finally {
      a(), o.signal.removeEventListener("abort", S);
    }
  };
  try {
    const P = await Promise.race([
      e(t, {
        ...n,
        signal: o.signal
      }),
      N()
    ]);
    return {
      ok: P.ok,
      status: P.status,
      statusText: P.statusText,
      headers: P.headers,
      text: () => A(P.text()),
      async json() {
        const G = await A(P.text());
        try {
          return JSON.parse(G);
        } catch {
          throw new W(
            "服务返回的不是合法 JSON，请检查地址或稍后重试",
            "invalid_json"
          );
        }
      },
      blob: () => A(P.blob()),
      close: a
    };
  } catch (P) {
    throw a(), o.signal.removeEventListener("abort", S), P instanceof W ? P : o.signal.aborted ? u() : P;
  }
}
function ws(e, t) {
  return `${e.replace(/\/+$/, "")}${t.startsWith("/") ? "" : "/"}${t}`;
}
function za(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function Wa(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const Ja = /api[_-]?key|authorization|token|secret|cookie|password/i;
function Pn(e) {
  if (typeof e == "string")
    return e.length > 80 ? `${e.slice(0, 80)}…(len=${e.length})` : e;
  if (Array.isArray(e))
    return e.map((n) => Pn(n));
  if (!e || typeof e != "object")
    return e;
  const t = {};
  for (const [n, s] of Object.entries(e)) {
    if (Ja.test(n)) {
      t[n] = "[redacted]";
      continue;
    }
    if (n === "text" || n === "input" || n === "referenceText" || n === "reference_text") {
      t[n] = typeof s == "string" ? `[text len=${s.length}]` : "[text]";
      continue;
    }
    t[n] = Pn(s);
  }
  return t;
}
function Yi(e, t, n) {
  if (n === void 0) {
    console.info(`${be} [${e}] ${t}`);
    return;
  }
  console.info(`${be} [${e}] ${t}`, Pn(n));
}
function Es(e, t, n) {
  if (n === void 0) {
    console.warn(`${be} [${e}] ${t}`);
    return;
  }
  console.warn(`${be} [${e}] ${t}`, Pn(n));
}
const Xa = ["v2", "v3", "v4", "v2Pro"];
function Zi(e) {
  const t = e.trim();
  if (!t)
    return { modelName: "", version: "" };
  const n = t.lastIndexOf("|");
  return n < 0 ? { modelName: t, version: "" } : {
    modelName: t.slice(0, n).trim(),
    version: t.slice(n + 1).trim()
  };
}
function Ya(e) {
  const t = e.trim().toLowerCase();
  return t === "v2pro" ? "v2Pro" : t === "v2" || t === "v3" || t === "v4" ? t : e.trim();
}
function Za(e) {
  const t = e.trim();
  return t ? {
    英文: "英语",
    日文: "日语",
    韩文: "韩语"
  }[t] ?? t : "多语种混合";
}
function Qa(e) {
  const t = Zi(e.modelId), n = t.modelName.trim(), s = Ya(t.version) || "v2Pro";
  return {
    url: ws(e.baseUrl.trim(), "/v1/audio/speech"),
    modelName: n,
    version: s,
    payload: {
      model: `GSVI-${s}`,
      input: e.text,
      voice: n,
      response_format: e.format,
      speed: e.speed,
      other_params: {
        app_key: "",
        text_lang: Za(e.textLang),
        prompt_lang: e.language.trim(),
        emotion: e.emotion.trim(),
        top_k: e.topK,
        top_p: e.topP,
        temperature: e.temperature,
        text_split_method: e.textSplitMethod.trim() || "按标点符号切",
        batch_size: e.batchSize,
        batch_threshold: 0.75,
        split_bucket: !0,
        fragment_interval: 0.3,
        parallel_infer: !0,
        repetition_penalty: 1.35,
        sample_steps: 16,
        if_sr: !1,
        seed: -1
      }
    }
  };
}
function qa(e) {
  if (!e.baseUrl.trim())
    throw new W("请先填写 Local-GSVI 服务地址", "config");
  if (!e.modelId.trim())
    throw new W("请先填写或选择 Local-GSVI 模型（modelName|version）", "config");
  if (!e.language.trim() || !e.emotion.trim())
    throw new W(
      "GSVI 生成要求映射完整：语种(prompt_lang)/情绪(emotion)不能为空",
      "config"
    );
  if (!Zi(e.modelId).modelName)
    throw new W("Local-GSVI 模型格式错误，期望 modelName|version", "config");
  if (!e.text.trim())
    throw new W("Local-GSVI 合成文本为空", "config");
}
function Te(e) {
  return typeof e == "object" && e !== null;
}
function ec(e) {
  const t = e.replace(/^data:audio\/[a-zA-Z0-9.+-]+;base64,/i, "").trim();
  return t.length >= 16 && /^[A-Za-z0-9+/=\r\n]+$/.test(t);
}
function Qi(e) {
  return e.trim().match(/^data:audio\/[a-zA-Z0-9.+-]+;base64,(.+)$/i)?.[1] ?? e.trim();
}
function tc(e) {
  if (!Te(e))
    return null;
  const t = e, n = Te(t.data) ? t.data : void 0, s = Te(t.output) ? t.output : void 0, o = [
    t.audio,
    t.data,
    t.audio_base64,
    t.b64,
    n?.audio,
    n?.audio_base64,
    s?.audio,
    s?.audio_base64
  ];
  for (const i of o)
    if (typeof i == "string" && ec(i))
      return Qi(i);
  return null;
}
function nc(e) {
  if (!Te(e))
    return null;
  const t = e, n = Te(t.data) ? t.data : void 0, s = Te(t.output) ? t.output : void 0, o = [
    t.result_path,
    t.audio_url,
    t.url,
    t.audio_file,
    t.path,
    n?.url,
    n?.path,
    s?.url,
    s?.path,
    s?.audio_url
  ];
  for (const i of o)
    if (typeof i == "string" && i.trim())
      return i.trim();
  return null;
}
function sc(e) {
  if (!Te(e))
    return "";
  const t = Te(e.error) ? e.error : void 0, n = Te(e.base_resp) ? e.base_resp : void 0, s = Te(e.data) ? e.data : void 0, o = [
    e.msg,
    e.message,
    e.error,
    t?.msg,
    t?.message,
    n?.status_msg,
    s?.msg,
    s?.message
  ];
  for (const i of o)
    if (typeof i == "string" && i.trim())
      return i.trim();
  return "";
}
function oc(e) {
  const t = atob(Qi(e)), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function ds(e) {
  const t = e?.trim() ?? "";
  return t ? { Authorization: `Bearer ${t}` } : {};
}
function ic(e) {
  const t = fetch;
  async function n(s, o, i, r, l) {
    const a = /^https?:\/\//i.test(o) ? o : ws(s, o);
    let u = !1;
    try {
      u = za(s) === new URL(a).origin;
    } catch {
      u = !1;
    }
    const f = await on(
      t,
      a,
      {
        method: "GET",
        headers: u ? ds(i) : {},
        signal: l
      },
      r
    );
    if (!f.ok)
      throw new W(`下载 GSVI 输出失败：HTTP ${f.status}`, "http", f.status);
    return await f.blob();
  }
  return {
    id: "local_gsvi",
    async checkHealth(s) {
      if (s.engine !== "local_gsvi")
        throw new W("Local-GSVI 适配器收到了错误的引擎请求", "config");
      if (!s.baseUrl.trim())
        return { ok: !1, message: "请先填写 Local-GSVI 服务地址" };
      try {
        const o = await this.listVoices(s);
        return {
          ok: o.length > 0,
          message: o.length > 0 ? `已检测到 ${o.length} 个模型` : "未解析到模型映射"
        };
      } catch (o) {
        return {
          ok: !1,
          message: o instanceof Error ? o.message : String(o)
        };
      }
    },
    async listVoices(s) {
      if (s.engine !== "local_gsvi")
        throw new W("Local-GSVI 适配器收到了错误的引擎请求", "config");
      const o = s.baseUrl.trim();
      if (!o)
        throw new W("请先填写 Local-GSVI 服务地址", "config");
      const i = [];
      for (const r of Xa) {
        const l = ws(o, `/models/${encodeURIComponent(r)}`);
        try {
          const a = await on(
            t,
            l,
            { method: "GET", headers: ds(s.authToken), signal: s.signal },
            s.timeoutMs
          );
          if (!a.ok) {
            Es("local_gsvi", `GET /models/${r} failed`, {
              status: a.status
            }), a.close();
            continue;
          }
          const u = await a.json(), f = Te(u) && Te(u.models) ? u.models : u;
          if (!Te(f))
            continue;
          Object.entries(f).forEach(([m, w]) => {
            if (!m || !Te(w))
              return;
            const S = Object.keys(w).filter(Boolean).sort((A, P) => A.localeCompare(P)), N = {};
            S.forEach((A) => {
              const P = w[A];
              N[A] = Array.isArray(P) ? P.map((G) => String(G).trim()).filter(Boolean) : typeof P == "string" ? [P.trim()].filter(Boolean) : [];
            }), i.push({
              id: `${m}|${r}`,
              name: `${m} [${r}]`,
              source: "gsvi_model",
              language: S.join(","),
              languages: S,
              emotionsByLanguage: N
            });
          });
        } catch (a) {
          if (a instanceof W && a.code === "cancelled")
            throw a;
          Es("local_gsvi", `GET /models/${r} failed`);
        }
      }
      if (i.length === 0)
        throw new W(
          "未在 /models/{v2|v3|v4|v2Pro} 中解析到模型映射，请检查接口返回结构",
          "missing_audio"
        );
      return i.sort((r, l) => r.name.localeCompare(l.name));
    },
    async synthesize(s) {
      if (s.engine !== "local_gsvi")
        throw new W("Local-GSVI 适配器收到了错误的引擎请求", "config");
      qa(s);
      const o = Qa(s), i = {
        "Content-Type": "application/json",
        ...ds(s.authToken)
      };
      Yi("local_gsvi", "synthesize", {
        url: o.url,
        model: o.modelName,
        version: o.version,
        text: s.text
      });
      const r = await on(
        t,
        o.url,
        {
          method: "POST",
          headers: i,
          body: JSON.stringify(o.payload),
          signal: s.signal
        },
        s.timeoutMs
      );
      if (!r.ok)
        throw new W(
          `Local-GSVI 请求失败：HTTP ${r.status}`,
          "http",
          r.status
        );
      if ((r.headers.get("content-type")?.toLowerCase() ?? "").includes("application/json")) {
        const a = await r.json(), u = tc(a);
        if (u)
          return new Blob([Uint8Array.from(oc(u))], {
            type: s.format === "wav" ? "audio/wav" : "audio/mpeg"
          });
        const f = nc(a);
        if (f)
          return await n(
            s.baseUrl.trim(),
            f,
            s.authToken ?? "",
            s.timeoutMs,
            s.signal
          );
        throw new W(
          `Local-GSVI 未返回可用音频：${sc(a) || "JSON 响应中未找到音频"}`,
          "missing_audio"
        );
      }
      return await r.blob();
    }
  };
}
const rc = {
  international: {
    tts: "https://api.minimaxi.com/v1/t2a_v2",
    voice: "https://api.minimaxi.com/v1/get_voice"
  },
  beijing: {
    tts: "https://api-bj.minimaxi.com/v1/t2a_v2",
    voice: "https://api-bj.minimaxi.com/v1/get_voice"
  }
}, lc = /* @__PURE__ */ new Set([408, 409, 429, 500, 502, 503, 504]), ac = /* @__PURE__ */ new Set([1e3, 1001, 1002, 1039]), Ao = 2, cc = "tavern_multi_tts_voice_catalog_v1", uc = 1440 * 60 * 1e3;
function Nn(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function Ts(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Io(e) {
  return rc[Ts(e)];
}
function qi(e, t) {
  return `${cc}:${e}:${t.trim()}`;
}
function fc(e) {
  return {
    group_id: e.groupId.trim(),
    model: e.model,
    text: e.text,
    stream: !1,
    output_format: "hex",
    voice_setting: {
      voice_id: e.voiceId.trim(),
      speed: e.speed,
      vol: e.vol,
      pitch: 0
    },
    audio_setting: {
      sample_rate: 32e3,
      bitrate: 128e3,
      format: "mp3",
      channel: 1
    }
  };
}
function Ro(e) {
  return `Bearer ${Nn(e)}`;
}
function dc(e) {
  const t = e.trim(), n = new Uint8Array(t.length / 2);
  for (let s = 0; s < t.length; s += 2)
    n[s / 2] = Number.parseInt(t.slice(s, s + 2), 16);
  return n;
}
function pc(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function mc(e) {
  const t = e.trim();
  return /^[0-9a-fA-F]+$/.test(t) && t.length % 2 === 0 ? dc(t) : pc(t);
}
function hc(e, t) {
  const s = `${t ?? ""} ${e}`.toLowerCase(), o = s.includes("japanese") ? "Japanese" : s.includes("english") ? "English" : s.includes("chinese") ? "Chinese" : s.includes("korean") ? "Korean" : s.includes("french") ? "French" : s.includes("german") ? "German" : s.includes("spanish") ? "Spanish" : "Unknown", i = s.includes("female") || s.includes("女") || s.includes("lady") || s.includes("girl") ? "Female" : s.includes("male") || s.includes("男") || s.includes("man") || s.includes("boy") ? "Male" : "Unknown";
  return { language: o, gender: i };
}
function gc(e, t) {
  const n = t.trim();
  if (!n)
    return null;
  try {
    const s = localStorage.getItem(qi(e, n));
    if (!s)
      return null;
    const o = JSON.parse(s);
    return !o?.expires_at || Date.now() > o.expires_at ? null : o.items ?? null;
  } catch {
    return null;
  }
}
function vc(e, t, n) {
  const s = t.trim();
  s && localStorage.setItem(
    qi(e, s),
    JSON.stringify({
      expires_at: Date.now() + uc,
      items: n
    })
  );
}
function _c(e) {
  const t = Nn(e.apiKey), n = e.groupId.trim(), s = e.voiceId.trim();
  if (!t || !n || !s)
    throw new W("MiniMax 引擎缺少必要配置：API Key / Group ID / Voice ID", "config");
  if (!e.text.trim())
    throw new W("MiniMax 合成文本为空", "config");
}
function yc(e) {
  return typeof e == "object" && e !== null;
}
function bc(e, t) {
  return lc.has(e) || ac.has(t);
}
function xc(e) {
  const t = fetch;
  return {
    id: "minimax",
    async checkHealth(n) {
      if (n.engine !== "minimax")
        throw new W("MiniMax 适配器收到了错误的引擎请求", "config");
      if (!Nn(n.apiKey))
        return { ok: !1, message: "请先填写 MiniMax API Key" };
      try {
        return await this.listVoices({ ...n, forceRefresh: !0 }), { ok: !0, message: "MiniMax 服务可用" };
      } catch (o) {
        return { ok: !1, message: o instanceof Error ? o.message : String(o) };
      }
    },
    async listVoices(n) {
      if (n.engine !== "minimax")
        throw new W("MiniMax 适配器收到了错误的引擎请求", "config");
      const s = Nn(n.apiKey);
      if (!s)
        throw new W("请先填写 API Key", "config");
      const o = Ts(n.region);
      if (!n.forceRefresh) {
        const m = gc(o, n.groupId);
        if (m && m.length > 0)
          return m;
      }
      const i = Io(o).voice, r = await on(
        t,
        i,
        {
          method: "POST",
          headers: {
            Authorization: Ro(s),
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ voice_type: "all" }),
          signal: n.signal
        },
        n.timeoutMs
      ), a = await r.json();
      if (!r.ok || (a.base_resp?.status_code ?? 0) !== 0)
        throw new W(
          a.base_resp?.status_msg ?? r.statusText ?? "拉取音色列表失败",
          "http",
          r.status
        );
      const u = [], f = (m, w = []) => {
        w.forEach((S) => {
          const N = hc(S.voice_id, S.voice_name);
          u.push({
            id: S.voice_id,
            name: S.voice_name ?? S.voice_id,
            description: S.description,
            source: m,
            language: N.language,
            gender: N.gender
          });
        });
      };
      return f("system", a.system_voice ?? []), f("voice_cloning", a.voice_cloning ?? []), f("voice_generation", a.voice_generation ?? []), vc(o, n.groupId, u), u;
    },
    async synthesize(n) {
      if (n.engine !== "minimax")
        throw new W("MiniMax 适配器收到了错误的引擎请求", "config");
      _c(n);
      const s = fc(n), o = Io(n.region).tts, i = {
        Authorization: Ro(n.apiKey),
        "Content-Type": "application/json"
      };
      Yi("minimax", "synthesize", {
        model: s.model,
        voiceId: s.voice_setting.voice_id,
        region: Ts(n.region),
        groupId: n.groupId.trim(),
        text: n.text
      });
      let r = null;
      for (let l = 0; l <= Ao; l += 1) {
        const a = await on(
          t,
          o,
          {
            method: "POST",
            headers: i,
            body: JSON.stringify(s),
            signal: n.signal
          },
          n.timeoutMs
        ), u = await a.json();
        if (!yc(u))
          throw new W("MiniMax 响应结构无效", "invalid_json");
        const f = u;
        if (!a.ok || (f.base_resp?.status_code ?? 0) !== 0) {
          const S = f.base_resp?.status_code ?? a.status, N = f.base_resp?.status_msg ?? a.statusText ?? "unknown error";
          if (r = `MiniMax 请求失败：code=${S}, msg=${N}`, bc(a.status, S) && l < Ao) {
            Es("minimax", "retryable synthesize failure", {
              status: a.status,
              attempt: l
            }), await Wa(250 * (l + 1));
            continue;
          }
          throw new W(r, "http", a.status);
        }
        const m = f.data?.audio ?? f.data?.audio_file ?? f.audio_file;
        if (!m)
          throw new W("MiniMax 响应中未找到音频字段", "missing_audio");
        const w = mc(m);
        return new Blob([Uint8Array.from(w)], { type: "audio/mpeg" });
      }
      throw new W(r ?? "MiniMax 请求失败：未知错误", "http");
    }
  };
}
function Cs(e) {
  return e === "local_gsvi" ? ic() : xc();
}
const Ms = "tavern_multi_tts_say_rule", Sc = 1, wc = {
  system: 0,
  user: 1,
  assistant: 2
};
function er(e) {
  const t = e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.characterMappings, n = [];
  for (const s of t) {
    const o = s.characterName.trim();
    o && !n.includes(o) && n.push(o);
  }
  return n;
}
function Ec(e) {
  const t = er(e);
  return [
    "<VOICE_CHAR_RULE>",
    '输出台词标签时，必须使用完整格式：<say char="角色名">...</say>。',
    "禁止输出 <say>...</say>（无 char）格式。",
    `已配置角色映射名单：${t.length > 0 ? t.join("、") : "（未配置角色映射）"}`,
    "若说话者在映射名单中，char 必须与名单角色名完全一致（含标点/空格差异也视为不一致）。",
    "若说话者不在映射名单中，也必须填写实际说话角色名，char 不可省略。",
    "</VOICE_CHAR_RULE>"
  ].join(`
`);
}
function Tc(e) {
  const t = er(e).join("、") || "（未配置角色映射）";
  return `${e.injectTemplate.replaceAll("${target_characters}", t).replaceAll("${mapped_characters}", t)}

${Ec(e)}`;
}
function ps(e, t) {
  return !t.enabled || !t.injectEnabled ? (e.deleteExtensionPrompt(Ms), { applied: !1 }) : (e.setExtensionPrompt(
    Ms,
    Tc(t),
    Sc,
    t.injectDepth,
    !1,
    wc[t.injectRole]
  ), { applied: !0, depth: t.injectDepth, role: t.injectRole });
}
function Cc(e) {
  e.deleteExtensionPrompt(Ms);
}
const Po = /<say(?:\s+char\s*=\s*(?:"([^"]*)"|“([^”]*)”))?\s*>([\s\S]*?)<\/say>/gi;
function Mc(e) {
  const t = new RegExp(Po.source, Po.flags), n = [];
  let s, o = 0;
  for (; (s = t.exec(e)) !== null; ) {
    const i = (s[1] ?? s[2])?.trim(), r = s[3].trim();
    r && (n.push({ index: o, text: r, ...i ? { char: i } : {} }), o += 1);
  }
  return n;
}
const Ac = /* @__PURE__ */ new Set([
  "laughs",
  "chuckle",
  "coughs",
  "clear-throat",
  "groans",
  "breath",
  "pant",
  "inhale",
  "exhale",
  "gasps",
  "sniffs",
  "sighs",
  "snorts",
  "burps",
  "lip-smacking",
  "humming",
  "hissing",
  "emm",
  "sneezes"
]), tr = /\(([a-z-]+)\)/gi, Ic = /\([a-z-]+\)/gi;
function Ks(e) {
  return e.replace(/\s{2,}/g, " ").trim();
}
function Rc(e) {
  return Ks(
    e.replace(tr, (t, n) => {
      const s = String(n).toLowerCase();
      return Ac.has(s) ? `(${s})` : "";
    })
  );
}
function Pc(e) {
  return Ks(e.replace(tr, ""));
}
function Nc(e) {
  return Ks(e.replace(Ic, ""));
}
function Vc(e, t) {
  const n = Rc(e);
  return t === "local_gsvi" ? Nc(n) : n;
}
async function Gc(e, t) {
  if (e.length === 0)
    return;
  const n = Math.max(1, Math.min(Math.floor(t), e.length));
  let s = 0;
  const o = Array.from({ length: n }, async () => {
    for (; s < e.length; ) {
      const i = s;
      s += 1, await e[i]();
    }
  });
  await Promise.all(o);
}
const dn = "data-tavern-multi-tts-rendered", zs = "data-tavern-multi-tts-swipe", Jn = "tavern-multi-tts-segment", Vn = "tavern-multi-tts-fallback-list";
function Lc(e, t, n) {
  return `${e}:${t}:${n}`;
}
function Oc(e) {
  const t = e.split(":");
  if (t.length !== 3)
    return null;
  const n = Number(t[0]), s = Number(t[1]), o = Number(t[2]);
  return [n, s, o].every(Number.isFinite) ? { message_id: n, swipe_id: s, index: o } : null;
}
function $c(e) {
  return document.querySelector(`#chat .mes[mesid="${e}"]`);
}
function Dc(e) {
  return e.querySelector(".mes_text");
}
function nr(e, t) {
  const n = e.getAttribute(dn) === "true", s = e.querySelector(`.${Jn}`) !== null;
  return !n || !s ? !1 : t === void 0 ? !0 : e.getAttribute(zs) === String(t);
}
function As(e = document) {
  e.querySelectorAll(`.${Jn}`).forEach((t) => {
    const n = t.querySelector(".tavern-multi-tts-text")?.textContent ?? "";
    t.replaceWith(document.createTextNode(n));
  }), e.querySelectorAll(`.${Vn}`).forEach((t) => t.remove()), e.querySelectorAll(`[${dn}]`).forEach((t) => {
    t.removeAttribute(dn), t.removeAttribute(zs);
  });
}
function et(e, t) {
  e.classList.remove("is-loading", "is-ready", "is-playing", "is-error"), t !== "idle" && e.classList.add(`is-${t}`);
  const n = e.querySelector(".tavern-multi-tts-indicator");
  n && (n.textContent = t === "loading" ? "⏳" : t === "ready" ? "▶" : t === "playing" ? "⏸" : t === "error" ? "⚠" : "▶");
}
function No(e) {
  return e.replace(/\s+/g, "").trim();
}
function jc(e, t, n, s) {
  const o = e.splitText(t);
  o.splitText(n), o.replaceWith(s);
}
function Uc(e, t, n, s) {
  const o = [t, n].map((l) => l.trim()).filter(Boolean), i = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let r = i.nextNode();
  for (; r; ) {
    const l = r.parentElement;
    if (l && !l.closest(`.${Jn}`) && !l.closest(`.${Vn}`) && !l.closest(".mes_buttons")) {
      const a = r.nodeValue ?? "";
      for (const u of o) {
        const f = a.indexOf(u);
        if (f >= 0)
          return jc(r, f, u.length, s), !0;
        if (No(a) === No(u))
          return r.replaceWith(s), !0;
      }
    }
    r = i.nextNode();
  }
  return !1;
}
function kc(e, t, n, s, o, i, r) {
  const l = Lc(e, t, n.index), a = document.createElement("span");
  a.className = Jn, a.dataset.tavernMultiTtsKey = l;
  const u = document.createElement("span");
  u.className = "tavern-multi-tts-text", u.textContent = s;
  const f = document.createElement("span");
  f.className = "tavern-multi-tts-indicator", f.textContent = "▶";
  const m = document.createElement("span");
  m.className = "tavern-multi-tts-actions";
  const w = document.createElement("button");
  w.type = "button", w.className = "tavern-multi-tts-action", w.textContent = "下", m.append(w), a.append(u, f, m), et(a, "idle");
  let S = r.get(l) ?? null;
  const N = async () => {
    et(a, "loading");
    try {
      const G = await i.ensureAudio(n, s, o);
      return G ? (et(a, "ready"), G) : (et(a, "error"), null);
    } catch {
      return et(a, "error"), null;
    }
  }, A = async () => {
    const G = await N();
    G && (S?.stop(), S = Hi(
      G,
      () => et(a, "playing"),
      () => {
        S = null, r.delete(l), et(a, "ready");
      },
      () => {
        S = null, r.delete(l), et(a, "error");
      },
      () => et(a, "ready")
    ), r.set(l, S));
  }, P = async () => {
    if (!S)
      return;
    const G = S.getState();
    if (G === "playing") {
      S.pause();
      return;
    }
    if (G === "paused")
      try {
        await S.resume();
      } catch {
      }
  };
  return a.addEventListener("click", (G) => {
    const $ = G.target;
    if ($?.closest(".tavern-multi-tts-indicator")) {
      P();
      return;
    }
    $?.closest(".tavern-multi-tts-action") || A();
  }), w.addEventListener("click", (G) => {
    G.preventDefault(), G.stopPropagation(), (async () => {
      const $ = await N();
      $ && i.downloadAudio($, e, n.index);
    })();
  }), a;
}
function Fc(e, t, n, s, o, i = 0) {
  if (nr(e, i))
    return 0;
  e.getAttribute(dn) === "true" && As(e);
  const r = Dc(e) ?? e, l = [];
  let a = 0;
  for (const u of n) {
    if (!u.displayText || !u.ttsText)
      continue;
    const f = kc(
      t,
      i,
      u,
      u.displayText,
      u.ttsText,
      s,
      o
    );
    Uc(r, u.text, u.displayText, f) ? a += 1 : l.push(f);
  }
  if (r.querySelectorAll(`.${Vn}`).forEach((u) => u.remove()), l.length > 0) {
    const u = document.createElement("div");
    u.className = Vn, l.forEach((f) => u.append(f, document.createTextNode(" "))), r.append(u), a += l.length;
  }
  return a > 0 && (e.setAttribute(dn, "true"), e.setAttribute(zs, String(i))), a;
}
function sr(e, t) {
  const n = t?.trim() ?? "";
  return n ? (e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.characterMappings).some((o) => o.characterName.trim() === n) : !0;
}
function or(e, t) {
  const n = t?.trim() ?? "";
  if (e.ttsEngine === "local_gsvi") {
    const o = e.gsviCharacterMappings.find(
      (i) => i.characterName.trim() === n
    );
    return {
      engine: "local_gsvi",
      gsviVoiceId: o?.gsviVoiceId?.trim() || e.localGsviModel.trim(),
      gsviLanguage: o?.gsviLanguage?.trim() || e.localGsviLanguage.trim(),
      gsviEmotion: o?.gsviEmotion?.trim() || e.localGsviEmotion.trim()
    };
  }
  return {
    engine: "minimax",
    minimaxVoiceId: e.characterMappings.find(
      (o) => o.characterName.trim() === n
    )?.minimaxVoiceId?.trim() || e.voiceId.trim() || e.voiceCatalogSelectedId.trim()
  };
}
function ir(e, t, n) {
  if (!sr(e, n))
    return null;
  const s = or(e, n);
  return s.engine === "local_gsvi" ? !e.localGsviBaseUrl.trim() || !s.gsviVoiceId || !s.gsviLanguage || !s.gsviEmotion ? null : {
    engine: "local_gsvi",
    text: t,
    baseUrl: e.localGsviBaseUrl,
    authToken: e.localGsviAuthToken || void 0,
    modelId: s.gsviVoiceId,
    language: s.gsviLanguage,
    emotion: s.gsviEmotion,
    format: e.localGsviFormat,
    speed: e.speed,
    topK: e.localGsviTopK,
    topP: e.localGsviTopP,
    temperature: e.localGsviTemperature,
    textLang: e.localGsviTextLang,
    textSplitMethod: e.localGsviTextSplitMethod,
    batchSize: e.localGsviBatchSize,
    timeoutMs: e.requestTimeoutMs
  } : !e.apiKey.trim() || !e.groupId.trim() || !s.minimaxVoiceId ? null : {
    engine: "minimax",
    text: t,
    apiKey: e.apiKey,
    groupId: e.groupId,
    voiceId: s.minimaxVoiceId,
    model: e.model,
    speed: e.speed,
    vol: e.vol,
    region: e.minimaxRegion,
    timeoutMs: e.requestTimeoutMs
  };
}
function Bc(e) {
  return e.ttsEngine === "local_gsvi" ? e.localGsviBaseUrl.trim() ? {
    engine: "local_gsvi",
    text: "catalog",
    baseUrl: e.localGsviBaseUrl,
    authToken: e.localGsviAuthToken || void 0,
    modelId: e.localGsviModel.trim() || "catalog",
    language: e.localGsviLanguage.trim() || "ja",
    emotion: e.localGsviEmotion.trim() || "neutral",
    format: e.localGsviFormat,
    speed: e.speed,
    topK: e.localGsviTopK,
    topP: e.localGsviTopP,
    temperature: e.localGsviTemperature,
    textLang: e.localGsviTextLang,
    textSplitMethod: e.localGsviTextSplitMethod,
    batchSize: e.localGsviBatchSize,
    timeoutMs: e.requestTimeoutMs
  } : null : e.apiKey.trim() ? {
    engine: "minimax",
    text: "catalog",
    apiKey: e.apiKey,
    groupId: e.groupId,
    voiceId: e.voiceId.trim() || e.voiceCatalogSelectedId.trim() || "catalog",
    model: e.model,
    speed: e.speed,
    vol: e.vol,
    region: e.minimaxRegion,
    timeoutMs: e.requestTimeoutMs
  } : null;
}
function Hc(e, t, n) {
  const s = or(e, n);
  return e.ttsEngine === "local_gsvi" ? {
    text: t,
    engine: "local_gsvi",
    localGsvi: {
      origin: _a(e.localGsviBaseUrl),
      model: s.gsviVoiceId ?? "",
      format: e.localGsviFormat,
      useReferenceAudio: e.localGsviUseReferenceAudio,
      character: e.localGsviCharacter,
      language: s.gsviLanguage ?? "",
      emotion: s.gsviEmotion ?? "",
      referenceText: e.localGsviReferenceText,
      speed: e.speed,
      topK: e.localGsviTopK,
      topP: e.localGsviTopP,
      temperature: e.localGsviTemperature,
      textLang: e.localGsviTextLang,
      textSplitMethod: e.localGsviTextSplitMethod
    }
  } : {
    text: t,
    engine: "minimax",
    minimax: {
      region: e.minimaxRegion,
      groupId: e.groupId,
      model: e.model,
      voiceId: s.minimaxVoiceId ?? "",
      speed: e.speed,
      vol: e.vol,
      format: "mp3"
    }
  };
}
const Kc = 15;
function zc(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map(), o = [];
  let i = !1, r = !1;
  function l() {
    return e.getSettings();
  }
  function a() {
    r || !document.querySelector(".minimax-tts-segment") || (r = !0, e.warn?.("检测到旧酒馆助手 Multi-TTS 仍在装饰消息。请只启用其中一个，避免重复生成。"));
  }
  async function u(C, D, ne) {
    const B = l(), se = ir(B, D, ne);
    if (!se)
      return null;
    const ct = Hc(B, D, ne), ve = await ya(ct), pe = s.get(ve);
    if (pe)
      return pe;
    const Se = await Ta(ve);
    if (Se)
      return s.set(ve, Se), Se;
    const Ae = await Cs(se.engine).synthesize(se);
    return await Ca(ve, Ae), s.set(ve, Ae), Ae;
  }
  function f(C, D) {
    if (typeof C.swipe_id == "number" && Number.isFinite(C.swipe_id))
      return C.swipe_id;
    const ne = Number(D?.getAttribute("swipeid"));
    return Number.isFinite(ne) ? ne : 0;
  }
  function m(C, D) {
    for (const [ne, B] of t) {
      const se = Oc(ne);
      se && se.message_id === C && se.swipe_id !== D && (B.stop(), t.delete(ne));
    }
  }
  function w(C, D = {}) {
    const ne = D.attempt ?? 0, B = l();
    if (!B.enabled)
      return;
    const se = e.getChatMessage(C);
    if (!se || se.is_user || se.is_system)
      return;
    const ct = typeof se.mes == "string" ? se.mes : "", ve = Mc(ct).filter(
      (le) => sr(B, le.char)
    );
    if (ve.length === 0)
      return;
    const pe = e.findMessageElement(C) ?? $c(C);
    if (!pe) {
      ne < Kc && window.setTimeout(() => w(C, { ...D, attempt: ne + 1 }), 120);
      return;
    }
    const Se = f(se, pe);
    if (nr(pe, Se))
      return;
    pe.getAttribute("data-tavern-multi-tts-rendered") === "true" && As(pe), m(C, Se), a();
    const mt = ve.map((le) => ({
      ...le,
      displayText: Pc(le.text),
      ttsText: Vc(le.text, B.ttsEngine)
    })), Ae = [], Tt = (le) => D.skipPrefetch ? !1 : B.prefetchMode === "auto_all" ? !0 : B.prefetchMode === "auto_first_n" ? le < B.prefetchFirstCount : !1;
    Fc(
      pe,
      C,
      mt,
      {
        ensureAudio: async (le, $e, Ye) => {
          const Ze = `${C}:${Se}:${le.index}`;
          if (n.has(Ze))
            return null;
          n.add(Ze);
          try {
            return await u(le.text, Ye, le.char);
          } catch {
            return console.error(`${be} synthesize failed`), null;
          } finally {
            n.delete(Ze);
          }
        },
        downloadAudio(le, $e, Ye) {
          Ia(le, Aa($e, Ye));
        }
      },
      t,
      Se
    ), mt.forEach((le, $e) => {
      Tt($e) && le.ttsText && Ae.push(async () => {
        try {
          await u(le.text, le.ttsText, le.char);
        } catch {
        }
      });
    }), Ae.length > 0 && Gc(Ae, B.maxConcurrency);
  }
  function S(...C) {
    const D = Number(C[0]);
    Number.isFinite(D) && window.setTimeout(() => w(D), 0);
  }
  function N(...C) {
    const D = Number(C[0]);
    Number.isFinite(D) && window.setTimeout(() => w(D, { skipPrefetch: !0 }), 0);
  }
  function A(C = {}) {
    document.querySelectorAll("#chat .mes[mesid]").forEach((D) => {
      const ne = Number(D.getAttribute("mesid"));
      Number.isFinite(ne) && w(ne, C);
    });
  }
  function P(C, D) {
    e.eventSource.on(C, D), o.push(() => e.eventSource.removeListener(C, D));
  }
  function G() {
    i || (i = !0, ps(e, l()), P(e.eventNames.messageReceived, S), P(e.eventNames.messageRendered, S), P(e.eventNames.messageUpdated, S), P(e.eventNames.messageSwiped, N), P(e.eventNames.moreMessagesLoaded, () => {
      A({ skipPrefetch: !0 });
    }), P(e.eventNames.chatChanged, () => {
      ps(e, l()), A({ skipPrefetch: !0 });
    }), A({ skipPrefetch: !0 }), console.info(`${be} chat runtime started`));
  }
  function $() {
    o.splice(0).forEach((C) => C()), t.forEach((C) => C.stop()), t.clear(), n.clear(), s.clear(), Bi(), Cc(e), As(document), i = !1, console.info(`${be} chat runtime stopped`);
  }
  function X() {
    ps(e, l()), l().enabled && A();
  }
  return { start: G, stop: $, syncFromSettings: X, decorate: w };
}
function pt(e) {
  return typeof e == "object" && e !== null;
}
function Wc(e) {
  if (pt(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function Jc(e) {
  return !pt(e) || typeof e.getContext != "function" ? null : e;
}
function Xc(e) {
  if (!pt(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!pt(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = Wc(e.eventSource), n = pt(e.eventTypes) ? e.eventTypes : pt(e.event_types) ? e.event_types : void 0, s = n ? {
    APP_READY: typeof n.APP_READY == "string" ? n.APP_READY : void 0,
    MESSAGE_RECEIVED: typeof n.MESSAGE_RECEIVED == "string" ? n.MESSAGE_RECEIVED : void 0,
    CHARACTER_MESSAGE_RENDERED: typeof n.CHARACTER_MESSAGE_RENDERED == "string" ? n.CHARACTER_MESSAGE_RENDERED : void 0,
    MESSAGE_UPDATED: typeof n.MESSAGE_UPDATED == "string" ? n.MESSAGE_UPDATED : void 0,
    MESSAGE_SWIPED: typeof n.MESSAGE_SWIPED == "string" ? n.MESSAGE_SWIPED : void 0,
    MORE_MESSAGES_LOADED: typeof n.MORE_MESSAGES_LOADED == "string" ? n.MORE_MESSAGES_LOADED : void 0,
    CHAT_CHANGED: typeof n.CHAT_CHANGED == "string" ? n.CHAT_CHANGED : void 0
  } : void 0;
  return {
    extensionSettings: e.extensionSettings,
    saveSettingsDebounced: e.saveSettingsDebounced,
    eventSource: t,
    eventTypes: s,
    chat: e.chat,
    setExtensionPrompt: typeof e.setExtensionPrompt == "function" ? e.setExtensionPrompt : void 0,
    extensionPrompts: pt(e.extensionPrompts) ? e.extensionPrompts : void 0
  };
}
function rr() {
  const e = Jc(globalThis.SillyTavern);
  if (!e)
    throw new Error(
      "SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行"
    );
  return Xc(e.getContext());
}
function lr() {
  const e = rr();
  return {
    readRawSettings() {
      return e.extensionSettings[cs];
    },
    writeSettings(t) {
      e.extensionSettings[cs] = t, e.saveSettingsDebounced();
    },
    removeSettings() {
      delete e.extensionSettings[cs], e.saveSettingsDebounced();
    },
    findSettingsRoot: Fa,
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
function Yc(e) {
  return pt(e) ? {
    mes: typeof e.mes == "string" ? e.mes : void 0,
    is_user: typeof e.is_user == "boolean" ? e.is_user : void 0,
    is_system: typeof e.is_system == "boolean" ? e.is_system : void 0,
    swipe_id: typeof e.swipe_id == "number" ? e.swipe_id : void 0
  } : null;
}
function Zc(e) {
  const t = rr();
  if (!t.eventSource)
    throw new Error("SillyTavern eventSource 不可用，无法监听消息事件");
  const n = t.eventSource;
  return {
    getSettings: e,
    getChatMessage(s) {
      return Array.isArray(t.chat) ? Yc(t.chat[s]) : null;
    },
    findMessageElement(s) {
      return document.querySelector(`#chat .mes[mesid="${s}"]`);
    },
    setExtensionPrompt(s, o, i, r, l, a) {
      if (!t.setExtensionPrompt)
        throw new Error("SillyTavern.setExtensionPrompt 不可用，无法注入提示词");
      t.setExtensionPrompt(s, o, i, r, l, a);
    },
    deleteExtensionPrompt(s) {
      if (t.extensionPrompts && s in t.extensionPrompts) {
        delete t.extensionPrompts[s];
        return;
      }
      t.setExtensionPrompt?.(s, "", 1, 0, !1, 0);
    },
    eventSource: n,
    eventNames: {
      messageReceived: t.eventTypes?.MESSAGE_RECEIVED ?? "message_received",
      messageRendered: t.eventTypes?.CHARACTER_MESSAGE_RENDERED ?? "character_message_rendered",
      messageUpdated: t.eventTypes?.MESSAGE_UPDATED ?? "message_updated",
      messageSwiped: t.eventTypes?.MESSAGE_SWIPED ?? "message_swiped",
      moreMessagesLoaded: t.eventTypes?.MORE_MESSAGES_LOADED ?? "more_messages_loaded",
      chatChanged: t.eventTypes?.CHAT_CHANGED ?? "chat_id_changed"
    },
    warn(s) {
      const o = globalThis.toastr;
      if (typeof o?.warning == "function") {
        o.warning(s, be);
        return;
      }
      console.warn(`${be} ${s}`);
    }
  };
}
function Qc(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    const s = n.trim();
    s && t.set(s, (t.get(s) ?? 0) + 1);
  }), [...t.entries()].filter(([, n]) => n > 1).map(([n]) => n);
}
function Vo(e) {
  return [...e].sort((t, n) => t.name.localeCompare(n.name));
}
function Go(e, t, n, s) {
  const o = t.trim();
  if (!o)
    return { error: "请先填写存档名称" };
  if (n.length === 0)
    return { error: "当前没有可保存的完整映射" };
  const i = e.map((a) => ({
    name: a.name,
    mappings: [...a.mappings]
  })), r = i.findIndex((a) => a.name === o);
  if (r >= 0 && !s)
    return { error: `存档「${o}」已存在` };
  const l = { name: o, mappings: [...n] };
  return r >= 0 ? (i[r] = l, { presets: i, message: `已更新存档：${o}` }) : (i.push(l), { presets: i, message: `已保存存档：${o}` });
}
function Lo(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.find((o) => o.name === n);
  return s ? { mappings: [...s.mappings] } : { error: `未找到存档：${n}` };
}
function Oo(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.filter((o) => o.name !== n);
  return s.length === e.length ? { error: `未找到存档：${n}` } : { presets: s, message: `已删除存档：${n}` };
}
const qc = {
  ja: "おはようございます。これは Tavern Multi-TTS のテスト音声です。",
  zh: "你好，这是 Tavern Multi-TTS 的测试语音。",
  en: "Hello, this is a Tavern Multi-TTS test voice."
}, eu = {
  ja: "こんにちは、これは GSVI の音声参照用サンプルです。",
  zh: "你好，这是一段 GSVI 的语音参考音频。",
  en: "Hello, this is a GSVI reference voice sample."
}, tu = [
  "中文",
  "英语",
  "日语",
  "粤语",
  "韩语",
  "中英混合",
  "日英混合",
  "粤英混合",
  "韩英混合",
  "多语种混合",
  "多语种混合(粤语)"
], nu = [
  "不切",
  "凑四句一切",
  "凑50字一切",
  "按中文句号。切",
  "按英文句号.切",
  "按标点符号切"
];
function su(e, t) {
  return e === "local_gsvi" ? eu[t] : qc[t];
}
function ou(e) {
  return [
    ...new Set(e.map((t) => t.language).filter((t) => !!t))
  ].sort();
}
function iu(e, t) {
  const n = t.search.trim().toLowerCase();
  return e.filter((s) => t.language !== "all" && s.language !== t.language || t.gender !== "all" && s.gender !== t.gender || t.source !== "all" && s.source !== t.source ? !1 : n ? [s.id, s.name, ...s.description ?? []].join(" ").toLowerCase().includes(n) : !0);
}
function $o(e) {
  const t = [e.language, e.gender, e.source].filter(Boolean);
  return t.length > 0 ? `${e.name} (${t.join(" / ")})` : e.name;
}
function Do(e) {
  return e?.languages ?? [];
}
function jo(e, t) {
  const n = t.trim();
  return !e || !n ? [] : e.emotionsByLanguage?.[n] ?? [];
}
function Uo(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(2)} MB`;
}
const ru = { class: "tavern-multi-tts-settings" }, lu = { class: "inline-drawer" }, au = { class: "inline-drawer-toggle inline-drawer-header" }, cu = { class: "inline-drawer-content" }, uu = { class: "tavern-multi-tts-toolbar" }, fu = { class: "tavern-multi-tts-version" }, du = { class: "tavern-multi-tts-row" }, pu = { class: "checkbox_label" }, mu = { class: "tavern-multi-tts-field" }, hu = { class: "tavern-multi-tts-grid" }, gu = { class: "tavern-multi-tts-field" }, vu = { class: "tavern-multi-tts-field" }, _u = { class: "tavern-multi-tts-field" }, yu = { class: "tavern-multi-tts-actions" }, bu = ["disabled"], xu = ["disabled"], Su = { class: "tavern-multi-tts-grid" }, wu = ["value"], Eu = { class: "tavern-multi-tts-field" }, Tu = ["value"], Cu = { value: "" }, Mu = ["value"], Au = { class: "tavern-multi-tts-grid" }, Iu = { class: "tavern-multi-tts-field" }, Ru = ["value"], Pu = { class: "tavern-multi-tts-field" }, Nu = { class: "tavern-multi-tts-field" }, Vu = { class: "tavern-multi-tts-field" }, Gu = { class: "tavern-multi-tts-actions" }, Lu = ["disabled"], Ou = { class: "tavern-multi-tts-grid" }, $u = { class: "tavern-multi-tts-field" }, Du = { value: "" }, ju = ["value"], Uu = { class: "tavern-multi-tts-field" }, ku = ["value"], Fu = { class: "tavern-multi-tts-field" }, Bu = ["value"], Hu = { class: "tavern-multi-tts-field" }, Ku = {
  class: "tavern-multi-tts-section",
  open: ""
}, zu = { class: "tavern-multi-tts-actions" }, Wu = ["value"], Ju = ["disabled"], Xu = ["disabled"], Yu = ["onUpdate:modelValue"], Zu = ["onUpdate:modelValue"], Qu = ["value", "onChange"], qu = ["value"], ef = ["disabled", "onClick"], tf = ["onClick"], nf = ["onUpdate:modelValue"], sf = ["onUpdate:modelValue"], of = { value: "" }, rf = ["value"], lf = ["onUpdate:modelValue"], af = ["value"], cf = ["onUpdate:modelValue"], uf = ["value"], ff = ["disabled", "onClick"], df = ["onClick"], pf = {
  key: 2,
  class: "tavern-multi-tts-hint"
}, mf = { class: "tavern-multi-tts-row" }, hf = { class: "checkbox_label" }, gf = ["disabled"], vf = { class: "tavern-multi-tts-section" }, _f = { class: "tavern-multi-tts-field" }, yf = {
  key: 0,
  class: "tavern-multi-tts-grid"
}, bf = {
  key: 0,
  class: "tavern-multi-tts-field"
}, xf = { class: "tavern-multi-tts-field" }, Sf = { class: "tavern-multi-tts-field" }, wf = { class: "tavern-multi-tts-field" }, Ef = { class: "tavern-multi-tts-field" }, Tf = { class: "tavern-multi-tts-field" }, Cf = { class: "tavern-multi-tts-grid" }, Mf = { class: "tavern-multi-tts-field" }, Af = ["value"], If = { class: "tavern-multi-tts-field" }, Rf = ["value"], Pf = { class: "tavern-multi-tts-field" }, Nf = { class: "tavern-multi-tts-actions" }, Vf = ["disabled"], Gf = ["disabled"], Lf = { class: "tavern-multi-tts-hint" }, Of = /* @__PURE__ */ ol({
  __name: "settings-panel",
  props: {
    displayName: {},
    version: {},
    settings: {},
    onSettingsChange: { type: Function }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Ds(Lt(t.settings)), s = /* @__PURE__ */ Ne(""), o = /* @__PURE__ */ Ne(!1), i = /* @__PURE__ */ Ne([]), r = /* @__PURE__ */ Ne(""), l = /* @__PURE__ */ Ne("all"), a = /* @__PURE__ */ Ne("all"), u = /* @__PURE__ */ Ne("all"), f = /* @__PURE__ */ Ne(""), m = /* @__PURE__ */ Ne(""), w = /* @__PURE__ */ Ne(0), S = /* @__PURE__ */ Ne(0), N = qe(() => n.ttsEngine === "minimax"), A = qe(
      () => iu(i.value, {
        search: r.value,
        language: l.value,
        gender: a.value,
        source: u.value
      })
    ), P = qe(() => ou(i.value)), G = qe(
      () => i.value.find((M) => M.id === n.localGsviModel)
    ), $ = qe(() => Do(G.value)), X = qe(
      () => jo(G.value, n.localGsviLanguage)
    ), C = qe(
      () => N.value ? Vo(n.characterMappingPresets) : Vo(n.gsviCharacterMappingPresets)
    ), D = qe(
      () => Qc(
        (N.value ? n.characterMappings : n.gsviCharacterMappings).map(
          (M) => M.characterName
        )
      )
    ), ne = qe(() => Uo(S.value));
    el(
      n,
      () => {
        t.onSettingsChange(Lt(n));
      },
      { deep: !0 }
    );
    function B(M) {
      s.value = M;
    }
    function se(M, p) {
      if (Ba(M)) {
        B(M.message);
        return;
      }
      B(M instanceof Error ? M.message : p);
    }
    function ct() {
      return n.characterMappings.map((M) => ({
        characterName: M.characterName.trim(),
        minimaxVoiceId: M.minimaxVoiceId.trim()
      })).filter((M) => M.characterName && M.minimaxVoiceId);
    }
    function ve() {
      return n.gsviCharacterMappings.map((M) => ({
        characterName: M.characterName.trim(),
        gsviVoiceId: M.gsviVoiceId.trim(),
        gsviLanguage: M.gsviLanguage.trim(),
        gsviEmotion: M.gsviEmotion.trim()
      })).filter(
        (M) => M.characterName && M.gsviVoiceId && M.gsviLanguage && M.gsviEmotion
      );
    }
    async function pe(M, p, h) {
      if (!o.value) {
        o.value = !0, B(p);
        try {
          await M();
        } catch (we) {
          se(we, h);
        } finally {
          o.value = !1;
        }
      }
    }
    async function Se(M = !1) {
      await pe(
        async () => {
          const p = Bc(n);
          if (!p) {
            B(N.value ? "请先填写 API Key" : "请先填写 Local-GSVI 服务地址");
            return;
          }
          p.engine === "minimax" && (p.forceRefresh = M), i.value = await Cs(n.ttsEngine).listVoices(p), B(`已加载 ${i.value.length} 个${N.value ? "音色" : "模型"}`);
        },
        "正在拉取列表…",
        "拉取列表失败"
      );
    }
    function mt(M) {
      n.voiceId = M, n.voiceCatalogSelectedId = M;
    }
    function Ae() {
      if (N.value) {
        n.characterMappings.push({ characterName: "", minimaxVoiceId: "" });
        return;
      }
      n.gsviCharacterMappings.push({
        characterName: "",
        gsviVoiceId: "",
        gsviLanguage: "",
        gsviEmotion: ""
      });
    }
    function Tt(M) {
      if (N.value) {
        n.characterMappings.splice(M, 1);
        return;
      }
      n.gsviCharacterMappings.splice(M, 1);
    }
    function le() {
      const M = f.value, p = C.value.some((we) => we.name === M.trim());
      if (p && !window.confirm(`存档「${M.trim()}」已存在，要覆盖吗？`))
        return;
      const h = N.value ? Go(n.characterMappingPresets, M, ct(), p) : Go(n.gsviCharacterMappingPresets, M, ve(), p);
      if ("error" in h) {
        B(h.error);
        return;
      }
      N.value ? n.characterMappingPresets = h.presets : n.gsviCharacterMappingPresets = h.presets, m.value = M.trim(), B(h.message);
    }
    function $e() {
      const M = N.value ? Lo(n.characterMappingPresets, m.value) : Lo(n.gsviCharacterMappingPresets, m.value);
      if ("error" in M) {
        B(M.error);
        return;
      }
      (N.value ? ct().length > 0 : ve().length > 0) && !window.confirm("读取存档会覆盖当前映射，确定继续吗？") || (N.value ? n.characterMappings = M.mappings : n.gsviCharacterMappings = M.mappings, B(`已读取存档：${m.value}`));
    }
    function Ye() {
      if (!window.confirm(`确定删除存档「${m.value}」吗？`))
        return;
      const M = N.value ? Oo(n.characterMappingPresets, m.value) : Oo(n.gsviCharacterMappingPresets, m.value);
      if ("error" in M) {
        B(M.error);
        return;
      }
      N.value ? n.characterMappingPresets = M.presets : n.gsviCharacterMappingPresets = M.presets, m.value = "", B(M.message);
    }
    async function Ze(M) {
      await pe(
        async () => {
          const p = su(n.ttsEngine, n.testLanguage), h = ir(n, p, M);
          if (!h) {
            B(
              M ? `角色「${M}」未完整映射，无法测试` : "请先补全当前引擎的默认音色/模型后再测试"
            );
            return;
          }
          const we = await Cs(n.ttsEngine).synthesize(h);
          Hi(we), B(M ? `正在试听「${M}」` : "正在试听默认音色");
        },
        "正在合成测试语音…",
        "测试语音失败"
      );
    }
    async function Kt() {
      await pe(
        async () => {
          const M = await Ma();
          w.value = M.count, S.value = M.totalBytes, B(`缓存 ${M.count} 条，${Uo(M.totalBytes)}`);
        },
        "正在读取缓存…",
        "读取缓存失败"
      );
    }
    async function Ct() {
      window.confirm("确定清空本扩展的音频缓存吗？") && await pe(
        async () => {
          await Fi(), w.value = 0, S.value = 0, B("已清空音频缓存");
        },
        "正在清空缓存…",
        "清空缓存失败"
      );
    }
    function De() {
      window.confirm("确定恢复默认设置吗？当前映射和密钥都会被清空。") && (Object.assign(n, Lt(Ft)), i.value = [], B("已恢复默认设置"));
    }
    function gn() {
      $.value.includes(n.localGsviLanguage) || (n.localGsviLanguage = "", n.localGsviEmotion = "");
    }
    function Xn(M) {
      return Do(i.value.find((p) => p.id === M));
    }
    function Yn(M, p) {
      return jo(
        i.value.find((h) => h.id === M),
        p
      );
    }
    return Kt().catch((M) => se(M, "读取缓存失败")), (M, p) => (j(), k("div", ru, [
      g("div", lu, [
        g("div", au, [
          g("b", null, z(e.displayName), 1),
          p[37] || (p[37] = g("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        g("div", cu, [
          g("div", uu, [
            g("small", fu, z(e.version), 1),
            g("small", {
              class: Un(["tavern-multi-tts-status", { "is-busy": o.value }])
            }, z(s.value || "更改会自动保存"), 3)
          ]),
          g("div", du, [
            g("label", pu, [
              H(g("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (h) => n.enabled = h),
                type: "checkbox"
              }, null, 512), [
                [So, n.enabled]
              ]),
              p[38] || (p[38] = g("span", null, "启用", -1))
            ]),
            H(g("select", {
              "onUpdate:modelValue": p[1] || (p[1] = (h) => n.ttsEngine = h),
              class: "text_pole tavern-multi-tts-engine"
            }, [...p[39] || (p[39] = [
              g("option", { value: "minimax" }, "MiniMax", -1),
              g("option", { value: "local_gsvi" }, "Local-GSVI", -1)
            ])], 512), [
              [de, n.ttsEngine]
            ])
          ]),
          N.value ? (j(), k(Z, { key: 0 }, [
            g("label", mu, [
              p[40] || (p[40] = oe(" API Key ", -1)),
              H(g("input", {
                "onUpdate:modelValue": p[2] || (p[2] = (h) => n.apiKey = h),
                class: "text_pole",
                type: "password",
                autocomplete: "off"
              }, null, 512), [
                [fe, n.apiKey]
              ])
            ]),
            g("div", hu, [
              g("label", gu, [
                p[41] || (p[41] = oe(" Group ID ", -1)),
                H(g("input", {
                  "onUpdate:modelValue": p[3] || (p[3] = (h) => n.groupId = h),
                  class: "text_pole",
                  type: "text"
                }, null, 512), [
                  [fe, n.groupId]
                ])
              ]),
              g("label", vu, [
                p[43] || (p[43] = oe(" 区域 ", -1)),
                H(g("select", {
                  "onUpdate:modelValue": p[4] || (p[4] = (h) => n.minimaxRegion = h),
                  class: "text_pole"
                }, [...p[42] || (p[42] = [
                  g("option", { value: "international" }, "国际", -1),
                  g("option", { value: "beijing" }, "北京", -1)
                ])], 512), [
                  [de, n.minimaxRegion]
                ])
              ])
            ]),
            g("label", _u, [
              p[44] || (p[44] = oe(" 默认音色 ", -1)),
              H(g("input", {
                "onUpdate:modelValue": p[5] || (p[5] = (h) => n.voiceId = h),
                class: "text_pole",
                type: "text",
                placeholder: "无 char 的台词使用"
              }, null, 512), [
                [fe, n.voiceId]
              ])
            ]),
            g("div", yu, [
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: o.value,
                onClick: p[6] || (p[6] = (h) => Se(!1))
              }, " 拉取音色 ", 8, bu),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: o.value,
                onClick: p[7] || (p[7] = (h) => Se(!0))
              }, " 刷新音色 ", 8, xu)
            ]),
            i.value.length > 0 ? (j(), k(Z, { key: 0 }, [
              g("div", Su, [
                H(g("input", {
                  "onUpdate:modelValue": p[8] || (p[8] = (h) => r.value = h),
                  class: "text_pole",
                  type: "search",
                  placeholder: "搜索音色"
                }, null, 512), [
                  [fe, r.value]
                ]),
                H(g("select", {
                  "onUpdate:modelValue": p[9] || (p[9] = (h) => l.value = h),
                  class: "text_pole"
                }, [
                  p[45] || (p[45] = g("option", { value: "all" }, "全部语言", -1)),
                  (j(!0), k(Z, null, _e(P.value, (h) => (j(), k("option", {
                    key: h,
                    value: h
                  }, z(h), 9, wu))), 128))
                ], 512), [
                  [de, l.value]
                ]),
                H(g("select", {
                  "onUpdate:modelValue": p[10] || (p[10] = (h) => a.value = h),
                  class: "text_pole"
                }, [...p[46] || (p[46] = [
                  g("option", { value: "all" }, "全部性别", -1),
                  g("option", { value: "Female" }, "Female", -1),
                  g("option", { value: "Male" }, "Male", -1),
                  g("option", { value: "Unknown" }, "Unknown", -1)
                ])], 512), [
                  [de, a.value]
                ]),
                H(g("select", {
                  "onUpdate:modelValue": p[11] || (p[11] = (h) => u.value = h),
                  class: "text_pole"
                }, [...p[47] || (p[47] = [
                  g("option", { value: "all" }, "全部来源", -1),
                  g("option", { value: "system" }, "system", -1),
                  g("option", { value: "voice_cloning" }, "voice_cloning", -1),
                  g("option", { value: "voice_generation" }, "voice_generation", -1)
                ])], 512), [
                  [de, u.value]
                ])
              ]),
              g("label", Eu, [
                p[48] || (p[48] = oe(" 从列表填入默认音色 ", -1)),
                g("select", {
                  class: "text_pole",
                  value: n.voiceId,
                  onChange: p[12] || (p[12] = (h) => mt(h.target.value))
                }, [
                  g("option", Cu, z(A.value.length) + " 条可选", 1),
                  (j(!0), k(Z, null, _e(A.value, (h) => (j(), k("option", {
                    key: h.id,
                    value: h.id
                  }, z(It($o)(h)), 9, Mu))), 128))
                ], 40, Tu)
              ])
            ], 64)) : At("", !0),
            g("div", Au, [
              g("label", Iu, [
                p[49] || (p[49] = oe(" 模型 ", -1)),
                H(g("select", {
                  "onUpdate:modelValue": p[13] || (p[13] = (h) => n.model = h),
                  class: "text_pole"
                }, [
                  (j(!0), k(Z, null, _e(It(Wi), (h) => (j(), k("option", {
                    key: h,
                    value: h
                  }, z(h), 9, Ru))), 128))
                ], 512), [
                  [de, n.model]
                ])
              ]),
              g("label", Pu, [
                oe(" 语速 " + z(n.speed.toFixed(2)) + " ", 1),
                H(g("input", {
                  "onUpdate:modelValue": p[14] || (p[14] = (h) => n.speed = h),
                  type: "range",
                  min: "0.5",
                  max: "2",
                  step: "0.05"
                }, null, 512), [
                  [
                    fe,
                    n.speed,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              g("label", Nu, [
                oe(" 音量 " + z(n.vol.toFixed(2)) + " ", 1),
                H(g("input", {
                  "onUpdate:modelValue": p[15] || (p[15] = (h) => n.vol = h),
                  type: "range",
                  min: "0",
                  max: "10",
                  step: "0.1"
                }, null, 512), [
                  [
                    fe,
                    n.vol,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ])
          ], 64)) : (j(), k(Z, { key: 1 }, [
            g("label", Vu, [
              p[50] || (p[50] = oe(" 服务地址 ", -1)),
              H(g("input", {
                "onUpdate:modelValue": p[16] || (p[16] = (h) => n.localGsviBaseUrl = h),
                class: "text_pole",
                type: "url",
                placeholder: "http://127.0.0.1:9880"
              }, null, 512), [
                [fe, n.localGsviBaseUrl]
              ])
            ]),
            g("div", Gu, [
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: o.value,
                onClick: p[17] || (p[17] = (h) => Se(!1))
              }, " 拉取模型 ", 8, Lu)
            ]),
            g("div", Ou, [
              g("label", $u, [
                p[51] || (p[51] = oe(" 默认模型 ", -1)),
                H(g("select", {
                  "onUpdate:modelValue": p[18] || (p[18] = (h) => n.localGsviModel = h),
                  class: "text_pole",
                  onChange: gn
                }, [
                  g("option", Du, z(i.value.length > 0 ? "请选择" : "先拉取模型"), 1),
                  (j(!0), k(Z, null, _e(i.value, (h) => (j(), k("option", {
                    key: h.id,
                    value: h.id
                  }, z(h.name), 9, ju))), 128))
                ], 544), [
                  [de, n.localGsviModel]
                ])
              ]),
              g("label", Uu, [
                p[53] || (p[53] = oe(" 语种 ", -1)),
                H(g("select", {
                  "onUpdate:modelValue": p[19] || (p[19] = (h) => n.localGsviLanguage = h),
                  class: "text_pole"
                }, [
                  p[52] || (p[52] = g("option", { value: "" }, "请选择", -1)),
                  (j(!0), k(Z, null, _e($.value, (h) => (j(), k("option", {
                    key: h,
                    value: h
                  }, z(h), 9, ku))), 128))
                ], 512), [
                  [de, n.localGsviLanguage]
                ])
              ]),
              g("label", Fu, [
                p[55] || (p[55] = oe(" 情绪 ", -1)),
                H(g("select", {
                  "onUpdate:modelValue": p[20] || (p[20] = (h) => n.localGsviEmotion = h),
                  class: "text_pole"
                }, [
                  p[54] || (p[54] = g("option", { value: "" }, "请选择", -1)),
                  (j(!0), k(Z, null, _e(X.value, (h) => (j(), k("option", {
                    key: h,
                    value: h
                  }, z(h), 9, Bu))), 128))
                ], 512), [
                  [de, n.localGsviEmotion]
                ])
              ])
            ]),
            g("label", Hu, [
              oe(" 语速 " + z(n.speed.toFixed(2)) + " ", 1),
              H(g("input", {
                "onUpdate:modelValue": p[21] || (p[21] = (h) => n.speed = h),
                type: "range",
                min: "0.5",
                max: "2",
                step: "0.05"
              }, null, 512), [
                [
                  fe,
                  n.speed,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ], 64)),
          g("details", Ku, [
            g("summary", null, " 角色映射 " + z(N.value ? n.characterMappings.length : n.gsviCharacterMappings.length), 1),
            p[60] || (p[60] = g("p", { class: "tavern-multi-tts-hint" }, "只给映射名单里的角色生成语音；名单外的台词会跳过。", -1)),
            g("div", zu, [
              H(g("input", {
                "onUpdate:modelValue": p[22] || (p[22] = (h) => f.value = h),
                class: "text_pole",
                type: "text",
                placeholder: "存档名"
              }, null, 512), [
                [fe, f.value]
              ]),
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: le
              }, "保存"),
              H(g("select", {
                "onUpdate:modelValue": p[23] || (p[23] = (h) => m.value = h),
                class: "text_pole"
              }, [
                p[56] || (p[56] = g("option", { value: "" }, "读取存档", -1)),
                (j(!0), k(Z, null, _e(C.value, (h) => (j(), k("option", {
                  key: h.name,
                  value: h.name
                }, z(h.name) + "（" + z(h.mappings.length) + "） ", 9, Wu))), 128))
              ], 512), [
                [de, m.value]
              ]),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: !m.value,
                onClick: $e
              }, " 读取 ", 8, Ju),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: !m.value,
                onClick: Ye
              }, " 删除 ", 8, Xu)
            ]),
            N.value ? (j(!0), k(Z, { key: 0 }, _e(n.characterMappings, (h, we) => (j(), k("div", {
              key: `mm-${we}`,
              class: "tavern-multi-tts-mapping"
            }, [
              H(g("input", {
                "onUpdate:modelValue": (U) => h.characterName = U,
                class: "text_pole",
                type: "text",
                placeholder: "角色名"
              }, null, 8, Yu), [
                [fe, h.characterName]
              ]),
              H(g("input", {
                "onUpdate:modelValue": (U) => h.minimaxVoiceId = U,
                class: "text_pole",
                type: "text",
                placeholder: "Voice ID"
              }, null, 8, Zu), [
                [fe, h.minimaxVoiceId]
              ]),
              i.value.length > 0 ? (j(), k("select", {
                key: 0,
                class: "text_pole",
                value: h.minimaxVoiceId,
                onChange: (U) => h.minimaxVoiceId = U.target.value
              }, [
                p[57] || (p[57] = g("option", { value: "" }, "从列表选择", -1)),
                (j(!0), k(Z, null, _e(A.value, (U) => (j(), k("option", {
                  key: U.id,
                  value: U.id
                }, z(It($o)(U)), 9, qu))), 128))
              ], 40, Qu)) : At("", !0),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: o.value,
                onClick: (U) => Ze(h.characterName)
              }, " 试听 ", 8, ef),
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: (U) => Tt(we)
              }, "删除", 8, tf)
            ]))), 128)) : (j(!0), k(Z, { key: 1 }, _e(n.gsviCharacterMappings, (h, we) => (j(), k("div", {
              key: `gsvi-${we}`,
              class: "tavern-multi-tts-mapping is-gsvi"
            }, [
              H(g("input", {
                "onUpdate:modelValue": (U) => h.characterName = U,
                class: "text_pole",
                type: "text",
                placeholder: "角色名"
              }, null, 8, nf), [
                [fe, h.characterName]
              ]),
              H(g("select", {
                "onUpdate:modelValue": (U) => h.gsviVoiceId = U,
                class: "text_pole"
              }, [
                g("option", of, z(i.value.length > 0 ? "模型" : "先拉取模型"), 1),
                (j(!0), k(Z, null, _e(i.value, (U) => (j(), k("option", {
                  key: U.id,
                  value: U.id
                }, z(U.name), 9, rf))), 128))
              ], 8, sf), [
                [de, h.gsviVoiceId]
              ]),
              H(g("select", {
                "onUpdate:modelValue": (U) => h.gsviLanguage = U,
                class: "text_pole"
              }, [
                p[58] || (p[58] = g("option", { value: "" }, "语种", -1)),
                (j(!0), k(Z, null, _e(Xn(h.gsviVoiceId), (U) => (j(), k("option", {
                  key: U,
                  value: U
                }, z(U), 9, af))), 128))
              ], 8, lf), [
                [de, h.gsviLanguage]
              ]),
              H(g("select", {
                "onUpdate:modelValue": (U) => h.gsviEmotion = U,
                class: "text_pole"
              }, [
                p[59] || (p[59] = g("option", { value: "" }, "情绪", -1)),
                (j(!0), k(Z, null, _e(Yn(h.gsviVoiceId, h.gsviLanguage), (U) => (j(), k("option", {
                  key: U,
                  value: U
                }, z(U), 9, uf))), 128))
              ], 8, cf), [
                [de, h.gsviEmotion]
              ]),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: o.value,
                onClick: (U) => Ze(h.characterName)
              }, " 试听 ", 8, ff),
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: (U) => Tt(we)
              }, "删除", 8, df)
            ]))), 128)),
            g("div", { class: "tavern-multi-tts-actions" }, [
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: Ae
              }, "添加角色")
            ]),
            D.value.length > 0 ? (j(), k("p", pf, " 重复角色名：" + z(D.value.join("、")) + "，以后一条为准。 ", 1)) : At("", !0)
          ]),
          g("div", mf, [
            g("label", hf, [
              H(g("input", {
                "onUpdate:modelValue": p[24] || (p[24] = (h) => n.injectEnabled = h),
                type: "checkbox"
              }, null, 512), [
                [So, n.injectEnabled]
              ]),
              p[61] || (p[61] = g("span", null, "注入 <say> 提示", -1))
            ]),
            H(g("select", {
              "onUpdate:modelValue": p[25] || (p[25] = (h) => n.testLanguage = h),
              class: "text_pole"
            }, [...p[62] || (p[62] = [
              g("option", { value: "ja" }, "试听：日", -1),
              g("option", { value: "zh" }, "试听：中", -1),
              g("option", { value: "en" }, "试听：英", -1)
            ])], 512), [
              [de, n.testLanguage]
            ]),
            g("button", {
              class: "menu_button",
              type: "button",
              disabled: o.value,
              onClick: p[26] || (p[26] = (h) => Ze())
            }, z(N.value ? "测试默认音色（消耗额度）" : "测试默认模型"), 9, gf)
          ]),
          g("details", vf, [
            p[73] || (p[73] = g("summary", null, "高级", -1)),
            g("label", _f, [
              p[64] || (p[64] = oe(" 预取 ", -1)),
              H(g("select", {
                "onUpdate:modelValue": p[27] || (p[27] = (h) => n.prefetchMode = h),
                class: "text_pole"
              }, [...p[63] || (p[63] = [
                g("option", { value: "manual" }, "只在点击时生成", -1),
                g("option", { value: "auto_all" }, "自动预取全部", -1),
                g("option", { value: "auto_first_n" }, "自动预取前 N 句", -1)
              ])], 512), [
                [de, n.prefetchMode]
              ])
            ]),
            n.prefetchMode !== "manual" ? (j(), k("div", yf, [
              n.prefetchMode === "auto_first_n" ? (j(), k("label", bf, [
                p[65] || (p[65] = oe(" 前 N 句 ", -1)),
                H(g("input", {
                  "onUpdate:modelValue": p[28] || (p[28] = (h) => n.prefetchFirstCount = h),
                  class: "text_pole",
                  type: "number",
                  min: "1",
                  max: "10"
                }, null, 512), [
                  [
                    fe,
                    n.prefetchFirstCount,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])) : At("", !0),
              g("label", xf, [
                p[66] || (p[66] = oe(" 并发 ", -1)),
                H(g("input", {
                  "onUpdate:modelValue": p[29] || (p[29] = (h) => n.maxConcurrency = h),
                  class: "text_pole",
                  type: "number",
                  min: "1",
                  max: "10"
                }, null, 512), [
                  [
                    fe,
                    n.maxConcurrency,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ])) : At("", !0),
            g("label", Sf, [
              oe(" 注入深度 D" + z(n.injectDepth) + " ", 1),
              H(g("input", {
                "onUpdate:modelValue": p[30] || (p[30] = (h) => n.injectDepth = h),
                type: "range",
                min: "0",
                max: "10",
                step: "1"
              }, null, 512), [
                [
                  fe,
                  n.injectDepth,
                  void 0,
                  { number: !0 }
                ]
              ])
            ]),
            g("label", wf, [
              p[68] || (p[68] = oe(" 注入角色 ", -1)),
              H(g("select", {
                "onUpdate:modelValue": p[31] || (p[31] = (h) => n.injectRole = h),
                class: "text_pole"
              }, [...p[67] || (p[67] = [
                g("option", { value: "system" }, "system", -1),
                g("option", { value: "user" }, "user", -1),
                g("option", { value: "assistant" }, "assistant", -1)
              ])], 512), [
                [de, n.injectRole]
              ])
            ]),
            g("label", Ef, [
              p[69] || (p[69] = oe(" 注入模板 ", -1)),
              H(g("textarea", {
                "onUpdate:modelValue": p[32] || (p[32] = (h) => n.injectTemplate = h),
                class: "text_pole",
                rows: "5"
              }, null, 512), [
                [fe, n.injectTemplate]
              ])
            ]),
            N.value ? At("", !0) : (j(), k(Z, { key: 1 }, [
              g("label", Tf, [
                p[70] || (p[70] = oe(" 鉴权 Token ", -1)),
                H(g("input", {
                  "onUpdate:modelValue": p[33] || (p[33] = (h) => n.localGsviAuthToken = h),
                  class: "text_pole",
                  type: "password",
                  autocomplete: "off"
                }, null, 512), [
                  [fe, n.localGsviAuthToken]
                ])
              ]),
              g("div", Cf, [
                g("label", Mf, [
                  p[71] || (p[71] = oe(" 文本语言 ", -1)),
                  H(g("select", {
                    "onUpdate:modelValue": p[34] || (p[34] = (h) => n.localGsviTextLang = h),
                    class: "text_pole"
                  }, [
                    (j(!0), k(Z, null, _e(It(tu), (h) => (j(), k("option", {
                      key: h,
                      value: h
                    }, z(h), 9, Af))), 128))
                  ], 512), [
                    [de, n.localGsviTextLang]
                  ])
                ]),
                g("label", If, [
                  p[72] || (p[72] = oe(" 切分 ", -1)),
                  H(g("select", {
                    "onUpdate:modelValue": p[35] || (p[35] = (h) => n.localGsviTextSplitMethod = h),
                    class: "text_pole"
                  }, [
                    (j(!0), k(Z, null, _e(It(nu), (h) => (j(), k("option", {
                      key: h,
                      value: h
                    }, z(h), 9, Rf))), 128))
                  ], 512), [
                    [de, n.localGsviTextSplitMethod]
                  ])
                ])
              ]),
              g("label", Pf, [
                oe(" Batch " + z(n.localGsviBatchSize) + " ", 1),
                H(g("input", {
                  "onUpdate:modelValue": p[36] || (p[36] = (h) => n.localGsviBatchSize = h),
                  type: "range",
                  min: "1",
                  max: "8",
                  step: "1"
                }, null, 512), [
                  [
                    fe,
                    n.localGsviBatchSize,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ], 64)),
            g("div", Nf, [
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: o.value,
                onClick: Kt
              }, " 刷新缓存 ", 8, Vf),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: o.value,
                onClick: Ct
              }, " 清空缓存 ", 8, Gf),
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: De
              }, "恢复默认")
            ]),
            g("p", Lf, " 缓存 " + z(w.value) + " 条 / " + z(ne.value) + "，上限 100 条或 50MB。 ", 1)
          ])
        ])
      ])
    ]));
  }
});
let Xt = null, Yt = null, Gn = null;
function $f() {
  return Lt(lr().readRawSettings());
}
function Df() {
  return Gn ??= zc(Zc($f)), Gn;
}
function Bt() {
  return Yt || (Yt = ka(
    lr(),
    {
      mount(e, t) {
        Xt?.unmount(), Xt = pa(Of, {
          displayName: Ra,
          version: Pa,
          settings: t,
          onSettingsChange(n) {
            Yt?.updateSettings(n);
          }
        }), Xt.mount(e);
      },
      unmount() {
        Xt?.unmount(), Xt = null;
      }
    },
    {
      stopPlayback: Bi,
      clearCache: Fi,
      startRuntime: () => Df().start(),
      stopRuntime: () => Gn?.stop(),
      syncRuntime: () => Gn?.syncFromSettings()
    }
  ), Yt);
}
async function Ht(e, t) {
  try {
    await t();
  } catch (n) {
    const s = n instanceof Error ? n.message : String(n);
    throw console.error(`${be} ${e} failed: ${s}`), n;
  }
}
async function Uf() {
  await Ht("onInstall", () => Bt().install());
}
async function kf() {
  await Ht("onActivate", () => Bt().activate());
}
async function Ff() {
  await Ht("onEnable", () => Bt().activate());
}
async function Bf() {
  await Ht("onDisable", () => Bt().disable());
}
async function Hf() {
  await Ht("onClean", () => Bt().clean());
}
async function Kf() {
  await Ht("onDelete", () => Bt().delete());
}
export {
  kf as onActivate,
  Hf as onClean,
  Kf as onDelete,
  Bf as onDisable,
  Ff as onEnable,
  Uf as onInstall
};
//# sourceMappingURL=index.js.map
