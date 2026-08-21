// @__NO_SIDE_EFFECTS__
function oi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const fe = {}, Kt = [], Ft = () => {
}, To = () => !1, as = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ls = (e) => e.startsWith("onUpdate:"), ze = Object.assign, wo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Qr = Object.prototype.hasOwnProperty, le = (e, t) => Qr.call(e, t), Z = Array.isArray, zt = (e) => Nn(e) === "[object Map]", nn = (e) => Nn(e) === "[object Set]", Ai = (e) => Nn(e) === "[object Date]", ae = (e) => typeof e == "function", be = (e) => typeof e == "string", tt = (e) => typeof e == "symbol", de = (e) => e !== null && typeof e == "object", So = (e) => (de(e) || ae(e)) && ae(e.then) && ae(e.catch), Eo = Object.prototype.toString, Nn = (e) => Eo.call(e), qr = (e) => Nn(e).slice(8, -1), Ao = (e) => Nn(e) === "[object Object]", ri = (e) => be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, hn = /* @__PURE__ */ oi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), cs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ea = /-\w/g, Be = cs(
  (e) => e.replace(ea, (t) => t.slice(1).toUpperCase())
), ta = /\B([A-Z])/g, Ut = cs(
  (e) => e.replace(ta, "-$1").toLowerCase()
), Io = cs((e) => e.charAt(0).toUpperCase() + e.slice(1)), xs = cs(
  (e) => e ? `on${Io(e)}` : ""
), qe = (e, t) => !Object.is(e, t), zn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Mo = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, us = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ii;
const fs = () => Ii || (Ii = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ai(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = be(s) ? oa(s) : ai(s);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (be(e) || de(e))
    return e;
}
const na = /;(?![^(]*\))/g, sa = /:([^]+)/, ia = /\/\*[^]*?\*\//g;
function oa(e) {
  const t = {};
  return e.replace(ia, "").split(na).forEach((n) => {
    if (n) {
      const s = n.split(sa);
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
const ra = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", aa = /* @__PURE__ */ oi(ra);
function Co(e) {
  return !!e || e === "";
}
function la(e, t) {
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
    return n && s ? la(e, t) : !1;
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
const Po = (e) => !!(e && e.__v_isRef === !0), z = (e) => be(e) ? e : e == null ? "" : Z(e) || de(e) && (e.toString === Eo || !ae(e.toString)) ? Po(e) ? z(e.value) : JSON.stringify(e, Ro, 2) : String(e), Ro = (e, t) => Po(t) ? Ro(e, t.value) : zt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], o) => (n[Ts(s, o) + " =>"] = i, n),
    {}
  )
} : nn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ts(n))
} : tt(t) ? Ts(t) : de(t) && !Z(t) && !Ao(t) ? String(t) : t, Ts = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    tt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Te;
class ca {
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
function ua() {
  return Te;
}
let ce;
const ws = /* @__PURE__ */ new WeakSet();
class Vo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Te && (Te.active ? Te.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ws.has(this) && (ws.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Lo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Mi(this), ko(this);
    const t = ce, n = He;
    ce = this, He = !0;
    try {
      return this.fn();
    } finally {
      Oo(this), ce = t, He = n, this.flags &= -3;
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
    this.flags & 64 ? ws.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let No = 0, gn, _n;
function Lo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = _n, _n = e;
    return;
  }
  e.next = gn, gn = e;
}
function ci() {
  No++;
}
function ui() {
  if (--No > 0)
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
function ko(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Oo(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), fi(s), fa(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Gs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Fo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Fo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wn) || (e.globalVersion = wn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Gs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ce, s = He;
  ce = e, He = !0;
  try {
    ko(e);
    const i = e.fn(e._value);
    (t.version === 0 || qe(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ce = n, He = s, Oo(e), e.flags &= -3;
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
function fa(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let He = !0;
const Do = [];
function At() {
  Do.push(He), He = !1;
}
function It() {
  const e = Do.pop();
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
class da {
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
      n = this.activeLink = new da(ce, this), ce.deps ? (n.prevDep = ce.depsTail, ce.depsTail.nextDep = n, ce.depsTail = n) : ce.deps = ce.depsTail = n, $o(n);
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
function $o(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        $o(s);
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
function Se(e, t, n) {
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
      r.forEach((g, A) => {
        (A === "length" || A === Sn || !tt(A) && A >= m) && a(g);
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
  return t === e ? t : (Se(t, "iterate", Sn), /* @__PURE__ */ De(e) ? t : t.map(Ke));
}
function ds(e) {
  return Se(e = /* @__PURE__ */ oe(e), "iterate", Sn), e;
}
function Ze(e, t) {
  return /* @__PURE__ */ mt(e) ? Qt(/* @__PURE__ */ $t(e) ? Ke(t) : t) : Ke(t);
}
const pa = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ss(this, Symbol.iterator, (e) => Ze(this, e));
  },
  concat(...e) {
    return Bt(this).concat(
      ...e.map((t) => Z(t) ? Bt(t) : t)
    );
  },
  entries() {
    return Ss(this, "entries", (e) => (e[1] = Ze(this, e[1]), e));
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
    return Es(this, "includes", e);
  },
  indexOf(...e) {
    return Es(this, "indexOf", e);
  },
  join(e) {
    return Bt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Es(this, "lastIndexOf", e);
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
    return Ss(this, "values", (e) => Ze(this, e));
  }
};
function Ss(e, t, n) {
  const s = ds(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ De(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const ma = Array.prototype;
function st(e, t, n, s, i, o) {
  const r = ds(e), a = r !== e && !/* @__PURE__ */ De(e), l = r[t];
  if (l !== ma[t]) {
    const g = l.apply(e, o);
    return a ? Ke(g) : g;
  }
  let p = n;
  r !== e && (a ? p = function(g, A) {
    return n.call(this, Ze(e, g), A, e);
  } : n.length > 2 && (p = function(g, A) {
    return n.call(this, g, A, e);
  }));
  const m = l.call(r, p, s);
  return a && i ? i(m) : m;
}
function Ci(e, t, n, s) {
  const i = ds(e), o = i !== e && !/* @__PURE__ */ De(e);
  let r = n, a = !1;
  i !== e && (o ? (a = s.length === 0, r = function(p, m, g) {
    return a && (a = !1, p = Ze(e, p)), n.call(this, p, Ze(e, m), g, e);
  }) : n.length > 3 && (r = function(p, m, g) {
    return n.call(this, p, m, g, e);
  }));
  const l = i[t](r, ...s);
  return a ? Ze(e, l) : l;
}
function Es(e, t, n) {
  const s = /* @__PURE__ */ oe(e);
  Se(s, "iterate", Sn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ hi(n[0]) ? (n[0] = /* @__PURE__ */ oe(n[0]), s[t](...n)) : i;
}
function ln(e, t, n = []) {
  At(), ci();
  const s = (/* @__PURE__ */ oe(e))[t].apply(e, n);
  return ui(), It(), s;
}
const ha = /* @__PURE__ */ oi("__proto__,__v_isRef,__isVue"), Go = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(tt)
);
function ga(e) {
  tt(e) || (e = String(e));
  const t = /* @__PURE__ */ oe(this);
  return Se(t, "has", e), t.hasOwnProperty(e);
}
class Uo {
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
      return s === (i ? o ? Aa : Ko : o ? Ho : Bo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = Z(t);
    if (!i) {
      let l;
      if (r && (l = pa[n]))
        return l;
      if (n === "hasOwnProperty")
        return ga;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Me(t) ? t : s
    );
    if ((tt(n) ? Go.has(n) : ha(n)) || (i || Se(t, "get", n), o))
      return a;
    if (/* @__PURE__ */ Me(a)) {
      const l = r && ri(n) ? a : a.value;
      return i && de(l) ? /* @__PURE__ */ Hs(l) : l;
    }
    return de(a) ? i ? /* @__PURE__ */ Hs(a) : /* @__PURE__ */ vn(a) : a;
  }
}
class jo extends Uo {
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
    return (!tt(n) || !Go.has(n)) && Se(t, "has", n), s;
  }
  ownKeys(t) {
    return Se(
      t,
      "iterate",
      Z(t) ? "length" : Dt
    ), Reflect.ownKeys(t);
  }
}
class _a extends Uo {
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
const va = /* @__PURE__ */ new jo(), ya = /* @__PURE__ */ new _a(), ba = /* @__PURE__ */ new jo(!0);
const Bs = (e) => e, kn = (e) => Reflect.getPrototypeOf(e);
function xa(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, o = /* @__PURE__ */ oe(i), r = zt(o), a = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, p = i[e](...s), m = n ? Bs : t ? Qt : Ke;
    return !t && Se(
      o,
      "iterate",
      l ? js : Dt
    ), ze(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: g, done: A } = p.next();
          return A ? { value: g, done: A } : {
            value: a ? [m(g[0]), m(g[1])] : m(g),
            done: A
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
function Ta(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ oe(o), a = /* @__PURE__ */ oe(i);
      e || (qe(i, a) && Se(r, "get", i), Se(r, "get", a));
      const { has: l } = kn(r), p = t ? Bs : e ? Qt : Ke;
      if (l.call(r, i))
        return p(o.get(i));
      if (l.call(r, a))
        return p(o.get(a));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Se(/* @__PURE__ */ oe(i), "iterate", Dt), i.size;
    },
    has(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ oe(o), a = /* @__PURE__ */ oe(i);
      return e || (qe(i, a) && Se(r, "has", i), Se(r, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const r = this, a = r.__v_raw, l = /* @__PURE__ */ oe(a), p = t ? Bs : e ? Qt : Ke;
      return !e && Se(l, "iterate", Dt), a.forEach((m, g) => i.call(o, p(m), p(g), r));
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
    n[i] = xa(i, e, t);
  }), n;
}
function pi(e, t) {
  const n = Ta(e, t);
  return (s, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    le(n, i) && i in s ? n : s,
    i,
    o
  );
}
const wa = {
  get: /* @__PURE__ */ pi(!1, !1)
}, Sa = {
  get: /* @__PURE__ */ pi(!1, !0)
}, Ea = {
  get: /* @__PURE__ */ pi(!0, !1)
};
const Bo = /* @__PURE__ */ new WeakMap(), Ho = /* @__PURE__ */ new WeakMap(), Ko = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakMap();
function Ia(e) {
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
    va,
    wa,
    Bo
  );
}
// @__NO_SIDE_EFFECTS__
function Ma(e) {
  return mi(
    e,
    !1,
    ba,
    Sa,
    Ho
  );
}
// @__NO_SIDE_EFFECTS__
function Hs(e) {
  return mi(
    e,
    !0,
    ya,
    Ea,
    Ko
  );
}
function mi(e, t, n, s, i) {
  if (!de(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = Ia(qr(e));
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
function Ca(e) {
  return !le(e, "__v_skip") && Object.isExtensible(e) && Mo(e, "__v_skip", !0), e;
}
const Ke = (e) => de(e) ? /* @__PURE__ */ vn(e) : e, Qt = (e) => de(e) ? /* @__PURE__ */ Hs(e) : e;
// @__NO_SIDE_EFFECTS__
function Me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  return Pa(e, !1);
}
function Pa(e, t) {
  return /* @__PURE__ */ Me(e) ? e : new Ra(e, t);
}
class Ra {
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
function zo(e) {
  return /* @__PURE__ */ $t(e) ? e : new Proxy(e, Va);
}
class Na {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new di(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ce !== this)
      return Lo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Fo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function La(e, t, n = !1) {
  let s, i;
  return ae(e) ? s = e : (s = e.get, i = e.set), new Na(s, i, n);
}
const Fn = {}, Zn = /* @__PURE__ */ new WeakMap();
let kt;
function ka(e, t = !1, n = kt) {
  if (n) {
    let s = Zn.get(n);
    s || Zn.set(n, s = []), s.push(e);
  }
}
function Oa(e, t, n = fe) {
  const { immediate: s, deep: i, once: o, scheduler: r, augmentJob: a, call: l } = n, p = (S) => i ? S : /* @__PURE__ */ De(S) || i === !1 || i === 0 ? ft(S, 1) : ft(S);
  let m, g, A, I, G = !1, R = !1;
  if (/* @__PURE__ */ Me(e) ? (g = () => e.value, G = /* @__PURE__ */ De(e)) : /* @__PURE__ */ $t(e) ? (g = () => p(e), G = !0) : Z(e) ? (R = !0, G = e.some((S) => /* @__PURE__ */ $t(S) || /* @__PURE__ */ De(S)), g = () => e.map((S) => {
    if (/* @__PURE__ */ Me(S))
      return S.value;
    if (/* @__PURE__ */ $t(S))
      return p(S);
    if (ae(S))
      return l ? l(S, 2) : S();
  })) : ae(e) ? t ? g = l ? () => l(e, 2) : e : g = () => {
    if (A) {
      At();
      try {
        A();
      } finally {
        It();
      }
    }
    const S = kt;
    kt = m;
    try {
      return l ? l(e, 3, [I]) : e(I);
    } finally {
      kt = S;
    }
  } : g = Ft, t && i) {
    const S = g, ne = i === !0 ? 1 / 0 : i;
    g = () => ft(S(), ne);
  }
  const O = ua(), $ = () => {
    m.stop(), O && O.active && wo(O.effects, m);
  };
  if (o && t) {
    const S = t;
    t = (...ne) => {
      const Ae = S(...ne);
      return $(), Ae;
    };
  }
  let U = R ? new Array(e.length).fill(Fn) : Fn;
  const Y = (S) => {
    if (!(!(m.flags & 1) || !m.dirty && !S))
      if (t) {
        const ne = m.run();
        if (S || i || G || (R ? ne.some((Ae, pe) => qe(Ae, U[pe])) : qe(ne, U))) {
          A && A();
          const Ae = kt;
          kt = m;
          try {
            const pe = [
              ne,
              // pass undefined as the old value when it's changed for the first time
              U === Fn ? void 0 : R && U[0] === Fn ? [] : U,
              I
            ];
            U = ne, l ? l(t, 3, pe) : (
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
  return a && a(Y), m = new Vo(g), m.scheduler = r ? () => r(Y, !1) : Y, I = (S) => ka(S, !1, m), A = m.onStop = () => {
    const S = Zn.get(m);
    if (S) {
      if (l)
        l(S, 4);
      else
        for (const ne of S) ne();
      Zn.delete(m);
    }
  }, t ? s ? Y(!0) : U = m.run() : r ? r(Y.bind(null, !0), !0) : m.run(), $.pause = m.pause.bind(m), $.resume = m.resume.bind(m), $.stop = $, $;
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
  else if (Ao(e)) {
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
    ps(i, t, n);
  }
}
function nt(e, t, n, s) {
  if (ae(e)) {
    const i = Ln(e, t, n, s);
    return i && So(i) && i.catch((o) => {
      ps(o, t, n);
    }), i;
  }
  if (Z(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(nt(e[o], t, n, s));
    return i;
  }
}
function ps(e, t, n, s = !0) {
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
  Fa(e, n, i, s, r);
}
function Fa(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Ie = [];
let Xe = -1;
const Wt = [];
let bt = null, Ht = 0;
const Wo = /* @__PURE__ */ Promise.resolve();
let Qn = null;
function Jo(e) {
  const t = Qn || Wo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Da(e) {
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
    !(e.flags & 2) && t >= En(n) ? Ie.push(e) : Ie.splice(Da(t), 0, e), e.flags |= 1, Xo();
  }
}
function Xo() {
  Qn || (Qn = Wo.then(Zo));
}
function $a(e) {
  if (!Z(e))
    bt && e.id === -1 ? bt.splice(Ht + 1, 0, e) : e.flags & 1 || (Wt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Wt.push(e[t]);
  Xo();
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
function Yo(e) {
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
function Zo(e) {
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
    Xe = -1, Ie.length = 0, Yo(), Qn = null, (Ie.length || Wt.length) && Zo();
  }
}
let Fe = null, Qo = null;
function qn(e) {
  const t = Fe;
  return Fe = e, Qo = e && e.type.__scopeId || null, t;
}
function Ga(e, t = Fe, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Fi(-1);
    const o = qn(t), r = Gt.length;
    let a;
    try {
      a = e(...i);
    } finally {
      for (let l = Gt.length; l > r; l--) hr();
      qn(o), s._d && Fi(1);
    }
    return a;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function j(e, t) {
  if (Fe === null)
    return e;
  const n = _s(Fe), s = e.dirs || (e.dirs = []);
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
function Nt(e, t, n, s) {
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
function Ua(e, t, n = !1) {
  const s = Ml();
  if (s || Jt) {
    let i = Jt ? Jt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ae(t) ? t.call(s && s.proxy) : t;
  }
}
const ja = /* @__PURE__ */ Symbol.for("v-scx"), Ba = () => Ua(ja);
function Ha(e, t, n) {
  return Ka(e, t, n);
}
function Ka(e, t, n = fe) {
  const { immediate: s, deep: i, flush: o, once: r } = n, a = ze({}, n), l = t && s || !t && o !== "post";
  let p;
  if (Mn) {
    if (o === "sync") {
      const I = Ba();
      p = I.__watcherHandles || (I.__watcherHandles = []);
    } else if (!l) {
      const I = () => {
      };
      return I.stop = Ft, I.resume = Ft, I.pause = Ft, I;
    }
  }
  const m = Mt;
  a.call = (I, G, R) => nt(I, m, G, R);
  let g = !1;
  o === "post" ? a.scheduler = (I) => {
    Pe(I, m && m.suspense);
  } : o !== "sync" && (g = !0, a.scheduler = (I, G) => {
    G ? I() : gi(I);
  }), a.augmentJob = (I) => {
    t && (I.flags |= 4), g && (I.flags |= 2, m && (I.id = m.uid, I.i = m));
  };
  const A = Oa(e, t, a);
  return Mn && (p ? p.push(A) : l && A()), A;
}
const za = /* @__PURE__ */ Symbol("_vte"), ms = (e) => e.__isTeleport, As = /* @__PURE__ */ Symbol("_leaveCb");
function Wa(e) {
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
function qo(e) {
  if (!er(e))
    return ms(e.type) && e.children ? Wa(e.children) : e;
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
      ms(n.type) && qo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Ja(e, t) {
  return ae(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ze({ name: e.name }, t, { setup: e })
  ) : e;
}
function Xa(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ri(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const es = /* @__PURE__ */ new WeakMap();
function yn(e, t, n, s, i = !1) {
  if (Z(e)) {
    e.forEach(
      (R, O) => yn(
        R,
        t && (Z(t) ? t[O] : t),
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
  const o = s.shapeFlag & 4 ? _s(s.component) : s.el, r = i ? null : o, { i: a, r: l } = e, p = t && t.r, m = a.refs === fe ? a.refs = {} : a.refs, g = a.setupState, A = /* @__PURE__ */ oe(g), I = g === fe ? To : (R) => Ri(m, R) ? !1 : le(A, R), G = (R, O) => !(O && Ri(m, O));
  if (p != null && p !== l) {
    if (Vi(t), be(p))
      m[p] = null, I(p) && (g[p] = null);
    else if (/* @__PURE__ */ Me(p)) {
      const R = t;
      G(p, R.k) && (p.value = null), R.k && (m[R.k] = null);
    }
  }
  if (ae(l))
    Ln(l, a, 12, [r, m]);
  else {
    const R = be(l), O = /* @__PURE__ */ Me(l);
    if (R || O) {
      const $ = () => {
        if (e.f) {
          const U = R ? I(l) ? g[l] : m[l] : G() || !e.k ? l.value : m[e.k];
          if (i)
            Z(U) && wo(U, o);
          else if (Z(U))
            U.includes(o) || U.push(o);
          else if (R)
            m[l] = [o], I(l) && (g[l] = m[l]);
          else {
            const Y = [o];
            G(l, e.k) && (l.value = Y), e.k && (m[e.k] = Y);
          }
        } else R ? (m[l] = r, I(l) && (g[l] = r)) : O && (G(l, e.k) && (l.value = r), e.k && (m[e.k] = r));
      };
      if (r) {
        const U = () => {
          $(), es.delete(e);
        };
        U.id = -1, es.set(e, U), Pe(U, n);
      } else
        Vi(e), $();
    }
  }
}
function Vi(e) {
  const t = es.get(e);
  t && (t.flags |= 8, es.delete(e));
}
fs().requestIdleCallback;
fs().cancelIdleCallback;
const bn = (e) => !!e.type.__asyncLoader, er = (e) => e.type.__isKeepAlive;
function Ya(e, t, n = Mt, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...r) => {
      At();
      const a = bi(n), l = nt(t, n, e, r);
      return a(), It(), l;
    });
    return s ? i.unshift(o) : i.push(o), o;
  }
}
const tr = (e) => (t, n = Mt) => {
  (!Mn || e === "sp") && Ya(e, (...s) => t(...s), n);
}, Za = tr("m"), Qa = tr("um"), qa = /* @__PURE__ */ Symbol.for("v-ndc");
function me(e, t, n, s) {
  let i;
  const o = n, r = Z(e);
  if (r || be(e)) {
    const a = r && /* @__PURE__ */ $t(e);
    let l = !1, p = !1;
    a && (l = !/* @__PURE__ */ De(e), p = /* @__PURE__ */ mt(e), e = ds(e)), i = new Array(e.length);
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
const Ks = (e) => e ? yr(e) ? _s(e) : Ks(e.parent) : null, xn = (
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
    $nextTick: (e) => e.n || (e.n = Jo.bind(e.proxy)),
    $watch: (e) => Ft
  })
), Is = (e, t) => e !== fe && !e.__isScriptSetup && le(e, t), el = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: o, accessCache: r, type: a, appContext: l } = e;
    if (t[0] !== "$") {
      const A = r[t];
      if (A !== void 0)
        switch (A) {
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
        if (Is(s, t))
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
      return t === "$attrs" && Se(e.attrs, "get", ""), p(e);
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
    return Is(i, t) ? (i[t] = n, !0) : le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: o, type: r }
  }, a) {
    let l;
    return !!(n[a] || Is(t, a) || le(o, a) || le(s, a) || le(xn, a) || le(i.config.globalProperties, a) || (l = r.__cssModules) && l[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : le(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function nr() {
  return {
    app: null,
    config: {
      isNativeTag: To,
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
let tl = 0;
function nl(e, t) {
  return function(s, i = null) {
    ae(s) || (s = ze({}, s)), i != null && !de(i) && (i = null);
    const o = nr(), r = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const p = o.app = {
      _uid: tl++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Ll,
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
      mount(m, g, A) {
        if (!l) {
          const I = p._ceVNode || dt(s, i);
          return I.appContext = o, A === !0 ? A = "svg" : A === !1 && (A = void 0), e(I, m, A), l = !0, p._container = m, m.__vue_app__ = p, _s(I.component);
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
const sl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Be(t)}Modifiers`] || e[`${Ut(t)}Modifiers`];
function il(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || fe;
  let i = n;
  const o = t.startsWith("update:"), r = o && sl(s, t.slice(7));
  r && (r.trim && (i = n.map((m) => be(m) ? m.trim() : m)), r.number && (i = n.map(us)));
  let a, l = s[a = xs(t)] || // also try camelCase event handler (#2249)
  s[a = xs(Be(t))];
  !l && o && (l = s[a = xs(Ut(t))]), l && nt(
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
function ol(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {};
  return o ? (Z(o) ? o.forEach((a) => r[a] = null) : ze(r, o), de(e) && s.set(e, r), r) : (de(e) && s.set(e, null), null);
}
function hs(e, t) {
  return !e || !as(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), le(e, t[0].toLowerCase() + t.slice(1)) || le(e, Ut(t)) || le(e, t));
}
function Ni(e) {
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
    data: A,
    setupState: I,
    ctx: G,
    inheritAttrs: R
  } = e, O = qn(e);
  let $, U;
  try {
    if (n.shapeFlag & 4) {
      const S = i || s, ne = S;
      $ = Qe(
        p.call(
          ne,
          S,
          m,
          g,
          I,
          A,
          G
        )
      ), U = a;
    } else {
      const S = t;
      $ = Qe(
        S.length > 1 ? S(
          g,
          { attrs: a, slots: r, emit: l }
        ) : S(
          g,
          null
        )
      ), U = t.props ? a : rl(a);
    }
  } catch (S) {
    Gt.length = 0, ps(S, e, 1), $ = dt(ht);
  }
  let Y = $;
  if (U && R !== !1) {
    const S = Object.keys(U), { shapeFlag: ne } = Y;
    S.length && ne & 7 && (o && S.some(ls) && (U = al(
      U,
      o
    )), Y = qt(Y, U, !1, !0));
  }
  if (n.dirs && (Y = qt(Y, null, !1, !0), Y.dirs = Y.dirs ? Y.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const S = ms(Y.type) && qo(Y) || Y;
    _i(S, n.transition);
  }
  return $ = Y, qn(O), $;
}
const rl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || as(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, al = (e, t) => {
  const n = {};
  for (const s in e)
    (!ls(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function ll(e, t, n) {
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
        const A = m[g];
        if (sr(r, s, A) && !hs(p, A))
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
    if (sr(t, e, o) && !hs(n, o))
      return !0;
  }
  return !1;
}
function sr(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && de(s) && de(i) ? !sn(s, i) : s !== i;
}
function cl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const ir = {}, or = () => Object.create(ir), rr = (e) => Object.getPrototypeOf(e) === ir;
function ul(e, t, n, s = !1) {
  const i = {}, o = or();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ar(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Ma(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function fl(e, t, n, s) {
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
        let A = m[g];
        if (hs(e.emitsOptions, A))
          continue;
        const I = t[A];
        if (l)
          if (le(o, A))
            I !== o[A] && (o[A] = I, p = !0);
          else {
            const G = Be(A);
            i[G] = zs(
              l,
              a,
              G,
              I,
              e,
              !1
            );
          }
        else
          I !== o[A] && (o[A] = I, p = !0);
      }
    }
  } else {
    ar(e, t, i, o) && (p = !0);
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
function ar(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let r = !1, a;
  if (t)
    for (let l in t) {
      if (hn(l))
        continue;
      const p = t[l];
      let m;
      i && le(i, m = Be(l)) ? !o || !o.includes(m) ? n[m] = p : (a || (a = {}))[m] = p : hs(e.emitsOptions, l) || (!(l in s) || p !== s[l]) && (s[l] = p, r = !0);
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
function dl(e, t, n = !1) {
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
        const g = o[p], A = r[m] = Z(g) || ae(g) ? { type: g } : ze({}, g), I = A.type;
        let G = !1, R = !0;
        if (Z(I))
          for (let O = 0; O < I.length; ++O) {
            const $ = I[O], U = ae($) && $.name;
            if (U === "Boolean") {
              G = !0;
              break;
            } else U === "String" && (R = !1);
          }
        else
          G = ae(I) && I.name === "Boolean";
        A[
          0
          /* shouldCast */
        ] = G, A[
          1
          /* shouldCastTrue */
        ] = R, (G || le(A, "default")) && a.push(m);
      }
    }
  const l = [r, a];
  return de(e) && s.set(e, l), l;
}
function ki(e) {
  return e[0] !== "$" && !hn(e);
}
const vi = (e) => e === "_" || e === "_ctx" || e === "$stable", yi = (e) => Z(e) ? e.map(Qe) : [Qe(e)], pl = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ga((...i) => yi(t(...i)), n);
  return s._c = !1, s;
}, lr = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (vi(i)) continue;
    const o = e[i];
    if (ae(o))
      t[i] = pl(i, o, s);
    else if (o != null) {
      const r = yi(o);
      t[i] = () => r;
    }
  }
}, cr = (e, t) => {
  const n = yi(t);
  e.slots.default = () => n;
}, ur = (e, t, n) => {
  for (const s in t)
    (n || !vi(s)) && (e[s] = t[s]);
}, ml = (e, t, n) => {
  const s = e.slots = or();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (ur(s, t, n), n && Mo(s, "_", i, !0)) : lr(t, s);
  } else t && cr(e, t);
}, hl = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let o = !0, r = fe;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : ur(i, t, n) : (o = !t.$stable, lr(t, i)), r = t;
  } else t && (cr(e, t), r = { default: 1 });
  if (o)
    for (const a in i)
      !vi(a) && r[a] == null && delete i[a];
}, Pe = bl;
function gl(e) {
  return _l(e);
}
function _l(e, t) {
  const n = fs();
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
    nextSibling: A,
    setScopeId: I = Ft,
    insertStaticContent: G
  } = e, R = (f, h, v, T = null, y = null, b = null, M = void 0, E = null, w = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !cn(f, h) && (T = ve(f), q(f, y, b, !0), f = null), h.patchFlag === -2 && (w = !1, h.dynamicChildren = null);
    const { type: x, ref: B, shapeFlag: N } = h;
    switch (x) {
      case gs:
        O(f, h, v, T);
        break;
      case ht:
        $(f, h, v, T);
        break;
      case Cs:
        f == null && U(h, v, T, M);
        break;
      case X:
        Ge(
          f,
          h,
          v,
          T,
          y,
          b,
          M,
          E,
          w
        );
        break;
      default:
        N & 1 ? ne(
          f,
          h,
          v,
          T,
          y,
          b,
          M,
          E,
          w
        ) : N & 6 ? an(
          f,
          h,
          v,
          T,
          y,
          b,
          M,
          E,
          w
        ) : (N & 64 || N & 128) && x.process(
          f,
          h,
          v,
          T,
          y,
          b,
          M,
          E,
          w,
          we
        );
    }
    B != null && y ? yn(B, f && f.ref, b, h || f, !h) : B == null && f && f.ref != null && yn(f.ref, null, b, f, !0);
  }, O = (f, h, v, T) => {
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
  }, $ = (f, h, v, T) => {
    f == null ? s(
      h.el = l(h.children || ""),
      v,
      T
    ) : h.el = f.el;
  }, U = (f, h, v, T) => {
    [f.el, f.anchor] = G(
      f.children,
      h,
      v,
      T,
      f.el,
      f.anchor
    );
  }, Y = ({ el: f, anchor: h }, v, T) => {
    let y;
    for (; f && f !== h; )
      y = A(f), s(f, v, T), f = y;
    s(h, v, T);
  }, S = ({ el: f, anchor: h }) => {
    let v;
    for (; f && f !== h; )
      v = A(f), i(f), f = v;
    i(h);
  }, ne = (f, h, v, T, y, b, M, E, w) => {
    if (h.type === "svg" ? M = "svg" : h.type === "math" && (M = "mathml"), f == null)
      Ae(
        h,
        v,
        T,
        y,
        b,
        M,
        E,
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
          M,
          E,
          w
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, Ae = (f, h, v, T, y, b, M, E) => {
    let w, x;
    const { props: B, shapeFlag: N, transition: D, dirs: H } = f;
    if (w = f.el = r(
      f.type,
      b,
      B && B.is,
      B
    ), N & 8 ? m(w, f.children) : N & 16 && $e(
      f.children,
      w,
      null,
      T,
      y,
      Ms(f, b),
      M,
      E
    ), H && Nt(f, null, T, "created"), pe(w, f, f.scopeId, M, T), B) {
      for (const re in B)
        re !== "value" && !hn(re) && o(w, re, null, B[re], b, T);
      "value" in B && o(w, "value", null, B.value, b), (x = B.onVnodeBeforeMount) && Je(x, T, f);
    }
    H && Nt(f, null, T, "beforeMount");
    const Q = vl(y, D);
    Q && D.beforeEnter(w), s(w, h, v), ((x = B && B.onVnodeMounted) || Q || H) && Pe(() => {
      x && Je(x, T, f), Q && D.enter(w), H && Nt(f, null, T, "mounted");
    }, y);
  }, pe = (f, h, v, T, y) => {
    if (v && I(f, v), T)
      for (let b = 0; b < T.length; b++)
        I(f, T[b]);
    if (y) {
      let b = y.subTree;
      if (h === b || mr(b.type) && (b.ssContent === h || b.ssFallback === h)) {
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
  }, $e = (f, h, v, T, y, b, M, E, w = 0) => {
    for (let x = w; x < f.length; x++) {
      const B = f[x] = E ? ct(f[x]) : Qe(f[x]);
      R(
        null,
        B,
        h,
        v,
        T,
        y,
        b,
        M,
        E
      );
    }
  }, Ct = (f, h, v, T, y, b, M) => {
    const E = h.el = f.el;
    let { patchFlag: w, dynamicChildren: x, dirs: B } = h;
    w |= f.patchFlag & 16;
    const N = f.props || fe, D = h.props || fe;
    let H;
    if (v && Lt(v, !1), (H = D.onVnodeBeforeUpdate) && Je(H, v, h, f), B && Nt(h, f, v, "beforeUpdate"), v && Lt(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    x && (!f.dynamicChildren || f.dynamicChildren.length !== x.length) && (w = 0, M = !1, x = null), (N.innerHTML && D.innerHTML == null || N.textContent && D.textContent == null) && m(E, ""), x ? Pt(
      f.dynamicChildren,
      x,
      E,
      v,
      T,
      Ms(h, y),
      b
    ) : M || Vt(
      f,
      h,
      E,
      null,
      v,
      T,
      Ms(h, y),
      b,
      !1
    ), w > 0) {
      if (w & 16)
        We(E, N, D, v, y);
      else if (w & 2 && N.class !== D.class && o(E, "class", null, D.class, y), w & 4 && o(E, "style", N.style, D.style, y), w & 8) {
        const Q = h.dynamicProps;
        for (let re = 0; re < Q.length; re++) {
          const se = Q[re], he = N[se], xe = D[se];
          (xe !== he || se === "value") && o(E, se, he, xe, y, v);
        }
      }
      w & 1 && f.children !== h.children && m(E, h.children);
    } else !M && x == null && We(E, N, D, v, y);
    ((H = D.onVnodeUpdated) || B) && Pe(() => {
      H && Je(H, v, h, f), B && Nt(h, f, v, "updated");
    }, T);
  }, Pt = (f, h, v, T, y, b, M) => {
    for (let E = 0; E < h.length; E++) {
      const w = f[E], x = h[E], B = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === X || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !cn(w, x) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 198) ? g(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      R(
        w,
        x,
        B,
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
        const M = v[b], E = h[b];
        M !== E && b !== "value" && o(f, b, E, M, y, T);
      }
      "value" in v && o(f, "value", h.value, v.value, y);
    }
  }, Ge = (f, h, v, T, y, b, M, E, w) => {
    const x = h.el = f ? f.el : a(""), B = h.anchor = f ? f.anchor : a("");
    let { patchFlag: N, dynamicChildren: D, slotScopeIds: H } = h;
    H && (E = E ? E.concat(H) : H), f == null ? (s(x, v, T), s(B, v, T), $e(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      v,
      B,
      y,
      b,
      M,
      E,
      w
    )) : N > 0 && N & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === D.length ? (Pt(
      f.dynamicChildren,
      D,
      v,
      y,
      b,
      M,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || y && h === y.subTree) && fr(
      f,
      h,
      !0
      /* shallow */
    )) : Vt(
      f,
      h,
      v,
      B,
      y,
      b,
      M,
      E,
      w
    );
  }, an = (f, h, v, T, y, b, M, E, w) => {
    h.slotScopeIds = E, f == null ? h.shapeFlag & 512 ? y.ctx.activate(
      h,
      v,
      T,
      M,
      w
    ) : Rt(
      h,
      v,
      T,
      y,
      b,
      M,
      w
    ) : jt(f, h, w);
  }, Rt = (f, h, v, T, y, b, M) => {
    const E = f.component = Il(
      f,
      T,
      y
    );
    if (er(f) && (E.ctx.renderer = we), Cl(E, !1, M), E.asyncDep) {
      if (y && y.registerDep(E, vt, M), !f.el) {
        const w = E.subTree = dt(ht);
        $(null, w, h, v), f.placeholder = w.el;
      }
    } else
      vt(
        E,
        f,
        h,
        v,
        y,
        b,
        M
      );
  }, jt = (f, h, v) => {
    const T = h.component = f.component;
    if (ll(f, h, v))
      if (T.asyncDep && !T.asyncResolved) {
        yt(T, h, v);
        return;
      } else
        T.next = h, T.update();
    else
      h.el = f.el, T.vnode = h;
  }, vt = (f, h, v, T, y, b, M) => {
    const E = () => {
      if (f.isMounted) {
        let { next: N, bu: D, u: H, parent: Q, vnode: re } = f;
        {
          const _ = dr(f);
          if (_) {
            N && (N.el = re.el, yt(f, N, M)), _.asyncDep.then(() => {
              Pe(() => {
                f.isUnmounted || x();
              }, y);
            });
            return;
          }
        }
        let se = N, he;
        Lt(f, !1), N ? (N.el = re.el, yt(f, N, M)) : N = re, D && zn(D), (he = N.props && N.props.onVnodeBeforeUpdate) && Je(he, Q, N, re), Lt(f, !0);
        const xe = Ni(f), ke = f.subTree;
        f.subTree = xe, R(
          ke,
          xe,
          // parent may have changed if it's in a teleport
          g(ke.el),
          // anchor may have changed if it's in a fragment
          ve(ke),
          f,
          y,
          b
        ), N.el = xe.el, se === null && cl(f, xe.el), H && Pe(H, y), (he = N.props && N.props.onVnodeUpdated) && Pe(
          () => Je(he, Q, N, re),
          y
        );
      } else {
        let N;
        const { el: D, props: H } = h, { bm: Q, m: re, parent: se, root: he, type: xe } = f, ke = bn(h);
        Lt(f, !1), Q && zn(Q), !ke && (N = H && H.onVnodeBeforeMount) && Je(N, se, h), Lt(f, !0);
        {
          he.ce && he.ce._hasShadowRoot() && he.ce._injectChildStyle(
            xe,
            f.parent ? f.parent.type : void 0
          );
          const _ = f.subTree = Ni(f);
          R(
            null,
            _,
            v,
            T,
            f,
            y,
            b
          ), h.el = _.el;
        }
        if (re && Pe(re, y), !ke && (N = H && H.onVnodeMounted)) {
          const _ = h;
          Pe(
            () => Je(N, se, _),
            y
          );
        }
        (h.shapeFlag & 256 || se && bn(se.vnode) && se.vnode.shapeFlag & 256) && f.a && Pe(f.a, y), f.isMounted = !0, h = v = T = null;
      }
    };
    f.scope.on();
    const w = f.effect = new Vo(E);
    f.scope.off();
    const x = f.update = w.run.bind(w), B = f.job = w.runIfDirty.bind(w);
    B.i = f, B.id = f.uid, w.scheduler = () => gi(B), Lt(f, !0), x();
  }, yt = (f, h, v) => {
    h.component = f;
    const T = f.vnode.props;
    f.vnode = h, f.next = null, fl(f, h.props, T, v), hl(f, h.children, v), At(), Pi(f), It();
  }, Vt = (f, h, v, T, y, b, M, E, w = !1) => {
    const x = f && f.children, B = f ? f.shapeFlag : 0, N = h.children, { patchFlag: D, shapeFlag: H } = h;
    if (D > 0) {
      if (D & 128) {
        F(
          x,
          N,
          v,
          T,
          y,
          b,
          M,
          E,
          w
        );
        return;
      } else if (D & 256) {
        P(
          x,
          N,
          v,
          T,
          y,
          b,
          M,
          E,
          w
        );
        return;
      }
    }
    H & 8 ? (B & 16 && te(x, y, b), N !== x && m(v, N)) : B & 16 ? H & 16 ? F(
      x,
      N,
      v,
      T,
      y,
      b,
      M,
      E,
      w
    ) : te(x, y, b, !0) : (B & 8 && m(v, ""), H & 16 && $e(
      N,
      v,
      T,
      y,
      b,
      M,
      E,
      w
    ));
  }, P = (f, h, v, T, y, b, M, E, w) => {
    f = f || Kt, h = h || Kt;
    const x = f.length, B = h.length, N = Math.min(x, B);
    let D;
    for (D = 0; D < N; D++) {
      const H = h[D] = w ? ct(h[D]) : Qe(h[D]);
      R(
        f[D],
        H,
        v,
        null,
        y,
        b,
        M,
        E,
        w
      );
    }
    x > B ? te(
      f,
      y,
      b,
      !0,
      !1,
      N
    ) : $e(
      h,
      v,
      T,
      y,
      b,
      M,
      E,
      w,
      N
    );
  }, F = (f, h, v, T, y, b, M, E, w) => {
    let x = 0;
    const B = h.length;
    let N = f.length - 1, D = B - 1;
    for (; x <= N && x <= D; ) {
      const H = f[x], Q = h[x] = w ? ct(h[x]) : Qe(h[x]);
      if (cn(H, Q))
        R(
          H,
          Q,
          v,
          null,
          y,
          b,
          M,
          E,
          w
        );
      else
        break;
      x++;
    }
    for (; x <= N && x <= D; ) {
      const H = f[N], Q = h[D] = w ? ct(h[D]) : Qe(h[D]);
      if (cn(H, Q))
        R(
          H,
          Q,
          v,
          null,
          y,
          b,
          M,
          E,
          w
        );
      else
        break;
      N--, D--;
    }
    if (x > N) {
      if (x <= D) {
        const H = D + 1, Q = H < B ? h[H].el : T;
        for (; x <= D; )
          R(
            null,
            h[x] = w ? ct(h[x]) : Qe(h[x]),
            v,
            Q,
            y,
            b,
            M,
            E,
            w
          ), x++;
      }
    } else if (x > D)
      for (; x <= N; )
        q(f[x], y, b, !0), x++;
    else {
      const H = x, Q = x, re = /* @__PURE__ */ new Map();
      for (x = Q; x <= D; x++) {
        const W = h[x] = w ? ct(h[x]) : Qe(h[x]);
        W.key != null && re.set(W.key, x);
      }
      let se, he = 0;
      const xe = D - Q + 1;
      let ke = !1, _ = 0;
      const c = new Array(xe);
      for (x = 0; x < xe; x++) c[x] = 0;
      for (x = H; x <= N; x++) {
        const W = f[x];
        if (he >= xe) {
          q(W, y, b, !0);
          continue;
        }
        let V;
        if (W.key != null)
          V = re.get(W.key);
        else
          for (se = Q; se <= D; se++)
            if (c[se - Q] === 0 && cn(W, h[se])) {
              V = se;
              break;
            }
        V === void 0 ? q(W, y, b, !0) : (c[V - Q] = x + 1, V >= _ ? _ = V : ke = !0, R(
          W,
          h[V],
          v,
          null,
          y,
          b,
          M,
          E,
          w
        ), he++);
      }
      const d = ke ? yl(c) : Kt;
      for (se = d.length - 1, x = xe - 1; x >= 0; x--) {
        const W = Q + x, V = h[W], Si = h[W + 1], Ei = W + 1 < B ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Si.el || pr(Si)
        ) : T;
        c[x] === 0 ? R(
          null,
          V,
          v,
          Ei,
          y,
          b,
          M,
          E,
          w
        ) : ke && (se < 0 || x !== d[se] ? J(V, v, Ei, 2) : se--);
      }
    }
  }, J = (f, h, v, T, y = null) => {
    const { el: b, type: M, transition: E, children: w, shapeFlag: x } = f;
    if (x & 6) {
      J(f.component.subTree, h, v, T);
      return;
    }
    if (x & 128) {
      f.suspense.move(h, v, T);
      return;
    }
    if (x & 64) {
      M.move(f, h, v, we);
      return;
    }
    if (M === X) {
      s(b, h, v);
      for (let N = 0; N < w.length; N++)
        J(w[N], h, v, T);
      s(f.anchor, h, v);
      return;
    }
    if (M === Cs) {
      Y(f, h, v);
      return;
    }
    if (T !== 2 && x & 1 && E)
      if (T === 0)
        E.persisted && !b[As] ? s(b, h, v) : (E.beforeEnter(b), s(b, h, v), Pe(() => E.enter(b), y));
      else {
        const { leave: N, delayLeave: D, afterLeave: H } = E, Q = () => {
          f.ctx.isUnmounted ? i(b) : s(b, h, v);
        }, re = () => {
          const se = b._isLeaving || !!b[As];
          b._isLeaving && b[As](
            !0
            /* cancelled */
          ), E.persisted && !se ? Q() : N(b, () => {
            Q(), H && H();
          });
        };
        D ? D(b, Q, re) : re();
      }
    else
      s(b, h, v);
  }, q = (f, h, v, T = !1, y = !1) => {
    const {
      type: b,
      props: M,
      ref: E,
      children: w,
      dynamicChildren: x,
      shapeFlag: B,
      patchFlag: N,
      dirs: D,
      cacheIndex: H,
      memo: Q
    } = f;
    if (N === -2 && (y = !1), E != null && (At(), yn(E, null, v, f, !0), It()), H != null && (h.renderCache[H] = void 0), B & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const re = B & 1 && D, se = !bn(f);
    let he;
    if (se && (he = M && M.onVnodeBeforeUnmount) && Je(he, h, f), B & 6)
      Ue(f.component, v, T);
    else {
      if (B & 128) {
        f.suspense.unmount(v, T);
        return;
      }
      re && Nt(f, null, h, "beforeUnmount"), B & 64 ? f.type.remove(
        f,
        h,
        v,
        we,
        T
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== X || N > 0 && N & 64) ? te(
        x,
        h,
        v,
        !1,
        !0
      ) : (b === X && N & 384 || !y && B & 16) && te(w, h, v), T && K(f);
    }
    const xe = Q != null && H == null;
    (se && (he = M && M.onVnodeUnmounted) || re || xe) && Pe(() => {
      he && Je(he, h, f), re && Nt(f, null, h, "unmounted"), xe && (f.el = null);
    }, v);
  }, K = (f) => {
    const { type: h, el: v, anchor: T, transition: y } = f;
    if (h === X) {
      ye(v, T);
      return;
    }
    if (h === Cs) {
      S(f);
      return;
    }
    const b = () => {
      i(v), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (f.shapeFlag & 1 && y && !y.persisted) {
      const { leave: M, delayLeave: E } = y, w = () => M(v, b);
      E ? E(f.el, b, w) : w();
    } else
      b();
  }, ye = (f, h) => {
    let v;
    for (; f !== h; )
      v = A(f), i(f), f = v;
    i(h);
  }, Ue = (f, h, v) => {
    const { bum: T, scope: y, job: b, subTree: M, um: E, m: w, a: x } = f;
    Oi(w), Oi(x), T && zn(T), y.stop(), b && (b.flags |= 8, q(M, f, h, v)), E && Pe(E, h), Pe(() => {
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
    const h = A(f.anchor || f.el), v = h && h[za];
    return v ? A(v) : h;
  };
  let Ce = !1;
  const Le = (f, h, v) => {
    let T;
    f == null ? h._vnode && (q(h._vnode, null, null, !0), T = h._vnode.component) : R(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      v
    ), h._vnode = f, Ce || (Ce = !0, Pi(T), Yo(), Ce = !1);
  }, we = {
    p: R,
    um: q,
    m: J,
    r: K,
    mt: Rt,
    mc: $e,
    pc: Vt,
    pbc: Pt,
    n: ve,
    o: e
  };
  return {
    render: Le,
    hydrate: void 0,
    createApp: nl(Le)
  };
}
function Ms({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Lt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function vl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function fr(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (Z(s) && Z(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = ct(i[o]), a.el = r.el), !n && a.patchFlag !== -2 && fr(r, a)), a.type === gs && (a.patchFlag === -1 && (a = i[o] = ct(a)), a.el = r.el), a.type === ht && !a.el && (a.el = r.el);
    }
}
function yl(e) {
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
function dr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : dr(t);
}
function Oi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function pr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? pr(t.subTree) : null;
}
const mr = (e) => e.__isSuspense;
function bl(e, t) {
  t && t.pendingBranch ? Z(e) ? t.effects.push(...e) : t.effects.push(e) : $a(e);
}
const X = /* @__PURE__ */ Symbol.for("v-fgt"), gs = /* @__PURE__ */ Symbol.for("v-txt"), ht = /* @__PURE__ */ Symbol.for("v-cmt"), Cs = /* @__PURE__ */ Symbol.for("v-stc"), Gt = [];
let Ne = null;
function L(e = !1) {
  Gt.push(Ne = e ? null : []);
}
function hr() {
  Gt.pop(), Ne = Gt[Gt.length - 1] || null;
}
let An = 1;
function Fi(e, t = !1) {
  An += e, e < 0 && Ne && t && (Ne.hasOnce = !0);
}
function gr(e) {
  return e.dynamicChildren = An > 0 ? Ne || Kt : null, hr(), An > 0 && Ne && Ne.push(e), e;
}
function k(e, t, n, s, i, o) {
  return gr(
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
function xl(e, t, n, s, i) {
  return gr(
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
function _r(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function cn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const vr = ({ key: e }) => e ?? null, Wn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? be(e) || /* @__PURE__ */ Me(e) || ae(e) ? { i: Fe, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, i = null, o = e === X ? 0 : 1, r = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && vr(t),
    ref: t && Wn(t),
    scopeId: Qo,
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
  return a ? (ts(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= be(n) ? 8 : 16), An > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Ne && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ne.push(l), l;
}
const dt = Tl;
function Tl(e, t = null, n = null, s = 0, i = null, o = !1) {
  if ((!e || e === qa) && (e = ht), _r(e)) {
    const a = qt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ts(a, n), An > 0 && !o && Ne && (a.shapeFlag & 6 ? Ne[Ne.indexOf(e)] = a : Ne.push(a)), a.patchFlag = -2, a;
  }
  if (Nl(e) && (e = e.__vccOpts), t) {
    t = wl(t);
    let { class: a, style: l } = t;
    a && !be(a) && (t.class = Ye(a)), de(l) && (/* @__PURE__ */ hi(l) && !Z(l) && (l = ze({}, l)), t.style = ai(l));
  }
  const r = be(e) ? 1 : mr(e) ? 128 : ms(e) ? 64 : de(e) ? 4 : ae(e) ? 2 : 0;
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
function wl(e) {
  return e ? /* @__PURE__ */ hi(e) || rr(e) ? ze({}, e) : e : null;
}
function qt(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: r, children: a, transition: l } = e, p = t ? Sl(i || {}, t) : i, m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && vr(p),
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
  return dt(gs, null, e, t);
}
function je(e = "", t = !1) {
  return t ? (L(), xl(ht, null, e)) : dt(ht, null, e);
}
function Qe(e) {
  return e == null || typeof e == "boolean" ? dt(ht) : Z(e) ? dt(
    X,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : _r(e) ? ct(e) : dt(gs, null, String(e));
}
function ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qt(e);
}
function ts(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Z(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ts(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !rr(t) ? t._ctx = Fe : i === 3 && Fe && (Fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ae(t)) {
    if (s & 65) {
      ts(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Fe }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [at(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Sl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Ye([t.class, s.class]));
      else if (i === "style")
        t.style = ai([t.style, s.style]);
      else if (as(i)) {
        const o = t[i], r = s[i];
        r && o !== r && !(Z(o) && o.includes(r)) ? t[i] = o ? [].concat(o, r) : r : r == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ls(i) && (t[i] = r);
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
const El = nr();
let Al = 0;
function Il(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || El, o = {
    uid: Al++,
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
    scope: new ca(
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
    propsOptions: dl(s, i),
    emitsOptions: ol(s, i),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = il.bind(null, o), e.ce && e.ce(o), o;
}
let Mt = null;
const Ml = () => Mt || Fe;
let ns, In;
{
  const e = fs(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  ns = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Mt = n
  ), In = t(
    "__VUE_SSR_SETTERS__",
    (n) => Mn = n
  );
}
const bi = (e) => {
  const t = Mt;
  return ns(e), e.scope.on(), () => {
    e.scope.off(), ns(t);
  };
}, Di = () => {
  Mt && Mt.scope.off(), ns(null);
};
function yr(e) {
  return e.vnode.shapeFlag & 4;
}
let Mn = !1;
function Cl(e, t = !1, n = !1) {
  t && In(t);
  const { props: s, children: i } = e.vnode, o = yr(e);
  ul(e, s, o, t), ml(e, i, n || t);
  const r = o ? Pl(e, t) : void 0;
  return t && In(!1), r;
}
function Pl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, el);
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
    ), a = So(r);
    if (It(), o(), (a || e.sp) && !bn(e) && Xa(e), a) {
      if (r.then(Di, Di), t)
        return r.then((l) => {
          In(!0);
          try {
            $i(e, l, t);
          } finally {
            In(!1);
          }
        }).catch((l) => {
          ps(l, e, 0);
        });
      e.asyncDep = r;
    } else
      $i(e, r);
  } else
    br(e);
}
function $i(e, t, n) {
  ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : de(t) && (e.setupState = zo(t)), br(e);
}
function br(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ft);
}
const Rl = {
  get(e, t) {
    return Se(e, "get", ""), e[t];
  }
};
function Vl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Rl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function _s(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(zo(Ca(e.exposed)), {
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
function Nl(e) {
  return ae(e) && "__vccOpts" in e;
}
const ge = (e, t) => /* @__PURE__ */ La(e, t, Mn), Ll = "3.5.41";
let Ws;
const Gi = typeof window < "u" && window.trustedTypes;
if (Gi)
  try {
    Ws = /* @__PURE__ */ Gi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const xr = Ws ? (e) => Ws.createHTML(e) : (e) => e, kl = "http://www.w3.org/2000/svg", Ol = "http://www.w3.org/1998/Math/MathML", lt = typeof document < "u" ? document : null, Ui = lt && /* @__PURE__ */ lt.createElement("template"), Fl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? lt.createElementNS(kl, e) : t === "mathml" ? lt.createElementNS(Ol, e) : n ? lt.createElement(e, { is: n }) : lt.createElement(e);
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
      Ui.innerHTML = xr(
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
}, Dl = /* @__PURE__ */ Symbol("_vtc");
function $l(e, t, n) {
  const s = e[Dl];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ji = /* @__PURE__ */ Symbol("_vod"), Gl = /* @__PURE__ */ Symbol("_vsh"), Ul = /* @__PURE__ */ Symbol(""), jl = /(?:^|;)\s*display\s*:/;
function Bl(e, t, n) {
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
      a != null ? Kl(
        e,
        r,
        !be(t) && t ? t[r] : void 0,
        a
      ) || pn(s, r, a) : pn(s, r, "");
    }
  } else if (i) {
    if (t !== n) {
      const r = s[Ul];
      r && (n += ";" + r), s.cssText = n, o = jl.test(n);
    }
  } else t && e.removeAttribute("style");
  ji in e && (e[ji] = o ? s.display : "", e[Gl] && (s.display = "none"));
}
const Bi = /\s*!important$/;
function pn(e, t, n) {
  if (Z(n))
    n.forEach((s) => pn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Hl(e, t);
    Bi.test(n) ? e.setProperty(
      Ut(s),
      n.replace(Bi, ""),
      "important"
    ) : e[s] = n;
  }
}
const Hi = ["Webkit", "Moz", "ms"], Ps = {};
function Hl(e, t) {
  const n = Ps[t];
  if (n)
    return n;
  let s = Be(t);
  if (s !== "filter" && s in e)
    return Ps[t] = s;
  s = Io(s);
  for (let i = 0; i < Hi.length; i++) {
    const o = Hi[i] + s;
    if (o in e)
      return Ps[t] = o;
  }
  return t;
}
function Kl(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && be(s) && n === s;
}
const Ki = "http://www.w3.org/1999/xlink";
function zi(e, t, n, s, i, o = aa(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ki, t.slice(6, t.length)) : e.setAttributeNS(Ki, t, n) : n == null || o && !Co(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : tt(n) ? String(n) : n
  );
}
function Wi(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? xr(n) : n);
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
    a === "boolean" ? n = Co(n) : n == null && a === "string" ? (n = "", r = !0) : a === "number" && (n = 0, r = !0);
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
function zl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ji = /* @__PURE__ */ Symbol("_vei");
function Wl(e, t, n, s, i = null) {
  const o = e[Ji] || (e[Ji] = {}), r = o[t];
  if (s && r)
    r.value = s;
  else {
    const [a, l] = Yl(t);
    if (s) {
      const p = o[t] = ql(
        s,
        i
      );
      Tt(e, a, p, l);
    } else r && (zl(e, a, r, l), o[t] = void 0);
  }
}
const Jl = /(Once|Passive|Capture)$/, Xl = /^on:?(?:Once|Passive|Capture)$/;
function Yl(e) {
  let t, n;
  for (; (n = e.match(Jl)) && !Xl.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ut(e.slice(2)), t];
}
let Rs = 0;
const Zl = /* @__PURE__ */ Promise.resolve(), Ql = () => Rs || (Zl.then(() => Rs = 0), Rs = Date.now());
function ql(e, t) {
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
  return n.value = e, n.attached = Ql(), n;
}
const Xi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ec = (e, t, n, s, i, o) => {
  const r = i === "svg";
  t === "class" ? $l(e, s, r) : t === "style" ? Bl(e, n, s) : as(t) ? ls(t) || Wl(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tc(e, t, s, r)) ? (Wi(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && zi(e, t, s, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (nc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !be(s))) ? Wi(e, Be(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), zi(e, t, s, r));
};
function tc(e, t, n, s) {
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
function nc(e, t) {
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
function sc(e) {
  e.target.composing = !0;
}
function Yi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const et = /* @__PURE__ */ Symbol("_assign"), Dn = /* @__PURE__ */ Symbol("_initialValue");
function Vs(e, t, n) {
  return t && (e = e.trim()), n && (e = us(e)), e;
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
    }), t || (Tt(e, "compositionstart", sc), Tt(e, "compositionend", Yi), Tt(e, "change", Yi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", o = e[Dn];
    delete e[Dn], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[et](Vs(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: o } }, r) {
    if (e[et] = en(r), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? us(e.value) : e.value, l = t ?? "";
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
        r(Tr(e, o));
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
    i = sn(t, Tr(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const _e = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, Tt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? us(Cn(o)) : Cn(o)
      );
      e[et](
        e.multiple ? nn(e._modelValue) ? new Set(i) : i : i[0]
      ), e._assigning = !0, Jo(() => {
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
function Tr(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const ic = /* @__PURE__ */ ze({ patchProp: ec }, Fl);
let eo;
function oc() {
  return eo || (eo = gl(ic));
}
const rc = ((...e) => {
  const t = oc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = lc(s);
    if (!i) return;
    const o = t._component;
    !ae(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, ac(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
});
function ac(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function lc(e) {
  return be(e) ? document.querySelector(e) : e;
}
const cc = "tavern_multi_tts_cache", Oe = "audio_cache", uc = 1, to = 100, no = 50 * 1024 * 1024;
function so(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function fc(e) {
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
async function dc(e) {
  const t = fc(e), n = JSON.stringify(t);
  if (Object.keys(t).some((i) => /api[_-]?key|authorization|token|secret|password/i.test(i)))
    throw new Error("音频缓存键不得包含密钥字段");
  const s = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(n));
  return [...new Uint8Array(s)].map((i) => i.toString(16).padStart(2, "0")).join("");
}
function pc() {
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
function mc(e, t) {
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
      const p = e.open(t, uc);
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
function hc(e, t) {
  const n = mc(e, t);
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
async function gc(e) {
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
function _c(e) {
  const t = e?.backend === "memory" ? pc() : hc(
    e?.indexedDB ?? indexedDB,
    e?.dbName ?? cc
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
      }), await gc(t);
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
const vs = _c({
  backend: typeof indexedDB > "u" ? "memory" : "indexeddb"
});
function vc(e) {
  return vs.get(e);
}
function yc(e, t) {
  return vs.set(e, t);
}
function wr() {
  return vs.clear();
}
function bc() {
  return vs.stats();
}
let xt = null, Jn = null;
function Xn() {
  xt && (xt.pause(), Jn?.());
}
function Sr(e, t, n, s, i) {
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
function Er(e) {
  return [...e].map((n) => n.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(n) ? "_" : n).join("").trim() || "audio.mp3";
}
function xc(e, t, n = "mp3") {
  return Er(`tavern_multi_tts_${e}_${t}.${n}`);
}
function Tc(e, t) {
  const n = Er(t), s = URL.createObjectURL(e), i = URL.revokeObjectURL.bind(URL), o = document.createElement("a");
  o.href = s, o.download = n, document.body.appendChild(o), o.click(), o.remove(), window.setTimeout(() => i(s), 0);
}
const wc = "Tavern Multi-TTS", Ns = "tavern_multi_tts", Sc = "0.1.0", Ls = "tavern-multi-tts-root", Ee = "[Tavern Multi-TTS]", ss = ["ZH", "EN", "JA", "AR", "ES"], xi = ["s2.1-pro-free", "s2.1-pro"], Ar = 3, Ir = [
  "speech-02-hd",
  "speech-02-turbo",
  "speech-2.8-hd",
  "speech-2.8-turbo",
  "speech-2.6-hd",
  "speech-2.6-turbo"
], Yn = [
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
`), Ec = [
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
  schemaVersion: Ar,
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
  injectTemplate: Yn,
  indexTtsInjectTemplate: Js,
  fishAudioInjectTemplate: Xs
};
function _t(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function ee(e, t) {
  return typeof e == "string" ? e : t;
}
function Ac(e) {
  const t = ee(e, Yn) || Yn;
  return t === Ec ? Yn : t;
}
function ks(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Ve(e, t, n, s, i = !1) {
  const o = typeof e == "number" ? e : Number(e);
  if (!Number.isFinite(o))
    return s;
  const r = i ? Math.round(o) : o;
  return Math.min(n, Math.max(t, r));
}
function Ic(e) {
  return e === "minimax" || e === "local_gsvi" || e === "index_tts" || e === "fish_audio" ? e : "minimax";
}
function Mr(e) {
  return ss.includes(String(e)) ? e : gt.indexTtsLanguage;
}
function Mc(e) {
  return xi.includes(String(e)) ? e : gt.fishAudioModel;
}
function Cc(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Pc(e) {
  return Ir.includes(String(e)) ? e : gt.model;
}
function Rc(e) {
  return e === "manual" || e === "auto_first_n" || e === "auto_all" ? e : gt.prefetchMode;
}
function Vc(e) {
  return e === "user" || e === "assistant" || e === "system" ? e : gt.injectRole;
}
function Nc(e) {
  return e === "zh" || e === "en" || e === "ja" ? e : gt.testLanguage;
}
function Lc(e) {
  return e === "wav" ? "wav" : "mp3";
}
function Cr(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    characterName: ee(t.characterName, "").trim(),
    minimaxVoiceId: ee(t.minimaxVoiceId, "").trim()
  })).filter((t) => t.characterName || t.minimaxVoiceId) : [];
}
function kc(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    name: ee(t.name, "").trim(),
    mappings: Cr(t.mappings)
  })).filter((t) => t.name) : [];
}
function Pr(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    characterName: ee(t.characterName, "").trim(),
    gsviVoiceId: ee(t.gsviVoiceId, "").trim(),
    gsviLanguage: ee(t.gsviLanguage, "").trim(),
    gsviEmotion: ee(t.gsviEmotion, "").trim()
  })).filter((t) => t.characterName || t.gsviVoiceId) : [];
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
    indexTtsVoiceId: ee(t.indexTtsVoiceId, "").trim(),
    indexTtsLanguage: Mr(t.indexTtsLanguage)
  })).filter((t) => t.characterName || t.indexTtsVoiceId) : [];
}
function Fc(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    name: ee(t.name, "").trim(),
    mappings: Rr(t.mappings)
  })).filter((t) => t.name) : [];
}
function Vr(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    characterName: ee(t.characterName, "").trim(),
    fishAudioReferenceId: ee(t.fishAudioReferenceId, "").trim()
  })).filter((t) => t.characterName || t.fishAudioReferenceId) : [];
}
function Dc(e) {
  return Array.isArray(e) ? e.filter(_t).map((t) => ({
    name: ee(t.name, "").trim(),
    mappings: Vr(t.mappings)
  })).filter((t) => t.name) : [];
}
function $c(e, t) {
  const n = typeof e == "number" ? e : Number(e);
  return Number.isFinite(n) ? n : t;
}
function Xt(e) {
  const t = _t(e) ? e : {};
  return {
    schemaVersion: Ar,
    enabled: ks(t.enabled, gt.enabled),
    ttsEngine: Ic(t.ttsEngine),
    apiKey: ee(t.apiKey, ""),
    groupId: ee(t.groupId, ""),
    voiceId: ee(t.voiceId, ""),
    voiceCatalogSelectedId: ee(t.voiceCatalogSelectedId, ""),
    minimaxRegion: Cc(t.minimaxRegion),
    testLanguage: Nc(t.testLanguage),
    model: Pc(t.model),
    speed: Ve(t.speed, 0.5, 2, 1),
    vol: Ve(t.vol, 0, 10, 1),
    requestTimeoutMs: Ve(t.requestTimeoutMs, 1e3, 3e4, 15e3, !0),
    maxConcurrency: Ve(t.maxConcurrency, 1, 10, 3, !0),
    prefetchMode: Rc(t.prefetchMode),
    prefetchFirstCount: Ve(t.prefetchFirstCount, 1, 10, 2, !0),
    localGsviBaseUrl: ee(t.localGsviBaseUrl, ""),
    localGsviAuthToken: ee(t.localGsviAuthToken, ""),
    localGsviModel: ee(t.localGsviModel, ""),
    localGsviFormat: Lc(t.localGsviFormat),
    localGsviUseReferenceAudio: ks(t.localGsviUseReferenceAudio, !1),
    localGsviCharacter: ee(t.localGsviCharacter, ""),
    localGsviLanguage: ee(t.localGsviLanguage, "ja"),
    localGsviEmotion: ee(t.localGsviEmotion, ""),
    localGsviReferenceText: ee(t.localGsviReferenceText, ""),
    localGsviTopK: Ve(t.localGsviTopK, 1, 200, 20, !0),
    localGsviTopP: Ve(t.localGsviTopP, 0, 1, 0.7),
    localGsviTemperature: Ve(t.localGsviTemperature, 0, 2, 0.7),
    localGsviTextLang: ee(t.localGsviTextLang, "多语种混合"),
    localGsviTextSplitMethod: ee(t.localGsviTextSplitMethod, "按标点符号切"),
    localGsviBatchSize: Ve(t.localGsviBatchSize, 1, 8, 1, !0),
    characterMappings: Cr(t.characterMappings),
    characterMappingPresets: kc(t.characterMappingPresets),
    gsviCharacterMappings: Pr(t.gsviCharacterMappings),
    gsviCharacterMappingPresets: Oc(t.gsviCharacterMappingPresets),
    indexTtsBaseUrl: ee(t.indexTtsBaseUrl, gt.indexTtsBaseUrl),
    indexTtsVoiceId: ee(t.indexTtsVoiceId, ""),
    indexTtsLanguage: Mr(t.indexTtsLanguage),
    indexTtsCharacterMappings: Rr(t.indexTtsCharacterMappings),
    indexTtsCharacterMappingPresets: Fc(t.indexTtsCharacterMappingPresets),
    indexTtsDurationFactor: Ve(t.indexTtsDurationFactor, 0.5, 2, 1),
    indexTtsEmoWeight: Ve(t.indexTtsEmoWeight, 0, 1, 0.8),
    fishAudioApiKey: ee(t.fishAudioApiKey, ""),
    fishAudioModel: Mc(t.fishAudioModel),
    fishAudioReferenceId: ee(t.fishAudioReferenceId, ""),
    fishAudioSpeed: Ve(t.fishAudioSpeed, 0.5, 2, 1),
    fishAudioVolume: $c(t.fishAudioVolume, 0),
    fishAudioCharacterMappings: Vr(t.fishAudioCharacterMappings),
    fishAudioCharacterMappingPresets: Dc(
      t.fishAudioCharacterMappingPresets
    ),
    injectEnabled: ks(t.injectEnabled, !0),
    injectDepth: Ve(t.injectDepth, 0, 50, 1, !0),
    injectRole: Vc(t.injectRole),
    injectTemplate: Ac(t.injectTemplate),
    indexTtsInjectTemplate: ee(t.indexTtsInjectTemplate, Js) || Js,
    fishAudioInjectTemplate: ee(t.fishAudioInjectTemplate, Xs) || Xs
  };
}
function St(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function Gc(e, t) {
  return e.enabled !== t.enabled || e.injectEnabled !== t.injectEnabled || e.injectDepth !== t.injectDepth || e.injectRole !== t.injectRole || e.injectTemplate !== t.injectTemplate || e.indexTtsInjectTemplate !== t.indexTtsInjectTemplate || e.fishAudioInjectTemplate !== t.fishAudioInjectTemplate || e.ttsEngine !== t.ttsEngine || !St(e.characterMappings, t.characterMappings) || !St(e.gsviCharacterMappings, t.gsviCharacterMappings) || !St(e.indexTtsCharacterMappings, t.indexTtsCharacterMappings) || !St(e.fishAudioCharacterMappings, t.fishAudioCharacterMappings);
}
function Uc(e, t) {
  return e.enabled !== t.enabled || e.ttsEngine !== t.ttsEngine || !St(e.characterMappings, t.characterMappings) || !St(e.gsviCharacterMappings, t.gsviCharacterMappings) || !St(e.indexTtsCharacterMappings, t.indexTtsCharacterMappings) || !St(e.fishAudioCharacterMappings, t.fishAudioCharacterMappings);
}
function jc(e, t) {
  return {
    syncInjection: Gc(e, t),
    refreshDecorations: Uc(e, t)
  };
}
function Bc(e, t, n = {}) {
  let s = !1, i = !1, o = null, r = null, a = null;
  function l() {
    return Xt(e.readRawSettings());
  }
  function p() {
    const R = l();
    return e.writeSettings(R), R;
  }
  function m() {
    if (s)
      return !0;
    const R = document.getElementById(Ls);
    R && R.remove();
    const O = e.findSettingsRoot();
    return O ? (a = document.createElement("div"), a.id = Ls, a.dataset.tavernMultiTts = "settings", O.appendChild(a), t.mount(a, l()), r = e.onPageHide(() => {
      g({ removeSettings: !1 });
    }), s = !0, n.startRuntime?.(), console.info(`${Ee} settings panel mounted`), !0) : !1;
  }
  function g(R) {
    n.stopRuntime?.(), n.stopPlayback?.(), o?.(), o = null, i = !1, r?.(), r = null, t.unmount(), (a ?? document.getElementById(Ls))?.remove(), a = null, s = !1, R.removeSettings && e.removeSettings();
  }
  function A() {
    s || i || (p(), !m() && (i = !0, o = e.onAppReady(() => {
      const R = i;
      i = !1;
      const O = o;
      o = null, O?.(), R && (m() || console.error(
        `${Ee} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`
      ));
    })));
  }
  function I(R) {
    const O = l();
    O.enabled = R, e.writeSettings(O), n.syncInjection?.(), n.refreshDecorations?.();
  }
  function G(R) {
    const O = l();
    O.injectEnabled = R, e.writeSettings(O), n.syncInjection?.();
  }
  return {
    activate: A,
    disable() {
      g({ removeSettings: !1 }), console.info(`${Ee} disabled`);
    },
    destroy() {
      g({ removeSettings: !1 });
    },
    install() {
      p();
    },
    clean() {
      return g({ removeSettings: !0 }), console.info(`${Ee} settings cleaned`), n.clearCache?.();
    },
    delete() {
      return g({ removeSettings: !0 }), console.info(`${Ee} deleted`), n.clearCache?.();
    },
    updateSettings(R) {
      const O = l();
      e.writeSettings(Xt(R));
      const $ = jc(O, l());
      $.syncInjection && n.syncInjection?.(), $.refreshDecorations && n.refreshDecorations?.();
    },
    setEnabled: I,
    setInjectEnabled: G,
    isActive() {
      return s;
    }
  };
}
function Hc() {
  return document.querySelector("#extensions_settings2") ?? document.querySelector("#extensions_settings");
}
class C extends Error {
  code;
  status;
  constructor(t, n, s) {
    super(t), this.name = "TtsRequestError", this.code = n, this.status = s;
  }
}
function Nr(e) {
  return e instanceof C;
}
function Kc(e) {
  return new C(`请求超时（${e}ms），请检查网络或增大超时时间`, "timeout");
}
function zc() {
  return new C("请求已取消", "cancelled");
}
async function pt(e, t, n, s) {
  const i = new AbortController();
  let o = !1, r = !1, a = null;
  const l = () => {
    r || (r = !0, clearTimeout(m), g?.removeEventListener("abort", A));
  }, p = () => o && !g?.aborted ? Kc(s) : zc(), m = setTimeout(() => {
    o = !0, i.abort("timeout");
  }, s), g = n.signal, A = () => {
    i.abort(g?.reason ?? "cancelled");
  };
  g && (g.aborted ? i.abort(g.reason ?? "cancelled") : g.addEventListener("abort", A, { once: !0 }));
  const I = () => {
    a?.(p());
  };
  i.signal.addEventListener("abort", I);
  const G = () => new Promise((O, $) => {
    if (i.signal.aborted) {
      $(p());
      return;
    }
    a = $;
  }), R = async (O) => {
    try {
      return await Promise.race([O, G()]);
    } catch ($) {
      throw $ instanceof C ? $ : i.signal.aborted ? p() : $;
    } finally {
      l(), i.signal.removeEventListener("abort", I);
    }
  };
  try {
    const O = await Promise.race([
      e(t, {
        ...n,
        signal: i.signal
      }),
      G()
    ]);
    return {
      ok: O.ok,
      status: O.status,
      statusText: O.statusText,
      headers: O.headers,
      text: () => R(O.text()),
      async json() {
        const $ = await R(O.text());
        try {
          return JSON.parse($);
        } catch {
          throw new C(
            "服务返回的不是合法 JSON，请检查地址或稍后重试",
            "invalid_json"
          );
        }
      },
      blob: () => R(O.blob()),
      close: l
    };
  } catch (O) {
    throw l(), i.signal.removeEventListener("abort", I), O instanceof C ? O : i.signal.aborted ? p() : O;
  }
}
function Yt(e, t) {
  return `${e.replace(/\/+$/, "")}${t.startsWith("/") ? "" : "/"}${t}`;
}
function Wc(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function Jc(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const Xc = /api[_-]?key|authorization|token|secret|cookie|password/i;
function is(e) {
  if (typeof e == "string")
    return e.length > 80 ? `${e.slice(0, 80)}…(len=${e.length})` : e;
  if (Array.isArray(e))
    return e.map((n) => is(n));
  if (!e || typeof e != "object")
    return e;
  const t = {};
  for (const [n, s] of Object.entries(e)) {
    if (Xc.test(n)) {
      t[n] = "[redacted]";
      continue;
    }
    if (n === "text" || n === "input" || n === "referenceText" || n === "reference_text") {
      t[n] = typeof s == "string" ? `[text len=${s.length}]` : "[text]";
      continue;
    }
    t[n] = is(s);
  }
  return t;
}
function ys(e, t, n) {
  if (n === void 0) {
    console.info(`${Ee} [${e}] ${t}`);
    return;
  }
  console.info(`${Ee} [${e}] ${t}`, is(n));
}
function Ys(e, t, n) {
  if (n === void 0) {
    console.warn(`${Ee} [${e}] ${t}`);
    return;
  }
  console.warn(`${Ee} [${e}] ${t}`, is(n));
}
const Lr = "IndexTTS-2.5", Zs = "indextts", Qs = "1", qs = "2.5";
function Pn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Yc(e) {
  return ss.includes(String(e));
}
function Zc(e) {
  const t = {
    model: Lr,
    input: e.text,
    voice: e.voiceId.trim(),
    response_format: "wav",
    language: e.language,
    duration_factor: e.durationFactor,
    emo_weight: e.emoWeight
  };
  return e.emotion && Object.keys(e.emotion).length > 0 && (t.emotion = e.emotion), t;
}
function Qc(e) {
  if (!e.baseUrl.trim())
    throw new C("请先填写 IndexTTS 服务地址", "config");
  if (!e.voiceId.trim())
    throw new C("请先选择 IndexTTS 音色预设", "config");
  if (!Yc(e.language))
    throw new C("IndexTTS 语言必须是 ZH、EN、JA、AR 或 ES", "config");
  if (!e.text.trim())
    throw new C("IndexTTS 合成文本为空", "config");
}
function qc(e) {
  return (e ?? "").split(";")[0]?.trim().toLowerCase() === "audio/wav";
}
function eu(e, t) {
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
      return eu(JSON.parse(t), e.status);
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
function tu(e) {
  return e.service !== Zs ? `IndexTTS 健康检查失败：服务名无效（期望 ${Zs}）` : e.api_version !== Qs ? `IndexTTS 健康检查失败：API 版本不匹配（期望 ${Qs}）` : e.model_version !== qs ? `IndexTTS 健康检查失败：模型版本不匹配（期望 ${qs}）` : e.model_loaded !== !0 ? "IndexTTS 服务在线，但模型尚未加载。请先在服务端加载模型后再试。" : e.ok !== !0 ? "IndexTTS 服务报告未就绪" : "IndexTTS 健康检查响应结构无效";
}
function nu(e) {
  return Pn(e) ? e.ok === !0 && e.service === Zs && e.api_version === Qs && e.model_version === qs && e.model_loaded === !0 ? { ok: !0, message: "IndexTTS 服务在线，模型已加载（IndexTTS-2.5）" } : { ok: !1, message: tu(e) } : { ok: !1, message: "IndexTTS 健康检查响应结构无效" };
}
function su(e) {
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
function iu(e) {
  return e instanceof C ? { ok: !1, message: e.message } : {
    ok: !1,
    message: "无法连接 IndexTTS 服务。请确认服务已启动，并检查地址是否正确。"
  };
}
function ou(e) {
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
        return nu(o);
      } catch (i) {
        return iu(i);
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
      return su(await i.json());
    },
    async synthesize(n) {
      if (n.engine !== "index_tts")
        throw new C("IndexTTS 适配器收到了错误的引擎请求", "config");
      Qc(n);
      const s = Zc(n), i = Yt(n.baseUrl.trim(), "/v1/audio/speech");
      ys("index_tts", "synthesize", {
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
      if (!qc(r))
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
const ru = "/api/plugins/multi-tts-fish-bridge/health", au = "/api/plugins/multi-tts-fish-bridge/models", kr = "/api/plugins/multi-tts-fish-bridge/speech", io = "1", Or = [
  "Fish Bridge：不可用",
  "未安装桥接，或 SillyTavern 未启用 Server Plugins。"
].join(`
`), lu = "Fish Bridge：版本不兼容", cu = /* @__PURE__ */ new Set([
  "audio/mpeg",
  "audio/mp3",
  "audio/mpeg3",
  "audio/x-mpeg",
  "audio/x-mpeg-3"
]), uu = /* @__PURE__ */ new Set([
  "training",
  "failed",
  "deleted",
  "disabled",
  "unavailable"
]);
let oo = null;
function fu(e) {
  return xi.includes(String(e));
}
function tn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Ti(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function ro(e) {
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
async function du() {
  const e = globalThis.getRequestHeaders;
  return typeof e == "function" ? ro(e({ omitContentType: !0 })) : typeof window > "u" ? {} : (oo ??= import("/script.js").then((n) => {
    const s = n.getRequestHeaders;
    return typeof s == "function" ? ro(s({ omitContentType: !0 })) : {};
  }).catch(() => ({})), await oo);
}
async function ei(e, t = !1) {
  const n = await du();
  return t && (n["Content-Type"] = "application/json"), e && (n["X-Fish-API-Key"] = Ti(e)), n;
}
function pu(e) {
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
function mu() {
  return au;
}
function Zt() {
  return new C(Or, "config");
}
function hu() {
  return new C(lu, "config");
}
async function ti(e, t, n, s) {
  try {
    return await pt(e, t, n, s);
  } catch (i) {
    throw i instanceof C ? i : Zt();
  }
}
function gu(e) {
  if (!Ti(e.apiKey))
    throw new C("请先填写 Fish Audio API Key", "config");
  if (!fu(e.model))
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
function _u(e, t) {
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
    const o = _u(e.status, t);
    return new C(
      i && i.length <= 160 ? `Fish Audio 请求失败：${o}（${i}）` : `Fish Audio 请求失败：${o}`,
      "http",
      e.status
    );
  }
  return Zt();
}
async function vu(e, t) {
  const n = await ti(
    e,
    ru,
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
    if (!tn(s) || s.ok !== !0 || s.api_version !== io)
      throw tn(s) && s.api_version !== io ? hu() : Zt();
  } finally {
    n.close();
  }
}
function yu(e) {
  if (!tn(e) || !Array.isArray(e.items))
    throw new C("Fish Audio 模型列表结构无效：缺少 items 数组", "invalid_json");
  const t = [];
  for (const n of e.items) {
    if (!tn(n) || typeof n._id != "string" || !n._id.trim() || typeof n.type == "string" && n.type !== "tts" || typeof n.state == "string" && uu.has(n.state) || n.dmca_taken_down === !0 || n.pvc_release_state === "retiring")
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
function bu(e) {
  const t = (e ?? "").split(";")[0]?.trim().toLowerCase();
  return cu.has(t);
}
function xu(e) {
  return e instanceof C ? { ok: !1, message: e.message } : {
    ok: !1,
    message: Or
  };
}
function Tu(e) {
  const t = fetch;
  async function n(i) {
    if (i.engine !== "fish_audio")
      throw new C("Fish Audio 适配器收到了错误的引擎请求", "config");
    const o = Ti(i.apiKey);
    if (!o)
      throw new C("请先填写 Fish Audio API Key", "config");
    const r = await ti(
      t,
      mu(),
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
      return yu(await r.json());
    } catch (a) {
      throw a instanceof C ? a : new C("Fish Bridge 返回了无法解析的模型列表", "invalid_json");
    } finally {
      r.close();
    }
  }
  async function s(i) {
    if (i.engine !== "fish_audio")
      throw new C("Fish Audio 适配器收到了错误的引擎请求", "config");
    await vu(t, i);
  }
  return {
    id: "fish_audio",
    async checkHealth(i) {
      if (i.engine !== "fish_audio")
        throw new C("Fish Audio 适配器收到了错误的引擎请求", "config");
      try {
        return await s(i), { ok: !0, message: `Fish Audio 服务在线，可用音色模型 ${(await n(i)).length} 个` };
      } catch (o) {
        return xu(o);
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
      gu(i);
      const o = pu(i);
      ys("fish_audio", "synthesize", {
        model: i.model,
        referenceId: o.reference_id,
        speed: o.prosody.speed,
        volume: o.prosody.volume,
        text: i.text
      });
      const r = await ti(
        t,
        kr,
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
        if (!bu(a))
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
const wu = ["v2", "v3", "v4", "v2Pro"];
function Fr(e) {
  const t = e.trim();
  if (!t)
    return { modelName: "", version: "" };
  const n = t.lastIndexOf("|");
  return n < 0 ? { modelName: t, version: "" } : {
    modelName: t.slice(0, n).trim(),
    version: t.slice(n + 1).trim()
  };
}
function Su(e) {
  const t = e.trim().toLowerCase();
  return t === "v2pro" ? "v2Pro" : t === "v2" || t === "v3" || t === "v4" ? t : e.trim();
}
function Eu(e) {
  const t = e.trim();
  return t ? {
    英文: "英语",
    日文: "日语",
    韩文: "韩语"
  }[t] ?? t : "多语种混合";
}
function Au(e) {
  const t = Fr(e.modelId), n = t.modelName.trim(), s = Su(t.version) || "v2Pro";
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
        text_lang: Eu(e.textLang),
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
function Iu(e) {
  if (!e.baseUrl.trim())
    throw new C("请先填写 Local-GSVI 服务地址", "config");
  if (!e.modelId.trim())
    throw new C("请先填写或选择 Local-GSVI 模型（modelName|version）", "config");
  if (!e.language.trim() || !e.emotion.trim())
    throw new C(
      "GSVI 生成要求映射完整：语种(prompt_lang)/情绪(emotion)不能为空",
      "config"
    );
  if (!Fr(e.modelId).modelName)
    throw new C("Local-GSVI 模型格式错误，期望 modelName|version", "config");
  if (!e.text.trim())
    throw new C("Local-GSVI 合成文本为空", "config");
}
function Re(e) {
  return typeof e == "object" && e !== null;
}
function Mu(e) {
  const t = e.replace(/^data:audio\/[a-zA-Z0-9.+-]+;base64,/i, "").trim();
  return t.length >= 16 && /^[A-Za-z0-9+/=\r\n]+$/.test(t);
}
function Dr(e) {
  return e.trim().match(/^data:audio\/[a-zA-Z0-9.+-]+;base64,(.+)$/i)?.[1] ?? e.trim();
}
function Cu(e) {
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
    if (typeof o == "string" && Mu(o))
      return Dr(o);
  return null;
}
function Pu(e) {
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
function Ru(e) {
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
  const t = atob(Dr(e)), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function Fs(e) {
  const t = e?.trim() ?? "";
  return t ? { Authorization: `Bearer ${t}` } : {};
}
function Nu(e) {
  const t = fetch;
  async function n(s, i, o, r, a) {
    const l = /^https?:\/\//i.test(i) ? i : Yt(s, i);
    let p = !1;
    try {
      p = Wc(s) === new URL(l).origin;
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
      for (const r of wu) {
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
          Object.entries(m).forEach(([g, A]) => {
            if (!g || !Re(A))
              return;
            const I = Object.keys(A).filter(Boolean).sort((R, O) => R.localeCompare(O)), G = {};
            I.forEach((R) => {
              const O = A[R];
              G[R] = Array.isArray(O) ? O.map(($) => String($).trim()).filter(Boolean) : typeof O == "string" ? [O.trim()].filter(Boolean) : [];
            }), o.push({
              id: `${g}|${r}`,
              name: `${g} [${r}]`,
              source: "gsvi_model",
              language: I.join(","),
              languages: I,
              emotionsByLanguage: G
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
      Iu(s);
      const i = Au(s), o = {
        "Content-Type": "application/json",
        ...Fs(s.authToken)
      };
      ys("local_gsvi", "synthesize", {
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
        const l = await r.json(), p = Cu(l);
        if (p)
          return new Blob([Uint8Array.from(Vu(p))], {
            type: s.format === "wav" ? "audio/wav" : "audio/mpeg"
          });
        const m = Pu(l);
        if (m)
          return await n(
            s.baseUrl.trim(),
            m,
            s.authToken ?? "",
            s.timeoutMs,
            s.signal
          );
        throw new C(
          `Local-GSVI 未返回可用音频：${Ru(l) || "JSON 响应中未找到音频"}`,
          "missing_audio"
        );
      }
      return await r.blob();
    }
  };
}
const Lu = {
  international: {
    tts: "https://api.minimaxi.com/v1/t2a_v2",
    voice: "https://api.minimaxi.com/v1/get_voice"
  },
  beijing: {
    tts: "https://api-bj.minimaxi.com/v1/t2a_v2",
    voice: "https://api-bj.minimaxi.com/v1/get_voice"
  }
}, ku = /* @__PURE__ */ new Set([408, 409, 429, 500, 502, 503, 504]), Ou = /* @__PURE__ */ new Set([1e3, 1001, 1002, 1039]), ao = 2, Fu = "tavern_multi_tts_voice_catalog_v1", Du = 1440 * 60 * 1e3;
function os(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function si(e) {
  return e === "beijing" ? "beijing" : "international";
}
function lo(e) {
  return Lu[si(e)];
}
function $r(e, t) {
  return `${Fu}:${e}:${t.trim()}`;
}
function $u(e) {
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
function co(e) {
  return `Bearer ${os(e)}`;
}
function Gu(e) {
  const t = e.trim(), n = new Uint8Array(t.length / 2);
  for (let s = 0; s < t.length; s += 2)
    n[s / 2] = Number.parseInt(t.slice(s, s + 2), 16);
  return n;
}
function Uu(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function ju(e) {
  const t = e.trim();
  return /^[0-9a-fA-F]+$/.test(t) && t.length % 2 === 0 ? Gu(t) : Uu(t);
}
function Bu(e, t) {
  const s = `${t ?? ""} ${e}`.toLowerCase(), i = s.includes("japanese") ? "Japanese" : s.includes("english") ? "English" : s.includes("chinese") ? "Chinese" : s.includes("korean") ? "Korean" : s.includes("french") ? "French" : s.includes("german") ? "German" : s.includes("spanish") ? "Spanish" : "Unknown", o = s.includes("female") || s.includes("女") || s.includes("lady") || s.includes("girl") ? "Female" : s.includes("male") || s.includes("男") || s.includes("man") || s.includes("boy") ? "Male" : "Unknown";
  return { language: i, gender: o };
}
function Hu(e, t) {
  const n = t.trim();
  if (!n)
    return null;
  try {
    const s = localStorage.getItem($r(e, n));
    if (!s)
      return null;
    const i = JSON.parse(s);
    return !i?.expires_at || Date.now() > i.expires_at ? null : i.items ?? null;
  } catch {
    return null;
  }
}
function Ku(e, t, n) {
  const s = t.trim();
  s && localStorage.setItem(
    $r(e, s),
    JSON.stringify({
      expires_at: Date.now() + Du,
      items: n
    })
  );
}
function zu(e) {
  const t = os(e.apiKey), n = e.groupId.trim(), s = e.voiceId.trim();
  if (!t || !n || !s)
    throw new C("MiniMax 引擎缺少必要配置：API Key / Group ID / Voice ID", "config");
  if (!e.text.trim())
    throw new C("MiniMax 合成文本为空", "config");
}
function Wu(e) {
  return typeof e == "object" && e !== null;
}
function Ju(e, t) {
  return ku.has(e) || Ou.has(t);
}
function Xu(e) {
  const t = fetch;
  return {
    id: "minimax",
    async checkHealth(n) {
      if (n.engine !== "minimax")
        throw new C("MiniMax 适配器收到了错误的引擎请求", "config");
      if (!os(n.apiKey))
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
      const s = os(n.apiKey);
      if (!s)
        throw new C("请先填写 API Key", "config");
      const i = si(n.region);
      if (!n.forceRefresh) {
        const g = Hu(i, n.groupId);
        if (g && g.length > 0)
          return g;
      }
      const o = lo(i).voice, r = await pt(
        t,
        o,
        {
          method: "POST",
          headers: {
            Authorization: co(s),
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
      const p = [], m = (g, A = []) => {
        A.forEach((I) => {
          const G = Bu(I.voice_id, I.voice_name);
          p.push({
            id: I.voice_id,
            name: I.voice_name ?? I.voice_id,
            description: I.description,
            source: g,
            language: G.language,
            gender: G.gender
          });
        });
      };
      return m("system", l.system_voice ?? []), m("voice_cloning", l.voice_cloning ?? []), m("voice_generation", l.voice_generation ?? []), Ku(i, n.groupId, p), p;
    },
    async synthesize(n) {
      if (n.engine !== "minimax")
        throw new C("MiniMax 适配器收到了错误的引擎请求", "config");
      zu(n);
      const s = $u(n), i = lo(n.region).tts, o = {
        Authorization: co(n.apiKey),
        "Content-Type": "application/json"
      };
      ys("minimax", "synthesize", {
        model: s.model,
        voiceId: s.voice_setting.voice_id,
        region: si(n.region),
        groupId: n.groupId.trim(),
        text: n.text
      });
      let r = null;
      for (let a = 0; a <= ao; a += 1) {
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
        if (!Wu(p))
          throw new C("MiniMax 响应结构无效", "invalid_json");
        const m = p;
        if (!l.ok || (m.base_resp?.status_code ?? 0) !== 0) {
          const I = m.base_resp?.status_code ?? l.status, G = m.base_resp?.status_msg ?? l.statusText ?? "unknown error";
          if (r = `MiniMax 请求失败：code=${I}, msg=${G}`, Ju(l.status, I) && a < ao) {
            Ys("minimax", "retryable synthesize failure", {
              status: l.status,
              attempt: a
            }), await Jc(250 * (a + 1));
            continue;
          }
          throw new C(r, "http", l.status);
        }
        const g = m.data?.audio ?? m.data?.audio_file ?? m.audio_file;
        if (!g)
          throw new C("MiniMax 响应中未找到音频字段", "missing_audio");
        const A = ju(g);
        return new Blob([Uint8Array.from(A)], { type: "audio/mpeg" });
      }
      throw new C(r ?? "MiniMax 请求失败：未知错误", "http");
    }
  };
}
function mn(e) {
  if (e === "minimax")
    return Xu();
  if (e === "local_gsvi")
    return Nu();
  if (e === "index_tts")
    return ou();
  if (e === "fish_audio")
    return Tu();
  throw new C(`未知 TTS 引擎：${String(e)}`, "config");
}
const ii = "tavern_multi_tts_say_rule", Yu = 1, Zu = {
  system: 0,
  user: 1,
  assistant: 2
};
function Qu(e) {
  const t = e.ttsEngine === "index_tts" ? e.indexTtsCharacterMappings : e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.ttsEngine === "fish_audio" ? e.fishAudioCharacterMappings : e.characterMappings, n = [];
  for (const s of t) {
    const i = s.characterName.trim();
    i && !n.includes(i) && n.push(i);
  }
  return n;
}
function qu(e) {
  return e.ttsEngine === "index_tts" ? e.indexTtsInjectTemplate : e.ttsEngine === "fish_audio" ? e.fishAudioInjectTemplate : e.injectTemplate;
}
function ef(e) {
  const t = Qu(e).join("、") || "（未配置角色映射）";
  return qu(e).replaceAll("${target_characters}", t).replaceAll("${mapped_characters}", t);
}
function Ds(e, t) {
  return !t.enabled || !t.injectEnabled ? (e.deleteExtensionPrompt(ii), { applied: !1 }) : (e.setExtensionPrompt(
    ii,
    ef(t),
    Yu,
    t.injectDepth,
    !1,
    Zu[t.injectRole]
  ), { applied: !0, depth: t.injectDepth, role: t.injectRole });
}
function tf(e) {
  e.deleteExtensionPrompt(ii);
}
const Gr = [
  "喜",
  "怒",
  "哀",
  "惧",
  "厌恶",
  "低落",
  "惊喜",
  "平静"
], uo = /<say\b([^>]*)>([\s\S]*?)<\/say>/gi, $n = /([A-Za-z_]+)\s*=\s*(?:"([^"]*)"|“([^”]*)”)/gi, nf = new Set(Gr);
function sf(e) {
  const t = {}, n = new RegExp($n.source, $n.flags);
  let s;
  for (; (s = n.exec(e)) !== null; ) {
    const o = s[2] ?? s[3] ?? "";
    t[s[1].toLowerCase()] = o;
  }
  return e.replace(new RegExp($n.source, $n.flags), "").trim() ? null : t;
}
function un(e) {
  console.warn(`${Ee} invalid say emo`, { reason: e });
}
function of(e) {
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
    if (!nf.has(a) || a in i) {
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
function rf(e) {
  return e ? Gr.filter((t) => e[t] !== void 0).map((t) => `${t}:${e[t]}`).join(",") : "";
}
function af(e) {
  const t = new RegExp(uo.source, uo.flags), n = [];
  let s, i = 0;
  for (; (s = t.exec(e)) !== null; ) {
    const o = s[2].trim();
    if (!o)
      continue;
    const r = sf(s[1] ?? "");
    if (!r)
      continue;
    const a = r.char?.trim(), l = of(r.emo);
    n.push({
      index: i,
      text: o,
      ...a ? { char: a } : {},
      ...l ? { emotion: l } : {}
    }), i += 1;
  }
  return n;
}
const lf = /* @__PURE__ */ new Set([
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
]), Ur = /\(([a-z-]+)\)/gi, cf = /\([a-z-]+\)/gi, uf = /\[([A-Za-z][A-Za-z\s,'".!?-]{0,39})\]/g;
function Rn(e) {
  return e.replace(/\s{2,}/g, " ").trim();
}
function ff(e) {
  return Rn(
    e.replace(Ur, (t, n) => {
      const s = String(n).toLowerCase();
      return lf.has(s) ? `(${s})` : "";
    })
  );
}
function df(e, t = "minimax") {
  return Rn(t === "fish_audio" ? e.replace(uf, "") : e.replace(Ur, ""));
}
function pf(e) {
  return Rn(e.replace(cf, ""));
}
function mf(e, t) {
  if (t === "fish_audio")
    return Rn(e);
  const n = ff(e);
  return t === "local_gsvi" || t === "index_tts" ? pf(n) : n;
}
async function hf(e, t) {
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
const Vn = "data-tavern-multi-tts-rendered", wi = "data-tavern-multi-tts-swipe", bs = "tavern-multi-tts-segment", rs = "tavern-multi-tts-fallback-list";
function gf(e, t, n) {
  return `${e}:${t}:${n}`;
}
function fo(e) {
  const t = e.split(":");
  if (t.length !== 3)
    return null;
  const n = Number(t[0]), s = Number(t[1]), i = Number(t[2]);
  return [n, s, i].every(Number.isFinite) ? { message_id: n, swipe_id: s, index: i } : null;
}
function Gn(e) {
  return document.querySelector(`#chat .mes[mesid="${e}"]`);
}
function _f(e) {
  return e.querySelector(".mes_text");
}
function jr(e, t) {
  const n = e.getAttribute(Vn) === "true", s = e.querySelector(`.${bs}`) !== null;
  return !n || !s ? !1 : t === void 0 ? !0 : e.getAttribute(wi) === String(t);
}
function Ot(e = document) {
  e.querySelectorAll(`.${bs}`).forEach((t) => {
    const n = t.querySelector(".tavern-multi-tts-text")?.textContent ?? "";
    t.replaceWith(document.createTextNode(n));
  }), e.querySelectorAll(`.${rs}`).forEach((t) => t.remove()), e.querySelectorAll(`[${Vn}]`).forEach((t) => {
    t.removeAttribute(Vn), t.removeAttribute(wi);
  });
}
function ot(e, t) {
  e.classList.remove("is-loading", "is-ready", "is-playing", "is-error"), t !== "idle" && e.classList.add(`is-${t}`);
  const n = e.querySelector(".tavern-multi-tts-indicator");
  n && (n.textContent = t === "loading" ? "⏳" : t === "ready" ? "▶" : t === "playing" ? "⏸" : t === "error" ? "⚠" : "▶");
}
function po(e) {
  return e.replace(/\s+/g, "").trim();
}
function vf(e, t, n, s) {
  const i = e.splitText(t);
  i.splitText(n), i.replaceWith(s);
}
function yf(e, t, n, s) {
  const i = [t, n].map((a) => a.trim()).filter(Boolean), o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let r = o.nextNode();
  for (; r; ) {
    const a = r.parentElement;
    if (a && !a.closest(`.${bs}`) && !a.closest(`.${rs}`) && !a.closest(".mes_buttons")) {
      const l = r.nodeValue ?? "";
      for (const p of i) {
        const m = l.indexOf(p);
        if (m >= 0)
          return vf(r, m, p.length, s), !0;
        if (po(l) === po(p))
          return r.replaceWith(s), !0;
      }
    }
    r = o.nextNode();
  }
  return !1;
}
const bf = '<path d="M12 3v11m0 0 4-4m-4 4-4-4M5 21h14" />', xf = '<path d="M20 11a8 8 0 0 0-14.9-3.8L3 10m0 0V4m0 6h6M4 13a8 8 0 0 0 14.9 3.8L21 14m0 0v6m0-6h-6" />';
function mo(e, t) {
  const n = document.createElement("button");
  return n.type = "button", n.className = "tavern-multi-tts-action", n.setAttribute("aria-label", e), n.title = e, n.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${t}</svg>`, n;
}
function Tf(e, t, n, s, i, o, r) {
  const a = gf(e, t, n.index), l = document.createElement("span");
  l.className = bs, l.dataset.tavernMultiTtsKey = a;
  const p = document.createElement("span");
  p.className = "tavern-multi-tts-text", p.textContent = s;
  const m = document.createElement("span");
  m.className = "tavern-multi-tts-indicator", m.textContent = "▶";
  const g = document.createElement("span");
  g.className = "tavern-multi-tts-actions";
  const A = mo("下载这句语音", bf), I = mo("重新生成这句语音", xf);
  g.append(A, I), l.append(p, m, g), ot(l, "idle");
  let G = r.get(a) ?? null;
  const R = async (S = {}) => {
    ot(l, "loading");
    try {
      const ne = await o.ensureAudio(n, s, i, S);
      return ne.cancelled ? null : ne.blob ? (ot(l, "ready"), ne.blob) : (ot(l, "error"), null);
    } catch {
      return ot(l, "error"), null;
    }
  }, O = () => {
    G?.stop(), G = null, r.delete(a);
  }, $ = async () => {
    const S = await R();
    S && (O(), G = Sr(
      S,
      () => ot(l, "playing"),
      () => {
        G = null, r.delete(a), ot(l, "ready");
      },
      () => {
        G = null, r.delete(a), ot(l, "error");
      },
      () => ot(l, "ready")
    ), r.set(a, G));
  }, U = async () => {
    O(), await R({ force: !0 });
  }, Y = async () => {
    if (!G)
      return;
    const S = G.getState();
    if (S === "playing") {
      G.pause();
      return;
    }
    if (S === "paused")
      try {
        await G.resume();
      } catch {
      }
  };
  return l.addEventListener("click", (S) => {
    const ne = S.target;
    if (ne?.closest(".tavern-multi-tts-indicator")) {
      Y();
      return;
    }
    ne?.closest(".tavern-multi-tts-action") || $();
  }), A.addEventListener("click", (S) => {
    S.preventDefault(), S.stopPropagation(), (async () => {
      const ne = await R();
      ne && o.downloadAudio(ne, e, n.index);
    })();
  }), I.addEventListener("click", (S) => {
    S.preventDefault(), S.stopPropagation(), U();
  }), l;
}
function wf(e, t, n, s, i, o = 0) {
  if (jr(e, o))
    return 0;
  e.getAttribute(Vn) === "true" && Ot(e);
  const r = _f(e) ?? e, a = [];
  let l = 0;
  for (const p of n) {
    if (!p.displayText || !p.ttsText)
      continue;
    const m = Tf(
      t,
      o,
      p,
      p.displayText,
      p.ttsText,
      s,
      i
    );
    yf(r, p.text, p.displayText, m) ? l += 1 : a.push(m);
  }
  if (r.querySelectorAll(`.${rs}`).forEach((p) => p.remove()), a.length > 0) {
    const p = document.createElement("div");
    p.className = rs, a.forEach((m) => p.append(m, document.createTextNode(" "))), r.append(p), l += a.length;
  }
  return l > 0 && (e.setAttribute(Vn, "true"), e.setAttribute(wi, String(o))), l;
}
function Et(e, t) {
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const s = e[n];
    if (s && t(s))
      return s;
  }
}
function Br(e, t) {
  return e.characterName.trim() === t && !!e.minimaxVoiceId.trim();
}
function Hr(e, t) {
  return e.characterName.trim() === t && !!e.gsviVoiceId.trim() && !!e.gsviLanguage.trim() && !!e.gsviEmotion.trim();
}
function Kr(e, t) {
  return e.characterName.trim() === t && !!e.indexTtsVoiceId.trim() && !!e.indexTtsLanguage;
}
function zr(e, t) {
  return e.characterName.trim() === t && !!e.fishAudioReferenceId.trim();
}
function Wr(e, t) {
  const n = t?.trim() ?? "";
  return n ? e.ttsEngine === "index_tts" ? !!Et(
    e.indexTtsCharacterMappings,
    (s) => Kr(s, n)
  ) : e.ttsEngine === "fish_audio" ? !!Et(
    e.fishAudioCharacterMappings,
    (s) => zr(s, n)
  ) : e.ttsEngine === "local_gsvi" ? !!Et(
    e.gsviCharacterMappings,
    (s) => Hr(s, n)
  ) : e.ttsEngine === "minimax" ? !!Et(e.characterMappings, (s) => Br(s, n)) : !1 : !0;
}
function Jr(e, t) {
  const n = t?.trim() ?? "";
  if (e.ttsEngine === "index_tts") {
    const i = Et(
      e.indexTtsCharacterMappings,
      (o) => Kr(o, n)
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
        (o) => zr(o, n)
      )?.fishAudioReferenceId.trim() || e.fishAudioReferenceId.trim()
    };
  if (e.ttsEngine === "local_gsvi") {
    const i = Et(
      e.gsviCharacterMappings,
      (o) => Hr(o, n)
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
      (i) => Br(i, n)
    )?.minimaxVoiceId?.trim() || e.voiceId.trim() || e.voiceCatalogSelectedId.trim()
  };
}
function Xr(e, t, n, s) {
  if (!Wr(e, n))
    return null;
  const i = Jr(e, n);
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
function Sf(e, t, n, s) {
  const i = Jr(e, n);
  return e.ttsEngine === "index_tts" ? {
    text: t,
    engine: "index_tts",
    indexTts: {
      origin: so(e.indexTtsBaseUrl),
      model: Lr,
      voiceId: i.indexTtsVoiceId ?? "",
      language: i.indexTtsLanguage ?? e.indexTtsLanguage,
      format: "wav",
      durationFactor: e.indexTtsDurationFactor,
      emoWeight: e.indexTtsEmoWeight,
      emotion: rf(s)
    }
  } : e.ttsEngine === "fish_audio" ? {
    text: t,
    engine: "fish_audio",
    fishAudio: {
      origin: kr,
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
const ho = 15;
function Ef(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = [];
  let o = !1, r = !1, a = 0;
  function l() {
    return e.getSettings();
  }
  function p() {
    r || !document.querySelector(".minimax-tts-segment") || (r = !0, e.warn?.("检测到旧酒馆助手 Multi-TTS 仍在装饰消息。请只启用其中一个，避免重复生成。"));
  }
  function m(P) {
    return Nr(P) && P.code === "cancelled";
  }
  function g(P, F) {
    return n.get(P)?.token === F;
  }
  function A(P) {
    for (const [F, J] of n)
      P(J) && (J.controller.abort(), n.delete(F));
  }
  function I() {
    A(() => !0);
  }
  function G(P, F) {
    A(
      (J) => J.message_id === P && (F === void 0 || J.swipe_id !== F)
    );
  }
  function R(P, F, J) {
    n.get(P)?.controller.abort(), a += 1;
    const K = {
      token: a,
      message_id: F,
      swipe_id: J,
      controller: new AbortController()
    };
    return n.set(P, K), K;
  }
  function O(P, F) {
    g(P, F) && n.delete(P);
  }
  async function $(P, F, J, q, K, ye, Ue = {}) {
    const te = R(P, F, J);
    try {
      const ve = l(), Ce = Xr(ve, q, K, ye);
      if (!Ce)
        return { blob: null };
      Ce.signal = te.controller.signal;
      const Le = Sf(ve, q, K, ye), we = await dc(Le);
      if (!g(P, te.token) || te.controller.signal.aborted)
        return { cancelled: !0 };
      if (!Ue.force) {
        const h = s.get(we);
        if (h)
          return { blob: h };
        const v = await vc(we);
        if (!g(P, te.token) || te.controller.signal.aborted)
          return { cancelled: !0 };
        if (v)
          return s.set(we, v), { blob: v };
      }
      const f = await mn(Ce.engine).synthesize(Ce);
      return f && (await yc(we, f), s.set(we, f)), !g(P, te.token) || te.controller.signal.aborted ? { cancelled: !0 } : { blob: f };
    } catch (ve) {
      return m(ve) || !g(P, te.token) || te.controller.signal.aborted ? { cancelled: !0 } : (console.error(`${Ee} synthesize failed`), { blob: null });
    } finally {
      O(P, te.token);
    }
  }
  function U(P, F) {
    if (typeof P.swipe_id == "number" && Number.isFinite(P.swipe_id))
      return P.swipe_id;
    const J = Number(F?.getAttribute("swipeid"));
    return Number.isFinite(J) ? J : 0;
  }
  function Y(P, F) {
    for (const [J, q] of t) {
      const K = fo(J);
      K && K.message_id === P && K.swipe_id !== F && (q.stop(), t.delete(J));
    }
  }
  function S(P) {
    for (const [F, J] of t) {
      const q = fo(F);
      q && q.message_id === P && (J.stop(), t.delete(F));
    }
  }
  function ne(P, F, J) {
    if (typeof P.swipe_id != "number" || !Number.isFinite(P.swipe_id))
      return !0;
    const q = F.getAttribute("swipeid");
    if (q === null || q === "")
      return !0;
    const K = Number(q);
    return Number.isFinite(K) && K === J && K === P.swipe_id;
  }
  function Ae(P, F) {
    G(P, F), Y(P, F);
    const J = e.findMessageElement(P) ?? Gn(P);
    J && Ot(J);
  }
  function pe(P, F = {}) {
    const J = F.attempt ?? 0, q = l();
    if (!q.enabled)
      return;
    const K = e.getChatMessage(P);
    if (!K || K.is_user || K.is_system)
      return;
    const ye = typeof K.mes == "string" ? K.mes : "", Ue = af(ye).filter(
      (ue) => Wr(q, ue.char)
    ), te = e.findMessageElement(P) ?? Gn(P);
    if (Ue.length === 0) {
      te && Ot(te);
      return;
    }
    if (!te) {
      J < ho && window.setTimeout(() => pe(P, { ...F, attempt: J + 1 }), 120);
      return;
    }
    const ve = U(K, te);
    if (!ne(K, te, ve)) {
      J < ho && window.setTimeout(() => pe(P, { ...F, attempt: J + 1 }), 120);
      return;
    }
    if (jr(te, ve))
      return;
    te.getAttribute("data-tavern-multi-tts-rendered") === "true" && Ot(te), Y(P, ve), p();
    const Ce = Ue.map((ue) => ({
      ...ue,
      displayText: df(ue.text, q.ttsEngine),
      ttsText: mf(ue.text, q.ttsEngine)
    })), Le = [], we = (ue) => F.skipPrefetch ? !1 : q.prefetchMode === "auto_all" ? !0 : q.prefetchMode === "auto_first_n" ? ue < q.prefetchFirstCount : !1;
    wf(
      te,
      P,
      Ce,
      {
        ensureAudio: async (ue, f, h, v) => {
          const T = `${P}:${ve}:${ue.index}`;
          return await $(
            T,
            P,
            ve,
            h,
            ue.char,
            ue.emotion,
            v
          );
        },
        downloadAudio(ue, f, h) {
          Tc(ue, xc(f, h));
        }
      },
      t,
      ve
    ), Ce.forEach((ue, f) => {
      we(f) && ue.ttsText && Le.push(async () => {
        const h = `${P}:${ve}:${ue.index}`;
        try {
          await $(
            h,
            P,
            ve,
            ue.ttsText,
            ue.char,
            ue.emotion
          );
        } catch {
        }
      });
    }), Le.length > 0 && hf(Le, q.maxConcurrency);
  }
  function $e(...P) {
    const F = Number(P[0]);
    Number.isFinite(F) && window.setTimeout(() => pe(F), 0);
  }
  function Ct(...P) {
    const F = Number(P[0]);
    if (!Number.isFinite(F))
      return;
    G(F);
    const J = e.findMessageElement(F) ?? Gn(F);
    J && Ot(J), S(F), window.setTimeout(() => pe(F), 0);
  }
  function Pt(...P) {
    const F = Number(P[0]);
    if (!Number.isFinite(F))
      return;
    const J = e.findMessageElement(F) ?? Gn(F), q = e.getChatMessage(F), K = q ? U(q, J) : 0;
    Ae(F, K), window.setTimeout(() => pe(F, { skipPrefetch: !0 }), 0);
  }
  function We(P = {}) {
    document.querySelectorAll("#chat .mes[mesid]").forEach((F) => {
      const J = Number(F.getAttribute("mesid"));
      Number.isFinite(J) && pe(J, P);
    });
  }
  function Ge(P, F) {
    e.eventSource.on(P, F), i.push(() => e.eventSource.removeListener(P, F));
  }
  function an() {
    o || (o = !0, Ds(e, l()), Ge(e.eventNames.messageReceived, $e), Ge(e.eventNames.messageRendered, $e), Ge(e.eventNames.messageUpdated, Ct), Ge(e.eventNames.messageSwiped, Pt), Ge(e.eventNames.moreMessagesLoaded, () => {
      We({ skipPrefetch: !0 });
    }), Ge(e.eventNames.chatChanged, () => {
      I(), t.forEach((P) => P.stop()), t.clear(), Xn(), Ds(e, l()), We({ skipPrefetch: !0 });
    }), We({ skipPrefetch: !0 }), console.info(`${Ee} chat runtime started`));
  }
  function Rt() {
    i.splice(0).forEach((P) => P()), I(), t.forEach((P) => P.stop()), t.clear(), s.clear(), Xn(), tf(e), Ot(document), o = !1, console.info(`${Ee} chat runtime stopped`);
  }
  function jt() {
    I(), t.forEach((P) => P.stop()), t.clear(), Xn(), Ot(document);
  }
  function vt() {
    Ds(e, l());
  }
  function yt() {
    jt(), l().enabled && We({ skipPrefetch: !0 });
  }
  function Vt() {
    vt(), yt();
  }
  return { start: an, stop: Rt, syncFromSettings: Vt, syncInjection: vt, refreshDecorations: yt, decorate: pe };
}
function wt(e) {
  return typeof e == "object" && e !== null;
}
function Af(e) {
  if (wt(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function If(e) {
  return !wt(e) || typeof e.getContext != "function" ? null : e;
}
function Mf(e) {
  if (!wt(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!wt(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = Af(e.eventSource), n = wt(e.eventTypes) ? e.eventTypes : wt(e.event_types) ? e.event_types : void 0, s = n ? {
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
function Yr() {
  const e = If(globalThis.SillyTavern);
  if (!e)
    throw new Error(
      "SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行"
    );
  return Mf(e.getContext());
}
function Zr() {
  const e = Yr();
  return {
    readRawSettings() {
      return e.extensionSettings[Ns];
    },
    writeSettings(t) {
      e.extensionSettings[Ns] = t, e.saveSettingsDebounced();
    },
    removeSettings() {
      delete e.extensionSettings[Ns], e.saveSettingsDebounced();
    },
    findSettingsRoot: Hc,
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
function Cf(e) {
  return wt(e) ? {
    mes: typeof e.mes == "string" ? e.mes : void 0,
    is_user: typeof e.is_user == "boolean" ? e.is_user : void 0,
    is_system: typeof e.is_system == "boolean" ? e.is_system : void 0,
    swipe_id: typeof e.swipe_id == "number" ? e.swipe_id : void 0
  } : null;
}
function Pf(e) {
  const t = Yr();
  if (!t.eventSource)
    throw new Error("SillyTavern eventSource 不可用，无法监听消息事件");
  const n = t.eventSource;
  return {
    getSettings: e,
    getChatMessage(s) {
      return Array.isArray(t.chat) ? Cf(t.chat[s]) : null;
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
        i.warning(s, Ee);
        return;
      }
      console.warn(`${Ee} ${s}`);
    }
  };
}
function Rf(e) {
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
}, Nf = {
  ja: "こんにちは、これは GSVI の音声参照用サンプルです。",
  zh: "你好，这是一段 GSVI 的语音参考音频。",
  en: "Hello, this is a GSVI reference voice sample."
}, Lf = {
  ja: "こんにちは、これは IndexTTS のテスト音声です。",
  zh: "你好，这是 IndexTTS 的测试语音。",
  en: "Hello, this is an IndexTTS test voice."
}, kf = {
  ja: "こんにちは、これは Fish Audio のテスト音声です。",
  zh: "你好，这是 Fish Audio 的测试语音。",
  en: "Hello, this is a Fish Audio test voice."
}, Of = [
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
], Ff = [
  "不切",
  "凑四句一切",
  "凑50字一切",
  "按中文句号。切",
  "按英文句号.切",
  "按标点符号切"
];
function Df(e, t) {
  return e === "local_gsvi" ? Nf[t] : e === "index_tts" ? Lf[t] : e === "fish_audio" ? kf[t] : Vf[t];
}
function $f() {
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
    filter: $f()
  };
}
function go() {
  return {
    minimax: Kn(),
    local_gsvi: Kn(),
    index_tts: Kn(),
    fish_audio: Kn()
  };
}
function Gf(e, t) {
  return t === "minimax" ? e.minimax : t === "local_gsvi" ? e.local_gsvi : t === "index_tts" ? e.index_tts : e.fish_audio;
}
function _o(e, t, n) {
  const s = Gf(e, t);
  return s.voices = [...n], e;
}
function Uf(e) {
  return [
    ...new Set(e.map((t) => t.language).filter((t) => !!t))
  ].sort();
}
function jf(e, t) {
  const n = t.search.trim().toLowerCase();
  return e.filter((s) => t.language !== "all" && s.language !== t.language || t.gender !== "all" && s.gender !== t.gender || t.source !== "all" && s.source !== t.source ? !1 : n ? [s.id, s.name, ...s.description ?? []].join(" ").toLowerCase().includes(n) : !0);
}
function vo(e) {
  const t = [e.language, e.gender, e.source].filter(Boolean);
  return t.length > 0 ? `${e.name} (${t.join(" / ")})` : e.name;
}
function yo(e) {
  return e?.languages ?? [];
}
function bo(e, t) {
  const n = t.trim();
  return !e || !n ? [] : e.emotionsByLanguage?.[n] ?? [];
}
function xo(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(2)} MB`;
}
const Bf = ["data-color-scheme"], Hf = { class: "inline-drawer" }, Kf = { class: "inline-drawer-toggle inline-drawer-header" }, zf = { class: "inline-drawer-content" }, Wf = { class: "mtts-card" }, Jf = { class: "mtts-card-head" }, Xf = { class: "mtts-title" }, Yf = { class: "mtts-version" }, Zf = ["title"], Qf = { class: "mtts-enable" }, qf = {
  class: "mtts-tabs",
  role: "tablist",
  "aria-label": "TTS 引擎"
}, ed = ["aria-selected"], td = ["aria-selected"], nd = ["aria-selected"], sd = ["aria-selected"], id = {
  class: "mtts-section",
  "aria-labelledby": "mtts-service-title"
}, od = { class: "mtts-field" }, rd = { class: "mtts-grid" }, ad = { class: "mtts-field" }, ld = { class: "mtts-field" }, cd = { class: "mtts-field" }, ud = { class: "mtts-actions" }, fd = ["disabled"], dd = ["disabled"], pd = {
  key: 0,
  class: "mtts-fold"
}, md = { class: "mtts-fold-body" }, hd = { class: "mtts-grid" }, gd = { class: "mtts-field" }, _d = { class: "mtts-field" }, vd = ["value"], yd = { class: "mtts-field" }, bd = { class: "mtts-field" }, xd = { class: "mtts-field" }, Td = ["value"], wd = { value: "" }, Sd = ["value"], Ed = { class: "mtts-control-row" }, Ad = { class: "mtts-field" }, Id = ["disabled"], Md = { class: "mtts-grid" }, Cd = { class: "mtts-field" }, Pd = { value: "" }, Rd = ["value"], Vd = ["value"], Nd = { class: "mtts-field" }, Ld = ["value"], kd = { class: "mtts-field" }, Od = { class: "mtts-field" }, Fd = ["value"], Dd = { class: "mtts-field" }, $d = { id: "fish-audio-voice-suggestions" }, Gd = ["value"], Ud = { class: "mtts-actions" }, jd = ["disabled"], Bd = ["disabled"], Hd = { class: "mtts-control-row" }, Kd = { class: "mtts-field" }, zd = ["disabled"], Wd = { class: "mtts-grid" }, Jd = { class: "mtts-field" }, Xd = { value: "" }, Yd = ["value"], Zd = { class: "mtts-field" }, Qd = ["value"], qd = { class: "mtts-field" }, ep = ["value"], tp = { class: "mtts-actions" }, np = { class: "mtts-field" }, sp = ["disabled"], ip = {
  class: "mtts-section",
  "aria-labelledby": "mtts-mapping-title"
}, op = { class: "mtts-section-head" }, rp = {
  id: "mtts-mapping-title",
  class: "mtts-section-title"
}, ap = { class: "mtts-count" }, lp = {
  key: 0,
  class: "mtts-empty"
}, cp = { class: "mtts-field" }, up = ["onUpdate:modelValue"], fp = { class: "mtts-field" }, dp = ["onUpdate:modelValue"], pp = {
  key: 0,
  class: "mtts-field"
}, mp = ["value", "onChange"], hp = ["value"], gp = { class: "mtts-mapping-actions" }, _p = ["disabled", "onClick"], vp = ["onClick"], yp = { class: "mtts-field" }, bp = ["onUpdate:modelValue"], xp = { class: "mtts-grid" }, Tp = { class: "mtts-field" }, wp = ["onUpdate:modelValue"], Sp = { value: "" }, Ep = ["value"], Ap = ["value"], Ip = { class: "mtts-field" }, Mp = ["onUpdate:modelValue"], Cp = ["value"], Pp = { class: "mtts-mapping-actions" }, Rp = ["disabled", "onClick"], Vp = ["onClick"], Np = { class: "mtts-field" }, Lp = ["onUpdate:modelValue"], kp = { class: "mtts-field" }, Op = ["onUpdate:modelValue"], Fp = { class: "mtts-mapping-actions" }, Dp = ["disabled", "onClick"], $p = ["onClick"], Gp = { class: "mtts-field" }, Up = ["onUpdate:modelValue"], jp = { class: "mtts-grid" }, Bp = { class: "mtts-field" }, Hp = ["onUpdate:modelValue"], Kp = { value: "" }, zp = ["value"], Wp = { class: "mtts-field" }, Jp = ["onUpdate:modelValue"], Xp = ["value"], Yp = { class: "mtts-field" }, Zp = ["onUpdate:modelValue"], Qp = ["value"], qp = { class: "mtts-mapping-actions" }, em = ["disabled", "onClick"], tm = ["onClick"], nm = {
  key: 4,
  class: "mtts-hint"
}, sm = { class: "mtts-fold" }, im = { class: "mtts-fold-body" }, om = { class: "mtts-field" }, rm = { class: "mtts-field" }, am = ["value"], lm = { class: "mtts-actions" }, cm = ["disabled"], um = ["disabled"], fm = { class: "mtts-fold" }, dm = { class: "mtts-fold-body" }, pm = { class: "mtts-enable" }, mm = { class: "mtts-field" }, hm = { class: "mtts-label" }, gm = { class: "mtts-field" }, _m = { class: "mtts-field" }, vm = { class: "mtts-fold" }, ym = { class: "mtts-fold-body" }, bm = { class: "mtts-field" }, xm = {
  key: 0,
  class: "mtts-grid"
}, Tm = {
  key: 0,
  class: "mtts-field"
}, wm = { class: "mtts-field" }, Sm = { class: "mtts-hint" }, Em = { class: "mtts-actions" }, Am = ["disabled"], Im = ["disabled"], Mm = { class: "mtts-fold" }, Cm = { class: "mtts-fold-body" }, Pm = { class: "mtts-field" }, Rm = ["value"], Vm = { class: "mtts-field" }, Nm = { class: "mtts-label" }, Lm = { class: "mtts-field" }, km = { class: "mtts-label" }, Om = { class: "mtts-field" }, Fm = { class: "mtts-label" }, Dm = { class: "mtts-field" }, $m = { class: "mtts-grid" }, Gm = { class: "mtts-field" }, Um = ["value"], jm = { class: "mtts-field" }, Bm = ["value"], Hm = { class: "mtts-field" }, Km = { class: "mtts-label" }, zm = { class: "mtts-field" }, Wm = { class: "mtts-label" }, Jm = { class: "mtts-field" }, Xm = { class: "mtts-label" }, Ym = { class: "mtts-field" }, Zm = { class: "mtts-label" }, Qm = { class: "mtts-field" }, qm = { class: "mtts-label" }, eh = /* @__PURE__ */ Ja({
  __name: "settings-panel",
  props: {
    displayName: {},
    version: {},
    settings: {},
    onSettingsChange: { type: Function }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ vn(Xt(t.settings)), s = /* @__PURE__ */ it(""), i = /* @__PURE__ */ it(!1), o = /* @__PURE__ */ it(!1), r = /* @__PURE__ */ vn(go()), a = /* @__PURE__ */ it(""), l = /* @__PURE__ */ it(""), p = /* @__PURE__ */ it(0), m = /* @__PURE__ */ it(0), g = /* @__PURE__ */ it("saved"), A = /* @__PURE__ */ it("light"), I = /* @__PURE__ */ vn({
      minimax: { kind: "unchecked", detail: "" },
      local_gsvi: { kind: "unchecked", detail: "" },
      index_tts: { kind: "unchecked", detail: "" },
      fish_audio: { kind: "unchecked", detail: "" }
    });
    let G, R = !0, O = null;
    const $ = ge(() => n.ttsEngine === "minimax"), U = ge(() => n.ttsEngine === "local_gsvi"), Y = ge(() => n.ttsEngine === "index_tts"), S = ge(() => n.ttsEngine === "fish_audio"), ne = ge(() => r.minimax.voices), Ae = ge(() => r.local_gsvi.voices), pe = ge(() => r.index_tts.voices), $e = ge(() => r.fish_audio.voices), Ct = ge(
      () => jf(r.minimax.voices, r.minimax.filter)
    ), Pt = ge(() => Uf(r.minimax.voices)), We = ge(
      () => r.local_gsvi.voices.find((_) => _.id === n.localGsviModel)
    ), Ge = ge(() => yo(We.value)), an = ge(
      () => bo(We.value, n.localGsviLanguage)
    ), Rt = ge(() => Y.value ? n.indexTtsCharacterMappings.length : S.value ? n.fishAudioCharacterMappings.length : U.value ? n.gsviCharacterMappings.length : n.characterMappings.length), jt = ge(() => Y.value ? Un(n.indexTtsCharacterMappingPresets) : S.value ? Un(n.fishAudioCharacterMappingPresets) : U.value ? Un(n.gsviCharacterMappingPresets) : Un(n.characterMappingPresets)), vt = ge(
      () => Rf(
        (Y.value ? n.indexTtsCharacterMappings : U.value ? n.gsviCharacterMappings : S.value ? n.fishAudioCharacterMappings : n.characterMappings).map((_) => _.characterName)
      )
    ), yt = ge(() => $.value ? "试听默认音色（消耗额度）" : U.value ? "试听默认模型" : S.value ? "试听默认音色（消耗额度）" : "试听默认音色"), Vt = ge(() => xo(m.value)), P = ge(() => Y.value ? "IndexTTS" : U.value ? "GSVI" : S.value ? "Fish Audio" : "MiniMax"), F = ge(() => I[n.ttsEngine]), J = ge(() => {
      const _ = F.value;
      return S.value ? _.kind === "connecting" ? "Fish Bridge：连接中" : _.kind === "online" ? _.detail ? `Fish Bridge：已连接 · ${_.detail}` : "Fish Bridge：已连接" : _.kind === "offline" ? _.detail || "Fish Bridge：不可用" : "Fish Bridge：尚未检查" : _.kind === "connecting" ? "正在连接" : _.kind === "online" ? _.detail ? `${P.value} 在线 · ${_.detail}` : `${P.value} 在线` : _.kind === "offline" ? _.detail ? `服务离线 · ${_.detail}` : "服务离线" : "尚未检查";
    }), q = ge(() => g.value === "saving" ? "正在保存…" : g.value === "error" ? "保存失败，请重试" : "✓ 所有修改已自动保存");
    Ha(
      n,
      () => {
        try {
          if (t.onSettingsChange(Xt(n)), R) {
            R = !1, g.value = "saved";
            return;
          }
          g.value = "saving", window.clearTimeout(G), G = window.setTimeout(() => {
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
      I[n.ttsEngine] = { kind: _, detail: c };
    }
    function Ue(_) {
      n.ttsEngine = _;
    }
    function te(_) {
      return _.replaceAll("存档", "方案");
    }
    function ve() {
      A.value = Ce();
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
      if (Nr(_)) {
        K(_.message, !0);
        return;
      }
      K(_ instanceof Error ? _.message : c, !0);
    }
    function we() {
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
        o.value = !0, c && K(c);
        try {
          await _();
        } catch (W) {
          Le(W, d);
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
            const W = await mn(d).listVoices(c);
            _o(r, d, W);
            const V = T(W.length);
            ye("online", V), K(V);
          } catch (W) {
            throw ye("offline"), W;
          }
        },
        "",
        "拉取列表失败"
      );
    }
    function M(_) {
      n.voiceId = _, n.voiceCatalogSelectedId = _;
    }
    function E() {
      if ($.value) {
        n.characterMappings.push({ characterName: "", minimaxVoiceId: "" });
        return;
      }
      if (U.value) {
        n.gsviCharacterMappings.push({
          characterName: "",
          gsviVoiceId: "",
          gsviLanguage: "",
          gsviEmotion: ""
        });
        return;
      }
      if (S.value) {
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
      if ($.value) {
        n.characterMappings.splice(_, 1);
        return;
      }
      if (U.value) {
        n.gsviCharacterMappings.splice(_, 1);
        return;
      }
      if (S.value) {
        n.fishAudioCharacterMappings.splice(_, 1);
        return;
      }
      n.indexTtsCharacterMappings.splice(_, 1);
    }
    function x() {
      const _ = a.value, c = jt.value.some((W) => W.name === _.trim());
      if (c && !window.confirm(`方案「${_.trim()}」已存在，要覆盖吗？`))
        return;
      const d = $.value ? jn(n.characterMappingPresets, _, we(), c) : U.value ? jn(n.gsviCharacterMappingPresets, _, ue(), c) : S.value ? jn(
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
        K(te(d.error), !0);
        return;
      }
      $.value ? n.characterMappingPresets = d.presets : U.value ? n.gsviCharacterMappingPresets = d.presets : S.value ? n.fishAudioCharacterMappingPresets = d.presets : n.indexTtsCharacterMappingPresets = d.presets, l.value = _.trim(), K(te(d.message));
    }
    function B() {
      const _ = $.value ? Bn(n.characterMappingPresets, l.value) : U.value ? Bn(n.gsviCharacterMappingPresets, l.value) : S.value ? Bn(n.fishAudioCharacterMappingPresets, l.value) : Bn(n.indexTtsCharacterMappingPresets, l.value);
      if ("error" in _) {
        K(te(_.error), !0);
        return;
      }
      ($.value ? we().length > 0 : U.value ? ue().length > 0 : S.value ? h().length > 0 : f().length > 0) && !window.confirm("载入方案会覆盖当前映射，确定继续吗？") || ($.value ? n.characterMappings = _.mappings : U.value ? n.gsviCharacterMappings = _.mappings : S.value ? n.fishAudioCharacterMappings = _.mappings : n.indexTtsCharacterMappings = _.mappings, K(`已载入方案：${l.value}`));
    }
    function N() {
      if (!window.confirm(`确定删除方案「${l.value}」吗？`))
        return;
      const _ = $.value ? Hn(n.characterMappingPresets, l.value) : U.value ? Hn(n.gsviCharacterMappingPresets, l.value) : S.value ? Hn(n.fishAudioCharacterMappingPresets, l.value) : Hn(n.indexTtsCharacterMappingPresets, l.value);
      if ("error" in _) {
        K(te(_.error), !0);
        return;
      }
      $.value ? n.characterMappingPresets = _.presets : U.value ? n.gsviCharacterMappingPresets = _.presets : S.value ? n.fishAudioCharacterMappingPresets = _.presets : n.indexTtsCharacterMappingPresets = _.presets, l.value = "", K(te(_.message));
    }
    async function D() {
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
            const c = await mn("fish_audio").checkHealth(_);
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
          const c = mn("index_tts");
          try {
            const d = await c.checkHealth(_);
            if (!d.ok) {
              ye("offline", d.message), K(d.message, !0);
              return;
            }
            try {
              const W = await c.listVoices(_);
              _o(r, "index_tts", W);
              const V = T(W.length);
              ye("online", V), K(d.message);
            } catch (W) {
              ye("online", d.message), Le(W, "拉取音色失败");
            }
          } catch (d) {
            throw ye("offline"), d;
          }
        },
        "",
        "检查 IndexTTS 连接失败"
      );
    }
    async function H(_) {
      await y(
        async () => {
          const c = Df(n.ttsEngine, n.testLanguage), d = Xr(n, c, _);
          if (!d) {
            K(
              _ ? `角色「${_}」未完整映射，无法测试` : "请先补全当前引擎的默认音色/模型后再测试",
              !0
            );
            return;
          }
          const W = await mn(n.ttsEngine).synthesize(d);
          Sr(W), K(_ ? `正在试听「${_}」` : "正在试听默认音色");
        },
        "正在合成测试语音…",
        "测试语音失败"
      );
    }
    async function Q() {
      await y(
        async () => {
          const _ = await bc();
          p.value = _.count, m.value = _.totalBytes, K(`缓存 ${_.count} 条，${xo(_.totalBytes)}`);
        },
        "正在读取缓存…",
        "读取缓存失败"
      );
    }
    async function re() {
      window.confirm("确定清空本扩展的音频缓存吗？") && await y(
        async () => {
          await wr(), p.value = 0, m.value = 0, K("已清空音频缓存");
        },
        "正在清空缓存…",
        "清空缓存失败"
      );
    }
    function se() {
      window.confirm("确定恢复默认设置吗？当前映射和密钥都会被清空。") && (Object.assign(n, Xt(gt)), Object.assign(r, go()), K("已恢复默认设置"));
    }
    function he() {
      Ge.value.includes(n.localGsviLanguage) || (n.localGsviLanguage = "", n.localGsviEmotion = "");
    }
    function xe(_) {
      return yo(r.local_gsvi.voices.find((c) => c.id === _));
    }
    function ke(_, c) {
      return bo(
        r.local_gsvi.voices.find((d) => d.id === _),
        c
      );
    }
    return Za(() => {
      A.value = Ce(), typeof window.matchMedia == "function" && (O = window.matchMedia("(prefers-color-scheme: dark)"), O.addEventListener("change", ve));
    }), Qa(() => {
      window.clearTimeout(G), O?.removeEventListener("change", ve), O = null;
    }), Q().catch((_) => Le(_, "读取缓存失败")), (_, c) => (L(), k("div", {
      class: "tavern-multi-tts-settings",
      "data-color-scheme": A.value
    }, [
      u("div", Hf, [
        u("div", Kf, [
          u("b", null, z(e.displayName), 1),
          c[51] || (c[51] = u("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        u("div", zf, [
          u("div", Wf, [
            u("header", Jf, [
              u("h2", Xf, z(e.displayName), 1),
              u("span", Yf, z(e.version), 1)
            ]),
            u("div", {
              class: Ye(["mtts-capsule", {
                "is-online": F.value.kind === "online",
                "is-connecting": F.value.kind === "connecting",
                "is-offline": F.value.kind === "offline"
              }]),
              role: "status",
              "aria-live": "polite"
            }, [
              c[52] || (c[52] = u("span", {
                class: "mtts-dot",
                "aria-hidden": "true"
              }, null, -1)),
              (L(), k("span", {
                key: J.value,
                class: "mtts-capsule-text mtts-fade",
                title: J.value
              }, z(J.value), 9, Zf))
            ], 2),
            s.value ? (L(), k("p", {
              key: s.value,
              class: Ye(["mtts-notice mtts-fade", { "is-error": i.value }]),
              role: "status"
            }, z(s.value), 3)) : je("", !0),
            u("label", Qf, [
              j(u("input", {
                "onUpdate:modelValue": c[0] || (c[0] = (d) => n.enabled = d),
                type: "checkbox"
              }, null, 512), [
                [Zi, n.enabled]
              ]),
              c[53] || (c[53] = u("span", null, "启用", -1))
            ]),
            u("div", qf, [
              u("button", {
                class: Ye(["mtts-tab", { "is-active": $.value }]),
                type: "button",
                role: "tab",
                "aria-label": "MiniMax",
                title: "MiniMax",
                "aria-selected": $.value,
                onClick: c[1] || (c[1] = (d) => Ue("minimax"))
              }, " MiniMax ", 10, ed),
              u("button", {
                class: Ye(["mtts-tab", { "is-active": U.value }]),
                type: "button",
                role: "tab",
                "aria-label": "GSVI",
                title: "GSVI",
                "aria-selected": U.value,
                onClick: c[2] || (c[2] = (d) => Ue("local_gsvi"))
              }, " GSVI ", 10, td),
              u("button", {
                class: Ye(["mtts-tab", { "is-active": Y.value }]),
                type: "button",
                role: "tab",
                "aria-label": "IndexTTS",
                title: "IndexTTS",
                "aria-selected": Y.value,
                onClick: c[3] || (c[3] = (d) => Ue("index_tts"))
              }, " Index ", 10, nd),
              u("button", {
                class: Ye(["mtts-tab", { "is-active": S.value }]),
                type: "button",
                role: "tab",
                "aria-label": "Fish Audio",
                title: "Fish Audio",
                "aria-selected": S.value,
                onClick: c[4] || (c[4] = (d) => Ue("fish_audio"))
              }, " Fish ", 10, sd)
            ]),
            u("section", id, [
              c[83] || (c[83] = u("h3", {
                id: "mtts-service-title",
                class: "mtts-section-title"
              }, "语音服务", -1)),
              $.value ? (L(), k(X, { key: 0 }, [
                u("label", od, [
                  c[54] || (c[54] = u("span", { class: "mtts-label" }, "API Key", -1)),
                  j(u("input", {
                    "onUpdate:modelValue": c[5] || (c[5] = (d) => n.apiKey = d),
                    class: "text_pole",
                    type: "password",
                    autocomplete: "off"
                  }, null, 512), [
                    [ie, n.apiKey]
                  ])
                ]),
                u("div", rd, [
                  u("label", ad, [
                    c[55] || (c[55] = u("span", { class: "mtts-label" }, "Group ID", -1)),
                    j(u("input", {
                      "onUpdate:modelValue": c[6] || (c[6] = (d) => n.groupId = d),
                      class: "text_pole",
                      type: "text"
                    }, null, 512), [
                      [ie, n.groupId]
                    ])
                  ]),
                  u("label", ld, [
                    c[57] || (c[57] = u("span", { class: "mtts-label" }, "区域", -1)),
                    j(u("select", {
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
                u("label", cd, [
                  c[58] || (c[58] = u("span", { class: "mtts-label" }, "默认音色", -1)),
                  j(u("input", {
                    "onUpdate:modelValue": c[8] || (c[8] = (d) => n.voiceId = d),
                    class: "text_pole",
                    type: "text",
                    placeholder: "无 char 的台词使用"
                  }, null, 512), [
                    [ie, n.voiceId]
                  ])
                ]),
                u("div", ud, [
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: D
                  }, " 检查连接 ", 8, fd),
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: o.value,
                    onClick: c[9] || (c[9] = (d) => b(!0))
                  }, " 刷新音色 ", 8, dd)
                ]),
                ne.value.length > 0 ? (L(), k("details", pd, [
                  c[67] || (c[67] = u("summary", null, [
                    u("i", {
                      class: "fa-solid fa-chevron-right mtts-fold-icon",
                      "aria-hidden": "true"
                    }),
                    at(" 筛选音色 ")
                  ], -1)),
                  u("div", md, [
                    u("div", hd, [
                      u("label", gd, [
                        c[59] || (c[59] = u("span", { class: "mtts-label" }, "搜索", -1)),
                        j(u("input", {
                          "onUpdate:modelValue": c[10] || (c[10] = (d) => r.minimax.filter.search = d),
                          class: "text_pole",
                          type: "search"
                        }, null, 512), [
                          [ie, r.minimax.filter.search]
                        ])
                      ]),
                      u("label", _d, [
                        c[61] || (c[61] = u("span", { class: "mtts-label" }, "语言", -1)),
                        j(u("select", {
                          "onUpdate:modelValue": c[11] || (c[11] = (d) => r.minimax.filter.language = d),
                          class: "text_pole"
                        }, [
                          c[60] || (c[60] = u("option", { value: "all" }, "全部语言", -1)),
                          (L(!0), k(X, null, me(Pt.value, (d) => (L(), k("option", {
                            key: d,
                            value: d
                          }, z(d), 9, vd))), 128))
                        ], 512), [
                          [_e, r.minimax.filter.language]
                        ])
                      ]),
                      u("label", yd, [
                        c[63] || (c[63] = u("span", { class: "mtts-label" }, "性别", -1)),
                        j(u("select", {
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
                      u("label", bd, [
                        c[65] || (c[65] = u("span", { class: "mtts-label" }, "来源", -1)),
                        j(u("select", {
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
                    u("label", xd, [
                      c[66] || (c[66] = u("span", { class: "mtts-label" }, "从列表填入默认音色", -1)),
                      u("select", {
                        class: "text_pole",
                        value: n.voiceId,
                        onChange: c[14] || (c[14] = (d) => M(d.target.value))
                      }, [
                        u("option", wd, z(Ct.value.length) + " 条可选", 1),
                        (L(!0), k(X, null, me(Ct.value, (d) => (L(), k("option", {
                          key: d.id,
                          value: d.id
                        }, z(rt(vo)(d)), 9, Sd))), 128))
                      ], 40, Td)
                    ])
                  ])
                ])) : je("", !0)
              ], 64)) : Y.value ? (L(), k(X, { key: 1 }, [
                u("div", Ed, [
                  u("label", Ad, [
                    c[68] || (c[68] = u("span", { class: "mtts-label" }, "服务地址", -1)),
                    j(u("input", {
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
                    onClick: D
                  }, " 检查连接 ", 8, Id)
                ]),
                u("div", Md, [
                  u("label", Cd, [
                    c[69] || (c[69] = u("span", { class: "mtts-label" }, "默认音色", -1)),
                    j(u("select", {
                      "onUpdate:modelValue": c[16] || (c[16] = (d) => n.indexTtsVoiceId = d),
                      class: "text_pole"
                    }, [
                      u("option", Pd, z(pe.value.length > 0 ? "请选择音色预设" : "先检查连接并拉取音色"), 1),
                      n.indexTtsVoiceId && !pe.value.some((d) => d.id === n.indexTtsVoiceId) ? (L(), k("option", {
                        key: 0,
                        value: n.indexTtsVoiceId
                      }, z(n.indexTtsVoiceId), 9, Rd)) : je("", !0),
                      (L(!0), k(X, null, me(pe.value, (d) => (L(), k("option", {
                        key: d.id,
                        value: d.id
                      }, z(d.name), 9, Vd))), 128))
                    ], 512), [
                      [_e, n.indexTtsVoiceId]
                    ])
                  ]),
                  u("label", Nd, [
                    c[70] || (c[70] = u("span", { class: "mtts-label" }, "语言", -1)),
                    j(u("select", {
                      "onUpdate:modelValue": c[17] || (c[17] = (d) => n.indexTtsLanguage = d),
                      class: "text_pole"
                    }, [
                      (L(!0), k(X, null, me(rt(ss), (d) => (L(), k("option", {
                        key: d,
                        value: d
                      }, z(d), 9, Ld))), 128))
                    ], 512), [
                      [_e, n.indexTtsLanguage]
                    ])
                  ])
                ])
              ], 64)) : S.value ? (L(), k(X, { key: 2 }, [
                u("label", kd, [
                  c[71] || (c[71] = u("span", { class: "mtts-label" }, "API Key", -1)),
                  j(u("input", {
                    "onUpdate:modelValue": c[18] || (c[18] = (d) => n.fishAudioApiKey = d),
                    class: "text_pole",
                    type: "password",
                    autocomplete: "off"
                  }, null, 512), [
                    [ie, n.fishAudioApiKey]
                  ])
                ]),
                u("label", Od, [
                  c[72] || (c[72] = u("span", { class: "mtts-label" }, "模型档位", -1)),
                  j(u("select", {
                    "onUpdate:modelValue": c[19] || (c[19] = (d) => n.fishAudioModel = d),
                    class: "text_pole"
                  }, [
                    (L(!0), k(X, null, me(rt(xi), (d) => (L(), k("option", {
                      key: d,
                      value: d
                    }, z(d === "s2.1-pro-free" ? "S2.1 Pro Free" : "S2.1 Pro"), 9, Fd))), 128))
                  ], 512), [
                    [_e, n.fishAudioModel]
                  ])
                ]),
                u("label", Dd, [
                  c[73] || (c[73] = u("span", { class: "mtts-label" }, "默认音色模型 ID", -1)),
                  j(u("input", {
                    "onUpdate:modelValue": c[20] || (c[20] = (d) => n.fishAudioReferenceId = d),
                    class: "text_pole",
                    type: "text",
                    list: "fish-audio-voice-suggestions",
                    placeholder: "可输入公共模型 ID"
                  }, null, 512), [
                    [ie, n.fishAudioReferenceId]
                  ])
                ]),
                u("datalist", $d, [
                  (L(!0), k(X, null, me($e.value, (d) => (L(), k("option", {
                    key: d.id,
                    value: d.id
                  }, z(d.name), 9, Gd))), 128))
                ]),
                c[74] || (c[74] = u("p", { class: "mtts-hint" }, " 可从 Fish Audio 音色页面复制模型 ID；“拉取模型”只读取当前账号自己的模型。 ", -1)),
                u("div", Ud, [
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: D
                  }, " 检查连接 ", 8, jd),
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: o.value,
                    onClick: c[21] || (c[21] = (d) => b(!0))
                  }, " 拉取模型 ", 8, Bd)
                ])
              ], 64)) : U.value ? (L(), k(X, { key: 3 }, [
                u("div", Hd, [
                  u("label", Kd, [
                    c[75] || (c[75] = u("span", { class: "mtts-label" }, "服务地址", -1)),
                    j(u("input", {
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
                    onClick: D
                  }, " 检查连接 ", 8, zd)
                ]),
                u("div", Wd, [
                  u("label", Jd, [
                    c[76] || (c[76] = u("span", { class: "mtts-label" }, "默认模型", -1)),
                    j(u("select", {
                      "onUpdate:modelValue": c[23] || (c[23] = (d) => n.localGsviModel = d),
                      class: "text_pole",
                      onChange: he
                    }, [
                      u("option", Xd, z(Ae.value.length > 0 ? "请选择" : "先检查连接并拉取模型"), 1),
                      (L(!0), k(X, null, me(Ae.value, (d) => (L(), k("option", {
                        key: d.id,
                        value: d.id
                      }, z(d.name), 9, Yd))), 128))
                    ], 544), [
                      [_e, n.localGsviModel]
                    ])
                  ]),
                  u("label", Zd, [
                    c[78] || (c[78] = u("span", { class: "mtts-label" }, "语种", -1)),
                    j(u("select", {
                      "onUpdate:modelValue": c[24] || (c[24] = (d) => n.localGsviLanguage = d),
                      class: "text_pole"
                    }, [
                      c[77] || (c[77] = u("option", { value: "" }, "请选择", -1)),
                      (L(!0), k(X, null, me(Ge.value, (d) => (L(), k("option", {
                        key: d,
                        value: d
                      }, z(d), 9, Qd))), 128))
                    ], 512), [
                      [_e, n.localGsviLanguage]
                    ])
                  ]),
                  u("label", qd, [
                    c[80] || (c[80] = u("span", { class: "mtts-label" }, "情绪", -1)),
                    j(u("select", {
                      "onUpdate:modelValue": c[25] || (c[25] = (d) => n.localGsviEmotion = d),
                      class: "text_pole"
                    }, [
                      c[79] || (c[79] = u("option", { value: "" }, "请选择", -1)),
                      (L(!0), k(X, null, me(an.value, (d) => (L(), k("option", {
                        key: d,
                        value: d
                      }, z(d), 9, ep))), 128))
                    ], 512), [
                      [_e, n.localGsviEmotion]
                    ])
                  ])
                ])
              ], 64)) : je("", !0),
              u("div", tp, [
                u("label", np, [
                  c[82] || (c[82] = u("span", { class: "mtts-label" }, "试听语言", -1)),
                  j(u("select", {
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
                  onClick: c[27] || (c[27] = (d) => H())
                }, z(yt.value), 9, sp)
              ])
            ]),
            u("section", ip, [
              u("div", op, [
                u("h3", rp, [
                  c[84] || (c[84] = at(" 角色映射 ", -1)),
                  u("span", ap, z(Rt.value), 1)
                ]),
                u("button", {
                  class: "mtts-btn mtts-btn-primary",
                  type: "button",
                  onClick: E
                }, " + 添加角色 ")
              ]),
              Rt.value === 0 ? (L(), k("div", lp, [
                c[85] || (c[85] = u("p", { class: "mtts-empty-title" }, "还没有角色映射", -1)),
                c[86] || (c[86] = u("p", { class: "mtts-empty-copy" }, [
                  at(" 添加角色后，带有 "),
                  u("code", null, '<say char="角色名">'),
                  at(" 的台词才会生成语音。 ")
                ], -1)),
                u("button", {
                  class: "mtts-btn mtts-btn-primary",
                  type: "button",
                  onClick: E
                }, " ＋添加第一个角色 ")
              ])) : (L(), k(X, { key: 1 }, [
                $.value ? (L(!0), k(X, { key: 0 }, me(n.characterMappings, (d, W) => (L(), k("article", {
                  key: `mm-${W}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", cp, [
                    c[87] || (c[87] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    j(u("input", {
                      "onUpdate:modelValue": (V) => d.characterName = V,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, up), [
                      [ie, d.characterName]
                    ])
                  ]),
                  u("label", fp, [
                    c[88] || (c[88] = u("span", { class: "mtts-label" }, "Voice ID", -1)),
                    j(u("input", {
                      "onUpdate:modelValue": (V) => d.minimaxVoiceId = V,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, dp), [
                      [ie, d.minimaxVoiceId]
                    ])
                  ]),
                  ne.value.length > 0 ? (L(), k("label", pp, [
                    c[90] || (c[90] = u("span", { class: "mtts-label" }, "音色预设", -1)),
                    u("select", {
                      class: "text_pole",
                      value: d.minimaxVoiceId,
                      onChange: (V) => d.minimaxVoiceId = V.target.value
                    }, [
                      c[89] || (c[89] = u("option", { value: "" }, "从列表选择", -1)),
                      (L(!0), k(X, null, me(Ct.value, (V) => (L(), k("option", {
                        key: V.id,
                        value: V.id
                      }, z(rt(vo)(V)), 9, hp))), 128))
                    ], 40, mp)
                  ])) : je("", !0),
                  u("div", gp, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (V) => H(d.characterName)
                    }, " 试听 ", 8, _p),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (V) => w(W)
                    }, " 删除 ", 8, vp)
                  ])
                ]))), 128)) : Y.value ? (L(!0), k(X, { key: 1 }, me(n.indexTtsCharacterMappings, (d, W) => (L(), k("article", {
                  key: `index-${W}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", yp, [
                    c[91] || (c[91] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    j(u("input", {
                      "onUpdate:modelValue": (V) => d.characterName = V,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, bp), [
                      [ie, d.characterName]
                    ])
                  ]),
                  u("div", xp, [
                    u("label", Tp, [
                      c[92] || (c[92] = u("span", { class: "mtts-label" }, "音色预设", -1)),
                      j(u("select", {
                        "onUpdate:modelValue": (V) => d.indexTtsVoiceId = V,
                        class: "text_pole"
                      }, [
                        u("option", Sp, z(pe.value.length > 0 ? "请选择" : "先检查连接"), 1),
                        d.indexTtsVoiceId && !pe.value.some((V) => V.id === d.indexTtsVoiceId) ? (L(), k("option", {
                          key: 0,
                          value: d.indexTtsVoiceId
                        }, z(d.indexTtsVoiceId), 9, Ep)) : je("", !0),
                        (L(!0), k(X, null, me(pe.value, (V) => (L(), k("option", {
                          key: V.id,
                          value: V.id
                        }, z(V.name), 9, Ap))), 128))
                      ], 8, wp), [
                        [_e, d.indexTtsVoiceId]
                      ])
                    ]),
                    u("label", Ip, [
                      c[93] || (c[93] = u("span", { class: "mtts-label" }, "语言", -1)),
                      j(u("select", {
                        "onUpdate:modelValue": (V) => d.indexTtsLanguage = V,
                        class: "text_pole"
                      }, [
                        (L(!0), k(X, null, me(rt(ss), (V) => (L(), k("option", {
                          key: V,
                          value: V
                        }, z(V), 9, Cp))), 128))
                      ], 8, Mp), [
                        [_e, d.indexTtsLanguage]
                      ])
                    ])
                  ]),
                  u("div", Pp, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (V) => H(d.characterName)
                    }, " 试听 ", 8, Rp),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (V) => w(W)
                    }, " 删除 ", 8, Vp)
                  ])
                ]))), 128)) : S.value ? (L(!0), k(X, { key: 2 }, me(n.fishAudioCharacterMappings, (d, W) => (L(), k("article", {
                  key: `fish-${W}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", Np, [
                    c[94] || (c[94] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    j(u("input", {
                      "onUpdate:modelValue": (V) => d.characterName = V,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, Lp), [
                      [ie, d.characterName]
                    ])
                  ]),
                  u("label", kp, [
                    c[95] || (c[95] = u("span", { class: "mtts-label" }, "Fish Audio 音色模型 ID", -1)),
                    j(u("input", {
                      "onUpdate:modelValue": (V) => d.fishAudioReferenceId = V,
                      class: "text_pole",
                      type: "text",
                      list: "fish-audio-voice-suggestions"
                    }, null, 8, Op), [
                      [ie, d.fishAudioReferenceId]
                    ])
                  ]),
                  u("div", Fp, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (V) => H(d.characterName)
                    }, " 试听 ", 8, Dp),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (V) => w(W)
                    }, " 删除 ", 8, $p)
                  ])
                ]))), 128)) : U.value ? (L(!0), k(X, { key: 3 }, me(n.gsviCharacterMappings, (d, W) => (L(), k("article", {
                  key: `gsvi-${W}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", Gp, [
                    c[96] || (c[96] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    j(u("input", {
                      "onUpdate:modelValue": (V) => d.characterName = V,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, Up), [
                      [ie, d.characterName]
                    ])
                  ]),
                  u("div", jp, [
                    u("label", Bp, [
                      c[97] || (c[97] = u("span", { class: "mtts-label" }, "模型", -1)),
                      j(u("select", {
                        "onUpdate:modelValue": (V) => d.gsviVoiceId = V,
                        class: "text_pole"
                      }, [
                        u("option", Kp, z(Ae.value.length > 0 ? "请选择" : "先检查连接"), 1),
                        (L(!0), k(X, null, me(Ae.value, (V) => (L(), k("option", {
                          key: V.id,
                          value: V.id
                        }, z(V.name), 9, zp))), 128))
                      ], 8, Hp), [
                        [_e, d.gsviVoiceId]
                      ])
                    ]),
                    u("label", Wp, [
                      c[99] || (c[99] = u("span", { class: "mtts-label" }, "语种", -1)),
                      j(u("select", {
                        "onUpdate:modelValue": (V) => d.gsviLanguage = V,
                        class: "text_pole"
                      }, [
                        c[98] || (c[98] = u("option", { value: "" }, "请选择", -1)),
                        (L(!0), k(X, null, me(xe(d.gsviVoiceId), (V) => (L(), k("option", {
                          key: V,
                          value: V
                        }, z(V), 9, Xp))), 128))
                      ], 8, Jp), [
                        [_e, d.gsviLanguage]
                      ])
                    ]),
                    u("label", Yp, [
                      c[101] || (c[101] = u("span", { class: "mtts-label" }, "情绪", -1)),
                      j(u("select", {
                        "onUpdate:modelValue": (V) => d.gsviEmotion = V,
                        class: "text_pole"
                      }, [
                        c[100] || (c[100] = u("option", { value: "" }, "请选择", -1)),
                        (L(!0), k(X, null, me(ke(d.gsviVoiceId, d.gsviLanguage), (V) => (L(), k("option", {
                          key: V,
                          value: V
                        }, z(V), 9, Qp))), 128))
                      ], 8, Zp), [
                        [_e, d.gsviEmotion]
                      ])
                    ])
                  ]),
                  u("div", qp, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (V) => H(d.characterName)
                    }, " 试听 ", 8, em),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (V) => w(W)
                    }, " 删除 ", 8, tm)
                  ])
                ]))), 128)) : je("", !0),
                vt.value.length > 0 ? (L(), k("p", nm, " 重复角色名：" + z(vt.value.join("、")) + "，最后一条完整映射生效。 ", 1)) : je("", !0)
              ], 64))
            ]),
            u("details", sm, [
              c[106] || (c[106] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                at(" 映射方案（可选） ")
              ], -1)),
              u("div", im, [
                c[105] || (c[105] = u("p", { class: "mtts-hint" }, "角色映射会自动保存；这里仅用于保存多套可切换方案。", -1)),
                u("label", om, [
                  c[102] || (c[102] = u("span", { class: "mtts-label" }, "方案名称", -1)),
                  j(u("input", {
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
                u("label", rm, [
                  c[104] || (c[104] = u("span", { class: "mtts-label" }, "选择已有方案", -1)),
                  j(u("select", {
                    "onUpdate:modelValue": c[29] || (c[29] = (d) => l.value = d),
                    class: "text_pole"
                  }, [
                    c[103] || (c[103] = u("option", { value: "" }, "请选择方案", -1)),
                    (L(!0), k(X, null, me(jt.value, (d) => (L(), k("option", {
                      key: d.name,
                      value: d.name
                    }, z(d.name) + "（" + z(d.mappings.length) + "） ", 9, am))), 128))
                  ], 512), [
                    [_e, l.value]
                  ])
                ]),
                u("div", lm, [
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: !l.value,
                    onClick: B
                  }, " 载入方案 ", 8, cm),
                  u("button", {
                    class: "mtts-btn mtts-btn-danger",
                    type: "button",
                    disabled: !l.value,
                    onClick: N
                  }, " 删除方案 ", 8, um)
                ])
              ])
            ]),
            u("details", fm, [
              c[111] || (c[111] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                at(" 提示词注入 ")
              ], -1)),
              u("div", dm, [
                u("label", pm, [
                  j(u("input", {
                    "onUpdate:modelValue": c[30] || (c[30] = (d) => n.injectEnabled = d),
                    type: "checkbox"
                  }, null, 512), [
                    [Zi, n.injectEnabled]
                  ]),
                  c[107] || (c[107] = u("span", null, "注入 <say> 提示", -1))
                ]),
                u("label", mm, [
                  u("span", hm, "注入深度 D" + z(n.injectDepth), 1),
                  j(u("input", {
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
                u("label", gm, [
                  c[109] || (c[109] = u("span", { class: "mtts-label" }, "注入角色", -1)),
                  j(u("select", {
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
                u("label", _m, [
                  c[110] || (c[110] = u("span", { class: "mtts-label" }, "注入模板", -1)),
                  Y.value ? j((L(), k("textarea", {
                    key: 0,
                    "onUpdate:modelValue": c[33] || (c[33] = (d) => n.indexTtsInjectTemplate = d),
                    class: "text_pole mtts-inject-template",
                    rows: "12"
                  }, null, 512)), [
                    [ie, n.indexTtsInjectTemplate]
                  ]) : S.value ? j((L(), k("textarea", {
                    key: 1,
                    "onUpdate:modelValue": c[34] || (c[34] = (d) => n.fishAudioInjectTemplate = d),
                    class: "text_pole mtts-inject-template",
                    rows: "18"
                  }, null, 512)), [
                    [ie, n.fishAudioInjectTemplate]
                  ]) : j((L(), k("textarea", {
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
            u("details", vm, [
              c[116] || (c[116] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                at(" 生成与缓存 ")
              ], -1)),
              u("div", ym, [
                u("label", bm, [
                  c[113] || (c[113] = u("span", { class: "mtts-label" }, "预取", -1)),
                  j(u("select", {
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
                n.prefetchMode !== "manual" ? (L(), k("div", xm, [
                  n.prefetchMode === "auto_first_n" ? (L(), k("label", Tm, [
                    c[114] || (c[114] = u("span", { class: "mtts-label" }, "前 N 句", -1)),
                    j(u("input", {
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
                  u("label", wm, [
                    c[115] || (c[115] = u("span", { class: "mtts-label" }, "并发", -1)),
                    j(u("input", {
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
                u("p", Sm, " 缓存 " + z(p.value) + " 条 / " + z(Vt.value) + "，上限 100 条或 50MB。 ", 1),
                u("div", Em, [
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: o.value,
                    onClick: Q
                  }, " 刷新缓存 ", 8, Am),
                  u("button", {
                    class: "mtts-btn mtts-btn-danger",
                    type: "button",
                    disabled: o.value,
                    onClick: re
                  }, " 清空缓存 ", 8, Im)
                ])
              ])
            ]),
            u("details", Mm, [
              c[123] || (c[123] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                at(" 高级设置 ")
              ], -1)),
              u("div", Cm, [
                $.value ? (L(), k(X, { key: 0 }, [
                  u("label", Pm, [
                    c[117] || (c[117] = u("span", { class: "mtts-label" }, "模型", -1)),
                    j(u("select", {
                      "onUpdate:modelValue": c[39] || (c[39] = (d) => n.model = d),
                      class: "text_pole"
                    }, [
                      (L(!0), k(X, null, me(rt(Ir), (d) => (L(), k("option", {
                        key: d,
                        value: d
                      }, z(d), 9, Rm))), 128))
                    ], 512), [
                      [_e, n.model]
                    ])
                  ]),
                  u("label", Vm, [
                    u("span", Nm, "语速 " + z(n.speed.toFixed(2)), 1),
                    j(u("input", {
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
                  u("label", Lm, [
                    u("span", km, "音量 " + z(n.vol.toFixed(2)), 1),
                    j(u("input", {
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
                ], 64)) : U.value ? (L(), k(X, { key: 1 }, [
                  u("label", Om, [
                    u("span", Fm, "语速 " + z(n.speed.toFixed(2)), 1),
                    j(u("input", {
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
                  u("label", Dm, [
                    c[118] || (c[118] = u("span", { class: "mtts-label" }, "鉴权 Token", -1)),
                    j(u("input", {
                      "onUpdate:modelValue": c[43] || (c[43] = (d) => n.localGsviAuthToken = d),
                      class: "text_pole",
                      type: "password",
                      autocomplete: "off"
                    }, null, 512), [
                      [ie, n.localGsviAuthToken]
                    ])
                  ]),
                  u("div", $m, [
                    u("label", Gm, [
                      c[119] || (c[119] = u("span", { class: "mtts-label" }, "文本语言", -1)),
                      j(u("select", {
                        "onUpdate:modelValue": c[44] || (c[44] = (d) => n.localGsviTextLang = d),
                        class: "text_pole"
                      }, [
                        (L(!0), k(X, null, me(rt(Of), (d) => (L(), k("option", {
                          key: d,
                          value: d
                        }, z(d), 9, Um))), 128))
                      ], 512), [
                        [_e, n.localGsviTextLang]
                      ])
                    ]),
                    u("label", jm, [
                      c[120] || (c[120] = u("span", { class: "mtts-label" }, "切分", -1)),
                      j(u("select", {
                        "onUpdate:modelValue": c[45] || (c[45] = (d) => n.localGsviTextSplitMethod = d),
                        class: "text_pole"
                      }, [
                        (L(!0), k(X, null, me(rt(Ff), (d) => (L(), k("option", {
                          key: d,
                          value: d
                        }, z(d), 9, Bm))), 128))
                      ], 512), [
                        [_e, n.localGsviTextSplitMethod]
                      ])
                    ])
                  ]),
                  u("label", Hm, [
                    u("span", Km, "Batch " + z(n.localGsviBatchSize), 1),
                    j(u("input", {
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
                ], 64)) : Y.value ? (L(), k(X, { key: 2 }, [
                  u("label", zm, [
                    u("span", Wm, "时长系数 " + z(n.indexTtsDurationFactor.toFixed(2)), 1),
                    c[121] || (c[121] = u("p", { class: "mtts-hint" }, "快 ← 不变 → 慢，与 IndexTTS WebUI 相同", -1)),
                    j(u("input", {
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
                  u("label", Jm, [
                    u("span", Xm, "情感权重 " + z(n.indexTtsEmoWeight.toFixed(2)), 1),
                    j(u("input", {
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
                ], 64)) : S.value ? (L(), k(X, { key: 3 }, [
                  u("label", Ym, [
                    u("span", Zm, "语速 " + z(n.fishAudioSpeed.toFixed(2)), 1),
                    j(u("input", {
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
                  u("label", Qm, [
                    u("span", qm, "音量 " + z(n.fishAudioVolume.toFixed(2)) + " dB", 1),
                    j(u("input", {
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
              }, z(q.value), 1))
            ], 2)
          ])
        ])
      ])
    ], 8, Bf));
  }
});
let fn = null, dn = null, Tn = null;
function th() {
  return Xt(Zr().readRawSettings());
}
function nh() {
  return Tn ??= Ef(Pf(th)), Tn;
}
function on() {
  return dn || (dn = Bc(
    Zr(),
    {
      mount(e, t) {
        fn?.unmount(), fn = rc(eh, {
          displayName: wc,
          version: Sc,
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
      clearCache: wr,
      startRuntime: () => nh().start(),
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
    throw console.error(`${Ee} ${e} failed: ${s}`), n;
  }
}
async function sh() {
  await rn("onInstall", () => on().install());
}
async function ih() {
  await rn("onActivate", () => on().activate());
}
async function oh() {
  await rn("onEnable", () => on().activate());
}
async function rh() {
  await rn("onDisable", () => on().disable());
}
async function ah() {
  await rn("onClean", () => on().clean());
}
async function lh() {
  await rn("onDelete", () => on().delete());
}
export {
  ih as onActivate,
  ah as onClean,
  lh as onDelete,
  rh as onDisable,
  oh as onEnable,
  sh as onInstall
};
//# sourceMappingURL=index.js.map
