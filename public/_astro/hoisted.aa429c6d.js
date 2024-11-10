var _Class, _Class2, _Class3, _Class4, _Class5, _Class6, _Class7, _Class8;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { P as Je, s as r, e as c, g as x, p as Qe, d as V, V as ct, o as ti, b as ei, i as $t, m as f, _ as se, f as w, h as at, j as de, c as ue, k as ii, l as Dt, n as si, q as ni, r as oi, C as ri, t as ai, u as li } from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
import { L as nt } from "./Local.454029b8.js";
import { L as hi } from "./lottie.bd4b17b2.js";
import { l as S, b as N, C as A, d as p, E as L, G as _t, S as Z, e as Ot, D as At, A as ci, f as di, g as it, W as X, H as Y, c as D, V as R, h as Xt, R as b, t as C, a as F, i as P, P as E, m as H, j as Yt, k as lt, n as pe, o as J, p as Mt, q as Zt, r as Bt, s as Tt, u as Oe, v as ui, w as pi, x as Ae, y as U, z as G, B as ne, F as oe, I as re, J as ge, K as Ft, L as zt, N as me, Q as Ut, U as kt, X as qt, Y as bt, Z as gi, _ as mi, $ as O, a0 as fi, a1 as dt, a2 as st, a3 as fe, a4 as ve, a5 as Te, a6 as Gt, a7 as xe, a8 as Ht, a9 as Ct, aa as xt, ab as vi, ac as Ti, ad as Ee, ae as Jt, af as Qt, ag as Se, ah as ye, ai as Le, T as xi, aj as ut, ak as ot, al as pt, am as Si, an as Kt, ao as yi, ap as wi, aq as we, ar as Ii, as as Ni, at as Ri, au as ki, av as bi, aw as Ci, ax as Pi, ay as Ie, az as _i, aA as Oi, aB as Ai, aC as Ei, aD as Ne, aE as Re, M as Li, aF as ke, aG as be, aH as Vt } from "./constants.e6c90e33.js";
import { i as Di, a as De, s as Mi } from "./spark.1d7c7a14.js";
import { i as Bi, a as Fi, b as zi, c as Ui, d as Gi, K as Me } from "./Kv.7751291d.js";
import { i as St } from "./cloud_02.dbe4073e.js";
import { i as Hi, e as K, B as ae, g as le } from "./easing.ca1274dc.js";
import { i as Ki, t as Be, I as Vi } from "./Intro.1426c987.js";
import { i as he, a as Wi, b as ji, t as $i, S as Xi } from "./ServiceOpposite.b84a6f1f.js";
import { i as Yi, a as Zi, b as qi, c as Ji, d as Qi, e as ts, A as es } from "./AboutSky.fc4e5412.js";
import { i as is, a as ss, b as ns, c as os, d as W, e as rs, f as as, g as ls, h as hs, j as Fe, s as cs, t as ds, N as us } from "./News.a206a14d.js";
import { i as yt } from "./image.63ed914f.js";
import { i as Et, a as Lt, c as Pt, b as ze, h as Ue, t as Ge } from "./taillight.be3f79a0.js";
import { S as te, n as $, a as _ } from "./project.49f9dddf.js";
import { s as He } from "./spark.83ebcaee.js";
var ht = function () {
  var o = 0,
    t = document.createElement("div");
  t.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", t.addEventListener("click", function (m) {
    m.preventDefault(), s(++o % t.children.length);
  }, !1);
  function e(m) {
    return t.appendChild(m.dom), m;
  }
  function s(m) {
    for (var g = 0; g < t.children.length; g++) t.children[g].style.display = g === m ? "block" : "none";
    o = m;
  }
  var i = (performance || Date).now(),
    n = i,
    l = 0,
    u = e(new ht.Panel("FPS", "#0ff", "#002")),
    d = e(new ht.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var a = e(new ht.Panel("MB", "#f08", "#201"));
  return s(0), {
    REVISION: 16,
    dom: t,
    addPanel: e,
    showPanel: s,
    begin: function () {
      i = (performance || Date).now();
    },
    end: function () {
      l++;
      var m = (performance || Date).now();
      if (d.update(m - i, 200), m >= n + 1e3 && (u.update(l * 1e3 / (m - n), 100), n = m, l = 0, a)) {
        var g = performance.memory;
        a.update(g.usedJSHeapSize / 1048576, g.jsHeapSizeLimit / 1048576);
      }
      return m;
    },
    update: function () {
      i = this.end();
    },
    domElement: t,
    setMode: s
  };
};
ht.Panel = function (o, t, e) {
  var s = 1 / 0,
    i = 0,
    n = Math.round,
    l = n(window.devicePixelRatio || 1),
    u = 80 * l,
    d = 48 * l,
    a = 3 * l,
    m = 2 * l,
    g = 3 * l,
    I = 15 * l,
    M = 74 * l,
    z = 30 * l,
    B = document.createElement("canvas");
  B.width = u, B.height = d, B.style.cssText = "width:80px;height:48px";
  var k = B.getContext("2d");
  return k.font = "bold " + 9 * l + "px Helvetica,Arial,sans-serif", k.textBaseline = "top", k.fillStyle = e, k.fillRect(0, 0, u, d), k.fillStyle = t, k.fillText(o, a, m), k.fillRect(g, I, M, z), k.fillStyle = e, k.globalAlpha = .9, k.fillRect(g, I, M, z), {
    dom: B,
    update: function (q, qe) {
      s = Math.min(s, q), i = Math.max(i, q), k.fillStyle = e, k.globalAlpha = 1, k.fillRect(0, 0, u, I), k.fillStyle = t, k.fillText(n(q) + " " + o + " (" + n(s) + "-" + n(i) + ")", a, m), k.drawImage(B, g + l, I, M - l, z, g, I, M - l, z), k.fillRect(g + M - l, I, l, z), k.fillStyle = e, k.globalAlpha = .9, k.fillRect(g + M - l, I, l, n((1 - q / qe) * z));
    }
  };
};
const ps = ht;
(class extends Je {}).register();
const gs = .6,
  Q = 1.2,
  tt = 30,
  ms = 1;
(_Class = class extends nt {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "index", 0);
    _defineProperty(this, "timer", null);
  }
  onInit() {
    r.components[`top${this.constructor.componentName}`] = this, this.navList = this.refs.navList.map((o, t) => Array.prototype.map.call(o.querySelectorAll(".nav-item"), (e, s) => (e.style.opacity = "0", e))), this.el.style.visibility = "hidden", this.refs.content.style.visibility = "hidden", this.refs.aside.style.opacity = "0", gsap.set(this.refs.gradation, {
      yPercent: 100
    }), this.animation = hi.loadAnimation({
      container: this.refs.navIcon,
      renderer: "svg",
      autoplay: !1,
      loop: !1,
      path: "/assets/top/footer_nav.json"
    }), this.handleClickToKv = o => {
      o.preventDefault(), c.emit("top:startTransition:kv", !1, !0);
    }, this.refs.toKv.addEventListener("click", this.handleClickToKv);
  }
  changeScene(o) {
    switch (this.index = o, o) {
      case -1:
        c.emit("changeSection", "Footer", "News");
        break;
      case 0:
        c.emit("changeScene", "Footer");
        break;
      case 1:
        c.emit("changeSection", "", "Kv");
        break;
    }
  }
  show(o = !1) {
    this.el.style.visibility = "";
  }
  hide() {
    this.el.style.visibility = "hidden", this.hideContents();
  }
  showContents(o) {
    this.tween && (this.tween.kill(), this.tween = null), this.tween = x.timeline({
      onStart: () => {
        this.refs.content.style.visibility = "", this.animation.goToAndPlay(0);
      },
      onComplete: () => {
        this.tween = null, o && o();
      }
    }, "Footer.astro showContents").add([gsap.fromTo(this.navList[0], {
      opacity: 0
    }, {
      opacity: 1,
      duration: .8,
      ease: "power3.out"
    }), gsap.fromTo(this.navList[0], {
      y: tt
    }, {
      y: 0,
      duration: Q,
      ease: "expo.out"
    })], 1.3).add([gsap.fromTo(this.navList[1], {
      opacity: 0
    }, {
      opacity: 1,
      duration: .8,
      ease: "power3.out",
      stagger: .05
    }), gsap.fromTo(this.navList[1], {
      y: tt
    }, {
      y: 0,
      duration: Q,
      ease: "expo.out",
      stagger: .05
    }), gsap.fromTo(this.navList[2], {
      opacity: 0
    }, {
      opacity: 1,
      duration: .8,
      ease: "power3.out",
      stagger: .05
    }), gsap.fromTo(this.navList[2], {
      y: tt
    }, {
      y: 0,
      duration: Q,
      ease: "expo.out",
      stagger: .05
    })], "<0.2").add([gsap.fromTo(this.refs.aside, {
      opacity: 0
    }, {
      opacity: 1,
      duration: .8,
      ease: "power3.out",
      overwrite: !0,
      clearProps: !0
    })], "<0.5"), this.showGradation();
  }
  hideContents() {
    this.tween && (this.tween.kill(), this.tween = null), this.tween = x.timeline({
      onStart: () => {
        this.refs.content.style.visibility = "hidden";
      },
      onComplete: () => {
        this.tween = null;
      }
    }, "Footer.astro hideContents").add([gsap.fromTo(this.navList[0], {
      opacity: 1
    }, {
      opacity: 0,
      duration: .8,
      ease: "power3.out"
    }), gsap.fromTo(this.navList[0], {
      y: 0
    }, {
      y: tt,
      duration: Q,
      ease: "expo.out"
    })], 1.3).add([gsap.fromTo(this.navList[1], {
      opacity: 1
    }, {
      opacity: 0,
      duration: .8,
      ease: "power3.out",
      stagger: .05
    }), gsap.fromTo(this.navList[1], {
      y: 0
    }, {
      y: tt,
      duration: Q,
      ease: "expo.out",
      stagger: .05
    }), gsap.fromTo(this.navList[2], {
      opacity: 1
    }, {
      opacity: 0,
      duration: .8,
      ease: "power3.out",
      stagger: .05
    }), gsap.fromTo(this.navList[2], {
      y: 0
    }, {
      y: tt,
      duration: Q,
      ease: "expo.out",
      stagger: .05
    })], "<0.2").add([gsap.fromTo(this.refs.aside, {
      opacity: 1
    }, {
      opacity: 0,
      duration: .8,
      ease: "power3.out",
      overwrite: !0,
      clearProps: !0
    })], "<0.5"), this.hideGradation();
  }
  showGradation() {
    this.isShowGradation || (this.isShowGradation = !0, this.tweenGradation && (this.tweenGradation.kill(), this.tweenGradation = null), this.tweenGradation = x.timeline({
      onComplete: () => {
        this.tweenGradation = null;
      }
    }, "Footer.astro showGradation").add([gsap.fromTo(this.refs.gradation, {
      yPercent: 100
    }, {
      yPercent: 0,
      duration: ms,
      ease: "expo.out",
      overwrite: !0,
      clearProps: !0
    })]));
  }
  hideGradation() {
    this.isShowGradation && (this.isShowGradation = !1, this.tweenGradation && (this.tweenGradation.kill(), this.tweenGradation = null), this.tweenGradation = x.timeline({
      onComplete: () => {
        this.tweenGradation = null;
      }
    }, "Footer.astro hideGradation").add([gsap.to(this.refs.gradation, {
      yPercent: 100,
      duration: gs,
      ease: "expo.out",
      overwrite: !0,
      clearProps: !0
    })]));
  }
  onResize(o) {
    this.navHeight = this.refs.nav.clientHeight;
  }
  onDestroy() {
    this.refs.toKv.removeEventListener("click", this.handleClickToKv);
  }
}, _defineProperty(_Class, "componentName", "Footer"), _Class).register();
(_Class2 = class extends nt {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "index", 0);
    _defineProperty(this, "timer", null);
  }
  onInit() {
    r.components[`top${this.constructor.componentName}`] = this, this.el.style.visibility = "hidden", this.refs.content1.style.visibility = "hidden", this.refs.content2.style.visibility = "hidden", this.refs.content1.style.opacity = "0", this.refs.content2.style.opacity = "0", this.on("top:startTransition:about", () => {
      this.showBackground();
    }), this.on("top:startTransition:aboutBirdsEye", () => {
      gsap.delayedCall(.5, () => {
        this.hideBackground();
      });
    });
  }
  changeScene(o) {
    switch (this.index = o, o) {
      case -1:
        c.emit("top:startTransition:serviceOpposite", !0);
        break;
      case 0:
        c.emit("changeScene", "About"), this.refs.content1.style.visibility = "hidden", c.emit("showAboutTitle");
        break;
      case 1:
        c.emit("changeScene", "About"), this.refs.content1.style.visibility = "", c.emit("hideAboutTitle");
        break;
      case 2:
        c.emit("changeScene", "AboutBirdsEye");
        break;
      case 3:
        c.emit("changeScene", "AboutSky"), this.refs.content1.style.visibility = "", c.emit("hideAboutTitle");
        break;
      case 4:
        c.emit("changeSection", "", "News");
        break;
    }
  }
  show(o = !1) {
    this.el.style.visibility = "";
  }
  hide() {
    this.el.style.visibility = "hidden";
  }
  showContent1() {
    this.refs.content1.style.visibility = "";
  }
  hideContent1() {
    this.refs.content1.style.visibility = "hidden";
  }
  fadeText1(o) {
    x.scrub(this.refs.content1, {
      opacity: o
    });
  }
  fadeInText1() {
    x.to(this.refs.content1, {
      opacity: 1,
      duration: .6,
      ease: "power2.out"
    });
  }
  fadeOutText1() {
    x.to(this.refs.content1, {
      opacity: 0,
      duration: .3,
      ease: "power2.out"
    });
  }
  scrollText1(o) {
    x.scrub(this.refs.contentInner1, {
      y: -o * this.scrollDistance1
    });
  }
  scrollTextEnd1(o) {
    x.scrub(this.refs.contentInner1, {
      y: -(this.scrollDistance1 + o * this.scrollDistanceEnd1)
    });
  }
  showContent2() {
    this.refs.content2.style.visibility = "";
  }
  hideContent2() {
    this.refs.content2.style.visibility = "hidden";
  }
  fadeText2(o) {
    x.scrub(this.refs.content2, {
      opacity: o
    });
  }
  fadeInText2() {
    x.to(this.refs.content2, {
      opacity: 1,
      duration: .6,
      ease: "power2.out"
    });
  }
  fadeOutText2() {
    x.to(this.refs.content2, {
      opacity: 0,
      duration: .3,
      ease: "power2.out"
    });
  }
  scrollText2(o) {
    x.scrub(this.refs.contentInner2, {
      y: -o * this.scrollDistance2
    });
  }
  scrollTextEnd2(o) {
    x.scrub(this.refs.contentInner2, {
      y: -o * this.scrollDistance2
    });
  }
  showBackground() {
    this.refs.background && x.to(this.refs.background, {
      opacity: 1,
      duration: .5,
      ease: "power2.out"
    });
  }
  hideBackground() {
    this.refs.background && x.to(this.refs.background, {
      opacity: 0,
      duration: .3,
      ease: "power2.out"
    });
  }
  onResize(o) {
    this.scrollDistance1 = this.refs.text1.scrollHeight - this.refs.text1.clientHeight * .4, this.scrollDistanceEnd1 = this.refs.text1.clientHeight, this.scrollDistance2 = this.refs.text2.scrollHeight - this.refs.text2.clientHeight * .4, this.scrollDistanceEnd2 = this.refs.text2.clientHeight;
  }
}, _defineProperty(_Class2, "componentName", "About"), _Class2).register();
(_Class3 = class extends nt {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "index", 0);
    _defineProperty(this, "timer", null);
    _defineProperty(this, "isRunFade", !1);
  }
  onInit() {
    r.components[`top${this.constructor.componentName}`] = this, this.el.style.visibility = "hidden", this.refs.content.style.opacity = "0", this.on("showKv", () => {
      x.to(this.refs.content, {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      });
    });
  }
  changeScene(o) {
    switch (this.index = o, o) {
      case -1:
        c.emit("changeSection", "Kv", "Footer");
        break;
      case 0:
        c.emit("changeScene", "Kv");
        break;
      case 1:
        c.emit("changeSection", "", "Intro");
        break;
    }
  }
  progressLoading(o) {
    this.refs.percentage.textContent = Qe(o), o === 100 && this.refs.percentage.classList.add("-complete");
  }
  startInsetPlug() {
    this.el.classList.add("-start");
  }
  fadeLoading(o) {
    x.set(this.refs.progress, {
      opacity: o
    });
  }
  hideLoading() {
    this.refs.loading.remove();
  }
  show(o = !1) {
    this.el.style.visibility = "";
  }
  hide() {
    this.el.style.visibility = "hidden";
  }
  scroll(o) {
    x.scrub(this.refs.content, {
      opacity: o
    });
  }
}, _defineProperty(_Class3, "componentName", "Kv"), _Class3).register();
const fs = .6,
  gt = 1.4,
  vs = 1,
  et = 20,
  Ce = 40;
(_Class4 = class extends nt {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "index", 0);
    _defineProperty(this, "articleIndex", 0);
    _defineProperty(this, "timer", null);
  }
  onInit() {
    if (r.components[`top${this.constructor.componentName}`] = this, this.el.style.visibility = "hidden", this.refs.balloon.style.visibility = "hidden", this.refs.balloonItem1.style.opacity = "0", this.refs.balloonItem2.style.opacity = "0", this.refs.content2.style.visibility = "hidden", this.refs.content2Item1.style.opacity = "0", this.refs.content2Item2.style.opacity = "0", this.refs.content2Item3.style.opacity = "0", this.refs.content3.style.visibility = "hidden", gsap.set(this.refs.gradation, {
      yPercent: 100
    }), this.refs.newsArticle) {
      if (!Array.isArray(this.refs.newsArticle)) {
        this.refs.newsNavNext.style.display = "none", this.refs.newsNavPrev.style.display = "none";
        return;
      }
      this.refs.newsArticle.forEach((o, t) => {
        t > 0 && o.classList.add("-deactive");
      }), this.listenerClickNavNext = o => {
        o.preventDefault(), this.refs.newsArticle[this.articleIndex].classList.add("-deactive"), this.articleIndex = V(this.articleIndex + 1, this.refs.newsArticle.length), this.refs.newsArticle[this.articleIndex].classList.remove("-deactive");
      }, this.refs.newsNavNext.addEventListener("click", this.listenerClickNavNext), this.listenerClickNavPrev = o => {
        o.preventDefault(), this.refs.newsArticle[this.articleIndex].classList.add("-deactive"), this.articleIndex = V(this.articleIndex - 1, this.refs.newsArticle.length), this.refs.newsArticle[this.articleIndex].classList.remove("-deactive");
      }, this.refs.newsNavPrev.addEventListener("click", this.listenerClickNavPrev);
    }
  }
  changeScene(o) {
    switch (this.index = o, o) {
      case -1:
        c.emit("changeSection", "News", "About");
        break;
      case 0:
        c.emit("changeScene", "News"), this.refs.balloon.style.visibility = "", this.refs.content2.style.visibility = "hidden", this.refs.content3.style.visibility = "hidden";
        break;
      case 1:
        this.refs.balloon.style.visibility = "hidden", this.refs.content2.style.visibility = "", this.refs.content3.style.visibility = "hidden";
        break;
      case 2:
        c.emit("changeScene", "News"), this.refs.balloon.style.visibility = "hidden", this.refs.content2.style.visibility = "hidden", this.refs.content3.style.visibility = "";
        break;
      case 3:
        c.emit("changeSection", "", "Footer");
        break;
    }
  }
  show(o = !1) {
    this.el.style.visibility = "";
  }
  hide() {
    this.el.style.visibility = "hidden";
  }
  showBalloon() {
    this.isShowBalloon || (this.isShowBalloon = !0, this.tweenBalloon && (this.tweenBalloon.kill(), this.tweenBalloon = null), this.tweenBalloon = x.timeline({
      onStart: () => {
        this.refs.balloon.style.visibility = "";
      },
      onComplete: () => {
        this.tweenBalloon = null;
      }
    }, "showBalloon").add([gsap.fromTo(this.refs.balloonItem1, {
      opacity: 0
    }, {
      opacity: 1,
      duration: .8,
      ease: "power3.out",
      overwrite: !0,
      clearProps: !0
    }), gsap.fromTo(this.refs.balloonItem1, {
      y: et
    }, {
      y: 0,
      duration: gt,
      ease: "expo.out",
      overwrite: !0,
      clearProps: !0
    }), gsap.fromTo(this.refs.balloonItem2, {
      opacity: 0
    }, {
      opacity: 1,
      duration: .8,
      ease: "power3.out",
      delay: .2,
      overwrite: !0,
      clearProps: !0
    }), gsap.fromTo(this.refs.balloonItem2, {
      y: et
    }, {
      y: 0,
      duration: gt,
      ease: "expo.out",
      delay: .2,
      overwrite: !0,
      clearProps: !0
    })]), this.hideGradation());
  }
  hideBalloon() {
    this.isShowBalloon && (this.isShowBalloon = !1, this.tweenBalloon && (this.tweenBalloon.kill(), this.tweenBalloon = null), this.tweenBalloon = x.timeline({
      onComplete: () => {
        this.refs.balloon.style.visibility = "hidden", this.tweenBalloon = null;
      }
    }, "hideBalloon").add([gsap.to(this.refs.balloonItem1, {
      opacity: 0,
      duration: .5,
      y: et,
      ease: "power2.out",
      overwrite: !0
    }), gsap.to(this.refs.balloonItem2, {
      opacity: 0,
      duration: .5,
      y: et,
      ease: "power2.out",
      overwrite: !0
    })]));
  }
  showGradation() {
    this.isShowGradation || (this.isShowGradation = !0, this.tweenGradation && (this.tweenGradation.kill(), this.tweenGradation = null), this.tweenGradation = x.timeline({
      onComplete: () => {
        this.tweenGradation = null;
      }
    }, "showGradation").add([gsap.fromTo(this.refs.gradation, {
      yPercent: 100
    }, {
      yPercent: 0,
      duration: vs,
      ease: "expo.out",
      overwrite: !0,
      clearProps: !0
    })]));
  }
  hideGradation() {
    this.isShowGradation && (this.isShowGradation = !1, this.tweenGradation && (this.tweenGradation.kill(), this.tweenGradation = null), this.tweenGradation = x.timeline({
      onComplete: () => {
        this.tweenGradation = null;
      }
    }, "hideGradation").add([gsap.to(this.refs.gradation, {
      yPercent: 100,
      duration: fs,
      ease: "expo.out",
      overwrite: !0,
      clearProps: !0
    })]));
  }
  showContent2() {
    this.isShowContent2 || (this.isShowContent2 = !0, this.tweenContent2 && (this.tweenContent2.kill(), this.tweenContent2 = null), this.tweenContent2 = x.timeline({
      onStart: () => {
        this.refs.content2.style.visibility = "";
      },
      onComplete: () => {
        this.tweenContent2 = null;
      }
    }, "showContent2").add([gsap.fromTo([this.refs.content2Item1, this.refs.content2Item2, this.refs.content2Item3], {
      opacity: 0
    }, {
      opacity: 1,
      duration: .8,
      ease: "power3.out",
      overwrite: !0,
      clearProps: !0,
      stagger: .2
    }), gsap.fromTo([this.refs.content2Item1, this.refs.content2Item2, this.refs.content2Item3], {
      x: Ce
    }, {
      x: 0,
      duration: gt,
      ease: "expo.out",
      clearProps: !0,
      stagger: .2
    })]), this.showGradation());
  }
  hideContent2() {
    this.isShowContent2 && (this.isShowContent2 = !1, this.tweenContent2 && (this.tweenContent2.kill(), this.tweenContent2 = null), this.tweenContent2 = x.timeline({
      onComplete: () => {
        this.refs.content2.style.visibility = "hidden", this.tweenContent2 = null;
      }
    }, "hideContent2").add([gsap.to([this.refs.content2Item1, this.refs.content2Item2, this.refs.content2Item3], {
      opacity: 0,
      duration: .5,
      x: -et,
      ease: "power2.out",
      overwrite: !0
    })]));
  }
  showContent3() {
    this.isShowContent3 || (this.isShowContent3 = !0, this.tweenContent3 && (this.tweenContent3.kill(), this.tweenContent3 = null), this.tweenContent3 = x.timeline({
      onStart: () => {
        this.refs.content3.style.visibility = "";
      },
      onComplete: () => {
        this.tweenContent3 = null;
      }
    }, "showContent3").add([gsap.fromTo(this.refs.content3Item, {
      opacity: 0
    }, {
      opacity: 1,
      duration: .8,
      ease: "power3.out",
      overwrite: !0,
      clearProps: !0
    }), gsap.fromTo(this.refs.content3Item, {
      x: Ce
    }, {
      x: 0,
      duration: gt,
      ease: "expo.out",
      overwrite: !0,
      clearProps: !0
    })]), this.showGradation());
  }
  hideContent3() {
    this.isShowContent3 && (this.isShowContent3 = !1, this.tweenContent3 && (this.tweenContent3.kill(), this.tweenContent3 = null), this.tweenContent3 = x.timeline({
      onComplete: () => {
        this.refs.content3.style.visibility = "hidden", this.tweenContent3 = null;
      }
    }, "hideContent3").add([gsap.to(this.refs.content3Item, {
      opacity: 0,
      duration: .5,
      x: -et,
      ease: "power2.out",
      overwrite: !0
    })]), this.hideGradation());
  }
  onDestroy() {
    this.refs.newsNavPrev.addEventListener("click", this.listenerClickNavPrev), this.refs.newsNavPrev.addEventListener("click", this.listenerClickNavNext);
  }
}, _defineProperty(_Class4, "componentName", "News"), _Class4).register();
(_Class5 = class extends nt {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "index", 0);
    _defineProperty(this, "timer", null);
  }
  onInit() {
    r.components[`top${this.constructor.componentName}`] = this, this.el.style.visibility = "hidden", this.refs.content.style.visibility = "hidden", this.refs.content.style.opacity = "0";
  }
  changeScene(o) {
    switch (console.log("changeScene", o), this.index = o, o) {
      case -1:
        c.emit("changeSection", "Service", "Intro");
        break;
      case 0:
        c.emit("changeScene", "Service"), this.refs.content.style.visibility = "hidden", c.emit("showServiceTitle");
        break;
      case 1:
        c.emit("changeScene", "Service"), this.refs.content.style.visibility = "", c.emit("hideServiceTitle"), c.emit("showServiceIcon");
        break;
      case 2:
        c.emit("changeScene", "ServiceOpposite"), this.refs.content.style.visibility = "", c.emit("hideServiceTitle");
        break;
      case 3:
        c.emit("changeSection", "", "About");
        break;
    }
  }
  show(o = !1) {
    this.el.style.visibility = "";
  }
  hide() {
    this.el.style.visibility = "hidden";
  }
  showContent() {
    this.refs.content.style.visibility = "";
  }
  hideContent() {
    this.refs.content.style.visibility = "hidden";
  }
  fadeInText() {
    this.showContent(), x.to(this.refs.content, {
      opacity: 1,
      duration: .6,
      ease: "power2.out"
    });
  }
  fadeOutText() {
    x.to(this.refs.content, {
      opacity: 0,
      duration: .3,
      ease: "power2.out",
      onComplete: () => {
        this.hideContent();
      }
    });
  }
  fade(o) {
    x.scrub(this.refs.content, {
      opacity: o
    });
  }
  scrollText(o) {
    x.scrub(this.refs.contentInner, {
      y: -o * this.scrollDistance
    });
  }
  onResize(o) {
    this.scrollDistance = this.refs.text.scrollHeight;
  }
}, _defineProperty(_Class5, "componentName", "Service"), _Class5).register();
const Pe = .01,
  Ts = ei || !$t;
