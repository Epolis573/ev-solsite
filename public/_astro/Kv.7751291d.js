function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { m, b as B, i as X, s as c, h as S, A as W, z as $, _ as se, g as R, e as L, f as l, B as G } from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
import { C as P, d as o, E as k, V as g, G as oe, y as E, B as ne, e as ae, g as re, D as le, A as ce, b9 as ue, l as C, c as _, a as N, i as K, P as U, R as A, t as F, b as J, I as pe, m as p, ba as O, bb as Q, am as H, bc as q, an as ee, bd as he, be as ge } from "./constants.e6c90e33.js";
import { B as de, i as j, g as me, e as u } from "./easing.ca1274dc.js";
import { s as fe } from "./spark.83ebcaee.js";
import { a as ve, s as Le, i as Pe } from "./spark.1d7c7a14.js";
import { i as ke } from "./cloud_02.dbe4073e.js";
import { S as te, n as we } from "./project.49f9dddf.js";
const Se = {
    src: "/_astro/background.a24acd95.jpg",
    width: 1600,
    height: 964,
    format: "jpg"
  },
  ye = {
    src: "/_astro/cloud.c58fed85.png",
    width: 1276,
    height: 1600,
    format: "png"
  },
  Ie = {
    src: "/_astro/title_outline.5ead2886.png",
    width: 1022,
    height: 343,
    format: "png"
  },
  T = {
    src: "/_astro/title.81101b95.png",
    width: 983,
    height: 329,
    format: "png"
  },
  V = {
    src: "/_astro/text.bf2bf2e5.png",
    width: 842,
    height: 219,
    format: "png"
  };
