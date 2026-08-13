// @__NO_SIDE_EFFECTS__
function Bn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Y = {}, rt = [], Kn = () => {
}, Zr = () => !1, nn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), rn = (e) => e.startsWith("onUpdate:"), Ce = Object.assign, fi = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, di = Object.prototype.hasOwnProperty, U = (e, t) => di.call(e, t), N = Array.isArray, bt = (e) => Dt(e) === "[object Map]", pi = (e) => Dt(e) === "[object Set]", _r = (e) => Dt(e) === "[object Date]", k = (e) => typeof e == "function", Q = (e) => typeof e == "string", Ae = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", Qr = (e) => (K(e) || k(e)) && k(e.then) && k(e.catch), qr = Object.prototype.toString, Dt = (e) => qr.call(e), hi = (e) => Dt(e).slice(8, -1), mi = (e) => Dt(e) === "[object Object]", zn = (e) => Q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, St = /* @__PURE__ */ Bn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), sn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, gi = /-\w/g, he = sn(
  (e) => e.replace(gi, (t) => t.slice(1).toUpperCase())
), _i = /\B([A-Z])/g, qe = sn(
  (e) => e.replace(_i, "-$1").toLowerCase()
), es = sn((e) => e.charAt(0).toUpperCase() + e.slice(1)), hn = sn(
  (e) => e ? `on${es(e)}` : ""
), Ve = (e, t) => !Object.is(e, t), mn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ts = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, yi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let yr;
const on = () => yr || (yr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wn(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = Q(r) ? xi(r) : Wn(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (Q(e) || K(e))
    return e;
}
const vi = /;(?![^(]*\))/g, bi = /:([^]+)/, Si = /\/\*[^]*?\*\//g;
function xi(e) {
  const t = {};
  return e.replace(Si, "").split(vi).forEach((n) => {
    if (n) {
      const r = n.split(bi);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Jn(e) {
  let t = "";
  if (Q(e))
    t = e;
  else if (N(e))
    for (let n = 0; n < e.length; n++) {
      const r = Jn(e[n]);
      r && (t += r + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ei = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", wi = /* @__PURE__ */ Bn(Ei);
function ns(e) {
  return !!e || e === "";
}
function Ti(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Yn(e[r], t[r]);
  return n;
}
function Yn(e, t) {
  if (e === t) return !0;
  let n = _r(e), r = _r(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Ae(e), r = Ae(t), n || r)
    return e === t;
  if (n = N(e), r = N(t), n || r)
    return n && r ? Ti(e, t) : !1;
  if (n = K(e), r = K(t), n || r) {
    if (!n || !r)
      return !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Yn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const rs = (e) => !!(e && e.__v_isRef === !0), Ht = (e) => Q(e) ? e : e == null ? "" : N(e) || K(e) && (e.toString === qr || !k(e.toString)) ? rs(e) ? Ht(e.value) : JSON.stringify(e, ss, 2) : String(e), ss = (e, t) => rs(t) ? ss(e, t.value) : bt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[gn(r, i) + " =>"] = s, n),
    {}
  )
} : pi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => gn(n))
} : Ae(t) ? gn(t) : K(t) && !N(t) && !mi(t) ? String(t) : t, gn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ae(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let ne;
class Ai {
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
const _n = /* @__PURE__ */ new WeakSet();
class Ci {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ne && (ne.active ? ne.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, _n.has(this) && (_n.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Mi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, vr(this), os(this);
    const t = H, n = me;
    H = this, me = !0;
    try {
      return this.fn();
    } finally {
      ls(this), H = t, me = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Qn(t);
      this.deps = this.depsTail = void 0, vr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? _n.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Pn(this) && this.run();
  }
  get dirty() {
    return Pn(this);
  }
}
let is = 0, xt, Et;
function Mi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Et, Et = e;
    return;
  }
  e.next = xt, xt = e;
}
function Xn() {
  is++;
}
function Zn() {
  if (--is > 0)
    return;
  if (Et) {
    let t = Et;
    for (Et = void 0; t; ) {
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
function os(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ls(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Qn(r), Ri(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function Pn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ii(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ii(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Kt) || (e.globalVersion = Kt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Pn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = H, r = me;
  H = e, me = !0;
  try {
    os(e);
    const s = e.fn(e._value);
    (t.version === 0 || Ve(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    H = n, me = r, ls(e), e.flags &= -3;
  }
}
function Qn(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Qn(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ri(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let me = !0;
const cs = [];
function it() {
  cs.push(me), me = !1;
}
function ot() {
  const e = cs.pop();
  me = e === void 0 ? !0 : e;
}
function vr(e) {
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
let Kt = 0;
class Pi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class as {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!H || !me || H === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== H)
      n = this.activeLink = new Pi(H, this), H.deps ? (n.prevDep = H.depsTail, H.depsTail.nextDep = n, H.depsTail = n) : H.deps = H.depsTail = n, us(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = H.depsTail, n.nextDep = void 0, H.depsTail.nextDep = n, H.depsTail = n, H.deps === n && (H.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Kt++, this.notify(t);
  }
  notify(t) {
    Xn();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Zn();
    }
  }
}
function us(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        us(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const On = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ Symbol(
  ""
), Nn = /* @__PURE__ */ Symbol(
  ""
), Mt = /* @__PURE__ */ Symbol(
  ""
);
function re(e, t, n) {
  if (me && H) {
    let r = On.get(e);
    r || On.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new as()), s.map = r, s.key = n), s.track();
  }
}
function Ne(e, t, n, r, s, i) {
  const o = On.get(e);
  if (!o) {
    Kt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Xn(), t === "clear")
    o.forEach(l);
  else {
    const c = N(e), f = c && zn(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((h, x) => {
        (x === "length" || x === Mt || !Ae(x) && x >= d) && l(h);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), f && l(o.get(Mt)), t) {
        case "add":
          c ? f && l(o.get("length")) : (l(o.get(Ye)), bt(e) && l(o.get(Nn)));
          break;
        case "delete":
          c || (l(o.get(Ye)), bt(e) && l(o.get(Nn)));
          break;
        case "set":
          bt(e) && l(o.get(Ye));
          break;
      }
  }
  Zn();
}
function tt(e) {
  const t = /* @__PURE__ */ $(e);
  return t === e ? t : (re(t, "iterate", Mt), /* @__PURE__ */ ke(e) ? t : t.map(De));
}
function qn(e) {
  return re(e = /* @__PURE__ */ $(e), "iterate", Mt), e;
}
function we(e, t) {
  return /* @__PURE__ */ He(e) ? It(/* @__PURE__ */ nr(e) ? De(t) : t) : De(t);
}
const Oi = {
  __proto__: null,
  [Symbol.iterator]() {
    return yn(this, Symbol.iterator, (e) => we(this, e));
  },
  concat(...e) {
    return tt(this).concat(
      ...e.map((t) => N(t) ? tt(t) : t)
    );
  },
  entries() {
    return yn(this, "entries", (e) => (e[1] = we(this, e[1]), e));
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
    return vn(this, "includes", e);
  },
  indexOf(...e) {
    return vn(this, "indexOf", e);
  },
  join(e) {
    return tt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return vn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Me(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return gt(this, "pop");
  },
  push(...e) {
    return gt(this, "push", e);
  },
  reduce(e, ...t) {
    return br(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return br(this, "reduceRight", e, t);
  },
  shift() {
    return gt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Me(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return gt(this, "splice", e);
  },
  toReversed() {
    return tt(this).toReversed();
  },
  toSorted(e) {
    return tt(this).toSorted(e);
  },
  toSpliced(...e) {
    return tt(this).toSpliced(...e);
  },
  unshift(...e) {
    return gt(this, "unshift", e);
  },
  values() {
    return yn(this, "values", (e) => we(this, e));
  }
};
function yn(e, t, n) {
  const r = qn(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ ke(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Ni = Array.prototype;
function Me(e, t, n, r, s, i) {
  const o = qn(e), l = o !== e && !/* @__PURE__ */ ke(e), c = o[t];
  if (c !== Ni[t]) {
    const h = c.apply(e, i);
    return l ? De(h) : h;
  }
  let f = n;
  o !== e && (l ? f = function(h, x) {
    return n.call(this, we(e, h), x, e);
  } : n.length > 2 && (f = function(h, x) {
    return n.call(this, h, x, e);
  }));
  const d = c.call(o, f, r);
  return l && s ? s(d) : d;
}
function br(e, t, n, r) {
  const s = qn(e), i = s !== e && !/* @__PURE__ */ ke(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(f, d, h) {
    return l && (l = !1, f = we(e, f)), n.call(this, f, we(e, d), h, e);
  }) : n.length > 3 && (o = function(f, d, h) {
    return n.call(this, f, d, h, e);
  }));
  const c = s[t](o, ...r);
  return l ? we(e, c) : c;
}
function vn(e, t, n) {
  const r = /* @__PURE__ */ $(e);
  re(r, "iterate", Mt);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ rr(n[0]) ? (n[0] = /* @__PURE__ */ $(n[0]), r[t](...n)) : s;
}
function gt(e, t, n = []) {
  it(), Xn();
  const r = (/* @__PURE__ */ $(e))[t].apply(e, n);
  return Zn(), ot(), r;
}
const Li = /* @__PURE__ */ Bn("__proto__,__v_isRef,__isVue"), fs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ae)
);
function Di(e) {
  Ae(e) || (e = String(e));
  const t = /* @__PURE__ */ $(this);
  return re(t, "has", e), t.hasOwnProperty(e);
}
class ds {
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
      return r === (s ? i ? Ki : gs : i ? ms : hs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = N(t);
    if (!s) {
      let c;
      if (o && (c = Oi[n]))
        return c;
      if (n === "hasOwnProperty")
        return Di;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ pe(t) ? t : r
    );
    if ((Ae(n) ? fs.has(n) : Li(n)) || (s || re(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ pe(l)) {
      const c = o && zn(n) ? l : l.value;
      return s && K(c) ? /* @__PURE__ */ Dn(c) : c;
    }
    return K(l) ? s ? /* @__PURE__ */ Dn(l) : /* @__PURE__ */ _s(l) : l;
  }
}
class ps extends ds {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = N(t) && zn(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ He(i);
      if (!/* @__PURE__ */ ke(r) && !/* @__PURE__ */ He(r) && (i = /* @__PURE__ */ $(i), r = /* @__PURE__ */ $(r)), !o && /* @__PURE__ */ pe(i) && !/* @__PURE__ */ pe(r))
        return f || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : U(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ pe(t) ? t : s
    );
    return t === /* @__PURE__ */ $(s) && c && (l ? Ve(r, i) && Ne(t, "set", n, r) : Ne(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = U(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Ne(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Ae(n) || !fs.has(n)) && re(t, "has", n), r;
  }
  ownKeys(t) {
    return re(
      t,
      "iterate",
      N(t) ? "length" : Ye
    ), Reflect.ownKeys(t);
  }
}
class $i extends ds {
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
const Gi = /* @__PURE__ */ new ps(), ji = /* @__PURE__ */ new $i(), Fi = /* @__PURE__ */ new ps(!0);
const Ln = (e) => e, Vt = (e) => Reflect.getPrototypeOf(e);
function Vi(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ $(s), o = bt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, f = s[e](...r), d = n ? Ln : t ? It : De;
    return !t && re(
      i,
      "iterate",
      c ? Nn : Ye
    ), Ce(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: h, done: x } = f.next();
          return x ? { value: h, done: x } : {
            value: l ? [d(h[0]), d(h[1])] : d(h),
            done: x
          };
        }
      }
    );
  };
}
function Ut(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ui(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ $(i), l = /* @__PURE__ */ $(s);
      e || (Ve(s, l) && re(o, "get", s), re(o, "get", l));
      const { has: c } = Vt(o), f = t ? Ln : e ? It : De;
      if (c.call(o, s))
        return f(i.get(s));
      if (c.call(o, l))
        return f(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && re(/* @__PURE__ */ $(s), "iterate", Ye), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ $(i), l = /* @__PURE__ */ $(s);
      return e || (Ve(s, l) && re(o, "has", s), re(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ $(l), f = t ? Ln : e ? It : De;
      return !e && re(c, "iterate", Ye), l.forEach((d, h) => s.call(i, f(d), f(h), o));
    }
  };
  return Ce(
    n,
    e ? {
      add: Ut("add"),
      set: Ut("set"),
      delete: Ut("delete"),
      clear: Ut("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ $(this), o = Vt(i), l = /* @__PURE__ */ $(s), c = !t && !/* @__PURE__ */ ke(s) && !/* @__PURE__ */ He(s) ? l : s;
        return o.has.call(i, c) || Ve(s, c) && o.has.call(i, s) || Ve(l, c) && o.has.call(i, l) || (i.add(c), Ne(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ ke(i) && !/* @__PURE__ */ He(i) && (i = /* @__PURE__ */ $(i));
        const o = /* @__PURE__ */ $(this), { has: l, get: c } = Vt(o);
        let f = l.call(o, s);
        f || (s = /* @__PURE__ */ $(s), f = l.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), f ? Ve(i, d) && Ne(o, "set", s, i) : Ne(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ $(this), { has: o, get: l } = Vt(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ $(s), c = o.call(i, s)), l && l.call(i, s);
        const f = i.delete(s);
        return c && Ne(i, "delete", s, void 0), f;
      },
      clear() {
        const s = /* @__PURE__ */ $(this), i = s.size !== 0, o = s.clear();
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
    n[s] = Vi(s, e, t);
  }), n;
}
function er(e, t) {
  const n = Ui(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    U(n, s) && s in r ? n : r,
    s,
    i
  );
}
const Hi = {
  get: /* @__PURE__ */ er(!1, !1)
}, ki = {
  get: /* @__PURE__ */ er(!1, !0)
}, Bi = {
  get: /* @__PURE__ */ er(!0, !1)
};
const hs = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakMap();
function zi(e) {
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
function _s(e) {
  return /* @__PURE__ */ He(e) ? e : tr(
    e,
    !1,
    Gi,
    Hi,
    hs
  );
}
// @__NO_SIDE_EFFECTS__
function Wi(e) {
  return tr(
    e,
    !1,
    Fi,
    ki,
    ms
  );
}
// @__NO_SIDE_EFFECTS__
function Dn(e) {
  return tr(
    e,
    !0,
    ji,
    Bi,
    gs
  );
}
function tr(e, t, n, r, s) {
  if (!K(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const o = zi(hi(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function nr(e) {
  return /* @__PURE__ */ He(e) ? /* @__PURE__ */ nr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function $(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ $(t) : e;
}
function Ji(e) {
  return !U(e, "__v_skip") && Object.isExtensible(e) && ts(e, "__v_skip", !0), e;
}
const De = (e) => K(e) ? /* @__PURE__ */ _s(e) : e, It = (e) => K(e) ? /* @__PURE__ */ Dn(e) : e;
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  return Xi(e, !1);
}
function Xi(e, t) {
  return /* @__PURE__ */ pe(e) ? e : new Zi(e, t);
}
class Zi {
  constructor(t, n) {
    this.dep = new as(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ $(t), this._value = n ? t : De(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ ke(t) || /* @__PURE__ */ He(t);
    t = r ? t : /* @__PURE__ */ $(t), Ve(t, n) && (this._rawValue = t, this._value = r ? t : De(t), this.dep.trigger());
  }
}
function Qi(e) {
  return /* @__PURE__ */ pe(e) ? e.value : e;
}
const qi = {
  get: (e, t, n) => t === "__v_raw" ? e : Qi(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ pe(s) && !/* @__PURE__ */ pe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function ys(e) {
  return /* @__PURE__ */ nr(e) ? e : new Proxy(e, qi);
}
function $t(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    ln(s, t, n);
  }
}
function Be(e, t, n, r) {
  if (k(e)) {
    const s = $t(e, t, n, r);
    return s && Qr(s) && s.catch((i) => {
      ln(i, t, n);
    }), s;
  }
  if (N(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Be(e[i], t, n, r));
    return s;
  }
}
function ln(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Y;
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
      it(), $t(i, null, 10, [
        e,
        c,
        f
      ]), ot();
      return;
    }
  }
  eo(e, n, s, r, o);
}
function eo(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const ie = [];
let Ee = -1;
const st = [];
let je = null, nt = 0;
const vs = /* @__PURE__ */ Promise.resolve();
let zt = null;
function to(e) {
  const t = zt || vs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function no(e) {
  let t = Ee + 1, n = ie.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = ie[r], i = Rt(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function bs(e) {
  if (!(e.flags & 1)) {
    const t = Rt(e), n = ie[ie.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Rt(n) ? ie.push(e) : ie.splice(no(t), 0, e), e.flags |= 1, Ss();
  }
}
function Ss() {
  zt || (zt = vs.then(Es));
}
function ro(e) {
  if (!N(e))
    je && e.id === -1 ? je.splice(nt + 1, 0, e) : e.flags & 1 || (st.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      st.push(e[t]);
  Ss();
}
function Sr(e, t, n = Ee + 1) {
  for (; n < ie.length; n++) {
    const r = ie[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      ie.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function xs(e) {
  if (st.length) {
    const t = [...new Set(st)].sort(
      (n, r) => Rt(n) - Rt(r)
    );
    if (st.length = 0, je) {
      for (let n = 0; n < t.length; n++)
        je.push(t[n]);
      return;
    }
    for (je = t, nt = 0; nt < je.length; nt++) {
      const n = je[nt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    je = null, nt = 0;
  }
}
const Rt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Es(e) {
  try {
    for (Ee = 0; Ee < ie.length; Ee++) {
      const t = ie[Ee];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), $t(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ee < ie.length; Ee++) {
      const t = ie[Ee];
      t && (t.flags &= -2);
    }
    Ee = -1, ie.length = 0, xs(), zt = null, (ie.length || st.length) && Es();
  }
}
let Le = null, ws = null;
function Wt(e) {
  const t = Le;
  return Le = e, ws = e && e.type.__scopeId || null, t;
}
function so(e, t = Le, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Mr(-1);
    const i = Wt(t), o = Xe.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = Xe.length; c > o; c--) Vs();
      Wt(i), r._d && Mr(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ze(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[r];
    c && (it(), Be(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ot());
  }
}
const io = /* @__PURE__ */ Symbol("_vte"), cn = (e) => e.__isTeleport, bn = /* @__PURE__ */ Symbol("_leaveCb");
function oo(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Qe) {
        t = n;
        break;
      }
  }
  return t;
}
function Ts(e) {
  if (!As(e))
    return cn(e.type) && e.children ? oo(e.children) : e;
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
function sr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    sr(
      cn(n.type) && Ts(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function lo(e, t) {
  return k(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function co(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function xr(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Jt = /* @__PURE__ */ new WeakMap();
function wt(e, t, n, r, s = !1) {
  if (N(e)) {
    e.forEach(
      (w, C) => wt(
        w,
        t && (N(t) ? t[C] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (Tt(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && wt(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? lr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, f = t && t.r, d = l.refs === Y ? l.refs = {} : l.refs, h = l.setupState, x = /* @__PURE__ */ $(h), T = h === Y ? Zr : (w) => xr(d, w) ? !1 : U(x, w), L = (w, C) => !(C && xr(d, C));
  if (f != null && f !== c) {
    if (Er(t), Q(f))
      d[f] = null, T(f) && (h[f] = null);
    else if (/* @__PURE__ */ pe(f)) {
      const w = t;
      L(f, w.k) && (f.value = null), w.k && (d[w.k] = null);
    }
  }
  if (k(c))
    $t(c, l, 12, [o, d]);
  else {
    const w = Q(c), C = /* @__PURE__ */ pe(c);
    if (w || C) {
      const P = () => {
        if (e.f) {
          const D = w ? T(c) ? h[c] : d[c] : L() || !e.k ? c.value : d[e.k];
          if (s)
            N(D) && fi(D, i);
          else if (N(D))
            D.includes(i) || D.push(i);
          else if (w)
            d[c] = [i], T(c) && (h[c] = d[c]);
          else {
            const X = [i];
            L(c, e.k) && (c.value = X), e.k && (d[e.k] = X);
          }
        } else w ? (d[c] = o, T(c) && (h[c] = o)) : C && (L(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const D = () => {
          P(), Jt.delete(e);
        };
        D.id = -1, Jt.set(e, D), ce(D, n);
      } else
        Er(e), P();
    }
  }
}
function Er(e) {
  const t = Jt.get(e);
  t && (t.flags |= 8, Jt.delete(e));
}
on().requestIdleCallback;
on().cancelIdleCallback;
const Tt = (e) => !!e.type.__asyncLoader, As = (e) => e.type.__isKeepAlive, ao = /* @__PURE__ */ Symbol.for("v-ndc"), $n = (e) => e ? Ks(e) ? lr(e) : $n(e.parent) : null, At = (
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
    $parent: (e) => $n(e.parent),
    $root: (e) => $n(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      bs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = to.bind(e.proxy)),
    $watch: (e) => Kn
  })
), Sn = (e, t) => e !== Y && !e.__isScriptSetup && U(e, t), uo = {
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
        if (Sn(r, t))
          return o[t] = 1, r[t];
        if (U(i, t))
          return o[t] = 3, i[t];
        if (n !== Y && U(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const f = At[t];
    let d, h;
    if (f)
      return t === "$attrs" && re(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Y && U(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      h = c.config.globalProperties, U(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return Sn(s, t) ? (s[t] = n, !0) : U(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || Sn(t, l) || U(i, l) || U(r, l) || U(At, l) || U(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : U(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Cs() {
  return {
    app: null,
    config: {
      isNativeTag: Zr,
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
let fo = 0;
function po(e, t) {
  return function(r, s = null) {
    k(r) || (r = Ce({}, r)), s != null && !K(s) && (s = null);
    const i = Cs(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const f = i.app = {
      _uid: fo++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: zo,
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
      mount(d, h, x) {
        if (!c) {
          const T = f._ceVNode || Ze(r, s);
          return T.appContext = i, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(T, d, x), c = !0, f._container = d, d.__vue_app__ = f, lr(T.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (Be(
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
const ho = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${he(t)}Modifiers`] || e[`${qe(t)}Modifiers`];
function mo(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Y;
  let s = n;
  const i = t.startsWith("update:"), o = i && ho(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => Q(d) ? d.trim() : d)), o.number && (s = n.map(yi)));
  let l, c = r[l = hn(t)] || // also try camelCase event handler (#2249)
  r[l = hn(he(t))];
  !c && i && (c = r[l = hn(qe(t))]), c && Be(
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
    e.emitted[l] = !0, Be(
      f,
      e,
      6,
      s
    );
  }
}
function go(e, t, n = !1) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {};
  return i ? (N(i) ? i.forEach((l) => o[l] = null) : Ce(o, i), K(e) && r.set(e, o), o) : (K(e) && r.set(e, null), null);
}
function an(e, t) {
  return !e || !nn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, qe(t)) || U(e, t));
}
function wr(e) {
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
    data: x,
    setupState: T,
    ctx: L,
    inheritAttrs: w
  } = e, C = Wt(e);
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
          x,
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
      ), D = t.props ? l : _o(l);
    }
  } catch (R) {
    Xe.length = 0, ln(R, e, 1), P = Ze(Qe);
  }
  let X = P;
  if (D && w !== !1) {
    const R = Object.keys(D), { shapeFlag: F } = X;
    R.length && F & 7 && (i && R.some(rn) && (D = yo(
      D,
      i
    )), X = lt(X, D, !1, !0));
  }
  if (n.dirs && (X = lt(X, null, !1, !0), X.dirs = X.dirs ? X.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const R = cn(X.type) && Ts(X) || X;
    sr(R, n.transition);
  }
  return P = X, Wt(C), P;
}
const _o = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || nn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, yo = (e, t) => {
  const n = {};
  for (const r in e)
    (!rn(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function vo(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: c } = t, f = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? Tr(r, o, f) : !!o;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        const x = d[h];
        if (Ms(o, r, x) && !an(f, x))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Tr(r, o, f) : !0 : !!o;
  return !1;
}
function Tr(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (Ms(t, e, i) && !an(n, i))
      return !0;
  }
  return !1;
}
function Ms(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && K(r) && K(s) ? !Yn(r, s) : r !== s;
}
function bo({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = r, e = s), s === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Is = {}, Rs = () => Object.create(Is), Ps = (e) => Object.getPrototypeOf(e) === Is;
function So(e, t, n, r = !1) {
  const s = {}, i = Rs();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Os(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : /* @__PURE__ */ Wi(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function xo(e, t, n, r) {
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
      for (let h = 0; h < d.length; h++) {
        let x = d[h];
        if (an(e.emitsOptions, x))
          continue;
        const T = t[x];
        if (c)
          if (U(i, x))
            T !== i[x] && (i[x] = T, f = !0);
          else {
            const L = he(x);
            s[L] = Gn(
              c,
              l,
              L,
              T,
              e,
              !1
            );
          }
        else
          T !== i[x] && (i[x] = T, f = !0);
      }
    }
  } else {
    Os(e, t, s, i) && (f = !0);
    let d;
    for (const h in l)
      (!t || // for camelCase
      !U(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = qe(h)) === h || !U(t, d))) && (c ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[h] = Gn(
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
function Os(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (St(c))
        continue;
      const f = t[c];
      let d;
      s && U(s, d = he(c)) ? !i || !i.includes(d) ? n[d] = f : (l || (l = {}))[d] = f : an(e.emitsOptions, c) || (!(c in r) || f !== r[c]) && (r[c] = f, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ $(n), f = l || Y;
    for (let d = 0; d < i.length; d++) {
      const h = i[d];
      n[h] = Gn(
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
function Gn(e, t, n, r, s, i) {
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
          const d = Bs(s);
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
    ] && (r === "" || r === qe(n)) && (r = !0));
  }
  return r;
}
function Eo(e, t, n = !1) {
  const r = t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  if (!i)
    return K(e) && r.set(e, rt), rt;
  if (N(i))
    for (let f = 0; f < i.length; f++) {
      const d = he(i[f]);
      Ar(d) && (o[d] = Y);
    }
  else if (i)
    for (const f in i) {
      const d = he(f);
      if (Ar(d)) {
        const h = i[f], x = o[d] = N(h) || k(h) ? { type: h } : Ce({}, h), T = x.type;
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
        x[
          0
          /* shouldCast */
        ] = L, x[
          1
          /* shouldCastTrue */
        ] = w, (L || U(x, "default")) && l.push(d);
      }
    }
  const c = [o, l];
  return K(e) && r.set(e, c), c;
}
function Ar(e) {
  return e[0] !== "$" && !St(e);
}
const ir = (e) => e === "_" || e === "_ctx" || e === "$stable", or = (e) => N(e) ? e.map(Te) : [Te(e)], wo = (e, t, n) => {
  if (t._n)
    return t;
  const r = so((...s) => or(t(...s)), n);
  return r._c = !1, r;
}, Ns = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (ir(s)) continue;
    const i = e[s];
    if (k(i))
      t[s] = wo(s, i, r);
    else if (i != null) {
      const o = or(i);
      t[s] = () => o;
    }
  }
}, Ls = (e, t) => {
  const n = or(t);
  e.slots.default = () => n;
}, Ds = (e, t, n) => {
  for (const r in t)
    (n || !ir(r)) && (e[r] = t[r]);
}, To = (e, t, n) => {
  const r = e.slots = Rs();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Ds(r, t, n), n && ts(r, "_", s, !0)) : Ns(t, r);
  } else t && Ls(e, t);
}, Ao = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = Y;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Ds(s, t, n) : (i = !t.$stable, Ns(t, s)), o = t;
  } else t && (Ls(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !ir(l) && o[l] == null && delete s[l];
}, ce = Po;
function Co(e) {
  return Mo(e);
}
function Mo(e, t) {
  const n = on();
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
    nextSibling: x,
    setScopeId: T = Kn,
    insertStaticContent: L
  } = e, w = (a, u, p, y = null, _ = null, m = null, S = void 0, b = null, v = !!u.dynamicChildren) => {
    if (a === u)
      return;
    a && !_t(a, u) && (y = Ft(a), Ge(a, _, m, !0), a = null), u.patchFlag === -2 && (v = !1, u.dynamicChildren = null);
    const { type: g, ref: M, shapeFlag: E } = u;
    switch (g) {
      case un:
        C(a, u, p, y);
        break;
      case Qe:
        P(a, u, p, y);
        break;
      case En:
        a == null && D(u, p, y, S);
        break;
      case Pe:
        ge(
          a,
          u,
          p,
          y,
          _,
          m,
          S,
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
          S,
          b,
          v
        ) : E & 6 ? ft(
          a,
          u,
          p,
          y,
          _,
          m,
          S,
          b,
          v
        ) : (E & 64 || E & 128) && g.process(
          a,
          u,
          p,
          y,
          _,
          m,
          S,
          b,
          v,
          ht
        );
    }
    M != null && _ ? wt(M, a && a.ref, m, u || a, !u) : M == null && a && a.ref != null && wt(a.ref, null, m, a, !0);
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
  }, X = ({ el: a, anchor: u }, p, y) => {
    let _;
    for (; a && a !== u; )
      _ = x(a), r(a, p, y), a = _;
    r(u, p, y);
  }, R = ({ el: a, anchor: u }) => {
    let p;
    for (; a && a !== u; )
      p = x(a), s(a), a = p;
    s(u);
  }, F = (a, u, p, y, _, m, S, b, v) => {
    if (u.type === "svg" ? S = "svg" : u.type === "math" && (S = "mathml"), a == null)
      q(
        u,
        p,
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
        g && g._beginPatch(), ut(
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
  }, q = (a, u, p, y, _, m, S, b) => {
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
      xn(a, m),
      S,
      b
    ), I && ze(a, null, y, "created"), te(v, a, a.scopeId, S, y), M) {
      for (const V in M)
        V !== "value" && !St(V) && i(v, V, null, M[V], m, y);
      "value" in M && i(v, "value", null, M.value, m), (g = M.onVnodeBeforeMount) && Se(g, y, a);
    }
    I && ze(a, null, y, "beforeMount");
    const O = Io(_, A);
    O && A.beforeEnter(v), r(v, u, p), ((g = M && M.onVnodeMounted) || O || I) && ce(() => {
      g && Se(g, y, a), O && A.enter(v), I && ze(a, null, y, "mounted");
    }, _);
  }, te = (a, u, p, y, _) => {
    if (p && T(a, p), y)
      for (let m = 0; m < y.length; m++)
        T(a, y[m]);
    if (_) {
      let m = _.subTree;
      if (u === m || Fs(m.type) && (m.ssContent === u || m.ssFallback === u)) {
        const S = _.vnode;
        te(
          a,
          S,
          S.scopeId,
          S.slotScopeIds,
          _.parent
        );
      }
    }
  }, z = (a, u, p, y, _, m, S, b, v = 0) => {
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
        S,
        b
      );
    }
  }, ut = (a, u, p, y, _, m, S) => {
    const b = u.el = a.el;
    let { patchFlag: v, dynamicChildren: g, dirs: M } = u;
    v |= a.patchFlag & 16;
    const E = a.props || Y, A = u.props || Y;
    let I;
    if (p && We(p, !1), (I = A.onVnodeBeforeUpdate) && Se(I, p, u, a), M && ze(u, a, p, "beforeUpdate"), p && We(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    g && (!a.dynamicChildren || a.dynamicChildren.length !== g.length) && (v = 0, S = !1, g = null), (E.innerHTML && A.innerHTML == null || E.textContent && A.textContent == null) && d(b, ""), g ? ue(
      a.dynamicChildren,
      g,
      b,
      p,
      y,
      xn(u, _),
      m
    ) : S || Ke(
      a,
      u,
      b,
      null,
      p,
      y,
      xn(u, _),
      m,
      !1
    ), v > 0) {
      if (v & 16)
        fe(b, E, A, p, _);
      else if (v & 2 && E.class !== A.class && i(b, "class", null, A.class, _), v & 4 && i(b, "style", E.style, A.style, _), v & 8) {
        const O = u.dynamicProps;
        for (let V = 0; V < O.length; V++) {
          const j = O[V], Z = E[j], ee = A[j];
          (ee !== Z || j === "value") && i(b, j, Z, ee, _, p);
        }
      }
      v & 1 && a.children !== u.children && d(b, u.children);
    } else !S && g == null && fe(b, E, A, p, _);
    ((I = A.onVnodeUpdated) || M) && ce(() => {
      I && Se(I, p, u, a), M && ze(u, a, p, "updated");
    }, y);
  }, ue = (a, u, p, y, _, m, S) => {
    for (let b = 0; b < u.length; b++) {
      const v = a[b], g = u[b], M = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === Pe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_t(v, g) || // - In the case of a component, it could contain anything.
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
        S,
        !0
      );
    }
  }, fe = (a, u, p, y, _) => {
    if (u !== p) {
      if (u !== Y)
        for (const m in u)
          !St(m) && !(m in p) && i(
            a,
            m,
            u[m],
            null,
            _,
            y
          );
      for (const m in p) {
        if (St(m)) continue;
        const S = p[m], b = u[m];
        S !== b && m !== "value" && i(a, m, b, S, _, y);
      }
      "value" in p && i(a, "value", u.value, p.value, _);
    }
  }, ge = (a, u, p, y, _, m, S, b, v) => {
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
      S,
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
      S,
      b
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || _ && u === _.subTree) && $s(
      a,
      u,
      !0
      /* shallow */
    )) : Ke(
      a,
      u,
      p,
      M,
      _,
      m,
      S,
      b,
      v
    );
  }, ft = (a, u, p, y, _, m, S, b, v) => {
    u.slotScopeIds = b, a == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      p,
      y,
      S,
      v
    ) : _e(
      u,
      p,
      y,
      _,
      m,
      S,
      v
    ) : dn(a, u, v);
  }, _e = (a, u, p, y, _, m, S) => {
    const b = a.component = Vo(
      a,
      y,
      _
    );
    if (As(a) && (b.ctx.renderer = ht), Uo(b, !1, S), b.asyncDep) {
      if (_ && _.registerDep(b, W, S), !a.el) {
        const v = b.subTree = Ze(Qe);
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
        S
      );
  }, dn = (a, u, p) => {
    const y = u.component = a.component;
    if (vo(a, u, p))
      if (y.asyncDep && !y.asyncResolved) {
        $e(y, u, p);
        return;
      } else
        y.next = u, y.update();
    else
      u.el = a.el, y.vnode = u;
  }, W = (a, u, p, y, _, m, S) => {
    const b = () => {
      if (a.isMounted) {
        let { next: E, bu: A, u: I, parent: O, vnode: V } = a;
        {
          const ve = Gs(a);
          if (ve) {
            E && (E.el = V.el, $e(a, E, S)), ve.asyncDep.then(() => {
              ce(() => {
                a.isUnmounted || g();
              }, _);
            });
            return;
          }
        }
        let j = E, Z;
        We(a, !1), E ? (E.el = V.el, $e(a, E, S)) : E = V, A && mn(A), (Z = E.props && E.props.onVnodeBeforeUpdate) && Se(Z, O, E, V), We(a, !0);
        const ee = wr(a), ye = a.subTree;
        a.subTree = ee, w(
          ye,
          ee,
          // parent may have changed if it's in a teleport
          h(ye.el),
          // anchor may have changed if it's in a fragment
          Ft(ye),
          a,
          _,
          m
        ), E.el = ee.el, j === null && bo(a, ee.el), I && ce(I, _), (Z = E.props && E.props.onVnodeUpdated) && ce(
          () => Se(Z, O, E, V),
          _
        );
      } else {
        let E;
        const { el: A, props: I } = u, { bm: O, m: V, parent: j, root: Z, type: ee } = a, ye = Tt(u);
        We(a, !1), O && mn(O), !ye && (E = I && I.onVnodeBeforeMount) && Se(E, j, u), We(a, !0);
        {
          Z.ce && Z.ce._hasShadowRoot() && Z.ce._injectChildStyle(
            ee,
            a.parent ? a.parent.type : void 0
          );
          const ve = a.subTree = wr(a);
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
            () => Se(E, j, ve),
            _
          );
        }
        (u.shapeFlag & 256 || j && Tt(j.vnode) && j.vnode.shapeFlag & 256) && a.a && ce(a.a, _), a.isMounted = !0, u = p = y = null;
      }
    };
    a.scope.on();
    const v = a.effect = new Ci(b);
    a.scope.off();
    const g = a.update = v.run.bind(v), M = a.job = v.runIfDirty.bind(v);
    M.i = a, M.id = a.uid, v.scheduler = () => bs(M), We(a, !0), g();
  }, $e = (a, u, p) => {
    u.component = a;
    const y = a.vnode.props;
    a.vnode = u, a.next = null, xo(a, u.props, y, p), Ao(a, u.children, p), it(), Sr(a), ot();
  }, Ke = (a, u, p, y, _, m, S, b, v = !1) => {
    const g = a && a.children, M = a ? a.shapeFlag : 0, E = u.children, { patchFlag: A, shapeFlag: I } = u;
    if (A > 0) {
      if (A & 128) {
        fr(
          g,
          E,
          p,
          y,
          _,
          m,
          S,
          b,
          v
        );
        return;
      } else if (A & 256) {
        dt(
          g,
          E,
          p,
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
    I & 8 ? (M & 16 && pt(g, _, m), E !== g && d(p, E)) : M & 16 ? I & 16 ? fr(
      g,
      E,
      p,
      y,
      _,
      m,
      S,
      b,
      v
    ) : pt(g, _, m, !0) : (M & 8 && d(p, ""), I & 16 && z(
      E,
      p,
      y,
      _,
      m,
      S,
      b,
      v
    ));
  }, dt = (a, u, p, y, _, m, S, b, v) => {
    a = a || rt, u = u || rt;
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
        S,
        b,
        v
      );
    }
    g > M ? pt(
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
      S,
      b,
      v,
      E
    );
  }, fr = (a, u, p, y, _, m, S, b, v) => {
    let g = 0;
    const M = u.length;
    let E = a.length - 1, A = M - 1;
    for (; g <= E && g <= A; ) {
      const I = a[g], O = u[g] = v ? Oe(u[g]) : Te(u[g]);
      if (_t(I, O))
        w(
          I,
          O,
          p,
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
      const I = a[E], O = u[A] = v ? Oe(u[A]) : Te(u[A]);
      if (_t(I, O))
        w(
          I,
          O,
          p,
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
        const I = A + 1, O = I < M ? u[I].el : y;
        for (; g <= A; )
          w(
            null,
            u[g] = v ? Oe(u[g]) : Te(u[g]),
            p,
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
        Ge(a[g], _, m, !0), g++;
    else {
      const I = g, O = g, V = /* @__PURE__ */ new Map();
      for (g = O; g <= A; g++) {
        const le = u[g] = v ? Oe(u[g]) : Te(u[g]);
        le.key != null && V.set(le.key, g);
      }
      let j, Z = 0;
      const ee = A - O + 1;
      let ye = !1, ve = 0;
      const mt = new Array(ee);
      for (g = 0; g < ee; g++) mt[g] = 0;
      for (g = I; g <= E; g++) {
        const le = a[g];
        if (Z >= ee) {
          Ge(le, _, m, !0);
          continue;
        }
        let be;
        if (le.key != null)
          be = V.get(le.key);
        else
          for (j = O; j <= A; j++)
            if (mt[j - O] === 0 && _t(le, u[j])) {
              be = j;
              break;
            }
        be === void 0 ? Ge(le, _, m, !0) : (mt[be - O] = g + 1, be >= ve ? ve = be : ye = !0, w(
          le,
          u[be],
          p,
          null,
          _,
          m,
          S,
          b,
          v
        ), Z++);
      }
      const hr = ye ? Ro(mt) : rt;
      for (j = hr.length - 1, g = ee - 1; g >= 0; g--) {
        const le = O + g, be = u[le], mr = u[le + 1], gr = le + 1 < M ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          mr.el || js(mr)
        ) : y;
        mt[g] === 0 ? w(
          null,
          be,
          p,
          gr,
          _,
          m,
          S,
          b,
          v
        ) : ye && (j < 0 || g !== hr[j] ? jt(be, p, gr, 2) : j--);
      }
    }
  }, jt = (a, u, p, y, _ = null) => {
    const { el: m, type: S, transition: b, children: v, shapeFlag: g } = a;
    if (g & 6) {
      jt(a.component.subTree, u, p, y);
      return;
    }
    if (g & 128) {
      a.suspense.move(u, p, y);
      return;
    }
    if (g & 64) {
      S.move(a, u, p, ht);
      return;
    }
    if (S === Pe) {
      r(m, u, p);
      for (let E = 0; E < v.length; E++)
        jt(v[E], u, p, y);
      r(a.anchor, u, p);
      return;
    }
    if (S === En) {
      X(a, u, p);
      return;
    }
    if (y !== 2 && g & 1 && b)
      if (y === 0)
        b.persisted && !m[bn] ? r(m, u, p) : (b.beforeEnter(m), r(m, u, p), ce(() => b.enter(m), _));
      else {
        const { leave: E, delayLeave: A, afterLeave: I } = b, O = () => {
          a.ctx.isUnmounted ? s(m) : r(m, u, p);
        }, V = () => {
          const j = m._isLeaving || !!m[bn];
          m._isLeaving && m[bn](
            !0
            /* cancelled */
          ), b.persisted && !j ? O() : E(m, () => {
            O(), I && I();
          });
        };
        A ? A(m, O, V) : V();
      }
    else
      r(m, u, p);
  }, Ge = (a, u, p, y = !1, _ = !1) => {
    const {
      type: m,
      props: S,
      ref: b,
      children: v,
      dynamicChildren: g,
      shapeFlag: M,
      patchFlag: E,
      dirs: A,
      cacheIndex: I,
      memo: O
    } = a;
    if (E === -2 && (_ = !1), b != null && (it(), wt(b, null, p, a, !0), ot()), I != null && (u.renderCache[I] = void 0), M & 256) {
      u.ctx.deactivate(a);
      return;
    }
    const V = M & 1 && A, j = !Tt(a);
    let Z;
    if (j && (Z = S && S.onVnodeBeforeUnmount) && Se(Z, u, a), M & 6)
      ui(a.component, p, y);
    else {
      if (M & 128) {
        a.suspense.unmount(p, y);
        return;
      }
      V && ze(a, null, u, "beforeUnmount"), M & 64 ? a.type.remove(
        a,
        u,
        p,
        ht,
        y
      ) : g && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !g.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== Pe || E > 0 && E & 64) ? pt(
        g,
        u,
        p,
        !1,
        !0
      ) : (m === Pe && E & 384 || !_ && M & 16) && pt(v, u, p), y && dr(a);
    }
    const ee = O != null && I == null;
    (j && (Z = S && S.onVnodeUnmounted) || V || ee) && ce(() => {
      Z && Se(Z, u, a), V && ze(a, null, u, "unmounted"), ee && (a.el = null);
    }, p);
  }, dr = (a) => {
    const { type: u, el: p, anchor: y, transition: _ } = a;
    if (u === Pe) {
      ai(p, y);
      return;
    }
    if (u === En) {
      R(a);
      return;
    }
    const m = () => {
      s(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (a.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: S, delayLeave: b } = _, v = () => S(p, m);
      b ? b(a.el, m, v) : v();
    } else
      m();
  }, ai = (a, u) => {
    let p;
    for (; a !== u; )
      p = x(a), s(a), a = p;
    s(u);
  }, ui = (a, u, p) => {
    const { bum: y, scope: _, job: m, subTree: S, um: b, m: v, a: g } = a;
    Cr(v), Cr(g), y && mn(y), _.stop(), m && (m.flags |= 8, Ge(S, a, u, p)), b && ce(b, u), ce(() => {
      a.isUnmounted = !0;
    }, u);
  }, pt = (a, u, p, y = !1, _ = !1, m = 0) => {
    for (let S = m; S < a.length; S++)
      Ge(a[S], u, p, y, _);
  }, Ft = (a) => {
    if (a.shapeFlag & 6)
      return Ft(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const u = x(a.anchor || a.el), p = u && u[io];
    return p ? x(p) : u;
  };
  let pn = !1;
  const pr = (a, u, p) => {
    let y;
    a == null ? u._vnode && (Ge(u._vnode, null, null, !0), y = u._vnode.component) : w(
      u._vnode || null,
      a,
      u,
      null,
      null,
      null,
      p
    ), u._vnode = a, pn || (pn = !0, Sr(y), xs(), pn = !1);
  }, ht = {
    p: w,
    um: Ge,
    m: jt,
    r: dr,
    mt: _e,
    mc: z,
    pc: Ke,
    pbc: ue,
    n: Ft,
    o: e
  };
  return {
    render: pr,
    hydrate: void 0,
    createApp: po(pr)
  };
}
function xn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function We({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Io(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function $s(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (N(r) && N(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Oe(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && $s(o, l)), l.type === un && (l.patchFlag === -1 && (l = s[i] = Oe(l)), l.el = o.el), l.type === Qe && !l.el && (l.el = o.el);
    }
}
function Ro(e) {
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
function Gs(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Gs(t);
}
function Cr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function js(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? js(t.subTree) : null;
}
const Fs = (e) => e.__isSuspense;
function Po(e, t) {
  t && t.pendingBranch ? N(e) ? t.effects.push(...e) : t.effects.push(e) : ro(e);
}
const Pe = /* @__PURE__ */ Symbol.for("v-fgt"), un = /* @__PURE__ */ Symbol.for("v-txt"), Qe = /* @__PURE__ */ Symbol.for("v-cmt"), En = /* @__PURE__ */ Symbol.for("v-stc"), Xe = [];
let ae = null;
function Oo(e = !1) {
  Xe.push(ae = e ? null : []);
}
function Vs() {
  Xe.pop(), ae = Xe[Xe.length - 1] || null;
}
let Pt = 1;
function Mr(e, t = !1) {
  Pt += e, e < 0 && ae && t && (ae.hasOnce = !0);
}
function No(e) {
  return e.dynamicChildren = Pt > 0 ? ae || rt : null, Vs(), Pt > 0 && ae && ae.push(e), e;
}
function Lo(e, t, n, r, s, i) {
  return No(
    J(
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
function Us(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function _t(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Hs = ({ key: e }) => e ?? null, kt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Q(e) || /* @__PURE__ */ pe(e) || k(e) ? { i: Le, r: e, k: t, f: !!n } : e : null);
function J(e, t = null, n = null, r = 0, s = null, i = e === Pe ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Hs(t),
    ref: t && kt(t),
    scopeId: ws,
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
  return l ? (Yt(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= Q(n) ? 8 : 16), Pt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ae && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ae.push(c), c;
}
const Ze = Do;
function Do(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === ao) && (e = Qe), Us(e)) {
    const l = lt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Yt(l, n), Pt > 0 && !i && ae && (l.shapeFlag & 6 ? ae[ae.indexOf(e)] = l : ae.push(l)), l.patchFlag = -2, l;
  }
  if (Ko(e) && (e = e.__vccOpts), t) {
    t = $o(t);
    let { class: l, style: c } = t;
    l && !Q(l) && (t.class = Jn(l)), K(c) && (/* @__PURE__ */ rr(c) && !N(c) && (c = Ce({}, c)), t.style = Wn(c));
  }
  const o = Q(e) ? 1 : Fs(e) ? 128 : cn(e) ? 64 : K(e) ? 4 : k(e) ? 2 : 0;
  return J(
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
function $o(e) {
  return e ? /* @__PURE__ */ rr(e) || Ps(e) ? Ce({}, e) : e : null;
}
function lt(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: c } = e, f = t ? Go(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Hs(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? N(i) ? i.concat(kt(t)) : [i, kt(t)] : kt(t)
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
    ssContent: e.ssContent && lt(e.ssContent),
    ssFallback: e.ssFallback && lt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && sr(
    d,
    c.clone(d)
  ), d;
}
function ks(e = " ", t = 0) {
  return Ze(un, null, e, t);
}
function Te(e) {
  return e == null || typeof e == "boolean" ? Ze(Qe) : N(e) ? Ze(
    Pe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Us(e) ? Oe(e) : Ze(un, null, String(e));
}
function Oe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : lt(e);
}
function Yt(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (N(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Yt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Ps(t) ? t._ctx = Le : s === 3 && Le && (Le.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (k(t)) {
    if (r & 65) {
      Yt(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Le }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [ks(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Go(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Jn([t.class, r.class]));
      else if (s === "style")
        t.style = Wn([t.style, r.style]);
      else if (nn(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(N(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !rn(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Se(e, t, n, r = null) {
  Be(e, t, 7, [
    n,
    r
  ]);
}
const jo = Cs();
let Fo = 0;
function Vo(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || jo, i = {
    uid: Fo++,
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
    scope: new Ai(
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
    propsOptions: Eo(r, s),
    emitsOptions: go(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Y,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Y,
    data: Y,
    props: Y,
    attrs: Y,
    slots: Y,
    refs: Y,
    setupState: Y,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = mo.bind(null, i), e.ce && e.ce(i), i;
}
let Xt = null, Zt, Ot;
{
  const e = on(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  Zt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Xt = n
  ), Ot = t(
    "__VUE_SSR_SETTERS__",
    (n) => n
  );
}
const Bs = (e) => {
  const t = Xt;
  return Zt(e), e.scope.on(), () => {
    e.scope.off(), Zt(t);
  };
}, Ir = () => {
  Xt && Xt.scope.off(), Zt(null);
};
function Ks(e) {
  return e.vnode.shapeFlag & 4;
}
function Uo(e, t = !1, n = !1) {
  t && Ot(t);
  const { props: r, children: s } = e.vnode, i = Ks(e);
  So(e, r, i, t), To(e, s, n || t);
  const o = i ? Ho(e, t) : void 0;
  return t && Ot(!1), o;
}
function Ho(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, uo);
  const { setup: r } = n;
  if (r) {
    it();
    const s = e.setupContext = r.length > 1 ? Bo(e) : null, i = Bs(e), o = $t(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = Qr(o);
    if (ot(), i(), (l || e.sp) && !Tt(e) && co(e), l) {
      if (o.then(Ir, Ir), t)
        return o.then((c) => {
          Ot(!0);
          try {
            Rr(e, c, t);
          } finally {
            Ot(!1);
          }
        }).catch((c) => {
          ln(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Rr(e, o);
  } else
    zs(e);
}
function Rr(e, t, n) {
  k(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) && (e.setupState = ys(t)), zs(e);
}
function zs(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Kn);
}
const ko = {
  get(e, t) {
    return re(e, "get", ""), e[t];
  }
};
function Bo(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ko),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function lr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ys(Ji(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in At)
        return At[n](e);
    },
    has(t, n) {
      return n in t || n in At;
    }
  })) : e.proxy;
}
function Ko(e) {
  return k(e) && "__vccOpts" in e;
}
const zo = "3.5.41";
let jn;
const Pr = typeof window < "u" && window.trustedTypes;
if (Pr)
  try {
    jn = /* @__PURE__ */ Pr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ws = jn ? (e) => jn.createHTML(e) : (e) => e, Wo = "http://www.w3.org/2000/svg", Jo = "http://www.w3.org/1998/Math/MathML", Re = typeof document < "u" ? document : null, Or = Re && /* @__PURE__ */ Re.createElement("template"), Yo = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Re.createElementNS(Wo, e) : t === "mathml" ? Re.createElementNS(Jo, e) : n ? Re.createElement(e, { is: n }) : Re.createElement(e);
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
      Or.innerHTML = Ws(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Or.content;
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
}, Xo = /* @__PURE__ */ Symbol("_vtc");
function Zo(e, t, n) {
  const r = e[Xo];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Nr = /* @__PURE__ */ Symbol("_vod"), Qo = /* @__PURE__ */ Symbol("_vsh"), qo = /* @__PURE__ */ Symbol(""), el = /(?:^|;)\s*display\s*:/;
function tl(e, t, n) {
  const r = e.style, s = Q(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (Q(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && vt(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && vt(r, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? rl(
        e,
        o,
        !Q(t) && t ? t[o] : void 0,
        l
      ) || vt(r, o, l) : vt(r, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = r[qo];
      o && (n += ";" + o), r.cssText = n, i = el.test(n);
    }
  } else t && e.removeAttribute("style");
  Nr in e && (e[Nr] = i ? r.display : "", e[Qo] && (r.display = "none"));
}
const Lr = /\s*!important$/;
function vt(e, t, n) {
  if (N(n))
    n.forEach((r) => vt(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = nl(e, t);
    Lr.test(n) ? e.setProperty(
      qe(r),
      n.replace(Lr, ""),
      "important"
    ) : e[r] = n;
  }
}
const Dr = ["Webkit", "Moz", "ms"], wn = {};
function nl(e, t) {
  const n = wn[t];
  if (n)
    return n;
  let r = he(t);
  if (r !== "filter" && r in e)
    return wn[t] = r;
  r = es(r);
  for (let s = 0; s < Dr.length; s++) {
    const i = Dr[s] + r;
    if (i in e)
      return wn[t] = i;
  }
  return t;
}
function rl(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Q(r) && n === r;
}
const $r = "http://www.w3.org/1999/xlink";
function Gr(e, t, n, r, s, i = wi(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS($r, t.slice(6, t.length)) : e.setAttributeNS($r, t, n) : n == null || i && !ns(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ae(n) ? String(n) : n
  );
}
function jr(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ws(n) : n);
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
    l === "boolean" ? n = ns(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function sl(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function il(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Fr = /* @__PURE__ */ Symbol("_vei");
function ol(e, t, n, r, s = null) {
  const i = e[Fr] || (e[Fr] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = al(t);
    if (r) {
      const f = i[t] = dl(
        r,
        s
      );
      sl(e, l, f, c);
    } else o && (il(e, l, o, c), i[t] = void 0);
  }
}
const ll = /(Once|Passive|Capture)$/, cl = /^on:?(?:Once|Passive|Capture)$/;
function al(e) {
  let t, n;
  for (; (n = e.match(ll)) && !cl.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : qe(e.slice(2)), t];
}
let Tn = 0;
const ul = /* @__PURE__ */ Promise.resolve(), fl = () => Tn || (ul.then(() => Tn = 0), Tn = Date.now());
function dl(e, t) {
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
        f && Be(
          f,
          t,
          5,
          l
        );
      }
    } else
      Be(
        s,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = fl(), n;
}
const Vr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, pl = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Zo(e, r, o) : t === "style" ? tl(e, n, r) : nn(t) ? rn(t) || ol(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : hl(e, t, r, o)) ? (jr(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Gr(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ml(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Q(r))) ? jr(e, he(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Gr(e, t, r, o));
};
function hl(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Vr(t) && k(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Vr(t) && Q(n) ? !1 : t in e;
}
function ml(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = he(t);
  return Array.isArray(n) ? n.some((s) => he(s) === r) : Object.keys(n).some((s) => he(s) === r);
}
const gl = /* @__PURE__ */ Ce({ patchProp: pl }, Yo);
let Ur;
function _l() {
  return Ur || (Ur = Co(gl));
}
const yl = ((...e) => {
  const t = _l().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = bl(r);
    if (!s) return;
    const i = t._component;
    !k(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, vl(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function vl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function bl(e) {
  return Q(e) ? document.querySelector(e) : e;
}
const Sl = "tavern_multi_tts_cache", de = "audio_cache", xl = 1, Hr = 100, kr = 50 * 1024 * 1024;
function El(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
async function wl(e) {
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
function Tl() {
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
function Al(e, t) {
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
      const f = e.open(t, xl);
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
function Cl(e, t) {
  const n = Al(e, t);
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
async function Ml(e) {
  const t = await e.getAll();
  let n = t.reduce((i, o) => i + (o.blob?.size ?? 0), 0);
  if (t.length <= Hr && n <= kr)
    return;
  const r = [...t].sort((i, o) => i.created_at - o.created_at);
  let s = t.length;
  for (const i of r) {
    if (s <= Hr && n <= kr)
      break;
    await e.delete(i.key), s -= 1, n -= i.blob?.size ?? 0;
  }
}
function Il(e) {
  const t = e?.backend === "memory" ? Tl() : Cl(
    e?.indexedDB ?? indexedDB,
    e?.dbName ?? Sl
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
      }), await Ml(t);
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
const cr = Il({
  backend: typeof indexedDB > "u" ? "memory" : "indexeddb"
});
function Rl(e) {
  return cr.get(e);
}
function Pl(e, t) {
  return cr.set(e, t);
}
function Ol() {
  return cr.clear();
}
let Fe = null, Bt = null;
function Js() {
  Fe && (Fe.pause(), Bt?.());
}
function Nl(e, t, n, r, s) {
  const i = URL.createObjectURL(e), o = new Audio(i);
  let l = "paused";
  const c = () => {
    URL.revokeObjectURL(i), Fe === o && (Fe = null, Bt = null);
  }, f = () => {
    Fe && Fe !== o && (Fe.pause(), Bt?.()), Fe = o, Bt = c;
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
function Ys(e) {
  return [...e].map((n) => n.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(n) ? "_" : n).join("").trim() || "audio.mp3";
}
function Ll(e, t, n = "mp3") {
  return Ys(`tavern_multi_tts_${e}_${t}.${n}`);
}
function Dl(e, t) {
  const n = Ys(t), r = URL.createObjectURL(e), s = URL.revokeObjectURL.bind(URL), i = document.createElement("a");
  i.href = r, i.download = n, document.body.appendChild(i), i.click(), i.remove(), window.setTimeout(() => s(r), 0);
}
const $l = "Tavern Multi-TTS", An = "tavern_multi_tts", Gl = "0.1.0", Cn = "tavern-multi-tts-root", se = "[Tavern Multi-TTS]", jl = 2, Fl = [
  "speech-02-hd",
  "speech-02-turbo",
  "speech-2.8-hd",
  "speech-2.8-turbo",
  "speech-2.6-hd",
  "speech-2.6-turbo"
], Br = [
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
`), Gt = {
  enabled: !0,
  testLanguage: "ja",
  model: "speech-2.8-hd",
  prefetchMode: "auto_all",
  injectRole: "system"
};
function et(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function B(e, t) {
  return typeof e == "string" ? e : t;
}
function Mn(e, t) {
  return typeof e == "boolean" ? e : t;
}
function xe(e, t, n, r, s = !1) {
  const i = typeof e == "number" ? e : Number(e);
  if (!Number.isFinite(i))
    return r;
  const o = s ? Math.round(i) : i;
  return Math.min(n, Math.max(t, o));
}
function Vl(e) {
  return e === "local_gsvi" ? "local_gsvi" : "minimax";
}
function Ul(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Hl(e) {
  return Fl.includes(String(e)) ? e : Gt.model;
}
function kl(e) {
  return e === "manual" || e === "auto_first_n" || e === "auto_all" ? e : Gt.prefetchMode;
}
function Bl(e) {
  return e === "user" || e === "assistant" || e === "system" ? e : Gt.injectRole;
}
function Kl(e) {
  return e === "zh" || e === "en" || e === "ja" ? e : Gt.testLanguage;
}
function zl(e) {
  return e === "wav" ? "wav" : "mp3";
}
function Xs(e) {
  return Array.isArray(e) ? e.filter(et).map((t) => ({
    characterName: B(t.characterName, "").trim(),
    minimaxVoiceId: B(t.minimaxVoiceId, "").trim()
  })).filter((t) => t.characterName || t.minimaxVoiceId) : [];
}
function Wl(e) {
  return Array.isArray(e) ? e.filter(et).map((t) => ({
    name: B(t.name, "").trim(),
    mappings: Xs(t.mappings)
  })).filter((t) => t.name) : [];
}
function Zs(e) {
  return Array.isArray(e) ? e.filter(et).map((t) => ({
    characterName: B(t.characterName, "").trim(),
    gsviVoiceId: B(t.gsviVoiceId, "").trim(),
    gsviLanguage: B(t.gsviLanguage, "").trim(),
    gsviEmotion: B(t.gsviEmotion, "").trim()
  })).filter((t) => t.characterName || t.gsviVoiceId) : [];
}
function Jl(e) {
  return Array.isArray(e) ? e.filter(et).map((t) => ({
    name: B(t.name, "").trim(),
    mappings: Zs(t.mappings)
  })).filter((t) => t.name) : [];
}
function Nt(e) {
  const t = et(e) ? e : {};
  return {
    schemaVersion: jl,
    enabled: Mn(t.enabled, Gt.enabled),
    ttsEngine: Vl(t.ttsEngine),
    apiKey: B(t.apiKey, ""),
    groupId: B(t.groupId, ""),
    voiceId: B(t.voiceId, ""),
    voiceCatalogSelectedId: B(t.voiceCatalogSelectedId, ""),
    minimaxRegion: Ul(t.minimaxRegion),
    testLanguage: Kl(t.testLanguage),
    model: Hl(t.model),
    speed: xe(t.speed, 0.5, 2, 1),
    vol: xe(t.vol, 0, 10, 1),
    requestTimeoutMs: xe(t.requestTimeoutMs, 1e3, 3e4, 15e3, !0),
    maxConcurrency: xe(t.maxConcurrency, 1, 10, 3, !0),
    prefetchMode: kl(t.prefetchMode),
    prefetchFirstCount: xe(t.prefetchFirstCount, 1, 10, 2, !0),
    localGsviBaseUrl: B(t.localGsviBaseUrl, ""),
    localGsviAuthToken: B(t.localGsviAuthToken, ""),
    localGsviModel: B(t.localGsviModel, ""),
    localGsviFormat: zl(t.localGsviFormat),
    localGsviUseReferenceAudio: Mn(t.localGsviUseReferenceAudio, !1),
    localGsviCharacter: B(t.localGsviCharacter, ""),
    localGsviLanguage: B(t.localGsviLanguage, "ja"),
    localGsviEmotion: B(t.localGsviEmotion, ""),
    localGsviReferenceText: B(t.localGsviReferenceText, ""),
    localGsviTopK: xe(t.localGsviTopK, 1, 200, 20, !0),
    localGsviTopP: xe(t.localGsviTopP, 0, 1, 0.7),
    localGsviTemperature: xe(t.localGsviTemperature, 0, 2, 0.7),
    localGsviTextLang: B(t.localGsviTextLang, "多语种混合"),
    localGsviTextSplitMethod: B(t.localGsviTextSplitMethod, "按标点符号切"),
    localGsviBatchSize: xe(t.localGsviBatchSize, 1, 8, 1, !0),
    characterMappings: Xs(t.characterMappings),
    characterMappingPresets: Wl(t.characterMappingPresets),
    gsviCharacterMappings: Zs(t.gsviCharacterMappings),
    gsviCharacterMappingPresets: Jl(t.gsviCharacterMappingPresets),
    injectEnabled: Mn(t.injectEnabled, !0),
    injectDepth: xe(t.injectDepth, 0, 50, 1, !0),
    injectRole: Bl(t.injectRole),
    injectTemplate: B(t.injectTemplate, Br) || Br
  };
}
function Kr(e) {
  return et(e) ? "ttsEngine" in e || "characterMappings" in e || "localGsviBaseUrl" in e || "injectTemplate" in e || "groupId" in e : !1;
}
function Yl(e) {
  if (et(e) && Kr(e.settings))
    return Nt(e.settings);
  if (!Kr(e))
    throw new Error("导入内容不是可识别的旧 Tavern Multi-TTS 设置");
  return Nt(e);
}
function Xl(e) {
  return {
    engine: e.ttsEngine,
    minimaxMappings: e.characterMappings.filter((t) => t.characterName).length,
    gsviMappings: e.gsviCharacterMappings.filter((t) => t.characterName).length,
    injectEnabled: e.injectEnabled,
    hasMinimaxKey: !!e.apiKey.trim(),
    hasGsviToken: !!e.localGsviAuthToken.trim()
  };
}
function Zl(e, t, n = {}) {
  let r = !1, s = !1, i = null, o = null, l = null;
  function c() {
    return Nt(e.readRawSettings());
  }
  function f() {
    const w = c();
    return e.writeSettings(w), w;
  }
  function d() {
    if (r)
      return !0;
    const w = document.getElementById(Cn);
    w && w.remove();
    const C = e.findSettingsRoot();
    return C ? (l = document.createElement("div"), l.id = Cn, l.dataset.tavernMultiTts = "settings", C.appendChild(l), t.mount(l, c()), o = e.onPageHide(() => {
      h({ removeSettings: !1 });
    }), r = !0, n.startRuntime?.(), console.info(`${se} settings panel mounted`), !0) : !1;
  }
  function h(w) {
    n.stopRuntime?.(), n.stopPlayback?.(), i?.(), i = null, s = !1, o?.(), o = null, t.unmount(), (l ?? document.getElementById(Cn))?.remove(), l = null, r = !1, w.removeSettings && e.removeSettings();
  }
  function x() {
    r || s || (f(), !d() && (s = !0, i = e.onAppReady(() => {
      const w = s;
      s = !1;
      const C = i;
      i = null, C?.(), w && (d() || console.error(
        `${se} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`
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
    activate: x,
    disable() {
      h({ removeSettings: !1 }), console.info(`${se} disabled`);
    },
    destroy() {
      h({ removeSettings: !1 });
    },
    install() {
      f();
    },
    clean() {
      return h({ removeSettings: !0 }), console.info(`${se} settings cleaned`), n.clearCache?.();
    },
    delete() {
      return h({ removeSettings: !0 }), console.info(`${se} deleted`), n.clearCache?.();
    },
    updateSettings(w) {
      e.writeSettings(Nt(w)), n.syncRuntime?.();
    },
    setEnabled: T,
    setInjectEnabled: L,
    isActive() {
      return r;
    }
  };
}
function Ql() {
  return document.querySelector("#extensions_settings2") ?? document.querySelector("#extensions_settings");
}
class G extends Error {
  code;
  status;
  constructor(t, n, r) {
    super(t), this.name = "TtsRequestError", this.code = n, this.status = r;
  }
}
function ql(e) {
  return new G(`请求超时（${e}ms），请检查网络或增大超时时间`, "timeout");
}
function ec() {
  return new G("请求已取消", "cancelled");
}
async function Ct(e, t, n, r) {
  const s = new AbortController();
  let i = !1, o = !1, l = null;
  const c = () => {
    o || (o = !0, clearTimeout(d), h?.removeEventListener("abort", x));
  }, f = () => i && !h?.aborted ? ql(r) : ec(), d = setTimeout(() => {
    i = !0, s.abort("timeout");
  }, r), h = n.signal, x = () => {
    s.abort(h?.reason ?? "cancelled");
  };
  h && (h.aborted ? s.abort(h.reason ?? "cancelled") : h.addEventListener("abort", x, { once: !0 }));
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
      throw P instanceof G ? P : s.signal.aborted ? f() : P;
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
          throw new G(
            "服务返回的不是合法 JSON，请检查地址或稍后重试",
            "invalid_json"
          );
        }
      },
      blob: () => w(C.blob()),
      close: c
    };
  } catch (C) {
    throw c(), s.signal.removeEventListener("abort", T), C instanceof G ? C : s.signal.aborted ? f() : C;
  }
}
function Fn(e, t) {
  return `${e.replace(/\/+$/, "")}${t.startsWith("/") ? "" : "/"}${t}`;
}
function tc(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function nc(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const rc = /api[_-]?key|authorization|token|secret|cookie|password/i;
function Qt(e) {
  if (typeof e == "string")
    return e.length > 80 ? `${e.slice(0, 80)}…(len=${e.length})` : e;
  if (Array.isArray(e))
    return e.map((n) => Qt(n));
  if (!e || typeof e != "object")
    return e;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (rc.test(n)) {
      t[n] = "[redacted]";
      continue;
    }
    if (n === "text" || n === "input" || n === "referenceText" || n === "reference_text") {
      t[n] = typeof r == "string" ? `[text len=${r.length}]` : "[text]";
      continue;
    }
    t[n] = Qt(r);
  }
  return t;
}
function Qs(e, t, n) {
  if (n === void 0) {
    console.info(`${se} [${e}] ${t}`);
    return;
  }
  console.info(`${se} [${e}] ${t}`, Qt(n));
}
function Vn(e, t, n) {
  if (n === void 0) {
    console.warn(`${se} [${e}] ${t}`);
    return;
  }
  console.warn(`${se} [${e}] ${t}`, Qt(n));
}
const sc = ["v2", "v3", "v4", "v2Pro"];
function qs(e) {
  const t = e.trim();
  if (!t)
    return { modelName: "", version: "" };
  const n = t.lastIndexOf("|");
  return n < 0 ? { modelName: t, version: "" } : {
    modelName: t.slice(0, n).trim(),
    version: t.slice(n + 1).trim()
  };
}
function ic(e) {
  const t = e.trim().toLowerCase();
  return t === "v2pro" ? "v2Pro" : t === "v2" || t === "v3" || t === "v4" ? t : e.trim();
}
function oc(e) {
  const t = e.trim();
  return t ? {
    英文: "英语",
    日文: "日语",
    韩文: "韩语"
  }[t] ?? t : "多语种混合";
}
function lc(e) {
  const t = qs(e.modelId), n = t.modelName.trim(), r = ic(t.version) || "v2Pro";
  return {
    url: Fn(e.baseUrl.trim(), "/v1/audio/speech"),
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
        text_lang: oc(e.textLang),
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
function cc(e) {
  if (!e.baseUrl.trim())
    throw new G("请先填写 Local-GSVI 服务地址", "config");
  if (!e.modelId.trim())
    throw new G("请先填写或选择 Local-GSVI 模型（modelName|version）", "config");
  if (!e.language.trim() || !e.emotion.trim())
    throw new G(
      "GSVI 生成要求映射完整：语种(prompt_lang)/情绪(emotion)不能为空",
      "config"
    );
  if (!qs(e.modelId).modelName)
    throw new G("Local-GSVI 模型格式错误，期望 modelName|version", "config");
  if (!e.text.trim())
    throw new G("Local-GSVI 合成文本为空", "config");
}
function oe(e) {
  return typeof e == "object" && e !== null;
}
function ac(e) {
  const t = e.replace(/^data:audio\/[a-zA-Z0-9.+-]+;base64,/i, "").trim();
  return t.length >= 16 && /^[A-Za-z0-9+/=\r\n]+$/.test(t);
}
function ei(e) {
  return e.trim().match(/^data:audio\/[a-zA-Z0-9.+-]+;base64,(.+)$/i)?.[1] ?? e.trim();
}
function uc(e) {
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
    if (typeof i == "string" && ac(i))
      return ei(i);
  return null;
}
function fc(e) {
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
function dc(e) {
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
function pc(e) {
  const t = atob(ei(e)), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r += 1)
    n[r] = t.charCodeAt(r);
  return n;
}
function In(e) {
  const t = e?.trim() ?? "";
  return t ? { Authorization: `Bearer ${t}` } : {};
}
function hc(e) {
  const t = fetch;
  async function n(r, s, i, o, l) {
    const c = /^https?:\/\//i.test(s) ? s : Fn(r, s);
    let f = !1;
    try {
      f = tc(r) === new URL(c).origin;
    } catch {
      f = !1;
    }
    const d = await Ct(
      t,
      c,
      {
        method: "GET",
        headers: f ? In(i) : {},
        signal: l
      },
      o
    );
    if (!d.ok)
      throw new G(`下载 GSVI 输出失败：HTTP ${d.status}`, "http", d.status);
    return await d.blob();
  }
  return {
    id: "local_gsvi",
    async checkHealth(r) {
      if (r.engine !== "local_gsvi")
        throw new G("Local-GSVI 适配器收到了错误的引擎请求", "config");
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
        throw new G("Local-GSVI 适配器收到了错误的引擎请求", "config");
      const s = r.baseUrl.trim();
      if (!s)
        throw new G("请先填写 Local-GSVI 服务地址", "config");
      const i = [];
      for (const o of sc) {
        const l = Fn(s, `/models/${encodeURIComponent(o)}`);
        try {
          const c = await Ct(
            t,
            l,
            { method: "GET", headers: In(r.authToken), signal: r.signal },
            r.timeoutMs
          );
          if (!c.ok) {
            Vn("local_gsvi", `GET /models/${o} failed`, {
              status: c.status
            }), c.close();
            continue;
          }
          const f = await c.json(), d = oe(f) && oe(f.models) ? f.models : f;
          if (!oe(d))
            continue;
          Object.entries(d).forEach(([h, x]) => {
            !h || !oe(x) || i.push({
              id: `${h}|${o}`,
              name: `${h} [${o}]`,
              source: "gsvi_model",
              language: Object.keys(x).join(",")
            });
          });
        } catch (c) {
          if (c instanceof G && c.code === "cancelled")
            throw c;
          Vn("local_gsvi", `GET /models/${o} failed`);
        }
      }
      if (i.length === 0)
        throw new G(
          "未在 /models/{v2|v3|v4|v2Pro} 中解析到模型映射，请检查接口返回结构",
          "missing_audio"
        );
      return i.sort((o, l) => o.name.localeCompare(l.name));
    },
    async synthesize(r) {
      if (r.engine !== "local_gsvi")
        throw new G("Local-GSVI 适配器收到了错误的引擎请求", "config");
      cc(r);
      const s = lc(r), i = {
        "Content-Type": "application/json",
        ...In(r.authToken)
      };
      Qs("local_gsvi", "synthesize", {
        url: s.url,
        model: s.modelName,
        version: s.version,
        text: r.text
      });
      const o = await Ct(
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
        throw new G(
          `Local-GSVI 请求失败：HTTP ${o.status}`,
          "http",
          o.status
        );
      if ((o.headers.get("content-type")?.toLowerCase() ?? "").includes("application/json")) {
        const c = await o.json(), f = uc(c);
        if (f)
          return new Blob([Uint8Array.from(pc(f))], {
            type: r.format === "wav" ? "audio/wav" : "audio/mpeg"
          });
        const d = fc(c);
        if (d)
          return await n(
            r.baseUrl.trim(),
            d,
            r.authToken ?? "",
            r.timeoutMs,
            r.signal
          );
        throw new G(
          `Local-GSVI 未返回可用音频：${dc(c) || "JSON 响应中未找到音频"}`,
          "missing_audio"
        );
      }
      return await o.blob();
    }
  };
}
const mc = {
  international: {
    tts: "https://api.minimaxi.com/v1/t2a_v2",
    voice: "https://api.minimaxi.com/v1/get_voice"
  },
  beijing: {
    tts: "https://api-bj.minimaxi.com/v1/t2a_v2",
    voice: "https://api-bj.minimaxi.com/v1/get_voice"
  }
}, gc = /* @__PURE__ */ new Set([408, 409, 429, 500, 502, 503, 504]), _c = /* @__PURE__ */ new Set([1e3, 1001, 1002, 1039]), zr = 2, yc = "tavern_multi_tts_voice_catalog_v1", vc = 1440 * 60 * 1e3;
function qt(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function Un(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Wr(e) {
  return mc[Un(e)];
}
function ti(e, t) {
  return `${yc}:${e}:${t.trim()}`;
}
function bc(e) {
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
function Jr(e) {
  return `Bearer ${qt(e)}`;
}
function Sc(e) {
  const t = e.trim(), n = new Uint8Array(t.length / 2);
  for (let r = 0; r < t.length; r += 2)
    n[r / 2] = Number.parseInt(t.slice(r, r + 2), 16);
  return n;
}
function xc(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r += 1)
    n[r] = t.charCodeAt(r);
  return n;
}
function Ec(e) {
  const t = e.trim();
  return /^[0-9a-fA-F]+$/.test(t) && t.length % 2 === 0 ? Sc(t) : xc(t);
}
function wc(e, t) {
  const r = `${t ?? ""} ${e}`.toLowerCase(), s = r.includes("japanese") ? "Japanese" : r.includes("english") ? "English" : r.includes("chinese") ? "Chinese" : r.includes("korean") ? "Korean" : r.includes("french") ? "French" : r.includes("german") ? "German" : r.includes("spanish") ? "Spanish" : "Unknown", i = r.includes("female") || r.includes("女") || r.includes("lady") || r.includes("girl") ? "Female" : r.includes("male") || r.includes("男") || r.includes("man") || r.includes("boy") ? "Male" : "Unknown";
  return { language: s, gender: i };
}
function Tc(e, t) {
  const n = t.trim();
  if (!n)
    return null;
  try {
    const r = localStorage.getItem(ti(e, n));
    if (!r)
      return null;
    const s = JSON.parse(r);
    return !s?.expires_at || Date.now() > s.expires_at ? null : s.items ?? null;
  } catch {
    return null;
  }
}
function Ac(e, t, n) {
  const r = t.trim();
  r && localStorage.setItem(
    ti(e, r),
    JSON.stringify({
      expires_at: Date.now() + vc,
      items: n
    })
  );
}
function Cc(e) {
  const t = qt(e.apiKey), n = e.groupId.trim(), r = e.voiceId.trim();
  if (!t || !n || !r)
    throw new G("MiniMax 引擎缺少必要配置：API Key / Group ID / Voice ID", "config");
  if (!e.text.trim())
    throw new G("MiniMax 合成文本为空", "config");
}
function Mc(e) {
  return typeof e == "object" && e !== null;
}
function Ic(e, t) {
  return gc.has(e) || _c.has(t);
}
function Rc(e) {
  const t = fetch;
  return {
    id: "minimax",
    async checkHealth(n) {
      if (n.engine !== "minimax")
        throw new G("MiniMax 适配器收到了错误的引擎请求", "config");
      if (!qt(n.apiKey))
        return { ok: !1, message: "请先填写 MiniMax API Key" };
      try {
        return await this.listVoices({ ...n, forceRefresh: !0 }), { ok: !0, message: "MiniMax 服务可用" };
      } catch (s) {
        return { ok: !1, message: s instanceof Error ? s.message : String(s) };
      }
    },
    async listVoices(n) {
      if (n.engine !== "minimax")
        throw new G("MiniMax 适配器收到了错误的引擎请求", "config");
      const r = qt(n.apiKey);
      if (!r)
        throw new G("请先填写 API Key", "config");
      const s = Un(n.region);
      if (!n.forceRefresh) {
        const h = Tc(s, n.groupId);
        if (h && h.length > 0)
          return h;
      }
      const i = Wr(s).voice, o = await Ct(
        t,
        i,
        {
          method: "POST",
          headers: {
            Authorization: Jr(r),
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ voice_type: "all" }),
          signal: n.signal
        },
        n.timeoutMs
      ), c = await o.json();
      if (!o.ok || (c.base_resp?.status_code ?? 0) !== 0)
        throw new G(
          c.base_resp?.status_msg ?? o.statusText ?? "拉取音色列表失败",
          "http",
          o.status
        );
      const f = [], d = (h, x = []) => {
        x.forEach((T) => {
          const L = wc(T.voice_id, T.voice_name);
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
      return d("system", c.system_voice ?? []), d("voice_cloning", c.voice_cloning ?? []), d("voice_generation", c.voice_generation ?? []), Ac(s, n.groupId, f), f;
    },
    async synthesize(n) {
      if (n.engine !== "minimax")
        throw new G("MiniMax 适配器收到了错误的引擎请求", "config");
      Cc(n);
      const r = bc(n), s = Wr(n.region).tts, i = {
        Authorization: Jr(n.apiKey),
        "Content-Type": "application/json"
      };
      Qs("minimax", "synthesize", {
        model: r.model,
        voiceId: r.voice_setting.voice_id,
        region: Un(n.region),
        groupId: n.groupId.trim(),
        text: n.text
      });
      let o = null;
      for (let l = 0; l <= zr; l += 1) {
        const c = await Ct(
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
        if (!Mc(f))
          throw new G("MiniMax 响应结构无效", "invalid_json");
        const d = f;
        if (!c.ok || (d.base_resp?.status_code ?? 0) !== 0) {
          const T = d.base_resp?.status_code ?? c.status, L = d.base_resp?.status_msg ?? c.statusText ?? "unknown error";
          if (o = `MiniMax 请求失败：code=${T}, msg=${L}`, Ic(c.status, T) && l < zr) {
            Vn("minimax", "retryable synthesize failure", {
              status: c.status,
              attempt: l
            }), await nc(250 * (l + 1));
            continue;
          }
          throw new G(o, "http", c.status);
        }
        const h = d.data?.audio ?? d.data?.audio_file ?? d.audio_file;
        if (!h)
          throw new G("MiniMax 响应中未找到音频字段", "missing_audio");
        const x = Ec(h);
        return new Blob([Uint8Array.from(x)], { type: "audio/mpeg" });
      }
      throw new G(o ?? "MiniMax 请求失败：未知错误", "http");
    }
  };
}
function Pc(e) {
  return e === "local_gsvi" ? hc() : Rc();
}
const Hn = "tavern_multi_tts_say_rule", Oc = 1, Nc = {
  system: 0,
  user: 1,
  assistant: 2
};
function ni(e) {
  const t = e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.characterMappings, n = [];
  for (const r of t) {
    const s = r.characterName.trim();
    s && !n.includes(s) && n.push(s);
  }
  return n;
}
function Lc(e) {
  const t = ni(e);
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
function Dc(e) {
  const t = ni(e).join("、") || "（未配置角色映射）";
  return `${e.injectTemplate.replaceAll("${target_characters}", t).replaceAll("${mapped_characters}", t)}

${Lc(e)}`;
}
function Rn(e, t) {
  return !t.enabled || !t.injectEnabled ? (e.deleteExtensionPrompt(Hn), { applied: !1 }) : (e.setExtensionPrompt(
    Hn,
    Dc(t),
    Oc,
    t.injectDepth,
    !1,
    Nc[t.injectRole]
  ), { applied: !0, depth: t.injectDepth, role: t.injectRole });
}
function $c(e) {
  e.deleteExtensionPrompt(Hn);
}
const Yr = /<say(?:\s+char\s*=\s*(?:"([^"]*)"|“([^”]*)”))?\s*>([\s\S]*?)<\/say>/gi;
function Gc(e) {
  const t = new RegExp(Yr.source, Yr.flags), n = [];
  let r, s = 0;
  for (; (r = t.exec(e)) !== null; ) {
    const i = (r[1] ?? r[2])?.trim(), o = r[3].trim();
    o && (n.push({ index: s, text: o, ...i ? { char: i } : {} }), s += 1);
  }
  return n;
}
const jc = /* @__PURE__ */ new Set([
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
]), ri = /\(([a-z-]+)\)/gi, Fc = /\([a-z-]+\)/gi;
function ar(e) {
  return e.replace(/\s{2,}/g, " ").trim();
}
function Vc(e) {
  return ar(
    e.replace(ri, (t, n) => {
      const r = String(n).toLowerCase();
      return jc.has(r) ? `(${r})` : "";
    })
  );
}
function Uc(e) {
  return ar(e.replace(ri, ""));
}
function Hc(e) {
  return ar(e.replace(Fc, ""));
}
function kc(e, t) {
  const n = Vc(e);
  return t === "local_gsvi" ? Hc(n) : n;
}
async function Bc(e, t) {
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
const Lt = "data-tavern-multi-tts-rendered", ur = "data-tavern-multi-tts-swipe", fn = "tavern-multi-tts-segment", en = "tavern-multi-tts-fallback-list";
function Kc(e, t, n) {
  return `${e}:${t}:${n}`;
}
function zc(e) {
  const t = e.split(":");
  if (t.length !== 3)
    return null;
  const n = Number(t[0]), r = Number(t[1]), s = Number(t[2]);
  return [n, r, s].every(Number.isFinite) ? { message_id: n, swipe_id: r, index: s } : null;
}
function Wc(e) {
  return document.querySelector(`#chat .mes[mesid="${e}"]`);
}
function Jc(e) {
  return e.querySelector(".mes_text");
}
function si(e, t) {
  const n = e.getAttribute(Lt) === "true", r = e.querySelector(`.${fn}`) !== null;
  return !n || !r ? !1 : t === void 0 ? !0 : e.getAttribute(ur) === String(t);
}
function kn(e = document) {
  e.querySelectorAll(`.${fn}`).forEach((t) => {
    const n = t.querySelector(".tavern-multi-tts-text")?.textContent ?? "";
    t.replaceWith(document.createTextNode(n));
  }), e.querySelectorAll(`.${en}`).forEach((t) => t.remove()), e.querySelectorAll(`[${Lt}]`).forEach((t) => {
    t.removeAttribute(Lt), t.removeAttribute(ur);
  });
}
function Ie(e, t) {
  e.classList.remove("is-loading", "is-ready", "is-playing", "is-error"), t !== "idle" && e.classList.add(`is-${t}`);
  const n = e.querySelector(".tavern-multi-tts-indicator");
  n && (n.textContent = t === "loading" ? "⏳" : t === "ready" ? "▶" : t === "playing" ? "⏸" : t === "error" ? "⚠" : "▶");
}
function Xr(e) {
  return e.replace(/\s+/g, "").trim();
}
function Yc(e, t, n, r) {
  const s = e.splitText(t);
  s.splitText(n), s.replaceWith(r);
}
function Xc(e, t, n, r) {
  const s = [t, n].map((l) => l.trim()).filter(Boolean), i = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let o = i.nextNode();
  for (; o; ) {
    const l = o.parentElement;
    if (l && !l.closest(`.${fn}`) && !l.closest(`.${en}`) && !l.closest(".mes_buttons")) {
      const c = o.nodeValue ?? "";
      for (const f of s) {
        const d = c.indexOf(f);
        if (d >= 0)
          return Yc(o, d, f.length, r), !0;
        if (Xr(c) === Xr(f))
          return o.replaceWith(r), !0;
      }
    }
    o = i.nextNode();
  }
  return !1;
}
function Zc(e, t, n, r, s, i, o) {
  const l = Kc(e, t, n.index), c = document.createElement("span");
  c.className = fn, c.dataset.tavernMultiTtsKey = l;
  const f = document.createElement("span");
  f.className = "tavern-multi-tts-text", f.textContent = r;
  const d = document.createElement("span");
  d.className = "tavern-multi-tts-indicator", d.textContent = "▶";
  const h = document.createElement("span");
  h.className = "tavern-multi-tts-actions";
  const x = document.createElement("button");
  x.type = "button", x.className = "tavern-multi-tts-action", x.textContent = "下", h.append(x), c.append(f, d, h), Ie(c, "idle");
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
    P && (T?.stop(), T = Nl(
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
  }), x.addEventListener("click", (P) => {
    P.preventDefault(), P.stopPropagation(), (async () => {
      const D = await L();
      D && i.downloadAudio(D, e, n.index);
    })();
  }), c;
}
function Qc(e, t, n, r, s, i = 0) {
  if (si(e, i))
    return 0;
  e.getAttribute(Lt) === "true" && kn(e);
  const o = Jc(e) ?? e, l = [];
  let c = 0;
  for (const f of n) {
    if (!f.displayText || !f.ttsText)
      continue;
    const d = Zc(
      t,
      i,
      f,
      f.displayText,
      f.ttsText,
      r,
      s
    );
    Xc(o, f.text, f.displayText, d) ? c += 1 : l.push(d);
  }
  if (o.querySelectorAll(`.${en}`).forEach((f) => f.remove()), l.length > 0) {
    const f = document.createElement("div");
    f.className = en, l.forEach((d) => f.append(d, document.createTextNode(" "))), o.append(f), c += l.length;
  }
  return c > 0 && (e.setAttribute(Lt, "true"), e.setAttribute(ur, String(i))), c;
}
function ii(e, t) {
  const n = t?.trim() ?? "";
  return n ? (e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.characterMappings).some((s) => s.characterName.trim() === n) : !0;
}
function oi(e, t) {
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
function qc(e, t, n) {
  if (!ii(e, n))
    return null;
  const r = oi(e, n);
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
function ea(e, t, n) {
  const r = oi(e, n);
  return e.ttsEngine === "local_gsvi" ? {
    text: t,
    engine: "local_gsvi",
    localGsvi: {
      origin: El(e.localGsviBaseUrl),
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
const ta = 15;
function na(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), s = [];
  let i = !1, o = !1;
  function l() {
    return e.getSettings();
  }
  function c() {
    o || !document.querySelector(".minimax-tts-segment") || (o = !0, e.warn?.("检测到旧酒馆助手 Multi-TTS 仍在装饰消息。请只启用其中一个，避免重复生成。"));
  }
  async function f(R, F, q) {
    const te = l(), z = qc(te, F, q);
    if (!z)
      return null;
    const ut = ea(te, F, q), ue = await wl(ut), fe = r.get(ue);
    if (fe)
      return fe;
    const ge = await Rl(ue);
    if (ge)
      return r.set(ue, ge), ge;
    const _e = await Pc(z.engine).synthesize(z);
    return await Pl(ue, _e), r.set(ue, _e), _e;
  }
  function d(R, F) {
    if (typeof R.swipe_id == "number" && Number.isFinite(R.swipe_id))
      return R.swipe_id;
    const q = Number(F?.getAttribute("swipeid"));
    return Number.isFinite(q) ? q : 0;
  }
  function h(R, F) {
    for (const [q, te] of t) {
      const z = zc(q);
      z && z.message_id === R && z.swipe_id !== F && (te.stop(), t.delete(q));
    }
  }
  function x(R, F = {}) {
    const q = F.attempt ?? 0, te = l();
    if (!te.enabled)
      return;
    const z = e.getChatMessage(R);
    if (!z || z.is_user || z.is_system)
      return;
    const ut = typeof z.mes == "string" ? z.mes : "", ue = Gc(ut).filter(
      (W) => ii(te, W.char)
    );
    if (ue.length === 0)
      return;
    const fe = e.findMessageElement(R) ?? Wc(R);
    if (!fe) {
      q < ta && window.setTimeout(() => x(R, { ...F, attempt: q + 1 }), 120);
      return;
    }
    const ge = d(z, fe);
    if (si(fe, ge))
      return;
    fe.getAttribute("data-tavern-multi-tts-rendered") === "true" && kn(fe), h(R, ge), c();
    const ft = ue.map((W) => ({
      ...W,
      displayText: Uc(W.text),
      ttsText: kc(W.text, te.ttsEngine)
    })), _e = [], dn = (W) => F.skipPrefetch ? !1 : te.prefetchMode === "auto_all" ? !0 : te.prefetchMode === "auto_first_n" ? W < te.prefetchFirstCount : !1;
    Qc(
      fe,
      R,
      ft,
      {
        ensureAudio: async (W, $e, Ke) => {
          const dt = `${R}:${ge}:${W.index}`;
          if (n.has(dt))
            return null;
          n.add(dt);
          try {
            return await f(W.text, Ke, W.char);
          } catch {
            return console.error(`${se} synthesize failed`), null;
          } finally {
            n.delete(dt);
          }
        },
        downloadAudio(W, $e, Ke) {
          Dl(W, Ll($e, Ke));
        }
      },
      t,
      ge
    ), ft.forEach((W, $e) => {
      dn($e) && W.ttsText && _e.push(async () => {
        try {
          await f(W.text, W.ttsText, W.char);
        } catch {
        }
      });
    }), _e.length > 0 && Bc(_e, te.maxConcurrency);
  }
  function T(...R) {
    const F = Number(R[0]);
    Number.isFinite(F) && window.setTimeout(() => x(F), 0);
  }
  function L(...R) {
    const F = Number(R[0]);
    Number.isFinite(F) && window.setTimeout(() => x(F, { skipPrefetch: !0 }), 0);
  }
  function w(R = {}) {
    document.querySelectorAll("#chat .mes[mesid]").forEach((F) => {
      const q = Number(F.getAttribute("mesid"));
      Number.isFinite(q) && x(q, R);
    });
  }
  function C(R, F) {
    e.eventSource.on(R, F), s.push(() => e.eventSource.removeListener(R, F));
  }
  function P() {
    i || (i = !0, Rn(e, l()), C(e.eventNames.messageReceived, T), C(e.eventNames.messageRendered, T), C(e.eventNames.messageUpdated, T), C(e.eventNames.messageSwiped, L), C(e.eventNames.moreMessagesLoaded, () => {
      w({ skipPrefetch: !0 });
    }), C(e.eventNames.chatChanged, () => {
      Rn(e, l()), w({ skipPrefetch: !0 });
    }), w({ skipPrefetch: !0 }), console.info(`${se} chat runtime started`));
  }
  function D() {
    s.splice(0).forEach((R) => R()), t.forEach((R) => R.stop()), t.clear(), n.clear(), r.clear(), Js(), $c(e), kn(document), i = !1, console.info(`${se} chat runtime stopped`);
  }
  function X() {
    Rn(e, l()), l().enabled && w();
  }
  return { start: P, stop: D, syncFromSettings: X, decorate: x };
}
function Ue(e) {
  return typeof e == "object" && e !== null;
}
function ra(e) {
  if (Ue(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function sa(e) {
  return !Ue(e) || typeof e.getContext != "function" ? null : e;
}
function ia(e) {
  if (!Ue(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!Ue(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = ra(e.eventSource), n = Ue(e.eventTypes) ? e.eventTypes : Ue(e.event_types) ? e.event_types : void 0, r = n ? {
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
    extensionPrompts: Ue(e.extensionPrompts) ? e.extensionPrompts : void 0
  };
}
function li() {
  const e = sa(globalThis.SillyTavern);
  if (!e)
    throw new Error(
      "SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行"
    );
  return ia(e.getContext());
}
function ci() {
  const e = li();
  return {
    readRawSettings() {
      return e.extensionSettings[An];
    },
    writeSettings(t) {
      e.extensionSettings[An] = t, e.saveSettingsDebounced();
    },
    removeSettings() {
      delete e.extensionSettings[An], e.saveSettingsDebounced();
    },
    findSettingsRoot: Ql,
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
function oa(e) {
  return Ue(e) ? {
    mes: typeof e.mes == "string" ? e.mes : void 0,
    is_user: typeof e.is_user == "boolean" ? e.is_user : void 0,
    is_system: typeof e.is_system == "boolean" ? e.is_system : void 0,
    swipe_id: typeof e.swipe_id == "number" ? e.swipe_id : void 0
  } : null;
}
function la(e) {
  const t = li();
  if (!t.eventSource)
    throw new Error("SillyTavern eventSource 不可用，无法监听消息事件");
  const n = t.eventSource;
  return {
    getSettings: e,
    getChatMessage(r) {
      return Array.isArray(t.chat) ? oa(t.chat[r]) : null;
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
        s.warning(r, se);
        return;
      }
      console.warn(`${se} ${r}`);
    }
  };
}
const ca = { class: "tavern-multi-tts-settings" }, aa = { class: "inline-drawer" }, ua = { class: "inline-drawer-toggle inline-drawer-header" }, fa = { class: "inline-drawer-content" }, da = { class: "tavern-multi-tts-block" }, pa = { class: "tavern-multi-tts-version" }, ha = { class: "tavern-multi-tts-block" }, ma = { class: "checkbox_label" }, ga = ["checked"], _a = { class: "tavern-multi-tts-block" }, ya = { class: "checkbox_label" }, va = ["checked"], ba = { class: "tavern-multi-tts-block" }, Sa = { class: "tavern-multi-tts-import-label" }, xa = { class: "tavern-multi-tts-version" }, Ea = /* @__PURE__ */ lo({
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
    const t = e, n = /* @__PURE__ */ Yi("");
    function r(s) {
      const i = s.target, o = i.files?.[0];
      if (!o)
        return;
      const l = new FileReader();
      l.onload = () => {
        n.value = t.onImportFile(String(l.result ?? "")), i.value = "";
      }, l.readAsText(o);
    }
    return (s, i) => (Oo(), Lo("div", ca, [
      J("div", aa, [
        J("div", ua, [
          J("b", null, Ht(e.displayName), 1),
          i[2] || (i[2] = J("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        J("div", fa, [
          J("div", da, [
            J("small", pa, "版本 " + Ht(e.version), 1)
          ]),
          J("div", ha, [
            J("label", ma, [
              J("input", {
                type: "checkbox",
                checked: e.enabled,
                onChange: i[0] || (i[0] = (o) => e.onEnabledChange(o.target.checked))
              }, null, 40, ga),
              i[3] || (i[3] = J("span", null, "启用 TTS 功能", -1))
            ])
          ]),
          J("div", _a, [
            J("label", ya, [
              J("input", {
                type: "checkbox",
                checked: e.injectEnabled,
                onChange: i[1] || (i[1] = (o) => e.onInjectEnabledChange(o.target.checked))
              }, null, 40, va),
              i[4] || (i[4] = J("span", null, "启用提示词注入", -1))
            ])
          ]),
          J("div", ba, [
            J("label", Sa, [
              i[5] || (i[5] = ks(" 导入旧酒馆助手设置 ", -1)),
              J("input", {
                type: "file",
                accept: "application/json,.json",
                onChange: r
              }, null, 32)
            ]),
            J("small", xa, Ht(n.value || "选择从旧脚本导出的 JSON。未知字段会被忽略。"), 1)
          ])
        ])
      ])
    ]));
  }
});
let yt = null, Je = null, tn = null;
function wa() {
  return Nt(ci().readRawSettings());
}
function Ta() {
  return tn ??= na(la(wa)), tn;
}
function Aa(e) {
  try {
    const t = JSON.parse(e), n = Yl(t);
    Je?.updateSettings(n);
    const r = Xl(n);
    return `已导入：引擎 ${r.engine}，MiniMax 映射 ${r.minimaxMappings} 条，GSVI 映射 ${r.gsviMappings} 条。`;
  } catch (t) {
    return console.error(`${se} import failed`), t instanceof Error ? t.message : "导入失败";
  }
}
function ct() {
  return Je || (Je = Zl(
    ci(),
    {
      mount(e, t) {
        yt?.unmount(), yt = yl(Ea, {
          displayName: $l,
          version: Gl,
          enabled: t.enabled,
          injectEnabled: t.injectEnabled,
          onEnabledChange(n) {
            Je?.setEnabled(n);
          },
          onInjectEnabledChange(n) {
            Je?.setInjectEnabled(n);
          },
          onImportFile: Aa
        }), yt.mount(e);
      },
      unmount() {
        yt?.unmount(), yt = null;
      }
    },
    {
      stopPlayback: Js,
      clearCache: Ol,
      startRuntime: () => Ta().start(),
      stopRuntime: () => tn?.stop(),
      syncRuntime: () => tn?.syncFromSettings()
    }
  ), Je);
}
async function at(e, t) {
  try {
    await t();
  } catch (n) {
    const r = n instanceof Error ? n.message : String(n);
    throw console.error(`${se} ${e} failed: ${r}`), n;
  }
}
async function Ma() {
  await at("onInstall", () => ct().install());
}
async function Ia() {
  await at("onActivate", () => ct().activate());
}
async function Ra() {
  await at("onEnable", () => ct().activate());
}
async function Pa() {
  await at("onDisable", () => ct().disable());
}
async function Oa() {
  await at("onClean", () => ct().clean());
}
async function Na() {
  await at("onDelete", () => ct().delete());
}
export {
  Ia as onActivate,
  Oa as onClean,
  Na as onDelete,
  Pa as onDisable,
  Ra as onEnable,
  Ma as onInstall
};
//# sourceMappingURL=index.js.map
