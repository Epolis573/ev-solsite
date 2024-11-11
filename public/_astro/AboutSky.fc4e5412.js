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
  C as x,
  d,
  E as I,
  G as z,
  y as b,
  $ as A,
  B as F,
  e as j,
  D as k,
  F as U,
  aF as M,
  c as w,
  V as g,
  a as R,
  i as S,
  P as y,
  R as P,
  t as _,
  l as B,
  I as Y,
  b as H,
  a0 as V,
  z as Z,
  Y as K,
  m as X,
  b1 as D,
  b2 as O,
  ae as N,
  af as L,
  b3 as W
} from "./constants.e6c90e33.js";
import {
  m as T,
  s as r,
  g as $,
  f as q,
  e as v,
  h as E,
  i as J
} from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
import { B as Q, g as ee, e as te } from "./easing.ca1274dc.js";
import { a as ie, i as C } from "./image.63ed914f.js";
const oe = {
    src: "/_astro/ground.e0e52042.jpg",
    width: 1600,
    height: 1600,
    format: "jpg"
  },
  ne = {
    src: "/_astro/ground.f3cfbb09.jpg",
    width: 1200,
    height: 1200,
    format: "jpg"
  },
  f = {
    src: "/_astro/b-body_soden_s.686247c4.png",
    width: 72,
    height: 72,
    format: "png"
  },
  se = {
    src: "/_astro/ground_night.81cc3c62.jpg",
    width: 1600,
    height: 1599,
    format: "jpg"
  },
  ae = {
    src: "/_astro/ground_night.263d89a9.jpg",
    width: 1200,
    height: 1200,
    format: "jpg"
  },
  re = {
    src: "/_astro/b-body_soden_s_night.3edf0a9f.png",
    width: 72,
    height: 72,
    format: "png"
  };
var G = `precision highp float;

varying vec2 vUv;

uniform sampler2D uTexture;
uniform vec2 uResolutionObject;
uniform vec2 uResolutionImage;
uniform float uScale;
uniform float uRotation;
uniform float uCurve;
uniform float uSpeed;

uniform float uOpacity;
uniform float uTime;

const float PI = 3.1415926;
const float PI2 = 6.2831853;
const float GAMMA_FACTOR = 2.2;
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
vec2 rotate(vec2 uv, float rad, vec2 offset) {
  uv += offset;
  uv -= 0.5;
  uv *= mat2(cos(rad),sin(rad),-sin(rad),cos(rad));
  uv += 0.5;
  uv -= offset;
  return uv;
}
vec4 texture2DInnerRange(sampler2D t, vec2 uv) {
  return (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) ? vec4(0.) : texture2D(t, uv);
}

#pragma glslify: export(texture2DInnerRange)
vec3 GammaToLinear(vec3 color) {
  return pow(color.rgb, vec3(GAMMA_FACTOR));
}

void main() {
  vec2 uv = vUv;

  uv -= 0.5;
  uv.x *= 1. + (0.5 - length(uv)) * uCurve;
  uv += 0.5;

  uv = getZoomedUv(uv, uScale, vec2(0.));
  uv = rotate(uv, -uRotation, vec2(0.));
  uv.y = fract(uv.y + uTime * (uRotation > PI * 0.5 && uRotation < PI * 1.5 ? -1. : 1.) * uSpeed);
  uv = fitCover(uv, uResolutionImage, uResolutionObject);
  uv = repeatUv(uv);

  vec4 color = texture2DInnerRange(uTexture, uv);

  color.rgb = GammaToLinear(color.rgb);

  

  float opacity = mix(1., uOpacity, smoothstep(0., 1., distance(color.rgb, NIGHT_MODE_COLOR_4)));
  color.a *= opacity;

  gl_FragColor = color;
  
}`;
const p = T.isSp ? "sp" : "pc",
  t = {
    backgroundColor: new x(14205382),
    camera: {
      fovTransitionIn: 26,
      fov: 46,
      positionTransitionIn: new d(0, 20, 0),
      position: new d(0, 40, 0),
      rotation: new I(-Math.PI * 0.5, 0, 0.4),
      far: 888,
      lookAt: new d(0, 0, 0)
    },
    directionalLight: {
      color: new x(1, 1, 1),
      intensity: 2,
      position: new d(0.35, 100, 10)
    },
    ambientLight: {
      color: new x(1, 1, 1),
      intensity: 2
    },
    ground: {
      positionYRate: 0.9,
      size: new d(1600, 1600, 1),
      scale: {
        pc: 0.8,
        sp: 0.8
      },
      rotation: 0,
      curve: 0.1,
      speed: 2,
      opacity: 1,
      opacityNight: 0.4
    },
    icon: {
      scale: 0.05,
      maxPositionX: T.isSp ? 10 : 24,
      maxPositionZ: T.isSp ? 20 : 24,
      rotation: 0.45,
      speed: 0.85
    },
    bird: [
      {
        position: {
          pc: new d(11 - 3, 26, -1),
          sp: new d(4.8, 26, 1.1)
        },
        rotation: new I(-0.1, -0.3, -0.6),
        scale: 2.2,
        speed: 7,
        speedFlap: 1.5,
        moveDistance: 1,
        rotationDistance: 0.05,
        slideDistance: 0.7
      },
      {
        position: {
          pc: new d(-2.4 - 3, 32, -1),
          sp: new d(-2.4 - 3, 32, -2.25)
        },
        rotation: new I(0, 0, 0),
        scale: 2.4,
        speed: 3,
        speedFlap: 0.7,
        moveDistance: 0.5,
        rotationDistance: 0.02,
        slideDistance: 0.3
      }
    ],
    cloud: {
      position: {
        pc: new d(-54 - 7, -20, 0),
        sp: new d(-26, -20, 0)
      },
      scale: 0.5,
      rotation: {
        pc: 3.5,
        sp: 3.86
      },
      curve: 0.3,
      speed: 2
    },
    speed: 0.007,
    stop: !1
  },
  ce = {
    maxblur: 5.4,
    maxblurNight: 0,
    maxblurFull: J ? 9 : 5.4,
    mNear: 0,
    mFar: t.camera.far * t.ground.positionYRate,
    bokehNear: 0,
    blurFocus: 1.7,
    blurExponent: 2,
    uIsNightModeLogo: !0,
    nightModeThreshold4: 0.45,
    brightness: 0.7,
    noiseProgress: 1
  };
