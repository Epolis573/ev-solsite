import {
  P as y,
  C as n,
  S as d,
  a,
  g as o,
  i as u,
  b as S,
  c as g,
  V as p,
  m as f
} from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
import "./VideoAuto.astro_astro_type_script_index_0_lang.c0781f95.js";
import "./AnchorLinks.astro_astro_type_script_index_0_lang.7092990b.js";
import "./BrushContainer.astro_astro_type_script_index_0_lang.a82a931f.js";
import "./LowerTitle.astro_astro_type_script_index_0_lang.f9bd55d6.js";
import "./IconList.astro_astro_type_script_index_0_lang.802c6ccd.js";
import "./lottie.bd4b17b2.js";
(class extends y {}).register();
(class extends n {
  static componentName = "FV";
  static selectorRoot = "[data-parallax-fv]";
  isScrollEnter = !1;
  onInit() {
      this.mainTxt = this.refs.titleTxt, this.subTxt = this.el?.querySelector(".subTxt"), this.ankerLinks = this.el?.querySelector(".AnchorLinks"), this.delayMax = .5, this.delayArray = [], this.splitTarget = new d(this.el.querySelector(".mainTxt").querySelectorAll("span"), {
          type: "chars",
          charsClass: "SectionTitle-splitTxt"
      }), this.splitTarget.chars.forEach((s, t) => {
          this.delayArray.push(this.delayMax * a.utils.random(0, 1))
      })
  }
  onIntersect({
      isIntersecting: s
  }) {
      s ? (this.mainTxt.style.willChange = "opacity,filter", this.subTxt.style.willChange = "opacity,filter", this.ankerLinks.style.willChange = "opacity,filter", this.splitTarget.chars.forEach((t, e) => {
          t.style.willChange = "transform,opacity,filter"
      }), this.playScroll()) : (this.pauseScroll(), this.mainTxt.style.willChange = "", this.subTxt.style.willChange = "", this.ankerLinks.style.willChange = "", this.splitTarget.chars.forEach((t, e) => {
          t.style.willChange = ""
      }))
  }
  onScroll({
      scroll: s
  }) {
      if (this.scrollStart <= s && s <= this.scrollEnd) {
          this.isScrollEnter || (this.isScrollEnter = !0);
          const t = Math.min(Math.max(1 - s / this.scrollDistance * 2, 0), 1),
              e = Math.max(s / this.scrollDistance * 2 * 5, 0);
          this.mainTween = o.scrub(this.mainTxt, {
              opacity: `${t}`,
              filter: `blur(${e}px)`,
              duration: .2
          }), this.subTween = o.scrub(this.subTxt, {
              opacity: `${t}`,
              filter: `blur(${e}px)`,
              duration: .2
          }), this.ankerTween = o.scrub(this.ankerLinks, {
              opacity: `${t}`,
              filter: `blur(${e}px)`,
              duration: .2
          }), this.splitTween = o.scrub(this.splitTarget.chars, {
              opacity: (i, r, l) => Math.min(Math.max(t * 2 - this.delayArray[i], 0), 1),
              filter: (i, r, l) => `blur(${Math.max((1-t)*2-this.delayArray[i],0)*5}px)`,
              transform: (i, r, l) => `translateZ(${Math.max((1-t)*2-this.delayArray[i],0)*12}vw)`,
              duration: .2
          })
      } else this.isScrollEnter && s > 0 && (this.isScrollEnter = !1, this.mainTween = o.scrub(this.mainTxt, {
          opacity: "0",
          filter: "blur(5px)",
          duration: .2
      }), this.subTween = o.scrub(this.subTxt, {
          opacity: "0",
          filter: "blur(5px)",
          duration: .2
      }), this.ankerTween = o.scrub(this.ankerLinks, {
          opacity: "0",
          filter: "blur(5px)",
          duration: .2
      }), this.splitTween = o.scrub(this.splitTarget.chars, {
          opacity: function(t, e, i) {
              return 0
          },
          filter: (t, e, i) => `blur(${(2-this.delayArray[t])*5}px)`,
          transform: (t, e, i) => `translateZ(${Math.max(2-this.delayArray[t],0)*12}vw)`,
          duration: .2
      }))
  }
  onResize({
      windowWidth: s,
      windowHeight: t
  }) {
      const {
          scrollY: e
      } = this, {
          bottom: i
      } = this.el.getBoundingClientRect();
      this.scrollStart = 0, this.scrollEnd = i + e, this.scrollDistance = this.scrollEnd - this.scrollStart
  }
}).register();
(class extends n {
  static componentName = "VALUE";
  onInit() {
      this.greenLayer = this.el.querySelector(".green-layer"), this.blueLayer = this.el.querySelector(".blue-layer"), this.topLayer = this.el.querySelector(".overtop-bg"), !u && window.navigator.userAgent.indexOf("Firefox") === -1 && (this.blueLayer.classList.add("isPC_color"), this.topLayer.classList.add("isPC_color"))
  }
  onIntersect({
      isIntersecting: s
  }) {
      s ? this.greenLayer.style.willChange = "clip-path" : this.greenLayer.style.willChange = ""
  }
}).register();
(class extends n {
  static componentName = "ADVANTAGES";
  onInit() {
      this.bg = this.el.querySelector(".img_gradation"), this.addIntersectionObserver({
          el: this.bg,
          callback: ({
              isIntersecting: s
          }, t) => {
              s ? this.bg.classList.add("isAnimate") : this.bg.classList.remove("isAnimate")
          },
          param: {
              rootMargin: "0% 0% 0% 0%"
          },
          once: !1
      })
  }
}).register();
(class extends n {
  static componentName = "scene_01";
  isScrollEnter = !1;
  FRAME_THRESHOLD = .01;
  IS_USE_VIDEO_PLAY = S || !u && !g;
  onInit() {
      this.greenLayer = document.querySelector(".green-layer"), this.blueLayer = document.querySelector(".blue-layer"), this.blueVideo = new p(document.querySelector(".video_blue")), this.videoFPS = 1 / 25, this.blueIcons = document.querySelectorAll(".blue-icon"), this.greenIcons = document.querySelectorAll(".green-icon"), this.iconIndexArray = [0, 4, 2, 3, 5, 1], this.isSeeking = !1, this.isSeekFinish = !1, this.isSeekWait = !1, this.blueVideo.load(() => {
          this.videoLength = Math.floor(this.blueVideo.el.duration / this.videoFPS) - 2
      }), this.blueVideo.el.addEventListener("seeking", () => {
          this.isSeeking = !0
      }), this.blueVideo.el.addEventListener("seeked", () => {
          this.isSeeking = !1, this.isSeekWait && (this.blueVideo.el.currentTime = this.videoLength * this.videoFPS, this.isSeekWait = !1)
      })
  }
  onIntersect({
      isIntersecting: s
  }) {
      s ? (this.blueVideo.el.style.willChange = "opacity", this.playScroll()) : (this.blueVideo.el.style.willChange = "", this.pauseScroll())
  }
  debounce = (s, t) => {
      let e;
      return function(...i) {
          clearTimeout(e), e = setTimeout(() => {
              s.apply(this, i)
          }, t)
      }
  };
  onTick(s, t, e, i) {
      this.isPlayVideo && this.blueVideo.el.currentTime - this.targetTime >= -this.FRAME_THRESHOLD && (this.isPlayVideo = !1, this.blueVideo.pause(), this.pauseTick())
  }
  onScroll({
      scroll: s,
      direction: t
  }) {
      if (this.scrollStart <= s && s <= this.scrollEnd) {
          const e = (s - this.scrollStart) / this.scrollDistance - 1,
              i = (1 + e) * 3,
              r = (1 + e) * 2,
              l = Math.min(i, 1),
              h = Math.max(Math.min(i - 1.5, 1), 0);
          this.isScrollEnter || (this.isScrollEnter = !0, h === 1 && (this.greenLayer.style.clipPath = "circle(100% at 50% 50%)")), this.opacityTween = o.scrub(this.blueVideo.el, {
              opacity: `${l}`,
              duration: .2
          }), i <= 1 ? (this.isSeekFinish = !1, this.targetTime = Math.floor(l * this.videoLength) * this.videoFPS, this.IS_USE_VIDEO_PLAY && t > 0 ? (this.blueVideo.el.playbackRate = Math.max(Math.min((this.targetTime - this.blueVideo.el.currentTime) * 4, 8), 1), !this.isPlayVideo && this.blueVideo.el.currentTime - this.targetTime < -this.FRAME_THRESHOLD && (this.isPlayVideo = !0, this.blueVideo.play())) : (this.isPlayVideo && (this.isPlayVideo = !1, this.blueVideo.pause()), !this.isPlayVideo && !this.isSeeking && (this.blueVideo.el.currentTime = Math.floor(l * this.videoLength) * this.videoFPS))) : this.isSeekFinish ? (this.blueVideo.el.currentTime = this.videoLength * this.videoFPS, this.isSeekFinish = !0) : this.isSeekWait = !0, this.maskTween = o.scrub(this.greenLayer, {
              clipPath: `circle(${h*100}% at 50% 50%)`,
              duration: .2
          }), r > .8 ? (this.blueIcons[this.iconIndexArray[0]].classList.add("scrollShow"), this.greenIcons[this.iconIndexArray[0]].classList.add("scrollShow")) : (this.blueIcons[this.iconIndexArray[0]].classList.remove("scrollShow"), this.greenIcons[this.iconIndexArray[0]].classList.remove("scrollShow")), r > .83 ? (this.blueIcons[this.iconIndexArray[1]].classList.add("scrollShow"), this.greenIcons[this.iconIndexArray[1]].classList.add("scrollShow")) : (this.blueIcons[this.iconIndexArray[1]].classList.remove("scrollShow"), this.greenIcons[this.iconIndexArray[1]].classList.remove("scrollShow")), r > .86 ? (this.blueIcons[this.iconIndexArray[2]].classList.add("scrollShow"), this.greenIcons[this.iconIndexArray[2]].classList.add("scrollShow")) : (this.blueIcons[this.iconIndexArray[2]].classList.remove("scrollShow"), this.greenIcons[this.iconIndexArray[2]].classList.remove("scrollShow")), r > .89 ? (this.blueIcons[this.iconIndexArray[3]].classList.add("scrollShow"), this.greenIcons[this.iconIndexArray[3]].classList.add("scrollShow")) : (this.blueIcons[this.iconIndexArray[3]].classList.remove("scrollShow"), this.greenIcons[this.iconIndexArray[3]].classList.remove("scrollShow")), r > .92 ? (this.blueIcons[this.iconIndexArray[4]].classList.add("scrollShow"), this.greenIcons[this.iconIndexArray[4]].classList.add("scrollShow")) : (this.blueIcons[this.iconIndexArray[4]].classList.remove("scrollShow"), this.greenIcons[this.iconIndexArray[4]].classList.remove("scrollShow")), r > .95 ? (this.blueIcons[this.iconIndexArray[5]].classList.add("scrollShow"), this.greenIcons[this.iconIndexArray[5]].classList.add("scrollShow")) : (this.blueIcons[this.iconIndexArray[5]].classList.remove("scrollShow"), this.greenIcons[this.iconIndexArray[5]].classList.remove("scrollShow"))
      } else this.isScrollEnter && (this.isScrollEnter = !1, this.overPosition = s < this.scrollStart ? "top" : "bottom", this.setOverStyle())
  }
  setOverStyle(s = !1) {
      this.overPosition === "top" ? this.blueVideo.el.opacity = 0 : (this.maskTween && this.maskTween.kill(), this.greenLayer.style.clipPath = "", this.blueIcons.forEach((t, e) => {
          t.classList.add("scrollShow")
      }), this.greenIcons.forEach((t, e) => {
          t.classList.add("scrollShow")
      }))
  }
  onResize({
      windowWidth: s,
      windowHeight: t
  }) {
      const {
          scrollY: e
      } = this, {
          top: i,
          bottom: r,
          height: l
      } = this.el.getBoundingClientRect();
      this.scrollStart = i + e - t, this.scrollEnd = r + e, this.scrollDistance = this.scrollEnd - this.scrollStart, (e < this.scrollStart || e > this.scrollEnd) && (this.overPosition = e < this.scrollStart ? "top" : "bottom", this.setOverStyle(!0))
  }
}).register();
(class extends n {
  static componentName = "scene_02";
  isScrollEnter = !1;
  isMaskLeave = !0;
  onInit() {
      this.scrollText = document.querySelector(".green-text"), this.greenLayer = document.querySelector(".green-layer"), this.grayLayer = document.querySelector(".gray-layer"), this.blueIcons = document.querySelectorAll(".blue-icon"), this.greenIcons = document.querySelectorAll(".green-icon"), this.textTop = document.querySelector(".toughts-main"), this.textBottom = document.querySelector(".toughts-sub")
  }
  onIntersect({
      isIntersecting: s
  }) {
      s ? (this.scrollText.style.willChange = "transform", this.playScroll()) : (this.scrollText.style.willChange = "", this.pauseScroll())
  }
  onScroll({
      scroll: s
  }) {
      if (this.scrollStart <= s && s <= this.scrollEnd) {
          const t = (s - this.scrollStart) / this.scrollDistance - 1,
              e = (1 + t) * 2,
              i = Math.min(e, 1),
              r = (1 + t) * 3,
              l = Math.max(Math.min(r - 1, 1), 0);
          this.isScrollEnter || (this.isScrollEnter = !0, this.blueIcons.forEach((c, m) => {
              c.classList.remove("isPause")
          }), this.greenIcons.forEach((c, m) => {
              c.classList.remove("isPause")
          }), this.grayLayer.classList.contains("show") || this.grayLayer.classList.add("show"));
          const h = `
        translateX(calc(${i*-100}vw + ${i*-100}%))
      `;
          this.textTween = o.scrub(this.scrollText, {
              transform: `${h}`,
              duration: .2
          }), l > 0 && (this.isMaskLeave = !1, this.isSP ? this.maskTween = o.scrub(this.greenLayer, {
              clipPath: `inset(${l*this.maskHeightTOP}lvh ${l*this.maskWidth}vw round ${l*this.maskRadius}vw)`,
              duration: .2
          }) : this.maskTween = o.scrub(this.greenLayer, {
              clipPath: `inset(${l*this.maskHeightTOP}lvh ${l*this.maskWidth}vw ${l*this.maskHeightBottom}lvh round ${l*this.maskRadius}vw)`,
              duration: .2
          }), l > .7 ? (this.textTop.classList.add("scrollShow"), this.textBottom.classList.add("scrollShow")) : (this.textTop.classList.remove("scrollShow"), this.textBottom.classList.remove("scrollShow"))), r < 1 && (this.isMaskLeave || (this.isMaskLeave = !0, this.maskTween = o.scrub(this.greenLayer, {
              clipPath: "inset(0lvh 0vw round 0vw)",
              duration: .2
          })))
      } else this.isScrollEnter && (this.isScrollEnter = !1, this.overPosition = s < this.scrollStart ? "top" : "bottom", this.setOverStyle())
  }
  setOverStyle(s = !1) {
      this.overPosition === "top" ? (this.grayLayer.classList.contains("show") && this.grayLayer.classList.remove("show"), this.textTop.classList.remove("scrollShow"), this.textBottom.classList.remove("scrollShow"), this.textTween && this.textTween.kill(), this.scrollText.style.transform = "") : (this.grayLayer.classList.contains("show") || this.grayLayer.classList.add("show"), this.textTop.classList.add("scrollShow"), this.textBottom.classList.add("scrollShow"), this.isSP ? this.greenLayer.style.clipPath = `inset(${this.maskHeightTOP}lvh ${this.maskWidth}vw round ${this.maskRadius}vw)` : this.greenLayer.style.clipPath = `inset(${this.maskHeightTOP}lvh ${this.maskWidth}vw ${this.maskHeightBottom}lvh round ${this.maskRadius}vw)`, this.blueIcons.forEach((t, e) => {
          t.classList.add("isPause")
      }), this.greenIcons.forEach((t, e) => {
          t.classList.add("isPause")
      }))
  }
  onResize({
      windowWidth: s,
      windowHeight: t
  }) {
      this.isSP = f.isSp, this.isSP ? (this.maskWidth = 7.2, this.maskHeightTOP = 40, this.maskHeightBottom = 40, this.maskRadius = 17) : (this.maskWidth = 26, this.maskHeightTOP = 42, this.maskHeightBottom = 26, this.maskRadius = 16);
      const {
          scrollY: e
      } = this, {
          top: i,
          bottom: r
      } = this.el.getBoundingClientRect();
      this.windowHeight = t, this.scrollStart = i + e - t, this.scrollEnd = r + e, this.scrollDistance = this.scrollEnd - this.scrollStart, (e < this.scrollStart || e > this.scrollEnd) && (this.overPosition = e < this.scrollStart ? "top" : "bottom", this.setOverStyle(!0))
  }
}).register();
(class extends n {
  static componentName = "SecondView";
  static selectorRoot = "[data-parallax-sv]";
  isScrollEnter = !1;
  onInit() {
      this.blurSubTop = this.el?.querySelector(".blur-subTop"), this.blurSubBottom = this.el?.querySelector(".blur-subBottom"), this.delayMax = .5, this.delayArray = [], this.splitTarget = new d(this.el?.querySelector(".title-ja"), {
          type: "chars",
          charsClass: "SectionTitle-splitTxt"
      }), this.splitTarget.chars.forEach((s, t) => {
          this.delayArray.push(this.delayMax * a.utils.random(0, 1))
      })
  }
  onIntersect({
      isIntersecting: s
  }) {
      s ? (this.blurSubTop.style.willChange = "transform,opacity,filter", this.blurSubBottom.style.willChange = "transform,opacity,filter", this.splitTarget.chars.forEach((t, e) => {
          t.style.willChange = "transform,opacity,filter"
      }), this.playScroll()) : (this.pauseScroll(), this.blurSubTop.style.willChange = "", this.blurSubBottom.style.willChange = "", this.splitTarget.chars.forEach((t, e) => {
          t.style.willChange = ""
      }))
  }
  onScroll({
      scroll: s
  }) {
      if (this.scrollStart <= s && s <= this.scrollEnd) {
          this.isScrollEnter || (this.isScrollEnter = !0, this.windowHeight || (this.windowHeight = window.innerHeight));
          const t = Math.min(Math.max(((s - this.scrollStart) / this.windowHeight - 1) * 2, 0), 1),
              e = t,
              i = (1 - t) * 5,
              r = `translateZ(${(1-t)*-12}vw)`;
          this.subTopTween = o.scrub(this.blurSubTop, {
              opacity: `${e}`,
              filter: `blur(${i}px)`,
              transform: `${r}`,
              duration: .2
          }), this.subBottomTween = o.scrub(this.blurSubBottom, {
              opacity: `${e}`,
              filter: `blur(${i}px)`,
              transform: `${r}`,
              duration: .2
          }), this.splitTween = o.scrub(this.splitTarget.chars, {
              opacity: (l, h, c) => Math.min(Math.max(t * 2 - this.delayArray[l], 0), 1),
              filter: (l, h, c) => `blur(${Math.max((1-t)*2-this.delayArray[l],0)*5}px)`,
              transform: (l, h, c) => `translateZ(${Math.max((1-t)*2-this.delayArray[l],0)*-12}vw)`,
              duration: .2
          })
      } else this.isScrollEnter && (this.isScrollEnter = !1, this.subTopTween && (this.subTopTween.kill(), this.subBottomTween.kill(), this.splitTween.kill(), this.subTopTween = void 0, this.subBottomTween = void 0, this.splitTween = void 0), s - this.scrollStart <= 0 ? (a.set(this.blurSubTop, {
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
      })) : (a.set(this.blurSubTop, {
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
      })))
  }
  onResize({
      windowWidth: s,
      windowHeight: t
  }) {
      const {
          scrollY: e
      } = this;
      this.el.style.position = "static";
      const {
          top: i,
          bottom: r
      } = this.el.getBoundingClientRect();
      this.el.style.position = "", this.windowHeight = t, this.scrollStart = i + e - t, this.scrollEnd = r + e, this.scrollDistance = this.scrollEnd - this.scrollStart
  }
}).register();
(class extends n {
  static componentName = "value-card";
  isScrollEnter = !1;
  onInit() {
      this.cardImg = this.el?.querySelector("img")
  }
  onIntersect({
      isIntersecting: s
  }) {
      s ? (this.cardImg.style.willChange = "transform", this.playScroll()) : (this.pauseScroll(), this.cardImg.style.willChange = "")
  }
  onScroll({
      scroll: s
  }) {
      if (this.scrollStart <= s && s <= this.scrollEnd) {
          this.isScrollEnter || (this.isScrollEnter = !0, this.windowHeight || (this.windowHeight = window.innerHeight));
          const t = 1 + ((s - this.scrollStart) / this.scrollDistance - 1);
          o.scrub(this.cardImg, {
              transform: `translate3d(0,${(1-t)*20}%,0`,
              duration: .2
          })
      } else this.isScrollEnter && (this.isScrollEnter = !1, this.maskTween && (this.maskTween.kill(), this.maskTween = void 0), this.overPosition = scrollY < this.scrollStart ? "top" : "bottom", this.setOverStyle())
  }
  setOverStyle(s = !1) {
      this.overPosition === "top" ? a.set(this.cardImg, {
          transform: "translate3d(0,0,0)"
      }) : a.set(this.cardImg, {
          transform: "translate3d(0,20%,0)"
      })
  }
  onResize({
      windowWidth: s,
      windowHeight: t
  }) {
      const {
          scrollY: e
      } = this, {
          top: i,
          bottom: r
      } = this.el.getBoundingClientRect();
      this.windowHeight = t, this.scrollStart = i + e - t, this.scrollEnd = r + e, this.scrollDistance = this.scrollEnd - this.scrollStart, (e < this.scrollStart || e > this.scrollEnd) && (this.overPosition = e < this.scrollStart ? "top" : "bottom", this.setOverStyle(!0))
  }
}).register();