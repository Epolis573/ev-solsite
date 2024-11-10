import {
  P as k,
  C as c,
  S as R,
  a,
  g as r,
  m as h,
  i as x,
  V as d
} from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
import {
  L as M
} from "./lottie.bd4b17b2.js";
import "./VideoAuto.astro_astro_type_script_index_0_lang.c0781f95.js";
import "./AnchorLinks.astro_astro_type_script_index_0_lang.7092990b.js";
import {
  L as C
} from "./Local.454029b8.js";
import {
  T as y,
  O as E,
  l as u,
  c as p,
  V as l,
  a as m,
  R as v,
  t as f,
  P as L,
  M as g,
  h as b
} from "./constants.e6c90e33.js";
import {
  A as V
} from "./AboutSky.fc4e5412.js";
import "./BrushContainer.astro_astro_type_script_index_0_lang.a82a931f.js";
import "./LowerTitle.astro_astro_type_script_index_0_lang.f9bd55d6.js";
import "./easing.ca1274dc.js";
import "./image.63ed914f.js";
(class extends k {}).register();
(class extends c {
  static componentName = "FV";
  static selectorRoot = "[data-parallax-fv]";
  isScrollEnter = !1;
  onInit() {
      this.mainTxt = this.refs.titleTxt, this.subTxt = this.el?.querySelector(".subTxt"), this.ankerLinks = this.el?.querySelector(".AnchorLinks"), this.delayMax = .5, this.delayArray = [], this.splitTarget = new R(this.el.querySelector(".mainTxt").querySelectorAll("span"), {
          type: "chars",
          charsClass: "SectionTitle-splitTxt"
      }), this.splitTarget.chars.forEach((i, t) => {
          this.delayArray.push(this.delayMax * a.utils.random(0, 1))
      }), this.GL = document.querySelector(".GL"), this.eventBlurVal = {
          progress: 0
      }, this.blurEvent = new CustomEvent("blurchange", {
          detail: {
              progress: () => this.eventBlurVal.progress
          }
      })
  }
  onIntersect({
      isIntersecting: i
  }) {
      i ? (this.mainTxt.style.willChange = "opacity,filter", this.subTxt.style.willChange = "opacity,filter", this.ankerLinks.style.willChange = "opacity,filter", this.splitTarget.chars.forEach((t, e) => {
          t.style.willChange = "transform,opacity,filter"
      }), this.playScroll()) : (this.pauseScroll(), this.mainTxt.style.willChange = "", this.subTxt.style.willChange = "", this.ankerLinks.style.willChange = "", this.splitTarget.chars.forEach((t, e) => {
          t.style.willChange = ""
      }))
  }
  onScroll({
      scroll: i
  }) {
      if (this.scrollStart <= i && i <= this.scrollEnd) {
          this.isScrollEnter || (this.isScrollEnter = !0);
          const t = Math.min(Math.max(1 - i / this.scrollDistance * 2, 0), 1),
              e = Math.max(i / this.scrollDistance * 2 * 5, 0);
          this.mainTween = r.scrub(this.mainTxt, {
              opacity: `${t}`,
              filter: `blur(${e}px)`,
              duration: .2
          }), this.subTween = r.scrub(this.subTxt, {
              opacity: `${t}`,
              filter: `blur(${e}px)`,
              duration: .2
          }), this.ankerTween = r.scrub(this.ankerLinks, {
              opacity: `${t}`,
              filter: `blur(${e}px)`,
              duration: .2
          }), this.splitTween = r.scrub(this.splitTarget.chars, {
              opacity: (s, n, o) => Math.min(Math.max(t * 2 - this.delayArray[s], 0), 1),
              filter: (s, n, o) => `blur(${Math.max((1-t)*2-this.delayArray[s],0)*5}px)`,
              transform: (s, n, o) => `translateZ(${Math.max((1-t)*2-this.delayArray[s],0)*12}vw)`,
              duration: .2
          }), this.glTween = r.scrub(this.eventBlurVal, {
              progress: t,
              duration: .2,
              onUpdate: () => {
                  this.GL.dispatchEvent(this.blurEvent)
              }
          })
      } else this.isScrollEnter && i > 0 && (this.isScrollEnter = !1, this.mainTween = r.scrub(this.mainTxt, {
          opacity: "0",
          filter: "blur(5px)",
          duration: .2
      }), this.subTween = r.scrub(this.subTxt, {
          opacity: "0",
          filter: "blur(5px)",
          duration: .2
      }), this.ankerTween = r.scrub(this.ankerLinks, {
          opacity: "0",
          filter: "blur(5px)",
          duration: .2
      }), this.splitTween = r.scrub(this.splitTarget.chars, {
          opacity: function(t, e, s) {
              return 0
          },
          filter: (t, e, s) => `blur(${(2-this.delayArray[t])*5}px)`,
          transform: (t, e, s) => `translateZ(${Math.max(2-this.delayArray[t],0)*12}vw)`,
          duration: .2
      }), this.glTween = r.scrub(this.eventBlurVal, {
          progress: 0,
          duration: .2,
          onUpdate: () => {
              this.GL.dispatchEvent(this.blurEvent)
          }
      }))
  }
  onResize({
      windowWidth: i,
      windowHeight: t
  }) {
      const {
          scrollY: e
      } = this, {
          bottom: s
      } = this.el.getBoundingClientRect();
      this.scrollStart = 0, this.scrollEnd = s + e, this.scrollDistance = this.scrollEnd - this.scrollStart
  }
}).register();
(class extends c {
  static componentName = "THOUGHTS";
  static selectorRoot = "[data-parallax-thoughts]";
  isScrollEnter = !1;
  onInit() {}
  onIntersect({
      isIntersecting: i
  }) {
      i ? this.playScroll() : this.pauseScroll()
  }
  onScroll({
      scroll: i
  }) {
      this.scrollStart <= i && i <= this.scrollEnd ? (this.isScrollEnter || (this.isScrollEnter = !0), (i - this.scrollStart) / this.scrollDistance - 1) : this.isScrollEnter && (this.isScrollEnter = !1)
  }
  getNum(i) {
      const t = /[^0-9]/g,
          e = i.replace(t, "");
      return parseInt(e)
  }
  onResize({
      windowWidth: i,
      windowHeight: t
  }) {
      const {
          scrollY: e
      } = this, {
          top: s,
          bottom: n,
          height: o
      } = this.el.getBoundingClientRect();
      this.scrollStart = s + e - t, this.scrollEnd = n + e, this.scrollDistance = this.scrollEnd - this.scrollStart
  }
}).register();
(class extends c {
  static componentName = "WHY";
  isScrollEnter = !1;
  onInit() {
      this.stickyContent = this.el.querySelector(".list-container"), this.figureInner = this.el.querySelector(".figure-inner"), this.figureNiji = this.el.querySelector(".figure-niji"), this.animationObj = {
          progress: 0
      }, this.isSP = h.isSp, this.textureWidthRate = h.isSp ? 1.15 : .58125, this.scaleRate = h.isSp ? 3 : 3.5, this.list_01 = this.el.querySelector(".reason-01"), this.list_02 = this.el.querySelector(".reason-02"), this.list_03 = this.el.querySelector(".reason-03"), this.list_04 = this.el.querySelector(".reason-04"), this.GL = document.querySelector(".ReasonGL"), this.eventTransformVal = {
          scale: 1,
          translateY: 0
      }, this.transformEvent = new CustomEvent("transformchange", {
          detail: {
              progress: () => this.eventTransformVal
          }
      }), this.innerAnimation = M.loadAnimation({
          container: this.figureInner,
          renderer: "svg",
          loop: !1,
          autoplay: !1,
          path: "/assets/why/b-body_why_img01.json"
      }), this.innerAnimation.addEventListener("data_ready", () => {
          this.lottieDuration = this.innerAnimation.getDuration(!0) - 1
      }), this.addIntersectionObserver({
          el: this.isSP ? this.el : this.el.querySelector("[data-parallax-figure]"),
          callback: ({
              isIntersecting: i
          }, t) => {
              i ? this.playScroll() : this.pauseScroll()
          },
          param: {
              rootMargin: "0%"
          },
          once: !1
      })
  }
  onScroll({
      scroll: i
  }) {
      if (this.scrollStart <= i && i <= this.scrollEnd) {
          this.isScrollEnter || (this.isScrollEnter = !0, this.windowHeight || (this.windowHeight = window.innerHeight));
          const t = (i - this.scrollStart) / this.windowHeight - 1;
          if (this.isSP) {
              if (t < 0) {
                  const e = t * this.translateValue;
                  this.tweenGL = r.scrub(this.eventTransformVal, {
                      scale: this.scaleRate,
                      translateY: e,
                      duration: .2,
                      onUpdate: () => {
                          this.GL.dispatchEvent(this.transformEvent)
                      }
                  })
              } else if (t > 0) {
                  const e = Math.max(Math.min((t - .6) * 2.5, 1), 0);
                  this.tweenGL = r.scrub(this.eventTransformVal, {
                      scale: this.scaleRate - Math.min(t * (this.scaleRate - 1), this.scaleRate - 1),
                      translateY: 0,
                      duration: .2,
                      onUpdate: () => {
                          this.GL.dispatchEvent(this.transformEvent)
                      }
                  }), this.tweenObj = r.scrub(this.animationObj, {
                      progress: e,
                      duration: .2,
                      onUpdate: () => {
                          this.innerAnimation.goToAndStop(this.animationObj.progress * this.lottieDuration, !0)
                      }
                  })
              }
          } else if (t < 0) {
              const e = t * this.translateValue;
              this.figureNiji.classList.contains("show") && this.figureNiji.classList.remove("show"), this.tweenGL = r.scrub(this.eventTransformVal, {
                  scale: this.scaleRate,
                  translateY: e,
                  duration: .2,
                  onUpdate: () => {
                      this.GL.dispatchEvent(this.transformEvent)
                  }
              }), this.tweenInner = r.scrub(this.figureInner, {
                  transform: `translate3d(0,${e}%,0)`,
                  duration: .2
              })
          } else if (t >= 0) {
              const e = this.scaleRate - Math.min(t * (this.scaleRate - 1), this.scaleRate - 1),
                  s = Math.max(Math.min((t - .4) * 2, 1), 0);
              this.figureNiji.classList.contains("show") || this.figureNiji.classList.add("show"), this.tweenGL = r.scrub(this.eventTransformVal, {
                  scale: e,
                  translateY: 0,
                  duration: .2,
                  onUpdate: () => {
                      this.GL.dispatchEvent(this.transformEvent)
                  }
              }), this.tweenObj = r.scrub(this.animationObj, {
                  progress: s,
                  duration: .2,
                  onUpdate: () => {
                      this.innerAnimation.goToAndStop(this.animationObj.progress * this.lottieDuration, !0)
                  }
              }), !this.list_01.classList.contains("slide") && t >= 1.2 ? this.list_01.classList.add("slide") : this.list_01.classList.contains("slide") && t < 1.2 && this.list_01.classList.remove("slide"), !this.list_02.classList.contains("slide") && t >= 1.4 ? this.list_02.classList.add("slide") : this.list_02.classList.contains("slide") && t < 1.4 && this.list_02.classList.remove("slide"), !this.list_03.classList.contains("slide") && t >= 1.6 ? this.list_03.classList.add("slide") : this.list_03.classList.contains("slide") && t < 1.6 && this.list_03.classList.remove("slide"), !this.list_04.classList.contains("slide") && t >= 1.8 ? this.list_04.classList.add("slide") : this.list_04.classList.contains("slide") && t < 1.8 && this.list_04.classList.remove("slide")
          } else this.tweenGL = r.scrub(this.eventTransformVal, {
              scale: this.scaleRate,
              translateY: -this.translateValue,
              duration: .2,
              onUpdate: () => {
                  this.GL.dispatchEvent(this.transformEvent)
              }
          }), this.tweenInner = r.scrub(this.figureInner, {
              transform: `translate3d(0,${-this.translateValue},0)`,
              duration: .2
          }), this.tweenObj = r.scrub(this.animationObj, {
              progress: 0,
              duration: .2,
              onUpdate: () => {
                  this.innerAnimation.goToAndStop(this.animationObj.progress * this.lottieDuration, !0)
              }
          }), this.list_01.classList.remove("slide"), this.list_02.classList.remove("slide"), this.list_03.classList.remove("slide"), this.list_04.classList.remove("slide")
      } else if (this.isScrollEnter && (this.isScrollEnter = !1, this.overPosition = i < this.scrollStart ? "top" : "bottom", this.setOverStyle()), !this.isSP && this.overPosition === "bottom") {
          const t = Math.min((i - this.scrollStart) / this.windowHeight - 1 - 4, 1);
          t > 0 ? (this.tweenGL = r.scrub(this.eventTransformVal, {
              scale: 1,
              translateY: this.windowHeight * .5 * t / (this.windowWidth * this.textureWidthRate) * 100,
              duration: .2,
              onUpdate: () => {
                  this.GL.dispatchEvent(this.transformEvent)
              }
          }), this.tweenInner = r.scrub(this.figureInner, {
              transform: `translateY(${-this.windowHeight*.5*t}px)`,
              duration: .2
          })) : (this.tweenGL = r.scrub(this.eventTransformVal, {
              scale: 1,
              translateY: 0,
              duration: .2,
              onUpdate: () => {
                  this.GL.dispatchEvent(this.transformEvent)
              }
          }), this.tweenInner = r.scrub(this.figureInner, {
              transform: "translateY(0px)",
              duration: .2
          }))
      }
  }
  setOverStyle(i = !1) {
      this.overPosition === "top" ? (this.tweenObj && (this.tweenObj.kill(), this.tweenObj = void 0), this.isSP ? this.tweenGL = r.scrub(this.eventTransformVal, {
          scale: this.scaleRate,
          translateY: this.translateValue,
          duration: .2,
          onUpdate: () => {
              this.GL.dispatchEvent(this.transformEvent)
          }
      }) : (this.tweenGL = r.scrub(this.eventTransformVal, {
          scale: this.scaleRate,
          translateY: -this.translateValue,
          duration: .2,
          onUpdate: () => {
              this.GL.dispatchEvent(this.transformEvent)
          }
      }), this.tweenInner = r.scrub(this.figureInner, {
          transform: `translate3d(0,${-this.translateValue},0)`,
          duration: .2
      })), this.innerAnimation.goToAndStop(0, !0), this.isSp || (this.list_01.classList.remove("slide"), this.list_02.classList.remove("slide"), this.list_03.classList.remove("slide"), this.list_04.classList.remove("slide"))) : (this.tweenObj && (this.tweenObj.kill(), this.tweenObj = void 0), this.tweenGL = r.scrub(this.eventTransformVal, {
          scale: 1,
          translateY: this.windowHeight * .5 / (this.windowWidth * this.textureWidthRate) * 100,
          duration: .2,
          onUpdate: () => {
              this.GL.dispatchEvent(this.transformEvent)
          }
      }), this.tweenInner = r.scrub(this.figureInner, {
          transform: `translateY(${-this.windowHeight*.5}px)`,
          duration: .2
      }), a.set(this.animationObj, {
          progress: 1
      }), this.innerAnimation.goToAndStop(this.lottieDuration, !0), this.isSp || (this.list_01.classList.add("slide"), this.list_02.classList.add("slide"), this.list_03.classList.add("slide"), this.list_04.classList.add("slide")))
  }
  onResize({
      windowWidth: i,
      windowHeight: t
  }) {
      this.isSP = h.isSp, this.translateValue = h.isSp ? 80 : 75;
      const {
          scrollY: e
      } = this;
      if (this.isSP) {
          const {
              top: s,
              bottom: n
          } = this.el.getBoundingClientRect();
          this.scrollStart = s + e - t, this.scrollEnd = n + e + t, console.log(this.scrollStart)
      } else {
          this.stickyContent.style.position = "static";
          const {
              top: s,
              bottom: n
          } = this.stickyContent.getBoundingClientRect();
          this.stickyContent.style.position = "", this.scrollStart = s + e - t, this.scrollEnd = n + e + t
      }
      this.scrollDistance = this.scrollEnd - this.scrollStart, !this.windowHeight && (e < this.scrollStart || e > this.scrollEnd) && (this.overPosition = e < this.scrollStart ? "top" : "bottom", this.setOverStyle(!0)), this.windowWidth = i, this.windowHeight = t
  }
  onEnterCompleted() {
      this.innerAnimation.destroy()
  }
}).register();
class T {
  constructor(t, e, s = {
      tx: 1,
      ty: 1,
      rx: 1,
      ry: 1
  }) {
      this.targetWindow = t === window, this.eventTarget = t, this.styleTarget = e, this.rateObj = s, this.events = {}, this.key = 0, this.waitStop = !1, this.init()
  }
  addListener = function(t, e, s, n) {
      return window.addEventListener ? t.addEventListener(e, s, n) : window.attachEvent && t.attachEvent("on" + e, s), this.events[this.key] = {
          target: t,
          type: e,
          listener: s,
          capture: n
      }, this.key++
  };
  removeListener = function(t) {
      if (t in this.events) {
          let e = this.events[t];
          window.removeEventListener ? e.target.removeEventListener(e.type, e.listener, e.capture) : window.detachEvent && e.target.detachEvent("on" + e.type, e.listener)
      }
  };
  init() {
      this.mousepos = {
          x: 0,
          y: 0
      }, this.renderedStyles = {
          tx: {
              previous: 0,
              current: 0,
              amt: .1
          },
          ty: {
              previous: 0,
              current: 0,
              amt: .1
          },
          rx: {
              previous: 0,
              current: 0,
              amt: .1
          },
          ry: {
              previous: 0,
              current: 0,
              amt: .1
          }
      }, this.x = this.y = this.rx = this.ry = 0, this.setEvents()
  }
  lerp = (t, e, s) => (1 - s) * t + s * e;
  getMousePos = t => ({
      x: t.clientX,
      y: t.clientY
  });
  distance = (t, e, s, n) => Math.hypot(t - s, e - n);
  calculateSizePosition() {
      this.targetWindow ? this.rect = {
          width: window.innerWidth,
          height: window.innerHeight,
          top: 0,
          left: 0
      } : this.rect = this.eventTarget.getBoundingClientRect(), this.distanceToTrigger = this.rect.width * .5
  }
  setEvents() {
      this.targetWindow ? this.enterHandle = this.addListener(window, "mousemove", t => {
          this.enter(t)
      }, {
          passive: !1
      }) : this.enterHandle = this.addListener(this.eventTarget, "mouseenter", t => {
          this.enter(t)
      }, {
          passive: !0
      })
  }
  destroy = function() {
      this.removeListener(this.moveHandle), this.moveHandle = void 0, this.removeListener(this.outHandle), this.outHandle = void 0, this.removeListener(this.enterHandle), this.enterHandle = void 0, this.stop()
  };
  start() {
      this.rafId = requestAnimationFrame(() => {
          this.start()
      }), this.render()
  }
  stop() {
      cancelAnimationFrame(this.rafId), this.rafId = null
  }
  render() {
      this.waitStop ? this.x = this.y = this.rx = this.ry = 0 : (this.x = (this.mousepos.x - (this.rect.left + this.rect.width / 2)) * this.rateObj.tx, this.y = (this.mousepos.y - (this.rect.top + this.rect.height / 2)) * this.rateObj.ty, this.rx = -(this.mousepos.y - (this.rect.top + this.rect.height / 2)) * this.rateObj.rx, this.ry = (this.mousepos.x - (this.rect.left + this.rect.width / 2)) * this.rateObj.ry), this.renderedStyles.tx.current = this.x, this.renderedStyles.ty.current = this.y, this.renderedStyles.rx.current = this.rx, this.renderedStyles.ry.current = this.ry;
      for (const t in this.renderedStyles) this.renderedStyles[t].previous = this.lerp(this.renderedStyles[t].previous, this.renderedStyles[t].current, this.renderedStyles[t].amt), this.waitStop && Math.abs(this.renderedStyles[t].current - this.renderedStyles[t].previous) < .05 && this.stopBack();
      this.styleTarget.style.transform = `translate3d(${this.renderedStyles.tx.previous}px, ${this.renderedStyles.ty.previous}px, 0) rotateX(${this.renderedStyles.rx.previous}deg) rotateY(${this.renderedStyles.ry.previous}deg)`
  }
  stopBack() {
      for (const t in this.renderedStyles) this.renderedStyles[t].previous = this.renderedStyles[t].current;
      this.waitStop = !1, this.stop()
  }
  enter(t) {
      this.waitStop = !1, this.stop(), this.mousepos = {
          x: 0,
          y: 0
      }, this.renderedStyles = {
          tx: {
              previous: 0,
              current: 0,
              amt: .1
          },
          ty: {
              previous: 0,
              current: 0,
              amt: .1
          },
          rx: {
              previous: 0,
              current: 0,
              amt: .1
          },
          ry: {
              previous: 0,
              current: 0,
              amt: .1
          }
      }, this.targetWindow || this.eventTarget.classList.add("js_hover"), this.removeListener(this.enterHandle), this.enterHandle = void 0, this.mousepos = this.getMousePos(t), this.moveHandle = this.addListener(window, "mousemove", e => {
          this.mousepos = this.getMousePos(e)
      }, {
          passive: !0
      }), this.outHandle = this.addListener(this.eventTarget, "mouseleave", e => {
          this.leave()
      }, {
          passive: !0
      }), this.calculateSizePosition(), this.start()
  }
  leave() {
      this.waitStop = !0, this.eventTarget.classList.remove("js_hover"), this.removeListener(this.moveHandle), this.moveHandle = void 0, this.removeListener(this.outHandle), this.outHandle = void 0, this.enterHandle = this.addListener(this.eventTarget, "mouseenter", t => {
          this.enter(t)
      }, {
          passive: !0
      })
  }
}(class extends c {
  static componentName = "SOLUTION";
  onInit() {
      this.ioComponents = this.el?.querySelectorAll('[data-ref="ioSingle"]'), this.ioComponents.forEach((i, t) => {
          this.addIntersectionObserver({
              el: i,
              callback: ({
                  isIntersecting: e
              }, s) => {
                  e && i.classList.add("isIntersect")
              },
              param: {
                  rootMargin: "0% 0% -30% 0%"
              },
              once: !0
          })
      }), !x && (this.stickyContent = this.el?.querySelector(".solution-sticky"), this.magneticWord = this.el?.querySelector('[data-ref="mouseWord"]'), this.magneticCard = this.el?.querySelectorAll('[data-ref="mouseCard"]'), this.cardEventArray = [], this.magneticCard.forEach((i, t) => {
          this.cardEventArray.push(new T(i.querySelector(".card-inner"), i.querySelector(".card-inner"), {
              tx: .05,
              ty: .1,
              rx: .1,
              ry: .1
          }))
      }), this.addIntersectionObserver({
          el: this.stickyContent,
          callback: ({
              isIntersecting: i
          }, t) => {
              i ? this.hoverWord = new T(window, this.magneticWord, {
                  tx: .075,
                  ty: .075,
                  rx: 0,
                  ry: 0
              }) : this.hoverWord && (this.hoverWord.destroy(), this.hoverWord = void 0, this.magneticWord.style.transform = "")
          },
          param: {
              rootMargin: "0% 0% 0% 0%"
          },
          once: !1
      }))
  }
  onEnterCompleted() {
      x || (this.cardEventArray.forEach((i, t) => {
          i.destroy()
      }), this.cardEventArray = void 0, this.hoverWord && (this.hoverWord.destroy(), this.hoverWord = void 0))
  }
}).register();
(class extends C {
  static componentName = "CHOOSE";
  onInit() {
      this.isSP = h.isSp, this.valueList = this.el.querySelector(".list-value"), this.addIntersectionObserver({
          el: this.el,
          callback: ({
              isIntersecting: i
          }, t) => {
              i && (this.isSP ? this.valueList.querySelectorAll(".video_sp").forEach((e, s) => {
                  e.load()
              }) : this.valueList.querySelectorAll(".video_pc").forEach((e, s) => {
                  e.load()
              }))
          },
          param: {
              rootMargin: "0%"
          },
          once: !0
      })
  }
}).register();
(class extends y {
  static componentName = "GL";
  static isLocal = !0;
  static isDisableAutoPlayScroll = !0;
  stats;
  gl;
  isInit = !1;
  storedDeltaTime = 0;
  onInit() {
      super.onInit({
          autoClear: !1,
          pixelRatioMax: 1.5,
          alpha: !0
      }), this.nowBlur = 1, this.initGl()
  }
  initGl() {
      this.isInit || (this.isInit = !0, this.gl = V.create(this.el, {
          renderer: this.renderer,
          camera: this.camera,
          width: this.width,
          height: this.height,
          pixelRatio: this.pixelRatio,
          isLowerPage: !0
      }), this.emitSelfResize(), this.el.addEventListener("blurchange", this.blurChange), this.gl.render())
  }
  blurChange = i => {
      const t = Math.max(i.detail.progress(), 0);
      this.nowBlur !== t && (this.stats?.begin(), this.gl.blur(t), this.stats?.end(), t === 0 ? this.gl.showIcon() : this.gl.hideIcon(), this.nowBlur = t)
  };
  onLoadDone() {
      this.gl.blur(1), this.gl.start()
  }
  onResize() {
      super.onResize(), this.gl?.resize(this.width, this.height, this.pixelRatio)
  }
  onIntersect({
      isIntersecting: i
  }, t) {
      i ? this.playTick() : this.pauseTick()
  }
  onTick(i, t, e) {
      if (e % 2 === 0) {
          const s = this.storedDeltaTime + t;
          this.storedDeltaTime = 0, this.gl.tick(i, s, e), this.gl.render()
      } else this.storedDeltaTime += t
  }
}).register();
(class extends c {
  static componentName = "SecondView";
  static selectorRoot = "[data-parallax-sv]";
  isScrollEnter = !1;
  onInit() {
      this.blurSubTop = this.el?.querySelector(".blur-subTop"), this.blurSubBottom = this.el?.querySelector(".blur-subBottom"), this.delayMax = .5, this.delayArray = [], this.splitTarget = new R(this.el?.querySelector(".title-ja"), {
          type: "chars",
          charsClass: "SectionTitle-splitTxt"
      }), this.splitTarget.chars.forEach((i, t) => {
          this.delayArray.push(this.delayMax * a.utils.random(0, 1))
      }), this.GL = document.querySelector(".ThoughtsGL"), this.eventDirVal = {
          direction: !1
      }, this.playEvent = new CustomEvent("playchange", {
          detail: {
              direction: () => this.eventDirVal.direction
          }
      })
  }
  onIntersect({
      isIntersecting: i
  }) {
      i ? (this.blurSubTop.style.willChange = "transform,opacity,filter", this.blurSubBottom.style.willChange = "transform,opacity,filter", this.splitTarget.chars.forEach((t, e) => {
          t.style.willChange = "transform,opacity,filter"
      }), this.playScroll()) : (this.pauseScroll(), this.blurSubTop.style.willChange = "", this.blurSubBottom.style.willChange = "", this.splitTarget.chars.forEach((t, e) => {
          t.style.willChange = ""
      }))
  }
  onScroll({
      scroll: i
  }) {
      if (this.scrollStart <= i && i <= this.scrollEnd) {
          this.isScrollEnter || (this.isScrollEnter = !0, this.eventDirVal.direction && (this.eventDirVal.direction = !1, this.GL.dispatchEvent(this.playEvent)));
          const t = Math.min(Math.max(((i - this.scrollStart) / this.windowHeight - 1) * 2, 0), 1),
              e = t,
              s = (1 - t) * 5,
              n = `translateZ(${(1-t)*-12}vw)`;
          this.subTopTween = r.scrub(this.blurSubTop, {
              opacity: `${e}`,
              filter: `blur(${s}px)`,
              transform: `${n}`,
              duration: .2
          }), this.subBottomTween = r.scrub(this.blurSubBottom, {
              opacity: `${e}`,
              filter: `blur(${s}px)`,
              transform: `${n}`,
              duration: .2
          }), this.splitTween = r.scrub(this.splitTarget.chars, {
              opacity: (o, w, S) => Math.min(Math.max(t * 2 - this.delayArray[o], 0), 1),
              filter: (o, w, S) => `blur(${Math.max((1-t)*2-this.delayArray[o],0)*5}px)`,
              transform: (o, w, S) => `translateZ(${Math.max((1-t)*2-this.delayArray[o],0)*-12}vw)`,
              duration: .2
          })
      } else this.isScrollEnter && (this.isScrollEnter = !1, this.overPosition = i < this.scrollStart ? "top" : "bottom", this.setOverStyle())
  }
  setOverStyle(i = !1) {
      this.subTopTween && (this.subTopTween.kill(), this.subBottomTween.kill(), this.splitTween.kill(), this.subTopTween = void 0, this.subBottomTween = void 0, this.splitTween = void 0), this.overPosition === "top" ? (a.set(this.blurSubTop, {
          opacity: 0,
          filter: "blur(5px)",
          transform: "translateZ(-12vw)"
      }), a.set(this.blurSubBottom, {
          opacity: 0,
          filter: "blur(5px)",
          transform: "translateZ(-12vw)"
      }), a.set(this.splitTarget.chars, {
          opacity: 0,
          filter: "blur(5px)",
          transform: "translateZ(-12vw)"
      })) : (this.eventDirVal.direction = !0, this.GL.dispatchEvent(this.playEvent), a.set(this.blurSubTop, {
          opacity: 1,
          filter: "blur(0px)",
          transform: "translateZ(0)"
      }), a.set(this.blurSubBottom, {
          opacity: 1,
          filter: "blur(0px)",
          transform: "translateZ(0)"
      }), a.set(this.splitTarget.chars, {
          opacity: 1,
          filter: "blur(0px)",
          transform: "translateZ(0)"
      }))
  }
  onResize({
      windowWidth: i,
      windowHeight: t
  }) {
      const {
          scrollY: e
      } = this;
      this.el.style.position = "static";
      const {
          top: s,
          bottom: n
      } = this.el.getBoundingClientRect();
      this.el.style.position = "", this.windowHeight = t, this.scrollStart = s + e - t, this.scrollEnd = n + e, this.scrollDistance = this.scrollEnd - this.scrollStart, (e < this.scrollStart || e > this.scrollEnd) && (this.overPosition = e < this.scrollStart ? "top" : "bottom", this.setOverStyle(!0))
  }
}).register();
const P = {
      src: "/_astro/figure_word.87b4bd2a.png",
      width: 3300,
      height: 3300,
      format: "png"
  },
  I = {
      src: "/_astro/figure_bg.1570aadf.png",
      width: 3300,
      height: 3300,
      format: "png"
  };
