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
import {
  L as E
} from "./Local.454029b8.js";
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
import {
  I as P
} from "./Intro.1426c987.js";
import "./LowerTitle.astro_astro_type_script_index_0_lang.f9bd55d6.js";
import "./IconList.astro_astro_type_script_index_0_lang.802c6ccd.js";
import "./project.49f9dddf.js";
import "./lottie.bd4b17b2.js";
(class extends S {}).register();
(class extends E {
  static componentName = "Feature";
  onResize() {
      const t = this.refs.item,
          e = {
              root: null,
              rootMargin: "0% 0% -100% 0%",
              threshold: 0
          },
          i = r => {
              r.forEach(a => {
                  a.isIntersecting ? a.target.classList.add("-entry") : a.target.classList.remove("-entry")
              })
          },
          s = new IntersectionObserver(i, e);
      (Array.isArray(t) ? t : [t]).forEach(r => {
          s.observe(r)
      })
  }
}).register();
(class extends m {
  static componentName = "FV";
  static selectorRoot = "[data-parallax-fv]";
  isScrollEnter = !1;
  onInit() {
      this.mainTxt = this.refs.titleTxt, this.subTxt = this.el?.querySelector(".subTxt"), this.ankerLinks = this.el?.querySelector(".AnchorLinks"), this.GL = document.querySelector(".GL"), this.eventBlurVal = {
          progress: 0
      }, this.blurEvent = new CustomEvent("blurchabge", {
          detail: {
              progress: () => this.eventBlurVal.progress
          }
      }), this.delayMax = .5, this.delayArray = [], this.splitTarget = new w(this.el.querySelector(".mainTxt").querySelectorAll("span"), {
          type: "chars",
          charsClass: "SectionTitle-splitTxt"
      }), this.splitTarget.chars.forEach((t, e) => {
          this.delayArray.push(this.delayMax * o.utils.random(0, 1))
      })
  }
  onIntersect({
      isIntersecting: t
  }) {
      t ? (this.mainTxt.style.willChange = "opacity,filter", this.subTxt.style.willChange = "opacity,filter", this.ankerLinks.style.willChange = "opacity,filter", this.splitTarget.chars.forEach((e, i) => {
          e.style.willChange = "transform,opacity,filter"
      }), this.playScroll()) : (this.pauseScroll(), this.mainTxt.style.willChange = "", this.subTxt.style.willChange = "", this.ankerLinks.style.willChange = "", this.splitTarget.chars.forEach((e, i) => {
          e.style.willChange = ""
      }))
  }
  onScroll({
      scroll: t
  }) {
      if (this.scrollStart <= t && t <= this.scrollEnd) {
          this.isScrollEnter || (this.isScrollEnter = !0);
          const e = Math.min(Math.max(1 - t / this.scrollDistance * 2, 0), 1),
              i = Math.max(t / this.scrollDistance * 2 * 5, 0);
          this.mainTween = n.scrub(this.mainTxt, {
              opacity: `${e}`,
              filter: `blur(${i}px)`,
              duration: .2
          }), this.subTween = n.scrub(this.subTxt, {
              opacity: `${e}`,
              filter: `blur(${i}px)`,
              duration: .2
          }), this.ankerTween = n.scrub(this.ankerLinks, {
              opacity: `${e}`,
              filter: `blur(${i}px)`,
              duration: .2
          }), this.splitTween = n.scrub(this.splitTarget.chars, {
              opacity: (s, r, a) => Math.min(Math.max(e * 2 - this.delayArray[s], 0), 1),
              filter: (s, r, a) => `blur(${Math.max((1-e)*2-this.delayArray[s],0)*5}px)`,
              transform: (s, r, a) => `translateZ(${Math.max((1-e)*2-this.delayArray[s],0)*12}vw)`,
              duration: .2
          }), this.glTween = n.scrub(this.eventBlurVal, {
              progress: e,
              duration: .2,
              onUpdate: () => {
                  this.GL.dispatchEvent(this.blurEvent)
              }
          })
      } else this.isScrollEnter && t > 0 && (this.isScrollEnter = !1, this.mainTween = n.scrub(this.mainTxt, {
          opacity: "0",
          filter: "blur(5px)",
          duration: .2
      }), this.subTween = n.scrub(this.subTxt, {
          opacity: "0",
          filter: "blur(5px)",
          duration: .2
      }), this.ankerTween = n.scrub(this.ankerLinks, {
          opacity: "0",
          filter: "blur(5px)",
          duration: .2
      }), this.splitTween = n.scrub(this.splitTarget.chars, {
          opacity: function(e, i, s) {
              return 0
          },
          filter: (e, i, s) => `blur(${(2-this.delayArray[e])*5}px)`,
          transform: (e, i, s) => `translateZ(${Math.max(2-this.delayArray[e],0)*12}vw)`,
          duration: .2
      }), this.glTween = n.scrub(this.eventBlurVal, {
          progress: 0,
          duration: .2,
          onUpdate: () => {
              this.GL.dispatchEvent(this.blurEvent)
          }
      }))
  }
  onResize({
      windowWidth: t,
      windowHeight: e
  }) {
      const {
          scrollY: i
      } = this, {
          bottom: s
      } = this.el.getBoundingClientRect();
      this.scrollStart = 0, this.scrollEnd = s + i, this.scrollDistance = this.scrollEnd - this.scrollStart
  }
}).register();
(class extends m {
  static componentName = "SecondView";
  static selectorRoot = "[data-parallax-thoughts]";
  isScrollEnter = !1;
  onInit() {}
  onIntersect({
      isIntersecting: t
  }) {
      t ? this.playScroll() : this.pauseScroll()
  }
  onScroll({
      scroll: t
  }) {
      this.scrollStart <= t && t <= this.scrollEnd ? (this.isScrollEnter || (this.isScrollEnter = !0), (t - this.scrollStart) / this.scrollDistance - 1) : this.isScrollEnter && (this.isScrollEnter = !1)
  }
  getNum(t) {
      const e = /[^0-9]/g,
          i = t.replace(e, "");
      return parseInt(i)
  }
  onResize({
      windowWidth: t,
      windowHeight: e
  }) {
      const {
          scrollY: i
      } = this, {
          top: s,
          bottom: r,
          height: a
      } = this.el.getBoundingClientRect();
      this.scrollStart = s + i - e, this.scrollEnd = r + i, this.scrollDistance = this.scrollEnd - this.scrollStart
  }
}).register();
(class extends f {
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
      this.isInit || (this.isInit = !0, this.emitSelfResize(), this.gl = P.create(this.el, {
          renderer: this.renderer,
          camera: this.camera,
          width: this.width,
          height: this.height,
          pixelRatio: this.pixelRatio,
          isLowerPage: !0
      }), this.emitSelfResize(), this.el.addEventListener("blurchabge", this.blurChange), this.gl.render())
  }
  blurChange = t => {
      const e = Math.max(t.detail.progress(), 0);
      this.nowBlur !== e && (this.stats?.begin(), this.gl.blur(e), this.stats?.end(), this.nowBlur = e)
  };
  onLoadDone() {
      this.gl.blur(1)
  }
  onResize() {
      super.onResize(), this.gl?.resize(this.width, this.height, this.pixelRatio)
  }
  onIntersect({
      isIntersecting: t
  }, e) {
      t ? this.playTick() : this.pauseTick()
  }
  onTick(t, e, i) {
      if (i % 2 === 0) {
          const s = this.storedDeltaTime + e;
          this.storedDeltaTime = 0, this.gl.tick(t, s, i), this.gl.render()
      } else this.storedDeltaTime += e
  }
}).register();
(class extends m {
  static componentName = "slider_wrapper";
  isShow = !1;
  isHover = !1;
  isDrag = !1;
  isAnimate = !1;
  nowIndex = 0;
  onInit() {
      this.isSP = d.isSp, this.mouseStorker = this.el?.querySelector(".mouse_storker"), this.mouseArrow = this.el?.querySelector(".arrow_storker"), this.hoverTarget = this.el?.querySelectorAll("a"), this.sliders = this.el?.querySelectorAll(".SliderChild"), this.sliderNum_current = this.el?.querySelector(".sliderNum_current"), this.sliderNum_current.textContent = ("00" + this.nowIndex + 1).slice(-2), this.sliderNum_total = this.el?.querySelector(".sliderNum_total"), this.sliderNum_total.textContent = ("00" + this.sliders.length).slice(-2), this.moveValue = 20, this.maeqeeArray = [], this.el?.querySelectorAll("[data-marquee]").forEach((t, e) => {
          this.maeqeeArray.push(b.create(t))
      }), this.slideNextEvent = new CustomEvent("slideNext"), this.slidePrevEvent = new CustomEvent("slidePrev"), this.el.addEventListener("slideFinish", this.enableInteract), o.set(this.sliders[this.nowIndex].querySelector(".main-txt"), {
          opacity: 1
      }), o.set(this.sliders[this.nowIndex].querySelector(".info-txt"), {
          opacity: 1
      }), o.set(this.sliders[this.nowIndex].querySelector(".repeat-inner"), {
          opacity: 1
      }), o.set(this.sliders[this.nowIndex], {
          pointerEvents: "auto"
      }), window.ontouchstart !== void 0 && 0 < navigator.maxTouchPoints ? (this.el?.addEventListener("touchstart", this.touchStart), this.el?.addEventListener("touchmove", this.touchMove), this.el?.addEventListener("touchend", this.touchEnd), d.isSp || (this.mouseStorker.classList.add("touch_pcBtn"), this.mouseArrow.classList.add("touch_pcBtn"))) : d.isSp && (this.el?.addEventListener("mousedown", this.onMousedown), this.el?.addEventListener("mouseup", this.onMouseup)), d.isSp && (this.el?.querySelector(".btn_next").addEventListener("click", this.btnNext), this.el?.querySelector(".btn_prev").addEventListener("click", this.btnPrev))
  }
  onIntersect({
      isIntersecting: t
  }) {
      t ? (!c && !this.isSP && (this.playScroll(), this.hoverTarget.forEach((e, i) => {
          e.addEventListener("mouseenter", this.btnHover), e.addEventListener("mouseleave", this.btnLeave)
      })), this.maeqeeArray[this.nowIndex].play()) : (!c && !this.isSP && (this.pauseScroll(), this.hoverTarget.forEach((e, i) => {
          e.removeEventListener("mouseenter", this.btnHover), e.removeEventListener("mouseleave", this.btnLeave)
      })), this.maeqeeArray[this.nowIndex].pause())
  }
  onScroll({
      scroll: t
  }) {
      this.scrollStart <= t && t <= this.scrollEnd && (this.boundTop = this.boundStart - t)
  }
  enableInteract = () => {
      this.isAnimate = !1
  };
  disableInteract() {
      this.el.classList.remove("drag"), this.isDrag = !1, this.isAnimate = !0
  }
  onMouseleave(t) {
      this.isShow && this.hide()
  }
  onMousemove(t) {
      this.isDrag && (t.movementX < -this.moveValue ? (this.disableInteract(), this.el?.dispatchEvent(this.slideNextEvent), this.changeSlide(!0)) : t.movementX > this.moveValue && (this.disableInteract(), this.el?.dispatchEvent(this.slidePrevEvent), this.changeSlide(!1))), !this.isShow && !this.isHover && !this.isSP && (this.show(), o.set(this.mouseStorker, {
          x: t.clientX,
          y: t.clientY - this.boundTop
      }), o.set(this.mouseArrow, {
          x: t.clientX,
          y: t.clientY - this.boundTop
      })), this.isSP || (n.scrub(this.mouseStorker, {
          x: t.clientX,
          y: t.clientY - this.boundTop,
          duration: .8
      }), n.scrub(this.mouseArrow, {
          x: t.clientX,
          y: t.clientY - this.boundTop,
          duration: 1.2
      }))
  }
  changeSlide(t) {
      const e = this.sliders[this.nowIndex],
          i = this.nowIndex;
      if (o.set(e, {
              pointerEvents: "none"
          }), t) {
          this.nowIndex = this.nowIndex + 1, this.nowIndex === this.sliders.length && (this.nowIndex = 0), this.maeqeeArray[this.nowIndex].play(), this.sliderNum_current.textContent = ("00" + (this.nowIndex + 1)).slice(-2);
          const s = this.sliders[this.nowIndex];
          o.to(e.querySelector(".main-txt"), {
              duration: .6,
              opacity: 0,
              x: "-20%",
              ease: "power3.out"
          }), o.to(e.querySelector(".info-txt"), {
              duration: .6,
              opacity: 0,
              delay: .1,
              x: "-20%",
              ease: "power3.out"
          }), o.to(e.querySelector(".repeat-inner"), {
              duration: .6,
              opacity: 0,
              delay: 0,
              y: "100%",
              ease: "power3.out"
          }), o.set(s, {
              pointerEvents: "auto"
          }), o.fromTo(s.querySelector(".main-txt"), {
              opacity: 0,
              x: "20%"
          }, {
              duration: 1,
              opacity: 1,
              x: 0,
              ease: "power4.out"
          }), o.fromTo(s.querySelector(".info-txt"), {
              opacity: 0,
              x: "20%"
          }, {
              duration: 1,
              opacity: 1,
              delay: .1,
              x: 0,
              ease: "power4.out"
          }), o.fromTo(s.querySelector(".repeat-inner"), {
              opacity: 0,
              y: "-100%"
          }, {
              duration: 1,
              opacity: 1,
              delay: 0,
              y: 0,
              ease: "power4.out",
              onComplete: () => {
                  this.maeqeeArray[i].pause()
              }
          })
      } else {
          this.nowIndex = this.nowIndex - 1, this.nowIndex < 0 && (this.nowIndex = this.sliders.length - 1), this.maeqeeArray[this.nowIndex].play(), this.sliderNum_current.textContent = ("00" + (this.nowIndex + 1)).slice(-2);
          const s = this.sliders[this.nowIndex];
          o.to(e.querySelector(".main-txt"), {
              duration: .4,
              opacity: 0,
              x: "20%",
              ease: "power3.out"
          }), o.to(e.querySelector(".info-txt"), {
              duration: .4,
              opacity: 0,
              delay: .1,
              x: "20%",
              ease: "power3.out"
          }), o.to(e.querySelector(".repeat-inner"), {
              duration: .4,
              opacity: 0,
              delay: .2,
              y: "-100%",
              ease: "power3.out"
          }), o.set(s, {
              pointerEvents: "auto"
          }), o.fromTo(s.querySelector(".main-txt"), {
              opacity: 0,
              x: "-20%"
          }, {
              duration: 1,
              opacity: 1,
              x: 0,
              ease: "power4.out"
          }), o.fromTo(s.querySelector(".info-txt"), {
              opacity: 0,
              x: "-20%"
          }, {
              duration: 1,
              opacity: 1,
              delay: .1,
              x: 0,
              ease: "power4.out"
          }), o.fromTo(s.querySelector(".repeat-inner"), {
              opacity: 0,
              y: "100%"
          }, {
              duration: 1,
              opacity: 1,
              delay: .2,
              y: 0,
              ease: "power4.out",
              onComplete: () => {
                  this.maeqeeArray[i].pause()
              }
          })
      }
  }
  onMousedown = t => {
      this.isAnimate || (this.isSP || this.el.classList.add("drag"), this.isDrag = !0)
  };
  onMouseup = t => {
      this.isAnimate || (this.isSP || this.el.classList.remove("drag"), this.isDrag = !1)
  };
  btnHover = () => {
      this.isHover = !0, this.hide()
  };
  btnLeave = () => {
      this.isHover = !1, this.show()
  };
  show() {
      this.isShow = !0, this.mouseStorker.classList.add("show"), this.mouseArrow.classList.add("show"), this.el?.addEventListener("mousedown", this.onMousedown), this.el?.addEventListener("mouseup", this.onMouseup)
  }
  hide() {
      this.isShow = !1, this.mouseStorker.classList.remove("show"), this.mouseArrow.classList.remove("show"), this.el.classList.remove("drag"), this.el?.removeEventListener("mousedown", this.onMousedown), this.el?.removeEventListener("mouseup", this.onMouseup)
  }
  touchStart = t => {
      this.startX = t.touches[0].pageX, this.moveX = 0
  };
  touchMove = t => {
      this.moveX = t.touches[0].pageX - this.startX
  };
  touchEnd = t => {
      this.isAnimate || (this.moveX < -this.moveValue ? (this.disableInteract(), this.el?.dispatchEvent(this.slideNextEvent), this.changeSlide(!0)) : this.moveX > this.moveValue && (this.disableInteract(), this.el?.dispatchEvent(this.slidePrevEvent), this.changeSlide(!1)))
  };
  btnNext = () => {
      this.isAnimate || (this.disableInteract(), this.el?.dispatchEvent(this.slideNextEvent), this.changeSlide(!0))
  };
  btnPrev = () => {
      this.isAnimate || (this.disableInteract(), this.el?.dispatchEvent(this.slidePrevEvent), this.changeSlide(!1))
  };
  onResize({
      windowWidth: t,
      windowHeight: e
  }) {
      const {
          scrollY: i
      } = this, {
          top: s,
          bottom: r
      } = this.el.getBoundingClientRect();
      this.isSP = d.isSp, this.boundStart = s + i, this.scrollStart = this.boundStart - e, this.scrollEnd = r + i
  }
  onEnterCompleted() {
      this.el.removeEventListener("slideFinish", this.enableInteract), window.ontouchstart !== void 0 && 0 < navigator.maxTouchPoints ? (this.el?.removeEventListener("touchstart", this.touchStart), this.el?.removeEventListener("touchmove", this.touchMove), this.el?.removeEventListener("touchend", this.touchEnd), this.isSP || (this.el?.querySelector(".btn_next").removeEventListener("click", this.btnNext), this.el?.querySelector(".btn_prev").removeEventListener("click", this.btnPrev))) : this.isSP && (this.el?.removeEventListener("mousedown", this.onMousedown), this.el?.removeEventListener("mouseup", this.onMouseup)), this.isSP && (this.el?.querySelector(".btn_next").removeEventListener("click", this.btnNext), this.el?.querySelector(".btn_prev").removeEventListener("click", this.btnPrev)), this.hoverTarget.forEach((t, e) => {
          t.removeEventListener("mouseenter", this.btnHover), t.removeEventListener("mouseleave", this.btnLeave)
      })
  }
}).register();
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
(class extends f {
  static componentName = "sliderGL";
  nowSlideIndex = 0;
  nextSlideIndex = 0;
  onInit() {
      this.sliderDom = document.querySelector(".slider_wrapper"), this.finishEvent = new CustomEvent("slideFinish"), super.onInit({
          isFullSize: !1,
          autoClear: !1,
          pixelRatioMax: 1.5
      }), this.camera_ortho = new T(this.width / -2, this.width / 2, this.height / 2, this.height / -2, .1, 2), this.camera_ortho.position.z = 1;
      let t = !1,
          e = !1,
          i = !1;
      const s = I(p, {
          onLoad: u => {
              t = !0, t && e && i && this.loadedTex(this.photoTexArray, s, this.containerMaskVideo_tex, this.photoMaskVideo_tex)
          }
      });
      this.photoList = document.querySelectorAll(".SliderChild");
      const r = this.photoList.length;
      let a = 0;
      this.photoTexArray = new Array(this.photoList.length), this.photoList.forEach((u, v) => {
          this.photoTexArray[v] = k(u.dataset.photo, {
              onLoad: V => {
                  a++, a === r && (e = !0, t && e && i && this.loadedTex(this.photoTexArray, s, this.containerMaskVideo_tex, this.photoMaskVideo_tex))
              }
          })
      });
      const h = document.createElement("video");
      h.muted = !0, h.preload = "auto", h.playsInline = !0;
      const l = document.createElement("video");
      l.muted = !0, l.preload = "auto", l.playsInline = !0, h.addEventListener("canplay", u => {
          i = !0, t && e && i && this.loadedTex(this.photoTexArray, s, this.containerMaskVideo_tex, this.photoMaskVideo_tex)
      }), l.src = "/assets/video/career_hude.mp4", l.load(), h.src = "/assets/video/career_hude.mp4", h.load(), this.containerMaskVideo_tex = new y(h), this.photoMaskVideo_tex = new y(l), this.containerMaskVideo_control = new x(this.containerMaskVideo_tex.source.data), this.photoMaskVideo_control = new x(this.photoMaskVideo_tex.source.data), this.addIntersectionObserver({
          el: this.el,
          callback: ({
              isIntersecting: u
          }, v) => {
              u && this.playContainerMaskAnimation()
          },
          param: {
              rootMargin: "0% 0% -20% 0%"
          },
          once: !0
      }), this.sliderDom.addEventListener("slideNext", this.nextSlide), this.sliderDom.addEventListener("slidePrev", this.prevSlide)
  }
  playContainerMaskAnimation() {
      this.containerMaskVideo_control.play(), this.playTick(), this.containerMaskVideo_control.el.addEventListener("ended", () => {
          this.pauseTick()
      })
  }
  nextSlide = () => {
      this.nextSlideIndex = this.nowSlideIndex + 1, this.nextSlideIndex === this.photoTexArray.length && (this.nextSlideIndex = 0), this.changeSlide(this.nowSlideIndex, this.nextSlideIndex)
  };
  prevSlide = () => {
      this.nextSlideIndex = this.nowSlideIndex - 1, this.nextSlideIndex < 0 && (this.nextSlideIndex = this.photoTexArray.length - 1), this.changeSlide(this.nowSlideIndex, this.nextSlideIndex)
  };
  changeSlide(t, e) {
      this.photoMaskVideo_control.pause(), this.photoMaskVideo_control.el.currentTime = 0, this.material.uniforms.uNowPhoto.value = this.photoTexArray[t], this.material.uniforms.uNextPhoto.value = this.photoTexArray[e], requestAnimationFrame(() => {
          this.photoMaskVideo_control.play(), this.photoMaskVideo_control.el.addEventListener("play", this.startCallback), this.photoMaskVideo_control.el.addEventListener("ended", this.changeCallback)
      })
  }
  startCallback = () => {
      this.photoMaskVideo_control.el.removeEventListener("start", this.startCallback), setTimeout(() => {
          this.playTick()
      }, 50)
  };
  changeCallback = () => {
      this.photoMaskVideo_control.el.removeEventListener("ended", this.changeCallback), this.nowSlideIndex = this.nextSlideIndex, this.sliderDom.dispatchEvent(this.finishEvent), this.pauseTick()
  };
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
      this.uniforms = M(r), this.material = new C({
          uniforms: r,
          vertexShader: R,
          fragmentShader: q,
          transparent: !0,
          depthTest: !1,
          depthWrite: !1
      }), this.geometry = new _(this.width, this.height), this.mesh = new A(this.geometry, this.material), this.initialWidth = this.width, this.scene.add(this.mesh)
  }
  onTick(t, e, i) {
      this.renderer.render(this.scene, this.camera_ortho)
  }
  onResize() {
      const t = this.el?.parentNode.clientWidth,
          e = this.el?.parentNode.clientHeight;
      this.material && (this.material.uniforms.uResolutionObject.value.set(t, e), this.mesh.scale.set(t / this.initialWidth, t / this.initialWidth, 1), this.camera_ortho.left = t / -2, this.camera_ortho.right = t / 2, this.camera_ortho.top = e / 2, this.camera_ortho.bottom = e / -2, this.camera_ortho.updateProjectionMatrix()), super.onResize()
  }
  onEnterCompleted() {
      this.scene.remove(this.mesh), super.disposeGeometry(this.geometry), super.disposeMaterial(this.material), super.disposeRenderer(this.renderer), this.scene = void 0, this.mesh = void 0, this.camera_ortho = void 0, this.geometry = void 0, this.material = void 0, this.renderer = void 0
  }
}).register();