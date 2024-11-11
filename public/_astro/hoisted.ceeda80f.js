var _Class, _Class2, _Class3, _Class4, _Class5, _Class6;
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
import {
  P as S,
  C as m,
  S as w,
  a as o,
  g as n,
  m as d,
  i as c,
  M as b,
  V as x
} from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
import "./AnchorLinks.astro_astro_type_script_index_0_lang.7092990b.js";
import { L as E } from "./Local.454029b8.js";
import {
  T as f,
  O as T,
  l as I,
  aO as k,
  h as y,
  c as L,
  V as g,
  a as M,
  R as C,
  t as R,
  P as _,
  M as A
} from "./constants.e6c90e33.js";
import { I as P } from "./Intro.1426c987.js";
import "./LowerTitle.astro_astro_type_script_index_0_lang.f9bd55d6.js";
import "./IconList.astro_astro_type_script_index_0_lang.802c6ccd.js";
import "./project.49f9dddf.js";
import "./lottie.bd4b17b2.js";
(class extends S {}).register();
((_Class = class extends E {
  onResize() {
    const t = this.refs.item,
      e = {
        root: null,
        rootMargin: "0% 0% -100% 0%",
        threshold: 0
      },
      i = (r) => {
        r.forEach((a) => {
          a.isIntersecting
            ? a.target.classList.add("-entry")
            : a.target.classList.remove("-entry");
        });
      },
      s = new IntersectionObserver(i, e);
    (Array.isArray(t) ? t : [t]).forEach((r) => {
      s.observe(r);
    });
  }
}),
_defineProperty(_Class, "componentName", "Feature"),
_Class).register();
((_Class2 = class extends m {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "isScrollEnter", !1);
  }
  onInit() {
    var _this$el, _this$el2;
    (this.mainTxt = this.refs.titleTxt),
      (this.subTxt =
        (_this$el = this.el) === null || _this$el === void 0
          ? void 0
          : _this$el.querySelector(".subTxt")),
      (this.ankerLinks =
        (_this$el2 = this.el) === null || _this$el2 === void 0
          ? void 0
          : _this$el2.querySelector(".AnchorLinks")),
      (this.GL = document.querySelector(".GL")),
      (this.eventBlurVal = {
        progress: 0
      }),
      (this.blurEvent = new CustomEvent("blurchabge", {
        detail: {
          progress: () => this.eventBlurVal.progress
        }
      })),
      (this.delayMax = 0.5),
      (this.delayArray = []),
      (this.splitTarget = new w(
        this.el.querySelector(".mainTxt").querySelectorAll("span"),
        {
          type: "chars",
          charsClass: "SectionTitle-splitTxt"
        }
      )),
      this.splitTarget.chars.forEach((t, e) => {
        this.delayArray.push(this.delayMax * o.utils.random(0, 1));
      });
  }
  onIntersect({ isIntersecting: t }) {
    t
      ? ((this.mainTxt.style.willChange = "opacity,filter"),
        (this.subTxt.style.willChange = "opacity,filter"),
        (this.ankerLinks.style.willChange = "opacity,filter"),
        this.splitTarget.chars.forEach((e, i) => {
          e.style.willChange = "transform,opacity,filter";
        }),
        this.playScroll())
      : (this.pauseScroll(),
        (this.mainTxt.style.willChange = ""),
        (this.subTxt.style.willChange = ""),
        (this.ankerLinks.style.willChange = ""),
        this.splitTarget.chars.forEach((e, i) => {
          e.style.willChange = "";
        }));
  }
  onScroll({ scroll: t }) {
    if (this.scrollStart <= t && t <= this.scrollEnd) {
      this.isScrollEnter || (this.isScrollEnter = !0);
      const e = Math.min(Math.max(1 - (t / this.scrollDistance) * 2, 0), 1),
        i = Math.max((t / this.scrollDistance) * 2 * 5, 0);
      (this.mainTween = n.scrub(this.mainTxt, {
        opacity: `${e}`,
        filter: `blur(${i}px)`,
        duration: 0.2
      })),
        (this.subTween = n.scrub(this.subTxt, {
          opacity: `${e}`,
          filter: `blur(${i}px)`,
          duration: 0.2
        })),
        (this.ankerTween = n.scrub(this.ankerLinks, {
          opacity: `${e}`,
          filter: `blur(${i}px)`,
          duration: 0.2
        })),
        (this.splitTween = n.scrub(this.splitTarget.chars, {
          opacity: (s, r, a) =>
            Math.min(Math.max(e * 2 - this.delayArray[s], 0), 1),
          filter: (s, r, a) =>
            `blur(${Math.max((1 - e) * 2 - this.delayArray[s], 0) * 5}px)`,
          transform: (s, r, a) =>
            `translateZ(${
              Math.max((1 - e) * 2 - this.delayArray[s], 0) * 12
            }vw)`,
          duration: 0.2
        })),
        (this.glTween = n.scrub(this.eventBlurVal, {
          progress: e,
          duration: 0.2,
          onUpdate: () => {
            this.GL.dispatchEvent(this.blurEvent);
          }
        }));
    } else
      this.isScrollEnter &&
        t > 0 &&
        ((this.isScrollEnter = !1),
        (this.mainTween = n.scrub(this.mainTxt, {
          opacity: "0",
          filter: "blur(5px)",
          duration: 0.2
        })),
        (this.subTween = n.scrub(this.subTxt, {
          opacity: "0",
          filter: "blur(5px)",
          duration: 0.2
        })),
        (this.ankerTween = n.scrub(this.ankerLinks, {
          opacity: "0",
          filter: "blur(5px)",
          duration: 0.2
        })),
        (this.splitTween = n.scrub(this.splitTarget.chars, {
          opacity: function (e, i, s) {
            return 0;
          },
          filter: (e, i, s) => `blur(${(2 - this.delayArray[e]) * 5}px)`,
          transform: (e, i, s) =>
            `translateZ(${Math.max(2 - this.delayArray[e], 0) * 12}vw)`,
          duration: 0.2
        })),
        (this.glTween = n.scrub(this.eventBlurVal, {
          progress: 0,
          duration: 0.2,
          onUpdate: () => {
            this.GL.dispatchEvent(this.blurEvent);
          }
        })));
  }
  onResize({ windowWidth: t, windowHeight: e }) {
    const { scrollY: i } = this,
      { bottom: s } = this.el.getBoundingClientRect();
    (this.scrollStart = 0),
      (this.scrollEnd = s + i),
      (this.scrollDistance = this.scrollEnd - this.scrollStart);
  }
}),
_defineProperty(_Class2, "componentName", "FV"),
_defineProperty(_Class2, "selectorRoot", "[data-parallax-fv]"),
_Class2).register();
((_Class3 = class extends m {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "isScrollEnter", !1);
  }
  onInit() {}
  onIntersect({ isIntersecting: t }) {
    t ? this.playScroll() : this.pauseScroll();
  }
  onScroll({ scroll: t }) {
    this.scrollStart <= t && t <= this.scrollEnd
      ? (this.isScrollEnter || (this.isScrollEnter = !0),
        (t - this.scrollStart) / this.scrollDistance - 1)
      : this.isScrollEnter && (this.isScrollEnter = !1);
  }
  getNum(t) {
    const e = /[^0-9]/g,
      i = t.replace(e, "");
    return parseInt(i);
  }
  onResize({ windowWidth: t, windowHeight: e }) {
    const { scrollY: i } = this,
      { top: s, bottom: r, height: a } = this.el.getBoundingClientRect();
    (this.scrollStart = s + i - e),
      (this.scrollEnd = r + i),
      (this.scrollDistance = this.scrollEnd - this.scrollStart);
  }
}),
_defineProperty(_Class3, "componentName", "SecondView"),
_defineProperty(_Class3, "selectorRoot", "[data-parallax-thoughts]"),
_Class3).register();
((_Class4 = class extends f {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "stats", void 0);
    _defineProperty(this, "gl", void 0);
    _defineProperty(this, "isInit", !1);
    _defineProperty(this, "storedDeltaTime", 0);
    _defineProperty(this, "blurChange", (t) => {
      var _this$stats, _this$stats2;
      const e = Math.max(t.detail.progress(), 0);
      this.nowBlur !== e &&
        ((_this$stats = this.stats) !== null &&
          _this$stats !== void 0 &&
          _this$stats.begin(),
        this.gl.blur(e),
        (_this$stats2 = this.stats) !== null &&
          _this$stats2 !== void 0 &&
          _this$stats2.end(),
        (this.nowBlur = e));
    });
  }
  onInit() {
    super.onInit({
      autoClear: !1,
      pixelRatioMax: 1.5,
      alpha: !0
    }),
      (this.nowBlur = 1),
      this.initGl();
  }
  initGl() {
    this.isInit ||
      ((this.isInit = !0),
      this.emitSelfResize(),
      (this.gl = P.create(this.el, {
        renderer: this.renderer,
        camera: this.camera,
        width: this.width,
        height: this.height,
        pixelRatio: this.pixelRatio,
        isLowerPage: !0
      })),
      this.emitSelfResize(),
      this.el.addEventListener("blurchabge", this.blurChange),
      this.gl.render());
  }
  onLoadDone() {
    this.gl.blur(1);
  }
  onResize() {
    var _this$gl;
    super.onResize(),
      (_this$gl = this.gl) === null || _this$gl === void 0
        ? void 0
        : _this$gl.resize(this.width, this.height, this.pixelRatio);
  }
  onIntersect({ isIntersecting: t }, e) {
    t ? this.playTick() : this.pauseTick();
  }
  onTick(t, e, i) {
    if (i % 2 === 0) {
      const s = this.storedDeltaTime + e;
      (this.storedDeltaTime = 0), this.gl.tick(t, s, i), this.gl.render();
    } else this.storedDeltaTime += e;
  }
}),
_defineProperty(_Class4, "componentName", "GL"),
_defineProperty(_Class4, "isLocal", !0),
_defineProperty(_Class4, "isDisableAutoPlayScroll", !0),
_Class4).register();
((_Class5 = class extends m {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "isShow", !1);
    _defineProperty(this, "isHover", !1);
    _defineProperty(this, "isDrag", !1);
    _defineProperty(this, "isAnimate", !1);
    _defineProperty(this, "nowIndex", 0);
    _defineProperty(this, "enableInteract", () => {
      this.isAnimate = !1;
    });
    _defineProperty(this, "onMousedown", (t) => {
      this.isAnimate ||
        (this.isSP || this.el.classList.add("drag"), (this.isDrag = !0));
    });
    _defineProperty(this, "onMouseup", (t) => {
      this.isAnimate ||
        (this.isSP || this.el.classList.remove("drag"), (this.isDrag = !1));
    });
    _defineProperty(this, "btnHover", () => {
      (this.isHover = !0), this.hide();
    });
    _defineProperty(this, "btnLeave", () => {
      (this.isHover = !1), this.show();
    });
    _defineProperty(this, "touchStart", (t) => {
      (this.startX = t.touches[0].pageX), (this.moveX = 0);
    });
    _defineProperty(this, "touchMove", (t) => {
      this.moveX = t.touches[0].pageX - this.startX;
    });
    _defineProperty(this, "touchEnd", (t) => {
      var _this$el3, _this$el4;
      this.isAnimate ||
        (this.moveX < -this.moveValue
          ? (this.disableInteract(),
            (_this$el3 = this.el) !== null &&
              _this$el3 !== void 0 &&
              _this$el3.dispatchEvent(this.slideNextEvent),
            this.changeSlide(!0))
          : this.moveX > this.moveValue &&
            (this.disableInteract(),
            (_this$el4 = this.el) !== null &&
              _this$el4 !== void 0 &&
              _this$el4.dispatchEvent(this.slidePrevEvent),
            this.changeSlide(!1)));
    });
    _defineProperty(this, "btnNext", () => {
      var _this$el5;
      this.isAnimate ||
        (this.disableInteract(),
        (_this$el5 = this.el) !== null &&
          _this$el5 !== void 0 &&
          _this$el5.dispatchEvent(this.slideNextEvent),
        this.changeSlide(!0));
    });
    _defineProperty(this, "btnPrev", () => {
      var _this$el6;
      this.isAnimate ||
        (this.disableInteract(),
        (_this$el6 = this.el) !== null &&
          _this$el6 !== void 0 &&
          _this$el6.dispatchEvent(this.slidePrevEvent),
        this.changeSlide(!1));
    });
  }
  onInit() {
    var _this$el7,
      _this$el8,
      _this$el9,
      _this$el10,
      _this$el11,
      _this$el12,
      _this$el13,
      _this$el14,
      _this$el15,
      _this$el16,
      _this$el17,
      _this$el18,
      _this$el19,
      _this$el20;
    (this.isSP = d.isSp),
      (this.mouseStorker =
        (_this$el7 = this.el) === null || _this$el7 === void 0
          ? void 0
          : _this$el7.querySelector(".mouse_storker")),
      (this.mouseArrow =
        (_this$el8 = this.el) === null || _this$el8 === void 0
          ? void 0
          : _this$el8.querySelector(".arrow_storker")),
      (this.hoverTarget =
        (_this$el9 = this.el) === null || _this$el9 === void 0
          ? void 0
          : _this$el9.querySelectorAll("a")),
      (this.sliders =
        (_this$el10 = this.el) === null || _this$el10 === void 0
          ? void 0
          : _this$el10.querySelectorAll(".SliderChild")),
      (this.sliderNum_current =
        (_this$el11 = this.el) === null || _this$el11 === void 0
          ? void 0
          : _this$el11.querySelector(".sliderNum_current")),
      (this.sliderNum_current.textContent = ("00" + this.nowIndex + 1).slice(
        -2
      )),
      (this.sliderNum_total =
        (_this$el12 = this.el) === null || _this$el12 === void 0
          ? void 0
          : _this$el12.querySelector(".sliderNum_total")),
      (this.sliderNum_total.textContent = ("00" + this.sliders.length).slice(
        -2
      )),
      (this.moveValue = 20),
      (this.maeqeeArray = []),
      (_this$el13 = this.el) !== null &&
        _this$el13 !== void 0 &&
        _this$el13.querySelectorAll("[data-marquee]").forEach((t, e) => {
          this.maeqeeArray.push(b.create(t));
        }),
      (this.slideNextEvent = new CustomEvent("slideNext")),
      (this.slidePrevEvent = new CustomEvent("slidePrev")),
      this.el.addEventListener("slideFinish", this.enableInteract),
      o.set(this.sliders[this.nowIndex].querySelector(".main-txt"), {
        opacity: 1
      }),
      o.set(this.sliders[this.nowIndex].querySelector(".info-txt"), {
        opacity: 1
      }),
      o.set(this.sliders[this.nowIndex].querySelector(".repeat-inner"), {
        opacity: 1
      }),
      o.set(this.sliders[this.nowIndex], {
        pointerEvents: "auto"
      }),
      window.ontouchstart !== void 0 && 0 < navigator.maxTouchPoints
        ? ((_this$el14 = this.el) !== null &&
            _this$el14 !== void 0 &&
            _this$el14.addEventListener("touchstart", this.touchStart),
          (_this$el15 = this.el) !== null &&
            _this$el15 !== void 0 &&
            _this$el15.addEventListener("touchmove", this.touchMove),
          (_this$el16 = this.el) !== null &&
            _this$el16 !== void 0 &&
            _this$el16.addEventListener("touchend", this.touchEnd),
          d.isSp ||
            (this.mouseStorker.classList.add("touch_pcBtn"),
            this.mouseArrow.classList.add("touch_pcBtn")))
        : d.isSp &&
          ((_this$el17 = this.el) !== null &&
            _this$el17 !== void 0 &&
            _this$el17.addEventListener("mousedown", this.onMousedown),
          (_this$el18 = this.el) === null || _this$el18 === void 0
            ? void 0
            : _this$el18.addEventListener("mouseup", this.onMouseup)),
      d.isSp &&
        ((_this$el19 = this.el) !== null &&
          _this$el19 !== void 0 &&
          _this$el19
            .querySelector(".btn_next")
            .addEventListener("click", this.btnNext),
        (_this$el20 = this.el) === null || _this$el20 === void 0
          ? void 0
          : _this$el20
              .querySelector(".btn_prev")
              .addEventListener("click", this.btnPrev));
  }
  onIntersect({ isIntersecting: t }) {
    t
      ? (!c &&
          !this.isSP &&
          (this.playScroll(),
          this.hoverTarget.forEach((e, i) => {
            e.addEventListener("mouseenter", this.btnHover),
              e.addEventListener("mouseleave", this.btnLeave);
          })),
        this.maeqeeArray[this.nowIndex].play())
      : (!c &&
          !this.isSP &&
          (this.pauseScroll(),
          this.hoverTarget.forEach((e, i) => {
            e.removeEventListener("mouseenter", this.btnHover),
              e.removeEventListener("mouseleave", this.btnLeave);
          })),
        this.maeqeeArray[this.nowIndex].pause());
  }
  onScroll({ scroll: t }) {
    this.scrollStart <= t &&
      t <= this.scrollEnd &&
      (this.boundTop = this.boundStart - t);
  }
  disableInteract() {
    this.el.classList.remove("drag"), (this.isDrag = !1), (this.isAnimate = !0);
  }
  onMouseleave(t) {
    this.isShow && this.hide();
  }
  onMousemove(t) {
    var _this$el21, _this$el22;
    this.isDrag &&
      (t.movementX < -this.moveValue
        ? (this.disableInteract(),
          (_this$el21 = this.el) !== null &&
            _this$el21 !== void 0 &&
            _this$el21.dispatchEvent(this.slideNextEvent),
          this.changeSlide(!0))
        : t.movementX > this.moveValue &&
          (this.disableInteract(),
          (_this$el22 = this.el) !== null &&
            _this$el22 !== void 0 &&
            _this$el22.dispatchEvent(this.slidePrevEvent),
          this.changeSlide(!1))),
      !this.isShow &&
        !this.isHover &&
        !this.isSP &&
        (this.show(),
        o.set(this.mouseStorker, {
          x: t.clientX,
          y: t.clientY - this.boundTop
        }),
        o.set(this.mouseArrow, {
          x: t.clientX,
          y: t.clientY - this.boundTop
        })),
      this.isSP ||
        (n.scrub(this.mouseStorker, {
          x: t.clientX,
          y: t.clientY - this.boundTop,
          duration: 0.8
        }),
        n.scrub(this.mouseArrow, {
          x: t.clientX,
          y: t.clientY - this.boundTop,
          duration: 1.2
        }));
  }
  changeSlide(t) {
    const e = this.sliders[this.nowIndex],
      i = this.nowIndex;
    if (
      (o.set(e, {
        pointerEvents: "none"
      }),
      t)
    ) {
      (this.nowIndex = this.nowIndex + 1),
        this.nowIndex === this.sliders.length && (this.nowIndex = 0),
        this.maeqeeArray[this.nowIndex].play(),
        (this.sliderNum_current.textContent = (
          "00" +
          (this.nowIndex + 1)
        ).slice(-2));
      const s = this.sliders[this.nowIndex];
      o.to(e.querySelector(".main-txt"), {
        duration: 0.6,
        opacity: 0,
        x: "-20%",
        ease: "power3.out"
      }),
        o.to(e.querySelector(".info-txt"), {
          duration: 0.6,
          opacity: 0,
          delay: 0.1,
          x: "-20%",
          ease: "power3.out"
        }),
        o.to(e.querySelector(".repeat-inner"), {
          duration: 0.6,
          opacity: 0,
          delay: 0,
          y: "100%",
          ease: "power3.out"
        }),
        o.set(s, {
          pointerEvents: "auto"
        }),
        o.fromTo(
          s.querySelector(".main-txt"),
          {
            opacity: 0,
            x: "20%"
          },
          {
            duration: 1,
            opacity: 1,
            x: 0,
            ease: "power4.out"
          }
        ),
        o.fromTo(
          s.querySelector(".info-txt"),
          {
            opacity: 0,
            x: "20%"
          },
          {
            duration: 1,
            opacity: 1,
            delay: 0.1,
            x: 0,
            ease: "power4.out"
          }
        ),
        o.fromTo(
          s.querySelector(".repeat-inner"),
          {
            opacity: 0,
            y: "-100%"
          },
          {
            duration: 1,
            opacity: 1,
            delay: 0,
            y: 0,
            ease: "power4.out",
            onComplete: () => {
              this.maeqeeArray[i].pause();
            }
          }
        );
    } else {
      (this.nowIndex = this.nowIndex - 1),
        this.nowIndex < 0 && (this.nowIndex = this.sliders.length - 1),
        this.maeqeeArray[this.nowIndex].play(),
        (this.sliderNum_current.textContent = (
          "00" +
          (this.nowIndex + 1)
        ).slice(-2));
      const s = this.sliders[this.nowIndex];
      o.to(e.querySelector(".main-txt"), {
        duration: 0.4,
        opacity: 0,
        x: "20%",
        ease: "power3.out"
      }),
        o.to(e.querySelector(".info-txt"), {
          duration: 0.4,
          opacity: 0,
          delay: 0.1,
          x: "20%",
          ease: "power3.out"
        }),
        o.to(e.querySelector(".repeat-inner"), {
          duration: 0.4,
          opacity: 0,
          delay: 0.2,
          y: "-100%",
          ease: "power3.out"
        }),
        o.set(s, {
          pointerEvents: "auto"
        }),
        o.fromTo(
          s.querySelector(".main-txt"),
          {
            opacity: 0,
            x: "-20%"
          },
          {
            duration: 1,
            opacity: 1,
            x: 0,
            ease: "power4.out"
          }
        ),
        o.fromTo(
          s.querySelector(".info-txt"),
          {
            opacity: 0,
            x: "-20%"
          },
          {
            duration: 1,
            opacity: 1,
            delay: 0.1,
            x: 0,
            ease: "power4.out"
          }
        ),
        o.fromTo(
          s.querySelector(".repeat-inner"),
          {
            opacity: 0,
            y: "100%"
          },
          {
            duration: 1,
            opacity: 1,
            delay: 0.2,
            y: 0,
            ease: "power4.out",
            onComplete: () => {
              this.maeqeeArray[i].pause();
            }
          }
        );
    }
  }
  show() {
    var _this$el23, _this$el24;
    (this.isShow = !0),
      this.mouseStorker.classList.add("show"),
      this.mouseArrow.classList.add("show"),
      (_this$el23 = this.el) !== null &&
        _this$el23 !== void 0 &&
        _this$el23.addEventListener("mousedown", this.onMousedown),
      (_this$el24 = this.el) === null || _this$el24 === void 0
        ? void 0
        : _this$el24.addEventListener("mouseup", this.onMouseup);
  }
  hide() {
    var _this$el25, _this$el26;
    (this.isShow = !1),
      this.mouseStorker.classList.remove("show"),
      this.mouseArrow.classList.remove("show"),
      this.el.classList.remove("drag"),
      (_this$el25 = this.el) !== null &&
        _this$el25 !== void 0 &&
        _this$el25.removeEventListener("mousedown", this.onMousedown),
      (_this$el26 = this.el) === null || _this$el26 === void 0
        ? void 0
        : _this$el26.removeEventListener("mouseup", this.onMouseup);
  }
  onResize({ windowWidth: t, windowHeight: e }) {
    const { scrollY: i } = this,
      { top: s, bottom: r } = this.el.getBoundingClientRect();
    (this.isSP = d.isSp),
      (this.boundStart = s + i),
      (this.scrollStart = this.boundStart - e),
      (this.scrollEnd = r + i);
  }
  onEnterCompleted() {
    var _this$el27,
      _this$el28,
      _this$el29,
      _this$el30,
      _this$el31,
      _this$el32,
      _this$el33,
      _this$el34,
      _this$el35;
    this.el.removeEventListener("slideFinish", this.enableInteract),
      window.ontouchstart !== void 0 && 0 < navigator.maxTouchPoints
        ? ((_this$el27 = this.el) !== null &&
            _this$el27 !== void 0 &&
            _this$el27.removeEventListener("touchstart", this.touchStart),
          (_this$el28 = this.el) !== null &&
            _this$el28 !== void 0 &&
            _this$el28.removeEventListener("touchmove", this.touchMove),
          (_this$el29 = this.el) !== null &&
            _this$el29 !== void 0 &&
            _this$el29.removeEventListener("touchend", this.touchEnd),
          this.isSP ||
            ((_this$el30 = this.el) !== null &&
              _this$el30 !== void 0 &&
              _this$el30
                .querySelector(".btn_next")
                .removeEventListener("click", this.btnNext),
            (_this$el31 = this.el) === null || _this$el31 === void 0
              ? void 0
              : _this$el31
                  .querySelector(".btn_prev")
                  .removeEventListener("click", this.btnPrev)))
        : this.isSP &&
          ((_this$el32 = this.el) !== null &&
            _this$el32 !== void 0 &&
            _this$el32.removeEventListener("mousedown", this.onMousedown),
          (_this$el33 = this.el) === null || _this$el33 === void 0
            ? void 0
            : _this$el33.removeEventListener("mouseup", this.onMouseup)),
      this.isSP &&
        ((_this$el34 = this.el) !== null &&
          _this$el34 !== void 0 &&
          _this$el34
            .querySelector(".btn_next")
            .removeEventListener("click", this.btnNext),
        (_this$el35 = this.el) !== null &&
          _this$el35 !== void 0 &&
          _this$el35
            .querySelector(".btn_prev")
            .removeEventListener("click", this.btnPrev)),
      this.hoverTarget.forEach((t, e) => {
        t.removeEventListener("mouseenter", this.btnHover),
          t.removeEventListener("mouseleave", this.btnLeave);
      });
  }
}),
_defineProperty(_Class5, "componentName", "slider_wrapper"),
_Class5).register();
const p = {
  src: "/_astro/b-body_hude.927b9d08.png",
  width: 1850,
  height: 1144,
  format: "png"
};
var q = `precision highp float;

varying vec2 vUv;
uniform sampler2D uNowPhoto;
uniform sampler2D uNextPhoto;
uniform sampler2D uBrush;
uniform sampler2D uMaskContainer;
uniform sampler2D uMaskPhoto;

uniform vec2 uResolutionObject;
uniform vec2 uResolutionImage;

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
vec4 texture2DInnerRange(sampler2D t, vec2 uv) {
return (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) ? vec4(0.) : texture2D(t, uv);
}

#pragma glslify: export(texture2DInnerRange)

void main() {
vec2 uv = vUv;
uv = fitContain(uv, uResolutionImage, uResolutionObject);

vec4 nowPhotoColor = texture2DInnerRange(uNowPhoto, uv);
vec4 brushColor = texture2DInnerRange(uBrush, uv);
vec4 nextPhotoColor = vec4(texture2DInnerRange(uNextPhoto, uv).rgb, texture2DInnerRange(uMaskPhoto, uv).r);

vec3 combinePhotoColor = (nextPhotoColor.rgb * nextPhotoColor.a) + (nowPhotoColor.rgb * (1.0 - nextPhotoColor.a));
vec3 color = (brushColor.rgb * brushColor.a) + (combinePhotoColor.rgb * (1.0 - brushColor.a));

float containerMaskAlpha = texture2DInnerRange(uMaskContainer, uv).r;

gl_FragColor = vec4(color.rgb, containerMaskAlpha);

}`;
((_Class6 = class extends f {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "nowSlideIndex", 0);
    _defineProperty(this, "nextSlideIndex", 0);
    _defineProperty(this, "nextSlide", () => {
      (this.nextSlideIndex = this.nowSlideIndex + 1),
        this.nextSlideIndex === this.photoTexArray.length &&
          (this.nextSlideIndex = 0),
        this.changeSlide(this.nowSlideIndex, this.nextSlideIndex);
    });
    _defineProperty(this, "prevSlide", () => {
      (this.nextSlideIndex = this.nowSlideIndex - 1),
        this.nextSlideIndex < 0 &&
          (this.nextSlideIndex = this.photoTexArray.length - 1),
        this.changeSlide(this.nowSlideIndex, this.nextSlideIndex);
    });
    _defineProperty(this, "startCallback", () => {
      this.photoMaskVideo_control.el.removeEventListener(
        "start",
        this.startCallback
      ),
        setTimeout(() => {
          this.playTick();
        }, 50);
    });
    _defineProperty(this, "changeCallback", () => {
      this.photoMaskVideo_control.el.removeEventListener(
        "ended",
        this.changeCallback
      ),
        (this.nowSlideIndex = this.nextSlideIndex),
        this.sliderDom.dispatchEvent(this.finishEvent),
        this.pauseTick();
    });
  }
  onInit() {
    (this.sliderDom = document.querySelector(".slider_wrapper")),
      (this.finishEvent = new CustomEvent("slideFinish")),
      super.onInit({
        isFullSize: !1,
        autoClear: !1,
        pixelRatioMax: 1.5
      }),
      (this.camera_ortho = new T(
        this.width / -2,
        this.width / 2,
        this.height / 2,
        this.height / -2,
        0.1,
        2
      )),
      (this.camera_ortho.position.z = 1);
    let t = !1,
      e = !1,
      i = !1;
    const s = I(p, {
      onLoad: (u) => {
        (t = !0),
          t &&
            e &&
            i &&
            this.loadedTex(
              this.photoTexArray,
              s,
              this.containerMaskVideo_tex,
              this.photoMaskVideo_tex
            );
      }
    });
    this.photoList = document.querySelectorAll(".SliderChild");
    const r = this.photoList.length;
    let a = 0;
    (this.photoTexArray = new Array(this.photoList.length)),
      this.photoList.forEach((u, v) => {
        this.photoTexArray[v] = k(u.dataset.photo, {
          onLoad: (V) => {
            a++,
              a === r &&
                ((e = !0),
                t &&
                  e &&
                  i &&
                  this.loadedTex(
                    this.photoTexArray,
                    s,
                    this.containerMaskVideo_tex,
                    this.photoMaskVideo_tex
                  ));
          }
        });
      });
    const h = document.createElement("video");
    (h.muted = !0), (h.preload = "auto"), (h.playsInline = !0);
    const l = document.createElement("video");
    (l.muted = !0),
      (l.preload = "auto"),
      (l.playsInline = !0),
      h.addEventListener("canplay", (u) => {
        (i = !0),
          t &&
            e &&
            i &&
            this.loadedTex(
              this.photoTexArray,
              s,
              this.containerMaskVideo_tex,
              this.photoMaskVideo_tex
            );
      }),
      (l.src = "/assets/video/career_hude.mp4"),
      l.load(),
      (h.src = "/assets/video/career_hude.mp4"),
      h.load(),
      (this.containerMaskVideo_tex = new y(h)),
      (this.photoMaskVideo_tex = new y(l)),
      (this.containerMaskVideo_control = new x(
        this.containerMaskVideo_tex.source.data
      )),
      (this.photoMaskVideo_control = new x(
        this.photoMaskVideo_tex.source.data
      )),
      this.addIntersectionObserver({
        el: this.el,
        callback: ({ isIntersecting: u }, v) => {
          u && this.playContainerMaskAnimation();
        },
        param: {
          rootMargin: "0% 0% -20% 0%"
        },
        once: !0
      }),
      this.sliderDom.addEventListener("slideNext", this.nextSlide),
      this.sliderDom.addEventListener("slidePrev", this.prevSlide);
  }
  playContainerMaskAnimation() {
    this.containerMaskVideo_control.play(),
      this.playTick(),
      this.containerMaskVideo_control.el.addEventListener("ended", () => {
        this.pauseTick();
      });
  }
  changeSlide(t, e) {
    this.photoMaskVideo_control.pause(),
      (this.photoMaskVideo_control.el.currentTime = 0),
      (this.material.uniforms.uNowPhoto.value = this.photoTexArray[t]),
      (this.material.uniforms.uNextPhoto.value = this.photoTexArray[e]),
      requestAnimationFrame(() => {
        this.photoMaskVideo_control.play(),
          this.photoMaskVideo_control.el.addEventListener(
            "play",
            this.startCallback
          ),
          this.photoMaskVideo_control.el.addEventListener(
            "ended",
            this.changeCallback
          );
      });
  }
  loadedTex(t, e, i, s) {
    const r = L({
      uNowPhoto: t[this.nowSlideIndex],
      uNextPhoto: t[this.nextSlideIndex],
      uBrush: e,
      uMaskContainer: i,
      uMaskPhoto: s,
      uResolutionImage: new g(p.width, p.height),
      uResolutionObject: new g(this.width, this.height)
    });
    (this.uniforms = M(r)),
      (this.material = new C({
        uniforms: r,
        vertexShader: R,
        fragmentShader: q,
        transparent: !0,
        depthTest: !1,
        depthWrite: !1
      })),
      (this.geometry = new _(this.width, this.height)),
      (this.mesh = new A(this.geometry, this.material)),
      (this.initialWidth = this.width),
      this.scene.add(this.mesh);
  }
  onTick(t, e, i) {
    this.renderer.render(this.scene, this.camera_ortho);
  }
  onResize() {
    var _this$el36, _this$el37;
    const t =
        (_this$el36 = this.el) === null || _this$el36 === void 0
          ? void 0
          : _this$el36.parentNode.clientWidth,
      e =
        (_this$el37 = this.el) === null || _this$el37 === void 0
          ? void 0
          : _this$el37.parentNode.clientHeight;
    this.material &&
      (this.material.uniforms.uResolutionObject.value.set(t, e),
      this.mesh.scale.set(t / this.initialWidth, t / this.initialWidth, 1),
      (this.camera_ortho.left = t / -2),
      (this.camera_ortho.right = t / 2),
      (this.camera_ortho.top = e / 2),
      (this.camera_ortho.bottom = e / -2),
      this.camera_ortho.updateProjectionMatrix()),
      super.onResize();
  }
  onEnterCompleted() {
    this.scene.remove(this.mesh),
      super.disposeGeometry(this.geometry),
      super.disposeMaterial(this.material),
      super.disposeRenderer(this.renderer),
      (this.scene = void 0),
      (this.mesh = void 0),
      (this.camera_ortho = void 0),
      (this.geometry = void 0),
      (this.material = void 0),
      (this.renderer = void 0);
  }
}),
_defineProperty(_Class6, "componentName", "sliderGL"),
_Class6).register();
