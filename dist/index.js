// @__NO_SIDE_EFFECTS__
function ni(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ue = {}, Kt = [], Ft = () => {
}, _o = () => !1, os = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), rs = (e) => e.startsWith("onUpdate:"), ze = Object.assign, vo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Kr = Object.prototype.hasOwnProperty, ae = (e, t) => Kr.call(e, t), Y = Array.isArray, zt = (e) => Rn(e) === "[object Map]", en = (e) => Rn(e) === "[object Set]", wi = (e) => Rn(e) === "[object Date]", oe = (e) => typeof e == "function", xe = (e) => typeof e == "string", nt = (e) => typeof e == "symbol", fe = (e) => e !== null && typeof e == "object", yo = (e) => (fe(e) || oe(e)) && oe(e.then) && oe(e.catch), bo = Object.prototype.toString, Rn = (e) => bo.call(e), zr = (e) => Rn(e).slice(8, -1), xo = (e) => Rn(e) === "[object Object]", si = (e) => xe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, pn = /* @__PURE__ */ ni(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), as = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Wr = /-\w/g, Be = as(
  (e) => e.replace(Wr, (t) => t.slice(1).toUpperCase())
), Jr = /\B([A-Z])/g, Ut = as(
  (e) => e.replace(Jr, "-$1").toLowerCase()
), To = as((e) => e.charAt(0).toUpperCase() + e.slice(1)), ys = as(
  (e) => e ? `on${To(e)}` : ""
), qe = (e, t) => !Object.is(e, t), Hn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, So = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, ls = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ei;
const cs = () => Ei || (Ei = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ii(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = xe(s) ? Qr(s) : ii(s);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (xe(e) || fe(e))
    return e;
}
const Xr = /;(?![^(]*\))/g, Yr = /:([^]+)/, Zr = /\/\*[^]*?\*\//g;
function Qr(e) {
  const t = {};
  return e.replace(Zr, "").split(Xr).forEach((n) => {
    if (n) {
      const s = n.split(Yr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ye(e) {
  let t = "";
  if (xe(e))
    t = e;
  else if (Y(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ye(e[n]);
      s && (t += s + " ");
    }
  else if (fe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const qr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ea = /* @__PURE__ */ ni(qr);
function wo(e) {
  return !!e || e === "";
}
function ta(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = tn(e[s], t[s]);
  return n;
}
function tn(e, t) {
  if (e === t) return !0;
  let n = wi(e), s = wi(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = nt(e), s = nt(t), n || s)
    return e === t;
  if (n = Y(e), s = Y(t), n || s)
    return n && s ? ta(e, t) : !1;
  if (n = fe(e), s = fe(t), n || s) {
    if (!n || !s)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const r in e) {
      const a = e.hasOwnProperty(r), l = t.hasOwnProperty(r);
      if (a && !l || !a && l || !tn(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function oi(e, t) {
  return e.findIndex((n) => tn(n, t));
}
const Eo = (e) => !!(e && e.__v_isRef === !0), z = (e) => xe(e) ? e : e == null ? "" : Y(e) || fe(e) && (e.toString === bo || !oe(e.toString)) ? Eo(e) ? z(e.value) : JSON.stringify(e, Ao, 2) : String(e), Ao = (e, t) => Eo(t) ? Ao(e, t.value) : zt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], o) => (n[bs(s, o) + " =>"] = i, n),
    {}
  )
} : en(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => bs(n))
} : nt(t) ? bs(t) : fe(t) && !Y(t) && !xo(t) ? String(t) : t, bs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Se;
class na {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Se && (Se.active ? (this.parent = Se, this.index = (Se.scopes || (Se.scopes = [])).push(
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
      const n = Se;
      try {
        return Se = this, t();
      } finally {
        Se = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Se, Se = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Se === this)
        Se = this.prevScope;
      else {
        let t = Se;
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
function sa() {
  return Se;
}
let ce;
const xs = /* @__PURE__ */ new WeakSet();
class Io {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Se && (Se.active ? Se.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, xs.has(this) && (xs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Co(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ai(this), Po(this);
    const t = ce, n = He;
    ce = this, He = !0;
    try {
      return this.fn();
    } finally {
      Ro(this), ce = t, He = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        li(t);
      this.deps = this.depsTail = void 0, Ai(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? xs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ds(this) && this.run();
  }
  get dirty() {
    return Ds(this);
  }
}
let Mo = 0, mn, hn;
function Co(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = hn, hn = e;
    return;
  }
  e.next = mn, mn = e;
}
function ri() {
  Mo++;
}
function ai() {
  if (--Mo > 0)
    return;
  if (hn) {
    let t = hn;
    for (hn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; mn; ) {
    let t = mn;
    for (mn = void 0; t; ) {
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
function Po(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ro(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), li(s), ia(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Ds(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Vo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Vo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === xn) || (e.globalVersion = xn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ds(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ce, s = He;
  ce = e, He = !0;
  try {
    Po(e);
    const i = e.fn(e._value);
    (t.version === 0 || qe(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ce = n, He = s, Ro(e), e.flags &= -3;
  }
}
function li(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      li(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ia(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let He = !0;
const No = [];
function At() {
  No.push(He), He = !1;
}
function It() {
  const e = No.pop();
  He = e === void 0 ? !0 : e;
}
function Ai(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ce;
    ce = void 0;
    try {
      t();
    } finally {
      ce = n;
    }
  }
}
let xn = 0;
class oa {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ci {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ce || !He || ce === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ce)
      n = this.activeLink = new oa(ce, this), ce.deps ? (n.prevDep = ce.depsTail, ce.depsTail.nextDep = n, ce.depsTail = n) : ce.deps = ce.depsTail = n, Lo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ce.depsTail, n.nextDep = void 0, ce.depsTail.nextDep = n, ce.depsTail = n, ce.deps === n && (ce.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, xn++, this.notify(t);
  }
  notify(t) {
    ri();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ai();
    }
  }
}
function Lo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Lo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Gs = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ Symbol(
  ""
), Us = /* @__PURE__ */ Symbol(
  ""
), Tn = /* @__PURE__ */ Symbol(
  ""
);
function Ee(e, t, n) {
  if (He && ce) {
    let s = Gs.get(e);
    s || Gs.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new ci()), i.map = s, i.key = n), i.track();
  }
}
function ft(e, t, n, s, i, o) {
  const r = Gs.get(e);
  if (!r) {
    xn++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (ri(), t === "clear")
    r.forEach(a);
  else {
    const l = Y(e), p = l && si(n);
    if (l && n === "length") {
      const m = Number(s);
      r.forEach((g, E) => {
        (E === "length" || E === Tn || !nt(E) && E >= m) && a(g);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && a(r.get(n)), p && a(r.get(Tn)), t) {
        case "add":
          l ? p && a(r.get("length")) : (a(r.get($t)), zt(e) && a(r.get(Us)));
          break;
        case "delete":
          l || (a(r.get($t)), zt(e) && a(r.get(Us)));
          break;
        case "set":
          zt(e) && a(r.get($t));
          break;
      }
  }
  ai();
}
function Bt(e) {
  const t = /* @__PURE__ */ se(e);
  return t === e ? t : (Ee(t, "iterate", Tn), /* @__PURE__ */ $e(e) ? t : t.map(Ke));
}
function us(e) {
  return Ee(e = /* @__PURE__ */ se(e), "iterate", Tn), e;
}
function Ze(e, t) {
  return /* @__PURE__ */ mt(e) ? Zt(/* @__PURE__ */ Dt(e) ? Ke(t) : t) : Ke(t);
}
const ra = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ts(this, Symbol.iterator, (e) => Ze(this, e));
  },
  concat(...e) {
    return Bt(this).concat(
      ...e.map((t) => Y(t) ? Bt(t) : t)
    );
  },
  entries() {
    return Ts(this, "entries", (e) => (e[1] = Ze(this, e[1]), e));
  },
  every(e, t) {
    return it(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return it(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Ze(this, s)),
      arguments
    );
  },
  find(e, t) {
    return it(
      this,
      "find",
      e,
      t,
      (n) => Ze(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return it(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return it(
      this,
      "findLast",
      e,
      t,
      (n) => Ze(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return it(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return it(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ss(this, "includes", e);
  },
  indexOf(...e) {
    return Ss(this, "indexOf", e);
  },
  join(e) {
    return Bt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ss(this, "lastIndexOf", e);
  },
  map(e, t) {
    return it(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return rn(this, "pop");
  },
  push(...e) {
    return rn(this, "push", e);
  },
  reduce(e, ...t) {
    return Ii(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ii(this, "reduceRight", e, t);
  },
  shift() {
    return rn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return it(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return rn(this, "splice", e);
  },
  toReversed() {
    return Bt(this).toReversed();
  },
  toSorted(e) {
    return Bt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Bt(this).toSpliced(...e);
  },
  unshift(...e) {
    return rn(this, "unshift", e);
  },
  values() {
    return Ts(this, "values", (e) => Ze(this, e));
  }
};
function Ts(e, t, n) {
  const s = us(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ $e(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const aa = Array.prototype;
function it(e, t, n, s, i, o) {
  const r = us(e), a = r !== e && !/* @__PURE__ */ $e(e), l = r[t];
  if (l !== aa[t]) {
    const g = l.apply(e, o);
    return a ? Ke(g) : g;
  }
  let p = n;
  r !== e && (a ? p = function(g, E) {
    return n.call(this, Ze(e, g), E, e);
  } : n.length > 2 && (p = function(g, E) {
    return n.call(this, g, E, e);
  }));
  const m = l.call(r, p, s);
  return a && i ? i(m) : m;
}
function Ii(e, t, n, s) {
  const i = us(e), o = i !== e && !/* @__PURE__ */ $e(e);
  let r = n, a = !1;
  i !== e && (o ? (a = s.length === 0, r = function(p, m, g) {
    return a && (a = !1, p = Ze(e, p)), n.call(this, p, Ze(e, m), g, e);
  }) : n.length > 3 && (r = function(p, m, g) {
    return n.call(this, p, m, g, e);
  }));
  const l = i[t](r, ...s);
  return a ? Ze(e, l) : l;
}
function Ss(e, t, n) {
  const s = /* @__PURE__ */ se(e);
  Ee(s, "iterate", Tn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ di(n[0]) ? (n[0] = /* @__PURE__ */ se(n[0]), s[t](...n)) : i;
}
function rn(e, t, n = []) {
  At(), ri();
  const s = (/* @__PURE__ */ se(e))[t].apply(e, n);
  return ai(), It(), s;
}
const la = /* @__PURE__ */ ni("__proto__,__v_isRef,__isVue"), ko = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(nt)
);
function ca(e) {
  nt(e) || (e = String(e));
  const t = /* @__PURE__ */ se(this);
  return Ee(t, "has", e), t.hasOwnProperty(e);
}
class Oo {
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
      return s === (i ? o ? ya : Go : o ? Do : $o).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = Y(t);
    if (!i) {
      let l;
      if (r && (l = ra[n]))
        return l;
      if (n === "hasOwnProperty")
        return ca;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ce(t) ? t : s
    );
    if ((nt(n) ? ko.has(n) : la(n)) || (i || Ee(t, "get", n), o))
      return a;
    if (/* @__PURE__ */ Ce(a)) {
      const l = r && si(n) ? a : a.value;
      return i && fe(l) ? /* @__PURE__ */ Bs(l) : l;
    }
    return fe(a) ? i ? /* @__PURE__ */ Bs(a) : /* @__PURE__ */ gn(a) : a;
  }
}
class Fo extends Oo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let o = t[n];
    const r = Y(t) && si(n);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ mt(o);
      if (!/* @__PURE__ */ $e(s) && !/* @__PURE__ */ mt(s) && (o = /* @__PURE__ */ se(o), s = /* @__PURE__ */ se(s)), !r && /* @__PURE__ */ Ce(o) && !/* @__PURE__ */ Ce(s))
        return p || (o.value = s), !0;
    }
    const a = r ? Number(n) < t.length : ae(t, n), l = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Ce(t) ? t : i
    );
    return t === /* @__PURE__ */ se(i) && l && (a ? qe(s, o) && ft(t, "set", n, s) : ft(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = ae(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && ft(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!nt(n) || !ko.has(n)) && Ee(t, "has", n), s;
  }
  ownKeys(t) {
    return Ee(
      t,
      "iterate",
      Y(t) ? "length" : $t
    ), Reflect.ownKeys(t);
  }
}
class ua extends Oo {
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
const fa = /* @__PURE__ */ new Fo(), da = /* @__PURE__ */ new ua(), pa = /* @__PURE__ */ new Fo(!0);
const js = (e) => e, Nn = (e) => Reflect.getPrototypeOf(e);
function ma(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, o = /* @__PURE__ */ se(i), r = zt(o), a = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, p = i[e](...s), m = n ? js : t ? Zt : Ke;
    return !t && Ee(
      o,
      "iterate",
      l ? Us : $t
    ), ze(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: g, done: E } = p.next();
          return E ? { value: g, done: E } : {
            value: a ? [m(g[0]), m(g[1])] : m(g),
            done: E
          };
        }
      }
    );
  };
}
function Ln(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ha(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ se(o), a = /* @__PURE__ */ se(i);
      e || (qe(i, a) && Ee(r, "get", i), Ee(r, "get", a));
      const { has: l } = Nn(r), p = t ? js : e ? Zt : Ke;
      if (l.call(r, i))
        return p(o.get(i));
      if (l.call(r, a))
        return p(o.get(a));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ee(/* @__PURE__ */ se(i), "iterate", $t), i.size;
    },
    has(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ se(o), a = /* @__PURE__ */ se(i);
      return e || (qe(i, a) && Ee(r, "has", i), Ee(r, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const r = this, a = r.__v_raw, l = /* @__PURE__ */ se(a), p = t ? js : e ? Zt : Ke;
      return !e && Ee(l, "iterate", $t), a.forEach((m, g) => i.call(o, p(m), p(g), r));
    }
  };
  return ze(
    n,
    e ? {
      add: Ln("add"),
      set: Ln("set"),
      delete: Ln("delete"),
      clear: Ln("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ se(this), r = Nn(o), a = /* @__PURE__ */ se(i), l = !t && !/* @__PURE__ */ $e(i) && !/* @__PURE__ */ mt(i) ? a : i;
        return r.has.call(o, l) || qe(i, l) && r.has.call(o, i) || qe(a, l) && r.has.call(o, a) || (o.add(l), ft(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ $e(o) && !/* @__PURE__ */ mt(o) && (o = /* @__PURE__ */ se(o));
        const r = /* @__PURE__ */ se(this), { has: a, get: l } = Nn(r);
        let p = a.call(r, i);
        p || (i = /* @__PURE__ */ se(i), p = a.call(r, i));
        const m = l.call(r, i);
        return r.set(i, o), p ? qe(o, m) && ft(r, "set", i, o) : ft(r, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ se(this), { has: r, get: a } = Nn(o);
        let l = r.call(o, i);
        l || (i = /* @__PURE__ */ se(i), l = r.call(o, i)), a && a.call(o, i);
        const p = o.delete(i);
        return l && ft(o, "delete", i, void 0), p;
      },
      clear() {
        const i = /* @__PURE__ */ se(this), o = i.size !== 0, r = i.clear();
        return o && ft(
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
    n[i] = ma(i, e, t);
  }), n;
}
function ui(e, t) {
  const n = ha(e, t);
  return (s, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    ae(n, i) && i in s ? n : s,
    i,
    o
  );
}
const ga = {
  get: /* @__PURE__ */ ui(!1, !1)
}, _a = {
  get: /* @__PURE__ */ ui(!1, !0)
}, va = {
  get: /* @__PURE__ */ ui(!0, !1)
};
const $o = /* @__PURE__ */ new WeakMap(), Do = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap(), ya = /* @__PURE__ */ new WeakMap();
function ba(e) {
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
function gn(e) {
  return /* @__PURE__ */ mt(e) ? e : fi(
    e,
    !1,
    fa,
    ga,
    $o
  );
}
// @__NO_SIDE_EFFECTS__
function xa(e) {
  return fi(
    e,
    !1,
    pa,
    _a,
    Do
  );
}
// @__NO_SIDE_EFFECTS__
function Bs(e) {
  return fi(
    e,
    !0,
    da,
    va,
    Go
  );
}
function fi(e, t, n, s, i) {
  if (!fe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = ba(zr(e));
  if (r === 0)
    return e;
  const a = new Proxy(
    e,
    r === 2 ? s : n
  );
  return i.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  return /* @__PURE__ */ mt(e) ? /* @__PURE__ */ Dt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function $e(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function di(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function se(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ se(t) : e;
}
function Ta(e) {
  return !ae(e, "__v_skip") && Object.isExtensible(e) && So(e, "__v_skip", !0), e;
}
const Ke = (e) => fe(e) ? /* @__PURE__ */ gn(e) : e, Zt = (e) => fe(e) ? /* @__PURE__ */ Bs(e) : e;
// @__NO_SIDE_EFFECTS__
function Ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ot(e) {
  return Sa(e, !1);
}
function Sa(e, t) {
  return /* @__PURE__ */ Ce(e) ? e : new wa(e, t);
}
class wa {
  constructor(t, n) {
    this.dep = new ci(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ se(t), this._value = n ? t : Ke(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ $e(t) || /* @__PURE__ */ mt(t);
    t = s ? t : /* @__PURE__ */ se(t), qe(t, n) && (this._rawValue = t, this._value = s ? t : Ke(t), this.dep.trigger());
  }
}
function at(e) {
  return /* @__PURE__ */ Ce(e) ? e.value : e;
}
const Ea = {
  get: (e, t, n) => t === "__v_raw" ? e : at(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ Ce(i) && !/* @__PURE__ */ Ce(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Uo(e) {
  return /* @__PURE__ */ Dt(e) ? e : new Proxy(e, Ea);
}
class Aa {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ci(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = xn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ce !== this)
      return Co(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Vo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ia(e, t, n = !1) {
  let s, i;
  return oe(e) ? s = e : (s = e.get, i = e.set), new Aa(s, i, n);
}
const kn = {}, Xn = /* @__PURE__ */ new WeakMap();
let kt;
function Ma(e, t = !1, n = kt) {
  if (n) {
    let s = Xn.get(n);
    s || Xn.set(n, s = []), s.push(e);
  }
}
function Ca(e, t, n = ue) {
  const { immediate: s, deep: i, once: o, scheduler: r, augmentJob: a, call: l } = n, p = (O) => i ? O : /* @__PURE__ */ $e(O) || i === !1 || i === 0 ? dt(O, 1) : dt(O);
  let m, g, E, S, H = !1, P = !1;
  if (/* @__PURE__ */ Ce(e) ? (g = () => e.value, H = /* @__PURE__ */ $e(e)) : /* @__PURE__ */ Dt(e) ? (g = () => p(e), H = !0) : Y(e) ? (P = !0, H = e.some((O) => /* @__PURE__ */ Dt(O) || /* @__PURE__ */ $e(O)), g = () => e.map((O) => {
    if (/* @__PURE__ */ Ce(O))
      return O.value;
    if (/* @__PURE__ */ Dt(O))
      return p(O);
    if (oe(O))
      return l ? l(O, 2) : O();
  })) : oe(e) ? t ? g = l ? () => l(e, 2) : e : g = () => {
    if (E) {
      At();
      try {
        E();
      } finally {
        It();
      }
    }
    const O = kt;
    kt = m;
    try {
      return l ? l(e, 3, [S]) : e(S);
    } finally {
      kt = O;
    }
  } : g = Ft, t && i) {
    const O = g, _e = i === !0 ? 1 / 0 : i;
    g = () => dt(O(), _e);
  }
  const F = sa(), L = () => {
    m.stop(), F && F.active && vo(F.effects, m);
  };
  if (o && t) {
    const O = t;
    t = (..._e) => {
      const Ie = O(..._e);
      return L(), Ie;
    };
  }
  let $ = P ? new Array(e.length).fill(kn) : kn;
  const Z = (O) => {
    if (!(!(m.flags & 1) || !m.dirty && !O))
      if (t) {
        const _e = m.run();
        if (O || i || H || (P ? _e.some((Ie, de) => qe(Ie, $[de])) : qe(_e, $))) {
          E && E();
          const Ie = kt;
          kt = m;
          try {
            const de = [
              _e,
              // pass undefined as the old value when it's changed for the first time
              $ === kn ? void 0 : P && $[0] === kn ? [] : $,
              S
            ];
            $ = _e, l ? l(t, 3, de) : (
              // @ts-expect-error
              t(...de)
            );
          } finally {
            kt = Ie;
          }
        }
      } else
        m.run();
  };
  return a && a(Z), m = new Io(g), m.scheduler = r ? () => r(Z, !1) : Z, S = (O) => Ma(O, !1, m), E = m.onStop = () => {
    const O = Xn.get(m);
    if (O) {
      if (l)
        l(O, 4);
      else
        for (const _e of O) _e();
      Xn.delete(m);
    }
  }, t ? s ? Z(!0) : $ = m.run() : r ? r(Z.bind(null, !0), !0) : m.run(), L.pause = m.pause.bind(m), L.resume = m.resume.bind(m), L.stop = L, L;
}
function dt(e, t = 1 / 0, n) {
  if (t <= 0 || !fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ce(e))
    dt(e.value, t, n);
  else if (Y(e))
    for (let s = 0; s < e.length; s++)
      dt(e[s], t, n);
  else if (en(e) || zt(e))
    e.forEach((s) => {
      dt(s, t, n);
    });
  else if (xo(e)) {
    for (const s in e)
      dt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && dt(e[s], t, n);
  }
  return e;
}
function Vn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    fs(i, t, n);
  }
}
function st(e, t, n, s) {
  if (oe(e)) {
    const i = Vn(e, t, n, s);
    return i && yo(i) && i.catch((o) => {
      fs(o, t, n);
    }), i;
  }
  if (Y(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(st(e[o], t, n, s));
    return i;
  }
}
function fs(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || ue;
  if (t) {
    let a = t.parent;
    const l = t.proxy, p = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const m = a.ec;
      if (m) {
        for (let g = 0; g < m.length; g++)
          if (m[g](e, l, p) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      At(), Vn(o, null, 10, [
        e,
        l,
        p
      ]), It();
      return;
    }
  }
  Pa(e, n, i, s, r);
}
function Pa(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Me = [];
let Xe = -1;
const Wt = [];
let bt = null, Ht = 0;
const jo = /* @__PURE__ */ Promise.resolve();
let Yn = null;
function Bo(e) {
  const t = Yn || jo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ra(e) {
  let t = Xe + 1, n = Me.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Me[s], o = Sn(i);
    o < e || o === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function pi(e) {
  if (!(e.flags & 1)) {
    const t = Sn(e), n = Me[Me.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Sn(n) ? Me.push(e) : Me.splice(Ra(t), 0, e), e.flags |= 1, Ho();
  }
}
function Ho() {
  Yn || (Yn = jo.then(zo));
}
function Va(e) {
  if (!Y(e))
    bt && e.id === -1 ? bt.splice(Ht + 1, 0, e) : e.flags & 1 || (Wt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Wt.push(e[t]);
  Ho();
}
function Mi(e, t, n = Xe + 1) {
  for (; n < Me.length; n++) {
    const s = Me[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Me.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Ko(e) {
  if (Wt.length) {
    const t = [...new Set(Wt)].sort(
      (n, s) => Sn(n) - Sn(s)
    );
    if (Wt.length = 0, bt) {
      for (let n = 0; n < t.length; n++)
        bt.push(t[n]);
      return;
    }
    for (bt = t, Ht = 0; Ht < bt.length; Ht++) {
      const n = bt[Ht];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    bt = null, Ht = 0;
  }
}
const Sn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zo(e) {
  try {
    for (Xe = 0; Xe < Me.length; Xe++) {
      const t = Me[Xe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Vn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Xe < Me.length; Xe++) {
      const t = Me[Xe];
      t && (t.flags &= -2);
    }
    Xe = -1, Me.length = 0, Ko(), Yn = null, (Me.length || Wt.length) && zo();
  }
}
let Fe = null, Wo = null;
function Zn(e) {
  const t = Fe;
  return Fe = e, Wo = e && e.type.__scopeId || null, t;
}
function Na(e, t = Fe, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && ki(-1);
    const o = Zn(t), r = Gt.length;
    let a;
    try {
      a = e(...i);
    } finally {
      for (let l = Gt.length; l > r; l--) ur();
      Zn(o), s._d && ki(1);
    }
    return a;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function U(e, t) {
  if (Fe === null)
    return e;
  const n = hs(Fe), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, a, l = ue] = t[i];
    o && (oe(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && dt(r), s.push({
      dir: o,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function Nt(e, t, n, s) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const a = i[r];
    o && (a.oldValue = o[r].value);
    let l = a.dir[s];
    l && (At(), st(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), It());
  }
}
function La(e, t, n = !1) {
  const s = xl();
  if (s || Jt) {
    let i = Jt ? Jt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && oe(t) ? t.call(s && s.proxy) : t;
  }
}
const ka = /* @__PURE__ */ Symbol.for("v-scx"), Oa = () => La(ka);
function Fa(e, t, n) {
  return $a(e, t, n);
}
function $a(e, t, n = ue) {
  const { immediate: s, deep: i, flush: o, once: r } = n, a = ze({}, n), l = t && s || !t && o !== "post";
  let p;
  if (An) {
    if (o === "sync") {
      const S = Oa();
      p = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!l) {
      const S = () => {
      };
      return S.stop = Ft, S.resume = Ft, S.pause = Ft, S;
    }
  }
  const m = Mt;
  a.call = (S, H, P) => st(S, m, H, P);
  let g = !1;
  o === "post" ? a.scheduler = (S) => {
    Pe(S, m && m.suspense);
  } : o !== "sync" && (g = !0, a.scheduler = (S, H) => {
    H ? S() : pi(S);
  }), a.augmentJob = (S) => {
    t && (S.flags |= 4), g && (S.flags |= 2, m && (S.id = m.uid, S.i = m));
  };
  const E = Ca(e, t, a);
  return An && (p ? p.push(E) : l && E()), E;
}
const Da = /* @__PURE__ */ Symbol("_vte"), ds = (e) => e.__isTeleport, ws = /* @__PURE__ */ Symbol("_leaveCb");
function Ga(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ht) {
        t = n;
        break;
      }
  }
  return t;
}
function Jo(e) {
  if (!Xo(e))
    return ds(e.type) && e.children ? Ga(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && oe(n.default))
      return n.default();
  }
}
function mi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    mi(
      ds(n.type) && Jo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Ua(e, t) {
  return oe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ze({ name: e.name }, t, { setup: e })
  ) : e;
}
function ja(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ci(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Qn = /* @__PURE__ */ new WeakMap();
function _n(e, t, n, s, i = !1) {
  if (Y(e)) {
    e.forEach(
      (P, F) => _n(
        P,
        t && (Y(t) ? t[F] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (vn(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && _n(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? hs(s.component) : s.el, r = i ? null : o, { i: a, r: l } = e, p = t && t.r, m = a.refs === ue ? a.refs = {} : a.refs, g = a.setupState, E = /* @__PURE__ */ se(g), S = g === ue ? _o : (P) => Ci(m, P) ? !1 : ae(E, P), H = (P, F) => !(F && Ci(m, F));
  if (p != null && p !== l) {
    if (Pi(t), xe(p))
      m[p] = null, S(p) && (g[p] = null);
    else if (/* @__PURE__ */ Ce(p)) {
      const P = t;
      H(p, P.k) && (p.value = null), P.k && (m[P.k] = null);
    }
  }
  if (oe(l))
    Vn(l, a, 12, [r, m]);
  else {
    const P = xe(l), F = /* @__PURE__ */ Ce(l);
    if (P || F) {
      const L = () => {
        if (e.f) {
          const $ = P ? S(l) ? g[l] : m[l] : H() || !e.k ? l.value : m[e.k];
          if (i)
            Y($) && vo($, o);
          else if (Y($))
            $.includes(o) || $.push(o);
          else if (P)
            m[l] = [o], S(l) && (g[l] = m[l]);
          else {
            const Z = [o];
            H(l, e.k) && (l.value = Z), e.k && (m[e.k] = Z);
          }
        } else P ? (m[l] = r, S(l) && (g[l] = r)) : F && (H(l, e.k) && (l.value = r), e.k && (m[e.k] = r));
      };
      if (r) {
        const $ = () => {
          L(), Qn.delete(e);
        };
        $.id = -1, Qn.set(e, $), Pe($, n);
      } else
        Pi(e), L();
    }
  }
}
function Pi(e) {
  const t = Qn.get(e);
  t && (t.flags |= 8, Qn.delete(e));
}
cs().requestIdleCallback;
cs().cancelIdleCallback;
const vn = (e) => !!e.type.__asyncLoader, Xo = (e) => e.type.__isKeepAlive;
function Ba(e, t, n = Mt, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...r) => {
      At();
      const a = _i(n), l = st(t, n, e, r);
      return a(), It(), l;
    });
    return s ? i.unshift(o) : i.push(o), o;
  }
}
const Yo = (e) => (t, n = Mt) => {
  (!An || e === "sp") && Ba(e, (...s) => t(...s), n);
}, Ha = Yo("m"), Ka = Yo("um"), za = /* @__PURE__ */ Symbol.for("v-ndc");
function pe(e, t, n, s) {
  let i;
  const o = n, r = Y(e);
  if (r || xe(e)) {
    const a = r && /* @__PURE__ */ Dt(e);
    let l = !1, p = !1;
    a && (l = !/* @__PURE__ */ $e(e), p = /* @__PURE__ */ mt(e), e = us(e)), i = new Array(e.length);
    for (let m = 0, g = e.length; m < g; m++)
      i[m] = t(
        l ? p ? Zt(Ke(e[m])) : Ke(e[m]) : e[m],
        m,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (fe(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (a, l) => t(a, l, void 0, o)
      );
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let l = 0, p = a.length; l < p; l++) {
        const m = a[l];
        i[l] = t(e[m], m, l, o);
      }
    }
  else
    i = [];
  return i;
}
const Hs = (e) => e ? mr(e) ? hs(e) : Hs(e.parent) : null, yn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ze(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Hs(e.parent),
    $root: (e) => Hs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      pi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Bo.bind(e.proxy)),
    $watch: (e) => Ft
  })
), Es = (e, t) => e !== ue && !e.__isScriptSetup && ae(e, t), Wa = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: o, accessCache: r, type: a, appContext: l } = e;
    if (t[0] !== "$") {
      const E = r[t];
      if (E !== void 0)
        switch (E) {
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
        if (Es(s, t))
          return r[t] = 1, s[t];
        if (ae(o, t))
          return r[t] = 3, o[t];
        if (n !== ue && ae(n, t))
          return r[t] = 4, n[t];
        r[t] = 0;
      }
    }
    const p = yn[t];
    let m, g;
    if (p)
      return t === "$attrs" && Ee(e.attrs, "get", ""), p(e);
    if (
      // css module (injected by vue-loader)
      (m = a.__cssModules) && (m = m[t])
    )
      return m;
    if (n !== ue && ae(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      g = l.config.globalProperties, ae(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: o } = e;
    return Es(i, t) ? (i[t] = n, !0) : ae(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: o, type: r }
  }, a) {
    let l;
    return !!(n[a] || Es(t, a) || ae(o, a) || ae(s, a) || ae(yn, a) || ae(i.config.globalProperties, a) || (l = r.__cssModules) && l[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ae(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Zo() {
  return {
    app: null,
    config: {
      isNativeTag: _o,
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
let Ja = 0;
function Xa(e, t) {
  return function(s, i = null) {
    oe(s) || (s = ze({}, s)), i != null && !fe(i) && (i = null);
    const o = Zo(), r = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const p = o.app = {
      _uid: Ja++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Il,
      get config() {
        return o.config;
      },
      set config(m) {
      },
      use(m, ...g) {
        return r.has(m) || (m && oe(m.install) ? (r.add(m), m.install(p, ...g)) : oe(m) && (r.add(m), m(p, ...g))), p;
      },
      mixin(m) {
        return p;
      },
      component(m, g) {
        return g ? (o.components[m] = g, p) : o.components[m];
      },
      directive(m, g) {
        return g ? (o.directives[m] = g, p) : o.directives[m];
      },
      mount(m, g, E) {
        if (!l) {
          const S = p._ceVNode || pt(s, i);
          return S.appContext = o, E === !0 ? E = "svg" : E === !1 && (E = void 0), e(S, m, E), l = !0, p._container = m, m.__vue_app__ = p, hs(S.component);
        }
      },
      onUnmount(m) {
        a.push(m);
      },
      unmount() {
        l && (st(
          a,
          p._instance,
          16
        ), e(null, p._container), delete p._container.__vue_app__);
      },
      provide(m, g) {
        return o.provides[m] = g, p;
      },
      runWithContext(m) {
        const g = Jt;
        Jt = p;
        try {
          return m();
        } finally {
          Jt = g;
        }
      }
    };
    return p;
  };
}
let Jt = null;
const Ya = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Be(t)}Modifiers`] || e[`${Ut(t)}Modifiers`];
function Za(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ue;
  let i = n;
  const o = t.startsWith("update:"), r = o && Ya(s, t.slice(7));
  r && (r.trim && (i = n.map((m) => xe(m) ? m.trim() : m)), r.number && (i = n.map(ls)));
  let a, l = s[a = ys(t)] || // also try camelCase event handler (#2249)
  s[a = ys(Be(t))];
  !l && o && (l = s[a = ys(Ut(t))]), l && st(
    l,
    e,
    6,
    i
  );
  const p = s[a + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, st(
      p,
      e,
      6,
      i
    );
  }
}
function Qa(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {};
  return o ? (Y(o) ? o.forEach((a) => r[a] = null) : ze(r, o), fe(e) && s.set(e, r), r) : (fe(e) && s.set(e, null), null);
}
function ps(e, t) {
  return !e || !os(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ae(e, t[0].toLowerCase() + t.slice(1)) || ae(e, Ut(t)) || ae(e, t));
}
function Ri(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [o],
    slots: r,
    attrs: a,
    emit: l,
    render: p,
    renderCache: m,
    props: g,
    data: E,
    setupState: S,
    ctx: H,
    inheritAttrs: P
  } = e, F = Zn(e);
  let L, $;
  try {
    if (n.shapeFlag & 4) {
      const O = i || s, _e = O;
      L = Qe(
        p.call(
          _e,
          O,
          m,
          g,
          S,
          E,
          H
        )
      ), $ = a;
    } else {
      const O = t;
      L = Qe(
        O.length > 1 ? O(
          g,
          { attrs: a, slots: r, emit: l }
        ) : O(
          g,
          null
        )
      ), $ = t.props ? a : qa(a);
    }
  } catch (O) {
    Gt.length = 0, fs(O, e, 1), L = pt(ht);
  }
  let Z = L;
  if ($ && P !== !1) {
    const O = Object.keys($), { shapeFlag: _e } = Z;
    O.length && _e & 7 && (o && O.some(rs) && ($ = el(
      $,
      o
    )), Z = Qt(Z, $, !1, !0));
  }
  if (n.dirs && (Z = Qt(Z, null, !1, !0), Z.dirs = Z.dirs ? Z.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const O = ds(Z.type) && Jo(Z) || Z;
    mi(O, n.transition);
  }
  return L = Z, Zn(F), L;
}
const qa = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || os(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, el = (e, t) => {
  const n = {};
  for (const s in e)
    (!rs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function tl(e, t, n) {
  const { props: s, children: i, component: o } = e, { props: r, children: a, patchFlag: l } = t, p = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return s ? Vi(s, r, p) : !!r;
    if (l & 8) {
      const m = t.dynamicProps;
      for (let g = 0; g < m.length; g++) {
        const E = m[g];
        if (Qo(r, s, E) && !ps(p, E))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : s === r ? !1 : s ? r ? Vi(s, r, p) : !0 : !!r;
  return !1;
}
function Vi(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (Qo(t, e, o) && !ps(n, o))
      return !0;
  }
  return !1;
}
function Qo(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && fe(s) && fe(i) ? !tn(s, i) : s !== i;
}
function nl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const qo = {}, er = () => Object.create(qo), tr = (e) => Object.getPrototypeOf(e) === qo;
function sl(e, t, n, s = !1) {
  const i = {}, o = er();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), nr(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ xa(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function il(e, t, n, s) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, a = /* @__PURE__ */ se(i), [l] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const m = e.vnode.dynamicProps;
      for (let g = 0; g < m.length; g++) {
        let E = m[g];
        if (ps(e.emitsOptions, E))
          continue;
        const S = t[E];
        if (l)
          if (ae(o, E))
            S !== o[E] && (o[E] = S, p = !0);
          else {
            const H = Be(E);
            i[H] = Ks(
              l,
              a,
              H,
              S,
              e,
              !1
            );
          }
        else
          S !== o[E] && (o[E] = S, p = !0);
      }
    }
  } else {
    nr(e, t, i, o) && (p = !0);
    let m;
    for (const g in a)
      (!t || // for camelCase
      !ae(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = Ut(g)) === g || !ae(t, m))) && (l ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[m] !== void 0) && (i[g] = Ks(
        l,
        a,
        g,
        void 0,
        e,
        !0
      )) : delete i[g]);
    if (o !== a)
      for (const g in o)
        (!t || !ae(t, g)) && (delete o[g], p = !0);
  }
  p && ft(e.attrs, "set", "");
}
function nr(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let r = !1, a;
  if (t)
    for (let l in t) {
      if (pn(l))
        continue;
      const p = t[l];
      let m;
      i && ae(i, m = Be(l)) ? !o || !o.includes(m) ? n[m] = p : (a || (a = {}))[m] = p : ps(e.emitsOptions, l) || (!(l in s) || p !== s[l]) && (s[l] = p, r = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ se(n), p = a || ue;
    for (let m = 0; m < o.length; m++) {
      const g = o[m];
      n[g] = Ks(
        i,
        l,
        g,
        p[g],
        e,
        !ae(p, g)
      );
    }
  }
  return r;
}
function Ks(e, t, n, s, i, o) {
  const r = e[n];
  if (r != null) {
    const a = ae(r, "default");
    if (a && s === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && oe(l)) {
        const { propsDefaults: p } = i;
        if (n in p)
          s = p[n];
        else {
          const m = _i(i);
          s = p[n] = l.call(
            null,
            t
          ), m();
        }
      } else
        s = l;
      i.ce && i.ce._setProp(n, s);
    }
    r[
      0
      /* shouldCast */
    ] && (o && !a ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Ut(n)) && (s = !0));
  }
  return s;
}
function ol(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, a = [];
  if (!o)
    return fe(e) && s.set(e, Kt), Kt;
  if (Y(o))
    for (let p = 0; p < o.length; p++) {
      const m = Be(o[p]);
      Ni(m) && (r[m] = ue);
    }
  else if (o)
    for (const p in o) {
      const m = Be(p);
      if (Ni(m)) {
        const g = o[p], E = r[m] = Y(g) || oe(g) ? { type: g } : ze({}, g), S = E.type;
        let H = !1, P = !0;
        if (Y(S))
          for (let F = 0; F < S.length; ++F) {
            const L = S[F], $ = oe(L) && L.name;
            if ($ === "Boolean") {
              H = !0;
              break;
            } else $ === "String" && (P = !1);
          }
        else
          H = oe(S) && S.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = H, E[
          1
          /* shouldCastTrue */
        ] = P, (H || ae(E, "default")) && a.push(m);
      }
    }
  const l = [r, a];
  return fe(e) && s.set(e, l), l;
}
function Ni(e) {
  return e[0] !== "$" && !pn(e);
}
const hi = (e) => e === "_" || e === "_ctx" || e === "$stable", gi = (e) => Y(e) ? e.map(Qe) : [Qe(e)], rl = (e, t, n) => {
  if (t._n)
    return t;
  const s = Na((...i) => gi(t(...i)), n);
  return s._c = !1, s;
}, sr = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (hi(i)) continue;
    const o = e[i];
    if (oe(o))
      t[i] = rl(i, o, s);
    else if (o != null) {
      const r = gi(o);
      t[i] = () => r;
    }
  }
}, ir = (e, t) => {
  const n = gi(t);
  e.slots.default = () => n;
}, or = (e, t, n) => {
  for (const s in t)
    (n || !hi(s)) && (e[s] = t[s]);
}, al = (e, t, n) => {
  const s = e.slots = er();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (or(s, t, n), n && So(s, "_", i, !0)) : sr(t, s);
  } else t && ir(e, t);
}, ll = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let o = !0, r = ue;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : or(i, t, n) : (o = !t.$stable, sr(t, i)), r = t;
  } else t && (ir(e, t), r = { default: 1 });
  if (o)
    for (const a in i)
      !hi(a) && r[a] == null && delete i[a];
}, Pe = pl;
function cl(e) {
  return ul(e);
}
function ul(e, t) {
  const n = cs();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: a,
    createComment: l,
    setText: p,
    setElementText: m,
    parentNode: g,
    nextSibling: E,
    setScopeId: S = Ft,
    insertStaticContent: H
  } = e, P = (f, h, v, T = null, y = null, b = null, I = void 0, A = null, w = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !an(f, h) && (T = ve(f), q(f, y, b, !0), f = null), h.patchFlag === -2 && (w = !1, h.dynamicChildren = null);
    const { type: x, ref: j, shapeFlag: R } = h;
    switch (x) {
      case ms:
        F(f, h, v, T);
        break;
      case ht:
        L(f, h, v, T);
        break;
      case Is:
        f == null && $(h, v, T, I);
        break;
      case X:
        Ge(
          f,
          h,
          v,
          T,
          y,
          b,
          I,
          A,
          w
        );
        break;
      default:
        R & 1 ? _e(
          f,
          h,
          v,
          T,
          y,
          b,
          I,
          A,
          w
        ) : R & 6 ? on(
          f,
          h,
          v,
          T,
          y,
          b,
          I,
          A,
          w
        ) : (R & 64 || R & 128) && x.process(
          f,
          h,
          v,
          T,
          y,
          b,
          I,
          A,
          w,
          Ve
        );
    }
    j != null && y ? _n(j, f && f.ref, b, h || f, !h) : j == null && f && f.ref != null && _n(f.ref, null, b, f, !0);
  }, F = (f, h, v, T) => {
    if (f == null)
      s(
        h.el = a(h.children),
        v,
        T
      );
    else {
      const y = h.el = f.el;
      h.children !== f.children && p(y, h.children);
    }
  }, L = (f, h, v, T) => {
    f == null ? s(
      h.el = l(h.children || ""),
      v,
      T
    ) : h.el = f.el;
  }, $ = (f, h, v, T) => {
    [f.el, f.anchor] = H(
      f.children,
      h,
      v,
      T,
      f.el,
      f.anchor
    );
  }, Z = ({ el: f, anchor: h }, v, T) => {
    let y;
    for (; f && f !== h; )
      y = E(f), s(f, v, T), f = y;
    s(h, v, T);
  }, O = ({ el: f, anchor: h }) => {
    let v;
    for (; f && f !== h; )
      v = E(f), i(f), f = v;
    i(h);
  }, _e = (f, h, v, T, y, b, I, A, w) => {
    if (h.type === "svg" ? I = "svg" : h.type === "math" && (I = "mathml"), f == null)
      Ie(
        h,
        v,
        T,
        y,
        b,
        I,
        A,
        w
      );
    else {
      const x = f.el && f.el._isVueCE ? f.el : null;
      try {
        x && x._beginPatch(), Ct(
          f,
          h,
          y,
          b,
          I,
          A,
          w
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, Ie = (f, h, v, T, y, b, I, A) => {
    let w, x;
    const { props: j, shapeFlag: R, transition: G, dirs: B } = f;
    if (w = f.el = r(
      f.type,
      b,
      j && j.is,
      j
    ), R & 8 ? m(w, f.children) : R & 16 && De(
      f.children,
      w,
      null,
      T,
      y,
      As(f, b),
      I,
      A
    ), B && Nt(f, null, T, "created"), de(w, f, f.scopeId, I, T), j) {
      for (const ie in j)
        ie !== "value" && !pn(ie) && o(w, ie, null, j[ie], b, T);
      "value" in j && o(w, "value", null, j.value, b), (x = j.onVnodeBeforeMount) && Je(x, T, f);
    }
    B && Nt(f, null, T, "beforeMount");
    const Q = fl(y, G);
    Q && G.beforeEnter(w), s(w, h, v), ((x = j && j.onVnodeMounted) || Q || B) && Pe(() => {
      x && Je(x, T, f), Q && G.enter(w), B && Nt(f, null, T, "mounted");
    }, y);
  }, de = (f, h, v, T, y) => {
    if (v && S(f, v), T)
      for (let b = 0; b < T.length; b++)
        S(f, T[b]);
    if (y) {
      let b = y.subTree;
      if (h === b || cr(b.type) && (b.ssContent === h || b.ssFallback === h)) {
        const I = y.vnode;
        de(
          f,
          I,
          I.scopeId,
          I.slotScopeIds,
          y.parent
        );
      }
    }
  }, De = (f, h, v, T, y, b, I, A, w = 0) => {
    for (let x = w; x < f.length; x++) {
      const j = f[x] = A ? ut(f[x]) : Qe(f[x]);
      P(
        null,
        j,
        h,
        v,
        T,
        y,
        b,
        I,
        A
      );
    }
  }, Ct = (f, h, v, T, y, b, I) => {
    const A = h.el = f.el;
    let { patchFlag: w, dynamicChildren: x, dirs: j } = h;
    w |= f.patchFlag & 16;
    const R = f.props || ue, G = h.props || ue;
    let B;
    if (v && Lt(v, !1), (B = G.onVnodeBeforeUpdate) && Je(B, v, h, f), j && Nt(h, f, v, "beforeUpdate"), v && Lt(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    x && (!f.dynamicChildren || f.dynamicChildren.length !== x.length) && (w = 0, I = !1, x = null), (R.innerHTML && G.innerHTML == null || R.textContent && G.textContent == null) && m(A, ""), x ? Pt(
      f.dynamicChildren,
      x,
      A,
      v,
      T,
      As(h, y),
      b
    ) : I || Vt(
      f,
      h,
      A,
      null,
      v,
      T,
      As(h, y),
      b,
      !1
    ), w > 0) {
      if (w & 16)
        We(A, R, G, v, y);
      else if (w & 2 && R.class !== G.class && o(A, "class", null, G.class, y), w & 4 && o(A, "style", R.style, G.style, y), w & 8) {
        const Q = h.dynamicProps;
        for (let ie = 0; ie < Q.length; ie++) {
          const te = Q[ie], me = R[te], Te = G[te];
          (Te !== me || te === "value") && o(A, te, me, Te, y, v);
        }
      }
      w & 1 && f.children !== h.children && m(A, h.children);
    } else !I && x == null && We(A, R, G, v, y);
    ((B = G.onVnodeUpdated) || j) && Pe(() => {
      B && Je(B, v, h, f), j && Nt(h, f, v, "updated");
    }, T);
  }, Pt = (f, h, v, T, y, b, I) => {
    for (let A = 0; A < h.length; A++) {
      const w = f[A], x = h[A], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === X || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !an(w, x) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 198) ? g(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      P(
        w,
        x,
        j,
        null,
        T,
        y,
        b,
        I,
        !0
      );
    }
  }, We = (f, h, v, T, y) => {
    if (h !== v) {
      if (h !== ue)
        for (const b in h)
          !pn(b) && !(b in v) && o(
            f,
            b,
            h[b],
            null,
            y,
            T
          );
      for (const b in v) {
        if (pn(b)) continue;
        const I = v[b], A = h[b];
        I !== A && b !== "value" && o(f, b, A, I, y, T);
      }
      "value" in v && o(f, "value", h.value, v.value, y);
    }
  }, Ge = (f, h, v, T, y, b, I, A, w) => {
    const x = h.el = f ? f.el : a(""), j = h.anchor = f ? f.anchor : a("");
    let { patchFlag: R, dynamicChildren: G, slotScopeIds: B } = h;
    B && (A = A ? A.concat(B) : B), f == null ? (s(x, v, T), s(j, v, T), De(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      v,
      j,
      y,
      b,
      I,
      A,
      w
    )) : R > 0 && R & 64 && G && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === G.length ? (Pt(
      f.dynamicChildren,
      G,
      v,
      y,
      b,
      I,
      A
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || y && h === y.subTree) && rr(
      f,
      h,
      !0
      /* shallow */
    )) : Vt(
      f,
      h,
      v,
      j,
      y,
      b,
      I,
      A,
      w
    );
  }, on = (f, h, v, T, y, b, I, A, w) => {
    h.slotScopeIds = A, f == null ? h.shapeFlag & 512 ? y.ctx.activate(
      h,
      v,
      T,
      I,
      w
    ) : Rt(
      h,
      v,
      T,
      y,
      b,
      I,
      w
    ) : jt(f, h, w);
  }, Rt = (f, h, v, T, y, b, I) => {
    const A = f.component = bl(
      f,
      T,
      y
    );
    if (Xo(f) && (A.ctx.renderer = Ve), Tl(A, !1, I), A.asyncDep) {
      if (y && y.registerDep(A, vt, I), !f.el) {
        const w = A.subTree = pt(ht);
        L(null, w, h, v), f.placeholder = w.el;
      }
    } else
      vt(
        A,
        f,
        h,
        v,
        y,
        b,
        I
      );
  }, jt = (f, h, v) => {
    const T = h.component = f.component;
    if (tl(f, h, v))
      if (T.asyncDep && !T.asyncResolved) {
        yt(T, h, v);
        return;
      } else
        T.next = h, T.update();
    else
      h.el = f.el, T.vnode = h;
  }, vt = (f, h, v, T, y, b, I) => {
    const A = () => {
      if (f.isMounted) {
        let { next: R, bu: G, u: B, parent: Q, vnode: ie } = f;
        {
          const _ = ar(f);
          if (_) {
            R && (R.el = ie.el, yt(f, R, I)), _.asyncDep.then(() => {
              Pe(() => {
                f.isUnmounted || x();
              }, y);
            });
            return;
          }
        }
        let te = R, me;
        Lt(f, !1), R ? (R.el = ie.el, yt(f, R, I)) : R = ie, G && Hn(G), (me = R.props && R.props.onVnodeBeforeUpdate) && Je(me, Q, R, ie), Lt(f, !0);
        const Te = Ri(f), ke = f.subTree;
        f.subTree = Te, P(
          ke,
          Te,
          // parent may have changed if it's in a teleport
          g(ke.el),
          // anchor may have changed if it's in a fragment
          ve(ke),
          f,
          y,
          b
        ), R.el = Te.el, te === null && nl(f, Te.el), B && Pe(B, y), (me = R.props && R.props.onVnodeUpdated) && Pe(
          () => Je(me, Q, R, ie),
          y
        );
      } else {
        let R;
        const { el: G, props: B } = h, { bm: Q, m: ie, parent: te, root: me, type: Te } = f, ke = vn(h);
        Lt(f, !1), Q && Hn(Q), !ke && (R = B && B.onVnodeBeforeMount) && Je(R, te, h), Lt(f, !0);
        {
          me.ce && me.ce._hasShadowRoot() && me.ce._injectChildStyle(
            Te,
            f.parent ? f.parent.type : void 0
          );
          const _ = f.subTree = Ri(f);
          P(
            null,
            _,
            v,
            T,
            f,
            y,
            b
          ), h.el = _.el;
        }
        if (ie && Pe(ie, y), !ke && (R = B && B.onVnodeMounted)) {
          const _ = h;
          Pe(
            () => Je(R, te, _),
            y
          );
        }
        (h.shapeFlag & 256 || te && vn(te.vnode) && te.vnode.shapeFlag & 256) && f.a && Pe(f.a, y), f.isMounted = !0, h = v = T = null;
      }
    };
    f.scope.on();
    const w = f.effect = new Io(A);
    f.scope.off();
    const x = f.update = w.run.bind(w), j = f.job = w.runIfDirty.bind(w);
    j.i = f, j.id = f.uid, w.scheduler = () => pi(j), Lt(f, !0), x();
  }, yt = (f, h, v) => {
    h.component = f;
    const T = f.vnode.props;
    f.vnode = h, f.next = null, il(f, h.props, T, v), ll(f, h.children, v), At(), Mi(f), It();
  }, Vt = (f, h, v, T, y, b, I, A, w = !1) => {
    const x = f && f.children, j = f ? f.shapeFlag : 0, R = h.children, { patchFlag: G, shapeFlag: B } = h;
    if (G > 0) {
      if (G & 128) {
        D(
          x,
          R,
          v,
          T,
          y,
          b,
          I,
          A,
          w
        );
        return;
      } else if (G & 256) {
        M(
          x,
          R,
          v,
          T,
          y,
          b,
          I,
          A,
          w
        );
        return;
      }
    }
    B & 8 ? (j & 16 && le(x, y, b), R !== x && m(v, R)) : j & 16 ? B & 16 ? D(
      x,
      R,
      v,
      T,
      y,
      b,
      I,
      A,
      w
    ) : le(x, y, b, !0) : (j & 8 && m(v, ""), B & 16 && De(
      R,
      v,
      T,
      y,
      b,
      I,
      A,
      w
    ));
  }, M = (f, h, v, T, y, b, I, A, w) => {
    f = f || Kt, h = h || Kt;
    const x = f.length, j = h.length, R = Math.min(x, j);
    let G;
    for (G = 0; G < R; G++) {
      const B = h[G] = w ? ut(h[G]) : Qe(h[G]);
      P(
        f[G],
        B,
        v,
        null,
        y,
        b,
        I,
        A,
        w
      );
    }
    x > j ? le(
      f,
      y,
      b,
      !0,
      !1,
      R
    ) : De(
      h,
      v,
      T,
      y,
      b,
      I,
      A,
      w,
      R
    );
  }, D = (f, h, v, T, y, b, I, A, w) => {
    let x = 0;
    const j = h.length;
    let R = f.length - 1, G = j - 1;
    for (; x <= R && x <= G; ) {
      const B = f[x], Q = h[x] = w ? ut(h[x]) : Qe(h[x]);
      if (an(B, Q))
        P(
          B,
          Q,
          v,
          null,
          y,
          b,
          I,
          A,
          w
        );
      else
        break;
      x++;
    }
    for (; x <= R && x <= G; ) {
      const B = f[R], Q = h[G] = w ? ut(h[G]) : Qe(h[G]);
      if (an(B, Q))
        P(
          B,
          Q,
          v,
          null,
          y,
          b,
          I,
          A,
          w
        );
      else
        break;
      R--, G--;
    }
    if (x > R) {
      if (x <= G) {
        const B = G + 1, Q = B < j ? h[B].el : T;
        for (; x <= G; )
          P(
            null,
            h[x] = w ? ut(h[x]) : Qe(h[x]),
            v,
            Q,
            y,
            b,
            I,
            A,
            w
          ), x++;
      }
    } else if (x > G)
      for (; x <= R; )
        q(f[x], y, b, !0), x++;
    else {
      const B = x, Q = x, ie = /* @__PURE__ */ new Map();
      for (x = Q; x <= G; x++) {
        const W = h[x] = w ? ut(h[x]) : Qe(h[x]);
        W.key != null && ie.set(W.key, x);
      }
      let te, me = 0;
      const Te = G - Q + 1;
      let ke = !1, _ = 0;
      const c = new Array(Te);
      for (x = 0; x < Te; x++) c[x] = 0;
      for (x = B; x <= R; x++) {
        const W = f[x];
        if (me >= Te) {
          q(W, y, b, !0);
          continue;
        }
        let C;
        if (W.key != null)
          C = ie.get(W.key);
        else
          for (te = Q; te <= G; te++)
            if (c[te - Q] === 0 && an(W, h[te])) {
              C = te;
              break;
            }
        C === void 0 ? q(W, y, b, !0) : (c[C - Q] = x + 1, C >= _ ? _ = C : ke = !0, P(
          W,
          h[C],
          v,
          null,
          y,
          b,
          I,
          A,
          w
        ), me++);
      }
      const d = ke ? dl(c) : Kt;
      for (te = d.length - 1, x = Te - 1; x >= 0; x--) {
        const W = Q + x, C = h[W], Ti = h[W + 1], Si = W + 1 < j ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ti.el || lr(Ti)
        ) : T;
        c[x] === 0 ? P(
          null,
          C,
          v,
          Si,
          y,
          b,
          I,
          A,
          w
        ) : ke && (te < 0 || x !== d[te] ? J(C, v, Si, 2) : te--);
      }
    }
  }, J = (f, h, v, T, y = null) => {
    const { el: b, type: I, transition: A, children: w, shapeFlag: x } = f;
    if (x & 6) {
      J(f.component.subTree, h, v, T);
      return;
    }
    if (x & 128) {
      f.suspense.move(h, v, T);
      return;
    }
    if (x & 64) {
      I.move(f, h, v, Ve);
      return;
    }
    if (I === X) {
      s(b, h, v);
      for (let R = 0; R < w.length; R++)
        J(w[R], h, v, T);
      s(f.anchor, h, v);
      return;
    }
    if (I === Is) {
      Z(f, h, v);
      return;
    }
    if (T !== 2 && x & 1 && A)
      if (T === 0)
        A.persisted && !b[ws] ? s(b, h, v) : (A.beforeEnter(b), s(b, h, v), Pe(() => A.enter(b), y));
      else {
        const { leave: R, delayLeave: G, afterLeave: B } = A, Q = () => {
          f.ctx.isUnmounted ? i(b) : s(b, h, v);
        }, ie = () => {
          const te = b._isLeaving || !!b[ws];
          b._isLeaving && b[ws](
            !0
            /* cancelled */
          ), A.persisted && !te ? Q() : R(b, () => {
            Q(), B && B();
          });
        };
        G ? G(b, Q, ie) : ie();
      }
    else
      s(b, h, v);
  }, q = (f, h, v, T = !1, y = !1) => {
    const {
      type: b,
      props: I,
      ref: A,
      children: w,
      dynamicChildren: x,
      shapeFlag: j,
      patchFlag: R,
      dirs: G,
      cacheIndex: B,
      memo: Q
    } = f;
    if (R === -2 && (y = !1), A != null && (At(), _n(A, null, v, f, !0), It()), B != null && (h.renderCache[B] = void 0), j & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const ie = j & 1 && G, te = !vn(f);
    let me;
    if (te && (me = I && I.onVnodeBeforeUnmount) && Je(me, h, f), j & 6)
      be(f.component, v, T);
    else {
      if (j & 128) {
        f.suspense.unmount(v, T);
        return;
      }
      ie && Nt(f, null, h, "beforeUnmount"), j & 64 ? f.type.remove(
        f,
        h,
        v,
        Ve,
        T
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== X || R > 0 && R & 64) ? le(
        x,
        h,
        v,
        !1,
        !0
      ) : (b === X && R & 384 || !y && j & 16) && le(w, h, v), T && K(f);
    }
    const Te = Q != null && B == null;
    (te && (me = I && I.onVnodeUnmounted) || ie || Te) && Pe(() => {
      me && Je(me, h, f), ie && Nt(f, null, h, "unmounted"), Te && (f.el = null);
    }, v);
  }, K = (f) => {
    const { type: h, el: v, anchor: T, transition: y } = f;
    if (h === X) {
      ye(v, T);
      return;
    }
    if (h === Is) {
      O(f);
      return;
    }
    const b = () => {
      i(v), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (f.shapeFlag & 1 && y && !y.persisted) {
      const { leave: I, delayLeave: A } = y, w = () => I(v, b);
      A ? A(f.el, b, w) : w();
    } else
      b();
  }, ye = (f, h) => {
    let v;
    for (; f !== h; )
      v = E(f), i(f), f = v;
    i(h);
  }, be = (f, h, v) => {
    const { bum: T, scope: y, job: b, subTree: I, um: A, m: w, a: x } = f;
    Li(w), Li(x), T && Hn(T), y.stop(), b && (b.flags |= 8, q(I, f, h, v)), A && Pe(A, h), Pe(() => {
      f.isUnmounted = !0;
    }, h);
  }, le = (f, h, v, T = !1, y = !1, b = 0) => {
    for (let I = b; I < f.length; I++)
      q(f[I], h, v, T, y);
  }, ve = (f) => {
    if (f.shapeFlag & 6)
      return ve(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = E(f.anchor || f.el), v = h && h[Da];
    return v ? E(v) : h;
  };
  let Ue = !1;
  const we = (f, h, v) => {
    let T;
    f == null ? h._vnode && (q(h._vnode, null, null, !0), T = h._vnode.component) : P(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      v
    ), h._vnode = f, Ue || (Ue = !0, Mi(T), Ko(), Ue = !1);
  }, Ve = {
    p: P,
    um: q,
    m: J,
    r: K,
    mt: Rt,
    mc: De,
    pc: Vt,
    pbc: Pt,
    n: ve,
    o: e
  };
  return {
    render: we,
    hydrate: void 0,
    createApp: Xa(we)
  };
}
function As({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Lt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function fl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function rr(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (Y(s) && Y(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = ut(i[o]), a.el = r.el), !n && a.patchFlag !== -2 && rr(r, a)), a.type === ms && (a.patchFlag === -1 && (a = i[o] = ut(a)), a.el = r.el), a.type === ht && !a.el && (a.el = r.el);
    }
}
function dl(e) {
  const t = e.slice(), n = [0];
  let s, i, o, r, a;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const p = e[s];
    if (p !== 0) {
      if (i = n[n.length - 1], e[i] < p) {
        t[s] = i, n.push(s);
        continue;
      }
      for (o = 0, r = n.length - 1; o < r; )
        a = o + r >> 1, e[n[a]] < p ? o = a + 1 : r = a;
      p < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; )
    n[o] = r, r = t[r];
  return n;
}
function ar(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ar(t);
}
function Li(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function lr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? lr(t.subTree) : null;
}
const cr = (e) => e.__isSuspense;
function pl(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : Va(e);
}
const X = /* @__PURE__ */ Symbol.for("v-fgt"), ms = /* @__PURE__ */ Symbol.for("v-txt"), ht = /* @__PURE__ */ Symbol.for("v-cmt"), Is = /* @__PURE__ */ Symbol.for("v-stc"), Gt = [];
let Le = null;
function V(e = !1) {
  Gt.push(Le = e ? null : []);
}
function ur() {
  Gt.pop(), Le = Gt[Gt.length - 1] || null;
}
let wn = 1;
function ki(e, t = !1) {
  wn += e, e < 0 && Le && t && (Le.hasOnce = !0);
}
function fr(e) {
  return e.dynamicChildren = wn > 0 ? Le || Kt : null, ur(), wn > 0 && Le && Le.push(e), e;
}
function k(e, t, n, s, i, o) {
  return fr(
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
function ml(e, t, n, s, i) {
  return fr(
    pt(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function dr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function an(e, t) {
  return e.type === t.type && e.key === t.key;
}
const pr = ({ key: e }) => e ?? null, Kn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? xe(e) || /* @__PURE__ */ Ce(e) || oe(e) ? { i: Fe, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, i = null, o = e === X ? 0 : 1, r = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && pr(t),
    ref: t && Kn(t),
    scopeId: Wo,
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
    ctx: Fe
  };
  return a ? (qn(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= xe(n) ? 8 : 16), wn > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Le && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Le.push(l), l;
}
const pt = hl;
function hl(e, t = null, n = null, s = 0, i = null, o = !1) {
  if ((!e || e === za) && (e = ht), dr(e)) {
    const a = Qt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && qn(a, n), wn > 0 && !o && Le && (a.shapeFlag & 6 ? Le[Le.indexOf(e)] = a : Le.push(a)), a.patchFlag = -2, a;
  }
  if (Al(e) && (e = e.__vccOpts), t) {
    t = gl(t);
    let { class: a, style: l } = t;
    a && !xe(a) && (t.class = Ye(a)), fe(l) && (/* @__PURE__ */ di(l) && !Y(l) && (l = ze({}, l)), t.style = ii(l));
  }
  const r = xe(e) ? 1 : cr(e) ? 128 : ds(e) ? 64 : fe(e) ? 4 : oe(e) ? 2 : 0;
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
function gl(e) {
  return e ? /* @__PURE__ */ di(e) || tr(e) ? ze({}, e) : e : null;
}
function Qt(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: r, children: a, transition: l } = e, p = t ? _l(i || {}, t) : i, m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && pr(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Y(o) ? o.concat(Kn(t)) : [o, Kn(t)] : Kn(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== X ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Qt(e.ssContent),
    ssFallback: e.ssFallback && Qt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && s && mi(
    m,
    l.clone(m)
  ), m;
}
function lt(e = " ", t = 0) {
  return pt(ms, null, e, t);
}
function je(e = "", t = !1) {
  return t ? (V(), ml(ht, null, e)) : pt(ht, null, e);
}
function Qe(e) {
  return e == null || typeof e == "boolean" ? pt(ht) : Y(e) ? pt(
    X,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : dr(e) ? ut(e) : pt(ms, null, String(e));
}
function ut(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qt(e);
}
function qn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Y(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), qn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !tr(t) ? t._ctx = Fe : i === 3 && Fe && (Fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (oe(t)) {
    if (s & 65) {
      qn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Fe }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [lt(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function _l(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Ye([t.class, s.class]));
      else if (i === "style")
        t.style = ii([t.style, s.style]);
      else if (os(i)) {
        const o = t[i], r = s[i];
        r && o !== r && !(Y(o) && o.includes(r)) ? t[i] = o ? [].concat(o, r) : r : r == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !rs(i) && (t[i] = r);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Je(e, t, n, s = null) {
  st(e, t, 7, [
    n,
    s
  ]);
}
const vl = Zo();
let yl = 0;
function bl(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || vl, o = {
    uid: yl++,
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
    scope: new na(
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
    propsOptions: ol(s, i),
    emitsOptions: Qa(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ue,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ue,
    data: ue,
    props: ue,
    attrs: ue,
    slots: ue,
    refs: ue,
    setupState: ue,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Za.bind(null, o), e.ce && e.ce(o), o;
}
let Mt = null;
const xl = () => Mt || Fe;
let es, En;
{
  const e = cs(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  es = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Mt = n
  ), En = t(
    "__VUE_SSR_SETTERS__",
    (n) => An = n
  );
}
const _i = (e) => {
  const t = Mt;
  return es(e), e.scope.on(), () => {
    e.scope.off(), es(t);
  };
}, Oi = () => {
  Mt && Mt.scope.off(), es(null);
};
function mr(e) {
  return e.vnode.shapeFlag & 4;
}
let An = !1;
function Tl(e, t = !1, n = !1) {
  t && En(t);
  const { props: s, children: i } = e.vnode, o = mr(e);
  sl(e, s, o, t), al(e, i, n || t);
  const r = o ? Sl(e, t) : void 0;
  return t && En(!1), r;
}
function Sl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Wa);
  const { setup: s } = n;
  if (s) {
    At();
    const i = e.setupContext = s.length > 1 ? El(e) : null, o = _i(e), r = Vn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = yo(r);
    if (It(), o(), (a || e.sp) && !vn(e) && ja(e), a) {
      if (r.then(Oi, Oi), t)
        return r.then((l) => {
          En(!0);
          try {
            Fi(e, l, t);
          } finally {
            En(!1);
          }
        }).catch((l) => {
          fs(l, e, 0);
        });
      e.asyncDep = r;
    } else
      Fi(e, r);
  } else
    hr(e);
}
function Fi(e, t, n) {
  oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : fe(t) && (e.setupState = Uo(t)), hr(e);
}
function hr(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ft);
}
const wl = {
  get(e, t) {
    return Ee(e, "get", ""), e[t];
  }
};
function El(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, wl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function hs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Uo(Ta(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in yn)
        return yn[n](e);
    },
    has(t, n) {
      return n in t || n in yn;
    }
  })) : e.proxy;
}
function Al(e) {
  return oe(e) && "__vccOpts" in e;
}
const he = (e, t) => /* @__PURE__ */ Ia(e, t, An), Il = "3.5.41";
let zs;
const $i = typeof window < "u" && window.trustedTypes;
if ($i)
  try {
    zs = /* @__PURE__ */ $i.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const gr = zs ? (e) => zs.createHTML(e) : (e) => e, Ml = "http://www.w3.org/2000/svg", Cl = "http://www.w3.org/1998/Math/MathML", ct = typeof document < "u" ? document : null, Di = ct && /* @__PURE__ */ ct.createElement("template"), Pl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? ct.createElementNS(Ml, e) : t === "mathml" ? ct.createElementNS(Cl, e) : n ? ct.createElement(e, { is: n }) : ct.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => ct.createTextNode(e),
  createComment: (e) => ct.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ct.querySelector(e),
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
      Di.innerHTML = gr(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Di.content;
      if (s === "svg" || s === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Rl = /* @__PURE__ */ Symbol("_vtc");
function Vl(e, t, n) {
  const s = e[Rl];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Gi = /* @__PURE__ */ Symbol("_vod"), Nl = /* @__PURE__ */ Symbol("_vsh"), Ll = /* @__PURE__ */ Symbol(""), kl = /(?:^|;)\s*display\s*:/;
function Ol(e, t, n) {
  const s = e.style, i = xe(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (xe(t))
        for (const r of t.split(";")) {
          const a = r.slice(0, r.indexOf(":")).trim();
          n[a] == null && fn(s, a, "");
        }
      else
        for (const r in t)
          n[r] == null && fn(s, r, "");
    for (const r in n) {
      r === "display" && (o = !0);
      const a = n[r];
      a != null ? $l(
        e,
        r,
        !xe(t) && t ? t[r] : void 0,
        a
      ) || fn(s, r, a) : fn(s, r, "");
    }
  } else if (i) {
    if (t !== n) {
      const r = s[Ll];
      r && (n += ";" + r), s.cssText = n, o = kl.test(n);
    }
  } else t && e.removeAttribute("style");
  Gi in e && (e[Gi] = o ? s.display : "", e[Nl] && (s.display = "none"));
}
const Ui = /\s*!important$/;
function fn(e, t, n) {
  if (Y(n))
    n.forEach((s) => fn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Fl(e, t);
    Ui.test(n) ? e.setProperty(
      Ut(s),
      n.replace(Ui, ""),
      "important"
    ) : e[s] = n;
  }
}
const ji = ["Webkit", "Moz", "ms"], Ms = {};
function Fl(e, t) {
  const n = Ms[t];
  if (n)
    return n;
  let s = Be(t);
  if (s !== "filter" && s in e)
    return Ms[t] = s;
  s = To(s);
  for (let i = 0; i < ji.length; i++) {
    const o = ji[i] + s;
    if (o in e)
      return Ms[t] = o;
  }
  return t;
}
function $l(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && xe(s) && n === s;
}
const Bi = "http://www.w3.org/1999/xlink";
function Hi(e, t, n, s, i, o = ea(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Bi, t.slice(6, t.length)) : e.setAttributeNS(Bi, t, n) : n == null || o && !wo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : nt(n) ? String(n) : n
  );
}
function Ki(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? gr(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = wo(n) : n == null && a === "string" ? (n = "", r = !0) : a === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(i || t);
}
function Tt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Dl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const zi = /* @__PURE__ */ Symbol("_vei");
function Gl(e, t, n, s, i = null) {
  const o = e[zi] || (e[zi] = {}), r = o[t];
  if (s && r)
    r.value = s;
  else {
    const [a, l] = Bl(t);
    if (s) {
      const p = o[t] = zl(
        s,
        i
      );
      Tt(e, a, p, l);
    } else r && (Dl(e, a, r, l), o[t] = void 0);
  }
}
const Ul = /(Once|Passive|Capture)$/, jl = /^on:?(?:Once|Passive|Capture)$/;
function Bl(e) {
  let t, n;
  for (; (n = e.match(Ul)) && !jl.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ut(e.slice(2)), t];
}
let Cs = 0;
const Hl = /* @__PURE__ */ Promise.resolve(), Kl = () => Cs || (Hl.then(() => Cs = 0), Cs = Date.now());
function zl(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (Y(i)) {
      const o = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        o.call(s), s._stopped = !0;
      };
      const r = i.slice(), a = [s];
      for (let l = 0; l < r.length && !s._stopped; l++) {
        const p = r[l];
        p && st(
          p,
          t,
          5,
          a
        );
      }
    } else
      st(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = Kl(), n;
}
const Wi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wl = (e, t, n, s, i, o) => {
  const r = i === "svg";
  t === "class" ? Vl(e, s, r) : t === "style" ? Ol(e, n, s) : os(t) ? rs(t) || Gl(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Jl(e, t, s, r)) ? (Ki(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Hi(e, t, s, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Xl(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !xe(s))) ? Ki(e, Be(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Hi(e, t, s, r));
};
function Jl(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wi(t) && oe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Wi(t) && xe(n) ? !1 : t in e;
}
function Xl(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Be(t);
  return Array.isArray(n) ? n.some((i) => Be(i) === s) : Object.keys(n).some((i) => Be(i) === s);
}
const qt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Y(t) ? (n) => Hn(t, n) : t;
};
function Yl(e) {
  e.target.composing = !0;
}
function Ji(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const et = /* @__PURE__ */ Symbol("_assign"), On = /* @__PURE__ */ Symbol("_initialValue");
function Ps(e, t, n) {
  return t && (e = e.trim()), n && (e = ls(e)), e;
}
const ne = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[On] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[On] = e.defaultValue.replace(/\r\n?/g, `
`))), e[et] = qt(i);
    const o = s || i.props && i.props.type === "number";
    Tt(e, t ? "change" : "input", (r) => {
      r.target.composing || e[et](Ps(e.value, n, o));
    }), (n || o) && Tt(e, "change", () => {
      e.value = Ps(e.value, n, o);
    }), t || (Tt(e, "compositionstart", Yl), Tt(e, "compositionend", Ji), Tt(e, "change", Ji));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", o = e[On];
    delete e[On], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[et](Ps(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: o } }, r) {
    if (e[et] = qt(r), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? ls(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const p = e.getRootNode();
    (p instanceof Document || p instanceof ShadowRoot) && p.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === l) || (e.value = l);
  }
}, Xi = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[et] = qt(n), Tt(e, "change", () => {
      const s = e._modelValue, i = In(e), o = e.checked, r = e[et];
      if (Y(s)) {
        const a = oi(s, i), l = a !== -1;
        if (o && !l)
          r(s.concat(i));
        else if (!o && l) {
          const p = [...s];
          p.splice(a, 1), r(p);
        }
      } else if (en(s)) {
        const a = new Set(s);
        o ? a.add(i) : a.delete(i), r(a);
      } else
        r(_r(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Yi,
  beforeUpdate(e, t, n) {
    e[et] = qt(n), Yi(e, t, n);
  }
};
function Yi(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let i;
  if (Y(t))
    i = oi(t, s.props.value) > -1;
  else if (en(t))
    i = t.has(s.props.value);
  else {
    if (t === n) return;
    i = tn(t, _r(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const ge = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, Tt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? ls(In(o)) : In(o)
      );
      e[et](
        e.multiple ? en(e._modelValue) ? new Set(i) : i : i[0]
      ), e._assigning = !0, Bo(() => {
        e._assigning = !1;
      });
    }), e[et] = qt(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Zi(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[et] = qt(n);
  },
  updated(e, { value: t }) {
    e._assigning || Zi(e, t);
  }
};
function Zi(e, t) {
  const n = e.multiple, s = Y(t);
  if (!(n && !s && !en(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const r = e.options[i], a = In(r);
      if (n)
        if (s) {
          const l = typeof a;
          l === "string" || l === "number" ? r.selected = t.some((p) => String(p) === String(a)) : r.selected = oi(t, a) > -1;
        } else
          r.selected = t.has(a);
      else if (tn(In(r), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function In(e) {
  return "_value" in e ? e._value : e.value;
}
function _r(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Zl = /* @__PURE__ */ ze({ patchProp: Wl }, Pl);
let Qi;
function Ql() {
  return Qi || (Qi = cl(Zl));
}
const ql = ((...e) => {
  const t = Ql().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = tc(s);
    if (!i) return;
    const o = t._component;
    !oe(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, ec(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
});
function ec(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function tc(e) {
  return xe(e) ? document.querySelector(e) : e;
}
const nc = "tavern_multi_tts_cache", Oe = "audio_cache", sc = 1, qi = 100, eo = 50 * 1024 * 1024;
function Rs(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function ic(e) {
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
  } : e.engine === "fish_audio" ? {
    text: e.text,
    engine: e.engine,
    origin: e.fishAudio?.origin ?? "",
    model: e.fishAudio?.model ?? "",
    referenceId: e.fishAudio?.referenceId ?? "",
    speed: e.fishAudio?.speed,
    volume: e.fishAudio?.volume,
    format: e.fishAudio?.format ?? "mp3"
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
async function oc(e) {
  const t = ic(e), n = JSON.stringify(t);
  if (Object.keys(t).some((i) => /api[_-]?key|authorization|token|secret|password/i.test(i)))
    throw new Error("音频缓存键不得包含密钥字段");
  const s = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(n));
  return [...new Uint8Array(s)].map((i) => i.toString(16).padStart(2, "0")).join("");
}
function rc() {
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
function ac(e, t) {
  let n = null, s = null, i = 0;
  function o(a) {
    n = a, a.onversionchange = () => {
      a.close(), n === a && (n = null);
    };
    const l = a.onclose;
    return a.onclose = (p) => {
      n === a && (n = null), typeof l == "function" && l.call(a, p);
    }, a;
  }
  async function r() {
    return n || (s ? await s : (s = new Promise((a, l) => {
      const p = e.open(t, sc);
      i += 1, p.onupgradeneeded = () => {
        const m = p.result;
        m.objectStoreNames.contains(Oe) || m.createObjectStore(Oe, { keyPath: "key" });
      }, p.onsuccess = () => a(o(p.result)), p.onerror = () => l(p.error ?? Error("IndexedDB 打开失败"));
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
function lc(e, t) {
  const n = ac(e, t);
  async function s() {
    return await n.getDb();
  }
  return {
    async get(i) {
      const o = await s();
      return await new Promise((r, a) => {
        const p = o.transaction(Oe, "readonly").objectStore(Oe).get(i);
        p.onsuccess = () => r(p.result), p.onerror = () => a(p.error ?? Error("读取缓存失败"));
      });
    },
    async put(i) {
      const o = await s();
      await new Promise((r, a) => {
        const l = o.transaction(Oe, "readwrite");
        l.objectStore(Oe).put(i), l.oncomplete = () => r(), l.onerror = () => a(l.error ?? Error("写入缓存失败"));
      });
    },
    async delete(i) {
      const o = await s();
      await new Promise((r, a) => {
        const l = o.transaction(Oe, "readwrite");
        l.objectStore(Oe).delete(i), l.oncomplete = () => r(), l.onerror = () => a(l.error ?? Error("删除缓存失败"));
      });
    },
    async clear() {
      const i = await s();
      await new Promise((o, r) => {
        const a = i.transaction(Oe, "readwrite");
        a.objectStore(Oe).clear(), a.oncomplete = () => o(), a.onerror = () => r(a.error ?? Error("清空缓存失败"));
      });
    },
    async getAll() {
      const i = await s();
      return await new Promise((o, r) => {
        const l = i.transaction(Oe, "readonly").objectStore(Oe).openCursor(), p = [];
        l.onsuccess = () => {
          const m = l.result;
          if (!m) {
            o(p);
            return;
          }
          p.push(m.value), m.continue();
        }, l.onerror = () => r(l.error ?? Error("读取缓存记录失败"));
      });
    }
  };
}
async function cc(e) {
  const t = await e.getAll();
  let n = t.reduce((o, r) => o + (r.blob?.size ?? 0), 0);
  if (t.length <= qi && n <= eo)
    return;
  const s = [...t].sort((o, r) => o.created_at - r.created_at);
  let i = t.length;
  for (const o of s) {
    if (i <= qi && n <= eo)
      break;
    await e.delete(o.key), i -= 1, n -= o.blob?.size ?? 0;
  }
}
function uc(e) {
  const t = e?.backend === "memory" ? rc() : lc(
    e?.indexedDB ?? indexedDB,
    e?.dbName ?? nc
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
      }), await cc(t);
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
      const o = (await t.getAll()).sort((a, l) => l.created_at - a.created_at), r = Math.max(0, (n - 1) * s);
      return {
        items: o.slice(r, r + s).map((a) => ({
          key: a.key,
          size: a.blob?.size ?? 0,
          createdAt: a.created_at
        })),
        total: o.length,
        totalBytes: o.reduce((a, l) => a + (l.blob?.size ?? 0), 0)
      };
    }
  };
}
const gs = uc({
  backend: typeof indexedDB > "u" ? "memory" : "indexeddb"
});
function fc(e) {
  return gs.get(e);
}
function dc(e, t) {
  return gs.set(e, t);
}
function vr() {
  return gs.clear();
}
function pc() {
  return gs.stats();
}
let xt = null, zn = null;
function Wn() {
  xt && (xt.pause(), zn?.());
}
function yr(e, t, n, s, i) {
  const o = URL.createObjectURL(e), r = new Audio(o);
  let a = "paused";
  const l = () => {
    URL.revokeObjectURL(o), xt === r && (xt = null, zn = null);
  }, p = () => {
    xt && xt !== r && (xt.pause(), zn?.()), xt = r, zn = l;
  };
  r.onplay = () => {
    a = "playing", t?.();
  }, r.onpause = () => {
    a === "ended" || a === "error" || (a = "paused", i?.());
  }, r.onended = () => {
    a = "ended", l(), n?.();
  }, r.onerror = (g) => {
    a = "error", l(), s?.(g);
  };
  const m = async () => {
    p();
    try {
      await r.play();
    } catch (g) {
      throw a = "error", l(), s?.(g), g;
    }
  };
  return m().catch(() => {
  }), {
    stop: () => {
      a = "ended", r.pause(), l();
    },
    pause: () => {
      a === "playing" && r.pause();
    },
    resume: m,
    restart: async () => {
      r.currentTime = 0, await m();
    },
    getState: () => a
  };
}
function br(e) {
  return [...e].map((n) => n.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(n) ? "_" : n).join("").trim() || "audio.mp3";
}
function mc(e, t, n = "mp3") {
  return br(`tavern_multi_tts_${e}_${t}.${n}`);
}
function hc(e, t) {
  const n = br(t), s = URL.createObjectURL(e), i = URL.revokeObjectURL.bind(URL), o = document.createElement("a");
  o.href = s, o.download = n, document.body.appendChild(o), o.click(), o.remove(), window.setTimeout(() => i(s), 0);
}
const gc = "Tavern Multi-TTS", Vs = "tavern_multi_tts", _c = "0.1.0", Ns = "tavern-multi-tts-root", Ae = "[Tavern Multi-TTS]", ts = ["ZH", "EN", "JA", "AR", "ES"], vi = ["s2.1-pro-free", "s2.1-pro"], xr = 3, Tr = [
  "speech-02-hd",
  "speech-02-turbo",
  "speech-2.8-hd",
  "speech-2.8-turbo",
  "speech-2.6-hd",
  "speech-2.6-turbo"
], Jn = [
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
`), Ws = [
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
`), Js = [
  "<VOICE_RULE>",
  '请仅对角色：${mapped_characters} 的直接台词添加 <say char="角色名">...</say> 标签。',
  "角色映射名单：${mapped_characters}",
  "char 必须与映射角色名完全一致。",
  "禁止给旁白、动作、心理描写、翻译文本添加 say 标签。",
  "禁止空 say，禁止嵌套 say。",
  "",
  "Fish Audio S2 支持方括号自然语言语音提示。",
  "日常、平静、普通闲聊不要添加提示标签。",
  "只有出现明确语气、情绪或拟声需求时，才在台词中少量使用英文方括号提示。",
  "每句通常不超过 1 项，确有必要最多 2 项。",
  "标签必须短小、自然、符合上下文，不要堆叠或使用互相冲突的标签。",
  "",
  "可用写法示例：",
  '<say char="角色名">今天要去哪里？</say>',
  '<say char="角色名">[laughing]你居然真的来了。</say>',
  '<say char="角色名">我只是有点累。[sigh]</say>',
  '<say char="角色名">[whispers softly]小声一点，别让他们听见。</say>',
  '<say char="角色名">[inhale]好，我准备好了。</say>',
  "",
  "常见提示包括：",
  "[laugh]、[laughing]、[chuckle]、[sigh]、[gasp]、",
  "[pause]、[inhale]、[exhale]、[whisper]、",
  "[angry]、[excited]、[sad]、[surprised]",
  "",
  "S2 的方括号内容属于自然语言描述，并非固定标签表；",
  "但禁止输出冗长句子、中文括号提示、圆括号语气词、emo 属性、八维向量或 JSON。",
  "</VOICE_RULE>"
].join(`
`), vc = [
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
`), gt = {
  schemaVersion: xr,
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
  fishAudioApiKey: "",
  fishAudioModel: "s2.1-pro-free",
  fishAudioReferenceId: "",
  fishAudioSpeed: 1,
  fishAudioVolume: 0,
  fishAudioCharacterMappings: [],
  fishAudioCharacterMappingPresets: [],
  injectEnabled: !0,
  injectDepth: 1,
  injectRole: "system",
  injectTemplate: Jn,
  indexTtsInjectTemplate: Ws,
  fishAudioInjectTemplate: Js
};
function _t(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function ee(e, t) {
  return typeof e == "string" ? e : t;
}
function yc(e) {
  const t = ee(e, Jn) || Jn;
  return t === vc ? Jn : t;
}
function Ls(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Ne(e, t, n, s, i = !1) {
  const o = typeof e == "number" ? e : Number(e);
  if (!Number.isFinite(o))
    return s;
  const r = i ? Math.round(o) : o;
  return Math.min(n, Math.max(t, r));
}
function bc(e) {
  return e === "minimax" || e === "local_gsvi" || e === "index_tts" || e === "fish_audio" ? e : "minimax";
}
function Sr(e) {
  return ts.includes(String(e)) ? e : gt.indexTtsLanguage;
}
function xc(e) {
  return vi.includes(String(e)) ? e : gt.fishAudioModel;
}
function Tc(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Sc(e) {
  return Tr.includes(String(e)) ? e : gt.model;
}
function wc(e) {
  return e === "manual" || e === "auto_first_n" || e === "auto_all" ? e : gt.prefetchMode;
}
function Ec(e) {
  return e === "user" || e === "assistant" || e === "system" ? e : gt.injectRole;
}
function Ac(e) {
  return e === "zh" || e === "en" || e === "ja" ? e : gt.testLanguage;
}
function Ic(e) {
  return e === "wav" ? "wav" : "mp3";
}
function wr(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    characterName: ee(t.characterName, "").trim(),
    minimaxVoiceId: ee(t.minimaxVoiceId, "").trim()
  })).filter((t) => t.characterName || t.minimaxVoiceId) : [];
}
function Mc(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    name: ee(t.name, "").trim(),
    mappings: wr(t.mappings)
  })).filter((t) => t.name) : [];
}
function Er(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    characterName: ee(t.characterName, "").trim(),
    gsviVoiceId: ee(t.gsviVoiceId, "").trim(),
    gsviLanguage: ee(t.gsviLanguage, "").trim(),
    gsviEmotion: ee(t.gsviEmotion, "").trim()
  })).filter((t) => t.characterName || t.gsviVoiceId) : [];
}
function Cc(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    name: ee(t.name, "").trim(),
    mappings: Er(t.mappings)
  })).filter((t) => t.name) : [];
}
function Ar(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    characterName: ee(t.characterName, "").trim(),
    indexTtsVoiceId: ee(t.indexTtsVoiceId, "").trim(),
    indexTtsLanguage: Sr(t.indexTtsLanguage)
  })).filter((t) => t.characterName || t.indexTtsVoiceId) : [];
}
function Pc(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    name: ee(t.name, "").trim(),
    mappings: Ar(t.mappings)
  })).filter((t) => t.name) : [];
}
function Ir(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    characterName: ee(t.characterName, "").trim(),
    fishAudioReferenceId: ee(t.fishAudioReferenceId, "").trim()
  })).filter((t) => t.characterName || t.fishAudioReferenceId) : [];
}
function Rc(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    name: ee(t.name, "").trim(),
    mappings: Ir(t.mappings)
  })).filter((t) => t.name) : [];
}
function Vc(e, t) {
  const n = typeof e == "number" ? e : Number(e);
  return Number.isFinite(n) ? n : t;
}
function Xt(e) {
  const t = _t(e) ? e : {};
  return {
    schemaVersion: xr,
    enabled: Ls(t.enabled, gt.enabled),
    ttsEngine: bc(t.ttsEngine),
    apiKey: ee(t.apiKey, ""),
    groupId: ee(t.groupId, ""),
    voiceId: ee(t.voiceId, ""),
    voiceCatalogSelectedId: ee(t.voiceCatalogSelectedId, ""),
    minimaxRegion: Tc(t.minimaxRegion),
    testLanguage: Ac(t.testLanguage),
    model: Sc(t.model),
    speed: Ne(t.speed, 0.5, 2, 1),
    vol: Ne(t.vol, 0, 10, 1),
    requestTimeoutMs: Ne(t.requestTimeoutMs, 1e3, 3e4, 15e3, !0),
    maxConcurrency: Ne(t.maxConcurrency, 1, 10, 3, !0),
    prefetchMode: wc(t.prefetchMode),
    prefetchFirstCount: Ne(t.prefetchFirstCount, 1, 10, 2, !0),
    localGsviBaseUrl: ee(t.localGsviBaseUrl, ""),
    localGsviAuthToken: ee(t.localGsviAuthToken, ""),
    localGsviModel: ee(t.localGsviModel, ""),
    localGsviFormat: Ic(t.localGsviFormat),
    localGsviUseReferenceAudio: Ls(t.localGsviUseReferenceAudio, !1),
    localGsviCharacter: ee(t.localGsviCharacter, ""),
    localGsviLanguage: ee(t.localGsviLanguage, "ja"),
    localGsviEmotion: ee(t.localGsviEmotion, ""),
    localGsviReferenceText: ee(t.localGsviReferenceText, ""),
    localGsviTopK: Ne(t.localGsviTopK, 1, 200, 20, !0),
    localGsviTopP: Ne(t.localGsviTopP, 0, 1, 0.7),
    localGsviTemperature: Ne(t.localGsviTemperature, 0, 2, 0.7),
    localGsviTextLang: ee(t.localGsviTextLang, "多语种混合"),
    localGsviTextSplitMethod: ee(t.localGsviTextSplitMethod, "按标点符号切"),
    localGsviBatchSize: Ne(t.localGsviBatchSize, 1, 8, 1, !0),
    characterMappings: wr(t.characterMappings),
    characterMappingPresets: Mc(t.characterMappingPresets),
    gsviCharacterMappings: Er(t.gsviCharacterMappings),
    gsviCharacterMappingPresets: Cc(t.gsviCharacterMappingPresets),
    indexTtsBaseUrl: ee(t.indexTtsBaseUrl, gt.indexTtsBaseUrl),
    indexTtsVoiceId: ee(t.indexTtsVoiceId, ""),
    indexTtsLanguage: Sr(t.indexTtsLanguage),
    indexTtsCharacterMappings: Ar(t.indexTtsCharacterMappings),
    indexTtsCharacterMappingPresets: Pc(t.indexTtsCharacterMappingPresets),
    indexTtsDurationFactor: Ne(t.indexTtsDurationFactor, 0.5, 2, 1),
    indexTtsEmoWeight: Ne(t.indexTtsEmoWeight, 0, 1, 0.8),
    fishAudioApiKey: ee(t.fishAudioApiKey, ""),
    fishAudioModel: xc(t.fishAudioModel),
    fishAudioReferenceId: ee(t.fishAudioReferenceId, ""),
    fishAudioSpeed: Ne(t.fishAudioSpeed, 0.5, 2, 1),
    fishAudioVolume: Vc(t.fishAudioVolume, 0),
    fishAudioCharacterMappings: Ir(t.fishAudioCharacterMappings),
    fishAudioCharacterMappingPresets: Rc(
      t.fishAudioCharacterMappingPresets
    ),
    injectEnabled: Ls(t.injectEnabled, !0),
    injectDepth: Ne(t.injectDepth, 0, 50, 1, !0),
    injectRole: Ec(t.injectRole),
    injectTemplate: yc(t.injectTemplate),
    indexTtsInjectTemplate: ee(t.indexTtsInjectTemplate, Ws) || Ws,
    fishAudioInjectTemplate: ee(t.fishAudioInjectTemplate, Js) || Js
  };
}
function wt(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function Nc(e, t) {
  return e.enabled !== t.enabled || e.injectEnabled !== t.injectEnabled || e.injectDepth !== t.injectDepth || e.injectRole !== t.injectRole || e.injectTemplate !== t.injectTemplate || e.indexTtsInjectTemplate !== t.indexTtsInjectTemplate || e.fishAudioInjectTemplate !== t.fishAudioInjectTemplate || e.ttsEngine !== t.ttsEngine || !wt(e.characterMappings, t.characterMappings) || !wt(e.gsviCharacterMappings, t.gsviCharacterMappings) || !wt(e.indexTtsCharacterMappings, t.indexTtsCharacterMappings) || !wt(e.fishAudioCharacterMappings, t.fishAudioCharacterMappings);
}
function Lc(e, t) {
  return e.enabled !== t.enabled || e.ttsEngine !== t.ttsEngine || !wt(e.characterMappings, t.characterMappings) || !wt(e.gsviCharacterMappings, t.gsviCharacterMappings) || !wt(e.indexTtsCharacterMappings, t.indexTtsCharacterMappings) || !wt(e.fishAudioCharacterMappings, t.fishAudioCharacterMappings);
}
function kc(e, t) {
  return {
    syncInjection: Nc(e, t),
    refreshDecorations: Lc(e, t)
  };
}
function Oc(e, t, n = {}) {
  let s = !1, i = !1, o = null, r = null, a = null;
  function l() {
    return Xt(e.readRawSettings());
  }
  function p() {
    const P = l();
    return e.writeSettings(P), P;
  }
  function m() {
    if (s)
      return !0;
    const P = document.getElementById(Ns);
    P && P.remove();
    const F = e.findSettingsRoot();
    return F ? (a = document.createElement("div"), a.id = Ns, a.dataset.tavernMultiTts = "settings", F.appendChild(a), t.mount(a, l()), r = e.onPageHide(() => {
      g({ removeSettings: !1 });
    }), s = !0, n.startRuntime?.(), console.info(`${Ae} settings panel mounted`), !0) : !1;
  }
  function g(P) {
    n.stopRuntime?.(), n.stopPlayback?.(), o?.(), o = null, i = !1, r?.(), r = null, t.unmount(), (a ?? document.getElementById(Ns))?.remove(), a = null, s = !1, P.removeSettings && e.removeSettings();
  }
  function E() {
    s || i || (p(), !m() && (i = !0, o = e.onAppReady(() => {
      const P = i;
      i = !1;
      const F = o;
      o = null, F?.(), P && (m() || console.error(
        `${Ae} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`
      ));
    })));
  }
  function S(P) {
    const F = l();
    F.enabled = P, e.writeSettings(F), n.syncInjection?.(), n.refreshDecorations?.();
  }
  function H(P) {
    const F = l();
    F.injectEnabled = P, e.writeSettings(F), n.syncInjection?.();
  }
  return {
    activate: E,
    disable() {
      g({ removeSettings: !1 }), console.info(`${Ae} disabled`);
    },
    destroy() {
      g({ removeSettings: !1 });
    },
    install() {
      p();
    },
    clean() {
      return g({ removeSettings: !0 }), console.info(`${Ae} settings cleaned`), n.clearCache?.();
    },
    delete() {
      return g({ removeSettings: !0 }), console.info(`${Ae} deleted`), n.clearCache?.();
    },
    updateSettings(P) {
      const F = l();
      e.writeSettings(Xt(P));
      const L = kc(F, l());
      L.syncInjection && n.syncInjection?.(), L.refreshDecorations && n.refreshDecorations?.();
    },
    setEnabled: S,
    setInjectEnabled: H,
    isActive() {
      return s;
    }
  };
}
function Fc() {
  return document.querySelector("#extensions_settings2") ?? document.querySelector("#extensions_settings");
}
class N extends Error {
  code;
  status;
  constructor(t, n, s) {
    super(t), this.name = "TtsRequestError", this.code = n, this.status = s;
  }
}
function Mr(e) {
  return e instanceof N;
}
function $c(e) {
  return new N(`请求超时（${e}ms），请检查网络或增大超时时间`, "timeout");
}
function Dc() {
  return new N("请求已取消", "cancelled");
}
async function tt(e, t, n, s) {
  const i = new AbortController();
  let o = !1, r = !1, a = null;
  const l = () => {
    r || (r = !0, clearTimeout(m), g?.removeEventListener("abort", E));
  }, p = () => o && !g?.aborted ? $c(s) : Dc(), m = setTimeout(() => {
    o = !0, i.abort("timeout");
  }, s), g = n.signal, E = () => {
    i.abort(g?.reason ?? "cancelled");
  };
  g && (g.aborted ? i.abort(g.reason ?? "cancelled") : g.addEventListener("abort", E, { once: !0 }));
  const S = () => {
    a?.(p());
  };
  i.signal.addEventListener("abort", S);
  const H = () => new Promise((F, L) => {
    if (i.signal.aborted) {
      L(p());
      return;
    }
    a = L;
  }), P = async (F) => {
    try {
      return await Promise.race([F, H()]);
    } catch (L) {
      throw L instanceof N ? L : i.signal.aborted ? p() : L;
    } finally {
      l(), i.signal.removeEventListener("abort", S);
    }
  };
  try {
    const F = await Promise.race([
      e(t, {
        ...n,
        signal: i.signal
      }),
      H()
    ]);
    return {
      ok: F.ok,
      status: F.status,
      statusText: F.statusText,
      headers: F.headers,
      text: () => P(F.text()),
      async json() {
        const L = await P(F.text());
        try {
          return JSON.parse(L);
        } catch {
          throw new N(
            "服务返回的不是合法 JSON，请检查地址或稍后重试",
            "invalid_json"
          );
        }
      },
      blob: () => P(F.blob()),
      close: l
    };
  } catch (F) {
    throw l(), i.signal.removeEventListener("abort", S), F instanceof N ? F : i.signal.aborted ? p() : F;
  }
}
function Yt(e, t) {
  return `${e.replace(/\/+$/, "")}${t.startsWith("/") ? "" : "/"}${t}`;
}
function Gc(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function Uc(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const jc = /api[_-]?key|authorization|token|secret|cookie|password/i;
function ns(e) {
  if (typeof e == "string")
    return e.length > 80 ? `${e.slice(0, 80)}…(len=${e.length})` : e;
  if (Array.isArray(e))
    return e.map((n) => ns(n));
  if (!e || typeof e != "object")
    return e;
  const t = {};
  for (const [n, s] of Object.entries(e)) {
    if (jc.test(n)) {
      t[n] = "[redacted]";
      continue;
    }
    if (n === "text" || n === "input" || n === "referenceText" || n === "reference_text") {
      t[n] = typeof s == "string" ? `[text len=${s.length}]` : "[text]";
      continue;
    }
    t[n] = ns(s);
  }
  return t;
}
function _s(e, t, n) {
  if (n === void 0) {
    console.info(`${Ae} [${e}] ${t}`);
    return;
  }
  console.info(`${Ae} [${e}] ${t}`, ns(n));
}
function Xs(e, t, n) {
  if (n === void 0) {
    console.warn(`${Ae} [${e}] ${t}`);
    return;
  }
  console.warn(`${Ae} [${e}] ${t}`, ns(n));
}
const Cr = "IndexTTS-2.5", Ys = "indextts", Zs = "1", Qs = "2.5";
function Mn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Bc(e) {
  return ts.includes(String(e));
}
function Hc(e) {
  const t = {
    model: Cr,
    input: e.text,
    voice: e.voiceId.trim(),
    response_format: "wav",
    language: e.language,
    duration_factor: e.durationFactor,
    emo_weight: e.emoWeight
  };
  return e.emotion && Object.keys(e.emotion).length > 0 && (t.emotion = e.emotion), t;
}
function Kc(e) {
  if (!e.baseUrl.trim())
    throw new N("请先填写 IndexTTS 服务地址", "config");
  if (!e.voiceId.trim())
    throw new N("请先选择 IndexTTS 音色预设", "config");
  if (!Bc(e.language))
    throw new N("IndexTTS 语言必须是 ZH、EN、JA、AR 或 ES", "config");
  if (!e.text.trim())
    throw new N("IndexTTS 合成文本为空", "config");
}
function zc(e) {
  return (e ?? "").split(";")[0]?.trim().toLowerCase() === "audio/wav";
}
function Wc(e, t) {
  if (Mn(e) && Mn(e.error)) {
    const n = typeof e.error.code == "string" ? e.error.code.trim() : "", s = typeof e.error.message == "string" ? e.error.message.trim() : "";
    if (n || s)
      return new N(
        `IndexTTS 请求失败：code=${n || "unknown"}, message=${s || "（无消息）"}`,
        "http",
        t
      );
  }
  return new N(`IndexTTS 请求失败：HTTP ${t}`, "http", t);
}
async function ks(e) {
  try {
    const t = await e.text();
    try {
      return Wc(JSON.parse(t), e.status);
    } catch {
      return new N(
        `IndexTTS 请求失败：HTTP ${e.status}`,
        "http",
        e.status
      );
    }
  } catch (t) {
    return t instanceof N ? new N(
      `IndexTTS 请求失败：HTTP ${e.status}`,
      "http",
      e.status
    ) : new N(
      `IndexTTS 请求失败：HTTP ${e.status}`,
      "http",
      e.status
    );
  }
}
function Jc(e) {
  return e.service !== Ys ? `IndexTTS 健康检查失败：服务名无效（期望 ${Ys}）` : e.api_version !== Zs ? `IndexTTS 健康检查失败：API 版本不匹配（期望 ${Zs}）` : e.model_version !== Qs ? `IndexTTS 健康检查失败：模型版本不匹配（期望 ${Qs}）` : e.model_loaded !== !0 ? "IndexTTS 服务在线，但模型尚未加载。请先在服务端加载模型后再试。" : e.ok !== !0 ? "IndexTTS 服务报告未就绪" : "IndexTTS 健康检查响应结构无效";
}
function Xc(e) {
  return Mn(e) ? e.ok === !0 && e.service === Ys && e.api_version === Zs && e.model_version === Qs && e.model_loaded === !0 ? { ok: !0, message: "IndexTTS 服务在线，模型已加载（IndexTTS-2.5）" } : { ok: !1, message: Jc(e) } : { ok: !1, message: "IndexTTS 健康检查响应结构无效" };
}
function Yc(e) {
  if (!Mn(e) || !Array.isArray(e.voices))
    throw new N("IndexTTS 音色列表结构无效：缺少 voices 数组", "invalid_json");
  return e.voices.map((t, n) => {
    if (!Mn(t) || typeof t.id != "string" || !t.id.trim())
      throw new N(
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
function Zc(e) {
  return e instanceof N ? { ok: !1, message: e.message } : {
    ok: !1,
    message: "无法连接 IndexTTS 服务。请确认服务已启动，并检查地址是否正确。"
  };
}
function Qc(e) {
  const t = fetch;
  return {
    id: "index_tts",
    async checkHealth(n) {
      if (n.engine !== "index_tts")
        throw new N("IndexTTS 适配器收到了错误的引擎请求", "config");
      const s = n.baseUrl.trim();
      if (!s)
        return { ok: !1, message: "请先填写 IndexTTS 服务地址" };
      try {
        const i = await tt(
          t,
          Yt(s, "/v1/health"),
          { method: "GET", signal: n.signal },
          n.timeoutMs
        );
        if (!i.ok)
          throw await ks(i);
        const o = await i.json();
        return Xc(o);
      } catch (i) {
        return Zc(i);
      }
    },
    async listVoices(n) {
      if (n.engine !== "index_tts")
        throw new N("IndexTTS 适配器收到了错误的引擎请求", "config");
      const s = n.baseUrl.trim();
      if (!s)
        throw new N("请先填写 IndexTTS 服务地址", "config");
      const i = await tt(
        t,
        Yt(s, "/v1/voices"),
        { method: "GET", signal: n.signal },
        n.timeoutMs
      );
      if (!i.ok)
        throw await ks(i);
      return Yc(await i.json());
    },
    async synthesize(n) {
      if (n.engine !== "index_tts")
        throw new N("IndexTTS 适配器收到了错误的引擎请求", "config");
      Kc(n);
      const s = Hc(n), i = Yt(n.baseUrl.trim(), "/v1/audio/speech");
      _s("index_tts", "synthesize", {
        url: i,
        voiceId: s.voice,
        language: s.language,
        model: s.model,
        durationFactor: s.duration_factor,
        emoWeight: s.emo_weight,
        emotion: s.emotion ? Object.keys(s.emotion) : void 0,
        text: n.text
      });
      const o = await tt(
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
        throw await ks(o);
      const r = o.headers.get("content-type");
      if (!zc(r))
        throw o.close(), new N(
          `IndexTTS 合成失败：响应类型不是 audio/wav（当前：${r || "缺失"}）`,
          "missing_audio",
          o.status
        );
      const a = await o.blob();
      if (!a || a.size <= 0)
        throw new N("IndexTTS 合成失败：返回的音频为空", "missing_audio");
      return a;
    }
  };
}
const yi = "https://api.fish.audio", qc = `${yi}/v1/tts`, eu = /* @__PURE__ */ new Set([
  "audio/mpeg",
  "audio/mp3",
  "audio/mpeg3",
  "audio/x-mpeg",
  "audio/x-mpeg-3"
]), tu = /* @__PURE__ */ new Set([
  "created",
  "training",
  "failed",
  "deleted",
  "disabled",
  "unavailable"
]);
function nu(e) {
  return vi.includes(String(e));
}
function qs(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function bi(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function to(e, t) {
  const n = {
    Authorization: `Bearer ${bi(e)}`
  };
  return t && (n["Content-Type"] = "application/json", n.model = t), n;
}
function su(e) {
  return {
    text: e.text,
    reference_id: e.referenceId.trim(),
    format: "mp3",
    normalize: !0,
    latency: "normal",
    prosody: {
      speed: e.speed,
      volume: e.volume,
      normalize_loudness: !0
    }
  };
}
function iu(e = yi, t = {}) {
  const n = new URL("/model", e);
  return n.searchParams.set("self", String(t.self ?? !0)), n.searchParams.set("page_size", String(t.pageSize ?? 100)), n.searchParams.set("page_number", String(t.pageNumber ?? 1)), n.toString();
}
function ou(e) {
  if (!bi(e.apiKey))
    throw new N("请先填写 Fish Audio API Key", "config");
  if (!nu(e.model))
    throw new N("Fish Audio 仅支持 S2.1 Pro Free 或 S2.1 Pro", "config");
  if (!e.referenceId.trim())
    throw new N("请先填写 Fish Audio 音色模型 ID", "config");
  if (!e.text.trim())
    throw new N("Fish Audio 合成文本为空", "config");
  if (!Number.isFinite(e.speed) || e.speed < 0.5 || e.speed > 2)
    throw new N("Fish Audio 语速必须在 0.5 到 2.0 之间", "config");
  if (!Number.isFinite(e.volume))
    throw new N("Fish Audio 音量必须是有限数字", "config");
}
function ru(e, t) {
  return e === 401 ? "API Key 无效" : e === 402 ? "余额或套餐不可用" : e === 404 ? t === "synthesize" ? "reference_id 不存在" : "模型列表接口不存在" : e === 422 ? "请求参数错误" : e === 429 ? "请求频率限制" : e >= 500 ? "Fish Audio 服务异常" : `HTTP ${e}`;
}
async function no(e, t) {
  const n = ru(e.status, t);
  try {
    const s = await e.text();
    try {
      const i = JSON.parse(s);
      if (qs(i)) {
        const o = typeof i.message == "string" ? i.message.trim() : typeof i.reason == "string" ? i.reason.trim() : "";
        return o && o.length <= 160 ? new N(
          `Fish Audio 请求失败：${n}（${o}）`,
          "http",
          e.status
        ) : new N(`Fish Audio 请求失败：${n}`, "http", e.status);
      }
      return new N(
        `Fish Audio 请求失败：${n}（错误体结构无效）`,
        "invalid_json",
        e.status
      );
    } catch {
      return new N(
        `Fish Audio 请求失败：${n}（错误体无法解析）`,
        "invalid_json",
        e.status
      );
    }
  } catch {
    return new N(`Fish Audio 请求失败：${n}`, "http", e.status);
  }
}
function au(e) {
  if (!qs(e) || !Array.isArray(e.items))
    throw new N("Fish Audio 模型列表结构无效：缺少 items 数组", "invalid_json");
  const t = [];
  for (const n of e.items) {
    if (!qs(n) || typeof n._id != "string" || !n._id.trim() || n.type !== "tts" || typeof n.state == "string" && tu.has(n.state) || n.dmca_taken_down === !0 || n.pvc_release_state === "retiring")
      continue;
    const s = n._id.trim(), i = typeof n.title == "string" && n.title.trim() ? n.title.trim() : s, o = typeof n.description == "string" && n.description.trim() ? [n.description.trim()] : void 0, r = Array.isArray(n.languages) ? n.languages.filter(
      (a) => typeof a == "string" && !!a.trim()
    ) : void 0;
    t.push({
      id: s,
      name: i,
      description: o,
      source: "fish_audio",
      language: r?.[0],
      languages: r
    });
  }
  return t;
}
function lu(e) {
  const t = (e ?? "").split(";")[0]?.trim().toLowerCase();
  return eu.has(t);
}
function cu(e) {
  return e instanceof N ? { ok: !1, message: e.message } : {
    ok: !1,
    message: "无法连接 Fish Audio。请检查网络和 API Key。"
  };
}
function uu(e) {
  const t = fetch;
  async function n(s) {
    if (s.engine !== "fish_audio")
      throw new N("Fish Audio 适配器收到了错误的引擎请求", "config");
    const i = bi(s.apiKey);
    if (!i)
      throw new N("请先填写 Fish Audio API Key", "config");
    const o = await tt(
      t,
      iu(),
      {
        method: "GET",
        headers: to(i),
        signal: s.signal
      },
      s.timeoutMs
    );
    if (!o.ok)
      throw await no(o, "models");
    return au(await o.json());
  }
  return {
    id: "fish_audio",
    async checkHealth(s) {
      if (s.engine !== "fish_audio")
        throw new N("Fish Audio 适配器收到了错误的引擎请求", "config");
      try {
        return { ok: !0, message: `Fish Audio 服务在线，可用音色模型 ${(await n(s)).length} 个` };
      } catch (i) {
        return cu(i);
      }
    },
    async listVoices(s) {
      if (s.engine !== "fish_audio")
        throw new N("Fish Audio 适配器收到了错误的引擎请求", "config");
      return await n(s);
    },
    async synthesize(s) {
      if (s.engine !== "fish_audio")
        throw new N("Fish Audio 适配器收到了错误的引擎请求", "config");
      ou(s);
      const i = su(s);
      _s("fish_audio", "synthesize", {
        model: s.model,
        referenceId: i.reference_id,
        speed: i.prosody.speed,
        volume: i.prosody.volume,
        text: s.text
      });
      const o = await tt(
        t,
        qc,
        {
          method: "POST",
          headers: to(s.apiKey, s.model),
          body: JSON.stringify(i),
          signal: s.signal
        },
        s.timeoutMs
      );
      if (!o.ok)
        throw await no(o, "synthesize");
      const r = o.headers.get("content-type");
      if (!lu(r))
        throw o.close(), new N(
          `Fish Audio 合成失败：响应类型不是 MP3 音频（当前：${r || "缺失"}）`,
          "missing_audio",
          o.status
        );
      const a = await o.blob();
      if (!a || a.size <= 0)
        throw new N("Fish Audio 合成失败：返回的音频为空", "missing_audio");
      return new Blob([await a.arrayBuffer()], { type: "audio/mpeg" });
    }
  };
}
const fu = ["v2", "v3", "v4", "v2Pro"];
function Pr(e) {
  const t = e.trim();
  if (!t)
    return { modelName: "", version: "" };
  const n = t.lastIndexOf("|");
  return n < 0 ? { modelName: t, version: "" } : {
    modelName: t.slice(0, n).trim(),
    version: t.slice(n + 1).trim()
  };
}
function du(e) {
  const t = e.trim().toLowerCase();
  return t === "v2pro" ? "v2Pro" : t === "v2" || t === "v3" || t === "v4" ? t : e.trim();
}
function pu(e) {
  const t = e.trim();
  return t ? {
    英文: "英语",
    日文: "日语",
    韩文: "韩语"
  }[t] ?? t : "多语种混合";
}
function mu(e) {
  const t = Pr(e.modelId), n = t.modelName.trim(), s = du(t.version) || "v2Pro";
  return {
    url: Yt(e.baseUrl.trim(), "/v1/audio/speech"),
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
        text_lang: pu(e.textLang),
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
function hu(e) {
  if (!e.baseUrl.trim())
    throw new N("请先填写 Local-GSVI 服务地址", "config");
  if (!e.modelId.trim())
    throw new N("请先填写或选择 Local-GSVI 模型（modelName|version）", "config");
  if (!e.language.trim() || !e.emotion.trim())
    throw new N(
      "GSVI 生成要求映射完整：语种(prompt_lang)/情绪(emotion)不能为空",
      "config"
    );
  if (!Pr(e.modelId).modelName)
    throw new N("Local-GSVI 模型格式错误，期望 modelName|version", "config");
  if (!e.text.trim())
    throw new N("Local-GSVI 合成文本为空", "config");
}
function Re(e) {
  return typeof e == "object" && e !== null;
}
function gu(e) {
  const t = e.replace(/^data:audio\/[a-zA-Z0-9.+-]+;base64,/i, "").trim();
  return t.length >= 16 && /^[A-Za-z0-9+/=\r\n]+$/.test(t);
}
function Rr(e) {
  return e.trim().match(/^data:audio\/[a-zA-Z0-9.+-]+;base64,(.+)$/i)?.[1] ?? e.trim();
}
function _u(e) {
  if (!Re(e))
    return null;
  const t = e, n = Re(t.data) ? t.data : void 0, s = Re(t.output) ? t.output : void 0, i = [
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
    if (typeof o == "string" && gu(o))
      return Rr(o);
  return null;
}
function vu(e) {
  if (!Re(e))
    return null;
  const t = e, n = Re(t.data) ? t.data : void 0, s = Re(t.output) ? t.output : void 0, i = [
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
function yu(e) {
  if (!Re(e))
    return "";
  const t = Re(e.error) ? e.error : void 0, n = Re(e.base_resp) ? e.base_resp : void 0, s = Re(e.data) ? e.data : void 0, i = [
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
function bu(e) {
  const t = atob(Rr(e)), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function Os(e) {
  const t = e?.trim() ?? "";
  return t ? { Authorization: `Bearer ${t}` } : {};
}
function xu(e) {
  const t = fetch;
  async function n(s, i, o, r, a) {
    const l = /^https?:\/\//i.test(i) ? i : Yt(s, i);
    let p = !1;
    try {
      p = Gc(s) === new URL(l).origin;
    } catch {
      p = !1;
    }
    const m = await tt(
      t,
      l,
      {
        method: "GET",
        headers: p ? Os(o) : {},
        signal: a
      },
      r
    );
    if (!m.ok)
      throw new N(`下载 GSVI 输出失败：HTTP ${m.status}`, "http", m.status);
    return await m.blob();
  }
  return {
    id: "local_gsvi",
    async checkHealth(s) {
      if (s.engine !== "local_gsvi")
        throw new N("Local-GSVI 适配器收到了错误的引擎请求", "config");
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
        throw new N("Local-GSVI 适配器收到了错误的引擎请求", "config");
      const i = s.baseUrl.trim();
      if (!i)
        throw new N("请先填写 Local-GSVI 服务地址", "config");
      const o = [];
      for (const r of fu) {
        const a = Yt(i, `/models/${encodeURIComponent(r)}`);
        try {
          const l = await tt(
            t,
            a,
            { method: "GET", headers: Os(s.authToken), signal: s.signal },
            s.timeoutMs
          );
          if (!l.ok) {
            Xs("local_gsvi", `GET /models/${r} failed`, {
              status: l.status
            }), l.close();
            continue;
          }
          const p = await l.json(), m = Re(p) && Re(p.models) ? p.models : p;
          if (!Re(m))
            continue;
          Object.entries(m).forEach(([g, E]) => {
            if (!g || !Re(E))
              return;
            const S = Object.keys(E).filter(Boolean).sort((P, F) => P.localeCompare(F)), H = {};
            S.forEach((P) => {
              const F = E[P];
              H[P] = Array.isArray(F) ? F.map((L) => String(L).trim()).filter(Boolean) : typeof F == "string" ? [F.trim()].filter(Boolean) : [];
            }), o.push({
              id: `${g}|${r}`,
              name: `${g} [${r}]`,
              source: "gsvi_model",
              language: S.join(","),
              languages: S,
              emotionsByLanguage: H
            });
          });
        } catch (l) {
          if (l instanceof N && l.code === "cancelled")
            throw l;
          Xs("local_gsvi", `GET /models/${r} failed`);
        }
      }
      if (o.length === 0)
        throw new N(
          "未在 /models/{v2|v3|v4|v2Pro} 中解析到模型映射，请检查接口返回结构",
          "missing_audio"
        );
      return o.sort((r, a) => r.name.localeCompare(a.name));
    },
    async synthesize(s) {
      if (s.engine !== "local_gsvi")
        throw new N("Local-GSVI 适配器收到了错误的引擎请求", "config");
      hu(s);
      const i = mu(s), o = {
        "Content-Type": "application/json",
        ...Os(s.authToken)
      };
      _s("local_gsvi", "synthesize", {
        url: i.url,
        model: i.modelName,
        version: i.version,
        text: s.text
      });
      const r = await tt(
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
        throw new N(
          `Local-GSVI 请求失败：HTTP ${r.status}`,
          "http",
          r.status
        );
      if ((r.headers.get("content-type")?.toLowerCase() ?? "").includes("application/json")) {
        const l = await r.json(), p = _u(l);
        if (p)
          return new Blob([Uint8Array.from(bu(p))], {
            type: s.format === "wav" ? "audio/wav" : "audio/mpeg"
          });
        const m = vu(l);
        if (m)
          return await n(
            s.baseUrl.trim(),
            m,
            s.authToken ?? "",
            s.timeoutMs,
            s.signal
          );
        throw new N(
          `Local-GSVI 未返回可用音频：${yu(l) || "JSON 响应中未找到音频"}`,
          "missing_audio"
        );
      }
      return await r.blob();
    }
  };
}
const Tu = {
  international: {
    tts: "https://api.minimaxi.com/v1/t2a_v2",
    voice: "https://api.minimaxi.com/v1/get_voice"
  },
  beijing: {
    tts: "https://api-bj.minimaxi.com/v1/t2a_v2",
    voice: "https://api-bj.minimaxi.com/v1/get_voice"
  }
}, Su = /* @__PURE__ */ new Set([408, 409, 429, 500, 502, 503, 504]), wu = /* @__PURE__ */ new Set([1e3, 1001, 1002, 1039]), so = 2, Eu = "tavern_multi_tts_voice_catalog_v1", Au = 1440 * 60 * 1e3;
function ss(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function ei(e) {
  return e === "beijing" ? "beijing" : "international";
}
function io(e) {
  return Tu[ei(e)];
}
function Vr(e, t) {
  return `${Eu}:${e}:${t.trim()}`;
}
function Iu(e) {
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
function oo(e) {
  return `Bearer ${ss(e)}`;
}
function Mu(e) {
  const t = e.trim(), n = new Uint8Array(t.length / 2);
  for (let s = 0; s < t.length; s += 2)
    n[s / 2] = Number.parseInt(t.slice(s, s + 2), 16);
  return n;
}
function Cu(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function Pu(e) {
  const t = e.trim();
  return /^[0-9a-fA-F]+$/.test(t) && t.length % 2 === 0 ? Mu(t) : Cu(t);
}
function Ru(e, t) {
  const s = `${t ?? ""} ${e}`.toLowerCase(), i = s.includes("japanese") ? "Japanese" : s.includes("english") ? "English" : s.includes("chinese") ? "Chinese" : s.includes("korean") ? "Korean" : s.includes("french") ? "French" : s.includes("german") ? "German" : s.includes("spanish") ? "Spanish" : "Unknown", o = s.includes("female") || s.includes("女") || s.includes("lady") || s.includes("girl") ? "Female" : s.includes("male") || s.includes("男") || s.includes("man") || s.includes("boy") ? "Male" : "Unknown";
  return { language: i, gender: o };
}
function Vu(e, t) {
  const n = t.trim();
  if (!n)
    return null;
  try {
    const s = localStorage.getItem(Vr(e, n));
    if (!s)
      return null;
    const i = JSON.parse(s);
    return !i?.expires_at || Date.now() > i.expires_at ? null : i.items ?? null;
  } catch {
    return null;
  }
}
function Nu(e, t, n) {
  const s = t.trim();
  s && localStorage.setItem(
    Vr(e, s),
    JSON.stringify({
      expires_at: Date.now() + Au,
      items: n
    })
  );
}
function Lu(e) {
  const t = ss(e.apiKey), n = e.groupId.trim(), s = e.voiceId.trim();
  if (!t || !n || !s)
    throw new N("MiniMax 引擎缺少必要配置：API Key / Group ID / Voice ID", "config");
  if (!e.text.trim())
    throw new N("MiniMax 合成文本为空", "config");
}
function ku(e) {
  return typeof e == "object" && e !== null;
}
function Ou(e, t) {
  return Su.has(e) || wu.has(t);
}
function Fu(e) {
  const t = fetch;
  return {
    id: "minimax",
    async checkHealth(n) {
      if (n.engine !== "minimax")
        throw new N("MiniMax 适配器收到了错误的引擎请求", "config");
      if (!ss(n.apiKey))
        return { ok: !1, message: "请先填写 MiniMax API Key" };
      try {
        return await this.listVoices({ ...n, forceRefresh: !0 }), { ok: !0, message: "MiniMax 服务可用" };
      } catch (i) {
        return { ok: !1, message: i instanceof Error ? i.message : String(i) };
      }
    },
    async listVoices(n) {
      if (n.engine !== "minimax")
        throw new N("MiniMax 适配器收到了错误的引擎请求", "config");
      const s = ss(n.apiKey);
      if (!s)
        throw new N("请先填写 API Key", "config");
      const i = ei(n.region);
      if (!n.forceRefresh) {
        const g = Vu(i, n.groupId);
        if (g && g.length > 0)
          return g;
      }
      const o = io(i).voice, r = await tt(
        t,
        o,
        {
          method: "POST",
          headers: {
            Authorization: oo(s),
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ voice_type: "all" }),
          signal: n.signal
        },
        n.timeoutMs
      ), l = await r.json();
      if (!r.ok || (l.base_resp?.status_code ?? 0) !== 0)
        throw new N(
          l.base_resp?.status_msg ?? r.statusText ?? "拉取音色列表失败",
          "http",
          r.status
        );
      const p = [], m = (g, E = []) => {
        E.forEach((S) => {
          const H = Ru(S.voice_id, S.voice_name);
          p.push({
            id: S.voice_id,
            name: S.voice_name ?? S.voice_id,
            description: S.description,
            source: g,
            language: H.language,
            gender: H.gender
          });
        });
      };
      return m("system", l.system_voice ?? []), m("voice_cloning", l.voice_cloning ?? []), m("voice_generation", l.voice_generation ?? []), Nu(i, n.groupId, p), p;
    },
    async synthesize(n) {
      if (n.engine !== "minimax")
        throw new N("MiniMax 适配器收到了错误的引擎请求", "config");
      Lu(n);
      const s = Iu(n), i = io(n.region).tts, o = {
        Authorization: oo(n.apiKey),
        "Content-Type": "application/json"
      };
      _s("minimax", "synthesize", {
        model: s.model,
        voiceId: s.voice_setting.voice_id,
        region: ei(n.region),
        groupId: n.groupId.trim(),
        text: n.text
      });
      let r = null;
      for (let a = 0; a <= so; a += 1) {
        const l = await tt(
          t,
          i,
          {
            method: "POST",
            headers: o,
            body: JSON.stringify(s),
            signal: n.signal
          },
          n.timeoutMs
        ), p = await l.json();
        if (!ku(p))
          throw new N("MiniMax 响应结构无效", "invalid_json");
        const m = p;
        if (!l.ok || (m.base_resp?.status_code ?? 0) !== 0) {
          const S = m.base_resp?.status_code ?? l.status, H = m.base_resp?.status_msg ?? l.statusText ?? "unknown error";
          if (r = `MiniMax 请求失败：code=${S}, msg=${H}`, Ou(l.status, S) && a < so) {
            Xs("minimax", "retryable synthesize failure", {
              status: l.status,
              attempt: a
            }), await Uc(250 * (a + 1));
            continue;
          }
          throw new N(r, "http", l.status);
        }
        const g = m.data?.audio ?? m.data?.audio_file ?? m.audio_file;
        if (!g)
          throw new N("MiniMax 响应中未找到音频字段", "missing_audio");
        const E = Pu(g);
        return new Blob([Uint8Array.from(E)], { type: "audio/mpeg" });
      }
      throw new N(r ?? "MiniMax 请求失败：未知错误", "http");
    }
  };
}
function dn(e) {
  if (e === "minimax")
    return Fu();
  if (e === "local_gsvi")
    return xu();
  if (e === "index_tts")
    return Qc();
  if (e === "fish_audio")
    return uu();
  throw new N(`未知 TTS 引擎：${String(e)}`, "config");
}
const ti = "tavern_multi_tts_say_rule", $u = 1, Du = {
  system: 0,
  user: 1,
  assistant: 2
};
function Gu(e) {
  const t = e.ttsEngine === "index_tts" ? e.indexTtsCharacterMappings : e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.ttsEngine === "fish_audio" ? e.fishAudioCharacterMappings : e.characterMappings, n = [];
  for (const s of t) {
    const i = s.characterName.trim();
    i && !n.includes(i) && n.push(i);
  }
  return n;
}
function Uu(e) {
  return e.ttsEngine === "index_tts" ? e.indexTtsInjectTemplate : e.ttsEngine === "fish_audio" ? e.fishAudioInjectTemplate : e.injectTemplate;
}
function ju(e) {
  const t = Gu(e).join("、") || "（未配置角色映射）";
  return Uu(e).replaceAll("${target_characters}", t).replaceAll("${mapped_characters}", t);
}
function Fs(e, t) {
  return !t.enabled || !t.injectEnabled ? (e.deleteExtensionPrompt(ti), { applied: !1 }) : (e.setExtensionPrompt(
    ti,
    ju(t),
    $u,
    t.injectDepth,
    !1,
    Du[t.injectRole]
  ), { applied: !0, depth: t.injectDepth, role: t.injectRole });
}
function Bu(e) {
  e.deleteExtensionPrompt(ti);
}
const Nr = [
  "喜",
  "怒",
  "哀",
  "惧",
  "厌恶",
  "低落",
  "惊喜",
  "平静"
], ro = /<say\b([^>]*)>([\s\S]*?)<\/say>/gi, Fn = /([A-Za-z_]+)\s*=\s*(?:"([^"]*)"|“([^”]*)”)/gi, Hu = new Set(Nr);
function Ku(e) {
  const t = {}, n = new RegExp(Fn.source, Fn.flags);
  let s;
  for (; (s = n.exec(e)) !== null; ) {
    const o = s[2] ?? s[3] ?? "";
    t[s[1].toLowerCase()] = o;
  }
  return e.replace(new RegExp(Fn.source, Fn.flags), "").trim() ? null : t;
}
function ln(e) {
  console.warn(`${Ae} invalid say emo`, { reason: e });
}
function zu(e) {
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
    const a = o.slice(0, r).trim(), l = o.slice(r + 1).trim();
    if (!Hu.has(a) || a in i) {
      ln("name");
      return;
    }
    const p = Number(l);
    if (!Number.isFinite(p) || p <= 0 || p > 1) {
      ln("value");
      return;
    }
    i[a] = p;
  }
  return i;
}
function Wu(e) {
  return e ? Nr.filter((t) => e[t] !== void 0).map((t) => `${t}:${e[t]}`).join(",") : "";
}
function Ju(e) {
  const t = new RegExp(ro.source, ro.flags), n = [];
  let s, i = 0;
  for (; (s = t.exec(e)) !== null; ) {
    const o = s[2].trim();
    if (!o)
      continue;
    const r = Ku(s[1] ?? "");
    if (!r)
      continue;
    const a = r.char?.trim(), l = zu(r.emo);
    n.push({
      index: i,
      text: o,
      ...a ? { char: a } : {},
      ...l ? { emotion: l } : {}
    }), i += 1;
  }
  return n;
}
const Xu = /* @__PURE__ */ new Set([
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
]), Lr = /\(([a-z-]+)\)/gi, Yu = /\([a-z-]+\)/gi, Zu = /\[([A-Za-z][A-Za-z\s,'".!?-]{0,39})\]/g;
function Cn(e) {
  return e.replace(/\s{2,}/g, " ").trim();
}
function Qu(e) {
  return Cn(
    e.replace(Lr, (t, n) => {
      const s = String(n).toLowerCase();
      return Xu.has(s) ? `(${s})` : "";
    })
  );
}
function qu(e, t = "minimax") {
  return Cn(t === "fish_audio" ? e.replace(Zu, "") : e.replace(Lr, ""));
}
function ef(e) {
  return Cn(e.replace(Yu, ""));
}
function tf(e, t) {
  if (t === "fish_audio")
    return Cn(e);
  const n = Qu(e);
  return t === "local_gsvi" || t === "index_tts" ? ef(n) : n;
}
async function nf(e, t) {
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
const Pn = "data-tavern-multi-tts-rendered", xi = "data-tavern-multi-tts-swipe", vs = "tavern-multi-tts-segment", is = "tavern-multi-tts-fallback-list";
function sf(e, t, n) {
  return `${e}:${t}:${n}`;
}
function ao(e) {
  const t = e.split(":");
  if (t.length !== 3)
    return null;
  const n = Number(t[0]), s = Number(t[1]), i = Number(t[2]);
  return [n, s, i].every(Number.isFinite) ? { message_id: n, swipe_id: s, index: i } : null;
}
function $n(e) {
  return document.querySelector(`#chat .mes[mesid="${e}"]`);
}
function of(e) {
  return e.querySelector(".mes_text");
}
function kr(e, t) {
  const n = e.getAttribute(Pn) === "true", s = e.querySelector(`.${vs}`) !== null;
  return !n || !s ? !1 : t === void 0 ? !0 : e.getAttribute(xi) === String(t);
}
function Ot(e = document) {
  e.querySelectorAll(`.${vs}`).forEach((t) => {
    const n = t.querySelector(".tavern-multi-tts-text")?.textContent ?? "";
    t.replaceWith(document.createTextNode(n));
  }), e.querySelectorAll(`.${is}`).forEach((t) => t.remove()), e.querySelectorAll(`[${Pn}]`).forEach((t) => {
    t.removeAttribute(Pn), t.removeAttribute(xi);
  });
}
function rt(e, t) {
  e.classList.remove("is-loading", "is-ready", "is-playing", "is-error"), t !== "idle" && e.classList.add(`is-${t}`);
  const n = e.querySelector(".tavern-multi-tts-indicator");
  n && (n.textContent = t === "loading" ? "⏳" : t === "ready" ? "▶" : t === "playing" ? "⏸" : t === "error" ? "⚠" : "▶");
}
function lo(e) {
  return e.replace(/\s+/g, "").trim();
}
function rf(e, t, n, s) {
  const i = e.splitText(t);
  i.splitText(n), i.replaceWith(s);
}
function af(e, t, n, s) {
  const i = [t, n].map((a) => a.trim()).filter(Boolean), o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let r = o.nextNode();
  for (; r; ) {
    const a = r.parentElement;
    if (a && !a.closest(`.${vs}`) && !a.closest(`.${is}`) && !a.closest(".mes_buttons")) {
      const l = r.nodeValue ?? "";
      for (const p of i) {
        const m = l.indexOf(p);
        if (m >= 0)
          return rf(r, m, p.length, s), !0;
        if (lo(l) === lo(p))
          return r.replaceWith(s), !0;
      }
    }
    r = o.nextNode();
  }
  return !1;
}
function lf(e, t, n, s, i, o, r) {
  const a = sf(e, t, n.index), l = document.createElement("span");
  l.className = vs, l.dataset.tavernMultiTtsKey = a;
  const p = document.createElement("span");
  p.className = "tavern-multi-tts-text", p.textContent = s;
  const m = document.createElement("span");
  m.className = "tavern-multi-tts-indicator", m.textContent = "▶";
  const g = document.createElement("span");
  g.className = "tavern-multi-tts-actions";
  const E = document.createElement("button");
  E.type = "button", E.className = "tavern-multi-tts-action", E.textContent = "下", g.append(E), l.append(p, m, g), rt(l, "idle");
  let S = r.get(a) ?? null;
  const H = async () => {
    rt(l, "loading");
    try {
      const L = await o.ensureAudio(n, s, i);
      return L.cancelled ? null : L.blob ? (rt(l, "ready"), L.blob) : (rt(l, "error"), null);
    } catch {
      return rt(l, "error"), null;
    }
  }, P = async () => {
    const L = await H();
    L && (S?.stop(), S = yr(
      L,
      () => rt(l, "playing"),
      () => {
        S = null, r.delete(a), rt(l, "ready");
      },
      () => {
        S = null, r.delete(a), rt(l, "error");
      },
      () => rt(l, "ready")
    ), r.set(a, S));
  }, F = async () => {
    if (!S)
      return;
    const L = S.getState();
    if (L === "playing") {
      S.pause();
      return;
    }
    if (L === "paused")
      try {
        await S.resume();
      } catch {
      }
  };
  return l.addEventListener("click", (L) => {
    const $ = L.target;
    if ($?.closest(".tavern-multi-tts-indicator")) {
      F();
      return;
    }
    $?.closest(".tavern-multi-tts-action") || P();
  }), E.addEventListener("click", (L) => {
    L.preventDefault(), L.stopPropagation(), (async () => {
      const $ = await H();
      $ && o.downloadAudio($, e, n.index);
    })();
  }), l;
}
function cf(e, t, n, s, i, o = 0) {
  if (kr(e, o))
    return 0;
  e.getAttribute(Pn) === "true" && Ot(e);
  const r = of(e) ?? e, a = [];
  let l = 0;
  for (const p of n) {
    if (!p.displayText || !p.ttsText)
      continue;
    const m = lf(
      t,
      o,
      p,
      p.displayText,
      p.ttsText,
      s,
      i
    );
    af(r, p.text, p.displayText, m) ? l += 1 : a.push(m);
  }
  if (r.querySelectorAll(`.${is}`).forEach((p) => p.remove()), a.length > 0) {
    const p = document.createElement("div");
    p.className = is, a.forEach((m) => p.append(m, document.createTextNode(" "))), r.append(p), l += a.length;
  }
  return l > 0 && (e.setAttribute(Pn, "true"), e.setAttribute(xi, String(o))), l;
}
function Et(e, t) {
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const s = e[n];
    if (s && t(s))
      return s;
  }
}
function Or(e, t) {
  return e.characterName.trim() === t && !!e.minimaxVoiceId.trim();
}
function Fr(e, t) {
  return e.characterName.trim() === t && !!e.gsviVoiceId.trim() && !!e.gsviLanguage.trim() && !!e.gsviEmotion.trim();
}
function $r(e, t) {
  return e.characterName.trim() === t && !!e.indexTtsVoiceId.trim() && !!e.indexTtsLanguage;
}
function Dr(e, t) {
  return e.characterName.trim() === t && !!e.fishAudioReferenceId.trim();
}
function Gr(e, t) {
  const n = t?.trim() ?? "";
  return n ? e.ttsEngine === "index_tts" ? !!Et(
    e.indexTtsCharacterMappings,
    (s) => $r(s, n)
  ) : e.ttsEngine === "fish_audio" ? !!Et(
    e.fishAudioCharacterMappings,
    (s) => Dr(s, n)
  ) : e.ttsEngine === "local_gsvi" ? !!Et(
    e.gsviCharacterMappings,
    (s) => Fr(s, n)
  ) : e.ttsEngine === "minimax" ? !!Et(e.characterMappings, (s) => Or(s, n)) : !1 : !0;
}
function Ur(e, t) {
  const n = t?.trim() ?? "";
  if (e.ttsEngine === "index_tts") {
    const i = Et(
      e.indexTtsCharacterMappings,
      (o) => $r(o, n)
    );
    return {
      engine: "index_tts",
      indexTtsVoiceId: i?.indexTtsVoiceId.trim() || e.indexTtsVoiceId.trim(),
      indexTtsLanguage: i?.indexTtsLanguage || e.indexTtsLanguage
    };
  }
  if (e.ttsEngine === "fish_audio")
    return {
      engine: "fish_audio",
      fishAudioReferenceId: Et(
        e.fishAudioCharacterMappings,
        (o) => Dr(o, n)
      )?.fishAudioReferenceId.trim() || e.fishAudioReferenceId.trim()
    };
  if (e.ttsEngine === "local_gsvi") {
    const i = Et(
      e.gsviCharacterMappings,
      (o) => Fr(o, n)
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
    minimaxVoiceId: Et(
      e.characterMappings,
      (i) => Or(i, n)
    )?.minimaxVoiceId?.trim() || e.voiceId.trim() || e.voiceCatalogSelectedId.trim()
  };
}
function jr(e, t, n, s) {
  if (!Gr(e, n))
    return null;
  const i = Ur(e, n);
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
  return e.ttsEngine === "fish_audio" && i.engine === "fish_audio" ? !e.fishAudioApiKey.trim() || !i.fishAudioReferenceId || !e.fishAudioModel ? null : {
    engine: "fish_audio",
    text: t,
    apiKey: e.fishAudioApiKey,
    model: e.fishAudioModel,
    referenceId: i.fishAudioReferenceId,
    speed: e.fishAudioSpeed,
    volume: e.fishAudioVolume,
    timeoutMs: e.requestTimeoutMs
  } : e.ttsEngine === "local_gsvi" && i.engine === "local_gsvi" ? !e.localGsviBaseUrl.trim() || !i.gsviVoiceId || !i.gsviLanguage || !i.gsviEmotion ? null : {
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
function $s(e) {
  return e.ttsEngine === "index_tts" ? e.indexTtsBaseUrl.trim() ? {
    engine: "index_tts",
    text: "catalog",
    baseUrl: e.indexTtsBaseUrl,
    voiceId: e.indexTtsVoiceId.trim() || "catalog",
    language: e.indexTtsLanguage,
    durationFactor: e.indexTtsDurationFactor,
    emoWeight: e.indexTtsEmoWeight,
    timeoutMs: e.requestTimeoutMs
  } : null : e.ttsEngine === "fish_audio" ? e.fishAudioApiKey.trim() ? {
    engine: "fish_audio",
    text: "catalog",
    apiKey: e.fishAudioApiKey,
    model: e.fishAudioModel,
    referenceId: e.fishAudioReferenceId.trim(),
    speed: e.fishAudioSpeed,
    volume: e.fishAudioVolume,
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
function uf(e, t, n, s) {
  const i = Ur(e, n);
  return e.ttsEngine === "index_tts" ? {
    text: t,
    engine: "index_tts",
    indexTts: {
      origin: Rs(e.indexTtsBaseUrl),
      model: Cr,
      voiceId: i.indexTtsVoiceId ?? "",
      language: i.indexTtsLanguage ?? e.indexTtsLanguage,
      format: "wav",
      durationFactor: e.indexTtsDurationFactor,
      emoWeight: e.indexTtsEmoWeight,
      emotion: Wu(s)
    }
  } : e.ttsEngine === "fish_audio" ? {
    text: t,
    engine: "fish_audio",
    fishAudio: {
      origin: Rs(yi),
      model: e.fishAudioModel,
      referenceId: i.fishAudioReferenceId ?? "",
      speed: e.fishAudioSpeed,
      volume: e.fishAudioVolume,
      format: "mp3"
    }
  } : e.ttsEngine === "local_gsvi" ? {
    text: t,
    engine: "local_gsvi",
    localGsvi: {
      origin: Rs(e.localGsviBaseUrl),
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
const co = 15;
function ff(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = [];
  let o = !1, r = !1, a = 0;
  function l() {
    return e.getSettings();
  }
  function p() {
    r || !document.querySelector(".minimax-tts-segment") || (r = !0, e.warn?.("检测到旧酒馆助手 Multi-TTS 仍在装饰消息。请只启用其中一个，避免重复生成。"));
  }
  function m(M) {
    return Mr(M) && M.code === "cancelled";
  }
  function g(M, D) {
    return n.get(M)?.token === D;
  }
  function E(M) {
    for (const [D, J] of n)
      M(J) && (J.controller.abort(), n.delete(D));
  }
  function S() {
    E(() => !0);
  }
  function H(M, D) {
    E(
      (J) => J.message_id === M && (D === void 0 || J.swipe_id !== D)
    );
  }
  function P(M, D, J) {
    n.get(M)?.controller.abort(), a += 1;
    const K = {
      token: a,
      message_id: D,
      swipe_id: J,
      controller: new AbortController()
    };
    return n.set(M, K), K;
  }
  function F(M, D) {
    g(M, D) && n.delete(M);
  }
  async function L(M, D, J, q, K, ye) {
    const be = P(M, D, J);
    try {
      const le = l(), ve = jr(le, q, K, ye);
      if (!ve)
        return { blob: null };
      ve.signal = be.controller.signal;
      const Ue = uf(le, q, K, ye), we = await oc(Ue);
      if (!g(M, be.token) || be.controller.signal.aborted)
        return { cancelled: !0 };
      const Ve = s.get(we);
      if (Ve)
        return { blob: Ve };
      const re = await fc(we);
      if (!g(M, be.token) || be.controller.signal.aborted)
        return { cancelled: !0 };
      if (re)
        return s.set(we, re), { blob: re };
      const h = await dn(ve.engine).synthesize(ve);
      return h && (await dc(we, h), s.set(we, h)), !g(M, be.token) || be.controller.signal.aborted ? { cancelled: !0 } : { blob: h };
    } catch (le) {
      return m(le) || !g(M, be.token) || be.controller.signal.aborted ? { cancelled: !0 } : (console.error(`${Ae} synthesize failed`), { blob: null });
    } finally {
      F(M, be.token);
    }
  }
  function $(M, D) {
    if (typeof M.swipe_id == "number" && Number.isFinite(M.swipe_id))
      return M.swipe_id;
    const J = Number(D?.getAttribute("swipeid"));
    return Number.isFinite(J) ? J : 0;
  }
  function Z(M, D) {
    for (const [J, q] of t) {
      const K = ao(J);
      K && K.message_id === M && K.swipe_id !== D && (q.stop(), t.delete(J));
    }
  }
  function O(M) {
    for (const [D, J] of t) {
      const q = ao(D);
      q && q.message_id === M && (J.stop(), t.delete(D));
    }
  }
  function _e(M, D, J) {
    if (typeof M.swipe_id != "number" || !Number.isFinite(M.swipe_id))
      return !0;
    const q = D.getAttribute("swipeid");
    if (q === null || q === "")
      return !0;
    const K = Number(q);
    return Number.isFinite(K) && K === J && K === M.swipe_id;
  }
  function Ie(M, D) {
    H(M, D), Z(M, D);
    const J = e.findMessageElement(M) ?? $n(M);
    J && Ot(J);
  }
  function de(M, D = {}) {
    const J = D.attempt ?? 0, q = l();
    if (!q.enabled)
      return;
    const K = e.getChatMessage(M);
    if (!K || K.is_user || K.is_system)
      return;
    const ye = typeof K.mes == "string" ? K.mes : "", be = Ju(ye).filter(
      (re) => Gr(q, re.char)
    ), le = e.findMessageElement(M) ?? $n(M);
    if (be.length === 0) {
      le && Ot(le);
      return;
    }
    if (!le) {
      J < co && window.setTimeout(() => de(M, { ...D, attempt: J + 1 }), 120);
      return;
    }
    const ve = $(K, le);
    if (!_e(K, le, ve)) {
      J < co && window.setTimeout(() => de(M, { ...D, attempt: J + 1 }), 120);
      return;
    }
    if (kr(le, ve))
      return;
    le.getAttribute("data-tavern-multi-tts-rendered") === "true" && Ot(le), Z(M, ve), p();
    const Ue = be.map((re) => ({
      ...re,
      displayText: qu(re.text, q.ttsEngine),
      ttsText: tf(re.text, q.ttsEngine)
    })), we = [], Ve = (re) => D.skipPrefetch ? !1 : q.prefetchMode === "auto_all" ? !0 : q.prefetchMode === "auto_first_n" ? re < q.prefetchFirstCount : !1;
    cf(
      le,
      M,
      Ue,
      {
        ensureAudio: async (re, f, h) => {
          const v = `${M}:${ve}:${re.index}`;
          return await L(
            v,
            M,
            ve,
            h,
            re.char,
            re.emotion
          );
        },
        downloadAudio(re, f, h) {
          hc(re, mc(f, h));
        }
      },
      t,
      ve
    ), Ue.forEach((re, f) => {
      Ve(f) && re.ttsText && we.push(async () => {
        const h = `${M}:${ve}:${re.index}`;
        try {
          await L(
            h,
            M,
            ve,
            re.ttsText,
            re.char,
            re.emotion
          );
        } catch {
        }
      });
    }), we.length > 0 && nf(we, q.maxConcurrency);
  }
  function De(...M) {
    const D = Number(M[0]);
    Number.isFinite(D) && window.setTimeout(() => de(D), 0);
  }
  function Ct(...M) {
    const D = Number(M[0]);
    if (!Number.isFinite(D))
      return;
    H(D);
    const J = e.findMessageElement(D) ?? $n(D);
    J && Ot(J), O(D), window.setTimeout(() => de(D), 0);
  }
  function Pt(...M) {
    const D = Number(M[0]);
    if (!Number.isFinite(D))
      return;
    const J = e.findMessageElement(D) ?? $n(D), q = e.getChatMessage(D), K = q ? $(q, J) : 0;
    Ie(D, K), window.setTimeout(() => de(D, { skipPrefetch: !0 }), 0);
  }
  function We(M = {}) {
    document.querySelectorAll("#chat .mes[mesid]").forEach((D) => {
      const J = Number(D.getAttribute("mesid"));
      Number.isFinite(J) && de(J, M);
    });
  }
  function Ge(M, D) {
    e.eventSource.on(M, D), i.push(() => e.eventSource.removeListener(M, D));
  }
  function on() {
    o || (o = !0, Fs(e, l()), Ge(e.eventNames.messageReceived, De), Ge(e.eventNames.messageRendered, De), Ge(e.eventNames.messageUpdated, Ct), Ge(e.eventNames.messageSwiped, Pt), Ge(e.eventNames.moreMessagesLoaded, () => {
      We({ skipPrefetch: !0 });
    }), Ge(e.eventNames.chatChanged, () => {
      S(), t.forEach((M) => M.stop()), t.clear(), Wn(), Fs(e, l()), We({ skipPrefetch: !0 });
    }), We({ skipPrefetch: !0 }), console.info(`${Ae} chat runtime started`));
  }
  function Rt() {
    i.splice(0).forEach((M) => M()), S(), t.forEach((M) => M.stop()), t.clear(), s.clear(), Wn(), Bu(e), Ot(document), o = !1, console.info(`${Ae} chat runtime stopped`);
  }
  function jt() {
    S(), t.forEach((M) => M.stop()), t.clear(), Wn(), Ot(document);
  }
  function vt() {
    Fs(e, l());
  }
  function yt() {
    jt(), l().enabled && We({ skipPrefetch: !0 });
  }
  function Vt() {
    vt(), yt();
  }
  return { start: on, stop: Rt, syncFromSettings: Vt, syncInjection: vt, refreshDecorations: yt, decorate: de };
}
function St(e) {
  return typeof e == "object" && e !== null;
}
function df(e) {
  if (St(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function pf(e) {
  return !St(e) || typeof e.getContext != "function" ? null : e;
}
function mf(e) {
  if (!St(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!St(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = df(e.eventSource), n = St(e.eventTypes) ? e.eventTypes : St(e.event_types) ? e.event_types : void 0, s = n ? {
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
    extensionPrompts: St(e.extensionPrompts) ? e.extensionPrompts : void 0
  };
}
function Br() {
  const e = pf(globalThis.SillyTavern);
  if (!e)
    throw new Error(
      "SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行"
    );
  return mf(e.getContext());
}
function Hr() {
  const e = Br();
  return {
    readRawSettings() {
      return e.extensionSettings[Vs];
    },
    writeSettings(t) {
      e.extensionSettings[Vs] = t, e.saveSettingsDebounced();
    },
    removeSettings() {
      delete e.extensionSettings[Vs], e.saveSettingsDebounced();
    },
    findSettingsRoot: Fc,
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
function hf(e) {
  return St(e) ? {
    mes: typeof e.mes == "string" ? e.mes : void 0,
    is_user: typeof e.is_user == "boolean" ? e.is_user : void 0,
    is_system: typeof e.is_system == "boolean" ? e.is_system : void 0,
    swipe_id: typeof e.swipe_id == "number" ? e.swipe_id : void 0
  } : null;
}
function gf(e) {
  const t = Br();
  if (!t.eventSource)
    throw new Error("SillyTavern eventSource 不可用，无法监听消息事件");
  const n = t.eventSource;
  return {
    getSettings: e,
    getChatMessage(s) {
      return Array.isArray(t.chat) ? hf(t.chat[s]) : null;
    },
    findMessageElement(s) {
      return document.querySelector(`#chat .mes[mesid="${s}"]`);
    },
    setExtensionPrompt(s, i, o, r, a, l) {
      if (!t.setExtensionPrompt)
        throw new Error("SillyTavern.setExtensionPrompt 不可用，无法注入提示词");
      t.setExtensionPrompt(s, i, o, r, a, l);
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
        i.warning(s, Ae);
        return;
      }
      console.warn(`${Ae} ${s}`);
    }
  };
}
function _f(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    const s = n.trim();
    s && t.set(s, (t.get(s) ?? 0) + 1);
  }), [...t.entries()].filter(([, n]) => n > 1).map(([n]) => n);
}
function Dn(e) {
  return [...e].sort((t, n) => t.name.localeCompare(n.name));
}
function Gn(e, t, n, s) {
  const i = t.trim();
  if (!i)
    return { error: "请先填写存档名称" };
  if (n.length === 0)
    return { error: "当前没有可保存的完整映射" };
  const o = e.map((l) => ({
    name: l.name,
    mappings: [...l.mappings]
  })), r = o.findIndex((l) => l.name === i);
  if (r >= 0 && !s)
    return { error: `存档「${i}」已存在` };
  const a = { name: i, mappings: [...n] };
  return r >= 0 ? (o[r] = a, { presets: o, message: `已更新存档：${i}` }) : (o.push(a), { presets: o, message: `已保存存档：${i}` });
}
function Un(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.find((i) => i.name === n);
  return s ? { mappings: [...s.mappings] } : { error: `未找到存档：${n}` };
}
function jn(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.filter((i) => i.name !== n);
  return s.length === e.length ? { error: `未找到存档：${n}` } : { presets: s, message: `已删除存档：${n}` };
}
const vf = {
  ja: "おはようございます。これは Tavern Multi-TTS のテスト音声です。",
  zh: "你好，这是 Tavern Multi-TTS 的测试语音。",
  en: "Hello, this is a Tavern Multi-TTS test voice."
}, yf = {
  ja: "こんにちは、これは GSVI の音声参照用サンプルです。",
  zh: "你好，这是一段 GSVI 的语音参考音频。",
  en: "Hello, this is a GSVI reference voice sample."
}, bf = {
  ja: "こんにちは、これは IndexTTS のテスト音声です。",
  zh: "你好，这是 IndexTTS 的测试语音。",
  en: "Hello, this is an IndexTTS test voice."
}, xf = {
  ja: "こんにちは、これは Fish Audio のテスト音声です。",
  zh: "你好，这是 Fish Audio 的测试语音。",
  en: "Hello, this is a Fish Audio test voice."
}, Tf = [
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
], Sf = [
  "不切",
  "凑四句一切",
  "凑50字一切",
  "按中文句号。切",
  "按英文句号.切",
  "按标点符号切"
];
function wf(e, t) {
  return e === "local_gsvi" ? yf[t] : e === "index_tts" ? bf[t] : e === "fish_audio" ? xf[t] : vf[t];
}
function Ef() {
  return {
    search: "",
    language: "all",
    gender: "all",
    source: "all"
  };
}
function Bn() {
  return {
    voices: [],
    filter: Ef()
  };
}
function uo() {
  return {
    minimax: Bn(),
    local_gsvi: Bn(),
    index_tts: Bn(),
    fish_audio: Bn()
  };
}
function Af(e, t) {
  return t === "minimax" ? e.minimax : t === "local_gsvi" ? e.local_gsvi : t === "index_tts" ? e.index_tts : e.fish_audio;
}
function fo(e, t, n) {
  const s = Af(e, t);
  return s.voices = [...n], e;
}
function If(e) {
  return [
    ...new Set(e.map((t) => t.language).filter((t) => !!t))
  ].sort();
}
function Mf(e, t) {
  const n = t.search.trim().toLowerCase();
  return e.filter((s) => t.language !== "all" && s.language !== t.language || t.gender !== "all" && s.gender !== t.gender || t.source !== "all" && s.source !== t.source ? !1 : n ? [s.id, s.name, ...s.description ?? []].join(" ").toLowerCase().includes(n) : !0);
}
function po(e) {
  const t = [e.language, e.gender, e.source].filter(Boolean);
  return t.length > 0 ? `${e.name} (${t.join(" / ")})` : e.name;
}
function mo(e) {
  return e?.languages ?? [];
}
function ho(e, t) {
  const n = t.trim();
  return !e || !n ? [] : e.emotionsByLanguage?.[n] ?? [];
}
function go(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(2)} MB`;
}
const Cf = ["data-color-scheme"], Pf = { class: "inline-drawer" }, Rf = { class: "inline-drawer-toggle inline-drawer-header" }, Vf = { class: "inline-drawer-content" }, Nf = { class: "mtts-card" }, Lf = { class: "mtts-card-head" }, kf = { class: "mtts-title" }, Of = { class: "mtts-version" }, Ff = ["title"], $f = { class: "mtts-enable" }, Df = {
  class: "mtts-tabs",
  role: "tablist",
  "aria-label": "TTS 引擎"
}, Gf = ["aria-selected"], Uf = ["aria-selected"], jf = ["aria-selected"], Bf = ["aria-selected"], Hf = {
  class: "mtts-section",
  "aria-labelledby": "mtts-service-title"
}, Kf = { class: "mtts-field" }, zf = { class: "mtts-grid" }, Wf = { class: "mtts-field" }, Jf = { class: "mtts-field" }, Xf = { class: "mtts-field" }, Yf = { class: "mtts-actions" }, Zf = ["disabled"], Qf = ["disabled"], qf = {
  key: 0,
  class: "mtts-fold"
}, ed = { class: "mtts-fold-body" }, td = { class: "mtts-grid" }, nd = { class: "mtts-field" }, sd = { class: "mtts-field" }, id = ["value"], od = { class: "mtts-field" }, rd = { class: "mtts-field" }, ad = { class: "mtts-field" }, ld = ["value"], cd = { value: "" }, ud = ["value"], fd = { class: "mtts-control-row" }, dd = { class: "mtts-field" }, pd = ["disabled"], md = { class: "mtts-grid" }, hd = { class: "mtts-field" }, gd = { value: "" }, _d = ["value"], vd = ["value"], yd = { class: "mtts-field" }, bd = ["value"], xd = { class: "mtts-field" }, Td = { class: "mtts-field" }, Sd = ["value"], wd = { class: "mtts-field" }, Ed = { id: "fish-audio-voice-suggestions" }, Ad = ["value"], Id = { class: "mtts-actions" }, Md = ["disabled"], Cd = ["disabled"], Pd = { class: "mtts-control-row" }, Rd = { class: "mtts-field" }, Vd = ["disabled"], Nd = { class: "mtts-grid" }, Ld = { class: "mtts-field" }, kd = { value: "" }, Od = ["value"], Fd = { class: "mtts-field" }, $d = ["value"], Dd = { class: "mtts-field" }, Gd = ["value"], Ud = { class: "mtts-actions" }, jd = { class: "mtts-field" }, Bd = ["disabled"], Hd = {
  class: "mtts-section",
  "aria-labelledby": "mtts-mapping-title"
}, Kd = { class: "mtts-section-head" }, zd = {
  id: "mtts-mapping-title",
  class: "mtts-section-title"
}, Wd = { class: "mtts-count" }, Jd = {
  key: 0,
  class: "mtts-empty"
}, Xd = { class: "mtts-field" }, Yd = ["onUpdate:modelValue"], Zd = { class: "mtts-field" }, Qd = ["onUpdate:modelValue"], qd = {
  key: 0,
  class: "mtts-field"
}, ep = ["value", "onChange"], tp = ["value"], np = { class: "mtts-mapping-actions" }, sp = ["disabled", "onClick"], ip = ["onClick"], op = { class: "mtts-field" }, rp = ["onUpdate:modelValue"], ap = { class: "mtts-grid" }, lp = { class: "mtts-field" }, cp = ["onUpdate:modelValue"], up = { value: "" }, fp = ["value"], dp = ["value"], pp = { class: "mtts-field" }, mp = ["onUpdate:modelValue"], hp = ["value"], gp = { class: "mtts-mapping-actions" }, _p = ["disabled", "onClick"], vp = ["onClick"], yp = { class: "mtts-field" }, bp = ["onUpdate:modelValue"], xp = { class: "mtts-field" }, Tp = ["onUpdate:modelValue"], Sp = { class: "mtts-mapping-actions" }, wp = ["disabled", "onClick"], Ep = ["onClick"], Ap = { class: "mtts-field" }, Ip = ["onUpdate:modelValue"], Mp = { class: "mtts-grid" }, Cp = { class: "mtts-field" }, Pp = ["onUpdate:modelValue"], Rp = { value: "" }, Vp = ["value"], Np = { class: "mtts-field" }, Lp = ["onUpdate:modelValue"], kp = ["value"], Op = { class: "mtts-field" }, Fp = ["onUpdate:modelValue"], $p = ["value"], Dp = { class: "mtts-mapping-actions" }, Gp = ["disabled", "onClick"], Up = ["onClick"], jp = {
  key: 4,
  class: "mtts-hint"
}, Bp = { class: "mtts-fold" }, Hp = { class: "mtts-fold-body" }, Kp = { class: "mtts-field" }, zp = { class: "mtts-field" }, Wp = ["value"], Jp = { class: "mtts-actions" }, Xp = ["disabled"], Yp = ["disabled"], Zp = { class: "mtts-fold" }, Qp = { class: "mtts-fold-body" }, qp = { class: "mtts-enable" }, em = { class: "mtts-field" }, tm = { class: "mtts-label" }, nm = { class: "mtts-field" }, sm = { class: "mtts-field" }, im = { class: "mtts-fold" }, om = { class: "mtts-fold-body" }, rm = { class: "mtts-field" }, am = {
  key: 0,
  class: "mtts-grid"
}, lm = {
  key: 0,
  class: "mtts-field"
}, cm = { class: "mtts-field" }, um = { class: "mtts-hint" }, fm = { class: "mtts-actions" }, dm = ["disabled"], pm = ["disabled"], mm = { class: "mtts-fold" }, hm = { class: "mtts-fold-body" }, gm = { class: "mtts-field" }, _m = ["value"], vm = { class: "mtts-field" }, ym = { class: "mtts-label" }, bm = { class: "mtts-field" }, xm = { class: "mtts-label" }, Tm = { class: "mtts-field" }, Sm = { class: "mtts-label" }, wm = { class: "mtts-field" }, Em = { class: "mtts-grid" }, Am = { class: "mtts-field" }, Im = ["value"], Mm = { class: "mtts-field" }, Cm = ["value"], Pm = { class: "mtts-field" }, Rm = { class: "mtts-label" }, Vm = { class: "mtts-field" }, Nm = { class: "mtts-label" }, Lm = { class: "mtts-field" }, km = { class: "mtts-label" }, Om = { class: "mtts-field" }, Fm = { class: "mtts-label" }, $m = { class: "mtts-field" }, Dm = { class: "mtts-label" }, Gm = /* @__PURE__ */ Ua({
  __name: "settings-panel",
  props: {
    displayName: {},
    version: {},
    settings: {},
    onSettingsChange: { type: Function }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ gn(Xt(t.settings)), s = /* @__PURE__ */ ot(""), i = /* @__PURE__ */ ot(!1), o = /* @__PURE__ */ ot(!1), r = /* @__PURE__ */ gn(uo()), a = /* @__PURE__ */ ot(""), l = /* @__PURE__ */ ot(""), p = /* @__PURE__ */ ot(0), m = /* @__PURE__ */ ot(0), g = /* @__PURE__ */ ot("saved"), E = /* @__PURE__ */ ot("light"), S = /* @__PURE__ */ gn({
      minimax: { kind: "unchecked", detail: "" },
      local_gsvi: { kind: "unchecked", detail: "" },
      index_tts: { kind: "unchecked", detail: "" },
      fish_audio: { kind: "unchecked", detail: "" }
    });
    let H, P = !0, F = null;
    const L = he(() => n.ttsEngine === "minimax"), $ = he(() => n.ttsEngine === "local_gsvi"), Z = he(() => n.ttsEngine === "index_tts"), O = he(() => n.ttsEngine === "fish_audio"), _e = he(() => r.minimax.voices), Ie = he(() => r.local_gsvi.voices), de = he(() => r.index_tts.voices), De = he(() => r.fish_audio.voices), Ct = he(
      () => Mf(r.minimax.voices, r.minimax.filter)
    ), Pt = he(() => If(r.minimax.voices)), We = he(
      () => r.local_gsvi.voices.find((_) => _.id === n.localGsviModel)
    ), Ge = he(() => mo(We.value)), on = he(
      () => ho(We.value, n.localGsviLanguage)
    ), Rt = he(() => Z.value ? n.indexTtsCharacterMappings.length : O.value ? n.fishAudioCharacterMappings.length : $.value ? n.gsviCharacterMappings.length : n.characterMappings.length), jt = he(() => Z.value ? Dn(n.indexTtsCharacterMappingPresets) : O.value ? Dn(n.fishAudioCharacterMappingPresets) : $.value ? Dn(n.gsviCharacterMappingPresets) : Dn(n.characterMappingPresets)), vt = he(
      () => _f(
        (Z.value ? n.indexTtsCharacterMappings : $.value ? n.gsviCharacterMappings : O.value ? n.fishAudioCharacterMappings : n.characterMappings).map((_) => _.characterName)
      )
    ), yt = he(() => L.value ? "试听默认音色（消耗额度）" : $.value ? "试听默认模型" : O.value ? "试听默认音色（消耗额度）" : "试听默认音色"), Vt = he(() => go(m.value)), M = he(() => Z.value ? "IndexTTS" : $.value ? "GSVI" : O.value ? "Fish Audio" : "MiniMax"), D = he(() => S[n.ttsEngine]), J = he(() => {
      const _ = D.value;
      return _.kind === "connecting" ? "正在连接" : _.kind === "online" ? _.detail ? `${M.value} 在线 · ${_.detail}` : `${M.value} 在线` : _.kind === "offline" ? _.detail ? `服务离线 · ${_.detail}` : "服务离线" : "尚未检查";
    }), q = he(() => g.value === "saving" ? "正在保存…" : g.value === "error" ? "保存失败，请重试" : "✓ 所有修改已自动保存");
    Fa(
      n,
      () => {
        try {
          if (t.onSettingsChange(Xt(n)), P) {
            P = !1, g.value = "saved";
            return;
          }
          g.value = "saving", window.clearTimeout(H), H = window.setTimeout(() => {
            g.value = "saved";
          }, 180);
        } catch {
          g.value = "error";
        }
      },
      { deep: !0 }
    );
    function K(_, c = !1) {
      s.value = _, i.value = c;
    }
    function ye(_, c = "") {
      S[n.ttsEngine] = { kind: _, detail: c };
    }
    function be(_) {
      n.ttsEngine = _;
    }
    function le(_) {
      return _.replaceAll("存档", "方案");
    }
    function ve() {
      E.value = Ue();
    }
    function Ue() {
      const _ = (document.documentElement.getAttribute("data-theme") || document.body.getAttribute("data-theme") || "").toLowerCase();
      if (_.includes("dark"))
        return "dark";
      if (_.includes("light"))
        return "light";
      if (document.documentElement.classList.contains("dark") || document.body.classList.contains("dark"))
        return "dark";
      const d = getComputedStyle(document.body).backgroundColor.match(/[\d.]+/g);
      return d && d.length >= 3 ? (0.2126 * Number(d[0]) + 0.7152 * Number(d[1]) + 0.0722 * Number(d[2])) / 255 < 0.45 ? "dark" : "light" : typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function we(_, c) {
      if (Mr(_)) {
        K(_.message, !0);
        return;
      }
      K(_ instanceof Error ? _.message : c, !0);
    }
    function Ve() {
      return n.characterMappings.map((_) => ({
        characterName: _.characterName.trim(),
        minimaxVoiceId: _.minimaxVoiceId.trim()
      })).filter((_) => _.characterName && _.minimaxVoiceId);
    }
    function re() {
      return n.gsviCharacterMappings.map((_) => ({
        characterName: _.characterName.trim(),
        gsviVoiceId: _.gsviVoiceId.trim(),
        gsviLanguage: _.gsviLanguage.trim(),
        gsviEmotion: _.gsviEmotion.trim()
      })).filter(
        (_) => _.characterName && _.gsviVoiceId && _.gsviLanguage && _.gsviEmotion
      );
    }
    function f() {
      return n.indexTtsCharacterMappings.map((_) => ({
        characterName: _.characterName.trim(),
        indexTtsVoiceId: _.indexTtsVoiceId.trim(),
        indexTtsLanguage: _.indexTtsLanguage
      })).filter((_) => _.characterName && _.indexTtsVoiceId && _.indexTtsLanguage);
    }
    function h() {
      return n.fishAudioCharacterMappings.map((_) => ({
        characterName: _.characterName.trim(),
        fishAudioReferenceId: _.fishAudioReferenceId.trim()
      })).filter((_) => _.characterName && _.fishAudioReferenceId);
    }
    function v() {
      return n.ttsEngine === "minimax" ? "请先填写 API Key" : n.ttsEngine === "local_gsvi" ? "请先填写 Local-GSVI 服务地址" : n.ttsEngine === "fish_audio" ? "请先填写 Fish Audio API Key" : "请先填写 IndexTTS 服务地址";
    }
    function T(_) {
      return n.ttsEngine === "local_gsvi" ? `已加载 ${_} 个模型` : n.ttsEngine === "fish_audio" ? `已加载 ${_} 个音色模型` : `已加载 ${_} 个音色`;
    }
    async function y(_, c, d) {
      if (!o.value) {
        o.value = !0, c && K(c);
        try {
          await _();
        } catch (W) {
          we(W, d);
        } finally {
          o.value = !1;
        }
      }
    }
    async function b(_ = !1) {
      await y(
        async () => {
          ye("connecting");
          const c = $s(n);
          if (!c) {
            const W = v();
            ye("offline", W), K(W, !0);
            return;
          }
          c.engine === "minimax" && (c.forceRefresh = _);
          const d = n.ttsEngine;
          try {
            const W = await dn(d).listVoices(c);
            fo(r, d, W);
            const C = T(W.length);
            ye("online", C), K(C);
          } catch (W) {
            throw ye("offline"), W;
          }
        },
        "",
        "拉取列表失败"
      );
    }
    function I(_) {
      n.voiceId = _, n.voiceCatalogSelectedId = _;
    }
    function A() {
      if (L.value) {
        n.characterMappings.push({ characterName: "", minimaxVoiceId: "" });
        return;
      }
      if ($.value) {
        n.gsviCharacterMappings.push({
          characterName: "",
          gsviVoiceId: "",
          gsviLanguage: "",
          gsviEmotion: ""
        });
        return;
      }
      if (O.value) {
        n.fishAudioCharacterMappings.push({
          characterName: "",
          fishAudioReferenceId: ""
        });
        return;
      }
      n.indexTtsCharacterMappings.push({
        characterName: "",
        indexTtsVoiceId: "",
        indexTtsLanguage: n.indexTtsLanguage
      });
    }
    function w(_) {
      if (L.value) {
        n.characterMappings.splice(_, 1);
        return;
      }
      if ($.value) {
        n.gsviCharacterMappings.splice(_, 1);
        return;
      }
      if (O.value) {
        n.fishAudioCharacterMappings.splice(_, 1);
        return;
      }
      n.indexTtsCharacterMappings.splice(_, 1);
    }
    function x() {
      const _ = a.value, c = jt.value.some((W) => W.name === _.trim());
      if (c && !window.confirm(`方案「${_.trim()}」已存在，要覆盖吗？`))
        return;
      const d = L.value ? Gn(n.characterMappingPresets, _, Ve(), c) : $.value ? Gn(n.gsviCharacterMappingPresets, _, re(), c) : O.value ? Gn(
        n.fishAudioCharacterMappingPresets,
        _,
        h(),
        c
      ) : Gn(
        n.indexTtsCharacterMappingPresets,
        _,
        f(),
        c
      );
      if ("error" in d) {
        K(le(d.error), !0);
        return;
      }
      L.value ? n.characterMappingPresets = d.presets : $.value ? n.gsviCharacterMappingPresets = d.presets : O.value ? n.fishAudioCharacterMappingPresets = d.presets : n.indexTtsCharacterMappingPresets = d.presets, l.value = _.trim(), K(le(d.message));
    }
    function j() {
      const _ = L.value ? Un(n.characterMappingPresets, l.value) : $.value ? Un(n.gsviCharacterMappingPresets, l.value) : O.value ? Un(n.fishAudioCharacterMappingPresets, l.value) : Un(n.indexTtsCharacterMappingPresets, l.value);
      if ("error" in _) {
        K(le(_.error), !0);
        return;
      }
      (L.value ? Ve().length > 0 : $.value ? re().length > 0 : O.value ? h().length > 0 : f().length > 0) && !window.confirm("载入方案会覆盖当前映射，确定继续吗？") || (L.value ? n.characterMappings = _.mappings : $.value ? n.gsviCharacterMappings = _.mappings : O.value ? n.fishAudioCharacterMappings = _.mappings : n.indexTtsCharacterMappings = _.mappings, K(`已载入方案：${l.value}`));
    }
    function R() {
      if (!window.confirm(`确定删除方案「${l.value}」吗？`))
        return;
      const _ = L.value ? jn(n.characterMappingPresets, l.value) : $.value ? jn(n.gsviCharacterMappingPresets, l.value) : O.value ? jn(n.fishAudioCharacterMappingPresets, l.value) : jn(n.indexTtsCharacterMappingPresets, l.value);
      if ("error" in _) {
        K(le(_.error), !0);
        return;
      }
      L.value ? n.characterMappingPresets = _.presets : $.value ? n.gsviCharacterMappingPresets = _.presets : O.value ? n.fishAudioCharacterMappingPresets = _.presets : n.indexTtsCharacterMappingPresets = _.presets, l.value = "", K(le(_.message));
    }
    async function G() {
      if (n.ttsEngine === "fish_audio") {
        await y(
          async () => {
            ye("connecting");
            const _ = $s(n);
            if (!_ || _.engine !== "fish_audio") {
              const d = "请先填写 Fish Audio API Key";
              ye("offline", d), K(d, !0);
              return;
            }
            const c = await dn("fish_audio").checkHealth(_);
            ye(c.ok ? "online" : "offline", c.message), K(c.message, !c.ok);
          },
          "",
          "检查 Fish Audio 连接失败"
        );
        return;
      }
      if (n.ttsEngine !== "index_tts") {
        await b(!0);
        return;
      }
      await y(
        async () => {
          ye("connecting");
          const _ = $s(n);
          if (!_ || _.engine !== "index_tts") {
            const d = "请先填写 IndexTTS 服务地址";
            ye("offline", d), K(d, !0);
            return;
          }
          const c = dn("index_tts");
          try {
            const d = await c.checkHealth(_);
            if (!d.ok) {
              ye("offline", d.message), K(d.message, !0);
              return;
            }
            try {
              const W = await c.listVoices(_);
              fo(r, "index_tts", W);
              const C = T(W.length);
              ye("online", C), K(d.message);
            } catch (W) {
              ye("online", d.message), we(W, "拉取音色失败");
            }
          } catch (d) {
            throw ye("offline"), d;
          }
        },
        "",
        "检查 IndexTTS 连接失败"
      );
    }
    async function B(_) {
      await y(
        async () => {
          const c = wf(n.ttsEngine, n.testLanguage), d = jr(n, c, _);
          if (!d) {
            K(
              _ ? `角色「${_}」未完整映射，无法测试` : "请先补全当前引擎的默认音色/模型后再测试",
              !0
            );
            return;
          }
          const W = await dn(n.ttsEngine).synthesize(d);
          yr(W), K(_ ? `正在试听「${_}」` : "正在试听默认音色");
        },
        "正在合成测试语音…",
        "测试语音失败"
      );
    }
    async function Q() {
      await y(
        async () => {
          const _ = await pc();
          p.value = _.count, m.value = _.totalBytes, K(`缓存 ${_.count} 条，${go(_.totalBytes)}`);
        },
        "正在读取缓存…",
        "读取缓存失败"
      );
    }
    async function ie() {
      window.confirm("确定清空本扩展的音频缓存吗？") && await y(
        async () => {
          await vr(), p.value = 0, m.value = 0, K("已清空音频缓存");
        },
        "正在清空缓存…",
        "清空缓存失败"
      );
    }
    function te() {
      window.confirm("确定恢复默认设置吗？当前映射和密钥都会被清空。") && (Object.assign(n, Xt(gt)), Object.assign(r, uo()), K("已恢复默认设置"));
    }
    function me() {
      Ge.value.includes(n.localGsviLanguage) || (n.localGsviLanguage = "", n.localGsviEmotion = "");
    }
    function Te(_) {
      return mo(r.local_gsvi.voices.find((c) => c.id === _));
    }
    function ke(_, c) {
      return ho(
        r.local_gsvi.voices.find((d) => d.id === _),
        c
      );
    }
    return Ha(() => {
      E.value = Ue(), typeof window.matchMedia == "function" && (F = window.matchMedia("(prefers-color-scheme: dark)"), F.addEventListener("change", ve));
    }), Ka(() => {
      window.clearTimeout(H), F?.removeEventListener("change", ve), F = null;
    }), Q().catch((_) => we(_, "读取缓存失败")), (_, c) => (V(), k("div", {
      class: "tavern-multi-tts-settings",
      "data-color-scheme": E.value
    }, [
      u("div", Pf, [
        u("div", Rf, [
          u("b", null, z(e.displayName), 1),
          c[51] || (c[51] = u("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        u("div", Vf, [
          u("div", Nf, [
            u("header", Lf, [
              u("h2", kf, z(e.displayName), 1),
              u("span", Of, z(e.version), 1)
            ]),
            u("div", {
              class: Ye(["mtts-capsule", {
                "is-online": D.value.kind === "online",
                "is-connecting": D.value.kind === "connecting",
                "is-offline": D.value.kind === "offline"
              }]),
              role: "status",
              "aria-live": "polite"
            }, [
              c[52] || (c[52] = u("span", {
                class: "mtts-dot",
                "aria-hidden": "true"
              }, null, -1)),
              (V(), k("span", {
                key: J.value,
                class: "mtts-capsule-text mtts-fade",
                title: J.value
              }, z(J.value), 9, Ff))
            ], 2),
            s.value ? (V(), k("p", {
              key: s.value,
              class: Ye(["mtts-notice mtts-fade", { "is-error": i.value }]),
              role: "status"
            }, z(s.value), 3)) : je("", !0),
            u("label", $f, [
              U(u("input", {
                "onUpdate:modelValue": c[0] || (c[0] = (d) => n.enabled = d),
                type: "checkbox"
              }, null, 512), [
                [Xi, n.enabled]
              ]),
              c[53] || (c[53] = u("span", null, "启用", -1))
            ]),
            u("div", Df, [
              u("button", {
                class: Ye(["mtts-tab", { "is-active": L.value }]),
                type: "button",
                role: "tab",
                "aria-selected": L.value,
                onClick: c[1] || (c[1] = (d) => be("minimax"))
              }, " MiniMax ", 10, Gf),
              u("button", {
                class: Ye(["mtts-tab", { "is-active": $.value }]),
                type: "button",
                role: "tab",
                "aria-selected": $.value,
                onClick: c[2] || (c[2] = (d) => be("local_gsvi"))
              }, " GSVI ", 10, Uf),
              u("button", {
                class: Ye(["mtts-tab", { "is-active": Z.value }]),
                type: "button",
                role: "tab",
                "aria-selected": Z.value,
                onClick: c[3] || (c[3] = (d) => be("index_tts"))
              }, " IndexTTS ", 10, jf),
              u("button", {
                class: Ye(["mtts-tab", { "is-active": O.value }]),
                type: "button",
                role: "tab",
                "aria-selected": O.value,
                onClick: c[4] || (c[4] = (d) => be("fish_audio"))
              }, " Fish Audio ", 10, Bf)
            ]),
            u("section", Hf, [
              c[83] || (c[83] = u("h3", {
                id: "mtts-service-title",
                class: "mtts-section-title"
              }, "语音服务", -1)),
              L.value ? (V(), k(X, { key: 0 }, [
                u("label", Kf, [
                  c[54] || (c[54] = u("span", { class: "mtts-label" }, "API Key", -1)),
                  U(u("input", {
                    "onUpdate:modelValue": c[5] || (c[5] = (d) => n.apiKey = d),
                    class: "text_pole",
                    type: "password",
                    autocomplete: "off"
                  }, null, 512), [
                    [ne, n.apiKey]
                  ])
                ]),
                u("div", zf, [
                  u("label", Wf, [
                    c[55] || (c[55] = u("span", { class: "mtts-label" }, "Group ID", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": c[6] || (c[6] = (d) => n.groupId = d),
                      class: "text_pole",
                      type: "text"
                    }, null, 512), [
                      [ne, n.groupId]
                    ])
                  ]),
                  u("label", Jf, [
                    c[57] || (c[57] = u("span", { class: "mtts-label" }, "区域", -1)),
                    U(u("select", {
                      "onUpdate:modelValue": c[7] || (c[7] = (d) => n.minimaxRegion = d),
                      class: "text_pole"
                    }, [...c[56] || (c[56] = [
                      u("option", { value: "international" }, "国际", -1),
                      u("option", { value: "beijing" }, "北京", -1)
                    ])], 512), [
                      [ge, n.minimaxRegion]
                    ])
                  ])
                ]),
                u("label", Xf, [
                  c[58] || (c[58] = u("span", { class: "mtts-label" }, "默认音色", -1)),
                  U(u("input", {
                    "onUpdate:modelValue": c[8] || (c[8] = (d) => n.voiceId = d),
                    class: "text_pole",
                    type: "text",
                    placeholder: "无 char 的台词使用"
                  }, null, 512), [
                    [ne, n.voiceId]
                  ])
                ]),
                u("div", Yf, [
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: G
                  }, " 检查连接 ", 8, Zf),
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: o.value,
                    onClick: c[9] || (c[9] = (d) => b(!0))
                  }, " 刷新音色 ", 8, Qf)
                ]),
                _e.value.length > 0 ? (V(), k("details", qf, [
                  c[67] || (c[67] = u("summary", null, [
                    u("i", {
                      class: "fa-solid fa-chevron-right mtts-fold-icon",
                      "aria-hidden": "true"
                    }),
                    lt(" 筛选音色 ")
                  ], -1)),
                  u("div", ed, [
                    u("div", td, [
                      u("label", nd, [
                        c[59] || (c[59] = u("span", { class: "mtts-label" }, "搜索", -1)),
                        U(u("input", {
                          "onUpdate:modelValue": c[10] || (c[10] = (d) => r.minimax.filter.search = d),
                          class: "text_pole",
                          type: "search"
                        }, null, 512), [
                          [ne, r.minimax.filter.search]
                        ])
                      ]),
                      u("label", sd, [
                        c[61] || (c[61] = u("span", { class: "mtts-label" }, "语言", -1)),
                        U(u("select", {
                          "onUpdate:modelValue": c[11] || (c[11] = (d) => r.minimax.filter.language = d),
                          class: "text_pole"
                        }, [
                          c[60] || (c[60] = u("option", { value: "all" }, "全部语言", -1)),
                          (V(!0), k(X, null, pe(Pt.value, (d) => (V(), k("option", {
                            key: d,
                            value: d
                          }, z(d), 9, id))), 128))
                        ], 512), [
                          [ge, r.minimax.filter.language]
                        ])
                      ]),
                      u("label", od, [
                        c[63] || (c[63] = u("span", { class: "mtts-label" }, "性别", -1)),
                        U(u("select", {
                          "onUpdate:modelValue": c[12] || (c[12] = (d) => r.minimax.filter.gender = d),
                          class: "text_pole"
                        }, [...c[62] || (c[62] = [
                          u("option", { value: "all" }, "全部性别", -1),
                          u("option", { value: "Female" }, "Female", -1),
                          u("option", { value: "Male" }, "Male", -1),
                          u("option", { value: "Unknown" }, "Unknown", -1)
                        ])], 512), [
                          [ge, r.minimax.filter.gender]
                        ])
                      ]),
                      u("label", rd, [
                        c[65] || (c[65] = u("span", { class: "mtts-label" }, "来源", -1)),
                        U(u("select", {
                          "onUpdate:modelValue": c[13] || (c[13] = (d) => r.minimax.filter.source = d),
                          class: "text_pole"
                        }, [...c[64] || (c[64] = [
                          u("option", { value: "all" }, "全部来源", -1),
                          u("option", { value: "system" }, "system", -1),
                          u("option", { value: "voice_cloning" }, "voice_cloning", -1),
                          u("option", { value: "voice_generation" }, "voice_generation", -1)
                        ])], 512), [
                          [ge, r.minimax.filter.source]
                        ])
                      ])
                    ]),
                    u("label", ad, [
                      c[66] || (c[66] = u("span", { class: "mtts-label" }, "从列表填入默认音色", -1)),
                      u("select", {
                        class: "text_pole",
                        value: n.voiceId,
                        onChange: c[14] || (c[14] = (d) => I(d.target.value))
                      }, [
                        u("option", cd, z(Ct.value.length) + " 条可选", 1),
                        (V(!0), k(X, null, pe(Ct.value, (d) => (V(), k("option", {
                          key: d.id,
                          value: d.id
                        }, z(at(po)(d)), 9, ud))), 128))
                      ], 40, ld)
                    ])
                  ])
                ])) : je("", !0)
              ], 64)) : Z.value ? (V(), k(X, { key: 1 }, [
                u("div", fd, [
                  u("label", dd, [
                    c[68] || (c[68] = u("span", { class: "mtts-label" }, "服务地址", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": c[15] || (c[15] = (d) => n.indexTtsBaseUrl = d),
                      class: "text_pole",
                      type: "url",
                      placeholder: "http://127.0.0.1:7860"
                    }, null, 512), [
                      [ne, n.indexTtsBaseUrl]
                    ])
                  ]),
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: G
                  }, " 检查连接 ", 8, pd)
                ]),
                u("div", md, [
                  u("label", hd, [
                    c[69] || (c[69] = u("span", { class: "mtts-label" }, "默认音色", -1)),
                    U(u("select", {
                      "onUpdate:modelValue": c[16] || (c[16] = (d) => n.indexTtsVoiceId = d),
                      class: "text_pole"
                    }, [
                      u("option", gd, z(de.value.length > 0 ? "请选择音色预设" : "先检查连接并拉取音色"), 1),
                      n.indexTtsVoiceId && !de.value.some((d) => d.id === n.indexTtsVoiceId) ? (V(), k("option", {
                        key: 0,
                        value: n.indexTtsVoiceId
                      }, z(n.indexTtsVoiceId), 9, _d)) : je("", !0),
                      (V(!0), k(X, null, pe(de.value, (d) => (V(), k("option", {
                        key: d.id,
                        value: d.id
                      }, z(d.name), 9, vd))), 128))
                    ], 512), [
                      [ge, n.indexTtsVoiceId]
                    ])
                  ]),
                  u("label", yd, [
                    c[70] || (c[70] = u("span", { class: "mtts-label" }, "语言", -1)),
                    U(u("select", {
                      "onUpdate:modelValue": c[17] || (c[17] = (d) => n.indexTtsLanguage = d),
                      class: "text_pole"
                    }, [
                      (V(!0), k(X, null, pe(at(ts), (d) => (V(), k("option", {
                        key: d,
                        value: d
                      }, z(d), 9, bd))), 128))
                    ], 512), [
                      [ge, n.indexTtsLanguage]
                    ])
                  ])
                ])
              ], 64)) : O.value ? (V(), k(X, { key: 2 }, [
                u("label", xd, [
                  c[71] || (c[71] = u("span", { class: "mtts-label" }, "API Key", -1)),
                  U(u("input", {
                    "onUpdate:modelValue": c[18] || (c[18] = (d) => n.fishAudioApiKey = d),
                    class: "text_pole",
                    type: "password",
                    autocomplete: "off"
                  }, null, 512), [
                    [ne, n.fishAudioApiKey]
                  ])
                ]),
                u("label", Td, [
                  c[72] || (c[72] = u("span", { class: "mtts-label" }, "模型档位", -1)),
                  U(u("select", {
                    "onUpdate:modelValue": c[19] || (c[19] = (d) => n.fishAudioModel = d),
                    class: "text_pole"
                  }, [
                    (V(!0), k(X, null, pe(at(vi), (d) => (V(), k("option", {
                      key: d,
                      value: d
                    }, z(d === "s2.1-pro-free" ? "S2.1 Pro Free" : "S2.1 Pro"), 9, Sd))), 128))
                  ], 512), [
                    [ge, n.fishAudioModel]
                  ])
                ]),
                u("label", wd, [
                  c[73] || (c[73] = u("span", { class: "mtts-label" }, "默认音色模型 ID", -1)),
                  U(u("input", {
                    "onUpdate:modelValue": c[20] || (c[20] = (d) => n.fishAudioReferenceId = d),
                    class: "text_pole",
                    type: "text",
                    list: "fish-audio-voice-suggestions",
                    placeholder: "可输入公共模型 ID"
                  }, null, 512), [
                    [ne, n.fishAudioReferenceId]
                  ])
                ]),
                u("datalist", Ed, [
                  (V(!0), k(X, null, pe(De.value, (d) => (V(), k("option", {
                    key: d.id,
                    value: d.id
                  }, z(d.name), 9, Ad))), 128))
                ]),
                c[74] || (c[74] = u("p", { class: "mtts-hint" }, " 可从 Fish Audio 音色页面复制模型 ID；“拉取模型”只读取当前账号自己的模型。 ", -1)),
                u("div", Id, [
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: G
                  }, " 检查连接 ", 8, Md),
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: o.value,
                    onClick: c[21] || (c[21] = (d) => b(!0))
                  }, " 拉取模型 ", 8, Cd)
                ])
              ], 64)) : $.value ? (V(), k(X, { key: 3 }, [
                u("div", Pd, [
                  u("label", Rd, [
                    c[75] || (c[75] = u("span", { class: "mtts-label" }, "服务地址", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": c[22] || (c[22] = (d) => n.localGsviBaseUrl = d),
                      class: "text_pole",
                      type: "url",
                      placeholder: "http://127.0.0.1:9880"
                    }, null, 512), [
                      [ne, n.localGsviBaseUrl]
                    ])
                  ]),
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: G
                  }, " 检查连接 ", 8, Vd)
                ]),
                u("div", Nd, [
                  u("label", Ld, [
                    c[76] || (c[76] = u("span", { class: "mtts-label" }, "默认模型", -1)),
                    U(u("select", {
                      "onUpdate:modelValue": c[23] || (c[23] = (d) => n.localGsviModel = d),
                      class: "text_pole",
                      onChange: me
                    }, [
                      u("option", kd, z(Ie.value.length > 0 ? "请选择" : "先检查连接并拉取模型"), 1),
                      (V(!0), k(X, null, pe(Ie.value, (d) => (V(), k("option", {
                        key: d.id,
                        value: d.id
                      }, z(d.name), 9, Od))), 128))
                    ], 544), [
                      [ge, n.localGsviModel]
                    ])
                  ]),
                  u("label", Fd, [
                    c[78] || (c[78] = u("span", { class: "mtts-label" }, "语种", -1)),
                    U(u("select", {
                      "onUpdate:modelValue": c[24] || (c[24] = (d) => n.localGsviLanguage = d),
                      class: "text_pole"
                    }, [
                      c[77] || (c[77] = u("option", { value: "" }, "请选择", -1)),
                      (V(!0), k(X, null, pe(Ge.value, (d) => (V(), k("option", {
                        key: d,
                        value: d
                      }, z(d), 9, $d))), 128))
                    ], 512), [
                      [ge, n.localGsviLanguage]
                    ])
                  ]),
                  u("label", Dd, [
                    c[80] || (c[80] = u("span", { class: "mtts-label" }, "情绪", -1)),
                    U(u("select", {
                      "onUpdate:modelValue": c[25] || (c[25] = (d) => n.localGsviEmotion = d),
                      class: "text_pole"
                    }, [
                      c[79] || (c[79] = u("option", { value: "" }, "请选择", -1)),
                      (V(!0), k(X, null, pe(on.value, (d) => (V(), k("option", {
                        key: d,
                        value: d
                      }, z(d), 9, Gd))), 128))
                    ], 512), [
                      [ge, n.localGsviEmotion]
                    ])
                  ])
                ])
              ], 64)) : je("", !0),
              u("div", Ud, [
                u("label", jd, [
                  c[82] || (c[82] = u("span", { class: "mtts-label" }, "试听语言", -1)),
                  U(u("select", {
                    "onUpdate:modelValue": c[26] || (c[26] = (d) => n.testLanguage = d),
                    class: "text_pole"
                  }, [...c[81] || (c[81] = [
                    u("option", { value: "ja" }, "日语", -1),
                    u("option", { value: "zh" }, "中文", -1),
                    u("option", { value: "en" }, "英语", -1)
                  ])], 512), [
                    [ge, n.testLanguage]
                  ])
                ]),
                u("button", {
                  class: "mtts-btn mtts-btn-secondary",
                  type: "button",
                  disabled: o.value,
                  onClick: c[27] || (c[27] = (d) => B())
                }, z(yt.value), 9, Bd)
              ])
            ]),
            u("section", Hd, [
              u("div", Kd, [
                u("h3", zd, [
                  c[84] || (c[84] = lt(" 角色映射 ", -1)),
                  u("span", Wd, z(Rt.value), 1)
                ]),
                u("button", {
                  class: "mtts-btn mtts-btn-primary",
                  type: "button",
                  onClick: A
                }, " + 添加角色 ")
              ]),
              Rt.value === 0 ? (V(), k("div", Jd, [
                c[85] || (c[85] = u("p", { class: "mtts-empty-title" }, "还没有角色映射", -1)),
                c[86] || (c[86] = u("p", { class: "mtts-empty-copy" }, [
                  lt(" 添加角色后，带有 "),
                  u("code", null, '<say char="角色名">'),
                  lt(" 的台词才会生成语音。 ")
                ], -1)),
                u("button", {
                  class: "mtts-btn mtts-btn-primary",
                  type: "button",
                  onClick: A
                }, " ＋添加第一个角色 ")
              ])) : (V(), k(X, { key: 1 }, [
                L.value ? (V(!0), k(X, { key: 0 }, pe(n.characterMappings, (d, W) => (V(), k("article", {
                  key: `mm-${W}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", Xd, [
                    c[87] || (c[87] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": (C) => d.characterName = C,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, Yd), [
                      [ne, d.characterName]
                    ])
                  ]),
                  u("label", Zd, [
                    c[88] || (c[88] = u("span", { class: "mtts-label" }, "Voice ID", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": (C) => d.minimaxVoiceId = C,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, Qd), [
                      [ne, d.minimaxVoiceId]
                    ])
                  ]),
                  _e.value.length > 0 ? (V(), k("label", qd, [
                    c[90] || (c[90] = u("span", { class: "mtts-label" }, "音色预设", -1)),
                    u("select", {
                      class: "text_pole",
                      value: d.minimaxVoiceId,
                      onChange: (C) => d.minimaxVoiceId = C.target.value
                    }, [
                      c[89] || (c[89] = u("option", { value: "" }, "从列表选择", -1)),
                      (V(!0), k(X, null, pe(Ct.value, (C) => (V(), k("option", {
                        key: C.id,
                        value: C.id
                      }, z(at(po)(C)), 9, tp))), 128))
                    ], 40, ep)
                  ])) : je("", !0),
                  u("div", np, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (C) => B(d.characterName)
                    }, " 试听 ", 8, sp),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (C) => w(W)
                    }, " 删除 ", 8, ip)
                  ])
                ]))), 128)) : Z.value ? (V(!0), k(X, { key: 1 }, pe(n.indexTtsCharacterMappings, (d, W) => (V(), k("article", {
                  key: `index-${W}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", op, [
                    c[91] || (c[91] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": (C) => d.characterName = C,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, rp), [
                      [ne, d.characterName]
                    ])
                  ]),
                  u("div", ap, [
                    u("label", lp, [
                      c[92] || (c[92] = u("span", { class: "mtts-label" }, "音色预设", -1)),
                      U(u("select", {
                        "onUpdate:modelValue": (C) => d.indexTtsVoiceId = C,
                        class: "text_pole"
                      }, [
                        u("option", up, z(de.value.length > 0 ? "请选择" : "先检查连接"), 1),
                        d.indexTtsVoiceId && !de.value.some((C) => C.id === d.indexTtsVoiceId) ? (V(), k("option", {
                          key: 0,
                          value: d.indexTtsVoiceId
                        }, z(d.indexTtsVoiceId), 9, fp)) : je("", !0),
                        (V(!0), k(X, null, pe(de.value, (C) => (V(), k("option", {
                          key: C.id,
                          value: C.id
                        }, z(C.name), 9, dp))), 128))
                      ], 8, cp), [
                        [ge, d.indexTtsVoiceId]
                      ])
                    ]),
                    u("label", pp, [
                      c[93] || (c[93] = u("span", { class: "mtts-label" }, "语言", -1)),
                      U(u("select", {
                        "onUpdate:modelValue": (C) => d.indexTtsLanguage = C,
                        class: "text_pole"
                      }, [
                        (V(!0), k(X, null, pe(at(ts), (C) => (V(), k("option", {
                          key: C,
                          value: C
                        }, z(C), 9, hp))), 128))
                      ], 8, mp), [
                        [ge, d.indexTtsLanguage]
                      ])
                    ])
                  ]),
                  u("div", gp, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (C) => B(d.characterName)
                    }, " 试听 ", 8, _p),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (C) => w(W)
                    }, " 删除 ", 8, vp)
                  ])
                ]))), 128)) : O.value ? (V(!0), k(X, { key: 2 }, pe(n.fishAudioCharacterMappings, (d, W) => (V(), k("article", {
                  key: `fish-${W}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", yp, [
                    c[94] || (c[94] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": (C) => d.characterName = C,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, bp), [
                      [ne, d.characterName]
                    ])
                  ]),
                  u("label", xp, [
                    c[95] || (c[95] = u("span", { class: "mtts-label" }, "Fish Audio 音色模型 ID", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": (C) => d.fishAudioReferenceId = C,
                      class: "text_pole",
                      type: "text",
                      list: "fish-audio-voice-suggestions"
                    }, null, 8, Tp), [
                      [ne, d.fishAudioReferenceId]
                    ])
                  ]),
                  u("div", Sp, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (C) => B(d.characterName)
                    }, " 试听 ", 8, wp),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (C) => w(W)
                    }, " 删除 ", 8, Ep)
                  ])
                ]))), 128)) : $.value ? (V(!0), k(X, { key: 3 }, pe(n.gsviCharacterMappings, (d, W) => (V(), k("article", {
                  key: `gsvi-${W}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", Ap, [
                    c[96] || (c[96] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": (C) => d.characterName = C,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, Ip), [
                      [ne, d.characterName]
                    ])
                  ]),
                  u("div", Mp, [
                    u("label", Cp, [
                      c[97] || (c[97] = u("span", { class: "mtts-label" }, "模型", -1)),
                      U(u("select", {
                        "onUpdate:modelValue": (C) => d.gsviVoiceId = C,
                        class: "text_pole"
                      }, [
                        u("option", Rp, z(Ie.value.length > 0 ? "请选择" : "先检查连接"), 1),
                        (V(!0), k(X, null, pe(Ie.value, (C) => (V(), k("option", {
                          key: C.id,
                          value: C.id
                        }, z(C.name), 9, Vp))), 128))
                      ], 8, Pp), [
                        [ge, d.gsviVoiceId]
                      ])
                    ]),
                    u("label", Np, [
                      c[99] || (c[99] = u("span", { class: "mtts-label" }, "语种", -1)),
                      U(u("select", {
                        "onUpdate:modelValue": (C) => d.gsviLanguage = C,
                        class: "text_pole"
                      }, [
                        c[98] || (c[98] = u("option", { value: "" }, "请选择", -1)),
                        (V(!0), k(X, null, pe(Te(d.gsviVoiceId), (C) => (V(), k("option", {
                          key: C,
                          value: C
                        }, z(C), 9, kp))), 128))
                      ], 8, Lp), [
                        [ge, d.gsviLanguage]
                      ])
                    ]),
                    u("label", Op, [
                      c[101] || (c[101] = u("span", { class: "mtts-label" }, "情绪", -1)),
                      U(u("select", {
                        "onUpdate:modelValue": (C) => d.gsviEmotion = C,
                        class: "text_pole"
                      }, [
                        c[100] || (c[100] = u("option", { value: "" }, "请选择", -1)),
                        (V(!0), k(X, null, pe(ke(d.gsviVoiceId, d.gsviLanguage), (C) => (V(), k("option", {
                          key: C,
                          value: C
                        }, z(C), 9, $p))), 128))
                      ], 8, Fp), [
                        [ge, d.gsviEmotion]
                      ])
                    ])
                  ]),
                  u("div", Dp, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (C) => B(d.characterName)
                    }, " 试听 ", 8, Gp),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (C) => w(W)
                    }, " 删除 ", 8, Up)
                  ])
                ]))), 128)) : je("", !0),
                vt.value.length > 0 ? (V(), k("p", jp, " 重复角色名：" + z(vt.value.join("、")) + "，最后一条完整映射生效。 ", 1)) : je("", !0)
              ], 64))
            ]),
            u("details", Bp, [
              c[106] || (c[106] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                lt(" 映射方案（可选） ")
              ], -1)),
              u("div", Hp, [
                c[105] || (c[105] = u("p", { class: "mtts-hint" }, "角色映射会自动保存；这里仅用于保存多套可切换方案。", -1)),
                u("label", Kp, [
                  c[102] || (c[102] = u("span", { class: "mtts-label" }, "方案名称", -1)),
                  U(u("input", {
                    "onUpdate:modelValue": c[28] || (c[28] = (d) => a.value = d),
                    class: "text_pole",
                    type: "text",
                    placeholder: "日语角色组"
                  }, null, 512), [
                    [ne, a.value]
                  ])
                ]),
                u("div", { class: "mtts-actions" }, [
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    onClick: x
                  }, " 保存当前方案 ")
                ]),
                u("label", zp, [
                  c[104] || (c[104] = u("span", { class: "mtts-label" }, "选择已有方案", -1)),
                  U(u("select", {
                    "onUpdate:modelValue": c[29] || (c[29] = (d) => l.value = d),
                    class: "text_pole"
                  }, [
                    c[103] || (c[103] = u("option", { value: "" }, "请选择方案", -1)),
                    (V(!0), k(X, null, pe(jt.value, (d) => (V(), k("option", {
                      key: d.name,
                      value: d.name
                    }, z(d.name) + "（" + z(d.mappings.length) + "） ", 9, Wp))), 128))
                  ], 512), [
                    [ge, l.value]
                  ])
                ]),
                u("div", Jp, [
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: !l.value,
                    onClick: j
                  }, " 载入方案 ", 8, Xp),
                  u("button", {
                    class: "mtts-btn mtts-btn-danger",
                    type: "button",
                    disabled: !l.value,
                    onClick: R
                  }, " 删除方案 ", 8, Yp)
                ])
              ])
            ]),
            u("details", Zp, [
              c[111] || (c[111] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                lt(" 提示词注入 ")
              ], -1)),
              u("div", Qp, [
                u("label", qp, [
                  U(u("input", {
                    "onUpdate:modelValue": c[30] || (c[30] = (d) => n.injectEnabled = d),
                    type: "checkbox"
                  }, null, 512), [
                    [Xi, n.injectEnabled]
                  ]),
                  c[107] || (c[107] = u("span", null, "注入 <say> 提示", -1))
                ]),
                u("label", em, [
                  u("span", tm, "注入深度 D" + z(n.injectDepth), 1),
                  U(u("input", {
                    "onUpdate:modelValue": c[31] || (c[31] = (d) => n.injectDepth = d),
                    type: "range",
                    min: "0",
                    max: "10",
                    step: "1"
                  }, null, 512), [
                    [
                      ne,
                      n.injectDepth,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                u("label", nm, [
                  c[109] || (c[109] = u("span", { class: "mtts-label" }, "注入角色", -1)),
                  U(u("select", {
                    "onUpdate:modelValue": c[32] || (c[32] = (d) => n.injectRole = d),
                    class: "text_pole"
                  }, [...c[108] || (c[108] = [
                    u("option", { value: "system" }, "system", -1),
                    u("option", { value: "user" }, "user", -1),
                    u("option", { value: "assistant" }, "assistant", -1)
                  ])], 512), [
                    [ge, n.injectRole]
                  ])
                ]),
                u("label", sm, [
                  c[110] || (c[110] = u("span", { class: "mtts-label" }, "注入模板", -1)),
                  Z.value ? U((V(), k("textarea", {
                    key: 0,
                    "onUpdate:modelValue": c[33] || (c[33] = (d) => n.indexTtsInjectTemplate = d),
                    class: "text_pole mtts-inject-template",
                    rows: "12"
                  }, null, 512)), [
                    [ne, n.indexTtsInjectTemplate]
                  ]) : O.value ? U((V(), k("textarea", {
                    key: 1,
                    "onUpdate:modelValue": c[34] || (c[34] = (d) => n.fishAudioInjectTemplate = d),
                    class: "text_pole mtts-inject-template",
                    rows: "18"
                  }, null, 512)), [
                    [ne, n.fishAudioInjectTemplate]
                  ]) : U((V(), k("textarea", {
                    key: 2,
                    "onUpdate:modelValue": c[35] || (c[35] = (d) => n.injectTemplate = d),
                    class: "text_pole mtts-inject-template",
                    rows: "5"
                  }, null, 512)), [
                    [ne, n.injectTemplate]
                  ])
                ])
              ])
            ]),
            u("details", im, [
              c[116] || (c[116] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                lt(" 生成与缓存 ")
              ], -1)),
              u("div", om, [
                u("label", rm, [
                  c[113] || (c[113] = u("span", { class: "mtts-label" }, "预取", -1)),
                  U(u("select", {
                    "onUpdate:modelValue": c[36] || (c[36] = (d) => n.prefetchMode = d),
                    class: "text_pole"
                  }, [...c[112] || (c[112] = [
                    u("option", { value: "manual" }, "只在点击时生成", -1),
                    u("option", { value: "auto_all" }, "自动预取全部", -1),
                    u("option", { value: "auto_first_n" }, "自动预取前 N 句", -1)
                  ])], 512), [
                    [ge, n.prefetchMode]
                  ])
                ]),
                n.prefetchMode !== "manual" ? (V(), k("div", am, [
                  n.prefetchMode === "auto_first_n" ? (V(), k("label", lm, [
                    c[114] || (c[114] = u("span", { class: "mtts-label" }, "前 N 句", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": c[37] || (c[37] = (d) => n.prefetchFirstCount = d),
                      class: "text_pole",
                      type: "number",
                      min: "1",
                      max: "10"
                    }, null, 512), [
                      [
                        ne,
                        n.prefetchFirstCount,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])) : je("", !0),
                  u("label", cm, [
                    c[115] || (c[115] = u("span", { class: "mtts-label" }, "并发", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": c[38] || (c[38] = (d) => n.maxConcurrency = d),
                      class: "text_pole",
                      type: "number",
                      min: "1",
                      max: "10"
                    }, null, 512), [
                      [
                        ne,
                        n.maxConcurrency,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ])) : je("", !0),
                u("p", um, " 缓存 " + z(p.value) + " 条 / " + z(Vt.value) + "，上限 100 条或 50MB。 ", 1),
                u("div", fm, [
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: o.value,
                    onClick: Q
                  }, " 刷新缓存 ", 8, dm),
                  u("button", {
                    class: "mtts-btn mtts-btn-danger",
                    type: "button",
                    disabled: o.value,
                    onClick: ie
                  }, " 清空缓存 ", 8, pm)
                ])
              ])
            ]),
            u("details", mm, [
              c[123] || (c[123] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                lt(" 高级设置 ")
              ], -1)),
              u("div", hm, [
                L.value ? (V(), k(X, { key: 0 }, [
                  u("label", gm, [
                    c[117] || (c[117] = u("span", { class: "mtts-label" }, "模型", -1)),
                    U(u("select", {
                      "onUpdate:modelValue": c[39] || (c[39] = (d) => n.model = d),
                      class: "text_pole"
                    }, [
                      (V(!0), k(X, null, pe(at(Tr), (d) => (V(), k("option", {
                        key: d,
                        value: d
                      }, z(d), 9, _m))), 128))
                    ], 512), [
                      [ge, n.model]
                    ])
                  ]),
                  u("label", vm, [
                    u("span", ym, "语速 " + z(n.speed.toFixed(2)), 1),
                    U(u("input", {
                      "onUpdate:modelValue": c[40] || (c[40] = (d) => n.speed = d),
                      type: "range",
                      min: "0.5",
                      max: "2",
                      step: "0.05"
                    }, null, 512), [
                      [
                        ne,
                        n.speed,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  u("label", bm, [
                    u("span", xm, "音量 " + z(n.vol.toFixed(2)), 1),
                    U(u("input", {
                      "onUpdate:modelValue": c[41] || (c[41] = (d) => n.vol = d),
                      type: "range",
                      min: "0",
                      max: "10",
                      step: "0.1"
                    }, null, 512), [
                      [
                        ne,
                        n.vol,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : $.value ? (V(), k(X, { key: 1 }, [
                  u("label", Tm, [
                    u("span", Sm, "语速 " + z(n.speed.toFixed(2)), 1),
                    U(u("input", {
                      "onUpdate:modelValue": c[42] || (c[42] = (d) => n.speed = d),
                      type: "range",
                      min: "0.5",
                      max: "2",
                      step: "0.05"
                    }, null, 512), [
                      [
                        ne,
                        n.speed,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  u("label", wm, [
                    c[118] || (c[118] = u("span", { class: "mtts-label" }, "鉴权 Token", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": c[43] || (c[43] = (d) => n.localGsviAuthToken = d),
                      class: "text_pole",
                      type: "password",
                      autocomplete: "off"
                    }, null, 512), [
                      [ne, n.localGsviAuthToken]
                    ])
                  ]),
                  u("div", Em, [
                    u("label", Am, [
                      c[119] || (c[119] = u("span", { class: "mtts-label" }, "文本语言", -1)),
                      U(u("select", {
                        "onUpdate:modelValue": c[44] || (c[44] = (d) => n.localGsviTextLang = d),
                        class: "text_pole"
                      }, [
                        (V(!0), k(X, null, pe(at(Tf), (d) => (V(), k("option", {
                          key: d,
                          value: d
                        }, z(d), 9, Im))), 128))
                      ], 512), [
                        [ge, n.localGsviTextLang]
                      ])
                    ]),
                    u("label", Mm, [
                      c[120] || (c[120] = u("span", { class: "mtts-label" }, "切分", -1)),
                      U(u("select", {
                        "onUpdate:modelValue": c[45] || (c[45] = (d) => n.localGsviTextSplitMethod = d),
                        class: "text_pole"
                      }, [
                        (V(!0), k(X, null, pe(at(Sf), (d) => (V(), k("option", {
                          key: d,
                          value: d
                        }, z(d), 9, Cm))), 128))
                      ], 512), [
                        [ge, n.localGsviTextSplitMethod]
                      ])
                    ])
                  ]),
                  u("label", Pm, [
                    u("span", Rm, "Batch " + z(n.localGsviBatchSize), 1),
                    U(u("input", {
                      "onUpdate:modelValue": c[46] || (c[46] = (d) => n.localGsviBatchSize = d),
                      type: "range",
                      min: "1",
                      max: "8",
                      step: "1"
                    }, null, 512), [
                      [
                        ne,
                        n.localGsviBatchSize,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : Z.value ? (V(), k(X, { key: 2 }, [
                  u("label", Vm, [
                    u("span", Nm, "时长系数 " + z(n.indexTtsDurationFactor.toFixed(2)), 1),
                    c[121] || (c[121] = u("p", { class: "mtts-hint" }, "快 ← 不变 → 慢，与 IndexTTS WebUI 相同", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": c[47] || (c[47] = (d) => n.indexTtsDurationFactor = d),
                      type: "range",
                      min: "0.5",
                      max: "2",
                      step: "0.01"
                    }, null, 512), [
                      [
                        ne,
                        n.indexTtsDurationFactor,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  u("label", Lm, [
                    u("span", km, "情感权重 " + z(n.indexTtsEmoWeight.toFixed(2)), 1),
                    U(u("input", {
                      "onUpdate:modelValue": c[48] || (c[48] = (d) => n.indexTtsEmoWeight = d),
                      type: "range",
                      min: "0",
                      max: "1",
                      step: "0.01"
                    }, null, 512), [
                      [
                        ne,
                        n.indexTtsEmoWeight,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : O.value ? (V(), k(X, { key: 3 }, [
                  u("label", Om, [
                    u("span", Fm, "语速 " + z(n.fishAudioSpeed.toFixed(2)), 1),
                    U(u("input", {
                      "onUpdate:modelValue": c[49] || (c[49] = (d) => n.fishAudioSpeed = d),
                      type: "range",
                      min: "0.5",
                      max: "2",
                      step: "0.05"
                    }, null, 512), [
                      [
                        ne,
                        n.fishAudioSpeed,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  u("label", $m, [
                    u("span", Dm, "音量 " + z(n.fishAudioVolume.toFixed(2)) + " dB", 1),
                    U(u("input", {
                      "onUpdate:modelValue": c[50] || (c[50] = (d) => n.fishAudioVolume = d),
                      class: "text_pole",
                      type: "number",
                      step: "0.1"
                    }, null, 512), [
                      [
                        ne,
                        n.fishAudioVolume,
                        void 0,
                        { number: !0 }
                      ]
                    ]),
                    c[122] || (c[122] = u("p", { class: "mtts-hint" }, "Fish Audio OpenAPI 未声明音量上下限，按 dB 数值发送。", -1))
                  ])
                ], 64)) : je("", !0),
                u("div", { class: "mtts-actions" }, [
                  u("button", {
                    class: "mtts-btn mtts-btn-danger",
                    type: "button",
                    onClick: te
                  }, " 恢复默认 ")
                ])
              ])
            ]),
            u("p", {
              class: Ye(["mtts-savebar", {
                "is-saved": g.value === "saved",
                "is-error": g.value === "error"
              }]),
              role: "status",
              "aria-live": "polite"
            }, [
              (V(), k("span", {
                key: g.value,
                class: "mtts-fade"
              }, z(q.value), 1))
            ], 2)
          ])
        ])
      ])
    ], 8, Cf));
  }
});
let cn = null, un = null, bn = null;
function Um() {
  return Xt(Hr().readRawSettings());
}
function jm() {
  return bn ??= ff(gf(Um)), bn;
}
function nn() {
  return un || (un = Oc(
    Hr(),
    {
      mount(e, t) {
        cn?.unmount(), cn = ql(Gm, {
          displayName: gc,
          version: _c,
          settings: t,
          onSettingsChange(n) {
            un?.updateSettings(n);
          }
        }), cn.mount(e);
      },
      unmount() {
        cn?.unmount(), cn = null;
      }
    },
    {
      stopPlayback: Wn,
      clearCache: vr,
      startRuntime: () => jm().start(),
      stopRuntime: () => bn?.stop(),
      syncInjection: () => bn?.syncInjection(),
      refreshDecorations: () => bn?.refreshDecorations()
    }
  ), un);
}
async function sn(e, t) {
  try {
    await t();
  } catch (n) {
    const s = n instanceof Error ? n.message : String(n);
    throw console.error(`${Ae} ${e} failed: ${s}`), n;
  }
}
async function Bm() {
  await sn("onInstall", () => nn().install());
}
async function Hm() {
  await sn("onActivate", () => nn().activate());
}
async function Km() {
  await sn("onEnable", () => nn().activate());
}
async function zm() {
  await sn("onDisable", () => nn().disable());
}
async function Wm() {
  await sn("onClean", () => nn().clean());
}
async function Jm() {
  await sn("onDelete", () => nn().delete());
}
export {
  Hm as onActivate,
  Wm as onClean,
  Jm as onDelete,
  zm as onDisable,
  Km as onEnable,
  Bm as onInstall
};
//# sourceMappingURL=index.js.map
