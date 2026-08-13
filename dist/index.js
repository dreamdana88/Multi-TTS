// @__NO_SIDE_EFFECTS__
function Vn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const J = {}, tt = [], Un = () => {
}, zr = () => !1, Qt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), qt = (e) => e.startsWith("onUpdate:"), Se = Object.assign, li = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ci = Object.prototype.hasOwnProperty, V = (e, t) => ci.call(e, t), N = Array.isArray, gt = (e) => Rt(e) === "[object Map]", ai = (e) => Rt(e) === "[object Set]", hr = (e) => Rt(e) === "[object Date]", k = (e) => typeof e == "function", X = (e) => typeof e == "string", xe = (e) => typeof e == "symbol", z = (e) => e !== null && typeof e == "object", Wr = (e) => (z(e) || k(e)) && k(e.then) && k(e.catch), Jr = Object.prototype.toString, Rt = (e) => Jr.call(e), ui = (e) => Rt(e).slice(8, -1), fi = (e) => Rt(e) === "[object Object]", Hn = (e) => X(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, _t = /* @__PURE__ */ Vn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), en = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, di = /-\w/g, fe = en(
  (e) => e.replace(di, (t) => t.slice(1).toUpperCase())
), hi = /\B([A-Z])/g, Je = en(
  (e) => e.replace(hi, "-$1").toLowerCase()
), Yr = en((e) => e.charAt(0).toUpperCase() + e.slice(1)), fn = en(
  (e) => e ? `on${Yr(e)}` : ""
), $e = (e, t) => !Object.is(e, t), dn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Xr = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, pi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let pr;
const tn = () => pr || (pr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Bn(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = X(r) ? yi(r) : Bn(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (X(e) || z(e))
    return e;
}
const mi = /;(?![^(]*\))/g, gi = /:([^]+)/, _i = /\/\*[^]*?\*\//g;
function yi(e) {
  const t = {};
  return e.replace(_i, "").split(mi).forEach((n) => {
    if (n) {
      const r = n.split(gi);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function kn(e) {
  let t = "";
  if (X(e))
    t = e;
  else if (N(e))
    for (let n = 0; n < e.length; n++) {
      const r = kn(e[n]);
      r && (t += r + " ");
    }
  else if (z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const vi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", bi = /* @__PURE__ */ Vn(vi);
function Zr(e) {
  return !!e || e === "";
}
function xi(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Kn(e[r], t[r]);
  return n;
}
function Kn(e, t) {
  if (e === t) return !0;
  let n = hr(e), r = hr(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = xe(e), r = xe(t), n || r)
    return e === t;
  if (n = N(e), r = N(t), n || r)
    return n && r ? xi(e, t) : !1;
  if (n = z(e), r = z(t), n || r) {
    if (!n || !r)
      return !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Kn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Qr = (e) => !!(e && e.__v_isRef === !0), jt = (e) => X(e) ? e : e == null ? "" : N(e) || z(e) && (e.toString === Jr || !k(e.toString)) ? Qr(e) ? jt(e.value) : JSON.stringify(e, qr, 2) : String(e), qr = (e, t) => Qr(t) ? qr(e, t.value) : gt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[hn(r, i) + " =>"] = s, n),
    {}
  )
} : ai(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => hn(n))
} : xe(t) ? hn(t) : z(t) && !N(t) && !fi(t) ? String(t) : t, hn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    xe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Q;
class Si {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Q && (Q.active ? (this.parent = Q, this.index = (Q.scopes || (Q.scopes = [])).push(
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
        const r = this.scopes.slice();
        for (t = 0, n = r.length; t < n; t++)
          r[t].pause();
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
        const s = this.scopes.slice();
        for (t = 0, n = s.length; t < n; t++)
          s[t].resume();
      }
      const r = this.effects.slice();
      for (t = 0, n = r.length; t < n; t++)
        r[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Q;
      try {
        return Q = this, t();
      } finally {
        Q = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Q, Q = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Q === this)
        Q = this.prevScope;
      else {
        let t = Q;
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
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const s = this.scopes.slice();
        for (n = 0, r = s.length; n < r; n++)
          s[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
let U;
const pn = /* @__PURE__ */ new WeakSet();
class Ei {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Q && (Q.active ? Q.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, pn.has(this) && (pn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, mr(this), ts(this);
    const t = U, n = de;
    U = this, de = !0;
    try {
      return this.fn();
    } finally {
      ns(this), U = t, de = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Jn(t);
      this.deps = this.depsTail = void 0, mr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? pn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Mn(this) && this.run();
  }
  get dirty() {
    return Mn(this);
  }
}
let es = 0, yt, vt;
function wi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = vt, vt = e;
    return;
  }
  e.next = yt, yt = e;
}
function zn() {
  es++;
}
function Wn() {
  if (--es > 0)
    return;
  if (vt) {
    let t = vt;
    for (vt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; yt; ) {
    let t = yt;
    for (yt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ts(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ns(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Jn(r), Ai(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function Mn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ti(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ti(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Vt) || (e.globalVersion = Vt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Mn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = U, r = de;
  U = e, de = !0;
  try {
    ts(e);
    const s = e.fn(e._value);
    (t.version === 0 || $e(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    U = n, de = r, ns(e), e.flags &= -3;
  }
}
function Jn(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Jn(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ai(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let de = !0;
const rs = [];
function rt() {
  rs.push(de), de = !1;
}
function st() {
  const e = rs.pop();
  de = e === void 0 ? !0 : e;
}
function mr(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = U;
    U = void 0;
    try {
      t();
    } finally {
      U = n;
    }
  }
}
let Vt = 0;
class Ci {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ss {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!U || !de || U === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== U)
      n = this.activeLink = new Ci(U, this), U.deps ? (n.prevDep = U.depsTail, U.depsTail.nextDep = n, U.depsTail = n) : U.deps = U.depsTail = n, is(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = U.depsTail, n.nextDep = void 0, U.depsTail.nextDep = n, U.depsTail = n, U.deps === n && (U.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Vt++, this.notify(t);
  }
  notify(t) {
    zn();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Wn();
    }
  }
}
function is(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        is(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const In = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ Symbol(
  ""
), Rn = /* @__PURE__ */ Symbol(
  ""
), wt = /* @__PURE__ */ Symbol(
  ""
);
function q(e, t, n) {
  if (de && U) {
    let r = In.get(e);
    r || In.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new ss()), s.map = r, s.key = n), s.track();
  }
}
function Ie(e, t, n, r, s, i) {
  const o = In.get(e);
  if (!o) {
    Vt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (zn(), t === "clear")
    o.forEach(l);
  else {
    const c = N(e), f = c && Hn(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((p, x) => {
        (x === "length" || x === wt || !xe(x) && x >= d) && l(p);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), f && l(o.get(wt)), t) {
        case "add":
          c ? f && l(o.get("length")) : (l(o.get(ke)), gt(e) && l(o.get(Rn)));
          break;
        case "delete":
          c || (l(o.get(ke)), gt(e) && l(o.get(Rn)));
          break;
        case "set":
          gt(e) && l(o.get(ke));
          break;
      }
  }
  Wn();
}
function qe(e) {
  const t = /* @__PURE__ */ $(e);
  return t === e ? t : (q(t, "iterate", wt), /* @__PURE__ */ Ge(e) ? t : t.map(Pe));
}
function Yn(e) {
  return q(e = /* @__PURE__ */ $(e), "iterate", wt), e;
}
function ve(e, t) {
  return /* @__PURE__ */ je(e) ? Tt(/* @__PURE__ */ Qn(e) ? Pe(t) : t) : Pe(t);
}
const Mi = {
  __proto__: null,
  [Symbol.iterator]() {
    return mn(this, Symbol.iterator, (e) => ve(this, e));
  },
  concat(...e) {
    return qe(this).concat(
      ...e.map((t) => N(t) ? qe(t) : t)
    );
  },
  entries() {
    return mn(this, "entries", (e) => (e[1] = ve(this, e[1]), e));
  },
  every(e, t) {
    return we(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return we(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => ve(this, r)),
      arguments
    );
  },
  find(e, t) {
    return we(
      this,
      "find",
      e,
      t,
      (n) => ve(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return we(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return we(
      this,
      "findLast",
      e,
      t,
      (n) => ve(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return we(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return we(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return gn(this, "includes", e);
  },
  indexOf(...e) {
    return gn(this, "indexOf", e);
  },
  join(e) {
    return qe(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return gn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return we(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return dt(this, "pop");
  },
  push(...e) {
    return dt(this, "push", e);
  },
  reduce(e, ...t) {
    return gr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return gr(this, "reduceRight", e, t);
  },
  shift() {
    return dt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return we(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return dt(this, "splice", e);
  },
  toReversed() {
    return qe(this).toReversed();
  },
  toSorted(e) {
    return qe(this).toSorted(e);
  },
  toSpliced(...e) {
    return qe(this).toSpliced(...e);
  },
  unshift(...e) {
    return dt(this, "unshift", e);
  },
  values() {
    return mn(this, "values", (e) => ve(this, e));
  }
};
function mn(e, t, n) {
  const r = Yn(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ Ge(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Ii = Array.prototype;
function we(e, t, n, r, s, i) {
  const o = Yn(e), l = o !== e && !/* @__PURE__ */ Ge(e), c = o[t];
  if (c !== Ii[t]) {
    const p = c.apply(e, i);
    return l ? Pe(p) : p;
  }
  let f = n;
  o !== e && (l ? f = function(p, x) {
    return n.call(this, ve(e, p), x, e);
  } : n.length > 2 && (f = function(p, x) {
    return n.call(this, p, x, e);
  }));
  const d = c.call(o, f, r);
  return l && s ? s(d) : d;
}
function gr(e, t, n, r) {
  const s = Yn(e), i = s !== e && !/* @__PURE__ */ Ge(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(f, d, p) {
    return l && (l = !1, f = ve(e, f)), n.call(this, f, ve(e, d), p, e);
  }) : n.length > 3 && (o = function(f, d, p) {
    return n.call(this, f, d, p, e);
  }));
  const c = s[t](o, ...r);
  return l ? ve(e, c) : c;
}
function gn(e, t, n) {
  const r = /* @__PURE__ */ $(e);
  q(r, "iterate", wt);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ qn(n[0]) ? (n[0] = /* @__PURE__ */ $(n[0]), r[t](...n)) : s;
}
function dt(e, t, n = []) {
  rt(), zn();
  const r = (/* @__PURE__ */ $(e))[t].apply(e, n);
  return Wn(), st(), r;
}
const Ri = /* @__PURE__ */ Vn("__proto__,__v_isRef,__isVue"), os = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(xe)
);
function Pi(e) {
  xe(e) || (e = String(e));
  const t = /* @__PURE__ */ $(this);
  return q(t, "has", e), t.hasOwnProperty(e);
}
class ls {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return r === (s ? i ? Ui : fs : i ? us : as).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = N(t);
    if (!s) {
      let c;
      if (o && (c = Mi[n]))
        return c;
      if (n === "hasOwnProperty")
        return Pi;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ae(t) ? t : r
    );
    if ((xe(n) ? os.has(n) : Ri(n)) || (s || q(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ ae(l)) {
      const c = o && Hn(n) ? l : l.value;
      return s && z(c) ? /* @__PURE__ */ On(c) : c;
    }
    return z(l) ? s ? /* @__PURE__ */ On(l) : /* @__PURE__ */ ds(l) : l;
  }
}
class cs extends ls {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = N(t) && Hn(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ je(i);
      if (!/* @__PURE__ */ Ge(r) && !/* @__PURE__ */ je(r) && (i = /* @__PURE__ */ $(i), r = /* @__PURE__ */ $(r)), !o && /* @__PURE__ */ ae(i) && !/* @__PURE__ */ ae(r))
        return f || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : V(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ ae(t) ? t : s
    );
    return t === /* @__PURE__ */ $(s) && c && (l ? $e(r, i) && Ie(t, "set", n, r) : Ie(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = V(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Ie(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!xe(n) || !os.has(n)) && q(t, "has", n), r;
  }
  ownKeys(t) {
    return q(
      t,
      "iterate",
      N(t) ? "length" : ke
    ), Reflect.ownKeys(t);
  }
}
class Oi extends ls {
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
const Ni = /* @__PURE__ */ new cs(), Li = /* @__PURE__ */ new Oi(), $i = /* @__PURE__ */ new cs(!0);
const Pn = (e) => e, $t = (e) => Reflect.getPrototypeOf(e);
function Di(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ $(s), o = gt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, f = s[e](...r), d = n ? Pn : t ? Tt : Pe;
    return !t && q(
      i,
      "iterate",
      c ? Rn : ke
    ), Se(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: p, done: x } = f.next();
          return x ? { value: p, done: x } : {
            value: l ? [d(p[0]), d(p[1])] : d(p),
            done: x
          };
        }
      }
    );
  };
}
function Dt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ji(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ $(i), l = /* @__PURE__ */ $(s);
      e || ($e(s, l) && q(o, "get", s), q(o, "get", l));
      const { has: c } = $t(o), f = t ? Pn : e ? Tt : Pe;
      if (c.call(o, s))
        return f(i.get(s));
      if (c.call(o, l))
        return f(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && q(/* @__PURE__ */ $(s), "iterate", ke), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ $(i), l = /* @__PURE__ */ $(s);
      return e || ($e(s, l) && q(o, "has", s), q(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ $(l), f = t ? Pn : e ? Tt : Pe;
      return !e && q(c, "iterate", ke), l.forEach((d, p) => s.call(i, f(d), f(p), o));
    }
  };
  return Se(
    n,
    e ? {
      add: Dt("add"),
      set: Dt("set"),
      delete: Dt("delete"),
      clear: Dt("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ $(this), o = $t(i), l = /* @__PURE__ */ $(s), c = !t && !/* @__PURE__ */ Ge(s) && !/* @__PURE__ */ je(s) ? l : s;
        return o.has.call(i, c) || $e(s, c) && o.has.call(i, s) || $e(l, c) && o.has.call(i, l) || (i.add(c), Ie(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ Ge(i) && !/* @__PURE__ */ je(i) && (i = /* @__PURE__ */ $(i));
        const o = /* @__PURE__ */ $(this), { has: l, get: c } = $t(o);
        let f = l.call(o, s);
        f || (s = /* @__PURE__ */ $(s), f = l.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), f ? $e(i, d) && Ie(o, "set", s, i) : Ie(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ $(this), { has: o, get: l } = $t(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ $(s), c = o.call(i, s)), l && l.call(i, s);
        const f = i.delete(s);
        return c && Ie(i, "delete", s, void 0), f;
      },
      clear() {
        const s = /* @__PURE__ */ $(this), i = s.size !== 0, o = s.clear();
        return i && Ie(
          s,
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
  ].forEach((s) => {
    n[s] = Di(s, e, t);
  }), n;
}
function Xn(e, t) {
  const n = ji(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    V(n, s) && s in r ? n : r,
    s,
    i
  );
}
const Gi = {
  get: /* @__PURE__ */ Xn(!1, !1)
}, Fi = {
  get: /* @__PURE__ */ Xn(!1, !0)
}, Vi = {
  get: /* @__PURE__ */ Xn(!0, !1)
};
const as = /* @__PURE__ */ new WeakMap(), us = /* @__PURE__ */ new WeakMap(), fs = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap();
function Hi(e) {
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
function ds(e) {
  return /* @__PURE__ */ je(e) ? e : Zn(
    e,
    !1,
    Ni,
    Gi,
    as
  );
}
// @__NO_SIDE_EFFECTS__
function Bi(e) {
  return Zn(
    e,
    !1,
    $i,
    Fi,
    us
  );
}
// @__NO_SIDE_EFFECTS__
function On(e) {
  return Zn(
    e,
    !0,
    Li,
    Vi,
    fs
  );
}
function Zn(e, t, n, r, s) {
  if (!z(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const o = Hi(ui(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Qn(e) {
  return /* @__PURE__ */ je(e) ? /* @__PURE__ */ Qn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function je(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function qn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function $(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ $(t) : e;
}
function ki(e) {
  return !V(e, "__v_skip") && Object.isExtensible(e) && Xr(e, "__v_skip", !0), e;
}
const Pe = (e) => z(e) ? /* @__PURE__ */ ds(e) : e, Tt = (e) => z(e) ? /* @__PURE__ */ On(e) : e;
// @__NO_SIDE_EFFECTS__
function ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  return zi(e, !1);
}
function zi(e, t) {
  return /* @__PURE__ */ ae(e) ? e : new Wi(e, t);
}
class Wi {
  constructor(t, n) {
    this.dep = new ss(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ $(t), this._value = n ? t : Pe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ Ge(t) || /* @__PURE__ */ je(t);
    t = r ? t : /* @__PURE__ */ $(t), $e(t, n) && (this._rawValue = t, this._value = r ? t : Pe(t), this.dep.trigger());
  }
}
function Ji(e) {
  return /* @__PURE__ */ ae(e) ? e.value : e;
}
const Yi = {
  get: (e, t, n) => t === "__v_raw" ? e : Ji(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ ae(s) && !/* @__PURE__ */ ae(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function hs(e) {
  return /* @__PURE__ */ Qn(e) ? e : new Proxy(e, Yi);
}
function Pt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    nn(s, t, n);
  }
}
function Fe(e, t, n, r) {
  if (k(e)) {
    const s = Pt(e, t, n, r);
    return s && Wr(s) && s.catch((i) => {
      nn(i, t, n);
    }), s;
  }
  if (N(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Fe(e[i], t, n, r));
    return s;
  }
}
function nn(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || J;
  if (t) {
    let l = t.parent;
    const c = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let p = 0; p < d.length; p++)
          if (d[p](e, c, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      rt(), Pt(i, null, 10, [
        e,
        c,
        f
      ]), st();
      return;
    }
  }
  Xi(e, n, s, r, o);
}
function Xi(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const te = [];
let ye = -1;
const nt = [];
let Ne = null, et = 0;
const ps = /* @__PURE__ */ Promise.resolve();
let Ut = null;
function Zi(e) {
  const t = Ut || ps;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qi(e) {
  let t = ye + 1, n = te.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = te[r], i = At(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function ms(e) {
  if (!(e.flags & 1)) {
    const t = At(e), n = te[te.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= At(n) ? te.push(e) : te.splice(Qi(t), 0, e), e.flags |= 1, gs();
  }
}
function gs() {
  Ut || (Ut = ps.then(ys));
}
function qi(e) {
  if (!N(e))
    Ne && e.id === -1 ? Ne.splice(et + 1, 0, e) : e.flags & 1 || (nt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      nt.push(e[t]);
  gs();
}
function _r(e, t, n = ye + 1) {
  for (; n < te.length; n++) {
    const r = te[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      te.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function _s(e) {
  if (nt.length) {
    const t = [...new Set(nt)].sort(
      (n, r) => At(n) - At(r)
    );
    if (nt.length = 0, Ne) {
      for (let n = 0; n < t.length; n++)
        Ne.push(t[n]);
      return;
    }
    for (Ne = t, et = 0; et < Ne.length; et++) {
      const n = Ne[et];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ne = null, et = 0;
  }
}
const At = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ys(e) {
  try {
    for (ye = 0; ye < te.length; ye++) {
      const t = te[ye];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Pt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ye < te.length; ye++) {
      const t = te[ye];
      t && (t.flags &= -2);
    }
    ye = -1, te.length = 0, _s(), Ut = null, (te.length || nt.length) && ys();
  }
}
let Re = null, vs = null;
function Ht(e) {
  const t = Re;
  return Re = e, vs = e && e.type.__scopeId || null, t;
}
function eo(e, t = Re, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && wr(-1);
    const i = Ht(t), o = Ke.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = Ke.length; c > o; c--) $s();
      Ht(i), r._d && wr(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ue(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[r];
    c && (rt(), Fe(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), st());
  }
}
const to = /* @__PURE__ */ Symbol("_vte"), rn = (e) => e.__isTeleport, _n = /* @__PURE__ */ Symbol("_leaveCb");
function no(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== We) {
        t = n;
        break;
      }
  }
  return t;
}
function bs(e) {
  if (!xs(e))
    return rn(e.type) && e.children ? no(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && k(n.default))
      return n.default();
  }
}
function er(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    er(
      rn(n.type) && bs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function ro(e, t) {
  return k(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Se({ name: e.name }, t, { setup: e })
  ) : e;
}
function so(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function yr(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Bt = /* @__PURE__ */ new WeakMap();
function bt(e, t, n, r, s = !1) {
  if (N(e)) {
    e.forEach(
      (T, w) => bt(
        T,
        t && (N(t) ? t[w] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (xt(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && bt(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? rr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, f = t && t.r, d = l.refs === J ? l.refs = {} : l.refs, p = l.setupState, x = /* @__PURE__ */ $(p), M = p === J ? zr : (T) => yr(d, T) ? !1 : V(x, T), L = (T, w) => !(w && yr(d, w));
  if (f != null && f !== c) {
    if (vr(t), X(f))
      d[f] = null, M(f) && (p[f] = null);
    else if (/* @__PURE__ */ ae(f)) {
      const T = t;
      L(f, T.k) && (f.value = null), T.k && (d[T.k] = null);
    }
  }
  if (k(c))
    Pt(c, l, 12, [o, d]);
  else {
    const T = X(c), w = /* @__PURE__ */ ae(c);
    if (T || w) {
      const I = () => {
        if (e.f) {
          const P = T ? M(c) ? p[c] : d[c] : L() || !e.k ? c.value : d[e.k];
          if (s)
            N(P) && li(P, i);
          else if (N(P))
            P.includes(i) || P.push(i);
          else if (T)
            d[c] = [i], M(c) && (p[c] = d[c]);
          else {
            const j = [i];
            L(c, e.k) && (c.value = j), e.k && (d[e.k] = j);
          }
        } else T ? (d[c] = o, M(c) && (p[c] = o)) : w && (L(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const P = () => {
          I(), Bt.delete(e);
        };
        P.id = -1, Bt.set(e, P), ie(P, n);
      } else
        vr(e), I();
    }
  }
}
function vr(e) {
  const t = Bt.get(e);
  t && (t.flags |= 8, Bt.delete(e));
}
tn().requestIdleCallback;
tn().cancelIdleCallback;
const xt = (e) => !!e.type.__asyncLoader, xs = (e) => e.type.__isKeepAlive, io = /* @__PURE__ */ Symbol.for("v-ndc"), Nn = (e) => e ? Vs(e) ? rr(e) : Nn(e.parent) : null, St = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Nn(e.parent),
    $root: (e) => Nn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      ms(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zi.bind(e.proxy)),
    $watch: (e) => Un
  })
), yn = (e, t) => e !== J && !e.__isScriptSetup && V(e, t), oo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const x = o[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (yn(r, t))
          return o[t] = 1, r[t];
        if (V(i, t))
          return o[t] = 3, i[t];
        if (n !== J && V(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const f = St[t];
    let d, p;
    if (f)
      return t === "$attrs" && q(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== J && V(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, V(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return yn(s, t) ? (s[t] = n, !0) : V(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || yn(t, l) || V(i, l) || V(r, l) || V(St, l) || V(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : V(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ss() {
  return {
    app: null,
    config: {
      isNativeTag: zr,
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
let lo = 0;
function co(e, t) {
  return function(r, s = null) {
    k(r) || (r = Se({}, r)), s != null && !z(s) && (s = null);
    const i = Ss(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const f = i.app = {
      _uid: lo++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Ho,
      get config() {
        return i.config;
      },
      set config(d) {
      },
      use(d, ...p) {
        return o.has(d) || (d && k(d.install) ? (o.add(d), d.install(f, ...p)) : k(d) && (o.add(d), d(f, ...p))), f;
      },
      mixin(d) {
        return f;
      },
      component(d, p) {
        return p ? (i.components[d] = p, f) : i.components[d];
      },
      directive(d, p) {
        return p ? (i.directives[d] = p, f) : i.directives[d];
      },
      mount(d, p, x) {
        if (!c) {
          const M = f._ceVNode || ze(r, s);
          return M.appContext = i, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(M, d, x), c = !0, f._container = d, d.__vue_app__ = f, rr(M.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (Fe(
          l,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(d, p) {
        return i.provides[d] = p, f;
      },
      runWithContext(d) {
        return d();
      }
    };
    return f;
  };
}
const ao = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${fe(t)}Modifiers`] || e[`${Je(t)}Modifiers`];
function uo(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || J;
  let s = n;
  const i = t.startsWith("update:"), o = i && ao(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => X(d) ? d.trim() : d)), o.number && (s = n.map(pi)));
  let l, c = r[l = fn(t)] || // also try camelCase event handler (#2249)
  r[l = fn(fe(t))];
  !c && i && (c = r[l = fn(Je(t))]), c && Fe(
    c,
    e,
    6,
    s
  );
  const f = r[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Fe(
      f,
      e,
      6,
      s
    );
  }
}
function fo(e, t, n = !1) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {};
  return i ? (N(i) ? i.forEach((l) => o[l] = null) : Se(o, i), z(e) && r.set(e, o), o) : (z(e) && r.set(e, null), null);
}
function sn(e, t) {
  return !e || !Qt(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), V(e, t[0].toLowerCase() + t.slice(1)) || V(e, Je(t)) || V(e, t));
}
function br(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: c,
    render: f,
    renderCache: d,
    props: p,
    data: x,
    setupState: M,
    ctx: L,
    inheritAttrs: T
  } = e, w = Ht(e);
  let I, P;
  try {
    if (n.shapeFlag & 4) {
      const H = s || r, ue = H;
      I = be(
        f.call(
          ue,
          H,
          d,
          p,
          M,
          x,
          L
        )
      ), P = l;
    } else {
      const H = t;
      I = be(
        H.length > 1 ? H(
          p,
          { attrs: l, slots: o, emit: c }
        ) : H(
          p,
          null
        )
      ), P = t.props ? l : ho(l);
    }
  } catch (H) {
    Ke.length = 0, nn(H, e, 1), I = ze(We);
  }
  let j = I;
  if (P && T !== !1) {
    const H = Object.keys(P), { shapeFlag: ue } = j;
    H.length && ue & 7 && (i && H.some(qt) && (P = po(
      P,
      i
    )), j = it(j, P, !1, !0));
  }
  if (n.dirs && (j = it(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const H = rn(j.type) && bs(j) || j;
    er(H, n.transition);
  }
  return I = j, Ht(w), I;
}
const ho = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, po = (e, t) => {
  const n = {};
  for (const r in e)
    (!qt(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function mo(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: c } = t, f = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? xr(r, o, f) : !!o;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        const x = d[p];
        if (Es(o, r, x) && !sn(f, x))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? xr(r, o, f) : !0 : !!o;
  return !1;
}
function xr(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (Es(t, e, i) && !sn(n, i))
      return !0;
  }
  return !1;
}
function Es(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && z(r) && z(s) ? !Kn(r, s) : r !== s;
}
function go({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = r, e = s), s === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const ws = {}, Ts = () => Object.create(ws), As = (e) => Object.getPrototypeOf(e) === ws;
function _o(e, t, n, r = !1) {
  const s = {}, i = Ts();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Cs(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : /* @__PURE__ */ Bi(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function yo(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ $(s), [c] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        let x = d[p];
        if (sn(e.emitsOptions, x))
          continue;
        const M = t[x];
        if (c)
          if (V(i, x))
            M !== i[x] && (i[x] = M, f = !0);
          else {
            const L = fe(x);
            s[L] = Ln(
              c,
              l,
              L,
              M,
              e,
              !1
            );
          }
        else
          M !== i[x] && (i[x] = M, f = !0);
      }
    }
  } else {
    Cs(e, t, s, i) && (f = !0);
    let d;
    for (const p in l)
      (!t || // for camelCase
      !V(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Je(p)) === p || !V(t, d))) && (c ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[p] = Ln(
        c,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete s[p]);
    if (i !== l)
      for (const p in i)
        (!t || !V(t, p)) && (delete i[p], f = !0);
  }
  f && Ie(e.attrs, "set", "");
}
function Cs(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (_t(c))
        continue;
      const f = t[c];
      let d;
      s && V(s, d = fe(c)) ? !i || !i.includes(d) ? n[d] = f : (l || (l = {}))[d] = f : sn(e.emitsOptions, c) || (!(c in r) || f !== r[c]) && (r[c] = f, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ $(n), f = l || J;
    for (let d = 0; d < i.length; d++) {
      const p = i[d];
      n[p] = Ln(
        s,
        c,
        p,
        f[p],
        e,
        !V(f, p)
      );
    }
  }
  return o;
}
function Ln(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = V(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && k(c)) {
        const { propsDefaults: f } = s;
        if (n in f)
          r = f[n];
        else {
          const d = Fs(s);
          r = f[n] = c.call(
            null,
            t
          ), d();
        }
      } else
        r = c;
      s.ce && s.ce._setProp(n, r);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Je(n)) && (r = !0));
  }
  return r;
}
function vo(e, t, n = !1) {
  const r = t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  if (!i)
    return z(e) && r.set(e, tt), tt;
  if (N(i))
    for (let f = 0; f < i.length; f++) {
      const d = fe(i[f]);
      Sr(d) && (o[d] = J);
    }
  else if (i)
    for (const f in i) {
      const d = fe(f);
      if (Sr(d)) {
        const p = i[f], x = o[d] = N(p) || k(p) ? { type: p } : Se({}, p), M = x.type;
        let L = !1, T = !0;
        if (N(M))
          for (let w = 0; w < M.length; ++w) {
            const I = M[w], P = k(I) && I.name;
            if (P === "Boolean") {
              L = !0;
              break;
            } else P === "String" && (T = !1);
          }
        else
          L = k(M) && M.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = L, x[
          1
          /* shouldCastTrue */
        ] = T, (L || V(x, "default")) && l.push(d);
      }
    }
  const c = [o, l];
  return z(e) && r.set(e, c), c;
}
function Sr(e) {
  return e[0] !== "$" && !_t(e);
}
const tr = (e) => e === "_" || e === "_ctx" || e === "$stable", nr = (e) => N(e) ? e.map(be) : [be(e)], bo = (e, t, n) => {
  if (t._n)
    return t;
  const r = eo((...s) => nr(t(...s)), n);
  return r._c = !1, r;
}, Ms = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (tr(s)) continue;
    const i = e[s];
    if (k(i))
      t[s] = bo(s, i, r);
    else if (i != null) {
      const o = nr(i);
      t[s] = () => o;
    }
  }
}, Is = (e, t) => {
  const n = nr(t);
  e.slots.default = () => n;
}, Rs = (e, t, n) => {
  for (const r in t)
    (n || !tr(r)) && (e[r] = t[r]);
}, xo = (e, t, n) => {
  const r = e.slots = Ts();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Rs(r, t, n), n && Xr(r, "_", s, !0)) : Ms(t, r);
  } else t && Is(e, t);
}, So = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = J;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Rs(s, t, n) : (i = !t.$stable, Ms(t, s)), o = t;
  } else t && (Is(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !tr(l) && o[l] == null && delete s[l];
}, ie = Co;
function Eo(e) {
  return wo(e);
}
function wo(e, t) {
  const n = tn();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: f,
    setElementText: d,
    parentNode: p,
    nextSibling: x,
    setScopeId: M = Un,
    insertStaticContent: L
  } = e, T = (a, u, h, y = null, _ = null, m = null, S = void 0, b = null, v = !!u.dynamicChildren) => {
    if (a === u)
      return;
    a && !ht(a, u) && (y = Lt(a), Oe(a, _, m, !0), a = null), u.patchFlag === -2 && (v = !1, u.dynamicChildren = null);
    const { type: g, ref: C, shapeFlag: E } = u;
    switch (g) {
      case on:
        w(a, u, h, y);
        break;
      case We:
        I(a, u, h, y);
        break;
      case bn:
        a == null && P(u, h, y, S);
        break;
      case Ce:
        Ze(
          a,
          u,
          h,
          y,
          _,
          m,
          S,
          b,
          v
        );
        break;
      default:
        E & 1 ? ue(
          a,
          u,
          h,
          y,
          _,
          m,
          S,
          b,
          v
        ) : E & 6 ? ct(
          a,
          u,
          h,
          y,
          _,
          m,
          S,
          b,
          v
        ) : (E & 64 || E & 128) && g.process(
          a,
          u,
          h,
          y,
          _,
          m,
          S,
          b,
          v,
          ut
        );
    }
    C != null && _ ? bt(C, a && a.ref, m, u || a, !u) : C == null && a && a.ref != null && bt(a.ref, null, m, a, !0);
  }, w = (a, u, h, y) => {
    if (a == null)
      r(
        u.el = l(u.children),
        h,
        y
      );
    else {
      const _ = u.el = a.el;
      u.children !== a.children && f(_, u.children);
    }
  }, I = (a, u, h, y) => {
    a == null ? r(
      u.el = c(u.children || ""),
      h,
      y
    ) : u.el = a.el;
  }, P = (a, u, h, y) => {
    [a.el, a.anchor] = L(
      a.children,
      u,
      h,
      y,
      a.el,
      a.anchor
    );
  }, j = ({ el: a, anchor: u }, h, y) => {
    let _;
    for (; a && a !== u; )
      _ = x(a), r(a, h, y), a = _;
    r(u, h, y);
  }, H = ({ el: a, anchor: u }) => {
    let h;
    for (; a && a !== u; )
      h = x(a), s(a), a = h;
    s(u);
  }, ue = (a, u, h, y, _, m, S, b, v) => {
    if (u.type === "svg" ? S = "svg" : u.type === "math" && (S = "mathml"), a == null)
      Ve(
        u,
        h,
        y,
        _,
        m,
        S,
        b,
        v
      );
    else {
      const g = a.el && a.el._isVueCE ? a.el : null;
      try {
        g && g._beginPatch(), Ee(
          a,
          u,
          _,
          m,
          S,
          b,
          v
        );
      } finally {
        g && g._endPatch();
      }
    }
  }, Ve = (a, u, h, y, _, m, S, b) => {
    let v, g;
    const { props: C, shapeFlag: E, transition: A, dirs: R } = a;
    if (v = a.el = o(
      a.type,
      m,
      C && C.is,
      C
    ), E & 8 ? d(v, a.children) : E & 16 && le(
      a.children,
      v,
      null,
      y,
      _,
      vn(a, m),
      S,
      b
    ), R && Ue(a, null, y, "created"), re(v, a, a.scopeId, S, y), C) {
      for (const F in C)
        F !== "value" && !_t(F) && i(v, F, null, C[F], m, y);
      "value" in C && i(v, "value", null, C.value, m), (g = C.onVnodeBeforeMount) && ge(g, y, a);
    }
    R && Ue(a, null, y, "beforeMount");
    const O = To(_, A);
    O && A.beforeEnter(v), r(v, u, h), ((g = C && C.onVnodeMounted) || O || R) && ie(() => {
      g && ge(g, y, a), O && A.enter(v), R && Ue(a, null, y, "mounted");
    }, _);
  }, re = (a, u, h, y, _) => {
    if (h && M(a, h), y)
      for (let m = 0; m < y.length; m++)
        M(a, y[m]);
    if (_) {
      let m = _.subTree;
      if (u === m || Ls(m.type) && (m.ssContent === u || m.ssFallback === u)) {
        const S = _.vnode;
        re(
          a,
          S,
          S.scopeId,
          S.slotScopeIds,
          _.parent
        );
      }
    }
  }, le = (a, u, h, y, _, m, S, b, v = 0) => {
    for (let g = v; g < a.length; g++) {
      const C = a[g] = b ? Me(a[g]) : be(a[g]);
      T(
        null,
        C,
        u,
        h,
        y,
        _,
        m,
        S,
        b
      );
    }
  }, Ee = (a, u, h, y, _, m, S) => {
    const b = u.el = a.el;
    let { patchFlag: v, dynamicChildren: g, dirs: C } = u;
    v |= a.patchFlag & 16;
    const E = a.props || J, A = u.props || J;
    let R;
    if (h && He(h, !1), (R = A.onVnodeBeforeUpdate) && ge(R, h, u, a), C && Ue(u, a, h, "beforeUpdate"), h && He(h, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    g && (!a.dynamicChildren || a.dynamicChildren.length !== g.length) && (v = 0, S = !1, g = null), (E.innerHTML && A.innerHTML == null || E.textContent && A.textContent == null) && d(b, ""), g ? Xe(
      a.dynamicChildren,
      g,
      b,
      h,
      y,
      vn(u, _),
      m
    ) : S || an(
      a,
      u,
      b,
      null,
      h,
      y,
      vn(u, _),
      m,
      !1
    ), v > 0) {
      if (v & 16)
        B(b, E, A, h, _);
      else if (v & 2 && E.class !== A.class && i(b, "class", null, A.class, _), v & 4 && i(b, "style", E.style, A.style, _), v & 8) {
        const O = u.dynamicProps;
        for (let F = 0; F < O.length; F++) {
          const G = O[F], Y = E[G], Z = A[G];
          (Z !== Y || G === "value") && i(b, G, Y, Z, _, h);
        }
      }
      v & 1 && a.children !== u.children && d(b, u.children);
    } else !S && g == null && B(b, E, A, h, _);
    ((R = A.onVnodeUpdated) || C) && ie(() => {
      R && ge(R, h, u, a), C && Ue(u, a, h, "updated");
    }, y);
  }, Xe = (a, u, h, y, _, m, S) => {
    for (let b = 0; b < u.length; b++) {
      const v = a[b], g = u[b], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === Ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ht(v, g) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 198) ? p(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      T(
        v,
        g,
        C,
        null,
        y,
        _,
        m,
        S,
        !0
      );
    }
  }, B = (a, u, h, y, _) => {
    if (u !== h) {
      if (u !== J)
        for (const m in u)
          !_t(m) && !(m in h) && i(
            a,
            m,
            u[m],
            null,
            _,
            y
          );
      for (const m in h) {
        if (_t(m)) continue;
        const S = h[m], b = u[m];
        S !== b && m !== "value" && i(a, m, b, S, _, y);
      }
      "value" in h && i(a, "value", u.value, h.value, _);
    }
  }, Ze = (a, u, h, y, _, m, S, b, v) => {
    const g = u.el = a ? a.el : l(""), C = u.anchor = a ? a.anchor : l("");
    let { patchFlag: E, dynamicChildren: A, slotScopeIds: R } = u;
    R && (b = b ? b.concat(R) : R), a == null ? (r(g, h, y), r(C, h, y), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      C,
      _,
      m,
      S,
      b,
      v
    )) : E > 0 && E & 64 && A && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === A.length ? (Xe(
      a.dynamicChildren,
      A,
      h,
      _,
      m,
      S,
      b
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || _ && u === _.subTree) && Ps(
      a,
      u,
      !0
      /* shallow */
    )) : an(
      a,
      u,
      h,
      C,
      _,
      m,
      S,
      b,
      v
    );
  }, ct = (a, u, h, y, _, m, S, b, v) => {
    u.slotScopeIds = b, a == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      h,
      y,
      S,
      v
    ) : Qe(
      u,
      h,
      y,
      _,
      m,
      S,
      v
    ) : ri(a, u, v);
  }, Qe = (a, u, h, y, _, m, S) => {
    const b = a.component = Do(
      a,
      y,
      _
    );
    if (xs(a) && (b.ctx.renderer = ut), jo(b, !1, S), b.asyncDep) {
      if (_ && _.registerDep(b, or, S), !a.el) {
        const v = b.subTree = ze(We);
        I(null, v, u, h), a.placeholder = v.el;
      }
    } else
      or(
        b,
        a,
        u,
        h,
        _,
        m,
        S
      );
  }, ri = (a, u, h) => {
    const y = u.component = a.component;
    if (mo(a, u, h))
      if (y.asyncDep && !y.asyncResolved) {
        cn(y, u, h);
        return;
      } else
        y.next = u, y.update();
    else
      u.el = a.el, y.vnode = u;
  }, or = (a, u, h, y, _, m, S) => {
    const b = () => {
      if (a.isMounted) {
        let { next: E, bu: A, u: R, parent: O, vnode: F } = a;
        {
          const pe = Os(a);
          if (pe) {
            E && (E.el = F.el, cn(a, E, S)), pe.asyncDep.then(() => {
              ie(() => {
                a.isUnmounted || g();
              }, _);
            });
            return;
          }
        }
        let G = E, Y;
        He(a, !1), E ? (E.el = F.el, cn(a, E, S)) : E = F, A && dn(A), (Y = E.props && E.props.onVnodeBeforeUpdate) && ge(Y, O, E, F), He(a, !0);
        const Z = br(a), he = a.subTree;
        a.subTree = Z, T(
          he,
          Z,
          // parent may have changed if it's in a teleport
          p(he.el),
          // anchor may have changed if it's in a fragment
          Lt(he),
          a,
          _,
          m
        ), E.el = Z.el, G === null && go(a, Z.el), R && ie(R, _), (Y = E.props && E.props.onVnodeUpdated) && ie(
          () => ge(Y, O, E, F),
          _
        );
      } else {
        let E;
        const { el: A, props: R } = u, { bm: O, m: F, parent: G, root: Y, type: Z } = a, he = xt(u);
        He(a, !1), O && dn(O), !he && (E = R && R.onVnodeBeforeMount) && ge(E, G, u), He(a, !0);
        {
          Y.ce && Y.ce._hasShadowRoot() && Y.ce._injectChildStyle(
            Z,
            a.parent ? a.parent.type : void 0
          );
          const pe = a.subTree = br(a);
          T(
            null,
            pe,
            h,
            y,
            a,
            _,
            m
          ), u.el = pe.el;
        }
        if (F && ie(F, _), !he && (E = R && R.onVnodeMounted)) {
          const pe = u;
          ie(
            () => ge(E, G, pe),
            _
          );
        }
        (u.shapeFlag & 256 || G && xt(G.vnode) && G.vnode.shapeFlag & 256) && a.a && ie(a.a, _), a.isMounted = !0, u = h = y = null;
      }
    };
    a.scope.on();
    const v = a.effect = new Ei(b);
    a.scope.off();
    const g = a.update = v.run.bind(v), C = a.job = v.runIfDirty.bind(v);
    C.i = a, C.id = a.uid, v.scheduler = () => ms(C), He(a, !0), g();
  }, cn = (a, u, h) => {
    u.component = a;
    const y = a.vnode.props;
    a.vnode = u, a.next = null, yo(a, u.props, y, h), So(a, u.children, h), rt(), _r(a), st();
  }, an = (a, u, h, y, _, m, S, b, v = !1) => {
    const g = a && a.children, C = a ? a.shapeFlag : 0, E = u.children, { patchFlag: A, shapeFlag: R } = u;
    if (A > 0) {
      if (A & 128) {
        lr(
          g,
          E,
          h,
          y,
          _,
          m,
          S,
          b,
          v
        );
        return;
      } else if (A & 256) {
        si(
          g,
          E,
          h,
          y,
          _,
          m,
          S,
          b,
          v
        );
        return;
      }
    }
    R & 8 ? (C & 16 && at(g, _, m), E !== g && d(h, E)) : C & 16 ? R & 16 ? lr(
      g,
      E,
      h,
      y,
      _,
      m,
      S,
      b,
      v
    ) : at(g, _, m, !0) : (C & 8 && d(h, ""), R & 16 && le(
      E,
      h,
      y,
      _,
      m,
      S,
      b,
      v
    ));
  }, si = (a, u, h, y, _, m, S, b, v) => {
    a = a || tt, u = u || tt;
    const g = a.length, C = u.length, E = Math.min(g, C);
    let A;
    for (A = 0; A < E; A++) {
      const R = u[A] = v ? Me(u[A]) : be(u[A]);
      T(
        a[A],
        R,
        h,
        null,
        _,
        m,
        S,
        b,
        v
      );
    }
    g > C ? at(
      a,
      _,
      m,
      !0,
      !1,
      E
    ) : le(
      u,
      h,
      y,
      _,
      m,
      S,
      b,
      v,
      E
    );
  }, lr = (a, u, h, y, _, m, S, b, v) => {
    let g = 0;
    const C = u.length;
    let E = a.length - 1, A = C - 1;
    for (; g <= E && g <= A; ) {
      const R = a[g], O = u[g] = v ? Me(u[g]) : be(u[g]);
      if (ht(R, O))
        T(
          R,
          O,
          h,
          null,
          _,
          m,
          S,
          b,
          v
        );
      else
        break;
      g++;
    }
    for (; g <= E && g <= A; ) {
      const R = a[E], O = u[A] = v ? Me(u[A]) : be(u[A]);
      if (ht(R, O))
        T(
          R,
          O,
          h,
          null,
          _,
          m,
          S,
          b,
          v
        );
      else
        break;
      E--, A--;
    }
    if (g > E) {
      if (g <= A) {
        const R = A + 1, O = R < C ? u[R].el : y;
        for (; g <= A; )
          T(
            null,
            u[g] = v ? Me(u[g]) : be(u[g]),
            h,
            O,
            _,
            m,
            S,
            b,
            v
          ), g++;
      }
    } else if (g > A)
      for (; g <= E; )
        Oe(a[g], _, m, !0), g++;
    else {
      const R = g, O = g, F = /* @__PURE__ */ new Map();
      for (g = O; g <= A; g++) {
        const se = u[g] = v ? Me(u[g]) : be(u[g]);
        se.key != null && F.set(se.key, g);
      }
      let G, Y = 0;
      const Z = A - O + 1;
      let he = !1, pe = 0;
      const ft = new Array(Z);
      for (g = 0; g < Z; g++) ft[g] = 0;
      for (g = R; g <= E; g++) {
        const se = a[g];
        if (Y >= Z) {
          Oe(se, _, m, !0);
          continue;
        }
        let me;
        if (se.key != null)
          me = F.get(se.key);
        else
          for (G = O; G <= A; G++)
            if (ft[G - O] === 0 && ht(se, u[G])) {
              me = G;
              break;
            }
        me === void 0 ? Oe(se, _, m, !0) : (ft[me - O] = g + 1, me >= pe ? pe = me : he = !0, T(
          se,
          u[me],
          h,
          null,
          _,
          m,
          S,
          b,
          v
        ), Y++);
      }
      const ur = he ? Ao(ft) : tt;
      for (G = ur.length - 1, g = Z - 1; g >= 0; g--) {
        const se = O + g, me = u[se], fr = u[se + 1], dr = se + 1 < C ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          fr.el || Ns(fr)
        ) : y;
        ft[g] === 0 ? T(
          null,
          me,
          h,
          dr,
          _,
          m,
          S,
          b,
          v
        ) : he && (G < 0 || g !== ur[G] ? Nt(me, h, dr, 2) : G--);
      }
    }
  }, Nt = (a, u, h, y, _ = null) => {
    const { el: m, type: S, transition: b, children: v, shapeFlag: g } = a;
    if (g & 6) {
      Nt(a.component.subTree, u, h, y);
      return;
    }
    if (g & 128) {
      a.suspense.move(u, h, y);
      return;
    }
    if (g & 64) {
      S.move(a, u, h, ut);
      return;
    }
    if (S === Ce) {
      r(m, u, h);
      for (let E = 0; E < v.length; E++)
        Nt(v[E], u, h, y);
      r(a.anchor, u, h);
      return;
    }
    if (S === bn) {
      j(a, u, h);
      return;
    }
    if (y !== 2 && g & 1 && b)
      if (y === 0)
        b.persisted && !m[_n] ? r(m, u, h) : (b.beforeEnter(m), r(m, u, h), ie(() => b.enter(m), _));
      else {
        const { leave: E, delayLeave: A, afterLeave: R } = b, O = () => {
          a.ctx.isUnmounted ? s(m) : r(m, u, h);
        }, F = () => {
          const G = m._isLeaving || !!m[_n];
          m._isLeaving && m[_n](
            !0
            /* cancelled */
          ), b.persisted && !G ? O() : E(m, () => {
            O(), R && R();
          });
        };
        A ? A(m, O, F) : F();
      }
    else
      r(m, u, h);
  }, Oe = (a, u, h, y = !1, _ = !1) => {
    const {
      type: m,
      props: S,
      ref: b,
      children: v,
      dynamicChildren: g,
      shapeFlag: C,
      patchFlag: E,
      dirs: A,
      cacheIndex: R,
      memo: O
    } = a;
    if (E === -2 && (_ = !1), b != null && (rt(), bt(b, null, h, a, !0), st()), R != null && (u.renderCache[R] = void 0), C & 256) {
      u.ctx.deactivate(a);
      return;
    }
    const F = C & 1 && A, G = !xt(a);
    let Y;
    if (G && (Y = S && S.onVnodeBeforeUnmount) && ge(Y, u, a), C & 6)
      oi(a.component, h, y);
    else {
      if (C & 128) {
        a.suspense.unmount(h, y);
        return;
      }
      F && Ue(a, null, u, "beforeUnmount"), C & 64 ? a.type.remove(
        a,
        u,
        h,
        ut,
        y
      ) : g && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !g.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== Ce || E > 0 && E & 64) ? at(
        g,
        u,
        h,
        !1,
        !0
      ) : (m === Ce && E & 384 || !_ && C & 16) && at(v, u, h), y && cr(a);
    }
    const Z = O != null && R == null;
    (G && (Y = S && S.onVnodeUnmounted) || F || Z) && ie(() => {
      Y && ge(Y, u, a), F && Ue(a, null, u, "unmounted"), Z && (a.el = null);
    }, h);
  }, cr = (a) => {
    const { type: u, el: h, anchor: y, transition: _ } = a;
    if (u === Ce) {
      ii(h, y);
      return;
    }
    if (u === bn) {
      H(a);
      return;
    }
    const m = () => {
      s(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (a.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: S, delayLeave: b } = _, v = () => S(h, m);
      b ? b(a.el, m, v) : v();
    } else
      m();
  }, ii = (a, u) => {
    let h;
    for (; a !== u; )
      h = x(a), s(a), a = h;
    s(u);
  }, oi = (a, u, h) => {
    const { bum: y, scope: _, job: m, subTree: S, um: b, m: v, a: g } = a;
    Er(v), Er(g), y && dn(y), _.stop(), m && (m.flags |= 8, Oe(S, a, u, h)), b && ie(b, u), ie(() => {
      a.isUnmounted = !0;
    }, u);
  }, at = (a, u, h, y = !1, _ = !1, m = 0) => {
    for (let S = m; S < a.length; S++)
      Oe(a[S], u, h, y, _);
  }, Lt = (a) => {
    if (a.shapeFlag & 6)
      return Lt(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const u = x(a.anchor || a.el), h = u && u[to];
    return h ? x(h) : u;
  };
  let un = !1;
  const ar = (a, u, h) => {
    let y;
    a == null ? u._vnode && (Oe(u._vnode, null, null, !0), y = u._vnode.component) : T(
      u._vnode || null,
      a,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = a, un || (un = !0, _r(y), _s(), un = !1);
  }, ut = {
    p: T,
    um: Oe,
    m: Nt,
    r: cr,
    mt: Qe,
    mc: le,
    pc: an,
    pbc: Xe,
    n: Lt,
    o: e
  };
  return {
    render: ar,
    hydrate: void 0,
    createApp: co(ar)
  };
}
function vn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function He({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function To(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ps(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (N(r) && N(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Me(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && Ps(o, l)), l.type === on && (l.patchFlag === -1 && (l = s[i] = Me(l)), l.el = o.el), l.type === We && !l.el && (l.el = o.el);
    }
}
function Ao(e) {
  const t = e.slice(), n = [0];
  let r, s, i, o, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const f = e[r];
    if (f !== 0) {
      if (s = n[n.length - 1], e[s] < f) {
        t[r] = s, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < f ? i = l + 1 : o = l;
      f < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function Os(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Os(t);
}
function Er(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ns(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ns(t.subTree) : null;
}
const Ls = (e) => e.__isSuspense;
function Co(e, t) {
  t && t.pendingBranch ? N(e) ? t.effects.push(...e) : t.effects.push(e) : qi(e);
}
const Ce = /* @__PURE__ */ Symbol.for("v-fgt"), on = /* @__PURE__ */ Symbol.for("v-txt"), We = /* @__PURE__ */ Symbol.for("v-cmt"), bn = /* @__PURE__ */ Symbol.for("v-stc"), Ke = [];
let oe = null;
function Mo(e = !1) {
  Ke.push(oe = e ? null : []);
}
function $s() {
  Ke.pop(), oe = Ke[Ke.length - 1] || null;
}
let Ct = 1;
function wr(e, t = !1) {
  Ct += e, e < 0 && oe && t && (oe.hasOnce = !0);
}
function Io(e) {
  return e.dynamicChildren = Ct > 0 ? oe || tt : null, $s(), Ct > 0 && oe && oe.push(e), e;
}
function Ro(e, t, n, r, s, i) {
  return Io(
    W(
      e,
      t,
      n,
      r,
      s,
      i,
      !0
    )
  );
}
function Ds(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ht(e, t) {
  return e.type === t.type && e.key === t.key;
}
const js = ({ key: e }) => e ?? null, Gt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? X(e) || /* @__PURE__ */ ae(e) || k(e) ? { i: Re, r: e, k: t, f: !!n } : e : null);
function W(e, t = null, n = null, r = 0, s = null, i = e === Ce ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && js(t),
    ref: t && Gt(t),
    scopeId: vs,
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
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Re
  };
  return l ? (kt(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= X(n) ? 8 : 16), Ct > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && oe.push(c), c;
}
const ze = Po;
function Po(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === io) && (e = We), Ds(e)) {
    const l = it(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && kt(l, n), Ct > 0 && !i && oe && (l.shapeFlag & 6 ? oe[oe.indexOf(e)] = l : oe.push(l)), l.patchFlag = -2, l;
  }
  if (Uo(e) && (e = e.__vccOpts), t) {
    t = Oo(t);
    let { class: l, style: c } = t;
    l && !X(l) && (t.class = kn(l)), z(c) && (/* @__PURE__ */ qn(c) && !N(c) && (c = Se({}, c)), t.style = Bn(c));
  }
  const o = X(e) ? 1 : Ls(e) ? 128 : rn(e) ? 64 : z(e) ? 4 : k(e) ? 2 : 0;
  return W(
    e,
    t,
    n,
    r,
    s,
    o,
    i,
    !0
  );
}
function Oo(e) {
  return e ? /* @__PURE__ */ qn(e) || As(e) ? Se({}, e) : e : null;
}
function it(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: c } = e, f = t ? No(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && js(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? N(i) ? i.concat(Gt(t)) : [i, Gt(t)] : Gt(t)
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
    patchFlag: t && e.type !== Ce ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && it(e.ssContent),
    ssFallback: e.ssFallback && it(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && er(
    d,
    c.clone(d)
  ), d;
}
function Gs(e = " ", t = 0) {
  return ze(on, null, e, t);
}
function be(e) {
  return e == null || typeof e == "boolean" ? ze(We) : N(e) ? ze(
    Ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ds(e) ? Me(e) : ze(on, null, String(e));
}
function Me(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : it(e);
}
function kt(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (N(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), kt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !As(t) ? t._ctx = Re : s === 3 && Re && (Re.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (k(t)) {
    if (r & 65) {
      kt(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Re }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [Gs(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function No(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = kn([t.class, r.class]));
      else if (s === "style")
        t.style = Bn([t.style, r.style]);
      else if (Qt(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(N(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !qt(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function ge(e, t, n, r = null) {
  Fe(e, t, 7, [
    n,
    r
  ]);
}
const Lo = Ss();
let $o = 0;
function Do(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || Lo, i = {
    uid: $o++,
    vnode: e,
    type: r,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Si(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: vo(r, s),
    emitsOptions: fo(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: J,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: J,
    data: J,
    props: J,
    attrs: J,
    slots: J,
    refs: J,
    setupState: J,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = uo.bind(null, i), e.ce && e.ce(i), i;
}
let Kt = null, zt, Mt;
{
  const e = tn(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  zt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Kt = n
  ), Mt = t(
    "__VUE_SSR_SETTERS__",
    (n) => n
  );
}
const Fs = (e) => {
  const t = Kt;
  return zt(e), e.scope.on(), () => {
    e.scope.off(), zt(t);
  };
}, Tr = () => {
  Kt && Kt.scope.off(), zt(null);
};
function Vs(e) {
  return e.vnode.shapeFlag & 4;
}
function jo(e, t = !1, n = !1) {
  t && Mt(t);
  const { props: r, children: s } = e.vnode, i = Vs(e);
  _o(e, r, i, t), xo(e, s, n || t);
  const o = i ? Go(e, t) : void 0;
  return t && Mt(!1), o;
}
function Go(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, oo);
  const { setup: r } = n;
  if (r) {
    rt();
    const s = e.setupContext = r.length > 1 ? Vo(e) : null, i = Fs(e), o = Pt(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = Wr(o);
    if (st(), i(), (l || e.sp) && !xt(e) && so(e), l) {
      if (o.then(Tr, Tr), t)
        return o.then((c) => {
          Mt(!0);
          try {
            Ar(e, c, t);
          } finally {
            Mt(!1);
          }
        }).catch((c) => {
          nn(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Ar(e, o);
  } else
    Us(e);
}
function Ar(e, t, n) {
  k(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : z(t) && (e.setupState = hs(t)), Us(e);
}
function Us(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Un);
}
const Fo = {
  get(e, t) {
    return q(e, "get", ""), e[t];
  }
};
function Vo(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Fo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function rr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(hs(ki(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in St)
        return St[n](e);
    },
    has(t, n) {
      return n in t || n in St;
    }
  })) : e.proxy;
}
function Uo(e) {
  return k(e) && "__vccOpts" in e;
}
const Ho = "3.5.41";
let $n;
const Cr = typeof window < "u" && window.trustedTypes;
if (Cr)
  try {
    $n = /* @__PURE__ */ Cr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Hs = $n ? (e) => $n.createHTML(e) : (e) => e, Bo = "http://www.w3.org/2000/svg", ko = "http://www.w3.org/1998/Math/MathML", Ae = typeof document < "u" ? document : null, Mr = Ae && /* @__PURE__ */ Ae.createElement("template"), Ko = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Ae.createElementNS(Bo, e) : t === "mathml" ? Ae.createElementNS(ko, e) : n ? Ae.createElement(e, { is: n }) : Ae.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => Ae.createTextNode(e),
  createComment: (e) => Ae.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ae.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, s, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (s && (s === i || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); )
        ;
    else {
      Mr.innerHTML = Hs(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Mr.content;
      if (r === "svg" || r === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
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
}, zo = /* @__PURE__ */ Symbol("_vtc");
function Wo(e, t, n) {
  const r = e[zo];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ir = /* @__PURE__ */ Symbol("_vod"), Jo = /* @__PURE__ */ Symbol("_vsh"), Yo = /* @__PURE__ */ Symbol(""), Xo = /(?:^|;)\s*display\s*:/;
function Zo(e, t, n) {
  const r = e.style, s = X(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (X(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && mt(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && mt(r, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? qo(
        e,
        o,
        !X(t) && t ? t[o] : void 0,
        l
      ) || mt(r, o, l) : mt(r, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = r[Yo];
      o && (n += ";" + o), r.cssText = n, i = Xo.test(n);
    }
  } else t && e.removeAttribute("style");
  Ir in e && (e[Ir] = i ? r.display : "", e[Jo] && (r.display = "none"));
}
const Rr = /\s*!important$/;
function mt(e, t, n) {
  if (N(n))
    n.forEach((r) => mt(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Qo(e, t);
    Rr.test(n) ? e.setProperty(
      Je(r),
      n.replace(Rr, ""),
      "important"
    ) : e[r] = n;
  }
}
const Pr = ["Webkit", "Moz", "ms"], xn = {};
function Qo(e, t) {
  const n = xn[t];
  if (n)
    return n;
  let r = fe(t);
  if (r !== "filter" && r in e)
    return xn[t] = r;
  r = Yr(r);
  for (let s = 0; s < Pr.length; s++) {
    const i = Pr[s] + r;
    if (i in e)
      return xn[t] = i;
  }
  return t;
}
function qo(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && X(r) && n === r;
}
const Or = "http://www.w3.org/1999/xlink";
function Nr(e, t, n, r, s, i = bi(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Or, t.slice(6, t.length)) : e.setAttributeNS(Or, t, n) : n == null || i && !Zr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : xe(n) ? String(n) : n
  );
}
function Lr(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Hs(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Zr(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function el(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function tl(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const $r = /* @__PURE__ */ Symbol("_vei");
function nl(e, t, n, r, s = null) {
  const i = e[$r] || (e[$r] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = il(t);
    if (r) {
      const f = i[t] = cl(
        r,
        s
      );
      el(e, l, f, c);
    } else o && (tl(e, l, o, c), i[t] = void 0);
  }
}
const rl = /(Once|Passive|Capture)$/, sl = /^on:?(?:Once|Passive|Capture)$/;
function il(e) {
  let t, n;
  for (; (n = e.match(rl)) && !sl.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Je(e.slice(2)), t];
}
let Sn = 0;
const ol = /* @__PURE__ */ Promise.resolve(), ll = () => Sn || (ol.then(() => Sn = 0), Sn = Date.now());
function cl(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const s = n.value;
    if (N(s)) {
      const i = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        i.call(r), r._stopped = !0;
      };
      const o = s.slice(), l = [r];
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const f = o[c];
        f && Fe(
          f,
          t,
          5,
          l
        );
      }
    } else
      Fe(
        s,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = ll(), n;
}
const Dr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, al = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Wo(e, r, o) : t === "style" ? Zo(e, n, r) : Qt(t) ? qt(t) || nl(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ul(e, t, r, o)) ? (Lr(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Nr(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (fl(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !X(r))) ? Lr(e, fe(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Nr(e, t, r, o));
};
function ul(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Dr(t) && k(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Dr(t) && X(n) ? !1 : t in e;
}
function fl(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = fe(t);
  return Array.isArray(n) ? n.some((s) => fe(s) === r) : Object.keys(n).some((s) => fe(s) === r);
}
const dl = /* @__PURE__ */ Se({ patchProp: al }, Ko);
let jr;
function hl() {
  return jr || (jr = Eo(dl));
}
const pl = ((...e) => {
  const t = hl().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = gl(r);
    if (!s) return;
    const i = t._component;
    !k(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, ml(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function ml(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function gl(e) {
  return X(e) ? document.querySelector(e) : e;
}
const _l = "tavern_multi_tts_cache", ce = "audio_cache", yl = 1, Gr = 100, Fr = 50 * 1024 * 1024;
function vl(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
async function bl(e) {
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
  if (Object.keys(t).some((s) => /api[_-]?key|authorization|token|secret|password/i.test(s)))
    throw new Error("音频缓存键不得包含密钥字段");
  const r = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(n));
  return [...new Uint8Array(r)].map((s) => s.toString(16).padStart(2, "0")).join("");
}
function xl() {
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
function Sl(e, t) {
  let n = null, r = null, s = 0;
  function i(l) {
    n = l, l.onversionchange = () => {
      l.close(), n === l && (n = null);
    };
    const c = l.onclose;
    return l.onclose = (f) => {
      n === l && (n = null), typeof c == "function" && c.call(l, f);
    }, l;
  }
  async function o() {
    return n || (r ? await r : (r = new Promise((l, c) => {
      const f = e.open(t, yl);
      s += 1, f.onupgradeneeded = () => {
        const d = f.result;
        d.objectStoreNames.contains(ce) || d.createObjectStore(ce, { keyPath: "key" });
      }, f.onsuccess = () => l(i(f.result)), f.onerror = () => c(f.error ?? Error("IndexedDB 打开失败"));
    }).finally(() => {
      r = null;
    }), await r));
  }
  return {
    getDb: o,
    close() {
      n?.close(), n = null;
    },
    getOpenCount() {
      return s;
    }
  };
}
function El(e, t) {
  const n = Sl(e, t);
  async function r() {
    return await n.getDb();
  }
  return {
    async get(s) {
      const i = await r();
      return await new Promise((o, l) => {
        const f = i.transaction(ce, "readonly").objectStore(ce).get(s);
        f.onsuccess = () => o(f.result), f.onerror = () => l(f.error ?? Error("读取缓存失败"));
      });
    },
    async put(s) {
      const i = await r();
      await new Promise((o, l) => {
        const c = i.transaction(ce, "readwrite");
        c.objectStore(ce).put(s), c.oncomplete = () => o(), c.onerror = () => l(c.error ?? Error("写入缓存失败"));
      });
    },
    async delete(s) {
      const i = await r();
      await new Promise((o, l) => {
        const c = i.transaction(ce, "readwrite");
        c.objectStore(ce).delete(s), c.oncomplete = () => o(), c.onerror = () => l(c.error ?? Error("删除缓存失败"));
      });
    },
    async clear() {
      const s = await r();
      await new Promise((i, o) => {
        const l = s.transaction(ce, "readwrite");
        l.objectStore(ce).clear(), l.oncomplete = () => i(), l.onerror = () => o(l.error ?? Error("清空缓存失败"));
      });
    },
    async getAll() {
      const s = await r();
      return await new Promise((i, o) => {
        const c = s.transaction(ce, "readonly").objectStore(ce).openCursor(), f = [];
        c.onsuccess = () => {
          const d = c.result;
          if (!d) {
            i(f);
            return;
          }
          f.push(d.value), d.continue();
        }, c.onerror = () => o(c.error ?? Error("读取缓存记录失败"));
      });
    }
  };
}
async function wl(e) {
  const t = await e.getAll();
  let n = t.reduce((i, o) => i + (o.blob?.size ?? 0), 0);
  if (t.length <= Gr && n <= Fr)
    return;
  const r = [...t].sort((i, o) => i.created_at - o.created_at);
  let s = t.length;
  for (const i of r) {
    if (s <= Gr && n <= Fr)
      break;
    await e.delete(i.key), s -= 1, n -= i.blob?.size ?? 0;
  }
}
function Tl(e) {
  const t = e?.backend === "memory" ? xl() : El(
    e?.indexedDB ?? indexedDB,
    e?.dbName ?? _l
  );
  return {
    async get(n) {
      return (await t.get(n))?.blob ?? null;
    },
    async set(n, r, s = Date.now()) {
      await t.put({
        key: n,
        blob: r,
        created_at: s
      }), await wl(t);
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
        totalBytes: n.reduce((r, s) => r + (s.blob?.size ?? 0), 0)
      };
    },
    async list(n, r) {
      const i = (await t.getAll()).sort((l, c) => c.created_at - l.created_at), o = Math.max(0, (n - 1) * r);
      return {
        items: i.slice(o, o + r).map((l) => ({
          key: l.key,
          size: l.blob?.size ?? 0,
          createdAt: l.created_at
        })),
        total: i.length,
        totalBytes: i.reduce((l, c) => l + (c.blob?.size ?? 0), 0)
      };
    }
  };
}
const sr = Tl({
  backend: typeof indexedDB > "u" ? "memory" : "indexeddb"
});
function Al(e) {
  return sr.get(e);
}
function Cl(e, t) {
  return sr.set(e, t);
}
function Ml() {
  return sr.clear();
}
let Le = null, Ft = null;
function Bs() {
  Le && (Le.pause(), Ft?.());
}
function Il(e, t, n, r, s) {
  const i = URL.createObjectURL(e), o = new Audio(i);
  let l = "paused";
  const c = () => {
    URL.revokeObjectURL(i), Le === o && (Le = null, Ft = null);
  }, f = () => {
    Le && Le !== o && (Le.pause(), Ft?.()), Le = o, Ft = c;
  };
  o.onplay = () => {
    l = "playing", t?.();
  }, o.onpause = () => {
    l === "ended" || l === "error" || (l = "paused", s?.());
  }, o.onended = () => {
    l = "ended", c(), n?.();
  }, o.onerror = (p) => {
    l = "error", c(), r?.(p);
  };
  const d = async () => {
    f();
    try {
      await o.play();
    } catch (p) {
      throw l = "error", c(), r?.(p), p;
    }
  };
  return d().catch(() => {
  }), {
    stop: () => {
      l = "ended", o.pause(), c();
    },
    pause: () => {
      l === "playing" && o.pause();
    },
    resume: d,
    restart: async () => {
      o.currentTime = 0, await d();
    },
    getState: () => l
  };
}
function ks(e) {
  return [...e].map((n) => n.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(n) ? "_" : n).join("").trim() || "audio.mp3";
}
function Rl(e, t, n = "mp3") {
  return ks(`tavern_multi_tts_${e}_${t}.${n}`);
}
function Pl(e, t) {
  const n = ks(t), r = URL.createObjectURL(e), s = URL.revokeObjectURL.bind(URL), i = document.createElement("a");
  i.href = r, i.download = n, document.body.appendChild(i), i.click(), i.remove(), window.setTimeout(() => s(r), 0);
}
const Ol = "Tavern Multi-TTS", En = "tavern_multi_tts", Nl = "0.1.0", wn = "tavern-multi-tts-root", ee = "[Tavern Multi-TTS]", Ll = 2, $l = [
  "speech-02-hd",
  "speech-02-turbo",
  "speech-2.8-hd",
  "speech-2.8-turbo",
  "speech-2.6-hd",
  "speech-2.6-turbo"
], Vr = [
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
`), Ot = {
  enabled: !0,
  testLanguage: "ja",
  model: "speech-2.8-hd",
  prefetchMode: "auto_all",
  injectRole: "system"
};
function Ye(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function K(e, t) {
  return typeof e == "string" ? e : t;
}
function Tn(e, t) {
  return typeof e == "boolean" ? e : t;
}
function _e(e, t, n, r, s = !1) {
  const i = typeof e == "number" ? e : Number(e);
  if (!Number.isFinite(i))
    return r;
  const o = s ? Math.round(i) : i;
  return Math.min(n, Math.max(t, o));
}
function Dl(e) {
  return e === "local_gsvi" ? "local_gsvi" : "minimax";
}
function jl(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Gl(e) {
  return $l.includes(String(e)) ? e : Ot.model;
}
function Fl(e) {
  return e === "manual" || e === "auto_first_n" || e === "auto_all" ? e : Ot.prefetchMode;
}
function Vl(e) {
  return e === "user" || e === "assistant" || e === "system" ? e : Ot.injectRole;
}
function Ul(e) {
  return e === "zh" || e === "en" || e === "ja" ? e : Ot.testLanguage;
}
function Hl(e) {
  return e === "wav" ? "wav" : "mp3";
}
function Ks(e) {
  return Array.isArray(e) ? e.filter(Ye).map((t) => ({
    characterName: K(t.characterName, "").trim(),
    minimaxVoiceId: K(t.minimaxVoiceId, "").trim()
  })).filter((t) => t.characterName || t.minimaxVoiceId) : [];
}
function Bl(e) {
  return Array.isArray(e) ? e.filter(Ye).map((t) => ({
    name: K(t.name, "").trim(),
    mappings: Ks(t.mappings)
  })).filter((t) => t.name) : [];
}
function zs(e) {
  return Array.isArray(e) ? e.filter(Ye).map((t) => ({
    characterName: K(t.characterName, "").trim(),
    gsviVoiceId: K(t.gsviVoiceId, "").trim(),
    gsviLanguage: K(t.gsviLanguage, "").trim(),
    gsviEmotion: K(t.gsviEmotion, "").trim()
  })).filter((t) => t.characterName || t.gsviVoiceId) : [];
}
function kl(e) {
  return Array.isArray(e) ? e.filter(Ye).map((t) => ({
    name: K(t.name, "").trim(),
    mappings: zs(t.mappings)
  })).filter((t) => t.name) : [];
}
function It(e) {
  const t = Ye(e) ? e : {};
  return {
    schemaVersion: Ll,
    enabled: Tn(t.enabled, Ot.enabled),
    ttsEngine: Dl(t.ttsEngine),
    apiKey: K(t.apiKey, ""),
    groupId: K(t.groupId, ""),
    voiceId: K(t.voiceId, ""),
    voiceCatalogSelectedId: K(t.voiceCatalogSelectedId, ""),
    minimaxRegion: jl(t.minimaxRegion),
    testLanguage: Ul(t.testLanguage),
    model: Gl(t.model),
    speed: _e(t.speed, 0.5, 2, 1),
    vol: _e(t.vol, 0, 10, 1),
    requestTimeoutMs: _e(t.requestTimeoutMs, 1e3, 3e4, 15e3, !0),
    maxConcurrency: _e(t.maxConcurrency, 1, 10, 3, !0),
    prefetchMode: Fl(t.prefetchMode),
    prefetchFirstCount: _e(t.prefetchFirstCount, 1, 10, 2, !0),
    localGsviBaseUrl: K(t.localGsviBaseUrl, ""),
    localGsviAuthToken: K(t.localGsviAuthToken, ""),
    localGsviModel: K(t.localGsviModel, ""),
    localGsviFormat: Hl(t.localGsviFormat),
    localGsviUseReferenceAudio: Tn(t.localGsviUseReferenceAudio, !1),
    localGsviCharacter: K(t.localGsviCharacter, ""),
    localGsviLanguage: K(t.localGsviLanguage, "ja"),
    localGsviEmotion: K(t.localGsviEmotion, ""),
    localGsviReferenceText: K(t.localGsviReferenceText, ""),
    localGsviTopK: _e(t.localGsviTopK, 1, 200, 20, !0),
    localGsviTopP: _e(t.localGsviTopP, 0, 1, 0.7),
    localGsviTemperature: _e(t.localGsviTemperature, 0, 2, 0.7),
    localGsviTextLang: K(t.localGsviTextLang, "多语种混合"),
    localGsviTextSplitMethod: K(t.localGsviTextSplitMethod, "按标点符号切"),
    localGsviBatchSize: _e(t.localGsviBatchSize, 1, 8, 1, !0),
    characterMappings: Ks(t.characterMappings),
    characterMappingPresets: Bl(t.characterMappingPresets),
    gsviCharacterMappings: zs(t.gsviCharacterMappings),
    gsviCharacterMappingPresets: kl(t.gsviCharacterMappingPresets),
    injectEnabled: Tn(t.injectEnabled, !0),
    injectDepth: _e(t.injectDepth, 0, 50, 1, !0),
    injectRole: Vl(t.injectRole),
    injectTemplate: K(t.injectTemplate, Vr) || Vr
  };
}
function Ur(e) {
  return Ye(e) ? "ttsEngine" in e || "characterMappings" in e || "localGsviBaseUrl" in e || "injectTemplate" in e || "groupId" in e : !1;
}
function Kl(e) {
  if (Ye(e) && Ur(e.settings))
    return It(e.settings);
  if (!Ur(e))
    throw new Error("导入内容不是可识别的旧 Tavern Multi-TTS 设置");
  return It(e);
}
function zl(e) {
  return {
    engine: e.ttsEngine,
    minimaxMappings: e.characterMappings.filter((t) => t.characterName).length,
    gsviMappings: e.gsviCharacterMappings.filter((t) => t.characterName).length,
    injectEnabled: e.injectEnabled,
    hasMinimaxKey: !!e.apiKey.trim(),
    hasGsviToken: !!e.localGsviAuthToken.trim()
  };
}
function Wl(e, t, n = {}) {
  let r = !1, s = !1, i = null, o = null, l = null;
  function c() {
    return It(e.readRawSettings());
  }
  function f() {
    const T = c();
    return e.writeSettings(T), T;
  }
  function d() {
    if (r)
      return !0;
    const T = document.getElementById(wn);
    T && T.remove();
    const w = e.findSettingsRoot();
    return w ? (l = document.createElement("div"), l.id = wn, l.dataset.tavernMultiTts = "settings", w.appendChild(l), t.mount(l, c()), o = e.onPageHide(() => {
      p({ removeSettings: !1 });
    }), r = !0, n.startRuntime?.(), console.info(`${ee} settings panel mounted`), !0) : !1;
  }
  function p(T) {
    n.stopRuntime?.(), n.stopPlayback?.(), i?.(), i = null, s = !1, o?.(), o = null, t.unmount(), (l ?? document.getElementById(wn))?.remove(), l = null, r = !1, T.removeSettings && e.removeSettings();
  }
  function x() {
    r || s || (f(), !d() && (s = !0, i = e.onAppReady(() => {
      const T = s;
      s = !1;
      const w = i;
      i = null, w?.(), T && (d() || console.error(
        `${ee} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`
      ));
    })));
  }
  function M(T) {
    const w = c();
    w.enabled = T, e.writeSettings(w), n.syncRuntime?.();
  }
  function L(T) {
    const w = c();
    w.injectEnabled = T, e.writeSettings(w), n.syncRuntime?.();
  }
  return {
    activate: x,
    disable() {
      p({ removeSettings: !1 }), console.info(`${ee} disabled`);
    },
    destroy() {
      p({ removeSettings: !1 });
    },
    install() {
      f();
    },
    clean() {
      return p({ removeSettings: !0 }), console.info(`${ee} settings cleaned`), n.clearCache?.();
    },
    delete() {
      return p({ removeSettings: !0 }), console.info(`${ee} deleted`), n.clearCache?.();
    },
    updateSettings(T) {
      e.writeSettings(It(T)), n.syncRuntime?.();
    },
    setEnabled: M,
    setInjectEnabled: L,
    isActive() {
      return r;
    }
  };
}
function Jl() {
  return document.querySelector("#extensions_settings2") ?? document.querySelector("#extensions_settings");
}
class D extends Error {
  code;
  status;
  constructor(t, n, r) {
    super(t), this.name = "TtsRequestError", this.code = n, this.status = r;
  }
}
function Yl(e) {
  return new D(`请求超时（${e}ms），请检查网络或增大超时时间`, "timeout");
}
function Xl() {
  return new D("请求已取消", "cancelled");
}
async function Et(e, t, n, r) {
  const s = new AbortController();
  let i = !1, o = !1, l = null;
  const c = () => {
    o || (o = !0, clearTimeout(d), p?.removeEventListener("abort", x));
  }, f = () => i && !p?.aborted ? Yl(r) : Xl(), d = setTimeout(() => {
    i = !0, s.abort("timeout");
  }, r), p = n.signal, x = () => {
    s.abort(p?.reason ?? "cancelled");
  };
  p && (p.aborted ? s.abort(p.reason ?? "cancelled") : p.addEventListener("abort", x, { once: !0 }));
  const M = () => {
    l?.(f());
  };
  s.signal.addEventListener("abort", M);
  const L = () => new Promise((w, I) => {
    if (s.signal.aborted) {
      I(f());
      return;
    }
    l = I;
  }), T = async (w) => {
    try {
      return await Promise.race([w, L()]);
    } catch (I) {
      throw I instanceof D ? I : s.signal.aborted ? f() : I;
    } finally {
      c(), s.signal.removeEventListener("abort", M);
    }
  };
  try {
    const w = await Promise.race([
      e(t, {
        ...n,
        signal: s.signal
      }),
      L()
    ]);
    return {
      ok: w.ok,
      status: w.status,
      statusText: w.statusText,
      headers: w.headers,
      text: () => T(w.text()),
      async json() {
        const I = await T(w.text());
        try {
          return JSON.parse(I);
        } catch {
          throw new D(
            "服务返回的不是合法 JSON，请检查地址或稍后重试",
            "invalid_json"
          );
        }
      },
      blob: () => T(w.blob()),
      close: c
    };
  } catch (w) {
    throw c(), s.signal.removeEventListener("abort", M), w instanceof D ? w : s.signal.aborted ? f() : w;
  }
}
function Dn(e, t) {
  return `${e.replace(/\/+$/, "")}${t.startsWith("/") ? "" : "/"}${t}`;
}
function Zl(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function Ql(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const ql = /api[_-]?key|authorization|token|secret|cookie|password/i;
function Wt(e) {
  if (typeof e == "string")
    return e.length > 80 ? `${e.slice(0, 80)}…(len=${e.length})` : e;
  if (Array.isArray(e))
    return e.map((n) => Wt(n));
  if (!e || typeof e != "object")
    return e;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (ql.test(n)) {
      t[n] = "[redacted]";
      continue;
    }
    if (n === "text" || n === "input" || n === "referenceText" || n === "reference_text") {
      t[n] = typeof r == "string" ? `[text len=${r.length}]` : "[text]";
      continue;
    }
    t[n] = Wt(r);
  }
  return t;
}
function Ws(e, t, n) {
  if (n === void 0) {
    console.info(`${ee} [${e}] ${t}`);
    return;
  }
  console.info(`${ee} [${e}] ${t}`, Wt(n));
}
function jn(e, t, n) {
  if (n === void 0) {
    console.warn(`${ee} [${e}] ${t}`);
    return;
  }
  console.warn(`${ee} [${e}] ${t}`, Wt(n));
}
const ec = ["v2", "v3", "v4", "v2Pro"];
function Js(e) {
  const t = e.trim();
  if (!t)
    return { modelName: "", version: "" };
  const n = t.lastIndexOf("|");
  return n < 0 ? { modelName: t, version: "" } : {
    modelName: t.slice(0, n).trim(),
    version: t.slice(n + 1).trim()
  };
}
function tc(e) {
  const t = e.trim().toLowerCase();
  return t === "v2pro" ? "v2Pro" : t === "v2" || t === "v3" || t === "v4" ? t : e.trim();
}
function nc(e) {
  const t = e.trim();
  return t ? {
    英文: "英语",
    日文: "日语",
    韩文: "韩语"
  }[t] ?? t : "多语种混合";
}
function rc(e) {
  const t = Js(e.modelId), n = t.modelName.trim(), r = tc(t.version) || "v2Pro";
  return {
    url: Dn(e.baseUrl.trim(), "/v1/audio/speech"),
    modelName: n,
    version: r,
    payload: {
      model: `GSVI-${r}`,
      input: e.text,
      voice: n,
      response_format: e.format,
      speed: e.speed,
      other_params: {
        app_key: "",
        text_lang: nc(e.textLang),
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
function sc(e) {
  if (!e.baseUrl.trim())
    throw new D("请先填写 Local-GSVI 服务地址", "config");
  if (!e.modelId.trim())
    throw new D("请先填写或选择 Local-GSVI 模型（modelName|version）", "config");
  if (!e.language.trim() || !e.emotion.trim())
    throw new D(
      "GSVI 生成要求映射完整：语种(prompt_lang)/情绪(emotion)不能为空",
      "config"
    );
  if (!Js(e.modelId).modelName)
    throw new D("Local-GSVI 模型格式错误，期望 modelName|version", "config");
  if (!e.text.trim())
    throw new D("Local-GSVI 合成文本为空", "config");
}
function ne(e) {
  return typeof e == "object" && e !== null;
}
function ic(e) {
  const t = e.replace(/^data:audio\/[a-zA-Z0-9.+-]+;base64,/i, "").trim();
  return t.length >= 16 && /^[A-Za-z0-9+/=\r\n]+$/.test(t);
}
function Ys(e) {
  return e.trim().match(/^data:audio\/[a-zA-Z0-9.+-]+;base64,(.+)$/i)?.[1] ?? e.trim();
}
function oc(e) {
  if (!ne(e))
    return null;
  const t = e, n = ne(t.data) ? t.data : void 0, r = ne(t.output) ? t.output : void 0, s = [
    t.audio,
    t.data,
    t.audio_base64,
    t.b64,
    n?.audio,
    n?.audio_base64,
    r?.audio,
    r?.audio_base64
  ];
  for (const i of s)
    if (typeof i == "string" && ic(i))
      return Ys(i);
  return null;
}
function lc(e) {
  if (!ne(e))
    return null;
  const t = e, n = ne(t.data) ? t.data : void 0, r = ne(t.output) ? t.output : void 0, s = [
    t.result_path,
    t.audio_url,
    t.url,
    t.audio_file,
    t.path,
    n?.url,
    n?.path,
    r?.url,
    r?.path,
    r?.audio_url
  ];
  for (const i of s)
    if (typeof i == "string" && i.trim())
      return i.trim();
  return null;
}
function cc(e) {
  if (!ne(e))
    return "";
  const t = ne(e.error) ? e.error : void 0, n = ne(e.base_resp) ? e.base_resp : void 0, r = ne(e.data) ? e.data : void 0, s = [
    e.msg,
    e.message,
    e.error,
    t?.msg,
    t?.message,
    n?.status_msg,
    r?.msg,
    r?.message
  ];
  for (const i of s)
    if (typeof i == "string" && i.trim())
      return i.trim();
  return "";
}
function ac(e) {
  const t = atob(Ys(e)), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r += 1)
    n[r] = t.charCodeAt(r);
  return n;
}
function An(e) {
  const t = e?.trim() ?? "";
  return t ? { Authorization: `Bearer ${t}` } : {};
}
function uc(e) {
  const t = fetch;
  async function n(r, s, i, o, l) {
    const c = /^https?:\/\//i.test(s) ? s : Dn(r, s);
    let f = !1;
    try {
      f = Zl(r) === new URL(c).origin;
    } catch {
      f = !1;
    }
    const d = await Et(
      t,
      c,
      {
        method: "GET",
        headers: f ? An(i) : {},
        signal: l
      },
      o
    );
    if (!d.ok)
      throw new D(`下载 GSVI 输出失败：HTTP ${d.status}`, "http", d.status);
    return await d.blob();
  }
  return {
    id: "local_gsvi",
    async checkHealth(r) {
      if (r.engine !== "local_gsvi")
        throw new D("Local-GSVI 适配器收到了错误的引擎请求", "config");
      if (!r.baseUrl.trim())
        return { ok: !1, message: "请先填写 Local-GSVI 服务地址" };
      try {
        const s = await this.listVoices(r);
        return {
          ok: s.length > 0,
          message: s.length > 0 ? `已检测到 ${s.length} 个模型` : "未解析到模型映射"
        };
      } catch (s) {
        return {
          ok: !1,
          message: s instanceof Error ? s.message : String(s)
        };
      }
    },
    async listVoices(r) {
      if (r.engine !== "local_gsvi")
        throw new D("Local-GSVI 适配器收到了错误的引擎请求", "config");
      const s = r.baseUrl.trim();
      if (!s)
        throw new D("请先填写 Local-GSVI 服务地址", "config");
      const i = [];
      for (const o of ec) {
        const l = Dn(s, `/models/${encodeURIComponent(o)}`);
        try {
          const c = await Et(
            t,
            l,
            { method: "GET", headers: An(r.authToken), signal: r.signal },
            r.timeoutMs
          );
          if (!c.ok) {
            jn("local_gsvi", `GET /models/${o} failed`, {
              status: c.status
            }), c.close();
            continue;
          }
          const f = await c.json(), d = ne(f) && ne(f.models) ? f.models : f;
          if (!ne(d))
            continue;
          Object.entries(d).forEach(([p, x]) => {
            !p || !ne(x) || i.push({
              id: `${p}|${o}`,
              name: `${p} [${o}]`,
              source: "gsvi_model",
              language: Object.keys(x).join(",")
            });
          });
        } catch (c) {
          if (c instanceof D && c.code === "cancelled")
            throw c;
          jn("local_gsvi", `GET /models/${o} failed`);
        }
      }
      if (i.length === 0)
        throw new D(
          "未在 /models/{v2|v3|v4|v2Pro} 中解析到模型映射，请检查接口返回结构",
          "missing_audio"
        );
      return i.sort((o, l) => o.name.localeCompare(l.name));
    },
    async synthesize(r) {
      if (r.engine !== "local_gsvi")
        throw new D("Local-GSVI 适配器收到了错误的引擎请求", "config");
      sc(r);
      const s = rc(r), i = {
        "Content-Type": "application/json",
        ...An(r.authToken)
      };
      Ws("local_gsvi", "synthesize", {
        url: s.url,
        model: s.modelName,
        version: s.version,
        text: r.text
      });
      const o = await Et(
        t,
        s.url,
        {
          method: "POST",
          headers: i,
          body: JSON.stringify(s.payload),
          signal: r.signal
        },
        r.timeoutMs
      );
      if (!o.ok)
        throw new D(
          `Local-GSVI 请求失败：HTTP ${o.status}`,
          "http",
          o.status
        );
      if ((o.headers.get("content-type")?.toLowerCase() ?? "").includes("application/json")) {
        const c = await o.json(), f = oc(c);
        if (f)
          return new Blob([Uint8Array.from(ac(f))], {
            type: r.format === "wav" ? "audio/wav" : "audio/mpeg"
          });
        const d = lc(c);
        if (d)
          return await n(
            r.baseUrl.trim(),
            d,
            r.authToken ?? "",
            r.timeoutMs,
            r.signal
          );
        throw new D(
          `Local-GSVI 未返回可用音频：${cc(c) || "JSON 响应中未找到音频"}`,
          "missing_audio"
        );
      }
      return await o.blob();
    }
  };
}
const fc = {
  international: {
    tts: "https://api.minimaxi.com/v1/t2a_v2",
    voice: "https://api.minimaxi.com/v1/get_voice"
  },
  beijing: {
    tts: "https://api-bj.minimaxi.com/v1/t2a_v2",
    voice: "https://api-bj.minimaxi.com/v1/get_voice"
  }
}, dc = /* @__PURE__ */ new Set([408, 409, 429, 500, 502, 503, 504]), hc = /* @__PURE__ */ new Set([1e3, 1001, 1002, 1039]), Hr = 2, pc = "tavern_multi_tts_voice_catalog_v1", mc = 1440 * 60 * 1e3;
function Jt(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function Gn(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Br(e) {
  return fc[Gn(e)];
}
function Xs(e, t) {
  return `${pc}:${e}:${t.trim()}`;
}
function gc(e) {
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
function kr(e) {
  return `Bearer ${Jt(e)}`;
}
function _c(e) {
  const t = e.trim(), n = new Uint8Array(t.length / 2);
  for (let r = 0; r < t.length; r += 2)
    n[r / 2] = Number.parseInt(t.slice(r, r + 2), 16);
  return n;
}
function yc(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r += 1)
    n[r] = t.charCodeAt(r);
  return n;
}
function vc(e) {
  const t = e.trim();
  return /^[0-9a-fA-F]+$/.test(t) && t.length % 2 === 0 ? _c(t) : yc(t);
}
function bc(e, t) {
  const r = `${t ?? ""} ${e}`.toLowerCase(), s = r.includes("japanese") ? "Japanese" : r.includes("english") ? "English" : r.includes("chinese") ? "Chinese" : r.includes("korean") ? "Korean" : r.includes("french") ? "French" : r.includes("german") ? "German" : r.includes("spanish") ? "Spanish" : "Unknown", i = r.includes("female") || r.includes("女") || r.includes("lady") || r.includes("girl") ? "Female" : r.includes("male") || r.includes("男") || r.includes("man") || r.includes("boy") ? "Male" : "Unknown";
  return { language: s, gender: i };
}
function xc(e, t) {
  const n = t.trim();
  if (!n)
    return null;
  try {
    const r = localStorage.getItem(Xs(e, n));
    if (!r)
      return null;
    const s = JSON.parse(r);
    return !s?.expires_at || Date.now() > s.expires_at ? null : s.items ?? null;
  } catch {
    return null;
  }
}
function Sc(e, t, n) {
  const r = t.trim();
  r && localStorage.setItem(
    Xs(e, r),
    JSON.stringify({
      expires_at: Date.now() + mc,
      items: n
    })
  );
}
function Ec(e) {
  const t = Jt(e.apiKey), n = e.groupId.trim(), r = e.voiceId.trim();
  if (!t || !n || !r)
    throw new D("MiniMax 引擎缺少必要配置：API Key / Group ID / Voice ID", "config");
  if (!e.text.trim())
    throw new D("MiniMax 合成文本为空", "config");
}
function wc(e) {
  return typeof e == "object" && e !== null;
}
function Tc(e, t) {
  return dc.has(e) || hc.has(t);
}
function Ac(e) {
  const t = fetch;
  return {
    id: "minimax",
    async checkHealth(n) {
      if (n.engine !== "minimax")
        throw new D("MiniMax 适配器收到了错误的引擎请求", "config");
      if (!Jt(n.apiKey))
        return { ok: !1, message: "请先填写 MiniMax API Key" };
      try {
        return await this.listVoices({ ...n, forceRefresh: !0 }), { ok: !0, message: "MiniMax 服务可用" };
      } catch (s) {
        return { ok: !1, message: s instanceof Error ? s.message : String(s) };
      }
    },
    async listVoices(n) {
      if (n.engine !== "minimax")
        throw new D("MiniMax 适配器收到了错误的引擎请求", "config");
      const r = Jt(n.apiKey);
      if (!r)
        throw new D("请先填写 API Key", "config");
      const s = Gn(n.region);
      if (!n.forceRefresh) {
        const p = xc(s, n.groupId);
        if (p && p.length > 0)
          return p;
      }
      const i = Br(s).voice, o = await Et(
        t,
        i,
        {
          method: "POST",
          headers: {
            Authorization: kr(r),
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ voice_type: "all" }),
          signal: n.signal
        },
        n.timeoutMs
      ), c = await o.json();
      if (!o.ok || (c.base_resp?.status_code ?? 0) !== 0)
        throw new D(
          c.base_resp?.status_msg ?? o.statusText ?? "拉取音色列表失败",
          "http",
          o.status
        );
      const f = [], d = (p, x = []) => {
        x.forEach((M) => {
          const L = bc(M.voice_id, M.voice_name);
          f.push({
            id: M.voice_id,
            name: M.voice_name ?? M.voice_id,
            description: M.description,
            source: p,
            language: L.language,
            gender: L.gender
          });
        });
      };
      return d("system", c.system_voice ?? []), d("voice_cloning", c.voice_cloning ?? []), d("voice_generation", c.voice_generation ?? []), Sc(s, n.groupId, f), f;
    },
    async synthesize(n) {
      if (n.engine !== "minimax")
        throw new D("MiniMax 适配器收到了错误的引擎请求", "config");
      Ec(n);
      const r = gc(n), s = Br(n.region).tts, i = {
        Authorization: kr(n.apiKey),
        "Content-Type": "application/json"
      };
      Ws("minimax", "synthesize", {
        model: r.model,
        voiceId: r.voice_setting.voice_id,
        region: Gn(n.region),
        groupId: n.groupId.trim(),
        text: n.text
      });
      let o = null;
      for (let l = 0; l <= Hr; l += 1) {
        const c = await Et(
          t,
          s,
          {
            method: "POST",
            headers: i,
            body: JSON.stringify(r),
            signal: n.signal
          },
          n.timeoutMs
        ), f = await c.json();
        if (!wc(f))
          throw new D("MiniMax 响应结构无效", "invalid_json");
        const d = f;
        if (!c.ok || (d.base_resp?.status_code ?? 0) !== 0) {
          const M = d.base_resp?.status_code ?? c.status, L = d.base_resp?.status_msg ?? c.statusText ?? "unknown error";
          if (o = `MiniMax 请求失败：code=${M}, msg=${L}`, Tc(c.status, M) && l < Hr) {
            jn("minimax", "retryable synthesize failure", {
              status: c.status,
              attempt: l
            }), await Ql(250 * (l + 1));
            continue;
          }
          throw new D(o, "http", c.status);
        }
        const p = d.data?.audio ?? d.data?.audio_file ?? d.audio_file;
        if (!p)
          throw new D("MiniMax 响应中未找到音频字段", "missing_audio");
        const x = vc(p);
        return new Blob([Uint8Array.from(x)], { type: "audio/mpeg" });
      }
      throw new D(o ?? "MiniMax 请求失败：未知错误", "http");
    }
  };
}
function Cc(e) {
  return e === "local_gsvi" ? uc() : Ac();
}
const Fn = "tavern_multi_tts_say_rule", Mc = 1, Ic = {
  system: 0,
  user: 1,
  assistant: 2
};
function Zs(e) {
  const t = e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.characterMappings, n = [];
  for (const r of t) {
    const s = r.characterName.trim();
    s && !n.includes(s) && n.push(s);
  }
  return n;
}
function Rc(e) {
  const t = Zs(e);
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
function Pc(e) {
  const t = Zs(e).join("、") || "（未配置角色映射）";
  return `${e.injectTemplate.replaceAll("${target_characters}", t).replaceAll("${mapped_characters}", t)}

${Rc(e)}`;
}
function Cn(e, t) {
  return !t.enabled || !t.injectEnabled ? (e.deleteExtensionPrompt(Fn), { applied: !1 }) : (e.setExtensionPrompt(
    Fn,
    Pc(t),
    Mc,
    t.injectDepth,
    !1,
    Ic[t.injectRole]
  ), { applied: !0, depth: t.injectDepth, role: t.injectRole });
}
function Oc(e) {
  e.deleteExtensionPrompt(Fn);
}
function Nc(e) {
  const t = /<say(?:\s+char="([^"]*)")?\s*>([\s\S]*?)<\/say>/gi, n = [];
  let r, s = 0;
  for (; (r = t.exec(e)) !== null; ) {
    const i = r[1]?.trim(), o = r[2].trim();
    o && (n.push({ index: s, text: o, ...i ? { char: i } : {} }), s += 1);
  }
  return n;
}
const Lc = /* @__PURE__ */ new Set([
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
]), Qs = /\(([a-z-]+)\)/gi, $c = /\([a-z-]+\)/gi;
function ir(e) {
  return e.replace(/\s{2,}/g, " ").trim();
}
function Dc(e) {
  return ir(
    e.replace(Qs, (t, n) => {
      const r = String(n).toLowerCase();
      return Lc.has(r) ? `(${r})` : "";
    })
  );
}
function jc(e) {
  return ir(e.replace(Qs, ""));
}
function Gc(e) {
  return ir(e.replace($c, ""));
}
function Fc(e, t) {
  const n = Dc(e);
  return t === "local_gsvi" ? Gc(n) : n;
}
async function Vc(e, t) {
  if (e.length === 0)
    return;
  const n = Math.max(1, Math.min(Math.floor(t), e.length));
  let r = 0;
  const s = Array.from({ length: n }, async () => {
    for (; r < e.length; ) {
      const i = r;
      r += 1, await e[i]();
    }
  });
  await Promise.all(s);
}
const Yt = "data-tavern-multi-tts-rendered", ln = "tavern-multi-tts-segment", Xt = "tavern-multi-tts-fallback-list";
function Uc(e) {
  return document.querySelector(`#chat .mes[mesid="${e}"]`);
}
function Hc(e) {
  return e.querySelector(".mes_text");
}
function qs(e) {
  return e.getAttribute(Yt) === "true" && e.querySelector(`.${ln}`) !== null;
}
function Bc(e = document) {
  e.querySelectorAll(`.${ln}`).forEach((t) => {
    const n = t.querySelector(".tavern-multi-tts-text")?.textContent ?? "";
    t.replaceWith(document.createTextNode(n));
  }), e.querySelectorAll(`.${Xt}`).forEach((t) => t.remove()), e.querySelectorAll(`[${Yt}]`).forEach((t) => {
    t.removeAttribute(Yt);
  });
}
function Te(e, t) {
  e.classList.remove("is-loading", "is-ready", "is-playing", "is-error"), t !== "idle" && e.classList.add(`is-${t}`);
  const n = e.querySelector(".tavern-multi-tts-indicator");
  n && (n.textContent = t === "loading" ? "⏳" : t === "ready" ? "▶" : t === "playing" ? "⏸" : t === "error" ? "⚠" : "▶");
}
function Kr(e) {
  return e.replace(/\s+/g, "").trim();
}
function kc(e, t, n, r) {
  const s = e.splitText(t);
  s.splitText(n), s.replaceWith(r);
}
function Kc(e, t, n, r) {
  const s = [t, n].map((l) => l.trim()).filter(Boolean), i = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let o = i.nextNode();
  for (; o; ) {
    const l = o.parentElement;
    if (l && !l.closest(`.${ln}`) && !l.closest(`.${Xt}`) && !l.closest(".mes_buttons")) {
      const c = o.nodeValue ?? "";
      for (const f of s) {
        const d = c.indexOf(f);
        if (d >= 0)
          return kc(o, d, f.length, r), !0;
        if (Kr(c) === Kr(f))
          return o.replaceWith(r), !0;
      }
    }
    o = i.nextNode();
  }
  return !1;
}
function zc(e, t, n, r, s, i) {
  const o = `${e}:${t.index}`, l = document.createElement("span");
  l.className = ln, l.dataset.tavernMultiTtsKey = o;
  const c = document.createElement("span");
  c.className = "tavern-multi-tts-text", c.textContent = n;
  const f = document.createElement("span");
  f.className = "tavern-multi-tts-indicator", f.textContent = "▶";
  const d = document.createElement("span");
  d.className = "tavern-multi-tts-actions";
  const p = document.createElement("button");
  p.type = "button", p.className = "tavern-multi-tts-action", p.textContent = "下", d.append(p), l.append(c, f, d), Te(l, "idle");
  let x = i.get(o) ?? null;
  const M = async () => {
    Te(l, "loading");
    try {
      const w = await s.ensureAudio(t, n, r);
      return w ? (Te(l, "ready"), w) : (Te(l, "error"), null);
    } catch {
      return Te(l, "error"), null;
    }
  }, L = async () => {
    const w = await M();
    w && (x?.stop(), x = Il(
      w,
      () => Te(l, "playing"),
      () => {
        x = null, i.delete(o), Te(l, "ready");
      },
      () => {
        x = null, i.delete(o), Te(l, "error");
      },
      () => Te(l, "ready")
    ), i.set(o, x));
  }, T = async () => {
    if (!x)
      return;
    const w = x.getState();
    if (w === "playing") {
      x.pause();
      return;
    }
    if (w === "paused")
      try {
        await x.resume();
      } catch {
      }
  };
  return l.addEventListener("click", (w) => {
    const I = w.target;
    if (I?.closest(".tavern-multi-tts-indicator")) {
      T();
      return;
    }
    I?.closest(".tavern-multi-tts-action") || L();
  }), p.addEventListener("click", (w) => {
    w.preventDefault(), w.stopPropagation(), (async () => {
      const I = await M();
      I && s.downloadAudio(I, e, t.index);
    })();
  }), l;
}
function Wc(e, t, n, r, s) {
  if (qs(e))
    return 0;
  const i = Hc(e) ?? e, o = [];
  let l = 0;
  for (const c of n) {
    if (!c.displayText || !c.ttsText)
      continue;
    const f = zc(
      t,
      c,
      c.displayText,
      c.ttsText,
      r,
      s
    );
    Kc(i, c.text, c.displayText, f) ? l += 1 : o.push(f);
  }
  if (i.querySelectorAll(`.${Xt}`).forEach((c) => c.remove()), o.length > 0) {
    const c = document.createElement("div");
    c.className = Xt, o.forEach((f) => c.append(f, document.createTextNode(" "))), i.append(c), l += o.length;
  }
  return l > 0 && e.setAttribute(Yt, "true"), l;
}
function ei(e, t) {
  const n = t?.trim() ?? "";
  if (e.ttsEngine === "local_gsvi") {
    const s = e.gsviCharacterMappings.find(
      (i) => i.characterName.trim() === n
    );
    return {
      engine: "local_gsvi",
      gsviVoiceId: s?.gsviVoiceId?.trim() || e.localGsviModel.trim(),
      gsviLanguage: s?.gsviLanguage?.trim() || e.localGsviLanguage.trim(),
      gsviEmotion: s?.gsviEmotion?.trim() || e.localGsviEmotion.trim()
    };
  }
  return {
    engine: "minimax",
    minimaxVoiceId: e.characterMappings.find(
      (s) => s.characterName.trim() === n
    )?.minimaxVoiceId?.trim() || e.voiceId.trim() || e.voiceCatalogSelectedId.trim()
  };
}
function Jc(e, t, n) {
  const r = ei(e, n);
  return r.engine === "local_gsvi" ? !e.localGsviBaseUrl.trim() || !r.gsviVoiceId || !r.gsviLanguage || !r.gsviEmotion ? null : {
    engine: "local_gsvi",
    text: t,
    baseUrl: e.localGsviBaseUrl,
    authToken: e.localGsviAuthToken || void 0,
    modelId: r.gsviVoiceId,
    language: r.gsviLanguage,
    emotion: r.gsviEmotion,
    format: e.localGsviFormat,
    speed: e.speed,
    topK: e.localGsviTopK,
    topP: e.localGsviTopP,
    temperature: e.localGsviTemperature,
    textLang: e.localGsviTextLang,
    textSplitMethod: e.localGsviTextSplitMethod,
    batchSize: e.localGsviBatchSize,
    timeoutMs: e.requestTimeoutMs
  } : !e.apiKey.trim() || !e.groupId.trim() || !r.minimaxVoiceId ? null : {
    engine: "minimax",
    text: t,
    apiKey: e.apiKey,
    groupId: e.groupId,
    voiceId: r.minimaxVoiceId,
    model: e.model,
    speed: e.speed,
    vol: e.vol,
    region: e.minimaxRegion,
    timeoutMs: e.requestTimeoutMs
  };
}
function Yc(e, t, n) {
  const r = ei(e, n);
  return e.ttsEngine === "local_gsvi" ? {
    text: t,
    engine: "local_gsvi",
    localGsvi: {
      origin: vl(e.localGsviBaseUrl),
      model: r.gsviVoiceId ?? "",
      format: e.localGsviFormat,
      useReferenceAudio: e.localGsviUseReferenceAudio,
      character: e.localGsviCharacter,
      language: r.gsviLanguage ?? "",
      emotion: r.gsviEmotion ?? "",
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
      voiceId: r.minimaxVoiceId ?? "",
      speed: e.speed,
      vol: e.vol,
      format: "mp3"
    }
  };
}
const Xc = 15;
function Zc(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), s = [];
  let i = !1, o = !1;
  function l() {
    return e.getSettings();
  }
  function c() {
    o || !document.querySelector(".minimax-tts-segment") || (o = !0, e.warn?.("检测到旧酒馆助手 Multi-TTS 仍在装饰消息。请只启用其中一个，避免重复生成。"));
  }
  async function f(I, P, j) {
    const H = l(), ue = Jc(H, P, j);
    if (!ue)
      return null;
    const Ve = Yc(H, P, j), re = await bl(Ve), le = r.get(re);
    if (le)
      return le;
    const Ee = await Al(re);
    if (Ee)
      return r.set(re, Ee), Ee;
    const B = await Cc(ue.engine).synthesize(ue);
    return await Cl(re, B), r.set(re, B), B;
  }
  function d(I, P = 0) {
    const j = l();
    if (!j.enabled)
      return;
    const H = e.getChatMessage(I);
    if (!H || H.is_user || H.is_system)
      return;
    const ue = typeof H.mes == "string" ? H.mes : "", Ve = Nc(ue);
    if (Ve.length === 0)
      return;
    const re = e.findMessageElement(I) ?? Uc(I);
    if (!re) {
      P < Xc && window.setTimeout(() => d(I, P + 1), 120);
      return;
    }
    if (qs(re))
      return;
    c();
    const le = Ve.map((B) => ({
      ...B,
      displayText: jc(B.text),
      ttsText: Fc(B.text, j.ttsEngine)
    })), Ee = [], Xe = (B) => j.prefetchMode === "auto_all" ? !0 : j.prefetchMode === "auto_first_n" ? B < j.prefetchFirstCount : !1;
    Wc(
      re,
      I,
      le,
      {
        ensureAudio: async (B, Ze, ct) => {
          const Qe = `${I}:${B.index}`;
          if (n.has(Qe))
            return null;
          n.add(Qe);
          try {
            return await f(B.text, ct, B.char);
          } catch {
            return console.error(`${ee} synthesize failed`), null;
          } finally {
            n.delete(Qe);
          }
        },
        downloadAudio(B, Ze, ct) {
          Pl(B, Rl(Ze, ct));
        }
      },
      t
    ), le.forEach((B, Ze) => {
      Xe(Ze) && B.ttsText && Ee.push(async () => {
        try {
          await f(B.text, B.ttsText, B.char);
        } catch {
        }
      });
    }), Ee.length > 0 && Vc(Ee, j.maxConcurrency);
  }
  function p(...I) {
    const P = Number(I[0]);
    Number.isFinite(P) && window.setTimeout(() => d(P), 0);
  }
  function x() {
    document.querySelectorAll("#chat .mes[mesid]").forEach((I) => {
      const P = Number(I.getAttribute("mesid"));
      Number.isFinite(P) && d(P);
    });
  }
  function M(I, P) {
    e.eventSource.on(I, P), s.push(() => e.eventSource.removeListener(I, P));
  }
  function L() {
    i || (i = !0, Cn(e, l()), M(e.eventNames.messageReceived, p), M(e.eventNames.messageRendered, p), M(e.eventNames.messageUpdated, p), M(e.eventNames.chatChanged, () => {
      Cn(e, l()), x();
    }), x(), console.info(`${ee} chat runtime started`));
  }
  function T() {
    s.splice(0).forEach((I) => I()), t.forEach((I) => I.stop()), t.clear(), n.clear(), r.clear(), Bs(), Oc(e), Bc(document), i = !1, console.info(`${ee} chat runtime stopped`);
  }
  function w() {
    Cn(e, l()), l().enabled && x();
  }
  return { start: L, stop: T, syncFromSettings: w, decorate: d };
}
function De(e) {
  return typeof e == "object" && e !== null;
}
function Qc(e) {
  if (De(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function qc(e) {
  return !De(e) || typeof e.getContext != "function" ? null : e;
}
function ea(e) {
  if (!De(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!De(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = Qc(e.eventSource), n = De(e.eventTypes) ? e.eventTypes : De(e.event_types) ? e.event_types : void 0, r = n ? {
    APP_READY: typeof n.APP_READY == "string" ? n.APP_READY : void 0,
    MESSAGE_RECEIVED: typeof n.MESSAGE_RECEIVED == "string" ? n.MESSAGE_RECEIVED : void 0,
    CHARACTER_MESSAGE_RENDERED: typeof n.CHARACTER_MESSAGE_RENDERED == "string" ? n.CHARACTER_MESSAGE_RENDERED : void 0,
    MESSAGE_UPDATED: typeof n.MESSAGE_UPDATED == "string" ? n.MESSAGE_UPDATED : void 0,
    CHAT_CHANGED: typeof n.CHAT_CHANGED == "string" ? n.CHAT_CHANGED : void 0
  } : void 0;
  return {
    extensionSettings: e.extensionSettings,
    saveSettingsDebounced: e.saveSettingsDebounced,
    eventSource: t,
    eventTypes: r,
    chat: e.chat,
    setExtensionPrompt: typeof e.setExtensionPrompt == "function" ? e.setExtensionPrompt : void 0,
    extensionPrompts: De(e.extensionPrompts) ? e.extensionPrompts : void 0
  };
}
function ti() {
  const e = qc(globalThis.SillyTavern);
  if (!e)
    throw new Error(
      "SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行"
    );
  return ea(e.getContext());
}
function ni() {
  const e = ti();
  return {
    readRawSettings() {
      return e.extensionSettings[En];
    },
    writeSettings(t) {
      e.extensionSettings[En] = t, e.saveSettingsDebounced();
    },
    removeSettings() {
      delete e.extensionSettings[En], e.saveSettingsDebounced();
    },
    findSettingsRoot: Jl,
    onAppReady(t) {
      const n = e.eventTypes?.APP_READY ?? "app_ready", r = e.eventSource;
      if (!r)
        throw new Error("SillyTavern eventSource 缺少 on/removeListener，无法注册 APP_READY 监听");
      return r.on(n, t), () => {
        r.removeListener(n, t);
      };
    },
    onPageHide(t) {
      const n = () => t();
      return window.addEventListener("pagehide", n), () => window.removeEventListener("pagehide", n);
    }
  };
}
function ta(e) {
  return De(e) ? {
    mes: typeof e.mes == "string" ? e.mes : void 0,
    is_user: typeof e.is_user == "boolean" ? e.is_user : void 0,
    is_system: typeof e.is_system == "boolean" ? e.is_system : void 0
  } : null;
}
function na(e) {
  const t = ti();
  if (!t.eventSource)
    throw new Error("SillyTavern eventSource 不可用，无法监听消息事件");
  const n = t.eventSource;
  return {
    getSettings: e,
    getChatMessage(r) {
      return Array.isArray(t.chat) ? ta(t.chat[r]) : null;
    },
    findMessageElement(r) {
      return document.querySelector(`#chat .mes[mesid="${r}"]`);
    },
    setExtensionPrompt(r, s, i, o, l, c) {
      if (!t.setExtensionPrompt)
        throw new Error("SillyTavern.setExtensionPrompt 不可用，无法注入提示词");
      t.setExtensionPrompt(r, s, i, o, l, c);
    },
    deleteExtensionPrompt(r) {
      if (t.extensionPrompts && r in t.extensionPrompts) {
        delete t.extensionPrompts[r];
        return;
      }
      t.setExtensionPrompt?.(r, "", 1, 0, !1, 0);
    },
    eventSource: n,
    eventNames: {
      messageReceived: t.eventTypes?.MESSAGE_RECEIVED ?? "message_received",
      messageRendered: t.eventTypes?.CHARACTER_MESSAGE_RENDERED ?? "character_message_rendered",
      messageUpdated: t.eventTypes?.MESSAGE_UPDATED ?? "message_updated",
      chatChanged: t.eventTypes?.CHAT_CHANGED ?? "chat_id_changed"
    },
    warn(r) {
      const s = globalThis.toastr;
      if (typeof s?.warning == "function") {
        s.warning(r, ee);
        return;
      }
      console.warn(`${ee} ${r}`);
    }
  };
}
const ra = { class: "tavern-multi-tts-settings" }, sa = { class: "inline-drawer" }, ia = { class: "inline-drawer-toggle inline-drawer-header" }, oa = { class: "inline-drawer-content" }, la = { class: "tavern-multi-tts-block" }, ca = { class: "tavern-multi-tts-version" }, aa = { class: "tavern-multi-tts-block" }, ua = { class: "checkbox_label" }, fa = ["checked"], da = { class: "tavern-multi-tts-block" }, ha = { class: "checkbox_label" }, pa = ["checked"], ma = { class: "tavern-multi-tts-block" }, ga = { class: "tavern-multi-tts-import-label" }, _a = { class: "tavern-multi-tts-version" }, ya = /* @__PURE__ */ ro({
  __name: "settings-panel",
  props: {
    displayName: {},
    version: {},
    enabled: { type: Boolean },
    injectEnabled: { type: Boolean },
    onEnabledChange: { type: Function },
    onInjectEnabledChange: { type: Function },
    onImportFile: { type: Function }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Ki("");
    function r(s) {
      const i = s.target, o = i.files?.[0];
      if (!o)
        return;
      const l = new FileReader();
      l.onload = () => {
        n.value = t.onImportFile(String(l.result ?? "")), i.value = "";
      }, l.readAsText(o);
    }
    return (s, i) => (Mo(), Ro("div", ra, [
      W("div", sa, [
        W("div", ia, [
          W("b", null, jt(e.displayName), 1),
          i[2] || (i[2] = W("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        W("div", oa, [
          W("div", la, [
            W("small", ca, "版本 " + jt(e.version), 1)
          ]),
          W("div", aa, [
            W("label", ua, [
              W("input", {
                type: "checkbox",
                checked: e.enabled,
                onChange: i[0] || (i[0] = (o) => e.onEnabledChange(o.target.checked))
              }, null, 40, fa),
              i[3] || (i[3] = W("span", null, "启用 TTS 功能", -1))
            ])
          ]),
          W("div", da, [
            W("label", ha, [
              W("input", {
                type: "checkbox",
                checked: e.injectEnabled,
                onChange: i[1] || (i[1] = (o) => e.onInjectEnabledChange(o.target.checked))
              }, null, 40, pa),
              i[4] || (i[4] = W("span", null, "启用提示词注入", -1))
            ])
          ]),
          W("div", ma, [
            W("label", ga, [
              i[5] || (i[5] = Gs(" 导入旧酒馆助手设置 ", -1)),
              W("input", {
                type: "file",
                accept: "application/json,.json",
                onChange: r
              }, null, 32)
            ]),
            W("small", _a, jt(n.value || "选择从旧脚本导出的 JSON。未知字段会被忽略。"), 1)
          ])
        ])
      ])
    ]));
  }
});
let pt = null, Be = null, Zt = null;
function va() {
  return It(ni().readRawSettings());
}
function ba() {
  return Zt ??= Zc(na(va)), Zt;
}
function xa(e) {
  try {
    const t = JSON.parse(e), n = Kl(t);
    Be?.updateSettings(n);
    const r = zl(n);
    return `已导入：引擎 ${r.engine}，MiniMax 映射 ${r.minimaxMappings} 条，GSVI 映射 ${r.gsviMappings} 条。`;
  } catch (t) {
    return console.error(`${ee} import failed`), t instanceof Error ? t.message : "导入失败";
  }
}
function ot() {
  return Be || (Be = Wl(
    ni(),
    {
      mount(e, t) {
        pt?.unmount(), pt = pl(ya, {
          displayName: Ol,
          version: Nl,
          enabled: t.enabled,
          injectEnabled: t.injectEnabled,
          onEnabledChange(n) {
            Be?.setEnabled(n);
          },
          onInjectEnabledChange(n) {
            Be?.setInjectEnabled(n);
          },
          onImportFile: xa
        }), pt.mount(e);
      },
      unmount() {
        pt?.unmount(), pt = null;
      }
    },
    {
      stopPlayback: Bs,
      clearCache: Ml,
      startRuntime: () => ba().start(),
      stopRuntime: () => Zt?.stop(),
      syncRuntime: () => Zt?.syncFromSettings()
    }
  ), Be);
}
async function lt(e, t) {
  try {
    await t();
  } catch (n) {
    const r = n instanceof Error ? n.message : String(n);
    throw console.error(`${ee} ${e} failed: ${r}`), n;
  }
}
async function Ea() {
  await lt("onInstall", () => ot().install());
}
async function wa() {
  await lt("onActivate", () => ot().activate());
}
async function Ta() {
  await lt("onEnable", () => ot().activate());
}
async function Aa() {
  await lt("onDisable", () => ot().disable());
}
async function Ca() {
  await lt("onClean", () => ot().clean());
}
async function Ma() {
  await lt("onDelete", () => ot().delete());
}
export {
  wa as onActivate,
  Ca as onClean,
  Ma as onDelete,
  Aa as onDisable,
  Ta as onEnable,
  Ea as onInstall
};
//# sourceMappingURL=index.js.map
