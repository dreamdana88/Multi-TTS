// @__NO_SIDE_EFFECTS__
function kn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const J = {}, nt = [], Bn = () => {
}, Yr = () => !1, en = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), tn = (e) => e.startsWith("onUpdate:"), Ce = Object.assign, ci = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ai = Object.prototype.hasOwnProperty, U = (e, t) => ai.call(e, t), N = Array.isArray, vt = (e) => Nt(e) === "[object Map]", ui = (e) => Nt(e) === "[object Set]", gr = (e) => Nt(e) === "[object Date]", k = (e) => typeof e == "function", Z = (e) => typeof e == "string", Ae = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", Xr = (e) => (K(e) || k(e)) && k(e.then) && k(e.catch), Zr = Object.prototype.toString, Nt = (e) => Zr.call(e), fi = (e) => Nt(e).slice(8, -1), di = (e) => Nt(e) === "[object Object]", Kn = (e) => Z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, bt = /* @__PURE__ */ kn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), nn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, pi = /-\w/g, pe = nn(
  (e) => e.replace(pi, (t) => t.slice(1).toUpperCase())
), hi = /\B([A-Z])/g, Qe = nn(
  (e) => e.replace(hi, "-$1").toLowerCase()
), Qr = nn((e) => e.charAt(0).toUpperCase() + e.slice(1)), dn = nn(
  (e) => e ? `on${Qr(e)}` : ""
), Be = (e, t) => !Object.is(e, t), pn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, qr = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, mi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let _r;
const rn = () => _r || (_r = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function zn(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = Z(r) ? vi(r) : zn(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (Z(e) || K(e))
    return e;
}
const gi = /;(?![^(]*\))/g, _i = /:([^]+)/, yi = /\/\*[^]*?\*\//g;
function vi(e) {
  const t = {};
  return e.replace(yi, "").split(gi).forEach((n) => {
    if (n) {
      const r = n.split(_i);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Wn(e) {
  let t = "";
  if (Z(e))
    t = e;
  else if (N(e))
    for (let n = 0; n < e.length; n++) {
      const r = Wn(e[n]);
      r && (t += r + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const bi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xi = /* @__PURE__ */ kn(bi);
function es(e) {
  return !!e || e === "";
}
function Si(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Jn(e[r], t[r]);
  return n;
}
function Jn(e, t) {
  if (e === t) return !0;
  let n = gr(e), r = gr(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Ae(e), r = Ae(t), n || r)
    return e === t;
  if (n = N(e), r = N(t), n || r)
    return n && r ? Si(e, t) : !1;
  if (n = K(e), r = K(t), n || r) {
    if (!n || !r)
      return !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Jn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ts = (e) => !!(e && e.__v_isRef === !0), In = (e) => Z(e) ? e : e == null ? "" : N(e) || K(e) && (e.toString === Zr || !k(e.toString)) ? ts(e) ? In(e.value) : JSON.stringify(e, ns, 2) : String(e), ns = (e, t) => ts(t) ? ns(e, t.value) : vt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[hn(r, i) + " =>"] = s, n),
    {}
  )
} : ui(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => hn(n))
} : Ae(t) ? hn(t) : K(t) && !N(t) && !di(t) ? String(t) : t, hn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ae(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let ne;
class Ei {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ne && (ne.active ? (this.parent = ne, this.index = (ne.scopes || (ne.scopes = [])).push(
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
      const n = ne;
      try {
        return ne = this, t();
      } finally {
        ne = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ne, ne = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ne === this)
        ne = this.prevScope;
      else {
        let t = ne;
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
let H;
const mn = /* @__PURE__ */ new WeakSet();
class wi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ne && (ne.active ? ne.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, mn.has(this) && (mn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ti(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, yr(this), ss(this);
    const t = H, n = he;
    H = this, he = !0;
    try {
      return this.fn();
    } finally {
      is(this), H = t, he = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Zn(t);
      this.deps = this.depsTail = void 0, yr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? mn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Rn(this) && this.run();
  }
  get dirty() {
    return Rn(this);
  }
}
let rs = 0, xt, St;
function Ti(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = St, St = e;
    return;
  }
  e.next = xt, xt = e;
}
function Yn() {
  rs++;
}
function Xn() {
  if (--rs > 0)
    return;
  if (St) {
    let t = St;
    for (St = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; xt; ) {
    let t = xt;
    for (xt = void 0; t; ) {
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
function ss(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function is(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Zn(r), Ci(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function Rn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ai(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ai(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === kt) || (e.globalVersion = kt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Rn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = H, r = he;
  H = e, he = !0;
  try {
    ss(e);
    const s = e.fn(e._value);
    (t.version === 0 || Be(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    H = n, he = r, is(e), e.flags &= -3;
  }
}
function Zn(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Zn(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ci(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let he = !0;
const os = [];
function st() {
  os.push(he), he = !1;
}
function it() {
  const e = os.pop();
  he = e === void 0 ? !0 : e;
}
function yr(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = H;
    H = void 0;
    try {
      t();
    } finally {
      H = n;
    }
  }
}
let kt = 0;
class Mi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ii {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!H || !he || H === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== H)
      n = this.activeLink = new Mi(H, this), H.deps ? (n.prevDep = H.depsTail, H.depsTail.nextDep = n, H.depsTail = n) : H.deps = H.depsTail = n, ls(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = H.depsTail, n.nextDep = void 0, H.depsTail.nextDep = n, H.depsTail = n, H.deps === n && (H.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, kt++, this.notify(t);
  }
  notify(t) {
    Yn();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Xn();
    }
  }
}
function ls(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        ls(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Pn = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ Symbol(
  ""
), On = /* @__PURE__ */ Symbol(
  ""
), Ct = /* @__PURE__ */ Symbol(
  ""
);
function re(e, t, n) {
  if (he && H) {
    let r = Pn.get(e);
    r || Pn.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Ii()), s.map = r, s.key = n), s.track();
  }
}
function Ne(e, t, n, r, s, i) {
  const o = Pn.get(e);
  if (!o) {
    kt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Yn(), t === "clear")
    o.forEach(l);
  else {
    const c = N(e), f = c && Kn(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((h, S) => {
        (S === "length" || S === Ct || !Ae(S) && S >= d) && l(h);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), f && l(o.get(Ct)), t) {
        case "add":
          c ? f && l(o.get("length")) : (l(o.get(Ke)), vt(e) && l(o.get(On)));
          break;
        case "delete":
          c || (l(o.get(Ke)), vt(e) && l(o.get(On)));
          break;
        case "set":
          vt(e) && l(o.get(Ke));
          break;
      }
  }
  Xn();
}
function qe(e) {
  const t = /* @__PURE__ */ j(e);
  return t === e ? t : (re(t, "iterate", Ct), /* @__PURE__ */ Ye(e) ? t : t.map(Xe));
}
function Qn(e) {
  return re(e = /* @__PURE__ */ j(e), "iterate", Ct), e;
}
function we(e, t) {
  return /* @__PURE__ */ Je(e) ? Mt(/* @__PURE__ */ tr(e) ? Xe(t) : t) : Xe(t);
}
const Ri = {
  __proto__: null,
  [Symbol.iterator]() {
    return gn(this, Symbol.iterator, (e) => we(this, e));
  },
  concat(...e) {
    return qe(this).concat(
      ...e.map((t) => N(t) ? qe(t) : t)
    );
  },
  entries() {
    return gn(this, "entries", (e) => (e[1] = we(this, e[1]), e));
  },
  every(e, t) {
    return Me(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Me(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => we(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Me(
      this,
      "find",
      e,
      t,
      (n) => we(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Me(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Me(
      this,
      "findLast",
      e,
      t,
      (n) => we(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Me(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Me(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return _n(this, "includes", e);
  },
  indexOf(...e) {
    return _n(this, "indexOf", e);
  },
  join(e) {
    return qe(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return _n(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Me(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return mt(this, "pop");
  },
  push(...e) {
    return mt(this, "push", e);
  },
  reduce(e, ...t) {
    return vr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return vr(this, "reduceRight", e, t);
  },
  shift() {
    return mt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Me(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return mt(this, "splice", e);
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
    return mt(this, "unshift", e);
  },
  values() {
    return gn(this, "values", (e) => we(this, e));
  }
};
function gn(e, t, n) {
  const r = Qn(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ Ye(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Pi = Array.prototype;
function Me(e, t, n, r, s, i) {
  const o = Qn(e), l = o !== e && !/* @__PURE__ */ Ye(e), c = o[t];
  if (c !== Pi[t]) {
    const h = c.apply(e, i);
    return l ? Xe(h) : h;
  }
  let f = n;
  o !== e && (l ? f = function(h, S) {
    return n.call(this, we(e, h), S, e);
  } : n.length > 2 && (f = function(h, S) {
    return n.call(this, h, S, e);
  }));
  const d = c.call(o, f, r);
  return l && s ? s(d) : d;
}
function vr(e, t, n, r) {
  const s = Qn(e), i = s !== e && !/* @__PURE__ */ Ye(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(f, d, h) {
    return l && (l = !1, f = we(e, f)), n.call(this, f, we(e, d), h, e);
  }) : n.length > 3 && (o = function(f, d, h) {
    return n.call(this, f, d, h, e);
  }));
  const c = s[t](o, ...r);
  return l ? we(e, c) : c;
}
function _n(e, t, n) {
  const r = /* @__PURE__ */ j(e);
  re(r, "iterate", Ct);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ nr(n[0]) ? (n[0] = /* @__PURE__ */ j(n[0]), r[t](...n)) : s;
}
function mt(e, t, n = []) {
  st(), Yn();
  const r = (/* @__PURE__ */ j(e))[t].apply(e, n);
  return Xn(), it(), r;
}
const Oi = /* @__PURE__ */ kn("__proto__,__v_isRef,__isVue"), cs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ae)
);
function Ni(e) {
  Ae(e) || (e = String(e));
  const t = /* @__PURE__ */ j(this);
  return re(t, "has", e), t.hasOwnProperty(e);
}
class as {
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
      return r === (s ? i ? ki : ps : i ? ds : fs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = N(t);
    if (!s) {
      let c;
      if (o && (c = Ri[n]))
        return c;
      if (n === "hasOwnProperty")
        return Ni;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ me(t) ? t : r
    );
    if ((Ae(n) ? cs.has(n) : Oi(n)) || (s || re(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ me(l)) {
      const c = o && Kn(n) ? l : l.value;
      return s && K(c) ? /* @__PURE__ */ Ln(c) : c;
    }
    return K(l) ? s ? /* @__PURE__ */ Ln(l) : /* @__PURE__ */ hs(l) : l;
  }
}
class us extends as {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = N(t) && Kn(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ Je(i);
      if (!/* @__PURE__ */ Ye(r) && !/* @__PURE__ */ Je(r) && (i = /* @__PURE__ */ j(i), r = /* @__PURE__ */ j(r)), !o && /* @__PURE__ */ me(i) && !/* @__PURE__ */ me(r))
        return f || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : U(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ me(t) ? t : s
    );
    return t === /* @__PURE__ */ j(s) && c && (l ? Be(r, i) && Ne(t, "set", n, r) : Ne(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = U(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Ne(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Ae(n) || !cs.has(n)) && re(t, "has", n), r;
  }
  ownKeys(t) {
    return re(
      t,
      "iterate",
      N(t) ? "length" : Ke
    ), Reflect.ownKeys(t);
  }
}
class Li extends as {
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
const Di = /* @__PURE__ */ new us(), $i = /* @__PURE__ */ new Li(), Gi = /* @__PURE__ */ new us(!0);
const Nn = (e) => e, Ft = (e) => Reflect.getPrototypeOf(e);
function ji(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ j(s), o = vt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, f = s[e](...r), d = n ? Nn : t ? Mt : Xe;
    return !t && re(
      i,
      "iterate",
      c ? On : Ke
    ), Ce(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: h, done: S } = f.next();
          return S ? { value: h, done: S } : {
            value: l ? [d(h[0]), d(h[1])] : d(h),
            done: S
          };
        }
      }
    );
  };
}
function Vt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Fi(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ j(i), l = /* @__PURE__ */ j(s);
      e || (Be(s, l) && re(o, "get", s), re(o, "get", l));
      const { has: c } = Ft(o), f = t ? Nn : e ? Mt : Xe;
      if (c.call(o, s))
        return f(i.get(s));
      if (c.call(o, l))
        return f(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && re(/* @__PURE__ */ j(s), "iterate", Ke), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ j(i), l = /* @__PURE__ */ j(s);
      return e || (Be(s, l) && re(o, "has", s), re(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ j(l), f = t ? Nn : e ? Mt : Xe;
      return !e && re(c, "iterate", Ke), l.forEach((d, h) => s.call(i, f(d), f(h), o));
    }
  };
  return Ce(
    n,
    e ? {
      add: Vt("add"),
      set: Vt("set"),
      delete: Vt("delete"),
      clear: Vt("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ j(this), o = Ft(i), l = /* @__PURE__ */ j(s), c = !t && !/* @__PURE__ */ Ye(s) && !/* @__PURE__ */ Je(s) ? l : s;
        return o.has.call(i, c) || Be(s, c) && o.has.call(i, s) || Be(l, c) && o.has.call(i, l) || (i.add(c), Ne(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ Ye(i) && !/* @__PURE__ */ Je(i) && (i = /* @__PURE__ */ j(i));
        const o = /* @__PURE__ */ j(this), { has: l, get: c } = Ft(o);
        let f = l.call(o, s);
        f || (s = /* @__PURE__ */ j(s), f = l.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), f ? Be(i, d) && Ne(o, "set", s, i) : Ne(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ j(this), { has: o, get: l } = Ft(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ j(s), c = o.call(i, s)), l && l.call(i, s);
        const f = i.delete(s);
        return c && Ne(i, "delete", s, void 0), f;
      },
      clear() {
        const s = /* @__PURE__ */ j(this), i = s.size !== 0, o = s.clear();
        return i && Ne(
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
    n[s] = ji(s, e, t);
  }), n;
}
function qn(e, t) {
  const n = Fi(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    U(n, s) && s in r ? n : r,
    s,
    i
  );
}
const Vi = {
  get: /* @__PURE__ */ qn(!1, !1)
}, Ui = {
  get: /* @__PURE__ */ qn(!1, !0)
}, Hi = {
  get: /* @__PURE__ */ qn(!0, !1)
};
const fs = /* @__PURE__ */ new WeakMap(), ds = /* @__PURE__ */ new WeakMap(), ps = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap();
function Bi(e) {
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
function hs(e) {
  return /* @__PURE__ */ Je(e) ? e : er(
    e,
    !1,
    Di,
    Vi,
    fs
  );
}
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  return er(
    e,
    !1,
    Gi,
    Ui,
    ds
  );
}
// @__NO_SIDE_EFFECTS__
function Ln(e) {
  return er(
    e,
    !0,
    $i,
    Hi,
    ps
  );
}
function er(e, t, n, r, s) {
  if (!K(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const o = Bi(fi(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function tr(e) {
  return /* @__PURE__ */ Je(e) ? /* @__PURE__ */ tr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function nr(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function j(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ j(t) : e;
}
function zi(e) {
  return !U(e, "__v_skip") && Object.isExtensible(e) && qr(e, "__v_skip", !0), e;
}
const Xe = (e) => K(e) ? /* @__PURE__ */ hs(e) : e, Mt = (e) => K(e) ? /* @__PURE__ */ Ln(e) : e;
// @__NO_SIDE_EFFECTS__
function me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Wi(e) {
  return /* @__PURE__ */ me(e) ? e.value : e;
}
const Ji = {
  get: (e, t, n) => t === "__v_raw" ? e : Wi(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ me(s) && !/* @__PURE__ */ me(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function ms(e) {
  return /* @__PURE__ */ tr(e) ? e : new Proxy(e, Ji);
}
function Lt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    sn(s, t, n);
  }
}
function Ve(e, t, n, r) {
  if (k(e)) {
    const s = Lt(e, t, n, r);
    return s && Xr(s) && s.catch((i) => {
      sn(i, t, n);
    }), s;
  }
  if (N(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Ve(e[i], t, n, r));
    return s;
  }
}
function sn(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || J;
  if (t) {
    let l = t.parent;
    const c = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let h = 0; h < d.length; h++)
          if (d[h](e, c, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      st(), Lt(i, null, 10, [
        e,
        c,
        f
      ]), it();
      return;
    }
  }
  Yi(e, n, s, r, o);
}
function Yi(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const se = [];
let Ee = -1;
const rt = [];
let Ge = null, tt = 0;
const gs = /* @__PURE__ */ Promise.resolve();
let Bt = null;
function Xi(e) {
  const t = Bt || gs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Zi(e) {
  let t = Ee + 1, n = se.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = se[r], i = It(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function _s(e) {
  if (!(e.flags & 1)) {
    const t = It(e), n = se[se.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= It(n) ? se.push(e) : se.splice(Zi(t), 0, e), e.flags |= 1, ys();
  }
}
function ys() {
  Bt || (Bt = gs.then(bs));
}
function Qi(e) {
  if (!N(e))
    Ge && e.id === -1 ? Ge.splice(tt + 1, 0, e) : e.flags & 1 || (rt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      rt.push(e[t]);
  ys();
}
function br(e, t, n = Ee + 1) {
  for (; n < se.length; n++) {
    const r = se[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      se.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function vs(e) {
  if (rt.length) {
    const t = [...new Set(rt)].sort(
      (n, r) => It(n) - It(r)
    );
    if (rt.length = 0, Ge) {
      for (let n = 0; n < t.length; n++)
        Ge.push(t[n]);
      return;
    }
    for (Ge = t, tt = 0; tt < Ge.length; tt++) {
      const n = Ge[tt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ge = null, tt = 0;
  }
}
const It = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function bs(e) {
  try {
    for (Ee = 0; Ee < se.length; Ee++) {
      const t = se[Ee];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Lt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ee < se.length; Ee++) {
      const t = se[Ee];
      t && (t.flags &= -2);
    }
    Ee = -1, se.length = 0, vs(), Bt = null, (se.length || rt.length) && bs();
  }
}
let Le = null, xs = null;
function Kt(e) {
  const t = Le;
  return Le = e, xs = e && e.type.__scopeId || null, t;
}
function qi(e, t = Le, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Cr(-1);
    const i = Kt(t), o = ze.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = ze.length; c > o; c--) Gs();
      Kt(i), r._d && Cr(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function He(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[r];
    c && (st(), Ve(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), it());
  }
}
const eo = /* @__PURE__ */ Symbol("_vte"), on = (e) => e.__isTeleport, yn = /* @__PURE__ */ Symbol("_leaveCb");
function to(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ze) {
        t = n;
        break;
      }
  }
  return t;
}
function Ss(e) {
  if (!Es(e))
    return on(e.type) && e.children ? to(e.children) : e;
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
function rr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    rr(
      on(n.type) && Ss(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function no(e, t) {
  return k(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function ro(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function xr(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const zt = /* @__PURE__ */ new WeakMap();
function Et(e, t, n, r, s = !1) {
  if (N(e)) {
    e.forEach(
      (w, C) => Et(
        w,
        t && (N(t) ? t[C] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (wt(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Et(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? or(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, f = t && t.r, d = l.refs === J ? l.refs = {} : l.refs, h = l.setupState, S = /* @__PURE__ */ j(h), T = h === J ? Yr : (w) => xr(d, w) ? !1 : U(S, w), L = (w, C) => !(C && xr(d, C));
  if (f != null && f !== c) {
    if (Sr(t), Z(f))
      d[f] = null, T(f) && (h[f] = null);
    else if (/* @__PURE__ */ me(f)) {
      const w = t;
      L(f, w.k) && (f.value = null), w.k && (d[w.k] = null);
    }
  }
  if (k(c))
    Lt(c, l, 12, [o, d]);
  else {
    const w = Z(c), C = /* @__PURE__ */ me(c);
    if (w || C) {
      const P = () => {
        if (e.f) {
          const D = w ? T(c) ? h[c] : d[c] : L() || !e.k ? c.value : d[e.k];
          if (s)
            N(D) && ci(D, i);
          else if (N(D))
            D.includes(i) || D.push(i);
          else if (w)
            d[c] = [i], T(c) && (h[c] = d[c]);
          else {
            const Y = [i];
            L(c, e.k) && (c.value = Y), e.k && (d[e.k] = Y);
          }
        } else w ? (d[c] = o, T(c) && (h[c] = o)) : C && (L(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const D = () => {
          P(), zt.delete(e);
        };
        D.id = -1, zt.set(e, D), ce(D, n);
      } else
        Sr(e), P();
    }
  }
}
function Sr(e) {
  const t = zt.get(e);
  t && (t.flags |= 8, zt.delete(e));
}
rn().requestIdleCallback;
rn().cancelIdleCallback;
const wt = (e) => !!e.type.__asyncLoader, Es = (e) => e.type.__isKeepAlive, so = /* @__PURE__ */ Symbol.for("v-ndc"), Dn = (e) => e ? Us(e) ? or(e) : Dn(e.parent) : null, Tt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Dn(e.parent),
    $root: (e) => Dn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      _s(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Xi.bind(e.proxy)),
    $watch: (e) => Bn
  })
), vn = (e, t) => e !== J && !e.__isScriptSetup && U(e, t), io = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const S = o[t];
      if (S !== void 0)
        switch (S) {
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
        if (vn(r, t))
          return o[t] = 1, r[t];
        if (U(i, t))
          return o[t] = 3, i[t];
        if (n !== J && U(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const f = Tt[t];
    let d, h;
    if (f)
      return t === "$attrs" && re(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== J && U(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      h = c.config.globalProperties, U(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return vn(s, t) ? (s[t] = n, !0) : U(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || vn(t, l) || U(i, l) || U(r, l) || U(Tt, l) || U(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : U(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ws() {
  return {
    app: null,
    config: {
      isNativeTag: Yr,
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
let oo = 0;
function lo(e, t) {
  return function(r, s = null) {
    k(r) || (r = Ce({}, r)), s != null && !K(s) && (s = null);
    const i = ws(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const f = i.app = {
      _uid: oo++,
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
      use(d, ...h) {
        return o.has(d) || (d && k(d.install) ? (o.add(d), d.install(f, ...h)) : k(d) && (o.add(d), d(f, ...h))), f;
      },
      mixin(d) {
        return f;
      },
      component(d, h) {
        return h ? (i.components[d] = h, f) : i.components[d];
      },
      directive(d, h) {
        return h ? (i.directives[d] = h, f) : i.directives[d];
      },
      mount(d, h, S) {
        if (!c) {
          const T = f._ceVNode || We(r, s);
          return T.appContext = i, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(T, d, S), c = !0, f._container = d, d.__vue_app__ = f, or(T.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (Ve(
          l,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(d, h) {
        return i.provides[d] = h, f;
      },
      runWithContext(d) {
        return d();
      }
    };
    return f;
  };
}
const co = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${pe(t)}Modifiers`] || e[`${Qe(t)}Modifiers`];
function ao(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || J;
  let s = n;
  const i = t.startsWith("update:"), o = i && co(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => Z(d) ? d.trim() : d)), o.number && (s = n.map(mi)));
  let l, c = r[l = dn(t)] || // also try camelCase event handler (#2249)
  r[l = dn(pe(t))];
  !c && i && (c = r[l = dn(Qe(t))]), c && Ve(
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
    e.emitted[l] = !0, Ve(
      f,
      e,
      6,
      s
    );
  }
}
function uo(e, t, n = !1) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {};
  return i ? (N(i) ? i.forEach((l) => o[l] = null) : Ce(o, i), K(e) && r.set(e, o), o) : (K(e) && r.set(e, null), null);
}
function ln(e, t) {
  return !e || !en(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, Qe(t)) || U(e, t));
}
function Er(e) {
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
    props: h,
    data: S,
    setupState: T,
    ctx: L,
    inheritAttrs: w
  } = e, C = Kt(e);
  let P, D;
  try {
    if (n.shapeFlag & 4) {
      const R = s || r, F = R;
      P = Te(
        f.call(
          F,
          R,
          d,
          h,
          T,
          S,
          L
        )
      ), D = l;
    } else {
      const R = t;
      P = Te(
        R.length > 1 ? R(
          h,
          { attrs: l, slots: o, emit: c }
        ) : R(
          h,
          null
        )
      ), D = t.props ? l : fo(l);
    }
  } catch (R) {
    ze.length = 0, sn(R, e, 1), P = We(Ze);
  }
  let Y = P;
  if (D && w !== !1) {
    const R = Object.keys(D), { shapeFlag: F } = Y;
    R.length && F & 7 && (i && R.some(tn) && (D = po(
      D,
      i
    )), Y = ot(Y, D, !1, !0));
  }
  if (n.dirs && (Y = ot(Y, null, !1, !0), Y.dirs = Y.dirs ? Y.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const R = on(Y.type) && Ss(Y) || Y;
    rr(R, n.transition);
  }
  return P = Y, Kt(C), P;
}
const fo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || en(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, po = (e, t) => {
  const n = {};
  for (const r in e)
    (!tn(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function ho(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: c } = t, f = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? wr(r, o, f) : !!o;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        const S = d[h];
        if (Ts(o, r, S) && !ln(f, S))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? wr(r, o, f) : !0 : !!o;
  return !1;
}
function wr(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (Ts(t, e, i) && !ln(n, i))
      return !0;
  }
  return !1;
}
function Ts(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && K(r) && K(s) ? !Jn(r, s) : r !== s;
}
function mo({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = r, e = s), s === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const As = {}, Cs = () => Object.create(As), Ms = (e) => Object.getPrototypeOf(e) === As;
function go(e, t, n, r = !1) {
  const s = {}, i = Cs();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Is(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : /* @__PURE__ */ Ki(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function _o(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ j(s), [c] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        let S = d[h];
        if (ln(e.emitsOptions, S))
          continue;
        const T = t[S];
        if (c)
          if (U(i, S))
            T !== i[S] && (i[S] = T, f = !0);
          else {
            const L = pe(S);
            s[L] = $n(
              c,
              l,
              L,
              T,
              e,
              !1
            );
          }
        else
          T !== i[S] && (i[S] = T, f = !0);
      }
    }
  } else {
    Is(e, t, s, i) && (f = !0);
    let d;
    for (const h in l)
      (!t || // for camelCase
      !U(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Qe(h)) === h || !U(t, d))) && (c ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[h] = $n(
        c,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete s[h]);
    if (i !== l)
      for (const h in i)
        (!t || !U(t, h)) && (delete i[h], f = !0);
  }
  f && Ne(e.attrs, "set", "");
}
function Is(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (bt(c))
        continue;
      const f = t[c];
      let d;
      s && U(s, d = pe(c)) ? !i || !i.includes(d) ? n[d] = f : (l || (l = {}))[d] = f : ln(e.emitsOptions, c) || (!(c in r) || f !== r[c]) && (r[c] = f, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ j(n), f = l || J;
    for (let d = 0; d < i.length; d++) {
      const h = i[d];
      n[h] = $n(
        s,
        c,
        h,
        f[h],
        e,
        !U(f, h)
      );
    }
  }
  return o;
}
function $n(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = U(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && k(c)) {
        const { propsDefaults: f } = s;
        if (n in f)
          r = f[n];
        else {
          const d = Vs(s);
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
    ] && (r === "" || r === Qe(n)) && (r = !0));
  }
  return r;
}
function yo(e, t, n = !1) {
  const r = t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  if (!i)
    return K(e) && r.set(e, nt), nt;
  if (N(i))
    for (let f = 0; f < i.length; f++) {
      const d = pe(i[f]);
      Tr(d) && (o[d] = J);
    }
  else if (i)
    for (const f in i) {
      const d = pe(f);
      if (Tr(d)) {
        const h = i[f], S = o[d] = N(h) || k(h) ? { type: h } : Ce({}, h), T = S.type;
        let L = !1, w = !0;
        if (N(T))
          for (let C = 0; C < T.length; ++C) {
            const P = T[C], D = k(P) && P.name;
            if (D === "Boolean") {
              L = !0;
              break;
            } else D === "String" && (w = !1);
          }
        else
          L = k(T) && T.name === "Boolean";
        S[
          0
          /* shouldCast */
        ] = L, S[
          1
          /* shouldCastTrue */
        ] = w, (L || U(S, "default")) && l.push(d);
      }
    }
  const c = [o, l];
  return K(e) && r.set(e, c), c;
}
function Tr(e) {
  return e[0] !== "$" && !bt(e);
}
const sr = (e) => e === "_" || e === "_ctx" || e === "$stable", ir = (e) => N(e) ? e.map(Te) : [Te(e)], vo = (e, t, n) => {
  if (t._n)
    return t;
  const r = qi((...s) => ir(t(...s)), n);
  return r._c = !1, r;
}, Rs = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (sr(s)) continue;
    const i = e[s];
    if (k(i))
      t[s] = vo(s, i, r);
    else if (i != null) {
      const o = ir(i);
      t[s] = () => o;
    }
  }
}, Ps = (e, t) => {
  const n = ir(t);
  e.slots.default = () => n;
}, Os = (e, t, n) => {
  for (const r in t)
    (n || !sr(r)) && (e[r] = t[r]);
}, bo = (e, t, n) => {
  const r = e.slots = Cs();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Os(r, t, n), n && qr(r, "_", s, !0)) : Rs(t, r);
  } else t && Ps(e, t);
}, xo = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = J;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Os(s, t, n) : (i = !t.$stable, Rs(t, s)), o = t;
  } else t && (Ps(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !sr(l) && o[l] == null && delete s[l];
}, ce = Ao;
function So(e) {
  return Eo(e);
}
function Eo(e, t) {
  const n = rn();
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
    parentNode: h,
    nextSibling: S,
    setScopeId: T = Bn,
    insertStaticContent: L
  } = e, w = (a, u, p, y = null, _ = null, m = null, x = void 0, b = null, v = !!u.dynamicChildren) => {
    if (a === u)
      return;
    a && !gt(a, u) && (y = jt(a), $e(a, _, m, !0), a = null), u.patchFlag === -2 && (v = !1, u.dynamicChildren = null);
    const { type: g, ref: M, shapeFlag: E } = u;
    switch (g) {
      case cn:
        C(a, u, p, y);
        break;
      case Ze:
        P(a, u, p, y);
        break;
      case xn:
        a == null && D(u, p, y, x);
        break;
      case Pe:
        ge(
          a,
          u,
          p,
          y,
          _,
          m,
          x,
          b,
          v
        );
        break;
      default:
        E & 1 ? F(
          a,
          u,
          p,
          y,
          _,
          m,
          x,
          b,
          v
        ) : E & 6 ? ut(
          a,
          u,
          p,
          y,
          _,
          m,
          x,
          b,
          v
        ) : (E & 64 || E & 128) && g.process(
          a,
          u,
          p,
          y,
          _,
          m,
          x,
          b,
          v,
          pt
        );
    }
    M != null && _ ? Et(M, a && a.ref, m, u || a, !u) : M == null && a && a.ref != null && Et(a.ref, null, m, a, !0);
  }, C = (a, u, p, y) => {
    if (a == null)
      r(
        u.el = l(u.children),
        p,
        y
      );
    else {
      const _ = u.el = a.el;
      u.children !== a.children && f(_, u.children);
    }
  }, P = (a, u, p, y) => {
    a == null ? r(
      u.el = c(u.children || ""),
      p,
      y
    ) : u.el = a.el;
  }, D = (a, u, p, y) => {
    [a.el, a.anchor] = L(
      a.children,
      u,
      p,
      y,
      a.el,
      a.anchor
    );
  }, Y = ({ el: a, anchor: u }, p, y) => {
    let _;
    for (; a && a !== u; )
      _ = S(a), r(a, p, y), a = _;
    r(u, p, y);
  }, R = ({ el: a, anchor: u }) => {
    let p;
    for (; a && a !== u; )
      p = S(a), s(a), a = p;
    s(u);
  }, F = (a, u, p, y, _, m, x, b, v) => {
    if (u.type === "svg" ? x = "svg" : u.type === "math" && (x = "mathml"), a == null)
      Q(
        u,
        p,
        y,
        _,
        m,
        x,
        b,
        v
      );
    else {
      const g = a.el && a.el._isVueCE ? a.el : null;
      try {
        g && g._beginPatch(), at(
          a,
          u,
          _,
          m,
          x,
          b,
          v
        );
      } finally {
        g && g._endPatch();
      }
    }
  }, Q = (a, u, p, y, _, m, x, b) => {
    let v, g;
    const { props: M, shapeFlag: E, transition: A, dirs: I } = a;
    if (v = a.el = o(
      a.type,
      m,
      M && M.is,
      M
    ), E & 8 ? d(v, a.children) : E & 16 && z(
      a.children,
      v,
      null,
      y,
      _,
      bn(a, m),
      x,
      b
    ), I && He(a, null, y, "created"), te(v, a, a.scopeId, x, y), M) {
      for (const V in M)
        V !== "value" && !bt(V) && i(v, V, null, M[V], m, y);
      "value" in M && i(v, "value", null, M.value, m), (g = M.onVnodeBeforeMount) && xe(g, y, a);
    }
    I && He(a, null, y, "beforeMount");
    const O = wo(_, A);
    O && A.beforeEnter(v), r(v, u, p), ((g = M && M.onVnodeMounted) || O || I) && ce(() => {
      g && xe(g, y, a), O && A.enter(v), I && He(a, null, y, "mounted");
    }, _);
  }, te = (a, u, p, y, _) => {
    if (p && T(a, p), y)
      for (let m = 0; m < y.length; m++)
        T(a, y[m]);
    if (_) {
      let m = _.subTree;
      if (u === m || $s(m.type) && (m.ssContent === u || m.ssFallback === u)) {
        const x = _.vnode;
        te(
          a,
          x,
          x.scopeId,
          x.slotScopeIds,
          _.parent
        );
      }
    }
  }, z = (a, u, p, y, _, m, x, b, v = 0) => {
    for (let g = v; g < a.length; g++) {
      const M = a[g] = b ? Oe(a[g]) : Te(a[g]);
      w(
        null,
        M,
        u,
        p,
        y,
        _,
        m,
        x,
        b
      );
    }
  }, at = (a, u, p, y, _, m, x) => {
    const b = u.el = a.el;
    let { patchFlag: v, dynamicChildren: g, dirs: M } = u;
    v |= a.patchFlag & 16;
    const E = a.props || J, A = u.props || J;
    let I;
    if (p && ke(p, !1), (I = A.onVnodeBeforeUpdate) && xe(I, p, u, a), M && He(u, a, p, "beforeUpdate"), p && ke(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    g && (!a.dynamicChildren || a.dynamicChildren.length !== g.length) && (v = 0, x = !1, g = null), (E.innerHTML && A.innerHTML == null || E.textContent && A.textContent == null) && d(b, ""), g ? ue(
      a.dynamicChildren,
      g,
      b,
      p,
      y,
      bn(u, _),
      m
    ) : x || Ue(
      a,
      u,
      b,
      null,
      p,
      y,
      bn(u, _),
      m,
      !1
    ), v > 0) {
      if (v & 16)
        fe(b, E, A, p, _);
      else if (v & 2 && E.class !== A.class && i(b, "class", null, A.class, _), v & 4 && i(b, "style", E.style, A.style, _), v & 8) {
        const O = u.dynamicProps;
        for (let V = 0; V < O.length; V++) {
          const G = O[V], X = E[G], q = A[G];
          (q !== X || G === "value") && i(b, G, X, q, _, p);
        }
      }
      v & 1 && a.children !== u.children && d(b, u.children);
    } else !x && g == null && fe(b, E, A, p, _);
    ((I = A.onVnodeUpdated) || M) && ce(() => {
      I && xe(I, p, u, a), M && He(u, a, p, "updated");
    }, y);
  }, ue = (a, u, p, y, _, m, x) => {
    for (let b = 0; b < u.length; b++) {
      const v = a[b], g = u[b], M = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === Pe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !gt(v, g) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 198) ? h(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      w(
        v,
        g,
        M,
        null,
        y,
        _,
        m,
        x,
        !0
      );
    }
  }, fe = (a, u, p, y, _) => {
    if (u !== p) {
      if (u !== J)
        for (const m in u)
          !bt(m) && !(m in p) && i(
            a,
            m,
            u[m],
            null,
            _,
            y
          );
      for (const m in p) {
        if (bt(m)) continue;
        const x = p[m], b = u[m];
        x !== b && m !== "value" && i(a, m, b, x, _, y);
      }
      "value" in p && i(a, "value", u.value, p.value, _);
    }
  }, ge = (a, u, p, y, _, m, x, b, v) => {
    const g = u.el = a ? a.el : l(""), M = u.anchor = a ? a.anchor : l("");
    let { patchFlag: E, dynamicChildren: A, slotScopeIds: I } = u;
    I && (b = b ? b.concat(I) : I), a == null ? (r(g, p, y), r(M, p, y), z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      p,
      M,
      _,
      m,
      x,
      b,
      v
    )) : E > 0 && E & 64 && A && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === A.length ? (ue(
      a.dynamicChildren,
      A,
      p,
      _,
      m,
      x,
      b
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || _ && u === _.subTree) && Ns(
      a,
      u,
      !0
      /* shallow */
    )) : Ue(
      a,
      u,
      p,
      M,
      _,
      m,
      x,
      b,
      v
    );
  }, ut = (a, u, p, y, _, m, x, b, v) => {
    u.slotScopeIds = b, a == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      p,
      y,
      x,
      v
    ) : _e(
      u,
      p,
      y,
      _,
      m,
      x,
      v
    ) : un(a, u, v);
  }, _e = (a, u, p, y, _, m, x) => {
    const b = a.component = $o(
      a,
      y,
      _
    );
    if (Es(a) && (b.ctx.renderer = pt), Go(b, !1, x), b.asyncDep) {
      if (_ && _.registerDep(b, W, x), !a.el) {
        const v = b.subTree = We(Ze);
        P(null, v, u, p), a.placeholder = v.el;
      }
    } else
      W(
        b,
        a,
        u,
        p,
        _,
        m,
        x
      );
  }, un = (a, u, p) => {
    const y = u.component = a.component;
    if (ho(a, u, p))
      if (y.asyncDep && !y.asyncResolved) {
        De(y, u, p);
        return;
      } else
        y.next = u, y.update();
    else
      u.el = a.el, y.vnode = u;
  }, W = (a, u, p, y, _, m, x) => {
    const b = () => {
      if (a.isMounted) {
        let { next: E, bu: A, u: I, parent: O, vnode: V } = a;
        {
          const ve = Ls(a);
          if (ve) {
            E && (E.el = V.el, De(a, E, x)), ve.asyncDep.then(() => {
              ce(() => {
                a.isUnmounted || g();
              }, _);
            });
            return;
          }
        }
        let G = E, X;
        ke(a, !1), E ? (E.el = V.el, De(a, E, x)) : E = V, A && pn(A), (X = E.props && E.props.onVnodeBeforeUpdate) && xe(X, O, E, V), ke(a, !0);
        const q = Er(a), ye = a.subTree;
        a.subTree = q, w(
          ye,
          q,
          // parent may have changed if it's in a teleport
          h(ye.el),
          // anchor may have changed if it's in a fragment
          jt(ye),
          a,
          _,
          m
        ), E.el = q.el, G === null && mo(a, q.el), I && ce(I, _), (X = E.props && E.props.onVnodeUpdated) && ce(
          () => xe(X, O, E, V),
          _
        );
      } else {
        let E;
        const { el: A, props: I } = u, { bm: O, m: V, parent: G, root: X, type: q } = a, ye = wt(u);
        ke(a, !1), O && pn(O), !ye && (E = I && I.onVnodeBeforeMount) && xe(E, G, u), ke(a, !0);
        {
          X.ce && X.ce._hasShadowRoot() && X.ce._injectChildStyle(
            q,
            a.parent ? a.parent.type : void 0
          );
          const ve = a.subTree = Er(a);
          w(
            null,
            ve,
            p,
            y,
            a,
            _,
            m
          ), u.el = ve.el;
        }
        if (V && ce(V, _), !ye && (E = I && I.onVnodeMounted)) {
          const ve = u;
          ce(
            () => xe(E, G, ve),
            _
          );
        }
        (u.shapeFlag & 256 || G && wt(G.vnode) && G.vnode.shapeFlag & 256) && a.a && ce(a.a, _), a.isMounted = !0, u = p = y = null;
      }
    };
    a.scope.on();
    const v = a.effect = new wi(b);
    a.scope.off();
    const g = a.update = v.run.bind(v), M = a.job = v.runIfDirty.bind(v);
    M.i = a, M.id = a.uid, v.scheduler = () => _s(M), ke(a, !0), g();
  }, De = (a, u, p) => {
    u.component = a;
    const y = a.vnode.props;
    a.vnode = u, a.next = null, _o(a, u.props, y, p), xo(a, u.children, p), st(), br(a), it();
  }, Ue = (a, u, p, y, _, m, x, b, v = !1) => {
    const g = a && a.children, M = a ? a.shapeFlag : 0, E = u.children, { patchFlag: A, shapeFlag: I } = u;
    if (A > 0) {
      if (A & 128) {
        ur(
          g,
          E,
          p,
          y,
          _,
          m,
          x,
          b,
          v
        );
        return;
      } else if (A & 256) {
        ft(
          g,
          E,
          p,
          y,
          _,
          m,
          x,
          b,
          v
        );
        return;
      }
    }
    I & 8 ? (M & 16 && dt(g, _, m), E !== g && d(p, E)) : M & 16 ? I & 16 ? ur(
      g,
      E,
      p,
      y,
      _,
      m,
      x,
      b,
      v
    ) : dt(g, _, m, !0) : (M & 8 && d(p, ""), I & 16 && z(
      E,
      p,
      y,
      _,
      m,
      x,
      b,
      v
    ));
  }, ft = (a, u, p, y, _, m, x, b, v) => {
    a = a || nt, u = u || nt;
    const g = a.length, M = u.length, E = Math.min(g, M);
    let A;
    for (A = 0; A < E; A++) {
      const I = u[A] = v ? Oe(u[A]) : Te(u[A]);
      w(
        a[A],
        I,
        p,
        null,
        _,
        m,
        x,
        b,
        v
      );
    }
    g > M ? dt(
      a,
      _,
      m,
      !0,
      !1,
      E
    ) : z(
      u,
      p,
      y,
      _,
      m,
      x,
      b,
      v,
      E
    );
  }, ur = (a, u, p, y, _, m, x, b, v) => {
    let g = 0;
    const M = u.length;
    let E = a.length - 1, A = M - 1;
    for (; g <= E && g <= A; ) {
      const I = a[g], O = u[g] = v ? Oe(u[g]) : Te(u[g]);
      if (gt(I, O))
        w(
          I,
          O,
          p,
          null,
          _,
          m,
          x,
          b,
          v
        );
      else
        break;
      g++;
    }
    for (; g <= E && g <= A; ) {
      const I = a[E], O = u[A] = v ? Oe(u[A]) : Te(u[A]);
      if (gt(I, O))
        w(
          I,
          O,
          p,
          null,
          _,
          m,
          x,
          b,
          v
        );
      else
        break;
      E--, A--;
    }
    if (g > E) {
      if (g <= A) {
        const I = A + 1, O = I < M ? u[I].el : y;
        for (; g <= A; )
          w(
            null,
            u[g] = v ? Oe(u[g]) : Te(u[g]),
            p,
            O,
            _,
            m,
            x,
            b,
            v
          ), g++;
      }
    } else if (g > A)
      for (; g <= E; )
        $e(a[g], _, m, !0), g++;
    else {
      const I = g, O = g, V = /* @__PURE__ */ new Map();
      for (g = O; g <= A; g++) {
        const le = u[g] = v ? Oe(u[g]) : Te(u[g]);
        le.key != null && V.set(le.key, g);
      }
      let G, X = 0;
      const q = A - O + 1;
      let ye = !1, ve = 0;
      const ht = new Array(q);
      for (g = 0; g < q; g++) ht[g] = 0;
      for (g = I; g <= E; g++) {
        const le = a[g];
        if (X >= q) {
          $e(le, _, m, !0);
          continue;
        }
        let be;
        if (le.key != null)
          be = V.get(le.key);
        else
          for (G = O; G <= A; G++)
            if (ht[G - O] === 0 && gt(le, u[G])) {
              be = G;
              break;
            }
        be === void 0 ? $e(le, _, m, !0) : (ht[be - O] = g + 1, be >= ve ? ve = be : ye = !0, w(
          le,
          u[be],
          p,
          null,
          _,
          m,
          x,
          b,
          v
        ), X++);
      }
      const pr = ye ? To(ht) : nt;
      for (G = pr.length - 1, g = q - 1; g >= 0; g--) {
        const le = O + g, be = u[le], hr = u[le + 1], mr = le + 1 < M ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          hr.el || Ds(hr)
        ) : y;
        ht[g] === 0 ? w(
          null,
          be,
          p,
          mr,
          _,
          m,
          x,
          b,
          v
        ) : ye && (G < 0 || g !== pr[G] ? Gt(be, p, mr, 2) : G--);
      }
    }
  }, Gt = (a, u, p, y, _ = null) => {
    const { el: m, type: x, transition: b, children: v, shapeFlag: g } = a;
    if (g & 6) {
      Gt(a.component.subTree, u, p, y);
      return;
    }
    if (g & 128) {
      a.suspense.move(u, p, y);
      return;
    }
    if (g & 64) {
      x.move(a, u, p, pt);
      return;
    }
    if (x === Pe) {
      r(m, u, p);
      for (let E = 0; E < v.length; E++)
        Gt(v[E], u, p, y);
      r(a.anchor, u, p);
      return;
    }
    if (x === xn) {
      Y(a, u, p);
      return;
    }
    if (y !== 2 && g & 1 && b)
      if (y === 0)
        b.persisted && !m[yn] ? r(m, u, p) : (b.beforeEnter(m), r(m, u, p), ce(() => b.enter(m), _));
      else {
        const { leave: E, delayLeave: A, afterLeave: I } = b, O = () => {
          a.ctx.isUnmounted ? s(m) : r(m, u, p);
        }, V = () => {
          const G = m._isLeaving || !!m[yn];
          m._isLeaving && m[yn](
            !0
            /* cancelled */
          ), b.persisted && !G ? O() : E(m, () => {
            O(), I && I();
          });
        };
        A ? A(m, O, V) : V();
      }
    else
      r(m, u, p);
  }, $e = (a, u, p, y = !1, _ = !1) => {
    const {
      type: m,
      props: x,
      ref: b,
      children: v,
      dynamicChildren: g,
      shapeFlag: M,
      patchFlag: E,
      dirs: A,
      cacheIndex: I,
      memo: O
    } = a;
    if (E === -2 && (_ = !1), b != null && (st(), Et(b, null, p, a, !0), it()), I != null && (u.renderCache[I] = void 0), M & 256) {
      u.ctx.deactivate(a);
      return;
    }
    const V = M & 1 && A, G = !wt(a);
    let X;
    if (G && (X = x && x.onVnodeBeforeUnmount) && xe(X, u, a), M & 6)
      li(a.component, p, y);
    else {
      if (M & 128) {
        a.suspense.unmount(p, y);
        return;
      }
      V && He(a, null, u, "beforeUnmount"), M & 64 ? a.type.remove(
        a,
        u,
        p,
        pt,
        y
      ) : g && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !g.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== Pe || E > 0 && E & 64) ? dt(
        g,
        u,
        p,
        !1,
        !0
      ) : (m === Pe && E & 384 || !_ && M & 16) && dt(v, u, p), y && fr(a);
    }
    const q = O != null && I == null;
    (G && (X = x && x.onVnodeUnmounted) || V || q) && ce(() => {
      X && xe(X, u, a), V && He(a, null, u, "unmounted"), q && (a.el = null);
    }, p);
  }, fr = (a) => {
    const { type: u, el: p, anchor: y, transition: _ } = a;
    if (u === Pe) {
      oi(p, y);
      return;
    }
    if (u === xn) {
      R(a);
      return;
    }
    const m = () => {
      s(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (a.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: x, delayLeave: b } = _, v = () => x(p, m);
      b ? b(a.el, m, v) : v();
    } else
      m();
  }, oi = (a, u) => {
    let p;
    for (; a !== u; )
      p = S(a), s(a), a = p;
    s(u);
  }, li = (a, u, p) => {
    const { bum: y, scope: _, job: m, subTree: x, um: b, m: v, a: g } = a;
    Ar(v), Ar(g), y && pn(y), _.stop(), m && (m.flags |= 8, $e(x, a, u, p)), b && ce(b, u), ce(() => {
      a.isUnmounted = !0;
    }, u);
  }, dt = (a, u, p, y = !1, _ = !1, m = 0) => {
    for (let x = m; x < a.length; x++)
      $e(a[x], u, p, y, _);
  }, jt = (a) => {
    if (a.shapeFlag & 6)
      return jt(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const u = S(a.anchor || a.el), p = u && u[eo];
    return p ? S(p) : u;
  };
  let fn = !1;
  const dr = (a, u, p) => {
    let y;
    a == null ? u._vnode && ($e(u._vnode, null, null, !0), y = u._vnode.component) : w(
      u._vnode || null,
      a,
      u,
      null,
      null,
      null,
      p
    ), u._vnode = a, fn || (fn = !0, br(y), vs(), fn = !1);
  }, pt = {
    p: w,
    um: $e,
    m: Gt,
    r: fr,
    mt: _e,
    mc: z,
    pc: Ue,
    pbc: ue,
    n: jt,
    o: e
  };
  return {
    render: dr,
    hydrate: void 0,
    createApp: lo(dr)
  };
}
function bn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ke({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ns(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (N(r) && N(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Oe(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && Ns(o, l)), l.type === cn && (l.patchFlag === -1 && (l = s[i] = Oe(l)), l.el = o.el), l.type === Ze && !l.el && (l.el = o.el);
    }
}
function To(e) {
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
function Ls(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ls(t);
}
function Ar(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ds(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ds(t.subTree) : null;
}
const $s = (e) => e.__isSuspense;
function Ao(e, t) {
  t && t.pendingBranch ? N(e) ? t.effects.push(...e) : t.effects.push(e) : Qi(e);
}
const Pe = /* @__PURE__ */ Symbol.for("v-fgt"), cn = /* @__PURE__ */ Symbol.for("v-txt"), Ze = /* @__PURE__ */ Symbol.for("v-cmt"), xn = /* @__PURE__ */ Symbol.for("v-stc"), ze = [];
let ae = null;
function Co(e = !1) {
  ze.push(ae = e ? null : []);
}
function Gs() {
  ze.pop(), ae = ze[ze.length - 1] || null;
}
let Rt = 1;
function Cr(e, t = !1) {
  Rt += e, e < 0 && ae && t && (ae.hasOnce = !0);
}
function Mo(e) {
  return e.dynamicChildren = Rt > 0 ? ae || nt : null, Gs(), Rt > 0 && ae && ae.push(e), e;
}
function Io(e, t, n, r, s, i) {
  return Mo(
    ee(
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
function js(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function gt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Fs = ({ key: e }) => e ?? null, Ut = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Z(e) || /* @__PURE__ */ me(e) || k(e) ? { i: Le, r: e, k: t, f: !!n } : e : null);
function ee(e, t = null, n = null, r = 0, s = null, i = e === Pe ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Fs(t),
    ref: t && Ut(t),
    scopeId: xs,
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
    ctx: Le
  };
  return l ? (Wt(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= Z(n) ? 8 : 16), Rt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ae && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ae.push(c), c;
}
const We = Ro;
function Ro(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === so) && (e = Ze), js(e)) {
    const l = ot(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Wt(l, n), Rt > 0 && !i && ae && (l.shapeFlag & 6 ? ae[ae.indexOf(e)] = l : ae.push(l)), l.patchFlag = -2, l;
  }
  if (Uo(e) && (e = e.__vccOpts), t) {
    t = Po(t);
    let { class: l, style: c } = t;
    l && !Z(l) && (t.class = Wn(l)), K(c) && (/* @__PURE__ */ nr(c) && !N(c) && (c = Ce({}, c)), t.style = zn(c));
  }
  const o = Z(e) ? 1 : $s(e) ? 128 : on(e) ? 64 : K(e) ? 4 : k(e) ? 2 : 0;
  return ee(
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
function Po(e) {
  return e ? /* @__PURE__ */ nr(e) || Ms(e) ? Ce({}, e) : e : null;
}
function ot(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: c } = e, f = t ? No(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Fs(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? N(i) ? i.concat(Ut(t)) : [i, Ut(t)] : Ut(t)
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
    patchFlag: t && e.type !== Pe ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && ot(e.ssContent),
    ssFallback: e.ssFallback && ot(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && rr(
    d,
    c.clone(d)
  ), d;
}
function Oo(e = " ", t = 0) {
  return We(cn, null, e, t);
}
function Te(e) {
  return e == null || typeof e == "boolean" ? We(Ze) : N(e) ? We(
    Pe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : js(e) ? Oe(e) : We(cn, null, String(e));
}
function Oe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ot(e);
}
function Wt(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (N(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Wt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Ms(t) ? t._ctx = Le : s === 3 && Le && (Le.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (k(t)) {
    if (r & 65) {
      Wt(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Le }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [Oo(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function No(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Wn([t.class, r.class]));
      else if (s === "style")
        t.style = zn([t.style, r.style]);
      else if (en(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(N(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !tn(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function xe(e, t, n, r = null) {
  Ve(e, t, 7, [
    n,
    r
  ]);
}
const Lo = ws();
let Do = 0;
function $o(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || Lo, i = {
    uid: Do++,
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
    scope: new Ei(
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
    propsOptions: yo(r, s),
    emitsOptions: uo(r, s),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ao.bind(null, i), e.ce && e.ce(i), i;
}
let Jt = null, Yt, Pt;
{
  const e = rn(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  Yt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Jt = n
  ), Pt = t(
    "__VUE_SSR_SETTERS__",
    (n) => n
  );
}
const Vs = (e) => {
  const t = Jt;
  return Yt(e), e.scope.on(), () => {
    e.scope.off(), Yt(t);
  };
}, Mr = () => {
  Jt && Jt.scope.off(), Yt(null);
};
function Us(e) {
  return e.vnode.shapeFlag & 4;
}
function Go(e, t = !1, n = !1) {
  t && Pt(t);
  const { props: r, children: s } = e.vnode, i = Us(e);
  go(e, r, i, t), bo(e, s, n || t);
  const o = i ? jo(e, t) : void 0;
  return t && Pt(!1), o;
}
function jo(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, io);
  const { setup: r } = n;
  if (r) {
    st();
    const s = e.setupContext = r.length > 1 ? Vo(e) : null, i = Vs(e), o = Lt(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = Xr(o);
    if (it(), i(), (l || e.sp) && !wt(e) && ro(e), l) {
      if (o.then(Mr, Mr), t)
        return o.then((c) => {
          Pt(!0);
          try {
            Ir(e, c, t);
          } finally {
            Pt(!1);
          }
        }).catch((c) => {
          sn(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Ir(e, o);
  } else
    Hs(e);
}
function Ir(e, t, n) {
  k(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) && (e.setupState = ms(t)), Hs(e);
}
function Hs(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Bn);
}
const Fo = {
  get(e, t) {
    return re(e, "get", ""), e[t];
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
function or(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ms(zi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Tt)
        return Tt[n](e);
    },
    has(t, n) {
      return n in t || n in Tt;
    }
  })) : e.proxy;
}
function Uo(e) {
  return k(e) && "__vccOpts" in e;
}
const Ho = "3.5.41";
let Gn;
const Rr = typeof window < "u" && window.trustedTypes;
if (Rr)
  try {
    Gn = /* @__PURE__ */ Rr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ks = Gn ? (e) => Gn.createHTML(e) : (e) => e, ko = "http://www.w3.org/2000/svg", Bo = "http://www.w3.org/1998/Math/MathML", Re = typeof document < "u" ? document : null, Pr = Re && /* @__PURE__ */ Re.createElement("template"), Ko = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Re.createElementNS(ko, e) : t === "mathml" ? Re.createElementNS(Bo, e) : n ? Re.createElement(e, { is: n }) : Re.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => Re.createTextNode(e),
  createComment: (e) => Re.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Re.querySelector(e),
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
      Pr.innerHTML = ks(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Pr.content;
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
const Or = /* @__PURE__ */ Symbol("_vod"), Jo = /* @__PURE__ */ Symbol("_vsh"), Yo = /* @__PURE__ */ Symbol(""), Xo = /(?:^|;)\s*display\s*:/;
function Zo(e, t, n) {
  const r = e.style, s = Z(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (Z(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && yt(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && yt(r, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? qo(
        e,
        o,
        !Z(t) && t ? t[o] : void 0,
        l
      ) || yt(r, o, l) : yt(r, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = r[Yo];
      o && (n += ";" + o), r.cssText = n, i = Xo.test(n);
    }
  } else t && e.removeAttribute("style");
  Or in e && (e[Or] = i ? r.display : "", e[Jo] && (r.display = "none"));
}
const Nr = /\s*!important$/;
function yt(e, t, n) {
  if (N(n))
    n.forEach((r) => yt(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Qo(e, t);
    Nr.test(n) ? e.setProperty(
      Qe(r),
      n.replace(Nr, ""),
      "important"
    ) : e[r] = n;
  }
}
const Lr = ["Webkit", "Moz", "ms"], Sn = {};
function Qo(e, t) {
  const n = Sn[t];
  if (n)
    return n;
  let r = pe(t);
  if (r !== "filter" && r in e)
    return Sn[t] = r;
  r = Qr(r);
  for (let s = 0; s < Lr.length; s++) {
    const i = Lr[s] + r;
    if (i in e)
      return Sn[t] = i;
  }
  return t;
}
function qo(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Z(r) && n === r;
}
const Dr = "http://www.w3.org/1999/xlink";
function $r(e, t, n, r, s, i = xi(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Dr, t.slice(6, t.length)) : e.setAttributeNS(Dr, t, n) : n == null || i && !es(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ae(n) ? String(n) : n
  );
}
function Gr(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ks(n) : n);
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
    l === "boolean" ? n = es(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
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
const jr = /* @__PURE__ */ Symbol("_vei");
function nl(e, t, n, r, s = null) {
  const i = e[jr] || (e[jr] = {}), o = i[t];
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
  return [e[2] === ":" ? e.slice(3) : Qe(e.slice(2)), t];
}
let En = 0;
const ol = /* @__PURE__ */ Promise.resolve(), ll = () => En || (ol.then(() => En = 0), En = Date.now());
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
        f && Ve(
          f,
          t,
          5,
          l
        );
      }
    } else
      Ve(
        s,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = ll(), n;
}
const Fr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, al = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Wo(e, r, o) : t === "style" ? Zo(e, n, r) : en(t) ? tn(t) || nl(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ul(e, t, r, o)) ? (Gr(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && $r(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (fl(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Z(r))) ? Gr(e, pe(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), $r(e, t, r, o));
};
function ul(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Fr(t) && k(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Fr(t) && Z(n) ? !1 : t in e;
}
function fl(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = pe(t);
  return Array.isArray(n) ? n.some((s) => pe(s) === r) : Object.keys(n).some((s) => pe(s) === r);
}
const dl = /* @__PURE__ */ Ce({ patchProp: al }, Ko);
let Vr;
function pl() {
  return Vr || (Vr = So(dl));
}
const hl = ((...e) => {
  const t = pl().createApp(...e), { mount: n } = t;
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
  return Z(e) ? document.querySelector(e) : e;
}
const _l = "tavern_multi_tts_cache", de = "audio_cache", yl = 1, Ur = 100, Hr = 50 * 1024 * 1024;
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
        d.objectStoreNames.contains(de) || d.createObjectStore(de, { keyPath: "key" });
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
        const f = i.transaction(de, "readonly").objectStore(de).get(s);
        f.onsuccess = () => o(f.result), f.onerror = () => l(f.error ?? Error("读取缓存失败"));
      });
    },
    async put(s) {
      const i = await r();
      await new Promise((o, l) => {
        const c = i.transaction(de, "readwrite");
        c.objectStore(de).put(s), c.oncomplete = () => o(), c.onerror = () => l(c.error ?? Error("写入缓存失败"));
      });
    },
    async delete(s) {
      const i = await r();
      await new Promise((o, l) => {
        const c = i.transaction(de, "readwrite");
        c.objectStore(de).delete(s), c.oncomplete = () => o(), c.onerror = () => l(c.error ?? Error("删除缓存失败"));
      });
    },
    async clear() {
      const s = await r();
      await new Promise((i, o) => {
        const l = s.transaction(de, "readwrite");
        l.objectStore(de).clear(), l.oncomplete = () => i(), l.onerror = () => o(l.error ?? Error("清空缓存失败"));
      });
    },
    async getAll() {
      const s = await r();
      return await new Promise((i, o) => {
        const c = s.transaction(de, "readonly").objectStore(de).openCursor(), f = [];
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
  if (t.length <= Ur && n <= Hr)
    return;
  const r = [...t].sort((i, o) => i.created_at - o.created_at);
  let s = t.length;
  for (const i of r) {
    if (s <= Ur && n <= Hr)
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
const lr = Tl({
  backend: typeof indexedDB > "u" ? "memory" : "indexeddb"
});
function Al(e) {
  return lr.get(e);
}
function Cl(e, t) {
  return lr.set(e, t);
}
function Ml() {
  return lr.clear();
}
let je = null, Ht = null;
function Bs() {
  je && (je.pause(), Ht?.());
}
function Il(e, t, n, r, s) {
  const i = URL.createObjectURL(e), o = new Audio(i);
  let l = "paused";
  const c = () => {
    URL.revokeObjectURL(i), je === o && (je = null, Ht = null);
  }, f = () => {
    je && je !== o && (je.pause(), Ht?.()), je = o, Ht = c;
  };
  o.onplay = () => {
    l = "playing", t?.();
  }, o.onpause = () => {
    l === "ended" || l === "error" || (l = "paused", s?.());
  }, o.onended = () => {
    l = "ended", c(), n?.();
  }, o.onerror = (h) => {
    l = "error", c(), r?.(h);
  };
  const d = async () => {
    f();
    try {
      await o.play();
    } catch (h) {
      throw l = "error", c(), r?.(h), h;
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
function Ks(e) {
  return [...e].map((n) => n.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(n) ? "_" : n).join("").trim() || "audio.mp3";
}
function Rl(e, t, n = "mp3") {
  return Ks(`tavern_multi_tts_${e}_${t}.${n}`);
}
function Pl(e, t) {
  const n = Ks(t), r = URL.createObjectURL(e), s = URL.revokeObjectURL.bind(URL), i = document.createElement("a");
  i.href = r, i.download = n, document.body.appendChild(i), i.click(), i.remove(), window.setTimeout(() => s(r), 0);
}
const Ol = "Tavern Multi-TTS", wn = "tavern_multi_tts", Nl = "0.1.0", Tn = "tavern-multi-tts-root", ie = "[Tavern Multi-TTS]", Ll = 2, Dl = [
  "speech-02-hd",
  "speech-02-turbo",
  "speech-2.8-hd",
  "speech-2.8-turbo",
  "speech-2.6-hd",
  "speech-2.6-turbo"
], kr = [
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
`), Dt = {
  enabled: !0,
  testLanguage: "ja",
  model: "speech-2.8-hd",
  prefetchMode: "auto_all",
  injectRole: "system"
};
function $t(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function B(e, t) {
  return typeof e == "string" ? e : t;
}
function An(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Se(e, t, n, r, s = !1) {
  const i = typeof e == "number" ? e : Number(e);
  if (!Number.isFinite(i))
    return r;
  const o = s ? Math.round(i) : i;
  return Math.min(n, Math.max(t, o));
}
function $l(e) {
  return e === "local_gsvi" ? "local_gsvi" : "minimax";
}
function Gl(e) {
  return e === "beijing" ? "beijing" : "international";
}
function jl(e) {
  return Dl.includes(String(e)) ? e : Dt.model;
}
function Fl(e) {
  return e === "manual" || e === "auto_first_n" || e === "auto_all" ? e : Dt.prefetchMode;
}
function Vl(e) {
  return e === "user" || e === "assistant" || e === "system" ? e : Dt.injectRole;
}
function Ul(e) {
  return e === "zh" || e === "en" || e === "ja" ? e : Dt.testLanguage;
}
function Hl(e) {
  return e === "wav" ? "wav" : "mp3";
}
function zs(e) {
  return Array.isArray(e) ? e.filter($t).map((t) => ({
    characterName: B(t.characterName, "").trim(),
    minimaxVoiceId: B(t.minimaxVoiceId, "").trim()
  })).filter((t) => t.characterName || t.minimaxVoiceId) : [];
}
function kl(e) {
  return Array.isArray(e) ? e.filter($t).map((t) => ({
    name: B(t.name, "").trim(),
    mappings: zs(t.mappings)
  })).filter((t) => t.name) : [];
}
function Ws(e) {
  return Array.isArray(e) ? e.filter($t).map((t) => ({
    characterName: B(t.characterName, "").trim(),
    gsviVoiceId: B(t.gsviVoiceId, "").trim(),
    gsviLanguage: B(t.gsviLanguage, "").trim(),
    gsviEmotion: B(t.gsviEmotion, "").trim()
  })).filter((t) => t.characterName || t.gsviVoiceId) : [];
}
function Bl(e) {
  return Array.isArray(e) ? e.filter($t).map((t) => ({
    name: B(t.name, "").trim(),
    mappings: Ws(t.mappings)
  })).filter((t) => t.name) : [];
}
function Js(e) {
  const t = $t(e) ? e : {};
  return {
    schemaVersion: Ll,
    enabled: An(t.enabled, Dt.enabled),
    ttsEngine: $l(t.ttsEngine),
    apiKey: B(t.apiKey, ""),
    groupId: B(t.groupId, ""),
    voiceId: B(t.voiceId, ""),
    voiceCatalogSelectedId: B(t.voiceCatalogSelectedId, ""),
    minimaxRegion: Gl(t.minimaxRegion),
    testLanguage: Ul(t.testLanguage),
    model: jl(t.model),
    speed: Se(t.speed, 0.5, 2, 1),
    vol: Se(t.vol, 0, 10, 1),
    requestTimeoutMs: Se(t.requestTimeoutMs, 1e3, 3e4, 15e3, !0),
    maxConcurrency: Se(t.maxConcurrency, 1, 10, 3, !0),
    prefetchMode: Fl(t.prefetchMode),
    prefetchFirstCount: Se(t.prefetchFirstCount, 1, 10, 2, !0),
    localGsviBaseUrl: B(t.localGsviBaseUrl, ""),
    localGsviAuthToken: B(t.localGsviAuthToken, ""),
    localGsviModel: B(t.localGsviModel, ""),
    localGsviFormat: Hl(t.localGsviFormat),
    localGsviUseReferenceAudio: An(t.localGsviUseReferenceAudio, !1),
    localGsviCharacter: B(t.localGsviCharacter, ""),
    localGsviLanguage: B(t.localGsviLanguage, "ja"),
    localGsviEmotion: B(t.localGsviEmotion, ""),
    localGsviReferenceText: B(t.localGsviReferenceText, ""),
    localGsviTopK: Se(t.localGsviTopK, 1, 200, 20, !0),
    localGsviTopP: Se(t.localGsviTopP, 0, 1, 0.7),
    localGsviTemperature: Se(t.localGsviTemperature, 0, 2, 0.7),
    localGsviTextLang: B(t.localGsviTextLang, "多语种混合"),
    localGsviTextSplitMethod: B(t.localGsviTextSplitMethod, "按标点符号切"),
    localGsviBatchSize: Se(t.localGsviBatchSize, 1, 8, 1, !0),
    characterMappings: zs(t.characterMappings),
    characterMappingPresets: kl(t.characterMappingPresets),
    gsviCharacterMappings: Ws(t.gsviCharacterMappings),
    gsviCharacterMappingPresets: Bl(t.gsviCharacterMappingPresets),
    injectEnabled: An(t.injectEnabled, !0),
    injectDepth: Se(t.injectDepth, 0, 50, 1, !0),
    injectRole: Vl(t.injectRole),
    injectTemplate: B(t.injectTemplate, kr) || kr
  };
}
function Kl(e, t, n = {}) {
  let r = !1, s = !1, i = null, o = null, l = null;
  function c() {
    return Js(e.readRawSettings());
  }
  function f() {
    const w = c();
    return e.writeSettings(w), w;
  }
  function d() {
    if (r)
      return !0;
    const w = document.getElementById(Tn);
    w && w.remove();
    const C = e.findSettingsRoot();
    return C ? (l = document.createElement("div"), l.id = Tn, l.dataset.tavernMultiTts = "settings", C.appendChild(l), t.mount(l, c()), o = e.onPageHide(() => {
      h({ removeSettings: !1 });
    }), r = !0, n.startRuntime?.(), console.info(`${ie} settings panel mounted`), !0) : !1;
  }
  function h(w) {
    n.stopRuntime?.(), n.stopPlayback?.(), i?.(), i = null, s = !1, o?.(), o = null, t.unmount(), (l ?? document.getElementById(Tn))?.remove(), l = null, r = !1, w.removeSettings && e.removeSettings();
  }
  function S() {
    r || s || (f(), !d() && (s = !0, i = e.onAppReady(() => {
      const w = s;
      s = !1;
      const C = i;
      i = null, C?.(), w && (d() || console.error(
        `${ie} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`
      ));
    })));
  }
  function T(w) {
    const C = c();
    C.enabled = w, e.writeSettings(C), n.syncRuntime?.();
  }
  function L(w) {
    const C = c();
    C.injectEnabled = w, e.writeSettings(C), n.syncRuntime?.();
  }
  return {
    activate: S,
    disable() {
      h({ removeSettings: !1 }), console.info(`${ie} disabled`);
    },
    destroy() {
      h({ removeSettings: !1 });
    },
    install() {
      f();
    },
    clean() {
      return h({ removeSettings: !0 }), console.info(`${ie} settings cleaned`), n.clearCache?.();
    },
    delete() {
      return h({ removeSettings: !0 }), console.info(`${ie} deleted`), n.clearCache?.();
    },
    setEnabled: T,
    setInjectEnabled: L,
    isActive() {
      return r;
    }
  };
}
function zl() {
  return document.querySelector("#extensions_settings2") ?? document.querySelector("#extensions_settings");
}
class $ extends Error {
  code;
  status;
  constructor(t, n, r) {
    super(t), this.name = "TtsRequestError", this.code = n, this.status = r;
  }
}
function Wl(e) {
  return new $(`请求超时（${e}ms），请检查网络或增大超时时间`, "timeout");
}
function Jl() {
  return new $("请求已取消", "cancelled");
}
async function At(e, t, n, r) {
  const s = new AbortController();
  let i = !1, o = !1, l = null;
  const c = () => {
    o || (o = !0, clearTimeout(d), h?.removeEventListener("abort", S));
  }, f = () => i && !h?.aborted ? Wl(r) : Jl(), d = setTimeout(() => {
    i = !0, s.abort("timeout");
  }, r), h = n.signal, S = () => {
    s.abort(h?.reason ?? "cancelled");
  };
  h && (h.aborted ? s.abort(h.reason ?? "cancelled") : h.addEventListener("abort", S, { once: !0 }));
  const T = () => {
    l?.(f());
  };
  s.signal.addEventListener("abort", T);
  const L = () => new Promise((C, P) => {
    if (s.signal.aborted) {
      P(f());
      return;
    }
    l = P;
  }), w = async (C) => {
    try {
      return await Promise.race([C, L()]);
    } catch (P) {
      throw P instanceof $ ? P : s.signal.aborted ? f() : P;
    } finally {
      c(), s.signal.removeEventListener("abort", T);
    }
  };
  try {
    const C = await Promise.race([
      e(t, {
        ...n,
        signal: s.signal
      }),
      L()
    ]);
    return {
      ok: C.ok,
      status: C.status,
      statusText: C.statusText,
      headers: C.headers,
      text: () => w(C.text()),
      async json() {
        const P = await w(C.text());
        try {
          return JSON.parse(P);
        } catch {
          throw new $(
            "服务返回的不是合法 JSON，请检查地址或稍后重试",
            "invalid_json"
          );
        }
      },
      blob: () => w(C.blob()),
      close: c
    };
  } catch (C) {
    throw c(), s.signal.removeEventListener("abort", T), C instanceof $ ? C : s.signal.aborted ? f() : C;
  }
}
function jn(e, t) {
  return `${e.replace(/\/+$/, "")}${t.startsWith("/") ? "" : "/"}${t}`;
}
function Yl(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function Xl(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const Zl = /api[_-]?key|authorization|token|secret|cookie|password/i;
function Xt(e) {
  if (typeof e == "string")
    return e.length > 80 ? `${e.slice(0, 80)}…(len=${e.length})` : e;
  if (Array.isArray(e))
    return e.map((n) => Xt(n));
  if (!e || typeof e != "object")
    return e;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (Zl.test(n)) {
      t[n] = "[redacted]";
      continue;
    }
    if (n === "text" || n === "input" || n === "referenceText" || n === "reference_text") {
      t[n] = typeof r == "string" ? `[text len=${r.length}]` : "[text]";
      continue;
    }
    t[n] = Xt(r);
  }
  return t;
}
function Ys(e, t, n) {
  if (n === void 0) {
    console.info(`${ie} [${e}] ${t}`);
    return;
  }
  console.info(`${ie} [${e}] ${t}`, Xt(n));
}
function Fn(e, t, n) {
  if (n === void 0) {
    console.warn(`${ie} [${e}] ${t}`);
    return;
  }
  console.warn(`${ie} [${e}] ${t}`, Xt(n));
}
const Ql = ["v2", "v3", "v4", "v2Pro"];
function Xs(e) {
  const t = e.trim();
  if (!t)
    return { modelName: "", version: "" };
  const n = t.lastIndexOf("|");
  return n < 0 ? { modelName: t, version: "" } : {
    modelName: t.slice(0, n).trim(),
    version: t.slice(n + 1).trim()
  };
}
function ql(e) {
  const t = e.trim().toLowerCase();
  return t === "v2pro" ? "v2Pro" : t === "v2" || t === "v3" || t === "v4" ? t : e.trim();
}
function ec(e) {
  const t = e.trim();
  return t ? {
    英文: "英语",
    日文: "日语",
    韩文: "韩语"
  }[t] ?? t : "多语种混合";
}
function tc(e) {
  const t = Xs(e.modelId), n = t.modelName.trim(), r = ql(t.version) || "v2Pro";
  return {
    url: jn(e.baseUrl.trim(), "/v1/audio/speech"),
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
        text_lang: ec(e.textLang),
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
function nc(e) {
  if (!e.baseUrl.trim())
    throw new $("请先填写 Local-GSVI 服务地址", "config");
  if (!e.modelId.trim())
    throw new $("请先填写或选择 Local-GSVI 模型（modelName|version）", "config");
  if (!e.language.trim() || !e.emotion.trim())
    throw new $(
      "GSVI 生成要求映射完整：语种(prompt_lang)/情绪(emotion)不能为空",
      "config"
    );
  if (!Xs(e.modelId).modelName)
    throw new $("Local-GSVI 模型格式错误，期望 modelName|version", "config");
  if (!e.text.trim())
    throw new $("Local-GSVI 合成文本为空", "config");
}
function oe(e) {
  return typeof e == "object" && e !== null;
}
function rc(e) {
  const t = e.replace(/^data:audio\/[a-zA-Z0-9.+-]+;base64,/i, "").trim();
  return t.length >= 16 && /^[A-Za-z0-9+/=\r\n]+$/.test(t);
}
function Zs(e) {
  return e.trim().match(/^data:audio\/[a-zA-Z0-9.+-]+;base64,(.+)$/i)?.[1] ?? e.trim();
}
function sc(e) {
  if (!oe(e))
    return null;
  const t = e, n = oe(t.data) ? t.data : void 0, r = oe(t.output) ? t.output : void 0, s = [
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
    if (typeof i == "string" && rc(i))
      return Zs(i);
  return null;
}
function ic(e) {
  if (!oe(e))
    return null;
  const t = e, n = oe(t.data) ? t.data : void 0, r = oe(t.output) ? t.output : void 0, s = [
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
function oc(e) {
  if (!oe(e))
    return "";
  const t = oe(e.error) ? e.error : void 0, n = oe(e.base_resp) ? e.base_resp : void 0, r = oe(e.data) ? e.data : void 0, s = [
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
function lc(e) {
  const t = atob(Zs(e)), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r += 1)
    n[r] = t.charCodeAt(r);
  return n;
}
function Cn(e) {
  const t = e?.trim() ?? "";
  return t ? { Authorization: `Bearer ${t}` } : {};
}
function cc(e) {
  const t = fetch;
  async function n(r, s, i, o, l) {
    const c = /^https?:\/\//i.test(s) ? s : jn(r, s);
    let f = !1;
    try {
      f = Yl(r) === new URL(c).origin;
    } catch {
      f = !1;
    }
    const d = await At(
      t,
      c,
      {
        method: "GET",
        headers: f ? Cn(i) : {},
        signal: l
      },
      o
    );
    if (!d.ok)
      throw new $(`下载 GSVI 输出失败：HTTP ${d.status}`, "http", d.status);
    return await d.blob();
  }
  return {
    id: "local_gsvi",
    async checkHealth(r) {
      if (r.engine !== "local_gsvi")
        throw new $("Local-GSVI 适配器收到了错误的引擎请求", "config");
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
        throw new $("Local-GSVI 适配器收到了错误的引擎请求", "config");
      const s = r.baseUrl.trim();
      if (!s)
        throw new $("请先填写 Local-GSVI 服务地址", "config");
      const i = [];
      for (const o of Ql) {
        const l = jn(s, `/models/${encodeURIComponent(o)}`);
        try {
          const c = await At(
            t,
            l,
            { method: "GET", headers: Cn(r.authToken), signal: r.signal },
            r.timeoutMs
          );
          if (!c.ok) {
            Fn("local_gsvi", `GET /models/${o} failed`, {
              status: c.status
            }), c.close();
            continue;
          }
          const f = await c.json(), d = oe(f) && oe(f.models) ? f.models : f;
          if (!oe(d))
            continue;
          Object.entries(d).forEach(([h, S]) => {
            !h || !oe(S) || i.push({
              id: `${h}|${o}`,
              name: `${h} [${o}]`,
              source: "gsvi_model",
              language: Object.keys(S).join(",")
            });
          });
        } catch (c) {
          if (c instanceof $ && c.code === "cancelled")
            throw c;
          Fn("local_gsvi", `GET /models/${o} failed`);
        }
      }
      if (i.length === 0)
        throw new $(
          "未在 /models/{v2|v3|v4|v2Pro} 中解析到模型映射，请检查接口返回结构",
          "missing_audio"
        );
      return i.sort((o, l) => o.name.localeCompare(l.name));
    },
    async synthesize(r) {
      if (r.engine !== "local_gsvi")
        throw new $("Local-GSVI 适配器收到了错误的引擎请求", "config");
      nc(r);
      const s = tc(r), i = {
        "Content-Type": "application/json",
        ...Cn(r.authToken)
      };
      Ys("local_gsvi", "synthesize", {
        url: s.url,
        model: s.modelName,
        version: s.version,
        text: r.text
      });
      const o = await At(
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
        throw new $(
          `Local-GSVI 请求失败：HTTP ${o.status}`,
          "http",
          o.status
        );
      if ((o.headers.get("content-type")?.toLowerCase() ?? "").includes("application/json")) {
        const c = await o.json(), f = sc(c);
        if (f)
          return new Blob([Uint8Array.from(lc(f))], {
            type: r.format === "wav" ? "audio/wav" : "audio/mpeg"
          });
        const d = ic(c);
        if (d)
          return await n(
            r.baseUrl.trim(),
            d,
            r.authToken ?? "",
            r.timeoutMs,
            r.signal
          );
        throw new $(
          `Local-GSVI 未返回可用音频：${oc(c) || "JSON 响应中未找到音频"}`,
          "missing_audio"
        );
      }
      return await o.blob();
    }
  };
}
const ac = {
  international: {
    tts: "https://api.minimaxi.com/v1/t2a_v2",
    voice: "https://api.minimaxi.com/v1/get_voice"
  },
  beijing: {
    tts: "https://api-bj.minimaxi.com/v1/t2a_v2",
    voice: "https://api-bj.minimaxi.com/v1/get_voice"
  }
}, uc = /* @__PURE__ */ new Set([408, 409, 429, 500, 502, 503, 504]), fc = /* @__PURE__ */ new Set([1e3, 1001, 1002, 1039]), Br = 2, dc = "tavern_multi_tts_voice_catalog_v1", pc = 1440 * 60 * 1e3;
function Zt(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function Vn(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Kr(e) {
  return ac[Vn(e)];
}
function Qs(e, t) {
  return `${dc}:${e}:${t.trim()}`;
}
function hc(e) {
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
function zr(e) {
  return `Bearer ${Zt(e)}`;
}
function mc(e) {
  const t = e.trim(), n = new Uint8Array(t.length / 2);
  for (let r = 0; r < t.length; r += 2)
    n[r / 2] = Number.parseInt(t.slice(r, r + 2), 16);
  return n;
}
function gc(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r += 1)
    n[r] = t.charCodeAt(r);
  return n;
}
function _c(e) {
  const t = e.trim();
  return /^[0-9a-fA-F]+$/.test(t) && t.length % 2 === 0 ? mc(t) : gc(t);
}
function yc(e, t) {
  const r = `${t ?? ""} ${e}`.toLowerCase(), s = r.includes("japanese") ? "Japanese" : r.includes("english") ? "English" : r.includes("chinese") ? "Chinese" : r.includes("korean") ? "Korean" : r.includes("french") ? "French" : r.includes("german") ? "German" : r.includes("spanish") ? "Spanish" : "Unknown", i = r.includes("female") || r.includes("女") || r.includes("lady") || r.includes("girl") ? "Female" : r.includes("male") || r.includes("男") || r.includes("man") || r.includes("boy") ? "Male" : "Unknown";
  return { language: s, gender: i };
}
function vc(e, t) {
  const n = t.trim();
  if (!n)
    return null;
  try {
    const r = localStorage.getItem(Qs(e, n));
    if (!r)
      return null;
    const s = JSON.parse(r);
    return !s?.expires_at || Date.now() > s.expires_at ? null : s.items ?? null;
  } catch {
    return null;
  }
}
function bc(e, t, n) {
  const r = t.trim();
  r && localStorage.setItem(
    Qs(e, r),
    JSON.stringify({
      expires_at: Date.now() + pc,
      items: n
    })
  );
}
function xc(e) {
  const t = Zt(e.apiKey), n = e.groupId.trim(), r = e.voiceId.trim();
  if (!t || !n || !r)
    throw new $("MiniMax 引擎缺少必要配置：API Key / Group ID / Voice ID", "config");
  if (!e.text.trim())
    throw new $("MiniMax 合成文本为空", "config");
}
function Sc(e) {
  return typeof e == "object" && e !== null;
}
function Ec(e, t) {
  return uc.has(e) || fc.has(t);
}
function wc(e) {
  const t = fetch;
  return {
    id: "minimax",
    async checkHealth(n) {
      if (n.engine !== "minimax")
        throw new $("MiniMax 适配器收到了错误的引擎请求", "config");
      if (!Zt(n.apiKey))
        return { ok: !1, message: "请先填写 MiniMax API Key" };
      try {
        return await this.listVoices({ ...n, forceRefresh: !0 }), { ok: !0, message: "MiniMax 服务可用" };
      } catch (s) {
        return { ok: !1, message: s instanceof Error ? s.message : String(s) };
      }
    },
    async listVoices(n) {
      if (n.engine !== "minimax")
        throw new $("MiniMax 适配器收到了错误的引擎请求", "config");
      const r = Zt(n.apiKey);
      if (!r)
        throw new $("请先填写 API Key", "config");
      const s = Vn(n.region);
      if (!n.forceRefresh) {
        const h = vc(s, n.groupId);
        if (h && h.length > 0)
          return h;
      }
      const i = Kr(s).voice, o = await At(
        t,
        i,
        {
          method: "POST",
          headers: {
            Authorization: zr(r),
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ voice_type: "all" }),
          signal: n.signal
        },
        n.timeoutMs
      ), c = await o.json();
      if (!o.ok || (c.base_resp?.status_code ?? 0) !== 0)
        throw new $(
          c.base_resp?.status_msg ?? o.statusText ?? "拉取音色列表失败",
          "http",
          o.status
        );
      const f = [], d = (h, S = []) => {
        S.forEach((T) => {
          const L = yc(T.voice_id, T.voice_name);
          f.push({
            id: T.voice_id,
            name: T.voice_name ?? T.voice_id,
            description: T.description,
            source: h,
            language: L.language,
            gender: L.gender
          });
        });
      };
      return d("system", c.system_voice ?? []), d("voice_cloning", c.voice_cloning ?? []), d("voice_generation", c.voice_generation ?? []), bc(s, n.groupId, f), f;
    },
    async synthesize(n) {
      if (n.engine !== "minimax")
        throw new $("MiniMax 适配器收到了错误的引擎请求", "config");
      xc(n);
      const r = hc(n), s = Kr(n.region).tts, i = {
        Authorization: zr(n.apiKey),
        "Content-Type": "application/json"
      };
      Ys("minimax", "synthesize", {
        model: r.model,
        voiceId: r.voice_setting.voice_id,
        region: Vn(n.region),
        groupId: n.groupId.trim(),
        text: n.text
      });
      let o = null;
      for (let l = 0; l <= Br; l += 1) {
        const c = await At(
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
        if (!Sc(f))
          throw new $("MiniMax 响应结构无效", "invalid_json");
        const d = f;
        if (!c.ok || (d.base_resp?.status_code ?? 0) !== 0) {
          const T = d.base_resp?.status_code ?? c.status, L = d.base_resp?.status_msg ?? c.statusText ?? "unknown error";
          if (o = `MiniMax 请求失败：code=${T}, msg=${L}`, Ec(c.status, T) && l < Br) {
            Fn("minimax", "retryable synthesize failure", {
              status: c.status,
              attempt: l
            }), await Xl(250 * (l + 1));
            continue;
          }
          throw new $(o, "http", c.status);
        }
        const h = d.data?.audio ?? d.data?.audio_file ?? d.audio_file;
        if (!h)
          throw new $("MiniMax 响应中未找到音频字段", "missing_audio");
        const S = _c(h);
        return new Blob([Uint8Array.from(S)], { type: "audio/mpeg" });
      }
      throw new $(o ?? "MiniMax 请求失败：未知错误", "http");
    }
  };
}
function Tc(e) {
  return e === "local_gsvi" ? cc() : wc();
}
const Un = "tavern_multi_tts_say_rule", Ac = 1, Cc = {
  system: 0,
  user: 1,
  assistant: 2
};
function qs(e) {
  const t = e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.characterMappings, n = [];
  for (const r of t) {
    const s = r.characterName.trim();
    s && !n.includes(s) && n.push(s);
  }
  return n;
}
function Mc(e) {
  const t = qs(e);
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
function Ic(e) {
  const t = qs(e).join("、") || "（未配置角色映射）";
  return `${e.injectTemplate.replaceAll("${target_characters}", t).replaceAll("${mapped_characters}", t)}

${Mc(e)}`;
}
function Mn(e, t) {
  return !t.enabled || !t.injectEnabled ? (e.deleteExtensionPrompt(Un), { applied: !1 }) : (e.setExtensionPrompt(
    Un,
    Ic(t),
    Ac,
    t.injectDepth,
    !1,
    Cc[t.injectRole]
  ), { applied: !0, depth: t.injectDepth, role: t.injectRole });
}
function Rc(e) {
  e.deleteExtensionPrompt(Un);
}
const Wr = /<say(?:\s+char\s*=\s*(?:"([^"]*)"|“([^”]*)”))?\s*>([\s\S]*?)<\/say>/gi;
function Pc(e) {
  const t = new RegExp(Wr.source, Wr.flags), n = [];
  let r, s = 0;
  for (; (r = t.exec(e)) !== null; ) {
    const i = (r[1] ?? r[2])?.trim(), o = r[3].trim();
    o && (n.push({ index: s, text: o, ...i ? { char: i } : {} }), s += 1);
  }
  return n;
}
const Oc = /* @__PURE__ */ new Set([
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
]), ei = /\(([a-z-]+)\)/gi, Nc = /\([a-z-]+\)/gi;
function cr(e) {
  return e.replace(/\s{2,}/g, " ").trim();
}
function Lc(e) {
  return cr(
    e.replace(ei, (t, n) => {
      const r = String(n).toLowerCase();
      return Oc.has(r) ? `(${r})` : "";
    })
  );
}
function Dc(e) {
  return cr(e.replace(ei, ""));
}
function $c(e) {
  return cr(e.replace(Nc, ""));
}
function Gc(e, t) {
  const n = Lc(e);
  return t === "local_gsvi" ? $c(n) : n;
}
async function jc(e, t) {
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
const Ot = "data-tavern-multi-tts-rendered", ar = "data-tavern-multi-tts-swipe", an = "tavern-multi-tts-segment", Qt = "tavern-multi-tts-fallback-list";
function Fc(e, t, n) {
  return `${e}:${t}:${n}`;
}
function Vc(e) {
  const t = e.split(":");
  if (t.length !== 3)
    return null;
  const n = Number(t[0]), r = Number(t[1]), s = Number(t[2]);
  return [n, r, s].every(Number.isFinite) ? { message_id: n, swipe_id: r, index: s } : null;
}
function Uc(e) {
  return document.querySelector(`#chat .mes[mesid="${e}"]`);
}
function Hc(e) {
  return e.querySelector(".mes_text");
}
function ti(e, t) {
  const n = e.getAttribute(Ot) === "true", r = e.querySelector(`.${an}`) !== null;
  return !n || !r ? !1 : t === void 0 ? !0 : e.getAttribute(ar) === String(t);
}
function Hn(e = document) {
  e.querySelectorAll(`.${an}`).forEach((t) => {
    const n = t.querySelector(".tavern-multi-tts-text")?.textContent ?? "";
    t.replaceWith(document.createTextNode(n));
  }), e.querySelectorAll(`.${Qt}`).forEach((t) => t.remove()), e.querySelectorAll(`[${Ot}]`).forEach((t) => {
    t.removeAttribute(Ot), t.removeAttribute(ar);
  });
}
function Ie(e, t) {
  e.classList.remove("is-loading", "is-ready", "is-playing", "is-error"), t !== "idle" && e.classList.add(`is-${t}`);
  const n = e.querySelector(".tavern-multi-tts-indicator");
  n && (n.textContent = t === "loading" ? "⏳" : t === "ready" ? "▶" : t === "playing" ? "⏸" : t === "error" ? "⚠" : "▶");
}
function Jr(e) {
  return e.replace(/\s+/g, "").trim();
}
function kc(e, t, n, r) {
  const s = e.splitText(t);
  s.splitText(n), s.replaceWith(r);
}
function Bc(e, t, n, r) {
  const s = [t, n].map((l) => l.trim()).filter(Boolean), i = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let o = i.nextNode();
  for (; o; ) {
    const l = o.parentElement;
    if (l && !l.closest(`.${an}`) && !l.closest(`.${Qt}`) && !l.closest(".mes_buttons")) {
      const c = o.nodeValue ?? "";
      for (const f of s) {
        const d = c.indexOf(f);
        if (d >= 0)
          return kc(o, d, f.length, r), !0;
        if (Jr(c) === Jr(f))
          return o.replaceWith(r), !0;
      }
    }
    o = i.nextNode();
  }
  return !1;
}
function Kc(e, t, n, r, s, i, o) {
  const l = Fc(e, t, n.index), c = document.createElement("span");
  c.className = an, c.dataset.tavernMultiTtsKey = l;
  const f = document.createElement("span");
  f.className = "tavern-multi-tts-text", f.textContent = r;
  const d = document.createElement("span");
  d.className = "tavern-multi-tts-indicator", d.textContent = "▶";
  const h = document.createElement("span");
  h.className = "tavern-multi-tts-actions";
  const S = document.createElement("button");
  S.type = "button", S.className = "tavern-multi-tts-action", S.textContent = "下", h.append(S), c.append(f, d, h), Ie(c, "idle");
  let T = o.get(l) ?? null;
  const L = async () => {
    Ie(c, "loading");
    try {
      const P = await i.ensureAudio(n, r, s);
      return P ? (Ie(c, "ready"), P) : (Ie(c, "error"), null);
    } catch {
      return Ie(c, "error"), null;
    }
  }, w = async () => {
    const P = await L();
    P && (T?.stop(), T = Il(
      P,
      () => Ie(c, "playing"),
      () => {
        T = null, o.delete(l), Ie(c, "ready");
      },
      () => {
        T = null, o.delete(l), Ie(c, "error");
      },
      () => Ie(c, "ready")
    ), o.set(l, T));
  }, C = async () => {
    if (!T)
      return;
    const P = T.getState();
    if (P === "playing") {
      T.pause();
      return;
    }
    if (P === "paused")
      try {
        await T.resume();
      } catch {
      }
  };
  return c.addEventListener("click", (P) => {
    const D = P.target;
    if (D?.closest(".tavern-multi-tts-indicator")) {
      C();
      return;
    }
    D?.closest(".tavern-multi-tts-action") || w();
  }), S.addEventListener("click", (P) => {
    P.preventDefault(), P.stopPropagation(), (async () => {
      const D = await L();
      D && i.downloadAudio(D, e, n.index);
    })();
  }), c;
}
function zc(e, t, n, r, s, i = 0) {
  if (ti(e, i))
    return 0;
  e.getAttribute(Ot) === "true" && Hn(e);
  const o = Hc(e) ?? e, l = [];
  let c = 0;
  for (const f of n) {
    if (!f.displayText || !f.ttsText)
      continue;
    const d = Kc(
      t,
      i,
      f,
      f.displayText,
      f.ttsText,
      r,
      s
    );
    Bc(o, f.text, f.displayText, d) ? c += 1 : l.push(d);
  }
  if (o.querySelectorAll(`.${Qt}`).forEach((f) => f.remove()), l.length > 0) {
    const f = document.createElement("div");
    f.className = Qt, l.forEach((d) => f.append(d, document.createTextNode(" "))), o.append(f), c += l.length;
  }
  return c > 0 && (e.setAttribute(Ot, "true"), e.setAttribute(ar, String(i))), c;
}
function ni(e, t) {
  const n = t?.trim() ?? "";
  return n ? (e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.characterMappings).some((s) => s.characterName.trim() === n) : !0;
}
function ri(e, t) {
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
function Wc(e, t, n) {
  if (!ni(e, n))
    return null;
  const r = ri(e, n);
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
function Jc(e, t, n) {
  const r = ri(e, n);
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
const Yc = 15;
function Xc(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), s = [];
  let i = !1, o = !1;
  function l() {
    return e.getSettings();
  }
  function c() {
    o || !document.querySelector(".minimax-tts-segment") || (o = !0, e.warn?.("检测到旧酒馆助手 Multi-TTS 仍在装饰消息。请只启用其中一个，避免重复生成。"));
  }
  async function f(R, F, Q) {
    const te = l(), z = Wc(te, F, Q);
    if (!z)
      return null;
    const at = Jc(te, F, Q), ue = await bl(at), fe = r.get(ue);
    if (fe)
      return fe;
    const ge = await Al(ue);
    if (ge)
      return r.set(ue, ge), ge;
    const _e = await Tc(z.engine).synthesize(z);
    return await Cl(ue, _e), r.set(ue, _e), _e;
  }
  function d(R, F) {
    if (typeof R.swipe_id == "number" && Number.isFinite(R.swipe_id))
      return R.swipe_id;
    const Q = Number(F?.getAttribute("swipeid"));
    return Number.isFinite(Q) ? Q : 0;
  }
  function h(R, F) {
    for (const [Q, te] of t) {
      const z = Vc(Q);
      z && z.message_id === R && z.swipe_id !== F && (te.stop(), t.delete(Q));
    }
  }
  function S(R, F = {}) {
    const Q = F.attempt ?? 0, te = l();
    if (!te.enabled)
      return;
    const z = e.getChatMessage(R);
    if (!z || z.is_user || z.is_system)
      return;
    const at = typeof z.mes == "string" ? z.mes : "", ue = Pc(at).filter(
      (W) => ni(te, W.char)
    );
    if (ue.length === 0)
      return;
    const fe = e.findMessageElement(R) ?? Uc(R);
    if (!fe) {
      Q < Yc && window.setTimeout(() => S(R, { ...F, attempt: Q + 1 }), 120);
      return;
    }
    const ge = d(z, fe);
    if (ti(fe, ge))
      return;
    fe.getAttribute("data-tavern-multi-tts-rendered") === "true" && Hn(fe), h(R, ge), c();
    const ut = ue.map((W) => ({
      ...W,
      displayText: Dc(W.text),
      ttsText: Gc(W.text, te.ttsEngine)
    })), _e = [], un = (W) => F.skipPrefetch ? !1 : te.prefetchMode === "auto_all" ? !0 : te.prefetchMode === "auto_first_n" ? W < te.prefetchFirstCount : !1;
    zc(
      fe,
      R,
      ut,
      {
        ensureAudio: async (W, De, Ue) => {
          const ft = `${R}:${ge}:${W.index}`;
          if (n.has(ft))
            return null;
          n.add(ft);
          try {
            return await f(W.text, Ue, W.char);
          } catch {
            return console.error(`${ie} synthesize failed`), null;
          } finally {
            n.delete(ft);
          }
        },
        downloadAudio(W, De, Ue) {
          Pl(W, Rl(De, Ue));
        }
      },
      t,
      ge
    ), ut.forEach((W, De) => {
      un(De) && W.ttsText && _e.push(async () => {
        try {
          await f(W.text, W.ttsText, W.char);
        } catch {
        }
      });
    }), _e.length > 0 && jc(_e, te.maxConcurrency);
  }
  function T(...R) {
    const F = Number(R[0]);
    Number.isFinite(F) && window.setTimeout(() => S(F), 0);
  }
  function L(...R) {
    const F = Number(R[0]);
    Number.isFinite(F) && window.setTimeout(() => S(F, { skipPrefetch: !0 }), 0);
  }
  function w(R = {}) {
    document.querySelectorAll("#chat .mes[mesid]").forEach((F) => {
      const Q = Number(F.getAttribute("mesid"));
      Number.isFinite(Q) && S(Q, R);
    });
  }
  function C(R, F) {
    e.eventSource.on(R, F), s.push(() => e.eventSource.removeListener(R, F));
  }
  function P() {
    i || (i = !0, Mn(e, l()), C(e.eventNames.messageReceived, T), C(e.eventNames.messageRendered, T), C(e.eventNames.messageUpdated, T), C(e.eventNames.messageSwiped, L), C(e.eventNames.moreMessagesLoaded, () => {
      w({ skipPrefetch: !0 });
    }), C(e.eventNames.chatChanged, () => {
      Mn(e, l()), w({ skipPrefetch: !0 });
    }), w({ skipPrefetch: !0 }), console.info(`${ie} chat runtime started`));
  }
  function D() {
    s.splice(0).forEach((R) => R()), t.forEach((R) => R.stop()), t.clear(), n.clear(), r.clear(), Bs(), Rc(e), Hn(document), i = !1, console.info(`${ie} chat runtime stopped`);
  }
  function Y() {
    Mn(e, l()), l().enabled && w();
  }
  return { start: P, stop: D, syncFromSettings: Y, decorate: S };
}
function Fe(e) {
  return typeof e == "object" && e !== null;
}
function Zc(e) {
  if (Fe(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function Qc(e) {
  return !Fe(e) || typeof e.getContext != "function" ? null : e;
}
function qc(e) {
  if (!Fe(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!Fe(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = Zc(e.eventSource), n = Fe(e.eventTypes) ? e.eventTypes : Fe(e.event_types) ? e.event_types : void 0, r = n ? {
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
    eventTypes: r,
    chat: e.chat,
    setExtensionPrompt: typeof e.setExtensionPrompt == "function" ? e.setExtensionPrompt : void 0,
    extensionPrompts: Fe(e.extensionPrompts) ? e.extensionPrompts : void 0
  };
}
function si() {
  const e = Qc(globalThis.SillyTavern);
  if (!e)
    throw new Error(
      "SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行"
    );
  return qc(e.getContext());
}
function ii() {
  const e = si();
  return {
    readRawSettings() {
      return e.extensionSettings[wn];
    },
    writeSettings(t) {
      e.extensionSettings[wn] = t, e.saveSettingsDebounced();
    },
    removeSettings() {
      delete e.extensionSettings[wn], e.saveSettingsDebounced();
    },
    findSettingsRoot: zl,
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
function ea(e) {
  return Fe(e) ? {
    mes: typeof e.mes == "string" ? e.mes : void 0,
    is_user: typeof e.is_user == "boolean" ? e.is_user : void 0,
    is_system: typeof e.is_system == "boolean" ? e.is_system : void 0,
    swipe_id: typeof e.swipe_id == "number" ? e.swipe_id : void 0
  } : null;
}
function ta(e) {
  const t = si();
  if (!t.eventSource)
    throw new Error("SillyTavern eventSource 不可用，无法监听消息事件");
  const n = t.eventSource;
  return {
    getSettings: e,
    getChatMessage(r) {
      return Array.isArray(t.chat) ? ea(t.chat[r]) : null;
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
      messageSwiped: t.eventTypes?.MESSAGE_SWIPED ?? "message_swiped",
      moreMessagesLoaded: t.eventTypes?.MORE_MESSAGES_LOADED ?? "more_messages_loaded",
      chatChanged: t.eventTypes?.CHAT_CHANGED ?? "chat_id_changed"
    },
    warn(r) {
      const s = globalThis.toastr;
      if (typeof s?.warning == "function") {
        s.warning(r, ie);
        return;
      }
      console.warn(`${ie} ${r}`);
    }
  };
}
const na = { class: "tavern-multi-tts-settings" }, ra = { class: "inline-drawer" }, sa = { class: "inline-drawer-toggle inline-drawer-header" }, ia = { class: "inline-drawer-content" }, oa = { class: "tavern-multi-tts-block" }, la = { class: "tavern-multi-tts-version" }, ca = { class: "tavern-multi-tts-block" }, aa = { class: "checkbox_label" }, ua = ["checked"], fa = { class: "tavern-multi-tts-block" }, da = { class: "checkbox_label" }, pa = ["checked"], ha = /* @__PURE__ */ no({
  __name: "settings-panel",
  props: {
    displayName: {},
    version: {},
    enabled: { type: Boolean },
    injectEnabled: { type: Boolean },
    onEnabledChange: { type: Function },
    onInjectEnabledChange: { type: Function }
  },
  setup(e) {
    return (t, n) => (Co(), Io("div", na, [
      ee("div", ra, [
        ee("div", sa, [
          ee("b", null, In(e.displayName), 1),
          n[2] || (n[2] = ee("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        ee("div", ia, [
          ee("div", oa, [
            ee("small", la, "版本 " + In(e.version), 1)
          ]),
          ee("div", ca, [
            ee("label", aa, [
              ee("input", {
                type: "checkbox",
                checked: e.enabled,
                onChange: n[0] || (n[0] = (r) => e.onEnabledChange(r.target.checked))
              }, null, 40, ua),
              n[3] || (n[3] = ee("span", null, "启用 TTS 功能", -1))
            ])
          ]),
          ee("div", fa, [
            ee("label", da, [
              ee("input", {
                type: "checkbox",
                checked: e.injectEnabled,
                onChange: n[1] || (n[1] = (r) => e.onInjectEnabledChange(r.target.checked))
              }, null, 40, pa),
              n[4] || (n[4] = ee("span", null, "启用提示词注入", -1))
            ])
          ])
        ])
      ])
    ]));
  }
});
let _t = null, et = null, qt = null;
function ma() {
  return Js(ii().readRawSettings());
}
function ga() {
  return qt ??= Xc(ta(ma)), qt;
}
function lt() {
  return et || (et = Kl(
    ii(),
    {
      mount(e, t) {
        _t?.unmount(), _t = hl(ha, {
          displayName: Ol,
          version: Nl,
          enabled: t.enabled,
          injectEnabled: t.injectEnabled,
          onEnabledChange(n) {
            et?.setEnabled(n);
          },
          onInjectEnabledChange(n) {
            et?.setInjectEnabled(n);
          }
        }), _t.mount(e);
      },
      unmount() {
        _t?.unmount(), _t = null;
      }
    },
    {
      stopPlayback: Bs,
      clearCache: Ml,
      startRuntime: () => ga().start(),
      stopRuntime: () => qt?.stop(),
      syncRuntime: () => qt?.syncFromSettings()
    }
  ), et);
}
async function ct(e, t) {
  try {
    await t();
  } catch (n) {
    const r = n instanceof Error ? n.message : String(n);
    throw console.error(`${ie} ${e} failed: ${r}`), n;
  }
}
async function ya() {
  await ct("onInstall", () => lt().install());
}
async function va() {
  await ct("onActivate", () => lt().activate());
}
async function ba() {
  await ct("onEnable", () => lt().activate());
}
async function xa() {
  await ct("onDisable", () => lt().disable());
}
async function Sa() {
  await ct("onClean", () => lt().clean());
}
async function Ea() {
  await ct("onDelete", () => lt().delete());
}
export {
  va as onActivate,
  Sa as onClean,
  Ea as onDelete,
  xa as onDisable,
  ba as onEnable,
  ya as onInstall
};
//# sourceMappingURL=index.js.map
