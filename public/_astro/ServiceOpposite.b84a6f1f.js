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
  m as g,
  s as h,
  j as V,
  c as j,
  V as ae,
  g as $,
  _ as oe,
  f as d,
  e as w
} from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
import {
  C as _,
  d as n,
  E as x,
  V as k,
  G as ne,
  y as B,
  z as U,
  B as re,
  l as b,
  e as ce,
  g as he,
  D as le,
  F as pe,
  c as C,
  a as W,
  i as R,
  P as E,
  R as y,
  t as O,
  b as K,
  I as J,
  Y as de,
  h as ue,
  m as z,
  aI as G,
  av as F,
  a9 as Q,
  aa as Z,
  aJ as ee,
  aK as te,
  aL as X,
  al as ie,
  at as Y,
  aM as N,
  aN as me,
  K as q,
  au as fe
} from "./constants.e6c90e33.js";
import { B as ge, g as Te, e as L } from "./easing.ca1274dc.js";
import { a as Se, s as Ie, i as xe } from "./spark.1d7c7a14.js";
import {
  c as ke,
  h as we,
  t as ve,
  b as Pe,
  i as ye,
  a as Oe
} from "./taillight.be3f79a0.js";
import { s as _e } from "./spark.83ebcaee.js";
import { n as H, S as be } from "./project.49f9dddf.js";
const Ce = {
    src: "/_astro/city_fukan.ca708e83.jpg",
    width: 2400,
    height: 670,
    format: "jpg"
  },
  D = {
    src: "/_astro/b-body_shyanai_hantai.a4f2aca3.png",
    width: 1600,
    height: 964,
    format: "png"
  };
var Re = `precision highp float;

varying vec2 vUv;

uniform sampler2D uTexture;
uniform float uProgress;

void main() {
  vec2 uv = vUv;

  vec4 color = texture2D(uTexture, uv);
  color.a *= uProgress;

  gl_FragColor = color;
  
}`,
  Ee = `precision highp float;

varying vec2 vUv;

uniform sampler2D uTexture;
uniform float uProgress;

void main() {
  vec2 uv = vUv;

  vec4 color = texture2D(uTexture, uv);

  color.a *= mix(
    
  0.,
    
  1.,
    
  smoothstep(0., 1., distance(color.rgb, vec3(0.))));

  color.a *= mix(
    
  0.2,
    
  1.,
    
  smoothstep(0., 1., distance(color.rgb, vec3(200. / 255.))));

  color.a *= uProgress;

  gl_FragColor = color;
  
  
}`;
const se = 0.1,
  T = g.isSp ? "sp" : "pc",
  t = {
    backgroundColor: new _(8618653),
    backgroundColorNight: new _(0),
    camera: {
      positionTransitionIn: {
        pc: new n(10, 1.8, 0.3),
        sp: new n(6.4 + 2, 1.8, 6.3)
      },
      position: {
        pc: new n(6.4, 1.8, 6.3),
        sp: new n(6.4 + 2, 1.8, 6.3)
      },
      positionTransitionOut: {
        pc: new n(6.4, 1.8, 0.3),
        sp: new n(6.4 + 2, 1.8, 6.3)
      },
      positionLowerPage: {
        pc: new n(6.4 + 3, 1.8 + 0.8, 6.3),
        sp: new n(6.4 + 3, 1.8 + 0.8, 6.3)
      },
      fovTransitionIn: 16,
      fov: 26,
      fovTransitionOut: 16,
      far: 100,
      lookAtTransitionIn: {
        pc: new n(72, -9.8, -180),
        sp: new n(48 + 12, -9.8, -150)
      },
      lookAt: {
        pc: new n(48, -9.8, -150),
        sp: new n(48 + 12, -9.8, -150)
      },
      lookAtTransitionOut: {
        pc: new n(72, -9.8, -150),
        sp: new n(48 + 12, -9.8, -150)
      },
      lookAtLowerPage: {
        pc: new n(48 - 8, -9.8 - 2.2, -150),
        sp: new n(48 - 8 + 20, -9.8 - 2.2, -150)
      },
      lookAtEnd: new n(18, -9.8, -150)
    },
    directionalLight: {
      color: new _(1, 1, 1),
      intensity: 2,
      position: new n(0.35, 100, 10)
    },
    ambientLight: {
      color: new _(1, 1, 1),
      intensity: 2
    },
    streetBackground: {
      position: new n(8.2, 3, -16),
      rotation: new x(0, 0, 0),
      size: new n(12, 7, 1),
      textureRotation: 2.66,
      rotationCenter: new k(0, 0),
      offset: new k(-0.25, 0.1),
      scale: 1,
      spread: 0.2,
      darkness: 0.66,
      darknessNight: 0.23,
      fadePosition: 0.2,
      fadeRate: 1.5,
      opacity: 1,
      opacityNight: 0,
      speed: 0,
      color: new _(0.55, 0.38, 0.31),
      colorNight: new _(0.28, 0.12, 0.06)
    },
    street: {
      position: new n(0, 0, 0),
      rotation: new x(0, 6.45, 0),
      model: {
        position: new n(0, 10.4, 0),
        rotation: new x(0, 0, 0)
      }
    },
    car: {
      individual: [
        {
          position: new n(23.7, 0, -11.5),
          rotation: new x(0, 0, 0)
        },
        {
          position: new n(13.4, 0, -11.5),
          rotation: new x(0, 0, 0)
        },
        {
          position: new n(18.5, 0, -11.5),
          positionEnd: new n(g.isSp ? 10 : 5.2, 0, 0.4),
          rotation: new x(0, 0, 0),
          rotationEnd: new x(0, -1.4, 0)
        }
      ],
      scale: 1.2,
      speed: 0.01,
      headlight: {
        position: new n(0, 0, 4.5),
        scale: new n(1, 1, 1),
        opacity: 0.6
      },
      taillight: {
        position: new n(0, 0, -2.8),
        scale: new n(1, 1, 1),
        opacity: 0.8
      }
    },
    icon: {
      pivot: 0.5,
      charging: {
        position: new n(
          g.isSp ? 10.72 + 0.8 : 10.72,
          g.isSp ? 1.81 - 0.2 : 1.81,
          -11
        ),
        rotation: new x(0, -0.3, 0),
        scale: 0.0038,
        isAnimation: !0,
        currentTime: 0
      },
      charging2: {
        position: new n(14.48, 1.92, -11),
        rotation: new x(0, -0.3, 0),
        scale: 0.0038,
        isAnimation: !0,
        currentTime: 1.5
      }
    },
    spark: {
      speed: 1,
      interval: 20,
      positionY: 0,
      scale: new k(0.1, 1),
      rotation: 0.5,
      darkness: 1,
      bloom: 0.5,
      opacity: 1
    },
    title: {
      position: new n(0, 38, 0)
    },
    speed: 0.01,
    stop: !1
  },
  Ne = {
    maxblur: 2.4,
    maxblurNight: 0,
    blurFocus: 2,
    blurExponent: 2,
    blurCenter: new k(0.13, 0.02),
    mNear: 0.1,
    mFar: 54,
    bokehNear: 0.16,
    bokehFarBack: 3.5,
    bokehFarFront: 3.5,
    brightness: 0.8,
    noiseProgress: 1,
    nightModeThreshold4: 0.52,
    monochromeMax: 0.4,
    uRay: [
      {
        center: new k(0.41, g.isSp ? 1.5 : 1.3),
        rotation: 0.057,
        speed: 0.1,
        offset: 5,
        width: g.isSp ? 0.066 : 0.059,
        edge: 0.01,
        rayDistance: g.isSp ? 4.8 : 3.6,
        opacity: g.isSp ? 0.6 : 0.8
      },
      {
        center: new k(0.53, g.isSp ? 1.5 : 1.3),
        rotation: 0.057,
        speed: 0.5,
        offset: 0.023,
        width: 0.037,
        edge: 0.042,
        rayDistance: g.isSp ? 6.83 : 5,
        opacity: 0.4
      },
      {
        center: new k(-0.54, g.isSp ? 1.5 : 1.3),
        rotation: 0.059,
        speed: 0.2,
        offset: 0,
        width: 0.02,
        edge: 0.01,
        rayDistance: 3.6,
        opacity: 0.67
      }
    ]
  };