var xe = `precision highp float;

varying vec2 vUv;

uniform float uProgress;
uniform vec2 uResolution;
uniform sampler2D tNoise;
uniform vec2 uNoiseResolution;
uniform float uDarkness;
uniform float uBlur;
uniform float uVignette;

vec2 fitCover(vec2 coord, vec2 inputResolution, vec2 outputResolution) {
  vec2 ratio = vec2(
    min((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),
    min((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)
  );
  return coord * ratio + (1. - ratio) * 0.5;
}
vec3 overlay(vec3 colorSrc, vec3 colorDist) {
  return vec3(
    (colorDist.r <= 0.5) ? (2. * colorSrc.r * colorDist.r) : (1. - 2. * (1. - colorDist.r) * (1. - colorSrc.r)),
    (colorDist.g <= 0.5) ? (2. * colorSrc.g * colorDist.g) : (1. - 2. * (1. - colorDist.g) * (1. - colorSrc.g)),
    (colorDist.b <= 0.5) ? (2. * colorSrc.b * colorDist.b) : (1. - 2. * (1. - colorDist.b) * (1. - colorSrc.b))
  );
}

void main() {
  vec2 uvNoise = fitCover(vUv, uNoiseResolution, uResolution);
  vec4 colorNoise = texture2D(tNoise, uvNoise);

  vec2 uv = fitCover(vUv, vec2(1.), uResolution);
  vec3 color = mix(vec3(0.), colorNoise.rgb * uDarkness, max(1. - length((uv - 0.5) * mix(uBlur, 1., uProgress)), 0.) * (1. - length((uv - 0.5) * uVignette)));

  

  gl_FragColor = vec4(color, uProgress);
  
  
}`,
  be = `precision highp float;

varying vec2 vUv;

uniform sampler2D uTexture01;
uniform sampler2D uTexture02;
uniform float uTime;
uniform float uCenter;
uniform float uSpreadBack;
uniform float uSpreadFront;

uniform float uFadeIn;
uniform float uOpacity;

struct Cloud {
  float speed;
  vec2 scale;
  float offset;
};
uniform Cloud uCloud[2];

vec2 getZoomedUv(vec2 uv, float zoom, vec2 origin) {
  origin.x = -origin.x;
  uv += origin;
  float scale = 1. / zoom;
  return uv * scale - 0.5 * (scale - 1.);
}
vec4 texture2DInnerRange(sampler2D t, vec2 uv) {
  return (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) ? vec4(0.) : texture2D(t, uv);
}

#pragma glslify: export(texture2DInnerRange)
vec4 overlayTransparentImages(vec4 colorBack, vec4 colorFront) {
  return mix(colorBack, colorFront, colorFront.a);
}

#pragma glslify: export(overlayTransparentImages)

vec2 spreadUv(vec2 uv) {
  uv.x -= 1. - uCenter;
  uv.x /= mix(uSpreadBack, uSpreadFront, vUv.y);
  uv.x += 1. - uCenter;
  return uv;
}

void main() {
  vec2 uv = vUv;

  vec2 uv01 = spreadUv(uv);
  uv01 = uv01 / uCloud[0].scale;
  uv01.y = fract(uv01.y - uTime * uCloud[0].speed + uCloud[0].offset);

  vec2 uv02 = spreadUv(uv);
  uv02 = uv02 / uCloud[1].scale;
  uv02.y = fract(uv02.y - uTime * uCloud[1].speed + uCloud[1].offset);

  vec4 color = overlayTransparentImages(texture2DInnerRange(uTexture01, uv01), texture2DInnerRange(uTexture02, uv02));
  
  
  
  
  
  
  

  

  
  color.a *= smoothstep(0., uFadeIn, vUv.y);

  color.a *= uOpacity;

  gl_FragColor = color;
  
}`,
  Te = `precision highp float;

varying vec2 vUv;

uniform sampler2D uTexture;
uniform sampler2D uTextureOutline;
uniform float uProgress;
uniform float uFade;
uniform bool uIsNightMode;

const float GAMMA_FACTOR = 2.2;
const vec3 THEME_COLOR = vec3(30., 206., 115.) / 255.;
const vec3 NIGHT_MODE_COLOR_1 = THEME_COLOR;
const vec3 NIGHT_MODE_COLOR_2 = vec3(207., 181., 31.) / 255.;
const vec3 NIGHT_MODE_COLOR_3 = vec3(49., 31., 207.) / 255.;
const vec3 NIGHT_MODE_COLOR_4 = vec3(207., 49., 31.) / 255.;

vec2 getZoomedUv(vec2 uv, float zoom, vec2 origin) {
  origin.x = -origin.x;
  uv += origin;
  float scale = 1. / zoom;
  return uv * scale - 0.5 * (scale - 1.);
}
void discardOutOfRangeUv(vec2 uv) {
  if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) discard;
}

#pragma glslify: export(discardOutOfRangeUv)
vec3 GammaToLinear(vec3 color) {
  return pow(color.rgb, vec3(GAMMA_FACTOR));
}

void main() {
  vec2 uv = vUv;

  
  uv = getZoomedUv(uv, mix(0.98, 1., uProgress), vec2(0.));
  discardOutOfRangeUv(uv);

  vec4 color = mix(texture2D(uTextureOutline, uv), texture2D(uTexture, uv), uProgress);
  color.rgb = uIsNightMode ? GammaToLinear(THEME_COLOR) : vec3(1.);
  
  color.a *= uFade;

  gl_FragColor = color;
  
  
}`,
  De = `precision highp float;

varying vec2 vUv;

uniform sampler2D uTexture;
uniform float uProgress;
uniform float uOpacity;

const vec3 themeColor = vec3(30., 206., 115.) / 255.;

void main() {
  vec2 uv = vUv;

  

  vec4 color = texture2D(uTexture, uv);
  color.rgb = mix(color.rgb, themeColor, 1. - step(-uv.x + uProgress, 0.));
  color.a *= uOpacity;

  gl_FragColor = color;
  
}`;
const Y = .2,
  w = .5,
  z = .7,
  ie = .95,
  a = m.isSp ? "sp" : "pc",
  e = {
    backgroundColor: new P(1, 1, 1),
    camera: {
      fov: 20,
      fovTransitionOut: 12,
      positionLoading: {
        pc: new o(1.07, .7, 1.36),
        sp: new o(1.07 - .68, .7 - .38, 1.36 - .15)
      },
      positionLoadingComplete: {
        pc: new o(1.07, .7, 1.36),
        sp: new o(1.07 - .68, .7 - .38, 1.36 - .15)
      },
      positionInsertPlug: {
        pc: new o(.54, .7, 1.36),
        sp: new o(.54 - .42, .7 - .3, 1.36 - .4)
      },
      position: {
        pc: new o(1.45, .9, 4),
        sp: new o(1.45 - .575, .9 - .35, 4 - 1)
      },
      positionTransitionOut: {
        pc: new o(1.45, .9 - .5, 4 - 4),
        sp: new o(1.45 - .575, .9 - .35 - .3, 4 - 4)
      },
      far: 20.13,
      lookAtLoading: {
        pc: new o(1.44, .84, .8),
        sp: new o(1.44 - .68, .84 - .38, .8 - .15)
      },
      lookAtLoadingComplete: {
        pc: new o(1.44, .84, .8),
        sp: new o(1.44 - .68, .84 - .38, .8 - .15)
      },
      lookAtInsertPlug: {
        pc: new o(1.48, .87, .8),
        sp: new o(1.48 - .42, .87 - .32, .8 - .35)
      },
      lookAt: {
        pc: new o(1.45, 1.2, 4 - 3),
        sp: new o(1.45 - .575, 1.2 - .35, 4 - 3 - 1)
      },
      lookAtTransitionOut: {
        pc: new o(1.45, 1.2 - .45, 4 - 3),
        sp: new o(1.45 - .575, 1.2 - .35 - .3, 4 - 3 - 1)
      },
      positionMaskLowerPage: {
        pc: new o(-3, 1, 2.5),
        sp: new o(-4, 1, 2.5)
      },
      lookAtMaskLowerPage: {
        pc: new o(1.48, .89, 1.05),
        sp: new o(.9, .61, .75)
      }
    },
    directionalLight: {
      color: new P(.01, .01, .01),
      intensity: 0,
      position: new o(35, 32, 3)
    },
    directionalLightLoadingComplete: {
      color: new P(.01, .01, .01),
      intensity: 0,
      position: new o(35, 32, 3)
    },
    directionalLightInsertPlug: {
      color: new P(.13, .09, .06),
      intensity: .5,
      position: new o(20, 32, 3)
    },
    directionalLightLoadDone: {
      color: new P(.85, .82, .77),
      intensity: .54,
      position: new o(4.6, 44, 11)
    },
    ambientLight: {
      color: new P(.1, .04, .04),
      intensity: .01
    },
    ambientLightLoadingComplete: {
      color: new P(.1, .04, .04),
      intensity: .1
    },
    ambientLightInsertPlug: {
      color: new P(.1, .04, .04),
      intensity: 6.96
    },
    ambientLightLoadDone: {
      color: new P(16777215),
      intensity: 4
    },
    spotLight: {
      color: new P(.05, .04, .03),
      intensity: B ? 4 : 5.11,
      angle: B ? .17 : .037,
      penumbra: 1,
      position: B ? new o(7.37, 9.27, -.62) : new o(6.1, 3.4, 3.1)
    },
    spotLightLoadingComplete: {
      color: new P(.05, .04, .03),
      intensity: B ? 3 : 3.59,
      angle: B ? .17 : .05,
      penumbra: 1,
      position: B ? new o(7.37, 9.27, -.62) : new o(6.1, 3.4, 3.1)
    },
    spotLightInsertPlug: {
      color: new P(.05, .04, .03),
      intensity: 8.8,
      angle: .393,
      penumbra: 1,
      position: new o(5.9, 3.4, 3.1)
    },
    directionalLightLoadingCompleteLowerPage: {
      color: new P(.13, .13, .13),
      intensity: .01,
      position: new o(20, 32, 3)
    },
    directionalLightInsertPlugLowerPage: {
      color: new P(.13, .09, .06),
      intensity: .5,
      position: new o(20, 32, 3)
    },
    spotLightLoadingCompleteLowerPage: {
      color: new P(.05 * 3, .04 * 3, .03 * 3),
      intensity: 13,
      angle: B ? .17 : .06,
      penumbra: 1,
      position: new o(6.1, 3.4, 3.1)
    },
    spotLightInsertPlugLowerPage: {
      color: new P(.05 * 20, .035 * 20, .03 * 20),
      intensity: 80,
      angle: .393,
      penumbra: 1,
      position: new o(5.9, 4, 3.1)
    },
    car: {
      individual: [{
        position: new o(1.2, -.18, -2.9),
        positionInsertPlug: new o(1.2, -.18, -2.9),
        positionFront: {
          pc: new o(1.2, -.18, -2.9),
          sp: new o(1.2, -.18, -2.9)
        },
        rotation: new k(0, Math.PI * -.5, 0),
        rotationInsertPlug: new k(0, Math.PI * -.5, 0),
        rotationFront: new k(0, Math.PI * -.5, 0)
      }, {
        position: new o(.05, -.18, .1),
        positionInsertPlug: new o(.05, -.18, .1),
        positionFront: {
          pc: new o(0, 0, 0),
          sp: new o(0, 0, 0)
        },
        rotation: new k(-.01, Math.PI * -.5, .1),
        rotationInsertPlug: new k(-.01, Math.PI * -.5, .1),
        rotationFront: new k(0, Math.PI * -.5, 0)
      }, {
        position: new o(-.98 - 1.2, 0, 3),
        positionInsertPlug: new o(-.98 - 1.2, 0, 3),
        positionFront: {
          pc: new o(-.98, 0, 3),
          sp: new o(-1.03, .1, 3)
        },
        rotation: new k(0, Math.PI * -.5, 0),
        rotationInsertPlug: new k(0, Math.PI * -.5, 0),
        rotationFront: new k(0, Math.PI * -.5, 0)
      }],
      scale: 1,
      speed: .4,
      shake: .0012
    },
    plug: {
      position: new o(.472, .49, 2.07),
      positionInsertPlug: new o(.472, .574, 2.057),
      positionFront: {
        pc: new o(.422, .454, 1.996),
        sp: new o(.422, .454, 1.996)
      },
      rotation: new k(-.78 + .1, 1.57, 0),
      rotationInsertPlug: new k(-.78, 1.57, 0),
      rotationFront: new k(-.6, Math.PI * .5, 0),
      shake: .96,
      scale: 1.2,
      emissiveStart: 0,
      emissiveLoadingComplete: .02,
      emissiveInsertPlug: .2,
      metalnessStart: 0,
      metalnessInsertPlug: .2,
      emissiveStartLowerPage: .2,
      emissiveInsertPlugLowerPage: 2,
      metalnessStartLowerPage: .2,
      metalnessInsertPlugLowerPage: 2
    },
    sky: {
      position: {
        pc: new o(.8 - 1, 2.3, -4.2),
        sp: new o(.5 - .5, 2, -4.2)
      },
      positionLoadDone: {
        pc: new o(.8, 2.3, -4.2),
        sp: new o(.5, 2, -4.2)
      },
      rotation: new k(.25, -.1, .1),
      scale: {
        pc: new o(7, 2.5, 1),
        sp: new o(3.5, 1.9, 1)
      },
      center: .05,
      spreadBack: 0,
      spreadFront: m.isSp ? 1.25 : 1.09,
      fadeIn: .64,
      speed: .11,
      opacity: 1,
      opacityNight: .5,
      clouds: [{
        speed: .42,
        scale: new g(1, .88),
        offset: 0
      }, {
        speed: .2,
        scale: new g(.6, .3),
        offset: 0
      }]
    },
    streetBackground: {
      position: new o(.93, 5.5, -7),
      positionLoadDone: {
        pc: new o(1.1, 2.3, -5),
        sp: new o(1.1, 2.3 + .2, -5)
      },
      rotation: new k(0, -1, 0),
      rotationLoadDone: new k(0, 0, 0),
      size: new o(8, 4.5, 1),
      sizeScale: 2,
      textureRotation: 0,
      rotationCenter: new g(0, 0),
      offset: new g(-.1 + .5, .14 + .5),
      offsetLoadDone: new g(m.isSp ? -.09 : -.03, .06),
      scale: .75,
      spread: .11,
      darkness: .9,
      darknessNight: .7,
      fadePosition: .45,
      fadeRate: 1.5,
      opacity: .7,
      opacityNight: 1,
      alpha: 1,
      speed: 0,
      color: new P(.73, .47, .36),
      colorNight: new P(.44, .38, .35)
    },
    title: {
      position: {
        pc: new o(4.15, 1.78, -.32),
        sp: new o(3.73, 1.61, -.32)
      },
      positionLoadDone: {
        pc: new o(1.815, 1.626, .1),
        sp: new o(1.458, 1.78, .1)
      },
      rotation: {
        pc: new k(0, -1.02, 0),
        sp: new k(0, -1.04, 0)
      },
      rotationLoadDone: new k(.15, 0, 0),
      scale: {
        pc: 1.5,
        sp: .88
      },
      scaleLoadDone: {
        pc: 1.453,
        sp: .99
      }
    },
    loading: {
      position: {
        pc: new o(-247 + 1221, -259 + 591.5, .1),
        sp: new o(0 + 383.82, -175 + 379, .1)
      },
      scale: {
        pc: 1,
        sp: .42
      }
    },
    spark: {
      speed: 2.5,
      interval: 3.5,
      positionY: 0,
      scale: new g(.5, 1),
      rotation: 1.5,
      darkness: 1,
      bloom: .5,
      opacity: 1
    },
    background: {
      darkness: .47,
      blur: .6,
      vignette: .4
    },
    loadDoneDuration: 6,
    carMoveDurationRate: 1.4,
    stop: !1
  },
  D = {
    maxblur: 0,
    maxblurLoadDone: X ? 6 : 4.5,
    maxblurLowerPage: X ? 5 : 8,
    blurFocus: .1,
    mNear: 1.3,
    mFar: 6.5,
    noiseGrayScale: 1,
    bokehNear: {
      pc: .34,
      sp: .34 - .24
    },
    bokehFarBack: 1.7,
    bokehFarFront: .1,
    opacityLowerPage: .5,
    nightModeThreshold4: .56,
    monochromeMax: .4,
    uRay: [{
      center: m.isSp ? new g(.53, 1.31) : new g(.51, .9),
      rotation: m.isSp ? .047 : .039 - .01,
      speed: 0,
      offset: .1,
      width: .059 - .01,
      edge: .01,
      rayDistance: m.isSp ? 5.14 : 3.6 - 3,
      opacity: 0
    }, {
      center: m.isSp ? new g(.65, 1.79) : new g(.69, 1.3),
      rotation: m.isSp ? .055 : .046 - .01,
      speed: 0,
      offset: 0,
      width: .037 - .01,
      edge: .01,
      rayDistance: m.isSp ? 6.83 : 5 - 3,
      opacity: 0
    }, {
      center: m.isSp ? new g(-.54, .7) : new g(-.54, .7),
      rotation: (m.isSp, .007 - .01),
      speed: 0,
      offset: .036,
      width: .02 - .01,
      edge: .042,
      rayDistance: (m.isSp, 3.6 - 3),
      opacity: 0
    }],
    uRayLoadDone: [{
      center: m.isSp ? new g(.69, 1.43) : new g(.51, .9),
      rotation: m.isSp ? .047 : .039,
      speed: .1,
      offset: .1,
      width: m.isSp ? .054 : .062,
      edge: .01,
      rayDistance: m.isSp ? 5.14 : 3.6,
      opacity: .8
    }, {
      center: m.isSp ? new g(.53, 1.79) : new g(.69, 1.3),
      rotation: m.isSp ? .055 : .046,
      speed: .5,
      offset: 0,
      width: .045,
      edge: .01,
      rayDistance: m.isSp ? 6.83 : 5,
      opacity: .67
    }, {
      center: m.isSp ? new g(-.54, .7) : new g(-.54, .7),
      rotation: (m.isSp, .007),
      speed: .2,
      offset: .036,
      width: .075,
      edge: .042,
      rayDistance: (m.isSp, 3.6),
      opacity: .4
    }]
  },
  Ce = !1;
