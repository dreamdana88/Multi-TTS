// @__NO_SIDE_EFFECTS__
function zs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const le = {}, Ft = [], Vt = () => {
}, ro = () => !1, Xn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Yn = (e) => e.startsWith("onUpdate:"), Be = Object.assign, lo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Nr = Object.prototype.hasOwnProperty, oe = (e, t) => Nr.call(e, t), X = Array.isArray, Bt = (e) => In(e) === "[object Map]", qt = (e) => In(e) === "[object Set]", mi = (e) => In(e) === "[object Date]", se = (e) => typeof e == "function", _e = (e) => typeof e == "string", qe = (e) => typeof e == "symbol", ae = (e) => e !== null && typeof e == "object", ao = (e) => (ae(e) || se(e)) && se(e.then) && se(e.catch), co = Object.prototype.toString, In = (e) => co.call(e), Lr = (e) => In(e).slice(8, -1), uo = (e) => In(e) === "[object Object]", Ws = (e) => _e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, un = /* @__PURE__ */ zs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, kr = /-\w/g, Ue = Zn(
  (e) => e.replace(kr, (t) => t.slice(1).toUpperCase())
), Gr = /\B([A-Z])/g, Gt = Zn(
  (e) => e.replace(Gr, "-$1").toLowerCase()
), fo = Zn((e) => e.charAt(0).toUpperCase() + e.slice(1)), as = Zn(
  (e) => e ? `on${fo(e)}` : ""
), Ze = (e, t) => !Object.is(e, t), Ln = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, po = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Qn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let gi;
const qn = () => gi || (gi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Js(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = _e(s) ? Ur(s) : Js(s);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (_e(e) || ae(e))
    return e;
}
const $r = /;(?![^(]*\))/g, Or = /:([^]+)/, Dr = /\/\*[^]*?\*\//g;
function Ur(e) {
  const t = {};
  return e.replace(Dr, "").split($r).forEach((n) => {
    if (n) {
      const s = n.split(Or);
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
  else if (ae(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const jr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fr = /* @__PURE__ */ zs(jr);
function mo(e) {
  return !!e || e === "";
}
function Br(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = en(e[s], t[s]);
  return n;
}
function en(e, t) {
  if (e === t) return !0;
  let n = mi(e), s = mi(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = qe(e), s = qe(t), n || s)
    return e === t;
  if (n = X(e), s = X(t), n || s)
    return n && s ? Br(e, t) : !1;
  if (n = ae(e), s = ae(t), n || s) {
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
function Xs(e, t) {
  return e.findIndex((n) => en(n, t));
}
const go = (e) => !!(e && e.__v_isRef === !0), W = (e) => _e(e) ? e : e == null ? "" : X(e) || ae(e) && (e.toString === co || !se(e.toString)) ? go(e) ? W(e.value) : JSON.stringify(e, ho, 2) : String(e), ho = (e, t) => go(t) ? ho(e, t.value) : Bt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], o) => (n[cs(s, o) + " =>"] = i, n),
    {}
  )
} : qt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => cs(n))
} : qe(t) ? cs(t) : ae(t) && !X(t) && !uo(t) ? String(t) : t, cs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let xe;
class Hr {
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
function Kr() {
  return xe;
}
let re;
const us = /* @__PURE__ */ new WeakSet();
class vo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, xe && (xe.active ? xe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, us.has(this) && (us.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || bo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, hi(this), yo(this);
    const t = re, n = je;
    re = this, je = !0;
    try {
      return this.fn();
    } finally {
      xo(this), re = t, je = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Qs(t);
      this.deps = this.depsTail = void 0, hi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? us.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Rs(this) && this.run();
  }
  get dirty() {
    return Rs(this);
  }
}
let _o = 0, fn, dn;
function bo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = dn, dn = e;
    return;
  }
  e.next = fn, fn = e;
}
function Ys() {
  _o++;
}
function Zs() {
  if (--_o > 0)
    return;
  if (dn) {
    let t = dn;
    for (dn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; fn; ) {
    let t = fn;
    for (fn = void 0; t; ) {
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
function yo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xo(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Qs(s), zr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Rs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (To(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function To(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === _n) || (e.globalVersion = _n, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Rs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = re, s = je;
  re = e, je = !0;
  try {
    yo(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ze(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    re = n, je = s, xo(e), e.flags &= -3;
  }
}
function Qs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Qs(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function zr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let je = !0;
const So = [];
function Tt() {
  So.push(je), je = !1;
}
function St() {
  const e = So.pop();
  je = e === void 0 ? !0 : e;
}
function hi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = re;
    re = void 0;
    try {
      t();
    } finally {
      re = n;
    }
  }
}
let _n = 0;
class Wr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!re || !je || re === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== re)
      n = this.activeLink = new Wr(re, this), re.deps ? (n.prevDep = re.depsTail, re.depsTail.nextDep = n, re.depsTail = n) : re.deps = re.depsTail = n, wo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = re.depsTail, n.nextDep = void 0, re.depsTail.nextDep = n, re.depsTail = n, re.deps === n && (re.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, _n++, this.notify(t);
  }
  notify(t) {
    Ys();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Zs();
    }
  }
}
function wo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        wo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Vs = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ Symbol(
  ""
), Ns = /* @__PURE__ */ Symbol(
  ""
), bn = /* @__PURE__ */ Symbol(
  ""
);
function Te(e, t, n) {
  if (je && re) {
    let s = Vs.get(e);
    s || Vs.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new qs()), i.map = s, i.key = n), i.track();
  }
}
function ut(e, t, n, s, i, o) {
  const r = Vs.get(e);
  if (!r) {
    _n++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Ys(), t === "clear")
    r.forEach(l);
  else {
    const a = X(e), d = a && Ws(n);
    if (a && n === "length") {
      const p = Number(s);
      r.forEach((h, w) => {
        (w === "length" || w === bn || !qe(w) && w >= p) && l(h);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), d && l(r.get(bn)), t) {
        case "add":
          a ? d && l(r.get("length")) : (l(r.get(Nt)), Bt(e) && l(r.get(Ns)));
          break;
        case "delete":
          a || (l(r.get(Nt)), Bt(e) && l(r.get(Ns)));
          break;
        case "set":
          Bt(e) && l(r.get(Nt));
          break;
      }
  }
  Zs();
}
function Ut(e) {
  const t = /* @__PURE__ */ te(e);
  return t === e ? t : (Te(t, "iterate", bn), /* @__PURE__ */ Ge(e) ? t : t.map(Fe));
}
function es(e) {
  return Te(e = /* @__PURE__ */ te(e), "iterate", bn), e;
}
function Xe(e, t) {
  return /* @__PURE__ */ pt(e) ? Yt(/* @__PURE__ */ Lt(e) ? Fe(t) : t) : Fe(t);
}
const Jr = {
  __proto__: null,
  [Symbol.iterator]() {
    return fs(this, Symbol.iterator, (e) => Xe(this, e));
  },
  concat(...e) {
    return Ut(this).concat(
      ...e.map((t) => X(t) ? Ut(t) : t)
    );
  },
  entries() {
    return fs(this, "entries", (e) => (e[1] = Xe(this, e[1]), e));
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
    return ds(this, "includes", e);
  },
  indexOf(...e) {
    return ds(this, "indexOf", e);
  },
  join(e) {
    return Ut(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ds(this, "lastIndexOf", e);
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
    return vi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return vi(this, "reduceRight", e, t);
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
    return Ut(this).toReversed();
  },
  toSorted(e) {
    return Ut(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ut(this).toSpliced(...e);
  },
  unshift(...e) {
    return on(this, "unshift", e);
  },
  values() {
    return fs(this, "values", (e) => Xe(this, e));
  }
};
function fs(e, t, n) {
  const s = es(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ Ge(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const Xr = Array.prototype;
function st(e, t, n, s, i, o) {
  const r = es(e), l = r !== e && !/* @__PURE__ */ Ge(e), a = r[t];
  if (a !== Xr[t]) {
    const h = a.apply(e, o);
    return l ? Fe(h) : h;
  }
  let d = n;
  r !== e && (l ? d = function(h, w) {
    return n.call(this, Xe(e, h), w, e);
  } : n.length > 2 && (d = function(h, w) {
    return n.call(this, h, w, e);
  }));
  const p = a.call(r, d, s);
  return l && i ? i(p) : p;
}
function vi(e, t, n, s) {
  const i = es(e), o = i !== e && !/* @__PURE__ */ Ge(e);
  let r = n, l = !1;
  i !== e && (o ? (l = s.length === 0, r = function(d, p, h) {
    return l && (l = !1, d = Xe(e, d)), n.call(this, d, Xe(e, p), h, e);
  }) : n.length > 3 && (r = function(d, p, h) {
    return n.call(this, d, p, h, e);
  }));
  const a = i[t](r, ...s);
  return l ? Xe(e, a) : a;
}
function ds(e, t, n) {
  const s = /* @__PURE__ */ te(e);
  Te(s, "iterate", bn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ ni(n[0]) ? (n[0] = /* @__PURE__ */ te(n[0]), s[t](...n)) : i;
}
function on(e, t, n = []) {
  Tt(), Ys();
  const s = (/* @__PURE__ */ te(e))[t].apply(e, n);
  return Zs(), St(), s;
}
const Yr = /* @__PURE__ */ zs("__proto__,__v_isRef,__isVue"), Eo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qe)
);
function Zr(e) {
  qe(e) || (e = String(e));
  const t = /* @__PURE__ */ te(this);
  return Te(t, "has", e), t.hasOwnProperty(e);
}
class Co {
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
      return s === (i ? o ? ll : Po : o ? Ao : Mo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = X(t);
    if (!i) {
      let a;
      if (r && (a = Jr[n]))
        return a;
      if (n === "hasOwnProperty")
        return Zr;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ce(t) ? t : s
    );
    if ((qe(n) ? Eo.has(n) : Yr(n)) || (i || Te(t, "get", n), o))
      return l;
    if (/* @__PURE__ */ Ce(l)) {
      const a = r && Ws(n) ? l : l.value;
      return i && ae(a) ? /* @__PURE__ */ ks(a) : a;
    }
    return ae(l) ? i ? /* @__PURE__ */ ks(l) : /* @__PURE__ */ pn(l) : l;
  }
}
class Io extends Co {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let o = t[n];
    const r = X(t) && Ws(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ pt(o);
      if (!/* @__PURE__ */ Ge(s) && !/* @__PURE__ */ pt(s) && (o = /* @__PURE__ */ te(o), s = /* @__PURE__ */ te(s)), !r && /* @__PURE__ */ Ce(o) && !/* @__PURE__ */ Ce(s))
        return d || (o.value = s), !0;
    }
    const l = r ? Number(n) < t.length : oe(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Ce(t) ? t : i
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
    return (!qe(n) || !Eo.has(n)) && Te(t, "has", n), s;
  }
  ownKeys(t) {
    return Te(
      t,
      "iterate",
      X(t) ? "length" : Nt
    ), Reflect.ownKeys(t);
  }
}
class Qr extends Co {
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
const qr = /* @__PURE__ */ new Io(), el = /* @__PURE__ */ new Qr(), tl = /* @__PURE__ */ new Io(!0);
const Ls = (e) => e, An = (e) => Reflect.getPrototypeOf(e);
function nl(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, o = /* @__PURE__ */ te(i), r = Bt(o), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, d = i[e](...s), p = n ? Ls : t ? Yt : Fe;
    return !t && Te(
      o,
      "iterate",
      a ? Ns : Nt
    ), Be(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: w } = d.next();
          return w ? { value: h, done: w } : {
            value: l ? [p(h[0]), p(h[1])] : p(h),
            done: w
          };
        }
      }
    );
  };
}
function Pn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function sl(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ te(o), l = /* @__PURE__ */ te(i);
      e || (Ze(i, l) && Te(r, "get", i), Te(r, "get", l));
      const { has: a } = An(r), d = t ? Ls : e ? Yt : Fe;
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
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ te(l), d = t ? Ls : e ? Yt : Fe;
      return !e && Te(a, "iterate", Nt), l.forEach((p, h) => i.call(o, d(p), d(h), r));
    }
  };
  return Be(
    n,
    e ? {
      add: Pn("add"),
      set: Pn("set"),
      delete: Pn("delete"),
      clear: Pn("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ te(this), r = An(o), l = /* @__PURE__ */ te(i), a = !t && !/* @__PURE__ */ Ge(i) && !/* @__PURE__ */ pt(i) ? l : i;
        return r.has.call(o, a) || Ze(i, a) && r.has.call(o, i) || Ze(l, a) && r.has.call(o, l) || (o.add(a), ut(o, "add", a, a)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Ge(o) && !/* @__PURE__ */ pt(o) && (o = /* @__PURE__ */ te(o));
        const r = /* @__PURE__ */ te(this), { has: l, get: a } = An(r);
        let d = l.call(r, i);
        d || (i = /* @__PURE__ */ te(i), d = l.call(r, i));
        const p = a.call(r, i);
        return r.set(i, o), d ? Ze(o, p) && ut(r, "set", i, o) : ut(r, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ te(this), { has: r, get: l } = An(o);
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
    n[i] = nl(i, e, t);
  }), n;
}
function ei(e, t) {
  const n = sl(e, t);
  return (s, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    oe(n, i) && i in s ? n : s,
    i,
    o
  );
}
const il = {
  get: /* @__PURE__ */ ei(!1, !1)
}, ol = {
  get: /* @__PURE__ */ ei(!1, !0)
}, rl = {
  get: /* @__PURE__ */ ei(!0, !1)
};
const Mo = /* @__PURE__ */ new WeakMap(), Ao = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), ll = /* @__PURE__ */ new WeakMap();
function al(e) {
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
function pn(e) {
  return /* @__PURE__ */ pt(e) ? e : ti(
    e,
    !1,
    qr,
    il,
    Mo
  );
}
// @__NO_SIDE_EFFECTS__
function cl(e) {
  return ti(
    e,
    !1,
    tl,
    ol,
    Ao
  );
}
// @__NO_SIDE_EFFECTS__
function ks(e) {
  return ti(
    e,
    !0,
    el,
    rl,
    Po
  );
}
function ti(e, t, n, s, i) {
  if (!ae(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = al(Lr(e));
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
function ni(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function te(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ te(t) : e;
}
function ul(e) {
  return !oe(e, "__v_skip") && Object.isExtensible(e) && po(e, "__v_skip", !0), e;
}
const Fe = (e) => ae(e) ? /* @__PURE__ */ pn(e) : e, Yt = (e) => ae(e) ? /* @__PURE__ */ ks(e) : e;
// @__NO_SIDE_EFFECTS__
function Ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  return fl(e, !1);
}
function fl(e, t) {
  return /* @__PURE__ */ Ce(e) ? e : new dl(e, t);
}
class dl {
  constructor(t, n) {
    this.dep = new qs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ te(t), this._value = n ? t : Fe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ge(t) || /* @__PURE__ */ pt(t);
    t = s ? t : /* @__PURE__ */ te(t), Ze(t, n) && (this._rawValue = t, this._value = s ? t : Fe(t), this.dep.trigger());
  }
}
function ht(e) {
  return /* @__PURE__ */ Ce(e) ? e.value : e;
}
const pl = {
  get: (e, t, n) => t === "__v_raw" ? e : ht(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ Ce(i) && !/* @__PURE__ */ Ce(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Ro(e) {
  return /* @__PURE__ */ Lt(e) ? e : new Proxy(e, pl);
}
class ml {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = _n - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    re !== this)
      return bo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return To(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function gl(e, t, n = !1) {
  let s, i;
  return se(e) ? s = e : (s = e.get, i = e.set), new ml(s, i, n);
}
const Rn = {}, Dn = /* @__PURE__ */ new WeakMap();
let Pt;
function hl(e, t = !1, n = Pt) {
  if (n) {
    let s = Dn.get(n);
    s || Dn.set(n, s = []), s.push(e);
  }
}
function vl(e, t, n = le) {
  const { immediate: s, deep: i, once: o, scheduler: r, augmentJob: l, call: a } = n, d = (j) => i ? j : /* @__PURE__ */ Ge(j) || i === !1 || i === 0 ? ft(j, 1) : ft(j);
  let p, h, w, S, B = !1, P = !1;
  if (/* @__PURE__ */ Ce(e) ? (h = () => e.value, B = /* @__PURE__ */ Ge(e)) : /* @__PURE__ */ Lt(e) ? (h = () => d(e), B = !0) : X(e) ? (P = !0, B = e.some((j) => /* @__PURE__ */ Lt(j) || /* @__PURE__ */ Ge(j)), h = () => e.map((j) => {
    if (/* @__PURE__ */ Ce(j))
      return j.value;
    if (/* @__PURE__ */ Lt(j))
      return d(j);
    if (se(j))
      return a ? a(j, 2) : j();
  })) : se(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (w) {
      Tt();
      try {
        w();
      } finally {
        St();
      }
    }
    const j = Pt;
    Pt = p;
    try {
      return a ? a(e, 3, [S]) : e(S);
    } finally {
      Pt = j;
    }
  } : h = Vt, t && i) {
    const j = h, ce = i === !0 ? 1 / 0 : i;
    h = () => ft(j(), ce);
  }
  const V = Kr(), R = () => {
    p.stop(), V && V.active && lo(V.effects, p);
  };
  if (o && t) {
    const j = t;
    t = (...ce) => {
      const ye = j(...ce);
      return R(), ye;
    };
  }
  let k = P ? new Array(e.length).fill(Rn) : Rn;
  const Y = (j) => {
    if (!(!(p.flags & 1) || !p.dirty && !j))
      if (t) {
        const ce = p.run();
        if (j || i || B || (P ? ce.some((ye, pe) => Ze(ye, k[pe])) : Ze(ce, k))) {
          w && w();
          const ye = Pt;
          Pt = p;
          try {
            const pe = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              k === Rn ? void 0 : P && k[0] === Rn ? [] : k,
              S
            ];
            k = ce, a ? a(t, 3, pe) : (
              // @ts-expect-error
              t(...pe)
            );
          } finally {
            Pt = ye;
          }
        }
      } else
        p.run();
  };
  return l && l(Y), p = new vo(h), p.scheduler = r ? () => r(Y, !1) : Y, S = (j) => hl(j, !1, p), w = p.onStop = () => {
    const j = Dn.get(p);
    if (j) {
      if (a)
        a(j, 4);
      else
        for (const ce of j) ce();
      Dn.delete(p);
    }
  }, t ? s ? Y(!0) : k = p.run() : r ? r(Y.bind(null, !0), !0) : p.run(), R.pause = p.pause.bind(p), R.resume = p.resume.bind(p), R.stop = R, R;
}
function ft(e, t = 1 / 0, n) {
  if (t <= 0 || !ae(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ce(e))
    ft(e.value, t, n);
  else if (X(e))
    for (let s = 0; s < e.length; s++)
      ft(e[s], t, n);
  else if (qt(e) || Bt(e))
    e.forEach((s) => {
      ft(s, t, n);
    });
  else if (uo(e)) {
    for (const s in e)
      ft(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ft(e[s], t, n);
  }
  return e;
}
function Mn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    ts(i, t, n);
  }
}
function et(e, t, n, s) {
  if (se(e)) {
    const i = Mn(e, t, n, s);
    return i && ao(i) && i.catch((o) => {
      ts(o, t, n);
    }), i;
  }
  if (X(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(et(e[o], t, n, s));
    return i;
  }
}
function ts(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || le;
  if (t) {
    let l = t.parent;
    const a = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const p = l.ec;
      if (p) {
        for (let h = 0; h < p.length; h++)
          if (p[h](e, a, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Tt(), Mn(o, null, 10, [
        e,
        a,
        d
      ]), St();
      return;
    }
  }
  _l(e, n, i, s, r);
}
function _l(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const we = [];
let Je = -1;
const Ht = [];
let vt = null, jt = 0;
const Vo = /* @__PURE__ */ Promise.resolve();
let Un = null;
function No(e) {
  const t = Un || Vo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function bl(e) {
  let t = Je + 1, n = we.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = we[s], o = yn(i);
    o < e || o === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function si(e) {
  if (!(e.flags & 1)) {
    const t = yn(e), n = we[we.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= yn(n) ? we.push(e) : we.splice(bl(t), 0, e), e.flags |= 1, Lo();
  }
}
function Lo() {
  Un || (Un = Vo.then(Go));
}
function yl(e) {
  if (!X(e))
    vt && e.id === -1 ? vt.splice(jt + 1, 0, e) : e.flags & 1 || (Ht.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ht.push(e[t]);
  Lo();
}
function _i(e, t, n = Je + 1) {
  for (; n < we.length; n++) {
    const s = we[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      we.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ko(e) {
  if (Ht.length) {
    const t = [...new Set(Ht)].sort(
      (n, s) => yn(n) - yn(s)
    );
    if (Ht.length = 0, vt) {
      for (let n = 0; n < t.length; n++)
        vt.push(t[n]);
      return;
    }
    for (vt = t, jt = 0; jt < vt.length; jt++) {
      const n = vt[jt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    vt = null, jt = 0;
  }
}
const yn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Go(e) {
  try {
    for (Je = 0; Je < we.length; Je++) {
      const t = we[Je];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Mn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Je < we.length; Je++) {
      const t = we[Je];
      t && (t.flags &= -2);
    }
    Je = -1, we.length = 0, ko(), Un = null, (we.length || Ht.length) && Go();
  }
}
let ke = null, $o = null;
function jn(e) {
  const t = ke;
  return ke = e, $o = e && e.type.__scopeId || null, t;
}
function xl(e, t = ke, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Ei(-1);
    const o = jn(t), r = kt.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let a = kt.length; a > r; a--) er();
      jn(o), s._d && Ei(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function z(e, t) {
  if (ke === null)
    return e;
  const n = os(ke), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, l, a = le] = t[i];
    o && (se(o) && (o = {
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
function Tl(e, t, n = !1) {
  const s = ca();
  if (s || Kt) {
    let i = Kt ? Kt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && se(t) ? t.call(s && s.proxy) : t;
  }
}
const Sl = /* @__PURE__ */ Symbol.for("v-scx"), wl = () => Tl(Sl);
function El(e, t, n) {
  return Cl(e, t, n);
}
function Cl(e, t, n = le) {
  const { immediate: s, deep: i, flush: o, once: r } = n, l = Be({}, n), a = t && s || !t && o !== "post";
  let d;
  if (Sn) {
    if (o === "sync") {
      const S = wl();
      d = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!a) {
      const S = () => {
      };
      return S.stop = Vt, S.resume = Vt, S.pause = Vt, S;
    }
  }
  const p = wt;
  l.call = (S, B, P) => et(S, p, B, P);
  let h = !1;
  o === "post" ? l.scheduler = (S) => {
    Me(S, p && p.suspense);
  } : o !== "sync" && (h = !0, l.scheduler = (S, B) => {
    B ? S() : si(S);
  }), l.augmentJob = (S) => {
    t && (S.flags |= 4), h && (S.flags |= 2, p && (S.id = p.uid, S.i = p));
  };
  const w = vl(e, t, l);
  return Sn && (d ? d.push(w) : a && w()), w;
}
const Il = /* @__PURE__ */ Symbol("_vte"), ns = (e) => e.__isTeleport, ps = /* @__PURE__ */ Symbol("_leaveCb");
function Ml(e) {
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
function Oo(e) {
  if (!Do(e))
    return ns(e.type) && e.children ? Ml(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && se(n.default))
      return n.default();
  }
}
function ii(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    ii(
      ns(n.type) && Oo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Al(e, t) {
  return se(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Be({ name: e.name }, t, { setup: e })
  ) : e;
}
function Pl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function bi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Fn = /* @__PURE__ */ new WeakMap();
function mn(e, t, n, s, i = !1) {
  if (X(e)) {
    e.forEach(
      (P, V) => mn(
        P,
        t && (X(t) ? t[V] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (gn(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && mn(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? os(s.component) : s.el, r = i ? null : o, { i: l, r: a } = e, d = t && t.r, p = l.refs === le ? l.refs = {} : l.refs, h = l.setupState, w = /* @__PURE__ */ te(h), S = h === le ? ro : (P) => bi(p, P) ? !1 : oe(w, P), B = (P, V) => !(V && bi(p, V));
  if (d != null && d !== a) {
    if (yi(t), _e(d))
      p[d] = null, S(d) && (h[d] = null);
    else if (/* @__PURE__ */ Ce(d)) {
      const P = t;
      B(d, P.k) && (d.value = null), P.k && (p[P.k] = null);
    }
  }
  if (se(a))
    Mn(a, l, 12, [r, p]);
  else {
    const P = _e(a), V = /* @__PURE__ */ Ce(a);
    if (P || V) {
      const R = () => {
        if (e.f) {
          const k = P ? S(a) ? h[a] : p[a] : B() || !e.k ? a.value : p[e.k];
          if (i)
            X(k) && lo(k, o);
          else if (X(k))
            k.includes(o) || k.push(o);
          else if (P)
            p[a] = [o], S(a) && (h[a] = p[a]);
          else {
            const Y = [o];
            B(a, e.k) && (a.value = Y), e.k && (p[e.k] = Y);
          }
        } else P ? (p[a] = r, S(a) && (h[a] = r)) : V && (B(a, e.k) && (a.value = r), e.k && (p[e.k] = r));
      };
      if (r) {
        const k = () => {
          R(), Fn.delete(e);
        };
        k.id = -1, Fn.set(e, k), Me(k, n);
      } else
        yi(e), R();
    }
  }
}
function yi(e) {
  const t = Fn.get(e);
  t && (t.flags |= 8, Fn.delete(e));
}
qn().requestIdleCallback;
qn().cancelIdleCallback;
const gn = (e) => !!e.type.__asyncLoader, Do = (e) => e.type.__isKeepAlive;
function Rl(e, t, n = wt, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...r) => {
      Tt();
      const l = li(n), a = et(t, n, e, r);
      return l(), St(), a;
    });
    return s ? i.unshift(o) : i.push(o), o;
  }
}
const Uo = (e) => (t, n = wt) => {
  (!Sn || e === "sp") && Rl(e, (...s) => t(...s), n);
}, Vl = Uo("m"), Nl = Uo("um"), Ll = /* @__PURE__ */ Symbol.for("v-ndc");
function ge(e, t, n, s) {
  let i;
  const o = n, r = X(e);
  if (r || _e(e)) {
    const l = r && /* @__PURE__ */ Lt(e);
    let a = !1, d = !1;
    l && (a = !/* @__PURE__ */ Ge(e), d = /* @__PURE__ */ pt(e), e = es(e)), i = new Array(e.length);
    for (let p = 0, h = e.length; p < h; p++)
      i[p] = t(
        a ? d ? Yt(Fe(e[p])) : Fe(e[p]) : e[p],
        p,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (ae(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const p = l[a];
        i[a] = t(e[p], p, a, o);
      }
    }
  else
    i = [];
  return i;
}
const Gs = (e) => e ? ir(e) ? os(e) : Gs(e.parent) : null, hn = (
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
    $parent: (e) => Gs(e.parent),
    $root: (e) => Gs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      si(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = No.bind(e.proxy)),
    $watch: (e) => Vt
  })
), ms = (e, t) => e !== le && !e.__isScriptSetup && oe(e, t), kl = {
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
        if (ms(s, t))
          return r[t] = 1, s[t];
        if (oe(o, t))
          return r[t] = 3, o[t];
        if (n !== le && oe(n, t))
          return r[t] = 4, n[t];
        r[t] = 0;
      }
    }
    const d = hn[t];
    let p, h;
    if (d)
      return t === "$attrs" && Te(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== le && oe(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, oe(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: o } = e;
    return ms(i, t) ? (i[t] = n, !0) : oe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: o, type: r }
  }, l) {
    let a;
    return !!(n[l] || ms(t, l) || oe(o, l) || oe(s, l) || oe(hn, l) || oe(i.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : oe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function jo() {
  return {
    app: null,
    config: {
      isNativeTag: ro,
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
let Gl = 0;
function $l(e, t) {
  return function(s, i = null) {
    se(s) || (s = Be({}, s)), i != null && !ae(i) && (i = null);
    const o = jo(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const d = o.app = {
      _uid: Gl++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: ga,
      get config() {
        return o.config;
      },
      set config(p) {
      },
      use(p, ...h) {
        return r.has(p) || (p && se(p.install) ? (r.add(p), p.install(d, ...h)) : se(p) && (r.add(p), p(d, ...h))), d;
      },
      mixin(p) {
        return d;
      },
      component(p, h) {
        return h ? (o.components[p] = h, d) : o.components[p];
      },
      directive(p, h) {
        return h ? (o.directives[p] = h, d) : o.directives[p];
      },
      mount(p, h, w) {
        if (!a) {
          const S = d._ceVNode || dt(s, i);
          return S.appContext = o, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(S, p, w), a = !0, d._container = p, p.__vue_app__ = d, os(S.component);
        }
      },
      onUnmount(p) {
        l.push(p);
      },
      unmount() {
        a && (et(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(p, h) {
        return o.provides[p] = h, d;
      },
      runWithContext(p) {
        const h = Kt;
        Kt = d;
        try {
          return p();
        } finally {
          Kt = h;
        }
      }
    };
    return d;
  };
}
let Kt = null;
const Ol = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ue(t)}Modifiers`] || e[`${Gt(t)}Modifiers`];
function Dl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || le;
  let i = n;
  const o = t.startsWith("update:"), r = o && Ol(s, t.slice(7));
  r && (r.trim && (i = n.map((p) => _e(p) ? p.trim() : p)), r.number && (i = n.map(Qn)));
  let l, a = s[l = as(t)] || // also try camelCase event handler (#2249)
  s[l = as(Ue(t))];
  !a && o && (a = s[l = as(Gt(t))]), a && et(
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
function Ul(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {};
  return o ? (X(o) ? o.forEach((l) => r[l] = null) : Be(r, o), ae(e) && s.set(e, r), r) : (ae(e) && s.set(e, null), null);
}
function ss(e, t) {
  return !e || !Xn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), oe(e, t[0].toLowerCase() + t.slice(1)) || oe(e, Gt(t)) || oe(e, t));
}
function xi(e) {
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
    renderCache: p,
    props: h,
    data: w,
    setupState: S,
    ctx: B,
    inheritAttrs: P
  } = e, V = jn(e);
  let R, k;
  try {
    if (n.shapeFlag & 4) {
      const j = i || s, ce = j;
      R = Ye(
        d.call(
          ce,
          j,
          p,
          h,
          S,
          w,
          B
        )
      ), k = l;
    } else {
      const j = t;
      R = Ye(
        j.length > 1 ? j(
          h,
          { attrs: l, slots: r, emit: a }
        ) : j(
          h,
          null
        )
      ), k = t.props ? l : jl(l);
    }
  } catch (j) {
    kt.length = 0, ts(j, e, 1), R = dt(mt);
  }
  let Y = R;
  if (k && P !== !1) {
    const j = Object.keys(k), { shapeFlag: ce } = Y;
    j.length && ce & 7 && (o && j.some(Yn) && (k = Fl(
      k,
      o
    )), Y = Zt(Y, k, !1, !0));
  }
  if (n.dirs && (Y = Zt(Y, null, !1, !0), Y.dirs = Y.dirs ? Y.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const j = ns(Y.type) && Oo(Y) || Y;
    ii(j, n.transition);
  }
  return R = Y, jn(V), R;
}
const jl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Xn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Fl = (e, t) => {
  const n = {};
  for (const s in e)
    (!Yn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Bl(e, t, n) {
  const { props: s, children: i, component: o } = e, { props: r, children: l, patchFlag: a } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Ti(s, r, d) : !!r;
    if (a & 8) {
      const p = t.dynamicProps;
      for (let h = 0; h < p.length; h++) {
        const w = p[h];
        if (Fo(r, s, w) && !ss(d, w))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? Ti(s, r, d) : !0 : !!r;
  return !1;
}
function Ti(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (Fo(t, e, o) && !ss(n, o))
      return !0;
  }
  return !1;
}
function Fo(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && ae(s) && ae(i) ? !en(s, i) : s !== i;
}
function Hl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Bo = {}, Ho = () => Object.create(Bo), Ko = (e) => Object.getPrototypeOf(e) === Bo;
function Kl(e, t, n, s = !1) {
  const i = {}, o = Ho();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), zo(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ cl(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function zl(e, t, n, s) {
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
      const p = e.vnode.dynamicProps;
      for (let h = 0; h < p.length; h++) {
        let w = p[h];
        if (ss(e.emitsOptions, w))
          continue;
        const S = t[w];
        if (a)
          if (oe(o, w))
            S !== o[w] && (o[w] = S, d = !0);
          else {
            const B = Ue(w);
            i[B] = $s(
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
    zo(e, t, i, o) && (d = !0);
    let p;
    for (const h in l)
      (!t || // for camelCase
      !oe(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Gt(h)) === h || !oe(t, p))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[p] !== void 0) && (i[h] = $s(
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
function zo(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (un(a))
        continue;
      const d = t[a];
      let p;
      i && oe(i, p = Ue(a)) ? !o || !o.includes(p) ? n[p] = d : (l || (l = {}))[p] = d : ss(e.emitsOptions, a) || (!(a in s) || d !== s[a]) && (s[a] = d, r = !0);
    }
  if (o) {
    const a = /* @__PURE__ */ te(n), d = l || le;
    for (let p = 0; p < o.length; p++) {
      const h = o[p];
      n[h] = $s(
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
function $s(e, t, n, s, i, o) {
  const r = e[n];
  if (r != null) {
    const l = oe(r, "default");
    if (l && s === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && se(a)) {
        const { propsDefaults: d } = i;
        if (n in d)
          s = d[n];
        else {
          const p = li(i);
          s = d[n] = a.call(
            null,
            t
          ), p();
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
function Wl(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, l = [];
  if (!o)
    return ae(e) && s.set(e, Ft), Ft;
  if (X(o))
    for (let d = 0; d < o.length; d++) {
      const p = Ue(o[d]);
      Si(p) && (r[p] = le);
    }
  else if (o)
    for (const d in o) {
      const p = Ue(d);
      if (Si(p)) {
        const h = o[d], w = r[p] = X(h) || se(h) ? { type: h } : Be({}, h), S = w.type;
        let B = !1, P = !0;
        if (X(S))
          for (let V = 0; V < S.length; ++V) {
            const R = S[V], k = se(R) && R.name;
            if (k === "Boolean") {
              B = !0;
              break;
            } else k === "String" && (P = !1);
          }
        else
          B = se(S) && S.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = B, w[
          1
          /* shouldCastTrue */
        ] = P, (B || oe(w, "default")) && l.push(p);
      }
    }
  const a = [r, l];
  return ae(e) && s.set(e, a), a;
}
function Si(e) {
  return e[0] !== "$" && !un(e);
}
const oi = (e) => e === "_" || e === "_ctx" || e === "$stable", ri = (e) => X(e) ? e.map(Ye) : [Ye(e)], Jl = (e, t, n) => {
  if (t._n)
    return t;
  const s = xl((...i) => ri(t(...i)), n);
  return s._c = !1, s;
}, Wo = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (oi(i)) continue;
    const o = e[i];
    if (se(o))
      t[i] = Jl(i, o, s);
    else if (o != null) {
      const r = ri(o);
      t[i] = () => r;
    }
  }
}, Jo = (e, t) => {
  const n = ri(t);
  e.slots.default = () => n;
}, Xo = (e, t, n) => {
  for (const s in t)
    (n || !oi(s)) && (e[s] = t[s]);
}, Xl = (e, t, n) => {
  const s = e.slots = Ho();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Xo(s, t, n), n && po(s, "_", i, !0)) : Wo(t, s);
  } else t && Jo(e, t);
}, Yl = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let o = !0, r = le;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : Xo(i, t, n) : (o = !t.$stable, Wo(t, i)), r = t;
  } else t && (Jo(e, t), r = { default: 1 });
  if (o)
    for (const l in i)
      !oi(l) && r[l] == null && delete i[l];
}, Me = ta;
function Zl(e) {
  return Ql(e);
}
function Ql(e, t) {
  const n = qn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: l,
    createComment: a,
    setText: d,
    setElementText: p,
    parentNode: h,
    nextSibling: w,
    setScopeId: S = Vt,
    insertStaticContent: B
  } = e, P = (f, g, v, T = null, x = null, b = null, I = void 0, C = null, E = !!g.dynamicChildren) => {
    if (f === g)
      return;
    f && !rn(f, g) && (T = be(f), K(f, x, b, !0), f = null), g.patchFlag === -2 && (E = !1, g.dynamicChildren = null);
    const { type: y, ref: D, shapeFlag: A } = g;
    switch (y) {
      case is:
        V(f, g, v, T);
        break;
      case mt:
        R(f, g, v, T);
        break;
      case hs:
        f == null && k(g, v, T, I);
        break;
      case Q:
        Oe(
          f,
          g,
          v,
          T,
          x,
          b,
          I,
          C,
          E
        );
        break;
      default:
        A & 1 ? ce(
          f,
          g,
          v,
          T,
          x,
          b,
          I,
          C,
          E
        ) : A & 6 ? Dt(
          f,
          g,
          v,
          T,
          x,
          b,
          I,
          C,
          E
        ) : (A & 64 || A & 128) && y.process(
          f,
          g,
          v,
          T,
          x,
          b,
          I,
          C,
          E,
          Ie
        );
    }
    D != null && x ? mn(D, f && f.ref, b, g || f, !g) : D == null && f && f.ref != null && mn(f.ref, null, b, f, !0);
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
  }, k = (f, g, v, T) => {
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
  }, j = ({ el: f, anchor: g }) => {
    let v;
    for (; f && f !== g; )
      v = w(f), i(f), f = v;
    i(g);
  }, ce = (f, g, v, T, x, b, I, C, E) => {
    if (g.type === "svg" ? I = "svg" : g.type === "math" && (I = "mathml"), f == null)
      ye(
        g,
        v,
        T,
        x,
        b,
        I,
        C,
        E
      );
    else {
      const y = f.el && f.el._isVueCE ? f.el : null;
      try {
        y && y._beginPatch(), Ot(
          f,
          g,
          x,
          b,
          I,
          C,
          E
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, ye = (f, g, v, T, x, b, I, C) => {
    let E, y;
    const { props: D, shapeFlag: A, transition: U, dirs: H } = f;
    if (E = f.el = r(
      f.type,
      b,
      D && D.is,
      D
    ), A & 8 ? p(E, f.children) : A & 16 && $e(
      f.children,
      E,
      null,
      T,
      x,
      gs(f, b),
      I,
      C
    ), H && Mt(f, null, T, "created"), pe(E, f, f.scopeId, I, T), D) {
      for (const ne in D)
        ne !== "value" && !un(ne) && o(E, ne, null, D[ne], b, T);
      "value" in D && o(E, "value", null, D.value, b), (y = D.onVnodeBeforeMount) && ze(y, T, f);
    }
    H && Mt(f, null, T, "beforeMount");
    const Z = ql(x, U);
    Z && U.beforeEnter(E), s(E, g, v), ((y = D && D.onVnodeMounted) || Z || H) && Me(() => {
      y && ze(y, T, f), Z && U.enter(E), H && Mt(f, null, T, "mounted");
    }, x);
  }, pe = (f, g, v, T, x) => {
    if (v && S(f, v), T)
      for (let b = 0; b < T.length; b++)
        S(f, T[b]);
    if (x) {
      let b = x.subTree;
      if (g === b || qo(b.type) && (b.ssContent === g || b.ssFallback === g)) {
        const I = x.vnode;
        pe(
          f,
          I,
          I.scopeId,
          I.slotScopeIds,
          x.parent
        );
      }
    }
  }, $e = (f, g, v, T, x, b, I, C, E = 0) => {
    for (let y = E; y < f.length; y++) {
      const D = f[y] = C ? ct(f[y]) : Ye(f[y]);
      P(
        null,
        D,
        g,
        v,
        T,
        x,
        b,
        I,
        C
      );
    }
  }, Ot = (f, g, v, T, x, b, I) => {
    const C = g.el = f.el;
    let { patchFlag: E, dynamicChildren: y, dirs: D } = g;
    E |= f.patchFlag & 16;
    const A = f.props || le, U = g.props || le;
    let H;
    if (v && At(v, !1), (H = U.onVnodeBeforeUpdate) && ze(H, v, g, f), D && Mt(g, f, v, "beforeUpdate"), v && At(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!f.dynamicChildren || f.dynamicChildren.length !== y.length) && (E = 0, I = !1, y = null), (A.innerHTML && U.innerHTML == null || A.textContent && U.textContent == null) && p(C, ""), y ? gt(
      f.dynamicChildren,
      y,
      C,
      v,
      T,
      gs(g, x),
      b
    ) : I || He(
      f,
      g,
      C,
      null,
      v,
      T,
      gs(g, x),
      b,
      !1
    ), E > 0) {
      if (E & 16)
        tt(C, A, U, v, x);
      else if (E & 2 && A.class !== U.class && o(C, "class", null, U.class, x), E & 4 && o(C, "style", A.style, U.style, x), E & 8) {
        const Z = g.dynamicProps;
        for (let ne = 0; ne < Z.length; ne++) {
          const ee = Z[ne], _ = A[ee], c = U[ee];
          (c !== _ || ee === "value") && o(C, ee, _, c, x, v);
        }
      }
      E & 1 && f.children !== g.children && p(C, g.children);
    } else !I && y == null && tt(C, A, U, v, x);
    ((H = U.onVnodeUpdated) || D) && Me(() => {
      H && ze(H, v, g, f), D && Mt(g, f, v, "updated");
    }, T);
  }, gt = (f, g, v, T, x, b, I) => {
    for (let C = 0; C < g.length; C++) {
      const E = f[C], y = g[C], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === Q || // - In the case of different nodes, there is going to be a replacement
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
        I,
        !0
      );
    }
  }, tt = (f, g, v, T, x) => {
    if (g !== v) {
      if (g !== le)
        for (const b in g)
          !un(b) && !(b in v) && o(
            f,
            b,
            g[b],
            null,
            x,
            T
          );
      for (const b in v) {
        if (un(b)) continue;
        const I = v[b], C = g[b];
        I !== C && b !== "value" && o(f, b, C, I, x, T);
      }
      "value" in v && o(f, "value", g.value, v.value, x);
    }
  }, Oe = (f, g, v, T, x, b, I, C, E) => {
    const y = g.el = f ? f.el : l(""), D = g.anchor = f ? f.anchor : l("");
    let { patchFlag: A, dynamicChildren: U, slotScopeIds: H } = g;
    H && (C = C ? C.concat(H) : H), f == null ? (s(y, v, T), s(D, v, T), $e(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      v,
      D,
      x,
      b,
      I,
      C,
      E
    )) : A > 0 && A & 64 && U && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === U.length ? (gt(
      f.dynamicChildren,
      U,
      v,
      x,
      b,
      I,
      C
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || x && g === x.subTree) && Yo(
      f,
      g,
      !0
      /* shallow */
    )) : He(
      f,
      g,
      v,
      D,
      x,
      b,
      I,
      C,
      E
    );
  }, Dt = (f, g, v, T, x, b, I, C, E) => {
    g.slotScopeIds = C, f == null ? g.shapeFlag & 512 ? x.ctx.activate(
      g,
      v,
      T,
      I,
      E
    ) : Ct(
      g,
      v,
      T,
      x,
      b,
      I,
      E
    ) : sn(f, g, E);
  }, Ct = (f, g, v, T, x, b, I) => {
    const C = f.component = aa(
      f,
      T,
      x
    );
    if (Do(f) && (C.ctx.renderer = Ie), ua(C, !1, I), C.asyncDep) {
      if (x && x.registerDep(C, It, I), !f.el) {
        const E = C.subTree = dt(mt);
        R(null, E, g, v), f.placeholder = E.el;
      }
    } else
      It(
        C,
        f,
        g,
        v,
        x,
        b,
        I
      );
  }, sn = (f, g, v) => {
    const T = g.component = f.component;
    if (Bl(f, g, v))
      if (T.asyncDep && !T.asyncResolved) {
        nt(T, g, v);
        return;
      } else
        T.next = g, T.update();
    else
      g.el = f.el, T.vnode = g;
  }, It = (f, g, v, T, x, b, I) => {
    const C = () => {
      if (f.isMounted) {
        let { next: A, bu: U, u: H, parent: Z, vnode: ne } = f;
        {
          const J = Zo(f);
          if (J) {
            A && (A.el = ne.el, nt(f, A, I)), J.asyncDep.then(() => {
              Me(() => {
                f.isUnmounted || y();
              }, x);
            });
            return;
          }
        }
        let ee = A, _;
        At(f, !1), A ? (A.el = ne.el, nt(f, A, I)) : A = ne, U && Ln(U), (_ = A.props && A.props.onVnodeBeforeUpdate) && ze(_, Z, A, ne), At(f, !0);
        const c = xi(f), m = f.subTree;
        f.subTree = c, P(
          m,
          c,
          // parent may have changed if it's in a teleport
          h(m.el),
          // anchor may have changed if it's in a fragment
          be(m),
          f,
          x,
          b
        ), A.el = c.el, ee === null && Hl(f, c.el), H && Me(H, x), (_ = A.props && A.props.onVnodeUpdated) && Me(
          () => ze(_, Z, A, ne),
          x
        );
      } else {
        let A;
        const { el: U, props: H } = g, { bm: Z, m: ne, parent: ee, root: _, type: c } = f, m = gn(g);
        At(f, !1), Z && Ln(Z), !m && (A = H && H.onVnodeBeforeMount) && ze(A, ee, g), At(f, !0);
        {
          _.ce && _.ce._hasShadowRoot() && _.ce._injectChildStyle(
            c,
            f.parent ? f.parent.type : void 0
          );
          const J = f.subTree = xi(f);
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
        if (ne && Me(ne, x), !m && (A = H && H.onVnodeMounted)) {
          const J = g;
          Me(
            () => ze(A, ee, J),
            x
          );
        }
        (g.shapeFlag & 256 || ee && gn(ee.vnode) && ee.vnode.shapeFlag & 256) && f.a && Me(f.a, x), f.isMounted = !0, g = v = T = null;
      }
    };
    f.scope.on();
    const E = f.effect = new vo(C);
    f.scope.off();
    const y = f.update = E.run.bind(E), D = f.job = E.runIfDirty.bind(E);
    D.i = f, D.id = f.uid, E.scheduler = () => si(D), At(f, !0), y();
  }, nt = (f, g, v) => {
    g.component = f;
    const T = f.vnode.props;
    f.vnode = g, f.next = null, zl(f, g.props, T, v), Yl(f, g.children, v), Tt(), _i(f), St();
  }, He = (f, g, v, T, x, b, I, C, E = !1) => {
    const y = f && f.children, D = f ? f.shapeFlag : 0, A = g.children, { patchFlag: U, shapeFlag: H } = g;
    if (U > 0) {
      if (U & 128) {
        O(
          y,
          A,
          v,
          T,
          x,
          b,
          I,
          C,
          E
        );
        return;
      } else if (U & 256) {
        M(
          y,
          A,
          v,
          T,
          x,
          b,
          I,
          C,
          E
        );
        return;
      }
    }
    H & 8 ? (D & 16 && ue(y, x, b), A !== y && p(v, A)) : D & 16 ? H & 16 ? O(
      y,
      A,
      v,
      T,
      x,
      b,
      I,
      C,
      E
    ) : ue(y, x, b, !0) : (D & 8 && p(v, ""), H & 16 && $e(
      A,
      v,
      T,
      x,
      b,
      I,
      C,
      E
    ));
  }, M = (f, g, v, T, x, b, I, C, E) => {
    f = f || Ft, g = g || Ft;
    const y = f.length, D = g.length, A = Math.min(y, D);
    let U;
    for (U = 0; U < A; U++) {
      const H = g[U] = E ? ct(g[U]) : Ye(g[U]);
      P(
        f[U],
        H,
        v,
        null,
        x,
        b,
        I,
        C,
        E
      );
    }
    y > D ? ue(
      f,
      x,
      b,
      !0,
      !1,
      A
    ) : $e(
      g,
      v,
      T,
      x,
      b,
      I,
      C,
      E,
      A
    );
  }, O = (f, g, v, T, x, b, I, C, E) => {
    let y = 0;
    const D = g.length;
    let A = f.length - 1, U = D - 1;
    for (; y <= A && y <= U; ) {
      const H = f[y], Z = g[y] = E ? ct(g[y]) : Ye(g[y]);
      if (rn(H, Z))
        P(
          H,
          Z,
          v,
          null,
          x,
          b,
          I,
          C,
          E
        );
      else
        break;
      y++;
    }
    for (; y <= A && y <= U; ) {
      const H = f[A], Z = g[U] = E ? ct(g[U]) : Ye(g[U]);
      if (rn(H, Z))
        P(
          H,
          Z,
          v,
          null,
          x,
          b,
          I,
          C,
          E
        );
      else
        break;
      A--, U--;
    }
    if (y > A) {
      if (y <= U) {
        const H = U + 1, Z = H < D ? g[H].el : T;
        for (; y <= U; )
          P(
            null,
            g[y] = E ? ct(g[y]) : Ye(g[y]),
            v,
            Z,
            x,
            b,
            I,
            C,
            E
          ), y++;
      }
    } else if (y > U)
      for (; y <= A; )
        K(f[y], x, b, !0), y++;
    else {
      const H = y, Z = y, ne = /* @__PURE__ */ new Map();
      for (y = Z; y <= U; y++) {
        const Pe = g[y] = E ? ct(g[y]) : Ye(g[y]);
        Pe.key != null && ne.set(Pe.key, y);
      }
      let ee, _ = 0;
      const c = U - Z + 1;
      let m = !1, J = 0;
      const N = new Array(c);
      for (y = 0; y < c; y++) N[y] = 0;
      for (y = H; y <= A; y++) {
        const Pe = f[y];
        if (_ >= c) {
          K(Pe, x, b, !0);
          continue;
        }
        let Ke;
        if (Pe.key != null)
          Ke = ne.get(Pe.key);
        else
          for (ee = Z; ee <= U; ee++)
            if (N[ee - Z] === 0 && rn(Pe, g[ee])) {
              Ke = ee;
              break;
            }
        Ke === void 0 ? K(Pe, x, b, !0) : (N[Ke - Z] = y + 1, Ke >= J ? J = Ke : m = !0, P(
          Pe,
          g[Ke],
          v,
          null,
          x,
          b,
          I,
          C,
          E
        ), _++);
      }
      const fi = m ? ea(N) : Ft;
      for (ee = fi.length - 1, y = c - 1; y >= 0; y--) {
        const Pe = Z + y, Ke = g[Pe], di = g[Pe + 1], pi = Pe + 1 < D ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          di.el || Qo(di)
        ) : T;
        N[y] === 0 ? P(
          null,
          Ke,
          v,
          pi,
          x,
          b,
          I,
          C,
          E
        ) : m && (ee < 0 || y !== fi[ee] ? L(Ke, v, pi, 2) : ee--);
      }
    }
  }, L = (f, g, v, T, x = null) => {
    const { el: b, type: I, transition: C, children: E, shapeFlag: y } = f;
    if (y & 6) {
      L(f.component.subTree, g, v, T);
      return;
    }
    if (y & 128) {
      f.suspense.move(g, v, T);
      return;
    }
    if (y & 64) {
      I.move(f, g, v, Ie);
      return;
    }
    if (I === Q) {
      s(b, g, v);
      for (let A = 0; A < E.length; A++)
        L(E[A], g, v, T);
      s(f.anchor, g, v);
      return;
    }
    if (I === hs) {
      Y(f, g, v);
      return;
    }
    if (T !== 2 && y & 1 && C)
      if (T === 0)
        C.persisted && !b[ps] ? s(b, g, v) : (C.beforeEnter(b), s(b, g, v), Me(() => C.enter(b), x));
      else {
        const { leave: A, delayLeave: U, afterLeave: H } = C, Z = () => {
          f.ctx.isUnmounted ? i(b) : s(b, g, v);
        }, ne = () => {
          const ee = b._isLeaving || !!b[ps];
          b._isLeaving && b[ps](
            !0
            /* cancelled */
          ), C.persisted && !ee ? Z() : A(b, () => {
            Z(), H && H();
          });
        };
        U ? U(b, Z, ne) : ne();
      }
    else
      s(b, g, v);
  }, K = (f, g, v, T = !1, x = !1) => {
    const {
      type: b,
      props: I,
      ref: C,
      children: E,
      dynamicChildren: y,
      shapeFlag: D,
      patchFlag: A,
      dirs: U,
      cacheIndex: H,
      memo: Z
    } = f;
    if (A === -2 && (x = !1), C != null && (Tt(), mn(C, null, v, f, !0), St()), H != null && (g.renderCache[H] = void 0), D & 256) {
      g.ctx.deactivate(f);
      return;
    }
    const ne = D & 1 && U, ee = !gn(f);
    let _;
    if (ee && (_ = I && I.onVnodeBeforeUnmount) && ze(_, g, f), D & 6)
      Ve(f.component, v, T);
    else {
      if (D & 128) {
        f.suspense.unmount(v, T);
        return;
      }
      ne && Mt(f, null, g, "beforeUnmount"), D & 64 ? f.type.remove(
        f,
        g,
        v,
        Ie,
        T
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Q || A > 0 && A & 64) ? ue(
        y,
        g,
        v,
        !1,
        !0
      ) : (b === Q && A & 384 || !x && D & 16) && ue(E, g, v), T && q(f);
    }
    const c = Z != null && H == null;
    (ee && (_ = I && I.onVnodeUnmounted) || ne || c) && Me(() => {
      _ && ze(_, g, f), ne && Mt(f, null, g, "unmounted"), c && (f.el = null);
    }, v);
  }, q = (f) => {
    const { type: g, el: v, anchor: T, transition: x } = f;
    if (g === Q) {
      me(v, T);
      return;
    }
    if (g === hs) {
      j(f);
      return;
    }
    const b = () => {
      i(v), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (f.shapeFlag & 1 && x && !x.persisted) {
      const { leave: I, delayLeave: C } = x, E = () => I(v, b);
      C ? C(f.el, b, E) : E();
    } else
      b();
  }, me = (f, g) => {
    let v;
    for (; f !== g; )
      v = w(f), i(f), f = v;
    i(g);
  }, Ve = (f, g, v) => {
    const { bum: T, scope: x, job: b, subTree: I, um: C, m: E, a: y } = f;
    wi(E), wi(y), T && Ln(T), x.stop(), b && (b.flags |= 8, K(I, f, g, v)), C && Me(C, g), Me(() => {
      f.isUnmounted = !0;
    }, g);
  }, ue = (f, g, v, T = !1, x = !1, b = 0) => {
    for (let I = b; I < f.length; I++)
      K(f[I], g, v, T, x);
  }, be = (f) => {
    if (f.shapeFlag & 6)
      return be(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const g = w(f.anchor || f.el), v = g && g[Il];
    return v ? w(v) : g;
  };
  let Se = !1;
  const Ne = (f, g, v) => {
    let T;
    f == null ? g._vnode && (K(g._vnode, null, null, !0), T = g._vnode.component) : P(
      g._vnode || null,
      f,
      g,
      null,
      null,
      null,
      v
    ), g._vnode = f, Se || (Se = !0, _i(T), ko(), Se = !1);
  }, Ie = {
    p: P,
    um: K,
    m: L,
    r: q,
    mt: Ct,
    mc: $e,
    pc: He,
    pbc: gt,
    n: be,
    o: e
  };
  return {
    render: Ne,
    hydrate: void 0,
    createApp: $l(Ne)
  };
}
function gs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function At({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ql(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Yo(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (X(s) && X(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = ct(i[o]), l.el = r.el), !n && l.patchFlag !== -2 && Yo(r, l)), l.type === is && (l.patchFlag === -1 && (l = i[o] = ct(l)), l.el = r.el), l.type === mt && !l.el && (l.el = r.el);
    }
}
function ea(e) {
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
function Zo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Zo(t);
}
function wi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Qo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Qo(t.subTree) : null;
}
const qo = (e) => e.__isSuspense;
function ta(e, t) {
  t && t.pendingBranch ? X(e) ? t.effects.push(...e) : t.effects.push(e) : yl(e);
}
const Q = /* @__PURE__ */ Symbol.for("v-fgt"), is = /* @__PURE__ */ Symbol.for("v-txt"), mt = /* @__PURE__ */ Symbol.for("v-cmt"), hs = /* @__PURE__ */ Symbol.for("v-stc"), kt = [];
let Re = null;
function G(e = !1) {
  kt.push(Re = e ? null : []);
}
function er() {
  kt.pop(), Re = kt[kt.length - 1] || null;
}
let xn = 1;
function Ei(e, t = !1) {
  xn += e, e < 0 && Re && t && (Re.hasOnce = !0);
}
function tr(e) {
  return e.dynamicChildren = xn > 0 ? Re || Ft : null, er(), xn > 0 && Re && Re.push(e), e;
}
function $(e, t, n, s, i, o) {
  return tr(
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
function na(e, t, n, s, i) {
  return tr(
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
function nr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function rn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const sr = ({ key: e }) => e ?? null, kn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? _e(e) || /* @__PURE__ */ Ce(e) || se(e) ? { i: ke, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, i = null, o = e === Q ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && sr(t),
    ref: t && kn(t),
    scopeId: $o,
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
  return l ? (Bn(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= _e(n) ? 8 : 16), xn > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Re && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Re.push(a), a;
}
const dt = sa;
function sa(e, t = null, n = null, s = 0, i = null, o = !1) {
  if ((!e || e === Ll) && (e = mt), nr(e)) {
    const l = Zt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Bn(l, n), xn > 0 && !o && Re && (l.shapeFlag & 6 ? Re[Re.indexOf(e)] = l : Re.push(l)), l.patchFlag = -2, l;
  }
  if (ma(e) && (e = e.__vccOpts), t) {
    t = ia(t);
    let { class: l, style: a } = t;
    l && !_e(l) && (t.class = at(l)), ae(a) && (/* @__PURE__ */ ni(a) && !X(a) && (a = Be({}, a)), t.style = Js(a));
  }
  const r = _e(e) ? 1 : qo(e) ? 128 : ns(e) ? 64 : ae(e) ? 4 : se(e) ? 2 : 0;
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
function ia(e) {
  return e ? /* @__PURE__ */ ni(e) || Ko(e) ? Be({}, e) : e : null;
}
function Zt(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: r, children: l, transition: a } = e, d = t ? oa(i || {}, t) : i, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && sr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? X(o) ? o.concat(kn(t)) : [o, kn(t)] : kn(t)
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
    patchFlag: t && e.type !== Q ? r === -1 ? 16 : r | 16 : r,
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
  return a && s && ii(
    p,
    a.clone(p)
  ), p;
}
function rt(e = " ", t = 0) {
  return dt(is, null, e, t);
}
function De(e = "", t = !1) {
  return t ? (G(), na(mt, null, e)) : dt(mt, null, e);
}
function Ye(e) {
  return e == null || typeof e == "boolean" ? dt(mt) : X(e) ? dt(
    Q,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : nr(e) ? ct(e) : dt(is, null, String(e));
}
function ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Zt(e);
}
function Bn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (X(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Bn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Ko(t) ? t._ctx = ke : i === 3 && ke && (ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (se(t)) {
    if (s & 65) {
      Bn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ke }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [rt(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function oa(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = at([t.class, s.class]));
      else if (i === "style")
        t.style = Js([t.style, s.style]);
      else if (Xn(i)) {
        const o = t[i], r = s[i];
        r && o !== r && !(X(o) && o.includes(r)) ? t[i] = o ? [].concat(o, r) : r : r == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Yn(i) && (t[i] = r);
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
const ra = jo();
let la = 0;
function aa(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || ra, o = {
    uid: la++,
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
    scope: new Hr(
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
    propsOptions: Wl(s, i),
    emitsOptions: Ul(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: le,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: le,
    data: le,
    props: le,
    attrs: le,
    slots: le,
    refs: le,
    setupState: le,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Dl.bind(null, o), e.ce && e.ce(o), o;
}
let wt = null;
const ca = () => wt || ke;
let Hn, Tn;
{
  const e = qn(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  Hn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => wt = n
  ), Tn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Sn = n
  );
}
const li = (e) => {
  const t = wt;
  return Hn(e), e.scope.on(), () => {
    e.scope.off(), Hn(t);
  };
}, Ci = () => {
  wt && wt.scope.off(), Hn(null);
};
function ir(e) {
  return e.vnode.shapeFlag & 4;
}
let Sn = !1;
function ua(e, t = !1, n = !1) {
  t && Tn(t);
  const { props: s, children: i } = e.vnode, o = ir(e);
  Kl(e, s, o, t), Xl(e, i, n || t);
  const r = o ? fa(e, t) : void 0;
  return t && Tn(!1), r;
}
function fa(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, kl);
  const { setup: s } = n;
  if (s) {
    Tt();
    const i = e.setupContext = s.length > 1 ? pa(e) : null, o = li(e), r = Mn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = ao(r);
    if (St(), o(), (l || e.sp) && !gn(e) && Pl(e), l) {
      if (r.then(Ci, Ci), t)
        return r.then((a) => {
          Tn(!0);
          try {
            Ii(e, a, t);
          } finally {
            Tn(!1);
          }
        }).catch((a) => {
          ts(a, e, 0);
        });
      e.asyncDep = r;
    } else
      Ii(e, r);
  } else
    or(e);
}
function Ii(e, t, n) {
  se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ae(t) && (e.setupState = Ro(t)), or(e);
}
function or(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Vt);
}
const da = {
  get(e, t) {
    return Te(e, "get", ""), e[t];
  }
};
function pa(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, da),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function os(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ro(ul(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in hn)
        return hn[n](e);
    },
    has(t, n) {
      return n in t || n in hn;
    }
  })) : e.proxy;
}
function ma(e) {
  return se(e) && "__vccOpts" in e;
}
const he = (e, t) => /* @__PURE__ */ gl(e, t, Sn), ga = "3.5.41";
let Os;
const Mi = typeof window < "u" && window.trustedTypes;
if (Mi)
  try {
    Os = /* @__PURE__ */ Mi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const rr = Os ? (e) => Os.createHTML(e) : (e) => e, ha = "http://www.w3.org/2000/svg", va = "http://www.w3.org/1998/Math/MathML", lt = typeof document < "u" ? document : null, Ai = lt && /* @__PURE__ */ lt.createElement("template"), _a = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? lt.createElementNS(ha, e) : t === "mathml" ? lt.createElementNS(va, e) : n ? lt.createElement(e, { is: n }) : lt.createElement(e);
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
      Ai.innerHTML = rr(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ai.content;
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
}, ba = /* @__PURE__ */ Symbol("_vtc");
function ya(e, t, n) {
  const s = e[ba];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Pi = /* @__PURE__ */ Symbol("_vod"), xa = /* @__PURE__ */ Symbol("_vsh"), Ta = /* @__PURE__ */ Symbol(""), Sa = /(?:^|;)\s*display\s*:/;
function wa(e, t, n) {
  const s = e.style, i = _e(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (_e(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && cn(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && cn(s, r, "");
    for (const r in n) {
      r === "display" && (o = !0);
      const l = n[r];
      l != null ? Ca(
        e,
        r,
        !_e(t) && t ? t[r] : void 0,
        l
      ) || cn(s, r, l) : cn(s, r, "");
    }
  } else if (i) {
    if (t !== n) {
      const r = s[Ta];
      r && (n += ";" + r), s.cssText = n, o = Sa.test(n);
    }
  } else t && e.removeAttribute("style");
  Pi in e && (e[Pi] = o ? s.display : "", e[xa] && (s.display = "none"));
}
const Ri = /\s*!important$/;
function cn(e, t, n) {
  if (X(n))
    n.forEach((s) => cn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Ea(e, t);
    Ri.test(n) ? e.setProperty(
      Gt(s),
      n.replace(Ri, ""),
      "important"
    ) : e[s] = n;
  }
}
const Vi = ["Webkit", "Moz", "ms"], vs = {};
function Ea(e, t) {
  const n = vs[t];
  if (n)
    return n;
  let s = Ue(t);
  if (s !== "filter" && s in e)
    return vs[t] = s;
  s = fo(s);
  for (let i = 0; i < Vi.length; i++) {
    const o = Vi[i] + s;
    if (o in e)
      return vs[t] = o;
  }
  return t;
}
function Ca(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && _e(s) && n === s;
}
const Ni = "http://www.w3.org/1999/xlink";
function Li(e, t, n, s, i, o = Fr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ni, t.slice(6, t.length)) : e.setAttributeNS(Ni, t, n) : n == null || o && !mo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : qe(n) ? String(n) : n
  );
}
function ki(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? rr(n) : n);
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
    l === "boolean" ? n = mo(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
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
function Ia(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Gi = /* @__PURE__ */ Symbol("_vei");
function Ma(e, t, n, s, i = null) {
  const o = e[Gi] || (e[Gi] = {}), r = o[t];
  if (s && r)
    r.value = s;
  else {
    const [l, a] = Ra(t);
    if (s) {
      const d = o[t] = La(
        s,
        i
      );
      bt(e, l, d, a);
    } else r && (Ia(e, l, r, a), o[t] = void 0);
  }
}
const Aa = /(Once|Passive|Capture)$/, Pa = /^on:?(?:Once|Passive|Capture)$/;
function Ra(e) {
  let t, n;
  for (; (n = e.match(Aa)) && !Pa.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Gt(e.slice(2)), t];
}
let _s = 0;
const Va = /* @__PURE__ */ Promise.resolve(), Na = () => _s || (Va.then(() => _s = 0), _s = Date.now());
function La(e, t) {
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
  return n.value = e, n.attached = Na(), n;
}
const $i = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ka = (e, t, n, s, i, o) => {
  const r = i === "svg";
  t === "class" ? ya(e, s, r) : t === "style" ? wa(e, n, s) : Xn(t) ? Yn(t) || Ma(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ga(e, t, s, r)) ? (ki(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Li(e, t, s, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  ($a(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !_e(s))) ? ki(e, Ue(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Li(e, t, s, r));
};
function Ga(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $i(t) && se(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return $i(t) && _e(n) ? !1 : t in e;
}
function $a(e, t) {
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
  return X(t) ? (n) => Ln(t, n) : t;
};
function Oa(e) {
  e.target.composing = !0;
}
function Oi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Qe = /* @__PURE__ */ Symbol("_assign"), Vn = /* @__PURE__ */ Symbol("_initialValue");
function bs(e, t, n) {
  return t && (e = e.trim()), n && (e = Qn(e)), e;
}
const ve = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[Vn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Vn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Qe] = Qt(i);
    const o = s || i.props && i.props.type === "number";
    bt(e, t ? "change" : "input", (r) => {
      r.target.composing || e[Qe](bs(e.value, n, o));
    }), (n || o) && bt(e, "change", () => {
      e.value = bs(e.value, n, o);
    }), t || (bt(e, "compositionstart", Oa), bt(e, "compositionend", Oi), bt(e, "change", Oi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", o = e[Vn];
    delete e[Vn], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[Qe](bs(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: o } }, r) {
    if (e[Qe] = Qt(r), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Qn(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === a) || (e.value = a);
  }
}, Di = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Qe] = Qt(n), bt(e, "change", () => {
      const s = e._modelValue, i = wn(e), o = e.checked, r = e[Qe];
      if (X(s)) {
        const l = Xs(s, i), a = l !== -1;
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
        r(lr(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Ui,
  beforeUpdate(e, t, n) {
    e[Qe] = Qt(n), Ui(e, t, n);
  }
};
function Ui(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let i;
  if (X(t))
    i = Xs(t, s.props.value) > -1;
  else if (qt(t))
    i = t.has(s.props.value);
  else {
    if (t === n) return;
    i = en(t, lr(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const de = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, bt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? Qn(wn(o)) : wn(o)
      );
      e[Qe](
        e.multiple ? qt(e._modelValue) ? new Set(i) : i : i[0]
      ), e._assigning = !0, No(() => {
        e._assigning = !1;
      });
    }), e[Qe] = Qt(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ji(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Qe] = Qt(n);
  },
  updated(e, { value: t }) {
    e._assigning || ji(e, t);
  }
};
function ji(e, t) {
  const n = e.multiple, s = X(t);
  if (!(n && !s && !qt(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const r = e.options[i], l = wn(r);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? r.selected = t.some((d) => String(d) === String(l)) : r.selected = Xs(t, l) > -1;
        } else
          r.selected = t.has(l);
      else if (en(wn(r), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function wn(e) {
  return "_value" in e ? e._value : e.value;
}
function lr(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Da = /* @__PURE__ */ Be({ patchProp: ka }, _a);
let Fi;
function Ua() {
  return Fi || (Fi = Zl(Da));
}
const ja = ((...e) => {
  const t = Ua().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Ba(s);
    if (!i) return;
    const o = t._component;
    !se(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, Fa(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
});
function Fa(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ba(e) {
  return _e(e) ? document.querySelector(e) : e;
}
const Ha = "tavern_multi_tts_cache", Le = "audio_cache", Ka = 1, Bi = 100, Hi = 50 * 1024 * 1024;
function Ki(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function za(e) {
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
async function Wa(e) {
  const t = za(e), n = JSON.stringify(t);
  if (Object.keys(t).some((i) => /api[_-]?key|authorization|token|secret|password/i.test(i)))
    throw new Error("音频缓存键不得包含密钥字段");
  const s = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(n));
  return [...new Uint8Array(s)].map((i) => i.toString(16).padStart(2, "0")).join("");
}
function Ja() {
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
function Xa(e, t) {
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
      const d = e.open(t, Ka);
      i += 1, d.onupgradeneeded = () => {
        const p = d.result;
        p.objectStoreNames.contains(Le) || p.createObjectStore(Le, { keyPath: "key" });
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
function Ya(e, t) {
  const n = Xa(e, t);
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
          const p = a.result;
          if (!p) {
            o(d);
            return;
          }
          d.push(p.value), p.continue();
        }, a.onerror = () => r(a.error ?? Error("读取缓存记录失败"));
      });
    }
  };
}
async function Za(e) {
  const t = await e.getAll();
  let n = t.reduce((o, r) => o + (r.blob?.size ?? 0), 0);
  if (t.length <= Bi && n <= Hi)
    return;
  const s = [...t].sort((o, r) => o.created_at - r.created_at);
  let i = t.length;
  for (const o of s) {
    if (i <= Bi && n <= Hi)
      break;
    await e.delete(o.key), i -= 1, n -= o.blob?.size ?? 0;
  }
}
function Qa(e) {
  const t = e?.backend === "memory" ? Ja() : Ya(
    e?.indexedDB ?? indexedDB,
    e?.dbName ?? Ha
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
      }), await Za(t);
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
const rs = Qa({
  backend: typeof indexedDB > "u" ? "memory" : "indexeddb"
});
function qa(e) {
  return rs.get(e);
}
function ec(e, t) {
  return rs.set(e, t);
}
function ar() {
  return rs.clear();
}
function tc() {
  return rs.stats();
}
let _t = null, Gn = null;
function $n() {
  _t && (_t.pause(), Gn?.());
}
function cr(e, t, n, s, i) {
  const o = URL.createObjectURL(e), r = new Audio(o);
  let l = "paused";
  const a = () => {
    URL.revokeObjectURL(o), _t === r && (_t = null, Gn = null);
  }, d = () => {
    _t && _t !== r && (_t.pause(), Gn?.()), _t = r, Gn = a;
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
  const p = async () => {
    d();
    try {
      await r.play();
    } catch (h) {
      throw l = "error", a(), s?.(h), h;
    }
  };
  return p().catch(() => {
  }), {
    stop: () => {
      l = "ended", r.pause(), a();
    },
    pause: () => {
      l === "playing" && r.pause();
    },
    resume: p,
    restart: async () => {
      r.currentTime = 0, await p();
    },
    getState: () => l
  };
}
function ur(e) {
  return [...e].map((n) => n.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(n) ? "_" : n).join("").trim() || "audio.mp3";
}
function nc(e, t, n = "mp3") {
  return ur(`tavern_multi_tts_${e}_${t}.${n}`);
}
function sc(e, t) {
  const n = ur(t), s = URL.createObjectURL(e), i = URL.revokeObjectURL.bind(URL), o = document.createElement("a");
  o.href = s, o.download = n, document.body.appendChild(o), o.click(), o.remove(), window.setTimeout(() => i(s), 0);
}
const ic = "Tavern Multi-TTS", ys = "tavern_multi_tts", oc = "0.1.0", xs = "tavern-multi-tts-root", Ee = "[Tavern Multi-TTS]", Kn = ["ZH", "EN", "JA", "AR", "ES"], fr = 2, dr = [
  "speech-02-hd",
  "speech-02-turbo",
  "speech-2.8-hd",
  "speech-2.8-turbo",
  "speech-2.6-hd",
  "speech-2.6-turbo"
], Ds = [
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
  schemaVersion: fr,
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
  injectTemplate: Ds
};
function $t(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function ie(e, t) {
  return typeof e == "string" ? e : t;
}
function Ts(e, t) {
  return typeof e == "boolean" ? e : t;
}
function We(e, t, n, s, i = !1) {
  const o = typeof e == "number" ? e : Number(e);
  if (!Number.isFinite(o))
    return s;
  const r = i ? Math.round(o) : o;
  return Math.min(n, Math.max(t, r));
}
function rc(e) {
  return e === "minimax" || e === "local_gsvi" || e === "index_tts" ? e : "minimax";
}
function pr(e) {
  return Kn.includes(String(e)) ? e : Et.indexTtsLanguage;
}
function lc(e) {
  return e === "beijing" ? "beijing" : "international";
}
function ac(e) {
  return dr.includes(String(e)) ? e : Et.model;
}
function cc(e) {
  return e === "manual" || e === "auto_first_n" || e === "auto_all" ? e : Et.prefetchMode;
}
function uc(e) {
  return e === "user" || e === "assistant" || e === "system" ? e : Et.injectRole;
}
function fc(e) {
  return e === "zh" || e === "en" || e === "ja" ? e : Et.testLanguage;
}
function dc(e) {
  return e === "wav" ? "wav" : "mp3";
}
function mr(e) {
  return Array.isArray(e) ? e.filter($t).map((t) => ({
    characterName: ie(t.characterName, "").trim(),
    minimaxVoiceId: ie(t.minimaxVoiceId, "").trim()
  })).filter((t) => t.characterName || t.minimaxVoiceId) : [];
}
function pc(e) {
  return Array.isArray(e) ? e.filter($t).map((t) => ({
    name: ie(t.name, "").trim(),
    mappings: mr(t.mappings)
  })).filter((t) => t.name) : [];
}
function gr(e) {
  return Array.isArray(e) ? e.filter($t).map((t) => ({
    characterName: ie(t.characterName, "").trim(),
    gsviVoiceId: ie(t.gsviVoiceId, "").trim(),
    gsviLanguage: ie(t.gsviLanguage, "").trim(),
    gsviEmotion: ie(t.gsviEmotion, "").trim()
  })).filter((t) => t.characterName || t.gsviVoiceId) : [];
}
function mc(e) {
  return Array.isArray(e) ? e.filter($t).map((t) => ({
    name: ie(t.name, "").trim(),
    mappings: gr(t.mappings)
  })).filter((t) => t.name) : [];
}
function hr(e) {
  return Array.isArray(e) ? e.filter($t).map((t) => ({
    characterName: ie(t.characterName, "").trim(),
    indexTtsVoiceId: ie(t.indexTtsVoiceId, "").trim(),
    indexTtsLanguage: pr(t.indexTtsLanguage)
  })).filter((t) => t.characterName || t.indexTtsVoiceId) : [];
}
function gc(e) {
  return Array.isArray(e) ? e.filter($t).map((t) => ({
    name: ie(t.name, "").trim(),
    mappings: hr(t.mappings)
  })).filter((t) => t.name) : [];
}
function zt(e) {
  const t = $t(e) ? e : {};
  return {
    schemaVersion: fr,
    enabled: Ts(t.enabled, Et.enabled),
    ttsEngine: rc(t.ttsEngine),
    apiKey: ie(t.apiKey, ""),
    groupId: ie(t.groupId, ""),
    voiceId: ie(t.voiceId, ""),
    voiceCatalogSelectedId: ie(t.voiceCatalogSelectedId, ""),
    minimaxRegion: lc(t.minimaxRegion),
    testLanguage: fc(t.testLanguage),
    model: ac(t.model),
    speed: We(t.speed, 0.5, 2, 1),
    vol: We(t.vol, 0, 10, 1),
    requestTimeoutMs: We(t.requestTimeoutMs, 1e3, 3e4, 15e3, !0),
    maxConcurrency: We(t.maxConcurrency, 1, 10, 3, !0),
    prefetchMode: cc(t.prefetchMode),
    prefetchFirstCount: We(t.prefetchFirstCount, 1, 10, 2, !0),
    localGsviBaseUrl: ie(t.localGsviBaseUrl, ""),
    localGsviAuthToken: ie(t.localGsviAuthToken, ""),
    localGsviModel: ie(t.localGsviModel, ""),
    localGsviFormat: dc(t.localGsviFormat),
    localGsviUseReferenceAudio: Ts(t.localGsviUseReferenceAudio, !1),
    localGsviCharacter: ie(t.localGsviCharacter, ""),
    localGsviLanguage: ie(t.localGsviLanguage, "ja"),
    localGsviEmotion: ie(t.localGsviEmotion, ""),
    localGsviReferenceText: ie(t.localGsviReferenceText, ""),
    localGsviTopK: We(t.localGsviTopK, 1, 200, 20, !0),
    localGsviTopP: We(t.localGsviTopP, 0, 1, 0.7),
    localGsviTemperature: We(t.localGsviTemperature, 0, 2, 0.7),
    localGsviTextLang: ie(t.localGsviTextLang, "多语种混合"),
    localGsviTextSplitMethod: ie(t.localGsviTextSplitMethod, "按标点符号切"),
    localGsviBatchSize: We(t.localGsviBatchSize, 1, 8, 1, !0),
    characterMappings: mr(t.characterMappings),
    characterMappingPresets: pc(t.characterMappingPresets),
    gsviCharacterMappings: gr(t.gsviCharacterMappings),
    gsviCharacterMappingPresets: mc(t.gsviCharacterMappingPresets),
    indexTtsBaseUrl: ie(t.indexTtsBaseUrl, Et.indexTtsBaseUrl),
    indexTtsVoiceId: ie(t.indexTtsVoiceId, ""),
    indexTtsLanguage: pr(t.indexTtsLanguage),
    indexTtsCharacterMappings: hr(t.indexTtsCharacterMappings),
    indexTtsCharacterMappingPresets: gc(t.indexTtsCharacterMappingPresets),
    injectEnabled: Ts(t.injectEnabled, !0),
    injectDepth: We(t.injectDepth, 0, 50, 1, !0),
    injectRole: uc(t.injectRole),
    injectTemplate: ie(t.injectTemplate, Ds) || Ds
  };
}
function Wt(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function hc(e, t) {
  return e.enabled !== t.enabled || e.injectEnabled !== t.injectEnabled || e.injectDepth !== t.injectDepth || e.injectRole !== t.injectRole || e.injectTemplate !== t.injectTemplate || e.ttsEngine !== t.ttsEngine || !Wt(e.characterMappings, t.characterMappings) || !Wt(e.gsviCharacterMappings, t.gsviCharacterMappings) || !Wt(e.indexTtsCharacterMappings, t.indexTtsCharacterMappings);
}
function vc(e, t) {
  return e.enabled !== t.enabled || e.ttsEngine !== t.ttsEngine || !Wt(e.characterMappings, t.characterMappings) || !Wt(e.gsviCharacterMappings, t.gsviCharacterMappings) || !Wt(e.indexTtsCharacterMappings, t.indexTtsCharacterMappings);
}
function _c(e, t) {
  return {
    syncInjection: hc(e, t),
    refreshDecorations: vc(e, t)
  };
}
function bc(e, t, n = {}) {
  let s = !1, i = !1, o = null, r = null, l = null;
  function a() {
    return zt(e.readRawSettings());
  }
  function d() {
    const P = a();
    return e.writeSettings(P), P;
  }
  function p() {
    if (s)
      return !0;
    const P = document.getElementById(xs);
    P && P.remove();
    const V = e.findSettingsRoot();
    return V ? (l = document.createElement("div"), l.id = xs, l.dataset.tavernMultiTts = "settings", V.appendChild(l), t.mount(l, a()), r = e.onPageHide(() => {
      h({ removeSettings: !1 });
    }), s = !0, n.startRuntime?.(), console.info(`${Ee} settings panel mounted`), !0) : !1;
  }
  function h(P) {
    n.stopRuntime?.(), n.stopPlayback?.(), o?.(), o = null, i = !1, r?.(), r = null, t.unmount(), (l ?? document.getElementById(xs))?.remove(), l = null, s = !1, P.removeSettings && e.removeSettings();
  }
  function w() {
    s || i || (d(), !p() && (i = !0, o = e.onAppReady(() => {
      const P = i;
      i = !1;
      const V = o;
      o = null, V?.(), P && (p() || console.error(
        `${Ee} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`
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
      h({ removeSettings: !1 }), console.info(`${Ee} disabled`);
    },
    destroy() {
      h({ removeSettings: !1 });
    },
    install() {
      d();
    },
    clean() {
      return h({ removeSettings: !0 }), console.info(`${Ee} settings cleaned`), n.clearCache?.();
    },
    delete() {
      return h({ removeSettings: !0 }), console.info(`${Ee} deleted`), n.clearCache?.();
    },
    updateSettings(P) {
      const V = a();
      e.writeSettings(zt(P));
      const R = _c(V, a());
      R.syncInjection && n.syncInjection?.(), R.refreshDecorations && n.refreshDecorations?.();
    },
    setEnabled: S,
    setInjectEnabled: B,
    isActive() {
      return s;
    }
  };
}
function yc() {
  return document.querySelector("#extensions_settings2") ?? document.querySelector("#extensions_settings");
}
class F extends Error {
  code;
  status;
  constructor(t, n, s) {
    super(t), this.name = "TtsRequestError", this.code = n, this.status = s;
  }
}
function vr(e) {
  return e instanceof F;
}
function xc(e) {
  return new F(`请求超时（${e}ms），请检查网络或增大超时时间`, "timeout");
}
function Tc() {
  return new F("请求已取消", "cancelled");
}
async function xt(e, t, n, s) {
  const i = new AbortController();
  let o = !1, r = !1, l = null;
  const a = () => {
    r || (r = !0, clearTimeout(p), h?.removeEventListener("abort", w));
  }, d = () => o && !h?.aborted ? xc(s) : Tc(), p = setTimeout(() => {
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
function Sc(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function wc(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const Ec = /api[_-]?key|authorization|token|secret|cookie|password/i;
function zn(e) {
  if (typeof e == "string")
    return e.length > 80 ? `${e.slice(0, 80)}…(len=${e.length})` : e;
  if (Array.isArray(e))
    return e.map((n) => zn(n));
  if (!e || typeof e != "object")
    return e;
  const t = {};
  for (const [n, s] of Object.entries(e)) {
    if (Ec.test(n)) {
      t[n] = "[redacted]";
      continue;
    }
    if (n === "text" || n === "input" || n === "referenceText" || n === "reference_text") {
      t[n] = typeof s == "string" ? `[text len=${s.length}]` : "[text]";
      continue;
    }
    t[n] = zn(s);
  }
  return t;
}
function ai(e, t, n) {
  if (n === void 0) {
    console.info(`${Ee} [${e}] ${t}`);
    return;
  }
  console.info(`${Ee} [${e}] ${t}`, zn(n));
}
function Us(e, t, n) {
  if (n === void 0) {
    console.warn(`${Ee} [${e}] ${t}`);
    return;
  }
  console.warn(`${Ee} [${e}] ${t}`, zn(n));
}
const _r = "IndexTTS-2.5", js = "indextts", Fs = "1", Bs = "2.5";
function En(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Cc(e) {
  return Kn.includes(String(e));
}
function Ic(e) {
  return {
    model: _r,
    input: e.text,
    voice: e.voiceId.trim(),
    response_format: "wav",
    language: e.language
  };
}
function Mc(e) {
  if (!e.baseUrl.trim())
    throw new F("请先填写 IndexTTS 服务地址", "config");
  if (!e.voiceId.trim())
    throw new F("请先选择 IndexTTS 音色预设", "config");
  if (!Cc(e.language))
    throw new F("IndexTTS 语言必须是 ZH、EN、JA、AR 或 ES", "config");
  if (!e.text.trim())
    throw new F("IndexTTS 合成文本为空", "config");
}
function Ac(e) {
  return (e ?? "").split(";")[0]?.trim().toLowerCase() === "audio/wav";
}
function Pc(e, t) {
  if (En(e) && En(e.error)) {
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
async function Ss(e) {
  try {
    const t = await e.text();
    try {
      return Pc(JSON.parse(t), e.status);
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
function Rc(e) {
  return e.service !== js ? `IndexTTS 健康检查失败：服务名无效（期望 ${js}）` : e.api_version !== Fs ? `IndexTTS 健康检查失败：API 版本不匹配（期望 ${Fs}）` : e.model_version !== Bs ? `IndexTTS 健康检查失败：模型版本不匹配（期望 ${Bs}）` : e.model_loaded !== !0 ? "IndexTTS 服务在线，但模型尚未加载。请先在服务端加载模型后再试。" : e.ok !== !0 ? "IndexTTS 服务报告未就绪" : "IndexTTS 健康检查响应结构无效";
}
function Vc(e) {
  return En(e) ? e.ok === !0 && e.service === js && e.api_version === Fs && e.model_version === Bs && e.model_loaded === !0 ? { ok: !0, message: "IndexTTS 服务在线，模型已加载（IndexTTS-2.5）" } : { ok: !1, message: Rc(e) } : { ok: !1, message: "IndexTTS 健康检查响应结构无效" };
}
function Nc(e) {
  if (!En(e) || !Array.isArray(e.voices))
    throw new F("IndexTTS 音色列表结构无效：缺少 voices 数组", "invalid_json");
  return e.voices.map((t, n) => {
    if (!En(t) || typeof t.id != "string" || !t.id.trim())
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
function Lc(e) {
  return e instanceof F ? { ok: !1, message: e.message } : {
    ok: !1,
    message: "无法连接 IndexTTS 服务。请确认服务已启动，并检查地址是否正确。"
  };
}
function kc(e) {
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
          throw await Ss(i);
        const o = await i.json();
        return Vc(o);
      } catch (i) {
        return Lc(i);
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
        throw await Ss(i);
      return Nc(await i.json());
    },
    async synthesize(n) {
      if (n.engine !== "index_tts")
        throw new F("IndexTTS 适配器收到了错误的引擎请求", "config");
      Mc(n);
      const s = Ic(n), i = Jt(n.baseUrl.trim(), "/v1/audio/speech");
      ai("index_tts", "synthesize", {
        url: i,
        voiceId: s.voice,
        language: s.language,
        model: s.model,
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
        throw await Ss(o);
      const r = o.headers.get("content-type");
      if (!Ac(r))
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
const Gc = ["v2", "v3", "v4", "v2Pro"];
function br(e) {
  const t = e.trim();
  if (!t)
    return { modelName: "", version: "" };
  const n = t.lastIndexOf("|");
  return n < 0 ? { modelName: t, version: "" } : {
    modelName: t.slice(0, n).trim(),
    version: t.slice(n + 1).trim()
  };
}
function $c(e) {
  const t = e.trim().toLowerCase();
  return t === "v2pro" ? "v2Pro" : t === "v2" || t === "v3" || t === "v4" ? t : e.trim();
}
function Oc(e) {
  const t = e.trim();
  return t ? {
    英文: "英语",
    日文: "日语",
    韩文: "韩语"
  }[t] ?? t : "多语种混合";
}
function Dc(e) {
  const t = br(e.modelId), n = t.modelName.trim(), s = $c(t.version) || "v2Pro";
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
        text_lang: Oc(e.textLang),
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
function Uc(e) {
  if (!e.baseUrl.trim())
    throw new F("请先填写 Local-GSVI 服务地址", "config");
  if (!e.modelId.trim())
    throw new F("请先填写或选择 Local-GSVI 模型（modelName|version）", "config");
  if (!e.language.trim() || !e.emotion.trim())
    throw new F(
      "GSVI 生成要求映射完整：语种(prompt_lang)/情绪(emotion)不能为空",
      "config"
    );
  if (!br(e.modelId).modelName)
    throw new F("Local-GSVI 模型格式错误，期望 modelName|version", "config");
  if (!e.text.trim())
    throw new F("Local-GSVI 合成文本为空", "config");
}
function Ae(e) {
  return typeof e == "object" && e !== null;
}
function jc(e) {
  const t = e.replace(/^data:audio\/[a-zA-Z0-9.+-]+;base64,/i, "").trim();
  return t.length >= 16 && /^[A-Za-z0-9+/=\r\n]+$/.test(t);
}
function yr(e) {
  return e.trim().match(/^data:audio\/[a-zA-Z0-9.+-]+;base64,(.+)$/i)?.[1] ?? e.trim();
}
function Fc(e) {
  if (!Ae(e))
    return null;
  const t = e, n = Ae(t.data) ? t.data : void 0, s = Ae(t.output) ? t.output : void 0, i = [
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
    if (typeof o == "string" && jc(o))
      return yr(o);
  return null;
}
function Bc(e) {
  if (!Ae(e))
    return null;
  const t = e, n = Ae(t.data) ? t.data : void 0, s = Ae(t.output) ? t.output : void 0, i = [
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
function Hc(e) {
  if (!Ae(e))
    return "";
  const t = Ae(e.error) ? e.error : void 0, n = Ae(e.base_resp) ? e.base_resp : void 0, s = Ae(e.data) ? e.data : void 0, i = [
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
function Kc(e) {
  const t = atob(yr(e)), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function ws(e) {
  const t = e?.trim() ?? "";
  return t ? { Authorization: `Bearer ${t}` } : {};
}
function zc(e) {
  const t = fetch;
  async function n(s, i, o, r, l) {
    const a = /^https?:\/\//i.test(i) ? i : Jt(s, i);
    let d = !1;
    try {
      d = Sc(s) === new URL(a).origin;
    } catch {
      d = !1;
    }
    const p = await xt(
      t,
      a,
      {
        method: "GET",
        headers: d ? ws(o) : {},
        signal: l
      },
      r
    );
    if (!p.ok)
      throw new F(`下载 GSVI 输出失败：HTTP ${p.status}`, "http", p.status);
    return await p.blob();
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
      for (const r of Gc) {
        const l = Jt(i, `/models/${encodeURIComponent(r)}`);
        try {
          const a = await xt(
            t,
            l,
            { method: "GET", headers: ws(s.authToken), signal: s.signal },
            s.timeoutMs
          );
          if (!a.ok) {
            Us("local_gsvi", `GET /models/${r} failed`, {
              status: a.status
            }), a.close();
            continue;
          }
          const d = await a.json(), p = Ae(d) && Ae(d.models) ? d.models : d;
          if (!Ae(p))
            continue;
          Object.entries(p).forEach(([h, w]) => {
            if (!h || !Ae(w))
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
          Us("local_gsvi", `GET /models/${r} failed`);
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
      Uc(s);
      const i = Dc(s), o = {
        "Content-Type": "application/json",
        ...ws(s.authToken)
      };
      ai("local_gsvi", "synthesize", {
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
        const a = await r.json(), d = Fc(a);
        if (d)
          return new Blob([Uint8Array.from(Kc(d))], {
            type: s.format === "wav" ? "audio/wav" : "audio/mpeg"
          });
        const p = Bc(a);
        if (p)
          return await n(
            s.baseUrl.trim(),
            p,
            s.authToken ?? "",
            s.timeoutMs,
            s.signal
          );
        throw new F(
          `Local-GSVI 未返回可用音频：${Hc(a) || "JSON 响应中未找到音频"}`,
          "missing_audio"
        );
      }
      return await r.blob();
    }
  };
}
const Wc = {
  international: {
    tts: "https://api.minimaxi.com/v1/t2a_v2",
    voice: "https://api.minimaxi.com/v1/get_voice"
  },
  beijing: {
    tts: "https://api-bj.minimaxi.com/v1/t2a_v2",
    voice: "https://api-bj.minimaxi.com/v1/get_voice"
  }
}, Jc = /* @__PURE__ */ new Set([408, 409, 429, 500, 502, 503, 504]), Xc = /* @__PURE__ */ new Set([1e3, 1001, 1002, 1039]), zi = 2, Yc = "tavern_multi_tts_voice_catalog_v1", Zc = 1440 * 60 * 1e3;
function Wn(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function Hs(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Wi(e) {
  return Wc[Hs(e)];
}
function xr(e, t) {
  return `${Yc}:${e}:${t.trim()}`;
}
function Qc(e) {
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
function Ji(e) {
  return `Bearer ${Wn(e)}`;
}
function qc(e) {
  const t = e.trim(), n = new Uint8Array(t.length / 2);
  for (let s = 0; s < t.length; s += 2)
    n[s / 2] = Number.parseInt(t.slice(s, s + 2), 16);
  return n;
}
function eu(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function tu(e) {
  const t = e.trim();
  return /^[0-9a-fA-F]+$/.test(t) && t.length % 2 === 0 ? qc(t) : eu(t);
}
function nu(e, t) {
  const s = `${t ?? ""} ${e}`.toLowerCase(), i = s.includes("japanese") ? "Japanese" : s.includes("english") ? "English" : s.includes("chinese") ? "Chinese" : s.includes("korean") ? "Korean" : s.includes("french") ? "French" : s.includes("german") ? "German" : s.includes("spanish") ? "Spanish" : "Unknown", o = s.includes("female") || s.includes("女") || s.includes("lady") || s.includes("girl") ? "Female" : s.includes("male") || s.includes("男") || s.includes("man") || s.includes("boy") ? "Male" : "Unknown";
  return { language: i, gender: o };
}
function su(e, t) {
  const n = t.trim();
  if (!n)
    return null;
  try {
    const s = localStorage.getItem(xr(e, n));
    if (!s)
      return null;
    const i = JSON.parse(s);
    return !i?.expires_at || Date.now() > i.expires_at ? null : i.items ?? null;
  } catch {
    return null;
  }
}
function iu(e, t, n) {
  const s = t.trim();
  s && localStorage.setItem(
    xr(e, s),
    JSON.stringify({
      expires_at: Date.now() + Zc,
      items: n
    })
  );
}
function ou(e) {
  const t = Wn(e.apiKey), n = e.groupId.trim(), s = e.voiceId.trim();
  if (!t || !n || !s)
    throw new F("MiniMax 引擎缺少必要配置：API Key / Group ID / Voice ID", "config");
  if (!e.text.trim())
    throw new F("MiniMax 合成文本为空", "config");
}
function ru(e) {
  return typeof e == "object" && e !== null;
}
function lu(e, t) {
  return Jc.has(e) || Xc.has(t);
}
function au(e) {
  const t = fetch;
  return {
    id: "minimax",
    async checkHealth(n) {
      if (n.engine !== "minimax")
        throw new F("MiniMax 适配器收到了错误的引擎请求", "config");
      if (!Wn(n.apiKey))
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
      const s = Wn(n.apiKey);
      if (!s)
        throw new F("请先填写 API Key", "config");
      const i = Hs(n.region);
      if (!n.forceRefresh) {
        const h = su(i, n.groupId);
        if (h && h.length > 0)
          return h;
      }
      const o = Wi(i).voice, r = await xt(
        t,
        o,
        {
          method: "POST",
          headers: {
            Authorization: Ji(s),
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
      const d = [], p = (h, w = []) => {
        w.forEach((S) => {
          const B = nu(S.voice_id, S.voice_name);
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
      return p("system", a.system_voice ?? []), p("voice_cloning", a.voice_cloning ?? []), p("voice_generation", a.voice_generation ?? []), iu(i, n.groupId, d), d;
    },
    async synthesize(n) {
      if (n.engine !== "minimax")
        throw new F("MiniMax 适配器收到了错误的引擎请求", "config");
      ou(n);
      const s = Qc(n), i = Wi(n.region).tts, o = {
        Authorization: Ji(n.apiKey),
        "Content-Type": "application/json"
      };
      ai("minimax", "synthesize", {
        model: s.model,
        voiceId: s.voice_setting.voice_id,
        region: Hs(n.region),
        groupId: n.groupId.trim(),
        text: n.text
      });
      let r = null;
      for (let l = 0; l <= zi; l += 1) {
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
        if (!ru(d))
          throw new F("MiniMax 响应结构无效", "invalid_json");
        const p = d;
        if (!a.ok || (p.base_resp?.status_code ?? 0) !== 0) {
          const S = p.base_resp?.status_code ?? a.status, B = p.base_resp?.status_msg ?? a.statusText ?? "unknown error";
          if (r = `MiniMax 请求失败：code=${S}, msg=${B}`, lu(a.status, S) && l < zi) {
            Us("minimax", "retryable synthesize failure", {
              status: a.status,
              attempt: l
            }), await wc(250 * (l + 1));
            continue;
          }
          throw new F(r, "http", a.status);
        }
        const h = p.data?.audio ?? p.data?.audio_file ?? p.audio_file;
        if (!h)
          throw new F("MiniMax 响应中未找到音频字段", "missing_audio");
        const w = tu(h);
        return new Blob([Uint8Array.from(w)], { type: "audio/mpeg" });
      }
      throw new F(r ?? "MiniMax 请求失败：未知错误", "http");
    }
  };
}
function On(e) {
  if (e === "minimax")
    return au();
  if (e === "local_gsvi")
    return zc();
  if (e === "index_tts")
    return kc();
  throw new F(`未知 TTS 引擎：${String(e)}`, "config");
}
const Ks = "tavern_multi_tts_say_rule", cu = 1, uu = {
  system: 0,
  user: 1,
  assistant: 2
};
function Tr(e) {
  const t = e.ttsEngine === "index_tts" ? e.indexTtsCharacterMappings : e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.characterMappings, n = [];
  for (const s of t) {
    const i = s.characterName.trim();
    i && !n.includes(i) && n.push(i);
  }
  return n;
}
function fu(e) {
  const t = Tr(e);
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
function du(e) {
  const t = Tr(e).join("、") || "（未配置角色映射）";
  return `${e.injectTemplate.replaceAll("${target_characters}", t).replaceAll("${mapped_characters}", t)}

${fu(e)}`;
}
function Es(e, t) {
  return !t.enabled || !t.injectEnabled ? (e.deleteExtensionPrompt(Ks), { applied: !1 }) : (e.setExtensionPrompt(
    Ks,
    du(t),
    cu,
    t.injectDepth,
    !1,
    uu[t.injectRole]
  ), { applied: !0, depth: t.injectDepth, role: t.injectRole });
}
function pu(e) {
  e.deleteExtensionPrompt(Ks);
}
const Xi = /<say(?:\s+char\s*=\s*(?:"([^"]*)"|“([^”]*)”))?\s*>([\s\S]*?)<\/say>/gi;
function mu(e) {
  const t = new RegExp(Xi.source, Xi.flags), n = [];
  let s, i = 0;
  for (; (s = t.exec(e)) !== null; ) {
    const o = (s[1] ?? s[2])?.trim(), r = s[3].trim();
    r && (n.push({ index: i, text: r, ...o ? { char: o } : {} }), i += 1);
  }
  return n;
}
const gu = /* @__PURE__ */ new Set([
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
]), Sr = /\(([a-z-]+)\)/gi, hu = /\([a-z-]+\)/gi;
function ci(e) {
  return e.replace(/\s{2,}/g, " ").trim();
}
function vu(e) {
  return ci(
    e.replace(Sr, (t, n) => {
      const s = String(n).toLowerCase();
      return gu.has(s) ? `(${s})` : "";
    })
  );
}
function _u(e) {
  return ci(e.replace(Sr, ""));
}
function bu(e) {
  return ci(e.replace(hu, ""));
}
function yu(e, t) {
  const n = vu(e);
  return t === "local_gsvi" || t === "index_tts" ? bu(n) : n;
}
async function xu(e, t) {
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
const Cn = "data-tavern-multi-tts-rendered", ui = "data-tavern-multi-tts-swipe", ls = "tavern-multi-tts-segment", Jn = "tavern-multi-tts-fallback-list";
function Tu(e, t, n) {
  return `${e}:${t}:${n}`;
}
function Yi(e) {
  const t = e.split(":");
  if (t.length !== 3)
    return null;
  const n = Number(t[0]), s = Number(t[1]), i = Number(t[2]);
  return [n, s, i].every(Number.isFinite) ? { message_id: n, swipe_id: s, index: i } : null;
}
function Nn(e) {
  return document.querySelector(`#chat .mes[mesid="${e}"]`);
}
function Su(e) {
  return e.querySelector(".mes_text");
}
function wr(e, t) {
  const n = e.getAttribute(Cn) === "true", s = e.querySelector(`.${ls}`) !== null;
  return !n || !s ? !1 : t === void 0 ? !0 : e.getAttribute(ui) === String(t);
}
function Rt(e = document) {
  e.querySelectorAll(`.${ls}`).forEach((t) => {
    const n = t.querySelector(".tavern-multi-tts-text")?.textContent ?? "";
    t.replaceWith(document.createTextNode(n));
  }), e.querySelectorAll(`.${Jn}`).forEach((t) => t.remove()), e.querySelectorAll(`[${Cn}]`).forEach((t) => {
    t.removeAttribute(Cn), t.removeAttribute(ui);
  });
}
function ot(e, t) {
  e.classList.remove("is-loading", "is-ready", "is-playing", "is-error"), t !== "idle" && e.classList.add(`is-${t}`);
  const n = e.querySelector(".tavern-multi-tts-indicator");
  n && (n.textContent = t === "loading" ? "⏳" : t === "ready" ? "▶" : t === "playing" ? "⏸" : t === "error" ? "⚠" : "▶");
}
function Zi(e) {
  return e.replace(/\s+/g, "").trim();
}
function wu(e, t, n, s) {
  const i = e.splitText(t);
  i.splitText(n), i.replaceWith(s);
}
function Eu(e, t, n, s) {
  const i = [t, n].map((l) => l.trim()).filter(Boolean), o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let r = o.nextNode();
  for (; r; ) {
    const l = r.parentElement;
    if (l && !l.closest(`.${ls}`) && !l.closest(`.${Jn}`) && !l.closest(".mes_buttons")) {
      const a = r.nodeValue ?? "";
      for (const d of i) {
        const p = a.indexOf(d);
        if (p >= 0)
          return wu(r, p, d.length, s), !0;
        if (Zi(a) === Zi(d))
          return r.replaceWith(s), !0;
      }
    }
    r = o.nextNode();
  }
  return !1;
}
function Cu(e, t, n, s, i, o, r) {
  const l = Tu(e, t, n.index), a = document.createElement("span");
  a.className = ls, a.dataset.tavernMultiTtsKey = l;
  const d = document.createElement("span");
  d.className = "tavern-multi-tts-text", d.textContent = s;
  const p = document.createElement("span");
  p.className = "tavern-multi-tts-indicator", p.textContent = "▶";
  const h = document.createElement("span");
  h.className = "tavern-multi-tts-actions";
  const w = document.createElement("button");
  w.type = "button", w.className = "tavern-multi-tts-action", w.textContent = "下", h.append(w), a.append(d, p, h), ot(a, "idle");
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
    R && (S?.stop(), S = cr(
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
    const k = R.target;
    if (k?.closest(".tavern-multi-tts-indicator")) {
      V();
      return;
    }
    k?.closest(".tavern-multi-tts-action") || P();
  }), w.addEventListener("click", (R) => {
    R.preventDefault(), R.stopPropagation(), (async () => {
      const k = await B();
      k && o.downloadAudio(k, e, n.index);
    })();
  }), a;
}
function Iu(e, t, n, s, i, o = 0) {
  if (wr(e, o))
    return 0;
  e.getAttribute(Cn) === "true" && Rt(e);
  const r = Su(e) ?? e, l = [];
  let a = 0;
  for (const d of n) {
    if (!d.displayText || !d.ttsText)
      continue;
    const p = Cu(
      t,
      o,
      d,
      d.displayText,
      d.ttsText,
      s,
      i
    );
    Eu(r, d.text, d.displayText, p) ? a += 1 : l.push(p);
  }
  if (r.querySelectorAll(`.${Jn}`).forEach((d) => d.remove()), l.length > 0) {
    const d = document.createElement("div");
    d.className = Jn, l.forEach((p) => d.append(p, document.createTextNode(" "))), r.append(d), a += l.length;
  }
  return a > 0 && (e.setAttribute(Cn, "true"), e.setAttribute(ui, String(o))), a;
}
function Xt(e, t) {
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const s = e[n];
    if (s && t(s))
      return s;
  }
}
function Er(e, t) {
  return e.characterName.trim() === t && !!e.minimaxVoiceId.trim();
}
function Cr(e, t) {
  return e.characterName.trim() === t && !!e.gsviVoiceId.trim() && !!e.gsviLanguage.trim() && !!e.gsviEmotion.trim();
}
function Ir(e, t) {
  return e.characterName.trim() === t && !!e.indexTtsVoiceId.trim() && !!e.indexTtsLanguage;
}
function Mr(e, t) {
  const n = t?.trim() ?? "";
  return n ? e.ttsEngine === "index_tts" ? !!Xt(
    e.indexTtsCharacterMappings,
    (s) => Ir(s, n)
  ) : e.ttsEngine === "local_gsvi" ? !!Xt(
    e.gsviCharacterMappings,
    (s) => Cr(s, n)
  ) : e.ttsEngine === "minimax" ? !!Xt(e.characterMappings, (s) => Er(s, n)) : !1 : !0;
}
function Ar(e, t) {
  const n = t?.trim() ?? "";
  if (e.ttsEngine === "index_tts") {
    const i = Xt(
      e.indexTtsCharacterMappings,
      (o) => Ir(o, n)
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
      (o) => Cr(o, n)
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
      (i) => Er(i, n)
    )?.minimaxVoiceId?.trim() || e.voiceId.trim() || e.voiceCatalogSelectedId.trim()
  };
}
function Pr(e, t, n) {
  if (!Mr(e, n))
    return null;
  const s = Ar(e, n);
  return e.ttsEngine === "index_tts" && s.engine === "index_tts" ? !e.indexTtsBaseUrl.trim() || !s.indexTtsVoiceId || !s.indexTtsLanguage ? null : {
    engine: "index_tts",
    text: t,
    baseUrl: e.indexTtsBaseUrl,
    voiceId: s.indexTtsVoiceId,
    language: s.indexTtsLanguage,
    timeoutMs: e.requestTimeoutMs
  } : e.ttsEngine === "local_gsvi" && s.engine === "local_gsvi" ? !e.localGsviBaseUrl.trim() || !s.gsviVoiceId || !s.gsviLanguage || !s.gsviEmotion ? null : {
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
  } : e.ttsEngine !== "minimax" || s.engine !== "minimax" || !e.apiKey.trim() || !e.groupId.trim() || !s.minimaxVoiceId ? null : {
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
function Qi(e) {
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
function Mu(e, t, n) {
  const s = Ar(e, n);
  return e.ttsEngine === "index_tts" ? {
    text: t,
    engine: "index_tts",
    indexTts: {
      origin: Ki(e.indexTtsBaseUrl),
      model: _r,
      voiceId: s.indexTtsVoiceId ?? "",
      language: s.indexTtsLanguage ?? e.indexTtsLanguage,
      format: "wav"
    }
  } : e.ttsEngine === "local_gsvi" ? {
    text: t,
    engine: "local_gsvi",
    localGsvi: {
      origin: Ki(e.localGsviBaseUrl),
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
      voiceId: s.minimaxVoiceId ?? "",
      speed: e.speed,
      vol: e.vol,
      format: "mp3"
    }
  };
}
const qi = 15;
function Au(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = [];
  let o = !1, r = !1, l = 0;
  function a() {
    return e.getSettings();
  }
  function d() {
    r || !document.querySelector(".minimax-tts-segment") || (r = !0, e.warn?.("检测到旧酒馆助手 Multi-TTS 仍在装饰消息。请只启用其中一个，避免重复生成。"));
  }
  function p(M) {
    return vr(M) && M.code === "cancelled";
  }
  function h(M, O) {
    return n.get(M)?.token === O;
  }
  function w(M) {
    for (const [O, L] of n)
      M(L) && (L.controller.abort(), n.delete(O));
  }
  function S() {
    w(() => !0);
  }
  function B(M, O) {
    w(
      (L) => L.message_id === M && (O === void 0 || L.swipe_id !== O)
    );
  }
  function P(M, O, L) {
    n.get(M)?.controller.abort(), l += 1;
    const q = {
      token: l,
      message_id: O,
      swipe_id: L,
      controller: new AbortController()
    };
    return n.set(M, q), q;
  }
  function V(M, O) {
    h(M, O) && n.delete(M);
  }
  async function R(M, O, L, K, q) {
    const me = P(M, O, L);
    try {
      const Ve = a(), ue = Pr(Ve, K, q);
      if (!ue)
        return { blob: null };
      ue.signal = me.controller.signal;
      const be = Mu(Ve, K, q), Se = await Wa(be);
      if (!h(M, me.token) || me.controller.signal.aborted)
        return { cancelled: !0 };
      const Ne = s.get(Se);
      if (Ne)
        return { blob: Ne };
      const Ie = await qa(Se);
      if (!h(M, me.token) || me.controller.signal.aborted)
        return { cancelled: !0 };
      if (Ie)
        return s.set(Se, Ie), { blob: Ie };
      const f = await On(ue.engine).synthesize(ue);
      return f && (await ec(Se, f), s.set(Se, f)), !h(M, me.token) || me.controller.signal.aborted ? { cancelled: !0 } : { blob: f };
    } catch (Ve) {
      return p(Ve) || !h(M, me.token) || me.controller.signal.aborted ? { cancelled: !0 } : (console.error(`${Ee} synthesize failed`), { blob: null });
    } finally {
      V(M, me.token);
    }
  }
  function k(M, O) {
    if (typeof M.swipe_id == "number" && Number.isFinite(M.swipe_id))
      return M.swipe_id;
    const L = Number(O?.getAttribute("swipeid"));
    return Number.isFinite(L) ? L : 0;
  }
  function Y(M, O) {
    for (const [L, K] of t) {
      const q = Yi(L);
      q && q.message_id === M && q.swipe_id !== O && (K.stop(), t.delete(L));
    }
  }
  function j(M) {
    for (const [O, L] of t) {
      const K = Yi(O);
      K && K.message_id === M && (L.stop(), t.delete(O));
    }
  }
  function ce(M, O, L) {
    if (typeof M.swipe_id != "number" || !Number.isFinite(M.swipe_id))
      return !0;
    const K = O.getAttribute("swipeid");
    if (K === null || K === "")
      return !0;
    const q = Number(K);
    return Number.isFinite(q) && q === L && q === M.swipe_id;
  }
  function ye(M, O) {
    B(M, O), Y(M, O);
    const L = e.findMessageElement(M) ?? Nn(M);
    L && Rt(L);
  }
  function pe(M, O = {}) {
    const L = O.attempt ?? 0, K = a();
    if (!K.enabled)
      return;
    const q = e.getChatMessage(M);
    if (!q || q.is_user || q.is_system)
      return;
    const me = typeof q.mes == "string" ? q.mes : "", Ve = mu(me).filter(
      (fe) => Mr(K, fe.char)
    ), ue = e.findMessageElement(M) ?? Nn(M);
    if (Ve.length === 0) {
      ue && Rt(ue);
      return;
    }
    if (!ue) {
      L < qi && window.setTimeout(() => pe(M, { ...O, attempt: L + 1 }), 120);
      return;
    }
    const be = k(q, ue);
    if (!ce(q, ue, be)) {
      L < qi && window.setTimeout(() => pe(M, { ...O, attempt: L + 1 }), 120);
      return;
    }
    if (wr(ue, be))
      return;
    ue.getAttribute("data-tavern-multi-tts-rendered") === "true" && Rt(ue), Y(M, be), d();
    const Se = Ve.map((fe) => ({
      ...fe,
      displayText: _u(fe.text),
      ttsText: yu(fe.text, K.ttsEngine)
    })), Ne = [], Ie = (fe) => O.skipPrefetch ? !1 : K.prefetchMode === "auto_all" ? !0 : K.prefetchMode === "auto_first_n" ? fe < K.prefetchFirstCount : !1;
    Iu(
      ue,
      M,
      Se,
      {
        ensureAudio: async (fe, f, g) => {
          const v = `${M}:${be}:${fe.index}`;
          return await R(v, M, be, g, fe.char);
        },
        downloadAudio(fe, f, g) {
          sc(fe, nc(f, g));
        }
      },
      t,
      be
    ), Se.forEach((fe, f) => {
      Ie(f) && fe.ttsText && Ne.push(async () => {
        const g = `${M}:${be}:${fe.index}`;
        try {
          await R(g, M, be, fe.ttsText, fe.char);
        } catch {
        }
      });
    }), Ne.length > 0 && xu(Ne, K.maxConcurrency);
  }
  function $e(...M) {
    const O = Number(M[0]);
    Number.isFinite(O) && window.setTimeout(() => pe(O), 0);
  }
  function Ot(...M) {
    const O = Number(M[0]);
    if (!Number.isFinite(O))
      return;
    B(O);
    const L = e.findMessageElement(O) ?? Nn(O);
    L && Rt(L), j(O), window.setTimeout(() => pe(O), 0);
  }
  function gt(...M) {
    const O = Number(M[0]);
    if (!Number.isFinite(O))
      return;
    const L = e.findMessageElement(O) ?? Nn(O), K = e.getChatMessage(O), q = K ? k(K, L) : 0;
    ye(O, q), window.setTimeout(() => pe(O, { skipPrefetch: !0 }), 0);
  }
  function tt(M = {}) {
    document.querySelectorAll("#chat .mes[mesid]").forEach((O) => {
      const L = Number(O.getAttribute("mesid"));
      Number.isFinite(L) && pe(L, M);
    });
  }
  function Oe(M, O) {
    e.eventSource.on(M, O), i.push(() => e.eventSource.removeListener(M, O));
  }
  function Dt() {
    o || (o = !0, Es(e, a()), Oe(e.eventNames.messageReceived, $e), Oe(e.eventNames.messageRendered, $e), Oe(e.eventNames.messageUpdated, Ot), Oe(e.eventNames.messageSwiped, gt), Oe(e.eventNames.moreMessagesLoaded, () => {
      tt({ skipPrefetch: !0 });
    }), Oe(e.eventNames.chatChanged, () => {
      S(), t.forEach((M) => M.stop()), t.clear(), $n(), Es(e, a()), tt({ skipPrefetch: !0 });
    }), tt({ skipPrefetch: !0 }), console.info(`${Ee} chat runtime started`));
  }
  function Ct() {
    i.splice(0).forEach((M) => M()), S(), t.forEach((M) => M.stop()), t.clear(), s.clear(), $n(), pu(e), Rt(document), o = !1, console.info(`${Ee} chat runtime stopped`);
  }
  function sn() {
    S(), t.forEach((M) => M.stop()), t.clear(), $n(), Rt(document);
  }
  function It() {
    Es(e, a());
  }
  function nt() {
    sn(), a().enabled && tt({ skipPrefetch: !0 });
  }
  function He() {
    It(), nt();
  }
  return { start: Dt, stop: Ct, syncFromSettings: He, syncInjection: It, refreshDecorations: nt, decorate: pe };
}
function yt(e) {
  return typeof e == "object" && e !== null;
}
function Pu(e) {
  if (yt(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function Ru(e) {
  return !yt(e) || typeof e.getContext != "function" ? null : e;
}
function Vu(e) {
  if (!yt(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!yt(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = Pu(e.eventSource), n = yt(e.eventTypes) ? e.eventTypes : yt(e.event_types) ? e.event_types : void 0, s = n ? {
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
function Rr() {
  const e = Ru(globalThis.SillyTavern);
  if (!e)
    throw new Error(
      "SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行"
    );
  return Vu(e.getContext());
}
function Vr() {
  const e = Rr();
  return {
    readRawSettings() {
      return e.extensionSettings[ys];
    },
    writeSettings(t) {
      e.extensionSettings[ys] = t, e.saveSettingsDebounced();
    },
    removeSettings() {
      delete e.extensionSettings[ys], e.saveSettingsDebounced();
    },
    findSettingsRoot: yc,
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
function Nu(e) {
  return yt(e) ? {
    mes: typeof e.mes == "string" ? e.mes : void 0,
    is_user: typeof e.is_user == "boolean" ? e.is_user : void 0,
    is_system: typeof e.is_system == "boolean" ? e.is_system : void 0,
    swipe_id: typeof e.swipe_id == "number" ? e.swipe_id : void 0
  } : null;
}
function Lu(e) {
  const t = Rr();
  if (!t.eventSource)
    throw new Error("SillyTavern eventSource 不可用，无法监听消息事件");
  const n = t.eventSource;
  return {
    getSettings: e,
    getChatMessage(s) {
      return Array.isArray(t.chat) ? Nu(t.chat[s]) : null;
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
        i.warning(s, Ee);
        return;
      }
      console.warn(`${Ee} ${s}`);
    }
  };
}
function ku(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    const s = n.trim();
    s && t.set(s, (t.get(s) ?? 0) + 1);
  }), [...t.entries()].filter(([, n]) => n > 1).map(([n]) => n);
}
function Cs(e) {
  return [...e].sort((t, n) => t.name.localeCompare(n.name));
}
function Is(e, t, n, s) {
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
function Ms(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.find((i) => i.name === n);
  return s ? { mappings: [...s.mappings] } : { error: `未找到存档：${n}` };
}
function As(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.filter((i) => i.name !== n);
  return s.length === e.length ? { error: `未找到存档：${n}` } : { presets: s, message: `已删除存档：${n}` };
}
const Gu = {
  ja: "おはようございます。これは Tavern Multi-TTS のテスト音声です。",
  zh: "你好，这是 Tavern Multi-TTS 的测试语音。",
  en: "Hello, this is a Tavern Multi-TTS test voice."
}, $u = {
  ja: "こんにちは、これは GSVI の音声参照用サンプルです。",
  zh: "你好，这是一段 GSVI 的语音参考音频。",
  en: "Hello, this is a GSVI reference voice sample."
}, Ou = {
  ja: "こんにちは、これは IndexTTS のテスト音声です。",
  zh: "你好，这是 IndexTTS 的测试语音。",
  en: "Hello, this is an IndexTTS test voice."
}, Du = [
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
], Uu = [
  "不切",
  "凑四句一切",
  "凑50字一切",
  "按中文句号。切",
  "按英文句号.切",
  "按标点符号切"
];
function ju(e, t) {
  return e === "local_gsvi" ? $u[t] : e === "index_tts" ? Ou[t] : Gu[t];
}
function Fu() {
  return {
    search: "",
    language: "all",
    gender: "all",
    source: "all"
  };
}
function Ps() {
  return {
    voices: [],
    filter: Fu()
  };
}
function eo() {
  return {
    minimax: Ps(),
    local_gsvi: Ps(),
    index_tts: Ps()
  };
}
function Bu(e, t) {
  return t === "minimax" ? e.minimax : t === "local_gsvi" ? e.local_gsvi : e.index_tts;
}
function to(e, t, n) {
  const s = Bu(e, t);
  return s.voices = [...n], e;
}
function Hu(e) {
  return [
    ...new Set(e.map((t) => t.language).filter((t) => !!t))
  ].sort();
}
function Ku(e, t) {
  const n = t.search.trim().toLowerCase();
  return e.filter((s) => t.language !== "all" && s.language !== t.language || t.gender !== "all" && s.gender !== t.gender || t.source !== "all" && s.source !== t.source ? !1 : n ? [s.id, s.name, ...s.description ?? []].join(" ").toLowerCase().includes(n) : !0);
}
function no(e) {
  const t = [e.language, e.gender, e.source].filter(Boolean);
  return t.length > 0 ? `${e.name} (${t.join(" / ")})` : e.name;
}
function so(e) {
  return e?.languages ?? [];
}
function io(e, t) {
  const n = t.trim();
  return !e || !n ? [] : e.emotionsByLanguage?.[n] ?? [];
}
function oo(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(2)} MB`;
}
const zu = ["data-color-scheme"], Wu = { class: "inline-drawer" }, Ju = { class: "inline-drawer-toggle inline-drawer-header" }, Xu = { class: "inline-drawer-content" }, Yu = { class: "mtts-card" }, Zu = { class: "mtts-card-head" }, Qu = { class: "mtts-title" }, qu = { class: "mtts-version" }, ef = ["title"], tf = { class: "mtts-enable" }, nf = {
  class: "mtts-tabs",
  role: "tablist",
  "aria-label": "TTS 引擎"
}, sf = ["aria-selected"], of = ["aria-selected"], rf = ["aria-selected"], lf = {
  class: "mtts-section",
  "aria-labelledby": "mtts-service-title"
}, af = { class: "mtts-field" }, cf = { class: "mtts-grid" }, uf = { class: "mtts-field" }, ff = { class: "mtts-field" }, df = { class: "mtts-field" }, pf = { class: "mtts-actions" }, mf = ["disabled"], gf = ["disabled"], hf = {
  key: 0,
  class: "mtts-fold"
}, vf = { class: "mtts-fold-body" }, _f = { class: "mtts-grid" }, bf = { class: "mtts-field" }, yf = { class: "mtts-field" }, xf = ["value"], Tf = { class: "mtts-field" }, Sf = { class: "mtts-field" }, wf = { class: "mtts-field" }, Ef = ["value"], Cf = { value: "" }, If = ["value"], Mf = { class: "mtts-control-row" }, Af = { class: "mtts-field" }, Pf = ["disabled"], Rf = { class: "mtts-grid" }, Vf = { class: "mtts-field" }, Nf = { value: "" }, Lf = ["value"], kf = ["value"], Gf = { class: "mtts-field" }, $f = ["value"], Of = { class: "mtts-control-row" }, Df = { class: "mtts-field" }, Uf = ["disabled"], jf = { class: "mtts-grid" }, Ff = { class: "mtts-field" }, Bf = { value: "" }, Hf = ["value"], Kf = { class: "mtts-field" }, zf = ["value"], Wf = { class: "mtts-field" }, Jf = ["value"], Xf = { class: "mtts-actions" }, Yf = { class: "mtts-field" }, Zf = ["disabled"], Qf = {
  class: "mtts-section",
  "aria-labelledby": "mtts-mapping-title"
}, qf = { class: "mtts-section-head" }, ed = {
  id: "mtts-mapping-title",
  class: "mtts-section-title"
}, td = { class: "mtts-count" }, nd = {
  key: 0,
  class: "mtts-empty"
}, sd = { class: "mtts-field" }, id = ["onUpdate:modelValue"], od = { class: "mtts-field" }, rd = ["onUpdate:modelValue"], ld = {
  key: 0,
  class: "mtts-field"
}, ad = ["value", "onChange"], cd = ["value"], ud = { class: "mtts-mapping-actions" }, fd = ["disabled", "onClick"], dd = ["onClick"], pd = { class: "mtts-field" }, md = ["onUpdate:modelValue"], gd = { class: "mtts-grid" }, hd = { class: "mtts-field" }, vd = ["onUpdate:modelValue"], _d = { value: "" }, bd = ["value"], yd = ["value"], xd = { class: "mtts-field" }, Td = ["onUpdate:modelValue"], Sd = ["value"], wd = { class: "mtts-mapping-actions" }, Ed = ["disabled", "onClick"], Cd = ["onClick"], Id = { class: "mtts-field" }, Md = ["onUpdate:modelValue"], Ad = { class: "mtts-grid" }, Pd = { class: "mtts-field" }, Rd = ["onUpdate:modelValue"], Vd = { value: "" }, Nd = ["value"], Ld = { class: "mtts-field" }, kd = ["onUpdate:modelValue"], Gd = ["value"], $d = { class: "mtts-field" }, Od = ["onUpdate:modelValue"], Dd = ["value"], Ud = { class: "mtts-mapping-actions" }, jd = ["disabled", "onClick"], Fd = ["onClick"], Bd = {
  key: 3,
  class: "mtts-hint"
}, Hd = { class: "mtts-fold" }, Kd = { class: "mtts-fold-body" }, zd = { class: "mtts-field" }, Wd = { class: "mtts-field" }, Jd = ["value"], Xd = { class: "mtts-actions" }, Yd = ["disabled"], Zd = ["disabled"], Qd = { class: "mtts-fold" }, qd = { class: "mtts-fold-body" }, ep = { class: "mtts-enable" }, tp = { class: "mtts-field" }, np = { class: "mtts-label" }, sp = { class: "mtts-field" }, ip = { class: "mtts-field" }, op = { class: "mtts-fold" }, rp = { class: "mtts-fold-body" }, lp = { class: "mtts-field" }, ap = {
  key: 0,
  class: "mtts-grid"
}, cp = {
  key: 0,
  class: "mtts-field"
}, up = { class: "mtts-field" }, fp = { class: "mtts-hint" }, dp = { class: "mtts-actions" }, pp = ["disabled"], mp = ["disabled"], gp = { class: "mtts-fold" }, hp = { class: "mtts-fold-body" }, vp = { class: "mtts-field" }, _p = ["value"], bp = { class: "mtts-field" }, yp = { class: "mtts-label" }, xp = { class: "mtts-field" }, Tp = { class: "mtts-label" }, Sp = { class: "mtts-field" }, wp = { class: "mtts-label" }, Ep = { class: "mtts-field" }, Cp = { class: "mtts-grid" }, Ip = { class: "mtts-field" }, Mp = ["value"], Ap = { class: "mtts-field" }, Pp = ["value"], Rp = { class: "mtts-field" }, Vp = { class: "mtts-label" }, Np = /* @__PURE__ */ Al({
  __name: "settings-panel",
  props: {
    displayName: {},
    version: {},
    settings: {},
    onSettingsChange: { type: Function }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ pn(zt(t.settings)), s = /* @__PURE__ */ it(""), i = /* @__PURE__ */ it(!1), o = /* @__PURE__ */ it(!1), r = /* @__PURE__ */ pn(eo()), l = /* @__PURE__ */ it(""), a = /* @__PURE__ */ it(""), d = /* @__PURE__ */ it(0), p = /* @__PURE__ */ it(0), h = /* @__PURE__ */ it("saved"), w = /* @__PURE__ */ it("light"), S = /* @__PURE__ */ pn({
      minimax: { kind: "unchecked", detail: "" },
      local_gsvi: { kind: "unchecked", detail: "" },
      index_tts: { kind: "unchecked", detail: "" }
    });
    let B, P = !0, V = null;
    const R = he(() => n.ttsEngine === "minimax"), k = he(() => n.ttsEngine === "local_gsvi"), Y = he(() => n.ttsEngine === "index_tts"), j = he(() => r.minimax.voices), ce = he(() => r.local_gsvi.voices), ye = he(() => r.index_tts.voices), pe = he(
      () => Ku(r.minimax.voices, r.minimax.filter)
    ), $e = he(() => Hu(r.minimax.voices)), Ot = he(
      () => r.local_gsvi.voices.find((_) => _.id === n.localGsviModel)
    ), gt = he(() => so(Ot.value)), tt = he(
      () => io(Ot.value, n.localGsviLanguage)
    ), Oe = he(() => Y.value ? n.indexTtsCharacterMappings.length : k.value ? n.gsviCharacterMappings.length : n.characterMappings.length), Dt = he(() => Y.value ? Cs(n.indexTtsCharacterMappingPresets) : k.value ? Cs(n.gsviCharacterMappingPresets) : Cs(n.characterMappingPresets)), Ct = he(
      () => ku(
        (Y.value ? n.indexTtsCharacterMappings : k.value ? n.gsviCharacterMappings : n.characterMappings).map((_) => _.characterName)
      )
    ), sn = he(() => R.value ? "试听默认音色（消耗额度）" : k.value ? "试听默认模型" : "试听默认音色"), It = he(() => oo(p.value)), nt = he(() => Y.value ? "IndexTTS" : k.value ? "GSVI" : "MiniMax"), He = he(() => S[n.ttsEngine]), M = he(() => {
      const _ = He.value;
      return _.kind === "connecting" ? "正在连接" : _.kind === "online" ? _.detail ? `${nt.value} 在线 · ${_.detail}` : `${nt.value} 在线` : _.kind === "offline" ? _.detail ? `服务离线 · ${_.detail}` : "服务离线" : "尚未检查";
    }), O = he(() => h.value === "saving" ? "正在保存…" : h.value === "error" ? "保存失败，请重试" : "✓ 所有修改已自动保存");
    El(
      n,
      () => {
        try {
          if (t.onSettingsChange(zt(n)), P) {
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
    function L(_, c = !1) {
      s.value = _, i.value = c;
    }
    function K(_, c = "") {
      S[n.ttsEngine] = { kind: _, detail: c };
    }
    function q(_) {
      n.ttsEngine = _;
    }
    function me(_) {
      return _.replaceAll("存档", "方案");
    }
    function Ve() {
      w.value = ue();
    }
    function ue() {
      const _ = (document.documentElement.getAttribute("data-theme") || document.body.getAttribute("data-theme") || "").toLowerCase();
      if (_.includes("dark"))
        return "dark";
      if (_.includes("light"))
        return "light";
      if (document.documentElement.classList.contains("dark") || document.body.classList.contains("dark"))
        return "dark";
      const m = getComputedStyle(document.body).backgroundColor.match(/[\d.]+/g);
      return m && m.length >= 3 ? (0.2126 * Number(m[0]) + 0.7152 * Number(m[1]) + 0.0722 * Number(m[2])) / 255 < 0.45 ? "dark" : "light" : typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function be(_, c) {
      if (vr(_)) {
        L(_.message, !0);
        return;
      }
      L(_ instanceof Error ? _.message : c, !0);
    }
    function Se() {
      return n.characterMappings.map((_) => ({
        characterName: _.characterName.trim(),
        minimaxVoiceId: _.minimaxVoiceId.trim()
      })).filter((_) => _.characterName && _.minimaxVoiceId);
    }
    function Ne() {
      return n.gsviCharacterMappings.map((_) => ({
        characterName: _.characterName.trim(),
        gsviVoiceId: _.gsviVoiceId.trim(),
        gsviLanguage: _.gsviLanguage.trim(),
        gsviEmotion: _.gsviEmotion.trim()
      })).filter(
        (_) => _.characterName && _.gsviVoiceId && _.gsviLanguage && _.gsviEmotion
      );
    }
    function Ie() {
      return n.indexTtsCharacterMappings.map((_) => ({
        characterName: _.characterName.trim(),
        indexTtsVoiceId: _.indexTtsVoiceId.trim(),
        indexTtsLanguage: _.indexTtsLanguage
      })).filter((_) => _.characterName && _.indexTtsVoiceId && _.indexTtsLanguage);
    }
    function fe() {
      return n.ttsEngine === "minimax" ? "请先填写 API Key" : n.ttsEngine === "local_gsvi" ? "请先填写 Local-GSVI 服务地址" : "请先填写 IndexTTS 服务地址";
    }
    function f(_) {
      return n.ttsEngine === "local_gsvi" ? `已加载 ${_} 个模型` : `已加载 ${_} 个音色`;
    }
    async function g(_, c, m) {
      if (!o.value) {
        o.value = !0, c && L(c);
        try {
          await _();
        } catch (J) {
          be(J, m);
        } finally {
          o.value = !1;
        }
      }
    }
    async function v(_ = !1) {
      await g(
        async () => {
          K("connecting");
          const c = Qi(n);
          if (!c) {
            const J = fe();
            K("offline", J), L(J, !0);
            return;
          }
          c.engine === "minimax" && (c.forceRefresh = _);
          const m = n.ttsEngine;
          try {
            const J = await On(m).listVoices(c);
            to(r, m, J);
            const N = f(J.length);
            K("online", N), L(N);
          } catch (J) {
            throw K("offline"), J;
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
      if (k.value) {
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
      if (k.value) {
        n.gsviCharacterMappings.splice(_, 1);
        return;
      }
      n.indexTtsCharacterMappings.splice(_, 1);
    }
    function I() {
      const _ = l.value, c = Dt.value.some((J) => J.name === _.trim());
      if (c && !window.confirm(`方案「${_.trim()}」已存在，要覆盖吗？`))
        return;
      const m = R.value ? Is(n.characterMappingPresets, _, Se(), c) : k.value ? Is(n.gsviCharacterMappingPresets, _, Ne(), c) : Is(
        n.indexTtsCharacterMappingPresets,
        _,
        Ie(),
        c
      );
      if ("error" in m) {
        L(me(m.error), !0);
        return;
      }
      R.value ? n.characterMappingPresets = m.presets : k.value ? n.gsviCharacterMappingPresets = m.presets : n.indexTtsCharacterMappingPresets = m.presets, a.value = _.trim(), L(me(m.message));
    }
    function C() {
      const _ = R.value ? Ms(n.characterMappingPresets, a.value) : k.value ? Ms(n.gsviCharacterMappingPresets, a.value) : Ms(n.indexTtsCharacterMappingPresets, a.value);
      if ("error" in _) {
        L(me(_.error), !0);
        return;
      }
      (R.value ? Se().length > 0 : k.value ? Ne().length > 0 : Ie().length > 0) && !window.confirm("载入方案会覆盖当前映射，确定继续吗？") || (R.value ? n.characterMappings = _.mappings : k.value ? n.gsviCharacterMappings = _.mappings : n.indexTtsCharacterMappings = _.mappings, L(`已载入方案：${a.value}`));
    }
    function E() {
      if (!window.confirm(`确定删除方案「${a.value}」吗？`))
        return;
      const _ = R.value ? As(n.characterMappingPresets, a.value) : k.value ? As(n.gsviCharacterMappingPresets, a.value) : As(n.indexTtsCharacterMappingPresets, a.value);
      if ("error" in _) {
        L(me(_.error), !0);
        return;
      }
      R.value ? n.characterMappingPresets = _.presets : k.value ? n.gsviCharacterMappingPresets = _.presets : n.indexTtsCharacterMappingPresets = _.presets, a.value = "", L(me(_.message));
    }
    async function y() {
      if (n.ttsEngine !== "index_tts") {
        await v(!0);
        return;
      }
      await g(
        async () => {
          K("connecting");
          const _ = Qi(n);
          if (!_ || _.engine !== "index_tts") {
            const m = "请先填写 IndexTTS 服务地址";
            K("offline", m), L(m, !0);
            return;
          }
          const c = On("index_tts");
          try {
            const m = await c.checkHealth(_);
            if (!m.ok) {
              K("offline", m.message), L(m.message, !0);
              return;
            }
            try {
              const J = await c.listVoices(_);
              to(r, "index_tts", J);
              const N = f(J.length);
              K("online", N), L(m.message);
            } catch (J) {
              K("online", m.message), be(J, "拉取音色失败");
            }
          } catch (m) {
            throw K("offline"), m;
          }
        },
        "",
        "检查 IndexTTS 连接失败"
      );
    }
    async function D(_) {
      await g(
        async () => {
          const c = ju(n.ttsEngine, n.testLanguage), m = Pr(n, c, _);
          if (!m) {
            L(
              _ ? `角色「${_}」未完整映射，无法测试` : "请先补全当前引擎的默认音色/模型后再测试",
              !0
            );
            return;
          }
          const J = await On(n.ttsEngine).synthesize(m);
          cr(J), L(_ ? `正在试听「${_}」` : "正在试听默认音色");
        },
        "正在合成测试语音…",
        "测试语音失败"
      );
    }
    async function A() {
      await g(
        async () => {
          const _ = await tc();
          d.value = _.count, p.value = _.totalBytes, L(`缓存 ${_.count} 条，${oo(_.totalBytes)}`);
        },
        "正在读取缓存…",
        "读取缓存失败"
      );
    }
    async function U() {
      window.confirm("确定清空本扩展的音频缓存吗？") && await g(
        async () => {
          await ar(), d.value = 0, p.value = 0, L("已清空音频缓存");
        },
        "正在清空缓存…",
        "清空缓存失败"
      );
    }
    function H() {
      window.confirm("确定恢复默认设置吗？当前映射和密钥都会被清空。") && (Object.assign(n, zt(Et)), Object.assign(r, eo()), L("已恢复默认设置"));
    }
    function Z() {
      gt.value.includes(n.localGsviLanguage) || (n.localGsviLanguage = "", n.localGsviEmotion = "");
    }
    function ne(_) {
      return so(r.local_gsvi.voices.find((c) => c.id === _));
    }
    function ee(_, c) {
      return io(
        r.local_gsvi.voices.find((m) => m.id === _),
        c
      );
    }
    return Vl(() => {
      w.value = ue(), typeof window.matchMedia == "function" && (V = window.matchMedia("(prefers-color-scheme: dark)"), V.addEventListener("change", Ve));
    }), Nl(() => {
      window.clearTimeout(B), V?.removeEventListener("change", Ve), V = null;
    }), A().catch((_) => be(_, "读取缓存失败")), (_, c) => (G(), $("div", {
      class: "tavern-multi-tts-settings",
      "data-color-scheme": w.value
    }, [
      u("div", Wu, [
        u("div", Ju, [
          u("b", null, W(e.displayName), 1),
          c[40] || (c[40] = u("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        u("div", Xu, [
          u("div", Yu, [
            u("header", Zu, [
              u("h2", Qu, W(e.displayName), 1),
              u("span", qu, W(e.version), 1)
            ]),
            u("div", {
              class: at(["mtts-capsule", {
                "is-online": He.value.kind === "online",
                "is-connecting": He.value.kind === "connecting",
                "is-offline": He.value.kind === "offline"
              }]),
              role: "status",
              "aria-live": "polite"
            }, [
              c[41] || (c[41] = u("span", {
                class: "mtts-dot",
                "aria-hidden": "true"
              }, null, -1)),
              (G(), $("span", {
                key: M.value,
                class: "mtts-capsule-text mtts-fade",
                title: M.value
              }, W(M.value), 9, ef))
            ], 2),
            s.value ? (G(), $("p", {
              key: s.value,
              class: at(["mtts-notice mtts-fade", { "is-error": i.value }]),
              role: "status"
            }, W(s.value), 3)) : De("", !0),
            u("label", tf, [
              z(u("input", {
                "onUpdate:modelValue": c[0] || (c[0] = (m) => n.enabled = m),
                type: "checkbox"
              }, null, 512), [
                [Di, n.enabled]
              ]),
              c[42] || (c[42] = u("span", null, "启用", -1))
            ]),
            u("div", nf, [
              u("button", {
                class: at(["mtts-tab", { "is-active": R.value }]),
                type: "button",
                role: "tab",
                "aria-selected": R.value,
                onClick: c[1] || (c[1] = (m) => q("minimax"))
              }, " MiniMax ", 10, sf),
              u("button", {
                class: at(["mtts-tab", { "is-active": k.value }]),
                type: "button",
                role: "tab",
                "aria-selected": k.value,
                onClick: c[2] || (c[2] = (m) => q("local_gsvi"))
              }, " GSVI ", 10, of),
              u("button", {
                class: at(["mtts-tab", { "is-active": Y.value }]),
                type: "button",
                role: "tab",
                "aria-selected": Y.value,
                onClick: c[3] || (c[3] = (m) => q("index_tts"))
              }, " IndexTTS ", 10, rf)
            ]),
            u("section", lf, [
              c[68] || (c[68] = u("h3", {
                id: "mtts-service-title",
                class: "mtts-section-title"
              }, "语音服务", -1)),
              R.value ? (G(), $(Q, { key: 0 }, [
                u("label", af, [
                  c[43] || (c[43] = u("span", { class: "mtts-label" }, "API Key", -1)),
                  z(u("input", {
                    "onUpdate:modelValue": c[4] || (c[4] = (m) => n.apiKey = m),
                    class: "text_pole",
                    type: "password",
                    autocomplete: "off"
                  }, null, 512), [
                    [ve, n.apiKey]
                  ])
                ]),
                u("div", cf, [
                  u("label", uf, [
                    c[44] || (c[44] = u("span", { class: "mtts-label" }, "Group ID", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": c[5] || (c[5] = (m) => n.groupId = m),
                      class: "text_pole",
                      type: "text"
                    }, null, 512), [
                      [ve, n.groupId]
                    ])
                  ]),
                  u("label", ff, [
                    c[46] || (c[46] = u("span", { class: "mtts-label" }, "区域", -1)),
                    z(u("select", {
                      "onUpdate:modelValue": c[6] || (c[6] = (m) => n.minimaxRegion = m),
                      class: "text_pole"
                    }, [...c[45] || (c[45] = [
                      u("option", { value: "international" }, "国际", -1),
                      u("option", { value: "beijing" }, "北京", -1)
                    ])], 512), [
                      [de, n.minimaxRegion]
                    ])
                  ])
                ]),
                u("label", df, [
                  c[47] || (c[47] = u("span", { class: "mtts-label" }, "默认音色", -1)),
                  z(u("input", {
                    "onUpdate:modelValue": c[7] || (c[7] = (m) => n.voiceId = m),
                    class: "text_pole",
                    type: "text",
                    placeholder: "无 char 的台词使用"
                  }, null, 512), [
                    [ve, n.voiceId]
                  ])
                ]),
                u("div", pf, [
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: y
                  }, " 检查连接 ", 8, mf),
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: o.value,
                    onClick: c[8] || (c[8] = (m) => v(!0))
                  }, " 刷新音色 ", 8, gf)
                ]),
                j.value.length > 0 ? (G(), $("details", hf, [
                  c[56] || (c[56] = u("summary", null, [
                    u("i", {
                      class: "fa-solid fa-chevron-right mtts-fold-icon",
                      "aria-hidden": "true"
                    }),
                    rt(" 筛选音色 ")
                  ], -1)),
                  u("div", vf, [
                    u("div", _f, [
                      u("label", bf, [
                        c[48] || (c[48] = u("span", { class: "mtts-label" }, "搜索", -1)),
                        z(u("input", {
                          "onUpdate:modelValue": c[9] || (c[9] = (m) => r.minimax.filter.search = m),
                          class: "text_pole",
                          type: "search"
                        }, null, 512), [
                          [ve, r.minimax.filter.search]
                        ])
                      ]),
                      u("label", yf, [
                        c[50] || (c[50] = u("span", { class: "mtts-label" }, "语言", -1)),
                        z(u("select", {
                          "onUpdate:modelValue": c[10] || (c[10] = (m) => r.minimax.filter.language = m),
                          class: "text_pole"
                        }, [
                          c[49] || (c[49] = u("option", { value: "all" }, "全部语言", -1)),
                          (G(!0), $(Q, null, ge($e.value, (m) => (G(), $("option", {
                            key: m,
                            value: m
                          }, W(m), 9, xf))), 128))
                        ], 512), [
                          [de, r.minimax.filter.language]
                        ])
                      ]),
                      u("label", Tf, [
                        c[52] || (c[52] = u("span", { class: "mtts-label" }, "性别", -1)),
                        z(u("select", {
                          "onUpdate:modelValue": c[11] || (c[11] = (m) => r.minimax.filter.gender = m),
                          class: "text_pole"
                        }, [...c[51] || (c[51] = [
                          u("option", { value: "all" }, "全部性别", -1),
                          u("option", { value: "Female" }, "Female", -1),
                          u("option", { value: "Male" }, "Male", -1),
                          u("option", { value: "Unknown" }, "Unknown", -1)
                        ])], 512), [
                          [de, r.minimax.filter.gender]
                        ])
                      ]),
                      u("label", Sf, [
                        c[54] || (c[54] = u("span", { class: "mtts-label" }, "来源", -1)),
                        z(u("select", {
                          "onUpdate:modelValue": c[12] || (c[12] = (m) => r.minimax.filter.source = m),
                          class: "text_pole"
                        }, [...c[53] || (c[53] = [
                          u("option", { value: "all" }, "全部来源", -1),
                          u("option", { value: "system" }, "system", -1),
                          u("option", { value: "voice_cloning" }, "voice_cloning", -1),
                          u("option", { value: "voice_generation" }, "voice_generation", -1)
                        ])], 512), [
                          [de, r.minimax.filter.source]
                        ])
                      ])
                    ]),
                    u("label", wf, [
                      c[55] || (c[55] = u("span", { class: "mtts-label" }, "从列表填入默认音色", -1)),
                      u("select", {
                        class: "text_pole",
                        value: n.voiceId,
                        onChange: c[13] || (c[13] = (m) => T(m.target.value))
                      }, [
                        u("option", Cf, W(pe.value.length) + " 条可选", 1),
                        (G(!0), $(Q, null, ge(pe.value, (m) => (G(), $("option", {
                          key: m.id,
                          value: m.id
                        }, W(ht(no)(m)), 9, If))), 128))
                      ], 40, Ef)
                    ])
                  ])
                ])) : De("", !0)
              ], 64)) : Y.value ? (G(), $(Q, { key: 1 }, [
                u("div", Mf, [
                  u("label", Af, [
                    c[57] || (c[57] = u("span", { class: "mtts-label" }, "服务地址", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": c[14] || (c[14] = (m) => n.indexTtsBaseUrl = m),
                      class: "text_pole",
                      type: "url",
                      placeholder: "http://127.0.0.1:7860"
                    }, null, 512), [
                      [ve, n.indexTtsBaseUrl]
                    ])
                  ]),
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: y
                  }, " 检查连接 ", 8, Pf)
                ]),
                u("div", Rf, [
                  u("label", Vf, [
                    c[58] || (c[58] = u("span", { class: "mtts-label" }, "默认音色", -1)),
                    z(u("select", {
                      "onUpdate:modelValue": c[15] || (c[15] = (m) => n.indexTtsVoiceId = m),
                      class: "text_pole"
                    }, [
                      u("option", Nf, W(ye.value.length > 0 ? "请选择音色预设" : "先检查连接并拉取音色"), 1),
                      n.indexTtsVoiceId && !ye.value.some((m) => m.id === n.indexTtsVoiceId) ? (G(), $("option", {
                        key: 0,
                        value: n.indexTtsVoiceId
                      }, W(n.indexTtsVoiceId), 9, Lf)) : De("", !0),
                      (G(!0), $(Q, null, ge(ye.value, (m) => (G(), $("option", {
                        key: m.id,
                        value: m.id
                      }, W(m.name), 9, kf))), 128))
                    ], 512), [
                      [de, n.indexTtsVoiceId]
                    ])
                  ]),
                  u("label", Gf, [
                    c[59] || (c[59] = u("span", { class: "mtts-label" }, "语言", -1)),
                    z(u("select", {
                      "onUpdate:modelValue": c[16] || (c[16] = (m) => n.indexTtsLanguage = m),
                      class: "text_pole"
                    }, [
                      (G(!0), $(Q, null, ge(ht(Kn), (m) => (G(), $("option", {
                        key: m,
                        value: m
                      }, W(m), 9, $f))), 128))
                    ], 512), [
                      [de, n.indexTtsLanguage]
                    ])
                  ])
                ])
              ], 64)) : k.value ? (G(), $(Q, { key: 2 }, [
                u("div", Of, [
                  u("label", Df, [
                    c[60] || (c[60] = u("span", { class: "mtts-label" }, "服务地址", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": c[17] || (c[17] = (m) => n.localGsviBaseUrl = m),
                      class: "text_pole",
                      type: "url",
                      placeholder: "http://127.0.0.1:9880"
                    }, null, 512), [
                      [ve, n.localGsviBaseUrl]
                    ])
                  ]),
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: y
                  }, " 检查连接 ", 8, Uf)
                ]),
                u("div", jf, [
                  u("label", Ff, [
                    c[61] || (c[61] = u("span", { class: "mtts-label" }, "默认模型", -1)),
                    z(u("select", {
                      "onUpdate:modelValue": c[18] || (c[18] = (m) => n.localGsviModel = m),
                      class: "text_pole",
                      onChange: Z
                    }, [
                      u("option", Bf, W(ce.value.length > 0 ? "请选择" : "先检查连接并拉取模型"), 1),
                      (G(!0), $(Q, null, ge(ce.value, (m) => (G(), $("option", {
                        key: m.id,
                        value: m.id
                      }, W(m.name), 9, Hf))), 128))
                    ], 544), [
                      [de, n.localGsviModel]
                    ])
                  ]),
                  u("label", Kf, [
                    c[63] || (c[63] = u("span", { class: "mtts-label" }, "语种", -1)),
                    z(u("select", {
                      "onUpdate:modelValue": c[19] || (c[19] = (m) => n.localGsviLanguage = m),
                      class: "text_pole"
                    }, [
                      c[62] || (c[62] = u("option", { value: "" }, "请选择", -1)),
                      (G(!0), $(Q, null, ge(gt.value, (m) => (G(), $("option", {
                        key: m,
                        value: m
                      }, W(m), 9, zf))), 128))
                    ], 512), [
                      [de, n.localGsviLanguage]
                    ])
                  ]),
                  u("label", Wf, [
                    c[65] || (c[65] = u("span", { class: "mtts-label" }, "情绪", -1)),
                    z(u("select", {
                      "onUpdate:modelValue": c[20] || (c[20] = (m) => n.localGsviEmotion = m),
                      class: "text_pole"
                    }, [
                      c[64] || (c[64] = u("option", { value: "" }, "请选择", -1)),
                      (G(!0), $(Q, null, ge(tt.value, (m) => (G(), $("option", {
                        key: m,
                        value: m
                      }, W(m), 9, Jf))), 128))
                    ], 512), [
                      [de, n.localGsviEmotion]
                    ])
                  ])
                ])
              ], 64)) : De("", !0),
              u("div", Xf, [
                u("label", Yf, [
                  c[67] || (c[67] = u("span", { class: "mtts-label" }, "试听语言", -1)),
                  z(u("select", {
                    "onUpdate:modelValue": c[21] || (c[21] = (m) => n.testLanguage = m),
                    class: "text_pole"
                  }, [...c[66] || (c[66] = [
                    u("option", { value: "ja" }, "日语", -1),
                    u("option", { value: "zh" }, "中文", -1),
                    u("option", { value: "en" }, "英语", -1)
                  ])], 512), [
                    [de, n.testLanguage]
                  ])
                ]),
                u("button", {
                  class: "mtts-btn mtts-btn-secondary",
                  type: "button",
                  disabled: o.value,
                  onClick: c[22] || (c[22] = (m) => D())
                }, W(sn.value), 9, Zf)
              ])
            ]),
            u("section", Qf, [
              u("div", qf, [
                u("h3", ed, [
                  c[69] || (c[69] = rt(" 角色映射 ", -1)),
                  u("span", td, W(Oe.value), 1)
                ]),
                u("button", {
                  class: "mtts-btn mtts-btn-primary",
                  type: "button",
                  onClick: x
                }, " + 添加角色 ")
              ]),
              Oe.value === 0 ? (G(), $("div", nd, [
                c[70] || (c[70] = u("p", { class: "mtts-empty-title" }, "还没有角色映射", -1)),
                c[71] || (c[71] = u("p", { class: "mtts-empty-copy" }, [
                  rt(" 添加角色后，带有 "),
                  u("code", null, '<say char="角色名">'),
                  rt(" 的台词才会生成语音。 ")
                ], -1)),
                u("button", {
                  class: "mtts-btn mtts-btn-primary",
                  type: "button",
                  onClick: x
                }, " ＋添加第一个角色 ")
              ])) : (G(), $(Q, { key: 1 }, [
                R.value ? (G(!0), $(Q, { key: 0 }, ge(n.characterMappings, (m, J) => (G(), $("article", {
                  key: `mm-${J}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", sd, [
                    c[72] || (c[72] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": (N) => m.characterName = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, id), [
                      [ve, m.characterName]
                    ])
                  ]),
                  u("label", od, [
                    c[73] || (c[73] = u("span", { class: "mtts-label" }, "Voice ID", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": (N) => m.minimaxVoiceId = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, rd), [
                      [ve, m.minimaxVoiceId]
                    ])
                  ]),
                  j.value.length > 0 ? (G(), $("label", ld, [
                    c[75] || (c[75] = u("span", { class: "mtts-label" }, "音色预设", -1)),
                    u("select", {
                      class: "text_pole",
                      value: m.minimaxVoiceId,
                      onChange: (N) => m.minimaxVoiceId = N.target.value
                    }, [
                      c[74] || (c[74] = u("option", { value: "" }, "从列表选择", -1)),
                      (G(!0), $(Q, null, ge(pe.value, (N) => (G(), $("option", {
                        key: N.id,
                        value: N.id
                      }, W(ht(no)(N)), 9, cd))), 128))
                    ], 40, ad)
                  ])) : De("", !0),
                  u("div", ud, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (N) => D(m.characterName)
                    }, " 试听 ", 8, fd),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (N) => b(J)
                    }, " 删除 ", 8, dd)
                  ])
                ]))), 128)) : Y.value ? (G(!0), $(Q, { key: 1 }, ge(n.indexTtsCharacterMappings, (m, J) => (G(), $("article", {
                  key: `index-${J}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", pd, [
                    c[76] || (c[76] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": (N) => m.characterName = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, md), [
                      [ve, m.characterName]
                    ])
                  ]),
                  u("div", gd, [
                    u("label", hd, [
                      c[77] || (c[77] = u("span", { class: "mtts-label" }, "音色预设", -1)),
                      z(u("select", {
                        "onUpdate:modelValue": (N) => m.indexTtsVoiceId = N,
                        class: "text_pole"
                      }, [
                        u("option", _d, W(ye.value.length > 0 ? "请选择" : "先检查连接"), 1),
                        m.indexTtsVoiceId && !ye.value.some((N) => N.id === m.indexTtsVoiceId) ? (G(), $("option", {
                          key: 0,
                          value: m.indexTtsVoiceId
                        }, W(m.indexTtsVoiceId), 9, bd)) : De("", !0),
                        (G(!0), $(Q, null, ge(ye.value, (N) => (G(), $("option", {
                          key: N.id,
                          value: N.id
                        }, W(N.name), 9, yd))), 128))
                      ], 8, vd), [
                        [de, m.indexTtsVoiceId]
                      ])
                    ]),
                    u("label", xd, [
                      c[78] || (c[78] = u("span", { class: "mtts-label" }, "语言", -1)),
                      z(u("select", {
                        "onUpdate:modelValue": (N) => m.indexTtsLanguage = N,
                        class: "text_pole"
                      }, [
                        (G(!0), $(Q, null, ge(ht(Kn), (N) => (G(), $("option", {
                          key: N,
                          value: N
                        }, W(N), 9, Sd))), 128))
                      ], 8, Td), [
                        [de, m.indexTtsLanguage]
                      ])
                    ])
                  ]),
                  u("div", wd, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (N) => D(m.characterName)
                    }, " 试听 ", 8, Ed),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (N) => b(J)
                    }, " 删除 ", 8, Cd)
                  ])
                ]))), 128)) : k.value ? (G(!0), $(Q, { key: 2 }, ge(n.gsviCharacterMappings, (m, J) => (G(), $("article", {
                  key: `gsvi-${J}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", Id, [
                    c[79] || (c[79] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": (N) => m.characterName = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, Md), [
                      [ve, m.characterName]
                    ])
                  ]),
                  u("div", Ad, [
                    u("label", Pd, [
                      c[80] || (c[80] = u("span", { class: "mtts-label" }, "模型", -1)),
                      z(u("select", {
                        "onUpdate:modelValue": (N) => m.gsviVoiceId = N,
                        class: "text_pole"
                      }, [
                        u("option", Vd, W(ce.value.length > 0 ? "请选择" : "先检查连接"), 1),
                        (G(!0), $(Q, null, ge(ce.value, (N) => (G(), $("option", {
                          key: N.id,
                          value: N.id
                        }, W(N.name), 9, Nd))), 128))
                      ], 8, Rd), [
                        [de, m.gsviVoiceId]
                      ])
                    ]),
                    u("label", Ld, [
                      c[82] || (c[82] = u("span", { class: "mtts-label" }, "语种", -1)),
                      z(u("select", {
                        "onUpdate:modelValue": (N) => m.gsviLanguage = N,
                        class: "text_pole"
                      }, [
                        c[81] || (c[81] = u("option", { value: "" }, "请选择", -1)),
                        (G(!0), $(Q, null, ge(ne(m.gsviVoiceId), (N) => (G(), $("option", {
                          key: N,
                          value: N
                        }, W(N), 9, Gd))), 128))
                      ], 8, kd), [
                        [de, m.gsviLanguage]
                      ])
                    ]),
                    u("label", $d, [
                      c[84] || (c[84] = u("span", { class: "mtts-label" }, "情绪", -1)),
                      z(u("select", {
                        "onUpdate:modelValue": (N) => m.gsviEmotion = N,
                        class: "text_pole"
                      }, [
                        c[83] || (c[83] = u("option", { value: "" }, "请选择", -1)),
                        (G(!0), $(Q, null, ge(ee(m.gsviVoiceId, m.gsviLanguage), (N) => (G(), $("option", {
                          key: N,
                          value: N
                        }, W(N), 9, Dd))), 128))
                      ], 8, Od), [
                        [de, m.gsviEmotion]
                      ])
                    ])
                  ]),
                  u("div", Ud, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (N) => D(m.characterName)
                    }, " 试听 ", 8, jd),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (N) => b(J)
                    }, " 删除 ", 8, Fd)
                  ])
                ]))), 128)) : De("", !0),
                Ct.value.length > 0 ? (G(), $("p", Bd, " 重复角色名：" + W(Ct.value.join("、")) + "，最后一条完整映射生效。 ", 1)) : De("", !0)
              ], 64))
            ]),
            u("details", Hd, [
              c[89] || (c[89] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                rt(" 映射方案（可选） ")
              ], -1)),
              u("div", Kd, [
                c[88] || (c[88] = u("p", { class: "mtts-hint" }, "角色映射会自动保存；这里仅用于保存多套可切换方案。", -1)),
                u("label", zd, [
                  c[85] || (c[85] = u("span", { class: "mtts-label" }, "方案名称", -1)),
                  z(u("input", {
                    "onUpdate:modelValue": c[23] || (c[23] = (m) => l.value = m),
                    class: "text_pole",
                    type: "text",
                    placeholder: "日语角色组"
                  }, null, 512), [
                    [ve, l.value]
                  ])
                ]),
                u("div", { class: "mtts-actions" }, [
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    onClick: I
                  }, " 保存当前方案 ")
                ]),
                u("label", Wd, [
                  c[87] || (c[87] = u("span", { class: "mtts-label" }, "选择已有方案", -1)),
                  z(u("select", {
                    "onUpdate:modelValue": c[24] || (c[24] = (m) => a.value = m),
                    class: "text_pole"
                  }, [
                    c[86] || (c[86] = u("option", { value: "" }, "请选择方案", -1)),
                    (G(!0), $(Q, null, ge(Dt.value, (m) => (G(), $("option", {
                      key: m.name,
                      value: m.name
                    }, W(m.name) + "（" + W(m.mappings.length) + "） ", 9, Jd))), 128))
                  ], 512), [
                    [de, a.value]
                  ])
                ]),
                u("div", Xd, [
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: !a.value,
                    onClick: C
                  }, " 载入方案 ", 8, Yd),
                  u("button", {
                    class: "mtts-btn mtts-btn-danger",
                    type: "button",
                    disabled: !a.value,
                    onClick: E
                  }, " 删除方案 ", 8, Zd)
                ])
              ])
            ]),
            u("details", Qd, [
              c[94] || (c[94] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                rt(" 提示词注入 ")
              ], -1)),
              u("div", qd, [
                u("label", ep, [
                  z(u("input", {
                    "onUpdate:modelValue": c[25] || (c[25] = (m) => n.injectEnabled = m),
                    type: "checkbox"
                  }, null, 512), [
                    [Di, n.injectEnabled]
                  ]),
                  c[90] || (c[90] = u("span", null, "注入 <say> 提示", -1))
                ]),
                u("label", tp, [
                  u("span", np, "注入深度 D" + W(n.injectDepth), 1),
                  z(u("input", {
                    "onUpdate:modelValue": c[26] || (c[26] = (m) => n.injectDepth = m),
                    type: "range",
                    min: "0",
                    max: "10",
                    step: "1"
                  }, null, 512), [
                    [
                      ve,
                      n.injectDepth,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ]),
                u("label", sp, [
                  c[92] || (c[92] = u("span", { class: "mtts-label" }, "注入角色", -1)),
                  z(u("select", {
                    "onUpdate:modelValue": c[27] || (c[27] = (m) => n.injectRole = m),
                    class: "text_pole"
                  }, [...c[91] || (c[91] = [
                    u("option", { value: "system" }, "system", -1),
                    u("option", { value: "user" }, "user", -1),
                    u("option", { value: "assistant" }, "assistant", -1)
                  ])], 512), [
                    [de, n.injectRole]
                  ])
                ]),
                u("label", ip, [
                  c[93] || (c[93] = u("span", { class: "mtts-label" }, "注入模板", -1)),
                  z(u("textarea", {
                    "onUpdate:modelValue": c[28] || (c[28] = (m) => n.injectTemplate = m),
                    class: "text_pole",
                    rows: "5"
                  }, null, 512), [
                    [ve, n.injectTemplate]
                  ])
                ])
              ])
            ]),
            u("details", op, [
              c[99] || (c[99] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                rt(" 生成与缓存 ")
              ], -1)),
              u("div", rp, [
                u("label", lp, [
                  c[96] || (c[96] = u("span", { class: "mtts-label" }, "预取", -1)),
                  z(u("select", {
                    "onUpdate:modelValue": c[29] || (c[29] = (m) => n.prefetchMode = m),
                    class: "text_pole"
                  }, [...c[95] || (c[95] = [
                    u("option", { value: "manual" }, "只在点击时生成", -1),
                    u("option", { value: "auto_all" }, "自动预取全部", -1),
                    u("option", { value: "auto_first_n" }, "自动预取前 N 句", -1)
                  ])], 512), [
                    [de, n.prefetchMode]
                  ])
                ]),
                n.prefetchMode !== "manual" ? (G(), $("div", ap, [
                  n.prefetchMode === "auto_first_n" ? (G(), $("label", cp, [
                    c[97] || (c[97] = u("span", { class: "mtts-label" }, "前 N 句", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": c[30] || (c[30] = (m) => n.prefetchFirstCount = m),
                      class: "text_pole",
                      type: "number",
                      min: "1",
                      max: "10"
                    }, null, 512), [
                      [
                        ve,
                        n.prefetchFirstCount,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])) : De("", !0),
                  u("label", up, [
                    c[98] || (c[98] = u("span", { class: "mtts-label" }, "并发", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": c[31] || (c[31] = (m) => n.maxConcurrency = m),
                      class: "text_pole",
                      type: "number",
                      min: "1",
                      max: "10"
                    }, null, 512), [
                      [
                        ve,
                        n.maxConcurrency,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ])) : De("", !0),
                u("p", fp, " 缓存 " + W(d.value) + " 条 / " + W(It.value) + "，上限 100 条或 50MB。 ", 1),
                u("div", dp, [
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: o.value,
                    onClick: A
                  }, " 刷新缓存 ", 8, pp),
                  u("button", {
                    class: "mtts-btn mtts-btn-danger",
                    type: "button",
                    disabled: o.value,
                    onClick: U
                  }, " 清空缓存 ", 8, mp)
                ])
              ])
            ]),
            u("details", gp, [
              c[104] || (c[104] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                rt(" 高级设置 ")
              ], -1)),
              u("div", hp, [
                R.value ? (G(), $(Q, { key: 0 }, [
                  u("label", vp, [
                    c[100] || (c[100] = u("span", { class: "mtts-label" }, "模型", -1)),
                    z(u("select", {
                      "onUpdate:modelValue": c[32] || (c[32] = (m) => n.model = m),
                      class: "text_pole"
                    }, [
                      (G(!0), $(Q, null, ge(ht(dr), (m) => (G(), $("option", {
                        key: m,
                        value: m
                      }, W(m), 9, _p))), 128))
                    ], 512), [
                      [de, n.model]
                    ])
                  ]),
                  u("label", bp, [
                    u("span", yp, "语速 " + W(n.speed.toFixed(2)), 1),
                    z(u("input", {
                      "onUpdate:modelValue": c[33] || (c[33] = (m) => n.speed = m),
                      type: "range",
                      min: "0.5",
                      max: "2",
                      step: "0.05"
                    }, null, 512), [
                      [
                        ve,
                        n.speed,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  u("label", xp, [
                    u("span", Tp, "音量 " + W(n.vol.toFixed(2)), 1),
                    z(u("input", {
                      "onUpdate:modelValue": c[34] || (c[34] = (m) => n.vol = m),
                      type: "range",
                      min: "0",
                      max: "10",
                      step: "0.1"
                    }, null, 512), [
                      [
                        ve,
                        n.vol,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : k.value ? (G(), $(Q, { key: 1 }, [
                  u("label", Sp, [
                    u("span", wp, "语速 " + W(n.speed.toFixed(2)), 1),
                    z(u("input", {
                      "onUpdate:modelValue": c[35] || (c[35] = (m) => n.speed = m),
                      type: "range",
                      min: "0.5",
                      max: "2",
                      step: "0.05"
                    }, null, 512), [
                      [
                        ve,
                        n.speed,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ]),
                  u("label", Ep, [
                    c[101] || (c[101] = u("span", { class: "mtts-label" }, "鉴权 Token", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": c[36] || (c[36] = (m) => n.localGsviAuthToken = m),
                      class: "text_pole",
                      type: "password",
                      autocomplete: "off"
                    }, null, 512), [
                      [ve, n.localGsviAuthToken]
                    ])
                  ]),
                  u("div", Cp, [
                    u("label", Ip, [
                      c[102] || (c[102] = u("span", { class: "mtts-label" }, "文本语言", -1)),
                      z(u("select", {
                        "onUpdate:modelValue": c[37] || (c[37] = (m) => n.localGsviTextLang = m),
                        class: "text_pole"
                      }, [
                        (G(!0), $(Q, null, ge(ht(Du), (m) => (G(), $("option", {
                          key: m,
                          value: m
                        }, W(m), 9, Mp))), 128))
                      ], 512), [
                        [de, n.localGsviTextLang]
                      ])
                    ]),
                    u("label", Ap, [
                      c[103] || (c[103] = u("span", { class: "mtts-label" }, "切分", -1)),
                      z(u("select", {
                        "onUpdate:modelValue": c[38] || (c[38] = (m) => n.localGsviTextSplitMethod = m),
                        class: "text_pole"
                      }, [
                        (G(!0), $(Q, null, ge(ht(Uu), (m) => (G(), $("option", {
                          key: m,
                          value: m
                        }, W(m), 9, Pp))), 128))
                      ], 512), [
                        [de, n.localGsviTextSplitMethod]
                      ])
                    ])
                  ]),
                  u("label", Rp, [
                    u("span", Vp, "Batch " + W(n.localGsviBatchSize), 1),
                    z(u("input", {
                      "onUpdate:modelValue": c[39] || (c[39] = (m) => n.localGsviBatchSize = m),
                      type: "range",
                      min: "1",
                      max: "8",
                      step: "1"
                    }, null, 512), [
                      [
                        ve,
                        n.localGsviBatchSize,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : De("", !0),
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
              (G(), $("span", {
                key: h.value,
                class: "mtts-fade"
              }, W(O.value), 1))
            ], 2)
          ])
        ])
      ])
    ], 8, zu));
  }
});
let ln = null, an = null, vn = null;
function Lp() {
  return zt(Vr().readRawSettings());
}
function kp() {
  return vn ??= Au(Lu(Lp)), vn;
}
function tn() {
  return an || (an = bc(
    Vr(),
    {
      mount(e, t) {
        ln?.unmount(), ln = ja(Np, {
          displayName: ic,
          version: oc,
          settings: t,
          onSettingsChange(n) {
            an?.updateSettings(n);
          }
        }), ln.mount(e);
      },
      unmount() {
        ln?.unmount(), ln = null;
      }
    },
    {
      stopPlayback: $n,
      clearCache: ar,
      startRuntime: () => kp().start(),
      stopRuntime: () => vn?.stop(),
      syncInjection: () => vn?.syncInjection(),
      refreshDecorations: () => vn?.refreshDecorations()
    }
  ), an);
}
async function nn(e, t) {
  try {
    await t();
  } catch (n) {
    const s = n instanceof Error ? n.message : String(n);
    throw console.error(`${Ee} ${e} failed: ${s}`), n;
  }
}
async function Gp() {
  await nn("onInstall", () => tn().install());
}
async function $p() {
  await nn("onActivate", () => tn().activate());
}
async function Op() {
  await nn("onEnable", () => tn().activate());
}
async function Dp() {
  await nn("onDisable", () => tn().disable());
}
async function Up() {
  await nn("onClean", () => tn().clean());
}
async function jp() {
  await nn("onDelete", () => tn().delete());
}
export {
  $p as onActivate,
  Up as onClean,
  jp as onDelete,
  Dp as onDisable,
  Op as onEnable,
  Gp as onInstall
};
//# sourceMappingURL=index.js.map
