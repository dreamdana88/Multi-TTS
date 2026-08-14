// @__NO_SIDE_EFFECTS__
function Ps(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const oe = {}, Vt = [], _t = () => {
}, Hi = () => !1, jn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Un = (e) => e.startsWith("onUpdate:"), je = Object.assign, Ki = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, pr = Object.prototype.hasOwnProperty, ee = (e, t) => pr.call(e, t), k = Array.isArray, Gt = (e) => mn(e) === "[object Map]", kt = (e) => mn(e) === "[object Set]", Qs = (e) => mn(e) === "[object Date]", Q = (e) => typeof e == "function", fe = (e) => typeof e == "string", Ze = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", zi = (e) => (re(e) || Q(e)) && Q(e.then) && Q(e.catch), Wi = Object.prototype.toString, mn = (e) => Wi.call(e), mr = (e) => mn(e).slice(8, -1), Ji = (e) => mn(e) === "[object Object]", Vs = (e) => fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qt = /* @__PURE__ */ Ps(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), kn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, hr = /-\w/g, Oe = kn(
  (e) => e.replace(hr, (t) => t.slice(1).toUpperCase())
), gr = /\B([A-Z])/g, wt = kn(
  (e) => e.replace(gr, "-$1").toLowerCase()
), Xi = kn((e) => e.charAt(0).toUpperCase() + e.slice(1)), qn = kn(
  (e) => e ? `on${Xi(e)}` : ""
), Xe = (e, t) => !Object.is(e, t), Sn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Yi = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Fn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let qs;
const Bn = () => qs || (qs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gs(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = fe(s) ? br(s) : Gs(s);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (fe(e) || re(e))
    return e;
}
const vr = /;(?![^(]*\))/g, _r = /:([^]+)/, yr = /\/\*[^]*?\*\//g;
function br(e) {
  const t = {};
  return e.replace(yr, "").split(vr).forEach((n) => {
    if (n) {
      const s = n.split(_r);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Hn(e) {
  let t = "";
  if (fe(e))
    t = e;
  else if (k(e))
    for (let n = 0; n < e.length; n++) {
      const s = Hn(e[n]);
      s && (t += s + " ");
    }
  else if (re(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const xr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Sr = /* @__PURE__ */ Ps(xr);
function Zi(e) {
  return !!e || e === "";
}
function Er(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Ft(e[s], t[s]);
  return n;
}
function Ft(e, t) {
  if (e === t) return !0;
  let n = Qs(e), s = Qs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ze(e), s = Ze(t), n || s)
    return e === t;
  if (n = k(e), s = k(t), n || s)
    return n && s ? Er(e, t) : !1;
  if (n = re(e), s = re(t), n || s) {
    if (!n || !s)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const l in e) {
      const r = e.hasOwnProperty(l), a = t.hasOwnProperty(l);
      if (r && !a || !r && a || !Ft(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ns(e, t) {
  return e.findIndex((n) => Ft(n, t));
}
const Qi = (e) => !!(e && e.__v_isRef === !0), z = (e) => fe(e) ? e : e == null ? "" : k(e) || re(e) && (e.toString === Wi || !Q(e.toString)) ? Qi(e) ? z(e.value) : JSON.stringify(e, qi, 2) : String(e), qi = (e, t) => Qi(t) ? qi(e, t.value) : Gt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], o) => (n[es(s, o) + " =>"] = i, n),
    {}
  )
} : kt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => es(n))
} : Ze(t) ? es(t) : re(t) && !k(t) && !Ji(t) ? String(t) : t, es = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ze(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let ge;
class wr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ge && (ge.active ? (this.parent = ge, this.index = (ge.scopes || (ge.scopes = [])).push(
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
      const n = ge;
      try {
        return ge = this, t();
      } finally {
        ge = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ge, ge = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ge === this)
        ge = this.prevScope;
      else {
        let t = ge;
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
function Tr() {
  return ge;
}
let se;
const ts = /* @__PURE__ */ new WeakSet();
class eo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ge && (ge.active ? ge.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ts.has(this) && (ts.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || no(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ei(this), so(this);
    const t = se, n = $e;
    se = this, $e = !0;
    try {
      return this.fn();
    } finally {
      io(this), se = t, $e = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        $s(t);
      this.deps = this.depsTail = void 0, ei(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ts.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    gs(this) && this.run();
  }
  get dirty() {
    return gs(this);
  }
}
let to = 0, en, tn;
function no(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = tn, tn = e;
    return;
  }
  e.next = en, en = e;
}
function Ls() {
  to++;
}
function Os() {
  if (--to > 0)
    return;
  if (tn) {
    let t = tn;
    for (tn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; en; ) {
    let t = en;
    for (en = void 0; t; ) {
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
function so(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function io(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), $s(s), Cr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function gs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (oo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function oo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ln) || (e.globalVersion = ln, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !gs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = se, s = $e;
  se = e, $e = !0;
  try {
    so(e);
    const i = e.fn(e._value);
    (t.version === 0 || Xe(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    se = n, $e = s, io(e), e.flags &= -3;
  }
}
function $s(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      $s(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Cr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let $e = !0;
const ro = [];
function St() {
  ro.push($e), $e = !1;
}
function Et() {
  const e = ro.pop();
  $e = e === void 0 ? !0 : e;
}
function ei(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = se;
    se = void 0;
    try {
      t();
    } finally {
      se = n;
    }
  }
}
let ln = 0;
class Mr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ds {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!se || !$e || se === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== se)
      n = this.activeLink = new Mr(se, this), se.deps ? (n.prevDep = se.depsTail, se.depsTail.nextDep = n, se.depsTail = n) : se.deps = se.depsTail = n, lo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = se.depsTail, n.nextDep = void 0, se.depsTail.nextDep = n, se.depsTail = n, se.deps === n && (se.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, ln++, this.notify(t);
  }
  notify(t) {
    Ls();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Os();
    }
  }
}
function lo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        lo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const vs = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ Symbol(
  ""
), _s = /* @__PURE__ */ Symbol(
  ""
), an = /* @__PURE__ */ Symbol(
  ""
);
function ve(e, t, n) {
  if ($e && se) {
    let s = vs.get(e);
    s || vs.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Ds()), i.map = s, i.key = n), i.track();
  }
}
function nt(e, t, n, s, i, o) {
  const l = vs.get(e);
  if (!l) {
    ln++;
    return;
  }
  const r = (a) => {
    a && a.trigger();
  };
  if (Ls(), t === "clear")
    l.forEach(r);
  else {
    const a = k(e), f = a && Vs(n);
    if (a && n === "length") {
      const u = Number(s);
      l.forEach((h, S) => {
        (S === "length" || S === an || !Ze(S) && S >= u) && r(h);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && r(l.get(n)), f && r(l.get(an)), t) {
        case "add":
          a ? f && r(l.get("length")) : (r(l.get(yt)), Gt(e) && r(l.get(_s)));
          break;
        case "delete":
          a || (r(l.get(yt)), Gt(e) && r(l.get(_s)));
          break;
        case "set":
          Gt(e) && r(l.get(yt));
          break;
      }
  }
  Os();
}
function Mt(e) {
  const t = /* @__PURE__ */ J(e);
  return t === e ? t : (ve(t, "iterate", an), /* @__PURE__ */ Pe(e) ? t : t.map(De));
}
function Kn(e) {
  return ve(e = /* @__PURE__ */ J(e), "iterate", an), e;
}
function We(e, t) {
  return /* @__PURE__ */ ot(e) ? $t(/* @__PURE__ */ bt(e) ? De(t) : t) : De(t);
}
const Ar = {
  __proto__: null,
  [Symbol.iterator]() {
    return ns(this, Symbol.iterator, (e) => We(this, e));
  },
  concat(...e) {
    return Mt(this).concat(
      ...e.map((t) => k(t) ? Mt(t) : t)
    );
  },
  entries() {
    return ns(this, "entries", (e) => (e[1] = We(this, e[1]), e));
  },
  every(e, t) {
    return Qe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Qe(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => We(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Qe(
      this,
      "find",
      e,
      t,
      (n) => We(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Qe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Qe(
      this,
      "findLast",
      e,
      t,
      (n) => We(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Qe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Qe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ss(this, "includes", e);
  },
  indexOf(...e) {
    return ss(this, "indexOf", e);
  },
  join(e) {
    return Mt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ss(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Qe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Jt(this, "pop");
  },
  push(...e) {
    return Jt(this, "push", e);
  },
  reduce(e, ...t) {
    return ti(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ti(this, "reduceRight", e, t);
  },
  shift() {
    return Jt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Qe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Jt(this, "splice", e);
  },
  toReversed() {
    return Mt(this).toReversed();
  },
  toSorted(e) {
    return Mt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Mt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Jt(this, "unshift", e);
  },
  values() {
    return ns(this, "values", (e) => We(this, e));
  }
};
function ns(e, t, n) {
  const s = Kn(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ Pe(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const Ir = Array.prototype;
function Qe(e, t, n, s, i, o) {
  const l = Kn(e), r = l !== e && !/* @__PURE__ */ Pe(e), a = l[t];
  if (a !== Ir[t]) {
    const h = a.apply(e, o);
    return r ? De(h) : h;
  }
  let f = n;
  l !== e && (r ? f = function(h, S) {
    return n.call(this, We(e, h), S, e);
  } : n.length > 2 && (f = function(h, S) {
    return n.call(this, h, S, e);
  }));
  const u = a.call(l, f, s);
  return r && i ? i(u) : u;
}
function ti(e, t, n, s) {
  const i = Kn(e), o = i !== e && !/* @__PURE__ */ Pe(e);
  let l = n, r = !1;
  i !== e && (o ? (r = s.length === 0, l = function(f, u, h) {
    return r && (r = !1, f = We(e, f)), n.call(this, f, We(e, u), h, e);
  }) : n.length > 3 && (l = function(f, u, h) {
    return n.call(this, f, u, h, e);
  }));
  const a = i[t](l, ...s);
  return r ? We(e, a) : a;
}
function ss(e, t, n) {
  const s = /* @__PURE__ */ J(e);
  ve(s, "iterate", an);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ ks(n[0]) ? (n[0] = /* @__PURE__ */ J(n[0]), s[t](...n)) : i;
}
function Jt(e, t, n = []) {
  St(), Ls();
  const s = (/* @__PURE__ */ J(e))[t].apply(e, n);
  return Os(), Et(), s;
}
const Rr = /* @__PURE__ */ Ps("__proto__,__v_isRef,__isVue"), ao = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ze)
);
function Pr(e) {
  Ze(e) || (e = String(e));
  const t = /* @__PURE__ */ J(this);
  return ve(t, "has", e), t.hasOwnProperty(e);
}
class co {
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
      return s === (i ? o ? kr : mo : o ? po : fo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = k(t);
    if (!i) {
      let a;
      if (l && (a = Ar[n]))
        return a;
      if (n === "hasOwnProperty")
        return Pr;
    }
    const r = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ xe(t) ? t : s
    );
    if ((Ze(n) ? ao.has(n) : Rr(n)) || (i || ve(t, "get", n), o))
      return r;
    if (/* @__PURE__ */ xe(r)) {
      const a = l && Vs(n) ? r : r.value;
      return i && re(a) ? /* @__PURE__ */ bs(a) : a;
    }
    return re(r) ? i ? /* @__PURE__ */ bs(r) : /* @__PURE__ */ Cn(r) : r;
  }
}
class uo extends co {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let o = t[n];
    const l = k(t) && Vs(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ ot(o);
      if (!/* @__PURE__ */ Pe(s) && !/* @__PURE__ */ ot(s) && (o = /* @__PURE__ */ J(o), s = /* @__PURE__ */ J(s)), !l && /* @__PURE__ */ xe(o) && !/* @__PURE__ */ xe(s))
        return f || (o.value = s), !0;
    }
    const r = l ? Number(n) < t.length : ee(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ xe(t) ? t : i
    );
    return t === /* @__PURE__ */ J(i) && a && (r ? Xe(s, o) && nt(t, "set", n, s) : nt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = ee(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && nt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ze(n) || !ao.has(n)) && ve(t, "has", n), s;
  }
  ownKeys(t) {
    return ve(
      t,
      "iterate",
      k(t) ? "length" : yt
    ), Reflect.ownKeys(t);
  }
}
class Vr extends co {
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
const Gr = /* @__PURE__ */ new uo(), Nr = /* @__PURE__ */ new Vr(), Lr = /* @__PURE__ */ new uo(!0);
const ys = (e) => e, _n = (e) => Reflect.getPrototypeOf(e);
function Or(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, o = /* @__PURE__ */ J(i), l = Gt(o), r = e === "entries" || e === Symbol.iterator && l, a = e === "keys" && l, f = i[e](...s), u = n ? ys : t ? $t : De;
    return !t && ve(
      o,
      "iterate",
      a ? _s : yt
    ), je(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: h, done: S } = f.next();
          return S ? { value: h, done: S } : {
            value: r ? [u(h[0]), u(h[1])] : u(h),
            done: S
          };
        }
      }
    );
  };
}
function yn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $r(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, l = /* @__PURE__ */ J(o), r = /* @__PURE__ */ J(i);
      e || (Xe(i, r) && ve(l, "get", i), ve(l, "get", r));
      const { has: a } = _n(l), f = t ? ys : e ? $t : De;
      if (a.call(l, i))
        return f(o.get(i));
      if (a.call(l, r))
        return f(o.get(r));
      o !== l && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ve(/* @__PURE__ */ J(i), "iterate", yt), i.size;
    },
    has(i) {
      const o = this.__v_raw, l = /* @__PURE__ */ J(o), r = /* @__PURE__ */ J(i);
      return e || (Xe(i, r) && ve(l, "has", i), ve(l, "has", r)), i === r ? o.has(i) : o.has(i) || o.has(r);
    },
    forEach(i, o) {
      const l = this, r = l.__v_raw, a = /* @__PURE__ */ J(r), f = t ? ys : e ? $t : De;
      return !e && ve(a, "iterate", yt), r.forEach((u, h) => i.call(o, f(u), f(h), l));
    }
  };
  return je(
    n,
    e ? {
      add: yn("add"),
      set: yn("set"),
      delete: yn("delete"),
      clear: yn("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ J(this), l = _n(o), r = /* @__PURE__ */ J(i), a = !t && !/* @__PURE__ */ Pe(i) && !/* @__PURE__ */ ot(i) ? r : i;
        return l.has.call(o, a) || Xe(i, a) && l.has.call(o, i) || Xe(r, a) && l.has.call(o, r) || (o.add(a), nt(o, "add", a, a)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Pe(o) && !/* @__PURE__ */ ot(o) && (o = /* @__PURE__ */ J(o));
        const l = /* @__PURE__ */ J(this), { has: r, get: a } = _n(l);
        let f = r.call(l, i);
        f || (i = /* @__PURE__ */ J(i), f = r.call(l, i));
        const u = a.call(l, i);
        return l.set(i, o), f ? Xe(o, u) && nt(l, "set", i, o) : nt(l, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ J(this), { has: l, get: r } = _n(o);
        let a = l.call(o, i);
        a || (i = /* @__PURE__ */ J(i), a = l.call(o, i)), r && r.call(o, i);
        const f = o.delete(i);
        return a && nt(o, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ J(this), o = i.size !== 0, l = i.clear();
        return o && nt(
          i,
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
  ].forEach((i) => {
    n[i] = Or(i, e, t);
  }), n;
}
function js(e, t) {
  const n = $r(e, t);
  return (s, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    ee(n, i) && i in s ? n : s,
    i,
    o
  );
}
const Dr = {
  get: /* @__PURE__ */ js(!1, !1)
}, jr = {
  get: /* @__PURE__ */ js(!1, !0)
}, Ur = {
  get: /* @__PURE__ */ js(!0, !1)
};
const fo = /* @__PURE__ */ new WeakMap(), po = /* @__PURE__ */ new WeakMap(), mo = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap();
function Fr(e) {
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
function Cn(e) {
  return /* @__PURE__ */ ot(e) ? e : Us(
    e,
    !1,
    Gr,
    Dr,
    fo
  );
}
// @__NO_SIDE_EFFECTS__
function Br(e) {
  return Us(
    e,
    !1,
    Lr,
    jr,
    po
  );
}
// @__NO_SIDE_EFFECTS__
function bs(e) {
  return Us(
    e,
    !0,
    Nr,
    Ur,
    mo
  );
}
function Us(e, t, n, s, i) {
  if (!re(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const l = Fr(mr(e));
  if (l === 0)
    return e;
  const r = new Proxy(
    e,
    l === 2 ? s : n
  );
  return i.set(e, r), r;
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  return /* @__PURE__ */ ot(e) ? /* @__PURE__ */ bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ot(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ks(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function J(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ J(t) : e;
}
function Hr(e) {
  return !ee(e, "__v_skip") && Object.isExtensible(e) && Yi(e, "__v_skip", !0), e;
}
const De = (e) => re(e) ? /* @__PURE__ */ Cn(e) : e, $t = (e) => re(e) ? /* @__PURE__ */ bs(e) : e;
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function At(e) {
  return Kr(e, !1);
}
function Kr(e, t) {
  return /* @__PURE__ */ xe(e) ? e : new zr(e, t);
}
class zr {
  constructor(t, n) {
    this.dep = new Ds(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ J(t), this._value = n ? t : De(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Pe(t) || /* @__PURE__ */ ot(t);
    t = s ? t : /* @__PURE__ */ J(t), Xe(t, n) && (this._rawValue = t, this._value = s ? t : De(t), this.dep.trigger());
  }
}
function Rt(e) {
  return /* @__PURE__ */ xe(e) ? e.value : e;
}
const Wr = {
  get: (e, t, n) => t === "__v_raw" ? e : Rt(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ xe(i) && !/* @__PURE__ */ xe(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ho(e) {
  return /* @__PURE__ */ bt(e) ? e : new Proxy(e, Wr);
}
class Jr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ds(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ln - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    se !== this)
      return no(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return oo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Xr(e, t, n = !1) {
  let s, i;
  return Q(e) ? s = e : (s = e.get, i = e.set), new Jr(s, i, n);
}
const bn = {}, Mn = /* @__PURE__ */ new WeakMap();
let vt;
function Yr(e, t = !1, n = vt) {
  if (n) {
    let s = Mn.get(n);
    s || Mn.set(n, s = []), s.push(e);
  }
}
function Zr(e, t, n = oe) {
  const { immediate: s, deep: i, once: o, scheduler: l, augmentJob: r, call: a } = n, f = (N) => i ? N : /* @__PURE__ */ Pe(N) || i === !1 || i === 0 ? st(N, 1) : st(N);
  let u, h, S, E, $ = !1, C = !1;
  if (/* @__PURE__ */ xe(e) ? (h = () => e.value, $ = /* @__PURE__ */ Pe(e)) : /* @__PURE__ */ bt(e) ? (h = () => f(e), $ = !0) : k(e) ? (C = !0, $ = e.some((N) => /* @__PURE__ */ bt(N) || /* @__PURE__ */ Pe(N)), h = () => e.map((N) => {
    if (/* @__PURE__ */ xe(N))
      return N.value;
    if (/* @__PURE__ */ bt(N))
      return f(N);
    if (Q(N))
      return a ? a(N, 2) : N();
  })) : Q(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (S) {
      St();
      try {
        S();
      } finally {
        Et();
      }
    }
    const N = vt;
    vt = u;
    try {
      return a ? a(e, 3, [E]) : e(E);
    } finally {
      vt = N;
    }
  } : h = _t, t && i) {
    const N = h, P = i === !0 ? 1 / 0 : i;
    h = () => st(N(), P);
  }
  const R = Tr(), G = () => {
    u.stop(), R && R.active && Ki(R.effects, u);
  };
  if (o && t) {
    const N = t;
    t = (...P) => {
      const H = N(...P);
      return G(), H;
    };
  }
  let D = C ? new Array(e.length).fill(bn) : bn;
  const X = (N) => {
    if (!(!(u.flags & 1) || !u.dirty && !N))
      if (t) {
        const P = u.run();
        if (N || i || $ || (C ? P.some((H, te) => Xe(H, D[te])) : Xe(P, D))) {
          S && S();
          const H = vt;
          vt = u;
          try {
            const te = [
              P,
              // pass undefined as the old value when it's changed for the first time
              D === bn ? void 0 : C && D[0] === bn ? [] : D,
              E
            ];
            D = P, a ? a(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            vt = H;
          }
        }
      } else
        u.run();
  };
  return r && r(X), u = new eo(h), u.scheduler = l ? () => l(X, !1) : X, E = (N) => Yr(N, !1, u), S = u.onStop = () => {
    const N = Mn.get(u);
    if (N) {
      if (a)
        a(N, 4);
      else
        for (const P of N) P();
      Mn.delete(u);
    }
  }, t ? s ? X(!0) : D = u.run() : l ? l(X.bind(null, !0), !0) : u.run(), G.pause = u.pause.bind(u), G.resume = u.resume.bind(u), G.stop = G, G;
}
function st(e, t = 1 / 0, n) {
  if (t <= 0 || !re(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ xe(e))
    st(e.value, t, n);
  else if (k(e))
    for (let s = 0; s < e.length; s++)
      st(e[s], t, n);
  else if (kt(e) || Gt(e))
    e.forEach((s) => {
      st(s, t, n);
    });
  else if (Ji(e)) {
    for (const s in e)
      st(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && st(e[s], t, n);
  }
  return e;
}
function hn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    zn(i, t, n);
  }
}
function rt(e, t, n, s) {
  if (Q(e)) {
    const i = hn(e, t, n, s);
    return i && zi(i) && i.catch((o) => {
      zn(o, t, n);
    }), i;
  }
  if (k(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(rt(e[o], t, n, s));
    return i;
  }
}
function zn(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: l } = t && t.appContext.config || oe;
  if (t) {
    let r = t.parent;
    const a = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, a, f) === !1)
            return;
      }
      r = r.parent;
    }
    if (o) {
      St(), hn(o, null, 10, [
        e,
        a,
        f
      ]), Et();
      return;
    }
  }
  Qr(e, n, i, s, l);
}
function Qr(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const ye = [];
let ze = -1;
const Nt = [];
let ut = null, Pt = 0;
const go = /* @__PURE__ */ Promise.resolve();
let An = null;
function vo(e) {
  const t = An || go;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function qr(e) {
  let t = ze + 1, n = ye.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = ye[s], o = cn(i);
    o < e || o === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = cn(e), n = ye[ye.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= cn(n) ? ye.push(e) : ye.splice(qr(t), 0, e), e.flags |= 1, _o();
  }
}
function _o() {
  An || (An = go.then(bo));
}
function el(e) {
  if (!k(e))
    ut && e.id === -1 ? ut.splice(Pt + 1, 0, e) : e.flags & 1 || (Nt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Nt.push(e[t]);
  _o();
}
function ni(e, t, n = ze + 1) {
  for (; n < ye.length; n++) {
    const s = ye[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ye.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function yo(e) {
  if (Nt.length) {
    const t = [...new Set(Nt)].sort(
      (n, s) => cn(n) - cn(s)
    );
    if (Nt.length = 0, ut) {
      for (let n = 0; n < t.length; n++)
        ut.push(t[n]);
      return;
    }
    for (ut = t, Pt = 0; Pt < ut.length; Pt++) {
      const n = ut[Pt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ut = null, Pt = 0;
  }
}
const cn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function bo(e) {
  try {
    for (ze = 0; ze < ye.length; ze++) {
      const t = ye[ze];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), hn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ze < ye.length; ze++) {
      const t = ye[ze];
      t && (t.flags &= -2);
    }
    ze = -1, ye.length = 0, yo(), An = null, (ye.length || Nt.length) && bo();
  }
}
let Re = null, xo = null;
function In(e) {
  const t = Re;
  return Re = e, xo = e && e.type.__scopeId || null, t;
}
function tl(e, t = Re, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && ci(-1);
    const o = In(t), l = xt.length;
    let r;
    try {
      r = e(...i);
    } finally {
      for (let a = xt.length; a > l; a--) $o();
      In(o), s._d && ci(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function F(e, t) {
  if (Re === null)
    return e;
  const n = Yn(Re), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, l, r, a = oe] = t[i];
    o && (Q(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && st(l), s.push({
      dir: o,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: r,
      modifiers: a
    }));
  }
  return e;
}
function ht(e, t, n, s) {
  const i = e.dirs, o = t && t.dirs;
  for (let l = 0; l < i.length; l++) {
    const r = i[l];
    o && (r.oldValue = o[l].value);
    let a = r.dir[s];
    a && (St(), rt(a, n, 8, [
      e.el,
      r,
      e,
      t
    ]), Et());
  }
}
function nl(e, t, n = !1) {
  const s = Ul();
  if (s || Lt) {
    let i = Lt ? Lt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && Q(t) ? t.call(s && s.proxy) : t;
  }
}
const sl = /* @__PURE__ */ Symbol.for("v-scx"), il = () => nl(sl);
function ol(e, t, n) {
  return rl(e, t, n);
}
function rl(e, t, n = oe) {
  const { immediate: s, deep: i, flush: o, once: l } = n, r = je({}, n), a = t && s || !t && o !== "post";
  let f;
  if (Gn) {
    if (o === "sync") {
      const E = il();
      f = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!a) {
      const E = () => {
      };
      return E.stop = _t, E.resume = _t, E.pause = _t, E;
    }
  }
  const u = jt;
  r.call = (E, $, C) => rt(E, u, $, C);
  let h = !1;
  o === "post" ? r.scheduler = (E) => {
    Se(E, u && u.suspense);
  } : o !== "sync" && (h = !0, r.scheduler = (E, $) => {
    $ ? E() : Fs(E);
  }), r.augmentJob = (E) => {
    t && (E.flags |= 4), h && (E.flags |= 2, u && (E.id = u.uid, E.i = u));
  };
  const S = Zr(e, t, r);
  return Gn && (f ? f.push(S) : a && S()), S;
}
const ll = /* @__PURE__ */ Symbol("_vte"), Wn = (e) => e.__isTeleport, is = /* @__PURE__ */ Symbol("_leaveCb");
function al(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== lt) {
        t = n;
        break;
      }
  }
  return t;
}
function So(e) {
  if (!Eo(e))
    return Wn(e.type) && e.children ? al(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Q(n.default))
      return n.default();
  }
}
function Bs(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Bs(
      Wn(n.type) && So(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function cl(e, t) {
  return Q(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    je({ name: e.name }, t, { setup: e })
  ) : e;
}
function ul(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function si(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Rn = /* @__PURE__ */ new WeakMap();
function nn(e, t, n, s, i = !1) {
  if (k(e)) {
    e.forEach(
      (C, R) => nn(
        C,
        t && (k(t) ? t[R] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (sn(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && nn(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? Yn(s.component) : s.el, l = i ? null : o, { i: r, r: a } = e, f = t && t.r, u = r.refs === oe ? r.refs = {} : r.refs, h = r.setupState, S = /* @__PURE__ */ J(h), E = h === oe ? Hi : (C) => si(u, C) ? !1 : ee(S, C), $ = (C, R) => !(R && si(u, R));
  if (f != null && f !== a) {
    if (ii(t), fe(f))
      u[f] = null, E(f) && (h[f] = null);
    else if (/* @__PURE__ */ xe(f)) {
      const C = t;
      $(f, C.k) && (f.value = null), C.k && (u[C.k] = null);
    }
  }
  if (Q(a))
    hn(a, r, 12, [l, u]);
  else {
    const C = fe(a), R = /* @__PURE__ */ xe(a);
    if (C || R) {
      const G = () => {
        if (e.f) {
          const D = C ? E(a) ? h[a] : u[a] : $() || !e.k ? a.value : u[e.k];
          if (i)
            k(D) && Ki(D, o);
          else if (k(D))
            D.includes(o) || D.push(o);
          else if (C)
            u[a] = [o], E(a) && (h[a] = u[a]);
          else {
            const X = [o];
            $(a, e.k) && (a.value = X), e.k && (u[e.k] = X);
          }
        } else C ? (u[a] = l, E(a) && (h[a] = l)) : R && ($(a, e.k) && (a.value = l), e.k && (u[e.k] = l));
      };
      if (l) {
        const D = () => {
          G(), Rn.delete(e);
        };
        D.id = -1, Rn.set(e, D), Se(D, n);
      } else
        ii(e), G();
    }
  }
}
function ii(e) {
  const t = Rn.get(e);
  t && (t.flags |= 8, Rn.delete(e));
}
Bn().requestIdleCallback;
Bn().cancelIdleCallback;
const sn = (e) => !!e.type.__asyncLoader, Eo = (e) => e.type.__isKeepAlive, fl = /* @__PURE__ */ Symbol.for("v-ndc");
function _e(e, t, n, s) {
  let i;
  const o = n, l = k(e);
  if (l || fe(e)) {
    const r = l && /* @__PURE__ */ bt(e);
    let a = !1, f = !1;
    r && (a = !/* @__PURE__ */ Pe(e), f = /* @__PURE__ */ ot(e), e = Kn(e)), i = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      i[u] = t(
        a ? f ? $t(De(e[u])) : De(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let r = 0; r < e; r++)
      i[r] = t(r + 1, r, void 0, o);
  } else if (re(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (r, a) => t(r, a, void 0, o)
      );
    else {
      const r = Object.keys(e);
      i = new Array(r.length);
      for (let a = 0, f = r.length; a < f; a++) {
        const u = r[a];
        i[a] = t(e[u], u, a, o);
      }
    }
  else
    i = [];
  return i;
}
const xs = (e) => e ? Fo(e) ? Yn(e) : xs(e.parent) : null, on = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ je(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => xs(e.parent),
    $root: (e) => xs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = vo.bind(e.proxy)),
    $watch: (e) => _t
  })
), os = (e, t) => e !== oe && !e.__isScriptSetup && ee(e, t), dl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: o, accessCache: l, type: r, appContext: a } = e;
    if (t[0] !== "$") {
      const S = l[t];
      if (S !== void 0)
        switch (S) {
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
        if (os(s, t))
          return l[t] = 1, s[t];
        if (ee(o, t))
          return l[t] = 3, o[t];
        if (n !== oe && ee(n, t))
          return l[t] = 4, n[t];
        l[t] = 0;
      }
    }
    const f = on[t];
    let u, h;
    if (f)
      return t === "$attrs" && ve(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (u = r.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== oe && ee(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, ee(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: o } = e;
    return os(i, t) ? (i[t] = n, !0) : ee(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: o, type: l }
  }, r) {
    let a;
    return !!(n[r] || os(t, r) || ee(o, r) || ee(s, r) || ee(on, r) || ee(i.config.globalProperties, r) || (a = l.__cssModules) && a[r]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ee(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function wo() {
  return {
    app: null,
    config: {
      isNativeTag: Hi,
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
let pl = 0;
function ml(e, t) {
  return function(s, i = null) {
    Q(s) || (s = je({}, s)), i != null && !re(i) && (i = null);
    const o = wo(), l = /* @__PURE__ */ new WeakSet(), r = [];
    let a = !1;
    const f = o.app = {
      _uid: pl++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: zl,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return l.has(u) || (u && Q(u.install) ? (l.add(u), u.install(f, ...h)) : Q(u) && (l.add(u), u(f, ...h))), f;
      },
      mixin(u) {
        return f;
      },
      component(u, h) {
        return h ? (o.components[u] = h, f) : o.components[u];
      },
      directive(u, h) {
        return h ? (o.directives[u] = h, f) : o.directives[u];
      },
      mount(u, h, S) {
        if (!a) {
          const E = f._ceVNode || it(s, i);
          return E.appContext = o, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(E, u, S), a = !0, f._container = u, u.__vue_app__ = f, Yn(E.component);
        }
      },
      onUnmount(u) {
        r.push(u);
      },
      unmount() {
        a && (rt(
          r,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(u, h) {
        return o.provides[u] = h, f;
      },
      runWithContext(u) {
        const h = Lt;
        Lt = f;
        try {
          return u();
        } finally {
          Lt = h;
        }
      }
    };
    return f;
  };
}
let Lt = null;
const hl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Oe(t)}Modifiers`] || e[`${wt(t)}Modifiers`];
function gl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || oe;
  let i = n;
  const o = t.startsWith("update:"), l = o && hl(s, t.slice(7));
  l && (l.trim && (i = n.map((u) => fe(u) ? u.trim() : u)), l.number && (i = n.map(Fn)));
  let r, a = s[r = qn(t)] || // also try camelCase event handler (#2249)
  s[r = qn(Oe(t))];
  !a && o && (a = s[r = qn(wt(t))]), a && rt(
    a,
    e,
    6,
    i
  );
  const f = s[r + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[r])
      return;
    e.emitted[r] = !0, rt(
      f,
      e,
      6,
      i
    );
  }
}
function vl(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let l = {};
  return o ? (k(o) ? o.forEach((r) => l[r] = null) : je(l, o), re(e) && s.set(e, l), l) : (re(e) && s.set(e, null), null);
}
function Jn(e, t) {
  return !e || !jn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ee(e, t[0].toLowerCase() + t.slice(1)) || ee(e, wt(t)) || ee(e, t));
}
function oi(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [o],
    slots: l,
    attrs: r,
    emit: a,
    render: f,
    renderCache: u,
    props: h,
    data: S,
    setupState: E,
    ctx: $,
    inheritAttrs: C
  } = e, R = In(e);
  let G, D;
  try {
    if (n.shapeFlag & 4) {
      const N = i || s, P = N;
      G = Je(
        f.call(
          P,
          N,
          u,
          h,
          E,
          S,
          $
        )
      ), D = r;
    } else {
      const N = t;
      G = Je(
        N.length > 1 ? N(
          h,
          { attrs: r, slots: l, emit: a }
        ) : N(
          h,
          null
        )
      ), D = t.props ? r : _l(r);
    }
  } catch (N) {
    xt.length = 0, zn(N, e, 1), G = it(lt);
  }
  let X = G;
  if (D && C !== !1) {
    const N = Object.keys(D), { shapeFlag: P } = X;
    N.length && P & 7 && (o && N.some(Un) && (D = yl(
      D,
      o
    )), X = Dt(X, D, !1, !0));
  }
  if (n.dirs && (X = Dt(X, null, !1, !0), X.dirs = X.dirs ? X.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const N = Wn(X.type) && So(X) || X;
    Bs(N, n.transition);
  }
  return G = X, In(R), G;
}
const _l = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || jn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, yl = (e, t) => {
  const n = {};
  for (const s in e)
    (!Un(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function bl(e, t, n) {
  const { props: s, children: i, component: o } = e, { props: l, children: r, patchFlag: a } = t, f = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? ri(s, l, f) : !!l;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const S = u[h];
        if (To(l, s, S) && !Jn(f, S))
          return !0;
      }
    }
  } else
    return (i || r) && (!r || !r.$stable) ? !0 : s === l ? !1 : s ? l ? ri(s, l, f) : !0 : !!l;
  return !1;
}
function ri(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (To(t, e, o) && !Jn(n, o))
      return !0;
  }
  return !1;
}
function To(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && re(s) && re(i) ? !Ft(s, i) : s !== i;
}
function xl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Co = {}, Mo = () => Object.create(Co), Ao = (e) => Object.getPrototypeOf(e) === Co;
function Sl(e, t, n, s = !1) {
  const i = {}, o = Mo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Io(e, t, i, o);
  for (const l in e.propsOptions[0])
    l in i || (i[l] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Br(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function El(e, t, n, s) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: l }
  } = e, r = /* @__PURE__ */ J(i), [a] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let S = u[h];
        if (Jn(e.emitsOptions, S))
          continue;
        const E = t[S];
        if (a)
          if (ee(o, S))
            E !== o[S] && (o[S] = E, f = !0);
          else {
            const $ = Oe(S);
            i[$] = Ss(
              a,
              r,
              $,
              E,
              e,
              !1
            );
          }
        else
          E !== o[S] && (o[S] = E, f = !0);
      }
    }
  } else {
    Io(e, t, i, o) && (f = !0);
    let u;
    for (const h in r)
      (!t || // for camelCase
      !ee(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = wt(h)) === h || !ee(t, u))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[h] = Ss(
        a,
        r,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (o !== r)
      for (const h in o)
        (!t || !ee(t, h)) && (delete o[h], f = !0);
  }
  f && nt(e.attrs, "set", "");
}
function Io(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let l = !1, r;
  if (t)
    for (let a in t) {
      if (qt(a))
        continue;
      const f = t[a];
      let u;
      i && ee(i, u = Oe(a)) ? !o || !o.includes(u) ? n[u] = f : (r || (r = {}))[u] = f : Jn(e.emitsOptions, a) || (!(a in s) || f !== s[a]) && (s[a] = f, l = !0);
    }
  if (o) {
    const a = /* @__PURE__ */ J(n), f = r || oe;
    for (let u = 0; u < o.length; u++) {
      const h = o[u];
      n[h] = Ss(
        i,
        a,
        h,
        f[h],
        e,
        !ee(f, h)
      );
    }
  }
  return l;
}
function Ss(e, t, n, s, i, o) {
  const l = e[n];
  if (l != null) {
    const r = ee(l, "default");
    if (r && s === void 0) {
      const a = l.default;
      if (l.type !== Function && !l.skipFactory && Q(a)) {
        const { propsDefaults: f } = i;
        if (n in f)
          s = f[n];
        else {
          const u = ko(i);
          s = f[n] = a.call(
            null,
            t
          ), u();
        }
      } else
        s = a;
      i.ce && i.ce._setProp(n, s);
    }
    l[
      0
      /* shouldCast */
    ] && (o && !r ? s = !1 : l[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === wt(n)) && (s = !0));
  }
  return s;
}
function wl(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const o = e.props, l = {}, r = [];
  if (!o)
    return re(e) && s.set(e, Vt), Vt;
  if (k(o))
    for (let f = 0; f < o.length; f++) {
      const u = Oe(o[f]);
      li(u) && (l[u] = oe);
    }
  else if (o)
    for (const f in o) {
      const u = Oe(f);
      if (li(u)) {
        const h = o[f], S = l[u] = k(h) || Q(h) ? { type: h } : je({}, h), E = S.type;
        let $ = !1, C = !0;
        if (k(E))
          for (let R = 0; R < E.length; ++R) {
            const G = E[R], D = Q(G) && G.name;
            if (D === "Boolean") {
              $ = !0;
              break;
            } else D === "String" && (C = !1);
          }
        else
          $ = Q(E) && E.name === "Boolean";
        S[
          0
          /* shouldCast */
        ] = $, S[
          1
          /* shouldCastTrue */
        ] = C, ($ || ee(S, "default")) && r.push(u);
      }
    }
  const a = [l, r];
  return re(e) && s.set(e, a), a;
}
function li(e) {
  return e[0] !== "$" && !qt(e);
}
const Hs = (e) => e === "_" || e === "_ctx" || e === "$stable", Ks = (e) => k(e) ? e.map(Je) : [Je(e)], Tl = (e, t, n) => {
  if (t._n)
    return t;
  const s = tl((...i) => Ks(t(...i)), n);
  return s._c = !1, s;
}, Ro = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Hs(i)) continue;
    const o = e[i];
    if (Q(o))
      t[i] = Tl(i, o, s);
    else if (o != null) {
      const l = Ks(o);
      t[i] = () => l;
    }
  }
}, Po = (e, t) => {
  const n = Ks(t);
  e.slots.default = () => n;
}, Vo = (e, t, n) => {
  for (const s in t)
    (n || !Hs(s)) && (e[s] = t[s]);
}, Cl = (e, t, n) => {
  const s = e.slots = Mo();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Vo(s, t, n), n && Yi(s, "_", i, !0)) : Ro(t, s);
  } else t && Po(e, t);
}, Ml = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let o = !0, l = oe;
  if (s.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? o = !1 : Vo(i, t, n) : (o = !t.$stable, Ro(t, i)), l = t;
  } else t && (Po(e, t), l = { default: 1 });
  if (o)
    for (const r in i)
      !Hs(r) && l[r] == null && delete i[r];
}, Se = Vl;
function Al(e) {
  return Il(e);
}
function Il(e, t) {
  const n = Bn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: o,
    createElement: l,
    createText: r,
    createComment: a,
    setText: f,
    setElementText: u,
    parentNode: h,
    nextSibling: S,
    setScopeId: E = _t,
    insertStaticContent: $
  } = e, C = (c, d, v, x = null, b = null, _ = null, M = void 0, T = null, w = !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !Xt(c, d) && (x = de(c), Ue(c, b, _, !0), c = null), d.patchFlag === -2 && (w = !1, d.dynamicChildren = null);
    const { type: y, ref: L, shapeFlag: I } = d;
    switch (y) {
      case Xn:
        R(c, d, v, x);
        break;
      case lt:
        G(c, d, v, x);
        break;
      case ls:
        c == null && D(d, v, x, M);
        break;
      case Z:
        Te(
          c,
          d,
          v,
          x,
          b,
          _,
          M,
          T,
          w
        );
        break;
      default:
        I & 1 ? P(
          c,
          d,
          v,
          x,
          b,
          _,
          M,
          T,
          w
        ) : I & 6 ? Ce(
          c,
          d,
          v,
          x,
          b,
          _,
          M,
          T,
          w
        ) : (I & 64 || I & 128) && y.process(
          c,
          d,
          v,
          x,
          b,
          _,
          M,
          T,
          w,
          zt
        );
    }
    L != null && b ? nn(L, c && c.ref, _, d || c, !d) : L == null && c && c.ref != null && nn(c.ref, null, _, c, !0);
  }, R = (c, d, v, x) => {
    if (c == null)
      s(
        d.el = r(d.children),
        v,
        x
      );
    else {
      const b = d.el = c.el;
      d.children !== c.children && f(b, d.children);
    }
  }, G = (c, d, v, x) => {
    c == null ? s(
      d.el = a(d.children || ""),
      v,
      x
    ) : d.el = c.el;
  }, D = (c, d, v, x) => {
    [c.el, c.anchor] = $(
      c.children,
      d,
      v,
      x,
      c.el,
      c.anchor
    );
  }, X = ({ el: c, anchor: d }, v, x) => {
    let b;
    for (; c && c !== d; )
      b = S(c), s(c, v, x), c = b;
    s(d, v, x);
  }, N = ({ el: c, anchor: d }) => {
    let v;
    for (; c && c !== d; )
      v = S(c), i(c), c = v;
    i(d);
  }, P = (c, d, v, x, b, _, M, T, w) => {
    if (d.type === "svg" ? M = "svg" : d.type === "math" && (M = "mathml"), c == null)
      H(
        d,
        v,
        x,
        b,
        _,
        M,
        T,
        w
      );
    else {
      const y = c.el && c.el._isVueCE ? c.el : null;
      try {
        y && y._beginPatch(), ce(
          c,
          d,
          b,
          _,
          M,
          T,
          w
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, H = (c, d, v, x, b, _, M, T) => {
    let w, y;
    const { props: L, shapeFlag: I, transition: V, dirs: O } = c;
    if (w = c.el = l(
      c.type,
      _,
      L && L.is,
      L
    ), I & 8 ? u(w, c.children) : I & 16 && le(
      c.children,
      w,
      null,
      x,
      b,
      rs(c, _),
      M,
      T
    ), O && ht(c, null, x, "created"), te(w, c, c.scopeId, M, x), L) {
      for (const q in L)
        q !== "value" && !qt(q) && o(w, q, null, L[q], _, x);
      "value" in L && o(w, "value", null, L.value, _), (y = L.onVnodeBeforeMount) && He(y, x, c);
    }
    O && ht(c, null, x, "beforeMount");
    const K = Rl(b, V);
    K && V.beforeEnter(w), s(w, d, v), ((y = L && L.onVnodeMounted) || K || O) && Se(() => {
      y && He(y, x, c), K && V.enter(w), O && ht(c, null, x, "mounted");
    }, b);
  }, te = (c, d, v, x, b) => {
    if (v && E(c, v), x)
      for (let _ = 0; _ < x.length; _++)
        E(c, x[_]);
    if (b) {
      let _ = b.subTree;
      if (d === _ || Oo(_.type) && (_.ssContent === d || _.ssFallback === d)) {
        const M = b.vnode;
        te(
          c,
          M,
          M.scopeId,
          M.slotScopeIds,
          b.parent
        );
      }
    }
  }, le = (c, d, v, x, b, _, M, T, w = 0) => {
    for (let y = w; y < c.length; y++) {
      const L = c[y] = T ? tt(c[y]) : Je(c[y]);
      C(
        null,
        L,
        d,
        v,
        x,
        b,
        _,
        M,
        T
      );
    }
  }, ce = (c, d, v, x, b, _, M) => {
    const T = d.el = c.el;
    let { patchFlag: w, dynamicChildren: y, dirs: L } = d;
    w |= c.patchFlag & 16;
    const I = c.props || oe, V = d.props || oe;
    let O;
    if (v && gt(v, !1), (O = V.onVnodeBeforeUpdate) && He(O, v, d, c), L && ht(d, c, v, "beforeUpdate"), v && gt(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!c.dynamicChildren || c.dynamicChildren.length !== y.length) && (w = 0, M = !1, y = null), (I.innerHTML && V.innerHTML == null || I.textContent && V.textContent == null) && u(T, ""), y ? Ve(
      c.dynamicChildren,
      y,
      T,
      v,
      x,
      rs(d, b),
      _
    ) : M || Ne(
      c,
      d,
      T,
      null,
      v,
      x,
      rs(d, b),
      _,
      !1
    ), w > 0) {
      if (w & 16)
        we(T, I, V, v, b);
      else if (w & 2 && I.class !== V.class && o(T, "class", null, V.class, b), w & 4 && o(T, "style", I.style, V.style, b), w & 8) {
        const K = d.dynamicProps;
        for (let q = 0; q < K.length; q++) {
          const Y = K[q], ue = I[Y], he = V[Y];
          (he !== ue || Y === "value") && o(T, Y, ue, he, b, v);
        }
      }
      w & 1 && c.children !== d.children && u(T, d.children);
    } else !M && y == null && we(T, I, V, v, b);
    ((O = V.onVnodeUpdated) || L) && Se(() => {
      O && He(O, v, d, c), L && ht(d, c, v, "updated");
    }, x);
  }, Ve = (c, d, v, x, b, _, M) => {
    for (let T = 0; T < d.length; T++) {
      const w = c[T], y = d[T], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === Z || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xt(w, y) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 198) ? h(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      C(
        w,
        y,
        L,
        null,
        x,
        b,
        _,
        M,
        !0
      );
    }
  }, we = (c, d, v, x, b) => {
    if (d !== v) {
      if (d !== oe)
        for (const _ in d)
          !qt(_) && !(_ in v) && o(
            c,
            _,
            d[_],
            null,
            b,
            x
          );
      for (const _ in v) {
        if (qt(_)) continue;
        const M = v[_], T = d[_];
        M !== T && _ !== "value" && o(c, _, T, M, b, x);
      }
      "value" in v && o(c, "value", d.value, v.value, b);
    }
  }, Te = (c, d, v, x, b, _, M, T, w) => {
    const y = d.el = c ? c.el : r(""), L = d.anchor = c ? c.anchor : r("");
    let { patchFlag: I, dynamicChildren: V, slotScopeIds: O } = d;
    O && (T = T ? T.concat(O) : O), c == null ? (s(y, v, x), s(L, v, x), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      v,
      L,
      b,
      _,
      M,
      T,
      w
    )) : I > 0 && I & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === V.length ? (Ve(
      c.dynamicChildren,
      V,
      v,
      b,
      _,
      M,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || b && d === b.subTree) && Go(
      c,
      d,
      !0
      /* shallow */
    )) : Ne(
      c,
      d,
      v,
      L,
      b,
      _,
      M,
      T,
      w
    );
  }, Ce = (c, d, v, x, b, _, M, T, w) => {
    d.slotScopeIds = T, c == null ? d.shapeFlag & 512 ? b.ctx.activate(
      d,
      v,
      x,
      M,
      w
    ) : at(
      d,
      v,
      x,
      b,
      _,
      M,
      w
    ) : Ge(c, d, w);
  }, at = (c, d, v, x, b, _, M) => {
    const T = c.component = jl(
      c,
      x,
      b
    );
    if (Eo(c) && (T.ctx.renderer = zt), kl(T, !1, M), T.asyncDep) {
      if (b && b.registerDep(T, Tt, M), !c.el) {
        const w = T.subTree = it(lt);
        G(null, w, d, v), c.placeholder = w.el;
      }
    } else
      Tt(
        T,
        c,
        d,
        v,
        b,
        _,
        M
      );
  }, Ge = (c, d, v) => {
    const x = d.component = c.component;
    if (bl(c, d, v))
      if (x.asyncDep && !x.asyncResolved) {
        ne(x, d, v);
        return;
      } else
        x.next = d, x.update();
    else
      d.el = c.el, x.vnode = d;
  }, Tt = (c, d, v, x, b, _, M) => {
    const T = () => {
      if (c.isMounted) {
        let { next: I, bu: V, u: O, parent: K, vnode: q } = c;
        {
          const Fe = No(c);
          if (Fe) {
            I && (I.el = q.el, ne(c, I, M)), Fe.asyncDep.then(() => {
              Se(() => {
                c.isUnmounted || y();
              }, b);
            });
            return;
          }
        }
        let Y = I, ue;
        gt(c, !1), I ? (I.el = q.el, ne(c, I, M)) : I = q, V && Sn(V), (ue = I.props && I.props.onVnodeBeforeUpdate) && He(ue, K, I, q), gt(c, !0);
        const he = oi(c), ke = c.subTree;
        c.subTree = he, C(
          ke,
          he,
          // parent may have changed if it's in a teleport
          h(ke.el),
          // anchor may have changed if it's in a fragment
          de(ke),
          c,
          b,
          _
        ), I.el = he.el, Y === null && xl(c, he.el), O && Se(O, b), (ue = I.props && I.props.onVnodeUpdated) && Se(
          () => He(ue, K, I, q),
          b
        );
      } else {
        let I;
        const { el: V, props: O } = d, { bm: K, m: q, parent: Y, root: ue, type: he } = c, ke = sn(d);
        gt(c, !1), K && Sn(K), !ke && (I = O && O.onVnodeBeforeMount) && He(I, Y, d), gt(c, !0);
        {
          ue.ce && ue.ce._hasShadowRoot() && ue.ce._injectChildStyle(
            he,
            c.parent ? c.parent.type : void 0
          );
          const Fe = c.subTree = oi(c);
          C(
            null,
            Fe,
            v,
            x,
            c,
            b,
            _
          ), d.el = Fe.el;
        }
        if (q && Se(q, b), !ke && (I = O && O.onVnodeMounted)) {
          const Fe = d;
          Se(
            () => He(I, Y, Fe),
            b
          );
        }
        (d.shapeFlag & 256 || Y && sn(Y.vnode) && Y.vnode.shapeFlag & 256) && c.a && Se(c.a, b), c.isMounted = !0, d = v = x = null;
      }
    };
    c.scope.on();
    const w = c.effect = new eo(T);
    c.scope.off();
    const y = c.update = w.run.bind(w), L = c.job = w.runIfDirty.bind(w);
    L.i = c, L.id = c.uid, w.scheduler = () => Fs(L), gt(c, !0), y();
  }, ne = (c, d, v) => {
    d.component = c;
    const x = c.vnode.props;
    c.vnode = d, c.next = null, El(c, d.props, x, v), Ml(c, d.children, v), St(), ni(c), Et();
  }, Ne = (c, d, v, x, b, _, M, T, w = !1) => {
    const y = c && c.children, L = c ? c.shapeFlag : 0, I = d.children, { patchFlag: V, shapeFlag: O } = d;
    if (V > 0) {
      if (V & 128) {
        ct(
          y,
          I,
          v,
          x,
          b,
          _,
          M,
          T,
          w
        );
        return;
      } else if (V & 256) {
        mt(
          y,
          I,
          v,
          x,
          b,
          _,
          M,
          T,
          w
        );
        return;
      }
    }
    O & 8 ? (L & 16 && m(y, b, _), I !== y && u(v, I)) : L & 16 ? O & 16 ? ct(
      y,
      I,
      v,
      x,
      b,
      _,
      M,
      T,
      w
    ) : m(y, b, _, !0) : (L & 8 && u(v, ""), O & 16 && le(
      I,
      v,
      x,
      b,
      _,
      M,
      T,
      w
    ));
  }, mt = (c, d, v, x, b, _, M, T, w) => {
    c = c || Vt, d = d || Vt;
    const y = c.length, L = d.length, I = Math.min(y, L);
    let V;
    for (V = 0; V < I; V++) {
      const O = d[V] = w ? tt(d[V]) : Je(d[V]);
      C(
        c[V],
        O,
        v,
        null,
        b,
        _,
        M,
        T,
        w
      );
    }
    y > L ? m(
      c,
      b,
      _,
      !0,
      !1,
      I
    ) : le(
      d,
      v,
      x,
      b,
      _,
      M,
      T,
      w,
      I
    );
  }, ct = (c, d, v, x, b, _, M, T, w) => {
    let y = 0;
    const L = d.length;
    let I = c.length - 1, V = L - 1;
    for (; y <= I && y <= V; ) {
      const O = c[y], K = d[y] = w ? tt(d[y]) : Je(d[y]);
      if (Xt(O, K))
        C(
          O,
          K,
          v,
          null,
          b,
          _,
          M,
          T,
          w
        );
      else
        break;
      y++;
    }
    for (; y <= I && y <= V; ) {
      const O = c[I], K = d[V] = w ? tt(d[V]) : Je(d[V]);
      if (Xt(O, K))
        C(
          O,
          K,
          v,
          null,
          b,
          _,
          M,
          T,
          w
        );
      else
        break;
      I--, V--;
    }
    if (y > I) {
      if (y <= V) {
        const O = V + 1, K = O < L ? d[O].el : x;
        for (; y <= V; )
          C(
            null,
            d[y] = w ? tt(d[y]) : Je(d[y]),
            v,
            K,
            b,
            _,
            M,
            T,
            w
          ), y++;
      }
    } else if (y > V)
      for (; y <= I; )
        Ue(c[y], b, _, !0), y++;
    else {
      const O = y, K = y, q = /* @__PURE__ */ new Map();
      for (y = K; y <= V; y++) {
        const Me = d[y] = w ? tt(d[y]) : Je(d[y]);
        Me.key != null && q.set(Me.key, y);
      }
      let Y, ue = 0;
      const he = V - K + 1;
      let ke = !1, Fe = 0;
      const Wt = new Array(he);
      for (y = 0; y < he; y++) Wt[y] = 0;
      for (y = O; y <= I; y++) {
        const Me = c[y];
        if (ue >= he) {
          Ue(Me, b, _, !0);
          continue;
        }
        let Be;
        if (Me.key != null)
          Be = q.get(Me.key);
        else
          for (Y = K; Y <= V; Y++)
            if (Wt[Y - K] === 0 && Xt(Me, d[Y])) {
              Be = Y;
              break;
            }
        Be === void 0 ? Ue(Me, b, _, !0) : (Wt[Be - K] = y + 1, Be >= Fe ? Fe = Be : ke = !0, C(
          Me,
          d[Be],
          v,
          null,
          b,
          _,
          M,
          T,
          w
        ), ue++);
      }
      const Xs = ke ? Pl(Wt) : Vt;
      for (Y = Xs.length - 1, y = he - 1; y >= 0; y--) {
        const Me = K + y, Be = d[Me], Ys = d[Me + 1], Zs = Me + 1 < L ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ys.el || Lo(Ys)
        ) : x;
        Wt[y] === 0 ? C(
          null,
          Be,
          v,
          Zs,
          b,
          _,
          M,
          T,
          w
        ) : ke && (Y < 0 || y !== Xs[Y] ? Ct(Be, v, Zs, 2) : Y--);
      }
    }
  }, Ct = (c, d, v, x, b = null) => {
    const { el: _, type: M, transition: T, children: w, shapeFlag: y } = c;
    if (y & 6) {
      Ct(c.component.subTree, d, v, x);
      return;
    }
    if (y & 128) {
      c.suspense.move(d, v, x);
      return;
    }
    if (y & 64) {
      M.move(c, d, v, zt);
      return;
    }
    if (M === Z) {
      s(_, d, v);
      for (let I = 0; I < w.length; I++)
        Ct(w[I], d, v, x);
      s(c.anchor, d, v);
      return;
    }
    if (M === ls) {
      X(c, d, v);
      return;
    }
    if (x !== 2 && y & 1 && T)
      if (x === 0)
        T.persisted && !_[is] ? s(_, d, v) : (T.beforeEnter(_), s(_, d, v), Se(() => T.enter(_), b));
      else {
        const { leave: I, delayLeave: V, afterLeave: O } = T, K = () => {
          c.ctx.isUnmounted ? i(_) : s(_, d, v);
        }, q = () => {
          const Y = _._isLeaving || !!_[is];
          _._isLeaving && _[is](
            !0
            /* cancelled */
          ), T.persisted && !Y ? K() : I(_, () => {
            K(), O && O();
          });
        };
        V ? V(_, K, q) : q();
      }
    else
      s(_, d, v);
  }, Ue = (c, d, v, x = !1, b = !1) => {
    const {
      type: _,
      props: M,
      ref: T,
      children: w,
      dynamicChildren: y,
      shapeFlag: L,
      patchFlag: I,
      dirs: V,
      cacheIndex: O,
      memo: K
    } = c;
    if (I === -2 && (b = !1), T != null && (St(), nn(T, null, v, c, !0), Et()), O != null && (d.renderCache[O] = void 0), L & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const q = L & 1 && V, Y = !sn(c);
    let ue;
    if (Y && (ue = M && M.onVnodeBeforeUnmount) && He(ue, d, c), L & 6)
      p(c.component, v, x);
    else {
      if (L & 128) {
        c.suspense.unmount(v, x);
        return;
      }
      q && ht(c, null, d, "beforeUnmount"), L & 64 ? c.type.remove(
        c,
        d,
        v,
        zt,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Z || I > 0 && I & 64) ? m(
        y,
        d,
        v,
        !1,
        !0
      ) : (_ === Z && I & 384 || !b && L & 16) && m(w, d, v), x && vn(c);
    }
    const he = K != null && O == null;
    (Y && (ue = M && M.onVnodeUnmounted) || q || he) && Se(() => {
      ue && He(ue, d, c), q && ht(c, null, d, "unmounted"), he && (c.el = null);
    }, v);
  }, vn = (c) => {
    const { type: d, el: v, anchor: x, transition: b } = c;
    if (d === Z) {
      A(v, x);
      return;
    }
    if (d === ls) {
      N(c);
      return;
    }
    const _ = () => {
      i(v), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: M, delayLeave: T } = b, w = () => M(v, _);
      T ? T(c.el, _, w) : w();
    } else
      _();
  }, A = (c, d) => {
    let v;
    for (; c !== d; )
      v = S(c), i(c), c = v;
    i(d);
  }, p = (c, d, v) => {
    const { bum: x, scope: b, job: _, subTree: M, um: T, m: w, a: y } = c;
    ai(w), ai(y), x && Sn(x), b.stop(), _ && (_.flags |= 8, Ue(M, c, d, v)), T && Se(T, d), Se(() => {
      c.isUnmounted = !0;
    }, d);
  }, m = (c, d, v, x = !1, b = !1, _ = 0) => {
    for (let M = _; M < c.length; M++)
      Ue(c[M], d, v, x, b);
  }, de = (c) => {
    if (c.shapeFlag & 6)
      return de(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = S(c.anchor || c.el), v = d && d[ll];
    return v ? S(v) : d;
  };
  let B = !1;
  const Js = (c, d, v) => {
    let x;
    c == null ? d._vnode && (Ue(d._vnode, null, null, !0), x = d._vnode.component) : C(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      v
    ), d._vnode = c, B || (B = !0, ni(x), yo(), B = !1);
  }, zt = {
    p: C,
    um: Ue,
    m: Ct,
    r: vn,
    mt: at,
    mc: le,
    pc: Ne,
    pbc: Ve,
    n: de,
    o: e
  };
  return {
    render: Js,
    hydrate: void 0,
    createApp: ml(Js)
  };
}
function rs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function gt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Rl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Go(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (k(s) && k(i))
    for (let o = 0; o < s.length; o++) {
      const l = s[o];
      let r = i[o];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = i[o] = tt(i[o]), r.el = l.el), !n && r.patchFlag !== -2 && Go(l, r)), r.type === Xn && (r.patchFlag === -1 && (r = i[o] = tt(r)), r.el = l.el), r.type === lt && !r.el && (r.el = l.el);
    }
}
function Pl(e) {
  const t = e.slice(), n = [0];
  let s, i, o, l, r;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const f = e[s];
    if (f !== 0) {
      if (i = n[n.length - 1], e[i] < f) {
        t[s] = i, n.push(s);
        continue;
      }
      for (o = 0, l = n.length - 1; o < l; )
        r = o + l >> 1, e[n[r]] < f ? o = r + 1 : l = r;
      f < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, l = n[o - 1]; o-- > 0; )
    n[o] = l, l = t[l];
  return n;
}
function No(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : No(t);
}
function ai(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Lo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Lo(t.subTree) : null;
}
const Oo = (e) => e.__isSuspense;
function Vl(e, t) {
  t && t.pendingBranch ? k(e) ? t.effects.push(...e) : t.effects.push(e) : el(e);
}
const Z = /* @__PURE__ */ Symbol.for("v-fgt"), Xn = /* @__PURE__ */ Symbol.for("v-txt"), lt = /* @__PURE__ */ Symbol.for("v-cmt"), ls = /* @__PURE__ */ Symbol.for("v-stc"), xt = [];
let Ae = null;
function j(e = !1) {
  xt.push(Ae = e ? null : []);
}
function $o() {
  xt.pop(), Ae = xt[xt.length - 1] || null;
}
let un = 1;
function ci(e, t = !1) {
  un += e, e < 0 && Ae && t && (Ae.hasOnce = !0);
}
function Do(e) {
  return e.dynamicChildren = un > 0 ? Ae || Vt : null, $o(), un > 0 && Ae && Ae.push(e), e;
}
function U(e, t, n, s, i, o) {
  return Do(
    g(
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
function Gl(e, t, n, s, i) {
  return Do(
    it(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function jo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Uo = ({ key: e }) => e ?? null, En = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? fe(e) || /* @__PURE__ */ xe(e) || Q(e) ? { i: Re, r: e, k: t, f: !!n } : e : null);
function g(e, t = null, n = null, s = 0, i = null, o = e === Z ? 0 : 1, l = !1, r = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Uo(t),
    ref: t && En(t),
    scopeId: xo,
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
    ctx: Re
  };
  return r ? (Pn(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= fe(n) ? 8 : 16), un > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Ae && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ae.push(a), a;
}
const it = Nl;
function Nl(e, t = null, n = null, s = 0, i = null, o = !1) {
  if ((!e || e === fl) && (e = lt), jo(e)) {
    const r = Dt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Pn(r, n), un > 0 && !o && Ae && (r.shapeFlag & 6 ? Ae[Ae.indexOf(e)] = r : Ae.push(r)), r.patchFlag = -2, r;
  }
  if (Kl(e) && (e = e.__vccOpts), t) {
    t = Ll(t);
    let { class: r, style: a } = t;
    r && !fe(r) && (t.class = Hn(r)), re(a) && (/* @__PURE__ */ ks(a) && !k(a) && (a = je({}, a)), t.style = Gs(a));
  }
  const l = fe(e) ? 1 : Oo(e) ? 128 : Wn(e) ? 64 : re(e) ? 4 : Q(e) ? 2 : 0;
  return g(
    e,
    t,
    n,
    s,
    i,
    l,
    o,
    !0
  );
}
function Ll(e) {
  return e ? /* @__PURE__ */ ks(e) || Ao(e) ? je({}, e) : e : null;
}
function Dt(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: l, children: r, transition: a } = e, f = t ? Ol(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Uo(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? k(o) ? o.concat(En(t)) : [o, En(t)] : En(t)
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
    patchFlag: t && e.type !== Z ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && Dt(e.ssContent),
    ssFallback: e.ssFallback && Dt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Bs(
    u,
    a.clone(u)
  ), u;
}
function ie(e = " ", t = 0) {
  return it(Xn, null, e, t);
}
function It(e = "", t = !1) {
  return t ? (j(), Gl(lt, null, e)) : it(lt, null, e);
}
function Je(e) {
  return e == null || typeof e == "boolean" ? it(lt) : k(e) ? it(
    Z,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : jo(e) ? tt(e) : it(Xn, null, String(e));
}
function tt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Dt(e);
}
function Pn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (k(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Pn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Ao(t) ? t._ctx = Re : i === 3 && Re && (Re.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Q(t)) {
    if (s & 65) {
      Pn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Re }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [ie(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Ol(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Hn([t.class, s.class]));
      else if (i === "style")
        t.style = Gs([t.style, s.style]);
      else if (jn(i)) {
        const o = t[i], l = s[i];
        l && o !== l && !(k(o) && o.includes(l)) ? t[i] = o ? [].concat(o, l) : l : l == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Un(i) && (t[i] = l);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function He(e, t, n, s = null) {
  rt(e, t, 7, [
    n,
    s
  ]);
}
const $l = wo();
let Dl = 0;
function jl(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || $l, o = {
    uid: Dl++,
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
    scope: new wr(
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
    propsOptions: wl(s, i),
    emitsOptions: vl(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: oe,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = gl.bind(null, o), e.ce && e.ce(o), o;
}
let jt = null;
const Ul = () => jt || Re;
let Vn, fn;
{
  const e = Bn(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (o) => {
      i.length > 1 ? i.forEach((l) => l(o)) : i[0](o);
    };
  };
  Vn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => jt = n
  ), fn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Gn = n
  );
}
const ko = (e) => {
  const t = jt;
  return Vn(e), e.scope.on(), () => {
    e.scope.off(), Vn(t);
  };
}, ui = () => {
  jt && jt.scope.off(), Vn(null);
};
function Fo(e) {
  return e.vnode.shapeFlag & 4;
}
let Gn = !1;
function kl(e, t = !1, n = !1) {
  t && fn(t);
  const { props: s, children: i } = e.vnode, o = Fo(e);
  Sl(e, s, o, t), Cl(e, i, n || t);
  const l = o ? Fl(e, t) : void 0;
  return t && fn(!1), l;
}
function Fl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, dl);
  const { setup: s } = n;
  if (s) {
    St();
    const i = e.setupContext = s.length > 1 ? Hl(e) : null, o = ko(e), l = hn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), r = zi(l);
    if (Et(), o(), (r || e.sp) && !sn(e) && ul(e), r) {
      if (l.then(ui, ui), t)
        return l.then((a) => {
          fn(!0);
          try {
            fi(e, a, t);
          } finally {
            fn(!1);
          }
        }).catch((a) => {
          zn(a, e, 0);
        });
      e.asyncDep = l;
    } else
      fi(e, l);
  } else
    Bo(e);
}
function fi(e, t, n) {
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = ho(t)), Bo(e);
}
function Bo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || _t);
}
const Bl = {
  get(e, t) {
    return ve(e, "get", ""), e[t];
  }
};
function Hl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Bl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Yn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ho(Hr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in on)
        return on[n](e);
    },
    has(t, n) {
      return n in t || n in on;
    }
  })) : e.proxy;
}
function Kl(e) {
  return Q(e) && "__vccOpts" in e;
}
const Le = (e, t) => /* @__PURE__ */ Xr(e, t, Gn), zl = "3.5.41";
let Es;
const di = typeof window < "u" && window.trustedTypes;
if (di)
  try {
    Es = /* @__PURE__ */ di.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ho = Es ? (e) => Es.createHTML(e) : (e) => e, Wl = "http://www.w3.org/2000/svg", Jl = "http://www.w3.org/1998/Math/MathML", et = typeof document < "u" ? document : null, pi = et && /* @__PURE__ */ et.createElement("template"), Xl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? et.createElementNS(Wl, e) : t === "mathml" ? et.createElementNS(Jl, e) : n ? et.createElement(e, { is: n }) : et.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => et.createTextNode(e),
  createComment: (e) => et.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => et.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, o) {
    const l = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      pi.innerHTML = Ho(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const r = pi.content;
      if (s === "svg" || s === "mathml") {
        const a = r.firstChild;
        for (; a.firstChild; )
          r.appendChild(a.firstChild);
        r.removeChild(a);
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
}, Yl = /* @__PURE__ */ Symbol("_vtc");
function Zl(e, t, n) {
  const s = e[Yl];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const mi = /* @__PURE__ */ Symbol("_vod"), Ql = /* @__PURE__ */ Symbol("_vsh"), ql = /* @__PURE__ */ Symbol(""), ea = /(?:^|;)\s*display\s*:/;
function ta(e, t, n) {
  const s = e.style, i = fe(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (fe(t))
        for (const l of t.split(";")) {
          const r = l.slice(0, l.indexOf(":")).trim();
          n[r] == null && Qt(s, r, "");
        }
      else
        for (const l in t)
          n[l] == null && Qt(s, l, "");
    for (const l in n) {
      l === "display" && (o = !0);
      const r = n[l];
      r != null ? sa(
        e,
        l,
        !fe(t) && t ? t[l] : void 0,
        r
      ) || Qt(s, l, r) : Qt(s, l, "");
    }
  } else if (i) {
    if (t !== n) {
      const l = s[ql];
      l && (n += ";" + l), s.cssText = n, o = ea.test(n);
    }
  } else t && e.removeAttribute("style");
  mi in e && (e[mi] = o ? s.display : "", e[Ql] && (s.display = "none"));
}
const hi = /\s*!important$/;
function Qt(e, t, n) {
  if (k(n))
    n.forEach((s) => Qt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = na(e, t);
    hi.test(n) ? e.setProperty(
      wt(s),
      n.replace(hi, ""),
      "important"
    ) : e[s] = n;
  }
}
const gi = ["Webkit", "Moz", "ms"], as = {};
function na(e, t) {
  const n = as[t];
  if (n)
    return n;
  let s = Oe(t);
  if (s !== "filter" && s in e)
    return as[t] = s;
  s = Xi(s);
  for (let i = 0; i < gi.length; i++) {
    const o = gi[i] + s;
    if (o in e)
      return as[t] = o;
  }
  return t;
}
function sa(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && fe(s) && n === s;
}
const vi = "http://www.w3.org/1999/xlink";
function _i(e, t, n, s, i, o = Sr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(vi, t.slice(6, t.length)) : e.setAttributeNS(vi, t, n) : n == null || o && !Zi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Ze(n) ? String(n) : n
  );
}
function yi(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ho(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const r = o === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (r !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const r = typeof e[t];
    r === "boolean" ? n = Zi(n) : n == null && r === "string" ? (n = "", l = !0) : r === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(i || t);
}
function dt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ia(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const bi = /* @__PURE__ */ Symbol("_vei");
function oa(e, t, n, s, i = null) {
  const o = e[bi] || (e[bi] = {}), l = o[t];
  if (s && l)
    l.value = s;
  else {
    const [r, a] = aa(t);
    if (s) {
      const f = o[t] = fa(
        s,
        i
      );
      dt(e, r, f, a);
    } else l && (ia(e, r, l, a), o[t] = void 0);
  }
}
const ra = /(Once|Passive|Capture)$/, la = /^on:?(?:Once|Passive|Capture)$/;
function aa(e) {
  let t, n;
  for (; (n = e.match(ra)) && !la.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : wt(e.slice(2)), t];
}
let cs = 0;
const ca = /* @__PURE__ */ Promise.resolve(), ua = () => cs || (ca.then(() => cs = 0), cs = Date.now());
function fa(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (k(i)) {
      const o = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        o.call(s), s._stopped = !0;
      };
      const l = i.slice(), r = [s];
      for (let a = 0; a < l.length && !s._stopped; a++) {
        const f = l[a];
        f && rt(
          f,
          t,
          5,
          r
        );
      }
    } else
      rt(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = ua(), n;
}
const xi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, da = (e, t, n, s, i, o) => {
  const l = i === "svg";
  t === "class" ? Zl(e, s, l) : t === "style" ? ta(e, n, s) : jn(t) ? Un(t) || oa(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : pa(e, t, s, l)) ? (yi(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _i(e, t, s, l, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ma(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !fe(s))) ? yi(e, Oe(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), _i(e, t, s, l));
};
function pa(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && xi(t) && Q(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return xi(t) && fe(n) ? !1 : t in e;
}
function ma(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Oe(t);
  return Array.isArray(n) ? n.some((i) => Oe(i) === s) : Object.keys(n).some((i) => Oe(i) === s);
}
const Ut = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return k(t) ? (n) => Sn(t, n) : t;
};
function ha(e) {
  e.target.composing = !0;
}
function Si(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ye = /* @__PURE__ */ Symbol("_assign"), xn = /* @__PURE__ */ Symbol("_initialValue");
function us(e, t, n) {
  return t && (e = e.trim()), n && (e = Fn(e)), e;
}
const pe = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[xn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[xn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Ye] = Ut(i);
    const o = s || i.props && i.props.type === "number";
    dt(e, t ? "change" : "input", (l) => {
      l.target.composing || e[Ye](us(e.value, n, o));
    }), (n || o) && dt(e, "change", () => {
      e.value = us(e.value, n, o);
    }), t || (dt(e, "compositionstart", ha), dt(e, "compositionend", Si), dt(e, "change", Si));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", o = e[xn];
    delete e[xn], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[Ye](us(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: o } }, l) {
    if (e[Ye] = Ut(l), e.composing) return;
    const r = (o || e.type === "number") && !/^0\d/.test(e.value) ? Fn(e.value) : e.value, a = t ?? "";
    if (r === a)
      return;
    const f = e.getRootNode();
    (f instanceof Document || f instanceof ShadowRoot) && f.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === a) || (e.value = a);
  }
}, Ei = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Ye] = Ut(n), dt(e, "change", () => {
      const s = e._modelValue, i = dn(e), o = e.checked, l = e[Ye];
      if (k(s)) {
        const r = Ns(s, i), a = r !== -1;
        if (o && !a)
          l(s.concat(i));
        else if (!o && a) {
          const f = [...s];
          f.splice(r, 1), l(f);
        }
      } else if (kt(s)) {
        const r = new Set(s);
        o ? r.add(i) : r.delete(i), l(r);
      } else
        l(Ko(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: wi,
  beforeUpdate(e, t, n) {
    e[Ye] = Ut(n), wi(e, t, n);
  }
};
function wi(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let i;
  if (k(t))
    i = Ns(t, s.props.value) > -1;
  else if (kt(t))
    i = t.has(s.props.value);
  else {
    if (t === n) return;
    i = Ft(t, Ko(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const me = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, dt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? Fn(dn(o)) : dn(o)
      );
      e[Ye](
        e.multiple ? kt(e._modelValue) ? new Set(i) : i : i[0]
      ), e._assigning = !0, vo(() => {
        e._assigning = !1;
      });
    }), e[Ye] = Ut(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ti(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Ye] = Ut(n);
  },
  updated(e, { value: t }) {
    e._assigning || Ti(e, t);
  }
};
function Ti(e, t) {
  const n = e.multiple, s = k(t);
  if (!(n && !s && !kt(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const l = e.options[i], r = dn(l);
      if (n)
        if (s) {
          const a = typeof r;
          a === "string" || a === "number" ? l.selected = t.some((f) => String(f) === String(r)) : l.selected = Ns(t, r) > -1;
        } else
          l.selected = t.has(r);
      else if (Ft(dn(l), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function dn(e) {
  return "_value" in e ? e._value : e.value;
}
function Ko(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const ga = /* @__PURE__ */ je({ patchProp: da }, Xl);
let Ci;
function va() {
  return Ci || (Ci = Al(ga));
}
const _a = ((...e) => {
  const t = va().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = ba(s);
    if (!i) return;
    const o = t._component;
    !Q(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const l = n(i, !1, ya(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), l;
  }, t;
});
function ya(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ba(e) {
  return fe(e) ? document.querySelector(e) : e;
}
const xa = "tavern_multi_tts_cache", Ie = "audio_cache", Sa = 1, Mi = 100, Ai = 50 * 1024 * 1024;
function Ea(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
async function wa(e) {
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
    textSplitMethod: e.localGsvi?.textSplitMethod ?? "",
    batchSize: e.localGsvi?.batchSize
  }, n = JSON.stringify(t);
  if (Object.keys(t).some((i) => /api[_-]?key|authorization|token|secret|password/i.test(i)))
    throw new Error("音频缓存键不得包含密钥字段");
  const s = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(n));
  return [...new Uint8Array(s)].map((i) => i.toString(16).padStart(2, "0")).join("");
}
function Ta() {
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
function Ca(e, t) {
  let n = null, s = null, i = 0;
  function o(r) {
    n = r, r.onversionchange = () => {
      r.close(), n === r && (n = null);
    };
    const a = r.onclose;
    return r.onclose = (f) => {
      n === r && (n = null), typeof a == "function" && a.call(r, f);
    }, r;
  }
  async function l() {
    return n || (s ? await s : (s = new Promise((r, a) => {
      const f = e.open(t, Sa);
      i += 1, f.onupgradeneeded = () => {
        const u = f.result;
        u.objectStoreNames.contains(Ie) || u.createObjectStore(Ie, { keyPath: "key" });
      }, f.onsuccess = () => r(o(f.result)), f.onerror = () => a(f.error ?? Error("IndexedDB 打开失败"));
    }).finally(() => {
      s = null;
    }), await s));
  }
  return {
    getDb: l,
    close() {
      n?.close(), n = null;
    },
    getOpenCount() {
      return i;
    }
  };
}
function Ma(e, t) {
  const n = Ca(e, t);
  async function s() {
    return await n.getDb();
  }
  return {
    async get(i) {
      const o = await s();
      return await new Promise((l, r) => {
        const f = o.transaction(Ie, "readonly").objectStore(Ie).get(i);
        f.onsuccess = () => l(f.result), f.onerror = () => r(f.error ?? Error("读取缓存失败"));
      });
    },
    async put(i) {
      const o = await s();
      await new Promise((l, r) => {
        const a = o.transaction(Ie, "readwrite");
        a.objectStore(Ie).put(i), a.oncomplete = () => l(), a.onerror = () => r(a.error ?? Error("写入缓存失败"));
      });
    },
    async delete(i) {
      const o = await s();
      await new Promise((l, r) => {
        const a = o.transaction(Ie, "readwrite");
        a.objectStore(Ie).delete(i), a.oncomplete = () => l(), a.onerror = () => r(a.error ?? Error("删除缓存失败"));
      });
    },
    async clear() {
      const i = await s();
      await new Promise((o, l) => {
        const r = i.transaction(Ie, "readwrite");
        r.objectStore(Ie).clear(), r.oncomplete = () => o(), r.onerror = () => l(r.error ?? Error("清空缓存失败"));
      });
    },
    async getAll() {
      const i = await s();
      return await new Promise((o, l) => {
        const a = i.transaction(Ie, "readonly").objectStore(Ie).openCursor(), f = [];
        a.onsuccess = () => {
          const u = a.result;
          if (!u) {
            o(f);
            return;
          }
          f.push(u.value), u.continue();
        }, a.onerror = () => l(a.error ?? Error("读取缓存记录失败"));
      });
    }
  };
}
async function Aa(e) {
  const t = await e.getAll();
  let n = t.reduce((o, l) => o + (l.blob?.size ?? 0), 0);
  if (t.length <= Mi && n <= Ai)
    return;
  const s = [...t].sort((o, l) => o.created_at - l.created_at);
  let i = t.length;
  for (const o of s) {
    if (i <= Mi && n <= Ai)
      break;
    await e.delete(o.key), i -= 1, n -= o.blob?.size ?? 0;
  }
}
function Ia(e) {
  const t = e?.backend === "memory" ? Ta() : Ma(
    e?.indexedDB ?? indexedDB,
    e?.dbName ?? xa
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
      }), await Aa(t);
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
      const o = (await t.getAll()).sort((r, a) => a.created_at - r.created_at), l = Math.max(0, (n - 1) * s);
      return {
        items: o.slice(l, l + s).map((r) => ({
          key: r.key,
          size: r.blob?.size ?? 0,
          createdAt: r.created_at
        })),
        total: o.length,
        totalBytes: o.reduce((r, a) => r + (a.blob?.size ?? 0), 0)
      };
    }
  };
}
const Zn = Ia({
  backend: typeof indexedDB > "u" ? "memory" : "indexeddb"
});
function Ra(e) {
  return Zn.get(e);
}
function Pa(e, t) {
  return Zn.set(e, t);
}
function zo() {
  return Zn.clear();
}
function Va() {
  return Zn.stats();
}
let ft = null, wn = null;
function ws() {
  ft && (ft.pause(), wn?.());
}
function Wo(e, t, n, s, i) {
  const o = URL.createObjectURL(e), l = new Audio(o);
  let r = "paused";
  const a = () => {
    URL.revokeObjectURL(o), ft === l && (ft = null, wn = null);
  }, f = () => {
    ft && ft !== l && (ft.pause(), wn?.()), ft = l, wn = a;
  };
  l.onplay = () => {
    r = "playing", t?.();
  }, l.onpause = () => {
    r === "ended" || r === "error" || (r = "paused", i?.());
  }, l.onended = () => {
    r = "ended", a(), n?.();
  }, l.onerror = (h) => {
    r = "error", a(), s?.(h);
  };
  const u = async () => {
    f();
    try {
      await l.play();
    } catch (h) {
      throw r = "error", a(), s?.(h), h;
    }
  };
  return u().catch(() => {
  }), {
    stop: () => {
      r = "ended", l.pause(), a();
    },
    pause: () => {
      r === "playing" && l.pause();
    },
    resume: u,
    restart: async () => {
      l.currentTime = 0, await u();
    },
    getState: () => r
  };
}
function Jo(e) {
  return [...e].map((n) => n.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(n) ? "_" : n).join("").trim() || "audio.mp3";
}
function Ga(e, t, n = "mp3") {
  return Jo(`tavern_multi_tts_${e}_${t}.${n}`);
}
function Na(e, t) {
  const n = Jo(t), s = URL.createObjectURL(e), i = URL.revokeObjectURL.bind(URL), o = document.createElement("a");
  o.href = s, o.download = n, document.body.appendChild(o), o.click(), o.remove(), window.setTimeout(() => i(s), 0);
}
const La = "Tavern Multi-TTS", fs = "tavern_multi_tts", Oa = "0.1.0", ds = "tavern-multi-tts-root", be = "[Tavern Multi-TTS]", Xo = 2, Yo = [
  "speech-02-hd",
  "speech-02-turbo",
  "speech-2.8-hd",
  "speech-2.8-turbo",
  "speech-2.6-hd",
  "speech-2.6-turbo"
], Ts = [
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
`), Bt = {
  schemaVersion: Xo,
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
  injectEnabled: !0,
  injectDepth: 1,
  injectRole: "system",
  injectTemplate: Ts
};
function gn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function ae(e, t) {
  return typeof e == "string" ? e : t;
}
function ps(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Ke(e, t, n, s, i = !1) {
  const o = typeof e == "number" ? e : Number(e);
  if (!Number.isFinite(o))
    return s;
  const l = i ? Math.round(o) : o;
  return Math.min(n, Math.max(t, l));
}
function $a(e) {
  return e === "local_gsvi" ? "local_gsvi" : "minimax";
}
function Da(e) {
  return e === "beijing" ? "beijing" : "international";
}
function ja(e) {
  return Yo.includes(String(e)) ? e : Bt.model;
}
function Ua(e) {
  return e === "manual" || e === "auto_first_n" || e === "auto_all" ? e : Bt.prefetchMode;
}
function ka(e) {
  return e === "user" || e === "assistant" || e === "system" ? e : Bt.injectRole;
}
function Fa(e) {
  return e === "zh" || e === "en" || e === "ja" ? e : Bt.testLanguage;
}
function Ba(e) {
  return e === "wav" ? "wav" : "mp3";
}
function Zo(e) {
  return Array.isArray(e) ? e.filter(gn).map((t) => ({
    characterName: ae(t.characterName, "").trim(),
    minimaxVoiceId: ae(t.minimaxVoiceId, "").trim()
  })).filter((t) => t.characterName || t.minimaxVoiceId) : [];
}
function Ha(e) {
  return Array.isArray(e) ? e.filter(gn).map((t) => ({
    name: ae(t.name, "").trim(),
    mappings: Zo(t.mappings)
  })).filter((t) => t.name) : [];
}
function Qo(e) {
  return Array.isArray(e) ? e.filter(gn).map((t) => ({
    characterName: ae(t.characterName, "").trim(),
    gsviVoiceId: ae(t.gsviVoiceId, "").trim(),
    gsviLanguage: ae(t.gsviLanguage, "").trim(),
    gsviEmotion: ae(t.gsviEmotion, "").trim()
  })).filter((t) => t.characterName || t.gsviVoiceId) : [];
}
function Ka(e) {
  return Array.isArray(e) ? e.filter(gn).map((t) => ({
    name: ae(t.name, "").trim(),
    mappings: Qo(t.mappings)
  })).filter((t) => t.name) : [];
}
function Ot(e) {
  const t = gn(e) ? e : {};
  return {
    schemaVersion: Xo,
    enabled: ps(t.enabled, Bt.enabled),
    ttsEngine: $a(t.ttsEngine),
    apiKey: ae(t.apiKey, ""),
    groupId: ae(t.groupId, ""),
    voiceId: ae(t.voiceId, ""),
    voiceCatalogSelectedId: ae(t.voiceCatalogSelectedId, ""),
    minimaxRegion: Da(t.minimaxRegion),
    testLanguage: Fa(t.testLanguage),
    model: ja(t.model),
    speed: Ke(t.speed, 0.5, 2, 1),
    vol: Ke(t.vol, 0, 10, 1),
    requestTimeoutMs: Ke(t.requestTimeoutMs, 1e3, 3e4, 15e3, !0),
    maxConcurrency: Ke(t.maxConcurrency, 1, 10, 3, !0),
    prefetchMode: Ua(t.prefetchMode),
    prefetchFirstCount: Ke(t.prefetchFirstCount, 1, 10, 2, !0),
    localGsviBaseUrl: ae(t.localGsviBaseUrl, ""),
    localGsviAuthToken: ae(t.localGsviAuthToken, ""),
    localGsviModel: ae(t.localGsviModel, ""),
    localGsviFormat: Ba(t.localGsviFormat),
    localGsviUseReferenceAudio: ps(t.localGsviUseReferenceAudio, !1),
    localGsviCharacter: ae(t.localGsviCharacter, ""),
    localGsviLanguage: ae(t.localGsviLanguage, "ja"),
    localGsviEmotion: ae(t.localGsviEmotion, ""),
    localGsviReferenceText: ae(t.localGsviReferenceText, ""),
    localGsviTopK: Ke(t.localGsviTopK, 1, 200, 20, !0),
    localGsviTopP: Ke(t.localGsviTopP, 0, 1, 0.7),
    localGsviTemperature: Ke(t.localGsviTemperature, 0, 2, 0.7),
    localGsviTextLang: ae(t.localGsviTextLang, "多语种混合"),
    localGsviTextSplitMethod: ae(t.localGsviTextSplitMethod, "按标点符号切"),
    localGsviBatchSize: Ke(t.localGsviBatchSize, 1, 8, 1, !0),
    characterMappings: Zo(t.characterMappings),
    characterMappingPresets: Ha(t.characterMappingPresets),
    gsviCharacterMappings: Qo(t.gsviCharacterMappings),
    gsviCharacterMappingPresets: Ka(t.gsviCharacterMappingPresets),
    injectEnabled: ps(t.injectEnabled, !0),
    injectDepth: Ke(t.injectDepth, 0, 50, 1, !0),
    injectRole: ka(t.injectRole),
    injectTemplate: ae(t.injectTemplate, Ts) || Ts
  };
}
function za(e, t, n = {}) {
  let s = !1, i = !1, o = null, l = null, r = null;
  function a() {
    return Ot(e.readRawSettings());
  }
  function f() {
    const C = a();
    return e.writeSettings(C), C;
  }
  function u() {
    if (s)
      return !0;
    const C = document.getElementById(ds);
    C && C.remove();
    const R = e.findSettingsRoot();
    return R ? (r = document.createElement("div"), r.id = ds, r.dataset.tavernMultiTts = "settings", R.appendChild(r), t.mount(r, a()), l = e.onPageHide(() => {
      h({ removeSettings: !1 });
    }), s = !0, n.startRuntime?.(), console.info(`${be} settings panel mounted`), !0) : !1;
  }
  function h(C) {
    n.stopRuntime?.(), n.stopPlayback?.(), o?.(), o = null, i = !1, l?.(), l = null, t.unmount(), (r ?? document.getElementById(ds))?.remove(), r = null, s = !1, C.removeSettings && e.removeSettings();
  }
  function S() {
    s || i || (f(), !u() && (i = !0, o = e.onAppReady(() => {
      const C = i;
      i = !1;
      const R = o;
      o = null, R?.(), C && (u() || console.error(
        `${be} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`
      ));
    })));
  }
  function E(C) {
    const R = a();
    R.enabled = C, e.writeSettings(R), n.syncRuntime?.();
  }
  function $(C) {
    const R = a();
    R.injectEnabled = C, e.writeSettings(R), n.syncRuntime?.();
  }
  return {
    activate: S,
    disable() {
      h({ removeSettings: !1 }), console.info(`${be} disabled`);
    },
    destroy() {
      h({ removeSettings: !1 });
    },
    install() {
      f();
    },
    clean() {
      return h({ removeSettings: !0 }), console.info(`${be} settings cleaned`), n.clearCache?.();
    },
    delete() {
      return h({ removeSettings: !0 }), console.info(`${be} deleted`), n.clearCache?.();
    },
    updateSettings(C) {
      e.writeSettings(Ot(C)), n.syncRuntime?.();
    },
    setEnabled: E,
    setInjectEnabled: $,
    isActive() {
      return s;
    }
  };
}
function Wa() {
  return document.querySelector("#extensions_settings2") ?? document.querySelector("#extensions_settings");
}
class W extends Error {
  code;
  status;
  constructor(t, n, s) {
    super(t), this.name = "TtsRequestError", this.code = n, this.status = s;
  }
}
function Ja(e) {
  return e instanceof W;
}
function Xa(e) {
  return new W(`请求超时（${e}ms），请检查网络或增大超时时间`, "timeout");
}
function Ya() {
  return new W("请求已取消", "cancelled");
}
async function rn(e, t, n, s) {
  const i = new AbortController();
  let o = !1, l = !1, r = null;
  const a = () => {
    l || (l = !0, clearTimeout(u), h?.removeEventListener("abort", S));
  }, f = () => o && !h?.aborted ? Xa(s) : Ya(), u = setTimeout(() => {
    o = !0, i.abort("timeout");
  }, s), h = n.signal, S = () => {
    i.abort(h?.reason ?? "cancelled");
  };
  h && (h.aborted ? i.abort(h.reason ?? "cancelled") : h.addEventListener("abort", S, { once: !0 }));
  const E = () => {
    r?.(f());
  };
  i.signal.addEventListener("abort", E);
  const $ = () => new Promise((R, G) => {
    if (i.signal.aborted) {
      G(f());
      return;
    }
    r = G;
  }), C = async (R) => {
    try {
      return await Promise.race([R, $()]);
    } catch (G) {
      throw G instanceof W ? G : i.signal.aborted ? f() : G;
    } finally {
      a(), i.signal.removeEventListener("abort", E);
    }
  };
  try {
    const R = await Promise.race([
      e(t, {
        ...n,
        signal: i.signal
      }),
      $()
    ]);
    return {
      ok: R.ok,
      status: R.status,
      statusText: R.statusText,
      headers: R.headers,
      text: () => C(R.text()),
      async json() {
        const G = await C(R.text());
        try {
          return JSON.parse(G);
        } catch {
          throw new W(
            "服务返回的不是合法 JSON，请检查地址或稍后重试",
            "invalid_json"
          );
        }
      },
      blob: () => C(R.blob()),
      close: a
    };
  } catch (R) {
    throw a(), i.signal.removeEventListener("abort", E), R instanceof W ? R : i.signal.aborted ? f() : R;
  }
}
function Cs(e, t) {
  return `${e.replace(/\/+$/, "")}${t.startsWith("/") ? "" : "/"}${t}`;
}
function Za(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function Qa(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const qa = /api[_-]?key|authorization|token|secret|cookie|password/i;
function Nn(e) {
  if (typeof e == "string")
    return e.length > 80 ? `${e.slice(0, 80)}…(len=${e.length})` : e;
  if (Array.isArray(e))
    return e.map((n) => Nn(n));
  if (!e || typeof e != "object")
    return e;
  const t = {};
  for (const [n, s] of Object.entries(e)) {
    if (qa.test(n)) {
      t[n] = "[redacted]";
      continue;
    }
    if (n === "text" || n === "input" || n === "referenceText" || n === "reference_text") {
      t[n] = typeof s == "string" ? `[text len=${s.length}]` : "[text]";
      continue;
    }
    t[n] = Nn(s);
  }
  return t;
}
function qo(e, t, n) {
  if (n === void 0) {
    console.info(`${be} [${e}] ${t}`);
    return;
  }
  console.info(`${be} [${e}] ${t}`, Nn(n));
}
function Ms(e, t, n) {
  if (n === void 0) {
    console.warn(`${be} [${e}] ${t}`);
    return;
  }
  console.warn(`${be} [${e}] ${t}`, Nn(n));
}
const ec = ["v2", "v3", "v4", "v2Pro"];
function er(e) {
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
function sc(e) {
  const t = er(e.modelId), n = t.modelName.trim(), s = tc(t.version) || "v2Pro";
  return {
    url: Cs(e.baseUrl.trim(), "/v1/audio/speech"),
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
function ic(e) {
  if (!e.baseUrl.trim())
    throw new W("请先填写 Local-GSVI 服务地址", "config");
  if (!e.modelId.trim())
    throw new W("请先填写或选择 Local-GSVI 模型（modelName|version）", "config");
  if (!e.language.trim() || !e.emotion.trim())
    throw new W(
      "GSVI 生成要求映射完整：语种(prompt_lang)/情绪(emotion)不能为空",
      "config"
    );
  if (!er(e.modelId).modelName)
    throw new W("Local-GSVI 模型格式错误，期望 modelName|version", "config");
  if (!e.text.trim())
    throw new W("Local-GSVI 合成文本为空", "config");
}
function Ee(e) {
  return typeof e == "object" && e !== null;
}
function oc(e) {
  const t = e.replace(/^data:audio\/[a-zA-Z0-9.+-]+;base64,/i, "").trim();
  return t.length >= 16 && /^[A-Za-z0-9+/=\r\n]+$/.test(t);
}
function tr(e) {
  return e.trim().match(/^data:audio\/[a-zA-Z0-9.+-]+;base64,(.+)$/i)?.[1] ?? e.trim();
}
function rc(e) {
  if (!Ee(e))
    return null;
  const t = e, n = Ee(t.data) ? t.data : void 0, s = Ee(t.output) ? t.output : void 0, i = [
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
    if (typeof o == "string" && oc(o))
      return tr(o);
  return null;
}
function lc(e) {
  if (!Ee(e))
    return null;
  const t = e, n = Ee(t.data) ? t.data : void 0, s = Ee(t.output) ? t.output : void 0, i = [
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
function ac(e) {
  if (!Ee(e))
    return "";
  const t = Ee(e.error) ? e.error : void 0, n = Ee(e.base_resp) ? e.base_resp : void 0, s = Ee(e.data) ? e.data : void 0, i = [
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
function cc(e) {
  const t = atob(tr(e)), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function ms(e) {
  const t = e?.trim() ?? "";
  return t ? { Authorization: `Bearer ${t}` } : {};
}
function uc(e) {
  const t = fetch;
  async function n(s, i, o, l, r) {
    const a = /^https?:\/\//i.test(i) ? i : Cs(s, i);
    let f = !1;
    try {
      f = Za(s) === new URL(a).origin;
    } catch {
      f = !1;
    }
    const u = await rn(
      t,
      a,
      {
        method: "GET",
        headers: f ? ms(o) : {},
        signal: r
      },
      l
    );
    if (!u.ok)
      throw new W(`下载 GSVI 输出失败：HTTP ${u.status}`, "http", u.status);
    return await u.blob();
  }
  return {
    id: "local_gsvi",
    async checkHealth(s) {
      if (s.engine !== "local_gsvi")
        throw new W("Local-GSVI 适配器收到了错误的引擎请求", "config");
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
        throw new W("Local-GSVI 适配器收到了错误的引擎请求", "config");
      const i = s.baseUrl.trim();
      if (!i)
        throw new W("请先填写 Local-GSVI 服务地址", "config");
      const o = [];
      for (const l of ec) {
        const r = Cs(i, `/models/${encodeURIComponent(l)}`);
        try {
          const a = await rn(
            t,
            r,
            { method: "GET", headers: ms(s.authToken), signal: s.signal },
            s.timeoutMs
          );
          if (!a.ok) {
            Ms("local_gsvi", `GET /models/${l} failed`, {
              status: a.status
            }), a.close();
            continue;
          }
          const f = await a.json(), u = Ee(f) && Ee(f.models) ? f.models : f;
          if (!Ee(u))
            continue;
          Object.entries(u).forEach(([h, S]) => {
            if (!h || !Ee(S))
              return;
            const E = Object.keys(S).filter(Boolean).sort((C, R) => C.localeCompare(R)), $ = {};
            E.forEach((C) => {
              const R = S[C];
              $[C] = Array.isArray(R) ? R.map((G) => String(G).trim()).filter(Boolean) : typeof R == "string" ? [R.trim()].filter(Boolean) : [];
            }), o.push({
              id: `${h}|${l}`,
              name: `${h} [${l}]`,
              source: "gsvi_model",
              language: E.join(","),
              languages: E,
              emotionsByLanguage: $
            });
          });
        } catch (a) {
          if (a instanceof W && a.code === "cancelled")
            throw a;
          Ms("local_gsvi", `GET /models/${l} failed`);
        }
      }
      if (o.length === 0)
        throw new W(
          "未在 /models/{v2|v3|v4|v2Pro} 中解析到模型映射，请检查接口返回结构",
          "missing_audio"
        );
      return o.sort((l, r) => l.name.localeCompare(r.name));
    },
    async synthesize(s) {
      if (s.engine !== "local_gsvi")
        throw new W("Local-GSVI 适配器收到了错误的引擎请求", "config");
      ic(s);
      const i = sc(s), o = {
        "Content-Type": "application/json",
        ...ms(s.authToken)
      };
      qo("local_gsvi", "synthesize", {
        url: i.url,
        model: i.modelName,
        version: i.version,
        text: s.text
      });
      const l = await rn(
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
      if (!l.ok)
        throw new W(
          `Local-GSVI 请求失败：HTTP ${l.status}`,
          "http",
          l.status
        );
      if ((l.headers.get("content-type")?.toLowerCase() ?? "").includes("application/json")) {
        const a = await l.json(), f = rc(a);
        if (f)
          return new Blob([Uint8Array.from(cc(f))], {
            type: s.format === "wav" ? "audio/wav" : "audio/mpeg"
          });
        const u = lc(a);
        if (u)
          return await n(
            s.baseUrl.trim(),
            u,
            s.authToken ?? "",
            s.timeoutMs,
            s.signal
          );
        throw new W(
          `Local-GSVI 未返回可用音频：${ac(a) || "JSON 响应中未找到音频"}`,
          "missing_audio"
        );
      }
      return await l.blob();
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
}, dc = /* @__PURE__ */ new Set([408, 409, 429, 500, 502, 503, 504]), pc = /* @__PURE__ */ new Set([1e3, 1001, 1002, 1039]), Ii = 2, mc = "tavern_multi_tts_voice_catalog_v1", hc = 1440 * 60 * 1e3;
function Ln(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function As(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Ri(e) {
  return fc[As(e)];
}
function nr(e, t) {
  return `${mc}:${e}:${t.trim()}`;
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
function Pi(e) {
  return `Bearer ${Ln(e)}`;
}
function vc(e) {
  const t = e.trim(), n = new Uint8Array(t.length / 2);
  for (let s = 0; s < t.length; s += 2)
    n[s / 2] = Number.parseInt(t.slice(s, s + 2), 16);
  return n;
}
function _c(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function yc(e) {
  const t = e.trim();
  return /^[0-9a-fA-F]+$/.test(t) && t.length % 2 === 0 ? vc(t) : _c(t);
}
function bc(e, t) {
  const s = `${t ?? ""} ${e}`.toLowerCase(), i = s.includes("japanese") ? "Japanese" : s.includes("english") ? "English" : s.includes("chinese") ? "Chinese" : s.includes("korean") ? "Korean" : s.includes("french") ? "French" : s.includes("german") ? "German" : s.includes("spanish") ? "Spanish" : "Unknown", o = s.includes("female") || s.includes("女") || s.includes("lady") || s.includes("girl") ? "Female" : s.includes("male") || s.includes("男") || s.includes("man") || s.includes("boy") ? "Male" : "Unknown";
  return { language: i, gender: o };
}
function xc(e, t) {
  const n = t.trim();
  if (!n)
    return null;
  try {
    const s = localStorage.getItem(nr(e, n));
    if (!s)
      return null;
    const i = JSON.parse(s);
    return !i?.expires_at || Date.now() > i.expires_at ? null : i.items ?? null;
  } catch {
    return null;
  }
}
function Sc(e, t, n) {
  const s = t.trim();
  s && localStorage.setItem(
    nr(e, s),
    JSON.stringify({
      expires_at: Date.now() + hc,
      items: n
    })
  );
}
function Ec(e) {
  const t = Ln(e.apiKey), n = e.groupId.trim(), s = e.voiceId.trim();
  if (!t || !n || !s)
    throw new W("MiniMax 引擎缺少必要配置：API Key / Group ID / Voice ID", "config");
  if (!e.text.trim())
    throw new W("MiniMax 合成文本为空", "config");
}
function wc(e) {
  return typeof e == "object" && e !== null;
}
function Tc(e, t) {
  return dc.has(e) || pc.has(t);
}
function Cc(e) {
  const t = fetch;
  return {
    id: "minimax",
    async checkHealth(n) {
      if (n.engine !== "minimax")
        throw new W("MiniMax 适配器收到了错误的引擎请求", "config");
      if (!Ln(n.apiKey))
        return { ok: !1, message: "请先填写 MiniMax API Key" };
      try {
        return await this.listVoices({ ...n, forceRefresh: !0 }), { ok: !0, message: "MiniMax 服务可用" };
      } catch (i) {
        return { ok: !1, message: i instanceof Error ? i.message : String(i) };
      }
    },
    async listVoices(n) {
      if (n.engine !== "minimax")
        throw new W("MiniMax 适配器收到了错误的引擎请求", "config");
      const s = Ln(n.apiKey);
      if (!s)
        throw new W("请先填写 API Key", "config");
      const i = As(n.region);
      if (!n.forceRefresh) {
        const h = xc(i, n.groupId);
        if (h && h.length > 0)
          return h;
      }
      const o = Ri(i).voice, l = await rn(
        t,
        o,
        {
          method: "POST",
          headers: {
            Authorization: Pi(s),
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ voice_type: "all" }),
          signal: n.signal
        },
        n.timeoutMs
      ), a = await l.json();
      if (!l.ok || (a.base_resp?.status_code ?? 0) !== 0)
        throw new W(
          a.base_resp?.status_msg ?? l.statusText ?? "拉取音色列表失败",
          "http",
          l.status
        );
      const f = [], u = (h, S = []) => {
        S.forEach((E) => {
          const $ = bc(E.voice_id, E.voice_name);
          f.push({
            id: E.voice_id,
            name: E.voice_name ?? E.voice_id,
            description: E.description,
            source: h,
            language: $.language,
            gender: $.gender
          });
        });
      };
      return u("system", a.system_voice ?? []), u("voice_cloning", a.voice_cloning ?? []), u("voice_generation", a.voice_generation ?? []), Sc(i, n.groupId, f), f;
    },
    async synthesize(n) {
      if (n.engine !== "minimax")
        throw new W("MiniMax 适配器收到了错误的引擎请求", "config");
      Ec(n);
      const s = gc(n), i = Ri(n.region).tts, o = {
        Authorization: Pi(n.apiKey),
        "Content-Type": "application/json"
      };
      qo("minimax", "synthesize", {
        model: s.model,
        voiceId: s.voice_setting.voice_id,
        region: As(n.region),
        groupId: n.groupId.trim(),
        text: n.text
      });
      let l = null;
      for (let r = 0; r <= Ii; r += 1) {
        const a = await rn(
          t,
          i,
          {
            method: "POST",
            headers: o,
            body: JSON.stringify(s),
            signal: n.signal
          },
          n.timeoutMs
        ), f = await a.json();
        if (!wc(f))
          throw new W("MiniMax 响应结构无效", "invalid_json");
        const u = f;
        if (!a.ok || (u.base_resp?.status_code ?? 0) !== 0) {
          const E = u.base_resp?.status_code ?? a.status, $ = u.base_resp?.status_msg ?? a.statusText ?? "unknown error";
          if (l = `MiniMax 请求失败：code=${E}, msg=${$}`, Tc(a.status, E) && r < Ii) {
            Ms("minimax", "retryable synthesize failure", {
              status: a.status,
              attempt: r
            }), await Qa(250 * (r + 1));
            continue;
          }
          throw new W(l, "http", a.status);
        }
        const h = u.data?.audio ?? u.data?.audio_file ?? u.audio_file;
        if (!h)
          throw new W("MiniMax 响应中未找到音频字段", "missing_audio");
        const S = yc(h);
        return new Blob([Uint8Array.from(S)], { type: "audio/mpeg" });
      }
      throw new W(l ?? "MiniMax 请求失败：未知错误", "http");
    }
  };
}
function Is(e) {
  return e === "local_gsvi" ? uc() : Cc();
}
const Rs = "tavern_multi_tts_say_rule", Mc = 1, Ac = {
  system: 0,
  user: 1,
  assistant: 2
};
function sr(e) {
  const t = e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.characterMappings, n = [];
  for (const s of t) {
    const i = s.characterName.trim();
    i && !n.includes(i) && n.push(i);
  }
  return n;
}
function Ic(e) {
  const t = sr(e);
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
function Rc(e) {
  const t = sr(e).join("、") || "（未配置角色映射）";
  return `${e.injectTemplate.replaceAll("${target_characters}", t).replaceAll("${mapped_characters}", t)}

${Ic(e)}`;
}
function hs(e, t) {
  return !t.enabled || !t.injectEnabled ? (e.deleteExtensionPrompt(Rs), { applied: !1 }) : (e.setExtensionPrompt(
    Rs,
    Rc(t),
    Mc,
    t.injectDepth,
    !1,
    Ac[t.injectRole]
  ), { applied: !0, depth: t.injectDepth, role: t.injectRole });
}
function Pc(e) {
  e.deleteExtensionPrompt(Rs);
}
const Vi = /<say(?:\s+char\s*=\s*(?:"([^"]*)"|“([^”]*)”))?\s*>([\s\S]*?)<\/say>/gi;
function Vc(e) {
  const t = new RegExp(Vi.source, Vi.flags), n = [];
  let s, i = 0;
  for (; (s = t.exec(e)) !== null; ) {
    const o = (s[1] ?? s[2])?.trim(), l = s[3].trim();
    l && (n.push({ index: i, text: l, ...o ? { char: o } : {} }), i += 1);
  }
  return n;
}
const Gc = /* @__PURE__ */ new Set([
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
]), ir = /\(([a-z-]+)\)/gi, Nc = /\([a-z-]+\)/gi;
function zs(e) {
  return e.replace(/\s{2,}/g, " ").trim();
}
function Lc(e) {
  return zs(
    e.replace(ir, (t, n) => {
      const s = String(n).toLowerCase();
      return Gc.has(s) ? `(${s})` : "";
    })
  );
}
function Oc(e) {
  return zs(e.replace(ir, ""));
}
function $c(e) {
  return zs(e.replace(Nc, ""));
}
function Dc(e, t) {
  const n = Lc(e);
  return t === "local_gsvi" ? $c(n) : n;
}
async function jc(e, t) {
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
const pn = "data-tavern-multi-tts-rendered", Ws = "data-tavern-multi-tts-swipe", Qn = "tavern-multi-tts-segment", On = "tavern-multi-tts-fallback-list";
function Uc(e, t, n) {
  return `${e}:${t}:${n}`;
}
function kc(e) {
  const t = e.split(":");
  if (t.length !== 3)
    return null;
  const n = Number(t[0]), s = Number(t[1]), i = Number(t[2]);
  return [n, s, i].every(Number.isFinite) ? { message_id: n, swipe_id: s, index: i } : null;
}
function Fc(e) {
  return document.querySelector(`#chat .mes[mesid="${e}"]`);
}
function Bc(e) {
  return e.querySelector(".mes_text");
}
function or(e, t) {
  const n = e.getAttribute(pn) === "true", s = e.querySelector(`.${Qn}`) !== null;
  return !n || !s ? !1 : t === void 0 ? !0 : e.getAttribute(Ws) === String(t);
}
function Tn(e = document) {
  e.querySelectorAll(`.${Qn}`).forEach((t) => {
    const n = t.querySelector(".tavern-multi-tts-text")?.textContent ?? "";
    t.replaceWith(document.createTextNode(n));
  }), e.querySelectorAll(`.${On}`).forEach((t) => t.remove()), e.querySelectorAll(`[${pn}]`).forEach((t) => {
    t.removeAttribute(pn), t.removeAttribute(Ws);
  });
}
function qe(e, t) {
  e.classList.remove("is-loading", "is-ready", "is-playing", "is-error"), t !== "idle" && e.classList.add(`is-${t}`);
  const n = e.querySelector(".tavern-multi-tts-indicator");
  n && (n.textContent = t === "loading" ? "⏳" : t === "ready" ? "▶" : t === "playing" ? "⏸" : t === "error" ? "⚠" : "▶");
}
function Gi(e) {
  return e.replace(/\s+/g, "").trim();
}
function Hc(e, t, n, s) {
  const i = e.splitText(t);
  i.splitText(n), i.replaceWith(s);
}
function Kc(e, t, n, s) {
  const i = [t, n].map((r) => r.trim()).filter(Boolean), o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let l = o.nextNode();
  for (; l; ) {
    const r = l.parentElement;
    if (r && !r.closest(`.${Qn}`) && !r.closest(`.${On}`) && !r.closest(".mes_buttons")) {
      const a = l.nodeValue ?? "";
      for (const f of i) {
        const u = a.indexOf(f);
        if (u >= 0)
          return Hc(l, u, f.length, s), !0;
        if (Gi(a) === Gi(f))
          return l.replaceWith(s), !0;
      }
    }
    l = o.nextNode();
  }
  return !1;
}
function zc(e, t, n, s, i, o, l) {
  const r = Uc(e, t, n.index), a = document.createElement("span");
  a.className = Qn, a.dataset.tavernMultiTtsKey = r;
  const f = document.createElement("span");
  f.className = "tavern-multi-tts-text", f.textContent = s;
  const u = document.createElement("span");
  u.className = "tavern-multi-tts-indicator", u.textContent = "▶";
  const h = document.createElement("span");
  h.className = "tavern-multi-tts-actions";
  const S = document.createElement("button");
  S.type = "button", S.className = "tavern-multi-tts-action", S.textContent = "下", h.append(S), a.append(f, u, h), qe(a, "idle");
  let E = l.get(r) ?? null;
  const $ = async () => {
    qe(a, "loading");
    try {
      const G = await o.ensureAudio(n, s, i);
      return G ? (qe(a, "ready"), G) : (qe(a, "error"), null);
    } catch {
      return qe(a, "error"), null;
    }
  }, C = async () => {
    const G = await $();
    G && (E?.stop(), E = Wo(
      G,
      () => qe(a, "playing"),
      () => {
        E = null, l.delete(r), qe(a, "ready");
      },
      () => {
        E = null, l.delete(r), qe(a, "error");
      },
      () => qe(a, "ready")
    ), l.set(r, E));
  }, R = async () => {
    if (!E)
      return;
    const G = E.getState();
    if (G === "playing") {
      E.pause();
      return;
    }
    if (G === "paused")
      try {
        await E.resume();
      } catch {
      }
  };
  return a.addEventListener("click", (G) => {
    const D = G.target;
    if (D?.closest(".tavern-multi-tts-indicator")) {
      R();
      return;
    }
    D?.closest(".tavern-multi-tts-action") || C();
  }), S.addEventListener("click", (G) => {
    G.preventDefault(), G.stopPropagation(), (async () => {
      const D = await $();
      D && o.downloadAudio(D, e, n.index);
    })();
  }), a;
}
function Wc(e, t, n, s, i, o = 0) {
  if (or(e, o))
    return 0;
  e.getAttribute(pn) === "true" && Tn(e);
  const l = Bc(e) ?? e, r = [];
  let a = 0;
  for (const f of n) {
    if (!f.displayText || !f.ttsText)
      continue;
    const u = zc(
      t,
      o,
      f,
      f.displayText,
      f.ttsText,
      s,
      i
    );
    Kc(l, f.text, f.displayText, u) ? a += 1 : r.push(u);
  }
  if (l.querySelectorAll(`.${On}`).forEach((f) => f.remove()), r.length > 0) {
    const f = document.createElement("div");
    f.className = On, r.forEach((u) => f.append(u, document.createTextNode(" "))), l.append(f), a += r.length;
  }
  return a > 0 && (e.setAttribute(pn, "true"), e.setAttribute(Ws, String(o))), a;
}
function $n(e, t) {
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const s = e[n];
    if (s && t(s))
      return s;
  }
}
function rr(e, t) {
  return e.characterName.trim() === t && !!e.minimaxVoiceId.trim();
}
function lr(e, t) {
  return e.characterName.trim() === t && !!e.gsviVoiceId.trim() && !!e.gsviLanguage.trim() && !!e.gsviEmotion.trim();
}
function ar(e, t) {
  const n = t?.trim() ?? "";
  return n ? e.ttsEngine === "local_gsvi" ? !!$n(
    e.gsviCharacterMappings,
    (s) => lr(s, n)
  ) : !!$n(e.characterMappings, (s) => rr(s, n)) : !0;
}
function cr(e, t) {
  const n = t?.trim() ?? "";
  if (e.ttsEngine === "local_gsvi") {
    const i = $n(
      e.gsviCharacterMappings,
      (o) => lr(o, n)
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
    minimaxVoiceId: $n(
      e.characterMappings,
      (i) => rr(i, n)
    )?.minimaxVoiceId?.trim() || e.voiceId.trim() || e.voiceCatalogSelectedId.trim()
  };
}
function ur(e, t, n) {
  if (!ar(e, n))
    return null;
  const s = cr(e, n);
  return s.engine === "local_gsvi" ? !e.localGsviBaseUrl.trim() || !s.gsviVoiceId || !s.gsviLanguage || !s.gsviEmotion ? null : {
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
  } : !e.apiKey.trim() || !e.groupId.trim() || !s.minimaxVoiceId ? null : {
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
function Jc(e) {
  return e.ttsEngine === "local_gsvi" ? e.localGsviBaseUrl.trim() ? {
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
  } : null : e.apiKey.trim() ? {
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
  } : null;
}
function Xc(e, t, n) {
  const s = cr(e, n);
  return e.ttsEngine === "local_gsvi" ? {
    text: t,
    engine: "local_gsvi",
    localGsvi: {
      origin: Ea(e.localGsviBaseUrl),
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
const Yc = 15;
function Zc(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map(), i = [];
  let o = !1, l = !1;
  function r() {
    return e.getSettings();
  }
  function a() {
    l || !document.querySelector(".minimax-tts-segment") || (l = !0, e.warn?.("检测到旧酒馆助手 Multi-TTS 仍在装饰消息。请只启用其中一个，避免重复生成。"));
  }
  async function f(P, H, te) {
    const le = r(), ce = ur(le, H, te);
    if (!ce)
      return null;
    const Ve = Xc(le, H, te), we = await wa(Ve), Te = s.get(we);
    if (Te)
      return Te;
    const Ce = await Ra(we);
    if (Ce)
      return s.set(we, Ce), Ce;
    const Ge = await Is(ce.engine).synthesize(ce);
    return await Pa(we, Ge), s.set(we, Ge), Ge;
  }
  function u(P, H) {
    if (typeof P.swipe_id == "number" && Number.isFinite(P.swipe_id))
      return P.swipe_id;
    const te = Number(H?.getAttribute("swipeid"));
    return Number.isFinite(te) ? te : 0;
  }
  function h(P, H) {
    for (const [te, le] of t) {
      const ce = kc(te);
      ce && ce.message_id === P && ce.swipe_id !== H && (le.stop(), t.delete(te));
    }
  }
  function S(P, H = {}) {
    const te = H.attempt ?? 0, le = r();
    if (!le.enabled)
      return;
    const ce = e.getChatMessage(P);
    if (!ce || ce.is_user || ce.is_system)
      return;
    const Ve = typeof ce.mes == "string" ? ce.mes : "", we = Vc(Ve).filter(
      (ne) => ar(le, ne.char)
    );
    if (we.length === 0)
      return;
    const Te = e.findMessageElement(P) ?? Fc(P);
    if (!Te) {
      te < Yc && window.setTimeout(() => S(P, { ...H, attempt: te + 1 }), 120);
      return;
    }
    const Ce = u(ce, Te);
    if (or(Te, Ce))
      return;
    Te.getAttribute("data-tavern-multi-tts-rendered") === "true" && Tn(Te), h(P, Ce), a();
    const at = we.map((ne) => ({
      ...ne,
      displayText: Oc(ne.text),
      ttsText: Dc(ne.text, le.ttsEngine)
    })), Ge = [], Tt = (ne) => H.skipPrefetch ? !1 : le.prefetchMode === "auto_all" ? !0 : le.prefetchMode === "auto_first_n" ? ne < le.prefetchFirstCount : !1;
    Wc(
      Te,
      P,
      at,
      {
        ensureAudio: async (ne, Ne, mt) => {
          const ct = `${P}:${Ce}:${ne.index}`;
          if (n.has(ct))
            return null;
          n.add(ct);
          try {
            return await f(ne.text, mt, ne.char);
          } catch {
            return console.error(`${be} synthesize failed`), null;
          } finally {
            n.delete(ct);
          }
        },
        downloadAudio(ne, Ne, mt) {
          Na(ne, Ga(Ne, mt));
        }
      },
      t,
      Ce
    ), at.forEach((ne, Ne) => {
      Tt(Ne) && ne.ttsText && Ge.push(async () => {
        try {
          await f(ne.text, ne.ttsText, ne.char);
        } catch {
        }
      });
    }), Ge.length > 0 && jc(Ge, le.maxConcurrency);
  }
  function E(...P) {
    const H = Number(P[0]);
    Number.isFinite(H) && window.setTimeout(() => S(H), 0);
  }
  function $(...P) {
    const H = Number(P[0]);
    Number.isFinite(H) && window.setTimeout(() => S(H, { skipPrefetch: !0 }), 0);
  }
  function C(P = {}) {
    document.querySelectorAll("#chat .mes[mesid]").forEach((H) => {
      const te = Number(H.getAttribute("mesid"));
      Number.isFinite(te) && S(te, P);
    });
  }
  function R(P, H) {
    e.eventSource.on(P, H), i.push(() => e.eventSource.removeListener(P, H));
  }
  function G() {
    o || (o = !0, hs(e, r()), R(e.eventNames.messageReceived, E), R(e.eventNames.messageRendered, E), R(e.eventNames.messageUpdated, E), R(e.eventNames.messageSwiped, $), R(e.eventNames.moreMessagesLoaded, () => {
      C({ skipPrefetch: !0 });
    }), R(e.eventNames.chatChanged, () => {
      hs(e, r()), C({ skipPrefetch: !0 });
    }), C({ skipPrefetch: !0 }), console.info(`${be} chat runtime started`));
  }
  function D() {
    i.splice(0).forEach((P) => P()), t.forEach((P) => P.stop()), t.clear(), n.clear(), s.clear(), ws(), Pc(e), Tn(document), o = !1, console.info(`${be} chat runtime stopped`);
  }
  function X() {
    t.forEach((P) => P.stop()), t.clear(), n.clear(), ws(), Tn(document);
  }
  function N() {
    hs(e, r()), X(), r().enabled && C({ skipPrefetch: !0 });
  }
  return { start: G, stop: D, syncFromSettings: N, decorate: S };
}
function pt(e) {
  return typeof e == "object" && e !== null;
}
function Qc(e) {
  if (pt(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function qc(e) {
  return !pt(e) || typeof e.getContext != "function" ? null : e;
}
function eu(e) {
  if (!pt(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!pt(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = Qc(e.eventSource), n = pt(e.eventTypes) ? e.eventTypes : pt(e.event_types) ? e.event_types : void 0, s = n ? {
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
    extensionPrompts: pt(e.extensionPrompts) ? e.extensionPrompts : void 0
  };
}
function fr() {
  const e = qc(globalThis.SillyTavern);
  if (!e)
    throw new Error(
      "SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行"
    );
  return eu(e.getContext());
}
function dr() {
  const e = fr();
  return {
    readRawSettings() {
      return e.extensionSettings[fs];
    },
    writeSettings(t) {
      e.extensionSettings[fs] = t, e.saveSettingsDebounced();
    },
    removeSettings() {
      delete e.extensionSettings[fs], e.saveSettingsDebounced();
    },
    findSettingsRoot: Wa,
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
function tu(e) {
  return pt(e) ? {
    mes: typeof e.mes == "string" ? e.mes : void 0,
    is_user: typeof e.is_user == "boolean" ? e.is_user : void 0,
    is_system: typeof e.is_system == "boolean" ? e.is_system : void 0,
    swipe_id: typeof e.swipe_id == "number" ? e.swipe_id : void 0
  } : null;
}
function nu(e) {
  const t = fr();
  if (!t.eventSource)
    throw new Error("SillyTavern eventSource 不可用，无法监听消息事件");
  const n = t.eventSource;
  return {
    getSettings: e,
    getChatMessage(s) {
      return Array.isArray(t.chat) ? tu(t.chat[s]) : null;
    },
    findMessageElement(s) {
      return document.querySelector(`#chat .mes[mesid="${s}"]`);
    },
    setExtensionPrompt(s, i, o, l, r, a) {
      if (!t.setExtensionPrompt)
        throw new Error("SillyTavern.setExtensionPrompt 不可用，无法注入提示词");
      t.setExtensionPrompt(s, i, o, l, r, a);
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
        i.warning(s, be);
        return;
      }
      console.warn(`${be} ${s}`);
    }
  };
}
function su(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    const s = n.trim();
    s && t.set(s, (t.get(s) ?? 0) + 1);
  }), [...t.entries()].filter(([, n]) => n > 1).map(([n]) => n);
}
function Ni(e) {
  return [...e].sort((t, n) => t.name.localeCompare(n.name));
}
function Li(e, t, n, s) {
  const i = t.trim();
  if (!i)
    return { error: "请先填写存档名称" };
  if (n.length === 0)
    return { error: "当前没有可保存的完整映射" };
  const o = e.map((a) => ({
    name: a.name,
    mappings: [...a.mappings]
  })), l = o.findIndex((a) => a.name === i);
  if (l >= 0 && !s)
    return { error: `存档「${i}」已存在` };
  const r = { name: i, mappings: [...n] };
  return l >= 0 ? (o[l] = r, { presets: o, message: `已更新存档：${i}` }) : (o.push(r), { presets: o, message: `已保存存档：${i}` });
}
function Oi(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.find((i) => i.name === n);
  return s ? { mappings: [...s.mappings] } : { error: `未找到存档：${n}` };
}
function $i(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.filter((i) => i.name !== n);
  return s.length === e.length ? { error: `未找到存档：${n}` } : { presets: s, message: `已删除存档：${n}` };
}
const iu = {
  ja: "おはようございます。これは Tavern Multi-TTS のテスト音声です。",
  zh: "你好，这是 Tavern Multi-TTS 的测试语音。",
  en: "Hello, this is a Tavern Multi-TTS test voice."
}, ou = {
  ja: "こんにちは、これは GSVI の音声参照用サンプルです。",
  zh: "你好，这是一段 GSVI 的语音参考音频。",
  en: "Hello, this is a GSVI reference voice sample."
}, ru = [
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
], lu = [
  "不切",
  "凑四句一切",
  "凑50字一切",
  "按中文句号。切",
  "按英文句号.切",
  "按标点符号切"
];
function au(e, t) {
  return e === "local_gsvi" ? ou[t] : iu[t];
}
function cu() {
  return {
    search: "",
    language: "all",
    gender: "all",
    source: "all"
  };
}
function Di() {
  return {
    voices: [],
    filter: cu()
  };
}
function ji() {
  return {
    minimax: Di(),
    local_gsvi: Di()
  };
}
function uu(e, t) {
  return t === "local_gsvi" ? e.local_gsvi : e.minimax;
}
function fu(e, t, n) {
  const s = uu(e, t);
  return s.voices = [...n], e;
}
function du(e) {
  return [
    ...new Set(e.map((t) => t.language).filter((t) => !!t))
  ].sort();
}
function pu(e, t) {
  const n = t.search.trim().toLowerCase();
  return e.filter((s) => t.language !== "all" && s.language !== t.language || t.gender !== "all" && s.gender !== t.gender || t.source !== "all" && s.source !== t.source ? !1 : n ? [s.id, s.name, ...s.description ?? []].join(" ").toLowerCase().includes(n) : !0);
}
function Ui(e) {
  const t = [e.language, e.gender, e.source].filter(Boolean);
  return t.length > 0 ? `${e.name} (${t.join(" / ")})` : e.name;
}
function ki(e) {
  return e?.languages ?? [];
}
function Fi(e, t) {
  const n = t.trim();
  return !e || !n ? [] : e.emotionsByLanguage?.[n] ?? [];
}
function Bi(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(2)} MB`;
}
const mu = { class: "tavern-multi-tts-settings" }, hu = { class: "inline-drawer" }, gu = { class: "inline-drawer-toggle inline-drawer-header" }, vu = { class: "inline-drawer-content" }, _u = { class: "tavern-multi-tts-toolbar" }, yu = { class: "tavern-multi-tts-version" }, bu = { class: "tavern-multi-tts-row" }, xu = { class: "checkbox_label" }, Su = { class: "tavern-multi-tts-field" }, Eu = { class: "tavern-multi-tts-grid" }, wu = { class: "tavern-multi-tts-field" }, Tu = { class: "tavern-multi-tts-field" }, Cu = { class: "tavern-multi-tts-field" }, Mu = { class: "tavern-multi-tts-actions" }, Au = ["disabled"], Iu = ["disabled"], Ru = { class: "tavern-multi-tts-grid" }, Pu = ["value"], Vu = { class: "tavern-multi-tts-field" }, Gu = ["value"], Nu = { value: "" }, Lu = ["value"], Ou = { class: "tavern-multi-tts-grid" }, $u = { class: "tavern-multi-tts-field" }, Du = ["value"], ju = { class: "tavern-multi-tts-field" }, Uu = { class: "tavern-multi-tts-field" }, ku = { class: "tavern-multi-tts-field" }, Fu = { class: "tavern-multi-tts-actions" }, Bu = ["disabled"], Hu = { class: "tavern-multi-tts-grid" }, Ku = { class: "tavern-multi-tts-field" }, zu = { value: "" }, Wu = ["value"], Ju = { class: "tavern-multi-tts-field" }, Xu = ["value"], Yu = { class: "tavern-multi-tts-field" }, Zu = ["value"], Qu = { class: "tavern-multi-tts-field" }, qu = {
  class: "tavern-multi-tts-section",
  open: ""
}, ef = { class: "tavern-multi-tts-actions" }, tf = ["value"], nf = ["disabled"], sf = ["disabled"], of = ["onUpdate:modelValue"], rf = ["onUpdate:modelValue"], lf = ["value", "onChange"], af = ["value"], cf = ["disabled", "onClick"], uf = ["onClick"], ff = ["onUpdate:modelValue"], df = ["onUpdate:modelValue"], pf = { value: "" }, mf = ["value"], hf = ["onUpdate:modelValue"], gf = ["value"], vf = ["onUpdate:modelValue"], _f = ["value"], yf = ["disabled", "onClick"], bf = ["onClick"], xf = {
  key: 2,
  class: "tavern-multi-tts-hint"
}, Sf = { class: "tavern-multi-tts-row" }, Ef = { class: "checkbox_label" }, wf = ["disabled"], Tf = { class: "tavern-multi-tts-section" }, Cf = { class: "tavern-multi-tts-field" }, Mf = {
  key: 0,
  class: "tavern-multi-tts-grid"
}, Af = {
  key: 0,
  class: "tavern-multi-tts-field"
}, If = { class: "tavern-multi-tts-field" }, Rf = { class: "tavern-multi-tts-field" }, Pf = { class: "tavern-multi-tts-field" }, Vf = { class: "tavern-multi-tts-field" }, Gf = { class: "tavern-multi-tts-field" }, Nf = { class: "tavern-multi-tts-grid" }, Lf = { class: "tavern-multi-tts-field" }, Of = ["value"], $f = { class: "tavern-multi-tts-field" }, Df = ["value"], jf = { class: "tavern-multi-tts-field" }, Uf = { class: "tavern-multi-tts-actions" }, kf = ["disabled"], Ff = ["disabled"], Bf = { class: "tavern-multi-tts-hint" }, Hf = /* @__PURE__ */ cl({
  __name: "settings-panel",
  props: {
    displayName: {},
    version: {},
    settings: {},
    onSettingsChange: { type: Function }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Cn(Ot(t.settings)), s = /* @__PURE__ */ At(""), i = /* @__PURE__ */ At(!1), o = /* @__PURE__ */ Cn(ji()), l = /* @__PURE__ */ At(""), r = /* @__PURE__ */ At(""), a = /* @__PURE__ */ At(0), f = /* @__PURE__ */ At(0), u = Le(() => n.ttsEngine === "minimax"), h = Le(() => o.minimax.voices), S = Le(() => o.local_gsvi.voices), E = Le(
      () => pu(o.minimax.voices, o.minimax.filter)
    ), $ = Le(() => du(o.minimax.voices)), C = Le(
      () => o.local_gsvi.voices.find((A) => A.id === n.localGsviModel)
    ), R = Le(() => ki(C.value)), G = Le(
      () => Fi(C.value, n.localGsviLanguage)
    ), D = Le(
      () => u.value ? Ni(n.characterMappingPresets) : Ni(n.gsviCharacterMappingPresets)
    ), X = Le(
      () => su(
        (u.value ? n.characterMappings : n.gsviCharacterMappings).map(
          (A) => A.characterName
        )
      )
    ), N = Le(() => Bi(f.value));
    ol(
      n,
      () => {
        t.onSettingsChange(Ot(n));
      },
      { deep: !0 }
    );
    function P(A) {
      s.value = A;
    }
    function H(A, p) {
      if (Ja(A)) {
        P(A.message);
        return;
      }
      P(A instanceof Error ? A.message : p);
    }
    function te() {
      return n.characterMappings.map((A) => ({
        characterName: A.characterName.trim(),
        minimaxVoiceId: A.minimaxVoiceId.trim()
      })).filter((A) => A.characterName && A.minimaxVoiceId);
    }
    function le() {
      return n.gsviCharacterMappings.map((A) => ({
        characterName: A.characterName.trim(),
        gsviVoiceId: A.gsviVoiceId.trim(),
        gsviLanguage: A.gsviLanguage.trim(),
        gsviEmotion: A.gsviEmotion.trim()
      })).filter(
        (A) => A.characterName && A.gsviVoiceId && A.gsviLanguage && A.gsviEmotion
      );
    }
    async function ce(A, p, m) {
      if (!i.value) {
        i.value = !0, P(p);
        try {
          await A();
        } catch (de) {
          H(de, m);
        } finally {
          i.value = !1;
        }
      }
    }
    async function Ve(A = !1) {
      await ce(
        async () => {
          const p = Jc(n);
          if (!p) {
            P(u.value ? "请先填写 API Key" : "请先填写 Local-GSVI 服务地址");
            return;
          }
          p.engine === "minimax" && (p.forceRefresh = A);
          const m = n.ttsEngine, de = await Is(m).listVoices(p);
          fu(o, m, de), P(`已加载 ${de.length} 个${m === "minimax" ? "音色" : "模型"}`);
        },
        "正在拉取列表…",
        "拉取列表失败"
      );
    }
    function we(A) {
      n.voiceId = A, n.voiceCatalogSelectedId = A;
    }
    function Te() {
      if (u.value) {
        n.characterMappings.push({ characterName: "", minimaxVoiceId: "" });
        return;
      }
      n.gsviCharacterMappings.push({
        characterName: "",
        gsviVoiceId: "",
        gsviLanguage: "",
        gsviEmotion: ""
      });
    }
    function Ce(A) {
      if (u.value) {
        n.characterMappings.splice(A, 1);
        return;
      }
      n.gsviCharacterMappings.splice(A, 1);
    }
    function at() {
      const A = l.value, p = D.value.some((de) => de.name === A.trim());
      if (p && !window.confirm(`存档「${A.trim()}」已存在，要覆盖吗？`))
        return;
      const m = u.value ? Li(n.characterMappingPresets, A, te(), p) : Li(n.gsviCharacterMappingPresets, A, le(), p);
      if ("error" in m) {
        P(m.error);
        return;
      }
      u.value ? n.characterMappingPresets = m.presets : n.gsviCharacterMappingPresets = m.presets, r.value = A.trim(), P(m.message);
    }
    function Ge() {
      const A = u.value ? Oi(n.characterMappingPresets, r.value) : Oi(n.gsviCharacterMappingPresets, r.value);
      if ("error" in A) {
        P(A.error);
        return;
      }
      (u.value ? te().length > 0 : le().length > 0) && !window.confirm("读取存档会覆盖当前映射，确定继续吗？") || (u.value ? n.characterMappings = A.mappings : n.gsviCharacterMappings = A.mappings, P(`已读取存档：${r.value}`));
    }
    function Tt() {
      if (!window.confirm(`确定删除存档「${r.value}」吗？`))
        return;
      const A = u.value ? $i(n.characterMappingPresets, r.value) : $i(n.gsviCharacterMappingPresets, r.value);
      if ("error" in A) {
        P(A.error);
        return;
      }
      u.value ? n.characterMappingPresets = A.presets : n.gsviCharacterMappingPresets = A.presets, r.value = "", P(A.message);
    }
    async function ne(A) {
      await ce(
        async () => {
          const p = au(n.ttsEngine, n.testLanguage), m = ur(n, p, A);
          if (!m) {
            P(
              A ? `角色「${A}」未完整映射，无法测试` : "请先补全当前引擎的默认音色/模型后再测试"
            );
            return;
          }
          const de = await Is(n.ttsEngine).synthesize(m);
          Wo(de), P(A ? `正在试听「${A}」` : "正在试听默认音色");
        },
        "正在合成测试语音…",
        "测试语音失败"
      );
    }
    async function Ne() {
      await ce(
        async () => {
          const A = await Va();
          a.value = A.count, f.value = A.totalBytes, P(`缓存 ${A.count} 条，${Bi(A.totalBytes)}`);
        },
        "正在读取缓存…",
        "读取缓存失败"
      );
    }
    async function mt() {
      window.confirm("确定清空本扩展的音频缓存吗？") && await ce(
        async () => {
          await zo(), a.value = 0, f.value = 0, P("已清空音频缓存");
        },
        "正在清空缓存…",
        "清空缓存失败"
      );
    }
    function ct() {
      window.confirm("确定恢复默认设置吗？当前映射和密钥都会被清空。") && (Object.assign(n, Ot(Bt)), Object.assign(o, ji()), P("已恢复默认设置"));
    }
    function Ct() {
      R.value.includes(n.localGsviLanguage) || (n.localGsviLanguage = "", n.localGsviEmotion = "");
    }
    function Ue(A) {
      return ki(o.local_gsvi.voices.find((p) => p.id === A));
    }
    function vn(A, p) {
      return Fi(
        o.local_gsvi.voices.find((m) => m.id === A),
        p
      );
    }
    return Ne().catch((A) => H(A, "读取缓存失败")), (A, p) => (j(), U("div", mu, [
      g("div", hu, [
        g("div", gu, [
          g("b", null, z(e.displayName), 1),
          p[37] || (p[37] = g("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        g("div", vu, [
          g("div", _u, [
            g("small", yu, z(e.version), 1),
            g("small", {
              class: Hn(["tavern-multi-tts-status", { "is-busy": i.value }])
            }, z(s.value || "更改会自动保存"), 3)
          ]),
          g("div", bu, [
            g("label", xu, [
              F(g("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (m) => n.enabled = m),
                type: "checkbox"
              }, null, 512), [
                [Ei, n.enabled]
              ]),
              p[38] || (p[38] = g("span", null, "启用", -1))
            ]),
            F(g("select", {
              "onUpdate:modelValue": p[1] || (p[1] = (m) => n.ttsEngine = m),
              class: "text_pole tavern-multi-tts-engine"
            }, [...p[39] || (p[39] = [
              g("option", { value: "minimax" }, "MiniMax", -1),
              g("option", { value: "local_gsvi" }, "Local-GSVI", -1)
            ])], 512), [
              [me, n.ttsEngine]
            ])
          ]),
          u.value ? (j(), U(Z, { key: 0 }, [
            g("label", Su, [
              p[40] || (p[40] = ie(" API Key ", -1)),
              F(g("input", {
                "onUpdate:modelValue": p[2] || (p[2] = (m) => n.apiKey = m),
                class: "text_pole",
                type: "password",
                autocomplete: "off"
              }, null, 512), [
                [pe, n.apiKey]
              ])
            ]),
            g("div", Eu, [
              g("label", wu, [
                p[41] || (p[41] = ie(" Group ID ", -1)),
                F(g("input", {
                  "onUpdate:modelValue": p[3] || (p[3] = (m) => n.groupId = m),
                  class: "text_pole",
                  type: "text"
                }, null, 512), [
                  [pe, n.groupId]
                ])
              ]),
              g("label", Tu, [
                p[43] || (p[43] = ie(" 区域 ", -1)),
                F(g("select", {
                  "onUpdate:modelValue": p[4] || (p[4] = (m) => n.minimaxRegion = m),
                  class: "text_pole"
                }, [...p[42] || (p[42] = [
                  g("option", { value: "international" }, "国际", -1),
                  g("option", { value: "beijing" }, "北京", -1)
                ])], 512), [
                  [me, n.minimaxRegion]
                ])
              ])
            ]),
            g("label", Cu, [
              p[44] || (p[44] = ie(" 默认音色 ", -1)),
              F(g("input", {
                "onUpdate:modelValue": p[5] || (p[5] = (m) => n.voiceId = m),
                class: "text_pole",
                type: "text",
                placeholder: "无 char 的台词使用"
              }, null, 512), [
                [pe, n.voiceId]
              ])
            ]),
            g("div", Mu, [
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: p[6] || (p[6] = (m) => Ve(!1))
              }, " 拉取音色 ", 8, Au),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: p[7] || (p[7] = (m) => Ve(!0))
              }, " 刷新音色 ", 8, Iu)
            ]),
            h.value.length > 0 ? (j(), U(Z, { key: 0 }, [
              g("div", Ru, [
                F(g("input", {
                  "onUpdate:modelValue": p[8] || (p[8] = (m) => o.minimax.filter.search = m),
                  class: "text_pole",
                  type: "search",
                  placeholder: "搜索音色"
                }, null, 512), [
                  [pe, o.minimax.filter.search]
                ]),
                F(g("select", {
                  "onUpdate:modelValue": p[9] || (p[9] = (m) => o.minimax.filter.language = m),
                  class: "text_pole"
                }, [
                  p[45] || (p[45] = g("option", { value: "all" }, "全部语言", -1)),
                  (j(!0), U(Z, null, _e($.value, (m) => (j(), U("option", {
                    key: m,
                    value: m
                  }, z(m), 9, Pu))), 128))
                ], 512), [
                  [me, o.minimax.filter.language]
                ]),
                F(g("select", {
                  "onUpdate:modelValue": p[10] || (p[10] = (m) => o.minimax.filter.gender = m),
                  class: "text_pole"
                }, [...p[46] || (p[46] = [
                  g("option", { value: "all" }, "全部性别", -1),
                  g("option", { value: "Female" }, "Female", -1),
                  g("option", { value: "Male" }, "Male", -1),
                  g("option", { value: "Unknown" }, "Unknown", -1)
                ])], 512), [
                  [me, o.minimax.filter.gender]
                ]),
                F(g("select", {
                  "onUpdate:modelValue": p[11] || (p[11] = (m) => o.minimax.filter.source = m),
                  class: "text_pole"
                }, [...p[47] || (p[47] = [
                  g("option", { value: "all" }, "全部来源", -1),
                  g("option", { value: "system" }, "system", -1),
                  g("option", { value: "voice_cloning" }, "voice_cloning", -1),
                  g("option", { value: "voice_generation" }, "voice_generation", -1)
                ])], 512), [
                  [me, o.minimax.filter.source]
                ])
              ]),
              g("label", Vu, [
                p[48] || (p[48] = ie(" 从列表填入默认音色 ", -1)),
                g("select", {
                  class: "text_pole",
                  value: n.voiceId,
                  onChange: p[12] || (p[12] = (m) => we(m.target.value))
                }, [
                  g("option", Nu, z(E.value.length) + " 条可选", 1),
                  (j(!0), U(Z, null, _e(E.value, (m) => (j(), U("option", {
                    key: m.id,
                    value: m.id
                  }, z(Rt(Ui)(m)), 9, Lu))), 128))
                ], 40, Gu)
              ])
            ], 64)) : It("", !0),
            g("div", Ou, [
              g("label", $u, [
                p[49] || (p[49] = ie(" 模型 ", -1)),
                F(g("select", {
                  "onUpdate:modelValue": p[13] || (p[13] = (m) => n.model = m),
                  class: "text_pole"
                }, [
                  (j(!0), U(Z, null, _e(Rt(Yo), (m) => (j(), U("option", {
                    key: m,
                    value: m
                  }, z(m), 9, Du))), 128))
                ], 512), [
                  [me, n.model]
                ])
              ]),
              g("label", ju, [
                ie(" 语速 " + z(n.speed.toFixed(2)) + " ", 1),
                F(g("input", {
                  "onUpdate:modelValue": p[14] || (p[14] = (m) => n.speed = m),
                  type: "range",
                  min: "0.5",
                  max: "2",
                  step: "0.05"
                }, null, 512), [
                  [
                    pe,
                    n.speed,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              g("label", Uu, [
                ie(" 音量 " + z(n.vol.toFixed(2)) + " ", 1),
                F(g("input", {
                  "onUpdate:modelValue": p[15] || (p[15] = (m) => n.vol = m),
                  type: "range",
                  min: "0",
                  max: "10",
                  step: "0.1"
                }, null, 512), [
                  [
                    pe,
                    n.vol,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ])
          ], 64)) : (j(), U(Z, { key: 1 }, [
            g("label", ku, [
              p[50] || (p[50] = ie(" 服务地址 ", -1)),
              F(g("input", {
                "onUpdate:modelValue": p[16] || (p[16] = (m) => n.localGsviBaseUrl = m),
                class: "text_pole",
                type: "url",
                placeholder: "http://127.0.0.1:9880"
              }, null, 512), [
                [pe, n.localGsviBaseUrl]
              ])
            ]),
            g("div", Fu, [
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: p[17] || (p[17] = (m) => Ve(!1))
              }, " 拉取模型 ", 8, Bu)
            ]),
            g("div", Hu, [
              g("label", Ku, [
                p[51] || (p[51] = ie(" 默认模型 ", -1)),
                F(g("select", {
                  "onUpdate:modelValue": p[18] || (p[18] = (m) => n.localGsviModel = m),
                  class: "text_pole",
                  onChange: Ct
                }, [
                  g("option", zu, z(S.value.length > 0 ? "请选择" : "先拉取模型"), 1),
                  (j(!0), U(Z, null, _e(S.value, (m) => (j(), U("option", {
                    key: m.id,
                    value: m.id
                  }, z(m.name), 9, Wu))), 128))
                ], 544), [
                  [me, n.localGsviModel]
                ])
              ]),
              g("label", Ju, [
                p[53] || (p[53] = ie(" 语种 ", -1)),
                F(g("select", {
                  "onUpdate:modelValue": p[19] || (p[19] = (m) => n.localGsviLanguage = m),
                  class: "text_pole"
                }, [
                  p[52] || (p[52] = g("option", { value: "" }, "请选择", -1)),
                  (j(!0), U(Z, null, _e(R.value, (m) => (j(), U("option", {
                    key: m,
                    value: m
                  }, z(m), 9, Xu))), 128))
                ], 512), [
                  [me, n.localGsviLanguage]
                ])
              ]),
              g("label", Yu, [
                p[55] || (p[55] = ie(" 情绪 ", -1)),
                F(g("select", {
                  "onUpdate:modelValue": p[20] || (p[20] = (m) => n.localGsviEmotion = m),
                  class: "text_pole"
                }, [
                  p[54] || (p[54] = g("option", { value: "" }, "请选择", -1)),
                  (j(!0), U(Z, null, _e(G.value, (m) => (j(), U("option", {
                    key: m,
                    value: m
                  }, z(m), 9, Zu))), 128))
                ], 512), [
                  [me, n.localGsviEmotion]
                ])
              ])
            ]),
            g("label", Qu, [
              ie(" 语速 " + z(n.speed.toFixed(2)) + " ", 1),
              F(g("input", {
                "onUpdate:modelValue": p[21] || (p[21] = (m) => n.speed = m),
                type: "range",
                min: "0.5",
                max: "2",
                step: "0.05"
              }, null, 512), [
                [
                  pe,
                  n.speed,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ], 64)),
          g("details", qu, [
            g("summary", null, " 角色映射 " + z(u.value ? n.characterMappings.length : n.gsviCharacterMappings.length), 1),
            p[60] || (p[60] = g("p", { class: "tavern-multi-tts-hint" }, "只给映射名单里的角色生成语音；名单外的台词会跳过。", -1)),
            g("div", ef, [
              F(g("input", {
                "onUpdate:modelValue": p[22] || (p[22] = (m) => l.value = m),
                class: "text_pole",
                type: "text",
                placeholder: "存档名"
              }, null, 512), [
                [pe, l.value]
              ]),
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: at
              }, "保存"),
              F(g("select", {
                "onUpdate:modelValue": p[23] || (p[23] = (m) => r.value = m),
                class: "text_pole"
              }, [
                p[56] || (p[56] = g("option", { value: "" }, "读取存档", -1)),
                (j(!0), U(Z, null, _e(D.value, (m) => (j(), U("option", {
                  key: m.name,
                  value: m.name
                }, z(m.name) + "（" + z(m.mappings.length) + "） ", 9, tf))), 128))
              ], 512), [
                [me, r.value]
              ]),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: !r.value,
                onClick: Ge
              }, " 读取 ", 8, nf),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: !r.value,
                onClick: Tt
              }, " 删除 ", 8, sf)
            ]),
            u.value ? (j(!0), U(Z, { key: 0 }, _e(n.characterMappings, (m, de) => (j(), U("div", {
              key: `mm-${de}`,
              class: "tavern-multi-tts-mapping"
            }, [
              F(g("input", {
                "onUpdate:modelValue": (B) => m.characterName = B,
                class: "text_pole",
                type: "text",
                placeholder: "角色名"
              }, null, 8, of), [
                [pe, m.characterName]
              ]),
              F(g("input", {
                "onUpdate:modelValue": (B) => m.minimaxVoiceId = B,
                class: "text_pole",
                type: "text",
                placeholder: "Voice ID"
              }, null, 8, rf), [
                [pe, m.minimaxVoiceId]
              ]),
              h.value.length > 0 ? (j(), U("select", {
                key: 0,
                class: "text_pole",
                value: m.minimaxVoiceId,
                onChange: (B) => m.minimaxVoiceId = B.target.value
              }, [
                p[57] || (p[57] = g("option", { value: "" }, "从列表选择", -1)),
                (j(!0), U(Z, null, _e(E.value, (B) => (j(), U("option", {
                  key: B.id,
                  value: B.id
                }, z(Rt(Ui)(B)), 9, af))), 128))
              ], 40, lf)) : It("", !0),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: (B) => ne(m.characterName)
              }, " 试听 ", 8, cf),
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: (B) => Ce(de)
              }, "删除", 8, uf)
            ]))), 128)) : (j(!0), U(Z, { key: 1 }, _e(n.gsviCharacterMappings, (m, de) => (j(), U("div", {
              key: `gsvi-${de}`,
              class: "tavern-multi-tts-mapping is-gsvi"
            }, [
              F(g("input", {
                "onUpdate:modelValue": (B) => m.characterName = B,
                class: "text_pole",
                type: "text",
                placeholder: "角色名"
              }, null, 8, ff), [
                [pe, m.characterName]
              ]),
              F(g("select", {
                "onUpdate:modelValue": (B) => m.gsviVoiceId = B,
                class: "text_pole"
              }, [
                g("option", pf, z(S.value.length > 0 ? "模型" : "先拉取模型"), 1),
                (j(!0), U(Z, null, _e(S.value, (B) => (j(), U("option", {
                  key: B.id,
                  value: B.id
                }, z(B.name), 9, mf))), 128))
              ], 8, df), [
                [me, m.gsviVoiceId]
              ]),
              F(g("select", {
                "onUpdate:modelValue": (B) => m.gsviLanguage = B,
                class: "text_pole"
              }, [
                p[58] || (p[58] = g("option", { value: "" }, "语种", -1)),
                (j(!0), U(Z, null, _e(Ue(m.gsviVoiceId), (B) => (j(), U("option", {
                  key: B,
                  value: B
                }, z(B), 9, gf))), 128))
              ], 8, hf), [
                [me, m.gsviLanguage]
              ]),
              F(g("select", {
                "onUpdate:modelValue": (B) => m.gsviEmotion = B,
                class: "text_pole"
              }, [
                p[59] || (p[59] = g("option", { value: "" }, "情绪", -1)),
                (j(!0), U(Z, null, _e(vn(m.gsviVoiceId, m.gsviLanguage), (B) => (j(), U("option", {
                  key: B,
                  value: B
                }, z(B), 9, _f))), 128))
              ], 8, vf), [
                [me, m.gsviEmotion]
              ]),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: (B) => ne(m.characterName)
              }, " 试听 ", 8, yf),
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: (B) => Ce(de)
              }, "删除", 8, bf)
            ]))), 128)),
            g("div", { class: "tavern-multi-tts-actions" }, [
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: Te
              }, "添加角色")
            ]),
            X.value.length > 0 ? (j(), U("p", xf, " 重复角色名：" + z(X.value.join("、")) + "，以后一条为准。 ", 1)) : It("", !0)
          ]),
          g("div", Sf, [
            g("label", Ef, [
              F(g("input", {
                "onUpdate:modelValue": p[24] || (p[24] = (m) => n.injectEnabled = m),
                type: "checkbox"
              }, null, 512), [
                [Ei, n.injectEnabled]
              ]),
              p[61] || (p[61] = g("span", null, "注入 <say> 提示", -1))
            ]),
            F(g("select", {
              "onUpdate:modelValue": p[25] || (p[25] = (m) => n.testLanguage = m),
              class: "text_pole"
            }, [...p[62] || (p[62] = [
              g("option", { value: "ja" }, "试听：日", -1),
              g("option", { value: "zh" }, "试听：中", -1),
              g("option", { value: "en" }, "试听：英", -1)
            ])], 512), [
              [me, n.testLanguage]
            ]),
            g("button", {
              class: "menu_button",
              type: "button",
              disabled: i.value,
              onClick: p[26] || (p[26] = (m) => ne())
            }, z(u.value ? "测试默认音色（消耗额度）" : "测试默认模型"), 9, wf)
          ]),
          g("details", Tf, [
            p[73] || (p[73] = g("summary", null, "高级", -1)),
            g("label", Cf, [
              p[64] || (p[64] = ie(" 预取 ", -1)),
              F(g("select", {
                "onUpdate:modelValue": p[27] || (p[27] = (m) => n.prefetchMode = m),
                class: "text_pole"
              }, [...p[63] || (p[63] = [
                g("option", { value: "manual" }, "只在点击时生成", -1),
                g("option", { value: "auto_all" }, "自动预取全部", -1),
                g("option", { value: "auto_first_n" }, "自动预取前 N 句", -1)
              ])], 512), [
                [me, n.prefetchMode]
              ])
            ]),
            n.prefetchMode !== "manual" ? (j(), U("div", Mf, [
              n.prefetchMode === "auto_first_n" ? (j(), U("label", Af, [
                p[65] || (p[65] = ie(" 前 N 句 ", -1)),
                F(g("input", {
                  "onUpdate:modelValue": p[28] || (p[28] = (m) => n.prefetchFirstCount = m),
                  class: "text_pole",
                  type: "number",
                  min: "1",
                  max: "10"
                }, null, 512), [
                  [
                    pe,
                    n.prefetchFirstCount,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])) : It("", !0),
              g("label", If, [
                p[66] || (p[66] = ie(" 并发 ", -1)),
                F(g("input", {
                  "onUpdate:modelValue": p[29] || (p[29] = (m) => n.maxConcurrency = m),
                  class: "text_pole",
                  type: "number",
                  min: "1",
                  max: "10"
                }, null, 512), [
                  [
                    pe,
                    n.maxConcurrency,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ])) : It("", !0),
            g("label", Rf, [
              ie(" 注入深度 D" + z(n.injectDepth) + " ", 1),
              F(g("input", {
                "onUpdate:modelValue": p[30] || (p[30] = (m) => n.injectDepth = m),
                type: "range",
                min: "0",
                max: "10",
                step: "1"
              }, null, 512), [
                [
                  pe,
                  n.injectDepth,
                  void 0,
                  { number: !0 }
                ]
              ])
            ]),
            g("label", Pf, [
              p[68] || (p[68] = ie(" 注入角色 ", -1)),
              F(g("select", {
                "onUpdate:modelValue": p[31] || (p[31] = (m) => n.injectRole = m),
                class: "text_pole"
              }, [...p[67] || (p[67] = [
                g("option", { value: "system" }, "system", -1),
                g("option", { value: "user" }, "user", -1),
                g("option", { value: "assistant" }, "assistant", -1)
              ])], 512), [
                [me, n.injectRole]
              ])
            ]),
            g("label", Vf, [
              p[69] || (p[69] = ie(" 注入模板 ", -1)),
              F(g("textarea", {
                "onUpdate:modelValue": p[32] || (p[32] = (m) => n.injectTemplate = m),
                class: "text_pole",
                rows: "5"
              }, null, 512), [
                [pe, n.injectTemplate]
              ])
            ]),
            u.value ? It("", !0) : (j(), U(Z, { key: 1 }, [
              g("label", Gf, [
                p[70] || (p[70] = ie(" 鉴权 Token ", -1)),
                F(g("input", {
                  "onUpdate:modelValue": p[33] || (p[33] = (m) => n.localGsviAuthToken = m),
                  class: "text_pole",
                  type: "password",
                  autocomplete: "off"
                }, null, 512), [
                  [pe, n.localGsviAuthToken]
                ])
              ]),
              g("div", Nf, [
                g("label", Lf, [
                  p[71] || (p[71] = ie(" 文本语言 ", -1)),
                  F(g("select", {
                    "onUpdate:modelValue": p[34] || (p[34] = (m) => n.localGsviTextLang = m),
                    class: "text_pole"
                  }, [
                    (j(!0), U(Z, null, _e(Rt(ru), (m) => (j(), U("option", {
                      key: m,
                      value: m
                    }, z(m), 9, Of))), 128))
                  ], 512), [
                    [me, n.localGsviTextLang]
                  ])
                ]),
                g("label", $f, [
                  p[72] || (p[72] = ie(" 切分 ", -1)),
                  F(g("select", {
                    "onUpdate:modelValue": p[35] || (p[35] = (m) => n.localGsviTextSplitMethod = m),
                    class: "text_pole"
                  }, [
                    (j(!0), U(Z, null, _e(Rt(lu), (m) => (j(), U("option", {
                      key: m,
                      value: m
                    }, z(m), 9, Df))), 128))
                  ], 512), [
                    [me, n.localGsviTextSplitMethod]
                  ])
                ])
              ]),
              g("label", jf, [
                ie(" Batch " + z(n.localGsviBatchSize) + " ", 1),
                F(g("input", {
                  "onUpdate:modelValue": p[36] || (p[36] = (m) => n.localGsviBatchSize = m),
                  type: "range",
                  min: "1",
                  max: "8",
                  step: "1"
                }, null, 512), [
                  [
                    pe,
                    n.localGsviBatchSize,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ], 64)),
            g("div", Uf, [
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: Ne
              }, " 刷新缓存 ", 8, kf),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: mt
              }, " 清空缓存 ", 8, Ff),
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: ct
              }, "恢复默认")
            ]),
            g("p", Bf, " 缓存 " + z(a.value) + " 条 / " + z(N.value) + "，上限 100 条或 50MB。 ", 1)
          ])
        ])
      ])
    ]));
  }
});
let Yt = null, Zt = null, Dn = null;
function Kf() {
  return Ot(dr().readRawSettings());
}
function zf() {
  return Dn ??= Zc(nu(Kf)), Dn;
}
function Ht() {
  return Zt || (Zt = za(
    dr(),
    {
      mount(e, t) {
        Yt?.unmount(), Yt = _a(Hf, {
          displayName: La,
          version: Oa,
          settings: t,
          onSettingsChange(n) {
            Zt?.updateSettings(n);
          }
        }), Yt.mount(e);
      },
      unmount() {
        Yt?.unmount(), Yt = null;
      }
    },
    {
      stopPlayback: ws,
      clearCache: zo,
      startRuntime: () => zf().start(),
      stopRuntime: () => Dn?.stop(),
      syncRuntime: () => Dn?.syncFromSettings()
    }
  ), Zt);
}
async function Kt(e, t) {
  try {
    await t();
  } catch (n) {
    const s = n instanceof Error ? n.message : String(n);
    throw console.error(`${be} ${e} failed: ${s}`), n;
  }
}
async function Jf() {
  await Kt("onInstall", () => Ht().install());
}
async function Xf() {
  await Kt("onActivate", () => Ht().activate());
}
async function Yf() {
  await Kt("onEnable", () => Ht().activate());
}
async function Zf() {
  await Kt("onDisable", () => Ht().disable());
}
async function Qf() {
  await Kt("onClean", () => Ht().clean());
}
async function qf() {
  await Kt("onDelete", () => Ht().delete());
}
export {
  Xf as onActivate,
  Qf as onClean,
  qf as onDelete,
  Zf as onDisable,
  Yf as onEnable,
  Jf as onInstall
};
//# sourceMappingURL=index.js.map