var _ = `precision highp float;

varying vec2 vUv;
uniform sampler2D targetTex;

uniform vec2 uResolutionObject;
uniform vec2 texRes;
uniform vec3 transformVec;

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
vec2 texUV = fitContain(uv, texRes, uResolutionObject);
vec4 texColor = texture2DInnerRange(targetTex, texUV);

gl_FragColor = texColor;
}`;
(class extends y {
  static componentName = "ReasonGL";
  onInit() {
      this.width = this.el?.parentNode.clientWidth, this.height = this.el?.parentNode.clientHeight, this.nowScale = 1, this.nowTranslate = 0, this.el.addEventListener("transformchange", this.transformChange), super.onInit({
          isFullSize: !1,
          autoClear: !0,
          antialias: !0,
          pixelRatioMax: 1.5
      }), this.camera_ortho = new E(this.width / -2, this.width / 2, this.height / 2, this.height / -2, .1, 2), this.camera_ortho.position.z = 1;
      let i = !1,
          t = !1;
      this.textureWidthRate = h.isSp ? 1.15 : .58125, this.textureMaxRate = h.isSp ? 3 : 3.5, u(P, {
          onLoad: e => {
              i = !0, this.wordTexture = e, t && this.loadedTex()
          }
      }), u(I, {
          onLoad: e => {
              t = !0, this.figureTexture = e, i && this.loadedTex()
          }
      })
  }
  loadedTex() {
      this.pixelRatio = Math.min(window.devicePixelRatio, this.pixelRatioMax), this.baseMeshSize = this.width * this.textureWidthRate, this.geoScale = this.baseMeshSize * this.nowScale, this.initialScale = this.geoScale;
      const i = p({
          targetTex: this.figureTexture,
          texRes: new l(this.figureTexture.source.data.width, this.figureTexture.source.data.height),
          uResolutionObject: new l(this.baseMeshSize, this.baseMeshSize)
      });
      this.uniforms_figure = m(i), this.material_figure = new v({
          uniforms: i,
          vertexShader: f,
          fragmentShader: _,
          transparent: !0,
          alphaTest: .1,
          depthTest: !1,
          depthWrite: !1
      });
      const t = p({
          targetTex: this.wordTexture,
          texRes: new l(this.wordTexture.source.data.width, this.wordTexture.source.data.height),
          uResolutionObject: new l(this.baseMeshSize, this.baseMeshSize)
      });
      this.uniforms_word = m(t), this.material_word = new v({
          uniforms: t,
          vertexShader: f,
          fragmentShader: _,
          transparent: !0,
          alphaTest: .1,
          depthTest: !1,
          depthWrite: !1
      }), this.geometry = new L(this.baseMeshSize, this.baseMeshSize), this.mesh_word = new g(this.geometry, this.material_word), this.mesh_figure = new g(this.geometry, this.material_figure), this.scene.add(this.mesh_word), this.scene.add(this.mesh_figure), this.rendered = !0
  }
  transformChange = i => {
      const t = i.detail.progress();
      this.geoScale = this.baseMeshSize * this.nowScale, this.mesh_word.scale.set(this.geoScale / this.initialScale, this.geoScale / this.initialScale, 1), this.mesh_figure.scale.set(this.geoScale / this.initialScale, this.geoScale / this.initialScale, 1), this.mesh_word.position.y = t.translateY / 100 * this.geoScale, this.mesh_figure.position.y = t.translateY / 100 * this.geoScale, this.nowScale = t.scale, this.nowTranslate = t.translateY
  };
  onIntersect({
      isIntersecting: i
  }) {
      i ? this.playTick() : this.pauseTick()
  }
  onTick(i, t, e) {
      this.rendered && (this.mesh_word.rotation.z -= .1 * (Math.PI / 180), this.mesh_figure.rotation.z += .1 * (Math.PI / 180)), this.renderer.render(this.scene, this.camera_ortho)
  }
  onResize() {
      this.width = this.el?.parentNode.clientWidth, this.height = this.el?.parentNode.clientHeight, this.baseMeshSize = this.width * this.textureWidthRate, this.geoScale = this.baseMeshSize * this.nowScale, this.rendered && (this.renderer.setSize(this.width, this.height), this.uniforms_figure.uResolutionObject.value.set(this.baseMeshSize, this.baseMeshSize), this.mesh_word.scale.set(this.geoScale / this.initialScale, this.geoScale / this.initialScale, 1), this.mesh_figure.scale.set(this.geoScale / this.initialScale, this.geoScale / this.initialScale, 1), this.mesh_word.position.y = this.nowTranslate / 100 * this.geoScale, this.mesh_figure.position.y = this.nowTranslate / 100 * this.geoScale, this.camera_ortho.left = this.width / -2, this.camera_ortho.right = this.width / 2, this.camera_ortho.top = this.height / 2, this.camera_ortho.bottom = this.height / -2, this.camera_ortho.updateProjectionMatrix(), this.renderer.render(this.scene, this.camera_ortho))
  }
  onEnterCompleted() {
      this.scene.remove(this.mesh_figure), this.scene.remove(this.mesh_word), this.scene.remove(this.camera_ortho), super.disposeGeometry(this.geometry), super.disposeMaterial(this.material_figure), super.disposeMaterial(this.material_word), super.disposeRenderer(this.renderer), this.scene = void 0, this.camera_ortho = void 0, this.mesh_figure = void 0, this.mesh_word = void 0, this.geometry = void 0, this.material_figure = void 0, this.material_word = void 0, this.renderer = void 0
  }
}).register();
(class extends c {
  static componentName = "ValueChild";
  static selectorRoot = this.el;
  isScrollEnter = !1;
  onInit() {
      this.valueContent = this.refs.valueContent, this.prevContent = this.el.nextElementSibling, this.videoPC = new d(this.el?.querySelector(".video_pc")), this.videoSP = new d(this.el?.querySelector(".video_sp")), this.isFirst = this.el?.classList.contains("isFirst"), this.isLast = this.el?.classList.contains("isLast")
  }
  onIntersect({
      isIntersecting: i
  }) {
      i ? (this.valueContent.style.willChange = "transform,opacity,filter", this.playScroll()) : (this.pauseScroll(), this.isSP && this.videoSP.isPlay ? this.videoSP.pause() : !this.isSP && this.videoPC.isPlay && this.videoPC.pause(), this.valueContent.style.willChange = "")
  }
  onScroll({
      scroll: i
  }) {
      if (this.scrollStart <= i && i <= this.scrollEnd) {
          this.isScrollEnter || (this.isScrollEnter = !0, this.windowHeight || (this.windowHeight = window.innerHeight));
          const t = (i - this.scrollStart) / this.windowHeight - 1,
              e = this.isFirst ? 1 : Math.max(1 + .5 * -t, 1),
              s = this.isLast ? 1 : Math.min(1 - .5 * t, 1);
          t < 1 && t >= -1 && (this.isSP && !this.videoSP.isPlay ? this.videoSP.play() : !this.isSP && !this.videoPC.isPlay && this.videoPC.play());
          const n = `matrix3d(${e},0,0,0,0,${e},0,0,0,0,1,0,0,0,0,1)`;
          r.scrub(this.valueContent, {
              transform: n,
              opacity: 1,
              filter: `brightness(${s})`,
              duration: .2
          })
      } else this.isScrollEnter && (this.isScrollEnter = !1, this.overPosition = i < this.scrollStart ? "top" : "bottom", this.setOverStyle())
  }
  setOverStyle() {
      this.overPosition === "top" ? this.isFirst ? r.scrub(this.valueContent, {
          transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",
          filter: "brightness(1)",
          opacity: 1,
          duration: .2
      }) : r.scrub(this.valueContent, {
          transform: "matrix3d(1.5,0,0,0,0,1.5,0,0,0,0,1,0,0,0,0,1)",
          filter: "brightness(1)",
          opacity: 1,
          duration: .2
      }) : this.isLast ? r.scrub(this.valueContent, {
          transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",
          filter: "brightness(1)",
          opacity: 1,
          duration: .2
      }) : (this.isSP ? this.videoSP.isPlay && this.videoSP.pause() : this.videoPC.isPlay && this.videoPC.pause(), r.scrub(this.valueContent, {
          transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",
          filter: "brightness(0)",
          opacity: 0,
          duration: .2
      }))
  }
  onResize({
      windowWidth: i,
      windowHeight: t
  }) {
      this.isSP = h.isSp, this.valueContent.style.filter = "", this.valueContent.style.transform = "";
      const {
          scrollY: e
      } = this;
      this.el.style.position = "static";
      const {
          top: s,
          bottom: n
      } = this.el.getBoundingClientRect();
      this.el.style.position = "", this.windowHeight = t, this.scrollStart = s + e - t, this.scrollEnd = n + e, this.scrollDistance = this.scrollEnd - this.scrollStart
  }
}).register();
const O = {
  src: "/_astro/noise_texture_10_gl.6bcee42a.png",
  width: 100,
  height: 100,
  format: "png"
};
var A = `precision highp float;

varying vec2 vUv;
uniform sampler2D maskTex;
uniform sampler2D reverseTex;
uniform sampler2D repeatTex;
uniform bool playDir;

uniform vec2 uResolutionObject;
uniform vec2 maskRes;
uniform vec2 repeatRes;

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
vec2 maskUV = fitCover(uv, maskRes, uResolutionObject);
vec2 repeatUV = vec2(fract(uv.x * (uResolutionObject.x/repeatRes.x)), fract(uv.y * (uResolutionObject.y/repeatRes.y)));

vec4 repeatColor = texture2DInnerRange(repeatTex, repeatUV);
vec4 brushColor = playDir ? texture2DInnerRange(maskTex, maskUV) : texture2DInnerRange(reverseTex, maskUV);

gl_FragColor = vec4(repeatColor.rgb, brushColor.r);

}`;
(class extends y {
  static componentName = "ThoughtsGL";
  onInit() {
      this.width = this.el?.parentNode.clientWidth, this.height = this.el?.parentNode.clientHeight, this.el.addEventListener("playchange", this.playContainerMaskAnimation), super.onInit({
          isFullSize: !1,
          autoClear: !0,
          pixelRatioMax: 1.5
      }), this.camera_ortho = new E(this.width / -2, this.width / 2, this.height / 2, this.height / -2, .1, 2), this.camera_ortho.position.z = 1;
      let i = !1,
          t = !1,
          e = !1;
      const s = document.createElement("video");
      s.muted = !0, s.preload = "none", s.playsInline = !0, s.addEventListener("canplay", o => {
          t = !0, i && e && this.loadedTex()
      }), s.src = "/assets/video/contents_hude.mp4", s.load(), this.containerMaskVideo_tex = new b(s), this.containerMaskVideo_control = new d(this.containerMaskVideo_tex.source.data);
      const n = document.createElement("video");
      n.muted = !0, n.preload = "none", n.playsInline = !0, n.addEventListener("canplay", o => {
          e = !0, i && t && this.loadedTex()
      }), n.src = "/assets/video/contents_hude_reverse.mp4", n.load(), this.reverseMaskVideo_tex = new b(n), this.reverseMaskVideo_control = new d(this.reverseMaskVideo_tex.source.data), u(O, {
          onLoad: o => {
              i = !0, this.repeatTexture = o, t && e && this.loadedTex()
          }
      })
  }
  loadedTex() {
      this.initialWidth = this.width, this.initialHeight = this.height, this.pixelRatio = Math.min(window.devicePixelRatio, this.pixelRatioMax);
      const i = p({
          maskTex: this.containerMaskVideo_tex,
          reverseTex: this.reverseMaskVideo_tex,
          repeatTex: this.repeatTexture,
          playDir: !0,
          maskRes: new l(this.containerMaskVideo_tex.source.data.videoWidth, this.containerMaskVideo_tex.source.data.videoHeight),
          repeatRes: new l(this.repeatTexture.source.data.width, this.repeatTexture.source.data.height),
          uResolutionObject: new l(this.width, this.height)
      });
      this.uniforms = m(i), this.material = new v({
          uniforms: i,
          vertexShader: f,
          fragmentShader: A,
          transparent: !0,
          depthTest: !1,
          depthWrite: !1
      }), this.geometry = new L(this.width, this.height), this.mesh = new g(this.geometry, this.material), this.scene.add(this.mesh), this.rendered = !0
  }
  playContainerMaskAnimation = i => {
      this.containerMaskVideo_control.el.removeEventListener("ended", this.endContainerMask), this.reverseMaskVideo_control.el.removeEventListener("ended", this.endContainerMask), Math.max(i.detail.direction(), 0) ? this.playFlg === "back" ? (this.reverseMaskVideo_control.el.removeEventListener("ended", this.endContainerMask), this.reverseMaskVideo_control.pause(), this.uniforms.playDir.value = !0, this.containerMaskVideo_control.el.addEventListener("seeked", this.seekedAndPlayContainer), this.containerMaskVideo_control.el.currentTime = this.reverseMaskVideo_control.el.currentTime, this.reverseMaskVideo_control.el.currentTime = 0) : (this.renderer.clear(), this.uniforms.playDir.value = !0, this.containerMaskVideo_control.el.addEventListener("seeked", this.seekedAndPlayContainer), this.containerMaskVideo_control.el.currentTime = 0) : this.playFlg === "back" ? (this.reverseMaskVideo_control.el.removeEventListener("ended", this.endContainerMask), this.reverseMaskVideo_control.pause(), this.uniforms.playDir.value = !1, this.reverseMaskVideo_control.el.addEventListener("seeked", this.seekedAndPlayContainer), this.reverseMaskVideo_control.el.currentTime = this.containerMaskVideo_control.el.currentTime, this.containerMaskVideo_control.el.currentTime = 0) : (this.uniforms.playDir.value = !1, this.reverseMaskVideo_control.el.addEventListener("seeked", this.seekedAndPlayReverse), this.reverseMaskVideo_control.el.currentTime = 0)
  };
  seekedAndPlayContainer = () => {
      this.containerMaskVideo_control.el.removeEventListener("seeked", this.seekedAndPlayContainer), requestAnimationFrame(() => {
          this.playFlg = "forward", this.containerMaskVideo_control.play(), this.containerMaskVideo_control.el.addEventListener("ended", this.endContainerMask), this.playTick()
      })
  };
  seekedAndPlayReverse = () => {
      this.reverseMaskVideo_control.el.removeEventListener("seeked", this.seekedAndPlayReverse), requestAnimationFrame(() => {
          this.playFlg = "back", this.reverseMaskVideo_control.play(), this.reverseMaskVideo_control.el.addEventListener("ended", this.endReverseMask), this.playTick()
      })
  };
  endContainerMask = () => {
      this.playFlg = null, this.containerMaskVideo_control.el.removeEventListener("ended", this.endContainerMask), this.containerMaskVideo_control.pause(), this.containerMaskVideo_control.el.currentTime = 0, this.pauseTick()
  };
  endReverseMask = () => {
      this.playFlg = null, this.reverseMaskVideo_control.el.removeEventListener("ended", this.endReverseMask), this.reverseMaskVideo_control.pause(), this.renderer.clear(), this.pauseTick()
  };
  onTick() {
      this.renderer.render(this.scene, this.camera_ortho)
  }
  onResize() {
      this.width = this.el?.parentNode.clientWidth, this.height = this.el?.parentNode.clientHeight, this.rendered && (this.renderer.setSize(this.width, this.height), this.uniforms.uResolutionObject.value = this.uniforms.uResolutionObject.value.set(this.width, this.height), this.mesh.scale.set(this.width / this.initialWidth, this.height / this.initialHeight, 1), this.camera_ortho.left = this.width / -2, this.camera_ortho.right = this.width / 2, this.camera_ortho.top = this.height / 2, this.camera_ortho.bottom = this.height / -2, this.camera_ortho.updateProjectionMatrix(), this.renderer.render(this.scene, this.camera_ortho))
  }
  onEnterCompleted() {
      this.scene.remove(this.mesh), this.scene.remove(this.camera_ortho), super.disposeGeometry(this.geometry), super.disposeMaterial(this.material), super.disposeRenderer(this.renderer), this.camera_ortho = void 0, this.scene = void 0, this.mesh = void 0, this.geometry = void 0, this.material = void 0, this.renderer = void 0
  }
}).register();