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
  d as I,
  P as v,
  aF as U,
  c as T,
  V as u,
  R as _,
  t as b,
  i as x,
  aP as E,
  aQ as h,
  l as $,
  a as M,
  G as Q,
  y as G,
  e as J,
  g as A,
  z,
  S as ee,
  W as te,
  H as ne,
  aD as se,
  aE as ie,
  aR as L,
  aS as N,
  aT as B,
  r as k,
  aU as y,
  aV as V,
  aW as D,
  aX as H,
  aY as C,
  aq as X,
  ap as W,
  aZ as oe,
  a_ as ae,
  a$ as re,
  b0 as le
} from "./constants.e6c90e33.js";
import {
  s as o,
  v as he,
  w as ue,
  g as i,
  m as Z,
  e as l,
  h as ce,
  f as ge
} from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
import { S as q } from "./project.49f9dddf.js";
const w = {
  src: "/_astro/title.108c0a00.png",
  width: 509,
  height: 135,
  format: "png"
};
var pe = `precision highp float;

uniform sampler2D uTex;

varying vec2 vUv;

void main() {
  

  
  vec4 color = texture2D(uTex, vUv);
  if (color.a == 0.) {
    discard;
  }
  

  gl_FragColor = color;
  
}`;
const c = {
    src: "/_astro/b-body_light_10.ce75b702.png",
    width: 353,
    height: 61,
    format: "png"
  },
  Y = new I(0, 0, 1),
  me = new v(),
  de = U(c.src),
  fe = T({
    uTex: de,
    uResolutionObject: new u(c.width, c.height),
    uResolutionImage: new u(c.width, c.height),
    uOpacity: 1
  }),
  ve = new _({
    uniforms: fe,
    vertexShader: b,
    fragmentShader: pe,
    transparent: !0
  });
class Te extends x {
  constructor({
    index: e = 0,
    speed: n = 8,
    radius: s = 100,
    scale: t = 0.8
  } = {}) {
    super(me, ve),
      (this.params = {
        speed: n,
        radius: s,
        scale: t
      }),
      (this._quaternion = new E());
  }
  tick(e) {
    this.position.set(
      0,
      this.params.scale * this.params.radius,
      (e * 200) % 1e3
    );
    const n = -e * this.params.speed;
    this._quaternion.setFromAxisAngle(Y, n),
      this.position.applyQuaternion(this._quaternion),
      this.setRotationFromAxisAngle(Y, n);
  }
  resize() {
    this.scale.set(
      c.width * this.params.scale,
      c.height * this.params.scale,
      1
    );
  }
}
var xe = `precision highp float;

uniform sampler2D uTex;
uniform bool uIsOrange;
uniform bool uIsYellow;
uniform float uOpacity;

varying vec2 vUv;

const vec3 colorOrange = vec3(255. / 255., 144. / 255., 25. / 255.);
const vec3 colorYellow = vec3(200. / 255., 206. / 255., 30. / 255.);

void main() {
  

  
  vec4 color = texture2D(uTex, vUv);
  if (color.a == 0.) {
    discard;
  }

  color.rgb = uIsOrange ? colorOrange : uIsYellow ? colorYellow : color.rgb;

  color.a *= uOpacity;

  gl_FragColor = color;
  
}`;
const g = {
    src: "/_astro/b-body_light_01.6e84b179.png",
    width: 1187,
    height: 222,
    format: "png"
  },
  Ie = new I(0, 1, 0),
  Se = new I(1, 0, 0),
  Re = 4,
  we = new v(g.width, g.height),
  _e = U(g.src);