(_Class6 = class extends nt {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "index", 0);
    _defineProperty(this, "timer", null);
    _defineProperty(this, "isScrollEnter", !1);
    _defineProperty(this, "isPlayVideo", !1);
    _defineProperty(this, "isPlayedVideo", !1);
    _defineProperty(this, "videoDuration", 0);
    _defineProperty(this, "targetTime", 0);
    _defineProperty(this, "frame", 0);
  }
  onInit() {
    r.components[`top${this.constructor.componentName}`] = this, this.hide(), this.videoAll = new ct(this.refs.videoAll), this.videoLine = new ct(this.refs.videoLine), ti(this.refs.videoAll).then(() => {
      this.videoDuration = this.refs.videoAll.duration;
    }), this.on("changeScene", o => {
      o === "IntroCharging" && this.loadVideo();
    });
  }
  changeScene(o) {
    switch (this.index = o, o) {
      case -1:
        c.emit("changeSection", "Intro", "Kv");
        break;
      case 0:
        c.emit("changeScene", "Intro"), this.refs.content.style.visibility = "hidden", c.emit("showIntroTitle"), c.emit("hideIntroCharging");
        break;
      case 1:
        c.emit("changeScene", "Intro"), this.refs.content.style.visibility = "", c.emit("hideIntroTitle"), c.emit("hideIntroCharging");
        break;
      case 2:
        gsap.delayedCall(.25, () => {
          c.emit("changeScene", "IntroCharging");
        }), this.refs.content.style.visibility = "", c.emit("hideIntroTitle"), c.emit("showIntroCharging");
        break;
      case 3:
        c.emit("changeSection", "", "Service"), c.emit("hideIntroCharging");
        break;
    }
  }
  show(o = !1) {
    this.el.style.visibility = "", o ? (this.scrollText(1), this.makeTransitionOut(1), this.refs.content.style.opacity = "1", this.refs.videoAll.style.opacity = this.refs.videoLine.style.opacity = "1") : (this.videoAll.load(), this.videoLine.load(), this.scrollText(0), this.makeTransitionOut(0), this.refs.videoAll.currentTime = this.refs.videoLine.currentTime = 0, this.refs.videoAll.style.opacity = this.refs.videoLine.style.opacity = "0");
  }
  hide() {
    this.el.style.visibility = "hidden", this.refs.content.style.opacity = "0", this.refs.videoAll.style.opacity = this.refs.videoLine.style.opacity = "0";
  }
  showContent() {
    this.refs.content.style.visibility = "";
  }
  hideContent() {
    this.refs.content.style.visibility = "hidden";
  }
  scrollText(o) {
    x.scrub(this.refs.contentInner, {
      y: -o * this.scrollDistance
    });
  }
  fade(o) {
    x.scrub(this.refs.content, {
      opacity: o
    });
  }
  showMeter() {
    x.to([this.refs.videoAll, this.refs.videoLine], {
      opacity: 1,
      duration: .3,
      ease: "power2.out"
    });
  }
  hideMeter() {
    x.to([this.refs.videoAll, this.refs.videoLine], {
      opacity: 0,
      duration: .3,
      ease: "power2.out"
    });
  }
  startTransitionOut() {
    this.isPlayVideo = !1, this.pauseTick(), this.refs.videoAll.currentTime < this.videoDuration && (this.refs.videoAll.currentTime = this.refs.videoLine.currentTime = this.videoDuration), this.videoAll.pause(), this.videoLine.pause();
  }
  makeTransitionOut(o) {
    x.set([this.refs.videoAll, this.refs.videoLine], {
      scale: 1 + o * (100 - 1),
      x: o * 700
    });
  }
  progressMeter(o, t) {
    this.isScrollEnter || (this.isScrollEnter = !0), this.targetTime = o * this.videoDuration, Ts && t > 0 ? (this.refs.videoAll.playbackRate = this.refs.videoLine.playbackRate = Math.min(Math.max((this.targetTime - this.refs.videoAll.currentTime) * 8, 1), 16), !this.isPlayVideo && this.refs.videoAll.currentTime - this.targetTime < -Pe && (this.isPlayVideo = !0, this.videoAll.play(), this.videoLine.play(), this.playTick())) : (this.isPlayVideo && (this.isPlayVideo = !1, this.videoAll.pause(), this.videoLine.pause()), this.frame++ % 3 === 0 && (this.refs.videoAll.currentTime = this.refs.videoLine.currentTime = this.targetTime, t < 0 || (this.isPlayVideo = !0, this.playTick())));
  }
  loadVideo() {
    this.videoAll.load(), this.videoLine.load();
  }
  onTick() {
    this.isPlayVideo && this.refs.videoAll.currentTime - this.targetTime >= -Pe && (this.isPlayVideo = !1, this.videoAll.pause(), this.videoLine.pause(), this.pauseTick());
  }
  onResize(o) {
    this.scrollDistance = this.refs.content.scrollHeight;
  }
}, _defineProperty(_Class6, "componentName", "Intro"), _Class6).register();
const Ke = {
    src: "/_astro/warp.4313f255.png",
    width: 1920,
    height: 1275,
    format: "png"
  },
  Ve = {
    src: "/_astro/warp.d93e5bd9.png",
    width: 900,
    height: 597,
    format: "png"
  },
  We = {
    src: "/_astro/city_fukan.ef4c4a33.jpg",
    width: 1200,
    height: 335,
    format: "jpg"
  },
  wt = {
    src: "/_astro/sky_cloud.313ad55d.png",
    width: 1436,
    height: 2313,
    format: "png"
  },
  ee = {
    src: "/_astro/battery_alert.1b556751.png",
    width: 62,
    height: 158,
    format: "png"
  },
  rt = {
    src: "/_astro/title.3871f353.png",
    width: 852,
    height: 135,
    format: "png"
  },
  je = {
    src: "/_astro/michi_01.f19d5d4f.png",
    width: 1072,
    height: 860,
    format: "png"
  },
  $e = {
    src: "/_astro/michi_02.a7f31ff7.png",
    width: 1055,
    height: 899,
    format: "png"
  },
  Xe = {
    src: "/_astro/michi_03.0edcdda1.png",
    width: 1327,
    height: 904,
    format: "png"
  },
  It = {
    src: "/_astro/title.653224c9.png",
    width: 624,
    height: 135,
    format: "png"
  },
  Ye = {
    src: "/_astro/city_fukan_night.1b70ed14.jpg",
    width: 2400,
    height: 670,
    format: "jpg"
  },
  Ze = {
    src: "/_astro/city_fukan_night.daadf4ff.jpg",
    width: 1200,
    height: 335,
    format: "jpg"
  };
function xs() {
  S(Bi, {
    isAddToLoadingWait: !0
  }), N("/gl/car_v7_out3.glb", {
    isAddToLoadingWait: !0
  }), S(Hi, {
    isAddToLoadingWait: !0
  }), S(Fi, {
    isAddToLoadingWait: !0
  }), S(zi, {
    isAddToLoadingWait: !0
  }), S(St, {
    isAddToLoadingWait: !0
  }), S(Di, {
    isAddToLoadingWait: !0
  }), N("/gl/optimize/joint_v6_out3_line.glb", {
    isAddToLoadingWait: !0
  }), S(Ui, {
    isAddToLoadingWait: !0
  }), S(Gi, {
    isAddToLoadingWait: !0
  }), S(f.isSp ? Ve : Ke, {
    isAddToLoadingWait: !0
  }), S(Ki, {
    isAddToLoadingWait: !0
  }), S(f.isSp ? We : he, {
    isAddToLoadingWait: !0
  }), S(f.isSp ? Yi : Zi, {
    isAddToLoadingWait: !0
  }), N("/gl/optimize/colony_juden_v6.glb", {
    isAddToLoadingWait: !0
  }), N("/gl/optimize/car_B_v3_yellow.glb", {
    isAddToLoadingWait: !0
  }), N("/gl/optimize/car_B_v3_gray.glb", {
    isAddToLoadingWait: !0
  }), S(ee, {
    isAddToLoadingWait: !0
  }), S(W, {
    isAddToLoadingWait: !0
  }), S(rt, {
    isAddToLoadingWait: !0
  }), S(Wi, {
    isAddToLoadingWait: !0
  }), S(yt, {
    isAddToLoadingWait: !0
  }), N("/gl/optimize/colony_v10.glb", {
    isAddToLoadingWait: !0
  }), S(je, {
    isAddToLoadingWait: !0
  }), S($e, {
    isAddToLoadingWait: !0
  }), S(Xe, {
    isAddToLoadingWait: !0
  }), N("/gl/optimize/bird_v3.glb", {
    isAddToLoadingWait: !0
  }), S(It, {
    isAddToLoadingWait: !0
  }), N("/gl/optimize/colony_fukan_v2.glb", {
    isAddToLoadingWait: !0
  }), S(wt, {
    isAddToLoadingWait: !0
  }), S(qi, {
    isAddToLoadingWait: !0
  }), S(f.isSp ? is : ss, {
    isAddToLoadingWait: !0
  }), S(f.isSp ? ns : os, {
    isAddToLoadingWait: !0
  }), N("/gl/optimize/colony_land_v8.glb", {
    isAddToLoadingWait: !0
  }), N("/gl/optimize/colony_mountain_v10.glb", {
    isAddToLoadingWait: !0
  });
}
function Ss() {
  setTimeout(() => {
    S(De, {}), N("/gl/night/optimize/joint_v6_out3_line.glb", {}), S(Et, {}), S(Lt, {}), N("/gl/night/optimize/colony_juden_v6_line.glb", {}), N("/gl/night/optimize/car_B_v3_yellow.glb", {}), N("/gl/night/optimize/car_B_v3_gray.glb", {}), S(f.isSp ? Ze : Ye, {}), S(f.isSp ? Ji : Qi, {}), N("/gl/night/optimize/colony_v10_line.glb", {}), N("/gl/night/optimize/colony_fukan_v2_line.glb", {}), S(ts, {}), S(f.isSp ? rs : as, {}), S(f.isSp ? ls : hs, {}), N("/gl/night/optimize/colony_land_v8_line.glb", {}), N("/gl/night/optimize/colony_mountain_v10_line.glb", {});
  }, 1e3);
}
var ys = `precision highp float;

varying vec2 vUv;

uniform sampler2D tColor;
uniform vec2 uResolutionObject;
uniform sampler2D tLightning1;
uniform sampler2D tLightning2;
uniform float uLightning1Random;
uniform float uLightning2Random;
uniform vec3 uColor;

const vec3 LIGHTNING_COLOR = vec3(222., 251., 11.) / 255.;
const vec2 LIGHTNING_1_RESOLUTION = vec2(500., 400.);
const vec2 LIGHTNING_2_RESOLUTION = vec2(400., 300.);

const float PI = 3.1415926;
const float PI2 = 6.2831853;

vec4 texture2DInnerRange(sampler2D t, vec2 uv) {
return (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) ? vec4(0.) : texture2D(t, uv);
}

#pragma glslify: export(texture2DInnerRange)
vec2 fitCover(vec2 coord, vec2 inputResolution, vec2 outputResolution) {
vec2 ratio = vec2(
  min((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),
  min((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)
);
return coord * ratio + (1. - ratio) * 0.5;
}
vec2 fitContain(vec2 coord, vec2 inputResolution, vec2 outputResolution) {
vec2 ratio = vec2(
  max((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),
  max((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)
);
return coord * ratio + (1. - ratio) * 0.5;
}

#pragma glslify: export(fitContain)
vec2 getZoomedUv(vec2 uv, float zoom, vec2 origin) {
origin.x = -origin.x;
uv += origin;
float scale = 1. / zoom;
return uv * scale - 0.5 * (scale - 1.);
}
vec2 rotate(vec2 uv, float rad, vec2 offset) {
uv += offset;
uv -= 0.5;
uv *= mat2(cos(rad),sin(rad),-sin(rad),cos(rad));
uv += 0.5;
uv -= offset;
return uv;
}
vec4 postprocessGamma(vec4 value) {
return vec4(pow(value.xyz, vec3(1.0 / 2.2)), value.w);
}
highp float random(vec2 co)
{
highp float a = 12.9898;
highp float b = 78.233;
highp float c = 43758.5453;
highp float dt= dot(co.xy ,vec2(a,b));
highp float sn= mod(dt,3.14);
return fract(sin(sn) * c);
}
vec3 overlay(vec3 colorSrc, vec3 colorDist) {
return vec3(
  (colorDist.r <= 0.5) ? (2. * colorSrc.r * colorDist.r) : (1. - 2. * (1. - colorDist.r) * (1. - colorSrc.r)),
  (colorDist.g <= 0.5) ? (2. * colorSrc.g * colorDist.g) : (1. - 2. * (1. - colorDist.g) * (1. - colorSrc.g)),
  (colorDist.b <= 0.5) ? (2. * colorSrc.b * colorDist.b) : (1. - 2. * (1. - colorDist.b) * (1. - colorSrc.b))
);
}

vec3 addLightning(vec3 color, vec2 uv, vec2 resolution, sampler2D texture, float random) {
vec2 lightningUv = uv;
lightningUv = fitContain(lightningUv, resolution, uResolutionObject);
lightningUv = rotate(lightningUv, random * PI2, vec2(0.));
lightningUv = getZoomedUv(lightningUv, random, vec2(-0.5 + random));
vec4 lightningColor = texture2DInnerRange(texture, lightningUv);
color.rgb = mix(color.rgb, LIGHTNING_COLOR, lightningColor.a * (lightningColor.r + lightningColor.g + lightningColor.b) * 0.5);
return color;
}

void main() {
vec2 uv = vUv;
vec4 color = texture2D(tColor, uv);
color = postprocessGamma(color);


vec2 vignetteUv = fitCover(uv, vec2(1.), uResolutionObject);
float vignette = min(length(vignetteUv - vec2(0.5)) * 2.2, 1.);
vignette = pow(vignette, 2.2);
color.rgb = mix(color.rgb, uColor, vignette);

/* ノイズ */
float noiseIntensity = 0.5;
vec3 colorSrc = vec3(mix(0.2, 0.6, random(vUv)), mix(0.2, 0.6, random(vUv + 0.1)), mix(0.2, 0.6, random(vUv - 0.1)));
vec3 colorDist = color.rgb;
color.rgb = overlay(colorSrc, colorDist);
color.a = 1.;

/* ライトニング */
color.rgb = addLightning(color.rgb, uv, LIGHTNING_1_RESOLUTION, tLightning1, uLightning1Random);
color.rgb = addLightning(color.rgb, uv, LIGHTNING_2_RESOLUTION, tLightning2, uLightning2Random);

/* メーター */






gl_FragColor = color;



}`;
const y = {
  backgroundColor: new A(.59, .71, .02),
  camera: {
    fov: 30,
    fovTransitionOut: 12,
    position: new p(2.7, 3.75, -8.2),
    positionStart: new p(0, f.isSp ? 6 : 4.85, f.isSp ? 8 : 7),
    positionTransitionOut: new p(0, f.isSp ? 5 : 3.95, f.isSp ? 6 : 5),
    rotation: new L(-.58, 0, 0),
    move: new p(5, -2, 8),
    far: 100,
    lookAt: new p(0, f.isSp ? .4 : .3, 0),
    lookAtTransitionOut: new p(0, f.isSp ? .8 : .6, 0)
  },
  directionalLight: {
    color: new A(.73, 1, 0),
    intensity: 4.2,
    position: new p(0, 10.8, 8.1)
  },
  ambientLight: {
    color: new A(.58, .9, 0),
    intensity: 20
  },
  floor: {
    color: new A(14935609),
    position: new p(0, 0, f.isSp ? -5.6 : 0),
    sizeRate: .03,
    divisions: f.isSp ? 200 : 500
  },
  car: {
    position: new p(0, 0, 0),
    rotation: new L(0, 0, 0),
    scale: 1,
    speed: .4,
    colorAddScalar: .11,
    colorAddScalarWiper: .05
  },
  meter: {
    position: new p(f.isSp ? .002132 : -.002125, f.isSp ? -.166 : -.0301875, 0),
    scale: f.isSp ? .39 : 484 / 1600
  }
};
class ws extends _t {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "scene", new Z());
    _defineProperty(this, "camera", void 0);
    _defineProperty(this, "lookAt", y.camera.lookAt.clone());
    _defineProperty(this, "folder", void 0);
    _defineProperty(this, "cars", []);
    _defineProperty(this, "isRunCar", !1);
    _defineProperty(this, "isRunMeter", !1);
    _defineProperty(this, "isRunText", !1);
    _defineProperty(this, "isTransitioning", !1);
    _defineProperty(this, "isTransitionedNext", !1);
  }
  onInit() {
    r.enablePane && (this.folder = r.pane.addFolder({
      title: "IntroCharging",
      expanded: !1
    })), this.initScene(), this.initCamera(), this.initLight(), this.initFloor(), this.initCar(), this.initPostprocessing(), this.on("hideIntroCharging", this.hide.bind(this));
  }
  initScene() {
    this.scene.background = y.backgroundColor;
  }
  initCamera() {
    if (this.camera = new Ot(y.camera.fov, this.option.camera.aspect, this.option.camera.near, y.camera.far), this.camera.position.copy(y.camera.position), this.setLookAt(), r.enablePane) {
      const t = this.folder.addFolder({
        title: "camera"
      });
      t.addInput(this.camera, "position").on("change", () => {
        this.setLookAt();
      }), t.addInput(this.camera, "fov", {
        min: 5,
        max: 179
      }).on("change", () => {
        this.camera.updateProjectionMatrix();
      }), t.addInput(this.camera, "far", {
        min: 0,
        max: 100
      }).on("change", () => {
        this.camera.updateProjectionMatrix();
      }), t.addInput(this, "lookAt").on("change", () => {
        this.setLookAt();
      }), t.addInput(y.camera, "move");
    }
  }
  setLookAt() {
    this.camera.lookAt(this.lookAt);
  }
  initLight() {
    let t;
    r.enablePane && (t = this.folder.addFolder({
      title: "light"
    }));
    {
      const e = new At(y.directionalLight.color, y.directionalLight.intensity);
      if (e.position.copy(y.directionalLight.position), this.scene.add(e), r.enablePane) {
        const s = t.addFolder({
          title: "DirectionalLight"
        });
        s.addInput(e, "color", {
          color: {
            type: "float"
          },
          picker: "inline",
          expanded: !0,
          presetKey: "DirectionalLight color"
        }), s.addInput(e, "intensity", {
          presetKey: "DirectionalLight intensity",
          min: 0,
          max: 20
        }), s.addInput(e, "position", {
          presetKey: "DirectionalLight position"
        });
      }
    }
    {
      const e = new ci(y.ambientLight.color, y.ambientLight.intensity);
      if (this.scene.add(e), r.enablePane) {
        const s = t.addFolder({
          title: "AmbientLight"
        });
        s.addInput(e, "color", {
          color: {
            type: "float"
          },
          picker: "inline",
          expanded: !0,
          presetKey: "AmbientLight color"
        }).on("change", () => {
          this.uniforms.uColor.value.setRGB(e.color.r, e.color.g, e.color.b);
        }), s.addInput(e, "intensity", {
          presetKey: "AmbientLight intensity",
          min: 0,
          max: 20
        });
      }
    }
  }
  initFloor() {
    const t = new di(Math.max(this.option.width, this.option.height) * y.floor.sizeRate, y.floor.divisions, y.floor.color, y.floor.color);
    t.position.copy(y.floor.position), this.scene.add(t);
  }
  initCar() {
    N("/gl/car_v7_out3.glb", {
      onLoad: (t, e) => {
        const s = e;
        s.name = "glTF", s.traverse(i => {
          if (i.isMesh) switch (i.material = i.material.clone(), i.material.name) {
            case "glass":
            case "window":
            case "lamp":
            case "loof":
            case "tire":
              i.material.metalness = .1, i.material.color.addScalar(y.car.colorAddScalar);
              break;
            case "black_mat":
              i.material.color.addScalar(y.car.colorAddScalarWiper);
              break;
            case "Body":
              i.material.metalness *= .97;
              break;
            case "wheel":
            case "metal":
              i.material.metalness = 0;
              break;
          }
        }), s.position.copy(y.car.position), this.isDisposed ? this.addDisposeTarget(this.scene, s) : this.scene.add(s), this.cars.push(s);
      }
    });
  }
  initPostprocessing() {
    const t = this.option.width * this.option.pixelRatio,
      e = this.option.height * this.option.pixelRatio,
      s = this.postprocessingScene = new Z(),
      i = this.postprocessingCamera = new it();
    s.add(i), this.renderTarget = this.renderTargets.Postprocessing = new X(t, e, {
      type: Y
    });
    const n = this.lightningVideo1 = new ct("/assets/video/denki_l.mov"),
      l = this.lightningVideo2 = new ct("/assets/video/denki_m.mov"),
      u = D({
        tColor: this.renderTarget.texture,
        uResolutionObject: new R(t, e),
        tLightning1: new Xt(n.el),
        tLightning2: new Xt(l.el),
        uLightning1Random: Math.random(),
        uLightning2Random: Math.random(),
        uColor: y.ambientLight.color
      }),
      d = new b({
        uniforms: u,
        vertexShader: C,
        fragmentShader: ys
      });
    this.uniforms = F(u);
    const a = this.meshes.Postprocessing = new P(new E(t, e), d);
    s.add(a), n.el.addEventListener("ended", () => {
      this.uniforms.uLightning1Random.value = Math.random(), n.restart();
    }), l.el.addEventListener("ended", () => {
      this.uniforms.uLightning2Random.value = Math.random(), l.restart();
    });
  }
  initOrbitControls() {
    se(() => import("./OrbitControls.105ec41e.js"), ["_astro/OrbitControls.105ec41e.js", "_astro/constants.e6c90e33.js", "_astro/PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js"]).then(({
      OrbitControls: t
    }) => {
      const e = new t(this.camera, this.option.renderer.domElement);
      e.addEventListener("change", () => {
        this.camera.far = y.camera.far + e.getDistance(), this.camera.updateProjectionMatrix(), this.setLookAt();
      }), e.maxDistance = 5e4, e.update(), this.setLookAt();
    });
  }
  show() {
    this.lightningVideo1.play(), this.lightningVideo2.play(), this.isTransitioning = !1;
  }
  hide() {
    this.lightningVideo1.pause(), this.lightningVideo2.pause();
  }
  startTransitionOut() {
    r.components.topIntro.startTransitionOut();
  }
  makeTransitionOut(t) {
    const e = K["quint.inOut"](t * .85) / .85;
    this.camera.position.set(...H(y.camera.positionStart, y.camera.positionTransitionOut, e)), this.lookAt.set(...H(y.camera.lookAt, y.camera.lookAtTransitionOut, e)), this.camera.fov = w(y.camera.fov, y.camera.fovTransitionOut, e), this.setLookAt(), this.camera.updateProjectionMatrix(), r.components.topIntro.makeTransitionOut(K["expo.in"](e));
  }
  resize(t, e, s) {
    this.camera.aspect = t / e, this.camera.updateProjectionMatrix(), this.postprocessingCamera.resize(t * s, e * s);
  }
  scroll(t, e) {
    if (t >= Yt) {
      if (this.isRunMeter) {
        this.isRunMeter = !1;
        const s = 1;
        r.components.topIntro.progressMeter(s, e);
      }
    } else if (lt < t && t < Yt) {
      this.isRunMeter || (this.isRunMeter = !0, this.isTransitioning = !1, r.components.topIntro.showMeter());
      const s = (t - lt) / Oe;
      r.components.topIntro.progressMeter(s, e);
    } else if (t <= lt && this.isRunMeter) {
      this.isRunMeter = !1;
      const s = 0;
      r.components.topIntro.hideMeter(), r.components.topIntro.progressMeter(s, e);
    }
    if (t >= pe) {
      if (this.isRunText) {
        this.isRunText = !1;
        const s = 1;
        r.components.topIntro.scrollText(w(J, 1, s));
      }
      !this.isTransitionedNext && r.nextScene === "IntroCharging" && r.scrollDirection === 1 && (this.isTransitionedNext = !0, c.emit("top:startTransition:service"));
    } else if (Mt < t && t < pe) {
      this.isRunText || (this.isRunText = !0, r.scrollDirection === -1 && (this.isTransitionedNext = !1, r.components.topIntro.fade(1)));
      const s = (t - Mt) / ui;
      r.components.topIntro.scrollText(w(J, 1, Math.min(s / .8, 1)));
      const i = -at(s, 0, pi, 0, 1, !0) * Math.PI * 2;
      this.camera.position.set(y.camera.positionStart.x + Math.sin(i) * y.camera.move.x, y.camera.positionStart.y + Math.sin(s * Math.PI) * y.camera.move.y, y.camera.positionStart.z + Math.cos(i) * y.camera.move.z - y.camera.move.z), this.setLookAt();
    } else if (t <= Mt && this.isRunText) {
      this.isRunText = !1;
      const s = 0;
      r.components.topIntro.scrollText(w(J, 1, s));
    }
    if (t >= Zt) {
      if (this.isRunCar) {
        this.isRunCar = !1;
        const s = 1;
        this.camera.position.set(w(y.camera.position.x, y.camera.positionStart.x, s), w(y.camera.position.y, y.camera.positionStart.y, s), w(y.camera.position.z, y.camera.positionStart.z, s)), this.setLookAt(), r.components.topIntro.scrollText(w(Bt, J, s));
      }
    } else if (Tt < t && t < Zt) {
      this.isRunCar || (this.isRunCar = !0, this.isTransitionedNext = !1, r.scrollDirection === -1 && c.emit("top:startTransition:charging", !0));
      const s = (t - Tt) / Ae;
      this.camera.position.set(w(y.camera.position.x, y.camera.positionStart.x, s), w(y.camera.position.y, y.camera.positionStart.y, s), w(y.camera.position.z, y.camera.positionStart.z, s)), this.setLookAt(), r.components.topIntro.scrollText(w(Bt, J, s));
    } else if (t <= Tt && this.isRunCar) {
      this.isRunCar = !1, c.emit("changeScene", "Intro", {
        isBack: !0
      });
      const s = 0;
      this.camera.position.set(w(y.camera.position.x, y.camera.positionStart.x, s), w(y.camera.position.y, y.camera.positionStart.y, s), w(y.camera.position.z, y.camera.positionStart.z, s)), this.setLookAt(), r.components.topIntro.scrollText(w(Bt, J, s));
    }
  }
  tick(t) {}
  render(t = null) {
    this.option.renderer.setRenderTarget(this.renderTarget), this.option.renderer.clear(), this.option.renderer.render(this.scene, this.camera), this.option.renderer.setRenderTarget(t), this.option.renderer.render(this.postprocessingScene, this.postprocessingCamera);
  }
}
const T = {
    backgroundColor: new A(8618653),
    backgroundColorNight: new A(0),
    camera: {
      positionTransitionIn: new p(0, 2, -20),
      position: new p(-17, 1.6, 15),
      positionTransitionOut: new p(-13, 1.4, 2),
      fovTransitionIn: f.isSp ? 30 : 8,
      fov: f.isSp ? 30 : 22,
      fovTransitionOut: f.isSp ? 30 : 12,
      far: 100,
      lookAtTransitionIn: new p(f.isSp ? 60 : 50, f.isSp ? -1.6 : -3.8, -180),
      lookAt: new p(f.isSp ? 60 : 40, f.isSp ? -1.6 : -2.8, -150),
      lookAtEnd: new p(26, f.isSp ? -1.6 : -3.8, -150),
      lookAtTransitionOut: new p(f.isSp ? 60 : 30, f.isSp ? -1.6 : -2.8, -180)
    },
    directionalLight: {
      color: new A(1, 1, 1),
      intensity: 2,
      position: new p(-40, 80, 26)
    },
    ambientLight: {
      color: new A(1, 1, 1),
      intensity: .4
    },
    streetBackground: {
      position: new p(-4.3, f.isSp ? 6.6 : 5.1, -14),
      rotation: new L(0, 0, 0),
      size: new p(f.isSp ? 5.6 / 5.1 * 7.8 : 5.6, f.isSp ? 7.8 : 5.1, 1),
      textureRotation: .72,
      rotationCenter: new R(0, 0),
      offset: new R(-.15, -.1),
      scale: 1,
      spread: .2,
      darkness: .66,
      darknessNight: .23,
      fadePosition: 0,
      fadeRate: 1.5,
      opacity: 1,
      opacityNight: 0,
      speed: 0,
      color: new A(.55, .38, .31),
      colorNight: new A(.28, .12, .06)
    },
    street: {
      position: new p(0, 0, 0),
      rotation: new L(0, 3.12, 0),
      model: {
        position: new p(0, 10.4, 0),
        rotation: new L(0, 0, 0)
      }
    },
    carA: {
      individual: [{
        position: new p(13, .2, -13),
        rotation: new L(0, 0, 0)
      }],
      scale: 1,
      speed: .01
    },
    carB: {
      individual: [{
        position: new p(12, 0, 2.3),
        rotation: new L(0, Math.PI * -.5, 0)
      }, {
        position: new p(17 + 6, 0, 2.3),
        positionMore: new p(17, 0, 2.3),
        rotation: new L(0, Math.PI * -.5, 0)
      }, {
        position: new p(-1.8, 0, 9.9),
        rotation: new L(0, Math.PI, 0)
      }],
      scale: 1,
      speed: .01,
      headlight: {
        position: new p(0, 0, 4.5),
        scale: new p(1, 1, 1),
        opacity: .6
      },
      taillight: {
        position: new p(0, 0, -2.8),
        scale: new p(1, 1, 1),
        opacity: .8
      }
    },
    icon: {
      pivot: .5,
      charging: {
        position: new p(f.isSp ? -11 + .8 : -11, f.isSp ? 2.2 - .5 - .2 : 2.2 - .5, -3.3),
        rotation: new L(0, -.3, 0),
        scale: .0038,
        isAnimation: !0
      },
      stress: {
        position: new p((f.isSp, -5), (f.isSp, 2.3 - .5), -9),
        rotation: new L(0, -.3, 0),
        scale: .0038,
        isAnimation: !1
      },
      charging2: {
        position: new p(-16, 1.9 - .5, -3.3),
        rotation: new L(0, -.3, 0),
        scale: .0038,
        isAnimation: !0
      }
    },
    title: {
      position: new p(0, f.isSp ? 38 : 68, 0)
    },
    speed: .01,
    stop: !1
  },
  Is = {
    maxblur: 2.4,
    maxblurNight: 0,
    blurFocus: 2.2,
    blurExponent: 1.8,
    blurCenter: new R(-.03, -.02),
    mNear: .1,
    mFar: 47,
    bokehNear: .36,
    bokehFarBack: 2.2,
    bokehFarFront: .1,
    brightness: .8,
    noiseProgress: 1,
    nightModeThreshold4: .52,
    monochromeMax: .4,
    uRay: [{
      center: new R(-.41, f.isSp ? 1.5 : 1.3),
      rotation: .085,
      speed: .1,
      offset: 5,
      width: f.isSp ? .066 : .059,
      edge: .01,
      rayDistance: f.isSp ? 4.8 : 3.6,
      opacity: f.isSp ? .6 : .8
    }, {
      center: new R(-.4, f.isSp ? 1.5 : 1.3),
      rotation: .09,
      speed: .5,
      offset: .023,
      width: .037,
      edge: .042,
      rayDistance: f.isSp ? 6.83 : 5,
      opacity: .4
    }, {
      center: new R(.53, f.isSp ? 1.5 : 1.3),
      rotation: .089,
      speed: .2,
      offset: 0,
      width: .02,
      edge: .01,
      rayDistance: 3.6,
      opacity: .67
    }]
  };
