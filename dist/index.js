// @__NO_SIDE_EFFECTS__
function zi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const oe = {}, Dt = [], It = () => {
}, so = () => !1, Jn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Xn = (e) => e.startsWith("onUpdate:"), Be = Object.assign, oo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Rr = Object.prototype.hasOwnProperty, te = (e, t) => Rr.call(e, t), B = Array.isArray, kt = (e) => wn(e) === "[object Map]", Yt = (e) => wn(e) === "[object Set]", ps = (e) => wn(e) === "[object Date]", Z = (e) => typeof e == "function", pe = (e) => typeof e == "string", nt = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", ro = (e) => (re(e) || Z(e)) && Z(e.then) && Z(e.catch), lo = Object.prototype.toString, wn = (e) => lo.call(e), Vr = (e) => wn(e).slice(8, -1), ao = (e) => wn(e) === "[object Object]", Wi = (e) => pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, cn = /* @__PURE__ */ zi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Yn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Nr = /-\w/g, Ue = Yn(
  (e) => e.replace(Nr, (t) => t.slice(1).toUpperCase())
), Lr = /\B([A-Z])/g, Vt = Yn(
  (e) => e.replace(Lr, "-$1").toLowerCase()
), co = Yn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ai = Yn(
  (e) => e ? `on${co(e)}` : ""
), et = (e, t) => !Object.is(e, t), Rn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, uo = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Zn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ms;
const Qn = () => ms || (ms = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ji(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], s = pe(i) ? Dr(i) : Ji(i);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (pe(e) || re(e))
    return e;
}
const Gr = /;(?![^(]*\))/g, $r = /:([^]+)/, Or = /\/\*[^]*?\*\//g;
function Dr(e) {
  const t = {};
  return e.replace(Or, "").split(Gr).forEach((n) => {
    if (n) {
      const i = n.split($r);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function qn(e) {
  let t = "";
  if (pe(e))
    t = e;
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const i = qn(e[n]);
      i && (t += i + " ");
    }
  else if (re(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const kr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ur = /* @__PURE__ */ zi(kr);
function fo(e) {
  return !!e || e === "";
}
function jr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Zt(e[i], t[i]);
  return n;
}
function Zt(e, t) {
  if (e === t) return !0;
  let n = ps(e), i = ps(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = nt(e), i = nt(t), n || i)
    return e === t;
  if (n = B(e), i = B(t), n || i)
    return n && i ? jr(e, t) : !1;
  if (n = re(e), i = re(t), n || i) {
    if (!n || !i)
      return !1;
    const s = Object.keys(e).length, o = Object.keys(t).length;
    if (s !== o)
      return !1;
    for (const l in e) {
      const r = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
      if (r && !c || !r && c || !Zt(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Xi(e, t) {
  return e.findIndex((n) => Zt(n, t));
}
const po = (e) => !!(e && e.__v_isRef === !0), F = (e) => pe(e) ? e : e == null ? "" : B(e) || re(e) && (e.toString === lo || !Z(e.toString)) ? po(e) ? F(e.value) : JSON.stringify(e, mo, 2) : String(e), mo = (e, t) => po(t) ? mo(e, t.value) : kt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, s], o) => (n[ci(i, o) + " =>"] = s, n),
    {}
  )
} : Yt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ci(n))
} : nt(t) ? ci(t) : re(t) && !B(t) && !ao(t) ? String(t) : t, ci = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let ve;
class Fr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ve && (ve.active ? (this.parent = ve, this.index = (ve.scopes || (ve.scopes = [])).push(
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
        const i = this.scopes.slice();
        for (t = 0, n = i.length; t < n; t++)
          i[t].pause();
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
      const i = this.effects.slice();
      for (t = 0, n = i.length; t < n; t++)
        i[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ve;
      try {
        return ve = this, t();
      } finally {
        ve = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ve, ve = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ve === this)
        ve = this.prevScope;
      else {
        let t = ve;
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
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const s = this.scopes.slice();
        for (n = 0, i = s.length; n < i; n++)
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
function Br() {
  return ve;
}
let ne;
const ui = /* @__PURE__ */ new WeakSet();
class go {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ve && (ve.active ? ve.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ui.has(this) && (ui.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || vo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, gs(this), _o(this);
    const t = ne, n = je;
    ne = this, je = !0;
    try {
      return this.fn();
    } finally {
      xo(this), ne = t, je = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Qi(t);
      this.deps = this.depsTail = void 0, gs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ui.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ri(this) && this.run();
  }
  get dirty() {
    return Ri(this);
  }
}
let ho = 0, un, fn;
function vo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = fn, fn = e;
    return;
  }
  e.next = un, un = e;
}
function Yi() {
  ho++;
}
function Zi() {
  if (--ho > 0)
    return;
  if (fn) {
    let t = fn;
    for (fn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; un; ) {
    let t = un;
    for (un = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function _o(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xo(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const s = i.prevDep;
    i.version === -1 ? (i === n && (n = s), Qi(i), Hr(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = s;
  }
  e.deps = t, e.depsTail = n;
}
function Ri(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (yo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function yo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === hn) || (e.globalVersion = hn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ri(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ne, i = je;
  ne = e, je = !0;
  try {
    _o(e);
    const s = e.fn(e._value);
    (t.version === 0 || et(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    ne = n, je = i, xo(e), e.flags &= -3;
  }
}
function Qi(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: s } = e;
  if (i && (i.nextSub = s, e.prevSub = void 0), s && (s.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Qi(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Hr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let je = !0;
const bo = [];
function Pt() {
  bo.push(je), je = !1;
}
function Rt() {
  const e = bo.pop();
  je = e === void 0 ? !0 : e;
}
function gs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ne;
    ne = void 0;
    try {
      t();
    } finally {
      ne = n;
    }
  }
}
let hn = 0;
class Kr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ne || !je || ne === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ne)
      n = this.activeLink = new Kr(ne, this), ne.deps ? (n.prevDep = ne.depsTail, ne.depsTail.nextDep = n, ne.depsTail = n) : ne.deps = ne.depsTail = n, To(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ne.depsTail, n.nextDep = void 0, ne.depsTail.nextDep = n, ne.depsTail = n, ne.deps === n && (ne.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, hn++, this.notify(t);
  }
  notify(t) {
    Yi();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Zi();
    }
  }
}
function To(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        To(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Vi = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ Symbol(
  ""
), Ni = /* @__PURE__ */ Symbol(
  ""
), vn = /* @__PURE__ */ Symbol(
  ""
);
function ye(e, t, n) {
  if (je && ne) {
    let i = Vi.get(e);
    i || Vi.set(e, i = /* @__PURE__ */ new Map());
    let s = i.get(n);
    s || (i.set(n, s = new qi()), s.map = i, s.key = n), s.track();
  }
}
function lt(e, t, n, i, s, o) {
  const l = Vi.get(e);
  if (!l) {
    hn++;
    return;
  }
  const r = (c) => {
    c && c.trigger();
  };
  if (Yi(), t === "clear")
    l.forEach(r);
  else {
    const c = B(e), m = c && Wi(n);
    if (c && n === "length") {
      const p = Number(i);
      l.forEach((g, b) => {
        (b === "length" || b === vn || !nt(b) && b >= p) && r(g);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && r(l.get(n)), m && r(l.get(vn)), t) {
        case "add":
          c ? m && r(l.get("length")) : (r(l.get(Ct)), kt(e) && r(l.get(Ni)));
          break;
        case "delete":
          c || (r(l.get(Ct)), kt(e) && r(l.get(Ni)));
          break;
        case "set":
          kt(e) && r(l.get(Ct));
          break;
      }
  }
  Zi();
}
function Gt(e) {
  const t = /* @__PURE__ */ J(e);
  return t === e ? t : (ye(t, "iterate", vn), /* @__PURE__ */ Le(e) ? t : t.map(Fe));
}
function ei(e) {
  return ye(e = /* @__PURE__ */ J(e), "iterate", vn), e;
}
function Qe(e, t) {
  return /* @__PURE__ */ ut(e) ? zt(/* @__PURE__ */ Mt(e) ? Fe(t) : t) : Fe(t);
}
const zr = {
  __proto__: null,
  [Symbol.iterator]() {
    return fi(this, Symbol.iterator, (e) => Qe(this, e));
  },
  concat(...e) {
    return Gt(this).concat(
      ...e.map((t) => B(t) ? Gt(t) : t)
    );
  },
  entries() {
    return fi(this, "entries", (e) => (e[1] = Qe(this, e[1]), e));
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
      (n) => n.map((i) => Qe(this, i)),
      arguments
    );
  },
  find(e, t) {
    return it(
      this,
      "find",
      e,
      t,
      (n) => Qe(this, n),
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
      (n) => Qe(this, n),
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
    return di(this, "includes", e);
  },
  indexOf(...e) {
    return di(this, "indexOf", e);
  },
  join(e) {
    return Gt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return di(this, "lastIndexOf", e);
  },
  map(e, t) {
    return it(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return sn(this, "pop");
  },
  push(...e) {
    return sn(this, "push", e);
  },
  reduce(e, ...t) {
    return hs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return hs(this, "reduceRight", e, t);
  },
  shift() {
    return sn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return it(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return sn(this, "splice", e);
  },
  toReversed() {
    return Gt(this).toReversed();
  },
  toSorted(e) {
    return Gt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Gt(this).toSpliced(...e);
  },
  unshift(...e) {
    return sn(this, "unshift", e);
  },
  values() {
    return fi(this, "values", (e) => Qe(this, e));
  }
};
function fi(e, t, n) {
  const i = ei(e), s = i[t]();
  return i !== e && !/* @__PURE__ */ Le(e) && (s._next = s.next, s.next = () => {
    const o = s._next();
    return o.done || (o.value = n(o.value)), o;
  }), s;
}
const Wr = Array.prototype;
function it(e, t, n, i, s, o) {
  const l = ei(e), r = l !== e && !/* @__PURE__ */ Le(e), c = l[t];
  if (c !== Wr[t]) {
    const g = c.apply(e, o);
    return r ? Fe(g) : g;
  }
  let m = n;
  l !== e && (r ? m = function(g, b) {
    return n.call(this, Qe(e, g), b, e);
  } : n.length > 2 && (m = function(g, b) {
    return n.call(this, g, b, e);
  }));
  const p = c.call(l, m, i);
  return r && s ? s(p) : p;
}
function hs(e, t, n, i) {
  const s = ei(e), o = s !== e && !/* @__PURE__ */ Le(e);
  let l = n, r = !1;
  s !== e && (o ? (r = i.length === 0, l = function(m, p, g) {
    return r && (r = !1, m = Qe(e, m)), n.call(this, m, Qe(e, p), g, e);
  }) : n.length > 3 && (l = function(m, p, g) {
    return n.call(this, m, p, g, e);
  }));
  const c = s[t](l, ...i);
  return r ? Qe(e, c) : c;
}
function di(e, t, n) {
  const i = /* @__PURE__ */ J(e);
  ye(i, "iterate", vn);
  const s = i[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ ns(n[0]) ? (n[0] = /* @__PURE__ */ J(n[0]), i[t](...n)) : s;
}
function sn(e, t, n = []) {
  Pt(), Yi();
  const i = (/* @__PURE__ */ J(e))[t].apply(e, n);
  return Zi(), Rt(), i;
}
const Jr = /* @__PURE__ */ zi("__proto__,__v_isRef,__isVue"), So = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(nt)
);
function Xr(e) {
  nt(e) || (e = String(e));
  const t = /* @__PURE__ */ J(this);
  return ye(t, "has", e), t.hasOwnProperty(e);
}
class wo {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return i === (s ? o ? ol : Mo : o ? Co : Io).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const l = B(t);
    if (!s) {
      let c;
      if (l && (c = zr[n]))
        return c;
      if (n === "hasOwnProperty")
        return Xr;
    }
    const r = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Se(t) ? t : i
    );
    if ((nt(n) ? So.has(n) : Jr(n)) || (s || ye(t, "get", n), o))
      return r;
    if (/* @__PURE__ */ Se(r)) {
      const c = l && Wi(n) ? r : r.value;
      return s && re(c) ? /* @__PURE__ */ Gi(c) : c;
    }
    return re(r) ? s ? /* @__PURE__ */ Gi(r) : /* @__PURE__ */ $n(r) : r;
  }
}
class Eo extends wo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, s) {
    let o = t[n];
    const l = B(t) && Wi(n);
    if (!this._isShallow) {
      const m = /* @__PURE__ */ ut(o);
      if (!/* @__PURE__ */ Le(i) && !/* @__PURE__ */ ut(i) && (o = /* @__PURE__ */ J(o), i = /* @__PURE__ */ J(i)), !l && /* @__PURE__ */ Se(o) && !/* @__PURE__ */ Se(i))
        return m || (o.value = i), !0;
    }
    const r = l ? Number(n) < t.length : te(t, n), c = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Se(t) ? t : s
    );
    return t === /* @__PURE__ */ J(s) && c && (r ? et(i, o) && lt(t, "set", n, i) : lt(t, "add", n, i)), c;
  }
  deleteProperty(t, n) {
    const i = te(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && i && lt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!nt(n) || !So.has(n)) && ye(t, "has", n), i;
  }
  ownKeys(t) {
    return ye(
      t,
      "iterate",
      B(t) ? "length" : Ct
    ), Reflect.ownKeys(t);
  }
}
class Yr extends wo {
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
const Zr = /* @__PURE__ */ new Eo(), Qr = /* @__PURE__ */ new Yr(), qr = /* @__PURE__ */ new Eo(!0);
const Li = (e) => e, In = (e) => Reflect.getPrototypeOf(e);
function el(e, t, n) {
  return function(...i) {
    const s = this.__v_raw, o = /* @__PURE__ */ J(s), l = kt(o), r = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, m = s[e](...i), p = n ? Li : t ? zt : Fe;
    return !t && ye(
      o,
      "iterate",
      c ? Ni : Ct
    ), Be(
      // inheriting all iterator properties
      Object.create(m),
      {
        // iterator protocol
        next() {
          const { value: g, done: b } = m.next();
          return b ? { value: g, done: b } : {
            value: r ? [p(g[0]), p(g[1])] : p(g),
            done: b
          };
        }
      }
    );
  };
}
function Cn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function tl(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw, l = /* @__PURE__ */ J(o), r = /* @__PURE__ */ J(s);
      e || (et(s, r) && ye(l, "get", s), ye(l, "get", r));
      const { has: c } = In(l), m = t ? Li : e ? zt : Fe;
      if (c.call(l, s))
        return m(o.get(s));
      if (c.call(l, r))
        return m(o.get(r));
      o !== l && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && ye(/* @__PURE__ */ J(s), "iterate", Ct), s.size;
    },
    has(s) {
      const o = this.__v_raw, l = /* @__PURE__ */ J(o), r = /* @__PURE__ */ J(s);
      return e || (et(s, r) && ye(l, "has", s), ye(l, "has", r)), s === r ? o.has(s) : o.has(s) || o.has(r);
    },
    forEach(s, o) {
      const l = this, r = l.__v_raw, c = /* @__PURE__ */ J(r), m = t ? Li : e ? zt : Fe;
      return !e && ye(c, "iterate", Ct), r.forEach((p, g) => s.call(o, m(p), m(g), l));
    }
  };
  return Be(
    n,
    e ? {
      add: Cn("add"),
      set: Cn("set"),
      delete: Cn("delete"),
      clear: Cn("clear")
    } : {
      add(s) {
        const o = /* @__PURE__ */ J(this), l = In(o), r = /* @__PURE__ */ J(s), c = !t && !/* @__PURE__ */ Le(s) && !/* @__PURE__ */ ut(s) ? r : s;
        return l.has.call(o, c) || et(s, c) && l.has.call(o, s) || et(r, c) && l.has.call(o, r) || (o.add(c), lt(o, "add", c, c)), this;
      },
      set(s, o) {
        !t && !/* @__PURE__ */ Le(o) && !/* @__PURE__ */ ut(o) && (o = /* @__PURE__ */ J(o));
        const l = /* @__PURE__ */ J(this), { has: r, get: c } = In(l);
        let m = r.call(l, s);
        m || (s = /* @__PURE__ */ J(s), m = r.call(l, s));
        const p = c.call(l, s);
        return l.set(s, o), m ? et(o, p) && lt(l, "set", s, o) : lt(l, "add", s, o), this;
      },
      delete(s) {
        const o = /* @__PURE__ */ J(this), { has: l, get: r } = In(o);
        let c = l.call(o, s);
        c || (s = /* @__PURE__ */ J(s), c = l.call(o, s)), r && r.call(o, s);
        const m = o.delete(s);
        return c && lt(o, "delete", s, void 0), m;
      },
      clear() {
        const s = /* @__PURE__ */ J(this), o = s.size !== 0, l = s.clear();
        return o && lt(
          s,
          "clear",
          void 0,
          void 0
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = el(s, e, t);
  }), n;
}
function es(e, t) {
  const n = tl(e, t);
  return (i, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? i : Reflect.get(
    te(n, s) && s in i ? n : i,
    s,
    o
  );
}
const nl = {
  get: /* @__PURE__ */ es(!1, !1)
}, il = {
  get: /* @__PURE__ */ es(!1, !0)
}, sl = {
  get: /* @__PURE__ */ es(!0, !1)
};
const Io = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ new WeakMap(), ol = /* @__PURE__ */ new WeakMap();
function rl(e) {
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
function $n(e) {
  return /* @__PURE__ */ ut(e) ? e : ts(
    e,
    !1,
    Zr,
    nl,
    Io
  );
}
// @__NO_SIDE_EFFECTS__
function ll(e) {
  return ts(
    e,
    !1,
    qr,
    il,
    Co
  );
}
// @__NO_SIDE_EFFECTS__
function Gi(e) {
  return ts(
    e,
    !0,
    Qr,
    sl,
    Mo
  );
}
function ts(e, t, n, i, s) {
  if (!re(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const l = rl(Vr(e));
  if (l === 0)
    return e;
  const r = new Proxy(
    e,
    l === 2 ? i : n
  );
  return s.set(e, r), r;
}
// @__NO_SIDE_EFFECTS__
function Mt(e) {
  return /* @__PURE__ */ ut(e) ? /* @__PURE__ */ Mt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ns(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function J(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ J(t) : e;
}
function al(e) {
  return !te(e, "__v_skip") && Object.isExtensible(e) && uo(e, "__v_skip", !0), e;
}
const Fe = (e) => re(e) ? /* @__PURE__ */ $n(e) : e, zt = (e) => re(e) ? /* @__PURE__ */ Gi(e) : e;
// @__NO_SIDE_EFFECTS__
function Se(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return cl(e, !1);
}
function cl(e, t) {
  return /* @__PURE__ */ Se(e) ? e : new ul(e, t);
}
class ul {
  constructor(t, n) {
    this.dep = new qi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ J(t), this._value = n ? t : Fe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Le(t) || /* @__PURE__ */ ut(t);
    t = i ? t : /* @__PURE__ */ J(t), et(t, n) && (this._rawValue = t, this._value = i ? t : Fe(t), this.dep.trigger());
  }
}
function pt(e) {
  return /* @__PURE__ */ Se(e) ? e.value : e;
}
const fl = {
  get: (e, t, n) => t === "__v_raw" ? e : pt(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return /* @__PURE__ */ Se(s) && !/* @__PURE__ */ Se(n) ? (s.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Ao(e) {
  return /* @__PURE__ */ Mt(e) ? e : new Proxy(e, fl);
}
class dl {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = hn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ne !== this)
      return vo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return yo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function pl(e, t, n = !1) {
  let i, s;
  return Z(e) ? i = e : (i = e.get, s = e.set), new dl(i, s, n);
}
const Mn = {}, On = /* @__PURE__ */ new WeakMap();
let wt;
function ml(e, t = !1, n = wt) {
  if (n) {
    let i = On.get(n);
    i || On.set(n, i = []), i.push(e);
  }
}
function gl(e, t, n = oe) {
  const { immediate: i, deep: s, once: o, scheduler: l, augmentJob: r, call: c } = n, m = (G) => s ? G : /* @__PURE__ */ Le(G) || s === !1 || s === 0 ? at(G, 1) : at(G);
  let p, g, b, y, O = !1, w = !1;
  if (/* @__PURE__ */ Se(e) ? (g = () => e.value, O = /* @__PURE__ */ Le(e)) : /* @__PURE__ */ Mt(e) ? (g = () => m(e), O = !0) : B(e) ? (w = !0, O = e.some((G) => /* @__PURE__ */ Mt(G) || /* @__PURE__ */ Le(G)), g = () => e.map((G) => {
    if (/* @__PURE__ */ Se(G))
      return G.value;
    if (/* @__PURE__ */ Mt(G))
      return m(G);
    if (Z(G))
      return c ? c(G, 2) : G();
  })) : Z(e) ? t ? g = c ? () => c(e, 2) : e : g = () => {
    if (b) {
      Pt();
      try {
        b();
      } finally {
        Rt();
      }
    }
    const G = wt;
    wt = p;
    try {
      return c ? c(e, 3, [y]) : e(y);
    } finally {
      wt = G;
    }
  } : g = It, t && s) {
    const G = g, ce = s === !0 ? 1 / 0 : s;
    g = () => at(G(), ce);
  }
  const M = Br(), A = () => {
    p.stop(), M && M.active && oo(M.effects, p);
  };
  if (o && t) {
    const G = t;
    t = (...ce) => {
      const Ce = G(...ce);
      return A(), Ce;
    };
  }
  let j = w ? new Array(e.length).fill(Mn) : Mn;
  const W = (G) => {
    if (!(!(p.flags & 1) || !p.dirty && !G))
      if (t) {
        const ce = p.run();
        if (G || s || O || (w ? ce.some((Ce, me) => et(Ce, j[me])) : et(ce, j))) {
          b && b();
          const Ce = wt;
          wt = p;
          try {
            const me = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              j === Mn ? void 0 : w && j[0] === Mn ? [] : j,
              y
            ];
            j = ce, c ? c(t, 3, me) : (
              // @ts-expect-error
              t(...me)
            );
          } finally {
            wt = Ce;
          }
        }
      } else
        p.run();
  };
  return r && r(W), p = new go(g), p.scheduler = l ? () => l(W, !1) : W, y = (G) => ml(G, !1, p), b = p.onStop = () => {
    const G = On.get(p);
    if (G) {
      if (c)
        c(G, 4);
      else
        for (const ce of G) ce();
      On.delete(p);
    }
  }, t ? i ? W(!0) : j = p.run() : l ? l(W.bind(null, !0), !0) : p.run(), A.pause = p.pause.bind(p), A.resume = p.resume.bind(p), A.stop = A, A;
}
function at(e, t = 1 / 0, n) {
  if (t <= 0 || !re(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Se(e))
    at(e.value, t, n);
  else if (B(e))
    for (let i = 0; i < e.length; i++)
      at(e[i], t, n);
  else if (Yt(e) || kt(e))
    e.forEach((i) => {
      at(i, t, n);
    });
  else if (ao(e)) {
    for (const i in e)
      at(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && at(e[i], t, n);
  }
  return e;
}
function En(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (s) {
    ti(s, t, n);
  }
}
function ft(e, t, n, i) {
  if (Z(e)) {
    const s = En(e, t, n, i);
    return s && ro(s) && s.catch((o) => {
      ti(o, t, n);
    }), s;
  }
  if (B(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(ft(e[o], t, n, i));
    return s;
  }
}
function ti(e, t, n, i = !0) {
  const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: l } = t && t.appContext.config || oe;
  if (t) {
    let r = t.parent;
    const c = t.proxy, m = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const p = r.ec;
      if (p) {
        for (let g = 0; g < p.length; g++)
          if (p[g](e, c, m) === !1)
            return;
      }
      r = r.parent;
    }
    if (o) {
      Pt(), En(o, null, 10, [
        e,
        c,
        m
      ]), Rt();
      return;
    }
  }
  hl(e, n, s, i, l);
}
function hl(e, t, n, i = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const be = [];
let Ze = -1;
const Ut = [];
let mt = null, Ot = 0;
const Po = /* @__PURE__ */ Promise.resolve();
let Dn = null;
function Ro(e) {
  const t = Dn || Po;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function vl(e) {
  let t = Ze + 1, n = be.length;
  for (; t < n; ) {
    const i = t + n >>> 1, s = be[i], o = _n(s);
    o < e || o === e && s.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function is(e) {
  if (!(e.flags & 1)) {
    const t = _n(e), n = be[be.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= _n(n) ? be.push(e) : be.splice(vl(t), 0, e), e.flags |= 1, Vo();
  }
}
function Vo() {
  Dn || (Dn = Po.then(Lo));
}
function _l(e) {
  if (!B(e))
    mt && e.id === -1 ? mt.splice(Ot + 1, 0, e) : e.flags & 1 || (Ut.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ut.push(e[t]);
  Vo();
}
function vs(e, t, n = Ze + 1) {
  for (; n < be.length; n++) {
    const i = be[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      be.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function No(e) {
  if (Ut.length) {
    const t = [...new Set(Ut)].sort(
      (n, i) => _n(n) - _n(i)
    );
    if (Ut.length = 0, mt) {
      for (let n = 0; n < t.length; n++)
        mt.push(t[n]);
      return;
    }
    for (mt = t, Ot = 0; Ot < mt.length; Ot++) {
      const n = mt[Ot];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    mt = null, Ot = 0;
  }
}
const _n = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lo(e) {
  try {
    for (Ze = 0; Ze < be.length; Ze++) {
      const t = be[Ze];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), En(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ze < be.length; Ze++) {
      const t = be[Ze];
      t && (t.flags &= -2);
    }
    Ze = -1, be.length = 0, No(), Dn = null, (be.length || Ut.length) && Lo();
  }
}
let Ne = null, Go = null;
function kn(e) {
  const t = Ne;
  return Ne = e, Go = e && e.type.__scopeId || null, t;
}
function xl(e, t = Ne, n) {
  if (!t || e._n)
    return e;
  const i = (...s) => {
    i._d && ws(-1);
    const o = kn(t), l = At.length;
    let r;
    try {
      r = e(...s);
    } finally {
      for (let c = At.length; c > l; c--) Zo();
      kn(o), i._d && ws(1);
    }
    return r;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function U(e, t) {
  if (Ne === null)
    return e;
  const n = oi(Ne), i = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, l, r, c = oe] = t[s];
    o && (Z(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && at(l), i.push({
      dir: o,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: r,
      modifiers: c
    }));
  }
  return e;
}
function Tt(e, t, n, i) {
  const s = e.dirs, o = t && t.dirs;
  for (let l = 0; l < s.length; l++) {
    const r = s[l];
    o && (r.oldValue = o[l].value);
    let c = r.dir[i];
    c && (Pt(), ft(c, n, 8, [
      e.el,
      r,
      e,
      t
    ]), Rt());
  }
}
function yl(e, t, n = !1) {
  const i = sa();
  if (i || jt) {
    let s = jt ? jt._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Z(t) ? t.call(i && i.proxy) : t;
  }
}
const bl = /* @__PURE__ */ Symbol.for("v-scx"), Tl = () => yl(bl);
function Sl(e, t, n) {
  return wl(e, t, n);
}
function wl(e, t, n = oe) {
  const { immediate: i, deep: s, flush: o, once: l } = n, r = Be({}, n), c = t && i || !t && o !== "post";
  let m;
  if (Bn) {
    if (o === "sync") {
      const y = Tl();
      m = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!c) {
      const y = () => {
      };
      return y.stop = It, y.resume = It, y.pause = It, y;
    }
  }
  const p = Jt;
  r.call = (y, O, w) => ft(y, p, O, w);
  let g = !1;
  o === "post" ? r.scheduler = (y) => {
    Ee(y, p && p.suspense);
  } : o !== "sync" && (g = !0, r.scheduler = (y, O) => {
    O ? y() : is(y);
  }), r.augmentJob = (y) => {
    t && (y.flags |= 4), g && (y.flags |= 2, p && (y.id = p.uid, y.i = p));
  };
  const b = gl(e, t, r);
  return Bn && (m ? m.push(b) : c && b()), b;
}
const El = /* @__PURE__ */ Symbol("_vte"), ni = (e) => e.__isTeleport, pi = /* @__PURE__ */ Symbol("_leaveCb");
function Il(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== dt) {
        t = n;
        break;
      }
  }
  return t;
}
function $o(e) {
  if (!Oo(e))
    return ni(e.type) && e.children ? Il(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Z(n.default))
      return n.default();
  }
}
function ss(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    ss(
      ni(n.type) && $o(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Cl(e, t) {
  return Z(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Be({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ml(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function _s(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Un = /* @__PURE__ */ new WeakMap();
function dn(e, t, n, i, s = !1) {
  if (B(e)) {
    e.forEach(
      (w, M) => dn(
        w,
        t && (B(t) ? t[M] : t),
        n,
        i,
        s
      )
    );
    return;
  }
  if (pn(i) && !s) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && dn(e, t, n, i.component.subTree);
    return;
  }
  const o = i.shapeFlag & 4 ? oi(i.component) : i.el, l = s ? null : o, { i: r, r: c } = e, m = t && t.r, p = r.refs === oe ? r.refs = {} : r.refs, g = r.setupState, b = /* @__PURE__ */ J(g), y = g === oe ? so : (w) => _s(p, w) ? !1 : te(b, w), O = (w, M) => !(M && _s(p, M));
  if (m != null && m !== c) {
    if (xs(t), pe(m))
      p[m] = null, y(m) && (g[m] = null);
    else if (/* @__PURE__ */ Se(m)) {
      const w = t;
      O(m, w.k) && (m.value = null), w.k && (p[w.k] = null);
    }
  }
  if (Z(c))
    En(c, r, 12, [l, p]);
  else {
    const w = pe(c), M = /* @__PURE__ */ Se(c);
    if (w || M) {
      const A = () => {
        if (e.f) {
          const j = w ? y(c) ? g[c] : p[c] : O() || !e.k ? c.value : p[e.k];
          if (s)
            B(j) && oo(j, o);
          else if (B(j))
            j.includes(o) || j.push(o);
          else if (w)
            p[c] = [o], y(c) && (g[c] = p[c]);
          else {
            const W = [o];
            O(c, e.k) && (c.value = W), e.k && (p[e.k] = W);
          }
        } else w ? (p[c] = l, y(c) && (g[c] = l)) : M && (O(c, e.k) && (c.value = l), e.k && (p[e.k] = l));
      };
      if (l) {
        const j = () => {
          A(), Un.delete(e);
        };
        j.id = -1, Un.set(e, j), Ee(j, n);
      } else
        xs(e), A();
    }
  }
}
function xs(e) {
  const t = Un.get(e);
  t && (t.flags |= 8, Un.delete(e));
}
Qn().requestIdleCallback;
Qn().cancelIdleCallback;
const pn = (e) => !!e.type.__asyncLoader, Oo = (e) => e.type.__isKeepAlive, Al = /* @__PURE__ */ Symbol.for("v-ndc");
function fe(e, t, n, i) {
  let s;
  const o = n, l = B(e);
  if (l || pe(e)) {
    const r = l && /* @__PURE__ */ Mt(e);
    let c = !1, m = !1;
    r && (c = !/* @__PURE__ */ Le(e), m = /* @__PURE__ */ ut(e), e = ei(e)), s = new Array(e.length);
    for (let p = 0, g = e.length; p < g; p++)
      s[p] = t(
        c ? m ? zt(Fe(e[p])) : Fe(e[p]) : e[p],
        p,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let r = 0; r < e; r++)
      s[r] = t(r + 1, r, void 0, o);
  } else if (re(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (r, c) => t(r, c, void 0, o)
      );
    else {
      const r = Object.keys(e);
      s = new Array(r.length);
      for (let c = 0, m = r.length; c < m; c++) {
        const p = r[c];
        s[c] = t(e[p], p, c, o);
      }
    }
  else
    s = [];
  return s;
}
const $i = (e) => e ? nr(e) ? oi(e) : $i(e.parent) : null, mn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Be(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => $i(e.parent),
    $root: (e) => $i(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      is(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ro.bind(e.proxy)),
    $watch: (e) => It
  })
), mi = (e, t) => e !== oe && !e.__isScriptSetup && te(e, t), Pl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: s, props: o, accessCache: l, type: r, appContext: c } = e;
    if (t[0] !== "$") {
      const b = l[t];
      if (b !== void 0)
        switch (b) {
          case 1:
            return i[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (mi(i, t))
          return l[t] = 1, i[t];
        if (te(o, t))
          return l[t] = 3, o[t];
        if (n !== oe && te(n, t))
          return l[t] = 4, n[t];
        l[t] = 0;
      }
    }
    const m = mn[t];
    let p, g;
    if (m)
      return t === "$attrs" && ye(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (p = r.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== oe && te(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      g = c.config.globalProperties, te(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: s, ctx: o } = e;
    return mi(s, t) ? (s[t] = n, !0) : te(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: s, props: o, type: l }
  }, r) {
    let c;
    return !!(n[r] || mi(t, r) || te(o, r) || te(i, r) || te(mn, r) || te(s.config.globalProperties, r) || (c = l.__cssModules) && c[r]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : te(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Do() {
  return {
    app: null,
    config: {
      isNativeTag: so,
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
let Rl = 0;
function Vl(e, t) {
  return function(i, s = null) {
    Z(i) || (i = Be({}, i)), s != null && !re(s) && (s = null);
    const o = Do(), l = /* @__PURE__ */ new WeakSet(), r = [];
    let c = !1;
    const m = o.app = {
      _uid: Rl++,
      _component: i,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: ua,
      get config() {
        return o.config;
      },
      set config(p) {
      },
      use(p, ...g) {
        return l.has(p) || (p && Z(p.install) ? (l.add(p), p.install(m, ...g)) : Z(p) && (l.add(p), p(m, ...g))), m;
      },
      mixin(p) {
        return m;
      },
      component(p, g) {
        return g ? (o.components[p] = g, m) : o.components[p];
      },
      directive(p, g) {
        return g ? (o.directives[p] = g, m) : o.directives[p];
      },
      mount(p, g, b) {
        if (!c) {
          const y = m._ceVNode || ct(i, s);
          return y.appContext = o, b === !0 ? b = "svg" : b === !1 && (b = void 0), e(y, p, b), c = !0, m._container = p, p.__vue_app__ = m, oi(y.component);
        }
      },
      onUnmount(p) {
        r.push(p);
      },
      unmount() {
        c && (ft(
          r,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(p, g) {
        return o.provides[p] = g, m;
      },
      runWithContext(p) {
        const g = jt;
        jt = m;
        try {
          return p();
        } finally {
          jt = g;
        }
      }
    };
    return m;
  };
}
let jt = null;
const Nl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ue(t)}Modifiers`] || e[`${Vt(t)}Modifiers`];
function Ll(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || oe;
  let s = n;
  const o = t.startsWith("update:"), l = o && Nl(i, t.slice(7));
  l && (l.trim && (s = n.map((p) => pe(p) ? p.trim() : p)), l.number && (s = n.map(Zn)));
  let r, c = i[r = ai(t)] || // also try camelCase event handler (#2249)
  i[r = ai(Ue(t))];
  !c && o && (c = i[r = ai(Vt(t))]), c && ft(
    c,
    e,
    6,
    s
  );
  const m = i[r + "Once"];
  if (m) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[r])
      return;
    e.emitted[r] = !0, ft(
      m,
      e,
      6,
      s
    );
  }
}
function Gl(e, t, n = !1) {
  const i = t.emitsCache, s = i.get(e);
  if (s !== void 0)
    return s;
  const o = e.emits;
  let l = {};
  return o ? (B(o) ? o.forEach((r) => l[r] = null) : Be(l, o), re(e) && i.set(e, l), l) : (re(e) && i.set(e, null), null);
}
function ii(e, t) {
  return !e || !Jn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), te(e, t[0].toLowerCase() + t.slice(1)) || te(e, Vt(t)) || te(e, t));
}
function ys(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: s,
    propsOptions: [o],
    slots: l,
    attrs: r,
    emit: c,
    render: m,
    renderCache: p,
    props: g,
    data: b,
    setupState: y,
    ctx: O,
    inheritAttrs: w
  } = e, M = kn(e);
  let A, j;
  try {
    if (n.shapeFlag & 4) {
      const G = s || i, ce = G;
      A = qe(
        m.call(
          ce,
          G,
          p,
          g,
          y,
          b,
          O
        )
      ), j = r;
    } else {
      const G = t;
      A = qe(
        G.length > 1 ? G(
          g,
          { attrs: r, slots: l, emit: c }
        ) : G(
          g,
          null
        )
      ), j = t.props ? r : $l(r);
    }
  } catch (G) {
    At.length = 0, ti(G, e, 1), A = ct(dt);
  }
  let W = A;
  if (j && w !== !1) {
    const G = Object.keys(j), { shapeFlag: ce } = W;
    G.length && ce & 7 && (o && G.some(Xn) && (j = Ol(
      j,
      o
    )), W = Wt(W, j, !1, !0));
  }
  if (n.dirs && (W = Wt(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const G = ni(W.type) && $o(W) || W;
    ss(G, n.transition);
  }
  return A = W, kn(M), A;
}
const $l = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Jn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ol = (e, t) => {
  const n = {};
  for (const i in e)
    (!Xn(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Dl(e, t, n) {
  const { props: i, children: s, component: o } = e, { props: l, children: r, patchFlag: c } = t, m = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return i ? bs(i, l, m) : !!l;
    if (c & 8) {
      const p = t.dynamicProps;
      for (let g = 0; g < p.length; g++) {
        const b = p[g];
        if (ko(l, i, b) && !ii(m, b))
          return !0;
      }
    }
  } else
    return (s || r) && (!r || !r.$stable) ? !0 : i === l ? !1 : i ? l ? bs(i, l, m) : !0 : !!l;
  return !1;
}
function bs(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (ko(t, e, o) && !ii(n, o))
      return !0;
  }
  return !1;
}
function ko(e, t, n) {
  const i = e[n], s = t[n];
  return n === "style" && re(i) && re(s) ? !Zt(i, s) : i !== s;
}
function kl({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = i, e = s), s === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Uo = {}, jo = () => Object.create(Uo), Fo = (e) => Object.getPrototypeOf(e) === Uo;
function Ul(e, t, n, i = !1) {
  const s = {}, o = jo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Bo(e, t, s, o);
  for (const l in e.propsOptions[0])
    l in s || (s[l] = void 0);
  n ? e.props = i ? s : /* @__PURE__ */ ll(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function jl(e, t, n, i) {
  const {
    props: s,
    attrs: o,
    vnode: { patchFlag: l }
  } = e, r = /* @__PURE__ */ J(s), [c] = e.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const p = e.vnode.dynamicProps;
      for (let g = 0; g < p.length; g++) {
        let b = p[g];
        if (ii(e.emitsOptions, b))
          continue;
        const y = t[b];
        if (c)
          if (te(o, b))
            y !== o[b] && (o[b] = y, m = !0);
          else {
            const O = Ue(b);
            s[O] = Oi(
              c,
              r,
              O,
              y,
              e,
              !1
            );
          }
        else
          y !== o[b] && (o[b] = y, m = !0);
      }
    }
  } else {
    Bo(e, t, s, o) && (m = !0);
    let p;
    for (const g in r)
      (!t || // for camelCase
      !te(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Vt(g)) === g || !te(t, p))) && (c ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[p] !== void 0) && (s[g] = Oi(
        c,
        r,
        g,
        void 0,
        e,
        !0
      )) : delete s[g]);
    if (o !== r)
      for (const g in o)
        (!t || !te(t, g)) && (delete o[g], m = !0);
  }
  m && lt(e.attrs, "set", "");
}
function Bo(e, t, n, i) {
  const [s, o] = e.propsOptions;
  let l = !1, r;
  if (t)
    for (let c in t) {
      if (cn(c))
        continue;
      const m = t[c];
      let p;
      s && te(s, p = Ue(c)) ? !o || !o.includes(p) ? n[p] = m : (r || (r = {}))[p] = m : ii(e.emitsOptions, c) || (!(c in i) || m !== i[c]) && (i[c] = m, l = !0);
    }
  if (o) {
    const c = /* @__PURE__ */ J(n), m = r || oe;
    for (let p = 0; p < o.length; p++) {
      const g = o[p];
      n[g] = Oi(
        s,
        c,
        g,
        m[g],
        e,
        !te(m, g)
      );
    }
  }
  return l;
}
function Oi(e, t, n, i, s, o) {
  const l = e[n];
  if (l != null) {
    const r = te(l, "default");
    if (r && i === void 0) {
      const c = l.default;
      if (l.type !== Function && !l.skipFactory && Z(c)) {
        const { propsDefaults: m } = s;
        if (n in m)
          i = m[n];
        else {
          const p = tr(s);
          i = m[n] = c.call(
            null,
            t
          ), p();
        }
      } else
        i = c;
      s.ce && s.ce._setProp(n, i);
    }
    l[
      0
      /* shouldCast */
    ] && (o && !r ? i = !1 : l[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Vt(n)) && (i = !0));
  }
  return i;
}
function Fl(e, t, n = !1) {
  const i = t.propsCache, s = i.get(e);
  if (s)
    return s;
  const o = e.props, l = {}, r = [];
  if (!o)
    return re(e) && i.set(e, Dt), Dt;
  if (B(o))
    for (let m = 0; m < o.length; m++) {
      const p = Ue(o[m]);
      Ts(p) && (l[p] = oe);
    }
  else if (o)
    for (const m in o) {
      const p = Ue(m);
      if (Ts(p)) {
        const g = o[m], b = l[p] = B(g) || Z(g) ? { type: g } : Be({}, g), y = b.type;
        let O = !1, w = !0;
        if (B(y))
          for (let M = 0; M < y.length; ++M) {
            const A = y[M], j = Z(A) && A.name;
            if (j === "Boolean") {
              O = !0;
              break;
            } else j === "String" && (w = !1);
          }
        else
          O = Z(y) && y.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = O, b[
          1
          /* shouldCastTrue */
        ] = w, (O || te(b, "default")) && r.push(p);
      }
    }
  const c = [l, r];
  return re(e) && i.set(e, c), c;
}
function Ts(e) {
  return e[0] !== "$" && !cn(e);
}
const os = (e) => e === "_" || e === "_ctx" || e === "$stable", rs = (e) => B(e) ? e.map(qe) : [qe(e)], Bl = (e, t, n) => {
  if (t._n)
    return t;
  const i = xl((...s) => rs(t(...s)), n);
  return i._c = !1, i;
}, Ho = (e, t, n) => {
  const i = e._ctx;
  for (const s in e) {
    if (os(s)) continue;
    const o = e[s];
    if (Z(o))
      t[s] = Bl(s, o, i);
    else if (o != null) {
      const l = rs(o);
      t[s] = () => l;
    }
  }
}, Ko = (e, t) => {
  const n = rs(t);
  e.slots.default = () => n;
}, zo = (e, t, n) => {
  for (const i in t)
    (n || !os(i)) && (e[i] = t[i]);
}, Hl = (e, t, n) => {
  const i = e.slots = jo();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (zo(i, t, n), n && uo(i, "_", s, !0)) : Ho(t, i);
  } else t && Ko(e, t);
}, Kl = (e, t, n) => {
  const { vnode: i, slots: s } = e;
  let o = !0, l = oe;
  if (i.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? o = !1 : zo(s, t, n) : (o = !t.$stable, Ho(t, s)), l = t;
  } else t && (Ko(e, t), l = { default: 1 });
  if (o)
    for (const r in s)
      !os(r) && l[r] == null && delete s[r];
}, Ee = Yl;
function zl(e) {
  return Wl(e);
}
function Wl(e, t) {
  const n = Qn();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: s,
    patchProp: o,
    createElement: l,
    createText: r,
    createComment: c,
    setText: m,
    setElementText: p,
    parentNode: g,
    nextSibling: b,
    setScopeId: y = It,
    insertStaticContent: O
  } = e, w = (d, u, a, f = null, _ = null, v = null, E = void 0, S = null, T = !!u.dynamicChildren) => {
    if (d === u)
      return;
    d && !on(d, u) && (f = ge(d), H(d, _, v, !0), d = null), u.patchFlag === -2 && (T = !1, u.dynamicChildren = null);
    const { type: x, ref: $, shapeFlag: C } = u;
    switch (x) {
      case si:
        M(d, u, a, f);
        break;
      case dt:
        A(d, u, a, f);
        break;
      case hi:
        d == null && j(u, a, f, E);
        break;
      case K:
        $e(
          d,
          u,
          a,
          f,
          _,
          v,
          E,
          S,
          T
        );
        break;
      default:
        C & 1 ? ce(
          d,
          u,
          a,
          f,
          _,
          v,
          E,
          S,
          T
        ) : C & 6 ? Lt(
          d,
          u,
          a,
          f,
          _,
          v,
          E,
          S,
          T
        ) : (C & 64 || C & 128) && x.process(
          d,
          u,
          a,
          f,
          _,
          v,
          E,
          S,
          T,
          Me
        );
    }
    $ != null && _ ? dn($, d && d.ref, v, u || d, !u) : $ == null && d && d.ref != null && dn(d.ref, null, v, d, !0);
  }, M = (d, u, a, f) => {
    if (d == null)
      i(
        u.el = r(u.children),
        a,
        f
      );
    else {
      const _ = u.el = d.el;
      u.children !== d.children && m(_, u.children);
    }
  }, A = (d, u, a, f) => {
    d == null ? i(
      u.el = c(u.children || ""),
      a,
      f
    ) : u.el = d.el;
  }, j = (d, u, a, f) => {
    [d.el, d.anchor] = O(
      d.children,
      u,
      a,
      f,
      d.el,
      d.anchor
    );
  }, W = ({ el: d, anchor: u }, a, f) => {
    let _;
    for (; d && d !== u; )
      _ = b(d), i(d, a, f), d = _;
    i(u, a, f);
  }, G = ({ el: d, anchor: u }) => {
    let a;
    for (; d && d !== u; )
      a = b(d), s(d), d = a;
    s(u);
  }, ce = (d, u, a, f, _, v, E, S, T) => {
    if (u.type === "svg" ? E = "svg" : u.type === "math" && (E = "mathml"), d == null)
      Ce(
        u,
        a,
        f,
        _,
        v,
        E,
        S,
        T
      );
    else {
      const x = d.el && d.el._isVueCE ? d.el : null;
      try {
        x && x._beginPatch(), en(
          d,
          u,
          _,
          v,
          E,
          S,
          T
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, Ce = (d, u, a, f, _, v, E, S) => {
    let T, x;
    const { props: $, shapeFlag: C, transition: R, dirs: D } = d;
    if (T = d.el = l(
      d.type,
      v,
      $ && $.is,
      $
    ), C & 8 ? p(T, d.children) : C & 16 && Ge(
      d.children,
      T,
      null,
      f,
      _,
      gi(d, v),
      E,
      S
    ), D && Tt(d, null, f, "created"), me(T, d, d.scopeId, E, f), $) {
      for (const Q in $)
        Q !== "value" && !cn(Q) && o(T, Q, null, $[Q], v, f);
      "value" in $ && o(T, "value", null, $.value, v), (x = $.onVnodeBeforeMount) && Xe(x, f, d);
    }
    D && Tt(d, null, f, "beforeMount");
    const z = Jl(_, R);
    z && R.beforeEnter(T), i(T, u, a), ((x = $ && $.onVnodeMounted) || z || D) && Ee(() => {
      x && Xe(x, f, d), z && R.enter(T), D && Tt(d, null, f, "mounted");
    }, _);
  }, me = (d, u, a, f, _) => {
    if (a && y(d, a), f)
      for (let v = 0; v < f.length; v++)
        y(d, f[v]);
    if (_) {
      let v = _.subTree;
      if (u === v || Yo(v.type) && (v.ssContent === u || v.ssFallback === u)) {
        const E = _.vnode;
        me(
          d,
          E,
          E.scopeId,
          E.slotScopeIds,
          _.parent
        );
      }
    }
  }, Ge = (d, u, a, f, _, v, E, S, T = 0) => {
    for (let x = T; x < d.length; x++) {
      const $ = d[x] = S ? rt(d[x]) : qe(d[x]);
      w(
        null,
        $,
        u,
        a,
        f,
        _,
        v,
        E,
        S
      );
    }
  }, en = (d, u, a, f, _, v, E) => {
    const S = u.el = d.el;
    let { patchFlag: T, dynamicChildren: x, dirs: $ } = u;
    T |= d.patchFlag & 16;
    const C = d.props || oe, R = u.props || oe;
    let D;
    if (a && St(a, !1), (D = R.onVnodeBeforeUpdate) && Xe(D, a, u, d), $ && Tt(u, d, a, "beforeUpdate"), a && St(a, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    x && (!d.dynamicChildren || d.dynamicChildren.length !== x.length) && (T = 0, E = !1, x = null), (C.innerHTML && R.innerHTML == null || C.textContent && R.textContent == null) && p(S, ""), x ? se(
      d.dynamicChildren,
      x,
      S,
      a,
      f,
      gi(u, _),
      v
    ) : E || Oe(
      d,
      u,
      S,
      null,
      a,
      f,
      gi(u, _),
      v,
      !1
    ), T > 0) {
      if (T & 16)
        He(S, C, R, a, _);
      else if (T & 2 && C.class !== R.class && o(S, "class", null, R.class, _), T & 4 && o(S, "style", C.style, R.style, _), T & 8) {
        const z = u.dynamicProps;
        for (let Q = 0; Q < z.length; Q++) {
          const Y = z[Q], ue = C[Y], he = R[Y];
          (he !== ue || Y === "value") && o(S, Y, ue, he, _, a);
        }
      }
      T & 1 && d.children !== u.children && p(S, u.children);
    } else !E && x == null && He(S, C, R, a, _);
    ((D = R.onVnodeUpdated) || $) && Ee(() => {
      D && Xe(D, a, u, d), $ && Tt(u, d, a, "updated");
    }, f);
  }, se = (d, u, a, f, _, v, E) => {
    for (let S = 0; S < u.length; S++) {
      const T = d[S], x = u[S], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === K || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !on(T, x) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 198) ? g(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          a
        )
      );
      w(
        T,
        x,
        $,
        null,
        f,
        _,
        v,
        E,
        !0
      );
    }
  }, He = (d, u, a, f, _) => {
    if (u !== a) {
      if (u !== oe)
        for (const v in u)
          !cn(v) && !(v in a) && o(
            d,
            v,
            u[v],
            null,
            _,
            f
          );
      for (const v in a) {
        if (cn(v)) continue;
        const E = a[v], S = u[v];
        E !== S && v !== "value" && o(d, v, S, E, _, f);
      }
      "value" in a && o(d, "value", u.value, a.value, _);
    }
  }, $e = (d, u, a, f, _, v, E, S, T) => {
    const x = u.el = d ? d.el : r(""), $ = u.anchor = d ? d.anchor : r("");
    let { patchFlag: C, dynamicChildren: R, slotScopeIds: D } = u;
    D && (S = S ? S.concat(D) : D), d == null ? (i(x, a, f), i($, a, f), Ge(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      a,
      $,
      _,
      v,
      E,
      S,
      T
    )) : C > 0 && C & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === R.length ? (se(
      d.dynamicChildren,
      R,
      a,
      _,
      v,
      E,
      S
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || _ && u === _.subTree) && Wo(
      d,
      u,
      !0
      /* shallow */
    )) : Oe(
      d,
      u,
      a,
      $,
      _,
      v,
      E,
      S,
      T
    );
  }, Lt = (d, u, a, f, _, v, E, S, T) => {
    u.slotScopeIds = S, d == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      a,
      f,
      E,
      T
    ) : yt(
      u,
      a,
      f,
      _,
      v,
      E,
      T
    ) : tn(d, u, T);
  }, yt = (d, u, a, f, _, v, E) => {
    const S = d.component = ia(
      d,
      f,
      _
    );
    if (Oo(d) && (S.ctx.renderer = Me), oa(S, !1, E), S.asyncDep) {
      if (_ && _.registerDep(S, bt, E), !d.el) {
        const T = S.subTree = ct(dt);
        A(null, T, u, a), d.placeholder = T.el;
      }
    } else
      bt(
        S,
        d,
        u,
        a,
        _,
        v,
        E
      );
  }, tn = (d, u, a) => {
    const f = u.component = d.component;
    if (Dl(d, u, a))
      if (f.asyncDep && !f.asyncResolved) {
        Re(f, u, a);
        return;
      } else
        f.next = u, f.update();
    else
      u.el = d.el, f.vnode = u;
  }, bt = (d, u, a, f, _, v, E) => {
    const S = () => {
      if (d.isMounted) {
        let { next: C, bu: R, u: D, parent: z, vnode: Q } = d;
        {
          const ze = Jo(d);
          if (ze) {
            C && (C.el = Q.el, Re(d, C, E)), ze.asyncDep.then(() => {
              Ee(() => {
                d.isUnmounted || x();
              }, _);
            });
            return;
          }
        }
        let Y = C, ue;
        St(d, !1), C ? (C.el = Q.el, Re(d, C, E)) : C = Q, R && Rn(R), (ue = C.props && C.props.onVnodeBeforeUpdate) && Xe(ue, z, C, Q), St(d, !0);
        const he = ys(d), Ke = d.subTree;
        d.subTree = he, w(
          Ke,
          he,
          // parent may have changed if it's in a teleport
          g(Ke.el),
          // anchor may have changed if it's in a fragment
          ge(Ke),
          d,
          _,
          v
        ), C.el = he.el, Y === null && kl(d, he.el), D && Ee(D, _), (ue = C.props && C.props.onVnodeUpdated) && Ee(
          () => Xe(ue, z, C, Q),
          _
        );
      } else {
        let C;
        const { el: R, props: D } = u, { bm: z, m: Q, parent: Y, root: ue, type: he } = d, Ke = pn(u);
        St(d, !1), z && Rn(z), !Ke && (C = D && D.onVnodeBeforeMount) && Xe(C, Y, u), St(d, !0);
        {
          ue.ce && ue.ce._hasShadowRoot() && ue.ce._injectChildStyle(
            he,
            d.parent ? d.parent.type : void 0
          );
          const ze = d.subTree = ys(d);
          w(
            null,
            ze,
            a,
            f,
            d,
            _,
            v
          ), u.el = ze.el;
        }
        if (Q && Ee(Q, _), !Ke && (C = D && D.onVnodeMounted)) {
          const ze = u;
          Ee(
            () => Xe(C, Y, ze),
            _
          );
        }
        (u.shapeFlag & 256 || Y && pn(Y.vnode) && Y.vnode.shapeFlag & 256) && d.a && Ee(d.a, _), d.isMounted = !0, u = a = f = null;
      }
    };
    d.scope.on();
    const T = d.effect = new go(S);
    d.scope.off();
    const x = d.update = T.run.bind(T), $ = d.job = T.runIfDirty.bind(T);
    $.i = d, $.id = d.uid, T.scheduler = () => is($), St(d, !0), x();
  }, Re = (d, u, a) => {
    u.component = d;
    const f = d.vnode.props;
    d.vnode = u, d.next = null, jl(d, u.props, f, a), Kl(d, u.children, a), Pt(), vs(d), Rt();
  }, Oe = (d, u, a, f, _, v, E, S, T = !1) => {
    const x = d && d.children, $ = d ? d.shapeFlag : 0, C = u.children, { patchFlag: R, shapeFlag: D } = u;
    if (R > 0) {
      if (R & 128) {
        P(
          x,
          C,
          a,
          f,
          _,
          v,
          E,
          S,
          T
        );
        return;
      } else if (R & 256) {
        I(
          x,
          C,
          a,
          f,
          _,
          v,
          E,
          S,
          T
        );
        return;
      }
    }
    D & 8 ? ($ & 16 && ie(x, _, v), C !== x && p(a, C)) : $ & 16 ? D & 16 ? P(
      x,
      C,
      a,
      f,
      _,
      v,
      E,
      S,
      T
    ) : ie(x, _, v, !0) : ($ & 8 && p(a, ""), D & 16 && Ge(
      C,
      a,
      f,
      _,
      v,
      E,
      S,
      T
    ));
  }, I = (d, u, a, f, _, v, E, S, T) => {
    d = d || Dt, u = u || Dt;
    const x = d.length, $ = u.length, C = Math.min(x, $);
    let R;
    for (R = 0; R < C; R++) {
      const D = u[R] = T ? rt(u[R]) : qe(u[R]);
      w(
        d[R],
        D,
        a,
        null,
        _,
        v,
        E,
        S,
        T
      );
    }
    x > $ ? ie(
      d,
      _,
      v,
      !0,
      !1,
      C
    ) : Ge(
      u,
      a,
      f,
      _,
      v,
      E,
      S,
      T,
      C
    );
  }, P = (d, u, a, f, _, v, E, S, T) => {
    let x = 0;
    const $ = u.length;
    let C = d.length - 1, R = $ - 1;
    for (; x <= C && x <= R; ) {
      const D = d[x], z = u[x] = T ? rt(u[x]) : qe(u[x]);
      if (on(D, z))
        w(
          D,
          z,
          a,
          null,
          _,
          v,
          E,
          S,
          T
        );
      else
        break;
      x++;
    }
    for (; x <= C && x <= R; ) {
      const D = d[C], z = u[R] = T ? rt(u[R]) : qe(u[R]);
      if (on(D, z))
        w(
          D,
          z,
          a,
          null,
          _,
          v,
          E,
          S,
          T
        );
      else
        break;
      C--, R--;
    }
    if (x > C) {
      if (x <= R) {
        const D = R + 1, z = D < $ ? u[D].el : f;
        for (; x <= R; )
          w(
            null,
            u[x] = T ? rt(u[x]) : qe(u[x]),
            a,
            z,
            _,
            v,
            E,
            S,
            T
          ), x++;
      }
    } else if (x > R)
      for (; x <= C; )
        H(d[x], _, v, !0), x++;
    else {
      const D = x, z = x, Q = /* @__PURE__ */ new Map();
      for (x = z; x <= R; x++) {
        const Ae = u[x] = T ? rt(u[x]) : qe(u[x]);
        Ae.key != null && Q.set(Ae.key, x);
      }
      let Y, ue = 0;
      const he = R - z + 1;
      let Ke = !1, ze = 0;
      const nn = new Array(he);
      for (x = 0; x < he; x++) nn[x] = 0;
      for (x = D; x <= C; x++) {
        const Ae = d[x];
        if (ue >= he) {
          H(Ae, _, v, !0);
          continue;
        }
        let We;
        if (Ae.key != null)
          We = Q.get(Ae.key);
        else
          for (Y = z; Y <= R; Y++)
            if (nn[Y - z] === 0 && on(Ae, u[Y])) {
              We = Y;
              break;
            }
        We === void 0 ? H(Ae, _, v, !0) : (nn[We - z] = x + 1, We >= ze ? ze = We : Ke = !0, w(
          Ae,
          u[We],
          a,
          null,
          _,
          v,
          E,
          S,
          T
        ), ue++);
      }
      const us = Ke ? Xl(nn) : Dt;
      for (Y = us.length - 1, x = he - 1; x >= 0; x--) {
        const Ae = z + x, We = u[Ae], fs = u[Ae + 1], ds = Ae + 1 < $ ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          fs.el || Xo(fs)
        ) : f;
        nn[x] === 0 ? w(
          null,
          We,
          a,
          ds,
          _,
          v,
          E,
          S,
          T
        ) : Ke && (Y < 0 || x !== us[Y] ? k(We, a, ds, 2) : Y--);
      }
    }
  }, k = (d, u, a, f, _ = null) => {
    const { el: v, type: E, transition: S, children: T, shapeFlag: x } = d;
    if (x & 6) {
      k(d.component.subTree, u, a, f);
      return;
    }
    if (x & 128) {
      d.suspense.move(u, a, f);
      return;
    }
    if (x & 64) {
      E.move(d, u, a, Me);
      return;
    }
    if (E === K) {
      i(v, u, a);
      for (let C = 0; C < T.length; C++)
        k(T[C], u, a, f);
      i(d.anchor, u, a);
      return;
    }
    if (E === hi) {
      W(d, u, a);
      return;
    }
    if (f !== 2 && x & 1 && S)
      if (f === 0)
        S.persisted && !v[pi] ? i(v, u, a) : (S.beforeEnter(v), i(v, u, a), Ee(() => S.enter(v), _));
      else {
        const { leave: C, delayLeave: R, afterLeave: D } = S, z = () => {
          d.ctx.isUnmounted ? s(v) : i(v, u, a);
        }, Q = () => {
          const Y = v._isLeaving || !!v[pi];
          v._isLeaving && v[pi](
            !0
            /* cancelled */
          ), S.persisted && !Y ? z() : C(v, () => {
            z(), D && D();
          });
        };
        R ? R(v, z, Q) : Q();
      }
    else
      i(v, u, a);
  }, H = (d, u, a, f = !1, _ = !1) => {
    const {
      type: v,
      props: E,
      ref: S,
      children: T,
      dynamicChildren: x,
      shapeFlag: $,
      patchFlag: C,
      dirs: R,
      cacheIndex: D,
      memo: z
    } = d;
    if (C === -2 && (_ = !1), S != null && (Pt(), dn(S, null, a, d, !0), Rt()), D != null && (u.renderCache[D] = void 0), $ & 256) {
      u.ctx.deactivate(d);
      return;
    }
    const Q = $ & 1 && R, Y = !pn(d);
    let ue;
    if (Y && (ue = E && E.onVnodeBeforeUnmount) && Xe(ue, u, d), $ & 6)
      De(d.component, a, f);
    else {
      if ($ & 128) {
        d.suspense.unmount(a, f);
        return;
      }
      Q && Tt(d, null, u, "beforeUnmount"), $ & 64 ? d.type.remove(
        d,
        u,
        a,
        Me,
        f
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== K || C > 0 && C & 64) ? ie(
        x,
        u,
        a,
        !1,
        !0
      ) : (v === K && C & 384 || !_ && $ & 16) && ie(T, u, a), f && X(d);
    }
    const he = z != null && D == null;
    (Y && (ue = E && E.onVnodeUnmounted) || Q || he) && Ee(() => {
      ue && Xe(ue, u, d), Q && Tt(d, null, u, "unmounted"), he && (d.el = null);
    }, a);
  }, X = (d) => {
    const { type: u, el: a, anchor: f, transition: _ } = d;
    if (u === K) {
      _e(a, f);
      return;
    }
    if (u === hi) {
      G(d);
      return;
    }
    const v = () => {
      s(a), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (d.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: E, delayLeave: S } = _, T = () => E(a, v);
      S ? S(d.el, v, T) : T();
    } else
      v();
  }, _e = (d, u) => {
    let a;
    for (; d !== u; )
      a = b(d), s(d), d = a;
    s(u);
  }, De = (d, u, a) => {
    const { bum: f, scope: _, job: v, subTree: E, um: S, m: T, a: x } = d;
    Ss(T), Ss(x), f && Rn(f), _.stop(), v && (v.flags |= 8, H(E, d, u, a)), S && Ee(S, u), Ee(() => {
      d.isUnmounted = !0;
    }, u);
  }, ie = (d, u, a, f = !1, _ = !1, v = 0) => {
    for (let E = v; E < d.length; E++)
      H(d[E], u, a, f, _);
  }, ge = (d) => {
    if (d.shapeFlag & 6)
      return ge(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const u = b(d.anchor || d.el), a = u && u[El];
    return a ? b(a) : u;
  };
  let we = !1;
  const ke = (d, u, a) => {
    let f;
    d == null ? u._vnode && (H(u._vnode, null, null, !0), f = u._vnode.component) : w(
      u._vnode || null,
      d,
      u,
      null,
      null,
      null,
      a
    ), u._vnode = d, we || (we = !0, vs(f), No(), we = !1);
  }, Me = {
    p: w,
    um: H,
    m: k,
    r: X,
    mt: yt,
    mc: Ge,
    pc: Oe,
    pbc: se,
    n: ge,
    o: e
  };
  return {
    render: ke,
    hydrate: void 0,
    createApp: Vl(ke)
  };
}
function gi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function St({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Jl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Wo(e, t, n = !1) {
  const i = e.children, s = t.children;
  if (B(i) && B(s))
    for (let o = 0; o < i.length; o++) {
      const l = i[o];
      let r = s[o];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = s[o] = rt(s[o]), r.el = l.el), !n && r.patchFlag !== -2 && Wo(l, r)), r.type === si && (r.patchFlag === -1 && (r = s[o] = rt(r)), r.el = l.el), r.type === dt && !r.el && (r.el = l.el);
    }
}
function Xl(e) {
  const t = e.slice(), n = [0];
  let i, s, o, l, r;
  const c = e.length;
  for (i = 0; i < c; i++) {
    const m = e[i];
    if (m !== 0) {
      if (s = n[n.length - 1], e[s] < m) {
        t[i] = s, n.push(i);
        continue;
      }
      for (o = 0, l = n.length - 1; o < l; )
        r = o + l >> 1, e[n[r]] < m ? o = r + 1 : l = r;
      m < e[n[o]] && (o > 0 && (t[i] = n[o - 1]), n[o] = i);
    }
  }
  for (o = n.length, l = n[o - 1]; o-- > 0; )
    n[o] = l, l = t[l];
  return n;
}
function Jo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Jo(t);
}
function Ss(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Xo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Xo(t.subTree) : null;
}
const Yo = (e) => e.__isSuspense;
function Yl(e, t) {
  t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : _l(e);
}
const K = /* @__PURE__ */ Symbol.for("v-fgt"), si = /* @__PURE__ */ Symbol.for("v-txt"), dt = /* @__PURE__ */ Symbol.for("v-cmt"), hi = /* @__PURE__ */ Symbol.for("v-stc"), At = [];
let Pe = null;
function V(e = !1) {
  At.push(Pe = e ? null : []);
}
function Zo() {
  At.pop(), Pe = At[At.length - 1] || null;
}
let xn = 1;
function ws(e, t = !1) {
  xn += e, e < 0 && Pe && t && (Pe.hasOnce = !0);
}
function Qo(e) {
  return e.dynamicChildren = xn > 0 ? Pe || Dt : null, Zo(), xn > 0 && Pe && Pe.push(e), e;
}
function N(e, t, n, i, s, o) {
  return Qo(
    h(
      e,
      t,
      n,
      i,
      s,
      o,
      !0
    )
  );
}
function Zl(e, t, n, i, s) {
  return Qo(
    ct(
      e,
      t,
      n,
      i,
      s,
      !0
    )
  );
}
function qo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function on(e, t) {
  return e.type === t.type && e.key === t.key;
}
const er = ({ key: e }) => e ?? null, Vn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? pe(e) || /* @__PURE__ */ Se(e) || Z(e) ? { i: Ne, r: e, k: t, f: !!n } : e : null);
function h(e, t = null, n = null, i = 0, s = null, o = e === K ? 0 : 1, l = !1, r = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && er(t),
    ref: t && Vn(t),
    scopeId: Go,
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
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ne
  };
  return r ? (jn(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= pe(n) ? 8 : 16), xn > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Pe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Pe.push(c), c;
}
const ct = Ql;
function Ql(e, t = null, n = null, i = 0, s = null, o = !1) {
  if ((!e || e === Al) && (e = dt), qo(e)) {
    const r = Wt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && jn(r, n), xn > 0 && !o && Pe && (r.shapeFlag & 6 ? Pe[Pe.indexOf(e)] = r : Pe.push(r)), r.patchFlag = -2, r;
  }
  if (ca(e) && (e = e.__vccOpts), t) {
    t = ql(t);
    let { class: r, style: c } = t;
    r && !pe(r) && (t.class = qn(r)), re(c) && (/* @__PURE__ */ ns(c) && !B(c) && (c = Be({}, c)), t.style = Ji(c));
  }
  const l = pe(e) ? 1 : Yo(e) ? 128 : ni(e) ? 64 : re(e) ? 4 : Z(e) ? 2 : 0;
  return h(
    e,
    t,
    n,
    i,
    s,
    l,
    o,
    !0
  );
}
function ql(e) {
  return e ? /* @__PURE__ */ ns(e) || Fo(e) ? Be({}, e) : e : null;
}
function Wt(e, t, n = !1, i = !1) {
  const { props: s, ref: o, patchFlag: l, children: r, transition: c } = e, m = t ? ea(s || {}, t) : s, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && er(m),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? B(o) ? o.concat(Vn(t)) : [o, Vn(t)] : Vn(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== K ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && Wt(e.ssContent),
    ssFallback: e.ssFallback && Wt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && i && ss(
    p,
    c.clone(p)
  ), p;
}
function q(e = " ", t = 0) {
  return ct(si, null, e, t);
}
function Je(e = "", t = !1) {
  return t ? (V(), Zl(dt, null, e)) : ct(dt, null, e);
}
function qe(e) {
  return e == null || typeof e == "boolean" ? ct(dt) : B(e) ? ct(
    K,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : qo(e) ? rt(e) : ct(si, null, String(e));
}
function rt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Wt(e);
}
function jn(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (B(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), jn(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Fo(t) ? t._ctx = Ne : s === 3 && Ne && (Ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Z(t)) {
    if (i & 65) {
      jn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ne }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [q(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function ea(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = qn([t.class, i.class]));
      else if (s === "style")
        t.style = Ji([t.style, i.style]);
      else if (Jn(s)) {
        const o = t[s], l = i[s];
        l && o !== l && !(B(o) && o.includes(l)) ? t[s] = o ? [].concat(o, l) : l : l == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Xn(s) && (t[s] = l);
      } else s !== "" && (t[s] = i[s]);
  }
  return t;
}
function Xe(e, t, n, i = null) {
  ft(e, t, 7, [
    n,
    i
  ]);
}
const ta = Do();
let na = 0;
function ia(e, t, n) {
  const i = e.type, s = (t ? t.appContext : e.appContext) || ta, o = {
    uid: na++,
    vnode: e,
    type: i,
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
    scope: new Fr(
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
    propsOptions: Fl(i, s),
    emitsOptions: Gl(i, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: oe,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: oe,
    data: oe,
    props: oe,
    attrs: oe,
    slots: oe,
    refs: oe,
    setupState: oe,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Ll.bind(null, o), e.ce && e.ce(o), o;
}
let Jt = null;
const sa = () => Jt || Ne;
let Fn, yn;
{
  const e = Qn(), t = (n, i) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(i), (o) => {
      s.length > 1 ? s.forEach((l) => l(o)) : s[0](o);
    };
  };
  Fn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Jt = n
  ), yn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Bn = n
  );
}
const tr = (e) => {
  const t = Jt;
  return Fn(e), e.scope.on(), () => {
    e.scope.off(), Fn(t);
  };
}, Es = () => {
  Jt && Jt.scope.off(), Fn(null);
};
function nr(e) {
  return e.vnode.shapeFlag & 4;
}
let Bn = !1;
function oa(e, t = !1, n = !1) {
  t && yn(t);
  const { props: i, children: s } = e.vnode, o = nr(e);
  Ul(e, i, o, t), Hl(e, s, n || t);
  const l = o ? ra(e, t) : void 0;
  return t && yn(!1), l;
}
function ra(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Pl);
  const { setup: i } = n;
  if (i) {
    Pt();
    const s = e.setupContext = i.length > 1 ? aa(e) : null, o = tr(e), l = En(
      i,
      e,
      0,
      [
        e.props,
        s
      ]
    ), r = ro(l);
    if (Rt(), o(), (r || e.sp) && !pn(e) && Ml(e), r) {
      if (l.then(Es, Es), t)
        return l.then((c) => {
          yn(!0);
          try {
            Is(e, c, t);
          } finally {
            yn(!1);
          }
        }).catch((c) => {
          ti(c, e, 0);
        });
      e.asyncDep = l;
    } else
      Is(e, l);
  } else
    ir(e);
}
function Is(e, t, n) {
  Z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = Ao(t)), ir(e);
}
function ir(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || It);
}
const la = {
  get(e, t) {
    return ye(e, "get", ""), e[t];
  }
};
function aa(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, la),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function oi(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ao(al(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in mn)
        return mn[n](e);
    },
    has(t, n) {
      return n in t || n in mn;
    }
  })) : e.proxy;
}
function ca(e) {
  return Z(e) && "__vccOpts" in e;
}
const xe = (e, t) => /* @__PURE__ */ pl(e, t, Bn), ua = "3.5.41";
let Di;
const Cs = typeof window < "u" && window.trustedTypes;
if (Cs)
  try {
    Di = /* @__PURE__ */ Cs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const sr = Di ? (e) => Di.createHTML(e) : (e) => e, fa = "http://www.w3.org/2000/svg", da = "http://www.w3.org/1998/Math/MathML", ot = typeof document < "u" ? document : null, Ms = ot && /* @__PURE__ */ ot.createElement("template"), pa = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const s = t === "svg" ? ot.createElementNS(fa, e) : t === "mathml" ? ot.createElementNS(da, e) : n ? ot.createElement(e, { is: n }) : ot.createElement(e);
    return e === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
  },
  createText: (e) => ot.createTextNode(e),
  createComment: (e) => ot.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ot.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, s, o) {
    const l = n ? n.previousSibling : t.lastChild;
    if (s && (s === o || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); )
        ;
    else {
      Ms.innerHTML = sr(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const r = Ms.content;
      if (i === "svg" || i === "mathml") {
        const c = r.firstChild;
        for (; c.firstChild; )
          r.appendChild(c.firstChild);
        r.removeChild(c);
      }
      t.insertBefore(r, n);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, ma = /* @__PURE__ */ Symbol("_vtc");
function ga(e, t, n) {
  const i = e[ma];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const As = /* @__PURE__ */ Symbol("_vod"), ha = /* @__PURE__ */ Symbol("_vsh"), va = /* @__PURE__ */ Symbol(""), _a = /(?:^|;)\s*display\s*:/;
function xa(e, t, n) {
  const i = e.style, s = pe(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (pe(t))
        for (const l of t.split(";")) {
          const r = l.slice(0, l.indexOf(":")).trim();
          n[r] == null && an(i, r, "");
        }
      else
        for (const l in t)
          n[l] == null && an(i, l, "");
    for (const l in n) {
      l === "display" && (o = !0);
      const r = n[l];
      r != null ? ba(
        e,
        l,
        !pe(t) && t ? t[l] : void 0,
        r
      ) || an(i, l, r) : an(i, l, "");
    }
  } else if (s) {
    if (t !== n) {
      const l = i[va];
      l && (n += ";" + l), i.cssText = n, o = _a.test(n);
    }
  } else t && e.removeAttribute("style");
  As in e && (e[As] = o ? i.display : "", e[ha] && (i.display = "none"));
}
const Ps = /\s*!important$/;
function an(e, t, n) {
  if (B(n))
    n.forEach((i) => an(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = ya(e, t);
    Ps.test(n) ? e.setProperty(
      Vt(i),
      n.replace(Ps, ""),
      "important"
    ) : e[i] = n;
  }
}
const Rs = ["Webkit", "Moz", "ms"], vi = {};
function ya(e, t) {
  const n = vi[t];
  if (n)
    return n;
  let i = Ue(t);
  if (i !== "filter" && i in e)
    return vi[t] = i;
  i = co(i);
  for (let s = 0; s < Rs.length; s++) {
    const o = Rs[s] + i;
    if (o in e)
      return vi[t] = o;
  }
  return t;
}
function ba(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && pe(i) && n === i;
}
const Vs = "http://www.w3.org/1999/xlink";
function Ns(e, t, n, i, s, o = Ur(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Vs, t.slice(6, t.length)) : e.setAttributeNS(Vs, t, n) : n == null || o && !fo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : nt(n) ? String(n) : n
  );
}
function Ls(e, t, n, i, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? sr(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const r = o === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (r !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const r = typeof e[t];
    r === "boolean" ? n = fo(n) : n == null && r === "string" ? (n = "", l = !0) : r === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(s || t);
}
function ht(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Ta(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Gs = /* @__PURE__ */ Symbol("_vei");
function Sa(e, t, n, i, s = null) {
  const o = e[Gs] || (e[Gs] = {}), l = o[t];
  if (i && l)
    l.value = i;
  else {
    const [r, c] = Ia(t);
    if (i) {
      const m = o[t] = Aa(
        i,
        s
      );
      ht(e, r, m, c);
    } else l && (Ta(e, r, l, c), o[t] = void 0);
  }
}
const wa = /(Once|Passive|Capture)$/, Ea = /^on:?(?:Once|Passive|Capture)$/;
function Ia(e) {
  let t, n;
  for (; (n = e.match(wa)) && !Ea.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Vt(e.slice(2)), t];
}
let _i = 0;
const Ca = /* @__PURE__ */ Promise.resolve(), Ma = () => _i || (Ca.then(() => _i = 0), _i = Date.now());
function Aa(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const s = n.value;
    if (B(s)) {
      const o = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        o.call(i), i._stopped = !0;
      };
      const l = s.slice(), r = [i];
      for (let c = 0; c < l.length && !i._stopped; c++) {
        const m = l[c];
        m && ft(
          m,
          t,
          5,
          r
        );
      }
    } else
      ft(
        s,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = Ma(), n;
}
const $s = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Pa = (e, t, n, i, s, o) => {
  const l = s === "svg";
  t === "class" ? ga(e, i, l) : t === "style" ? xa(e, n, i) : Jn(t) ? Xn(t) || Sa(e, t, n, i, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ra(e, t, i, l)) ? (Ls(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ns(e, t, i, l, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Va(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !pe(i))) ? Ls(e, Ue(t), i, o, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Ns(e, t, i, l));
};
function Ra(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $s(t) && Z(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return $s(t) && pe(n) ? !1 : t in e;
}
function Va(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ue(t);
  return Array.isArray(n) ? n.some((s) => Ue(s) === i) : Object.keys(n).some((s) => Ue(s) === i);
}
const Xt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return B(t) ? (n) => Rn(t, n) : t;
};
function Na(e) {
  e.target.composing = !0;
}
function Os(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const tt = /* @__PURE__ */ Symbol("_assign"), An = /* @__PURE__ */ Symbol("_initialValue");
function xi(e, t, n) {
  return t && (e = e.trim()), n && (e = Zn(e)), e;
}
const de = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, s) {
    e.parentNode && (e.type === "text" ? e[An] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[An] = e.defaultValue.replace(/\r\n?/g, `
`))), e[tt] = Xt(s);
    const o = i || s.props && s.props.type === "number";
    ht(e, t ? "change" : "input", (l) => {
      l.target.composing || e[tt](xi(e.value, n, o));
    }), (n || o) && ht(e, "change", () => {
      e.value = xi(e.value, n, o);
    }), t || (ht(e, "compositionstart", Na), ht(e, "compositionend", Os), ht(e, "change", Os));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const s = t ?? "", o = e[An];
    delete e[An], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[tt](xi(e.value, n, i)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: s, number: o } }, l) {
    if (e[tt] = Xt(l), e.composing) return;
    const r = (o || e.type === "number") && !/^0\d/.test(e.value) ? Zn(e.value) : e.value, c = t ?? "";
    if (r === c)
      return;
    const m = e.getRootNode();
    (m instanceof Document || m instanceof ShadowRoot) && m.activeElement === e && e.type !== "range" && (i && t === n || s && e.value.trim() === c) || (e.value = c);
  }
}, Ds = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[tt] = Xt(n), ht(e, "change", () => {
      const i = e._modelValue, s = bn(e), o = e.checked, l = e[tt];
      if (B(i)) {
        const r = Xi(i, s), c = r !== -1;
        if (o && !c)
          l(i.concat(s));
        else if (!o && c) {
          const m = [...i];
          m.splice(r, 1), l(m);
        }
      } else if (Yt(i)) {
        const r = new Set(i);
        o ? r.add(s) : r.delete(s), l(r);
      } else
        l(or(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ks,
  beforeUpdate(e, t, n) {
    e[tt] = Xt(n), ks(e, t, n);
  }
};
function ks(e, { value: t, oldValue: n }, i) {
  e._modelValue = t;
  let s;
  if (B(t))
    s = Xi(t, i.props.value) > -1;
  else if (Yt(t))
    s = t.has(i.props.value);
  else {
    if (t === n) return;
    s = Zt(t, or(e, !0));
  }
  e.checked !== s && (e.checked = s);
}
const le = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, ht(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? Zn(bn(o)) : bn(o)
      );
      e[tt](
        e.multiple ? Yt(e._modelValue) ? new Set(s) : s : s[0]
      ), e._assigning = !0, Ro(() => {
        e._assigning = !1;
      });
    }), e[tt] = Xt(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Us(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[tt] = Xt(n);
  },
  updated(e, { value: t }) {
    e._assigning || Us(e, t);
  }
};
function Us(e, t) {
  const n = e.multiple, i = B(t);
  if (!(n && !i && !Yt(t))) {
    for (let s = 0, o = e.options.length; s < o; s++) {
      const l = e.options[s], r = bn(l);
      if (n)
        if (i) {
          const c = typeof r;
          c === "string" || c === "number" ? l.selected = t.some((m) => String(m) === String(r)) : l.selected = Xi(t, r) > -1;
        } else
          l.selected = t.has(r);
      else if (Zt(bn(l), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function bn(e) {
  return "_value" in e ? e._value : e.value;
}
function or(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const La = /* @__PURE__ */ Be({ patchProp: Pa }, pa);
let js;
function Ga() {
  return js || (js = zl(La));
}
const $a = ((...e) => {
  const t = Ga().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const s = Da(i);
    if (!s) return;
    const o = t._component;
    !Z(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const l = n(s, !1, Oa(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l;
  }, t;
});
function Oa(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Da(e) {
  return pe(e) ? document.querySelector(e) : e;
}
const ka = "tavern_multi_tts_cache", Ve = "audio_cache", Ua = 1, Fs = 100, Bs = 50 * 1024 * 1024;
function Hs(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function ja(e) {
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
    format: e.indexTts?.format ?? "wav"
  };
}
async function Fa(e) {
  const t = ja(e), n = JSON.stringify(t);
  if (Object.keys(t).some((s) => /api[_-]?key|authorization|token|secret|password/i.test(s)))
    throw new Error("音频缓存键不得包含密钥字段");
  const i = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(n));
  return [...new Uint8Array(i)].map((s) => s.toString(16).padStart(2, "0")).join("");
}
function Ba() {
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
function Ha(e, t) {
  let n = null, i = null, s = 0;
  function o(r) {
    n = r, r.onversionchange = () => {
      r.close(), n === r && (n = null);
    };
    const c = r.onclose;
    return r.onclose = (m) => {
      n === r && (n = null), typeof c == "function" && c.call(r, m);
    }, r;
  }
  async function l() {
    return n || (i ? await i : (i = new Promise((r, c) => {
      const m = e.open(t, Ua);
      s += 1, m.onupgradeneeded = () => {
        const p = m.result;
        p.objectStoreNames.contains(Ve) || p.createObjectStore(Ve, { keyPath: "key" });
      }, m.onsuccess = () => r(o(m.result)), m.onerror = () => c(m.error ?? Error("IndexedDB 打开失败"));
    }).finally(() => {
      i = null;
    }), await i));
  }
  return {
    getDb: l,
    close() {
      n?.close(), n = null;
    },
    getOpenCount() {
      return s;
    }
  };
}
function Ka(e, t) {
  const n = Ha(e, t);
  async function i() {
    return await n.getDb();
  }
  return {
    async get(s) {
      const o = await i();
      return await new Promise((l, r) => {
        const m = o.transaction(Ve, "readonly").objectStore(Ve).get(s);
        m.onsuccess = () => l(m.result), m.onerror = () => r(m.error ?? Error("读取缓存失败"));
      });
    },
    async put(s) {
      const o = await i();
      await new Promise((l, r) => {
        const c = o.transaction(Ve, "readwrite");
        c.objectStore(Ve).put(s), c.oncomplete = () => l(), c.onerror = () => r(c.error ?? Error("写入缓存失败"));
      });
    },
    async delete(s) {
      const o = await i();
      await new Promise((l, r) => {
        const c = o.transaction(Ve, "readwrite");
        c.objectStore(Ve).delete(s), c.oncomplete = () => l(), c.onerror = () => r(c.error ?? Error("删除缓存失败"));
      });
    },
    async clear() {
      const s = await i();
      await new Promise((o, l) => {
        const r = s.transaction(Ve, "readwrite");
        r.objectStore(Ve).clear(), r.oncomplete = () => o(), r.onerror = () => l(r.error ?? Error("清空缓存失败"));
      });
    },
    async getAll() {
      const s = await i();
      return await new Promise((o, l) => {
        const c = s.transaction(Ve, "readonly").objectStore(Ve).openCursor(), m = [];
        c.onsuccess = () => {
          const p = c.result;
          if (!p) {
            o(m);
            return;
          }
          m.push(p.value), p.continue();
        }, c.onerror = () => l(c.error ?? Error("读取缓存记录失败"));
      });
    }
  };
}
async function za(e) {
  const t = await e.getAll();
  let n = t.reduce((o, l) => o + (l.blob?.size ?? 0), 0);
  if (t.length <= Fs && n <= Bs)
    return;
  const i = [...t].sort((o, l) => o.created_at - l.created_at);
  let s = t.length;
  for (const o of i) {
    if (s <= Fs && n <= Bs)
      break;
    await e.delete(o.key), s -= 1, n -= o.blob?.size ?? 0;
  }
}
function Wa(e) {
  const t = e?.backend === "memory" ? Ba() : Ka(
    e?.indexedDB ?? indexedDB,
    e?.dbName ?? ka
  );
  return {
    async get(n) {
      return (await t.get(n))?.blob ?? null;
    },
    async set(n, i, s = Date.now()) {
      await t.put({
        key: n,
        blob: i,
        created_at: s
      }), await za(t);
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
        totalBytes: n.reduce((i, s) => i + (s.blob?.size ?? 0), 0)
      };
    },
    async list(n, i) {
      const o = (await t.getAll()).sort((r, c) => c.created_at - r.created_at), l = Math.max(0, (n - 1) * i);
      return {
        items: o.slice(l, l + i).map((r) => ({
          key: r.key,
          size: r.blob?.size ?? 0,
          createdAt: r.created_at
        })),
        total: o.length,
        totalBytes: o.reduce((r, c) => r + (c.blob?.size ?? 0), 0)
      };
    }
  };
}
const ri = Wa({
  backend: typeof indexedDB > "u" ? "memory" : "indexeddb"
});
function Ja(e) {
  return ri.get(e);
}
function Xa(e, t) {
  return ri.set(e, t);
}
function rr() {
  return ri.clear();
}
function Ya() {
  return ri.stats();
}
let gt = null, Nn = null;
function Ln() {
  gt && (gt.pause(), Nn?.());
}
function lr(e, t, n, i, s) {
  const o = URL.createObjectURL(e), l = new Audio(o);
  let r = "paused";
  const c = () => {
    URL.revokeObjectURL(o), gt === l && (gt = null, Nn = null);
  }, m = () => {
    gt && gt !== l && (gt.pause(), Nn?.()), gt = l, Nn = c;
  };
  l.onplay = () => {
    r = "playing", t?.();
  }, l.onpause = () => {
    r === "ended" || r === "error" || (r = "paused", s?.());
  }, l.onended = () => {
    r = "ended", c(), n?.();
  }, l.onerror = (g) => {
    r = "error", c(), i?.(g);
  };
  const p = async () => {
    m();
    try {
      await l.play();
    } catch (g) {
      throw r = "error", c(), i?.(g), g;
    }
  };
  return p().catch(() => {
  }), {
    stop: () => {
      r = "ended", l.pause(), c();
    },
    pause: () => {
      r === "playing" && l.pause();
    },
    resume: p,
    restart: async () => {
      l.currentTime = 0, await p();
    },
    getState: () => r
  };
}
function ar(e) {
  return [...e].map((n) => n.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(n) ? "_" : n).join("").trim() || "audio.mp3";
}
function Za(e, t, n = "mp3") {
  return ar(`tavern_multi_tts_${e}_${t}.${n}`);
}
function Qa(e, t) {
  const n = ar(t), i = URL.createObjectURL(e), s = URL.revokeObjectURL.bind(URL), o = document.createElement("a");
  o.href = i, o.download = n, document.body.appendChild(o), o.click(), o.remove(), window.setTimeout(() => s(i), 0);
}
const qa = "Tavern Multi-TTS", yi = "tavern_multi_tts", ec = "0.1.0", bi = "tavern-multi-tts-root", Te = "[Tavern Multi-TTS]", Hn = ["ZH", "EN", "JA", "AR", "ES"], cr = 2, ur = [
  "speech-02-hd",
  "speech-02-turbo",
  "speech-2.8-hd",
  "speech-2.8-turbo",
  "speech-2.6-hd",
  "speech-2.6-turbo"
], ki = [
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
`), xt = {
  schemaVersion: cr,
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
  injectEnabled: !0,
  injectDepth: 1,
  injectRole: "system",
  injectTemplate: ki
};
function Nt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function ee(e, t) {
  return typeof e == "string" ? e : t;
}
function Ti(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Ye(e, t, n, i, s = !1) {
  const o = typeof e == "number" ? e : Number(e);
  if (!Number.isFinite(o))
    return i;
  const l = s ? Math.round(o) : o;
  return Math.min(n, Math.max(t, l));
}
function tc(e) {
  return e === "minimax" || e === "local_gsvi" || e === "index_tts" ? e : "minimax";
}
function fr(e) {
  return Hn.includes(String(e)) ? e : xt.indexTtsLanguage;
}
function nc(e) {
  return e === "beijing" ? "beijing" : "international";
}
function ic(e) {
  return ur.includes(String(e)) ? e : xt.model;
}
function sc(e) {
  return e === "manual" || e === "auto_first_n" || e === "auto_all" ? e : xt.prefetchMode;
}
function oc(e) {
  return e === "user" || e === "assistant" || e === "system" ? e : xt.injectRole;
}
function rc(e) {
  return e === "zh" || e === "en" || e === "ja" ? e : xt.testLanguage;
}
function lc(e) {
  return e === "wav" ? "wav" : "mp3";
}
function dr(e) {
  return Array.isArray(e) ? e.filter(Nt).map((t) => ({
    characterName: ee(t.characterName, "").trim(),
    minimaxVoiceId: ee(t.minimaxVoiceId, "").trim()
  })).filter((t) => t.characterName || t.minimaxVoiceId) : [];
}
function ac(e) {
  return Array.isArray(e) ? e.filter(Nt).map((t) => ({
    name: ee(t.name, "").trim(),
    mappings: dr(t.mappings)
  })).filter((t) => t.name) : [];
}
function pr(e) {
  return Array.isArray(e) ? e.filter(Nt).map((t) => ({
    characterName: ee(t.characterName, "").trim(),
    gsviVoiceId: ee(t.gsviVoiceId, "").trim(),
    gsviLanguage: ee(t.gsviLanguage, "").trim(),
    gsviEmotion: ee(t.gsviEmotion, "").trim()
  })).filter((t) => t.characterName || t.gsviVoiceId) : [];
}
function cc(e) {
  return Array.isArray(e) ? e.filter(Nt).map((t) => ({
    name: ee(t.name, "").trim(),
    mappings: pr(t.mappings)
  })).filter((t) => t.name) : [];
}
function mr(e) {
  return Array.isArray(e) ? e.filter(Nt).map((t) => ({
    characterName: ee(t.characterName, "").trim(),
    indexTtsVoiceId: ee(t.indexTtsVoiceId, "").trim(),
    indexTtsLanguage: fr(t.indexTtsLanguage)
  })).filter((t) => t.characterName || t.indexTtsVoiceId) : [];
}
function uc(e) {
  return Array.isArray(e) ? e.filter(Nt).map((t) => ({
    name: ee(t.name, "").trim(),
    mappings: mr(t.mappings)
  })).filter((t) => t.name) : [];
}
function Ft(e) {
  const t = Nt(e) ? e : {};
  return {
    schemaVersion: cr,
    enabled: Ti(t.enabled, xt.enabled),
    ttsEngine: tc(t.ttsEngine),
    apiKey: ee(t.apiKey, ""),
    groupId: ee(t.groupId, ""),
    voiceId: ee(t.voiceId, ""),
    voiceCatalogSelectedId: ee(t.voiceCatalogSelectedId, ""),
    minimaxRegion: nc(t.minimaxRegion),
    testLanguage: rc(t.testLanguage),
    model: ic(t.model),
    speed: Ye(t.speed, 0.5, 2, 1),
    vol: Ye(t.vol, 0, 10, 1),
    requestTimeoutMs: Ye(t.requestTimeoutMs, 1e3, 3e4, 15e3, !0),
    maxConcurrency: Ye(t.maxConcurrency, 1, 10, 3, !0),
    prefetchMode: sc(t.prefetchMode),
    prefetchFirstCount: Ye(t.prefetchFirstCount, 1, 10, 2, !0),
    localGsviBaseUrl: ee(t.localGsviBaseUrl, ""),
    localGsviAuthToken: ee(t.localGsviAuthToken, ""),
    localGsviModel: ee(t.localGsviModel, ""),
    localGsviFormat: lc(t.localGsviFormat),
    localGsviUseReferenceAudio: Ti(t.localGsviUseReferenceAudio, !1),
    localGsviCharacter: ee(t.localGsviCharacter, ""),
    localGsviLanguage: ee(t.localGsviLanguage, "ja"),
    localGsviEmotion: ee(t.localGsviEmotion, ""),
    localGsviReferenceText: ee(t.localGsviReferenceText, ""),
    localGsviTopK: Ye(t.localGsviTopK, 1, 200, 20, !0),
    localGsviTopP: Ye(t.localGsviTopP, 0, 1, 0.7),
    localGsviTemperature: Ye(t.localGsviTemperature, 0, 2, 0.7),
    localGsviTextLang: ee(t.localGsviTextLang, "多语种混合"),
    localGsviTextSplitMethod: ee(t.localGsviTextSplitMethod, "按标点符号切"),
    localGsviBatchSize: Ye(t.localGsviBatchSize, 1, 8, 1, !0),
    characterMappings: dr(t.characterMappings),
    characterMappingPresets: ac(t.characterMappingPresets),
    gsviCharacterMappings: pr(t.gsviCharacterMappings),
    gsviCharacterMappingPresets: cc(t.gsviCharacterMappingPresets),
    indexTtsBaseUrl: ee(t.indexTtsBaseUrl, xt.indexTtsBaseUrl),
    indexTtsVoiceId: ee(t.indexTtsVoiceId, ""),
    indexTtsLanguage: fr(t.indexTtsLanguage),
    indexTtsCharacterMappings: mr(t.indexTtsCharacterMappings),
    indexTtsCharacterMappingPresets: uc(t.indexTtsCharacterMappingPresets),
    injectEnabled: Ti(t.injectEnabled, !0),
    injectDepth: Ye(t.injectDepth, 0, 50, 1, !0),
    injectRole: oc(t.injectRole),
    injectTemplate: ee(t.injectTemplate, ki) || ki
  };
}
function Bt(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function fc(e, t) {
  return e.enabled !== t.enabled || e.injectEnabled !== t.injectEnabled || e.injectDepth !== t.injectDepth || e.injectRole !== t.injectRole || e.injectTemplate !== t.injectTemplate || e.ttsEngine !== t.ttsEngine || !Bt(e.characterMappings, t.characterMappings) || !Bt(e.gsviCharacterMappings, t.gsviCharacterMappings) || !Bt(e.indexTtsCharacterMappings, t.indexTtsCharacterMappings);
}
function dc(e, t) {
  return e.enabled !== t.enabled || e.ttsEngine !== t.ttsEngine || !Bt(e.characterMappings, t.characterMappings) || !Bt(e.gsviCharacterMappings, t.gsviCharacterMappings) || !Bt(e.indexTtsCharacterMappings, t.indexTtsCharacterMappings);
}
function pc(e, t) {
  return {
    syncInjection: fc(e, t),
    refreshDecorations: dc(e, t)
  };
}
function mc(e, t, n = {}) {
  let i = !1, s = !1, o = null, l = null, r = null;
  function c() {
    return Ft(e.readRawSettings());
  }
  function m() {
    const w = c();
    return e.writeSettings(w), w;
  }
  function p() {
    if (i)
      return !0;
    const w = document.getElementById(bi);
    w && w.remove();
    const M = e.findSettingsRoot();
    return M ? (r = document.createElement("div"), r.id = bi, r.dataset.tavernMultiTts = "settings", M.appendChild(r), t.mount(r, c()), l = e.onPageHide(() => {
      g({ removeSettings: !1 });
    }), i = !0, n.startRuntime?.(), console.info(`${Te} settings panel mounted`), !0) : !1;
  }
  function g(w) {
    n.stopRuntime?.(), n.stopPlayback?.(), o?.(), o = null, s = !1, l?.(), l = null, t.unmount(), (r ?? document.getElementById(bi))?.remove(), r = null, i = !1, w.removeSettings && e.removeSettings();
  }
  function b() {
    i || s || (m(), !p() && (s = !0, o = e.onAppReady(() => {
      const w = s;
      s = !1;
      const M = o;
      o = null, M?.(), w && (p() || console.error(
        `${Te} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`
      ));
    })));
  }
  function y(w) {
    const M = c();
    M.enabled = w, e.writeSettings(M), n.syncInjection?.(), n.refreshDecorations?.();
  }
  function O(w) {
    const M = c();
    M.injectEnabled = w, e.writeSettings(M), n.syncInjection?.();
  }
  return {
    activate: b,
    disable() {
      g({ removeSettings: !1 }), console.info(`${Te} disabled`);
    },
    destroy() {
      g({ removeSettings: !1 });
    },
    install() {
      m();
    },
    clean() {
      return g({ removeSettings: !0 }), console.info(`${Te} settings cleaned`), n.clearCache?.();
    },
    delete() {
      return g({ removeSettings: !0 }), console.info(`${Te} deleted`), n.clearCache?.();
    },
    updateSettings(w) {
      const M = c();
      e.writeSettings(Ft(w));
      const A = pc(M, c());
      A.syncInjection && n.syncInjection?.(), A.refreshDecorations && n.refreshDecorations?.();
    },
    setEnabled: y,
    setInjectEnabled: O,
    isActive() {
      return i;
    }
  };
}
function gc() {
  return document.querySelector("#extensions_settings2") ?? document.querySelector("#extensions_settings");
}
class L extends Error {
  code;
  status;
  constructor(t, n, i) {
    super(t), this.name = "TtsRequestError", this.code = n, this.status = i;
  }
}
function gr(e) {
  return e instanceof L;
}
function hc(e) {
  return new L(`请求超时（${e}ms），请检查网络或增大超时时间`, "timeout");
}
function vc() {
  return new L("请求已取消", "cancelled");
}
async function _t(e, t, n, i) {
  const s = new AbortController();
  let o = !1, l = !1, r = null;
  const c = () => {
    l || (l = !0, clearTimeout(p), g?.removeEventListener("abort", b));
  }, m = () => o && !g?.aborted ? hc(i) : vc(), p = setTimeout(() => {
    o = !0, s.abort("timeout");
  }, i), g = n.signal, b = () => {
    s.abort(g?.reason ?? "cancelled");
  };
  g && (g.aborted ? s.abort(g.reason ?? "cancelled") : g.addEventListener("abort", b, { once: !0 }));
  const y = () => {
    r?.(m());
  };
  s.signal.addEventListener("abort", y);
  const O = () => new Promise((M, A) => {
    if (s.signal.aborted) {
      A(m());
      return;
    }
    r = A;
  }), w = async (M) => {
    try {
      return await Promise.race([M, O()]);
    } catch (A) {
      throw A instanceof L ? A : s.signal.aborted ? m() : A;
    } finally {
      c(), s.signal.removeEventListener("abort", y);
    }
  };
  try {
    const M = await Promise.race([
      e(t, {
        ...n,
        signal: s.signal
      }),
      O()
    ]);
    return {
      ok: M.ok,
      status: M.status,
      statusText: M.statusText,
      headers: M.headers,
      text: () => w(M.text()),
      async json() {
        const A = await w(M.text());
        try {
          return JSON.parse(A);
        } catch {
          throw new L(
            "服务返回的不是合法 JSON，请检查地址或稍后重试",
            "invalid_json"
          );
        }
      },
      blob: () => w(M.blob()),
      close: c
    };
  } catch (M) {
    throw c(), s.signal.removeEventListener("abort", y), M instanceof L ? M : s.signal.aborted ? m() : M;
  }
}
function Ht(e, t) {
  return `${e.replace(/\/+$/, "")}${t.startsWith("/") ? "" : "/"}${t}`;
}
function _c(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function xc(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const yc = /api[_-]?key|authorization|token|secret|cookie|password/i;
function Kn(e) {
  if (typeof e == "string")
    return e.length > 80 ? `${e.slice(0, 80)}…(len=${e.length})` : e;
  if (Array.isArray(e))
    return e.map((n) => Kn(n));
  if (!e || typeof e != "object")
    return e;
  const t = {};
  for (const [n, i] of Object.entries(e)) {
    if (yc.test(n)) {
      t[n] = "[redacted]";
      continue;
    }
    if (n === "text" || n === "input" || n === "referenceText" || n === "reference_text") {
      t[n] = typeof i == "string" ? `[text len=${i.length}]` : "[text]";
      continue;
    }
    t[n] = Kn(i);
  }
  return t;
}
function ls(e, t, n) {
  if (n === void 0) {
    console.info(`${Te} [${e}] ${t}`);
    return;
  }
  console.info(`${Te} [${e}] ${t}`, Kn(n));
}
function Ui(e, t, n) {
  if (n === void 0) {
    console.warn(`${Te} [${e}] ${t}`);
    return;
  }
  console.warn(`${Te} [${e}] ${t}`, Kn(n));
}
const hr = "IndexTTS-2.5", ji = "indextts", Fi = "1", Bi = "2.5";
function Tn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function bc(e) {
  return Hn.includes(String(e));
}
function Tc(e) {
  return {
    model: hr,
    input: e.text,
    voice: e.voiceId.trim(),
    response_format: "wav",
    language: e.language
  };
}
function Sc(e) {
  if (!e.baseUrl.trim())
    throw new L("请先填写 IndexTTS 服务地址", "config");
  if (!e.voiceId.trim())
    throw new L("请先选择 IndexTTS 音色预设", "config");
  if (!bc(e.language))
    throw new L("IndexTTS 语言必须是 ZH、EN、JA、AR 或 ES", "config");
  if (!e.text.trim())
    throw new L("IndexTTS 合成文本为空", "config");
}
function wc(e) {
  return (e ?? "").split(";")[0]?.trim().toLowerCase() === "audio/wav";
}
function Ec(e, t) {
  if (Tn(e) && Tn(e.error)) {
    const n = typeof e.error.code == "string" ? e.error.code.trim() : "", i = typeof e.error.message == "string" ? e.error.message.trim() : "";
    if (n || i)
      return new L(
        `IndexTTS 请求失败：code=${n || "unknown"}, message=${i || "（无消息）"}`,
        "http",
        t
      );
  }
  return new L(`IndexTTS 请求失败：HTTP ${t}`, "http", t);
}
async function Si(e) {
  try {
    const t = await e.text();
    try {
      return Ec(JSON.parse(t), e.status);
    } catch {
      return new L(
        `IndexTTS 请求失败：HTTP ${e.status}`,
        "http",
        e.status
      );
    }
  } catch (t) {
    return t instanceof L ? new L(
      `IndexTTS 请求失败：HTTP ${e.status}`,
      "http",
      e.status
    ) : new L(
      `IndexTTS 请求失败：HTTP ${e.status}`,
      "http",
      e.status
    );
  }
}
function Ic(e) {
  return e.service !== ji ? `IndexTTS 健康检查失败：服务名无效（期望 ${ji}）` : e.api_version !== Fi ? `IndexTTS 健康检查失败：API 版本不匹配（期望 ${Fi}）` : e.model_version !== Bi ? `IndexTTS 健康检查失败：模型版本不匹配（期望 ${Bi}）` : e.model_loaded !== !0 ? "IndexTTS 服务在线，但模型尚未加载。请先在服务端加载模型后再试。" : e.ok !== !0 ? "IndexTTS 服务报告未就绪" : "IndexTTS 健康检查响应结构无效";
}
function Cc(e) {
  return Tn(e) ? e.ok === !0 && e.service === ji && e.api_version === Fi && e.model_version === Bi && e.model_loaded === !0 ? { ok: !0, message: "IndexTTS 服务在线，模型已加载（IndexTTS-2.5）" } : { ok: !1, message: Ic(e) } : { ok: !1, message: "IndexTTS 健康检查响应结构无效" };
}
function Mc(e) {
  if (!Tn(e) || !Array.isArray(e.voices))
    throw new L("IndexTTS 音色列表结构无效：缺少 voices 数组", "invalid_json");
  return e.voices.map((t, n) => {
    if (!Tn(t) || typeof t.id != "string" || !t.id.trim())
      throw new L(
        `IndexTTS 音色列表结构无效：voices[${n}] 缺少有效 id`,
        "invalid_json"
      );
    const i = typeof t.name == "string" && t.name.trim() ? t.name.trim() : t.id.trim();
    return {
      id: t.id.trim(),
      name: i
    };
  });
}
function Ac(e) {
  return e instanceof L ? { ok: !1, message: e.message } : {
    ok: !1,
    message: "无法连接 IndexTTS 服务。请确认服务已启动，并检查地址是否正确。"
  };
}
function Pc(e) {
  const t = fetch;
  return {
    id: "index_tts",
    async checkHealth(n) {
      if (n.engine !== "index_tts")
        throw new L("IndexTTS 适配器收到了错误的引擎请求", "config");
      const i = n.baseUrl.trim();
      if (!i)
        return { ok: !1, message: "请先填写 IndexTTS 服务地址" };
      try {
        const s = await _t(
          t,
          Ht(i, "/v1/health"),
          { method: "GET", signal: n.signal },
          n.timeoutMs
        );
        if (!s.ok)
          throw await Si(s);
        const o = await s.json();
        return Cc(o);
      } catch (s) {
        return Ac(s);
      }
    },
    async listVoices(n) {
      if (n.engine !== "index_tts")
        throw new L("IndexTTS 适配器收到了错误的引擎请求", "config");
      const i = n.baseUrl.trim();
      if (!i)
        throw new L("请先填写 IndexTTS 服务地址", "config");
      const s = await _t(
        t,
        Ht(i, "/v1/voices"),
        { method: "GET", signal: n.signal },
        n.timeoutMs
      );
      if (!s.ok)
        throw await Si(s);
      return Mc(await s.json());
    },
    async synthesize(n) {
      if (n.engine !== "index_tts")
        throw new L("IndexTTS 适配器收到了错误的引擎请求", "config");
      Sc(n);
      const i = Tc(n), s = Ht(n.baseUrl.trim(), "/v1/audio/speech");
      ls("index_tts", "synthesize", {
        url: s,
        voiceId: i.voice,
        language: i.language,
        model: i.model,
        text: n.text
      });
      const o = await _t(
        t,
        s,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(i),
          signal: n.signal
        },
        n.timeoutMs
      );
      if (!o.ok)
        throw await Si(o);
      const l = o.headers.get("content-type");
      if (!wc(l))
        throw o.close(), new L(
          `IndexTTS 合成失败：响应类型不是 audio/wav（当前：${l || "缺失"}）`,
          "missing_audio",
          o.status
        );
      const r = await o.blob();
      if (!r || r.size <= 0)
        throw new L("IndexTTS 合成失败：返回的音频为空", "missing_audio");
      return r;
    }
  };
}
const Rc = ["v2", "v3", "v4", "v2Pro"];
function vr(e) {
  const t = e.trim();
  if (!t)
    return { modelName: "", version: "" };
  const n = t.lastIndexOf("|");
  return n < 0 ? { modelName: t, version: "" } : {
    modelName: t.slice(0, n).trim(),
    version: t.slice(n + 1).trim()
  };
}
function Vc(e) {
  const t = e.trim().toLowerCase();
  return t === "v2pro" ? "v2Pro" : t === "v2" || t === "v3" || t === "v4" ? t : e.trim();
}
function Nc(e) {
  const t = e.trim();
  return t ? {
    英文: "英语",
    日文: "日语",
    韩文: "韩语"
  }[t] ?? t : "多语种混合";
}
function Lc(e) {
  const t = vr(e.modelId), n = t.modelName.trim(), i = Vc(t.version) || "v2Pro";
  return {
    url: Ht(e.baseUrl.trim(), "/v1/audio/speech"),
    modelName: n,
    version: i,
    payload: {
      model: `GSVI-${i}`,
      input: e.text,
      voice: n,
      response_format: e.format,
      speed: e.speed,
      other_params: {
        app_key: "",
        text_lang: Nc(e.textLang),
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
function Gc(e) {
  if (!e.baseUrl.trim())
    throw new L("请先填写 Local-GSVI 服务地址", "config");
  if (!e.modelId.trim())
    throw new L("请先填写或选择 Local-GSVI 模型（modelName|version）", "config");
  if (!e.language.trim() || !e.emotion.trim())
    throw new L(
      "GSVI 生成要求映射完整：语种(prompt_lang)/情绪(emotion)不能为空",
      "config"
    );
  if (!vr(e.modelId).modelName)
    throw new L("Local-GSVI 模型格式错误，期望 modelName|version", "config");
  if (!e.text.trim())
    throw new L("Local-GSVI 合成文本为空", "config");
}
function Ie(e) {
  return typeof e == "object" && e !== null;
}
function $c(e) {
  const t = e.replace(/^data:audio\/[a-zA-Z0-9.+-]+;base64,/i, "").trim();
  return t.length >= 16 && /^[A-Za-z0-9+/=\r\n]+$/.test(t);
}
function _r(e) {
  return e.trim().match(/^data:audio\/[a-zA-Z0-9.+-]+;base64,(.+)$/i)?.[1] ?? e.trim();
}
function Oc(e) {
  if (!Ie(e))
    return null;
  const t = e, n = Ie(t.data) ? t.data : void 0, i = Ie(t.output) ? t.output : void 0, s = [
    t.audio,
    t.data,
    t.audio_base64,
    t.b64,
    n?.audio,
    n?.audio_base64,
    i?.audio,
    i?.audio_base64
  ];
  for (const o of s)
    if (typeof o == "string" && $c(o))
      return _r(o);
  return null;
}
function Dc(e) {
  if (!Ie(e))
    return null;
  const t = e, n = Ie(t.data) ? t.data : void 0, i = Ie(t.output) ? t.output : void 0, s = [
    t.result_path,
    t.audio_url,
    t.url,
    t.audio_file,
    t.path,
    n?.url,
    n?.path,
    i?.url,
    i?.path,
    i?.audio_url
  ];
  for (const o of s)
    if (typeof o == "string" && o.trim())
      return o.trim();
  return null;
}
function kc(e) {
  if (!Ie(e))
    return "";
  const t = Ie(e.error) ? e.error : void 0, n = Ie(e.base_resp) ? e.base_resp : void 0, i = Ie(e.data) ? e.data : void 0, s = [
    e.msg,
    e.message,
    e.error,
    t?.msg,
    t?.message,
    n?.status_msg,
    i?.msg,
    i?.message
  ];
  for (const o of s)
    if (typeof o == "string" && o.trim())
      return o.trim();
  return "";
}
function Uc(e) {
  const t = atob(_r(e)), n = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i += 1)
    n[i] = t.charCodeAt(i);
  return n;
}
function wi(e) {
  const t = e?.trim() ?? "";
  return t ? { Authorization: `Bearer ${t}` } : {};
}
function jc(e) {
  const t = fetch;
  async function n(i, s, o, l, r) {
    const c = /^https?:\/\//i.test(s) ? s : Ht(i, s);
    let m = !1;
    try {
      m = _c(i) === new URL(c).origin;
    } catch {
      m = !1;
    }
    const p = await _t(
      t,
      c,
      {
        method: "GET",
        headers: m ? wi(o) : {},
        signal: r
      },
      l
    );
    if (!p.ok)
      throw new L(`下载 GSVI 输出失败：HTTP ${p.status}`, "http", p.status);
    return await p.blob();
  }
  return {
    id: "local_gsvi",
    async checkHealth(i) {
      if (i.engine !== "local_gsvi")
        throw new L("Local-GSVI 适配器收到了错误的引擎请求", "config");
      if (!i.baseUrl.trim())
        return { ok: !1, message: "请先填写 Local-GSVI 服务地址" };
      try {
        const s = await this.listVoices(i);
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
    async listVoices(i) {
      if (i.engine !== "local_gsvi")
        throw new L("Local-GSVI 适配器收到了错误的引擎请求", "config");
      const s = i.baseUrl.trim();
      if (!s)
        throw new L("请先填写 Local-GSVI 服务地址", "config");
      const o = [];
      for (const l of Rc) {
        const r = Ht(s, `/models/${encodeURIComponent(l)}`);
        try {
          const c = await _t(
            t,
            r,
            { method: "GET", headers: wi(i.authToken), signal: i.signal },
            i.timeoutMs
          );
          if (!c.ok) {
            Ui("local_gsvi", `GET /models/${l} failed`, {
              status: c.status
            }), c.close();
            continue;
          }
          const m = await c.json(), p = Ie(m) && Ie(m.models) ? m.models : m;
          if (!Ie(p))
            continue;
          Object.entries(p).forEach(([g, b]) => {
            if (!g || !Ie(b))
              return;
            const y = Object.keys(b).filter(Boolean).sort((w, M) => w.localeCompare(M)), O = {};
            y.forEach((w) => {
              const M = b[w];
              O[w] = Array.isArray(M) ? M.map((A) => String(A).trim()).filter(Boolean) : typeof M == "string" ? [M.trim()].filter(Boolean) : [];
            }), o.push({
              id: `${g}|${l}`,
              name: `${g} [${l}]`,
              source: "gsvi_model",
              language: y.join(","),
              languages: y,
              emotionsByLanguage: O
            });
          });
        } catch (c) {
          if (c instanceof L && c.code === "cancelled")
            throw c;
          Ui("local_gsvi", `GET /models/${l} failed`);
        }
      }
      if (o.length === 0)
        throw new L(
          "未在 /models/{v2|v3|v4|v2Pro} 中解析到模型映射，请检查接口返回结构",
          "missing_audio"
        );
      return o.sort((l, r) => l.name.localeCompare(r.name));
    },
    async synthesize(i) {
      if (i.engine !== "local_gsvi")
        throw new L("Local-GSVI 适配器收到了错误的引擎请求", "config");
      Gc(i);
      const s = Lc(i), o = {
        "Content-Type": "application/json",
        ...wi(i.authToken)
      };
      ls("local_gsvi", "synthesize", {
        url: s.url,
        model: s.modelName,
        version: s.version,
        text: i.text
      });
      const l = await _t(
        t,
        s.url,
        {
          method: "POST",
          headers: o,
          body: JSON.stringify(s.payload),
          signal: i.signal
        },
        i.timeoutMs
      );
      if (!l.ok)
        throw new L(
          `Local-GSVI 请求失败：HTTP ${l.status}`,
          "http",
          l.status
        );
      if ((l.headers.get("content-type")?.toLowerCase() ?? "").includes("application/json")) {
        const c = await l.json(), m = Oc(c);
        if (m)
          return new Blob([Uint8Array.from(Uc(m))], {
            type: i.format === "wav" ? "audio/wav" : "audio/mpeg"
          });
        const p = Dc(c);
        if (p)
          return await n(
            i.baseUrl.trim(),
            p,
            i.authToken ?? "",
            i.timeoutMs,
            i.signal
          );
        throw new L(
          `Local-GSVI 未返回可用音频：${kc(c) || "JSON 响应中未找到音频"}`,
          "missing_audio"
        );
      }
      return await l.blob();
    }
  };
}
const Fc = {
  international: {
    tts: "https://api.minimaxi.com/v1/t2a_v2",
    voice: "https://api.minimaxi.com/v1/get_voice"
  },
  beijing: {
    tts: "https://api-bj.minimaxi.com/v1/t2a_v2",
    voice: "https://api-bj.minimaxi.com/v1/get_voice"
  }
}, Bc = /* @__PURE__ */ new Set([408, 409, 429, 500, 502, 503, 504]), Hc = /* @__PURE__ */ new Set([1e3, 1001, 1002, 1039]), Ks = 2, Kc = "tavern_multi_tts_voice_catalog_v1", zc = 1440 * 60 * 1e3;
function zn(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function Hi(e) {
  return e === "beijing" ? "beijing" : "international";
}
function zs(e) {
  return Fc[Hi(e)];
}
function xr(e, t) {
  return `${Kc}:${e}:${t.trim()}`;
}
function Wc(e) {
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
function Ws(e) {
  return `Bearer ${zn(e)}`;
}
function Jc(e) {
  const t = e.trim(), n = new Uint8Array(t.length / 2);
  for (let i = 0; i < t.length; i += 2)
    n[i / 2] = Number.parseInt(t.slice(i, i + 2), 16);
  return n;
}
function Xc(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i += 1)
    n[i] = t.charCodeAt(i);
  return n;
}
function Yc(e) {
  const t = e.trim();
  return /^[0-9a-fA-F]+$/.test(t) && t.length % 2 === 0 ? Jc(t) : Xc(t);
}
function Zc(e, t) {
  const i = `${t ?? ""} ${e}`.toLowerCase(), s = i.includes("japanese") ? "Japanese" : i.includes("english") ? "English" : i.includes("chinese") ? "Chinese" : i.includes("korean") ? "Korean" : i.includes("french") ? "French" : i.includes("german") ? "German" : i.includes("spanish") ? "Spanish" : "Unknown", o = i.includes("female") || i.includes("女") || i.includes("lady") || i.includes("girl") ? "Female" : i.includes("male") || i.includes("男") || i.includes("man") || i.includes("boy") ? "Male" : "Unknown";
  return { language: s, gender: o };
}
function Qc(e, t) {
  const n = t.trim();
  if (!n)
    return null;
  try {
    const i = localStorage.getItem(xr(e, n));
    if (!i)
      return null;
    const s = JSON.parse(i);
    return !s?.expires_at || Date.now() > s.expires_at ? null : s.items ?? null;
  } catch {
    return null;
  }
}
function qc(e, t, n) {
  const i = t.trim();
  i && localStorage.setItem(
    xr(e, i),
    JSON.stringify({
      expires_at: Date.now() + zc,
      items: n
    })
  );
}
function eu(e) {
  const t = zn(e.apiKey), n = e.groupId.trim(), i = e.voiceId.trim();
  if (!t || !n || !i)
    throw new L("MiniMax 引擎缺少必要配置：API Key / Group ID / Voice ID", "config");
  if (!e.text.trim())
    throw new L("MiniMax 合成文本为空", "config");
}
function tu(e) {
  return typeof e == "object" && e !== null;
}
function nu(e, t) {
  return Bc.has(e) || Hc.has(t);
}
function iu(e) {
  const t = fetch;
  return {
    id: "minimax",
    async checkHealth(n) {
      if (n.engine !== "minimax")
        throw new L("MiniMax 适配器收到了错误的引擎请求", "config");
      if (!zn(n.apiKey))
        return { ok: !1, message: "请先填写 MiniMax API Key" };
      try {
        return await this.listVoices({ ...n, forceRefresh: !0 }), { ok: !0, message: "MiniMax 服务可用" };
      } catch (s) {
        return { ok: !1, message: s instanceof Error ? s.message : String(s) };
      }
    },
    async listVoices(n) {
      if (n.engine !== "minimax")
        throw new L("MiniMax 适配器收到了错误的引擎请求", "config");
      const i = zn(n.apiKey);
      if (!i)
        throw new L("请先填写 API Key", "config");
      const s = Hi(n.region);
      if (!n.forceRefresh) {
        const g = Qc(s, n.groupId);
        if (g && g.length > 0)
          return g;
      }
      const o = zs(s).voice, l = await _t(
        t,
        o,
        {
          method: "POST",
          headers: {
            Authorization: Ws(i),
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ voice_type: "all" }),
          signal: n.signal
        },
        n.timeoutMs
      ), c = await l.json();
      if (!l.ok || (c.base_resp?.status_code ?? 0) !== 0)
        throw new L(
          c.base_resp?.status_msg ?? l.statusText ?? "拉取音色列表失败",
          "http",
          l.status
        );
      const m = [], p = (g, b = []) => {
        b.forEach((y) => {
          const O = Zc(y.voice_id, y.voice_name);
          m.push({
            id: y.voice_id,
            name: y.voice_name ?? y.voice_id,
            description: y.description,
            source: g,
            language: O.language,
            gender: O.gender
          });
        });
      };
      return p("system", c.system_voice ?? []), p("voice_cloning", c.voice_cloning ?? []), p("voice_generation", c.voice_generation ?? []), qc(s, n.groupId, m), m;
    },
    async synthesize(n) {
      if (n.engine !== "minimax")
        throw new L("MiniMax 适配器收到了错误的引擎请求", "config");
      eu(n);
      const i = Wc(n), s = zs(n.region).tts, o = {
        Authorization: Ws(n.apiKey),
        "Content-Type": "application/json"
      };
      ls("minimax", "synthesize", {
        model: i.model,
        voiceId: i.voice_setting.voice_id,
        region: Hi(n.region),
        groupId: n.groupId.trim(),
        text: n.text
      });
      let l = null;
      for (let r = 0; r <= Ks; r += 1) {
        const c = await _t(
          t,
          s,
          {
            method: "POST",
            headers: o,
            body: JSON.stringify(i),
            signal: n.signal
          },
          n.timeoutMs
        ), m = await c.json();
        if (!tu(m))
          throw new L("MiniMax 响应结构无效", "invalid_json");
        const p = m;
        if (!c.ok || (p.base_resp?.status_code ?? 0) !== 0) {
          const y = p.base_resp?.status_code ?? c.status, O = p.base_resp?.status_msg ?? c.statusText ?? "unknown error";
          if (l = `MiniMax 请求失败：code=${y}, msg=${O}`, nu(c.status, y) && r < Ks) {
            Ui("minimax", "retryable synthesize failure", {
              status: c.status,
              attempt: r
            }), await xc(250 * (r + 1));
            continue;
          }
          throw new L(l, "http", c.status);
        }
        const g = p.data?.audio ?? p.data?.audio_file ?? p.audio_file;
        if (!g)
          throw new L("MiniMax 响应中未找到音频字段", "missing_audio");
        const b = Yc(g);
        return new Blob([Uint8Array.from(b)], { type: "audio/mpeg" });
      }
      throw new L(l ?? "MiniMax 请求失败：未知错误", "http");
    }
  };
}
function Gn(e) {
  if (e === "minimax")
    return iu();
  if (e === "local_gsvi")
    return jc();
  if (e === "index_tts")
    return Pc();
  throw new L(`未知 TTS 引擎：${String(e)}`, "config");
}
const Ki = "tavern_multi_tts_say_rule", su = 1, ou = {
  system: 0,
  user: 1,
  assistant: 2
};
function yr(e) {
  const t = e.ttsEngine === "index_tts" ? e.indexTtsCharacterMappings : e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.characterMappings, n = [];
  for (const i of t) {
    const s = i.characterName.trim();
    s && !n.includes(s) && n.push(s);
  }
  return n;
}
function ru(e) {
  const t = yr(e);
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
function lu(e) {
  const t = yr(e).join("、") || "（未配置角色映射）";
  return `${e.injectTemplate.replaceAll("${target_characters}", t).replaceAll("${mapped_characters}", t)}

${ru(e)}`;
}
function Ei(e, t) {
  return !t.enabled || !t.injectEnabled ? (e.deleteExtensionPrompt(Ki), { applied: !1 }) : (e.setExtensionPrompt(
    Ki,
    lu(t),
    su,
    t.injectDepth,
    !1,
    ou[t.injectRole]
  ), { applied: !0, depth: t.injectDepth, role: t.injectRole });
}
function au(e) {
  e.deleteExtensionPrompt(Ki);
}
const Js = /<say(?:\s+char\s*=\s*(?:"([^"]*)"|“([^”]*)”))?\s*>([\s\S]*?)<\/say>/gi;
function cu(e) {
  const t = new RegExp(Js.source, Js.flags), n = [];
  let i, s = 0;
  for (; (i = t.exec(e)) !== null; ) {
    const o = (i[1] ?? i[2])?.trim(), l = i[3].trim();
    l && (n.push({ index: s, text: l, ...o ? { char: o } : {} }), s += 1);
  }
  return n;
}
const uu = /* @__PURE__ */ new Set([
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
]), br = /\(([a-z-]+)\)/gi, fu = /\([a-z-]+\)/gi;
function as(e) {
  return e.replace(/\s{2,}/g, " ").trim();
}
function du(e) {
  return as(
    e.replace(br, (t, n) => {
      const i = String(n).toLowerCase();
      return uu.has(i) ? `(${i})` : "";
    })
  );
}
function pu(e) {
  return as(e.replace(br, ""));
}
function mu(e) {
  return as(e.replace(fu, ""));
}
function gu(e, t) {
  const n = du(e);
  return t === "local_gsvi" || t === "index_tts" ? mu(n) : n;
}
async function hu(e, t) {
  if (e.length === 0)
    return;
  const n = Math.max(1, Math.min(Math.floor(t), e.length));
  let i = 0;
  const s = Array.from({ length: n }, async () => {
    for (; i < e.length; ) {
      const o = i;
      i += 1, await e[o]();
    }
  });
  await Promise.all(s);
}
const Sn = "data-tavern-multi-tts-rendered", cs = "data-tavern-multi-tts-swipe", li = "tavern-multi-tts-segment", Wn = "tavern-multi-tts-fallback-list";
function vu(e, t, n) {
  return `${e}:${t}:${n}`;
}
function Xs(e) {
  const t = e.split(":");
  if (t.length !== 3)
    return null;
  const n = Number(t[0]), i = Number(t[1]), s = Number(t[2]);
  return [n, i, s].every(Number.isFinite) ? { message_id: n, swipe_id: i, index: s } : null;
}
function Pn(e) {
  return document.querySelector(`#chat .mes[mesid="${e}"]`);
}
function _u(e) {
  return e.querySelector(".mes_text");
}
function Tr(e, t) {
  const n = e.getAttribute(Sn) === "true", i = e.querySelector(`.${li}`) !== null;
  return !n || !i ? !1 : t === void 0 ? !0 : e.getAttribute(cs) === String(t);
}
function Et(e = document) {
  e.querySelectorAll(`.${li}`).forEach((t) => {
    const n = t.querySelector(".tavern-multi-tts-text")?.textContent ?? "";
    t.replaceWith(document.createTextNode(n));
  }), e.querySelectorAll(`.${Wn}`).forEach((t) => t.remove()), e.querySelectorAll(`[${Sn}]`).forEach((t) => {
    t.removeAttribute(Sn), t.removeAttribute(cs);
  });
}
function st(e, t) {
  e.classList.remove("is-loading", "is-ready", "is-playing", "is-error"), t !== "idle" && e.classList.add(`is-${t}`);
  const n = e.querySelector(".tavern-multi-tts-indicator");
  n && (n.textContent = t === "loading" ? "⏳" : t === "ready" ? "▶" : t === "playing" ? "⏸" : t === "error" ? "⚠" : "▶");
}
function Ys(e) {
  return e.replace(/\s+/g, "").trim();
}
function xu(e, t, n, i) {
  const s = e.splitText(t);
  s.splitText(n), s.replaceWith(i);
}
function yu(e, t, n, i) {
  const s = [t, n].map((r) => r.trim()).filter(Boolean), o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let l = o.nextNode();
  for (; l; ) {
    const r = l.parentElement;
    if (r && !r.closest(`.${li}`) && !r.closest(`.${Wn}`) && !r.closest(".mes_buttons")) {
      const c = l.nodeValue ?? "";
      for (const m of s) {
        const p = c.indexOf(m);
        if (p >= 0)
          return xu(l, p, m.length, i), !0;
        if (Ys(c) === Ys(m))
          return l.replaceWith(i), !0;
      }
    }
    l = o.nextNode();
  }
  return !1;
}
function bu(e, t, n, i, s, o, l) {
  const r = vu(e, t, n.index), c = document.createElement("span");
  c.className = li, c.dataset.tavernMultiTtsKey = r;
  const m = document.createElement("span");
  m.className = "tavern-multi-tts-text", m.textContent = i;
  const p = document.createElement("span");
  p.className = "tavern-multi-tts-indicator", p.textContent = "▶";
  const g = document.createElement("span");
  g.className = "tavern-multi-tts-actions";
  const b = document.createElement("button");
  b.type = "button", b.className = "tavern-multi-tts-action", b.textContent = "下", g.append(b), c.append(m, p, g), st(c, "idle");
  let y = l.get(r) ?? null;
  const O = async () => {
    st(c, "loading");
    try {
      const A = await o.ensureAudio(n, i, s);
      return A.cancelled ? null : A.blob ? (st(c, "ready"), A.blob) : (st(c, "error"), null);
    } catch {
      return st(c, "error"), null;
    }
  }, w = async () => {
    const A = await O();
    A && (y?.stop(), y = lr(
      A,
      () => st(c, "playing"),
      () => {
        y = null, l.delete(r), st(c, "ready");
      },
      () => {
        y = null, l.delete(r), st(c, "error");
      },
      () => st(c, "ready")
    ), l.set(r, y));
  }, M = async () => {
    if (!y)
      return;
    const A = y.getState();
    if (A === "playing") {
      y.pause();
      return;
    }
    if (A === "paused")
      try {
        await y.resume();
      } catch {
      }
  };
  return c.addEventListener("click", (A) => {
    const j = A.target;
    if (j?.closest(".tavern-multi-tts-indicator")) {
      M();
      return;
    }
    j?.closest(".tavern-multi-tts-action") || w();
  }), b.addEventListener("click", (A) => {
    A.preventDefault(), A.stopPropagation(), (async () => {
      const j = await O();
      j && o.downloadAudio(j, e, n.index);
    })();
  }), c;
}
function Tu(e, t, n, i, s, o = 0) {
  if (Tr(e, o))
    return 0;
  e.getAttribute(Sn) === "true" && Et(e);
  const l = _u(e) ?? e, r = [];
  let c = 0;
  for (const m of n) {
    if (!m.displayText || !m.ttsText)
      continue;
    const p = bu(
      t,
      o,
      m,
      m.displayText,
      m.ttsText,
      i,
      s
    );
    yu(l, m.text, m.displayText, p) ? c += 1 : r.push(p);
  }
  if (l.querySelectorAll(`.${Wn}`).forEach((m) => m.remove()), r.length > 0) {
    const m = document.createElement("div");
    m.className = Wn, r.forEach((p) => m.append(p, document.createTextNode(" "))), l.append(m), c += r.length;
  }
  return c > 0 && (e.setAttribute(Sn, "true"), e.setAttribute(cs, String(o))), c;
}
function Kt(e, t) {
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const i = e[n];
    if (i && t(i))
      return i;
  }
}
function Sr(e, t) {
  return e.characterName.trim() === t && !!e.minimaxVoiceId.trim();
}
function wr(e, t) {
  return e.characterName.trim() === t && !!e.gsviVoiceId.trim() && !!e.gsviLanguage.trim() && !!e.gsviEmotion.trim();
}
function Er(e, t) {
  return e.characterName.trim() === t && !!e.indexTtsVoiceId.trim() && !!e.indexTtsLanguage;
}
function Ir(e, t) {
  const n = t?.trim() ?? "";
  return n ? e.ttsEngine === "index_tts" ? !!Kt(
    e.indexTtsCharacterMappings,
    (i) => Er(i, n)
  ) : e.ttsEngine === "local_gsvi" ? !!Kt(
    e.gsviCharacterMappings,
    (i) => wr(i, n)
  ) : e.ttsEngine === "minimax" ? !!Kt(e.characterMappings, (i) => Sr(i, n)) : !1 : !0;
}
function Cr(e, t) {
  const n = t?.trim() ?? "";
  if (e.ttsEngine === "index_tts") {
    const s = Kt(
      e.indexTtsCharacterMappings,
      (o) => Er(o, n)
    );
    return {
      engine: "index_tts",
      indexTtsVoiceId: s?.indexTtsVoiceId.trim() || e.indexTtsVoiceId.trim(),
      indexTtsLanguage: s?.indexTtsLanguage || e.indexTtsLanguage
    };
  }
  if (e.ttsEngine === "local_gsvi") {
    const s = Kt(
      e.gsviCharacterMappings,
      (o) => wr(o, n)
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
    minimaxVoiceId: Kt(
      e.characterMappings,
      (s) => Sr(s, n)
    )?.minimaxVoiceId?.trim() || e.voiceId.trim() || e.voiceCatalogSelectedId.trim()
  };
}
function Mr(e, t, n) {
  if (!Ir(e, n))
    return null;
  const i = Cr(e, n);
  return e.ttsEngine === "index_tts" && i.engine === "index_tts" ? !e.indexTtsBaseUrl.trim() || !i.indexTtsVoiceId || !i.indexTtsLanguage ? null : {
    engine: "index_tts",
    text: t,
    baseUrl: e.indexTtsBaseUrl,
    voiceId: i.indexTtsVoiceId,
    language: i.indexTtsLanguage,
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
function Zs(e) {
  return e.ttsEngine === "index_tts" ? e.indexTtsBaseUrl.trim() ? {
    engine: "index_tts",
    text: "catalog",
    baseUrl: e.indexTtsBaseUrl,
    voiceId: e.indexTtsVoiceId.trim() || "catalog",
    language: e.indexTtsLanguage,
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
function Su(e, t, n) {
  const i = Cr(e, n);
  return e.ttsEngine === "index_tts" ? {
    text: t,
    engine: "index_tts",
    indexTts: {
      origin: Hs(e.indexTtsBaseUrl),
      model: hr,
      voiceId: i.indexTtsVoiceId ?? "",
      language: i.indexTtsLanguage ?? e.indexTtsLanguage,
      format: "wav"
    }
  } : e.ttsEngine === "local_gsvi" ? {
    text: t,
    engine: "local_gsvi",
    localGsvi: {
      origin: Hs(e.localGsviBaseUrl),
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
const Qs = 15;
function wu(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = [];
  let o = !1, l = !1, r = 0;
  function c() {
    return e.getSettings();
  }
  function m() {
    l || !document.querySelector(".minimax-tts-segment") || (l = !0, e.warn?.("检测到旧酒馆助手 Multi-TTS 仍在装饰消息。请只启用其中一个，避免重复生成。"));
  }
  function p(I) {
    return gr(I) && I.code === "cancelled";
  }
  function g(I, P) {
    return n.get(I)?.token === P;
  }
  function b(I) {
    for (const [P, k] of n)
      I(k) && (k.controller.abort(), n.delete(P));
  }
  function y() {
    b(() => !0);
  }
  function O(I, P) {
    b(
      (k) => k.message_id === I && (P === void 0 || k.swipe_id !== P)
    );
  }
  function w(I, P, k) {
    n.get(I)?.controller.abort(), r += 1;
    const X = {
      token: r,
      message_id: P,
      swipe_id: k,
      controller: new AbortController()
    };
    return n.set(I, X), X;
  }
  function M(I, P) {
    g(I, P) && n.delete(I);
  }
  async function A(I, P, k, H, X) {
    const _e = w(I, P, k);
    try {
      const De = c(), ie = Mr(De, H, X);
      if (!ie)
        return { blob: null };
      ie.signal = _e.controller.signal;
      const ge = Su(De, H, X), we = await Fa(ge);
      if (!g(I, _e.token) || _e.controller.signal.aborted)
        return { cancelled: !0 };
      const ke = i.get(we);
      if (ke)
        return { blob: ke };
      const Me = await Ja(we);
      if (!g(I, _e.token) || _e.controller.signal.aborted)
        return { cancelled: !0 };
      if (Me)
        return i.set(we, Me), { blob: Me };
      const d = await Gn(ie.engine).synthesize(ie);
      return d && (await Xa(we, d), i.set(we, d)), !g(I, _e.token) || _e.controller.signal.aborted ? { cancelled: !0 } : { blob: d };
    } catch (De) {
      return p(De) || !g(I, _e.token) || _e.controller.signal.aborted ? { cancelled: !0 } : (console.error(`${Te} synthesize failed`), { blob: null });
    } finally {
      M(I, _e.token);
    }
  }
  function j(I, P) {
    if (typeof I.swipe_id == "number" && Number.isFinite(I.swipe_id))
      return I.swipe_id;
    const k = Number(P?.getAttribute("swipeid"));
    return Number.isFinite(k) ? k : 0;
  }
  function W(I, P) {
    for (const [k, H] of t) {
      const X = Xs(k);
      X && X.message_id === I && X.swipe_id !== P && (H.stop(), t.delete(k));
    }
  }
  function G(I) {
    for (const [P, k] of t) {
      const H = Xs(P);
      H && H.message_id === I && (k.stop(), t.delete(P));
    }
  }
  function ce(I, P, k) {
    if (typeof I.swipe_id != "number" || !Number.isFinite(I.swipe_id))
      return !0;
    const H = P.getAttribute("swipeid");
    if (H === null || H === "")
      return !0;
    const X = Number(H);
    return Number.isFinite(X) && X === k && X === I.swipe_id;
  }
  function Ce(I, P) {
    O(I, P), W(I, P);
    const k = e.findMessageElement(I) ?? Pn(I);
    k && Et(k);
  }
  function me(I, P = {}) {
    const k = P.attempt ?? 0, H = c();
    if (!H.enabled)
      return;
    const X = e.getChatMessage(I);
    if (!X || X.is_user || X.is_system)
      return;
    const _e = typeof X.mes == "string" ? X.mes : "", De = cu(_e).filter(
      (ae) => Ir(H, ae.char)
    ), ie = e.findMessageElement(I) ?? Pn(I);
    if (De.length === 0) {
      ie && Et(ie);
      return;
    }
    if (!ie) {
      k < Qs && window.setTimeout(() => me(I, { ...P, attempt: k + 1 }), 120);
      return;
    }
    const ge = j(X, ie);
    if (!ce(X, ie, ge)) {
      k < Qs && window.setTimeout(() => me(I, { ...P, attempt: k + 1 }), 120);
      return;
    }
    if (Tr(ie, ge))
      return;
    ie.getAttribute("data-tavern-multi-tts-rendered") === "true" && Et(ie), W(I, ge), m();
    const we = De.map((ae) => ({
      ...ae,
      displayText: pu(ae.text),
      ttsText: gu(ae.text, H.ttsEngine)
    })), ke = [], Me = (ae) => P.skipPrefetch ? !1 : H.prefetchMode === "auto_all" ? !0 : H.prefetchMode === "auto_first_n" ? ae < H.prefetchFirstCount : !1;
    Tu(
      ie,
      I,
      we,
      {
        ensureAudio: async (ae, d, u) => {
          const a = `${I}:${ge}:${ae.index}`;
          return await A(a, I, ge, u, ae.char);
        },
        downloadAudio(ae, d, u) {
          Qa(ae, Za(d, u));
        }
      },
      t,
      ge
    ), we.forEach((ae, d) => {
      Me(d) && ae.ttsText && ke.push(async () => {
        const u = `${I}:${ge}:${ae.index}`;
        try {
          await A(u, I, ge, ae.ttsText, ae.char);
        } catch {
        }
      });
    }), ke.length > 0 && hu(ke, H.maxConcurrency);
  }
  function Ge(...I) {
    const P = Number(I[0]);
    Number.isFinite(P) && window.setTimeout(() => me(P), 0);
  }
  function en(...I) {
    const P = Number(I[0]);
    if (!Number.isFinite(P))
      return;
    O(P);
    const k = e.findMessageElement(P) ?? Pn(P);
    k && Et(k), G(P), window.setTimeout(() => me(P), 0);
  }
  function se(...I) {
    const P = Number(I[0]);
    if (!Number.isFinite(P))
      return;
    const k = e.findMessageElement(P) ?? Pn(P), H = e.getChatMessage(P), X = H ? j(H, k) : 0;
    Ce(P, X), window.setTimeout(() => me(P, { skipPrefetch: !0 }), 0);
  }
  function He(I = {}) {
    document.querySelectorAll("#chat .mes[mesid]").forEach((P) => {
      const k = Number(P.getAttribute("mesid"));
      Number.isFinite(k) && me(k, I);
    });
  }
  function $e(I, P) {
    e.eventSource.on(I, P), s.push(() => e.eventSource.removeListener(I, P));
  }
  function Lt() {
    o || (o = !0, Ei(e, c()), $e(e.eventNames.messageReceived, Ge), $e(e.eventNames.messageRendered, Ge), $e(e.eventNames.messageUpdated, en), $e(e.eventNames.messageSwiped, se), $e(e.eventNames.moreMessagesLoaded, () => {
      He({ skipPrefetch: !0 });
    }), $e(e.eventNames.chatChanged, () => {
      y(), t.forEach((I) => I.stop()), t.clear(), Ln(), Ei(e, c()), He({ skipPrefetch: !0 });
    }), He({ skipPrefetch: !0 }), console.info(`${Te} chat runtime started`));
  }
  function yt() {
    s.splice(0).forEach((I) => I()), y(), t.forEach((I) => I.stop()), t.clear(), i.clear(), Ln(), au(e), Et(document), o = !1, console.info(`${Te} chat runtime stopped`);
  }
  function tn() {
    y(), t.forEach((I) => I.stop()), t.clear(), Ln(), Et(document);
  }
  function bt() {
    Ei(e, c());
  }
  function Re() {
    tn(), c().enabled && He({ skipPrefetch: !0 });
  }
  function Oe() {
    bt(), Re();
  }
  return { start: Lt, stop: yt, syncFromSettings: Oe, syncInjection: bt, refreshDecorations: Re, decorate: me };
}
function vt(e) {
  return typeof e == "object" && e !== null;
}
function Eu(e) {
  if (vt(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function Iu(e) {
  return !vt(e) || typeof e.getContext != "function" ? null : e;
}
function Cu(e) {
  if (!vt(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!vt(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = Eu(e.eventSource), n = vt(e.eventTypes) ? e.eventTypes : vt(e.event_types) ? e.event_types : void 0, i = n ? {
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
    eventTypes: i,
    chat: e.chat,
    setExtensionPrompt: typeof e.setExtensionPrompt == "function" ? e.setExtensionPrompt : void 0,
    extensionPrompts: vt(e.extensionPrompts) ? e.extensionPrompts : void 0
  };
}
function Ar() {
  const e = Iu(globalThis.SillyTavern);
  if (!e)
    throw new Error(
      "SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行"
    );
  return Cu(e.getContext());
}
function Pr() {
  const e = Ar();
  return {
    readRawSettings() {
      return e.extensionSettings[yi];
    },
    writeSettings(t) {
      e.extensionSettings[yi] = t, e.saveSettingsDebounced();
    },
    removeSettings() {
      delete e.extensionSettings[yi], e.saveSettingsDebounced();
    },
    findSettingsRoot: gc,
    onAppReady(t) {
      const n = e.eventTypes?.APP_READY ?? "app_ready", i = e.eventSource;
      if (!i)
        throw new Error("SillyTavern eventSource 缺少 on/removeListener，无法注册 APP_READY 监听");
      return i.on(n, t), () => {
        i.removeListener(n, t);
      };
    },
    onPageHide(t) {
      const n = () => t();
      return window.addEventListener("pagehide", n), () => window.removeEventListener("pagehide", n);
    }
  };
}
function Mu(e) {
  return vt(e) ? {
    mes: typeof e.mes == "string" ? e.mes : void 0,
    is_user: typeof e.is_user == "boolean" ? e.is_user : void 0,
    is_system: typeof e.is_system == "boolean" ? e.is_system : void 0,
    swipe_id: typeof e.swipe_id == "number" ? e.swipe_id : void 0
  } : null;
}
function Au(e) {
  const t = Ar();
  if (!t.eventSource)
    throw new Error("SillyTavern eventSource 不可用，无法监听消息事件");
  const n = t.eventSource;
  return {
    getSettings: e,
    getChatMessage(i) {
      return Array.isArray(t.chat) ? Mu(t.chat[i]) : null;
    },
    findMessageElement(i) {
      return document.querySelector(`#chat .mes[mesid="${i}"]`);
    },
    setExtensionPrompt(i, s, o, l, r, c) {
      if (!t.setExtensionPrompt)
        throw new Error("SillyTavern.setExtensionPrompt 不可用，无法注入提示词");
      t.setExtensionPrompt(i, s, o, l, r, c);
    },
    deleteExtensionPrompt(i) {
      if (t.extensionPrompts && i in t.extensionPrompts) {
        delete t.extensionPrompts[i];
        return;
      }
      t.setExtensionPrompt?.(i, "", 1, 0, !1, 0);
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
    warn(i) {
      const s = globalThis.toastr;
      if (typeof s?.warning == "function") {
        s.warning(i, Te);
        return;
      }
      console.warn(`${Te} ${i}`);
    }
  };
}
function Pu(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    const i = n.trim();
    i && t.set(i, (t.get(i) ?? 0) + 1);
  }), [...t.entries()].filter(([, n]) => n > 1).map(([n]) => n);
}
function Ii(e) {
  return [...e].sort((t, n) => t.name.localeCompare(n.name));
}
function Ci(e, t, n, i) {
  const s = t.trim();
  if (!s)
    return { error: "请先填写存档名称" };
  if (n.length === 0)
    return { error: "当前没有可保存的完整映射" };
  const o = e.map((c) => ({
    name: c.name,
    mappings: [...c.mappings]
  })), l = o.findIndex((c) => c.name === s);
  if (l >= 0 && !i)
    return { error: `存档「${s}」已存在` };
  const r = { name: s, mappings: [...n] };
  return l >= 0 ? (o[l] = r, { presets: o, message: `已更新存档：${s}` }) : (o.push(r), { presets: o, message: `已保存存档：${s}` });
}
function Mi(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const i = e.find((s) => s.name === n);
  return i ? { mappings: [...i.mappings] } : { error: `未找到存档：${n}` };
}
function Ai(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const i = e.filter((s) => s.name !== n);
  return i.length === e.length ? { error: `未找到存档：${n}` } : { presets: i, message: `已删除存档：${n}` };
}
const Ru = {
  ja: "おはようございます。これは Tavern Multi-TTS のテスト音声です。",
  zh: "你好，这是 Tavern Multi-TTS 的测试语音。",
  en: "Hello, this is a Tavern Multi-TTS test voice."
}, Vu = {
  ja: "こんにちは、これは GSVI の音声参照用サンプルです。",
  zh: "你好，这是一段 GSVI 的语音参考音频。",
  en: "Hello, this is a GSVI reference voice sample."
}, Nu = {
  ja: "こんにちは、これは IndexTTS のテスト音声です。",
  zh: "你好，这是 IndexTTS 的测试语音。",
  en: "Hello, this is an IndexTTS test voice."
}, Lu = [
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
], Gu = [
  "不切",
  "凑四句一切",
  "凑50字一切",
  "按中文句号。切",
  "按英文句号.切",
  "按标点符号切"
];
function $u(e, t) {
  return e === "local_gsvi" ? Vu[t] : e === "index_tts" ? Nu[t] : Ru[t];
}
function Ou() {
  return {
    search: "",
    language: "all",
    gender: "all",
    source: "all"
  };
}
function Pi() {
  return {
    voices: [],
    filter: Ou()
  };
}
function qs() {
  return {
    minimax: Pi(),
    local_gsvi: Pi(),
    index_tts: Pi()
  };
}
function Du(e, t) {
  return t === "minimax" ? e.minimax : t === "local_gsvi" ? e.local_gsvi : e.index_tts;
}
function ku(e, t, n) {
  const i = Du(e, t);
  return i.voices = [...n], e;
}
function Uu(e) {
  return [
    ...new Set(e.map((t) => t.language).filter((t) => !!t))
  ].sort();
}
function ju(e, t) {
  const n = t.search.trim().toLowerCase();
  return e.filter((i) => t.language !== "all" && i.language !== t.language || t.gender !== "all" && i.gender !== t.gender || t.source !== "all" && i.source !== t.source ? !1 : n ? [i.id, i.name, ...i.description ?? []].join(" ").toLowerCase().includes(n) : !0);
}
function eo(e) {
  const t = [e.language, e.gender, e.source].filter(Boolean);
  return t.length > 0 ? `${e.name} (${t.join(" / ")})` : e.name;
}
function to(e) {
  return e?.languages ?? [];
}
function no(e, t) {
  const n = t.trim();
  return !e || !n ? [] : e.emotionsByLanguage?.[n] ?? [];
}
function io(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(2)} MB`;
}
const Fu = { class: "tavern-multi-tts-settings" }, Bu = { class: "inline-drawer" }, Hu = { class: "inline-drawer-toggle inline-drawer-header" }, Ku = { class: "inline-drawer-content" }, zu = { class: "tavern-multi-tts-toolbar" }, Wu = { class: "tavern-multi-tts-version" }, Ju = { class: "tavern-multi-tts-row" }, Xu = { class: "checkbox_label" }, Yu = { class: "tavern-multi-tts-field" }, Zu = { class: "tavern-multi-tts-grid" }, Qu = { class: "tavern-multi-tts-field" }, qu = { class: "tavern-multi-tts-field" }, ef = { class: "tavern-multi-tts-field" }, tf = { class: "tavern-multi-tts-actions" }, nf = ["disabled"], sf = ["disabled"], of = { class: "tavern-multi-tts-grid" }, rf = ["value"], lf = { class: "tavern-multi-tts-field" }, af = ["value"], cf = { value: "" }, uf = ["value"], ff = { class: "tavern-multi-tts-grid" }, df = { class: "tavern-multi-tts-field" }, pf = ["value"], mf = { class: "tavern-multi-tts-field" }, gf = { class: "tavern-multi-tts-field" }, hf = { class: "tavern-multi-tts-field" }, vf = { class: "tavern-multi-tts-actions" }, _f = ["disabled"], xf = ["disabled"], yf = ["disabled"], bf = { class: "tavern-multi-tts-grid" }, Tf = { class: "tavern-multi-tts-field" }, Sf = { value: "" }, wf = ["value"], Ef = ["value"], If = { class: "tavern-multi-tts-field" }, Cf = ["value"], Mf = { class: "tavern-multi-tts-field" }, Af = { class: "tavern-multi-tts-actions" }, Pf = ["disabled"], Rf = { class: "tavern-multi-tts-grid" }, Vf = { class: "tavern-multi-tts-field" }, Nf = { value: "" }, Lf = ["value"], Gf = { class: "tavern-multi-tts-field" }, $f = ["value"], Of = { class: "tavern-multi-tts-field" }, Df = ["value"], kf = { class: "tavern-multi-tts-field" }, Uf = {
  class: "tavern-multi-tts-section",
  open: ""
}, jf = { class: "tavern-multi-tts-actions" }, Ff = ["value"], Bf = ["disabled"], Hf = ["disabled"], Kf = ["onUpdate:modelValue"], zf = ["onUpdate:modelValue"], Wf = ["value", "onChange"], Jf = ["value"], Xf = ["disabled", "onClick"], Yf = ["onClick"], Zf = ["onUpdate:modelValue"], Qf = ["onUpdate:modelValue"], qf = { value: "" }, ed = ["value"], td = ["value"], nd = ["onUpdate:modelValue"], id = ["value"], sd = ["disabled", "onClick"], od = ["onClick"], rd = ["onUpdate:modelValue"], ld = ["onUpdate:modelValue"], ad = { value: "" }, cd = ["value"], ud = ["onUpdate:modelValue"], fd = ["value"], dd = ["onUpdate:modelValue"], pd = ["value"], md = ["disabled", "onClick"], gd = ["onClick"], hd = {
  key: 3,
  class: "tavern-multi-tts-hint"
}, vd = { class: "tavern-multi-tts-row" }, _d = { class: "checkbox_label" }, xd = ["disabled"], yd = { class: "tavern-multi-tts-section" }, bd = { class: "tavern-multi-tts-field" }, Td = {
  key: 0,
  class: "tavern-multi-tts-grid"
}, Sd = {
  key: 0,
  class: "tavern-multi-tts-field"
}, wd = { class: "tavern-multi-tts-field" }, Ed = { class: "tavern-multi-tts-field" }, Id = { class: "tavern-multi-tts-field" }, Cd = { class: "tavern-multi-tts-field" }, Md = { class: "tavern-multi-tts-field" }, Ad = { class: "tavern-multi-tts-grid" }, Pd = { class: "tavern-multi-tts-field" }, Rd = ["value"], Vd = { class: "tavern-multi-tts-field" }, Nd = ["value"], Ld = { class: "tavern-multi-tts-field" }, Gd = { class: "tavern-multi-tts-actions" }, $d = ["disabled"], Od = ["disabled"], Dd = { class: "tavern-multi-tts-hint" }, kd = /* @__PURE__ */ Cl({
  __name: "settings-panel",
  props: {
    displayName: {},
    version: {},
    settings: {},
    onSettingsChange: { type: Function }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ $n(Ft(t.settings)), i = /* @__PURE__ */ $t(""), s = /* @__PURE__ */ $t(!1), o = /* @__PURE__ */ $n(qs()), l = /* @__PURE__ */ $t(""), r = /* @__PURE__ */ $t(""), c = /* @__PURE__ */ $t(0), m = /* @__PURE__ */ $t(0), p = xe(() => n.ttsEngine === "minimax"), g = xe(() => n.ttsEngine === "local_gsvi"), b = xe(() => n.ttsEngine === "index_tts"), y = xe(() => o.minimax.voices), O = xe(() => o.local_gsvi.voices), w = xe(() => o.index_tts.voices), M = xe(
      () => ju(o.minimax.voices, o.minimax.filter)
    ), A = xe(() => Uu(o.minimax.voices)), j = xe(
      () => o.local_gsvi.voices.find((u) => u.id === n.localGsviModel)
    ), W = xe(() => to(j.value)), G = xe(
      () => no(j.value, n.localGsviLanguage)
    ), ce = xe(() => b.value ? n.indexTtsCharacterMappings.length : g.value ? n.gsviCharacterMappings.length : n.characterMappings.length), Ce = xe(() => b.value ? Ii(n.indexTtsCharacterMappingPresets) : g.value ? Ii(n.gsviCharacterMappingPresets) : Ii(n.characterMappingPresets)), me = xe(
      () => Pu(
        (b.value ? n.indexTtsCharacterMappings : g.value ? n.gsviCharacterMappings : n.characterMappings).map((u) => u.characterName)
      )
    ), Ge = xe(() => p.value ? "测试默认音色（消耗额度）" : g.value ? "测试默认模型" : "测试默认音色"), en = xe(() => io(m.value));
    Sl(
      n,
      () => {
        t.onSettingsChange(Ft(n));
      },
      { deep: !0 }
    );
    function se(u) {
      i.value = u;
    }
    function He(u, a) {
      if (gr(u)) {
        se(u.message);
        return;
      }
      se(u instanceof Error ? u.message : a);
    }
    function $e() {
      return n.characterMappings.map((u) => ({
        characterName: u.characterName.trim(),
        minimaxVoiceId: u.minimaxVoiceId.trim()
      })).filter((u) => u.characterName && u.minimaxVoiceId);
    }
    function Lt() {
      return n.gsviCharacterMappings.map((u) => ({
        characterName: u.characterName.trim(),
        gsviVoiceId: u.gsviVoiceId.trim(),
        gsviLanguage: u.gsviLanguage.trim(),
        gsviEmotion: u.gsviEmotion.trim()
      })).filter(
        (u) => u.characterName && u.gsviVoiceId && u.gsviLanguage && u.gsviEmotion
      );
    }
    function yt() {
      return n.indexTtsCharacterMappings.map((u) => ({
        characterName: u.characterName.trim(),
        indexTtsVoiceId: u.indexTtsVoiceId.trim(),
        indexTtsLanguage: u.indexTtsLanguage
      })).filter((u) => u.characterName && u.indexTtsVoiceId && u.indexTtsLanguage);
    }
    function tn() {
      return n.ttsEngine === "minimax" ? "请先填写 API Key" : n.ttsEngine === "local_gsvi" ? "请先填写 Local-GSVI 服务地址" : "请先填写 IndexTTS 服务地址";
    }
    function bt(u) {
      return n.ttsEngine === "local_gsvi" ? `已加载 ${u} 个模型` : `已加载 ${u} 个音色`;
    }
    async function Re(u, a, f) {
      if (!s.value) {
        s.value = !0, se(a);
        try {
          await u();
        } catch (_) {
          He(_, f);
        } finally {
          s.value = !1;
        }
      }
    }
    async function Oe(u = !1) {
      await Re(
        async () => {
          const a = Zs(n);
          if (!a) {
            se(tn());
            return;
          }
          a.engine === "minimax" && (a.forceRefresh = u);
          const f = n.ttsEngine, _ = await Gn(f).listVoices(a);
          ku(o, f, _), se(bt(_.length));
        },
        "正在拉取列表…",
        "拉取列表失败"
      );
    }
    function I(u) {
      n.voiceId = u, n.voiceCatalogSelectedId = u;
    }
    function P() {
      if (p.value) {
        n.characterMappings.push({ characterName: "", minimaxVoiceId: "" });
        return;
      }
      if (g.value) {
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
    function k(u) {
      if (p.value) {
        n.characterMappings.splice(u, 1);
        return;
      }
      if (g.value) {
        n.gsviCharacterMappings.splice(u, 1);
        return;
      }
      n.indexTtsCharacterMappings.splice(u, 1);
    }
    function H() {
      const u = l.value, a = Ce.value.some((_) => _.name === u.trim());
      if (a && !window.confirm(`存档「${u.trim()}」已存在，要覆盖吗？`))
        return;
      const f = p.value ? Ci(n.characterMappingPresets, u, $e(), a) : g.value ? Ci(n.gsviCharacterMappingPresets, u, Lt(), a) : Ci(
        n.indexTtsCharacterMappingPresets,
        u,
        yt(),
        a
      );
      if ("error" in f) {
        se(f.error);
        return;
      }
      p.value ? n.characterMappingPresets = f.presets : g.value ? n.gsviCharacterMappingPresets = f.presets : n.indexTtsCharacterMappingPresets = f.presets, r.value = u.trim(), se(f.message);
    }
    function X() {
      const u = p.value ? Mi(n.characterMappingPresets, r.value) : g.value ? Mi(n.gsviCharacterMappingPresets, r.value) : Mi(n.indexTtsCharacterMappingPresets, r.value);
      if ("error" in u) {
        se(u.error);
        return;
      }
      (p.value ? $e().length > 0 : g.value ? Lt().length > 0 : yt().length > 0) && !window.confirm("读取存档会覆盖当前映射，确定继续吗？") || (p.value ? n.characterMappings = u.mappings : g.value ? n.gsviCharacterMappings = u.mappings : n.indexTtsCharacterMappings = u.mappings, se(`已读取存档：${r.value}`));
    }
    function _e() {
      if (!window.confirm(`确定删除存档「${r.value}」吗？`))
        return;
      const u = p.value ? Ai(n.characterMappingPresets, r.value) : g.value ? Ai(n.gsviCharacterMappingPresets, r.value) : Ai(n.indexTtsCharacterMappingPresets, r.value);
      if ("error" in u) {
        se(u.error);
        return;
      }
      p.value ? n.characterMappingPresets = u.presets : g.value ? n.gsviCharacterMappingPresets = u.presets : n.indexTtsCharacterMappingPresets = u.presets, r.value = "", se(u.message);
    }
    async function De() {
      await Re(
        async () => {
          const u = Zs(n);
          if (!u || u.engine !== "index_tts") {
            se("请先填写 IndexTTS 服务地址");
            return;
          }
          const a = await Gn("index_tts").checkHealth(u);
          se(a.message);
        },
        "正在检查 IndexTTS 连接…",
        "检查 IndexTTS 连接失败"
      );
    }
    async function ie(u) {
      await Re(
        async () => {
          const a = $u(n.ttsEngine, n.testLanguage), f = Mr(n, a, u);
          if (!f) {
            se(
              u ? `角色「${u}」未完整映射，无法测试` : "请先补全当前引擎的默认音色/模型后再测试"
            );
            return;
          }
          const _ = await Gn(n.ttsEngine).synthesize(f);
          lr(_), se(u ? `正在试听「${u}」` : "正在试听默认音色");
        },
        "正在合成测试语音…",
        "测试语音失败"
      );
    }
    async function ge() {
      await Re(
        async () => {
          const u = await Ya();
          c.value = u.count, m.value = u.totalBytes, se(`缓存 ${u.count} 条，${io(u.totalBytes)}`);
        },
        "正在读取缓存…",
        "读取缓存失败"
      );
    }
    async function we() {
      window.confirm("确定清空本扩展的音频缓存吗？") && await Re(
        async () => {
          await rr(), c.value = 0, m.value = 0, se("已清空音频缓存");
        },
        "正在清空缓存…",
        "清空缓存失败"
      );
    }
    function ke() {
      window.confirm("确定恢复默认设置吗？当前映射和密钥都会被清空。") && (Object.assign(n, Ft(xt)), Object.assign(o, qs()), se("已恢复默认设置"));
    }
    function Me() {
      W.value.includes(n.localGsviLanguage) || (n.localGsviLanguage = "", n.localGsviEmotion = "");
    }
    function ae(u) {
      return to(o.local_gsvi.voices.find((a) => a.id === u));
    }
    function d(u, a) {
      return no(
        o.local_gsvi.voices.find((f) => f.id === u),
        a
      );
    }
    return ge().catch((u) => He(u, "读取缓存失败")), (u, a) => (V(), N("div", Fu, [
      h("div", Bu, [
        h("div", Hu, [
          h("b", null, F(e.displayName), 1),
          a[42] || (a[42] = h("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        h("div", Ku, [
          h("div", zu, [
            h("small", Wu, F(e.version), 1),
            h("small", {
              class: qn(["tavern-multi-tts-status", { "is-busy": s.value }])
            }, F(i.value || "更改会自动保存"), 3)
          ]),
          h("div", Ju, [
            h("label", Xu, [
              U(h("input", {
                "onUpdate:modelValue": a[0] || (a[0] = (f) => n.enabled = f),
                type: "checkbox"
              }, null, 512), [
                [Ds, n.enabled]
              ]),
              a[43] || (a[43] = h("span", null, "启用", -1))
            ]),
            U(h("select", {
              "onUpdate:modelValue": a[1] || (a[1] = (f) => n.ttsEngine = f),
              class: "text_pole tavern-multi-tts-engine"
            }, [...a[44] || (a[44] = [
              h("option", { value: "minimax" }, "MiniMax", -1),
              h("option", { value: "local_gsvi" }, "Local-GSVI", -1),
              h("option", { value: "index_tts" }, "IndexTTS-2.5", -1)
            ])], 512), [
              [le, n.ttsEngine]
            ])
          ]),
          p.value ? (V(), N(K, { key: 0 }, [
            h("label", Yu, [
              a[45] || (a[45] = q(" API Key ", -1)),
              U(h("input", {
                "onUpdate:modelValue": a[2] || (a[2] = (f) => n.apiKey = f),
                class: "text_pole",
                type: "password",
                autocomplete: "off"
              }, null, 512), [
                [de, n.apiKey]
              ])
            ]),
            h("div", Zu, [
              h("label", Qu, [
                a[46] || (a[46] = q(" Group ID ", -1)),
                U(h("input", {
                  "onUpdate:modelValue": a[3] || (a[3] = (f) => n.groupId = f),
                  class: "text_pole",
                  type: "text"
                }, null, 512), [
                  [de, n.groupId]
                ])
              ]),
              h("label", qu, [
                a[48] || (a[48] = q(" 区域 ", -1)),
                U(h("select", {
                  "onUpdate:modelValue": a[4] || (a[4] = (f) => n.minimaxRegion = f),
                  class: "text_pole"
                }, [...a[47] || (a[47] = [
                  h("option", { value: "international" }, "国际", -1),
                  h("option", { value: "beijing" }, "北京", -1)
                ])], 512), [
                  [le, n.minimaxRegion]
                ])
              ])
            ]),
            h("label", ef, [
              a[49] || (a[49] = q(" 默认音色 ", -1)),
              U(h("input", {
                "onUpdate:modelValue": a[5] || (a[5] = (f) => n.voiceId = f),
                class: "text_pole",
                type: "text",
                placeholder: "无 char 的台词使用"
              }, null, 512), [
                [de, n.voiceId]
              ])
            ]),
            h("div", tf, [
              h("button", {
                class: "menu_button",
                type: "button",
                disabled: s.value,
                onClick: a[6] || (a[6] = (f) => Oe(!1))
              }, " 拉取音色 ", 8, nf),
              h("button", {
                class: "menu_button",
                type: "button",
                disabled: s.value,
                onClick: a[7] || (a[7] = (f) => Oe(!0))
              }, " 刷新音色 ", 8, sf)
            ]),
            y.value.length > 0 ? (V(), N(K, { key: 0 }, [
              h("div", of, [
                U(h("input", {
                  "onUpdate:modelValue": a[8] || (a[8] = (f) => o.minimax.filter.search = f),
                  class: "text_pole",
                  type: "search",
                  placeholder: "搜索音色"
                }, null, 512), [
                  [de, o.minimax.filter.search]
                ]),
                U(h("select", {
                  "onUpdate:modelValue": a[9] || (a[9] = (f) => o.minimax.filter.language = f),
                  class: "text_pole"
                }, [
                  a[50] || (a[50] = h("option", { value: "all" }, "全部语言", -1)),
                  (V(!0), N(K, null, fe(A.value, (f) => (V(), N("option", {
                    key: f,
                    value: f
                  }, F(f), 9, rf))), 128))
                ], 512), [
                  [le, o.minimax.filter.language]
                ]),
                U(h("select", {
                  "onUpdate:modelValue": a[10] || (a[10] = (f) => o.minimax.filter.gender = f),
                  class: "text_pole"
                }, [...a[51] || (a[51] = [
                  h("option", { value: "all" }, "全部性别", -1),
                  h("option", { value: "Female" }, "Female", -1),
                  h("option", { value: "Male" }, "Male", -1),
                  h("option", { value: "Unknown" }, "Unknown", -1)
                ])], 512), [
                  [le, o.minimax.filter.gender]
                ]),
                U(h("select", {
                  "onUpdate:modelValue": a[11] || (a[11] = (f) => o.minimax.filter.source = f),
                  class: "text_pole"
                }, [...a[52] || (a[52] = [
                  h("option", { value: "all" }, "全部来源", -1),
                  h("option", { value: "system" }, "system", -1),
                  h("option", { value: "voice_cloning" }, "voice_cloning", -1),
                  h("option", { value: "voice_generation" }, "voice_generation", -1)
                ])], 512), [
                  [le, o.minimax.filter.source]
                ])
              ]),
              h("label", lf, [
                a[53] || (a[53] = q(" 从列表填入默认音色 ", -1)),
                h("select", {
                  class: "text_pole",
                  value: n.voiceId,
                  onChange: a[12] || (a[12] = (f) => I(f.target.value))
                }, [
                  h("option", cf, F(M.value.length) + " 条可选", 1),
                  (V(!0), N(K, null, fe(M.value, (f) => (V(), N("option", {
                    key: f.id,
                    value: f.id
                  }, F(pt(eo)(f)), 9, uf))), 128))
                ], 40, af)
              ])
            ], 64)) : Je("", !0),
            h("div", ff, [
              h("label", df, [
                a[54] || (a[54] = q(" 模型 ", -1)),
                U(h("select", {
                  "onUpdate:modelValue": a[13] || (a[13] = (f) => n.model = f),
                  class: "text_pole"
                }, [
                  (V(!0), N(K, null, fe(pt(ur), (f) => (V(), N("option", {
                    key: f,
                    value: f
                  }, F(f), 9, pf))), 128))
                ], 512), [
                  [le, n.model]
                ])
              ]),
              h("label", mf, [
                q(" 语速 " + F(n.speed.toFixed(2)) + " ", 1),
                U(h("input", {
                  "onUpdate:modelValue": a[14] || (a[14] = (f) => n.speed = f),
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
              h("label", gf, [
                q(" 音量 " + F(n.vol.toFixed(2)) + " ", 1),
                U(h("input", {
                  "onUpdate:modelValue": a[15] || (a[15] = (f) => n.vol = f),
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
            ])
          ], 64)) : b.value ? (V(), N(K, { key: 1 }, [
            h("label", hf, [
              a[55] || (a[55] = q(" 服务地址 ", -1)),
              U(h("input", {
                "onUpdate:modelValue": a[16] || (a[16] = (f) => n.indexTtsBaseUrl = f),
                class: "text_pole",
                type: "url",
                placeholder: "http://127.0.0.1:7860"
              }, null, 512), [
                [de, n.indexTtsBaseUrl]
              ])
            ]),
            h("div", vf, [
              h("button", {
                class: "menu_button",
                type: "button",
                disabled: s.value,
                onClick: De
              }, " 检查连接 ", 8, _f),
              h("button", {
                class: "menu_button",
                type: "button",
                disabled: s.value,
                onClick: a[17] || (a[17] = (f) => Oe(!1))
              }, " 拉取音色 ", 8, xf),
              h("button", {
                class: "menu_button",
                type: "button",
                disabled: s.value,
                onClick: a[18] || (a[18] = (f) => Oe(!0))
              }, " 刷新音色 ", 8, yf)
            ]),
            h("div", bf, [
              h("label", Tf, [
                a[56] || (a[56] = q(" 默认音色 ", -1)),
                U(h("select", {
                  "onUpdate:modelValue": a[19] || (a[19] = (f) => n.indexTtsVoiceId = f),
                  class: "text_pole"
                }, [
                  h("option", Sf, F(w.value.length > 0 ? "请选择音色预设" : "先拉取音色预设"), 1),
                  n.indexTtsVoiceId && !w.value.some((f) => f.id === n.indexTtsVoiceId) ? (V(), N("option", {
                    key: 0,
                    value: n.indexTtsVoiceId
                  }, F(n.indexTtsVoiceId), 9, wf)) : Je("", !0),
                  (V(!0), N(K, null, fe(w.value, (f) => (V(), N("option", {
                    key: f.id,
                    value: f.id
                  }, F(f.name), 9, Ef))), 128))
                ], 512), [
                  [le, n.indexTtsVoiceId]
                ])
              ]),
              h("label", If, [
                a[57] || (a[57] = q(" 默认语言 ", -1)),
                U(h("select", {
                  "onUpdate:modelValue": a[20] || (a[20] = (f) => n.indexTtsLanguage = f),
                  class: "text_pole"
                }, [
                  (V(!0), N(K, null, fe(pt(Hn), (f) => (V(), N("option", {
                    key: f,
                    value: f
                  }, F(f), 9, Cf))), 128))
                ], 512), [
                  [le, n.indexTtsLanguage]
                ])
              ])
            ])
          ], 64)) : g.value ? (V(), N(K, { key: 2 }, [
            h("label", Mf, [
              a[58] || (a[58] = q(" 服务地址 ", -1)),
              U(h("input", {
                "onUpdate:modelValue": a[21] || (a[21] = (f) => n.localGsviBaseUrl = f),
                class: "text_pole",
                type: "url",
                placeholder: "http://127.0.0.1:9880"
              }, null, 512), [
                [de, n.localGsviBaseUrl]
              ])
            ]),
            h("div", Af, [
              h("button", {
                class: "menu_button",
                type: "button",
                disabled: s.value,
                onClick: a[22] || (a[22] = (f) => Oe(!1))
              }, " 拉取模型 ", 8, Pf)
            ]),
            h("div", Rf, [
              h("label", Vf, [
                a[59] || (a[59] = q(" 默认模型 ", -1)),
                U(h("select", {
                  "onUpdate:modelValue": a[23] || (a[23] = (f) => n.localGsviModel = f),
                  class: "text_pole",
                  onChange: Me
                }, [
                  h("option", Nf, F(O.value.length > 0 ? "请选择" : "先拉取模型"), 1),
                  (V(!0), N(K, null, fe(O.value, (f) => (V(), N("option", {
                    key: f.id,
                    value: f.id
                  }, F(f.name), 9, Lf))), 128))
                ], 544), [
                  [le, n.localGsviModel]
                ])
              ]),
              h("label", Gf, [
                a[61] || (a[61] = q(" 语种 ", -1)),
                U(h("select", {
                  "onUpdate:modelValue": a[24] || (a[24] = (f) => n.localGsviLanguage = f),
                  class: "text_pole"
                }, [
                  a[60] || (a[60] = h("option", { value: "" }, "请选择", -1)),
                  (V(!0), N(K, null, fe(W.value, (f) => (V(), N("option", {
                    key: f,
                    value: f
                  }, F(f), 9, $f))), 128))
                ], 512), [
                  [le, n.localGsviLanguage]
                ])
              ]),
              h("label", Of, [
                a[63] || (a[63] = q(" 情绪 ", -1)),
                U(h("select", {
                  "onUpdate:modelValue": a[25] || (a[25] = (f) => n.localGsviEmotion = f),
                  class: "text_pole"
                }, [
                  a[62] || (a[62] = h("option", { value: "" }, "请选择", -1)),
                  (V(!0), N(K, null, fe(G.value, (f) => (V(), N("option", {
                    key: f,
                    value: f
                  }, F(f), 9, Df))), 128))
                ], 512), [
                  [le, n.localGsviEmotion]
                ])
              ])
            ]),
            h("label", kf, [
              q(" 语速 " + F(n.speed.toFixed(2)) + " ", 1),
              U(h("input", {
                "onUpdate:modelValue": a[26] || (a[26] = (f) => n.speed = f),
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
            ])
          ], 64)) : Je("", !0),
          h("details", Uf, [
            h("summary", null, "角色映射 " + F(ce.value), 1),
            a[68] || (a[68] = h("p", { class: "tavern-multi-tts-hint" }, "只给映射名单里的角色生成语音；名单外的台词会跳过。", -1)),
            h("div", jf, [
              U(h("input", {
                "onUpdate:modelValue": a[27] || (a[27] = (f) => l.value = f),
                class: "text_pole",
                type: "text",
                placeholder: "存档名"
              }, null, 512), [
                [de, l.value]
              ]),
              h("button", {
                class: "menu_button",
                type: "button",
                onClick: H
              }, "保存"),
              U(h("select", {
                "onUpdate:modelValue": a[28] || (a[28] = (f) => r.value = f),
                class: "text_pole"
              }, [
                a[64] || (a[64] = h("option", { value: "" }, "读取存档", -1)),
                (V(!0), N(K, null, fe(Ce.value, (f) => (V(), N("option", {
                  key: f.name,
                  value: f.name
                }, F(f.name) + "（" + F(f.mappings.length) + "） ", 9, Ff))), 128))
              ], 512), [
                [le, r.value]
              ]),
              h("button", {
                class: "menu_button",
                type: "button",
                disabled: !r.value,
                onClick: X
              }, " 读取 ", 8, Bf),
              h("button", {
                class: "menu_button",
                type: "button",
                disabled: !r.value,
                onClick: _e
              }, " 删除 ", 8, Hf)
            ]),
            p.value ? (V(!0), N(K, { key: 0 }, fe(n.characterMappings, (f, _) => (V(), N("div", {
              key: `mm-${_}`,
              class: "tavern-multi-tts-mapping"
            }, [
              U(h("input", {
                "onUpdate:modelValue": (v) => f.characterName = v,
                class: "text_pole",
                type: "text",
                placeholder: "角色名"
              }, null, 8, Kf), [
                [de, f.characterName]
              ]),
              U(h("input", {
                "onUpdate:modelValue": (v) => f.minimaxVoiceId = v,
                class: "text_pole",
                type: "text",
                placeholder: "Voice ID"
              }, null, 8, zf), [
                [de, f.minimaxVoiceId]
              ]),
              y.value.length > 0 ? (V(), N("select", {
                key: 0,
                class: "text_pole",
                value: f.minimaxVoiceId,
                onChange: (v) => f.minimaxVoiceId = v.target.value
              }, [
                a[65] || (a[65] = h("option", { value: "" }, "从列表选择", -1)),
                (V(!0), N(K, null, fe(M.value, (v) => (V(), N("option", {
                  key: v.id,
                  value: v.id
                }, F(pt(eo)(v)), 9, Jf))), 128))
              ], 40, Wf)) : Je("", !0),
              h("button", {
                class: "menu_button",
                type: "button",
                disabled: s.value,
                onClick: (v) => ie(f.characterName)
              }, " 试听 ", 8, Xf),
              h("button", {
                class: "menu_button",
                type: "button",
                onClick: (v) => k(_)
              }, "删除", 8, Yf)
            ]))), 128)) : b.value ? (V(!0), N(K, { key: 1 }, fe(n.indexTtsCharacterMappings, (f, _) => (V(), N("div", {
              key: `index-${_}`,
              class: "tavern-multi-tts-mapping is-index-tts"
            }, [
              U(h("input", {
                "onUpdate:modelValue": (v) => f.characterName = v,
                class: "text_pole",
                type: "text",
                placeholder: "角色名"
              }, null, 8, Zf), [
                [de, f.characterName]
              ]),
              U(h("select", {
                "onUpdate:modelValue": (v) => f.indexTtsVoiceId = v,
                class: "text_pole"
              }, [
                h("option", qf, F(w.value.length > 0 ? "音色预设" : "先拉取音色"), 1),
                f.indexTtsVoiceId && !w.value.some((v) => v.id === f.indexTtsVoiceId) ? (V(), N("option", {
                  key: 0,
                  value: f.indexTtsVoiceId
                }, F(f.indexTtsVoiceId), 9, ed)) : Je("", !0),
                (V(!0), N(K, null, fe(w.value, (v) => (V(), N("option", {
                  key: v.id,
                  value: v.id
                }, F(v.name), 9, td))), 128))
              ], 8, Qf), [
                [le, f.indexTtsVoiceId]
              ]),
              U(h("select", {
                "onUpdate:modelValue": (v) => f.indexTtsLanguage = v,
                class: "text_pole"
              }, [
                (V(!0), N(K, null, fe(pt(Hn), (v) => (V(), N("option", {
                  key: v,
                  value: v
                }, F(v), 9, id))), 128))
              ], 8, nd), [
                [le, f.indexTtsLanguage]
              ]),
              h("button", {
                class: "menu_button",
                type: "button",
                disabled: s.value,
                onClick: (v) => ie(f.characterName)
              }, " 试听 ", 8, sd),
              h("button", {
                class: "menu_button",
                type: "button",
                onClick: (v) => k(_)
              }, "删除", 8, od)
            ]))), 128)) : g.value ? (V(!0), N(K, { key: 2 }, fe(n.gsviCharacterMappings, (f, _) => (V(), N("div", {
              key: `gsvi-${_}`,
              class: "tavern-multi-tts-mapping is-gsvi"
            }, [
              U(h("input", {
                "onUpdate:modelValue": (v) => f.characterName = v,
                class: "text_pole",
                type: "text",
                placeholder: "角色名"
              }, null, 8, rd), [
                [de, f.characterName]
              ]),
              U(h("select", {
                "onUpdate:modelValue": (v) => f.gsviVoiceId = v,
                class: "text_pole"
              }, [
                h("option", ad, F(O.value.length > 0 ? "模型" : "先拉取模型"), 1),
                (V(!0), N(K, null, fe(O.value, (v) => (V(), N("option", {
                  key: v.id,
                  value: v.id
                }, F(v.name), 9, cd))), 128))
              ], 8, ld), [
                [le, f.gsviVoiceId]
              ]),
              U(h("select", {
                "onUpdate:modelValue": (v) => f.gsviLanguage = v,
                class: "text_pole"
              }, [
                a[66] || (a[66] = h("option", { value: "" }, "语种", -1)),
                (V(!0), N(K, null, fe(ae(f.gsviVoiceId), (v) => (V(), N("option", {
                  key: v,
                  value: v
                }, F(v), 9, fd))), 128))
              ], 8, ud), [
                [le, f.gsviLanguage]
              ]),
              U(h("select", {
                "onUpdate:modelValue": (v) => f.gsviEmotion = v,
                class: "text_pole"
              }, [
                a[67] || (a[67] = h("option", { value: "" }, "情绪", -1)),
                (V(!0), N(K, null, fe(d(f.gsviVoiceId, f.gsviLanguage), (v) => (V(), N("option", {
                  key: v,
                  value: v
                }, F(v), 9, pd))), 128))
              ], 8, dd), [
                [le, f.gsviEmotion]
              ]),
              h("button", {
                class: "menu_button",
                type: "button",
                disabled: s.value,
                onClick: (v) => ie(f.characterName)
              }, " 试听 ", 8, md),
              h("button", {
                class: "menu_button",
                type: "button",
                onClick: (v) => k(_)
              }, "删除", 8, gd)
            ]))), 128)) : Je("", !0),
            h("div", { class: "tavern-multi-tts-actions" }, [
              h("button", {
                class: "menu_button",
                type: "button",
                onClick: P
              }, "添加角色")
            ]),
            me.value.length > 0 ? (V(), N("p", hd, " 重复角色名：" + F(me.value.join("、")) + "，最后一条完整映射生效。 ", 1)) : Je("", !0)
          ]),
          h("div", vd, [
            h("label", _d, [
              U(h("input", {
                "onUpdate:modelValue": a[29] || (a[29] = (f) => n.injectEnabled = f),
                type: "checkbox"
              }, null, 512), [
                [Ds, n.injectEnabled]
              ]),
              a[69] || (a[69] = h("span", null, "注入 <say> 提示", -1))
            ]),
            U(h("select", {
              "onUpdate:modelValue": a[30] || (a[30] = (f) => n.testLanguage = f),
              class: "text_pole"
            }, [...a[70] || (a[70] = [
              h("option", { value: "ja" }, "试听：日", -1),
              h("option", { value: "zh" }, "试听：中", -1),
              h("option", { value: "en" }, "试听：英", -1)
            ])], 512), [
              [le, n.testLanguage]
            ]),
            h("button", {
              class: "menu_button",
              type: "button",
              disabled: s.value,
              onClick: a[31] || (a[31] = (f) => ie())
            }, F(Ge.value), 9, xd)
          ]),
          h("details", yd, [
            a[81] || (a[81] = h("summary", null, "高级", -1)),
            h("label", bd, [
              a[72] || (a[72] = q(" 预取 ", -1)),
              U(h("select", {
                "onUpdate:modelValue": a[32] || (a[32] = (f) => n.prefetchMode = f),
                class: "text_pole"
              }, [...a[71] || (a[71] = [
                h("option", { value: "manual" }, "只在点击时生成", -1),
                h("option", { value: "auto_all" }, "自动预取全部", -1),
                h("option", { value: "auto_first_n" }, "自动预取前 N 句", -1)
              ])], 512), [
                [le, n.prefetchMode]
              ])
            ]),
            n.prefetchMode !== "manual" ? (V(), N("div", Td, [
              n.prefetchMode === "auto_first_n" ? (V(), N("label", Sd, [
                a[73] || (a[73] = q(" 前 N 句 ", -1)),
                U(h("input", {
                  "onUpdate:modelValue": a[33] || (a[33] = (f) => n.prefetchFirstCount = f),
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
              ])) : Je("", !0),
              h("label", wd, [
                a[74] || (a[74] = q(" 并发 ", -1)),
                U(h("input", {
                  "onUpdate:modelValue": a[34] || (a[34] = (f) => n.maxConcurrency = f),
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
            ])) : Je("", !0),
            h("label", Ed, [
              q(" 注入深度 D" + F(n.injectDepth) + " ", 1),
              U(h("input", {
                "onUpdate:modelValue": a[35] || (a[35] = (f) => n.injectDepth = f),
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
            h("label", Id, [
              a[76] || (a[76] = q(" 注入角色 ", -1)),
              U(h("select", {
                "onUpdate:modelValue": a[36] || (a[36] = (f) => n.injectRole = f),
                class: "text_pole"
              }, [...a[75] || (a[75] = [
                h("option", { value: "system" }, "system", -1),
                h("option", { value: "user" }, "user", -1),
                h("option", { value: "assistant" }, "assistant", -1)
              ])], 512), [
                [le, n.injectRole]
              ])
            ]),
            h("label", Cd, [
              a[77] || (a[77] = q(" 注入模板 ", -1)),
              U(h("textarea", {
                "onUpdate:modelValue": a[37] || (a[37] = (f) => n.injectTemplate = f),
                class: "text_pole",
                rows: "5"
              }, null, 512), [
                [de, n.injectTemplate]
              ])
            ]),
            g.value ? (V(), N(K, { key: 1 }, [
              h("label", Md, [
                a[78] || (a[78] = q(" 鉴权 Token ", -1)),
                U(h("input", {
                  "onUpdate:modelValue": a[38] || (a[38] = (f) => n.localGsviAuthToken = f),
                  class: "text_pole",
                  type: "password",
                  autocomplete: "off"
                }, null, 512), [
                  [de, n.localGsviAuthToken]
                ])
              ]),
              h("div", Ad, [
                h("label", Pd, [
                  a[79] || (a[79] = q(" 文本语言 ", -1)),
                  U(h("select", {
                    "onUpdate:modelValue": a[39] || (a[39] = (f) => n.localGsviTextLang = f),
                    class: "text_pole"
                  }, [
                    (V(!0), N(K, null, fe(pt(Lu), (f) => (V(), N("option", {
                      key: f,
                      value: f
                    }, F(f), 9, Rd))), 128))
                  ], 512), [
                    [le, n.localGsviTextLang]
                  ])
                ]),
                h("label", Vd, [
                  a[80] || (a[80] = q(" 切分 ", -1)),
                  U(h("select", {
                    "onUpdate:modelValue": a[40] || (a[40] = (f) => n.localGsviTextSplitMethod = f),
                    class: "text_pole"
                  }, [
                    (V(!0), N(K, null, fe(pt(Gu), (f) => (V(), N("option", {
                      key: f,
                      value: f
                    }, F(f), 9, Nd))), 128))
                  ], 512), [
                    [le, n.localGsviTextSplitMethod]
                  ])
                ])
              ]),
              h("label", Ld, [
                q(" Batch " + F(n.localGsviBatchSize) + " ", 1),
                U(h("input", {
                  "onUpdate:modelValue": a[41] || (a[41] = (f) => n.localGsviBatchSize = f),
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
            ], 64)) : Je("", !0),
            h("div", Gd, [
              h("button", {
                class: "menu_button",
                type: "button",
                disabled: s.value,
                onClick: ge
              }, " 刷新缓存 ", 8, $d),
              h("button", {
                class: "menu_button",
                type: "button",
                disabled: s.value,
                onClick: we
              }, " 清空缓存 ", 8, Od),
              h("button", {
                class: "menu_button",
                type: "button",
                onClick: ke
              }, "恢复默认")
            ]),
            h("p", Dd, " 缓存 " + F(c.value) + " 条 / " + F(en.value) + "，上限 100 条或 50MB。 ", 1)
          ])
        ])
      ])
    ]));
  }
});
let rn = null, ln = null, gn = null;
function Ud() {
  return Ft(Pr().readRawSettings());
}
function jd() {
  return gn ??= wu(Au(Ud)), gn;
}
function Qt() {
  return ln || (ln = mc(
    Pr(),
    {
      mount(e, t) {
        rn?.unmount(), rn = $a(kd, {
          displayName: qa,
          version: ec,
          settings: t,
          onSettingsChange(n) {
            ln?.updateSettings(n);
          }
        }), rn.mount(e);
      },
      unmount() {
        rn?.unmount(), rn = null;
      }
    },
    {
      stopPlayback: Ln,
      clearCache: rr,
      startRuntime: () => jd().start(),
      stopRuntime: () => gn?.stop(),
      syncInjection: () => gn?.syncInjection(),
      refreshDecorations: () => gn?.refreshDecorations()
    }
  ), ln);
}
async function qt(e, t) {
  try {
    await t();
  } catch (n) {
    const i = n instanceof Error ? n.message : String(n);
    throw console.error(`${Te} ${e} failed: ${i}`), n;
  }
}
async function Fd() {
  await qt("onInstall", () => Qt().install());
}
async function Bd() {
  await qt("onActivate", () => Qt().activate());
}
async function Hd() {
  await qt("onEnable", () => Qt().activate());
}
async function Kd() {
  await qt("onDisable", () => Qt().disable());
}
async function zd() {
  await qt("onClean", () => Qt().clean());
}
async function Wd() {
  await qt("onDelete", () => Qt().delete());
}
export {
  Bd as onActivate,
  zd as onClean,
  Wd as onDelete,
  Kd as onDisable,
  Hd as onEnable,
  Fd as onInstall
};
//# sourceMappingURL=index.js.map