class be extends x {
  constructor({
    index: e = 0,
    color: n = "green",
    isForward: s = !1,
    speedBase: t = 1,
    speed: a = 8,
    radius: r = 100,
    scale: d = 0.8,
    theta: P = 1,
    phi: S = 2,
    opacity: p = 1
  } = {}) {
    const f = T({
        uTex: _e,
        uIsOrange: n === "orange",
        uIsYellow: n === "yellow",
        uOpacity: p
      }),
      R = new _({
        uniforms: f,
        vertexShader: b,
        fragmentShader: xe,
        transparent: !0
      });
    super(we, R),
      _defineProperty(this, "_positionInitial", new I()),
      _defineProperty(this, "_quaternionInitial", new E()),
      _defineProperty(this, "_quaternionPhi", new E()),
      _defineProperty(this, "_speed", 0),
      (this._color = n),
      (this._isForward = s),
      (this._direction = this._isForward ? -1 : 1),
      this._setMaxZ(),
      (this.position.z = this._maxZ * (h.seededRandom() - 0.5) * 10),
      this._quaternionInitial.setFromAxisAngle(Ie, Math.PI * 0.5),
      (this.params = {
        speedBase: t,
        speed: a,
        radius: r,
        scale: d,
        theta: P,
        phi: S
      }),
      this._updatePosition(!0),
      this._setSpeedBase();
  }
  _setMaxZ() {
    this._maxZ = o.cameraIntro.position.z * Re;
  }
  _setSpeedBase(e = this.params.speedBase) {
    (this.params.speedBase = e), (this._speed = e + this.params.speed);
  }
  _updatePosition(e = !1) {
    const { radius: n, theta: s, phi: t } = this.params,
      a = e ? this.position.z : -this._maxZ * this._direction;
    this._positionInitial.set(
      n * Math.sin(s) * Math.cos(t),
      n * Math.sin(s) * Math.sin(t),
      n * Math.cos(s)
    ),
      this.position.copy(this._positionInitial),
      (this.position.z = a),
      this.quaternion.copy(this._quaternionInitial),
      this._quaternionPhi.setFromAxisAngle(Se, -t),
      this.quaternion.multiply(this._quaternionPhi);
  }
  _resetPosition() {
    (this.params.phi = h.randFloat(-Math.PI, Math.PI)), this._updatePosition();
  }
  tick(e, n) {
    (this.position.z += n * this._speed * this._direction),
      this.position.z >= this._maxZ
        ? this._resetPosition()
        : this.position.z <= -this._maxZ && this._resetPosition();
  }
  resize() {
    const e = he();
    this.scale.setScalar(e * this.params.scale),
      (this.scale.x *= this._isForward ? 1 : 0.5),
      (this.scale.y = this._isForward ? 0.25 : 0.7);
  }
}
var Oe = `precision highp float;

uniform sampler2D uTex;
uniform vec2 uResolutionObject;
uniform vec2 uResolutionImage;
uniform sampler2D uLightTex;
uniform vec2 uResolutionLightImage;
uniform float uTime;

uniform float pSpeedMove;
uniform float pTubeBrightness;
uniform float pTubeInterval;
uniform float pTubeOffset;
uniform float pLightScale;
uniform float pLightWidth;
uniform vec2 pLightPosition;
uniform float pLightRandomTime;
uniform float pLightRandomStrength;
uniform float pLightRandomAngle;
uniform float pLightRandomScale;
uniform float pLightRandomOpacity;
uniform vec2 pLightRandomSize;
uniform float pHoleScale;
uniform float pGoNextProgress;
uniform bool uIsWindows;

varying vec2 vUv;

const float PI = 3.1415926;
const float PI2 = 6.2831853;
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
vec2 getUvPolar(vec2 uv) {
  vec2 uvPolar = vec2(0.5) - uv;
  float radius = length(uvPolar) * 2.;
  float angle = atan(uvPolar.y, uvPolar.x);
  return vec2(radius, angle / (PI * 2.));
}
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
highp float random(vec2 co)
{
  highp float a = 12.9898;
  highp float b = 78.233;
  highp float c = 43758.5453;
  highp float dt= dot(co.xy ,vec2(a,b));
  highp float sn= mod(dt,3.14);
  return fract(sin(sn) * c);
}

const float pFov = 0.4;
const float pFovMin = 0.01;

const float pImageScale = 1. / 0.1; 

const float pSpeedRotate = 15.;
const float pInterval = 1.5;
const float pThickness = 0.005;
const float pStrength = 0.07;
const float pFocus = 0.01;

const vec3 colorYellow = vec3(200. / 255., 206. / 255., 30. / 255.);

float drawRay(vec2 uv, float brightness, float speed, float offset, float rnd) {
  float time = uTime * speed;
  return step(0.9, (sin(fract(uv.y * abs(cos(time * rnd * 2. + offset)) + rnd + time * abs(sin(time + offset))) * PI * 6. / rnd) + 1.) * 0.5) * max(1. - uv.x * 2.2, 0.) * brightness;
}

vec3 drawLight(vec3 color, float angle) {
  float randomValue = random(vec2(angle));
  float randomBase = random(vec2(angle / (PI * 2.), sin(uTime * 0.00001 * pLightRandomTime)));
  float randomMoveValue = (randomBase - 0.5) * 0.01 * pLightRandomStrength;
  float positiveRandomValue = randomBase;
  float sinRandomValue = mix(0.5, 1., sin(uTime * 0.1 * pLightRandomTime * mix(0.99, 1., randomValue)) * 0.5 + 0.5);

  vec2 lightUv = vUv;
  lightUv = rotate(lightUv, angle + sinRandomValue * pLightRandomAngle * mix(0.95, 1., randomValue), vec2(0.));
  lightUv = getZoomedUv(lightUv, pLightScale * mix(1., 3., pGoNextProgress) + randomMoveValue * pLightRandomScale, pLightPosition * mix(vec2(1.), vec2(1., 3.), pGoNextProgress));
  float scaleX = randomMoveValue * pLightRandomSize.x + mix(0., 0.5, randomValue);
  lightUv.x = lightUv.x / (1. + scaleX) + scaleX;
  lightUv.x = min(max(lightUv.x, 0.), 1.);
  lightUv.y /= pLightWidth + randomMoveValue * pLightRandomSize.y;
  
  vec4 lightColor = texture2DInnerRange(uLightTex, lightUv);
  lightColor.rgb = colorYellow;
  lightColor.a *= pow(max(1. - lightUv.x, 0.), 0.8) * (1. - positiveRandomValue * (1. - pLightRandomOpacity));
  
  lightColor.a = min(max(lightColor.a, 0.), 1.);
  vec3 c = mix(color.rgb, lightColor.rgb, lightColor.a);
  c = min(max(c, 0.), 1.);
  return c;
}

float drawLine(vec2 uv, float offsetAngle, float offsetR) {
  uv.y = fract(uv.y + offsetAngle);
  float line = smoothstep(pThickness, 0., length((uv.x - offsetR) * pInterval));
  float focus = 1. - pow(abs(uv.y), pStrength);
  float total = line * focus + focus * pFocus;
  return smoothstep(0.01, 0.2, total);
}

void main() {
  vec2 uv = vUv;
  uv = fitCover(uv, uResolutionImage, uResolutionObject);
  uv = getUvPolar(uv);
  vec2 uvPolar = uv;

  uv.x /= pFovMin + uv.x * pFov; 

  float move = uTime * pSpeedMove;

  
  vec2 uvImage = uv;
  uvImage.x += move; 
  uvImage = uvImage * pImageScale; 
  uvImage = fract(uvImage);

  
  vec4 color = texture2D(uTex, uvImage);
  color.rgb *= max(pow(sin(uv.x * pTubeInterval + pTubeOffset), 10.), 0.) * pTubeBrightness;
  color.rgb = pow(color.rgb, vec3(2.));

  
  color.rgb += uIsWindows ? 0. : drawRay(uvPolar, 0.1, 0.5, 0., 3.);
  
  color.rgb += uIsWindows ? 0. : drawRay(uvPolar, 0.15, -0.2, 5., 1.5);
  
  color.rgb += uIsWindows ? 0. : drawRay(uvPolar, 0.18, 0.05, -5., 0.2);
  

  
  color.rgb = drawLight(color.rgb, 0.);
  color.rgb = drawLight(color.rgb, PI * 0.33);
  color.rgb = drawLight(color.rgb, PI * 0.66);
  color.rgb = drawLight(color.rgb, PI * 1.);
  color.rgb = drawLight(color.rgb, PI * 1.33);
  color.rgb = drawLight(color.rgb, PI * 1.66);

  float hole = mix(0.001, 0.05, pow(pHoleScale, 10.)) * mix(0.5, 1., sin(uTime) * 0.5 + 0.5) / length(uvPolar.x);
  hole = smoothstep(0., 1., hole);
  color = mix(color, vec4(colorYellow, 1.), hole);

  
  vec2 uvLine = uv;
  uvLine.x += move; 
  uvLine.y += uTime * -pSpeedRotate; 
  
  uvLine = fract(uvLine);

  float line = 0.;
  line += drawLine(uvLine, 0., 1.);
  line += drawLine(uvLine, 0.3, 0.7);
  line += drawLine(uvLine, 0.6, 0.5);
  line += drawLine(uvLine, 0.9, 0.2);
  line = min(line, 1.);

  color.rgb += vec3(line) * THEME_COLOR;

  color = min(max(color, 0.), 1.);

  gl_FragColor = color;
  
  
  
  
  
}`;
const F = {
    src: "/_astro/tube.41c5875b.jpg",
    width: 239,
    height: 275,
    format: "jpg"
  },
  Pe = U(F.src),
  Le = $(g),
  Ne = new v(),
  K = T({
    uTex: Pe,
    uResolutionObject: new u(2e3 * 2 * Math.PI, 1e3),
    uResolutionImage: new u(F.width, F.height),
    uLightTex: Le,
    uResolutionLightImage: new u(g.width, g.height),
    uTime: 0,
    pSpeedMove: 5,
    pTubeBrightness: 0.7,
    pTubeInterval: 4.3,
    pTubeOffset: 0.7,
    pLightScale: 0.05,
    pLightWidth: 0.28,
    pLightPosition: new u(-0.02, -0.02),
    pLightRandomTime: 40,
    pLightRandomStrength: 0.05,
    pLightRandomAngle: 2.3,
    pLightRandomScale: 1.1,
    pLightRandomOpacity: 0.86,
    pLightRandomSize: new u(800, 10),
    pHoleScale: 0,
    pGoNextProgress: 0,
    uIsWindows: ue
  }),
  ye = new _({
    uniforms: K,
    vertexShader: b,
    fragmentShader: Oe
  });