class Ns extends _t {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "scene", new U());
    _defineProperty(this, "sceneHasNotLine", new U());
    _defineProperty(this, "sceneCar", new U());
    _defineProperty(this, "sceneSky", new U());
    _defineProperty(this, "sceneText", new U());
    _defineProperty(this, "scene2D", new U());
    _defineProperty(this, "camera", void 0);
    _defineProperty(this, "camera2D", void 0);
    _defineProperty(this, "lookAt", T.camera.lookAt.clone());
    _defineProperty(this, "cameraPosition", T.camera.position.clone());
    _defineProperty(this, "folder", void 0);
    _defineProperty(this, "street", new G());
    _defineProperty(this, "streetHasNotLine", new G());
    _defineProperty(this, "cars", []);
    _defineProperty(this, "carMixers", []);
    _defineProperty(this, "carRunMixer", void 0);
    _defineProperty(this, "postprocessing", {
      composer: ne,
      bokeh: ae
    });
    _defineProperty(this, "uniformsIcon", {});
    _defineProperty(this, "meshIcon", {});
    _defineProperty(this, "icons", []);
    _defineProperty(this, "isRunTransition", !1);
    _defineProperty(this, "isRunTitle", !1);
    _defineProperty(this, "isRunText", !1);
    _defineProperty(this, "isTransitionedNext", !1);
  }
  onInit() {
    r.enablePane && (this.folder = r.pane.addFolder({
      title: "Service",
      expanded: !1
    }), this.folder.addInput(T, "speed", {
      min: 0
    })), this.textures.headlight = S(Et, {}), this.textures.taillight = S(Lt, {}), this.initScene(), this.initCamera(), this.initLight(), this.initStreetBackground(), this.initStreet(), this.initCar(), this.initIcon(), this.initInsideCar(), this.initTitle(), this.initPostprocessing();
  }
  initScene() {
    this.sceneSky.background = T[this.option.isNight ? "backgroundColorNight" : "backgroundColor"], r.enablePane && this.folder.addFolder({
      title: "scene",
      expanded: !1
    }).addInput(this.sceneSky, "background", {
      label: "背景色",
      color: {
        type: "float"
      },
      picker: "inline"
    });
  }
  initCamera() {
    if (this.camera = new Ot(T.camera.fov, this.option.camera.aspect, this.option.camera.near, T.camera.far), this.camera.position.copy(this.cameraPosition), this.setLookAt(), this.camera2D = new it(), r.enablePane) {
      const t = this.folder.addFolder({
        title: "camera",
        expanded: !1
      });
      t.addInput(this, "cameraPosition", {
        label: "position"
      }).on("change", () => {
        this.camera.position.copy(this.cameraPosition), this.setLookAt();
      }), t.addInput(this.camera, "fov", {
        min: 5,
        max: 179
      }).on("change", () => {
        this.camera.updateProjectionMatrix();
      }), t.addInput(this.camera, "far", {
        min: 0
      }).on("change", () => {
        this.camera.updateProjectionMatrix();
      }), t.addInput(this, "lookAt").on("change", () => {
        this.setLookAt();
      });
    }
  }
  setLookAt() {
    const t = this.lookAt.clone().add(new p(0, this.cameraPosition.y));
    this.camera.lookAt(t);
  }
  initLight() {
    {
      const t = new At(T.directionalLight.color, T.directionalLight.intensity);
      t.position.copy(T.directionalLight.position), this.scene.add(t), this.sceneCar.add(t.clone());
    }
    {
      const t = new oe(16777215, 16777215, 1);
      t.position.set(0, 50, 0), this.scene.add(t), this.sceneCar.add(t.clone());
    }
  }
  initStreetBackground() {
    const t = this.option.isNight ? De : he,
      e = this.textures.StreetBackground = S(t, {}),
      s = D({
        uTexture: e,
        uResolutionObject: new R(T.streetBackground.size.x, T.streetBackground.size.y),
        uResolutionImage: new R(t.width, t.height),
        uRotation: T.streetBackground.textureRotation,
        uRotationCenter: T.streetBackground.rotationCenter,
        uOffset: T.streetBackground.offset,
        uTime: 0,
        uSpread: T.streetBackground.spread,
        uScale: T.streetBackground.scale,
        uDarkness: T.streetBackground[this.option.isNight ? "darknessNight" : "darkness"],
        uFadePosition: T.streetBackground.fadePosition,
        uFadeRate: T.streetBackground.fadeRate,
        uOpacity: T.streetBackground[this.option.isNight ? "opacityNight" : "opacity"],
        uAlpha: 1,
        uColor: T.streetBackground[this.option.isNight ? "colorNight" : "color"],
        uBackgroundColor: this.sceneSky.background
      });
    this.uniformsStreetBackground = F(s);
    const i = this.streetBackgroundMesh = new P(new E(1, 1), new b({
      uniforms: s,
      vertexShader: C,
      fragmentShader: Mi
    }));
    if (i.position.copy(T.streetBackground.position), i.rotation.copy(T.streetBackground.rotation), i.scale.set(T.streetBackground.size.x, T.streetBackground.size.y, 1), this.sceneSky.add(i), r.enablePane) {
      const n = this.folder.addFolder({
        title: "街背景",
        expanded: !1
      });
      n.addInput(i, "visible"), n.addInput(i, "position"), n.addInput(i, "rotation"), n.addInput(i, "scale", {
        label: "全体の広さ",
        x: {
          min: 0
        },
        y: {
          min: 0
        },
        z: {
          min: 0
        }
      }).on("change", () => {
        this.uniformsStreetBackground.uResolutionObject.value.set(i.scale.x, i.scale.y);
      }), n.addInput(this.uniformsStreetBackground.uScale, "value", {
        label: "scale",
        min: 0
      }), n.addInput(this.uniformsStreetBackground.uSpread, "value", {
        label: "歪み",
        min: 0,
        max: 10
      }), n.addInput(this.uniformsStreetBackground.uRotation, "value", {
        label: "画像回転",
        min: 0,
        max: Math.PI
      }), n.addInput(this.uniformsStreetBackground.uRotationCenter, "value", {
        label: "回転中心"
      }), n.addInput(this.uniformsStreetBackground.uOffset, "value", {
        label: "画像位置"
      }), n.addInput(this.uniformsStreetBackground.uDarkness, "value", {
        label: "darkness"
      }), n.addInput(this.uniformsStreetBackground.uFadePosition, "value", {
        label: "フェード Position",
        min: 0
      }), n.addInput(this.uniformsStreetBackground.uFadeRate, "value", {
        label: "フェード Rate",
        min: 0
      }), n.addInput(this.uniformsStreetBackground.uOpacity, "value", {
        label: "opacity",
        min: 0,
        max: 1
      }), n.addInput(this.uniformsStreetBackground.uColor, "value", {
        label: "色",
        color: {
          type: "float"
        },
        picker: "inline",
        expanded: !1
      });
    }
  }
  initStreet() {
    let t;
    r.enablePane && (t = this.folder.addFolder({
      title: "街",
      expanded: !1
    })), this.street = new G(), this.street.position.copy(T.street.position), this.street.rotation.copy(T.street.rotation), this.scene.add(this.street), this.streetHasNotLine = this.street.clone(), this.sceneHasNotLine.add(this.streetHasNotLine), N(this.option.isNight ? "/gl/night/optimize/colony_juden_v6_line.glb" : "/gl/optimize/colony_juden_v6.glb", {
      onLoad: (e, s) => {
        const i = s;
        i.name = "glTF", i.traverse(n => {
          if (n.isMesh) switch (n.parent.name) {
            case "judenki_soden":
            case "judenki_soden001":
              n.visible = !1;
              break;
          }
        }), i.position.copy(T.street.model.position), i.rotation.copy(T.street.model.rotation), this.streetModel = i, this.streetModelHasNotLine = i.clone(), this.streetModelHasNotLine.traverse(n => {
          n.isMesh && n.name.startsWith("spark_") && (n.visible = !1);
        }), r.enablePane && (t.addInput(this.street, "visible"), t.addInput(this.street, "position"), t.addInput(this.street, "rotation"), t.addInput(i, "position", {
          label: "model position"
        }), t.addInput(i, "rotation", {
          label: "model rotation"
        }));
      }
    });
  }
  initCar() {
    this.sceneCar.position.copy(T.street.position), this.sceneCar.rotation.copy(T.street.rotation), this.isSp || this.initCarA(), this.initCarB();
  }
  initCarA() {
    N("/gl/car_v7_out3.glb", {
      onLoad: (t, e) => {
        const s = e;
        s.name = "glTF", s.scale.setScalar(T.carA.scale);
        const i = new P(new E(2, 5), new b({
          vertexShader: C,
          fragmentShader: Pt,
          transparent: !0,
          depthTest: !1
        }));
        i.rotateX(Math.PI * -.5);
        const n = new G();
        n.add(s, i), T.carA.individual.forEach((l, u) => {
          const d = n.clone();
          this.cars[3] = d, d.position.copy(l.position), d.rotation.copy(l.rotation);
        });
      }
    });
  }
  initCarB() {
    let t;
    r.enablePane && (t = this.folder.addFolder({
      title: "car B",
      expanded: !1
    }));
    const e = (s, i, n, l, u = !1) => {
      const d = i;
      d.name = "glTF";
      const {
        animations: a
      } = s;
      r.enablePane && n === 0 && t.addInput(T.carB, "scale").on("change", () => {
        this.cars.forEach(B => {
          B.scale.setScalar(T.carB.scale / d.scale.x);
        });
      });
      const m = new P(new E(1.8, 4.3), new b({
        vertexShader: C,
        fragmentShader: Pt,
        transparent: !0,
        depthTest: !1
      }));
      m.rotateX(Math.PI * -.5);
      const g = new G();
      u && g.scale.setScalar(T.carB.scale), g.add(m, d);
      const I = T.carB.individual[n],
        M = g.clone();
      if (this.cars[n] = M, M.position.copy(I.position), M.rotation.copy(I.rotation), n === 0 || n === 1) {
        if (!this.isSp) {
          const B = new bt(M);
          B.timeScale = 1 + .5 * n, this.carMixers.push(B), a.forEach(k => {
            k.name === "bodyAction" && B.clipAction(k).play();
          });
        }
        if (n === 1) {
          const B = new bt(M);
          this.carRunMixer = B, a.forEach(k => {
            B.clipAction(k).play();
          });
        }
      }
      let z;
      r.enablePane && (z = t.addFolder({
        title: `${l}`
      }), z.addInput(M, "visible"), z.addInput(M, "position"), z.addInput(M, "rotation"));
    };
    N(this.option.isNight ? "/gl/night/optimize/car_B_v3_yellow.glb" : "/gl/optimize/car_B_v3_yellow.glb", {
      onLoad: (s, i) => {
        e(s, i, 0, "待ち先頭(yellow)", !0), this.isSp || e(s, i, 2, "駐車右(yellow)");
      }
    }), this.isSp || N(this.option.isNight ? "/gl/night/optimize/car_B_v3_gray.glb" : "/gl/optimize/car_B_v3_gray.glb", {
      onLoad: (s, i) => {
        e(s, i, 1, "待ち2台目(gray)", !0);
      }
    });
  }
  moreCars() {
    let s = 0,
      i = 0,
      n = 0;
    this.cars[1] && (x.to(this.cars[1].position, {
      x: T.carB.individual[1].positionMore.x,
      duration: 6,
      ease: "expo.out",
      onUpdate: () => {
        s = this.cars[1].position.x, n = s - i, this.carRunMixer.update(n * -.2), i = s;
      }
    }), gsap.delayedCall(6 * .4, () => {
      this.showIcon(this.icons[2]);
    }));
  }
  initIcon() {
    this.initIconMesh("stress", de || ue ? "/assets/video/top/battery_slow.mp4" : ["/assets/video/top/battery_slow.mov", "/assets/video/top/battery_slow.webm"], null, "充電中"), this.initIconMesh("charging", ee, null, "残りわずか"), this.initIconMesh("charging2", ee, null, "残りわずか2台目"), this.on("showServiceIcon", () => {
      this.showIcon(this.icons[0]), this.showIcon(this.icons[1]), gsap.delayedCall(1, () => {
        this.moreCars();
      });
    }), this.on("hideServiceIcon", () => {
      this.icons.forEach(({
        pivot: e
      }, s) => {
        e.visible = !1;
      });
    });
  }
  initIconMesh(t, e, s, i) {
    const n = T.icon[t];
    let l, u, d, a;
    Array.isArray(e) || typeof e == "string" && (e.endsWith(".webm") || e.endsWith(".mov") || e.endsWith(".mp4")) ? (u = new ct(e, {
      preload: !0
    }), u.load(), l = new Xt(u.el), d = 100, a = 200) : (l = this.textures.Icon = S(e, {}), d = e.width, a = e.height);
    const m = D({
      uTexture: l,
      uProgress: 0
    });
    this.uniformsIcon[t] = F(m);
    const g = this.meshIcon[t] = new P(new E(1, 1), new b({
      uniforms: m,
      vertexShader: C,
      fragmentShader: u && (de || ue) ? ji : $i,
      transparent: !0,
      side: re
    }));
    g.position.set(0, T.icon.pivot, 0);
    const I = new G();
    I.add(g), I.visible = !1, I.position.copy(n.position), I.rotation.copy(n.rotation), I.scale.set(d * n.scale, a * n.scale, 1), this.sceneText.add(I), I.name = t, this.icons.push({
      pivot: I,
      video: u,
      param: n
    });
  }
  showIcon({
    pivot: t,
    video: e,
    param: s
  }) {
    if (t.visible) return;
    t.visible = !0;
    const {
        name: i
      } = t,
      n = i === "stress",
      l = 2,
      u = 0,
      d = n ? .5 : 0;
    x.timeline({
      delay: d
    }, `Service-icon-${i}`).add([gsap.from(t.position, {
      y: "-=0.5",
      duration: l,
      ease: "elastic.out"
    }), gsap.from(t.rotation, {
      y: `${n ? "+" : "-"}=${Math.PI}`,
      duration: l,
      ease: "quad.out"
    }), gsap.fromTo(this.uniformsIcon[i].uProgress, {
      value: 0
    }, {
      value: 1,
      duration: l,
      ease: "expo.out"
    })]).call(() => {
      e && e.play();
    }).add(s.isAnimation ? [gsap.timeline({
      repeat: -1,
      repeatDelay: u
    }).to(t.position, {
      y: "+=0.1",
      duration: l * .5,
      ease: "sine.inOut"
    }).to(t.position, {
      y: "-=0.1",
      duration: l * .5,
      ease: "sine.inOut"
    })] : [], "+=1");
  }
  initInsideCar() {
    const t = this.textures.InsideCar = S(W, {}),
      e = D({
        uTexture: t,
        noiseMin: .5,
        noiseMax: .75
      }),
      s = this.meshInsideCar = new P(new E(1, 1), new b({
        uniforms: e,
        vertexShader: C,
        fragmentShader: ze,
        transparent: !0
      }));
    this.scene2D.add(s);
  }
  initTitle() {
    const t = this.textures.Title = S(rt, {}),
      e = D({
        uTexture: t,
        uProgress: 0
      });
    this.uniformsTitle = F(e);
    const s = this.meshTitle = new P(new E(1, 1), new b({
      uniforms: e,
      vertexShader: C,
      fragmentShader: Be,
      transparent: !0
    }));
    s.position.copy(T.title.position), this.scene2D.add(s), this.on("showServiceTitle", () => {
      s.visible = !0;
    }), this.on("hideServiceTitle", () => {
      s.visible = !1;
    });
  }
  initPostprocessing() {
    const {
        width: t,
        height: e,
        pixelRatio: s
      } = this.option,
      i = le({
        width: t,
        height: e,
        pixelRatio: s,
        camera: this.camera,
        folder: this.folder,
        effectController: Is,
        isNight: this.option.isNight
      });
    this.postprocessing = i;
  }
  initOrbitControls() {
    se(() => import("./OrbitControls.105ec41e.js"), ["_astro/OrbitControls.105ec41e.js", "_astro/constants.e6c90e33.js", "_astro/PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js"]).then(({
      OrbitControls: t
    }) => {
      const e = this.controls = new t(this.camera, this.option.renderer.domElement);
      e.addEventListener("change", () => {
        this.camera.far = T.camera.far + e.getDistance(), this.camera.updateProjectionMatrix(), this.setLookAt();
      }), e.maxDistance = 5e4, e.update(), this.setLookAt();
    });
  }
  makeTransitionIn(t) {
    const e = K["quart.out"](t);
    this.camera.position.set(...H(T.camera.positionTransitionIn, T.camera.position, e)), this.lookAt.set(...H(T.camera.lookAtTransitionIn, T.camera.lookAt, e)), this.camera.fov = w(T.camera.fovTransitionIn, T.camera.fov, e), this.setLookAt(), this.camera.updateProjectionMatrix();
  }
  makeTransitionOut(t) {
    const e = K["quint.inOut"](t * .85) / .85;
    this.camera.position.set(...H(T.camera.position, T.camera.positionTransitionOut, e)), this.lookAt.set(...H(T.camera.lookAt, T.camera.lookAtTransitionOut, e)), this.camera.fov = w(T.camera.fov, T.camera.fovTransitionOut, e), this.setLookAt(), this.camera.updateProjectionMatrix();
  }
  resize(t, e, s) {
    var _this$meshInsideCar, _this$meshInsideCar2;
    this.camera.aspect = t / e, this.camera.updateProjectionMatrix(), this.camera2D.resize(t, e), this.postprocessing.resize(t, e, s);
    const i = (this.isSp ? 1e3 : W.width) * r.variableSizeRate,
      n = i / W.width * W.height;
    (_this$meshInsideCar = this.meshInsideCar) !== null && _this$meshInsideCar !== void 0 && _this$meshInsideCar.position.set((t - i) * .47, -(e - n) / 2, 0), (_this$meshInsideCar2 = this.meshInsideCar) !== null && _this$meshInsideCar2 !== void 0 && _this$meshInsideCar2.scale.set(i, n, 1), this.meshTitle.position.copy(T.title.position), this.meshTitle.position.multiplyScalar(r.variableSizeRate);
    const l = (this.isSp ? 574.3 * .5 : rt.width) * r.variableSizeRate,
      u = l / rt.width * rt.height;
    this.meshTitle.scale.set(l, u, 1);
  }
  scroll(t, e, s) {
    if (t >= ge) {
      if (this.isRunText) {
        this.isRunText = !1;
        const i = 1;
        r.components.topService.scrollText(i * Ft), this.lookAt.setX(w(T.camera.lookAt.x, T.camera.lookAtEnd.x, i)), this.setLookAt(), x.resetScrub(this.uniformsTitle.uProgress, {
          value: 0
        });
      }
      !this.isTransitionedNext && r.nextScene === "Service" && r.scrollDirection === 1 && (this.isTransitionedNext = !0, c.emit("top:startTransition:serviceOpposite"));
    } else if (zt < t && t < ge) {
      this.isRunText || (this.isRunText = !0, r.components.topService.showContent(), c.emit("showServiceIcon"), r.scrollDirection === -1 && (this.isTransitionedNext = !1));
      const i = (t - zt) / gi;
      r.components.topService.fade(at(i, .3, .5, 0, 1)), r.components.topService.scrollText(i * Ft), this.lookAt.setX(w(T.camera.lookAt.x, T.camera.lookAtEnd.x, i)), this.setLookAt();
      const n = Math.min(i * 3, 1);
      x.scrub(this.uniformsTitle.uProgress, {
        value: 1 - n
      });
    } else if (t <= zt && this.isRunText) {
      this.isRunText = !1;
      const i = 0;
      r.components.topService.scrollText(i * Ft), this.lookAt.setX(w(T.camera.lookAt.x, T.camera.lookAtEnd.x, i)), this.setLookAt(), x.resetScrub(this.uniformsTitle.uProgress, {
        value: 1
      });
    }
    if (t >= me) {
      if (this.isRunTitle || s) {
        this.isRunTitle = !1;
        const i = 1;
        x.resetScrub(this.uniformsTitle.uProgress, {
          value: i
        });
      }
    } else if (Ut < t && t < me) {
      this.isRunTitle || (this.isRunTitle = !0);
      const i = (t - Ut) / mi;
      x.scrub(this.uniformsTitle.uProgress, {
        value: i
      });
    } else if (t <= Ut && this.isRunTitle) {
      this.isRunTitle = !1;
      const i = 0;
      x.resetScrub(this.uniformsTitle.uProgress, {
        value: i
      }), c.emit("showServiceTitle");
    }
    t >= kt ? this.isRunTransition && (this.isRunTransition = !1, c.emit("changeHeaderLocationCurrentIndex", te.indexOf("Service"))) : qt < t && t < kt ? this.isRunTransition || (this.isRunTransition = !0, this.isTransitionedNext = !1, r.scrollDirection === -1 ? (c.emit("top:startTransition:service", !0), c.emit("changeHeaderLocationCurrentIndex", te.indexOf("Intro"))) : c.emit("showServiceTitle")) : t <= qt && this.isRunTransition && (this.isRunTransition = !1, c.emit("changeScene", "IntroCharging", {
      isBack: !0
    }));
  }
  tick(t, e, s) {
    const i = e * .001;
    this.carMixers.forEach(n => {
      n.update(i);
    });
  }
  render(t = null) {
    this.option.renderer.setRenderTarget(this.postprocessing.rtTextureColor), this.option.renderer.clear(), this.option.renderer.render(this.sceneSky, this.camera), this.option.renderer.render(this.scene, this.camera), this.option.renderer.clearDepth(), this.option.renderer.render(this.sceneCar, this.camera), this.sceneHasNotLine.overrideMaterial = this.postprocessing.materialDepth, this.sceneCar.overrideMaterial = this.postprocessing.materialDepth, this.option.renderer.setRenderTarget(this.postprocessing.rtTextureDepth), this.option.renderer.clear(), this.option.renderer.render(this.sceneHasNotLine, this.camera), this.option.renderer.clearDepth(), this.option.renderer.render(this.sceneCar, this.camera), this.sceneHasNotLine.overrideMaterial = null, this.sceneCar.overrideMaterial = null, this.option.renderer.setRenderTarget(t), this.option.renderer.render(this.postprocessing.scene, this.postprocessing.camera), this.option.renderer.clearDepth(), this.option.renderer.render(this.sceneText, this.camera), this.option.renderer.clearDepth(), this.option.renderer.render(this.scene2D, this.camera2D);
  }
  start(t = !1) {
    gsap.delayedCall(t ? 0 : .1, () => {
      this.isDisposed ? this.addDisposeTarget(this.street, this.streetModel) : this.street.add(this.streetModel), this.isDisposed ? this.addDisposeTarget(this.streetHasNotLine, this.streetModelHasNotLine) : this.streetHasNotLine.add(this.streetModelHasNotLine);
    }), gsap.delayedCall(t ? 0 : .2, () => {
      this.cars.forEach((e, s) => {
        e && gsap.delayedCall((t ? 0 : .1) * s, () => {
          const i = s === 2 ? this.street : this.sceneCar;
          this.isDisposed ? this.addDisposeTarget(i, e) : i.add(e);
        });
      });
    });
  }
}
var Rs = `precision highp float;

uniform sampler2D uTexture01;
uniform sampler2D uTexture02;
uniform sampler2D uTexture03;
uniform float uTime;
uniform float uOffset;
uniform float uOpacity;
uniform vec3 uColor;

varying vec2 vUv;

const float PI = 3.1415926;
const float PI2 = 6.2831853;
vec2 rotate(vec2 uv, float rad, vec2 offset) {
uv += offset;
uv -= 0.5;
uv *= mat2(cos(rad),sin(rad),-sin(rad),cos(rad));
uv += 0.5;
uv -= offset;
return uv;
}

void main() {
vec2 uv = vUv;
uv = rotate(uv, PI * -0.5, vec2(0.));


vec4 color01 = texture2D(uTexture01, uv);
vec4 color02 = texture2D(uTexture02, uv);
vec4 color03 = texture2D(uTexture03, uv);

float condition = floor(mod(uTime, 3.));
gl_FragColor = condition >= 2. ? mix(color03, color01, fract(uTime)) : condition >= 1. ? mix(color02, color03, fract(uTime)) : mix(color01, color02, fract(uTime));
gl_FragColor.rgb = uColor;

gl_FragColor.a *= uOpacity;
}`,
  ks = `precision highp float;

varying vec2 vUv;

uniform sampler2D uTexture;
uniform vec2 uResolutionObject;
uniform vec2 uResolutionImage;
uniform float uTime;
uniform float uSpread;
uniform float uScale;
uniform float uDarkness;
uniform float uOpacity;
uniform float uFade;
uniform vec3 uBackgroundColor;
uniform float uNightLightThreshold;

const vec3 THEME_COLOR = vec3(30., 206., 115.) / 255.;
const vec3 NIGHT_MODE_COLOR_1 = THEME_COLOR;
const vec3 NIGHT_MODE_COLOR_2 = vec3(207., 181., 31.) / 255.;
const vec3 NIGHT_MODE_COLOR_3 = vec3(49., 31., 207.) / 255.;
const vec3 NIGHT_MODE_COLOR_4 = vec3(207., 49., 31.) / 255.;

vec2 fitCover(vec2 coord, vec2 inputResolution, vec2 outputResolution) {
vec2 ratio = vec2(
  min((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),
  min((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)
);
return coord * ratio + (1. - ratio) * 0.5;
}
vec2 getZoomedUv(vec2 uv, float zoom, vec2 origin) {
origin.x = -origin.x;
uv += origin;
float scale = 1. / zoom;
return uv * scale - 0.5 * (scale - 1.);
}
vec2 repeatUv(vec2 uv) {
return fract(uv);
}

#pragma glslify: export(repeatUv)
vec4 texture2DInnerRange(sampler2D t, vec2 uv) {
return (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) ? vec4(0.) : texture2D(t, uv);
}

#pragma glslify: export(texture2DInnerRange)
float mapClamp(float num, float fromMin, float fromMax, float toMin, float toMax) {
return
  num <= fromMin ? toMin
  : num >= fromMax ? toMax
  : toMin + (num - fromMin) * (toMax - toMin) / (fromMax - fromMin);
}

void main() {
vec2 uv = vUv;

uv -= 0.5;
uv.x *= 1. + (0.5 - length(uv - vec2(0., 0.5))) * uSpread;
uv.y += uTime;
uv += 0.5;

uv = fitCover(uv, uResolutionImage, uResolutionObject);
uv = getZoomedUv(uv, uScale, vec2(0.));
uv = repeatUv(uv);

vec4 color = texture2DInnerRange(uTexture, uv);
float opacity = mix(1., uOpacity, smoothstep(0., uNightLightThreshold, distance(color.rgb, NIGHT_MODE_COLOR_4)));
color.rgb = mix(uBackgroundColor, color.rgb, opacity * mapClamp(vUv.y, 0., uFade, 0., 1.));
color.rgb *= uDarkness;

gl_FragColor = color;

}`;
const Nt = Math.PI * .1549,
  bs = Nt * .4,
  h = {
    backgroundColor: new A(.47, .43, .37),
    backgroundColorNight: new A(.46, .42, .36),
    camera: {
      fovTransitionIn: 42,
      fov: 52,
      fovTransitionOut: 22,
      positionTransitionIn: new p(-1.8, 1.7, -4),
      position: new p(f.isSp ? -1.68 : -1.8, 1.7, 0),
      positionTransitionOut: new p(f.isSp ? -1.05 : -1, 3.3, -6),
      far: 900,
      lookAtTransitionIn: new p(-180, 0, -400),
      lookAt: new p(f.isSp ? -47 : -80, 0, -400),
      lookAtTransitionOut: new p(f.isSp ? -40 : -60, 1, -400)
    },
    directionalLight: {
      color: new A(1, 1, 1),
      intensity: 2,
      position: new p(.35, 100, 10)
    },
    ambientLight: {
      color: new A(1, 1, 1),
      intensity: 2
    },
    street: {
      position: new p(0, 3e3, 0),
      model: {
        position: new p(0, 0, 0)
      }
    },
    road: {
      speed: 10,
      left: {
        position: new p(-3.6, -.4, -9),
        scale: new p(5.5, 71, 1),
        color: new A(0, 0, 0),
        opacity: .55
      },
      right: {
        position: new p(2.1, -.45, -7.8),
        scale: new p(6.8, 58, 1),
        color: new A(.67, .39, .41),
        opacity: .17
      }
    },
    car: {
      individual: [{
        position: new p(-2.3, -10.4 + 11, -13),
        start: 0,
        isOtherSide: !1
      }, {
        position: new p(2.3, -10.2 + 11, 0),
        start: 0,
        isOtherSide: !0
      }, {
        position: new p(2.3, -10.2 + 11, 0),
        start: Math.PI * .2,
        isOtherSide: !0
      }],
      scale: .9,
      speed: .01,
      headlight: {
        position: new p(.2, 0, 4.5 + 3),
        scale: new p(1.5, 3, 1),
        opacity: .4
      },
      taillight: {
        position: new p(0, 0, -2.8),
        scale: new p(1, 1, 1),
        opacity: .35
      }
    },
    streetBackground: {
      position: new p(-.6, 240, -680),
      positionNight: new p(.22, 190, -680),
      rotation: new L(0, f.isSp ? .12 : .2, 0),
      size: new p(2e3, 280, 1),
      scale: .7,
      spread: .57,
      darkness: 1,
      darknessNight: .8,
      opacity: .29,
      opacityNight: .22,
      fade: .08,
      fadeNight: .58,
      speed: .033,
      nightLightThreshold: 1
    },
    sky: {
      position: new p(0, 150, -460),
      rotateX: .44,
      scale: new p(1300, 410, 1),
      offset: new R(0, 0),
      spreadBack: .002,
      spreadFront: .22,
      spreadCurve: .001,
      fadeIn: .01,
      speed: 1,
      opacity: 1,
      opacityNight: .5,
      clouds: [{
        speed: .01,
        scale: .5,
        offset: .48
      }, {
        speed: .05,
        scale: .15,
        offset: 0
      }]
    },
    bird: [{
      position: new p(-1.1, 3.3, -2),
      positionEnd: new p(-1.1, 3.3, -8.5),
      rotation: new L(0, Math.PI + .06, 0),
      startScale: .6,
      scale: .6,
      speed: 7,
      speedFlap: 1.5,
      moveDistance: 1,
      rotationDistance: .1,
      slideDistance: .7
    }],
    spark: {
      speed: .7,
      interval: 5,
      positionY: -1.63,
      scale: new R(.05, .3),
      rotation: .5,
      darkness: 1,
      bloom: .6,
      opacity: 1
    },
    title: {
      position: new p(0, 38, 0)
    },
    speed: .01,
    stop: !1
  },
  Cs = {
    mNear: 11,
    mFar: h.camera.far,
    maxblur: 5,
    blurFocus: 2.1,
    blurExponent: 1.8,
    blurCenter: new R(.06, -.02),
    bokehNear: 0,
    bokehFarBack: 1,
    bokehFarFront: .03,
    fogNear: .25,
    fogFar: .82,
    noiseProgress: 1,
    noiseDarkness: .78,
    monochromeMax: .22,
    uRay: [{
      center: new R(.5 - 1.6, f.isSp ? 1.5 : 1.3),
      rotation: .051 + .05,
      speed: .1 * 2,
      offset: 5,
      width: .059,
      edge: .01,
      rayDistance: f.isSp ? 5.5 : 4.5,
      opacity: .8
    }, {
      center: new R(.5 - 1.6, f.isSp ? 1.5 : 1.3),
      rotation: .057 + .05,
      speed: .5 * 2,
      offset: .023,
      width: .037,
      edge: .042,
      rayDistance: f.isSp ? 6.83 : 5,
      opacity: .4
    }, {
      center: new R(.1, f.isSp ? 1.5 : 1.3),
      rotation: .108,
      speed: .2 * 2,
      offset: 0,
      width: .02,
      edge: .01,
      rayDistance: 3.6,
      opacity: .67
    }]
  };
