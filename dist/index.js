// @__NO_SIDE_EFFECTS__
function Xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ae = {}, Ft = [], Vt = () => {
}, co = () => !1, Qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), qn = (e) => e.startsWith("onUpdate:"), He = Object.assign, uo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Gr = Object.prototype.hasOwnProperty, oe = (e, t) => Gr.call(e, t), X = Array.isArray, Bt = (e) => Mn(e) === "[object Map]", qt = (e) => Mn(e) === "[object Set]", vi = (e) => Mn(e) === "[object Date]", ie = (e) => typeof e == "function", _e = (e) => typeof e == "string", qe = (e) => typeof e == "symbol", ce = (e) => e !== null && typeof e == "object", fo = (e) => (ce(e) || ie(e)) && ie(e.then) && ie(e.catch), po = Object.prototype.toString, Mn = (e) => po.call(e), Or = (e) => Mn(e).slice(8, -1), mo = (e) => Mn(e) === "[object Object]", Ys = (e) => _e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fn = /* @__PURE__ */ Xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), es = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, $r = /-\w/g, Ue = es(
  (e) => e.replace($r, (t) => t.slice(1).toUpperCase())
), Dr = /\B([A-Z])/g, Gt = es(
  (e) => e.replace(Dr, "-$1").toLowerCase()
), go = es((e) => e.charAt(0).toUpperCase() + e.slice(1)), fs = es(
  (e) => e ? `on${go(e)}` : ""
), Ze = (e, t) => !Object.is(e, t), Gn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ho = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, ts = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let _i;
const ns = () => _i || (_i = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Zs(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = _e(s) ? Br(s) : Zs(s);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (_e(e) || ce(e))
    return e;
}
const jr = /;(?![^(]*\))/g, Ur = /:([^]+)/, Fr = /\/\*[^]*?\*\//g;
function Br(e) {
  const t = {};
  return e.replace(Fr, "").split(jr).forEach((n) => {
    if (n) {
      const s = n.split(Ur);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function at(e) {
  let t = "";
  if (_e(e))
    t = e;
  else if (X(e))
    for (let n = 0; n < e.length; n++) {
      const s = at(e[n]);
      s && (t += s + " ");
    }
  else if (ce(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Hr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Kr = /* @__PURE__ */ Xs(Hr);
function vo(e) {
  return !!e || e === "";
}
function Wr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = en(e[s], t[s]);
  return n;
}
function en(e, t) {
  if (e === t) return !0;
  let n = vi(e), s = vi(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = qe(e), s = qe(t), n || s)
    return e === t;
  if (n = X(e), s = X(t), n || s)
    return n && s ? Wr(e, t) : !1;
  if (n = ce(e), s = ce(t), n || s) {
    if (!n || !s)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !en(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Qs(e, t) {
  return e.findIndex((n) => en(n, t));
}
const _o = (e) => !!(e && e.__v_isRef === !0), W = (e) => _e(e) ? e : e == null ? "" : X(e) || ce(e) && (e.toString === po || !ie(e.toString)) ? _o(e) ? W(e.value) : JSON.stringify(e, bo, 2) : String(e), bo = (e, t) => _o(t) ? bo(e, t.value) : Bt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], o) => (n[ds(s, o) + " =>"] = i, n),
    {}
  )
} : qt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ds(n))
} : qe(t) ? ds(t) : ce(t) && !X(t) && !mo(t) ? String(t) : t, ds = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let xe;
class zr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && xe && (xe.active ? (this.parent = xe, this.index = (xe.scopes || (xe.scopes = [])).push(
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
        const i = this.scopes.slice();
        for (t = 0, n = i.length; t < n; t++)
          i[t].resume();
      }
      const s = this.effects.slice();
      for (t = 0, n = s.length; t < n; t++)
        s[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = xe;
      try {
        return xe = this, t();
      } finally {
        xe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = xe, xe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (xe === this)
        xe = this.prevScope;
      else {
        let t = xe;
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
        const i = this.scopes.slice();
        for (n = 0, s = i.length; n < s; n++)
          i[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Jr() {
  return xe;
}
let le;
const ps = /* @__PURE__ */ new WeakSet();
class yo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, xe && (xe.active ? xe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ps.has(this) && (ps.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || To(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, bi(this), So(this);
    const t = le, n = Fe;
    le = this, Fe = !0;
    try {
      return this.fn();
    } finally {
      wo(this), le = t, Fe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ti(t);
      this.deps = this.depsTail = void 0, bi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ps.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ls(this) && this.run();
  }
  get dirty() {
    return Ls(this);
  }
}
let xo = 0, dn, pn;
function To(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = pn, pn = e;
    return;
  }
  e.next = dn, dn = e;
}
function qs() {
  xo++;
}
function ei() {
  if (--xo > 0)
    return;
  if (pn) {
    let t = pn;
    for (pn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; dn; ) {
    let t = dn;
    for (dn = void 0; t; ) {
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
function So(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function wo(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), ti(s), Xr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Ls(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Eo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Eo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === bn) || (e.globalVersion = bn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ls(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = le, s = Fe;
  le = e, Fe = !0;
  try {
    So(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ze(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    le = n, Fe = s, wo(e), e.flags &= -3;
  }
}
function ti(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      ti(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Xr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Fe = !0;
const Io = [];
function Tt() {
  Io.push(Fe), Fe = !1;
}
function St() {
  const e = Io.pop();
  Fe = e === void 0 ? !0 : e;
}
function bi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = le;
    le = void 0;
    try {
      t();
    } finally {
      le = n;
    }
  }
}
let bn = 0;
class Yr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ni {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!le || !Fe || le === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== le)
      n = this.activeLink = new Yr(le, this), le.deps ? (n.prevDep = le.depsTail, le.depsTail.nextDep = n, le.depsTail = n) : le.deps = le.depsTail = n, Co(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = le.depsTail, n.nextDep = void 0, le.depsTail.nextDep = n, le.depsTail = n, le.deps === n && (le.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, bn++, this.notify(t);
  }
  notify(t) {
    qs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ei();
    }
  }
}
function Co(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Co(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ks = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ Symbol(
  ""
), Gs = /* @__PURE__ */ Symbol(
  ""
), yn = /* @__PURE__ */ Symbol(
  ""
);
function Te(e, t, n) {
  if (Fe && le) {
    let s = ks.get(e);
    s || ks.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new ni()), i.map = s, i.key = n), i.track();
  }
}
function ut(e, t, n, s, i, o) {
  const r = ks.get(e);
  if (!r) {
    bn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (qs(), t === "clear")
    r.forEach(l);
  else {
    const a = X(e), d = a && Ys(n);
    if (a && n === "length") {
      const m = Number(s);
      r.forEach((h, w) => {
        (w === "length" || w === yn || !qe(w) && w >= m) && l(h);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), d && l(r.get(yn)), t) {
        case "add":
          a ? d && l(r.get("length")) : (l(r.get(Nt)), Bt(e) && l(r.get(Gs)));
          break;
        case "delete":
          a || (l(r.get(Nt)), Bt(e) && l(r.get(Gs)));
          break;
        case "set":
          Bt(e) && l(r.get(Nt));
          break;
      }
  }
  ei();
}
function jt(e) {
  const t = /* @__PURE__ */ te(e);
  return t === e ? t : (Te(t, "iterate", yn), /* @__PURE__ */ Ge(e) ? t : t.map(Be));
}
function ss(e) {
  return Te(e = /* @__PURE__ */ te(e), "iterate", yn), e;
}
function Xe(e, t) {
  return /* @__PURE__ */ pt(e) ? Yt(/* @__PURE__ */ Lt(e) ? Be(t) : t) : Be(t);
}
const Zr = {
  __proto__: null,
  [Symbol.iterator]() {
    return ms(this, Symbol.iterator, (e) => Xe(this, e));
  },
  concat(...e) {
    return jt(this).concat(
      ...e.map((t) => X(t) ? jt(t) : t)
    );
  },
  entries() {
    return ms(this, "entries", (e) => (e[1] = Xe(this, e[1]), e));
  },
  every(e, t) {
    return st(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return st(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Xe(this, s)),
      arguments
    );
  },
  find(e, t) {
    return st(
      this,
      "find",
      e,
      t,
      (n) => Xe(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return st(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return st(
      this,
      "findLast",
      e,
      t,
      (n) => Xe(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return st(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return st(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return gs(this, "includes", e);
  },
  indexOf(...e) {
    return gs(this, "indexOf", e);
  },
  join(e) {
    return jt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return gs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return st(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return on(this, "pop");
  },
  push(...e) {
    return on(this, "push", e);
  },
  reduce(e, ...t) {
    return yi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return yi(this, "reduceRight", e, t);
  },
  shift() {
    return on(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return st(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return on(this, "splice", e);
  },
  toReversed() {
    return jt(this).toReversed();
  },
  toSorted(e) {
    return jt(this).toSorted(e);
  },
  toSpliced(...e) {
    return jt(this).toSpliced(...e);
  },
  unshift(...e) {
    return on(this, "unshift", e);
  },
  values() {
    return ms(this, "values", (e) => Xe(this, e));
  }
};
function ms(e, t, n) {
  const s = ss(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ Ge(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const Qr = Array.prototype;
function st(e, t, n, s, i, o) {
  const r = ss(e), l = r !== e && !/* @__PURE__ */ Ge(e), a = r[t];
  if (a !== Qr[t]) {
    const h = a.apply(e, o);
    return l ? Be(h) : h;
  }
  let d = n;
  r !== e && (l ? d = function(h, w) {
    return n.call(this, Xe(e, h), w, e);
  } : n.length > 2 && (d = function(h, w) {
    return n.call(this, h, w, e);
  }));
  const m = a.call(r, d, s);
  return l && i ? i(m) : m;
}
function yi(e, t, n, s) {
  const i = ss(e), o = i !== e && !/* @__PURE__ */ Ge(e);
  let r = n, l = !1;
  i !== e && (o ? (l = s.length === 0, r = function(d, m, h) {
    return l && (l = !1, d = Xe(e, d)), n.call(this, d, Xe(e, m), h, e);
  }) : n.length > 3 && (r = function(d, m, h) {
    return n.call(this, d, m, h, e);
  }));
  const a = i[t](r, ...s);
  return l ? Xe(e, a) : a;
}
function gs(e, t, n) {
  const s = /* @__PURE__ */ te(e);
  Te(s, "iterate", yn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ oi(n[0]) ? (n[0] = /* @__PURE__ */ te(n[0]), s[t](...n)) : i;
}
function on(e, t, n = []) {
  Tt(), qs();
  const s = (/* @__PURE__ */ te(e))[t].apply(e, n);
  return ei(), St(), s;
}
const qr = /* @__PURE__ */ Xs("__proto__,__v_isRef,__isVue"), Mo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qe)
);
function el(e) {
  qe(e) || (e = String(e));
  const t = /* @__PURE__ */ te(this);
  return Te(t, "has", e), t.hasOwnProperty(e);
}
class Ao {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (i ? o ? ul : No : o ? Vo : Ro).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = X(t);
    if (!i) {
      let a;
      if (r && (a = Zr[n]))
        return a;
      if (n === "hasOwnProperty")
        return el;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ie(t) ? t : s
    );
    if ((qe(n) ? Mo.has(n) : qr(n)) || (i || Te(t, "get", n), o))
      return l;
    if (/* @__PURE__ */ Ie(l)) {
      const a = r && Ys(n) ? l : l.value;
      return i && ce(a) ? /* @__PURE__ */ $s(a) : a;
    }
    return ce(l) ? i ? /* @__PURE__ */ $s(l) : /* @__PURE__ */ mn(l) : l;
  }
}
class Po extends Ao {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let o = t[n];
    const r = X(t) && Ys(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ pt(o);
      if (!/* @__PURE__ */ Ge(s) && !/* @__PURE__ */ pt(s) && (o = /* @__PURE__ */ te(o), s = /* @__PURE__ */ te(s)), !r && /* @__PURE__ */ Ie(o) && !/* @__PURE__ */ Ie(s))
        return d || (o.value = s), !0;
    }
    const l = r ? Number(n) < t.length : oe(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Ie(t) ? t : i
    );
    return t === /* @__PURE__ */ te(i) && a && (l ? Ze(s, o) && ut(t, "set", n, s) : ut(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = oe(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && ut(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!qe(n) || !Mo.has(n)) && Te(t, "has", n), s;
  }
  ownKeys(t) {
    return Te(
      t,
      "iterate",
      X(t) ? "length" : Nt
    ), Reflect.ownKeys(t);
  }
}
class tl extends Ao {
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
const nl = /* @__PURE__ */ new Po(), sl = /* @__PURE__ */ new tl(), il = /* @__PURE__ */ new Po(!0);
const Os = (e) => e, Pn = (e) => Reflect.getPrototypeOf(e);
function ol(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, o = /* @__PURE__ */ te(i), r = Bt(o), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, d = i[e](...s), m = n ? Os : t ? Yt : Be;
    return !t && Te(
      o,
      "iterate",
      a ? Gs : Nt
    ), He(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: w } = d.next();
          return w ? { value: h, done: w } : {
            value: l ? [m(h[0]), m(h[1])] : m(h),
            done: w
          };
        }
      }
    );
  };
}
function Rn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function rl(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ te(o), l = /* @__PURE__ */ te(i);
      e || (Ze(i, l) && Te(r, "get", i), Te(r, "get", l));
      const { has: a } = Pn(r), d = t ? Os : e ? Yt : Be;
      if (a.call(r, i))
        return d(o.get(i));
      if (a.call(r, l))
        return d(o.get(l));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Te(/* @__PURE__ */ te(i), "iterate", Nt), i.size;
    },
    has(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ te(o), l = /* @__PURE__ */ te(i);
      return e || (Ze(i, l) && Te(r, "has", i), Te(r, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ te(l), d = t ? Os : e ? Yt : Be;
      return !e && Te(a, "iterate", Nt), l.forEach((m, h) => i.call(o, d(m), d(h), r));
    }
  };
  return He(
    n,
    e ? {
      add: Rn("add"),
      set: Rn("set"),
      delete: Rn("delete"),
      clear: Rn("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ te(this), r = Pn(o), l = /* @__PURE__ */ te(i), a = !t && !/* @__PURE__ */ Ge(i) && !/* @__PURE__ */ pt(i) ? l : i;
        return r.has.call(o, a) || Ze(i, a) && r.has.call(o, i) || Ze(l, a) && r.has.call(o, l) || (o.add(a), ut(o, "add", a, a)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Ge(o) && !/* @__PURE__ */ pt(o) && (o = /* @__PURE__ */ te(o));
        const r = /* @__PURE__ */ te(this), { has: l, get: a } = Pn(r);
        let d = l.call(r, i);
        d || (i = /* @__PURE__ */ te(i), d = l.call(r, i));
        const m = a.call(r, i);
        return r.set(i, o), d ? Ze(o, m) && ut(r, "set", i, o) : ut(r, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ te(this), { has: r, get: l } = Pn(o);
        let a = r.call(o, i);
        a || (i = /* @__PURE__ */ te(i), a = r.call(o, i)), l && l.call(o, i);
        const d = o.delete(i);
        return a && ut(o, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ te(this), o = i.size !== 0, r = i.clear();
        return o && ut(
          i,
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
  ].forEach((i) => {
    n[i] = ol(i, e, t);
  }), n;
}
function si(e, t) {
  const n = rl(e, t);
  return (s, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    oe(n, i) && i in s ? n : s,
    i,
    o
  );
}
const ll = {
  get: /* @__PURE__ */ si(!1, !1)
}, al = {
  get: /* @__PURE__ */ si(!1, !0)
}, cl = {
  get: /* @__PURE__ */ si(!0, !1)
};
const Ro = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new WeakMap(), No = /* @__PURE__ */ new WeakMap(), ul = /* @__PURE__ */ new WeakMap();
function fl(e) {
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
function mn(e) {
  return /* @__PURE__ */ pt(e) ? e : ii(
    e,
    !1,
    nl,
    ll,
    Ro
  );
}
// @__NO_SIDE_EFFECTS__
function dl(e) {
  return ii(
    e,
    !1,
    il,
    al,
    Vo
  );
}
// @__NO_SIDE_EFFECTS__
function $s(e) {
  return ii(
    e,
    !0,
    sl,
    cl,
    No
  );
}
function ii(e, t, n, s, i) {
  if (!ce(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = fl(Or(e));
  if (r === 0)
    return e;
  const l = new Proxy(
    e,
    r === 2 ? s : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  return /* @__PURE__ */ pt(e) ? /* @__PURE__ */ Lt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function oi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function te(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ te(t) : e;
}
function pl(e) {
  return !oe(e, "__v_skip") && Object.isExtensible(e) && ho(e, "__v_skip", !0), e;
}
const Be = (e) => ce(e) ? /* @__PURE__ */ mn(e) : e, Yt = (e) => ce(e) ? /* @__PURE__ */ $s(e) : e;
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  return ml(e, !1);
}
function ml(e, t) {
  return /* @__PURE__ */ Ie(e) ? e : new gl(e, t);
}
class gl {
  constructor(t, n) {
    this.dep = new ni(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ te(t), this._value = n ? t : Be(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ge(t) || /* @__PURE__ */ pt(t);
    t = s ? t : /* @__PURE__ */ te(t), Ze(t, n) && (this._rawValue = t, this._value = s ? t : Be(t), this.dep.trigger());
  }
}
function ht(e) {
  return /* @__PURE__ */ Ie(e) ? e.value : e;
}
const hl = {
  get: (e, t, n) => t === "__v_raw" ? e : ht(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ Ie(i) && !/* @__PURE__ */ Ie(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Lo(e) {
  return /* @__PURE__ */ Lt(e) ? e : new Proxy(e, hl);
}
class vl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ni(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = bn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    le !== this)
      return To(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Eo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function _l(e, t, n = !1) {
  let s, i;
  return ie(e) ? s = e : (s = e.get, i = e.set), new vl(s, i, n);
}
const Vn = {}, Fn = /* @__PURE__ */ new WeakMap();
let Pt;
function bl(e, t = !1, n = Pt) {
  if (n) {
    let s = Fn.get(n);
    s || Fn.set(n, s = []), s.push(e);
  }
}
function yl(e, t, n = ae) {
  const { immediate: s, deep: i, once: o, scheduler: r, augmentJob: l, call: a } = n, d = (U) => i ? U : /* @__PURE__ */ Ge(U) || i === !1 || i === 0 ? ft(U, 1) : ft(U);
  let m, h, w, S, B = !1, P = !1;
  if (/* @__PURE__ */ Ie(e) ? (h = () => e.value, B = /* @__PURE__ */ Ge(e)) : /* @__PURE__ */ Lt(e) ? (h = () => d(e), B = !0) : X(e) ? (P = !0, B = e.some((U) => /* @__PURE__ */ Lt(U) || /* @__PURE__ */ Ge(U)), h = () => e.map((U) => {
    if (/* @__PURE__ */ Ie(U))
      return U.value;
    if (/* @__PURE__ */ Lt(U))
      return d(U);
    if (ie(U))
      return a ? a(U, 2) : U();
  })) : ie(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (w) {
      Tt();
      try {
        w();
      } finally {
        St();
      }
    }
    const U = Pt;
    Pt = m;
    try {
      return a ? a(e, 3, [S]) : e(S);
    } finally {
      Pt = U;
    }
  } : h = Vt, t && i) {
    const U = h, ue = i === !0 ? 1 / 0 : i;
    h = () => ft(U(), ue);
  }
  const V = Jr(), R = () => {
    m.stop(), V && V.active && uo(V.effects, m);
  };
  if (o && t) {
    const U = t;
    t = (...ue) => {
      const ye = U(...ue);
      return R(), ye;
    };
  }
  let O = P ? new Array(e.length).fill(Vn) : Vn;
  const Y = (U) => {
    if (!(!(m.flags & 1) || !m.dirty && !U))
      if (t) {
        const ue = m.run();
        if (U || i || B || (P ? ue.some((ye, ge) => Ze(ye, O[ge])) : Ze(ue, O))) {
          w && w();
          const ye = Pt;
          Pt = m;
          try {
            const ge = [
              ue,
              // pass undefined as the old value when it's changed for the first time
              O === Vn ? void 0 : P && O[0] === Vn ? [] : O,
              S
            ];
            O = ue, a ? a(t, 3, ge) : (
              // @ts-expect-error
              t(...ge)
            );
          } finally {
            Pt = ye;
          }
        }
      } else
        m.run();
  };
  return l && l(Y), m = new yo(h), m.scheduler = r ? () => r(Y, !1) : Y, S = (U) => bl(U, !1, m), w = m.onStop = () => {
    const U = Fn.get(m);
    if (U) {
      if (a)
        a(U, 4);
      else
        for (const ue of U) ue();
      Fn.delete(m);
    }
  }, t ? s ? Y(!0) : O = m.run() : r ? r(Y.bind(null, !0), !0) : m.run(), R.pause = m.pause.bind(m), R.resume = m.resume.bind(m), R.stop = R, R;
}
function ft(e, t = 1 / 0, n) {
  if (t <= 0 || !ce(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ie(e))
    ft(e.value, t, n);
  else if (X(e))
    for (let s = 0; s < e.length; s++)
      ft(e[s], t, n);
  else if (qt(e) || Bt(e))
    e.forEach((s) => {
      ft(s, t, n);
    });
  else if (mo(e)) {
    for (const s in e)
      ft(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ft(e[s], t, n);
  }
  return e;
}
function An(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    is(i, t, n);
  }
}
function et(e, t, n, s) {
  if (ie(e)) {
    const i = An(e, t, n, s);
    return i && fo(i) && i.catch((o) => {
      is(o, t, n);
    }), i;
  }
  if (X(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(et(e[o], t, n, s));
    return i;
  }
}
function is(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || ae;
  if (t) {
    let l = t.parent;
    const a = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const m = l.ec;
      if (m) {
        for (let h = 0; h < m.length; h++)
          if (m[h](e, a, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Tt(), An(o, null, 10, [
        e,
        a,
        d
      ]), St();
      return;
    }
  }
  xl(e, n, i, s, r);
}
function xl(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ee = [];
let Je = -1;
const Ht = [];
let vt = null, Ut = 0;
const ko = /* @__PURE__ */ Promise.resolve();
let Bn = null;
function Go(e) {
  const t = Bn || ko;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Tl(e) {
  let t = Je + 1, n = Ee.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Ee[s], o = xn(i);
    o < e || o === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ri(e) {
  if (!(e.flags & 1)) {
    const t = xn(e), n = Ee[Ee.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= xn(n) ? Ee.push(e) : Ee.splice(Tl(t), 0, e), e.flags |= 1, Oo();
  }
}
function Oo() {
  Bn || (Bn = ko.then(Do));
}
function Sl(e) {
  if (!X(e))
    vt && e.id === -1 ? vt.splice(Ut + 1, 0, e) : e.flags & 1 || (Ht.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ht.push(e[t]);
  Oo();
}
function xi(e, t, n = Je + 1) {
  for (; n < Ee.length; n++) {
    const s = Ee[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ee.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function $o(e) {
  if (Ht.length) {
    const t = [...new Set(Ht)].sort(
      (n, s) => xn(n) - xn(s)
    );
    if (Ht.length = 0, vt) {
      for (let n = 0; n < t.length; n++)
        vt.push(t[n]);
      return;
    }
    for (vt = t, Ut = 0; Ut < vt.length; Ut++) {
      const n = vt[Ut];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    vt = null, Ut = 0;
  }
}
const xn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Do(e) {
  try {
    for (Je = 0; Je < Ee.length; Je++) {
      const t = Ee[Je];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), An(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Je < Ee.length; Je++) {
      const t = Ee[Je];
      t && (t.flags &= -2);
    }
    Je = -1, Ee.length = 0, $o(), Bn = null, (Ee.length || Ht.length) && Do();
  }
}
let ke = null, jo = null;
function Hn(e) {
  const t = ke;
  return ke = e, jo = e && e.type.__scopeId || null, t;
}
function wl(e, t = ke, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Mi(-1);
    const o = Hn(t), r = kt.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let a = kt.length; a > r; a--) sr();
      Hn(o), s._d && Mi(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function K(e, t) {
  if (ke === null)
    return e;
  const n = as(ke), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, l, a = ae] = t[i];
    o && (ie(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ft(r), s.push({
      dir: o,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Mt(e, t, n, s) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    o && (l.oldValue = o[r].value);
    let a = l.dir[s];
    a && (Tt(), et(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), St());
  }
}
function El(e, t, n = !1) {
  const s = da();
  if (s || Kt) {
    let i = Kt ? Kt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ie(t) ? t.call(s && s.proxy) : t;
  }
}
const Il = /* @__PURE__ */ Symbol.for("v-scx"), Cl = () => El(Il);
function Ml(e, t, n) {
  return Al(e, t, n);
}
function Al(e, t, n = ae) {
  const { immediate: s, deep: i, flush: o, once: r } = n, l = He({}, n), a = t && s || !t && o !== "post";
  let d;
  if (wn) {
    if (o === "sync") {
      const S = Cl();
      d = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!a) {
      const S = () => {
      };
      return S.stop = Vt, S.resume = Vt, S.pause = Vt, S;
    }
  }
  const m = wt;
  l.call = (S, B, P) => et(S, m, B, P);
  let h = !1;
  o === "post" ? l.scheduler = (S) => {
    Ce(S, m && m.suspense);
  } : o !== "sync" && (h = !0, l.scheduler = (S, B) => {
    B ? S() : ri(S);
  }), l.augmentJob = (S) => {
    t && (S.flags |= 4), h && (S.flags |= 2, m && (S.id = m.uid, S.i = m));
  };
  const w = yl(e, t, l);
  return wn && (d ? d.push(w) : a && w()), w;
}
const Pl = /* @__PURE__ */ Symbol("_vte"), os = (e) => e.__isTeleport, hs = /* @__PURE__ */ Symbol("_leaveCb");
function Rl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== mt) {
        t = n;
        break;
      }
  }
  return t;
}
function Uo(e) {
  if (!Fo(e))
    return os(e.type) && e.children ? Rl(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ie(n.default))
      return n.default();
  }
}
function li(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    li(
      os(n.type) && Uo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Vl(e, t) {
  return ie(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    He({ name: e.name }, t, { setup: e })
  ) : e;
}
function Nl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ti(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Kn = /* @__PURE__ */ new WeakMap();
function gn(e, t, n, s, i = !1) {
  if (X(e)) {
    e.forEach(
      (P, V) => gn(
        P,
        t && (X(t) ? t[V] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (hn(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && gn(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? as(s.component) : s.el, r = i ? null : o, { i: l, r: a } = e, d = t && t.r, m = l.refs === ae ? l.refs = {} : l.refs, h = l.setupState, w = /* @__PURE__ */ te(h), S = h === ae ? co : (P) => Ti(m, P) ? !1 : oe(w, P), B = (P, V) => !(V && Ti(m, V));
  if (d != null && d !== a) {
    if (Si(t), _e(d))
      m[d] = null, S(d) && (h[d] = null);
    else if (/* @__PURE__ */ Ie(d)) {
      const P = t;
      B(d, P.k) && (d.value = null), P.k && (m[P.k] = null);
    }
  }
  if (ie(a))
    An(a, l, 12, [r, m]);
  else {
    const P = _e(a), V = /* @__PURE__ */ Ie(a);
    if (P || V) {
      const R = () => {
        if (e.f) {
          const O = P ? S(a) ? h[a] : m[a] : B() || !e.k ? a.value : m[e.k];
          if (i)
            X(O) && uo(O, o);
          else if (X(O))
            O.includes(o) || O.push(o);
          else if (P)
            m[a] = [o], S(a) && (h[a] = m[a]);
          else {
            const Y = [o];
            B(a, e.k) && (a.value = Y), e.k && (m[e.k] = Y);
          }
        } else P ? (m[a] = r, S(a) && (h[a] = r)) : V && (B(a, e.k) && (a.value = r), e.k && (m[e.k] = r));
      };
      if (r) {
        const O = () => {
          R(), Kn.delete(e);
        };
        O.id = -1, Kn.set(e, O), Ce(O, n);
      } else
        Si(e), R();
    }
  }
}
function Si(e) {
  const t = Kn.get(e);
  t && (t.flags |= 8, Kn.delete(e));
}
ns().requestIdleCallback;
ns().cancelIdleCallback;
const hn = (e) => !!e.type.__asyncLoader, Fo = (e) => e.type.__isKeepAlive;
function Ll(e, t, n = wt, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...r) => {
      Tt();
      const l = ui(n), a = et(t, n, e, r);
      return l(), St(), a;
    });
    return s ? i.unshift(o) : i.push(o), o;
  }
}
const Bo = (e) => (t, n = wt) => {
  (!wn || e === "sp") && Ll(e, (...s) => t(...s), n);
}, kl = Bo("m"), Gl = Bo("um"), Ol = /* @__PURE__ */ Symbol.for("v-ndc");
function he(e, t, n, s) {
  let i;
  const o = n, r = X(e);
  if (r || _e(e)) {
    const l = r && /* @__PURE__ */ Lt(e);
    let a = !1, d = !1;
    l && (a = !/* @__PURE__ */ Ge(e), d = /* @__PURE__ */ pt(e), e = ss(e)), i = new Array(e.length);
    for (let m = 0, h = e.length; m < h; m++)
      i[m] = t(
        a ? d ? Yt(Be(e[m])) : Be(e[m]) : e[m],
        m,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (ce(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const m = l[a];
        i[a] = t(e[m], m, a, o);
      }
    }
  else
    i = [];
  return i;
}
const Ds = (e) => e ? lr(e) ? as(e) : Ds(e.parent) : null, vn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ He(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ds(e.parent),
    $root: (e) => Ds(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      ri(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Go.bind(e.proxy)),
    $watch: (e) => Vt
  })
), vs = (e, t) => e !== ae && !e.__isScriptSetup && oe(e, t), $l = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: o, accessCache: r, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const w = r[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (vs(s, t))
          return r[t] = 1, s[t];
        if (oe(o, t))
          return r[t] = 3, o[t];
        if (n !== ae && oe(n, t))
          return r[t] = 4, n[t];
        r[t] = 0;
      }
    }
    const d = vn[t];
    let m, h;
    if (d)
      return t === "$attrs" && Te(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (m = l.__cssModules) && (m = m[t])
    )
      return m;
    if (n !== ae && oe(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, oe(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: o } = e;
    return vs(i, t) ? (i[t] = n, !0) : oe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: o, type: r }
  }, l) {
    let a;
    return !!(n[l] || vs(t, l) || oe(o, l) || oe(s, l) || oe(vn, l) || oe(i.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : oe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ho() {
  return {
    app: null,
    config: {
      isNativeTag: co,
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
let Dl = 0;
function jl(e, t) {
  return function(s, i = null) {
    ie(s) || (s = He({}, s)), i != null && !ce(i) && (i = null);
    const o = Ho(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const d = o.app = {
      _uid: Dl++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: _a,
      get config() {
        return o.config;
      },
      set config(m) {
      },
      use(m, ...h) {
        return r.has(m) || (m && ie(m.install) ? (r.add(m), m.install(d, ...h)) : ie(m) && (r.add(m), m(d, ...h))), d;
      },
      mixin(m) {
        return d;
      },
      component(m, h) {
        return h ? (o.components[m] = h, d) : o.components[m];
      },
      directive(m, h) {
        return h ? (o.directives[m] = h, d) : o.directives[m];
      },
      mount(m, h, w) {
        if (!a) {
          const S = d._ceVNode || dt(s, i);
          return S.appContext = o, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(S, m, w), a = !0, d._container = m, m.__vue_app__ = d, as(S.component);
        }
      },
      onUnmount(m) {
        l.push(m);
      },
      unmount() {
        a && (et(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(m, h) {
        return o.provides[m] = h, d;
      },
      runWithContext(m) {
        const h = Kt;
        Kt = d;
        try {
          return m();
        } finally {
          Kt = h;
        }
      }
    };
    return d;
  };
}
let Kt = null;
const Ul = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ue(t)}Modifiers`] || e[`${Gt(t)}Modifiers`];
function Fl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ae;
  let i = n;
  const o = t.startsWith("update:"), r = o && Ul(s, t.slice(7));
  r && (r.trim && (i = n.map((m) => _e(m) ? m.trim() : m)), r.number && (i = n.map(ts)));
  let l, a = s[l = fs(t)] || // also try camelCase event handler (#2249)
  s[l = fs(Ue(t))];
  !a && o && (a = s[l = fs(Gt(t))]), a && et(
    a,
    e,
    6,
    i
  );
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, et(
      d,
      e,
      6,
      i
    );
  }
}
function Bl(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {};
  return o ? (X(o) ? o.forEach((l) => r[l] = null) : He(r, o), ce(e) && s.set(e, r), r) : (ce(e) && s.set(e, null), null);
}
function rs(e, t) {
  return !e || !Qn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), oe(e, t[0].toLowerCase() + t.slice(1)) || oe(e, Gt(t)) || oe(e, t));
}
function wi(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [o],
    slots: r,
    attrs: l,
    emit: a,
    render: d,
    renderCache: m,
    props: h,
    data: w,
    setupState: S,
    ctx: B,
    inheritAttrs: P
  } = e, V = Hn(e);
  let R, O;
  try {
    if (n.shapeFlag & 4) {
      const U = i || s, ue = U;
      R = Ye(
        d.call(
          ue,
          U,
          m,
          h,
          S,
          w,
          B
        )
      ), O = l;
    } else {
      const U = t;
      R = Ye(
        U.length > 1 ? U(
          h,
          { attrs: l, slots: r, emit: a }
        ) : U(
          h,
          null
        )
      ), O = t.props ? l : Hl(l);
    }
  } catch (U) {
    kt.length = 0, is(U, e, 1), R = dt(mt);
  }
  let Y = R;
  if (O && P !== !1) {
    const U = Object.keys(O), { shapeFlag: ue } = Y;
    U.length && ue & 7 && (o && U.some(qn) && (O = Kl(
      O,
      o
    )), Y = Zt(Y, O, !1, !0));
  }
  if (n.dirs && (Y = Zt(Y, null, !1, !0), Y.dirs = Y.dirs ? Y.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const U = os(Y.type) && Uo(Y) || Y;
    li(U, n.transition);
  }
  return R = Y, Hn(V), R;
}
const Hl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Kl = (e, t) => {
  const n = {};
  for (const s in e)
    (!qn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Wl(e, t, n) {
  const { props: s, children: i, component: o } = e, { props: r, children: l, patchFlag: a } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Ei(s, r, d) : !!r;
    if (a & 8) {
      const m = t.dynamicProps;
      for (let h = 0; h < m.length; h++) {
        const w = m[h];
        if (Ko(r, s, w) && !rs(d, w))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? Ei(s, r, d) : !0 : !!r;
  return !1;
}
function Ei(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (Ko(t, e, o) && !rs(n, o))
      return !0;
  }
  return !1;
}
function Ko(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && ce(s) && ce(i) ? !en(s, i) : s !== i;
}
function zl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Wo = {}, zo = () => Object.create(Wo), Jo = (e) => Object.getPrototypeOf(e) === Wo;
function Jl(e, t, n, s = !1) {
  const i = {}, o = zo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Xo(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ dl(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Xl(e, t, n, s) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ te(i), [a] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const m = e.vnode.dynamicProps;
      for (let h = 0; h < m.length; h++) {
        let w = m[h];
        if (rs(e.emitsOptions, w))
          continue;
        const S = t[w];
        if (a)
          if (oe(o, w))
            S !== o[w] && (o[w] = S, d = !0);
          else {
            const B = Ue(w);
            i[B] = js(
              a,
              l,
              B,
              S,
              e,
              !1
            );
          }
        else
          S !== o[w] && (o[w] = S, d = !0);
      }
    }
  } else {
    Xo(e, t, i, o) && (d = !0);
    let m;
    for (const h in l)
      (!t || // for camelCase
      !oe(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = Gt(h)) === h || !oe(t, m))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[m] !== void 0) && (i[h] = js(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (o !== l)
      for (const h in o)
        (!t || !oe(t, h)) && (delete o[h], d = !0);
  }
  d && ut(e.attrs, "set", "");
}
function Xo(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (fn(a))
        continue;
      const d = t[a];
      let m;
      i && oe(i, m = Ue(a)) ? !o || !o.includes(m) ? n[m] = d : (l || (l = {}))[m] = d : rs(e.emitsOptions, a) || (!(a in s) || d !== s[a]) && (s[a] = d, r = !0);
    }
  if (o) {
    const a = /* @__PURE__ */ te(n), d = l || ae;
    for (let m = 0; m < o.length; m++) {
      const h = o[m];
      n[h] = js(
        i,
        a,
        h,
        d[h],
        e,
        !oe(d, h)
      );
    }
  }
  return r;
}
function js(e, t, n, s, i, o) {
  const r = e[n];
  if (r != null) {
    const l = oe(r, "default");
    if (l && s === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && ie(a)) {
        const { propsDefaults: d } = i;
        if (n in d)
          s = d[n];
        else {
          const m = ui(i);
          s = d[n] = a.call(
            null,
            t
          ), m();
        }
      } else
        s = a;
      i.ce && i.ce._setProp(n, s);
    }
    r[
      0
      /* shouldCast */
    ] && (o && !l ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Gt(n)) && (s = !0));
  }
  return s;
}
function Yl(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, l = [];
  if (!o)
    return ce(e) && s.set(e, Ft), Ft;
  if (X(o))
    for (let d = 0; d < o.length; d++) {
      const m = Ue(o[d]);
      Ii(m) && (r[m] = ae);
    }
  else if (o)
    for (const d in o) {
      const m = Ue(d);
      if (Ii(m)) {
        const h = o[d], w = r[m] = X(h) || ie(h) ? { type: h } : He({}, h), S = w.type;
        let B = !1, P = !0;
        if (X(S))
          for (let V = 0; V < S.length; ++V) {
            const R = S[V], O = ie(R) && R.name;
            if (O === "Boolean") {
              B = !0;
              break;
            } else O === "String" && (P = !1);
          }
        else
          B = ie(S) && S.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = B, w[
          1
          /* shouldCastTrue */
        ] = P, (B || oe(w, "default")) && l.push(m);
      }
    }
  const a = [r, l];
  return ce(e) && s.set(e, a), a;
}
function Ii(e) {
  return e[0] !== "$" && !fn(e);
}
const ai = (e) => e === "_" || e === "_ctx" || e === "$stable", ci = (e) => X(e) ? e.map(Ye) : [Ye(e)], Zl = (e, t, n) => {
  if (t._n)
    return t;
  const s = wl((...i) => ci(t(...i)), n);
  return s._c = !1, s;
}, Yo = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (ai(i)) continue;
    const o = e[i];
    if (ie(o))
      t[i] = Zl(i, o, s);
    else if (o != null) {
      const r = ci(o);
      t[i] = () => r;
    }
  }
}, Zo = (e, t) => {
  const n = ci(t);
  e.slots.default = () => n;
}, Qo = (e, t, n) => {
  for (const s in t)
    (n || !ai(s)) && (e[s] = t[s]);
}, Ql = (e, t, n) => {
  const s = e.slots = zo();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Qo(s, t, n), n && ho(s, "_", i, !0)) : Yo(t, s);
  } else t && Zo(e, t);
}, ql = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let o = !0, r = ae;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : Qo(i, t, n) : (o = !t.$stable, Yo(t, i)), r = t;
  } else t && (Zo(e, t), r = { default: 1 });
  if (o)
    for (const l in i)
      !ai(l) && r[l] == null && delete i[l];
}, Ce = ia;
function ea(e) {
  return ta(e);
}
function ta(e, t) {
  const n = ns();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: l,
    createComment: a,
    setText: d,
    setElementText: m,
    parentNode: h,
    nextSibling: w,
    setScopeId: S = Vt,
    insertStaticContent: B
  } = e, P = (f, g, v, T = null, x = null, b = null, C = void 0, I = null, E = !!g.dynamicChildren) => {
    if (f === g)
      return;
    f && !rn(f, g) && (T = pe(f), z(f, x, b, !0), f = null), g.patchFlag === -2 && (E = !1, g.dynamicChildren = null);
    const { type: y, ref: D, shapeFlag: A } = g;
    switch (y) {
      case ls:
        V(f, g, v, T);
        break;
      case mt:
        R(f, g, v, T);
        break;
      case bs:
        f == null && O(g, v, T, C);
        break;
      case Z:
        $e(
          f,
          g,
          v,
          T,
          x,
          b,
          C,
          I,
          E
        );
        break;
      default:
        A & 1 ? ue(
          f,
          g,
          v,
          T,
          x,
          b,
          C,
          I,
          E
        ) : A & 6 ? Dt(
          f,
          g,
          v,
          T,
          x,
          b,
          C,
          I,
          E
        ) : (A & 64 || A & 128) && y.process(
          f,
          g,
          v,
          T,
          x,
          b,
          C,
          I,
          E,
          Ae
        );
    }
    D != null && x ? gn(D, f && f.ref, b, g || f, !g) : D == null && f && f.ref != null && gn(f.ref, null, b, f, !0);
  }, V = (f, g, v, T) => {
    if (f == null)
      s(
        g.el = l(g.children),
        v,
        T
      );
    else {
      const x = g.el = f.el;
      g.children !== f.children && d(x, g.children);
    }
  }, R = (f, g, v, T) => {
    f == null ? s(
      g.el = a(g.children || ""),
      v,
      T
    ) : g.el = f.el;
  }, O = (f, g, v, T) => {
    [f.el, f.anchor] = B(
      f.children,
      g,
      v,
      T,
      f.el,
      f.anchor
    );
  }, Y = ({ el: f, anchor: g }, v, T) => {
    let x;
    for (; f && f !== g; )
      x = w(f), s(f, v, T), f = x;
    s(g, v, T);
  }, U = ({ el: f, anchor: g }) => {
    let v;
    for (; f && f !== g; )
      v = w(f), i(f), f = v;
    i(g);
  }, ue = (f, g, v, T, x, b, C, I, E) => {
    if (g.type === "svg" ? C = "svg" : g.type === "math" && (C = "mathml"), f == null)
      ye(
        g,
        v,
        T,
        x,
        b,
        C,
        I,
        E
      );
    else {
      const y = f.el && f.el._isVueCE ? f.el : null;
      try {
        y && y._beginPatch(), $t(
          f,
          g,
          x,
          b,
          C,
          I,
          E
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, ye = (f, g, v, T, x, b, C, I) => {
    let E, y;
    const { props: D, shapeFlag: A, transition: j, dirs: H } = f;
    if (E = f.el = r(
      f.type,
      b,
      D && D.is,
      D
    ), A & 8 ? m(E, f.children) : A & 16 && Oe(
      f.children,
      E,
      null,
      T,
      x,
      _s(f, b),
      C,
      I
    ), H && Mt(f, null, T, "created"), ge(E, f, f.scopeId, C, T), D) {
      for (const ne in D)
        ne !== "value" && !fn(ne) && o(E, ne, null, D[ne], b, T);
      "value" in D && o(E, "value", null, D.value, b), (y = D.onVnodeBeforeMount) && ze(y, T, f);
    }
    H && Mt(f, null, T, "beforeMount");
    const Q = na(x, j);
    Q && j.beforeEnter(E), s(E, g, v), ((y = D && D.onVnodeMounted) || Q || H) && Ce(() => {
      y && ze(y, T, f), Q && j.enter(E), H && Mt(f, null, T, "mounted");
    }, x);
  }, ge = (f, g, v, T, x) => {
    if (v && S(f, v), T)
      for (let b = 0; b < T.length; b++)
        S(f, T[b]);
    if (x) {
      let b = x.subTree;
      if (g === b || nr(b.type) && (b.ssContent === g || b.ssFallback === g)) {
        const C = x.vnode;
        ge(
          f,
          C,
          C.scopeId,
          C.slotScopeIds,
          x.parent
        );
      }
    }
  }, Oe = (f, g, v, T, x, b, C, I, E = 0) => {
    for (let y = E; y < f.length; y++) {
      const D = f[y] = I ? ct(f[y]) : Ye(f[y]);
      P(
        null,
        D,
        g,
        v,
        T,
        x,
        b,
        C,
        I
      );
    }
  }, $t = (f, g, v, T, x, b, C) => {
    const I = g.el = f.el;
    let { patchFlag: E, dynamicChildren: y, dirs: D } = g;
    E |= f.patchFlag & 16;
    const A = f.props || ae, j = g.props || ae;
    let H;
    if (v && At(v, !1), (H = j.onVnodeBeforeUpdate) && ze(H, v, g, f), D && Mt(g, f, v, "beforeUpdate"), v && At(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!f.dynamicChildren || f.dynamicChildren.length !== y.length) && (E = 0, C = !1, y = null), (A.innerHTML && j.innerHTML == null || A.textContent && j.textContent == null) && m(I, ""), y ? gt(
      f.dynamicChildren,
      y,
      I,
      v,
      T,
      _s(g, x),
      b
    ) : C || Ke(
      f,
      g,
      I,
      null,
      v,
      T,
      _s(g, x),
      b,
      !1
    ), E > 0) {
      if (E & 16)
        tt(I, A, j, v, x);
      else if (E & 2 && A.class !== j.class && o(I, "class", null, j.class, x), E & 4 && o(I, "style", A.style, j.style, x), E & 8) {
        const Q = g.dynamicProps;
        for (let ne = 0; ne < Q.length; ne++) {
          const ee = Q[ne], _ = A[ee], c = j[ee];
          (c !== _ || ee === "value") && o(I, ee, _, c, x, v);
        }
      }
      E & 1 && f.children !== g.children && m(I, g.children);
    } else !C && y == null && tt(I, A, j, v, x);
    ((H = j.onVnodeUpdated) || D) && Ce(() => {
      H && ze(H, v, g, f), D && Mt(g, f, v, "updated");
    }, T);
  }, gt = (f, g, v, T, x, b, C) => {
    for (let I = 0; I < g.length; I++) {
      const E = f[I], y = g[I], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === Z || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !rn(E, y) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 198) ? h(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      P(
        E,
        y,
        D,
        null,
        T,
        x,
        b,
        C,
        !0
      );
    }
  }, tt = (f, g, v, T, x) => {
    if (g !== v) {
      if (g !== ae)
        for (const b in g)
          !fn(b) && !(b in v) && o(
            f,
            b,
            g[b],
            null,
            x,
            T
          );
      for (const b in v) {
        if (fn(b)) continue;
        const C = v[b], I = g[b];
        C !== I && b !== "value" && o(f, b, I, C, x, T);
      }
      "value" in v && o(f, "value", g.value, v.value, x);
    }
  }, $e = (f, g, v, T, x, b, C, I, E) => {
    const y = g.el = f ? f.el : l(""), D = g.anchor = f ? f.anchor : l("");
    let { patchFlag: A, dynamicChildren: j, slotScopeIds: H } = g;
    H && (I = I ? I.concat(H) : H), f == null ? (s(y, v, T), s(D, v, T), Oe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      v,
      D,
      x,
      b,
      C,
      I,
      E
    )) : A > 0 && A & 64 && j && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === j.length ? (gt(
      f.dynamicChildren,
      j,
      v,
      x,
      b,
      C,
      I
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || x && g === x.subTree) && qo(
      f,
      g,
      !0
      /* shallow */
    )) : Ke(
      f,
      g,
      v,
      D,
      x,
      b,
      C,
      I,
      E
    );
  }, Dt = (f, g, v, T, x, b, C, I, E) => {
    g.slotScopeIds = I, f == null ? g.shapeFlag & 512 ? x.ctx.activate(
      g,
      v,
      T,
      C,
      E
    ) : It(
      g,
      v,
      T,
      x,
      b,
      C,
      E
    ) : sn(f, g, E);
  }, It = (f, g, v, T, x, b, C) => {
    const I = f.component = fa(
      f,
      T,
      x
    );
    if (Fo(f) && (I.ctx.renderer = Ae), pa(I, !1, C), I.asyncDep) {
      if (x && x.registerDep(I, Ct, C), !f.el) {
        const E = I.subTree = dt(mt);
        R(null, E, g, v), f.placeholder = E.el;
      }
    } else
      Ct(
        I,
        f,
        g,
        v,
        x,
        b,
        C
      );
  }, sn = (f, g, v) => {
    const T = g.component = f.component;
    if (Wl(f, g, v))
      if (T.asyncDep && !T.asyncResolved) {
        nt(T, g, v);
        return;
      } else
        T.next = g, T.update();
    else
      g.el = f.el, T.vnode = g;
  }, Ct = (f, g, v, T, x, b, C) => {
    const I = () => {
      if (f.isMounted) {
        let { next: A, bu: j, u: H, parent: Q, vnode: ne } = f;
        {
          const J = er(f);
          if (J) {
            A && (A.el = ne.el, nt(f, A, C)), J.asyncDep.then(() => {
              Ce(() => {
                f.isUnmounted || y();
              }, x);
            });
            return;
          }
        }
        let ee = A, _;
        At(f, !1), A ? (A.el = ne.el, nt(f, A, C)) : A = ne, j && Gn(j), (_ = A.props && A.props.onVnodeBeforeUpdate) && ze(_, Q, A, ne), At(f, !0);
        const c = wi(f), p = f.subTree;
        f.subTree = c, P(
          p,
          c,
          // parent may have changed if it's in a teleport
          h(p.el),
          // anchor may have changed if it's in a fragment
          pe(p),
          f,
          x,
          b
        ), A.el = c.el, ee === null && zl(f, c.el), H && Ce(H, x), (_ = A.props && A.props.onVnodeUpdated) && Ce(
          () => ze(_, Q, A, ne),
          x
        );
      } else {
        let A;
        const { el: j, props: H } = g, { bm: Q, m: ne, parent: ee, root: _, type: c } = f, p = hn(g);
        At(f, !1), Q && Gn(Q), !p && (A = H && H.onVnodeBeforeMount) && ze(A, ee, g), At(f, !0);
        {
          _.ce && _.ce._hasShadowRoot() && _.ce._injectChildStyle(
            c,
            f.parent ? f.parent.type : void 0
          );
          const J = f.subTree = wi(f);
          P(
            null,
            J,
            v,
            T,
            f,
            x,
            b
          ), g.el = J.el;
        }
        if (ne && Ce(ne, x), !p && (A = H && H.onVnodeMounted)) {
          const J = g;
          Ce(
            () => ze(A, ee, J),
            x
          );
        }
        (g.shapeFlag & 256 || ee && hn(ee.vnode) && ee.vnode.shapeFlag & 256) && f.a && Ce(f.a, x), f.isMounted = !0, g = v = T = null;
      }
    };
    f.scope.on();
    const E = f.effect = new yo(I);
    f.scope.off();
    const y = f.update = E.run.bind(E), D = f.job = E.runIfDirty.bind(E);
    D.i = f, D.id = f.uid, E.scheduler = () => ri(D), At(f, !0), y();
  }, nt = (f, g, v) => {
    g.component = f;
    const T = f.vnode.props;
    f.vnode = g, f.next = null, Xl(f, g.props, T, v), ql(f, g.children, v), Tt(), xi(f), St();
  }, Ke = (f, g, v, T, x, b, C, I, E = !1) => {
    const y = f && f.children, D = f ? f.shapeFlag : 0, A = g.children, { patchFlag: j, shapeFlag: H } = g;
    if (j > 0) {
      if (j & 128) {
        $(
          y,
          A,
          v,
          T,
          x,
          b,
          C,
          I,
          E
        );
        return;
      } else if (j & 256) {
        M(
          y,
          A,
          v,
          T,
          x,
          b,
          C,
          I,
          E
        );
        return;
      }
    }
    H & 8 ? (D & 16 && fe(y, x, b), A !== y && m(v, A)) : D & 16 ? H & 16 ? $(
      y,
      A,
      v,
      T,
      x,
      b,
      C,
      I,
      E
    ) : fe(y, x, b, !0) : (D & 8 && m(v, ""), H & 16 && Oe(
      A,
      v,
      T,
      x,
      b,
      C,
      I,
      E
    ));
  }, M = (f, g, v, T, x, b, C, I, E) => {
    f = f || Ft, g = g || Ft;
    const y = f.length, D = g.length, A = Math.min(y, D);
    let j;
    for (j = 0; j < A; j++) {
      const H = g[j] = E ? ct(g[j]) : Ye(g[j]);
      P(
        f[j],
        H,
        v,
        null,
        x,
        b,
        C,
        I,
        E
      );
    }
    y > D ? fe(
      f,
      x,
      b,
      !0,
      !1,
      A
    ) : Oe(
      g,
      v,
      T,
      x,
      b,
      C,
      I,
      E,
      A
    );
  }, $ = (f, g, v, T, x, b, C, I, E) => {
    let y = 0;
    const D = g.length;
    let A = f.length - 1, j = D - 1;
    for (; y <= A && y <= j; ) {
      const H = f[y], Q = g[y] = E ? ct(g[y]) : Ye(g[y]);
      if (rn(H, Q))
        P(
          H,
          Q,
          v,
          null,
          x,
          b,
          C,
          I,
          E
        );
      else
        break;
      y++;
    }
    for (; y <= A && y <= j; ) {
      const H = f[A], Q = g[j] = E ? ct(g[j]) : Ye(g[j]);
      if (rn(H, Q))
        P(
          H,
          Q,
          v,
          null,
          x,
          b,
          C,
          I,
          E
        );
      else
        break;
      A--, j--;
    }
    if (y > A) {
      if (y <= j) {
        const H = j + 1, Q = H < D ? g[H].el : T;
        for (; y <= j; )
          P(
            null,
            g[y] = E ? ct(g[y]) : Ye(g[y]),
            v,
            Q,
            x,
            b,
            C,
            I,
            E
          ), y++;
      }
    } else if (y > j)
      for (; y <= A; )
        z(f[y], x, b, !0), y++;
    else {
      const H = y, Q = y, ne = /* @__PURE__ */ new Map();
      for (y = Q; y <= j; y++) {
        const Pe = g[y] = E ? ct(g[y]) : Ye(g[y]);
        Pe.key != null && ne.set(Pe.key, y);
      }
      let ee, _ = 0;
      const c = j - Q + 1;
      let p = !1, J = 0;
      const N = new Array(c);
      for (y = 0; y < c; y++) N[y] = 0;
      for (y = H; y <= A; y++) {
        const Pe = f[y];
        if (_ >= c) {
          z(Pe, x, b, !0);
          continue;
        }
        let We;
        if (Pe.key != null)
          We = ne.get(Pe.key);
        else
          for (ee = Q; ee <= j; ee++)
            if (N[ee - Q] === 0 && rn(Pe, g[ee])) {
              We = ee;
              break;
            }
        We === void 0 ? z(Pe, x, b, !0) : (N[We - Q] = y + 1, We >= J ? J = We : p = !0, P(
          Pe,
          g[We],
          v,
          null,
          x,
          b,
          C,
          I,
          E
        ), _++);
      }
      const mi = p ? sa(N) : Ft;
      for (ee = mi.length - 1, y = c - 1; y >= 0; y--) {
        const Pe = Q + y, We = g[Pe], gi = g[Pe + 1], hi = Pe + 1 < D ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          gi.el || tr(gi)
        ) : T;
        N[y] === 0 ? P(
          null,
          We,
          v,
          hi,
          x,
          b,
          C,
          I,
          E
        ) : p && (ee < 0 || y !== mi[ee] ? G(We, v, hi, 2) : ee--);
      }
    }
  }, G = (f, g, v, T, x = null) => {
    const { el: b, type: C, transition: I, children: E, shapeFlag: y } = f;
    if (y & 6) {
      G(f.component.subTree, g, v, T);
      return;
    }
    if (y & 128) {
      f.suspense.move(g, v, T);
      return;
    }
    if (y & 64) {
      C.move(f, g, v, Ae);
      return;
    }
    if (C === Z) {
      s(b, g, v);
      for (let A = 0; A < E.length; A++)
        G(E[A], g, v, T);
      s(f.anchor, g, v);
      return;
    }
    if (C === bs) {
      Y(f, g, v);
      return;
    }
    if (T !== 2 && y & 1 && I)
      if (T === 0)
        I.persisted && !b[hs] ? s(b, g, v) : (I.beforeEnter(b), s(b, g, v), Ce(() => I.enter(b), x));
      else {
        const { leave: A, delayLeave: j, afterLeave: H } = I, Q = () => {
          f.ctx.isUnmounted ? i(b) : s(b, g, v);
        }, ne = () => {
          const ee = b._isLeaving || !!b[hs];
          b._isLeaving && b[hs](
            !0
            /* cancelled */
          ), I.persisted && !ee ? Q() : A(b, () => {
            Q(), H && H();
          });
        };
        j ? j(b, Q, ne) : ne();
      }
    else
      s(b, g, v);
  }, z = (f, g, v, T = !1, x = !1) => {
    const {
      type: b,
      props: C,
      ref: I,
      children: E,
      dynamicChildren: y,
      shapeFlag: D,
      patchFlag: A,
      dirs: j,
      cacheIndex: H,
      memo: Q
    } = f;
    if (A === -2 && (x = !1), I != null && (Tt(), gn(I, null, v, f, !0), St()), H != null && (g.renderCache[H] = void 0), D & 256) {
      g.ctx.deactivate(f);
      return;
    }
    const ne = D & 1 && j, ee = !hn(f);
    let _;
    if (ee && (_ = C && C.onVnodeBeforeUnmount) && ze(_, g, f), D & 6)
      be(f.component, v, T);
    else {
      if (D & 128) {
        f.suspense.unmount(v, T);
        return;
      }
      ne && Mt(f, null, g, "beforeUnmount"), D & 64 ? f.type.remove(
        f,
        g,
        v,
        Ae,
        T
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Z || A > 0 && A & 64) ? fe(
        y,
        g,
        v,
        !1,
        !0
      ) : (b === Z && A & 384 || !x && D & 16) && fe(E, g, v), T && q(f);
    }
    const c = Q != null && H == null;
    (ee && (_ = C && C.onVnodeUnmounted) || ne || c) && Ce(() => {
      _ && ze(_, g, f), ne && Mt(f, null, g, "unmounted"), c && (f.el = null);
    }, v);
  }, q = (f) => {
    const { type: g, el: v, anchor: T, transition: x } = f;
    if (g === Z) {
      Ve(v, T);
      return;
    }
    if (g === bs) {
      U(f);
      return;
    }
    const b = () => {
      i(v), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (f.shapeFlag & 1 && x && !x.persisted) {
      const { leave: C, delayLeave: I } = x, E = () => C(v, b);
      I ? I(f.el, b, E) : E();
    } else
      b();
  }, Ve = (f, g) => {
    let v;
    for (; f !== g; )
      v = w(f), i(f), f = v;
    i(g);
  }, be = (f, g, v) => {
    const { bum: T, scope: x, job: b, subTree: C, um: I, m: E, a: y } = f;
    Ci(E), Ci(y), T && Gn(T), x.stop(), b && (b.flags |= 8, z(C, f, g, v)), I && Ce(I, g), Ce(() => {
      f.isUnmounted = !0;
    }, g);
  }, fe = (f, g, v, T = !1, x = !1, b = 0) => {
    for (let C = b; C < f.length; C++)
      z(f[C], g, v, T, x);
  }, pe = (f) => {
    if (f.shapeFlag & 6)
      return pe(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const g = w(f.anchor || f.el), v = g && g[Pl];
    return v ? w(v) : g;
  };
  let De = !1;
  const we = (f, g, v) => {
    let T;
    f == null ? g._vnode && (z(g._vnode, null, null, !0), T = g._vnode.component) : P(
      g._vnode || null,
      f,
      g,
      null,
      null,
      null,
      v
    ), g._vnode = f, De || (De = !0, xi(T), $o(), De = !1);
  }, Ae = {
    p: P,
    um: z,
    m: G,
    r: q,
    mt: It,
    mc: Oe,
    pc: Ke,
    pbc: gt,
    n: pe,
    o: e
  };
  return {
    render: we,
    hydrate: void 0,
    createApp: jl(we)
  };
}
function _s({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function At({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function na(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function qo(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (X(s) && X(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = ct(i[o]), l.el = r.el), !n && l.patchFlag !== -2 && qo(r, l)), l.type === ls && (l.patchFlag === -1 && (l = i[o] = ct(l)), l.el = r.el), l.type === mt && !l.el && (l.el = r.el);
    }
}
function sa(e) {
  const t = e.slice(), n = [0];
  let s, i, o, r, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const d = e[s];
    if (d !== 0) {
      if (i = n[n.length - 1], e[i] < d) {
        t[s] = i, n.push(s);
        continue;
      }
      for (o = 0, r = n.length - 1; o < r; )
        l = o + r >> 1, e[n[l]] < d ? o = l + 1 : r = l;
      d < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; )
    n[o] = r, r = t[r];
  return n;
}
function er(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : er(t);
}
function Ci(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function tr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? tr(t.subTree) : null;
}
const nr = (e) => e.__isSuspense;
function ia(e, t) {
  t && t.pendingBranch ? X(e) ? t.effects.push(...e) : t.effects.push(e) : Sl(e);
}
const Z = /* @__PURE__ */ Symbol.for("v-fgt"), ls = /* @__PURE__ */ Symbol.for("v-txt"), mt = /* @__PURE__ */ Symbol.for("v-cmt"), bs = /* @__PURE__ */ Symbol.for("v-stc"), kt = [];
let Re = null;
function L(e = !1) {
  kt.push(Re = e ? null : []);
}
function sr() {
  kt.pop(), Re = kt[kt.length - 1] || null;
}
let Tn = 1;
function Mi(e, t = !1) {
  Tn += e, e < 0 && Re && t && (Re.hasOnce = !0);
}
function ir(e) {
  return e.dynamicChildren = Tn > 0 ? Re || Ft : null, sr(), Tn > 0 && Re && Re.push(e), e;
}
function k(e, t, n, s, i, o) {
  return ir(
    u(
      e,
      t,
      n,
      s,
      i,
      o,
      !0
    )
  );
}
function oa(e, t, n, s, i) {
  return ir(
    dt(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function or(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function rn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const rr = ({ key: e }) => e ?? null, On = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? _e(e) || /* @__PURE__ */ Ie(e) || ie(e) ? { i: ke, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, i = null, o = e === Z ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && rr(t),
    ref: t && On(t),
    scopeId: jo,
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
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ke
  };
  return l ? (Wn(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= _e(n) ? 8 : 16), Tn > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Re && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Re.push(a), a;
}
const dt = ra;
function ra(e, t = null, n = null, s = 0, i = null, o = !1) {
  if ((!e || e === Ol) && (e = mt), or(e)) {
    const l = Zt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Wn(l, n), Tn > 0 && !o && Re && (l.shapeFlag & 6 ? Re[Re.indexOf(e)] = l : Re.push(l)), l.patchFlag = -2, l;
  }
  if (va(e) && (e = e.__vccOpts), t) {
    t = la(t);
    let { class: l, style: a } = t;
    l && !_e(l) && (t.class = at(l)), ce(a) && (/* @__PURE__ */ oi(a) && !X(a) && (a = He({}, a)), t.style = Zs(a));
  }
  const r = _e(e) ? 1 : nr(e) ? 128 : os(e) ? 64 : ce(e) ? 4 : ie(e) ? 2 : 0;
  return u(
    e,
    t,
    n,
    s,
    i,
    r,
    o,
    !0
  );
}
function la(e) {
  return e ? /* @__PURE__ */ oi(e) || Jo(e) ? He({}, e) : e : null;
}
function Zt(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: r, children: l, transition: a } = e, d = t ? aa(i || {}, t) : i, m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && rr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? X(o) ? o.concat(On(t)) : [o, On(t)] : On(t)
    ) : o,
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
    ssContent: e.ssContent && Zt(e.ssContent),
    ssFallback: e.ssFallback && Zt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && li(
    m,
    a.clone(m)
  ), m;
}
function rt(e = " ", t = 0) {
  return dt(ls, null, e, t);
}
function je(e = "", t = !1) {
  return t ? (L(), oa(mt, null, e)) : dt(mt, null, e);
}
function Ye(e) {
  return e == null || typeof e == "boolean" ? dt(mt) : X(e) ? dt(
    Z,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : or(e) ? ct(e) : dt(ls, null, String(e));
}
function ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Zt(e);
}
function Wn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (X(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Wn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Jo(t) ? t._ctx = ke : i === 3 && ke && (ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ie(t)) {
    if (s & 65) {
      Wn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ke }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [rt(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function aa(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = at([t.class, s.class]));
      else if (i === "style")
        t.style = Zs([t.style, s.style]);
      else if (Qn(i)) {
        const o = t[i], r = s[i];
        r && o !== r && !(X(o) && o.includes(r)) ? t[i] = o ? [].concat(o, r) : r : r == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !qn(i) && (t[i] = r);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function ze(e, t, n, s = null) {
  et(e, t, 7, [
    n,
    s
  ]);
}
const ca = Ho();
let ua = 0;
function fa(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || ca, o = {
    uid: ua++,
    vnode: e,
    type: s,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new zr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Yl(s, i),
    emitsOptions: Bl(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ae,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ae,
    data: ae,
    props: ae,
    attrs: ae,
    slots: ae,
    refs: ae,
    setupState: ae,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Fl.bind(null, o), e.ce && e.ce(o), o;
}
let wt = null;
const da = () => wt || ke;
let zn, Sn;
{
  const e = ns(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  zn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => wt = n
  ), Sn = t(
    "__VUE_SSR_SETTERS__",
    (n) => wn = n
  );
}
const ui = (e) => {
  const t = wt;
  return zn(e), e.scope.on(), () => {
    e.scope.off(), zn(t);
  };
}, Ai = () => {
  wt && wt.scope.off(), zn(null);
};
function lr(e) {
  return e.vnode.shapeFlag & 4;
}
let wn = !1;
function pa(e, t = !1, n = !1) {
  t && Sn(t);
  const { props: s, children: i } = e.vnode, o = lr(e);
  Jl(e, s, o, t), Ql(e, i, n || t);
  const r = o ? ma(e, t) : void 0;
  return t && Sn(!1), r;
}
function ma(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $l);
  const { setup: s } = n;
  if (s) {
    Tt();
    const i = e.setupContext = s.length > 1 ? ha(e) : null, o = ui(e), r = An(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = fo(r);
    if (St(), o(), (l || e.sp) && !hn(e) && Nl(e), l) {
      if (r.then(Ai, Ai), t)
        return r.then((a) => {
          Sn(!0);
          try {
            Pi(e, a, t);
          } finally {
            Sn(!1);
          }
        }).catch((a) => {
          is(a, e, 0);
        });
      e.asyncDep = r;
    } else
      Pi(e, r);
  } else
    ar(e);
}
function Pi(e, t, n) {
  ie(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ce(t) && (e.setupState = Lo(t)), ar(e);
}
function ar(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Vt);
}
const ga = {
  get(e, t) {
    return Te(e, "get", ""), e[t];
  }
};
function ha(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ga),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function as(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Lo(pl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in vn)
        return vn[n](e);
    },
    has(t, n) {
      return n in t || n in vn;
    }
  })) : e.proxy;
}
function va(e) {
  return ie(e) && "__vccOpts" in e;
}
const ve = (e, t) => /* @__PURE__ */ _l(e, t, wn), _a = "3.5.41";
let Us;
const Ri = typeof window < "u" && window.trustedTypes;
if (Ri)
  try {
    Us = /* @__PURE__ */ Ri.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const cr = Us ? (e) => Us.createHTML(e) : (e) => e, ba = "http://www.w3.org/2000/svg", ya = "http://www.w3.org/1998/Math/MathML", lt = typeof document < "u" ? document : null, Vi = lt && /* @__PURE__ */ lt.createElement("template"), xa = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? lt.createElementNS(ba, e) : t === "mathml" ? lt.createElementNS(ya, e) : n ? lt.createElement(e, { is: n }) : lt.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => lt.createTextNode(e),
  createComment: (e) => lt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => lt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, o) {
    const r = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Vi.innerHTML = cr(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Vi.content;
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
}, Ta = /* @__PURE__ */ Symbol("_vtc");
function Sa(e, t, n) {
  const s = e[Ta];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ni = /* @__PURE__ */ Symbol("_vod"), wa = /* @__PURE__ */ Symbol("_vsh"), Ea = /* @__PURE__ */ Symbol(""), Ia = /(?:^|;)\s*display\s*:/;
function Ca(e, t, n) {
  const s = e.style, i = _e(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (_e(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && un(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && un(s, r, "");
    for (const r in n) {
      r === "display" && (o = !0);
      const l = n[r];
      l != null ? Aa(
        e,
        r,
        !_e(t) && t ? t[r] : void 0,
        l
      ) || un(s, r, l) : un(s, r, "");
    }
  } else if (i) {
    if (t !== n) {
      const r = s[Ea];
      r && (n += ";" + r), s.cssText = n, o = Ia.test(n);
    }
  } else t && e.removeAttribute("style");
  Ni in e && (e[Ni] = o ? s.display : "", e[wa] && (s.display = "none"));
}
const Li = /\s*!important$/;
function un(e, t, n) {
  if (X(n))
    n.forEach((s) => un(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Ma(e, t);
    Li.test(n) ? e.setProperty(
      Gt(s),
      n.replace(Li, ""),
      "important"
    ) : e[s] = n;
  }
}
const ki = ["Webkit", "Moz", "ms"], ys = {};
function Ma(e, t) {
  const n = ys[t];
  if (n)
    return n;
  let s = Ue(t);
  if (s !== "filter" && s in e)
    return ys[t] = s;
  s = go(s);
  for (let i = 0; i < ki.length; i++) {
    const o = ki[i] + s;
    if (o in e)
      return ys[t] = o;
  }
  return t;
}
function Aa(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && _e(s) && n === s;
}
const Gi = "http://www.w3.org/1999/xlink";
function Oi(e, t, n, s, i, o = Kr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Gi, t.slice(6, t.length)) : e.setAttributeNS(Gi, t, n) : n == null || o && !vo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : qe(n) ? String(n) : n
  );
}
function $i(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? cr(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
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
    l === "boolean" ? n = vo(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(i || t);
}
function bt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Pa(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Di = /* @__PURE__ */ Symbol("_vei");
function Ra(e, t, n, s, i = null) {
  const o = e[Di] || (e[Di] = {}), r = o[t];
  if (s && r)
    r.value = s;
  else {
    const [l, a] = La(t);
    if (s) {
      const d = o[t] = Oa(
        s,
        i
      );
      bt(e, l, d, a);
    } else r && (Pa(e, l, r, a), o[t] = void 0);
  }
}
const Va = /(Once|Passive|Capture)$/, Na = /^on:?(?:Once|Passive|Capture)$/;
function La(e) {
  let t, n;
  for (; (n = e.match(Va)) && !Na.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Gt(e.slice(2)), t];
}
let xs = 0;
const ka = /* @__PURE__ */ Promise.resolve(), Ga = () => xs || (ka.then(() => xs = 0), xs = Date.now());
function Oa(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (X(i)) {
      const o = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        o.call(s), s._stopped = !0;
      };
      const r = i.slice(), l = [s];
      for (let a = 0; a < r.length && !s._stopped; a++) {
        const d = r[a];
        d && et(
          d,
          t,
          5,
          l
        );
      }
    } else
      et(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = Ga(), n;
}
const ji = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, $a = (e, t, n, s, i, o) => {
  const r = i === "svg";
  t === "class" ? Sa(e, s, r) : t === "style" ? Ca(e, n, s) : Qn(t) ? qn(t) || Ra(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Da(e, t, s, r)) ? ($i(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Oi(e, t, s, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ja(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !_e(s))) ? $i(e, Ue(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Oi(e, t, s, r));
};
function Da(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ji(t) && ie(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return ji(t) && _e(n) ? !1 : t in e;
}
function ja(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Ue(t);
  return Array.isArray(n) ? n.some((i) => Ue(i) === s) : Object.keys(n).some((i) => Ue(i) === s);
}
const Qt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return X(t) ? (n) => Gn(t, n) : t;
};
function Ua(e) {
  e.target.composing = !0;
}
function Ui(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Qe = /* @__PURE__ */ Symbol("_assign"), Nn = /* @__PURE__ */ Symbol("_initialValue");
function Ts(e, t, n) {
  return t && (e = e.trim()), n && (e = ts(e)), e;
}
const de = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[Nn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Nn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Qe] = Qt(i);
    const o = s || i.props && i.props.type === "number";
    bt(e, t ? "change" : "input", (r) => {
      r.target.composing || e[Qe](Ts(e.value, n, o));
    }), (n || o) && bt(e, "change", () => {
      e.value = Ts(e.value, n, o);
    }), t || (bt(e, "compositionstart", Ua), bt(e, "compositionend", Ui), bt(e, "change", Ui));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", o = e[Nn];
    delete e[Nn], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[Qe](Ts(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: o } }, r) {
    if (e[Qe] = Qt(r), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? ts(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === a) || (e.value = a);
  }
}, Fi = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Qe] = Qt(n), bt(e, "change", () => {
      const s = e._modelValue, i = En(e), o = e.checked, r = e[Qe];
      if (X(s)) {
        const l = Qs(s, i), a = l !== -1;
        if (o && !a)
          r(s.concat(i));
        else if (!o && a) {
          const d = [...s];
          d.splice(l, 1), r(d);
        }
      } else if (qt(s)) {
        const l = new Set(s);
        o ? l.add(i) : l.delete(i), r(l);
      } else
        r(ur(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Bi,
  beforeUpdate(e, t, n) {
    e[Qe] = Qt(n), Bi(e, t, n);
  }
};
function Bi(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let i;
  if (X(t))
    i = Qs(t, s.props.value) > -1;
  else if (qt(t))
    i = t.has(s.props.value);
  else {
    if (t === n) return;
    i = en(t, ur(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const me = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, bt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? ts(En(o)) : En(o)
      );
      e[Qe](
        e.multiple ? qt(e._modelValue) ? new Set(i) : i : i[0]
      ), e._assigning = !0, Go(() => {
        e._assigning = !1;
      });
    }), e[Qe] = Qt(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Hi(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Qe] = Qt(n);
  },
  updated(e, { value: t }) {
    e._assigning || Hi(e, t);
  }
};
function Hi(e, t) {
  const n = e.multiple, s = X(t);
  if (!(n && !s && !qt(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const r = e.options[i], l = En(r);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? r.selected = t.some((d) => String(d) === String(l)) : r.selected = Qs(t, l) > -1;
        } else
          r.selected = t.has(l);
      else if (en(En(r), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function En(e) {
  return "_value" in e ? e._value : e.value;
}
function ur(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Fa = /* @__PURE__ */ He({ patchProp: $a }, xa);
let Ki;
function Ba() {
  return Ki || (Ki = ea(Fa));
}
const Ha = ((...e) => {
  const t = Ba().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Wa(s);
    if (!i) return;
    const o = t._component;
    !ie(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, Ka(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
});
function Ka(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Wa(e) {
  return _e(e) ? document.querySelector(e) : e;
}
const za = "tavern_multi_tts_cache", Le = "audio_cache", Ja = 1, Wi = 100, zi = 50 * 1024 * 1024;
function Ji(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function Xa(e) {
  return e.engine === "minimax" ? {
    text: e.text,
    engine: e.engine,
    region: e.minimax?.region ?? "",
    groupId: e.minimax?.groupId ?? "",
    model: e.minimax?.model ?? "",
    voiceId: e.minimax?.voiceId ?? "",
    speed: e.minimax?.speed,
    vol: e.minimax?.vol,
    format: e.minimax?.format ?? "mp3"
  } : e.engine === "local_gsvi" ? {
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
    textSplitMethod: e.localGsvi?.textSplitMethod ?? "",
    batchSize: e.localGsvi?.batchSize
  } : {
    text: e.text,
    engine: "index_tts",
    origin: e.indexTts?.origin ?? "",
    model: e.indexTts?.model ?? "",
    voiceId: e.indexTts?.voiceId ?? "",
    language: e.indexTts?.language ?? "",
    format: e.indexTts?.format ?? "wav",
    durationFactor: e.indexTts?.durationFactor,
    emoWeight: e.indexTts?.emoWeight,
    emotion: e.indexTts?.emotion ?? ""
  };
}
async function Ya(e) {
  const t = Xa(e), n = JSON.stringify(t);
  if (Object.keys(t).some((i) => /api[_-]?key|authorization|token|secret|password/i.test(i)))
    throw new Error("音频缓存键不得包含密钥字段");
  const s = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(n));
  return [...new Uint8Array(s)].map((i) => i.toString(16).padStart(2, "0")).join("");
}
function Za() {
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
function Qa(e, t) {
  let n = null, s = null, i = 0;
  function o(l) {
    n = l, l.onversionchange = () => {
      l.close(), n === l && (n = null);
    };
    const a = l.onclose;
    return l.onclose = (d) => {
      n === l && (n = null), typeof a == "function" && a.call(l, d);
    }, l;
  }
  async function r() {
    return n || (s ? await s : (s = new Promise((l, a) => {
      const d = e.open(t, Ja);
      i += 1, d.onupgradeneeded = () => {
        const m = d.result;
        m.objectStoreNames.contains(Le) || m.createObjectStore(Le, { keyPath: "key" });
      }, d.onsuccess = () => l(o(d.result)), d.onerror = () => a(d.error ?? Error("IndexedDB 打开失败"));
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
      return i;
    }
  };
}
function qa(e, t) {
  const n = Qa(e, t);
  async function s() {
    return await n.getDb();
  }
  return {
    async get(i) {
      const o = await s();
      return await new Promise((r, l) => {
        const d = o.transaction(Le, "readonly").objectStore(Le).get(i);
        d.onsuccess = () => r(d.result), d.onerror = () => l(d.error ?? Error("读取缓存失败"));
      });
    },
    async put(i) {
      const o = await s();
      await new Promise((r, l) => {
        const a = o.transaction(Le, "readwrite");
        a.objectStore(Le).put(i), a.oncomplete = () => r(), a.onerror = () => l(a.error ?? Error("写入缓存失败"));
      });
    },
    async delete(i) {
      const o = await s();
      await new Promise((r, l) => {
        const a = o.transaction(Le, "readwrite");
        a.objectStore(Le).delete(i), a.oncomplete = () => r(), a.onerror = () => l(a.error ?? Error("删除缓存失败"));
      });
    },
    async clear() {
      const i = await s();
      await new Promise((o, r) => {
        const l = i.transaction(Le, "readwrite");
        l.objectStore(Le).clear(), l.oncomplete = () => o(), l.onerror = () => r(l.error ?? Error("清空缓存失败"));
      });
    },
    async getAll() {
      const i = await s();
      return await new Promise((o, r) => {
        const a = i.transaction(Le, "readonly").objectStore(Le).openCursor(), d = [];
        a.onsuccess = () => {
          const m = a.result;
          if (!m) {
            o(d);
            return;
          }
          d.push(m.value), m.continue();
        }, a.onerror = () => r(a.error ?? Error("读取缓存记录失败"));
      });
    }
  };
}
async function ec(e) {
  const t = await e.getAll();
  let n = t.reduce((o, r) => o + (r.blob?.size ?? 0), 0);
  if (t.length <= Wi && n <= zi)
    return;
  const s = [...t].sort((o, r) => o.created_at - r.created_at);
  let i = t.length;
  for (const o of s) {
    if (i <= Wi && n <= zi)
      break;
    await e.delete(o.key), i -= 1, n -= o.blob?.size ?? 0;
  }
}
function tc(e) {
  const t = e?.backend === "memory" ? Za() : qa(
    e?.indexedDB ?? indexedDB,
    e?.dbName ?? za
  );
  return {
    async get(n) {
      return (await t.get(n))?.blob ?? null;
    },
    async set(n, s, i = Date.now()) {
      await t.put({
        key: n,
        blob: s,
        created_at: i
      }), await ec(t);
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
        totalBytes: n.reduce((s, i) => s + (i.blob?.size ?? 0), 0)
      };
    },
    async list(n, s) {
      const o = (await t.getAll()).sort((l, a) => a.created_at - l.created_at), r = Math.max(0, (n - 1) * s);
      return {
        items: o.slice(r, r + s).map((l) => ({
          key: l.key,
          size: l.blob?.size ?? 0,
          createdAt: l.created_at
        })),
        total: o.length,
        totalBytes: o.reduce((l, a) => l + (a.blob?.size ?? 0), 0)
      };
    }
  };
}
const cs = tc({
  backend: typeof indexedDB > "u" ? "memory" : "indexeddb"
});
function nc(e) {
  return cs.get(e);
}
function sc(e, t) {
  return cs.set(e, t);
}
function fr() {
  return cs.clear();
}
function ic() {
  return cs.stats();
}
let _t = null, $n = null;
function Dn() {
  _t && (_t.pause(), $n?.());
}
function dr(e, t, n, s, i) {
  const o = URL.createObjectURL(e), r = new Audio(o);
  let l = "paused";
  const a = () => {
    URL.revokeObjectURL(o), _t === r && (_t = null, $n = null);
  }, d = () => {
    _t && _t !== r && (_t.pause(), $n?.()), _t = r, $n = a;
  };
  r.onplay = () => {
    l = "playing", t?.();
  }, r.onpause = () => {
    l === "ended" || l === "error" || (l = "paused", i?.());
  }, r.onended = () => {
    l = "ended", a(), n?.();
  }, r.onerror = (h) => {
    l = "error", a(), s?.(h);
  };
  const m = async () => {
    d();
    try {
      await r.play();
    } catch (h) {
      throw l = "error", a(), s?.(h), h;
    }
  };
  return m().catch(() => {
  }), {
    stop: () => {
      l = "ended", r.pause(), a();
    },
    pause: () => {
      l === "playing" && r.pause();
    },
    resume: m,
    restart: async () => {
      r.currentTime = 0, await m();
    },
    getState: () => l
  };
}
function pr(e) {
  return [...e].map((n) => n.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(n) ? "_" : n).join("").trim() || "audio.mp3";
}
function oc(e, t, n = "mp3") {
  return pr(`tavern_multi_tts_${e}_${t}.${n}`);
}
function rc(e, t) {
  const n = pr(t), s = URL.createObjectURL(e), i = URL.revokeObjectURL.bind(URL), o = document.createElement("a");
  o.href = s, o.download = n, document.body.appendChild(o), o.click(), o.remove(), window.setTimeout(() => i(s), 0);
}
const lc = "Tavern Multi-TTS", Ss = "tavern_multi_tts", ac = "0.1.0", ws = "tavern-multi-tts-root", Se = "[Tavern Multi-TTS]", Jn = ["ZH", "EN", "JA", "AR", "ES"], mr = 2, gr = [
  "speech-02-hd",
  "speech-02-turbo",
  "speech-2.8-hd",
  "speech-2.8-turbo",
  "speech-2.6-hd",
  "speech-2.6-turbo"
], jn = [
  "<VOICE_RULE>",
  '请仅对角色：${mapped_characters} 的“直接台词”添加 <say char="角色名">...</say> 标签。',
  "角色映射名单：${mapped_characters}",
  "char 必须与映射角色名完全一致，不要使用其他称呼。",
  '<say char="角色名">禁止填<user>。',
  "不要给旁白、动作描写、心理活动、双语的中文翻译内容加 <say> 标签。",
  "可在 <say> </say> 之间自然加入语气词标签，但不要滥用。",
  "仅可使用以下语气词标签：",
  "(laughs), (chuckle), (coughs), (clear-throat), (groans), (breath), (pant), (inhale), (exhale), (gasps), (sniffs), (sighs), (snorts), (burps), (lip-smacking), (humming), (hissing), (emm), (sneezes)",
  "除上述外，禁止输出其它括号语气词（如 (softly)、(gently)）。",
  "不要输出空的 <say></say>，不要嵌套 <say> 标签。",
  "示例:",
  " <say char=“角色名”>“(laughs)你好呀！” </say>",
  "</VOICE_RULE>"
].join(`
`), Fs = [
  "<VOICE_RULE>",
  "总则：",
  '请仅对角色：${mapped_characters} 的“直接台词”添加 <say char="角色名">...</say> 标签。',
  "角色映射名单：${mapped_characters}",
  "char 必须与映射角色名完全一致，不要使用其他称呼。",
  '<say char="角色名">禁止填<user>。',
  "不要给旁白、动作描写、心理活动、双语的中文翻译内容加 <say> 标签。",
  "不要输出空的 <say></say>，不要嵌套 <say> 标签。",
  "禁止括号语气词（如 (laughs)、(sighs)、(softly)）。",
  "",
  "情绪规则：",
  '当对话内容有明显情绪变化时应为角色添加情绪向量 emo="名称:数值"。',
  "合法情绪向量仅限：喜、怒、哀、惧、厌恶、低落、惊喜、平静。",
  "每句独立判断；不要沿用上一句，也不要给日常句补“平静”",
  '日常、闲聊、平静叙述省略 emo，只写：<say char="角色名">台词</say>',
  "允许使用1 至 3 项不同情绪；优先用一项，确有复合情绪时最多三项。多项用半角逗号分隔。char 与 emo 属性顺序不限。",
  "每个数值必须是大于 0、不超过 1.0 的有限数字。轻微 0.10–0.35，明显 0.35–0.60，0.80 以上只用于重大爆发，数值使用尽量克制不要滥用。",
  "禁止：八位数组、英文情绪名、零值占位、重复名称、无意义堆叠。",
  "示例:",
  '<say char="角色名">今天要去哪里？</say>',
  '<say char="角色名" emo="怒:0.35">别骗我。</say>',
  '<say char="角色名" emo="哀:0.30,低落:0.15">我不想再等了。</say>',
  "</VOICE_RULE>"
].join(`
`), cc = [
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
`), Et = {
  schemaVersion: mr,
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
  indexTtsBaseUrl: "http://127.0.0.1:7860",
  indexTtsVoiceId: "",
  indexTtsLanguage: "ZH",
  indexTtsCharacterMappings: [],
  indexTtsCharacterMappingPresets: [],
  indexTtsDurationFactor: 1,
  indexTtsEmoWeight: 0.8,
  injectEnabled: !0,
  injectDepth: 1,
  injectRole: "system",
  injectTemplate: jn,
  indexTtsInjectTemplate: Fs
};
function Ot(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function se(e, t) {
  return typeof e == "string" ? e : t;
}
function uc(e) {
  const t = se(e, jn) || jn;
  return t === cc ? jn : t;
}
function Es(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Ne(e, t, n, s, i = !1) {
  const o = typeof e == "number" ? e : Number(e);
  if (!Number.isFinite(o))
    return s;
  const r = i ? Math.round(o) : o;
  return Math.min(n, Math.max(t, r));
}
function fc(e) {
  return e === "minimax" || e === "local_gsvi" || e === "index_tts" ? e : "minimax";
}
function hr(e) {
  return Jn.includes(String(e)) ? e : Et.indexTtsLanguage;
}
function dc(e) {
  return e === "beijing" ? "beijing" : "international";
}
function pc(e) {
  return gr.includes(String(e)) ? e : Et.model;
}
function mc(e) {
  return e === "manual" || e === "auto_first_n" || e === "auto_all" ? e : Et.prefetchMode;
}
function gc(e) {
  return e === "user" || e === "assistant" || e === "system" ? e : Et.injectRole;
}
function hc(e) {
  return e === "zh" || e === "en" || e === "ja" ? e : Et.testLanguage;
}
function vc(e) {
  return e === "wav" ? "wav" : "mp3";
}
function vr(e) {
  return Array.isArray(e) ? e.filter(Ot).map((t) => ({
    characterName: se(t.characterName, "").trim(),
    minimaxVoiceId: se(t.minimaxVoiceId, "").trim()
  })).filter((t) => t.characterName || t.minimaxVoiceId) : [];
}
function _c(e) {
  return Array.isArray(e) ? e.filter(Ot).map((t) => ({
    name: se(t.name, "").trim(),
    mappings: vr(t.mappings)
  })).filter((t) => t.name) : [];
}
function _r(e) {
  return Array.isArray(e) ? e.filter(Ot).map((t) => ({
    characterName: se(t.characterName, "").trim(),
    gsviVoiceId: se(t.gsviVoiceId, "").trim(),
    gsviLanguage: se(t.gsviLanguage, "").trim(),
    gsviEmotion: se(t.gsviEmotion, "").trim()
  })).filter((t) => t.characterName || t.gsviVoiceId) : [];
}
function bc(e) {
  return Array.isArray(e) ? e.filter(Ot).map((t) => ({
    name: se(t.name, "").trim(),
    mappings: _r(t.mappings)
  })).filter((t) => t.name) : [];
}
function br(e) {
  return Array.isArray(e) ? e.filter(Ot).map((t) => ({
    characterName: se(t.characterName, "").trim(),
    indexTtsVoiceId: se(t.indexTtsVoiceId, "").trim(),
    indexTtsLanguage: hr(t.indexTtsLanguage)
  })).filter((t) => t.characterName || t.indexTtsVoiceId) : [];
}
function yc(e) {
  return Array.isArray(e) ? e.filter(Ot).map((t) => ({
    name: se(t.name, "").trim(),
    mappings: br(t.mappings)
  })).filter((t) => t.name) : [];
}
function Wt(e) {
  const t = Ot(e) ? e : {};
  return {
    schemaVersion: mr,
    enabled: Es(t.enabled, Et.enabled),
    ttsEngine: fc(t.ttsEngine),
    apiKey: se(t.apiKey, ""),
    groupId: se(t.groupId, ""),
    voiceId: se(t.voiceId, ""),
    voiceCatalogSelectedId: se(t.voiceCatalogSelectedId, ""),
    minimaxRegion: dc(t.minimaxRegion),
    testLanguage: hc(t.testLanguage),
    model: pc(t.model),
    speed: Ne(t.speed, 0.5, 2, 1),
    vol: Ne(t.vol, 0, 10, 1),
    requestTimeoutMs: Ne(t.requestTimeoutMs, 1e3, 3e4, 15e3, !0),
    maxConcurrency: Ne(t.maxConcurrency, 1, 10, 3, !0),
    prefetchMode: mc(t.prefetchMode),
    prefetchFirstCount: Ne(t.prefetchFirstCount, 1, 10, 2, !0),
    localGsviBaseUrl: se(t.localGsviBaseUrl, ""),
    localGsviAuthToken: se(t.localGsviAuthToken, ""),
    localGsviModel: se(t.localGsviModel, ""),
    localGsviFormat: vc(t.localGsviFormat),
    localGsviUseReferenceAudio: Es(t.localGsviUseReferenceAudio, !1),
    localGsviCharacter: se(t.localGsviCharacter, ""),
    localGsviLanguage: se(t.localGsviLanguage, "ja"),
    localGsviEmotion: se(t.localGsviEmotion, ""),
    localGsviReferenceText: se(t.localGsviReferenceText, ""),
    localGsviTopK: Ne(t.localGsviTopK, 1, 200, 20, !0),
    localGsviTopP: Ne(t.localGsviTopP, 0, 1, 0.7),
    localGsviTemperature: Ne(t.localGsviTemperature, 0, 2, 0.7),
    localGsviTextLang: se(t.localGsviTextLang, "多语种混合"),
    localGsviTextSplitMethod: se(t.localGsviTextSplitMethod, "按标点符号切"),
    localGsviBatchSize: Ne(t.localGsviBatchSize, 1, 8, 1, !0),
    characterMappings: vr(t.characterMappings),
    characterMappingPresets: _c(t.characterMappingPresets),
    gsviCharacterMappings: _r(t.gsviCharacterMappings),
    gsviCharacterMappingPresets: bc(t.gsviCharacterMappingPresets),
    indexTtsBaseUrl: se(t.indexTtsBaseUrl, Et.indexTtsBaseUrl),
    indexTtsVoiceId: se(t.indexTtsVoiceId, ""),
    indexTtsLanguage: hr(t.indexTtsLanguage),
    indexTtsCharacterMappings: br(t.indexTtsCharacterMappings),
    indexTtsCharacterMappingPresets: yc(t.indexTtsCharacterMappingPresets),
    indexTtsDurationFactor: Ne(t.indexTtsDurationFactor, 0.5, 2, 1),
    indexTtsEmoWeight: Ne(t.indexTtsEmoWeight, 0, 1, 0.8),
    injectEnabled: Es(t.injectEnabled, !0),
    injectDepth: Ne(t.injectDepth, 0, 50, 1, !0),
    injectRole: gc(t.injectRole),
    injectTemplate: uc(t.injectTemplate),
    indexTtsInjectTemplate: se(t.indexTtsInjectTemplate, Fs) || Fs
  };
}
function zt(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function xc(e, t) {
  return e.enabled !== t.enabled || e.injectEnabled !== t.injectEnabled || e.injectDepth !== t.injectDepth || e.injectRole !== t.injectRole || e.injectTemplate !== t.injectTemplate || e.indexTtsInjectTemplate !== t.indexTtsInjectTemplate || e.ttsEngine !== t.ttsEngine || !zt(e.characterMappings, t.characterMappings) || !zt(e.gsviCharacterMappings, t.gsviCharacterMappings) || !zt(e.indexTtsCharacterMappings, t.indexTtsCharacterMappings);
}
function Tc(e, t) {
  return e.enabled !== t.enabled || e.ttsEngine !== t.ttsEngine || !zt(e.characterMappings, t.characterMappings) || !zt(e.gsviCharacterMappings, t.gsviCharacterMappings) || !zt(e.indexTtsCharacterMappings, t.indexTtsCharacterMappings);
}
function Sc(e, t) {
  return {
    syncInjection: xc(e, t),
    refreshDecorations: Tc(e, t)
  };
}
function wc(e, t, n = {}) {
  let s = !1, i = !1, o = null, r = null, l = null;
  function a() {
    return Wt(e.readRawSettings());
  }
  function d() {
    const P = a();
    return e.writeSettings(P), P;
  }
  function m() {
    if (s)
      return !0;
    const P = document.getElementById(ws);
    P && P.remove();
    const V = e.findSettingsRoot();
    return V ? (l = document.createElement("div"), l.id = ws, l.dataset.tavernMultiTts = "settings", V.appendChild(l), t.mount(l, a()), r = e.onPageHide(() => {
      h({ removeSettings: !1 });
    }), s = !0, n.startRuntime?.(), console.info(`${Se} settings panel mounted`), !0) : !1;
  }
  function h(P) {
    n.stopRuntime?.(), n.stopPlayback?.(), o?.(), o = null, i = !1, r?.(), r = null, t.unmount(), (l ?? document.getElementById(ws))?.remove(), l = null, s = !1, P.removeSettings && e.removeSettings();
  }
  function w() {
    s || i || (d(), !m() && (i = !0, o = e.onAppReady(() => {
      const P = i;
      i = !1;
      const V = o;
      o = null, V?.(), P && (m() || console.error(
        `${Se} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`
      ));
    })));
  }
  function S(P) {
    const V = a();
    V.enabled = P, e.writeSettings(V), n.syncInjection?.(), n.refreshDecorations?.();
  }
  function B(P) {
    const V = a();
    V.injectEnabled = P, e.writeSettings(V), n.syncInjection?.();
  }
  return {
    activate: w,
    disable() {
      h({ removeSettings: !1 }), console.info(`${Se} disabled`);
    },
    destroy() {
      h({ removeSettings: !1 });
    },
    install() {
      d();
    },
    clean() {
      return h({ removeSettings: !0 }), console.info(`${Se} settings cleaned`), n.clearCache?.();
    },
    delete() {
      return h({ removeSettings: !0 }), console.info(`${Se} deleted`), n.clearCache?.();
    },
    updateSettings(P) {
      const V = a();
      e.writeSettings(Wt(P));
      const R = Sc(V, a());
      R.syncInjection && n.syncInjection?.(), R.refreshDecorations && n.refreshDecorations?.();
    },
    setEnabled: S,
    setInjectEnabled: B,
    isActive() {
      return s;
    }
  };
}
function Ec() {
  return document.querySelector("#extensions_settings2") ?? document.querySelector("#extensions_settings");
}
class F extends Error {
  code;
  status;
  constructor(t, n, s) {
    super(t), this.name = "TtsRequestError", this.code = n, this.status = s;
  }
}
function yr(e) {
  return e instanceof F;
}
function Ic(e) {
  return new F(`请求超时（${e}ms），请检查网络或增大超时时间`, "timeout");
}
function Cc() {
  return new F("请求已取消", "cancelled");
}
async function xt(e, t, n, s) {
  const i = new AbortController();
  let o = !1, r = !1, l = null;
  const a = () => {
    r || (r = !0, clearTimeout(m), h?.removeEventListener("abort", w));
  }, d = () => o && !h?.aborted ? Ic(s) : Cc(), m = setTimeout(() => {
    o = !0, i.abort("timeout");
  }, s), h = n.signal, w = () => {
    i.abort(h?.reason ?? "cancelled");
  };
  h && (h.aborted ? i.abort(h.reason ?? "cancelled") : h.addEventListener("abort", w, { once: !0 }));
  const S = () => {
    l?.(d());
  };
  i.signal.addEventListener("abort", S);
  const B = () => new Promise((V, R) => {
    if (i.signal.aborted) {
      R(d());
      return;
    }
    l = R;
  }), P = async (V) => {
    try {
      return await Promise.race([V, B()]);
    } catch (R) {
      throw R instanceof F ? R : i.signal.aborted ? d() : R;
    } finally {
      a(), i.signal.removeEventListener("abort", S);
    }
  };
  try {
    const V = await Promise.race([
      e(t, {
        ...n,
        signal: i.signal
      }),
      B()
    ]);
    return {
      ok: V.ok,
      status: V.status,
      statusText: V.statusText,
      headers: V.headers,
      text: () => P(V.text()),
      async json() {
        const R = await P(V.text());
        try {
          return JSON.parse(R);
        } catch {
          throw new F(
            "服务返回的不是合法 JSON，请检查地址或稍后重试",
            "invalid_json"
          );
        }
      },
      blob: () => P(V.blob()),
      close: a
    };
  } catch (V) {
    throw a(), i.signal.removeEventListener("abort", S), V instanceof F ? V : i.signal.aborted ? d() : V;
  }
}
function Jt(e, t) {
  return `${e.replace(/\/+$/, "")}${t.startsWith("/") ? "" : "/"}${t}`;
}
function Mc(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function Ac(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const Pc = /api[_-]?key|authorization|token|secret|cookie|password/i;
function Xn(e) {
  if (typeof e == "string")
    return e.length > 80 ? `${e.slice(0, 80)}…(len=${e.length})` : e;
  if (Array.isArray(e))
    return e.map((n) => Xn(n));
  if (!e || typeof e != "object")
    return e;
  const t = {};
  for (const [n, s] of Object.entries(e)) {
    if (Pc.test(n)) {
      t[n] = "[redacted]";
      continue;
    }
    if (n === "text" || n === "input" || n === "referenceText" || n === "reference_text") {
      t[n] = typeof s == "string" ? `[text len=${s.length}]` : "[text]";
      continue;
    }
    t[n] = Xn(s);
  }
  return t;
}
function fi(e, t, n) {
  if (n === void 0) {
    console.info(`${Se} [${e}] ${t}`);
    return;
  }
  console.info(`${Se} [${e}] ${t}`, Xn(n));
}
function Bs(e, t, n) {
  if (n === void 0) {
    console.warn(`${Se} [${e}] ${t}`);
    return;
  }
  console.warn(`${Se} [${e}] ${t}`, Xn(n));
}
const xr = "IndexTTS-2.5", Hs = "indextts", Ks = "1", Ws = "2.5";
function In(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Rc(e) {
  return Jn.includes(String(e));
}
function Vc(e) {
  const t = {
    model: xr,
    input: e.text,
    voice: e.voiceId.trim(),
    response_format: "wav",
    language: e.language,
    duration_factor: e.durationFactor,
    emo_weight: e.emoWeight
  };
  return e.emotion && Object.keys(e.emotion).length > 0 && (t.emotion = e.emotion), t;
}
function Nc(e) {
  if (!e.baseUrl.trim())
    throw new F("请先填写 IndexTTS 服务地址", "config");
  if (!e.voiceId.trim())
    throw new F("请先选择 IndexTTS 音色预设", "config");
  if (!Rc(e.language))
    throw new F("IndexTTS 语言必须是 ZH、EN、JA、AR 或 ES", "config");
  if (!e.text.trim())
    throw new F("IndexTTS 合成文本为空", "config");
}
function Lc(e) {
  return (e ?? "").split(";")[0]?.trim().toLowerCase() === "audio/wav";
}
function kc(e, t) {
  if (In(e) && In(e.error)) {
    const n = typeof e.error.code == "string" ? e.error.code.trim() : "", s = typeof e.error.message == "string" ? e.error.message.trim() : "";
    if (n || s)
      return new F(
        `IndexTTS 请求失败：code=${n || "unknown"}, message=${s || "（无消息）"}`,
        "http",
        t
      );
  }
  return new F(`IndexTTS 请求失败：HTTP ${t}`, "http", t);
}
async function Is(e) {
  try {
    const t = await e.text();
    try {
      return kc(JSON.parse(t), e.status);
    } catch {
      return new F(
        `IndexTTS 请求失败：HTTP ${e.status}`,
        "http",
        e.status
      );
    }
  } catch (t) {
    return t instanceof F ? new F(
      `IndexTTS 请求失败：HTTP ${e.status}`,
      "http",
      e.status
    ) : new F(
      `IndexTTS 请求失败：HTTP ${e.status}`,
      "http",
      e.status
    );
  }
}
function Gc(e) {
  return e.service !== Hs ? `IndexTTS 健康检查失败：服务名无效（期望 ${Hs}）` : e.api_version !== Ks ? `IndexTTS 健康检查失败：API 版本不匹配（期望 ${Ks}）` : e.model_version !== Ws ? `IndexTTS 健康检查失败：模型版本不匹配（期望 ${Ws}）` : e.model_loaded !== !0 ? "IndexTTS 服务在线，但模型尚未加载。请先在服务端加载模型后再试。" : e.ok !== !0 ? "IndexTTS 服务报告未就绪" : "IndexTTS 健康检查响应结构无效";
}
function Oc(e) {
  return In(e) ? e.ok === !0 && e.service === Hs && e.api_version === Ks && e.model_version === Ws && e.model_loaded === !0 ? { ok: !0, message: "IndexTTS 服务在线，模型已加载（IndexTTS-2.5）" } : { ok: !1, message: Gc(e) } : { ok: !1, message: "IndexTTS 健康检查响应结构无效" };
}
function $c(e) {
  if (!In(e) || !Array.isArray(e.voices))
    throw new F("IndexTTS 音色列表结构无效：缺少 voices 数组", "invalid_json");
  return e.voices.map((t, n) => {
    if (!In(t) || typeof t.id != "string" || !t.id.trim())
      throw new F(
        `IndexTTS 音色列表结构无效：voices[${n}] 缺少有效 id`,
        "invalid_json"
      );
    const s = typeof t.name == "string" && t.name.trim() ? t.name.trim() : t.id.trim();
    return {
      id: t.id.trim(),
      name: s
    };
  });
}
function Dc(e) {
  return e instanceof F ? { ok: !1, message: e.message } : {
    ok: !1,
    message: "无法连接 IndexTTS 服务。请确认服务已启动，并检查地址是否正确。"
  };
}
function jc(e) {
  const t = fetch;
  return {
    id: "index_tts",
    async checkHealth(n) {
      if (n.engine !== "index_tts")
        throw new F("IndexTTS 适配器收到了错误的引擎请求", "config");
      const s = n.baseUrl.trim();
      if (!s)
        return { ok: !1, message: "请先填写 IndexTTS 服务地址" };
      try {
        const i = await xt(
          t,
          Jt(s, "/v1/health"),
          { method: "GET", signal: n.signal },
          n.timeoutMs
        );
        if (!i.ok)
          throw await Is(i);
        const o = await i.json();
        return Oc(o);
      } catch (i) {
        return Dc(i);
      }
    },
    async listVoices(n) {
      if (n.engine !== "index_tts")
        throw new F("IndexTTS 适配器收到了错误的引擎请求", "config");
      const s = n.baseUrl.trim();
      if (!s)
        throw new F("请先填写 IndexTTS 服务地址", "config");
      const i = await xt(
        t,
        Jt(s, "/v1/voices"),
        { method: "GET", signal: n.signal },
        n.timeoutMs
      );
      if (!i.ok)
        throw await Is(i);
      return $c(await i.json());
    },
    async synthesize(n) {
      if (n.engine !== "index_tts")
        throw new F("IndexTTS 适配器收到了错误的引擎请求", "config");
      Nc(n);
      const s = Vc(n), i = Jt(n.baseUrl.trim(), "/v1/audio/speech");
      fi("index_tts", "synthesize", {
        url: i,
        voiceId: s.voice,
        language: s.language,
        model: s.model,
        durationFactor: s.duration_factor,
        emoWeight: s.emo_weight,
        emotion: s.emotion ? Object.keys(s.emotion) : void 0,
        text: n.text
      });
      const o = await xt(
        t,
        i,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(s),
          signal: n.signal
        },
        n.timeoutMs
      );
      if (!o.ok)
        throw await Is(o);
      const r = o.headers.get("content-type");
      if (!Lc(r))
        throw o.close(), new F(
          `IndexTTS 合成失败：响应类型不是 audio/wav（当前：${r || "缺失"}）`,
          "missing_audio",
          o.status
        );
      const l = await o.blob();
      if (!l || l.size <= 0)
        throw new F("IndexTTS 合成失败：返回的音频为空", "missing_audio");
      return l;
    }
  };
}
const Uc = ["v2", "v3", "v4", "v2Pro"];
function Tr(e) {
  const t = e.trim();
  if (!t)
    return { modelName: "", version: "" };
  const n = t.lastIndexOf("|");
  return n < 0 ? { modelName: t, version: "" } : {
    modelName: t.slice(0, n).trim(),
    version: t.slice(n + 1).trim()
  };
}
function Fc(e) {
  const t = e.trim().toLowerCase();
  return t === "v2pro" ? "v2Pro" : t === "v2" || t === "v3" || t === "v4" ? t : e.trim();
}
function Bc(e) {
  const t = e.trim();
  return t ? {
    英文: "英语",
    日文: "日语",
    韩文: "韩语"
  }[t] ?? t : "多语种混合";
}
function Hc(e) {
  const t = Tr(e.modelId), n = t.modelName.trim(), s = Fc(t.version) || "v2Pro";
  return {
    url: Jt(e.baseUrl.trim(), "/v1/audio/speech"),
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
        text_lang: Bc(e.textLang),
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
function Kc(e) {
  if (!e.baseUrl.trim())
    throw new F("请先填写 Local-GSVI 服务地址", "config");
  if (!e.modelId.trim())
    throw new F("请先填写或选择 Local-GSVI 模型（modelName|version）", "config");
  if (!e.language.trim() || !e.emotion.trim())
    throw new F(
      "GSVI 生成要求映射完整：语种(prompt_lang)/情绪(emotion)不能为空",
      "config"
    );
  if (!Tr(e.modelId).modelName)
    throw new F("Local-GSVI 模型格式错误，期望 modelName|version", "config");
  if (!e.text.trim())
    throw new F("Local-GSVI 合成文本为空", "config");
}
function Me(e) {
  return typeof e == "object" && e !== null;
}
function Wc(e) {
  const t = e.replace(/^data:audio\/[a-zA-Z0-9.+-]+;base64,/i, "").trim();
  return t.length >= 16 && /^[A-Za-z0-9+/=\r\n]+$/.test(t);
}
function Sr(e) {
  return e.trim().match(/^data:audio\/[a-zA-Z0-9.+-]+;base64,(.+)$/i)?.[1] ?? e.trim();
}
function zc(e) {
  if (!Me(e))
    return null;
  const t = e, n = Me(t.data) ? t.data : void 0, s = Me(t.output) ? t.output : void 0, i = [
    t.audio,
    t.data,
    t.audio_base64,
    t.b64,
    n?.audio,
    n?.audio_base64,
    s?.audio,
    s?.audio_base64
  ];
  for (const o of i)
    if (typeof o == "string" && Wc(o))
      return Sr(o);
  return null;
}
function Jc(e) {
  if (!Me(e))
    return null;
  const t = e, n = Me(t.data) ? t.data : void 0, s = Me(t.output) ? t.output : void 0, i = [
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
  for (const o of i)
    if (typeof o == "string" && o.trim())
      return o.trim();
  return null;
}
function Xc(e) {
  if (!Me(e))
    return "";
  const t = Me(e.error) ? e.error : void 0, n = Me(e.base_resp) ? e.base_resp : void 0, s = Me(e.data) ? e.data : void 0, i = [
    e.msg,
    e.message,
    e.error,
    t?.msg,
    t?.message,
    n?.status_msg,
    s?.msg,
    s?.message
  ];
  for (const o of i)
    if (typeof o == "string" && o.trim())
      return o.trim();
  return "";
}
function Yc(e) {
  const t = atob(Sr(e)), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function Cs(e) {
  const t = e?.trim() ?? "";
  return t ? { Authorization: `Bearer ${t}` } : {};
}
function Zc(e) {
  const t = fetch;
  async function n(s, i, o, r, l) {
    const a = /^https?:\/\//i.test(i) ? i : Jt(s, i);
    let d = !1;
    try {
      d = Mc(s) === new URL(a).origin;
    } catch {
      d = !1;
    }
    const m = await xt(
      t,
      a,
      {
        method: "GET",
        headers: d ? Cs(o) : {},
        signal: l
      },
      r
    );
    if (!m.ok)
      throw new F(`下载 GSVI 输出失败：HTTP ${m.status}`, "http", m.status);
    return await m.blob();
  }
  return {
    id: "local_gsvi",
    async checkHealth(s) {
      if (s.engine !== "local_gsvi")
        throw new F("Local-GSVI 适配器收到了错误的引擎请求", "config");
      if (!s.baseUrl.trim())
        return { ok: !1, message: "请先填写 Local-GSVI 服务地址" };
      try {
        const i = await this.listVoices(s);
        return {
          ok: i.length > 0,
          message: i.length > 0 ? `已检测到 ${i.length} 个模型` : "未解析到模型映射"
        };
      } catch (i) {
        return {
          ok: !1,
          message: i instanceof Error ? i.message : String(i)
        };
      }
    },
    async listVoices(s) {
      if (s.engine !== "local_gsvi")
        throw new F("Local-GSVI 适配器收到了错误的引擎请求", "config");
      const i = s.baseUrl.trim();
      if (!i)
        throw new F("请先填写 Local-GSVI 服务地址", "config");
      const o = [];
      for (const r of Uc) {
        const l = Jt(i, `/models/${encodeURIComponent(r)}`);
        try {
          const a = await xt(
            t,
            l,
            { method: "GET", headers: Cs(s.authToken), signal: s.signal },
            s.timeoutMs
          );
          if (!a.ok) {
            Bs("local_gsvi", `GET /models/${r} failed`, {
              status: a.status
            }), a.close();
            continue;
          }
          const d = await a.json(), m = Me(d) && Me(d.models) ? d.models : d;
          if (!Me(m))
            continue;
          Object.entries(m).forEach(([h, w]) => {
            if (!h || !Me(w))
              return;
            const S = Object.keys(w).filter(Boolean).sort((P, V) => P.localeCompare(V)), B = {};
            S.forEach((P) => {
              const V = w[P];
              B[P] = Array.isArray(V) ? V.map((R) => String(R).trim()).filter(Boolean) : typeof V == "string" ? [V.trim()].filter(Boolean) : [];
            }), o.push({
              id: `${h}|${r}`,
              name: `${h} [${r}]`,
              source: "gsvi_model",
              language: S.join(","),
              languages: S,
              emotionsByLanguage: B
            });
          });
        } catch (a) {
          if (a instanceof F && a.code === "cancelled")
            throw a;
          Bs("local_gsvi", `GET /models/${r} failed`);
        }
      }
      if (o.length === 0)
        throw new F(
          "未在 /models/{v2|v3|v4|v2Pro} 中解析到模型映射，请检查接口返回结构",
          "missing_audio"
        );
      return o.sort((r, l) => r.name.localeCompare(l.name));
    },
    async synthesize(s) {
      if (s.engine !== "local_gsvi")
        throw new F("Local-GSVI 适配器收到了错误的引擎请求", "config");
      Kc(s);
      const i = Hc(s), o = {
        "Content-Type": "application/json",
        ...Cs(s.authToken)
      };
      fi("local_gsvi", "synthesize", {
        url: i.url,
        model: i.modelName,
        version: i.version,
        text: s.text
      });
      const r = await xt(
        t,
        i.url,
        {
          method: "POST",
          headers: o,
          body: JSON.stringify(i.payload),
          signal: s.signal
        },
        s.timeoutMs
      );
      if (!r.ok)
        throw new F(
          `Local-GSVI 请求失败：HTTP ${r.status}`,
          "http",
          r.status
        );
      if ((r.headers.get("content-type")?.toLowerCase() ?? "").includes("application/json")) {
        const a = await r.json(), d = zc(a);
        if (d)
          return new Blob([Uint8Array.from(Yc(d))], {
            type: s.format === "wav" ? "audio/wav" : "audio/mpeg"
          });
        const m = Jc(a);
        if (m)
          return await n(
            s.baseUrl.trim(),
            m,
            s.authToken ?? "",
            s.timeoutMs,
            s.signal
          );
        throw new F(
          `Local-GSVI 未返回可用音频：${Xc(a) || "JSON 响应中未找到音频"}`,
          "missing_audio"
        );
      }
      return await r.blob();
    }
  };
}
const Qc = {
  international: {
    tts: "https://api.minimaxi.com/v1/t2a_v2",
    voice: "https://api.minimaxi.com/v1/get_voice"
  },
  beijing: {
    tts: "https://api-bj.minimaxi.com/v1/t2a_v2",
    voice: "https://api-bj.minimaxi.com/v1/get_voice"
  }
}, qc = /* @__PURE__ */ new Set([408, 409, 429, 500, 502, 503, 504]), eu = /* @__PURE__ */ new Set([1e3, 1001, 1002, 1039]), Xi = 2, tu = "tavern_multi_tts_voice_catalog_v1", nu = 1440 * 60 * 1e3;
function Yn(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function zs(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Yi(e) {
  return Qc[zs(e)];
}
function wr(e, t) {
  return `${tu}:${e}:${t.trim()}`;
}
function su(e) {
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
function Zi(e) {
  return `Bearer ${Yn(e)}`;
}
function iu(e) {
  const t = e.trim(), n = new Uint8Array(t.length / 2);
  for (let s = 0; s < t.length; s += 2)
    n[s / 2] = Number.parseInt(t.slice(s, s + 2), 16);
  return n;
}
function ou(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function ru(e) {
  const t = e.trim();
  return /^[0-9a-fA-F]+$/.test(t) && t.length % 2 === 0 ? iu(t) : ou(t);
}
function lu(e, t) {
  const s = `${t ?? ""} ${e}`.toLowerCase(), i = s.includes("japanese") ? "Japanese" : s.includes("english") ? "English" : s.includes("chinese") ? "Chinese" : s.includes("korean") ? "Korean" : s.includes("french") ? "French" : s.includes("german") ? "German" : s.includes("spanish") ? "Spanish" : "Unknown", o = s.includes("female") || s.includes("女") || s.includes("lady") || s.includes("girl") ? "Female" : s.includes("male") || s.includes("男") || s.includes("man") || s.includes("boy") ? "Male" : "Unknown";
  return { language: i, gender: o };
}
function au(e, t) {
  const n = t.trim();
  if (!n)
    return null;
  try {
    const s = localStorage.getItem(wr(e, n));
    if (!s)
      return null;
    const i = JSON.parse(s);
    return !i?.expires_at || Date.now() > i.expires_at ? null : i.items ?? null;
  } catch {
    return null;
  }
}
function cu(e, t, n) {
  const s = t.trim();
  s && localStorage.setItem(
    wr(e, s),
    JSON.stringify({
      expires_at: Date.now() + nu,
      items: n
    })
  );
}
function uu(e) {
  const t = Yn(e.apiKey), n = e.groupId.trim(), s = e.voiceId.trim();
  if (!t || !n || !s)
    throw new F("MiniMax 引擎缺少必要配置：API Key / Group ID / Voice ID", "config");
  if (!e.text.trim())
    throw new F("MiniMax 合成文本为空", "config");
}
function fu(e) {
  return typeof e == "object" && e !== null;
}
function du(e, t) {
  return qc.has(e) || eu.has(t);
}
function pu(e) {
  const t = fetch;
  return {
    id: "minimax",
    async checkHealth(n) {
      if (n.engine !== "minimax")
        throw new F("MiniMax 适配器收到了错误的引擎请求", "config");
      if (!Yn(n.apiKey))
        return { ok: !1, message: "请先填写 MiniMax API Key" };
      try {
        return await this.listVoices({ ...n, forceRefresh: !0 }), { ok: !0, message: "MiniMax 服务可用" };
      } catch (i) {
        return { ok: !1, message: i instanceof Error ? i.message : String(i) };
      }
    },
    async listVoices(n) {
      if (n.engine !== "minimax")
        throw new F("MiniMax 适配器收到了错误的引擎请求", "config");
      const s = Yn(n.apiKey);
      if (!s)
        throw new F("请先填写 API Key", "config");
      const i = zs(n.region);
      if (!n.forceRefresh) {
        const h = au(i, n.groupId);
        if (h && h.length > 0)
          return h;
      }
      const o = Yi(i).voice, r = await xt(
        t,
        o,
        {
          method: "POST",
          headers: {
            Authorization: Zi(s),
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ voice_type: "all" }),
          signal: n.signal
        },
        n.timeoutMs
      ), a = await r.json();
      if (!r.ok || (a.base_resp?.status_code ?? 0) !== 0)
        throw new F(
          a.base_resp?.status_msg ?? r.statusText ?? "拉取音色列表失败",
          "http",
          r.status
        );
      const d = [], m = (h, w = []) => {
        w.forEach((S) => {
          const B = lu(S.voice_id, S.voice_name);
          d.push({
            id: S.voice_id,
            name: S.voice_name ?? S.voice_id,
            description: S.description,
            source: h,
            language: B.language,
            gender: B.gender
          });
        });
      };
      return m("system", a.system_voice ?? []), m("voice_cloning", a.voice_cloning ?? []), m("voice_generation", a.voice_generation ?? []), cu(i, n.groupId, d), d;
    },
    async synthesize(n) {
      if (n.engine !== "minimax")
        throw new F("MiniMax 适配器收到了错误的引擎请求", "config");
      uu(n);
      const s = su(n), i = Yi(n.region).tts, o = {
        Authorization: Zi(n.apiKey),
        "Content-Type": "application/json"
      };
      fi("minimax", "synthesize", {
        model: s.model,
        voiceId: s.voice_setting.voice_id,
        region: zs(n.region),
        groupId: n.groupId.trim(),
        text: n.text
      });
      let r = null;
      for (let l = 0; l <= Xi; l += 1) {
        const a = await xt(
          t,
          i,
          {
            method: "POST",
            headers: o,
            body: JSON.stringify(s),
            signal: n.signal
          },
          n.timeoutMs
        ), d = await a.json();
        if (!fu(d))
          throw new F("MiniMax 响应结构无效", "invalid_json");
        const m = d;
        if (!a.ok || (m.base_resp?.status_code ?? 0) !== 0) {
          const S = m.base_resp?.status_code ?? a.status, B = m.base_resp?.status_msg ?? a.statusText ?? "unknown error";
          if (r = `MiniMax 请求失败：code=${S}, msg=${B}`, du(a.status, S) && l < Xi) {
            Bs("minimax", "retryable synthesize failure", {
              status: a.status,
              attempt: l
            }), await Ac(250 * (l + 1));
            continue;
          }
          throw new F(r, "http", a.status);
        }
        const h = m.data?.audio ?? m.data?.audio_file ?? m.audio_file;
        if (!h)
          throw new F("MiniMax 响应中未找到音频字段", "missing_audio");
        const w = ru(h);
        return new Blob([Uint8Array.from(w)], { type: "audio/mpeg" });
      }
      throw new F(r ?? "MiniMax 请求失败：未知错误", "http");
    }
  };
}
function Un(e) {
  if (e === "minimax")
    return pu();
  if (e === "local_gsvi")
    return Zc();
  if (e === "index_tts")
    return jc();
  throw new F(`未知 TTS 引擎：${String(e)}`, "config");
}
const Js = "tavern_multi_tts_say_rule", mu = 1, gu = {
  system: 0,
  user: 1,
  assistant: 2
};
function hu(e) {
  const t = e.ttsEngine === "index_tts" ? e.indexTtsCharacterMappings : e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.characterMappings, n = [];
  for (const s of t) {
    const i = s.characterName.trim();
    i && !n.includes(i) && n.push(i);
  }
  return n;
}
function vu(e) {
  return e.ttsEngine === "index_tts" ? e.indexTtsInjectTemplate : e.injectTemplate;
}
function _u(e) {
  const t = hu(e).join("、") || "（未配置角色映射）";
  return vu(e).replaceAll("${target_characters}", t).replaceAll("${mapped_characters}", t);
}
function Ms(e, t) {
  return !t.enabled || !t.injectEnabled ? (e.deleteExtensionPrompt(Js), { applied: !1 }) : (e.setExtensionPrompt(
    Js,
    _u(t),
    mu,
    t.injectDepth,
    !1,
    gu[t.injectRole]
  ), { applied: !0, depth: t.injectDepth, role: t.injectRole });
}
function bu(e) {
  e.deleteExtensionPrompt(Js);
}
const Er = [
  "喜",
  "怒",
  "哀",
  "惧",
  "厌恶",
  "低落",
  "惊喜",
  "平静"
], Qi = /<say\b([^>]*)>([\s\S]*?)<\/say>/gi, Ln = /([A-Za-z_]+)\s*=\s*(?:"([^"]*)"|“([^”]*)”)/gi, yu = new Set(Er);
function xu(e) {
  const t = {}, n = new RegExp(Ln.source, Ln.flags);
  let s;
  for (; (s = n.exec(e)) !== null; ) {
    const o = s[2] ?? s[3] ?? "";
    t[s[1].toLowerCase()] = o;
  }
  return e.replace(new RegExp(Ln.source, Ln.flags), "").trim() ? null : t;
}
function ln(e) {
  console.warn(`${Se} invalid say emo`, { reason: e });
}
function Tu(e) {
  if (e === void 0)
    return;
  const t = e.trim();
  if (!t) {
    ln("empty");
    return;
  }
  const s = t.replaceAll("：", ":").replaceAll("，", ",").split(",").map((o) => o.trim()).filter(Boolean);
  if (s.length < 1 || s.length > 3) {
    ln("count");
    return;
  }
  const i = {};
  for (const o of s) {
    const r = o.indexOf(":");
    if (r <= 0 || r !== o.lastIndexOf(":")) {
      ln("separator");
      return;
    }
    const l = o.slice(0, r).trim(), a = o.slice(r + 1).trim();
    if (!yu.has(l) || l in i) {
      ln("name");
      return;
    }
    const d = Number(a);
    if (!Number.isFinite(d) || d <= 0 || d > 1) {
      ln("value");
      return;
    }
    i[l] = d;
  }
  return i;
}
function Su(e) {
  return e ? Er.filter((t) => e[t] !== void 0).map((t) => `${t}:${e[t]}`).join(",") : "";
}
function wu(e) {
  const t = new RegExp(Qi.source, Qi.flags), n = [];
  let s, i = 0;
  for (; (s = t.exec(e)) !== null; ) {
    const o = s[2].trim();
    if (!o)
      continue;
    const r = xu(s[1] ?? "");
    if (!r)
      continue;
    const l = r.char?.trim(), a = Tu(r.emo);
    n.push({
      index: i,
      text: o,
      ...l ? { char: l } : {},
      ...a ? { emotion: a } : {}
    }), i += 1;
  }
  return n;
}
const Eu = /* @__PURE__ */ new Set([
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
]), Ir = /\(([a-z-]+)\)/gi, Iu = /\([a-z-]+\)/gi;
function di(e) {
  return e.replace(/\s{2,}/g, " ").trim();
}
function Cu(e) {
  return di(
    e.replace(Ir, (t, n) => {
      const s = String(n).toLowerCase();
      return Eu.has(s) ? `(${s})` : "";
    })
  );
}
function Mu(e) {
  return di(e.replace(Ir, ""));
}
function Au(e) {
  return di(e.replace(Iu, ""));
}
function Pu(e, t) {
  const n = Cu(e);
  return t === "local_gsvi" || t === "index_tts" ? Au(n) : n;
}
async function Ru(e, t) {
  if (e.length === 0)
    return;
  const n = Math.max(1, Math.min(Math.floor(t), e.length));
  let s = 0;
  const i = Array.from({ length: n }, async () => {
    for (; s < e.length; ) {
      const o = s;
      s += 1, await e[o]();
    }
  });
  await Promise.all(i);
}
const Cn = "data-tavern-multi-tts-rendered", pi = "data-tavern-multi-tts-swipe", us = "tavern-multi-tts-segment", Zn = "tavern-multi-tts-fallback-list";
function Vu(e, t, n) {
  return `${e}:${t}:${n}`;
}
function qi(e) {
  const t = e.split(":");
  if (t.length !== 3)
    return null;
  const n = Number(t[0]), s = Number(t[1]), i = Number(t[2]);
  return [n, s, i].every(Number.isFinite) ? { message_id: n, swipe_id: s, index: i } : null;
}
function kn(e) {
  return document.querySelector(`#chat .mes[mesid="${e}"]`);
}
function Nu(e) {
  return e.querySelector(".mes_text");
}
function Cr(e, t) {
  const n = e.getAttribute(Cn) === "true", s = e.querySelector(`.${us}`) !== null;
  return !n || !s ? !1 : t === void 0 ? !0 : e.getAttribute(pi) === String(t);
}
function Rt(e = document) {
  e.querySelectorAll(`.${us}`).forEach((t) => {
    const n = t.querySelector(".tavern-multi-tts-text")?.textContent ?? "";
    t.replaceWith(document.createTextNode(n));
  }), e.querySelectorAll(`.${Zn}`).forEach((t) => t.remove()), e.querySelectorAll(`[${Cn}]`).forEach((t) => {
    t.removeAttribute(Cn), t.removeAttribute(pi);
  });
}
function ot(e, t) {
  e.classList.remove("is-loading", "is-ready", "is-playing", "is-error"), t !== "idle" && e.classList.add(`is-${t}`);
  const n = e.querySelector(".tavern-multi-tts-indicator");
  n && (n.textContent = t === "loading" ? "⏳" : t === "ready" ? "▶" : t === "playing" ? "⏸" : t === "error" ? "⚠" : "▶");
}
function eo(e) {
  return e.replace(/\s+/g, "").trim();
}
function Lu(e, t, n, s) {
  const i = e.splitText(t);
  i.splitText(n), i.replaceWith(s);
}
function ku(e, t, n, s) {
  const i = [t, n].map((l) => l.trim()).filter(Boolean), o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let r = o.nextNode();
  for (; r; ) {
    const l = r.parentElement;
    if (l && !l.closest(`.${us}`) && !l.closest(`.${Zn}`) && !l.closest(".mes_buttons")) {
      const a = r.nodeValue ?? "";
      for (const d of i) {
        const m = a.indexOf(d);
        if (m >= 0)
          return Lu(r, m, d.length, s), !0;
        if (eo(a) === eo(d))
          return r.replaceWith(s), !0;
      }
    }
    r = o.nextNode();
  }
  return !1;
}
function Gu(e, t, n, s, i, o, r) {
  const l = Vu(e, t, n.index), a = document.createElement("span");
  a.className = us, a.dataset.tavernMultiTtsKey = l;
  const d = document.createElement("span");
  d.className = "tavern-multi-tts-text", d.textContent = s;
  const m = document.createElement("span");
  m.className = "tavern-multi-tts-indicator", m.textContent = "▶";
  const h = document.createElement("span");
  h.className = "tavern-multi-tts-actions";
  const w = document.createElement("button");
  w.type = "button", w.className = "tavern-multi-tts-action", w.textContent = "下", h.append(w), a.append(d, m, h), ot(a, "idle");
  let S = r.get(l) ?? null;
  const B = async () => {
    ot(a, "loading");
    try {
      const R = await o.ensureAudio(n, s, i);
      return R.cancelled ? null : R.blob ? (ot(a, "ready"), R.blob) : (ot(a, "error"), null);
    } catch {
      return ot(a, "error"), null;
    }
  }, P = async () => {
    const R = await B();
    R && (S?.stop(), S = dr(
      R,
      () => ot(a, "playing"),
      () => {
        S = null, r.delete(l), ot(a, "ready");
      },
      () => {
        S = null, r.delete(l), ot(a, "error");
      },
      () => ot(a, "ready")
    ), r.set(l, S));
  }, V = async () => {
    if (!S)
      return;
    const R = S.getState();
    if (R === "playing") {
      S.pause();
      return;
    }
    if (R === "paused")
      try {
        await S.resume();
      } catch {
      }
  };
  return a.addEventListener("click", (R) => {
    const O = R.target;
    if (O?.closest(".tavern-multi-tts-indicator")) {
      V();
      return;
    }
    O?.closest(".tavern-multi-tts-action") || P();
  }), w.addEventListener("click", (R) => {
    R.preventDefault(), R.stopPropagation(), (async () => {
      const O = await B();
      O && o.downloadAudio(O, e, n.index);
    })();
  }), a;
}
function Ou(e, t, n, s, i, o = 0) {
  if (Cr(e, o))
    return 0;
  e.getAttribute(Cn) === "true" && Rt(e);
  const r = Nu(e) ?? e, l = [];
  let a = 0;
  for (const d of n) {
    if (!d.displayText || !d.ttsText)
      continue;
    const m = Gu(
      t,
      o,
      d,
      d.displayText,
      d.ttsText,
      s,
      i
    );
    ku(r, d.text, d.displayText, m) ? a += 1 : l.push(m);
  }
  if (r.querySelectorAll(`.${Zn}`).forEach((d) => d.remove()), l.length > 0) {
    const d = document.createElement("div");
    d.className = Zn, l.forEach((m) => d.append(m, document.createTextNode(" "))), r.append(d), a += l.length;
  }
  return a > 0 && (e.setAttribute(Cn, "true"), e.setAttribute(pi, String(o))), a;
}
function Xt(e, t) {
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const s = e[n];
    if (s && t(s))
      return s;
  }
}
function Mr(e, t) {
  return e.characterName.trim() === t && !!e.minimaxVoiceId.trim();
}
function Ar(e, t) {
  return e.characterName.trim() === t && !!e.gsviVoiceId.trim() && !!e.gsviLanguage.trim() && !!e.gsviEmotion.trim();
}
function Pr(e, t) {
  return e.characterName.trim() === t && !!e.indexTtsVoiceId.trim() && !!e.indexTtsLanguage;
}
function Rr(e, t) {
  const n = t?.trim() ?? "";
  return n ? e.ttsEngine === "index_tts" ? !!Xt(
    e.indexTtsCharacterMappings,
    (s) => Pr(s, n)
  ) : e.ttsEngine === "local_gsvi" ? !!Xt(
    e.gsviCharacterMappings,
    (s) => Ar(s, n)
  ) : e.ttsEngine === "minimax" ? !!Xt(e.characterMappings, (s) => Mr(s, n)) : !1 : !0;
}
function Vr(e, t) {
  const n = t?.trim() ?? "";
  if (e.ttsEngine === "index_tts") {
    const i = Xt(
      e.indexTtsCharacterMappings,
      (o) => Pr(o, n)
    );
    return {
      engine: "index_tts",
      indexTtsVoiceId: i?.indexTtsVoiceId.trim() || e.indexTtsVoiceId.trim(),
      indexTtsLanguage: i?.indexTtsLanguage || e.indexTtsLanguage
    };
  }
  if (e.ttsEngine === "local_gsvi") {
    const i = Xt(
      e.gsviCharacterMappings,
      (o) => Ar(o, n)
    );
    return {
      engine: "local_gsvi",
      gsviVoiceId: i?.gsviVoiceId?.trim() || e.localGsviModel.trim(),
      gsviLanguage: i?.gsviLanguage?.trim() || e.localGsviLanguage.trim(),
      gsviEmotion: i?.gsviEmotion?.trim() || e.localGsviEmotion.trim()
    };
  }
  return {
    engine: "minimax",
    minimaxVoiceId: Xt(
      e.characterMappings,
      (i) => Mr(i, n)
    )?.minimaxVoiceId?.trim() || e.voiceId.trim() || e.voiceCatalogSelectedId.trim()
  };
}
function Nr(e, t, n, s) {
  if (!Rr(e, n))
    return null;
  const i = Vr(e, n);
  if (e.ttsEngine === "index_tts" && i.engine === "index_tts") {
    if (!e.indexTtsBaseUrl.trim() || !i.indexTtsVoiceId || !i.indexTtsLanguage)
      return null;
    const r = {
      engine: "index_tts",
      text: t,
      baseUrl: e.indexTtsBaseUrl,
      voiceId: i.indexTtsVoiceId,
      language: i.indexTtsLanguage,
      durationFactor: e.indexTtsDurationFactor,
      emoWeight: e.indexTtsEmoWeight,
      timeoutMs: e.requestTimeoutMs
    };
    return s && Object.keys(s).length > 0 && (r.emotion = s), r;
  }
  return e.ttsEngine === "local_gsvi" && i.engine === "local_gsvi" ? !e.localGsviBaseUrl.trim() || !i.gsviVoiceId || !i.gsviLanguage || !i.gsviEmotion ? null : {
    engine: "local_gsvi",
    text: t,
    baseUrl: e.localGsviBaseUrl,
    authToken: e.localGsviAuthToken || void 0,
    modelId: i.gsviVoiceId,
    language: i.gsviLanguage,
    emotion: i.gsviEmotion,
    format: e.localGsviFormat,
    speed: e.speed,
    topK: e.localGsviTopK,
    topP: e.localGsviTopP,
    temperature: e.localGsviTemperature,
    textLang: e.localGsviTextLang,
    textSplitMethod: e.localGsviTextSplitMethod,
    batchSize: e.localGsviBatchSize,
    timeoutMs: e.requestTimeoutMs
  } : e.ttsEngine !== "minimax" || i.engine !== "minimax" || !e.apiKey.trim() || !e.groupId.trim() || !i.minimaxVoiceId ? null : {
    engine: "minimax",
    text: t,
    apiKey: e.apiKey,
    groupId: e.groupId,
    voiceId: i.minimaxVoiceId,
    model: e.model,
    speed: e.speed,
    vol: e.vol,
    region: e.minimaxRegion,
    timeoutMs: e.requestTimeoutMs
  };
}
function to(e) {
  return e.ttsEngine === "index_tts" ? e.indexTtsBaseUrl.trim() ? {
    engine: "index_tts",
    text: "catalog",
    baseUrl: e.indexTtsBaseUrl,
    voiceId: e.indexTtsVoiceId.trim() || "catalog",
    language: e.indexTtsLanguage,
    durationFactor: e.indexTtsDurationFactor,
    emoWeight: e.indexTtsEmoWeight,
    timeoutMs: e.requestTimeoutMs
  } : null : e.ttsEngine === "local_gsvi" ? e.localGsviBaseUrl.trim() ? {
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
  } : null : e.ttsEngine !== "minimax" || !e.apiKey.trim() ? null : {
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
  };
}
function $u(e, t, n, s) {
  const i = Vr(e, n);
  return e.ttsEngine === "index_tts" ? {
    text: t,
    engine: "index_tts",
    indexTts: {
      origin: Ji(e.indexTtsBaseUrl),
      model: xr,
      voiceId: i.indexTtsVoiceId ?? "",
      language: i.indexTtsLanguage ?? e.indexTtsLanguage,
      format: "wav",
      durationFactor: e.indexTtsDurationFactor,
      emoWeight: e.indexTtsEmoWeight,
      emotion: Su(s)
    }
  } : e.ttsEngine === "local_gsvi" ? {
    text: t,
    engine: "local_gsvi",
    localGsvi: {
      origin: Ji(e.localGsviBaseUrl),
      model: i.gsviVoiceId ?? "",
      format: e.localGsviFormat,
      useReferenceAudio: e.localGsviUseReferenceAudio,
      character: e.localGsviCharacter,
      language: i.gsviLanguage ?? "",
      emotion: i.gsviEmotion ?? "",
      referenceText: e.localGsviReferenceText,
      speed: e.speed,
      topK: e.localGsviTopK,
      topP: e.localGsviTopP,
      temperature: e.localGsviTemperature,
      textLang: e.localGsviTextLang,
      textSplitMethod: e.localGsviTextSplitMethod,
      batchSize: e.localGsviBatchSize
    }
  } : {
    text: t,
    engine: "minimax",
    minimax: {
      region: e.minimaxRegion,
      groupId: e.groupId,
      model: e.model,
      voiceId: i.minimaxVoiceId ?? "",
      speed: e.speed,
      vol: e.vol,
      format: "mp3"
    }
  };
}
const no = 15;
function Du(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = [];
  let o = !1, r = !1, l = 0;
  function a() {
    return e.getSettings();
  }
  function d() {
    r || !document.querySelector(".minimax-tts-segment") || (r = !0, e.warn?.("检测到旧酒馆助手 Multi-TTS 仍在装饰消息。请只启用其中一个，避免重复生成。"));
  }
  function m(M) {
    return yr(M) && M.code === "cancelled";
  }
  function h(M, $) {
    return n.get(M)?.token === $;
  }
  function w(M) {
    for (const [$, G] of n)
      M(G) && (G.controller.abort(), n.delete($));
  }
  function S() {
    w(() => !0);
  }
  function B(M, $) {
    w(
      (G) => G.message_id === M && ($ === void 0 || G.swipe_id !== $)
    );
  }
  function P(M, $, G) {
    n.get(M)?.controller.abort(), l += 1;
    const q = {
      token: l,
      message_id: $,
      swipe_id: G,
      controller: new AbortController()
    };
    return n.set(M, q), q;
  }
  function V(M, $) {
    h(M, $) && n.delete(M);
  }
  async function R(M, $, G, z, q, Ve) {
    const be = P(M, $, G);
    try {
      const fe = a(), pe = Nr(fe, z, q, Ve);
      if (!pe)
        return { blob: null };
      pe.signal = be.controller.signal;
      const De = $u(fe, z, q, Ve), we = await Ya(De);
      if (!h(M, be.token) || be.controller.signal.aborted)
        return { cancelled: !0 };
      const Ae = s.get(we);
      if (Ae)
        return { blob: Ae };
      const re = await nc(we);
      if (!h(M, be.token) || be.controller.signal.aborted)
        return { cancelled: !0 };
      if (re)
        return s.set(we, re), { blob: re };
      const g = await Un(pe.engine).synthesize(pe);
      return g && (await sc(we, g), s.set(we, g)), !h(M, be.token) || be.controller.signal.aborted ? { cancelled: !0 } : { blob: g };
    } catch (fe) {
      return m(fe) || !h(M, be.token) || be.controller.signal.aborted ? { cancelled: !0 } : (console.error(`${Se} synthesize failed`), { blob: null });
    } finally {
      V(M, be.token);
    }
  }
  function O(M, $) {
    if (typeof M.swipe_id == "number" && Number.isFinite(M.swipe_id))
      return M.swipe_id;
    const G = Number($?.getAttribute("swipeid"));
    return Number.isFinite(G) ? G : 0;
  }
  function Y(M, $) {
    for (const [G, z] of t) {
      const q = qi(G);
      q && q.message_id === M && q.swipe_id !== $ && (z.stop(), t.delete(G));
    }
  }
  function U(M) {
    for (const [$, G] of t) {
      const z = qi($);
      z && z.message_id === M && (G.stop(), t.delete($));
    }
  }
  function ue(M, $, G) {
    if (typeof M.swipe_id != "number" || !Number.isFinite(M.swipe_id))
      return !0;
    const z = $.getAttribute("swipeid");
    if (z === null || z === "")
      return !0;
    const q = Number(z);
    return Number.isFinite(q) && q === G && q === M.swipe_id;
  }
  function ye(M, $) {
    B(M, $), Y(M, $);
    const G = e.findMessageElement(M) ?? kn(M);
    G && Rt(G);
  }
  function ge(M, $ = {}) {
    const G = $.attempt ?? 0, z = a();
    if (!z.enabled)
      return;
    const q = e.getChatMessage(M);
    if (!q || q.is_user || q.is_system)
      return;
    const Ve = typeof q.mes == "string" ? q.mes : "", be = wu(Ve).filter(
      (re) => Rr(z, re.char)
    ), fe = e.findMessageElement(M) ?? kn(M);
    if (be.length === 0) {
      fe && Rt(fe);
      return;
    }
    if (!fe) {
      G < no && window.setTimeout(() => ge(M, { ...$, attempt: G + 1 }), 120);
      return;
    }
    const pe = O(q, fe);
    if (!ue(q, fe, pe)) {
      G < no && window.setTimeout(() => ge(M, { ...$, attempt: G + 1 }), 120);
      return;
    }
    if (Cr(fe, pe))
      return;
    fe.getAttribute("data-tavern-multi-tts-rendered") === "true" && Rt(fe), Y(M, pe), d();
    const De = be.map((re) => ({
      ...re,
      displayText: Mu(re.text),
      ttsText: Pu(re.text, z.ttsEngine)
    })), we = [], Ae = (re) => $.skipPrefetch ? !1 : z.prefetchMode === "auto_all" ? !0 : z.prefetchMode === "auto_first_n" ? re < z.prefetchFirstCount : !1;
    Ou(
      fe,
      M,
      De,
      {
        ensureAudio: async (re, f, g) => {
          const v = `${M}:${pe}:${re.index}`;
          return await R(
            v,
            M,
            pe,
            g,
            re.char,
            re.emotion
          );
        },
        downloadAudio(re, f, g) {
          rc(re, oc(f, g));
        }
      },
      t,
      pe
    ), De.forEach((re, f) => {
      Ae(f) && re.ttsText && we.push(async () => {
        const g = `${M}:${pe}:${re.index}`;
        try {
          await R(
            g,
            M,
            pe,
            re.ttsText,
            re.char,
            re.emotion
          );
        } catch {
        }
      });
    }), we.length > 0 && Ru(we, z.maxConcurrency);
  }
  function Oe(...M) {
    const $ = Number(M[0]);
    Number.isFinite($) && window.setTimeout(() => ge($), 0);
  }
  function $t(...M) {
    const $ = Number(M[0]);
    if (!Number.isFinite($))
      return;
    B($);
    const G = e.findMessageElement($) ?? kn($);
    G && Rt(G), U($), window.setTimeout(() => ge($), 0);
  }
  function gt(...M) {
    const $ = Number(M[0]);
    if (!Number.isFinite($))
      return;
    const G = e.findMessageElement($) ?? kn($), z = e.getChatMessage($), q = z ? O(z, G) : 0;
    ye($, q), window.setTimeout(() => ge($, { skipPrefetch: !0 }), 0);
  }
  function tt(M = {}) {
    document.querySelectorAll("#chat .mes[mesid]").forEach(($) => {
      const G = Number($.getAttribute("mesid"));
      Number.isFinite(G) && ge(G, M);
    });
  }
  function $e(M, $) {
    e.eventSource.on(M, $), i.push(() => e.eventSource.removeListener(M, $));
  }
  function Dt() {
    o || (o = !0, Ms(e, a()), $e(e.eventNames.messageReceived, Oe), $e(e.eventNames.messageRendered, Oe), $e(e.eventNames.messageUpdated, $t), $e(e.eventNames.messageSwiped, gt), $e(e.eventNames.moreMessagesLoaded, () => {
      tt({ skipPrefetch: !0 });
    }), $e(e.eventNames.chatChanged, () => {
      S(), t.forEach((M) => M.stop()), t.clear(), Dn(), Ms(e, a()), tt({ skipPrefetch: !0 });
    }), tt({ skipPrefetch: !0 }), console.info(`${Se} chat runtime started`));
  }
  function It() {
    i.splice(0).forEach((M) => M()), S(), t.forEach((M) => M.stop()), t.clear(), s.clear(), Dn(), bu(e), Rt(document), o = !1, console.info(`${Se} chat runtime stopped`);
  }
  function sn() {
    S(), t.forEach((M) => M.stop()), t.clear(), Dn(), Rt(document);
  }
  function Ct() {
    Ms(e, a());
  }
  function nt() {
    sn(), a().enabled && tt({ skipPrefetch: !0 });
  }
  function Ke() {
    Ct(), nt();
  }
  return { start: Dt, stop: It, syncFromSettings: Ke, syncInjection: Ct, refreshDecorations: nt, decorate: ge };
}
function yt(e) {
  return typeof e == "object" && e !== null;
}
function ju(e) {
  if (yt(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function Uu(e) {
  return !yt(e) || typeof e.getContext != "function" ? null : e;
}
function Fu(e) {
  if (!yt(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!yt(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = ju(e.eventSource), n = yt(e.eventTypes) ? e.eventTypes : yt(e.event_types) ? e.event_types : void 0, s = n ? {
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
    extensionPrompts: yt(e.extensionPrompts) ? e.extensionPrompts : void 0
  };
}
function Lr() {
  const e = Uu(globalThis.SillyTavern);
  if (!e)
    throw new Error(
      "SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行"
    );
  return Fu(e.getContext());
}
function kr() {
  const e = Lr();
  return {
    readRawSettings() {
      return e.extensionSettings[Ss];
    },
    writeSettings(t) {
      e.extensionSettings[Ss] = t, e.saveSettingsDebounced();
    },
    removeSettings() {
      delete e.extensionSettings[Ss], e.saveSettingsDebounced();
    },
    findSettingsRoot: Ec,
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
function Bu(e) {
  return yt(e) ? {
    mes: typeof e.mes == "string" ? e.mes : void 0,
    is_user: typeof e.is_user == "boolean" ? e.is_user : void 0,
    is_system: typeof e.is_system == "boolean" ? e.is_system : void 0,
    swipe_id: typeof e.swipe_id == "number" ? e.swipe_id : void 0
  } : null;
}
function Hu(e) {
  const t = Lr();
  if (!t.eventSource)
    throw new Error("SillyTavern eventSource 不可用，无法监听消息事件");
  const n = t.eventSource;
  return {
    getSettings: e,
    getChatMessage(s) {
      return Array.isArray(t.chat) ? Bu(t.chat[s]) : null;
    },
    findMessageElement(s) {
      return document.querySelector(`#chat .mes[mesid="${s}"]`);
    },
    setExtensionPrompt(s, i, o, r, l, a) {
      if (!t.setExtensionPrompt)
        throw new Error("SillyTavern.setExtensionPrompt 不可用，无法注入提示词");
      t.setExtensionPrompt(s, i, o, r, l, a);
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
      const i = globalThis.toastr;
      if (typeof i?.warning == "function") {
        i.warning(s, Se);
        return;
      }
      console.warn(`${Se} ${s}`);
    }
  };
}
function Ku(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    const s = n.trim();
    s && t.set(s, (t.get(s) ?? 0) + 1);
  }), [...t.entries()].filter(([, n]) => n > 1).map(([n]) => n);
}
function As(e) {
  return [...e].sort((t, n) => t.name.localeCompare(n.name));
}
function Ps(e, t, n, s) {
  const i = t.trim();
  if (!i)
    return { error: "请先填写存档名称" };
  if (n.length === 0)
    return { error: "当前没有可保存的完整映射" };
  const o = e.map((a) => ({
    name: a.name,
    mappings: [...a.mappings]
  })), r = o.findIndex((a) => a.name === i);
  if (r >= 0 && !s)
    return { error: `存档「${i}」已存在` };
  const l = { name: i, mappings: [...n] };
  return r >= 0 ? (o[r] = l, { presets: o, message: `已更新存档：${i}` }) : (o.push(l), { presets: o, message: `已保存存档：${i}` });
}
function Rs(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.find((i) => i.name === n);
  return s ? { mappings: [...s.mappings] } : { error: `未找到存档：${n}` };
}
function Vs(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.filter((i) => i.name !== n);
  return s.length === e.length ? { error: `未找到存档：${n}` } : { presets: s, message: `已删除存档：${n}` };
}
const Wu = {
  ja: "おはようございます。これは Tavern Multi-TTS のテスト音声です。",
  zh: "你好，这是 Tavern Multi-TTS 的测试语音。",
  en: "Hello, this is a Tavern Multi-TTS test voice."
}, zu = {
  ja: "こんにちは、これは GSVI の音声参照用サンプルです。",
  zh: "你好，这是一段 GSVI 的语音参考音频。",
  en: "Hello, this is a GSVI reference voice sample."
}, Ju = {
  ja: "こんにちは、これは IndexTTS のテスト音声です。",
  zh: "你好，这是 IndexTTS 的测试语音。",
  en: "Hello, this is an IndexTTS test voice."
}, Xu = [
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
], Yu = [
  "不切",
  "凑四句一切",
  "凑50字一切",
  "按中文句号。切",
  "按英文句号.切",
  "按标点符号切"
];
function Zu(e, t) {
  return e === "local_gsvi" ? zu[t] : e === "index_tts" ? Ju[t] : Wu[t];
}
function Qu() {
  return {
    search: "",
    language: "all",
    gender: "all",
    source: "all"
  };
}
function Ns() {
  return {
    voices: [],
    filter: Qu()
  };
}
function so() {
  return {
    minimax: Ns(),
    local_gsvi: Ns(),
    index_tts: Ns()
  };
}
function qu(e, t) {
  return t === "minimax" ? e.minimax : t === "local_gsvi" ? e.local_gsvi : e.index_tts;
}
function io(e, t, n) {
  const s = qu(e, t);
  return s.voices = [...n], e;
}
function ef(e) {
  return [
    ...new Set(e.map((t) => t.language).filter((t) => !!t))
  ].sort();
}
function tf(e, t) {
  const n = t.search.trim().toLowerCase();
  return e.filter((s) => t.language !== "all" && s.language !== t.language || t.gender !== "all" && s.gender !== t.gender || t.source !== "all" && s.source !== t.source ? !1 : n ? [s.id, s.name, ...s.description ?? []].join(" ").toLowerCase().includes(n) : !0);
}
function oo(e) {
  const t = [e.language, e.gender, e.source].filter(Boolean);
  return t.length > 0 ? `${e.name} (${t.join(" / ")})` : e.name;
}
function ro(e) {
  return e?.languages ?? [];
}
function lo(e, t) {
  const n = t.trim();
  return !e || !n ? [] : e.emotionsByLanguage?.[n] ?? [];
}
function ao(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(2)} MB`;
}
const nf = ["data-color-scheme"], sf = { class: "inline-drawer" }, of = { class: "inline-drawer-toggle inline-drawer-header" }, rf = { class: "inline-drawer-content" }, lf = { class: "mtts-card" }, af = { class: "mtts-card-head" }, cf = { class: "mtts-title" }, uf = { class: "mtts-version" }, ff = ["title"], df = { class: "mtts-enable" }, pf = {
  class: "mtts-tabs",
  role: "tablist",
  "aria-label": "TTS 引擎"
}, mf = ["aria-selected"], gf = ["aria-selected"], hf = ["aria-selected"], vf = {
  class: "mtts-section",
  "aria-labelledby": "mtts-service-title"
}, _f = { class: "mtts-field" }, bf = { class: "mtts-grid" }, yf = { class: "mtts-field" }, xf = { class: "mtts-field" }, Tf = { class: "mtts-field" }, Sf = { class: "mtts-actions" }, wf = ["disabled"], Ef = ["disabled"], If = {
  key: 0,
  class: "mtts-fold"
}, Cf = { class: "mtts-fold-body" }, Mf = { class: "mtts-grid" }, Af = { class: "mtts-field" }, Pf = { class: "mtts-field" }, Rf = ["value"], Vf = { class: "mtts-field" }, Nf = { class: "mtts-field" }, Lf = { class: "mtts-field" }, kf = ["value"], Gf = { value: "" }, Of = ["value"], $f = { class: "mtts-control-row" }, Df = { class: "mtts-field" }, jf = ["disabled"], Uf = { class: "mtts-grid" }, Ff = { class: "mtts-field" }, Bf = { value: "" }, Hf = ["value"], Kf = ["value"], Wf = { class: "mtts-field" }, zf = ["value"], Jf = { class: "mtts-control-row" }, Xf = { class: "mtts-field" }, Yf = ["disabled"], Zf = { class: "mtts-grid" }, Qf = { class: "mtts-field" }, qf = { value: "" }, ed = ["value"], td = { class: "mtts-field" }, nd = ["value"], sd = { class: "mtts-field" }, id = ["value"], od = { class: "mtts-actions" }, rd = { class: "mtts-field" }, ld = ["disabled"], ad = {
  class: "mtts-section",
  "aria-labelledby": "mtts-mapping-title"
}, cd = { class: "mtts-section-head" }, ud = {
  id: "mtts-mapping-title",
  class: "mtts-section-title"
}, fd = { class: "mtts-count" }, dd = {
  key: 0,
  class: "mtts-empty"
}, pd = { class: "mtts-field" }, md = ["onUpdate:modelValue"], gd = { class: "mtts-field" }, hd = ["onUpdate:modelValue"], vd = {
  key: 0,
  class: "mtts-field"
}, _d = ["value", "onChange"], bd = ["value"], yd = { class: "mtts-mapping-actions" }, xd = ["disabled", "onClick"], Td = ["onClick"], Sd = { class: "mtts-field" }, wd = ["onUpdate:modelValue"], Ed = { class: "mtts-grid" }, Id = { class: "mtts-field" }, Cd = ["onUpdate:modelValue"], Md = { value: "" }, Ad = ["value"], Pd = ["value"], Rd = { class: "mtts-field" }, Vd = ["onUpdate:modelValue"], Nd = ["value"], Ld = { class: "mtts-mapping-actions" }, kd = ["disabled", "onClick"], Gd = ["onClick"], Od = { class: "mtts-field" }, $d = ["onUpdate:modelValue"], Dd = { class: "mtts-grid" }, jd = { class: "mtts-field" }, Ud = ["onUpdate:modelValue"], Fd = { value: "" }, Bd = ["value"], Hd = { class: "mtts-field" }, Kd = ["onUpdate:modelValue"], Wd = ["value"], zd = { class: "mtts-field" }, Jd = ["onUpdate:modelValue"], Xd = ["value"], Yd = { class: "mtts-mapping-actions" }, Zd = ["disabled", "onClick"], Qd = ["onClick"], qd = {
  key: 3,
  class: "mtts-hint"
}, ep = { class: "mtts-fold" }, tp = { class: "mtts-fold-body" }, np = { class: "mtts-field" }, sp = { class: "mtts-field" }, ip = ["value"], op = { class: "mtts-actions" }, rp = ["disabled"], lp = ["disabled"], ap = { class: "mtts-fold" }, cp = { class: "mtts-fold-body" }, up = { class: "mtts-enable" }, fp = { class: "mtts-field" }, dp = { class: "mtts-label" }, pp = { class: "mtts-field" }, mp = { class: "mtts-field" }, gp = { class: "mtts-fold" }, hp = { class: "mtts-fold-body" }, vp = { class: "mtts-field" }, _p = {
  key: 0,
  class: "mtts-grid"
}, bp = {
  key: 0,
  class: "mtts-field"
}, yp = { class: "mtts-field" }, xp = { class: "mtts-hint" }, Tp = { class: "mtts-actions" }, Sp = ["disabled"], wp = ["disabled"], Ep = { class: "mtts-fold" }, Ip = { class: "mtts-fold-body" }, Cp = { class: "mtts-field" }, Mp = ["value"], Ap = { class: "mtts-field" }, Pp = { class: "mtts-label" }, Rp = { class: "mtts-field" }, Vp = { class: "mtts-label" }, Np = { class: "mtts-field" }, Lp = { class: "mtts-label" }, kp = { class: "mtts-field" }, Gp = { class: "mtts-grid" }, Op = { class: "mtts-field" }, $p = ["value"], Dp = { class: "mtts-field" }, jp = ["value"], Up = { class: "mtts-field" }, Fp = { class: "mtts-label" }, Bp = { class: "mtts-field" }, Hp = { class: "mtts-label" }, Kp = { class: "mtts-field" }, Wp = { class: "mtts-label" }, zp = /* @__PURE__ */ Vl({
  __name: "settings-panel",
  props: {
    displayName: {},
    version: {},
    settings: {},
    onSettingsChange: { type: Function }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ mn(Wt(t.settings)), s = /* @__PURE__ */ it(""), i = /* @__PURE__ */ it(!1), o = /* @__PURE__ */ it(!1), r = /* @__PURE__ */ mn(so()), l = /* @__PURE__ */ it(""), a = /* @__PURE__ */ it(""), d = /* @__PURE__ */ it(0), m = /* @__PURE__ */ it(0), h = /* @__PURE__ */ it("saved"), w = /* @__PURE__ */ it("light"), S = /* @__PURE__ */ mn({
      minimax: { kind: "unchecked", detail: "" },
      local_gsvi: { kind: "unchecked", detail: "" },
      index_tts: { kind: "unchecked", detail: "" }
    });
    let B, P = !0, V = null;
    const R = ve(() => n.ttsEngine === "minimax"), O = ve(() => n.ttsEngine === "local_gsvi"), Y = ve(() => n.ttsEngine === "index_tts"), U = ve(() => r.minimax.voices), ue = ve(() => r.local_gsvi.voices), ye = ve(() => r.index_tts.voices), ge = ve(
      () => tf(r.minimax.voices, r.minimax.filter)
    ), Oe = ve(() => ef(r.minimax.voices)), $t = ve(
      () => r.local_gsvi.voices.find((_) => _.id === n.localGsviModel)
    ), gt = ve(() => ro($t.value)), tt = ve(
      () => lo($t.value, n.localGsviLanguage)
    ), $e = ve(() => Y.value ? n.indexTtsCharacterMappings.length : O.value ? n.gsviCharacterMappings.length : n.characterMappings.length), Dt = ve(() => Y.value ? As(n.indexTtsCharacterMappingPresets) : O.value ? As(n.gsviCharacterMappingPresets) : As(n.characterMappingPresets)), It = ve(
      () => Ku(
        (Y.value ? n.indexTtsCharacterMappings : O.value ? n.gsviCharacterMappings : n.characterMappings).map((_) => _.characterName)
      )
    ), sn = ve(() => R.value ? "试听默认音色（消耗额度）" : O.value ? "试听默认模型" : "试听默认音色"), Ct = ve(() => ao(m.value)), nt = ve(() => Y.value ? "IndexTTS" : O.value ? "GSVI" : "MiniMax"), Ke = ve(() => S[n.ttsEngine]), M = ve(() => {
      const _ = Ke.value;
      return _.kind === "connecting" ? "正在连接" : _.kind === "online" ? _.detail ? `${nt.value} 在线 · ${_.detail}` : `${nt.value} 在线` : _.kind === "offline" ? _.detail ? `服务离线 · ${_.detail}` : "服务离线" : "尚未检查";
    }), $ = ve(() => h.value === "saving" ? "正在保存…" : h.value === "error" ? "保存失败，请重试" : "✓ 所有修改已自动保存");
    Ml(
      n,
      () => {
        try {
          if (t.onSettingsChange(Wt(n)), P) {
            P = !1, h.value = "saved";
            return;
          }
          h.value = "saving", window.clearTimeout(B), B = window.setTimeout(() => {
            h.value = "saved";
          }, 180);
        } catch {
          h.value = "error";
        }
      },
      { deep: !0 }
    );
    function G(_, c = !1) {
      s.value = _, i.value = c;
    }
    function z(_, c = "") {
      S[n.ttsEngine] = { kind: _, detail: c };
    }
    function q(_) {
      n.ttsEngine = _;
    }
    function Ve(_) {
      return _.replaceAll("存档", "方案");
    }
    function be() {
      w.value = fe();
    }
    function fe() {
      const _ = (document.documentElement.getAttribute("data-theme") || document.body.getAttribute("data-theme") || "").toLowerCase();
      if (_.includes("dark"))
        return "dark";
      if (_.includes("light"))
        return "light";
      if (document.documentElement.classList.contains("dark") || document.body.classList.contains("dark"))
        return "dark";
      const p = getComputedStyle(document.body).backgroundColor.match(/[\d.]+/g);
      return p && p.length >= 3 ? (0.2126 * Number(p[0]) + 0.7152 * Number(p[1]) + 0.0722 * Number(p[2])) / 255 < 0.45 ? "dark" : "light" : typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function pe(_, c) {
      if (yr(_)) {
        G(_.message, !0);
        return;
      }
      G(_ instanceof Error ? _.message : c, !0);
    }
    function De() {
      return n.characterMappings.map((_) => ({
        characterName: _.characterName.trim(),
        minimaxVoiceId: _.minimaxVoiceId.trim()
      })).filter((_) => _.characterName && _.minimaxVoiceId);
    }
    function we() {
      return n.gsviCharacterMappings.map((_) => ({
        characterName: _.characterName.trim(),
        gsviVoiceId: _.gsviVoiceId.trim(),
        gsviLanguage: _.gsviLanguage.trim(),
        gsviEmotion: _.gsviEmotion.trim()
      })).filter(
        (_) => _.characterName && _.gsviVoiceId && _.gsviLanguage && _.gsviEmotion
      );
    }
    function Ae() {
      return n.indexTtsCharacterMappings.map((_) => ({
        characterName: _.characterName.trim(),
        indexTtsVoiceId: _.indexTtsVoiceId.trim(),
        indexTtsLanguage: _.indexTtsLanguage
      })).filter((_) => _.characterName && _.indexTtsVoiceId && _.indexTtsLanguage);
    }
    function re() {
      return n.ttsEngine === "minimax" ? "请先填写 API Key" : n.ttsEngine === "local_gsvi" ? "请先填写 Local-GSVI 服务地址" : "请先填写 IndexTTS 服务地址";
    }
    function f(_) {
      return n.ttsEngine === "local_gsvi" ? `已加载 ${_} 个模型` : `已加载 ${_} 个音色`;
    }
    async function g(_, c, p) {
      if (!o.value) {
        o.value = !0, c && G(c);
        try {
          await _();
        } catch (J) {
          pe(J, p);
        } finally {
          o.value = !1;
        }
      }
    }
    async function v(_ = !1) {
      await g(
        async () => {
          z("connecting");
          const c = to(n);
          if (!c) {
            const J = re();
            z("offline", J), G(J, !0);
            return;
          }
          c.engine === "minimax" && (c.forceRefresh = _);
          const p = n.ttsEngine;
          try {
            const J = await Un(p).listVoices(c);
            io(r, p, J);
            const N = f(J.length);
            z("online", N), G(N);
          } catch (J) {
            throw z("offline"), J;
          }
        },
        "",
        "拉取列表失败"
      );
    }
    function T(_) {
      n.voiceId = _, n.voiceCatalogSelectedId = _;
    }
    function x() {
      if (R.value) {
        n.characterMappings.push({ characterName: "", minimaxVoiceId: "" });
        return;
      }
      if (O.value) {
        n.gsviCharacterMappings.push({
          characterName: "",
          gsviVoiceId: "",
          gsviLanguage: "",
          gsviEmotion: ""
        });
        return;
      }
      n.indexTtsCharacterMappings.push({
        characterName: "",
        indexTtsVoiceId: "",
        indexTtsLanguage: n.indexTtsLanguage
      });
    }
    function b(_) {
      if (R.value) {
        n.characterMappings.splice(_, 1);
        return;
      }
      if (O.value) {
        n.gsviCharacterMappings.splice(_, 1);
        return;
      }
      n.indexTtsCharacterMappings.splice(_, 1);
    }
    function C() {
      const _ = l.value, c = Dt.value.some((J) => J.name === _.trim());
      if (c && !window.confirm(`方案「${_.trim()}」已存在，要覆盖吗？`))
        return;
      const p = R.value ? Ps(n.characterMappingPresets, _, De(), c) : O.value ? Ps(n.gsviCharacterMappingPresets, _, we(), c) : Ps(
        n.indexTtsCharacterMappingPresets,
        _,
        Ae(),
        c
      );
      if ("error" in p) {
        G(Ve(p.error), !0);
        return;
      }
      R.value ? n.characterMappingPresets = p.presets : O.value ? n.gsviCharacterMappingPresets = p.presets : n.indexTtsCharacterMappingPresets = p.presets, a.value = _.trim(), G(Ve(p.message));
    }
    function I() {
      const _ = R.value ? Rs(n.characterMappingPresets, a.value) : O.value ? Rs(n.gsviCharacterMappingPresets, a.value) : Rs(n.indexTtsCharacterMappingPresets, a.value);
      if ("error" in _) {
        G(Ve(_.error), !0);
        return;
      }
      (R.value ? De().length > 0 : O.value ? we().length > 0 : Ae().length > 0) && !window.confirm("载入方案会覆盖当前映射，确定继续吗？") || (R.value ? n.characterMappings = _.mappings : O.value ? n.gsviCharacterMappings = _.mappings : n.indexTtsCharacterMappings = _.mappings, G(`已载入方案：${a.value}`));
    }
    function E() {
      if (!window.confirm(`确定删除方案「${a.value}」吗？`))
        return;
      const _ = R.value ? Vs(n.characterMappingPresets, a.value) : O.value ? Vs(n.gsviCharacterMappingPresets, a.value) : Vs(n.indexTtsCharacterMappingPresets, a.value);
      if ("error" in _) {
        G(Ve(_.error), !0);
        return;
      }
      R.value ? n.characterMappingPresets = _.presets : O.value ? n.gsviCharacterMappingPresets = _.presets : n.indexTtsCharacterMappingPresets = _.presets, a.value = "", G(Ve(_.message));
    }
    async function y() {
      if (n.ttsEngine !== "index_tts") {
        await v(!0);
        return;
      }
      await g(
        async () => {
          z("connecting");
          const _ = to(n);
          if (!_ || _.engine !== "index_tts") {
            const p = "请先填写 IndexTTS 服务地址";
            z("offline", p), G(p, !0);
            return;
          }
          const c = Un("index_tts");
          try {
            const p = await c.checkHealth(_);
            if (!p.ok) {
              z("offline", p.message), G(p.message, !0);
              return;
            }
            try {
              const J = await c.listVoices(_);
              io(r, "index_tts", J);
              const N = f(J.length);
              z("online", N), G(p.message);
            } catch (J) {
              z("online", p.message), pe(J, "拉取音色失败");
            }
          } catch (p) {
            throw z("offline"), p;
          }
        },
        "",
        "检查 IndexTTS 连接失败"
      );
    }
    async function D(_) {
      await g(
        async () => {
          const c = Zu(n.ttsEngine, n.testLanguage), p = Nr(n, c, _);
          if (!p) {
            G(
              _ ? `角色「${_}」未完整映射，无法测试` : "请先补全当前引擎的默认音色/模型后再测试",
              !0
            );
            return;
          }
          const J = await Un(n.ttsEngine).synthesize(p);
          dr(J), G(_ ? `正在试听「${_}」` : "正在试听默认音色");
        },
        "正在合成测试语音…",
        "测试语音失败"
      );
    }
    async function A() {
      await g(
        async () => {
          const _ = await ic();
          d.value = _.count, m.value = _.totalBytes, G(`缓存 ${_.count} 条，${ao(_.totalBytes)}`);
        },
        "正在读取缓存…",
        "读取缓存失败"
      );
    }
    async function j() {
      window.confirm("确定清空本扩展的音频缓存吗？") && await g(
        async () => {
          await fr(), d.value = 0, m.value = 0, G("已清空音频缓存");
        },
        "正在清空缓存…",
        "清空缓存失败"
      );
    }
    function H() {
      window.confirm("确定恢复默认设置吗？当前映射和密钥都会被清空。") && (Object.assign(n, Wt(Et)), Object.assign(r, so()), G("已恢复默认设置"));
    }
    function Q() {
      gt.value.includes(n.localGsviLanguage) || (n.localGsviLanguage = "", n.localGsviEmotion = "");
    }
    function ne(_) {
      return ro(r.local_gsvi.voices.find((c) => c.id === _));
    }
    function ee(_, c) {
      return lo(
        r.local_gsvi.voices.find((p) => p.id === _),
        c
      );
    }
    return kl(() => {
      w.value = fe(), typeof window.matchMedia == "function" && (V = window.matchMedia("(prefers-color-scheme: dark)"), V.addEventListener("change", be));
    }), Gl(() => {
      window.clearTimeout(B), V?.removeEventListener("change", be), V = null;
    }), A().catch((_) => pe(_, "读取缓存失败")), (_, c) => (L(), k("div", {
      class: "tavern-multi-tts-settings",
      "data-color-scheme": w.value
    }, [
      u("div", sf, [
        u("div", of, [
          u("b", null, W(e.displayName), 1),
          c[43] || (c[43] = u("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        u("div", rf, [
          u("div", lf, [
            u("header", af, [
              u("h2", cf, W(e.displayName), 1),
              u("span", uf, W(e.version), 1)
            ]),
            u("div", {
              class: at(["mtts-capsule", {
                "is-online": Ke.value.kind === "online",
                "is-connecting": Ke.value.kind === "connecting",
                "is-offline": Ke.value.kind === "offline"
              }]),
              role: "status",
              "aria-live": "polite"
            }, [
              c[44] || (c[44] = u("span", {
                class: "mtts-dot",
                "aria-hidden": "true"
              }, null, -1)),
              (L(), k("span", {
                key: M.value,
                class: "mtts-capsule-text mtts-fade",
                title: M.value
              }, W(M.value), 9, ff))
            ], 2),
            s.value ? (L(), k("p", {
              key: s.value,
              class: at(["mtts-notice mtts-fade", { "is-error": i.value }]),
              role: "status"
            }, W(s.value), 3)) : je("", !0),
            u("label", df, [
              K(u("input", {
                "onUpdate:modelValue": c[0] || (c[0] = (p) => n.enabled = p),
                type: "checkbox"
              }, null, 512), [
                [Fi, n.enabled]
              ]),
              c[45] || (c[45] = u("span", null, "启用", -1))
            ]),
            u("div", pf, [
              u("button", {
                class: at(["mtts-tab", { "is-active": R.value }]),
                type: "button",
                role: "tab",
                "aria-selected": R.value,
                onClick: c[1] || (c[1] = (p) => q("minimax"))
              }, " MiniMax ", 10, mf),
              u("button", {
                class: at(["mtts-tab", { "is-active": O.value }]),
                type: "button",
                role: "tab",
                "aria-selected": O.value,
                onClick: c[2] || (c[2] = (p) => q("local_gsvi"))
              }, " GSVI ", 10, gf),
              u("button", {
                class: at(["mtts-tab", { "is-active": Y.value }]),
                type: "button",
                role: "tab",
                "aria-selected": Y.value,
                onClick: c[3] || (c[3] = (p) => q("index_tts"))
              }, " IndexTTS ", 10, hf)
            ]),
            u("section", vf, [
              c[71] || (c[71] = u("h3", {
                id: "mtts-service-title",
                class: "mtts-section-title"
              }, "语音服务", -1)),
              R.value ? (L(), k(Z, { key: 0 }, [
                u("label", _f, [
                  c[46] || (c[46] = u("span", { class: "mtts-label" }, "API Key", -1)),
                  K(u("input", {
                    "onUpdate:modelValue": c[4] || (c[4] = (p) => n.apiKey = p),
                    class: "text_pole",
                    type: "password",
                    autocomplete: "off"
                  }, null, 512), [
                    [de, n.apiKey]
                  ])
                ]),
                u("div", bf, [
                  u("label", yf, [
                    c[47] || (c[47] = u("span", { class: "mtts-label" }, "Group ID", -1)),
                    K(u("input", {
                      "onUpdate:modelValue": c[5] || (c[5] = (p) => n.groupId = p),
                      class: "text_pole",
                      type: "text"
                    }, null, 512), [
                      [de, n.groupId]
                    ])
                  ]),
                  u("label", xf, [
                    c[49] || (c[49] = u("span", { class: "mtts-label" }, "区域", -1)),
                    K(u("select", {
                      "onUpdate:modelValue": c[6] || (c[6] = (p) => n.minimaxRegion = p),
                      class: "text_pole"
                    }, [...c[48] || (c[48] = [
                      u("option", { value: "international" }, "国际", -1),
                      u("option", { value: "beijing" }, "北京", -1)
                    ])], 512), [
                      [me, n.minimaxRegion]
                    ])
                  ])
                ]),
                u("label", Tf, [
                  c[50] || (c[50] = u("span", { class: "mtts-label" }, "默认音色", -1)),
                  K(u("input", {
                    "onUpdate:modelValue": c[7] || (c[7] = (p) => n.voiceId = p),
                    class: "text_pole",
                    type: "text",
                    placeholder: "无 char 的台词使用"
                  }, null, 512), [
                    [de, n.voiceId]
                  ])
                ]),
                u("div", Sf, [
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: y
                  }, " 检查连接 ", 8, wf),
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: o.value,
                    onClick: c[8] || (c[8] = (p) => v(!0))
                  }, " 刷新音色 ", 8, Ef)
                ]),
                U.value.length > 0 ? (L(), k("details", If, [
                  c[59] || (c[59] = u("summary", null, [
                    u("i", {
                      class: "fa-solid fa-chevron-right mtts-fold-icon",
                      "aria-hidden": "true"
                    }),
                    rt(" 筛选音色 ")
                  ], -1)),
                  u("div", Cf, [
                    u("div", Mf, [
                      u("label", Af, [
                        c[51] || (c[51] = u("span", { class: "mtts-label" }, "搜索", -1)),
                        K(u("input", {
                          "onUpdate:modelValue": c[9] || (c[9] = (p) => r.minimax.filter.search = p),
                          class: "text_pole",
                          type: "search"
                        }, null, 512), [
                          [de, r.minimax.filter.search]
                        ])
                      ]),
                      u("label", Pf, [
                        c[53] || (c[53] = u("span", { class: "mtts-label" }, "语言", -1)),
                        K(u("select", {
                          "onUpdate:modelValue": c[10] || (c[10] = (p) => r.minimax.filter.language = p),
                          class: "text_pole"
                        }, [
                          c[52] || (c[52] = u("option", { value: "all" }, "全部语言", -1)),
                          (L(!0), k(Z, null, he(Oe.value, (p) => (L(), k("option", {
                            key: p,
                            value: p
                          }, W(p), 9, Rf))), 128))
                        ], 512), [
                          [me, r.minimax.filter.language]
                        ])
                      ]),
                      u("label", Vf, [
                        c[55] || (c[55] = u("span", { class: "mtts-label" }, "性别", -1)),
                        K(u("select", {
                          "onUpdate:modelValue": c[11] || (c[11] = (p) => r.minimax.filter.gender = p),
                          class: "text_pole"
                        }, [...c[54] || (c[54] = [
                          u("option", { value: "all" }, "全部性别", -1),
                          u("option", { value: "Female" }, "Female", -1),
                          u("option", { value: "Male" }, "Male", -1),
                          u("option", { value: "Unknown" }, "Unknown", -1)
                        ])], 512), [
                          [me, r.minimax.filter.gender]
                        ])
                      ]),
                      u("label", Nf, [
                        c[57] || (c[57] = u("span", { class: "mtts-label" }, "来源", -1)),
                        K(u("select", {
                          "onUpdate:modelValue": c[12] || (c[12] = (p) => r.minimax.filter.source = p),
                          class: "text_pole"
                        }, [...c[56] || (c[56] = [
                          u("option", { value: "all" }, "全部来源", -1),
                          u("option", { value: "system" }, "system", -1),
                          u("option", { value: "voice_cloning" }, "voice_cloning", -1),
                          u("option", { value: "voice_generation" }, "voice_generation", -1)
                        ])], 512), [
                          [me, r.minimax.filter.source]
                        ])
                      ])
                    ]),
                    u("label", Lf, [
                      c[58] || (c[58] = u("span", { class: "mtts-label" }, "从列表填入默认音色", -1)),
                      u("select", {
                        class: "text_pole",
                        value: n.voiceId,
                        onChange: c[13] || (c[13] = (p) => T(p.target.value))
                      }, [
                        u("option", Gf, W(ge.value.length) + " 条可选", 1),
                        (L(!0), k(Z, null, he(ge.value, (p) => (L(), k("option", {
                          key: p.id,
                          value: p.id
                        }, W(ht(oo)(p)), 9, Of))), 128))
                      ], 40, kf)
                    ])
                  ])
                ])) : je("", !0)
              ], 64)) : Y.value ? (L(), k(Z, { key: 1 }, [
                u("div", $f, [
                  u("label", Df, [
                    c[60] || (c[60] = u("span", { class: "mtts-label" }, "服务地址", -1)),
                    K(u("input", {
                      "onUpdate:modelValue": c[14] || (c[14] = (p) => n.indexTtsBaseUrl = p),
                      class: "text_pole",
                      type: "url",
                      placeholder: "http://127.0.0.1:7860"
                    }, null, 512), [
                      [de, n.indexTtsBaseUrl]
                    ])
                  ]),
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: y
                  }, " 检查连接 ", 8, jf)
                ]),
                u("div", Uf, [
                  u("label", Ff, [
                    c[61] || (c[61] = u("span", { class: "mtts-label" }, "默认音色", -1)),
                    K(u("select", {
                      "onUpdate:modelValue": c[15] || (c[15] = (p) => n.indexTtsVoiceId = p),
                      class: "text_pole"
                    }, [
                      u("option", Bf, W(ye.value.length > 0 ? "请选择音色预设" : "先检查连接并拉取音色"), 1),
                      n.indexTtsVoiceId && !ye.value.some((p) => p.id === n.indexTtsVoiceId) ? (L(), k("option", {
                        key: 0,
                        value: n.indexTtsVoiceId
                      }, W(n.indexTtsVoiceId), 9, Hf)) : je("", !0),
                      (L(!0), k(Z, null, he(ye.value, (p) => (L(), k("option", {
                        key: p.id,
                        value: p.id
                      }, W(p.name), 9, Kf))), 128))
                    ], 512), [
                      [me, n.indexTtsVoiceId]
                    ])
                  ]),
                  u("label", Wf, [
                    c[62] || (c[62] = u("span", { class: "mtts-label" }, "语言", -1)),
                    K(u("select", {
                      "onUpdate:modelValue": c[16] || (c[16] = (p) => n.indexTtsLanguage = p),
                      class: "text_pole"
                    }, [
                      (L(!0), k(Z, null, he(ht(Jn), (p) => (L(), k("option", {
                        key: p,
                        value: p
                      }, W(p), 9, zf))), 128))
                    ], 512), [
                      [me, n.indexTtsLanguage]
                    ])
                  ])
                ])
              ], 64)) : O.value ? (L(), k(Z, { key: 2 }, [
                u("div", Jf, [
                  u("label", Xf, [
                    c[63] || (c[63] = u("span", { class: "mtts-label" }, "服务地址", -1)),
                    K(u("input", {
                      "onUpdate:modelValue": c[17] || (c[17] = (p) => n.localGsviBaseUrl = p),
                      class: "text_pole",
                      type: "url",
                      placeholder: "http://127.0.0.1:9880"
                    }, null, 512), [
                      [de, n.localGsviBaseUrl]
                    ])
                  ]),
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: y
                  }, " 检查连接 ", 8, Yf)
                ]),
                u("div", Zf, [
                  u("label", Qf, [
                    c[64] || (c[64] = u("span", { class: "mtts-label" }, "默认模型", -1)),
                    K(u("select", {
                      "onUpdate:modelValue": c[18] || (c[18] = (p) => n.localGsviModel = p),
                      class: "text_pole",
                      onChange: Q
                    }, [
                      u("option", qf, W(ue.value.length > 0 ? "请选择" : "先检查连接并拉取模型"), 1),
                      (L(!0), k(Z, null, he(ue.value, (p) => (L(), k("option", {
                        key: p.id,
                        value: p.id
                      }, W(p.name), 9, ed))), 128))
                    ], 544), [
                      [me, n.localGsviModel]
                    ])
                  ]),
                  u("label", td, [
                    c[66] || (c[66] = u("span", { class: "mtts-label" }, "语种", -1)),
                    K(u("select", {
                      "onUpdate:modelValue": c[19] || (c[19] = (p) => n.localGsviLanguage = p),
                      class: "text_pole"
                    }, [
                      c[65] || (c[65] = u("option", { value: "" }, "请选择", -1)),
                      (L(!0), k(Z, null, he(gt.value, (p) => (L(), k("option", {
                        key: p,
                        value: p
                      }, W(p), 9, nd))), 128))
                    ], 512), [
                      [me, n.localGsviLanguage]
                    ])
                  ]),
                  u("label", sd, [
                    c[68] || (c[68] = u("span", { class: "mtts-label" }, "情绪", -1)),
                    K(u("select", {
                      "onUpdate:modelValue": c[20] || (c[20] = (p) => n.localGsviEmotion = p),
                      class: "text_pole"
                    }, [
                      c[67] || (c[67] = u("option", { value: "" }, "请选择", -1)),
                      (L(!0), k(Z, null, he(tt.value, (p) => (L(), k("option", {
                        key: p,
                        value: p
                      }, W(p), 9, id))), 128))
                    ], 512), [
                      [me, n.localGsviEmotion]
                    ])
                  ])
                ])
              ], 64)) : je("", !0),
              u("div", od, [
                u("label", rd, [
                  c[70] || (c[70] = u("span", { class: "mtts-label" }, "试听语言", -1)),
                  K(u("select", {
                    "onUpdate:modelValue": c[21] || (c[21] = (p) => n.testLanguage = p),
                    class: "text_pole"
                  }, [...c[69] || (c[69] = [
                    u("option", { value: "ja" }, "日语", -1),
                    u("option", { value: "zh" }, "中文", -1),
                    u("option", { value: "en" }, "英语", -1)
                  ])], 512), [
                    [me, n.testLanguage]
                  ])
                ]),
                u("button", {
                  class: "mtts-btn mtts-btn-secondary",
                  type: "button",
                  disabled: o.value,
                  onClick: c[22] || (c[22] = (p) => D())
                }, W(sn.value), 9, ld)
              ])
            ]),
            u("section", ad, [
              u("div", cd, [
                u("h3", ud, [
                  c[72] || (c[72] = rt(" 角色映射 ", -1)),
                  u("span", fd, W($e.value), 1)
                ]),
                u("button", {
                  class: "mtts-btn mtts-btn-primary",
                  type: "button",
                  onClick: x
                }, " + 添加角色 ")
              ]),
              $e.value === 0 ? (L(), k("div", dd, [
                c[73] || (c[73] = u("p", { class: "mtts-empty-title" }, "还没有角色映射", -1)),
                c[74] || (c[74] = u("p", { class: "mtts-empty-copy" }, [
                  rt(" 添加角色后，带有 "),
                  u("code", null, '<say char="角色名">'),
                  rt(" 的台词才会生成语音。 ")
                ], -1)),
                u("button", {
                  class: "mtts-btn mtts-btn-primary",
                  type: "button",
                  onClick: x
                }, " ＋添加第一个角色 ")
              ])) : (L(), k(Z, { key: 1 }, [
                R.value ? (L(!0), k(Z, { key: 0 }, he(n.characterMappings, (p, J) => (L(), k("article", {
                  key: `mm-${J}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", pd, [
                    c[75] || (c[75] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    K(u("input", {
                      "onUpdate:modelValue": (N) => p.characterName = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, md), [
                      [de, p.characterName]
                    ])
                  ]),
                  u("label", gd, [
                    c[76] || (c[76] = u("span", { class: "mtts-label" }, "Voice ID", -1)),
                    K(u("input", {
                      "onUpdate:modelValue": (N) => p.minimaxVoiceId = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, hd), [
                      [de, p.minimaxVoiceId]
                    ])
                  ]),
                  U.value.length > 0 ? (L(), k("label", vd, [
                    c[78] || (c[78] = u("span", { class: "mtts-label" }, "音色预设", -1)),
                    u("select", {
                      class: "text_pole",
                      value: p.minimaxVoiceId,
                      onChange: (N) => p.minimaxVoiceId = N.target.value
                    }, [
                      c[77] || (c[77] = u("option", { value: "" }, "从列表选择", -1)),
                      (L(!0), k(Z, null, he(ge.value, (N) => (L(), k("option", {
                        key: N.id,
                        value: N.id
                      }, W(ht(oo)(N)), 9, bd))), 128))
                    ], 40, _d)
                  ])) : je("", !0),
                  u("div", yd, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (N) => D(p.characterName)
                    }, " 试听 ", 8, xd),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (N) => b(J)
                    }, " 删除 ", 8, Td)
                  ])
                ]))), 128)) : Y.value ? (L(!0), k(Z, { key: 1 }, he(n.indexTtsCharacterMappings, (p, J) => (L(), k("article", {
                  key: `index-${J}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", Sd, [
                    c[79] || (c[79] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    K(u("input", {
                      "onUpdate:modelValue": (N) => p.characterName = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, wd), [
                      [de, p.characterName]
                    ])
                  ]),
                  u("div", Ed, [
                    u("label", Id, [
                      c[80] || (c[80] = u("span", { class: "mtts-label" }, "音色预设", -1)),
                      K(u("select", {
                        "onUpdate:modelValue": (N) => p.indexTtsVoiceId = N,
                        class: "text_pole"
                      }, [
                        u("option", Md, W(ye.value.length > 0 ? "请选择" : "先检查连接"), 1),
                        p.indexTtsVoiceId && !ye.value.some((N) => N.id === p.indexTtsVoiceId) ? (L(), k("option", {
                          key: 0,
                          value: p.indexTtsVoiceId
                        }, W(p.indexTtsVoiceId), 9, Ad)) : je("", !0),
                        (L(!0), k(Z, null, he(ye.value, (N) => (L(), k("option", {
                          key: N.id,
                          value: N.id
                        }, W(N.name), 9, Pd))), 128))
                      ], 8, Cd), [
                        [me, p.indexTtsVoiceId]
                      ])
                    ]),
                    u("label", Rd, [
                      c[81] || (c[81] = u("span", { class: "mtts-label" }, "语言", -1)),
                      K(u("select", {
                        "onUpdate:modelValue": (N) => p.indexTtsLanguage = N,
                        class: "text_pole"
                      }, [
                        (L(!0), k(Z, null, he(ht(Jn), (N) => (L(), k("option", {
                          key: N,
                          value: N
                        }, W(N), 9, Nd))), 128))
                      ], 8, Vd), [
                        [me, p.indexTtsLanguage]
                      ])
                    ])
                  ]),
                  u("div", Ld, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (N) => D(p.characterName)
                    }, " 试听 ", 8, kd),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (N) => b(J)
                    }, " 删除 ", 8, Gd)
                  ])
                ]))), 128)) : O.value ? (L(!0), k(Z, { key: 2 }, he(n.gsviCharacterMappings, (p, J) => (L(), k("article", {
                  key: `gsvi-${J}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", Od, [
                    c[82] || (c[82] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    K(u("input", {
                      "onUpdate:modelValue": (N) => p.characterName = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, $d), [
                      [de, p.characterName]
                    ])
                  ]),
                  u("div", Dd, [
                    u("label", jd, [
                      c[83] || (c[83] = u("span", { class: "mtts-label" }, "模型", -1)),
                      K(u("select", {
                        "onUpdate:modelValue": (N) => p.gsviVoiceId = N,
                        class: "text_pole"
                      }, [
                        u("option", Fd, W(ue.value.length > 0 ? "请选择" : "先检查连接"), 1),
                        (L(!0), k(Z, null, he(ue.value, (N) => (L(), k("option", {
                          key: N.id,
                          value: N.id
                        }, W(N.name), 9, Bd))), 128))
                      ], 8, Ud), [
                        [me, p.gsviVoiceId]
                      ])
                    ]),
                    u("label", Hd, [
                      c[85] || (c[85] = u("span", { class: "mtts-label" }, "语种", -1)),
                      K(u("select", {
                        "onUpdate:modelValue": (N) => p.gsviLanguage = N,
                        class: "text_pole"
                      }, [
                        c[84] || (c[84] = u("option", { value: "" }, "请选择", -1)),
                        (L(!0), k(Z, null, he(ne(p.gsviVoiceId), (N) => (L(), k("option", {
                          key: N,
                          value: N
                        }, W(N), 9, Wd))), 128))
                      ], 8, Kd), [
                        [me, p.gsviLanguage]
                      ])
                    ]),
                    u("label", zd, [
                      c[87] || (c[87] = u("span", { class: "mtts-label" }, "情绪", -1)),
                      K(u("select", {
                        "onUpdate:modelValue": (N) => p.gsviEmotion = N,
                        class: "text_pole"
                      }, [
                        c[86] || (c[86] = u("option", { value: "" }, "请选择", -1)),
                        (L(!0), k(Z, null, he(ee(p.gsviVoiceId, p.gsviLanguage), (N) => (L(), k("option", {
                          key: N,
                          value: N
                        }, W(N), 9, Xd))), 128))
                      ], 8, Jd), [
                        [me, p.gsviEmotion]
                      ])
                    ])
                  ]),
                  u("div", Yd, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (N) => D(p.characterName)
                    }, " 试听 ", 8, Zd),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (N) => b(J)
                    }, " 删除 ", 8, Qd)
                  ])
                ]))), 128)) : je("", !0),
                It.value.length > 0 ? (L(), k("p", qd, " 重复角色名：" + W(It.value.join("、")) + "，最后一条完整映射生效。 ", 1)) : je("", !0)
              ], 64))
            ]),
            u("details", ep, [
              c[92] || (c[92] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                rt(" 映射方案（可选） ")
              ], -1)),
              u("div", tp, [
                c[91] || (c[91] = u("p", { class: "mtts-hint" }, "角色映射会自动保存；这里仅用于保存多套可切换方案。", -1)),
                u("label", np, [
                  c[88] || (c[88] = u("span", { class: "mtts-label" }, "方案名称", -1)),
                  K(u("input", {
                    "onUpdate:modelValue": c[23] || (c[23] = (p) => l.value = p),
                    class: "text_pole",
                    type: "text",
                    placeholder: "日语角色组"
                  }, null, 512), [
                    [de, l.value]
                  ])
                ]),
                u("div", { class: "mtts-actions" }, [
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    onClick: C
                  }, " 保存当前方案 ")
                ]),
                u("label", sp, [
                  c[90] || (c[90] = u("span", { class: "mtts-label" }, "选择已有方案", -1)),
                  K(u("select", {
                    "onUpdate:modelValue": c[24] || (c[24] = (p) => a.value = p),
                    class: "text_pole"
                  }, [
                    c[89] || (c[89] = u("option", { value: "" }, "请选择方案", -1)),
                    (L(!0), k(Z, null, he(Dt.value, (p) => (L(), k("option", {
                      key: p.name,
                      value: p.name
                    }, W(p.name) + "（" + W(p.mappings.length) + "） ", 9, ip))), 128))
                  ], 512), [
                    [me, a.value]
                  ])
                ]),
                u("div", op, [
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: !a.value,
                    onClick: I
                  }, " 载入方案 ", 8, rp),
                  u("button", {
                    class: "mtts-btn mtts-btn-danger",
                    type: "button",
                    disabled: !a.value,
                    onClick: E
                  }, " 删除方案 ", 8, lp)
                ])
              ])
            ]),
            u("details", ap, [
              c[97] || (c[97] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                rt(" 提示词注入 ")
              ], -1)),
              u("div", cp, [
                u("label", up, [
                  K(u("input", {
                    "onUpdate:modelValue": c[25] || (c[25] = (p) => n.injectEnabled = p),
                    type: "checkbox"
                  }, null, 512), [
                    [Fi, n.injectEnabled]
                  ]),
                  c[93] || (c[93] = u("span", null, "注入 <say> 提示", -1))
                ]),
                u("label", fp, [
                  u("span", dp, "注入深度 D" + W(n.injectDepth), 1),
                  K(u("input", {
                    "onUpdate:modelValue": c[26] || (c[26] = (p) => n.injectDepth = p),
                    type: "range",
                    min: "0",
                    max: "10",
                    step: "1"
                  }, null, 512), [
                    [
                      de,
                      n.injectDepth,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                u("label", pp, [
                  c[95] || (c[95] = u("span", { class: "mtts-label" }, "注入角色", -1)),
                  K(u("select", {
                    "onUpdate:modelValue": c[27] || (c[27] = (p) => n.injectRole = p),
                    class: "text_pole"
                  }, [...c[94] || (c[94] = [
                    u("option", { value: "system" }, "system", -1),
                    u("option", { value: "user" }, "user", -1),
                    u("option", { value: "assistant" }, "assistant", -1)
                  ])], 512), [
                    [me, n.injectRole]
                  ])
                ]),
                u("label", mp, [
                  c[96] || (c[96] = u("span", { class: "mtts-label" }, "注入模板", -1)),
                  Y.value ? K((L(), k("textarea", {
                    key: 0,
                    "onUpdate:modelValue": c[28] || (c[28] = (p) => n.indexTtsInjectTemplate = p),
                    class: "text_pole mtts-inject-template",
                    rows: "12"
                  }, null, 512)), [
                    [de, n.indexTtsInjectTemplate]
                  ]) : K((L(), k("textarea", {
                    key: 1,
                    "onUpdate:modelValue": c[29] || (c[29] = (p) => n.injectTemplate = p),
                    class: "text_pole mtts-inject-template",
                    rows: "5"
                  }, null, 512)), [
                    [de, n.injectTemplate]
                  ])
                ])
              ])
            ]),
            u("details", gp, [
              c[102] || (c[102] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                rt(" 生成与缓存 ")
              ], -1)),
              u("div", hp, [
                u("label", vp, [
                  c[99] || (c[99] = u("span", { class: "mtts-label" }, "预取", -1)),
                  K(u("select", {
                    "onUpdate:modelValue": c[30] || (c[30] = (p) => n.prefetchMode = p),
                    class: "text_pole"
                  }, [...c[98] || (c[98] = [
                    u("option", { value: "manual" }, "只在点击时生成", -1),
                    u("option", { value: "auto_all" }, "自动预取全部", -1),
                    u("option", { value: "auto_first_n" }, "自动预取前 N 句", -1)
                  ])], 512), [
                    [me, n.prefetchMode]
                  ])
                ]),
                n.prefetchMode !== "manual" ? (L(), k("div", _p, [
                  n.prefetchMode === "auto_first_n" ? (L(), k("label", bp, [
                    c[100] || (c[100] = u("span", { class: "mtts-label" }, "前 N 句", -1)),
                    K(u("input", {
                      "onUpdate:modelValue": c[31] || (c[31] = (p) => n.prefetchFirstCount = p),
                      class: "text_pole",
                      type: "number",
                      min: "1",
                      max: "10"
                    }, null, 512), [
                      [
                        de,
                        n.prefetchFirstCount,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])) : je("", !0),
                  u("label", yp, [
                    c[101] || (c[101] = u("span", { class: "mtts-label" }, "并发", -1)),
                    K(u("input", {
                      "onUpdate:modelValue": c[32] || (c[32] = (p) => n.maxConcurrency = p),
                      class: "text_pole",
                      type: "number",
                      min: "1",
                      max: "10"
                    }, null, 512), [
                      [
                        de,
                        n.maxConcurrency,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ])) : je("", !0),
                u("p", xp, " 缓存 " + W(d.value) + " 条 / " + W(Ct.value) + "，上限 100 条或 50MB。 ", 1),
                u("div", Tp, [
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: o.value,
                    onClick: A
                  }, " 刷新缓存 ", 8, Sp),
                  u("button", {
                    class: "mtts-btn mtts-btn-danger",
                    type: "button",
                    disabled: o.value,
                    onClick: j
                  }, " 清空缓存 ", 8, wp)
                ])
              ])
            ]),
            u("details", Ep, [
              c[108] || (c[108] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                rt(" 高级设置 ")
              ], -1)),
              u("div", Ip, [
                R.value ? (L(), k(Z, { key: 0 }, [
                  u("label", Cp, [
                    c[103] || (c[103] = u("span", { class: "mtts-label" }, "模型", -1)),
                    K(u("select", {
                      "onUpdate:modelValue": c[33] || (c[33] = (p) => n.model = p),
                      class: "text_pole"
                    }, [
                      (L(!0), k(Z, null, he(ht(gr), (p) => (L(), k("option", {
                        key: p,
                        value: p
                      }, W(p), 9, Mp))), 128))
                    ], 512), [
                      [me, n.model]
                    ])
                  ]),
                  u("label", Ap, [
                    u("span", Pp, "语速 " + W(n.speed.toFixed(2)), 1),
                    K(u("input", {
                      "onUpdate:modelValue": c[34] || (c[34] = (p) => n.speed = p),
                      type: "range",
                      min: "0.5",
                      max: "2",
                      step: "0.05"
                    }, null, 512), [
                      [
                        de,
                        n.speed,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  u("label", Rp, [
                    u("span", Vp, "音量 " + W(n.vol.toFixed(2)), 1),
                    K(u("input", {
                      "onUpdate:modelValue": c[35] || (c[35] = (p) => n.vol = p),
                      type: "range",
                      min: "0",
                      max: "10",
                      step: "0.1"
                    }, null, 512), [
                      [
                        de,
                        n.vol,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : O.value ? (L(), k(Z, { key: 1 }, [
                  u("label", Np, [
                    u("span", Lp, "语速 " + W(n.speed.toFixed(2)), 1),
                    K(u("input", {
                      "onUpdate:modelValue": c[36] || (c[36] = (p) => n.speed = p),
                      type: "range",
                      min: "0.5",
                      max: "2",
                      step: "0.05"
                    }, null, 512), [
                      [
                        de,
                        n.speed,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  u("label", kp, [
                    c[104] || (c[104] = u("span", { class: "mtts-label" }, "鉴权 Token", -1)),
                    K(u("input", {
                      "onUpdate:modelValue": c[37] || (c[37] = (p) => n.localGsviAuthToken = p),
                      class: "text_pole",
                      type: "password",
                      autocomplete: "off"
                    }, null, 512), [
                      [de, n.localGsviAuthToken]
                    ])
                  ]),
                  u("div", Gp, [
                    u("label", Op, [
                      c[105] || (c[105] = u("span", { class: "mtts-label" }, "文本语言", -1)),
                      K(u("select", {
                        "onUpdate:modelValue": c[38] || (c[38] = (p) => n.localGsviTextLang = p),
                        class: "text_pole"
                      }, [
                        (L(!0), k(Z, null, he(ht(Xu), (p) => (L(), k("option", {
                          key: p,
                          value: p
                        }, W(p), 9, $p))), 128))
                      ], 512), [
                        [me, n.localGsviTextLang]
                      ])
                    ]),
                    u("label", Dp, [
                      c[106] || (c[106] = u("span", { class: "mtts-label" }, "切分", -1)),
                      K(u("select", {
                        "onUpdate:modelValue": c[39] || (c[39] = (p) => n.localGsviTextSplitMethod = p),
                        class: "text_pole"
                      }, [
                        (L(!0), k(Z, null, he(ht(Yu), (p) => (L(), k("option", {
                          key: p,
                          value: p
                        }, W(p), 9, jp))), 128))
                      ], 512), [
                        [me, n.localGsviTextSplitMethod]
                      ])
                    ])
                  ]),
                  u("label", Up, [
                    u("span", Fp, "Batch " + W(n.localGsviBatchSize), 1),
                    K(u("input", {
                      "onUpdate:modelValue": c[40] || (c[40] = (p) => n.localGsviBatchSize = p),
                      type: "range",
                      min: "1",
                      max: "8",
                      step: "1"
                    }, null, 512), [
                      [
                        de,
                        n.localGsviBatchSize,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : Y.value ? (L(), k(Z, { key: 2 }, [
                  u("label", Bp, [
                    u("span", Hp, "时长系数 " + W(n.indexTtsDurationFactor.toFixed(2)), 1),
                    c[107] || (c[107] = u("p", { class: "mtts-hint" }, "快 ← 不变 → 慢，与 IndexTTS WebUI 相同", -1)),
                    K(u("input", {
                      "onUpdate:modelValue": c[41] || (c[41] = (p) => n.indexTtsDurationFactor = p),
                      type: "range",
                      min: "0.5",
                      max: "2",
                      step: "0.01"
                    }, null, 512), [
                      [
                        de,
                        n.indexTtsDurationFactor,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  u("label", Kp, [
                    u("span", Wp, "情感权重 " + W(n.indexTtsEmoWeight.toFixed(2)), 1),
                    K(u("input", {
                      "onUpdate:modelValue": c[42] || (c[42] = (p) => n.indexTtsEmoWeight = p),
                      type: "range",
                      min: "0",
                      max: "1",
                      step: "0.01"
                    }, null, 512), [
                      [
                        de,
                        n.indexTtsEmoWeight,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : je("", !0),
                u("div", { class: "mtts-actions" }, [
                  u("button", {
                    class: "mtts-btn mtts-btn-danger",
                    type: "button",
                    onClick: H
                  }, " 恢复默认 ")
                ])
              ])
            ]),
            u("p", {
              class: at(["mtts-savebar", {
                "is-saved": h.value === "saved",
                "is-error": h.value === "error"
              }]),
              role: "status",
              "aria-live": "polite"
            }, [
              (L(), k("span", {
                key: h.value,
                class: "mtts-fade"
              }, W($.value), 1))
            ], 2)
          ])
        ])
      ])
    ], 8, nf));
  }
});
let an = null, cn = null, _n = null;
function Jp() {
  return Wt(kr().readRawSettings());
}
function Xp() {
  return _n ??= Du(Hu(Jp)), _n;
}
function tn() {
  return cn || (cn = wc(
    kr(),
    {
      mount(e, t) {
        an?.unmount(), an = Ha(zp, {
          displayName: lc,
          version: ac,
          settings: t,
          onSettingsChange(n) {
            cn?.updateSettings(n);
          }
        }), an.mount(e);
      },
      unmount() {
        an?.unmount(), an = null;
      }
    },
    {
      stopPlayback: Dn,
      clearCache: fr,
      startRuntime: () => Xp().start(),
      stopRuntime: () => _n?.stop(),
      syncInjection: () => _n?.syncInjection(),
      refreshDecorations: () => _n?.refreshDecorations()
    }
  ), cn);
}
async function nn(e, t) {
  try {
    await t();
  } catch (n) {
    const s = n instanceof Error ? n.message : String(n);
    throw console.error(`${Se} ${e} failed: ${s}`), n;
  }
}
async function Yp() {
  await nn("onInstall", () => tn().install());
}
async function Zp() {
  await nn("onActivate", () => tn().activate());
}
async function Qp() {
  await nn("onEnable", () => tn().activate());
}
async function qp() {
  await nn("onDisable", () => tn().disable());
}
async function em() {
  await nn("onClean", () => tn().clean());
}
async function tm() {
  await nn("onDelete", () => tn().delete());
}
export {
  Zp as onActivate,
  em as onClean,
  tm as onDelete,
  qp as onDisable,
  Qp as onEnable,
  Yp as onInstall
};
//# sourceMappingURL=index.js.map
