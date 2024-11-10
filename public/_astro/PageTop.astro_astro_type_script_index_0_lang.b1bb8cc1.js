var _Class,
  _Class2,
  _Class3,
  _Class4,
  _Class5,
  _Class6,
  _Class7,
  _Class8,
  _Class9,
  _Class10,
  _Class11,
  _Class12,
  _Class13,
  _Class14,
  _Class15,
  _Class16;
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[r] = t),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var xh =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function vo(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Sh = { exports: {} };
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.12
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */ (function (n, t) {
  (function (s, r) {
    n.exports = r();
  })(xh, function () {
    return (function (e) {
      var s = {};
      function r(l) {
        if (s[l]) return s[l].exports;
        var u = (s[l] = { exports: {}, id: l, loaded: !1 });
        return (
          e[l].call(u.exports, u, u.exports, r), (u.loaded = !0), u.exports
        );
      }
      return (r.m = e), (r.c = s), (r.p = ""), r(0);
    })([
      function (e, s) {
        e.exports = (function () {
          if (typeof document > "u" || typeof window > "u")
            return {
              ask: function () {
                return "initial";
              },
              element: function () {
                return null;
              },
              ignoreKeys: function () {},
              specificKeys: function () {},
              registerOnChange: function () {},
              unRegisterOnChange: function () {}
            };
          var r = document.documentElement,
            l = null,
            u = "initial",
            c = u,
            d = Date.now(),
            p = !1,
            m = ["button", "input", "select", "textarea"],
            _ = [],
            g = [16, 17, 18, 91, 93],
            y = [],
            w = {
              keydown: "keyboard",
              keyup: "keyboard",
              mousedown: "mouse",
              mousemove: "mouse",
              MSPointerDown: "pointer",
              MSPointerMove: "pointer",
              pointerdown: "pointer",
              pointermove: "pointer",
              touchstart: "touch",
              touchend: "touch"
            },
            v = !1,
            D = { x: null, y: null },
            S = { 2: "touch", 3: "touch", 4: "mouse" },
            C = !1;
          try {
            var P = Object.defineProperty({}, "passive", {
              get: function () {
                C = !0;
              }
            });
            window.addEventListener("test", null, P);
          } catch {}
          var k = function () {
              (w[$()] = "mouse"), A();
            },
            A = function () {
              var R = C ? { passive: !0, capture: !0 } : !0;
              document.addEventListener("DOMContentLoaded", O, !0),
                window.PointerEvent
                  ? (window.addEventListener("pointerdown", L, !0),
                    window.addEventListener("pointermove", M, !0))
                  : window.MSPointerEvent
                  ? (window.addEventListener("MSPointerDown", L, !0),
                    window.addEventListener("MSPointerMove", M, !0))
                  : (window.addEventListener("mousedown", L, !0),
                    window.addEventListener("mousemove", M, !0),
                    "ontouchstart" in window &&
                      (window.addEventListener("touchstart", L, R),
                      window.addEventListener("touchend", L, !0))),
                window.addEventListener($(), M, R),
                window.addEventListener("keydown", L, !0),
                window.addEventListener("keyup", L, !0),
                window.addEventListener("focusin", B, !0),
                window.addEventListener("focusout", V, !0);
            },
            O = function () {
              if (
                ((p = !(
                  r.getAttribute("data-whatpersist") === "false" ||
                  document.body.getAttribute("data-whatpersist") === "false"
                )),
                p)
              )
                try {
                  window.sessionStorage.getItem("what-input") &&
                    (u = window.sessionStorage.getItem("what-input")),
                    window.sessionStorage.getItem("what-intent") &&
                      (c = window.sessionStorage.getItem("what-intent"));
                } catch {}
              T("input"), T("intent");
            },
            L = function (R) {
              var K = R.which,
                tt = w[R.type];
              tt === "pointer" && (tt = j(R));
              var W = !y.length && g.indexOf(K) === -1,
                q = y.length && y.indexOf(K) !== -1,
                Ut =
                  (tt === "keyboard" && K && (W || q)) ||
                  tt === "mouse" ||
                  tt === "touch";
              if (
                (et(tt) && (Ut = !1),
                Ut && u !== tt && ((u = tt), G("input", u), T("input")),
                Ut && c !== tt)
              ) {
                var ft = document.activeElement,
                  $e =
                    ft &&
                    ft.nodeName &&
                    (m.indexOf(ft.nodeName.toLowerCase()) === -1 ||
                      (ft.nodeName.toLowerCase() === "button" &&
                        !F(ft, "form")));
                $e && ((c = tt), G("intent", c), T("intent"));
              }
            },
            T = function (R) {
              r.setAttribute("data-what" + R, R === "input" ? u : c), H(R);
            },
            M = function (R) {
              var K = w[R.type];
              K === "pointer" && (K = j(R)),
                N(R),
                ((!v && !et(K)) ||
                  (v && R.type === "wheel") ||
                  R.type === "mousewheel" ||
                  R.type === "DOMMouseScroll") &&
                  c !== K &&
                  ((c = K), G("intent", c), T("intent"));
            },
            B = function (R) {
              if (!R.target.nodeName) {
                V();
                return;
              }
              (l = R.target.nodeName.toLowerCase()),
                r.setAttribute("data-whatelement", l),
                R.target.classList &&
                  R.target.classList.length &&
                  r.setAttribute(
                    "data-whatclasses",
                    R.target.classList.toString().replace(" ", ",")
                  );
            },
            V = function () {
              (l = null),
                r.removeAttribute("data-whatelement"),
                r.removeAttribute("data-whatclasses");
            },
            G = function (R, K) {
              if (p)
                try {
                  window.sessionStorage.setItem("what-" + R, K);
                } catch {}
            },
            j = function (R) {
              return typeof R.pointerType == "number"
                ? S[R.pointerType]
                : R.pointerType === "pen"
                ? "touch"
                : R.pointerType;
            },
            et = function (R) {
              var K = Date.now(),
                tt = R === "mouse" && u === "touch" && K - d < 200;
              return (d = K), tt;
            },
            $ = function () {
              var R = null;
              return (
                "onwheel" in document.createElement("div")
                  ? (R = "wheel")
                  : (R =
                      document.onmousewheel !== void 0
                        ? "mousewheel"
                        : "DOMMouseScroll"),
                R
              );
            },
            H = function (R) {
              for (var K = 0, tt = _.length; K < tt; K++)
                _[K].type === R && _[K].fn.call(void 0, R === "input" ? u : c);
            },
            U = function (R) {
              for (var K = 0, tt = _.length; K < tt; K++)
                if (_[K].fn === R) return K;
            },
            N = function (R) {
              D.x !== R.screenX || D.y !== R.screenY
                ? ((v = !1), (D.x = R.screenX), (D.y = R.screenY))
                : (v = !0);
            },
            F = function (R, K) {
              var tt = window.Element.prototype;
              if (
                (tt.matches ||
                  (tt.matches =
                    tt.msMatchesSelector || tt.webkitMatchesSelector),
                tt.closest)
              )
                return R.closest(K);
              do {
                if (R.matches(K)) return R;
                R = R.parentElement || R.parentNode;
              } while (R !== null && R.nodeType === 1);
              return null;
            };
          return (
            "addEventListener" in window && Array.prototype.indexOf && k(),
            {
              ask: function (R) {
                return R === "intent" ? c : u;
              },
              element: function () {
                return l;
              },
              ignoreKeys: function (R) {
                g = R;
              },
              specificKeys: function (R) {
                y = R;
              },
              registerOnChange: function (R, K) {
                _.push({ fn: R, type: K || "input" });
              },
              unRegisterOnChange: function (R) {
                var K = U(R);
                (K || K === 0) && _.splice(K, 1);
              },
              clearStorage: function () {
                window.sessionStorage.clear();
              }
            }
          );
        })();
      }
    ]);
  });
})(Sh);
var Cm = Sh.exports;
const xm = vo(Cm);
window._GLOBAL_ = window._GLOBAL_ || {};
const Sm = "modulepreload",
  Em = function (n) {
    return "/" + n;
  },
  wl = {},
  hn = function (t, e, s) {
    if (!e || e.length === 0) return t();
    const r = document.getElementsByTagName("link");
    return Promise.all(
      e.map((l) => {
        if (((l = Em(l)), l in wl)) return;
        wl[l] = !0;
        const u = l.endsWith(".css"),
          c = u ? '[rel="stylesheet"]' : "";
        if (!!s)
          for (let m = r.length - 1; m >= 0; m--) {
            const _ = r[m];
            if (_.href === l && (!u || _.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${l}"]${c}`)) return;
        const p = document.createElement("link");
        if (
          ((p.rel = u ? "stylesheet" : Sm),
          u || ((p.as = "script"), (p.crossOrigin = "")),
          (p.href = l),
          document.head.appendChild(p),
          u)
        )
          return new Promise((m, _) => {
            p.addEventListener("load", m),
              p.addEventListener("error", () =>
                _(new Error(`Unable to preload CSS for ${l}`))
              );
          });
      })
    )
      .then(() => t())
      .catch((l) => {
        const u = new Event("vite:preloadError", { cancelable: !0 });
        if (((u.payload = l), window.dispatchEvent(u), !u.defaultPrevented))
          throw l;
      });
  };
function Pm({ transitions: n }) {
  hn(() => Promise.resolve().then(() => xg), void 0).then(({ init: t }) => t()),
    hn(() => Promise.resolve().then(() => Dv), void 0).then(({ init: t }) =>
      t()
    ),
    hn(() => Promise.resolve().then(() => bg), void 0).then(({ init: t }) =>
      t()
    );
}
function ce(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return n;
}
function Eh(n, t) {
  (n.prototype = Object.create(t.prototype)),
    (n.prototype.constructor = n),
    (n.__proto__ = t);
}
/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Vt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" }
  },
  Mi = { duration: 0.5, overwrite: !1, delay: 0 },
  go,
  Et,
  mt,
  Gt = 1e8,
  lt = 1 / Gt,
  Vr = Math.PI * 2,
  km = Vr / 4,
  Lm = 0,
  Ph = Math.sqrt,
  Mm = Math.cos,
  Tm = Math.sin,
  wt = function (t) {
    return typeof t == "string";
  },
  dt = function (t) {
    return typeof t == "function";
  },
  _e = function (t) {
    return typeof t == "number";
  },
  bo = function (t) {
    return typeof t > "u";
  },
  ne = function (t) {
    return typeof t == "object";
  },
  Ot = function (t) {
    return t !== !1;
  },
  kh = function () {
    return typeof window < "u";
  },
  nn = function (t) {
    return dt(t) || wt(t);
  },
  Lh =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Pt = Array.isArray,
  Nr = /(?:-?\.?\d|\.)+/gi,
  Mh = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Ci = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  br = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Th = /[+-]=-?[.\d]+/,
  Ah = /[^,'"\[\]\s]+/gi,
  Am = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  ut,
  qt,
  zr,
  wo,
  zt = {},
  mn = {},
  Oh,
  Fh = function (t) {
    return (mn = hi(t, zt)) && Ht;
  },
  yo = function (t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  _n = function (t, e) {
    return !e && console.warn(t);
  },
  Rh = function (t, e) {
    return (t && (zt[t] = e) && mn && (mn[t] = e)) || zt;
  },
  ys = function () {
    return 0;
  },
  Om = { suppressEvents: !0, isStart: !0, kill: !1 },
  un = { suppressEvents: !0, kill: !1 },
  Fm = { suppressEvents: !0 },
  Do = {},
  Fe = [],
  Hr = {},
  Ih,
  It = {},
  wr = {},
  yl = 30,
  cn = [],
  Co = "",
  xo = function (t) {
    var e = t[0],
      s,
      r;
    if ((ne(e) || dt(e) || (t = [t]), !(s = (e._gsap || {}).harness))) {
      for (r = cn.length; r-- && !cn[r].targetTest(e); );
      s = cn[r];
    }
    for (r = t.length; r--; )
      (t[r] && (t[r]._gsap || (t[r]._gsap = new nu(t[r], s)))) ||
        t.splice(r, 1);
    return t;
  },
  ni = function (t) {
    return t._gsap || xo(Wt(t))[0]._gsap;
  },
  Bh = function (t, e, s) {
    return (s = t[e]) && dt(s)
      ? t[e]()
      : (bo(s) && t.getAttribute && t.getAttribute(e)) || s;
  },
  Ft = function (t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
  pt = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  Dt = function (t) {
    return Math.round(t * 1e7) / 1e7 || 0;
  },
  Ei = function (t, e) {
    var s = e.charAt(0),
      r = parseFloat(e.substr(2));
    return (
      (t = parseFloat(t)),
      s === "+" ? t + r : s === "-" ? t - r : s === "*" ? t * r : t / r
    );
  },
  Rm = function (t, e) {
    for (var s = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < s; );
    return r < s;
  },
  vn = function () {
    var t = Fe.length,
      e = Fe.slice(0),
      s,
      r;
    for (Hr = {}, Fe.length = 0, s = 0; s < t; s++)
      (r = e[s]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  Vh = function (t, e, s, r) {
    Fe.length && !Et && vn(),
      t.render(e, s, r || (Et && e < 0 && (t._initted || t._startAt))),
      Fe.length && !Et && vn();
  },
  Nh = function (t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match(Ah).length < 2
      ? e
      : wt(t)
      ? t.trim()
      : t;
  },
  zh = function (t) {
    return t;
  },
  Xt = function (t, e) {
    for (var s in e) s in t || (t[s] = e[s]);
    return t;
  },
  Im = function (t) {
    return function (e, s) {
      for (var r in s)
        r in e || (r === "duration" && t) || r === "ease" || (e[r] = s[r]);
    };
  },
  hi = function (t, e) {
    for (var s in e) t[s] = e[s];
    return t;
  },
  Dl = function n(t, e) {
    for (var s in e)
      s !== "__proto__" &&
        s !== "constructor" &&
        s !== "prototype" &&
        (t[s] = ne(e[s]) ? n(t[s] || (t[s] = {}), e[s]) : e[s]);
    return t;
  },
  gn = function (t, e) {
    var s = {},
      r;
    for (r in t) r in e || (s[r] = t[r]);
    return s;
  },
  _s = function (t) {
    var e = t.parent || ut,
      s = t.keyframes ? Im(Pt(t.keyframes)) : Xt;
    if (Ot(t.inherit))
      for (; e; ) s(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  },
  Bm = function (t, e) {
    for (var s = t.length, r = s === e.length; r && s-- && t[s] === e[s]; );
    return s < 0;
  },
  Hh = function (t, e, s, r, l) {
    s === void 0 && (s = "_first"), r === void 0 && (r = "_last");
    var u = t[r],
      c;
    if (l) for (c = e[l]; u && u[l] > c; ) u = u._prev;
    return (
      u ? ((e._next = u._next), (u._next = e)) : ((e._next = t[s]), (t[s] = e)),
      e._next ? (e._next._prev = e) : (t[r] = e),
      (e._prev = u),
      (e.parent = e._dp = t),
      e
    );
  },
  Mn = function (t, e, s, r) {
    s === void 0 && (s = "_first"), r === void 0 && (r = "_last");
    var l = e._prev,
      u = e._next;
    l ? (l._next = u) : t[s] === e && (t[s] = u),
      u ? (u._prev = l) : t[r] === e && (t[r] = l),
      (e._next = e._prev = e.parent = null);
  },
  Ve = function (t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
      (t._act = 0);
  },
  ri = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var s = t; s; ) (s._dirty = 1), (s = s.parent);
    return t;
  },
  Vm = function (t) {
    for (var e = t.parent; e && e.parent; )
      (e._dirty = 1), e.totalDuration(), (e = e.parent);
    return t;
  },
  Ur = function (t, e, s, r) {
    return (
      t._startAt &&
      (Et
        ? t._startAt.revert(un)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(e, !0, r))
    );
  },
  Nm = function n(t) {
    return !t || (t._ts && n(t.parent));
  },
  Cl = function (t) {
    return t._repeat ? Ti(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  Ti = function (t, e) {
    var s = Math.floor((t /= e));
    return t && s === t ? s - 1 : s;
  },
  bn = function (t, e) {
    return (
      (t - e._start) * e._ts +
      (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  },
  Tn = function (t) {
    return (t._end = Dt(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || lt) || 0)
    ));
  },
  An = function (t, e) {
    var s = t._dp;
    return (
      s &&
        s.smoothChildTiming &&
        t._ts &&
        ((t._start = Dt(
          s._time -
            (t._ts > 0
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        Tn(t),
        s._dirty || ri(s, t)),
      t
    );
  },
  Uh = function (t, e) {
    var s;
    if (
      ((e._time || (e._initted && !e._dur)) &&
        ((s = bn(t.rawTime(), e)),
        (!e._dur || Hs(0, e.totalDuration(), s) - e._tTime > lt) &&
          e.render(s, !0)),
      ri(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (s = t; s._dp; )
          s.rawTime() >= 0 && s.totalTime(s._tTime), (s = s._dp);
      t._zTime = -lt;
    }
  },
  ee = function (t, e, s, r) {
    return (
      e.parent && Ve(e),
      (e._start = Dt(
        (_e(s) ? s : s || t !== ut ? $t(t, s, e) : t._time) + e._delay
      )),
      (e._end = Dt(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      Hh(t, e, "_first", "_last", t._sort ? "_start" : 0),
      Kr(e) || (t._recent = e),
      r || Uh(t, e),
      t._ts < 0 && An(t, t._tTime),
      t
    );
  },
  Kh = function (t, e) {
    return (
      (zt.ScrollTrigger || yo("scrollTrigger", e)) &&
      zt.ScrollTrigger.create(e, t)
    );
  },
  jh = function (t, e, s, r, l) {
    if ((Eo(t, e, l), !t._initted)) return 1;
    if (
      !s &&
      t._pt &&
      !Et &&
      ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
      Ih !== Bt.frame
    )
      return Fe.push(t), (t._lazy = [l, r]), 1;
  },
  zm = function n(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || n(e));
  },
  Kr = function (t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart";
  },
  Hm = function (t, e, s, r) {
    var l = t.ratio,
      u =
        e < 0 ||
        (!e &&
          ((!t._start && zm(t) && !(!t._initted && Kr(t))) ||
            ((t._ts < 0 || t._dp._ts < 0) && !Kr(t))))
          ? 0
          : 1,
      c = t._rDelay,
      d = 0,
      p,
      m,
      _;
    if (
      (c &&
        t._repeat &&
        ((d = Hs(0, t._tDur, e)),
        (m = Ti(d, c)),
        t._yoyo && m & 1 && (u = 1 - u),
        m !== Ti(t._tTime, c) &&
          ((l = 1 - u), t.vars.repeatRefresh && t._initted && t.invalidate())),
      u !== l || Et || r || t._zTime === lt || (!e && t._zTime))
    ) {
      if (!t._initted && jh(t, e, r, s, d)) return;
      for (
        _ = t._zTime,
          t._zTime = e || (s ? lt : 0),
          s || (s = e && !_),
          t.ratio = u,
          t._from && (u = 1 - u),
          t._time = 0,
          t._tTime = d,
          p = t._pt;
        p;

      )
        p.r(u, p.d), (p = p._next);
      e < 0 && Ur(t, e, s, !0),
        t._onUpdate && !s && Yt(t, "onUpdate"),
        d && t._repeat && !s && t.parent && Yt(t, "onRepeat"),
        (e >= t._tDur || e < 0) &&
          t.ratio === u &&
          (u && Ve(t, 1),
          !s &&
            !Et &&
            (Yt(t, u ? "onComplete" : "onReverseComplete", !0),
            t._prom && t._prom()));
    } else t._zTime || (t._zTime = e);
  },
  Um = function (t, e, s) {
    var r;
    if (s > e)
      for (r = t._first; r && r._start <= s; ) {
        if (r.data === "isPause" && r._start > e) return r;
        r = r._next;
      }
    else
      for (r = t._last; r && r._start >= s; ) {
        if (r.data === "isPause" && r._start < e) return r;
        r = r._prev;
      }
  },
  Ai = function (t, e, s, r) {
    var l = t._repeat,
      u = Dt(e) || 0,
      c = t._tTime / t._tDur;
    return (
      c && !r && (t._time *= u / t._dur),
      (t._dur = u),
      (t._tDur = l ? (l < 0 ? 1e10 : Dt(u * (l + 1) + t._rDelay * l)) : u),
      c > 0 && !r && An(t, (t._tTime = t._tDur * c)),
      t.parent && Tn(t),
      s || ri(t.parent, t),
      t
    );
  },
  xl = function (t) {
    return t instanceof Tt ? ri(t) : Ai(t, t._dur);
  },
  Km = { _start: 0, endTime: ys, totalDuration: ys },
  $t = function n(t, e, s) {
    var r = t.labels,
      l = t._recent || Km,
      u = t.duration() >= Gt ? l.endTime(!1) : t._dur,
      c,
      d,
      p;
    return wt(e) && (isNaN(e) || e in r)
      ? ((d = e.charAt(0)),
        (p = e.substr(-1) === "%"),
        (c = e.indexOf("=")),
        d === "<" || d === ">"
          ? (c >= 0 && (e = e.replace(/=/, "")),
            (d === "<" ? l._start : l.endTime(l._repeat >= 0)) +
              (parseFloat(e.substr(1)) || 0) *
                (p ? (c < 0 ? l : s).totalDuration() / 100 : 1))
          : c < 0
          ? (e in r || (r[e] = u), r[e])
          : ((d = parseFloat(e.charAt(c - 1) + e.substr(c + 1))),
            p && s && (d = (d / 100) * (Pt(s) ? s[0] : s).totalDuration()),
            c > 1 ? n(t, e.substr(0, c - 1), s) + d : u + d))
      : e == null
      ? u
      : +e;
  },
  vs = function (t, e, s) {
    var r = _e(e[1]),
      l = (r ? 2 : 1) + (t < 2 ? 0 : 1),
      u = e[l],
      c,
      d;
    if ((r && (u.duration = e[1]), (u.parent = s), t)) {
      for (c = u, d = s; d && !("immediateRender" in c); )
        (c = d.vars.defaults || {}), (d = Ot(d.vars.inherit) && d.parent);
      (u.immediateRender = Ot(c.immediateRender)),
        t < 2 ? (u.runBackwards = 1) : (u.startAt = e[l - 1]);
    }
    return new gt(e[0], u, e[l + 1]);
  },
  je = function (t, e) {
    return t || t === 0 ? e(t) : e;
  },
  Hs = function (t, e, s) {
    return s < t ? t : s > e ? e : s;
  },
  St = function (t, e) {
    return !wt(t) || !(e = Am.exec(t)) ? "" : e[1];
  },
  jm = function (t, e, s) {
    return je(s, function (r) {
      return Hs(t, e, r);
    });
  },
  jr = [].slice,
  $h = function (t, e) {
    return (
      t &&
      ne(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && ne(t[0]))) &&
      !t.nodeType &&
      t !== qt
    );
  },
  $m = function (t, e, s) {
    return (
      s === void 0 && (s = []),
      t.forEach(function (r) {
        var l;
        return (wt(r) && !e) || $h(r, 1)
          ? (l = s).push.apply(l, Wt(r))
          : s.push(r);
      }) || s
    );
  },
  Wt = function (t, e, s) {
    return mt && !e && mt.selector
      ? mt.selector(t)
      : wt(t) && !s && (zr || !Oi())
      ? jr.call((e || wo).querySelectorAll(t), 0)
      : Pt(t)
      ? $m(t, s)
      : $h(t)
      ? jr.call(t, 0)
      : t
      ? [t]
      : [];
  },
  $r = function (t) {
    return (
      (t = Wt(t)[0] || _n("Invalid scope") || {}),
      function (e) {
        var s = t.current || t.nativeElement || t;
        return Wt(
          e,
          s.querySelectorAll
            ? s
            : s === t
            ? _n("Invalid scope") || wo.createElement("div")
            : t
        );
      }
    );
  },
  qh = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Gh = function (t) {
    if (dt(t)) return t;
    var e = ne(t) ? t : { each: t },
      s = oi(e.ease),
      r = e.from || 0,
      l = parseFloat(e.base) || 0,
      u = {},
      c = r > 0 && r < 1,
      d = isNaN(r) || c,
      p = e.axis,
      m = r,
      _ = r;
    return (
      wt(r)
        ? (m = _ = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !c && d && ((m = r[0]), (_ = r[1])),
      function (g, y, w) {
        var v = (w || e).length,
          D = u[v],
          S,
          C,
          P,
          k,
          A,
          O,
          L,
          T,
          M;
        if (!D) {
          if (((M = e.grid === "auto" ? 0 : (e.grid || [1, Gt])[1]), !M)) {
            for (
              L = -Gt;
              L < (L = w[M++].getBoundingClientRect().left) && M < v;

            );
            M--;
          }
          for (
            D = u[v] = [],
              S = d ? Math.min(M, v) * m - 0.5 : r % M,
              C = M === Gt ? 0 : d ? (v * _) / M - 0.5 : (r / M) | 0,
              L = 0,
              T = Gt,
              O = 0;
            O < v;
            O++
          )
            (P = (O % M) - S),
              (k = C - ((O / M) | 0)),
              (D[O] = A = p ? Math.abs(p === "y" ? k : P) : Ph(P * P + k * k)),
              A > L && (L = A),
              A < T && (T = A);
          r === "random" && qh(D),
            (D.max = L - T),
            (D.min = T),
            (D.v = v =
              (parseFloat(e.amount) ||
                parseFloat(e.each) *
                  (M > v
                    ? v - 1
                    : p
                    ? p === "y"
                      ? v / M
                      : M
                    : Math.max(M, v / M)) ||
                0) * (r === "edges" ? -1 : 1)),
            (D.b = v < 0 ? l - v : l),
            (D.u = St(e.amount || e.each) || 0),
            (s = s && v < 0 ? eu(s) : s);
        }
        return (
          (v = (D[g] - D.min) / D.max || 0),
          Dt(D.b + (s ? s(v) : v) * D.v) + D.u
        );
      }
    );
  },
  qr = function (t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (s) {
      var r = Dt(Math.round(parseFloat(s) / t) * t * e);
      return (r - (r % 1)) / e + (_e(s) ? 0 : St(s));
    };
  },
  Wh = function (t, e) {
    var s = Pt(t),
      r,
      l;
    return (
      !s &&
        ne(t) &&
        ((r = s = t.radius || Gt),
        t.values
          ? ((t = Wt(t.values)), (l = !_e(t[0])) && (r *= r))
          : (t = qr(t.increment))),
      je(
        e,
        s
          ? dt(t)
            ? function (u) {
                return (l = t(u)), Math.abs(l - u) <= r ? l : u;
              }
            : function (u) {
                for (
                  var c = parseFloat(l ? u.x : u),
                    d = parseFloat(l ? u.y : 0),
                    p = Gt,
                    m = 0,
                    _ = t.length,
                    g,
                    y;
                  _--;

                )
                  l
                    ? ((g = t[_].x - c), (y = t[_].y - d), (g = g * g + y * y))
                    : (g = Math.abs(t[_] - c)),
                    g < p && ((p = g), (m = _));
                return (
                  (m = !r || p <= r ? t[m] : u),
                  l || m === u || _e(u) ? m : m + St(u)
                );
              }
          : qr(t)
      )
    );
  },
  Yh = function (t, e, s, r) {
    return je(Pt(t) ? !e : s === !0 ? !!(s = 0) : !r, function () {
      return Pt(t)
        ? t[~~(Math.random() * t.length)]
        : (s = s || 1e-5) &&
            (r = s < 1 ? Math.pow(10, (s + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - s / 2 + Math.random() * (e - t + s * 0.99)) / s) *
                s *
                r
            ) / r;
    });
  },
  qm = function () {
    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
      e[s] = arguments[s];
    return function (r) {
      return e.reduce(function (l, u) {
        return u(l);
      }, r);
    };
  },
  Gm = function (t, e) {
    return function (s) {
      return t(parseFloat(s)) + (e || St(s));
    };
  },
  Wm = function (t, e, s) {
    return Jh(t, e, 0, 1, s);
  },
  Xh = function (t, e, s) {
    return je(s, function (r) {
      return t[~~e(r)];
    });
  },
  Ym = function n(t, e, s) {
    var r = e - t;
    return Pt(t)
      ? Xh(t, n(0, t.length), e)
      : je(s, function (l) {
          return ((r + ((l - t) % r)) % r) + t;
        });
  },
  Xm = function n(t, e, s) {
    var r = e - t,
      l = r * 2;
    return Pt(t)
      ? Xh(t, n(0, t.length - 1), e)
      : je(s, function (u) {
          return (u = (l + ((u - t) % l)) % l || 0), t + (u > r ? l - u : u);
        });
  },
  Ds = function (t) {
    for (var e = 0, s = "", r, l, u, c; ~(r = t.indexOf("random(", e)); )
      (u = t.indexOf(")", r)),
        (c = t.charAt(r + 7) === "["),
        (l = t.substr(r + 7, u - r - 7).match(c ? Ah : Nr)),
        (s +=
          t.substr(e, r - e) + Yh(c ? l : +l[0], c ? 0 : +l[1], +l[2] || 1e-5)),
        (e = u + 1);
    return s + t.substr(e, t.length - e);
  },
  Jh = function (t, e, s, r, l) {
    var u = e - t,
      c = r - s;
    return je(l, function (d) {
      return s + (((d - t) / u) * c || 0);
    });
  },
  Jm = function n(t, e, s, r) {
    var l = isNaN(t + e)
      ? 0
      : function (y) {
          return (1 - y) * t + y * e;
        };
    if (!l) {
      var u = wt(t),
        c = {},
        d,
        p,
        m,
        _,
        g;
      if ((s === !0 && (r = 1) && (s = null), u))
        (t = { p: t }), (e = { p: e });
      else if (Pt(t) && !Pt(e)) {
        for (m = [], _ = t.length, g = _ - 2, p = 1; p < _; p++)
          m.push(n(t[p - 1], t[p]));
        _--,
          (l = function (w) {
            w *= _;
            var v = Math.min(g, ~~w);
            return m[v](w - v);
          }),
          (s = e);
      } else r || (t = hi(Pt(t) ? [] : {}, t));
      if (!m) {
        for (d in e) So.call(c, t, d, "get", e[d]);
        l = function (w) {
          return Lo(w, c) || (u ? t.p : t);
        };
      }
    }
    return je(s, l);
  },
  Sl = function (t, e, s) {
    var r = t.labels,
      l = Gt,
      u,
      c,
      d;
    for (u in r)
      (c = r[u] - e),
        c < 0 == !!s && c && l > (c = Math.abs(c)) && ((d = u), (l = c));
    return d;
  },
  Yt = function (t, e, s) {
    var r = t.vars,
      l = r[e],
      u = mt,
      c = t._ctx,
      d,
      p,
      m;
    if (l)
      return (
        (d = r[e + "Params"]),
        (p = r.callbackScope || t),
        s && Fe.length && vn(),
        c && (mt = c),
        (m = d ? l.apply(p, d) : l.call(p)),
        (mt = u),
        m
      );
  },
  ps = function (t) {
    return (
      Ve(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!Et),
      t.progress() < 1 && Yt(t, "onInterrupt"),
      t
    );
  },
  xi,
  Zm = function (t) {
    t = (!t.name && t.default) || t;
    var e = t.name,
      s = dt(t),
      r =
        e && !s && t.init
          ? function () {
              this._props = [];
            }
          : t,
      l = { init: ys, render: Lo, add: So, kill: f_, modifier: p_, rawVars: 0 },
      u = { targetTest: 0, get: 0, getSetter: ko, aliases: {}, register: 0 };
    if ((Oi(), t !== r)) {
      if (It[e]) return;
      Xt(r, Xt(gn(t, l), u)),
        hi(r.prototype, hi(l, gn(t, u))),
        (It[(r.prop = e)] = r),
        t.targetTest && (cn.push(r), (Do[e] = 1)),
        (e =
          (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
          "Plugin");
    }
    Rh(e, r), t.register && t.register(Ht, r, Rt);
  },
  at = 255,
  fs = {
    aqua: [0, at, at],
    lime: [0, at, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, at],
    navy: [0, 0, 128],
    white: [at, at, at],
    olive: [128, 128, 0],
    yellow: [at, at, 0],
    orange: [at, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [at, 0, 0],
    pink: [at, 192, 203],
    cyan: [0, at, at],
    transparent: [at, at, at, 0]
  },
  yr = function (t, e, s) {
    return (
      (t += t < 0 ? 1 : t > 1 ? -1 : 0),
      ((t * 6 < 1
        ? e + (s - e) * t * 6
        : t < 0.5
        ? s
        : t * 3 < 2
        ? e + (s - e) * (2 / 3 - t) * 6
        : e) *
        at +
        0.5) |
        0
    );
  },
  Zh = function (t, e, s) {
    var r = t ? (_e(t) ? [t >> 16, (t >> 8) & at, t & at] : 0) : fs.black,
      l,
      u,
      c,
      d,
      p,
      m,
      _,
      g,
      y,
      w;
    if (!r) {
      if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), fs[t]))
        r = fs[t];
      else if (t.charAt(0) === "#") {
        if (
          (t.length < 6 &&
            ((l = t.charAt(1)),
            (u = t.charAt(2)),
            (c = t.charAt(3)),
            (t =
              "#" +
              l +
              l +
              u +
              u +
              c +
              c +
              (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
          t.length === 9)
        )
          return (
            (r = parseInt(t.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & at, r & at, parseInt(t.substr(7), 16) / 255]
          );
        (t = parseInt(t.substr(1), 16)), (r = [t >> 16, (t >> 8) & at, t & at]);
      } else if (t.substr(0, 3) === "hsl") {
        if (((r = w = t.match(Nr)), !e))
          (d = (+r[0] % 360) / 360),
            (p = +r[1] / 100),
            (m = +r[2] / 100),
            (u = m <= 0.5 ? m * (p + 1) : m + p - m * p),
            (l = m * 2 - u),
            r.length > 3 && (r[3] *= 1),
            (r[0] = yr(d + 1 / 3, l, u)),
            (r[1] = yr(d, l, u)),
            (r[2] = yr(d - 1 / 3, l, u));
        else if (~t.indexOf("="))
          return (r = t.match(Mh)), s && r.length < 4 && (r[3] = 1), r;
      } else r = t.match(Nr) || fs.transparent;
      r = r.map(Number);
    }
    return (
      e &&
        !w &&
        ((l = r[0] / at),
        (u = r[1] / at),
        (c = r[2] / at),
        (_ = Math.max(l, u, c)),
        (g = Math.min(l, u, c)),
        (m = (_ + g) / 2),
        _ === g
          ? (d = p = 0)
          : ((y = _ - g),
            (p = m > 0.5 ? y / (2 - _ - g) : y / (_ + g)),
            (d =
              _ === l
                ? (u - c) / y + (u < c ? 6 : 0)
                : _ === u
                ? (c - l) / y + 2
                : (l - u) / y + 4),
            (d *= 60)),
        (r[0] = ~~(d + 0.5)),
        (r[1] = ~~(p * 100 + 0.5)),
        (r[2] = ~~(m * 100 + 0.5))),
      s && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Qh = function (t) {
    var e = [],
      s = [],
      r = -1;
    return (
      t.split(Re).forEach(function (l) {
        var u = l.match(Ci) || [];
        e.push.apply(e, u), s.push((r += u.length + 1));
      }),
      (e.c = s),
      e
    );
  },
  El = function (t, e, s) {
    var r = "",
      l = (t + r).match(Re),
      u = e ? "hsla(" : "rgba(",
      c = 0,
      d,
      p,
      m,
      _;
    if (!l) return t;
    if (
      ((l = l.map(function (g) {
        return (
          (g = Zh(g, e, 1)) &&
          u +
            (e ? g[0] + "," + g[1] + "%," + g[2] + "%," + g[3] : g.join(",")) +
            ")"
        );
      })),
      s && ((m = Qh(t)), (d = s.c), d.join(r) !== m.c.join(r)))
    )
      for (p = t.replace(Re, "1").split(Ci), _ = p.length - 1; c < _; c++)
        r +=
          p[c] +
          (~d.indexOf(c)
            ? l.shift() || u + "0,0,0,0)"
            : (m.length ? m : l.length ? l : s).shift());
    if (!p)
      for (p = t.split(Re), _ = p.length - 1; c < _; c++) r += p[c] + l[c];
    return r + p[_];
  },
  Re = (function () {
    var n =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      t;
    for (t in fs) n += "|" + t + "\\b";
    return new RegExp(n + ")", "gi");
  })(),
  Qm = /hsl[a]?\(/,
  tu = function (t) {
    var e = t.join(" "),
      s;
    if (((Re.lastIndex = 0), Re.test(e)))
      return (
        (s = Qm.test(e)),
        (t[1] = El(t[1], s)),
        (t[0] = El(t[0], s, Qh(t[1]))),
        !0
      );
  },
  Cs,
  Bt = (function () {
    var n = Date.now,
      t = 500,
      e = 33,
      s = n(),
      r = s,
      l = 1e3 / 240,
      u = l,
      c = [],
      d,
      p,
      m,
      _,
      g,
      y,
      w = function v(D) {
        var S = n() - r,
          C = D === !0,
          P,
          k,
          A,
          O;
        if (
          (S > t && (s += S - e),
          (r += S),
          (A = r - s),
          (P = A - u),
          (P > 0 || C) &&
            ((O = ++_.frame),
            (g = A - _.time * 1e3),
            (_.time = A = A / 1e3),
            (u += P + (P >= l ? 4 : l - P)),
            (k = 1)),
          C || (d = p(v)),
          k)
        )
          for (y = 0; y < c.length; y++) c[y](A, g, O, D);
      };
    return (
      (_ = {
        time: 0,
        frame: 0,
        tick: function () {
          w(!0);
        },
        deltaRatio: function (D) {
          return g / (1e3 / (D || 60));
        },
        wake: function () {
          Oh &&
            (!zr &&
              kh() &&
              ((qt = zr = window),
              (wo = qt.document || {}),
              (zt.gsap = Ht),
              (qt.gsapVersions || (qt.gsapVersions = [])).push(Ht.version),
              Fh(mn || qt.GreenSockGlobals || (!qt.gsap && qt) || {}),
              (m = qt.requestAnimationFrame)),
            d && _.sleep(),
            (p =
              m ||
              function (D) {
                return setTimeout(D, (u - _.time * 1e3 + 1) | 0);
              }),
            (Cs = 1),
            w(2));
        },
        sleep: function () {
          (m ? qt.cancelAnimationFrame : clearTimeout)(d), (Cs = 0), (p = ys);
        },
        lagSmoothing: function (D, S) {
          (t = D || 1 / 0), (e = Math.min(S || 33, t));
        },
        fps: function (D) {
          (l = 1e3 / (D || 240)), (u = _.time * 1e3 + l);
        },
        add: function (D, S, C) {
          var P = S
            ? function (k, A, O, L) {
                D(k, A, O, L), _.remove(P);
              }
            : D;
          return _.remove(D), c[C ? "unshift" : "push"](P), Oi(), P;
        },
        remove: function (D, S) {
          ~(S = c.indexOf(D)) && c.splice(S, 1) && y >= S && y--;
        },
        _listeners: c
      }),
      _
    );
  })(),
  Oi = function () {
    return !Cs && Bt.wake();
  },
  st = {},
  t_ = /^[\d.\-M][\d.\-,\s]/,
  e_ = /["']/g,
  i_ = function (t) {
    for (
      var e = {},
        s = t.substr(1, t.length - 3).split(":"),
        r = s[0],
        l = 1,
        u = s.length,
        c,
        d,
        p;
      l < u;
      l++
    )
      (d = s[l]),
        (c = l !== u - 1 ? d.lastIndexOf(",") : d.length),
        (p = d.substr(0, c)),
        (e[r] = isNaN(p) ? p.replace(e_, "").trim() : +p),
        (r = d.substr(c + 1).trim());
    return e;
  },
  s_ = function (t) {
    var e = t.indexOf("(") + 1,
      s = t.indexOf(")"),
      r = t.indexOf("(", e);
    return t.substring(e, ~r && r < s ? t.indexOf(")", s + 1) : s);
  },
  n_ = function (t) {
    var e = (t + "").split("("),
      s = st[e[0]];
    return s && e.length > 1 && s.config
      ? s.config.apply(
          null,
          ~t.indexOf("{") ? [i_(e[1])] : s_(t).split(",").map(Nh)
        )
      : st._CE && t_.test(t)
      ? st._CE("", t)
      : s;
  },
  eu = function (t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
  iu = function n(t, e) {
    for (var s = t._first, r; s; )
      s instanceof Tt
        ? n(s, e)
        : s.vars.yoyoEase &&
          (!s._yoyo || !s._repeat) &&
          s._yoyo !== e &&
          (s.timeline
            ? n(s.timeline, e)
            : ((r = s._ease),
              (s._ease = s._yEase),
              (s._yEase = r),
              (s._yoyo = e))),
        (s = s._next);
  },
  oi = function (t, e) {
    return (t && (dt(t) ? t : st[t] || n_(t))) || e;
  },
  ci = function (t, e, s, r) {
    s === void 0 &&
      (s = function (d) {
        return 1 - e(1 - d);
      }),
      r === void 0 &&
        (r = function (d) {
          return d < 0.5 ? e(d * 2) / 2 : 1 - e((1 - d) * 2) / 2;
        });
    var l = { easeIn: e, easeOut: s, easeInOut: r },
      u;
    return (
      Ft(t, function (c) {
        (st[c] = zt[c] = l), (st[(u = c.toLowerCase())] = s);
        for (var d in l)
          st[
            u + (d === "easeIn" ? ".in" : d === "easeOut" ? ".out" : ".inOut")
          ] = st[c + "." + d] = l[d];
      }),
      l
    );
  },
  su = function (t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
    };
  },
  Dr = function n(t, e, s) {
    var r = e >= 1 ? e : 1,
      l = (s || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
      u = (l / Vr) * (Math.asin(1 / r) || 0),
      c = function (m) {
        return m === 1 ? 1 : r * Math.pow(2, -10 * m) * Tm((m - u) * l) + 1;
      },
      d =
        t === "out"
          ? c
          : t === "in"
          ? function (p) {
              return 1 - c(1 - p);
            }
          : su(c);
    return (
      (l = Vr / l),
      (d.config = function (p, m) {
        return n(t, p, m);
      }),
      d
    );
  },
  Cr = function n(t, e) {
    e === void 0 && (e = 1.70158);
    var s = function (u) {
        return u ? --u * u * ((e + 1) * u + e) + 1 : 0;
      },
      r =
        t === "out"
          ? s
          : t === "in"
          ? function (l) {
              return 1 - s(1 - l);
            }
          : su(s);
    return (
      (r.config = function (l) {
        return n(t, l);
      }),
      r
    );
  };
Ft("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, t) {
  var e = t < 5 ? t + 1 : t;
  ci(
    n + ",Power" + (e - 1),
    t
      ? function (s) {
          return Math.pow(s, e);
        }
      : function (s) {
          return s;
        },
    function (s) {
      return 1 - Math.pow(1 - s, e);
    },
    function (s) {
      return s < 0.5
        ? Math.pow(s * 2, e) / 2
        : 1 - Math.pow((1 - s) * 2, e) / 2;
    }
  );
});
st.Linear.easeNone = st.none = st.Linear.easeIn;
ci("Elastic", Dr("in"), Dr("out"), Dr());
(function (n, t) {
  var e = 1 / t,
    s = 2 * e,
    r = 2.5 * e,
    l = function (c) {
      return c < e
        ? n * c * c
        : c < s
        ? n * Math.pow(c - 1.5 / t, 2) + 0.75
        : c < r
        ? n * (c -= 2.25 / t) * c + 0.9375
        : n * Math.pow(c - 2.625 / t, 2) + 0.984375;
    };
  ci(
    "Bounce",
    function (u) {
      return 1 - l(1 - u);
    },
    l
  );
})(7.5625, 2.75);
ci("Expo", function (n) {
  return n ? Math.pow(2, 10 * (n - 1)) : 0;
});
ci("Circ", function (n) {
  return -(Ph(1 - n * n) - 1);
});
ci("Sine", function (n) {
  return n === 1 ? 1 : -Mm(n * km) + 1;
});
ci("Back", Cr("in"), Cr("out"), Cr());
st.SteppedEase =
  st.steps =
  zt.SteppedEase =
    {
      config: function (t, e) {
        t === void 0 && (t = 1);
        var s = 1 / t,
          r = t + (e ? 0 : 1),
          l = e ? 1 : 0,
          u = 1 - lt;
        return function (c) {
          return (((r * Hs(0, u, c)) | 0) + l) * s;
        };
      }
    };
Mi.ease = st["quad.out"];
Ft(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (n) {
    return (Co += n + "," + n + "Params,");
  }
);
var nu = function (t, e) {
    (this.id = Lm++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = e),
      (this.get = e ? e.get : Bh),
      (this.set = e ? e.getSetter : ko);
  },
  Fi = (function () {
    function n(e) {
      (this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        Ai(this, +e.duration, 1, 1),
        (this.data = e.data),
        mt && ((this._ctx = mt), mt.data.push(this)),
        Cs || Bt.wake();
    }
    var t = n.prototype;
    return (
      (t.delay = function (s) {
        return s || s === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + s - this._delay),
            (this._delay = s),
            this)
          : this._delay;
      }),
      (t.duration = function (s) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? s + (s + this._rDelay) * this._repeat : s
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (s) {
        return arguments.length
          ? ((this._dirty = 0),
            Ai(
              this,
              this._repeat < 0
                ? s
                : (s - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (t.totalTime = function (s, r) {
        if ((Oi(), !arguments.length)) return this._tTime;
        var l = this._dp;
        if (l && l.smoothChildTiming && this._ts) {
          for (An(this, s), !l._dp || l.parent || Uh(l, this); l && l.parent; )
            l.parent._time !==
              l._start +
                (l._ts >= 0
                  ? l._tTime / l._ts
                  : (l.totalDuration() - l._tTime) / -l._ts) &&
              l.totalTime(l._tTime, !0),
              (l = l.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && s < this._tDur) ||
              (this._ts < 0 && s > 0) ||
              (!this._tDur && !s)) &&
            ee(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== s ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === lt) ||
            (!s && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = s), Vh(this, s, r)),
          this
        );
      }),
      (t.time = function (s, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), s + Cl(this)) %
                (this._dur + this._rDelay) || (s ? this._dur : 0),
              r
            )
          : this._time;
      }),
      (t.totalProgress = function (s, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * s, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (t.progress = function (s, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - s : s) +
                Cl(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (t.iteration = function (s, r) {
        var l = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (s - 1) * l, r)
          : this._repeat
          ? Ti(this._tTime, l) + 1
          : 1;
      }),
      (t.timeScale = function (s) {
        if (!arguments.length) return this._rts === -lt ? 0 : this._rts;
        if (this._rts === s) return this;
        var r =
          this.parent && this._ts ? bn(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +s || 0),
          (this._ts = this._ps || s === -lt ? 0 : this._rts),
          this.totalTime(Hs(-this._delay, this._tDur, r), !0),
          Tn(this),
          Vm(this)
        );
      }),
      (t.paused = function (s) {
        return arguments.length
          ? (this._ps !== s &&
              ((this._ps = s),
              s
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Oi(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== lt &&
                      (this._tTime -= lt)
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (s) {
        if (arguments.length) {
          this._start = s;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && ee(r, this, s - this._delay), this
          );
        }
        return this._start;
      }),
      (t.endTime = function (s) {
        return (
          this._start +
          (Ot(s) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (s) {
        var r = this.parent || this._dp;
        return r
          ? s &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? bn(r.rawTime(s), this)
            : this._tTime
          : this._tTime;
      }),
      (t.revert = function (s) {
        s === void 0 && (s = Fm);
        var r = Et;
        return (
          (Et = s),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(s),
            this.totalTime(-0.01, s.suppressEvents)),
          this.data !== "nested" && s.kill !== !1 && this.kill(),
          (Et = r),
          this
        );
      }),
      (t.globalTime = function (s) {
        for (var r = this, l = arguments.length ? s : r.rawTime(); r; )
          (l = r._start + l / (r._ts || 1)), (r = r._dp);
        return !this.parent && this._sat
          ? this._sat.vars.immediateRender
            ? -1
            : this._sat.globalTime(s)
          : l;
      }),
      (t.repeat = function (s) {
        return arguments.length
          ? ((this._repeat = s === 1 / 0 ? -2 : s), xl(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (t.repeatDelay = function (s) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = s), xl(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (t.yoyo = function (s) {
        return arguments.length ? ((this._yoyo = s), this) : this._yoyo;
      }),
      (t.seek = function (s, r) {
        return this.totalTime($t(this, s), Ot(r));
      }),
      (t.restart = function (s, r) {
        return this.play().totalTime(s ? -this._delay : 0, Ot(r));
      }),
      (t.play = function (s, r) {
        return s != null && this.seek(s, r), this.reversed(!1).paused(!1);
      }),
      (t.reverse = function (s, r) {
        return (
          s != null && this.seek(s || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (s, r) {
        return s != null && this.seek(s, r), this.paused(!0);
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (s) {
        return arguments.length
          ? (!!s !== this.reversed() &&
              this.timeScale(-this._rts || (s ? -lt : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -lt), this;
      }),
      (t.isActive = function () {
        var s = this.parent || this._dp,
          r = this._start,
          l;
        return !!(
          !s ||
          (this._ts &&
            this._initted &&
            s.isActive() &&
            (l = s.rawTime(!0)) >= r &&
            l < this.endTime(!0) - lt)
        );
      }),
      (t.eventCallback = function (s, r, l) {
        var u = this.vars;
        return arguments.length > 1
          ? (r
              ? ((u[s] = r),
                l && (u[s + "Params"] = l),
                s === "onUpdate" && (this._onUpdate = r))
              : delete u[s],
            this)
          : u[s];
      }),
      (t.then = function (s) {
        var r = this;
        return new Promise(function (l) {
          var u = dt(s) ? s : zh,
            c = function () {
              var p = r.then;
              (r.then = null),
                dt(u) && (u = u(r)) && (u.then || u === r) && (r.then = p),
                l(u),
                (r.then = p);
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? c()
            : (r._prom = c);
        });
      }),
      (t.kill = function () {
        ps(this);
      }),
      n
    );
  })();
Xt(Fi.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -lt,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Tt = (function (n) {
  Eh(t, n);
  function t(s, r) {
    var l;
    return (
      s === void 0 && (s = {}),
      (l = n.call(this, s) || this),
      (l.labels = {}),
      (l.smoothChildTiming = !!s.smoothChildTiming),
      (l.autoRemoveChildren = !!s.autoRemoveChildren),
      (l._sort = Ot(s.sortChildren)),
      ut && ee(s.parent || ut, ce(l), r),
      s.reversed && l.reverse(),
      s.paused && l.paused(!0),
      s.scrollTrigger && Kh(ce(l), s.scrollTrigger),
      l
    );
  }
  var e = t.prototype;
  return (
    (e.to = function (r, l, u) {
      return vs(0, arguments, this), this;
    }),
    (e.from = function (r, l, u) {
      return vs(1, arguments, this), this;
    }),
    (e.fromTo = function (r, l, u, c) {
      return vs(2, arguments, this), this;
    }),
    (e.set = function (r, l, u) {
      return (
        (l.duration = 0),
        (l.parent = this),
        _s(l).repeatDelay || (l.repeat = 0),
        (l.immediateRender = !!l.immediateRender),
        new gt(r, l, $t(this, u), 1),
        this
      );
    }),
    (e.call = function (r, l, u) {
      return ee(this, gt.delayedCall(0, r, l), u);
    }),
    (e.staggerTo = function (r, l, u, c, d, p, m) {
      return (
        (u.duration = l),
        (u.stagger = u.stagger || c),
        (u.onComplete = p),
        (u.onCompleteParams = m),
        (u.parent = this),
        new gt(r, u, $t(this, d)),
        this
      );
    }),
    (e.staggerFrom = function (r, l, u, c, d, p, m) {
      return (
        (u.runBackwards = 1),
        (_s(u).immediateRender = Ot(u.immediateRender)),
        this.staggerTo(r, l, u, c, d, p, m)
      );
    }),
    (e.staggerFromTo = function (r, l, u, c, d, p, m, _) {
      return (
        (c.startAt = u),
        (_s(c).immediateRender = Ot(c.immediateRender)),
        this.staggerTo(r, l, c, d, p, m, _)
      );
    }),
    (e.render = function (r, l, u) {
      var c = this._time,
        d = this._dirty ? this.totalDuration() : this._tDur,
        p = this._dur,
        m = r <= 0 ? 0 : Dt(r),
        _ = this._zTime < 0 != r < 0 && (this._initted || !p),
        g,
        y,
        w,
        v,
        D,
        S,
        C,
        P,
        k,
        A,
        O,
        L;
      if (
        (this !== ut && m > d && r >= 0 && (m = d), m !== this._tTime || u || _)
      ) {
        if (
          (c !== this._time &&
            p &&
            ((m += this._time - c), (r += this._time - c)),
          (g = m),
          (k = this._start),
          (P = this._ts),
          (S = !P),
          _ && (p || (c = this._zTime), (r || !l) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((O = this._yoyo),
            (D = p + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(D * 100 + r, l, u);
          if (
            ((g = Dt(m % D)),
            m === d
              ? ((v = this._repeat), (g = p))
              : ((v = ~~(m / D)),
                v && v === m / D && ((g = p), v--),
                g > p && (g = p)),
            (A = Ti(this._tTime, D)),
            !c && this._tTime && A !== v && (A = v),
            O && v & 1 && ((g = p - g), (L = 1)),
            v !== A && !this._lock)
          ) {
            var T = O && A & 1,
              M = T === (O && v & 1);
            if (
              (v < A && (T = !T),
              (c = T ? 0 : p),
              (this._lock = 1),
              (this.render(c || (L ? 0 : Dt(v * D)), l, !p)._lock = 0),
              (this._tTime = m),
              !l && this.parent && Yt(this, "onRepeat"),
              this.vars.repeatRefresh && !L && (this.invalidate()._lock = 1),
              (c && c !== this._time) ||
                S !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((p = this._dur),
              (d = this._tDur),
              M &&
                ((this._lock = 2),
                (c = T ? p : -1e-4),
                this.render(c, !0),
                this.vars.repeatRefresh && !L && this.invalidate()),
              (this._lock = 0),
              !this._ts && !S)
            )
              return this;
            iu(this, L);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((C = Um(this, Dt(c), Dt(g))), C && (m -= g - (g = C._start))),
          (this._tTime = m),
          (this._time = g),
          (this._act = !P),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (c = 0)),
          !c && g && !l && (Yt(this, "onStart"), this._tTime !== m))
        )
          return this;
        if (g >= c && r >= 0)
          for (y = this._first; y; ) {
            if (
              ((w = y._next), (y._act || g >= y._start) && y._ts && C !== y)
            ) {
              if (y.parent !== this) return this.render(r, l, u);
              if (
                (y.render(
                  y._ts > 0
                    ? (g - y._start) * y._ts
                    : (y._dirty ? y.totalDuration() : y._tDur) +
                        (g - y._start) * y._ts,
                  l,
                  u
                ),
                g !== this._time || (!this._ts && !S))
              ) {
                (C = 0), w && (m += this._zTime = -lt);
                break;
              }
            }
            y = w;
          }
        else {
          y = this._last;
          for (var B = r < 0 ? r : g; y; ) {
            if (((w = y._prev), (y._act || B <= y._end) && y._ts && C !== y)) {
              if (y.parent !== this) return this.render(r, l, u);
              if (
                (y.render(
                  y._ts > 0
                    ? (B - y._start) * y._ts
                    : (y._dirty ? y.totalDuration() : y._tDur) +
                        (B - y._start) * y._ts,
                  l,
                  u || (Et && (y._initted || y._startAt))
                ),
                g !== this._time || (!this._ts && !S))
              ) {
                (C = 0), w && (m += this._zTime = B ? -lt : lt);
                break;
              }
            }
            y = w;
          }
        }
        if (
          C &&
          !l &&
          (this.pause(),
          (C.render(g >= c ? 0 : -lt)._zTime = g >= c ? 1 : -1),
          this._ts)
        )
          return (this._start = k), Tn(this), this.render(r, l, u);
        this._onUpdate && !l && Yt(this, "onUpdate", !0),
          ((m === d && this._tTime >= this.totalDuration()) || (!m && c)) &&
            (k === this._start || Math.abs(P) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !p) &&
                ((m === d && this._ts > 0) || (!m && this._ts < 0)) &&
                Ve(this, 1),
              !l &&
                !(r < 0 && !c) &&
                (m || c || !d) &&
                (Yt(
                  this,
                  m === d && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(m < d && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (e.add = function (r, l) {
      var u = this;
      if ((_e(l) || (l = $t(this, l, r)), !(r instanceof Fi))) {
        if (Pt(r))
          return (
            r.forEach(function (c) {
              return u.add(c, l);
            }),
            this
          );
        if (wt(r)) return this.addLabel(r, l);
        if (dt(r)) r = gt.delayedCall(0, r);
        else return this;
      }
      return this !== r ? ee(this, r, l) : this;
    }),
    (e.getChildren = function (r, l, u, c) {
      r === void 0 && (r = !0),
        l === void 0 && (l = !0),
        u === void 0 && (u = !0),
        c === void 0 && (c = -Gt);
      for (var d = [], p = this._first; p; )
        p._start >= c &&
          (p instanceof gt
            ? l && d.push(p)
            : (u && d.push(p), r && d.push.apply(d, p.getChildren(!0, l, u)))),
          (p = p._next);
      return d;
    }),
    (e.getById = function (r) {
      for (var l = this.getChildren(1, 1, 1), u = l.length; u--; )
        if (l[u].vars.id === r) return l[u];
    }),
    (e.remove = function (r) {
      return wt(r)
        ? this.removeLabel(r)
        : dt(r)
        ? this.killTweensOf(r)
        : (Mn(this, r),
          r === this._recent && (this._recent = this._last),
          ri(this));
    }),
    (e.totalTime = function (r, l) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Dt(
              Bt.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          n.prototype.totalTime.call(this, r, l),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (e.addLabel = function (r, l) {
      return (this.labels[r] = $t(this, l)), this;
    }),
    (e.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (e.addPause = function (r, l, u) {
      var c = gt.delayedCall(0, l || ys, u);
      return (
        (c.data = "isPause"), (this._hasPause = 1), ee(this, c, $t(this, r))
      );
    }),
    (e.removePause = function (r) {
      var l = this._first;
      for (r = $t(this, r); l; )
        l._start === r && l.data === "isPause" && Ve(l), (l = l._next);
    }),
    (e.killTweensOf = function (r, l, u) {
      for (var c = this.getTweensOf(r, u), d = c.length; d--; )
        Te !== c[d] && c[d].kill(r, l);
      return this;
    }),
    (e.getTweensOf = function (r, l) {
      for (var u = [], c = Wt(r), d = this._first, p = _e(l), m; d; )
        d instanceof gt
          ? Rm(d._targets, c) &&
            (p
              ? (!Te || (d._initted && d._ts)) &&
                d.globalTime(0) <= l &&
                d.globalTime(d.totalDuration()) > l
              : !l || d.isActive()) &&
            u.push(d)
          : (m = d.getTweensOf(c, l)).length && u.push.apply(u, m),
          (d = d._next);
      return u;
    }),
    (e.tweenTo = function (r, l) {
      l = l || {};
      var u = this,
        c = $t(u, r),
        d = l,
        p = d.startAt,
        m = d.onStart,
        _ = d.onStartParams,
        g = d.immediateRender,
        y,
        w = gt.to(
          u,
          Xt(
            {
              ease: l.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: c,
              overwrite: "auto",
              duration:
                l.duration ||
                Math.abs(
                  (c - (p && "time" in p ? p.time : u._time)) / u.timeScale()
                ) ||
                lt,
              onStart: function () {
                if ((u.pause(), !y)) {
                  var D =
                    l.duration ||
                    Math.abs(
                      (c - (p && "time" in p ? p.time : u._time)) /
                        u.timeScale()
                    );
                  w._dur !== D && Ai(w, D, 0, 1).render(w._time, !0, !0),
                    (y = 1);
                }
                m && m.apply(w, _ || []);
              }
            },
            l
          )
        );
      return g ? w.render(0) : w;
    }),
    (e.tweenFromTo = function (r, l, u) {
      return this.tweenTo(l, Xt({ startAt: { time: $t(this, r) } }, u));
    }),
    (e.recent = function () {
      return this._recent;
    }),
    (e.nextLabel = function (r) {
      return r === void 0 && (r = this._time), Sl(this, $t(this, r));
    }),
    (e.previousLabel = function (r) {
      return r === void 0 && (r = this._time), Sl(this, $t(this, r), 1);
    }),
    (e.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + lt);
    }),
    (e.shiftChildren = function (r, l, u) {
      u === void 0 && (u = 0);
      for (var c = this._first, d = this.labels, p; c; )
        c._start >= u && ((c._start += r), (c._end += r)), (c = c._next);
      if (l) for (p in d) d[p] >= u && (d[p] += r);
      return ri(this);
    }),
    (e.invalidate = function (r) {
      var l = this._first;
      for (this._lock = 0; l; ) l.invalidate(r), (l = l._next);
      return n.prototype.invalidate.call(this, r);
    }),
    (e.clear = function (r) {
      r === void 0 && (r = !0);
      for (var l = this._first, u; l; ) (u = l._next), this.remove(l), (l = u);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        ri(this)
      );
    }),
    (e.totalDuration = function (r) {
      var l = 0,
        u = this,
        c = u._last,
        d = Gt,
        p,
        m,
        _;
      if (arguments.length)
        return u.timeScale(
          (u._repeat < 0 ? u.duration() : u.totalDuration()) /
            (u.reversed() ? -r : r)
        );
      if (u._dirty) {
        for (_ = u.parent; c; )
          (p = c._prev),
            c._dirty && c.totalDuration(),
            (m = c._start),
            m > d && u._sort && c._ts && !u._lock
              ? ((u._lock = 1), (ee(u, c, m - c._delay, 1)._lock = 0))
              : (d = m),
            m < 0 &&
              c._ts &&
              ((l -= m),
              ((!_ && !u._dp) || (_ && _.smoothChildTiming)) &&
                ((u._start += m / u._ts), (u._time -= m), (u._tTime -= m)),
              u.shiftChildren(-m, !1, -1 / 0),
              (d = 0)),
            c._end > l && c._ts && (l = c._end),
            (c = p);
        Ai(u, u === ut && u._time > l ? u._time : l, 1, 1), (u._dirty = 0);
      }
      return u._tDur;
    }),
    (t.updateRoot = function (r) {
      if ((ut._ts && (Vh(ut, bn(r, ut)), (Ih = Bt.frame)), Bt.frame >= yl)) {
        yl += Vt.autoSleep || 120;
        var l = ut._first;
        if ((!l || !l._ts) && Vt.autoSleep && Bt._listeners.length < 2) {
          for (; l && !l._ts; ) l = l._next;
          l || Bt.sleep();
        }
      }
    }),
    t
  );
})(Fi);
Xt(Tt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var r_ = function (t, e, s, r, l, u, c) {
    var d = new Rt(this._pt, t, e, 0, 1, uu, null, l),
      p = 0,
      m = 0,
      _,
      g,
      y,
      w,
      v,
      D,
      S,
      C;
    for (
      d.b = s,
        d.e = r,
        s += "",
        r += "",
        (S = ~r.indexOf("random(")) && (r = Ds(r)),
        u && ((C = [s, r]), u(C, t, e), (s = C[0]), (r = C[1])),
        g = s.match(br) || [];
      (_ = br.exec(r));

    )
      (w = _[0]),
        (v = r.substring(p, _.index)),
        y ? (y = (y + 1) % 5) : v.substr(-5) === "rgba(" && (y = 1),
        w !== g[m++] &&
          ((D = parseFloat(g[m - 1]) || 0),
          (d._pt = {
            _next: d._pt,
            p: v || m === 1 ? v : ",",
            s: D,
            c: w.charAt(1) === "=" ? Ei(D, w) - D : parseFloat(w) - D,
            m: y && y < 4 ? Math.round : 0
          }),
          (p = br.lastIndex));
    return (
      (d.c = p < r.length ? r.substring(p, r.length) : ""),
      (d.fp = c),
      (Th.test(r) || S) && (d.e = 0),
      (this._pt = d),
      d
    );
  },
  So = function (t, e, s, r, l, u, c, d, p, m) {
    dt(r) && (r = r(l || 0, t, u));
    var _ = t[e],
      g =
        s !== "get"
          ? s
          : dt(_)
          ? p
            ? t[
                e.indexOf("set") || !dt(t["get" + e.substr(3)])
                  ? e
                  : "get" + e.substr(3)
              ](p)
            : t[e]()
          : _,
      y = dt(_) ? (p ? u_ : lu) : Po,
      w;
    if (
      (wt(r) &&
        (~r.indexOf("random(") && (r = Ds(r)),
        r.charAt(1) === "=" &&
          ((w = Ei(g, r) + (St(g) || 0)), (w || w === 0) && (r = w))),
      !m || g !== r || Gr)
    )
      return !isNaN(g * r) && r !== ""
        ? ((w = new Rt(
            this._pt,
            t,
            e,
            +g || 0,
            r - (g || 0),
            typeof _ == "boolean" ? d_ : hu,
            0,
            y
          )),
          p && (w.fp = p),
          c && w.modifier(c, this, t),
          (this._pt = w))
        : (!_ && !(e in t) && yo(e, r),
          r_.call(this, t, e, g, r, y, d || Vt.stringFilter, p));
  },
  o_ = function (t, e, s, r, l) {
    if (
      (dt(t) && (t = gs(t, l, e, s, r)),
      !ne(t) || (t.style && t.nodeType) || Pt(t) || Lh(t))
    )
      return wt(t) ? gs(t, l, e, s, r) : t;
    var u = {},
      c;
    for (c in t) u[c] = gs(t[c], l, e, s, r);
    return u;
  },
  ru = function (t, e, s, r, l, u) {
    var c, d, p, m;
    if (
      It[t] &&
      (c = new It[t]()).init(
        l,
        c.rawVars ? e[t] : o_(e[t], r, l, u, s),
        s,
        r,
        u
      ) !== !1 &&
      ((s._pt = d = new Rt(s._pt, l, t, 0, 1, c.render, c, 0, c.priority)),
      s !== xi)
    )
      for (p = s._ptLookup[s._targets.indexOf(l)], m = c._props.length; m--; )
        p[c._props[m]] = d;
    return c;
  },
  Te,
  Gr,
  Eo = function n(t, e, s) {
    var r = t.vars,
      l = r.ease,
      u = r.startAt,
      c = r.immediateRender,
      d = r.lazy,
      p = r.onUpdate,
      m = r.onUpdateParams,
      _ = r.callbackScope,
      g = r.runBackwards,
      y = r.yoyoEase,
      w = r.keyframes,
      v = r.autoRevert,
      D = t._dur,
      S = t._startAt,
      C = t._targets,
      P = t.parent,
      k = P && P.data === "nested" ? P.vars.targets : C,
      A = t._overwrite === "auto" && !go,
      O = t.timeline,
      L,
      T,
      M,
      B,
      V,
      G,
      j,
      et,
      $,
      H,
      U,
      N,
      F;
    if (
      (O && (!w || !l) && (l = "none"),
      (t._ease = oi(l, Mi.ease)),
      (t._yEase = y ? eu(oi(y === !0 ? l : y, Mi.ease)) : 0),
      y &&
        t._yoyo &&
        !t._repeat &&
        ((y = t._yEase), (t._yEase = t._ease), (t._ease = y)),
      (t._from = !O && !!r.runBackwards),
      !O || (w && !r.stagger))
    ) {
      if (
        ((et = C[0] ? ni(C[0]).harness : 0),
        (N = et && r[et.prop]),
        (L = gn(r, Do)),
        S &&
          (S._zTime < 0 && S.progress(1),
          e < 0 && g && c && !v ? S.render(-1, !0) : S.revert(g && D ? un : Om),
          (S._lazy = 0)),
        u)
      ) {
        if (
          (Ve(
            (t._startAt = gt.set(
              C,
              Xt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: P,
                  immediateRender: !0,
                  lazy: !S && Ot(d),
                  startAt: null,
                  delay: 0,
                  onUpdate: p,
                  onUpdateParams: m,
                  callbackScope: _,
                  stagger: 0
                },
                u
              )
            ))
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (Et || (!c && !v)) && t._startAt.revert(un),
          c && D && e <= 0 && s <= 0)
        ) {
          e && (t._zTime = e);
          return;
        }
      } else if (g && D && !S) {
        if (
          (e && (c = !1),
          (M = Xt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: c && !S && Ot(d),
              immediateRender: c,
              stagger: 0,
              parent: P
            },
            L
          )),
          N && (M[et.prop] = N),
          Ve((t._startAt = gt.set(C, M))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (Et ? t._startAt.revert(un) : t._startAt.render(-1, !0)),
          (t._zTime = e),
          !c)
        )
          n(t._startAt, lt, lt);
        else if (!e) return;
      }
      for (
        t._pt = t._ptCache = 0, d = (D && Ot(d)) || (d && !D), T = 0;
        T < C.length;
        T++
      ) {
        if (
          ((V = C[T]),
          (j = V._gsap || xo(C)[T]._gsap),
          (t._ptLookup[T] = H = {}),
          Hr[j.id] && Fe.length && vn(),
          (U = k === C ? T : k.indexOf(V)),
          et &&
            ($ = new et()).init(V, N || L, t, U, k) !== !1 &&
            ((t._pt = B =
              new Rt(t._pt, V, $.name, 0, 1, $.render, $, 0, $.priority)),
            $._props.forEach(function (X) {
              H[X] = B;
            }),
            $.priority && (G = 1)),
          !et || N)
        )
          for (M in L)
            It[M] && ($ = ru(M, L, t, U, V, k))
              ? $.priority && (G = 1)
              : (H[M] = B =
                  So.call(t, V, M, "get", L[M], U, k, 0, r.stringFilter));
        t._op && t._op[T] && t.kill(V, t._op[T]),
          A &&
            t._pt &&
            ((Te = t),
            ut.killTweensOf(V, H, t.globalTime(e)),
            (F = !t.parent),
            (Te = 0)),
          t._pt && d && (Hr[j.id] = 1);
      }
      G && cu(t), t._onInit && t._onInit(t);
    }
    (t._onUpdate = p),
      (t._initted = (!t._op || t._pt) && !F),
      w && e <= 0 && O.render(Gt, !0, !0);
  },
  a_ = function (t, e, s, r, l, u, c) {
    var d = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
      p,
      m,
      _,
      g;
    if (!d)
      for (
        d = t._ptCache[e] = [], _ = t._ptLookup, g = t._targets.length;
        g--;

      ) {
        if (((p = _[g][e]), p && p.d && p.d._pt))
          for (p = p.d._pt; p && p.p !== e && p.fp !== e; ) p = p._next;
        if (!p) return (Gr = 1), (t.vars[e] = "+=0"), Eo(t, c), (Gr = 0), 1;
        d.push(p);
      }
    for (g = d.length; g--; )
      (m = d[g]),
        (p = m._pt || m),
        (p.s = (r || r === 0) && !l ? r : p.s + (r || 0) + u * p.c),
        (p.c = s - p.s),
        m.e && (m.e = pt(s) + St(m.e)),
        m.b && (m.b = p.s + St(m.b));
  },
  l_ = function (t, e) {
    var s = t[0] ? ni(t[0]).harness : 0,
      r = s && s.aliases,
      l,
      u,
      c,
      d;
    if (!r) return e;
    l = hi({}, e);
    for (u in r)
      if (u in l) for (d = r[u].split(","), c = d.length; c--; ) l[d[c]] = l[u];
    return l;
  },
  h_ = function (t, e, s, r) {
    var l = e.ease || r || "power1.inOut",
      u,
      c;
    if (Pt(e))
      (c = s[t] || (s[t] = [])),
        e.forEach(function (d, p) {
          return c.push({ t: (p / (e.length - 1)) * 100, v: d, e: l });
        });
    else
      for (u in e)
        (c = s[u] || (s[u] = [])),
          u === "ease" || c.push({ t: parseFloat(t), v: e[u], e: l });
  },
  gs = function (t, e, s, r, l) {
    return dt(t)
      ? t.call(e, s, r, l)
      : wt(t) && ~t.indexOf("random(")
      ? Ds(t)
      : t;
  },
  ou = Co + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  au = {};
Ft(ou + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
  return (au[n] = 1);
});
var gt = (function (n) {
  Eh(t, n);
  function t(s, r, l, u) {
    var c;
    typeof r == "number" && ((l.duration = r), (r = l), (l = null)),
      (c = n.call(this, u ? r : _s(r)) || this);
    var d = c.vars,
      p = d.duration,
      m = d.delay,
      _ = d.immediateRender,
      g = d.stagger,
      y = d.overwrite,
      w = d.keyframes,
      v = d.defaults,
      D = d.scrollTrigger,
      S = d.yoyoEase,
      C = r.parent || ut,
      P = (Pt(s) || Lh(s) ? _e(s[0]) : "length" in r) ? [s] : Wt(s),
      k,
      A,
      O,
      L,
      T,
      M,
      B,
      V;
    if (
      ((c._targets = P.length
        ? xo(P)
        : _n(
            "GSAP target " + s + " not found. https://greensock.com",
            !Vt.nullTargetWarn
          ) || []),
      (c._ptLookup = []),
      (c._overwrite = y),
      w || g || nn(p) || nn(m))
    ) {
      if (
        ((r = c.vars),
        (k = c.timeline =
          new Tt({
            data: "nested",
            defaults: v || {},
            targets: C && C.data === "nested" ? C.vars.targets : P
          })),
        k.kill(),
        (k.parent = k._dp = ce(c)),
        (k._start = 0),
        g || nn(p) || nn(m))
      ) {
        if (((L = P.length), (B = g && Gh(g)), ne(g)))
          for (T in g) ~ou.indexOf(T) && (V || (V = {}), (V[T] = g[T]));
        for (A = 0; A < L; A++)
          (O = gn(r, au)),
            (O.stagger = 0),
            S && (O.yoyoEase = S),
            V && hi(O, V),
            (M = P[A]),
            (O.duration = +gs(p, ce(c), A, M, P)),
            (O.delay = (+gs(m, ce(c), A, M, P) || 0) - c._delay),
            !g &&
              L === 1 &&
              O.delay &&
              ((c._delay = m = O.delay), (c._start += m), (O.delay = 0)),
            k.to(M, O, B ? B(A, M, P) : 0),
            (k._ease = st.none);
        k.duration() ? (p = m = 0) : (c.timeline = 0);
      } else if (w) {
        _s(Xt(k.vars.defaults, { ease: "none" })),
          (k._ease = oi(w.ease || r.ease || "none"));
        var G = 0,
          j,
          et,
          $;
        if (Pt(w))
          w.forEach(function (H) {
            return k.to(P, H, ">");
          }),
            k.duration();
        else {
          O = {};
          for (T in w)
            T === "ease" || T === "easeEach" || h_(T, w[T], O, w.easeEach);
          for (T in O)
            for (
              j = O[T].sort(function (H, U) {
                return H.t - U.t;
              }),
                G = 0,
                A = 0;
              A < j.length;
              A++
            )
              (et = j[A]),
                ($ = {
                  ease: et.e,
                  duration: ((et.t - (A ? j[A - 1].t : 0)) / 100) * p
                }),
                ($[T] = et.v),
                k.to(P, $, G),
                (G += $.duration);
          k.duration() < p && k.to({}, { duration: p - k.duration() });
        }
      }
      p || c.duration((p = k.duration()));
    } else c.timeline = 0;
    return (
      y === !0 && !go && ((Te = ce(c)), ut.killTweensOf(P), (Te = 0)),
      ee(C, ce(c), l),
      r.reversed && c.reverse(),
      r.paused && c.paused(!0),
      (_ ||
        (!p &&
          !w &&
          c._start === Dt(C._time) &&
          Ot(_) &&
          Nm(ce(c)) &&
          C.data !== "nested")) &&
        ((c._tTime = -lt), c.render(Math.max(0, -m) || 0)),
      D && Kh(ce(c), D),
      c
    );
  }
  var e = t.prototype;
  return (
    (e.render = function (r, l, u) {
      var c = this._time,
        d = this._tDur,
        p = this._dur,
        m = r < 0,
        _ = r > d - lt && !m ? d : r < lt ? 0 : r,
        g,
        y,
        w,
        v,
        D,
        S,
        C,
        P,
        k;
      if (!p) Hm(this, r, l, u);
      else if (
        _ !== this._tTime ||
        !r ||
        u ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== m)
      ) {
        if (((g = _), (P = this.timeline), this._repeat)) {
          if (((v = p + this._rDelay), this._repeat < -1 && m))
            return this.totalTime(v * 100 + r, l, u);
          if (
            ((g = Dt(_ % v)),
            _ === d
              ? ((w = this._repeat), (g = p))
              : ((w = ~~(_ / v)),
                w && w === _ / v && ((g = p), w--),
                g > p && (g = p)),
            (S = this._yoyo && w & 1),
            S && ((k = this._yEase), (g = p - g)),
            (D = Ti(this._tTime, v)),
            g === c && !u && this._initted)
          )
            return (this._tTime = _), this;
          w !== D &&
            (P && this._yEase && iu(P, S),
            this.vars.repeatRefresh &&
              !S &&
              !this._lock &&
              ((this._lock = u = 1),
              (this.render(Dt(v * w), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (jh(this, m ? r : g, u, l, _)) return (this._tTime = 0), this;
          if (c !== this._time) return this;
          if (p !== this._dur) return this.render(r, l, u);
        }
        if (
          ((this._tTime = _),
          (this._time = g),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = C = (k || this._ease)(g / p)),
          this._from && (this.ratio = C = 1 - C),
          g && !c && !l && (Yt(this, "onStart"), this._tTime !== _))
        )
          return this;
        for (y = this._pt; y; ) y.r(C, y.d), (y = y._next);
        (P &&
          P.render(
            r < 0 ? r : !g && S ? -lt : P._dur * P._ease(g / this._dur),
            l,
            u
          )) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !l &&
            (m && Ur(this, r, l, u), Yt(this, "onUpdate")),
          this._repeat &&
            w !== D &&
            this.vars.onRepeat &&
            !l &&
            this.parent &&
            Yt(this, "onRepeat"),
          (_ === this._tDur || !_) &&
            this._tTime === _ &&
            (m && !this._onUpdate && Ur(this, r, !0, !0),
            (r || !p) &&
              ((_ === this._tDur && this._ts > 0) || (!_ && this._ts < 0)) &&
              Ve(this, 1),
            !l &&
              !(m && !c) &&
              (_ || c || S) &&
              (Yt(this, _ === d ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(_ < d && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (e.targets = function () {
      return this._targets;
    }),
    (e.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        n.prototype.invalidate.call(this, r)
      );
    }),
    (e.resetTo = function (r, l, u, c) {
      Cs || Bt.wake(), this._ts || this.play();
      var d = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        p;
      return (
        this._initted || Eo(this, d),
        (p = this._ease(d / this._dur)),
        a_(this, r, l, u, c, p, d)
          ? this.resetTo(r, l, u, c)
          : (An(this, 0),
            this.parent ||
              Hh(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (e.kill = function (r, l) {
      if ((l === void 0 && (l = "all"), !r && (!l || l === "all")))
        return (this._lazy = this._pt = 0), this.parent ? ps(this) : this;
      if (this.timeline) {
        var u = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, l, Te && Te.vars.overwrite !== !0)
            ._first || ps(this),
          this.parent &&
            u !== this.timeline.totalDuration() &&
            Ai(this, (this._dur * this.timeline._tDur) / u, 0, 1),
          this
        );
      }
      var c = this._targets,
        d = r ? Wt(r) : c,
        p = this._ptLookup,
        m = this._pt,
        _,
        g,
        y,
        w,
        v,
        D,
        S;
      if ((!l || l === "all") && Bm(c, d))
        return l === "all" && (this._pt = 0), ps(this);
      for (
        _ = this._op = this._op || [],
          l !== "all" &&
            (wt(l) &&
              ((v = {}),
              Ft(l, function (C) {
                return (v[C] = 1);
              }),
              (l = v)),
            (l = l_(c, l))),
          S = c.length;
        S--;

      )
        if (~d.indexOf(c[S])) {
          (g = p[S]),
            l === "all"
              ? ((_[S] = l), (w = g), (y = {}))
              : ((y = _[S] = _[S] || {}), (w = l));
          for (v in w)
            (D = g && g[v]),
              D &&
                ((!("kill" in D.d) || D.d.kill(v) === !0) && Mn(this, D, "_pt"),
                delete g[v]),
              y !== "all" && (y[v] = 1);
        }
      return this._initted && !this._pt && m && ps(this), this;
    }),
    (t.to = function (r, l) {
      return new t(r, l, arguments[2]);
    }),
    (t.from = function (r, l) {
      return vs(1, arguments);
    }),
    (t.delayedCall = function (r, l, u, c) {
      return new t(l, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: l,
        onReverseComplete: l,
        onCompleteParams: u,
        onReverseCompleteParams: u,
        callbackScope: c
      });
    }),
    (t.fromTo = function (r, l, u) {
      return vs(2, arguments);
    }),
    (t.set = function (r, l) {
      return (l.duration = 0), l.repeatDelay || (l.repeat = 0), new t(r, l);
    }),
    (t.killTweensOf = function (r, l, u) {
      return ut.killTweensOf(r, l, u);
    }),
    t
  );
})(Fi);
Xt(gt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Ft("staggerTo,staggerFrom,staggerFromTo", function (n) {
  gt[n] = function () {
    var t = new Tt(),
      e = jr.call(arguments, 0);
    return e.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), t[n].apply(t, e);
  };
});
var Po = function (t, e, s) {
    return (t[e] = s);
  },
  lu = function (t, e, s) {
    return t[e](s);
  },
  u_ = function (t, e, s, r) {
    return t[e](r.fp, s);
  },
  c_ = function (t, e, s) {
    return t.setAttribute(e, s);
  },
  ko = function (t, e) {
    return dt(t[e]) ? lu : bo(t[e]) && t.setAttribute ? c_ : Po;
  },
  hu = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
  },
  d_ = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
  uu = function (t, e) {
    var s = e._pt,
      r = "";
    if (!t && e.b) r = e.b;
    else if (t === 1 && e.e) r = e.e;
    else {
      for (; s; )
        (r =
          s.p +
          (s.m ? s.m(s.s + s.c * t) : Math.round((s.s + s.c * t) * 1e4) / 1e4) +
          r),
          (s = s._next);
      r += e.c;
    }
    e.set(e.t, e.p, r, e);
  },
  Lo = function (t, e) {
    for (var s = e._pt; s; ) s.r(t, s.d), (s = s._next);
  },
  p_ = function (t, e, s, r) {
    for (var l = this._pt, u; l; )
      (u = l._next), l.p === r && l.modifier(t, e, s), (l = u);
  },
  f_ = function (t) {
    for (var e = this._pt, s, r; e; )
      (r = e._next),
        (e.p === t && !e.op) || e.op === t
          ? Mn(this, e, "_pt")
          : e.dep || (s = 1),
        (e = r);
    return !s;
  },
  m_ = function (t, e, s, r) {
    r.mSet(t, e, r.m.call(r.tween, s, r.mt), r);
  },
  cu = function (t) {
    for (var e = t._pt, s, r, l, u; e; ) {
      for (s = e._next, r = l; r && r.pr > e.pr; ) r = r._next;
      (e._prev = r ? r._prev : u) ? (e._prev._next = e) : (l = e),
        (e._next = r) ? (r._prev = e) : (u = e),
        (e = s);
    }
    t._pt = l;
  },
  Rt = (function () {
    function n(e, s, r, l, u, c, d, p, m) {
      (this.t = s),
        (this.s = l),
        (this.c = u),
        (this.p = r),
        (this.r = c || hu),
        (this.d = d || this),
        (this.set = p || Po),
        (this.pr = m || 0),
        (this._next = e),
        e && (e._prev = this);
    }
    var t = n.prototype;
    return (
      (t.modifier = function (s, r, l) {
        (this.mSet = this.mSet || this.set),
          (this.set = m_),
          (this.m = s),
          (this.mt = l),
          (this.tween = r);
      }),
      n
    );
  })();
Ft(
  Co +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (n) {
    return (Do[n] = 1);
  }
);
zt.TweenMax = zt.TweenLite = gt;
zt.TimelineLite = zt.TimelineMax = Tt;
ut = new Tt({
  sortChildren: !1,
  defaults: Mi,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Vt.stringFilter = tu;
var Ri = [],
  dn = {},
  __ = [],
  Pl = 0,
  xr = function (t) {
    return (dn[t] || __).map(function (e) {
      return e();
    });
  },
  Wr = function () {
    var t = Date.now(),
      e = [];
    t - Pl > 2 &&
      (xr("matchMediaInit"),
      Ri.forEach(function (s) {
        var r = s.queries,
          l = s.conditions,
          u,
          c,
          d,
          p;
        for (c in r)
          (u = qt.matchMedia(r[c]).matches),
            u && (d = 1),
            u !== l[c] && ((l[c] = u), (p = 1));
        p && (s.revert(), d && e.push(s));
      }),
      xr("matchMediaRevert"),
      e.forEach(function (s) {
        return s.onMatch(s);
      }),
      (Pl = t),
      xr("matchMedia"));
  },
  du = (function () {
    function n(e, s) {
      (this.selector = s && $r(s)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        e && this.add(e);
    }
    var t = n.prototype;
    return (
      (t.add = function (s, r, l) {
        dt(s) && ((l = r), (r = s), (s = dt));
        var u = this,
          c = function () {
            var p = mt,
              m = u.selector,
              _;
            return (
              p && p !== u && p.data.push(u),
              l && (u.selector = $r(l)),
              (mt = u),
              (_ = r.apply(u, arguments)),
              dt(_) && u._r.push(_),
              (mt = p),
              (u.selector = m),
              (u.isReverted = !1),
              _
            );
          };
        return (u.last = c), s === dt ? c(u) : s ? (u[s] = c) : c;
      }),
      (t.ignore = function (s) {
        var r = mt;
        (mt = null), s(this), (mt = r);
      }),
      (t.getTweens = function () {
        var s = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof n
              ? s.push.apply(s, r.getTweens())
              : r instanceof gt &&
                  !(r.parent && r.parent.data === "nested") &&
                  s.push(r);
          }),
          s
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (s, r) {
        var l = this;
        if (s) {
          var u = this.getTweens();
          this.data.forEach(function (d) {
            d.data === "isFlip" &&
              (d.revert(),
              d.getChildren(!0, !0, !1).forEach(function (p) {
                return u.splice(u.indexOf(p), 1);
              }));
          }),
            u
              .map(function (d) {
                return { g: d.globalTime(0), t: d };
              })
              .sort(function (d, p) {
                return p.g - d.g || -1;
              })
              .forEach(function (d) {
                return d.t.revert(s);
              }),
            this.data.forEach(function (d) {
              return !(d instanceof Fi) && d.revert && d.revert(s);
            }),
            this._r.forEach(function (d) {
              return d(s, l);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (d) {
            return d.kill && d.kill();
          });
        if ((this.clear(), r)) {
          var c = Ri.indexOf(this);
          ~c && Ri.splice(c, 1);
        }
      }),
      (t.revert = function (s) {
        this.kill(s || {});
      }),
      n
    );
  })(),
  v_ = (function () {
    function n(e) {
      (this.contexts = []), (this.scope = e);
    }
    var t = n.prototype;
    return (
      (t.add = function (s, r, l) {
        ne(s) || (s = { matches: s });
        var u = new du(0, l || this.scope),
          c = (u.conditions = {}),
          d,
          p,
          m;
        this.contexts.push(u), (r = u.add("onMatch", r)), (u.queries = s);
        for (p in s)
          p === "all"
            ? (m = 1)
            : ((d = qt.matchMedia(s[p])),
              d &&
                (Ri.indexOf(u) < 0 && Ri.push(u),
                (c[p] = d.matches) && (m = 1),
                d.addListener
                  ? d.addListener(Wr)
                  : d.addEventListener("change", Wr)));
        return m && r(u), this;
      }),
      (t.revert = function (s) {
        this.kill(s || {});
      }),
      (t.kill = function (s) {
        this.contexts.forEach(function (r) {
          return r.kill(s, !0);
        });
      }),
      n
    );
  })(),
  wn = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
        e[s] = arguments[s];
      e.forEach(function (r) {
        return Zm(r);
      });
    },
    timeline: function (t) {
      return new Tt(t);
    },
    getTweensOf: function (t, e) {
      return ut.getTweensOf(t, e);
    },
    getProperty: function (t, e, s, r) {
      wt(t) && (t = Wt(t)[0]);
      var l = ni(t || {}).get,
        u = s ? zh : Nh;
      return (
        s === "native" && (s = ""),
        t &&
          (e
            ? u(((It[e] && It[e].get) || l)(t, e, s, r))
            : function (c, d, p) {
                return u(((It[c] && It[c].get) || l)(t, c, d, p));
              })
      );
    },
    quickSetter: function (t, e, s) {
      if (((t = Wt(t)), t.length > 1)) {
        var r = t.map(function (m) {
            return Ht.quickSetter(m, e, s);
          }),
          l = r.length;
        return function (m) {
          for (var _ = l; _--; ) r[_](m);
        };
      }
      t = t[0] || {};
      var u = It[e],
        c = ni(t),
        d = (c.harness && (c.harness.aliases || {})[e]) || e,
        p = u
          ? function (m) {
              var _ = new u();
              (xi._pt = 0),
                _.init(t, s ? m + s : m, xi, 0, [t]),
                _.render(1, _),
                xi._pt && Lo(1, xi);
            }
          : c.set(t, d);
      return u
        ? p
        : function (m) {
            return p(t, d, s ? m + s : m, c, 1);
          };
    },
    quickTo: function (t, e, s) {
      var r,
        l = Ht.to(
          t,
          hi(((r = {}), (r[e] = "+=0.1"), (r.paused = !0), r), s || {})
        ),
        u = function (d, p, m) {
          return l.resetTo(e, d, p, m);
        };
      return (u.tween = l), u;
    },
    isTweening: function (t) {
      return ut.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = oi(t.ease, Mi.ease)), Dl(Mi, t || {});
    },
    config: function (t) {
      return Dl(Vt, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        s = t.effect,
        r = t.plugins,
        l = t.defaults,
        u = t.extendTimeline;
      (r || "").split(",").forEach(function (c) {
        return (
          c && !It[c] && !zt[c] && _n(e + " effect requires " + c + " plugin.")
        );
      }),
        (wr[e] = function (c, d, p) {
          return s(Wt(c), Xt(d || {}, l), p);
        }),
        u &&
          (Tt.prototype[e] = function (c, d, p) {
            return this.add(wr[e](c, ne(d) ? d : (p = d) && {}, this), p);
          });
    },
    registerEase: function (t, e) {
      st[t] = oi(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? oi(t, e) : st;
    },
    getById: function (t) {
      return ut.getById(t);
    },
    exportRoot: function (t, e) {
      t === void 0 && (t = {});
      var s = new Tt(t),
        r,
        l;
      for (
        s.smoothChildTiming = Ot(t.smoothChildTiming),
          ut.remove(s),
          s._dp = 0,
          s._time = s._tTime = ut._time,
          r = ut._first;
        r;

      )
        (l = r._next),
          (e ||
            !(
              !r._dur &&
              r instanceof gt &&
              r.vars.onComplete === r._targets[0]
            )) &&
            ee(s, r, r._start - r._delay),
          (r = l);
      return ee(ut, s, 0), s;
    },
    context: function (t, e) {
      return t ? new du(t, e) : mt;
    },
    matchMedia: function (t) {
      return new v_(t);
    },
    matchMediaRefresh: function () {
      return (
        Ri.forEach(function (t) {
          var e = t.conditions,
            s,
            r;
          for (r in e) e[r] && ((e[r] = !1), (s = 1));
          s && t.revert();
        }) || Wr()
      );
    },
    addEventListener: function (t, e) {
      var s = dn[t] || (dn[t] = []);
      ~s.indexOf(e) || s.push(e);
    },
    removeEventListener: function (t, e) {
      var s = dn[t],
        r = s && s.indexOf(e);
      r >= 0 && s.splice(r, 1);
    },
    utils: {
      wrap: Ym,
      wrapYoyo: Xm,
      distribute: Gh,
      random: Yh,
      snap: Wh,
      normalize: Wm,
      getUnit: St,
      clamp: jm,
      splitColor: Zh,
      toArray: Wt,
      selector: $r,
      mapRange: Jh,
      pipe: qm,
      unitize: Gm,
      interpolate: Jm,
      shuffle: qh
    },
    install: Fh,
    effects: wr,
    ticker: Bt,
    updateRoot: Tt.updateRoot,
    plugins: It,
    globalTimeline: ut,
    core: {
      PropTween: Rt,
      globals: Rh,
      Tween: gt,
      Timeline: Tt,
      Animation: Fi,
      getCache: ni,
      _removeLinkedListItem: Mn,
      reverting: function () {
        return Et;
      },
      context: function (t) {
        return t && mt && (mt.data.push(t), (t._ctx = mt)), mt;
      },
      suppressOverwrites: function (t) {
        return (go = t);
      }
    }
  };
Ft("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
  return (wn[n] = gt[n]);
});
Bt.add(Tt.updateRoot);
xi = wn.to({}, { duration: 0 });
var g_ = function (t, e) {
    for (var s = t._pt; s && s.p !== e && s.op !== e && s.fp !== e; )
      s = s._next;
    return s;
  },
  b_ = function (t, e) {
    var s = t._targets,
      r,
      l,
      u;
    for (r in e)
      for (l = s.length; l--; )
        (u = t._ptLookup[l][r]),
          u &&
            (u = u.d) &&
            (u._pt && (u = g_(u, r)),
            u && u.modifier && u.modifier(e[r], t, s[l], r));
  },
  Sr = function (t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function (r, l, u) {
        u._onInit = function (c) {
          var d, p;
          if (
            (wt(l) &&
              ((d = {}),
              Ft(l, function (m) {
                return (d[m] = 1);
              }),
              (l = d)),
            e)
          ) {
            d = {};
            for (p in l) d[p] = e(l[p]);
            l = d;
          }
          b_(c, l);
        };
      }
    };
  },
  Ht =
    wn.registerPlugin(
      {
        name: "attr",
        init: function (t, e, s, r, l) {
          var u, c, d;
          this.tween = s;
          for (u in e)
            (d = t.getAttribute(u) || ""),
              (c = this.add(
                t,
                "setAttribute",
                (d || 0) + "",
                e[u],
                r,
                l,
                0,
                0,
                u
              )),
              (c.op = u),
              (c.b = d),
              this._props.push(u);
        },
        render: function (t, e) {
          for (var s = e._pt; s; )
            Et ? s.set(s.t, s.p, s.b, s) : s.r(t, s.d), (s = s._next);
        }
      },
      {
        name: "endArray",
        init: function (t, e) {
          for (var s = e.length; s--; )
            this.add(t, s, t[s] || 0, e[s], 0, 0, 0, 0, 0, 1);
        }
      },
      Sr("roundProps", qr),
      Sr("modifiers"),
      Sr("snap", Wh)
    ) || wn;
gt.version = Tt.version = Ht.version = "3.11.4";
Oh = 1;
kh() && Oi();
st.Power0;
st.Power1;
st.Power2;
st.Power3;
st.Power4;
st.Linear;
st.Quad;
st.Cubic;
st.Quart;
st.Quint;
st.Strong;
st.Elastic;
st.Back;
st.SteppedEase;
st.Bounce;
st.Sine;
st.Expo;
st.Circ;
/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var kl,
  Ae,
  Pi,
  Mo,
  si,
  Ll,
  To,
  w_ = function () {
    return typeof window < "u";
  },
  ve = {},
  ii = 180 / Math.PI,
  ki = Math.PI / 180,
  Di = Math.atan2,
  Ml = 1e8,
  Ao = /([A-Z])/g,
  y_ = /(left|right|width|margin|padding|x)/i,
  D_ = /[\s,\(]\S/,
  pe = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
  Yr = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
  },
  C_ = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
      e
    );
  },
  x_ = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
      e
    );
  },
  S_ = function (t, e) {
    var s = e.s + e.c * t;
    e.set(e.t, e.p, ~~(s + (s < 0 ? -0.5 : 0.5)) + e.u, e);
  },
  pu = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
  fu = function (t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
  },
  E_ = function (t, e, s) {
    return (t.style[e] = s);
  },
  P_ = function (t, e, s) {
    return t.style.setProperty(e, s);
  },
  k_ = function (t, e, s) {
    return (t._gsap[e] = s);
  },
  L_ = function (t, e, s) {
    return (t._gsap.scaleX = t._gsap.scaleY = s);
  },
  M_ = function (t, e, s, r, l) {
    var u = t._gsap;
    (u.scaleX = u.scaleY = s), u.renderTransform(l, u);
  },
  T_ = function (t, e, s, r, l) {
    var u = t._gsap;
    (u[e] = s), u.renderTransform(l, u);
  },
  ct = "transform",
  Jt = ct + "Origin",
  A_ = function (t, e) {
    var s = this,
      r = this.target,
      l = r.style;
    if (t in ve) {
      if (
        ((this.tfm = this.tfm || {}),
        t !== "transform" &&
          ((t = pe[t] || t),
          ~t.indexOf(",")
            ? t.split(",").forEach(function (u) {
                return (s.tfm[u] = de(r, u));
              })
            : (this.tfm[t] = r._gsap.x ? r._gsap[t] : de(r, t))),
        this.props.indexOf(ct) >= 0)
      )
        return;
      r._gsap.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(Jt, e, "")),
        (t = ct);
    }
    (l || e) && this.props.push(t, e, l[t]);
  },
  mu = function (t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  },
  O_ = function () {
    var t = this.props,
      e = this.target,
      s = e.style,
      r = e._gsap,
      l,
      u;
    for (l = 0; l < t.length; l += 3)
      t[l + 1]
        ? (e[t[l]] = t[l + 2])
        : t[l + 2]
        ? (s[t[l]] = t[l + 2])
        : s.removeProperty(t[l].replace(Ao, "-$1").toLowerCase());
    if (this.tfm) {
      for (u in this.tfm) r[u] = this.tfm[u];
      r.svg &&
        (r.renderTransform(),
        e.setAttribute("data-svg-origin", this.svgo || "")),
        (l = To()),
        l && !l.isStart && !s[ct] && (mu(s), (r.uncache = 1));
    }
  },
  _u = function (t, e) {
    var s = { target: t, props: [], revert: O_, save: A_ };
    return (
      e &&
        e.split(",").forEach(function (r) {
          return s.save(r);
        }),
      s
    );
  },
  vu,
  Xr = function (t, e) {
    var s = Ae.createElementNS
      ? Ae.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : Ae.createElement(t);
    return s.style ? s : Ae.createElement(t);
  },
  se = function n(t, e, s) {
    var r = getComputedStyle(t);
    return (
      r[e] ||
      r.getPropertyValue(e.replace(Ao, "-$1").toLowerCase()) ||
      r.getPropertyValue(e) ||
      (!s && n(t, Ii(e) || e, 1)) ||
      ""
    );
  },
  Tl = "O,Moz,ms,Ms,Webkit".split(","),
  Ii = function (t, e, s) {
    var r = e || si,
      l = r.style,
      u = 5;
    if (t in l && !s) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      u-- && !(Tl[u] + t in l);

    );
    return u < 0 ? null : (u === 3 ? "ms" : u >= 0 ? Tl[u] : "") + t;
  },
  Jr = function () {
    w_() &&
      window.document &&
      ((kl = window),
      (Ae = kl.document),
      (Pi = Ae.documentElement),
      (si = Xr("div") || { style: {} }),
      Xr("div"),
      (ct = Ii(ct)),
      (Jt = ct + "Origin"),
      (si.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (vu = !!Ii("perspective")),
      (To = Ht.core.reverting),
      (Mo = 1));
  },
  Er = function n(t) {
    var e = Xr(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      s = this.parentNode,
      r = this.nextSibling,
      l = this.style.cssText,
      u;
    if (
      (Pi.appendChild(e),
      e.appendChild(this),
      (this.style.display = "block"),
      t)
    )
      try {
        (u = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = n);
      } catch {}
    else this._gsapBBox && (u = this._gsapBBox());
    return (
      s && (r ? s.insertBefore(this, r) : s.appendChild(this)),
      Pi.removeChild(e),
      (this.style.cssText = l),
      u
    );
  },
  Al = function (t, e) {
    for (var s = e.length; s--; )
      if (t.hasAttribute(e[s])) return t.getAttribute(e[s]);
  },
  gu = function (t) {
    var e;
    try {
      e = t.getBBox();
    } catch {
      e = Er.call(t, !0);
    }
    return (
      (e && (e.width || e.height)) || t.getBBox === Er || (e = Er.call(t, !0)),
      e && !e.width && !e.x && !e.y
        ? {
            x: +Al(t, ["x", "cx", "x1"]) || 0,
            y: +Al(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        : e
    );
  },
  bu = function (t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && gu(t));
  },
  xs = function (t, e) {
    if (e) {
      var s = t.style;
      e in ve && e !== Jt && (e = ct),
        s.removeProperty
          ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") &&
              (e = "-" + e),
            s.removeProperty(e.replace(Ao, "-$1").toLowerCase()))
          : s.removeAttribute(e);
    }
  },
  Oe = function (t, e, s, r, l, u) {
    var c = new Rt(t._pt, e, s, 0, 1, u ? fu : pu);
    return (t._pt = c), (c.b = r), (c.e = l), t._props.push(s), c;
  },
  Ol = { deg: 1, rad: 1, turn: 1 },
  F_ = { grid: 1, flex: 1 },
  Ne = function n(t, e, s, r) {
    var l = parseFloat(s) || 0,
      u = (s + "").trim().substr((l + "").length) || "px",
      c = si.style,
      d = y_.test(e),
      p = t.tagName.toLowerCase() === "svg",
      m = (p ? "client" : "offset") + (d ? "Width" : "Height"),
      _ = 100,
      g = r === "px",
      y = r === "%",
      w,
      v,
      D,
      S;
    return r === u || !l || Ol[r] || Ol[u]
      ? l
      : (u !== "px" && !g && (l = n(t, e, s, "px")),
        (S = t.getCTM && bu(t)),
        (y || u === "%") && (ve[e] || ~e.indexOf("adius"))
          ? ((w = S ? t.getBBox()[d ? "width" : "height"] : t[m]),
            pt(y ? (l / w) * _ : (l / 100) * w))
          : ((c[d ? "width" : "height"] = _ + (g ? u : r)),
            (v =
              ~e.indexOf("adius") || (r === "em" && t.appendChild && !p)
                ? t
                : t.parentNode),
            S && (v = (t.ownerSVGElement || {}).parentNode),
            (!v || v === Ae || !v.appendChild) && (v = Ae.body),
            (D = v._gsap),
            D && y && D.width && d && D.time === Bt.time && !D.uncache
              ? pt((l / D.width) * _)
              : ((y || u === "%") &&
                  !F_[se(v, "display")] &&
                  (c.position = se(t, "position")),
                v === t && (c.position = "static"),
                v.appendChild(si),
                (w = si[m]),
                v.removeChild(si),
                (c.position = "absolute"),
                d && y && ((D = ni(v)), (D.time = Bt.time), (D.width = v[m])),
                pt(g ? (w * l) / _ : w && l ? (_ / w) * l : 0))));
  },
  de = function (t, e, s, r) {
    var l;
    return (
      Mo || Jr(),
      e in pe &&
        e !== "transform" &&
        ((e = pe[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
      ve[e] && e !== "transform"
        ? ((l = Es(t, r)),
          (l =
            e !== "transformOrigin"
              ? l[e]
              : l.svg
              ? l.origin
              : Dn(se(t, Jt)) + " " + l.zOrigin + "px"))
        : ((l = t.style[e]),
          (!l || l === "auto" || r || ~(l + "").indexOf("calc(")) &&
            (l =
              (yn[e] && yn[e](t, e, s)) ||
              se(t, e) ||
              Bh(t, e) ||
              (e === "opacity" ? 1 : 0))),
      s && !~(l + "").trim().indexOf(" ") ? Ne(t, e, l, s) + s : l
    );
  },
  R_ = function (t, e, s, r) {
    if (!s || s === "none") {
      var l = Ii(e, t, 1),
        u = l && se(t, l, 1);
      u && u !== s
        ? ((e = l), (s = u))
        : e === "borderColor" && (s = se(t, "borderTopColor"));
    }
    var c = new Rt(this._pt, t.style, e, 0, 1, uu),
      d = 0,
      p = 0,
      m,
      _,
      g,
      y,
      w,
      v,
      D,
      S,
      C,
      P,
      k,
      A;
    if (
      ((c.b = s),
      (c.e = r),
      (s += ""),
      (r += ""),
      r === "auto" && ((t.style[e] = r), (r = se(t, e) || r), (t.style[e] = s)),
      (m = [s, r]),
      tu(m),
      (s = m[0]),
      (r = m[1]),
      (g = s.match(Ci) || []),
      (A = r.match(Ci) || []),
      A.length)
    ) {
      for (; (_ = Ci.exec(r)); )
        (D = _[0]),
          (C = r.substring(d, _.index)),
          w
            ? (w = (w + 1) % 5)
            : (C.substr(-5) === "rgba(" || C.substr(-5) === "hsla(") && (w = 1),
          D !== (v = g[p++] || "") &&
            ((y = parseFloat(v) || 0),
            (k = v.substr((y + "").length)),
            D.charAt(1) === "=" && (D = Ei(y, D) + k),
            (S = parseFloat(D)),
            (P = D.substr((S + "").length)),
            (d = Ci.lastIndex - P.length),
            P ||
              ((P = P || Vt.units[e] || k),
              d === r.length && ((r += P), (c.e += P))),
            k !== P && (y = Ne(t, e, v, P) || 0),
            (c._pt = {
              _next: c._pt,
              p: C || p === 1 ? C : ",",
              s: y,
              c: S - y,
              m: (w && w < 4) || e === "zIndex" ? Math.round : 0
            }));
      c.c = d < r.length ? r.substring(d, r.length) : "";
    } else c.r = e === "display" && r === "none" ? fu : pu;
    return Th.test(r) && (c.e = 0), (this._pt = c), c;
  },
  Fl = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  I_ = function (t) {
    var e = t.split(" "),
      s = e[0],
      r = e[1] || "50%";
    return (
      (s === "top" || s === "bottom" || r === "left" || r === "right") &&
        ((t = s), (s = r), (r = t)),
      (e[0] = Fl[s] || s),
      (e[1] = Fl[r] || r),
      e.join(" ")
    );
  },
  B_ = function (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var s = e.t,
        r = s.style,
        l = e.u,
        u = s._gsap,
        c,
        d,
        p;
      if (l === "all" || l === !0) (r.cssText = ""), (d = 1);
      else
        for (l = l.split(","), p = l.length; --p > -1; )
          (c = l[p]),
            ve[c] && ((d = 1), (c = c === "transformOrigin" ? Jt : ct)),
            xs(s, c);
      d &&
        (xs(s, ct),
        u &&
          (u.svg && s.removeAttribute("transform"),
          Es(s, 1),
          (u.uncache = 1),
          mu(r)));
    }
  },
  yn = {
    clearProps: function (t, e, s, r, l) {
      if (l.data !== "isFromStart") {
        var u = (t._pt = new Rt(t._pt, e, s, 0, 0, B_));
        return (u.u = r), (u.pr = -10), (u.tween = l), t._props.push(s), 1;
      }
    }
  },
  Ss = [1, 0, 0, 1, 0, 0],
  wu = {},
  yu = function (t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
  },
  Rl = function (t) {
    var e = se(t, ct);
    return yu(e) ? Ss : e.substr(7).match(Mh).map(pt);
  },
  Oo = function (t, e) {
    var s = t._gsap || ni(t),
      r = t.style,
      l = Rl(t),
      u,
      c,
      d,
      p;
    return s.svg && t.getAttribute("transform")
      ? ((d = t.transform.baseVal.consolidate().matrix),
        (l = [d.a, d.b, d.c, d.d, d.e, d.f]),
        l.join(",") === "1,0,0,1,0,0" ? Ss : l)
      : (l === Ss &&
          !t.offsetParent &&
          t !== Pi &&
          !s.svg &&
          ((d = r.display),
          (r.display = "block"),
          (u = t.parentNode),
          (!u || !t.offsetParent) &&
            ((p = 1), (c = t.nextElementSibling), Pi.appendChild(t)),
          (l = Rl(t)),
          d ? (r.display = d) : xs(t, "display"),
          p &&
            (c
              ? u.insertBefore(t, c)
              : u
              ? u.appendChild(t)
              : Pi.removeChild(t))),
        e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
  },
  Zr = function (t, e, s, r, l, u) {
    var c = t._gsap,
      d = l || Oo(t, !0),
      p = c.xOrigin || 0,
      m = c.yOrigin || 0,
      _ = c.xOffset || 0,
      g = c.yOffset || 0,
      y = d[0],
      w = d[1],
      v = d[2],
      D = d[3],
      S = d[4],
      C = d[5],
      P = e.split(" "),
      k = parseFloat(P[0]) || 0,
      A = parseFloat(P[1]) || 0,
      O,
      L,
      T,
      M;
    s
      ? d !== Ss &&
        (L = y * D - w * v) &&
        ((T = k * (D / L) + A * (-v / L) + (v * C - D * S) / L),
        (M = k * (-w / L) + A * (y / L) - (y * C - w * S) / L),
        (k = T),
        (A = M))
      : ((O = gu(t)),
        (k = O.x + (~P[0].indexOf("%") ? (k / 100) * O.width : k)),
        (A = O.y + (~(P[1] || P[0]).indexOf("%") ? (A / 100) * O.height : A))),
      r || (r !== !1 && c.smooth)
        ? ((S = k - p),
          (C = A - m),
          (c.xOffset = _ + (S * y + C * v) - S),
          (c.yOffset = g + (S * w + C * D) - C))
        : (c.xOffset = c.yOffset = 0),
      (c.xOrigin = k),
      (c.yOrigin = A),
      (c.smooth = !!r),
      (c.origin = e),
      (c.originIsAbsolute = !!s),
      (t.style[Jt] = "0px 0px"),
      u &&
        (Oe(u, c, "xOrigin", p, k),
        Oe(u, c, "yOrigin", m, A),
        Oe(u, c, "xOffset", _, c.xOffset),
        Oe(u, c, "yOffset", g, c.yOffset)),
      t.setAttribute("data-svg-origin", k + " " + A);
  },
  Es = function (t, e) {
    var s = t._gsap || new nu(t);
    if ("x" in s && !e && !s.uncache) return s;
    var r = t.style,
      l = s.scaleX < 0,
      u = "px",
      c = "deg",
      d = getComputedStyle(t),
      p = se(t, Jt) || "0",
      m,
      _,
      g,
      y,
      w,
      v,
      D,
      S,
      C,
      P,
      k,
      A,
      O,
      L,
      T,
      M,
      B,
      V,
      G,
      j,
      et,
      $,
      H,
      U,
      N,
      F,
      X,
      R,
      K,
      tt,
      W,
      q;
    return (
      (m = _ = g = v = D = S = C = P = k = 0),
      (y = w = 1),
      (s.svg = !!(t.getCTM && bu(t))),
      d.translate &&
        ((d.translate !== "none" ||
          d.scale !== "none" ||
          d.rotate !== "none") &&
          (r[ct] =
            (d.translate !== "none"
              ? "translate3d(" +
                (d.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (d.rotate !== "none" ? "rotate(" + d.rotate + ") " : "") +
            (d.scale !== "none"
              ? "scale(" + d.scale.split(" ").join(",") + ") "
              : "") +
            (d[ct] !== "none" ? d[ct] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (L = Oo(t, s.svg)),
      s.svg &&
        (s.uncache
          ? ((N = t.getBBox()),
            (p = s.xOrigin - N.x + "px " + (s.yOrigin - N.y) + "px"),
            (U = ""))
          : (U = !e && t.getAttribute("data-svg-origin")),
        Zr(t, U || p, !!U || s.originIsAbsolute, s.smooth !== !1, L)),
      (A = s.xOrigin || 0),
      (O = s.yOrigin || 0),
      L !== Ss &&
        ((V = L[0]),
        (G = L[1]),
        (j = L[2]),
        (et = L[3]),
        (m = $ = L[4]),
        (_ = H = L[5]),
        L.length === 6
          ? ((y = Math.sqrt(V * V + G * G)),
            (w = Math.sqrt(et * et + j * j)),
            (v = V || G ? Di(G, V) * ii : 0),
            (C = j || et ? Di(j, et) * ii + v : 0),
            C && (w *= Math.abs(Math.cos(C * ki))),
            s.svg && ((m -= A - (A * V + O * j)), (_ -= O - (A * G + O * et))))
          : ((q = L[6]),
            (tt = L[7]),
            (X = L[8]),
            (R = L[9]),
            (K = L[10]),
            (W = L[11]),
            (m = L[12]),
            (_ = L[13]),
            (g = L[14]),
            (T = Di(q, K)),
            (D = T * ii),
            T &&
              ((M = Math.cos(-T)),
              (B = Math.sin(-T)),
              (U = $ * M + X * B),
              (N = H * M + R * B),
              (F = q * M + K * B),
              (X = $ * -B + X * M),
              (R = H * -B + R * M),
              (K = q * -B + K * M),
              (W = tt * -B + W * M),
              ($ = U),
              (H = N),
              (q = F)),
            (T = Di(-j, K)),
            (S = T * ii),
            T &&
              ((M = Math.cos(-T)),
              (B = Math.sin(-T)),
              (U = V * M - X * B),
              (N = G * M - R * B),
              (F = j * M - K * B),
              (W = et * B + W * M),
              (V = U),
              (G = N),
              (j = F)),
            (T = Di(G, V)),
            (v = T * ii),
            T &&
              ((M = Math.cos(T)),
              (B = Math.sin(T)),
              (U = V * M + G * B),
              (N = $ * M + H * B),
              (G = G * M - V * B),
              (H = H * M - $ * B),
              (V = U),
              ($ = N)),
            D &&
              Math.abs(D) + Math.abs(v) > 359.9 &&
              ((D = v = 0), (S = 180 - S)),
            (y = pt(Math.sqrt(V * V + G * G + j * j))),
            (w = pt(Math.sqrt(H * H + q * q))),
            (T = Di($, H)),
            (C = Math.abs(T) > 2e-4 ? T * ii : 0),
            (k = W ? 1 / (W < 0 ? -W : W) : 0)),
        s.svg &&
          ((U = t.getAttribute("transform")),
          (s.forceCSS = t.setAttribute("transform", "") || !yu(se(t, ct))),
          U && t.setAttribute("transform", U))),
      Math.abs(C) > 90 &&
        Math.abs(C) < 270 &&
        (l
          ? ((y *= -1), (C += v <= 0 ? 180 : -180), (v += v <= 0 ? 180 : -180))
          : ((w *= -1), (C += C <= 0 ? 180 : -180))),
      (e = e || s.uncache),
      (s.x =
        m -
        ((s.xPercent =
          m &&
          ((!e && s.xPercent) ||
            (Math.round(t.offsetWidth / 2) === Math.round(-m) ? -50 : 0)))
          ? (t.offsetWidth * s.xPercent) / 100
          : 0) +
        u),
      (s.y =
        _ -
        ((s.yPercent =
          _ &&
          ((!e && s.yPercent) ||
            (Math.round(t.offsetHeight / 2) === Math.round(-_) ? -50 : 0)))
          ? (t.offsetHeight * s.yPercent) / 100
          : 0) +
        u),
      (s.z = g + u),
      (s.scaleX = pt(y)),
      (s.scaleY = pt(w)),
      (s.rotation = pt(v) + c),
      (s.rotationX = pt(D) + c),
      (s.rotationY = pt(S) + c),
      (s.skewX = C + c),
      (s.skewY = P + c),
      (s.transformPerspective = k + u),
      (s.zOrigin = parseFloat(p.split(" ")[2]) || 0) && (r[Jt] = Dn(p)),
      (s.xOffset = s.yOffset = 0),
      (s.force3D = Vt.force3D),
      (s.renderTransform = s.svg ? N_ : vu ? Du : V_),
      (s.uncache = 0),
      s
    );
  },
  Dn = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  Pr = function (t, e, s) {
    var r = St(e);
    return pt(parseFloat(e) + parseFloat(Ne(t, "x", s + "px", r))) + r;
  },
  V_ = function (t, e) {
    (e.z = "0px"),
      (e.rotationY = e.rotationX = "0deg"),
      (e.force3D = 0),
      Du(t, e);
  },
  Ze = "0deg",
  ls = "0px",
  Qe = ") ",
  Du = function (t, e) {
    var s = e || this,
      r = s.xPercent,
      l = s.yPercent,
      u = s.x,
      c = s.y,
      d = s.z,
      p = s.rotation,
      m = s.rotationY,
      _ = s.rotationX,
      g = s.skewX,
      y = s.skewY,
      w = s.scaleX,
      v = s.scaleY,
      D = s.transformPerspective,
      S = s.force3D,
      C = s.target,
      P = s.zOrigin,
      k = "",
      A = (S === "auto" && t && t !== 1) || S === !0;
    if (P && (_ !== Ze || m !== Ze)) {
      var O = parseFloat(m) * ki,
        L = Math.sin(O),
        T = Math.cos(O),
        M;
      (O = parseFloat(_) * ki),
        (M = Math.cos(O)),
        (u = Pr(C, u, L * M * -P)),
        (c = Pr(C, c, -Math.sin(O) * -P)),
        (d = Pr(C, d, T * M * -P + P));
    }
    D !== ls && (k += "perspective(" + D + Qe),
      (r || l) && (k += "translate(" + r + "%, " + l + "%) "),
      (A || u !== ls || c !== ls || d !== ls) &&
        (k +=
          d !== ls || A
            ? "translate3d(" + u + ", " + c + ", " + d + ") "
            : "translate(" + u + ", " + c + Qe),
      p !== Ze && (k += "rotate(" + p + Qe),
      m !== Ze && (k += "rotateY(" + m + Qe),
      _ !== Ze && (k += "rotateX(" + _ + Qe),
      (g !== Ze || y !== Ze) && (k += "skew(" + g + ", " + y + Qe),
      (w !== 1 || v !== 1) && (k += "scale(" + w + ", " + v + Qe),
      (C.style[ct] = k || "translate(0, 0)");
  },
  N_ = function (t, e) {
    var s = e || this,
      r = s.xPercent,
      l = s.yPercent,
      u = s.x,
      c = s.y,
      d = s.rotation,
      p = s.skewX,
      m = s.skewY,
      _ = s.scaleX,
      g = s.scaleY,
      y = s.target,
      w = s.xOrigin,
      v = s.yOrigin,
      D = s.xOffset,
      S = s.yOffset,
      C = s.forceCSS,
      P = parseFloat(u),
      k = parseFloat(c),
      A,
      O,
      L,
      T,
      M;
    (d = parseFloat(d)),
      (p = parseFloat(p)),
      (m = parseFloat(m)),
      m && ((m = parseFloat(m)), (p += m), (d += m)),
      d || p
        ? ((d *= ki),
          (p *= ki),
          (A = Math.cos(d) * _),
          (O = Math.sin(d) * _),
          (L = Math.sin(d - p) * -g),
          (T = Math.cos(d - p) * g),
          p &&
            ((m *= ki),
            (M = Math.tan(p - m)),
            (M = Math.sqrt(1 + M * M)),
            (L *= M),
            (T *= M),
            m &&
              ((M = Math.tan(m)),
              (M = Math.sqrt(1 + M * M)),
              (A *= M),
              (O *= M))),
          (A = pt(A)),
          (O = pt(O)),
          (L = pt(L)),
          (T = pt(T)))
        : ((A = _), (T = g), (O = L = 0)),
      ((P && !~(u + "").indexOf("px")) || (k && !~(c + "").indexOf("px"))) &&
        ((P = Ne(y, "x", u, "px")), (k = Ne(y, "y", c, "px"))),
      (w || v || D || S) &&
        ((P = pt(P + w - (w * A + v * L) + D)),
        (k = pt(k + v - (w * O + v * T) + S))),
      (r || l) &&
        ((M = y.getBBox()),
        (P = pt(P + (r / 100) * M.width)),
        (k = pt(k + (l / 100) * M.height))),
      (M =
        "matrix(" + A + "," + O + "," + L + "," + T + "," + P + "," + k + ")"),
      y.setAttribute("transform", M),
      C && (y.style[ct] = M);
  },
  z_ = function (t, e, s, r, l) {
    var u = 360,
      c = wt(l),
      d = parseFloat(l) * (c && ~l.indexOf("rad") ? ii : 1),
      p = d - r,
      m = r + p + "deg",
      _,
      g;
    return (
      c &&
        ((_ = l.split("_")[1]),
        _ === "short" && ((p %= u), p !== p % (u / 2) && (p += p < 0 ? u : -u)),
        _ === "cw" && p < 0
          ? (p = ((p + u * Ml) % u) - ~~(p / u) * u)
          : _ === "ccw" && p > 0 && (p = ((p - u * Ml) % u) - ~~(p / u) * u)),
      (t._pt = g = new Rt(t._pt, e, s, r, p, C_)),
      (g.e = m),
      (g.u = "deg"),
      t._props.push(s),
      g
    );
  },
  Il = function (t, e) {
    for (var s in e) t[s] = e[s];
    return t;
  },
  H_ = function (t, e, s) {
    var r = Il({}, s._gsap),
      l = "perspective,force3D,transformOrigin,svgOrigin",
      u = s.style,
      c,
      d,
      p,
      m,
      _,
      g,
      y,
      w;
    r.svg
      ? ((p = s.getAttribute("transform")),
        s.setAttribute("transform", ""),
        (u[ct] = e),
        (c = Es(s, 1)),
        xs(s, ct),
        s.setAttribute("transform", p))
      : ((p = getComputedStyle(s)[ct]),
        (u[ct] = e),
        (c = Es(s, 1)),
        (u[ct] = p));
    for (d in ve)
      (p = r[d]),
        (m = c[d]),
        p !== m &&
          l.indexOf(d) < 0 &&
          ((y = St(p)),
          (w = St(m)),
          (_ = y !== w ? Ne(s, d, p, w) : parseFloat(p)),
          (g = parseFloat(m)),
          (t._pt = new Rt(t._pt, c, d, _, g - _, Yr)),
          (t._pt.u = w || 0),
          t._props.push(d));
    Il(c, r);
  };
Ft("padding,margin,Width,Radius", function (n, t) {
  var e = "Top",
    s = "Right",
    r = "Bottom",
    l = "Left",
    u = (t < 3 ? [e, s, r, l] : [e + l, e + s, r + s, r + l]).map(function (c) {
      return t < 2 ? n + c : "border" + c + n;
    });
  yn[t > 1 ? "border" + n : n] = function (c, d, p, m, _) {
    var g, y;
    if (arguments.length < 4)
      return (
        (g = u.map(function (w) {
          return de(c, w, p);
        })),
        (y = g.join(" ")),
        y.split(g[0]).length === 5 ? g[0] : y
      );
    (g = (m + "").split(" ")),
      (y = {}),
      u.forEach(function (w, v) {
        return (y[w] = g[v] = g[v] || g[((v - 1) / 2) | 0]);
      }),
      c.init(d, y, _);
  };
});
var Cu = {
  name: "css",
  register: Jr,
  targetTest: function (t) {
    return t.style && t.nodeType;
  },
  init: function (t, e, s, r, l) {
    var u = this._props,
      c = t.style,
      d = s.vars.startAt,
      p,
      m,
      _,
      g,
      y,
      w,
      v,
      D,
      S,
      C,
      P,
      k,
      A,
      O,
      L,
      T;
    Mo || Jr(),
      (this.styles = this.styles || _u(t)),
      (T = this.styles.props),
      (this.tween = s);
    for (v in e)
      if (v !== "autoRound" && ((m = e[v]), !(It[v] && ru(v, e, s, r, t, l)))) {
        if (
          ((y = typeof m),
          (w = yn[v]),
          y === "function" && ((m = m.call(s, r, t, l)), (y = typeof m)),
          y === "string" && ~m.indexOf("random(") && (m = Ds(m)),
          w)
        )
          w(this, t, v, m, s) && (L = 1);
        else if (v.substr(0, 2) === "--")
          (p = (getComputedStyle(t).getPropertyValue(v) + "").trim()),
            (m += ""),
            (Re.lastIndex = 0),
            Re.test(p) || ((D = St(p)), (S = St(m))),
            S ? D !== S && (p = Ne(t, v, p, S) + S) : D && (m += D),
            this.add(c, "setProperty", p, m, r, l, 0, 0, v),
            u.push(v),
            T.push(v, 0, c[v]);
        else if (y !== "undefined") {
          if (
            (d && v in d
              ? ((p = typeof d[v] == "function" ? d[v].call(s, r, t, l) : d[v]),
                wt(p) && ~p.indexOf("random(") && (p = Ds(p)),
                St(p + "") || (p += Vt.units[v] || St(de(t, v)) || ""),
                (p + "").charAt(1) === "=" && (p = de(t, v)))
              : (p = de(t, v)),
            (g = parseFloat(p)),
            (C = y === "string" && m.charAt(1) === "=" && m.substr(0, 2)),
            C && (m = m.substr(2)),
            (_ = parseFloat(m)),
            v in pe &&
              (v === "autoAlpha" &&
                (g === 1 && de(t, "visibility") === "hidden" && _ && (g = 0),
                T.push("visibility", 0, c.visibility),
                Oe(
                  this,
                  c,
                  "visibility",
                  g ? "inherit" : "hidden",
                  _ ? "inherit" : "hidden",
                  !_
                )),
              v !== "scale" &&
                v !== "transform" &&
                ((v = pe[v]), ~v.indexOf(",") && (v = v.split(",")[0]))),
            (P = v in ve),
            P)
          ) {
            if (
              (this.styles.save(v),
              k ||
                ((A = t._gsap),
                (A.renderTransform && !e.parseTransform) ||
                  Es(t, e.parseTransform),
                (O = e.smoothOrigin !== !1 && A.smooth),
                (k = this._pt =
                  new Rt(this._pt, c, ct, 0, 1, A.renderTransform, A, 0, -1)),
                (k.dep = 1)),
              v === "scale")
            )
              (this._pt = new Rt(
                this._pt,
                A,
                "scaleY",
                A.scaleY,
                (C ? Ei(A.scaleY, C + _) : _) - A.scaleY || 0,
                Yr
              )),
                (this._pt.u = 0),
                u.push("scaleY", v),
                (v += "X");
            else if (v === "transformOrigin") {
              T.push(Jt, 0, c[Jt]),
                (m = I_(m)),
                A.svg
                  ? Zr(t, m, 0, O, 0, this)
                  : ((S = parseFloat(m.split(" ")[2]) || 0),
                    S !== A.zOrigin && Oe(this, A, "zOrigin", A.zOrigin, S),
                    Oe(this, c, v, Dn(p), Dn(m)));
              continue;
            } else if (v === "svgOrigin") {
              Zr(t, m, 1, O, 0, this);
              continue;
            } else if (v in wu) {
              z_(this, A, v, g, C ? Ei(g, C + m) : m);
              continue;
            } else if (v === "smoothOrigin") {
              Oe(this, A, "smooth", A.smooth, m);
              continue;
            } else if (v === "force3D") {
              A[v] = m;
              continue;
            } else if (v === "transform") {
              H_(this, m, t);
              continue;
            }
          } else v in c || (v = Ii(v) || v);
          if (P || ((_ || _ === 0) && (g || g === 0) && !D_.test(m) && v in c))
            (D = (p + "").substr((g + "").length)),
              _ || (_ = 0),
              (S = St(m) || (v in Vt.units ? Vt.units[v] : D)),
              D !== S && (g = Ne(t, v, p, S)),
              (this._pt = new Rt(
                this._pt,
                P ? A : c,
                v,
                g,
                (C ? Ei(g, C + _) : _) - g,
                !P && (S === "px" || v === "zIndex") && e.autoRound !== !1
                  ? S_
                  : Yr
              )),
              (this._pt.u = S || 0),
              D !== S && S !== "%" && ((this._pt.b = p), (this._pt.r = x_));
          else if (v in c) R_.call(this, t, v, p, C ? C + m : m);
          else if (v in t) this.add(t, v, p || t[v], C ? C + m : m, r, l);
          else if (v !== "parseTransform") {
            yo(v, m);
            continue;
          }
          P || (v in c ? T.push(v, 0, c[v]) : T.push(v, 1, p || t[v])),
            u.push(v);
        }
      }
    L && cu(this);
  },
  render: function (t, e) {
    if (e.tween._time || !To())
      for (var s = e._pt; s; ) s.r(t, s.d), (s = s._next);
    else e.styles.revert();
  },
  get: de,
  aliases: pe,
  getSetter: function (t, e, s) {
    var r = pe[e];
    return (
      r && r.indexOf(",") < 0 && (e = r),
      e in ve && e !== Jt && (t._gsap.x || de(t, "x"))
        ? s && Ll === s
          ? e === "scale"
            ? L_
            : k_
          : (Ll = s || {}) && (e === "scale" ? M_ : T_)
        : t.style && !bo(t.style[e])
        ? E_
        : ~e.indexOf("-")
        ? P_
        : ko(t, e)
    );
  },
  core: { _removeProperty: xs, _getMatrix: Oo }
};
Ht.utils.checkPrefix = Ii;
Ht.core.getStyleSaver = _u;
(function (n, t, e, s) {
  var r = Ft(n + "," + t + "," + e, function (l) {
    ve[l] = 1;
  });
  Ft(t, function (l) {
    (Vt.units[l] = "deg"), (wu[l] = 1);
  }),
    (pe[r[13]] = n + "," + t),
    Ft(s, function (l) {
      var u = l.split(":");
      pe[u[1]] = r[u[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Ft(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (n) {
    Vt.units[n] = "px";
  }
);
Ht.registerPlugin(Cu);
var bt = Ht.registerPlugin(Cu) || Ht;
bt.core.Tween;
/*!
 * paths 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var U_ = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
  K_ = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
  j_ = Math.PI / 180,
  rn = Math.sin,
  on = Math.cos,
  bs = Math.abs,
  hs = Math.sqrt,
  $_ = function (t) {
    return typeof t == "number";
  },
  Bl = 1e5,
  Pe = function (t) {
    return Math.round(t * Bl) / Bl || 0;
  };
function q_(n, t, e, s, r, l, u) {
  for (var c = n.length, d, p, m, _, g; --c > -1; )
    for (d = n[c], p = d.length, m = 0; m < p; m += 2)
      (_ = d[m]),
        (g = d[m + 1]),
        (d[m] = _ * t + g * s + l),
        (d[m + 1] = _ * e + g * r + u);
  return (n._dirty = 1), n;
}
function G_(n, t, e, s, r, l, u, c, d) {
  if (!(n === c && t === d)) {
    (e = bs(e)), (s = bs(s));
    var p = (r % 360) * j_,
      m = on(p),
      _ = rn(p),
      g = Math.PI,
      y = g * 2,
      w = (n - c) / 2,
      v = (t - d) / 2,
      D = m * w + _ * v,
      S = -_ * w + m * v,
      C = D * D,
      P = S * S,
      k = C / (e * e) + P / (s * s);
    k > 1 && ((e = hs(k) * e), (s = hs(k) * s));
    var A = e * e,
      O = s * s,
      L = (A * O - A * P - O * C) / (A * P + O * C);
    L < 0 && (L = 0);
    var T = (l === u ? -1 : 1) * hs(L),
      M = T * ((e * S) / s),
      B = T * -((s * D) / e),
      V = (n + c) / 2,
      G = (t + d) / 2,
      j = V + (m * M - _ * B),
      et = G + (_ * M + m * B),
      $ = (D - M) / e,
      H = (S - B) / s,
      U = (-D - M) / e,
      N = (-S - B) / s,
      F = $ * $ + H * H,
      X = (H < 0 ? -1 : 1) * Math.acos($ / hs(F)),
      R =
        ($ * N - H * U < 0 ? -1 : 1) *
        Math.acos(($ * U + H * N) / hs(F * (U * U + N * N)));
    isNaN(R) && (R = g),
      !u && R > 0 ? (R -= y) : u && R < 0 && (R += y),
      (X %= y),
      (R %= y);
    var K = Math.ceil(bs(R) / (y / 4)),
      tt = [],
      W = R / K,
      q = ((4 / 3) * rn(W / 2)) / (1 + on(W / 2)),
      Ut = m * e,
      ft = _ * e,
      $e = _ * -s,
      Bn = m * s,
      xt;
    for (xt = 0; xt < K; xt++)
      (r = X + xt * W),
        (D = on(r)),
        (S = rn(r)),
        ($ = on((r += W))),
        (H = rn(r)),
        tt.push(D - q * S, S + q * D, $ + q * H, H - q * $, $, H);
    for (xt = 0; xt < tt.length; xt += 2)
      (D = tt[xt]),
        (S = tt[xt + 1]),
        (tt[xt] = D * Ut + S * $e + j),
        (tt[xt + 1] = D * ft + S * Bn + et);
    return (tt[xt - 2] = c), (tt[xt - 1] = d), tt;
  }
}
function W_(n) {
  var t =
      (n + "")
        .replace(K_, function (M) {
          var B = +M;
          return B < 1e-4 && B > -1e-4 ? 0 : B;
        })
        .match(U_) || [],
    e = [],
    s = 0,
    r = 0,
    l = 2 / 3,
    u = t.length,
    c = 0,
    d = "ERROR: malformed path: " + n,
    p,
    m,
    _,
    g,
    y,
    w,
    v,
    D,
    S,
    C,
    P,
    k,
    A,
    O,
    L,
    T = function (B, V, G, j) {
      (C = (G - B) / 3),
        (P = (j - V) / 3),
        v.push(B + C, V + P, G - C, j - P, G, j);
    };
  if (!n || !isNaN(t[0]) || isNaN(t[1])) return console.log(d), e;
  for (p = 0; p < u; p++)
    if (
      ((A = y),
      isNaN(t[p]) ? ((y = t[p].toUpperCase()), (w = y !== t[p])) : p--,
      (_ = +t[p + 1]),
      (g = +t[p + 2]),
      w && ((_ += s), (g += r)),
      p || ((D = _), (S = g)),
      y === "M")
    )
      v && (v.length < 8 ? (e.length -= 1) : (c += v.length)),
        (s = D = _),
        (r = S = g),
        (v = [_, g]),
        e.push(v),
        (p += 2),
        (y = "L");
    else if (y === "C")
      v || (v = [0, 0]),
        w || (s = r = 0),
        v.push(
          _,
          g,
          s + t[p + 3] * 1,
          r + t[p + 4] * 1,
          (s += t[p + 5] * 1),
          (r += t[p + 6] * 1)
        ),
        (p += 6);
    else if (y === "S")
      (C = s),
        (P = r),
        (A === "C" || A === "S") &&
          ((C += s - v[v.length - 4]), (P += r - v[v.length - 3])),
        w || (s = r = 0),
        v.push(C, P, _, g, (s += t[p + 3] * 1), (r += t[p + 4] * 1)),
        (p += 4);
    else if (y === "Q")
      (C = s + (_ - s) * l),
        (P = r + (g - r) * l),
        w || (s = r = 0),
        (s += t[p + 3] * 1),
        (r += t[p + 4] * 1),
        v.push(C, P, s + (_ - s) * l, r + (g - r) * l, s, r),
        (p += 4);
    else if (y === "T")
      (C = s - v[v.length - 4]),
        (P = r - v[v.length - 3]),
        v.push(
          s + C,
          r + P,
          _ + (s + C * 1.5 - _) * l,
          g + (r + P * 1.5 - g) * l,
          (s = _),
          (r = g)
        ),
        (p += 2);
    else if (y === "H") T(s, r, (s = _), r), (p += 1);
    else if (y === "V") T(s, r, s, (r = _ + (w ? r - s : 0))), (p += 1);
    else if (y === "L" || y === "Z")
      y === "Z" && ((_ = D), (g = S), (v.closed = !0)),
        (y === "L" || bs(s - _) > 0.5 || bs(r - g) > 0.5) &&
          (T(s, r, _, g), y === "L" && (p += 2)),
        (s = _),
        (r = g);
    else if (y === "A") {
      if (
        ((O = t[p + 4]),
        (L = t[p + 5]),
        (C = t[p + 6]),
        (P = t[p + 7]),
        (m = 7),
        O.length > 1 &&
          (O.length < 3
            ? ((P = C), (C = L), m--)
            : ((P = L), (C = O.substr(2)), (m -= 2)),
          (L = O.charAt(1)),
          (O = O.charAt(0))),
        (k = G_(
          s,
          r,
          +t[p + 1],
          +t[p + 2],
          +t[p + 3],
          +O,
          +L,
          (w ? s : 0) + C * 1,
          (w ? r : 0) + P * 1
        )),
        (p += m),
        k)
      )
        for (m = 0; m < k.length; m++) v.push(k[m]);
      (s = v[v.length - 2]), (r = v[v.length - 1]);
    } else console.log(d);
  return (
    (p = v.length),
    p < 6
      ? (e.pop(), (p = 0))
      : v[0] === v[p - 2] && v[1] === v[p - 1] && (v.closed = !0),
    (e.totalPoints = c + p),
    e
  );
}
function Y_(n) {
  $_(n[0]) && (n = [n]);
  var t = "",
    e = n.length,
    s,
    r,
    l,
    u;
  for (r = 0; r < e; r++) {
    for (
      u = n[r],
        t += "M" + Pe(u[0]) + "," + Pe(u[1]) + " C",
        s = u.length,
        l = 2;
      l < s;
      l++
    )
      t +=
        Pe(u[l++]) +
        "," +
        Pe(u[l++]) +
        " " +
        Pe(u[l++]) +
        "," +
        Pe(u[l++]) +
        " " +
        Pe(u[l++]) +
        "," +
        Pe(u[l]) +
        " ";
    u.closed && (t += "z");
  }
  return t;
}
/*!
 * CustomEase 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Mt,
  xu,
  Su = function () {
    return (
      Mt ||
      (typeof window < "u" && (Mt = window.gsap) && Mt.registerPlugin && Mt)
    );
  },
  Vl = function () {
    (Mt = Su()),
      Mt
        ? (Mt.registerEase("_CE", Ps.create), (xu = 1))
        : console.warn("Please gsap.registerPlugin(CustomEase)");
  },
  X_ = 1e20,
  an = function (t) {
    return ~~(t * 1e3 + (t < 0 ? -0.5 : 0.5)) / 1e3;
  },
  J_ = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  Z_ = /[cLlsSaAhHvVtTqQ]/g,
  Q_ = function (t) {
    var e = t.length,
      s = X_,
      r;
    for (r = 1; r < e; r += 6) +t[r] < s && (s = +t[r]);
    return s;
  },
  tv = function (t, e, s) {
    !s && s !== 0 && (s = Math.max(+t[t.length - 1], +t[1]));
    var r = +t[0] * -1,
      l = -s,
      u = t.length,
      c = 1 / (+t[u - 2] + r),
      d =
        -e ||
        (Math.abs(+t[u - 1] - +t[1]) < 0.01 * (+t[u - 2] - +t[0])
          ? Q_(t) + l
          : +t[u - 1] + l),
      p;
    for (d ? (d = 1 / d) : (d = -c), p = 0; p < u; p += 2)
      (t[p] = (+t[p] + r) * c), (t[p + 1] = (+t[p + 1] + l) * d);
  },
  ev = function n(t, e, s, r, l, u, c, d, p, m, _) {
    var g = (t + s) / 2,
      y = (e + r) / 2,
      w = (s + l) / 2,
      v = (r + u) / 2,
      D = (l + c) / 2,
      S = (u + d) / 2,
      C = (g + w) / 2,
      P = (y + v) / 2,
      k = (w + D) / 2,
      A = (v + S) / 2,
      O = (C + k) / 2,
      L = (P + A) / 2,
      T = c - t,
      M = d - e,
      B = Math.abs((s - c) * M - (r - d) * T),
      V = Math.abs((l - c) * M - (u - d) * T),
      G;
    return (
      m ||
        ((m = [
          { x: t, y: e },
          { x: c, y: d }
        ]),
        (_ = 1)),
      m.splice(_ || m.length - 1, 0, { x: O, y: L }),
      (B + V) * (B + V) > p * (T * T + M * M) &&
        ((G = m.length),
        n(t, e, g, y, C, P, O, L, p, m, _),
        n(O, L, k, A, D, S, c, d, p, m, _ + 1 + (m.length - G))),
      m
    );
  },
  Ps = (function () {
    function n(e, s, r) {
      xu || Vl(), (this.id = e), this.setData(s, r);
    }
    var t = n.prototype;
    return (
      (t.setData = function (s, r) {
        (r = r || {}), (s = s || "0,0,1,1");
        var l = s.match(J_),
          u = 1,
          c = [],
          d = [],
          p = r.precision || 1,
          m = p <= 1,
          _,
          g,
          y,
          w,
          v,
          D,
          S,
          C,
          P;
        if (
          ((this.data = s),
          (Z_.test(s) || (~s.indexOf("M") && s.indexOf("C") < 0)) &&
            (l = W_(s)[0]),
          (_ = l.length),
          _ === 4)
        )
          l.unshift(0, 0), l.push(1, 1), (_ = 8);
        else if ((_ - 2) % 6) throw "Invalid CustomEase";
        for (
          (+l[0] != 0 || +l[_ - 2] != 1) && tv(l, r.height, r.originY),
            this.segment = l,
            w = 2;
          w < _;
          w += 6
        )
          (g = { x: +l[w - 2], y: +l[w - 1] }),
            (y = { x: +l[w + 4], y: +l[w + 5] }),
            c.push(g, y),
            ev(
              g.x,
              g.y,
              +l[w],
              +l[w + 1],
              +l[w + 2],
              +l[w + 3],
              y.x,
              y.y,
              1 / (p * 2e5),
              c,
              c.length - 1
            );
        for (_ = c.length, w = 0; w < _; w++)
          (S = c[w]),
            (C = c[w - 1] || S),
            (S.x > C.x || (C.y !== S.y && C.x === S.x) || S === C) && S.x <= 1
              ? ((C.cx = S.x - C.x),
                (C.cy = S.y - C.y),
                (C.n = S),
                (C.nx = S.x),
                m &&
                  w > 1 &&
                  Math.abs(C.cy / C.cx - c[w - 2].cy / c[w - 2].cx) > 2 &&
                  (m = 0),
                C.cx < u &&
                  (C.cx
                    ? (u = C.cx)
                    : ((C.cx = 0.001),
                      w === _ - 1 &&
                        ((C.x -= 0.001), (u = Math.min(u, 0.001)), (m = 0)))))
              : (c.splice(w--, 1), _--);
        if (((_ = (1 / u + 1) | 0), (v = 1 / _), (D = 0), (S = c[0]), m)) {
          for (w = 0; w < _; w++)
            (P = w * v),
              S.nx < P && (S = c[++D]),
              (g = S.y + ((P - S.x) / S.cx) * S.cy),
              (d[w] = { x: P, cx: v, y: g, cy: 0, nx: 9 }),
              w && (d[w - 1].cy = g - d[w - 1].y);
          d[_ - 1].cy = c[c.length - 1].y - g;
        } else {
          for (w = 0; w < _; w++) S.nx < w * v && (S = c[++D]), (d[w] = S);
          D < c.length - 1 && (d[w - 1] = c[c.length - 2]);
        }
        return (
          (this.ease = function (k) {
            var A = d[(k * _) | 0] || d[_ - 1];
            return A.nx < k && (A = A.n), A.y + ((k - A.x) / A.cx) * A.cy;
          }),
          (this.ease.custom = this),
          this.id && Mt && Mt.registerEase(this.id, this.ease),
          this
        );
      }),
      (t.getSVGData = function (s) {
        return n.getSVGData(this, s);
      }),
      (n.create = function (s, r, l) {
        return new n(s, r, l).ease;
      }),
      (n.register = function (s) {
        (Mt = s), Vl();
      }),
      (n.get = function (s) {
        return Mt.parseEase(s);
      }),
      (n.getSVGData = function (s, r) {
        r = r || {};
        var l = r.width || 100,
          u = r.height || 100,
          c = r.x || 0,
          d = (r.y || 0) + u,
          p = Mt.utils.toArray(r.path)[0],
          m,
          _,
          g,
          y,
          w,
          v,
          D,
          S,
          C,
          P;
        if (
          (r.invert && ((u = -u), (d = 0)),
          typeof s == "string" && (s = Mt.parseEase(s)),
          s.custom && (s = s.custom),
          s instanceof n)
        )
          m = Y_(q_([s.segment], l, 0, 0, -u, c, d));
        else {
          for (
            m = [c, d],
              D = Math.max(5, (r.precision || 1) * 200),
              y = 1 / D,
              D += 2,
              S = 5 / D,
              C = an(c + y * l),
              P = an(d + s(y) * -u),
              _ = (P - d) / (C - c),
              g = 2;
            g < D;
            g++
          )
            (w = an(c + g * y * l)),
              (v = an(d + s(g * y) * -u)),
              (Math.abs((v - P) / (w - C) - _) > S || g === D - 1) &&
                (m.push(C, P), (_ = (v - P) / (w - C))),
              (C = w),
              (P = v);
          m = "M" + m.join(",");
        }
        return p && p.setAttribute("d", m), m;
      }),
      n
    );
  })();
Su() && Mt.registerPlugin(Ps);
Ps.version = "3.11.4";
const E = (window._GLOBAL_.store = window._GLOBAL_.store || {
  designWidthPc: 1600,
  designHeightPc: 964,
  designWidthSp: 828 / 2,
  designHeightSp: 1332 / 2,
  breakpoint: 768,
  baseWidthMinPc: 1200,
  windowWidth: 0,
  windowHeight: 0,
  variableSizeRate: 1,
  pageId: "",
  pageIdPrev: "",
  cScroll: null,
  cIntersecting: null,
  scrollY: 0,
  scrollDirection: 0,
  scrollYSmooth: 0,
  scrollYNative: 0,
  windowHeightInitial: window.innerHeight,
  statusBarHeight: 0,
  componentCache: new Map(),
  modals: {},
  isOpenModal: !1,
  view: null,
  isLoadStart: {
    pageTop: !1,
    pageSmbService: !1,
    pageAbout: !1,
    pageCareers: !1
  },
  isLoadDone: {
    pageTop: !1,
    pageSmbService: !1,
    pageAbout: !1,
    pageCareers: !1
  },
  isTransitioning: !1,
  isTransitioned: !1,
  isLoadedStyles: !1,
  isLeave: !1,
  isPopstate: !1,
  popDirection: null,
  isInitializedAsynchronousTransition: !1,
  historyCount: 0,
  prevHistoryCount: 0,
  isScrollAnimating: !1,
  elTransitionContents: document.querySelector("[data-transition-contents]"),
  isActiveTypekit: !1,
  isHorizontalScroll: !1,
  isDebug: new URL(window.location.href).searchParams.has("debug"),
  isScrollMode: new URL(window.location.href).searchParams.has("scroll"),
  isFastMode: new URL(window.location.href).searchParams.has("fast"),
  enablePane: new URL(window.location.href).searchParams.has("pane"),
  enableStats: new URL(window.location.href).searchParams.has("stats"),
  pane: null,
  isHiddenPane: !1,
  gltfLoader: null,
  gltf: {},
  loadingCountList: {
    pageTop: [],
    pageWhyUse: [],
    pageSmbService: [],
    pageAbout: [],
    pageCareers: [],
    page404: []
  },
  components: {},
  currentScene: "",
  nextScene: "",
  isNightMode: new URL(window.location.href).searchParams.has("night")
});
if (!window.gsap) {
  (window.gsap = bt), bt.config({ force3D: !0 });
  const n = { ease: { medium: ".4,0,.2,1", move: ".24,.1,.2,1" } };
  bt.registerPlugin(Ps);
  const t = Object.keys(n.ease);
  t.length > 0 &&
    t.forEach((e) => {
      Ps.create(e, n.ease[e]);
    }),
    E.isDebug &&
      (document.body.addEventListener("mouseleave", () => {
        bt.ticker.sleep();
      }),
      document.body.addEventListener("mouseenter", () => {
        bt.ticker.wake();
      }));
}
var Qr = { exports: {} };
/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */ (function (
  n,
  t
) {
  (function (e, s) {
    s(t);
  })(xh, function (e) {
    class s {
      constructor(i) {
        const [o, h] = i.split("-"),
          f = o.split(".");
        (this.major = parseInt(f[0], 10)),
          (this.minor = parseInt(f[1], 10)),
          (this.patch = parseInt(f[2], 10)),
          (this.prerelease = h !== null && h !== void 0 ? h : null);
      }
      toString() {
        const i = [this.major, this.minor, this.patch].join(".");
        return this.prerelease !== null ? [i, this.prerelease].join("-") : i;
      }
    }
    class r {
      constructor(i) {
        this.controller_ = i;
      }
      get element() {
        return this.controller_.view.element;
      }
      get disabled() {
        return this.controller_.viewProps.get("disabled");
      }
      set disabled(i) {
        this.controller_.viewProps.set("disabled", i);
      }
      get hidden() {
        return this.controller_.viewProps.get("hidden");
      }
      set hidden(i) {
        this.controller_.viewProps.set("hidden", i);
      }
      dispose() {
        this.controller_.viewProps.set("disposed", !0);
      }
    }
    class l {
      constructor(i) {
        this.target = i;
      }
    }
    class u extends l {
      constructor(i, o, h, f) {
        super(i),
          (this.value = o),
          (this.presetKey = h),
          (this.last = f !== null && f !== void 0 ? f : !0);
      }
    }
    class c extends l {
      constructor(i, o, h) {
        super(i), (this.value = o), (this.presetKey = h);
      }
    }
    class d extends l {
      constructor(i, o) {
        super(i), (this.expanded = o);
      }
    }
    class p extends l {
      constructor(i, o) {
        super(i), (this.index = o);
      }
    }
    function m(a) {
      return a;
    }
    function _(a) {
      return a == null;
    }
    function g(a, i) {
      if (a.length !== i.length) return !1;
      for (let o = 0; o < a.length; o++) if (a[o] !== i[o]) return !1;
      return !0;
    }
    function y(a, i) {
      let o = a;
      do {
        const h = Object.getOwnPropertyDescriptor(o, i);
        if (h && (h.set !== void 0 || h.writable === !0)) return !0;
        o = Object.getPrototypeOf(o);
      } while (o !== null);
      return !1;
    }
    const w = {
      alreadydisposed: () => "View has been already disposed",
      invalidparams: (a) => `Invalid parameters for '${a.name}'`,
      nomatchingcontroller: (a) => `No matching controller for '${a.key}'`,
      nomatchingview: (a) =>
        `No matching view for '${JSON.stringify(a.params)}'`,
      notbindable: () => "Value is not bindable",
      propertynotfound: (a) => `Property '${a.name}' not found`,
      shouldneverhappen: () => "This error should never happen"
    };
    class v {
      static alreadyDisposed() {
        return new v({ type: "alreadydisposed" });
      }
      static notBindable() {
        return new v({ type: "notbindable" });
      }
      static propertyNotFound(i) {
        return new v({ type: "propertynotfound", context: { name: i } });
      }
      static shouldNeverHappen() {
        return new v({ type: "shouldneverhappen" });
      }
      constructor(i) {
        var o;
        (this.message =
          (o = w[i.type](i.context)) !== null && o !== void 0
            ? o
            : "Unexpected error"),
          (this.name = this.constructor.name),
          (this.stack = new Error(this.message).stack),
          (this.type = i.type);
      }
    }
    class D {
      constructor(i, o, h) {
        (this.obj_ = i),
          (this.key_ = o),
          (this.presetKey_ = h !== null && h !== void 0 ? h : o);
      }
      static isBindable(i) {
        return !(
          i === null ||
          (typeof i != "object" && typeof i != "function")
        );
      }
      get key() {
        return this.key_;
      }
      get presetKey() {
        return this.presetKey_;
      }
      read() {
        return this.obj_[this.key_];
      }
      write(i) {
        this.obj_[this.key_] = i;
      }
      writeProperty(i, o) {
        const h = this.read();
        if (!D.isBindable(h)) throw v.notBindable();
        if (!(i in h)) throw v.propertyNotFound(i);
        h[i] = o;
      }
    }
    class S extends r {
      get label() {
        return this.controller_.props.get("label");
      }
      set label(i) {
        this.controller_.props.set("label", i);
      }
      get title() {
        var i;
        return (i = this.controller_.valueController.props.get("title")) !==
          null && i !== void 0
          ? i
          : "";
      }
      set title(i) {
        this.controller_.valueController.props.set("title", i);
      }
      on(i, o) {
        const h = o.bind(this);
        return (
          this.controller_.valueController.emitter.on(i, () => {
            h(new l(this));
          }),
          this
        );
      }
    }
    class C {
      constructor() {
        this.observers_ = {};
      }
      on(i, o) {
        let h = this.observers_[i];
        return h || (h = this.observers_[i] = []), h.push({ handler: o }), this;
      }
      off(i, o) {
        const h = this.observers_[i];
        return (
          h && (this.observers_[i] = h.filter((f) => f.handler !== o)), this
        );
      }
      emit(i, o) {
        const h = this.observers_[i];
        h &&
          h.forEach((f) => {
            f.handler(o);
          });
      }
    }
    const P = "tp";
    function k(a) {
      return (o, h) =>
        [P, "-", a, "v", o ? `_${o}` : "", h ? `-${h}` : ""].join("");
    }
    function A(a, i) {
      return (o) => i(a(o));
    }
    function O(a) {
      return a.rawValue;
    }
    function L(a, i) {
      a.emitter.on("change", A(O, i)), i(a.rawValue);
    }
    function T(a, i, o) {
      L(a.value(i), o);
    }
    function M(a, i, o) {
      o ? a.classList.add(i) : a.classList.remove(i);
    }
    function B(a, i) {
      return (o) => {
        M(a, i, o);
      };
    }
    function V(a, i) {
      L(a, (o) => {
        i.textContent = o !== null && o !== void 0 ? o : "";
      });
    }
    const G = k("btn");
    class j {
      constructor(i, o) {
        (this.element = i.createElement("div")),
          this.element.classList.add(G()),
          o.viewProps.bindClassModifiers(this.element);
        const h = i.createElement("button");
        h.classList.add(G("b")),
          o.viewProps.bindDisabled(h),
          this.element.appendChild(h),
          (this.buttonElement = h);
        const f = i.createElement("div");
        f.classList.add(G("t")),
          V(o.props.value("title"), f),
          this.buttonElement.appendChild(f);
      }
    }
    class et {
      constructor(i, o) {
        (this.emitter = new C()),
          (this.onClick_ = this.onClick_.bind(this)),
          (this.props = o.props),
          (this.viewProps = o.viewProps),
          (this.view = new j(i, {
            props: this.props,
            viewProps: this.viewProps
          })),
          this.view.buttonElement.addEventListener("click", this.onClick_);
      }
      onClick_() {
        this.emitter.emit("click", { sender: this });
      }
    }
    class $ {
      constructor(i, o) {
        var h;
        (this.constraint_ = o === null || o === void 0 ? void 0 : o.constraint),
          (this.equals_ =
            (h = o === null || o === void 0 ? void 0 : o.equals) !== null &&
            h !== void 0
              ? h
              : (f, b) => f === b),
          (this.emitter = new C()),
          (this.rawValue_ = i);
      }
      get constraint() {
        return this.constraint_;
      }
      get rawValue() {
        return this.rawValue_;
      }
      set rawValue(i) {
        this.setRawValue(i, { forceEmit: !1, last: !0 });
      }
      setRawValue(i, o) {
        const h = o !== null && o !== void 0 ? o : { forceEmit: !1, last: !0 },
          f = this.constraint_ ? this.constraint_.constrain(i) : i,
          b = this.rawValue_;
        (this.equals_(b, f) && !h.forceEmit) ||
          (this.emitter.emit("beforechange", { sender: this }),
          (this.rawValue_ = f),
          this.emitter.emit("change", {
            options: h,
            previousRawValue: b,
            rawValue: f,
            sender: this
          }));
      }
    }
    class H {
      constructor(i) {
        (this.emitter = new C()), (this.value_ = i);
      }
      get rawValue() {
        return this.value_;
      }
      set rawValue(i) {
        this.setRawValue(i, { forceEmit: !1, last: !0 });
      }
      setRawValue(i, o) {
        const h = o !== null && o !== void 0 ? o : { forceEmit: !1, last: !0 },
          f = this.value_;
        (f === i && !h.forceEmit) ||
          (this.emitter.emit("beforechange", { sender: this }),
          (this.value_ = i),
          this.emitter.emit("change", {
            options: h,
            previousRawValue: f,
            rawValue: this.value_,
            sender: this
          }));
      }
    }
    function U(a, i) {
      const o = i === null || i === void 0 ? void 0 : i.constraint,
        h = i === null || i === void 0 ? void 0 : i.equals;
      return !o && !h ? new H(a) : new $(a, i);
    }
    class N {
      constructor(i) {
        (this.emitter = new C()), (this.valMap_ = i);
        for (const o in this.valMap_)
          this.valMap_[o].emitter.on("change", () => {
            this.emitter.emit("change", { key: o, sender: this });
          });
      }
      static createCore(i) {
        return Object.keys(i).reduce(
          (h, f) => Object.assign(h, { [f]: U(i[f]) }),
          {}
        );
      }
      static fromObject(i) {
        const o = this.createCore(i);
        return new N(o);
      }
      get(i) {
        return this.valMap_[i].rawValue;
      }
      set(i, o) {
        this.valMap_[i].rawValue = o;
      }
      value(i) {
        return this.valMap_[i];
      }
    }
    function F(a, i) {
      const h = Object.keys(i).reduce((f, b) => {
        if (f === void 0) return;
        const x = i[b],
          I = x(a[b]);
        return I.succeeded
          ? Object.assign(Object.assign({}, f), { [b]: I.value })
          : void 0;
      }, {});
      return h;
    }
    function X(a, i) {
      return a.reduce((o, h) => {
        if (o === void 0) return;
        const f = i(h);
        if (!(!f.succeeded || f.value === void 0)) return [...o, f.value];
      }, []);
    }
    function R(a) {
      return a === null ? !1 : typeof a == "object";
    }
    function K(a) {
      return (i) => (o) => {
        if (!i && o === void 0) return { succeeded: !1, value: void 0 };
        if (i && o === void 0) return { succeeded: !0, value: void 0 };
        const h = a(o);
        return h !== void 0
          ? { succeeded: !0, value: h }
          : { succeeded: !1, value: void 0 };
      };
    }
    function tt(a) {
      return {
        custom: (i) => K(i)(a),
        boolean: K((i) => (typeof i == "boolean" ? i : void 0))(a),
        number: K((i) => (typeof i == "number" ? i : void 0))(a),
        string: K((i) => (typeof i == "string" ? i : void 0))(a),
        function: K((i) => (typeof i == "function" ? i : void 0))(a),
        constant: (i) => K((o) => (o === i ? i : void 0))(a),
        raw: K((i) => i)(a),
        object: (i) =>
          K((o) => {
            if (R(o)) return F(o, i);
          })(a),
        array: (i) =>
          K((o) => {
            if (Array.isArray(o)) return X(o, i);
          })(a)
      };
    }
    const W = { optional: tt(!0), required: tt(!1) };
    function q(a, i) {
      const o = W.required.object(i)(a);
      return o.succeeded ? o.value : void 0;
    }
    function Ut(a) {
      console.warn(
        [
          `Missing '${a.key}' of ${a.target} in ${a.place}.`,
          "Please rebuild plugins with the latest core package."
        ].join(" ")
      );
    }
    function ft(a) {
      return a && a.parentElement && a.parentElement.removeChild(a), null;
    }
    class $e {
      constructor(i) {
        this.value_ = i;
      }
      static create(i) {
        return [
          new $e(i),
          (o, h) => {
            i.setRawValue(o, h);
          }
        ];
      }
      get emitter() {
        return this.value_.emitter;
      }
      get rawValue() {
        return this.value_.rawValue;
      }
    }
    const Bn = k("");
    function xt(a, i) {
      return B(a, Bn(void 0, i));
    }
    class re extends N {
      constructor(i) {
        var o;
        super(i),
          (this.onDisabledChange_ = this.onDisabledChange_.bind(this)),
          (this.onParentChange_ = this.onParentChange_.bind(this)),
          (this.onParentGlobalDisabledChange_ =
            this.onParentGlobalDisabledChange_.bind(this)),
          ([this.globalDisabled_, this.setGlobalDisabled_] = $e.create(
            U(this.getGlobalDisabled_())
          )),
          this.value("disabled").emitter.on("change", this.onDisabledChange_),
          this.value("parent").emitter.on("change", this.onParentChange_),
          (o = this.get("parent")) === null ||
            o === void 0 ||
            o.globalDisabled.emitter.on(
              "change",
              this.onParentGlobalDisabledChange_
            );
      }
      static create(i) {
        var o, h, f;
        const b = i !== null && i !== void 0 ? i : {};
        return new re(
          N.createCore({
            disabled: (o = b.disabled) !== null && o !== void 0 ? o : !1,
            disposed: !1,
            hidden: (h = b.hidden) !== null && h !== void 0 ? h : !1,
            parent: (f = b.parent) !== null && f !== void 0 ? f : null
          })
        );
      }
      get globalDisabled() {
        return this.globalDisabled_;
      }
      bindClassModifiers(i) {
        L(this.globalDisabled_, xt(i, "disabled")),
          T(this, "hidden", xt(i, "hidden"));
      }
      bindDisabled(i) {
        L(this.globalDisabled_, (o) => {
          i.disabled = o;
        });
      }
      bindTabIndex(i) {
        L(this.globalDisabled_, (o) => {
          i.tabIndex = o ? -1 : 0;
        });
      }
      handleDispose(i) {
        this.value("disposed").emitter.on("change", (o) => {
          o && i();
        });
      }
      getGlobalDisabled_() {
        const i = this.get("parent");
        return (i ? i.globalDisabled.rawValue : !1) || this.get("disabled");
      }
      updateGlobalDisabled_() {
        this.setGlobalDisabled_(this.getGlobalDisabled_());
      }
      onDisabledChange_() {
        this.updateGlobalDisabled_();
      }
      onParentGlobalDisabledChange_() {
        this.updateGlobalDisabled_();
      }
      onParentChange_(i) {
        var o;
        const h = i.previousRawValue;
        h !== null &&
          h !== void 0 &&
          h.globalDisabled.emitter.off(
            "change",
            this.onParentGlobalDisabledChange_
          ),
          (o = this.get("parent")) === null ||
            o === void 0 ||
            o.globalDisabled.emitter.on(
              "change",
              this.onParentGlobalDisabledChange_
            ),
          this.updateGlobalDisabled_();
      }
    }
    function Yc() {
      return ["veryfirst", "first", "last", "verylast"];
    }
    const Jo = k(""),
      Zo = { veryfirst: "vfst", first: "fst", last: "lst", verylast: "vlst" };
    class Hi {
      constructor(i) {
        (this.parent_ = null),
          (this.blade = i.blade),
          (this.view = i.view),
          (this.viewProps = i.viewProps);
        const o = this.view.element;
        this.blade.value("positions").emitter.on("change", () => {
          Yc().forEach((h) => {
            o.classList.remove(Jo(void 0, Zo[h]));
          }),
            this.blade.get("positions").forEach((h) => {
              o.classList.add(Jo(void 0, Zo[h]));
            });
        }),
          this.viewProps.handleDispose(() => {
            ft(o);
          });
      }
      get parent() {
        return this.parent_;
      }
      set parent(i) {
        if (((this.parent_ = i), !("parent" in this.viewProps.valMap_))) {
          Ut({
            key: "parent",
            target: re.name,
            place: "BladeController.parent"
          });
          return;
        }
        this.viewProps.set(
          "parent",
          this.parent_ ? this.parent_.viewProps : null
        );
      }
    }
    const Zt = "http://www.w3.org/2000/svg";
    function Ks(a) {
      a.offsetHeight;
    }
    function Xc(a, i) {
      const o = a.style.transition;
      (a.style.transition = "none"), i(), (a.style.transition = o);
    }
    function Vn(a) {
      return a.ontouchstart !== void 0;
    }
    function Jc() {
      return globalThis;
    }
    function Zc() {
      return Jc().document;
    }
    function Qc(a) {
      const i = a.ownerDocument.defaultView;
      return i && "document" in i
        ? a.getContext("2d", { willReadFrequently: !0 })
        : null;
    }
    const td = {
      check: '<path d="M2 8l4 4l8 -8"/>',
      dropdown: '<path d="M5 7h6l-3 3 z"/>',
      p2dpad:
        '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
    };
    function js(a, i) {
      const o = a.createElementNS(Zt, "svg");
      return (o.innerHTML = td[i]), o;
    }
    function Qo(a, i, o) {
      a.insertBefore(i, a.children[o]);
    }
    function ta(a) {
      a.parentElement && a.parentElement.removeChild(a);
    }
    function ea(a) {
      for (; a.children.length > 0; ) a.removeChild(a.children[0]);
    }
    function ed(a) {
      for (; a.childNodes.length > 0; ) a.removeChild(a.childNodes[0]);
    }
    function ia(a) {
      return a.relatedTarget
        ? a.relatedTarget
        : "explicitOriginalTarget" in a
        ? a.explicitOriginalTarget
        : null;
    }
    const Ui = k("lbl");
    function id(a, i) {
      const o = a.createDocumentFragment();
      return (
        i
          .split(
            `
`
          )
          .map((f) => a.createTextNode(f))
          .forEach((f, b) => {
            b > 0 && o.appendChild(a.createElement("br")), o.appendChild(f);
          }),
        o
      );
    }
    class sa {
      constructor(i, o) {
        (this.element = i.createElement("div")),
          this.element.classList.add(Ui()),
          o.viewProps.bindClassModifiers(this.element);
        const h = i.createElement("div");
        h.classList.add(Ui("l")),
          T(o.props, "label", (b) => {
            _(b)
              ? this.element.classList.add(Ui(void 0, "nol"))
              : (this.element.classList.remove(Ui(void 0, "nol")),
                ed(h),
                h.appendChild(id(i, b)));
          }),
          this.element.appendChild(h),
          (this.labelElement = h);
        const f = i.createElement("div");
        f.classList.add(Ui("v")),
          this.element.appendChild(f),
          (this.valueElement = f);
      }
    }
    class $s extends Hi {
      constructor(i, o) {
        const h = o.valueController.viewProps;
        super(
          Object.assign(Object.assign({}, o), {
            view: new sa(i, { props: o.props, viewProps: h }),
            viewProps: h
          })
        ),
          (this.props = o.props),
          (this.valueController = o.valueController),
          this.view.valueElement.appendChild(this.valueController.view.element);
      }
    }
    const sd = {
      id: "button",
      type: "blade",
      accept(a) {
        const i = W,
          o = q(a, {
            title: i.required.string,
            view: i.required.constant("button"),
            label: i.optional.string
          });
        return o ? { params: o } : null;
      },
      controller(a) {
        return new $s(a.document, {
          blade: a.blade,
          props: N.fromObject({ label: a.params.label }),
          valueController: new et(a.document, {
            props: N.fromObject({ title: a.params.title }),
            viewProps: a.viewProps
          })
        });
      },
      api(a) {
        return !(a.controller instanceof $s) ||
          !(a.controller.valueController instanceof et)
          ? null
          : new S(a.controller);
      }
    };
    class pi extends Hi {
      constructor(i) {
        super(i), (this.value = i.value);
      }
    }
    function Ki() {
      return new N({ positions: U([], { equals: g }) });
    }
    class ji extends N {
      constructor(i) {
        super(i);
      }
      static create(i) {
        const o = {
            completed: !0,
            expanded: i,
            expandedHeight: null,
            shouldFixHeight: !1,
            temporaryExpanded: null
          },
          h = N.createCore(o);
        return new ji(h);
      }
      get styleExpanded() {
        var i;
        return (i = this.get("temporaryExpanded")) !== null && i !== void 0
          ? i
          : this.get("expanded");
      }
      get styleHeight() {
        if (!this.styleExpanded) return "0";
        const i = this.get("expandedHeight");
        return this.get("shouldFixHeight") && !_(i) ? `${i}px` : "auto";
      }
      bindExpandedClass(i, o) {
        const h = () => {
          this.styleExpanded ? i.classList.add(o) : i.classList.remove(o);
        };
        T(this, "expanded", h), T(this, "temporaryExpanded", h);
      }
      cleanUpTransition() {
        this.set("shouldFixHeight", !1),
          this.set("expandedHeight", null),
          this.set("completed", !0);
      }
    }
    function nd(a, i) {
      let o = 0;
      return (
        Xc(i, () => {
          a.set("expandedHeight", null),
            a.set("temporaryExpanded", !0),
            Ks(i),
            (o = i.clientHeight),
            a.set("temporaryExpanded", null),
            Ks(i);
        }),
        o
      );
    }
    function na(a, i) {
      i.style.height = a.styleHeight;
    }
    function Nn(a, i) {
      a.value("expanded").emitter.on("beforechange", () => {
        if ((a.set("completed", !1), _(a.get("expandedHeight")))) {
          const o = nd(a, i);
          o > 0 && a.set("expandedHeight", o);
        }
        a.set("shouldFixHeight", !0), Ks(i);
      }),
        a.emitter.on("change", () => {
          na(a, i);
        }),
        na(a, i),
        i.addEventListener("transitionend", (o) => {
          o.propertyName === "height" && a.cleanUpTransition();
        });
    }
    class zn extends r {
      constructor(i, o) {
        super(i), (this.rackApi_ = o);
      }
    }
    function rd(a, i) {
      return a.addBlade(
        Object.assign(Object.assign({}, i), { view: "button" })
      );
    }
    function od(a, i) {
      return a.addBlade(
        Object.assign(Object.assign({}, i), { view: "folder" })
      );
    }
    function ad(a, i) {
      const o = i !== null && i !== void 0 ? i : {};
      return a.addBlade(
        Object.assign(Object.assign({}, o), { view: "separator" })
      );
    }
    function ld(a, i) {
      return a.addBlade(Object.assign(Object.assign({}, i), { view: "tab" }));
    }
    class Hn {
      constructor(i) {
        (this.emitter = new C()),
          (this.items_ = []),
          (this.cache_ = new Set()),
          (this.onSubListAdd_ = this.onSubListAdd_.bind(this)),
          (this.onSubListRemove_ = this.onSubListRemove_.bind(this)),
          (this.extract_ = i);
      }
      get items() {
        return this.items_;
      }
      allItems() {
        return Array.from(this.cache_);
      }
      find(i) {
        for (const o of this.allItems()) if (i(o)) return o;
        return null;
      }
      includes(i) {
        return this.cache_.has(i);
      }
      add(i, o) {
        if (this.includes(i)) throw v.shouldNeverHappen();
        const h = o !== void 0 ? o : this.items_.length;
        this.items_.splice(h, 0, i), this.cache_.add(i);
        const f = this.extract_(i);
        f &&
          (f.emitter.on("add", this.onSubListAdd_),
          f.emitter.on("remove", this.onSubListRemove_),
          f.allItems().forEach((b) => {
            this.cache_.add(b);
          })),
          this.emitter.emit("add", {
            index: h,
            item: i,
            root: this,
            target: this
          });
      }
      remove(i) {
        const o = this.items_.indexOf(i);
        if (o < 0) return;
        this.items_.splice(o, 1), this.cache_.delete(i);
        const h = this.extract_(i);
        h &&
          (h.emitter.off("add", this.onSubListAdd_),
          h.emitter.off("remove", this.onSubListRemove_)),
          this.emitter.emit("remove", {
            index: o,
            item: i,
            root: this,
            target: this
          });
      }
      onSubListAdd_(i) {
        this.cache_.add(i.item),
          this.emitter.emit("add", {
            index: i.index,
            item: i.item,
            root: this,
            target: i.target
          });
      }
      onSubListRemove_(i) {
        this.cache_.delete(i.item),
          this.emitter.emit("remove", {
            index: i.index,
            item: i.item,
            root: this,
            target: i.target
          });
      }
    }
    class Un extends r {
      constructor(i) {
        super(i),
          (this.onBindingChange_ = this.onBindingChange_.bind(this)),
          (this.emitter_ = new C()),
          this.controller_.binding.emitter.on("change", this.onBindingChange_);
      }
      get label() {
        return this.controller_.props.get("label");
      }
      set label(i) {
        this.controller_.props.set("label", i);
      }
      on(i, o) {
        const h = o.bind(this);
        return (
          this.emitter_.on(i, (f) => {
            h(f.event);
          }),
          this
        );
      }
      refresh() {
        this.controller_.binding.read();
      }
      onBindingChange_(i) {
        const o = i.sender.target.read();
        this.emitter_.emit("change", {
          event: new u(
            this,
            o,
            this.controller_.binding.target.presetKey,
            i.options.last
          )
        });
      }
    }
    class Qt extends $s {
      constructor(i, o) {
        super(i, o), (this.binding = o.binding);
      }
    }
    class Kn extends r {
      constructor(i) {
        super(i),
          (this.onBindingUpdate_ = this.onBindingUpdate_.bind(this)),
          (this.emitter_ = new C()),
          this.controller_.binding.emitter.on("update", this.onBindingUpdate_);
      }
      get label() {
        return this.controller_.props.get("label");
      }
      set label(i) {
        this.controller_.props.set("label", i);
      }
      on(i, o) {
        const h = o.bind(this);
        return (
          this.emitter_.on(i, (f) => {
            h(f.event);
          }),
          this
        );
      }
      refresh() {
        this.controller_.binding.read();
      }
      onBindingUpdate_(i) {
        const o = i.sender.target.read();
        this.emitter_.emit("update", {
          event: new c(this, o, this.controller_.binding.target.presetKey)
        });
      }
    }
    class we extends $s {
      constructor(i, o) {
        super(i, o),
          (this.binding = o.binding),
          this.viewProps.bindDisabled(this.binding.ticker),
          this.viewProps.handleDispose(() => {
            this.binding.dispose();
          });
      }
    }
    function hd(a) {
      return a instanceof qs
        ? a.apiSet_
        : a instanceof zn
        ? a.rackApi_.apiSet_
        : null;
    }
    function $i(a, i) {
      const o = a.find((h) => h.controller_ === i);
      if (!o) throw v.shouldNeverHappen();
      return o;
    }
    function ra(a, i, o) {
      if (!D.isBindable(a)) throw v.notBindable();
      return new D(a, i, o);
    }
    class qs extends r {
      constructor(i, o) {
        super(i),
          (this.onRackAdd_ = this.onRackAdd_.bind(this)),
          (this.onRackRemove_ = this.onRackRemove_.bind(this)),
          (this.onRackInputChange_ = this.onRackInputChange_.bind(this)),
          (this.onRackMonitorUpdate_ = this.onRackMonitorUpdate_.bind(this)),
          (this.emitter_ = new C()),
          (this.apiSet_ = new Hn(hd)),
          (this.pool_ = o);
        const h = this.controller_.rack;
        h.emitter.on("add", this.onRackAdd_),
          h.emitter.on("remove", this.onRackRemove_),
          h.emitter.on("inputchange", this.onRackInputChange_),
          h.emitter.on("monitorupdate", this.onRackMonitorUpdate_),
          h.children.forEach((f) => {
            this.setUpApi_(f);
          });
      }
      get children() {
        return this.controller_.rack.children.map((i) => $i(this.apiSet_, i));
      }
      addInput(i, o, h) {
        const f = h !== null && h !== void 0 ? h : {},
          b = this.controller_.view.element.ownerDocument,
          x = this.pool_.createInput(b, ra(i, o, f.presetKey), f),
          I = new Un(x);
        return this.add(I, f.index);
      }
      addMonitor(i, o, h) {
        const f = h !== null && h !== void 0 ? h : {},
          b = this.controller_.view.element.ownerDocument,
          x = this.pool_.createMonitor(b, ra(i, o), f),
          I = new Kn(x);
        return this.add(I, f.index);
      }
      addFolder(i) {
        return od(this, i);
      }
      addButton(i) {
        return rd(this, i);
      }
      addSeparator(i) {
        return ad(this, i);
      }
      addTab(i) {
        return ld(this, i);
      }
      add(i, o) {
        this.controller_.rack.add(i.controller_, o);
        const h = this.apiSet_.find((f) => f.controller_ === i.controller_);
        return h && this.apiSet_.remove(h), this.apiSet_.add(i), i;
      }
      remove(i) {
        this.controller_.rack.remove(i.controller_);
      }
      addBlade(i) {
        const o = this.controller_.view.element.ownerDocument,
          h = this.pool_.createBlade(o, i),
          f = this.pool_.createBladeApi(h);
        return this.add(f, i.index);
      }
      on(i, o) {
        const h = o.bind(this);
        return (
          this.emitter_.on(i, (f) => {
            h(f.event);
          }),
          this
        );
      }
      setUpApi_(i) {
        this.apiSet_.find((h) => h.controller_ === i) ||
          this.apiSet_.add(this.pool_.createBladeApi(i));
      }
      onRackAdd_(i) {
        this.setUpApi_(i.bladeController);
      }
      onRackRemove_(i) {
        if (i.isRoot) {
          const o = $i(this.apiSet_, i.bladeController);
          this.apiSet_.remove(o);
        }
      }
      onRackInputChange_(i) {
        const o = i.bladeController;
        if (o instanceof Qt) {
          const h = $i(this.apiSet_, o),
            f = o.binding;
          this.emitter_.emit("change", {
            event: new u(h, f.target.read(), f.target.presetKey, i.options.last)
          });
        } else if (o instanceof pi) {
          const h = $i(this.apiSet_, o);
          this.emitter_.emit("change", {
            event: new u(h, o.value.rawValue, void 0, i.options.last)
          });
        }
      }
      onRackMonitorUpdate_(i) {
        if (!(i.bladeController instanceof we)) throw v.shouldNeverHappen();
        const o = $i(this.apiSet_, i.bladeController),
          h = i.bladeController.binding;
        this.emitter_.emit("update", {
          event: new c(o, h.target.read(), h.target.presetKey)
        });
      }
    }
    class jn extends zn {
      constructor(i, o) {
        super(i, new qs(i.rackController, o)),
          (this.emitter_ = new C()),
          this.controller_.foldable
            .value("expanded")
            .emitter.on("change", (h) => {
              this.emitter_.emit("fold", {
                event: new d(this, h.sender.rawValue)
              });
            }),
          this.rackApi_.on("change", (h) => {
            this.emitter_.emit("change", { event: h });
          }),
          this.rackApi_.on("update", (h) => {
            this.emitter_.emit("update", { event: h });
          });
      }
      get expanded() {
        return this.controller_.foldable.get("expanded");
      }
      set expanded(i) {
        this.controller_.foldable.set("expanded", i);
      }
      get title() {
        return this.controller_.props.get("title");
      }
      set title(i) {
        this.controller_.props.set("title", i);
      }
      get children() {
        return this.rackApi_.children;
      }
      addInput(i, o, h) {
        return this.rackApi_.addInput(i, o, h);
      }
      addMonitor(i, o, h) {
        return this.rackApi_.addMonitor(i, o, h);
      }
      addFolder(i) {
        return this.rackApi_.addFolder(i);
      }
      addButton(i) {
        return this.rackApi_.addButton(i);
      }
      addSeparator(i) {
        return this.rackApi_.addSeparator(i);
      }
      addTab(i) {
        return this.rackApi_.addTab(i);
      }
      add(i, o) {
        return this.rackApi_.add(i, o);
      }
      remove(i) {
        this.rackApi_.remove(i);
      }
      addBlade(i) {
        return this.rackApi_.addBlade(i);
      }
      on(i, o) {
        const h = o.bind(this);
        return (
          this.emitter_.on(i, (f) => {
            h(f.event);
          }),
          this
        );
      }
    }
    class $n extends Hi {
      constructor(i) {
        super({
          blade: i.blade,
          view: i.view,
          viewProps: i.rackController.viewProps
        }),
          (this.rackController = i.rackController);
      }
    }
    class ud {
      constructor(i, o) {
        const h = k(o.viewName);
        (this.element = i.createElement("div")),
          this.element.classList.add(h()),
          o.viewProps.bindClassModifiers(this.element);
      }
    }
    function cd(a, i) {
      for (let o = 0; o < a.length; o++) {
        const h = a[o];
        if (h instanceof Qt && h.binding === i) return h;
      }
      return null;
    }
    function dd(a, i) {
      for (let o = 0; o < a.length; o++) {
        const h = a[o];
        if (h instanceof we && h.binding === i) return h;
      }
      return null;
    }
    function pd(a, i) {
      for (let o = 0; o < a.length; o++) {
        const h = a[o];
        if (h instanceof pi && h.value === i) return h;
      }
      return null;
    }
    function qn(a) {
      return a instanceof qi
        ? a.rack
        : a instanceof $n
        ? a.rackController.rack
        : null;
    }
    function fd(a) {
      const i = qn(a);
      return i ? i.bcSet_ : null;
    }
    class md {
      constructor(i) {
        var o, h;
        (this.onBladePositionsChange_ =
          this.onBladePositionsChange_.bind(this)),
          (this.onSetAdd_ = this.onSetAdd_.bind(this)),
          (this.onSetRemove_ = this.onSetRemove_.bind(this)),
          (this.onChildDispose_ = this.onChildDispose_.bind(this)),
          (this.onChildPositionsChange_ =
            this.onChildPositionsChange_.bind(this)),
          (this.onChildInputChange_ = this.onChildInputChange_.bind(this)),
          (this.onChildMonitorUpdate_ = this.onChildMonitorUpdate_.bind(this)),
          (this.onChildValueChange_ = this.onChildValueChange_.bind(this)),
          (this.onChildViewPropsChange_ =
            this.onChildViewPropsChange_.bind(this)),
          (this.onDescendantLayout_ = this.onDescendantLayout_.bind(this)),
          (this.onDescendantInputChange_ =
            this.onDescendantInputChange_.bind(this)),
          (this.onDescendantMonitorUpdate_ =
            this.onDescendantMonitorUpdate_.bind(this)),
          (this.emitter = new C()),
          (this.blade_ = (o = i.blade) !== null && o !== void 0 ? o : null),
          (h = this.blade_) === null ||
            h === void 0 ||
            h
              .value("positions")
              .emitter.on("change", this.onBladePositionsChange_),
          (this.viewProps = i.viewProps),
          (this.bcSet_ = new Hn(fd)),
          this.bcSet_.emitter.on("add", this.onSetAdd_),
          this.bcSet_.emitter.on("remove", this.onSetRemove_);
      }
      get children() {
        return this.bcSet_.items;
      }
      add(i, o) {
        var h;
        (h = i.parent) === null || h === void 0 || h.remove(i),
          y(i, "parent")
            ? (i.parent = this)
            : ((i.parent_ = this),
              Ut({
                key: "parent",
                target: "BladeController",
                place: "BladeRack.add"
              })),
          this.bcSet_.add(i, o);
      }
      remove(i) {
        y(i, "parent")
          ? (i.parent = null)
          : ((i.parent_ = null),
            Ut({
              key: "parent",
              target: "BladeController",
              place: "BladeRack.remove"
            })),
          this.bcSet_.remove(i);
      }
      find(i) {
        return this.bcSet_.allItems().filter((o) => o instanceof i);
      }
      onSetAdd_(i) {
        this.updatePositions_();
        const o = i.target === i.root;
        if (
          (this.emitter.emit("add", {
            bladeController: i.item,
            index: i.index,
            isRoot: o,
            sender: this
          }),
          !o)
        )
          return;
        const h = i.item;
        if (
          (h.viewProps.emitter.on("change", this.onChildViewPropsChange_),
          h.blade
            .value("positions")
            .emitter.on("change", this.onChildPositionsChange_),
          h.viewProps.handleDispose(this.onChildDispose_),
          h instanceof Qt)
        )
          h.binding.emitter.on("change", this.onChildInputChange_);
        else if (h instanceof we)
          h.binding.emitter.on("update", this.onChildMonitorUpdate_);
        else if (h instanceof pi)
          h.value.emitter.on("change", this.onChildValueChange_);
        else {
          const f = qn(h);
          if (f) {
            const b = f.emitter;
            b.on("layout", this.onDescendantLayout_),
              b.on("inputchange", this.onDescendantInputChange_),
              b.on("monitorupdate", this.onDescendantMonitorUpdate_);
          }
        }
      }
      onSetRemove_(i) {
        this.updatePositions_();
        const o = i.target === i.root;
        if (
          (this.emitter.emit("remove", {
            bladeController: i.item,
            isRoot: o,
            sender: this
          }),
          !o)
        )
          return;
        const h = i.item;
        if (h instanceof Qt)
          h.binding.emitter.off("change", this.onChildInputChange_);
        else if (h instanceof we)
          h.binding.emitter.off("update", this.onChildMonitorUpdate_);
        else if (h instanceof pi)
          h.value.emitter.off("change", this.onChildValueChange_);
        else {
          const f = qn(h);
          if (f) {
            const b = f.emitter;
            b.off("layout", this.onDescendantLayout_),
              b.off("inputchange", this.onDescendantInputChange_),
              b.off("monitorupdate", this.onDescendantMonitorUpdate_);
          }
        }
      }
      updatePositions_() {
        const i = this.bcSet_.items.filter((f) => !f.viewProps.get("hidden")),
          o = i[0],
          h = i[i.length - 1];
        this.bcSet_.items.forEach((f) => {
          const b = [];
          f === o &&
            (b.push("first"),
            (!this.blade_ ||
              this.blade_.get("positions").includes("veryfirst")) &&
              b.push("veryfirst")),
            f === h &&
              (b.push("last"),
              (!this.blade_ ||
                this.blade_.get("positions").includes("verylast")) &&
                b.push("verylast")),
            f.blade.set("positions", b);
        });
      }
      onChildPositionsChange_() {
        this.updatePositions_(), this.emitter.emit("layout", { sender: this });
      }
      onChildViewPropsChange_(i) {
        this.updatePositions_(), this.emitter.emit("layout", { sender: this });
      }
      onChildDispose_() {
        this.bcSet_.items
          .filter((o) => o.viewProps.get("disposed"))
          .forEach((o) => {
            this.bcSet_.remove(o);
          });
      }
      onChildInputChange_(i) {
        const o = cd(this.find(Qt), i.sender);
        if (!o) throw v.alreadyDisposed();
        this.emitter.emit("inputchange", {
          bladeController: o,
          options: i.options,
          sender: this
        });
      }
      onChildMonitorUpdate_(i) {
        const o = dd(this.find(we), i.sender);
        if (!o) throw v.alreadyDisposed();
        this.emitter.emit("monitorupdate", {
          bladeController: o,
          sender: this
        });
      }
      onChildValueChange_(i) {
        const o = pd(this.find(pi), i.sender);
        if (!o) throw v.alreadyDisposed();
        this.emitter.emit("inputchange", {
          bladeController: o,
          options: i.options,
          sender: this
        });
      }
      onDescendantLayout_(i) {
        this.updatePositions_(), this.emitter.emit("layout", { sender: this });
      }
      onDescendantInputChange_(i) {
        this.emitter.emit("inputchange", {
          bladeController: i.bladeController,
          options: i.options,
          sender: this
        });
      }
      onDescendantMonitorUpdate_(i) {
        this.emitter.emit("monitorupdate", {
          bladeController: i.bladeController,
          sender: this
        });
      }
      onBladePositionsChange_() {
        this.updatePositions_();
      }
    }
    class qi extends Hi {
      constructor(i, o) {
        super(
          Object.assign(Object.assign({}, o), {
            view: new ud(i, { viewName: "brk", viewProps: o.viewProps })
          })
        ),
          (this.onRackAdd_ = this.onRackAdd_.bind(this)),
          (this.onRackRemove_ = this.onRackRemove_.bind(this));
        const h = new md({
          blade: o.root ? void 0 : o.blade,
          viewProps: o.viewProps
        });
        h.emitter.on("add", this.onRackAdd_),
          h.emitter.on("remove", this.onRackRemove_),
          (this.rack = h),
          this.viewProps.handleDispose(() => {
            for (let f = this.rack.children.length - 1; f >= 0; f--)
              this.rack.children[f].viewProps.set("disposed", !0);
          });
      }
      onRackAdd_(i) {
        i.isRoot &&
          Qo(this.view.element, i.bladeController.view.element, i.index);
      }
      onRackRemove_(i) {
        i.isRoot && ta(i.bladeController.view.element);
      }
    }
    const oa = k("cnt");
    class _d {
      constructor(i, o) {
        var h;
        (this.className_ = k(
          (h = o.viewName) !== null && h !== void 0 ? h : "fld"
        )),
          (this.element = i.createElement("div")),
          this.element.classList.add(this.className_(), oa()),
          o.viewProps.bindClassModifiers(this.element),
          (this.foldable_ = o.foldable),
          this.foldable_.bindExpandedClass(
            this.element,
            this.className_(void 0, "expanded")
          ),
          T(
            this.foldable_,
            "completed",
            B(this.element, this.className_(void 0, "cpl"))
          );
        const f = i.createElement("button");
        f.classList.add(this.className_("b")),
          T(o.props, "title", (J) => {
            _(J)
              ? this.element.classList.add(this.className_(void 0, "not"))
              : this.element.classList.remove(this.className_(void 0, "not"));
          }),
          o.viewProps.bindDisabled(f),
          this.element.appendChild(f),
          (this.buttonElement = f);
        const b = i.createElement("div");
        b.classList.add(this.className_("i")), this.element.appendChild(b);
        const x = i.createElement("div");
        x.classList.add(this.className_("t")),
          V(o.props.value("title"), x),
          this.buttonElement.appendChild(x),
          (this.titleElement = x);
        const I = i.createElement("div");
        I.classList.add(this.className_("m")),
          this.buttonElement.appendChild(I);
        const Y = o.containerElement;
        Y.classList.add(this.className_("c")),
          this.element.appendChild(Y),
          (this.containerElement = Y);
      }
    }
    class Gn extends $n {
      constructor(i, o) {
        var h;
        const f = ji.create((h = o.expanded) !== null && h !== void 0 ? h : !0),
          b = new qi(i, {
            blade: o.blade,
            root: o.root,
            viewProps: o.viewProps
          });
        super(
          Object.assign(Object.assign({}, o), {
            rackController: b,
            view: new _d(i, {
              containerElement: b.view.element,
              foldable: f,
              props: o.props,
              viewName: o.root ? "rot" : void 0,
              viewProps: o.viewProps
            })
          })
        ),
          (this.onTitleClick_ = this.onTitleClick_.bind(this)),
          (this.props = o.props),
          (this.foldable = f),
          Nn(this.foldable, this.view.containerElement),
          this.rackController.rack.emitter.on("add", () => {
            this.foldable.cleanUpTransition();
          }),
          this.rackController.rack.emitter.on("remove", () => {
            this.foldable.cleanUpTransition();
          }),
          this.view.buttonElement.addEventListener("click", this.onTitleClick_);
      }
      get document() {
        return this.view.element.ownerDocument;
      }
      onTitleClick_() {
        this.foldable.set("expanded", !this.foldable.get("expanded"));
      }
    }
    const vd = {
      id: "folder",
      type: "blade",
      accept(a) {
        const i = W,
          o = q(a, {
            title: i.required.string,
            view: i.required.constant("folder"),
            expanded: i.optional.boolean
          });
        return o ? { params: o } : null;
      },
      controller(a) {
        return new Gn(a.document, {
          blade: a.blade,
          expanded: a.params.expanded,
          props: N.fromObject({ title: a.params.title }),
          viewProps: a.viewProps
        });
      },
      api(a) {
        return a.controller instanceof Gn ? new jn(a.controller, a.pool) : null;
      }
    };
    class fi extends pi {
      constructor(i, o) {
        const h = o.valueController.viewProps;
        super(
          Object.assign(Object.assign({}, o), {
            value: o.valueController.value,
            view: new sa(i, { props: o.props, viewProps: h }),
            viewProps: h
          })
        ),
          (this.props = o.props),
          (this.valueController = o.valueController),
          this.view.valueElement.appendChild(this.valueController.view.element);
      }
    }
    class aa extends r {}
    const la = k("spr");
    class gd {
      constructor(i, o) {
        (this.element = i.createElement("div")),
          this.element.classList.add(la()),
          o.viewProps.bindClassModifiers(this.element);
        const h = i.createElement("hr");
        h.classList.add(la("r")), this.element.appendChild(h);
      }
    }
    class ha extends Hi {
      constructor(i, o) {
        super(
          Object.assign(Object.assign({}, o), {
            view: new gd(i, { viewProps: o.viewProps })
          })
        );
      }
    }
    const bd = {
        id: "separator",
        type: "blade",
        accept(a) {
          const o = q(a, { view: W.required.constant("separator") });
          return o ? { params: o } : null;
        },
        controller(a) {
          return new ha(a.document, { blade: a.blade, viewProps: a.viewProps });
        },
        api(a) {
          return a.controller instanceof ha ? new aa(a.controller) : null;
        }
      },
      Gi = k("tbi");
    class wd {
      constructor(i, o) {
        (this.element = i.createElement("div")),
          this.element.classList.add(Gi()),
          o.viewProps.bindClassModifiers(this.element),
          T(o.props, "selected", (b) => {
            b
              ? this.element.classList.add(Gi(void 0, "sel"))
              : this.element.classList.remove(Gi(void 0, "sel"));
          });
        const h = i.createElement("button");
        h.classList.add(Gi("b")),
          o.viewProps.bindDisabled(h),
          this.element.appendChild(h),
          (this.buttonElement = h);
        const f = i.createElement("div");
        f.classList.add(Gi("t")),
          V(o.props.value("title"), f),
          this.buttonElement.appendChild(f),
          (this.titleElement = f);
      }
    }
    class yd {
      constructor(i, o) {
        (this.emitter = new C()),
          (this.onClick_ = this.onClick_.bind(this)),
          (this.props = o.props),
          (this.viewProps = o.viewProps),
          (this.view = new wd(i, { props: o.props, viewProps: o.viewProps })),
          this.view.buttonElement.addEventListener("click", this.onClick_);
      }
      onClick_() {
        this.emitter.emit("click", { sender: this });
      }
    }
    class ua {
      constructor(i, o) {
        (this.onItemClick_ = this.onItemClick_.bind(this)),
          (this.ic_ = new yd(i, {
            props: o.itemProps,
            viewProps: re.create()
          })),
          this.ic_.emitter.on("click", this.onItemClick_),
          (this.cc_ = new qi(i, { blade: Ki(), viewProps: re.create() })),
          (this.props = o.props),
          T(this.props, "selected", (h) => {
            this.itemController.props.set("selected", h),
              this.contentController.viewProps.set("hidden", !h);
          });
      }
      get itemController() {
        return this.ic_;
      }
      get contentController() {
        return this.cc_;
      }
      onItemClick_() {
        this.props.set("selected", !0);
      }
    }
    class ca {
      constructor(i, o) {
        (this.controller_ = i), (this.rackApi_ = o);
      }
      get title() {
        var i;
        return (i = this.controller_.itemController.props.get("title")) !==
          null && i !== void 0
          ? i
          : "";
      }
      set title(i) {
        this.controller_.itemController.props.set("title", i);
      }
      get selected() {
        return this.controller_.props.get("selected");
      }
      set selected(i) {
        this.controller_.props.set("selected", i);
      }
      get children() {
        return this.rackApi_.children;
      }
      addButton(i) {
        return this.rackApi_.addButton(i);
      }
      addFolder(i) {
        return this.rackApi_.addFolder(i);
      }
      addSeparator(i) {
        return this.rackApi_.addSeparator(i);
      }
      addTab(i) {
        return this.rackApi_.addTab(i);
      }
      add(i, o) {
        this.rackApi_.add(i, o);
      }
      remove(i) {
        this.rackApi_.remove(i);
      }
      addInput(i, o, h) {
        return this.rackApi_.addInput(i, o, h);
      }
      addMonitor(i, o, h) {
        return this.rackApi_.addMonitor(i, o, h);
      }
      addBlade(i) {
        return this.rackApi_.addBlade(i);
      }
    }
    class da extends zn {
      constructor(i, o) {
        super(i, new qs(i.rackController, o)),
          (this.onPageAdd_ = this.onPageAdd_.bind(this)),
          (this.onPageRemove_ = this.onPageRemove_.bind(this)),
          (this.onSelect_ = this.onSelect_.bind(this)),
          (this.emitter_ = new C()),
          (this.pageApiMap_ = new Map()),
          this.rackApi_.on("change", (h) => {
            this.emitter_.emit("change", { event: h });
          }),
          this.rackApi_.on("update", (h) => {
            this.emitter_.emit("update", { event: h });
          }),
          this.controller_.tab.selectedIndex.emitter.on(
            "change",
            this.onSelect_
          ),
          this.controller_.pageSet.emitter.on("add", this.onPageAdd_),
          this.controller_.pageSet.emitter.on("remove", this.onPageRemove_),
          this.controller_.pageSet.items.forEach((h) => {
            this.setUpPageApi_(h);
          });
      }
      get pages() {
        return this.controller_.pageSet.items.map((i) => {
          const o = this.pageApiMap_.get(i);
          if (!o) throw v.shouldNeverHappen();
          return o;
        });
      }
      addPage(i) {
        const o = this.controller_.view.element.ownerDocument,
          h = new ua(o, {
            itemProps: N.fromObject({ selected: !1, title: i.title }),
            props: N.fromObject({ selected: !1 })
          });
        this.controller_.add(h, i.index);
        const f = this.pageApiMap_.get(h);
        if (!f) throw v.shouldNeverHappen();
        return f;
      }
      removePage(i) {
        this.controller_.remove(i);
      }
      on(i, o) {
        const h = o.bind(this);
        return (
          this.emitter_.on(i, (f) => {
            h(f.event);
          }),
          this
        );
      }
      setUpPageApi_(i) {
        const o = this.rackApi_.apiSet_.find(
          (f) => f.controller_ === i.contentController
        );
        if (!o) throw v.shouldNeverHappen();
        const h = new ca(i, o);
        this.pageApiMap_.set(i, h);
      }
      onPageAdd_(i) {
        this.setUpPageApi_(i.item);
      }
      onPageRemove_(i) {
        if (!this.pageApiMap_.get(i.item)) throw v.shouldNeverHappen();
        this.pageApiMap_.delete(i.item);
      }
      onSelect_(i) {
        this.emitter_.emit("select", { event: new p(this, i.rawValue) });
      }
    }
    const pa = -1;
    class Dd {
      constructor() {
        (this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this)),
          (this.empty = U(!0)),
          (this.selectedIndex = U(pa)),
          (this.items_ = []);
      }
      add(i, o) {
        const h = o !== null && o !== void 0 ? o : this.items_.length;
        this.items_.splice(h, 0, i),
          i.emitter.on("change", this.onItemSelectedChange_),
          this.keepSelection_();
      }
      remove(i) {
        const o = this.items_.indexOf(i);
        o < 0 ||
          (this.items_.splice(o, 1),
          i.emitter.off("change", this.onItemSelectedChange_),
          this.keepSelection_());
      }
      keepSelection_() {
        if (this.items_.length === 0) {
          (this.selectedIndex.rawValue = pa), (this.empty.rawValue = !0);
          return;
        }
        const i = this.items_.findIndex((o) => o.rawValue);
        i < 0
          ? (this.items_.forEach((o, h) => {
              o.rawValue = h === 0;
            }),
            (this.selectedIndex.rawValue = 0))
          : (this.items_.forEach((o, h) => {
              o.rawValue = h === i;
            }),
            (this.selectedIndex.rawValue = i)),
          (this.empty.rawValue = !1);
      }
      onItemSelectedChange_(i) {
        if (i.rawValue) {
          const o = this.items_.findIndex((h) => h === i.sender);
          this.items_.forEach((h, f) => {
            h.rawValue = f === o;
          }),
            (this.selectedIndex.rawValue = o);
        } else this.keepSelection_();
      }
    }
    const Wi = k("tab");
    class Cd {
      constructor(i, o) {
        (this.element = i.createElement("div")),
          this.element.classList.add(Wi(), oa()),
          o.viewProps.bindClassModifiers(this.element),
          L(o.empty, B(this.element, Wi(void 0, "nop")));
        const h = i.createElement("div");
        h.classList.add(Wi("t")),
          this.element.appendChild(h),
          (this.itemsElement = h);
        const f = i.createElement("div");
        f.classList.add(Wi("i")), this.element.appendChild(f);
        const b = o.contentsElement;
        b.classList.add(Wi("c")),
          this.element.appendChild(b),
          (this.contentsElement = b);
      }
    }
    class fa extends $n {
      constructor(i, o) {
        const h = new qi(i, { blade: o.blade, viewProps: o.viewProps }),
          f = new Dd();
        super({
          blade: o.blade,
          rackController: h,
          view: new Cd(i, {
            contentsElement: h.view.element,
            empty: f.empty,
            viewProps: o.viewProps
          })
        }),
          (this.onPageAdd_ = this.onPageAdd_.bind(this)),
          (this.onPageRemove_ = this.onPageRemove_.bind(this)),
          (this.pageSet_ = new Hn(() => null)),
          this.pageSet_.emitter.on("add", this.onPageAdd_),
          this.pageSet_.emitter.on("remove", this.onPageRemove_),
          (this.tab = f);
      }
      get pageSet() {
        return this.pageSet_;
      }
      add(i, o) {
        this.pageSet_.add(i, o);
      }
      remove(i) {
        this.pageSet_.remove(this.pageSet_.items[i]);
      }
      onPageAdd_(i) {
        const o = i.item;
        Qo(this.view.itemsElement, o.itemController.view.element, i.index),
          o.itemController.viewProps.set("parent", this.viewProps),
          this.rackController.rack.add(o.contentController, i.index),
          this.tab.add(o.props.value("selected"));
      }
      onPageRemove_(i) {
        const o = i.item;
        ta(o.itemController.view.element),
          o.itemController.viewProps.set("parent", null),
          this.rackController.rack.remove(o.contentController),
          this.tab.remove(o.props.value("selected"));
      }
    }
    const ma = {
      id: "tab",
      type: "blade",
      accept(a) {
        const i = W,
          o = q(a, {
            pages: i.required.array(
              i.required.object({ title: i.required.string })
            ),
            view: i.required.constant("tab")
          });
        return !o || o.pages.length === 0 ? null : { params: o };
      },
      controller(a) {
        const i = new fa(a.document, {
          blade: a.blade,
          viewProps: a.viewProps
        });
        return (
          a.params.pages.forEach((o) => {
            const h = new ua(a.document, {
              itemProps: N.fromObject({ selected: !1, title: o.title }),
              props: N.fromObject({ selected: !1 })
            });
            i.add(h);
          }),
          i
        );
      },
      api(a) {
        return a.controller instanceof fa ? new da(a.controller, a.pool) : null;
      }
    };
    function xd(a, i) {
      const o = a.accept(i.params);
      if (!o) return null;
      const h = W.optional.boolean(i.params.disabled).value,
        f = W.optional.boolean(i.params.hidden).value;
      return a.controller({
        blade: Ki(),
        document: i.document,
        params: Object.assign(Object.assign({}, o.params), {
          disabled: h,
          hidden: f
        }),
        viewProps: re.create({ disabled: h, hidden: f })
      });
    }
    class Sd {
      constructor() {
        (this.disabled = !1), (this.emitter = new C());
      }
      dispose() {}
      tick() {
        this.disabled || this.emitter.emit("tick", { sender: this });
      }
    }
    class Ed {
      constructor(i, o) {
        (this.disabled_ = !1),
          (this.timerId_ = null),
          (this.onTick_ = this.onTick_.bind(this)),
          (this.doc_ = i),
          (this.emitter = new C()),
          (this.interval_ = o),
          this.setTimer_();
      }
      get disabled() {
        return this.disabled_;
      }
      set disabled(i) {
        (this.disabled_ = i),
          this.disabled_ ? this.clearTimer_() : this.setTimer_();
      }
      dispose() {
        this.clearTimer_();
      }
      clearTimer_() {
        if (this.timerId_ === null) return;
        const i = this.doc_.defaultView;
        i && i.clearInterval(this.timerId_), (this.timerId_ = null);
      }
      setTimer_() {
        if ((this.clearTimer_(), this.interval_ <= 0)) return;
        const i = this.doc_.defaultView;
        i && (this.timerId_ = i.setInterval(this.onTick_, this.interval_));
      }
      onTick_() {
        this.disabled_ || this.emitter.emit("tick", { sender: this });
      }
    }
    class Pd {
      constructor(i) {
        (this.onValueChange_ = this.onValueChange_.bind(this)),
          (this.reader = i.reader),
          (this.writer = i.writer),
          (this.emitter = new C()),
          (this.value = i.value),
          this.value.emitter.on("change", this.onValueChange_),
          (this.target = i.target),
          this.read();
      }
      read() {
        const i = this.target.read();
        i !== void 0 && (this.value.rawValue = this.reader(i));
      }
      write_(i) {
        this.writer(this.target, i);
      }
      onValueChange_(i) {
        this.write_(i.rawValue),
          this.emitter.emit("change", {
            options: i.options,
            rawValue: i.rawValue,
            sender: this
          });
      }
    }
    function _a(a, i) {
      for (; a.length < i; ) a.push(void 0);
    }
    function kd(a) {
      const i = [];
      return _a(i, a), U(i);
    }
    function Ld(a) {
      const i = a.indexOf(void 0);
      return i < 0 ? a : a.slice(0, i);
    }
    function Md(a, i) {
      const o = [...Ld(a), i];
      return (
        o.length > a.length
          ? o.splice(0, o.length - a.length)
          : _a(o, a.length),
        o
      );
    }
    class Td {
      constructor(i) {
        (this.onTick_ = this.onTick_.bind(this)),
          (this.reader_ = i.reader),
          (this.target = i.target),
          (this.emitter = new C()),
          (this.value = i.value),
          (this.ticker = i.ticker),
          this.ticker.emitter.on("tick", this.onTick_),
          this.read();
      }
      dispose() {
        this.ticker.dispose();
      }
      read() {
        const i = this.target.read();
        if (i === void 0) return;
        const o = this.value.rawValue,
          h = this.reader_(i);
        (this.value.rawValue = Md(o, h)),
          this.emitter.emit("update", { rawValue: h, sender: this });
      }
      onTick_(i) {
        this.read();
      }
    }
    class Yi {
      constructor(i) {
        this.constraints = i;
      }
      constrain(i) {
        return this.constraints.reduce((o, h) => h.constrain(o), i);
      }
    }
    function oe(a, i) {
      if (a instanceof i) return a;
      if (a instanceof Yi) {
        const o = a.constraints.reduce(
          (h, f) => h || (f instanceof i ? f : null),
          null
        );
        if (o) return o;
      }
      return null;
    }
    class mi {
      constructor(i) {
        this.values = N.fromObject({ max: i.max, min: i.min });
      }
      constrain(i) {
        const o = this.values.get("max"),
          h = this.values.get("min");
        return Math.min(Math.max(i, h), o);
      }
    }
    class Xi {
      constructor(i) {
        this.values = N.fromObject({ options: i });
      }
      get options() {
        return this.values.get("options");
      }
      constrain(i) {
        const o = this.values.get("options");
        return o.length === 0 || o.filter((f) => f.value === i).length > 0
          ? i
          : o[0].value;
      }
    }
    class va {
      constructor(i) {
        this.values = N.fromObject({ max: i.max, min: i.min });
      }
      get maxValue() {
        return this.values.get("max");
      }
      get minValue() {
        return this.values.get("min");
      }
      constrain(i) {
        const o = this.values.get("max"),
          h = this.values.get("min");
        let f = i;
        return _(h) || (f = Math.max(f, h)), _(o) || (f = Math.min(f, o)), f;
      }
    }
    class Gs {
      constructor(i, o = 0) {
        (this.step = i), (this.origin = o);
      }
      constrain(i) {
        const o = this.origin % this.step,
          h = Math.round((i - o) / this.step);
        return o + h * this.step;
      }
    }
    const Wn = k("lst");
    class Ad {
      constructor(i, o) {
        (this.onValueChange_ = this.onValueChange_.bind(this)),
          (this.props_ = o.props),
          (this.element = i.createElement("div")),
          this.element.classList.add(Wn()),
          o.viewProps.bindClassModifiers(this.element);
        const h = i.createElement("select");
        h.classList.add(Wn("s")),
          o.viewProps.bindDisabled(h),
          this.element.appendChild(h),
          (this.selectElement = h);
        const f = i.createElement("div");
        f.classList.add(Wn("m")),
          f.appendChild(js(i, "dropdown")),
          this.element.appendChild(f),
          o.value.emitter.on("change", this.onValueChange_),
          (this.value_ = o.value),
          T(this.props_, "options", (b) => {
            ea(this.selectElement),
              b.forEach((x) => {
                const I = i.createElement("option");
                (I.textContent = x.text), this.selectElement.appendChild(I);
              }),
              this.update_();
          });
      }
      update_() {
        const i = this.props_.get("options").map((o) => o.value);
        this.selectElement.selectedIndex = i.indexOf(this.value_.rawValue);
      }
      onValueChange_() {
        this.update_();
      }
    }
    class Ji {
      constructor(i, o) {
        (this.onSelectChange_ = this.onSelectChange_.bind(this)),
          (this.props = o.props),
          (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.view = new Ad(i, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
          })),
          this.view.selectElement.addEventListener(
            "change",
            this.onSelectChange_
          );
      }
      onSelectChange_(i) {
        const o = i.currentTarget;
        this.value.rawValue = this.props.get("options")[o.selectedIndex].value;
      }
    }
    const ga = k("pop");
    class Od {
      constructor(i, o) {
        (this.element = i.createElement("div")),
          this.element.classList.add(ga()),
          o.viewProps.bindClassModifiers(this.element),
          L(o.shows, B(this.element, ga(void 0, "v")));
      }
    }
    class ba {
      constructor(i, o) {
        (this.shows = U(!1)),
          (this.viewProps = o.viewProps),
          (this.view = new Od(i, {
            shows: this.shows,
            viewProps: this.viewProps
          }));
      }
    }
    const wa = k("txt");
    class Fd {
      constructor(i, o) {
        (this.onChange_ = this.onChange_.bind(this)),
          (this.element = i.createElement("div")),
          this.element.classList.add(wa()),
          o.viewProps.bindClassModifiers(this.element),
          (this.props_ = o.props),
          this.props_.emitter.on("change", this.onChange_);
        const h = i.createElement("input");
        h.classList.add(wa("i")),
          (h.type = "text"),
          o.viewProps.bindDisabled(h),
          this.element.appendChild(h),
          (this.inputElement = h),
          o.value.emitter.on("change", this.onChange_),
          (this.value_ = o.value),
          this.refresh();
      }
      refresh() {
        const i = this.props_.get("formatter");
        this.inputElement.value = i(this.value_.rawValue);
      }
      onChange_() {
        this.refresh();
      }
    }
    class Ws {
      constructor(i, o) {
        (this.onInputChange_ = this.onInputChange_.bind(this)),
          (this.parser_ = o.parser),
          (this.props = o.props),
          (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.view = new Fd(i, {
            props: o.props,
            value: this.value,
            viewProps: this.viewProps
          })),
          this.view.inputElement.addEventListener(
            "change",
            this.onInputChange_
          );
      }
      onInputChange_(i) {
        const h = i.currentTarget.value,
          f = this.parser_(h);
        _(f) || (this.value.rawValue = f), this.view.refresh();
      }
    }
    function Rd(a) {
      return String(a);
    }
    function ya(a) {
      return a === "false" ? !1 : !!a;
    }
    function Da(a) {
      return Rd(a);
    }
    class Id {
      constructor(i) {
        this.text = i;
      }
      evaluate() {
        return Number(this.text);
      }
      toString() {
        return this.text;
      }
    }
    const Bd = {
      "**": (a, i) => Math.pow(a, i),
      "*": (a, i) => a * i,
      "/": (a, i) => a / i,
      "%": (a, i) => a % i,
      "+": (a, i) => a + i,
      "-": (a, i) => a - i,
      "<<": (a, i) => a << i,
      ">>": (a, i) => a >> i,
      ">>>": (a, i) => a >>> i,
      "&": (a, i) => a & i,
      "^": (a, i) => a ^ i,
      "|": (a, i) => a | i
    };
    class Vd {
      constructor(i, o, h) {
        (this.left = o), (this.operator = i), (this.right = h);
      }
      evaluate() {
        const i = Bd[this.operator];
        if (!i)
          throw new Error(`unexpected binary operator: '${this.operator}`);
        return i(this.left.evaluate(), this.right.evaluate());
      }
      toString() {
        return [
          "b(",
          this.left.toString(),
          this.operator,
          this.right.toString(),
          ")"
        ].join(" ");
      }
    }
    const Nd = { "+": (a) => a, "-": (a) => -a, "~": (a) => ~a };
    class zd {
      constructor(i, o) {
        (this.operator = i), (this.expression = o);
      }
      evaluate() {
        const i = Nd[this.operator];
        if (!i) throw new Error(`unexpected unary operator: '${this.operator}`);
        return i(this.expression.evaluate());
      }
      toString() {
        return ["u(", this.operator, this.expression.toString(), ")"].join(" ");
      }
    }
    function Yn(a) {
      return (i, o) => {
        for (let h = 0; h < a.length; h++) {
          const f = a[h](i, o);
          if (f !== "") return f;
        }
        return "";
      };
    }
    function Zi(a, i) {
      var o;
      const h = a.substr(i).match(/^\s+/);
      return (o = h && h[0]) !== null && o !== void 0 ? o : "";
    }
    function Hd(a, i) {
      const o = a.substr(i, 1);
      return o.match(/^[1-9]$/) ? o : "";
    }
    function Qi(a, i) {
      var o;
      const h = a.substr(i).match(/^[0-9]+/);
      return (o = h && h[0]) !== null && o !== void 0 ? o : "";
    }
    function Ud(a, i) {
      const o = Qi(a, i);
      if (o !== "") return o;
      const h = a.substr(i, 1);
      if (((i += 1), h !== "-" && h !== "+")) return "";
      const f = Qi(a, i);
      return f === "" ? "" : h + f;
    }
    function Xn(a, i) {
      const o = a.substr(i, 1);
      if (((i += 1), o.toLowerCase() !== "e")) return "";
      const h = Ud(a, i);
      return h === "" ? "" : o + h;
    }
    function Ca(a, i) {
      const o = a.substr(i, 1);
      if (o === "0") return o;
      const h = Hd(a, i);
      return (i += h.length), h === "" ? "" : h + Qi(a, i);
    }
    function Kd(a, i) {
      const o = Ca(a, i);
      if (((i += o.length), o === "")) return "";
      const h = a.substr(i, 1);
      if (((i += h.length), h !== ".")) return "";
      const f = Qi(a, i);
      return (i += f.length), o + h + f + Xn(a, i);
    }
    function jd(a, i) {
      const o = a.substr(i, 1);
      if (((i += o.length), o !== ".")) return "";
      const h = Qi(a, i);
      return (i += h.length), h === "" ? "" : o + h + Xn(a, i);
    }
    function $d(a, i) {
      const o = Ca(a, i);
      return (i += o.length), o === "" ? "" : o + Xn(a, i);
    }
    const qd = Yn([Kd, jd, $d]);
    function Gd(a, i) {
      var o;
      const h = a.substr(i).match(/^[01]+/);
      return (o = h && h[0]) !== null && o !== void 0 ? o : "";
    }
    function Wd(a, i) {
      const o = a.substr(i, 2);
      if (((i += o.length), o.toLowerCase() !== "0b")) return "";
      const h = Gd(a, i);
      return h === "" ? "" : o + h;
    }
    function Yd(a, i) {
      var o;
      const h = a.substr(i).match(/^[0-7]+/);
      return (o = h && h[0]) !== null && o !== void 0 ? o : "";
    }
    function Xd(a, i) {
      const o = a.substr(i, 2);
      if (((i += o.length), o.toLowerCase() !== "0o")) return "";
      const h = Yd(a, i);
      return h === "" ? "" : o + h;
    }
    function Jd(a, i) {
      var o;
      const h = a.substr(i).match(/^[0-9a-f]+/i);
      return (o = h && h[0]) !== null && o !== void 0 ? o : "";
    }
    function Zd(a, i) {
      const o = a.substr(i, 2);
      if (((i += o.length), o.toLowerCase() !== "0x")) return "";
      const h = Jd(a, i);
      return h === "" ? "" : o + h;
    }
    const Qd = Yn([Wd, Xd, Zd]),
      tp = Yn([Qd, qd]);
    function ep(a, i) {
      const o = tp(a, i);
      return (
        (i += o.length), o === "" ? null : { evaluable: new Id(o), cursor: i }
      );
    }
    function ip(a, i) {
      const o = a.substr(i, 1);
      if (((i += o.length), o !== "(")) return null;
      const h = Sa(a, i);
      if (!h) return null;
      (i = h.cursor), (i += Zi(a, i).length);
      const f = a.substr(i, 1);
      return (
        (i += f.length),
        f !== ")" ? null : { evaluable: h.evaluable, cursor: i }
      );
    }
    function sp(a, i) {
      var o;
      return (o = ep(a, i)) !== null && o !== void 0 ? o : ip(a, i);
    }
    function xa(a, i) {
      const o = sp(a, i);
      if (o) return o;
      const h = a.substr(i, 1);
      if (((i += h.length), h !== "+" && h !== "-" && h !== "~")) return null;
      const f = xa(a, i);
      return f
        ? ((i = f.cursor), { cursor: i, evaluable: new zd(h, f.evaluable) })
        : null;
    }
    function np(a, i, o) {
      o += Zi(i, o).length;
      const h = a.filter((f) => i.startsWith(f, o))[0];
      return h
        ? ((o += h.length), (o += Zi(i, o).length), { cursor: o, operator: h })
        : null;
    }
    function rp(a, i) {
      return (o, h) => {
        const f = a(o, h);
        if (!f) return null;
        h = f.cursor;
        let b = f.evaluable;
        for (;;) {
          const x = np(i, o, h);
          if (!x) break;
          h = x.cursor;
          const I = a(o, h);
          if (!I) return null;
          (h = I.cursor), (b = new Vd(x.operator, b, I.evaluable));
        }
        return b ? { cursor: h, evaluable: b } : null;
      };
    }
    const op = [
      ["**"],
      ["*", "/", "%"],
      ["+", "-"],
      ["<<", ">>>", ">>"],
      ["&"],
      ["^"],
      ["|"]
    ].reduce((a, i) => rp(a, i), xa);
    function Sa(a, i) {
      return (i += Zi(a, i).length), op(a, i);
    }
    function ap(a) {
      const i = Sa(a, 0);
      return !i || i.cursor + Zi(a, i.cursor).length !== a.length
        ? null
        : i.evaluable;
    }
    function ae(a) {
      var i;
      const o = ap(a);
      return (i = o === null || o === void 0 ? void 0 : o.evaluate()) !==
        null && i !== void 0
        ? i
        : null;
    }
    function Ea(a) {
      if (typeof a == "number") return a;
      if (typeof a == "string") {
        const i = ae(a);
        if (!_(i)) return i;
      }
      return 0;
    }
    function lp(a) {
      return String(a);
    }
    function yt(a) {
      return (i) => i.toFixed(Math.max(Math.min(a, 20), 0));
    }
    const hp = yt(0);
    function Ys(a) {
      return hp(a) + "%";
    }
    function Pa(a) {
      return String(a);
    }
    function Jn(a) {
      return a;
    }
    function ts({ primary: a, secondary: i, forward: o, backward: h }) {
      let f = !1;
      function b(x) {
        f || ((f = !0), x(), (f = !1));
      }
      a.emitter.on("change", (x) => {
        b(() => {
          i.setRawValue(o(a, i), x.options);
        });
      }),
        i.emitter.on("change", (x) => {
          b(() => {
            a.setRawValue(h(a, i), x.options);
          }),
            b(() => {
              i.setRawValue(o(a, i), x.options);
            });
        }),
        b(() => {
          i.setRawValue(o(a, i), { forceEmit: !1, last: !0 });
        });
    }
    function Lt(a, i) {
      const o = a * (i.altKey ? 0.1 : 1) * (i.shiftKey ? 10 : 1);
      return i.upKey ? +o : i.downKey ? -o : 0;
    }
    function es(a) {
      return {
        altKey: a.altKey,
        downKey: a.key === "ArrowDown",
        shiftKey: a.shiftKey,
        upKey: a.key === "ArrowUp"
      };
    }
    function le(a) {
      return {
        altKey: a.altKey,
        downKey: a.key === "ArrowLeft",
        shiftKey: a.shiftKey,
        upKey: a.key === "ArrowRight"
      };
    }
    function up(a) {
      return a === "ArrowUp" || a === "ArrowDown";
    }
    function ka(a) {
      return up(a) || a === "ArrowLeft" || a === "ArrowRight";
    }
    function Zn(a, i) {
      var o, h;
      const f = i.ownerDocument.defaultView,
        b = i.getBoundingClientRect();
      return {
        x:
          a.pageX -
          (((o = f && f.scrollX) !== null && o !== void 0 ? o : 0) + b.left),
        y:
          a.pageY -
          (((h = f && f.scrollY) !== null && h !== void 0 ? h : 0) + b.top)
      };
    }
    class qe {
      constructor(i) {
        (this.lastTouch_ = null),
          (this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this)),
          (this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this)),
          (this.onMouseDown_ = this.onMouseDown_.bind(this)),
          (this.onTouchEnd_ = this.onTouchEnd_.bind(this)),
          (this.onTouchMove_ = this.onTouchMove_.bind(this)),
          (this.onTouchStart_ = this.onTouchStart_.bind(this)),
          (this.elem_ = i),
          (this.emitter = new C()),
          i.addEventListener("touchstart", this.onTouchStart_, { passive: !1 }),
          i.addEventListener("touchmove", this.onTouchMove_, { passive: !0 }),
          i.addEventListener("touchend", this.onTouchEnd_),
          i.addEventListener("mousedown", this.onMouseDown_);
      }
      computePosition_(i) {
        const o = this.elem_.getBoundingClientRect();
        return {
          bounds: { width: o.width, height: o.height },
          point: i ? { x: i.x, y: i.y } : null
        };
      }
      onMouseDown_(i) {
        var o;
        i.preventDefault(),
          (o = i.currentTarget) === null || o === void 0 || o.focus();
        const h = this.elem_.ownerDocument;
        h.addEventListener("mousemove", this.onDocumentMouseMove_),
          h.addEventListener("mouseup", this.onDocumentMouseUp_),
          this.emitter.emit("down", {
            altKey: i.altKey,
            data: this.computePosition_(Zn(i, this.elem_)),
            sender: this,
            shiftKey: i.shiftKey
          });
      }
      onDocumentMouseMove_(i) {
        this.emitter.emit("move", {
          altKey: i.altKey,
          data: this.computePosition_(Zn(i, this.elem_)),
          sender: this,
          shiftKey: i.shiftKey
        });
      }
      onDocumentMouseUp_(i) {
        const o = this.elem_.ownerDocument;
        o.removeEventListener("mousemove", this.onDocumentMouseMove_),
          o.removeEventListener("mouseup", this.onDocumentMouseUp_),
          this.emitter.emit("up", {
            altKey: i.altKey,
            data: this.computePosition_(Zn(i, this.elem_)),
            sender: this,
            shiftKey: i.shiftKey
          });
      }
      onTouchStart_(i) {
        i.preventDefault();
        const o = i.targetTouches.item(0),
          h = this.elem_.getBoundingClientRect();
        this.emitter.emit("down", {
          altKey: i.altKey,
          data: this.computePosition_(
            o ? { x: o.clientX - h.left, y: o.clientY - h.top } : void 0
          ),
          sender: this,
          shiftKey: i.shiftKey
        }),
          (this.lastTouch_ = o);
      }
      onTouchMove_(i) {
        const o = i.targetTouches.item(0),
          h = this.elem_.getBoundingClientRect();
        this.emitter.emit("move", {
          altKey: i.altKey,
          data: this.computePosition_(
            o ? { x: o.clientX - h.left, y: o.clientY - h.top } : void 0
          ),
          sender: this,
          shiftKey: i.shiftKey
        }),
          (this.lastTouch_ = o);
      }
      onTouchEnd_(i) {
        var o;
        const h =
            (o = i.targetTouches.item(0)) !== null && o !== void 0
              ? o
              : this.lastTouch_,
          f = this.elem_.getBoundingClientRect();
        this.emitter.emit("up", {
          altKey: i.altKey,
          data: this.computePosition_(
            h ? { x: h.clientX - f.left, y: h.clientY - f.top } : void 0
          ),
          sender: this,
          shiftKey: i.shiftKey
        });
      }
    }
    function ht(a, i, o, h, f) {
      const b = (a - i) / (o - i);
      return h + b * (f - h);
    }
    function La(a) {
      return String(a.toFixed(10)).split(".")[1].replace(/0+$/, "").length;
    }
    function vt(a, i, o) {
      return Math.min(Math.max(a, i), o);
    }
    function Ma(a, i) {
      return ((a % i) + i) % i;
    }
    const Kt = k("txt");
    class cp {
      constructor(i, o) {
        (this.onChange_ = this.onChange_.bind(this)),
          (this.props_ = o.props),
          this.props_.emitter.on("change", this.onChange_),
          (this.element = i.createElement("div")),
          this.element.classList.add(Kt(), Kt(void 0, "num")),
          o.arrayPosition &&
            this.element.classList.add(Kt(void 0, o.arrayPosition)),
          o.viewProps.bindClassModifiers(this.element);
        const h = i.createElement("input");
        h.classList.add(Kt("i")),
          (h.type = "text"),
          o.viewProps.bindDisabled(h),
          this.element.appendChild(h),
          (this.inputElement = h),
          (this.onDraggingChange_ = this.onDraggingChange_.bind(this)),
          (this.dragging_ = o.dragging),
          this.dragging_.emitter.on("change", this.onDraggingChange_),
          this.element.classList.add(Kt()),
          this.inputElement.classList.add(Kt("i"));
        const f = i.createElement("div");
        f.classList.add(Kt("k")),
          this.element.appendChild(f),
          (this.knobElement = f);
        const b = i.createElementNS(Zt, "svg");
        b.classList.add(Kt("g")), this.knobElement.appendChild(b);
        const x = i.createElementNS(Zt, "path");
        x.classList.add(Kt("gb")), b.appendChild(x), (this.guideBodyElem_ = x);
        const I = i.createElementNS(Zt, "path");
        I.classList.add(Kt("gh")), b.appendChild(I), (this.guideHeadElem_ = I);
        const Y = i.createElement("div");
        Y.classList.add(k("tt")()),
          this.knobElement.appendChild(Y),
          (this.tooltipElem_ = Y),
          o.value.emitter.on("change", this.onChange_),
          (this.value = o.value),
          this.refresh();
      }
      onDraggingChange_(i) {
        if (i.rawValue === null) {
          this.element.classList.remove(Kt(void 0, "drg"));
          return;
        }
        this.element.classList.add(Kt(void 0, "drg"));
        const o = i.rawValue / this.props_.get("draggingScale"),
          h = o + (o > 0 ? -1 : o < 0 ? 1 : 0),
          f = vt(-h, -4, 4);
        this.guideHeadElem_.setAttributeNS(
          null,
          "d",
          [`M ${h + f},0 L${h},4 L${h + f},8`, `M ${o},-1 L${o},9`].join(" ")
        ),
          this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${o},4`);
        const b = this.props_.get("formatter");
        (this.tooltipElem_.textContent = b(this.value.rawValue)),
          (this.tooltipElem_.style.left = `${o}px`);
      }
      refresh() {
        const i = this.props_.get("formatter");
        this.inputElement.value = i(this.value.rawValue);
      }
      onChange_() {
        this.refresh();
      }
    }
    class is {
      constructor(i, o) {
        var h;
        (this.originRawValue_ = 0),
          (this.onInputChange_ = this.onInputChange_.bind(this)),
          (this.onInputKeyDown_ = this.onInputKeyDown_.bind(this)),
          (this.onInputKeyUp_ = this.onInputKeyUp_.bind(this)),
          (this.onPointerDown_ = this.onPointerDown_.bind(this)),
          (this.onPointerMove_ = this.onPointerMove_.bind(this)),
          (this.onPointerUp_ = this.onPointerUp_.bind(this)),
          (this.baseStep_ = o.baseStep),
          (this.parser_ = o.parser),
          (this.props = o.props),
          (this.sliderProps_ =
            (h = o.sliderProps) !== null && h !== void 0 ? h : null),
          (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.dragging_ = U(null)),
          (this.view = new cp(i, {
            arrayPosition: o.arrayPosition,
            dragging: this.dragging_,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
          })),
          this.view.inputElement.addEventListener(
            "change",
            this.onInputChange_
          ),
          this.view.inputElement.addEventListener(
            "keydown",
            this.onInputKeyDown_
          ),
          this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
        const f = new qe(this.view.knobElement);
        f.emitter.on("down", this.onPointerDown_),
          f.emitter.on("move", this.onPointerMove_),
          f.emitter.on("up", this.onPointerUp_);
      }
      constrainValue_(i) {
        var o, h;
        const f =
            (o = this.sliderProps_) === null || o === void 0
              ? void 0
              : o.get("minValue"),
          b =
            (h = this.sliderProps_) === null || h === void 0
              ? void 0
              : h.get("maxValue");
        let x = i;
        return (
          f !== void 0 && (x = Math.max(x, f)),
          b !== void 0 && (x = Math.min(x, b)),
          x
        );
      }
      onInputChange_(i) {
        const h = i.currentTarget.value,
          f = this.parser_(h);
        _(f) || (this.value.rawValue = this.constrainValue_(f)),
          this.view.refresh();
      }
      onInputKeyDown_(i) {
        const o = Lt(this.baseStep_, es(i));
        o !== 0 &&
          this.value.setRawValue(
            this.constrainValue_(this.value.rawValue + o),
            { forceEmit: !1, last: !1 }
          );
      }
      onInputKeyUp_(i) {
        Lt(this.baseStep_, es(i)) !== 0 &&
          this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
          });
      }
      onPointerDown_() {
        (this.originRawValue_ = this.value.rawValue),
          (this.dragging_.rawValue = 0);
      }
      computeDraggingValue_(i) {
        if (!i.point) return null;
        const o = i.point.x - i.bounds.width / 2;
        return this.constrainValue_(
          this.originRawValue_ + o * this.props.get("draggingScale")
        );
      }
      onPointerMove_(i) {
        const o = this.computeDraggingValue_(i.data);
        o !== null &&
          (this.value.setRawValue(o, { forceEmit: !1, last: !1 }),
          (this.dragging_.rawValue =
            this.value.rawValue - this.originRawValue_));
      }
      onPointerUp_(i) {
        const o = this.computeDraggingValue_(i.data);
        o !== null &&
          (this.value.setRawValue(o, { forceEmit: !0, last: !0 }),
          (this.dragging_.rawValue = null));
      }
    }
    const Qn = k("sld");
    class dp {
      constructor(i, o) {
        (this.onChange_ = this.onChange_.bind(this)),
          (this.props_ = o.props),
          this.props_.emitter.on("change", this.onChange_),
          (this.element = i.createElement("div")),
          this.element.classList.add(Qn()),
          o.viewProps.bindClassModifiers(this.element);
        const h = i.createElement("div");
        h.classList.add(Qn("t")),
          o.viewProps.bindTabIndex(h),
          this.element.appendChild(h),
          (this.trackElement = h);
        const f = i.createElement("div");
        f.classList.add(Qn("k")),
          this.trackElement.appendChild(f),
          (this.knobElement = f),
          o.value.emitter.on("change", this.onChange_),
          (this.value = o.value),
          this.update_();
      }
      update_() {
        const i = vt(
          ht(
            this.value.rawValue,
            this.props_.get("minValue"),
            this.props_.get("maxValue"),
            0,
            100
          ),
          0,
          100
        );
        this.knobElement.style.width = `${i}%`;
      }
      onChange_() {
        this.update_();
      }
    }
    class pp {
      constructor(i, o) {
        (this.onKeyDown_ = this.onKeyDown_.bind(this)),
          (this.onKeyUp_ = this.onKeyUp_.bind(this)),
          (this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this)),
          (this.onPointerUp_ = this.onPointerUp_.bind(this)),
          (this.baseStep_ = o.baseStep),
          (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.props = o.props),
          (this.view = new dp(i, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
          })),
          (this.ptHandler_ = new qe(this.view.trackElement)),
          this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_),
          this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_),
          this.ptHandler_.emitter.on("up", this.onPointerUp_),
          this.view.trackElement.addEventListener("keydown", this.onKeyDown_),
          this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
      }
      handlePointerEvent_(i, o) {
        i.point &&
          this.value.setRawValue(
            ht(
              vt(i.point.x, 0, i.bounds.width),
              0,
              i.bounds.width,
              this.props.get("minValue"),
              this.props.get("maxValue")
            ),
            o
          );
      }
      onPointerDownOrMove_(i) {
        this.handlePointerEvent_(i.data, { forceEmit: !1, last: !1 });
      }
      onPointerUp_(i) {
        this.handlePointerEvent_(i.data, { forceEmit: !0, last: !0 });
      }
      onKeyDown_(i) {
        const o = Lt(this.baseStep_, le(i));
        o !== 0 &&
          this.value.setRawValue(this.value.rawValue + o, {
            forceEmit: !1,
            last: !1
          });
      }
      onKeyUp_(i) {
        Lt(this.baseStep_, le(i)) !== 0 &&
          this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
          });
      }
    }
    const tr = k("sldtxt");
    class fp {
      constructor(i, o) {
        (this.element = i.createElement("div")),
          this.element.classList.add(tr());
        const h = i.createElement("div");
        h.classList.add(tr("s")),
          (this.sliderView_ = o.sliderView),
          h.appendChild(this.sliderView_.element),
          this.element.appendChild(h);
        const f = i.createElement("div");
        f.classList.add(tr("t")),
          (this.textView_ = o.textView),
          f.appendChild(this.textView_.element),
          this.element.appendChild(f);
      }
    }
    class er {
      constructor(i, o) {
        (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.sliderC_ = new pp(i, {
            baseStep: o.baseStep,
            props: o.sliderProps,
            value: o.value,
            viewProps: this.viewProps
          })),
          (this.textC_ = new is(i, {
            baseStep: o.baseStep,
            parser: o.parser,
            props: o.textProps,
            sliderProps: o.sliderProps,
            value: o.value,
            viewProps: o.viewProps
          })),
          (this.view = new fp(i, {
            sliderView: this.sliderC_.view,
            textView: this.textC_.view
          }));
      }
      get sliderController() {
        return this.sliderC_;
      }
      get textController() {
        return this.textC_;
      }
    }
    function ss(a, i) {
      a.write(i);
    }
    function Xs(a) {
      const i = W;
      if (Array.isArray(a))
        return i.required.array(
          i.required.object({ text: i.required.string, value: i.required.raw })
        )(a).value;
      if (typeof a == "object") return i.required.raw(a).value;
    }
    function Ta(a) {
      if (a === "inline" || a === "popup") return a;
    }
    function ye(a) {
      const i = W;
      return i.required.object({
        max: i.optional.number,
        min: i.optional.number,
        step: i.optional.number
      })(a).value;
    }
    function Aa(a) {
      if (Array.isArray(a)) return a;
      const i = [];
      return (
        Object.keys(a).forEach((o) => {
          i.push({ text: o, value: a[o] });
        }),
        i
      );
    }
    function ir(a) {
      return _(a) ? null : new Xi(Aa(a));
    }
    function mp(a) {
      const i = a ? oe(a, Gs) : null;
      return i ? i.step : null;
    }
    function Js(a, i) {
      const o = a && oe(a, Gs);
      return o ? La(o.step) : Math.max(La(i), 2);
    }
    function _i(a) {
      const i = mp(a);
      return i !== null && i !== void 0 ? i : 1;
    }
    function vi(a, i) {
      var o;
      const h = a && oe(a, Gs),
        f = Math.abs(
          (o = h === null || h === void 0 ? void 0 : h.step) !== null &&
            o !== void 0
            ? o
            : i
        );
      return f === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(f)) - 1);
    }
    const Zs = k("ckb");
    class _p {
      constructor(i, o) {
        (this.onValueChange_ = this.onValueChange_.bind(this)),
          (this.element = i.createElement("div")),
          this.element.classList.add(Zs()),
          o.viewProps.bindClassModifiers(this.element);
        const h = i.createElement("label");
        h.classList.add(Zs("l")), this.element.appendChild(h);
        const f = i.createElement("input");
        f.classList.add(Zs("i")),
          (f.type = "checkbox"),
          h.appendChild(f),
          (this.inputElement = f),
          o.viewProps.bindDisabled(this.inputElement);
        const b = i.createElement("div");
        b.classList.add(Zs("w")), h.appendChild(b);
        const x = js(i, "check");
        b.appendChild(x),
          o.value.emitter.on("change", this.onValueChange_),
          (this.value = o.value),
          this.update_();
      }
      update_() {
        this.inputElement.checked = this.value.rawValue;
      }
      onValueChange_() {
        this.update_();
      }
    }
    class vp {
      constructor(i, o) {
        (this.onInputChange_ = this.onInputChange_.bind(this)),
          (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.view = new _p(i, {
            value: this.value,
            viewProps: this.viewProps
          })),
          this.view.inputElement.addEventListener(
            "change",
            this.onInputChange_
          );
      }
      onInputChange_(i) {
        const o = i.currentTarget;
        this.value.rawValue = o.checked;
      }
    }
    function gp(a) {
      const i = [],
        o = ir(a.options);
      return o && i.push(o), new Yi(i);
    }
    const bp = {
        id: "input-bool",
        type: "input",
        accept: (a, i) => {
          if (typeof a != "boolean") return null;
          const h = q(i, { options: W.optional.custom(Xs) });
          return h ? { initialValue: a, params: h } : null;
        },
        binding: {
          reader: (a) => ya,
          constraint: (a) => gp(a.params),
          writer: (a) => ss
        },
        controller: (a) => {
          const i = a.document,
            o = a.value,
            h = a.constraint,
            f = h && oe(h, Xi);
          return f
            ? new Ji(i, {
                props: new N({ options: f.values.value("options") }),
                value: o,
                viewProps: a.viewProps
              })
            : new vp(i, { value: o, viewProps: a.viewProps });
        }
      },
      Ge = k("col");
    class wp {
      constructor(i, o) {
        (this.element = i.createElement("div")),
          this.element.classList.add(Ge()),
          o.foldable.bindExpandedClass(this.element, Ge(void 0, "expanded")),
          T(o.foldable, "completed", B(this.element, Ge(void 0, "cpl")));
        const h = i.createElement("div");
        h.classList.add(Ge("h")), this.element.appendChild(h);
        const f = i.createElement("div");
        f.classList.add(Ge("s")), h.appendChild(f), (this.swatchElement = f);
        const b = i.createElement("div");
        if (
          (b.classList.add(Ge("t")),
          h.appendChild(b),
          (this.textElement = b),
          o.pickerLayout === "inline")
        ) {
          const x = i.createElement("div");
          x.classList.add(Ge("p")),
            this.element.appendChild(x),
            (this.pickerElement = x);
        } else this.pickerElement = null;
      }
    }
    function yp(a, i, o) {
      const h = vt(a / 255, 0, 1),
        f = vt(i / 255, 0, 1),
        b = vt(o / 255, 0, 1),
        x = Math.max(h, f, b),
        I = Math.min(h, f, b),
        Y = x - I;
      let J = 0,
        nt = 0;
      const rt = (I + x) / 2;
      return (
        Y !== 0 &&
          ((nt = Y / (1 - Math.abs(x + I - 1))),
          h === x
            ? (J = (f - b) / Y)
            : f === x
            ? (J = 2 + (b - h) / Y)
            : (J = 4 + (h - f) / Y),
          (J = J / 6 + (J < 0 ? 1 : 0))),
        [J * 360, nt * 100, rt * 100]
      );
    }
    function Dp(a, i, o) {
      const h = ((a % 360) + 360) % 360,
        f = vt(i / 100, 0, 1),
        b = vt(o / 100, 0, 1),
        x = (1 - Math.abs(2 * b - 1)) * f,
        I = x * (1 - Math.abs(((h / 60) % 2) - 1)),
        Y = b - x / 2;
      let J, nt, rt;
      return (
        h >= 0 && h < 60
          ? ([J, nt, rt] = [x, I, 0])
          : h >= 60 && h < 120
          ? ([J, nt, rt] = [I, x, 0])
          : h >= 120 && h < 180
          ? ([J, nt, rt] = [0, x, I])
          : h >= 180 && h < 240
          ? ([J, nt, rt] = [0, I, x])
          : h >= 240 && h < 300
          ? ([J, nt, rt] = [I, 0, x])
          : ([J, nt, rt] = [x, 0, I]),
        [(J + Y) * 255, (nt + Y) * 255, (rt + Y) * 255]
      );
    }
    function Cp(a, i, o) {
      const h = vt(a / 255, 0, 1),
        f = vt(i / 255, 0, 1),
        b = vt(o / 255, 0, 1),
        x = Math.max(h, f, b),
        I = Math.min(h, f, b),
        Y = x - I;
      let J;
      Y === 0
        ? (J = 0)
        : x === h
        ? (J = 60 * (((((f - b) / Y) % 6) + 6) % 6))
        : x === f
        ? (J = 60 * ((b - h) / Y + 2))
        : (J = 60 * ((h - f) / Y + 4));
      const nt = x === 0 ? 0 : Y / x,
        rt = x;
      return [J, nt * 100, rt * 100];
    }
    function Oa(a, i, o) {
      const h = Ma(a, 360),
        f = vt(i / 100, 0, 1),
        b = vt(o / 100, 0, 1),
        x = b * f,
        I = x * (1 - Math.abs(((h / 60) % 2) - 1)),
        Y = b - x;
      let J, nt, rt;
      return (
        h >= 0 && h < 60
          ? ([J, nt, rt] = [x, I, 0])
          : h >= 60 && h < 120
          ? ([J, nt, rt] = [I, x, 0])
          : h >= 120 && h < 180
          ? ([J, nt, rt] = [0, x, I])
          : h >= 180 && h < 240
          ? ([J, nt, rt] = [0, I, x])
          : h >= 240 && h < 300
          ? ([J, nt, rt] = [I, 0, x])
          : ([J, nt, rt] = [x, 0, I]),
        [(J + Y) * 255, (nt + Y) * 255, (rt + Y) * 255]
      );
    }
    function xp(a, i, o) {
      const h = o + (i * (100 - Math.abs(2 * o - 100))) / 200;
      return [
        a,
        h !== 0 ? (i * (100 - Math.abs(2 * o - 100))) / h : 0,
        o + (i * (100 - Math.abs(2 * o - 100))) / (2 * 100)
      ];
    }
    function Sp(a, i, o) {
      const h = 100 - Math.abs((o * (200 - i)) / 100 - 100);
      return [a, h !== 0 ? (i * o) / h : 0, (o * (200 - i)) / (2 * 100)];
    }
    function We(a) {
      return [a[0], a[1], a[2]];
    }
    function Fa(a, i) {
      return [a[0], a[1], a[2], i];
    }
    const Ep = {
      hsl: { hsl: (a, i, o) => [a, i, o], hsv: xp, rgb: Dp },
      hsv: { hsl: Sp, hsv: (a, i, o) => [a, i, o], rgb: Oa },
      rgb: { hsl: yp, hsv: Cp, rgb: (a, i, o) => [a, i, o] }
    };
    function Qs(a, i) {
      return [
        i === "float" ? 1 : a === "rgb" ? 255 : 360,
        i === "float" ? 1 : a === "rgb" ? 255 : 100,
        i === "float" ? 1 : a === "rgb" ? 255 : 100
      ];
    }
    function Pp(a, i) {
      return a === i ? i : Ma(a, i);
    }
    function kp(a, i, o) {
      var h;
      const f = Qs(i, o);
      return [
        i === "rgb" ? vt(a[0], 0, f[0]) : Pp(a[0], f[0]),
        vt(a[1], 0, f[1]),
        vt(a[2], 0, f[2]),
        vt((h = a[3]) !== null && h !== void 0 ? h : 1, 0, 1)
      ];
    }
    function Ra(a, i, o, h) {
      const f = Qs(i, o),
        b = Qs(i, h);
      return a.map((x, I) => (x / f[I]) * b[I]);
    }
    function Lp(a, i, o) {
      const h = Ra(a, i.mode, i.type, "int"),
        f = Ep[i.mode][o.mode](...h);
      return Ra(f, o.mode, "int", o.type);
    }
    function tn(a, i) {
      return typeof a != "object" || _(a)
        ? !1
        : i in a && typeof a[i] == "number";
    }
    class it {
      static black(i = "int") {
        return new it([0, 0, 0], "rgb", i);
      }
      static fromObject(i, o = "int") {
        const h = "a" in i ? [i.r, i.g, i.b, i.a] : [i.r, i.g, i.b];
        return new it(h, "rgb", o);
      }
      static toRgbaObject(i, o = "int") {
        return i.toRgbaObject(o);
      }
      static isRgbColorObject(i) {
        return tn(i, "r") && tn(i, "g") && tn(i, "b");
      }
      static isRgbaColorObject(i) {
        return this.isRgbColorObject(i) && tn(i, "a");
      }
      static isColorObject(i) {
        return this.isRgbColorObject(i);
      }
      static equals(i, o) {
        if (i.mode !== o.mode) return !1;
        const h = i.comps_,
          f = o.comps_;
        for (let b = 0; b < h.length; b++) if (h[b] !== f[b]) return !1;
        return !0;
      }
      constructor(i, o, h = "int") {
        (this.mode = o), (this.type = h), (this.comps_ = kp(i, o, h));
      }
      getComponents(i, o = "int") {
        return Fa(
          Lp(
            We(this.comps_),
            { mode: this.mode, type: this.type },
            { mode: i !== null && i !== void 0 ? i : this.mode, type: o }
          ),
          this.comps_[3]
        );
      }
      toRgbaObject(i = "int") {
        const o = this.getComponents("rgb", i);
        return { r: o[0], g: o[1], b: o[2], a: o[3] };
      }
    }
    const De = k("colp");
    class Mp {
      constructor(i, o) {
        (this.alphaViews_ = null),
          (this.element = i.createElement("div")),
          this.element.classList.add(De()),
          o.viewProps.bindClassModifiers(this.element);
        const h = i.createElement("div");
        h.classList.add(De("hsv"));
        const f = i.createElement("div");
        f.classList.add(De("sv")),
          (this.svPaletteView_ = o.svPaletteView),
          f.appendChild(this.svPaletteView_.element),
          h.appendChild(f);
        const b = i.createElement("div");
        b.classList.add(De("h")),
          (this.hPaletteView_ = o.hPaletteView),
          b.appendChild(this.hPaletteView_.element),
          h.appendChild(b),
          this.element.appendChild(h);
        const x = i.createElement("div");
        if (
          (x.classList.add(De("rgb")),
          (this.textView_ = o.textView),
          x.appendChild(this.textView_.element),
          this.element.appendChild(x),
          o.alphaViews)
        ) {
          this.alphaViews_ = {
            palette: o.alphaViews.palette,
            text: o.alphaViews.text
          };
          const I = i.createElement("div");
          I.classList.add(De("a"));
          const Y = i.createElement("div");
          Y.classList.add(De("ap")),
            Y.appendChild(this.alphaViews_.palette.element),
            I.appendChild(Y);
          const J = i.createElement("div");
          J.classList.add(De("at")),
            J.appendChild(this.alphaViews_.text.element),
            I.appendChild(J),
            this.element.appendChild(I);
        }
      }
      get allFocusableElements() {
        const i = [
          this.svPaletteView_.element,
          this.hPaletteView_.element,
          this.textView_.modeSelectElement,
          ...this.textView_.textViews.map((o) => o.inputElement)
        ];
        return (
          this.alphaViews_ &&
            i.push(
              this.alphaViews_.palette.element,
              this.alphaViews_.text.inputElement
            ),
          i
        );
      }
    }
    function Tp(a) {
      return a === "int" ? "int" : a === "float" ? "float" : void 0;
    }
    function sr(a) {
      const i = W;
      return q(a, {
        alpha: i.optional.boolean,
        color: i.optional.object({
          alpha: i.optional.boolean,
          type: i.optional.custom(Tp)
        }),
        expanded: i.optional.boolean,
        picker: i.optional.custom(Ta)
      });
    }
    function Ye(a) {
      return a ? 0.1 : 1;
    }
    function Xe(a) {
      var i;
      return (i = a.color) === null || i === void 0 ? void 0 : i.type;
    }
    function Ap(a, i) {
      return (
        a.alpha === i.alpha &&
        a.mode === i.mode &&
        a.notation === i.notation &&
        a.type === i.type
      );
    }
    function jt(a, i) {
      const o = a.match(/^(.+)%$/);
      return Math.min(o ? parseFloat(o[1]) * 0.01 * i : parseFloat(a), i);
    }
    const Op = {
      deg: (a) => a,
      grad: (a) => (a * 360) / 400,
      rad: (a) => (a * 360) / (2 * Math.PI),
      turn: (a) => a * 360
    };
    function Ia(a) {
      const i = a.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
      if (!i) return parseFloat(a);
      const o = parseFloat(i[1]),
        h = i[2];
      return Op[h](o);
    }
    function Ba(a) {
      const i = a.match(
        /^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
      );
      if (!i) return null;
      const o = [jt(i[1], 255), jt(i[2], 255), jt(i[3], 255)];
      return isNaN(o[0]) || isNaN(o[1]) || isNaN(o[2]) ? null : o;
    }
    function Va(a) {
      return (i) => {
        const o = Ba(i);
        return o ? new it(o, "rgb", a) : null;
      };
    }
    function Na(a) {
      const i = a.match(
        /^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
      );
      if (!i) return null;
      const o = [jt(i[1], 255), jt(i[2], 255), jt(i[3], 255), jt(i[4], 1)];
      return isNaN(o[0]) || isNaN(o[1]) || isNaN(o[2]) || isNaN(o[3])
        ? null
        : o;
    }
    function za(a) {
      return (i) => {
        const o = Na(i);
        return o ? new it(o, "rgb", a) : null;
      };
    }
    function Ha(a) {
      const i = a.match(
        /^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
      );
      if (!i) return null;
      const o = [Ia(i[1]), jt(i[2], 100), jt(i[3], 100)];
      return isNaN(o[0]) || isNaN(o[1]) || isNaN(o[2]) ? null : o;
    }
    function Ua(a) {
      return (i) => {
        const o = Ha(i);
        return o ? new it(o, "hsl", a) : null;
      };
    }
    function Ka(a) {
      const i = a.match(
        /^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
      );
      if (!i) return null;
      const o = [Ia(i[1]), jt(i[2], 100), jt(i[3], 100), jt(i[4], 1)];
      return isNaN(o[0]) || isNaN(o[1]) || isNaN(o[2]) || isNaN(o[3])
        ? null
        : o;
    }
    function ja(a) {
      return (i) => {
        const o = Ka(i);
        return o ? new it(o, "hsl", a) : null;
      };
    }
    function $a(a) {
      const i = a.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
      if (i)
        return [
          parseInt(i[1] + i[1], 16),
          parseInt(i[2] + i[2], 16),
          parseInt(i[3] + i[3], 16)
        ];
      const o = a.match(
        /^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/
      );
      return o
        ? [parseInt(o[1], 16), parseInt(o[2], 16), parseInt(o[3], 16)]
        : null;
    }
    function Fp(a) {
      const i = $a(a);
      return i ? new it(i, "rgb", "int") : null;
    }
    function qa(a) {
      const i = a.match(
        /^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/
      );
      if (i)
        return [
          parseInt(i[1] + i[1], 16),
          parseInt(i[2] + i[2], 16),
          parseInt(i[3] + i[3], 16),
          ht(parseInt(i[4] + i[4], 16), 0, 255, 0, 1)
        ];
      const o = a.match(
        /^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/
      );
      return o
        ? [
            parseInt(o[1], 16),
            parseInt(o[2], 16),
            parseInt(o[3], 16),
            ht(parseInt(o[4], 16), 0, 255, 0, 1)
          ]
        : null;
    }
    function Rp(a) {
      const i = qa(a);
      return i ? new it(i, "rgb", "int") : null;
    }
    function Ga(a) {
      const i = a.match(
        /^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/
      );
      if (!i) return null;
      const o = [parseFloat(i[1]), parseFloat(i[2]), parseFloat(i[3])];
      return isNaN(o[0]) || isNaN(o[1]) || isNaN(o[2]) ? null : o;
    }
    function Wa(a) {
      return (i) => {
        const o = Ga(i);
        return o ? new it(o, "rgb", a) : null;
      };
    }
    function Ya(a) {
      const i = a.match(
        /^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/
      );
      if (!i) return null;
      const o = [
        parseFloat(i[1]),
        parseFloat(i[2]),
        parseFloat(i[3]),
        parseFloat(i[4])
      ];
      return isNaN(o[0]) || isNaN(o[1]) || isNaN(o[2]) || isNaN(o[3])
        ? null
        : o;
    }
    function Xa(a) {
      return (i) => {
        const o = Ya(i);
        return o ? new it(o, "rgb", a) : null;
      };
    }
    const Ip = [
      { parser: $a, result: { alpha: !1, mode: "rgb", notation: "hex" } },
      { parser: qa, result: { alpha: !0, mode: "rgb", notation: "hex" } },
      { parser: Ba, result: { alpha: !1, mode: "rgb", notation: "func" } },
      { parser: Na, result: { alpha: !0, mode: "rgb", notation: "func" } },
      { parser: Ha, result: { alpha: !1, mode: "hsl", notation: "func" } },
      { parser: Ka, result: { alpha: !0, mode: "hsl", notation: "func" } },
      { parser: Ga, result: { alpha: !1, mode: "rgb", notation: "object" } },
      { parser: Ya, result: { alpha: !0, mode: "rgb", notation: "object" } }
    ];
    function Bp(a) {
      return Ip.reduce(
        (i, { parser: o, result: h }) => i || (o(a) ? h : null),
        null
      );
    }
    function nr(a, i = "int") {
      const o = Bp(a);
      return o
        ? o.notation === "hex" && i !== "float"
          ? Object.assign(Object.assign({}, o), { type: "int" })
          : o.notation === "func"
          ? Object.assign(Object.assign({}, o), { type: i })
          : null
        : null;
    }
    const Ja = {
      int: [
        Fp,
        Rp,
        Va("int"),
        za("int"),
        Ua("int"),
        ja("int"),
        Wa("int"),
        Xa("int")
      ],
      float: [
        Va("float"),
        za("float"),
        Ua("float"),
        ja("float"),
        Wa("float"),
        Xa("float")
      ]
    };
    function Vp(a) {
      const i = Ja[a];
      return (o) => {
        if (typeof o != "string") return it.black(a);
        const h = i.reduce((f, b) => f || b(o), null);
        return h !== null && h !== void 0 ? h : it.black(a);
      };
    }
    function rr(a) {
      const i = Ja[a];
      return (o) => i.reduce((h, f) => h || f(o), null);
    }
    function Za(a) {
      const i = vt(Math.floor(a), 0, 255).toString(16);
      return i.length === 1 ? `0${i}` : i;
    }
    function Qa(a, i = "#") {
      const o = We(a.getComponents("rgb")).map(Za).join("");
      return `${i}${o}`;
    }
    function or(a, i = "#") {
      const o = a.getComponents("rgb"),
        h = [o[0], o[1], o[2], o[3] * 255].map(Za).join("");
      return `${i}${h}`;
    }
    function tl(a, i) {
      const o = yt(i === "float" ? 2 : 0);
      return `rgb(${We(a.getComponents("rgb", i))
        .map((f) => o(f))
        .join(", ")})`;
    }
    function Np(a) {
      return (i) => tl(i, a);
    }
    function en(a, i) {
      const o = yt(2),
        h = yt(i === "float" ? 2 : 0);
      return `rgba(${a
        .getComponents("rgb", i)
        .map((b, x) => (x === 3 ? o : h)(b))
        .join(", ")})`;
    }
    function zp(a) {
      return (i) => en(i, a);
    }
    function Hp(a) {
      const i = [yt(0), Ys, Ys];
      return `hsl(${We(a.getComponents("hsl"))
        .map((h, f) => i[f](h))
        .join(", ")})`;
    }
    function Up(a) {
      const i = [yt(0), Ys, Ys, yt(2)];
      return `hsla(${a
        .getComponents("hsl")
        .map((h, f) => i[f](h))
        .join(", ")})`;
    }
    function el(a, i) {
      const o = yt(i === "float" ? 2 : 0),
        h = ["r", "g", "b"];
      return `{${We(a.getComponents("rgb", i))
        .map((b, x) => `${h[x]}: ${o(b)}`)
        .join(", ")}}`;
    }
    function Kp(a) {
      return (i) => el(i, a);
    }
    function il(a, i) {
      const o = yt(2),
        h = yt(i === "float" ? 2 : 0),
        f = ["r", "g", "b", "a"];
      return `{${a
        .getComponents("rgb", i)
        .map((x, I) => {
          const Y = I === 3 ? o : h;
          return `${f[I]}: ${Y(x)}`;
        })
        .join(", ")}}`;
    }
    function jp(a) {
      return (i) => il(i, a);
    }
    const $p = [
      {
        format: { alpha: !1, mode: "rgb", notation: "hex", type: "int" },
        stringifier: Qa
      },
      {
        format: { alpha: !0, mode: "rgb", notation: "hex", type: "int" },
        stringifier: or
      },
      {
        format: { alpha: !1, mode: "hsl", notation: "func", type: "int" },
        stringifier: Hp
      },
      {
        format: { alpha: !0, mode: "hsl", notation: "func", type: "int" },
        stringifier: Up
      },
      ...["int", "float"].reduce(
        (a, i) => [
          ...a,
          {
            format: { alpha: !1, mode: "rgb", notation: "func", type: i },
            stringifier: Np(i)
          },
          {
            format: { alpha: !0, mode: "rgb", notation: "func", type: i },
            stringifier: zp(i)
          },
          {
            format: { alpha: !1, mode: "rgb", notation: "object", type: i },
            stringifier: Kp(i)
          },
          {
            format: { alpha: !0, mode: "rgb", notation: "object", type: i },
            stringifier: jp(i)
          }
        ],
        []
      )
    ];
    function ar(a) {
      return $p.reduce(
        (i, o) => i || (Ap(o.format, a) ? o.stringifier : null),
        null
      );
    }
    const ns = k("apl");
    class qp {
      constructor(i, o) {
        (this.onValueChange_ = this.onValueChange_.bind(this)),
          (this.value = o.value),
          this.value.emitter.on("change", this.onValueChange_),
          (this.element = i.createElement("div")),
          this.element.classList.add(ns()),
          o.viewProps.bindClassModifiers(this.element),
          o.viewProps.bindTabIndex(this.element);
        const h = i.createElement("div");
        h.classList.add(ns("b")), this.element.appendChild(h);
        const f = i.createElement("div");
        f.classList.add(ns("c")), h.appendChild(f), (this.colorElem_ = f);
        const b = i.createElement("div");
        b.classList.add(ns("m")),
          this.element.appendChild(b),
          (this.markerElem_ = b);
        const x = i.createElement("div");
        x.classList.add(ns("p")),
          this.markerElem_.appendChild(x),
          (this.previewElem_ = x),
          this.update_();
      }
      update_() {
        const i = this.value.rawValue,
          o = i.getComponents("rgb"),
          h = new it([o[0], o[1], o[2], 0], "rgb"),
          f = new it([o[0], o[1], o[2], 255], "rgb"),
          b = ["to right", en(h), en(f)];
        (this.colorElem_.style.background = `linear-gradient(${b.join(",")})`),
          (this.previewElem_.style.backgroundColor = en(i));
        const x = ht(o[3], 0, 1, 0, 100);
        this.markerElem_.style.left = `${x}%`;
      }
      onValueChange_() {
        this.update_();
      }
    }
    class Gp {
      constructor(i, o) {
        (this.onKeyDown_ = this.onKeyDown_.bind(this)),
          (this.onKeyUp_ = this.onKeyUp_.bind(this)),
          (this.onPointerDown_ = this.onPointerDown_.bind(this)),
          (this.onPointerMove_ = this.onPointerMove_.bind(this)),
          (this.onPointerUp_ = this.onPointerUp_.bind(this)),
          (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.view = new qp(i, {
            value: this.value,
            viewProps: this.viewProps
          })),
          (this.ptHandler_ = new qe(this.view.element)),
          this.ptHandler_.emitter.on("down", this.onPointerDown_),
          this.ptHandler_.emitter.on("move", this.onPointerMove_),
          this.ptHandler_.emitter.on("up", this.onPointerUp_),
          this.view.element.addEventListener("keydown", this.onKeyDown_),
          this.view.element.addEventListener("keyup", this.onKeyUp_);
      }
      handlePointerEvent_(i, o) {
        if (!i.point) return;
        const h = i.point.x / i.bounds.width,
          f = this.value.rawValue,
          [b, x, I] = f.getComponents("hsv");
        this.value.setRawValue(new it([b, x, I, h], "hsv"), o);
      }
      onPointerDown_(i) {
        this.handlePointerEvent_(i.data, { forceEmit: !1, last: !1 });
      }
      onPointerMove_(i) {
        this.handlePointerEvent_(i.data, { forceEmit: !1, last: !1 });
      }
      onPointerUp_(i) {
        this.handlePointerEvent_(i.data, { forceEmit: !0, last: !0 });
      }
      onKeyDown_(i) {
        const o = Lt(Ye(!0), le(i));
        if (o === 0) return;
        const h = this.value.rawValue,
          [f, b, x, I] = h.getComponents("hsv");
        this.value.setRawValue(new it([f, b, x, I + o], "hsv"), {
          forceEmit: !1,
          last: !1
        });
      }
      onKeyUp_(i) {
        Lt(Ye(!0), le(i)) !== 0 &&
          this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
          });
      }
    }
    const gi = k("coltxt");
    function Wp(a) {
      const i = a.createElement("select"),
        o = [
          { text: "RGB", value: "rgb" },
          { text: "HSL", value: "hsl" },
          { text: "HSV", value: "hsv" }
        ];
      return (
        i.appendChild(
          o.reduce((h, f) => {
            const b = a.createElement("option");
            return (
              (b.textContent = f.text), (b.value = f.value), h.appendChild(b), h
            );
          }, a.createDocumentFragment())
        ),
        i
      );
    }
    class Yp {
      constructor(i, o) {
        (this.element = i.createElement("div")),
          this.element.classList.add(gi()),
          o.viewProps.bindClassModifiers(this.element);
        const h = i.createElement("div");
        h.classList.add(gi("m")),
          (this.modeElem_ = Wp(i)),
          this.modeElem_.classList.add(gi("ms")),
          h.appendChild(this.modeSelectElement),
          o.viewProps.bindDisabled(this.modeElem_);
        const f = i.createElement("div");
        f.classList.add(gi("mm")),
          f.appendChild(js(i, "dropdown")),
          h.appendChild(f),
          this.element.appendChild(h);
        const b = i.createElement("div");
        b.classList.add(gi("w")),
          this.element.appendChild(b),
          (this.textsElem_ = b),
          (this.textViews_ = o.textViews),
          this.applyTextViews_(),
          L(o.colorMode, (x) => {
            this.modeElem_.value = x;
          });
      }
      get modeSelectElement() {
        return this.modeElem_;
      }
      get textViews() {
        return this.textViews_;
      }
      set textViews(i) {
        (this.textViews_ = i), this.applyTextViews_();
      }
      applyTextViews_() {
        ea(this.textsElem_);
        const i = this.element.ownerDocument;
        this.textViews_.forEach((o) => {
          const h = i.createElement("div");
          h.classList.add(gi("c")),
            h.appendChild(o.element),
            this.textsElem_.appendChild(h);
        });
      }
    }
    function Xp(a) {
      return yt(a === "float" ? 2 : 0);
    }
    function Jp(a, i, o) {
      const h = Qs(a, i)[o];
      return new mi({ min: 0, max: h });
    }
    function lr(a, i, o) {
      return new is(a, {
        arrayPosition: o === 0 ? "fst" : o === 3 - 1 ? "lst" : "mid",
        baseStep: Ye(!1),
        parser: i.parser,
        props: N.fromObject({
          draggingScale: i.colorType === "float" ? 0.01 : 1,
          formatter: Xp(i.colorType)
        }),
        value: U(0, { constraint: Jp(i.colorMode, i.colorType, o) }),
        viewProps: i.viewProps
      });
    }
    class Zp {
      constructor(i, o) {
        (this.onModeSelectChange_ = this.onModeSelectChange_.bind(this)),
          (this.colorType_ = o.colorType),
          (this.parser_ = o.parser),
          (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.colorMode = U(this.value.rawValue.mode)),
          (this.ccs_ = this.createComponentControllers_(i)),
          (this.view = new Yp(i, {
            colorMode: this.colorMode,
            textViews: [
              this.ccs_[0].view,
              this.ccs_[1].view,
              this.ccs_[2].view
            ],
            viewProps: this.viewProps
          })),
          this.view.modeSelectElement.addEventListener(
            "change",
            this.onModeSelectChange_
          );
      }
      createComponentControllers_(i) {
        const o = {
            colorMode: this.colorMode.rawValue,
            colorType: this.colorType_,
            parser: this.parser_,
            viewProps: this.viewProps
          },
          h = [lr(i, o, 0), lr(i, o, 1), lr(i, o, 2)];
        return (
          h.forEach((f, b) => {
            ts({
              primary: this.value,
              secondary: f.value,
              forward: (x) =>
                x.rawValue.getComponents(
                  this.colorMode.rawValue,
                  this.colorType_
                )[b],
              backward: (x, I) => {
                const Y = this.colorMode.rawValue,
                  J = x.rawValue.getComponents(Y, this.colorType_);
                return (
                  (J[b] = I.rawValue),
                  new it(Fa(We(J), J[3]), Y, this.colorType_)
                );
              }
            });
          }),
          h
        );
      }
      onModeSelectChange_(i) {
        const o = i.currentTarget;
        (this.colorMode.rawValue = o.value),
          (this.ccs_ = this.createComponentControllers_(
            this.view.element.ownerDocument
          )),
          (this.view.textViews = [
            this.ccs_[0].view,
            this.ccs_[1].view,
            this.ccs_[2].view
          ]);
      }
    }
    const hr = k("hpl");
    class Qp {
      constructor(i, o) {
        (this.onValueChange_ = this.onValueChange_.bind(this)),
          (this.value = o.value),
          this.value.emitter.on("change", this.onValueChange_),
          (this.element = i.createElement("div")),
          this.element.classList.add(hr()),
          o.viewProps.bindClassModifiers(this.element),
          o.viewProps.bindTabIndex(this.element);
        const h = i.createElement("div");
        h.classList.add(hr("c")), this.element.appendChild(h);
        const f = i.createElement("div");
        f.classList.add(hr("m")),
          this.element.appendChild(f),
          (this.markerElem_ = f),
          this.update_();
      }
      update_() {
        const i = this.value.rawValue,
          [o] = i.getComponents("hsv");
        this.markerElem_.style.backgroundColor = tl(
          new it([o, 100, 100], "hsv")
        );
        const h = ht(o, 0, 360, 0, 100);
        this.markerElem_.style.left = `${h}%`;
      }
      onValueChange_() {
        this.update_();
      }
    }
    class tf {
      constructor(i, o) {
        (this.onKeyDown_ = this.onKeyDown_.bind(this)),
          (this.onKeyUp_ = this.onKeyUp_.bind(this)),
          (this.onPointerDown_ = this.onPointerDown_.bind(this)),
          (this.onPointerMove_ = this.onPointerMove_.bind(this)),
          (this.onPointerUp_ = this.onPointerUp_.bind(this)),
          (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.view = new Qp(i, {
            value: this.value,
            viewProps: this.viewProps
          })),
          (this.ptHandler_ = new qe(this.view.element)),
          this.ptHandler_.emitter.on("down", this.onPointerDown_),
          this.ptHandler_.emitter.on("move", this.onPointerMove_),
          this.ptHandler_.emitter.on("up", this.onPointerUp_),
          this.view.element.addEventListener("keydown", this.onKeyDown_),
          this.view.element.addEventListener("keyup", this.onKeyUp_);
      }
      handlePointerEvent_(i, o) {
        if (!i.point) return;
        const h = ht(
            vt(i.point.x, 0, i.bounds.width),
            0,
            i.bounds.width,
            0,
            360
          ),
          f = this.value.rawValue,
          [, b, x, I] = f.getComponents("hsv");
        this.value.setRawValue(new it([h, b, x, I], "hsv"), o);
      }
      onPointerDown_(i) {
        this.handlePointerEvent_(i.data, { forceEmit: !1, last: !1 });
      }
      onPointerMove_(i) {
        this.handlePointerEvent_(i.data, { forceEmit: !1, last: !1 });
      }
      onPointerUp_(i) {
        this.handlePointerEvent_(i.data, { forceEmit: !0, last: !0 });
      }
      onKeyDown_(i) {
        const o = Lt(Ye(!1), le(i));
        if (o === 0) return;
        const h = this.value.rawValue,
          [f, b, x, I] = h.getComponents("hsv");
        this.value.setRawValue(new it([f + o, b, x, I], "hsv"), {
          forceEmit: !1,
          last: !1
        });
      }
      onKeyUp_(i) {
        Lt(Ye(!1), le(i)) !== 0 &&
          this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
          });
      }
    }
    const ur = k("svp"),
      sl = 64;
    class ef {
      constructor(i, o) {
        (this.onValueChange_ = this.onValueChange_.bind(this)),
          (this.value = o.value),
          this.value.emitter.on("change", this.onValueChange_),
          (this.element = i.createElement("div")),
          this.element.classList.add(ur()),
          o.viewProps.bindClassModifiers(this.element),
          o.viewProps.bindTabIndex(this.element);
        const h = i.createElement("canvas");
        (h.height = sl),
          (h.width = sl),
          h.classList.add(ur("c")),
          this.element.appendChild(h),
          (this.canvasElement = h);
        const f = i.createElement("div");
        f.classList.add(ur("m")),
          this.element.appendChild(f),
          (this.markerElem_ = f),
          this.update_();
      }
      update_() {
        const i = Qc(this.canvasElement);
        if (!i) return;
        const h = this.value.rawValue.getComponents("hsv"),
          f = this.canvasElement.width,
          b = this.canvasElement.height,
          x = i.getImageData(0, 0, f, b),
          I = x.data;
        for (let nt = 0; nt < b; nt++)
          for (let rt = 0; rt < f; rt++) {
            const Je = ht(rt, 0, f, 0, 100),
              os = ht(nt, 0, b, 100, 0),
              as = Oa(h[0], Je, os),
              sn = (nt * f + rt) * 4;
            (I[sn] = as[0]),
              (I[sn + 1] = as[1]),
              (I[sn + 2] = as[2]),
              (I[sn + 3] = 255);
          }
        i.putImageData(x, 0, 0);
        const Y = ht(h[1], 0, 100, 0, 100);
        this.markerElem_.style.left = `${Y}%`;
        const J = ht(h[2], 0, 100, 100, 0);
        this.markerElem_.style.top = `${J}%`;
      }
      onValueChange_() {
        this.update_();
      }
    }
    class sf {
      constructor(i, o) {
        (this.onKeyDown_ = this.onKeyDown_.bind(this)),
          (this.onKeyUp_ = this.onKeyUp_.bind(this)),
          (this.onPointerDown_ = this.onPointerDown_.bind(this)),
          (this.onPointerMove_ = this.onPointerMove_.bind(this)),
          (this.onPointerUp_ = this.onPointerUp_.bind(this)),
          (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.view = new ef(i, {
            value: this.value,
            viewProps: this.viewProps
          })),
          (this.ptHandler_ = new qe(this.view.element)),
          this.ptHandler_.emitter.on("down", this.onPointerDown_),
          this.ptHandler_.emitter.on("move", this.onPointerMove_),
          this.ptHandler_.emitter.on("up", this.onPointerUp_),
          this.view.element.addEventListener("keydown", this.onKeyDown_),
          this.view.element.addEventListener("keyup", this.onKeyUp_);
      }
      handlePointerEvent_(i, o) {
        if (!i.point) return;
        const h = ht(i.point.x, 0, i.bounds.width, 0, 100),
          f = ht(i.point.y, 0, i.bounds.height, 100, 0),
          [b, , , x] = this.value.rawValue.getComponents("hsv");
        this.value.setRawValue(new it([b, h, f, x], "hsv"), o);
      }
      onPointerDown_(i) {
        this.handlePointerEvent_(i.data, { forceEmit: !1, last: !1 });
      }
      onPointerMove_(i) {
        this.handlePointerEvent_(i.data, { forceEmit: !1, last: !1 });
      }
      onPointerUp_(i) {
        this.handlePointerEvent_(i.data, { forceEmit: !0, last: !0 });
      }
      onKeyDown_(i) {
        ka(i.key) && i.preventDefault();
        const [o, h, f, b] = this.value.rawValue.getComponents("hsv"),
          x = Ye(!1),
          I = Lt(x, le(i)),
          Y = Lt(x, es(i));
        (I === 0 && Y === 0) ||
          this.value.setRawValue(new it([o, h + I, f + Y, b], "hsv"), {
            forceEmit: !1,
            last: !1
          });
      }
      onKeyUp_(i) {
        const o = Ye(!1),
          h = Lt(o, le(i)),
          f = Lt(o, es(i));
        (h === 0 && f === 0) ||
          this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
          });
      }
    }
    class nf {
      constructor(i, o) {
        (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.hPaletteC_ = new tf(i, {
            value: this.value,
            viewProps: this.viewProps
          })),
          (this.svPaletteC_ = new sf(i, {
            value: this.value,
            viewProps: this.viewProps
          })),
          (this.alphaIcs_ = o.supportsAlpha
            ? {
                palette: new Gp(i, {
                  value: this.value,
                  viewProps: this.viewProps
                }),
                text: new is(i, {
                  parser: ae,
                  baseStep: 0.1,
                  props: N.fromObject({
                    draggingScale: 0.01,
                    formatter: yt(2)
                  }),
                  value: U(0, { constraint: new mi({ min: 0, max: 1 }) }),
                  viewProps: this.viewProps
                })
              }
            : null),
          this.alphaIcs_ &&
            ts({
              primary: this.value,
              secondary: this.alphaIcs_.text.value,
              forward: (h) => h.rawValue.getComponents()[3],
              backward: (h, f) => {
                const b = h.rawValue.getComponents();
                return (b[3] = f.rawValue), new it(b, h.rawValue.mode);
              }
            }),
          (this.textC_ = new Zp(i, {
            colorType: o.colorType,
            parser: ae,
            value: this.value,
            viewProps: this.viewProps
          })),
          (this.view = new Mp(i, {
            alphaViews: this.alphaIcs_
              ? {
                  palette: this.alphaIcs_.palette.view,
                  text: this.alphaIcs_.text.view
                }
              : null,
            hPaletteView: this.hPaletteC_.view,
            supportsAlpha: o.supportsAlpha,
            svPaletteView: this.svPaletteC_.view,
            textView: this.textC_.view,
            viewProps: this.viewProps
          }));
      }
      get textController() {
        return this.textC_;
      }
    }
    const cr = k("colsw");
    class rf {
      constructor(i, o) {
        (this.onValueChange_ = this.onValueChange_.bind(this)),
          o.value.emitter.on("change", this.onValueChange_),
          (this.value = o.value),
          (this.element = i.createElement("div")),
          this.element.classList.add(cr()),
          o.viewProps.bindClassModifiers(this.element);
        const h = i.createElement("div");
        h.classList.add(cr("sw")),
          this.element.appendChild(h),
          (this.swatchElem_ = h);
        const f = i.createElement("button");
        f.classList.add(cr("b")),
          o.viewProps.bindDisabled(f),
          this.element.appendChild(f),
          (this.buttonElement = f),
          this.update_();
      }
      update_() {
        const i = this.value.rawValue;
        this.swatchElem_.style.backgroundColor = or(i);
      }
      onValueChange_() {
        this.update_();
      }
    }
    class of {
      constructor(i, o) {
        (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.view = new rf(i, {
            value: this.value,
            viewProps: this.viewProps
          }));
      }
    }
    class dr {
      constructor(i, o) {
        (this.onButtonBlur_ = this.onButtonBlur_.bind(this)),
          (this.onButtonClick_ = this.onButtonClick_.bind(this)),
          (this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this)),
          (this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this)),
          (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.foldable_ = ji.create(o.expanded)),
          (this.swatchC_ = new of(i, {
            value: this.value,
            viewProps: this.viewProps
          }));
        const h = this.swatchC_.view.buttonElement;
        h.addEventListener("blur", this.onButtonBlur_),
          h.addEventListener("click", this.onButtonClick_),
          (this.textC_ = new Ws(i, {
            parser: o.parser,
            props: N.fromObject({ formatter: o.formatter }),
            value: this.value,
            viewProps: this.viewProps
          })),
          (this.view = new wp(i, {
            foldable: this.foldable_,
            pickerLayout: o.pickerLayout
          })),
          this.view.swatchElement.appendChild(this.swatchC_.view.element),
          this.view.textElement.appendChild(this.textC_.view.element),
          (this.popC_ =
            o.pickerLayout === "popup"
              ? new ba(i, { viewProps: this.viewProps })
              : null);
        const f = new nf(i, {
          colorType: o.colorType,
          supportsAlpha: o.supportsAlpha,
          value: this.value,
          viewProps: this.viewProps
        });
        f.view.allFocusableElements.forEach((b) => {
          b.addEventListener("blur", this.onPopupChildBlur_),
            b.addEventListener("keydown", this.onPopupChildKeydown_);
        }),
          (this.pickerC_ = f),
          this.popC_
            ? (this.view.element.appendChild(this.popC_.view.element),
              this.popC_.view.element.appendChild(f.view.element),
              ts({
                primary: this.foldable_.value("expanded"),
                secondary: this.popC_.shows,
                forward: (b) => b.rawValue,
                backward: (b, x) => x.rawValue
              }))
            : this.view.pickerElement &&
              (this.view.pickerElement.appendChild(this.pickerC_.view.element),
              Nn(this.foldable_, this.view.pickerElement));
      }
      get textController() {
        return this.textC_;
      }
      onButtonBlur_(i) {
        if (!this.popC_) return;
        const o = this.view.element,
          h = i.relatedTarget;
        (!h || !o.contains(h)) && (this.popC_.shows.rawValue = !1);
      }
      onButtonClick_() {
        this.foldable_.set("expanded", !this.foldable_.get("expanded")),
          this.foldable_.get("expanded") &&
            this.pickerC_.view.allFocusableElements[0].focus();
      }
      onPopupChildBlur_(i) {
        if (!this.popC_) return;
        const o = this.popC_.view.element,
          h = ia(i);
        (h && o.contains(h)) ||
          (h &&
            h === this.swatchC_.view.buttonElement &&
            !Vn(o.ownerDocument)) ||
          (this.popC_.shows.rawValue = !1);
      }
      onPopupChildKeydown_(i) {
        this.popC_
          ? i.key === "Escape" && (this.popC_.shows.rawValue = !1)
          : this.view.pickerElement &&
            i.key === "Escape" &&
            this.swatchC_.view.buttonElement.focus();
      }
    }
    function af(a, i) {
      return it.isColorObject(a) ? it.fromObject(a, i) : it.black(i);
    }
    function lf(a) {
      return We(a.getComponents("rgb")).reduce(
        (i, o) => (i << 8) | (Math.floor(o) & 255),
        0
      );
    }
    function hf(a) {
      return (
        a.getComponents("rgb").reduce((i, o, h) => {
          const f = Math.floor(h === 3 ? o * 255 : o) & 255;
          return (i << 8) | f;
        }, 0) >>> 0
      );
    }
    function uf(a) {
      return new it([(a >> 16) & 255, (a >> 8) & 255, a & 255], "rgb");
    }
    function cf(a) {
      return new it(
        [
          (a >> 24) & 255,
          (a >> 16) & 255,
          (a >> 8) & 255,
          ht(a & 255, 0, 255, 0, 1)
        ],
        "rgb"
      );
    }
    function df(a) {
      return typeof a != "number" ? it.black() : uf(a);
    }
    function pf(a) {
      return typeof a != "number" ? it.black() : cf(a);
    }
    function ff(a) {
      const i = ar(a);
      return i
        ? (o, h) => {
            ss(o, i(h));
          }
        : null;
    }
    function mf(a) {
      const i = a ? hf : lf;
      return (o, h) => {
        ss(o, i(h));
      };
    }
    function _f(a, i, o) {
      const h = i.toRgbaObject(o);
      a.writeProperty("r", h.r),
        a.writeProperty("g", h.g),
        a.writeProperty("b", h.b),
        a.writeProperty("a", h.a);
    }
    function vf(a, i, o) {
      const h = i.toRgbaObject(o);
      a.writeProperty("r", h.r),
        a.writeProperty("g", h.g),
        a.writeProperty("b", h.b);
    }
    function gf(a, i) {
      return (o, h) => {
        a ? _f(o, h, i) : vf(o, h, i);
      };
    }
    function pr(a) {
      var i;
      return !!(
        (a !== null && a !== void 0 && a.alpha) ||
        (!(
          (i = a === null || a === void 0 ? void 0 : a.color) === null ||
          i === void 0
        ) &&
          i.alpha)
      );
    }
    function bf(a) {
      return a ? (i) => or(i, "0x") : (i) => Qa(i, "0x");
    }
    function wf(a) {
      return "color" in a || ("view" in a && a.view === "color");
    }
    const yf = {
      id: "input-color-number",
      type: "input",
      accept: (a, i) => {
        if (typeof a != "number" || !wf(i)) return null;
        const o = sr(i);
        return o ? { initialValue: a, params: o } : null;
      },
      binding: {
        reader: (a) => (pr(a.params) ? pf : df),
        equals: it.equals,
        writer: (a) => mf(pr(a.params))
      },
      controller: (a) => {
        const i = pr(a.params),
          o = "expanded" in a.params ? a.params.expanded : void 0,
          h = "picker" in a.params ? a.params.picker : void 0;
        return new dr(a.document, {
          colorType: "int",
          expanded: o !== null && o !== void 0 ? o : !1,
          formatter: bf(i),
          parser: rr("int"),
          pickerLayout: h !== null && h !== void 0 ? h : "popup",
          supportsAlpha: i,
          value: a.value,
          viewProps: a.viewProps
        });
      }
    };
    function Df(a) {
      return it.isRgbaColorObject(a);
    }
    function Cf(a) {
      return (i) => af(i, a);
    }
    function xf(a, i) {
      return (o) => (a ? il(o, i) : el(o, i));
    }
    const Sf = {
        id: "input-color-object",
        type: "input",
        accept: (a, i) => {
          if (!it.isColorObject(a)) return null;
          const o = sr(i);
          return o ? { initialValue: a, params: o } : null;
        },
        binding: {
          reader: (a) => Cf(Xe(a.params)),
          equals: it.equals,
          writer: (a) => gf(Df(a.initialValue), Xe(a.params))
        },
        controller: (a) => {
          var i;
          const o = it.isRgbaColorObject(a.initialValue),
            h = "expanded" in a.params ? a.params.expanded : void 0,
            f = "picker" in a.params ? a.params.picker : void 0,
            b = (i = Xe(a.params)) !== null && i !== void 0 ? i : "int";
          return new dr(a.document, {
            colorType: b,
            expanded: h !== null && h !== void 0 ? h : !1,
            formatter: xf(o, b),
            parser: rr(b),
            pickerLayout: f !== null && f !== void 0 ? f : "popup",
            supportsAlpha: o,
            value: a.value,
            viewProps: a.viewProps
          });
        }
      },
      Ef = {
        id: "input-color-string",
        type: "input",
        accept: (a, i) => {
          if (typeof a != "string" || ("view" in i && i.view === "text"))
            return null;
          const o = nr(a, Xe(i));
          if (!o || !ar(o)) return null;
          const f = sr(i);
          return f ? { initialValue: a, params: f } : null;
        },
        binding: {
          reader: (a) => {
            var i;
            return Vp((i = Xe(a.params)) !== null && i !== void 0 ? i : "int");
          },
          equals: it.equals,
          writer: (a) => {
            const i = nr(a.initialValue, Xe(a.params));
            if (!i) throw v.shouldNeverHappen();
            const o = ff(i);
            if (!o) throw v.notBindable();
            return o;
          }
        },
        controller: (a) => {
          const i = nr(a.initialValue, Xe(a.params));
          if (!i) throw v.shouldNeverHappen();
          const o = ar(i);
          if (!o) throw v.shouldNeverHappen();
          const h = "expanded" in a.params ? a.params.expanded : void 0,
            f = "picker" in a.params ? a.params.picker : void 0;
          return new dr(a.document, {
            colorType: i.type,
            expanded: h !== null && h !== void 0 ? h : !1,
            formatter: o,
            parser: rr(i.type),
            pickerLayout: f !== null && f !== void 0 ? f : "popup",
            supportsAlpha: i.alpha,
            value: a.value,
            viewProps: a.viewProps
          });
        }
      };
    class Ce {
      constructor(i) {
        (this.components = i.components), (this.asm_ = i.assembly);
      }
      constrain(i) {
        const o = this.asm_.toComponents(i).map((h, f) => {
          var b, x;
          return (x =
            (b = this.components[f]) === null || b === void 0
              ? void 0
              : b.constrain(h)) !== null && x !== void 0
            ? x
            : h;
        });
        return this.asm_.fromComponents(o);
      }
    }
    const nl = k("pndtxt");
    class Pf {
      constructor(i, o) {
        (this.textViews = o.textViews),
          (this.element = i.createElement("div")),
          this.element.classList.add(nl()),
          this.textViews.forEach((h) => {
            const f = i.createElement("div");
            f.classList.add(nl("a")),
              f.appendChild(h.element),
              this.element.appendChild(f);
          });
      }
    }
    function kf(a, i, o) {
      return new is(a, {
        arrayPosition:
          o === 0 ? "fst" : o === i.axes.length - 1 ? "lst" : "mid",
        baseStep: i.axes[o].baseStep,
        parser: i.parser,
        props: i.axes[o].textProps,
        value: U(0, { constraint: i.axes[o].constraint }),
        viewProps: i.viewProps
      });
    }
    class fr {
      constructor(i, o) {
        (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.acs_ = o.axes.map((h, f) => kf(i, o, f))),
          this.acs_.forEach((h, f) => {
            ts({
              primary: this.value,
              secondary: h.value,
              forward: (b) => o.assembly.toComponents(b.rawValue)[f],
              backward: (b, x) => {
                const I = o.assembly.toComponents(b.rawValue);
                return (I[f] = x.rawValue), o.assembly.fromComponents(I);
              }
            });
          }),
          (this.view = new Pf(i, { textViews: this.acs_.map((h) => h.view) }));
      }
    }
    function rl(a, i) {
      return "step" in a && !_(a.step) ? new Gs(a.step, i) : null;
    }
    function ol(a) {
      return !_(a.max) && !_(a.min)
        ? new mi({ max: a.max, min: a.min })
        : !_(a.max) || !_(a.min)
        ? new va({ max: a.max, min: a.min })
        : null;
    }
    function Lf(a) {
      const i = oe(a, mi);
      if (i) return [i.values.get("min"), i.values.get("max")];
      const o = oe(a, va);
      return o ? [o.minValue, o.maxValue] : [void 0, void 0];
    }
    function Mf(a, i) {
      const o = [],
        h = rl(a, i);
      h && o.push(h);
      const f = ol(a);
      f && o.push(f);
      const b = ir(a.options);
      return b && o.push(b), new Yi(o);
    }
    const Tf = {
      id: "input-number",
      type: "input",
      accept: (a, i) => {
        if (typeof a != "number") return null;
        const o = W,
          h = q(i, {
            format: o.optional.function,
            max: o.optional.number,
            min: o.optional.number,
            options: o.optional.custom(Xs),
            step: o.optional.number
          });
        return h ? { initialValue: a, params: h } : null;
      },
      binding: {
        reader: (a) => Ea,
        constraint: (a) => Mf(a.params, a.initialValue),
        writer: (a) => ss
      },
      controller: (a) => {
        var i;
        const o = a.value,
          h = a.constraint,
          f = h && oe(h, Xi);
        if (f)
          return new Ji(a.document, {
            props: new N({ options: f.values.value("options") }),
            value: o,
            viewProps: a.viewProps
          });
        const b =
            (i = "format" in a.params ? a.params.format : void 0) !== null &&
            i !== void 0
              ? i
              : yt(Js(h, o.rawValue)),
          x = h && oe(h, mi);
        return x
          ? new er(a.document, {
              baseStep: _i(h),
              parser: ae,
              sliderProps: new N({
                maxValue: x.values.value("max"),
                minValue: x.values.value("min")
              }),
              textProps: N.fromObject({
                draggingScale: vi(h, o.rawValue),
                formatter: b
              }),
              value: o,
              viewProps: a.viewProps
            })
          : new is(a.document, {
              baseStep: _i(h),
              parser: ae,
              props: N.fromObject({
                draggingScale: vi(h, o.rawValue),
                formatter: b
              }),
              value: o,
              viewProps: a.viewProps
            });
      }
    };
    class xe {
      constructor(i = 0, o = 0) {
        (this.x = i), (this.y = o);
      }
      getComponents() {
        return [this.x, this.y];
      }
      static isObject(i) {
        if (_(i)) return !1;
        const o = i.x,
          h = i.y;
        return !(typeof o != "number" || typeof h != "number");
      }
      static equals(i, o) {
        return i.x === o.x && i.y === o.y;
      }
      toObject() {
        return { x: this.x, y: this.y };
      }
    }
    const al = {
        toComponents: (a) => a.getComponents(),
        fromComponents: (a) => new xe(...a)
      },
      bi = k("p2d");
    class Af {
      constructor(i, o) {
        (this.element = i.createElement("div")),
          this.element.classList.add(bi()),
          o.viewProps.bindClassModifiers(this.element),
          L(o.expanded, B(this.element, bi(void 0, "expanded")));
        const h = i.createElement("div");
        h.classList.add(bi("h")), this.element.appendChild(h);
        const f = i.createElement("button");
        f.classList.add(bi("b")),
          f.appendChild(js(i, "p2dpad")),
          o.viewProps.bindDisabled(f),
          h.appendChild(f),
          (this.buttonElement = f);
        const b = i.createElement("div");
        if (
          (b.classList.add(bi("t")),
          h.appendChild(b),
          (this.textElement = b),
          o.pickerLayout === "inline")
        ) {
          const x = i.createElement("div");
          x.classList.add(bi("p")),
            this.element.appendChild(x),
            (this.pickerElement = x);
        } else this.pickerElement = null;
      }
    }
    const Se = k("p2dp");
    class Of {
      constructor(i, o) {
        (this.onFoldableChange_ = this.onFoldableChange_.bind(this)),
          (this.onValueChange_ = this.onValueChange_.bind(this)),
          (this.invertsY_ = o.invertsY),
          (this.maxValue_ = o.maxValue),
          (this.element = i.createElement("div")),
          this.element.classList.add(Se()),
          o.layout === "popup" && this.element.classList.add(Se(void 0, "p")),
          o.viewProps.bindClassModifiers(this.element);
        const h = i.createElement("div");
        h.classList.add(Se("p")),
          o.viewProps.bindTabIndex(h),
          this.element.appendChild(h),
          (this.padElement = h);
        const f = i.createElementNS(Zt, "svg");
        f.classList.add(Se("g")),
          this.padElement.appendChild(f),
          (this.svgElem_ = f);
        const b = i.createElementNS(Zt, "line");
        b.classList.add(Se("ax")),
          b.setAttributeNS(null, "x1", "0"),
          b.setAttributeNS(null, "y1", "50%"),
          b.setAttributeNS(null, "x2", "100%"),
          b.setAttributeNS(null, "y2", "50%"),
          this.svgElem_.appendChild(b);
        const x = i.createElementNS(Zt, "line");
        x.classList.add(Se("ax")),
          x.setAttributeNS(null, "x1", "50%"),
          x.setAttributeNS(null, "y1", "0"),
          x.setAttributeNS(null, "x2", "50%"),
          x.setAttributeNS(null, "y2", "100%"),
          this.svgElem_.appendChild(x);
        const I = i.createElementNS(Zt, "line");
        I.classList.add(Se("l")),
          I.setAttributeNS(null, "x1", "50%"),
          I.setAttributeNS(null, "y1", "50%"),
          this.svgElem_.appendChild(I),
          (this.lineElem_ = I);
        const Y = i.createElement("div");
        Y.classList.add(Se("m")),
          this.padElement.appendChild(Y),
          (this.markerElem_ = Y),
          o.value.emitter.on("change", this.onValueChange_),
          (this.value = o.value),
          this.update_();
      }
      get allFocusableElements() {
        return [this.padElement];
      }
      update_() {
        const [i, o] = this.value.rawValue.getComponents(),
          h = this.maxValue_,
          f = ht(i, -h, +h, 0, 100),
          b = ht(o, -h, +h, 0, 100),
          x = this.invertsY_ ? 100 - b : b;
        this.lineElem_.setAttributeNS(null, "x2", `${f}%`),
          this.lineElem_.setAttributeNS(null, "y2", `${x}%`),
          (this.markerElem_.style.left = `${f}%`),
          (this.markerElem_.style.top = `${x}%`);
      }
      onValueChange_() {
        this.update_();
      }
      onFoldableChange_() {
        this.update_();
      }
    }
    function ll(a, i, o) {
      return [Lt(i[0], le(a)), Lt(i[1], es(a)) * (o ? 1 : -1)];
    }
    class Ff {
      constructor(i, o) {
        (this.onPadKeyDown_ = this.onPadKeyDown_.bind(this)),
          (this.onPadKeyUp_ = this.onPadKeyUp_.bind(this)),
          (this.onPointerDown_ = this.onPointerDown_.bind(this)),
          (this.onPointerMove_ = this.onPointerMove_.bind(this)),
          (this.onPointerUp_ = this.onPointerUp_.bind(this)),
          (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.baseSteps_ = o.baseSteps),
          (this.maxValue_ = o.maxValue),
          (this.invertsY_ = o.invertsY),
          (this.view = new Of(i, {
            invertsY: this.invertsY_,
            layout: o.layout,
            maxValue: this.maxValue_,
            value: this.value,
            viewProps: this.viewProps
          })),
          (this.ptHandler_ = new qe(this.view.padElement)),
          this.ptHandler_.emitter.on("down", this.onPointerDown_),
          this.ptHandler_.emitter.on("move", this.onPointerMove_),
          this.ptHandler_.emitter.on("up", this.onPointerUp_),
          this.view.padElement.addEventListener("keydown", this.onPadKeyDown_),
          this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
      }
      handlePointerEvent_(i, o) {
        if (!i.point) return;
        const h = this.maxValue_,
          f = ht(i.point.x, 0, i.bounds.width, -h, +h),
          b = ht(
            this.invertsY_ ? i.bounds.height - i.point.y : i.point.y,
            0,
            i.bounds.height,
            -h,
            +h
          );
        this.value.setRawValue(new xe(f, b), o);
      }
      onPointerDown_(i) {
        this.handlePointerEvent_(i.data, { forceEmit: !1, last: !1 });
      }
      onPointerMove_(i) {
        this.handlePointerEvent_(i.data, { forceEmit: !1, last: !1 });
      }
      onPointerUp_(i) {
        this.handlePointerEvent_(i.data, { forceEmit: !0, last: !0 });
      }
      onPadKeyDown_(i) {
        ka(i.key) && i.preventDefault();
        const [o, h] = ll(i, this.baseSteps_, this.invertsY_);
        (o === 0 && h === 0) ||
          this.value.setRawValue(
            new xe(this.value.rawValue.x + o, this.value.rawValue.y + h),
            { forceEmit: !1, last: !1 }
          );
      }
      onPadKeyUp_(i) {
        const [o, h] = ll(i, this.baseSteps_, this.invertsY_);
        (o === 0 && h === 0) ||
          this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
          });
      }
    }
    class Rf {
      constructor(i, o) {
        var h, f;
        (this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this)),
          (this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this)),
          (this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this)),
          (this.onPadButtonClick_ = this.onPadButtonClick_.bind(this)),
          (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.foldable_ = ji.create(o.expanded)),
          (this.popC_ =
            o.pickerLayout === "popup"
              ? new ba(i, { viewProps: this.viewProps })
              : null);
        const b = new Ff(i, {
          baseSteps: [o.axes[0].baseStep, o.axes[1].baseStep],
          invertsY: o.invertsY,
          layout: o.pickerLayout,
          maxValue: o.maxValue,
          value: this.value,
          viewProps: this.viewProps
        });
        b.view.allFocusableElements.forEach((x) => {
          x.addEventListener("blur", this.onPopupChildBlur_),
            x.addEventListener("keydown", this.onPopupChildKeydown_);
        }),
          (this.pickerC_ = b),
          (this.textC_ = new fr(i, {
            assembly: al,
            axes: o.axes,
            parser: o.parser,
            value: this.value,
            viewProps: this.viewProps
          })),
          (this.view = new Af(i, {
            expanded: this.foldable_.value("expanded"),
            pickerLayout: o.pickerLayout,
            viewProps: this.viewProps
          })),
          this.view.textElement.appendChild(this.textC_.view.element),
          (h = this.view.buttonElement) === null ||
            h === void 0 ||
            h.addEventListener("blur", this.onPadButtonBlur_),
          (f = this.view.buttonElement) === null ||
            f === void 0 ||
            f.addEventListener("click", this.onPadButtonClick_),
          this.popC_
            ? (this.view.element.appendChild(this.popC_.view.element),
              this.popC_.view.element.appendChild(this.pickerC_.view.element),
              ts({
                primary: this.foldable_.value("expanded"),
                secondary: this.popC_.shows,
                forward: (x) => x.rawValue,
                backward: (x, I) => I.rawValue
              }))
            : this.view.pickerElement &&
              (this.view.pickerElement.appendChild(this.pickerC_.view.element),
              Nn(this.foldable_, this.view.pickerElement));
      }
      onPadButtonBlur_(i) {
        if (!this.popC_) return;
        const o = this.view.element,
          h = i.relatedTarget;
        (!h || !o.contains(h)) && (this.popC_.shows.rawValue = !1);
      }
      onPadButtonClick_() {
        this.foldable_.set("expanded", !this.foldable_.get("expanded")),
          this.foldable_.get("expanded") &&
            this.pickerC_.view.allFocusableElements[0].focus();
      }
      onPopupChildBlur_(i) {
        if (!this.popC_) return;
        const o = this.popC_.view.element,
          h = ia(i);
        (h && o.contains(h)) ||
          (h && h === this.view.buttonElement && !Vn(o.ownerDocument)) ||
          (this.popC_.shows.rawValue = !1);
      }
      onPopupChildKeydown_(i) {
        this.popC_
          ? i.key === "Escape" && (this.popC_.shows.rawValue = !1)
          : this.view.pickerElement &&
            i.key === "Escape" &&
            this.view.buttonElement.focus();
      }
    }
    class wi {
      constructor(i = 0, o = 0, h = 0) {
        (this.x = i), (this.y = o), (this.z = h);
      }
      getComponents() {
        return [this.x, this.y, this.z];
      }
      static isObject(i) {
        if (_(i)) return !1;
        const o = i.x,
          h = i.y,
          f = i.z;
        return !(
          typeof o != "number" ||
          typeof h != "number" ||
          typeof f != "number"
        );
      }
      static equals(i, o) {
        return i.x === o.x && i.y === o.y && i.z === o.z;
      }
      toObject() {
        return { x: this.x, y: this.y, z: this.z };
      }
    }
    const hl = {
      toComponents: (a) => a.getComponents(),
      fromComponents: (a) => new wi(...a)
    };
    function If(a) {
      return wi.isObject(a) ? new wi(a.x, a.y, a.z) : new wi();
    }
    function Bf(a, i) {
      a.writeProperty("x", i.x),
        a.writeProperty("y", i.y),
        a.writeProperty("z", i.z);
    }
    function Vf(a, i) {
      return new Ce({
        assembly: hl,
        components: [
          he("x" in a ? a.x : void 0, i.x),
          he("y" in a ? a.y : void 0, i.y),
          he("z" in a ? a.z : void 0, i.z)
        ]
      });
    }
    function mr(a, i) {
      return {
        baseStep: _i(i),
        constraint: i,
        textProps: N.fromObject({
          draggingScale: vi(i, a),
          formatter: yt(Js(i, a))
        })
      };
    }
    const Nf = {
      id: "input-point3d",
      type: "input",
      accept: (a, i) => {
        if (!wi.isObject(a)) return null;
        const o = W,
          h = q(i, {
            x: o.optional.custom(ye),
            y: o.optional.custom(ye),
            z: o.optional.custom(ye)
          });
        return h ? { initialValue: a, params: h } : null;
      },
      binding: {
        reader: (a) => If,
        constraint: (a) => Vf(a.params, a.initialValue),
        equals: wi.equals,
        writer: (a) => Bf
      },
      controller: (a) => {
        const i = a.value,
          o = a.constraint;
        if (!(o instanceof Ce)) throw v.shouldNeverHappen();
        return new fr(a.document, {
          assembly: hl,
          axes: [
            mr(i.rawValue.x, o.components[0]),
            mr(i.rawValue.y, o.components[1]),
            mr(i.rawValue.z, o.components[2])
          ],
          parser: ae,
          value: i,
          viewProps: a.viewProps
        });
      }
    };
    class yi {
      constructor(i = 0, o = 0, h = 0, f = 0) {
        (this.x = i), (this.y = o), (this.z = h), (this.w = f);
      }
      getComponents() {
        return [this.x, this.y, this.z, this.w];
      }
      static isObject(i) {
        if (_(i)) return !1;
        const o = i.x,
          h = i.y,
          f = i.z,
          b = i.w;
        return !(
          typeof o != "number" ||
          typeof h != "number" ||
          typeof f != "number" ||
          typeof b != "number"
        );
      }
      static equals(i, o) {
        return i.x === o.x && i.y === o.y && i.z === o.z && i.w === o.w;
      }
      toObject() {
        return { x: this.x, y: this.y, z: this.z, w: this.w };
      }
    }
    const ul = {
      toComponents: (a) => a.getComponents(),
      fromComponents: (a) => new yi(...a)
    };
    function zf(a) {
      return yi.isObject(a) ? new yi(a.x, a.y, a.z, a.w) : new yi();
    }
    function Hf(a, i) {
      a.writeProperty("x", i.x),
        a.writeProperty("y", i.y),
        a.writeProperty("z", i.z),
        a.writeProperty("w", i.w);
    }
    function Uf(a, i) {
      return new Ce({
        assembly: ul,
        components: [
          he("x" in a ? a.x : void 0, i.x),
          he("y" in a ? a.y : void 0, i.y),
          he("z" in a ? a.z : void 0, i.z),
          he("w" in a ? a.w : void 0, i.w)
        ]
      });
    }
    function Kf(a, i) {
      return {
        baseStep: _i(i),
        constraint: i,
        textProps: N.fromObject({
          draggingScale: vi(i, a),
          formatter: yt(Js(i, a))
        })
      };
    }
    const jf = {
      id: "input-point4d",
      type: "input",
      accept: (a, i) => {
        if (!yi.isObject(a)) return null;
        const o = W,
          h = q(i, {
            x: o.optional.custom(ye),
            y: o.optional.custom(ye),
            z: o.optional.custom(ye),
            w: o.optional.custom(ye)
          });
        return h ? { initialValue: a, params: h } : null;
      },
      binding: {
        reader: (a) => zf,
        constraint: (a) => Uf(a.params, a.initialValue),
        equals: yi.equals,
        writer: (a) => Hf
      },
      controller: (a) => {
        const i = a.value,
          o = a.constraint;
        if (!(o instanceof Ce)) throw v.shouldNeverHappen();
        return new fr(a.document, {
          assembly: ul,
          axes: i.rawValue
            .getComponents()
            .map((h, f) => Kf(h, o.components[f])),
          parser: ae,
          value: i,
          viewProps: a.viewProps
        });
      }
    };
    function $f(a) {
      const i = [],
        o = ir(a.options);
      return o && i.push(o), new Yi(i);
    }
    const qf = {
        id: "input-string",
        type: "input",
        accept: (a, i) => {
          if (typeof a != "string") return null;
          const h = q(i, { options: W.optional.custom(Xs) });
          return h ? { initialValue: a, params: h } : null;
        },
        binding: {
          reader: (a) => Pa,
          constraint: (a) => $f(a.params),
          writer: (a) => ss
        },
        controller: (a) => {
          const i = a.document,
            o = a.value,
            h = a.constraint,
            f = h && oe(h, Xi);
          return f
            ? new Ji(i, {
                props: new N({ options: f.values.value("options") }),
                value: o,
                viewProps: a.viewProps
              })
            : new Ws(i, {
                parser: (b) => b,
                props: N.fromObject({ formatter: Jn }),
                value: o,
                viewProps: a.viewProps
              });
        }
      },
      rs = { monitor: { defaultInterval: 200, defaultLineCount: 3 } },
      cl = k("mll");
    class Gf {
      constructor(i, o) {
        (this.onValueUpdate_ = this.onValueUpdate_.bind(this)),
          (this.formatter_ = o.formatter),
          (this.element = i.createElement("div")),
          this.element.classList.add(cl()),
          o.viewProps.bindClassModifiers(this.element);
        const h = i.createElement("textarea");
        h.classList.add(cl("i")),
          (h.style.height = `calc(var(--bld-us) * ${o.lineCount})`),
          (h.readOnly = !0),
          o.viewProps.bindDisabled(h),
          this.element.appendChild(h),
          (this.textareaElem_ = h),
          o.value.emitter.on("change", this.onValueUpdate_),
          (this.value = o.value),
          this.update_();
      }
      update_() {
        const i = this.textareaElem_,
          o = i.scrollTop === i.scrollHeight - i.clientHeight,
          h = [];
        this.value.rawValue.forEach((f) => {
          f !== void 0 && h.push(this.formatter_(f));
        }),
          (i.textContent = h.join(`
`)),
          o && (i.scrollTop = i.scrollHeight);
      }
      onValueUpdate_() {
        this.update_();
      }
    }
    class _r {
      constructor(i, o) {
        (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.view = new Gf(i, {
            formatter: o.formatter,
            lineCount: o.lineCount,
            value: this.value,
            viewProps: this.viewProps
          }));
      }
    }
    const dl = k("sgl");
    class Wf {
      constructor(i, o) {
        (this.onValueUpdate_ = this.onValueUpdate_.bind(this)),
          (this.formatter_ = o.formatter),
          (this.element = i.createElement("div")),
          this.element.classList.add(dl()),
          o.viewProps.bindClassModifiers(this.element);
        const h = i.createElement("input");
        h.classList.add(dl("i")),
          (h.readOnly = !0),
          (h.type = "text"),
          o.viewProps.bindDisabled(h),
          this.element.appendChild(h),
          (this.inputElement = h),
          o.value.emitter.on("change", this.onValueUpdate_),
          (this.value = o.value),
          this.update_();
      }
      update_() {
        const i = this.value.rawValue,
          o = i[i.length - 1];
        this.inputElement.value = o !== void 0 ? this.formatter_(o) : "";
      }
      onValueUpdate_() {
        this.update_();
      }
    }
    class vr {
      constructor(i, o) {
        (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.view = new Wf(i, {
            formatter: o.formatter,
            value: this.value,
            viewProps: this.viewProps
          }));
      }
    }
    const Yf = {
        id: "monitor-bool",
        type: "monitor",
        accept: (a, i) => {
          if (typeof a != "boolean") return null;
          const h = q(i, { lineCount: W.optional.number });
          return h ? { initialValue: a, params: h } : null;
        },
        binding: { reader: (a) => ya },
        controller: (a) => {
          var i;
          return a.value.rawValue.length === 1
            ? new vr(a.document, {
                formatter: Da,
                value: a.value,
                viewProps: a.viewProps
              })
            : new _r(a.document, {
                formatter: Da,
                lineCount:
                  (i = a.params.lineCount) !== null && i !== void 0
                    ? i
                    : rs.monitor.defaultLineCount,
                value: a.value,
                viewProps: a.viewProps
              });
        }
      },
      Ee = k("grl");
    class Xf {
      constructor(i, o) {
        (this.onCursorChange_ = this.onCursorChange_.bind(this)),
          (this.onValueUpdate_ = this.onValueUpdate_.bind(this)),
          (this.element = i.createElement("div")),
          this.element.classList.add(Ee()),
          o.viewProps.bindClassModifiers(this.element),
          (this.formatter_ = o.formatter),
          (this.props_ = o.props),
          (this.cursor_ = o.cursor),
          this.cursor_.emitter.on("change", this.onCursorChange_);
        const h = i.createElementNS(Zt, "svg");
        h.classList.add(Ee("g")),
          (h.style.height = `calc(var(--bld-us) * ${o.lineCount})`),
          this.element.appendChild(h),
          (this.svgElem_ = h);
        const f = i.createElementNS(Zt, "polyline");
        this.svgElem_.appendChild(f), (this.lineElem_ = f);
        const b = i.createElement("div");
        b.classList.add(Ee("t"), k("tt")()),
          this.element.appendChild(b),
          (this.tooltipElem_ = b),
          o.value.emitter.on("change", this.onValueUpdate_),
          (this.value = o.value),
          this.update_();
      }
      get graphElement() {
        return this.svgElem_;
      }
      update_() {
        const i = this.svgElem_.getBoundingClientRect(),
          o = this.value.rawValue.length - 1,
          h = this.props_.get("minValue"),
          f = this.props_.get("maxValue"),
          b = [];
        this.value.rawValue.forEach((nt, rt) => {
          if (nt === void 0) return;
          const Je = ht(rt, 0, o, 0, i.width),
            os = ht(nt, h, f, i.height, 0);
          b.push([Je, os].join(","));
        }),
          this.lineElem_.setAttributeNS(null, "points", b.join(" "));
        const x = this.tooltipElem_,
          I = this.value.rawValue[this.cursor_.rawValue];
        if (I === void 0) {
          x.classList.remove(Ee("t", "a"));
          return;
        }
        const Y = ht(this.cursor_.rawValue, 0, o, 0, i.width),
          J = ht(I, h, f, i.height, 0);
        (x.style.left = `${Y}px`),
          (x.style.top = `${J}px`),
          (x.textContent = `${this.formatter_(I)}`),
          x.classList.contains(Ee("t", "a")) ||
            (x.classList.add(Ee("t", "a"), Ee("t", "in")),
            Ks(x),
            x.classList.remove(Ee("t", "in")));
      }
      onValueUpdate_() {
        this.update_();
      }
      onCursorChange_() {
        this.update_();
      }
    }
    class Jf {
      constructor(i, o) {
        if (
          ((this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this)),
          (this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this)),
          (this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this)),
          (this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this)),
          (this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this)),
          (this.props_ = o.props),
          (this.value = o.value),
          (this.viewProps = o.viewProps),
          (this.cursor_ = U(-1)),
          (this.view = new Xf(i, {
            cursor: this.cursor_,
            formatter: o.formatter,
            lineCount: o.lineCount,
            props: this.props_,
            value: this.value,
            viewProps: this.viewProps
          })),
          !Vn(i))
        )
          this.view.element.addEventListener(
            "mousemove",
            this.onGraphMouseMove_
          ),
            this.view.element.addEventListener(
              "mouseleave",
              this.onGraphMouseLeave_
            );
        else {
          const h = new qe(this.view.element);
          h.emitter.on("down", this.onGraphPointerDown_),
            h.emitter.on("move", this.onGraphPointerMove_),
            h.emitter.on("up", this.onGraphPointerUp_);
        }
      }
      onGraphMouseLeave_() {
        this.cursor_.rawValue = -1;
      }
      onGraphMouseMove_(i) {
        const o = this.view.element.getBoundingClientRect();
        this.cursor_.rawValue = Math.floor(
          ht(i.offsetX, 0, o.width, 0, this.value.rawValue.length)
        );
      }
      onGraphPointerDown_(i) {
        this.onGraphPointerMove_(i);
      }
      onGraphPointerMove_(i) {
        if (!i.data.point) {
          this.cursor_.rawValue = -1;
          return;
        }
        this.cursor_.rawValue = Math.floor(
          ht(
            i.data.point.x,
            0,
            i.data.bounds.width,
            0,
            this.value.rawValue.length
          )
        );
      }
      onGraphPointerUp_() {
        this.cursor_.rawValue = -1;
      }
    }
    function gr(a) {
      return "format" in a && !_(a.format) ? a.format : yt(2);
    }
    function Zf(a) {
      var i;
      return a.value.rawValue.length === 1
        ? new vr(a.document, {
            formatter: gr(a.params),
            value: a.value,
            viewProps: a.viewProps
          })
        : new _r(a.document, {
            formatter: gr(a.params),
            lineCount:
              (i = a.params.lineCount) !== null && i !== void 0
                ? i
                : rs.monitor.defaultLineCount,
            value: a.value,
            viewProps: a.viewProps
          });
    }
    function Qf(a) {
      var i, o, h;
      return new Jf(a.document, {
        formatter: gr(a.params),
        lineCount:
          (i = a.params.lineCount) !== null && i !== void 0
            ? i
            : rs.monitor.defaultLineCount,
        props: N.fromObject({
          maxValue:
            (o = "max" in a.params ? a.params.max : null) !== null &&
            o !== void 0
              ? o
              : 100,
          minValue:
            (h = "min" in a.params ? a.params.min : null) !== null &&
            h !== void 0
              ? h
              : 0
        }),
        value: a.value,
        viewProps: a.viewProps
      });
    }
    function pl(a) {
      return "view" in a && a.view === "graph";
    }
    const tm = {
        id: "monitor-number",
        type: "monitor",
        accept: (a, i) => {
          if (typeof a != "number") return null;
          const o = W,
            h = q(i, {
              format: o.optional.function,
              lineCount: o.optional.number,
              max: o.optional.number,
              min: o.optional.number,
              view: o.optional.string
            });
          return h ? { initialValue: a, params: h } : null;
        },
        binding: {
          defaultBufferSize: (a) => (pl(a) ? 64 : 1),
          reader: (a) => Ea
        },
        controller: (a) => (pl(a.params) ? Qf(a) : Zf(a))
      },
      em = {
        id: "monitor-string",
        type: "monitor",
        accept: (a, i) => {
          if (typeof a != "string") return null;
          const o = W,
            h = q(i, {
              lineCount: o.optional.number,
              multiline: o.optional.boolean
            });
          return h ? { initialValue: a, params: h } : null;
        },
        binding: { reader: (a) => Pa },
        controller: (a) => {
          var i;
          const o = a.value;
          return o.rawValue.length > 1 ||
            ("multiline" in a.params && a.params.multiline)
            ? new _r(a.document, {
                formatter: Jn,
                lineCount:
                  (i = a.params.lineCount) !== null && i !== void 0
                    ? i
                    : rs.monitor.defaultLineCount,
                value: o,
                viewProps: a.viewProps
              })
            : new vr(a.document, {
                formatter: Jn,
                value: o,
                viewProps: a.viewProps
              });
        }
      };
    function im(a, i) {
      var o;
      const h = a.accept(i.target.read(), i.params);
      if (_(h)) return null;
      const f = W,
        b = {
          target: i.target,
          initialValue: h.initialValue,
          params: h.params
        },
        x = a.binding.reader(b),
        I = a.binding.constraint ? a.binding.constraint(b) : void 0,
        Y = U(x(h.initialValue), { constraint: I, equals: a.binding.equals }),
        J = new Pd({
          reader: x,
          target: i.target,
          value: Y,
          writer: a.binding.writer(b)
        }),
        nt = f.optional.boolean(i.params.disabled).value,
        rt = f.optional.boolean(i.params.hidden).value,
        Je = a.controller({
          constraint: I,
          document: i.document,
          initialValue: h.initialValue,
          params: h.params,
          value: J.value,
          viewProps: re.create({ disabled: nt, hidden: rt })
        });
      return new Qt(i.document, {
        binding: J,
        blade: Ki(),
        props: N.fromObject({
          label:
            "label" in i.params
              ? (o = f.optional.string(i.params.label).value) !== null &&
                o !== void 0
                ? o
                : null
              : i.target.key
        }),
        valueController: Je
      });
    }
    function sm(a, i) {
      return i === 0
        ? new Sd()
        : new Ed(
            a,
            i !== null && i !== void 0 ? i : rs.monitor.defaultInterval
          );
    }
    function nm(a, i) {
      var o, h, f;
      const b = W,
        x = a.accept(i.target.read(), i.params);
      if (_(x)) return null;
      const I = {
          target: i.target,
          initialValue: x.initialValue,
          params: x.params
        },
        Y = a.binding.reader(I),
        J =
          (h =
            (o = b.optional.number(i.params.bufferSize).value) !== null &&
            o !== void 0
              ? o
              : a.binding.defaultBufferSize &&
                a.binding.defaultBufferSize(x.params)) !== null && h !== void 0
            ? h
            : 1,
        nt = b.optional.number(i.params.interval).value,
        rt = new Td({
          reader: Y,
          target: i.target,
          ticker: sm(i.document, nt),
          value: kd(J)
        }),
        Je = b.optional.boolean(i.params.disabled).value,
        os = b.optional.boolean(i.params.hidden).value,
        as = a.controller({
          document: i.document,
          params: x.params,
          value: rt.value,
          viewProps: re.create({ disabled: Je, hidden: os })
        });
      return new we(i.document, {
        binding: rt,
        blade: Ki(),
        props: N.fromObject({
          label:
            "label" in i.params
              ? (f = b.optional.string(i.params.label).value) !== null &&
                f !== void 0
                ? f
                : null
              : i.target.key
        }),
        valueController: as
      });
    }
    class rm {
      constructor() {
        this.pluginsMap_ = { blades: [], inputs: [], monitors: [] };
      }
      getAll() {
        return [
          ...this.pluginsMap_.blades,
          ...this.pluginsMap_.inputs,
          ...this.pluginsMap_.monitors
        ];
      }
      register(i) {
        i.type === "blade"
          ? this.pluginsMap_.blades.unshift(i)
          : i.type === "input"
          ? this.pluginsMap_.inputs.unshift(i)
          : i.type === "monitor" && this.pluginsMap_.monitors.unshift(i);
      }
      createInput(i, o, h) {
        const f = o.read();
        if (_(f))
          throw new v({
            context: { key: o.key },
            type: "nomatchingcontroller"
          });
        const b = this.pluginsMap_.inputs.reduce(
          (x, I) =>
            x !== null && x !== void 0
              ? x
              : im(I, { document: i, target: o, params: h }),
          null
        );
        if (b) return b;
        throw new v({ context: { key: o.key }, type: "nomatchingcontroller" });
      }
      createMonitor(i, o, h) {
        const f = this.pluginsMap_.monitors.reduce(
          (b, x) =>
            b !== null && b !== void 0
              ? b
              : nm(x, { document: i, params: h, target: o }),
          null
        );
        if (f) return f;
        throw new v({ context: { key: o.key }, type: "nomatchingcontroller" });
      }
      createBlade(i, o) {
        const h = this.pluginsMap_.blades.reduce(
          (f, b) =>
            f !== null && f !== void 0 ? f : xd(b, { document: i, params: o }),
          null
        );
        if (!h) throw new v({ type: "nomatchingview", context: { params: o } });
        return h;
      }
      createBladeApi(i) {
        if (i instanceof Qt) return new Un(i);
        if (i instanceof we) return new Kn(i);
        if (i instanceof qi) return new qs(i, this);
        const o = this.pluginsMap_.blades.reduce(
          (h, f) =>
            h !== null && h !== void 0
              ? h
              : f.api({ controller: i, pool: this }),
          null
        );
        if (!o) throw v.shouldNeverHappen();
        return o;
      }
    }
    function om() {
      const a = new rm();
      return (
        [
          dm,
          Nf,
          jf,
          qf,
          Tf,
          Ef,
          Sf,
          yf,
          bp,
          Yf,
          em,
          tm,
          sd,
          vd,
          bd,
          ma
        ].forEach((i) => {
          a.register(i);
        }),
        a
      );
    }
    function am(a) {
      return xe.isObject(a) ? new xe(a.x, a.y) : new xe();
    }
    function lm(a, i) {
      a.writeProperty("x", i.x), a.writeProperty("y", i.y);
    }
    function he(a, i) {
      if (!a) return;
      const o = [],
        h = rl(a, i);
      h && o.push(h);
      const f = ol(a);
      return f && o.push(f), new Yi(o);
    }
    function hm(a, i) {
      return new Ce({
        assembly: al,
        components: [
          he("x" in a ? a.x : void 0, i.x),
          he("y" in a ? a.y : void 0, i.y)
        ]
      });
    }
    function fl(a, i) {
      const [o, h] = a ? Lf(a) : [];
      if (!_(o) || !_(h))
        return Math.max(
          Math.abs(o !== null && o !== void 0 ? o : 0),
          Math.abs(h !== null && h !== void 0 ? h : 0)
        );
      const f = _i(a);
      return Math.max(Math.abs(f) * 10, Math.abs(i) * 10);
    }
    function um(a, i) {
      const o = i instanceof Ce ? i.components[0] : void 0,
        h = i instanceof Ce ? i.components[1] : void 0,
        f = fl(o, a.x),
        b = fl(h, a.y);
      return Math.max(f, b);
    }
    function ml(a, i) {
      return {
        baseStep: _i(i),
        constraint: i,
        textProps: N.fromObject({
          draggingScale: vi(i, a),
          formatter: yt(Js(i, a))
        })
      };
    }
    function cm(a) {
      if (!("y" in a)) return !1;
      const i = a.y;
      return i && "inverted" in i ? !!i.inverted : !1;
    }
    const dm = {
      id: "input-point2d",
      type: "input",
      accept: (a, i) => {
        if (!xe.isObject(a)) return null;
        const o = W,
          h = q(i, {
            expanded: o.optional.boolean,
            picker: o.optional.custom(Ta),
            x: o.optional.custom(ye),
            y: o.optional.object({
              inverted: o.optional.boolean,
              max: o.optional.number,
              min: o.optional.number,
              step: o.optional.number
            })
          });
        return h ? { initialValue: a, params: h } : null;
      },
      binding: {
        reader: (a) => am,
        constraint: (a) => hm(a.params, a.initialValue),
        equals: xe.equals,
        writer: (a) => lm
      },
      controller: (a) => {
        const i = a.document,
          o = a.value,
          h = a.constraint;
        if (!(h instanceof Ce)) throw v.shouldNeverHappen();
        const f = "expanded" in a.params ? a.params.expanded : void 0,
          b = "picker" in a.params ? a.params.picker : void 0;
        return new Rf(i, {
          axes: [
            ml(o.rawValue.x, h.components[0]),
            ml(o.rawValue.y, h.components[1])
          ],
          expanded: f !== null && f !== void 0 ? f : !1,
          invertsY: cm(a.params),
          maxValue: um(o.rawValue, h),
          parser: ae,
          pickerLayout: b !== null && b !== void 0 ? b : "popup",
          value: o,
          viewProps: a.viewProps
        });
      }
    };
    class _l extends r {
      constructor(i) {
        super(i),
          (this.emitter_ = new C()),
          this.controller_.valueController.value.emitter.on("change", (o) => {
            this.emitter_.emit("change", { event: new u(this, o.rawValue) });
          });
      }
      get label() {
        return this.controller_.props.get("label");
      }
      set label(i) {
        this.controller_.props.set("label", i);
      }
      get options() {
        return this.controller_.valueController.props.get("options");
      }
      set options(i) {
        this.controller_.valueController.props.set("options", i);
      }
      get value() {
        return this.controller_.valueController.value.rawValue;
      }
      set value(i) {
        this.controller_.valueController.value.rawValue = i;
      }
      on(i, o) {
        const h = o.bind(this);
        return (
          this.emitter_.on(i, (f) => {
            h(f.event);
          }),
          this
        );
      }
    }
    class vl extends r {
      constructor(i) {
        super(i),
          (this.emitter_ = new C()),
          this.controller_.valueController.value.emitter.on("change", (o) => {
            this.emitter_.emit("change", { event: new u(this, o.rawValue) });
          });
      }
      get label() {
        return this.controller_.props.get("label");
      }
      set label(i) {
        this.controller_.props.set("label", i);
      }
      get maxValue() {
        return this.controller_.valueController.sliderController.props.get(
          "maxValue"
        );
      }
      set maxValue(i) {
        this.controller_.valueController.sliderController.props.set(
          "maxValue",
          i
        );
      }
      get minValue() {
        return this.controller_.valueController.sliderController.props.get(
          "minValue"
        );
      }
      set minValue(i) {
        this.controller_.valueController.sliderController.props.set(
          "minValue",
          i
        );
      }
      get value() {
        return this.controller_.valueController.value.rawValue;
      }
      set value(i) {
        this.controller_.valueController.value.rawValue = i;
      }
      on(i, o) {
        const h = o.bind(this);
        return (
          this.emitter_.on(i, (f) => {
            h(f.event);
          }),
          this
        );
      }
    }
    class gl extends r {
      constructor(i) {
        super(i),
          (this.emitter_ = new C()),
          this.controller_.valueController.value.emitter.on("change", (o) => {
            this.emitter_.emit("change", { event: new u(this, o.rawValue) });
          });
      }
      get label() {
        return this.controller_.props.get("label");
      }
      set label(i) {
        this.controller_.props.set("label", i);
      }
      get formatter() {
        return this.controller_.valueController.props.get("formatter");
      }
      set formatter(i) {
        this.controller_.valueController.props.set("formatter", i);
      }
      get value() {
        return this.controller_.valueController.value.rawValue;
      }
      set value(i) {
        this.controller_.valueController.value.rawValue = i;
      }
      on(i, o) {
        const h = o.bind(this);
        return (
          this.emitter_.on(i, (f) => {
            h(f.event);
          }),
          this
        );
      }
    }
    const pm = (function () {
      return {
        id: "list",
        type: "blade",
        accept(a) {
          const i = W,
            o = q(a, {
              options: i.required.custom(Xs),
              value: i.required.raw,
              view: i.required.constant("list"),
              label: i.optional.string
            });
          return o ? { params: o } : null;
        },
        controller(a) {
          const i = new Xi(Aa(a.params.options)),
            o = U(a.params.value, { constraint: i }),
            h = new Ji(a.document, {
              props: new N({ options: i.values.value("options") }),
              value: o,
              viewProps: a.viewProps
            });
          return new fi(a.document, {
            blade: a.blade,
            props: N.fromObject({ label: a.params.label }),
            valueController: h
          });
        },
        api(a) {
          return !(a.controller instanceof fi) ||
            !(a.controller.valueController instanceof Ji)
            ? null
            : new _l(a.controller);
        }
      };
    })();
    function fm(a) {
      return a.reduce(
        (i, o) => Object.assign(i, { [o.presetKey]: o.read() }),
        {}
      );
    }
    function mm(a, i) {
      a.forEach((o) => {
        const h = i[o.target.presetKey];
        h !== void 0 && o.writer(o.target, o.reader(h));
      });
    }
    class _m extends jn {
      constructor(i, o) {
        super(i, o);
      }
      get element() {
        return this.controller_.view.element;
      }
      importPreset(i) {
        const o = this.controller_.rackController.rack
          .find(Qt)
          .map((h) => h.binding);
        mm(o, i), this.refresh();
      }
      exportPreset() {
        const i = this.controller_.rackController.rack
          .find(Qt)
          .map((o) => o.binding.target);
        return fm(i);
      }
      refresh() {
        this.controller_.rackController.rack.find(Qt).forEach((i) => {
          i.binding.read();
        }),
          this.controller_.rackController.rack.find(we).forEach((i) => {
            i.binding.read();
          });
      }
    }
    class vm extends Gn {
      constructor(i, o) {
        super(i, {
          expanded: o.expanded,
          blade: o.blade,
          props: o.props,
          root: !0,
          viewProps: o.viewProps
        });
      }
    }
    const gm = {
        id: "slider",
        type: "blade",
        accept(a) {
          const i = W,
            o = q(a, {
              max: i.required.number,
              min: i.required.number,
              view: i.required.constant("slider"),
              format: i.optional.function,
              label: i.optional.string,
              value: i.optional.number
            });
          return o ? { params: o } : null;
        },
        controller(a) {
          var i, o;
          const h = (i = a.params.value) !== null && i !== void 0 ? i : 0,
            f = new mi({ max: a.params.max, min: a.params.min }),
            b = new er(a.document, {
              baseStep: 1,
              parser: ae,
              sliderProps: new N({
                maxValue: f.values.value("max"),
                minValue: f.values.value("min")
              }),
              textProps: N.fromObject({
                draggingScale: vi(void 0, h),
                formatter:
                  (o = a.params.format) !== null && o !== void 0 ? o : lp
              }),
              value: U(h, { constraint: f }),
              viewProps: a.viewProps
            });
          return new fi(a.document, {
            blade: a.blade,
            props: N.fromObject({ label: a.params.label }),
            valueController: b
          });
        },
        api(a) {
          return !(a.controller instanceof fi) ||
            !(a.controller.valueController instanceof er)
            ? null
            : new vl(a.controller);
        }
      },
      bm = (function () {
        return {
          id: "text",
          type: "blade",
          accept(a) {
            const i = W,
              o = q(a, {
                parse: i.required.function,
                value: i.required.raw,
                view: i.required.constant("text"),
                format: i.optional.function,
                label: i.optional.string
              });
            return o ? { params: o } : null;
          },
          controller(a) {
            var i;
            const o = new Ws(a.document, {
              parser: a.params.parse,
              props: N.fromObject({
                formatter:
                  (i = a.params.format) !== null && i !== void 0
                    ? i
                    : (h) => String(h)
              }),
              value: U(a.params.value),
              viewProps: a.viewProps
            });
            return new fi(a.document, {
              blade: a.blade,
              props: N.fromObject({ label: a.params.label }),
              valueController: o
            });
          },
          api(a) {
            return !(a.controller instanceof fi) ||
              !(a.controller.valueController instanceof Ws)
              ? null
              : new gl(a.controller);
          }
        };
      })();
    function wm(a) {
      const i = a.createElement("div");
      return i.classList.add(k("dfw")()), a.body && a.body.appendChild(i), i;
    }
    function bl(a, i, o) {
      if (a.querySelector(`style[data-tp-style=${i}]`)) return;
      const h = a.createElement("style");
      (h.dataset.tpStyle = i), (h.textContent = o), a.head.appendChild(h);
    }
    class ym extends _m {
      constructor(i) {
        var o, h;
        const f = i !== null && i !== void 0 ? i : {},
          b = (o = f.document) !== null && o !== void 0 ? o : Zc(),
          x = om(),
          I = new vm(b, {
            expanded: f.expanded,
            blade: Ki(),
            props: N.fromObject({ title: f.title }),
            viewProps: re.create()
          });
        super(I, x),
          (this.pool_ = x),
          (this.containerElem_ =
            (h = f.container) !== null && h !== void 0 ? h : wm(b)),
          this.containerElem_.appendChild(this.element),
          (this.doc_ = b),
          (this.usesDefaultWrapper_ = !f.container),
          this.setUpDefaultPlugins_();
      }
      get document() {
        if (!this.doc_) throw v.alreadyDisposed();
        return this.doc_;
      }
      dispose() {
        const i = this.containerElem_;
        if (!i) throw v.alreadyDisposed();
        if (this.usesDefaultWrapper_) {
          const o = i.parentElement;
          o && o.removeChild(i);
        }
        (this.containerElem_ = null), (this.doc_ = null), super.dispose();
      }
      registerPlugin(i) {
        ("plugin" in i ? [i.plugin] : "plugins" in i ? i.plugins : []).forEach(
          (h) => {
            this.pool_.register(h), this.embedPluginStyle_(h);
          }
        );
      }
      embedPluginStyle_(i) {
        i.css && bl(this.document, `plugin-${i.id}`, i.css);
      }
      setUpDefaultPlugins_() {
        bl(
          this.document,
          "default",
          '.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'
        ),
          this.pool_.getAll().forEach((i) => {
            this.embedPluginStyle_(i);
          }),
          this.registerPlugin({ plugins: [gm, pm, ma, bm] });
      }
    }
    const Dm = new s("3.1.10");
    (e.BladeApi = r),
      (e.ButtonApi = S),
      (e.FolderApi = jn),
      (e.InputBindingApi = Un),
      (e.ListApi = _l),
      (e.MonitorBindingApi = Kn),
      (e.Pane = ym),
      (e.SeparatorApi = aa),
      (e.SliderApi = vl),
      (e.TabApi = da),
      (e.TabPageApi = ca),
      (e.TextApi = gl),
      (e.TpChangeEvent = u),
      (e.VERSION = Dm),
      Object.defineProperty(e, "__esModule", { value: !0 });
  });
})(Qr, Qr.exports);
var iv = Qr.exports;
function Ie(n) {
  const t = n.changedTouches ? n.changedTouches[0] : n;
  return { x: t.clientX, y: t.clientY };
}
function sv(n, t = 200) {
  let e,
    s = 0;
  return function () {
    const r = performance.now() - s,
      l = () => {
        n.apply(this, arguments), (s = performance.now());
      };
    e || l(), e && clearTimeout(e), r > t ? l() : (e = setTimeout(l, t));
  };
}
function Fo(n, t = 200) {
  let e;
  return function (...s) {
    clearTimeout(e),
      (e = setTimeout(() => {
        n.apply(this, s);
      }, t));
  };
}
function nv(n) {
  document.readyState === "complete" ? n() : window.addEventListener("load", n);
}
function rv(n) {
  return new Promise((t) => {
    n.complete
      ? t(n)
      : n.addEventListener("load", () => {
          t(n);
        });
  });
}
function zw(n) {
  return new Promise((t) => {
    n.readyState === 4
      ? t({ srcElement: n, target: n })
      : n.addEventListener("loadeddata", t);
  });
}
function ov() {
  if (E.enablePane) {
    const n =
      E.pane || (E.pane = new iv.Pane({ title: "Control", expanded: !0 }));
    (n.hidden = !1), E.isHiddenPane && Nl(!0);
    const t = n.containerElem_.children[0];
    t.addEventListener("wheel", (e) => {
      e.stopPropagation();
    }),
      t.addEventListener("touchmove", (e) => {
        e.stopPropagation();
      }),
      document.addEventListener("keydown", ({ key: e }) => {
        e === "h" && (E.isHiddenPane ? av() : Nl());
      }),
      n.addButton({ title: "Refresh" }).on("click", () => {
        lv();
      });
  }
}
function av() {
  var _E$pane;
  E.enablePane &&
    E.isHiddenPane &&
    ((E.isHiddenPane = !1),
    ((_E$pane = E.pane) === null || _E$pane === void 0
      ? void 0
      : _E$pane.element.parentElement) &&
      (E.pane.element.parentElement.style.visibility = ""));
}
function Nl(n = !1) {
  var _E$pane2;
  E.enablePane &&
    ((!n && E.isHiddenPane) ||
      ((E.isHiddenPane = !0),
      ((_E$pane2 = E.pane) === null || _E$pane2 === void 0
        ? void 0
        : _E$pane2.element.parentElement) &&
        (E.pane.element.parentElement.style.visibility = "hidden")));
}
const lv = Fo(() => {
    E.enablePane && E.pane.refresh();
  }),
  ge = navigator.userAgent,
  hv = navigator.platform,
  uv = /Edg/.test(ge),
  cv = /Chrome/.test(ge),
  dv = /CriOS/.test(ge),
  to = !uv && !cv ? /Safari/.test(ge) : !1,
  Hw = /Win/.test(hv),
  Ro = /iPad/.test(ge) || (/Macintosh/.test(ge) && "ontouchend" in document),
  Eu = /iPhone|iPod/.test(ge) || Ro,
  Io = /Android/i.test(ge),
  fe = Eu || Io;
Ro || (Io && ge.match(/Android.+Mobile/));
let eo = !1;
try {
  const n = Object.defineProperty({}, "passive", {
    get() {
      eo = !0;
    }
  });
  window.addEventListener("testPassive", null, n),
    window.removeEventListener("testPassive", null, n);
} catch {
  eo = !1;
}
const Q = eo ? { passive: !0 } : !1,
  ks = (window._GLOBAL_.listenersScroll =
    window._GLOBAL_.listenersScroll || []);
let zl;
function pv(n, t = !1) {
  t &&
    setTimeout(() => {
      n(window.scrollY);
    }),
    ks.push(n);
}
function fv(n) {
  ks.some((t, e) => (t === n ? (ks.splice(e, 1), !0) : !1));
}
const mv = sv(() => {
    const { scrollY: n } = window;
    zl = ks.length;
    for (let t = 0; t < zl; t++) ks[t](n);
  }, 100),
  Pu = window.matchMedia(`screen and (max-width: ${E.breakpoint - 1}px)`),
  _v = window.matchMedia(
    `screen and (min-width: ${E.breakpoint}px) and (max-width: ${
      E.baseWidthMinPc - 1
    }px)`
  ),
  vv = window.matchMedia(
    `screen and (min-width: ${E.breakpoint}px) and (orientation: portrait)`
  ),
  gv = window.matchMedia("screen and (orientation: portrait)"),
  At = (window._GLOBAL_.media =
    window._GLOBAL_.media ||
    (() => {
      const n = {};
      return (
        Object.defineProperty(n, "isSp", { get: () => Pu.matches }),
        Object.defineProperty(n, "isTb", { get: () => _v.matches }),
        Object.defineProperty(n, "isTbPortrait", { get: () => vv.matches }),
        Object.defineProperty(n, "isPortrait", { get: () => gv.matches }),
        n
      );
    })());
function bv(n, t = () => {}, e = t) {
  const s = (r) => {
    r.matches ? t(r) : e(r);
  };
  n.addListener(s);
}
function wv(n, t) {
  bv(Pu, n, t);
}
const Ls = (window._GLOBAL_.listenersResize =
    window._GLOBAL_.listenersResize || []),
  Ms = (window._GLOBAL_.listenersResizeAlways =
    window._GLOBAL_.listenersResizeAlways || []),
  Ts = (window._GLOBAL_.listenersResetSize =
    window._GLOBAL_.listenersResetSize || []),
  As = (window._GLOBAL_.listenersOrientationchange =
    window._GLOBAL_.listenersOrientationchange || []);
function yv() {
  window.addEventListener("resize", () => {
    requestAnimationFrame(() => {
      ze();
    });
  }),
    window.addEventListener("orientationchange", () => {
      const n = window.orientation !== 0;
      for (let t = 0; t < As.length; t++) As[t](n);
    });
}
function ku(n, t = !1) {
  t &&
    requestAnimationFrame(() => {
      const e = He();
      n({ ...e, isForce: !1 });
    }),
    Ls.push(n);
}
function Lu(n) {
  Ls.some((t, e) => (t === n ? (Ls.splice(e, 1), !0) : !1));
}
function Mu(n, t = !1) {
  t &&
    requestAnimationFrame(() => {
      const e = He();
      n({ ...e, isForce: !1 });
    }),
    Ms.push(n);
}
function Tu(n) {
  Ms.some((t, e) => (t === n ? (Ms.splice(e, 1), !0) : !1));
}
function Au(n, t = !1) {
  t &&
    requestAnimationFrame(() => {
      const e = He();
      n({ ...e, isForce: !1 });
    }),
    Ts.push(n);
}
function Ou(n) {
  Ts.some((t, e) => (t === n ? (Ts.splice(e, 1), !0) : !1));
}
function Fu(n, t = !1) {
  t &&
    requestAnimationFrame(() => {
      const e = window.orientation !== 0;
      n(e);
    }),
    As.push(n);
}
function Ru(n) {
  As.some((t, e) => (t === n ? (As.splice(e, 1), !0) : !1));
}
const ze = Fo((n = !1) => {
  const { windowWidth: t, windowHeight: e } = He(),
    s = { windowWidth: t, windowHeight: e, isForce: n };
  Iu();
  for (let r = 0; r < Ms.length; r++) Ms[r](s);
  if (!(!n && fe && E.windowWidth === t)) {
    (E.windowWidth = t), Bu();
    for (let r = 0; r < Ts.length; r++) Ts[r](s);
    for (let r = 0; r < Ls.length; r++) Ls[r](s);
    mv();
  }
}, 100);
function He() {
  const n = (E.windowWidth = window.innerWidth),
    t = (E.windowHeight = window.innerHeight);
  return { windowWidth: n, windowHeight: t };
}
function Iu() {
  let n = 0;
  if (At.isSp) {
    if (dv) n = 68;
    else if (Eu && to) {
      const { width: t, height: e } = window.screen;
      t / e > 0.5 ? (n = 42) : (n = 100);
    } else Io ? (n = 72) : (n = 100);
  } else Ro && to && (n = 39);
  (E.statusBarHeight = n),
    document.documentElement.style.setProperty("--sbh", n + "px");
}
function Bu() {
  let n = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${n}px`);
}
const Dv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        emitResize: ze,
        getStatusBarHeight: Iu,
        getVh: Bu,
        getWindowSize: He,
        init: yv,
        offOrientationchange: Ru,
        offResetSize: Ou,
        offResize: Lu,
        offResizeAlways: Tu,
        onOrientationchange: Fu,
        onResetSize: Au,
        onResize: ku,
        onResizeAlways: Mu
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  z = (window._GLOBAL_.eventBus = window._GLOBAL_.eventBus || {
    _listeners: {},
    emit(n, ...t) {
      if (!this._listeners[n]) return;
      const e = this._listeners[n].slice();
      for (let s = 0; s < e.length; s++) e[s](...t);
    },
    on(n, t) {
      this._listeners[n] || (this._listeners[n] = []),
        this._listeners[n].push(t);
    },
    once(n, t) {
      this._listeners[n] || (this._listeners[n] = []);
      const e = (...s) => {
        this.off(n, e), t(...s);
      };
      this._listeners[n].push(e);
    },
    off(n, t) {
      const e = this._listeners[n];
      !e ||
        e.length === 0 ||
        (e.some((s, r) => (s === t ? (e.splice(r, 1), !0) : !1)),
        e.length === 0 && delete this._listeners[n]);
    }
  });
var Bo = { exports: {} };
function Vo() {}
Vo.prototype = {
  on: function (n, t, e) {
    var s = this.e || (this.e = {});
    return (s[n] || (s[n] = [])).push({ fn: t, ctx: e }), this;
  },
  once: function (n, t, e) {
    var s = this;
    function r() {
      s.off(n, r), t.apply(e, arguments);
    }
    return (r._ = t), this.on(n, r, e);
  },
  emit: function (n) {
    var t = [].slice.call(arguments, 1),
      e = ((this.e || (this.e = {}))[n] || []).slice(),
      s = 0,
      r = e.length;
    for (s; s < r; s++) e[s].fn.apply(e[s].ctx, t);
    return this;
  },
  off: function (n, t) {
    var e = this.e || (this.e = {}),
      s = e[n],
      r = [];
    if (s && t)
      for (var l = 0, u = s.length; l < u; l++)
        s[l].fn !== t && s[l].fn._ !== t && r.push(s[l]);
    return r.length ? (e[n] = r) : delete e[n], this;
  }
};
Bo.exports = Vo;
Bo.exports.TinyEmitter = Vo;
var Cv = Bo.exports;
const xv = vo(Cv);
class pn {
  constructor(t) {
    (this.wrap = document.querySelector("[data-router-wrapper]")),
      (this.properties = t),
      (this.Transition = t.transition
        ? new t.transition.class(this.wrap, t.transition.name)
        : null);
  }
  setup() {
    this.onEnter && this.onEnter(),
      this.onEnterCompleted && this.onEnterCompleted();
  }
  add() {
    this.wrap.insertAdjacentHTML("beforeend", this.properties.view.outerHTML);
  }
  update() {
    document.title = this.properties.page.title;
  }
  show(t) {
    return new Promise(async (e) => {
      this.update(),
        this.onEnter && this.onEnter(),
        this.Transition && (await this.Transition.show(t)),
        this.onEnterCompleted && this.onEnterCompleted(),
        e();
    });
  }
  hide(t) {
    return new Promise(async (e) => {
      this.onLeave && this.onLeave(),
        this.Transition && (await this.Transition.hide(t)),
        this.onLeaveCompleted && this.onLeaveCompleted(),
        e();
    });
  }
}
const Sv = new window.DOMParser();
class Vu {
  constructor(t, e) {
    (this.renderers = t), (this.transitions = e);
  }
  getOrigin(t) {
    const e = t.match(/(https?:\/\/[\w\-.]+)/);
    return e ? e[1].replace(/https?:\/\//, "") : null;
  }
  getPathname(t) {
    const e = t.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
    return e ? e[1] : "/";
  }
  getAnchor(t) {
    const e = t.match(/(#.*)$/);
    return e ? e[1] : null;
  }
  getParams(t) {
    const e = t.match(/\?([\w_\-.=&]+)/);
    if (!e) return null;
    const s = e[1].split("&"),
      r = {};
    for (let l = 0; l < s.length; l++) {
      const u = s[l].split("="),
        { 0: c } = u,
        { 1: d } = u;
      r[c] = d;
    }
    return r;
  }
  getDOM(t) {
    return typeof t == "string" ? Sv.parseFromString(t, "text/html") : t;
  }
  getView(t) {
    return t.querySelector("[data-router-view]");
  }
  getSlug(t) {
    return t.getAttribute("data-router-view");
  }
  getRenderer(t) {
    if (!this.renderers) return Promise.resolve(pn);
    if (t in this.renderers) {
      const e = this.renderers[t];
      return typeof e == "function" && !pn.isPrototypeOf(e)
        ? Promise.resolve(e()).then(({ default: s }) => s)
        : typeof e.then == "function"
        ? Promise.resolve(e).then(({ default: s }) => s)
        : Promise.resolve(e);
    }
    return Promise.resolve(pn);
  }
  getTransition(t) {
    return this.transitions
      ? t in this.transitions
        ? { class: this.transitions[t], name: t }
        : "default" in this.transitions
        ? { class: this.transitions.default, name: "default" }
        : null
      : null;
  }
  getProperties(t) {
    const e = this.getDOM(t),
      s = this.getView(e),
      r = this.getSlug(s),
      l = this.getRenderer(r, this.renderers),
      u = this.getTransition(r, this.transitions);
    return { page: e, view: s, slug: r, renderer: l, transition: u };
  }
  getLocation(t) {
    return {
      href: t,
      anchor: this.getAnchor(t),
      origin: this.getOrigin(t),
      params: this.getParams(t),
      pathname: this.getPathname(t)
    };
  }
}
class Ev extends xv {
  constructor({ renderers: t, transitions: e } = {}) {
    super(),
      (this.Helpers = new Vu(t, e)),
      (this.Transitions = e),
      (this.Contextual = !1),
      (this.location = this.Helpers.getLocation(window.location.href)),
      (this.properties = this.Helpers.getProperties(document.cloneNode(!0))),
      (this.popping = !1),
      (this.running = !1),
      (this.trigger = null),
      (this.direction = null),
      (this.historyCount = Number(sessionStorage.getItem("historyCount")) || 0),
      (this.prevHistoryCount = this.historyCount),
      (this.cache = new Map()),
      (this.cacheFetch = new Map()),
      (this.cacheIntersectionObserver = new Map()),
      setTimeout(() => {
        this.fetchPage(this.location.pathname);
      }, 500),
      this.properties.renderer.then((s) => {
        (this.From = new s(this.properties)), this.From.setup();
      }),
      (this._navigate = this.navigate.bind(this)),
      window.addEventListener("popstate", this.popState.bind(this)),
      (this.detach = this.attach(
        document.querySelectorAll(this.getSelectorLink())
      )),
      window.addEventListener("pagehide", () => {
        sessionStorage.setItem("historyCount", this.historyCount);
      });
  }
  attachAll(t = document) {
    const e = t.querySelectorAll(this.getSelectorLink()),
      s = this.attach(e);
    return { links: e, detach: s };
  }
  attach(t) {
    const e = [...t].map((s) => {
      s.addEventListener("click", this._navigate);
      const r = this.listenPrefetch(s);
      return () => {
        s.removeEventListener("click", this._navigate), r();
      };
    });
    return () => {
      e.forEach((s) => {
        s();
      });
    };
  }
  navigate(t) {
    if (!(t.metaKey || t.ctrlKey)) {
      t.preventDefault();
      const e = t.currentTarget.hasAttribute("data-transition")
        ? t.currentTarget.dataset.transition
        : !1;
      this.redirect(t.currentTarget.href, e, t.currentTarget);
    }
  }
  redirect(t, e = !1, s = "script") {
    if (((this.trigger = s), !this.running && t !== this.location.href)) {
      const r = this.Helpers.getLocation(t);
      (this.Contextual = !1),
        e &&
          ((this.Contextual = this.Transitions.contextual[e].prototype),
          (this.Contextual.name = e)),
        r.origin !== this.location.origin ||
        (r.anchor && r.pathname === this.location.pathname)
          ? (window.location.href = t)
          : ((this.location = r), this.beforeFetch());
    }
  }
  popState(t) {
    var _t$state, _t$state2;
    (this.trigger = "popstate"),
      ((_t$state = t.state) === null || _t$state === void 0
        ? void 0
        : _t$state.count) > this.historyCount
        ? (this.direction = "forward")
        : (this.direction = "back"),
      (this.historyCount =
        ((_t$state2 = t.state) === null || _t$state2 === void 0
          ? void 0
          : _t$state2.count) || 0),
      (this.Contextual = !1);
    const e = this.Helpers.getLocation(window.location.href);
    this.location.pathname !== e.pathname ||
    (!this.location.anchor && !e.anchor)
      ? ((this.popping = !0), (this.location = e), this.beforeFetch())
      : (this.location = e);
  }
  pushState() {
    this.popping ||
      window.history.pushState(
        { count: ++this.historyCount },
        "",
        this.location.href
      );
  }
  async fetch(t, e = !1) {
    if (this.cacheFetch.has(t)) return this.cacheFetch.get(t);
    {
      const s = await fetch(t, {
        mode: "same-origin",
        method: "GET",
        headers: { "X-Requested-With": "Highway" },
        credentials: "same-origin"
      });
      if (s.status >= 200 && s.status < 300)
        return this.cacheFetch.set(t, s), s;
      if (e) window.location.href = t;
      else return this.cacheFetch.set(t, null), null;
    }
  }
  async fetchPage(t, e = !1) {
    if (this.cache.has(t)) return this.cache.get(t);
    {
      const s = (async () => {
        const r = await this.fetch(t, e);
        if (!r) return this.cache.set(t, r), null;
        const l = this.Helpers.getProperties(await r.text());
        return this.cache.set(t, l), l;
      })();
      return this.cache.set(t, s), s;
    }
  }
  listenPrefetch(t) {
    if (this.cache.has(t.pathname)) return () => {};
    if ("routerDisablePrefetch" in t.dataset) {
      const e = () => {
        this.fetchPage(t.pathname);
      };
      return (
        t.addEventListener("mouseenter", e, { once: !0 }),
        () => {
          t.removeEventListener("mouseenter", e, { once: !0 });
        }
      );
    } else {
      const e = this.getIntersectionObserver();
      return (
        e.observe(t),
        () => {
          e.unobserve(t);
        }
      );
    }
  }
  getIntersectionObserver(t = 0) {
    let e;
    return (
      this.cacheIntersectionObserver.has(t)
        ? (e = this.cacheIntersectionObserver.get(t))
        : ((e = new IntersectionObserver(
            (s) => {
              s.forEach((r) => {
                if (r.isIntersecting) {
                  const { target: l } = r;
                  this.fetchPage(l.pathname), e.unobserve(l);
                }
              });
            },
            { threshold: t }
          )),
          this.cacheIntersectionObserver.set(t, e)),
      e
    );
  }
  async beforeFetch() {
    this.pushState(),
      (this.running = !0),
      this.emit("NAVIGATE_OUT", {
        from: {
          page: this.From.properties.page,
          view: this.From.properties.view
        },
        trigger: this.trigger,
        direction: this.direction,
        historyCount: this.historyCount,
        prevHistoryCount: this.prevHistoryCount,
        location: this.location
      });
    const t = {
        trigger: this.trigger,
        direction: this.direction,
        historyCount: this.historyCount,
        prevHistoryCount: this.prevHistoryCount,
        contextual: this.Contextual
      },
      e = await Promise.all([
        this.fetchPage(this.location.pathname, !0),
        this.From.hide(t)
      ]);
    (this.properties = e[0]), this.afterFetch();
  }
  async afterFetch() {
    const t = await this.properties.renderer;
    (this.To = new t(this.properties)),
      this.To.add(),
      this.emit("NAVIGATE_IN", {
        to: {
          page: this.To.properties.page,
          view: this.To.wrap.lastElementChild
        },
        trigger: this.trigger,
        direction: this.direction,
        historyCount: this.historyCount,
        prevHistoryCount: this.prevHistoryCount,
        location: this.location
      }),
      await this.To.show({
        trigger: this.trigger,
        direction: this.direction,
        historyCount: this.historyCount,
        prevHistoryCount: this.prevHistoryCount,
        contextual: this.Contextual
      }),
      (this.popping = !1),
      (this.running = !1),
      this.detach(),
      (this.detach = this.attach(
        document.querySelectorAll(this.getSelectorLink())
      )),
      this.emit("NAVIGATE_END", {
        to: {
          page: this.To.properties.page,
          view: this.To.wrap.lastElementChild
        },
        from: {
          page: this.From.properties.page,
          view: this.From.properties.view
        },
        trigger: this.trigger,
        direction: this.direction,
        historyCount: this.historyCount,
        prevHistoryCount: this.prevHistoryCount,
        location: this.location
      }),
      (this.From = this.To),
      (this.trigger = null),
      (this.direction = null),
      (this.prevHistoryCount = this.historyCount);
  }
  getSelectorLink(t = window.location.pathname) {
    return `a[href]:not([href^="#"]):not([href^="${t}#"]):not([target]):not([download]):not([data-router-disabled])`;
  }
}
class Pv {
  constructor(t, e) {
    (this.wrap = t), (this.name = e);
  }
  show({ trigger: t, contextual: e }) {
    const s = this.wrap.lastElementChild,
      r = this.wrap.firstElementChild;
    return new Promise((l) => {
      e
        ? (s.setAttribute("data-transition-in", e.name),
          s.removeAttribute("data-transition-out", e.name),
          e.in && e.in({ to: s, from: r, trigger: t, done: l }))
        : (s.setAttribute("data-transition-in", this.name),
          s.removeAttribute("data-transition-out", this.name),
          this.in && this.in({ to: s, from: r, trigger: t, done: l }));
    });
  }
  hide({ trigger: t, contextual: e }) {
    const s = this.wrap.firstElementChild;
    return new Promise((r) => {
      e
        ? (s.setAttribute("data-transition-out", e.name),
          s.removeAttribute("data-transition-in", e.name),
          e.out && e.out({ from: s, trigger: t, done: r }))
        : (s.setAttribute("data-transition-out", this.name),
          s.removeAttribute("data-transition-in", this.name),
          this.out && this.out({ from: s, trigger: t, done: r }));
    });
  }
}
/*!
 * Highway v2.2.1
 * https://highway.js.org/
 * MIT License
 * Copyright (c) 2018 Dogstudio
 */ const kv = { Core: Ev, Helpers: Vu, Renderer: pn, Transition: Pv },
  Hl = (window._GLOBAL_.cacheLoadImage = window._GLOBAL_.cacheLoadImage || {});
function Lv(n, t = !1) {
  const e = typeof n == "object" && n.constructor.name === "Array",
    s = [];
  return (
    (e ? n : [n]).forEach((r) => {
      const l = Hl[r];
      if (l) {
        s.push(Promise.resolve(l));
        return;
      }
      const u = document.createElement("img");
      t && (u.crossOrigin = "anonymous"), (u.src = r);
      const c = rv(u);
      c.then(() => {
        Hl[r] = u;
      }),
        s.push(c);
    }),
    e ? Promise.all(s) : s[0]
  );
}
function Mv() {
  return document.scrollingElement || document.documentElement;
}
function Nu() {
  return zu() - Mv().offsetWidth;
}
function zu() {
  return fe
    ? Math.min(window.innerWidth, window.outerWidth)
    : window.innerWidth;
}
function Tv() {
  return fe
    ? Math.min(window.innerHeight, window.outerHeight)
    : window.innerHeight;
}
function ws(n = 1) {
  const t = At.isSp ? E.designWidthSp : E.designWidthPc,
    e = At.isSp ? E.designHeightSp : E.designHeightPc,
    s = E.isHorizontalScroll ? Tv() : zu(),
    r = E.isHorizontalScroll ? e : t;
  return (n * s) / r;
}
function Ul() {
  (E.variableSizeRate = ws()),
    document.documentElement.style.setProperty(
      "--variable-size-rate",
      `${E.variableSizeRate}`
    );
}
function Av(n = document) {
  return [
    ...n.querySelectorAll(
      `link[rel="preload"][as="image"]${
        At.isSp ? ":not([data-preload-pc])" : ":not([data-preload-sp])"
      }`
    )
  ].map((e) => e.href);
}
window._GLOBAL_.listenersLeave = window._GLOBAL_.listenersLeave || [];
const Ov = (window._GLOBAL_.listenersLeaveCompleted =
  window._GLOBAL_.listenersLeaveCompleted || []);
window._GLOBAL_.listenersEnter = window._GLOBAL_.listenersEnter || [];
const Fv = (window._GLOBAL_.listenersEnterReady =
    window._GLOBAL_.listenersEnterReady || []),
  Rv = (window._GLOBAL_.listenersEnterShow =
    window._GLOBAL_.listenersEnterShow || []);
window._GLOBAL_.listenersEnterCompleted =
  window._GLOBAL_.listenersEnterCompleted || [];
window._GLOBAL_.listenersLeaveCancelled =
  window._GLOBAL_.listenersLeaveCancelled || [];
window._GLOBAL_.listenersEnterCancelled =
  window._GLOBAL_.listenersEnterCancelled || [];
const be = (window._GLOBAL_.pageState = window._GLOBAL_.pageState || {
  highway: null,
  documentTo: null,
  isDisable: !0,
  isEnter: !1,
  stylesRemoveFrom: []
});
async function Iv(n) {
  if (!be.isDisable)
    return E.isInitializedAsynchronousTransition
      ? n()
      : new Promise((t) => {
          z.once("initializedAsynchronousTransition", () => {
            t(n());
          });
        });
}
function Kl(n = E.pageIdPrev) {
  z.emit("destroyCompletely", n);
}
function jl() {
  be.stylesRemoveFrom.forEach((n) => {
    n && n.remove();
  }),
    (be.stylesRemoveFrom = []);
}
async function Bv(n = document) {
  return be.isDisable ? void 0 : Iv(() => be.highway.attachAll(n));
}
function $l() {
  return E.isPopstate
    ? E.cScroll.scrollToPrevPagePosition()
    : E.cScroll.scrollToAnchor({ immediate: !0 });
}
function Vv() {
  const n = document.querySelector("#main-style"),
    t =
      'head > :is(style:not([data-tp-style]), link[rel="stylesheet"], link[rel="preload"]):not([data-no-reload])',
    e = document.querySelectorAll(t),
    s = [...e],
    r = be.documentTo.querySelectorAll(t),
    l = [...r];
  for (let c = 0; c < e.length; c++) {
    const d = e[c];
    for (let p = 0; p < r.length; p++) {
      const m = r[p];
      if (d.outerHTML === m.outerHTML) {
        (s[c] = null), (l[p] = null);
        break;
      }
    }
  }
  be.stylesRemoveFrom = s.map((c, d) => c && e[d]);
  let u = [];
  for (const c of l) {
    if (!c) continue;
    const d = document.createElement(c.tagName);
    for (let m = 0; m < c.attributes.length; m++) {
      const _ = c.attributes[m];
      d.setAttribute(_.nodeName, _.nodeValue);
    }
    c.tagName === "STYLE" && c.innerHTML && (d.innerHTML = c.innerHTML),
      u.push(
        new Promise((m) => {
          d.onload = () => {
            m();
          };
        })
      );
    const p = c.parentNode.tagName;
    p === "HEAD" && document.head.insertBefore(d, n),
      p === "BODY" && document.body.appendChild(d);
  }
  return Promise.all(u).then(() => {
    (E.isLoadedStyles = !0), z.emit("loadedStyles");
  });
}
function Nv() {
  const n = document.querySelector("#main-script"),
    t = "head > script:not([data-no-reload])",
    e = [...be.documentTo.querySelectorAll(t)],
    s = [...document.querySelectorAll(t)];
  for (let l = 0; l < s.length; l++) {
    const u = s[l];
    for (let c = 0; c < e.length; c++) {
      const d = e[c];
      if (u.outerHTML === d.outerHTML) {
        const p = document.createElement(u.tagName);
        for (let m = 0; m < u.attributes.length; m++) {
          const _ = u.attributes[m];
          p.setAttribute(_.nodeName, _.nodeValue);
        }
        u.innerHTML && (p.innerHTML = u.innerHTML),
          u.parentNode.replaceChild(p, u),
          s.splice(l, 1),
          e.splice(c, 1);
        break;
      }
    }
  }
  for (const l of s) l.parentNode.removeChild(l);
  let r = [];
  for (const l of e) {
    const u = document.createElement(l.tagName);
    for (let p = 0; p < l.attributes.length; p++) {
      const m = l.attributes[p];
      u.setAttribute(m.nodeName, m.nodeValue);
    }
    l.innerHTML && (u.innerHTML = l.innerHTML);
    const c = l.getAttribute("src");
    l.getAttribute("type") === "module" && c && hn(() => import(c), []),
      r.push(
        new Promise((p) => {
          u.onload = () => {
            p();
          };
        })
      );
    const d = l.parentNode.tagName;
    d === "HEAD" && document.head.appendChild(u),
      d === "BODY" && document.body.insertBefore(u, n);
  }
  return Promise.all(r).then(() => {
    (E.isLoadedStyles = !0), z.emit("loadedStyles");
  });
}
function zv() {
  return Av(be.documentTo);
}
function ql() {
  z.emit("leaveCompleted", E.pageId, E.pageIdPrev),
    Ov.forEach((n) => {
      n(E.pageId, E.pageIdPrev);
    });
}
function Hv() {
  z.emit("enterReady", E.pageId, E.pageIdPrev),
    Fv.forEach((n) => {
      n(E.pageId, E.pageIdPrev);
    });
}
function Gl() {
  z.emit("enterShow", E.pageId, E.pageIdPrev),
    Rv.forEach((n) => {
      n(E.pageId, E.pageIdPrev);
    });
}
const Nt = {
  components: [],
  componentsLocal: {},
  componentsPermanent: [],
  elsPermanent: null
};
function Wl(n, { delay: t = 0, priority: e = 0, isLocal: s = !1 } = {}) {
  let r;
  s
    ? ((r = Nt.componentsLocal[E.pageId]),
      r || (r = Nt.componentsLocal[E.pageId] = []))
    : (r = Nt.components),
    r[e] || (r[e] = []),
    r[e].push(n),
    t
      ? setTimeout(() => {
          Cn(n);
        }, t)
      : Cn(n);
}
function ui(n = document, t = !1) {
  var _Nt$componentsLocal$E;
  t
    ? Nt.components.forEach((e) => {
        e === null ||
          e === void 0 ||
          e.forEach((s) => {
            s.createAll(n, { isPermanent: t });
          });
      })
    : (Nt.components.forEach((e) => {
        e === null ||
          e === void 0 ||
          e.forEach((s) => {
            s.createAll(n);
          });
      }),
      (_Nt$componentsLocal$E = Nt.componentsLocal[E.pageId]) === null ||
      _Nt$componentsLocal$E === void 0
        ? void 0
        : _Nt$componentsLocal$E.forEach((e) => {
            e === null ||
              e === void 0 ||
              e.forEach((s) => {
                s.createAll(n);
              });
          }));
}
function Cn(n, t = !1) {
  t
    ? Nt.elsPermanent.forEach((e) => {
        n.createAll(e, { isPermanent: !0 });
      })
    : (n.createAll(E.view),
      Nt.elsPermanent.forEach((e) => {
        n.createAll(e, { isPermanent: !0 });
      }));
}
function Uv(n, { delay: t = 0, priority: e = 0 } = {}) {
  Nt.componentsPermanent[e] || (Nt.componentsPermanent[e] = []),
    Nt.componentsPermanent[e].push(n),
    t
      ? setTimeout(() => {
          Cn(n, !0);
        }, t)
      : Cn(n, !0);
}
function Kv() {
  Nt.componentsPermanent.forEach((n) => {
    n === null ||
      n === void 0 ||
      n.forEach((t) => {
        t.createAll();
      });
  });
}
function jv(n = "[data-permanent]") {
  Nt.elsPermanent = document.querySelectorAll(n);
}
function $v(n) {
  let t;
  const e = new MutationObserver(async (s) => {
    s.some(({ target: r }) => r === n) &&
      (ui(n), t && t.detach(), (t = await Bv(n)));
  });
  return (
    e.observe(n, { childList: !0 }),
    {
      destroy: () => {
        e.disconnect(), t && t.detach();
      }
    }
  );
}
function qv(n) {
  const t = n.querySelector("[data-fixed-local]");
  if (!t) return;
  const e = document.querySelector("[data-fixed-local-container]");
  (e.innerHTML = ""),
    document.querySelector("[data-fixed-local-container]").appendChild(t);
}
const xn = (window._GLOBAL_.pageComponents =
  window._GLOBAL_.pageComponents || {});
function io() {
  return E.pageId;
}
function Gv(n) {
  const t = io();
  t in xn || (xn[t] = n);
}
function Hu(n = document, t = !1) {
  ui(n), qv(n);
  const e = xn[io()],
    s = (r) => {
      new r(), z.emit("initPageJs"), t && z.emit("loadedStyles");
    };
  e
    ? s(e)
    : z.once("readyPage", () => {
        s(xn[io()]);
      });
}
function Wv(n = document) {
  E.pageIdPrev = sessionStorage.getItem("pageId") || "";
  const t = (E.pageId = n.body.id);
  sessionStorage.setItem("pageId", t);
}
fe && document.documentElement.classList.add("bMobile");
const ot = {
  id: "",
  modalOpened: null,
  targetFixedFull: null,
  scrollY: 0,
  overflowY: "",
  height: "",
  padding: 0
};
z.on("openModal", Yv);
z.on("closeModal", Xv);
function Yv(n) {
  (E.isOpenModal = !0),
    (ot.id = n),
    z.emit("beforeSetModalStyle", ot.id),
    (ot.modalOpened = E.modals[ot.id]),
    Uu(),
    z.emit("startOpenModal", ot.id),
    ot.modalOpened.open(() => {
      z.emit("completeOpenModal", ot.id);
    });
}
function Xv(n, t = !1) {
  ot.modalOpened &&
    (z.emit("beforeResetModalStyle", ot.id),
    Ku(),
    (E.isOpenModal = !1),
    z.emit("startCloseModal", ot.id),
    ot.modalOpened.close(() => {
      (ot.modalOpened = null), z.emit("completeCloseModal", ot.id);
    }, t));
}
function Uu() {
  if (
    (ot.modalOpened && ot.modalOpened.el.scrollTo(0, 0),
    (ot.targetFixedFull = document.querySelectorAll(
      "body, [data-fixed], .tp-dfwv"
    )),
    (ot.padding = Nu()),
    ot.padding)
  ) {
    const t = `${ot.padding}px`;
    ot.targetFixedFull.forEach((e) => {
      e.style.paddingRight = t;
    });
  }
  (ot.scrollY = window.pageYOffset),
    (ot.height = document.body.style.height),
    (ot.overflowY = document.documentElement.style.overflowY),
    (document.documentElement.style.overflowY = "hidden");
  const { style: n } = document.body;
  (n.position = "fixed"),
    (n.top = `-${ot.scrollY}px`),
    (n.width = "100%"),
    (n.height = "100%");
}
function Ku() {
  document.documentElement.style.overflowY = ot.overflowY;
  const { style: n } = document.body;
  (n.position = ""),
    (n.top = ""),
    (n.width = ""),
    (n.height = ot.height),
    window.scrollTo(0, ot.scrollY),
    ot.padding &&
      ot.targetFixedFull.forEach((t) => {
        t.style.paddingRight = "";
      });
}
const Jv = { root: null, rootMargin: "0px 0px 0px 0px", threshold: [0] },
  Zv = "[data-view]";
class Qv {
  constructor(t = {}) {
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "targetSelector", void 0);
    _defineProperty(this, "defaultOption", void 0);
    _defineProperty(this, "observerSets", []);
    _defineProperty(this, "id", 0);
    (this.options = t),
      (this.targetSelector = t.targetSelector || Zv),
      (this.defaultOption = t.defaultOption || Jv);
  }
  add({ el: t, callback: e, param: s = {}, once: r = !1 }) {
    const l = this.getData({ el: t, callback: e, param: s, once: r });
    if (l)
      return (
        this.setObserve(l),
        {
          destroy: () => {
            this.remove(l);
          }
        }
      );
  }
  remove(t) {
    if (!t) return;
    const { observerSet: { observer: e, listeners: s } = {}, el: r } = t;
    e !== null && e !== void 0 && e.unobserve(r),
      s === null || s === void 0 ? void 0 : s.splice(s.indexOf(t), 1);
  }
  setObserve(t) {
    const { root: e, rootMargin: s, threshold: r } = t.param;
    for (let d = 0; d < this.observerSets.length; d = (d + 1) | 0) {
      const p = this.observerSets[d],
        { param: m } = p;
      if (
        e === m.root &&
        s === m.rootMargin &&
        r.every((_, g) => _ === m.threshold[g])
      ) {
        const { observer: _, listeners: g } = p;
        _.observe(t.el), (t.observerSet = p), g.push(t);
        return;
      }
    }
    const l = [t],
      u = new IntersectionObserver((d, p) => {
        this.checkView(d, p, l);
      }, t.param);
    u.observe(t.el);
    const c = { observer: u, param: t.param, listeners: l };
    (t.observerSet = c), this.observerSets.push(c);
  }
  checkView(t, e, s) {
    for (let r = 0; r < t.length; r = (r + 1) | 0) {
      const l = t[r];
      for (let u = 0; u < s.length; u = (u + 1) | 0) {
        const c = s[u];
        c.el === l.target &&
          (c.callback(l),
          c.once &&
            l.isIntersecting &&
            (e.unobserve(c.el), s.splice(s.indexOf(c), 1)));
      }
    }
  }
  getData({ el: t, callback: e, param: s, once: r }) {
    if (t) {
      if (typeof t == "string") {
        const l = t;
        if (((t = document.querySelector(l)), !t)) {
          console.error(
            `No matching element found for the given selector "${l}".`
          );
          return;
        }
      }
      return {
        el: t,
        name: "view" + this.id++,
        param: {
          root:
            (t.dataset.viewRoot &&
              document.querySelector(t.dataset.viewRoot)) ||
            s.root ||
            this.defaultOption.root,
          rootMargin:
            t.dataset.viewMargin ||
            s.rootMargin ||
            this.defaultOption.rootMargin,
          threshold: t.dataset.viewThreshold
            ? t.dataset.viewThreshold.split(",").map((l) => Number(l))
            : Array.isArray(s.threshold)
            ? s.threshold
            : s.threshold
            ? [s.threshold]
            : this.defaultOption.threshold
        },
        once: "viewOnce" in t.dataset || r,
        callback: e
      };
    }
  }
}
function tg({ Scroll: n, transitions: t, onDoneInit: e }) {
  Ul(), Yl(), Pm({ transitions: t }), Wv();
  const s = (E.view = document.querySelector("[data-router-view]"));
  E.cIntersecting = new Qv();
  const r = document.querySelector("[data-100vh]");
  u(), ov();
  function l() {
    var _E$cScroll, _E$cScroll2;
    jv(),
      (E.cScroll = new n(document.body)),
      Kv(),
      Hu(s, !0),
      (_E$cScroll = E.cScroll) !== null &&
        _E$cScroll !== void 0 &&
        _E$cScroll.fireViewSelf &&
        (_E$cScroll2 = E.cScroll) !== null &&
        _E$cScroll2 !== void 0 &&
        _E$cScroll2.fireViewSelf(),
      e && e(),
      E.cScroll.onResize(() => {
        Ul(), Yl(), ze(!0);
      }),
      E.cScroll.onceResize(() => {
        E.cScroll.update(), z.emit("resizeFirst");
      }),
      nv(() => {
        ze(!0), E.cScroll.setResizeObserver(), z.emit("loaded");
      }),
      wv(
        () => {
          location.reload();
        },
        () => {
          location.reload();
        }
      );
  }
  function u() {
    !r || (r && r.clientHeight > 0)
      ? l()
      : requestAnimationFrame(() => {
          u();
        });
  }
}
function Yl() {
  document.documentElement.style.setProperty("--scroll-bar-width", Nu() + "px");
}
function eg(n, t) {
  return String(n).padStart(t, "0");
}
function so(n) {
  return eg(n, 2);
}
function ju(n) {
  return n
    .replace(/^[A-Z]/, (t) => t.toLowerCase())
    .replace(/[-_ ](.)/g, (t, e) => e.toUpperCase());
}
function ig(n) {
  return ju(n).replace(/[A-Z]/g, (e) => `_${e.toLowerCase()}`);
}
function sg(n) {
  return ju(n).replace(/[A-Z]/g, function (e) {
    return "-" + e.charAt(0).toLowerCase();
  });
}
function Uw(n) {
  return ig(n).toUpperCase();
}
const ng = [
  "autoCSS",
  "callbackScope",
  "delay",
  "duration",
  "ease",
  "immediateRender",
  "lazy",
  "onComplete",
  "onCompleteParams",
  "onCompleteScope",
  "onStart",
  "onStartParams",
  "onStartScope",
  "onOverwrite",
  "onRepeat",
  "onRepeatParams",
  "onRepeatScope",
  "onReverseComplete",
  "onReverseCompleteParams",
  "onReverseCompleteScope",
  "onUpdate",
  "onUpdateParams",
  "onUpdateScope",
  "overwrite",
  "paused",
  "repeat",
  "repeatDelay",
  "startAt",
  "useFrames",
  "yoyo",
  "yoyoEase",
  "clearProps"
];
function no(n) {
  const t = {};
  return (
    Object.keys(n).forEach((e) => {
      ng.some((s) => e === s) || (t[e] = !0);
    }),
    t
  );
}
function ti(n, t) {
  const e = no(t);
  return gsap.killTweensOf(n, e), e;
}
const kr = (window._GLOBAL_.cacheTimeline =
    window._GLOBAL_.cacheTimeline || {}),
  Z = {
    to(n, t) {
      return !n || n.length === 0
        ? Promise.resolve()
        : Array.isArray(t)
        ? Promise.all(t.map((e) => (ti(n, e), gsap.to(n, e))))
        : (ti(n, t), gsap.to(n, t));
    },
    from(n, t) {
      return !n || n.length === 0
        ? Promise.resolve()
        : Array.isArray(t)
        ? Promise.all(t.map((e) => (ti(n, e), gsap.from(n, e))))
        : (ti(n, t), gsap.from(n, t));
    },
    fromTo(n, t, e) {
      return !n || n.length === 0
        ? Promise.resolve()
        : Array.isArray(t)
        ? Promise.all(t.map(([s, r]) => (ti(n, r), gsap.fromTo(n, s, r))))
        : (ti(n, e), gsap.fromTo(n, t, e));
    },
    set(n, t) {
      return !n || n.length === 0
        ? Promise.resolve()
        : (ti(n, t), gsap.set(n, t));
    },
    timeline(n, t) {
      return t && t in kr && kr[t].pause().kill(), (kr[t] = gsap.timeline(n));
    },
    scrub(n, t) {
      return !n || n.length === 0
        ? Promise.resolve()
        : (t.duration || (t.duration = 0.05),
          t.ease || (t.ease = "expo.out"),
          "overwrite" in t || (t.overwrite = !0),
          gsap.to(n, t));
    },
    scrubCss(n, t) {
      var _n$style;
      return !n || n.length === 0
        ? Promise.resolve()
        : (t.duration || (t.duration = 0.05),
          t.ease || (t.ease = "expo.out"),
          "overwrite" in t || (t.overwrite = !0),
          ((_n$style = n.style) !== null &&
            _n$style !== void 0 &&
            _n$style.transitionProperty) ||
            ((t.transitionProperty = Object.keys(no(t))
              .map((e) => sg(e))
              .join(",")),
            (t.transitionDuration = `${t.duration}s`),
            (t.transitionTimingFunction = "cubic-bezier(0.16, 1, 0.3, 1)")),
          gsap.set(n, t));
    },
    resetScrub(n, t) {
      return !n || n.length === 0
        ? Promise.resolve()
        : ("overwrite" in t || (t.overwrite = !0), gsap.set(n, t));
    },
    resetScrubCss(n, t) {
      if (!n || n.length === 0) return Promise.resolve();
      const e = no(t);
      return (
        (t.clearProps = Object.keys(e).join(",")),
        "overwrite" in t || (t.overwrite = !0),
        gsap.set(n, t)
      );
    }
  };
function $u(n) {
  return new Promise((t) => {
    setTimeout(t, n * 1e3);
  });
}
const rg = 0.1,
  og = 0.1,
  ag = "power2.in",
  lg = 0.3,
  hg = 0.3,
  ug = "power2.out",
  cg = 0,
  Lr = { isPullAddressBar: !1 };
let Mr = !1;
class dg extends kv.Transition {
  async out({ from: t, done: e }) {
    if (fe) t.classList.add("-show", "-out", "-immediate"), Kl();
    else {
      (Mr = E.popDirection === "back"),
        gsap.set(t.parentElement, { height: t.offsetHeight }),
        t.style.setProperty("--view-y", `${-E.scrollY}px`);
      const s = ["-show", "-out"];
      Mr && s.push("-back"),
        t.classList.remove("-in", "-back"),
        t.classList.add(...s),
        Z.to(t, [{ opacity: 0, duration: At.isSp ? og : rg, ease: ag }]).then(
          () => {
            Kl();
          }
        );
    }
    (Lr.isPullAddressBar =
      fe && !E.isOpenModal && window.innerHeight > E.windowHeightInitial),
      Lr.isPullAddressBar ? (Uu(), requestAnimationFrame(e)) : e();
  }
  in({ from: t, to: e, done: s }) {
    new Promise((r) => {
      Lr.isPullAddressBar
        ? requestAnimationFrame(() => {
            Ku(), r();
          })
        : r();
    })
      .then(() => {
        new Promise((c) => {
          z.once("initPageJs", c);
        });
        const r = Vv(),
          l = Nv().then(() => {
            Hu(e);
          }),
          u = Lv(zv());
        return Promise.all([r, l, u]);
      })
      .then(async () => {
        if ((Hv(), fe))
          e.classList.remove("-out"),
            e.classList.add("-show", "-in", "-immediate"),
            await $u(0),
            await $l(),
            Gl(),
            ql(),
            t.remove(),
            jl(),
            e.classList.remove("-in"),
            E.cScroll.update();
        else {
          e.style.setProperty(
            "--view-y",
            `${
              (((E.isPopstate ? E.cScroll.getStorageScrollY() : 0) +
                window.innerHeight * 0.5) /
                e.offsetHeight) *
              100
            }%`
          );
          const r = ["-show", "-in"];
          return (
            Mr && r.push("-back"),
            e.classList.remove("-out", "-back"),
            e.classList.add(...r),
            await $l(),
            Z.fromTo(
              e,
              { opacity: 0 },
              {
                opacity: 1,
                duration: At.isSp ? hg : lg,
                ease: ug,
                delay: cg,
                onStart: () => {
                  Gl();
                },
                onComplete: () => {
                  ql(),
                    t.remove(),
                    jl(),
                    (e.parentElement.style.height = ""),
                    e.classList.remove("-in", "-back"),
                    E.cScroll.update(),
                    gsap.set([e], { clearProps: !0 });
                }
              }
            )
          );
        }
      })
      .then(s);
  }
}
function ro() {
  return (
    (ro = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
            for (var s in e)
              Object.prototype.hasOwnProperty.call(e, s) && (n[s] = e[s]);
          }
          return n;
        }),
    ro.apply(this, arguments)
  );
}
function Sn(n, t, e) {
  return Math.max(n, Math.min(t, e));
}
class pg {
  advance(t) {
    var e;
    if (!this.isRunning) return;
    let s = !1;
    if (this.lerp)
      (this.value = (1 - (r = this.lerp)) * this.value + r * this.to),
        Math.round(this.value) === this.to &&
          ((this.value = this.to), (s = !0));
    else {
      this.currentTime += t;
      const l = Sn(0, this.currentTime / this.duration, 1);
      s = l >= 1;
      const u = s ? 1 : this.easing(l);
      this.value = this.from + (this.to - this.from) * u;
    }
    var r;
    (e = this.onUpdate) == null || e.call(this, this.value, { completed: s }),
      s && this.stop();
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(
    t,
    e,
    { lerp: s = 0.1, duration: r = 1, easing: l = (c) => c, onUpdate: u }
  ) {
    (this.from = this.value = t),
      (this.to = e),
      (this.lerp = s),
      (this.duration = r),
      (this.easing = l),
      (this.currentTime = 0),
      (this.isRunning = !0),
      (this.onUpdate = u);
  }
}
function Xl(n, t) {
  let e;
  return function () {
    let s = arguments,
      r = this;
    clearTimeout(e),
      (e = setTimeout(function () {
        n.apply(r, s);
      }, t));
  };
}
class fg {
  constructor(t, e) {
    (this.onWindowResize = () => {
      (this.width = window.innerWidth), (this.height = window.innerHeight);
    }),
      (this.onWrapperResize = () => {
        (this.width = this.wrapper.clientWidth),
          (this.height = this.wrapper.clientHeight);
      }),
      (this.onContentResize = () => {
        const s =
          this.wrapper === window ? document.documentElement : this.wrapper;
        (this.scrollHeight = s.scrollHeight),
          (this.scrollWidth = s.scrollWidth);
      }),
      (this.wrapper = t),
      (this.content = e),
      this.wrapper === window
        ? (window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize())
        : ((this.wrapperResizeObserver = new ResizeObserver(
            Xl(this.onWrapperResize, 100)
          )),
          this.wrapperResizeObserver.observe(this.wrapper),
          this.onWrapperResize()),
      (this.contentResizeObserver = new ResizeObserver(
        Xl(this.onContentResize, 100)
      )),
      this.contentResizeObserver.observe(this.content),
      this.onContentResize();
  }
  destroy() {
    var t, e;
    window.removeEventListener("resize", this.onWindowResize, !1),
      (t = this.wrapperResizeObserver) == null || t.disconnect(),
      (e = this.contentResizeObserver) == null || e.disconnect();
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height
    };
  }
}
let qu = () => ({
  events: {},
  emit(n, ...t) {
    let e = this.events[n] || [];
    for (let s = 0, r = e.length; s < r; s++) e[s](...t);
  },
  on(n, t) {
    var e;
    return (
      ((e = this.events[n]) != null && e.push(t)) || (this.events[n] = [t]),
      () => {
        var s;
        this.events[n] =
          (s = this.events[n]) == null ? void 0 : s.filter((r) => t !== r);
      }
    );
  }
});
class mg {
  constructor(
    t,
    { wheelMultiplier: e = 1, touchMultiplier: s = 2, normalizeWheel: r = !1 }
  ) {
    (this.onTouchStart = (l) => {
      const { clientX: u, clientY: c } = l.targetTouches
        ? l.targetTouches[0]
        : l;
      (this.touchStart.x = u),
        (this.touchStart.y = c),
        (this.lastDelta = { x: 0, y: 0 });
    }),
      (this.onTouchMove = (l) => {
        const { clientX: u, clientY: c } = l.targetTouches
            ? l.targetTouches[0]
            : l,
          d = -(u - this.touchStart.x) * this.touchMultiplier,
          p = -(c - this.touchStart.y) * this.touchMultiplier;
        (this.touchStart.x = u),
          (this.touchStart.y = c),
          (this.lastDelta = { x: d, y: p }),
          this.emitter.emit("scroll", {
            type: "touch",
            deltaX: d,
            deltaY: p,
            event: l
          });
      }),
      (this.onTouchEnd = (l) => {
        this.emitter.emit("scroll", {
          type: "touch",
          inertia: !0,
          deltaX: this.lastDelta.x,
          deltaY: this.lastDelta.y,
          event: l
        });
      }),
      (this.onWheel = (l) => {
        let { deltaX: u, deltaY: c } = l;
        this.normalizeWheel && ((u = Sn(-100, u, 100)), (c = Sn(-100, c, 100))),
          (u *= this.wheelMultiplier),
          (c *= this.wheelMultiplier),
          this.emitter.emit("scroll", {
            type: "wheel",
            deltaX: u,
            deltaY: c,
            event: l
          });
      }),
      (this.element = t),
      (this.wheelMultiplier = e),
      (this.touchMultiplier = s),
      (this.normalizeWheel = r),
      (this.touchStart = { x: null, y: null }),
      (this.emitter = qu()),
      this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.addEventListener("touchstart", this.onTouchStart, {
        passive: !1
      }),
      this.element.addEventListener("touchmove", this.onTouchMove, {
        passive: !1
      }),
      this.element.addEventListener("touchend", this.onTouchEnd, {
        passive: !1
      });
  }
  on(t, e) {
    return this.emitter.on(t, e);
  }
  destroy() {
    (this.emitter.events = {}),
      this.element.removeEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.removeEventListener("touchstart", this.onTouchStart, {
        passive: !1
      }),
      this.element.removeEventListener("touchmove", this.onTouchMove, {
        passive: !1
      }),
      this.element.removeEventListener("touchend", this.onTouchEnd, {
        passive: !1
      });
  }
}
class _g {
  constructor({
    direction: t,
    gestureDirection: e,
    mouseMultiplier: s,
    smooth: r,
    wrapper: l = window,
    content: u = document.documentElement,
    wheelEventsTarget: c = l,
    smoothWheel: d = r == null || r,
    smoothTouch: p = !1,
    syncTouch: m = !1,
    syncTouchLerp: _ = 0.1,
    touchInertiaMultiplier: g = 35,
    duration: y,
    easing: w = (O) => Math.min(1, 1.001 - Math.pow(2, -10 * O)),
    lerp: v = y ? null : 0.1,
    infinite: D = !1,
    orientation: S = t !== null && t !== void 0 ? t : "vertical",
    gestureOrientation: C = e !== null && e !== void 0 ? e : "vertical",
    touchMultiplier: P = 1,
    wheelMultiplier: k = s !== null && s !== void 0 ? s : 1,
    normalizeWheel: A = !1
  } = {}) {
    (this.onVirtualScroll = ({
      type: O,
      inertia: L,
      deltaX: T,
      deltaY: M,
      event: B
    }) => {
      if (B.ctrlKey) return;
      const V = O === "touch",
        G = O === "wheel";
      if (
        (this.options.gestureOrientation === "vertical" && M === 0) ||
        (this.options.gestureOrientation === "horizontal" && T === 0) ||
        (V &&
          this.options.gestureOrientation === "vertical" &&
          this.scroll === 0 &&
          !this.options.infinite &&
          M <= 0) ||
        B.composedPath().find((H) =>
          H == null || H.hasAttribute == null
            ? void 0
            : H.hasAttribute("data-lenis-prevent")
        )
      )
        return;
      if (this.isStopped || this.isLocked) return void B.preventDefault();
      if (
        ((this.isSmooth =
          ((this.options.smoothTouch || this.options.syncTouch) && V) ||
          (this.options.smoothWheel && G)),
        !this.isSmooth)
      )
        return (this.isScrolling = !1), void this.animate.stop();
      B.preventDefault();
      let j = M;
      this.options.gestureOrientation === "both"
        ? (j = Math.abs(M) > Math.abs(T) ? M : T)
        : this.options.gestureOrientation === "horizontal" && (j = T);
      const et = V && this.options.syncTouch,
        $ = V && L && Math.abs(j) > 1;
      $ && (j = this.velocity * this.options.touchInertiaMultiplier),
        this.scrollTo(
          this.targetScroll + j,
          ro({ programmatic: !1 }, et && { lerp: $ ? this.syncTouchLerp : 0.4 })
        );
    }),
      (this.onScroll = () => {
        if (!this.isScrolling) {
          const O = this.animatedScroll;
          (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            (this.direction = Math.sign(this.animatedScroll - O)),
            this.emit();
        }
      }),
      t &&
        console.warn(
          "Lenis: `direction` option is deprecated, use `orientation` instead"
        ),
      e &&
        console.warn(
          "Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"
        ),
      s &&
        console.warn(
          "Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"
        ),
      r &&
        console.warn(
          "Lenis: `smooth` option is deprecated, use `smoothWheel` instead"
        ),
      (window.lenisVersion = "1.0.10"),
      (l !== document.documentElement && l !== document.body) || (l = window),
      (this.options = {
        wrapper: l,
        content: u,
        wheelEventsTarget: c,
        smoothWheel: d,
        smoothTouch: p,
        syncTouch: m,
        syncTouchLerp: _,
        touchInertiaMultiplier: g,
        duration: y,
        easing: w,
        lerp: v,
        infinite: D,
        gestureOrientation: C,
        orientation: S,
        touchMultiplier: P,
        wheelMultiplier: k,
        normalizeWheel: A
      }),
      (this.dimensions = new fg(l, u)),
      this.rootElement.classList.add("lenis"),
      (this.velocity = 0),
      (this.isStopped = !1),
      (this.isSmooth = d || p),
      (this.isScrolling = !1),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      (this.animate = new pg()),
      (this.emitter = qu()),
      this.options.wrapper.addEventListener("scroll", this.onScroll, {
        passive: !1
      }),
      (this.virtualScroll = new mg(c, {
        touchMultiplier: P,
        wheelMultiplier: k,
        normalizeWheel: A
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll);
  }
  destroy() {
    (this.emitter.events = {}),
      this.options.wrapper.removeEventListener("scroll", this.onScroll, {
        passive: !1
      }),
      this.virtualScroll.destroy();
  }
  on(t, e) {
    return this.emitter.on(t, e);
  }
  off(t, e) {
    var s;
    this.emitter.events[t] =
      (s = this.emitter.events[t]) == null ? void 0 : s.filter((r) => e !== r);
  }
  setScroll(t) {
    this.isHorizontal
      ? (this.rootElement.scrollLeft = t)
      : (this.rootElement.scrollTop = t);
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    (this.isLocked = !1),
      (this.isScrolling = !1),
      (this.velocity = 0),
      this.animate.stop();
  }
  start() {
    (this.isStopped = !1), this.reset();
  }
  stop() {
    (this.isStopped = !0), this.animate.stop(), this.reset();
  }
  raf(t) {
    const e = t - (this.time || t);
    (this.time = t), this.animate.advance(0.001 * e);
  }
  scrollTo(
    t,
    {
      offset: e = 0,
      immediate: s = !1,
      lock: r = !1,
      duration: l = this.options.duration,
      easing: u = this.options.easing,
      lerp: c = !l && this.options.lerp,
      onComplete: d = null,
      force: p = !1,
      programmatic: m = !0
    } = {}
  ) {
    if (!this.isStopped || p) {
      if (["top", "left", "start"].includes(t)) t = 0;
      else if (["bottom", "right", "end"].includes(t)) t = this.limit;
      else {
        var _;
        let g;
        if (
          (typeof t == "string"
            ? (g = document.querySelector(t))
            : (_ = t) != null && _.nodeType && (g = t),
          g)
        ) {
          if (this.options.wrapper !== window) {
            const w = this.options.wrapper.getBoundingClientRect();
            e -= this.isHorizontal ? w.left : w.top;
          }
          const y = g.getBoundingClientRect();
          t = (this.isHorizontal ? y.left : y.top) + this.animatedScroll;
        }
      }
      if (typeof t == "number") {
        if (
          ((t += e),
          this.options.infinite
            ? m && (this.targetScroll = this.animatedScroll = this.scroll)
            : (t = Sn(0, t, this.limit)),
          s)
        )
          return (
            (this.animatedScroll = this.targetScroll = t),
            this.setScroll(this.scroll),
            this.reset(),
            this.emit(),
            void (d == null || d())
          );
        if (!m) {
          if (t === this.targetScroll) return;
          this.targetScroll = t;
        }
        this.animate.fromTo(this.animatedScroll, t, {
          duration: l,
          easing: u,
          lerp: c,
          onUpdate: (g, { completed: y }) => {
            r && (this.isLocked = !0),
              (this.isScrolling = !0),
              (this.velocity = g - this.animatedScroll),
              (this.direction = Math.sign(this.velocity)),
              (this.animatedScroll = g),
              this.setScroll(this.scroll),
              m && (this.targetScroll = g),
              y &&
                (r && (this.isLocked = !1),
                requestAnimationFrame(() => {
                  this.isScrolling = !1;
                }),
                (this.velocity = 0),
                d !== null && d !== void 0 && d()),
              this.emit();
          }
        });
      }
    }
  }
  get rootElement() {
    return this.options.wrapper === window
      ? this.options.content
      : this.options.wrapper;
  }
  get limit() {
    return this.isHorizontal
      ? this.dimensions.limit.x
      : this.dimensions.limit.y;
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    return this.isHorizontal
      ? this.rootElement.scrollLeft
      : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? (function (t, e) {
          let s = t % e;
          return ((e > 0 && s < 0) || (e < 0 && s > 0)) && (s += e), s;
        })(this.animatedScroll, this.limit)
      : this.animatedScroll;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isSmooth() {
    return this.__isSmooth;
  }
  set isSmooth(t) {
    this.__isSmooth !== t &&
      (this.rootElement.classList.toggle("lenis-smooth", t),
      (this.__isSmooth = t));
  }
  get isScrolling() {
    return this.__isScrolling;
  }
  set isScrolling(t) {
    this.__isScrolling !== t &&
      (this.rootElement.classList.toggle("lenis-scrolling", t),
      (this.__isScrolling = t));
  }
  get isStopped() {
    return this.__isStopped;
  }
  set isStopped(t) {
    this.__isStopped !== t &&
      (this.rootElement.classList.toggle("lenis-stopped", t),
      (this.__isStopped = t));
  }
}
/*!
 * ScrollToPlugin 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var kt,
  Gu,
  me,
  ie,
  Be,
  Wu,
  Yu,
  ln,
  Xu = function () {
    return typeof window < "u";
  },
  Ju = function () {
    return kt || (Xu() && (kt = window.gsap) && kt.registerPlugin && kt);
  },
  Zu = function (t) {
    return typeof t == "string";
  },
  Jl = function (t) {
    return typeof t == "function";
  },
  Os = function (t, e) {
    var s = e === "x" ? "Width" : "Height",
      r = "scroll" + s,
      l = "client" + s;
    return t === me || t === ie || t === Be
      ? Math.max(ie[r], Be[r]) - (me["inner" + s] || ie[l] || Be[l])
      : t[r] - t["offset" + s];
  },
  Fs = function (t, e) {
    var s = "scroll" + (e === "x" ? "Left" : "Top");
    return (
      t === me &&
        (t.pageXOffset != null
          ? (s = "page" + e.toUpperCase() + "Offset")
          : (t = ie[s] != null ? ie : Be)),
      function () {
        return t[s];
      }
    );
  },
  vg = function (t, e, s, r) {
    if ((Jl(t) && (t = t(e, s, r)), typeof t != "object"))
      return Zu(t) && t !== "max" && t.charAt(1) !== "="
        ? { x: t, y: t }
        : { y: t };
    if (t.nodeType) return { y: t, x: t };
    var l = {},
      u;
    for (u in t) l[u] = u !== "onAutoKill" && Jl(t[u]) ? t[u](e, s, r) : t[u];
    return l;
  },
  Qu = function (t, e) {
    if (((t = Wu(t)[0]), !t || !t.getBoundingClientRect))
      return (
        console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 }
      );
    var s = t.getBoundingClientRect(),
      r = !e || e === me || e === Be,
      l = r
        ? {
            top:
              ie.clientTop -
              (me.pageYOffset || ie.scrollTop || Be.scrollTop || 0),
            left:
              ie.clientLeft -
              (me.pageXOffset || ie.scrollLeft || Be.scrollLeft || 0)
          }
        : e.getBoundingClientRect(),
      u = { x: s.left - l.left, y: s.top - l.top };
    return !r && e && ((u.x += Fs(e, "x")()), (u.y += Fs(e, "y")())), u;
  },
  Zl = function (t, e, s, r, l) {
    return !isNaN(t) && typeof t != "object"
      ? parseFloat(t) - l
      : Zu(t) && t.charAt(1) === "="
      ? parseFloat(t.substr(2)) * (t.charAt(0) === "-" ? -1 : 1) + r - l
      : t === "max"
      ? Os(e, s) - l
      : Math.min(Os(e, s), Qu(t, e)[s] - l);
  },
  Ql = function () {
    (kt = Ju()),
      Xu() &&
        kt &&
        typeof document < "u" &&
        document.body &&
        ((me = window),
        (Be = document.body),
        (ie = document.documentElement),
        (Wu = kt.utils.toArray),
        kt.config({ autoKillThreshold: 7 }),
        (Yu = kt.config()),
        (Gu = 1));
  },
  Us = {
    version: "3.11.4",
    name: "scrollTo",
    rawVars: 1,
    register: function (t) {
      (kt = t), Ql();
    },
    init: function (t, e, s, r, l) {
      Gu || Ql();
      var u = this,
        c = kt.getProperty(t, "scrollSnapType");
      (u.isWin = t === me),
        (u.target = t),
        (u.tween = s),
        (e = vg(e, r, t, l)),
        (u.vars = e),
        (u.autoKill = !!e.autoKill),
        (u.getX = Fs(t, "x")),
        (u.getY = Fs(t, "y")),
        (u.x = u.xPrev = u.getX()),
        (u.y = u.yPrev = u.getY()),
        ln || (ln = kt.core.globals().ScrollTrigger),
        kt.getProperty(t, "scrollBehavior") === "smooth" &&
          kt.set(t, { scrollBehavior: "auto" }),
        c &&
          c !== "none" &&
          ((u.snap = 1),
          (u.snapInline = t.style.scrollSnapType),
          (t.style.scrollSnapType = "none")),
        e.x != null
          ? (u.add(u, "x", u.x, Zl(e.x, t, "x", u.x, e.offsetX || 0), r, l),
            u._props.push("scrollTo_x"))
          : (u.skipX = 1),
        e.y != null
          ? (u.add(u, "y", u.y, Zl(e.y, t, "y", u.y, e.offsetY || 0), r, l),
            u._props.push("scrollTo_y"))
          : (u.skipY = 1);
    },
    render: function (t, e) {
      for (
        var s = e._pt,
          r = e.target,
          l = e.tween,
          u = e.autoKill,
          c = e.xPrev,
          d = e.yPrev,
          p = e.isWin,
          m = e.snap,
          _ = e.snapInline,
          g,
          y,
          w,
          v,
          D;
        s;

      )
        s.r(t, s.d), (s = s._next);
      (g = p || !e.skipX ? e.getX() : c),
        (y = p || !e.skipY ? e.getY() : d),
        (w = y - d),
        (v = g - c),
        (D = Yu.autoKillThreshold),
        e.x < 0 && (e.x = 0),
        e.y < 0 && (e.y = 0),
        u &&
          (!e.skipX && (v > D || v < -D) && g < Os(r, "x") && (e.skipX = 1),
          !e.skipY && (w > D || w < -D) && y < Os(r, "y") && (e.skipY = 1),
          e.skipX &&
            e.skipY &&
            (l.kill(),
            e.vars.onAutoKill &&
              e.vars.onAutoKill.apply(l, e.vars.onAutoKillParams || []))),
        p
          ? me.scrollTo(e.skipX ? g : e.x, e.skipY ? y : e.y)
          : (e.skipY || (r.scrollTop = e.y), e.skipX || (r.scrollLeft = e.x)),
        m &&
          (t === 1 || t === 0) &&
          ((y = r.scrollTop),
          (g = r.scrollLeft),
          _
            ? (r.style.scrollSnapType = _)
            : r.style.removeProperty("scroll-snap-type"),
          (r.scrollTop = y + 1),
          (r.scrollLeft = g + 1),
          (r.scrollTop = y),
          (r.scrollLeft = g)),
        (e.xPrev = e.x),
        (e.yPrev = e.y),
        ln && ln.update();
    },
    kill: function (t) {
      var e = t === "scrollTo";
      (e || t === "scrollTo_x") && (this.skipX = 1),
        (e || t === "scrollTo_y") && (this.skipY = 1);
    }
  };
Us.max = Os;
Us.getOffset = Qu;
Us.buildGetter = Fs;
Ju() && kt.registerPlugin(Us);
const Rs = (window._GLOBAL_.listenersMousedown =
  window._GLOBAL_.listenersMousedown || []);
let th;
const Is = (window._GLOBAL_.listenersMousemove =
  window._GLOBAL_.listenersMousemove || []);
let eh;
const Bs = (window._GLOBAL_.listenersMouseup =
  window._GLOBAL_.listenersMouseup || []);
let ih;
function gg() {
  document.addEventListener(
    "mousedown",
    (n) => {
      const { clientX: t, clientY: e } = n;
      th = Rs.length;
      for (let s = 0; s < th; s++) Rs[s](t, e);
    },
    Q
  ),
    document.addEventListener(
      "mousemove",
      (n) => {
        const { clientX: t, clientY: e } = n;
        eh = Is.length;
        for (let s = 0; s < eh; s++) Is[s](t, e);
      },
      Q
    ),
    document.addEventListener(
      "mouseup",
      (n) => {
        const { clientX: t, clientY: e } = n;
        ih = Bs.length;
        for (let s = 0; s < ih; s++) Bs[s](t, e);
      },
      Q
    );
}
function tc(n) {
  Rs.push(n);
}
function ec(n) {
  Rs.some((t, e) => (t === n ? (Rs.splice(e, 1), !0) : !1));
}
function ic(n) {
  Is.push(n);
}
function sc(n) {
  Is.some((t, e) => (t === n ? (Is.splice(e, 1), !0) : !1));
}
function nc(n) {
  Bs.push(n);
}
function rc(n) {
  Bs.some((t, e) => (t === n ? (Bs.splice(e, 1), !0) : !1));
}
const bg = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      init: gg,
      offMousedown: ec,
      offMousemove: sc,
      offMouseup: rc,
      onMousedown: tc,
      onMousemove: ic,
      onMouseup: nc
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function No() {
  return At.isSp ? !0 : xm.ask("intent") === "touch";
}
function zo(n, t) {
  const e = (s) => {
    No() || t(s);
  };
  return n.addEventListener("mouseenter", e, Q), e;
}
function wg(n, t) {
  const e = (s) => {
    No() || t(s);
  };
  return n.addEventListener("mousemove", e, Q), e;
}
function Ho(n, t) {
  const e = (s) => {
    No() || t(s);
  };
  return n.addEventListener("mouseleave", e, Q), e;
}
function oc(n, t) {
  n.removeEventListener("mouseenter", t);
}
function yg(n, t) {
  n.removeEventListener("mousemove", t);
}
function ac(n, t) {
  n.removeEventListener("mouseleave", t);
}
const Dg = {
    pageTop: 35,
    pageWhyUse: 1,
    pageSmbService: 2,
    pageAbout: 1,
    pageCareers: 0,
    page404: 1
  },
  Vs = (window._GLOBAL_.listenersLoadProgress =
    window._GLOBAL_.listenersLoadProgress || []),
  En = (window._GLOBAL_.listenersLoadDone =
    window._GLOBAL_.listenersLoadDone || []);
async function Cg() {
  {
    if (!E.loadingCountList[E.pageId]) {
      E.view.classList.add("-show"), dc();
      return;
    }
    Uo(),
      z.on("leave", () => {
        (E.loadingCountList[E.pageId] = []), (E.isLoadStart[E.pageId] = !1);
      });
  }
}
function Uo() {
  const n = E.loadingCountList[E.pageId];
  if (!n || n.length < Dg[E.pageId] || E.isLoadStart[E.pageId]) return;
  E.isLoadStart[E.pageId] = !0;
  const t = 100 / n.length;
  let e = 0;
  Promise.all(
    n.map(
      (s) => (
        s !== null &&
          s !== void 0 &&
          s.then(() => {
            e += t;
            const r = Math.round(e);
            for (let l = 0; l < Vs.length; l = (l + 1) | 0) Vs[l](r);
          }),
        s
      )
    )
  ).then(() => {
    dc();
  }),
    E.view.classList.add("-show");
}
function lc(n) {
  Vs.push(n);
}
function hc(n) {
  Vs.some((t, e) => (t === n ? (Vs.splice(e, 1), !0) : !1));
}
function uc(n) {
  En.push(n);
}
function cc(n) {
  En.some((t, e) => (t === n ? (En.splice(e, 1), !0) : !1));
}
function dc() {
  (E.isLoadDone[E.pageId] = !0),
    En.forEach((n) => {
      n();
    });
}
const xg = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      detectStartLoading: Uo,
      init: Cg,
      offLoadDone: cc,
      offLoadProgress: hc,
      onLoadDone: uc,
      onLoadProgress: lc
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
class pc {
  constructor(t, e, s = {}) {
    const { threshold: r = 0, reset: l, isPreventDefault: u = !1 } = s;
    (this.el = t),
      (this._callback = e),
      (this._threshold = r),
      (this.reset = l),
      (this._type = "wheel"),
      (this._isPreventDefault = u),
      (this._handler = this._onWheel.bind(this)),
      this.el.addEventListener("wheel", this._handler, {
        passive: this._isPreventDefault ? !1 : !to
      });
  }
  _onWheel(t) {
    this._isPreventDefault && t.preventDefault();
    let e;
    const { deltaX: s, deltaY: r } = t;
    if (Math.abs(r) >= Math.abs(s)) {
      if (r > this._threshold) e = "Down";
      else if (r < -this._threshold) e = "Up";
      else if (this.reset) {
        this.reset(r, this._type);
        return;
      }
    } else if (s > this._threshold) e = "Right";
    else if (s < -this._threshold) e = "Left";
    else if (this.reset) {
      this.reset(s, this._type);
      return;
    }
    this._callback({
      e: t,
      diff: { y: r, x: s },
      direction: e,
      type: this._type
    });
  }
  destroy() {
    this.el.removeEventListener("wheel", this._handler, Q);
  }
}
class fc {
  constructor(t, e, s = {}) {
    const {
      threshold: r = 120,
      isDetectOnStart: l = !1,
      isPreventDefault: u = !1,
      onStart: c,
      onUpdate: d,
      reset: p
    } = s;
    (this.el = t),
      (this._callback = e),
      (this._threshold = r),
      (this._isPreventDefault = u),
      (this._onStart = c),
      (this._onUpdate = l ? e : d),
      (this.reset = p),
      (this._type = "drag"),
      (this._isStart = !1),
      (this._mousedownHandler = this._onMousedown.bind(this)),
      this.el.addEventListener("mousedown", this._mousedownHandler, Q),
      (this._mousemoveHandler = this._onMousemove.bind(this)),
      this.el.addEventListener(
        "mousemove",
        this._mousemoveHandler,
        this._isPreventDefault ? !1 : Q
      ),
      (this._mouseupHandler = this._onMouseup.bind(this)),
      this.el.addEventListener("mouseup", this._mouseupHandler, Q);
  }
  _onMousedown(t) {
    (this._isStart = !0),
      (this._startPosition = Ie(t)),
      this._onStart && this._onStart(this._startPosition, this._type);
  }
  _onMousemove(t) {
    if (
      this._isStart &&
      (this._isPreventDefault && t.preventDefault(), this._onUpdate)
    ) {
      const e = Ie(t),
        s = e.y - this._startPosition.y,
        r = e.x - this._startPosition.x;
      let l;
      Math.abs(s) >= Math.abs(r)
        ? s < 0
          ? (l = "Down")
          : s > 0 && (l = "Up")
        : r < 0
        ? (l = "Right")
        : r > 0 && (l = "Left"),
        this._onUpdate({
          e: t,
          diff: { y: s, x: r },
          direction: l,
          type: this._type
        });
    }
  }
  _onMouseup(t) {
    if (!this._isStart) return;
    const e = Ie(t),
      s = e.y - this._startPosition.y,
      r = e.x - this._startPosition.x;
    let l;
    if (Math.abs(s) >= Math.abs(r)) {
      if (s < -this._threshold) l = "Down";
      else if (s > this._threshold) l = "Up";
      else if (this.reset) {
        this.reset(s, this._type), (this._isStart = !1);
        return;
      }
    } else if (r < -this._threshold) l = "Right";
    else if (r > this._threshold) l = "Left";
    else if (this.reset) {
      this.reset(r, this._type), (this._isStart = !1);
      return;
    }
    this._callback({
      e: t,
      diff: { y: s, x: r },
      direction: l,
      type: this._type
    }),
      (this._isStart = !1);
  }
  destroy() {
    this.el.removeEventListener("mousedown", this._mousedownHandler, Q),
      this.el.removeEventListener(
        "mousemove",
        this._mousemoveHandler,
        this._isPreventDefault ? !1 : Q
      ),
      this.el.removeEventListener("mouseup", this._mouseupHandler, Q);
  }
}
class Ko {
  constructor(t, e, s = {}) {
    const {
      threshold: r = 50,
      isDetectOnStart: l = !1,
      isPreventDefault: u = !1,
      onStart: c,
      onUpdate: d,
      reset: p
    } = s;
    (this.el = t),
      (this._callback = e),
      (this._threshold = r),
      (this._isPreventDefault = u),
      (this._onStart = c),
      (this._onUpdate = l ? e : d),
      (this.reset = p),
      (this._type = "swipe"),
      (this._isStart = !1),
      (this._touchstartHandler = this._onTouchstart.bind(this)),
      this.el.addEventListener("touchstart", this._touchstartHandler, Q),
      (this._touchmoveHandler = this._onTouchmove.bind(this)),
      this.el.addEventListener(
        "touchmove",
        this._touchmoveHandler,
        this._isPreventDefault ? !1 : Q
      ),
      (this._touchendHandler = this._onTouchend.bind(this)),
      this.el.addEventListener("touchend", this._touchendHandler, Q);
  }
  _onTouchstart(t) {
    (this._isStart = !0),
      (this._startPosition = Ie(t)),
      this._onStart && this._onStart(this._startPosition, this._type);
  }
  _onTouchmove(t) {
    if (
      this._isStart &&
      (this._isPreventDefault && t.preventDefault(), this._onUpdate)
    ) {
      const e = Ie(t),
        s = e.y - this._startPosition.y,
        r = e.x - this._startPosition.x;
      let l;
      Math.abs(s) >= Math.abs(r)
        ? s < 0
          ? (l = "Down")
          : s > 0 && (l = "Up")
        : r < 0
        ? (l = "Right")
        : r > 0 && (l = "Left"),
        this._onUpdate({
          e: t,
          diff: { y: s, x: r },
          direction: l,
          type: this._type
        });
    }
  }
  _onTouchend(t) {
    if (!this._isStart) return;
    const e = Ie(t),
      s = e.y - this._startPosition.y,
      r = e.x - this._startPosition.x;
    let l;
    if (Math.abs(s) >= Math.abs(r)) {
      if (s < -this._threshold) l = "Down";
      else if (s > this._threshold) l = "Up";
      else if (this.reset) {
        this.reset(s, this._type), (this._isStart = !1);
        return;
      }
    } else if (r < -this._threshold) l = "Right";
    else if (r > this._threshold) l = "Left";
    else if (this.reset) {
      this.reset(r, this._type), (this._isStart = !1);
      return;
    }
    this._callback({
      e: t,
      diff: { y: s, x: r },
      direction: l,
      type: this._type
    }),
      (this._isStart = !1);
  }
  destroy() {
    this.el.removeEventListener("touchstart", this._touchstartHandler, Q),
      this.el.removeEventListener(
        "touchmove",
        this._touchmoveHandler,
        this._isPreventDefault ? !1 : Q
      ),
      this.el.removeEventListener("touchend", this._touchendHandler, Q);
  }
}
class mc {
  constructor(t) {
    (this._callback = t),
      (this._type = "keyboard"),
      (this._handlerKeydown = this._onKeydown.bind(this)),
      document.addEventListener("keydown", this._handlerKeydown),
      (this._handlerKeyup = this._onKeyup.bind(this)),
      document.addEventListener("keyup", this._handlerKeyup);
  }
  _onKeydown(t) {
    const { key: e } = t;
    if (this._downedKey && e !== this._downedKey) return;
    this._downedKey = e;
    let s;
    switch (e) {
      case "ArrowDown":
      case "PageDown":
      case "Down":
        s = "Down";
        break;
      case "ArrowUp":
      case "PageUp":
      case "Up":
        s = "Up";
        break;
      case "ArrowLeft":
      case "Left":
        s = "Left";
        break;
      case "ArrowRight":
      case "Right":
        s = "Right";
        break;
      case "Escape":
      case "Esc":
        s = "Escape";
        break;
    }
    this._callback({
      e: t,
      diff: { y: 0, x: 0 },
      direction: s,
      type: this._type
    });
  }
  _onKeyup({ key: t }) {
    this._downedKey = null;
  }
  destroy() {
    document.removeEventListener("keydown", this._handlerKeydown),
      document.removeEventListener("keyup", this._handlerKeyup);
  }
}
class Sg {
  constructor(t, e, s = {}) {
    const {
      thresholdWheel: r,
      thresholdDrag: l,
      thresholdSwipe: u,
      isDetectOnStart: c = !1,
      isPreventDefault: d,
      onStart: p,
      onUpdate: m,
      reset: _,
      disableWheel: g = !1,
      disableDrag: y = !1,
      disableSwipe: w = !1,
      disableKeyboard: v = !1
    } = s;
    g ||
      (this.wheel = new pc(t, e, {
        threshold: r,
        reset: _,
        isPreventDefault: d
      })),
      y ||
        (this.drag = new fc(t, e, {
          threshold: l,
          isDetectOnStart: c,
          isPreventDefault: d,
          onStart: p,
          onUpdate: m,
          reset: _
        })),
      w ||
        (this.swipe = new Ko(t, e, {
          threshold: u,
          isDetectOnStart: c,
          isPreventDefault: d,
          onStart: p,
          onUpdate: m,
          reset: _
        })),
      v || (this.keyboard = new mc(e));
  }
  destroy() {
    this.wheel && this.wheel.destroy(),
      this.drag && this.drag.destroy(),
      this.swipe && this.swipe.destroy(),
      this.keyboard && this.keyboard.destroy();
  }
}
class _t {
  constructor(t = {}) {
    var _this$el;
    _defineProperty(this, "el", void 0);
    _defineProperty(this, "refs", {});
    _defineProperty(this, "isDisableAutoPlayScroll", void 0);
    _defineProperty(this, "isDisableAutoResize", void 0);
    _defineProperty(this, "isAutoPlayTick", void 0);
    _defineProperty(this, "isPermanent", void 0);
    _defineProperty(this, "cacheValue", void 0);
    _defineProperty(this, "option", void 0);
    _defineProperty(this, "isManual", void 0);
    _defineProperty(this, "isManualInit", void 0);
    _defineProperty(this, "isPage", void 0);
    _defineProperty(this, "isPlayTick", !1);
    _defineProperty(this, "isPlayScroll", !1);
    _defineProperty(this, "isDestroyed", !1);
    _defineProperty(this, "listeners", {});
    _defineProperty(this, "_intersectionObservers", []);
    _defineProperty(this, "_pageId", void 0);
    _defineProperty(this, "_onInit", void 0);
    _defineProperty(this, "_destroy", void 0);
    _defineProperty(this, "_destroyCompletely", void 0);
    _defineProperty(this, "_onScrollNative", void 0);
    _defineProperty(this, "_wheel", void 0);
    _defineProperty(this, "_drag", void 0);
    _defineProperty(this, "_swipe", void 0);
    _defineProperty(this, "_keyboard", void 0);
    _defineProperty(this, "_gesture", void 0);
    _defineProperty(this, "_initComponentsOnMutation", void 0);
    const e = this.constructor,
      { componentName: s } = e;
    let { selectorRoot: r } = e;
    const {
      el: l,
      context: u = document,
      isAutoPlayTick: c = e.isAutoPlayTick || !1,
      isDisableAutoPlayScroll: d = e.isDisableAutoPlayScroll || !1,
      isDisableAutoResize: p = e.isDisableAutoResize || !1,
      isPermanent: m = e.isPermanent || !1,
      isManual: _ = e.isManual || !1,
      isManualInit: g = e.isManualInit || !1,
      isPage: y = e.isPage || !1,
      cacheValue: w = s || r || e.name
    } = t;
    (this.isDisableAutoPlayScroll = d),
      (this.isDisableAutoResize = p),
      (this.isAutoPlayTick = c),
      (this.isPermanent = m),
      (this.isManual = _),
      (this.isManualInit = g),
      (this.isPage = y),
      (this.cacheValue = w),
      (this.option = t),
      l
        ? (this.el = l)
        : (!r && s && (r = `.${s}, [data-el="${s}"]`),
          (this.el = u.querySelector(r)));
    const v =
      (_this$el = this.el) === null ||
      _this$el === void 0 ||
      (_this$el = _this$el.classList.value) === null ||
      _this$el === void 0 ||
      (_this$el = _this$el.match(/astro-\w+/g)) === null ||
      _this$el === void 0
        ? void 0
        : _this$el.slice(-1)[0];
    if (
      (this.el &&
        (this.isManual = "manual" in this.el.dataset || this.isManual),
      this.el && (s || v))
    ) {
      const D = s && `${s}-`;
      this.el
        .querySelectorAll(
          `${
            v ? `.${v}[data-ref], ` : ""
          }[data-ref][class*="${D}"], [data-ref^="${D}"]`
        )
        .forEach((S) => {
          var _S$dataset;
          let C =
            ((_S$dataset = S.dataset) === null || _S$dataset === void 0
              ? void 0
              : _S$dataset.ref) ||
            [...S.classList].find((k) => k.startsWith(D)) ||
            S.classList[0];
          C = C.replace(D, "");
          const P = this.refs[C];
          P
            ? Array.isArray(P)
              ? P.push(S)
              : P && (this.refs[C] = [P, S])
            : (this.refs[C] = S);
        });
    }
    if (
      (this.onMount && this.onMount(),
      this.onResizeFirst &&
        ((this.onResizeFirst = this.onResizeFirst.bind(this)),
        z.on("resizeFirst", this.onResizeFirst)),
      this.onResetSize &&
        ((this.onResetSize = this.onResetSize.bind(this)),
        Au(this.onResetSize, !0)),
      this.onResizeNative &&
        ((this.onResizeNative = this.onResizeNative.bind(this)),
        ku(this.onResizeNative, !0)),
      this.onResizeAlways &&
        ((this.onResizeAlways = this.onResizeAlways.bind(this)),
        Mu(this.onResizeAlways, !0)),
      this.onOrientationchange &&
        ((this.onOrientationchange = this.onOrientationchange.bind(this)),
        Fu(this.onOrientationchange, !0)),
      this.onTick &&
        ((this.onTick = this.onTick.bind(this)),
        this.isAutoPlayTick &&
          requestAnimationFrame(() => {
            this.playTick();
          })),
      this.el)
    ) {
      const D = E.componentCache.get(this.el);
      D ? D.push(w) : E.componentCache.set(this.el, [w]),
        this.onClick &&
          ((this.onClick = this.onClick.bind(this)),
          this.el.addEventListener("click", this.onClick)),
        this.onMouseenter &&
          (this.onMouseenter = zo(this.el, this.onMouseenter.bind(this))),
        this.onMousemove &&
          (this.onMousemove = wg(this.el, this.onMousemove.bind(this))),
        this.onMouseleave &&
          (this.onMouseleave = Ho(this.el, this.onMouseleave.bind(this))),
        this.onWheel &&
          ((this.onWheel = this.onWheel.bind(this)),
          (this._wheel = new pc(
            this.el,
            this.onWheel,
            this.option.wheelOptions || e.wheelOptions
          ))),
        this.onDrag &&
          ((this.onDrag = this.onDrag.bind(this)),
          (this._drag = new fc(
            this.el,
            this.onDrag,
            this.option.dragOptions || e.dragOptions
          ))),
        this.onSwipe &&
          ((this.onSwipe = this.onSwipe.bind(this)),
          (this._swipe = new Ko(
            this.el,
            this.onSwipe,
            this.option.swipeOptions || e.swipeOptions
          ))),
        this.onKeyboard &&
          ((this.onKeyboard = this.onKeyboard.bind(this)),
          (this._keyboard = new mc(this.onKeyboard))),
        this.onGesture &&
          ((this.onGesture = this.onGesture.bind(this)),
          (this._gesture = new Sg(
            this.el,
            this.onGesture,
            this.option.gestureOptions || e.gestureOptions
          )));
    }
    this.onMousedownDocument &&
      ((this.onMousedownDocument = this.onMousedownDocument.bind(this)),
      tc(this.onMousedownDocument)),
      this.onMousemoveDocument &&
        ((this.onMousemoveDocument = this.onMousemoveDocument.bind(this)),
        ic(this.onMousemoveDocument)),
      this.onMouseupDocument &&
        ((this.onMouseupDocument = this.onMouseupDocument.bind(this)),
        nc(this.onMouseupDocument)),
      this.onBeforeResetModalStyle &&
        ((this.onBeforeResetModalStyle =
          this.onBeforeResetModalStyle.bind(this)),
        z.on("beforeResetModalStyle", this.onBeforeResetModalStyle)),
      this.onOpenModal &&
        ((this.onOpenModal = this.onOpenModal.bind(this)),
        z.on("openModal", this.onOpenModal)),
      this.onStartOpenModal &&
        ((this.onStartOpenModal = this.onStartOpenModal.bind(this)),
        z.on("startOpenModal", this.onStartOpenModal)),
      this.onCompleteOpenModal &&
        ((this.onCompleteOpenModal = this.onCompleteOpenModal.bind(this)),
        z.on("completeOpenModal", this.onCompleteOpenModal)),
      this.onCloseModal &&
        ((this.onCloseModal = this.onCloseModal.bind(this)),
        z.on("closeModal", this.onCloseModal)),
      this.onStartCloseModal &&
        ((this.onStartCloseModal = this.onStartCloseModal.bind(this)),
        z.on("startCloseModal", this.onStartCloseModal)),
      this.onCompleteCloseModal &&
        ((this.onCompleteCloseModal = this.onCompleteCloseModal.bind(this)),
        z.on("completeCloseModal", this.onCompleteCloseModal)),
      this.onLoadProgress &&
        ((this.onLoadProgress = this.onLoadProgress.bind(this)),
        lc(this.onLoadProgress)),
      this.onLoadDone &&
        ((this.onLoadDone = this.onLoadDone.bind(this)), uc(this.onLoadDone)),
      E.cScroll
        ? this.initScroll()
        : z.once("initPageJs", () => {
            this.initScroll();
          }),
      (this._onInit = () => {
        !this.isManual &&
          this.onIntersect &&
          this.el &&
          ((this.onIntersect = this.onIntersect.bind(this)),
          this.addIntersectionObserver({
            el: this.el,
            callback: this.onIntersect,
            param: this.option.intersectOptions || e.intersectOptions,
            once: this.option.intersectOnce || e.intersectOnce
          })),
          this.onInit && this.onInit();
      }),
      this.isPermanent ||
        ((this._destroy = (D) => {
          (!this.isPage && this._pageId !== D) || this.destroySelf();
        }),
        z.on("destroy", this._destroy),
        (this._destroyCompletely = (D) => {
          (!this.isPage && this._pageId !== D) || this.destroyCompletely();
        }),
        z.on("destroyCompletely", this._destroyCompletely));
  }
  initScroll() {
    this.onScrollNative &&
      ((this._onScrollNative = () => {
        this.onScrollNative(window.scrollY);
      }),
      window.addEventListener("scroll", this._onScrollNative, Q)),
      this.onScrollThrottle &&
        ((this.onScrollThrottle = this.onScrollThrottle.bind(this)),
        pv(this.onScrollThrottle)),
      this.onScroll &&
        ((this.onScroll = this.onScroll.bind(this)),
        this.isDisableAutoPlayScroll ||
          requestAnimationFrame(() => {
            this.playScroll();
          })),
      this.onVirtualScroll &&
        ((this.onVirtualScroll = this.onVirtualScroll.bind(this)),
        E.cScroll.onVirtualScroll(this.onVirtualScroll)),
      this.onResize &&
        ((this.onResize = this.onResize.bind(this)),
        E.cScroll.onResize(this.onResize));
  }
  get isPc() {
    return !At.isSp;
  }
  get isSp() {
    return At.isSp;
  }
  get isTb() {
    return At.isTb;
  }
  get isTbPortrait() {
    return At.isTbPortrait;
  }
  get isPortrait() {
    return At.isPortrait;
  }
  get scrollY() {
    return E.scrollY;
  }
  get scrollYSmooth() {
    return E.scrollYSmooth;
  }
  get scrollYNative() {
    return E.scrollYNative;
  }
  emit(t, ...e) {
    z.emit(t, ...e);
  }
  on(t, e) {
    (this.listeners[t] = e), z.on(t, e);
  }
  once(t, e) {
    (this.listeners[t] = e), z.once(t, e);
  }
  off(t, e) {
    z.off(t, e);
  }
  emitResize() {
    const t = He();
    (t.isForce = !0),
      this.onResetSize && this.onResetSize(t),
      this.onResizeNative && this.onResizeNative(t),
      this.onResizeAlways && this.onResizeAlways(t);
  }
  emitResizeAll() {
    E.cScroll.update();
  }
  emitSelfResize() {
    this.onResize && this.onResize(He());
  }
  addIntersectionObserver({ el: t, callback: e, param: s, once: r }) {
    const l = E.cIntersecting.add({
      el: t,
      callback: (u) => {
        e(u, E.scrollDirection);
      },
      param: s,
      once: r
    });
    return l && this._intersectionObservers.push(l), l;
  }
  playTick() {
    !this.onTick ||
      this.isPlayTick ||
      this.isDestroyed ||
      ((this.isPlayTick = !0), bt.ticker.add(this.onTick));
  }
  pauseTick() {
    !this.onTick ||
      !this.isPlayTick ||
      ((this.isPlayTick = !1), bt.ticker.remove(this.onTick));
  }
  playScroll() {
    !this.onScroll ||
      this.isPlayScroll ||
      this.isDestroyed ||
      ((this.isPlayScroll = !0), E.cScroll.onAnimateScroll(this.onScroll));
  }
  pauseScroll() {
    !this.onScroll ||
      !this.isPlayScroll ||
      ((this.isPlayScroll = !1), E.cScroll.offAnimateScroll(this.onScroll));
  }
  scrollTo(...t) {
    return E.cScroll.scrollTo(...t);
  }
  get isSmoothScroll() {
    return E.cScroll.isSmooth;
  }
  initComponentsOnMutation(t = this.el) {
    this._initComponentsOnMutation = $v(t);
  }
  destroySelf() {
    this._onDestroy(), z.off("destroy", this._destroy);
  }
  _onDestroy() {
    (this.isDestroyed = !0),
      this.onResizeFirst &&
        (z.off("resizeFirst", this.onResizeFirst),
        (this.onResizeFirst = void 0)),
      this.onResetSize && (Ou(this.onResetSize), (this.onResetSize = void 0)),
      this.onResizeNative &&
        (Lu(this.onResizeNative), (this.onResizeNative = void 0)),
      this.onResizeAlways &&
        (Tu(this.onResizeAlways), (this.onResizeAlways = void 0)),
      this.onOrientationchange &&
        (Ru(this.onOrientationchange), (this.onOrientationchange = void 0)),
      this.onTick && (this.pauseTick(), (this.onTick = void 0)),
      this.el &&
        (E.componentCache.set(
          this.el,
          E.componentCache.get(this.el).filter((t) => t !== this.cacheValue)
        ),
        this.onClick && this.el.removeEventListener("click", this.onClick),
        this.onMouseenter &&
          (oc(this.el, this.onMouseenter), (this.onMouseenter = void 0)),
        this.onMousemove &&
          (yg(this.el, this.onMousemove), (this.onMousemove = void 0)),
        this.onMouseleave &&
          (ac(this.el, this.onMouseleave), (this.onMouseleave = void 0)),
        this._wheel &&
          (this._wheel.destroy(),
          (this._wheel = void 0),
          (this.onWheel = void 0)),
        this._drag &&
          (this._drag.destroy(), (this._drag = void 0), (this.onDrag = void 0)),
        this._swipe &&
          (this._swipe.destroy(),
          (this._swipe = void 0),
          (this.onSwipe = void 0)),
        this._keyboard &&
          (this._keyboard.destroy(),
          (this._keyboard = void 0),
          (this.onKeyboard = void 0)),
        this._gesture &&
          (this._gesture.destroy(),
          (this._gesture = void 0),
          (this.onGesture = void 0))),
      this.onMousedownDocument &&
        (ec(this.onMousedownDocument), (this.onMousedownDocument = void 0)),
      this.onMousemoveDocument &&
        (sc(this.onMousemoveDocument), (this.onMousemoveDocument = void 0)),
      this.onMouseupDocument &&
        (rc(this.onMouseupDocument), (this.onMouseupDocument = void 0)),
      this.onBeforeResetModalStyle &&
        (z.off("beforeResetModalStyle", this.onBeforeResetModalStyle),
        (this.onBeforeResetModalStyle = void 0)),
      this.onOpenModal &&
        (z.off("openModal", this.onOpenModal), (this.onOpenModal = void 0)),
      this.onStartOpenModal &&
        (z.off("startOpenModal", this.onStartOpenModal),
        (this.onStartOpenModal = void 0)),
      this.onCompleteOpenModal &&
        (z.off("completeOpenModal", this.onCompleteOpenModal),
        (this.onCompleteOpenModal = void 0)),
      this.onCloseModal &&
        (z.off("closeModal", this.onCloseModal), (this.onCloseModal = void 0)),
      this.onStartCloseModal &&
        (z.off("startCloseModal", this.onStartCloseModal),
        (this.onStartCloseModal = void 0)),
      this.onCompleteCloseModal &&
        (z.off("completeCloseModal", this.onCompleteCloseModal),
        (this.onCompleteCloseModal = void 0)),
      this.onLoadProgress &&
        (hc(this.onLoadProgress), (this.onLoadProgress = void 0)),
      this.onLoadDone && (cc(this.onLoadDone), (this.onLoadDone = void 0)),
      this._onScrollNative &&
        window.removeEventListener("scroll", this._onScrollNative),
      this.onScrollThrottle &&
        (fv(this.onScrollThrottle), (this.onScrollThrottle = void 0)),
      this.onScroll && (this.pauseScroll(), (this.onScroll = void 0)),
      this.onVirtualScroll &&
        (E.cScroll.offVirtualScroll(this.onVirtualScroll),
        (this.onVirtualScroll = void 0)),
      this.onResize &&
        (E.cScroll.offResize(this.onResize), (this.onResize = void 0)),
      this._intersectionObservers.forEach((t) => {
        t === null || t === void 0 || t.destroy();
      }),
      (this._intersectionObservers = []),
      this.onIntersect && (this.onIntersect = void 0),
      this._initComponentsOnMutation &&
        this._initComponentsOnMutation.destroy(),
      Object.keys(this.listeners).forEach((t) => {
        z.off(t, this.listeners[t]);
      });
  }
  destroyCompletely() {
    this.onDestroy && (this.onDestroy(), (this.onDestroy = void 0)),
      z.off("destroyCompletely", this._destroyCompletely),
      (this.el = void 0);
  }
  destroy() {
    this.destroySelf(), this.destroyCompletely();
  }
  static create(t, e = {}, s) {
    var _E$componentCache$get;
    const r = s || this.componentName || this.selectorRoot || this.name;
    if (
      !e.isForce &&
      (_E$componentCache$get = E.componentCache.get(t)) !== null &&
      _E$componentCache$get !== void 0 &&
      _E$componentCache$get.some((u) => u === r)
    )
      return;
    e.cacheValue = r;
    const l = new this({ el: t, ...e });
    if (((l._pageId = E.pageId), !l.isManualInit)) {
      const u = () => {
        l._onInit();
      };
      E.isTransitioned && !E.isLoadedStyles ? z.once("loadedStyles", u) : u();
    }
    return l;
  }
  static createAll(t = document, e = {}) {
    !this.selectorRoot &&
      this.componentName &&
      (this.selectorRoot = `.${this.componentName}, [data-el="${this.componentName}"]`);
    const { selector: s = this.selectorRoot } = e;
    return Array.prototype.map.call(t.querySelectorAll(s), (r) =>
      this.create(r, e)
    );
  }
  static register({ delay: t, priority: e, isLocal: s } = {}) {
    this.isPermanent
      ? Uv(this, { delay: t, priority: e })
      : s || this.isLocal
      ? Wl(this, { delay: t, priority: e, isLocal: !0 })
      : Wl(this, { delay: t, priority: e });
  }
}
_defineProperty(_t, "isPermanent", void 0);
_defineProperty(_t, "isLocal", void 0);
_defineProperty(_t, "isManual", void 0);
_defineProperty(_t, "isManualInit", void 0);
_defineProperty(_t, "isPage", void 0);
_defineProperty(_t, "isAutoPlayTick", void 0);
_defineProperty(_t, "isDisableAutoPlayScroll", void 0);
_defineProperty(_t, "isDisableAutoResize", void 0);
_defineProperty(_t, "componentName", void 0);
_defineProperty(_t, "selectorRoot", void 0);
_defineProperty(_t, "intersectOptions", void 0);
_defineProperty(_t, "intersectOnce", void 0);
_defineProperty(_t, "wheelOptions", void 0);
_defineProperty(_t, "dragOptions", void 0);
_defineProperty(_t, "swipeOptions", void 0);
_defineProperty(_t, "gestureOptions", void 0);
const Pn = (n) => {
    n.preventDefault();
  },
  kn = { passive: !1 };
function Eg() {
  window.addEventListener("touchmove", Pn, kn),
    window.addEventListener("wheel", Pn, kn);
}
function Pg() {
  window.removeEventListener("touchmove", Pn, kn),
    window.removeEventListener("wheel", Pn, kn);
}
const Tr = {
  smoothWheel: !0,
  duration: 1.2,
  easing: (n) => Math.min(1, 1.001 - Math.pow(2, -10 * n)),
  wheelMultiplier: 1,
  touchMultiplier: 2,
  ease: [0.25, 0, 0.35, 1],
  durationScrollTo: 1
};
bt.registerPlugin(Us);
class kg {
  constructor(t = document.body) {
    _defineProperty(this, "isPermanent", !0);
    _defineProperty(this, "el", void 0);
    _defineProperty(this, "_scroll", void 0);
    _defineProperty(this, "scrollYSmoothOwn", 0);
    _defineProperty(this, "isHorizontal", !1);
    _defineProperty(this, "isSmooth", !1);
    _defineProperty(this, "_isMousemove", !1);
    _defineProperty(this, "_callbackScroll", void 0);
    _defineProperty(this, "listenersResizeSelf", []);
    _defineProperty(this, "listenersVirtualScroll", []);
    _defineProperty(this, "_callbackListCall", []);
    _defineProperty(this, "_isInitVirtualScroll", !1);
    _defineProperty(this, "_onTick", void 0);
    _defineProperty(this, "_onLeave", void 0);
    _defineProperty(this, "_onDestroy", void 0);
    _defineProperty(this, "handleResize", void 0);
    const {
      smoothWheel: e,
      duration: s,
      easing: r,
      wheelMultiplier: l,
      touchMultiplier: u
    } = Tr;
    (this.el = t),
      (this.isPermanent = this.constructor.isPermanent),
      (this._onTick = this.onTick.bind(this)),
      (this._onLeave = this.onLeave.bind(this)),
      (this._onDestroy = this.onDestroy.bind(this));
    const c = this.el.dataset.scrollDirection || "vertical";
    this.isHorizontal = c === "horizontal";
    const d = this.isHorizontal ? "both" : "vertical";
    (this._scroll =
      new _g({
        duration: s,
        easing: r,
        orientation: c,
        gestureOrientation: d,
        smoothWheel: e,
        wheelMultiplier: l,
        smoothTouch: !1,
        touchMultiplier: u,
        infinite: !1
      }) || null),
      this._updateIsSmooth(),
      this._addEventListener(),
      (this.handleResize = Fo(() => {
        E.isOpenModal || this.updateResize();
      })),
      z.emit("initCScroll"),
      bt.ticker.add(this._onTick);
  }
  scrollTo(t = 0, e) {
    if (!this._scroll) return;
    E.isScrollAnimating = !0;
    const { immediate: s = !1, disableOffset: r = !1, onComplete: l } = e || {};
    return (
      (e.offset = r ? 0 : this._getOffsetY()),
      (e.duration = s
        ? void 0
        : "duration" in e
        ? e.duration
        : Tr.durationScrollTo),
      (e.easing = s ? void 0 : "easing" in e ? e.easing : Tr.easing),
      new Promise((u) => {
        (e.onComplete = () => {
          (E.isScrollAnimating = !1),
            (this.scrollYSmoothOwn = E.scrollY = this._scroll.scroll),
            l && l !== null && l !== void 0 && l(),
            u();
        }),
          this._scroll.scrollTo(t, e);
      })
    );
  }
  scrollToId(t, e) {
    const s = t === "top" ? 0 : `#${t}`;
    return this.scrollTo(s, e);
  }
  scrollToImmediate(t, e = {}) {
    return (e.immediate = !0), this.scrollTo(t, e);
  }
  scrollToAnchor(t) {
    if (location.hash) {
      const e = location.hash.slice(1, location.hash.length),
        s = document.getElementById(e);
      return this.scrollTo(s || 0, t);
    } else return this.scrollTo(0, t);
  }
  scrollToPrevPagePosition(t = {}) {
    return (
      (t.disableOffset = !0),
      this.scrollToImmediate(this.getStorageScrollY(), t)
    );
  }
  onAnimateScroll(t) {
    this._scroll.on("scroll", t), z.on("updateScroll", t);
  }
  offAnimateScroll(t) {
    this._scroll.off("scroll", t), z.off("updateScroll", t);
  }
  _initVirtualScroll() {
    this._isInitVirtualScroll ||
      ((this._isInitVirtualScroll = !0),
      this._scroll.virtualScroll.on("scroll", (t) => {
        for (let e = 0; e < this.listenersVirtualScroll.length; e = (e + 1) | 0)
          this.listenersVirtualScroll[e](t);
      }));
  }
  onVirtualScroll(t) {
    this._isInitVirtualScroll || this._initVirtualScroll(),
      this.listenersVirtualScroll.push(t);
  }
  onceVirtualScroll(t) {
    const e = (s) => {
      this.offVirtualScroll(e), t(s);
    };
    this.onVirtualScroll(e);
  }
  offVirtualScroll(t) {
    this.listenersVirtualScroll.some((e, s) =>
      e === t ? (this.listenersVirtualScroll.splice(s, 1), !0) : !1
    );
  }
  start() {
    this._scroll && (this._scroll.start(), Pg());
  }
  stop() {
    this._scroll && (this._scroll.stop(), Eg());
  }
  enable() {
    this._scroll && (bt.ticker.add(this._onTick), this.start());
  }
  disable() {
    this._scroll && (this.stop(), bt.ticker.remove(this._onTick));
  }
  update() {
    this._scroll && (this._scroll.emit(), this.handleResize());
  }
  _updateIsSmooth() {
    this._scroll &&
      ((this.isSmooth = this._scroll.isSmooth),
      document.documentElement.classList[this.isSmooth ? "remove" : "add"](
        "sDisableSmoothScroll"
      ));
  }
  onResize(t) {
    this.listenersResizeSelf.push(t);
  }
  onceResize(t) {
    const e = (s) => {
      this.offResize(e), t(s);
    };
    this.onResize(e);
  }
  offResize(t) {
    this.listenersResizeSelf.some((e, s) =>
      e === t ? (this.listenersResizeSelf.splice(s, 1), !0) : !1
    );
  }
  setResizeObserver() {
    const { el: t } = this;
    new ResizeObserver((s) => {
      for (const r of s) r.target === t && this.handleResize();
    }).observe(t);
  }
  updateResize() {
    const t = He();
    for (let e = 0; e < this.listenersResizeSelf.length; e = (e + 1) | 0)
      this.listenersResizeSelf[e](t);
    z.emit("updateScroll", this._scroll);
  }
  _getOffsetY() {
    const t = document.querySelector(
      `[data-anchor-offset="${At.isSp ? "sp" : "pc"}"]`
    );
    return t ? -t.getBoundingClientRect().bottom : 0;
  }
  onMousemove() {
    this._isMousemove = !0;
  }
  onMouseleave() {
    this._isMousemove = !1;
  }
  _addEventListener() {
    (this._callbackScroll = (t) => {
      (this.scrollYSmoothOwn = E.scrollY = t.scroll),
        fe && this._isMousemove && (E.scrollDirection = t.direction);
    }),
      this._scroll.on("scroll", this._callbackScroll),
      window.addEventListener("pagehide", () => {
        this.setStorageScrollY();
      }),
      z.on("leave", this._onLeave),
      this.isPermanent || z.on("destroyCompletely", this._onDestroy),
      !this.isSmooth &&
        this.isHorizontal &&
        this.el.addEventListener(
          "wheel",
          ({ deltaY: t }) => {
            this.el.scrollBy(t, 0);
          },
          Q
        );
  }
  setStorageScrollY(t = E.historyCount) {
    const e = JSON.parse(
      sessionStorage.getItem("historyScrollPosition") || "{}"
    );
    (e[t] = this.scrollYSmoothOwn),
      sessionStorage.setItem("historyScrollPosition", JSON.stringify(e));
  }
  getStorageScrollY() {
    const t = JSON.parse(
      sessionStorage.getItem("historyScrollPosition") || "{}"
    );
    return Number(t[E.historyCount]) || location.hash || 0;
  }
  get limit() {
    var _this$_scroll;
    return (_this$_scroll = this._scroll) === null || _this$_scroll === void 0
      ? void 0
      : _this$_scroll.limit;
  }
  checkScroll() {
    this._scroll.scroll.checkScroll(!0);
  }
  onTick(t) {
    this._scroll.raf(t * 1e3);
  }
  onLeave() {
    this.setStorageScrollY(E.prevHistoryCount);
  }
  onDestroy() {
    this._scroll.off("scroll", this._callbackScroll), this._scroll.destroy();
  }
}
_defineProperty(kg, "isPermanent", !0);
tg({ Scroll: kg, transitions: { default: dg } });
class Kw extends _t {
  constructor(t = {}) {
    const { el: e = E.view || document.body } = t;
    (t.isManual = !0),
      super({ el: e, ...t }),
      this.onInit &&
        (E.isLoadedStyles
          ? this.onInit()
          : z.once("loadedStyles", () => {
              this.onInit();
            }));
  }
  static register() {
    Gv(this), z.emit("readyPage");
  }
}
_defineProperty(Kw, "isPage", !0);
((_Class = class extends _t {
  onInit() {
    (this.arrowDefault = this.refs["arrow-default"]),
      (this.arrowHover = this.refs["arrow-hover"]),
      this.el.dataset.container
        ? (this.mouseEventTarget = this.el.closest(
            "." + this.el.dataset.container
          ))
        : (this.mouseEventTarget = this.el),
      (this.onMouseenter = zo(
        this.mouseEventTarget,
        this.mouseenterHandler.bind(this)
      )),
      (this.onMouseenter = Ho(
        this.mouseEventTarget,
        this.mouseleaveHandler.bind(this)
      ));
  }
  mouseenterHandler() {
    this.mouseEventTarget.classList.remove(
      "-hoverButton",
      "-hoverButtonComplete",
      "-blurButton"
    ),
      setTimeout(
        () => this.mouseEventTarget.classList.add("-hoverButton"),
        100
      ),
      this.hoverTween && this.hoverTween.kill(),
      (this.hoverTween = Z.to(this.el, {
        duration: 0.8,
        onComplete: () => {
          this.mouseEventTarget.classList.add("-hoverButtonComplete");
        }
      }));
  }
  mouseleaveHandler() {
    this.mouseEventTarget.classList.remove("-hoverButton"),
      this.mouseEventTarget.classList.add("-hoverButtonComplete"),
      setTimeout(() => this.mouseEventTarget.classList.add("-blurButton"), 100),
      this.hoverTween && this.hoverTween.kill(),
      (this.hoverTween = Z.to(this.el, {
        duration: 0.8,
        onComplete: () => {
          this.mouseEventTarget.classList.remove(
            "-hoverButton",
            "-hoverButtonComplete",
            "-blurButton"
          );
        }
      }));
  }
  onDestroy() {
    this.hoverTween && (this.hoverTween.kill(), (this.hoverTween = void 0));
  }
}),
_defineProperty(_Class, "componentName", "Button"),
_Class).register();
/*!
 * strings: 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Lg =
  /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function _c(n) {
  var t = n.nodeType,
    e = "";
  if (t === 1 || t === 9 || t === 11) {
    if (typeof n.textContent == "string") return n.textContent;
    for (n = n.firstChild; n; n = n.nextSibling) e += _c(n);
  } else if (t === 3 || t === 4) return n.nodeValue;
  return e;
}
/*!
 * SplitText: 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Si,
  oo,
  vc,
  us,
  gc,
  On,
  Mg = /(?:\r|\n|\t\t)/g,
  Tg = /(?:\s\s+)/g,
  bc = function (t) {
    (Si = document),
      (oo = window),
      (us =
        us ||
        t ||
        oo.gsap ||
        console.warn("Please gsap.registerPlugin(SplitText)")),
      us &&
        ((On = us.utils.toArray),
        (gc = us.core.context || function () {}),
        (vc = 1));
  },
  wc = function (t) {
    return oo.getComputedStyle(t);
  },
  jo = function (t) {
    return t.position === "absolute" || t.absolute === !0;
  },
  Ag = function (t, e) {
    for (var s = e.length, r; --s > -1; )
      if (((r = e[s]), t.substr(0, r.length) === r)) return r.length;
  },
  Og = " style='position:relative;display:inline-block;'",
  sh = function (t, e) {
    t === void 0 && (t = "");
    var s = ~t.indexOf("++"),
      r = 1;
    return (
      s && (t = t.split("++").join("")),
      function () {
        return (
          "<" + e + Og + (t ? " class='" + t + (s ? r++ : "") + "'>" : ">")
        );
      }
    );
  },
  yc = function n(t, e, s) {
    var r = t.nodeType;
    if (r === 1 || r === 9 || r === 11)
      for (t = t.firstChild; t; t = t.nextSibling) n(t, e, s);
    else (r === 3 || r === 4) && (t.nodeValue = t.nodeValue.split(e).join(s));
  },
  Ar = function (t, e) {
    for (var s = e.length; --s > -1; ) t.push(e[s]);
  },
  nh = function (t, e, s) {
    for (var r; t && t !== e; ) {
      if (((r = t._next || t.nextSibling), r))
        return r.textContent.charAt(0) === s;
      t = t.parentNode || t._parent;
    }
  },
  Fg = function n(t) {
    var e = On(t.childNodes),
      s = e.length,
      r,
      l;
    for (r = 0; r < s; r++)
      (l = e[r]),
        l._isSplit
          ? n(l)
          : r && l.previousSibling && l.previousSibling.nodeType === 3
          ? ((l.previousSibling.nodeValue +=
              l.nodeType === 3 ? l.nodeValue : l.firstChild.nodeValue),
            t.removeChild(l))
          : l.nodeType !== 3 &&
            (t.insertBefore(l.firstChild, l), t.removeChild(l));
  },
  te = function (t, e) {
    return parseFloat(e[t]) || 0;
  },
  Rg = function (t, e, s, r, l, u, c) {
    var d = wc(t),
      p = te("paddingLeft", d),
      m = -999,
      _ = te("borderBottomWidth", d) + te("borderTopWidth", d),
      g = te("borderLeftWidth", d) + te("borderRightWidth", d),
      y = te("paddingTop", d) + te("paddingBottom", d),
      w = te("paddingLeft", d) + te("paddingRight", d),
      v = te("fontSize", d) * (e.lineThreshold || 0.2),
      D = d.textAlign,
      S = [],
      C = [],
      P = [],
      k = e.wordDelimiter || " ",
      A = e.tag ? e.tag : e.span ? "span" : "div",
      O = e.type || e.split || "chars,words,lines",
      L = l && ~O.indexOf("lines") ? [] : null,
      T = ~O.indexOf("words"),
      M = ~O.indexOf("chars"),
      B = jo(e),
      V = e.linesClass,
      G = ~(V || "").indexOf("++"),
      j = [],
      et = d.display === "flex",
      $ = t.style.display,
      H,
      U,
      N,
      F,
      X,
      R,
      K,
      tt,
      W,
      q,
      Ut,
      ft;
    for (
      G && (V = V.split("++").join("")),
        et && (t.style.display = "block"),
        U = t.getElementsByTagName("*"),
        N = U.length,
        X = [],
        H = 0;
      H < N;
      H++
    )
      X[H] = U[H];
    if (L || B)
      for (H = 0; H < N; H++)
        (F = X[H]),
          (R = F.parentNode === t),
          (R || B || (M && !T)) &&
            ((ft = F.offsetTop),
            L &&
              R &&
              Math.abs(ft - m) > v &&
              (F.nodeName !== "BR" || H === 0) &&
              ((K = []), L.push(K), (m = ft)),
            B &&
              ((F._x = F.offsetLeft),
              (F._y = ft),
              (F._w = F.offsetWidth),
              (F._h = F.offsetHeight)),
            L &&
              (((F._isSplit && R) ||
                (!M && R) ||
                (T && R) ||
                (!T &&
                  F.parentNode.parentNode === t &&
                  !F.parentNode._isSplit)) &&
                (K.push(F), (F._x -= p), nh(F, t, k) && (F._wordEnd = !0)),
              F.nodeName === "BR" &&
                ((F.nextSibling && F.nextSibling.nodeName === "BR") ||
                  H === 0) &&
                L.push([])));
    for (H = 0; H < N; H++) {
      if (((F = X[H]), (R = F.parentNode === t), F.nodeName === "BR")) {
        L || B
          ? (F.parentNode && F.parentNode.removeChild(F), X.splice(H--, 1), N--)
          : T || t.appendChild(F);
        continue;
      }
      if (
        (B &&
          ((W = F.style),
          !T && !R && ((F._x += F.parentNode._x), (F._y += F.parentNode._y)),
          (W.left = F._x + "px"),
          (W.top = F._y + "px"),
          (W.position = "absolute"),
          (W.display = "block"),
          (W.width = F._w + 1 + "px"),
          (W.height = F._h + "px")),
        !T && M)
      ) {
        if (F._isSplit)
          for (
            F._next = U = F.nextSibling, F.parentNode.appendChild(F);
            U && U.nodeType === 3 && U.textContent === " ";

          )
            (F._next = U.nextSibling),
              F.parentNode.appendChild(U),
              (U = U.nextSibling);
        else
          F.parentNode._isSplit
            ? ((F._parent = F.parentNode),
              !F.previousSibling &&
                F.firstChild &&
                (F.firstChild._isFirst = !0),
              F.nextSibling &&
                F.nextSibling.textContent === " " &&
                !F.nextSibling.nextSibling &&
                j.push(F.nextSibling),
              (F._next =
                F.nextSibling && F.nextSibling._isFirst ? null : F.nextSibling),
              F.parentNode.removeChild(F),
              X.splice(H--, 1),
              N--)
            : R ||
              ((ft = !F.nextSibling && nh(F.parentNode, t, k)),
              F.parentNode._parent && F.parentNode._parent.appendChild(F),
              ft && F.parentNode.appendChild(Si.createTextNode(" ")),
              A === "span" && (F.style.display = "inline"),
              S.push(F));
      } else
        F.parentNode._isSplit && !F._isSplit && F.innerHTML !== ""
          ? C.push(F)
          : M &&
            !F._isSplit &&
            (A === "span" && (F.style.display = "inline"), S.push(F));
    }
    for (H = j.length; --H > -1; ) j[H].parentNode.removeChild(j[H]);
    if (L) {
      for (
        B &&
          ((q = Si.createElement(A)),
          t.appendChild(q),
          (Ut = q.offsetWidth + "px"),
          (ft = q.offsetParent === t ? 0 : t.offsetLeft),
          t.removeChild(q)),
          W = t.style.cssText,
          t.style.cssText = "display:none;";
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (tt = k === " " && (!B || (!T && !M)), H = 0; H < L.length; H++) {
        for (
          K = L[H],
            q = Si.createElement(A),
            q.style.cssText =
              "display:block;text-align:" +
              D +
              ";position:" +
              (B ? "absolute;" : "relative;"),
            V && (q.className = V + (G ? H + 1 : "")),
            P.push(q),
            N = K.length,
            U = 0;
          U < N;
          U++
        )
          K[U].nodeName !== "BR" &&
            ((F = K[U]),
            q.appendChild(F),
            tt && F._wordEnd && q.appendChild(Si.createTextNode(" ")),
            B &&
              (U === 0 &&
                ((q.style.top = F._y + "px"), (q.style.left = p + ft + "px")),
              (F.style.top = "0px"),
              ft && (F.style.left = F._x - ft + "px")));
        N === 0
          ? (q.innerHTML = "&nbsp;")
          : !T && !M && (Fg(q), yc(q, String.fromCharCode(160), " ")),
          B && ((q.style.width = Ut), (q.style.height = F._h + "px")),
          t.appendChild(q);
      }
      t.style.cssText = W;
    }
    B &&
      (c > t.clientHeight &&
        ((t.style.height = c - y + "px"),
        t.clientHeight < c && (t.style.height = c + _ + "px")),
      u > t.clientWidth &&
        ((t.style.width = u - w + "px"),
        t.clientWidth < u && (t.style.width = u + g + "px"))),
      et && ($ ? (t.style.display = $) : t.style.removeProperty("display")),
      Ar(s, S),
      T && Ar(r, C),
      Ar(l, P);
  },
  Ig = function (t, e, s, r) {
    var l = e.tag ? e.tag : e.span ? "span" : "div",
      u = e.type || e.split || "chars,words,lines",
      c = ~u.indexOf("chars"),
      d = jo(e),
      p = e.wordDelimiter || " ",
      m = p !== " " ? "" : d ? "&#173; " : " ",
      _ = "</" + l + ">",
      g = 1,
      y = e.specialChars
        ? typeof e.specialChars == "function"
          ? e.specialChars
          : Ag
        : null,
      w,
      v,
      D,
      S,
      C,
      P,
      k,
      A,
      O = Si.createElement("div"),
      L = t.parentNode;
    for (
      L.insertBefore(O, t),
        O.textContent = t.nodeValue,
        L.removeChild(t),
        t = O,
        w = _c(t),
        k = w.indexOf("<") !== -1,
        e.reduceWhiteSpace !== !1 && (w = w.replace(Tg, " ").replace(Mg, "")),
        k && (w = w.split("<").join("{{LT}}")),
        C = w.length,
        v = (w.charAt(0) === " " ? m : "") + s(),
        D = 0;
      D < C;
      D++
    )
      if (((P = w.charAt(D)), y && (A = y(w.substr(D), e.specialChars))))
        (P = w.substr(D, A || 1)),
          (v += c && P !== " " ? r() + P + "</" + l + ">" : P),
          (D += A - 1);
      else if (P === p && w.charAt(D - 1) !== p && D) {
        for (v += g ? _ : "", g = 0; w.charAt(D + 1) === p; ) (v += m), D++;
        D === C - 1
          ? (v += m)
          : w.charAt(D + 1) !== ")" && ((v += m + s()), (g = 1));
      } else
        P === "{" && w.substr(D, 6) === "{{LT}}"
          ? ((v += c ? r() + "{{LT}}</" + l + ">" : "{{LT}}"), (D += 5))
          : (P.charCodeAt(0) >= 55296 && P.charCodeAt(0) <= 56319) ||
            (w.charCodeAt(D + 1) >= 65024 && w.charCodeAt(D + 1) <= 65039)
          ? ((S = ((w.substr(D, 12).split(Lg) || [])[1] || "").length || 2),
            (v +=
              c && P !== " "
                ? r() + w.substr(D, S) + "</" + l + ">"
                : w.substr(D, S)),
            (D += S - 1))
          : (v += c && P !== " " ? r() + P + "</" + l + ">" : P);
    (t.outerHTML = v + (g ? _ : "")), k && yc(L, "{{LT}}", "<");
  },
  Bg = function n(t, e, s, r) {
    var l = On(t.childNodes),
      u = l.length,
      c = jo(e),
      d,
      p;
    if (t.nodeType !== 3 || u > 1) {
      for (e.absolute = !1, d = 0; d < u; d++)
        (p = l[d]),
          (p._next = p._isFirst = p._parent = p._wordEnd = null),
          (p.nodeType !== 3 || /\S+/.test(p.nodeValue)) &&
            (c &&
              p.nodeType !== 3 &&
              wc(p).display === "inline" &&
              ((p.style.display = "inline-block"),
              (p.style.position = "relative")),
            (p._isSplit = !0),
            n(p, e, s, r));
      (e.absolute = c), (t._isSplit = !0);
      return;
    }
    Ig(t, e, s, r);
  },
  $o = (function () {
    function n(e, s) {
      vc || bc(),
        (this.elements = On(e)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this._originals = []),
        (this.vars = s || {}),
        gc(this),
        this.split(s);
    }
    var t = n.prototype;
    return (
      (t.split = function (s) {
        this.isSplit && this.revert(),
          (this.vars = s = s || this.vars),
          (this._originals.length =
            this.chars.length =
            this.words.length =
            this.lines.length =
              0);
        for (
          var r = this.elements.length,
            l = s.tag ? s.tag : s.span ? "span" : "div",
            u = sh(s.wordsClass, l),
            c = sh(s.charsClass, l),
            d,
            p,
            m;
          --r > -1;

        )
          (m = this.elements[r]),
            (this._originals[r] = m.innerHTML),
            (d = m.clientHeight),
            (p = m.clientWidth),
            Bg(m, s, u, c),
            Rg(m, s, this.chars, this.words, this.lines, p, d);
        return (
          this.chars.reverse(),
          this.words.reverse(),
          this.lines.reverse(),
          (this.isSplit = !0),
          this
        );
      }),
      (t.revert = function () {
        var s = this._originals;
        if (!s) throw "revert() call wasn't scoped properly.";
        return (
          this.elements.forEach(function (r, l) {
            return (r.innerHTML = s[l]);
          }),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this.isSplit = !1),
          this
        );
      }),
      (n.create = function (s, r) {
        return new n(s, r);
      }),
      n
    );
  })();
$o.version = "3.11.4";
$o.register = bc;
function Vg(n, t, e) {
  return n * (1 - e) + t * e;
}
const jw = Vg;
function $w(n, t, e) {
  return Math.min(Math.max(n, t), e);
}
function qw(n, t, e, s, r, l = !0) {
  if (l) {
    if (n <= t) return s;
    if (n >= e) return r;
  }
  return ((n - t) * (r - s)) / (e - t) + s;
}
function Gw(n, t, e) {
  const s = Math.max(0, Math.min(1, (e - n) / (t - n)));
  return s * s * (3 - 2 * s);
}
function ue(n, t) {
  return (n + t) % t;
}
var Ng = function (t) {
  return zg(t) && !Hg(t);
};
function zg(n) {
  return !!n && typeof n == "object";
}
function Hg(n) {
  var t = Object.prototype.toString.call(n);
  return t === "[object RegExp]" || t === "[object Date]" || jg(n);
}
var Ug = typeof Symbol == "function" && Symbol.for,
  Kg = Ug ? Symbol.for("react.element") : 60103;
function jg(n) {
  return n.$$typeof === Kg;
}
function $g(n) {
  return Array.isArray(n) ? [] : {};
}
function Ns(n, t) {
  return t.clone !== !1 && t.isMergeableObject(n) ? Bi($g(n), n, t) : n;
}
function qg(n, t, e) {
  return n.concat(t).map(function (s) {
    return Ns(s, e);
  });
}
function Gg(n, t) {
  if (!t.customMerge) return Bi;
  var e = t.customMerge(n);
  return typeof e == "function" ? e : Bi;
}
function Wg(n) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(n).filter(function (t) {
        return Object.propertyIsEnumerable.call(n, t);
      })
    : [];
}
function rh(n) {
  return Object.keys(n).concat(Wg(n));
}
function Dc(n, t) {
  try {
    return t in n;
  } catch {
    return !1;
  }
}
function Yg(n, t) {
  return (
    Dc(n, t) &&
    !(
      Object.hasOwnProperty.call(n, t) && Object.propertyIsEnumerable.call(n, t)
    )
  );
}
function Xg(n, t, e) {
  var s = {};
  return (
    e.isMergeableObject(n) &&
      rh(n).forEach(function (r) {
        s[r] = Ns(n[r], e);
      }),
    rh(t).forEach(function (r) {
      Yg(n, r) ||
        (Dc(n, r) && e.isMergeableObject(t[r])
          ? (s[r] = Gg(r, e)(n[r], t[r], e))
          : (s[r] = Ns(t[r], e)));
    }),
    s
  );
}
function Bi(n, t, e) {
  (e = e || {}),
    (e.arrayMerge = e.arrayMerge || qg),
    (e.isMergeableObject = e.isMergeableObject || Ng),
    (e.cloneUnlessOtherwiseSpecified = Ns);
  var s = Array.isArray(t),
    r = Array.isArray(n),
    l = s === r;
  return l ? (s ? e.arrayMerge(n, t, e) : Xg(n, t, e)) : Ns(t, e);
}
Bi.all = function (t, e) {
  if (!Array.isArray(t)) throw new Error("first argument should be an array");
  return t.reduce(function (s, r) {
    return Bi(s, r, e);
  }, {});
};
var Jg = Bi,
  Zg = Jg;
const Cc = vo(Zg);
class Qg {
  constructor(
    t,
    {
      thumbnailTime: e = 0,
      loop: s = !1,
      preload: r = !1,
      isCrossOrigin: l = !1,
      isAddToLoadingWait: u = !1
    } = {}
  ) {
    _defineProperty(this, "el", void 0);
    _defineProperty(this, "thumbnailTime", 0);
    _defineProperty(this, "_promise", void 0);
    _defineProperty(this, "isPlay", !1);
    _defineProperty(this, "isLoaded", !1);
    if (Array.isArray(t)) {
      const c = document.createElement("video");
      l && (c.crossOrigin = "anonymous"),
        c.setAttribute("muted", ""),
        c.setAttribute("playsinline", ""),
        s && c.setAttribute("loop", ""),
        r || c.setAttribute("preload", "none"),
        (this.el = c),
        t.forEach((d) => {
          const p = document.createElement("source");
          (p.type = d.endsWith(".mov")
            ? "video/quicktime"
            : d.endsWith(".webm")
            ? "video/webm"
            : d.endsWith(".mp4")
            ? "video/mp4"
            : ""),
            (p.src = d),
            c.appendChild(p);
        });
    } else if (typeof t == "string") {
      const c = document.createElement("video");
      l && (c.crossOrigin = "anonymous"),
        c.setAttribute("muted", ""),
        c.setAttribute("playsinline", ""),
        s && c.setAttribute("loop", ""),
        r || c.setAttribute("preload", "none"),
        (c.src = t),
        (this.el = c);
    } else this.el = t;
    (this.thumbnailTime = e),
      u &&
        (E.loadingCountList[E.pageId].push(
          new Promise(async (c) => {
            this.load(c);
          })
        ),
        Uo());
  }
  play() {
    if (!this.isPlay)
      return (
        (this.isPlay = !0),
        (this._promise = this.el.play().catch(() => {
          this.el.currentTime = this.thumbnailTime;
        }))
      );
  }
  pause() {
    var _this$_promise;
    this.isPlay &&
      ((this.isPlay = !1),
      (_this$_promise = this._promise) === null || _this$_promise === void 0
        ? void 0
        : _this$_promise.then(() => {
            this.isPlay || this.el.pause();
          }));
  }
  load(t) {
    this.isLoaded ||
      ((this.isLoaded = !0),
      this.el.addEventListener("loadedmetadata", t),
      this.el.load());
  }
  restart() {
    (this.isPlay = !1), this.play();
  }
  getDuration() {
    return this.el.duration;
  }
}
const oh = 0.9,
  ah = 0.8,
  tb = 0.8;
((_Class2 = class extends _t {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "isOpen", !1);
  }
  onInit() {
    var _this$elContent;
    const { el: n } = this,
      { id: t = n.id || n.dataset.modal, isDisableAnimation: e = !1 } = n
        .dataset.modal
        ? JSON.parse(n.dataset.modal)
        : {};
    (this.id = t),
      (this.isDisableAnimation = e),
      (this.elBody = document.body),
      (this.elContent = this.el.querySelector("[data-modal-content]")),
      (this.elBackdrop = this.el.querySelector("[data-modal-backdrop]")),
      (this.elsClose = this.el.querySelectorAll("[data-modal-close]")),
      this.isDisableAnimation ||
        (Z.set(this.elContent, { visibility: "hidden" }),
        this.elBackdrop && Z.set(this.elBackdrop, { opacity: 0 }),
        (E.modals[this.id] = this)),
      (_this$elContent = this.elContent) === null || _this$elContent === void 0
        ? void 0
        : _this$elContent.addEventListener(
            "click",
            (r) => {
              r.stopPropagation();
            },
            Q
          );
    const s = (r) => {
      this.isDisableAnimation || Z.set(r, { opacity: 0 }),
        r.addEventListener(
          "click",
          (l) => {
            l.stopPropagation(), z.emit("closeModal", this.id);
          },
          Q
        );
    };
    this.elsClose.length > 0
      ? this.elsClose.forEach((r) => {
          s(r);
        })
      : this.elsClose.length !== 0 && s(this.elsClose);
  }
  onClick(n) {
    n.stopPropagation(), z.emit("closeModal", this.id);
  }
  open(n) {
    this.isDisableAnimation ||
      this.isOpen ||
      ((this.isOpen = !0),
      this.el.classList.add("-open"),
      this.elBody.classList.add("-open"),
      gsap.set(this.elContent, { visibility: "visible" }),
      Z.to(this.elContent, {
        duration: 0.6,
        ease: "expo.out",
        onComplete: this.elBackdrop ? null : n
      }),
      Z.to(this.elContent, { duration: 0.6, scrollTop: 0, ease: "power2.out" }),
      Z.to(this.elsClose, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2
      }),
      this.elBackdrop &&
        Z.fromTo(
          this.elBackdrop,
          { opacity: 0, scale: this.isSp ? ah : oh },
          { opacity: 1, scale: 1, duration: tb, ease: "expo.out" }
        ));
  }
  close(n, t = !1) {
    this.isDisableAnimation ||
      (this.isOpen &&
        ((this.isOpen = !1),
        Z.to(this.elContent, {
          duration: t ? 0.01 : this.isSp ? 0.8 : 0.5,
          ease: "power4.out",
          onComplete: this.elBackdrop
            ? null
            : () => {
                this.el.classList.remove("-open"),
                  this.elBody.classList.remove("-open"),
                  n && n();
              }
        }),
        Z.to(this.elContent, {
          duration: t ? 0.01 : this.isSp ? 0.6 : 0.35,
          ease: "power2.out"
        }),
        Z.to(this.elsClose, {
          opacity: 0,
          duration: t ? 0.01 : this.isSp ? 0.6 : 0.35,
          ease: "power2.out"
        }),
        this.elBackdrop &&
          Z.to(this.elBackdrop, [
            {
              scale: this.isSp ? ah : oh,
              duration: t ? 0.01 : this.isSp ? 0.3 : 0.5,
              ease: "power4.out"
            },
            {
              opacity: 0,
              duration: t ? 0.01 : this.isSp ? 0.3 : 0.5,
              ease: "power2.out",
              onComplete: () => {
                this.el.classList.remove("-open"),
                  this.elBody.classList.remove("-open"),
                  Z.set(this.elContent, { visibility: "hidden" }),
                  n && n();
              }
            }
          ])));
  }
  onLeave() {
    this.isDisableAnimation || (this.isOpen && this.close());
  }
}),
_defineProperty(
  _Class2,
  "selectorRoot",
  "[data-modal]:not([data-modal-manual])"
),
_Class2).register();
((_Class3 = class extends _t {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "isOpen", !1);
  }
  onInit() {
    this.id = this.el.dataset.modalTrigger;
  }
  onClick(n) {
    n.preventDefault(),
      this.isOpen
        ? (z.emit("closeModal", this.id), (this.isOpen = !1))
        : (z.emit("openModal", this.id), (this.isOpen = !0));
  }
  onCloseModal(n) {
    n === this.id && (this.isOpen = !1);
  }
  onLeave(n) {
    n === this.id && (this.isOpen = !1);
  }
}),
_defineProperty(
  _Class3,
  "selectorRoot",
  "[data-modal-trigger]:not([data-modal-trigger-manual])"
),
_Class3).register();
((_Class4 = class extends _t {
  onInit() {
    (this.isDisableHash = "disableHash" in this.el.dataset),
      (this.to = this.el.getAttribute("href")),
      (this.onTouchStartHandler = this.onTouchStart.bind(this)),
      (this.swipe = new Ko(this.el, () => null, {
        onStart: this.onTouchStartHandler
      }));
  }
  onMouseenter() {
    this.path = window.location.pathname;
  }
  onTouchStart() {
    this.path = window.location.pathname;
  }
  onClick(n) {
    const { cScroll: t } = E;
    if (t.isDisable) return;
    if (this.to === "#top") {
      n.preventDefault(),
        !this.isDisableHash &&
          location.hash &&
          window.history.pushState(null, "", window.location.pathname),
        (E.isAnchor = !0),
        this.detectOpenModal();
      return;
    }
    if (!this.to.startsWith("#") && !this.to.includes(this.path)) return;
    const e = document.querySelector(
      this.el.hash.replace(/#(.+)/, (s, r) => `#${decodeURIComponent(r)}`)
    );
    e &&
      (n.preventDefault(),
      this.isDisableHash || window.history.pushState(null, "", this.to),
      (E.isAnchor = !0),
      this.detectOpenModal(e));
  }
  detectOpenModal(n) {
    E.isOpenModal
      ? (z.emit("closeModal"),
        requestAnimationFrame(() => {
          this.scrollTo(n);
        }))
      : this.scrollTo(n);
  }
  scrollTo(n = 0) {
    E.cScroll.scrollTo(n, {
      onComplete: () => {
        E.isAnchor = !1;
      }
    });
  }
  onDestroy() {
    this.swipe.destroy();
  }
}),
_defineProperty(_Class4, "selectorRoot", 'a[href*="#"]:not([href="#"])'),
_Class4).register();
((_Class5 = class extends _t {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "isOpen", !1);
    _defineProperty(this, "isAnimating", !1);
  }
  onInit() {
    if (this.isDestroyed) return;
    const {
      isDisablePc: n = !1,
      isDisableSp: t = !1,
      isOpenPc: e = !1,
      isOpenSp: s = !1
    } = Cc(this.option, JSON.parse(this.el.dataset.accordion || "{}"));
    if ((!this.isSp && n) || (this.isSp && t)) {
      this.el.classList.add("-disable"), (this.isDisable = !0);
      return;
    }
    (this.elsTrigger = this.el.querySelectorAll("[data-accordion-trigger]")),
      (this.elContent = this.el.querySelector("[data-accordion-content]")),
      (this.elIcon = this.el.querySelector("[data-accordion-icon]")),
      !(this.elsTrigger.length === 0 || !this.elContent) &&
        (Z.set(this.elContent, { overflow: "hidden", height: 0 }),
        (this._onClickTrigger = this.clickTrigger.bind(this)),
        this.elsTrigger.forEach((r) => {
          r.addEventListener("click", this._onClickTrigger, Q);
        }),
        ((this.isSp && s) || (!this.isSp && e)) && this.open(!0));
  }
  clickTrigger() {
    this.isOpen ? this.close() : this.open();
  }
  open(n = !1) {
    this.isAnimating ||
      this.isOpen ||
      ((this.isOpen = !0),
      (this.isAnimating = !0),
      this.el.classList.add("-open", "-animating"),
      this.elsTrigger.forEach((t) => {
        t.classList.add("-open");
      }),
      this.elIcon && this.elIcon.classList.add("-open"),
      Z.to(this.elContent, {
        height: "auto",
        duration: n ? 0 : 0.9,
        ease: "Expo.easeInOut",
        onComplete: () => {
          this.el.classList.remove("-animating"),
            ze(!0),
            (this.isAnimating = !1);
        }
      }));
  }
  close(n = !1) {
    this.isAnimating ||
      !this.isOpen ||
      ((this.isOpen = !1),
      (this.isAnimating = !0),
      this.el.classList.remove("-open"),
      this.el.classList.add("-animating"),
      this.elsTrigger.forEach((t) => {
        t.classList.remove("-open");
      }),
      this.elIcon && this.elIcon.classList.remove("-open"),
      Z.to(this.elContent, {
        height: 0,
        duration: n ? 0 : 0.8,
        ease: "Expo.easeOut",
        onComplete: () => {
          this.el.classList.remove("-animating"),
            ze(!0),
            (this.isAnimating = !1);
        }
      }));
  }
  onDestroy() {
    var _this$elsTrigger;
    this.isDisable ||
      ((_this$elsTrigger = this.elsTrigger) !== null &&
        _this$elsTrigger !== void 0 &&
        _this$elsTrigger.forEach((n) => {
          n.removeEventListener("click", this._onClickTrigger, Q);
        }),
      (this._onClickTrigger = null),
      (this.elsTrigger = null),
      (this.elContent = null));
  }
}),
_defineProperty(_Class5, "selectorRoot", "[data-accordion]"),
_Class5).register();
const eb = { ease: 0.5 },
  ib = 60,
  sb = 10,
  nb = 1.5,
  cs = "-disable";
class rb {
  constructor(t) {
    (this.el = t), (this._eClickHandler = void 0), (this.onClick = void 0);
  }
  init() {
    (this._mouseTarget = this.el),
      (this._eClickHandler = this._eClick.bind(this)),
      this.el.addEventListener("click", this._eClickHandler);
  }
  _eClick(t) {
    this.onClick && this.onClick(t);
  }
  getPos() {
    const t = document.defaultView.getComputedStyle(this.el, null),
      e = Number(t.width.replace("px", "")),
      s = this.el.getBoundingClientRect(),
      r = window.pageXOffset || document.documentElement.scrollLeft,
      l = s.left + r;
    return { width: e, x: l, right: l + e };
  }
  onResize() {
    this.width = this.el.clientWidth;
  }
  dispose() {
    this.el &&
      (this._mouseTarget.removeEventListener("click", this._eClickHandler),
      (this.el = null),
      (this._eClickHandler = null)),
      (this.onClick = null);
  }
}
((_Class6 = class extends _t {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "_isInit", !1);
    _defineProperty(this, "_isDisable", !1);
    _defineProperty(this, "item", null);
    _defineProperty(this, "_isMouseDown", !1);
    _defineProperty(this, "_isMouseMove", !1);
    _defineProperty(this, "_isMouseMoveVertical", !1);
    _defineProperty(this, "_isProgressDrag", !1);
    _defineProperty(this, "_pos", null);
    _defineProperty(this, "_posOffset", null);
    _defineProperty(this, "_startPos", null);
    _defineProperty(this, "_listSize", null);
    _defineProperty(this, "_totalSize", 0);
    _defineProperty(this, "_listOffsetLeft", 0);
    _defineProperty(this, "_follow", 0);
    _defineProperty(this, "_isMoving", !1);
    _defineProperty(this, "_isMoveUseBtn", !1);
    _defineProperty(this, "_isMovingLoop", !1);
    _defineProperty(this, "_isLastPositionRight", !1);
    _defineProperty(this, "isIntersecting", !1);
    _defineProperty(this, "_moveTotal", 0);
    _defineProperty(this, "nowKey", 0);
    _defineProperty(this, "_nowKeyCurrent", -1);
    _defineProperty(this, "_nowKeyNext", -1);
    _defineProperty(this, "_nowKeyPrev", -1);
    _defineProperty(this, "_nowKeyCurrent2", -1);
    _defineProperty(this, "_nowKeyNext2", -1);
    _defineProperty(this, "_nowKeyPrev2", -1);
    _defineProperty(this, "_nowKeyCurrent3", -1);
    _defineProperty(this, "_nowKeyNext3", -1);
    _defineProperty(this, "_nowKeyPrev3", -1);
    _defineProperty(this, "_eMouseOverHandler", void 0);
    _defineProperty(this, "_eMouseOutHandler", void 0);
    _defineProperty(this, "_eMouseDownHandler", void 0);
    _defineProperty(this, "_eMouseMoveHandler", void 0);
    _defineProperty(this, "_eMouseUpHandler", void 0);
    _defineProperty(this, "_eWindowMouseUpHandler", void 0);
    _defineProperty(this, "_eClickNextBtnHandler", void 0);
    _defineProperty(this, "_eClickPrevBtnHandler", void 0);
    _defineProperty(this, "_eClickNextSlideHandler", void 0);
    _defineProperty(this, "_eClickPrevSlideHandler", void 0);
    _defineProperty(this, "_moveTween", void 0);
    _defineProperty(this, "_lastPos", void 0);
    _defineProperty(this, "onClickItem", void 0);
    _defineProperty(this, "indexCurrent", 0);
    _defineProperty(this, "positionLoopOneSide", 0);
    _defineProperty(this, "xNext", 0);
    _defineProperty(this, "xPrev", 0);
    _defineProperty(this, "mouse", null);
    _defineProperty(this, "mouseOld", null);
    _defineProperty(this, "mouseStart", null);
    _defineProperty(this, "mouseDiff", null);
    _defineProperty(this, "mouseDist", null);
    _defineProperty(this, "progress", {
      value: 0,
      start: 0,
      total: 0,
      offset: 0
    });
  }
  onInit() {
    const { el: n } = this,
      {
        isDisablePc: t = !1,
        isDisableSp: e = !1,
        isLoop: s = !1,
        isLoopOneSide: r = !1,
        isAutoPlay: l = !1,
        interval: u = 5,
        easePaginationProgress: c,
        fps: d = 60,
        isLastPositionRight: p = !1,
        isManual: m = !1
      } = n.dataset.slider ? JSON.parse(n.dataset.slider) : {};
    if ((!this.isSp && t) || (this.isSp && e)) {
      n.classList.add("-disable"), (this._isDisable = !0);
      return;
    }
    (this._option = {
      ...this.option,
      isDisablePc: t,
      isDisableSp: e,
      isLoop: s,
      isLoopOneSide: r,
      isAutoPlay: l,
      interval: u,
      isLastPositionRight: p,
      isManual: m
    }),
      (this.framerate = 60 / d),
      this.init();
  }
  init() {
    if (this._isDisable || this._isInit) return;
    this._isInit = !0;
    const { el: n, _option: t } = this;
    (this._isLoopOneSide =
      (this._option.isLoopOneSide === "pc" && !this.isSp) ||
      (this._option.isLoopOneSide === "sp" && this.isSp) ||
      this._option.isLoopOneSide === !0),
      (this._isLoop =
        (this._option.isLoop === "pc" && !this.isSp) ||
        (this._option.isLoop === "sp" && this.isSp) ||
        this._option.isLoop === !0 ||
        this._isLoopOneSide),
      (this._lastSlide = t.lastSlide || 1),
      (this._lastSlideSp = t.lastSlideSp || 1),
      (this.onMove = t.onMove),
      t.onChange && (this.onChange = t.onChange),
      (this.isManualAddBackground = t.isManualAddBackground),
      (this.elList = n.querySelector("[data-slider-list]")),
      (this._parent = n),
      (this._elCurrent = n.querySelectorAll("[data-slider-current]")),
      (this._elAll = n.querySelectorAll("[data-slider-all]")),
      (this._nextBtn = n.querySelector("[data-slider-next]")),
      (this._prevBtn = n.querySelector("[data-slider-prev]")),
      (this._progress = n.querySelector("[data-slider-progress]")),
      (this._progressBar = n.querySelector("[data-slider-progress-bar]")),
      (this._progressCircle = n.querySelector("[data-slider-progress-circle]")),
      (this._paginationProgress = n.querySelector(
        "[data-slider-pagination-progress]"
      )),
      (this._pos = { x: 0, y: 0 }),
      (this._posOffset = { x: 0, y: 0 }),
      (this._startPos = { x: 0, y: 0 }),
      (this._listSize = { x: 0, y: 0 }),
      (this._totalSize = 0),
      (this.mouse = { x: 0, y: 0 }),
      (this.mouseOld = { x: 0, y: 0 }),
      (this.mouseStart = { x: 0, y: 0 }),
      (this.mouseDiff = { x: 0, y: 0 }),
      (this.mouseDist = { x: 0, y: 0 }),
      this._progress &&
        ((this.progress.total = this._progress.getBoundingClientRect().width),
        (this.progress.offset = this.el.offsetLeft),
        (this._progressBar.style.transformOrigin = "left")),
      (this.count = 0);
    let e = this.elList.querySelectorAll("[data-slider-item]");
    const s = !!this.el.dataset.sliderOriginalCount;
    if (this._isLoop && !s) {
      const l = document.createDocumentFragment();
      e.forEach((c) => {
        l.append(c.cloneNode(!0)),
          "sliderItemMore" in c.dataset || this.count++;
      });
      const u = l.cloneNode(!0);
      this._isLoopOneSide &&
        Array.prototype.forEach.call(l.children, (c, d) => {
          c.style.visibility = "hidden";
        }),
        this.elList.prepend(l),
        this.elList.append(u),
        (e = this.elList.querySelectorAll("[data-slider-item]")),
        (this.elsOutOfOneSide = Array.prototype.slice.call(e, 0, this.count)),
        (this.el.dataset.sliderOriginalCount = this.count);
    } else
      (this.count = Number(this.el.dataset.sliderOriginalCount)),
        (this.elsOutOfOneSide = Array.prototype.slice.call(e, 0, this.count));
    (this.item = Array.prototype.map.call(e, (l, u) => {
      const c = new rb(l);
      return (
        c.init(),
        (c.onClick = (d) => {
          this._isMoveUseBtn ||
            (this._isMouseMove &&
              (d.preventDefault(),
              d.stopPropagation(),
              (this._isMouseMove = !1),
              this.enableClick()));
        }),
        !this._isLoop && !("sliderItemMore" in l.dataset) && this.count++,
        c
      );
    })),
      (this._eMouseOverHandler = this._eMouseOver.bind(this)),
      zo(this._parent, this._eMouseOverHandler),
      (this._eMouseOutHandler = this._eMouseOut.bind(this)),
      Ho(this._parent, this._eMouseOutHandler),
      (this._eMouseDownHandler = this._eMouseDown.bind(this)),
      this._parent.addEventListener("mousedown", this._eMouseDownHandler, Q),
      (this._eDragstartHandler = this._eDragstart.bind(this)),
      this._parent.addEventListener("dragstart", this._eDragstartHandler),
      (this._eMouseMoveHandler = this._eMouseMove.bind(this)),
      this._parent.addEventListener("mousemove", this._eMouseMoveHandler),
      (this._eMouseUpHandler = this._eMouseUp.bind(this)),
      this._parent.addEventListener("mouseup", this._eMouseUpHandler, Q),
      (this._eWindowMouseUpHandler = this._eMouseUp.bind(this)),
      window.addEventListener("mouseup", this._eWindowMouseUpHandler, Q),
      (this._eMouseDownHandler = this._eMouseDown.bind(this)),
      this._parent.addEventListener("touchstart", this._eMouseDownHandler, Q),
      (this._eMouseMoveHandler = this._eMouseMove.bind(this)),
      this._parent.addEventListener("touchmove", this._eMouseMoveHandler),
      (this._eMouseUpHandler = this._eMouseUp.bind(this)),
      this._parent.addEventListener("touchend", this._eMouseUpHandler, Q),
      (this._eWindowMouseUpHandler = this._eMouseUp.bind(this)),
      window.addEventListener("touchend", this._eWindowMouseUpHandler, Q),
      this._nextBtn &&
        ((this._eClickNextBtnHandler = this._eClickNextBtn.bind(this)),
        this._nextBtn.addEventListener("click", this._eClickNextBtnHandler)),
      this._prevBtn &&
        ((this._eClickPrevBtnHandler = this._eClickPrevBtn.bind(this)),
        this._prevBtn.addEventListener("click", this._eClickPrevBtnHandler),
        this._prevBtn.classList.add(cs),
        (this._prevBtn.style.pointerEvents = "none")),
      this._progressCircle &&
        (this._progressCircle.addEventListener(
          "mousedown",
          this._eMouseDownHandler,
          Q
        ),
        this._progressCircle.addEventListener(
          "mouseup",
          this._eMouseUpHandler,
          Q
        ),
        this._progressCircle.addEventListener(
          "touchstart",
          this._eMouseDownHandler,
          Q
        ),
        this._progressCircle.addEventListener(
          "touchend",
          this._eMouseUpHandler,
          Q
        )),
      this._setCurrent(),
      this._setAll();
    const r = n.dataset.sliderInitialPosition;
    if (r) {
      const l = r - 1,
        u = n.querySelectorAll("[data-slider-item]").length;
      this._moveTo(u === l ? 0 : l, { disableAnimation: !0 });
    } else this._isLoop && this._moveTo(this.count, { disableAnimation: !0 });
    this.onResize(),
      (this.widthItem = this.item[0].width),
      this._setProgress(this._getProgress()),
      (this.elList.style.cursor = "grab");
  }
  setTimer() {
    this.timer ||
      ((this.tlTimerProgress = Z.fromTo(
        this._paginationProgress,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: this._option.interval,
          ease: this._option.easePaginationProgress
        }
      )),
      (this.timer = bt.delayedCall(this._option.interval, () => {
        Z.set(this._paginationProgress, { scaleX: 0 }),
          !this._isLoop &&
          this.nowKey >=
            this.item.length - (this.isSp ? this._lastSlideSp : this._lastSlide)
            ? this._moveTo(0)
            : this._move(!0);
      })));
  }
  stopTimer() {
    this.timer &&
      (Z.set(this._paginationProgress, { scaleX: 0 }),
      this.timer.kill(),
      this.tlTimerProgress.kill(),
      (this.timer = null));
  }
  onResize() {
    if (this._isDisable || !this._isInit) return;
    const n = this._parent.getBoundingClientRect();
    (this._lastPos = this._getLastPos()),
      (this._listOffsetLeft = parseInt(
        n.left +
          parseInt(
            document.defaultView.getComputedStyle(this._parent, null)
              .paddingLeft
          )
      )),
      (this._listSize.x =
        this._lastPos.right + this._pos.x * -1 + this._listOffsetLeft),
      (this._maxMove =
        Math.floor(n.width / this._lastPos.width) * this._lastPos.width * 0.6),
      (this.elList.style.transform = ""),
      (this._totalSize =
        this.item[this.item.length - 1].el.getBoundingClientRect().left -
        this.elList.getBoundingClientRect().left +
        this.elList.scrollLeft),
      this.item.forEach((t) => {
        t.onResize();
      }),
      this._progress &&
        ((this.progress.total = this._progress.getBoundingClientRect().width),
        (this.progress.offset = this.el.offsetLeft)),
      (this._initialX = this._pos.x),
      this._moveTo(this.nowKey, { disableAnimation: !0 });
  }
  play() {
    this._isPlay || ((this._isPlay = !0), this.playTick());
  }
  pause() {
    this._isPlay && ((this._isPlay = !1), this.pauseTick());
  }
  _eClickNextBtn(n) {
    n && n.stopPropagation(), !(this.mouseDiffStartX > 0) && this._move(!0);
  }
  _eClickPrevBtn(n) {
    n && n.stopPropagation(), !(this.mouseDiffStartX > 0) && this._move(!1);
  }
  _eDragstart(n) {
    n.preventDefault();
  }
  _eMouseOver(n) {}
  _eMouseOut(n) {}
  _eMouseDown(n) {
    if (this._isMouseDown) return;
    (this.el.style.cursor = ""),
      (document.documentElement.style.cursor = "grabbing"),
      "sliderProgressCircle" in n.target.dataset &&
        ((this._isProgressDrag = !0),
        this._progressCircle &&
          this._progressCircle.classList.add("-grabbing"));
    const { x: t, y: e } = Ie(n);
    (this.mouseStart.x = this.mouse.x = t),
      (this.mouseStart.y = this.mouse.y = e),
      (this.mouseDiff.x = 0),
      (this.mouseDiff.y = 0),
      (this._isMouseDown = !0),
      (this._moveTotal = 0),
      (this._startPos.x = this._isProgressDrag ? -this._pos.x : this._pos.x),
      this.onMouseDownHandle && this.onMouseDownHandle();
  }
  _eMouseMove(n) {
    if (!this._isMoving) {
      if (((this.progress.start = n.clientX), this._isMouseDown)) {
        this._option.isAutoPlay && this.stopTimer(),
          (this.mouseOld.x = this.mouse.x),
          (this.mouseOld.y = this.mouse.y);
        const { x: t, y: e } = Ie(n);
        (this.mouse.x = t),
          (this.mouse.y = e),
          (this.mouseDiff.x = this.mouseOld.x - this.mouse.x),
          (this.mouseDiff.y = this.mouseOld.y - this.mouse.y),
          this.elList.classList.add("-drag");
        const s = e - this.mouseStart.y,
          r = t - this.mouseStart.x;
        if (r === 0 || Math.abs(s) / Math.abs(r) >= nb) {
          this._isMouseMoveVertical = !0;
          return;
        } else n.cancelable && n.preventDefault();
      } else return;
      (this._isMouseMoveVertical = !1),
        (this._isMouseMove = !0),
        this.disableClick(),
        this._cancelMove();
    }
  }
  _eMouseUp(n) {
    if (this._isMouseDown) {
      if (
        ((this._isMouseDown = !1),
        this.onMouseUpHandle && this.onMouseUpHandle(),
        (this.mouseDiffStartX = Math.abs(this.mouse.x - this.mouseStart.x)),
        this.mouseDiffStartX > 0 && !this._isMouseMoveVertical)
      ) {
        if (!this.isSp || this._isProgressDrag) {
          const t = Math.min(
            Math.max(
              this._getNowItemKey(),
              this._isLoopOneSide && this.positionLoopOneSide === 0
                ? this.count
                : 0
            ),
            this.item.length - this._lastSlide
          );
          this._moveTo(t, { isDrag: !0 });
        } else {
          let t = this.nowKey;
          const e = this.mouseDiff.x * sb;
          Math.abs(-(this.mouse.x - this.mouseStart.x) + e) >= ib &&
            (t =
              this.mouseDiff.x > 0
                ? this.nowKey + (1 + Math.floor(Math.abs(e) / 200))
                : this.mouseDiff.x < 0
                ? this.nowKey - (1 + Math.floor(Math.abs(e) / 200))
                : this.nowKey),
            (t = Math.min(
              Math.max(
                t,
                this._isLoopOneSide && this.positionLoopOneSide === 0
                  ? this.count
                  : 0
              ),
              this.item.length - this._lastSlideSp
            )),
            this._moveTo(t, { isDrag: !0 });
        }
      } else this._option.isAutoPlay && this.setTimer();
      (this.mouseDiff.x = 0),
        (this.mouseDiff.y = 0),
        (this._isProgressDrag = !1),
        (document.documentElement.style.cursor = ""),
        this._progressCircle && (this._progressCircle.style.cursor = ""),
        (this.elList.style.cursor = "grab"),
        this.elList.classList.remove("-drag");
    }
  }
  setWillChange() {
    this.elList.style.willChange = "transform";
  }
  resetWillChange() {
    this.elList.style.willChange = "auto";
  }
  disableClick() {
    this.item.forEach(({ el: n }) => {
      n.style.pointerEvents = "none";
    });
  }
  enableClick() {
    this.item.forEach(({ el: n }) => {
      n.style.pointerEvents = "auto";
    });
  }
  onTick(n, t, e) {
    if (this._isDisable || e % this.framerate !== 0 || this._movingLoop) return;
    const { ease: s } = eb;
    let r;
    if (
      (this._progress &&
        ((this.progress.value =
          (this.progress.start - this.progress.offset) / this.progress.total),
        (r =
          (this._listSize.x - this._listSize.x / this.item.length) *
          this.progress.value)),
      this._isMouseDown && !this._isMouseMoveVertical)
    ) {
      (this.mouseDist.x = this._isProgressDrag
        ? (this.mouseStart.x - this.mouse.x) * (this.item.length / 2)
        : this.mouseStart.x - this.mouse.x),
        (this.mouseDist.y = this.mouseStart.y - this.mouse.y);
      const d = this.mouseDist.x;
      this._moveTotal += Math.abs(d);
      const p = this._startPos.x - d;
      this._isProgressDrag && this.progress
        ? (this._pos.x -= (r + this._pos.x) * s)
        : (this._pos.x += (p - this._pos.x) * s);
    } else this._pos.x += this._follow;
    this._lastPos || (this._lastPos = this._getLastPos());
    const l = this.isSp ? this._lastSlideSp : this._lastSlide,
      u =
        this._isLoopOneSide && this.positionLoopOneSide === 0
          ? this._getXFromItemKey(this.count)
          : 0,
      c =
        -this._listSize.x +
        (this._option._isLastPositionRight
          ? this.el.clientWidth
          : this._lastPos.width * l);
    this._pos.x > u && (this._pos.x += (u - this._pos.x) * s),
      this._pos.x < c && (this._pos.x += (c - this._pos.x) * s),
      !this._isMoveUseBtn && this.elList && this.setListPositionX(),
      this._isMouseDown && this._setProgress(this._getProgress());
  }
  setListPositionX(n) {
    (this.xPrev = this.xNext),
      (this.xNext = this._pos.x + this._posOffset.x),
      (this.xReal = this.xNext - this._initialX),
      bt.set(this.elList, { x: this.xNext }),
      this.onMove && this.onMove(this.xReal, n ? 0 : this.xNext - this.xPrev);
  }
  _move(n) {
    if (this._isMoveUseBtn) return;
    (this._isMoveUseBtn = !0), this._cancelMove();
    let t = this._getNowItemKey();
    if (n) {
      t++;
      const e = this.isSp ? this._lastSlideSp : this._lastSlide;
      t >= this.item.length - e && (t = this.item.length - e);
    } else t--, t < 0 && (t = 0);
    this._moveTo(t);
  }
  _moveTo(n, { isDrag: t, disableAnimation: e } = {}) {
    if (!e && (this._isMoving || this._movingLoop)) return;
    const { isAutoPlay: s } = this._option;
    (this._isMoving = !0),
      (n >= this.count * 2 || n < this.count) && (this._movingLoop = !0),
      s && this.stopTimer(),
      (this.nowKey = n),
      this._setCurrent(),
      this._setBtnClass(),
      this.onChange && this.onChange(n);
    const r = this._getXFromItemKey(n);
    this._moveTween = Z.to(this._pos, {
      x: r,
      duration: e ? 0 : t ? 0.6 : 0.8,
      ease: t ? "power2.out" : "power2.inOut",
      overwrite: !0,
      onUpdate: () => {
        if (this.elList && this._pos && this._posOffset) {
          if (this.changeSlideAnimation && e) {
            const l = bt.timeline();
            this.changeSlideAnimation({
              tl: l,
              changeSlide: () => {
                this.setListPositionX(e);
              }
            });
          } else this.setListPositionX(e);
          this._setProgress(this._getProgress());
        }
      },
      onComplete: () => {
        this.elList &&
          this._pos &&
          ((this._pos.x = r),
          (this._isMouseMove = !1),
          (this._isMoving = !1),
          (this._isMoveUseBtn = !1),
          (this._movingLoop = !1),
          this.enableClick(),
          e &&
            (this.setListPositionX(e),
            (this._startPos.x = this._isProgressDrag
              ? -this._pos.x
              : this._pos.x)),
          this._isLoop &&
            (n >= this.count * 2
              ? (this._moveTo(n - this.count, { disableAnimation: !0 }),
                this._isLoopOneSide &&
                  (this.positionLoopOneSide++,
                  this.positionLoopOneSide > 0 &&
                    this.elsOutOfOneSide.forEach((l, u) => {
                      l.style.visibility = "";
                    })))
              : n < this.count
              ? (this._moveTo(n + this.count, { disableAnimation: !0 }),
                this._isLoopOneSide &&
                  (this.positionLoopOneSide--,
                  this.positionLoopOneSide === 0 &&
                    this.elsOutOfOneSide.forEach((l, u) => {
                      l.style.visibility = "hidden";
                    })))
              : s && this.isIntersecting && this.setTimer()),
          this._setBtnClass());
      }
    });
  }
  _cancelMove() {
    this._isMoving &&
      (this._moveTween && this._moveTween.kill(),
      (this._isMouseMove = !1),
      (this._isMoveUseBtn = !1),
      (this._isMoving = !1));
  }
  _setCurrent() {
    this._isInit &&
      this._elCurrent.length &&
      !("sliderItemMore" in this.item[this.nowKey].el.dataset) &&
      ((this.indexCurrent = ue(this.nowKey, this.count)),
      this._elCurrent.forEach((n) => {
        n.textContent =
          this.indexCurrent + 1 < 10
            ? "0" + (this.indexCurrent + 1)
            : this.indexCurrent + 1;
      }),
      this.nowKey >= 0 &&
        (this._nowKeyCurrent >= 0 &&
          (this.item[this._nowKeyCurrent].el.classList.remove("-current"),
          this.item[this._nowKeyNext].el.classList.remove("-next"),
          this.item[this._nowKeyPrev].el.classList.remove("-prev"),
          this._isLoop &&
            (this.item[this._nowKeyCurrent2].el.classList.remove("-current"),
            this.item[this._nowKeyNext2].el.classList.remove("-next"),
            this.item[this._nowKeyPrev2].el.classList.remove("-prev"),
            this.item[this._nowKeyCurrent3].el.classList.remove("-current"),
            this.item[this._nowKeyNext3].el.classList.remove("-next"),
            this.item[this._nowKeyPrev3].el.classList.remove("-prev"))),
        (this._nowKeyCurrent = this.nowKey),
        (this._nowKeyNext = ue(this.nowKey + 1, this.item.length)),
        (this._nowKeyPrev = ue(this.nowKey - 1, this.item.length)),
        this.item[this._nowKeyCurrent].el.classList.add("-current"),
        this.item[this._nowKeyNext].el.classList.add("-next"),
        this.item[this._nowKeyPrev].el.classList.add("-prev"),
        this._isLoop &&
          ((this._nowKeyCurrent2 = ue(
            this._nowKeyCurrent + this.count,
            this.item.length
          )),
          (this._nowKeyNext2 = ue(this._nowKeyCurrent2 + 1, this.item.length)),
          (this._nowKeyPrev2 = ue(this._nowKeyCurrent2 - 1, this.item.length)),
          (this._nowKeyCurrent3 = ue(
            this._nowKeyCurrent - this.count,
            this.item.length
          )),
          (this._nowKeyNext3 = ue(this._nowKeyCurrent3 + 1, this.item.length)),
          (this._nowKeyPrev3 = ue(this._nowKeyCurrent3 - 1, this.item.length)),
          this.item[this._nowKeyCurrent2].el.classList.add("-current"),
          this.item[this._nowKeyNext2].el.classList.add("-next"),
          this.item[this._nowKeyPrev2].el.classList.add("-prev"),
          this.item[this._nowKeyCurrent3].el.classList.add("-current"),
          this.item[this._nowKeyNext3].el.classList.add("-next"),
          this.item[this._nowKeyPrev3].el.classList.add("-prev"))));
  }
  _setAll() {
    this._elAll.length &&
      this._elAll.forEach((n) => {
        n.textContent = this.count < 10 ? "0" + this.count : this.count;
      });
  }
  _setBtnClass() {
    if (this._nextBtn) {
      this._nextBtn.classList.remove(cs),
        (this._nextBtn.style.pointerEvents = ""),
        this._prevBtn.classList.remove(cs),
        (this._prevBtn.style.pointerEvents = "");
      const n = this.nowKey;
      (n === 0 ||
        (this._isLoopOneSide &&
          this.positionLoopOneSide === 0 &&
          n === this.count)) &&
        (this._prevBtn.classList.add(cs),
        (this._prevBtn.style.pointerEvents = "none"));
      const t = this.isSp ? this._lastSlideSp : this._lastSlide;
      n >= this.item.length - t &&
        (this._nextBtn.classList.add(cs),
        (this._nextBtn.style.pointerEvents = "none"));
    }
  }
  _setProgress(n) {
    this._progressBar &&
      (bt.set(this._progressBar, { scaleX: n }),
      this._progressCircle &&
        bt.set(this._progressCircle, { left: n * 100 + "%" }));
  }
  _getNowItemKey() {
    let n = 0,
      t = 9999;
    this._listOffsetLeft =
      parseInt(
        this._parent.getBoundingClientRect().left +
          parseInt(
            document.defaultView.getComputedStyle(this._parent, null)
              .paddingLeft
          )
      ) +
      Math.min(Math.max(this.mouseDiff.x * 20, -this._maxMove), this._maxMove);
    const e = this.item.length;
    for (let s = 0; s < e; s++) {
      const r = this.item[s],
        l = Math.abs(r.getPos().x - this._listOffsetLeft);
      l < t && ((t = l), (n = s));
    }
    return n;
  }
  _getXFromItemKey(n) {
    if (this.isDestroyed) return;
    const { sizeDifference: t } = this._option;
    let e = 0,
      s = 0,
      r = 0,
      l = 1;
    if (t) {
      n !== 0 &&
        ((e = this.el.clientWidth / 2), (s = this.item[n].getPos().width / 2));
      for (let c = 0; c < n; c++) r += this.item[c].getPos().width;
    } else (r = this.item[0].getPos().width), (l = n);
    const u = parseInt(
      document.defaultView.getComputedStyle(this.item[0].el, null).marginRight
    );
    return this._option._isLastPositionRight &&
      n >= this.item.length - (this.isSp ? this._lastSlideSp : this._lastSlide)
      ? -this._listSize.x + this.el.clientWidth
      : -(r + u - e + s) * l;
  }
  _getProgress() {
    return Math.abs(this._pos.x) >= this._totalSize - 1
      ? 1
      : this._pos.x > 0
      ? 0
      : Math.abs(this._pos.x) / this._totalSize;
  }
  _getLastPos() {
    return this.item[this.item.length - 1].getPos();
  }
  onIntersect({ isIntersecting: n }) {
    this._isDisable ||
      !this._option ||
      ((this.isIntersecting = n),
      n
        ? (this.play(), this._option.isAutoPlay && this.setTimer())
        : (this._option.isAutoPlay && this.stopTimer(), this.pause()));
  }
  onDestroy() {
    var _this$_option, _this$item;
    this._isDisable ||
      (this._isInit &&
        (this.pause(),
        (_this$_option = this._option) !== null &&
          _this$_option !== void 0 &&
          _this$_option.isAutoPlay &&
          this.stopTimer(),
        (_this$item = this.item) !== null &&
          _this$item !== void 0 &&
          _this$item.forEach((n) => {
            n.dispose();
          }),
        oc(this._parent, this._eMouseOverHandler),
        ac(this._parent, this._eMouseOutHandler),
        this._parent.removeEventListener(
          "mousedown",
          this._eMouseDownHandler,
          Q
        ),
        this._parent.removeEventListener("dragstart", this._eDragstartHandler),
        this._parent.removeEventListener("mousemove", this._eMouseMoveHandler),
        this._parent.removeEventListener("mouseup", this._eMouseUpHandler, Q),
        window.removeEventListener("mouseup", this._eWindowMouseUpHandler, Q),
        this._parent.removeEventListener(
          "touchstart",
          this._eMouseDownHandler,
          Q
        ),
        this._parent.removeEventListener("touchmove", this._eMouseMoveHandler),
        this._parent.removeEventListener("touchend", this._eMouseUpHandler, Q),
        window.removeEventListener("touchend", this._eWindowMouseUpHandler, Q),
        this._nextBtn &&
          this._nextBtn.removeEventListener(
            "click",
            this._eClickNextBtnHandler
          ),
        this._prevBtn &&
          this._prevBtn.removeEventListener(
            "click",
            this._eClickPrevBtnHandler
          ),
        this._progressCircle &&
          (this._progressCircle.removeEventListener(
            "mousedown",
            this._eMouseDownHandler,
            Q
          ),
          this._progressCircle.removeEventListener(
            "mouseup",
            this._eMouseUpHandler,
            Q
          ),
          this._progressCircle.removeEventListener(
            "touchstart",
            this._eMouseDownHandler,
            Q
          ),
          this._progressCircle.removeEventListener(
            "touchend",
            this._eMouseUpHandler,
            Q
          )),
        (this._isDisable = !1),
        (this.item = null),
        (this._isMouseDown = !1),
        (this._isMouseMove = !1),
        (this._isMouseMoveVertical = !1),
        (this._isProgressDrag = !1),
        (this._pos = null),
        (this._posOffset = null),
        (this._startPos = null),
        (this._listSize = null),
        (this._totalSize = 0),
        (this._listOffsetLeft = 0),
        (this._follow = 0),
        (this._isMoving = !1),
        (this._isMoveUseBtn = !1),
        (this._moveTotal = 0),
        (this.nowKey = 0),
        (this._nowKeyCurrent = -1),
        (this._nowKeyNext = -1),
        (this._nowKeyPrev = -1),
        (this._nowKeyCurrent2 = -1),
        (this._nowKeyNext2 = -1),
        (this._nowKeyPrev2 = -1),
        (this._nowKeyCurrent3 = -1),
        (this._nowKeyNext3 = -1),
        (this._nowKeyPrev3 = -1),
        (this._eMouseOverHandler = void 0),
        (this._eMouseOutHandler = void 0),
        (this._eMouseDownHandler = void 0),
        (this._eMouseMoveHandler = void 0),
        (this._eMouseUpHandler = void 0),
        (this._eWindowMouseUpHandler = void 0),
        (this._eClickNextBtnHandler = void 0),
        (this._eClickPrevBtnHandler = void 0),
        (this._eClickNextSlideHandler = void 0),
        (this._eClickPrevSlideHandler = void 0),
        (this._moveTween = void 0),
        (this._lastPos = void 0),
        (this.onClickItem = void 0),
        (this.indexCurrent = 0),
        (this.mouse = null),
        (this.mouseOld = null),
        (this.mouseStart = null),
        (this.mouseDiff = null),
        (this.mouseDist = null)),
      (this._option = null));
  }
}),
_defineProperty(
  _Class6,
  "selectorRoot",
  "[data-slider]:not([data-slider-manual])"
),
_Class6).register();
const ob = 60,
  ab = 30;
class lb extends _t {
  onInit() {
    if (this.isDestroyed) return;
    const { el: t } = this,
      e = t.closest("[data-modal]"),
      {
        isDuplicate: s = !0,
        isShort: r = !1,
        isInModal: l = !!e,
        isStop: u = !1,
        isStopSp: c = !1,
        speed: d = ob,
        speedSp: p = ab
      } = t.dataset.marquee ? JSON.parse(t.dataset.marquee) : {};
    (this._isInModal = l),
      this._isInModal && (this._modalId = e.id || e.dataset.modal),
      (this.elWrapper = t.querySelector("[data-marquee-wrapper]"));
    const m = (this.elInner = t.querySelector("[data-marquee-inner]"));
    if (
      ((this.elSingle = t.querySelector("[data-marquee-single]")),
      (this.isStop = u),
      (this.isStopSp = c),
      (this.speed = this.isSp ? p : d),
      (this.isManual = "marqueeManual" in t.dataset),
      (!this.isSp && this.isStop) || (this.isSp && this.isStopSp)
        ? this.pauseTick()
        : setTimeout(() => {
            this.setSize();
          }, 100),
      s)
    ) {
      this.elsClone = [];
      {
        const _ = this.elSingle.cloneNode(!0);
        m.append(_), this.elsClone.push(_);
      }
      {
        const _ = this.elSingle.cloneNode(!0);
        m.append(_), this.elsClone.push(_);
      }
      if (r)
        if (this.isSp) {
          if (this.isSp) {
            {
              const _ = this.elSingle.cloneNode(!0);
              m.append(_), this.elsClone.push(_);
            }
            {
              const _ = this.elSingle.cloneNode(!0);
              m.append(_), this.elsClone.push(_);
            }
            {
              const _ = this.elSingle.cloneNode(!0);
              m.append(_), this.elsClone.push(_);
            }
          }
        } else {
          {
            const _ = this.elSingle.cloneNode(!0);
            m.append(_), this.elsClone.push(_);
          }
          {
            const _ = this.elSingle.cloneNode(!0);
            m.append(_), this.elsClone.push(_);
          }
          {
            const _ = this.elSingle.cloneNode(!0);
            m.append(_), this.elsClone.push(_);
          }
          {
            const _ = this.elSingle.cloneNode(!0);
            m.append(_), this.elsClone.push(_);
          }
          {
            const _ = this.elSingle.cloneNode(!0);
            m.append(_), this.elsClone.push(_);
          }
        }
    }
  }
  setSize() {
    this._widthSingle =
      this.option.widthSingle || this.elSingle.getBoundingClientRect().width;
  }
  onIntersect({ isIntersecting: t }) {
    this.isDestroyed ||
      this.isManual ||
      this._isInModal ||
      (!this.isSp && this.isStop) ||
      (this.isSp && this.isStopSp) ||
      (t ? this.play() : this.pause());
  }
  play() {
    this.elWrapper &&
      (this._isPlay ||
        ((this._isPlay = !0),
        (this.elWrapper.style.willChange = "transform"),
        this.playTick()));
  }
  pause() {
    this._isPlay &&
      ((this._isPlay = !1),
      this.pauseTick(),
      this.elWrapper && (this.elWrapper.style.willChange = ""));
  }
  onTick(t) {
    this.elWrapper.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-${
      (t * this.speed) % this._widthSingle
    },0,0,1)`;
  }
  onStartOpenModal(t) {
    if (!((!this.isSp && this.isStop) || (this.isSp && this.isStopSp))) {
      if (
        (setTimeout(() => {
          this.setSize();
        }, 100),
        this._isInModal)
      ) {
        t === this._modalId && this.play();
        return;
      }
      (this._isPlayPrev = this._isPlay), this._isPlayPrev && this.pause();
    }
  }
  onStartCloseModal() {
    (!this.isSp && this.isStop) ||
      (this.isSp && this.isStopSp) ||
      (this._isPlayPrev && (this.play(), (this._isPlayPrev = !1)));
  }
  onCompleteCloseModal() {
    if (
      !((!this.isSp && this.isStop) || (this.isSp && this.isStopSp)) &&
      this._isInModal
    ) {
      this.pause();
      return;
    }
  }
  onDestroy() {
    this.pause(),
      this.elsClone &&
        this.elsClone.forEach((t, e) => {
          t.remove();
        }),
      (this._listener = null);
  }
}
_defineProperty(lb, "selectorRoot", "[data-marquee]:not([data-manual])");
lb.register();
class hb extends _t {
  onInit() {
    const { el: t } = this;
    this.addIntersectionObserver({
      el: t,
      callback: ({ isIntersecting: e }, s) => {
        e && t.classList.add("isIntersect_opacity");
      },
      param: { rootMargin: "0% 0% -20% 0%" },
      once: !0
    });
  }
}
_defineProperty(hb, "selectorRoot", "[data-opacity-io]");
hb.register();
var ub = Object.defineProperty,
  cb = (n, t, e) =>
    t in n
      ? ub(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (n[t] = e),
  ei = (n, t, e) => (cb(n, typeof t != "symbol" ? t + "" : t, e), e);
function db(n, t) {
  const e = Object.create(null),
    s = n.split(",");
  for (let r = 0; r < s.length; r++) e[s[r]] = !0;
  return t ? (r) => !!e[r.toLowerCase()] : (r) => !!e[r];
}
function xc(n) {
  if (Ct(n)) {
    const t = {};
    for (let e = 0; e < n.length; e++) {
      const s = n[e],
        r = Vi(s) ? mb(s) : xc(s);
      if (r) for (const l in r) t[l] = r[l];
    }
    return t;
  } else if (Vi(n) || Ue(n)) return n;
}
const pb = /;(?![^(]*\))/g,
  fb = /:(.+)/;
function mb(n) {
  const t = {};
  return (
    n.split(pb).forEach((e) => {
      if (e) {
        const s = e.split(fb);
        s.length > 1 && (t[s[0].trim()] = s[1].trim());
      }
    }),
    t
  );
}
function Sc(n) {
  let t = "";
  if (Vi(n)) t = n;
  else if (Ct(n))
    for (let e = 0; e < n.length; e++) {
      const s = Sc(n[e]);
      s && (t += s + " ");
    }
  else if (Ue(n)) for (const e in n) n[e] && (t += e + " ");
  return t.trim();
}
function _b(n, t) {
  if (n.length !== t.length) return !1;
  let e = !0;
  for (let s = 0; e && s < n.length; s++) e = Li(n[s], t[s]);
  return e;
}
function Li(n, t) {
  if (n === t) return !0;
  let e = lh(n),
    s = lh(t);
  if (e || s) return e && s ? n.getTime() === t.getTime() : !1;
  if (((e = Ct(n)), (s = Ct(t)), e || s)) return e && s ? _b(n, t) : !1;
  if (((e = Ue(n)), (s = Ue(t)), e || s)) {
    if (!e || !s) return !1;
    const r = Object.keys(n).length,
      l = Object.keys(t).length;
    if (r !== l) return !1;
    for (const u in n) {
      const c = n.hasOwnProperty(u),
        d = t.hasOwnProperty(u);
      if ((c && !d) || (!c && d) || !Li(n[u], t[u])) return !1;
    }
  }
  return String(n) === String(t);
}
function Or(n, t) {
  return n.findIndex((e) => Li(e, t));
}
const vb = Object.assign,
  gb = (n, t) => {
    const e = n.indexOf(t);
    e > -1 && n.splice(e, 1);
  },
  bb = Object.prototype.hasOwnProperty,
  qo = (n, t) => bb.call(n, t),
  Ct = Array.isArray,
  Fr = (n) => Ec(n) === "[object Map]",
  lh = (n) => n instanceof Date,
  Vi = (n) => typeof n == "string",
  Go = (n) => typeof n == "symbol",
  Ue = (n) => n !== null && typeof n == "object",
  wb = Object.prototype.toString,
  Ec = (n) => wb.call(n),
  yb = (n) => Ec(n).slice(8, -1),
  Wo = (n) =>
    Vi(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n,
  Pc = (n) => {
    const t = Object.create(null);
    return (e) => t[e] || (t[e] = n(e));
  },
  Db = /-(\w)/g,
  Cb = Pc((n) => n.replace(Db, (t, e) => (e ? e.toUpperCase() : ""))),
  xb = /\B([A-Z])/g,
  kc = Pc((n) => n.replace(xb, "-$1").toLowerCase()),
  Sb = (n, t) => !Object.is(n, t),
  hh = (n) => {
    const t = parseFloat(n);
    return isNaN(t) ? n : t;
  };
let Eb;
function Lc(n, t) {
  (t = t || Eb), t && t.active && t.effects.push(n);
}
const Mc = (n) => {
    const t = new Set(n);
    return (t.w = 0), (t.n = 0), t;
  },
  Tc = (n) => (n.w & Ke) > 0,
  Ac = (n) => (n.n & Ke) > 0,
  Pb = ({ deps: n }) => {
    if (n.length) for (let t = 0; t < n.length; t++) n[t].w |= Ke;
  },
  kb = (n) => {
    const { deps: t } = n;
    if (t.length) {
      let e = 0;
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        Tc(r) && !Ac(r) ? r.delete(n) : (t[e++] = r),
          (r.w &= ~Ke),
          (r.n &= ~Ke);
      }
      t.length = e;
    }
  },
  ao = new WeakMap();
let ms = 0,
  Ke = 1;
const lo = 30,
  ds = [];
let ai;
const fn = Symbol(""),
  uh = Symbol("");
class Lb {
  constructor(t, e = null, s) {
    (this.fn = t),
      (this.scheduler = e),
      (this.active = !0),
      (this.deps = []),
      Lc(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    if (!ds.includes(this))
      try {
        return (
          ds.push((ai = this)),
          Ob(),
          (Ke = 1 << ++ms),
          ms <= lo ? Pb(this) : ch(this),
          this.fn()
        );
      } finally {
        ms <= lo && kb(this), (Ke = 1 << --ms), Oc(), ds.pop();
        const t = ds.length;
        ai = t > 0 ? ds[t - 1] : void 0;
      }
  }
  stop() {
    this.active && (ch(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function ch(n) {
  const { deps: t } = n;
  if (t.length) {
    for (let e = 0; e < t.length; e++) t[e].delete(n);
    t.length = 0;
  }
}
function Mb(n, t) {
  n.effect && (n = n.effect.fn);
  const e = new Lb(n);
  t && (vb(e, t), t.scope && Lc(e, t.scope)), (!t || !t.lazy) && e.run();
  const s = e.run.bind(e);
  return (s.effect = e), s;
}
function Tb(n) {
  n.effect.stop();
}
let Ni = !0;
const Yo = [];
function Ab() {
  Yo.push(Ni), (Ni = !1);
}
function Ob() {
  Yo.push(Ni), (Ni = !0);
}
function Oc() {
  const n = Yo.pop();
  Ni = n === void 0 ? !0 : n;
}
function Fn(n, t, e) {
  if (!Fb()) return;
  let s = ao.get(n);
  s || ao.set(n, (s = new Map()));
  let r = s.get(e);
  r || s.set(e, (r = Mc())), Rb(r);
}
function Fb() {
  return Ni && ai !== void 0;
}
function Rb(n, t) {
  let e = !1;
  ms <= lo ? Ac(n) || ((n.n |= Ke), (e = !Tc(n))) : (e = !n.has(ai)),
    e && (n.add(ai), ai.deps.push(n));
}
function ho(n, t, e, s, r, l) {
  const u = ao.get(n);
  if (!u) return;
  let c = [];
  if (t === "clear") c = [...u.values()];
  else if (e === "length" && Ct(n))
    u.forEach((d, p) => {
      (p === "length" || p >= s) && c.push(d);
    });
  else
    switch ((e !== void 0 && c.push(u.get(e)), t)) {
      case "add":
        Ct(n)
          ? Wo(e) && c.push(u.get("length"))
          : (c.push(u.get(fn)), Fr(n) && c.push(u.get(uh)));
        break;
      case "delete":
        Ct(n) || (c.push(u.get(fn)), Fr(n) && c.push(u.get(uh)));
        break;
      case "set":
        Fr(n) && c.push(u.get(fn));
        break;
    }
  if (c.length === 1) c[0] && dh(c[0]);
  else {
    const d = [];
    for (const p of c) p && d.push(...p);
    dh(Mc(d));
  }
}
function dh(n, t) {
  for (const e of Ct(n) ? n : [...n])
    (e !== ai || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Ib = db("__proto__,__v_isRef,__isVue"),
  Fc = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((n) => Symbol[n])
      .filter(Go)
  ),
  Bb = Rc(),
  Vb = Rc(!0),
  ph = Nb();
function Nb() {
  const n = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      n[t] = function (...e) {
        const s = li(this);
        for (let l = 0, u = this.length; l < u; l++) Fn(s, "get", l + "");
        const r = s[t](...e);
        return r === -1 || r === !1 ? s[t](...e.map(li)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      n[t] = function (...e) {
        Ab();
        const s = li(this)[t].apply(this, e);
        return Oc(), s;
      };
    }),
    n
  );
}
function Rc(n = !1, t = !1) {
  return function (e, s, r) {
    if (s === "__v_isReactive") return !n;
    if (s === "__v_isReadonly") return n;
    if (s === "__v_raw" && r === (n ? (t ? Wb : Bc) : t ? Gb : Ic).get(e))
      return e;
    const l = Ct(e);
    if (!n && l && qo(ph, s)) return Reflect.get(ph, s, r);
    const u = Reflect.get(e, s, r);
    return (Go(s) ? Fc.has(s) : Ib(s)) || (n || Fn(e, "get", s), t)
      ? u
      : uo(u)
      ? !l || !Wo(s)
        ? u.value
        : u
      : Ue(u)
      ? n
        ? Jb(u)
        : di(u)
      : u;
  };
}
const zb = Hb();
function Hb(n = !1) {
  return function (t, e, s, r) {
    let l = t[e];
    if (!n && !Zb(s) && ((s = li(s)), (l = li(l)), !Ct(t) && uo(l) && !uo(s)))
      return (l.value = s), !0;
    const u = Ct(t) && Wo(e) ? Number(e) < t.length : qo(t, e),
      c = Reflect.set(t, e, s, r);
    return (
      t === li(r) && (u ? Sb(s, l) && ho(t, "set", e, s) : ho(t, "add", e, s)),
      c
    );
  };
}
function Ub(n, t) {
  const e = qo(n, t);
  n[t];
  const s = Reflect.deleteProperty(n, t);
  return s && e && ho(n, "delete", t, void 0), s;
}
function Kb(n, t) {
  const e = Reflect.has(n, t);
  return (!Go(t) || !Fc.has(t)) && Fn(n, "has", t), e;
}
function jb(n) {
  return Fn(n, "iterate", Ct(n) ? "length" : fn), Reflect.ownKeys(n);
}
const $b = { get: Bb, set: zb, deleteProperty: Ub, has: Kb, ownKeys: jb },
  qb = {
    get: Vb,
    set(n, t) {
      return !0;
    },
    deleteProperty(n, t) {
      return !0;
    }
  },
  Ic = new WeakMap(),
  Gb = new WeakMap(),
  Bc = new WeakMap(),
  Wb = new WeakMap();
function Yb(n) {
  switch (n) {
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
function Xb(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : Yb(yb(n));
}
function di(n) {
  return n && n.__v_isReadonly ? n : Vc(n, !1, $b, null, Ic);
}
function Jb(n) {
  return Vc(n, !0, qb, null, Bc);
}
function Vc(n, t, e, s, r) {
  if (!Ue(n) || (n.__v_raw && !(t && n.__v_isReactive))) return n;
  const l = r.get(n);
  if (l) return l;
  const u = Xb(n);
  if (u === 0) return n;
  const c = new Proxy(n, u === 2 ? s : e);
  return r.set(n, c), c;
}
function Zb(n) {
  return !!(n && n.__v_isReadonly);
}
function li(n) {
  const t = n && n.__v_raw;
  return t ? li(t) : n;
}
function uo(n) {
  return !!(n && n.__v_isRef === !0);
}
Promise.resolve();
let co = !1;
const Ln = [],
  Qb = Promise.resolve(),
  Rn = (n) => Qb.then(n),
  fh = (n) => {
    Ln.includes(n) || Ln.push(n), co || ((co = !0), Rn(tw));
  },
  tw = () => {
    for (const n of Ln) n();
    (Ln.length = 0), (co = !1);
  },
  ew = /^(spellcheck|draggable|form|list|type)$/,
  po = ({ el: n, get: t, effect: e, arg: s, modifiers: r }) => {
    let l;
    s === "class" && (n._class = n.className),
      e(() => {
        let u = t();
        if (s)
          r !== null && r !== void 0 && r.camel && (s = Cb(s)), Rr(n, s, u, l);
        else {
          for (const c in u) Rr(n, c, u[c], l && l[c]);
          for (const c in l) (!u || !(c in u)) && Rr(n, c, null);
        }
        l = u;
      });
  },
  Rr = (n, t, e, s) => {
    if (t === "class")
      n.setAttribute("class", Sc(n._class ? [n._class, e] : e) || "");
    else if (t === "style") {
      e = xc(e);
      const { style: r } = n;
      if (!e) n.removeAttribute("style");
      else if (Vi(e)) e !== s && (r.cssText = e);
      else {
        for (const l in e) fo(r, l, e[l]);
        if (s && !Vi(s)) for (const l in s) e[l] == null && fo(r, l, "");
      }
    } else
      !(n instanceof SVGElement) && t in n && !ew.test(t)
        ? ((n[t] = e), t === "value" && (n._value = e))
        : t === "true-value"
        ? (n._trueValue = e)
        : t === "false-value"
        ? (n._falseValue = e)
        : e != null
        ? n.setAttribute(t, e)
        : n.removeAttribute(t);
  },
  mh = /\s*!important$/,
  fo = (n, t, e) => {
    Ct(e)
      ? e.forEach((s) => fo(n, t, s))
      : t.startsWith("--")
      ? n.setProperty(t, e)
      : mh.test(e)
      ? n.setProperty(kc(t), e.replace(mh, ""), "important")
      : (n[t] = e);
  },
  Me = (n, t) => {
    const e = n.getAttribute(t);
    return e != null && n.removeAttribute(t), e;
  },
  Le = (n, t, e, s) => {
    n.addEventListener(t, e, s);
  },
  iw =
    /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
  sw = ["ctrl", "shift", "alt", "meta"],
  nw = {
    stop: (n) => n.stopPropagation(),
    prevent: (n) => n.preventDefault(),
    self: (n) => n.target !== n.currentTarget,
    ctrl: (n) => !n.ctrlKey,
    shift: (n) => !n.shiftKey,
    alt: (n) => !n.altKey,
    meta: (n) => !n.metaKey,
    left: (n) => "button" in n && n.button !== 0,
    middle: (n) => "button" in n && n.button !== 1,
    right: (n) => "button" in n && n.button !== 2,
    exact: (n, t) => sw.some((e) => n[`${e}Key`] && !t[e])
  },
  Nc = ({ el: n, get: t, exp: e, arg: s, modifiers: r }) => {
    if (!s) return;
    let l = iw.test(e) ? t(`(e => ${e}(e))`) : t(`($event => { ${e} })`);
    if (s === "vue:mounted") {
      Rn(l);
      return;
    } else if (s === "vue:unmounted") return () => l();
    if (r) {
      s === "click" &&
        (r.right && (s = "contextmenu"), r.middle && (s = "mouseup"));
      const u = l;
      l = (c) => {
        if (!("key" in c && !(kc(c.key) in r))) {
          for (const d in r) {
            const p = nw[d];
            if (p && p(c, r)) return;
          }
          return u(c);
        }
      };
    }
    Le(n, s, l, r);
  },
  rw = ({ el: n, get: t, effect: e }) => {
    const s = n.style.display;
    e(() => {
      n.style.display = t() ? s : "none";
    });
  },
  zc = ({ el: n, get: t, effect: e }) => {
    e(() => {
      n.textContent = Hc(t());
    });
  },
  Hc = (n) => (n == null ? "" : Ue(n) ? JSON.stringify(n, null, 2) : String(n)),
  ow = ({ el: n, get: t, effect: e }) => {
    e(() => {
      n.innerHTML = t();
    });
  },
  aw = ({ el: n, exp: t, get: e, effect: s, modifiers: r }) => {
    const l = n.type,
      u = e(`(val) => { ${t} = val }`),
      { trim: c, number: d = l === "number" } = r || {};
    if (n.tagName === "SELECT") {
      const p = n;
      Le(n, "change", () => {
        const m = Array.prototype.filter
          .call(p.options, (_) => _.selected)
          .map((_) => (d ? hh(ke(_)) : ke(_)));
        u(p.multiple ? m : m[0]);
      }),
        s(() => {
          const m = e(),
            _ = p.multiple;
          for (let g = 0, y = p.options.length; g < y; g++) {
            const w = p.options[g],
              v = ke(w);
            if (_)
              Ct(m) ? (w.selected = Or(m, v) > -1) : (w.selected = m.has(v));
            else if (Li(ke(w), m)) {
              p.selectedIndex !== g && (p.selectedIndex = g);
              return;
            }
          }
          !_ && p.selectedIndex !== -1 && (p.selectedIndex = -1);
        });
    } else if (l === "checkbox") {
      Le(n, "change", () => {
        const m = e(),
          _ = n.checked;
        if (Ct(m)) {
          const g = ke(n),
            y = Or(m, g),
            w = y !== -1;
          if (_ && !w) u(m.concat(g));
          else if (!_ && w) {
            const v = [...m];
            v.splice(y, 1), u(v);
          }
        } else u(_h(n, _));
      });
      let p;
      s(() => {
        const m = e();
        Ct(m)
          ? (n.checked = Or(m, ke(n)) > -1)
          : m !== p && (n.checked = Li(m, _h(n, !0))),
          (p = m);
      });
    } else if (l === "radio") {
      Le(n, "change", () => {
        u(ke(n));
      });
      let p;
      s(() => {
        const m = e();
        m !== p && (n.checked = Li(m, ke(n)));
      });
    } else {
      const p = (m) => (c ? m.trim() : d ? hh(m) : m);
      Le(n, "compositionstart", lw),
        Le(n, "compositionend", hw),
        Le(n, r !== null && r !== void 0 && r.lazy ? "change" : "input", () => {
          n.composing || u(p(n.value));
        }),
        c &&
          Le(n, "change", () => {
            n.value = n.value.trim();
          }),
        s(() => {
          if (n.composing) return;
          const m = n.value,
            _ = e();
          (document.activeElement === n && p(m) === _) ||
            (m !== _ && (n.value = _));
        });
    }
  },
  ke = (n) => ("_value" in n ? n._value : n.value),
  _h = (n, t) => {
    const e = t ? "_trueValue" : "_falseValue";
    return e in n ? n[e] : t;
  },
  lw = (n) => {
    n.target.composing = !0;
  },
  hw = (n) => {
    const t = n.target;
    t.composing && ((t.composing = !1), uw(t, "input"));
  },
  uw = (n, t) => {
    const e = document.createEvent("HTMLEvents");
    e.initEvent(t, !0, !0), n.dispatchEvent(e);
  },
  vh = Object.create(null),
  zs = (n, t, e) => Uc(n, `return(${t})`, e),
  Uc = (n, t, e) => {
    const s = vh[t] || (vh[t] = cw(t));
    try {
      return s(n, e);
    } catch (r) {
      console.error(r);
    }
  },
  cw = (n) => {
    try {
      return new Function("$data", "$el", `with($data){${n}}`);
    } catch (t) {
      return console.error(`${t.message} in expression: ${n}`), () => {};
    }
  },
  dw = ({ el: n, ctx: t, exp: e, effect: s }) => {
    Rn(() => s(() => Uc(t.scope, e, n)));
  },
  pw = {
    bind: po,
    on: Nc,
    show: rw,
    text: zc,
    html: ow,
    model: aw,
    effect: dw
  },
  fw = (n, t, e) => {
    const s = n.parentElement,
      r = new Comment("v-if");
    s.insertBefore(r, n);
    const l = [{ exp: t, el: n }];
    let u, c;
    for (
      ;
      (u = n.nextElementSibling) &&
      ((c = null), Me(u, "v-else") === "" || (c = Me(u, "v-else-if")));

    )
      s.removeChild(u), l.push({ exp: c, el: u });
    const d = n.nextSibling;
    s.removeChild(n);
    let p,
      m = -1;
    const _ = () => {
      p && (s.insertBefore(r, p.el), p.remove(), (p = void 0));
    };
    return (
      e.effect(() => {
        for (let g = 0; g < l.length; g++) {
          const { exp: y, el: w } = l[g];
          if (!y || zs(e.scope, y)) {
            g !== m &&
              (_(),
              (p = new Xo(w, e)),
              p.insert(s, r),
              s.removeChild(r),
              (m = g));
            return;
          }
        }
        (m = -1), _();
      }),
      d
    );
  },
  mw = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
  gh = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
  _w = /^\(|\)$/g,
  vw = /^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/,
  gw = (n, t, e) => {
    const s = t.match(mw);
    if (!s) return;
    const r = n.nextSibling,
      l = n.parentElement,
      u = new Text("");
    l.insertBefore(u, n), l.removeChild(n);
    const c = s[2].trim();
    let d = s[1].trim().replace(_w, "").trim(),
      p,
      m = !1,
      _,
      g,
      y = "key",
      w =
        n.getAttribute(y) ||
        n.getAttribute((y = ":key")) ||
        n.getAttribute((y = "v-bind:key"));
    w && (n.removeAttribute(y), y === "key" && (w = JSON.stringify(w)));
    let v;
    (v = d.match(gh)) &&
      ((d = d.replace(gh, "").trim()),
      (_ = v[1].trim()),
      v[2] && (g = v[2].trim())),
      (v = d.match(vw)) &&
        ((p = v[1].split(",").map((L) => L.trim())), (m = d[0] === "["));
    let D = !1,
      S,
      C,
      P;
    const k = (L) => {
        const T = new Map(),
          M = [];
        if (Ct(L)) for (let B = 0; B < L.length; B++) M.push(A(T, L[B], B));
        else if (typeof L == "number")
          for (let B = 0; B < L; B++) M.push(A(T, B + 1, B));
        else if (Ue(L)) {
          let B = 0;
          for (const V in L) M.push(A(T, L[V], B++, V));
        }
        return [M, T];
      },
      A = (L, T, M, B) => {
        const V = {};
        p ? p.forEach((et, $) => (V[et] = T[m ? $ : et])) : (V[d] = T),
          B ? (_ && (V[_] = B), g && (V[g] = M)) : _ && (V[_] = M);
        const G = qc(e, V),
          j = w ? zs(G.scope, w) : M;
        return L.set(j, M), (G.key = j), G;
      },
      O = (L, T) => {
        const M = new Xo(n, L);
        return (M.key = L.key), M.insert(l, T), M;
      };
    return (
      e.effect(() => {
        const L = zs(e.scope, c),
          T = P;
        if ((([C, P] = k(L)), !D)) (S = C.map((M) => O(M, u))), (D = !0);
        else {
          for (let j = 0; j < S.length; j++) P.has(S[j].key) || S[j].remove();
          const M = [];
          let B = C.length,
            V,
            G;
          for (; B--; ) {
            const j = C[B],
              et = T.get(j.key);
            let $;
            et == null
              ? ($ = O(j, V ? V.el : u))
              : (($ = S[et]),
                Object.assign($.ctx.scope, j.scope),
                et !== B &&
                  (S[et + 1] !== V || G === V) &&
                  ((G = $), $.insert(l, V ? V.el : u))),
              M.unshift((V = $));
          }
          S = M;
        }
      }),
      r
    );
  },
  Kc = ({
    el: n,
    ctx: {
      scope: { $refs: t }
    },
    get: e,
    effect: s
  }) => {
    let r;
    return (
      s(() => {
        const l = e();
        (t[l] = n), r && l !== r && delete t[r], (r = l);
      }),
      () => {
        r && delete t[r];
      }
    );
  },
  bw = /^(?:v-|:|@)/,
  ww = /\.([\w-]+)/g;
let mo = !1;
const jc = (n, t) => {
    const e = n.nodeType;
    if (e === 1) {
      const s = n;
      if (s.hasAttribute("v-pre")) return;
      Me(s, "v-cloak");
      let r;
      if ((r = Me(s, "v-if"))) return fw(s, r, t);
      if ((r = Me(s, "v-for"))) return gw(s, r, t);
      if ((r = Me(s, "v-scope")) || r === "") {
        const c = r ? zs(t.scope, r) : {};
        (t = qc(t, c)), c.$template && yw(s, c.$template);
      }
      const l = Me(s, "v-once") != null;
      l && (mo = !0), (r = Me(s, "ref")) && _o(s, Kc, `"${r}"`, t), bh(s, t);
      const u = [];
      for (const { name: c, value: d } of [...s.attributes])
        bw.test(c) &&
          c !== "v-cloak" &&
          (c === "v-model"
            ? u.unshift([c, d])
            : c[0] === "@" || /^v-on\b/.test(c)
            ? u.push([c, d])
            : wh(s, c, d, t));
      for (const [c, d] of u) wh(s, c, d, t);
      l && (mo = !1);
    } else if (e === 3) {
      const s = n.data;
      if (s.includes(t.delimiters[0])) {
        let r = [],
          l = 0,
          u;
        for (; (u = t.delimitersRE.exec(s)); ) {
          const c = s.slice(l, u.index);
          c && r.push(JSON.stringify(c)),
            r.push(`$s(${u[1]})`),
            (l = u.index + u[0].length);
        }
        l < s.length && r.push(JSON.stringify(s.slice(l))),
          _o(n, zc, r.join("+"), t);
      }
    } else e === 11 && bh(n, t);
  },
  bh = (n, t) => {
    let e = n.firstChild;
    for (; e; ) e = jc(e, t) || e.nextSibling;
  },
  wh = (n, t, e, s) => {
    let r, l, u;
    if (
      ((t = t.replace(ww, (c, d) => (((u || (u = {}))[d] = !0), ""))),
      t[0] === ":")
    )
      (r = po), (l = t.slice(1));
    else if (t[0] === "@") (r = Nc), (l = t.slice(1));
    else {
      const c = t.indexOf(":"),
        d = c > 0 ? t.slice(2, c) : t.slice(2);
      (r = pw[d] || s.dirs[d]), (l = c > 0 ? t.slice(c + 1) : void 0);
    }
    r &&
      (r === po && l === "ref" && (r = Kc),
      _o(n, r, e, s, l, u),
      n.removeAttribute(t));
  },
  _o = (n, t, e, s, r, l) => {
    const u = t({
      el: n,
      get: (c = e) => zs(s.scope, c, n),
      effect: s.effect,
      ctx: s,
      exp: e,
      arg: r,
      modifiers: l
    });
    u && s.cleanups.push(u);
  },
  yw = (n, t) => {
    if (t[0] === "#") {
      const e = document.querySelector(t);
      n.appendChild(e.content.cloneNode(!0));
      return;
    }
    n.innerHTML = t;
  },
  $c = (n) => {
    const t = {
      delimiters: ["{{", "}}"],
      delimitersRE: /\{\{([^]+?)\}\}/g,
      ...n,
      scope: n ? n.scope : di({}),
      dirs: n ? n.dirs : {},
      effects: [],
      blocks: [],
      cleanups: [],
      effect: (e) => {
        if (mo) return fh(e), e;
        const s = Mb(e, { scheduler: () => fh(s) });
        return t.effects.push(s), s;
      }
    };
    return t;
  },
  qc = (n, t = {}) => {
    const e = n.scope,
      s = Object.create(e);
    Object.defineProperties(s, Object.getOwnPropertyDescriptors(t)),
      (s.$refs = Object.create(e.$refs));
    const r = di(
      new Proxy(s, {
        set(l, u, c, d) {
          return d === r && !l.hasOwnProperty(u)
            ? Reflect.set(e, u, c)
            : Reflect.set(l, u, c, d);
        }
      })
    );
    return Gc(r), { ...n, scope: r };
  },
  Gc = (n) => {
    for (const t of Object.keys(n))
      typeof n[t] == "function" && (n[t] = n[t].bind(n));
  };
class Xo {
  constructor(t, e, s = !1) {
    ei(this, "template"),
      ei(this, "ctx"),
      ei(this, "key"),
      ei(this, "parentCtx"),
      ei(this, "isFragment"),
      ei(this, "start"),
      ei(this, "end"),
      (this.isFragment = t instanceof HTMLTemplateElement),
      s
        ? (this.template = t)
        : this.isFragment
        ? (this.template = t.content.cloneNode(!0))
        : (this.template = t.cloneNode(!0)),
      s
        ? (this.ctx = e)
        : ((this.parentCtx = e), e.blocks.push(this), (this.ctx = $c(e))),
      jc(this.template, this.ctx);
  }
  get el() {
    return this.start || this.template;
  }
  insert(t, e = null) {
    if (this.isFragment) {
      if (this.start) {
        let s = this.start,
          r;
        for (
          ;
          s && ((r = s.nextSibling), t.insertBefore(s, e), s !== this.end);

        )
          s = r;
      } else
        (this.start = new Text("")),
          (this.end = new Text("")),
          t.insertBefore(this.end, e),
          t.insertBefore(this.start, this.end),
          t.insertBefore(this.template, this.end);
    } else t.insertBefore(this.template, e);
  }
  remove() {
    if ((this.parentCtx && gb(this.parentCtx.blocks, this), this.start)) {
      const t = this.start.parentNode;
      let e = this.start,
        s;
      for (; e && ((s = e.nextSibling), t.removeChild(e), e !== this.end); )
        e = s;
    } else this.template.parentNode.removeChild(this.template);
    this.teardown();
  }
  teardown() {
    this.ctx.blocks.forEach((t) => {
      t.teardown();
    }),
      this.ctx.effects.forEach(Tb),
      this.ctx.cleanups.forEach((t) => t());
  }
}
const yh = (n) => n.replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&"),
  In = (n) => {
    const t = $c();
    if (n && ((t.scope = di(n)), Gc(t.scope), n.$delimiters)) {
      const [s, r] = (t.delimiters = n.$delimiters);
      t.delimitersRE = new RegExp(yh(s) + "([^]+?)" + yh(r), "g");
    }
    (t.scope.$s = Hc),
      (t.scope.$nextTick = Rn),
      (t.scope.$refs = Object.create(null));
    let e;
    return {
      directive(s, r) {
        return r ? ((t.dirs[s] = r), this) : t.dirs[s];
      },
      mount(s) {
        if (typeof s == "string" && ((s = document.querySelector(s)), !s))
          return;
        s = s || document.documentElement;
        let r;
        return (
          s.hasAttribute("v-scope")
            ? (r = [s])
            : (r = [...s.querySelectorAll("[v-scope]")].filter(
                (l) => !l.matches("[v-scope] [v-scope]")
              )),
          r.length || (r = [s]),
          (e = r.map((l) => new Xo(l, t, !0))),
          this
        );
      },
      unmount() {
        e.forEach((s) => s.teardown());
      }
    };
  },
  Dh = document.currentScript;
Dh && Dh.hasAttribute("init") && In().mount();
function Ch() {
  return new URL(document.location);
}
function Dw(n, t) {
  return n.searchParams.get(t);
}
function Cw(n, t, e) {
  n.searchParams.set(t, e);
}
function xw(n, t) {
  n.searchParams.delete(t);
}
function Sw(n) {
  window.history.pushState(null, "", n);
}
const Ew = 8,
  Pw = 5,
  Wc = 3,
  Ir = At.isSp ? Wc : Pw,
  kw = 0;
class Lw extends _t {
  onInit() {
    (this.maxPager = this.isSp ? Wc : Ir),
      (this.listStore = this.option.store),
      (this.elPager = this.el.querySelector("[data-pager-inner]") || this.el),
      (this.prev = this.elPager.querySelector("[data-pager-prev]")),
      (this.next = this.elPager.querySelector("[data-pager-next]")),
      (this.scrollTarget = document.querySelector(
        this.el.dataset.listScrollTo
      )),
      this.scrollTarget &&
        (this.scrollTargetFocus = this.scrollTarget.querySelector(
          "a, label, select, button, input[type=radio], input[type=checkbox]"
        )),
      (this.targetList = document.querySelector(
        this.el.dataset.pagerTargetList
      ));
    const t = (this.pagerStore = di({
      chunkData: [],
      numbers: [],
      maxNumber: {},
      minNumber: {},
      hasMoreNext: !1,
      hasMorePrev: !1,
      isFirst: !1,
      isShowMax: !1,
      isShowMoreNext: !1,
      isShowMin: !1,
      isShowMorePrev: !1
    }));
    this.vue = In({
      pagerStore: t,
      change: (e) => {
        this.changePage(e);
      },
      next: () => {
        this.changePage(this.page + 1);
      },
      prev: () => {
        this.changePage(this.page - 1);
      }
    })
      .directive("visible", ({ el: e, exp: s, get: r, effect: l }) => {
        l(() => {
          e.style.visibility = r(s) ? "visible" : "hidden";
        });
      })
      .mount(this.elPager);
  }
  chunk(t, e) {
    return t.reduce((s, r, l) => (l % e ? s : [...s, t.slice(l, l + e)]), []);
  }
  getPageFromParam() {
    this.url = Ch();
    const t = Dw(this.url, "page");
    this.page = t ? parseInt(t) : 1;
  }
  setParamToURL() {
    (this.url = Ch()),
      this.page === 1 ? xw(this.url, "page") : Cw(this.url, "page", this.page),
      Sw(this.url);
  }
  showList(t, e) {
    (this.listStore.showData = this.pagerStore.chunkData[t - 1] || []),
      setTimeout(() => {
        ui(this.option.listContainer);
      }, 0),
      e
        ? this.listStore.showData.forEach((s, r) => {
            s.isShow = !0;
          })
        : (this.listStore.showData.forEach((s, r) => {
            s.isShow = !1;
          }),
          setTimeout(() => {
            this.listStore.showData.forEach((s, r) => {
              bt.delayedCall(0.1 * r, () => {
                s.isShow = !0;
              });
            });
          }, 200));
  }
  setPager() {
    if (
      (this.page === 1 && this.pagerStore.chunkData.length === 1) ||
      this.pagerStore.chunkData.length === 0
    ) {
      this.hide();
      return;
    } else this.show();
    const t = [],
      e = this.pagerStore.chunkData.length,
      s = Math.max(Math.min(this.page - 1 - kw, e - Ir), 0);
    for (let r = s; r < e && r !== s + Ir; r++) {
      const l = r + 1;
      t.push({ pageNumber: l, text: so(l), isCurrent: l === this.page });
    }
    (this.pagerStore.maxNumber = { pageNumber: e, text: so(e) }),
      (this.pagerStore.isShowMax = e !== t[t.length - 1].pageNumber),
      (this.pagerStore.isShowMoreNext = e - t[t.length - 1].pageNumber > 1),
      (this.pagerStore.minNumber = { pageNumber: 1, text: "01" }),
      (this.pagerStore.isShowMin = t[0].pageNumber - 1 > 0),
      (this.pagerStore.isShowMorePrev = t[0].pageNumber - 1 > 1),
      (this.pagerStore.numbers = t);
  }
  judgeMore() {
    (this.pagerStore.hasMorePrev = this.page !== 1),
      (this.pagerStore.hasMoreNext =
        this.page !== this.pagerStore.maxNumber.pageNumber);
  }
  update({ isImmediate: t }) {
    (this.pagerStore.chunkData = this.chunk(this.listStore.sortedData, Ew)),
      this.listStore.isFirst
        ? (this.getPageFromParam(),
          this.page > this.pagerStore.chunkData.length
            ? this.changePage(1, !1, t)
            : this.changePage(this.page, !1, t))
        : this.changePage(1, !1, t);
  }
  async changePage(t, e = !0, s) {
    (this.page = t),
      this.option.replaceAnimation(() => this.showList(t, s), s),
      this.setPager(),
      this.judgeMore(),
      e && this.setParamToURL();
  }
  show() {
    this.elPager.style.display = "";
  }
  hide() {
    this.elPager.style.display = "none";
  }
}
_defineProperty(Lw, "selectorRoot", "[data-pager]");
const Mw = 10;
class Tw extends _t {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "pageCount", 0);
  }
  onInit() {
    (this.limitNumber = Number(this.el.dataset.viewMore) || Mw),
      (this.listData = this.option.store);
  }
  showList(t, e) {
    (this.listData.showData = t),
      setTimeout(() => {
        ui(this.option.listContainer);
      }, 0),
      e
        ? this.listData.showData.forEach((s, r) => {
            s.isShow = !0;
          })
        : setTimeout(() => {
            this.listData.showData.forEach((s, r) => {
              gsap.delayedCall(
                0.1 * Math.max(r - this.limitNumber * (this.pageCount - 1), 0),
                () => {
                  s.isShow = !0;
                }
              );
            });
          }, 100);
  }
  setMore() {
    this.listData.showData.length < this.listData.sortedData.length
      ? this.show()
      : this.hide();
  }
  showNext(t) {
    this.pageCount++;
    const e = this.listData.sortedData.slice(
      0,
      this.limitNumber * this.pageCount
    );
    this.option.replaceAnimation(() => {
      this.showList(e, t), this.setMore();
    }, t);
  }
  showAll() {
    (this.listData.showData = this.listData.sortedData),
      this.hide(),
      requestAnimationFrame(() => {
        this.option.listContainer
          .querySelectorAll("a[href]")
          [this.limitNumber + 1].focus();
      });
  }
  async reset(t) {
    (this.pageCount = 0), this.showNext(t);
  }
  onClick() {
    this.showNext();
  }
  onIntersect({ isIntersecting: t }) {
    t && this.showNext();
  }
  hide() {
    this.el.style.display = "none";
  }
  show() {
    this.el.style.display = "block";
  }
}
_defineProperty(Tw, "selectorRoot", "[data-view-more]");
_defineProperty(Tw, "intersectOptions", { rootMargin: "0% 0% -30%" });
const Aw = { duration: 1 };
class Ow extends _t {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "input", void 0);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "value", void 0);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "label", void 0);
    _defineProperty(this, "textElem", void 0);
    _defineProperty(this, "text", void 0);
    _defineProperty(this, "onChangeHandler", void 0);
    _defineProperty(this, "isSelectTag", void 0);
  }
  onInit() {
    (this.input = this.el.querySelector("[data-sort-item-input]")),
      (this.isSelectTag = this.input.tagName === "SELECT"),
      (this.id = this.input.id),
      (this.value = this.input.value),
      (this.name = this.input.name),
      this.isSelectTag
        ? this.selectTagGetData()
        : ((this.label = this.el.querySelector('label[for="' + this.id + '"]')),
          (this.textElem =
            this.label.querySelector("[data-sort-item-label-text]") ||
            this.label),
          (this.text = this.textElem.textContent)),
      (this.onChangeHandler = this.onChange.bind(this)),
      this.input.addEventListener("change", this.onChangeHandler),
      this.value === "all" &&
        this.input.checked &&
        ((this.label.style.pointerEvents = "none"),
        (this.input.style.pointerEvents = "none"));
  }
  onChange() {
    this.isSelectTag ||
      this.option.checkTarget({ group: this.name, value: this.value }),
      this.option.createData(),
      this.value === "all" &&
        this.input.checked &&
        ((this.label.style.pointerEvents = "none"),
        (this.input.style.pointerEvents = "none"));
  }
  otherChange({ group: t, value: e }) {
    this.isSelectTag ||
      (t === this.name &&
        e !== this.value &&
        (this.value === "all" && e !== "all"
          ? this.checkFalse()
          : this.value !== "all" && e === "all" && this.checkFalse()));
  }
  check({ group: t, value: e }) {
    if (this.isSelectTag) {
      if (t !== this.name) return;
      Array.prototype.some.call(this.input.options, (s, r) => {
        const l = s.value === e;
        return l && (this.input.options[r].selected = !0), l;
      });
    } else
      t === this.name &&
        (e === this.value && this.checkTrue(),
        this.value === "all" && this.checkFalse());
  }
  checkTrue() {
    (this.input.checked = !0),
      this.value === "all" &&
        ((this.label.style.pointerEvents = "none"),
        (this.input.style.pointerEvents = "none"));
  }
  checkFalse() {
    (this.input.checked = !1),
      this.value === "all" &&
        ((this.label.style.pointerEvents = ""),
        (this.input.style.pointerEvents = ""));
  }
  selectTagGetData() {
    (this.value = this.input.value),
      (this.text = this.input.options[this.input.selectedIndex].textContent);
  }
  getStatus(t) {
    t[this.name] || (t[this.name] = []),
      this.isSelectTag
        ? (this.selectTagGetData(),
          t[this.name].push({ value: this.value, text: this.text }))
        : this.input.checked &&
          t[this.name].push({ value: this.value, text: this.text });
  }
  onDestroy() {
    this.input.removeEventListener("change", this.onChangeHandler);
  }
}
_defineProperty(Ow, "selectorRoot", "[data-sort-item]");
class Fw extends _t {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "tl", void 0);
    _defineProperty(this, "notfoundText", void 0);
    _defineProperty(this, "scrollTarget", void 0);
    _defineProperty(this, "pager", void 0);
    _defineProperty(this, "store", void 0);
    _defineProperty(this, "vue", void 0);
    _defineProperty(this, "isPager", void 0);
    _defineProperty(this, "viewMore", void 0);
    _defineProperty(this, "scrollTargetFocus", void 0);
    _defineProperty(this, "isViewMore", void 0);
  }
  onInit() {
    this.tl = null;
    const t = (this.store = di({
      sortedData: [],
      showData: [],
      isFirst: !0,
      isNotFound: !1
    }));
    (this.vue = In({ store: t }).mount(this.el)),
      (this.notfoundText = document.querySelector("[data-sort-notfound]")),
      this.notfoundText && (this.notfoundText.style.display = "none"),
      (this.scrollTarget = document.querySelector(
        this.el.dataset.listScrollTo
      )),
      this.scrollTarget &&
        (this.scrollTargetFocus = this.scrollTarget.querySelector(
          "a, label, select, button, input[type=radio], input[type=checkbox]"
        )),
      (this.isPager = this.el.dataset.sortArticleList === "pager"),
      this.isPager &&
        (this.pager = Lw.createAll(this.option.context, {
          store: t,
          listContainer: this.el,
          replaceAnimation: this.replaceAnimation.bind(this)
        })[0]),
      (this.isViewMore = this.el.dataset.sortArticleList === "viewMore"),
      this.isViewMore &&
        (this.viewMore = Tw.createAll(this.option.context, {
          store: t,
          listContainer: this.el,
          replaceAnimation: this.replaceAnimation.bind(this)
        })[0]),
      (this.isScroll = this.isPager);
  }
  setStoreItem(t) {
    (this.store.showData = t),
      setTimeout(() => {
        ui(this.el);
      }, 0);
  }
  replaceAnimation(t, e = !1) {
    bt.timeline()
      .add([
        this.isScroll &&
          !e &&
          (!this.store.isFirst || E.pageId === E.pageIdPrev) &&
          this.resetScroll()
      ])
      .call(() => {
        this.store.isFirst && (this.store.isFirst = !1),
          this.removeNotFound(),
          (this.store.isNotFound = this.store.sortedData.length === 0),
          this.store.isNotFound ? this.setNotfound() : t();
      });
  }
  removeItems() {
    if ((this.destroyAnimation(), !!this.el.children.length))
      for (; this.el.firstChild; ) this.el.removeChild(this.el.firstChild);
  }
  async setList(t, e) {
    this.store.sortedData.forEach((s) => {
      s.isShow = !1;
    }),
      e || (await $u(0.1)),
      (this.store.sortedData = t),
      this.pager
        ? this.pager.update({ isFirst: this.store.isFirst, isImmediate: e })
        : this.viewMore
        ? this.viewMore.reset(e)
        : ((this.store.showData = t),
          this.replaceAnimation(() => {
            (this.store.showData = t),
              setTimeout(() => {
                ui(this.el);
              }, 0);
          }, e)),
      this.store.isFirst || this.option.setURLParams();
  }
  removeNotFound() {
    this.notfoundText && this.notfoundText.classList.remove("-isShow");
  }
  setNotfound() {
    this.notfoundText &&
      (this.notfoundText.classList.add("-isShow"), this.emitResizeAll());
  }
  resetScroll() {
    return new Promise((t) => {
      this.scrollTo(this.scrollTarget || this.option.context, {
        duration: Aw.duration,
        onComplete: () => {
          this.scrollTargetFocus && this.scrollTargetFocus.focus(), t();
        }
      });
    });
  }
  onDestroy() {
    this.vue.unmount();
  }
}
_defineProperty(Fw, "selectorRoot", "[data-sort-article-list]");
class Rw extends _t {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "allDataList", void 0);
    _defineProperty(this, "currentData", void 0);
    _defineProperty(this, "articleListElem", void 0);
    _defineProperty(this, "articleList", void 0);
    _defineProperty(this, "resultElems", void 0);
    _defineProperty(this, "form", void 0);
    _defineProperty(this, "sortItems", void 0);
    _defineProperty(this, "defaultParams", void 0);
    _defineProperty(this, "accordions", void 0);
  }
  async onInit() {
    Cc(this.option, JSON.parse(this.el.dataset.sort || "{}"));
    const t = this.el.querySelector("[data-sort-data]");
    (this.allDataList = JSON.parse(
      (t === null || t === void 0 ? void 0 : t.textContent) || ""
    )),
      (this.currentData = {}),
      (this.sortItems = Ow.createAll(this.el, {
        createData: this.createData.bind(this),
        checkTarget: this.checkTarget.bind(this)
      })),
      (this.articleList = Fw.createAll(this.el, {
        allDataList: this.allDataList,
        context: this.el,
        setURLParams: this.setURLParams.bind(this)
      })[0]),
      (this.accordions = this.el.querySelectorAll("[data-sort-accordion]")),
      (this.defaultParams = this.getURLParams()),
      this.accordions && this.openAccordion(),
      this.checkFromData(this.defaultParams),
      this.createData(!0);
  }
  createData(t = !1) {
    const e = {};
    this.sortItems.forEach((s) => s.getStatus(e)),
      (this.currentData = e),
      this.sortExecute(t);
  }
  checkTarget({ group: t, value: e }) {
    this.sortItems.forEach((s) => s.otherChange({ group: t, value: e }));
  }
  sortExecute(t) {
    let e = this.allDataList.concat();
    const { currentData: s } = this;
    for (const r in s) {
      const l = s[r];
      if (l.length === 0 || l[0].value === "all") {
        l.length === 0 &&
          this.sortItems.forEach((u) => {
            u.name === r && u.value === "all" && u.checkTrue();
          });
        continue;
      }
      e = e.filter((u) =>
        l.some((c) => c.value === u[r] || u[r].includes(c.value))
      );
    }
    this.articleList.setList(e, t);
  }
  setURLParams() {
    const t = new URL(window.location.href),
      { currentData: e } = this;
    for (const r in e) {
      const l = e[r],
        u = l.map((c) => c.value).join(",");
      l.length === 0 || l[0].value === "all"
        ? t.searchParams.delete(r)
        : t.searchParams.set(r, u);
    }
    const s = decodeURIComponent(t.href);
    window.history.pushState({}, "", s);
  }
  getURLParams() {
    const t = decodeURIComponent(location.search),
      s = t.slice(1, t.length).split("&"),
      r = {};
    return (
      s[0] !== "" &&
        s.forEach((l) => {
          const u = l.split("="),
            c = u[0],
            d = u[1].split(",");
          r[c] = d.map((p) => ({ value: p }));
        }),
      r
    );
  }
  checkFromData(t) {
    for (const e in t)
      t[e].forEach((s) => {
        this.sortItems.forEach((r) => r.check({ group: e, value: s.value }));
      });
  }
  openAccordion() {
    const t = Object.keys(this.defaultParams);
    this.accordions.forEach((e) => {
      const s = e.dataset.sortAccordion;
      t.some((l) => l === s) && setTimeout(() => e.click(), 1e3);
    });
  }
  onDestroy() {
    this.allDataList = [];
  }
}
_defineProperty(Rw, "selectorRoot", "[data-sort]:not([data-sort-manual])");
Rw.register();
((_Class7 = class extends _t {
  onInit() {
    this.elBackground = this.el.querySelector("[data-parallax-background]");
  }
  onIntersect({ isIntersecting: n }) {
    this.elBackground &&
      (n
        ? ((this.elBackground.style.willChange = "transform"),
          this.playScroll())
        : (this.pauseScroll(), (this.elBackground.style.willChange = "")));
  }
  onScroll({ scroll: n }) {
    this.elBackground &&
      (this.elBackground.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${
        ((n - this.yStart) / this.yDistance - 1) * this.move
      },0,1)`);
  }
  onResize({ windowHeight: n }) {
    if (!this.elBackground) return;
    this.elBackground.style.transform = "";
    const { scrollY: t } = this,
      { top: e, bottom: s, height: r } = this.el.getBoundingClientRect(),
      { height: l } = this.elBackground.getBoundingClientRect();
    (this.yStart = e + t - n),
      (this.yEnd = s + t),
      (this.yDistance = this.yEnd - this.yStart),
      (this.move = l - r);
  }
}),
_defineProperty(_Class7, "selectorRoot", "[data-parallax]"),
_Class7).register();
class zi extends _t {}
_defineProperty(zi, "isPermanent", !0);
((_Class8 = class extends zi {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "isShow", !1);
    _defineProperty(this, "isShowTrigger", !1);
  }
  onInit() {
    var _this$el2;
    E.pageId !== "pageTop" &&
      (_this$el2 = this.el) !== null &&
      _this$el2 !== void 0 &&
      _this$el2.classList.add("-start", "-show"),
      this.isSp
        ? (this.refs.navList.style.display = "none")
        : this.addIntersectionObserver({
            el: "[data-scroll-down-observer]",
            callback: ({ isIntersecting: n }) => {
              n ? this.hideTrigger() : this.showTrigger();
            }
          }),
      this.addFooterIntersectionObserver(),
      this.on("showKv", () => {
        var _this$el3;
        (_this$el3 = this.el) !== null &&
          _this$el3 !== void 0 &&
          _this$el3.classList.add("-start"),
          this.show();
      }),
      this.on("showHeaderTrigger", () => {
        this.showTrigger();
      }),
      this.on("hideHeaderTrigger", () => {
        this.hideTrigger();
      }),
      this.on("changeScene", (n) => {
        var _this$el5, _this$el6, _this$el7;
        switch (n) {
          case "Service":
          case "ServiceOpposite":
          case "About":
          case "News":
          case "Footer":
            this.tweenHideGradation && this.tweenHideGradation.kill(),
              (this.tweenHideGradation = gsap.delayedCall(1.5, () => {
                var _this$el4;
                (_this$el4 = this.el) === null ||
                  _this$el4 === void 0 ||
                  _this$el4.classList.add("-hideGradation");
              }));
            break;
          default:
            this.tweenHideGradation && this.tweenHideGradation.kill(),
              (_this$el5 = this.el) !== null &&
                _this$el5 !== void 0 &&
                _this$el5.classList.remove("-hideGradation"),
              (this.tweenHideGradation = null);
            break;
        }
        switch (n) {
          case "Kv":
            (_this$el6 = this.el) === null ||
              _this$el6 === void 0 ||
              _this$el6.classList.add("-dark");
            break;
          default:
            (_this$el7 = this.el) === null ||
              _this$el7 === void 0 ||
              _this$el7.classList.remove("-dark");
            break;
        }
      }),
      this.on("makeHeaderDark", () => {
        var _this$el8;
        (_this$el8 = this.el) === null ||
          _this$el8 === void 0 ||
          _this$el8.classList.add("-dark");
      });
  }
  show() {
    var _this$el9;
    this.isShow ||
      ((this.isShow = !0),
      (_this$el9 = this.el) === null || _this$el9 === void 0
        ? void 0
        : _this$el9.classList.add("-show"));
  }
  hide() {
    var _this$el10;
    this.isShow &&
      ((this.isShow = !1),
      (_this$el10 = this.el) === null || _this$el10 === void 0
        ? void 0
        : _this$el10.classList.remove("-show"));
  }
  showTrigger() {
    var _this$el11;
    this.isShowTrigger ||
      ((this.isShowTrigger = !0),
      (_this$el11 = this.el) === null || _this$el11 === void 0
        ? void 0
        : _this$el11.classList.add("-trigger"));
  }
  hideTrigger() {
    var _this$el12;
    this.isShowTrigger &&
      ((this.isShowTrigger = !1),
      (_this$el12 = this.el) === null || _this$el12 === void 0
        ? void 0
        : _this$el12.classList.remove("-trigger"));
  }
  addFooterIntersectionObserver() {
    const n = E.view.querySelector("[data-footer]");
    n &&
      (this.footerIntersectionObserver = this.addIntersectionObserver({
        el: n,
        callback: ({ isIntersecting: t }) => {
          t ? this.hide() : this.show();
        }
      }));
  }
  removeFooterIntersectionObserver() {
    this.footerIntersectionObserver &&
      (this.footerIntersectionObserver.destroy(),
      (this.footerIntersectionObserver = null));
  }
  onLeave() {
    this.removeFooterIntersectionObserver();
  }
  onEnter() {
    E.pageId === "pageTop"
      ? (this.hide(), this.hideTrigger())
      : E.scrollY === 0 && (this.show(), this.hideTrigger());
  }
  onEnterCompleted() {
    this.addFooterIntersectionObserver();
  }
}),
_defineProperty(_Class8, "componentName", "Header"),
_Class8).register();
const Iw = "menu",
  Bw = 0.2;
((_Class9 = class extends zi {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "isOpen", !1);
  }
  onInit() {
    (E.modals.menu = this),
      (this.elBody = document.body),
      (this.elContent = this.el.querySelector("[data-modal-content]")),
      (this.elBackdrop = this.el.querySelector("[data-modal-backdrop]")),
      (this.elsClose = this.el.querySelectorAll("[data-modal-close]")),
      (this.elsLink = this.el.querySelectorAll('[data-ref="link"], .subNav')),
      Z.set(this.elContent, { visibility: "hidden" }),
      Z.set(this.refs.item, { opacity: 0 }),
      Z.set(this.refs.text, { opacity: 0 }),
      (this.items = this.getItems()),
      this.changeCurrent();
  }
  open(n) {
    this.isOpen ||
      ((this.isOpen = !0),
      this.el.classList.add("-open"),
      this.elBody.classList.add("-open"),
      this.el.classList.add("-show"),
      gsap.set(this.elContent, { visibility: "visible" }),
      Z.timeline(
        {
          onComplete: () => {
            n && n();
          }
        },
        "menuOpen"
      )
        .add([
          gsap.fromTo(
            this.refs.content,
            { opacity: 0 },
            { opacity: 1, duration: 0.6, ease: "power2.out" }
          ),
          gsap.fromTo(
            this.refs.content,
            { y: 60 },
            { y: 0, duration: 1, ease: "expo.out" }
          )
        ])
        .add(
          [
            gsap.fromTo(
              [this.refs.item, this.refs.text],
              { opacity: 0 },
              { opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.08 }
            ),
            gsap.fromTo(
              this.elsLink,
              { y: this.isSp ? 5 : 10 },
              { y: 0, duration: 1, ease: "expo.out", stagger: 0.08 }
            )
          ],
          `<${Bw}`
        ));
  }
  close(n, t = !1) {
    this.isOpen &&
      ((this.isOpen = !1),
      this.el.classList.remove("-show"),
      Z.timeline(
        {
          onComplete: () => {
            this.el.classList.remove("-open"),
              this.elBody.classList.remove("-open"),
              Z.set(this.elContent, { visibility: "hidden" }),
              n && n();
          }
        },
        "menuClose"
      ).add([
        gsap.to([this.refs.content, this.refs.item, this.refs.text], {
          opacity: 0,
          duration: 0.15,
          ease: "power3.out"
        })
      ]));
  }
  getItems() {
    let n = this.el.querySelectorAll(".FooterNavListItem"),
      t = {};
    return (
      n.forEach((e) => {
        let s = e.dataset.pageid,
          r;
        switch (s) {
          case "why-use":
            r = "pageWhyUse";
            break;
          case "white-label":
            r = "pageWhiteLabel";
            break;
          case "smb-service":
            r = "pageSmbService";
            break;
          default:
            r = "page" + s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
            break;
        }
        t[r] = e;
      }),
      t
    );
  }
  changeCurrent(n = E.pageId, t = E.pageIdPrev) {
    var _this$items$t, _this$items$n, _this$items$n2;
    (n = this.getOrganizedPageId(n)),
      (t = this.getOrganizedPageId(t)),
      (_this$items$t = this.items[t]) !== null &&
        _this$items$t !== void 0 &&
        _this$items$t.classList.remove("-current"),
      (_this$items$n = this.items[n]) !== null &&
        _this$items$n !== void 0 &&
        _this$items$n.classList.add("-current"),
      (_this$items$n2 = this.items[n]) === null ||
      _this$items$n2 === void 0 ||
      (_this$items$n2 = _this$items$n2.closest(".hasSubNav")) === null ||
      _this$items$n2 === void 0
        ? void 0
        : _this$items$n2.classList.add("-hasCurrent");
  }
  getOrganizedPageId(n) {
    switch (n) {
      case "pageNewsDetail":
        return "pageNews";
      default:
        return n;
    }
  }
  onEnter(n, t) {
    this.changeCurrent(n, t);
  }
  onLeave() {
    z.emit("closeModal", Iw);
  }
}),
_defineProperty(_Class9, "componentName", "Menu"),
_Class9).register();
((_Class10 = class extends zi {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "isShow", !1);
  }
  onInit() {
    (this.el.style.visibility = "hidden"),
      Z.set(this.refs.icon, { opacity: 0 }),
      this.isSp ||
        Z.set(this.el, {
          x: window.innerWidth - (this.el.offsetWidth + 110),
          y: window.innerHeight - (this.el.offsetHeight + 40)
        }),
      this.on("showScrollDown", () => {
        this.show();
      }),
      this.on("hideScrollDown", () => {
        this.hide();
      });
  }
  onMousemoveDocument(n, t) {
    fe || Z.scrub(this.el, { x: n, y: t, duration: 0.8 });
  }
  onClick() {
    this.isSp &&
      ((E.scrollDirection = 1), z.emit("top:startTransition:intro", !1, !0));
  }
  show() {
    this.isShow ||
      ((this.isShow = !0),
      (this.el.style.visibility = ""),
      this.tween && this.tween.kill(),
      (this.tween = Z.to(this.refs.icon, {
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      })));
  }
  hide() {
    this.isShow &&
      ((this.isShow = !1),
      this.tween && this.tween.kill(),
      (this.tween = Z.to(this.refs.icon, {
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
        onComplete: () => {
          this.el.style.visibility = "hidden";
        }
      })));
  }
  detectShow(n = E.pageId) {
    E.isLoadDone.pageTop && (n === "pageTop" || this.hide());
  }
  onEnterReady(n, t) {
    this.detectShow(n);
  }
}),
_defineProperty(_Class10, "componentName", "ScrollDown"),
_Class10).register();
((_Class11 = class extends zi {
  onInit() {
    this.changeCurrent();
  }
  changeCurrent(n = E.pageId, t = E.pageIdPrev) {
    var _this$refs$t,
      _this$refs$this$getPa,
      _this$refs$n,
      _this$refs$this$getPa2;
    (_this$refs$t = this.refs[t]) !== null &&
      _this$refs$t !== void 0 &&
      _this$refs$t.classList.remove("-current"),
      (_this$refs$this$getPa = this.refs[this.getParentPageId(t)]) !== null &&
        _this$refs$this$getPa !== void 0 &&
        _this$refs$this$getPa.classList.remove("-parent"),
      (_this$refs$n = this.refs[n]) !== null &&
        _this$refs$n !== void 0 &&
        _this$refs$n.classList.add("-current"),
      (_this$refs$this$getPa2 = this.refs[this.getParentPageId(n)]) === null ||
      _this$refs$this$getPa2 === void 0
        ? void 0
        : _this$refs$this$getPa2.classList.add("-parent");
  }
  getParentPageId(n) {
    switch (n) {
      case "pageWhiteLabel":
      case "pageSmbService":
        return "pageSolution";
      case "pageNewsDetail":
        return "pageNews";
      default:
        return "";
    }
  }
  onEnter(n, t) {
    this.changeCurrent(n, t);
  }
}),
_defineProperty(_Class11, "componentName", "HeaderNav"),
_Class11).register();
const Vw = 1;
((_Class12 = class extends zi {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "pageHeight", 9999);
    _defineProperty(this, "isFull", !0);
    _defineProperty(this, "currentMeterIndex", 10);
    _defineProperty(this, "amount", "high");
  }
  onInit() {
    E.components.HeaderEnergy = this;
  }
  scroll(n) {
    const t = 100 - Math.floor(Math.min(Math.max(n, 0), 1) * (100 - Vw));
    this.refs.count.textContent = so(t);
    const e = Math.floor(t / 10);
    e !== this.currentMeterIndex &&
      (t === 100
        ? this.isFull ||
          ((this.isFull = !0), this.refs.count.classList.add("-full"))
        : this.isFull &&
          ((this.isFull = !1), this.refs.count.classList.remove("-full")),
      t >= 70
        ? this.amount !== "high" &&
          ((this.amount = "high"),
          this.el.style.setProperty("--color", "#1ece73"))
        : t >= 30
        ? this.amount !== "medium" &&
          ((this.amount = "medium"),
          this.el.style.setProperty("--color", "#78da02"))
        : this.amount !== "low" &&
          ((this.amount = "low"),
          this.el.style.setProperty("--color", "#f16112")),
      this.refs.meter.forEach((s, r) => {
        r < e
          ? (s.classList.add("-fill"), r === 0 && s.classList.remove("-alert"))
          : (s.classList.remove("-fill"),
            e === 0 && r === 0 && s.classList.add("-alert"));
      }),
      (this.currentMeterIndex = e)),
      (this.scrollRate = n);
  }
  onScroll({ scroll: n }) {
    E.pageId !== "pageTop" && this.scroll(n / this.pageHeight);
  }
  onResize() {
    this.pageHeight = document.body.scrollHeight - window.innerHeight - 1;
  }
}),
_defineProperty(_Class12, "componentName", "HeaderEnergy"),
_Class12).register();
const Br = 40;
((_Class13 = class extends zi {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "store", void 0);
    _defineProperty(this, "singleItemHeight", 0);
    _defineProperty(this, "mask", 0);
    _defineProperty(this, "listY", 0);
    _defineProperty(this, "initialY", 0);
    _defineProperty(this, "tweenChangeCurrentIndex", void 0);
    _defineProperty(this, "cIntersectings", []);
  }
  onInit() {
    this.initVue(),
      E.pageId === "pageTop"
        ? this.getAnchorLinksTopPage()
        : this.getAnchorLinks(),
      this.setMask(0),
      E.pageId === "pageTop"
        ? (this.on(
            "changeHeaderLocationCurrentIndex",
            this.changeCurrentIndex.bind(this)
          ),
          setTimeout(() => {
            this.changeCurrentIndex(0);
          }, 500))
        : this.addIntersectionObserver({
            el: "[data-scroll-down-observer]",
            callback: ({ isIntersecting: n }) => {
              n && this.changeCurrentIndex(0);
            }
          });
  }
  initVue() {
    const n = (this.store = di({
      anchorLinks: [],
      currentIndex: 0,
      isFirst: !0,
      isLast: !1
    }));
    In({ store: n }).mount(this.el);
  }
  getAnchorLinks() {
    (this.store.anchorLinks = [
      { link: "#top", text: "PAGE TOP", onClick: () => {} }
    ]),
      Array.prototype.forEach.call(
        E.view.querySelectorAll("[data-anchor-link-item]"),
        (n, t) => {
          const { hash: e } = n,
            s = E.view.querySelector(e);
          if (!s) return;
          const r = {
            link: e,
            text: n.dataset.anchorLinkItem,
            onClick: () => {},
            second: n.dataset.second
          };
          this.cIntersectings.push(
            E.cIntersecting.add({
              el: s,
              callback: ({ isIntersecting: l }) => {
                l && this.changeCurrentIndex(t + 1);
              },
              param: { rootMargin: "-50% 0%" }
            })
          ),
            this.store.anchorLinks.push(r);
        }
      ),
      setTimeout(() => {
        ui(this.el);
      }, 0);
  }
  getAnchorLinksTopPage() {
    const n = [
      { link: "top", text: "PAGE TOP" },
      { link: "intro", text: "INTRO" },
      { link: "solution", text: "SOLUTION" },
      { link: "about", text: "ABOUT" },
      { link: "news", text: "NEWS" },
      { link: "footer", text: "FOOTER" }
    ];
    this.store.anchorLinks = n.map(({ link: t, text: e }, s) => ({
      link: `#${t}`,
      text: e,
      onClick: (r) => {
        r.preventDefault(), z.emit("top:goToAnchor", t);
      }
    }));
  }
  changeCurrentIndex(n) {
    (this.store.currentIndex = n),
      (this.store.isFirst = n === 0),
      (this.store.isLast = n === this.store.anchorLinks.length - 1),
      this.tweenChangeCurrentIndex && this.tweenChangeCurrentIndex.kill(),
      (this.tweenChangeCurrentIndex = Z.to(this, {
        listY: this.singleItemHeight * (2 - n),
        duration: 0.6,
        ease: "power4.out",
        onUpdate: () => {
          Z.set(this.refs.list, { y: this.listY });
        }
      }));
  }
  setMask(n) {
    const t = (1 - n) * Br;
    this.refs.mask.style.maskImage =
      this.refs.mask.style.webkitMaskImage = `linear-gradient(
        0deg,
        transparent,
        transparent ${t}%,
        #000 ${Br}%,
        #000 ${100 - Br}%,
        transparent ${100 - t}%,
        transparent
      )`;
  }
  onMouseenter() {
    var _this$el13;
    (_this$el13 = this.el) !== null &&
      _this$el13 !== void 0 &&
      _this$el13.classList.add("-open"),
      (this.initialY = this.listY),
      Z.to(this, {
        mask: 1,
        duration: 0.6,
        ease: "power4.out",
        onUpdate: () => {
          this.setMask(this.mask);
        }
      });
  }
  onMouseleave() {
    this.changeCurrentIndex(this.store.currentIndex),
      Z.to(this, {
        mask: 0,
        duration: 0.3,
        ease: "power2.out",
        onUpdate: () => {
          this.setMask(this.mask);
        },
        onComplete: () => {
          var _this$el14;
          (_this$el14 = this.el) === null ||
            _this$el14 === void 0 ||
            _this$el14.classList.remove("-open");
        }
      });
  }
  onGesture({ e: n, diff: { y: t }, type: e }) {
    n.stopPropagation(),
      Z.scrub(this, {
        listY: Math.min(
          Math.max(
            this.listY + t * (e === "wheel" ? -0.5 : 1),
            this.singleItemHeight * (2 - (this.store.anchorLinks.length - 1))
          ),
          this.singleItemHeight * 2
        ),
        onUpdate: () => {
          Z.set(this.refs.list, { y: this.listY });
        }
      });
  }
  onEnter(n, t) {
    this.cIntersectings.forEach((e) => {
      e === null || e === void 0 || e.destroy();
    }),
      (this.cIntersectings = []),
      this.getAnchorLinks();
  }
  onResize() {
    this.singleItemHeight = ws(23);
  }
}),
_defineProperty(_Class13, "componentName", "HeaderLocation"),
_defineProperty(_Class13, "gestureOptions", {
  disableKeyboard: !0,
  isPreventDefault: !0
}),
_Class13).register();
function Nw(n) {
  const t = [...n];
  for (let e = t.length - 1; e > 0; e--) {
    const s = Math.floor(Math.random() * (e + 1)),
      r = t[e];
    (t[e] = t[s]), (t[s] = r);
  }
  return t;
}
((_Class14 = class extends _t {
  onInit() {
    (this.main = this.el.querySelector(".main")),
      (this.sub = this.el.querySelector(".sub")),
      (this.gradColor1 = "#30ae52"),
      (this.gradColor2 = "#3588c9"),
      (this.gradColor3 = "#fff"),
      (this.blurValue = 6),
      (this.splitTarget = new $o(this.sub, {
        type: "chars",
        charsClass: "sub-actor"
      })),
      (this.delayTimes = []),
      this.splitTarget.chars.forEach((n, t) => {
        this.delayTimes.push(0.4 * gsap.utils.random(0, 1));
      }),
      this.setEvents();
  }
  onDestroy() {
    this.destroyEvents();
  }
  setEvents() {
    const n = this.el.parentNode;
    n.classList.contains("-hasCurrent") ||
      (n.classList.contains("hasSubNav") &&
        ((this.parent = n),
        this.parent.addEventListener(
          "mouseenter",
          this.onMouseenterParent.bind(this)
        ),
        this.parent.addEventListener(
          "mouseleave",
          this.onMouseleaveParent.bind(this)
        )));
  }
  destroyEvents() {
    this.parent &&
      (this.parent.removeEventListener("mouseenter", this.onMouseenterParent),
      this.parent.removeEventListener("mouseleave", this.onMouseleaveParent));
  }
  onMouseenter(n) {
    if (this.parent) {
      if (this.parent.classList.contains("-hasCurrent")) {
        this.showSubText();
        return;
      }
      if (this.isShowGrad) {
        this.showSubText();
        return;
      }
    }
    this.doGradMotion({
      from: { t0: -200, t1: -150, t2: -120, t3: -90, t4: -50, t5: 0 },
      to: { t1: 0, t2: 15, t3: 85, t4: 100, t5: 130 }
    }),
      Z.to(this.main, { x: ws(15), duration: 0.6, ease: "Expo.easeOut" }),
      this.showSubText(),
      (this.isShowGrad = !0);
  }
  showSubText() {
    let n = Nw(this.delayTimes);
    this.splitTarget.chars.forEach((t, e) => {
      Z.set(t, { scale: 0.5, filter: "blur(" + ws(this.blurValue) + "px)" }),
        Z.to(t, {
          duration: 0.4,
          alpha: 1,
          scale: 1,
          filter: "blur(0px)",
          ease: "Quad.easeOut",
          delay: n[e]
        });
    });
  }
  onMouseleave(n) {
    if (this.parent) {
      if (this.parent.classList.contains("-hasCurrent")) {
        this.hideSubText();
        return;
      }
      if (this.isHoverParent) {
        this.hideSubText();
        return;
      }
    }
    this.doGradMotion({
      from: { t0: -100, t1: 0, t2: 15, t3: 85, t4: 100, t5: 200 },
      to: { t0: 100, t1: 120, t2: 12 + 100, t3: 88 + 100, t4: 100 + 100 }
    }),
      Z.to(this.main, {
        x: 0,
        duration: 0.4,
        ease: "Expo.easeOut",
        clearProps: "transform"
      }),
      this.hideSubText(),
      (this.isShowGrad = !1);
  }
  hideSubText() {
    this.splitTarget.chars.forEach((n, t) => {
      Z.to(n, {
        duration: 0.5,
        alpha: 0,
        scale: 0.6,
        filter: "blur(" + ws(this.blurValue) + "px)",
        ease: "Quad.easeOut"
      });
    });
  }
  doGradMotion(n) {
    let t = Object.assign(
      {
        duration: n.duration || 1.1,
        ease: "Power3.easeOut",
        onUpdateParams: [n.from],
        onUpdate: (e) => {
          this.main.style.backgroundImage =
            "linear-gradient(60deg, " + this.getGradient(e) + ")";
        }
      },
      n.to
    );
    Z.to(n.from, t);
  }
  getGradient(n) {
    let t = this.gradColor3 + " " + n.t0 + "%",
      e = this.gradColor1 + " " + n.t1 + "%",
      s = this.gradColor1 + " " + n.t2 + "%",
      r = this.gradColor2 + " " + n.t3 + "%",
      l = this.gradColor2 + " " + n.t4 + "%",
      u = this.gradColor3 + " " + n.t5 + "%";
    return t + "," + e + "," + s + "," + r + "," + l + "," + u;
  }
  onMouseenterParent() {
    this.isHoverParent = !0;
  }
  onMouseleaveParent(n) {
    (this.isHoverParent = !1), this.onMouseleave && this.onMouseleave();
  }
}),
_defineProperty(_Class14, "componentName", "FooterNavListItem"),
_Class14).register();
((_Class15 = class extends _t {
  onInit() {
    (this.items = this.getItems()),
      this.changeCurrent(),
      (this.isSubNavOpened = !1),
      this.setupSubNav();
  }
  onEnter(n, t) {
    this.changeCurrent(n, t);
  }
  onDestroy() {
    this.destroySubNav();
  }
  getItems() {
    let n = this.el.querySelectorAll(".FooterNavListItem"),
      t = {};
    return (
      n.forEach((e) => {
        let s = e.dataset.pageid,
          r;
        switch (s) {
          case "why-use":
            r = "pageWhyUse";
            break;
          case "white-label":
            r = "pageWhiteLabel";
            break;
          case "smb-service":
            r = "pageSmbService";
            break;
          default:
            r = "page" + s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
            break;
        }
        t[r] = e;
      }),
      t
    );
  }
  changeCurrent(n = E.pageId, t = E.pageIdPrev) {
    var _this$items$t2, _this$items$n3, _this$items$n4;
    (n = this.getOrganizedPageId(n)),
      (t = this.getOrganizedPageId(t)),
      (_this$items$t2 = this.items[t]) !== null &&
        _this$items$t2 !== void 0 &&
        _this$items$t2.classList.remove("-current"),
      (_this$items$n3 = this.items[n]) !== null &&
        _this$items$n3 !== void 0 &&
        _this$items$n3.classList.add("-current"),
      (_this$items$n4 = this.items[n]) === null ||
      _this$items$n4 === void 0 ||
      (_this$items$n4 = _this$items$n4.closest(".hasSubNav")) === null ||
      _this$items$n4 === void 0
        ? void 0
        : _this$items$n4.classList.add("-hasCurrent");
  }
  getOrganizedPageId(n) {
    switch (n) {
      case "pageNewsDetail":
        return "pageNews";
      default:
        return n;
    }
  }
  setupSubNav() {
    (this.hasSubNavItems = this.el.querySelectorAll(".hasSubNav")),
      (this.subNav = this.el.querySelectorAll(".subNav")),
      this.hasSubNavItems.forEach((n, t) => {
        let e = this;
        (e.subNav = this.subNav[t]),
          this.isSp
            ? n.addEventListener(
                "click",
                Object.assign(e, { handleEvent: this.toggleSubNav })
              )
            : (n.addEventListener(
                "mouseenter",
                Object.assign({}, e, { handleEvent: this.openSubNav })
              ),
              n.addEventListener(
                "mouseleave",
                Object.assign({}, e, { handleEvent: this.closeSubNav })
              ));
      });
  }
  openSubNav(n) {
    n.currentTarget.classList.contains("-hasCurrent") ||
      ((this.isSubNavOpened = !0),
      (this.subNav.style.willChange = "height"),
      Z.to(this.subNav, {
        height: "auto",
        duration: 0.6,
        ease: "Expo.easeOut",
        onComplete: () => {
          ze(!0), (this.subNav.style.willChange = "auto");
        }
      }));
  }
  closeSubNav(n) {
    n.currentTarget.classList.contains("-hasCurrent") ||
      ((this.isSubNavOpened = !1),
      (this.subNav.style.willChange = "height"),
      Z.to(this.subNav, {
        height: 0,
        duration: 0.6,
        ease: "Expo.easeOut",
        onComplete: () => {
          ze(!0), (this.subNav.style.willChange = "auto");
        }
      }));
  }
  toggleSubNav(n) {
    n.currentTarget.classList.contains("-hasCurrent") ||
      (this.isSubNavOpened ? this.closeSubNav(n) : this.openSubNav(n));
  }
  destroySubNav() {
    this.hasSubNavItems.forEach((n, t) => {
      this.isSp
        ? n.removeEventListener("click", this.toggleSubNav)
        : (n.removeEventListener("mouseenter", this.openSubNav),
          n.removeEventListener("mouseleave", this.closeSubNav));
    });
  }
}),
_defineProperty(_Class15, "componentName", "FooterNavList"),
_Class15).register();
((_Class16 = class extends _t {
  onInit() {
    (this.video = this.refs.video ? new Qg(this.refs.video) : null),
      this.setPreloadVideo();
  }
  setPreloadVideo() {
    this.addIntersectionObserver({
      el: this.el,
      callback: ({ isIntersecting: n }, t) => {
        var _this$video;
        n &&
          ((_this$video = this.video) === null || _this$video === void 0
            ? void 0
            : _this$video.load(this.onLoadedVideo.bind(this)));
      },
      param: { rootMargin: "100% 0%" },
      once: !0
    });
  }
  onLoadedVideo(n) {
    setTimeout(() => {
      var _this$refs$videoConta;
      return (_this$refs$videoConta = this.refs.videoContainer) === null ||
        _this$refs$videoConta === void 0
        ? void 0
        : _this$refs$videoConta.classList.add("-loaded");
    }, 500);
  }
  onMouseenter(n) {
    this.isIntersecting || this.play();
  }
  onMouseleave(n) {
    this.isIntersecting || this.pause();
  }
  onIntersect({ isIntersecting: n }, t) {
    (this.isIntersecting = n), n ? this.play() : this.pause();
  }
  play() {
    var _this$refs$videoConta2, _this$video2;
    (_this$refs$videoConta2 = this.refs.videoContainer) !== null &&
      _this$refs$videoConta2 !== void 0 &&
      _this$refs$videoConta2.classList.add("-active"),
      (_this$video2 = this.video) === null || _this$video2 === void 0
        ? void 0
        : _this$video2.play();
  }
  pause() {
    var _this$refs$videoConta3, _this$video3;
    (_this$refs$videoConta3 = this.refs.videoContainer) !== null &&
      _this$refs$videoConta3 !== void 0 &&
      _this$refs$videoConta3.classList.remove("-active"),
      (_this$video3 = this.video) === null || _this$video3 === void 0
        ? void 0
        : _this$video3.pause();
  }
}),
_defineProperty(_Class16, "componentName", "FooterNavContact"),
_defineProperty(_Class16, "intersectOptions", {
  rootMargin: "-20% 0% -50% 0%"
}),
_Class16).register();
(class extends _t {}).register();
export {
  lv as A,
  Gw as B,
  _t as C,
  Tv as D,
  zu as E,
  Uo as F,
  lb as M,
  Kw as P,
  $o as S,
  Qg as V,
  hn as _,
  bt as a,
  Io as b,
  to as c,
  ue as d,
  z as e,
  Vg as f,
  Z as g,
  qw as h,
  fe as i,
  Eu as j,
  Uw as k,
  jw as l,
  At as m,
  $w as n,
  zw as o,
  so as p,
  av as q,
  Nl as r,
  E as s,
  zo as t,
  Ho as u,
  ws as v,
  Hw as w,
  xh as x,
  vo as y,
  Cc as z
};