class Ps extends _t {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "scene", new U());
    _defineProperty(this, "sceneCar", new U());
    _defineProperty(this, "sceneSky", new U());
    _defineProperty(this, "scene2D", new U());
    _defineProperty(this, "camera", void 0);
    _defineProperty(this, "camera2D", void 0);
    _defineProperty(this, "lookAt", h.camera.lookAt.clone());
    _defineProperty(this, "cameraPosition", h.camera.position.clone());
    _defineProperty(this, "folder", void 0);
    _defineProperty(this, "street", new G());
    _defineProperty(this, "cars", []);
    _defineProperty(this, "postprocessing", {
      composer: ne,
      bokeh: ae
    });
    _defineProperty(this, "carMixers", []);
    _defineProperty(this, "uniformsRoads", []);
    _defineProperty(this, "birds", []);
    _defineProperty(this, "sparks", []);
    _defineProperty(this, "uniformsSparks", []);
    _defineProperty(this, "isRunTransition", !1);
    _defineProperty(this, "isRunTransitionNext", !1);
    _defineProperty(this, "isRunTitle", !1);
    _defineProperty(this, "isRunText", !1);
    _defineProperty(this, "isRunBirdsEyeTransition", !1);
    _defineProperty(this, "birdProgress", 0);
    _defineProperty(this, "isTransitionedNext", !1);
    _defineProperty(this, "isStartAnimation", !1);
  }
  onInit() {
    r.enablePane && (this.folder = r.pane.addFolder({
      title: "About",
      expanded: !1
    }), this.folder.addInput(h, "speed", {
      min: 0
    })), this.option.isNight && (this.textures.Spark = S(Fe, {})), this.textures.headlight = S(Et, {}), this.textures.taillight = S(Lt, {}), this.initScene(), this.initCamera(), this.initLight(), this.initSky(), this.initStreet(), this.initRoadEffect(), this.initCar(), this.initBird(), this.initInsideCar(), this.initTitle(), this.initPostprocessing();
  }
  initScene() {
    this.sceneSky.background = h[this.option.isNight ? "backgroundColorNight" : "backgroundColor"], r.enablePane && this.folder.addFolder({
      title: "scene"
    }).addInput(h, "backgroundColor", {
      label: "背景色",
      color: {
        type: "float"
      },
      picker: "inline"
    }).on("change", ({
      value: e
    }) => {
      this.uniformsStreetBackground.uBackgroundColor.value = e;
    });
  }
  initCamera() {
    if (this.camera = new Ot(h.camera.fov, this.option.camera.aspect, this.option.camera.near, h.camera.far), this.camera.position.copy(this.cameraPosition), this.setLookAt(), this.camera2D = new it(), r.enablePane) {
      const t = this.folder.addFolder({
        title: "camera",
        expanded: !1
      });
      t.addInput(this, "cameraPosition", {
        label: "position"
      }).on("change", () => {
        this.camera.position.copy(this.cameraPosition), this.setLookAt();
      }), t.addInput(this.camera, "fov", {
        min: 5,
        max: 179
      }).on("change", () => {
        this.camera.updateProjectionMatrix();
      }), t.addInput(this.camera, "far", {
        min: 0
      }).on("change", () => {
        this.camera.updateProjectionMatrix();
      }), t.addInput(this, "lookAt").on("change", () => {
        this.setLookAt();
      });
    }
  }
  setLookAt() {
    const t = this.lookAt.clone().add(new p(0, this.cameraPosition.y));
    this.camera.lookAt(t);
  }
  initLight() {
    {
      const t = new At(h.directionalLight.color, h.directionalLight.intensity);
      t.position.copy(h.directionalLight.position), this.scene.add(t), this.sceneCar.add(t.clone());
    }
    {
      const t = new oe(16777215, 16777215, 1);
      t.position.set(0, 50, 0), this.scene.add(t), this.sceneCar.add(t.clone());
    }
  }
  initSky() {
    this.initStreetBackground(), this.initCloud();
  }
  initStreetBackground() {
    const t = this.option.isNight ? this.isSp ? Ze : Ye : this.isSp ? We : he,
      e = this.textures.StreetBackground = S(t, {}),
      s = D({
        uTexture: e,
        uResolutionObject: new R(h.streetBackground.size.x, h.streetBackground.size.y),
        uResolutionImage: new R(t.width, t.height),
        uTime: 0,
        uSpread: h.streetBackground.spread,
        uScale: h.streetBackground.scale,
        uDarkness: h.streetBackground[this.option.isNight ? "darknessNight" : "darkness"],
        uOpacity: h.streetBackground[this.option.isNight ? "opacityNight" : "opacity"],
        uFade: h.streetBackground[this.option.isNight ? "fadeNight" : "fade"],
        uBackgroundColor: h.backgroundColor,
        uNightLightThreshold: this.option.isNight ? h.streetBackground.nightLightThreshold : 0
      });
    this.uniformsStreetBackground = F(s);
    const i = new P(new E(1, 1), new b({
      uniforms: s,
      vertexShader: C,
      fragmentShader: ks
    }));
    if (i.position.copy(h.streetBackground[this.option.isNight ? "positionNight" : "position"]), i.rotation.copy(h.streetBackground.rotation), i.scale.copy(h.streetBackground.size), this.sceneSky.add(i), r.enablePane) {
      const n = this.folder.addFolder({
        title: "街背景",
        expanded: !1
      });
      n.addInput(i, "visible"), n.addInput(i, "position"), n.addInput(i, "rotation"), n.addInput(i, "scale", {
        label: "全体の広さ",
        x: {
          min: 0
        },
        y: {
          min: 0
        },
        z: {
          min: 0
        }
      }).on("change", () => {
        this.uniformsStreetBackground.uResolutionObject.value.set(i.scale.x, i.scale.y);
      }), n.addInput(this.uniformsStreetBackground.uScale, "value", {
        label: "scale",
        min: 0
      }), n.addInput(this.uniformsStreetBackground.uSpread, "value", {
        label: "歪み",
        min: 0,
        max: 2
      }), n.addInput(this.uniformsStreetBackground.uDarkness, "value", {
        label: "darkness"
      }), n.addInput(this.uniformsStreetBackground.uOpacity, "value", {
        label: "opacity",
        min: 0,
        max: 1
      }), n.addInput(this.uniformsStreetBackground.uFade, "value", {
        label: "fade",
        min: 0,
        max: 1
      }), n.addInput(h.streetBackground, "speed", {
        min: 0,
        max: .2,
        step: .001
      }), n.addInput(this.uniformsStreetBackground.uNightLightThreshold, "value", {
        label: "光しきい値",
        min: 0,
        max: 1
      });
    }
  }
  initCloud() {
    const t = S(yt, {}),
      e = S(St, {}),
      s = D({
        uTexture01: t,
        uTexture02: e,
        uResolutionObject: new R(h.sky.scale.x, h.sky.scale.y),
        uResolutionImage01: new R(yt.width, yt.height),
        uResolutionImage02: new R(St.width, St.height),
        uTime: 0,
        uOffset: h.sky.offset,
        uSpreadBack: h.sky.spreadBack,
        uSpreadFront: h.sky.spreadFront,
        uSpreadCurve: h.sky.spreadCurve,
        uFadeIn: h.sky.fadeIn,
        uCloud: h.sky.clouds,
        uOpacity: h.sky[this.option.isNight ? "opacityNight" : "opacity"]
      });
    this.uniformsSky = F(s);
    const i = new P(new E(1, 1), new b({
      uniforms: s,
      vertexShader: C,
      fragmentShader: cs,
      transparent: !0
    }));
    i.position.copy(h.sky.position), i.rotation.set(Math.PI * h.sky.rotateX, 0, 0), i.scale.set(h.sky.scale.x, h.sky.scale.y, 1), this.sceneSky.add(i);
  }
  initStreet() {
    let t;
    r.enablePane && (t = this.folder.addFolder({
      title: "街",
      expanded: !1
    })), this.street = new G(), this.street.position.copy(h.street.position), this.scene.add(this.street);
    let e;
    this.option.isNight && (e = this.textures.Spark), N(this.option.isNight ? "/gl/night/optimize/colony_v10_line.glb" : "/gl/optimize/colony_v10.glb", {
      onLoad: (s, i) => {
        const n = i;
        if (n.name = "glTF", n.traverse(u => {
          if (u.isMesh) {
            const d = u.name.startsWith("Cylinder");
            if (this.option.isNight && (u.name.startsWith("lamp_") || d) && (d && (u.material.roughness = 1, u.material.metalness = 1), u.material.emissive.copy($)), this.option.isNight && !this.isLowerPage && u.name.startsWith("spark_")) {
              const a = D({
                  uTexture: e,
                  uSpeed: h.spark.speed,
                  uInterval: h.spark.interval,
                  uPositionY: h.spark.positionY,
                  uScale: h.spark.scale,
                  uRotation: h.spark.rotation,
                  uDarkness: h.spark.darkness,
                  uBloom: h.spark.bloom,
                  uOpacity: h.spark.opacity,
                  uOffset: Math.random(),
                  uTime: 0
                }),
                m = F(a);
              this.uniformsSparks.push(m);
              const g = new b({
                uniforms: a,
                vertexShader: C,
                fragmentShader: He,
                side: re,
                transparent: !0,
                depthTest: !1,
                depthWrite: !1
              });
              u.material = g, this.sparks.push(u);
            }
          }
        }), r.enablePane && this.option.isNight) {
          const u = t.addFolder({
            title: "光ライン"
          });
          u.addInput(h.spark, "speed", {
            min: 0,
            max: 2
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uSpeed.value = d;
            });
          }), u.addInput(h.spark, "interval", {
            min: 0,
            max: 10
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uInterval.value = d;
            });
          }), u.addInput(h.spark, "positionY", {
            min: -5,
            max: 5
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uPositionY.value = d;
            });
          }), u.addInput(h.spark, "scale", {
            x: {
              min: 0,
              max: 2
            },
            y: {
              min: 0,
              max: 2
            }
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uScale.value = d;
            });
          }), u.addInput(h.spark, "rotation", {
            min: 0,
            max: 2
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uRotation.value = d;
            });
          }), u.addInput(h.spark, "darkness", {
            min: 0,
            max: 1
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uDarkness.value = d;
            });
          }), u.addInput(h.spark, "bloom", {
            min: 0,
            max: 2
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uBloom.value = d;
            });
          }), u.addInput(h.spark, "opacity", {
            min: 0,
            max: 1
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uOpacity.value = d;
            });
          });
        }
        n.position.copy(h.street.model.position), n.applyMatrix4(new O().makeRotationFromEuler(new L(0, 0, Math.PI * -.00316))), n.applyMatrix4(new O().makeTranslation(0, -h.street.position.y, 0)), n.applyMatrix4(new O().makeRotationFromEuler(new L(0, Math.PI * .5, Math.PI * -.012)));
        const l = n.clone();
        l.applyMatrix4(new O().makeRotationX(Nt)), this.streetModel = n, this.streetModel2 = l, r.enablePane && (t.addInput(this.street, "visible"), t.addInput(this.street.position, "y", {
          label: "全体位置",
          min: 0,
          max: 3e3,
          step: 10
        }).on("change", () => {
          n.position.copy(h.street.model.position), n.applyMatrix4(new O().makeTranslation(0, -this.street.position.y, 0)), l.position.copy(n.position), l.rotation.copy(n.rotation), l.matrix.copy(n.matrix), l.applyMatrix4(new O().makeRotationX(Nt));
        }), t.addInput(n.position, "x", {
          label: "横位置"
        }).on("change", ({
          value: u
        }) => {
          l.position.x = u;
        }));
      }
    });
  }
  initRoadEffect() {
    const t = S(je, {}),
      e = S($e, {}),
      s = S(Xe, {}),
      i = null;
    this.addRoadEffect({
      name: "left",
      texture01: t,
      texture02: e,
      texture03: s,
      parentFolder: i
    }), this.addRoadEffect({
      name: "right",
      texture01: t,
      texture02: e,
      texture03: s,
      parentFolder: i
    });
  }
  addRoadEffect({
    name: t,
    texture01: e,
    texture02: s,
    texture03: i,
    parentFolder: n
  }) {
    const l = D({
        uTexture01: e,
        uTexture02: s,
        uTexture03: i,
        uTime: 0,
        uOffset: t === "right" ? 1 : 0,
        uOpacity: h.road[t].opacity,
        uColor: h.road[t].color
      }),
      u = F(l),
      d = new P(new E(1072 * .001, 860 * .001), new b({
        uniforms: l,
        vertexShader: C,
        fragmentShader: Rs,
        transparent: !0
      }));
    this.uniformsRoads.push(u), d.position.copy(h.road[t].position), d.scale.copy(h.road[t].scale), d.rotateX(Math.PI * -.5), this.sceneCar.add(d);
  }
  initCar() {
    let t;
    r.enablePane && (t = this.folder.addFolder({
      title: "car",
      expanded: !1
    })), N("/gl/car_v7_out3.glb", {
      onLoad: (e, s) => {
        const i = s,
          {
            animations: n
          } = e;
        this.addCar(i, n, t);
      }
    }), this.isSp || N(this.option.isNight ? "/gl/night/optimize/car_B_v3_yellow.glb" : "/gl/optimize/car_B_v3_yellow.glb", {
      onLoad: (e, s) => {
        const i = s,
          {
            animations: n
          } = e;
        this.addCar(i, n, t, !0);
      }
    });
  }
  addCar(t, e, s, i = !1) {
    t.name = "glTF";
    const n = this.textures.headlight,
      l = this.textures.taillight;
    this.option.isNight && !i && t.traverse(a => {
      if (a.isMesh) switch (a.material = a.material.clone(), a.material.name) {
        case "lamp":
        case "emission":
          a.material.roughness = 1, a.material.metalness = 0, a.material.emissive.copy(new A(Math.pow($.r, 5.6), Math.pow($.g, 5.6), Math.pow($.b, 5.6)));
          break;
      }
    }), t.scale.setScalar(h.car.scale), r.enablePane && s.addInput(h.car, "scale").on("change", () => {
      this.cars.forEach(a => {
        a.scale.setScalar(h.car.scale / t.scale.x);
      });
    });
    const u = new P(new E(1.8, 4.3), new b({
      vertexShader: C,
      fragmentShader: Pt,
      transparent: !0
    }));
    u.rotateX(Math.PI * -.5);
    const d = new G();
    if (d.add(t, u), this.option.isNight) {
      {
        const a = D({
            uTexture: n,
            uOpacity: h.car.headlight.opacity
          }),
          m = new P(new E(4, 4), new b({
            uniforms: a,
            vertexShader: C,
            fragmentShader: Ue,
            transparent: !0
          }));
        if (m.name = "headlight", m.rotateX(Math.PI * -.5), m.position.copy(h.car.headlight.position), m.scale.copy(h.car.headlight.scale), d.add(m), r.enablePane) {
          const g = s.addFolder({
            title: "ヘッドライト"
          });
          g.addInput(m, "position", {
            x: {
              step: .1
            },
            y: {
              step: .1
            },
            z: {
              step: .1
            }
          }), g.addInput(m, "rotation"), g.addInput(m, "scale", {
            x: {
              step: .1
            },
            y: {
              step: .1
            },
            z: {
              step: .1
            }
          }), g.addInput(a.uOpacity, "value", {
            label: "opacity",
            min: 0,
            max: 1
          });
        }
      }
      if (!i) {
        const a = new P(new E(1.1, .03), new b({
          vertexShader: C,
          fragmentShader: ds,
          transparent: !0,
          depthTest: !1
        }));
        a.position.set(0, .93, -2.1), a.rotateX(Math.PI * 1), d.add(a);
      }
      {
        const a = D({
            uTexture: l,
            uOpacity: h.car.taillight.opacity
          }),
          m = new P(new E(2, 2), new b({
            uniforms: a,
            vertexShader: C,
            fragmentShader: Ge,
            transparent: !0
          }));
        if (m.rotateX(Math.PI * -.5), m.position.copy(h.car.taillight.position), m.scale.copy(h.car.taillight.scale), d.add(m), r.enablePane) {
          const g = s.addFolder({
            title: "テールランプ"
          });
          g.addInput(m, "position", {
            x: {
              step: .1
            },
            y: {
              step: .1
            },
            z: {
              step: .1
            }
          }), g.addInput(m, "rotation"), g.addInput(m, "scale", {
            x: {
              step: .1
            },
            y: {
              step: .1
            },
            z: {
              step: .1
            }
          }), g.addInput(a.uOpacity, "value", {
            label: "opacity",
            min: 0,
            max: 1
          });
        }
      }
    }
    h.car.individual.forEach((a, m) => {
      if (a.isOtherSide && !i || !a.isOtherSide && i) return;
      const g = d.clone();
      if (this.cars.push(g), g.position.copy(a.position), a.isOtherSide ? (g.applyMatrix4(new O().makeTranslation(0, -h.street.position.y, 0)), g.applyMatrix4(new O().makeRotationX(a.start)), g.children.forEach(I => {
        I.name === "headlight" && (I.material = I.material.clone(), I.material.depthTest = !1);
      })) : g.rotation.copy(new L(0, Math.PI, 0)), !this.isSp) {
        const I = new bt(g);
        this.carMixers.push(I), e.forEach(M => {
          I.clipAction(M).play();
        });
      }
      r.enablePane && s.addFolder({
        title: `${m + 1}`
      }).addInput(a, "position").on("change", () => {
        g.position.copy(a.position);
      });
    });
  }
  initBird() {
    let t;
    r.enablePane && (t = this.folder.addFolder({
      title: "鳥",
      expanded: !1
    })), N("/gl/optimize/bird_v3.glb", {
      onLoad: (e, s) => {
        const i = s,
          {
            animations: n
          } = e;
        i.name = "glTF", h.bird.forEach((l, u) => {
          const d = fi(i);
          d.scale.setScalar(l.scale);
          const a = new G();
          a.add(d), a.position.copy(l.position), a.rotation.copy(l.rotation), a.scale.setScalar(l.startScale);
          let m;
          if (this.isSp || (m = new bt(d), n.forEach(g => {
            m.clipAction(g).play();
          })), this.birds.push({
            model: d,
            group: a,
            mixer: m,
            param: l
          }), r.enablePane) {
            const g = t.addFolder({
              title: `${u + 1}`
            });
            g.addInput(l, "position").on("change", () => {
              a.position.copy(l.position);
            }), g.addInput(l, "rotation").on("change", () => {
              a.rotation.copy(l.rotation);
            }), g.addInput(l, "scale", {
              min: 0
            }).on("change", () => {
              d.scale.setScalar(l.scale);
            }), g.addInput(l, "speed", {
              min: 0
            }), g.addInput(l, "speedFlap", {
              min: 0
            }), g.addInput(l, "moveDistance", {
              min: 0
            }), g.addInput(l, "rotationDistance", {
              min: 0
            }), g.addInput(l, "slideDistance", {
              min: 0
            });
          }
        });
      },
      isSkeleton: !0
    });
  }
  initInsideCar() {
    const t = this.textures.InsideCar = S(W, {}),
      e = D({
        uTexture: t,
        noiseMin: .5,
        noiseMax: .75
      }),
      s = this.meshInsideCar = new P(new E(1, 1), new b({
        uniforms: e,
        vertexShader: C,
        fragmentShader: ze,
        transparent: !0
      }));
    this.scene2D.add(s);
  }
  initTitle() {
    const t = this.textures.Title = S(It, {}),
      e = D({
        uTexture: t,
        uProgress: 0
      });
    this.uniformsTitle = F(e);
    const s = this.meshTitle = new P(new E(1, 1), new b({
      uniforms: e,
      vertexShader: C,
      fragmentShader: Be,
      transparent: !0
    }));
    s.position.copy(h.title.position), this.scene2D.add(s), this.on("showAboutTitle", () => {
      s.visible = !0;
    }), this.on("hideAboutTitle", () => {
      s.visible = !1;
    });
  }
  initPostprocessing() {
    const {
        width: t,
        height: e,
        pixelRatio: s
      } = this.option,
      i = le({
        width: t,
        height: e,
        pixelRatio: s,
        camera: this.camera,
        folder: this.folder,
        effectController: Cs,
        isNight: this.option.isNight
      });
    this.postprocessing = i;
  }
  initOrbitControls() {
    se(() => import("./OrbitControls.105ec41e.js"), ["_astro/OrbitControls.105ec41e.js", "_astro/constants.e6c90e33.js", "_astro/PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js"]).then(({
      OrbitControls: t
    }) => {
      const e = this.controls = new t(this.camera, this.option.renderer.domElement);
      e.addEventListener("change", () => {
        this.camera.far = h.camera.far + e.getDistance(), this.camera.updateProjectionMatrix(), this.setLookAt();
      }), e.maxDistance = 5e4, e.update(), this.setLookAt();
    });
  }
  makeTransitionIn(t) {
    const e = K["quart.out"](t);
    this.camera.position.set(...H(h.camera.positionTransitionIn, h.camera.position, e)), this.lookAt.set(...H(h.camera.lookAtTransitionIn, h.camera.lookAt, e)), this.camera.fov = w(h.camera.fovTransitionIn, h.camera.fov, e), this.setLookAt(), this.camera.updateProjectionMatrix();
  }
  makeTransitionOut(t) {
    const e = K["quint.inOut"](t * .85) / .85;
    this.camera.position.set(...H(h.camera.position, h.camera.positionTransitionOut, e)), this.lookAt.set(...H(h.camera.lookAt, h.camera.lookAtTransitionOut, e)), this.camera.fov = w(h.camera.fov, h.camera.fovTransitionOut, e), this.setLookAt(), this.camera.updateProjectionMatrix();
  }
  showOnInit() {
    c.emit("showAboutTitle");
  }
  resize(t, e, s) {
    var _this$meshInsideCar3, _this$meshInsideCar4;
    this.camera.aspect = t / e, this.camera.updateProjectionMatrix(), this.camera2D.resize(t, e), this.postprocessing.resize(t, e, s);
    const i = (this.isSp ? 1e3 : W.width) * r.variableSizeRate,
      n = i / W.width * W.height;
    (_this$meshInsideCar3 = this.meshInsideCar) !== null && _this$meshInsideCar3 !== void 0 && _this$meshInsideCar3.position.set((t - i) * .47, -(e - n) / 2, 0), (_this$meshInsideCar4 = this.meshInsideCar) !== null && _this$meshInsideCar4 !== void 0 && _this$meshInsideCar4.scale.set(i, n, 1), this.meshTitle.position.copy(h.title.position), this.meshTitle.position.multiplyScalar(r.variableSizeRate), this.meshTitle.scale.set((this.isSp ? 425 * .5 : It.width) * r.variableSizeRate, (this.isSp ? 91 * .5 : It.height) * r.variableSizeRate, 1);
  }
  progressSpark(t) {
    const e = t;
    this.uniformsSparks.forEach(s => {
      s.uTime.value = -(.03 + e * 4);
    });
  }
  show() {
    this.emit("showAboutTitle");
  }
  scroll(t, e, s) {
    if (t >= dt ? (this.isRunTransitionNext && (this.isRunTransitionNext = !1), !this.isTransitionedNext && r.nextScene === "About" && r.scrollDirection === 1 && (this.isTransitionedNext = !0, c.emit("top:startTransition:aboutBirdsEye"))) : st < t && t < dt ? this.isRunTransitionNext || (this.isRunTransitionNext = !0, r.scrollDirection === -1 ? (this.isTransitionedNext = !1, c.emit("top:startTransition:aboutBirdsEye", !0)) : this.isTransitionedNext || (this.isTransitionedNext = !0, c.emit("top:startTransition:aboutBirdsEye"))) : t <= st && this.isRunTransitionNext && (this.isRunTransitionNext = !1, this.isTransitionedNext = !1, c.emit("top:startTransition:aboutBirdsEye", !0), c.emit("changeScene", "About", {
      isBack: !0
    })), t >= fe) {
      if (this.isRunBirdsEyeTransition) {
        this.isRunBirdsEyeTransition = !1;
        const i = 1;
        this.birds.forEach(n => {
          n.group.position.x = w(n.param.position.x, n.param.positionEnd.x, i), n.group.position.y = w(n.param.position.y, n.param.positionEnd.y, i), n.group.position.z = w(n.param.position.z, n.param.positionEnd.z, i);
        });
      }
    } else if (ve < t && t < fe) this.isRunBirdsEyeTransition || (this.isRunBirdsEyeTransition = !0, x.fromTo(this, {
      birdProgress: 0
    }, {
      birdProgress: 1,
      duration: 4,
      ease: "quart.out",
      onUpdate: () => {
        this.birds.forEach(i => {
          i.group.scale.setScalar(w(i.param.startScale, 1, this.birdProgress)), i.group.position.x = w(i.param.position.x, i.param.positionEnd.x, this.birdProgress), i.group.position.y = w(i.param.position.y, i.param.positionEnd.y, this.birdProgress), i.group.position.z = w(i.param.position.z, i.param.positionEnd.z, this.birdProgress);
        });
      }
    }));else if (t <= ve && this.isRunBirdsEyeTransition) {
      this.isRunBirdsEyeTransition = !1;
      const i = 0;
      this.birds.forEach(n => {
        n.group.position.x = w(n.param.position.x, n.param.positionEnd.x, i), n.group.position.y = w(n.param.position.y, n.param.positionEnd.y, i), n.group.position.z = w(n.param.position.z, n.param.positionEnd.z, i);
      }), r.scrollDirection === -1 && c.emit("top:startTransition:about", !0);
    }
    if (t >= Te) {
      if (this.isRunText) {
        this.isRunText = !1;
        const i = 1;
        r.components.topAbout.fadeText1(0), r.components.topAbout.scrollText1(i), r.scrollDirection === -1 && (r.components.topAbout.showContent1(), r.components.topAbout.fadeInText1()), x.resetScrub(this.uniformsTitle.uProgress, {
          value: 1 - i
        });
      }
    } else if (Gt < t && t < Te) {
      this.isRunText || (this.isRunText = !0, r.components.topAbout.showContent1());
      const i = (t - Gt) / vi;
      r.components.topAbout.fadeText1(at(i, .2, .3, 0, 1) * at(i, .9, 1, 1, 0)), r.components.topAbout.scrollText1(at(i, .2, 1, 0, 1));
      const n = Math.min(i * 4, 1);
      x.scrub(this.uniformsTitle.uProgress, {
        value: 1 - n
      });
    } else if (t <= Gt && this.isRunText) {
      this.isRunText = !1;
      const i = 0;
      r.components.topAbout.fadeText1(i), r.components.topAbout.scrollText1(i), x.resetScrub(this.uniformsTitle.uProgress, {
        value: 1 - i
      });
    }
    if (t >= xe) {
      if (this.isRunTitle || s) {
        this.isRunTitle = !1;
        const i = 1;
        x.resetScrub(this.uniformsTitle.uProgress, {
          value: i
        });
      }
    } else if (Ht < t && t < xe) {
      this.isRunTitle || (this.isRunTitle = !0, c.emit("showAboutTitle"));
      const i = (t - Ht) / Ti;
      x.scrub(this.uniformsTitle.uProgress, {
        value: i
      });
    } else if (t <= Ht && this.isRunTitle) {
      this.isRunTitle = !1;
      const i = 0;
      x.resetScrub(this.uniformsTitle.uProgress, {
        value: i
      });
    }
    if (t >= Ct) {
      if (this.isRunTransition) {
        this.isRunTransition = !1;
        const i = 1;
        r.components.topAbout.scrollTextEnd1(i), c.emit("changeHeaderLocationCurrentIndex", te.indexOf("About"));
      }
    } else if (xt < t && t < Ct) {
      this.isRunTransition || (this.isRunTransition = !0, this.isTransitionedNext = !1);
      const i = (t - xt) / Ee;
      r.components.topAbout.scrollTextEnd1(i);
    } else if (t <= xt && this.isRunTransition) {
      this.isRunTransition = !1;
      const i = 0;
      r.components.topAbout.scrollTextEnd1(i);
    }
  }
  tick(t, e, s) {
    const i = e * .001,
      n = t * h.speed % Nt;
    this.street.rotation.x = bs - n, this.cars.length > 0 && this.cars.forEach((l, u) => {
      const d = h.car.individual[u];
      d.isOtherSide ? l.applyMatrix4(new O().makeRotationX(i * -h.car.speed)) : l.position.z = d.position.z + Math.sin(t * .5) * -2;
    }), this.uniformsRoads.forEach((l, u) => {
      l.uTime.value = t * h.road.speed;
    }), this.uniformsStreetBackground.uTime.value = t * h.streetBackground.speed, this.uniformsSky.uTime.value = t * h.sky.speed, this.postprocessing.bokeh_uniforms.time.value = t, this.isStartAnimation && this.carMixers.forEach(l => {
      l.time > l._actions[0]._clip.duration / 3 && l.setTime(0), l.update(i);
    }), this.isStartAnimation && this.birds.forEach(({
      model: l,
      group: u,
      mixer: d,
      param: a
    }) => {
      if (!d) return;
      const m = Math.sin(a.scale + t * .5);
      d.update(i * a.speedFlap * (m * .5 + .5));
    }), this.option.isNight && this.progressSpark(t);
  }
  render(t = null) {
    this.option.renderer.setRenderTarget(this.postprocessing.rtTextureColor), this.option.renderer.clear(), this.option.renderer.render(this.scene, this.camera), this.option.renderer.clearDepth(), this.option.renderer.render(this.sceneCar, this.camera), this.option.renderer.setRenderTarget(this.postprocessing.rtTextureColorBack), this.option.renderer.clear(), this.option.renderer.render(this.sceneSky, this.camera), this.sceneSky.overrideMaterial = this.postprocessing.materialDepthNone, this.scene.overrideMaterial = this.postprocessing.materialDepth, this.sceneCar.overrideMaterial = this.postprocessing.materialDepth, this.option.renderer.setRenderTarget(this.postprocessing.rtTextureDepth), this.option.renderer.clear(), this.option.renderer.render(this.scene, this.camera), this.option.renderer.render(this.sceneCar, this.camera), this.sceneSky.overrideMaterial = null, this.scene.overrideMaterial = null, this.sceneCar.overrideMaterial = null, this.option.renderer.setRenderTarget(t), this.option.renderer.render(this.postprocessing.scene, this.postprocessing.camera), this.option.renderer.render(this.scene2D, this.camera2D);
  }
  start(t = !1) {
    gsap.delayedCall(t ? 0 : .1, () => {
      this.isDisposed ? this.addDisposeTarget(this.street, this.streetModel) : this.street.add(this.streetModel);
    }), gsap.delayedCall(t ? 0 : .15, () => {
      this.isDisposed ? this.addDisposeTarget(this.street, this.streetModel2) : this.street.add(this.streetModel2);
    }), gsap.delayedCall(t ? 0 : .2, () => {
      this.cars.forEach((e, s) => {
        gsap.delayedCall((t ? 0 : .2) * s, () => {
          h.car.individual[s].isOtherSide ? this.isDisposed ? this.addDisposeTarget(this.street, e) : this.street.add(e) : this.isDisposed ? this.addDisposeTarget(this.sceneCar, e) : this.sceneCar.add(e);
        });
      });
    }), gsap.delayedCall(t ? 0 : .8, () => {
      this.birds.forEach(({
        group: e
      }, s) => {
        this.isDisposed ? this.addDisposeTarget(this.sceneCar, e) : this.sceneCar.add(e);
      });
    }), gsap.delayedCall(t ? 0 : .4, () => {
      this.isStartAnimation = !0;
    });
  }
}
const Rt = Math.PI * .01828,
  _s = Rt * .8,
  v = {
    backgroundColor: new A(14205382),
    camera: {
      fovTransitionIn: 36,
      fov: 46,
      position: new p(f.isSp ? 11.8 : 4, 30, f.isSp ? 3.7 : 0),
      positionTransitionOut: new p(f.isSp ? 11.8 : 4, 150, f.isSp ? 3.7 : 0),
      rotation: new L(-Math.PI * .5, 0, .43),
      far: 860,
      lookAt: new p(0, 0, 0)
    },
    directionalLight: {
      color: new A(1, 1, 1),
      intensity: 2,
      position: new p(.35, 100, 10)
    },
    ambientLight: {
      color: new A(1, 1, 1),
      intensity: 2
    },
    street: {
      position: new p(0, 3e3, 0),
      rotation: new p(0, 0, 0),
      model: {
        position: new p(f.isSp ? 14.4 : 2.2, 0, 0)
      }
    },
    car: {
      individual: [{
        position: new p(f.isSp ? 11.7 : -.3, -10.4 + 11, f.isSp ? 3 : 4),
        start: 0,
        isOtherSide: !1
      }],
      scale: .9,
      speed: .01,
      xOffset: 2.3,
      yOffset: 32,
      headlight: {
        position: new p(0, 0, 4.5 + 3),
        scale: new p(1.5, 3, 1),
        opacity: .4
      },
      taillight: {
        position: new p(0, 0, -2.8),
        scale: new p(1, 1, 1),
        opacity: .35
      }
    },
    spark: {
      speed: .5,
      interval: 1,
      positionY: .22,
      scale: new R(.4, 1),
      rotation: 1.5,
      darkness: 1,
      bloom: 1,
      opacity: 1
    },
    speed: .005,
    stop: !1
  },
  Os = {
    maxblur: 3,
    mNear: v.camera.position.y * 1.2,
    mFar: 10,
    bokehNear: .19,
    bokehFarBack: 1,
    bokehFarFront: 1,
    brightness: .7,
    noiseProgress: 1
  };