class De extends x {
  constructor({ camera: e = {}, folder: n }) {
    super(Ne, ye),
      _defineProperty(this, "parentFolder", void 0),
      (this.camera = e),
      (this.uniforms = M(K)),
      (this.position.z = -3e3);
  }
  initPane() {}
  goNext() {
    this.changeSceneTween && this.changeSceneTween.kill(),
      (this.changeSceneTween = i.to(this.uniforms.pGoNextProgress, {
        value: 1,
        duration: 1,
        ease: "power3.in",
        onComplete: () => {
          this.changeSceneTween = null;
        }
      }));
  }
  backFromNext() {
    this.changeSceneTween && this.changeSceneTween.kill(),
      (this.changeSceneTween = i.to(this.uniforms.pGoNextProgress, {
        value: 0,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          this.changeSceneTween = null;
        }
      }));
  }
  scroll(e) {
    i.scrub(this.uniforms.pHoleScale, {
      value: e
    });
  }
  progressGoNext(e) {
    i.scrub(this.uniforms.pGoNextProgress, {
      value: e
    });
  }
  tick(e) {
    this.uniforms.uTime.value = e * -0.1;
  }
  resize(e, n) {
    const { camera: s } = this,
      t =
        (s.position.z - this.position.z) *
        Math.tan(((s.fov / 180) * Math.PI) / 2) *
        2,
      a = e / n;
    (this._width = t * Math.max(a, 1)),
      (this._height = t / Math.min(a, 1)),
      this.scale.set(this._width, this._height, 1),
      this.uniforms.uResolutionObject.value.set(this._width, this._height);
  }
}
var Ce = `precision highp float;

varying vec2 vUv;

uniform sampler2D uTexture;
uniform float uProgress;

void discardOutOfRangeUv(vec2 uv) {
  if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) discard;
}

#pragma glslify: export(discardOutOfRangeUv)

void main() {
  vec2 uv = vUv;

  
  
  discardOutOfRangeUv(uv);

  vec4 color = texture2D(uTexture, uv);
  color.rgb = vec3(1.);
  
  color.a *= uProgress;

  gl_FragColor = color;
  
}`,
  Ee = `precision highp float;

varying vec2 vUv;

uniform sampler2D tColor;
uniform float uProgress;
uniform bool uIsSp;

vec4 texture2DInnerRange(sampler2D t, vec2 uv) {
  return (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) ? vec4(0.) : texture2D(t, uv);
}

#pragma glslify: export(texture2DInnerRange)
float expoOut(float t) {
  return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t);
}

void main() {
  vec2 uv = vUv;
  uv += mix(
    uIsSp ? vec2(0., -0.02) : vec2(0., -0.04),
    uIsSp ? vec2(0., -0.15) : vec2(-0.27, -0.025),
    uProgress
  );
  vec4 color = (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) ? vec4(vec3(0.), 1.) : texture2D(tColor, uv);

  color.rgb = mix(
    color.rgb,
    vec3(0.),
    pow(
      min(
        length((uv - 0.5) * (uIsSp ? vec2(1.5, 2.) : vec2(2., 1.5))),
        1.
      ),
    1.) * expoOut(min(uProgress * 1.5, 1.))
  );

  
  

  gl_FragColor = color;
}`,
  Me = `varying vec2 vUv;

uniform sampler2D tColor;
uniform float uProgress;

const int samples = 15;
const int LOD = 2; 
const int sLOD = 1; 
const float sigma = float(samples) * 0.25;

float gaussian(vec2 i) {
  return exp(-0.5 * dot(i /= sigma, i)) / (6.28 * sigma * sigma);
}

vec4 blur(sampler2D sp, vec2 U, vec2 scale) {
  vec4 O = vec4(0.);
  int s = samples / sLOD;

  for (int i = 0; i < s * s; i++) {
    vec2 d = vec2(i % s, i / s) * float(sLOD) - float(samples) / 2.;
    O += gaussian(d) * texture2D(sp, U + scale * d, float(LOD));
  }

  return O.a > 0. ? O / O.a : O;
}

/* params */
const float pBlur = 30.;
const float pBrightness = 0.2;

/* main */
void main() {
  /* gaussian blur */
  vec2 blurScale = vec2(0.0002 * pBlur * uProgress);
  vec4 colorBlur = blur(tColor, vUv, blurScale);

  gl_FragColor = colorBlur;

  /* 明度 */
  gl_FragColor.rgb *= mix(1., pBrightness, uProgress);

  
}`;
const m = {
    camera: {
      fov: 130,
      positionZ: 1e3
    },
    splash: {
      scale: 1
    },
    flash: {
      speed: 4,
      radius: 1200
    },
    title: {
      position: new I(Z.isSp ? 4.11 : 7, Z.isSp ? 15.94 : 39, 0)
    },
    stop: !1
  },
  j = 3;
