var _Class, _Class2, _Class3, _Class4, _Class5, _Class6, _Class7, _Class8;
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
  P as T,
  C as a,
  g as r,
  m as b,
  S,
  a as n,
  V as _,
  e as d
} from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
import {
  T as x,
  W as m,
  S as R,
  O as L,
  l as C,
  c as p,
  V as h,
  a as f,
  R as g,
  t as v,
  P as w,
  M as y
} from "./constants.e6c90e33.js";
import "./AnchorLinks.astro_astro_type_script_index_0_lang.7092990b.js";
import { S as E } from "./ServiceOpposite.b84a6f1f.js";
import "./BrushContainer.astro_astro_type_script_index_0_lang.a82a931f.js";
import "./LowerTitle.astro_astro_type_script_index_0_lang.f9bd55d6.js";
import { L as k } from "./Local.454029b8.js";
import "./easing.ca1274dc.js";
import "./spark.1d7c7a14.js";
import "./taillight.be3f79a0.js";
import "./spark.83ebcaee.js";
import "./project.49f9dddf.js";
(class extends T {}).register();
((_Class = class extends a {
  onInit() {
    (this.worldTop = document.querySelector(".world-main")),
      (this.worldBottom = document.querySelector(".world-sub")),
      (this.planTop = document.querySelector(".plan-main")),
      (this.planBottom = document.querySelector(".plan-sub")),
      (this.maskLayer = document.querySelector(".wrapper_value")),
      (this.GL = document.querySelector(".ValueGL")),
      (this.eventSceneVal = {
        progress: 0
      }),
      (this.sceneEvent = new CustomEvent("scenechange", {
        detail: {
          progress: () => this.eventSceneVal.progress
        }
      }));
  }
  onIntersect({ isIntersecting: e }) {
    e
      ? ((this.maskLayer.style.willChange = "clip-path"), this.playScroll())
      : ((this.maskLayer.style.willChange = ""), this.pauseScroll());
  }
  onScroll({ scroll: e }) {
    if (this.scrollStart <= e && e <= this.scrollEnd) {
      this.isScrollEnter ||
        ((this.isScrollEnter = !0),
        this.windowHeight || (this.windowHeight = window.innerHeight));
      const t = (e - this.scrollStart) / this.windowHeight - 1,
        i = 1 - Math.max(Math.min(t, 1), 0),
        s = Math.max(Math.min(t - 0.5, 1), 0);
      (this.maskTween = r.scrub(this.maskLayer, {
        clipPath: `inset(${i * this.maskHeight}lvh ${
          i * this.maskWidth
        }vw round ${i * this.maskRadius}vw)`,
        duration: 0.2
      })),
        (this.glTween = r.scrub(this.eventSceneVal, {
          progress: s,
          duration: 0.2,
          onUpdate: () => {
            this.GL.dispatchEvent(this.sceneEvent);
          }
        })),
        t > 0.3
          ? (this.worldTop.classList.add("scrollShow"),
            this.worldBottom.classList.add("scrollShow"),
            this.planTop.classList.add("scrollShow"),
            this.planBottom.classList.add("scrollShow"))
          : (this.worldTop.classList.remove("scrollShow"),
            this.worldBottom.classList.remove("scrollShow"),
            this.planTop.classList.remove("scrollShow"),
            this.planBottom.classList.remove("scrollShow"));
    } else
      this.isScrollEnter &&
        ((this.isScrollEnter = !1),
        (this.overPosition = e < this.scrollStart ? "top" : "bottom"),
        this.setOverStyle());
  }
  setOverStyle(e = !1) {
    this.overPosition === "top"
      ? (this.worldTop.classList.remove("scrollShow"),
        this.worldBottom.classList.remove("scrollShow"),
        this.planTop.classList.remove("scrollShow"),
        this.planBottom.classList.remove("scrollShow"),
        (this.maskTween = r.scrub(this.maskLayer, {
          clipPath: `inset(${this.maskHeight}lvh ${this.maskWidth}vw round ${this.maskRadius}vw)`,
          duration: 0.2
        })),
        (this.glTween = r.scrub(this.eventSceneVal, {
          progress: 0,
          duration: 0.2,
          onUpdate: () => {
            this.GL.dispatchEvent(this.sceneEvent);
          }
        })))
      : (this.worldTop.classList.add("scrollShow"),
        this.worldBottom.classList.add("scrollShow"),
        this.planTop.classList.add("scrollShow"),
        this.planBottom.classList.add("scrollShow"),
        (this.maskTween = r.scrub(this.maskLayer, {
          clipPath: "inset(0lvh 0vw round 0vw)",
          duration: 0.2
        })),
        (this.glTween = r.scrub(this.eventSceneVal, {
          progress: 1,
          duration: 0.2,
          onUpdate: () => {
            this.GL.dispatchEvent(this.sceneEvent);
          }
        })));
  }
  onResize({ windowWidth: e, windowHeight: t }) {
    (this.isSP = b.isSp),
      this.isSP
        ? ((this.maskWidth = 7.2),
          (this.maskHeight = 40),
          (this.maskRadius = 20))
        : ((this.maskWidth = 26),
          (this.maskHeight = 34),
          (this.maskRadius = 32));
    const { scrollY: i } = this,
      { top: s, bottom: o } = this.el.getBoundingClientRect();
    (this.scrollStart = s + i - t),
      (this.scrollEnd = o + i),
      (this.scrollDistance = this.scrollEnd - this.scrollStart),
      (this.overPosition = i < this.scrollStart ? "top" : "bottom"),
      (i < this.scrollStart || i > this.scrollEnd) && this.setOverStyle(!0),
      (this.windowWidth = e),
      (this.windowHeight = t);
  }
}),
_defineProperty(_Class, "componentName", "ValuePlan"),
_Class).register();
((_Class2 = class extends a {
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
      (this.GL = document.querySelector(".FirstViewGL")),
      (this.eventBlurVal = {
        progress: 1
      }),
      (this.blurEvent = new CustomEvent("blurchange", {
        detail: {
          progress: () => this.eventBlurVal.progress
        }
      })),
      (this.delayMax = 0.5),
      (this.delayArray = []),
      (this.splitTarget = new S(
        this.el.querySelector(".mainTxt").querySelectorAll("span"),
        {
          type: "chars",
          charsClass: "SectionTitle-splitTxt"
        }
      )),
      this.splitTarget.chars.forEach((e, t) => {
        this.delayArray.push(this.delayMax * n.utils.random(0, 1));
      });
  }
  onIntersect({ isIntersecting: e }) {
    e
      ? ((this.mainTxt.style.willChange = "opacity,filter"),
        (this.subTxt.style.willChange = "opacity,filter"),
        (this.ankerLinks.style.willChange = "opacity,filter"),
        this.splitTarget.chars.forEach((t, i) => {
          t.style.willChange = "transform,opacity,filter";
        }),
        this.playScroll())
      : (this.pauseScroll(),
        (this.mainTxt.style.willChange = ""),
        (this.subTxt.style.willChange = ""),
        (this.ankerLinks.style.willChange = ""),
        this.splitTarget.chars.forEach((t, i) => {
          t.style.willChange = "";
        }));
  }
  onScroll({ scroll: e }) {
    if (this.scrollStart <= e && e <= this.scrollEnd) {
      this.isScrollEnter || (this.isScrollEnter = !0);
      const t = Math.min(Math.max(1 - (e / this.scrollDistance) * 2, 0), 1),
        i = Math.max((e / this.scrollDistance) * 2 * 5, 0);
      (this.mainTween = r.scrub(this.mainTxt, {
        opacity: `${t}`,
        filter: `blur(${i}px)`,
        duration: 0.2
      })),
        (this.subTween = r.scrub(this.subTxt, {
          opacity: `${t}`,
          filter: `blur(${i}px)`,
          duration: 0.2
        })),
        (this.ankerTween = r.scrub(this.ankerLinks, {
          opacity: `${t}`,
          filter: `blur(${i}px)`,
          duration: 0.2
        })),
        (this.splitTween = r.scrub(this.splitTarget.chars, {
          opacity: (s, o, l) =>
            Math.min(Math.max(t * 2 - this.delayArray[s], 0), 1),
          filter: (s, o, l) =>
            `blur(${Math.max((1 - t) * 2 - this.delayArray[s], 0) * 5}px)`,
          transform: (s, o, l) =>
            `translateZ(${
              Math.max((1 - t) * 2 - this.delayArray[s], 0) * 12
            }vw)`,
          duration: 0.2
        })),
        (this.glTween = r.scrub(this.eventBlurVal, {
          progress: t,
          duration: 0.2,
          onUpdate: () => {
            this.GL.dispatchEvent(this.blurEvent);
          }
        }));
    } else
      this.isScrollEnter &&
        e > 0 &&
        ((this.isScrollEnter = !1),
        (this.mainTween = r.scrub(this.mainTxt, {
          opacity: "0",
          filter: "blur(5px)",
          duration: 0.2
        })),
        (this.subTween = r.scrub(this.subTxt, {
          opacity: "0",
          filter: "blur(5px)",
          duration: 0.2
        })),
        (this.ankerTween = r.scrub(this.ankerLinks, {
          opacity: "0",
          filter: "blur(5px)",
          duration: 0.2
        })),
        (this.splitTween = r.scrub(this.splitTarget.chars, {
          opacity: function (t, i, s) {
            return 0;
          },
          filter: (t, i, s) => `blur(${(2 - this.delayArray[t]) * 5}px)`,
          transform: (t, i, s) =>
            `translateZ(${Math.max(2 - this.delayArray[t], 0) * 12}vw)`,
          duration: 0.2
        })),
        (this.glTween = r.scrub(this.eventBlurVal, {
          progress: 0,
          duration: 0.2,
          onUpdate: () => {
            this.GL.dispatchEvent(this.blurEvent);
          }
        })));
  }
  onResize({ windowWidth: e, windowHeight: t }) {
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
const B = {
    src: "/_astro/b-kv_evc_img_02.d9d559e9.jpg",
    width: 2400,
    height: 1590,
    format: "jpg"
  },
  M = {
    src: "/_astro/b-kv_evc_img_01.0ced0319.jpg",
    width: 828,
    height: 1541,
    format: "jpg"
  };
var P = `precision highp float;

varying vec2 vUv;
uniform sampler2D uTex;

uniform vec2 uResolutionObject;
uniform vec2 uResolutionImage;
uniform float radius;
uniform bool isHorizontal;
uniform bool isFirst;

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

vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
vec4 color = vec4(0.0);
vec2 off1 = vec2(1.411764705882353) * direction;
vec2 off2 = vec2(3.2941176470588234) * direction;
vec2 off3 = vec2(5.176470588235294) * direction;
color += texture2D(image, uv) * 0.1964825501511404;
color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
return color;
}

void main() {
vec2 uv = isFirst ? fitCover(vUv, uResolutionImage, uResolutionObject) : vUv;
vec2 direction = isHorizontal ? vec2(1., 0.) : vec2(0., 1.);
direction *= radius;

vec4 texColor = blur13(uTex, uv, uResolutionObject, direction);

gl_FragColor = texColor;

}`,
  I = `precision highp float;

varying vec2 vUv;
uniform sampler2D uTex;

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
uv = fitCover(uv, uResolutionImage, uResolutionObject);
vec4 texColor = texture2DInnerRange(uTex, uv);
gl_FragColor = texColor;

}`;
((_Class3 = class extends x {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "blurChange", (e) => {
      const t = this.maxBlur * e.detail.progress();
      this.uniforms_buffer.radius.value !== t &&
        ((this.uniforms_buffer.radius.value = t),
        requestAnimationFrame(() => {
          this.onRender();
        }));
    });
  }
  onInit() {
    var _this$el3, _this$el4;
    (this.maxBlur = 2),
      (this.blurIteration = 5),
      (this.width =
        (_this$el3 = this.el) === null || _this$el3 === void 0
          ? void 0
          : _this$el3.parentNode.clientWidth),
      (this.height =
        (_this$el4 = this.el) === null || _this$el4 === void 0
          ? void 0
          : _this$el4.parentNode.clientHeight),
      super.onInit({
        isFullSize: !1,
        autoClear: !1,
        pixelRatioMax: 1.5
      }),
      (this.pixelRatio = Math.min(window.devicePixelRatio, this.pixelRatioMax)),
      (this.renderTarget_01 = new m(this.width, this.height, {
        depthBuffer: !1,
        stencilBuffer: !1
      })),
      (this.renderTarget_02 = new m(this.width, this.height, {
        depthBuffer: !1,
        stencilBuffer: !1
      })),
      (this.scene_buffer = new R()),
      (this.camera_ortho = new L(
        this.width / -2,
        this.width / 2,
        this.height / 2,
        this.height / -2,
        0.1,
        2
      )),
      (this.camera_ortho.position.z = 1);
    const e = b.isSp ? M : B;
    C(e, {
      onLoad: (t) => {
        (this.texture = t),
          (this.initialWidth = this.width),
          (this.initialHeight = this.height);
        const i = p({
          uTex: this.renderTarget_02.texture,
          uResolutionImage: new h(e.width, e.height),
          uResolutionObject: new h(this.width, this.height)
        });
        (this.uniforms = f(i)),
          (this.material = new g({
            uniforms: i,
            vertexShader: v,
            fragmentShader: I
          })),
          (this.geometry = new w(this.width, this.height)),
          (this.mesh = new y(this.geometry, this.material)),
          this.scene.add(this.mesh);
        const s = p({
          uTex: null,
          uResolutionImage: new h(e.width, e.height),
          uResolutionObject: new h(this.width, this.height),
          radius: this.maxBlur,
          isHorizontal: !0,
          isFirst: !0
        });
        (this.uniforms_buffer = f(s)),
          (this.material_buffer = new g({
            uniforms: s,
            vertexShader: v,
            fragmentShader: P
          })),
          (this.geometry_buffer = new w(this.width, this.height)),
          (this.mesh_buffer = new y(
            this.geometry_buffer,
            this.material_buffer
          )),
          this.scene_buffer.add(this.mesh_buffer),
          this.onRender(),
          (this.rendered = !0);
      }
    }),
      this.el.addEventListener("blurchange", this.blurChange);
  }
  onRender() {
    for (let e = 0; e < this.blurIteration; e++)
      this.renderer.setRenderTarget(this.renderTarget_01),
        (this.material_buffer.neeedsUpdate = !0),
        e === 0
          ? ((this.uniforms_buffer.uTex.value = this.texture),
            (this.uniforms_buffer.isFirst.value = !0))
          : ((this.uniforms_buffer.uTex.value = this.renderTarget_02.texture),
            (this.uniforms_buffer.isFirst.value = !1)),
        (this.uniforms_buffer.isHorizontal.value = !0),
        this.renderer.render(this.scene_buffer, this.camera_ortho),
        e === 0 &&
          ((this.uniforms_buffer.uTex.value = this.renderTarget_02.texture),
          (this.uniforms_buffer.isFirst.value = !1)),
        this.renderer.setRenderTarget(this.renderTarget_02),
        e === 0 && this.renderer.clear(),
        (this.uniforms_buffer.uTex.value = this.renderTarget_01.texture),
        (this.uniforms_buffer.isHorizontal.value = !1),
        this.renderer.render(this.scene_buffer, this.camera_ortho);
    this.renderer.setRenderTarget(null),
      this.renderer.render(this.scene_buffer, this.camera_ortho);
  }
  onResize() {
    var _this$el5, _this$el6;
    (this.width =
      (_this$el5 = this.el) === null || _this$el5 === void 0
        ? void 0
        : _this$el5.parentNode.clientWidth),
      (this.height =
        (_this$el6 = this.el) === null || _this$el6 === void 0
          ? void 0
          : _this$el6.parentNode.clientHeight),
      this.rendered &&
        (this.renderer.setSize(this.width, this.height),
        this.renderTarget_01.setSize(this.width, this.height),
        this.renderTarget_02.setSize(this.width, this.height),
        (this.uniforms.uResolutionObject.value =
          this.uniforms.uResolutionObject.value.set(this.width, this.height)),
        (this.uniforms_buffer.uResolutionObject.value =
          this.uniforms_buffer.uResolutionObject.value.set(
            this.width,
            this.height
          )),
        this.mesh.scale.set(
          this.width / this.initialWidth,
          this.height / this.initialHeight,
          1
        ),
        this.mesh_buffer.scale.set(
          this.width / this.initialWidth,
          this.height / this.initialHeight,
          1
        ),
        (this.camera_ortho.left = this.width / -2),
        (this.camera_ortho.right = this.width / 2),
        (this.camera_ortho.top = this.height / 2),
        (this.camera_ortho.bottom = this.height / -2),
        this.camera_ortho.updateProjectionMatrix(),
        this.onRender());
  }
  onEnterCompleted() {
    this.scene.remove(this.mesh),
      super.disposeGeometry(this.geometry),
      super.disposeMaterial(this.material),
      super.disposeGeometry(this.geometry_buffer),
      super.disposeMaterial(this.material_buffer),
      super.disposeRenderer(this.renderer),
      super.disposeRenderer(this.renderTarget_01),
      super.disposeRenderer(this.renderTarget_02),
      (this.scene = void 0),
      (this.mesh = void 0),
      (this.mesh_buffer = void 0),
      (this.geometry = void 0),
      (this.material = void 0),
      (this.geometry_buffer = void 0),
      (this.material_buffer = void 0),
      (this.renderer = void 0),
      (this.renderTarget_01 = void 0),
      (this.renderTarget_02 = void 0);
  }
}),
_defineProperty(_Class3, "componentName", "FirstViewGL"),
_Class3).register();
((_Class4 = class extends a {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "isScrollEnter", !1);
  }
  onInit() {
    var _this$el7, _this$el8, _this$el9;
    (this.blurSubTop =
      (_this$el7 = this.el) === null || _this$el7 === void 0
        ? void 0
        : _this$el7.querySelector(".blur-subTop")),
      (this.blurSubBottom =
        (_this$el8 = this.el) === null || _this$el8 === void 0
          ? void 0
          : _this$el8.querySelector(".blur-subBottom")),
      (this.delayMax = 0.5),
      (this.delayArray = []),
      (this.splitTarget = new S(
        (_this$el9 = this.el) === null || _this$el9 === void 0
          ? void 0
          : _this$el9.querySelector(".title-ja"),
        {
          type: "chars",
          charsClass: "SectionTitle-splitTxt"
        }
      )),
      this.splitTarget.chars.forEach((e, t) => {
        this.delayArray.push(this.delayMax * n.utils.random(0, 1));
      });
  }
  onIntersect({ isIntersecting: e }) {
    e
      ? ((this.blurSubTop.style.willChange = "transform,opacity,filter"),
        (this.blurSubBottom.style.willChange = "transform,opacity,filter"),
        this.splitTarget.chars.forEach((t, i) => {
          t.style.willChange = "transform,opacity,filter";
        }),
        this.playScroll())
      : (this.pauseScroll(),
        (this.blurSubTop.style.willChange = ""),
        (this.blurSubBottom.style.willChange = ""),
        this.splitTarget.chars.forEach((t, i) => {
          t.style.willChange = "";
        }));
  }
  onScroll({ scroll: e }) {
    if (this.scrollStart <= e && e <= this.scrollEnd) {
      this.isScrollEnter ||
        ((this.isScrollEnter = !0),
        this.windowHeight || (this.windowHeight = window.innerHeight));
      const t = Math.min(
          Math.max(((e - this.scrollStart) / this.windowHeight - 1) * 2, 0),
          1
        ),
        i = t,
        s = (1 - t) * 5,
        o = `translateZ(${(1 - t) * -12}vw)`;
      (this.subTopTween = r.scrub(this.blurSubTop, {
        opacity: `${i}`,
        filter: `blur(${s}px)`,
        transform: `${o}`,
        duration: 0.2
      })),
        (this.subBottomTween = r.scrub(this.blurSubBottom, {
          opacity: `${i}`,
          filter: `blur(${s}px)`,
          transform: `${o}`,
          duration: 0.2
        })),
        (this.splitTween = r.scrub(this.splitTarget.chars, {
          opacity: (l, u, c) =>
            Math.min(Math.max(t * 2 - this.delayArray[l], 0), 1),
          filter: (l, u, c) =>
            `blur(${Math.max((1 - t) * 2 - this.delayArray[l], 0) * 5}px)`,
          transform: (l, u, c) =>
            `translateZ(${
              Math.max((1 - t) * 2 - this.delayArray[l], 0) * -12
            }vw)`,
          duration: 0.2
        }));
    } else
      this.isScrollEnter &&
        ((this.isScrollEnter = !1),
        this.subTopTween &&
          (this.subTopTween.kill(),
          this.subBottomTween.kill(),
          this.splitTween.kill(),
          (this.subTopTween = void 0),
          (this.subBottomTween = void 0),
          (this.splitTween = void 0)),
        e - this.scrollStart <= 0
          ? (n.set(this.blurSubTop, {
              opacity: 0,
              filter: "blur(5px)",
              transform: "translateZ(-12vw)"
            }),
            n.set(this.blurSubBottom, {
              opacity: 0,
              filter: "blur(5px)",
              transform: "translateZ(-12vw)"
            }),
            n.set(this.splitTarget.chars, {
              opacity: 0,
              filter: "blur(5px)",
              transform: "translateZ(-12vw)"
            }))
          : (n.set(this.blurSubTop, {
              opacity: 1,
              filter: "blur(0px)",
              transform: "translateZ(0)"
            }),
            n.set(this.blurSubBottom, {
              opacity: 1,
              filter: "blur(0px)",
              transform: "translateZ(0)"
            }),
            n.set(this.splitTarget.chars, {
              opacity: 1,
              filter: "blur(0px)",
              transform: "translateZ(0)"
            })));
  }
  onResize({ windowWidth: e, windowHeight: t }) {
    const { scrollY: i } = this;
    this.el.style.position = "static";
    const { top: s, bottom: o } = this.el.getBoundingClientRect();
    (this.el.style.position = ""),
      (this.windowHeight = t),
      (this.scrollStart = s + i - t),
      (this.scrollEnd = o + i),
      (this.scrollDistance = this.scrollEnd - this.scrollStart);
  }
}),
_defineProperty(_Class4, "componentName", "SecondView"),
_defineProperty(_Class4, "selectorRoot", "[data-parallax-sv]"),
_Class4).register();
((_Class5 = class extends x {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "stats", void 0);
    _defineProperty(this, "gl", void 0);
    _defineProperty(this, "isInit", !1);
    _defineProperty(this, "prevScroll", 0);
    _defineProperty(this, "sceneChange", (e) => {
      const t = e.detail.progress();
      this.nowScene !== t &&
        (requestAnimationFrame(() => {
          var _this$stats, _this$stats2;
          (_this$stats = this.stats) !== null &&
            _this$stats !== void 0 &&
            _this$stats.begin(),
            this.gl.progress(t, t - this.nowScene),
            this.gl.render(),
            (_this$stats2 = this.stats) === null || _this$stats2 === void 0
              ? void 0
              : _this$stats2.end();
        }),
        (this.nowScene = t));
    });
  }
  onInit() {
    super.onInit({
      autoClear: !1,
      pixelRatioMax: 1.5,
      alpha: !0
    }),
      (this.nowScene = 0),
      this.initGl();
  }
  initGl() {
    this.isInit ||
      ((this.isInit = !0),
      (this.gl = E.create(this.el, {
        renderer: this.renderer,
        camera: this.camera,
        width: this.width,
        height: this.height,
        pixelRatio: this.pixelRatio,
        isLowerPage: !0
      })),
      this.emitSelfResize(),
      this.el.addEventListener("scenechange", this.sceneChange),
      this.gl.render());
  }
  onLoadDone() {
    this.gl.start(), this.gl.render();
  }
  onResize() {
    var _this$gl, _this$gl2;
    super.onResize(),
      (_this$gl = this.gl) !== null &&
        _this$gl !== void 0 &&
        _this$gl.resize(this.width, this.height, this.pixelRatio),
      (_this$gl2 = this.gl) === null || _this$gl2 === void 0
        ? void 0
        : _this$gl2.render();
  }
  onScroll({ scroll: e }) {}
}),
_defineProperty(_Class5, "componentName", "ValueGL"),
_defineProperty(_Class5, "isLocal", !0),
_defineProperty(_Class5, "isDisableAutoPlayScroll", !0),
_Class5).register();
((_Class6 = class extends a {
  onInit() {
    (this.stickyContent = this.el.querySelector(".plan-list")),
      (this.list_01 = this.el.querySelector(".plan-01")),
      (this.list_02 = this.el.querySelector(".plan-02")),
      (this.list_03 = this.el.querySelector(".plan-03")),
      (this.list_04 = this.el.querySelector(".plan-04")),
      this.addIntersectionObserver({
        el: this.stickyContent,
        callback: ({ isIntersecting: e }, t) => {
          e
            ? ((this.list_01.style.willChange = "transform"),
              (this.list_02.style.willChange = "transform"),
              (this.list_03.style.willChange = "transform"),
              (this.list_04.style.willChange = "transform"),
              this.playScroll())
            : (this.pauseScroll(),
              (this.list_01.style.willChange = ""),
              (this.list_02.style.willChange = ""),
              (this.list_03.style.willChange = ""),
              (this.list_04.style.willChange = ""));
        },
        param: {
          rootMargin: "0%"
        },
        once: !1
      });
  }
  onScroll({ scroll: e }) {
    if (this.scrollStart <= e && e <= this.scrollEnd) {
      this.isScrollEnter ||
        ((this.isScrollEnter = !0),
        this.windowHeight || (this.windowHeight = window.innerHeight));
      const t = (e - this.scrollStart) / this.windowHeight - 1;
      this.isSp ||
        (!this.list_01.classList.contains("slide") && t >= 0.2
          ? this.list_01.classList.add("slide")
          : this.list_01.classList.contains("slide") &&
            t < 0.2 &&
            this.list_01.classList.remove("slide"),
        !this.list_02.classList.contains("slide") && t >= 0.4
          ? this.list_02.classList.add("slide")
          : this.list_02.classList.contains("slide") &&
            t < 0.4 &&
            this.list_02.classList.remove("slide"),
        !this.list_03.classList.contains("slide") && t >= 0.6
          ? this.list_03.classList.add("slide")
          : this.list_03.classList.contains("slide") &&
            t < 0.6 &&
            this.list_03.classList.remove("slide"),
        !this.list_04.classList.contains("slide") && t >= 0.8
          ? this.list_04.classList.add("slide")
          : this.list_04.classList.contains("slide") &&
            t < 0.8 &&
            this.list_04.classList.remove("slide"));
    } else
      this.isScrollEnter &&
        ((this.isScrollEnter = !1),
        (this.overPosition = e < this.scrollStart ? "top" : "bottom"),
        this.setOverStyle());
  }
  setOverStyle(e = !1) {
    this.overPosition === "top"
      ? this.isSp ||
        (this.list_01.classList.remove("slide"),
        this.list_02.classList.remove("slide"),
        this.list_03.classList.remove("slide"),
        this.list_04.classList.remove("slide"))
      : this.isSp ||
        (this.list_01.classList.add("slide"),
        this.list_02.classList.add("slide"),
        this.list_03.classList.add("slide"),
        this.list_04.classList.add("slide"));
  }
  onResize({ windowWidth: e, windowHeight: t }) {
    const { scrollY: i } = this;
    this.stickyContent.style.position = "static";
    const { top: s, bottom: o } = this.stickyContent.getBoundingClientRect();
    (this.stickyContent.style.position = ""),
      (this.scrollStart = s + i - t),
      (this.scrollEnd = o + i),
      (this.scrollDistance = this.scrollEnd - this.scrollStart),
      (this.overPosition = i < this.scrollStart ? "top" : "bottom"),
      (i < this.scrollStart || i > this.scrollEnd) && this.setOverStyle(!0),
      (this.windowWidth = e),
      (this.windowHeight = t);
  }
}),
_defineProperty(_Class6, "componentName", "Plan"),
_Class6).register();
((_Class7 = class extends k {
  onInit() {
    (this.movieParent = this.el.querySelector(".image")),
      (this.video = this.el.querySelector("video")),
      (this.videoComponent = new _(this.video)),
      (this.isComingsoon = !1),
      this.addIntersectionObserver({
        el: this.movieParent,
        callback: ({ isIntersecting: e }, t) => {
          e && this.isSp
            ? this.playVideo()
            : !e && this.isSp && this.pauseVideo();
        },
        param: {
          rootMargin: "-40% 0%"
        },
        once: !1
      }),
      this.on("activeEvPlanComingsoon", () => {
        (this.isComingsoon = !0),
          this.el.classList.add("-comingsoon"),
          this.pauseVideo();
      }),
      this.on("deactiveEvPlanComingsoon", () => {
        (this.isComingsoon = !1), this.el.classList.remove("-comingsoon");
      });
  }
  onMouseenter() {
    this.playVideo();
  }
  onMouseleave() {
    this.pauseVideo();
  }
  playVideo() {
    (this.isComingsoon && this.isSp) ||
      (this.videoComponent.pause(),
      (this.video.loop = "loop"),
      (this.video.currentTime = 0),
      this.videoComponent.play(),
      this.refs.image.classList.add("-active"));
  }
  pauseVideo() {
    (this.video.loop = ""), this.refs.image.classList.remove("-active");
  }
}),
_defineProperty(_Class7, "componentName", "PlanItem"),
_Class7).register();
((_Class8 = class extends a {
  onInit() {
    let e;
    this.isSp ? (e = "0% 0% -45% 0%") : (e = "0% 0% -15% 0%"),
      this.addIntersectionObserver({
        el: this.el,
        callback: ({ isIntersecting: t }, i) => {
          var _this$el10, _this$el11;
          t
            ? ((_this$el10 = this.el) !== null &&
                _this$el10 !== void 0 &&
                _this$el10.classList.add("-active"),
              d.emit("activeEvPlanComingsoon"))
            : ((_this$el11 = this.el) !== null &&
                _this$el11 !== void 0 &&
                _this$el11.classList.remove("-active"),
              d.emit("deactiveEvPlanComingsoon"));
        },
        param: {
          rootMargin: e
        }
      });
  }
}),
_defineProperty(_Class8, "componentName", "PlanComingsoon"),
_Class8).register();