class ze extends oe {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "scene", new E());
    _defineProperty(this, "scene2D", new E());
    _defineProperty(this, "sceneBackground", new E());
    _defineProperty(this, "sceneSky", new E());
    _defineProperty(this, "sceneLoading", new E());
    _defineProperty(this, "camera", void 0);
    _defineProperty(this, "camera2D", void 0);
    _defineProperty(this, "lookAt", e.camera.lookAtLoading[a].clone());
    _defineProperty(this, "directionalLight", void 0);
    _defineProperty(this, "ambientLight", void 0);
    _defineProperty(this, "spotLight", void 0);
    _defineProperty(this, "folder", void 0);
    _defineProperty(this, "folderLoading", void 0);
    _defineProperty(this, "cars", []);
    _defineProperty(this, "sparks", []);
    _defineProperty(this, "uniformsSparks", []);
    _defineProperty(this, "postprocessing", {
      composer: ne,
      bokeh: de
    });
    _defineProperty(this, "sceneScale", 1);
    _defineProperty(this, "scenePosition", 0);
    _defineProperty(this, "toKvProgress", 0);
    _defineProperty(this, "carMoveProgress", 0);
    _defineProperty(this, "cameraProgressBase", 0);
    _defineProperty(this, "isDoneLoad", !1);
    _defineProperty(this, "isRunTransition", !1);
    _defineProperty(this, "isRunTitle", !1);
    _defineProperty(this, "isStartKv", !1);
    _defineProperty(this, "isLowerPage", !1);
    _defineProperty(this, "isTransitionedNext", !1);
    _defineProperty(this, "isSkipLoading", !1);
  }
  onInit() {
    this.isLowerPage = this.option.isLowerPage, c.enablePane && (this.folderLoading = c.pane.addFolder({
      title: "Loading",
      expanded: !1
    }), this.folder = c.pane.addFolder({
      title: "KV",
      expanded: !1
    })), this.initScene(), this.initCamera(), this.initLight(), this.initCar(), this.initPlug(), this.isLowerPage || (this.initLoading(), this.initBackground(), this.initSky(), this.initTitle()), this.initPostprocessing(), this.option.renderer.shadowMap.enabled = Ce, this.initialWindowRatio = this.option.width / this.option.height / (this.isSp ? c.designWidthSp / c.designHeightSp : c.designWidthPc / c.designHeightPc), c.enablePane && this.folderLoading.addInput(this, "toKvProgress", {
      min: 0,
      max: e.carMoveDurationRate,
      step: .001
    }).on("change", () => {
      const t = Math.min(this.toKvProgress, 1);
      if (t === 0 ? this.plugMesh.visible = !1 : this.plugMesh.visible = !0, t <= w) {
        const n = t / w;
        this.loadingComplete(t / Y), this.insertPlug(S(n, .4, 1, 0, 1));
      }
      this.animateToKv(t), this.moveCar(this.toKvProgress / e.carMoveDurationRate), W();
    });
  }
  initScene() {
    if (c.enablePane) {
      const t = this.folder.addFolder({
        title: "scene",
        expanded: !1
      });
      t.addInput(this.scene, "position", {
        x: {
          step: .001
        },
        y: {
          step: .001
        },
        z: {
          step: .001
        }
      });
      const n = {
        scale: this.scene.scale.x
      };
      t.addInput(n, "scale", {
        step: .001
      }).on("change", () => {
        this.scene.scale.setScalar(n.scale);
      }), t.addInput(e, "backgroundColor", {
        label: "背景色",
        color: {
          type: "float"
        },
        picker: "inline",
        expanded: !1
      });
    }
  }
  initCamera() {
    if (this.lookAt = e.camera[this.isLowerPage ? "lookAtInsertPlug" : "lookAtLoading"][a].clone(), this.camera = new ae(e.camera.fov, this.option.camera.aspect, this.option.camera.near, e.camera.far), this.camera.position.copy(e.camera[this.isLowerPage ? "positionInsertPlug" : "positionLoading"][a]), this.setLookAt(), this.camera2D = new re(), c.enablePane) {
      const t = this.folder.addFolder({
        title: "camera",
        expanded: !1
      });
      t.addInput(this.camera, "position", {
        x: {
          step: .01
        },
        y: {
          step: .01
        },
        z: {
          step: .01
        }
      }).on("change", () => {
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
      }), t.addInput(this, "lookAt", {
        x: {
          step: .01
        },
        y: {
          step: .01
        },
        z: {
          step: .01
        }
      }).on("change", () => {
        this.setLookAt();
      });
    }
  }
  setLookAt() {
    this.camera.lookAt(this.lookAt);
  }
  initLight() {
    {
      this.paramsDirectionalLightLoadingComplete = e[this.isLowerPage ? "directionalLightLoadingCompleteLowerPage" : "directionalLightLoadingComplete"], this.paramsDirectionalLightInsertPlug = e[this.isLowerPage ? "directionalLightInsertPlugLowerPage" : "directionalLightInsertPlug"];
      const t = this.directionalLight = new le(e.directionalLight.color, e.directionalLight.intensity);
      t.position.copy(e.directionalLight.position), this.scene.add(t);
    }
    {
      const t = this.ambientLight = new ce(e.ambientLight.color, e.ambientLight.intensity);
      this.scene.add(t);
    }
    {
      this.paramsSpotLightLoadingComplete = e[this.isLowerPage ? "spotLightLoadingCompleteLowerPage" : "spotLightLoadingComplete"], this.paramsSpotLightInsertPlug = e[this.isLowerPage ? "spotLightInsertPlugLowerPage" : "spotLightInsertPlug"], this.paramsSpotLightStart = e[this.isLowerPage ? "spotLightLoadingCompleteLowerPage" : "spotLight"];
      const t = this.spotLight = new ue(this.paramsSpotLightStart.color, this.paramsSpotLightStart.intensity, 0, this.paramsSpotLightStart.angle, this.paramsSpotLightStart.penumbra);
      t.position.copy(this.paramsSpotLightStart.position), this.scene.add(t);
    }
  }
  initBackground() {
    const t = this.textures.Background = C(j, {}),
      n = _({
        uResolution: new g(this.option.width, this.option.height),
        tNoise: t,
        uNoiseResolution: new g(j.width, j.height),
        uProgress: 0,
        uDarkness: e.background.darkness,
        uBlur: e.background.blur,
        uVignette: e.background.vignette
      });
    this.uniformsBackground = N(n);
    const r = this.backgroundMesh = new K(new U(1, 1), new A({
      uniforms: n,
      vertexShader: F,
      fragmentShader: xe,
      transparent: !0
    }));
    this.sceneBackground.add(r);
  }
  initSky() {
    this.initStreetBackground(), this.initCloud();
  }
  initStreetBackground() {
    const t = this.option.isNight ? ve : Se,
      n = this.textures.StreetBackground = C(t, {}),
      r = _({
        uTexture: n,
        uResolutionObject: new g(e.streetBackground.size.x, e.streetBackground.size.y),
        uResolutionImage: new g(t.width, t.height),
        uRotation: e.streetBackground.textureRotation,
        uRotationCenter: e.streetBackground.rotationCenter,
        uOffset: e.streetBackground.offset,
        uTime: 0,
        uSpread: e.streetBackground.spread,
        uScale: e.streetBackground.scale,
        uDarkness: e.streetBackground[this.option.isNight ? "darknessNight" : "darkness"],
        uFadePosition: e.streetBackground.fadePosition,
        uFadeRate: e.streetBackground.fadeRate,
        uOpacity: e.streetBackground[this.option.isNight ? "opacityNight" : "opacity"],
        uAlpha: 0,
        uColor: e.streetBackground[this.option.isNight ? "colorNight" : "color"],
        uBackgroundColor: e.backgroundColor
      });
    this.uniformsStreetBackground = N(r);
    const s = this.streetBackgroundMesh = new K(new U(1, 1), new A({
      uniforms: r,
      vertexShader: F,
      fragmentShader: Le,
      transparent: !0
    }));
    if (s.position.copy(e.streetBackground.position), s.rotation.copy(e.streetBackground.rotation), s.scale.set(e.streetBackground.size.x * e.streetBackground.sizeScale, e.streetBackground.size.y * e.streetBackground.sizeScale, 1), this.sceneSky.add(s), c.enablePane) {
      const i = this.folder.addFolder({
        title: "街背景",
        expanded: !1
      });
      i.addInput(s, "visible"), i.addInput(s, "position"), i.addInput(s, "rotation"), i.addInput(s, "scale", {
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
        this.uniformsStreetBackground.uResolutionObject.value.set(s.scale.x, s.scale.y);
      }), i.addInput(this.uniformsStreetBackground.uScale, "value", {
        label: "scale",
        min: 0
      }), i.addInput(this.uniformsStreetBackground.uSpread, "value", {
        label: "歪み",
        min: 0,
        max: 10
      }), i.addInput(this.uniformsStreetBackground.uRotation, "value", {
        label: "画像回転",
        min: 0,
        max: Math.PI
      }), i.addInput(this.uniformsStreetBackground.uRotationCenter, "value", {
        label: "回転中心"
      }), i.addInput(this.uniformsStreetBackground.uOffset, "value", {
        label: "画像位置"
      }), i.addInput(this.uniformsStreetBackground.uDarkness, "value", {
        label: "darkness"
      }), i.addInput(this.uniformsStreetBackground.uFadePosition, "value", {
        label: "フェード Position",
        min: 0
      }), i.addInput(this.uniformsStreetBackground.uFadeRate, "value", {
        label: "フェード Rate",
        min: 0
      }), i.addInput(this.uniformsStreetBackground.uOpacity, "value", {
        label: "opacity",
        min: 0,
        max: 1
      }), i.addInput(this.uniformsStreetBackground.uColor, "value", {
        label: "色",
        color: {
          type: "float"
        },
        picker: "inline",
        expanded: !1
      });
    }
  }
  initCloud() {
    const t = this.textures.imageCloud01 = C(ye, {}),
      n = this.textures.imageCloud02 = C(ke, {}),
      r = _({
        uTexture01: t,
        uTexture02: n,
        uTime: 0,
        uCenter: e.sky.center,
        uSpreadBack: e.sky.spreadBack,
        uSpreadFront: e.sky.spreadFront,
        uFadeIn: e.sky.fadeIn,
        uOpacity: e.sky[this.option.isNight ? "opacityNight" : "opacity"],
        uCloud: e.sky.clouds
      });
    this.uniformsSky = N(r);
    const s = this.skyMesh = new K(new U(1, 1), new A({
      uniforms: r,
      vertexShader: F,
      fragmentShader: be,
      transparent: !0
    }));
    if (s.position.copy(e.sky.position[a]), s.rotation.copy(e.sky.rotation), s.scale.copy(e.sky.scale[a]), this.sceneSky.add(s), c.enablePane) {
      const i = this.folder.addFolder({
        title: "空",
        expanded: !1
      });
      i.addInput(s, "visible"), i.addInput(s, "position"), i.addInput(s, "rotation"), i.addInput(s, "scale", {
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
      }), i.addInput(this.uniformsSky.uCenter, "value", {
        label: "出現位置",
        min: 0,
        max: 1
      }), i.addInput(this.uniformsSky.uSpreadBack, "value", {
        label: "奥の広がり",
        min: 0,
        max: 5
      }), i.addInput(this.uniformsSky.uSpreadFront, "value", {
        label: "手前の広がり",
        min: 0,
        max: 5
      }), i.addInput(this.uniformsSky.uFadeIn, "value", {
        label: "fadeIn",
        min: 0,
        max: 1
      }), i.addInput(e.sky, "speed", {
        min: 0,
        max: 5
      }), this.uniformsSky.uCloud.value.forEach((d, h) => {
        const y = i.addFolder({
          title: `雲${h + 1}`
        });
        y.addInput(d, "speed", {
          min: 0,
          max: .5
        }), y.addInput(d, "scale", {
          x: {
            min: 0,
            max: 2
          },
          y: {
            min: 0,
            max: 2
          }
        }), y.addInput(d, "offset", {
          min: 0
        });
      });
    }
  }
  initCar() {
    J("/gl/car_v7_out3.glb", {
      onLoad: (t, n) => {
        const r = n;
        r.name = "glTF", r.scale.setScalar(e.car.scale), r.traverse(s => {
          if (s.isMesh) switch (s.material = s.material.clone(), s.material.name) {
            case "window":
              s.material.roughness = 1;
              break;
            case "lamp":
              this.option.isNight && s.material.emissive.copy(he(we));
              break;
          }
        }), e.car.individual.forEach((s, i) => {
          const d = r.clone();
          d.position.copy(s.position), d.rotation.copy(s.rotation), this.isDisposed ? this.addDisposeTarget(this.scene, d) : this.scene.add(d), this.cars.push(d), i === 1 && d.traverse(h => {
            if (h.isMesh) switch (h.name) {
              case "futa_L":
                h.visible = !1;
                break;
              default:
                h.material.name === "lamp" && (this.carLamp = h.material.emissive, this.carLampColor = new P(0, 0, 0), this.carLampColorLoadDone = this.carLamp.clone(), this.carLamp.set(this.carLampColor));
                break;
            }
          }), (this.isLowerPage && i !== 1 || this.isSp && i === 0) && (d.visible = !1);
        });
      }
    });
  }
  initPlug() {
    const t = this.textures.Plug = C(Pe, {});
    J(this.option.isNight ? "/gl/night/optimize/joint_v6_out3_line.glb" : "/gl/optimize/joint_v6_out3_line.glb", {
      onLoad: (n, r) => {
        const s = this.plugMesh = r;
        s.name = "glTF", s.traverse(i => {
          if (i.isMesh) if (!this.isLowerPage && i.name.startsWith("spark_")) {
            const d = _({
                uTexture: t,
                uSpeed: e.spark.speed,
                uInterval: e.spark.interval,
                uScale: e.spark.scale,
                uRotation: e.spark.rotation,
                uDarkness: e.spark.darkness,
                uBloom: e.spark.bloom,
                uOpacity: 0,
                uOffset: Math.random(),
                uTime: 0
              }),
              h = N(d);
            this.uniformsSparks.push(h);
            const y = new A({
              uniforms: d,
              vertexShader: F,
              fragmentShader: fe,
              side: pe,
              transparent: !0,
              depthTest: !1,
              depthWrite: !1
            });
            i.material = y, this.sparks.push(i);
          } else i.material.emissiveOriginal = i.material.emissive, i.material.emissiveStart = i.material.emissiveOriginal.clone().multiplyScalar(e.plug[this.isLowerPage ? "emissiveStartLowerPage" : "emissiveStart"]), i.material.emissiveLoadingComplete = i.material.emissiveOriginal.clone().multiplyScalar(e.plug[this.isLowerPage ? "emissiveStartLowerPage" : "emissiveLoadingComplete"]), i.material.emissiveInsertPlug = i.material.emissiveOriginal.clone().multiplyScalar(e.plug[this.isLowerPage ? "emissiveInsertPlugLowerPage" : "emissiveInsertPlug"]), i.material.emissive = this.isSkipLoading ? i.material.emissiveOriginal : i.material.emissiveStart, i.material.metalnessOriginal = i.material.metalness, i.material.metalnessStart = i.material.metalnessOriginal * e.plug[this.isLowerPage ? "metalnessStartLowerPage" : "metalnessStart"], i.material.metalnessInsertPlug = i.material.metalnessOriginal * e.plug[this.isLowerPage ? "metalnessInsertPlugLowerPage" : "metalnessInsertPlug"], i.material.metalness = this.isSkipLoading ? i.material.metalnessOriginal : i.material.metalnessStart, i.castShadow = !0;
        }), s.visible = this.isSkipLoading, s.position.copy(this.isSkipLoading ? e.plug.positionFront[a] : e.plug.position), s.rotation.copy(this.isSkipLoading ? e.plug.rotationFront : e.plug.rotation), s.scale.setScalar(e.plug.scale), this.isDisposed ? this.addDisposeTarget(this.scene, s) : this.scene.add(s);
      },
      isAddToLoadingWait: this.isLowerPage
    });
  }
  initTitle() {
    const t = C(Ie, {}),
      n = this.textures.Title = C(T, {}),
      r = _({
        uTexture: n,
        uTextureOutline: t,
        uProgress: 0,
        uFade: 0,
        uIsNightMode: this.option.isNight
      });
    this.uniformsTitle = N(r);
    const s = this.meshTitle = new K(new U(1, 1), new A({
      uniforms: r,
      vertexShader: F,
      fragmentShader: Te,
      transparent: !0
    }));
    if (s.position.copy(e.title.position[a]), s.rotation.copy(e.title.rotation[a]), s.scale.set(T.width * .001 * e.title.scale[a], T.height * .001 * e.title.scale[a], 1), this.scene.add(s), c.enablePane) {
      const i = this.folder.addFolder({
        title: "キャッチコピー",
        expanded: !1
      });
      i.addInput(s, "visible"), i.addInput(s, "position", {
        x: {
          step: .001
        },
        y: {
          step: .001
        },
        z: {
          step: .001
        }
      }), i.addInput(s, "rotation", {
        x: {
          step: .01
        },
        y: {
          step: .01
        },
        z: {
          step: .01
        }
      }), i.addInput(e.title.scale, a, {
        label: "scale",
        min: 0,
        step: .001
      }).on("change", () => {
        s.scale.set(T.width * .001 * e.title.scale[a] * this.sceneScale, T.height * .001 * e.title.scale[a] * this.sceneScale, 1);
      });
    }
  }
  initLoading() {
    const t = this.textures.Loading = C(V, {
        onLoad: s => {
          this.emitResizeAll();
        }
      }),
      n = _({
        uTexture: t,
        uProgress: 0,
        uOpacity: 0
      });
    this.uniformsLoading = N(n);
    const r = this.meshLoading = new K(new U(1, 1), new A({
      uniforms: n,
      vertexShader: F,
      fragmentShader: De,
      transparent: !0
    }));
    r.position.copy(e.loading.position[a]), this.sceneLoading.add(r), this.emitResizeAll();
  }
  initPostprocessing() {
    const {
      width: t,
      height: n,
      pixelRatio: r
    } = this.option;
    this.postprocessingOpacity = this.isLowerPage ? D.opacityLowerPage : 1;
    const s = me({
      width: t,
      height: n,
      pixelRatio: r,
      camera: this.camera,
      folder: this.folder,
      effectController: $($({}, D), {
        bokehNear: D.bokehNear[a],
        opacity: this.postprocessingOpacity
      }),
      transparent: this.isLowerPage,
      isNight: this.option.isNight
    });
    this.postprocessing = s;
  }
  initOrbitControls() {
    se(() => import("./OrbitControls.js"), ["_astro/OrbitControls.js", "_astro/constants.e6c90e33.js", "_astro/PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js"]).then(({
      OrbitControls: t
    }) => {
      const n = new t(this.camera, this.option.renderer.domElement);
      n.addEventListener("change", () => {
        this.camera.far = e.camera.far + n.getDistance(), this.camera.updateProjectionMatrix(), this.setLookAt();
      }), n.maxDistance = 5e4, n.update(), this.setLookAt();
    });
  }
  startLoading() {
    this.uniformsLoading.uOpacity.value = 1;
  }
  progressLoading(t) {
    R.scrub(this.uniformsLoading.uProgress, {
      value: t / 100,
      duration: .5
    }), c.components.topKv.progressLoading(t);
  }
  startInsetPlug() {
    this.plugMesh && (this.plugMesh.visible = !0);
  }
  initForLowerPage() {
    this.startInsetPlug(), this.postprocessing.bokehUniformsWithoutValue.blurFocus.value = 10, this.postprocessing.bokehUniformsWithoutValue.blurExponent.value = 0;
  }
  loadDone() {
    this.isDoneLoad || (this.isDoneLoad = !0, R.to(this.uniformsLoading.uOpacity, {
      value: 0,
      duration: .6,
      ease: "power2.out",
      onUpdate: () => {
        c.components.topKv.fadeLoading(this.uniformsLoading.uOpacity.value);
      },
      onComplete: () => {
        c.components.topKv.hideLoading(), this.meshLoading.visible = !1;
      }
    }), R.to(this, {
      toKvProgress: 1,
      duration: e.loadDoneDuration,
      ease: "none",
      onStart: () => {
        this.startInsetPlug();
      },
      onUpdate: () => {
        if (this.toKvProgress <= w) {
          const t = this.toKvProgress / w;
          this.loadingComplete(this.toKvProgress / Y), this.progressSpark(t);
          const n = S(t, .4, 1, 0, 1);
          this.zoomInPlug(n), this.insertPlug(n);
        }
        this.animateToKv(this.toKvProgress);
      },
      onComplete: () => {
        e.title.scale[a] = e.title.scaleLoadDone[a], this.initialCarPosition = this.cars[2].position.x, this.isStartKv = !0, L.emit("startTopPageScroll"), W();
      }
    }), R.to(this, {
      carMoveProgress: 1,
      duration: e.loadDoneDuration * e.carMoveDurationRate,
      ease: "none",
      onUpdate: () => {
        this.moveCar(this.carMoveProgress);
      }
    }), gsap.delayedCall(e.loadDoneDuration * Y, () => {
      c.components.topKv.startInsetPlug();
    }), gsap.delayedCall(e.loadDoneDuration * .8, () => {
      L.emit("showKv"), L.emit("showScrollDown");
    }));
  }
  loadingComplete(t) {
    var _this$plugMesh;
    let n = u["quart.inOut"](S(t, .3, 1, 0, 1));
    const r = u["cubic.out"](S(t, .4, 1, 0, 1)),
      s = u["sine.out"](t);
    this.camera.position.set(...p(e.camera.positionLoading[a], e.camera.positionLoadingComplete[a], r)), this.lookAt.set(...p(e.camera.lookAtLoading[a], e.camera.lookAtLoadingComplete[a], r)), this.setLookAt(), this.directionalLight.color.setRGB(...O(e.directionalLight.color, this.paramsDirectionalLightLoadingComplete.color, n)), this.directionalLight.intensity = l(e.directionalLight.intensity, this.paramsDirectionalLightLoadingComplete.intensity, n), this.directionalLight.position.set(...p(e.directionalLight.position, this.paramsDirectionalLightLoadingComplete.position, n)), this.spotLight.intensity = l(e.spotLight.intensity, this.paramsSpotLightLoadingComplete.intensity, n), this.isLowerPage || (_this$plugMesh = this.plugMesh) !== null && _this$plugMesh !== void 0 && _this$plugMesh.traverse(i => {
      i.isMesh && (i.name.startsWith("spark_") || i.material.emissive.setRGB(...O(i.material.emissiveStart, i.material.emissiveLoadingComplete, t)));
    }), this.uniformsSparks.forEach(i => {
      i.uTime.value = .03 + s * 4, i.uOpacity.value = e.spark.opacity * G(0, .1, s) * G(1, .9, s);
    });
  }
  progressSpark(t) {
    const n = u["sine.out"](t);
    this.uniformsSparks.forEach(r => {
      r.uTime.value = .03 + n * 4, r.uOpacity.value = e.spark.opacity * G(0, .1, n) * G(1, .9, n);
    });
  }
  zoomInPlug(t) {
    const n = u["cubic.out"](t);
    n > 0 && (this.camera.position.set(...p(e.camera.positionLoadingComplete[a], e.camera.positionInsertPlug[a], n)), this.lookAt.set(...p(e.camera.lookAtLoadingComplete[a], e.camera.lookAtInsertPlug[a], n)), this.setLookAt());
  }
  insertPlug(t) {
    let n = u["quart.inOut"](t);
    const r = u["cubic.out"](t);
    let s = u["quart.out"](S(t, .33, 1, 0, 1));
    if (n > 0 && (this.directionalLight.color.setRGB(...O(this.paramsDirectionalLightLoadingComplete.color, this.paramsDirectionalLightInsertPlug.color, n)), this.directionalLight.intensity = l(this.paramsDirectionalLightLoadingComplete.intensity, this.paramsDirectionalLightInsertPlug.intensity, n), this.directionalLight.position.set(...p(this.paramsDirectionalLightLoadingComplete.position, this.paramsDirectionalLightInsertPlug.position, n)), this.spotLight.intensity = l(this.paramsSpotLightLoadingComplete.intensity, this.paramsSpotLightInsertPlug.intensity, n)), r > 0) {
      var _this$plugMesh2, _this$plugMesh3, _this$plugMesh4;
      const i = S(r, 0, z, 0, 1),
        d = S(r, z, 1, 0, 1),
        h = new o(...p(e.plug.position, e.plug.positionInsertPlug, ie)),
        y = new k(...p(e.plug.rotation, e.plug.rotationInsertPlug, ie * e.plug.shake));
      (_this$plugMesh2 = this.plugMesh) !== null && _this$plugMesh2 !== void 0 && _this$plugMesh2.position.set(...(r > z ? p(h, e.plug.positionInsertPlug, u["elastic.inOut"](d)) : p(e.plug.position, h, u["quad.out"](i)))), (_this$plugMesh3 = this.plugMesh) !== null && _this$plugMesh3 !== void 0 && _this$plugMesh3.rotation.set(...(r > z ? p(y, e.plug.rotationInsertPlug, u["elastic.inOut"](d)) : p(e.plug.rotation, y, u["quad.out"](i)))), (_this$plugMesh4 = this.plugMesh) === null || _this$plugMesh4 === void 0 ? void 0 : _this$plugMesh4.traverse(f => {
        f.isMesh && (f.name.startsWith("spark_") || (f.material.emissive.setRGB(...O(f.material.emissiveLoadingComplete, f.material.emissiveInsertPlug, s)), f.material.metalness = l(f.material.metalnessStart, f.material.metalnessInsertPlug, r)));
      });
      const I = Math.sin(u["back.inOut"](S(r - .025, z + (1 - z) * .1, 1, 0, 1)) * Math.PI);
      this.cars[1].position.y = e.car.individual[1].positionInsertPlug.y - I * e.car.shake, this.cars[1].rotation.x = e.car.individual[1].rotationInsertPlug.x + I * e.car.shake;
    }
  }
  animateToKv(t) {
    var _this$carLamp, _this$plugMesh5, _this$plugMesh6, _this$plugMesh7;
    const n = S(t, w, 1, 0, 1);
    let r = u["quart.inOut"](S(t, w, w * 2, 0, 1)),
      s = this.cameraProgressBase = S(t, w, 1, 0, 1),
      i = u["quart.inOut"](S(t, w, 1, 0, 1)),
      d = u["quart.out"](S(t, w * .6, w, 0, 1)),
      h = u["cubic.inOut"](S(t, w, w + (1 - w) * .5, 0, 1)),
      y = u["quart.out"](S(t, w + (1 - w) * .6, 1, 0, 1)),
      I = u["quint.inOut"](n),
      f = u["quart.inOut"](n),
      Z = u["quart.out"](S(t, w * .6, .5, 0, 1));
    if (s > 0 && (this.setSceneSize(), this.camera.position.set(l(e.camera.positionInsertPlug[a].x, e.camera.position[a].x, u["quad.out"](s)), l(e.camera.positionInsertPlug[a].y, e.camera.position[a].y, u["quart.inOut"](s)) - Math.sin(u["cubic.inOut"](Math.min(s * 1.1, 1)) * Math.PI) * .3, l(e.camera.positionInsertPlug[a].z, e.camera.position[a].z, u["quart.inOut"](s))), this.lookAt.set(...p(e.camera.lookAtInsertPlug[a], e.camera.lookAt[a], u["quart.inOut"](s))), this.setLookAt()), r > 0 && (this.directionalLight.color.setRGB(...O(e.directionalLightInsertPlug.color, e.directionalLightLoadDone.color, r)), this.directionalLight.intensity = l(e.directionalLightInsertPlug.intensity, e.directionalLightLoadDone.intensity, r), this.directionalLight.position.set(...p(e.directionalLightInsertPlug.position, e.directionalLightLoadDone.position, r))), this.ambientLight.color.setRGB(...O(e.ambientLight.color, e.ambientLightLoadDone.color, i)), this.ambientLight.intensity = l(e.ambientLight.intensity, e.ambientLightLoadDone.intensity, i), this.postprocessing.bokehUniformsWithoutValue.maxblur.value = l(D.maxblur, D.maxblurLoadDone, y), this.option.isNight || this.postprocessing.bokehUniformsWithoutValue.uRay.value.forEach((v, M) => {
      const x = D.uRay[M],
        b = D.uRayLoadDone[M];
      v.center = new g(l(x.center.x, b.center.x, I), l(x.center.y, b.center.y, I)), v.rotation = l(x.rotation, b.rotation, I), v.speed = l(x.speed, b.speed, I), v.offset = l(x.offset, b.offset, I), v.width = l(x.width, b.width, I), v.edge = l(x.edge, b.edge, I), v.rayDistance = l(x.rayDistance, b.rayDistance, I), v.opacity = l(x.opacity, b.opacity, I);
    }), this.uniformsBackground.uProgress.value = l(0, 1, Z), f > 0 && (this.cars[1].position.set(...p(e.car.individual[1].positionInsertPlug, e.car.individual[1].positionFront[a], f)), this.cars[1].rotation.set(...p(e.car.individual[1].rotationInsertPlug, e.car.individual[1].rotationFront, f)), this.cars[2].position.setY(l(e.car.individual[2].position.y, e.car.individual[2].positionFront[a].y, f))), (_this$carLamp = this.carLamp) !== null && _this$carLamp !== void 0 && _this$carLamp.setRGB(...O(this.carLampColor, this.carLampColorLoadDone, Z)), f > 0 && ((_this$plugMesh5 = this.plugMesh) !== null && _this$plugMesh5 !== void 0 && _this$plugMesh5.position.set(...p(e.plug.positionInsertPlug, e.plug.positionFront[a], f)), (_this$plugMesh6 = this.plugMesh) !== null && _this$plugMesh6 !== void 0 && _this$plugMesh6.rotation.set(...p(e.plug.rotationInsertPlug, e.plug.rotationFront, f)), (_this$plugMesh7 = this.plugMesh) !== null && _this$plugMesh7 !== void 0 && _this$plugMesh7.traverse(v => {
      v.isMesh && (v.name.startsWith("spark_") || (v.material.emissive.setRGB(...O(v.material.emissiveInsertPlug, v.material.emissiveOriginal, f)), v.material.metalness = l(v.material.metalnessOriginal * e.plug.metalnessInsertPlug, v.material.metalnessOriginal, f)));
    })), this.streetBackgroundMesh.position.set(...p(e.streetBackground.position, e.streetBackground.positionLoadDone[a], i)), this.streetBackgroundMesh.rotation.set(...p(e.streetBackground.rotation, e.streetBackground.rotationLoadDone, i)), this.streetBackgroundMesh.scale.set(l(e.streetBackground.size.x * e.streetBackground.sizeScale, e.streetBackground.size.x, i), l(e.streetBackground.size.y * e.streetBackground.sizeScale, e.streetBackground.size.y, i), 1), this.uniformsStreetBackground.uOffset.value.set(l(e.streetBackground.offset.x, e.streetBackground.offsetLoadDone.x, f), l(e.streetBackground.offset.y, e.streetBackground.offsetLoadDone.y, f)), this.uniformsStreetBackground.uAlpha.value = f, this.skyMesh.position.set(...p(e.sky.position[a], e.sky.positionLoadDone[a], i)), this.uniformsSky.uOpacity.value = l(0, e.sky[this.option.isNight ? "opacityNight" : "opacity"], y), this.uniformsTitle.uFade.value = l(0, 1, d), h > 0) {
      this.uniformsTitle.uProgress.value = l(0, 1, h);
      const v = e.title.position[a],
        M = e.title.positionLoadDone[a];
      this.meshTitle.position.set(l(v.x, M.x, h), l(v.y, M.y - .3 * (1 - this.sceneScale), h), l(v.z, M.z, h)), this.meshTitle.rotation.set(...p(e.title.rotation[a], e.title.rotationLoadDone, h));
      const x = e.title.scale[a],
        b = e.title.scaleLoadDone[a];
      this.meshTitle.scale.set(T.width * .001 * l(x, b, h) * this.sceneScale, T.height * .001 * l(x, b, h) * this.sceneScale, 1);
    }
    this.postprocessing.bokehUniformsWithoutValue.noiseGrayScale.value = 1 - r;
  }
  moveCar(t) {
    const n = u["quint.out"](S(t, w * .8, 1, 0, 1));
    this.cars[2].position.setX(l(e.car.individual[2].position.x, e.car.individual[2].positionFront[a].x, n));
  }
  blur(t) {
    this.postprocessing.bokehUniformsWithoutValue.maxblur.value = t * D.maxblurLowerPage, this.postprocessing.bokehUniformsWithoutValue.opacity.value = l(1, this.postprocessingOpacity, t);
  }
  moveCamera(t) {
    this.camera.position.set(...p(e.camera.positionInsertPlug[a], e.camera.positionMaskLowerPage[a], t)), this.lookAt.set(...p(e.camera.lookAtInsertPlug[a], e.camera.lookAtMaskLowerPage[a], t)), this.setLookAt();
  }
  skipLoading() {
    this.isSkipLoading = !0, c.components.topKv.hideLoading(), this.meshLoading.visible = !1, this.startInsetPlug(), this.loadingComplete(1), this.progressSpark(1), this.zoomInPlug(1), this.insertPlug(1), this.animateToKv(1), this.moveCar(1), this.isStartKv = !0, L.emit("startTopPageScroll"), W(), c.components.topKv.startInsetPlug();
  }
  setSceneSize() {
    this.isSp ? (this.scene.scale.setScalar(.601), this.scene.position.x = 0, this.scene.position.y = .003) : (this.scene.scale.setScalar(l(1, this.sceneScale, this.cameraProgressBase)), this.scene.position.x = this.scene.position.y = l(0, this.scenePosition, this.cameraProgressBase));
  }
  makeTransitionOutFull(t) {
    const n = u["quart.in"](t);
    this.camera.position.set(...p(e.camera.position[a], e.camera.positionTransitionOut[a], n)), this.lookAt.set(...p(e.camera.lookAt[a], e.camera.lookAtTransitionOut[a], u["cubic.in"](t))), this.camera.fov = l(e.camera.fov, e.camera.fovTransitionOut, n), this.setLookAt(), this.camera.updateProjectionMatrix(), this.postprocessing.bokehUniformsWithoutValue.maxblur.value = D.maxblurLoadDone * (1 - n);
  }
  resize(t, n, r) {
    let s = t / n / (this.isSp ? c.designWidthSp / c.designHeightSp : c.designWidthPc / c.designHeightPc);
    if (s = s + (1 - s) * .45, this.sceneScale = s, this.scenePosition = (1 - s) * 1.5, this.setSceneSize(), this.camera.aspect = t / n, this.camera.updateProjectionMatrix(), this.camera2D.resize(t, n), this.postprocessing.resize(t, n, r), !this.isLowerPage) {
      const i = n * (B ? 1.1 : 1);
      this.backgroundMesh.scale.set(t, i, 1), this.uniformsBackground.uResolution.value.set(t, i);
      const d = .001 * e.title.scale[a] * s;
      this.meshTitle.scale.set(T.width * d, T.height * d, 1);
      const h = e.loading.scale[a] * c.variableSizeRate,
        y = V.width * h,
        I = y / V.width * V.height;
      this.meshLoading.scale.set(y, I, 1), this.meshLoading.position.x = -(t + y) * .5 + e.loading.position[a].x * c.variableSizeRate + (this.isSp ? (t - window.innerWidth) / 2 : 0), this.meshLoading.position.y = -(n + I) * .5 + e.loading.position[a].y * c.variableSizeRate - .3 * (1 - this.sceneScale);
    }
  }
  scroll(t, n) {
    if (t >= Q) this.isRunTitle && (this.isRunTitle = !1, R.resetScrub(this.uniformsTitle.uProgress, {
      value: 0
    }), c.components.topKv.scroll(0)), t < H && !this.isTransitionedNext && c.nextScene === "Kv" && c.scrollDirection === 1 && (this.isTransitionedNext = !0, L.emit("top:startTransition:intro"));else if (q < t && t < Q) {
      this.isRunTitle || (this.isRunTitle = !0, c.scrollDirection === -1 ? this.isTransitionedNext = !1 : this.isTransitionedNext || (this.isTransitionedNext = !0, L.emit("top:startTransition:intro"), L.emit("showHeaderTrigger")));
      const r = 1 - (t - q) / ge;
      R.scrub(this.uniformsTitle.uProgress, {
        value: r
      }), c.components.topKv.scroll(r);
    } else t <= q && this.isRunTitle && (this.isRunTitle = !1, L.emit("hideHeaderTrigger"), L.emit("showScrollDown"), R.resetScrub(this.uniformsTitle.uProgress, {
      value: 1
    }), c.components.topKv.scroll(1));
    t >= ee ? this.isRunTransition && (this.isRunTransition = !1, L.emit("changeHeaderLocationCurrentIndex", te.indexOf("Kv")), L.emit("hideHeaderTrigger")) : H < t && t < ee ? this.isRunTransition || (this.isRunTransition = !0, this.isTransitionedNext = !1, c.scrollDirection === -1 && (L.emit("top:startTransition:kv", !0), L.emit("changeHeaderLocationCurrentIndex", te.indexOf("Footer")), L.emit("showHeaderTrigger"))) : t <= H && this.isRunTransition && (this.isRunTransition = !1);
  }
  tick(t) {
    this.isLowerPage || (this.uniformsSky.uTime.value = t * e.sky.speed), this.postprocessing.bokehUniformsWithoutValue.time.value = t;
  }
  render(t = null) {
    this.option.renderer.setRenderTarget(this.postprocessing.rtTextureColor), this.option.renderer.clear(), this.option.renderer.render(this.scene, this.camera), this.option.renderer.setRenderTarget(this.postprocessing.rtTextureColorBack), this.option.renderer.clear(), this.option.renderer.render(this.sceneBackground, this.camera2D), this.option.renderer.clearDepth(), this.option.renderer.render(this.sceneSky, this.camera), this.option.renderer.render(this.scene2D, this.camera2D), this.sceneSky.overrideMaterial = this.postprocessing.materialDepth, this.scene.overrideMaterial = this.postprocessing.materialDepth, this.option.renderer.setRenderTarget(this.postprocessing.rtTextureDepth), this.option.renderer.clear(), this.option.renderer.render(this.sceneSky, this.camera), this.option.renderer.render(this.scene, this.camera), this.sceneSky.overrideMaterial = null, this.scene.overrideMaterial = null, this.option.renderer.setRenderTarget(t), this.option.renderer.clear(), this.option.renderer.render(this.postprocessing.scene, this.postprocessing.camera), this.option.renderer.render(this.sceneLoading, this.camera2D);
  }
  start(t = !1) {
    this.skipLoading();
  }
  show(t = !1) {}
  showComplete() {
    L.emit("showKv"), L.emit("showScrollDown"), L.emit("hideHeaderTrigger");
  }
  hide(t = !1) {
    L.emit("showHeaderTrigger"), L.emit("hideScrollDown");
  }
  onDestroy() {
    c.enablePane && this.folderLoading && c.pane.remove(this.folderLoading), super.onDestroy();
  }
}
export { ze as K, Se as a, ye as b, Ie as c, T as d, V as i };