class Ae extends Q {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "scene", new G());
    _defineProperty(this, "scene2D", new G());
    _defineProperty(this, "camera", void 0);
    _defineProperty(this, "camera2D", void 0);
    _defineProperty(this, "mesh", void 0);
    _defineProperty(this, "splashGroup", void 0);
    _defineProperty(this, "splashes", []);
    _defineProperty(this, "flashes", []);
    _defineProperty(this, "params", m);
    _defineProperty(this, "folder", void 0);
    _defineProperty(this, "changeSceneTween", void 0);
    _defineProperty(this, "speedTween", void 0);
    _defineProperty(this, "tube", void 0);
    _defineProperty(this, "speed", 1);
    _defineProperty(this, "position", 0);
    _defineProperty(this, "isRunTransition", !1);
    _defineProperty(this, "isRunTitle", !1);
    _defineProperty(this, "isRunSlide", !1);
    _defineProperty(this, "isRunText", !1);
    _defineProperty(this, "isRunGoNext", !1);
    _defineProperty(this, "isTransitionedNext", !1);
    _defineProperty(this, "isTransitionedSlide", !1);
  }
  onInit() {
    (this.isLowerPage = this.option.isLowerPage),
      o.enablePane &&
        ((this.folder = o.folderIntro =
          o.pane.addFolder({
            title: "Intro",
            expanded: !1
          })),
        this.folder.addInput(this.params, "stop")),
      this.initScene(),
      this.initCamera(),
      this.initTube(),
      this.initFlash(),
      this.isLowerPage || this.initTitle(),
      this.initPostprocessing(),
      this.on("showIntroCharging", () => {}),
      this.on("hideIntroCharging", () => {});
  }
  initScene() {}
  initCamera() {
    (this.camera = o.cameraIntro =
      new J(
        m.camera.fov,
        this.option.camera.aspect,
        this.option.camera.near,
        m.camera.positionZ + g.width * j
      )),
      this.camera.position.setZ(m.camera.positionZ),
      (this.camera2D = new A());
  }
  initSplash() {
    const e = (this.splashGroup = new z());
    this.scene.add(e), e.scale.setScalar(this.params.splash.scale);
    for (let n = 0; n < 3; n = (n + 1) | 0) {
      const s = h.seededRandom(),
        t = new Te({
          index: n,
          speed: 5 + s * h.randFloat(15, 20),
          radius: 400 + s * 1e3,
          scale: s * 5
        });
      e.add(t), this.splashes.push(t);
    }
  }
  initFlash() {
    const e = (this.flashGroup = new z());
    this.scene.add(e);
    const { speed: n, radius: s } = this.params.flash,
      t = (a = "green") => {
        const r = a !== "green",
          d = r ? 14 : 160,
          P = n * 2,
          S = r ? 0.7 : 1;
        for (let p = 0; p < d; p = (p + 1) | 0) {
          const f = h.seededRandom(),
            R = new be({
              index: p,
              color: this.option.isNight ? "green" : a,
              isForward: r,
              speedBase: P,
              speed: (1 - f) * 3,
              radius: (r ? 0.7 : 1) * s + h.randFloat(-s * 0.5, s * 0.5),
              scale: f * S * j,
              theta: Math.PI * (r ? h.randFloat(-0.5, -0.02) : -0.7),
              phi: h.randFloat(-Math.PI, Math.PI),
              opacity: r
                ? 1
                : ge(0.2, 1, f * S) * (this.option.isNight ? 0.3 : 1)
            });
          e.add(R), this.flashes.push(R);
        }
      };
    t(), t("orange"), t("yellow");
  }
  initTube() {
    const e = (this.tube = new De({
      camera: this.camera,
      folder: this.folder
    }));
    this.scene.add(e);
  }
  initTitle() {
    const e = (this.textures.Title = $(w, {})),
      n = T({
        uTexture: e,
        uProgress: 0
      });
    this.uniformsTitle = M(n);
    const s = (this.meshTitle = new x(
      new v(1, 1),
      new _({
        uniforms: n,
        vertexShader: b,
        fragmentShader: Ce,
        transparent: !0
      })
    ));
    s.position.copy(m.title.position),
      this.scene2D.add(s),
      this.on("showIntroTitle", () => {
        this.meshTitle.visible = !0;
      }),
      this.on("hideIntroTitle", () => {
        this.meshTitle.visible = !1;
      });
  }
  initPostprocessing() {
    const e = this.option.width * this.option.pixelRatio,
      n = this.option.height * this.option.pixelRatio,
      s = (this.postprocessingScene = new ee()),
      t = (this.postprocessingCamera = new A());
    s.add(t),
      (this.renderTarget = this.renderTargets.Postprocessing =
        new te(e, n, {
          type: ne
        }));
    const a = T({
        tColor: this.renderTarget.texture,
        uProgress: 0,
        uIsSp: this.isSp
      }),
      r = new se({
        uniforms: a,
        vertexShader: ie,
        fragmentShader: this.isLowerPage ? Me : Ee
      });
    this.uniforms = M(a);
    const d = (this.meshes.Postprocessing = new x(new v(e * 1.1, n * 1.1), r));
    s.add(d);
  }
  slide() {
    this.changeSceneTween && this.changeSceneTween.kill(),
      (this.changeSceneTween = i.to(this.uniforms.uProgress, {
        value: 1,
        duration: 1.4,
        ease: "medium",
        onComplete: () => {
          this.changeSceneTween = null;
        }
      }));
  }
  resetSlide() {
    this.changeSceneTween && this.changeSceneTween.kill(),
      (this.changeSceneTween = i.to(this.uniforms.uProgress, {
        value: 0,
        duration: 0.9,
        ease: "medium",
        onComplete: () => {
          this.changeSceneTween = null;
        }
      }));
  }
  goNext() {
    this.tube.goNext(),
      this.speedTween && this.speedTween.kill(),
      (this.speedTween = i.to(this, {
        speed: 2,
        duration: 1,
        ease: "power3.in",
        onComplete: () => {
          this.speedTween = null;
        }
      }));
  }
  backFromNext() {
    this.tube.backFromNext(),
      this.speedTween && this.speedTween.kill(),
      (this.speedTween = i.to(this, {
        speed: 1,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          this.speedTween = null;
        }
      }));
  }
  blur(e) {
    this.uniforms.uProgress.value = e;
  }
  resize(e, n, s) {
    if (
      ((this.camera.aspect = this.option.camera.aspect),
      this.camera.updateProjectionMatrix(),
      this.camera2D.resize(e, n),
      this.postprocessingCamera.resize(e * s, n * s),
      this.splashes.forEach((t) => {
        t.resize();
      }),
      this.flashes.forEach((t) => {
        t.resize();
      }),
      this.tube.resize(e, n),
      this.meshTitle)
    ) {
      this.meshTitle.position.copy(m.title.position),
        this.meshTitle.position.multiplyScalar(o.variableSizeRate);
      const t = (this.isSp ? 340 * 0.5 : w.width) * o.variableSizeRate,
        a = (t / w.width) * w.height;
      this.meshTitle.scale.set(t, a, 1);
    }
  }
  scroll(e, n, s) {
    if ((this.tube.scroll(e / L), e >= L)) {
      if (this.isRunGoNext) {
        this.isRunGoNext = !1;
        const t = 1;
        i.resetScrub(this.uniforms.uProgress, {
          value: 1 - t
        }),
          i.resetScrub(this, {
            speed: 1 + t
          }),
          this.tube.progressGoNext(t);
      }
      !this.isTransitionedNext &&
        o.nextScene === "Intro" &&
        o.scrollDirection === 1 &&
        ((this.isTransitionedNext = !0),
        l.emit("top:startTransition:charging"));
    } else if (e > N && e < L) {
      this.isRunGoNext ||
        ((this.isRunGoNext = !0),
        o.scrollDirection === -1
          ? (this.isTransitionedNext = !1)
          : this.isTransitionedNext ||
            ((this.isTransitionedNext = !0),
            l.emit("top:startTransition:charging")));
      const t = (e - N) / oe;
      i.scrub(this.uniforms.uProgress, {
        value: 1 - t
      }),
        i.scrub(this, {
          speed: 1 + t
        }),
        this.tube.progressGoNext(t);
    } else if (e <= N && this.isRunGoNext) {
      (this.isRunGoNext = !1),
        l.emit("top:startTransition:charging", !0),
        l.emit("changeScene", "Intro", {
          isBack: !0
        });
      const t = 0;
      i.resetScrub(this.uniforms.uProgress, {
        value: 1 - t
      }),
        i.resetScrub(this, {
          speed: 1 + t
        }),
        this.tube.progressGoNext(t);
    }
    if (e >= B)
      this.isRunText &&
        ((this.isRunText = !1), o.components.topIntro.scrollText(1 * k));
    else if (e > y && e < B) {
      this.isRunText || (this.isRunText = !0);
      const t = (e - y) / ae;
      o.components.topIntro.scrollText(t * k);
    } else
      e <= y &&
        this.isRunText &&
        ((this.isRunText = !1), o.components.topIntro.scrollText(0));
    if (e >= V)
      this.isRunSlide &&
        ((this.isRunSlide = !1),
        i.resetScrub(this.uniforms.uProgress, {
          value: 1
        }),
        i.resetScrub(this.uniformsTitle.uProgress, {
          value: 0
        }),
        o.components.topIntro.fade(1),
        this.isTransitionedSlide || (this.isTransitionedSlide = !0));
    else if (D < e && e < V) {
      this.isRunSlide ||
        ((this.isRunSlide = !0),
        o.scrollDirection === -1
          ? this.isTransitionedSlide && (this.isTransitionedSlide = !1)
          : this.isTransitionedSlide || (this.isTransitionedSlide = !0));
      const t = (e - D) / re;
      i.scrub(this.uniforms.uProgress, {
        value: t
      }),
        i.scrub(this.uniformsTitle.uProgress, {
          value: Math.max(1 - t * 3, 0)
        }),
        o.components.topIntro.fade(ce(t, 0.3, 0.5, 0, 1));
    } else
      e <= D &&
        this.isRunSlide &&
        ((this.isRunSlide = !1),
        i.resetScrub(this.uniforms.uProgress, {
          value: 0
        }),
        i.resetScrub(this.uniformsTitle.uProgress, {
          value: 1
        }),
        o.components.topIntro.fade(0),
        this.isTransitionedSlide && (this.isTransitionedSlide = !1));
    if (e >= H)
      (this.isRunTitle || s) &&
        ((this.isRunTitle = !1),
        i.resetScrub(this.uniformsTitle.uProgress, {
          value: 1
        }));
    else if (C < e && e < H) {
      this.isRunTitle ||
        ((this.isRunTitle = !0),
        o.scrollDirection === -1 && l.emit("top:startTransition:intro", !0));
      const t = (e - C) / le;
      i.scrub(this.uniformsTitle.uProgress, {
        value: t
      });
    } else
      e <= C &&
        this.isRunTitle &&
        ((this.isRunTitle = !1),
        i.resetScrub(this.uniformsTitle.uProgress, {
          value: 0
        }));
    e >= X
      ? this.isRunTransition &&
        ((this.isRunTransition = !1),
        l.emit("changeHeaderLocationCurrentIndex", q.indexOf("Intro")))
      : W < e && e < X
      ? this.isRunTransition ||
        ((this.isRunTransition = !0),
        (this.isTransitionedNext = !1),
        o.scrollDirection === -1 &&
          l.emit("changeHeaderLocationCurrentIndex", q.indexOf("Kv")))
      : e <= W &&
        this.isRunTransition &&
        ((this.isRunTransition = !1),
        l.emit("changeScene", "Kv", {
          isBack: !0
        }));
  }
  tick(e, n, s) {
    if (this.params.stop) return;
    const t = e * this.speed;
    this.splashes.forEach((a) => {
      a.tick(t);
    }),
      this.flashes.forEach((a) => {
        a.tick(t, n);
      }),
      this.tube.tick(t);
  }
  render(e = null) {
    this.option.renderer.setRenderTarget(this.renderTarget),
      this.option.renderer.clear(),
      this.option.renderer.render(this.scene, this.camera),
      this.option.renderer.setRenderTarget(e),
      this.option.renderer.render(
        this.postprocessingScene,
        this.postprocessingCamera
      ),
      this.option.renderer.render(this.scene2D, this.camera2D);
  }
  show(e = !1) {
    e || this.tube.progressGoNext(0);
  }
}
export { Ae as I, w as i, Ce as t };
