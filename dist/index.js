// @__NO_SIDE_EFFECTS__
function Ls(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ae = {}, Lt = [], _t = () => {
}, Ji = () => !1, Bn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Hn = (e) => e.startsWith("onUpdate:"), Fe = Object.assign, Xi = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, _r = Object.prototype.hasOwnProperty, ne = (e, t) => _r.call(e, t), H = Array.isArray, Ot = (e) => yn(e) === "[object Map]", Ht = (e) => yn(e) === "[object Set]", ti = (e) => yn(e) === "[object Date]", ee = (e) => typeof e == "function", me = (e) => typeof e == "string", qe = (e) => typeof e == "symbol", ce = (e) => e !== null && typeof e == "object", Yi = (e) => (ce(e) || ee(e)) && ee(e.then) && ee(e.catch), Zi = Object.prototype.toString, yn = (e) => Zi.call(e), yr = (e) => yn(e).slice(8, -1), Qi = (e) => yn(e) === "[object Object]", Os = (e) => me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, sn = /* @__PURE__ */ Ls(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Kn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, br = /-\w/g, je = Kn(
  (e) => e.replace(br, (t) => t.slice(1).toUpperCase())
), xr = /\B([A-Z])/g, wt = Kn(
  (e) => e.replace(xr, "-$1").toLowerCase()
), qi = Kn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ss = Kn(
  (e) => e ? `on${qi(e)}` : ""
), Ze = (e, t) => !Object.is(e, t), Cn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, eo = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, zn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ni;
const Wn = () => ni || (ni = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $s(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = me(s) ? Tr(s) : $s(s);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (me(e) || ce(e))
    return e;
}
const Sr = /;(?![^(]*\))/g, Er = /:([^]+)/, wr = /\/\*[^]*?\*\//g;
function Tr(e) {
  const t = {};
  return e.replace(wr, "").split(Sr).forEach((n) => {
    if (n) {
      const s = n.split(Er);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Jn(e) {
  let t = "";
  if (me(e))
    t = e;
  else if (H(e))
    for (let n = 0; n < e.length; n++) {
      const s = Jn(e[n]);
      s && (t += s + " ");
    }
  else if (ce(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Cr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Mr = /* @__PURE__ */ Ls(Cr);
function to(e) {
  return !!e || e === "";
}
function Ar(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Kt(e[s], t[s]);
  return n;
}
function Kt(e, t) {
  if (e === t) return !0;
  let n = ti(e), s = ti(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = qe(e), s = qe(t), n || s)
    return e === t;
  if (n = H(e), s = H(t), n || s)
    return n && s ? Ar(e, t) : !1;
  if (n = ce(e), s = ce(t), n || s) {
    if (!n || !s)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !Kt(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ds(e, t) {
  return e.findIndex((n) => Kt(n, t));
}
const no = (e) => !!(e && e.__v_isRef === !0), J = (e) => me(e) ? e : e == null ? "" : H(e) || ce(e) && (e.toString === Zi || !ee(e.toString)) ? no(e) ? J(e.value) : JSON.stringify(e, so, 2) : String(e), so = (e, t) => no(t) ? so(e, t.value) : Ot(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], o) => (n[is(s, o) + " =>"] = i, n),
    {}
  )
} : Ht(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => is(n))
} : qe(t) ? is(t) : ce(t) && !H(t) && !Qi(t) ? String(t) : t, is = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let _e;
class Ir {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && _e && (_e.active ? (this.parent = _e, this.index = (_e.scopes || (_e.scopes = [])).push(
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
      const n = _e;
      try {
        return _e = this, t();
      } finally {
        _e = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = _e, _e = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (_e === this)
        _e = this.prevScope;
      else {
        let t = _e;
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
function Rr() {
  return _e;
}
let ie;
const os = /* @__PURE__ */ new WeakSet();
class io {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _e && (_e.active ? _e.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, os.has(this) && (os.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ro(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, si(this), lo(this);
    const t = ie, n = Ue;
    ie = this, Ue = !0;
    try {
      return this.fn();
    } finally {
      ao(this), ie = t, Ue = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ks(t);
      this.deps = this.depsTail = void 0, si(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? os.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    xs(this) && this.run();
  }
  get dirty() {
    return xs(this);
  }
}
let oo = 0, on, rn;
function ro(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = rn, rn = e;
    return;
  }
  e.next = on, on = e;
}
function js() {
  oo++;
}
function Us() {
  if (--oo > 0)
    return;
  if (rn) {
    let t = rn;
    for (rn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; on; ) {
    let t = on;
    for (on = void 0; t; ) {
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
function lo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ao(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), ks(s), Pr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function xs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (co(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function co(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === dn) || (e.globalVersion = dn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ie, s = Ue;
  ie = e, Ue = !0;
  try {
    lo(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ze(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ie = n, Ue = s, ao(e), e.flags &= -3;
  }
}
function ks(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      ks(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Pr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ue = !0;
const uo = [];
function St() {
  uo.push(Ue), Ue = !1;
}
function Et() {
  const e = uo.pop();
  Ue = e === void 0 ? !0 : e;
}
function si(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ie;
    ie = void 0;
    try {
      t();
    } finally {
      ie = n;
    }
  }
}
let dn = 0;
class Nr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Fs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ie || !Ue || ie === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ie)
      n = this.activeLink = new Nr(ie, this), ie.deps ? (n.prevDep = ie.depsTail, ie.depsTail.nextDep = n, ie.depsTail = n) : ie.deps = ie.depsTail = n, fo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ie.depsTail, n.nextDep = void 0, ie.depsTail.nextDep = n, ie.depsTail = n, ie.deps === n && (ie.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, dn++, this.notify(t);
  }
  notify(t) {
    js();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Us();
    }
  }
}
function fo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        fo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ss = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ Symbol(
  ""
), Es = /* @__PURE__ */ Symbol(
  ""
), pn = /* @__PURE__ */ Symbol(
  ""
);
function ye(e, t, n) {
  if (Ue && ie) {
    let s = Ss.get(e);
    s || Ss.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Fs()), i.map = s, i.key = n), i.track();
  }
}
function it(e, t, n, s, i, o) {
  const r = Ss.get(e);
  if (!r) {
    dn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (js(), t === "clear")
    r.forEach(l);
  else {
    const a = H(e), f = a && Os(n);
    if (a && n === "length") {
      const u = Number(s);
      r.forEach((h, E) => {
        (E === "length" || E === pn || !qe(E) && E >= u) && l(h);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), f && l(r.get(pn)), t) {
        case "add":
          a ? f && l(r.get("length")) : (l(r.get(yt)), Ot(e) && l(r.get(Es)));
          break;
        case "delete":
          a || (l(r.get(yt)), Ot(e) && l(r.get(Es)));
          break;
        case "set":
          Ot(e) && l(r.get(yt));
          break;
      }
  }
  Us();
}
function Rt(e) {
  const t = /* @__PURE__ */ Y(e);
  return t === e ? t : (ye(t, "iterate", pn), /* @__PURE__ */ Le(e) ? t : t.map(ke));
}
function Xn(e) {
  return ye(e = /* @__PURE__ */ Y(e), "iterate", pn), e;
}
function Xe(e, t) {
  return /* @__PURE__ */ lt(e) ? Ut(/* @__PURE__ */ bt(e) ? ke(t) : t) : ke(t);
}
const Vr = {
  __proto__: null,
  [Symbol.iterator]() {
    return rs(this, Symbol.iterator, (e) => Xe(this, e));
  },
  concat(...e) {
    return Rt(this).concat(
      ...e.map((t) => H(t) ? Rt(t) : t)
    );
  },
  entries() {
    return rs(this, "entries", (e) => (e[1] = Xe(this, e[1]), e));
  },
  every(e, t) {
    return et(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return et(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Xe(this, s)),
      arguments
    );
  },
  find(e, t) {
    return et(
      this,
      "find",
      e,
      t,
      (n) => Xe(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return et(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return et(
      this,
      "findLast",
      e,
      t,
      (n) => Xe(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return et(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return et(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ls(this, "includes", e);
  },
  indexOf(...e) {
    return ls(this, "indexOf", e);
  },
  join(e) {
    return Rt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ls(this, "lastIndexOf", e);
  },
  map(e, t) {
    return et(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Zt(this, "pop");
  },
  push(...e) {
    return Zt(this, "push", e);
  },
  reduce(e, ...t) {
    return ii(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ii(this, "reduceRight", e, t);
  },
  shift() {
    return Zt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return et(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Zt(this, "splice", e);
  },
  toReversed() {
    return Rt(this).toReversed();
  },
  toSorted(e) {
    return Rt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Rt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Zt(this, "unshift", e);
  },
  values() {
    return rs(this, "values", (e) => Xe(this, e));
  }
};
function rs(e, t, n) {
  const s = Xn(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ Le(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const Gr = Array.prototype;
function et(e, t, n, s, i, o) {
  const r = Xn(e), l = r !== e && !/* @__PURE__ */ Le(e), a = r[t];
  if (a !== Gr[t]) {
    const h = a.apply(e, o);
    return l ? ke(h) : h;
  }
  let f = n;
  r !== e && (l ? f = function(h, E) {
    return n.call(this, Xe(e, h), E, e);
  } : n.length > 2 && (f = function(h, E) {
    return n.call(this, h, E, e);
  }));
  const u = a.call(r, f, s);
  return l && i ? i(u) : u;
}
function ii(e, t, n, s) {
  const i = Xn(e), o = i !== e && !/* @__PURE__ */ Le(e);
  let r = n, l = !1;
  i !== e && (o ? (l = s.length === 0, r = function(f, u, h) {
    return l && (l = !1, f = Xe(e, f)), n.call(this, f, Xe(e, u), h, e);
  }) : n.length > 3 && (r = function(f, u, h) {
    return n.call(this, f, u, h, e);
  }));
  const a = i[t](r, ...s);
  return l ? Xe(e, a) : a;
}
function ls(e, t, n) {
  const s = /* @__PURE__ */ Y(e);
  ye(s, "iterate", pn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ks(n[0]) ? (n[0] = /* @__PURE__ */ Y(n[0]), s[t](...n)) : i;
}
function Zt(e, t, n = []) {
  St(), js();
  const s = (/* @__PURE__ */ Y(e))[t].apply(e, n);
  return Us(), Et(), s;
}
const Lr = /* @__PURE__ */ Ls("__proto__,__v_isRef,__isVue"), po = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qe)
);
function Or(e) {
  qe(e) || (e = String(e));
  const t = /* @__PURE__ */ Y(this);
  return ye(t, "has", e), t.hasOwnProperty(e);
}
class mo {
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
      return s === (i ? o ? zr : _o : o ? vo : go).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = H(t);
    if (!i) {
      let a;
      if (r && (a = Vr[n]))
        return a;
      if (n === "hasOwnProperty")
        return Or;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ we(t) ? t : s
    );
    if ((qe(n) ? po.has(n) : Lr(n)) || (i || ye(t, "get", n), o))
      return l;
    if (/* @__PURE__ */ we(l)) {
      const a = r && Os(n) ? l : l.value;
      return i && ce(a) ? /* @__PURE__ */ Ts(a) : a;
    }
    return ce(l) ? i ? /* @__PURE__ */ Ts(l) : /* @__PURE__ */ Rn(l) : l;
  }
}
class ho extends mo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let o = t[n];
    const r = H(t) && Os(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ lt(o);
      if (!/* @__PURE__ */ Le(s) && !/* @__PURE__ */ lt(s) && (o = /* @__PURE__ */ Y(o), s = /* @__PURE__ */ Y(s)), !r && /* @__PURE__ */ we(o) && !/* @__PURE__ */ we(s))
        return f || (o.value = s), !0;
    }
    const l = r ? Number(n) < t.length : ne(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ we(t) ? t : i
    );
    return t === /* @__PURE__ */ Y(i) && a && (l ? Ze(s, o) && it(t, "set", n, s) : it(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = ne(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && it(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!qe(n) || !po.has(n)) && ye(t, "has", n), s;
  }
  ownKeys(t) {
    return ye(
      t,
      "iterate",
      H(t) ? "length" : yt
    ), Reflect.ownKeys(t);
  }
}
class $r extends mo {
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
const Dr = /* @__PURE__ */ new ho(), jr = /* @__PURE__ */ new $r(), Ur = /* @__PURE__ */ new ho(!0);
const ws = (e) => e, Sn = (e) => Reflect.getPrototypeOf(e);
function kr(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, o = /* @__PURE__ */ Y(i), r = Ot(o), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, f = i[e](...s), u = n ? ws : t ? Ut : ke;
    return !t && ye(
      o,
      "iterate",
      a ? Es : yt
    ), Fe(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: h, done: E } = f.next();
          return E ? { value: h, done: E } : {
            value: l ? [u(h[0]), u(h[1])] : u(h),
            done: E
          };
        }
      }
    );
  };
}
function En(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Fr(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ Y(o), l = /* @__PURE__ */ Y(i);
      e || (Ze(i, l) && ye(r, "get", i), ye(r, "get", l));
      const { has: a } = Sn(r), f = t ? ws : e ? Ut : ke;
      if (a.call(r, i))
        return f(o.get(i));
      if (a.call(r, l))
        return f(o.get(l));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ye(/* @__PURE__ */ Y(i), "iterate", yt), i.size;
    },
    has(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ Y(o), l = /* @__PURE__ */ Y(i);
      return e || (Ze(i, l) && ye(r, "has", i), ye(r, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ Y(l), f = t ? ws : e ? Ut : ke;
      return !e && ye(a, "iterate", yt), l.forEach((u, h) => i.call(o, f(u), f(h), r));
    }
  };
  return Fe(
    n,
    e ? {
      add: En("add"),
      set: En("set"),
      delete: En("delete"),
      clear: En("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ Y(this), r = Sn(o), l = /* @__PURE__ */ Y(i), a = !t && !/* @__PURE__ */ Le(i) && !/* @__PURE__ */ lt(i) ? l : i;
        return r.has.call(o, a) || Ze(i, a) && r.has.call(o, i) || Ze(l, a) && r.has.call(o, l) || (o.add(a), it(o, "add", a, a)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Le(o) && !/* @__PURE__ */ lt(o) && (o = /* @__PURE__ */ Y(o));
        const r = /* @__PURE__ */ Y(this), { has: l, get: a } = Sn(r);
        let f = l.call(r, i);
        f || (i = /* @__PURE__ */ Y(i), f = l.call(r, i));
        const u = a.call(r, i);
        return r.set(i, o), f ? Ze(o, u) && it(r, "set", i, o) : it(r, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ Y(this), { has: r, get: l } = Sn(o);
        let a = r.call(o, i);
        a || (i = /* @__PURE__ */ Y(i), a = r.call(o, i)), l && l.call(o, i);
        const f = o.delete(i);
        return a && it(o, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ Y(this), o = i.size !== 0, r = i.clear();
        return o && it(
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
    n[i] = kr(i, e, t);
  }), n;
}
function Bs(e, t) {
  const n = Fr(e, t);
  return (s, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    ne(n, i) && i in s ? n : s,
    i,
    o
  );
}
const Br = {
  get: /* @__PURE__ */ Bs(!1, !1)
}, Hr = {
  get: /* @__PURE__ */ Bs(!1, !0)
}, Kr = {
  get: /* @__PURE__ */ Bs(!0, !1)
};
const go = /* @__PURE__ */ new WeakMap(), vo = /* @__PURE__ */ new WeakMap(), _o = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap();
function Wr(e) {
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
function Rn(e) {
  return /* @__PURE__ */ lt(e) ? e : Hs(
    e,
    !1,
    Dr,
    Br,
    go
  );
}
// @__NO_SIDE_EFFECTS__
function Jr(e) {
  return Hs(
    e,
    !1,
    Ur,
    Hr,
    vo
  );
}
// @__NO_SIDE_EFFECTS__
function Ts(e) {
  return Hs(
    e,
    !0,
    jr,
    Kr,
    _o
  );
}
function Hs(e, t, n, s, i) {
  if (!ce(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = Wr(yr(e));
  if (r === 0)
    return e;
  const l = new Proxy(
    e,
    r === 2 ? s : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  return /* @__PURE__ */ lt(e) ? /* @__PURE__ */ bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Y(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Y(t) : e;
}
function Xr(e) {
  return !ne(e, "__v_skip") && Object.isExtensible(e) && eo(e, "__v_skip", !0), e;
}
const ke = (e) => ce(e) ? /* @__PURE__ */ Rn(e) : e, Ut = (e) => ce(e) ? /* @__PURE__ */ Ts(e) : e;
// @__NO_SIDE_EFFECTS__
function we(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Pt(e) {
  return Yr(e, !1);
}
function Yr(e, t) {
  return /* @__PURE__ */ we(e) ? e : new Zr(e, t);
}
class Zr {
  constructor(t, n) {
    this.dep = new Fs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Y(t), this._value = n ? t : ke(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Le(t) || /* @__PURE__ */ lt(t);
    t = s ? t : /* @__PURE__ */ Y(t), Ze(t, n) && (this._rawValue = t, this._value = s ? t : ke(t), this.dep.trigger());
  }
}
function Vt(e) {
  return /* @__PURE__ */ we(e) ? e.value : e;
}
const Qr = {
  get: (e, t, n) => t === "__v_raw" ? e : Vt(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ we(i) && !/* @__PURE__ */ we(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function yo(e) {
  return /* @__PURE__ */ bt(e) ? e : new Proxy(e, Qr);
}
class qr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Fs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ie !== this)
      return ro(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return co(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function el(e, t, n = !1) {
  let s, i;
  return ee(e) ? s = e : (s = e.get, i = e.set), new qr(s, i, n);
}
const wn = {}, Pn = /* @__PURE__ */ new WeakMap();
let vt;
function tl(e, t = !1, n = vt) {
  if (n) {
    let s = Pn.get(n);
    s || Pn.set(n, s = []), s.push(e);
  }
}
function nl(e, t, n = ae) {
  const { immediate: s, deep: i, once: o, scheduler: r, augmentJob: l, call: a } = n, f = (L) => i ? L : /* @__PURE__ */ Le(L) || i === !1 || i === 0 ? ot(L, 1) : ot(L);
  let u, h, E, S, $ = !1, A = !1;
  if (/* @__PURE__ */ we(e) ? (h = () => e.value, $ = /* @__PURE__ */ Le(e)) : /* @__PURE__ */ bt(e) ? (h = () => f(e), $ = !0) : H(e) ? (A = !0, $ = e.some((L) => /* @__PURE__ */ bt(L) || /* @__PURE__ */ Le(L)), h = () => e.map((L) => {
    if (/* @__PURE__ */ we(L))
      return L.value;
    if (/* @__PURE__ */ bt(L))
      return f(L);
    if (ee(L))
      return a ? a(L, 2) : L();
  })) : ee(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (E) {
      St();
      try {
        E();
      } finally {
        Et();
      }
    }
    const L = vt;
    vt = u;
    try {
      return a ? a(e, 3, [S]) : e(S);
    } finally {
      vt = L;
    }
  } : h = _t, t && i) {
    const L = h, k = i === !0 ? 1 / 0 : i;
    h = () => ot(L(), k);
  }
  const P = Rr(), N = () => {
    u.stop(), P && P.active && Xi(P.effects, u);
  };
  if (o && t) {
    const L = t;
    t = (...k) => {
      const Te = L(...k);
      return N(), Te;
    };
  }
  let U = A ? new Array(e.length).fill(wn) : wn;
  const Z = (L) => {
    if (!(!(u.flags & 1) || !u.dirty && !L))
      if (t) {
        const k = u.run();
        if (L || i || $ || (A ? k.some((Te, Ie) => Ze(Te, U[Ie])) : Ze(k, U))) {
          E && E();
          const Te = vt;
          vt = u;
          try {
            const Ie = [
              k,
              // pass undefined as the old value when it's changed for the first time
              U === wn ? void 0 : A && U[0] === wn ? [] : U,
              S
            ];
            U = k, a ? a(t, 3, Ie) : (
              // @ts-expect-error
              t(...Ie)
            );
          } finally {
            vt = Te;
          }
        }
      } else
        u.run();
  };
  return l && l(Z), u = new io(h), u.scheduler = r ? () => r(Z, !1) : Z, S = (L) => tl(L, !1, u), E = u.onStop = () => {
    const L = Pn.get(u);
    if (L) {
      if (a)
        a(L, 4);
      else
        for (const k of L) k();
      Pn.delete(u);
    }
  }, t ? s ? Z(!0) : U = u.run() : r ? r(Z.bind(null, !0), !0) : u.run(), N.pause = u.pause.bind(u), N.resume = u.resume.bind(u), N.stop = N, N;
}
function ot(e, t = 1 / 0, n) {
  if (t <= 0 || !ce(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ we(e))
    ot(e.value, t, n);
  else if (H(e))
    for (let s = 0; s < e.length; s++)
      ot(e[s], t, n);
  else if (Ht(e) || Ot(e))
    e.forEach((s) => {
      ot(s, t, n);
    });
  else if (Qi(e)) {
    for (const s in e)
      ot(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ot(e[s], t, n);
  }
  return e;
}
function bn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Yn(i, t, n);
  }
}
function at(e, t, n, s) {
  if (ee(e)) {
    const i = bn(e, t, n, s);
    return i && Yi(i) && i.catch((o) => {
      Yn(o, t, n);
    }), i;
  }
  if (H(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(at(e[o], t, n, s));
    return i;
  }
}
function Yn(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || ae;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, a, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      St(), bn(o, null, 10, [
        e,
        a,
        f
      ]), Et();
      return;
    }
  }
  sl(e, n, i, s, r);
}
function sl(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Se = [];
let Je = -1;
const $t = [];
let ut = null, Gt = 0;
const bo = /* @__PURE__ */ Promise.resolve();
let Nn = null;
function xo(e) {
  const t = Nn || bo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function il(e) {
  let t = Je + 1, n = Se.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Se[s], o = mn(i);
    o < e || o === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function zs(e) {
  if (!(e.flags & 1)) {
    const t = mn(e), n = Se[Se.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= mn(n) ? Se.push(e) : Se.splice(il(t), 0, e), e.flags |= 1, So();
  }
}
function So() {
  Nn || (Nn = bo.then(wo));
}
function ol(e) {
  if (!H(e))
    ut && e.id === -1 ? ut.splice(Gt + 1, 0, e) : e.flags & 1 || ($t.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      $t.push(e[t]);
  So();
}
function oi(e, t, n = Je + 1) {
  for (; n < Se.length; n++) {
    const s = Se[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Se.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Eo(e) {
  if ($t.length) {
    const t = [...new Set($t)].sort(
      (n, s) => mn(n) - mn(s)
    );
    if ($t.length = 0, ut) {
      for (let n = 0; n < t.length; n++)
        ut.push(t[n]);
      return;
    }
    for (ut = t, Gt = 0; Gt < ut.length; Gt++) {
      const n = ut[Gt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ut = null, Gt = 0;
  }
}
const mn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function wo(e) {
  try {
    for (Je = 0; Je < Se.length; Je++) {
      const t = Se[Je];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), bn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Je < Se.length; Je++) {
      const t = Se[Je];
      t && (t.flags &= -2);
    }
    Je = -1, Se.length = 0, Eo(), Nn = null, (Se.length || $t.length) && wo();
  }
}
let Ge = null, To = null;
function Vn(e) {
  const t = Ge;
  return Ge = e, To = e && e.type.__scopeId || null, t;
}
function rl(e, t = Ge, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && di(-1);
    const o = Vn(t), r = xt.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let a = xt.length; a > r; a--) ko();
      Vn(o), s._d && di(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function K(e, t) {
  if (Ge === null)
    return e;
  const n = es(Ge), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, l, a = ae] = t[i];
    o && (ee(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ot(r), s.push({
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
function ht(e, t, n, s) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    o && (l.oldValue = o[r].value);
    let a = l.dir[s];
    a && (St(), at(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Et());
  }
}
function ll(e, t, n = !1) {
  const s = Kl();
  if (s || Dt) {
    let i = Dt ? Dt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ee(t) ? t.call(s && s.proxy) : t;
  }
}
const al = /* @__PURE__ */ Symbol.for("v-scx"), cl = () => ll(al);
function ul(e, t, n) {
  return fl(e, t, n);
}
function fl(e, t, n = ae) {
  const { immediate: s, deep: i, flush: o, once: r } = n, l = Fe({}, n), a = t && s || !t && o !== "post";
  let f;
  if ($n) {
    if (o === "sync") {
      const S = cl();
      f = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!a) {
      const S = () => {
      };
      return S.stop = _t, S.resume = _t, S.pause = _t, S;
    }
  }
  const u = Ft;
  l.call = (S, $, A) => at(S, u, $, A);
  let h = !1;
  o === "post" ? l.scheduler = (S) => {
    Me(S, u && u.suspense);
  } : o !== "sync" && (h = !0, l.scheduler = (S, $) => {
    $ ? S() : zs(S);
  }), l.augmentJob = (S) => {
    t && (S.flags |= 4), h && (S.flags |= 2, u && (S.id = u.uid, S.i = u));
  };
  const E = nl(e, t, l);
  return $n && (f ? f.push(E) : a && E()), E;
}
const dl = /* @__PURE__ */ Symbol("_vte"), Zn = (e) => e.__isTeleport, as = /* @__PURE__ */ Symbol("_leaveCb");
function pl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ct) {
        t = n;
        break;
      }
  }
  return t;
}
function Co(e) {
  if (!Mo(e))
    return Zn(e.type) && e.children ? pl(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ee(n.default))
      return n.default();
  }
}
function Ws(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Ws(
      Zn(n.type) && Co(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function ml(e, t) {
  return ee(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function hl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ri(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Gn = /* @__PURE__ */ new WeakMap();
function ln(e, t, n, s, i = !1) {
  if (H(e)) {
    e.forEach(
      (A, P) => ln(
        A,
        t && (H(t) ? t[P] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (an(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && ln(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? es(s.component) : s.el, r = i ? null : o, { i: l, r: a } = e, f = t && t.r, u = l.refs === ae ? l.refs = {} : l.refs, h = l.setupState, E = /* @__PURE__ */ Y(h), S = h === ae ? Ji : (A) => ri(u, A) ? !1 : ne(E, A), $ = (A, P) => !(P && ri(u, P));
  if (f != null && f !== a) {
    if (li(t), me(f))
      u[f] = null, S(f) && (h[f] = null);
    else if (/* @__PURE__ */ we(f)) {
      const A = t;
      $(f, A.k) && (f.value = null), A.k && (u[A.k] = null);
    }
  }
  if (ee(a))
    bn(a, l, 12, [r, u]);
  else {
    const A = me(a), P = /* @__PURE__ */ we(a);
    if (A || P) {
      const N = () => {
        if (e.f) {
          const U = A ? S(a) ? h[a] : u[a] : $() || !e.k ? a.value : u[e.k];
          if (i)
            H(U) && Xi(U, o);
          else if (H(U))
            U.includes(o) || U.push(o);
          else if (A)
            u[a] = [o], S(a) && (h[a] = u[a]);
          else {
            const Z = [o];
            $(a, e.k) && (a.value = Z), e.k && (u[e.k] = Z);
          }
        } else A ? (u[a] = r, S(a) && (h[a] = r)) : P && ($(a, e.k) && (a.value = r), e.k && (u[e.k] = r));
      };
      if (r) {
        const U = () => {
          N(), Gn.delete(e);
        };
        U.id = -1, Gn.set(e, U), Me(U, n);
      } else
        li(e), N();
    }
  }
}
function li(e) {
  const t = Gn.get(e);
  t && (t.flags |= 8, Gn.delete(e));
}
Wn().requestIdleCallback;
Wn().cancelIdleCallback;
const an = (e) => !!e.type.__asyncLoader, Mo = (e) => e.type.__isKeepAlive, gl = /* @__PURE__ */ Symbol.for("v-ndc");
function xe(e, t, n, s) {
  let i;
  const o = n, r = H(e);
  if (r || me(e)) {
    const l = r && /* @__PURE__ */ bt(e);
    let a = !1, f = !1;
    l && (a = !/* @__PURE__ */ Le(e), f = /* @__PURE__ */ lt(e), e = Xn(e)), i = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      i[u] = t(
        a ? f ? Ut(ke(e[u])) : ke(e[u]) : e[u],
        u,
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
      for (let a = 0, f = l.length; a < f; a++) {
        const u = l[a];
        i[a] = t(e[u], u, a, o);
      }
    }
  else
    i = [];
  return i;
}
const Cs = (e) => e ? zo(e) ? es(e) : Cs(e.parent) : null, cn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Cs(e.parent),
    $root: (e) => Cs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      zs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = xo.bind(e.proxy)),
    $watch: (e) => _t
  })
), cs = (e, t) => e !== ae && !e.__isScriptSetup && ne(e, t), vl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: o, accessCache: r, type: l, appContext: a } = e;
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
        if (cs(s, t))
          return r[t] = 1, s[t];
        if (ne(o, t))
          return r[t] = 3, o[t];
        if (n !== ae && ne(n, t))
          return r[t] = 4, n[t];
        r[t] = 0;
      }
    }
    const f = cn[t];
    let u, h;
    if (f)
      return t === "$attrs" && ye(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ae && ne(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, ne(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: o } = e;
    return cs(i, t) ? (i[t] = n, !0) : ne(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: o, type: r }
  }, l) {
    let a;
    return !!(n[l] || cs(t, l) || ne(o, l) || ne(s, l) || ne(cn, l) || ne(i.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ne(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ao() {
  return {
    app: null,
    config: {
      isNativeTag: Ji,
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
let _l = 0;
function yl(e, t) {
  return function(s, i = null) {
    ee(s) || (s = Fe({}, s)), i != null && !ce(i) && (i = null);
    const o = Ao(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = o.app = {
      _uid: _l++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Zl,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return r.has(u) || (u && ee(u.install) ? (r.add(u), u.install(f, ...h)) : ee(u) && (r.add(u), u(f, ...h))), f;
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
      mount(u, h, E) {
        if (!a) {
          const S = f._ceVNode || rt(s, i);
          return S.appContext = o, E === !0 ? E = "svg" : E === !1 && (E = void 0), e(S, u, E), a = !0, f._container = u, u.__vue_app__ = f, es(S.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (at(
          l,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(u, h) {
        return o.provides[u] = h, f;
      },
      runWithContext(u) {
        const h = Dt;
        Dt = f;
        try {
          return u();
        } finally {
          Dt = h;
        }
      }
    };
    return f;
  };
}
let Dt = null;
const bl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${je(t)}Modifiers`] || e[`${wt(t)}Modifiers`];
function xl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ae;
  let i = n;
  const o = t.startsWith("update:"), r = o && bl(s, t.slice(7));
  r && (r.trim && (i = n.map((u) => me(u) ? u.trim() : u)), r.number && (i = n.map(zn)));
  let l, a = s[l = ss(t)] || // also try camelCase event handler (#2249)
  s[l = ss(je(t))];
  !a && o && (a = s[l = ss(wt(t))]), a && at(
    a,
    e,
    6,
    i
  );
  const f = s[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, at(
      f,
      e,
      6,
      i
    );
  }
}
function Sl(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {};
  return o ? (H(o) ? o.forEach((l) => r[l] = null) : Fe(r, o), ce(e) && s.set(e, r), r) : (ce(e) && s.set(e, null), null);
}
function Qn(e, t) {
  return !e || !Bn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ne(e, t[0].toLowerCase() + t.slice(1)) || ne(e, wt(t)) || ne(e, t));
}
function ai(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [o],
    slots: r,
    attrs: l,
    emit: a,
    render: f,
    renderCache: u,
    props: h,
    data: E,
    setupState: S,
    ctx: $,
    inheritAttrs: A
  } = e, P = Vn(e);
  let N, U;
  try {
    if (n.shapeFlag & 4) {
      const L = i || s, k = L;
      N = Ye(
        f.call(
          k,
          L,
          u,
          h,
          S,
          E,
          $
        )
      ), U = l;
    } else {
      const L = t;
      N = Ye(
        L.length > 1 ? L(
          h,
          { attrs: l, slots: r, emit: a }
        ) : L(
          h,
          null
        )
      ), U = t.props ? l : El(l);
    }
  } catch (L) {
    xt.length = 0, Yn(L, e, 1), N = rt(ct);
  }
  let Z = N;
  if (U && A !== !1) {
    const L = Object.keys(U), { shapeFlag: k } = Z;
    L.length && k & 7 && (o && L.some(Hn) && (U = wl(
      U,
      o
    )), Z = kt(Z, U, !1, !0));
  }
  if (n.dirs && (Z = kt(Z, null, !1, !0), Z.dirs = Z.dirs ? Z.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const L = Zn(Z.type) && Co(Z) || Z;
    Ws(L, n.transition);
  }
  return N = Z, Vn(P), N;
}
const El = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Bn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, wl = (e, t) => {
  const n = {};
  for (const s in e)
    (!Hn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Tl(e, t, n) {
  const { props: s, children: i, component: o } = e, { props: r, children: l, patchFlag: a } = t, f = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? ci(s, r, f) : !!r;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const E = u[h];
        if (Io(r, s, E) && !Qn(f, E))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? ci(s, r, f) : !0 : !!r;
  return !1;
}
function ci(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (Io(t, e, o) && !Qn(n, o))
      return !0;
  }
  return !1;
}
function Io(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && ce(s) && ce(i) ? !Kt(s, i) : s !== i;
}
function Cl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Ro = {}, Po = () => Object.create(Ro), No = (e) => Object.getPrototypeOf(e) === Ro;
function Ml(e, t, n, s = !1) {
  const i = {}, o = Po();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Vo(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Jr(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Al(e, t, n, s) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ Y(i), [a] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let E = u[h];
        if (Qn(e.emitsOptions, E))
          continue;
        const S = t[E];
        if (a)
          if (ne(o, E))
            S !== o[E] && (o[E] = S, f = !0);
          else {
            const $ = je(E);
            i[$] = Ms(
              a,
              l,
              $,
              S,
              e,
              !1
            );
          }
        else
          S !== o[E] && (o[E] = S, f = !0);
      }
    }
  } else {
    Vo(e, t, i, o) && (f = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !ne(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = wt(h)) === h || !ne(t, u))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[h] = Ms(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (o !== l)
      for (const h in o)
        (!t || !ne(t, h)) && (delete o[h], f = !0);
  }
  f && it(e.attrs, "set", "");
}
function Vo(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (sn(a))
        continue;
      const f = t[a];
      let u;
      i && ne(i, u = je(a)) ? !o || !o.includes(u) ? n[u] = f : (l || (l = {}))[u] = f : Qn(e.emitsOptions, a) || (!(a in s) || f !== s[a]) && (s[a] = f, r = !0);
    }
  if (o) {
    const a = /* @__PURE__ */ Y(n), f = l || ae;
    for (let u = 0; u < o.length; u++) {
      const h = o[u];
      n[h] = Ms(
        i,
        a,
        h,
        f[h],
        e,
        !ne(f, h)
      );
    }
  }
  return r;
}
function Ms(e, t, n, s, i, o) {
  const r = e[n];
  if (r != null) {
    const l = ne(r, "default");
    if (l && s === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && ee(a)) {
        const { propsDefaults: f } = i;
        if (n in f)
          s = f[n];
        else {
          const u = Ko(i);
          s = f[n] = a.call(
            null,
            t
          ), u();
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
    ] && (s === "" || s === wt(n)) && (s = !0));
  }
  return s;
}
function Il(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, l = [];
  if (!o)
    return ce(e) && s.set(e, Lt), Lt;
  if (H(o))
    for (let f = 0; f < o.length; f++) {
      const u = je(o[f]);
      ui(u) && (r[u] = ae);
    }
  else if (o)
    for (const f in o) {
      const u = je(f);
      if (ui(u)) {
        const h = o[f], E = r[u] = H(h) || ee(h) ? { type: h } : Fe({}, h), S = E.type;
        let $ = !1, A = !0;
        if (H(S))
          for (let P = 0; P < S.length; ++P) {
            const N = S[P], U = ee(N) && N.name;
            if (U === "Boolean") {
              $ = !0;
              break;
            } else U === "String" && (A = !1);
          }
        else
          $ = ee(S) && S.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = $, E[
          1
          /* shouldCastTrue */
        ] = A, ($ || ne(E, "default")) && l.push(u);
      }
    }
  const a = [r, l];
  return ce(e) && s.set(e, a), a;
}
function ui(e) {
  return e[0] !== "$" && !sn(e);
}
const Js = (e) => e === "_" || e === "_ctx" || e === "$stable", Xs = (e) => H(e) ? e.map(Ye) : [Ye(e)], Rl = (e, t, n) => {
  if (t._n)
    return t;
  const s = rl((...i) => Xs(t(...i)), n);
  return s._c = !1, s;
}, Go = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Js(i)) continue;
    const o = e[i];
    if (ee(o))
      t[i] = Rl(i, o, s);
    else if (o != null) {
      const r = Xs(o);
      t[i] = () => r;
    }
  }
}, Lo = (e, t) => {
  const n = Xs(t);
  e.slots.default = () => n;
}, Oo = (e, t, n) => {
  for (const s in t)
    (n || !Js(s)) && (e[s] = t[s]);
}, Pl = (e, t, n) => {
  const s = e.slots = Po();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Oo(s, t, n), n && eo(s, "_", i, !0)) : Go(t, s);
  } else t && Lo(e, t);
}, Nl = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let o = !0, r = ae;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : Oo(i, t, n) : (o = !t.$stable, Go(t, i)), r = t;
  } else t && (Lo(e, t), r = { default: 1 });
  if (o)
    for (const l in i)
      !Js(l) && r[l] == null && delete i[l];
}, Me = $l;
function Vl(e) {
  return Gl(e);
}
function Gl(e, t) {
  const n = Wn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: l,
    createComment: a,
    setText: f,
    setElementText: u,
    parentNode: h,
    nextSibling: E,
    setScopeId: S = _t,
    insertStaticContent: $
  } = e, A = (c, d, v, x = null, b = null, _ = null, M = void 0, C = null, T = !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !Qt(c, d) && (x = se(c), ue(c, b, _, !0), c = null), d.patchFlag === -2 && (T = !1, d.dynamicChildren = null);
    const { type: y, ref: O, shapeFlag: I } = d;
    switch (y) {
      case qn:
        P(c, d, v, x);
        break;
      case ct:
        N(c, d, v, x);
        break;
      case fs:
        c == null && U(d, v, x, M);
        break;
      case q:
        Xt(
          c,
          d,
          v,
          x,
          b,
          _,
          M,
          C,
          T
        );
        break;
      default:
        I & 1 ? k(
          c,
          d,
          v,
          x,
          b,
          _,
          M,
          C,
          T
        ) : I & 6 ? Ct(
          c,
          d,
          v,
          x,
          b,
          _,
          M,
          C,
          T
        ) : (I & 64 || I & 128) && y.process(
          c,
          d,
          v,
          x,
          b,
          _,
          M,
          C,
          T,
          be
        );
    }
    O != null && b ? ln(O, c && c.ref, _, d || c, !d) : O == null && c && c.ref != null && ln(c.ref, null, _, c, !0);
  }, P = (c, d, v, x) => {
    if (c == null)
      s(
        d.el = l(d.children),
        v,
        x
      );
    else {
      const b = d.el = c.el;
      d.children !== c.children && f(b, d.children);
    }
  }, N = (c, d, v, x) => {
    c == null ? s(
      d.el = a(d.children || ""),
      v,
      x
    ) : d.el = c.el;
  }, U = (c, d, v, x) => {
    [c.el, c.anchor] = $(
      c.children,
      d,
      v,
      x,
      c.el,
      c.anchor
    );
  }, Z = ({ el: c, anchor: d }, v, x) => {
    let b;
    for (; c && c !== d; )
      b = E(c), s(c, v, x), c = b;
    s(d, v, x);
  }, L = ({ el: c, anchor: d }) => {
    let v;
    for (; c && c !== d; )
      v = E(c), i(c), c = v;
    i(d);
  }, k = (c, d, v, x, b, _, M, C, T) => {
    if (d.type === "svg" ? M = "svg" : d.type === "math" && (M = "mathml"), c == null)
      Te(
        d,
        v,
        x,
        b,
        _,
        M,
        C,
        T
      );
    else {
      const y = c.el && c.el._isVueCE ? c.el : null;
      try {
        y && y._beginPatch(), $e(
          c,
          d,
          b,
          _,
          M,
          C,
          T
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, Te = (c, d, v, x, b, _, M, C) => {
    let T, y;
    const { props: O, shapeFlag: I, transition: V, dirs: D } = c;
    if (T = c.el = r(
      c.type,
      _,
      O && O.is,
      O
    ), I & 8 ? u(T, c.children) : I & 16 && Oe(
      c.children,
      T,
      null,
      x,
      b,
      us(c, _),
      M,
      C
    ), D && ht(c, null, x, "created"), Ie(T, c, c.scopeId, M, x), O) {
      for (const te in O)
        te !== "value" && !sn(te) && o(T, te, null, O[te], _, x);
      "value" in O && o(T, "value", null, O.value, _), (y = O.onVnodeBeforeMount) && ze(y, x, c);
    }
    D && ht(c, null, x, "beforeMount");
    const z = Ll(b, V);
    z && V.beforeEnter(T), s(T, d, v), ((y = O && O.onVnodeMounted) || z || D) && Me(() => {
      y && ze(y, x, c), z && V.enter(T), D && ht(c, null, x, "mounted");
    }, b);
  }, Ie = (c, d, v, x, b) => {
    if (v && S(c, v), x)
      for (let _ = 0; _ < x.length; _++)
        S(c, x[_]);
    if (b) {
      let _ = b.subTree;
      if (d === _ || Uo(_.type) && (_.ssContent === d || _.ssFallback === d)) {
        const M = b.vnode;
        Ie(
          c,
          M,
          M.scopeId,
          M.slotScopeIds,
          b.parent
        );
      }
    }
  }, Oe = (c, d, v, x, b, _, M, C, T = 0) => {
    for (let y = T; y < c.length; y++) {
      const O = c[y] = C ? st(c[y]) : Ye(c[y]);
      A(
        null,
        O,
        d,
        v,
        x,
        b,
        _,
        M,
        C
      );
    }
  }, $e = (c, d, v, x, b, _, M) => {
    const C = d.el = c.el;
    let { patchFlag: T, dynamicChildren: y, dirs: O } = d;
    T |= c.patchFlag & 16;
    const I = c.props || ae, V = d.props || ae;
    let D;
    if (v && gt(v, !1), (D = V.onVnodeBeforeUpdate) && ze(D, v, d, c), O && ht(d, c, v, "beforeUpdate"), v && gt(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!c.dynamicChildren || c.dynamicChildren.length !== y.length) && (T = 0, M = !1, y = null), (I.innerHTML && V.innerHTML == null || I.textContent && V.textContent == null) && u(C, ""), y ? Ce(
      c.dynamicChildren,
      y,
      C,
      v,
      x,
      us(d, b),
      _
    ) : M || G(
      c,
      d,
      C,
      null,
      v,
      x,
      us(d, b),
      _,
      !1
    ), T > 0) {
      if (T & 16)
        Tt(C, I, V, v, b);
      else if (T & 2 && I.class !== V.class && o(C, "class", null, V.class, b), T & 4 && o(C, "style", I.style, V.style, b), T & 8) {
        const z = d.dynamicProps;
        for (let te = 0; te < z.length; te++) {
          const Q = z[te], pe = I[Q], ve = V[Q];
          (ve !== pe || Q === "value") && o(C, Q, pe, ve, b, v);
        }
      }
      T & 1 && c.children !== d.children && u(C, d.children);
    } else !M && y == null && Tt(C, I, V, v, b);
    ((D = V.onVnodeUpdated) || O) && Me(() => {
      D && ze(D, v, d, c), O && ht(d, c, v, "updated");
    }, x);
  }, Ce = (c, d, v, x, b, _, M) => {
    for (let C = 0; C < d.length; C++) {
      const T = c[C], y = d[C], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === q || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qt(T, y) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 198) ? h(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      A(
        T,
        y,
        O,
        null,
        x,
        b,
        _,
        M,
        !0
      );
    }
  }, Tt = (c, d, v, x, b) => {
    if (d !== v) {
      if (d !== ae)
        for (const _ in d)
          !sn(_) && !(_ in v) && o(
            c,
            _,
            d[_],
            null,
            b,
            x
          );
      for (const _ in v) {
        if (sn(_)) continue;
        const M = v[_], C = d[_];
        M !== C && _ !== "value" && o(c, _, C, M, b, x);
      }
      "value" in v && o(c, "value", d.value, v.value, b);
    }
  }, Xt = (c, d, v, x, b, _, M, C, T) => {
    const y = d.el = c ? c.el : l(""), O = d.anchor = c ? c.anchor : l("");
    let { patchFlag: I, dynamicChildren: V, slotScopeIds: D } = d;
    D && (C = C ? C.concat(D) : D), c == null ? (s(y, v, x), s(O, v, x), Oe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      v,
      O,
      b,
      _,
      M,
      C,
      T
    )) : I > 0 && I & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === V.length ? (Ce(
      c.dynamicChildren,
      V,
      v,
      b,
      _,
      M,
      C
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || b && d === b.subTree) && $o(
      c,
      d,
      !0
      /* shallow */
    )) : G(
      c,
      d,
      v,
      O,
      b,
      _,
      M,
      C,
      T
    );
  }, Ct = (c, d, v, x, b, _, M, C, T) => {
    d.slotScopeIds = C, c == null ? d.shapeFlag & 512 ? b.ctx.activate(
      d,
      v,
      x,
      M,
      T
    ) : mt(
      d,
      v,
      x,
      b,
      _,
      M,
      T
    ) : Mt(c, d, T);
  }, mt = (c, d, v, x, b, _, M) => {
    const C = c.component = Hl(
      c,
      x,
      b
    );
    if (Mo(c) && (C.ctx.renderer = be), zl(C, !1, M), C.asyncDep) {
      if (b && b.registerDep(C, At, M), !c.el) {
        const T = C.subTree = rt(ct);
        N(null, T, d, v), c.placeholder = T.el;
      }
    } else
      At(
        C,
        c,
        d,
        v,
        b,
        _,
        M
      );
  }, Mt = (c, d, v) => {
    const x = d.component = c.component;
    if (Tl(c, d, v))
      if (x.asyncDep && !x.asyncResolved) {
        R(x, d, v);
        return;
      } else
        x.next = d, x.update();
    else
      d.el = c.el, x.vnode = d;
  }, At = (c, d, v, x, b, _, M) => {
    const C = () => {
      if (c.isMounted) {
        let { next: I, bu: V, u: D, parent: z, vnode: te } = c;
        {
          const He = Do(c);
          if (He) {
            I && (I.el = te.el, R(c, I, M)), He.asyncDep.then(() => {
              Me(() => {
                c.isUnmounted || y();
              }, b);
            });
            return;
          }
        }
        let Q = I, pe;
        gt(c, !1), I ? (I.el = te.el, R(c, I, M)) : I = te, V && Cn(V), (pe = I.props && I.props.onVnodeBeforeUpdate) && ze(pe, z, I, te), gt(c, !0);
        const ve = ai(c), Be = c.subTree;
        c.subTree = ve, A(
          Be,
          ve,
          // parent may have changed if it's in a teleport
          h(Be.el),
          // anchor may have changed if it's in a fragment
          se(Be),
          c,
          b,
          _
        ), I.el = ve.el, Q === null && Cl(c, ve.el), D && Me(D, b), (pe = I.props && I.props.onVnodeUpdated) && Me(
          () => ze(pe, z, I, te),
          b
        );
      } else {
        let I;
        const { el: V, props: D } = d, { bm: z, m: te, parent: Q, root: pe, type: ve } = c, Be = an(d);
        gt(c, !1), z && Cn(z), !Be && (I = D && D.onVnodeBeforeMount) && ze(I, Q, d), gt(c, !0);
        {
          pe.ce && pe.ce._hasShadowRoot() && pe.ce._injectChildStyle(
            ve,
            c.parent ? c.parent.type : void 0
          );
          const He = c.subTree = ai(c);
          A(
            null,
            He,
            v,
            x,
            c,
            b,
            _
          ), d.el = He.el;
        }
        if (te && Me(te, b), !Be && (I = D && D.onVnodeMounted)) {
          const He = d;
          Me(
            () => ze(I, Q, He),
            b
          );
        }
        (d.shapeFlag & 256 || Q && an(Q.vnode) && Q.vnode.shapeFlag & 256) && c.a && Me(c.a, b), c.isMounted = !0, d = v = x = null;
      }
    };
    c.scope.on();
    const T = c.effect = new io(C);
    c.scope.off();
    const y = c.update = T.run.bind(T), O = c.job = T.runIfDirty.bind(T);
    O.i = c, O.id = c.uid, T.scheduler = () => zs(O), gt(c, !0), y();
  }, R = (c, d, v) => {
    d.component = c;
    const x = c.vnode.props;
    c.vnode = d, c.next = null, Al(c, d.props, x, v), Nl(c, d.children, v), St(), oi(c), Et();
  }, G = (c, d, v, x, b, _, M, C, T = !1) => {
    const y = c && c.children, O = c ? c.shapeFlag : 0, I = d.children, { patchFlag: V, shapeFlag: D } = d;
    if (V > 0) {
      if (V & 128) {
        re(
          y,
          I,
          v,
          x,
          b,
          _,
          M,
          C,
          T
        );
        return;
      } else if (V & 256) {
        W(
          y,
          I,
          v,
          x,
          b,
          _,
          M,
          C,
          T
        );
        return;
      }
    }
    D & 8 ? (O & 16 && m(y, b, _), I !== y && u(v, I)) : O & 16 ? D & 16 ? re(
      y,
      I,
      v,
      x,
      b,
      _,
      M,
      C,
      T
    ) : m(y, b, _, !0) : (O & 8 && u(v, ""), D & 16 && Oe(
      I,
      v,
      x,
      b,
      _,
      M,
      C,
      T
    ));
  }, W = (c, d, v, x, b, _, M, C, T) => {
    c = c || Lt, d = d || Lt;
    const y = c.length, O = d.length, I = Math.min(y, O);
    let V;
    for (V = 0; V < I; V++) {
      const D = d[V] = T ? st(d[V]) : Ye(d[V]);
      A(
        c[V],
        D,
        v,
        null,
        b,
        _,
        M,
        C,
        T
      );
    }
    y > O ? m(
      c,
      b,
      _,
      !0,
      !1,
      I
    ) : Oe(
      d,
      v,
      x,
      b,
      _,
      M,
      C,
      T,
      I
    );
  }, re = (c, d, v, x, b, _, M, C, T) => {
    let y = 0;
    const O = d.length;
    let I = c.length - 1, V = O - 1;
    for (; y <= I && y <= V; ) {
      const D = c[y], z = d[y] = T ? st(d[y]) : Ye(d[y]);
      if (Qt(D, z))
        A(
          D,
          z,
          v,
          null,
          b,
          _,
          M,
          C,
          T
        );
      else
        break;
      y++;
    }
    for (; y <= I && y <= V; ) {
      const D = c[I], z = d[V] = T ? st(d[V]) : Ye(d[V]);
      if (Qt(D, z))
        A(
          D,
          z,
          v,
          null,
          b,
          _,
          M,
          C,
          T
        );
      else
        break;
      I--, V--;
    }
    if (y > I) {
      if (y <= V) {
        const D = V + 1, z = D < O ? d[D].el : x;
        for (; y <= V; )
          A(
            null,
            d[y] = T ? st(d[y]) : Ye(d[y]),
            v,
            z,
            b,
            _,
            M,
            C,
            T
          ), y++;
      }
    } else if (y > V)
      for (; y <= I; )
        ue(c[y], b, _, !0), y++;
    else {
      const D = y, z = y, te = /* @__PURE__ */ new Map();
      for (y = z; y <= V; y++) {
        const Re = d[y] = T ? st(d[y]) : Ye(d[y]);
        Re.key != null && te.set(Re.key, y);
      }
      let Q, pe = 0;
      const ve = V - z + 1;
      let Be = !1, He = 0;
      const Yt = new Array(ve);
      for (y = 0; y < ve; y++) Yt[y] = 0;
      for (y = D; y <= I; y++) {
        const Re = c[y];
        if (pe >= ve) {
          ue(Re, b, _, !0);
          continue;
        }
        let Ke;
        if (Re.key != null)
          Ke = te.get(Re.key);
        else
          for (Q = z; Q <= V; Q++)
            if (Yt[Q - z] === 0 && Qt(Re, d[Q])) {
              Ke = Q;
              break;
            }
        Ke === void 0 ? ue(Re, b, _, !0) : (Yt[Ke - z] = y + 1, Ke >= He ? He = Ke : Be = !0, A(
          Re,
          d[Ke],
          v,
          null,
          b,
          _,
          M,
          C,
          T
        ), pe++);
      }
      const Qs = Be ? Ol(Yt) : Lt;
      for (Q = Qs.length - 1, y = ve - 1; y >= 0; y--) {
        const Re = z + y, Ke = d[Re], qs = d[Re + 1], ei = Re + 1 < O ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          qs.el || jo(qs)
        ) : x;
        Yt[y] === 0 ? A(
          null,
          Ke,
          v,
          ei,
          b,
          _,
          M,
          C,
          T
        ) : Be && (Q < 0 || y !== Qs[Q] ? oe(Ke, v, ei, 2) : Q--);
      }
    }
  }, oe = (c, d, v, x, b = null) => {
    const { el: _, type: M, transition: C, children: T, shapeFlag: y } = c;
    if (y & 6) {
      oe(c.component.subTree, d, v, x);
      return;
    }
    if (y & 128) {
      c.suspense.move(d, v, x);
      return;
    }
    if (y & 64) {
      M.move(c, d, v, be);
      return;
    }
    if (M === q) {
      s(_, d, v);
      for (let I = 0; I < T.length; I++)
        oe(T[I], d, v, x);
      s(c.anchor, d, v);
      return;
    }
    if (M === fs) {
      Z(c, d, v);
      return;
    }
    if (x !== 2 && y & 1 && C)
      if (x === 0)
        C.persisted && !_[as] ? s(_, d, v) : (C.beforeEnter(_), s(_, d, v), Me(() => C.enter(_), b));
      else {
        const { leave: I, delayLeave: V, afterLeave: D } = C, z = () => {
          c.ctx.isUnmounted ? i(_) : s(_, d, v);
        }, te = () => {
          const Q = _._isLeaving || !!_[as];
          _._isLeaving && _[as](
            !0
            /* cancelled */
          ), C.persisted && !Q ? z() : I(_, () => {
            z(), D && D();
          });
        };
        V ? V(_, z, te) : te();
      }
    else
      s(_, d, v);
  }, ue = (c, d, v, x = !1, b = !1) => {
    const {
      type: _,
      props: M,
      ref: C,
      children: T,
      dynamicChildren: y,
      shapeFlag: O,
      patchFlag: I,
      dirs: V,
      cacheIndex: D,
      memo: z
    } = c;
    if (I === -2 && (b = !1), C != null && (St(), ln(C, null, v, c, !0), Et()), D != null && (d.renderCache[D] = void 0), O & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const te = O & 1 && V, Q = !an(c);
    let pe;
    if (Q && (pe = M && M.onVnodeBeforeUnmount) && ze(pe, d, c), O & 6)
      p(c.component, v, x);
    else {
      if (O & 128) {
        c.suspense.unmount(v, x);
        return;
      }
      te && ht(c, null, d, "beforeUnmount"), O & 64 ? c.type.remove(
        c,
        d,
        v,
        be,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== q || I > 0 && I & 64) ? m(
        y,
        d,
        v,
        !1,
        !0
      ) : (_ === q && I & 384 || !b && O & 16) && m(T, d, v), x && Ne(c);
    }
    const ve = z != null && D == null;
    (Q && (pe = M && M.onVnodeUnmounted) || te || ve) && Me(() => {
      pe && ze(pe, d, c), te && ht(c, null, d, "unmounted"), ve && (c.el = null);
    }, v);
  }, Ne = (c) => {
    const { type: d, el: v, anchor: x, transition: b } = c;
    if (d === q) {
      w(v, x);
      return;
    }
    if (d === fs) {
      L(c);
      return;
    }
    const _ = () => {
      i(v), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: M, delayLeave: C } = b, T = () => M(v, _);
      C ? C(c.el, _, T) : T();
    } else
      _();
  }, w = (c, d) => {
    let v;
    for (; c !== d; )
      v = E(c), i(c), c = v;
    i(d);
  }, p = (c, d, v) => {
    const { bum: x, scope: b, job: _, subTree: M, um: C, m: T, a: y } = c;
    fi(T), fi(y), x && Cn(x), b.stop(), _ && (_.flags |= 8, ue(M, c, d, v)), C && Me(C, d), Me(() => {
      c.isUnmounted = !0;
    }, d);
  }, m = (c, d, v, x = !1, b = !1, _ = 0) => {
    for (let M = _; M < c.length; M++)
      ue(c[M], d, v, x, b);
  }, se = (c) => {
    if (c.shapeFlag & 6)
      return se(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = E(c.anchor || c.el), v = d && d[dl];
    return v ? E(v) : d;
  };
  let j = !1;
  const de = (c, d, v) => {
    let x;
    c == null ? d._vnode && (ue(d._vnode, null, null, !0), x = d._vnode.component) : A(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      v
    ), d._vnode = c, j || (j = !0, oi(x), Eo(), j = !1);
  }, be = {
    p: A,
    um: ue,
    m: oe,
    r: Ne,
    mt,
    mc: Oe,
    pc: G,
    pbc: Ce,
    n: se,
    o: e
  };
  return {
    render: de,
    hydrate: void 0,
    createApp: yl(de)
  };
}
function us({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function gt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ll(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function $o(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (H(s) && H(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = st(i[o]), l.el = r.el), !n && l.patchFlag !== -2 && $o(r, l)), l.type === qn && (l.patchFlag === -1 && (l = i[o] = st(l)), l.el = r.el), l.type === ct && !l.el && (l.el = r.el);
    }
}
function Ol(e) {
  const t = e.slice(), n = [0];
  let s, i, o, r, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const f = e[s];
    if (f !== 0) {
      if (i = n[n.length - 1], e[i] < f) {
        t[s] = i, n.push(s);
        continue;
      }
      for (o = 0, r = n.length - 1; o < r; )
        l = o + r >> 1, e[n[l]] < f ? o = l + 1 : r = l;
      f < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; )
    n[o] = r, r = t[r];
  return n;
}
function Do(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Do(t);
}
function fi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function jo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? jo(t.subTree) : null;
}
const Uo = (e) => e.__isSuspense;
function $l(e, t) {
  t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : ol(e);
}
const q = /* @__PURE__ */ Symbol.for("v-fgt"), qn = /* @__PURE__ */ Symbol.for("v-txt"), ct = /* @__PURE__ */ Symbol.for("v-cmt"), fs = /* @__PURE__ */ Symbol.for("v-stc"), xt = [];
let Pe = null;
function F(e = !1) {
  xt.push(Pe = e ? null : []);
}
function ko() {
  xt.pop(), Pe = xt[xt.length - 1] || null;
}
let hn = 1;
function di(e, t = !1) {
  hn += e, e < 0 && Pe && t && (Pe.hasOnce = !0);
}
function Fo(e) {
  return e.dynamicChildren = hn > 0 ? Pe || Lt : null, ko(), hn > 0 && Pe && Pe.push(e), e;
}
function B(e, t, n, s, i, o) {
  return Fo(
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
function Dl(e, t, n, s, i) {
  return Fo(
    rt(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function Bo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ho = ({ key: e }) => e ?? null, Mn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? me(e) || /* @__PURE__ */ we(e) || ee(e) ? { i: Ge, r: e, k: t, f: !!n } : e : null);
function g(e, t = null, n = null, s = 0, i = null, o = e === q ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ho(t),
    ref: t && Mn(t),
    scopeId: To,
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
    ctx: Ge
  };
  return l ? (Ln(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= me(n) ? 8 : 16), hn > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Pe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Pe.push(a), a;
}
const rt = jl;
function jl(e, t = null, n = null, s = 0, i = null, o = !1) {
  if ((!e || e === gl) && (e = ct), Bo(e)) {
    const l = kt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ln(l, n), hn > 0 && !o && Pe && (l.shapeFlag & 6 ? Pe[Pe.indexOf(e)] = l : Pe.push(l)), l.patchFlag = -2, l;
  }
  if (Yl(e) && (e = e.__vccOpts), t) {
    t = Ul(t);
    let { class: l, style: a } = t;
    l && !me(l) && (t.class = Jn(l)), ce(a) && (/* @__PURE__ */ Ks(a) && !H(a) && (a = Fe({}, a)), t.style = $s(a));
  }
  const r = me(e) ? 1 : Uo(e) ? 128 : Zn(e) ? 64 : ce(e) ? 4 : ee(e) ? 2 : 0;
  return g(
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
function Ul(e) {
  return e ? /* @__PURE__ */ Ks(e) || No(e) ? Fe({}, e) : e : null;
}
function kt(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: r, children: l, transition: a } = e, f = t ? kl(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Ho(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? H(o) ? o.concat(Mn(t)) : [o, Mn(t)] : Mn(t)
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
    patchFlag: t && e.type !== q ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && kt(e.ssContent),
    ssFallback: e.ssFallback && kt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Ws(
    u,
    a.clone(u)
  ), u;
}
function le(e = " ", t = 0) {
  return rt(qn, null, e, t);
}
function Nt(e = "", t = !1) {
  return t ? (F(), Dl(ct, null, e)) : rt(ct, null, e);
}
function Ye(e) {
  return e == null || typeof e == "boolean" ? rt(ct) : H(e) ? rt(
    q,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Bo(e) ? st(e) : rt(qn, null, String(e));
}
function st(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : kt(e);
}
function Ln(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (H(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ln(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !No(t) ? t._ctx = Ge : i === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ee(t)) {
    if (s & 65) {
      Ln(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ge }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [le(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function kl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Jn([t.class, s.class]));
      else if (i === "style")
        t.style = $s([t.style, s.style]);
      else if (Bn(i)) {
        const o = t[i], r = s[i];
        r && o !== r && !(H(o) && o.includes(r)) ? t[i] = o ? [].concat(o, r) : r : r == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Hn(i) && (t[i] = r);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function ze(e, t, n, s = null) {
  at(e, t, 7, [
    n,
    s
  ]);
}
const Fl = Ao();
let Bl = 0;
function Hl(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || Fl, o = {
    uid: Bl++,
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
    scope: new Ir(
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
    propsOptions: Il(s, i),
    emitsOptions: Sl(s, i),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = xl.bind(null, o), e.ce && e.ce(o), o;
}
let Ft = null;
const Kl = () => Ft || Ge;
let On, gn;
{
  const e = Wn(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  On = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ft = n
  ), gn = t(
    "__VUE_SSR_SETTERS__",
    (n) => $n = n
  );
}
const Ko = (e) => {
  const t = Ft;
  return On(e), e.scope.on(), () => {
    e.scope.off(), On(t);
  };
}, pi = () => {
  Ft && Ft.scope.off(), On(null);
};
function zo(e) {
  return e.vnode.shapeFlag & 4;
}
let $n = !1;
function zl(e, t = !1, n = !1) {
  t && gn(t);
  const { props: s, children: i } = e.vnode, o = zo(e);
  Ml(e, s, o, t), Pl(e, i, n || t);
  const r = o ? Wl(e, t) : void 0;
  return t && gn(!1), r;
}
function Wl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, vl);
  const { setup: s } = n;
  if (s) {
    St();
    const i = e.setupContext = s.length > 1 ? Xl(e) : null, o = Ko(e), r = bn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Yi(r);
    if (Et(), o(), (l || e.sp) && !an(e) && hl(e), l) {
      if (r.then(pi, pi), t)
        return r.then((a) => {
          gn(!0);
          try {
            mi(e, a, t);
          } finally {
            gn(!1);
          }
        }).catch((a) => {
          Yn(a, e, 0);
        });
      e.asyncDep = r;
    } else
      mi(e, r);
  } else
    Wo(e);
}
function mi(e, t, n) {
  ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ce(t) && (e.setupState = yo(t)), Wo(e);
}
function Wo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || _t);
}
const Jl = {
  get(e, t) {
    return ye(e, "get", ""), e[t];
  }
};
function Xl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Jl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function es(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(yo(Xr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in cn)
        return cn[n](e);
    },
    has(t, n) {
      return n in t || n in cn;
    }
  })) : e.proxy;
}
function Yl(e) {
  return ee(e) && "__vccOpts" in e;
}
const De = (e, t) => /* @__PURE__ */ el(e, t, $n), Zl = "3.5.41";
let As;
const hi = typeof window < "u" && window.trustedTypes;
if (hi)
  try {
    As = /* @__PURE__ */ hi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Jo = As ? (e) => As.createHTML(e) : (e) => e, Ql = "http://www.w3.org/2000/svg", ql = "http://www.w3.org/1998/Math/MathML", nt = typeof document < "u" ? document : null, gi = nt && /* @__PURE__ */ nt.createElement("template"), ea = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? nt.createElementNS(Ql, e) : t === "mathml" ? nt.createElementNS(ql, e) : n ? nt.createElement(e, { is: n }) : nt.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => nt.createTextNode(e),
  createComment: (e) => nt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => nt.querySelector(e),
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
      gi.innerHTML = Jo(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = gi.content;
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
}, ta = /* @__PURE__ */ Symbol("_vtc");
function na(e, t, n) {
  const s = e[ta];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const vi = /* @__PURE__ */ Symbol("_vod"), sa = /* @__PURE__ */ Symbol("_vsh"), ia = /* @__PURE__ */ Symbol(""), oa = /(?:^|;)\s*display\s*:/;
function ra(e, t, n) {
  const s = e.style, i = me(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (me(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && tn(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && tn(s, r, "");
    for (const r in n) {
      r === "display" && (o = !0);
      const l = n[r];
      l != null ? aa(
        e,
        r,
        !me(t) && t ? t[r] : void 0,
        l
      ) || tn(s, r, l) : tn(s, r, "");
    }
  } else if (i) {
    if (t !== n) {
      const r = s[ia];
      r && (n += ";" + r), s.cssText = n, o = oa.test(n);
    }
  } else t && e.removeAttribute("style");
  vi in e && (e[vi] = o ? s.display : "", e[sa] && (s.display = "none"));
}
const _i = /\s*!important$/;
function tn(e, t, n) {
  if (H(n))
    n.forEach((s) => tn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = la(e, t);
    _i.test(n) ? e.setProperty(
      wt(s),
      n.replace(_i, ""),
      "important"
    ) : e[s] = n;
  }
}
const yi = ["Webkit", "Moz", "ms"], ds = {};
function la(e, t) {
  const n = ds[t];
  if (n)
    return n;
  let s = je(t);
  if (s !== "filter" && s in e)
    return ds[t] = s;
  s = qi(s);
  for (let i = 0; i < yi.length; i++) {
    const o = yi[i] + s;
    if (o in e)
      return ds[t] = o;
  }
  return t;
}
function aa(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && me(s) && n === s;
}
const bi = "http://www.w3.org/1999/xlink";
function xi(e, t, n, s, i, o = Mr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(bi, t.slice(6, t.length)) : e.setAttributeNS(bi, t, n) : n == null || o && !to(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : qe(n) ? String(n) : n
  );
}
function Si(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Jo(n) : n);
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
    l === "boolean" ? n = to(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(i || t);
}
function dt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ca(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ei = /* @__PURE__ */ Symbol("_vei");
function ua(e, t, n, s, i = null) {
  const o = e[Ei] || (e[Ei] = {}), r = o[t];
  if (s && r)
    r.value = s;
  else {
    const [l, a] = pa(t);
    if (s) {
      const f = o[t] = ga(
        s,
        i
      );
      dt(e, l, f, a);
    } else r && (ca(e, l, r, a), o[t] = void 0);
  }
}
const fa = /(Once|Passive|Capture)$/, da = /^on:?(?:Once|Passive|Capture)$/;
function pa(e) {
  let t, n;
  for (; (n = e.match(fa)) && !da.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : wt(e.slice(2)), t];
}
let ps = 0;
const ma = /* @__PURE__ */ Promise.resolve(), ha = () => ps || (ma.then(() => ps = 0), ps = Date.now());
function ga(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (H(i)) {
      const o = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        o.call(s), s._stopped = !0;
      };
      const r = i.slice(), l = [s];
      for (let a = 0; a < r.length && !s._stopped; a++) {
        const f = r[a];
        f && at(
          f,
          t,
          5,
          l
        );
      }
    } else
      at(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = ha(), n;
}
const wi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, va = (e, t, n, s, i, o) => {
  const r = i === "svg";
  t === "class" ? na(e, s, r) : t === "style" ? ra(e, n, s) : Bn(t) ? Hn(t) || ua(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : _a(e, t, s, r)) ? (Si(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && xi(e, t, s, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ya(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !me(s))) ? Si(e, je(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), xi(e, t, s, r));
};
function _a(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && wi(t) && ee(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return wi(t) && me(n) ? !1 : t in e;
}
function ya(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = je(t);
  return Array.isArray(n) ? n.some((i) => je(i) === s) : Object.keys(n).some((i) => je(i) === s);
}
const Bt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return H(t) ? (n) => Cn(t, n) : t;
};
function ba(e) {
  e.target.composing = !0;
}
function Ti(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Qe = /* @__PURE__ */ Symbol("_assign"), Tn = /* @__PURE__ */ Symbol("_initialValue");
function ms(e, t, n) {
  return t && (e = e.trim()), n && (e = zn(e)), e;
}
const he = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[Tn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Tn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Qe] = Bt(i);
    const o = s || i.props && i.props.type === "number";
    dt(e, t ? "change" : "input", (r) => {
      r.target.composing || e[Qe](ms(e.value, n, o));
    }), (n || o) && dt(e, "change", () => {
      e.value = ms(e.value, n, o);
    }), t || (dt(e, "compositionstart", ba), dt(e, "compositionend", Ti), dt(e, "change", Ti));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", o = e[Tn];
    delete e[Tn], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[Qe](ms(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: o } }, r) {
    if (e[Qe] = Bt(r), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? zn(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const f = e.getRootNode();
    (f instanceof Document || f instanceof ShadowRoot) && f.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === a) || (e.value = a);
  }
}, Ci = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Qe] = Bt(n), dt(e, "change", () => {
      const s = e._modelValue, i = vn(e), o = e.checked, r = e[Qe];
      if (H(s)) {
        const l = Ds(s, i), a = l !== -1;
        if (o && !a)
          r(s.concat(i));
        else if (!o && a) {
          const f = [...s];
          f.splice(l, 1), r(f);
        }
      } else if (Ht(s)) {
        const l = new Set(s);
        o ? l.add(i) : l.delete(i), r(l);
      } else
        r(Xo(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Mi,
  beforeUpdate(e, t, n) {
    e[Qe] = Bt(n), Mi(e, t, n);
  }
};
function Mi(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let i;
  if (H(t))
    i = Ds(t, s.props.value) > -1;
  else if (Ht(t))
    i = t.has(s.props.value);
  else {
    if (t === n) return;
    i = Kt(t, Xo(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const ge = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, dt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? zn(vn(o)) : vn(o)
      );
      e[Qe](
        e.multiple ? Ht(e._modelValue) ? new Set(i) : i : i[0]
      ), e._assigning = !0, xo(() => {
        e._assigning = !1;
      });
    }), e[Qe] = Bt(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ai(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Qe] = Bt(n);
  },
  updated(e, { value: t }) {
    e._assigning || Ai(e, t);
  }
};
function Ai(e, t) {
  const n = e.multiple, s = H(t);
  if (!(n && !s && !Ht(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const r = e.options[i], l = vn(r);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? r.selected = t.some((f) => String(f) === String(l)) : r.selected = Ds(t, l) > -1;
        } else
          r.selected = t.has(l);
      else if (Kt(vn(r), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function vn(e) {
  return "_value" in e ? e._value : e.value;
}
function Xo(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const xa = /* @__PURE__ */ Fe({ patchProp: va }, ea);
let Ii;
function Sa() {
  return Ii || (Ii = Vl(xa));
}
const Ea = ((...e) => {
  const t = Sa().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Ta(s);
    if (!i) return;
    const o = t._component;
    !ee(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, wa(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
});
function wa(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ta(e) {
  return me(e) ? document.querySelector(e) : e;
}
const Ca = "tavern_multi_tts_cache", Ve = "audio_cache", Ma = 1, Ri = 100, Pi = 50 * 1024 * 1024;
function Aa(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
async function Ia(e) {
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
function Ra() {
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
function Pa(e, t) {
  let n = null, s = null, i = 0;
  function o(l) {
    n = l, l.onversionchange = () => {
      l.close(), n === l && (n = null);
    };
    const a = l.onclose;
    return l.onclose = (f) => {
      n === l && (n = null), typeof a == "function" && a.call(l, f);
    }, l;
  }
  async function r() {
    return n || (s ? await s : (s = new Promise((l, a) => {
      const f = e.open(t, Ma);
      i += 1, f.onupgradeneeded = () => {
        const u = f.result;
        u.objectStoreNames.contains(Ve) || u.createObjectStore(Ve, { keyPath: "key" });
      }, f.onsuccess = () => l(o(f.result)), f.onerror = () => a(f.error ?? Error("IndexedDB 打开失败"));
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
function Na(e, t) {
  const n = Pa(e, t);
  async function s() {
    return await n.getDb();
  }
  return {
    async get(i) {
      const o = await s();
      return await new Promise((r, l) => {
        const f = o.transaction(Ve, "readonly").objectStore(Ve).get(i);
        f.onsuccess = () => r(f.result), f.onerror = () => l(f.error ?? Error("读取缓存失败"));
      });
    },
    async put(i) {
      const o = await s();
      await new Promise((r, l) => {
        const a = o.transaction(Ve, "readwrite");
        a.objectStore(Ve).put(i), a.oncomplete = () => r(), a.onerror = () => l(a.error ?? Error("写入缓存失败"));
      });
    },
    async delete(i) {
      const o = await s();
      await new Promise((r, l) => {
        const a = o.transaction(Ve, "readwrite");
        a.objectStore(Ve).delete(i), a.oncomplete = () => r(), a.onerror = () => l(a.error ?? Error("删除缓存失败"));
      });
    },
    async clear() {
      const i = await s();
      await new Promise((o, r) => {
        const l = i.transaction(Ve, "readwrite");
        l.objectStore(Ve).clear(), l.oncomplete = () => o(), l.onerror = () => r(l.error ?? Error("清空缓存失败"));
      });
    },
    async getAll() {
      const i = await s();
      return await new Promise((o, r) => {
        const a = i.transaction(Ve, "readonly").objectStore(Ve).openCursor(), f = [];
        a.onsuccess = () => {
          const u = a.result;
          if (!u) {
            o(f);
            return;
          }
          f.push(u.value), u.continue();
        }, a.onerror = () => r(a.error ?? Error("读取缓存记录失败"));
      });
    }
  };
}
async function Va(e) {
  const t = await e.getAll();
  let n = t.reduce((o, r) => o + (r.blob?.size ?? 0), 0);
  if (t.length <= Ri && n <= Pi)
    return;
  const s = [...t].sort((o, r) => o.created_at - r.created_at);
  let i = t.length;
  for (const o of s) {
    if (i <= Ri && n <= Pi)
      break;
    await e.delete(o.key), i -= 1, n -= o.blob?.size ?? 0;
  }
}
function Ga(e) {
  const t = e?.backend === "memory" ? Ra() : Na(
    e?.indexedDB ?? indexedDB,
    e?.dbName ?? Ca
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
      }), await Va(t);
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
const ts = Ga({
  backend: typeof indexedDB > "u" ? "memory" : "indexeddb"
});
function La(e) {
  return ts.get(e);
}
function Oa(e, t) {
  return ts.set(e, t);
}
function Yo() {
  return ts.clear();
}
function $a() {
  return ts.stats();
}
let ft = null, An = null;
function In() {
  ft && (ft.pause(), An?.());
}
function Zo(e, t, n, s, i) {
  const o = URL.createObjectURL(e), r = new Audio(o);
  let l = "paused";
  const a = () => {
    URL.revokeObjectURL(o), ft === r && (ft = null, An = null);
  }, f = () => {
    ft && ft !== r && (ft.pause(), An?.()), ft = r, An = a;
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
  const u = async () => {
    f();
    try {
      await r.play();
    } catch (h) {
      throw l = "error", a(), s?.(h), h;
    }
  };
  return u().catch(() => {
  }), {
    stop: () => {
      l = "ended", r.pause(), a();
    },
    pause: () => {
      l === "playing" && r.pause();
    },
    resume: u,
    restart: async () => {
      r.currentTime = 0, await u();
    },
    getState: () => l
  };
}
function Qo(e) {
  return [...e].map((n) => n.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(n) ? "_" : n).join("").trim() || "audio.mp3";
}
function Da(e, t, n = "mp3") {
  return Qo(`tavern_multi_tts_${e}_${t}.${n}`);
}
function ja(e, t) {
  const n = Qo(t), s = URL.createObjectURL(e), i = URL.revokeObjectURL.bind(URL), o = document.createElement("a");
  o.href = s, o.download = n, document.body.appendChild(o), o.click(), o.remove(), window.setTimeout(() => i(s), 0);
}
const Ua = "Tavern Multi-TTS", hs = "tavern_multi_tts", ka = "0.1.0", gs = "tavern-multi-tts-root", Ee = "[Tavern Multi-TTS]", qo = 2, er = [
  "speech-02-hd",
  "speech-02-turbo",
  "speech-2.8-hd",
  "speech-2.8-turbo",
  "speech-2.6-hd",
  "speech-2.6-turbo"
], Is = [
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
`), zt = {
  schemaVersion: qo,
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
  injectTemplate: Is
};
function xn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function fe(e, t) {
  return typeof e == "string" ? e : t;
}
function vs(e, t) {
  return typeof e == "boolean" ? e : t;
}
function We(e, t, n, s, i = !1) {
  const o = typeof e == "number" ? e : Number(e);
  if (!Number.isFinite(o))
    return s;
  const r = i ? Math.round(o) : o;
  return Math.min(n, Math.max(t, r));
}
function Fa(e) {
  return e === "local_gsvi" ? "local_gsvi" : "minimax";
}
function Ba(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Ha(e) {
  return er.includes(String(e)) ? e : zt.model;
}
function Ka(e) {
  return e === "manual" || e === "auto_first_n" || e === "auto_all" ? e : zt.prefetchMode;
}
function za(e) {
  return e === "user" || e === "assistant" || e === "system" ? e : zt.injectRole;
}
function Wa(e) {
  return e === "zh" || e === "en" || e === "ja" ? e : zt.testLanguage;
}
function Ja(e) {
  return e === "wav" ? "wav" : "mp3";
}
function tr(e) {
  return Array.isArray(e) ? e.filter(xn).map((t) => ({
    characterName: fe(t.characterName, "").trim(),
    minimaxVoiceId: fe(t.minimaxVoiceId, "").trim()
  })).filter((t) => t.characterName || t.minimaxVoiceId) : [];
}
function Xa(e) {
  return Array.isArray(e) ? e.filter(xn).map((t) => ({
    name: fe(t.name, "").trim(),
    mappings: tr(t.mappings)
  })).filter((t) => t.name) : [];
}
function nr(e) {
  return Array.isArray(e) ? e.filter(xn).map((t) => ({
    characterName: fe(t.characterName, "").trim(),
    gsviVoiceId: fe(t.gsviVoiceId, "").trim(),
    gsviLanguage: fe(t.gsviLanguage, "").trim(),
    gsviEmotion: fe(t.gsviEmotion, "").trim()
  })).filter((t) => t.characterName || t.gsviVoiceId) : [];
}
function Ya(e) {
  return Array.isArray(e) ? e.filter(xn).map((t) => ({
    name: fe(t.name, "").trim(),
    mappings: nr(t.mappings)
  })).filter((t) => t.name) : [];
}
function jt(e) {
  const t = xn(e) ? e : {};
  return {
    schemaVersion: qo,
    enabled: vs(t.enabled, zt.enabled),
    ttsEngine: Fa(t.ttsEngine),
    apiKey: fe(t.apiKey, ""),
    groupId: fe(t.groupId, ""),
    voiceId: fe(t.voiceId, ""),
    voiceCatalogSelectedId: fe(t.voiceCatalogSelectedId, ""),
    minimaxRegion: Ba(t.minimaxRegion),
    testLanguage: Wa(t.testLanguage),
    model: Ha(t.model),
    speed: We(t.speed, 0.5, 2, 1),
    vol: We(t.vol, 0, 10, 1),
    requestTimeoutMs: We(t.requestTimeoutMs, 1e3, 3e4, 15e3, !0),
    maxConcurrency: We(t.maxConcurrency, 1, 10, 3, !0),
    prefetchMode: Ka(t.prefetchMode),
    prefetchFirstCount: We(t.prefetchFirstCount, 1, 10, 2, !0),
    localGsviBaseUrl: fe(t.localGsviBaseUrl, ""),
    localGsviAuthToken: fe(t.localGsviAuthToken, ""),
    localGsviModel: fe(t.localGsviModel, ""),
    localGsviFormat: Ja(t.localGsviFormat),
    localGsviUseReferenceAudio: vs(t.localGsviUseReferenceAudio, !1),
    localGsviCharacter: fe(t.localGsviCharacter, ""),
    localGsviLanguage: fe(t.localGsviLanguage, "ja"),
    localGsviEmotion: fe(t.localGsviEmotion, ""),
    localGsviReferenceText: fe(t.localGsviReferenceText, ""),
    localGsviTopK: We(t.localGsviTopK, 1, 200, 20, !0),
    localGsviTopP: We(t.localGsviTopP, 0, 1, 0.7),
    localGsviTemperature: We(t.localGsviTemperature, 0, 2, 0.7),
    localGsviTextLang: fe(t.localGsviTextLang, "多语种混合"),
    localGsviTextSplitMethod: fe(t.localGsviTextSplitMethod, "按标点符号切"),
    localGsviBatchSize: We(t.localGsviBatchSize, 1, 8, 1, !0),
    characterMappings: tr(t.characterMappings),
    characterMappingPresets: Xa(t.characterMappingPresets),
    gsviCharacterMappings: nr(t.gsviCharacterMappings),
    gsviCharacterMappingPresets: Ya(t.gsviCharacterMappingPresets),
    injectEnabled: vs(t.injectEnabled, !0),
    injectDepth: We(t.injectDepth, 0, 50, 1, !0),
    injectRole: za(t.injectRole),
    injectTemplate: fe(t.injectTemplate, Is) || Is
  };
}
function Dn(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function Za(e, t) {
  return e.injectEnabled !== t.injectEnabled || e.injectDepth !== t.injectDepth || e.injectRole !== t.injectRole || e.injectTemplate !== t.injectTemplate || e.ttsEngine !== t.ttsEngine || !Dn(e.characterMappings, t.characterMappings) || !Dn(e.gsviCharacterMappings, t.gsviCharacterMappings);
}
function Qa(e, t) {
  return e.enabled !== t.enabled || e.ttsEngine !== t.ttsEngine || !Dn(e.characterMappings, t.characterMappings) || !Dn(e.gsviCharacterMappings, t.gsviCharacterMappings);
}
function qa(e, t) {
  return {
    syncInjection: Za(e, t),
    refreshDecorations: Qa(e, t)
  };
}
function ec(e, t, n = {}) {
  let s = !1, i = !1, o = null, r = null, l = null;
  function a() {
    return jt(e.readRawSettings());
  }
  function f() {
    const A = a();
    return e.writeSettings(A), A;
  }
  function u() {
    if (s)
      return !0;
    const A = document.getElementById(gs);
    A && A.remove();
    const P = e.findSettingsRoot();
    return P ? (l = document.createElement("div"), l.id = gs, l.dataset.tavernMultiTts = "settings", P.appendChild(l), t.mount(l, a()), r = e.onPageHide(() => {
      h({ removeSettings: !1 });
    }), s = !0, n.startRuntime?.(), console.info(`${Ee} settings panel mounted`), !0) : !1;
  }
  function h(A) {
    n.stopRuntime?.(), n.stopPlayback?.(), o?.(), o = null, i = !1, r?.(), r = null, t.unmount(), (l ?? document.getElementById(gs))?.remove(), l = null, s = !1, A.removeSettings && e.removeSettings();
  }
  function E() {
    s || i || (f(), !u() && (i = !0, o = e.onAppReady(() => {
      const A = i;
      i = !1;
      const P = o;
      o = null, P?.(), A && (u() || console.error(
        `${Ee} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`
      ));
    })));
  }
  function S(A) {
    const P = a();
    P.enabled = A, e.writeSettings(P), n.refreshDecorations?.();
  }
  function $(A) {
    const P = a();
    P.injectEnabled = A, e.writeSettings(P), n.syncInjection?.();
  }
  return {
    activate: E,
    disable() {
      h({ removeSettings: !1 }), console.info(`${Ee} disabled`);
    },
    destroy() {
      h({ removeSettings: !1 });
    },
    install() {
      f();
    },
    clean() {
      return h({ removeSettings: !0 }), console.info(`${Ee} settings cleaned`), n.clearCache?.();
    },
    delete() {
      return h({ removeSettings: !0 }), console.info(`${Ee} deleted`), n.clearCache?.();
    },
    updateSettings(A) {
      const P = a();
      e.writeSettings(jt(A));
      const N = qa(P, a());
      N.syncInjection && n.syncInjection?.(), N.refreshDecorations && n.refreshDecorations?.();
    },
    setEnabled: S,
    setInjectEnabled: $,
    isActive() {
      return s;
    }
  };
}
function tc() {
  return document.querySelector("#extensions_settings2") ?? document.querySelector("#extensions_settings");
}
class X extends Error {
  code;
  status;
  constructor(t, n, s) {
    super(t), this.name = "TtsRequestError", this.code = n, this.status = s;
  }
}
function sr(e) {
  return e instanceof X;
}
function nc(e) {
  return new X(`请求超时（${e}ms），请检查网络或增大超时时间`, "timeout");
}
function sc() {
  return new X("请求已取消", "cancelled");
}
async function un(e, t, n, s) {
  const i = new AbortController();
  let o = !1, r = !1, l = null;
  const a = () => {
    r || (r = !0, clearTimeout(u), h?.removeEventListener("abort", E));
  }, f = () => o && !h?.aborted ? nc(s) : sc(), u = setTimeout(() => {
    o = !0, i.abort("timeout");
  }, s), h = n.signal, E = () => {
    i.abort(h?.reason ?? "cancelled");
  };
  h && (h.aborted ? i.abort(h.reason ?? "cancelled") : h.addEventListener("abort", E, { once: !0 }));
  const S = () => {
    l?.(f());
  };
  i.signal.addEventListener("abort", S);
  const $ = () => new Promise((P, N) => {
    if (i.signal.aborted) {
      N(f());
      return;
    }
    l = N;
  }), A = async (P) => {
    try {
      return await Promise.race([P, $()]);
    } catch (N) {
      throw N instanceof X ? N : i.signal.aborted ? f() : N;
    } finally {
      a(), i.signal.removeEventListener("abort", S);
    }
  };
  try {
    const P = await Promise.race([
      e(t, {
        ...n,
        signal: i.signal
      }),
      $()
    ]);
    return {
      ok: P.ok,
      status: P.status,
      statusText: P.statusText,
      headers: P.headers,
      text: () => A(P.text()),
      async json() {
        const N = await A(P.text());
        try {
          return JSON.parse(N);
        } catch {
          throw new X(
            "服务返回的不是合法 JSON，请检查地址或稍后重试",
            "invalid_json"
          );
        }
      },
      blob: () => A(P.blob()),
      close: a
    };
  } catch (P) {
    throw a(), i.signal.removeEventListener("abort", S), P instanceof X ? P : i.signal.aborted ? f() : P;
  }
}
function Rs(e, t) {
  return `${e.replace(/\/+$/, "")}${t.startsWith("/") ? "" : "/"}${t}`;
}
function ic(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function oc(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const rc = /api[_-]?key|authorization|token|secret|cookie|password/i;
function jn(e) {
  if (typeof e == "string")
    return e.length > 80 ? `${e.slice(0, 80)}…(len=${e.length})` : e;
  if (Array.isArray(e))
    return e.map((n) => jn(n));
  if (!e || typeof e != "object")
    return e;
  const t = {};
  for (const [n, s] of Object.entries(e)) {
    if (rc.test(n)) {
      t[n] = "[redacted]";
      continue;
    }
    if (n === "text" || n === "input" || n === "referenceText" || n === "reference_text") {
      t[n] = typeof s == "string" ? `[text len=${s.length}]` : "[text]";
      continue;
    }
    t[n] = jn(s);
  }
  return t;
}
function ir(e, t, n) {
  if (n === void 0) {
    console.info(`${Ee} [${e}] ${t}`);
    return;
  }
  console.info(`${Ee} [${e}] ${t}`, jn(n));
}
function Ps(e, t, n) {
  if (n === void 0) {
    console.warn(`${Ee} [${e}] ${t}`);
    return;
  }
  console.warn(`${Ee} [${e}] ${t}`, jn(n));
}
const lc = ["v2", "v3", "v4", "v2Pro"];
function or(e) {
  const t = e.trim();
  if (!t)
    return { modelName: "", version: "" };
  const n = t.lastIndexOf("|");
  return n < 0 ? { modelName: t, version: "" } : {
    modelName: t.slice(0, n).trim(),
    version: t.slice(n + 1).trim()
  };
}
function ac(e) {
  const t = e.trim().toLowerCase();
  return t === "v2pro" ? "v2Pro" : t === "v2" || t === "v3" || t === "v4" ? t : e.trim();
}
function cc(e) {
  const t = e.trim();
  return t ? {
    英文: "英语",
    日文: "日语",
    韩文: "韩语"
  }[t] ?? t : "多语种混合";
}
function uc(e) {
  const t = or(e.modelId), n = t.modelName.trim(), s = ac(t.version) || "v2Pro";
  return {
    url: Rs(e.baseUrl.trim(), "/v1/audio/speech"),
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
        text_lang: cc(e.textLang),
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
function fc(e) {
  if (!e.baseUrl.trim())
    throw new X("请先填写 Local-GSVI 服务地址", "config");
  if (!e.modelId.trim())
    throw new X("请先填写或选择 Local-GSVI 模型（modelName|version）", "config");
  if (!e.language.trim() || !e.emotion.trim())
    throw new X(
      "GSVI 生成要求映射完整：语种(prompt_lang)/情绪(emotion)不能为空",
      "config"
    );
  if (!or(e.modelId).modelName)
    throw new X("Local-GSVI 模型格式错误，期望 modelName|version", "config");
  if (!e.text.trim())
    throw new X("Local-GSVI 合成文本为空", "config");
}
function Ae(e) {
  return typeof e == "object" && e !== null;
}
function dc(e) {
  const t = e.replace(/^data:audio\/[a-zA-Z0-9.+-]+;base64,/i, "").trim();
  return t.length >= 16 && /^[A-Za-z0-9+/=\r\n]+$/.test(t);
}
function rr(e) {
  return e.trim().match(/^data:audio\/[a-zA-Z0-9.+-]+;base64,(.+)$/i)?.[1] ?? e.trim();
}
function pc(e) {
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
    if (typeof o == "string" && dc(o))
      return rr(o);
  return null;
}
function mc(e) {
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
function hc(e) {
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
function gc(e) {
  const t = atob(rr(e)), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function _s(e) {
  const t = e?.trim() ?? "";
  return t ? { Authorization: `Bearer ${t}` } : {};
}
function vc(e) {
  const t = fetch;
  async function n(s, i, o, r, l) {
    const a = /^https?:\/\//i.test(i) ? i : Rs(s, i);
    let f = !1;
    try {
      f = ic(s) === new URL(a).origin;
    } catch {
      f = !1;
    }
    const u = await un(
      t,
      a,
      {
        method: "GET",
        headers: f ? _s(o) : {},
        signal: l
      },
      r
    );
    if (!u.ok)
      throw new X(`下载 GSVI 输出失败：HTTP ${u.status}`, "http", u.status);
    return await u.blob();
  }
  return {
    id: "local_gsvi",
    async checkHealth(s) {
      if (s.engine !== "local_gsvi")
        throw new X("Local-GSVI 适配器收到了错误的引擎请求", "config");
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
        throw new X("Local-GSVI 适配器收到了错误的引擎请求", "config");
      const i = s.baseUrl.trim();
      if (!i)
        throw new X("请先填写 Local-GSVI 服务地址", "config");
      const o = [];
      for (const r of lc) {
        const l = Rs(i, `/models/${encodeURIComponent(r)}`);
        try {
          const a = await un(
            t,
            l,
            { method: "GET", headers: _s(s.authToken), signal: s.signal },
            s.timeoutMs
          );
          if (!a.ok) {
            Ps("local_gsvi", `GET /models/${r} failed`, {
              status: a.status
            }), a.close();
            continue;
          }
          const f = await a.json(), u = Ae(f) && Ae(f.models) ? f.models : f;
          if (!Ae(u))
            continue;
          Object.entries(u).forEach(([h, E]) => {
            if (!h || !Ae(E))
              return;
            const S = Object.keys(E).filter(Boolean).sort((A, P) => A.localeCompare(P)), $ = {};
            S.forEach((A) => {
              const P = E[A];
              $[A] = Array.isArray(P) ? P.map((N) => String(N).trim()).filter(Boolean) : typeof P == "string" ? [P.trim()].filter(Boolean) : [];
            }), o.push({
              id: `${h}|${r}`,
              name: `${h} [${r}]`,
              source: "gsvi_model",
              language: S.join(","),
              languages: S,
              emotionsByLanguage: $
            });
          });
        } catch (a) {
          if (a instanceof X && a.code === "cancelled")
            throw a;
          Ps("local_gsvi", `GET /models/${r} failed`);
        }
      }
      if (o.length === 0)
        throw new X(
          "未在 /models/{v2|v3|v4|v2Pro} 中解析到模型映射，请检查接口返回结构",
          "missing_audio"
        );
      return o.sort((r, l) => r.name.localeCompare(l.name));
    },
    async synthesize(s) {
      if (s.engine !== "local_gsvi")
        throw new X("Local-GSVI 适配器收到了错误的引擎请求", "config");
      fc(s);
      const i = uc(s), o = {
        "Content-Type": "application/json",
        ..._s(s.authToken)
      };
      ir("local_gsvi", "synthesize", {
        url: i.url,
        model: i.modelName,
        version: i.version,
        text: s.text
      });
      const r = await un(
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
        throw new X(
          `Local-GSVI 请求失败：HTTP ${r.status}`,
          "http",
          r.status
        );
      if ((r.headers.get("content-type")?.toLowerCase() ?? "").includes("application/json")) {
        const a = await r.json(), f = pc(a);
        if (f)
          return new Blob([Uint8Array.from(gc(f))], {
            type: s.format === "wav" ? "audio/wav" : "audio/mpeg"
          });
        const u = mc(a);
        if (u)
          return await n(
            s.baseUrl.trim(),
            u,
            s.authToken ?? "",
            s.timeoutMs,
            s.signal
          );
        throw new X(
          `Local-GSVI 未返回可用音频：${hc(a) || "JSON 响应中未找到音频"}`,
          "missing_audio"
        );
      }
      return await r.blob();
    }
  };
}
const _c = {
  international: {
    tts: "https://api.minimaxi.com/v1/t2a_v2",
    voice: "https://api.minimaxi.com/v1/get_voice"
  },
  beijing: {
    tts: "https://api-bj.minimaxi.com/v1/t2a_v2",
    voice: "https://api-bj.minimaxi.com/v1/get_voice"
  }
}, yc = /* @__PURE__ */ new Set([408, 409, 429, 500, 502, 503, 504]), bc = /* @__PURE__ */ new Set([1e3, 1001, 1002, 1039]), Ni = 2, xc = "tavern_multi_tts_voice_catalog_v1", Sc = 1440 * 60 * 1e3;
function Un(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function Ns(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Vi(e) {
  return _c[Ns(e)];
}
function lr(e, t) {
  return `${xc}:${e}:${t.trim()}`;
}
function Ec(e) {
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
function Gi(e) {
  return `Bearer ${Un(e)}`;
}
function wc(e) {
  const t = e.trim(), n = new Uint8Array(t.length / 2);
  for (let s = 0; s < t.length; s += 2)
    n[s / 2] = Number.parseInt(t.slice(s, s + 2), 16);
  return n;
}
function Tc(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function Cc(e) {
  const t = e.trim();
  return /^[0-9a-fA-F]+$/.test(t) && t.length % 2 === 0 ? wc(t) : Tc(t);
}
function Mc(e, t) {
  const s = `${t ?? ""} ${e}`.toLowerCase(), i = s.includes("japanese") ? "Japanese" : s.includes("english") ? "English" : s.includes("chinese") ? "Chinese" : s.includes("korean") ? "Korean" : s.includes("french") ? "French" : s.includes("german") ? "German" : s.includes("spanish") ? "Spanish" : "Unknown", o = s.includes("female") || s.includes("女") || s.includes("lady") || s.includes("girl") ? "Female" : s.includes("male") || s.includes("男") || s.includes("man") || s.includes("boy") ? "Male" : "Unknown";
  return { language: i, gender: o };
}
function Ac(e, t) {
  const n = t.trim();
  if (!n)
    return null;
  try {
    const s = localStorage.getItem(lr(e, n));
    if (!s)
      return null;
    const i = JSON.parse(s);
    return !i?.expires_at || Date.now() > i.expires_at ? null : i.items ?? null;
  } catch {
    return null;
  }
}
function Ic(e, t, n) {
  const s = t.trim();
  s && localStorage.setItem(
    lr(e, s),
    JSON.stringify({
      expires_at: Date.now() + Sc,
      items: n
    })
  );
}
function Rc(e) {
  const t = Un(e.apiKey), n = e.groupId.trim(), s = e.voiceId.trim();
  if (!t || !n || !s)
    throw new X("MiniMax 引擎缺少必要配置：API Key / Group ID / Voice ID", "config");
  if (!e.text.trim())
    throw new X("MiniMax 合成文本为空", "config");
}
function Pc(e) {
  return typeof e == "object" && e !== null;
}
function Nc(e, t) {
  return yc.has(e) || bc.has(t);
}
function Vc(e) {
  const t = fetch;
  return {
    id: "minimax",
    async checkHealth(n) {
      if (n.engine !== "minimax")
        throw new X("MiniMax 适配器收到了错误的引擎请求", "config");
      if (!Un(n.apiKey))
        return { ok: !1, message: "请先填写 MiniMax API Key" };
      try {
        return await this.listVoices({ ...n, forceRefresh: !0 }), { ok: !0, message: "MiniMax 服务可用" };
      } catch (i) {
        return { ok: !1, message: i instanceof Error ? i.message : String(i) };
      }
    },
    async listVoices(n) {
      if (n.engine !== "minimax")
        throw new X("MiniMax 适配器收到了错误的引擎请求", "config");
      const s = Un(n.apiKey);
      if (!s)
        throw new X("请先填写 API Key", "config");
      const i = Ns(n.region);
      if (!n.forceRefresh) {
        const h = Ac(i, n.groupId);
        if (h && h.length > 0)
          return h;
      }
      const o = Vi(i).voice, r = await un(
        t,
        o,
        {
          method: "POST",
          headers: {
            Authorization: Gi(s),
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ voice_type: "all" }),
          signal: n.signal
        },
        n.timeoutMs
      ), a = await r.json();
      if (!r.ok || (a.base_resp?.status_code ?? 0) !== 0)
        throw new X(
          a.base_resp?.status_msg ?? r.statusText ?? "拉取音色列表失败",
          "http",
          r.status
        );
      const f = [], u = (h, E = []) => {
        E.forEach((S) => {
          const $ = Mc(S.voice_id, S.voice_name);
          f.push({
            id: S.voice_id,
            name: S.voice_name ?? S.voice_id,
            description: S.description,
            source: h,
            language: $.language,
            gender: $.gender
          });
        });
      };
      return u("system", a.system_voice ?? []), u("voice_cloning", a.voice_cloning ?? []), u("voice_generation", a.voice_generation ?? []), Ic(i, n.groupId, f), f;
    },
    async synthesize(n) {
      if (n.engine !== "minimax")
        throw new X("MiniMax 适配器收到了错误的引擎请求", "config");
      Rc(n);
      const s = Ec(n), i = Vi(n.region).tts, o = {
        Authorization: Gi(n.apiKey),
        "Content-Type": "application/json"
      };
      ir("minimax", "synthesize", {
        model: s.model,
        voiceId: s.voice_setting.voice_id,
        region: Ns(n.region),
        groupId: n.groupId.trim(),
        text: n.text
      });
      let r = null;
      for (let l = 0; l <= Ni; l += 1) {
        const a = await un(
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
        if (!Pc(f))
          throw new X("MiniMax 响应结构无效", "invalid_json");
        const u = f;
        if (!a.ok || (u.base_resp?.status_code ?? 0) !== 0) {
          const S = u.base_resp?.status_code ?? a.status, $ = u.base_resp?.status_msg ?? a.statusText ?? "unknown error";
          if (r = `MiniMax 请求失败：code=${S}, msg=${$}`, Nc(a.status, S) && l < Ni) {
            Ps("minimax", "retryable synthesize failure", {
              status: a.status,
              attempt: l
            }), await oc(250 * (l + 1));
            continue;
          }
          throw new X(r, "http", a.status);
        }
        const h = u.data?.audio ?? u.data?.audio_file ?? u.audio_file;
        if (!h)
          throw new X("MiniMax 响应中未找到音频字段", "missing_audio");
        const E = Cc(h);
        return new Blob([Uint8Array.from(E)], { type: "audio/mpeg" });
      }
      throw new X(r ?? "MiniMax 请求失败：未知错误", "http");
    }
  };
}
function Vs(e) {
  return e === "local_gsvi" ? vc() : Vc();
}
const Gs = "tavern_multi_tts_say_rule", Gc = 1, Lc = {
  system: 0,
  user: 1,
  assistant: 2
};
function ar(e) {
  const t = e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.characterMappings, n = [];
  for (const s of t) {
    const i = s.characterName.trim();
    i && !n.includes(i) && n.push(i);
  }
  return n;
}
function Oc(e) {
  const t = ar(e);
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
function $c(e) {
  const t = ar(e).join("、") || "（未配置角色映射）";
  return `${e.injectTemplate.replaceAll("${target_characters}", t).replaceAll("${mapped_characters}", t)}

${Oc(e)}`;
}
function ys(e, t) {
  return !t.enabled || !t.injectEnabled ? (e.deleteExtensionPrompt(Gs), { applied: !1 }) : (e.setExtensionPrompt(
    Gs,
    $c(t),
    Gc,
    t.injectDepth,
    !1,
    Lc[t.injectRole]
  ), { applied: !0, depth: t.injectDepth, role: t.injectRole });
}
function Dc(e) {
  e.deleteExtensionPrompt(Gs);
}
const Li = /<say(?:\s+char\s*=\s*(?:"([^"]*)"|“([^”]*)”))?\s*>([\s\S]*?)<\/say>/gi;
function jc(e) {
  const t = new RegExp(Li.source, Li.flags), n = [];
  let s, i = 0;
  for (; (s = t.exec(e)) !== null; ) {
    const o = (s[1] ?? s[2])?.trim(), r = s[3].trim();
    r && (n.push({ index: i, text: r, ...o ? { char: o } : {} }), i += 1);
  }
  return n;
}
const Uc = /* @__PURE__ */ new Set([
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
]), cr = /\(([a-z-]+)\)/gi, kc = /\([a-z-]+\)/gi;
function Ys(e) {
  return e.replace(/\s{2,}/g, " ").trim();
}
function Fc(e) {
  return Ys(
    e.replace(cr, (t, n) => {
      const s = String(n).toLowerCase();
      return Uc.has(s) ? `(${s})` : "";
    })
  );
}
function Bc(e) {
  return Ys(e.replace(cr, ""));
}
function Hc(e) {
  return Ys(e.replace(kc, ""));
}
function Kc(e, t) {
  const n = Fc(e);
  return t === "local_gsvi" ? Hc(n) : n;
}
async function zc(e, t) {
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
const _n = "data-tavern-multi-tts-rendered", Zs = "data-tavern-multi-tts-swipe", ns = "tavern-multi-tts-segment", kn = "tavern-multi-tts-fallback-list";
function Wc(e, t, n) {
  return `${e}:${t}:${n}`;
}
function Oi(e) {
  const t = e.split(":");
  if (t.length !== 3)
    return null;
  const n = Number(t[0]), s = Number(t[1]), i = Number(t[2]);
  return [n, s, i].every(Number.isFinite) ? { message_id: n, swipe_id: s, index: i } : null;
}
function bs(e) {
  return document.querySelector(`#chat .mes[mesid="${e}"]`);
}
function Jc(e) {
  return e.querySelector(".mes_text");
}
function ur(e, t) {
  const n = e.getAttribute(_n) === "true", s = e.querySelector(`.${ns}`) !== null;
  return !n || !s ? !1 : t === void 0 ? !0 : e.getAttribute(Zs) === String(t);
}
function nn(e = document) {
  e.querySelectorAll(`.${ns}`).forEach((t) => {
    const n = t.querySelector(".tavern-multi-tts-text")?.textContent ?? "";
    t.replaceWith(document.createTextNode(n));
  }), e.querySelectorAll(`.${kn}`).forEach((t) => t.remove()), e.querySelectorAll(`[${_n}]`).forEach((t) => {
    t.removeAttribute(_n), t.removeAttribute(Zs);
  });
}
function tt(e, t) {
  e.classList.remove("is-loading", "is-ready", "is-playing", "is-error"), t !== "idle" && e.classList.add(`is-${t}`);
  const n = e.querySelector(".tavern-multi-tts-indicator");
  n && (n.textContent = t === "loading" ? "⏳" : t === "ready" ? "▶" : t === "playing" ? "⏸" : t === "error" ? "⚠" : "▶");
}
function $i(e) {
  return e.replace(/\s+/g, "").trim();
}
function Xc(e, t, n, s) {
  const i = e.splitText(t);
  i.splitText(n), i.replaceWith(s);
}
function Yc(e, t, n, s) {
  const i = [t, n].map((l) => l.trim()).filter(Boolean), o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let r = o.nextNode();
  for (; r; ) {
    const l = r.parentElement;
    if (l && !l.closest(`.${ns}`) && !l.closest(`.${kn}`) && !l.closest(".mes_buttons")) {
      const a = r.nodeValue ?? "";
      for (const f of i) {
        const u = a.indexOf(f);
        if (u >= 0)
          return Xc(r, u, f.length, s), !0;
        if ($i(a) === $i(f))
          return r.replaceWith(s), !0;
      }
    }
    r = o.nextNode();
  }
  return !1;
}
function Zc(e, t, n, s, i, o, r) {
  const l = Wc(e, t, n.index), a = document.createElement("span");
  a.className = ns, a.dataset.tavernMultiTtsKey = l;
  const f = document.createElement("span");
  f.className = "tavern-multi-tts-text", f.textContent = s;
  const u = document.createElement("span");
  u.className = "tavern-multi-tts-indicator", u.textContent = "▶";
  const h = document.createElement("span");
  h.className = "tavern-multi-tts-actions";
  const E = document.createElement("button");
  E.type = "button", E.className = "tavern-multi-tts-action", E.textContent = "下", h.append(E), a.append(f, u, h), tt(a, "idle");
  let S = r.get(l) ?? null;
  const $ = async () => {
    tt(a, "loading");
    try {
      const N = await o.ensureAudio(n, s, i);
      return N.cancelled ? null : N.blob ? (tt(a, "ready"), N.blob) : (tt(a, "error"), null);
    } catch {
      return tt(a, "error"), null;
    }
  }, A = async () => {
    const N = await $();
    N && (S?.stop(), S = Zo(
      N,
      () => tt(a, "playing"),
      () => {
        S = null, r.delete(l), tt(a, "ready");
      },
      () => {
        S = null, r.delete(l), tt(a, "error");
      },
      () => tt(a, "ready")
    ), r.set(l, S));
  }, P = async () => {
    if (!S)
      return;
    const N = S.getState();
    if (N === "playing") {
      S.pause();
      return;
    }
    if (N === "paused")
      try {
        await S.resume();
      } catch {
      }
  };
  return a.addEventListener("click", (N) => {
    const U = N.target;
    if (U?.closest(".tavern-multi-tts-indicator")) {
      P();
      return;
    }
    U?.closest(".tavern-multi-tts-action") || A();
  }), E.addEventListener("click", (N) => {
    N.preventDefault(), N.stopPropagation(), (async () => {
      const U = await $();
      U && o.downloadAudio(U, e, n.index);
    })();
  }), a;
}
function Qc(e, t, n, s, i, o = 0) {
  if (ur(e, o))
    return 0;
  e.getAttribute(_n) === "true" && nn(e);
  const r = Jc(e) ?? e, l = [];
  let a = 0;
  for (const f of n) {
    if (!f.displayText || !f.ttsText)
      continue;
    const u = Zc(
      t,
      o,
      f,
      f.displayText,
      f.ttsText,
      s,
      i
    );
    Yc(r, f.text, f.displayText, u) ? a += 1 : l.push(u);
  }
  if (r.querySelectorAll(`.${kn}`).forEach((f) => f.remove()), l.length > 0) {
    const f = document.createElement("div");
    f.className = kn, l.forEach((u) => f.append(u, document.createTextNode(" "))), r.append(f), a += l.length;
  }
  return a > 0 && (e.setAttribute(_n, "true"), e.setAttribute(Zs, String(o))), a;
}
function Fn(e, t) {
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const s = e[n];
    if (s && t(s))
      return s;
  }
}
function fr(e, t) {
  return e.characterName.trim() === t && !!e.minimaxVoiceId.trim();
}
function dr(e, t) {
  return e.characterName.trim() === t && !!e.gsviVoiceId.trim() && !!e.gsviLanguage.trim() && !!e.gsviEmotion.trim();
}
function pr(e, t) {
  const n = t?.trim() ?? "";
  return n ? e.ttsEngine === "local_gsvi" ? !!Fn(
    e.gsviCharacterMappings,
    (s) => dr(s, n)
  ) : !!Fn(e.characterMappings, (s) => fr(s, n)) : !0;
}
function mr(e, t) {
  const n = t?.trim() ?? "";
  if (e.ttsEngine === "local_gsvi") {
    const i = Fn(
      e.gsviCharacterMappings,
      (o) => dr(o, n)
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
    minimaxVoiceId: Fn(
      e.characterMappings,
      (i) => fr(i, n)
    )?.minimaxVoiceId?.trim() || e.voiceId.trim() || e.voiceCatalogSelectedId.trim()
  };
}
function hr(e, t, n) {
  if (!pr(e, n))
    return null;
  const s = mr(e, n);
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
function qc(e) {
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
function eu(e, t, n) {
  const s = mr(e, n);
  return e.ttsEngine === "local_gsvi" ? {
    text: t,
    engine: "local_gsvi",
    localGsvi: {
      origin: Aa(e.localGsviBaseUrl),
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
const tu = 15;
function nu(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = [];
  let o = !1, r = !1, l = 0;
  function a() {
    return e.getSettings();
  }
  function f() {
    r || !document.querySelector(".minimax-tts-segment") || (r = !0, e.warn?.("检测到旧酒馆助手 Multi-TTS 仍在装饰消息。请只启用其中一个，避免重复生成。"));
  }
  function u(R) {
    return sr(R) && R.code === "cancelled";
  }
  function h(R, G) {
    return n.get(R)?.token === G;
  }
  function E(R) {
    for (const [G, W] of n)
      R(W) && (W.controller.abort(), n.delete(G));
  }
  function S() {
    E(() => !0);
  }
  function $(R, G) {
    E(
      (W) => W.message_id === R && (G === void 0 || W.swipe_id !== G)
    );
  }
  function A(R, G, W) {
    n.get(R)?.controller.abort(), l += 1;
    const oe = {
      token: l,
      message_id: G,
      swipe_id: W,
      controller: new AbortController()
    };
    return n.set(R, oe), oe;
  }
  function P(R, G) {
    h(R, G) && n.delete(R);
  }
  async function N(R, G, W, re, oe) {
    const ue = A(R, G, W);
    try {
      const Ne = a(), w = hr(Ne, re, oe);
      if (!w)
        return { blob: null };
      w.signal = ue.controller.signal;
      const p = eu(Ne, re, oe), m = await Ia(p);
      if (!h(R, ue.token) || ue.controller.signal.aborted)
        return { cancelled: !0 };
      const se = s.get(m);
      if (se)
        return { blob: se };
      const j = await La(m);
      if (!h(R, ue.token) || ue.controller.signal.aborted)
        return { cancelled: !0 };
      if (j)
        return s.set(m, j), { blob: j };
      const be = await Vs(w.engine).synthesize(w);
      return be && (await Oa(m, be), s.set(m, be)), !h(R, ue.token) || ue.controller.signal.aborted ? { cancelled: !0 } : { blob: be };
    } catch (Ne) {
      return u(Ne) || !h(R, ue.token) || ue.controller.signal.aborted ? { cancelled: !0 } : (console.error(`${Ee} synthesize failed`), { blob: null });
    } finally {
      P(R, ue.token);
    }
  }
  function U(R, G) {
    if (typeof R.swipe_id == "number" && Number.isFinite(R.swipe_id))
      return R.swipe_id;
    const W = Number(G?.getAttribute("swipeid"));
    return Number.isFinite(W) ? W : 0;
  }
  function Z(R, G) {
    for (const [W, re] of t) {
      const oe = Oi(W);
      oe && oe.message_id === R && oe.swipe_id !== G && (re.stop(), t.delete(W));
    }
  }
  function L(R) {
    for (const [G, W] of t) {
      const re = Oi(G);
      re && re.message_id === R && (W.stop(), t.delete(G));
    }
  }
  function k(R, G = {}) {
    const W = G.attempt ?? 0, re = a();
    if (!re.enabled)
      return;
    const oe = e.getChatMessage(R);
    if (!oe || oe.is_user || oe.is_system)
      return;
    const ue = typeof oe.mes == "string" ? oe.mes : "", Ne = jc(ue).filter(
      (de) => pr(re, de.char)
    );
    if (Ne.length === 0)
      return;
    const w = e.findMessageElement(R) ?? bs(R);
    if (!w) {
      W < tu && window.setTimeout(() => k(R, { ...G, attempt: W + 1 }), 120);
      return;
    }
    const p = U(oe, w);
    if (ur(w, p))
      return;
    w.getAttribute("data-tavern-multi-tts-rendered") === "true" && nn(w), Z(R, p), f();
    const m = Ne.map((de) => ({
      ...de,
      displayText: Bc(de.text),
      ttsText: Kc(de.text, re.ttsEngine)
    })), se = [], j = (de) => G.skipPrefetch ? !1 : re.prefetchMode === "auto_all" ? !0 : re.prefetchMode === "auto_first_n" ? de < re.prefetchFirstCount : !1;
    Qc(
      w,
      R,
      m,
      {
        ensureAudio: async (de, be, It) => {
          const c = `${R}:${p}:${de.index}`;
          return await N(c, R, p, It, de.char);
        },
        downloadAudio(de, be, It) {
          ja(de, Da(be, It));
        }
      },
      t,
      p
    ), m.forEach((de, be) => {
      j(be) && de.ttsText && se.push(async () => {
        const It = `${R}:${p}:${de.index}`;
        try {
          await N(It, R, p, de.ttsText, de.char);
        } catch {
        }
      });
    }), se.length > 0 && zc(se, re.maxConcurrency);
  }
  function Te(...R) {
    const G = Number(R[0]);
    Number.isFinite(G) && window.setTimeout(() => k(G), 0);
  }
  function Ie(...R) {
    const G = Number(R[0]);
    if (!Number.isFinite(G))
      return;
    $(G);
    const W = e.findMessageElement(G) ?? bs(G);
    W && nn(W), L(G), window.setTimeout(() => k(G), 0);
  }
  function Oe(...R) {
    const G = Number(R[0]);
    if (!Number.isFinite(G))
      return;
    const W = e.findMessageElement(G) ?? bs(G), re = e.getChatMessage(G), oe = re ? U(re, W) : 0;
    $(G, oe), window.setTimeout(() => k(G, { skipPrefetch: !0 }), 0);
  }
  function $e(R = {}) {
    document.querySelectorAll("#chat .mes[mesid]").forEach((G) => {
      const W = Number(G.getAttribute("mesid"));
      Number.isFinite(W) && k(W, R);
    });
  }
  function Ce(R, G) {
    e.eventSource.on(R, G), i.push(() => e.eventSource.removeListener(R, G));
  }
  function Tt() {
    o || (o = !0, ys(e, a()), Ce(e.eventNames.messageReceived, Te), Ce(e.eventNames.messageRendered, Te), Ce(e.eventNames.messageUpdated, Ie), Ce(e.eventNames.messageSwiped, Oe), Ce(e.eventNames.moreMessagesLoaded, () => {
      $e({ skipPrefetch: !0 });
    }), Ce(e.eventNames.chatChanged, () => {
      S(), t.forEach((R) => R.stop()), t.clear(), In(), ys(e, a()), $e({ skipPrefetch: !0 });
    }), $e({ skipPrefetch: !0 }), console.info(`${Ee} chat runtime started`));
  }
  function Xt() {
    i.splice(0).forEach((R) => R()), S(), t.forEach((R) => R.stop()), t.clear(), s.clear(), In(), Dc(e), nn(document), o = !1, console.info(`${Ee} chat runtime stopped`);
  }
  function Ct() {
    S(), t.forEach((R) => R.stop()), t.clear(), In(), nn(document);
  }
  function mt() {
    ys(e, a());
  }
  function Mt() {
    Ct(), a().enabled && $e({ skipPrefetch: !0 });
  }
  function At() {
    mt(), Mt();
  }
  return { start: Tt, stop: Xt, syncFromSettings: At, syncInjection: mt, refreshDecorations: Mt, decorate: k };
}
function pt(e) {
  return typeof e == "object" && e !== null;
}
function su(e) {
  if (pt(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function iu(e) {
  return !pt(e) || typeof e.getContext != "function" ? null : e;
}
function ou(e) {
  if (!pt(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!pt(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = su(e.eventSource), n = pt(e.eventTypes) ? e.eventTypes : pt(e.event_types) ? e.event_types : void 0, s = n ? {
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
function gr() {
  const e = iu(globalThis.SillyTavern);
  if (!e)
    throw new Error(
      "SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行"
    );
  return ou(e.getContext());
}
function vr() {
  const e = gr();
  return {
    readRawSettings() {
      return e.extensionSettings[hs];
    },
    writeSettings(t) {
      e.extensionSettings[hs] = t, e.saveSettingsDebounced();
    },
    removeSettings() {
      delete e.extensionSettings[hs], e.saveSettingsDebounced();
    },
    findSettingsRoot: tc,
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
function ru(e) {
  return pt(e) ? {
    mes: typeof e.mes == "string" ? e.mes : void 0,
    is_user: typeof e.is_user == "boolean" ? e.is_user : void 0,
    is_system: typeof e.is_system == "boolean" ? e.is_system : void 0,
    swipe_id: typeof e.swipe_id == "number" ? e.swipe_id : void 0
  } : null;
}
function lu(e) {
  const t = gr();
  if (!t.eventSource)
    throw new Error("SillyTavern eventSource 不可用，无法监听消息事件");
  const n = t.eventSource;
  return {
    getSettings: e,
    getChatMessage(s) {
      return Array.isArray(t.chat) ? ru(t.chat[s]) : null;
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
function au(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    const s = n.trim();
    s && t.set(s, (t.get(s) ?? 0) + 1);
  }), [...t.entries()].filter(([, n]) => n > 1).map(([n]) => n);
}
function Di(e) {
  return [...e].sort((t, n) => t.name.localeCompare(n.name));
}
function ji(e, t, n, s) {
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
function Ui(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.find((i) => i.name === n);
  return s ? { mappings: [...s.mappings] } : { error: `未找到存档：${n}` };
}
function ki(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.filter((i) => i.name !== n);
  return s.length === e.length ? { error: `未找到存档：${n}` } : { presets: s, message: `已删除存档：${n}` };
}
const cu = {
  ja: "おはようございます。これは Tavern Multi-TTS のテスト音声です。",
  zh: "你好，这是 Tavern Multi-TTS 的测试语音。",
  en: "Hello, this is a Tavern Multi-TTS test voice."
}, uu = {
  ja: "こんにちは、これは GSVI の音声参照用サンプルです。",
  zh: "你好，这是一段 GSVI 的语音参考音频。",
  en: "Hello, this is a GSVI reference voice sample."
}, fu = [
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
], du = [
  "不切",
  "凑四句一切",
  "凑50字一切",
  "按中文句号。切",
  "按英文句号.切",
  "按标点符号切"
];
function pu(e, t) {
  return e === "local_gsvi" ? uu[t] : cu[t];
}
function mu() {
  return {
    search: "",
    language: "all",
    gender: "all",
    source: "all"
  };
}
function Fi() {
  return {
    voices: [],
    filter: mu()
  };
}
function Bi() {
  return {
    minimax: Fi(),
    local_gsvi: Fi()
  };
}
function hu(e, t) {
  return t === "local_gsvi" ? e.local_gsvi : e.minimax;
}
function gu(e, t, n) {
  const s = hu(e, t);
  return s.voices = [...n], e;
}
function vu(e) {
  return [
    ...new Set(e.map((t) => t.language).filter((t) => !!t))
  ].sort();
}
function _u(e, t) {
  const n = t.search.trim().toLowerCase();
  return e.filter((s) => t.language !== "all" && s.language !== t.language || t.gender !== "all" && s.gender !== t.gender || t.source !== "all" && s.source !== t.source ? !1 : n ? [s.id, s.name, ...s.description ?? []].join(" ").toLowerCase().includes(n) : !0);
}
function Hi(e) {
  const t = [e.language, e.gender, e.source].filter(Boolean);
  return t.length > 0 ? `${e.name} (${t.join(" / ")})` : e.name;
}
function Ki(e) {
  return e?.languages ?? [];
}
function zi(e, t) {
  const n = t.trim();
  return !e || !n ? [] : e.emotionsByLanguage?.[n] ?? [];
}
function Wi(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(2)} MB`;
}
const yu = { class: "tavern-multi-tts-settings" }, bu = { class: "inline-drawer" }, xu = { class: "inline-drawer-toggle inline-drawer-header" }, Su = { class: "inline-drawer-content" }, Eu = { class: "tavern-multi-tts-toolbar" }, wu = { class: "tavern-multi-tts-version" }, Tu = { class: "tavern-multi-tts-row" }, Cu = { class: "checkbox_label" }, Mu = { class: "tavern-multi-tts-field" }, Au = { class: "tavern-multi-tts-grid" }, Iu = { class: "tavern-multi-tts-field" }, Ru = { class: "tavern-multi-tts-field" }, Pu = { class: "tavern-multi-tts-field" }, Nu = { class: "tavern-multi-tts-actions" }, Vu = ["disabled"], Gu = ["disabled"], Lu = { class: "tavern-multi-tts-grid" }, Ou = ["value"], $u = { class: "tavern-multi-tts-field" }, Du = ["value"], ju = { value: "" }, Uu = ["value"], ku = { class: "tavern-multi-tts-grid" }, Fu = { class: "tavern-multi-tts-field" }, Bu = ["value"], Hu = { class: "tavern-multi-tts-field" }, Ku = { class: "tavern-multi-tts-field" }, zu = { class: "tavern-multi-tts-field" }, Wu = { class: "tavern-multi-tts-actions" }, Ju = ["disabled"], Xu = { class: "tavern-multi-tts-grid" }, Yu = { class: "tavern-multi-tts-field" }, Zu = { value: "" }, Qu = ["value"], qu = { class: "tavern-multi-tts-field" }, ef = ["value"], tf = { class: "tavern-multi-tts-field" }, nf = ["value"], sf = { class: "tavern-multi-tts-field" }, of = {
  class: "tavern-multi-tts-section",
  open: ""
}, rf = { class: "tavern-multi-tts-actions" }, lf = ["value"], af = ["disabled"], cf = ["disabled"], uf = ["onUpdate:modelValue"], ff = ["onUpdate:modelValue"], df = ["value", "onChange"], pf = ["value"], mf = ["disabled", "onClick"], hf = ["onClick"], gf = ["onUpdate:modelValue"], vf = ["onUpdate:modelValue"], _f = { value: "" }, yf = ["value"], bf = ["onUpdate:modelValue"], xf = ["value"], Sf = ["onUpdate:modelValue"], Ef = ["value"], wf = ["disabled", "onClick"], Tf = ["onClick"], Cf = {
  key: 2,
  class: "tavern-multi-tts-hint"
}, Mf = { class: "tavern-multi-tts-row" }, Af = { class: "checkbox_label" }, If = ["disabled"], Rf = { class: "tavern-multi-tts-section" }, Pf = { class: "tavern-multi-tts-field" }, Nf = {
  key: 0,
  class: "tavern-multi-tts-grid"
}, Vf = {
  key: 0,
  class: "tavern-multi-tts-field"
}, Gf = { class: "tavern-multi-tts-field" }, Lf = { class: "tavern-multi-tts-field" }, Of = { class: "tavern-multi-tts-field" }, $f = { class: "tavern-multi-tts-field" }, Df = { class: "tavern-multi-tts-field" }, jf = { class: "tavern-multi-tts-grid" }, Uf = { class: "tavern-multi-tts-field" }, kf = ["value"], Ff = { class: "tavern-multi-tts-field" }, Bf = ["value"], Hf = { class: "tavern-multi-tts-field" }, Kf = { class: "tavern-multi-tts-actions" }, zf = ["disabled"], Wf = ["disabled"], Jf = { class: "tavern-multi-tts-hint" }, Xf = /* @__PURE__ */ ml({
  __name: "settings-panel",
  props: {
    displayName: {},
    version: {},
    settings: {},
    onSettingsChange: { type: Function }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Rn(jt(t.settings)), s = /* @__PURE__ */ Pt(""), i = /* @__PURE__ */ Pt(!1), o = /* @__PURE__ */ Rn(Bi()), r = /* @__PURE__ */ Pt(""), l = /* @__PURE__ */ Pt(""), a = /* @__PURE__ */ Pt(0), f = /* @__PURE__ */ Pt(0), u = De(() => n.ttsEngine === "minimax"), h = De(() => o.minimax.voices), E = De(() => o.local_gsvi.voices), S = De(
      () => _u(o.minimax.voices, o.minimax.filter)
    ), $ = De(() => vu(o.minimax.voices)), A = De(
      () => o.local_gsvi.voices.find((w) => w.id === n.localGsviModel)
    ), P = De(() => Ki(A.value)), N = De(
      () => zi(A.value, n.localGsviLanguage)
    ), U = De(
      () => u.value ? Di(n.characterMappingPresets) : Di(n.gsviCharacterMappingPresets)
    ), Z = De(
      () => au(
        (u.value ? n.characterMappings : n.gsviCharacterMappings).map(
          (w) => w.characterName
        )
      )
    ), L = De(() => Wi(f.value));
    ul(
      n,
      () => {
        t.onSettingsChange(jt(n));
      },
      { deep: !0 }
    );
    function k(w) {
      s.value = w;
    }
    function Te(w, p) {
      if (sr(w)) {
        k(w.message);
        return;
      }
      k(w instanceof Error ? w.message : p);
    }
    function Ie() {
      return n.characterMappings.map((w) => ({
        characterName: w.characterName.trim(),
        minimaxVoiceId: w.minimaxVoiceId.trim()
      })).filter((w) => w.characterName && w.minimaxVoiceId);
    }
    function Oe() {
      return n.gsviCharacterMappings.map((w) => ({
        characterName: w.characterName.trim(),
        gsviVoiceId: w.gsviVoiceId.trim(),
        gsviLanguage: w.gsviLanguage.trim(),
        gsviEmotion: w.gsviEmotion.trim()
      })).filter(
        (w) => w.characterName && w.gsviVoiceId && w.gsviLanguage && w.gsviEmotion
      );
    }
    async function $e(w, p, m) {
      if (!i.value) {
        i.value = !0, k(p);
        try {
          await w();
        } catch (se) {
          Te(se, m);
        } finally {
          i.value = !1;
        }
      }
    }
    async function Ce(w = !1) {
      await $e(
        async () => {
          const p = qc(n);
          if (!p) {
            k(u.value ? "请先填写 API Key" : "请先填写 Local-GSVI 服务地址");
            return;
          }
          p.engine === "minimax" && (p.forceRefresh = w);
          const m = n.ttsEngine, se = await Vs(m).listVoices(p);
          gu(o, m, se), k(`已加载 ${se.length} 个${m === "minimax" ? "音色" : "模型"}`);
        },
        "正在拉取列表…",
        "拉取列表失败"
      );
    }
    function Tt(w) {
      n.voiceId = w, n.voiceCatalogSelectedId = w;
    }
    function Xt() {
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
    function Ct(w) {
      if (u.value) {
        n.characterMappings.splice(w, 1);
        return;
      }
      n.gsviCharacterMappings.splice(w, 1);
    }
    function mt() {
      const w = r.value, p = U.value.some((se) => se.name === w.trim());
      if (p && !window.confirm(`存档「${w.trim()}」已存在，要覆盖吗？`))
        return;
      const m = u.value ? ji(n.characterMappingPresets, w, Ie(), p) : ji(n.gsviCharacterMappingPresets, w, Oe(), p);
      if ("error" in m) {
        k(m.error);
        return;
      }
      u.value ? n.characterMappingPresets = m.presets : n.gsviCharacterMappingPresets = m.presets, l.value = w.trim(), k(m.message);
    }
    function Mt() {
      const w = u.value ? Ui(n.characterMappingPresets, l.value) : Ui(n.gsviCharacterMappingPresets, l.value);
      if ("error" in w) {
        k(w.error);
        return;
      }
      (u.value ? Ie().length > 0 : Oe().length > 0) && !window.confirm("读取存档会覆盖当前映射，确定继续吗？") || (u.value ? n.characterMappings = w.mappings : n.gsviCharacterMappings = w.mappings, k(`已读取存档：${l.value}`));
    }
    function At() {
      if (!window.confirm(`确定删除存档「${l.value}」吗？`))
        return;
      const w = u.value ? ki(n.characterMappingPresets, l.value) : ki(n.gsviCharacterMappingPresets, l.value);
      if ("error" in w) {
        k(w.error);
        return;
      }
      u.value ? n.characterMappingPresets = w.presets : n.gsviCharacterMappingPresets = w.presets, l.value = "", k(w.message);
    }
    async function R(w) {
      await $e(
        async () => {
          const p = pu(n.ttsEngine, n.testLanguage), m = hr(n, p, w);
          if (!m) {
            k(
              w ? `角色「${w}」未完整映射，无法测试` : "请先补全当前引擎的默认音色/模型后再测试"
            );
            return;
          }
          const se = await Vs(n.ttsEngine).synthesize(m);
          Zo(se), k(w ? `正在试听「${w}」` : "正在试听默认音色");
        },
        "正在合成测试语音…",
        "测试语音失败"
      );
    }
    async function G() {
      await $e(
        async () => {
          const w = await $a();
          a.value = w.count, f.value = w.totalBytes, k(`缓存 ${w.count} 条，${Wi(w.totalBytes)}`);
        },
        "正在读取缓存…",
        "读取缓存失败"
      );
    }
    async function W() {
      window.confirm("确定清空本扩展的音频缓存吗？") && await $e(
        async () => {
          await Yo(), a.value = 0, f.value = 0, k("已清空音频缓存");
        },
        "正在清空缓存…",
        "清空缓存失败"
      );
    }
    function re() {
      window.confirm("确定恢复默认设置吗？当前映射和密钥都会被清空。") && (Object.assign(n, jt(zt)), Object.assign(o, Bi()), k("已恢复默认设置"));
    }
    function oe() {
      P.value.includes(n.localGsviLanguage) || (n.localGsviLanguage = "", n.localGsviEmotion = "");
    }
    function ue(w) {
      return Ki(o.local_gsvi.voices.find((p) => p.id === w));
    }
    function Ne(w, p) {
      return zi(
        o.local_gsvi.voices.find((m) => m.id === w),
        p
      );
    }
    return G().catch((w) => Te(w, "读取缓存失败")), (w, p) => (F(), B("div", yu, [
      g("div", bu, [
        g("div", xu, [
          g("b", null, J(e.displayName), 1),
          p[37] || (p[37] = g("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        g("div", Su, [
          g("div", Eu, [
            g("small", wu, J(e.version), 1),
            g("small", {
              class: Jn(["tavern-multi-tts-status", { "is-busy": i.value }])
            }, J(s.value || "更改会自动保存"), 3)
          ]),
          g("div", Tu, [
            g("label", Cu, [
              K(g("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (m) => n.enabled = m),
                type: "checkbox"
              }, null, 512), [
                [Ci, n.enabled]
              ]),
              p[38] || (p[38] = g("span", null, "启用", -1))
            ]),
            K(g("select", {
              "onUpdate:modelValue": p[1] || (p[1] = (m) => n.ttsEngine = m),
              class: "text_pole tavern-multi-tts-engine"
            }, [...p[39] || (p[39] = [
              g("option", { value: "minimax" }, "MiniMax", -1),
              g("option", { value: "local_gsvi" }, "Local-GSVI", -1)
            ])], 512), [
              [ge, n.ttsEngine]
            ])
          ]),
          u.value ? (F(), B(q, { key: 0 }, [
            g("label", Mu, [
              p[40] || (p[40] = le(" API Key ", -1)),
              K(g("input", {
                "onUpdate:modelValue": p[2] || (p[2] = (m) => n.apiKey = m),
                class: "text_pole",
                type: "password",
                autocomplete: "off"
              }, null, 512), [
                [he, n.apiKey]
              ])
            ]),
            g("div", Au, [
              g("label", Iu, [
                p[41] || (p[41] = le(" Group ID ", -1)),
                K(g("input", {
                  "onUpdate:modelValue": p[3] || (p[3] = (m) => n.groupId = m),
                  class: "text_pole",
                  type: "text"
                }, null, 512), [
                  [he, n.groupId]
                ])
              ]),
              g("label", Ru, [
                p[43] || (p[43] = le(" 区域 ", -1)),
                K(g("select", {
                  "onUpdate:modelValue": p[4] || (p[4] = (m) => n.minimaxRegion = m),
                  class: "text_pole"
                }, [...p[42] || (p[42] = [
                  g("option", { value: "international" }, "国际", -1),
                  g("option", { value: "beijing" }, "北京", -1)
                ])], 512), [
                  [ge, n.minimaxRegion]
                ])
              ])
            ]),
            g("label", Pu, [
              p[44] || (p[44] = le(" 默认音色 ", -1)),
              K(g("input", {
                "onUpdate:modelValue": p[5] || (p[5] = (m) => n.voiceId = m),
                class: "text_pole",
                type: "text",
                placeholder: "无 char 的台词使用"
              }, null, 512), [
                [he, n.voiceId]
              ])
            ]),
            g("div", Nu, [
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: p[6] || (p[6] = (m) => Ce(!1))
              }, " 拉取音色 ", 8, Vu),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: p[7] || (p[7] = (m) => Ce(!0))
              }, " 刷新音色 ", 8, Gu)
            ]),
            h.value.length > 0 ? (F(), B(q, { key: 0 }, [
              g("div", Lu, [
                K(g("input", {
                  "onUpdate:modelValue": p[8] || (p[8] = (m) => o.minimax.filter.search = m),
                  class: "text_pole",
                  type: "search",
                  placeholder: "搜索音色"
                }, null, 512), [
                  [he, o.minimax.filter.search]
                ]),
                K(g("select", {
                  "onUpdate:modelValue": p[9] || (p[9] = (m) => o.minimax.filter.language = m),
                  class: "text_pole"
                }, [
                  p[45] || (p[45] = g("option", { value: "all" }, "全部语言", -1)),
                  (F(!0), B(q, null, xe($.value, (m) => (F(), B("option", {
                    key: m,
                    value: m
                  }, J(m), 9, Ou))), 128))
                ], 512), [
                  [ge, o.minimax.filter.language]
                ]),
                K(g("select", {
                  "onUpdate:modelValue": p[10] || (p[10] = (m) => o.minimax.filter.gender = m),
                  class: "text_pole"
                }, [...p[46] || (p[46] = [
                  g("option", { value: "all" }, "全部性别", -1),
                  g("option", { value: "Female" }, "Female", -1),
                  g("option", { value: "Male" }, "Male", -1),
                  g("option", { value: "Unknown" }, "Unknown", -1)
                ])], 512), [
                  [ge, o.minimax.filter.gender]
                ]),
                K(g("select", {
                  "onUpdate:modelValue": p[11] || (p[11] = (m) => o.minimax.filter.source = m),
                  class: "text_pole"
                }, [...p[47] || (p[47] = [
                  g("option", { value: "all" }, "全部来源", -1),
                  g("option", { value: "system" }, "system", -1),
                  g("option", { value: "voice_cloning" }, "voice_cloning", -1),
                  g("option", { value: "voice_generation" }, "voice_generation", -1)
                ])], 512), [
                  [ge, o.minimax.filter.source]
                ])
              ]),
              g("label", $u, [
                p[48] || (p[48] = le(" 从列表填入默认音色 ", -1)),
                g("select", {
                  class: "text_pole",
                  value: n.voiceId,
                  onChange: p[12] || (p[12] = (m) => Tt(m.target.value))
                }, [
                  g("option", ju, J(S.value.length) + " 条可选", 1),
                  (F(!0), B(q, null, xe(S.value, (m) => (F(), B("option", {
                    key: m.id,
                    value: m.id
                  }, J(Vt(Hi)(m)), 9, Uu))), 128))
                ], 40, Du)
              ])
            ], 64)) : Nt("", !0),
            g("div", ku, [
              g("label", Fu, [
                p[49] || (p[49] = le(" 模型 ", -1)),
                K(g("select", {
                  "onUpdate:modelValue": p[13] || (p[13] = (m) => n.model = m),
                  class: "text_pole"
                }, [
                  (F(!0), B(q, null, xe(Vt(er), (m) => (F(), B("option", {
                    key: m,
                    value: m
                  }, J(m), 9, Bu))), 128))
                ], 512), [
                  [ge, n.model]
                ])
              ]),
              g("label", Hu, [
                le(" 语速 " + J(n.speed.toFixed(2)) + " ", 1),
                K(g("input", {
                  "onUpdate:modelValue": p[14] || (p[14] = (m) => n.speed = m),
                  type: "range",
                  min: "0.5",
                  max: "2",
                  step: "0.05"
                }, null, 512), [
                  [
                    he,
                    n.speed,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ]),
              g("label", Ku, [
                le(" 音量 " + J(n.vol.toFixed(2)) + " ", 1),
                K(g("input", {
                  "onUpdate:modelValue": p[15] || (p[15] = (m) => n.vol = m),
                  type: "range",
                  min: "0",
                  max: "10",
                  step: "0.1"
                }, null, 512), [
                  [
                    he,
                    n.vol,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ])
          ], 64)) : (F(), B(q, { key: 1 }, [
            g("label", zu, [
              p[50] || (p[50] = le(" 服务地址 ", -1)),
              K(g("input", {
                "onUpdate:modelValue": p[16] || (p[16] = (m) => n.localGsviBaseUrl = m),
                class: "text_pole",
                type: "url",
                placeholder: "http://127.0.0.1:9880"
              }, null, 512), [
                [he, n.localGsviBaseUrl]
              ])
            ]),
            g("div", Wu, [
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: p[17] || (p[17] = (m) => Ce(!1))
              }, " 拉取模型 ", 8, Ju)
            ]),
            g("div", Xu, [
              g("label", Yu, [
                p[51] || (p[51] = le(" 默认模型 ", -1)),
                K(g("select", {
                  "onUpdate:modelValue": p[18] || (p[18] = (m) => n.localGsviModel = m),
                  class: "text_pole",
                  onChange: oe
                }, [
                  g("option", Zu, J(E.value.length > 0 ? "请选择" : "先拉取模型"), 1),
                  (F(!0), B(q, null, xe(E.value, (m) => (F(), B("option", {
                    key: m.id,
                    value: m.id
                  }, J(m.name), 9, Qu))), 128))
                ], 544), [
                  [ge, n.localGsviModel]
                ])
              ]),
              g("label", qu, [
                p[53] || (p[53] = le(" 语种 ", -1)),
                K(g("select", {
                  "onUpdate:modelValue": p[19] || (p[19] = (m) => n.localGsviLanguage = m),
                  class: "text_pole"
                }, [
                  p[52] || (p[52] = g("option", { value: "" }, "请选择", -1)),
                  (F(!0), B(q, null, xe(P.value, (m) => (F(), B("option", {
                    key: m,
                    value: m
                  }, J(m), 9, ef))), 128))
                ], 512), [
                  [ge, n.localGsviLanguage]
                ])
              ]),
              g("label", tf, [
                p[55] || (p[55] = le(" 情绪 ", -1)),
                K(g("select", {
                  "onUpdate:modelValue": p[20] || (p[20] = (m) => n.localGsviEmotion = m),
                  class: "text_pole"
                }, [
                  p[54] || (p[54] = g("option", { value: "" }, "请选择", -1)),
                  (F(!0), B(q, null, xe(N.value, (m) => (F(), B("option", {
                    key: m,
                    value: m
                  }, J(m), 9, nf))), 128))
                ], 512), [
                  [ge, n.localGsviEmotion]
                ])
              ])
            ]),
            g("label", sf, [
              le(" 语速 " + J(n.speed.toFixed(2)) + " ", 1),
              K(g("input", {
                "onUpdate:modelValue": p[21] || (p[21] = (m) => n.speed = m),
                type: "range",
                min: "0.5",
                max: "2",
                step: "0.05"
              }, null, 512), [
                [
                  he,
                  n.speed,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ], 64)),
          g("details", of, [
            g("summary", null, " 角色映射 " + J(u.value ? n.characterMappings.length : n.gsviCharacterMappings.length), 1),
            p[60] || (p[60] = g("p", { class: "tavern-multi-tts-hint" }, "只给映射名单里的角色生成语音；名单外的台词会跳过。", -1)),
            g("div", rf, [
              K(g("input", {
                "onUpdate:modelValue": p[22] || (p[22] = (m) => r.value = m),
                class: "text_pole",
                type: "text",
                placeholder: "存档名"
              }, null, 512), [
                [he, r.value]
              ]),
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: mt
              }, "保存"),
              K(g("select", {
                "onUpdate:modelValue": p[23] || (p[23] = (m) => l.value = m),
                class: "text_pole"
              }, [
                p[56] || (p[56] = g("option", { value: "" }, "读取存档", -1)),
                (F(!0), B(q, null, xe(U.value, (m) => (F(), B("option", {
                  key: m.name,
                  value: m.name
                }, J(m.name) + "（" + J(m.mappings.length) + "） ", 9, lf))), 128))
              ], 512), [
                [ge, l.value]
              ]),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: !l.value,
                onClick: Mt
              }, " 读取 ", 8, af),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: !l.value,
                onClick: At
              }, " 删除 ", 8, cf)
            ]),
            u.value ? (F(!0), B(q, { key: 0 }, xe(n.characterMappings, (m, se) => (F(), B("div", {
              key: `mm-${se}`,
              class: "tavern-multi-tts-mapping"
            }, [
              K(g("input", {
                "onUpdate:modelValue": (j) => m.characterName = j,
                class: "text_pole",
                type: "text",
                placeholder: "角色名"
              }, null, 8, uf), [
                [he, m.characterName]
              ]),
              K(g("input", {
                "onUpdate:modelValue": (j) => m.minimaxVoiceId = j,
                class: "text_pole",
                type: "text",
                placeholder: "Voice ID"
              }, null, 8, ff), [
                [he, m.minimaxVoiceId]
              ]),
              h.value.length > 0 ? (F(), B("select", {
                key: 0,
                class: "text_pole",
                value: m.minimaxVoiceId,
                onChange: (j) => m.minimaxVoiceId = j.target.value
              }, [
                p[57] || (p[57] = g("option", { value: "" }, "从列表选择", -1)),
                (F(!0), B(q, null, xe(S.value, (j) => (F(), B("option", {
                  key: j.id,
                  value: j.id
                }, J(Vt(Hi)(j)), 9, pf))), 128))
              ], 40, df)) : Nt("", !0),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: (j) => R(m.characterName)
              }, " 试听 ", 8, mf),
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: (j) => Ct(se)
              }, "删除", 8, hf)
            ]))), 128)) : (F(!0), B(q, { key: 1 }, xe(n.gsviCharacterMappings, (m, se) => (F(), B("div", {
              key: `gsvi-${se}`,
              class: "tavern-multi-tts-mapping is-gsvi"
            }, [
              K(g("input", {
                "onUpdate:modelValue": (j) => m.characterName = j,
                class: "text_pole",
                type: "text",
                placeholder: "角色名"
              }, null, 8, gf), [
                [he, m.characterName]
              ]),
              K(g("select", {
                "onUpdate:modelValue": (j) => m.gsviVoiceId = j,
                class: "text_pole"
              }, [
                g("option", _f, J(E.value.length > 0 ? "模型" : "先拉取模型"), 1),
                (F(!0), B(q, null, xe(E.value, (j) => (F(), B("option", {
                  key: j.id,
                  value: j.id
                }, J(j.name), 9, yf))), 128))
              ], 8, vf), [
                [ge, m.gsviVoiceId]
              ]),
              K(g("select", {
                "onUpdate:modelValue": (j) => m.gsviLanguage = j,
                class: "text_pole"
              }, [
                p[58] || (p[58] = g("option", { value: "" }, "语种", -1)),
                (F(!0), B(q, null, xe(ue(m.gsviVoiceId), (j) => (F(), B("option", {
                  key: j,
                  value: j
                }, J(j), 9, xf))), 128))
              ], 8, bf), [
                [ge, m.gsviLanguage]
              ]),
              K(g("select", {
                "onUpdate:modelValue": (j) => m.gsviEmotion = j,
                class: "text_pole"
              }, [
                p[59] || (p[59] = g("option", { value: "" }, "情绪", -1)),
                (F(!0), B(q, null, xe(Ne(m.gsviVoiceId, m.gsviLanguage), (j) => (F(), B("option", {
                  key: j,
                  value: j
                }, J(j), 9, Ef))), 128))
              ], 8, Sf), [
                [ge, m.gsviEmotion]
              ]),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: (j) => R(m.characterName)
              }, " 试听 ", 8, wf),
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: (j) => Ct(se)
              }, "删除", 8, Tf)
            ]))), 128)),
            g("div", { class: "tavern-multi-tts-actions" }, [
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: Xt
              }, "添加角色")
            ]),
            Z.value.length > 0 ? (F(), B("p", Cf, " 重复角色名：" + J(Z.value.join("、")) + "，最后一条完整映射生效。 ", 1)) : Nt("", !0)
          ]),
          g("div", Mf, [
            g("label", Af, [
              K(g("input", {
                "onUpdate:modelValue": p[24] || (p[24] = (m) => n.injectEnabled = m),
                type: "checkbox"
              }, null, 512), [
                [Ci, n.injectEnabled]
              ]),
              p[61] || (p[61] = g("span", null, "注入 <say> 提示", -1))
            ]),
            K(g("select", {
              "onUpdate:modelValue": p[25] || (p[25] = (m) => n.testLanguage = m),
              class: "text_pole"
            }, [...p[62] || (p[62] = [
              g("option", { value: "ja" }, "试听：日", -1),
              g("option", { value: "zh" }, "试听：中", -1),
              g("option", { value: "en" }, "试听：英", -1)
            ])], 512), [
              [ge, n.testLanguage]
            ]),
            g("button", {
              class: "menu_button",
              type: "button",
              disabled: i.value,
              onClick: p[26] || (p[26] = (m) => R())
            }, J(u.value ? "测试默认音色（消耗额度）" : "测试默认模型"), 9, If)
          ]),
          g("details", Rf, [
            p[73] || (p[73] = g("summary", null, "高级", -1)),
            g("label", Pf, [
              p[64] || (p[64] = le(" 预取 ", -1)),
              K(g("select", {
                "onUpdate:modelValue": p[27] || (p[27] = (m) => n.prefetchMode = m),
                class: "text_pole"
              }, [...p[63] || (p[63] = [
                g("option", { value: "manual" }, "只在点击时生成", -1),
                g("option", { value: "auto_all" }, "自动预取全部", -1),
                g("option", { value: "auto_first_n" }, "自动预取前 N 句", -1)
              ])], 512), [
                [ge, n.prefetchMode]
              ])
            ]),
            n.prefetchMode !== "manual" ? (F(), B("div", Nf, [
              n.prefetchMode === "auto_first_n" ? (F(), B("label", Vf, [
                p[65] || (p[65] = le(" 前 N 句 ", -1)),
                K(g("input", {
                  "onUpdate:modelValue": p[28] || (p[28] = (m) => n.prefetchFirstCount = m),
                  class: "text_pole",
                  type: "number",
                  min: "1",
                  max: "10"
                }, null, 512), [
                  [
                    he,
                    n.prefetchFirstCount,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])) : Nt("", !0),
              g("label", Gf, [
                p[66] || (p[66] = le(" 并发 ", -1)),
                K(g("input", {
                  "onUpdate:modelValue": p[29] || (p[29] = (m) => n.maxConcurrency = m),
                  class: "text_pole",
                  type: "number",
                  min: "1",
                  max: "10"
                }, null, 512), [
                  [
                    he,
                    n.maxConcurrency,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ])) : Nt("", !0),
            g("label", Lf, [
              le(" 注入深度 D" + J(n.injectDepth) + " ", 1),
              K(g("input", {
                "onUpdate:modelValue": p[30] || (p[30] = (m) => n.injectDepth = m),
                type: "range",
                min: "0",
                max: "10",
                step: "1"
              }, null, 512), [
                [
                  he,
                  n.injectDepth,
                  void 0,
                  { number: !0 }
                ]
              ])
            ]),
            g("label", Of, [
              p[68] || (p[68] = le(" 注入角色 ", -1)),
              K(g("select", {
                "onUpdate:modelValue": p[31] || (p[31] = (m) => n.injectRole = m),
                class: "text_pole"
              }, [...p[67] || (p[67] = [
                g("option", { value: "system" }, "system", -1),
                g("option", { value: "user" }, "user", -1),
                g("option", { value: "assistant" }, "assistant", -1)
              ])], 512), [
                [ge, n.injectRole]
              ])
            ]),
            g("label", $f, [
              p[69] || (p[69] = le(" 注入模板 ", -1)),
              K(g("textarea", {
                "onUpdate:modelValue": p[32] || (p[32] = (m) => n.injectTemplate = m),
                class: "text_pole",
                rows: "5"
              }, null, 512), [
                [he, n.injectTemplate]
              ])
            ]),
            u.value ? Nt("", !0) : (F(), B(q, { key: 1 }, [
              g("label", Df, [
                p[70] || (p[70] = le(" 鉴权 Token ", -1)),
                K(g("input", {
                  "onUpdate:modelValue": p[33] || (p[33] = (m) => n.localGsviAuthToken = m),
                  class: "text_pole",
                  type: "password",
                  autocomplete: "off"
                }, null, 512), [
                  [he, n.localGsviAuthToken]
                ])
              ]),
              g("div", jf, [
                g("label", Uf, [
                  p[71] || (p[71] = le(" 文本语言 ", -1)),
                  K(g("select", {
                    "onUpdate:modelValue": p[34] || (p[34] = (m) => n.localGsviTextLang = m),
                    class: "text_pole"
                  }, [
                    (F(!0), B(q, null, xe(Vt(fu), (m) => (F(), B("option", {
                      key: m,
                      value: m
                    }, J(m), 9, kf))), 128))
                  ], 512), [
                    [ge, n.localGsviTextLang]
                  ])
                ]),
                g("label", Ff, [
                  p[72] || (p[72] = le(" 切分 ", -1)),
                  K(g("select", {
                    "onUpdate:modelValue": p[35] || (p[35] = (m) => n.localGsviTextSplitMethod = m),
                    class: "text_pole"
                  }, [
                    (F(!0), B(q, null, xe(Vt(du), (m) => (F(), B("option", {
                      key: m,
                      value: m
                    }, J(m), 9, Bf))), 128))
                  ], 512), [
                    [ge, n.localGsviTextSplitMethod]
                  ])
                ])
              ]),
              g("label", Hf, [
                le(" Batch " + J(n.localGsviBatchSize) + " ", 1),
                K(g("input", {
                  "onUpdate:modelValue": p[36] || (p[36] = (m) => n.localGsviBatchSize = m),
                  type: "range",
                  min: "1",
                  max: "8",
                  step: "1"
                }, null, 512), [
                  [
                    he,
                    n.localGsviBatchSize,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ], 64)),
            g("div", Kf, [
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: G
              }, " 刷新缓存 ", 8, zf),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: W
              }, " 清空缓存 ", 8, Wf),
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: re
              }, "恢复默认")
            ]),
            g("p", Jf, " 缓存 " + J(a.value) + " 条 / " + J(L.value) + "，上限 100 条或 50MB。 ", 1)
          ])
        ])
      ])
    ]));
  }
});
let qt = null, en = null, fn = null;
function Yf() {
  return jt(vr().readRawSettings());
}
function Zf() {
  return fn ??= nu(lu(Yf)), fn;
}
function Wt() {
  return en || (en = ec(
    vr(),
    {
      mount(e, t) {
        qt?.unmount(), qt = Ea(Xf, {
          displayName: Ua,
          version: ka,
          settings: t,
          onSettingsChange(n) {
            en?.updateSettings(n);
          }
        }), qt.mount(e);
      },
      unmount() {
        qt?.unmount(), qt = null;
      }
    },
    {
      stopPlayback: In,
      clearCache: Yo,
      startRuntime: () => Zf().start(),
      stopRuntime: () => fn?.stop(),
      syncInjection: () => fn?.syncInjection(),
      refreshDecorations: () => fn?.refreshDecorations()
    }
  ), en);
}
async function Jt(e, t) {
  try {
    await t();
  } catch (n) {
    const s = n instanceof Error ? n.message : String(n);
    throw console.error(`${Ee} ${e} failed: ${s}`), n;
  }
}
async function Qf() {
  await Jt("onInstall", () => Wt().install());
}
async function qf() {
  await Jt("onActivate", () => Wt().activate());
}
async function ed() {
  await Jt("onEnable", () => Wt().activate());
}
async function td() {
  await Jt("onDisable", () => Wt().disable());
}
async function nd() {
  await Jt("onClean", () => Wt().clean());
}
async function sd() {
  await Jt("onDelete", () => Wt().delete());
}
export {
  qf as onActivate,
  nd as onClean,
  sd as onDelete,
  td as onDisable,
  ed as onEnable,
  Qf as onInstall
};
//# sourceMappingURL=index.js.map