class As extends _t {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "scene", new U());
    _defineProperty(this, "sceneCar", new U());
    _defineProperty(this, "camera", void 0);
    _defineProperty(this, "lookAt", v.camera.lookAt.clone());
    _defineProperty(this, "matrixCamera", new O());
    _defineProperty(this, "cameraPosition", v.camera.position.clone());
    _defineProperty(this, "cameraRotationZ", v.camera.rotation.z);
    _defineProperty(this, "folder", void 0);
    _defineProperty(this, "street", new G());
    _defineProperty(this, "cars", []);
    _defineProperty(this, "postprocessing", {
      composer: ne,
      bokeh: ae
    });
    _defineProperty(this, "sparks", []);
    _defineProperty(this, "uniformsSparks", []);
    _defineProperty(this, "isRunTransition", !1);
    _defineProperty(this, "isRunTransitionNext", !1);
    _defineProperty(this, "isRunRun", !1);
    _defineProperty(this, "isRunTick", !1);
    _defineProperty(this, "isTransitionedNext", !1);
  }
  onInit() {
    r.enablePane && (this.folder = r.pane.addFolder({
      title: "AboutBirdsEye",
      expanded: !1
    })), this.option.isNight && (this.textures.Spark = S(Fe, {})), this.textures.headlight = S(Et, {}), this.textures.taillight = S(Lt, {}), this.initScene(), this.initCamera(), this.initLight(), this.initStreet(), this.initCar(), this.initPostprocessing();
  }
  initScene() {
    this.scene.background = v.backgroundColor;
  }
  initCamera() {
    if (this.camera = new Ot(v.camera.fov, this.option.camera.aspect, this.option.camera.near, v.camera.positionTransitionOut.y * 1.5), this.updateCameraPosition(), r.enablePane) {
      const t = this.folder.addFolder({
        title: "camera",
        expanded: !1
      });
      t.addInput(v.camera, "position").on("change", () => {
        this.updateCameraPosition();
      }), t.addInput(v.camera, "rotation").on("change", () => {
        this.updateCameraPosition();
      }), t.addInput(this.camera, "fov", {
        min: 5,
        max: 179
      }).on("change", () => {
        this.camera.updateProjectionMatrix();
      }), t.addInput(this.camera, "far", {
        min: 0
      }).on("change", () => {
        this.camera.updateProjectionMatrix();
      }), t.addInput(this, "lookAt").on("change", () => {
        this.updateCameraPosition();
      });
    }
  }
  updateCameraPosition() {
    this.camera.position.set(0, 0, 0), this.camera.rotation.set(0, 0, 0), this.matrixCamera.makeTranslation(v.camera.position.x, v.camera.position.y, v.camera.position.z).multiply(new O().makeRotationFromEuler(v.camera.rotation)), this.camera.applyMatrix4(this.matrixCamera);
  }
  initLight() {
    {
      const t = new At(v.directionalLight.color, v.directionalLight.intensity);
      t.position.copy(v.directionalLight.position), this.scene.add(t), this.sceneCar.add(t.clone());
    }
    {
      const t = new oe(16777215, 16777215, 1);
      t.position.set(0, 50, 0), this.scene.add(t), this.sceneCar.add(t.clone());
    }
  }
  initStreet() {
    let t;
    r.enablePane && (t = this.folder.addFolder({
      title: "街",
      expanded: !1
    })), this.street.position.copy(v.street.position), this.scene.add(this.street);
    let e;
    this.option.isNight && (e = this.textures.Spark), N(this.option.isNight ? "/gl/night/optimize/colony_fukan_v2_line.glb" : "/gl/optimize/colony_fukan_v2.glb", {
      onLoad: (s, i) => {
        const n = i;
        n.name = "glTF", n.position.copy(v.street.model.position), n.applyMatrix4(new O().makeTranslation(0, -v.street.position.y, 0)), n.rotation.y = Math.PI * .5;
        const l = n.clone();
        if (l.applyMatrix4(new O().makeRotationX(Rt)), l.applyMatrix4(new O().makeTranslation(0, 2, 0)), this.streetModel = n, this.streetModel2 = l, r.enablePane && (t.addInput(n, "visible").on("change", ({
          value: u
        }) => {
          l.visible = u;
        }), t.addInput(this.street.position, "y", {
          label: "全体位置",
          min: 0,
          max: 3e3,
          step: 10
        }).on("change", () => {
          n.position.copy(v.street.model.position), n.applyMatrix4(new O().makeTranslation(0, -this.street.position.y, 0)), l.position.copy(n.position), l.rotation.copy(n.rotation), l.matrix.copy(n.matrix), l.applyMatrix4(new O().makeRotationX(Rt));
        }), t.addInput(n.position, "x", {
          label: "横位置"
        }).on("change", ({
          value: u
        }) => {
          l.position.x = u;
        })), n.traverse(u => {
          if (u.isMesh) {
            const d = u.name.startsWith("Cylinder");
            if (this.option.isNight && (u.name.startsWith("lamp") || d) && (d && (u.material.roughness = 1, u.material.metalness = 1), u.material.emissive.copy($)), this.option.isNight && u.name.startsWith("spark_")) {
              const a = D({
                  uTexture: e,
                  uSpeed: v.spark.speed,
                  uInterval: v.spark.interval,
                  uPositionY: v.spark.positionY,
                  uScale: v.spark.scale,
                  uRotation: v.spark.rotation,
                  uDarkness: v.spark.darkness,
                  uBloom: v.spark.bloom,
                  uOpacity: v.spark.opacity,
                  uOffset: Math.random(),
                  uTime: 0
                }),
                m = F(a);
              this.uniformsSparks.push(m);
              const g = new b({
                uniforms: a,
                vertexShader: C,
                fragmentShader: He,
                side: re,
                transparent: !0,
                depthTest: !1,
                depthWrite: !1
              });
              u.material = g, this.sparks.push(u);
            }
          }
        }), r.enablePane && this.option.isNight) {
          const u = t.addFolder({
            title: "光ライン"
          });
          u.addInput(v.spark, "speed", {
            min: 0,
            max: 2
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uSpeed.value = d;
            });
          }), u.addInput(v.spark, "interval", {
            min: 0,
            max: 10
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uInterval.value = d;
            });
          }), u.addInput(v.spark, "positionY", {
            min: -5,
            max: 5
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uPositionY.value = d;
            });
          }), u.addInput(v.spark, "scale", {
            x: {
              min: 0,
              max: 2
            },
            y: {
              min: 0,
              max: 2
            }
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uScale.value = d;
            });
          }), u.addInput(v.spark, "rotation", {
            min: 0,
            max: 2
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uRotation.value = d;
            });
          }), u.addInput(v.spark, "darkness", {
            min: 0,
            max: 1
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uDarkness.value = d;
            });
          }), u.addInput(v.spark, "bloom", {
            min: 0,
            max: 2
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uBloom.value = d;
            });
          }), u.addInput(v.spark, "opacity", {
            min: 0,
            max: 1
          }).on("change", ({
            value: d
          }) => {
            this.uniformsSparks.forEach(a => {
              a.uOpacity.value = d;
            });
          });
        }
      }
    });
  }
  initCar() {
    this.initCarA();
  }
  initCarA() {
    let t;
    r.enablePane && (t = this.folder.addFolder({
      title: "car A",
      expanded: !1
    }));
    const e = this.textures.headlight,
      s = this.textures.taillight;
    this.sceneCar.position.copy(v.street.position), N("/gl/car_v7_out3.glb", {
      onLoad: (i, n) => {
        const l = n;
        l.name = "glTF", this.option.isNight && l.traverse(a => {
          if (a.isMesh) switch (a.material = a.material.clone(), a.material.name) {
            case "lamp":
            case "emission":
              a.material.roughness = 1, a.material.metalness = 0, a.material.emissive.copy(new A(Math.pow($.r, 5.6), Math.pow($.g, 5.6), Math.pow($.b, 5.6)));
              break;
          }
        }), l.scale.setScalar(v.car.scale), r.enablePane && (t.addInput(v.car, "scale").on("change", () => {
          this.cars.forEach(a => {
            a.scale.setScalar(v.car.scale);
          });
        }), t.addInput(v.car, "speed"), t.addInput(v.car, "yOffset"));
        const u = new P(new E(1.8, 4.3), new b({
          vertexShader: C,
          fragmentShader: Pt,
          transparent: !0
        }));
        u.rotateX(Math.PI * -.5);
        const d = new G();
        if (d.add(l, u), this.option.isNight) {
          {
            const a = D({
                uTexture: e,
                uOpacity: v.car.headlight.opacity
              }),
              m = new P(new E(4, 4), new b({
                uniforms: a,
                vertexShader: C,
                fragmentShader: Ue,
                transparent: !0,
                depthTest: !1
              }));
            if (m.rotateX(Math.PI * -.5), m.position.copy(v.car.headlight.position), m.scale.copy(v.car.headlight.scale), d.add(m), r.enablePane) {
              const g = t.addFolder({
                title: "ヘッドライト"
              });
              g.addInput(m, "position", {
                x: {
                  step: .1
                },
                y: {
                  step: .1
                },
                z: {
                  step: .1
                }
              }), g.addInput(m, "rotation"), g.addInput(m, "scale", {
                x: {
                  step: .1
                },
                y: {
                  step: .1
                },
                z: {
                  step: .1
                }
              }), g.addInput(a.uOpacity, "value", {
                label: "opacity",
                min: 0,
                max: 1
              });
            }
          }
          {
            const a = D({
                uTexture: s,
                uOpacity: v.car.taillight.opacity
              }),
              m = new P(new E(2, 2), new b({
                uniforms: a,
                vertexShader: C,
                fragmentShader: Ge,
                transparent: !0,
                depthTest: !1
              }));
            if (m.rotateX(Math.PI * -.5), m.position.copy(v.car.taillight.position), m.scale.copy(v.car.taillight.scale), d.add(m), r.enablePane) {
              const g = t.addFolder({
                title: "テールランプ"
              });
              g.addInput(m, "position", {
                x: {
                  step: .1
                },
                y: {
                  step: .1
                },
                z: {
                  step: .1
                }
              }), g.addInput(m, "rotation"), g.addInput(m, "scale", {
                x: {
                  step: .1
                },
                y: {
                  step: .1
                },
                z: {
                  step: .1
                }
              }), g.addInput(a.uOpacity, "value", {
                label: "opacity",
                min: 0,
                max: 1
              });
            }
          }
        }
        v.car.individual.forEach((a, m) => {
          const g = d.clone();
          if (this.cars.push(g), g.position.copy(a.position), a.isOtherSide ? (g.applyMatrix4(new O().makeTranslation(0, -v.street.position.y, 0)), g.applyMatrix4(new O().makeRotationX(a.start))) : (g.applyMatrix4(new O().makeTranslation(0, -v.street.position.y, 0)), g.rotation.copy(new L(0, Math.PI, 0))), r.enablePane) {
            const I = t.addFolder({
              title: `${m + 1}`
            });
            I.addInput(a, "position").on("change", () => {
              g.position.copy(a.position);
            }), I.addInput(a.position, "y").on("change", () => {
              g.position.y = a.position.y;
            });
          }
        });
      }
    });
  }
  initPostprocessing() {
    const {
        width: t,
        height: e,
        pixelRatio: s
      } = this.option,
      i = le({
        width: t,
        height: e,
        pixelRatio: s,
        camera: this.camera,
        folder: this.folder,
        effectController: Os,
        isNight: this.option.isNight
      });
    this.postprocessing = i;
  }
  progressSpark(t) {
    const e = t;
    this.uniformsSparks.forEach(s => {
      s.uTime.value = -(.03 + e * 4);
    });
  }
  makeTransitionIn(t) {
    const e = K["quart.out"](t);
    this.camera.position.set(...H(v.camera.position, v.camera.positionTransitionOut, K["quint.in"](.4 + t * .2))), this.camera.fov = w(v.camera.fovTransitionIn, v.camera.fov, e), this.camera.updateProjectionMatrix();
  }
  makeTransitionOut(t) {
    this.camera.position.set(...H(v.camera.position, v.camera.positionTransitionOut, K["quint.in"](.4 + .2 + t * (1 - (.4 + .2)))));
  }
  resize(t, e, s) {
    this.camera.aspect = t / e, this.camera.updateProjectionMatrix(), this.postprocessing.resize(t, e, s);
  }
  scroll(t, e) {
    if (t >= Jt ? (this.isRunTransitionNext && (this.isRunTransitionNext = !1), !this.isTransitionedNext && r.nextScene === "AboutBirdsEye" && r.scrollDirection === 1 && (this.isTransitionedNext = !0, c.emit("top:startTransition:aboutSky"))) : Qt < t && t < Jt ? this.isRunTransitionNext || (this.isRunTransitionNext = !0, r.scrollDirection === -1 ? (this.isTransitionedNext = !1, c.emit("top:startTransition:aboutSky", !0)) : this.isTransitionedNext || (this.isTransitionedNext = !0, c.emit("top:startTransition:aboutSky"))) : t <= Qt && this.isRunTransitionNext && (this.isRunTransitionNext = !1, this.isTransitionedNext = !1, c.emit("top:startTransition:aboutSky", !0), c.emit("changeScene", "AboutBirdsEye", {
      isBack: !0
    })), t >= Se ? this.isRunRun && (this.isRunRun = !1) : ye < t && t < Se ? this.isRunRun || (this.isRunRun = !0) : t <= ye && this.isRunRun && (this.isRunRun = !1), t >= dt) {
      if (this.isRunTransition) {
        this.isRunTransition = !1;
        const s = 1;
        r.components.topAbout.scrollTextEnd1(s);
      }
    } else if (st < t && t < dt) {
      this.isRunTransition || (this.isRunTransition = !0, this.isRunTick = !0, this.street.rotation.x = -_s, r.scrollDirection === -1 && (this.isTransitionedNext = !1, c.emit("top:startTransition:aboutBirdsEye", !0)));
      const s = (t - st) / Le;
      r.components.topAbout.scrollTextEnd1(s);
    } else if (t <= st && this.isRunTransition) {
      this.isRunTransition = !1, this.isTransitionedNext = !1, c.emit("top:startTransition:aboutSky", !0), c.emit("changeScene", "AboutBirdsEye", {
        isBack: !0
      });
      const s = 0;
      r.components.topAbout.scrollTextEnd1(s);
    }
  }
  tick(t, e, s) {
    if (!this.isRunTick) return;
    const i = e * .001;
    this.street.rotation.x = (this.street.rotation.x - i * v.speed) % Rt, this.cars.length > 0 && (this.cars.forEach((n, l) => {
      v.car.individual[l].isOtherSide ? n.applyMatrix4(new O().makeRotationX(i * -v.car.speed)) : n.applyMatrix4(new O().makeRotationX(i * v.car.speed * Math.sin(t * .5) * -.03));
    }), this.sceneCar.position.y = v.street.position.y - this.street.rotation.x * v.car.yOffset), this.option.isNight && this.progressSpark(t);
  }
  render(t = null) {
    this.option.renderer.setRenderTarget(this.postprocessing.rtTextureColor), this.option.renderer.clear(), this.option.renderer.render(this.scene, this.camera), this.option.renderer.render(this.sceneCar, this.camera), this.scene.overrideMaterial = this.sceneCar.overrideMaterial = this.postprocessing.materialDepth, this.option.renderer.setRenderTarget(this.postprocessing.rtTextureDepth), this.option.renderer.clear(), this.option.renderer.render(this.scene, this.camera), this.scene.overrideMaterial = this.sceneCar.overrideMaterial = null, this.option.renderer.setRenderTarget(t), this.option.renderer.render(this.postprocessing.scene, this.postprocessing.camera);
  }
  start(t = !1) {
    gsap.delayedCall(t ? 0 : .1, () => {
      this.isDisposed ? this.addDisposeTarget(this.street, this.streetModel) : this.street.add(this.streetModel);
    }), gsap.delayedCall(t ? 0 : .15, () => {
      this.isDisposed ? this.addDisposeTarget(this.street, this.streetModel2) : this.street.add(this.streetModel2);
    }), gsap.delayedCall(t ? 0 : .2, () => {
      this.cars.forEach((e, s) => {
        gsap.delayedCall((t ? 0 : .1) * s, () => {
          v.car.individual[s].isOtherSide ? this.isDisposed ? this.addDisposeTarget(this.street, e) : this.street.add(e) : this.isDisposed ? this.addDisposeTarget(this.sceneCar, e) : this.sceneCar.add(e);
        });
      });
    });
  }
}
var Es = `precision highp float;

uniform sampler2D uFramebuffer;
uniform sampler2D uFramebufferNext;
uniform float uTime;
uniform float uProgress;
uniform sampler2D uShape;
uniform vec2 uResolutionImage;
uniform vec2 uResolutionObject;
uniform bool uIsCharge;

varying vec2 vUv;

const float PI = 3.1415926;
const float PI2 = 6.2831853;

vec2 rotate(vec2 uv, float rad, vec2 offset) {
uv += offset;
uv -= 0.5;
uv *= mat2(cos(rad),sin(rad),-sin(rad),cos(rad));
uv += 0.5;
uv -= offset;
return uv;
}
vec2 fitCover(vec2 coord, vec2 inputResolution, vec2 outputResolution) {
vec2 ratio = vec2(
  min((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),
  min((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)
);
return coord * ratio + (1. - ratio) * 0.5;
}
vec2 fitContain(vec2 coord, vec2 inputResolution, vec2 outputResolution) {
vec2 ratio = vec2(
  max((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),
  max((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)
);
return coord * ratio + (1. - ratio) * 0.5;
}

#pragma glslify: export(fitContain)
vec2 repeatUvReverse(vec2 uv) {
return vec2(
  mod(uv.x, 2.) < 1. ? fract(uv.x) : 1. - fract(uv.x),
  mod(uv.y, 2.) < 1. ? fract(uv.y) : 1. - fract(uv.y)
);
}

#pragma glslify: export(repeatUvReverse)
vec2 getZoomedUv(vec2 uv, float zoom, vec2 origin) {
origin.x = -origin.x;
uv += origin;
float scale = 1. / zoom;
return uv * scale - 0.5 * (scale - 1.);
}
float expoIn(float t) {
return t == 0.0 ? t : pow(2.0, 10.0 * (t - 1.0));
}
#ifndef HALF_PI
#define HALF_PI 1.5707963267948966
#endif

float sineIn(float t) {
return sin((t - 1.0) * HALF_PI) + 1.0;
}

const float pZoomSpeed = 2.;
const float pVertices = 3.;
const float pVerticesCharge = 1.;

float makeDistortion(float progress, vec2 center) {
float distortionRadial = atan(center.y, center.x);
distortionRadial = (sin(distortionRadial * (uIsCharge ? pVerticesCharge : pVertices) + PI) + 0.8) * 0.5;
distortionRadial = mix(0., distortionRadial, progress);
float distortionCircle = min(1. / length(center) * 2. * progress, 1.);
return min(distortionRadial, distortionCircle);
}

void main() {
vec2 uv = vUv;
vec2 center = fitContain(uv, vec2(1.), uResolutionObject) * 2. - 1.;


float progress = uProgress;


float currentDistortionProgress = expoIn(min(progress * 1.3, 1.));









float currentDistortion = makeDistortion(currentDistortionProgress, center);



vec2 currentUv = getZoomedUv(uv, 1. + (currentDistortion * 2. + 2. * min(1. / length(center), 1.) * currentDistortionProgress), vec2(0.));

vec4 currentColor = texture2D(uFramebuffer, currentUv);

float nextDistortionProgress = expoIn(1. - min(max((progress - 0.2) * 1.2, 0.), 1.));
float nextDistortion = makeDistortion(nextDistortionProgress, center);
vec2 nextUv = getZoomedUv(uv, 1. - (nextDistortion * 1. + 0.5 * min(1. / length(center), 1.) * nextDistortionProgress), vec2(0.));
vec4 nextColor = texture2D(uFramebufferNext, nextUv);
















vec2 uvShape = uv;
uvShape = fitCover(uvShape, uResolutionImage, uResolutionObject);

float startZoomPosition = uIsCharge ? 0.01 : 0.01;
float zoomProgress = max(expoIn(progress) - startZoomPosition, 0.) / (1. - startZoomPosition);
uvShape = getZoomedUv(uvShape, mix(min(length(center), 1.), 20., zoomProgress), vec2(0., uIsCharge ? -0.05 : 0.));
float shape = 1. - texture2D(uShape, uvShape).a;
float shapeCircle = min(1. / length(center) * 2. * zoomProgress * 14., 1.);
shapeCircle = smoothstep(0.9, 1., shapeCircle);
shape = shape * shapeCircle;



vec4 color = mix(currentColor, nextColor, mix(shape, 1., zoomProgress));

gl_FragColor = color;














}`,
  Ls = `#define PI 3.141592653589793

varying vec2 vUv;

uniform sampler2D tCurrent;
uniform sampler2D tNext;

uniform vec2 uResolutionObject;

uniform float maxblur;
uniform float uProgress;
uniform float uFishEyeLens;
uniform float uFishEyeLensStartTiming;
uniform bool uIsNext;

vec2 fitContain(vec2 coord, vec2 inputResolution, vec2 outputResolution) {
vec2 ratio = vec2(
  max((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),
  max((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)
);
return coord * ratio + (1. - ratio) * 0.5;
}

#pragma glslify: export(fitContain)
vec2 fitCover(vec2 coord, vec2 inputResolution, vec2 outputResolution) {
vec2 ratio = vec2(
  min((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),
  min((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)
);
return coord * ratio + (1. - ratio) * 0.5;
}

vec2 getUvPolar(vec2 uv) {
vec2 uvPolar = vec2(0.5) - uv;
float radius = length(uvPolar) * 2.;
float angle = atan(uvPolar.y, uvPolar.x);
return vec2(radius, angle / (PI * 2.));
}
vec2 polarToUv(vec2 uvPolar) {
float radius = uvPolar.x;
float angle = uvPolar.y;

float u = (angle / (2.0 * PI)) + 0.5;
float v = radius;

return vec2(u, v);
}

vec2 getZoomedUv(vec2 uv, float zoom, vec2 origin) {
origin.x = -origin.x;
uv += origin;
float scale = 1. / zoom;
return uv * scale - 0.5 * (scale - 1.);
}
vec3 mod289(vec3 x) {
return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
return mod289(((x * 34.0) + 1.0) * x);
}

float snoise2(vec2 v) {
const vec4 C = vec4(0.211324865405187,  
0.366025403784439,  
-0.577350269189626,  
0.024390243902439); 

vec2 i = floor(v + dot(v, C.yy));
vec2 x0 = v - i + dot(i, C.xx);

vec2 i1;


i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);



vec4 x12 = x0.xyxy + C.xxzz;
x12.xy -= i1;

i = mod289(i); 
vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));

vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
m = m * m;
m = m * m;

vec3 x = 2.0 * fract(p * C.www) - 1.0;
vec3 h = abs(x) - 0.5;
vec3 ox = floor(x + 0.5);
vec3 a0 = x - ox;

m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);

vec3 g;
g.x = a0.x * x0.x + h.x * x0.y;
g.yz = a0.yz * x12.xz + h.yz * x12.yw;
return 130.0 * dot(m, g);
}
float zigzag(float x) {
float m = mod(x, 2.);
return m == 1. ? 1. : fract(x * (step(m, 1.) * 2. - 1.));
}
vec2 fishEyeLens(vec2 uv, float size, vec2 origin) {
uv -= 0.5;
vec2 center = uv;
center += origin;
uv *= size == 0. ? 1. : (1. + min(length(center) * size, 1.)) * mix(1., 0.5, min(size, 1.));
uv += 0.5;
return uv;
}

#pragma glslify: export(fishEyeLens)

const int LOD = 2; 
const int sLOD = 1 << LOD; 
const float sigma = float(samples) * 0.25;

float gaussian(vec2 i) {
return exp(-0.5 * dot(i /= sigma, i)) / (6.28 * sigma * sigma);
}

vec4 blur(sampler2D tex, vec2 uv, vec2 scale) {
vec4 O = vec4(0.);
int s = samples / sLOD;
int s2 = s * s;
float a = 0.;

for (int i = 0; i < s2; i++) {
  vec2 d = vec2(i % s, i / s) * float(sLOD) - float(samples) / 2.;
  
  vec2 u = uv + scale * d;
  vec4 c = texture2D(tex, u, float(LOD));
  
  
  
  
  
  
  
  
  
  
  float g = gaussian(d);
  O.rgb += g * c.rgb;
  O.a += c.a;
  a += g * c.a;
}
O.a /= float(s2);


return vec4(vec3(a > 0. ? O.rgb / a : O.rgb), O.a);

}

const float TRANSITION_RATE = 0.6;

void main() {
vec2 blurScale = vec2(0.0002 * maxblur);





float progressOut = min(uProgress / TRANSITION_RATE, 1.);
progressOut = pow(progressOut, uFishEyeLensStartTiming);
vec2 imageUvOut = vUv;
imageUvOut = fitCover(imageUvOut, vec2(1.), uResolutionObject);
imageUvOut = fishEyeLens(imageUvOut, uFishEyeLens * progressOut, vec2(0.)); 
imageUvOut = fitContain(imageUvOut, uResolutionObject, vec2(1.));




float progressIn = max(uProgress - (1. - TRANSITION_RATE), 0.) / TRANSITION_RATE;
progressIn = 1. - progressIn;
progressIn = pow(progressIn, uFishEyeLensStartTiming);
vec2 imageUvIn = vUv;
imageUvIn = fitCover(imageUvIn, vec2(1.), uResolutionObject);
imageUvIn = fishEyeLens(imageUvIn, uFishEyeLens * progressIn, vec2(0.)); 
imageUvIn = fitContain(imageUvIn, uResolutionObject, vec2(1.));

















gl_FragColor = uProgress == 1.

? texture2D(tNext, vUv)

: progressOut > 0. || progressIn > 0.
  
? mix(
    
blur(tCurrent, imageUvOut, blurScale * progressOut),
    
blur(tNext, imageUvIn, blurScale * progressIn),
    

smoothstep(0.37, 0.62, uProgress)
    
)

  
: texture2D(tCurrent, vUv);






















}`,
  Ds = `precision highp float;

uniform sampler2D uFramebuffer;
uniform sampler2D uFramebufferNext;
uniform float uTime;
uniform float uProgress;
uniform sampler2D uCloudTexture;
uniform vec2 uResolutionImage;
uniform vec2 uResolutionObject;

varying vec2 vUv;

const float PI = 3.1415926;
const float PI2 = 6.2831853;
vec4 texture2DInnerRange(sampler2D t, vec2 uv) {
return (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) ? vec4(0.) : texture2D(t, uv);
}

#pragma glslify: export(texture2DInnerRange)
vec2 rotate(vec2 uv, float rad, vec2 offset) {
uv += offset;
uv -= 0.5;
uv *= mat2(cos(rad),sin(rad),-sin(rad),cos(rad));
uv += 0.5;
uv -= offset;
return uv;
}
vec2 fitCover(vec2 coord, vec2 inputResolution, vec2 outputResolution) {
vec2 ratio = vec2(
  min((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),
  min((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)
);
return coord * ratio + (1. - ratio) * 0.5;
}
vec2 getZoomedUv(vec2 uv, float zoom, vec2 origin) {
origin.x = -origin.x;
uv += origin;
float scale = 1. / zoom;
return uv * scale - 0.5 * (scale - 1.);
}
float mapClamp(float num, float fromMin, float fromMax, float toMin, float toMax) {
return
  num <= fromMin ? toMin
  : num >= fromMax ? toMax
  : toMin + (num - fromMin) * (toMax - toMin) / (fromMax - fromMin);
}

vec4 generateCloud(vec4 color, float progress, float x, float radian, float offset) {
vec2 uv = vUv;
float myProgress = pow(progress, 1.2);

uv = rotate(uv, PI * radian, vec2(0.));

float startZoom = 30. + offset * 10.;
float zoom = startZoom - startZoom * pow(min(progress * 1.6, 1.), 1.);
float move = -(pow(myProgress, 0.5 * (offset + 0.5)) * 0.3 / zoom + offset * 0.1);
uv = getZoomedUv(
  
uv,
  
max(zoom, 0.01),
  

vec2(0.)
  
);

uv = fitCover(uv, uResolutionImage, uResolutionObject);

uv.x += x;

uv.y += move;

vec4 cloudColor = texture2DInnerRange(uCloudTexture, uv);
cloudColor.a *= pow(1. - abs(myProgress - 0.5) * 2., (10. + offset * 10.));
return vec4(mix(color.rgb, cloudColor.rgb, cloudColor.a), max(color.a, cloudColor.a));
}

void main() {
vec2 uv = vUv;

float progress = uProgress;

float currentDistortionProgress = pow(min(progress * 4., 1.), 5.);
vec2 currentUv = uv;
vec4 currentColor = texture2DInnerRange(uFramebuffer, currentUv);
currentColor.a *= 1. - currentDistortionProgress;

float nextDistortionProgress = pow(max(progress - 0.4, 0.) / (1. - 0.4), 0.2);
vec2 nextUv = uv;
vec4 nextColor = texture2DInnerRange(uFramebufferNext, nextUv);
nextColor.a *= nextDistortionProgress;

vec4 color = nextColor.a > 0. ? nextColor : currentColor;

float cloudProgress = mapClamp(progress, 0., 0.8, 0., 1.);
color = generateCloud(color, cloudProgress, 0., 0.88, 0.);
color = generateCloud(color, mapClamp(cloudProgress, 0., 0.95, 0., 1.), 0.1, 0.88 - 0.01, 0.2);
color = generateCloud(color, mapClamp(cloudProgress, 0., 0.8, 0., 1.), -0.1, 0.88 + 0.01, 0.4);
color = generateCloud(color, mapClamp(cloudProgress, 0., 0.9, 0., 1.), -0.2, 0.88 + 0.02, 0.8);
color = generateCloud(color, mapClamp(cloudProgress, 0., 0.7, 0., 1.), 0.2, 0.88 - 0.02, 0.1);
color = generateCloud(color, mapClamp(cloudProgress, 0., 0.8, 0., 1.), 0.2, 0.88, 1.2);
color = generateCloud(color, mapClamp(cloudProgress, 0., 0.95, 0., 1.), 0.2, 0.88, 0.01);

gl_FragColor = color;




}`,
  Ms = `varying vec2 vUv;

uniform sampler2D tCopy;

void main() {
gl_FragColor = texture2D(tCopy, vUv);

}`;
const Wt = .6,
  Bs = .2,
  Fs = .6,
  zs = f.isSp ? Fs : Bs * (r.isFastMode ? 4 : 1),
  _e = f.isSp ? 40 : 15,
  jt = o => Math.min(1, 1.001 - Math.pow(2, -10 * o)),
  Us = (f.isSp, .03),
  Gs = (f.isSp, .06),
  Hs = "Kv",
  Ks = "Kv",
  ce = new URL(window.location.href).searchParams.get("scene") || Ks,
  Vs = r.currentScene = _[V(_.findIndex(o => o === ce) - 1, _.length)],
  ie = r.nextScene = ce,
  mt = ii(ie),
  ft = ce !== "Kv",
  j = {
    Kv: Me,
    Intro: Vi,
    IntroCharging: ws,
    Service: Ns,
    ServiceOpposite: Xi,
    About: Ps,
    AboutBirdsEye: As,
    AboutSky: es,
    News: us
  },
  vt = new E();
