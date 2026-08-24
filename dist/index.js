// @__NO_SIDE_EFFECTS__
function oi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const fe = {}, Kt = [], Ft = () => {
}, wo = () => !1, ls = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), cs = (e) => e.startsWith("onUpdate:"), ze = Object.assign, So = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, qr = Object.prototype.hasOwnProperty, le = (e, t) => qr.call(e, t), Z = Array.isArray, zt = (e) => Vn(e) === "[object Map]", nn = (e) => Vn(e) === "[object Set]", Ai = (e) => Vn(e) === "[object Date]", ae = (e) => typeof e == "function", be = (e) => typeof e == "string", tt = (e) => typeof e == "symbol", de = (e) => e !== null && typeof e == "object", Eo = (e) => (de(e) || ae(e)) && ae(e.then) && ae(e.catch), Ao = Object.prototype.toString, Vn = (e) => Ao.call(e), ea = (e) => Vn(e).slice(8, -1), Io = (e) => Vn(e) === "[object Object]", ri = (e) => be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, hn = /* @__PURE__ */ oi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), us = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ta = /-\w/g, Be = us(
  (e) => e.replace(ta, (t) => t.slice(1).toUpperCase())
), na = /\B([A-Z])/g, Ut = us(
  (e) => e.replace(na, "-$1").toLowerCase()
), Mo = us((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ts = us(
  (e) => e ? `on${Mo(e)}` : ""
), qe = (e, t) => !Object.is(e, t), zn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Co = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, fs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ii;
const ds = () => Ii || (Ii = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ai(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = be(s) ? ra(s) : ai(s);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (be(e) || de(e))
    return e;
}
const sa = /;(?![^(]*\))/g, ia = /:([^]+)/, oa = /\/\*[^]*?\*\//g;
function ra(e) {
  const t = {};
  return e.replace(oa, "").split(sa).forEach((n) => {
    if (n) {
      const s = n.split(ia);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ye(e) {
  let t = "";
  if (be(e))
    t = e;
  else if (Z(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ye(e[n]);
      s && (t += s + " ");
    }
  else if (de(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const aa = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", la = /* @__PURE__ */ oi(aa);
function Po(e) {
  return !!e || e === "";
}
function ca(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = sn(e[s], t[s]);
  return n;
}
function sn(e, t) {
  if (e === t) return !0;
  let n = Ai(e), s = Ai(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = tt(e), s = tt(t), n || s)
    return e === t;
  if (n = Z(e), s = Z(t), n || s)
    return n && s ? ca(e, t) : !1;
  if (n = de(e), s = de(t), n || s) {
    if (!n || !s)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const r in e) {
      const a = e.hasOwnProperty(r), l = t.hasOwnProperty(r);
      if (a && !l || !a && l || !sn(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function li(e, t) {
  return e.findIndex((n) => sn(n, t));
}
const Ro = (e) => !!(e && e.__v_isRef === !0), W = (e) => be(e) ? e : e == null ? "" : Z(e) || de(e) && (e.toString === Ao || !ae(e.toString)) ? Ro(e) ? W(e.value) : JSON.stringify(e, No, 2) : String(e), No = (e, t) => Ro(t) ? No(e, t.value) : zt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], o) => (n[ws(s, o) + " =>"] = i, n),
    {}
  )
} : nn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ws(n))
} : tt(t) ? ws(t) : de(t) && !Z(t) && !Io(t) ? String(t) : t, ws = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    tt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Te;
class ua {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Te && (Te.active ? (this.parent = Te, this.index = (Te.scopes || (Te.scopes = [])).push(
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
      const n = Te;
      try {
        return Te = this, t();
      } finally {
        Te = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Te, Te = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Te === this)
        Te = this.prevScope;
      else {
        let t = Te;
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
function fa() {
  return Te;
}
let ce;
const Ss = /* @__PURE__ */ new WeakSet();
class Vo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Te && (Te.active ? Te.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ss.has(this) && (Ss.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ko(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Mi(this), Oo(this);
    const t = ce, n = He;
    ce = this, He = !0;
    try {
      return this.fn();
    } finally {
      Fo(this), ce = t, He = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        fi(t);
      this.deps = this.depsTail = void 0, Mi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ss.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Gs(this) && this.run();
  }
  get dirty() {
    return Gs(this);
  }
}
let Lo = 0, gn, _n;
function ko(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = _n, _n = e;
    return;
  }
  e.next = gn, gn = e;
}
function ci() {
  Lo++;
}
function ui() {
  if (--Lo > 0)
    return;
  if (_n) {
    let t = _n;
    for (_n = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; gn; ) {
    let t = gn;
    for (gn = void 0; t; ) {
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
function Oo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Fo(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), fi(s), da(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Gs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Do(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Do(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wn) || (e.globalVersion = wn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Gs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ce, s = He;
  ce = e, He = !0;
  try {
    Oo(e);
    const i = e.fn(e._value);
    (t.version === 0 || qe(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ce = n, He = s, Fo(e), e.flags &= -3;
  }
}
function fi(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      fi(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function da(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let He = !0;
const $o = [];
function At() {
  $o.push(He), He = !1;
}
function It() {
  const e = $o.pop();
  He = e === void 0 ? !0 : e;
}
function Mi(e) {
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
let wn = 0;
class pa {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class di {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ce || !He || ce === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ce)
      n = this.activeLink = new pa(ce, this), ce.deps ? (n.prevDep = ce.depsTail, ce.depsTail.nextDep = n, ce.depsTail = n) : ce.deps = ce.depsTail = n, Go(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ce.depsTail, n.nextDep = void 0, ce.depsTail.nextDep = n, ce.depsTail = n, ce.deps === n && (ce.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, wn++, this.notify(t);
  }
  notify(t) {
    ci();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ui();
    }
  }
}
function Go(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Go(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Us = /* @__PURE__ */ new WeakMap(), Dt = /* @__PURE__ */ Symbol(
  ""
), js = /* @__PURE__ */ Symbol(
  ""
), Sn = /* @__PURE__ */ Symbol(
  ""
);
function Ee(e, t, n) {
  if (He && ce) {
    let s = Us.get(e);
    s || Us.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new di()), i.map = s, i.key = n), i.track();
  }
}
function ut(e, t, n, s, i, o) {
  const r = Us.get(e);
  if (!r) {
    wn++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (ci(), t === "clear")
    r.forEach(a);
  else {
    const l = Z(e), p = l && ri(n);
    if (l && n === "length") {
      const m = Number(s);
      r.forEach((g, E) => {
        (E === "length" || E === Sn || !tt(E) && E >= m) && a(g);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && a(r.get(n)), p && a(r.get(Sn)), t) {
        case "add":
          l ? p && a(r.get("length")) : (a(r.get(Dt)), zt(e) && a(r.get(js)));
          break;
        case "delete":
          l || (a(r.get(Dt)), zt(e) && a(r.get(js)));
          break;
        case "set":
          zt(e) && a(r.get(Dt));
          break;
      }
  }
  ui();
}
function Bt(e) {
  const t = /* @__PURE__ */ oe(e);
  return t === e ? t : (Ee(t, "iterate", Sn), /* @__PURE__ */ De(e) ? t : t.map(Ke));
}
function ps(e) {
  return Ee(e = /* @__PURE__ */ oe(e), "iterate", Sn), e;
}
function Ze(e, t) {
  return /* @__PURE__ */ mt(e) ? Qt(/* @__PURE__ */ $t(e) ? Ke(t) : t) : Ke(t);
}
const ma = {
  __proto__: null,
  [Symbol.iterator]() {
    return Es(this, Symbol.iterator, (e) => Ze(this, e));
  },
  concat(...e) {
    return Bt(this).concat(
      ...e.map((t) => Z(t) ? Bt(t) : t)
    );
  },
  entries() {
    return Es(this, "entries", (e) => (e[1] = Ze(this, e[1]), e));
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
      (n) => n.map((s) => Ze(this, s)),
      arguments
    );
  },
  find(e, t) {
    return st(
      this,
      "find",
      e,
      t,
      (n) => Ze(this, n),
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
      (n) => Ze(this, n),
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
    return As(this, "includes", e);
  },
  indexOf(...e) {
    return As(this, "indexOf", e);
  },
  join(e) {
    return Bt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return As(this, "lastIndexOf", e);
  },
  map(e, t) {
    return st(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ln(this, "pop");
  },
  push(...e) {
    return ln(this, "push", e);
  },
  reduce(e, ...t) {
    return Ci(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ci(this, "reduceRight", e, t);
  },
  shift() {
    return ln(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return st(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ln(this, "splice", e);
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
    return ln(this, "unshift", e);
  },
  values() {
    return Es(this, "values", (e) => Ze(this, e));
  }
};
function Es(e, t, n) {
  const s = ps(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ De(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const ha = Array.prototype;
function st(e, t, n, s, i, o) {
  const r = ps(e), a = r !== e && !/* @__PURE__ */ De(e), l = r[t];
  if (l !== ha[t]) {
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
function Ci(e, t, n, s) {
  const i = ps(e), o = i !== e && !/* @__PURE__ */ De(e);
  let r = n, a = !1;
  i !== e && (o ? (a = s.length === 0, r = function(p, m, g) {
    return a && (a = !1, p = Ze(e, p)), n.call(this, p, Ze(e, m), g, e);
  }) : n.length > 3 && (r = function(p, m, g) {
    return n.call(this, p, m, g, e);
  }));
  const l = i[t](r, ...s);
  return a ? Ze(e, l) : l;
}
function As(e, t, n) {
  const s = /* @__PURE__ */ oe(e);
  Ee(s, "iterate", Sn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ hi(n[0]) ? (n[0] = /* @__PURE__ */ oe(n[0]), s[t](...n)) : i;
}
function ln(e, t, n = []) {
  At(), ci();
  const s = (/* @__PURE__ */ oe(e))[t].apply(e, n);
  return ui(), It(), s;
}
const ga = /* @__PURE__ */ oi("__proto__,__v_isRef,__isVue"), Uo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(tt)
);
function _a(e) {
  tt(e) || (e = String(e));
  const t = /* @__PURE__ */ oe(this);
  return Ee(t, "has", e), t.hasOwnProperty(e);
}
class jo {
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
      return s === (i ? o ? Ia : zo : o ? Ko : Ho).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = Z(t);
    if (!i) {
      let l;
      if (r && (l = ma[n]))
        return l;
      if (n === "hasOwnProperty")
        return _a;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Me(t) ? t : s
    );
    if ((tt(n) ? Uo.has(n) : ga(n)) || (i || Ee(t, "get", n), o))
      return a;
    if (/* @__PURE__ */ Me(a)) {
      const l = r && ri(n) ? a : a.value;
      return i && de(l) ? /* @__PURE__ */ Hs(l) : l;
    }
    return de(a) ? i ? /* @__PURE__ */ Hs(a) : /* @__PURE__ */ vn(a) : a;
  }
}
class Bo extends jo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let o = t[n];
    const r = Z(t) && ri(n);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ mt(o);
      if (!/* @__PURE__ */ De(s) && !/* @__PURE__ */ mt(s) && (o = /* @__PURE__ */ oe(o), s = /* @__PURE__ */ oe(s)), !r && /* @__PURE__ */ Me(o) && !/* @__PURE__ */ Me(s))
        return p || (o.value = s), !0;
    }
    const a = r ? Number(n) < t.length : le(t, n), l = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Me(t) ? t : i
    );
    return t === /* @__PURE__ */ oe(i) && l && (a ? qe(s, o) && ut(t, "set", n, s) : ut(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = le(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && ut(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!tt(n) || !Uo.has(n)) && Ee(t, "has", n), s;
  }
  ownKeys(t) {
    return Ee(
      t,
      "iterate",
      Z(t) ? "length" : Dt
    ), Reflect.ownKeys(t);
  }
}
class va extends jo {
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
const ya = /* @__PURE__ */ new Bo(), ba = /* @__PURE__ */ new va(), xa = /* @__PURE__ */ new Bo(!0);
const Bs = (e) => e, kn = (e) => Reflect.getPrototypeOf(e);
function Ta(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, o = /* @__PURE__ */ oe(i), r = zt(o), a = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, p = i[e](...s), m = n ? Bs : t ? Qt : Ke;
    return !t && Ee(
      o,
      "iterate",
      l ? js : Dt
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
function On(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function wa(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ oe(o), a = /* @__PURE__ */ oe(i);
      e || (qe(i, a) && Ee(r, "get", i), Ee(r, "get", a));
      const { has: l } = kn(r), p = t ? Bs : e ? Qt : Ke;
      if (l.call(r, i))
        return p(o.get(i));
      if (l.call(r, a))
        return p(o.get(a));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ee(/* @__PURE__ */ oe(i), "iterate", Dt), i.size;
    },
    has(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ oe(o), a = /* @__PURE__ */ oe(i);
      return e || (qe(i, a) && Ee(r, "has", i), Ee(r, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const r = this, a = r.__v_raw, l = /* @__PURE__ */ oe(a), p = t ? Bs : e ? Qt : Ke;
      return !e && Ee(l, "iterate", Dt), a.forEach((m, g) => i.call(o, p(m), p(g), r));
    }
  };
  return ze(
    n,
    e ? {
      add: On("add"),
      set: On("set"),
      delete: On("delete"),
      clear: On("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ oe(this), r = kn(o), a = /* @__PURE__ */ oe(i), l = !t && !/* @__PURE__ */ De(i) && !/* @__PURE__ */ mt(i) ? a : i;
        return r.has.call(o, l) || qe(i, l) && r.has.call(o, i) || qe(a, l) && r.has.call(o, a) || (o.add(l), ut(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ De(o) && !/* @__PURE__ */ mt(o) && (o = /* @__PURE__ */ oe(o));
        const r = /* @__PURE__ */ oe(this), { has: a, get: l } = kn(r);
        let p = a.call(r, i);
        p || (i = /* @__PURE__ */ oe(i), p = a.call(r, i));
        const m = l.call(r, i);
        return r.set(i, o), p ? qe(o, m) && ut(r, "set", i, o) : ut(r, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ oe(this), { has: r, get: a } = kn(o);
        let l = r.call(o, i);
        l || (i = /* @__PURE__ */ oe(i), l = r.call(o, i)), a && a.call(o, i);
        const p = o.delete(i);
        return l && ut(o, "delete", i, void 0), p;
      },
      clear() {
        const i = /* @__PURE__ */ oe(this), o = i.size !== 0, r = i.clear();
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
    n[i] = Ta(i, e, t);
  }), n;
}
function pi(e, t) {
  const n = wa(e, t);
  return (s, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    le(n, i) && i in s ? n : s,
    i,
    o
  );
}
const Sa = {
  get: /* @__PURE__ */ pi(!1, !1)
}, Ea = {
  get: /* @__PURE__ */ pi(!1, !0)
}, Aa = {
  get: /* @__PURE__ */ pi(!0, !1)
};
const Ho = /* @__PURE__ */ new WeakMap(), Ko = /* @__PURE__ */ new WeakMap(), zo = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap();
function Ma(e) {
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
function vn(e) {
  return /* @__PURE__ */ mt(e) ? e : mi(
    e,
    !1,
    ya,
    Sa,
    Ho
  );
}
// @__NO_SIDE_EFFECTS__
function Ca(e) {
  return mi(
    e,
    !1,
    xa,
    Ea,
    Ko
  );
}
// @__NO_SIDE_EFFECTS__
function Hs(e) {
  return mi(
    e,
    !0,
    ba,
    Aa,
    zo
  );
}
function mi(e, t, n, s, i) {
  if (!de(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = Ma(ea(e));
  if (r === 0)
    return e;
  const a = new Proxy(
    e,
    r === 2 ? s : n
  );
  return i.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return /* @__PURE__ */ mt(e) ? /* @__PURE__ */ $t(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function hi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function oe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ oe(t) : e;
}
function Pa(e) {
  return !le(e, "__v_skip") && Object.isExtensible(e) && Co(e, "__v_skip", !0), e;
}
const Ke = (e) => de(e) ? /* @__PURE__ */ vn(e) : e, Qt = (e) => de(e) ? /* @__PURE__ */ Hs(e) : e;
// @__NO_SIDE_EFFECTS__
function Me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  return Ra(e, !1);
}
function Ra(e, t) {
  return /* @__PURE__ */ Me(e) ? e : new Na(e, t);
}
class Na {
  constructor(t, n) {
    this.dep = new di(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ oe(t), this._value = n ? t : Ke(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ De(t) || /* @__PURE__ */ mt(t);
    t = s ? t : /* @__PURE__ */ oe(t), qe(t, n) && (this._rawValue = t, this._value = s ? t : Ke(t), this.dep.trigger());
  }
}
function rt(e) {
  return /* @__PURE__ */ Me(e) ? e.value : e;
}
const Va = {
  get: (e, t, n) => t === "__v_raw" ? e : rt(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ Me(i) && !/* @__PURE__ */ Me(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Wo(e) {
  return /* @__PURE__ */ $t(e) ? e : new Proxy(e, Va);
}
class La {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new di(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ce !== this)
      return ko(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Do(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ka(e, t, n = !1) {
  let s, i;
  return ae(e) ? s = e : (s = e.get, i = e.set), new La(s, i, n);
}
const Fn = {}, Qn = /* @__PURE__ */ new WeakMap();
let kt;
function Oa(e, t = !1, n = kt) {
  if (n) {
    let s = Qn.get(n);
    s || Qn.set(n, s = []), s.push(e);
  }
}
function Fa(e, t, n = fe) {
  const { immediate: s, deep: i, once: o, scheduler: r, augmentJob: a, call: l } = n, p = (w) => i ? w : /* @__PURE__ */ De(w) || i === !1 || i === 0 ? ft(w, 1) : ft(w);
  let m, g, E, I, O = !1, F = !1;
  if (/* @__PURE__ */ Me(e) ? (g = () => e.value, O = /* @__PURE__ */ De(e)) : /* @__PURE__ */ $t(e) ? (g = () => p(e), O = !0) : Z(e) ? (F = !0, O = e.some((w) => /* @__PURE__ */ $t(w) || /* @__PURE__ */ De(w)), g = () => e.map((w) => {
    if (/* @__PURE__ */ Me(w))
      return w.value;
    if (/* @__PURE__ */ $t(w))
      return p(w);
    if (ae(w))
      return l ? l(w, 2) : w();
  })) : ae(e) ? t ? g = l ? () => l(e, 2) : e : g = () => {
    if (E) {
      At();
      try {
        E();
      } finally {
        It();
      }
    }
    const w = kt;
    kt = m;
    try {
      return l ? l(e, 3, [I]) : e(I);
    } finally {
      kt = w;
    }
  } : g = Ft, t && i) {
    const w = g, ne = i === !0 ? 1 / 0 : i;
    g = () => ft(w(), ne);
  }
  const j = fa(), G = () => {
    m.stop(), j && j.active && So(j.effects, m);
  };
  if (o && t) {
    const w = t;
    t = (...ne) => {
      const Ae = w(...ne);
      return G(), Ae;
    };
  }
  let P = F ? new Array(e.length).fill(Fn) : Fn;
  const B = (w) => {
    if (!(!(m.flags & 1) || !m.dirty && !w))
      if (t) {
        const ne = m.run();
        if (w || i || O || (F ? ne.some((Ae, pe) => qe(Ae, P[pe])) : qe(ne, P))) {
          E && E();
          const Ae = kt;
          kt = m;
          try {
            const pe = [
              ne,
              // pass undefined as the old value when it's changed for the first time
              P === Fn ? void 0 : F && P[0] === Fn ? [] : P,
              I
            ];
            P = ne, l ? l(t, 3, pe) : (
              // @ts-expect-error
              t(...pe)
            );
          } finally {
            kt = Ae;
          }
        }
      } else
        m.run();
  };
  return a && a(B), m = new Vo(g), m.scheduler = r ? () => r(B, !1) : B, I = (w) => Oa(w, !1, m), E = m.onStop = () => {
    const w = Qn.get(m);
    if (w) {
      if (l)
        l(w, 4);
      else
        for (const ne of w) ne();
      Qn.delete(m);
    }
  }, t ? s ? B(!0) : P = m.run() : r ? r(B.bind(null, !0), !0) : m.run(), G.pause = m.pause.bind(m), G.resume = m.resume.bind(m), G.stop = G, G;
}
function ft(e, t = 1 / 0, n) {
  if (t <= 0 || !de(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Me(e))
    ft(e.value, t, n);
  else if (Z(e))
    for (let s = 0; s < e.length; s++)
      ft(e[s], t, n);
  else if (nn(e) || zt(e))
    e.forEach((s) => {
      ft(s, t, n);
    });
  else if (Io(e)) {
    for (const s in e)
      ft(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ft(e[s], t, n);
  }
  return e;
}
function Ln(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    ms(i, t, n);
  }
}
function nt(e, t, n, s) {
  if (ae(e)) {
    const i = Ln(e, t, n, s);
    return i && Eo(i) && i.catch((o) => {
      ms(o, t, n);
    }), i;
  }
  if (Z(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(nt(e[o], t, n, s));
    return i;
  }
}
function ms(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || fe;
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
      At(), Ln(o, null, 10, [
        e,
        l,
        p
      ]), It();
      return;
    }
  }
  Da(e, n, i, s, r);
}
function Da(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ie = [];
let Xe = -1;
const Wt = [];
let bt = null, Ht = 0;
const Jo = /* @__PURE__ */ Promise.resolve();
let qn = null;
function Xo(e) {
  const t = qn || Jo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function $a(e) {
  let t = Xe + 1, n = Ie.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Ie[s], o = En(i);
    o < e || o === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function gi(e) {
  if (!(e.flags & 1)) {
    const t = En(e), n = Ie[Ie.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= En(n) ? Ie.push(e) : Ie.splice($a(t), 0, e), e.flags |= 1, Yo();
  }
}
function Yo() {
  qn || (qn = Jo.then(Qo));
}
function Ga(e) {
  if (!Z(e))
    bt && e.id === -1 ? bt.splice(Ht + 1, 0, e) : e.flags & 1 || (Wt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Wt.push(e[t]);
  Yo();
}
function Pi(e, t, n = Xe + 1) {
  for (; n < Ie.length; n++) {
    const s = Ie[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ie.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Zo(e) {
  if (Wt.length) {
    const t = [...new Set(Wt)].sort(
      (n, s) => En(n) - En(s)
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
const En = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qo(e) {
  try {
    for (Xe = 0; Xe < Ie.length; Xe++) {
      const t = Ie[Xe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ln(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Xe < Ie.length; Xe++) {
      const t = Ie[Xe];
      t && (t.flags &= -2);
    }
    Xe = -1, Ie.length = 0, Zo(), qn = null, (Ie.length || Wt.length) && Qo();
  }
}
let Fe = null, qo = null;
function es(e) {
  const t = Fe;
  return Fe = e, qo = e && e.type.__scopeId || null, t;
}
function Ua(e, t = Fe, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Fi(-1);
    const o = es(t), r = Gt.length;
    let a;
    try {
      a = e(...i);
    } finally {
      for (let l = Gt.length; l > r; l--) gr();
      es(o), s._d && Fi(1);
    }
    return a;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function U(e, t) {
  if (Fe === null)
    return e;
  const n = vs(Fe), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, a, l = fe] = t[i];
    o && (ae(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ft(r), s.push({
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
function Vt(e, t, n, s) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const a = i[r];
    o && (a.oldValue = o[r].value);
    let l = a.dir[s];
    l && (At(), nt(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), It());
  }
}
function ja(e, t, n = !1) {
  const s = Cl();
  if (s || Jt) {
    let i = Jt ? Jt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ae(t) ? t.call(s && s.proxy) : t;
  }
}
const Ba = /* @__PURE__ */ Symbol.for("v-scx"), Ha = () => ja(Ba);
function Ka(e, t, n) {
  return za(e, t, n);
}
function za(e, t, n = fe) {
  const { immediate: s, deep: i, flush: o, once: r } = n, a = ze({}, n), l = t && s || !t && o !== "post";
  let p;
  if (Mn) {
    if (o === "sync") {
      const I = Ha();
      p = I.__watcherHandles || (I.__watcherHandles = []);
    } else if (!l) {
      const I = () => {
      };
      return I.stop = Ft, I.resume = Ft, I.pause = Ft, I;
    }
  }
  const m = Mt;
  a.call = (I, O, F) => nt(I, m, O, F);
  let g = !1;
  o === "post" ? a.scheduler = (I) => {
    Pe(I, m && m.suspense);
  } : o !== "sync" && (g = !0, a.scheduler = (I, O) => {
    O ? I() : gi(I);
  }), a.augmentJob = (I) => {
    t && (I.flags |= 4), g && (I.flags |= 2, m && (I.id = m.uid, I.i = m));
  };
  const E = Fa(e, t, a);
  return Mn && (p ? p.push(E) : l && E()), E;
}
const Wa = /* @__PURE__ */ Symbol("_vte"), hs = (e) => e.__isTeleport, Is = /* @__PURE__ */ Symbol("_leaveCb");
function Ja(e) {
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
function er(e) {
  if (!tr(e))
    return hs(e.type) && e.children ? Ja(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ae(n.default))
      return n.default();
  }
}
function _i(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    _i(
      hs(n.type) && er(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Xa(e, t) {
  return ae(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ze({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ya(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ri(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ts = /* @__PURE__ */ new WeakMap();
function yn(e, t, n, s, i = !1) {
  if (Z(e)) {
    e.forEach(
      (F, j) => yn(
        F,
        t && (Z(t) ? t[j] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (bn(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && yn(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? vs(s.component) : s.el, r = i ? null : o, { i: a, r: l } = e, p = t && t.r, m = a.refs === fe ? a.refs = {} : a.refs, g = a.setupState, E = /* @__PURE__ */ oe(g), I = g === fe ? wo : (F) => Ri(m, F) ? !1 : le(E, F), O = (F, j) => !(j && Ri(m, j));
  if (p != null && p !== l) {
    if (Ni(t), be(p))
      m[p] = null, I(p) && (g[p] = null);
    else if (/* @__PURE__ */ Me(p)) {
      const F = t;
      O(p, F.k) && (p.value = null), F.k && (m[F.k] = null);
    }
  }
  if (ae(l))
    Ln(l, a, 12, [r, m]);
  else {
    const F = be(l), j = /* @__PURE__ */ Me(l);
    if (F || j) {
      const G = () => {
        if (e.f) {
          const P = F ? I(l) ? g[l] : m[l] : O() || !e.k ? l.value : m[e.k];
          if (i)
            Z(P) && So(P, o);
          else if (Z(P))
            P.includes(o) || P.push(o);
          else if (F)
            m[l] = [o], I(l) && (g[l] = m[l]);
          else {
            const B = [o];
            O(l, e.k) && (l.value = B), e.k && (m[e.k] = B);
          }
        } else F ? (m[l] = r, I(l) && (g[l] = r)) : j && (O(l, e.k) && (l.value = r), e.k && (m[e.k] = r));
      };
      if (r) {
        const P = () => {
          G(), ts.delete(e);
        };
        P.id = -1, ts.set(e, P), Pe(P, n);
      } else
        Ni(e), G();
    }
  }
}
function Ni(e) {
  const t = ts.get(e);
  t && (t.flags |= 8, ts.delete(e));
}
ds().requestIdleCallback;
ds().cancelIdleCallback;
const bn = (e) => !!e.type.__asyncLoader, tr = (e) => e.type.__isKeepAlive;
function Za(e, t, n = Mt, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...r) => {
      At();
      const a = bi(n), l = nt(t, n, e, r);
      return a(), It(), l;
    });
    return s ? i.unshift(o) : i.push(o), o;
  }
}
const nr = (e) => (t, n = Mt) => {
  (!Mn || e === "sp") && Za(e, (...s) => t(...s), n);
}, Qa = nr("m"), qa = nr("um"), el = /* @__PURE__ */ Symbol.for("v-ndc");
function me(e, t, n, s) {
  let i;
  const o = n, r = Z(e);
  if (r || be(e)) {
    const a = r && /* @__PURE__ */ $t(e);
    let l = !1, p = !1;
    a && (l = !/* @__PURE__ */ De(e), p = /* @__PURE__ */ mt(e), e = ps(e)), i = new Array(e.length);
    for (let m = 0, g = e.length; m < g; m++)
      i[m] = t(
        l ? p ? Qt(Ke(e[m])) : Ke(e[m]) : e[m],
        m,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (de(e))
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
const Ks = (e) => e ? br(e) ? vs(e) : Ks(e.parent) : null, xn = (
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
    $parent: (e) => Ks(e.parent),
    $root: (e) => Ks(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      gi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Xo.bind(e.proxy)),
    $watch: (e) => Ft
  })
), Ms = (e, t) => e !== fe && !e.__isScriptSetup && le(e, t), tl = {
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
        if (Ms(s, t))
          return r[t] = 1, s[t];
        if (le(o, t))
          return r[t] = 3, o[t];
        if (n !== fe && le(n, t))
          return r[t] = 4, n[t];
        r[t] = 0;
      }
    }
    const p = xn[t];
    let m, g;
    if (p)
      return t === "$attrs" && Ee(e.attrs, "get", ""), p(e);
    if (
      // css module (injected by vue-loader)
      (m = a.__cssModules) && (m = m[t])
    )
      return m;
    if (n !== fe && le(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      g = l.config.globalProperties, le(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: o } = e;
    return Ms(i, t) ? (i[t] = n, !0) : le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: o, type: r }
  }, a) {
    let l;
    return !!(n[a] || Ms(t, a) || le(o, a) || le(s, a) || le(xn, a) || le(i.config.globalProperties, a) || (l = r.__cssModules) && l[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : le(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function sr() {
  return {
    app: null,
    config: {
      isNativeTag: wo,
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
let nl = 0;
function sl(e, t) {
  return function(s, i = null) {
    ae(s) || (s = ze({}, s)), i != null && !de(i) && (i = null);
    const o = sr(), r = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const p = o.app = {
      _uid: nl++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: kl,
      get config() {
        return o.config;
      },
      set config(m) {
      },
      use(m, ...g) {
        return r.has(m) || (m && ae(m.install) ? (r.add(m), m.install(p, ...g)) : ae(m) && (r.add(m), m(p, ...g))), p;
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
          const I = p._ceVNode || dt(s, i);
          return I.appContext = o, E === !0 ? E = "svg" : E === !1 && (E = void 0), e(I, m, E), l = !0, p._container = m, m.__vue_app__ = p, vs(I.component);
        }
      },
      onUnmount(m) {
        a.push(m);
      },
      unmount() {
        l && (nt(
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
const il = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Be(t)}Modifiers`] || e[`${Ut(t)}Modifiers`];
function ol(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || fe;
  let i = n;
  const o = t.startsWith("update:"), r = o && il(s, t.slice(7));
  r && (r.trim && (i = n.map((m) => be(m) ? m.trim() : m)), r.number && (i = n.map(fs)));
  let a, l = s[a = Ts(t)] || // also try camelCase event handler (#2249)
  s[a = Ts(Be(t))];
  !l && o && (l = s[a = Ts(Ut(t))]), l && nt(
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
    e.emitted[a] = !0, nt(
      p,
      e,
      6,
      i
    );
  }
}
function rl(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {};
  return o ? (Z(o) ? o.forEach((a) => r[a] = null) : ze(r, o), de(e) && s.set(e, r), r) : (de(e) && s.set(e, null), null);
}
function gs(e, t) {
  return !e || !ls(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), le(e, t[0].toLowerCase() + t.slice(1)) || le(e, Ut(t)) || le(e, t));
}
function Vi(e) {
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
    setupState: I,
    ctx: O,
    inheritAttrs: F
  } = e, j = es(e);
  let G, P;
  try {
    if (n.shapeFlag & 4) {
      const w = i || s, ne = w;
      G = Qe(
        p.call(
          ne,
          w,
          m,
          g,
          I,
          E,
          O
        )
      ), P = a;
    } else {
      const w = t;
      G = Qe(
        w.length > 1 ? w(
          g,
          { attrs: a, slots: r, emit: l }
        ) : w(
          g,
          null
        )
      ), P = t.props ? a : al(a);
    }
  } catch (w) {
    Gt.length = 0, ms(w, e, 1), G = dt(ht);
  }
  let B = G;
  if (P && F !== !1) {
    const w = Object.keys(P), { shapeFlag: ne } = B;
    w.length && ne & 7 && (o && w.some(cs) && (P = ll(
      P,
      o
    )), B = qt(B, P, !1, !0));
  }
  if (n.dirs && (B = qt(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const w = hs(B.type) && er(B) || B;
    _i(w, n.transition);
  }
  return G = B, es(j), G;
}
const al = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ls(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ll = (e, t) => {
  const n = {};
  for (const s in e)
    (!cs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function cl(e, t, n) {
  const { props: s, children: i, component: o } = e, { props: r, children: a, patchFlag: l } = t, p = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return s ? Li(s, r, p) : !!r;
    if (l & 8) {
      const m = t.dynamicProps;
      for (let g = 0; g < m.length; g++) {
        const E = m[g];
        if (ir(r, s, E) && !gs(p, E))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : s === r ? !1 : s ? r ? Li(s, r, p) : !0 : !!r;
  return !1;
}
function Li(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (ir(t, e, o) && !gs(n, o))
      return !0;
  }
  return !1;
}
function ir(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && de(s) && de(i) ? !sn(s, i) : s !== i;
}
function ul({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const or = {}, rr = () => Object.create(or), ar = (e) => Object.getPrototypeOf(e) === or;
function fl(e, t, n, s = !1) {
  const i = {}, o = rr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), lr(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Ca(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function dl(e, t, n, s) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, a = /* @__PURE__ */ oe(i), [l] = e.propsOptions;
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
        if (gs(e.emitsOptions, E))
          continue;
        const I = t[E];
        if (l)
          if (le(o, E))
            I !== o[E] && (o[E] = I, p = !0);
          else {
            const O = Be(E);
            i[O] = zs(
              l,
              a,
              O,
              I,
              e,
              !1
            );
          }
        else
          I !== o[E] && (o[E] = I, p = !0);
      }
    }
  } else {
    lr(e, t, i, o) && (p = !0);
    let m;
    for (const g in a)
      (!t || // for camelCase
      !le(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = Ut(g)) === g || !le(t, m))) && (l ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[m] !== void 0) && (i[g] = zs(
        l,
        a,
        g,
        void 0,
        e,
        !0
      )) : delete i[g]);
    if (o !== a)
      for (const g in o)
        (!t || !le(t, g)) && (delete o[g], p = !0);
  }
  p && ut(e.attrs, "set", "");
}
function lr(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let r = !1, a;
  if (t)
    for (let l in t) {
      if (hn(l))
        continue;
      const p = t[l];
      let m;
      i && le(i, m = Be(l)) ? !o || !o.includes(m) ? n[m] = p : (a || (a = {}))[m] = p : gs(e.emitsOptions, l) || (!(l in s) || p !== s[l]) && (s[l] = p, r = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ oe(n), p = a || fe;
    for (let m = 0; m < o.length; m++) {
      const g = o[m];
      n[g] = zs(
        i,
        l,
        g,
        p[g],
        e,
        !le(p, g)
      );
    }
  }
  return r;
}
function zs(e, t, n, s, i, o) {
  const r = e[n];
  if (r != null) {
    const a = le(r, "default");
    if (a && s === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && ae(l)) {
        const { propsDefaults: p } = i;
        if (n in p)
          s = p[n];
        else {
          const m = bi(i);
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
function pl(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, a = [];
  if (!o)
    return de(e) && s.set(e, Kt), Kt;
  if (Z(o))
    for (let p = 0; p < o.length; p++) {
      const m = Be(o[p]);
      ki(m) && (r[m] = fe);
    }
  else if (o)
    for (const p in o) {
      const m = Be(p);
      if (ki(m)) {
        const g = o[p], E = r[m] = Z(g) || ae(g) ? { type: g } : ze({}, g), I = E.type;
        let O = !1, F = !0;
        if (Z(I))
          for (let j = 0; j < I.length; ++j) {
            const G = I[j], P = ae(G) && G.name;
            if (P === "Boolean") {
              O = !0;
              break;
            } else P === "String" && (F = !1);
          }
        else
          O = ae(I) && I.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = O, E[
          1
          /* shouldCastTrue */
        ] = F, (O || le(E, "default")) && a.push(m);
      }
    }
  const l = [r, a];
  return de(e) && s.set(e, l), l;
}
function ki(e) {
  return e[0] !== "$" && !hn(e);
}
const vi = (e) => e === "_" || e === "_ctx" || e === "$stable", yi = (e) => Z(e) ? e.map(Qe) : [Qe(e)], ml = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ua((...i) => yi(t(...i)), n);
  return s._c = !1, s;
}, cr = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (vi(i)) continue;
    const o = e[i];
    if (ae(o))
      t[i] = ml(i, o, s);
    else if (o != null) {
      const r = yi(o);
      t[i] = () => r;
    }
  }
}, ur = (e, t) => {
  const n = yi(t);
  e.slots.default = () => n;
}, fr = (e, t, n) => {
  for (const s in t)
    (n || !vi(s)) && (e[s] = t[s]);
}, hl = (e, t, n) => {
  const s = e.slots = rr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (fr(s, t, n), n && Co(s, "_", i, !0)) : cr(t, s);
  } else t && ur(e, t);
}, gl = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let o = !0, r = fe;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : fr(i, t, n) : (o = !t.$stable, cr(t, i)), r = t;
  } else t && (ur(e, t), r = { default: 1 });
  if (o)
    for (const a in i)
      !vi(a) && r[a] == null && delete i[a];
}, Pe = xl;
function _l(e) {
  return vl(e);
}
function vl(e, t) {
  const n = ds();
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
    setScopeId: I = Ft,
    insertStaticContent: O
  } = e, F = (f, h, v, T = null, y = null, b = null, M = void 0, A = null, S = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !cn(f, h) && (T = ve(f), q(f, y, b, !0), f = null), h.patchFlag === -2 && (S = !1, h.dynamicChildren = null);
    const { type: x, ref: H, shapeFlag: V } = h;
    switch (x) {
      case _s:
        j(f, h, v, T);
        break;
      case ht:
        G(f, h, v, T);
        break;
      case Ps:
        f == null && P(h, v, T, M);
        break;
      case Y:
        Ge(
          f,
          h,
          v,
          T,
          y,
          b,
          M,
          A,
          S
        );
        break;
      default:
        V & 1 ? ne(
          f,
          h,
          v,
          T,
          y,
          b,
          M,
          A,
          S
        ) : V & 6 ? an(
          f,
          h,
          v,
          T,
          y,
          b,
          M,
          A,
          S
        ) : (V & 64 || V & 128) && x.process(
          f,
          h,
          v,
          T,
          y,
          b,
          M,
          A,
          S,
          Se
        );
    }
    H != null && y ? yn(H, f && f.ref, b, h || f, !h) : H == null && f && f.ref != null && yn(f.ref, null, b, f, !0);
  }, j = (f, h, v, T) => {
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
  }, G = (f, h, v, T) => {
    f == null ? s(
      h.el = l(h.children || ""),
      v,
      T
    ) : h.el = f.el;
  }, P = (f, h, v, T) => {
    [f.el, f.anchor] = O(
      f.children,
      h,
      v,
      T,
      f.el,
      f.anchor
    );
  }, B = ({ el: f, anchor: h }, v, T) => {
    let y;
    for (; f && f !== h; )
      y = E(f), s(f, v, T), f = y;
    s(h, v, T);
  }, w = ({ el: f, anchor: h }) => {
    let v;
    for (; f && f !== h; )
      v = E(f), i(f), f = v;
    i(h);
  }, ne = (f, h, v, T, y, b, M, A, S) => {
    if (h.type === "svg" ? M = "svg" : h.type === "math" && (M = "mathml"), f == null)
      Ae(
        h,
        v,
        T,
        y,
        b,
        M,
        A,
        S
      );
    else {
      const x = f.el && f.el._isVueCE ? f.el : null;
      try {
        x && x._beginPatch(), Ct(
          f,
          h,
          y,
          b,
          M,
          A,
          S
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, Ae = (f, h, v, T, y, b, M, A) => {
    let S, x;
    const { props: H, shapeFlag: V, transition: $, dirs: K } = f;
    if (S = f.el = r(
      f.type,
      b,
      H && H.is,
      H
    ), V & 8 ? m(S, f.children) : V & 16 && $e(
      f.children,
      S,
      null,
      T,
      y,
      Cs(f, b),
      M,
      A
    ), K && Vt(f, null, T, "created"), pe(S, f, f.scopeId, M, T), H) {
      for (const re in H)
        re !== "value" && !hn(re) && o(S, re, null, H[re], b, T);
      "value" in H && o(S, "value", null, H.value, b), (x = H.onVnodeBeforeMount) && Je(x, T, f);
    }
    K && Vt(f, null, T, "beforeMount");
    const Q = yl(y, $);
    Q && $.beforeEnter(S), s(S, h, v), ((x = H && H.onVnodeMounted) || Q || K) && Pe(() => {
      x && Je(x, T, f), Q && $.enter(S), K && Vt(f, null, T, "mounted");
    }, y);
  }, pe = (f, h, v, T, y) => {
    if (v && I(f, v), T)
      for (let b = 0; b < T.length; b++)
        I(f, T[b]);
    if (y) {
      let b = y.subTree;
      if (h === b || hr(b.type) && (b.ssContent === h || b.ssFallback === h)) {
        const M = y.vnode;
        pe(
          f,
          M,
          M.scopeId,
          M.slotScopeIds,
          y.parent
        );
      }
    }
  }, $e = (f, h, v, T, y, b, M, A, S = 0) => {
    for (let x = S; x < f.length; x++) {
      const H = f[x] = A ? ct(f[x]) : Qe(f[x]);
      F(
        null,
        H,
        h,
        v,
        T,
        y,
        b,
        M,
        A
      );
    }
  }, Ct = (f, h, v, T, y, b, M) => {
    const A = h.el = f.el;
    let { patchFlag: S, dynamicChildren: x, dirs: H } = h;
    S |= f.patchFlag & 16;
    const V = f.props || fe, $ = h.props || fe;
    let K;
    if (v && Lt(v, !1), (K = $.onVnodeBeforeUpdate) && Je(K, v, h, f), H && Vt(h, f, v, "beforeUpdate"), v && Lt(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    x && (!f.dynamicChildren || f.dynamicChildren.length !== x.length) && (S = 0, M = !1, x = null), (V.innerHTML && $.innerHTML == null || V.textContent && $.textContent == null) && m(A, ""), x ? Pt(
      f.dynamicChildren,
      x,
      A,
      v,
      T,
      Cs(h, y),
      b
    ) : M || Nt(
      f,
      h,
      A,
      null,
      v,
      T,
      Cs(h, y),
      b,
      !1
    ), S > 0) {
      if (S & 16)
        We(A, V, $, v, y);
      else if (S & 2 && V.class !== $.class && o(A, "class", null, $.class, y), S & 4 && o(A, "style", V.style, $.style, y), S & 8) {
        const Q = h.dynamicProps;
        for (let re = 0; re < Q.length; re++) {
          const se = Q[re], he = V[se], xe = $[se];
          (xe !== he || se === "value") && o(A, se, he, xe, y, v);
        }
      }
      S & 1 && f.children !== h.children && m(A, h.children);
    } else !M && x == null && We(A, V, $, v, y);
    ((K = $.onVnodeUpdated) || H) && Pe(() => {
      K && Je(K, v, h, f), H && Vt(h, f, v, "updated");
    }, T);
  }, Pt = (f, h, v, T, y, b, M) => {
    for (let A = 0; A < h.length; A++) {
      const S = f[A], x = h[A], H = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === Y || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !cn(S, x) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? g(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      F(
        S,
        x,
        H,
        null,
        T,
        y,
        b,
        M,
        !0
      );
    }
  }, We = (f, h, v, T, y) => {
    if (h !== v) {
      if (h !== fe)
        for (const b in h)
          !hn(b) && !(b in v) && o(
            f,
            b,
            h[b],
            null,
            y,
            T
          );
      for (const b in v) {
        if (hn(b)) continue;
        const M = v[b], A = h[b];
        M !== A && b !== "value" && o(f, b, A, M, y, T);
      }
      "value" in v && o(f, "value", h.value, v.value, y);
    }
  }, Ge = (f, h, v, T, y, b, M, A, S) => {
    const x = h.el = f ? f.el : a(""), H = h.anchor = f ? f.anchor : a("");
    let { patchFlag: V, dynamicChildren: $, slotScopeIds: K } = h;
    K && (A = A ? A.concat(K) : K), f == null ? (s(x, v, T), s(H, v, T), $e(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      v,
      H,
      y,
      b,
      M,
      A,
      S
    )) : V > 0 && V & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === $.length ? (Pt(
      f.dynamicChildren,
      $,
      v,
      y,
      b,
      M,
      A
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || y && h === y.subTree) && dr(
      f,
      h,
      !0
      /* shallow */
    )) : Nt(
      f,
      h,
      v,
      H,
      y,
      b,
      M,
      A,
      S
    );
  }, an = (f, h, v, T, y, b, M, A, S) => {
    h.slotScopeIds = A, f == null ? h.shapeFlag & 512 ? y.ctx.activate(
      h,
      v,
      T,
      M,
      S
    ) : Rt(
      h,
      v,
      T,
      y,
      b,
      M,
      S
    ) : jt(f, h, S);
  }, Rt = (f, h, v, T, y, b, M) => {
    const A = f.component = Ml(
      f,
      T,
      y
    );
    if (tr(f) && (A.ctx.renderer = Se), Pl(A, !1, M), A.asyncDep) {
      if (y && y.registerDep(A, vt, M), !f.el) {
        const S = A.subTree = dt(ht);
        G(null, S, h, v), f.placeholder = S.el;
      }
    } else
      vt(
        A,
        f,
        h,
        v,
        y,
        b,
        M
      );
  }, jt = (f, h, v) => {
    const T = h.component = f.component;
    if (cl(f, h, v))
      if (T.asyncDep && !T.asyncResolved) {
        yt(T, h, v);
        return;
      } else
        T.next = h, T.update();
    else
      h.el = f.el, T.vnode = h;
  }, vt = (f, h, v, T, y, b, M) => {
    const A = () => {
      if (f.isMounted) {
        let { next: V, bu: $, u: K, parent: Q, vnode: re } = f;
        {
          const _ = pr(f);
          if (_) {
            V && (V.el = re.el, yt(f, V, M)), _.asyncDep.then(() => {
              Pe(() => {
                f.isUnmounted || x();
              }, y);
            });
            return;
          }
        }
        let se = V, he;
        Lt(f, !1), V ? (V.el = re.el, yt(f, V, M)) : V = re, $ && zn($), (he = V.props && V.props.onVnodeBeforeUpdate) && Je(he, Q, V, re), Lt(f, !0);
        const xe = Vi(f), ke = f.subTree;
        f.subTree = xe, F(
          ke,
          xe,
          // parent may have changed if it's in a teleport
          g(ke.el),
          // anchor may have changed if it's in a fragment
          ve(ke),
          f,
          y,
          b
        ), V.el = xe.el, se === null && ul(f, xe.el), K && Pe(K, y), (he = V.props && V.props.onVnodeUpdated) && Pe(
          () => Je(he, Q, V, re),
          y
        );
      } else {
        let V;
        const { el: $, props: K } = h, { bm: Q, m: re, parent: se, root: he, type: xe } = f, ke = bn(h);
        Lt(f, !1), Q && zn(Q), !ke && (V = K && K.onVnodeBeforeMount) && Je(V, se, h), Lt(f, !0);
        {
          he.ce && he.ce._hasShadowRoot() && he.ce._injectChildStyle(
            xe,
            f.parent ? f.parent.type : void 0
          );
          const _ = f.subTree = Vi(f);
          F(
            null,
            _,
            v,
            T,
            f,
            y,
            b
          ), h.el = _.el;
        }
        if (re && Pe(re, y), !ke && (V = K && K.onVnodeMounted)) {
          const _ = h;
          Pe(
            () => Je(V, se, _),
            y
          );
        }
        (h.shapeFlag & 256 || se && bn(se.vnode) && se.vnode.shapeFlag & 256) && f.a && Pe(f.a, y), f.isMounted = !0, h = v = T = null;
      }
    };
    f.scope.on();
    const S = f.effect = new Vo(A);
    f.scope.off();
    const x = f.update = S.run.bind(S), H = f.job = S.runIfDirty.bind(S);
    H.i = f, H.id = f.uid, S.scheduler = () => gi(H), Lt(f, !0), x();
  }, yt = (f, h, v) => {
    h.component = f;
    const T = f.vnode.props;
    f.vnode = h, f.next = null, dl(f, h.props, T, v), gl(f, h.children, v), At(), Pi(f), It();
  }, Nt = (f, h, v, T, y, b, M, A, S = !1) => {
    const x = f && f.children, H = f ? f.shapeFlag : 0, V = h.children, { patchFlag: $, shapeFlag: K } = h;
    if ($ > 0) {
      if ($ & 128) {
        D(
          x,
          V,
          v,
          T,
          y,
          b,
          M,
          A,
          S
        );
        return;
      } else if ($ & 256) {
        R(
          x,
          V,
          v,
          T,
          y,
          b,
          M,
          A,
          S
        );
        return;
      }
    }
    K & 8 ? (H & 16 && te(x, y, b), V !== x && m(v, V)) : H & 16 ? K & 16 ? D(
      x,
      V,
      v,
      T,
      y,
      b,
      M,
      A,
      S
    ) : te(x, y, b, !0) : (H & 8 && m(v, ""), K & 16 && $e(
      V,
      v,
      T,
      y,
      b,
      M,
      A,
      S
    ));
  }, R = (f, h, v, T, y, b, M, A, S) => {
    f = f || Kt, h = h || Kt;
    const x = f.length, H = h.length, V = Math.min(x, H);
    let $;
    for ($ = 0; $ < V; $++) {
      const K = h[$] = S ? ct(h[$]) : Qe(h[$]);
      F(
        f[$],
        K,
        v,
        null,
        y,
        b,
        M,
        A,
        S
      );
    }
    x > H ? te(
      f,
      y,
      b,
      !0,
      !1,
      V
    ) : $e(
      h,
      v,
      T,
      y,
      b,
      M,
      A,
      S,
      V
    );
  }, D = (f, h, v, T, y, b, M, A, S) => {
    let x = 0;
    const H = h.length;
    let V = f.length - 1, $ = H - 1;
    for (; x <= V && x <= $; ) {
      const K = f[x], Q = h[x] = S ? ct(h[x]) : Qe(h[x]);
      if (cn(K, Q))
        F(
          K,
          Q,
          v,
          null,
          y,
          b,
          M,
          A,
          S
        );
      else
        break;
      x++;
    }
    for (; x <= V && x <= $; ) {
      const K = f[V], Q = h[$] = S ? ct(h[$]) : Qe(h[$]);
      if (cn(K, Q))
        F(
          K,
          Q,
          v,
          null,
          y,
          b,
          M,
          A,
          S
        );
      else
        break;
      V--, $--;
    }
    if (x > V) {
      if (x <= $) {
        const K = $ + 1, Q = K < H ? h[K].el : T;
        for (; x <= $; )
          F(
            null,
            h[x] = S ? ct(h[x]) : Qe(h[x]),
            v,
            Q,
            y,
            b,
            M,
            A,
            S
          ), x++;
      }
    } else if (x > $)
      for (; x <= V; )
        q(f[x], y, b, !0), x++;
    else {
      const K = x, Q = x, re = /* @__PURE__ */ new Map();
      for (x = Q; x <= $; x++) {
        const J = h[x] = S ? ct(h[x]) : Qe(h[x]);
        J.key != null && re.set(J.key, x);
      }
      let se, he = 0;
      const xe = $ - Q + 1;
      let ke = !1, _ = 0;
      const c = new Array(xe);
      for (x = 0; x < xe; x++) c[x] = 0;
      for (x = K; x <= V; x++) {
        const J = f[x];
        if (he >= xe) {
          q(J, y, b, !0);
          continue;
        }
        let N;
        if (J.key != null)
          N = re.get(J.key);
        else
          for (se = Q; se <= $; se++)
            if (c[se - Q] === 0 && cn(J, h[se])) {
              N = se;
              break;
            }
        N === void 0 ? q(J, y, b, !0) : (c[N - Q] = x + 1, N >= _ ? _ = N : ke = !0, F(
          J,
          h[N],
          v,
          null,
          y,
          b,
          M,
          A,
          S
        ), he++);
      }
      const d = ke ? bl(c) : Kt;
      for (se = d.length - 1, x = xe - 1; x >= 0; x--) {
        const J = Q + x, N = h[J], Si = h[J + 1], Ei = J + 1 < H ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Si.el || mr(Si)
        ) : T;
        c[x] === 0 ? F(
          null,
          N,
          v,
          Ei,
          y,
          b,
          M,
          A,
          S
        ) : ke && (se < 0 || x !== d[se] ? X(N, v, Ei, 2) : se--);
      }
    }
  }, X = (f, h, v, T, y = null) => {
    const { el: b, type: M, transition: A, children: S, shapeFlag: x } = f;
    if (x & 6) {
      X(f.component.subTree, h, v, T);
      return;
    }
    if (x & 128) {
      f.suspense.move(h, v, T);
      return;
    }
    if (x & 64) {
      M.move(f, h, v, Se);
      return;
    }
    if (M === Y) {
      s(b, h, v);
      for (let V = 0; V < S.length; V++)
        X(S[V], h, v, T);
      s(f.anchor, h, v);
      return;
    }
    if (M === Ps) {
      B(f, h, v);
      return;
    }
    if (T !== 2 && x & 1 && A)
      if (T === 0)
        A.persisted && !b[Is] ? s(b, h, v) : (A.beforeEnter(b), s(b, h, v), Pe(() => A.enter(b), y));
      else {
        const { leave: V, delayLeave: $, afterLeave: K } = A, Q = () => {
          f.ctx.isUnmounted ? i(b) : s(b, h, v);
        }, re = () => {
          const se = b._isLeaving || !!b[Is];
          b._isLeaving && b[Is](
            !0
            /* cancelled */
          ), A.persisted && !se ? Q() : V(b, () => {
            Q(), K && K();
          });
        };
        $ ? $(b, Q, re) : re();
      }
    else
      s(b, h, v);
  }, q = (f, h, v, T = !1, y = !1) => {
    const {
      type: b,
      props: M,
      ref: A,
      children: S,
      dynamicChildren: x,
      shapeFlag: H,
      patchFlag: V,
      dirs: $,
      cacheIndex: K,
      memo: Q
    } = f;
    if (V === -2 && (y = !1), A != null && (At(), yn(A, null, v, f, !0), It()), K != null && (h.renderCache[K] = void 0), H & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const re = H & 1 && $, se = !bn(f);
    let he;
    if (se && (he = M && M.onVnodeBeforeUnmount) && Je(he, h, f), H & 6)
      Ue(f.component, v, T);
    else {
      if (H & 128) {
        f.suspense.unmount(v, T);
        return;
      }
      re && Vt(f, null, h, "beforeUnmount"), H & 64 ? f.type.remove(
        f,
        h,
        v,
        Se,
        T
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Y || V > 0 && V & 64) ? te(
        x,
        h,
        v,
        !1,
        !0
      ) : (b === Y && V & 384 || !y && H & 16) && te(S, h, v), T && z(f);
    }
    const xe = Q != null && K == null;
    (se && (he = M && M.onVnodeUnmounted) || re || xe) && Pe(() => {
      he && Je(he, h, f), re && Vt(f, null, h, "unmounted"), xe && (f.el = null);
    }, v);
  }, z = (f) => {
    const { type: h, el: v, anchor: T, transition: y } = f;
    if (h === Y) {
      ye(v, T);
      return;
    }
    if (h === Ps) {
      w(f);
      return;
    }
    const b = () => {
      i(v), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (f.shapeFlag & 1 && y && !y.persisted) {
      const { leave: M, delayLeave: A } = y, S = () => M(v, b);
      A ? A(f.el, b, S) : S();
    } else
      b();
  }, ye = (f, h) => {
    let v;
    for (; f !== h; )
      v = E(f), i(f), f = v;
    i(h);
  }, Ue = (f, h, v) => {
    const { bum: T, scope: y, job: b, subTree: M, um: A, m: S, a: x } = f;
    Oi(S), Oi(x), T && zn(T), y.stop(), b && (b.flags |= 8, q(M, f, h, v)), A && Pe(A, h), Pe(() => {
      f.isUnmounted = !0;
    }, h);
  }, te = (f, h, v, T = !1, y = !1, b = 0) => {
    for (let M = b; M < f.length; M++)
      q(f[M], h, v, T, y);
  }, ve = (f) => {
    if (f.shapeFlag & 6)
      return ve(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = E(f.anchor || f.el), v = h && h[Wa];
    return v ? E(v) : h;
  };
  let Ce = !1;
  const Le = (f, h, v) => {
    let T;
    f == null ? h._vnode && (q(h._vnode, null, null, !0), T = h._vnode.component) : F(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      v
    ), h._vnode = f, Ce || (Ce = !0, Pi(T), Zo(), Ce = !1);
  }, Se = {
    p: F,
    um: q,
    m: X,
    r: z,
    mt: Rt,
    mc: $e,
    pc: Nt,
    pbc: Pt,
    n: ve,
    o: e
  };
  return {
    render: Le,
    hydrate: void 0,
    createApp: sl(Le)
  };
}
function Cs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Lt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function yl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function dr(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (Z(s) && Z(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = ct(i[o]), a.el = r.el), !n && a.patchFlag !== -2 && dr(r, a)), a.type === _s && (a.patchFlag === -1 && (a = i[o] = ct(a)), a.el = r.el), a.type === ht && !a.el && (a.el = r.el);
    }
}
function bl(e) {
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
function pr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : pr(t);
}
function Oi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function mr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? mr(t.subTree) : null;
}
const hr = (e) => e.__isSuspense;
function xl(e, t) {
  t && t.pendingBranch ? Z(e) ? t.effects.push(...e) : t.effects.push(e) : Ga(e);
}
const Y = /* @__PURE__ */ Symbol.for("v-fgt"), _s = /* @__PURE__ */ Symbol.for("v-txt"), ht = /* @__PURE__ */ Symbol.for("v-cmt"), Ps = /* @__PURE__ */ Symbol.for("v-stc"), Gt = [];
let Ve = null;
function L(e = !1) {
  Gt.push(Ve = e ? null : []);
}
function gr() {
  Gt.pop(), Ve = Gt[Gt.length - 1] || null;
}
let An = 1;
function Fi(e, t = !1) {
  An += e, e < 0 && Ve && t && (Ve.hasOnce = !0);
}
function _r(e) {
  return e.dynamicChildren = An > 0 ? Ve || Kt : null, gr(), An > 0 && Ve && Ve.push(e), e;
}
function k(e, t, n, s, i, o) {
  return _r(
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
function Tl(e, t, n, s, i) {
  return _r(
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
function vr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function cn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const yr = ({ key: e }) => e ?? null, Wn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? be(e) || /* @__PURE__ */ Me(e) || ae(e) ? { i: Fe, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, i = null, o = e === Y ? 0 : 1, r = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yr(t),
    ref: t && Wn(t),
    scopeId: qo,
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
  return a ? (ns(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= be(n) ? 8 : 16), An > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Ve && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ve.push(l), l;
}
const dt = wl;
function wl(e, t = null, n = null, s = 0, i = null, o = !1) {
  if ((!e || e === el) && (e = ht), vr(e)) {
    const a = qt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ns(a, n), An > 0 && !o && Ve && (a.shapeFlag & 6 ? Ve[Ve.indexOf(e)] = a : Ve.push(a)), a.patchFlag = -2, a;
  }
  if (Ll(e) && (e = e.__vccOpts), t) {
    t = Sl(t);
    let { class: a, style: l } = t;
    a && !be(a) && (t.class = Ye(a)), de(l) && (/* @__PURE__ */ hi(l) && !Z(l) && (l = ze({}, l)), t.style = ai(l));
  }
  const r = be(e) ? 1 : hr(e) ? 128 : hs(e) ? 64 : de(e) ? 4 : ae(e) ? 2 : 0;
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
function Sl(e) {
  return e ? /* @__PURE__ */ hi(e) || ar(e) ? ze({}, e) : e : null;
}
function qt(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: r, children: a, transition: l } = e, p = t ? El(i || {}, t) : i, m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && yr(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Z(o) ? o.concat(Wn(t)) : [o, Wn(t)] : Wn(t)
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
    patchFlag: t && e.type !== Y ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && qt(e.ssContent),
    ssFallback: e.ssFallback && qt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && s && _i(
    m,
    l.clone(m)
  ), m;
}
function at(e = " ", t = 0) {
  return dt(_s, null, e, t);
}
function je(e = "", t = !1) {
  return t ? (L(), Tl(ht, null, e)) : dt(ht, null, e);
}
function Qe(e) {
  return e == null || typeof e == "boolean" ? dt(ht) : Z(e) ? dt(
    Y,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : vr(e) ? ct(e) : dt(_s, null, String(e));
}
function ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qt(e);
}
function ns(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Z(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ns(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !ar(t) ? t._ctx = Fe : i === 3 && Fe && (Fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ae(t)) {
    if (s & 65) {
      ns(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Fe }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [at(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function El(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Ye([t.class, s.class]));
      else if (i === "style")
        t.style = ai([t.style, s.style]);
      else if (ls(i)) {
        const o = t[i], r = s[i];
        r && o !== r && !(Z(o) && o.includes(r)) ? t[i] = o ? [].concat(o, r) : r : r == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !cs(i) && (t[i] = r);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Je(e, t, n, s = null) {
  nt(e, t, 7, [
    n,
    s
  ]);
}
const Al = sr();
let Il = 0;
function Ml(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || Al, o = {
    uid: Il++,
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
    scope: new ua(
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
    propsOptions: pl(s, i),
    emitsOptions: rl(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: fe,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: fe,
    data: fe,
    props: fe,
    attrs: fe,
    slots: fe,
    refs: fe,
    setupState: fe,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ol.bind(null, o), e.ce && e.ce(o), o;
}
let Mt = null;
const Cl = () => Mt || Fe;
let ss, In;
{
  const e = ds(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  ss = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Mt = n
  ), In = t(
    "__VUE_SSR_SETTERS__",
    (n) => Mn = n
  );
}
const bi = (e) => {
  const t = Mt;
  return ss(e), e.scope.on(), () => {
    e.scope.off(), ss(t);
  };
}, Di = () => {
  Mt && Mt.scope.off(), ss(null);
};
function br(e) {
  return e.vnode.shapeFlag & 4;
}
let Mn = !1;
function Pl(e, t = !1, n = !1) {
  t && In(t);
  const { props: s, children: i } = e.vnode, o = br(e);
  fl(e, s, o, t), hl(e, i, n || t);
  const r = o ? Rl(e, t) : void 0;
  return t && In(!1), r;
}
function Rl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, tl);
  const { setup: s } = n;
  if (s) {
    At();
    const i = e.setupContext = s.length > 1 ? Vl(e) : null, o = bi(e), r = Ln(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = Eo(r);
    if (It(), o(), (a || e.sp) && !bn(e) && Ya(e), a) {
      if (r.then(Di, Di), t)
        return r.then((l) => {
          In(!0);
          try {
            $i(e, l, t);
          } finally {
            In(!1);
          }
        }).catch((l) => {
          ms(l, e, 0);
        });
      e.asyncDep = r;
    } else
      $i(e, r);
  } else
    xr(e);
}
function $i(e, t, n) {
  ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : de(t) && (e.setupState = Wo(t)), xr(e);
}
function xr(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ft);
}
const Nl = {
  get(e, t) {
    return Ee(e, "get", ""), e[t];
  }
};
function Vl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Nl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Wo(Pa(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in xn)
        return xn[n](e);
    },
    has(t, n) {
      return n in t || n in xn;
    }
  })) : e.proxy;
}
function Ll(e) {
  return ae(e) && "__vccOpts" in e;
}
const ge = (e, t) => /* @__PURE__ */ ka(e, t, Mn), kl = "3.5.41";
let Ws;
const Gi = typeof window < "u" && window.trustedTypes;
if (Gi)
  try {
    Ws = /* @__PURE__ */ Gi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Tr = Ws ? (e) => Ws.createHTML(e) : (e) => e, Ol = "http://www.w3.org/2000/svg", Fl = "http://www.w3.org/1998/Math/MathML", lt = typeof document < "u" ? document : null, Ui = lt && /* @__PURE__ */ lt.createElement("template"), Dl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? lt.createElementNS(Ol, e) : t === "mathml" ? lt.createElementNS(Fl, e) : n ? lt.createElement(e, { is: n }) : lt.createElement(e);
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
      Ui.innerHTML = Tr(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Ui.content;
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
}, $l = /* @__PURE__ */ Symbol("_vtc");
function Gl(e, t, n) {
  const s = e[$l];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ji = /* @__PURE__ */ Symbol("_vod"), Ul = /* @__PURE__ */ Symbol("_vsh"), jl = /* @__PURE__ */ Symbol(""), Bl = /(?:^|;)\s*display\s*:/;
function Hl(e, t, n) {
  const s = e.style, i = be(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (be(t))
        for (const r of t.split(";")) {
          const a = r.slice(0, r.indexOf(":")).trim();
          n[a] == null && pn(s, a, "");
        }
      else
        for (const r in t)
          n[r] == null && pn(s, r, "");
    for (const r in n) {
      r === "display" && (o = !0);
      const a = n[r];
      a != null ? zl(
        e,
        r,
        !be(t) && t ? t[r] : void 0,
        a
      ) || pn(s, r, a) : pn(s, r, "");
    }
  } else if (i) {
    if (t !== n) {
      const r = s[jl];
      r && (n += ";" + r), s.cssText = n, o = Bl.test(n);
    }
  } else t && e.removeAttribute("style");
  ji in e && (e[ji] = o ? s.display : "", e[Ul] && (s.display = "none"));
}
const Bi = /\s*!important$/;
function pn(e, t, n) {
  if (Z(n))
    n.forEach((s) => pn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Kl(e, t);
    Bi.test(n) ? e.setProperty(
      Ut(s),
      n.replace(Bi, ""),
      "important"
    ) : e[s] = n;
  }
}
const Hi = ["Webkit", "Moz", "ms"], Rs = {};
function Kl(e, t) {
  const n = Rs[t];
  if (n)
    return n;
  let s = Be(t);
  if (s !== "filter" && s in e)
    return Rs[t] = s;
  s = Mo(s);
  for (let i = 0; i < Hi.length; i++) {
    const o = Hi[i] + s;
    if (o in e)
      return Rs[t] = o;
  }
  return t;
}
function zl(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && be(s) && n === s;
}
const Ki = "http://www.w3.org/1999/xlink";
function zi(e, t, n, s, i, o = la(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ki, t.slice(6, t.length)) : e.setAttributeNS(Ki, t, n) : n == null || o && !Po(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : tt(n) ? String(n) : n
  );
}
function Wi(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Tr(n) : n);
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
    a === "boolean" ? n = Po(n) : n == null && a === "string" ? (n = "", r = !0) : a === "number" && (n = 0, r = !0);
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
function Wl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ji = /* @__PURE__ */ Symbol("_vei");
function Jl(e, t, n, s, i = null) {
  const o = e[Ji] || (e[Ji] = {}), r = o[t];
  if (s && r)
    r.value = s;
  else {
    const [a, l] = Zl(t);
    if (s) {
      const p = o[t] = ec(
        s,
        i
      );
      Tt(e, a, p, l);
    } else r && (Wl(e, a, r, l), o[t] = void 0);
  }
}
const Xl = /(Once|Passive|Capture)$/, Yl = /^on:?(?:Once|Passive|Capture)$/;
function Zl(e) {
  let t, n;
  for (; (n = e.match(Xl)) && !Yl.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ut(e.slice(2)), t];
}
let Ns = 0;
const Ql = /* @__PURE__ */ Promise.resolve(), ql = () => Ns || (Ql.then(() => Ns = 0), Ns = Date.now());
function ec(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (Z(i)) {
      const o = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        o.call(s), s._stopped = !0;
      };
      const r = i.slice(), a = [s];
      for (let l = 0; l < r.length && !s._stopped; l++) {
        const p = r[l];
        p && nt(
          p,
          t,
          5,
          a
        );
      }
    } else
      nt(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = ql(), n;
}
const Xi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, tc = (e, t, n, s, i, o) => {
  const r = i === "svg";
  t === "class" ? Gl(e, s, r) : t === "style" ? Hl(e, n, s) : ls(t) ? cs(t) || Jl(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : nc(e, t, s, r)) ? (Wi(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && zi(e, t, s, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (sc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !be(s))) ? Wi(e, Be(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), zi(e, t, s, r));
};
function nc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Xi(t) && ae(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Xi(t) && be(n) ? !1 : t in e;
}
function sc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Be(t);
  return Array.isArray(n) ? n.some((i) => Be(i) === s) : Object.keys(n).some((i) => Be(i) === s);
}
const en = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Z(t) ? (n) => zn(t, n) : t;
};
function ic(e) {
  e.target.composing = !0;
}
function Yi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const et = /* @__PURE__ */ Symbol("_assign"), Dn = /* @__PURE__ */ Symbol("_initialValue");
function Vs(e, t, n) {
  return t && (e = e.trim()), n && (e = fs(e)), e;
}
const ie = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[Dn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Dn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[et] = en(i);
    const o = s || i.props && i.props.type === "number";
    Tt(e, t ? "change" : "input", (r) => {
      r.target.composing || e[et](Vs(e.value, n, o));
    }), (n || o) && Tt(e, "change", () => {
      e.value = Vs(e.value, n, o);
    }), t || (Tt(e, "compositionstart", ic), Tt(e, "compositionend", Yi), Tt(e, "change", Yi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", o = e[Dn];
    delete e[Dn], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[et](Vs(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: o } }, r) {
    if (e[et] = en(r), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? fs(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const p = e.getRootNode();
    (p instanceof Document || p instanceof ShadowRoot) && p.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === l) || (e.value = l);
  }
}, Zi = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[et] = en(n), Tt(e, "change", () => {
      const s = e._modelValue, i = Cn(e), o = e.checked, r = e[et];
      if (Z(s)) {
        const a = li(s, i), l = a !== -1;
        if (o && !l)
          r(s.concat(i));
        else if (!o && l) {
          const p = [...s];
          p.splice(a, 1), r(p);
        }
      } else if (nn(s)) {
        const a = new Set(s);
        o ? a.add(i) : a.delete(i), r(a);
      } else
        r(wr(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Qi,
  beforeUpdate(e, t, n) {
    e[et] = en(n), Qi(e, t, n);
  }
};
function Qi(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let i;
  if (Z(t))
    i = li(t, s.props.value) > -1;
  else if (nn(t))
    i = t.has(s.props.value);
  else {
    if (t === n) return;
    i = sn(t, wr(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const _e = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, Tt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? fs(Cn(o)) : Cn(o)
      );
      e[et](
        e.multiple ? nn(e._modelValue) ? new Set(i) : i : i[0]
      ), e._assigning = !0, Xo(() => {
        e._assigning = !1;
      });
    }), e[et] = en(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    qi(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[et] = en(n);
  },
  updated(e, { value: t }) {
    e._assigning || qi(e, t);
  }
};
function qi(e, t) {
  const n = e.multiple, s = Z(t);
  if (!(n && !s && !nn(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const r = e.options[i], a = Cn(r);
      if (n)
        if (s) {
          const l = typeof a;
          l === "string" || l === "number" ? r.selected = t.some((p) => String(p) === String(a)) : r.selected = li(t, a) > -1;
        } else
          r.selected = t.has(a);
      else if (sn(Cn(r), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Cn(e) {
  return "_value" in e ? e._value : e.value;
}
function wr(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const oc = /* @__PURE__ */ ze({ patchProp: tc }, Dl);
let eo;
function rc() {
  return eo || (eo = _l(oc));
}
const ac = ((...e) => {
  const t = rc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = cc(s);
    if (!i) return;
    const o = t._component;
    !ae(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, lc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
});
function lc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function cc(e) {
  return be(e) ? document.querySelector(e) : e;
}
const uc = "tavern_multi_tts_cache", Oe = "audio_cache", fc = 1, to = 100, no = 50 * 1024 * 1024;
function so(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function dc(e) {
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
async function pc(e) {
  const t = dc(e), n = JSON.stringify(t);
  if (Object.keys(t).some((i) => /api[_-]?key|authorization|token|secret|password/i.test(i)))
    throw new Error("音频缓存键不得包含密钥字段");
  const s = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(n));
  return [...new Uint8Array(s)].map((i) => i.toString(16).padStart(2, "0")).join("");
}
function mc() {
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
function hc(e, t) {
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
      const p = e.open(t, fc);
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
function gc(e, t) {
  const n = hc(e, t);
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
async function _c(e) {
  const t = await e.getAll();
  let n = t.reduce((o, r) => o + (r.blob?.size ?? 0), 0);
  if (t.length <= to && n <= no)
    return;
  const s = [...t].sort((o, r) => o.created_at - r.created_at);
  let i = t.length;
  for (const o of s) {
    if (i <= to && n <= no)
      break;
    await e.delete(o.key), i -= 1, n -= o.blob?.size ?? 0;
  }
}
function vc(e) {
  const t = e?.backend === "memory" ? mc() : gc(
    e?.indexedDB ?? indexedDB,
    e?.dbName ?? uc
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
      }), await _c(t);
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
const ys = vc({
  backend: typeof indexedDB > "u" ? "memory" : "indexeddb"
});
function yc(e) {
  return ys.get(e);
}
function bc(e, t) {
  return ys.set(e, t);
}
function Sr() {
  return ys.clear();
}
function xc() {
  return ys.stats();
}
let xt = null, Jn = null;
function Xn() {
  xt && (xt.pause(), Jn?.());
}
function Er(e, t, n, s, i) {
  const o = URL.createObjectURL(e), r = new Audio(o);
  let a = "paused";
  const l = () => {
    URL.revokeObjectURL(o), xt === r && (xt = null, Jn = null);
  }, p = () => {
    xt && xt !== r && (xt.pause(), Jn?.()), xt = r, Jn = l;
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
function Ar(e) {
  return [...e].map((n) => n.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(n) ? "_" : n).join("").trim() || "audio.mp3";
}
function Tc(e, t, n = "mp3") {
  return Ar(`tavern_multi_tts_${e}_${t}.${n}`);
}
function wc(e, t) {
  const n = Ar(t), s = URL.createObjectURL(e), i = URL.revokeObjectURL.bind(URL), o = document.createElement("a");
  o.href = s, o.download = n, document.body.appendChild(o), o.click(), o.remove(), window.setTimeout(() => i(s), 0);
}
const Sc = "Tavern Multi-TTS", Ls = "tavern_multi_tts", Ec = "0.1.0", Yn = "tavern-multi-tts-root", we = "[Tavern Multi-TTS]", is = ["ZH", "EN", "JA", "AR", "ES"], xi = ["s2.1-pro-free", "s2.1-pro"], Ir = 3, Mr = [
  "speech-02-hd",
  "speech-02-turbo",
  "speech-2.8-hd",
  "speech-2.8-turbo",
  "speech-2.6-hd",
  "speech-2.6-turbo"
], Zn = [
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
`), Js = [
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
`), Xs = [
  "<VOICE_RULE>",
  '请仅对角色：${mapped_characters} 的直接台词添加 <say char="角色名">...</say> 标签。',
  "角色映射名单：${mapped_characters}",
  "char 必须与映射角色名完全一致，不要使用其他称呼。",
  '<say char="角色名">禁止填<user>。',
  "不要给旁白、动作描写、心理活动、双语的中文翻译内容加 <say> 标签。",
  "不要输出空的 <say></say>，不要嵌套 <say> 标签。",
  "",
  "支持方括号标签进行自然语言情绪语气提示，如[happy]。",
  "日常、平静、普通闲聊不要添加提示标签。",
  "只有出现明确语气、情绪或声音表现需求时，才在台词中使用英文方括号提示。",
  "每句通常不超过 1 项，确有必要最多 2 项。",
  "标签必须短小、自然、符合上下文，不要堆叠或使用互相冲突的标签。",
  "标签应放在它实际影响的发声位置附近。",
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
  "方括号内容属于自然语言描述，并非固定标签表；但禁止输出冗长句子、中文括号提示、圆括号语气词。",
  "</VOICE_RULE>"
].join(`
`), Ac = [
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
  schemaVersion: Ir,
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
  injectTemplate: Zn,
  indexTtsInjectTemplate: Js,
  fishAudioInjectTemplate: Xs
};
function _t(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function ee(e, t) {
  return typeof e == "string" ? e : t;
}
function Ic(e) {
  const t = ee(e, Zn) || Zn;
  return t === Ac ? Zn : t;
}
function ks(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Ne(e, t, n, s, i = !1) {
  const o = typeof e == "number" ? e : Number(e);
  if (!Number.isFinite(o))
    return s;
  const r = i ? Math.round(o) : o;
  return Math.min(n, Math.max(t, r));
}
function Mc(e) {
  return e === "minimax" || e === "local_gsvi" || e === "index_tts" || e === "fish_audio" ? e : "minimax";
}
function Cr(e) {
  return is.includes(String(e)) ? e : gt.indexTtsLanguage;
}
function Cc(e) {
  return xi.includes(String(e)) ? e : gt.fishAudioModel;
}
function Pc(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Rc(e) {
  return Mr.includes(String(e)) ? e : gt.model;
}
function Nc(e) {
  return e === "manual" || e === "auto_first_n" || e === "auto_all" ? e : gt.prefetchMode;
}
function Vc(e) {
  return e === "user" || e === "assistant" || e === "system" ? e : gt.injectRole;
}
function Lc(e) {
  return e === "zh" || e === "en" || e === "ja" ? e : gt.testLanguage;
}
function kc(e) {
  return e === "wav" ? "wav" : "mp3";
}
function Pr(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    characterName: ee(t.characterName, "").trim(),
    minimaxVoiceId: ee(t.minimaxVoiceId, "").trim()
  })).filter((t) => t.characterName || t.minimaxVoiceId) : [];
}
function Oc(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    name: ee(t.name, "").trim(),
    mappings: Pr(t.mappings)
  })).filter((t) => t.name) : [];
}
function Rr(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    characterName: ee(t.characterName, "").trim(),
    gsviVoiceId: ee(t.gsviVoiceId, "").trim(),
    gsviLanguage: ee(t.gsviLanguage, "").trim(),
    gsviEmotion: ee(t.gsviEmotion, "").trim()
  })).filter((t) => t.characterName || t.gsviVoiceId) : [];
}
function Fc(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    name: ee(t.name, "").trim(),
    mappings: Rr(t.mappings)
  })).filter((t) => t.name) : [];
}
function Nr(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    characterName: ee(t.characterName, "").trim(),
    indexTtsVoiceId: ee(t.indexTtsVoiceId, "").trim(),
    indexTtsLanguage: Cr(t.indexTtsLanguage)
  })).filter((t) => t.characterName || t.indexTtsVoiceId) : [];
}
function Dc(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    name: ee(t.name, "").trim(),
    mappings: Nr(t.mappings)
  })).filter((t) => t.name) : [];
}
function Vr(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    characterName: ee(t.characterName, "").trim(),
    fishAudioReferenceId: ee(t.fishAudioReferenceId, "").trim()
  })).filter((t) => t.characterName || t.fishAudioReferenceId) : [];
}
function $c(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    name: ee(t.name, "").trim(),
    mappings: Vr(t.mappings)
  })).filter((t) => t.name) : [];
}
function Gc(e, t) {
  const n = typeof e == "number" ? e : Number(e);
  return Number.isFinite(n) ? n : t;
}
function Xt(e) {
  const t = _t(e) ? e : {};
  return {
    schemaVersion: Ir,
    enabled: ks(t.enabled, gt.enabled),
    ttsEngine: Mc(t.ttsEngine),
    apiKey: ee(t.apiKey, ""),
    groupId: ee(t.groupId, ""),
    voiceId: ee(t.voiceId, ""),
    voiceCatalogSelectedId: ee(t.voiceCatalogSelectedId, ""),
    minimaxRegion: Pc(t.minimaxRegion),
    testLanguage: Lc(t.testLanguage),
    model: Rc(t.model),
    speed: Ne(t.speed, 0.5, 2, 1),
    vol: Ne(t.vol, 0, 10, 1),
    requestTimeoutMs: Ne(t.requestTimeoutMs, 1e3, 3e4, 15e3, !0),
    maxConcurrency: Ne(t.maxConcurrency, 1, 10, 3, !0),
    prefetchMode: Nc(t.prefetchMode),
    prefetchFirstCount: Ne(t.prefetchFirstCount, 1, 10, 2, !0),
    localGsviBaseUrl: ee(t.localGsviBaseUrl, ""),
    localGsviAuthToken: ee(t.localGsviAuthToken, ""),
    localGsviModel: ee(t.localGsviModel, ""),
    localGsviFormat: kc(t.localGsviFormat),
    localGsviUseReferenceAudio: ks(t.localGsviUseReferenceAudio, !1),
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
    characterMappings: Pr(t.characterMappings),
    characterMappingPresets: Oc(t.characterMappingPresets),
    gsviCharacterMappings: Rr(t.gsviCharacterMappings),
    gsviCharacterMappingPresets: Fc(t.gsviCharacterMappingPresets),
    indexTtsBaseUrl: ee(t.indexTtsBaseUrl, gt.indexTtsBaseUrl),
    indexTtsVoiceId: ee(t.indexTtsVoiceId, ""),
    indexTtsLanguage: Cr(t.indexTtsLanguage),
    indexTtsCharacterMappings: Nr(t.indexTtsCharacterMappings),
    indexTtsCharacterMappingPresets: Dc(t.indexTtsCharacterMappingPresets),
    indexTtsDurationFactor: Ne(t.indexTtsDurationFactor, 0.5, 2, 1),
    indexTtsEmoWeight: Ne(t.indexTtsEmoWeight, 0, 1, 0.8),
    fishAudioApiKey: ee(t.fishAudioApiKey, ""),
    fishAudioModel: Cc(t.fishAudioModel),
    fishAudioReferenceId: ee(t.fishAudioReferenceId, ""),
    fishAudioSpeed: Ne(t.fishAudioSpeed, 0.5, 2, 1),
    fishAudioVolume: Gc(t.fishAudioVolume, 0),
    fishAudioCharacterMappings: Vr(t.fishAudioCharacterMappings),
    fishAudioCharacterMappingPresets: $c(
      t.fishAudioCharacterMappingPresets
    ),
    injectEnabled: ks(t.injectEnabled, !0),
    injectDepth: Ne(t.injectDepth, 0, 50, 1, !0),
    injectRole: Vc(t.injectRole),
    injectTemplate: Ic(t.injectTemplate),
    indexTtsInjectTemplate: ee(t.indexTtsInjectTemplate, Js) || Js,
    fishAudioInjectTemplate: ee(t.fishAudioInjectTemplate, Xs) || Xs
  };
}
function St(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function Uc(e, t) {
  return e.enabled !== t.enabled || e.injectEnabled !== t.injectEnabled || e.injectDepth !== t.injectDepth || e.injectRole !== t.injectRole || e.injectTemplate !== t.injectTemplate || e.indexTtsInjectTemplate !== t.indexTtsInjectTemplate || e.fishAudioInjectTemplate !== t.fishAudioInjectTemplate || e.ttsEngine !== t.ttsEngine || !St(e.characterMappings, t.characterMappings) || !St(e.gsviCharacterMappings, t.gsviCharacterMappings) || !St(e.indexTtsCharacterMappings, t.indexTtsCharacterMappings) || !St(e.fishAudioCharacterMappings, t.fishAudioCharacterMappings);
}
function jc(e, t) {
  return e.enabled !== t.enabled || e.ttsEngine !== t.ttsEngine || !St(e.characterMappings, t.characterMappings) || !St(e.gsviCharacterMappings, t.gsviCharacterMappings) || !St(e.indexTtsCharacterMappings, t.indexTtsCharacterMappings) || !St(e.fishAudioCharacterMappings, t.fishAudioCharacterMappings);
}
function Bc(e, t) {
  return {
    syncInjection: Uc(e, t),
    refreshDecorations: jc(e, t)
  };
}
function Hc(e, t, n = {}) {
  let s = !1, i = !1, o = null, r = null, a = null;
  const l = [];
  function p() {
    return Xt(e.readRawSettings());
  }
  function m() {
    const P = p();
    return e.writeSettings(P), P;
  }
  function g() {
    if (s)
      return !0;
    const P = document.getElementById(Yn);
    P && P.remove();
    const B = e.findSettingsRoot();
    return B ? (a = document.createElement("div"), a.id = Yn, a.dataset.tavernMultiTts = "settings", B.appendChild(a), t.mount(a, p()), r = e.onPageHide(() => {
      O({ removeSettings: !1 });
    }), s = !0, n.startRuntime?.(), console.info(`${we} settings panel mounted`), !0) : !1;
  }
  function E() {
    if (!a || !s)
      return;
    const P = e.findSettingsRoot();
    P && a.parentElement !== P && (P.appendChild(a), console.info(`${we} settings panel moved to the visible extensions list`));
  }
  function I() {
    for (const P of [0, 200, 800, 2e3])
      l.push(window.setTimeout(E, P));
  }
  function O(P) {
    n.stopRuntime?.(), n.stopPlayback?.(), o?.(), o = null, i = !1, l.splice(0).forEach((w) => window.clearTimeout(w)), r?.(), r = null, t.unmount(), (a ?? document.getElementById(Yn))?.remove(), a = null, s = !1, P.removeSettings && e.removeSettings();
  }
  function F() {
    if (s || i) {
      E();
      return;
    }
    m(), g() || (i = !0), o = e.onAppReady(() => {
      i && (i = !1, g() || console.error(
        `${we} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`
      )), E();
    }), I();
  }
  function j(P) {
    const B = p();
    B.enabled = P, e.writeSettings(B), n.syncInjection?.(), n.refreshDecorations?.();
  }
  function G(P) {
    const B = p();
    B.injectEnabled = P, e.writeSettings(B), n.syncInjection?.();
  }
  return {
    activate: F,
    disable() {
      O({ removeSettings: !1 }), console.info(`${we} disabled`);
    },
    destroy() {
      O({ removeSettings: !1 });
    },
    install() {
      m();
    },
    clean() {
      return O({ removeSettings: !0 }), console.info(`${we} settings cleaned`), n.clearCache?.();
    },
    delete() {
      return O({ removeSettings: !0 }), console.info(`${we} deleted`), n.clearCache?.();
    },
    updateSettings(P) {
      const B = p();
      e.writeSettings(Xt(P));
      const w = Bc(B, p());
      w.syncInjection && n.syncInjection?.(), w.refreshDecorations && n.refreshDecorations?.();
    },
    setEnabled: j,
    setInjectEnabled: G,
    isActive() {
      return s;
    }
  };
}
function io(e) {
  let t = 0;
  const n = Array.from(e.querySelectorAll(".inline-drawer"));
  for (const s of n)
    s.closest(`#${Yn}`) || (t += 1);
  return t;
}
function Kc() {
  const e = document.querySelector("#extensions_settings2"), t = document.querySelector("#extensions_settings"), n = e ? io(e) : -1, s = t ? io(t) : -1;
  return n < 0 && s < 0 ? null : s > n ? t : n > s ? e : e ?? t;
}
class C extends Error {
  code;
  status;
  constructor(t, n, s) {
    super(t), this.name = "TtsRequestError", this.code = n, this.status = s;
  }
}
function Lr(e) {
  return e instanceof C;
}
function zc(e) {
  return new C(`请求超时（${e}ms），请检查网络或增大超时时间`, "timeout");
}
function Wc() {
  return new C("请求已取消", "cancelled");
}
async function pt(e, t, n, s) {
  const i = new AbortController();
  let o = !1, r = !1, a = null;
  const l = () => {
    r || (r = !0, clearTimeout(m), g?.removeEventListener("abort", E));
  }, p = () => o && !g?.aborted ? zc(s) : Wc(), m = setTimeout(() => {
    o = !0, i.abort("timeout");
  }, s), g = n.signal, E = () => {
    i.abort(g?.reason ?? "cancelled");
  };
  g && (g.aborted ? i.abort(g.reason ?? "cancelled") : g.addEventListener("abort", E, { once: !0 }));
  const I = () => {
    a?.(p());
  };
  i.signal.addEventListener("abort", I);
  const O = () => new Promise((j, G) => {
    if (i.signal.aborted) {
      G(p());
      return;
    }
    a = G;
  }), F = async (j) => {
    try {
      return await Promise.race([j, O()]);
    } catch (G) {
      throw G instanceof C ? G : i.signal.aborted ? p() : G;
    } finally {
      l(), i.signal.removeEventListener("abort", I);
    }
  };
  try {
    const j = await Promise.race([
      e(t, {
        ...n,
        signal: i.signal
      }),
      O()
    ]);
    return {
      ok: j.ok,
      status: j.status,
      statusText: j.statusText,
      headers: j.headers,
      text: () => F(j.text()),
      async json() {
        const G = await F(j.text());
        try {
          return JSON.parse(G);
        } catch {
          throw new C(
            "服务返回的不是合法 JSON，请检查地址或稍后重试",
            "invalid_json"
          );
        }
      },
      blob: () => F(j.blob()),
      close: l
    };
  } catch (j) {
    throw l(), i.signal.removeEventListener("abort", I), j instanceof C ? j : i.signal.aborted ? p() : j;
  }
}
function Yt(e, t) {
  return `${e.replace(/\/+$/, "")}${t.startsWith("/") ? "" : "/"}${t}`;
}
function Jc(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function Xc(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const Yc = /api[_-]?key|authorization|token|secret|cookie|password/i;
function os(e) {
  if (typeof e == "string")
    return e.length > 80 ? `${e.slice(0, 80)}…(len=${e.length})` : e;
  if (Array.isArray(e))
    return e.map((n) => os(n));
  if (!e || typeof e != "object")
    return e;
  const t = {};
  for (const [n, s] of Object.entries(e)) {
    if (Yc.test(n)) {
      t[n] = "[redacted]";
      continue;
    }
    if (n === "text" || n === "input" || n === "referenceText" || n === "reference_text") {
      t[n] = typeof s == "string" ? `[text len=${s.length}]` : "[text]";
      continue;
    }
    t[n] = os(s);
  }
  return t;
}
function bs(e, t, n) {
  if (n === void 0) {
    console.info(`${we} [${e}] ${t}`);
    return;
  }
  console.info(`${we} [${e}] ${t}`, os(n));
}
function Ys(e, t, n) {
  if (n === void 0) {
    console.warn(`${we} [${e}] ${t}`);
    return;
  }
  console.warn(`${we} [${e}] ${t}`, os(n));
}
const kr = "IndexTTS-2.5", Zs = "indextts", Qs = "1", qs = "2.5";
function Pn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Zc(e) {
  return is.includes(String(e));
}
function Qc(e) {
  const t = {
    model: kr,
    input: e.text,
    voice: e.voiceId.trim(),
    response_format: "wav",
    language: e.language,
    duration_factor: e.durationFactor,
    emo_weight: e.emoWeight
  };
  return e.emotion && Object.keys(e.emotion).length > 0 && (t.emotion = e.emotion), t;
}
function qc(e) {
  if (!e.baseUrl.trim())
    throw new C("请先填写 IndexTTS 服务地址", "config");
  if (!e.voiceId.trim())
    throw new C("请先选择 IndexTTS 音色预设", "config");
  if (!Zc(e.language))
    throw new C("IndexTTS 语言必须是 ZH、EN、JA、AR 或 ES", "config");
  if (!e.text.trim())
    throw new C("IndexTTS 合成文本为空", "config");
}
function eu(e) {
  return (e ?? "").split(";")[0]?.trim().toLowerCase() === "audio/wav";
}
function tu(e, t) {
  if (Pn(e) && Pn(e.error)) {
    const n = typeof e.error.code == "string" ? e.error.code.trim() : "", s = typeof e.error.message == "string" ? e.error.message.trim() : "";
    if (n || s)
      return new C(
        `IndexTTS 请求失败：code=${n || "unknown"}, message=${s || "（无消息）"}`,
        "http",
        t
      );
  }
  return new C(`IndexTTS 请求失败：HTTP ${t}`, "http", t);
}
async function Os(e) {
  try {
    const t = await e.text();
    try {
      return tu(JSON.parse(t), e.status);
    } catch {
      return new C(
        `IndexTTS 请求失败：HTTP ${e.status}`,
        "http",
        e.status
      );
    }
  } catch (t) {
    return t instanceof C ? new C(
      `IndexTTS 请求失败：HTTP ${e.status}`,
      "http",
      e.status
    ) : new C(
      `IndexTTS 请求失败：HTTP ${e.status}`,
      "http",
      e.status
    );
  }
}
function nu(e) {
  return e.service !== Zs ? `IndexTTS 健康检查失败：服务名无效（期望 ${Zs}）` : e.api_version !== Qs ? `IndexTTS 健康检查失败：API 版本不匹配（期望 ${Qs}）` : e.model_version !== qs ? `IndexTTS 健康检查失败：模型版本不匹配（期望 ${qs}）` : e.model_loaded !== !0 ? "IndexTTS 服务在线，但模型尚未加载。请先在服务端加载模型后再试。" : e.ok !== !0 ? "IndexTTS 服务报告未就绪" : "IndexTTS 健康检查响应结构无效";
}
function su(e) {
  return Pn(e) ? e.ok === !0 && e.service === Zs && e.api_version === Qs && e.model_version === qs && e.model_loaded === !0 ? { ok: !0, message: "IndexTTS 服务在线，模型已加载（IndexTTS-2.5）" } : { ok: !1, message: nu(e) } : { ok: !1, message: "IndexTTS 健康检查响应结构无效" };
}
function iu(e) {
  if (!Pn(e) || !Array.isArray(e.voices))
    throw new C("IndexTTS 音色列表结构无效：缺少 voices 数组", "invalid_json");
  return e.voices.map((t, n) => {
    if (!Pn(t) || typeof t.id != "string" || !t.id.trim())
      throw new C(
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
function ou(e) {
  return e instanceof C ? { ok: !1, message: e.message } : {
    ok: !1,
    message: "无法连接 IndexTTS 服务。请确认服务已启动，并检查地址是否正确。"
  };
}
function ru(e) {
  const t = fetch;
  return {
    id: "index_tts",
    async checkHealth(n) {
      if (n.engine !== "index_tts")
        throw new C("IndexTTS 适配器收到了错误的引擎请求", "config");
      const s = n.baseUrl.trim();
      if (!s)
        return { ok: !1, message: "请先填写 IndexTTS 服务地址" };
      try {
        const i = await pt(
          t,
          Yt(s, "/v1/health"),
          { method: "GET", signal: n.signal },
          n.timeoutMs
        );
        if (!i.ok)
          throw await Os(i);
        const o = await i.json();
        return su(o);
      } catch (i) {
        return ou(i);
      }
    },
    async listVoices(n) {
      if (n.engine !== "index_tts")
        throw new C("IndexTTS 适配器收到了错误的引擎请求", "config");
      const s = n.baseUrl.trim();
      if (!s)
        throw new C("请先填写 IndexTTS 服务地址", "config");
      const i = await pt(
        t,
        Yt(s, "/v1/voices"),
        { method: "GET", signal: n.signal },
        n.timeoutMs
      );
      if (!i.ok)
        throw await Os(i);
      return iu(await i.json());
    },
    async synthesize(n) {
      if (n.engine !== "index_tts")
        throw new C("IndexTTS 适配器收到了错误的引擎请求", "config");
      qc(n);
      const s = Qc(n), i = Yt(n.baseUrl.trim(), "/v1/audio/speech");
      bs("index_tts", "synthesize", {
        url: i,
        voiceId: s.voice,
        language: s.language,
        model: s.model,
        durationFactor: s.duration_factor,
        emoWeight: s.emo_weight,
        emotion: s.emotion ? Object.keys(s.emotion) : void 0,
        text: n.text
      });
      const o = await pt(
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
        throw await Os(o);
      const r = o.headers.get("content-type");
      if (!eu(r))
        throw o.close(), new C(
          `IndexTTS 合成失败：响应类型不是 audio/wav（当前：${r || "缺失"}）`,
          "missing_audio",
          o.status
        );
      const a = await o.blob();
      if (!a || a.size <= 0)
        throw new C("IndexTTS 合成失败：返回的音频为空", "missing_audio");
      return a;
    }
  };
}
const au = "/api/plugins/multi-tts-fish-bridge/health", lu = "/api/plugins/multi-tts-fish-bridge/models", Or = "/api/plugins/multi-tts-fish-bridge/speech", oo = "1", Fr = [
  "Fish Bridge：不可用",
  "未安装桥接，或 SillyTavern 未启用 Server Plugins。"
].join(`
`), cu = "Fish Bridge：版本不兼容", uu = /* @__PURE__ */ new Set([
  "audio/mpeg",
  "audio/mp3",
  "audio/mpeg3",
  "audio/x-mpeg",
  "audio/x-mpeg-3"
]), fu = /* @__PURE__ */ new Set([
  "training",
  "failed",
  "deleted",
  "disabled",
  "unavailable"
]);
let ro = null;
function du(e) {
  return xi.includes(String(e));
}
function tn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Ti(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function ao(e) {
  if (e instanceof Headers) {
    const t = {};
    return e.forEach((n, s) => {
      t[s] = n;
    }), t;
  }
  return tn(e) ? Object.fromEntries(
    Object.entries(e).filter(
      (t) => typeof t[1] == "string"
    )
  ) : {};
}
async function pu() {
  const e = globalThis.getRequestHeaders;
  return typeof e == "function" ? ao(e({ omitContentType: !0 })) : typeof window > "u" ? {} : (ro ??= import("/script.js").then((n) => {
    const s = n.getRequestHeaders;
    return typeof s == "function" ? ao(s({ omitContentType: !0 })) : {};
  }).catch(() => ({})), await ro);
}
async function ei(e, t = !1) {
  const n = await pu();
  return t && (n["Content-Type"] = "application/json"), e && (n["X-Fish-API-Key"] = Ti(e)), n;
}
function mu(e) {
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
function hu() {
  return lu;
}
function Zt() {
  return new C(Fr, "config");
}
function gu() {
  return new C(cu, "config");
}
async function ti(e, t, n, s) {
  try {
    return await pt(e, t, n, s);
  } catch (i) {
    throw i instanceof C ? i : Zt();
  }
}
function _u(e) {
  if (!Ti(e.apiKey))
    throw new C("请先填写 Fish Audio API Key", "config");
  if (!du(e.model))
    throw new C("Fish Audio 仅支持 S2.1 Pro Free 或 S2.1 Pro", "config");
  if (!e.referenceId.trim())
    throw new C("请先填写 Fish Audio 音色模型 ID", "config");
  if (!e.text.trim())
    throw new C("Fish Audio 合成文本为空", "config");
  if (!Number.isFinite(e.speed) || e.speed < 0.5 || e.speed > 2)
    throw new C("Fish Audio 语速必须在 0.5 到 2.0 之间", "config");
  if (!Number.isFinite(e.volume))
    throw new C("Fish Audio 音量必须是有限数字", "config");
}
function vu(e, t) {
  return e === 401 ? "API Key 无效" : e === 402 ? "余额或套餐不可用" : e === 404 ? t === "synthesize" ? "reference_id 不存在" : "模型列表接口不存在" : e === 422 ? "请求参数错误" : e === 429 ? "请求频率限制" : e >= 500 ? "Fish Audio 服务异常" : `HTTP ${e}`;
}
async function ni(e, t) {
  let n;
  try {
    n = await e.json();
  } catch {
    return Zt();
  }
  if (!tn(n))
    return Zt();
  const s = typeof n.code == "string" ? n.code : "", i = typeof n.message == "string" ? n.message.trim() : "";
  if (s === "timeout")
    return new C(i || "请求超时", "timeout", e.status);
  if (s === "cancelled")
    return new C(i || "请求已取消", "cancelled", e.status);
  if (s === "bridge_missing_api_key")
    return new C("请先填写 Fish Audio API Key", "config", e.status);
  if (s.startsWith("fish_") && t !== "health") {
    const o = vu(e.status, t);
    return new C(
      i && i.length <= 160 ? `Fish Audio 请求失败：${o}（${i}）` : `Fish Audio 请求失败：${o}`,
      "http",
      e.status
    );
  }
  return Zt();
}
async function yu(e, t) {
  const n = await ti(
    e,
    au,
    {
      method: "GET",
      headers: await ei(),
      credentials: "same-origin",
      signal: t.signal
    },
    t.timeoutMs
  );
  try {
    if (!n.ok)
      throw await ni(n, "health");
    let s;
    try {
      s = await n.json();
    } catch {
      throw Zt();
    }
    if (!tn(s) || s.ok !== !0 || s.api_version !== oo)
      throw tn(s) && s.api_version !== oo ? gu() : Zt();
  } finally {
    n.close();
  }
}
function bu(e) {
  if (!tn(e) || !Array.isArray(e.items))
    throw new C("Fish Audio 模型列表结构无效：缺少 items 数组", "invalid_json");
  const t = [];
  for (const n of e.items) {
    if (!tn(n) || typeof n._id != "string" || !n._id.trim() || typeof n.type == "string" && n.type !== "tts" || typeof n.state == "string" && fu.has(n.state) || n.dmca_taken_down === !0 || n.pvc_release_state === "retiring")
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
function xu(e) {
  const t = (e ?? "").split(";")[0]?.trim().toLowerCase();
  return uu.has(t);
}
function Tu(e) {
  return e instanceof C ? { ok: !1, message: e.message } : {
    ok: !1,
    message: Fr
  };
}
function wu(e) {
  const t = fetch;
  async function n(i) {
    if (i.engine !== "fish_audio")
      throw new C("Fish Audio 适配器收到了错误的引擎请求", "config");
    const o = Ti(i.apiKey);
    if (!o)
      throw new C("请先填写 Fish Audio API Key", "config");
    const r = await ti(
      t,
      hu(),
      {
        method: "POST",
        headers: await ei(o),
        credentials: "same-origin",
        signal: i.signal
      },
      i.timeoutMs
    );
    try {
      if (!r.ok)
        throw await ni(r, "models");
      return bu(await r.json());
    } catch (a) {
      throw a instanceof C ? a : new C("Fish Bridge 返回了无法解析的模型列表", "invalid_json");
    } finally {
      r.close();
    }
  }
  async function s(i) {
    if (i.engine !== "fish_audio")
      throw new C("Fish Audio 适配器收到了错误的引擎请求", "config");
    await yu(t, i);
  }
  return {
    id: "fish_audio",
    async checkHealth(i) {
      if (i.engine !== "fish_audio")
        throw new C("Fish Audio 适配器收到了错误的引擎请求", "config");
      try {
        return await s(i), { ok: !0, message: `Fish Audio 服务在线，可用音色模型 ${(await n(i)).length} 个` };
      } catch (o) {
        return Tu(o);
      }
    },
    async listVoices(i) {
      if (i.engine !== "fish_audio")
        throw new C("Fish Audio 适配器收到了错误的引擎请求", "config");
      return await s(i), await n(i);
    },
    async synthesize(i) {
      if (i.engine !== "fish_audio")
        throw new C("Fish Audio 适配器收到了错误的引擎请求", "config");
      _u(i);
      const o = mu(i);
      bs("fish_audio", "synthesize", {
        model: i.model,
        referenceId: o.reference_id,
        speed: o.prosody.speed,
        volume: o.prosody.volume,
        text: i.text
      });
      const r = await ti(
        t,
        Or,
        {
          method: "POST",
          headers: await ei(i.apiKey, !0),
          credentials: "same-origin",
          body: JSON.stringify({ ...o, model: i.model }),
          signal: i.signal
        },
        i.timeoutMs
      );
      try {
        if (!r.ok)
          throw await ni(r, "synthesize");
        const a = r.headers.get("content-type");
        if (!xu(a))
          throw new C(
            `Fish Audio 合成失败：响应类型不是 MP3 音频（当前：${a || "缺失"}）`,
            "missing_audio",
            r.status
          );
        const l = await r.blob();
        if (!l || l.size <= 0)
          throw new C("Fish Audio 合成失败：返回的音频为空", "missing_audio");
        return new Blob([await l.arrayBuffer()], { type: "audio/mpeg" });
      } finally {
        r.close();
      }
    }
  };
}
const Su = ["v2", "v3", "v4", "v2Pro"];
function Dr(e) {
  const t = e.trim();
  if (!t)
    return { modelName: "", version: "" };
  const n = t.lastIndexOf("|");
  return n < 0 ? { modelName: t, version: "" } : {
    modelName: t.slice(0, n).trim(),
    version: t.slice(n + 1).trim()
  };
}
function Eu(e) {
  const t = e.trim().toLowerCase();
  return t === "v2pro" ? "v2Pro" : t === "v2" || t === "v3" || t === "v4" ? t : e.trim();
}
function Au(e) {
  const t = e.trim();
  return t ? {
    英文: "英语",
    日文: "日语",
    韩文: "韩语"
  }[t] ?? t : "多语种混合";
}
function Iu(e) {
  const t = Dr(e.modelId), n = t.modelName.trim(), s = Eu(t.version) || "v2Pro";
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
        text_lang: Au(e.textLang),
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
function Mu(e) {
  if (!e.baseUrl.trim())
    throw new C("请先填写 Local-GSVI 服务地址", "config");
  if (!e.modelId.trim())
    throw new C("请先填写或选择 Local-GSVI 模型（modelName|version）", "config");
  if (!e.language.trim() || !e.emotion.trim())
    throw new C(
      "GSVI 生成要求映射完整：语种(prompt_lang)/情绪(emotion)不能为空",
      "config"
    );
  if (!Dr(e.modelId).modelName)
    throw new C("Local-GSVI 模型格式错误，期望 modelName|version", "config");
  if (!e.text.trim())
    throw new C("Local-GSVI 合成文本为空", "config");
}
function Re(e) {
  return typeof e == "object" && e !== null;
}
function Cu(e) {
  const t = e.replace(/^data:audio\/[a-zA-Z0-9.+-]+;base64,/i, "").trim();
  return t.length >= 16 && /^[A-Za-z0-9+/=\r\n]+$/.test(t);
}
function $r(e) {
  return e.trim().match(/^data:audio\/[a-zA-Z0-9.+-]+;base64,(.+)$/i)?.[1] ?? e.trim();
}
function Pu(e) {
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
    if (typeof o == "string" && Cu(o))
      return $r(o);
  return null;
}
function Ru(e) {
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
function Nu(e) {
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
function Vu(e) {
  const t = atob($r(e)), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function Fs(e) {
  const t = e?.trim() ?? "";
  return t ? { Authorization: `Bearer ${t}` } : {};
}
function Lu(e) {
  const t = fetch;
  async function n(s, i, o, r, a) {
    const l = /^https?:\/\//i.test(i) ? i : Yt(s, i);
    let p = !1;
    try {
      p = Jc(s) === new URL(l).origin;
    } catch {
      p = !1;
    }
    const m = await pt(
      t,
      l,
      {
        method: "GET",
        headers: p ? Fs(o) : {},
        signal: a
      },
      r
    );
    if (!m.ok)
      throw new C(`下载 GSVI 输出失败：HTTP ${m.status}`, "http", m.status);
    return await m.blob();
  }
  return {
    id: "local_gsvi",
    async checkHealth(s) {
      if (s.engine !== "local_gsvi")
        throw new C("Local-GSVI 适配器收到了错误的引擎请求", "config");
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
        throw new C("Local-GSVI 适配器收到了错误的引擎请求", "config");
      const i = s.baseUrl.trim();
      if (!i)
        throw new C("请先填写 Local-GSVI 服务地址", "config");
      const o = [];
      for (const r of Su) {
        const a = Yt(i, `/models/${encodeURIComponent(r)}`);
        try {
          const l = await pt(
            t,
            a,
            { method: "GET", headers: Fs(s.authToken), signal: s.signal },
            s.timeoutMs
          );
          if (!l.ok) {
            Ys("local_gsvi", `GET /models/${r} failed`, {
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
            const I = Object.keys(E).filter(Boolean).sort((F, j) => F.localeCompare(j)), O = {};
            I.forEach((F) => {
              const j = E[F];
              O[F] = Array.isArray(j) ? j.map((G) => String(G).trim()).filter(Boolean) : typeof j == "string" ? [j.trim()].filter(Boolean) : [];
            }), o.push({
              id: `${g}|${r}`,
              name: `${g} [${r}]`,
              source: "gsvi_model",
              language: I.join(","),
              languages: I,
              emotionsByLanguage: O
            });
          });
        } catch (l) {
          if (l instanceof C && l.code === "cancelled")
            throw l;
          Ys("local_gsvi", `GET /models/${r} failed`);
        }
      }
      if (o.length === 0)
        throw new C(
          "未在 /models/{v2|v3|v4|v2Pro} 中解析到模型映射，请检查接口返回结构",
          "missing_audio"
        );
      return o.sort((r, a) => r.name.localeCompare(a.name));
    },
    async synthesize(s) {
      if (s.engine !== "local_gsvi")
        throw new C("Local-GSVI 适配器收到了错误的引擎请求", "config");
      Mu(s);
      const i = Iu(s), o = {
        "Content-Type": "application/json",
        ...Fs(s.authToken)
      };
      bs("local_gsvi", "synthesize", {
        url: i.url,
        model: i.modelName,
        version: i.version,
        text: s.text
      });
      const r = await pt(
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
        throw new C(
          `Local-GSVI 请求失败：HTTP ${r.status}`,
          "http",
          r.status
        );
      if ((r.headers.get("content-type")?.toLowerCase() ?? "").includes("application/json")) {
        const l = await r.json(), p = Pu(l);
        if (p)
          return new Blob([Uint8Array.from(Vu(p))], {
            type: s.format === "wav" ? "audio/wav" : "audio/mpeg"
          });
        const m = Ru(l);
        if (m)
          return await n(
            s.baseUrl.trim(),
            m,
            s.authToken ?? "",
            s.timeoutMs,
            s.signal
          );
        throw new C(
          `Local-GSVI 未返回可用音频：${Nu(l) || "JSON 响应中未找到音频"}`,
          "missing_audio"
        );
      }
      return await r.blob();
    }
  };
}
const ku = {
  international: {
    tts: "https://api.minimaxi.com/v1/t2a_v2",
    voice: "https://api.minimaxi.com/v1/get_voice"
  },
  beijing: {
    tts: "https://api-bj.minimaxi.com/v1/t2a_v2",
    voice: "https://api-bj.minimaxi.com/v1/get_voice"
  }
}, Ou = /* @__PURE__ */ new Set([408, 409, 429, 500, 502, 503, 504]), Fu = /* @__PURE__ */ new Set([1e3, 1001, 1002, 1039]), lo = 2, Du = "tavern_multi_tts_voice_catalog_v1", $u = 1440 * 60 * 1e3;
function rs(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function si(e) {
  return e === "beijing" ? "beijing" : "international";
}
function co(e) {
  return ku[si(e)];
}
function Gr(e, t) {
  return `${Du}:${e}:${t.trim()}`;
}
function Gu(e) {
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
function uo(e) {
  return `Bearer ${rs(e)}`;
}
function Uu(e) {
  const t = e.trim(), n = new Uint8Array(t.length / 2);
  for (let s = 0; s < t.length; s += 2)
    n[s / 2] = Number.parseInt(t.slice(s, s + 2), 16);
  return n;
}
function ju(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function Bu(e) {
  const t = e.trim();
  return /^[0-9a-fA-F]+$/.test(t) && t.length % 2 === 0 ? Uu(t) : ju(t);
}
function Hu(e, t) {
  const s = `${t ?? ""} ${e}`.toLowerCase(), i = s.includes("japanese") ? "Japanese" : s.includes("english") ? "English" : s.includes("chinese") ? "Chinese" : s.includes("korean") ? "Korean" : s.includes("french") ? "French" : s.includes("german") ? "German" : s.includes("spanish") ? "Spanish" : "Unknown", o = s.includes("female") || s.includes("女") || s.includes("lady") || s.includes("girl") ? "Female" : s.includes("male") || s.includes("男") || s.includes("man") || s.includes("boy") ? "Male" : "Unknown";
  return { language: i, gender: o };
}
function Ku(e, t) {
  const n = t.trim();
  if (!n)
    return null;
  try {
    const s = localStorage.getItem(Gr(e, n));
    if (!s)
      return null;
    const i = JSON.parse(s);
    return !i?.expires_at || Date.now() > i.expires_at ? null : i.items ?? null;
  } catch {
    return null;
  }
}
function zu(e, t, n) {
  const s = t.trim();
  s && localStorage.setItem(
    Gr(e, s),
    JSON.stringify({
      expires_at: Date.now() + $u,
      items: n
    })
  );
}
function Wu(e) {
  const t = rs(e.apiKey), n = e.groupId.trim(), s = e.voiceId.trim();
  if (!t || !n || !s)
    throw new C("MiniMax 引擎缺少必要配置：API Key / Group ID / Voice ID", "config");
  if (!e.text.trim())
    throw new C("MiniMax 合成文本为空", "config");
}
function Ju(e) {
  return typeof e == "object" && e !== null;
}
function Xu(e, t) {
  return Ou.has(e) || Fu.has(t);
}
function Yu(e) {
  const t = fetch;
  return {
    id: "minimax",
    async checkHealth(n) {
      if (n.engine !== "minimax")
        throw new C("MiniMax 适配器收到了错误的引擎请求", "config");
      if (!rs(n.apiKey))
        return { ok: !1, message: "请先填写 MiniMax API Key" };
      try {
        return await this.listVoices({ ...n, forceRefresh: !0 }), { ok: !0, message: "MiniMax 服务可用" };
      } catch (i) {
        return { ok: !1, message: i instanceof Error ? i.message : String(i) };
      }
    },
    async listVoices(n) {
      if (n.engine !== "minimax")
        throw new C("MiniMax 适配器收到了错误的引擎请求", "config");
      const s = rs(n.apiKey);
      if (!s)
        throw new C("请先填写 API Key", "config");
      const i = si(n.region);
      if (!n.forceRefresh) {
        const g = Ku(i, n.groupId);
        if (g && g.length > 0)
          return g;
      }
      const o = co(i).voice, r = await pt(
        t,
        o,
        {
          method: "POST",
          headers: {
            Authorization: uo(s),
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ voice_type: "all" }),
          signal: n.signal
        },
        n.timeoutMs
      ), l = await r.json();
      if (!r.ok || (l.base_resp?.status_code ?? 0) !== 0)
        throw new C(
          l.base_resp?.status_msg ?? r.statusText ?? "拉取音色列表失败",
          "http",
          r.status
        );
      const p = [], m = (g, E = []) => {
        E.forEach((I) => {
          const O = Hu(I.voice_id, I.voice_name);
          p.push({
            id: I.voice_id,
            name: I.voice_name ?? I.voice_id,
            description: I.description,
            source: g,
            language: O.language,
            gender: O.gender
          });
        });
      };
      return m("system", l.system_voice ?? []), m("voice_cloning", l.voice_cloning ?? []), m("voice_generation", l.voice_generation ?? []), zu(i, n.groupId, p), p;
    },
    async synthesize(n) {
      if (n.engine !== "minimax")
        throw new C("MiniMax 适配器收到了错误的引擎请求", "config");
      Wu(n);
      const s = Gu(n), i = co(n.region).tts, o = {
        Authorization: uo(n.apiKey),
        "Content-Type": "application/json"
      };
      bs("minimax", "synthesize", {
        model: s.model,
        voiceId: s.voice_setting.voice_id,
        region: si(n.region),
        groupId: n.groupId.trim(),
        text: n.text
      });
      let r = null;
      for (let a = 0; a <= lo; a += 1) {
        const l = await pt(
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
        if (!Ju(p))
          throw new C("MiniMax 响应结构无效", "invalid_json");
        const m = p;
        if (!l.ok || (m.base_resp?.status_code ?? 0) !== 0) {
          const I = m.base_resp?.status_code ?? l.status, O = m.base_resp?.status_msg ?? l.statusText ?? "unknown error";
          if (r = `MiniMax 请求失败：code=${I}, msg=${O}`, Xu(l.status, I) && a < lo) {
            Ys("minimax", "retryable synthesize failure", {
              status: l.status,
              attempt: a
            }), await Xc(250 * (a + 1));
            continue;
          }
          throw new C(r, "http", l.status);
        }
        const g = m.data?.audio ?? m.data?.audio_file ?? m.audio_file;
        if (!g)
          throw new C("MiniMax 响应中未找到音频字段", "missing_audio");
        const E = Bu(g);
        return new Blob([Uint8Array.from(E)], { type: "audio/mpeg" });
      }
      throw new C(r ?? "MiniMax 请求失败：未知错误", "http");
    }
  };
}
function mn(e) {
  if (e === "minimax")
    return Yu();
  if (e === "local_gsvi")
    return Lu();
  if (e === "index_tts")
    return ru();
  if (e === "fish_audio")
    return wu();
  throw new C(`未知 TTS 引擎：${String(e)}`, "config");
}
const ii = "tavern_multi_tts_say_rule", Zu = 1, Qu = {
  system: 0,
  user: 1,
  assistant: 2
};
function qu(e) {
  const t = e.ttsEngine === "index_tts" ? e.indexTtsCharacterMappings : e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.ttsEngine === "fish_audio" ? e.fishAudioCharacterMappings : e.characterMappings, n = [];
  for (const s of t) {
    const i = s.characterName.trim();
    i && !n.includes(i) && n.push(i);
  }
  return n;
}
function ef(e) {
  return e.ttsEngine === "index_tts" ? e.indexTtsInjectTemplate : e.ttsEngine === "fish_audio" ? e.fishAudioInjectTemplate : e.injectTemplate;
}
function tf(e) {
  const t = qu(e).join("、") || "（未配置角色映射）";
  return ef(e).replaceAll("${target_characters}", t).replaceAll("${mapped_characters}", t);
}
function Ds(e, t) {
  return !t.enabled || !t.injectEnabled ? (e.deleteExtensionPrompt(ii), { applied: !1 }) : (e.setExtensionPrompt(
    ii,
    tf(t),
    Zu,
    t.injectDepth,
    !1,
    Qu[t.injectRole]
  ), { applied: !0, depth: t.injectDepth, role: t.injectRole });
}
function nf(e) {
  e.deleteExtensionPrompt(ii);
}
const Ur = [
  "喜",
  "怒",
  "哀",
  "惧",
  "厌恶",
  "低落",
  "惊喜",
  "平静"
], fo = /<say\b([^>]*)>([\s\S]*?)<\/say>/gi, $n = /([A-Za-z_]+)\s*=\s*(?:"([^"]*)"|“([^”]*)”)/gi, sf = new Set(Ur);
function of(e) {
  const t = {}, n = new RegExp($n.source, $n.flags);
  let s;
  for (; (s = n.exec(e)) !== null; ) {
    const o = s[2] ?? s[3] ?? "";
    t[s[1].toLowerCase()] = o;
  }
  return e.replace(new RegExp($n.source, $n.flags), "").trim() ? null : t;
}
function un(e) {
  console.warn(`${we} invalid say emo`, { reason: e });
}
function rf(e) {
  if (e === void 0)
    return;
  const t = e.trim();
  if (!t) {
    un("empty");
    return;
  }
  const s = t.replaceAll("：", ":").replaceAll("，", ",").split(",").map((o) => o.trim()).filter(Boolean);
  if (s.length < 1 || s.length > 3) {
    un("count");
    return;
  }
  const i = {};
  for (const o of s) {
    const r = o.indexOf(":");
    if (r <= 0 || r !== o.lastIndexOf(":")) {
      un("separator");
      return;
    }
    const a = o.slice(0, r).trim(), l = o.slice(r + 1).trim();
    if (!sf.has(a) || a in i) {
      un("name");
      return;
    }
    const p = Number(l);
    if (!Number.isFinite(p) || p <= 0 || p > 1) {
      un("value");
      return;
    }
    i[a] = p;
  }
  return i;
}
function af(e) {
  return e ? Ur.filter((t) => e[t] !== void 0).map((t) => `${t}:${e[t]}`).join(",") : "";
}
function lf(e) {
  const t = new RegExp(fo.source, fo.flags), n = [];
  let s, i = 0;
  for (; (s = t.exec(e)) !== null; ) {
    const o = s[2].trim();
    if (!o)
      continue;
    const r = of(s[1] ?? "");
    if (!r)
      continue;
    const a = r.char?.trim(), l = rf(r.emo);
    n.push({
      index: i,
      text: o,
      ...a ? { char: a } : {},
      ...l ? { emotion: l } : {}
    }), i += 1;
  }
  return n;
}
const cf = /* @__PURE__ */ new Set([
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
]), jr = /\(([a-z-]+)\)/gi, uf = /\([a-z-]+\)/gi, ff = /\[([A-Za-z][A-Za-z\s,'".!?-]{0,39})\]/g;
function Rn(e) {
  return e.replace(/\s{2,}/g, " ").trim();
}
function df(e) {
  return Rn(
    e.replace(jr, (t, n) => {
      const s = String(n).toLowerCase();
      return cf.has(s) ? `(${s})` : "";
    })
  );
}
function pf(e, t = "minimax") {
  return Rn(t === "fish_audio" ? e.replace(ff, "") : e.replace(jr, ""));
}
function mf(e) {
  return Rn(e.replace(uf, ""));
}
function hf(e, t) {
  if (t === "fish_audio")
    return Rn(e);
  const n = df(e);
  return t === "local_gsvi" || t === "index_tts" ? mf(n) : n;
}
async function gf(e, t) {
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
const Nn = "data-tavern-multi-tts-rendered", wi = "data-tavern-multi-tts-swipe", xs = "tavern-multi-tts-segment", as = "tavern-multi-tts-fallback-list";
function _f(e, t, n) {
  return `${e}:${t}:${n}`;
}
function po(e) {
  const t = e.split(":");
  if (t.length !== 3)
    return null;
  const n = Number(t[0]), s = Number(t[1]), i = Number(t[2]);
  return [n, s, i].every(Number.isFinite) ? { message_id: n, swipe_id: s, index: i } : null;
}
function Gn(e) {
  return document.querySelector(`#chat .mes[mesid="${e}"]`);
}
function vf(e) {
  return e.querySelector(".mes_text");
}
function Br(e, t) {
  const n = e.getAttribute(Nn) === "true", s = e.querySelector(`.${xs}`) !== null;
  return !n || !s ? !1 : t === void 0 ? !0 : e.getAttribute(wi) === String(t);
}
function Ot(e = document) {
  e.querySelectorAll(`.${xs}`).forEach((t) => {
    const n = t.querySelector(".tavern-multi-tts-text")?.textContent ?? "";
    t.replaceWith(document.createTextNode(n));
  }), e.querySelectorAll(`.${as}`).forEach((t) => t.remove()), e.querySelectorAll(`[${Nn}]`).forEach((t) => {
    t.removeAttribute(Nn), t.removeAttribute(wi);
  });
}
function ot(e, t) {
  e.classList.remove("is-loading", "is-ready", "is-playing", "is-error"), t !== "idle" && e.classList.add(`is-${t}`);
  const n = e.querySelector(".tavern-multi-tts-indicator");
  n && (n.textContent = t === "loading" ? "⏳" : t === "ready" ? "▶" : t === "playing" ? "⏸" : t === "error" ? "⚠" : "▶");
}
function mo(e) {
  return e.replace(/\s+/g, "").trim();
}
function yf(e, t, n, s) {
  const i = e.splitText(t);
  i.splitText(n), i.replaceWith(s);
}
function bf(e, t, n, s) {
  const i = [t, n].map((a) => a.trim()).filter(Boolean), o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let r = o.nextNode();
  for (; r; ) {
    const a = r.parentElement;
    if (a && !a.closest(`.${xs}`) && !a.closest(`.${as}`) && !a.closest(".mes_buttons")) {
      const l = r.nodeValue ?? "";
      for (const p of i) {
        const m = l.indexOf(p);
        if (m >= 0)
          return yf(r, m, p.length, s), !0;
        if (mo(l) === mo(p))
          return r.replaceWith(s), !0;
      }
    }
    r = o.nextNode();
  }
  return !1;
}
const xf = '<path d="M12 3v11m0 0 4-4m-4 4-4-4M5 21h14" />', Tf = '<path d="M20 11a8 8 0 0 0-14.9-3.8L3 10m0 0V4m0 6h6M4 13a8 8 0 0 0 14.9 3.8L21 14m0 0v6m0-6h-6" />';
function ho(e, t) {
  const n = document.createElement("button");
  return n.type = "button", n.className = "tavern-multi-tts-action", n.setAttribute("aria-label", e), n.title = e, n.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${t}</svg>`, n;
}
function wf(e, t, n, s, i, o, r) {
  const a = _f(e, t, n.index), l = document.createElement("span");
  l.className = xs, l.dataset.tavernMultiTtsKey = a;
  const p = document.createElement("span");
  p.className = "tavern-multi-tts-text", p.textContent = s;
  const m = document.createElement("span");
  m.className = "tavern-multi-tts-indicator", m.textContent = "▶";
  const g = document.createElement("span");
  g.className = "tavern-multi-tts-actions";
  const E = ho("下载这句语音", xf), I = ho("重新生成这句语音", Tf);
  g.append(E, I), l.append(p, m, g), ot(l, "idle");
  let O = r.get(a) ?? null;
  const F = async (w = {}) => {
    ot(l, "loading");
    try {
      const ne = await o.ensureAudio(n, s, i, w);
      return ne.cancelled ? null : ne.blob ? (ot(l, "ready"), ne.blob) : (ot(l, "error"), null);
    } catch {
      return ot(l, "error"), null;
    }
  }, j = () => {
    O?.stop(), O = null, r.delete(a);
  }, G = async () => {
    const w = await F();
    w && (j(), O = Er(
      w,
      () => ot(l, "playing"),
      () => {
        O = null, r.delete(a), ot(l, "ready");
      },
      () => {
        O = null, r.delete(a), ot(l, "error");
      },
      () => ot(l, "ready")
    ), r.set(a, O));
  }, P = async () => {
    j(), await F({ force: !0 });
  }, B = async () => {
    if (!O)
      return;
    const w = O.getState();
    if (w === "playing") {
      O.pause();
      return;
    }
    if (w === "paused")
      try {
        await O.resume();
      } catch {
      }
  };
  return l.addEventListener("click", (w) => {
    const ne = w.target;
    if (ne?.closest(".tavern-multi-tts-indicator")) {
      B();
      return;
    }
    ne?.closest(".tavern-multi-tts-action") || G();
  }), E.addEventListener("click", (w) => {
    w.preventDefault(), w.stopPropagation(), (async () => {
      const ne = await F();
      ne && o.downloadAudio(ne, e, n.index);
    })();
  }), I.addEventListener("click", (w) => {
    w.preventDefault(), w.stopPropagation(), P();
  }), l;
}
function Sf(e, t, n, s, i, o = 0) {
  if (Br(e, o))
    return 0;
  e.getAttribute(Nn) === "true" && Ot(e);
  const r = vf(e) ?? e, a = [];
  let l = 0;
  for (const p of n) {
    if (!p.displayText || !p.ttsText)
      continue;
    const m = wf(
      t,
      o,
      p,
      p.displayText,
      p.ttsText,
      s,
      i
    );
    bf(r, p.text, p.displayText, m) ? l += 1 : a.push(m);
  }
  if (r.querySelectorAll(`.${as}`).forEach((p) => p.remove()), a.length > 0) {
    const p = document.createElement("div");
    p.className = as, a.forEach((m) => p.append(m, document.createTextNode(" "))), r.append(p), l += a.length;
  }
  return l > 0 && (e.setAttribute(Nn, "true"), e.setAttribute(wi, String(o))), l;
}
function Et(e, t) {
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const s = e[n];
    if (s && t(s))
      return s;
  }
}
function Hr(e, t) {
  return e.characterName.trim() === t && !!e.minimaxVoiceId.trim();
}
function Kr(e, t) {
  return e.characterName.trim() === t && !!e.gsviVoiceId.trim() && !!e.gsviLanguage.trim() && !!e.gsviEmotion.trim();
}
function zr(e, t) {
  return e.characterName.trim() === t && !!e.indexTtsVoiceId.trim() && !!e.indexTtsLanguage;
}
function Wr(e, t) {
  return e.characterName.trim() === t && !!e.fishAudioReferenceId.trim();
}
function Jr(e, t) {
  const n = t?.trim() ?? "";
  return n ? e.ttsEngine === "index_tts" ? !!Et(
    e.indexTtsCharacterMappings,
    (s) => zr(s, n)
  ) : e.ttsEngine === "fish_audio" ? !!Et(
    e.fishAudioCharacterMappings,
    (s) => Wr(s, n)
  ) : e.ttsEngine === "local_gsvi" ? !!Et(
    e.gsviCharacterMappings,
    (s) => Kr(s, n)
  ) : e.ttsEngine === "minimax" ? !!Et(e.characterMappings, (s) => Hr(s, n)) : !1 : !0;
}
function Xr(e, t) {
  const n = t?.trim() ?? "";
  if (e.ttsEngine === "index_tts") {
    const i = Et(
      e.indexTtsCharacterMappings,
      (o) => zr(o, n)
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
        (o) => Wr(o, n)
      )?.fishAudioReferenceId.trim() || e.fishAudioReferenceId.trim()
    };
  if (e.ttsEngine === "local_gsvi") {
    const i = Et(
      e.gsviCharacterMappings,
      (o) => Kr(o, n)
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
      (i) => Hr(i, n)
    )?.minimaxVoiceId?.trim() || e.voiceId.trim() || e.voiceCatalogSelectedId.trim()
  };
}
function Yr(e, t, n, s) {
  if (!Jr(e, n))
    return null;
  const i = Xr(e, n);
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
  } : null : e.ttsEngine === "fish_audio" ? {
    engine: "fish_audio",
    text: "catalog",
    apiKey: e.fishAudioApiKey,
    model: e.fishAudioModel,
    referenceId: e.fishAudioReferenceId.trim(),
    speed: e.fishAudioSpeed,
    volume: e.fishAudioVolume,
    timeoutMs: e.requestTimeoutMs
  } : e.ttsEngine === "local_gsvi" ? e.localGsviBaseUrl.trim() ? {
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
function Ef(e, t, n, s) {
  const i = Xr(e, n);
  return e.ttsEngine === "index_tts" ? {
    text: t,
    engine: "index_tts",
    indexTts: {
      origin: so(e.indexTtsBaseUrl),
      model: kr,
      voiceId: i.indexTtsVoiceId ?? "",
      language: i.indexTtsLanguage ?? e.indexTtsLanguage,
      format: "wav",
      durationFactor: e.indexTtsDurationFactor,
      emoWeight: e.indexTtsEmoWeight,
      emotion: af(s)
    }
  } : e.ttsEngine === "fish_audio" ? {
    text: t,
    engine: "fish_audio",
    fishAudio: {
      origin: Or,
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
      origin: so(e.localGsviBaseUrl),
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
const go = 15;
function Af(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = [];
  let o = !1, r = !1, a = 0;
  function l() {
    return e.getSettings();
  }
  function p() {
    r || !document.querySelector(".minimax-tts-segment") || (r = !0, e.warn?.("检测到旧酒馆助手 Multi-TTS 仍在装饰消息。请只启用其中一个，避免重复生成。"));
  }
  function m(R) {
    return Lr(R) && R.code === "cancelled";
  }
  function g(R, D) {
    return n.get(R)?.token === D;
  }
  function E(R) {
    for (const [D, X] of n)
      R(X) && (X.controller.abort(), n.delete(D));
  }
  function I() {
    E(() => !0);
  }
  function O(R, D) {
    E(
      (X) => X.message_id === R && (D === void 0 || X.swipe_id !== D)
    );
  }
  function F(R, D, X) {
    n.get(R)?.controller.abort(), a += 1;
    const z = {
      token: a,
      message_id: D,
      swipe_id: X,
      controller: new AbortController()
    };
    return n.set(R, z), z;
  }
  function j(R, D) {
    g(R, D) && n.delete(R);
  }
  async function G(R, D, X, q, z, ye, Ue = {}) {
    const te = F(R, D, X);
    try {
      const ve = l(), Ce = Yr(ve, q, z, ye);
      if (!Ce)
        return { blob: null };
      Ce.signal = te.controller.signal;
      const Le = Ef(ve, q, z, ye), Se = await pc(Le);
      if (!g(R, te.token) || te.controller.signal.aborted)
        return { cancelled: !0 };
      if (!Ue.force) {
        const h = s.get(Se);
        if (h)
          return { blob: h };
        const v = await yc(Se);
        if (!g(R, te.token) || te.controller.signal.aborted)
          return { cancelled: !0 };
        if (v)
          return s.set(Se, v), { blob: v };
      }
      const f = await mn(Ce.engine).synthesize(Ce);
      return f && (await bc(Se, f), s.set(Se, f)), !g(R, te.token) || te.controller.signal.aborted ? { cancelled: !0 } : { blob: f };
    } catch (ve) {
      return m(ve) || !g(R, te.token) || te.controller.signal.aborted ? { cancelled: !0 } : (console.error(`${we} synthesize failed`), { blob: null });
    } finally {
      j(R, te.token);
    }
  }
  function P(R, D) {
    if (typeof R.swipe_id == "number" && Number.isFinite(R.swipe_id))
      return R.swipe_id;
    const X = Number(D?.getAttribute("swipeid"));
    return Number.isFinite(X) ? X : 0;
  }
  function B(R, D) {
    for (const [X, q] of t) {
      const z = po(X);
      z && z.message_id === R && z.swipe_id !== D && (q.stop(), t.delete(X));
    }
  }
  function w(R) {
    for (const [D, X] of t) {
      const q = po(D);
      q && q.message_id === R && (X.stop(), t.delete(D));
    }
  }
  function ne(R, D, X) {
    if (typeof R.swipe_id != "number" || !Number.isFinite(R.swipe_id))
      return !0;
    const q = D.getAttribute("swipeid");
    if (q === null || q === "")
      return !0;
    const z = Number(q);
    return Number.isFinite(z) && z === X && z === R.swipe_id;
  }
  function Ae(R, D) {
    O(R, D), B(R, D);
    const X = e.findMessageElement(R) ?? Gn(R);
    X && Ot(X);
  }
  function pe(R, D = {}) {
    const X = D.attempt ?? 0, q = l();
    if (!q.enabled)
      return;
    const z = e.getChatMessage(R);
    if (!z || z.is_user || z.is_system)
      return;
    const ye = typeof z.mes == "string" ? z.mes : "", Ue = lf(ye).filter(
      (ue) => Jr(q, ue.char)
    ), te = e.findMessageElement(R) ?? Gn(R);
    if (Ue.length === 0) {
      te && Ot(te);
      return;
    }
    if (!te) {
      X < go && window.setTimeout(() => pe(R, { ...D, attempt: X + 1 }), 120);
      return;
    }
    const ve = P(z, te);
    if (!ne(z, te, ve)) {
      X < go && window.setTimeout(() => pe(R, { ...D, attempt: X + 1 }), 120);
      return;
    }
    if (Br(te, ve))
      return;
    te.getAttribute("data-tavern-multi-tts-rendered") === "true" && Ot(te), B(R, ve), p();
    const Ce = Ue.map((ue) => ({
      ...ue,
      displayText: pf(ue.text, q.ttsEngine),
      ttsText: hf(ue.text, q.ttsEngine)
    })), Le = [], Se = (ue) => D.skipPrefetch ? !1 : q.prefetchMode === "auto_all" ? !0 : q.prefetchMode === "auto_first_n" ? ue < q.prefetchFirstCount : !1;
    Sf(
      te,
      R,
      Ce,
      {
        ensureAudio: async (ue, f, h, v) => {
          const T = `${R}:${ve}:${ue.index}`;
          return await G(
            T,
            R,
            ve,
            h,
            ue.char,
            ue.emotion,
            v
          );
        },
        downloadAudio(ue, f, h) {
          wc(ue, Tc(f, h));
        }
      },
      t,
      ve
    ), Ce.forEach((ue, f) => {
      Se(f) && ue.ttsText && Le.push(async () => {
        const h = `${R}:${ve}:${ue.index}`;
        try {
          await G(
            h,
            R,
            ve,
            ue.ttsText,
            ue.char,
            ue.emotion
          );
        } catch {
        }
      });
    }), Le.length > 0 && gf(Le, q.maxConcurrency);
  }
  function $e(...R) {
    const D = Number(R[0]);
    Number.isFinite(D) && window.setTimeout(() => pe(D), 0);
  }
  function Ct(...R) {
    const D = Number(R[0]);
    if (!Number.isFinite(D))
      return;
    O(D);
    const X = e.findMessageElement(D) ?? Gn(D);
    X && Ot(X), w(D), window.setTimeout(() => pe(D), 0);
  }
  function Pt(...R) {
    const D = Number(R[0]);
    if (!Number.isFinite(D))
      return;
    const X = e.findMessageElement(D) ?? Gn(D), q = e.getChatMessage(D), z = q ? P(q, X) : 0;
    Ae(D, z), window.setTimeout(() => pe(D, { skipPrefetch: !0 }), 0);
  }
  function We(R = {}) {
    document.querySelectorAll("#chat .mes[mesid]").forEach((D) => {
      const X = Number(D.getAttribute("mesid"));
      Number.isFinite(X) && pe(X, R);
    });
  }
  function Ge(R, D) {
    e.eventSource.on(R, D), i.push(() => e.eventSource.removeListener(R, D));
  }
  function an() {
    o || (o = !0, Ds(e, l()), Ge(e.eventNames.messageReceived, $e), Ge(e.eventNames.messageRendered, $e), Ge(e.eventNames.messageUpdated, Ct), Ge(e.eventNames.messageSwiped, Pt), Ge(e.eventNames.moreMessagesLoaded, () => {
      We({ skipPrefetch: !0 });
    }), Ge(e.eventNames.chatChanged, () => {
      I(), t.forEach((R) => R.stop()), t.clear(), Xn(), Ds(e, l()), We({ skipPrefetch: !0 });
    }), We({ skipPrefetch: !0 }), console.info(`${we} chat runtime started`));
  }
  function Rt() {
    i.splice(0).forEach((R) => R()), I(), t.forEach((R) => R.stop()), t.clear(), s.clear(), Xn(), nf(e), Ot(document), o = !1, console.info(`${we} chat runtime stopped`);
  }
  function jt() {
    I(), t.forEach((R) => R.stop()), t.clear(), Xn(), Ot(document);
  }
  function vt() {
    Ds(e, l());
  }
  function yt() {
    jt(), l().enabled && We({ skipPrefetch: !0 });
  }
  function Nt() {
    vt(), yt();
  }
  return { start: an, stop: Rt, syncFromSettings: Nt, syncInjection: vt, refreshDecorations: yt, decorate: pe };
}
function wt(e) {
  return typeof e == "object" && e !== null;
}
function If(e) {
  if (wt(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function Mf(e) {
  return !wt(e) || typeof e.getContext != "function" ? null : e;
}
function Cf(e) {
  if (!wt(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!wt(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = If(e.eventSource), n = wt(e.eventTypes) ? e.eventTypes : wt(e.event_types) ? e.event_types : void 0, s = n ? {
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
    extensionPrompts: wt(e.extensionPrompts) ? e.extensionPrompts : void 0
  };
}
function Zr() {
  const e = Mf(globalThis.SillyTavern);
  if (!e)
    throw new Error("SillyTavern.getContext() 不可用。请在 SillyTavern 中加载此扩展");
  return Cf(e.getContext());
}
function Qr() {
  const e = Zr();
  return {
    readRawSettings() {
      return e.extensionSettings[Ls];
    },
    writeSettings(t) {
      e.extensionSettings[Ls] = t, e.saveSettingsDebounced();
    },
    removeSettings() {
      delete e.extensionSettings[Ls], e.saveSettingsDebounced();
    },
    findSettingsRoot: Kc,
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
function Pf(e) {
  return wt(e) ? {
    mes: typeof e.mes == "string" ? e.mes : void 0,
    is_user: typeof e.is_user == "boolean" ? e.is_user : void 0,
    is_system: typeof e.is_system == "boolean" ? e.is_system : void 0,
    swipe_id: typeof e.swipe_id == "number" ? e.swipe_id : void 0
  } : null;
}
function Rf(e) {
  const t = Zr();
  if (!t.eventSource)
    throw new Error("SillyTavern eventSource 不可用，无法监听消息事件");
  const n = t.eventSource;
  return {
    getSettings: e,
    getChatMessage(s) {
      return Array.isArray(t.chat) ? Pf(t.chat[s]) : null;
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
        i.warning(s, we);
        return;
      }
      console.warn(`${we} ${s}`);
    }
  };
}
function Nf(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    const s = n.trim();
    s && t.set(s, (t.get(s) ?? 0) + 1);
  }), [...t.entries()].filter(([, n]) => n > 1).map(([n]) => n);
}
function Un(e) {
  return [...e].sort((t, n) => t.name.localeCompare(n.name));
}
function jn(e, t, n, s) {
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
function Bn(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.find((i) => i.name === n);
  return s ? { mappings: [...s.mappings] } : { error: `未找到存档：${n}` };
}
function Hn(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.filter((i) => i.name !== n);
  return s.length === e.length ? { error: `未找到存档：${n}` } : { presets: s, message: `已删除存档：${n}` };
}
const Vf = {
  ja: "おはようございます。これは Tavern Multi-TTS のテスト音声です。",
  zh: "你好，这是 Tavern Multi-TTS 的测试语音。",
  en: "Hello, this is a Tavern Multi-TTS test voice."
}, Lf = {
  ja: "こんにちは、これは GSVI の音声参照用サンプルです。",
  zh: "你好，这是一段 GSVI 的语音参考音频。",
  en: "Hello, this is a GSVI reference voice sample."
}, kf = {
  ja: "こんにちは、これは IndexTTS のテスト音声です。",
  zh: "你好，这是 IndexTTS 的测试语音。",
  en: "Hello, this is an IndexTTS test voice."
}, Of = {
  ja: "こんにちは、これは Fish Audio のテスト音声です。",
  zh: "你好，这是 Fish Audio 的测试语音。",
  en: "Hello, this is a Fish Audio test voice."
}, Ff = [
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
], Df = [
  "不切",
  "凑四句一切",
  "凑50字一切",
  "按中文句号。切",
  "按英文句号.切",
  "按标点符号切"
];
function $f(e, t) {
  return e === "local_gsvi" ? Lf[t] : e === "index_tts" ? kf[t] : e === "fish_audio" ? Of[t] : Vf[t];
}
function Gf() {
  return {
    search: "",
    language: "all",
    gender: "all",
    source: "all"
  };
}
function Kn() {
  return {
    voices: [],
    filter: Gf()
  };
}
function _o() {
  return {
    minimax: Kn(),
    local_gsvi: Kn(),
    index_tts: Kn(),
    fish_audio: Kn()
  };
}
function Uf(e, t) {
  return t === "minimax" ? e.minimax : t === "local_gsvi" ? e.local_gsvi : t === "index_tts" ? e.index_tts : e.fish_audio;
}
function vo(e, t, n) {
  const s = Uf(e, t);
  return s.voices = [...n], e;
}
function jf(e) {
  return [
    ...new Set(e.map((t) => t.language).filter((t) => !!t))
  ].sort();
}
function Bf(e, t) {
  const n = t.search.trim().toLowerCase();
  return e.filter((s) => t.language !== "all" && s.language !== t.language || t.gender !== "all" && s.gender !== t.gender || t.source !== "all" && s.source !== t.source ? !1 : n ? [s.id, s.name, ...s.description ?? []].join(" ").toLowerCase().includes(n) : !0);
}
function yo(e) {
  const t = [e.language, e.gender, e.source].filter(Boolean);
  return t.length > 0 ? `${e.name} (${t.join(" / ")})` : e.name;
}
function bo(e) {
  return e?.languages ?? [];
}
function xo(e, t) {
  const n = t.trim();
  return !e || !n ? [] : e.emotionsByLanguage?.[n] ?? [];
}
function To(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(2)} MB`;
}
const Hf = ["data-color-scheme"], Kf = { class: "inline-drawer" }, zf = { class: "inline-drawer-toggle inline-drawer-header" }, Wf = { class: "inline-drawer-content" }, Jf = { class: "mtts-card" }, Xf = { class: "mtts-card-head" }, Yf = { class: "mtts-title" }, Zf = { class: "mtts-version" }, Qf = ["title"], qf = { class: "mtts-enable" }, ed = {
  class: "mtts-tabs",
  role: "tablist",
  "aria-label": "TTS 引擎"
}, td = ["aria-selected"], nd = ["aria-selected"], sd = ["aria-selected"], id = ["aria-selected"], od = {
  class: "mtts-section",
  "aria-labelledby": "mtts-service-title"
}, rd = { class: "mtts-field" }, ad = { class: "mtts-grid" }, ld = { class: "mtts-field" }, cd = { class: "mtts-field" }, ud = { class: "mtts-field" }, fd = { class: "mtts-actions" }, dd = ["disabled"], pd = ["disabled"], md = {
  key: 0,
  class: "mtts-fold"
}, hd = { class: "mtts-fold-body" }, gd = { class: "mtts-grid" }, _d = { class: "mtts-field" }, vd = { class: "mtts-field" }, yd = ["value"], bd = { class: "mtts-field" }, xd = { class: "mtts-field" }, Td = { class: "mtts-field" }, wd = ["value"], Sd = { value: "" }, Ed = ["value"], Ad = { class: "mtts-control-row" }, Id = { class: "mtts-field" }, Md = ["disabled"], Cd = { class: "mtts-grid" }, Pd = { class: "mtts-field" }, Rd = { value: "" }, Nd = ["value"], Vd = ["value"], Ld = { class: "mtts-field" }, kd = ["value"], Od = { class: "mtts-field" }, Fd = { class: "mtts-field" }, Dd = ["value"], $d = { class: "mtts-field" }, Gd = { id: "fish-audio-voice-suggestions" }, Ud = ["value"], jd = { class: "mtts-actions" }, Bd = ["disabled"], Hd = ["disabled"], Kd = { class: "mtts-control-row" }, zd = { class: "mtts-field" }, Wd = ["disabled"], Jd = { class: "mtts-grid" }, Xd = { class: "mtts-field" }, Yd = { value: "" }, Zd = ["value"], Qd = { class: "mtts-field" }, qd = ["value"], ep = { class: "mtts-field" }, tp = ["value"], np = { class: "mtts-actions" }, sp = { class: "mtts-field" }, ip = ["disabled"], op = {
  class: "mtts-section",
  "aria-labelledby": "mtts-mapping-title"
}, rp = { class: "mtts-section-head" }, ap = {
  id: "mtts-mapping-title",
  class: "mtts-section-title"
}, lp = { class: "mtts-count" }, cp = {
  key: 0,
  class: "mtts-empty"
}, up = { class: "mtts-field" }, fp = ["onUpdate:modelValue"], dp = { class: "mtts-field" }, pp = ["onUpdate:modelValue"], mp = {
  key: 0,
  class: "mtts-field"
}, hp = ["value", "onChange"], gp = ["value"], _p = { class: "mtts-mapping-actions" }, vp = ["disabled", "onClick"], yp = ["onClick"], bp = { class: "mtts-field" }, xp = ["onUpdate:modelValue"], Tp = { class: "mtts-grid" }, wp = { class: "mtts-field" }, Sp = ["onUpdate:modelValue"], Ep = { value: "" }, Ap = ["value"], Ip = ["value"], Mp = { class: "mtts-field" }, Cp = ["onUpdate:modelValue"], Pp = ["value"], Rp = { class: "mtts-mapping-actions" }, Np = ["disabled", "onClick"], Vp = ["onClick"], Lp = { class: "mtts-field" }, kp = ["onUpdate:modelValue"], Op = { class: "mtts-field" }, Fp = ["onUpdate:modelValue"], Dp = { class: "mtts-mapping-actions" }, $p = ["disabled", "onClick"], Gp = ["onClick"], Up = { class: "mtts-field" }, jp = ["onUpdate:modelValue"], Bp = { class: "mtts-grid" }, Hp = { class: "mtts-field" }, Kp = ["onUpdate:modelValue"], zp = { value: "" }, Wp = ["value"], Jp = { class: "mtts-field" }, Xp = ["onUpdate:modelValue"], Yp = ["value"], Zp = { class: "mtts-field" }, Qp = ["onUpdate:modelValue"], qp = ["value"], em = { class: "mtts-mapping-actions" }, tm = ["disabled", "onClick"], nm = ["onClick"], sm = {
  key: 4,
  class: "mtts-hint"
}, im = { class: "mtts-fold" }, om = { class: "mtts-fold-body" }, rm = { class: "mtts-field" }, am = { class: "mtts-field" }, lm = ["value"], cm = { class: "mtts-actions" }, um = ["disabled"], fm = ["disabled"], dm = { class: "mtts-fold" }, pm = { class: "mtts-fold-body" }, mm = { class: "mtts-enable" }, hm = { class: "mtts-field" }, gm = { class: "mtts-label" }, _m = { class: "mtts-field" }, vm = { class: "mtts-field" }, ym = { class: "mtts-fold" }, bm = { class: "mtts-fold-body" }, xm = { class: "mtts-field" }, Tm = {
  key: 0,
  class: "mtts-grid"
}, wm = {
  key: 0,
  class: "mtts-field"
}, Sm = { class: "mtts-field" }, Em = { class: "mtts-hint" }, Am = { class: "mtts-actions" }, Im = ["disabled"], Mm = ["disabled"], Cm = { class: "mtts-fold" }, Pm = { class: "mtts-fold-body" }, Rm = { class: "mtts-field" }, Nm = ["value"], Vm = { class: "mtts-field" }, Lm = { class: "mtts-label" }, km = { class: "mtts-field" }, Om = { class: "mtts-label" }, Fm = { class: "mtts-field" }, Dm = { class: "mtts-label" }, $m = { class: "mtts-field" }, Gm = { class: "mtts-grid" }, Um = { class: "mtts-field" }, jm = ["value"], Bm = { class: "mtts-field" }, Hm = ["value"], Km = { class: "mtts-field" }, zm = { class: "mtts-label" }, Wm = { class: "mtts-field" }, Jm = { class: "mtts-label" }, Xm = { class: "mtts-field" }, Ym = { class: "mtts-label" }, Zm = { class: "mtts-field" }, Qm = { class: "mtts-label" }, qm = { class: "mtts-field" }, eh = { class: "mtts-label" }, th = /* @__PURE__ */ Xa({
  __name: "settings-panel",
  props: {
    displayName: {},
    version: {},
    settings: {},
    onSettingsChange: { type: Function }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ vn(Xt(t.settings)), s = /* @__PURE__ */ it(""), i = /* @__PURE__ */ it(!1), o = /* @__PURE__ */ it(!1), r = /* @__PURE__ */ vn(_o()), a = /* @__PURE__ */ it(""), l = /* @__PURE__ */ it(""), p = /* @__PURE__ */ it(0), m = /* @__PURE__ */ it(0), g = /* @__PURE__ */ it("saved"), E = /* @__PURE__ */ it("light"), I = /* @__PURE__ */ vn({
      minimax: { kind: "unchecked", detail: "" },
      local_gsvi: { kind: "unchecked", detail: "" },
      index_tts: { kind: "unchecked", detail: "" },
      fish_audio: { kind: "unchecked", detail: "" }
    });
    let O, F = !0, j = null;
    const G = ge(() => n.ttsEngine === "minimax"), P = ge(() => n.ttsEngine === "local_gsvi"), B = ge(() => n.ttsEngine === "index_tts"), w = ge(() => n.ttsEngine === "fish_audio"), ne = ge(() => r.minimax.voices), Ae = ge(() => r.local_gsvi.voices), pe = ge(() => r.index_tts.voices), $e = ge(() => r.fish_audio.voices), Ct = ge(
      () => Bf(r.minimax.voices, r.minimax.filter)
    ), Pt = ge(() => jf(r.minimax.voices)), We = ge(
      () => r.local_gsvi.voices.find((_) => _.id === n.localGsviModel)
    ), Ge = ge(() => bo(We.value)), an = ge(
      () => xo(We.value, n.localGsviLanguage)
    ), Rt = ge(() => B.value ? n.indexTtsCharacterMappings.length : w.value ? n.fishAudioCharacterMappings.length : P.value ? n.gsviCharacterMappings.length : n.characterMappings.length), jt = ge(() => B.value ? Un(n.indexTtsCharacterMappingPresets) : w.value ? Un(n.fishAudioCharacterMappingPresets) : P.value ? Un(n.gsviCharacterMappingPresets) : Un(n.characterMappingPresets)), vt = ge(
      () => Nf(
        (B.value ? n.indexTtsCharacterMappings : P.value ? n.gsviCharacterMappings : w.value ? n.fishAudioCharacterMappings : n.characterMappings).map((_) => _.characterName)
      )
    ), yt = ge(() => G.value ? "试听默认音色（消耗额度）" : P.value ? "试听默认模型" : w.value ? "试听默认音色（消耗额度）" : "试听默认音色"), Nt = ge(() => To(m.value)), R = ge(() => B.value ? "IndexTTS" : P.value ? "GSVI" : w.value ? "Fish Audio" : "MiniMax"), D = ge(() => I[n.ttsEngine]), X = ge(() => {
      const _ = D.value;
      return w.value ? _.kind === "connecting" ? "Fish Bridge：连接中" : _.kind === "online" ? _.detail ? `Fish Bridge：已连接 · ${_.detail}` : "Fish Bridge：已连接" : _.kind === "offline" ? _.detail || "Fish Bridge：不可用" : "Fish Bridge：尚未检查" : _.kind === "connecting" ? "正在连接" : _.kind === "online" ? _.detail ? `${R.value} 在线 · ${_.detail}` : `${R.value} 在线` : _.kind === "offline" ? _.detail ? `服务离线 · ${_.detail}` : "服务离线" : "尚未检查";
    }), q = ge(() => g.value === "saving" ? "正在保存…" : g.value === "error" ? "保存失败，请重试" : "✓ 所有修改已自动保存");
    Ka(
      n,
      () => {
        try {
          if (t.onSettingsChange(Xt(n)), F) {
            F = !1, g.value = "saved";
            return;
          }
          g.value = "saving", window.clearTimeout(O), O = window.setTimeout(() => {
            g.value = "saved";
          }, 180);
        } catch {
          g.value = "error";
        }
      },
      { deep: !0 }
    );
    function z(_, c = !1) {
      s.value = _, i.value = c;
    }
    function ye(_, c = "") {
      I[n.ttsEngine] = { kind: _, detail: c };
    }
    function Ue(_) {
      n.ttsEngine = _;
    }
    function te(_) {
      return _.replaceAll("存档", "方案");
    }
    function ve() {
      E.value = Ce();
    }
    function Ce() {
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
    function Le(_, c) {
      if (Lr(_)) {
        z(_.message, !0);
        return;
      }
      z(_ instanceof Error ? _.message : c, !0);
    }
    function Se() {
      return n.characterMappings.map((_) => ({
        characterName: _.characterName.trim(),
        minimaxVoiceId: _.minimaxVoiceId.trim()
      })).filter((_) => _.characterName && _.minimaxVoiceId);
    }
    function ue() {
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
        o.value = !0, c && z(c);
        try {
          await _();
        } catch (J) {
          Le(J, d);
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
            const J = v();
            ye("offline", J), z(J, !0);
            return;
          }
          c.engine === "minimax" && (c.forceRefresh = _);
          const d = n.ttsEngine;
          try {
            const J = await mn(d).listVoices(c);
            vo(r, d, J);
            const N = T(J.length);
            ye("online", N), z(N);
          } catch (J) {
            throw ye("offline"), J;
          }
        },
        "",
        "拉取列表失败"
      );
    }
    function M(_) {
      n.voiceId = _, n.voiceCatalogSelectedId = _;
    }
    function A() {
      if (G.value) {
        n.characterMappings.push({ characterName: "", minimaxVoiceId: "" });
        return;
      }
      if (P.value) {
        n.gsviCharacterMappings.push({
          characterName: "",
          gsviVoiceId: "",
          gsviLanguage: "",
          gsviEmotion: ""
        });
        return;
      }
      if (w.value) {
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
    function S(_) {
      if (G.value) {
        n.characterMappings.splice(_, 1);
        return;
      }
      if (P.value) {
        n.gsviCharacterMappings.splice(_, 1);
        return;
      }
      if (w.value) {
        n.fishAudioCharacterMappings.splice(_, 1);
        return;
      }
      n.indexTtsCharacterMappings.splice(_, 1);
    }
    function x() {
      const _ = a.value, c = jt.value.some((J) => J.name === _.trim());
      if (c && !window.confirm(`方案「${_.trim()}」已存在，要覆盖吗？`))
        return;
      const d = G.value ? jn(n.characterMappingPresets, _, Se(), c) : P.value ? jn(n.gsviCharacterMappingPresets, _, ue(), c) : w.value ? jn(
        n.fishAudioCharacterMappingPresets,
        _,
        h(),
        c
      ) : jn(
        n.indexTtsCharacterMappingPresets,
        _,
        f(),
        c
      );
      if ("error" in d) {
        z(te(d.error), !0);
        return;
      }
      G.value ? n.characterMappingPresets = d.presets : P.value ? n.gsviCharacterMappingPresets = d.presets : w.value ? n.fishAudioCharacterMappingPresets = d.presets : n.indexTtsCharacterMappingPresets = d.presets, l.value = _.trim(), z(te(d.message));
    }
    function H() {
      const _ = G.value ? Bn(n.characterMappingPresets, l.value) : P.value ? Bn(n.gsviCharacterMappingPresets, l.value) : w.value ? Bn(n.fishAudioCharacterMappingPresets, l.value) : Bn(n.indexTtsCharacterMappingPresets, l.value);
      if ("error" in _) {
        z(te(_.error), !0);
        return;
      }
      (G.value ? Se().length > 0 : P.value ? ue().length > 0 : w.value ? h().length > 0 : f().length > 0) && !window.confirm("载入方案会覆盖当前映射，确定继续吗？") || (G.value ? n.characterMappings = _.mappings : P.value ? n.gsviCharacterMappings = _.mappings : w.value ? n.fishAudioCharacterMappings = _.mappings : n.indexTtsCharacterMappings = _.mappings, z(`已载入方案：${l.value}`));
    }
    function V() {
      if (!window.confirm(`确定删除方案「${l.value}」吗？`))
        return;
      const _ = G.value ? Hn(n.characterMappingPresets, l.value) : P.value ? Hn(n.gsviCharacterMappingPresets, l.value) : w.value ? Hn(n.fishAudioCharacterMappingPresets, l.value) : Hn(n.indexTtsCharacterMappingPresets, l.value);
      if ("error" in _) {
        z(te(_.error), !0);
        return;
      }
      G.value ? n.characterMappingPresets = _.presets : P.value ? n.gsviCharacterMappingPresets = _.presets : w.value ? n.fishAudioCharacterMappingPresets = _.presets : n.indexTtsCharacterMappingPresets = _.presets, l.value = "", z(te(_.message));
    }
    async function $() {
      if (n.ttsEngine === "fish_audio") {
        await y(
          async () => {
            ye("connecting");
            const _ = $s(n);
            if (!_ || _.engine !== "fish_audio") {
              const d = "请先填写 Fish Audio API Key";
              ye("offline", d), z(d, !0);
              return;
            }
            const c = await mn("fish_audio").checkHealth(_);
            ye(c.ok ? "online" : "offline", c.message), z(c.message, !c.ok);
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
            ye("offline", d), z(d, !0);
            return;
          }
          const c = mn("index_tts");
          try {
            const d = await c.checkHealth(_);
            if (!d.ok) {
              ye("offline", d.message), z(d.message, !0);
              return;
            }
            try {
              const J = await c.listVoices(_);
              vo(r, "index_tts", J);
              const N = T(J.length);
              ye("online", N), z(d.message);
            } catch (J) {
              ye("online", d.message), Le(J, "拉取音色失败");
            }
          } catch (d) {
            throw ye("offline"), d;
          }
        },
        "",
        "检查 IndexTTS 连接失败"
      );
    }
    async function K(_) {
      await y(
        async () => {
          const c = $f(n.ttsEngine, n.testLanguage), d = Yr(n, c, _);
          if (!d) {
            z(
              _ ? `角色「${_}」未完整映射，无法测试` : "请先补全当前引擎的默认音色/模型后再测试",
              !0
            );
            return;
          }
          const J = await mn(n.ttsEngine).synthesize(d);
          Er(J), z(_ ? `正在试听「${_}」` : "正在试听默认音色");
        },
        "正在合成测试语音…",
        "测试语音失败"
      );
    }
    async function Q() {
      await y(
        async () => {
          const _ = await xc();
          p.value = _.count, m.value = _.totalBytes, z(`缓存 ${_.count} 条，${To(_.totalBytes)}`);
        },
        "正在读取缓存…",
        "读取缓存失败"
      );
    }
    async function re() {
      window.confirm("确定清空本扩展的音频缓存吗？") && await y(
        async () => {
          await Sr(), p.value = 0, m.value = 0, z("已清空音频缓存");
        },
        "正在清空缓存…",
        "清空缓存失败"
      );
    }
    function se() {
      window.confirm("确定恢复默认设置吗？当前映射和密钥都会被清空。") && (Object.assign(n, Xt(gt)), Object.assign(r, _o()), z("已恢复默认设置"));
    }
    function he() {
      Ge.value.includes(n.localGsviLanguage) || (n.localGsviLanguage = "", n.localGsviEmotion = "");
    }
    function xe(_) {
      return bo(r.local_gsvi.voices.find((c) => c.id === _));
    }
    function ke(_, c) {
      return xo(
        r.local_gsvi.voices.find((d) => d.id === _),
        c
      );
    }
    return Qa(() => {
      E.value = Ce(), typeof window.matchMedia == "function" && (j = window.matchMedia("(prefers-color-scheme: dark)"), j.addEventListener("change", ve));
    }), qa(() => {
      window.clearTimeout(O), j?.removeEventListener("change", ve), j = null;
    }), Q().catch((_) => Le(_, "读取缓存失败")), (_, c) => (L(), k("div", {
      class: "tavern-multi-tts-settings",
      "data-color-scheme": E.value
    }, [
      u("div", Kf, [
        u("div", zf, [
          u("b", null, W(e.displayName), 1),
          c[51] || (c[51] = u("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        u("div", Wf, [
          u("div", Jf, [
            u("header", Xf, [
              u("h2", Yf, W(e.displayName), 1),
              u("span", Zf, W(e.version), 1)
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
              (L(), k("span", {
                key: X.value,
                class: "mtts-capsule-text mtts-fade",
                title: X.value
              }, W(X.value), 9, Qf))
            ], 2),
            s.value ? (L(), k("p", {
              key: s.value,
              class: Ye(["mtts-notice mtts-fade", { "is-error": i.value }]),
              role: "status"
            }, W(s.value), 3)) : je("", !0),
            u("label", qf, [
              U(u("input", {
                "onUpdate:modelValue": c[0] || (c[0] = (d) => n.enabled = d),
                type: "checkbox"
              }, null, 512), [
                [Zi, n.enabled]
              ]),
              c[53] || (c[53] = u("span", null, "启用", -1))
            ]),
            u("div", ed, [
              u("button", {
                class: Ye(["mtts-tab", { "is-active": G.value }]),
                type: "button",
                role: "tab",
                "aria-label": "MiniMax",
                title: "MiniMax",
                "aria-selected": G.value,
                onClick: c[1] || (c[1] = (d) => Ue("minimax"))
              }, " MiniMax ", 10, td),
              u("button", {
                class: Ye(["mtts-tab", { "is-active": P.value }]),
                type: "button",
                role: "tab",
                "aria-label": "GSVI",
                title: "GSVI",
                "aria-selected": P.value,
                onClick: c[2] || (c[2] = (d) => Ue("local_gsvi"))
              }, " GSVI ", 10, nd),
              u("button", {
                class: Ye(["mtts-tab", { "is-active": B.value }]),
                type: "button",
                role: "tab",
                "aria-label": "IndexTTS",
                title: "IndexTTS",
                "aria-selected": B.value,
                onClick: c[3] || (c[3] = (d) => Ue("index_tts"))
              }, " Index ", 10, sd),
              u("button", {
                class: Ye(["mtts-tab", { "is-active": w.value }]),
                type: "button",
                role: "tab",
                "aria-label": "Fish Audio",
                title: "Fish Audio",
                "aria-selected": w.value,
                onClick: c[4] || (c[4] = (d) => Ue("fish_audio"))
              }, " Fish ", 10, id)
            ]),
            u("section", od, [
              c[83] || (c[83] = u("h3", {
                id: "mtts-service-title",
                class: "mtts-section-title"
              }, "语音服务", -1)),
              G.value ? (L(), k(Y, { key: 0 }, [
                u("label", rd, [
                  c[54] || (c[54] = u("span", { class: "mtts-label" }, "API Key", -1)),
                  U(u("input", {
                    "onUpdate:modelValue": c[5] || (c[5] = (d) => n.apiKey = d),
                    class: "text_pole",
                    type: "password",
                    autocomplete: "off"
                  }, null, 512), [
                    [ie, n.apiKey]
                  ])
                ]),
                u("div", ad, [
                  u("label", ld, [
                    c[55] || (c[55] = u("span", { class: "mtts-label" }, "Group ID", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": c[6] || (c[6] = (d) => n.groupId = d),
                      class: "text_pole",
                      type: "text"
                    }, null, 512), [
                      [ie, n.groupId]
                    ])
                  ]),
                  u("label", cd, [
                    c[57] || (c[57] = u("span", { class: "mtts-label" }, "区域", -1)),
                    U(u("select", {
                      "onUpdate:modelValue": c[7] || (c[7] = (d) => n.minimaxRegion = d),
                      class: "text_pole"
                    }, [...c[56] || (c[56] = [
                      u("option", { value: "international" }, "国际", -1),
                      u("option", { value: "beijing" }, "国内", -1)
                    ])], 512), [
                      [_e, n.minimaxRegion]
                    ])
                  ])
                ]),
                u("label", ud, [
                  c[58] || (c[58] = u("span", { class: "mtts-label" }, "默认音色", -1)),
                  U(u("input", {
                    "onUpdate:modelValue": c[8] || (c[8] = (d) => n.voiceId = d),
                    class: "text_pole",
                    type: "text",
                    placeholder: "无 char 的台词使用"
                  }, null, 512), [
                    [ie, n.voiceId]
                  ])
                ]),
                u("div", fd, [
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: $
                  }, " 检查连接 ", 8, dd),
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: o.value,
                    onClick: c[9] || (c[9] = (d) => b(!0))
                  }, " 刷新音色 ", 8, pd)
                ]),
                ne.value.length > 0 ? (L(), k("details", md, [
                  c[67] || (c[67] = u("summary", null, [
                    u("i", {
                      class: "fa-solid fa-chevron-right mtts-fold-icon",
                      "aria-hidden": "true"
                    }),
                    at(" 筛选音色 ")
                  ], -1)),
                  u("div", hd, [
                    u("div", gd, [
                      u("label", _d, [
                        c[59] || (c[59] = u("span", { class: "mtts-label" }, "搜索", -1)),
                        U(u("input", {
                          "onUpdate:modelValue": c[10] || (c[10] = (d) => r.minimax.filter.search = d),
                          class: "text_pole",
                          type: "search"
                        }, null, 512), [
                          [ie, r.minimax.filter.search]
                        ])
                      ]),
                      u("label", vd, [
                        c[61] || (c[61] = u("span", { class: "mtts-label" }, "语言", -1)),
                        U(u("select", {
                          "onUpdate:modelValue": c[11] || (c[11] = (d) => r.minimax.filter.language = d),
                          class: "text_pole"
                        }, [
                          c[60] || (c[60] = u("option", { value: "all" }, "全部语言", -1)),
                          (L(!0), k(Y, null, me(Pt.value, (d) => (L(), k("option", {
                            key: d,
                            value: d
                          }, W(d), 9, yd))), 128))
                        ], 512), [
                          [_e, r.minimax.filter.language]
                        ])
                      ]),
                      u("label", bd, [
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
                          [_e, r.minimax.filter.gender]
                        ])
                      ]),
                      u("label", xd, [
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
                          [_e, r.minimax.filter.source]
                        ])
                      ])
                    ]),
                    u("label", Td, [
                      c[66] || (c[66] = u("span", { class: "mtts-label" }, "从列表填入默认音色", -1)),
                      u("select", {
                        class: "text_pole",
                        value: n.voiceId,
                        onChange: c[14] || (c[14] = (d) => M(d.target.value))
                      }, [
                        u("option", Sd, W(Ct.value.length) + " 条可选", 1),
                        (L(!0), k(Y, null, me(Ct.value, (d) => (L(), k("option", {
                          key: d.id,
                          value: d.id
                        }, W(rt(yo)(d)), 9, Ed))), 128))
                      ], 40, wd)
                    ])
                  ])
                ])) : je("", !0)
              ], 64)) : B.value ? (L(), k(Y, { key: 1 }, [
                u("div", Ad, [
                  u("label", Id, [
                    c[68] || (c[68] = u("span", { class: "mtts-label" }, "服务地址", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": c[15] || (c[15] = (d) => n.indexTtsBaseUrl = d),
                      class: "text_pole",
                      type: "url",
                      placeholder: "http://127.0.0.1:7860"
                    }, null, 512), [
                      [ie, n.indexTtsBaseUrl]
                    ])
                  ]),
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: $
                  }, " 检查连接 ", 8, Md)
                ]),
                u("div", Cd, [
                  u("label", Pd, [
                    c[69] || (c[69] = u("span", { class: "mtts-label" }, "默认音色", -1)),
                    U(u("select", {
                      "onUpdate:modelValue": c[16] || (c[16] = (d) => n.indexTtsVoiceId = d),
                      class: "text_pole"
                    }, [
                      u("option", Rd, W(pe.value.length > 0 ? "请选择音色预设" : "先检查连接并拉取音色"), 1),
                      n.indexTtsVoiceId && !pe.value.some((d) => d.id === n.indexTtsVoiceId) ? (L(), k("option", {
                        key: 0,
                        value: n.indexTtsVoiceId
                      }, W(n.indexTtsVoiceId), 9, Nd)) : je("", !0),
                      (L(!0), k(Y, null, me(pe.value, (d) => (L(), k("option", {
                        key: d.id,
                        value: d.id
                      }, W(d.name), 9, Vd))), 128))
                    ], 512), [
                      [_e, n.indexTtsVoiceId]
                    ])
                  ]),
                  u("label", Ld, [
                    c[70] || (c[70] = u("span", { class: "mtts-label" }, "语言", -1)),
                    U(u("select", {
                      "onUpdate:modelValue": c[17] || (c[17] = (d) => n.indexTtsLanguage = d),
                      class: "text_pole"
                    }, [
                      (L(!0), k(Y, null, me(rt(is), (d) => (L(), k("option", {
                        key: d,
                        value: d
                      }, W(d), 9, kd))), 128))
                    ], 512), [
                      [_e, n.indexTtsLanguage]
                    ])
                  ])
                ])
              ], 64)) : w.value ? (L(), k(Y, { key: 2 }, [
                u("label", Od, [
                  c[71] || (c[71] = u("span", { class: "mtts-label" }, "API Key", -1)),
                  U(u("input", {
                    "onUpdate:modelValue": c[18] || (c[18] = (d) => n.fishAudioApiKey = d),
                    class: "text_pole",
                    type: "password",
                    autocomplete: "off"
                  }, null, 512), [
                    [ie, n.fishAudioApiKey]
                  ])
                ]),
                u("label", Fd, [
                  c[72] || (c[72] = u("span", { class: "mtts-label" }, "模型档位", -1)),
                  U(u("select", {
                    "onUpdate:modelValue": c[19] || (c[19] = (d) => n.fishAudioModel = d),
                    class: "text_pole"
                  }, [
                    (L(!0), k(Y, null, me(rt(xi), (d) => (L(), k("option", {
                      key: d,
                      value: d
                    }, W(d === "s2.1-pro-free" ? "S2.1 Pro Free" : "S2.1 Pro"), 9, Dd))), 128))
                  ], 512), [
                    [_e, n.fishAudioModel]
                  ])
                ]),
                u("label", $d, [
                  c[73] || (c[73] = u("span", { class: "mtts-label" }, "默认音色模型 ID", -1)),
                  U(u("input", {
                    "onUpdate:modelValue": c[20] || (c[20] = (d) => n.fishAudioReferenceId = d),
                    class: "text_pole",
                    type: "text",
                    list: "fish-audio-voice-suggestions",
                    placeholder: "可输入公共模型 ID"
                  }, null, 512), [
                    [ie, n.fishAudioReferenceId]
                  ])
                ]),
                u("datalist", Gd, [
                  (L(!0), k(Y, null, me($e.value, (d) => (L(), k("option", {
                    key: d.id,
                    value: d.id
                  }, W(d.name), 9, Ud))), 128))
                ]),
                c[74] || (c[74] = u("p", { class: "mtts-hint" }, " 可从 Fish Audio 音色页面复制模型 ID；“拉取模型”只读取当前账号自己的模型。 ", -1)),
                u("div", jd, [
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: $
                  }, " 检查连接 ", 8, Bd),
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: o.value,
                    onClick: c[21] || (c[21] = (d) => b(!0))
                  }, " 拉取模型 ", 8, Hd)
                ])
              ], 64)) : P.value ? (L(), k(Y, { key: 3 }, [
                u("div", Kd, [
                  u("label", zd, [
                    c[75] || (c[75] = u("span", { class: "mtts-label" }, "服务地址", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": c[22] || (c[22] = (d) => n.localGsviBaseUrl = d),
                      class: "text_pole",
                      type: "url",
                      placeholder: "http://127.0.0.1:9880"
                    }, null, 512), [
                      [ie, n.localGsviBaseUrl]
                    ])
                  ]),
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: $
                  }, " 检查连接 ", 8, Wd)
                ]),
                u("div", Jd, [
                  u("label", Xd, [
                    c[76] || (c[76] = u("span", { class: "mtts-label" }, "默认模型", -1)),
                    U(u("select", {
                      "onUpdate:modelValue": c[23] || (c[23] = (d) => n.localGsviModel = d),
                      class: "text_pole",
                      onChange: he
                    }, [
                      u("option", Yd, W(Ae.value.length > 0 ? "请选择" : "先检查连接并拉取模型"), 1),
                      (L(!0), k(Y, null, me(Ae.value, (d) => (L(), k("option", {
                        key: d.id,
                        value: d.id
                      }, W(d.name), 9, Zd))), 128))
                    ], 544), [
                      [_e, n.localGsviModel]
                    ])
                  ]),
                  u("label", Qd, [
                    c[78] || (c[78] = u("span", { class: "mtts-label" }, "语种", -1)),
                    U(u("select", {
                      "onUpdate:modelValue": c[24] || (c[24] = (d) => n.localGsviLanguage = d),
                      class: "text_pole"
                    }, [
                      c[77] || (c[77] = u("option", { value: "" }, "请选择", -1)),
                      (L(!0), k(Y, null, me(Ge.value, (d) => (L(), k("option", {
                        key: d,
                        value: d
                      }, W(d), 9, qd))), 128))
                    ], 512), [
                      [_e, n.localGsviLanguage]
                    ])
                  ]),
                  u("label", ep, [
                    c[80] || (c[80] = u("span", { class: "mtts-label" }, "情绪", -1)),
                    U(u("select", {
                      "onUpdate:modelValue": c[25] || (c[25] = (d) => n.localGsviEmotion = d),
                      class: "text_pole"
                    }, [
                      c[79] || (c[79] = u("option", { value: "" }, "请选择", -1)),
                      (L(!0), k(Y, null, me(an.value, (d) => (L(), k("option", {
                        key: d,
                        value: d
                      }, W(d), 9, tp))), 128))
                    ], 512), [
                      [_e, n.localGsviEmotion]
                    ])
                  ])
                ])
              ], 64)) : je("", !0),
              u("div", np, [
                u("label", sp, [
                  c[82] || (c[82] = u("span", { class: "mtts-label" }, "试听语言", -1)),
                  U(u("select", {
                    "onUpdate:modelValue": c[26] || (c[26] = (d) => n.testLanguage = d),
                    class: "text_pole"
                  }, [...c[81] || (c[81] = [
                    u("option", { value: "ja" }, "日语", -1),
                    u("option", { value: "zh" }, "中文", -1),
                    u("option", { value: "en" }, "英语", -1)
                  ])], 512), [
                    [_e, n.testLanguage]
                  ])
                ]),
                u("button", {
                  class: "mtts-btn mtts-btn-secondary",
                  type: "button",
                  disabled: o.value,
                  onClick: c[27] || (c[27] = (d) => K())
                }, W(yt.value), 9, ip)
              ])
            ]),
            u("section", op, [
              u("div", rp, [
                u("h3", ap, [
                  c[84] || (c[84] = at(" 角色映射 ", -1)),
                  u("span", lp, W(Rt.value), 1)
                ]),
                u("button", {
                  class: "mtts-btn mtts-btn-primary",
                  type: "button",
                  onClick: A
                }, " + 添加角色 ")
              ]),
              Rt.value === 0 ? (L(), k("div", cp, [
                c[85] || (c[85] = u("p", { class: "mtts-empty-title" }, "还没有角色映射", -1)),
                c[86] || (c[86] = u("p", { class: "mtts-empty-copy" }, [
                  at(" 添加角色后，带有 "),
                  u("code", null, '<say char="角色名">'),
                  at(" 的台词才会生成语音。 ")
                ], -1)),
                u("button", {
                  class: "mtts-btn mtts-btn-primary",
                  type: "button",
                  onClick: A
                }, " ＋添加第一个角色 ")
              ])) : (L(), k(Y, { key: 1 }, [
                G.value ? (L(!0), k(Y, { key: 0 }, me(n.characterMappings, (d, J) => (L(), k("article", {
                  key: `mm-${J}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", up, [
                    c[87] || (c[87] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": (N) => d.characterName = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, fp), [
                      [ie, d.characterName]
                    ])
                  ]),
                  u("label", dp, [
                    c[88] || (c[88] = u("span", { class: "mtts-label" }, "Voice ID", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": (N) => d.minimaxVoiceId = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, pp), [
                      [ie, d.minimaxVoiceId]
                    ])
                  ]),
                  ne.value.length > 0 ? (L(), k("label", mp, [
                    c[90] || (c[90] = u("span", { class: "mtts-label" }, "音色预设", -1)),
                    u("select", {
                      class: "text_pole",
                      value: d.minimaxVoiceId,
                      onChange: (N) => d.minimaxVoiceId = N.target.value
                    }, [
                      c[89] || (c[89] = u("option", { value: "" }, "从列表选择", -1)),
                      (L(!0), k(Y, null, me(Ct.value, (N) => (L(), k("option", {
                        key: N.id,
                        value: N.id
                      }, W(rt(yo)(N)), 9, gp))), 128))
                    ], 40, hp)
                  ])) : je("", !0),
                  u("div", _p, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (N) => K(d.characterName)
                    }, " 试听 ", 8, vp),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (N) => S(J)
                    }, " 删除 ", 8, yp)
                  ])
                ]))), 128)) : B.value ? (L(!0), k(Y, { key: 1 }, me(n.indexTtsCharacterMappings, (d, J) => (L(), k("article", {
                  key: `index-${J}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", bp, [
                    c[91] || (c[91] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": (N) => d.characterName = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, xp), [
                      [ie, d.characterName]
                    ])
                  ]),
                  u("div", Tp, [
                    u("label", wp, [
                      c[92] || (c[92] = u("span", { class: "mtts-label" }, "音色预设", -1)),
                      U(u("select", {
                        "onUpdate:modelValue": (N) => d.indexTtsVoiceId = N,
                        class: "text_pole"
                      }, [
                        u("option", Ep, W(pe.value.length > 0 ? "请选择" : "先检查连接"), 1),
                        d.indexTtsVoiceId && !pe.value.some((N) => N.id === d.indexTtsVoiceId) ? (L(), k("option", {
                          key: 0,
                          value: d.indexTtsVoiceId
                        }, W(d.indexTtsVoiceId), 9, Ap)) : je("", !0),
                        (L(!0), k(Y, null, me(pe.value, (N) => (L(), k("option", {
                          key: N.id,
                          value: N.id
                        }, W(N.name), 9, Ip))), 128))
                      ], 8, Sp), [
                        [_e, d.indexTtsVoiceId]
                      ])
                    ]),
                    u("label", Mp, [
                      c[93] || (c[93] = u("span", { class: "mtts-label" }, "语言", -1)),
                      U(u("select", {
                        "onUpdate:modelValue": (N) => d.indexTtsLanguage = N,
                        class: "text_pole"
                      }, [
                        (L(!0), k(Y, null, me(rt(is), (N) => (L(), k("option", {
                          key: N,
                          value: N
                        }, W(N), 9, Pp))), 128))
                      ], 8, Cp), [
                        [_e, d.indexTtsLanguage]
                      ])
                    ])
                  ]),
                  u("div", Rp, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (N) => K(d.characterName)
                    }, " 试听 ", 8, Np),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (N) => S(J)
                    }, " 删除 ", 8, Vp)
                  ])
                ]))), 128)) : w.value ? (L(!0), k(Y, { key: 2 }, me(n.fishAudioCharacterMappings, (d, J) => (L(), k("article", {
                  key: `fish-${J}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", Lp, [
                    c[94] || (c[94] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": (N) => d.characterName = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, kp), [
                      [ie, d.characterName]
                    ])
                  ]),
                  u("label", Op, [
                    c[95] || (c[95] = u("span", { class: "mtts-label" }, "Fish Audio 音色模型 ID", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": (N) => d.fishAudioReferenceId = N,
                      class: "text_pole",
                      type: "text",
                      list: "fish-audio-voice-suggestions"
                    }, null, 8, Fp), [
                      [ie, d.fishAudioReferenceId]
                    ])
                  ]),
                  u("div", Dp, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (N) => K(d.characterName)
                    }, " 试听 ", 8, $p),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (N) => S(J)
                    }, " 删除 ", 8, Gp)
                  ])
                ]))), 128)) : P.value ? (L(!0), k(Y, { key: 3 }, me(n.gsviCharacterMappings, (d, J) => (L(), k("article", {
                  key: `gsvi-${J}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", Up, [
                    c[96] || (c[96] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": (N) => d.characterName = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, jp), [
                      [ie, d.characterName]
                    ])
                  ]),
                  u("div", Bp, [
                    u("label", Hp, [
                      c[97] || (c[97] = u("span", { class: "mtts-label" }, "模型", -1)),
                      U(u("select", {
                        "onUpdate:modelValue": (N) => d.gsviVoiceId = N,
                        class: "text_pole"
                      }, [
                        u("option", zp, W(Ae.value.length > 0 ? "请选择" : "先检查连接"), 1),
                        (L(!0), k(Y, null, me(Ae.value, (N) => (L(), k("option", {
                          key: N.id,
                          value: N.id
                        }, W(N.name), 9, Wp))), 128))
                      ], 8, Kp), [
                        [_e, d.gsviVoiceId]
                      ])
                    ]),
                    u("label", Jp, [
                      c[99] || (c[99] = u("span", { class: "mtts-label" }, "语种", -1)),
                      U(u("select", {
                        "onUpdate:modelValue": (N) => d.gsviLanguage = N,
                        class: "text_pole"
                      }, [
                        c[98] || (c[98] = u("option", { value: "" }, "请选择", -1)),
                        (L(!0), k(Y, null, me(xe(d.gsviVoiceId), (N) => (L(), k("option", {
                          key: N,
                          value: N
                        }, W(N), 9, Yp))), 128))
                      ], 8, Xp), [
                        [_e, d.gsviLanguage]
                      ])
                    ]),
                    u("label", Zp, [
                      c[101] || (c[101] = u("span", { class: "mtts-label" }, "情绪", -1)),
                      U(u("select", {
                        "onUpdate:modelValue": (N) => d.gsviEmotion = N,
                        class: "text_pole"
                      }, [
                        c[100] || (c[100] = u("option", { value: "" }, "请选择", -1)),
                        (L(!0), k(Y, null, me(ke(d.gsviVoiceId, d.gsviLanguage), (N) => (L(), k("option", {
                          key: N,
                          value: N
                        }, W(N), 9, qp))), 128))
                      ], 8, Qp), [
                        [_e, d.gsviEmotion]
                      ])
                    ])
                  ]),
                  u("div", em, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (N) => K(d.characterName)
                    }, " 试听 ", 8, tm),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (N) => S(J)
                    }, " 删除 ", 8, nm)
                  ])
                ]))), 128)) : je("", !0),
                vt.value.length > 0 ? (L(), k("p", sm, " 重复角色名：" + W(vt.value.join("、")) + "，最后一条完整映射生效。 ", 1)) : je("", !0)
              ], 64))
            ]),
            u("details", im, [
              c[106] || (c[106] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                at(" 映射方案（可选） ")
              ], -1)),
              u("div", om, [
                c[105] || (c[105] = u("p", { class: "mtts-hint" }, "角色映射会自动保存；这里仅用于保存多套可切换方案。", -1)),
                u("label", rm, [
                  c[102] || (c[102] = u("span", { class: "mtts-label" }, "方案名称", -1)),
                  U(u("input", {
                    "onUpdate:modelValue": c[28] || (c[28] = (d) => a.value = d),
                    class: "text_pole",
                    type: "text",
                    placeholder: "日语角色组"
                  }, null, 512), [
                    [ie, a.value]
                  ])
                ]),
                u("div", { class: "mtts-actions" }, [
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    onClick: x
                  }, " 保存当前方案 ")
                ]),
                u("label", am, [
                  c[104] || (c[104] = u("span", { class: "mtts-label" }, "选择已有方案", -1)),
                  U(u("select", {
                    "onUpdate:modelValue": c[29] || (c[29] = (d) => l.value = d),
                    class: "text_pole"
                  }, [
                    c[103] || (c[103] = u("option", { value: "" }, "请选择方案", -1)),
                    (L(!0), k(Y, null, me(jt.value, (d) => (L(), k("option", {
                      key: d.name,
                      value: d.name
                    }, W(d.name) + "（" + W(d.mappings.length) + "） ", 9, lm))), 128))
                  ], 512), [
                    [_e, l.value]
                  ])
                ]),
                u("div", cm, [
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: !l.value,
                    onClick: H
                  }, " 载入方案 ", 8, um),
                  u("button", {
                    class: "mtts-btn mtts-btn-danger",
                    type: "button",
                    disabled: !l.value,
                    onClick: V
                  }, " 删除方案 ", 8, fm)
                ])
              ])
            ]),
            u("details", dm, [
              c[111] || (c[111] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                at(" 提示词注入 ")
              ], -1)),
              u("div", pm, [
                u("label", mm, [
                  U(u("input", {
                    "onUpdate:modelValue": c[30] || (c[30] = (d) => n.injectEnabled = d),
                    type: "checkbox"
                  }, null, 512), [
                    [Zi, n.injectEnabled]
                  ]),
                  c[107] || (c[107] = u("span", null, "注入 <say> 提示", -1))
                ]),
                u("label", hm, [
                  u("span", gm, "注入深度 D" + W(n.injectDepth), 1),
                  U(u("input", {
                    "onUpdate:modelValue": c[31] || (c[31] = (d) => n.injectDepth = d),
                    type: "range",
                    min: "0",
                    max: "10",
                    step: "1"
                  }, null, 512), [
                    [
                      ie,
                      n.injectDepth,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                u("label", _m, [
                  c[109] || (c[109] = u("span", { class: "mtts-label" }, "注入角色", -1)),
                  U(u("select", {
                    "onUpdate:modelValue": c[32] || (c[32] = (d) => n.injectRole = d),
                    class: "text_pole"
                  }, [...c[108] || (c[108] = [
                    u("option", { value: "system" }, "system", -1),
                    u("option", { value: "user" }, "user", -1),
                    u("option", { value: "assistant" }, "assistant", -1)
                  ])], 512), [
                    [_e, n.injectRole]
                  ])
                ]),
                u("label", vm, [
                  c[110] || (c[110] = u("span", { class: "mtts-label" }, "注入模板", -1)),
                  B.value ? U((L(), k("textarea", {
                    key: 0,
                    "onUpdate:modelValue": c[33] || (c[33] = (d) => n.indexTtsInjectTemplate = d),
                    class: "text_pole mtts-inject-template",
                    rows: "12"
                  }, null, 512)), [
                    [ie, n.indexTtsInjectTemplate]
                  ]) : w.value ? U((L(), k("textarea", {
                    key: 1,
                    "onUpdate:modelValue": c[34] || (c[34] = (d) => n.fishAudioInjectTemplate = d),
                    class: "text_pole mtts-inject-template",
                    rows: "18"
                  }, null, 512)), [
                    [ie, n.fishAudioInjectTemplate]
                  ]) : U((L(), k("textarea", {
                    key: 2,
                    "onUpdate:modelValue": c[35] || (c[35] = (d) => n.injectTemplate = d),
                    class: "text_pole mtts-inject-template",
                    rows: "5"
                  }, null, 512)), [
                    [ie, n.injectTemplate]
                  ])
                ])
              ])
            ]),
            u("details", ym, [
              c[116] || (c[116] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                at(" 生成与缓存 ")
              ], -1)),
              u("div", bm, [
                u("label", xm, [
                  c[113] || (c[113] = u("span", { class: "mtts-label" }, "预取", -1)),
                  U(u("select", {
                    "onUpdate:modelValue": c[36] || (c[36] = (d) => n.prefetchMode = d),
                    class: "text_pole"
                  }, [...c[112] || (c[112] = [
                    u("option", { value: "manual" }, "只在点击时生成", -1),
                    u("option", { value: "auto_all" }, "自动预取全部", -1),
                    u("option", { value: "auto_first_n" }, "自动预取前 N 句", -1)
                  ])], 512), [
                    [_e, n.prefetchMode]
                  ])
                ]),
                n.prefetchMode !== "manual" ? (L(), k("div", Tm, [
                  n.prefetchMode === "auto_first_n" ? (L(), k("label", wm, [
                    c[114] || (c[114] = u("span", { class: "mtts-label" }, "前 N 句", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": c[37] || (c[37] = (d) => n.prefetchFirstCount = d),
                      class: "text_pole",
                      type: "number",
                      min: "1",
                      max: "10"
                    }, null, 512), [
                      [
                        ie,
                        n.prefetchFirstCount,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])) : je("", !0),
                  u("label", Sm, [
                    c[115] || (c[115] = u("span", { class: "mtts-label" }, "并发", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": c[38] || (c[38] = (d) => n.maxConcurrency = d),
                      class: "text_pole",
                      type: "number",
                      min: "1",
                      max: "10"
                    }, null, 512), [
                      [
                        ie,
                        n.maxConcurrency,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ])) : je("", !0),
                u("p", Em, " 缓存 " + W(p.value) + " 条 / " + W(Nt.value) + "，上限 100 条或 50MB。 ", 1),
                u("div", Am, [
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: o.value,
                    onClick: Q
                  }, " 刷新缓存 ", 8, Im),
                  u("button", {
                    class: "mtts-btn mtts-btn-danger",
                    type: "button",
                    disabled: o.value,
                    onClick: re
                  }, " 清空缓存 ", 8, Mm)
                ])
              ])
            ]),
            u("details", Cm, [
              c[123] || (c[123] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                at(" 高级设置 ")
              ], -1)),
              u("div", Pm, [
                G.value ? (L(), k(Y, { key: 0 }, [
                  u("label", Rm, [
                    c[117] || (c[117] = u("span", { class: "mtts-label" }, "模型", -1)),
                    U(u("select", {
                      "onUpdate:modelValue": c[39] || (c[39] = (d) => n.model = d),
                      class: "text_pole"
                    }, [
                      (L(!0), k(Y, null, me(rt(Mr), (d) => (L(), k("option", {
                        key: d,
                        value: d
                      }, W(d), 9, Nm))), 128))
                    ], 512), [
                      [_e, n.model]
                    ])
                  ]),
                  u("label", Vm, [
                    u("span", Lm, "语速 " + W(n.speed.toFixed(2)), 1),
                    U(u("input", {
                      "onUpdate:modelValue": c[40] || (c[40] = (d) => n.speed = d),
                      type: "range",
                      min: "0.5",
                      max: "2",
                      step: "0.05"
                    }, null, 512), [
                      [
                        ie,
                        n.speed,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  u("label", km, [
                    u("span", Om, "音量 " + W(n.vol.toFixed(2)), 1),
                    U(u("input", {
                      "onUpdate:modelValue": c[41] || (c[41] = (d) => n.vol = d),
                      type: "range",
                      min: "0",
                      max: "10",
                      step: "0.1"
                    }, null, 512), [
                      [
                        ie,
                        n.vol,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : P.value ? (L(), k(Y, { key: 1 }, [
                  u("label", Fm, [
                    u("span", Dm, "语速 " + W(n.speed.toFixed(2)), 1),
                    U(u("input", {
                      "onUpdate:modelValue": c[42] || (c[42] = (d) => n.speed = d),
                      type: "range",
                      min: "0.5",
                      max: "2",
                      step: "0.05"
                    }, null, 512), [
                      [
                        ie,
                        n.speed,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  u("label", $m, [
                    c[118] || (c[118] = u("span", { class: "mtts-label" }, "鉴权 Token", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": c[43] || (c[43] = (d) => n.localGsviAuthToken = d),
                      class: "text_pole",
                      type: "password",
                      autocomplete: "off"
                    }, null, 512), [
                      [ie, n.localGsviAuthToken]
                    ])
                  ]),
                  u("div", Gm, [
                    u("label", Um, [
                      c[119] || (c[119] = u("span", { class: "mtts-label" }, "文本语言", -1)),
                      U(u("select", {
                        "onUpdate:modelValue": c[44] || (c[44] = (d) => n.localGsviTextLang = d),
                        class: "text_pole"
                      }, [
                        (L(!0), k(Y, null, me(rt(Ff), (d) => (L(), k("option", {
                          key: d,
                          value: d
                        }, W(d), 9, jm))), 128))
                      ], 512), [
                        [_e, n.localGsviTextLang]
                      ])
                    ]),
                    u("label", Bm, [
                      c[120] || (c[120] = u("span", { class: "mtts-label" }, "切分", -1)),
                      U(u("select", {
                        "onUpdate:modelValue": c[45] || (c[45] = (d) => n.localGsviTextSplitMethod = d),
                        class: "text_pole"
                      }, [
                        (L(!0), k(Y, null, me(rt(Df), (d) => (L(), k("option", {
                          key: d,
                          value: d
                        }, W(d), 9, Hm))), 128))
                      ], 512), [
                        [_e, n.localGsviTextSplitMethod]
                      ])
                    ])
                  ]),
                  u("label", Km, [
                    u("span", zm, "Batch " + W(n.localGsviBatchSize), 1),
                    U(u("input", {
                      "onUpdate:modelValue": c[46] || (c[46] = (d) => n.localGsviBatchSize = d),
                      type: "range",
                      min: "1",
                      max: "8",
                      step: "1"
                    }, null, 512), [
                      [
                        ie,
                        n.localGsviBatchSize,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : B.value ? (L(), k(Y, { key: 2 }, [
                  u("label", Wm, [
                    u("span", Jm, "时长系数 " + W(n.indexTtsDurationFactor.toFixed(2)), 1),
                    c[121] || (c[121] = u("p", { class: "mtts-hint" }, "快 ← 不变 → 慢，与 IndexTTS WebUI 相同", -1)),
                    U(u("input", {
                      "onUpdate:modelValue": c[47] || (c[47] = (d) => n.indexTtsDurationFactor = d),
                      type: "range",
                      min: "0.5",
                      max: "2",
                      step: "0.01"
                    }, null, 512), [
                      [
                        ie,
                        n.indexTtsDurationFactor,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  u("label", Xm, [
                    u("span", Ym, "情感权重 " + W(n.indexTtsEmoWeight.toFixed(2)), 1),
                    U(u("input", {
                      "onUpdate:modelValue": c[48] || (c[48] = (d) => n.indexTtsEmoWeight = d),
                      type: "range",
                      min: "0",
                      max: "1",
                      step: "0.01"
                    }, null, 512), [
                      [
                        ie,
                        n.indexTtsEmoWeight,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : w.value ? (L(), k(Y, { key: 3 }, [
                  u("label", Zm, [
                    u("span", Qm, "语速 " + W(n.fishAudioSpeed.toFixed(2)), 1),
                    U(u("input", {
                      "onUpdate:modelValue": c[49] || (c[49] = (d) => n.fishAudioSpeed = d),
                      type: "range",
                      min: "0.5",
                      max: "2",
                      step: "0.05"
                    }, null, 512), [
                      [
                        ie,
                        n.fishAudioSpeed,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  u("label", qm, [
                    u("span", eh, "音量 " + W(n.fishAudioVolume.toFixed(2)) + " dB", 1),
                    U(u("input", {
                      "onUpdate:modelValue": c[50] || (c[50] = (d) => n.fishAudioVolume = d),
                      class: "text_pole",
                      type: "number",
                      step: "0.1"
                    }, null, 512), [
                      [
                        ie,
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
                    onClick: se
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
              (L(), k("span", {
                key: g.value,
                class: "mtts-fade"
              }, W(q.value), 1))
            ], 2)
          ])
        ])
      ])
    ], 8, Hf));
  }
});
let fn = null, dn = null, Tn = null;
function nh() {
  return Xt(Qr().readRawSettings());
}
function sh() {
  return Tn ??= Af(Rf(nh)), Tn;
}
function on() {
  return dn || (dn = Hc(
    Qr(),
    {
      mount(e, t) {
        fn?.unmount(), fn = ac(th, {
          displayName: Sc,
          version: Ec,
          settings: t,
          onSettingsChange(n) {
            dn?.updateSettings(n);
          }
        }), fn.mount(e);
      },
      unmount() {
        fn?.unmount(), fn = null;
      }
    },
    {
      stopPlayback: Xn,
      clearCache: Sr,
      startRuntime: () => sh().start(),
      stopRuntime: () => Tn?.stop(),
      syncInjection: () => Tn?.syncInjection(),
      refreshDecorations: () => Tn?.refreshDecorations()
    }
  ), dn);
}
async function rn(e, t) {
  try {
    await t();
  } catch (n) {
    const s = n instanceof Error ? n.message : String(n);
    throw console.error(`${we} ${e} failed: ${s}`), n;
  }
}
async function ih() {
  await rn("onInstall", () => on().install());
}
async function oh() {
  await rn("onActivate", () => on().activate());
}
async function rh() {
  await rn("onEnable", () => on().activate());
}
async function ah() {
  await rn("onDisable", () => on().disable());
}
async function lh() {
  await rn("onClean", () => on().clean());
}
async function ch() {
  await rn("onDelete", () => on().delete());
}
export {
  oh as onActivate,
  lh as onClean,
  ch as onDelete,
  ah as onDisable,
  rh as onEnable,
  ih as onInstall
};
//# sourceMappingURL=index.js.map