class je extends ne {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "scene", new B());
    _defineProperty(this, "sceneCar", new B());
    _defineProperty(this, "sceneSky", new B());
    _defineProperty(this, "sceneText", new B());
    _defineProperty(this, "scene2D", new B());
    _defineProperty(this, "camera", void 0);
    _defineProperty(this, "camera2D", void 0);
    _defineProperty(this, "lookAt", void 0);
    _defineProperty(this, "cameraPosition", void 0);
    _defineProperty(this, "folder", void 0);
    _defineProperty(this, "street", new U());
    _defineProperty(this, "cars", []);
    _defineProperty(this, "mainCar", void 0);
    _defineProperty(this, "postprocessing", {
      composer: re,
      bokeh: ge
    });
    _defineProperty(this, "carMixer", void 0);
    _defineProperty(this, "uniformsIcon", {});
    _defineProperty(this, "meshIcon", {});
    _defineProperty(this, "icons", []);
    _defineProperty(this, "sparks", []);
    _defineProperty(this, "uniformsSparks", []);
    _defineProperty(this, "isRunTransition", !1);
    _defineProperty(this, "isRunTransitionNext", !1);
    _defineProperty(this, "isRunText", !1);
    _defineProperty(this, "isRunCar", !1);
    _defineProperty(this, "isTurnOnLight", !1);
    _defineProperty(this, "isRunAbout", !1);
    _defineProperty(this, "isLowerPage", !1);
    _defineProperty(this, "isTransitionedNext", !1);
  }
  onInit() {
    (this.isLowerPage = this.option.isLowerPage),
      this.option.isNight && (this.textures.Spark = b(xe, {})),
      (this.textures.headlight = b(ye, {})),
      (this.textures.taillight = b(Oe, {})),
      h.enablePane &&
        ((this.folder = h.pane.addFolder({
          title: "ServiceOpposite",
          expanded: !1
        })),
        this.folder.addInput(t, "speed", {
          min: 0
        })),
      this.initScene(),
      this.initCamera(),
      this.initLight(),
      this.initStreetBackground(),
      this.initStreet(),
      this.initCar(),
      this.isLowerPage || (this.initIcon(), this.initInsideCar()),
      this.initPostprocessing();
  }
  initScene() {
    this.sceneSky.background =
      t[this.option.isNight ? "backgroundColorNight" : "backgroundColor"];
  }
  initCamera() {
    if (
      ((this.camera = new ce(
        t.camera.fov,
        this.option.camera.aspect,
        this.option.camera.near,
        t.camera.far
      )),
      (this.cameraPosition =
        t.camera[this.isLowerPage ? "positionLowerPage" : "position"][
          T
        ].clone()),
      this.camera.position.copy(this.cameraPosition),
      (this.lookAt =
        t.camera[this.isLowerPage ? "lookAtLowerPage" : "lookAt"][T].clone()),
      this.setLookAt(),
      (this.camera2D = new he()),
      h.enablePane)
    ) {
      const e = this.folder.addFolder({
        title: "camera",
        expanded: !1
      });
      e
        .addInput(this, "cameraPosition", {
          label: "position"
        })
        .on("change", () => {
          this.camera.position.copy(this.cameraPosition), this.setLookAt();
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
          this.setLookAt();
        });
    }
  }
  setLookAt() {
    const e = this.lookAt.clone().add(new n(0, this.cameraPosition.y));
    this.camera.lookAt(e);
  }
  initLight() {
    {
      const e = new le(t.directionalLight.color, t.directionalLight.intensity);
      e.position.copy(t.directionalLight.position),
        this.scene.add(e),
        this.sceneCar.add(e.clone());
    }
    {
      const e = new pe(16777215, 16777215, 1);
      e.position.set(0, 50, 0), this.scene.add(e), this.sceneCar.add(e.clone());
    }
  }
  initStreetBackground() {
    const e = this.option.isNight ? Se : Ce,
      i = (this.textures.StreetBackground = b(e, {})),
      a = C({
        uTexture: i,
        uResolutionObject: new k(
          t.streetBackground.size.x,
          t.streetBackground.size.y
        ),
        uResolutionImage: new k(e.width, e.height),
        uRotation: t.streetBackground.textureRotation,
        uRotationCenter: t.streetBackground.rotationCenter,
        uOffset: t.streetBackground.offset,
        uTime: 0,
        uSpread: t.streetBackground.spread,
        uScale: t.streetBackground.scale,
        uDarkness:
          t.streetBackground[
            this.option.isNight ? "darknessNight" : "darkness"
          ],
        uFadePosition: t.streetBackground.fadePosition,
        uFadeRate: t.streetBackground.fadeRate,
        uOpacity:
          t.streetBackground[this.option.isNight ? "opacityNight" : "opacity"],
        uAlpha: 1,
        uColor:
          t.streetBackground[this.option.isNight ? "colorNight" : "color"],
        uBackgroundColor: this.sceneSky.background
      });
    this.uniformsStreetBackground = W(a);
    const o = (this.streetBackgroundMesh = new R(
      new E(1, 1),
      new y({
        uniforms: a,
        vertexShader: O,
        fragmentShader: Ie
      })
    ));
    if (
      (o.position.copy(t.streetBackground.position),
      o.rotation.copy(t.streetBackground.rotation),
      o.scale.set(t.streetBackground.size.x, t.streetBackground.size.y, 1),
      this.sceneSky.add(o),
      h.enablePane)
    ) {
      const s = this.folder.addFolder({
        title: "街背景",
        expanded: !1
      });
      s.addInput(o, "visible"),
        s.addInput(o, "position"),
        s.addInput(o, "rotation"),
        s
          .addInput(o, "scale", {
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
          })
          .on("change", () => {
            this.uniformsStreetBackground.uResolutionObject.value.set(
              o.scale.x,
              o.scale.y
            );
          }),
        s.addInput(this.uniformsStreetBackground.uScale, "value", {
          label: "scale",
          min: 0
        }),
        s.addInput(this.uniformsStreetBackground.uSpread, "value", {
          label: "歪み",
          min: 0,
          max: 10
        }),
        s.addInput(this.uniformsStreetBackground.uRotation, "value", {
          label: "画像回転",
          min: 0,
          max: Math.PI
        }),
        s.addInput(this.uniformsStreetBackground.uRotationCenter, "value", {
          label: "回転中心"
        }),
        s.addInput(this.uniformsStreetBackground.uOffset, "value", {
          label: "画像位置"
        }),
        s.addInput(this.uniformsStreetBackground.uDarkness, "value", {
          label: "darkness"
        }),
        s.addInput(this.uniformsStreetBackground.uFadePosition, "value", {
          label: "フェード Position",
          min: 0
        }),
        s.addInput(this.uniformsStreetBackground.uFadeRate, "value", {
          label: "フェード Rate",
          min: 0
        }),
        s.addInput(this.uniformsStreetBackground.uOpacity, "value", {
          label: "opacity",
          min: 0,
          max: 1
        }),
        s.addInput(this.uniformsStreetBackground.uColor, "value", {
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
    let e;
    h.enablePane &&
      (e = this.folder.addFolder({
        title: "街",
        expanded: !1
      })),
      this.street.position.copy(t.street.position),
      this.street.rotation.copy(t.street.rotation),
      this.scene.add(this.street);
    let i;
    this.option.isNight && (i = this.textures.Spark),
      K(
        this.option.isNight
          ? "/gl/night/optimize/colony_juden_v6_line.glb"
          : "/gl/optimize/colony_juden_v6.glb",
        {
          onLoad: (a, o) => {
            const s = o;
            if (
              ((s.name = "glTF"),
              this.option.isNight &&
                s.traverse((r) => {
                  if (
                    r.isMesh &&
                    r.name.startsWith("spark_") &&
                    !(
                      r.name === "spark_01059" ||
                      r.name === "spark_01060" ||
                      r.name === "spark_01061" ||
                      r.name === "spark_01062"
                    )
                  ) {
                    const c = C({
                        uTexture: i,
                        uSpeed: t.spark.speed,
                        uInterval: t.spark.interval,
                        uPositionY: t.spark.positionY,
                        uScale: t.spark.scale,
                        uRotation: t.spark.rotation,
                        uDarkness: t.spark.darkness,
                        uBloom: t.spark.bloom,
                        uOpacity: t.spark.opacity,
                        uOffset: Math.random(),
                        uTime: 0
                      }),
                      l = W(c);
                    this.uniformsSparks.push(l);
                    const S = new y({
                      uniforms: c,
                      vertexShader: O,
                      fragmentShader: _e,
                      side: J,
                      transparent: !0,
                      depthTest: !1,
                      depthWrite: !1
                    });
                    (r.material = S), this.sparks.push(r);
                  }
                }),
              s.position.copy(t.street.model.position),
              s.rotation.copy(t.street.model.rotation),
              (this.streetModel = s),
              h.enablePane &&
                (e.addInput(this.street, "visible"),
                e.addInput(this.street, "position"),
                e.addInput(this.street, "rotation"),
                e.addInput(s, "position", {
                  label: "model position"
                }),
                e.addInput(s, "rotation", {
                  label: "model rotation"
                }),
                this.option.isNight))
            ) {
              const r = e.addFolder({
                title: "光ライン"
              });
              r
                .addInput(t.spark, "speed", {
                  min: 0,
                  max: 10
                })
                .on("change", ({ value: c }) => {
                  this.uniformsSparks.forEach((l) => {
                    l.uSpeed.value = c;
                  });
                }),
                r
                  .addInput(t.spark, "interval", {
                    min: 0,
                    max: 20
                  })
                  .on("change", ({ value: c }) => {
                    this.uniformsSparks.forEach((l) => {
                      l.uInterval.value = c;
                    });
                  }),
                r
                  .addInput(t.spark, "positionY", {
                    min: -5,
                    max: 5
                  })
                  .on("change", ({ value: c }) => {
                    this.uniformsSparks.forEach((l) => {
                      l.uPositionY.value = c;
                    });
                  }),
                r
                  .addInput(t.spark, "scale", {
                    x: {
                      min: 0,
                      max: 2,
                      step: 0.01
                    },
                    y: {
                      min: 0,
                      max: 2,
                      step: 0.01
                    }
                  })
                  .on("change", ({ value: c }) => {
                    this.uniformsSparks.forEach((l) => {
                      l.uScale.value = c;
                    });
                  }),
                r
                  .addInput(t.spark, "rotation", {
                    min: 0,
                    max: 2
                  })
                  .on("change", ({ value: c }) => {
                    this.uniformsSparks.forEach((l) => {
                      l.uRotation.value = c;
                    });
                  }),
                r
                  .addInput(t.spark, "darkness", {
                    min: 0,
                    max: 1
                  })
                  .on("change", ({ value: c }) => {
                    this.uniformsSparks.forEach((l) => {
                      l.uDarkness.value = c;
                    });
                  }),
                r
                  .addInput(t.spark, "bloom", {
                    min: 0,
                    max: 2
                  })
                  .on("change", ({ value: c }) => {
                    this.uniformsSparks.forEach((l) => {
                      l.uBloom.value = c;
                    });
                  }),
                r
                  .addInput(t.spark, "opacity", {
                    min: 0,
                    max: 1
                  })
                  .on("change", ({ value: c }) => {
                    this.uniformsSparks.forEach((l) => {
                      l.uOpacity.value = c;
                    });
                  });
            }
          },
          isAddToLoadingWait: this.isLowerPage
        }
      );
  }
  initCar() {
    this.sceneCar.position.copy(t.street.position),
      this.sceneCar.rotation.copy(t.street.rotation),
      this.initCarA();
  }
  initCarA() {
    let e;
    h.enablePane &&
      (e = this.folder.addFolder({
        title: "car A",
        expanded: !1
      }));
    const i = this.textures.headlight,
      a = this.textures.taillight;
    K("/gl/car_v7_out3.glb", {
      onLoad: (o, s) => {
        const r = s,
          { animations: c } = o;
        (r.name = "glTF"), h.enablePane;
        const l = new R(
          new E(2, 5),
          new y({
            vertexShader: O,
            fragmentShader: ke,
            transparent: !0
          })
        );
        (l.name = "shadow"), l.rotateX(Math.PI * -0.5);
        const S = new U();
        S.scale.setScalar(t.car.scale),
          S.add(l, r),
          t.car.individual.forEach((A, v) => {
            if (this.isSp && v === 0) {
              this.cars.push(null);
              return;
            }
            const m = v === 2,
              f = S.clone();
            f.position.copy(A.position),
              f.rotation.copy(A.rotation),
              v === 1 &&
                f.children.forEach((u) => {
                  u.name === "shadow" &&
                    ((u.material = u.material.clone()),
                    (u.material.depthTest = !1));
                }),
              this.cars.push(f),
              m && (this.mainCar = f);
            let M;
            if (
              (h.enablePane &&
                ((M = e.addFolder({
                  title: `${v + 1}${m ? "（主人公）" : ""}`
                })),
                M.addInput(f, "visible"),
                M.addInput(f, "position", {
                  x: {
                    step: 0.1
                  },
                  y: {
                    step: 0.1
                  },
                  z: {
                    step: 0.1
                  }
                }),
                M.addInput(f, "rotation", {
                  x: {
                    step: 0.1
                  },
                  y: {
                    step: 0.1
                  },
                  z: {
                    step: 0.1
                  }
                })),
              this.option.isNight &&
                f.traverse((u) => {
                  if (u.isMesh)
                    switch (
                      ((u.material = u.material.clone()), u.material.name)
                    ) {
                      case "lamp":
                      case "emission":
                        (u.material.roughness = 1),
                          (u.material.metalness = 0),
                          u.material.emissive.setRGB(0, 0, 0);
                        break;
                    }
                }),
              m)
            ) {
              if (this.option.isNight) {
                {
                  const P = C({
                      uTexture: i,
                      uOpacity: t.car.headlight.opacity
                    }),
                    p = new R(
                      new E(4, 4),
                      new y({
                        uniforms: P,
                        vertexShader: O,
                        fragmentShader: we,
                        transparent: !0,
                        depthTest: !1
                      })
                    );
                  if (
                    (p.rotateX(Math.PI * -0.5),
                    p.position.copy(t.car.headlight.position),
                    p.scale.copy(t.car.headlight.scale),
                    (p.visible = !1),
                    f.add(p),
                    (this.headlightMesh = p),
                    h.enablePane)
                  ) {
                    const I = M.addFolder({
                      title: "ヘッドライト"
                    });
                    I.addInput(p, "position", {
                      x: {
                        step: 0.1
                      },
                      y: {
                        step: 0.1
                      },
                      z: {
                        step: 0.1
                      }
                    }),
                      I.addInput(p, "rotation"),
                      I.addInput(p, "scale", {
                        x: {
                          step: 0.1
                        },
                        y: {
                          step: 0.1
                        },
                        z: {
                          step: 0.1
                        }
                      }),
                      I.addInput(P.uOpacity, "value", {
                        label: "opacity",
                        min: 0,
                        max: 1
                      });
                  }
                }
                {
                  const P = C({
                      uTexture: a,
                      uOpacity: t.car.taillight.opacity
                    }),
                    p = new R(
                      new E(2, 2),
                      new y({
                        uniforms: P,
                        vertexShader: O,
                        fragmentShader: ve,
                        transparent: !0
                      })
                    );
                  if (
                    (p.rotateX(Math.PI * -0.5),
                    p.position.copy(t.car.taillight.position),
                    p.scale.copy(t.car.taillight.scale),
                    (p.visible = !1),
                    f.add(p),
                    (this.taillightMesh = p),
                    h.enablePane)
                  ) {
                    const I = e.addFolder({
                      title: "テールランプ"
                    });
                    I.addInput(p, "position", {
                      x: {
                        step: 0.1
                      },
                      y: {
                        step: 0.1
                      },
                      z: {
                        step: 0.1
                      }
                    }),
                      I.addInput(p, "rotation"),
                      I.addInput(p, "scale", {
                        x: {
                          step: 0.1
                        },
                        y: {
                          step: 0.1
                        },
                        z: {
                          step: 0.1
                        }
                      }),
                      I.addInput(P.uOpacity, "value", {
                        label: "opacity",
                        min: 0,
                        max: 1
                      });
                  }
                }
              }
              const u = new de(f);
              (this.carMixer = u),
                c.forEach((P) => {
                  u.clipAction(P).play();
                });
            }
          });
      },
      isAddToLoadingWait: this.isLowerPage
    });
  }
  turnOnLight() {
    if (this.isTurnOnLight) return;
    (this.isTurnOnLight = !0),
      this.mainCar.traverse((i) => {
        if (i.isMesh)
          switch (i.material.name) {
            case "lamp":
            case "emission":
              i.material.emissive.copy(
                new _(
                  Math.pow(H.r, 5.6),
                  Math.pow(H.g, 5.6),
                  Math.pow(H.b, 5.6)
                )
              );
              break;
          }
      }),
      (this.headlightMesh.visible = !0),
      (this.taillightMesh.visible = !0);
  }
  turnOffLight() {
    if (!this.isTurnOnLight) return;
    (this.isTurnOnLight = !1),
      this.mainCar.traverse((i) => {
        if (i.isMesh)
          switch (i.material.name) {
            case "lamp":
            case "emission":
              i.material.emissive.setRGB(0, 0, 0);
              break;
          }
      }),
      (this.headlightMesh.visible = !1),
      (this.taillightMesh.visible = !1);
  }
  initIcon() {
    this.initIconMesh(
      "charging2",
      V || j
        ? "/assets/video/top/battery_soden.mp4"
        : [
            "/assets/video/top/battery_soden.mov",
            "/assets/video/top/battery_soden.webm"
          ],
      null,
      "充電中（主人公）"
    ),
      this.isSp ||
        this.initIconMesh(
          "charging",
          V || j
            ? "/assets/video/top/battery_soden.mp4"
            : [
                "/assets/video/top/battery_soden.mov",
                "/assets/video/top/battery_soden.webm"
              ],
          null,
          "充電中"
        );
  }
  initIconMesh(e, i, a, o) {
    const s = t.icon[e];
    let r, c, l, S;
    Array.isArray(i) ||
    (typeof i == "string" &&
      (i.endsWith(".webm") || i.endsWith(".mov") || i.endsWith(".mp4")))
      ? ((c = new ae(i, {
          preload: !0
        })),
        c.load(),
        (r = new ue(c.el)),
        (l = 100),
        (S = 200),
        (c.el.currentTime = s.currentTime))
      : ((r = this.textures.Icon = b(i, {})), (l = i.width), (S = i.height));
    const A = C({
      uTexture: r,
      uProgress: 0
    });
    this.uniformsIcon[e] = W(A);
    const v = (this.meshIcon[e] = new R(
      new E(1, 1),
      new y({
        uniforms: A,
        vertexShader: O,
        fragmentShader: c && (V || j) ? Ee : Re,
        transparent: !0,
        side: J
      })
    ));
    v.position.set(0, t.icon.pivot, 0);
    const m = new U();
    m.add(v),
      (m.visible = !1),
      m.position.copy(s.position),
      m.rotation.copy(s.rotation),
      m.scale.set(l * s.scale, S * s.scale, 1),
      this.sceneText.add(m),
      (m.name = e),
      this.icons.push({
        pivot: m,
        video: c,
        param: s
      });
  }
  showIcon({ pivot: e, video: i, param: a }, o = 2) {
    (i.el.currentTime = o === 0 ? i.el.duration : a.currentTime),
      (e.visible = !0);
    const { name: s } = e,
      r = s === "stress",
      c = a.delay;
    gsap.set(e.position, {
      y: a.position.y
    }),
      $.timeline(
        {
          delay: c
        },
        `ServiceOpposite-icon-${s}`
      )
        .add([
          gsap.from(e.position, {
            y: "-=0.5",
            duration: o,
            ease: "elastic.out"
          }),
          gsap.from(e.rotation, {
            y: `${r ? "+" : "-"}=${Math.PI}`,
            duration: o,
            ease: "quad.out"
          }),
          gsap.fromTo(
            this.uniformsIcon[s].uProgress,
            {
              value: 0
            },
            {
              value: 1,
              duration: o,
              ease: "expo.out"
            }
          )
        ])
        .call(
          () => {
            i && i.play();
          },
          void 0,
          "-=0.8"
        );
  }
  hideIcon({ pivot: e, video: i, param: a }) {
    const { name: o } = e,
      s = 1;
    i.pause(),
      (i.el.currentTime = i.el.duration),
      $.to(this.uniformsIcon[o].uProgress, {
        value: 0,
        duration: s,
        ease: "power3.out"
      });
  }
  showServiceOppositeIcon() {
    this.showIcon(this.icons[0]), this.icons[1] && this.showIcon(this.icons[1]);
  }
  hideServiceOppositeIcon() {
    this.icons.forEach(({ pivot: e }, i) => {
      e.visible = !1;
    });
  }
  initInsideCar() {
    const e = (this.textures.InsideCar = b(D, {})),
      i = C({
        uTexture: e,
        noiseMin: 0.5,
        noiseMax: 0.75
      }),
      a = (this.meshInsideCar = new R(
        new E(1, 1),
        new y({
          uniforms: i,
          vertexShader: O,
          fragmentShader: Pe,
          transparent: !0
        })
      ));
    this.scene2D.add(a);
  }
  initPostprocessing() {
    const { width: e, height: i, pixelRatio: a } = this.option,
      o = Te({
        width: e,
        height: i,
        pixelRatio: a,
        camera: this.camera,
        folder: this.folder,
        effectController: Ne,
        isNight: this.option.isNight
      });
    this.postprocessing = o;
  }
  initOrbitControls() {
    oe(
      () => import("./OrbitControls.js"),
      [
        "_astro/OrbitControls.js",
        "_astro/constants.e6c90e33.js",
        "_astro/PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js"
      ]
    ).then(({ OrbitControls: e }) => {
      const i = (this.controls = new e(
        this.camera,
        this.option.renderer.domElement
      ));
      i.addEventListener("change", () => {
        (this.camera.far = t.camera.far + i.getDistance()),
          this.camera.updateProjectionMatrix(),
          this.setLookAt();
      }),
        (i.maxDistance = 5e4),
        i.update(),
        this.setLookAt();
    });
  }
  progressSpark(e) {
    const i = e;
    this.uniformsSparks.forEach((a) => {
      a.uTime.value = -(0.03 + i * 4);
    });
  }
  makeTransitionIn(e) {
    const i = L["quart.out"](e);
    this.camera.position.set(
      ...z(t.camera.positionTransitionIn[T], t.camera.position[T], i)
    ),
      this.lookAt.set(
        ...z(t.camera.lookAtTransitionIn[T], t.camera.lookAt[T], i)
      ),
      (this.camera.fov = d(t.camera.fovTransitionIn, t.camera.fov, i)),
      this.setLookAt(),
      this.camera.updateProjectionMatrix();
  }
  makeTransitionOut(e) {
    const i = L["quint.inOut"](e * 0.85) / 0.85;
    this.camera.position.set(
      ...z(t.camera.position[T], t.camera.positionTransitionOut[T], i)
    ),
      this.lookAt.set(
        ...z(t.camera.lookAt[T], t.camera.lookAtTransitionOut[T], i)
      ),
      (this.camera.fov = d(t.camera.fov, t.camera.fovTransitionOut, i)),
      this.setLookAt(),
      this.camera.updateProjectionMatrix();
  }
  resize(e, i, a) {
    (this.camera.aspect = e / i),
      this.camera.updateProjectionMatrix(),
      this.camera2D.resize(e, i),
      this.postprocessing.resize(e, i, a),
      this.meshInsideCar &&
        (e / i < 1.6597510373443984
          ? (this.meshInsideCar.position.set(0, 0, 0),
            this.meshInsideCar.scale.set((D.width * i) / D.height, i, 1))
          : (this.meshInsideCar.position.set(
              0,
              -(i - D.height * h.variableSizeRate) / 2,
              0
            ),
            this.meshInsideCar.scale.set(e, D.height * h.variableSizeRate, 1)));
  }
  progress(e, i) {
    this.scroll(e * (1 - se) * G + F + G * se, i * -500);
  }
  scroll(e, i) {
    if (
      (e >= Q
        ? (this.isRunTransitionNext && (this.isRunTransitionNext = !1),
          !this.isTransitionedNext &&
            h.nextScene === "ServiceOpposite" &&
            h.scrollDirection === 1 &&
            ((this.isTransitionedNext = !0),
            w.emit("top:startTransition:about")))
        : Z < e && e < Q
        ? this.isRunTransitionNext ||
          ((this.isRunTransitionNext = !0),
          h.scrollDirection === -1
            ? ((this.isTransitionedNext = !1),
              w.emit("top:startTransition:about", !0),
              w.emit("changeHeaderLocationCurrentIndex", be.indexOf("Service")))
            : this.isTransitionedNext ||
              ((this.isTransitionedNext = !0),
              w.emit("top:startTransition:about")))
        : e <= Z &&
          this.isRunTransitionNext &&
          ((this.isRunTransitionNext = !1),
          (this.isTransitionedNext = !1),
          w.emit("top:startTransition:about", !0),
          w.emit("changeScene", "ServiceOpposite", {
            isBack: !0
          })),
      e >= ee)
    ) {
      if (this.isRunCar) {
        this.isRunCar = !1;
        const a = 1,
          o = this.mainCar;
        if (o) {
          const s = t.car.individual[2];
          o.position.set(
            d(s.position.x, s.positionEnd.x, a),
            0,
            d(s.position.z, s.positionEnd.z, a)
          ),
            o.rotation.set(0, d(s.rotation.y, s.rotationEnd.y, a), 0);
        }
      }
    } else if (F < e && e < ee) {
      this.isRunCar ||
        ((this.isRunCar = !0),
        h.scrollDirection === -1 ||
          this.isLowerPage ||
          (this.hideIcon(this.icons[0]), h.components.topService.fadeOutText()),
        this.option.isNight && this.turnOnLight());
      const a = (e - F) / G,
        o = L["sine.inOut"](a),
        s = this.mainCar;
      if (s) {
        const r = t.car.individual[2];
        s.position.set(
          d(r.position.x, r.positionEnd.x, L["quad.in"](o)),
          0,
          d(r.position.z, r.positionEnd.z, L["quad.out"](o))
        ),
          s.rotation.set(
            0,
            d(r.rotation.y, r.rotationEnd.y, L["sine.in"](o)),
            0
          );
      }
      this.carMixer &&
        ((this.carMixer.time >= this.carMixer._actions[0]._clip.duration / 3 &&
          this.carMixer.time <
            (this.carMixer._actions[0]._clip.duration / 3) * 2) ||
          this.carMixer.setTime(this.carMixer._actions[0]._clip.duration / 3),
        this.carMixer.update(i * 0.01));
    } else if (e <= F && this.isRunCar) {
      (this.isRunCar = !1), (this.uniformsIcon.charging2.uProgress.value = 1);
      const a = 0;
      h.components.topService.fadeInText();
      const o = this.mainCar;
      if (o) {
        const s = t.car.individual[2];
        o.position.set(
          d(s.position.x, s.positionEnd.x, a),
          0,
          d(s.position.z, s.positionEnd.z, a)
        ),
          o.rotation.set(0, d(s.rotation.y, s.rotationEnd.y, a), 0);
      }
    }
    if (e >= te) {
      if (this.isRunText) {
        this.isRunText = !1;
        const a = 1;
        this.isLowerPage || h.components.topService.scrollText(d(N, 1, a));
      }
    } else if (X < e && e < te) {
      this.isRunText || (this.isRunText = !0);
      const a = (e - X) / me;
      this.isLowerPage ||
        (h.components.topService.scrollText(d(N, 1, a)),
        !this.isTurnOnLight && a >= 0.5
          ? this.option.isNight && this.turnOnLight()
          : this.isTurnOnLight &&
            a < 0.5 &&
            this.option.isNight &&
            this.turnOffLight());
    } else if (e <= X && this.isRunText) {
      this.isRunText = !1;
      const a = 0;
      this.isLowerPage || h.components.topService.scrollText(d(N, 1, a));
    }
    if (e >= ie) {
      if (this.isRunTransition) {
        this.isRunTransition = !1;
        const a = 1;
        this.isLowerPage ||
          (h.components.topService.scrollText(d(q, N, a)),
          h.scrollDirection === -1 || this.showServiceOppositeIcon());
      }
    } else if (Y < e && e < ie) {
      this.isRunTransition ||
        ((this.isRunTransition = !0),
        (this.isTransitionedNext = !1),
        h.scrollDirection === -1 &&
          (w.emit("top:startTransition:serviceOpposite", !0),
          this.hideIcon(this.icons[0]),
          this.icons[1] && this.hideIcon(this.icons[1])));
      const a = (e - Y) / fe;
      this.isLowerPage || h.components.topService.scrollText(d(q, N, a));
    } else if (e <= Y && this.isRunTransition) {
      (this.isRunTransition = !1),
        w.emit("changeScene", "Service", {
          isBack: !0
        });
      const a = 0;
      this.isLowerPage || h.components.topService.scrollText(d(q, N, a));
    }
  }
  tick(e, i, a) {
    this.option.isNight && this.progressSpark(e);
  }
  render(e = null) {
    this.option.renderer.setRenderTarget(this.postprocessing.rtTextureColor),
      this.option.renderer.clear(),
      this.option.renderer.render(this.sceneSky, this.camera),
      this.option.renderer.clearDepth(),
      this.option.renderer.render(this.scene, this.camera),
      this.option.renderer.clearDepth(),
      this.option.renderer.render(this.sceneCar, this.camera),
      (this.scene.overrideMaterial = this.sceneCar.overrideMaterial =
        this.postprocessing.materialDepth),
      this.option.renderer.setRenderTarget(this.postprocessing.rtTextureDepth),
      this.option.renderer.clear(),
      this.option.renderer.render(this.scene, this.camera),
      this.option.renderer.clearDepth(),
      this.option.renderer.render(this.sceneCar, this.camera),
      (this.scene.overrideMaterial = this.sceneCar.overrideMaterial = null),
      this.option.renderer.setRenderTarget(e),
      this.option.renderer.render(
        this.postprocessing.scene,
        this.postprocessing.camera
      ),
      this.option.renderer.clearDepth(),
      this.option.renderer.render(this.sceneText, this.camera),
      this.option.renderer.clearDepth(),
      this.option.renderer.render(this.scene2D, this.camera2D);
  }
  start(e = !1) {
    gsap.delayedCall(e || this.isLowerPage ? 0 : 0.1, () => {
      this.isDisposed
        ? this.addDisposeTarget(this.street, this.streetModel)
        : this.street.add(this.streetModel);
    }),
      gsap.delayedCall(e || this.isLowerPage ? 0 : 0.1, () => {
        this.cars.forEach((i, a) => {
          i &&
            gsap.delayedCall((e || this.isLowerPage ? 0 : 0.01) * a, () => {
              const o = a === 1 ? this.street : this.sceneCar;
              this.isDisposed ? this.addDisposeTarget(o, i) : o.add(i);
            });
        });
      });
  }
}
export { je as S, D as a, Ee as b, Ce as i, Re as t };