xs();
(_Class7 = class extends xi {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "folder", void 0);
    _defineProperty(this, "renderTargetKv", void 0);
    _defineProperty(this, "renderTargetNextKv", void 0);
    _defineProperty(this, "renderTargetSky", void 0);
    _defineProperty(this, "renderTargetNextSky", void 0);
    _defineProperty(this, "postprocessing", {});
    _defineProperty(this, "postprocessingKv", {});
    _defineProperty(this, "postprocessingSky", {});
    _defineProperty(this, "currentScene", Vs);
    _defineProperty(this, "nextScene", ie);
    _defineProperty(this, "currentSection", Hs);
    _defineProperty(this, "component", void 0);
    _defineProperty(this, "componentNext", void 0);
    _defineProperty(this, "gl", null);
    _defineProperty(this, "glNext", null);
    _defineProperty(this, "glKv", void 0);
    _defineProperty(this, "glIntro", void 0);
    _defineProperty(this, "glIntroCharging", void 0);
    _defineProperty(this, "glService", void 0);
    _defineProperty(this, "glServiceOpposite", void 0);
    _defineProperty(this, "glAbout", void 0);
    _defineProperty(this, "glAboutBirdsEye", void 0);
    _defineProperty(this, "glAboutSky", void 0);
    _defineProperty(this, "glNews", void 0);
    _defineProperty(this, "changeSceneTween", null);
    _defineProperty(this, "lerp", Us);
    _defineProperty(this, "animatedScroll", ut[`TOP_TRANSITION_${mt}_POSITION_END`]);
    _defineProperty(this, "targetScroll", 0);
    _defineProperty(this, "positionValue", 0);
    _defineProperty(this, "fromPosition", 0);
    _defineProperty(this, "toPosition", this.animatedScroll);
    _defineProperty(this, "velocity", 0);
    _defineProperty(this, "deltaY", 0);
    _defineProperty(this, "timeScaleFooter", 1);
    _defineProperty(this, "direction", 0);
    _defineProperty(this, "duration", 0);
    _defineProperty(this, "easing", jt);
    _defineProperty(this, "currentTime", 0);
    _defineProperty(this, "storedDeltaY", 0);
    _defineProperty(this, "storedDeltaTime", 0);
    _defineProperty(this, "transitionProgress", 0);
    _defineProperty(this, "programmatic", !1);
    _defineProperty(this, "isRunningScroll", !1);
    _defineProperty(this, "isAutoScroll", !1);
    _defineProperty(this, "isRunScroll", !1);
    _defineProperty(this, "isFooter", !1);
    _defineProperty(this, "startPositionNext", ut[`TOP_TRANSITION_${mt}_POSITION_START`]);
    _defineProperty(this, "endPositionNext", ut[`TOP_TRANSITION_${mt}_POSITION_END`]);
    _defineProperty(this, "distanceNext", ut[`TOP_TRANSITION_${mt}_DISTANCE`]);
    _defineProperty(this, "isRunTransition", !1);
    _defineProperty(this, "stats", void 0);
    _defineProperty(this, "isBlurWindow", !1);
    _defineProperty(this, "isInit", !1);
    _defineProperty(this, "scrollLimit", ot - pt - 1);
    _defineProperty(this, "isKvNext", !1);
    _defineProperty(this, "transitionType", "kv");
    _defineProperty(this, "renderTargetCount", 0);
    _defineProperty(this, "sceneMotionBlur", new Z());
    _defineProperty(this, "sceneCopy", new Z());
    _defineProperty(this, "renderTargets", void 0);
    _defineProperty(this, "renderTargetNext", void 0);
    _defineProperty(this, "uniforms", void 0);
    _defineProperty(this, "motionBlurUniformsWithoutValue", void 0);
    _defineProperty(this, "uniformsKv", void 0);
    _defineProperty(this, "uniformsSky", void 0);
    _defineProperty(this, "isTransitionNext", !1);
    _defineProperty(this, "isTransitionStartBack", !1);
    _defineProperty(this, "isChangeSection", !1);
    _defineProperty(this, "isNight", r.isNightMode);
    _defineProperty(this, "isToKv", !1);
  }
  onInit() {
    if (super.onInit({
      autoClear: !1,
      pixelRatioMax: 1.5
    }), r.enablePane && (this.folder = r.pane.addFolder({
      title: "トランジション",
      expanded: !1
    }), this.folder.addButton({
      title: "Play"
    }).on("click", () => {
      x.fromTo(this, {
        transitionProgress: 0
      }, {
        transitionProgress: 1,
        duration: 2.5,
        ease: "expo.out",
        onStart: () => {
          this.changeGl();
        },
        onUpdate: () => {
          this.updateTransition(this.transitionProgress);
        },
        onComplete: () => {
          this.isRunTransition = !1;
        }
      });
    }), this.folder.addInput(this, "transitionProgress", {
      min: 0,
      max: 1
    }).on("change", () => {
      this.gl || this.changeGl(), this.updateTransition(this.transitionProgress);
    })), r.pageId !== "pageTop") {
      r.view.classList.add("-show"), c.emit("showKv");
      return;
    }
    this.HeaderEnergy = r.components.HeaderEnergy, this.initGl(), ft || c.emit("makeHeaderDark"), document.addEventListener("touchmove", o => {
      o.preventDefault();
    }, {
      passive: !1
    });
  }
  initGl() {
    if (this.isInit) return;
    this.isInit = !0;
    const o = this.el;
    this.emitSelfResize(), ft || (this.glKv = Me.create(o, {
      isForce: !0,
      renderer: this.renderer,
      camera: this.camera,
      width: this.width,
      height: this.height,
      pixelRatio: this.pixelRatio,
      isNight: this.isNight
    }, "Kv")), setTimeout(() => {
      this.emitSelfResize(), this.detectPlay();
    }, 16), this.glNext = this[`gl${this.nextScene === "Footer" ? "News" : this.nextScene}`], this.glNext || (this.glNext = this[`gl${this.nextScene}`] = j[this.nextScene].create(this.el, {
      isForce: !0,
      renderer: this.renderer,
      camera: this.camera,
      width: this.width,
      height: this.height,
      pixelRatio: this.pixelRatio,
      isNight: this.isNight
    }, this.nextScene)), this.componentNext = r.components[`top${this.nextScene}`], this.componentNext.show(), setTimeout(() => {
      const t = _[V(_.findIndex(i => i === this.nextScene) + 1, _.length)],
        e = t === "Footer" ? "News" : t;
      this[`gl${e}`] || (this[`gl${e}`] = j[e].create(this.el, {
        isForce: !0,
        renderer: this.renderer,
        camera: this.camera,
        width: this.width,
        height: this.height,
        pixelRatio: this.pixelRatio,
        isNight: t === "Kv" ? !this.isNight : this.isNight
      }, e));
    }, 200), this.startLoading(), this.initPostprocessing(), this.initPostprocessingKv(), this.initPostprocessingSky(), this.detectIsKvNext(ie), this.on("changeScene", (t, {
      isBack: e = !1
    } = {}, s = !1) => {
      s || (this.isRunTransition = !1, this.changeScene(t, {
        isBack: e
      }), e && (t !== "Footer" && (this.uniforms.uProgress.value = 1), t === "News" && this.disposeGl(this.nextScene, !0)));
    }), this.on("top:startTransition:kv", (t = !1, e = !1) => {
      !t && this.nextScene === "Kv" || t && this.nextScene === "Footer" || (this.startPositionNext = Si, this.endPositionNext = Kt, this.distanceNext = yi, this.isChangeSection = !0, t ? (this.direction = r.scrollDirection = -1, this.changeSection("Footer"), this.uniforms.uProgress.value = 1) : (this.direction = r.scrollDirection = 1, this.uniforms.uProgress.value = 0, this.animatedScroll = this.startPositionNext, this.isToKv = !0, e && c.emit("top:autoScroll", this.endPositionNext, {}), c.emit("changeScene", "Kv")));
    }), this.on("top:startTransition:intro", (t = !1, e = !1) => {
      !t && this.nextScene === "Intro" || t && this.nextScene === "Kv" || (this.startPositionNext = wi, this.endPositionNext = we, this.distanceNext = Ii, this.isChangeSection = !0, t ? (this.changeSection("Kv"), this.uniforms.uProgress.value = 1) : (this.uniforms.uProgress.value = 0, e && c.emit("top:autoScroll", this.endPositionNext, {
        ease: K["expo.out"]
      }), c.emit("changeScene", "Intro")));
    }), this.on("top:startTransition:charging", (t = !1) => {
      !t && this.nextScene === "IntroCharging" || t && this.nextScene === "Intro" || (this.startPositionNext = Tt, this.endPositionNext = Zt, this.distanceNext = Ae, this.isChangeSection = !1, t ? this.uniforms.uProgress.value = 1 : c.emit("changeScene", "IntroCharging"));
    }), this.on("top:startTransition:service", (t = !1) => {
      !t && this.nextScene === "Service" || t && this.nextScene === "IntroCharging" || (this.startPositionNext = qt, this.endPositionNext = kt, this.distanceNext = Ni, this.isChangeSection = !0, t ? this.changeSection("Intro") : (this.uniforms.uProgress.value = 0, c.emit("changeScene", "Service")));
    }), this.on("top:startTransition:serviceOpposite", (t = !1) => {
      !t && this.nextScene === "ServiceOpposite" || t && this.nextScene === "Service" || (this.startPositionNext = Ri, this.endPositionNext = pt, this.distanceNext = ki, this.isChangeSection = !1, t ? this.uniforms.uProgress.value = 1 : c.emit("changeScene", "ServiceOpposite"));
    }), this.on("top:startTransition:about", (t = !1) => {
      !t && this.nextScene === "About" || t && this.nextScene === "ServiceOpposite" || (this.startPositionNext = xt, this.endPositionNext = Ct, this.distanceNext = Ee, this.isChangeSection = !0, t ? (this.changeSection("Service"), this.uniforms.uProgress.value = 1, c.emit("top:autoScroll", bi, {
        onComplete: () => {
          this.uniforms.uProgress.value = 1;
        }
      })) : (this.isAutoScroll || (this.uniforms.uProgress.value = 0), c.emit("changeScene", "About")));
    }), this.on("top:startTransition:aboutBirdsEye", (t = !1) => {
      if (!(!t && this.nextScene === "AboutBirdsEye" || t && this.nextScene === "About")) if (this.startPositionNext = st, this.endPositionNext = dt, this.distanceNext = Le, this.isChangeSection = !1, t) this.uniforms.uProgress.value = 1;else {
        if (!this.isAutoScroll) {
          this.uniforms.uProgress.value = 0;
          const e = 3;
          gsap.delayedCall(e * .9, async () => {});
        }
        c.emit("changeScene", "AboutBirdsEye");
      }
    }), this.on("top:startTransition:aboutSky", (t = !1) => {
      !t && this.nextScene === "AboutSky" || t && this.nextScene === "AboutBirdsEye" || (this.startPositionNext = Qt, this.endPositionNext = Jt, this.distanceNext = Ci, this.isChangeSection = !1, t ? this.uniforms.uProgress.value = 1 : this.isAutoScroll, c.emit("changeScene", "AboutSky"));
    }), this.on("top:startTransition:news", (t = !1) => {
      !t && this.nextScene === "News" || t && this.nextScene === "AboutSky" || (this.startPositionNext = Pi, this.endPositionNext = Ie, this.distanceNext = _i, this.isChangeSection = !0, t ? (this.changeSection("About"), this.uniforms.uProgress.value = 1) : this.isAutoScroll || (this.uniforms.uProgress.value = 0), c.emit("changeScene", "News"));
    }), this.on("top:startTransition:footer", (t = !1) => {
      !t && this.nextScene === "Footer" || t && this.nextScene === "News" || (this.startPositionNext = Oi, this.endPositionNext = ot, this.distanceNext = Ai, this.isChangeSection = !0, t ? (this.isFooter = !1, this.changeSection("News"), this.uniforms.uProgress.value = 1, this.animatedScroll = this.toPosition = Ei - 1) : (this.isAutoScroll || (this.isFooter = !0, this.timeScaleFooter = 1), c.emit("changeScene", "Footer")));
    }), this.on("top:arriveAtFooter", () => {
      this.animatedScroll = this.toPosition = ot, this.scroll();
    }), this.on("top:showCompleteFooter", () => {
      this.isFooter = !1;
    }), this.on("top:autoScroll", (t, e = {}) => {
      this.isAutoScroll = !0, "duration" in e || (e.duration = 2), typeof e.ease == "string" ? e.ease = K[e.ease] : "ease" in e || (e.ease = K.none), this.scrollAuto(t, e);
    }), this.on("top:goToAnchor", t => {
      let e, s;
      switch (t) {
        case "top":
          e = "kv", s = be;
          break;
        case "intro":
          e = t, s = we;
          break;
        case "solution":
          e = "service", s = kt;
          break;
        case "about":
          e = t, s = Ct;
          break;
        case "news":
          e = t, s = Ie;
          break;
        case "footer":
          e = t, s = ot;
          break;
      }
      c.emit(`top:startTransition:${e}`), c.emit("top:autoScroll", s, {
        duration: .1
      }), this.gl = null;
    }), this.on("startTopPageScroll", () => {
      this.isRunScroll = !0;
    }), r.enableStats && (this.stats = new ps(), document.body.appendChild(this.stats.dom));
  }
  initPostprocessing() {
    this.postprocessing.scene = new Z(), this.postprocessing.camera = new it();
    const o = this.width * this.pixelRatio,
      t = this.height * this.pixelRatio;
    this.renderTargets = new X(o, t, {
      type: Y
    }), this.renderTargetNext = new X(o, t, {
      type: Y
    });
    const e = D({
      tCurrent: this.renderTargets.texture,
      tNext: this.renderTargetNext.texture,
      maxblur: 15,
      uProgress: 1,
      uFishEyeLens: -3.7,
      uFishEyeLensStartTiming: 3.6,
      uIsNext: !1,
      uResolutionObject: new R(this.width, this.height)
    });
    this.motionBlurUniformsWithoutValue = F(e);
    const s = new Ne({
        uniforms: e,
        vertexShader: Re,
        fragmentShader: Ls,
        defines: {
          samples: $t ? 10 : 20,
          samplesDepth: $t ? 5 : 10
        }
      }),
      i = this.postprocessing.mesh = new P(vt, s);
    this.sceneMotionBlur.add(i);
    const n = {
        tCopy: {
          value: this.renderTargets.texture
        }
      },
      l = new Ne({
        uniforms: n,
        vertexShader: Re,
        fragmentShader: Ms
      });
    this.copyUniformsWithoutValue = F(n);
    const u = new Li(vt, l);
    this.sceneCopy.add(u);
  }
  initPostprocessingKv() {
    this.postprocessingKv.scene = new Z(), this.postprocessingKv.camera = new it();
    const o = this.width * this.pixelRatio,
      t = this.height * this.pixelRatio;
    this.renderTargetKv = new X(o, t, {
      type: Y
    }), this.renderTargetNextKv = new X(o, t, {
      type: Y
    });
    const e = this.isSp ? Ve : Ke,
      s = ke(e.src),
      i = D({
        uFramebuffer: this.renderTargetKv.texture,
        uFramebufferNext: this.renderTargetNextKv.texture,
        uTime: 0,
        uProgress: 1,
        uShape: s,
        uResolutionImage: new R(e.width, e.height),
        uResolutionObject: new R(this.width, this.height),
        uIsCharge: !1
      });
    this.uniformsKv = F(i);
    const n = new b({
      uniforms: i,
      vertexShader: C,
      fragmentShader: Es
    });
    this.postprocessingKv.mesh = new P(vt, n), this.postprocessingKv.scene.add(this.postprocessingKv.mesh);
  }
  initPostprocessingSky() {
    this.postprocessingSky.scene = new Z(), this.postprocessingSky.camera = new it();
    const o = this.width * this.pixelRatio,
      t = this.height * this.pixelRatio;
    this.renderTargetSky = new X(o, t, {
      type: Y
    }), this.renderTargetNextSky = new X(o, t, {
      type: Y
    });
    const e = ke(wt.src),
      s = D({
        uFramebuffer: this.renderTargetSky.texture,
        uFramebufferNext: this.renderTargetNextSky.texture,
        uTime: 0,
        uProgress: 0,
        uCloudTexture: e,
        uResolutionImage: new R(wt.width, wt.height),
        uResolutionObject: new R(this.width, this.height)
      });
    this.uniformsSky = F(s);
    const i = new b({
      uniforms: s,
      vertexShader: C,
      fragmentShader: Ds
    });
    this.postprocessingSky.mesh = new P(vt, i), this.postprocessingSky.scene.add(this.postprocessingSky.mesh);
  }
  startLoading() {
    var _this$glNext;
    r.pageId !== "pageTop" || this.nextScene !== "Kv" || ((_this$glNext = this.glNext) === null || _this$glNext === void 0 ? void 0 : _this$glNext.startLoading());
  }
  onLoadProgress(o) {
    var _this$glNext2;
    r.pageId !== "pageTop" || this.nextScene !== "Kv" || ((_this$glNext2 = this.glNext) === null || _this$glNext2 === void 0 ? void 0 : _this$glNext2.progressLoading(o));
  }
  onLoadDone() {
    var _this$glNext3, _this$glNext4, _this$glNext5, _this$glNext6, _this$glNext7, _this$glNext8;
    r.pageId === "pageTop" && (this.scroll(), ft || new URL(window.location.href).searchParams.has("skip") ? (ft ? (c.emit("changeScene", this.nextScene, {
      isBack: !1
    }, !0), requestAnimationFrame(() => {
      c.emit("showKv"), c.emit("showHeaderTrigger");
    }), this.isRunScroll = !0, this.scroll(!0)) : (_this$glNext3 = this.glNext) === null || _this$glNext3 === void 0 ? void 0 : _this$glNext3.skipLoading(), (_this$glNext4 = this.glNext) !== null && _this$glNext4 !== void 0 && _this$glNext4.showOnInit && (_this$glNext5 = this.glNext) !== null && _this$glNext5 !== void 0 && _this$glNext5.showOnInit(), (_this$glNext6 = this.glNext) !== null && _this$glNext6 !== void 0 && _this$glNext6.start && (_this$glNext7 = this.glNext) !== null && _this$glNext7 !== void 0 && _this$glNext7.start(), ((_this$glNext8 = this.glNext) === null || _this$glNext8 === void 0 ? void 0 : _this$glNext8.showComplete) && this.glNext.showComplete()) : gsap.delayedCall(.2, () => {
      var _this$glNext9;
      (_this$glNext9 = this.glNext) !== null && _this$glNext9 !== void 0 && _this$glNext9.loadDone(), this.isNight || Ss();
    }));
  }
  onResize() {
    var _this$postprocessing, _this$postprocessing$, _this$postprocessingK, _this$postprocessingK2, _this$postprocessingS, _this$postprocessingS2, _this$renderTargets, _this$renderTargetNex, _this$renderTargetKv, _this$renderTargetNex2, _this$renderTargetSky, _this$renderTargetNex3, _this$motionBlurUnifo, _this$uniformsKv, _this$uniformsSky, _this$gl, _this$glNext10;
    super.onResize();
    const o = this.width * this.pixelRatio,
      t = this.height * this.pixelRatio;
    (_this$postprocessing = this.postprocessing) !== null && _this$postprocessing !== void 0 && (_this$postprocessing = _this$postprocessing.camera) !== null && _this$postprocessing !== void 0 && _this$postprocessing.resize(this.width, this.height), (_this$postprocessing$ = this.postprocessing.mesh) !== null && _this$postprocessing$ !== void 0 && _this$postprocessing$.scale.set(this.width, this.height, 1), (_this$postprocessingK = this.postprocessingKv) !== null && _this$postprocessingK !== void 0 && (_this$postprocessingK = _this$postprocessingK.camera) !== null && _this$postprocessingK !== void 0 && _this$postprocessingK.resize(this.width, this.height), (_this$postprocessingK2 = this.postprocessingKv.mesh) !== null && _this$postprocessingK2 !== void 0 && _this$postprocessingK2.scale.set(this.width, this.height, 1), (_this$postprocessingS = this.postprocessingSky) !== null && _this$postprocessingS !== void 0 && (_this$postprocessingS = _this$postprocessingS.camera) !== null && _this$postprocessingS !== void 0 && _this$postprocessingS.resize(this.width, this.height), (_this$postprocessingS2 = this.postprocessingSky.mesh) !== null && _this$postprocessingS2 !== void 0 && _this$postprocessingS2.scale.set(this.width, this.height, 1), (_this$renderTargets = this.renderTargets) !== null && _this$renderTargets !== void 0 && _this$renderTargets.setSize(o, t), (_this$renderTargetNex = this.renderTargetNext) !== null && _this$renderTargetNex !== void 0 && _this$renderTargetNex.setSize(o, t), (_this$renderTargetKv = this.renderTargetKv) !== null && _this$renderTargetKv !== void 0 && _this$renderTargetKv.setSize(o, t), (_this$renderTargetNex2 = this.renderTargetNextKv) !== null && _this$renderTargetNex2 !== void 0 && _this$renderTargetNex2.setSize(o, t), (_this$renderTargetSky = this.renderTargetSky) !== null && _this$renderTargetSky !== void 0 && _this$renderTargetSky.setSize(o, t), (_this$renderTargetNex3 = this.renderTargetNextSky) !== null && _this$renderTargetNex3 !== void 0 && _this$renderTargetNex3.setSize(o, t), (_this$motionBlurUnifo = this.motionBlurUniformsWithoutValue) !== null && _this$motionBlurUnifo !== void 0 && _this$motionBlurUnifo.uResolutionObject.value.set(o, t), (_this$uniformsKv = this.uniformsKv) !== null && _this$uniformsKv !== void 0 && _this$uniformsKv.uResolutionObject.value.set(o, t), (_this$uniformsSky = this.uniformsSky) !== null && _this$uniformsSky !== void 0 && _this$uniformsSky.uResolutionObject.value.set(o, t), (_this$gl = this.gl) !== null && _this$gl !== void 0 && _this$gl.resize(this.width, this.height, this.pixelRatio), (_this$glNext10 = this.glNext) === null || _this$glNext10 === void 0 ? void 0 : _this$glNext10.resize(this.width, this.height, this.pixelRatio);
  }
  onTick(o, t, e) {
    if (!this.isBlurWindow) {
      var _this$stats, _this$stats2;
      if ((_this$stats = this.stats) !== null && _this$stats !== void 0 && _this$stats.begin(), this.time = o % 1e3, this.deltaTime = t, this.frame = e % 1e3, this.isRunningScroll) {
        let s = !1;
        if (!this.duration && this.lerp) this.positionValue = Dt(this.positionValue, this.toPosition, this.lerp), Math.round(this.positionValue) === this.toPosition && (this.positionValue = this.toPosition, s = !0), this.storedDeltaY = Dt(this.storedDeltaY, 0, this.lerp);else {
          this.currentTime += t * .001;
          const i = si(this.currentTime / this.duration, 0, 1);
          s = i >= 1;
          const n = s ? 1 : this.easing(i);
          this.positionValue = this.fromPosition + (this.toPosition - this.fromPosition) * n, this.storedDeltaY = this.storedDeltaY - this.storedDeltaY * n;
        }
        this.positionValue < 0 && (this.positionValue = 0), this.velocity = this.deltaY = this.positionValue - this.animatedScroll, this.animatedScroll = this.positionValue, this.scroll(), this.animatedScroll >= Kt && (this.animatedScroll = V(this.animatedScroll, Kt)), this.programmatic && (this.targetScroll = this.positionValue), s && (this.velocity = 0, this.onScrollComplete && this.onScrollComplete(), this.isRunningScroll = !1, this.isAutoScroll = !1, this.programmatic = !1, this.onScrollComplete = null);
      }
      if (this.frame % 3 === 0) {
        const s = this.storedDeltaTime + t;
        if (this.storedDeltaTime = 0, this.gl) {
          if (this.transitionType === "kv") {
            this.gl.tick(this.time, s, this.frame), this.gl.render(this.renderTargetKv), this.glNext.tick(this.time, s, this.frame), this.glNext.render(this.renderTargetNextKv), this.renderer.setRenderTarget(null);
            const i = this.postprocessingKv;
            this.renderer.render(i.scene, i.camera);
          } else if (this.transitionType === "skyUp") {
            this.isTransitionNext ? (this.glNext.tick(this.time, s, this.frame), this.glNext.render(this.renderTargetNextSky)) : (this.gl.tick(this.time, s, this.frame), this.gl.render(this.renderTargetSky)), this.renderer.setRenderTarget(null);
            const i = this.postprocessingSky;
            this.renderer.render(i.scene, i.camera);
          } else this.isTransitionNext ? (this.glNext.tick(this.time, s, this.frame), this.glNext.render(this.renderTargetNext)) : (this.gl.tick(this.time, s, this.frame), this.gl.render(this.renderTargets)), this.renderer.setRenderTarget(null), this.renderer.clear(), this.motionBlurUniformsWithoutValue.tCurrent.value = this.renderTargets.texture, this.motionBlurUniformsWithoutValue.tNext.value = this.renderTargetNext.texture, this.renderer.render(this.sceneMotionBlur, this.postprocessing.camera);
        } else if (this.glNext.tick(this.time, s, this.frame), this.glNext.render(null), this.isFooter) {
          this.timeScaleFooter = Dt(this.timeScaleFooter, 1, Gs), Math.abs(1 - this.timeScaleFooter) < .001 && (this.timeScaleFooter = 1), this.glNext.timeScale(this.timeScaleFooter);
          return;
        }
      } else this.storedDeltaTime += t;
      (_this$stats2 = this.stats) === null || _this$stats2 === void 0 || _this$stats2.end();
    }
  }
  onVirtualScroll({
    deltaY: o
  }) {
    if (this.isRunScroll && !this.isAutoScroll && !(this.animatedScroll <= be && o < 0)) {
      if (this.direction = r.scrollDirection = Math.sign(o), this.deltaY = Math.min(Math.max(o * zs, -_e), _e), this.isFooter) {
        this.timeScaleFooter += this.deltaY * .02;
        return;
      }
      this.programmatic = !1, this.easing = jt, this.storedDeltaY += this.deltaY, this.scrollAuto(Math.round(Math.max(this.animatedScroll + this.storedDeltaY, 0)), {
        duration: 0
      });
    }
  }
  scrollAuto(o, t) {
    const {
      duration: e = .5,
      ease: s = jt,
      onComplete: i
    } = t || {};
    this.deltaY = 0, this.duration = e * (r.isFastMode ? .5 : 1), this.easing = s, this.fromPosition = this.positionValue = this.animatedScroll, this.toPosition = o, this.programmatic = !0, this.isRunningScroll = !0, this.currentTime = 0, this.onScrollComplete = () => {
      this.animatedScroll = o, this.scroll(), i && i();
    };
  }
  scroll(o = !1) {
    var _this$gl2, _this$glNext11, _this$glNext12, _this$HeaderEnergy;
    if (this.isFooter) return;
    if ((_this$gl2 = this.gl) !== null && _this$gl2 !== void 0 && _this$gl2.scroll && this.gl.scroll(this.animatedScroll, this.deltaY, o), (_this$glNext11 = this.glNext) !== null && _this$glNext11 !== void 0 && _this$glNext11.scroll && this.glNext.scroll(this.animatedScroll, this.deltaY, o), this.animatedScroll >= this.endPositionNext || this.isToKv && this.animatedScroll === 0) this.isRunTransition && (this.isRunTransition = !1, this.isTransitionNext = !1, this.isChangeSection = !1, this.isToKv = !1, this.uniforms.uProgress.value = 1, (_this$glNext12 = this.glNext) !== null && _this$glNext12 !== void 0 && _this$glNext12.showComplete && this.glNext.showComplete(), this.disposeGl(this.nextScene));else if (this.startPositionNext < this.animatedScroll && this.animatedScroll < this.endPositionNext) {
      var _this$gl4, _this$gl5, _this$glNext13, _this$glNext14, _this$gl6, _this$gl7, _this$glNext15, _this$glNext16, _this$gl8, _this$gl9, _this$glNext17, _this$glNext18, _this$gl10, _this$gl11, _this$glNext19, _this$glNext20, _this$gl12, _this$gl13;
      const e = this.currentScene === "News" && this.nextScene === "Footer" || this.currentScene === "Footer" && this.nextScene === "News";
      if (!this.isRunTransition) {
        this.isRunTransition = !0;
        const i = this.direction === -1;
        if (this.isTransitionNext = this.isTransitionStartBack = i, !e) if (i && !this.gl) {
          var _this$gl3;
          const n = this.currentScene === "Footer" ? "News" : this.currentScene;
          this.gl = this[`gl${n}`], this.gl || (this.gl = this[`gl${n}`] = j[n].create(this.el, {
            isForce: !0,
            renderer: this.renderer,
            camera: this.camera,
            width: this.width,
            height: this.height,
            pixelRatio: this.pixelRatio,
            isNight: !i && this.nextScene === "Kv" || i && this.nextScene === "Footer" ? !this.isNight : this.isNight
          }, n)), (_this$gl3 = this.gl) !== null && _this$gl3 !== void 0 && _this$gl3.resize(this.width, this.height, this.pixelRatio), this.gl.restore && this.gl.restore(), this.gl.start && this.gl.start(!0), this.gl.tick(this.time, this.deltaTime, this.frame), this.gl.render(this.transitionType === "skyUp" ? this.renderTargetSky : this.renderTargets);
        } else i || (this.gl && (this.gl.tick(this.time, this.deltaTime, this.frame), this.gl.render(this.transitionType === "skyUp" ? this.renderTargetSky : this.renderTargets), this.gl.startTransitionOut && this.gl.startTransitionOut()), requestAnimationFrame(() => {
          this.glNext.start && this.glNext.start(), this.glNext.tick(this.time, this.deltaTime, this.frame), this.glNext.render(this.transitionType === "skyUp" ? this.renderTargetNextSky : this.renderTargetNext);
        }));
      }
      const s = (this.animatedScroll - this.startPositionNext) / this.distanceNext;
      !this.isTransitionNext && s > .5 ? (this.isTransitionNext = !0, this.uniforms.uIsNext && (this.uniforms.uIsNext.value = !0), this.isTransitionStartBack ? (this.isChangeSection && (this.component.show(), this.componentNext.hide()), (_this$gl4 = this.gl) !== null && _this$gl4 !== void 0 && _this$gl4.show && (_this$gl5 = this.gl) !== null && _this$gl5 !== void 0 && _this$gl5.show(), !e && ((_this$glNext13 = this.glNext) === null || _this$glNext13 === void 0 ? void 0 : _this$glNext13.hide) && ((_this$glNext14 = this.glNext) === null || _this$glNext14 === void 0 ? void 0 : _this$glNext14.hide())) : (this.isChangeSection && (this.component.hide(), this.componentNext.show()), (_this$gl6 = this.gl) !== null && _this$gl6 !== void 0 && _this$gl6.hide && (_this$gl7 = this.gl) !== null && _this$gl7 !== void 0 && _this$gl7.hide(), !e && ((_this$glNext15 = this.glNext) === null || _this$glNext15 === void 0 ? void 0 : _this$glNext15.show) && ((_this$glNext16 = this.glNext) === null || _this$glNext16 === void 0 ? void 0 : _this$glNext16.show())), this.isKvNext || (this.glNext.tick(this.time, this.deltaTime, this.frame), this.glNext.render(this.transitionType === "skyUp" ? this.renderTargetNextSky : this.renderTargetNext))) : this.isTransitionNext && s <= .5 && (this.isTransitionNext = !1, this.uniforms.uIsNext && (this.uniforms.uIsNext.value = !1), this.isTransitionStartBack ? (this.isChangeSection && (this.component.hide(!0), this.componentNext.show(!0)), (_this$gl8 = this.gl) !== null && _this$gl8 !== void 0 && _this$gl8.show && (_this$gl9 = this.gl) !== null && _this$gl9 !== void 0 && _this$gl9.show(!0), ((_this$glNext17 = this.glNext) === null || _this$glNext17 === void 0 ? void 0 : _this$glNext17.hide) && ((_this$glNext18 = this.glNext) === null || _this$glNext18 === void 0 ? void 0 : _this$glNext18.hide(!0))) : (this.isChangeSection && (this.component.show(!0), this.componentNext.hide(!0)), (_this$gl10 = this.gl) !== null && _this$gl10 !== void 0 && _this$gl10.hide && (_this$gl11 = this.gl) !== null && _this$gl11 !== void 0 && _this$gl11.hide(!0), ((_this$glNext19 = this.glNext) === null || _this$glNext19 === void 0 ? void 0 : _this$glNext19.show) && ((_this$glNext20 = this.glNext) === null || _this$glNext20 === void 0 ? void 0 : _this$glNext20.show(!0))), this.isKvNext || ((_this$gl12 = this.gl) !== null && _this$gl12 !== void 0 && _this$gl12.tick(this.time, this.deltaTime, this.frame), (_this$gl13 = this.gl) === null || _this$gl13 === void 0 ? void 0 : _this$gl13.render(this.transitionType === "skyUp" ? this.renderTargetSky : this.renderTargets))), this.updateTransition(s);
    } else if (this.animatedScroll <= this.startPositionNext && this.isRunTransition) {
      var _this$gl14;
      this.isRunTransition = !1, this.isTransitionNext = !1, this.isChangeSection = !1;
      const e = this.direction === -1;
      (_this$gl14 = this.gl) !== null && _this$gl14 !== void 0 && _this$gl14.showComplete && this.gl.showComplete(e), e && this.disposeGl(this.nextScene, !0);
    }
    const t = this.animatedScroll < lt || this.animatedScroll >= ot ? 1 - Vt : this.animatedScroll <= Yt ? (1 - Math.max(this.animatedScroll - lt, 0) / Oe) * (1 - Vt) : this.animatedScroll <= pt ? 0 : Math.max(this.animatedScroll - pt, 0) / this.scrollLimit * (1 - Vt);
    (_this$HeaderEnergy = this.HeaderEnergy) === null || _this$HeaderEnergy === void 0 || _this$HeaderEnergy.scroll(t);
  }
  updateTransition(o) {
    var _this$gl15, _this$gl16, _this$gl17, _this$gl18, _this$glNext21, _this$glNext22;
    this.uniforms.uProgress.value = this.nextScene === "Intro" ? Math.max(o - .7, 0) / (1 - .7) : this.nextScene === "IntroCharging" ? Math.max(o - .22, 0) / (1 - .22) : o, (_this$gl15 = this.gl) !== null && _this$gl15 !== void 0 && _this$gl15.makeTransitionOut && (_this$gl16 = this.gl) !== null && _this$gl16 !== void 0 && _this$gl16.makeTransitionOut(Math.min(o / Wt, 1)), (_this$gl17 = this.gl) !== null && _this$gl17 !== void 0 && _this$gl17.makeTransitionOutFull && (_this$gl18 = this.gl) !== null && _this$gl18 !== void 0 && _this$gl18.makeTransitionOutFull(o), ((_this$glNext21 = this.glNext) === null || _this$glNext21 === void 0 ? void 0 : _this$glNext21.makeTransitionIn) && ((_this$glNext22 = this.glNext) === null || _this$glNext22 === void 0 ? void 0 : _this$glNext22.makeTransitionIn(Math.max(o - (1 - Wt), 0) / Wt));
  }
  getTransitionType(o) {
    switch (o) {
      case "Intro":
      case "IntroCharging":
        switch (this.uniforms = this.uniformsKv, o) {
          case "Intro":
            this.uniforms.uIsCharge.value = !1;
            break;
          case "IntroCharging":
            this.uniforms.uIsCharge.value = !0;
            break;
        }
        return "kv";
      case "AboutSky":
        return this.uniforms = this.uniformsSky, "skyUp";
      default:
        return this.uniforms = this.motionBlurUniformsWithoutValue, "default";
    }
  }
  detectIsKvNext(o) {
    this.transitionType = this.getTransitionType(o), this.isKvNext = o === "Intro" || o === "IntroCharging";
  }
  changeScene(o, {
    isBack: t = !1
  } = {}) {
    var _this$gl19, _this$gl20, _this$gl21, _this$glNext23, _this$glNext24, _this$glNext25;
    if (this.detectIsKvNext(o), o === this.nextScene) return;
    this.currentScene = r.currentScene = _[V(_.findIndex(n => n === o) - 1, _.length)], this.nextScene = r.nextScene = o;
    const e = !t && this.nextScene === "Kv" || t && this.nextScene === "Footer" ? !this.isNight : this.isNight,
      s = this.currentScene === "Footer" ? "News" : this.currentScene;
    t ? this.gl = null : this.currentScene === "News" && this.nextScene === "Footer" || this.currentScene === "Footer" && this.nextScene === "News" || (this.gl = this[`gl${s}`], this.gl || (this.gl = this[`gl${s}`] = j[s].create(this.el, {
      isForce: !0,
      renderer: this.renderer,
      camera: this.camera,
      width: this.width,
      height: this.height,
      pixelRatio: this.pixelRatio,
      isNight: !t && this.currentScene === "Kv" || t && this.currentScene === "Footer" ? !this.isNight : this.isNight
    }, s)), (_this$gl19 = this.gl) !== null && _this$gl19 !== void 0 && _this$gl19.resize(this.width, this.height, this.pixelRatio), ((_this$gl20 = this.gl) === null || _this$gl20 === void 0 ? void 0 : _this$gl20.restore) && ((_this$gl21 = this.gl) === null || _this$gl21 === void 0 ? void 0 : _this$gl21.restore()));
    const i = this.nextScene === "Footer" ? "News" : this.nextScene;
    switch (this.glNext = this[`gl${i}`], this.glNext || (this.glNext = this[`gl${i}`] = j[i].create(this.el, {
      isForce: !0,
      renderer: this.renderer,
      camera: this.camera,
      width: this.width,
      height: this.height,
      pixelRatio: this.pixelRatio,
      isNight: e
    }, i)), (_this$glNext23 = this.glNext) !== null && _this$glNext23 !== void 0 && _this$glNext23.resize(this.width, this.height, this.pixelRatio), (_this$glNext24 = this.glNext) !== null && _this$glNext24 !== void 0 && _this$glNext24.restore && (_this$glNext25 = this.glNext) !== null && _this$glNext25 !== void 0 && _this$glNext25.restore(), this.isNight = e, this.nextScene) {
      case "Kv":
        this.changeSection("Kv");
        break;
      case "Intro":
      case "IntroCharging":
        this.changeSection("Intro");
        break;
      case "Service":
      case "ServiceOpposite":
        this.changeSection("Service");
        break;
      case "About":
      case "AboutBirdsEye":
      case "AboutSky":
        this.changeSection("About");
        break;
      case "News":
        this.changeSection("News");
        break;
      case "Footer":
        this.changeSection("Footer");
        break;
    }
  }
  changeSection(o) {
    o !== this.currentSection && (this.component = r.components[`top${this.currentSection}`], this.componentNext = r.components[`top${o}`], c.emit("changeSection", this.currentSection, o), this.currentSection = o);
  }
  changeGl(o = !1, t = !1) {
    var _this$gl22;
    const e = this.currentScene === "Footer" ? "News" : this.currentScene;
    this.gl = this[`gl${e}`], !t && !this.gl && (this.gl = this[`gl${e}`] = j[e].create(this.el, {
      isForce: !0,
      renderer: this.renderer,
      camera: this.camera,
      width: this.width,
      height: this.height,
      pixelRatio: this.pixelRatio
    }, e), (_this$gl22 = this.gl) !== null && _this$gl22 !== void 0 && _this$gl22.resize(this.width, this.height, this.pixelRatio), this.gl.restore && this.gl.restore(), this.gl.start && this.gl.start(o), this.gl.tick(this.time, this.deltaTime, this.frame), this.gl.render(this.transitionType === "kv" ? this.renderTargetKv : this.transitionType === "skyUp" ? this.renderTargetSky : this.renderTargets));
  }
  changeNextGl(o = !1) {
    var _this$glNext26;
    const t = this.nextScene === "Footer" ? "News" : this.nextScene;
    this.glNext = this[`gl${t}`], this.glNext || (this.glNext = this[`gl${t}`] = j[t].create(this.el, {
      isForce: !0,
      renderer: this.renderer,
      camera: this.camera,
      width: this.width,
      height: this.height,
      pixelRatio: this.pixelRatio
    }, t), (_this$glNext26 = this.glNext) !== null && _this$glNext26 !== void 0 && _this$glNext26.resize(this.width, this.height, this.pixelRatio), this.glNext.restore && this.glNext.restore(), this.glNext.start && this.glNext.start(o), this.glNext.tick(this.time, this.deltaTime, this.frame), this.glNext.render(this.transitionType === "kv" ? this.renderTargetKv : this.transitionType === "skyUp" ? this.renderTargetSky : this.renderTargets));
  }
  disposeGl(o, t = !1) {
    const e = _[V(_.findIndex(n => n === o) - 1 * (t ? -1 : 1), _.length)],
      s = _[V(_.findIndex(n => n === e) - 1 * (t ? -1 : 1), _.length)],
      i = _[V(_.findIndex(n => n === s) - 1 * (t ? -1 : 1), _.length)];
    {
      const n = `gl${s === "Footer" ? "News" : s}`,
        l = this[n];
      l && (l.dispose(), l.destroy(), this[n] = null);
    }
    {
      const n = `gl${i === "Footer" ? "News" : i}`,
        l = this[n];
      l && (l.dispose(), l.destroy(), this[n] = null);
    }
    this.gl = null, t || e === "AboutSky" && o === "News" || setTimeout(() => {
      const n = _[V(_.findIndex(a => a === o) + 1, _.length)],
        l = n === "Footer" ? "News" : n;
      let u = this[`gl${l}`];
      u || (u = this[`gl${l}`] = j[l].create(this.el, {
        isForce: !0,
        renderer: this.renderer,
        camera: this.camera,
        width: this.width,
        height: this.height,
        pixelRatio: this.pixelRatio,
        isNight: !t && n === "Kv" || t && n === "Footer" ? !this.isNight : this.isNight
      }, l)), u.show && u.show();
      const d = this.getTransitionType(n);
      u.render(d === "kv" ? this.renderTargetNextKv : d === "skyUp" ? this.renderTargetNextSky : this.renderTargetNext);
    }, 160);
  }
  detectPlay(o = r.pageId) {
    o === "pageTop" ? (this.isInit || this.initGl(), this.stats && (this.stats.dom.style.display = ""), this.playTick(), ni()) : (this.stats && (this.stats.dom.style.display = "none"), this.pauseTick(), this.renderer && this.renderer.clear(), oi());
  }
  onEnterReady(o, t) {
    this.detectPlay(o);
  }
}, _defineProperty(_Class7, "componentName", "GL"), _defineProperty(_Class7, "isLocal", !0), _Class7).register();
(_Class8 = class extends ri {
  onInit() {
    this.arrowDefault = this.refs["arrow-default"], this.arrowHover = this.refs["arrow-hover"], this.el.dataset.container ? this.mouseEventTarget = this.el.closest("." + this.el.dataset.container) : this.mouseEventTarget = this.el, this.onMouseenter = ai(this.mouseEventTarget, this.mouseenterHandler.bind(this)), this.onMouseenter = li(this.mouseEventTarget, this.mouseleaveHandler.bind(this));
  }
  mouseenterHandler() {
    this.mouseEventTarget.classList.remove("-hoverButton", "-hoverButtonComplete", "-blurButton"), setTimeout(() => this.mouseEventTarget.classList.add("-hoverButton"), 100), this.hoverTween && this.hoverTween.kill(), this.hoverTween = x.to(this.el, {
      duration: .8,
      onComplete: () => {
        this.mouseEventTarget.classList.add("-hoverButtonComplete");
      }
    });
  }
  mouseleaveHandler() {
    this.mouseEventTarget.classList.remove("-hoverButton"), this.mouseEventTarget.classList.add("-hoverButtonComplete"), setTimeout(() => this.mouseEventTarget.classList.add("-blurButton"), 100), this.hoverTween && this.hoverTween.kill(), this.hoverTween = x.to(this.el, {
      duration: .8,
      onComplete: () => {
        this.mouseEventTarget.classList.remove("-hoverButton", "-hoverButtonComplete", "-blurButton");
      }
    });
  }
  onDestroy() {
    this.hoverTween && (this.hoverTween.kill(), this.hoverTween = void 0);
  }
}, _defineProperty(_Class8, "componentName", "ButtonTop"), _Class8).register();