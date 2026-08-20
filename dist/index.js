// @__NO_SIDE_EFFECTS__
function Js(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ae = {}, Ft = [], Vt = () => {
}, ao = () => !1, Zn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Qn = (e) => e.startsWith("onUpdate:"), Be = Object.assign, co = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Or = Object.prototype.hasOwnProperty, oe = (e, t) => Or.call(e, t), X = Array.isArray, Bt = (e) => Mn(e) === "[object Map]", qt = (e) => Mn(e) === "[object Set]", hi = (e) => Mn(e) === "[object Date]", se = (e) => typeof e == "function", _e = (e) => typeof e == "string", qe = (e) => typeof e == "symbol", ce = (e) => e !== null && typeof e == "object", uo = (e) => (ce(e) || se(e)) && se(e.then) && se(e.catch), fo = Object.prototype.toString, Mn = (e) => fo.call(e), Gr = (e) => Mn(e).slice(8, -1), po = (e) => Mn(e) === "[object Object]", Xs = (e) => _e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fn = /* @__PURE__ */ Js(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, $r = /-\w/g, je = qn(
  (e) => e.replace($r, (t) => t.slice(1).toUpperCase())
), Dr = /\B([A-Z])/g, Ot = qn(
  (e) => e.replace(Dr, "-$1").toLowerCase()
), mo = qn((e) => e.charAt(0).toUpperCase() + e.slice(1)), us = qn(
  (e) => e ? `on${mo(e)}` : ""
), Ze = (e, t) => !Object.is(e, t), On = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, go = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, es = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let vi;
const ts = () => vi || (vi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ys(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = _e(s) ? Br(s) : Ys(s);
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
const Hr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Kr = /* @__PURE__ */ Js(Hr);
function ho(e) {
  return !!e || e === "";
}
function zr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = en(e[s], t[s]);
  return n;
}
function en(e, t) {
  if (e === t) return !0;
  let n = hi(e), s = hi(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = qe(e), s = qe(t), n || s)
    return e === t;
  if (n = X(e), s = X(t), n || s)
    return n && s ? zr(e, t) : !1;
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
function Zs(e, t) {
  return e.findIndex((n) => en(n, t));
}
const vo = (e) => !!(e && e.__v_isRef === !0), W = (e) => _e(e) ? e : e == null ? "" : X(e) || ce(e) && (e.toString === fo || !se(e.toString)) ? vo(e) ? W(e.value) : JSON.stringify(e, _o, 2) : String(e), _o = (e, t) => vo(t) ? _o(e, t.value) : Bt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], o) => (n[fs(s, o) + " =>"] = i, n),
    {}
  )
} : qt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => fs(n))
} : qe(t) ? fs(t) : ce(t) && !X(t) && !po(t) ? String(t) : t, fs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let xe;
class Wr {
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
const ds = /* @__PURE__ */ new WeakSet();
class bo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, xe && (xe.active ? xe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ds.has(this) && (ds.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || xo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, _i(this), To(this);
    const t = le, n = Ue;
    le = this, Ue = !0;
    try {
      return this.fn();
    } finally {
      So(this), le = t, Ue = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ei(t);
      this.deps = this.depsTail = void 0, _i(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ds.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ns(this) && this.run();
  }
  get dirty() {
    return Ns(this);
  }
}
let yo = 0, dn, pn;
function xo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = pn, pn = e;
    return;
  }
  e.next = dn, dn = e;
}
function Qs() {
  yo++;
}
function qs() {
  if (--yo > 0)
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
function To(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function So(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), ei(s), Xr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Ns(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (wo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function wo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === bn) || (e.globalVersion = bn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ns(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = le, s = Ue;
  le = e, Ue = !0;
  try {
    To(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ze(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    le = n, Ue = s, So(e), e.flags &= -3;
  }
}
function ei(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      ei(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Xr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ue = !0;
const Eo = [];
function Tt() {
  Eo.push(Ue), Ue = !1;
}
function St() {
  const e = Eo.pop();
  Ue = e === void 0 ? !0 : e;
}
function _i(e) {
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
class ti {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!le || !Ue || le === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== le)
      n = this.activeLink = new Yr(le, this), le.deps ? (n.prevDep = le.depsTail, le.depsTail.nextDep = n, le.depsTail = n) : le.deps = le.depsTail = n, Io(n);
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
    Qs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      qs();
    }
  }
}
function Io(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Io(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ls = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ Symbol(
  ""
), ks = /* @__PURE__ */ Symbol(
  ""
), yn = /* @__PURE__ */ Symbol(
  ""
);
function Te(e, t, n) {
  if (Ue && le) {
    let s = Ls.get(e);
    s || Ls.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new ti()), i.map = s, i.key = n), i.track();
  }
}
function ut(e, t, n, s, i, o) {
  const r = Ls.get(e);
  if (!r) {
    bn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Qs(), t === "clear")
    r.forEach(l);
  else {
    const a = X(e), d = a && Xs(n);
    if (a && n === "length") {
      const p = Number(s);
      r.forEach((h, w) => {
        (w === "length" || w === yn || !qe(w) && w >= p) && l(h);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), d && l(r.get(yn)), t) {
        case "add":
          a ? d && l(r.get("length")) : (l(r.get(Nt)), Bt(e) && l(r.get(ks)));
          break;
        case "delete":
          a || (l(r.get(Nt)), Bt(e) && l(r.get(ks)));
          break;
        case "set":
          Bt(e) && l(r.get(Nt));
          break;
      }
  }
  qs();
}
function jt(e) {
  const t = /* @__PURE__ */ te(e);
  return t === e ? t : (Te(t, "iterate", yn), /* @__PURE__ */ ke(e) ? t : t.map(Fe));
}
function ns(e) {
  return Te(e = /* @__PURE__ */ te(e), "iterate", yn), e;
}
function Xe(e, t) {
  return /* @__PURE__ */ pt(e) ? Yt(/* @__PURE__ */ Lt(e) ? Fe(t) : t) : Fe(t);
}
const Zr = {
  __proto__: null,
  [Symbol.iterator]() {
    return ps(this, Symbol.iterator, (e) => Xe(this, e));
  },
  concat(...e) {
    return jt(this).concat(
      ...e.map((t) => X(t) ? jt(t) : t)
    );
  },
  entries() {
    return ps(this, "entries", (e) => (e[1] = Xe(this, e[1]), e));
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
    return ms(this, "includes", e);
  },
  indexOf(...e) {
    return ms(this, "indexOf", e);
  },
  join(e) {
    return jt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ms(this, "lastIndexOf", e);
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
    return bi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return bi(this, "reduceRight", e, t);
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
    return ps(this, "values", (e) => Xe(this, e));
  }
};
function ps(e, t, n) {
  const s = ns(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ ke(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const Qr = Array.prototype;
function st(e, t, n, s, i, o) {
  const r = ns(e), l = r !== e && !/* @__PURE__ */ ke(e), a = r[t];
  if (a !== Qr[t]) {
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
function bi(e, t, n, s) {
  const i = ns(e), o = i !== e && !/* @__PURE__ */ ke(e);
  let r = n, l = !1;
  i !== e && (o ? (l = s.length === 0, r = function(d, p, h) {
    return l && (l = !1, d = Xe(e, d)), n.call(this, d, Xe(e, p), h, e);
  }) : n.length > 3 && (r = function(d, p, h) {
    return n.call(this, d, p, h, e);
  }));
  const a = i[t](r, ...s);
  return l ? Xe(e, a) : a;
}
function ms(e, t, n) {
  const s = /* @__PURE__ */ te(e);
  Te(s, "iterate", yn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ ii(n[0]) ? (n[0] = /* @__PURE__ */ te(n[0]), s[t](...n)) : i;
}
function on(e, t, n = []) {
  Tt(), Qs();
  const s = (/* @__PURE__ */ te(e))[t].apply(e, n);
  return qs(), St(), s;
}
const qr = /* @__PURE__ */ Js("__proto__,__v_isRef,__isVue"), Co = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qe)
);
function el(e) {
  qe(e) || (e = String(e));
  const t = /* @__PURE__ */ te(this);
  return Te(t, "has", e), t.hasOwnProperty(e);
}
class Mo {
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
      return s === (i ? o ? ul : Vo : o ? Ro : Po).get(t) || // receiver is not the reactive proxy, but has the same prototype
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
    if ((qe(n) ? Co.has(n) : qr(n)) || (i || Te(t, "get", n), o))
      return l;
    if (/* @__PURE__ */ Ie(l)) {
      const a = r && Xs(n) ? l : l.value;
      return i && ce(a) ? /* @__PURE__ */ Gs(a) : a;
    }
    return ce(l) ? i ? /* @__PURE__ */ Gs(l) : /* @__PURE__ */ mn(l) : l;
  }
}
class Ao extends Mo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let o = t[n];
    const r = X(t) && Xs(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ pt(o);
      if (!/* @__PURE__ */ ke(s) && !/* @__PURE__ */ pt(s) && (o = /* @__PURE__ */ te(o), s = /* @__PURE__ */ te(s)), !r && /* @__PURE__ */ Ie(o) && !/* @__PURE__ */ Ie(s))
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
    return (!qe(n) || !Co.has(n)) && Te(t, "has", n), s;
  }
  ownKeys(t) {
    return Te(
      t,
      "iterate",
      X(t) ? "length" : Nt
    ), Reflect.ownKeys(t);
  }
}
class tl extends Mo {
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
const nl = /* @__PURE__ */ new Ao(), sl = /* @__PURE__ */ new tl(), il = /* @__PURE__ */ new Ao(!0);
const Os = (e) => e, Pn = (e) => Reflect.getPrototypeOf(e);
function ol(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, o = /* @__PURE__ */ te(i), r = Bt(o), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, d = i[e](...s), p = n ? Os : t ? Yt : Fe;
    return !t && Te(
      o,
      "iterate",
      a ? ks : Nt
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
      const { has: a } = Pn(r), d = t ? Os : e ? Yt : Fe;
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
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ te(l), d = t ? Os : e ? Yt : Fe;
      return !e && Te(a, "iterate", Nt), l.forEach((p, h) => i.call(o, d(p), d(h), r));
    }
  };
  return Be(
    n,
    e ? {
      add: Rn("add"),
      set: Rn("set"),
      delete: Rn("delete"),
      clear: Rn("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ te(this), r = Pn(o), l = /* @__PURE__ */ te(i), a = !t && !/* @__PURE__ */ ke(i) && !/* @__PURE__ */ pt(i) ? l : i;
        return r.has.call(o, a) || Ze(i, a) && r.has.call(o, i) || Ze(l, a) && r.has.call(o, l) || (o.add(a), ut(o, "add", a, a)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ ke(o) && !/* @__PURE__ */ pt(o) && (o = /* @__PURE__ */ te(o));
        const r = /* @__PURE__ */ te(this), { has: l, get: a } = Pn(r);
        let d = l.call(r, i);
        d || (i = /* @__PURE__ */ te(i), d = l.call(r, i));
        const p = a.call(r, i);
        return r.set(i, o), d ? Ze(o, p) && ut(r, "set", i, o) : ut(r, "add", i, o), this;
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
function ni(e, t) {
  const n = rl(e, t);
  return (s, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    oe(n, i) && i in s ? n : s,
    i,
    o
  );
}
const ll = {
  get: /* @__PURE__ */ ni(!1, !1)
}, al = {
  get: /* @__PURE__ */ ni(!1, !0)
}, cl = {
  get: /* @__PURE__ */ ni(!0, !1)
};
const Po = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new WeakMap(), ul = /* @__PURE__ */ new WeakMap();
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
  return /* @__PURE__ */ pt(e) ? e : si(
    e,
    !1,
    nl,
    ll,
    Po
  );
}
// @__NO_SIDE_EFFECTS__
function dl(e) {
  return si(
    e,
    !1,
    il,
    al,
    Ro
  );
}
// @__NO_SIDE_EFFECTS__
function Gs(e) {
  return si(
    e,
    !0,
    sl,
    cl,
    Vo
  );
}
function si(e, t, n, s, i) {
  if (!ce(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = fl(Gr(e));
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
function ke(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ii(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function te(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ te(t) : e;
}
function pl(e) {
  return !oe(e, "__v_skip") && Object.isExtensible(e) && go(e, "__v_skip", !0), e;
}
const Fe = (e) => ce(e) ? /* @__PURE__ */ mn(e) : e, Yt = (e) => ce(e) ? /* @__PURE__ */ Gs(e) : e;
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
    this.dep = new ti(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ te(t), this._value = n ? t : Fe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ ke(t) || /* @__PURE__ */ pt(t);
    t = s ? t : /* @__PURE__ */ te(t), Ze(t, n) && (this._rawValue = t, this._value = s ? t : Fe(t), this.dep.trigger());
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
function No(e) {
  return /* @__PURE__ */ Lt(e) ? e : new Proxy(e, hl);
}
class vl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ti(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = bn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    le !== this)
      return xo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return wo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function _l(e, t, n = !1) {
  let s, i;
  return se(e) ? s = e : (s = e.get, i = e.set), new vl(s, i, n);
}
const Vn = {}, Un = /* @__PURE__ */ new WeakMap();
let Pt;
function bl(e, t = !1, n = Pt) {
  if (n) {
    let s = Un.get(n);
    s || Un.set(n, s = []), s.push(e);
  }
}
function yl(e, t, n = ae) {
  const { immediate: s, deep: i, once: o, scheduler: r, augmentJob: l, call: a } = n, d = (U) => i ? U : /* @__PURE__ */ ke(U) || i === !1 || i === 0 ? ft(U, 1) : ft(U);
  let p, h, w, S, B = !1, P = !1;
  if (/* @__PURE__ */ Ie(e) ? (h = () => e.value, B = /* @__PURE__ */ ke(e)) : /* @__PURE__ */ Lt(e) ? (h = () => d(e), B = !0) : X(e) ? (P = !0, B = e.some((U) => /* @__PURE__ */ Lt(U) || /* @__PURE__ */ ke(U)), h = () => e.map((U) => {
    if (/* @__PURE__ */ Ie(U))
      return U.value;
    if (/* @__PURE__ */ Lt(U))
      return d(U);
    if (se(U))
      return a ? a(U, 2) : U();
  })) : se(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (w) {
      Tt();
      try {
        w();
      } finally {
        St();
      }
    }
    const U = Pt;
    Pt = p;
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
    p.stop(), V && V.active && co(V.effects, p);
  };
  if (o && t) {
    const U = t;
    t = (...ue) => {
      const ye = U(...ue);
      return R(), ye;
    };
  }
  let k = P ? new Array(e.length).fill(Vn) : Vn;
  const Y = (U) => {
    if (!(!(p.flags & 1) || !p.dirty && !U))
      if (t) {
        const ue = p.run();
        if (U || i || B || (P ? ue.some((ye, me) => Ze(ye, k[me])) : Ze(ue, k))) {
          w && w();
          const ye = Pt;
          Pt = p;
          try {
            const me = [
              ue,
              // pass undefined as the old value when it's changed for the first time
              k === Vn ? void 0 : P && k[0] === Vn ? [] : k,
              S
            ];
            k = ue, a ? a(t, 3, me) : (
              // @ts-expect-error
              t(...me)
            );
          } finally {
            Pt = ye;
          }
        }
      } else
        p.run();
  };
  return l && l(Y), p = new bo(h), p.scheduler = r ? () => r(Y, !1) : Y, S = (U) => bl(U, !1, p), w = p.onStop = () => {
    const U = Un.get(p);
    if (U) {
      if (a)
        a(U, 4);
      else
        for (const ue of U) ue();
      Un.delete(p);
    }
  }, t ? s ? Y(!0) : k = p.run() : r ? r(Y.bind(null, !0), !0) : p.run(), R.pause = p.pause.bind(p), R.resume = p.resume.bind(p), R.stop = R, R;
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
  else if (po(e)) {
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
    ss(i, t, n);
  }
}
function et(e, t, n, s) {
  if (se(e)) {
    const i = An(e, t, n, s);
    return i && uo(i) && i.catch((o) => {
      ss(o, t, n);
    }), i;
  }
  if (X(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(et(e[o], t, n, s));
    return i;
  }
}
function ss(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || ae;
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
const Lo = /* @__PURE__ */ Promise.resolve();
let Fn = null;
function ko(e) {
  const t = Fn || Lo;
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
function oi(e) {
  if (!(e.flags & 1)) {
    const t = xn(e), n = Ee[Ee.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= xn(n) ? Ee.push(e) : Ee.splice(Tl(t), 0, e), e.flags |= 1, Oo();
  }
}
function Oo() {
  Fn || (Fn = Lo.then($o));
}
function Sl(e) {
  if (!X(e))
    vt && e.id === -1 ? vt.splice(Ut + 1, 0, e) : e.flags & 1 || (Ht.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ht.push(e[t]);
  Oo();
}
function yi(e, t, n = Je + 1) {
  for (; n < Ee.length; n++) {
    const s = Ee[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ee.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Go(e) {
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
function $o(e) {
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
    Je = -1, Ee.length = 0, Go(), Fn = null, (Ee.length || Ht.length) && $o();
  }
}
let Le = null, Do = null;
function Bn(e) {
  const t = Le;
  return Le = e, Do = e && e.type.__scopeId || null, t;
}
function wl(e, t = Le, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Ci(-1);
    const o = Bn(t), r = kt.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let a = kt.length; a > r; a--) nr();
      Bn(o), s._d && Ci(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function z(e, t) {
  if (Le === null)
    return e;
  const n = ls(Le), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, l, a = ae] = t[i];
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
function El(e, t, n = !1) {
  const s = da();
  if (s || Kt) {
    let i = Kt ? Kt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && se(t) ? t.call(s && s.proxy) : t;
  }
}
const Il = /* @__PURE__ */ Symbol.for("v-scx"), Cl = () => El(Il);
function Ml(e, t, n) {
  return Al(e, t, n);
}
function Al(e, t, n = ae) {
  const { immediate: s, deep: i, flush: o, once: r } = n, l = Be({}, n), a = t && s || !t && o !== "post";
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
  const p = wt;
  l.call = (S, B, P) => et(S, p, B, P);
  let h = !1;
  o === "post" ? l.scheduler = (S) => {
    Ce(S, p && p.suspense);
  } : o !== "sync" && (h = !0, l.scheduler = (S, B) => {
    B ? S() : oi(S);
  }), l.augmentJob = (S) => {
    t && (S.flags |= 4), h && (S.flags |= 2, p && (S.id = p.uid, S.i = p));
  };
  const w = yl(e, t, l);
  return wn && (d ? d.push(w) : a && w()), w;
}
const Pl = /* @__PURE__ */ Symbol("_vte"), is = (e) => e.__isTeleport, gs = /* @__PURE__ */ Symbol("_leaveCb");
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
function jo(e) {
  if (!Uo(e))
    return is(e.type) && e.children ? Rl(e.children) : e;
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
function ri(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    ri(
      is(n.type) && jo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Vl(e, t) {
  return se(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Be({ name: e.name }, t, { setup: e })
  ) : e;
}
function Nl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function xi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Hn = /* @__PURE__ */ new WeakMap();
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
  const o = s.shapeFlag & 4 ? ls(s.component) : s.el, r = i ? null : o, { i: l, r: a } = e, d = t && t.r, p = l.refs === ae ? l.refs = {} : l.refs, h = l.setupState, w = /* @__PURE__ */ te(h), S = h === ae ? ao : (P) => xi(p, P) ? !1 : oe(w, P), B = (P, V) => !(V && xi(p, V));
  if (d != null && d !== a) {
    if (Ti(t), _e(d))
      p[d] = null, S(d) && (h[d] = null);
    else if (/* @__PURE__ */ Ie(d)) {
      const P = t;
      B(d, P.k) && (d.value = null), P.k && (p[P.k] = null);
    }
  }
  if (se(a))
    An(a, l, 12, [r, p]);
  else {
    const P = _e(a), V = /* @__PURE__ */ Ie(a);
    if (P || V) {
      const R = () => {
        if (e.f) {
          const k = P ? S(a) ? h[a] : p[a] : B() || !e.k ? a.value : p[e.k];
          if (i)
            X(k) && co(k, o);
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
          R(), Hn.delete(e);
        };
        k.id = -1, Hn.set(e, k), Ce(k, n);
      } else
        Ti(e), R();
    }
  }
}
function Ti(e) {
  const t = Hn.get(e);
  t && (t.flags |= 8, Hn.delete(e));
}
ts().requestIdleCallback;
ts().cancelIdleCallback;
const hn = (e) => !!e.type.__asyncLoader, Uo = (e) => e.type.__isKeepAlive;
function Ll(e, t, n = wt, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...r) => {
      Tt();
      const l = ci(n), a = et(t, n, e, r);
      return l(), St(), a;
    });
    return s ? i.unshift(o) : i.push(o), o;
  }
}
const Fo = (e) => (t, n = wt) => {
  (!wn || e === "sp") && Ll(e, (...s) => t(...s), n);
}, kl = Fo("m"), Ol = Fo("um"), Gl = /* @__PURE__ */ Symbol.for("v-ndc");
function ge(e, t, n, s) {
  let i;
  const o = n, r = X(e);
  if (r || _e(e)) {
    const l = r && /* @__PURE__ */ Lt(e);
    let a = !1, d = !1;
    l && (a = !/* @__PURE__ */ ke(e), d = /* @__PURE__ */ pt(e), e = ns(e)), i = new Array(e.length);
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
        const p = l[a];
        i[a] = t(e[p], p, a, o);
      }
    }
  else
    i = [];
  return i;
}
const $s = (e) => e ? rr(e) ? ls(e) : $s(e.parent) : null, vn = (
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
    $parent: (e) => $s(e.parent),
    $root: (e) => $s(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      oi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ko.bind(e.proxy)),
    $watch: (e) => Vt
  })
), hs = (e, t) => e !== ae && !e.__isScriptSetup && oe(e, t), $l = {
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
        if (hs(s, t))
          return r[t] = 1, s[t];
        if (oe(o, t))
          return r[t] = 3, o[t];
        if (n !== ae && oe(n, t))
          return r[t] = 4, n[t];
        r[t] = 0;
      }
    }
    const d = vn[t];
    let p, h;
    if (d)
      return t === "$attrs" && Te(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
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
    return hs(i, t) ? (i[t] = n, !0) : oe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: o, type: r }
  }, l) {
    let a;
    return !!(n[l] || hs(t, l) || oe(o, l) || oe(s, l) || oe(vn, l) || oe(i.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : oe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Bo() {
  return {
    app: null,
    config: {
      isNativeTag: ao,
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
    se(s) || (s = Be({}, s)), i != null && !ce(i) && (i = null);
    const o = Bo(), r = /* @__PURE__ */ new WeakSet(), l = [];
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
          return S.appContext = o, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(S, p, w), a = !0, d._container = p, p.__vue_app__ = d, ls(S.component);
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
const Ul = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${je(t)}Modifiers`] || e[`${Ot(t)}Modifiers`];
function Fl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ae;
  let i = n;
  const o = t.startsWith("update:"), r = o && Ul(s, t.slice(7));
  r && (r.trim && (i = n.map((p) => _e(p) ? p.trim() : p)), r.number && (i = n.map(es)));
  let l, a = s[l = us(t)] || // also try camelCase event handler (#2249)
  s[l = us(je(t))];
  !a && o && (a = s[l = us(Ot(t))]), a && et(
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
  return o ? (X(o) ? o.forEach((l) => r[l] = null) : Be(r, o), ce(e) && s.set(e, r), r) : (ce(e) && s.set(e, null), null);
}
function os(e, t) {
  return !e || !Zn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), oe(e, t[0].toLowerCase() + t.slice(1)) || oe(e, Ot(t)) || oe(e, t));
}
function Si(e) {
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
  } = e, V = Bn(e);
  let R, k;
  try {
    if (n.shapeFlag & 4) {
      const U = i || s, ue = U;
      R = Ye(
        d.call(
          ue,
          U,
          p,
          h,
          S,
          w,
          B
        )
      ), k = l;
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
      ), k = t.props ? l : Hl(l);
    }
  } catch (U) {
    kt.length = 0, ss(U, e, 1), R = dt(mt);
  }
  let Y = R;
  if (k && P !== !1) {
    const U = Object.keys(k), { shapeFlag: ue } = Y;
    U.length && ue & 7 && (o && U.some(Qn) && (k = Kl(
      k,
      o
    )), Y = Zt(Y, k, !1, !0));
  }
  if (n.dirs && (Y = Zt(Y, null, !1, !0), Y.dirs = Y.dirs ? Y.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const U = is(Y.type) && jo(Y) || Y;
    ri(U, n.transition);
  }
  return R = Y, Bn(V), R;
}
const Hl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Zn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Kl = (e, t) => {
  const n = {};
  for (const s in e)
    (!Qn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function zl(e, t, n) {
  const { props: s, children: i, component: o } = e, { props: r, children: l, patchFlag: a } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? wi(s, r, d) : !!r;
    if (a & 8) {
      const p = t.dynamicProps;
      for (let h = 0; h < p.length; h++) {
        const w = p[h];
        if (Ho(r, s, w) && !os(d, w))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? wi(s, r, d) : !0 : !!r;
  return !1;
}
function wi(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (Ho(t, e, o) && !os(n, o))
      return !0;
  }
  return !1;
}
function Ho(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && ce(s) && ce(i) ? !en(s, i) : s !== i;
}
function Wl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Ko = {}, zo = () => Object.create(Ko), Wo = (e) => Object.getPrototypeOf(e) === Ko;
function Jl(e, t, n, s = !1) {
  const i = {}, o = zo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Jo(e, t, i, o);
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
      const p = e.vnode.dynamicProps;
      for (let h = 0; h < p.length; h++) {
        let w = p[h];
        if (os(e.emitsOptions, w))
          continue;
        const S = t[w];
        if (a)
          if (oe(o, w))
            S !== o[w] && (o[w] = S, d = !0);
          else {
            const B = je(w);
            i[B] = Ds(
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
    Jo(e, t, i, o) && (d = !0);
    let p;
    for (const h in l)
      (!t || // for camelCase
      !oe(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Ot(h)) === h || !oe(t, p))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[p] !== void 0) && (i[h] = Ds(
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
function Jo(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (fn(a))
        continue;
      const d = t[a];
      let p;
      i && oe(i, p = je(a)) ? !o || !o.includes(p) ? n[p] = d : (l || (l = {}))[p] = d : os(e.emitsOptions, a) || (!(a in s) || d !== s[a]) && (s[a] = d, r = !0);
    }
  if (o) {
    const a = /* @__PURE__ */ te(n), d = l || ae;
    for (let p = 0; p < o.length; p++) {
      const h = o[p];
      n[h] = Ds(
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
function Ds(e, t, n, s, i, o) {
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
          const p = ci(i);
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
    ] && (s === "" || s === Ot(n)) && (s = !0));
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
      const p = je(o[d]);
      Ei(p) && (r[p] = ae);
    }
  else if (o)
    for (const d in o) {
      const p = je(d);
      if (Ei(p)) {
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
  return ce(e) && s.set(e, a), a;
}
function Ei(e) {
  return e[0] !== "$" && !fn(e);
}
const li = (e) => e === "_" || e === "_ctx" || e === "$stable", ai = (e) => X(e) ? e.map(Ye) : [Ye(e)], Zl = (e, t, n) => {
  if (t._n)
    return t;
  const s = wl((...i) => ai(t(...i)), n);
  return s._c = !1, s;
}, Xo = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (li(i)) continue;
    const o = e[i];
    if (se(o))
      t[i] = Zl(i, o, s);
    else if (o != null) {
      const r = ai(o);
      t[i] = () => r;
    }
  }
}, Yo = (e, t) => {
  const n = ai(t);
  e.slots.default = () => n;
}, Zo = (e, t, n) => {
  for (const s in t)
    (n || !li(s)) && (e[s] = t[s]);
}, Ql = (e, t, n) => {
  const s = e.slots = zo();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Zo(s, t, n), n && go(s, "_", i, !0)) : Xo(t, s);
  } else t && Yo(e, t);
}, ql = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let o = !0, r = ae;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : Zo(i, t, n) : (o = !t.$stable, Xo(t, i)), r = t;
  } else t && (Yo(e, t), r = { default: 1 });
  if (o)
    for (const l in i)
      !li(l) && r[l] == null && delete i[l];
}, Ce = ia;
function ea(e) {
  return ta(e);
}
function ta(e, t) {
  const n = ts();
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
  } = e, P = (f, m, v, T = null, x = null, b = null, C = void 0, I = null, E = !!m.dynamicChildren) => {
    if (f === m)
      return;
    f && !rn(f, m) && (T = de(f), K(f, x, b, !0), f = null), m.patchFlag === -2 && (E = !1, m.dynamicChildren = null);
    const { type: y, ref: D, shapeFlag: A } = m;
    switch (y) {
      case rs:
        V(f, m, v, T);
        break;
      case mt:
        R(f, m, v, T);
        break;
      case _s:
        f == null && k(m, v, T, C);
        break;
      case Q:
        Ge(
          f,
          m,
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
          m,
          v,
          T,
          x,
          b,
          C,
          I,
          E
        ) : A & 6 ? Dt(
          f,
          m,
          v,
          T,
          x,
          b,
          C,
          I,
          E
        ) : (A & 64 || A & 128) && y.process(
          f,
          m,
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
    D != null && x ? gn(D, f && f.ref, b, m || f, !m) : D == null && f && f.ref != null && gn(f.ref, null, b, f, !0);
  }, V = (f, m, v, T) => {
    if (f == null)
      s(
        m.el = l(m.children),
        v,
        T
      );
    else {
      const x = m.el = f.el;
      m.children !== f.children && d(x, m.children);
    }
  }, R = (f, m, v, T) => {
    f == null ? s(
      m.el = a(m.children || ""),
      v,
      T
    ) : m.el = f.el;
  }, k = (f, m, v, T) => {
    [f.el, f.anchor] = B(
      f.children,
      m,
      v,
      T,
      f.el,
      f.anchor
    );
  }, Y = ({ el: f, anchor: m }, v, T) => {
    let x;
    for (; f && f !== m; )
      x = w(f), s(f, v, T), f = x;
    s(m, v, T);
  }, U = ({ el: f, anchor: m }) => {
    let v;
    for (; f && f !== m; )
      v = w(f), i(f), f = v;
    i(m);
  }, ue = (f, m, v, T, x, b, C, I, E) => {
    if (m.type === "svg" ? C = "svg" : m.type === "math" && (C = "mathml"), f == null)
      ye(
        m,
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
          m,
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
  }, ye = (f, m, v, T, x, b, C, I) => {
    let E, y;
    const { props: D, shapeFlag: A, transition: j, dirs: H } = f;
    if (E = f.el = r(
      f.type,
      b,
      D && D.is,
      D
    ), A & 8 ? p(E, f.children) : A & 16 && Oe(
      f.children,
      E,
      null,
      T,
      x,
      vs(f, b),
      C,
      I
    ), H && Mt(f, null, T, "created"), me(E, f, f.scopeId, C, T), D) {
      for (const ne in D)
        ne !== "value" && !fn(ne) && o(E, ne, null, D[ne], b, T);
      "value" in D && o(E, "value", null, D.value, b), (y = D.onVnodeBeforeMount) && ze(y, T, f);
    }
    H && Mt(f, null, T, "beforeMount");
    const Z = na(x, j);
    Z && j.beforeEnter(E), s(E, m, v), ((y = D && D.onVnodeMounted) || Z || H) && Ce(() => {
      y && ze(y, T, f), Z && j.enter(E), H && Mt(f, null, T, "mounted");
    }, x);
  }, me = (f, m, v, T, x) => {
    if (v && S(f, v), T)
      for (let b = 0; b < T.length; b++)
        S(f, T[b]);
    if (x) {
      let b = x.subTree;
      if (m === b || tr(b.type) && (b.ssContent === m || b.ssFallback === m)) {
        const C = x.vnode;
        me(
          f,
          C,
          C.scopeId,
          C.slotScopeIds,
          x.parent
        );
      }
    }
  }, Oe = (f, m, v, T, x, b, C, I, E = 0) => {
    for (let y = E; y < f.length; y++) {
      const D = f[y] = I ? ct(f[y]) : Ye(f[y]);
      P(
        null,
        D,
        m,
        v,
        T,
        x,
        b,
        C,
        I
      );
    }
  }, $t = (f, m, v, T, x, b, C) => {
    const I = m.el = f.el;
    let { patchFlag: E, dynamicChildren: y, dirs: D } = m;
    E |= f.patchFlag & 16;
    const A = f.props || ae, j = m.props || ae;
    let H;
    if (v && At(v, !1), (H = j.onVnodeBeforeUpdate) && ze(H, v, m, f), D && Mt(m, f, v, "beforeUpdate"), v && At(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!f.dynamicChildren || f.dynamicChildren.length !== y.length) && (E = 0, C = !1, y = null), (A.innerHTML && j.innerHTML == null || A.textContent && j.textContent == null) && p(I, ""), y ? gt(
      f.dynamicChildren,
      y,
      I,
      v,
      T,
      vs(m, x),
      b
    ) : C || He(
      f,
      m,
      I,
      null,
      v,
      T,
      vs(m, x),
      b,
      !1
    ), E > 0) {
      if (E & 16)
        tt(I, A, j, v, x);
      else if (E & 2 && A.class !== j.class && o(I, "class", null, j.class, x), E & 4 && o(I, "style", A.style, j.style, x), E & 8) {
        const Z = m.dynamicProps;
        for (let ne = 0; ne < Z.length; ne++) {
          const ee = Z[ne], _ = A[ee], c = j[ee];
          (c !== _ || ee === "value") && o(I, ee, _, c, x, v);
        }
      }
      E & 1 && f.children !== m.children && p(I, m.children);
    } else !C && y == null && tt(I, A, j, v, x);
    ((H = j.onVnodeUpdated) || D) && Ce(() => {
      H && ze(H, v, m, f), D && Mt(m, f, v, "updated");
    }, T);
  }, gt = (f, m, v, T, x, b, C) => {
    for (let I = 0; I < m.length; I++) {
      const E = f[I], y = m[I], D = (
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
        C,
        !0
      );
    }
  }, tt = (f, m, v, T, x) => {
    if (m !== v) {
      if (m !== ae)
        for (const b in m)
          !fn(b) && !(b in v) && o(
            f,
            b,
            m[b],
            null,
            x,
            T
          );
      for (const b in v) {
        if (fn(b)) continue;
        const C = v[b], I = m[b];
        C !== I && b !== "value" && o(f, b, I, C, x, T);
      }
      "value" in v && o(f, "value", m.value, v.value, x);
    }
  }, Ge = (f, m, v, T, x, b, C, I, E) => {
    const y = m.el = f ? f.el : l(""), D = m.anchor = f ? f.anchor : l("");
    let { patchFlag: A, dynamicChildren: j, slotScopeIds: H } = m;
    H && (I = I ? I.concat(H) : H), f == null ? (s(y, v, T), s(D, v, T), Oe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
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
    (m.key != null || x && m === x.subTree) && Qo(
      f,
      m,
      !0
      /* shallow */
    )) : He(
      f,
      m,
      v,
      D,
      x,
      b,
      C,
      I,
      E
    );
  }, Dt = (f, m, v, T, x, b, C, I, E) => {
    m.slotScopeIds = I, f == null ? m.shapeFlag & 512 ? x.ctx.activate(
      m,
      v,
      T,
      C,
      E
    ) : It(
      m,
      v,
      T,
      x,
      b,
      C,
      E
    ) : sn(f, m, E);
  }, It = (f, m, v, T, x, b, C) => {
    const I = f.component = fa(
      f,
      T,
      x
    );
    if (Uo(f) && (I.ctx.renderer = Ae), pa(I, !1, C), I.asyncDep) {
      if (x && x.registerDep(I, Ct, C), !f.el) {
        const E = I.subTree = dt(mt);
        R(null, E, m, v), f.placeholder = E.el;
      }
    } else
      Ct(
        I,
        f,
        m,
        v,
        x,
        b,
        C
      );
  }, sn = (f, m, v) => {
    const T = m.component = f.component;
    if (zl(f, m, v))
      if (T.asyncDep && !T.asyncResolved) {
        nt(T, m, v);
        return;
      } else
        T.next = m, T.update();
    else
      m.el = f.el, T.vnode = m;
  }, Ct = (f, m, v, T, x, b, C) => {
    const I = () => {
      if (f.isMounted) {
        let { next: A, bu: j, u: H, parent: Z, vnode: ne } = f;
        {
          const J = qo(f);
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
        At(f, !1), A ? (A.el = ne.el, nt(f, A, C)) : A = ne, j && On(j), (_ = A.props && A.props.onVnodeBeforeUpdate) && ze(_, Z, A, ne), At(f, !0);
        const c = Si(f), g = f.subTree;
        f.subTree = c, P(
          g,
          c,
          // parent may have changed if it's in a teleport
          h(g.el),
          // anchor may have changed if it's in a fragment
          de(g),
          f,
          x,
          b
        ), A.el = c.el, ee === null && Wl(f, c.el), H && Ce(H, x), (_ = A.props && A.props.onVnodeUpdated) && Ce(
          () => ze(_, Z, A, ne),
          x
        );
      } else {
        let A;
        const { el: j, props: H } = m, { bm: Z, m: ne, parent: ee, root: _, type: c } = f, g = hn(m);
        At(f, !1), Z && On(Z), !g && (A = H && H.onVnodeBeforeMount) && ze(A, ee, m), At(f, !0);
        {
          _.ce && _.ce._hasShadowRoot() && _.ce._injectChildStyle(
            c,
            f.parent ? f.parent.type : void 0
          );
          const J = f.subTree = Si(f);
          P(
            null,
            J,
            v,
            T,
            f,
            x,
            b
          ), m.el = J.el;
        }
        if (ne && Ce(ne, x), !g && (A = H && H.onVnodeMounted)) {
          const J = m;
          Ce(
            () => ze(A, ee, J),
            x
          );
        }
        (m.shapeFlag & 256 || ee && hn(ee.vnode) && ee.vnode.shapeFlag & 256) && f.a && Ce(f.a, x), f.isMounted = !0, m = v = T = null;
      }
    };
    f.scope.on();
    const E = f.effect = new bo(I);
    f.scope.off();
    const y = f.update = E.run.bind(E), D = f.job = E.runIfDirty.bind(E);
    D.i = f, D.id = f.uid, E.scheduler = () => oi(D), At(f, !0), y();
  }, nt = (f, m, v) => {
    m.component = f;
    const T = f.vnode.props;
    f.vnode = m, f.next = null, Xl(f, m.props, T, v), ql(f, m.children, v), Tt(), yi(f), St();
  }, He = (f, m, v, T, x, b, C, I, E = !1) => {
    const y = f && f.children, D = f ? f.shapeFlag : 0, A = m.children, { patchFlag: j, shapeFlag: H } = m;
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
    H & 8 ? (D & 16 && fe(y, x, b), A !== y && p(v, A)) : D & 16 ? H & 16 ? $(
      y,
      A,
      v,
      T,
      x,
      b,
      C,
      I,
      E
    ) : fe(y, x, b, !0) : (D & 8 && p(v, ""), H & 16 && Oe(
      A,
      v,
      T,
      x,
      b,
      C,
      I,
      E
    ));
  }, M = (f, m, v, T, x, b, C, I, E) => {
    f = f || Ft, m = m || Ft;
    const y = f.length, D = m.length, A = Math.min(y, D);
    let j;
    for (j = 0; j < A; j++) {
      const H = m[j] = E ? ct(m[j]) : Ye(m[j]);
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
      m,
      v,
      T,
      x,
      b,
      C,
      I,
      E,
      A
    );
  }, $ = (f, m, v, T, x, b, C, I, E) => {
    let y = 0;
    const D = m.length;
    let A = f.length - 1, j = D - 1;
    for (; y <= A && y <= j; ) {
      const H = f[y], Z = m[y] = E ? ct(m[y]) : Ye(m[y]);
      if (rn(H, Z))
        P(
          H,
          Z,
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
      const H = f[A], Z = m[j] = E ? ct(m[j]) : Ye(m[j]);
      if (rn(H, Z))
        P(
          H,
          Z,
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
        const H = j + 1, Z = H < D ? m[H].el : T;
        for (; y <= j; )
          P(
            null,
            m[y] = E ? ct(m[y]) : Ye(m[y]),
            v,
            Z,
            x,
            b,
            C,
            I,
            E
          ), y++;
      }
    } else if (y > j)
      for (; y <= A; )
        K(f[y], x, b, !0), y++;
    else {
      const H = y, Z = y, ne = /* @__PURE__ */ new Map();
      for (y = Z; y <= j; y++) {
        const Pe = m[y] = E ? ct(m[y]) : Ye(m[y]);
        Pe.key != null && ne.set(Pe.key, y);
      }
      let ee, _ = 0;
      const c = j - Z + 1;
      let g = !1, J = 0;
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
          for (ee = Z; ee <= j; ee++)
            if (N[ee - Z] === 0 && rn(Pe, m[ee])) {
              Ke = ee;
              break;
            }
        Ke === void 0 ? K(Pe, x, b, !0) : (N[Ke - Z] = y + 1, Ke >= J ? J = Ke : g = !0, P(
          Pe,
          m[Ke],
          v,
          null,
          x,
          b,
          C,
          I,
          E
        ), _++);
      }
      const pi = g ? sa(N) : Ft;
      for (ee = pi.length - 1, y = c - 1; y >= 0; y--) {
        const Pe = Z + y, Ke = m[Pe], mi = m[Pe + 1], gi = Pe + 1 < D ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          mi.el || er(mi)
        ) : T;
        N[y] === 0 ? P(
          null,
          Ke,
          v,
          gi,
          x,
          b,
          C,
          I,
          E
        ) : g && (ee < 0 || y !== pi[ee] ? L(Ke, v, gi, 2) : ee--);
      }
    }
  }, L = (f, m, v, T, x = null) => {
    const { el: b, type: C, transition: I, children: E, shapeFlag: y } = f;
    if (y & 6) {
      L(f.component.subTree, m, v, T);
      return;
    }
    if (y & 128) {
      f.suspense.move(m, v, T);
      return;
    }
    if (y & 64) {
      C.move(f, m, v, Ae);
      return;
    }
    if (C === Q) {
      s(b, m, v);
      for (let A = 0; A < E.length; A++)
        L(E[A], m, v, T);
      s(f.anchor, m, v);
      return;
    }
    if (C === _s) {
      Y(f, m, v);
      return;
    }
    if (T !== 2 && y & 1 && I)
      if (T === 0)
        I.persisted && !b[gs] ? s(b, m, v) : (I.beforeEnter(b), s(b, m, v), Ce(() => I.enter(b), x));
      else {
        const { leave: A, delayLeave: j, afterLeave: H } = I, Z = () => {
          f.ctx.isUnmounted ? i(b) : s(b, m, v);
        }, ne = () => {
          const ee = b._isLeaving || !!b[gs];
          b._isLeaving && b[gs](
            !0
            /* cancelled */
          ), I.persisted && !ee ? Z() : A(b, () => {
            Z(), H && H();
          });
        };
        j ? j(b, Z, ne) : ne();
      }
    else
      s(b, m, v);
  }, K = (f, m, v, T = !1, x = !1) => {
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
      memo: Z
    } = f;
    if (A === -2 && (x = !1), I != null && (Tt(), gn(I, null, v, f, !0), St()), H != null && (m.renderCache[H] = void 0), D & 256) {
      m.ctx.deactivate(f);
      return;
    }
    const ne = D & 1 && j, ee = !hn(f);
    let _;
    if (ee && (_ = C && C.onVnodeBeforeUnmount) && ze(_, m, f), D & 6)
      be(f.component, v, T);
    else {
      if (D & 128) {
        f.suspense.unmount(v, T);
        return;
      }
      ne && Mt(f, null, m, "beforeUnmount"), D & 64 ? f.type.remove(
        f,
        m,
        v,
        Ae,
        T
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Q || A > 0 && A & 64) ? fe(
        y,
        m,
        v,
        !1,
        !0
      ) : (b === Q && A & 384 || !x && D & 16) && fe(E, m, v), T && q(f);
    }
    const c = Z != null && H == null;
    (ee && (_ = C && C.onVnodeUnmounted) || ne || c) && Ce(() => {
      _ && ze(_, m, f), ne && Mt(f, null, m, "unmounted"), c && (f.el = null);
    }, v);
  }, q = (f) => {
    const { type: m, el: v, anchor: T, transition: x } = f;
    if (m === Q) {
      Ve(v, T);
      return;
    }
    if (m === _s) {
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
  }, Ve = (f, m) => {
    let v;
    for (; f !== m; )
      v = w(f), i(f), f = v;
    i(m);
  }, be = (f, m, v) => {
    const { bum: T, scope: x, job: b, subTree: C, um: I, m: E, a: y } = f;
    Ii(E), Ii(y), T && On(T), x.stop(), b && (b.flags |= 8, K(C, f, m, v)), I && Ce(I, m), Ce(() => {
      f.isUnmounted = !0;
    }, m);
  }, fe = (f, m, v, T = !1, x = !1, b = 0) => {
    for (let C = b; C < f.length; C++)
      K(f[C], m, v, T, x);
  }, de = (f) => {
    if (f.shapeFlag & 6)
      return de(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const m = w(f.anchor || f.el), v = m && m[Pl];
    return v ? w(v) : m;
  };
  let $e = !1;
  const we = (f, m, v) => {
    let T;
    f == null ? m._vnode && (K(m._vnode, null, null, !0), T = m._vnode.component) : P(
      m._vnode || null,
      f,
      m,
      null,
      null,
      null,
      v
    ), m._vnode = f, $e || ($e = !0, yi(T), Go(), $e = !1);
  }, Ae = {
    p: P,
    um: K,
    m: L,
    r: q,
    mt: It,
    mc: Oe,
    pc: He,
    pbc: gt,
    n: de,
    o: e
  };
  return {
    render: we,
    hydrate: void 0,
    createApp: jl(we)
  };
}
function vs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function At({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function na(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Qo(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (X(s) && X(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = ct(i[o]), l.el = r.el), !n && l.patchFlag !== -2 && Qo(r, l)), l.type === rs && (l.patchFlag === -1 && (l = i[o] = ct(l)), l.el = r.el), l.type === mt && !l.el && (l.el = r.el);
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
function qo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : qo(t);
}
function Ii(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function er(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? er(t.subTree) : null;
}
const tr = (e) => e.__isSuspense;
function ia(e, t) {
  t && t.pendingBranch ? X(e) ? t.effects.push(...e) : t.effects.push(e) : Sl(e);
}
const Q = /* @__PURE__ */ Symbol.for("v-fgt"), rs = /* @__PURE__ */ Symbol.for("v-txt"), mt = /* @__PURE__ */ Symbol.for("v-cmt"), _s = /* @__PURE__ */ Symbol.for("v-stc"), kt = [];
let Re = null;
function O(e = !1) {
  kt.push(Re = e ? null : []);
}
function nr() {
  kt.pop(), Re = kt[kt.length - 1] || null;
}
let Tn = 1;
function Ci(e, t = !1) {
  Tn += e, e < 0 && Re && t && (Re.hasOnce = !0);
}
function sr(e) {
  return e.dynamicChildren = Tn > 0 ? Re || Ft : null, nr(), Tn > 0 && Re && Re.push(e), e;
}
function G(e, t, n, s, i, o) {
  return sr(
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
  return sr(
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
function ir(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function rn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const or = ({ key: e }) => e ?? null, Gn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? _e(e) || /* @__PURE__ */ Ie(e) || se(e) ? { i: Le, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, i = null, o = e === Q ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && or(t),
    ref: t && Gn(t),
    scopeId: Do,
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
    ctx: Le
  };
  return l ? (Kn(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= _e(n) ? 8 : 16), Tn > 0 && // avoid a block node from tracking itself
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
  if ((!e || e === Gl) && (e = mt), ir(e)) {
    const l = Zt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Kn(l, n), Tn > 0 && !o && Re && (l.shapeFlag & 6 ? Re[Re.indexOf(e)] = l : Re.push(l)), l.patchFlag = -2, l;
  }
  if (va(e) && (e = e.__vccOpts), t) {
    t = la(t);
    let { class: l, style: a } = t;
    l && !_e(l) && (t.class = at(l)), ce(a) && (/* @__PURE__ */ ii(a) && !X(a) && (a = Be({}, a)), t.style = Ys(a));
  }
  const r = _e(e) ? 1 : tr(e) ? 128 : is(e) ? 64 : ce(e) ? 4 : se(e) ? 2 : 0;
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
  return e ? /* @__PURE__ */ ii(e) || Wo(e) ? Be({}, e) : e : null;
}
function Zt(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: r, children: l, transition: a } = e, d = t ? aa(i || {}, t) : i, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && or(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? X(o) ? o.concat(Gn(t)) : [o, Gn(t)] : Gn(t)
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
  return a && s && ri(
    p,
    a.clone(p)
  ), p;
}
function rt(e = " ", t = 0) {
  return dt(rs, null, e, t);
}
function De(e = "", t = !1) {
  return t ? (O(), oa(mt, null, e)) : dt(mt, null, e);
}
function Ye(e) {
  return e == null || typeof e == "boolean" ? dt(mt) : X(e) ? dt(
    Q,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ir(e) ? ct(e) : dt(rs, null, String(e));
}
function ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Zt(e);
}
function Kn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (X(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Kn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Wo(t) ? t._ctx = Le : i === 3 && Le && (Le.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (se(t)) {
    if (s & 65) {
      Kn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Le }, n = 32;
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
        t.style = Ys([t.style, s.style]);
      else if (Zn(i)) {
        const o = t[i], r = s[i];
        r && o !== r && !(X(o) && o.includes(r)) ? t[i] = o ? [].concat(o, r) : r : r == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Qn(i) && (t[i] = r);
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
const ca = Bo();
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
    scope: new Wr(
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
const da = () => wt || Le;
let zn, Sn;
{
  const e = ts(), t = (n, s) => {
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
const ci = (e) => {
  const t = wt;
  return zn(e), e.scope.on(), () => {
    e.scope.off(), zn(t);
  };
}, Mi = () => {
  wt && wt.scope.off(), zn(null);
};
function rr(e) {
  return e.vnode.shapeFlag & 4;
}
let wn = !1;
function pa(e, t = !1, n = !1) {
  t && Sn(t);
  const { props: s, children: i } = e.vnode, o = rr(e);
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
    const i = e.setupContext = s.length > 1 ? ha(e) : null, o = ci(e), r = An(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = uo(r);
    if (St(), o(), (l || e.sp) && !hn(e) && Nl(e), l) {
      if (r.then(Mi, Mi), t)
        return r.then((a) => {
          Sn(!0);
          try {
            Ai(e, a, t);
          } finally {
            Sn(!1);
          }
        }).catch((a) => {
          ss(a, e, 0);
        });
      e.asyncDep = r;
    } else
      Ai(e, r);
  } else
    lr(e);
}
function Ai(e, t, n) {
  se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ce(t) && (e.setupState = No(t)), lr(e);
}
function lr(e, t, n) {
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
function ls(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(No(pl(e.exposed)), {
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
  return se(e) && "__vccOpts" in e;
}
const he = (e, t) => /* @__PURE__ */ _l(e, t, wn), _a = "3.5.41";
let js;
const Pi = typeof window < "u" && window.trustedTypes;
if (Pi)
  try {
    js = /* @__PURE__ */ Pi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ar = js ? (e) => js.createHTML(e) : (e) => e, ba = "http://www.w3.org/2000/svg", ya = "http://www.w3.org/1998/Math/MathML", lt = typeof document < "u" ? document : null, Ri = lt && /* @__PURE__ */ lt.createElement("template"), xa = {
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
      Ri.innerHTML = ar(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ri.content;
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
const Vi = /* @__PURE__ */ Symbol("_vod"), wa = /* @__PURE__ */ Symbol("_vsh"), Ea = /* @__PURE__ */ Symbol(""), Ia = /(?:^|;)\s*display\s*:/;
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
  Vi in e && (e[Vi] = o ? s.display : "", e[wa] && (s.display = "none"));
}
const Ni = /\s*!important$/;
function un(e, t, n) {
  if (X(n))
    n.forEach((s) => un(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Ma(e, t);
    Ni.test(n) ? e.setProperty(
      Ot(s),
      n.replace(Ni, ""),
      "important"
    ) : e[s] = n;
  }
}
const Li = ["Webkit", "Moz", "ms"], bs = {};
function Ma(e, t) {
  const n = bs[t];
  if (n)
    return n;
  let s = je(t);
  if (s !== "filter" && s in e)
    return bs[t] = s;
  s = mo(s);
  for (let i = 0; i < Li.length; i++) {
    const o = Li[i] + s;
    if (o in e)
      return bs[t] = o;
  }
  return t;
}
function Aa(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && _e(s) && n === s;
}
const ki = "http://www.w3.org/1999/xlink";
function Oi(e, t, n, s, i, o = Kr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ki, t.slice(6, t.length)) : e.setAttributeNS(ki, t, n) : n == null || o && !ho(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : qe(n) ? String(n) : n
  );
}
function Gi(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ar(n) : n);
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
    l === "boolean" ? n = ho(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
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
const $i = /* @__PURE__ */ Symbol("_vei");
function Ra(e, t, n, s, i = null) {
  const o = e[$i] || (e[$i] = {}), r = o[t];
  if (s && r)
    r.value = s;
  else {
    const [l, a] = La(t);
    if (s) {
      const d = o[t] = Ga(
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
  return [e[2] === ":" ? e.slice(3) : Ot(e.slice(2)), t];
}
let ys = 0;
const ka = /* @__PURE__ */ Promise.resolve(), Oa = () => ys || (ka.then(() => ys = 0), ys = Date.now());
function Ga(e, t) {
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
  return n.value = e, n.attached = Oa(), n;
}
const Di = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, $a = (e, t, n, s, i, o) => {
  const r = i === "svg";
  t === "class" ? Sa(e, s, r) : t === "style" ? Ca(e, n, s) : Zn(t) ? Qn(t) || Ra(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Da(e, t, s, r)) ? (Gi(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Oi(e, t, s, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ja(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !_e(s))) ? Gi(e, je(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Oi(e, t, s, r));
};
function Da(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Di(t) && se(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Di(t) && _e(n) ? !1 : t in e;
}
function ja(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = je(t);
  return Array.isArray(n) ? n.some((i) => je(i) === s) : Object.keys(n).some((i) => je(i) === s);
}
const Qt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return X(t) ? (n) => On(t, n) : t;
};
function Ua(e) {
  e.target.composing = !0;
}
function ji(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Qe = /* @__PURE__ */ Symbol("_assign"), Nn = /* @__PURE__ */ Symbol("_initialValue");
function xs(e, t, n) {
  return t && (e = e.trim()), n && (e = es(e)), e;
}
const ve = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[Nn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Nn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Qe] = Qt(i);
    const o = s || i.props && i.props.type === "number";
    bt(e, t ? "change" : "input", (r) => {
      r.target.composing || e[Qe](xs(e.value, n, o));
    }), (n || o) && bt(e, "change", () => {
      e.value = xs(e.value, n, o);
    }), t || (bt(e, "compositionstart", Ua), bt(e, "compositionend", ji), bt(e, "change", ji));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", o = e[Nn];
    delete e[Nn], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[Qe](xs(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: o } }, r) {
    if (e[Qe] = Qt(r), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? es(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === a) || (e.value = a);
  }
}, Ui = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Qe] = Qt(n), bt(e, "change", () => {
      const s = e._modelValue, i = En(e), o = e.checked, r = e[Qe];
      if (X(s)) {
        const l = Zs(s, i), a = l !== -1;
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
        r(cr(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Fi,
  beforeUpdate(e, t, n) {
    e[Qe] = Qt(n), Fi(e, t, n);
  }
};
function Fi(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let i;
  if (X(t))
    i = Zs(t, s.props.value) > -1;
  else if (qt(t))
    i = t.has(s.props.value);
  else {
    if (t === n) return;
    i = en(t, cr(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const pe = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, bt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? es(En(o)) : En(o)
      );
      e[Qe](
        e.multiple ? qt(e._modelValue) ? new Set(i) : i : i[0]
      ), e._assigning = !0, ko(() => {
        e._assigning = !1;
      });
    }), e[Qe] = Qt(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Bi(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Qe] = Qt(n);
  },
  updated(e, { value: t }) {
    e._assigning || Bi(e, t);
  }
};
function Bi(e, t) {
  const n = e.multiple, s = X(t);
  if (!(n && !s && !qt(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const r = e.options[i], l = En(r);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? r.selected = t.some((d) => String(d) === String(l)) : r.selected = Zs(t, l) > -1;
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
function cr(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Fa = /* @__PURE__ */ Be({ patchProp: $a }, xa);
let Hi;
function Ba() {
  return Hi || (Hi = ea(Fa));
}
const Ha = ((...e) => {
  const t = Ba().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = za(s);
    if (!i) return;
    const o = t._component;
    !se(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
function za(e) {
  return _e(e) ? document.querySelector(e) : e;
}
const Wa = "tavern_multi_tts_cache", Ne = "audio_cache", Ja = 1, Ki = 100, zi = 50 * 1024 * 1024;
function Wi(e) {
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
        const p = d.result;
        p.objectStoreNames.contains(Ne) || p.createObjectStore(Ne, { keyPath: "key" });
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
        const d = o.transaction(Ne, "readonly").objectStore(Ne).get(i);
        d.onsuccess = () => r(d.result), d.onerror = () => l(d.error ?? Error("读取缓存失败"));
      });
    },
    async put(i) {
      const o = await s();
      await new Promise((r, l) => {
        const a = o.transaction(Ne, "readwrite");
        a.objectStore(Ne).put(i), a.oncomplete = () => r(), a.onerror = () => l(a.error ?? Error("写入缓存失败"));
      });
    },
    async delete(i) {
      const o = await s();
      await new Promise((r, l) => {
        const a = o.transaction(Ne, "readwrite");
        a.objectStore(Ne).delete(i), a.oncomplete = () => r(), a.onerror = () => l(a.error ?? Error("删除缓存失败"));
      });
    },
    async clear() {
      const i = await s();
      await new Promise((o, r) => {
        const l = i.transaction(Ne, "readwrite");
        l.objectStore(Ne).clear(), l.oncomplete = () => o(), l.onerror = () => r(l.error ?? Error("清空缓存失败"));
      });
    },
    async getAll() {
      const i = await s();
      return await new Promise((o, r) => {
        const a = i.transaction(Ne, "readonly").objectStore(Ne).openCursor(), d = [];
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
async function ec(e) {
  const t = await e.getAll();
  let n = t.reduce((o, r) => o + (r.blob?.size ?? 0), 0);
  if (t.length <= Ki && n <= zi)
    return;
  const s = [...t].sort((o, r) => o.created_at - r.created_at);
  let i = t.length;
  for (const o of s) {
    if (i <= Ki && n <= zi)
      break;
    await e.delete(o.key), i -= 1, n -= o.blob?.size ?? 0;
  }
}
function tc(e) {
  const t = e?.backend === "memory" ? Za() : qa(
    e?.indexedDB ?? indexedDB,
    e?.dbName ?? Wa
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
const as = tc({
  backend: typeof indexedDB > "u" ? "memory" : "indexeddb"
});
function nc(e) {
  return as.get(e);
}
function sc(e, t) {
  return as.set(e, t);
}
function ur() {
  return as.clear();
}
function ic() {
  return as.stats();
}
let _t = null, $n = null;
function Dn() {
  _t && (_t.pause(), $n?.());
}
function fr(e, t, n, s, i) {
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
function dr(e) {
  return [...e].map((n) => n.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(n) ? "_" : n).join("").trim() || "audio.mp3";
}
function oc(e, t, n = "mp3") {
  return dr(`tavern_multi_tts_${e}_${t}.${n}`);
}
function rc(e, t) {
  const n = dr(t), s = URL.createObjectURL(e), i = URL.revokeObjectURL.bind(URL), o = document.createElement("a");
  o.href = s, o.download = n, document.body.appendChild(o), o.click(), o.remove(), window.setTimeout(() => i(s), 0);
}
const lc = "Tavern Multi-TTS", Ts = "tavern_multi_tts", ac = "0.1.0", Ss = "tavern-multi-tts-root", Se = "[Tavern Multi-TTS]", Wn = ["ZH", "EN", "JA", "AR", "ES"], pr = 2, mr = [
  "speech-02-hd",
  "speech-02-turbo",
  "speech-2.8-hd",
  "speech-2.8-turbo",
  "speech-2.6-hd",
  "speech-2.6-turbo"
], Us = [
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
  schemaVersion: pr,
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
  injectTemplate: Us
};
function Gt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function ie(e, t) {
  return typeof e == "string" ? e : t;
}
function ws(e, t) {
  return typeof e == "boolean" ? e : t;
}
function We(e, t, n, s, i = !1) {
  const o = typeof e == "number" ? e : Number(e);
  if (!Number.isFinite(o))
    return s;
  const r = i ? Math.round(o) : o;
  return Math.min(n, Math.max(t, r));
}
function cc(e) {
  return e === "minimax" || e === "local_gsvi" || e === "index_tts" ? e : "minimax";
}
function gr(e) {
  return Wn.includes(String(e)) ? e : Et.indexTtsLanguage;
}
function uc(e) {
  return e === "beijing" ? "beijing" : "international";
}
function fc(e) {
  return mr.includes(String(e)) ? e : Et.model;
}
function dc(e) {
  return e === "manual" || e === "auto_first_n" || e === "auto_all" ? e : Et.prefetchMode;
}
function pc(e) {
  return e === "user" || e === "assistant" || e === "system" ? e : Et.injectRole;
}
function mc(e) {
  return e === "zh" || e === "en" || e === "ja" ? e : Et.testLanguage;
}
function gc(e) {
  return e === "wav" ? "wav" : "mp3";
}
function hr(e) {
  return Array.isArray(e) ? e.filter(Gt).map((t) => ({
    characterName: ie(t.characterName, "").trim(),
    minimaxVoiceId: ie(t.minimaxVoiceId, "").trim()
  })).filter((t) => t.characterName || t.minimaxVoiceId) : [];
}
function hc(e) {
  return Array.isArray(e) ? e.filter(Gt).map((t) => ({
    name: ie(t.name, "").trim(),
    mappings: hr(t.mappings)
  })).filter((t) => t.name) : [];
}
function vr(e) {
  return Array.isArray(e) ? e.filter(Gt).map((t) => ({
    characterName: ie(t.characterName, "").trim(),
    gsviVoiceId: ie(t.gsviVoiceId, "").trim(),
    gsviLanguage: ie(t.gsviLanguage, "").trim(),
    gsviEmotion: ie(t.gsviEmotion, "").trim()
  })).filter((t) => t.characterName || t.gsviVoiceId) : [];
}
function vc(e) {
  return Array.isArray(e) ? e.filter(Gt).map((t) => ({
    name: ie(t.name, "").trim(),
    mappings: vr(t.mappings)
  })).filter((t) => t.name) : [];
}
function _r(e) {
  return Array.isArray(e) ? e.filter(Gt).map((t) => ({
    characterName: ie(t.characterName, "").trim(),
    indexTtsVoiceId: ie(t.indexTtsVoiceId, "").trim(),
    indexTtsLanguage: gr(t.indexTtsLanguage)
  })).filter((t) => t.characterName || t.indexTtsVoiceId) : [];
}
function _c(e) {
  return Array.isArray(e) ? e.filter(Gt).map((t) => ({
    name: ie(t.name, "").trim(),
    mappings: _r(t.mappings)
  })).filter((t) => t.name) : [];
}
function zt(e) {
  const t = Gt(e) ? e : {};
  return {
    schemaVersion: pr,
    enabled: ws(t.enabled, Et.enabled),
    ttsEngine: cc(t.ttsEngine),
    apiKey: ie(t.apiKey, ""),
    groupId: ie(t.groupId, ""),
    voiceId: ie(t.voiceId, ""),
    voiceCatalogSelectedId: ie(t.voiceCatalogSelectedId, ""),
    minimaxRegion: uc(t.minimaxRegion),
    testLanguage: mc(t.testLanguage),
    model: fc(t.model),
    speed: We(t.speed, 0.5, 2, 1),
    vol: We(t.vol, 0, 10, 1),
    requestTimeoutMs: We(t.requestTimeoutMs, 1e3, 3e4, 15e3, !0),
    maxConcurrency: We(t.maxConcurrency, 1, 10, 3, !0),
    prefetchMode: dc(t.prefetchMode),
    prefetchFirstCount: We(t.prefetchFirstCount, 1, 10, 2, !0),
    localGsviBaseUrl: ie(t.localGsviBaseUrl, ""),
    localGsviAuthToken: ie(t.localGsviAuthToken, ""),
    localGsviModel: ie(t.localGsviModel, ""),
    localGsviFormat: gc(t.localGsviFormat),
    localGsviUseReferenceAudio: ws(t.localGsviUseReferenceAudio, !1),
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
    characterMappings: hr(t.characterMappings),
    characterMappingPresets: hc(t.characterMappingPresets),
    gsviCharacterMappings: vr(t.gsviCharacterMappings),
    gsviCharacterMappingPresets: vc(t.gsviCharacterMappingPresets),
    indexTtsBaseUrl: ie(t.indexTtsBaseUrl, Et.indexTtsBaseUrl),
    indexTtsVoiceId: ie(t.indexTtsVoiceId, ""),
    indexTtsLanguage: gr(t.indexTtsLanguage),
    indexTtsCharacterMappings: _r(t.indexTtsCharacterMappings),
    indexTtsCharacterMappingPresets: _c(t.indexTtsCharacterMappingPresets),
    injectEnabled: ws(t.injectEnabled, !0),
    injectDepth: We(t.injectDepth, 0, 50, 1, !0),
    injectRole: pc(t.injectRole),
    injectTemplate: ie(t.injectTemplate, Us) || Us
  };
}
function Wt(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function bc(e, t) {
  return e.enabled !== t.enabled || e.injectEnabled !== t.injectEnabled || e.injectDepth !== t.injectDepth || e.injectRole !== t.injectRole || e.injectTemplate !== t.injectTemplate || e.ttsEngine !== t.ttsEngine || !Wt(e.characterMappings, t.characterMappings) || !Wt(e.gsviCharacterMappings, t.gsviCharacterMappings) || !Wt(e.indexTtsCharacterMappings, t.indexTtsCharacterMappings);
}
function yc(e, t) {
  return e.enabled !== t.enabled || e.ttsEngine !== t.ttsEngine || !Wt(e.characterMappings, t.characterMappings) || !Wt(e.gsviCharacterMappings, t.gsviCharacterMappings) || !Wt(e.indexTtsCharacterMappings, t.indexTtsCharacterMappings);
}
function xc(e, t) {
  return {
    syncInjection: bc(e, t),
    refreshDecorations: yc(e, t)
  };
}
function Tc(e, t, n = {}) {
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
    const P = document.getElementById(Ss);
    P && P.remove();
    const V = e.findSettingsRoot();
    return V ? (l = document.createElement("div"), l.id = Ss, l.dataset.tavernMultiTts = "settings", V.appendChild(l), t.mount(l, a()), r = e.onPageHide(() => {
      h({ removeSettings: !1 });
    }), s = !0, n.startRuntime?.(), console.info(`${Se} settings panel mounted`), !0) : !1;
  }
  function h(P) {
    n.stopRuntime?.(), n.stopPlayback?.(), o?.(), o = null, i = !1, r?.(), r = null, t.unmount(), (l ?? document.getElementById(Ss))?.remove(), l = null, s = !1, P.removeSettings && e.removeSettings();
  }
  function w() {
    s || i || (d(), !p() && (i = !0, o = e.onAppReady(() => {
      const P = i;
      i = !1;
      const V = o;
      o = null, V?.(), P && (p() || console.error(
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
      e.writeSettings(zt(P));
      const R = xc(V, a());
      R.syncInjection && n.syncInjection?.(), R.refreshDecorations && n.refreshDecorations?.();
    },
    setEnabled: S,
    setInjectEnabled: B,
    isActive() {
      return s;
    }
  };
}
function Sc() {
  return document.querySelector("#extensions_settings2") ?? document.querySelector("#extensions_settings");
}
class F extends Error {
  code;
  status;
  constructor(t, n, s) {
    super(t), this.name = "TtsRequestError", this.code = n, this.status = s;
  }
}
function br(e) {
  return e instanceof F;
}
function wc(e) {
  return new F(`请求超时（${e}ms），请检查网络或增大超时时间`, "timeout");
}
function Ec() {
  return new F("请求已取消", "cancelled");
}
async function xt(e, t, n, s) {
  const i = new AbortController();
  let o = !1, r = !1, l = null;
  const a = () => {
    r || (r = !0, clearTimeout(p), h?.removeEventListener("abort", w));
  }, d = () => o && !h?.aborted ? wc(s) : Ec(), p = setTimeout(() => {
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
function Ic(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function Cc(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const Mc = /api[_-]?key|authorization|token|secret|cookie|password/i;
function Jn(e) {
  if (typeof e == "string")
    return e.length > 80 ? `${e.slice(0, 80)}…(len=${e.length})` : e;
  if (Array.isArray(e))
    return e.map((n) => Jn(n));
  if (!e || typeof e != "object")
    return e;
  const t = {};
  for (const [n, s] of Object.entries(e)) {
    if (Mc.test(n)) {
      t[n] = "[redacted]";
      continue;
    }
    if (n === "text" || n === "input" || n === "referenceText" || n === "reference_text") {
      t[n] = typeof s == "string" ? `[text len=${s.length}]` : "[text]";
      continue;
    }
    t[n] = Jn(s);
  }
  return t;
}
function ui(e, t, n) {
  if (n === void 0) {
    console.info(`${Se} [${e}] ${t}`);
    return;
  }
  console.info(`${Se} [${e}] ${t}`, Jn(n));
}
function Fs(e, t, n) {
  if (n === void 0) {
    console.warn(`${Se} [${e}] ${t}`);
    return;
  }
  console.warn(`${Se} [${e}] ${t}`, Jn(n));
}
const yr = "IndexTTS-2.5", Bs = "indextts", Hs = "1", Ks = "2.5";
function In(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Ac(e) {
  return Wn.includes(String(e));
}
function Pc(e) {
  const t = {
    model: yr,
    input: e.text,
    voice: e.voiceId.trim(),
    response_format: "wav",
    language: e.language
  };
  return e.emotion && Object.keys(e.emotion).length > 0 && (t.emotion = e.emotion), t;
}
function Rc(e) {
  if (!e.baseUrl.trim())
    throw new F("请先填写 IndexTTS 服务地址", "config");
  if (!e.voiceId.trim())
    throw new F("请先选择 IndexTTS 音色预设", "config");
  if (!Ac(e.language))
    throw new F("IndexTTS 语言必须是 ZH、EN、JA、AR 或 ES", "config");
  if (!e.text.trim())
    throw new F("IndexTTS 合成文本为空", "config");
}
function Vc(e) {
  return (e ?? "").split(";")[0]?.trim().toLowerCase() === "audio/wav";
}
function Nc(e, t) {
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
async function Es(e) {
  try {
    const t = await e.text();
    try {
      return Nc(JSON.parse(t), e.status);
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
function Lc(e) {
  return e.service !== Bs ? `IndexTTS 健康检查失败：服务名无效（期望 ${Bs}）` : e.api_version !== Hs ? `IndexTTS 健康检查失败：API 版本不匹配（期望 ${Hs}）` : e.model_version !== Ks ? `IndexTTS 健康检查失败：模型版本不匹配（期望 ${Ks}）` : e.model_loaded !== !0 ? "IndexTTS 服务在线，但模型尚未加载。请先在服务端加载模型后再试。" : e.ok !== !0 ? "IndexTTS 服务报告未就绪" : "IndexTTS 健康检查响应结构无效";
}
function kc(e) {
  return In(e) ? e.ok === !0 && e.service === Bs && e.api_version === Hs && e.model_version === Ks && e.model_loaded === !0 ? { ok: !0, message: "IndexTTS 服务在线，模型已加载（IndexTTS-2.5）" } : { ok: !1, message: Lc(e) } : { ok: !1, message: "IndexTTS 健康检查响应结构无效" };
}
function Oc(e) {
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
function Gc(e) {
  return e instanceof F ? { ok: !1, message: e.message } : {
    ok: !1,
    message: "无法连接 IndexTTS 服务。请确认服务已启动，并检查地址是否正确。"
  };
}
function $c(e) {
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
          throw await Es(i);
        const o = await i.json();
        return kc(o);
      } catch (i) {
        return Gc(i);
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
        throw await Es(i);
      return Oc(await i.json());
    },
    async synthesize(n) {
      if (n.engine !== "index_tts")
        throw new F("IndexTTS 适配器收到了错误的引擎请求", "config");
      Rc(n);
      const s = Pc(n), i = Jt(n.baseUrl.trim(), "/v1/audio/speech");
      ui("index_tts", "synthesize", {
        url: i,
        voiceId: s.voice,
        language: s.language,
        model: s.model,
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
        throw await Es(o);
      const r = o.headers.get("content-type");
      if (!Vc(r))
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
const Dc = ["v2", "v3", "v4", "v2Pro"];
function xr(e) {
  const t = e.trim();
  if (!t)
    return { modelName: "", version: "" };
  const n = t.lastIndexOf("|");
  return n < 0 ? { modelName: t, version: "" } : {
    modelName: t.slice(0, n).trim(),
    version: t.slice(n + 1).trim()
  };
}
function jc(e) {
  const t = e.trim().toLowerCase();
  return t === "v2pro" ? "v2Pro" : t === "v2" || t === "v3" || t === "v4" ? t : e.trim();
}
function Uc(e) {
  const t = e.trim();
  return t ? {
    英文: "英语",
    日文: "日语",
    韩文: "韩语"
  }[t] ?? t : "多语种混合";
}
function Fc(e) {
  const t = xr(e.modelId), n = t.modelName.trim(), s = jc(t.version) || "v2Pro";
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
        text_lang: Uc(e.textLang),
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
function Bc(e) {
  if (!e.baseUrl.trim())
    throw new F("请先填写 Local-GSVI 服务地址", "config");
  if (!e.modelId.trim())
    throw new F("请先填写或选择 Local-GSVI 模型（modelName|version）", "config");
  if (!e.language.trim() || !e.emotion.trim())
    throw new F(
      "GSVI 生成要求映射完整：语种(prompt_lang)/情绪(emotion)不能为空",
      "config"
    );
  if (!xr(e.modelId).modelName)
    throw new F("Local-GSVI 模型格式错误，期望 modelName|version", "config");
  if (!e.text.trim())
    throw new F("Local-GSVI 合成文本为空", "config");
}
function Me(e) {
  return typeof e == "object" && e !== null;
}
function Hc(e) {
  const t = e.replace(/^data:audio\/[a-zA-Z0-9.+-]+;base64,/i, "").trim();
  return t.length >= 16 && /^[A-Za-z0-9+/=\r\n]+$/.test(t);
}
function Tr(e) {
  return e.trim().match(/^data:audio\/[a-zA-Z0-9.+-]+;base64,(.+)$/i)?.[1] ?? e.trim();
}
function Kc(e) {
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
    if (typeof o == "string" && Hc(o))
      return Tr(o);
  return null;
}
function zc(e) {
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
function Wc(e) {
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
function Jc(e) {
  const t = atob(Tr(e)), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function Is(e) {
  const t = e?.trim() ?? "";
  return t ? { Authorization: `Bearer ${t}` } : {};
}
function Xc(e) {
  const t = fetch;
  async function n(s, i, o, r, l) {
    const a = /^https?:\/\//i.test(i) ? i : Jt(s, i);
    let d = !1;
    try {
      d = Ic(s) === new URL(a).origin;
    } catch {
      d = !1;
    }
    const p = await xt(
      t,
      a,
      {
        method: "GET",
        headers: d ? Is(o) : {},
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
      for (const r of Dc) {
        const l = Jt(i, `/models/${encodeURIComponent(r)}`);
        try {
          const a = await xt(
            t,
            l,
            { method: "GET", headers: Is(s.authToken), signal: s.signal },
            s.timeoutMs
          );
          if (!a.ok) {
            Fs("local_gsvi", `GET /models/${r} failed`, {
              status: a.status
            }), a.close();
            continue;
          }
          const d = await a.json(), p = Me(d) && Me(d.models) ? d.models : d;
          if (!Me(p))
            continue;
          Object.entries(p).forEach(([h, w]) => {
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
          Fs("local_gsvi", `GET /models/${r} failed`);
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
      Bc(s);
      const i = Fc(s), o = {
        "Content-Type": "application/json",
        ...Is(s.authToken)
      };
      ui("local_gsvi", "synthesize", {
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
        const a = await r.json(), d = Kc(a);
        if (d)
          return new Blob([Uint8Array.from(Jc(d))], {
            type: s.format === "wav" ? "audio/wav" : "audio/mpeg"
          });
        const p = zc(a);
        if (p)
          return await n(
            s.baseUrl.trim(),
            p,
            s.authToken ?? "",
            s.timeoutMs,
            s.signal
          );
        throw new F(
          `Local-GSVI 未返回可用音频：${Wc(a) || "JSON 响应中未找到音频"}`,
          "missing_audio"
        );
      }
      return await r.blob();
    }
  };
}
const Yc = {
  international: {
    tts: "https://api.minimaxi.com/v1/t2a_v2",
    voice: "https://api.minimaxi.com/v1/get_voice"
  },
  beijing: {
    tts: "https://api-bj.minimaxi.com/v1/t2a_v2",
    voice: "https://api-bj.minimaxi.com/v1/get_voice"
  }
}, Zc = /* @__PURE__ */ new Set([408, 409, 429, 500, 502, 503, 504]), Qc = /* @__PURE__ */ new Set([1e3, 1001, 1002, 1039]), Ji = 2, qc = "tavern_multi_tts_voice_catalog_v1", eu = 1440 * 60 * 1e3;
function Xn(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function zs(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Xi(e) {
  return Yc[zs(e)];
}
function Sr(e, t) {
  return `${qc}:${e}:${t.trim()}`;
}
function tu(e) {
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
function Yi(e) {
  return `Bearer ${Xn(e)}`;
}
function nu(e) {
  const t = e.trim(), n = new Uint8Array(t.length / 2);
  for (let s = 0; s < t.length; s += 2)
    n[s / 2] = Number.parseInt(t.slice(s, s + 2), 16);
  return n;
}
function su(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function iu(e) {
  const t = e.trim();
  return /^[0-9a-fA-F]+$/.test(t) && t.length % 2 === 0 ? nu(t) : su(t);
}
function ou(e, t) {
  const s = `${t ?? ""} ${e}`.toLowerCase(), i = s.includes("japanese") ? "Japanese" : s.includes("english") ? "English" : s.includes("chinese") ? "Chinese" : s.includes("korean") ? "Korean" : s.includes("french") ? "French" : s.includes("german") ? "German" : s.includes("spanish") ? "Spanish" : "Unknown", o = s.includes("female") || s.includes("女") || s.includes("lady") || s.includes("girl") ? "Female" : s.includes("male") || s.includes("男") || s.includes("man") || s.includes("boy") ? "Male" : "Unknown";
  return { language: i, gender: o };
}
function ru(e, t) {
  const n = t.trim();
  if (!n)
    return null;
  try {
    const s = localStorage.getItem(Sr(e, n));
    if (!s)
      return null;
    const i = JSON.parse(s);
    return !i?.expires_at || Date.now() > i.expires_at ? null : i.items ?? null;
  } catch {
    return null;
  }
}
function lu(e, t, n) {
  const s = t.trim();
  s && localStorage.setItem(
    Sr(e, s),
    JSON.stringify({
      expires_at: Date.now() + eu,
      items: n
    })
  );
}
function au(e) {
  const t = Xn(e.apiKey), n = e.groupId.trim(), s = e.voiceId.trim();
  if (!t || !n || !s)
    throw new F("MiniMax 引擎缺少必要配置：API Key / Group ID / Voice ID", "config");
  if (!e.text.trim())
    throw new F("MiniMax 合成文本为空", "config");
}
function cu(e) {
  return typeof e == "object" && e !== null;
}
function uu(e, t) {
  return Zc.has(e) || Qc.has(t);
}
function fu(e) {
  const t = fetch;
  return {
    id: "minimax",
    async checkHealth(n) {
      if (n.engine !== "minimax")
        throw new F("MiniMax 适配器收到了错误的引擎请求", "config");
      if (!Xn(n.apiKey))
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
      const s = Xn(n.apiKey);
      if (!s)
        throw new F("请先填写 API Key", "config");
      const i = zs(n.region);
      if (!n.forceRefresh) {
        const h = ru(i, n.groupId);
        if (h && h.length > 0)
          return h;
      }
      const o = Xi(i).voice, r = await xt(
        t,
        o,
        {
          method: "POST",
          headers: {
            Authorization: Yi(s),
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
          const B = ou(S.voice_id, S.voice_name);
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
      return p("system", a.system_voice ?? []), p("voice_cloning", a.voice_cloning ?? []), p("voice_generation", a.voice_generation ?? []), lu(i, n.groupId, d), d;
    },
    async synthesize(n) {
      if (n.engine !== "minimax")
        throw new F("MiniMax 适配器收到了错误的引擎请求", "config");
      au(n);
      const s = tu(n), i = Xi(n.region).tts, o = {
        Authorization: Yi(n.apiKey),
        "Content-Type": "application/json"
      };
      ui("minimax", "synthesize", {
        model: s.model,
        voiceId: s.voice_setting.voice_id,
        region: zs(n.region),
        groupId: n.groupId.trim(),
        text: n.text
      });
      let r = null;
      for (let l = 0; l <= Ji; l += 1) {
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
        if (!cu(d))
          throw new F("MiniMax 响应结构无效", "invalid_json");
        const p = d;
        if (!a.ok || (p.base_resp?.status_code ?? 0) !== 0) {
          const S = p.base_resp?.status_code ?? a.status, B = p.base_resp?.status_msg ?? a.statusText ?? "unknown error";
          if (r = `MiniMax 请求失败：code=${S}, msg=${B}`, uu(a.status, S) && l < Ji) {
            Fs("minimax", "retryable synthesize failure", {
              status: a.status,
              attempt: l
            }), await Cc(250 * (l + 1));
            continue;
          }
          throw new F(r, "http", a.status);
        }
        const h = p.data?.audio ?? p.data?.audio_file ?? p.audio_file;
        if (!h)
          throw new F("MiniMax 响应中未找到音频字段", "missing_audio");
        const w = iu(h);
        return new Blob([Uint8Array.from(w)], { type: "audio/mpeg" });
      }
      throw new F(r ?? "MiniMax 请求失败：未知错误", "http");
    }
  };
}
function jn(e) {
  if (e === "minimax")
    return fu();
  if (e === "local_gsvi")
    return Xc();
  if (e === "index_tts")
    return $c();
  throw new F(`未知 TTS 引擎：${String(e)}`, "config");
}
const Ws = "tavern_multi_tts_say_rule", du = 1, pu = {
  system: 0,
  user: 1,
  assistant: 2
};
function wr(e) {
  const t = e.ttsEngine === "index_tts" ? e.indexTtsCharacterMappings : e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.characterMappings, n = [];
  for (const s of t) {
    const i = s.characterName.trim();
    i && !n.includes(i) && n.push(i);
  }
  return n;
}
function mu(e) {
  const t = wr(e);
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
const gu = [
  "<VOICE_RULE>",
  '请仅对角色：${mapped_characters} 的“直接台词”添加 <say char="角色名">...</say> 标签。',
  "角色映射名单：${mapped_characters}",
  "若说话者在映射名单中，char 必须与映射角色名完全一致。",
  "若说话者不在映射名单中，也必须填写真实说话角色名，char 不可省略。",
  '<say char="角色名">不要填<user>。',
  "不要给旁白、动作描写、心理活动、双语的中文翻译内容加 <say> 标签。",
  "不要输出空的 <say></say>，不要嵌套 <say> 标签。",
  "禁止括号语气词（如 (laughs)、(sighs)、(softly)）。",
  '日常、闲聊、平静叙述省略 emo，只写：<say char="角色名">台词</say>',
  '仅当本句有明显情绪变化时才加 emo="名称:数值"。每句独立判断；不要沿用上一句，也不要给日常句补“平静”。',
  "合法名称仅限：喜、怒、哀、惧、厌恶、低落、惊喜、平静。",
  "1 至 3 个不同名称；一般只用一种，确有复合情绪最多两至三种。多项用半角逗号分隔。char 与 emo 属性顺序不限。",
  "每个数值必须是大于 0、不超过 1.0 的有限数字。轻微 0.10–0.35，明显 0.35–0.60，0.80 以上只用于重大爆发。",
  "禁止：八位数组、英文模板名、emotion/intensity 属性、零值占位、重复名称、无意义堆叠。",
  "示例:",
  '<say char="角色名">今天要去哪里？</say>',
  '<say char="角色名" emo="怒:0.35">别骗我。</say>',
  '<say char="角色名" emo="哀:0.30,低落:0.15">我不想再等了。</say>',
  "</VOICE_RULE>"
].join(`
`);
function hu(e) {
  return e.ttsEngine === "index_tts" ? gu : e.injectTemplate;
}
function vu(e) {
  const t = wr(e).join("、") || "（未配置角色映射）";
  return `${hu(e).replaceAll("${target_characters}", t).replaceAll("${mapped_characters}", t)}

${mu(e)}`;
}
function Cs(e, t) {
  return !t.enabled || !t.injectEnabled ? (e.deleteExtensionPrompt(Ws), { applied: !1 }) : (e.setExtensionPrompt(
    Ws,
    vu(t),
    du,
    t.injectDepth,
    !1,
    pu[t.injectRole]
  ), { applied: !0, depth: t.injectDepth, role: t.injectRole });
}
function _u(e) {
  e.deleteExtensionPrompt(Ws);
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
], Zi = /<say\b([^>]*)>([\s\S]*?)<\/say>/gi, Ln = /([A-Za-z_]+)\s*=\s*(?:"([^"]*)"|“([^”]*)”)/gi, bu = new Set(Er);
function yu(e) {
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
function xu(e) {
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
    if (!bu.has(l) || l in i) {
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
function Tu(e) {
  return e ? Er.filter((t) => e[t] !== void 0).map((t) => `${t}:${e[t]}`).join(",") : "";
}
function Su(e) {
  const t = new RegExp(Zi.source, Zi.flags), n = [];
  let s, i = 0;
  for (; (s = t.exec(e)) !== null; ) {
    const o = s[2].trim();
    if (!o)
      continue;
    const r = yu(s[1] ?? "");
    if (!r)
      continue;
    const l = r.char?.trim(), a = xu(r.emo);
    n.push({
      index: i,
      text: o,
      ...l ? { char: l } : {},
      ...a ? { emotion: a } : {}
    }), i += 1;
  }
  return n;
}
const wu = /* @__PURE__ */ new Set([
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
]), Ir = /\(([a-z-]+)\)/gi, Eu = /\([a-z-]+\)/gi;
function fi(e) {
  return e.replace(/\s{2,}/g, " ").trim();
}
function Iu(e) {
  return fi(
    e.replace(Ir, (t, n) => {
      const s = String(n).toLowerCase();
      return wu.has(s) ? `(${s})` : "";
    })
  );
}
function Cu(e) {
  return fi(e.replace(Ir, ""));
}
function Mu(e) {
  return fi(e.replace(Eu, ""));
}
function Au(e, t) {
  const n = Iu(e);
  return t === "local_gsvi" || t === "index_tts" ? Mu(n) : n;
}
async function Pu(e, t) {
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
const Cn = "data-tavern-multi-tts-rendered", di = "data-tavern-multi-tts-swipe", cs = "tavern-multi-tts-segment", Yn = "tavern-multi-tts-fallback-list";
function Ru(e, t, n) {
  return `${e}:${t}:${n}`;
}
function Qi(e) {
  const t = e.split(":");
  if (t.length !== 3)
    return null;
  const n = Number(t[0]), s = Number(t[1]), i = Number(t[2]);
  return [n, s, i].every(Number.isFinite) ? { message_id: n, swipe_id: s, index: i } : null;
}
function kn(e) {
  return document.querySelector(`#chat .mes[mesid="${e}"]`);
}
function Vu(e) {
  return e.querySelector(".mes_text");
}
function Cr(e, t) {
  const n = e.getAttribute(Cn) === "true", s = e.querySelector(`.${cs}`) !== null;
  return !n || !s ? !1 : t === void 0 ? !0 : e.getAttribute(di) === String(t);
}
function Rt(e = document) {
  e.querySelectorAll(`.${cs}`).forEach((t) => {
    const n = t.querySelector(".tavern-multi-tts-text")?.textContent ?? "";
    t.replaceWith(document.createTextNode(n));
  }), e.querySelectorAll(`.${Yn}`).forEach((t) => t.remove()), e.querySelectorAll(`[${Cn}]`).forEach((t) => {
    t.removeAttribute(Cn), t.removeAttribute(di);
  });
}
function ot(e, t) {
  e.classList.remove("is-loading", "is-ready", "is-playing", "is-error"), t !== "idle" && e.classList.add(`is-${t}`);
  const n = e.querySelector(".tavern-multi-tts-indicator");
  n && (n.textContent = t === "loading" ? "⏳" : t === "ready" ? "▶" : t === "playing" ? "⏸" : t === "error" ? "⚠" : "▶");
}
function qi(e) {
  return e.replace(/\s+/g, "").trim();
}
function Nu(e, t, n, s) {
  const i = e.splitText(t);
  i.splitText(n), i.replaceWith(s);
}
function Lu(e, t, n, s) {
  const i = [t, n].map((l) => l.trim()).filter(Boolean), o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let r = o.nextNode();
  for (; r; ) {
    const l = r.parentElement;
    if (l && !l.closest(`.${cs}`) && !l.closest(`.${Yn}`) && !l.closest(".mes_buttons")) {
      const a = r.nodeValue ?? "";
      for (const d of i) {
        const p = a.indexOf(d);
        if (p >= 0)
          return Nu(r, p, d.length, s), !0;
        if (qi(a) === qi(d))
          return r.replaceWith(s), !0;
      }
    }
    r = o.nextNode();
  }
  return !1;
}
function ku(e, t, n, s, i, o, r) {
  const l = Ru(e, t, n.index), a = document.createElement("span");
  a.className = cs, a.dataset.tavernMultiTtsKey = l;
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
    R && (S?.stop(), S = fr(
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
function Ou(e, t, n, s, i, o = 0) {
  if (Cr(e, o))
    return 0;
  e.getAttribute(Cn) === "true" && Rt(e);
  const r = Vu(e) ?? e, l = [];
  let a = 0;
  for (const d of n) {
    if (!d.displayText || !d.ttsText)
      continue;
    const p = ku(
      t,
      o,
      d,
      d.displayText,
      d.ttsText,
      s,
      i
    );
    Lu(r, d.text, d.displayText, p) ? a += 1 : l.push(p);
  }
  if (r.querySelectorAll(`.${Yn}`).forEach((d) => d.remove()), l.length > 0) {
    const d = document.createElement("div");
    d.className = Yn, l.forEach((p) => d.append(p, document.createTextNode(" "))), r.append(d), a += l.length;
  }
  return a > 0 && (e.setAttribute(Cn, "true"), e.setAttribute(di, String(o))), a;
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
function eo(e) {
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
function Gu(e, t, n, s) {
  const i = Vr(e, n);
  return e.ttsEngine === "index_tts" ? {
    text: t,
    engine: "index_tts",
    indexTts: {
      origin: Wi(e.indexTtsBaseUrl),
      model: yr,
      voiceId: i.indexTtsVoiceId ?? "",
      language: i.indexTtsLanguage ?? e.indexTtsLanguage,
      format: "wav",
      emotion: Tu(s)
    }
  } : e.ttsEngine === "local_gsvi" ? {
    text: t,
    engine: "local_gsvi",
    localGsvi: {
      origin: Wi(e.localGsviBaseUrl),
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
const to = 15;
function $u(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = [];
  let o = !1, r = !1, l = 0;
  function a() {
    return e.getSettings();
  }
  function d() {
    r || !document.querySelector(".minimax-tts-segment") || (r = !0, e.warn?.("检测到旧酒馆助手 Multi-TTS 仍在装饰消息。请只启用其中一个，避免重复生成。"));
  }
  function p(M) {
    return br(M) && M.code === "cancelled";
  }
  function h(M, $) {
    return n.get(M)?.token === $;
  }
  function w(M) {
    for (const [$, L] of n)
      M(L) && (L.controller.abort(), n.delete($));
  }
  function S() {
    w(() => !0);
  }
  function B(M, $) {
    w(
      (L) => L.message_id === M && ($ === void 0 || L.swipe_id !== $)
    );
  }
  function P(M, $, L) {
    n.get(M)?.controller.abort(), l += 1;
    const q = {
      token: l,
      message_id: $,
      swipe_id: L,
      controller: new AbortController()
    };
    return n.set(M, q), q;
  }
  function V(M, $) {
    h(M, $) && n.delete(M);
  }
  async function R(M, $, L, K, q, Ve) {
    const be = P(M, $, L);
    try {
      const fe = a(), de = Nr(fe, K, q, Ve);
      if (!de)
        return { blob: null };
      de.signal = be.controller.signal;
      const $e = Gu(fe, K, q, Ve), we = await Ya($e);
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
      const m = await jn(de.engine).synthesize(de);
      return m && (await sc(we, m), s.set(we, m)), !h(M, be.token) || be.controller.signal.aborted ? { cancelled: !0 } : { blob: m };
    } catch (fe) {
      return p(fe) || !h(M, be.token) || be.controller.signal.aborted ? { cancelled: !0 } : (console.error(`${Se} synthesize failed`), { blob: null });
    } finally {
      V(M, be.token);
    }
  }
  function k(M, $) {
    if (typeof M.swipe_id == "number" && Number.isFinite(M.swipe_id))
      return M.swipe_id;
    const L = Number($?.getAttribute("swipeid"));
    return Number.isFinite(L) ? L : 0;
  }
  function Y(M, $) {
    for (const [L, K] of t) {
      const q = Qi(L);
      q && q.message_id === M && q.swipe_id !== $ && (K.stop(), t.delete(L));
    }
  }
  function U(M) {
    for (const [$, L] of t) {
      const K = Qi($);
      K && K.message_id === M && (L.stop(), t.delete($));
    }
  }
  function ue(M, $, L) {
    if (typeof M.swipe_id != "number" || !Number.isFinite(M.swipe_id))
      return !0;
    const K = $.getAttribute("swipeid");
    if (K === null || K === "")
      return !0;
    const q = Number(K);
    return Number.isFinite(q) && q === L && q === M.swipe_id;
  }
  function ye(M, $) {
    B(M, $), Y(M, $);
    const L = e.findMessageElement(M) ?? kn(M);
    L && Rt(L);
  }
  function me(M, $ = {}) {
    const L = $.attempt ?? 0, K = a();
    if (!K.enabled)
      return;
    const q = e.getChatMessage(M);
    if (!q || q.is_user || q.is_system)
      return;
    const Ve = typeof q.mes == "string" ? q.mes : "", be = Su(Ve).filter(
      (re) => Rr(K, re.char)
    ), fe = e.findMessageElement(M) ?? kn(M);
    if (be.length === 0) {
      fe && Rt(fe);
      return;
    }
    if (!fe) {
      L < to && window.setTimeout(() => me(M, { ...$, attempt: L + 1 }), 120);
      return;
    }
    const de = k(q, fe);
    if (!ue(q, fe, de)) {
      L < to && window.setTimeout(() => me(M, { ...$, attempt: L + 1 }), 120);
      return;
    }
    if (Cr(fe, de))
      return;
    fe.getAttribute("data-tavern-multi-tts-rendered") === "true" && Rt(fe), Y(M, de), d();
    const $e = be.map((re) => ({
      ...re,
      displayText: Cu(re.text),
      ttsText: Au(re.text, K.ttsEngine)
    })), we = [], Ae = (re) => $.skipPrefetch ? !1 : K.prefetchMode === "auto_all" ? !0 : K.prefetchMode === "auto_first_n" ? re < K.prefetchFirstCount : !1;
    Ou(
      fe,
      M,
      $e,
      {
        ensureAudio: async (re, f, m) => {
          const v = `${M}:${de}:${re.index}`;
          return await R(
            v,
            M,
            de,
            m,
            re.char,
            re.emotion
          );
        },
        downloadAudio(re, f, m) {
          rc(re, oc(f, m));
        }
      },
      t,
      de
    ), $e.forEach((re, f) => {
      Ae(f) && re.ttsText && we.push(async () => {
        const m = `${M}:${de}:${re.index}`;
        try {
          await R(
            m,
            M,
            de,
            re.ttsText,
            re.char,
            re.emotion
          );
        } catch {
        }
      });
    }), we.length > 0 && Pu(we, K.maxConcurrency);
  }
  function Oe(...M) {
    const $ = Number(M[0]);
    Number.isFinite($) && window.setTimeout(() => me($), 0);
  }
  function $t(...M) {
    const $ = Number(M[0]);
    if (!Number.isFinite($))
      return;
    B($);
    const L = e.findMessageElement($) ?? kn($);
    L && Rt(L), U($), window.setTimeout(() => me($), 0);
  }
  function gt(...M) {
    const $ = Number(M[0]);
    if (!Number.isFinite($))
      return;
    const L = e.findMessageElement($) ?? kn($), K = e.getChatMessage($), q = K ? k(K, L) : 0;
    ye($, q), window.setTimeout(() => me($, { skipPrefetch: !0 }), 0);
  }
  function tt(M = {}) {
    document.querySelectorAll("#chat .mes[mesid]").forEach(($) => {
      const L = Number($.getAttribute("mesid"));
      Number.isFinite(L) && me(L, M);
    });
  }
  function Ge(M, $) {
    e.eventSource.on(M, $), i.push(() => e.eventSource.removeListener(M, $));
  }
  function Dt() {
    o || (o = !0, Cs(e, a()), Ge(e.eventNames.messageReceived, Oe), Ge(e.eventNames.messageRendered, Oe), Ge(e.eventNames.messageUpdated, $t), Ge(e.eventNames.messageSwiped, gt), Ge(e.eventNames.moreMessagesLoaded, () => {
      tt({ skipPrefetch: !0 });
    }), Ge(e.eventNames.chatChanged, () => {
      S(), t.forEach((M) => M.stop()), t.clear(), Dn(), Cs(e, a()), tt({ skipPrefetch: !0 });
    }), tt({ skipPrefetch: !0 }), console.info(`${Se} chat runtime started`));
  }
  function It() {
    i.splice(0).forEach((M) => M()), S(), t.forEach((M) => M.stop()), t.clear(), s.clear(), Dn(), _u(e), Rt(document), o = !1, console.info(`${Se} chat runtime stopped`);
  }
  function sn() {
    S(), t.forEach((M) => M.stop()), t.clear(), Dn(), Rt(document);
  }
  function Ct() {
    Cs(e, a());
  }
  function nt() {
    sn(), a().enabled && tt({ skipPrefetch: !0 });
  }
  function He() {
    Ct(), nt();
  }
  return { start: Dt, stop: It, syncFromSettings: He, syncInjection: Ct, refreshDecorations: nt, decorate: me };
}
function yt(e) {
  return typeof e == "object" && e !== null;
}
function Du(e) {
  if (yt(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function ju(e) {
  return !yt(e) || typeof e.getContext != "function" ? null : e;
}
function Uu(e) {
  if (!yt(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!yt(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = Du(e.eventSource), n = yt(e.eventTypes) ? e.eventTypes : yt(e.event_types) ? e.event_types : void 0, s = n ? {
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
  const e = ju(globalThis.SillyTavern);
  if (!e)
    throw new Error(
      "SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行"
    );
  return Uu(e.getContext());
}
function kr() {
  const e = Lr();
  return {
    readRawSettings() {
      return e.extensionSettings[Ts];
    },
    writeSettings(t) {
      e.extensionSettings[Ts] = t, e.saveSettingsDebounced();
    },
    removeSettings() {
      delete e.extensionSettings[Ts], e.saveSettingsDebounced();
    },
    findSettingsRoot: Sc,
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
function Fu(e) {
  return yt(e) ? {
    mes: typeof e.mes == "string" ? e.mes : void 0,
    is_user: typeof e.is_user == "boolean" ? e.is_user : void 0,
    is_system: typeof e.is_system == "boolean" ? e.is_system : void 0,
    swipe_id: typeof e.swipe_id == "number" ? e.swipe_id : void 0
  } : null;
}
function Bu(e) {
  const t = Lr();
  if (!t.eventSource)
    throw new Error("SillyTavern eventSource 不可用，无法监听消息事件");
  const n = t.eventSource;
  return {
    getSettings: e,
    getChatMessage(s) {
      return Array.isArray(t.chat) ? Fu(t.chat[s]) : null;
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
function Hu(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    const s = n.trim();
    s && t.set(s, (t.get(s) ?? 0) + 1);
  }), [...t.entries()].filter(([, n]) => n > 1).map(([n]) => n);
}
function Ms(e) {
  return [...e].sort((t, n) => t.name.localeCompare(n.name));
}
function As(e, t, n, s) {
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
function Ps(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.find((i) => i.name === n);
  return s ? { mappings: [...s.mappings] } : { error: `未找到存档：${n}` };
}
function Rs(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.filter((i) => i.name !== n);
  return s.length === e.length ? { error: `未找到存档：${n}` } : { presets: s, message: `已删除存档：${n}` };
}
const Ku = {
  ja: "おはようございます。これは Tavern Multi-TTS のテスト音声です。",
  zh: "你好，这是 Tavern Multi-TTS 的测试语音。",
  en: "Hello, this is a Tavern Multi-TTS test voice."
}, zu = {
  ja: "こんにちは、これは GSVI の音声参照用サンプルです。",
  zh: "你好，这是一段 GSVI 的语音参考音频。",
  en: "Hello, this is a GSVI reference voice sample."
}, Wu = {
  ja: "こんにちは、これは IndexTTS のテスト音声です。",
  zh: "你好，这是 IndexTTS 的测试语音。",
  en: "Hello, this is an IndexTTS test voice."
}, Ju = [
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
], Xu = [
  "不切",
  "凑四句一切",
  "凑50字一切",
  "按中文句号。切",
  "按英文句号.切",
  "按标点符号切"
];
function Yu(e, t) {
  return e === "local_gsvi" ? zu[t] : e === "index_tts" ? Wu[t] : Ku[t];
}
function Zu() {
  return {
    search: "",
    language: "all",
    gender: "all",
    source: "all"
  };
}
function Vs() {
  return {
    voices: [],
    filter: Zu()
  };
}
function no() {
  return {
    minimax: Vs(),
    local_gsvi: Vs(),
    index_tts: Vs()
  };
}
function Qu(e, t) {
  return t === "minimax" ? e.minimax : t === "local_gsvi" ? e.local_gsvi : e.index_tts;
}
function so(e, t, n) {
  const s = Qu(e, t);
  return s.voices = [...n], e;
}
function qu(e) {
  return [
    ...new Set(e.map((t) => t.language).filter((t) => !!t))
  ].sort();
}
function ef(e, t) {
  const n = t.search.trim().toLowerCase();
  return e.filter((s) => t.language !== "all" && s.language !== t.language || t.gender !== "all" && s.gender !== t.gender || t.source !== "all" && s.source !== t.source ? !1 : n ? [s.id, s.name, ...s.description ?? []].join(" ").toLowerCase().includes(n) : !0);
}
function io(e) {
  const t = [e.language, e.gender, e.source].filter(Boolean);
  return t.length > 0 ? `${e.name} (${t.join(" / ")})` : e.name;
}
function oo(e) {
  return e?.languages ?? [];
}
function ro(e, t) {
  const n = t.trim();
  return !e || !n ? [] : e.emotionsByLanguage?.[n] ?? [];
}
function lo(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(2)} MB`;
}
const tf = ["data-color-scheme"], nf = { class: "inline-drawer" }, sf = { class: "inline-drawer-toggle inline-drawer-header" }, of = { class: "inline-drawer-content" }, rf = { class: "mtts-card" }, lf = { class: "mtts-card-head" }, af = { class: "mtts-title" }, cf = { class: "mtts-version" }, uf = ["title"], ff = { class: "mtts-enable" }, df = {
  class: "mtts-tabs",
  role: "tablist",
  "aria-label": "TTS 引擎"
}, pf = ["aria-selected"], mf = ["aria-selected"], gf = ["aria-selected"], hf = {
  class: "mtts-section",
  "aria-labelledby": "mtts-service-title"
}, vf = { class: "mtts-field" }, _f = { class: "mtts-grid" }, bf = { class: "mtts-field" }, yf = { class: "mtts-field" }, xf = { class: "mtts-field" }, Tf = { class: "mtts-actions" }, Sf = ["disabled"], wf = ["disabled"], Ef = {
  key: 0,
  class: "mtts-fold"
}, If = { class: "mtts-fold-body" }, Cf = { class: "mtts-grid" }, Mf = { class: "mtts-field" }, Af = { class: "mtts-field" }, Pf = ["value"], Rf = { class: "mtts-field" }, Vf = { class: "mtts-field" }, Nf = { class: "mtts-field" }, Lf = ["value"], kf = { value: "" }, Of = ["value"], Gf = { class: "mtts-control-row" }, $f = { class: "mtts-field" }, Df = ["disabled"], jf = { class: "mtts-grid" }, Uf = { class: "mtts-field" }, Ff = { value: "" }, Bf = ["value"], Hf = ["value"], Kf = { class: "mtts-field" }, zf = ["value"], Wf = { class: "mtts-control-row" }, Jf = { class: "mtts-field" }, Xf = ["disabled"], Yf = { class: "mtts-grid" }, Zf = { class: "mtts-field" }, Qf = { value: "" }, qf = ["value"], ed = { class: "mtts-field" }, td = ["value"], nd = { class: "mtts-field" }, sd = ["value"], id = { class: "mtts-actions" }, od = { class: "mtts-field" }, rd = ["disabled"], ld = {
  class: "mtts-section",
  "aria-labelledby": "mtts-mapping-title"
}, ad = { class: "mtts-section-head" }, cd = {
  id: "mtts-mapping-title",
  class: "mtts-section-title"
}, ud = { class: "mtts-count" }, fd = {
  key: 0,
  class: "mtts-empty"
}, dd = { class: "mtts-field" }, pd = ["onUpdate:modelValue"], md = { class: "mtts-field" }, gd = ["onUpdate:modelValue"], hd = {
  key: 0,
  class: "mtts-field"
}, vd = ["value", "onChange"], _d = ["value"], bd = { class: "mtts-mapping-actions" }, yd = ["disabled", "onClick"], xd = ["onClick"], Td = { class: "mtts-field" }, Sd = ["onUpdate:modelValue"], wd = { class: "mtts-grid" }, Ed = { class: "mtts-field" }, Id = ["onUpdate:modelValue"], Cd = { value: "" }, Md = ["value"], Ad = ["value"], Pd = { class: "mtts-field" }, Rd = ["onUpdate:modelValue"], Vd = ["value"], Nd = { class: "mtts-mapping-actions" }, Ld = ["disabled", "onClick"], kd = ["onClick"], Od = { class: "mtts-field" }, Gd = ["onUpdate:modelValue"], $d = { class: "mtts-grid" }, Dd = { class: "mtts-field" }, jd = ["onUpdate:modelValue"], Ud = { value: "" }, Fd = ["value"], Bd = { class: "mtts-field" }, Hd = ["onUpdate:modelValue"], Kd = ["value"], zd = { class: "mtts-field" }, Wd = ["onUpdate:modelValue"], Jd = ["value"], Xd = { class: "mtts-mapping-actions" }, Yd = ["disabled", "onClick"], Zd = ["onClick"], Qd = {
  key: 3,
  class: "mtts-hint"
}, qd = { class: "mtts-fold" }, ep = { class: "mtts-fold-body" }, tp = { class: "mtts-field" }, np = { class: "mtts-field" }, sp = ["value"], ip = { class: "mtts-actions" }, op = ["disabled"], rp = ["disabled"], lp = { class: "mtts-fold" }, ap = { class: "mtts-fold-body" }, cp = { class: "mtts-enable" }, up = { class: "mtts-field" }, fp = { class: "mtts-label" }, dp = { class: "mtts-field" }, pp = { class: "mtts-field" }, mp = { class: "mtts-fold" }, gp = { class: "mtts-fold-body" }, hp = { class: "mtts-field" }, vp = {
  key: 0,
  class: "mtts-grid"
}, _p = {
  key: 0,
  class: "mtts-field"
}, bp = { class: "mtts-field" }, yp = { class: "mtts-hint" }, xp = { class: "mtts-actions" }, Tp = ["disabled"], Sp = ["disabled"], wp = { class: "mtts-fold" }, Ep = { class: "mtts-fold-body" }, Ip = { class: "mtts-field" }, Cp = ["value"], Mp = { class: "mtts-field" }, Ap = { class: "mtts-label" }, Pp = { class: "mtts-field" }, Rp = { class: "mtts-label" }, Vp = { class: "mtts-field" }, Np = { class: "mtts-label" }, Lp = { class: "mtts-field" }, kp = { class: "mtts-grid" }, Op = { class: "mtts-field" }, Gp = ["value"], $p = { class: "mtts-field" }, Dp = ["value"], jp = { class: "mtts-field" }, Up = { class: "mtts-label" }, Fp = /* @__PURE__ */ Vl({
  __name: "settings-panel",
  props: {
    displayName: {},
    version: {},
    settings: {},
    onSettingsChange: { type: Function }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ mn(zt(t.settings)), s = /* @__PURE__ */ it(""), i = /* @__PURE__ */ it(!1), o = /* @__PURE__ */ it(!1), r = /* @__PURE__ */ mn(no()), l = /* @__PURE__ */ it(""), a = /* @__PURE__ */ it(""), d = /* @__PURE__ */ it(0), p = /* @__PURE__ */ it(0), h = /* @__PURE__ */ it("saved"), w = /* @__PURE__ */ it("light"), S = /* @__PURE__ */ mn({
      minimax: { kind: "unchecked", detail: "" },
      local_gsvi: { kind: "unchecked", detail: "" },
      index_tts: { kind: "unchecked", detail: "" }
    });
    let B, P = !0, V = null;
    const R = he(() => n.ttsEngine === "minimax"), k = he(() => n.ttsEngine === "local_gsvi"), Y = he(() => n.ttsEngine === "index_tts"), U = he(() => r.minimax.voices), ue = he(() => r.local_gsvi.voices), ye = he(() => r.index_tts.voices), me = he(
      () => ef(r.minimax.voices, r.minimax.filter)
    ), Oe = he(() => qu(r.minimax.voices)), $t = he(
      () => r.local_gsvi.voices.find((_) => _.id === n.localGsviModel)
    ), gt = he(() => oo($t.value)), tt = he(
      () => ro($t.value, n.localGsviLanguage)
    ), Ge = he(() => Y.value ? n.indexTtsCharacterMappings.length : k.value ? n.gsviCharacterMappings.length : n.characterMappings.length), Dt = he(() => Y.value ? Ms(n.indexTtsCharacterMappingPresets) : k.value ? Ms(n.gsviCharacterMappingPresets) : Ms(n.characterMappingPresets)), It = he(
      () => Hu(
        (Y.value ? n.indexTtsCharacterMappings : k.value ? n.gsviCharacterMappings : n.characterMappings).map((_) => _.characterName)
      )
    ), sn = he(() => R.value ? "试听默认音色（消耗额度）" : k.value ? "试听默认模型" : "试听默认音色"), Ct = he(() => lo(p.value)), nt = he(() => Y.value ? "IndexTTS" : k.value ? "GSVI" : "MiniMax"), He = he(() => S[n.ttsEngine]), M = he(() => {
      const _ = He.value;
      return _.kind === "connecting" ? "正在连接" : _.kind === "online" ? _.detail ? `${nt.value} 在线 · ${_.detail}` : `${nt.value} 在线` : _.kind === "offline" ? _.detail ? `服务离线 · ${_.detail}` : "服务离线" : "尚未检查";
    }), $ = he(() => h.value === "saving" ? "正在保存…" : h.value === "error" ? "保存失败，请重试" : "✓ 所有修改已自动保存");
    Ml(
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
      const g = getComputedStyle(document.body).backgroundColor.match(/[\d.]+/g);
      return g && g.length >= 3 ? (0.2126 * Number(g[0]) + 0.7152 * Number(g[1]) + 0.0722 * Number(g[2])) / 255 < 0.45 ? "dark" : "light" : typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function de(_, c) {
      if (br(_)) {
        L(_.message, !0);
        return;
      }
      L(_ instanceof Error ? _.message : c, !0);
    }
    function $e() {
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
    async function m(_, c, g) {
      if (!o.value) {
        o.value = !0, c && L(c);
        try {
          await _();
        } catch (J) {
          de(J, g);
        } finally {
          o.value = !1;
        }
      }
    }
    async function v(_ = !1) {
      await m(
        async () => {
          K("connecting");
          const c = eo(n);
          if (!c) {
            const J = re();
            K("offline", J), L(J, !0);
            return;
          }
          c.engine === "minimax" && (c.forceRefresh = _);
          const g = n.ttsEngine;
          try {
            const J = await jn(g).listVoices(c);
            so(r, g, J);
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
    function C() {
      const _ = l.value, c = Dt.value.some((J) => J.name === _.trim());
      if (c && !window.confirm(`方案「${_.trim()}」已存在，要覆盖吗？`))
        return;
      const g = R.value ? As(n.characterMappingPresets, _, $e(), c) : k.value ? As(n.gsviCharacterMappingPresets, _, we(), c) : As(
        n.indexTtsCharacterMappingPresets,
        _,
        Ae(),
        c
      );
      if ("error" in g) {
        L(Ve(g.error), !0);
        return;
      }
      R.value ? n.characterMappingPresets = g.presets : k.value ? n.gsviCharacterMappingPresets = g.presets : n.indexTtsCharacterMappingPresets = g.presets, a.value = _.trim(), L(Ve(g.message));
    }
    function I() {
      const _ = R.value ? Ps(n.characterMappingPresets, a.value) : k.value ? Ps(n.gsviCharacterMappingPresets, a.value) : Ps(n.indexTtsCharacterMappingPresets, a.value);
      if ("error" in _) {
        L(Ve(_.error), !0);
        return;
      }
      (R.value ? $e().length > 0 : k.value ? we().length > 0 : Ae().length > 0) && !window.confirm("载入方案会覆盖当前映射，确定继续吗？") || (R.value ? n.characterMappings = _.mappings : k.value ? n.gsviCharacterMappings = _.mappings : n.indexTtsCharacterMappings = _.mappings, L(`已载入方案：${a.value}`));
    }
    function E() {
      if (!window.confirm(`确定删除方案「${a.value}」吗？`))
        return;
      const _ = R.value ? Rs(n.characterMappingPresets, a.value) : k.value ? Rs(n.gsviCharacterMappingPresets, a.value) : Rs(n.indexTtsCharacterMappingPresets, a.value);
      if ("error" in _) {
        L(Ve(_.error), !0);
        return;
      }
      R.value ? n.characterMappingPresets = _.presets : k.value ? n.gsviCharacterMappingPresets = _.presets : n.indexTtsCharacterMappingPresets = _.presets, a.value = "", L(Ve(_.message));
    }
    async function y() {
      if (n.ttsEngine !== "index_tts") {
        await v(!0);
        return;
      }
      await m(
        async () => {
          K("connecting");
          const _ = eo(n);
          if (!_ || _.engine !== "index_tts") {
            const g = "请先填写 IndexTTS 服务地址";
            K("offline", g), L(g, !0);
            return;
          }
          const c = jn("index_tts");
          try {
            const g = await c.checkHealth(_);
            if (!g.ok) {
              K("offline", g.message), L(g.message, !0);
              return;
            }
            try {
              const J = await c.listVoices(_);
              so(r, "index_tts", J);
              const N = f(J.length);
              K("online", N), L(g.message);
            } catch (J) {
              K("online", g.message), de(J, "拉取音色失败");
            }
          } catch (g) {
            throw K("offline"), g;
          }
        },
        "",
        "检查 IndexTTS 连接失败"
      );
    }
    async function D(_) {
      await m(
        async () => {
          const c = Yu(n.ttsEngine, n.testLanguage), g = Nr(n, c, _);
          if (!g) {
            L(
              _ ? `角色「${_}」未完整映射，无法测试` : "请先补全当前引擎的默认音色/模型后再测试",
              !0
            );
            return;
          }
          const J = await jn(n.ttsEngine).synthesize(g);
          fr(J), L(_ ? `正在试听「${_}」` : "正在试听默认音色");
        },
        "正在合成测试语音…",
        "测试语音失败"
      );
    }
    async function A() {
      await m(
        async () => {
          const _ = await ic();
          d.value = _.count, p.value = _.totalBytes, L(`缓存 ${_.count} 条，${lo(_.totalBytes)}`);
        },
        "正在读取缓存…",
        "读取缓存失败"
      );
    }
    async function j() {
      window.confirm("确定清空本扩展的音频缓存吗？") && await m(
        async () => {
          await ur(), d.value = 0, p.value = 0, L("已清空音频缓存");
        },
        "正在清空缓存…",
        "清空缓存失败"
      );
    }
    function H() {
      window.confirm("确定恢复默认设置吗？当前映射和密钥都会被清空。") && (Object.assign(n, zt(Et)), Object.assign(r, no()), L("已恢复默认设置"));
    }
    function Z() {
      gt.value.includes(n.localGsviLanguage) || (n.localGsviLanguage = "", n.localGsviEmotion = "");
    }
    function ne(_) {
      return oo(r.local_gsvi.voices.find((c) => c.id === _));
    }
    function ee(_, c) {
      return ro(
        r.local_gsvi.voices.find((g) => g.id === _),
        c
      );
    }
    return kl(() => {
      w.value = fe(), typeof window.matchMedia == "function" && (V = window.matchMedia("(prefers-color-scheme: dark)"), V.addEventListener("change", be));
    }), Ol(() => {
      window.clearTimeout(B), V?.removeEventListener("change", be), V = null;
    }), A().catch((_) => de(_, "读取缓存失败")), (_, c) => (O(), G("div", {
      class: "tavern-multi-tts-settings",
      "data-color-scheme": w.value
    }, [
      u("div", nf, [
        u("div", sf, [
          u("b", null, W(e.displayName), 1),
          c[40] || (c[40] = u("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        u("div", of, [
          u("div", rf, [
            u("header", lf, [
              u("h2", af, W(e.displayName), 1),
              u("span", cf, W(e.version), 1)
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
              (O(), G("span", {
                key: M.value,
                class: "mtts-capsule-text mtts-fade",
                title: M.value
              }, W(M.value), 9, uf))
            ], 2),
            s.value ? (O(), G("p", {
              key: s.value,
              class: at(["mtts-notice mtts-fade", { "is-error": i.value }]),
              role: "status"
            }, W(s.value), 3)) : De("", !0),
            u("label", ff, [
              z(u("input", {
                "onUpdate:modelValue": c[0] || (c[0] = (g) => n.enabled = g),
                type: "checkbox"
              }, null, 512), [
                [Ui, n.enabled]
              ]),
              c[42] || (c[42] = u("span", null, "启用", -1))
            ]),
            u("div", df, [
              u("button", {
                class: at(["mtts-tab", { "is-active": R.value }]),
                type: "button",
                role: "tab",
                "aria-selected": R.value,
                onClick: c[1] || (c[1] = (g) => q("minimax"))
              }, " MiniMax ", 10, pf),
              u("button", {
                class: at(["mtts-tab", { "is-active": k.value }]),
                type: "button",
                role: "tab",
                "aria-selected": k.value,
                onClick: c[2] || (c[2] = (g) => q("local_gsvi"))
              }, " GSVI ", 10, mf),
              u("button", {
                class: at(["mtts-tab", { "is-active": Y.value }]),
                type: "button",
                role: "tab",
                "aria-selected": Y.value,
                onClick: c[3] || (c[3] = (g) => q("index_tts"))
              }, " IndexTTS ", 10, gf)
            ]),
            u("section", hf, [
              c[68] || (c[68] = u("h3", {
                id: "mtts-service-title",
                class: "mtts-section-title"
              }, "语音服务", -1)),
              R.value ? (O(), G(Q, { key: 0 }, [
                u("label", vf, [
                  c[43] || (c[43] = u("span", { class: "mtts-label" }, "API Key", -1)),
                  z(u("input", {
                    "onUpdate:modelValue": c[4] || (c[4] = (g) => n.apiKey = g),
                    class: "text_pole",
                    type: "password",
                    autocomplete: "off"
                  }, null, 512), [
                    [ve, n.apiKey]
                  ])
                ]),
                u("div", _f, [
                  u("label", bf, [
                    c[44] || (c[44] = u("span", { class: "mtts-label" }, "Group ID", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": c[5] || (c[5] = (g) => n.groupId = g),
                      class: "text_pole",
                      type: "text"
                    }, null, 512), [
                      [ve, n.groupId]
                    ])
                  ]),
                  u("label", yf, [
                    c[46] || (c[46] = u("span", { class: "mtts-label" }, "区域", -1)),
                    z(u("select", {
                      "onUpdate:modelValue": c[6] || (c[6] = (g) => n.minimaxRegion = g),
                      class: "text_pole"
                    }, [...c[45] || (c[45] = [
                      u("option", { value: "international" }, "国际", -1),
                      u("option", { value: "beijing" }, "北京", -1)
                    ])], 512), [
                      [pe, n.minimaxRegion]
                    ])
                  ])
                ]),
                u("label", xf, [
                  c[47] || (c[47] = u("span", { class: "mtts-label" }, "默认音色", -1)),
                  z(u("input", {
                    "onUpdate:modelValue": c[7] || (c[7] = (g) => n.voiceId = g),
                    class: "text_pole",
                    type: "text",
                    placeholder: "无 char 的台词使用"
                  }, null, 512), [
                    [ve, n.voiceId]
                  ])
                ]),
                u("div", Tf, [
                  u("button", {
                    class: "mtts-btn mtts-btn-primary",
                    type: "button",
                    disabled: o.value,
                    onClick: y
                  }, " 检查连接 ", 8, Sf),
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: o.value,
                    onClick: c[8] || (c[8] = (g) => v(!0))
                  }, " 刷新音色 ", 8, wf)
                ]),
                U.value.length > 0 ? (O(), G("details", Ef, [
                  c[56] || (c[56] = u("summary", null, [
                    u("i", {
                      class: "fa-solid fa-chevron-right mtts-fold-icon",
                      "aria-hidden": "true"
                    }),
                    rt(" 筛选音色 ")
                  ], -1)),
                  u("div", If, [
                    u("div", Cf, [
                      u("label", Mf, [
                        c[48] || (c[48] = u("span", { class: "mtts-label" }, "搜索", -1)),
                        z(u("input", {
                          "onUpdate:modelValue": c[9] || (c[9] = (g) => r.minimax.filter.search = g),
                          class: "text_pole",
                          type: "search"
                        }, null, 512), [
                          [ve, r.minimax.filter.search]
                        ])
                      ]),
                      u("label", Af, [
                        c[50] || (c[50] = u("span", { class: "mtts-label" }, "语言", -1)),
                        z(u("select", {
                          "onUpdate:modelValue": c[10] || (c[10] = (g) => r.minimax.filter.language = g),
                          class: "text_pole"
                        }, [
                          c[49] || (c[49] = u("option", { value: "all" }, "全部语言", -1)),
                          (O(!0), G(Q, null, ge(Oe.value, (g) => (O(), G("option", {
                            key: g,
                            value: g
                          }, W(g), 9, Pf))), 128))
                        ], 512), [
                          [pe, r.minimax.filter.language]
                        ])
                      ]),
                      u("label", Rf, [
                        c[52] || (c[52] = u("span", { class: "mtts-label" }, "性别", -1)),
                        z(u("select", {
                          "onUpdate:modelValue": c[11] || (c[11] = (g) => r.minimax.filter.gender = g),
                          class: "text_pole"
                        }, [...c[51] || (c[51] = [
                          u("option", { value: "all" }, "全部性别", -1),
                          u("option", { value: "Female" }, "Female", -1),
                          u("option", { value: "Male" }, "Male", -1),
                          u("option", { value: "Unknown" }, "Unknown", -1)
                        ])], 512), [
                          [pe, r.minimax.filter.gender]
                        ])
                      ]),
                      u("label", Vf, [
                        c[54] || (c[54] = u("span", { class: "mtts-label" }, "来源", -1)),
                        z(u("select", {
                          "onUpdate:modelValue": c[12] || (c[12] = (g) => r.minimax.filter.source = g),
                          class: "text_pole"
                        }, [...c[53] || (c[53] = [
                          u("option", { value: "all" }, "全部来源", -1),
                          u("option", { value: "system" }, "system", -1),
                          u("option", { value: "voice_cloning" }, "voice_cloning", -1),
                          u("option", { value: "voice_generation" }, "voice_generation", -1)
                        ])], 512), [
                          [pe, r.minimax.filter.source]
                        ])
                      ])
                    ]),
                    u("label", Nf, [
                      c[55] || (c[55] = u("span", { class: "mtts-label" }, "从列表填入默认音色", -1)),
                      u("select", {
                        class: "text_pole",
                        value: n.voiceId,
                        onChange: c[13] || (c[13] = (g) => T(g.target.value))
                      }, [
                        u("option", kf, W(me.value.length) + " 条可选", 1),
                        (O(!0), G(Q, null, ge(me.value, (g) => (O(), G("option", {
                          key: g.id,
                          value: g.id
                        }, W(ht(io)(g)), 9, Of))), 128))
                      ], 40, Lf)
                    ])
                  ])
                ])) : De("", !0)
              ], 64)) : Y.value ? (O(), G(Q, { key: 1 }, [
                u("div", Gf, [
                  u("label", $f, [
                    c[57] || (c[57] = u("span", { class: "mtts-label" }, "服务地址", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": c[14] || (c[14] = (g) => n.indexTtsBaseUrl = g),
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
                  }, " 检查连接 ", 8, Df)
                ]),
                u("div", jf, [
                  u("label", Uf, [
                    c[58] || (c[58] = u("span", { class: "mtts-label" }, "默认音色", -1)),
                    z(u("select", {
                      "onUpdate:modelValue": c[15] || (c[15] = (g) => n.indexTtsVoiceId = g),
                      class: "text_pole"
                    }, [
                      u("option", Ff, W(ye.value.length > 0 ? "请选择音色预设" : "先检查连接并拉取音色"), 1),
                      n.indexTtsVoiceId && !ye.value.some((g) => g.id === n.indexTtsVoiceId) ? (O(), G("option", {
                        key: 0,
                        value: n.indexTtsVoiceId
                      }, W(n.indexTtsVoiceId), 9, Bf)) : De("", !0),
                      (O(!0), G(Q, null, ge(ye.value, (g) => (O(), G("option", {
                        key: g.id,
                        value: g.id
                      }, W(g.name), 9, Hf))), 128))
                    ], 512), [
                      [pe, n.indexTtsVoiceId]
                    ])
                  ]),
                  u("label", Kf, [
                    c[59] || (c[59] = u("span", { class: "mtts-label" }, "语言", -1)),
                    z(u("select", {
                      "onUpdate:modelValue": c[16] || (c[16] = (g) => n.indexTtsLanguage = g),
                      class: "text_pole"
                    }, [
                      (O(!0), G(Q, null, ge(ht(Wn), (g) => (O(), G("option", {
                        key: g,
                        value: g
                      }, W(g), 9, zf))), 128))
                    ], 512), [
                      [pe, n.indexTtsLanguage]
                    ])
                  ])
                ])
              ], 64)) : k.value ? (O(), G(Q, { key: 2 }, [
                u("div", Wf, [
                  u("label", Jf, [
                    c[60] || (c[60] = u("span", { class: "mtts-label" }, "服务地址", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": c[17] || (c[17] = (g) => n.localGsviBaseUrl = g),
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
                  }, " 检查连接 ", 8, Xf)
                ]),
                u("div", Yf, [
                  u("label", Zf, [
                    c[61] || (c[61] = u("span", { class: "mtts-label" }, "默认模型", -1)),
                    z(u("select", {
                      "onUpdate:modelValue": c[18] || (c[18] = (g) => n.localGsviModel = g),
                      class: "text_pole",
                      onChange: Z
                    }, [
                      u("option", Qf, W(ue.value.length > 0 ? "请选择" : "先检查连接并拉取模型"), 1),
                      (O(!0), G(Q, null, ge(ue.value, (g) => (O(), G("option", {
                        key: g.id,
                        value: g.id
                      }, W(g.name), 9, qf))), 128))
                    ], 544), [
                      [pe, n.localGsviModel]
                    ])
                  ]),
                  u("label", ed, [
                    c[63] || (c[63] = u("span", { class: "mtts-label" }, "语种", -1)),
                    z(u("select", {
                      "onUpdate:modelValue": c[19] || (c[19] = (g) => n.localGsviLanguage = g),
                      class: "text_pole"
                    }, [
                      c[62] || (c[62] = u("option", { value: "" }, "请选择", -1)),
                      (O(!0), G(Q, null, ge(gt.value, (g) => (O(), G("option", {
                        key: g,
                        value: g
                      }, W(g), 9, td))), 128))
                    ], 512), [
                      [pe, n.localGsviLanguage]
                    ])
                  ]),
                  u("label", nd, [
                    c[65] || (c[65] = u("span", { class: "mtts-label" }, "情绪", -1)),
                    z(u("select", {
                      "onUpdate:modelValue": c[20] || (c[20] = (g) => n.localGsviEmotion = g),
                      class: "text_pole"
                    }, [
                      c[64] || (c[64] = u("option", { value: "" }, "请选择", -1)),
                      (O(!0), G(Q, null, ge(tt.value, (g) => (O(), G("option", {
                        key: g,
                        value: g
                      }, W(g), 9, sd))), 128))
                    ], 512), [
                      [pe, n.localGsviEmotion]
                    ])
                  ])
                ])
              ], 64)) : De("", !0),
              u("div", id, [
                u("label", od, [
                  c[67] || (c[67] = u("span", { class: "mtts-label" }, "试听语言", -1)),
                  z(u("select", {
                    "onUpdate:modelValue": c[21] || (c[21] = (g) => n.testLanguage = g),
                    class: "text_pole"
                  }, [...c[66] || (c[66] = [
                    u("option", { value: "ja" }, "日语", -1),
                    u("option", { value: "zh" }, "中文", -1),
                    u("option", { value: "en" }, "英语", -1)
                  ])], 512), [
                    [pe, n.testLanguage]
                  ])
                ]),
                u("button", {
                  class: "mtts-btn mtts-btn-secondary",
                  type: "button",
                  disabled: o.value,
                  onClick: c[22] || (c[22] = (g) => D())
                }, W(sn.value), 9, rd)
              ])
            ]),
            u("section", ld, [
              u("div", ad, [
                u("h3", cd, [
                  c[69] || (c[69] = rt(" 角色映射 ", -1)),
                  u("span", ud, W(Ge.value), 1)
                ]),
                u("button", {
                  class: "mtts-btn mtts-btn-primary",
                  type: "button",
                  onClick: x
                }, " + 添加角色 ")
              ]),
              Ge.value === 0 ? (O(), G("div", fd, [
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
              ])) : (O(), G(Q, { key: 1 }, [
                R.value ? (O(!0), G(Q, { key: 0 }, ge(n.characterMappings, (g, J) => (O(), G("article", {
                  key: `mm-${J}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", dd, [
                    c[72] || (c[72] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": (N) => g.characterName = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, pd), [
                      [ve, g.characterName]
                    ])
                  ]),
                  u("label", md, [
                    c[73] || (c[73] = u("span", { class: "mtts-label" }, "Voice ID", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": (N) => g.minimaxVoiceId = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, gd), [
                      [ve, g.minimaxVoiceId]
                    ])
                  ]),
                  U.value.length > 0 ? (O(), G("label", hd, [
                    c[75] || (c[75] = u("span", { class: "mtts-label" }, "音色预设", -1)),
                    u("select", {
                      class: "text_pole",
                      value: g.minimaxVoiceId,
                      onChange: (N) => g.minimaxVoiceId = N.target.value
                    }, [
                      c[74] || (c[74] = u("option", { value: "" }, "从列表选择", -1)),
                      (O(!0), G(Q, null, ge(me.value, (N) => (O(), G("option", {
                        key: N.id,
                        value: N.id
                      }, W(ht(io)(N)), 9, _d))), 128))
                    ], 40, vd)
                  ])) : De("", !0),
                  u("div", bd, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (N) => D(g.characterName)
                    }, " 试听 ", 8, yd),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (N) => b(J)
                    }, " 删除 ", 8, xd)
                  ])
                ]))), 128)) : Y.value ? (O(!0), G(Q, { key: 1 }, ge(n.indexTtsCharacterMappings, (g, J) => (O(), G("article", {
                  key: `index-${J}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", Td, [
                    c[76] || (c[76] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": (N) => g.characterName = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, Sd), [
                      [ve, g.characterName]
                    ])
                  ]),
                  u("div", wd, [
                    u("label", Ed, [
                      c[77] || (c[77] = u("span", { class: "mtts-label" }, "音色预设", -1)),
                      z(u("select", {
                        "onUpdate:modelValue": (N) => g.indexTtsVoiceId = N,
                        class: "text_pole"
                      }, [
                        u("option", Cd, W(ye.value.length > 0 ? "请选择" : "先检查连接"), 1),
                        g.indexTtsVoiceId && !ye.value.some((N) => N.id === g.indexTtsVoiceId) ? (O(), G("option", {
                          key: 0,
                          value: g.indexTtsVoiceId
                        }, W(g.indexTtsVoiceId), 9, Md)) : De("", !0),
                        (O(!0), G(Q, null, ge(ye.value, (N) => (O(), G("option", {
                          key: N.id,
                          value: N.id
                        }, W(N.name), 9, Ad))), 128))
                      ], 8, Id), [
                        [pe, g.indexTtsVoiceId]
                      ])
                    ]),
                    u("label", Pd, [
                      c[78] || (c[78] = u("span", { class: "mtts-label" }, "语言", -1)),
                      z(u("select", {
                        "onUpdate:modelValue": (N) => g.indexTtsLanguage = N,
                        class: "text_pole"
                      }, [
                        (O(!0), G(Q, null, ge(ht(Wn), (N) => (O(), G("option", {
                          key: N,
                          value: N
                        }, W(N), 9, Vd))), 128))
                      ], 8, Rd), [
                        [pe, g.indexTtsLanguage]
                      ])
                    ])
                  ]),
                  u("div", Nd, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (N) => D(g.characterName)
                    }, " 试听 ", 8, Ld),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (N) => b(J)
                    }, " 删除 ", 8, kd)
                  ])
                ]))), 128)) : k.value ? (O(!0), G(Q, { key: 2 }, ge(n.gsviCharacterMappings, (g, J) => (O(), G("article", {
                  key: `gsvi-${J}`,
                  class: "mtts-mapping-card"
                }, [
                  u("label", Od, [
                    c[79] || (c[79] = u("span", { class: "mtts-label" }, "角色名", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": (N) => g.characterName = N,
                      class: "text_pole",
                      type: "text"
                    }, null, 8, Gd), [
                      [ve, g.characterName]
                    ])
                  ]),
                  u("div", $d, [
                    u("label", Dd, [
                      c[80] || (c[80] = u("span", { class: "mtts-label" }, "模型", -1)),
                      z(u("select", {
                        "onUpdate:modelValue": (N) => g.gsviVoiceId = N,
                        class: "text_pole"
                      }, [
                        u("option", Ud, W(ue.value.length > 0 ? "请选择" : "先检查连接"), 1),
                        (O(!0), G(Q, null, ge(ue.value, (N) => (O(), G("option", {
                          key: N.id,
                          value: N.id
                        }, W(N.name), 9, Fd))), 128))
                      ], 8, jd), [
                        [pe, g.gsviVoiceId]
                      ])
                    ]),
                    u("label", Bd, [
                      c[82] || (c[82] = u("span", { class: "mtts-label" }, "语种", -1)),
                      z(u("select", {
                        "onUpdate:modelValue": (N) => g.gsviLanguage = N,
                        class: "text_pole"
                      }, [
                        c[81] || (c[81] = u("option", { value: "" }, "请选择", -1)),
                        (O(!0), G(Q, null, ge(ne(g.gsviVoiceId), (N) => (O(), G("option", {
                          key: N,
                          value: N
                        }, W(N), 9, Kd))), 128))
                      ], 8, Hd), [
                        [pe, g.gsviLanguage]
                      ])
                    ]),
                    u("label", zd, [
                      c[84] || (c[84] = u("span", { class: "mtts-label" }, "情绪", -1)),
                      z(u("select", {
                        "onUpdate:modelValue": (N) => g.gsviEmotion = N,
                        class: "text_pole"
                      }, [
                        c[83] || (c[83] = u("option", { value: "" }, "请选择", -1)),
                        (O(!0), G(Q, null, ge(ee(g.gsviVoiceId, g.gsviLanguage), (N) => (O(), G("option", {
                          key: N,
                          value: N
                        }, W(N), 9, Jd))), 128))
                      ], 8, Wd), [
                        [pe, g.gsviEmotion]
                      ])
                    ])
                  ]),
                  u("div", Xd, [
                    u("button", {
                      class: "mtts-btn mtts-btn-secondary",
                      type: "button",
                      disabled: o.value,
                      onClick: (N) => D(g.characterName)
                    }, " 试听 ", 8, Yd),
                    u("button", {
                      class: "mtts-btn mtts-btn-danger",
                      type: "button",
                      onClick: (N) => b(J)
                    }, " 删除 ", 8, Zd)
                  ])
                ]))), 128)) : De("", !0),
                It.value.length > 0 ? (O(), G("p", Qd, " 重复角色名：" + W(It.value.join("、")) + "，最后一条完整映射生效。 ", 1)) : De("", !0)
              ], 64))
            ]),
            u("details", qd, [
              c[89] || (c[89] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                rt(" 映射方案（可选） ")
              ], -1)),
              u("div", ep, [
                c[88] || (c[88] = u("p", { class: "mtts-hint" }, "角色映射会自动保存；这里仅用于保存多套可切换方案。", -1)),
                u("label", tp, [
                  c[85] || (c[85] = u("span", { class: "mtts-label" }, "方案名称", -1)),
                  z(u("input", {
                    "onUpdate:modelValue": c[23] || (c[23] = (g) => l.value = g),
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
                    onClick: C
                  }, " 保存当前方案 ")
                ]),
                u("label", np, [
                  c[87] || (c[87] = u("span", { class: "mtts-label" }, "选择已有方案", -1)),
                  z(u("select", {
                    "onUpdate:modelValue": c[24] || (c[24] = (g) => a.value = g),
                    class: "text_pole"
                  }, [
                    c[86] || (c[86] = u("option", { value: "" }, "请选择方案", -1)),
                    (O(!0), G(Q, null, ge(Dt.value, (g) => (O(), G("option", {
                      key: g.name,
                      value: g.name
                    }, W(g.name) + "（" + W(g.mappings.length) + "） ", 9, sp))), 128))
                  ], 512), [
                    [pe, a.value]
                  ])
                ]),
                u("div", ip, [
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: !a.value,
                    onClick: I
                  }, " 载入方案 ", 8, op),
                  u("button", {
                    class: "mtts-btn mtts-btn-danger",
                    type: "button",
                    disabled: !a.value,
                    onClick: E
                  }, " 删除方案 ", 8, rp)
                ])
              ])
            ]),
            u("details", lp, [
              c[94] || (c[94] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                rt(" 提示词注入 ")
              ], -1)),
              u("div", ap, [
                u("label", cp, [
                  z(u("input", {
                    "onUpdate:modelValue": c[25] || (c[25] = (g) => n.injectEnabled = g),
                    type: "checkbox"
                  }, null, 512), [
                    [Ui, n.injectEnabled]
                  ]),
                  c[90] || (c[90] = u("span", null, "注入 <say> 提示", -1))
                ]),
                u("label", up, [
                  u("span", fp, "注入深度 D" + W(n.injectDepth), 1),
                  z(u("input", {
                    "onUpdate:modelValue": c[26] || (c[26] = (g) => n.injectDepth = g),
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
                u("label", dp, [
                  c[92] || (c[92] = u("span", { class: "mtts-label" }, "注入角色", -1)),
                  z(u("select", {
                    "onUpdate:modelValue": c[27] || (c[27] = (g) => n.injectRole = g),
                    class: "text_pole"
                  }, [...c[91] || (c[91] = [
                    u("option", { value: "system" }, "system", -1),
                    u("option", { value: "user" }, "user", -1),
                    u("option", { value: "assistant" }, "assistant", -1)
                  ])], 512), [
                    [pe, n.injectRole]
                  ])
                ]),
                u("label", pp, [
                  c[93] || (c[93] = u("span", { class: "mtts-label" }, "注入模板", -1)),
                  z(u("textarea", {
                    "onUpdate:modelValue": c[28] || (c[28] = (g) => n.injectTemplate = g),
                    class: "text_pole",
                    rows: "5"
                  }, null, 512), [
                    [ve, n.injectTemplate]
                  ])
                ])
              ])
            ]),
            u("details", mp, [
              c[99] || (c[99] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                rt(" 生成与缓存 ")
              ], -1)),
              u("div", gp, [
                u("label", hp, [
                  c[96] || (c[96] = u("span", { class: "mtts-label" }, "预取", -1)),
                  z(u("select", {
                    "onUpdate:modelValue": c[29] || (c[29] = (g) => n.prefetchMode = g),
                    class: "text_pole"
                  }, [...c[95] || (c[95] = [
                    u("option", { value: "manual" }, "只在点击时生成", -1),
                    u("option", { value: "auto_all" }, "自动预取全部", -1),
                    u("option", { value: "auto_first_n" }, "自动预取前 N 句", -1)
                  ])], 512), [
                    [pe, n.prefetchMode]
                  ])
                ]),
                n.prefetchMode !== "manual" ? (O(), G("div", vp, [
                  n.prefetchMode === "auto_first_n" ? (O(), G("label", _p, [
                    c[97] || (c[97] = u("span", { class: "mtts-label" }, "前 N 句", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": c[30] || (c[30] = (g) => n.prefetchFirstCount = g),
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
                  u("label", bp, [
                    c[98] || (c[98] = u("span", { class: "mtts-label" }, "并发", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": c[31] || (c[31] = (g) => n.maxConcurrency = g),
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
                u("p", yp, " 缓存 " + W(d.value) + " 条 / " + W(Ct.value) + "，上限 100 条或 50MB。 ", 1),
                u("div", xp, [
                  u("button", {
                    class: "mtts-btn mtts-btn-secondary",
                    type: "button",
                    disabled: o.value,
                    onClick: A
                  }, " 刷新缓存 ", 8, Tp),
                  u("button", {
                    class: "mtts-btn mtts-btn-danger",
                    type: "button",
                    disabled: o.value,
                    onClick: j
                  }, " 清空缓存 ", 8, Sp)
                ])
              ])
            ]),
            u("details", wp, [
              c[104] || (c[104] = u("summary", null, [
                u("i", {
                  class: "fa-solid fa-chevron-right mtts-fold-icon",
                  "aria-hidden": "true"
                }),
                rt(" 高级设置 ")
              ], -1)),
              u("div", Ep, [
                R.value ? (O(), G(Q, { key: 0 }, [
                  u("label", Ip, [
                    c[100] || (c[100] = u("span", { class: "mtts-label" }, "模型", -1)),
                    z(u("select", {
                      "onUpdate:modelValue": c[32] || (c[32] = (g) => n.model = g),
                      class: "text_pole"
                    }, [
                      (O(!0), G(Q, null, ge(ht(mr), (g) => (O(), G("option", {
                        key: g,
                        value: g
                      }, W(g), 9, Cp))), 128))
                    ], 512), [
                      [pe, n.model]
                    ])
                  ]),
                  u("label", Mp, [
                    u("span", Ap, "语速 " + W(n.speed.toFixed(2)), 1),
                    z(u("input", {
                      "onUpdate:modelValue": c[33] || (c[33] = (g) => n.speed = g),
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
                  u("label", Pp, [
                    u("span", Rp, "音量 " + W(n.vol.toFixed(2)), 1),
                    z(u("input", {
                      "onUpdate:modelValue": c[34] || (c[34] = (g) => n.vol = g),
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
                ], 64)) : k.value ? (O(), G(Q, { key: 1 }, [
                  u("label", Vp, [
                    u("span", Np, "语速 " + W(n.speed.toFixed(2)), 1),
                    z(u("input", {
                      "onUpdate:modelValue": c[35] || (c[35] = (g) => n.speed = g),
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
                  u("label", Lp, [
                    c[101] || (c[101] = u("span", { class: "mtts-label" }, "鉴权 Token", -1)),
                    z(u("input", {
                      "onUpdate:modelValue": c[36] || (c[36] = (g) => n.localGsviAuthToken = g),
                      class: "text_pole",
                      type: "password",
                      autocomplete: "off"
                    }, null, 512), [
                      [ve, n.localGsviAuthToken]
                    ])
                  ]),
                  u("div", kp, [
                    u("label", Op, [
                      c[102] || (c[102] = u("span", { class: "mtts-label" }, "文本语言", -1)),
                      z(u("select", {
                        "onUpdate:modelValue": c[37] || (c[37] = (g) => n.localGsviTextLang = g),
                        class: "text_pole"
                      }, [
                        (O(!0), G(Q, null, ge(ht(Ju), (g) => (O(), G("option", {
                          key: g,
                          value: g
                        }, W(g), 9, Gp))), 128))
                      ], 512), [
                        [pe, n.localGsviTextLang]
                      ])
                    ]),
                    u("label", $p, [
                      c[103] || (c[103] = u("span", { class: "mtts-label" }, "切分", -1)),
                      z(u("select", {
                        "onUpdate:modelValue": c[38] || (c[38] = (g) => n.localGsviTextSplitMethod = g),
                        class: "text_pole"
                      }, [
                        (O(!0), G(Q, null, ge(ht(Xu), (g) => (O(), G("option", {
                          key: g,
                          value: g
                        }, W(g), 9, Dp))), 128))
                      ], 512), [
                        [pe, n.localGsviTextSplitMethod]
                      ])
                    ])
                  ]),
                  u("label", jp, [
                    u("span", Up, "Batch " + W(n.localGsviBatchSize), 1),
                    z(u("input", {
                      "onUpdate:modelValue": c[39] || (c[39] = (g) => n.localGsviBatchSize = g),
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
              (O(), G("span", {
                key: h.value,
                class: "mtts-fade"
              }, W($.value), 1))
            ], 2)
          ])
        ])
      ])
    ], 8, tf));
  }
});
let an = null, cn = null, _n = null;
function Bp() {
  return zt(kr().readRawSettings());
}
function Hp() {
  return _n ??= $u(Bu(Bp)), _n;
}
function tn() {
  return cn || (cn = Tc(
    kr(),
    {
      mount(e, t) {
        an?.unmount(), an = Ha(Fp, {
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
      clearCache: ur,
      startRuntime: () => Hp().start(),
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
async function Kp() {
  await nn("onInstall", () => tn().install());
}
async function zp() {
  await nn("onActivate", () => tn().activate());
}
async function Wp() {
  await nn("onEnable", () => tn().activate());
}
async function Jp() {
  await nn("onDisable", () => tn().disable());
}
async function Xp() {
  await nn("onClean", () => tn().clean());
}
async function Yp() {
  await nn("onDelete", () => tn().delete());
}
export {
  zp as onActivate,
  Xp as onClean,
  Yp as onDelete,
  Jp as onDisable,
  Wp as onEnable,
  Kp as onInstall
};
//# sourceMappingURL=index.js.map