class me extends z {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "scene", new b());
    _defineProperty(this, "basicScene", new b());
    _defineProperty(this, "sceneText", new b());
    _defineProperty(this, "camera", void 0);
    _defineProperty(this, "lookAt", t.camera.lookAt);
    _defineProperty(this, "matrixCamera", new A());
    _defineProperty(this, "cameraPosition", t.camera.position);
    _defineProperty(this, "cameraRotationZ", t.camera.rotation.z);
    _defineProperty(this, "folder", void 0);
    _defineProperty(this, "birds", []);
    _defineProperty(this, "postprocessing", {
      composer: F,
      bokeh: Q
    });
    _defineProperty(this, "icons", []);
    _defineProperty(this, "isRunTransition", !1);
    _defineProperty(this, "isRunText", !1);
    _defineProperty(this, "isShowIcon", !1);
    _defineProperty(this, "isTransitionedNext", !1);
    _defineProperty(this, "isLowerPage", !1);
    _defineProperty(this, "isStartAnimation", !1);
  }
  onInit() {
    (this.isLowerPage = this.option.isLowerPage),
      r.enablePane &&
        (this.folder = r.pane.addFolder({
          title: "AboutSky",
          expanded: !1
        })),
      this.initScene(),
      this.initCamera(),
      this.initLight(),
      this.initGround(),
      this.initIcon(),
      this.initCloud(),
      this.initBird(),
      this.initPostprocessing(),
      this.blur(0),
      r.enablePane &&
        this.folder.addInput(t, "speed", {
          min: 0
        });
  }
  initScene() {}
  initCamera() {
    if (
      ((this.camera = new j(
        t.camera.fov,
        this.option.camera.aspect,
        this.option.camera.near,
        t.camera.far
      )),
      this.updateCameraPosition(),
      r.enablePane)
    ) {
      const e = this.folder.addFolder({
        title: "camera",
        expanded: !1
      });
      e
        .addInput(t.camera, "position", {
          x: {
            step: 0.01
          },
          y: {
            step: 0.01
          },
          z: {
            step: 0.01
          }
        })
        .on("change", () => {
          this.updateCameraPosition();
        }),
        e
          .addInput(t.camera, "rotation", {
            x: {
              step: 0.01
            },
            y: {
              step: 0.01
            },
            z: {
              step: 0.01
            }
          })
          .on("change", () => {
            this.updateCameraPosition();
          }),
        e
          .addInput(this.camera, "fov", {
            min: 5,
            max: 179
          })
          .on("change", () => {
            this.camera.updateProjectionMatrix();
          }),
        e
          .addInput(this.camera, "far", {
            min: 0
          })
          .on("change", () => {
            this.camera.updateProjectionMatrix();
          }),
        e.addInput(this, "lookAt").on("change", () => {
          this.updateCameraPosition();
        });
    }
  }
  updateCameraPosition() {
    this.camera.position.set(0, 0, 0),
      this.camera.rotation.set(0, 0, 0),
      this.matrixCamera
        .makeTranslation(
          t.camera.position.x,
          t.camera.position.y,
          t.camera.position.z
        )
        .multiply(new A().makeRotationFromEuler(t.camera.rotation)),
      this.camera.applyMatrix4(this.matrixCamera);
  }
  initLight() {
    {
      const e = new k(t.directionalLight.color, t.directionalLight.intensity);
      e.position.copy(t.directionalLight.position),
        this.scene.add(e),
        this.basicScene.add(e.clone());
    }
    {
      const e = new U(16777215, 16777215, 1);
      e.position.set(0, 50, 0),
        this.scene.add(e),
        this.basicScene.add(e.clone());
    }
  }
  initGround() {
    const e = this.option.isNight ? (this.isSp ? ae : se) : this.isSp ? ne : oe,
      o = (this.textures.Ground = M(e.src)),
      i = w({
        uTexture: o,
        uResolutionObject: new g(t.ground.size.x, t.ground.size.y),
        uResolutionImage: new g(e.width, e.height),
        uScale: t.ground.scale[p],
        uRotation: t.ground.rotation,
        uCurve: t.ground.curve,
        uSpeed: t.ground.speed,
        uOpacity: t.ground[this.option.isNight ? "opacityNight" : "opacity"],
        uTime: 0
      });
    this.uniformsGround = R(i);
    const s = (this.meshGround = new S(
      new y(1, 1),
      new P({
        uniforms: i,
        vertexShader: _,
        fragmentShader: G
      })
    ));
    if (
      (s.position.setY(-(t.camera.far * t.ground.positionYRate)),
      s.rotation.set(Math.PI * -0.5, 0, 0),
      s.scale.copy(t.ground.size),
      this.scene.add(s),
      r.enablePane)
    ) {
      const n = this.folder.addFolder({
        title: "地面"
      });
      n.addInput(s, "visible"),
        n.addInput(s, "position"),
        n.addInput(s, "rotation"),
        n
          .addInput(t.ground, "size", {
            min: 0
          })
          .on("change", () => {
            s.scale.copy(t.ground.size);
          }),
        n.addInput(this.uniformsGround.uScale, "value", {
          label: "scale",
          min: 0,
          max: 2
        }),
        n.addInput(this.uniformsGround.uRotation, "value", {
          label: "傾き",
          min: 0,
          max: Math.PI * 2,
          step: 0.01
        }),
        n.addInput(this.uniformsGround.uCurve, "value", {
          label: "湾曲",
          min: 0,
          max: 3
        }),
        n.addInput(this.uniformsGround.uSpeed, "value", {
          label: "speed",
          min: 0,
          max: 10
        }),
        n.addInput(this.uniformsGround.uOpacity, "value", {
          label: "opacity",
          min: 0,
          max: 1
        });
    }
  }
  initIcon() {
    let e;
    r.enablePane &&
      (e = this.folder.addFolder({
        title: "アイコン",
        expanded: !1
      }));
    const o = this.option.isNight ? re : f,
      i = (this.textures.Icon = B(o, {})),
      s = T.isSp ? 8 : 12;
    for (let n = 0; n < s; n = (n + 1) | 0)
      this.initIconMesh(
        n,
        i,
        (Math.random() * 2 - 1) * t.icon.maxPositionX,
        (Math.random() * 2 - 1) * t.icon.maxPositionZ,
        e
      );
  }
  initIconMesh(e, o, i, s, n) {
    const u = t.icon,
      c = w({
        uTexture: o,
        uProgress: 0
      }),
      l = R(c),
      a = new S(
        new y(1, 1),
        new P({
          uniforms: c,
          vertexShader: _,
          fragmentShader: ie,
          transparent: !0,
          side: Y
        })
      );
    a.position.set(i, 0, s),
      a.rotation.set(-Math.PI * 0.5, 0, t.camera.rotation.z),
      a.scale.set(f.width * 0.5 * u.scale, f.height * 0.5 * u.scale, 1),
      (a.visible = !1);
    const h = this.scene;
    if (
      (this.isDisposed ? this.addDisposeTarget(h, a) : h.add(a),
      this.icons.push({
        mesh: a,
        uniforms: l
      }),
      r.enablePane)
    ) {
      const m = n.addFolder({
        title: `icon ${e}`,
        expanded: !1
      });
      m.addInput(a, "visible"),
        m.addInput(a, "position", {
          x: {
            step: 1
          },
          y: {
            step: 1
          },
          z: {
            step: 1
          }
        }),
        m.addInput(a, "rotation", {
          x: {
            step: 0.01
          },
          y: {
            step: 0.01
          },
          z: {
            step: 0.01
          }
        }),
        m
          .addInput(u, "scale", {
            min: 0,
            step: 0.01
          })
          .on("change", () => {
            a.scale.set(f.width * 0.5 * u.scale, f.height * 0.5 * u.scale, 1);
          });
    }
  }
  showIcon(e = !1) {
    this.isShowIcon ||
      ((this.isShowIcon = !0),
      this.icons.forEach((o, i) => {
        this.showIconIndividual(o, i, e);
      }));
  }
  hideIcon() {
    this.isShowIcon &&
      ((this.isShowIcon = !1),
      this.icons.forEach(({ mesh: e }, o) => {
        e.visible = !1;
      }));
  }
  showIconIndividual(e, o, i = !1) {
    const { mesh: s, uniforms: n } = e;
    if (s.visible) return;
    s.visible = !0;
    const u = i ? 0 : 3;
    $.timeline(
      {
        delay: i ? 0 : 1 + 0.1 * o
      },
      `AboutSky-icon-${o}`
    ).add([
      gsap.from(s.position, {
        y: "-=3",
        duration: u,
        ease: "elastic.out"
      }),
      gsap.from(s.rotation, {
        y: `-=${Math.PI * 1.5}`,
        duration: u * 0.5,
        ease: "quad.out"
      }),
      gsap.fromTo(
        n.uProgress,
        {
          value: 0
        },
        {
          value: 1,
          duration: u * 0.5,
          ease: "expo.out"
        }
      )
    ]);
  }
  initCloud() {
    const e = (this.textures.Cloud = M(C.src)),
      o = w({
        uTexture: e,
        uResolutionObject: new g(this.option.width, this.option.height),
        uResolutionImage: new g(C.width, C.height),
        uScale: t.cloud.scale,
        uRotation: t.cloud.rotation[p],
        uCurve: t.cloud.curve,
        uSpeed: t.cloud.speed,
        uTime: 0
      });
    this.uniformsCloud = R(o);
    const i = (this.meshCloud = new S(
      new y(1, 1),
      new P({
        uniforms: o,
        vertexShader: _,
        fragmentShader: G,
        transparent: !0
      })
    ));
    i.position.copy(t.cloud.position[p]),
      i.rotation.set(Math.PI * -0.5, 0, 0.43),
      this.scene.add(i);
  }
  initBird() {
    H("/gl/optimize/bird_v3.glb", {
      onLoad: (e, o) => {
        const i = o,
          { animations: s } = e;
        (i.name = "glTF"),
          t.bird.forEach((n, u) => {
            const c = V(i);
            c.scale.setScalar(n.scale);
            const l = new Z();
            l.add(c),
              l.position.copy(n.position[p]),
              l.rotation.copy(n.rotation),
              (l.rotation.y += Math.PI);
            const a = new K(c);
            s.forEach((h) => {
              a.clipAction(h).play();
            }),
              this.birds.push({
                model: c,
                group: l,
                mixer: a,
                param: n
              });
          });
      },
      isSkeleton: !0,
      isAddToLoadingWait: this.isLowerPage
    });
  }
  initPostprocessing() {
    const { width: e, height: o, pixelRatio: i } = this.option,
      s = ee({
        width: e,
        height: o,
        pixelRatio: i,
        camera: this.camera,
        folder: this.folder,
        effectController: ce,
        minNear: -t.camera.position.y,
        isNight: this.option.isNight
      });
    this.postprocessing = s;
  }
  makeTransitionIn(e) {
    const o = te["quint.out"](e);
    this.camera.position.set(
      ...X(t.camera.positionTransitionIn, t.camera.position, o)
    ),
      (this.camera.fov = q(t.camera.fovTransitionIn, t.camera.fov, o)),
      this.camera.updateProjectionMatrix();
  }
  blur(e) {
    this.postprocessing.bokehUniformsWithoutValue.maxblurFull.value = e;
  }
  resize(e, o, i) {
    (this.width = e),
      (this.height = o),
      (this.camera.aspect = e / o),
      this.camera.updateProjectionMatrix(),
      this.postprocessing.resize(e, o, i),
      this.meshCloud.scale.set(e, o, 1),
      this.uniformsCloud.uResolutionObject.value.set(e, o);
  }
  scroll(e, o) {
    if (e >= D) {
      if (this.isRunText) {
        this.isRunText = !1;
        const i = 1;
        r.components.topAbout.fadeText2(0),
          r.components.topAbout.scrollText2(i);
      }
      !this.isTransitionedNext &&
        r.nextScene === "AboutSky" &&
        r.scrollDirection === 1 &&
        ((this.isTransitionedNext = !0), v.emit("top:startTransition:news"));
    } else if (O < e && e < D) {
      this.isRunText ||
        ((this.isRunText = !0),
        r.scrollDirection === -1
          ? (this.isTransitionedNext = !1)
          : (r.components.topAbout.showContent2(), this.showIcon()));
      const i = (e - O) / W;
      r.components.topAbout.fadeText2(E(i, 0, 0.2, 0, 1) * E(i, 0.9, 1, 1, 0)),
        r.components.topAbout.scrollText2(i);
    } else if (e <= O && this.isRunText) {
      this.isRunText = !1;
      const i = 0;
      r.components.topAbout.fadeText2(i), r.components.topAbout.scrollText2(i);
    }
    e >= N
      ? this.isRunTransition && (this.isRunTransition = !1)
      : L < e && e < N
      ? this.isRunTransition ||
        ((this.isRunTransition = !0),
        (this.isTransitionedNext = !1),
        r.scrollDirection === -1 &&
          (v.emit("top:startTransition:aboutSky", !0),
          r.components.topAbout.fadeOutText2(),
          this.hideIcon()))
      : e <= L &&
        this.isRunTransition &&
        ((this.isRunTransition = !1),
        v.emit("top:startTransition:aboutSky", !0),
        v.emit("changeScene", "AboutBirdsEye", {
          isBack: !0
        }),
        r.scrollDirection === -1 && r.components.topAbout.hideContent2());
  }
  tick(e, o, i) {
    const s = e * t.speed,
      n = o * 0.001;
    (this.uniformsGround.uTime.value = s),
      this.icons.forEach((u) => {
        const { mesh: c } = u;
        (c.position.z += n * t.icon.speed),
          c.position.z > t.icon.maxPositionZ &&
            (c.position.z = -t.icon.maxPositionZ);
      }),
      (this.uniformsCloud.uTime.value = s),
      this.birds.forEach(({ model: u, group: c, mixer: l, param: a }) => {
        const h = Math.sin(a.scale + e * 0.5);
        this.isStartAnimation && l.update(n * a.speedFlap * (h * 0.5 + 0.5)),
          (c.position.z = a.position[p].z + h * -a.moveDistance),
          (c.position.x = a.position[p].x + h * -a.slideDistance),
          (c.rotation.y = a.rotation.y + Math.PI + h * -a.rotationDistance);
      });
  }
  render(e = null) {
    this.option.renderer.setRenderTarget(this.postprocessing.rtTextureColor),
      this.option.renderer.clear(),
      this.option.renderer.render(this.scene, this.camera),
      (this.scene.overrideMaterial = this.postprocessing.materialDepth),
      this.option.renderer.setRenderTarget(this.postprocessing.rtTextureDepth),
      this.option.renderer.clear(),
      this.option.renderer.render(this.scene, this.camera),
      (this.scene.overrideMaterial = null),
      this.option.renderer.setRenderTarget(e),
      this.option.renderer.render(
        this.postprocessing.scene,
        this.postprocessing.camera
      ),
      this.option.renderer.clearDepth(),
      this.option.renderer.render(this.sceneText, this.camera);
  }
  start(e = !1) {
    gsap.delayedCall(e || this.isLowerPage ? 0 : 0.1, () => {
      this.birds.forEach(({ group: o }, i) => {
        gsap.delayedCall((e || this.isLowerPage ? 0 : 0.1) * i, () => {
          this.isDisposed
            ? this.addDisposeTarget(this.scene, o)
            : this.scene.add(o);
        });
      });
    }),
      gsap.delayedCall(e || this.isLowerPage ? 0 : 0.4, () => {
        this.isStartAnimation = !0;
      }),
      e && this.showIcon(!0);
  }
}
export { me as A, oe as a, f as b, ae as c, se as d, re as e, ne as i };
