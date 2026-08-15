// @__NO_SIDE_EFFECTS__
function Ls(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ae = {}, Ot = [], St = () => {
}, Xi = () => !1, Hn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Kn = (e) => e.startsWith("onUpdate:"), De = Object.assign, Yi = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, yr = Object.prototype.hasOwnProperty, oe = (e, t) => yr.call(e, t), H = Array.isArray, $t = (e) => yn(e) === "[object Map]", Kt = (e) => yn(e) === "[object Set]", ti = (e) => yn(e) === "[object Date]", se = (e) => typeof e == "function", de = (e) => typeof e == "string", Ze = (e) => typeof e == "symbol", ce = (e) => e !== null && typeof e == "object", Zi = (e) => (ce(e) || se(e)) && se(e.then) && se(e.catch), Qi = Object.prototype.toString, yn = (e) => Qi.call(e), br = (e) => yn(e).slice(8, -1), qi = (e) => yn(e) === "[object Object]", Os = (e) => de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, sn = /* @__PURE__ */ Ls(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), zn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, xr = /-\w/g, Le = zn(
  (e) => e.replace(xr, (t) => t.slice(1).toUpperCase())
), Sr = /\B([A-Z])/g, At = zn(
  (e) => e.replace(Sr, "-$1").toLowerCase()
), eo = zn((e) => e.charAt(0).toUpperCase() + e.slice(1)), is = zn(
  (e) => e ? `on${eo(e)}` : ""
), Xe = (e, t) => !Object.is(e, t), Mn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, to = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Wn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ni;
const Jn = () => ni || (ni = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $s(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = de(s) ? Cr(s) : $s(s);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (de(e) || ce(e))
    return e;
}
const wr = /;(?![^(]*\))/g, Er = /:([^]+)/, Tr = /\/\*[^]*?\*\//g;
function Cr(e) {
  const t = {};
  return e.replace(Tr, "").split(wr).forEach((n) => {
    if (n) {
      const s = n.split(Er);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Xn(e) {
  let t = "";
  if (de(e))
    t = e;
  else if (H(e))
    for (let n = 0; n < e.length; n++) {
      const s = Xn(e[n]);
      s && (t += s + " ");
    }
  else if (ce(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Mr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ar = /* @__PURE__ */ Ls(Mr);
function no(e) {
  return !!e || e === "";
}
function Ir(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = zt(e[s], t[s]);
  return n;
}
function zt(e, t) {
  if (e === t) return !0;
  let n = ti(e), s = ti(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ze(e), s = Ze(t), n || s)
    return e === t;
  if (n = H(e), s = H(t), n || s)
    return n && s ? Ir(e, t) : !1;
  if (n = ce(e), s = ce(t), n || s) {
    if (!n || !s)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !zt(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ds(e, t) {
  return e.findIndex((n) => zt(n, t));
}
const so = (e) => !!(e && e.__v_isRef === !0), X = (e) => de(e) ? e : e == null ? "" : H(e) || ce(e) && (e.toString === Qi || !se(e.toString)) ? so(e) ? X(e.value) : JSON.stringify(e, io, 2) : String(e), io = (e, t) => so(t) ? io(e, t.value) : $t(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], o) => (n[os(s, o) + " =>"] = i, n),
    {}
  )
} : Kt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => os(n))
} : Ze(t) ? os(t) : ce(t) && !H(t) && !qi(t) ? String(t) : t, os = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ze(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let _e;
class Rr {
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
function Pr() {
  return _e;
}
let re;
const rs = /* @__PURE__ */ new WeakSet();
class oo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _e && (_e.active ? _e.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, rs.has(this) && (rs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || lo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, si(this), ao(this);
    const t = re, n = Oe;
    re = this, Oe = !0;
    try {
      return this.fn();
    } finally {
      co(this), re = t, Oe = n, this.flags &= -3;
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
    this.flags & 64 ? rs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let ro = 0, on, rn;
function lo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = rn, rn = e;
    return;
  }
  e.next = on, on = e;
}
function js() {
  ro++;
}
function Us() {
  if (--ro > 0)
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
function ao(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function co(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), ks(s), Nr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function xs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (uo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function uo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === dn) || (e.globalVersion = dn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = re, s = Oe;
  re = e, Oe = !0;
  try {
    ao(e);
    const i = e.fn(e._value);
    (t.version === 0 || Xe(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    re = n, Oe = s, co(e), e.flags &= -3;
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
function Nr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Oe = !0;
const fo = [];
function Ct() {
  fo.push(Oe), Oe = !1;
}
function Mt() {
  const e = fo.pop();
  Oe = e === void 0 ? !0 : e;
}
function si(e) {
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
let dn = 0;
class Vr {
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
    if (!re || !Oe || re === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== re)
      n = this.activeLink = new Vr(re, this), re.deps ? (n.prevDep = re.depsTail, re.depsTail.nextDep = n, re.depsTail = n) : re.deps = re.depsTail = n, po(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = re.depsTail, n.nextDep = void 0, re.depsTail.nextDep = n, re.depsTail = n, re.deps === n && (re.deps = s);
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
function po(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        po(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ss = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ Symbol(
  ""
), ws = /* @__PURE__ */ Symbol(
  ""
), pn = /* @__PURE__ */ Symbol(
  ""
);
function ye(e, t, n) {
  if (Oe && re) {
    let s = Ss.get(e);
    s || Ss.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Fs()), i.map = s, i.key = n), i.track();
  }
}
function ot(e, t, n, s, i, o) {
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
        (E === "length" || E === pn || !Ze(E) && E >= u) && l(h);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), f && l(r.get(pn)), t) {
        case "add":
          a ? f && l(r.get("length")) : (l(r.get(wt)), $t(e) && l(r.get(ws)));
          break;
        case "delete":
          a || (l(r.get(wt)), $t(e) && l(r.get(ws)));
          break;
        case "set":
          $t(e) && l(r.get(wt));
          break;
      }
  }
  Us();
}
function Pt(e) {
  const t = /* @__PURE__ */ q(e);
  return t === e ? t : (ye(t, "iterate", pn), /* @__PURE__ */ Ne(e) ? t : t.map($e));
}
function Yn(e) {
  return ye(e = /* @__PURE__ */ q(e), "iterate", pn), e;
}
function We(e, t) {
  return /* @__PURE__ */ at(e) ? kt(/* @__PURE__ */ Et(e) ? $e(t) : t) : $e(t);
}
const Gr = {
  __proto__: null,
  [Symbol.iterator]() {
    return ls(this, Symbol.iterator, (e) => We(this, e));
  },
  concat(...e) {
    return Pt(this).concat(
      ...e.map((t) => H(t) ? Pt(t) : t)
    );
  },
  entries() {
    return ls(this, "entries", (e) => (e[1] = We(this, e[1]), e));
  },
  every(e, t) {
    return tt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return tt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => We(this, s)),
      arguments
    );
  },
  find(e, t) {
    return tt(
      this,
      "find",
      e,
      t,
      (n) => We(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return tt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return tt(
      this,
      "findLast",
      e,
      t,
      (n) => We(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return tt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return tt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return as(this, "includes", e);
  },
  indexOf(...e) {
    return as(this, "indexOf", e);
  },
  join(e) {
    return Pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return as(this, "lastIndexOf", e);
  },
  map(e, t) {
    return tt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Qt(this, "pop");
  },
  push(...e) {
    return Qt(this, "push", e);
  },
  reduce(e, ...t) {
    return ii(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ii(this, "reduceRight", e, t);
  },
  shift() {
    return Qt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return tt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Qt(this, "splice", e);
  },
  toReversed() {
    return Pt(this).toReversed();
  },
  toSorted(e) {
    return Pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Qt(this, "unshift", e);
  },
  values() {
    return ls(this, "values", (e) => We(this, e));
  }
};
function ls(e, t, n) {
  const s = Yn(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ Ne(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const Lr = Array.prototype;
function tt(e, t, n, s, i, o) {
  const r = Yn(e), l = r !== e && !/* @__PURE__ */ Ne(e), a = r[t];
  if (a !== Lr[t]) {
    const h = a.apply(e, o);
    return l ? $e(h) : h;
  }
  let f = n;
  r !== e && (l ? f = function(h, E) {
    return n.call(this, We(e, h), E, e);
  } : n.length > 2 && (f = function(h, E) {
    return n.call(this, h, E, e);
  }));
  const u = a.call(r, f, s);
  return l && i ? i(u) : u;
}
function ii(e, t, n, s) {
  const i = Yn(e), o = i !== e && !/* @__PURE__ */ Ne(e);
  let r = n, l = !1;
  i !== e && (o ? (l = s.length === 0, r = function(f, u, h) {
    return l && (l = !1, f = We(e, f)), n.call(this, f, We(e, u), h, e);
  }) : n.length > 3 && (r = function(f, u, h) {
    return n.call(this, f, u, h, e);
  }));
  const a = i[t](r, ...s);
  return l ? We(e, a) : a;
}
function as(e, t, n) {
  const s = /* @__PURE__ */ q(e);
  ye(s, "iterate", pn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ks(n[0]) ? (n[0] = /* @__PURE__ */ q(n[0]), s[t](...n)) : i;
}
function Qt(e, t, n = []) {
  Ct(), js();
  const s = (/* @__PURE__ */ q(e))[t].apply(e, n);
  return Us(), Mt(), s;
}
const Or = /* @__PURE__ */ Ls("__proto__,__v_isRef,__isVue"), mo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ze)
);
function $r(e) {
  Ze(e) || (e = String(e));
  const t = /* @__PURE__ */ q(this);
  return ye(t, "has", e), t.hasOwnProperty(e);
}
class ho {
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
      return s === (i ? o ? Wr : yo : o ? _o : vo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = H(t);
    if (!i) {
      let a;
      if (r && (a = Gr[n]))
        return a;
      if (n === "hasOwnProperty")
        return $r;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ we(t) ? t : s
    );
    if ((Ze(n) ? mo.has(n) : Or(n)) || (i || ye(t, "get", n), o))
      return l;
    if (/* @__PURE__ */ we(l)) {
      const a = r && Os(n) ? l : l.value;
      return i && ce(a) ? /* @__PURE__ */ Ts(a) : a;
    }
    return ce(l) ? i ? /* @__PURE__ */ Ts(l) : /* @__PURE__ */ Pn(l) : l;
  }
}
class go extends ho {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let o = t[n];
    const r = H(t) && Os(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ at(o);
      if (!/* @__PURE__ */ Ne(s) && !/* @__PURE__ */ at(s) && (o = /* @__PURE__ */ q(o), s = /* @__PURE__ */ q(s)), !r && /* @__PURE__ */ we(o) && !/* @__PURE__ */ we(s))
        return f || (o.value = s), !0;
    }
    const l = r ? Number(n) < t.length : oe(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ we(t) ? t : i
    );
    return t === /* @__PURE__ */ q(i) && a && (l ? Xe(s, o) && ot(t, "set", n, s) : ot(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = oe(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && ot(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ze(n) || !mo.has(n)) && ye(t, "has", n), s;
  }
  ownKeys(t) {
    return ye(
      t,
      "iterate",
      H(t) ? "length" : wt
    ), Reflect.ownKeys(t);
  }
}
class Dr extends ho {
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
const jr = /* @__PURE__ */ new go(), Ur = /* @__PURE__ */ new Dr(), kr = /* @__PURE__ */ new go(!0);
const Es = (e) => e, Sn = (e) => Reflect.getPrototypeOf(e);
function Fr(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, o = /* @__PURE__ */ q(i), r = $t(o), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, f = i[e](...s), u = n ? Es : t ? kt : $e;
    return !t && ye(
      o,
      "iterate",
      a ? ws : wt
    ), De(
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
function wn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Br(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ q(o), l = /* @__PURE__ */ q(i);
      e || (Xe(i, l) && ye(r, "get", i), ye(r, "get", l));
      const { has: a } = Sn(r), f = t ? Es : e ? kt : $e;
      if (a.call(r, i))
        return f(o.get(i));
      if (a.call(r, l))
        return f(o.get(l));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ye(/* @__PURE__ */ q(i), "iterate", wt), i.size;
    },
    has(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ q(o), l = /* @__PURE__ */ q(i);
      return e || (Xe(i, l) && ye(r, "has", i), ye(r, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ q(l), f = t ? Es : e ? kt : $e;
      return !e && ye(a, "iterate", wt), l.forEach((u, h) => i.call(o, f(u), f(h), r));
    }
  };
  return De(
    n,
    e ? {
      add: wn("add"),
      set: wn("set"),
      delete: wn("delete"),
      clear: wn("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ q(this), r = Sn(o), l = /* @__PURE__ */ q(i), a = !t && !/* @__PURE__ */ Ne(i) && !/* @__PURE__ */ at(i) ? l : i;
        return r.has.call(o, a) || Xe(i, a) && r.has.call(o, i) || Xe(l, a) && r.has.call(o, l) || (o.add(a), ot(o, "add", a, a)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Ne(o) && !/* @__PURE__ */ at(o) && (o = /* @__PURE__ */ q(o));
        const r = /* @__PURE__ */ q(this), { has: l, get: a } = Sn(r);
        let f = l.call(r, i);
        f || (i = /* @__PURE__ */ q(i), f = l.call(r, i));
        const u = a.call(r, i);
        return r.set(i, o), f ? Xe(o, u) && ot(r, "set", i, o) : ot(r, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ q(this), { has: r, get: l } = Sn(o);
        let a = r.call(o, i);
        a || (i = /* @__PURE__ */ q(i), a = r.call(o, i)), l && l.call(o, i);
        const f = o.delete(i);
        return a && ot(o, "delete", i, void 0), f;
      },
      clear() {
        const i = /* @__PURE__ */ q(this), o = i.size !== 0, r = i.clear();
        return o && ot(
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
    n[i] = Fr(i, e, t);
  }), n;
}
function Bs(e, t) {
  const n = Br(e, t);
  return (s, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    oe(n, i) && i in s ? n : s,
    i,
    o
  );
}
const Hr = {
  get: /* @__PURE__ */ Bs(!1, !1)
}, Kr = {
  get: /* @__PURE__ */ Bs(!1, !0)
}, zr = {
  get: /* @__PURE__ */ Bs(!0, !1)
};
const vo = /* @__PURE__ */ new WeakMap(), _o = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap();
function Jr(e) {
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
function Pn(e) {
  return /* @__PURE__ */ at(e) ? e : Hs(
    e,
    !1,
    jr,
    Hr,
    vo
  );
}
// @__NO_SIDE_EFFECTS__
function Xr(e) {
  return Hs(
    e,
    !1,
    kr,
    Kr,
    _o
  );
}
// @__NO_SIDE_EFFECTS__
function Ts(e) {
  return Hs(
    e,
    !0,
    Ur,
    zr,
    yo
  );
}
function Hs(e, t, n, s, i) {
  if (!ce(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = Jr(br(e));
  if (r === 0)
    return e;
  const l = new Proxy(
    e,
    r === 2 ? s : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Et(e) {
  return /* @__PURE__ */ at(e) ? /* @__PURE__ */ Et(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function q(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ q(t) : e;
}
function Yr(e) {
  return !oe(e, "__v_skip") && Object.isExtensible(e) && to(e, "__v_skip", !0), e;
}
const $e = (e) => ce(e) ? /* @__PURE__ */ Pn(e) : e, kt = (e) => ce(e) ? /* @__PURE__ */ Ts(e) : e;
// @__NO_SIDE_EFFECTS__
function we(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  return Zr(e, !1);
}
function Zr(e, t) {
  return /* @__PURE__ */ we(e) ? e : new Qr(e, t);
}
class Qr {
  constructor(t, n) {
    this.dep = new Fs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ q(t), this._value = n ? t : $e(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ne(t) || /* @__PURE__ */ at(t);
    t = s ? t : /* @__PURE__ */ q(t), Xe(t, n) && (this._rawValue = t, this._value = s ? t : $e(t), this.dep.trigger());
  }
}
function Gt(e) {
  return /* @__PURE__ */ we(e) ? e.value : e;
}
const qr = {
  get: (e, t, n) => t === "__v_raw" ? e : Gt(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ we(i) && !/* @__PURE__ */ we(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function bo(e) {
  return /* @__PURE__ */ Et(e) ? e : new Proxy(e, qr);
}
class el {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Fs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    re !== this)
      return lo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return uo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function tl(e, t, n = !1) {
  let s, i;
  return se(e) ? s = e : (s = e.get, i = e.set), new el(s, i, n);
}
const En = {}, Nn = /* @__PURE__ */ new WeakMap();
let bt;
function nl(e, t = !1, n = bt) {
  if (n) {
    let s = Nn.get(n);
    s || Nn.set(n, s = []), s.push(e);
  }
}
function sl(e, t, n = ae) {
  const { immediate: s, deep: i, once: o, scheduler: r, augmentJob: l, call: a } = n, f = (L) => i ? L : /* @__PURE__ */ Ne(L) || i === !1 || i === 0 ? rt(L, 1) : rt(L);
  let u, h, E, S, $ = !1, I = !1;
  if (/* @__PURE__ */ we(e) ? (h = () => e.value, $ = /* @__PURE__ */ Ne(e)) : /* @__PURE__ */ Et(e) ? (h = () => f(e), $ = !0) : H(e) ? (I = !0, $ = e.some((L) => /* @__PURE__ */ Et(L) || /* @__PURE__ */ Ne(L)), h = () => e.map((L) => {
    if (/* @__PURE__ */ we(L))
      return L.value;
    if (/* @__PURE__ */ Et(L))
      return f(L);
    if (se(L))
      return a ? a(L, 2) : L();
  })) : se(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (E) {
      Ct();
      try {
        E();
      } finally {
        Mt();
      }
    }
    const L = bt;
    bt = u;
    try {
      return a ? a(e, 3, [S]) : e(S);
    } finally {
      bt = L;
    }
  } : h = St, t && i) {
    const L = h, z = i === !0 ? 1 / 0 : i;
    h = () => rt(L(), z);
  }
  const P = Pr(), N = () => {
    u.stop(), P && P.active && Yi(P.effects, u);
  };
  if (o && t) {
    const L = t;
    t = (...z) => {
      const Ce = L(...z);
      return N(), Ce;
    };
  }
  let U = I ? new Array(e.length).fill(En) : En;
  const Z = (L) => {
    if (!(!(u.flags & 1) || !u.dirty && !L))
      if (t) {
        const z = u.run();
        if (L || i || $ || (I ? z.some((Ce, pe) => Xe(Ce, U[pe])) : Xe(z, U))) {
          E && E();
          const Ce = bt;
          bt = u;
          try {
            const pe = [
              z,
              // pass undefined as the old value when it's changed for the first time
              U === En ? void 0 : I && U[0] === En ? [] : U,
              S
            ];
            U = z, a ? a(t, 3, pe) : (
              // @ts-expect-error
              t(...pe)
            );
          } finally {
            bt = Ce;
          }
        }
      } else
        u.run();
  };
  return l && l(Z), u = new oo(h), u.scheduler = r ? () => r(Z, !1) : Z, S = (L) => nl(L, !1, u), E = u.onStop = () => {
    const L = Nn.get(u);
    if (L) {
      if (a)
        a(L, 4);
      else
        for (const z of L) z();
      Nn.delete(u);
    }
  }, t ? s ? Z(!0) : U = u.run() : r ? r(Z.bind(null, !0), !0) : u.run(), N.pause = u.pause.bind(u), N.resume = u.resume.bind(u), N.stop = N, N;
}
function rt(e, t = 1 / 0, n) {
  if (t <= 0 || !ce(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ we(e))
    rt(e.value, t, n);
  else if (H(e))
    for (let s = 0; s < e.length; s++)
      rt(e[s], t, n);
  else if (Kt(e) || $t(e))
    e.forEach((s) => {
      rt(s, t, n);
    });
  else if (qi(e)) {
    for (const s in e)
      rt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && rt(e[s], t, n);
  }
  return e;
}
function bn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Zn(i, t, n);
  }
}
function ct(e, t, n, s) {
  if (se(e)) {
    const i = bn(e, t, n, s);
    return i && Zi(i) && i.catch((o) => {
      Zn(o, t, n);
    }), i;
  }
  if (H(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(ct(e[o], t, n, s));
    return i;
  }
}
function Zn(e, t, n, s = !0) {
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
      Ct(), bn(o, null, 10, [
        e,
        a,
        f
      ]), Mt();
      return;
    }
  }
  il(e, n, i, s, r);
}
function il(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const xe = [];
let ze = -1;
const Dt = [];
let pt = null, Lt = 0;
const xo = /* @__PURE__ */ Promise.resolve();
let Vn = null;
function So(e) {
  const t = Vn || xo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ol(e) {
  let t = ze + 1, n = xe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = xe[s], o = mn(i);
    o < e || o === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function zs(e) {
  if (!(e.flags & 1)) {
    const t = mn(e), n = xe[xe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= mn(n) ? xe.push(e) : xe.splice(ol(t), 0, e), e.flags |= 1, wo();
  }
}
function wo() {
  Vn || (Vn = xo.then(To));
}
function rl(e) {
  if (!H(e))
    pt && e.id === -1 ? pt.splice(Lt + 1, 0, e) : e.flags & 1 || (Dt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Dt.push(e[t]);
  wo();
}
function oi(e, t, n = ze + 1) {
  for (; n < xe.length; n++) {
    const s = xe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      xe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Eo(e) {
  if (Dt.length) {
    const t = [...new Set(Dt)].sort(
      (n, s) => mn(n) - mn(s)
    );
    if (Dt.length = 0, pt) {
      for (let n = 0; n < t.length; n++)
        pt.push(t[n]);
      return;
    }
    for (pt = t, Lt = 0; Lt < pt.length; Lt++) {
      const n = pt[Lt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    pt = null, Lt = 0;
  }
}
const mn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function To(e) {
  try {
    for (ze = 0; ze < xe.length; ze++) {
      const t = xe[ze];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), bn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ze < xe.length; ze++) {
      const t = xe[ze];
      t && (t.flags &= -2);
    }
    ze = -1, xe.length = 0, Eo(), Vn = null, (xe.length || Dt.length) && To();
  }
}
let Pe = null, Co = null;
function Gn(e) {
  const t = Pe;
  return Pe = e, Co = e && e.type.__scopeId || null, t;
}
function ll(e, t = Pe, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && di(-1);
    const o = Gn(t), r = Tt.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let a = Tt.length; a > r; a--) Fo();
      Gn(o), s._d && di(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function K(e, t) {
  if (Pe === null)
    return e;
  const n = ts(Pe), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, l, a = ae] = t[i];
    o && (se(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && rt(r), s.push({
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
function _t(e, t, n, s) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    o && (l.oldValue = o[r].value);
    let a = l.dir[s];
    a && (Ct(), ct(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Mt());
  }
}
function al(e, t, n = !1) {
  const s = zl();
  if (s || jt) {
    let i = jt ? jt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && se(t) ? t.call(s && s.proxy) : t;
  }
}
const cl = /* @__PURE__ */ Symbol.for("v-scx"), ul = () => al(cl);
function fl(e, t, n) {
  return dl(e, t, n);
}
function dl(e, t, n = ae) {
  const { immediate: s, deep: i, flush: o, once: r } = n, l = De({}, n), a = t && s || !t && o !== "post";
  let f;
  if (Dn) {
    if (o === "sync") {
      const S = ul();
      f = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!a) {
      const S = () => {
      };
      return S.stop = St, S.resume = St, S.pause = St, S;
    }
  }
  const u = Bt;
  l.call = (S, $, I) => ct(S, u, $, I);
  let h = !1;
  o === "post" ? l.scheduler = (S) => {
    Ee(S, u && u.suspense);
  } : o !== "sync" && (h = !0, l.scheduler = (S, $) => {
    $ ? S() : zs(S);
  }), l.augmentJob = (S) => {
    t && (S.flags |= 4), h && (S.flags |= 2, u && (S.id = u.uid, S.i = u));
  };
  const E = sl(e, t, l);
  return Dn && (f ? f.push(E) : a && E()), E;
}
const pl = /* @__PURE__ */ Symbol("_vte"), Qn = (e) => e.__isTeleport, cs = /* @__PURE__ */ Symbol("_leaveCb");
function ml(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ut) {
        t = n;
        break;
      }
  }
  return t;
}
function Mo(e) {
  if (!Ao(e))
    return Qn(e.type) && e.children ? ml(e.children) : e;
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
function Ws(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Ws(
      Qn(n.type) && Mo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function hl(e, t) {
  return se(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    De({ name: e.name }, t, { setup: e })
  ) : e;
}
function gl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ri(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ln = /* @__PURE__ */ new WeakMap();
function ln(e, t, n, s, i = !1) {
  if (H(e)) {
    e.forEach(
      (I, P) => ln(
        I,
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
  const o = s.shapeFlag & 4 ? ts(s.component) : s.el, r = i ? null : o, { i: l, r: a } = e, f = t && t.r, u = l.refs === ae ? l.refs = {} : l.refs, h = l.setupState, E = /* @__PURE__ */ q(h), S = h === ae ? Xi : (I) => ri(u, I) ? !1 : oe(E, I), $ = (I, P) => !(P && ri(u, P));
  if (f != null && f !== a) {
    if (li(t), de(f))
      u[f] = null, S(f) && (h[f] = null);
    else if (/* @__PURE__ */ we(f)) {
      const I = t;
      $(f, I.k) && (f.value = null), I.k && (u[I.k] = null);
    }
  }
  if (se(a))
    bn(a, l, 12, [r, u]);
  else {
    const I = de(a), P = /* @__PURE__ */ we(a);
    if (I || P) {
      const N = () => {
        if (e.f) {
          const U = I ? S(a) ? h[a] : u[a] : $() || !e.k ? a.value : u[e.k];
          if (i)
            H(U) && Yi(U, o);
          else if (H(U))
            U.includes(o) || U.push(o);
          else if (I)
            u[a] = [o], S(a) && (h[a] = u[a]);
          else {
            const Z = [o];
            $(a, e.k) && (a.value = Z), e.k && (u[e.k] = Z);
          }
        } else I ? (u[a] = r, S(a) && (h[a] = r)) : P && ($(a, e.k) && (a.value = r), e.k && (u[e.k] = r));
      };
      if (r) {
        const U = () => {
          N(), Ln.delete(e);
        };
        U.id = -1, Ln.set(e, U), Ee(U, n);
      } else
        li(e), N();
    }
  }
}
function li(e) {
  const t = Ln.get(e);
  t && (t.flags |= 8, Ln.delete(e));
}
Jn().requestIdleCallback;
Jn().cancelIdleCallback;
const an = (e) => !!e.type.__asyncLoader, Ao = (e) => e.type.__isKeepAlive, vl = /* @__PURE__ */ Symbol.for("v-ndc");
function be(e, t, n, s) {
  let i;
  const o = n, r = H(e);
  if (r || de(e)) {
    const l = r && /* @__PURE__ */ Et(e);
    let a = !1, f = !1;
    l && (a = !/* @__PURE__ */ Ne(e), f = /* @__PURE__ */ at(e), e = Yn(e)), i = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      i[u] = t(
        a ? f ? kt($e(e[u])) : $e(e[u]) : e[u],
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
const Cs = (e) => e ? Wo(e) ? ts(e) : Cs(e.parent) : null, cn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ De(/* @__PURE__ */ Object.create(null), {
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
    $nextTick: (e) => e.n || (e.n = So.bind(e.proxy)),
    $watch: (e) => St
  })
), us = (e, t) => e !== ae && !e.__isScriptSetup && oe(e, t), _l = {
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
        if (us(s, t))
          return r[t] = 1, s[t];
        if (oe(o, t))
          return r[t] = 3, o[t];
        if (n !== ae && oe(n, t))
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
    return us(i, t) ? (i[t] = n, !0) : oe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: o, type: r }
  }, l) {
    let a;
    return !!(n[l] || us(t, l) || oe(o, l) || oe(s, l) || oe(cn, l) || oe(i.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : oe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Io() {
  return {
    app: null,
    config: {
      isNativeTag: Xi,
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
let yl = 0;
function bl(e, t) {
  return function(s, i = null) {
    se(s) || (s = De({}, s)), i != null && !ce(i) && (i = null);
    const o = Io(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = o.app = {
      _uid: yl++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Ql,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return r.has(u) || (u && se(u.install) ? (r.add(u), u.install(f, ...h)) : se(u) && (r.add(u), u(f, ...h))), f;
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
          const S = f._ceVNode || lt(s, i);
          return S.appContext = o, E === !0 ? E = "svg" : E === !1 && (E = void 0), e(S, u, E), a = !0, f._container = u, u.__vue_app__ = f, ts(S.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (ct(
          l,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(u, h) {
        return o.provides[u] = h, f;
      },
      runWithContext(u) {
        const h = jt;
        jt = f;
        try {
          return u();
        } finally {
          jt = h;
        }
      }
    };
    return f;
  };
}
let jt = null;
const xl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Le(t)}Modifiers`] || e[`${At(t)}Modifiers`];
function Sl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ae;
  let i = n;
  const o = t.startsWith("update:"), r = o && xl(s, t.slice(7));
  r && (r.trim && (i = n.map((u) => de(u) ? u.trim() : u)), r.number && (i = n.map(Wn)));
  let l, a = s[l = is(t)] || // also try camelCase event handler (#2249)
  s[l = is(Le(t))];
  !a && o && (a = s[l = is(At(t))]), a && ct(
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
    e.emitted[l] = !0, ct(
      f,
      e,
      6,
      i
    );
  }
}
function wl(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {};
  return o ? (H(o) ? o.forEach((l) => r[l] = null) : De(r, o), ce(e) && s.set(e, r), r) : (ce(e) && s.set(e, null), null);
}
function qn(e, t) {
  return !e || !Hn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), oe(e, t[0].toLowerCase() + t.slice(1)) || oe(e, At(t)) || oe(e, t));
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
    inheritAttrs: I
  } = e, P = Gn(e);
  let N, U;
  try {
    if (n.shapeFlag & 4) {
      const L = i || s, z = L;
      N = Je(
        f.call(
          z,
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
      N = Je(
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
    Tt.length = 0, Zn(L, e, 1), N = lt(ut);
  }
  let Z = N;
  if (U && I !== !1) {
    const L = Object.keys(U), { shapeFlag: z } = Z;
    L.length && z & 7 && (o && L.some(Kn) && (U = Tl(
      U,
      o
    )), Z = Ft(Z, U, !1, !0));
  }
  if (n.dirs && (Z = Ft(Z, null, !1, !0), Z.dirs = Z.dirs ? Z.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const L = Qn(Z.type) && Mo(Z) || Z;
    Ws(L, n.transition);
  }
  return N = Z, Gn(P), N;
}
const El = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Hn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Tl = (e, t) => {
  const n = {};
  for (const s in e)
    (!Kn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Cl(e, t, n) {
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
        if (Ro(r, s, E) && !qn(f, E))
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
    if (Ro(t, e, o) && !qn(n, o))
      return !0;
  }
  return !1;
}
function Ro(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && ce(s) && ce(i) ? !zt(s, i) : s !== i;
}
function Ml({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Po = {}, No = () => Object.create(Po), Vo = (e) => Object.getPrototypeOf(e) === Po;
function Al(e, t, n, s = !1) {
  const i = {}, o = No();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Go(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Xr(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Il(e, t, n, s) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ q(i), [a] = e.propsOptions;
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
        if (qn(e.emitsOptions, E))
          continue;
        const S = t[E];
        if (a)
          if (oe(o, E))
            S !== o[E] && (o[E] = S, f = !0);
          else {
            const $ = Le(E);
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
    Go(e, t, i, o) && (f = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !oe(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = At(h)) === h || !oe(t, u))) && (a ? n && // for camelCase
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
        (!t || !oe(t, h)) && (delete o[h], f = !0);
  }
  f && ot(e.attrs, "set", "");
}
function Go(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (sn(a))
        continue;
      const f = t[a];
      let u;
      i && oe(i, u = Le(a)) ? !o || !o.includes(u) ? n[u] = f : (l || (l = {}))[u] = f : qn(e.emitsOptions, a) || (!(a in s) || f !== s[a]) && (s[a] = f, r = !0);
    }
  if (o) {
    const a = /* @__PURE__ */ q(n), f = l || ae;
    for (let u = 0; u < o.length; u++) {
      const h = o[u];
      n[h] = Ms(
        i,
        a,
        h,
        f[h],
        e,
        !oe(f, h)
      );
    }
  }
  return r;
}
function Ms(e, t, n, s, i, o) {
  const r = e[n];
  if (r != null) {
    const l = oe(r, "default");
    if (l && s === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && se(a)) {
        const { propsDefaults: f } = i;
        if (n in f)
          s = f[n];
        else {
          const u = zo(i);
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
    ] && (s === "" || s === At(n)) && (s = !0));
  }
  return s;
}
function Rl(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, l = [];
  if (!o)
    return ce(e) && s.set(e, Ot), Ot;
  if (H(o))
    for (let f = 0; f < o.length; f++) {
      const u = Le(o[f]);
      ui(u) && (r[u] = ae);
    }
  else if (o)
    for (const f in o) {
      const u = Le(f);
      if (ui(u)) {
        const h = o[f], E = r[u] = H(h) || se(h) ? { type: h } : De({}, h), S = E.type;
        let $ = !1, I = !0;
        if (H(S))
          for (let P = 0; P < S.length; ++P) {
            const N = S[P], U = se(N) && N.name;
            if (U === "Boolean") {
              $ = !0;
              break;
            } else U === "String" && (I = !1);
          }
        else
          $ = se(S) && S.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = $, E[
          1
          /* shouldCastTrue */
        ] = I, ($ || oe(E, "default")) && l.push(u);
      }
    }
  const a = [r, l];
  return ce(e) && s.set(e, a), a;
}
function ui(e) {
  return e[0] !== "$" && !sn(e);
}
const Js = (e) => e === "_" || e === "_ctx" || e === "$stable", Xs = (e) => H(e) ? e.map(Je) : [Je(e)], Pl = (e, t, n) => {
  if (t._n)
    return t;
  const s = ll((...i) => Xs(t(...i)), n);
  return s._c = !1, s;
}, Lo = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Js(i)) continue;
    const o = e[i];
    if (se(o))
      t[i] = Pl(i, o, s);
    else if (o != null) {
      const r = Xs(o);
      t[i] = () => r;
    }
  }
}, Oo = (e, t) => {
  const n = Xs(t);
  e.slots.default = () => n;
}, $o = (e, t, n) => {
  for (const s in t)
    (n || !Js(s)) && (e[s] = t[s]);
}, Nl = (e, t, n) => {
  const s = e.slots = No();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? ($o(s, t, n), n && to(s, "_", i, !0)) : Lo(t, s);
  } else t && Oo(e, t);
}, Vl = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let o = !0, r = ae;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : $o(i, t, n) : (o = !t.$stable, Lo(t, i)), r = t;
  } else t && (Oo(e, t), r = { default: 1 });
  if (o)
    for (const l in i)
      !Js(l) && r[l] == null && delete i[l];
}, Ee = Dl;
function Gl(e) {
  return Ll(e);
}
function Ll(e, t) {
  const n = Jn();
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
    setScopeId: S = St,
    insertStaticContent: $
  } = e, I = (c, d, v, x = null, b = null, _ = null, M = void 0, C = null, T = !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !qt(c, d) && (x = Q(c), W(c, b, _, !0), c = null), d.patchFlag === -2 && (T = !1, d.dynamicChildren = null);
    const { type: y, ref: O, shapeFlag: R } = d;
    switch (y) {
      case es:
        P(c, d, v, x);
        break;
      case ut:
        N(c, d, v, x);
        break;
      case ds:
        c == null && U(d, v, x, M);
        break;
      case ne:
        je(
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
        R & 1 ? z(
          c,
          d,
          v,
          x,
          b,
          _,
          M,
          C,
          T
        ) : R & 6 ? It(
          c,
          d,
          v,
          x,
          b,
          _,
          M,
          C,
          T
        ) : (R & 64 || R & 128) && y.process(
          c,
          d,
          v,
          x,
          b,
          _,
          M,
          C,
          T,
          Ve
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
  }, z = (c, d, v, x, b, _, M, C, T) => {
    if (d.type === "svg" ? M = "svg" : d.type === "math" && (M = "mathml"), c == null)
      Ce(
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
        y && y._beginPatch(), ft(
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
  }, Ce = (c, d, v, x, b, _, M, C) => {
    let T, y;
    const { props: O, shapeFlag: R, transition: G, dirs: j } = c;
    if (T = c.el = r(
      c.type,
      _,
      O && O.is,
      O
    ), R & 8 ? u(T, c.children) : R & 16 && Ie(
      c.children,
      T,
      null,
      x,
      b,
      fs(c, _),
      M,
      C
    ), j && _t(c, null, x, "created"), pe(T, c, c.scopeId, M, x), O) {
      for (const ie in O)
        ie !== "value" && !sn(ie) && o(T, ie, null, O[ie], _, x);
      "value" in O && o(T, "value", null, O.value, _), (y = O.onVnodeBeforeMount) && He(y, x, c);
    }
    j && _t(c, null, x, "beforeMount");
    const J = Ol(b, G);
    J && G.beforeEnter(T), s(T, d, v), ((y = O && O.onVnodeMounted) || J || j) && Ee(() => {
      y && He(y, x, c), J && G.enter(T), j && _t(c, null, x, "mounted");
    }, b);
  }, pe = (c, d, v, x, b) => {
    if (v && S(c, v), x)
      for (let _ = 0; _ < x.length; _++)
        S(c, x[_]);
    if (b) {
      let _ = b.subTree;
      if (d === _ || ko(_.type) && (_.ssContent === d || _.ssFallback === d)) {
        const M = b.vnode;
        pe(
          c,
          M,
          M.scopeId,
          M.slotScopeIds,
          b.parent
        );
      }
    }
  }, Ie = (c, d, v, x, b, _, M, C, T = 0) => {
    for (let y = T; y < c.length; y++) {
      const O = c[y] = C ? it(c[y]) : Je(c[y]);
      I(
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
  }, ft = (c, d, v, x, b, _, M) => {
    const C = d.el = c.el;
    let { patchFlag: T, dynamicChildren: y, dirs: O } = d;
    T |= c.patchFlag & 16;
    const R = c.props || ae, G = d.props || ae;
    let j;
    if (v && yt(v, !1), (j = G.onVnodeBeforeUpdate) && He(j, v, d, c), O && _t(d, c, v, "beforeUpdate"), v && yt(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!c.dynamicChildren || c.dynamicChildren.length !== y.length) && (T = 0, M = !1, y = null), (R.innerHTML && G.innerHTML == null || R.textContent && G.textContent == null) && u(C, ""), y ? Qe(
      c.dynamicChildren,
      y,
      C,
      v,
      x,
      fs(d, b),
      _
    ) : M || dt(
      c,
      d,
      C,
      null,
      v,
      x,
      fs(d, b),
      _,
      !1
    ), T > 0) {
      if (T & 16)
        qe(C, R, G, v, b);
      else if (T & 2 && R.class !== G.class && o(C, "class", null, G.class, b), T & 4 && o(C, "style", R.style, G.style, b), T & 8) {
        const J = d.dynamicProps;
        for (let ie = 0; ie < J.length; ie++) {
          const te = J[ie], fe = R[te], ve = G[te];
          (ve !== fe || te === "value") && o(C, te, fe, ve, b, v);
        }
      }
      T & 1 && c.children !== d.children && u(C, d.children);
    } else !M && y == null && qe(C, R, G, v, b);
    ((j = G.onVnodeUpdated) || O) && Ee(() => {
      j && He(j, v, d, c), O && _t(d, c, v, "updated");
    }, x);
  }, Qe = (c, d, v, x, b, _, M) => {
    for (let C = 0; C < d.length; C++) {
      const T = c[C], y = d[C], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === ne || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !qt(T, y) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 198) ? h(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      I(
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
  }, qe = (c, d, v, x, b) => {
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
  }, je = (c, d, v, x, b, _, M, C, T) => {
    const y = d.el = c ? c.el : l(""), O = d.anchor = c ? c.anchor : l("");
    let { patchFlag: R, dynamicChildren: G, slotScopeIds: j } = d;
    j && (C = C ? C.concat(j) : j), c == null ? (s(y, v, x), s(O, v, x), Ie(
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
    )) : R > 0 && R & 64 && G && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === G.length ? (Qe(
      c.dynamicChildren,
      G,
      v,
      b,
      _,
      M,
      C
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || b && d === b.subTree) && Do(
      c,
      d,
      !0
      /* shallow */
    )) : dt(
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
  }, It = (c, d, v, x, b, _, M, C, T) => {
    d.slotScopeIds = C, c == null ? d.shapeFlag & 512 ? b.ctx.activate(
      d,
      v,
      x,
      M,
      T
    ) : Rt(
      d,
      v,
      x,
      b,
      _,
      M,
      T
    ) : Yt(c, d, T);
  }, Rt = (c, d, v, x, b, _, M) => {
    const C = c.component = Kl(
      c,
      x,
      b
    );
    if (Ao(c) && (C.ctx.renderer = Ve), Wl(C, !1, M), C.asyncDep) {
      if (b && b.registerDep(C, vt, M), !c.el) {
        const T = C.subTree = lt(ut);
        N(null, T, d, v), c.placeholder = T.el;
      }
    } else
      vt(
        C,
        c,
        d,
        v,
        b,
        _,
        M
      );
  }, Yt = (c, d, v) => {
    const x = d.component = c.component;
    if (Cl(c, d, v))
      if (x.asyncDep && !x.asyncResolved) {
        Ue(x, d, v);
        return;
      } else
        x.next = d, x.update();
    else
      d.el = c.el, x.vnode = d;
  }, vt = (c, d, v, x, b, _, M) => {
    const C = () => {
      if (c.isMounted) {
        let { next: R, bu: G, u: j, parent: J, vnode: ie } = c;
        {
          const Fe = jo(c);
          if (Fe) {
            R && (R.el = ie.el, Ue(c, R, M)), Fe.asyncDep.then(() => {
              Ee(() => {
                c.isUnmounted || y();
              }, b);
            });
            return;
          }
        }
        let te = R, fe;
        yt(c, !1), R ? (R.el = ie.el, Ue(c, R, M)) : R = ie, G && Mn(G), (fe = R.props && R.props.onVnodeBeforeUpdate) && He(fe, J, R, ie), yt(c, !0);
        const ve = ai(c), ke = c.subTree;
        c.subTree = ve, I(
          ke,
          ve,
          // parent may have changed if it's in a teleport
          h(ke.el),
          // anchor may have changed if it's in a fragment
          Q(ke),
          c,
          b,
          _
        ), R.el = ve.el, te === null && Ml(c, ve.el), j && Ee(j, b), (fe = R.props && R.props.onVnodeUpdated) && Ee(
          () => He(fe, J, R, ie),
          b
        );
      } else {
        let R;
        const { el: G, props: j } = d, { bm: J, m: ie, parent: te, root: fe, type: ve } = c, ke = an(d);
        yt(c, !1), J && Mn(J), !ke && (R = j && j.onVnodeBeforeMount) && He(R, te, d), yt(c, !0);
        {
          fe.ce && fe.ce._hasShadowRoot() && fe.ce._injectChildStyle(
            ve,
            c.parent ? c.parent.type : void 0
          );
          const Fe = c.subTree = ai(c);
          I(
            null,
            Fe,
            v,
            x,
            c,
            b,
            _
          ), d.el = Fe.el;
        }
        if (ie && Ee(ie, b), !ke && (R = j && j.onVnodeMounted)) {
          const Fe = d;
          Ee(
            () => He(R, te, Fe),
            b
          );
        }
        (d.shapeFlag & 256 || te && an(te.vnode) && te.vnode.shapeFlag & 256) && c.a && Ee(c.a, b), c.isMounted = !0, d = v = x = null;
      }
    };
    c.scope.on();
    const T = c.effect = new oo(C);
    c.scope.off();
    const y = c.update = T.run.bind(T), O = c.job = T.runIfDirty.bind(T);
    O.i = c, O.id = c.uid, T.scheduler = () => zs(O), yt(c, !0), y();
  }, Ue = (c, d, v) => {
    d.component = c;
    const x = c.vnode.props;
    c.vnode = d, c.next = null, Il(c, d.props, x, v), Vl(c, d.children, v), Ct(), oi(c), Mt();
  }, dt = (c, d, v, x, b, _, M, C, T = !1) => {
    const y = c && c.children, O = c ? c.shapeFlag : 0, R = d.children, { patchFlag: G, shapeFlag: j } = d;
    if (G > 0) {
      if (G & 128) {
        V(
          y,
          R,
          v,
          x,
          b,
          _,
          M,
          C,
          T
        );
        return;
      } else if (G & 256) {
        A(
          y,
          R,
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
    j & 8 ? (O & 16 && m(y, b, _), R !== y && u(v, R)) : O & 16 ? j & 16 ? V(
      y,
      R,
      v,
      x,
      b,
      _,
      M,
      C,
      T
    ) : m(y, b, _, !0) : (O & 8 && u(v, ""), j & 16 && Ie(
      R,
      v,
      x,
      b,
      _,
      M,
      C,
      T
    ));
  }, A = (c, d, v, x, b, _, M, C, T) => {
    c = c || Ot, d = d || Ot;
    const y = c.length, O = d.length, R = Math.min(y, O);
    let G;
    for (G = 0; G < R; G++) {
      const j = d[G] = T ? it(d[G]) : Je(d[G]);
      I(
        c[G],
        j,
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
      R
    ) : Ie(
      d,
      v,
      x,
      b,
      _,
      M,
      C,
      T,
      R
    );
  }, V = (c, d, v, x, b, _, M, C, T) => {
    let y = 0;
    const O = d.length;
    let R = c.length - 1, G = O - 1;
    for (; y <= R && y <= G; ) {
      const j = c[y], J = d[y] = T ? it(d[y]) : Je(d[y]);
      if (qt(j, J))
        I(
          j,
          J,
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
    for (; y <= R && y <= G; ) {
      const j = c[R], J = d[G] = T ? it(d[G]) : Je(d[G]);
      if (qt(j, J))
        I(
          j,
          J,
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
      R--, G--;
    }
    if (y > R) {
      if (y <= G) {
        const j = G + 1, J = j < O ? d[j].el : x;
        for (; y <= G; )
          I(
            null,
            d[y] = T ? it(d[y]) : Je(d[y]),
            v,
            J,
            b,
            _,
            M,
            C,
            T
          ), y++;
      }
    } else if (y > G)
      for (; y <= R; )
        W(c[y], b, _, !0), y++;
    else {
      const j = y, J = y, ie = /* @__PURE__ */ new Map();
      for (y = J; y <= G; y++) {
        const Me = d[y] = T ? it(d[y]) : Je(d[y]);
        Me.key != null && ie.set(Me.key, y);
      }
      let te, fe = 0;
      const ve = G - J + 1;
      let ke = !1, Fe = 0;
      const Zt = new Array(ve);
      for (y = 0; y < ve; y++) Zt[y] = 0;
      for (y = j; y <= R; y++) {
        const Me = c[y];
        if (fe >= ve) {
          W(Me, b, _, !0);
          continue;
        }
        let Be;
        if (Me.key != null)
          Be = ie.get(Me.key);
        else
          for (te = J; te <= G; te++)
            if (Zt[te - J] === 0 && qt(Me, d[te])) {
              Be = te;
              break;
            }
        Be === void 0 ? W(Me, b, _, !0) : (Zt[Be - J] = y + 1, Be >= Fe ? Fe = Be : ke = !0, I(
          Me,
          d[Be],
          v,
          null,
          b,
          _,
          M,
          C,
          T
        ), fe++);
      }
      const Qs = ke ? $l(Zt) : Ot;
      for (te = Qs.length - 1, y = ve - 1; y >= 0; y--) {
        const Me = J + y, Be = d[Me], qs = d[Me + 1], ei = Me + 1 < O ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          qs.el || Uo(qs)
        ) : x;
        Zt[y] === 0 ? I(
          null,
          Be,
          v,
          ei,
          b,
          _,
          M,
          C,
          T
        ) : ke && (te < 0 || y !== Qs[te] ? k(Be, v, ei, 2) : te--);
      }
    }
  }, k = (c, d, v, x, b = null) => {
    const { el: _, type: M, transition: C, children: T, shapeFlag: y } = c;
    if (y & 6) {
      k(c.component.subTree, d, v, x);
      return;
    }
    if (y & 128) {
      c.suspense.move(d, v, x);
      return;
    }
    if (y & 64) {
      M.move(c, d, v, Ve);
      return;
    }
    if (M === ne) {
      s(_, d, v);
      for (let R = 0; R < T.length; R++)
        k(T[R], d, v, x);
      s(c.anchor, d, v);
      return;
    }
    if (M === ds) {
      Z(c, d, v);
      return;
    }
    if (x !== 2 && y & 1 && C)
      if (x === 0)
        C.persisted && !_[cs] ? s(_, d, v) : (C.beforeEnter(_), s(_, d, v), Ee(() => C.enter(_), b));
      else {
        const { leave: R, delayLeave: G, afterLeave: j } = C, J = () => {
          c.ctx.isUnmounted ? i(_) : s(_, d, v);
        }, ie = () => {
          const te = _._isLeaving || !!_[cs];
          _._isLeaving && _[cs](
            !0
            /* cancelled */
          ), C.persisted && !te ? J() : R(_, () => {
            J(), j && j();
          });
        };
        G ? G(_, J, ie) : ie();
      }
    else
      s(_, d, v);
  }, W = (c, d, v, x = !1, b = !1) => {
    const {
      type: _,
      props: M,
      ref: C,
      children: T,
      dynamicChildren: y,
      shapeFlag: O,
      patchFlag: R,
      dirs: G,
      cacheIndex: j,
      memo: J
    } = c;
    if (R === -2 && (b = !1), C != null && (Ct(), ln(C, null, v, c, !0), Mt()), j != null && (d.renderCache[j] = void 0), O & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const ie = O & 1 && G, te = !an(c);
    let fe;
    if (te && (fe = M && M.onVnodeBeforeUnmount) && He(fe, d, c), O & 6)
      p(c.component, v, x);
    else {
      if (O & 128) {
        c.suspense.unmount(v, x);
        return;
      }
      ie && _t(c, null, d, "beforeUnmount"), O & 64 ? c.type.remove(
        c,
        d,
        v,
        Ve,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== ne || R > 0 && R & 64) ? m(
        y,
        d,
        v,
        !1,
        !0
      ) : (_ === ne && R & 384 || !b && O & 16) && m(T, d, v), x && ee(c);
    }
    const ve = J != null && j == null;
    (te && (fe = M && M.onVnodeUnmounted) || ie || ve) && Ee(() => {
      fe && He(fe, d, c), ie && _t(c, null, d, "unmounted"), ve && (c.el = null);
    }, v);
  }, ee = (c) => {
    const { type: d, el: v, anchor: x, transition: b } = c;
    if (d === ne) {
      w(v, x);
      return;
    }
    if (d === ds) {
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
    fi(T), fi(y), x && Mn(x), b.stop(), _ && (_.flags |= 8, W(M, c, d, v)), C && Ee(C, d), Ee(() => {
      c.isUnmounted = !0;
    }, d);
  }, m = (c, d, v, x = !1, b = !1, _ = 0) => {
    for (let M = _; M < c.length; M++)
      W(c[M], d, v, x, b);
  }, Q = (c) => {
    if (c.shapeFlag & 6)
      return Q(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = E(c.anchor || c.el), v = d && d[pl];
    return v ? E(v) : d;
  };
  let D = !1;
  const et = (c, d, v) => {
    let x;
    c == null ? d._vnode && (W(d._vnode, null, null, !0), x = d._vnode.component) : I(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      v
    ), d._vnode = c, D || (D = !0, oi(x), Eo(), D = !1);
  }, Ve = {
    p: I,
    um: W,
    m: k,
    r: ee,
    mt: Rt,
    mc: Ie,
    pc: dt,
    pbc: Qe,
    n: Q,
    o: e
  };
  return {
    render: et,
    hydrate: void 0,
    createApp: bl(et)
  };
}
function fs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function yt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ol(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Do(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (H(s) && H(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = it(i[o]), l.el = r.el), !n && l.patchFlag !== -2 && Do(r, l)), l.type === es && (l.patchFlag === -1 && (l = i[o] = it(l)), l.el = r.el), l.type === ut && !l.el && (l.el = r.el);
    }
}
function $l(e) {
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
function jo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : jo(t);
}
function fi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Uo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Uo(t.subTree) : null;
}
const ko = (e) => e.__isSuspense;
function Dl(e, t) {
  t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : rl(e);
}
const ne = /* @__PURE__ */ Symbol.for("v-fgt"), es = /* @__PURE__ */ Symbol.for("v-txt"), ut = /* @__PURE__ */ Symbol.for("v-cmt"), ds = /* @__PURE__ */ Symbol.for("v-stc"), Tt = [];
let Ae = null;
function F(e = !1) {
  Tt.push(Ae = e ? null : []);
}
function Fo() {
  Tt.pop(), Ae = Tt[Tt.length - 1] || null;
}
let hn = 1;
function di(e, t = !1) {
  hn += e, e < 0 && Ae && t && (Ae.hasOnce = !0);
}
function Bo(e) {
  return e.dynamicChildren = hn > 0 ? Ae || Ot : null, Fo(), hn > 0 && Ae && Ae.push(e), e;
}
function B(e, t, n, s, i, o) {
  return Bo(
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
function jl(e, t, n, s, i) {
  return Bo(
    lt(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function Ho(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function qt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ko = ({ key: e }) => e ?? null, An = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? de(e) || /* @__PURE__ */ we(e) || se(e) ? { i: Pe, r: e, k: t, f: !!n } : e : null);
function g(e, t = null, n = null, s = 0, i = null, o = e === ne ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ko(t),
    ref: t && An(t),
    scopeId: Co,
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
    ctx: Pe
  };
  return l ? (On(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= de(n) ? 8 : 16), hn > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Ae && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ae.push(a), a;
}
const lt = Ul;
function Ul(e, t = null, n = null, s = 0, i = null, o = !1) {
  if ((!e || e === vl) && (e = ut), Ho(e)) {
    const l = Ft(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && On(l, n), hn > 0 && !o && Ae && (l.shapeFlag & 6 ? Ae[Ae.indexOf(e)] = l : Ae.push(l)), l.patchFlag = -2, l;
  }
  if (Zl(e) && (e = e.__vccOpts), t) {
    t = kl(t);
    let { class: l, style: a } = t;
    l && !de(l) && (t.class = Xn(l)), ce(a) && (/* @__PURE__ */ Ks(a) && !H(a) && (a = De({}, a)), t.style = $s(a));
  }
  const r = de(e) ? 1 : ko(e) ? 128 : Qn(e) ? 64 : ce(e) ? 4 : se(e) ? 2 : 0;
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
function kl(e) {
  return e ? /* @__PURE__ */ Ks(e) || Vo(e) ? De({}, e) : e : null;
}
function Ft(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: r, children: l, transition: a } = e, f = t ? Fl(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Ko(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? H(o) ? o.concat(An(t)) : [o, An(t)] : An(t)
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
    patchFlag: t && e.type !== ne ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Ft(e.ssContent),
    ssFallback: e.ssFallback && Ft(e.ssFallback),
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
  return lt(es, null, e, t);
}
function Vt(e = "", t = !1) {
  return t ? (F(), jl(ut, null, e)) : lt(ut, null, e);
}
function Je(e) {
  return e == null || typeof e == "boolean" ? lt(ut) : H(e) ? lt(
    ne,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ho(e) ? it(e) : lt(es, null, String(e));
}
function it(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ft(e);
}
function On(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (H(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), On(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Vo(t) ? t._ctx = Pe : i === 3 && Pe && (Pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (se(t)) {
    if (s & 65) {
      On(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Pe }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [le(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Fl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Xn([t.class, s.class]));
      else if (i === "style")
        t.style = $s([t.style, s.style]);
      else if (Hn(i)) {
        const o = t[i], r = s[i];
        r && o !== r && !(H(o) && o.includes(r)) ? t[i] = o ? [].concat(o, r) : r : r == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Kn(i) && (t[i] = r);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function He(e, t, n, s = null) {
  ct(e, t, 7, [
    n,
    s
  ]);
}
const Bl = Io();
let Hl = 0;
function Kl(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || Bl, o = {
    uid: Hl++,
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
    scope: new Rr(
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
    propsOptions: Rl(s, i),
    emitsOptions: wl(s, i),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Sl.bind(null, o), e.ce && e.ce(o), o;
}
let Bt = null;
const zl = () => Bt || Pe;
let $n, gn;
{
  const e = Jn(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  $n = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Bt = n
  ), gn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Dn = n
  );
}
const zo = (e) => {
  const t = Bt;
  return $n(e), e.scope.on(), () => {
    e.scope.off(), $n(t);
  };
}, pi = () => {
  Bt && Bt.scope.off(), $n(null);
};
function Wo(e) {
  return e.vnode.shapeFlag & 4;
}
let Dn = !1;
function Wl(e, t = !1, n = !1) {
  t && gn(t);
  const { props: s, children: i } = e.vnode, o = Wo(e);
  Al(e, s, o, t), Nl(e, i, n || t);
  const r = o ? Jl(e, t) : void 0;
  return t && gn(!1), r;
}
function Jl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, _l);
  const { setup: s } = n;
  if (s) {
    Ct();
    const i = e.setupContext = s.length > 1 ? Yl(e) : null, o = zo(e), r = bn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Zi(r);
    if (Mt(), o(), (l || e.sp) && !an(e) && gl(e), l) {
      if (r.then(pi, pi), t)
        return r.then((a) => {
          gn(!0);
          try {
            mi(e, a, t);
          } finally {
            gn(!1);
          }
        }).catch((a) => {
          Zn(a, e, 0);
        });
      e.asyncDep = r;
    } else
      mi(e, r);
  } else
    Jo(e);
}
function mi(e, t, n) {
  se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ce(t) && (e.setupState = bo(t)), Jo(e);
}
function Jo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || St);
}
const Xl = {
  get(e, t) {
    return ye(e, "get", ""), e[t];
  }
};
function Yl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Xl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ts(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bo(Yr(e.exposed)), {
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
function Zl(e) {
  return se(e) && "__vccOpts" in e;
}
const Ge = (e, t) => /* @__PURE__ */ tl(e, t, Dn), Ql = "3.5.41";
let As;
const hi = typeof window < "u" && window.trustedTypes;
if (hi)
  try {
    As = /* @__PURE__ */ hi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Xo = As ? (e) => As.createHTML(e) : (e) => e, ql = "http://www.w3.org/2000/svg", ea = "http://www.w3.org/1998/Math/MathML", st = typeof document < "u" ? document : null, gi = st && /* @__PURE__ */ st.createElement("template"), ta = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? st.createElementNS(ql, e) : t === "mathml" ? st.createElementNS(ea, e) : n ? st.createElement(e, { is: n }) : st.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => st.createTextNode(e),
  createComment: (e) => st.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => st.querySelector(e),
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
      gi.innerHTML = Xo(
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
}, na = /* @__PURE__ */ Symbol("_vtc");
function sa(e, t, n) {
  const s = e[na];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const vi = /* @__PURE__ */ Symbol("_vod"), ia = /* @__PURE__ */ Symbol("_vsh"), oa = /* @__PURE__ */ Symbol(""), ra = /(?:^|;)\s*display\s*:/;
function la(e, t, n) {
  const s = e.style, i = de(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (de(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && nn(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && nn(s, r, "");
    for (const r in n) {
      r === "display" && (o = !0);
      const l = n[r];
      l != null ? ca(
        e,
        r,
        !de(t) && t ? t[r] : void 0,
        l
      ) || nn(s, r, l) : nn(s, r, "");
    }
  } else if (i) {
    if (t !== n) {
      const r = s[oa];
      r && (n += ";" + r), s.cssText = n, o = ra.test(n);
    }
  } else t && e.removeAttribute("style");
  vi in e && (e[vi] = o ? s.display : "", e[ia] && (s.display = "none"));
}
const _i = /\s*!important$/;
function nn(e, t, n) {
  if (H(n))
    n.forEach((s) => nn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = aa(e, t);
    _i.test(n) ? e.setProperty(
      At(s),
      n.replace(_i, ""),
      "important"
    ) : e[s] = n;
  }
}
const yi = ["Webkit", "Moz", "ms"], ps = {};
function aa(e, t) {
  const n = ps[t];
  if (n)
    return n;
  let s = Le(t);
  if (s !== "filter" && s in e)
    return ps[t] = s;
  s = eo(s);
  for (let i = 0; i < yi.length; i++) {
    const o = yi[i] + s;
    if (o in e)
      return ps[t] = o;
  }
  return t;
}
function ca(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && de(s) && n === s;
}
const bi = "http://www.w3.org/1999/xlink";
function xi(e, t, n, s, i, o = Ar(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(bi, t.slice(6, t.length)) : e.setAttributeNS(bi, t, n) : n == null || o && !no(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Ze(n) ? String(n) : n
  );
}
function Si(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Xo(n) : n);
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
    l === "boolean" ? n = no(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(i || t);
}
function ht(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ua(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const wi = /* @__PURE__ */ Symbol("_vei");
function fa(e, t, n, s, i = null) {
  const o = e[wi] || (e[wi] = {}), r = o[t];
  if (s && r)
    r.value = s;
  else {
    const [l, a] = ma(t);
    if (s) {
      const f = o[t] = va(
        s,
        i
      );
      ht(e, l, f, a);
    } else r && (ua(e, l, r, a), o[t] = void 0);
  }
}
const da = /(Once|Passive|Capture)$/, pa = /^on:?(?:Once|Passive|Capture)$/;
function ma(e) {
  let t, n;
  for (; (n = e.match(da)) && !pa.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : At(e.slice(2)), t];
}
let ms = 0;
const ha = /* @__PURE__ */ Promise.resolve(), ga = () => ms || (ha.then(() => ms = 0), ms = Date.now());
function va(e, t) {
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
        f && ct(
          f,
          t,
          5,
          l
        );
      }
    } else
      ct(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = ga(), n;
}
const Ei = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _a = (e, t, n, s, i, o) => {
  const r = i === "svg";
  t === "class" ? sa(e, s, r) : t === "style" ? la(e, n, s) : Hn(t) ? Kn(t) || fa(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ya(e, t, s, r)) ? (Si(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && xi(e, t, s, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ba(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !de(s))) ? Si(e, Le(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), xi(e, t, s, r));
};
function ya(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ei(t) && se(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ei(t) && de(n) ? !1 : t in e;
}
function ba(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Le(t);
  return Array.isArray(n) ? n.some((i) => Le(i) === s) : Object.keys(n).some((i) => Le(i) === s);
}
const Ht = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return H(t) ? (n) => Mn(t, n) : t;
};
function xa(e) {
  e.target.composing = !0;
}
function Ti(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ye = /* @__PURE__ */ Symbol("_assign"), Tn = /* @__PURE__ */ Symbol("_initialValue");
function hs(e, t, n) {
  return t && (e = e.trim()), n && (e = Wn(e)), e;
}
const he = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[Tn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Tn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Ye] = Ht(i);
    const o = s || i.props && i.props.type === "number";
    ht(e, t ? "change" : "input", (r) => {
      r.target.composing || e[Ye](hs(e.value, n, o));
    }), (n || o) && ht(e, "change", () => {
      e.value = hs(e.value, n, o);
    }), t || (ht(e, "compositionstart", xa), ht(e, "compositionend", Ti), ht(e, "change", Ti));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", o = e[Tn];
    delete e[Tn], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[Ye](hs(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: o } }, r) {
    if (e[Ye] = Ht(r), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Wn(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const f = e.getRootNode();
    (f instanceof Document || f instanceof ShadowRoot) && f.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === a) || (e.value = a);
  }
}, Ci = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Ye] = Ht(n), ht(e, "change", () => {
      const s = e._modelValue, i = vn(e), o = e.checked, r = e[Ye];
      if (H(s)) {
        const l = Ds(s, i), a = l !== -1;
        if (o && !a)
          r(s.concat(i));
        else if (!o && a) {
          const f = [...s];
          f.splice(l, 1), r(f);
        }
      } else if (Kt(s)) {
        const l = new Set(s);
        o ? l.add(i) : l.delete(i), r(l);
      } else
        r(Yo(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Mi,
  beforeUpdate(e, t, n) {
    e[Ye] = Ht(n), Mi(e, t, n);
  }
};
function Mi(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let i;
  if (H(t))
    i = Ds(t, s.props.value) > -1;
  else if (Kt(t))
    i = t.has(s.props.value);
  else {
    if (t === n) return;
    i = zt(t, Yo(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const ge = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, ht(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? Wn(vn(o)) : vn(o)
      );
      e[Ye](
        e.multiple ? Kt(e._modelValue) ? new Set(i) : i : i[0]
      ), e._assigning = !0, So(() => {
        e._assigning = !1;
      });
    }), e[Ye] = Ht(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ai(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Ye] = Ht(n);
  },
  updated(e, { value: t }) {
    e._assigning || Ai(e, t);
  }
};
function Ai(e, t) {
  const n = e.multiple, s = H(t);
  if (!(n && !s && !Kt(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const r = e.options[i], l = vn(r);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? r.selected = t.some((f) => String(f) === String(l)) : r.selected = Ds(t, l) > -1;
        } else
          r.selected = t.has(l);
      else if (zt(vn(r), t)) {
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
function Yo(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Sa = /* @__PURE__ */ De({ patchProp: _a }, ta);
let Ii;
function wa() {
  return Ii || (Ii = Gl(Sa));
}
const Ea = ((...e) => {
  const t = wa().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Ca(s);
    if (!i) return;
    const o = t._component;
    !se(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, Ta(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
});
function Ta(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ca(e) {
  return de(e) ? document.querySelector(e) : e;
}
const Ma = "tavern_multi_tts_cache", Re = "audio_cache", Aa = 1, Ri = 100, Pi = 50 * 1024 * 1024;
function Ia(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
async function Ra(e) {
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
function Pa() {
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
function Na(e, t) {
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
      const f = e.open(t, Aa);
      i += 1, f.onupgradeneeded = () => {
        const u = f.result;
        u.objectStoreNames.contains(Re) || u.createObjectStore(Re, { keyPath: "key" });
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
function Va(e, t) {
  const n = Na(e, t);
  async function s() {
    return await n.getDb();
  }
  return {
    async get(i) {
      const o = await s();
      return await new Promise((r, l) => {
        const f = o.transaction(Re, "readonly").objectStore(Re).get(i);
        f.onsuccess = () => r(f.result), f.onerror = () => l(f.error ?? Error("读取缓存失败"));
      });
    },
    async put(i) {
      const o = await s();
      await new Promise((r, l) => {
        const a = o.transaction(Re, "readwrite");
        a.objectStore(Re).put(i), a.oncomplete = () => r(), a.onerror = () => l(a.error ?? Error("写入缓存失败"));
      });
    },
    async delete(i) {
      const o = await s();
      await new Promise((r, l) => {
        const a = o.transaction(Re, "readwrite");
        a.objectStore(Re).delete(i), a.oncomplete = () => r(), a.onerror = () => l(a.error ?? Error("删除缓存失败"));
      });
    },
    async clear() {
      const i = await s();
      await new Promise((o, r) => {
        const l = i.transaction(Re, "readwrite");
        l.objectStore(Re).clear(), l.oncomplete = () => o(), l.onerror = () => r(l.error ?? Error("清空缓存失败"));
      });
    },
    async getAll() {
      const i = await s();
      return await new Promise((o, r) => {
        const a = i.transaction(Re, "readonly").objectStore(Re).openCursor(), f = [];
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
async function Ga(e) {
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
function La(e) {
  const t = e?.backend === "memory" ? Pa() : Va(
    e?.indexedDB ?? indexedDB,
    e?.dbName ?? Ma
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
      }), await Ga(t);
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
const ns = La({
  backend: typeof indexedDB > "u" ? "memory" : "indexeddb"
});
function Oa(e) {
  return ns.get(e);
}
function $a(e, t) {
  return ns.set(e, t);
}
function Zo() {
  return ns.clear();
}
function Da() {
  return ns.stats();
}
let mt = null, In = null;
function Rn() {
  mt && (mt.pause(), In?.());
}
function Qo(e, t, n, s, i) {
  const o = URL.createObjectURL(e), r = new Audio(o);
  let l = "paused";
  const a = () => {
    URL.revokeObjectURL(o), mt === r && (mt = null, In = null);
  }, f = () => {
    mt && mt !== r && (mt.pause(), In?.()), mt = r, In = a;
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
function qo(e) {
  return [...e].map((n) => n.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(n) ? "_" : n).join("").trim() || "audio.mp3";
}
function ja(e, t, n = "mp3") {
  return qo(`tavern_multi_tts_${e}_${t}.${n}`);
}
function Ua(e, t) {
  const n = qo(t), s = URL.createObjectURL(e), i = URL.revokeObjectURL.bind(URL), o = document.createElement("a");
  o.href = s, o.download = n, document.body.appendChild(o), o.click(), o.remove(), window.setTimeout(() => i(s), 0);
}
const ka = "Tavern Multi-TTS", gs = "tavern_multi_tts", Fa = "0.1.0", vs = "tavern-multi-tts-root", Se = "[Tavern Multi-TTS]", er = 2, tr = [
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
`), Wt = {
  schemaVersion: er,
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
function ue(e, t) {
  return typeof e == "string" ? e : t;
}
function _s(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Ke(e, t, n, s, i = !1) {
  const o = typeof e == "number" ? e : Number(e);
  if (!Number.isFinite(o))
    return s;
  const r = i ? Math.round(o) : o;
  return Math.min(n, Math.max(t, r));
}
function Ba(e) {
  return e === "local_gsvi" ? "local_gsvi" : "minimax";
}
function Ha(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Ka(e) {
  return tr.includes(String(e)) ? e : Wt.model;
}
function za(e) {
  return e === "manual" || e === "auto_first_n" || e === "auto_all" ? e : Wt.prefetchMode;
}
function Wa(e) {
  return e === "user" || e === "assistant" || e === "system" ? e : Wt.injectRole;
}
function Ja(e) {
  return e === "zh" || e === "en" || e === "ja" ? e : Wt.testLanguage;
}
function Xa(e) {
  return e === "wav" ? "wav" : "mp3";
}
function nr(e) {
  return Array.isArray(e) ? e.filter(xn).map((t) => ({
    characterName: ue(t.characterName, "").trim(),
    minimaxVoiceId: ue(t.minimaxVoiceId, "").trim()
  })).filter((t) => t.characterName || t.minimaxVoiceId) : [];
}
function Ya(e) {
  return Array.isArray(e) ? e.filter(xn).map((t) => ({
    name: ue(t.name, "").trim(),
    mappings: nr(t.mappings)
  })).filter((t) => t.name) : [];
}
function sr(e) {
  return Array.isArray(e) ? e.filter(xn).map((t) => ({
    characterName: ue(t.characterName, "").trim(),
    gsviVoiceId: ue(t.gsviVoiceId, "").trim(),
    gsviLanguage: ue(t.gsviLanguage, "").trim(),
    gsviEmotion: ue(t.gsviEmotion, "").trim()
  })).filter((t) => t.characterName || t.gsviVoiceId) : [];
}
function Za(e) {
  return Array.isArray(e) ? e.filter(xn).map((t) => ({
    name: ue(t.name, "").trim(),
    mappings: sr(t.mappings)
  })).filter((t) => t.name) : [];
}
function Ut(e) {
  const t = xn(e) ? e : {};
  return {
    schemaVersion: er,
    enabled: _s(t.enabled, Wt.enabled),
    ttsEngine: Ba(t.ttsEngine),
    apiKey: ue(t.apiKey, ""),
    groupId: ue(t.groupId, ""),
    voiceId: ue(t.voiceId, ""),
    voiceCatalogSelectedId: ue(t.voiceCatalogSelectedId, ""),
    minimaxRegion: Ha(t.minimaxRegion),
    testLanguage: Ja(t.testLanguage),
    model: Ka(t.model),
    speed: Ke(t.speed, 0.5, 2, 1),
    vol: Ke(t.vol, 0, 10, 1),
    requestTimeoutMs: Ke(t.requestTimeoutMs, 1e3, 3e4, 15e3, !0),
    maxConcurrency: Ke(t.maxConcurrency, 1, 10, 3, !0),
    prefetchMode: za(t.prefetchMode),
    prefetchFirstCount: Ke(t.prefetchFirstCount, 1, 10, 2, !0),
    localGsviBaseUrl: ue(t.localGsviBaseUrl, ""),
    localGsviAuthToken: ue(t.localGsviAuthToken, ""),
    localGsviModel: ue(t.localGsviModel, ""),
    localGsviFormat: Xa(t.localGsviFormat),
    localGsviUseReferenceAudio: _s(t.localGsviUseReferenceAudio, !1),
    localGsviCharacter: ue(t.localGsviCharacter, ""),
    localGsviLanguage: ue(t.localGsviLanguage, "ja"),
    localGsviEmotion: ue(t.localGsviEmotion, ""),
    localGsviReferenceText: ue(t.localGsviReferenceText, ""),
    localGsviTopK: Ke(t.localGsviTopK, 1, 200, 20, !0),
    localGsviTopP: Ke(t.localGsviTopP, 0, 1, 0.7),
    localGsviTemperature: Ke(t.localGsviTemperature, 0, 2, 0.7),
    localGsviTextLang: ue(t.localGsviTextLang, "多语种混合"),
    localGsviTextSplitMethod: ue(t.localGsviTextSplitMethod, "按标点符号切"),
    localGsviBatchSize: Ke(t.localGsviBatchSize, 1, 8, 1, !0),
    characterMappings: nr(t.characterMappings),
    characterMappingPresets: Ya(t.characterMappingPresets),
    gsviCharacterMappings: sr(t.gsviCharacterMappings),
    gsviCharacterMappingPresets: Za(t.gsviCharacterMappingPresets),
    injectEnabled: _s(t.injectEnabled, !0),
    injectDepth: Ke(t.injectDepth, 0, 50, 1, !0),
    injectRole: Wa(t.injectRole),
    injectTemplate: ue(t.injectTemplate, Is) || Is
  };
}
function jn(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function Qa(e, t) {
  return e.enabled !== t.enabled || e.injectEnabled !== t.injectEnabled || e.injectDepth !== t.injectDepth || e.injectRole !== t.injectRole || e.injectTemplate !== t.injectTemplate || e.ttsEngine !== t.ttsEngine || !jn(e.characterMappings, t.characterMappings) || !jn(e.gsviCharacterMappings, t.gsviCharacterMappings);
}
function qa(e, t) {
  return e.enabled !== t.enabled || e.ttsEngine !== t.ttsEngine || !jn(e.characterMappings, t.characterMappings) || !jn(e.gsviCharacterMappings, t.gsviCharacterMappings);
}
function ec(e, t) {
  return {
    syncInjection: Qa(e, t),
    refreshDecorations: qa(e, t)
  };
}
function tc(e, t, n = {}) {
  let s = !1, i = !1, o = null, r = null, l = null;
  function a() {
    return Ut(e.readRawSettings());
  }
  function f() {
    const I = a();
    return e.writeSettings(I), I;
  }
  function u() {
    if (s)
      return !0;
    const I = document.getElementById(vs);
    I && I.remove();
    const P = e.findSettingsRoot();
    return P ? (l = document.createElement("div"), l.id = vs, l.dataset.tavernMultiTts = "settings", P.appendChild(l), t.mount(l, a()), r = e.onPageHide(() => {
      h({ removeSettings: !1 });
    }), s = !0, n.startRuntime?.(), console.info(`${Se} settings panel mounted`), !0) : !1;
  }
  function h(I) {
    n.stopRuntime?.(), n.stopPlayback?.(), o?.(), o = null, i = !1, r?.(), r = null, t.unmount(), (l ?? document.getElementById(vs))?.remove(), l = null, s = !1, I.removeSettings && e.removeSettings();
  }
  function E() {
    s || i || (f(), !u() && (i = !0, o = e.onAppReady(() => {
      const I = i;
      i = !1;
      const P = o;
      o = null, P?.(), I && (u() || console.error(
        `${Se} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`
      ));
    })));
  }
  function S(I) {
    const P = a();
    P.enabled = I, e.writeSettings(P), n.syncInjection?.(), n.refreshDecorations?.();
  }
  function $(I) {
    const P = a();
    P.injectEnabled = I, e.writeSettings(P), n.syncInjection?.();
  }
  return {
    activate: E,
    disable() {
      h({ removeSettings: !1 }), console.info(`${Se} disabled`);
    },
    destroy() {
      h({ removeSettings: !1 });
    },
    install() {
      f();
    },
    clean() {
      return h({ removeSettings: !0 }), console.info(`${Se} settings cleaned`), n.clearCache?.();
    },
    delete() {
      return h({ removeSettings: !0 }), console.info(`${Se} deleted`), n.clearCache?.();
    },
    updateSettings(I) {
      const P = a();
      e.writeSettings(Ut(I));
      const N = ec(P, a());
      N.syncInjection && n.syncInjection?.(), N.refreshDecorations && n.refreshDecorations?.();
    },
    setEnabled: S,
    setInjectEnabled: $,
    isActive() {
      return s;
    }
  };
}
function nc() {
  return document.querySelector("#extensions_settings2") ?? document.querySelector("#extensions_settings");
}
class Y extends Error {
  code;
  status;
  constructor(t, n, s) {
    super(t), this.name = "TtsRequestError", this.code = n, this.status = s;
  }
}
function ir(e) {
  return e instanceof Y;
}
function sc(e) {
  return new Y(`请求超时（${e}ms），请检查网络或增大超时时间`, "timeout");
}
function ic() {
  return new Y("请求已取消", "cancelled");
}
async function un(e, t, n, s) {
  const i = new AbortController();
  let o = !1, r = !1, l = null;
  const a = () => {
    r || (r = !0, clearTimeout(u), h?.removeEventListener("abort", E));
  }, f = () => o && !h?.aborted ? sc(s) : ic(), u = setTimeout(() => {
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
  }), I = async (P) => {
    try {
      return await Promise.race([P, $()]);
    } catch (N) {
      throw N instanceof Y ? N : i.signal.aborted ? f() : N;
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
      text: () => I(P.text()),
      async json() {
        const N = await I(P.text());
        try {
          return JSON.parse(N);
        } catch {
          throw new Y(
            "服务返回的不是合法 JSON，请检查地址或稍后重试",
            "invalid_json"
          );
        }
      },
      blob: () => I(P.blob()),
      close: a
    };
  } catch (P) {
    throw a(), i.signal.removeEventListener("abort", S), P instanceof Y ? P : i.signal.aborted ? f() : P;
  }
}
function Rs(e, t) {
  return `${e.replace(/\/+$/, "")}${t.startsWith("/") ? "" : "/"}${t}`;
}
function oc(e) {
  const t = e.trim();
  try {
    return new URL(t.includes("://") ? t : `http://${t}`).origin;
  } catch {
    return t.replace(/\/+$/, "");
  }
}
function rc(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
const lc = /api[_-]?key|authorization|token|secret|cookie|password/i;
function Un(e) {
  if (typeof e == "string")
    return e.length > 80 ? `${e.slice(0, 80)}…(len=${e.length})` : e;
  if (Array.isArray(e))
    return e.map((n) => Un(n));
  if (!e || typeof e != "object")
    return e;
  const t = {};
  for (const [n, s] of Object.entries(e)) {
    if (lc.test(n)) {
      t[n] = "[redacted]";
      continue;
    }
    if (n === "text" || n === "input" || n === "referenceText" || n === "reference_text") {
      t[n] = typeof s == "string" ? `[text len=${s.length}]` : "[text]";
      continue;
    }
    t[n] = Un(s);
  }
  return t;
}
function or(e, t, n) {
  if (n === void 0) {
    console.info(`${Se} [${e}] ${t}`);
    return;
  }
  console.info(`${Se} [${e}] ${t}`, Un(n));
}
function Ps(e, t, n) {
  if (n === void 0) {
    console.warn(`${Se} [${e}] ${t}`);
    return;
  }
  console.warn(`${Se} [${e}] ${t}`, Un(n));
}
const ac = ["v2", "v3", "v4", "v2Pro"];
function rr(e) {
  const t = e.trim();
  if (!t)
    return { modelName: "", version: "" };
  const n = t.lastIndexOf("|");
  return n < 0 ? { modelName: t, version: "" } : {
    modelName: t.slice(0, n).trim(),
    version: t.slice(n + 1).trim()
  };
}
function cc(e) {
  const t = e.trim().toLowerCase();
  return t === "v2pro" ? "v2Pro" : t === "v2" || t === "v3" || t === "v4" ? t : e.trim();
}
function uc(e) {
  const t = e.trim();
  return t ? {
    英文: "英语",
    日文: "日语",
    韩文: "韩语"
  }[t] ?? t : "多语种混合";
}
function fc(e) {
  const t = rr(e.modelId), n = t.modelName.trim(), s = cc(t.version) || "v2Pro";
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
        text_lang: uc(e.textLang),
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
function dc(e) {
  if (!e.baseUrl.trim())
    throw new Y("请先填写 Local-GSVI 服务地址", "config");
  if (!e.modelId.trim())
    throw new Y("请先填写或选择 Local-GSVI 模型（modelName|version）", "config");
  if (!e.language.trim() || !e.emotion.trim())
    throw new Y(
      "GSVI 生成要求映射完整：语种(prompt_lang)/情绪(emotion)不能为空",
      "config"
    );
  if (!rr(e.modelId).modelName)
    throw new Y("Local-GSVI 模型格式错误，期望 modelName|version", "config");
  if (!e.text.trim())
    throw new Y("Local-GSVI 合成文本为空", "config");
}
function Te(e) {
  return typeof e == "object" && e !== null;
}
function pc(e) {
  const t = e.replace(/^data:audio\/[a-zA-Z0-9.+-]+;base64,/i, "").trim();
  return t.length >= 16 && /^[A-Za-z0-9+/=\r\n]+$/.test(t);
}
function lr(e) {
  return e.trim().match(/^data:audio\/[a-zA-Z0-9.+-]+;base64,(.+)$/i)?.[1] ?? e.trim();
}
function mc(e) {
  if (!Te(e))
    return null;
  const t = e, n = Te(t.data) ? t.data : void 0, s = Te(t.output) ? t.output : void 0, i = [
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
    if (typeof o == "string" && pc(o))
      return lr(o);
  return null;
}
function hc(e) {
  if (!Te(e))
    return null;
  const t = e, n = Te(t.data) ? t.data : void 0, s = Te(t.output) ? t.output : void 0, i = [
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
function gc(e) {
  if (!Te(e))
    return "";
  const t = Te(e.error) ? e.error : void 0, n = Te(e.base_resp) ? e.base_resp : void 0, s = Te(e.data) ? e.data : void 0, i = [
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
function vc(e) {
  const t = atob(lr(e)), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function ys(e) {
  const t = e?.trim() ?? "";
  return t ? { Authorization: `Bearer ${t}` } : {};
}
function _c(e) {
  const t = fetch;
  async function n(s, i, o, r, l) {
    const a = /^https?:\/\//i.test(i) ? i : Rs(s, i);
    let f = !1;
    try {
      f = oc(s) === new URL(a).origin;
    } catch {
      f = !1;
    }
    const u = await un(
      t,
      a,
      {
        method: "GET",
        headers: f ? ys(o) : {},
        signal: l
      },
      r
    );
    if (!u.ok)
      throw new Y(`下载 GSVI 输出失败：HTTP ${u.status}`, "http", u.status);
    return await u.blob();
  }
  return {
    id: "local_gsvi",
    async checkHealth(s) {
      if (s.engine !== "local_gsvi")
        throw new Y("Local-GSVI 适配器收到了错误的引擎请求", "config");
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
        throw new Y("Local-GSVI 适配器收到了错误的引擎请求", "config");
      const i = s.baseUrl.trim();
      if (!i)
        throw new Y("请先填写 Local-GSVI 服务地址", "config");
      const o = [];
      for (const r of ac) {
        const l = Rs(i, `/models/${encodeURIComponent(r)}`);
        try {
          const a = await un(
            t,
            l,
            { method: "GET", headers: ys(s.authToken), signal: s.signal },
            s.timeoutMs
          );
          if (!a.ok) {
            Ps("local_gsvi", `GET /models/${r} failed`, {
              status: a.status
            }), a.close();
            continue;
          }
          const f = await a.json(), u = Te(f) && Te(f.models) ? f.models : f;
          if (!Te(u))
            continue;
          Object.entries(u).forEach(([h, E]) => {
            if (!h || !Te(E))
              return;
            const S = Object.keys(E).filter(Boolean).sort((I, P) => I.localeCompare(P)), $ = {};
            S.forEach((I) => {
              const P = E[I];
              $[I] = Array.isArray(P) ? P.map((N) => String(N).trim()).filter(Boolean) : typeof P == "string" ? [P.trim()].filter(Boolean) : [];
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
          if (a instanceof Y && a.code === "cancelled")
            throw a;
          Ps("local_gsvi", `GET /models/${r} failed`);
        }
      }
      if (o.length === 0)
        throw new Y(
          "未在 /models/{v2|v3|v4|v2Pro} 中解析到模型映射，请检查接口返回结构",
          "missing_audio"
        );
      return o.sort((r, l) => r.name.localeCompare(l.name));
    },
    async synthesize(s) {
      if (s.engine !== "local_gsvi")
        throw new Y("Local-GSVI 适配器收到了错误的引擎请求", "config");
      dc(s);
      const i = fc(s), o = {
        "Content-Type": "application/json",
        ...ys(s.authToken)
      };
      or("local_gsvi", "synthesize", {
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
        throw new Y(
          `Local-GSVI 请求失败：HTTP ${r.status}`,
          "http",
          r.status
        );
      if ((r.headers.get("content-type")?.toLowerCase() ?? "").includes("application/json")) {
        const a = await r.json(), f = mc(a);
        if (f)
          return new Blob([Uint8Array.from(vc(f))], {
            type: s.format === "wav" ? "audio/wav" : "audio/mpeg"
          });
        const u = hc(a);
        if (u)
          return await n(
            s.baseUrl.trim(),
            u,
            s.authToken ?? "",
            s.timeoutMs,
            s.signal
          );
        throw new Y(
          `Local-GSVI 未返回可用音频：${gc(a) || "JSON 响应中未找到音频"}`,
          "missing_audio"
        );
      }
      return await r.blob();
    }
  };
}
const yc = {
  international: {
    tts: "https://api.minimaxi.com/v1/t2a_v2",
    voice: "https://api.minimaxi.com/v1/get_voice"
  },
  beijing: {
    tts: "https://api-bj.minimaxi.com/v1/t2a_v2",
    voice: "https://api-bj.minimaxi.com/v1/get_voice"
  }
}, bc = /* @__PURE__ */ new Set([408, 409, 429, 500, 502, 503, 504]), xc = /* @__PURE__ */ new Set([1e3, 1001, 1002, 1039]), Ni = 2, Sc = "tavern_multi_tts_voice_catalog_v1", wc = 1440 * 60 * 1e3;
function kn(e) {
  return e.replace(/^Bearer\s+/i, "").trim();
}
function Ns(e) {
  return e === "beijing" ? "beijing" : "international";
}
function Vi(e) {
  return yc[Ns(e)];
}
function ar(e, t) {
  return `${Sc}:${e}:${t.trim()}`;
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
  return `Bearer ${kn(e)}`;
}
function Tc(e) {
  const t = e.trim(), n = new Uint8Array(t.length / 2);
  for (let s = 0; s < t.length; s += 2)
    n[s / 2] = Number.parseInt(t.slice(s, s + 2), 16);
  return n;
}
function Cc(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s += 1)
    n[s] = t.charCodeAt(s);
  return n;
}
function Mc(e) {
  const t = e.trim();
  return /^[0-9a-fA-F]+$/.test(t) && t.length % 2 === 0 ? Tc(t) : Cc(t);
}
function Ac(e, t) {
  const s = `${t ?? ""} ${e}`.toLowerCase(), i = s.includes("japanese") ? "Japanese" : s.includes("english") ? "English" : s.includes("chinese") ? "Chinese" : s.includes("korean") ? "Korean" : s.includes("french") ? "French" : s.includes("german") ? "German" : s.includes("spanish") ? "Spanish" : "Unknown", o = s.includes("female") || s.includes("女") || s.includes("lady") || s.includes("girl") ? "Female" : s.includes("male") || s.includes("男") || s.includes("man") || s.includes("boy") ? "Male" : "Unknown";
  return { language: i, gender: o };
}
function Ic(e, t) {
  const n = t.trim();
  if (!n)
    return null;
  try {
    const s = localStorage.getItem(ar(e, n));
    if (!s)
      return null;
    const i = JSON.parse(s);
    return !i?.expires_at || Date.now() > i.expires_at ? null : i.items ?? null;
  } catch {
    return null;
  }
}
function Rc(e, t, n) {
  const s = t.trim();
  s && localStorage.setItem(
    ar(e, s),
    JSON.stringify({
      expires_at: Date.now() + wc,
      items: n
    })
  );
}
function Pc(e) {
  const t = kn(e.apiKey), n = e.groupId.trim(), s = e.voiceId.trim();
  if (!t || !n || !s)
    throw new Y("MiniMax 引擎缺少必要配置：API Key / Group ID / Voice ID", "config");
  if (!e.text.trim())
    throw new Y("MiniMax 合成文本为空", "config");
}
function Nc(e) {
  return typeof e == "object" && e !== null;
}
function Vc(e, t) {
  return bc.has(e) || xc.has(t);
}
function Gc(e) {
  const t = fetch;
  return {
    id: "minimax",
    async checkHealth(n) {
      if (n.engine !== "minimax")
        throw new Y("MiniMax 适配器收到了错误的引擎请求", "config");
      if (!kn(n.apiKey))
        return { ok: !1, message: "请先填写 MiniMax API Key" };
      try {
        return await this.listVoices({ ...n, forceRefresh: !0 }), { ok: !0, message: "MiniMax 服务可用" };
      } catch (i) {
        return { ok: !1, message: i instanceof Error ? i.message : String(i) };
      }
    },
    async listVoices(n) {
      if (n.engine !== "minimax")
        throw new Y("MiniMax 适配器收到了错误的引擎请求", "config");
      const s = kn(n.apiKey);
      if (!s)
        throw new Y("请先填写 API Key", "config");
      const i = Ns(n.region);
      if (!n.forceRefresh) {
        const h = Ic(i, n.groupId);
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
        throw new Y(
          a.base_resp?.status_msg ?? r.statusText ?? "拉取音色列表失败",
          "http",
          r.status
        );
      const f = [], u = (h, E = []) => {
        E.forEach((S) => {
          const $ = Ac(S.voice_id, S.voice_name);
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
      return u("system", a.system_voice ?? []), u("voice_cloning", a.voice_cloning ?? []), u("voice_generation", a.voice_generation ?? []), Rc(i, n.groupId, f), f;
    },
    async synthesize(n) {
      if (n.engine !== "minimax")
        throw new Y("MiniMax 适配器收到了错误的引擎请求", "config");
      Pc(n);
      const s = Ec(n), i = Vi(n.region).tts, o = {
        Authorization: Gi(n.apiKey),
        "Content-Type": "application/json"
      };
      or("minimax", "synthesize", {
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
        if (!Nc(f))
          throw new Y("MiniMax 响应结构无效", "invalid_json");
        const u = f;
        if (!a.ok || (u.base_resp?.status_code ?? 0) !== 0) {
          const S = u.base_resp?.status_code ?? a.status, $ = u.base_resp?.status_msg ?? a.statusText ?? "unknown error";
          if (r = `MiniMax 请求失败：code=${S}, msg=${$}`, Vc(a.status, S) && l < Ni) {
            Ps("minimax", "retryable synthesize failure", {
              status: a.status,
              attempt: l
            }), await rc(250 * (l + 1));
            continue;
          }
          throw new Y(r, "http", a.status);
        }
        const h = u.data?.audio ?? u.data?.audio_file ?? u.audio_file;
        if (!h)
          throw new Y("MiniMax 响应中未找到音频字段", "missing_audio");
        const E = Mc(h);
        return new Blob([Uint8Array.from(E)], { type: "audio/mpeg" });
      }
      throw new Y(r ?? "MiniMax 请求失败：未知错误", "http");
    }
  };
}
function Vs(e) {
  return e === "local_gsvi" ? _c() : Gc();
}
const Gs = "tavern_multi_tts_say_rule", Lc = 1, Oc = {
  system: 0,
  user: 1,
  assistant: 2
};
function cr(e) {
  const t = e.ttsEngine === "local_gsvi" ? e.gsviCharacterMappings : e.characterMappings, n = [];
  for (const s of t) {
    const i = s.characterName.trim();
    i && !n.includes(i) && n.push(i);
  }
  return n;
}
function $c(e) {
  const t = cr(e);
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
  const t = cr(e).join("、") || "（未配置角色映射）";
  return `${e.injectTemplate.replaceAll("${target_characters}", t).replaceAll("${mapped_characters}", t)}

${$c(e)}`;
}
function bs(e, t) {
  return !t.enabled || !t.injectEnabled ? (e.deleteExtensionPrompt(Gs), { applied: !1 }) : (e.setExtensionPrompt(
    Gs,
    Dc(t),
    Lc,
    t.injectDepth,
    !1,
    Oc[t.injectRole]
  ), { applied: !0, depth: t.injectDepth, role: t.injectRole });
}
function jc(e) {
  e.deleteExtensionPrompt(Gs);
}
const Li = /<say(?:\s+char\s*=\s*(?:"([^"]*)"|“([^”]*)”))?\s*>([\s\S]*?)<\/say>/gi;
function Uc(e) {
  const t = new RegExp(Li.source, Li.flags), n = [];
  let s, i = 0;
  for (; (s = t.exec(e)) !== null; ) {
    const o = (s[1] ?? s[2])?.trim(), r = s[3].trim();
    r && (n.push({ index: i, text: r, ...o ? { char: o } : {} }), i += 1);
  }
  return n;
}
const kc = /* @__PURE__ */ new Set([
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
]), ur = /\(([a-z-]+)\)/gi, Fc = /\([a-z-]+\)/gi;
function Ys(e) {
  return e.replace(/\s{2,}/g, " ").trim();
}
function Bc(e) {
  return Ys(
    e.replace(ur, (t, n) => {
      const s = String(n).toLowerCase();
      return kc.has(s) ? `(${s})` : "";
    })
  );
}
function Hc(e) {
  return Ys(e.replace(ur, ""));
}
function Kc(e) {
  return Ys(e.replace(Fc, ""));
}
function zc(e, t) {
  const n = Bc(e);
  return t === "local_gsvi" ? Kc(n) : n;
}
async function Wc(e, t) {
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
const _n = "data-tavern-multi-tts-rendered", Zs = "data-tavern-multi-tts-swipe", ss = "tavern-multi-tts-segment", Fn = "tavern-multi-tts-fallback-list";
function Jc(e, t, n) {
  return `${e}:${t}:${n}`;
}
function Oi(e) {
  const t = e.split(":");
  if (t.length !== 3)
    return null;
  const n = Number(t[0]), s = Number(t[1]), i = Number(t[2]);
  return [n, s, i].every(Number.isFinite) ? { message_id: n, swipe_id: s, index: i } : null;
}
function Cn(e) {
  return document.querySelector(`#chat .mes[mesid="${e}"]`);
}
function Xc(e) {
  return e.querySelector(".mes_text");
}
function fr(e, t) {
  const n = e.getAttribute(_n) === "true", s = e.querySelector(`.${ss}`) !== null;
  return !n || !s ? !1 : t === void 0 ? !0 : e.getAttribute(Zs) === String(t);
}
function xt(e = document) {
  e.querySelectorAll(`.${ss}`).forEach((t) => {
    const n = t.querySelector(".tavern-multi-tts-text")?.textContent ?? "";
    t.replaceWith(document.createTextNode(n));
  }), e.querySelectorAll(`.${Fn}`).forEach((t) => t.remove()), e.querySelectorAll(`[${_n}]`).forEach((t) => {
    t.removeAttribute(_n), t.removeAttribute(Zs);
  });
}
function nt(e, t) {
  e.classList.remove("is-loading", "is-ready", "is-playing", "is-error"), t !== "idle" && e.classList.add(`is-${t}`);
  const n = e.querySelector(".tavern-multi-tts-indicator");
  n && (n.textContent = t === "loading" ? "⏳" : t === "ready" ? "▶" : t === "playing" ? "⏸" : t === "error" ? "⚠" : "▶");
}
function $i(e) {
  return e.replace(/\s+/g, "").trim();
}
function Yc(e, t, n, s) {
  const i = e.splitText(t);
  i.splitText(n), i.replaceWith(s);
}
function Zc(e, t, n, s) {
  const i = [t, n].map((l) => l.trim()).filter(Boolean), o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let r = o.nextNode();
  for (; r; ) {
    const l = r.parentElement;
    if (l && !l.closest(`.${ss}`) && !l.closest(`.${Fn}`) && !l.closest(".mes_buttons")) {
      const a = r.nodeValue ?? "";
      for (const f of i) {
        const u = a.indexOf(f);
        if (u >= 0)
          return Yc(r, u, f.length, s), !0;
        if ($i(a) === $i(f))
          return r.replaceWith(s), !0;
      }
    }
    r = o.nextNode();
  }
  return !1;
}
function Qc(e, t, n, s, i, o, r) {
  const l = Jc(e, t, n.index), a = document.createElement("span");
  a.className = ss, a.dataset.tavernMultiTtsKey = l;
  const f = document.createElement("span");
  f.className = "tavern-multi-tts-text", f.textContent = s;
  const u = document.createElement("span");
  u.className = "tavern-multi-tts-indicator", u.textContent = "▶";
  const h = document.createElement("span");
  h.className = "tavern-multi-tts-actions";
  const E = document.createElement("button");
  E.type = "button", E.className = "tavern-multi-tts-action", E.textContent = "下", h.append(E), a.append(f, u, h), nt(a, "idle");
  let S = r.get(l) ?? null;
  const $ = async () => {
    nt(a, "loading");
    try {
      const N = await o.ensureAudio(n, s, i);
      return N.cancelled ? null : N.blob ? (nt(a, "ready"), N.blob) : (nt(a, "error"), null);
    } catch {
      return nt(a, "error"), null;
    }
  }, I = async () => {
    const N = await $();
    N && (S?.stop(), S = Qo(
      N,
      () => nt(a, "playing"),
      () => {
        S = null, r.delete(l), nt(a, "ready");
      },
      () => {
        S = null, r.delete(l), nt(a, "error");
      },
      () => nt(a, "ready")
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
    U?.closest(".tavern-multi-tts-action") || I();
  }), E.addEventListener("click", (N) => {
    N.preventDefault(), N.stopPropagation(), (async () => {
      const U = await $();
      U && o.downloadAudio(U, e, n.index);
    })();
  }), a;
}
function qc(e, t, n, s, i, o = 0) {
  if (fr(e, o))
    return 0;
  e.getAttribute(_n) === "true" && xt(e);
  const r = Xc(e) ?? e, l = [];
  let a = 0;
  for (const f of n) {
    if (!f.displayText || !f.ttsText)
      continue;
    const u = Qc(
      t,
      o,
      f,
      f.displayText,
      f.ttsText,
      s,
      i
    );
    Zc(r, f.text, f.displayText, u) ? a += 1 : l.push(u);
  }
  if (r.querySelectorAll(`.${Fn}`).forEach((f) => f.remove()), l.length > 0) {
    const f = document.createElement("div");
    f.className = Fn, l.forEach((u) => f.append(u, document.createTextNode(" "))), r.append(f), a += l.length;
  }
  return a > 0 && (e.setAttribute(_n, "true"), e.setAttribute(Zs, String(o))), a;
}
function Bn(e, t) {
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const s = e[n];
    if (s && t(s))
      return s;
  }
}
function dr(e, t) {
  return e.characterName.trim() === t && !!e.minimaxVoiceId.trim();
}
function pr(e, t) {
  return e.characterName.trim() === t && !!e.gsviVoiceId.trim() && !!e.gsviLanguage.trim() && !!e.gsviEmotion.trim();
}
function mr(e, t) {
  const n = t?.trim() ?? "";
  return n ? e.ttsEngine === "local_gsvi" ? !!Bn(
    e.gsviCharacterMappings,
    (s) => pr(s, n)
  ) : !!Bn(e.characterMappings, (s) => dr(s, n)) : !0;
}
function hr(e, t) {
  const n = t?.trim() ?? "";
  if (e.ttsEngine === "local_gsvi") {
    const i = Bn(
      e.gsviCharacterMappings,
      (o) => pr(o, n)
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
    minimaxVoiceId: Bn(
      e.characterMappings,
      (i) => dr(i, n)
    )?.minimaxVoiceId?.trim() || e.voiceId.trim() || e.voiceCatalogSelectedId.trim()
  };
}
function gr(e, t, n) {
  if (!mr(e, n))
    return null;
  const s = hr(e, n);
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
function eu(e) {
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
function tu(e, t, n) {
  const s = hr(e, n);
  return e.ttsEngine === "local_gsvi" ? {
    text: t,
    engine: "local_gsvi",
    localGsvi: {
      origin: Ia(e.localGsviBaseUrl),
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
const Di = 15;
function nu(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = [];
  let o = !1, r = !1, l = 0;
  function a() {
    return e.getSettings();
  }
  function f() {
    r || !document.querySelector(".minimax-tts-segment") || (r = !0, e.warn?.("检测到旧酒馆助手 Multi-TTS 仍在装饰消息。请只启用其中一个，避免重复生成。"));
  }
  function u(A) {
    return ir(A) && A.code === "cancelled";
  }
  function h(A, V) {
    return n.get(A)?.token === V;
  }
  function E(A) {
    for (const [V, k] of n)
      A(k) && (k.controller.abort(), n.delete(V));
  }
  function S() {
    E(() => !0);
  }
  function $(A, V) {
    E(
      (k) => k.message_id === A && (V === void 0 || k.swipe_id !== V)
    );
  }
  function I(A, V, k) {
    n.get(A)?.controller.abort(), l += 1;
    const ee = {
      token: l,
      message_id: V,
      swipe_id: k,
      controller: new AbortController()
    };
    return n.set(A, ee), ee;
  }
  function P(A, V) {
    h(A, V) && n.delete(A);
  }
  async function N(A, V, k, W, ee) {
    const w = I(A, V, k);
    try {
      const p = a(), m = gr(p, W, ee);
      if (!m)
        return { blob: null };
      m.signal = w.controller.signal;
      const Q = tu(p, W, ee), D = await Ra(Q);
      if (!h(A, w.token) || w.controller.signal.aborted)
        return { cancelled: !0 };
      const et = s.get(D);
      if (et)
        return { blob: et };
      const Ve = await Oa(D);
      if (!h(A, w.token) || w.controller.signal.aborted)
        return { cancelled: !0 };
      if (Ve)
        return s.set(D, Ve), { blob: Ve };
      const c = await Vs(m.engine).synthesize(m);
      return c && (await $a(D, c), s.set(D, c)), !h(A, w.token) || w.controller.signal.aborted ? { cancelled: !0 } : { blob: c };
    } catch (p) {
      return u(p) || !h(A, w.token) || w.controller.signal.aborted ? { cancelled: !0 } : (console.error(`${Se} synthesize failed`), { blob: null });
    } finally {
      P(A, w.token);
    }
  }
  function U(A, V) {
    if (typeof A.swipe_id == "number" && Number.isFinite(A.swipe_id))
      return A.swipe_id;
    const k = Number(V?.getAttribute("swipeid"));
    return Number.isFinite(k) ? k : 0;
  }
  function Z(A, V) {
    for (const [k, W] of t) {
      const ee = Oi(k);
      ee && ee.message_id === A && ee.swipe_id !== V && (W.stop(), t.delete(k));
    }
  }
  function L(A) {
    for (const [V, k] of t) {
      const W = Oi(V);
      W && W.message_id === A && (k.stop(), t.delete(V));
    }
  }
  function z(A, V, k) {
    if (typeof A.swipe_id != "number" || !Number.isFinite(A.swipe_id))
      return !0;
    const W = V.getAttribute("swipeid");
    if (W === null || W === "")
      return !0;
    const ee = Number(W);
    return Number.isFinite(ee) && ee === k && ee === A.swipe_id;
  }
  function Ce(A, V) {
    $(A, V), Z(A, V);
    const k = e.findMessageElement(A) ?? Cn(A);
    k && xt(k);
  }
  function pe(A, V = {}) {
    const k = V.attempt ?? 0, W = a();
    if (!W.enabled)
      return;
    const ee = e.getChatMessage(A);
    if (!ee || ee.is_user || ee.is_system)
      return;
    const w = typeof ee.mes == "string" ? ee.mes : "", p = Uc(w).filter(
      (me) => mr(W, me.char)
    ), m = e.findMessageElement(A) ?? Cn(A);
    if (p.length === 0) {
      m && xt(m);
      return;
    }
    if (!m) {
      k < Di && window.setTimeout(() => pe(A, { ...V, attempt: k + 1 }), 120);
      return;
    }
    const Q = U(ee, m);
    if (!z(ee, m, Q)) {
      k < Di && window.setTimeout(() => pe(A, { ...V, attempt: k + 1 }), 120);
      return;
    }
    if (fr(m, Q))
      return;
    m.getAttribute("data-tavern-multi-tts-rendered") === "true" && xt(m), Z(A, Q), f();
    const D = p.map((me) => ({
      ...me,
      displayText: Hc(me.text),
      ttsText: zc(me.text, W.ttsEngine)
    })), et = [], Ve = (me) => V.skipPrefetch ? !1 : W.prefetchMode === "auto_all" ? !0 : W.prefetchMode === "auto_first_n" ? me < W.prefetchFirstCount : !1;
    qc(
      m,
      A,
      D,
      {
        ensureAudio: async (me, c, d) => {
          const v = `${A}:${Q}:${me.index}`;
          return await N(v, A, Q, d, me.char);
        },
        downloadAudio(me, c, d) {
          Ua(me, ja(c, d));
        }
      },
      t,
      Q
    ), D.forEach((me, c) => {
      Ve(c) && me.ttsText && et.push(async () => {
        const d = `${A}:${Q}:${me.index}`;
        try {
          await N(d, A, Q, me.ttsText, me.char);
        } catch {
        }
      });
    }), et.length > 0 && Wc(et, W.maxConcurrency);
  }
  function Ie(...A) {
    const V = Number(A[0]);
    Number.isFinite(V) && window.setTimeout(() => pe(V), 0);
  }
  function ft(...A) {
    const V = Number(A[0]);
    if (!Number.isFinite(V))
      return;
    $(V);
    const k = e.findMessageElement(V) ?? Cn(V);
    k && xt(k), L(V), window.setTimeout(() => pe(V), 0);
  }
  function Qe(...A) {
    const V = Number(A[0]);
    if (!Number.isFinite(V))
      return;
    const k = e.findMessageElement(V) ?? Cn(V), W = e.getChatMessage(V), ee = W ? U(W, k) : 0;
    Ce(V, ee), window.setTimeout(() => pe(V, { skipPrefetch: !0 }), 0);
  }
  function qe(A = {}) {
    document.querySelectorAll("#chat .mes[mesid]").forEach((V) => {
      const k = Number(V.getAttribute("mesid"));
      Number.isFinite(k) && pe(k, A);
    });
  }
  function je(A, V) {
    e.eventSource.on(A, V), i.push(() => e.eventSource.removeListener(A, V));
  }
  function It() {
    o || (o = !0, bs(e, a()), je(e.eventNames.messageReceived, Ie), je(e.eventNames.messageRendered, Ie), je(e.eventNames.messageUpdated, ft), je(e.eventNames.messageSwiped, Qe), je(e.eventNames.moreMessagesLoaded, () => {
      qe({ skipPrefetch: !0 });
    }), je(e.eventNames.chatChanged, () => {
      S(), t.forEach((A) => A.stop()), t.clear(), Rn(), bs(e, a()), qe({ skipPrefetch: !0 });
    }), qe({ skipPrefetch: !0 }), console.info(`${Se} chat runtime started`));
  }
  function Rt() {
    i.splice(0).forEach((A) => A()), S(), t.forEach((A) => A.stop()), t.clear(), s.clear(), Rn(), jc(e), xt(document), o = !1, console.info(`${Se} chat runtime stopped`);
  }
  function Yt() {
    S(), t.forEach((A) => A.stop()), t.clear(), Rn(), xt(document);
  }
  function vt() {
    bs(e, a());
  }
  function Ue() {
    Yt(), a().enabled && qe({ skipPrefetch: !0 });
  }
  function dt() {
    vt(), Ue();
  }
  return { start: It, stop: Rt, syncFromSettings: dt, syncInjection: vt, refreshDecorations: Ue, decorate: pe };
}
function gt(e) {
  return typeof e == "object" && e !== null;
}
function su(e) {
  if (gt(e) && !(typeof e.on != "function" || typeof e.removeListener != "function"))
    return e;
}
function iu(e) {
  return !gt(e) || typeof e.getContext != "function" ? null : e;
}
function ou(e) {
  if (!gt(e))
    throw new Error("SillyTavern.getContext() 未返回对象");
  if (!gt(e.extensionSettings))
    throw new Error("SillyTavern 上下文缺少 extensionSettings");
  if (typeof e.saveSettingsDebounced != "function")
    throw new Error("SillyTavern 上下文缺少 saveSettingsDebounced");
  const t = su(e.eventSource), n = gt(e.eventTypes) ? e.eventTypes : gt(e.event_types) ? e.event_types : void 0, s = n ? {
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
    extensionPrompts: gt(e.extensionPrompts) ? e.extensionPrompts : void 0
  };
}
function vr() {
  const e = iu(globalThis.SillyTavern);
  if (!e)
    throw new Error(
      "SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行"
    );
  return ou(e.getContext());
}
function _r() {
  const e = vr();
  return {
    readRawSettings() {
      return e.extensionSettings[gs];
    },
    writeSettings(t) {
      e.extensionSettings[gs] = t, e.saveSettingsDebounced();
    },
    removeSettings() {
      delete e.extensionSettings[gs], e.saveSettingsDebounced();
    },
    findSettingsRoot: nc,
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
  return gt(e) ? {
    mes: typeof e.mes == "string" ? e.mes : void 0,
    is_user: typeof e.is_user == "boolean" ? e.is_user : void 0,
    is_system: typeof e.is_system == "boolean" ? e.is_system : void 0,
    swipe_id: typeof e.swipe_id == "number" ? e.swipe_id : void 0
  } : null;
}
function lu(e) {
  const t = vr();
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
        i.warning(s, Se);
        return;
      }
      console.warn(`${Se} ${s}`);
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
function ji(e) {
  return [...e].sort((t, n) => t.name.localeCompare(n.name));
}
function Ui(e, t, n, s) {
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
function ki(e, t) {
  const n = t.trim();
  if (!n)
    return { error: "请先选择存档" };
  const s = e.find((i) => i.name === n);
  return s ? { mappings: [...s.mappings] } : { error: `未找到存档：${n}` };
}
function Fi(e, t) {
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
function Bi() {
  return {
    voices: [],
    filter: mu()
  };
}
function Hi() {
  return {
    minimax: Bi(),
    local_gsvi: Bi()
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
function Ki(e) {
  const t = [e.language, e.gender, e.source].filter(Boolean);
  return t.length > 0 ? `${e.name} (${t.join(" / ")})` : e.name;
}
function zi(e) {
  return e?.languages ?? [];
}
function Wi(e, t) {
  const n = t.trim();
  return !e || !n ? [] : e.emotionsByLanguage?.[n] ?? [];
}
function Ji(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(2)} MB`;
}
const yu = { class: "tavern-multi-tts-settings" }, bu = { class: "inline-drawer" }, xu = { class: "inline-drawer-toggle inline-drawer-header" }, Su = { class: "inline-drawer-content" }, wu = { class: "tavern-multi-tts-toolbar" }, Eu = { class: "tavern-multi-tts-version" }, Tu = { class: "tavern-multi-tts-row" }, Cu = { class: "checkbox_label" }, Mu = { class: "tavern-multi-tts-field" }, Au = { class: "tavern-multi-tts-grid" }, Iu = { class: "tavern-multi-tts-field" }, Ru = { class: "tavern-multi-tts-field" }, Pu = { class: "tavern-multi-tts-field" }, Nu = { class: "tavern-multi-tts-actions" }, Vu = ["disabled"], Gu = ["disabled"], Lu = { class: "tavern-multi-tts-grid" }, Ou = ["value"], $u = { class: "tavern-multi-tts-field" }, Du = ["value"], ju = { value: "" }, Uu = ["value"], ku = { class: "tavern-multi-tts-grid" }, Fu = { class: "tavern-multi-tts-field" }, Bu = ["value"], Hu = { class: "tavern-multi-tts-field" }, Ku = { class: "tavern-multi-tts-field" }, zu = { class: "tavern-multi-tts-field" }, Wu = { class: "tavern-multi-tts-actions" }, Ju = ["disabled"], Xu = { class: "tavern-multi-tts-grid" }, Yu = { class: "tavern-multi-tts-field" }, Zu = { value: "" }, Qu = ["value"], qu = { class: "tavern-multi-tts-field" }, ef = ["value"], tf = { class: "tavern-multi-tts-field" }, nf = ["value"], sf = { class: "tavern-multi-tts-field" }, of = {
  class: "tavern-multi-tts-section",
  open: ""
}, rf = { class: "tavern-multi-tts-actions" }, lf = ["value"], af = ["disabled"], cf = ["disabled"], uf = ["onUpdate:modelValue"], ff = ["onUpdate:modelValue"], df = ["value", "onChange"], pf = ["value"], mf = ["disabled", "onClick"], hf = ["onClick"], gf = ["onUpdate:modelValue"], vf = ["onUpdate:modelValue"], _f = { value: "" }, yf = ["value"], bf = ["onUpdate:modelValue"], xf = ["value"], Sf = ["onUpdate:modelValue"], wf = ["value"], Ef = ["disabled", "onClick"], Tf = ["onClick"], Cf = {
  key: 2,
  class: "tavern-multi-tts-hint"
}, Mf = { class: "tavern-multi-tts-row" }, Af = { class: "checkbox_label" }, If = ["disabled"], Rf = { class: "tavern-multi-tts-section" }, Pf = { class: "tavern-multi-tts-field" }, Nf = {
  key: 0,
  class: "tavern-multi-tts-grid"
}, Vf = {
  key: 0,
  class: "tavern-multi-tts-field"
}, Gf = { class: "tavern-multi-tts-field" }, Lf = { class: "tavern-multi-tts-field" }, Of = { class: "tavern-multi-tts-field" }, $f = { class: "tavern-multi-tts-field" }, Df = { class: "tavern-multi-tts-field" }, jf = { class: "tavern-multi-tts-grid" }, Uf = { class: "tavern-multi-tts-field" }, kf = ["value"], Ff = { class: "tavern-multi-tts-field" }, Bf = ["value"], Hf = { class: "tavern-multi-tts-field" }, Kf = { class: "tavern-multi-tts-actions" }, zf = ["disabled"], Wf = ["disabled"], Jf = { class: "tavern-multi-tts-hint" }, Xf = /* @__PURE__ */ hl({
  __name: "settings-panel",
  props: {
    displayName: {},
    version: {},
    settings: {},
    onSettingsChange: { type: Function }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Pn(Ut(t.settings)), s = /* @__PURE__ */ Nt(""), i = /* @__PURE__ */ Nt(!1), o = /* @__PURE__ */ Pn(Hi()), r = /* @__PURE__ */ Nt(""), l = /* @__PURE__ */ Nt(""), a = /* @__PURE__ */ Nt(0), f = /* @__PURE__ */ Nt(0), u = Ge(() => n.ttsEngine === "minimax"), h = Ge(() => o.minimax.voices), E = Ge(() => o.local_gsvi.voices), S = Ge(
      () => _u(o.minimax.voices, o.minimax.filter)
    ), $ = Ge(() => vu(o.minimax.voices)), I = Ge(
      () => o.local_gsvi.voices.find((w) => w.id === n.localGsviModel)
    ), P = Ge(() => zi(I.value)), N = Ge(
      () => Wi(I.value, n.localGsviLanguage)
    ), U = Ge(
      () => u.value ? ji(n.characterMappingPresets) : ji(n.gsviCharacterMappingPresets)
    ), Z = Ge(
      () => au(
        (u.value ? n.characterMappings : n.gsviCharacterMappings).map(
          (w) => w.characterName
        )
      )
    ), L = Ge(() => Ji(f.value));
    fl(
      n,
      () => {
        t.onSettingsChange(Ut(n));
      },
      { deep: !0 }
    );
    function z(w) {
      s.value = w;
    }
    function Ce(w, p) {
      if (ir(w)) {
        z(w.message);
        return;
      }
      z(w instanceof Error ? w.message : p);
    }
    function pe() {
      return n.characterMappings.map((w) => ({
        characterName: w.characterName.trim(),
        minimaxVoiceId: w.minimaxVoiceId.trim()
      })).filter((w) => w.characterName && w.minimaxVoiceId);
    }
    function Ie() {
      return n.gsviCharacterMappings.map((w) => ({
        characterName: w.characterName.trim(),
        gsviVoiceId: w.gsviVoiceId.trim(),
        gsviLanguage: w.gsviLanguage.trim(),
        gsviEmotion: w.gsviEmotion.trim()
      })).filter(
        (w) => w.characterName && w.gsviVoiceId && w.gsviLanguage && w.gsviEmotion
      );
    }
    async function ft(w, p, m) {
      if (!i.value) {
        i.value = !0, z(p);
        try {
          await w();
        } catch (Q) {
          Ce(Q, m);
        } finally {
          i.value = !1;
        }
      }
    }
    async function Qe(w = !1) {
      await ft(
        async () => {
          const p = eu(n);
          if (!p) {
            z(u.value ? "请先填写 API Key" : "请先填写 Local-GSVI 服务地址");
            return;
          }
          p.engine === "minimax" && (p.forceRefresh = w);
          const m = n.ttsEngine, Q = await Vs(m).listVoices(p);
          gu(o, m, Q), z(`已加载 ${Q.length} 个${m === "minimax" ? "音色" : "模型"}`);
        },
        "正在拉取列表…",
        "拉取列表失败"
      );
    }
    function qe(w) {
      n.voiceId = w, n.voiceCatalogSelectedId = w;
    }
    function je() {
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
    function It(w) {
      if (u.value) {
        n.characterMappings.splice(w, 1);
        return;
      }
      n.gsviCharacterMappings.splice(w, 1);
    }
    function Rt() {
      const w = r.value, p = U.value.some((Q) => Q.name === w.trim());
      if (p && !window.confirm(`存档「${w.trim()}」已存在，要覆盖吗？`))
        return;
      const m = u.value ? Ui(n.characterMappingPresets, w, pe(), p) : Ui(n.gsviCharacterMappingPresets, w, Ie(), p);
      if ("error" in m) {
        z(m.error);
        return;
      }
      u.value ? n.characterMappingPresets = m.presets : n.gsviCharacterMappingPresets = m.presets, l.value = w.trim(), z(m.message);
    }
    function Yt() {
      const w = u.value ? ki(n.characterMappingPresets, l.value) : ki(n.gsviCharacterMappingPresets, l.value);
      if ("error" in w) {
        z(w.error);
        return;
      }
      (u.value ? pe().length > 0 : Ie().length > 0) && !window.confirm("读取存档会覆盖当前映射，确定继续吗？") || (u.value ? n.characterMappings = w.mappings : n.gsviCharacterMappings = w.mappings, z(`已读取存档：${l.value}`));
    }
    function vt() {
      if (!window.confirm(`确定删除存档「${l.value}」吗？`))
        return;
      const w = u.value ? Fi(n.characterMappingPresets, l.value) : Fi(n.gsviCharacterMappingPresets, l.value);
      if ("error" in w) {
        z(w.error);
        return;
      }
      u.value ? n.characterMappingPresets = w.presets : n.gsviCharacterMappingPresets = w.presets, l.value = "", z(w.message);
    }
    async function Ue(w) {
      await ft(
        async () => {
          const p = pu(n.ttsEngine, n.testLanguage), m = gr(n, p, w);
          if (!m) {
            z(
              w ? `角色「${w}」未完整映射，无法测试` : "请先补全当前引擎的默认音色/模型后再测试"
            );
            return;
          }
          const Q = await Vs(n.ttsEngine).synthesize(m);
          Qo(Q), z(w ? `正在试听「${w}」` : "正在试听默认音色");
        },
        "正在合成测试语音…",
        "测试语音失败"
      );
    }
    async function dt() {
      await ft(
        async () => {
          const w = await Da();
          a.value = w.count, f.value = w.totalBytes, z(`缓存 ${w.count} 条，${Ji(w.totalBytes)}`);
        },
        "正在读取缓存…",
        "读取缓存失败"
      );
    }
    async function A() {
      window.confirm("确定清空本扩展的音频缓存吗？") && await ft(
        async () => {
          await Zo(), a.value = 0, f.value = 0, z("已清空音频缓存");
        },
        "正在清空缓存…",
        "清空缓存失败"
      );
    }
    function V() {
      window.confirm("确定恢复默认设置吗？当前映射和密钥都会被清空。") && (Object.assign(n, Ut(Wt)), Object.assign(o, Hi()), z("已恢复默认设置"));
    }
    function k() {
      P.value.includes(n.localGsviLanguage) || (n.localGsviLanguage = "", n.localGsviEmotion = "");
    }
    function W(w) {
      return zi(o.local_gsvi.voices.find((p) => p.id === w));
    }
    function ee(w, p) {
      return Wi(
        o.local_gsvi.voices.find((m) => m.id === w),
        p
      );
    }
    return dt().catch((w) => Ce(w, "读取缓存失败")), (w, p) => (F(), B("div", yu, [
      g("div", bu, [
        g("div", xu, [
          g("b", null, X(e.displayName), 1),
          p[37] || (p[37] = g("div", { class: "inline-drawer-icon fa-solid fa-circle-chevron-down down" }, null, -1))
        ]),
        g("div", Su, [
          g("div", wu, [
            g("small", Eu, X(e.version), 1),
            g("small", {
              class: Xn(["tavern-multi-tts-status", { "is-busy": i.value }])
            }, X(s.value || "更改会自动保存"), 3)
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
          u.value ? (F(), B(ne, { key: 0 }, [
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
                onClick: p[6] || (p[6] = (m) => Qe(!1))
              }, " 拉取音色 ", 8, Vu),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: p[7] || (p[7] = (m) => Qe(!0))
              }, " 刷新音色 ", 8, Gu)
            ]),
            h.value.length > 0 ? (F(), B(ne, { key: 0 }, [
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
                  (F(!0), B(ne, null, be($.value, (m) => (F(), B("option", {
                    key: m,
                    value: m
                  }, X(m), 9, Ou))), 128))
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
                  onChange: p[12] || (p[12] = (m) => qe(m.target.value))
                }, [
                  g("option", ju, X(S.value.length) + " 条可选", 1),
                  (F(!0), B(ne, null, be(S.value, (m) => (F(), B("option", {
                    key: m.id,
                    value: m.id
                  }, X(Gt(Ki)(m)), 9, Uu))), 128))
                ], 40, Du)
              ])
            ], 64)) : Vt("", !0),
            g("div", ku, [
              g("label", Fu, [
                p[49] || (p[49] = le(" 模型 ", -1)),
                K(g("select", {
                  "onUpdate:modelValue": p[13] || (p[13] = (m) => n.model = m),
                  class: "text_pole"
                }, [
                  (F(!0), B(ne, null, be(Gt(tr), (m) => (F(), B("option", {
                    key: m,
                    value: m
                  }, X(m), 9, Bu))), 128))
                ], 512), [
                  [ge, n.model]
                ])
              ]),
              g("label", Hu, [
                le(" 语速 " + X(n.speed.toFixed(2)) + " ", 1),
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
                le(" 音量 " + X(n.vol.toFixed(2)) + " ", 1),
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
          ], 64)) : (F(), B(ne, { key: 1 }, [
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
                onClick: p[17] || (p[17] = (m) => Qe(!1))
              }, " 拉取模型 ", 8, Ju)
            ]),
            g("div", Xu, [
              g("label", Yu, [
                p[51] || (p[51] = le(" 默认模型 ", -1)),
                K(g("select", {
                  "onUpdate:modelValue": p[18] || (p[18] = (m) => n.localGsviModel = m),
                  class: "text_pole",
                  onChange: k
                }, [
                  g("option", Zu, X(E.value.length > 0 ? "请选择" : "先拉取模型"), 1),
                  (F(!0), B(ne, null, be(E.value, (m) => (F(), B("option", {
                    key: m.id,
                    value: m.id
                  }, X(m.name), 9, Qu))), 128))
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
                  (F(!0), B(ne, null, be(P.value, (m) => (F(), B("option", {
                    key: m,
                    value: m
                  }, X(m), 9, ef))), 128))
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
                  (F(!0), B(ne, null, be(N.value, (m) => (F(), B("option", {
                    key: m,
                    value: m
                  }, X(m), 9, nf))), 128))
                ], 512), [
                  [ge, n.localGsviEmotion]
                ])
              ])
            ]),
            g("label", sf, [
              le(" 语速 " + X(n.speed.toFixed(2)) + " ", 1),
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
            g("summary", null, " 角色映射 " + X(u.value ? n.characterMappings.length : n.gsviCharacterMappings.length), 1),
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
                onClick: Rt
              }, "保存"),
              K(g("select", {
                "onUpdate:modelValue": p[23] || (p[23] = (m) => l.value = m),
                class: "text_pole"
              }, [
                p[56] || (p[56] = g("option", { value: "" }, "读取存档", -1)),
                (F(!0), B(ne, null, be(U.value, (m) => (F(), B("option", {
                  key: m.name,
                  value: m.name
                }, X(m.name) + "（" + X(m.mappings.length) + "） ", 9, lf))), 128))
              ], 512), [
                [ge, l.value]
              ]),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: !l.value,
                onClick: Yt
              }, " 读取 ", 8, af),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: !l.value,
                onClick: vt
              }, " 删除 ", 8, cf)
            ]),
            u.value ? (F(!0), B(ne, { key: 0 }, be(n.characterMappings, (m, Q) => (F(), B("div", {
              key: `mm-${Q}`,
              class: "tavern-multi-tts-mapping"
            }, [
              K(g("input", {
                "onUpdate:modelValue": (D) => m.characterName = D,
                class: "text_pole",
                type: "text",
                placeholder: "角色名"
              }, null, 8, uf), [
                [he, m.characterName]
              ]),
              K(g("input", {
                "onUpdate:modelValue": (D) => m.minimaxVoiceId = D,
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
                onChange: (D) => m.minimaxVoiceId = D.target.value
              }, [
                p[57] || (p[57] = g("option", { value: "" }, "从列表选择", -1)),
                (F(!0), B(ne, null, be(S.value, (D) => (F(), B("option", {
                  key: D.id,
                  value: D.id
                }, X(Gt(Ki)(D)), 9, pf))), 128))
              ], 40, df)) : Vt("", !0),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: (D) => Ue(m.characterName)
              }, " 试听 ", 8, mf),
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: (D) => It(Q)
              }, "删除", 8, hf)
            ]))), 128)) : (F(!0), B(ne, { key: 1 }, be(n.gsviCharacterMappings, (m, Q) => (F(), B("div", {
              key: `gsvi-${Q}`,
              class: "tavern-multi-tts-mapping is-gsvi"
            }, [
              K(g("input", {
                "onUpdate:modelValue": (D) => m.characterName = D,
                class: "text_pole",
                type: "text",
                placeholder: "角色名"
              }, null, 8, gf), [
                [he, m.characterName]
              ]),
              K(g("select", {
                "onUpdate:modelValue": (D) => m.gsviVoiceId = D,
                class: "text_pole"
              }, [
                g("option", _f, X(E.value.length > 0 ? "模型" : "先拉取模型"), 1),
                (F(!0), B(ne, null, be(E.value, (D) => (F(), B("option", {
                  key: D.id,
                  value: D.id
                }, X(D.name), 9, yf))), 128))
              ], 8, vf), [
                [ge, m.gsviVoiceId]
              ]),
              K(g("select", {
                "onUpdate:modelValue": (D) => m.gsviLanguage = D,
                class: "text_pole"
              }, [
                p[58] || (p[58] = g("option", { value: "" }, "语种", -1)),
                (F(!0), B(ne, null, be(W(m.gsviVoiceId), (D) => (F(), B("option", {
                  key: D,
                  value: D
                }, X(D), 9, xf))), 128))
              ], 8, bf), [
                [ge, m.gsviLanguage]
              ]),
              K(g("select", {
                "onUpdate:modelValue": (D) => m.gsviEmotion = D,
                class: "text_pole"
              }, [
                p[59] || (p[59] = g("option", { value: "" }, "情绪", -1)),
                (F(!0), B(ne, null, be(ee(m.gsviVoiceId, m.gsviLanguage), (D) => (F(), B("option", {
                  key: D,
                  value: D
                }, X(D), 9, wf))), 128))
              ], 8, Sf), [
                [ge, m.gsviEmotion]
              ]),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: (D) => Ue(m.characterName)
              }, " 试听 ", 8, Ef),
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: (D) => It(Q)
              }, "删除", 8, Tf)
            ]))), 128)),
            g("div", { class: "tavern-multi-tts-actions" }, [
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: je
              }, "添加角色")
            ]),
            Z.value.length > 0 ? (F(), B("p", Cf, " 重复角色名：" + X(Z.value.join("、")) + "，最后一条完整映射生效。 ", 1)) : Vt("", !0)
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
              onClick: p[26] || (p[26] = (m) => Ue())
            }, X(u.value ? "测试默认音色（消耗额度）" : "测试默认模型"), 9, If)
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
              ])) : Vt("", !0),
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
            ])) : Vt("", !0),
            g("label", Lf, [
              le(" 注入深度 D" + X(n.injectDepth) + " ", 1),
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
            u.value ? Vt("", !0) : (F(), B(ne, { key: 1 }, [
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
                    (F(!0), B(ne, null, be(Gt(fu), (m) => (F(), B("option", {
                      key: m,
                      value: m
                    }, X(m), 9, kf))), 128))
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
                    (F(!0), B(ne, null, be(Gt(du), (m) => (F(), B("option", {
                      key: m,
                      value: m
                    }, X(m), 9, Bf))), 128))
                  ], 512), [
                    [ge, n.localGsviTextSplitMethod]
                  ])
                ])
              ]),
              g("label", Hf, [
                le(" Batch " + X(n.localGsviBatchSize) + " ", 1),
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
                onClick: dt
              }, " 刷新缓存 ", 8, zf),
              g("button", {
                class: "menu_button",
                type: "button",
                disabled: i.value,
                onClick: A
              }, " 清空缓存 ", 8, Wf),
              g("button", {
                class: "menu_button",
                type: "button",
                onClick: V
              }, "恢复默认")
            ]),
            g("p", Jf, " 缓存 " + X(a.value) + " 条 / " + X(L.value) + "，上限 100 条或 50MB。 ", 1)
          ])
        ])
      ])
    ]));
  }
});
let en = null, tn = null, fn = null;
function Yf() {
  return Ut(_r().readRawSettings());
}
function Zf() {
  return fn ??= nu(lu(Yf)), fn;
}
function Jt() {
  return tn || (tn = tc(
    _r(),
    {
      mount(e, t) {
        en?.unmount(), en = Ea(Xf, {
          displayName: ka,
          version: Fa,
          settings: t,
          onSettingsChange(n) {
            tn?.updateSettings(n);
          }
        }), en.mount(e);
      },
      unmount() {
        en?.unmount(), en = null;
      }
    },
    {
      stopPlayback: Rn,
      clearCache: Zo,
      startRuntime: () => Zf().start(),
      stopRuntime: () => fn?.stop(),
      syncInjection: () => fn?.syncInjection(),
      refreshDecorations: () => fn?.refreshDecorations()
    }
  ), tn);
}
async function Xt(e, t) {
  try {
    await t();
  } catch (n) {
    const s = n instanceof Error ? n.message : String(n);
    throw console.error(`${Se} ${e} failed: ${s}`), n;
  }
}
async function Qf() {
  await Xt("onInstall", () => Jt().install());
}
async function qf() {
  await Xt("onActivate", () => Jt().activate());
}
async function ed() {
  await Xt("onEnable", () => Jt().activate());
}
async function td() {
  await Xt("onDisable", () => Jt().disable());
}
async function nd() {
  await Xt("onClean", () => Jt().clean());
}
async function sd() {
  await Xt("onDelete", () => Jt().delete());
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
