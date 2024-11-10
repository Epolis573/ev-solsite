import {
    P as u,
    C as h,
    g as r,
    a,
    S as p,
    m as d
} from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
import "./AnchorLinks.astro_astro_type_script_index_0_lang.7092990b.js";
import "./GradationBgOnFv.astro_astro_type_script_index_0_lang.bd8de35a.js";
import {
    T as g
} from "./constants.e6c90e33.js";
import {
    K as m
} from "./Kv.7751291d.js";
import "./easing.ca1274dc.js";
import "./spark.83ebcaee.js";
import "./spark.1d7c7a14.js";
import "./cloud_02.dbe4073e.js";
import "./project.49f9dddf.js";
(class extends u {}).register();
(class extends h {
    static componentName = "FV";
    static selectorRoot = "[data-parallax-fv]";
    isScrollEnter = !1;
    onInit() {
        this.mainTxt = this.el?.querySelector(".mainTxt"), this.subTxt = this.el?.querySelector(".subTxt"), this.ankerLinks = this.el?.querySelector(".AnchorLinks"), this.GL = document.querySelector(".GL"), this.eventBlurVal = {
            progress: 0
        }, this.blurEvent = new CustomEvent("blurchabge", {
            detail: {
                progress: () => this.eventBlurVal.progress
            }
        })
    }
    onIntersect({
        isIntersecting: t
    }) {
        t ? (this.mainTxt.style.willChange = "opacity,filter", this.subTxt.style.willChange = "opacity,filter", this.ankerLinks.style.willChange = "opacity,filter", this.playScroll()) : (this.pauseScroll(), this.mainTxt.style.willChange = "", this.subTxt.style.willChange = "", this.ankerLinks.style.willChange = "")
    }
    onScroll({
        scroll: t
    }) {
        if (this.scrollStart <= t && t <= this.scrollEnd) {
            this.isScrollEnter || (this.isScrollEnter = !0), this.targetOpacity = 1 - t / this.scrollDistance * 2;
            const s = t / this.scrollDistance * 2 * 5;
            this.mainTween = r.scrub(this.mainTxt, {
                opacity: `${this.targetOpacity}`,
                filter: `blur(${s}px)`,
                duration: .2
            }), this.subTween = r.scrub(this.subTxt, {
                opacity: `${this.targetOpacity}`,
                filter: `blur(${s}px)`,
                duration: .2
            }), this.ankerTween = r.scrub(this.ankerLinks, {
                opacity: `${this.targetOpacity}`,
                filter: `blur(${s}px)`,
                duration: .2
            }), this.glTween = r.scrub(this.eventBlurVal, {
                progress: this.targetOpacity,
                duration: .2,
                onUpdate: () => {
                    this.GL.dispatchEvent(this.blurEvent)
                }
            })
        } else this.isScrollEnter && t >= 0 && (this.isScrollEnter = !1, this.mainTween && (this.mainTween.kill(), this.subTween.kill(), this.glTween.kill(), this.ankerTween.kill(), this.mainTween = void 0, this.subTween = void 0, this.glTween = void 0, this.ankerTween = void 0), this.overPosition = t < this.scrollStart ? "top" : "bottom", this.overPosition === "bottom" && this.setOverStyle())
    }
    setOverStyle(t = !1) {
        a.set(this.mainTxt, {
            opacity: "0",
            filter: "blur(5px)"
        }), a.set(this.subTxt, {
            opacity: "0",
            filter: "blur(5px)"
        }), a.set(this.ankerLinks, {
            opacity: "0",
            filter: "blur(5px)"
        }), this.eventBlurVal.progress = 0, this.GL.dispatchEvent(this.blurEvent)
    }
    onResize({
        windowWidth: t,
        windowHeight: s
    }) {
        const {
            scrollY: i
        } = this, {
            bottom: l
        } = this.el.getBoundingClientRect();
        this.scrollStart = 0, this.scrollEnd = l + i, this.scrollDistance = this.scrollEnd - this.scrollStart, (i < this.scrollStart || i > this.scrollEnd) && (this.overPosition = i < this.scrollStart ? "top" : "bottom", this.overPosition === "bottom" && this.setOverStyle(!0))
    }
}).register();
(class extends h {
    static componentName = "SecondView";
    static selectorRoot = "[data-parallax-sv]";
    isScrollEnter = !1;
    onInit() {
        this.blurSubTop = this.el?.querySelector(".blur-subTop"), this.blurSubBottom = this.el?.querySelector(".blur-subBottom"), this.delayMax = .5, this.delayArray = [], this.splitTarget = new p(this.el?.querySelector(".title-ja"), {
            type: "chars",
            charsClass: "SectionTitle-splitTxt"
        }), this.splitTarget.chars.forEach((t, s) => {
            this.delayArray.push(this.delayMax * a.utils.random(0, 1))
        })
    }
    onIntersect({
        isIntersecting: t
    }) {
        t ? (this.blurSubTop.style.willChange = "transform,opacity,filter", this.blurSubBottom.style.willChange = "transform,opacity,filter", this.splitTarget.chars.forEach((s, i) => {
            s.style.willChange = "transform,opacity,filter"
        }), this.playScroll()) : (this.pauseScroll(), this.blurSubTop.style.willChange = "", this.blurSubBottom.style.willChange = "", this.splitTarget.chars.forEach((s, i) => {
            s.style.willChange = ""
        }))
    }
    onScroll({
        scroll: t
    }) {
        if (this.scrollStart <= t && t <= this.scrollEnd) {
            this.isScrollEnter || (this.isScrollEnter = !0, this.windowHeight || (this.windowHeight = window.innerHeight));
            const s = Math.min(Math.max(((t - this.scrollStart) / this.windowHeight - 1) * 2, 0), 1);
            this.SceneProgress = Math.max((1 + ((t - this.scrollStart) / this.scrollDistance - 1) - .5) * 2, 0);
            const i = s,
                l = (1 - s) * 5,
                n = `translateZ(${(1-s)*-12}vw)`;
            this.subTopTween = r.scrub(this.blurSubTop, {
                opacity: `${i}`,
                filter: `blur(${l}px)`,
                transform: `${n}`,
                duration: .2
            }), this.subBottomTween = r.scrub(this.blurSubBottom, {
                opacity: `${i}`,
                filter: `blur(${l}px)`,
                transform: `${n}`,
                duration: .2
            }), this.splitTween = r.scrub(this.splitTarget.chars, {
                opacity: (e, o, c) => Math.min(Math.max(s * 2 - this.delayArray[e], 0), 1),
                filter: (e, o, c) => `blur(${Math.max((1-s)*2-this.delayArray[e],0)*5}px)`,
                transform: (e, o, c) => `translateZ(${Math.max((1-s)*2-this.delayArray[e],0)*-12}vw)`,
                duration: .2
            })
        } else this.isScrollEnter && (this.isScrollEnter = !1, this.subTopTween && (this.subTopTween.kill(), this.subBottomTween.kill(), this.splitTween.kill(), this.subTopTween = void 0, this.subBottomTween = void 0, this.splitTween = void 0), this.overPosition = scrollY < this.scrollStart ? "top" : "bottom", this.setOverStyle())
    }
    setOverStyle(t = !1) {
        this.overPosition === "top" ? (a.set(this.blurSubTop, {
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
        }))
    }
    onResize({
        windowWidth: t,
        windowHeight: s
    }) {
        this.blurSubTop.style.cssText = "", this.blurSubBottom.style.cssText = "", this.splitTarget.chars.forEach((e, o) => {
            e.style.opacity = "", e.style.transform = "", e.style.filter = ""
        });
        const {
            scrollY: i
        } = this;
        this.el.style.position = "static";
        const {
            top: l,
            bottom: n
        } = this.el.getBoundingClientRect();
        this.el.style.position = "", this.windowHeight = s, this.scrollStart = l + i - s, this.scrollEnd = n + i, this.scrollDistance = this.scrollEnd - this.scrollStart, (i < this.scrollStart || i > this.scrollEnd) && (this.overPosition = i < this.scrollStart ? "top" : "bottom", this.setOverStyle(!0))
    }
}).register();
(class extends h {
    static componentName = "VISION";
    isScrollEnter = !1;
    onInit() {
        this.stickyContent = this.el.querySelector(".sticky-section"), this.maskTarget = document.querySelector(".MVbg-wrapper"), this.maskShape = this.el.querySelector(".vision-mask"), this.visionTxt = this.el.querySelector(".vision-text"), this.delayMax = .5, this.delayArray = [], this.blurSubTop = this.el?.querySelector(".blur-subTop"), this.blurSubBottom = this.el?.querySelector(".blur-subBottom"), this.splitTarget = new p(this.el?.querySelector(".title-ja"), {
            type: "chars",
            charsClass: "SectionTitle-splitTxt"
        }), this.splitTarget.chars.forEach((t, s) => {
            this.delayArray.push(this.delayMax * a.utils.random(0, 1))
        }), this.GL = document.querySelector(".GL"), this.eventCameraVal = {
            progress: 0
        }, this.cameraEvent = new CustomEvent("camerachange", {
            detail: {
                progress: () => this.eventCameraVal.progress
            }
        })
    }
    onIntersect({
        isIntersecting: t
    }) {
        t ? (this.blurSubTop.style.willChange = "transform,opacity,filter", this.blurSubBottom.style.willChange = "transform,opacity,filter", this.visionTxt.style.willChange = "transform", this.splitTarget.chars.forEach((s, i) => {
            s.style.willChange = "transform,opacity,filter"
        }), this.maskTarget.style.willChange = "clip-path", this.playScroll()) : (this.pauseScroll(), this.maskTarget.style.willChange = "", this.blurSubTop.style.willChange = "", this.blurSubBottom.style.willChange = "", this.visionTxt.style.willChange = "", this.splitTarget.chars.forEach((s, i) => {
            s.style.willChange = ""
        }))
    }
    onScroll({
        scroll: t
    }) {
        if (this.scrollStart <= t && t <= this.scrollEnd) {
            this.isScrollEnter || (this.isScrollEnter = !0, this.windowHeight || (this.windowHeight = window.innerHeight));
            const s = Math.min(Math.max(((t - this.scrollStart) / this.windowHeight - 1) * 2, 0), 1),
                i = 1 - s,
                l = s * 5,
                n = `translateZ(${s*12}vw)`;
            if (this.subTopTween = r.scrub(this.blurSubTop, {
                    opacity: `${i}`,
                    filter: `blur(${l}px)`,
                    transform: `${n}`,
                    duration: .2
                }), this.subBottomTween = r.scrub(this.blurSubBottom, {
                    opacity: `${i}`,
                    filter: `blur(${l}px)`,
                    transform: `${n}`,
                    duration: .2
                }), this.splitTween = r.scrub(this.splitTarget.chars, {
                    transform: (e, o, c) => `translateZ(${(s*2-this.delayArray[e])*12}vw)`,
                    opacity: (e, o, c) => (1 - s) * 2 - this.delayArray[e],
                    filter: (e, o, c) => `blur(${(s*2-this.delayArray[e])*5}px)`,
                    duration: .2
                }), s === 1) {
                this.maskTarget.classList.contains("indexChange") || (this.maskTarget.classList.add("indexChange"), this.visionTxt.classList.add("show"));
                const e = Math.min((1 + (t - this.scrollStart) / this.scrollDistance - 1 - .4) * 3, 1);
                e >= 0 ? (this.maskTween = r.scrub(this.maskTarget, {
                    clipPath: `inset(${e*this.maskTop}px ${e*this.maskRight}px ${e*this.maskBottom}px ${e*this.maskLeft}px round ${e*this.maskRadius}px)`,
                    duration: .2
                }), this.textTween = r.scrub(this.visionTxt, {
                    scale: 1 + Math.max(1 - e * 1.2, 0) * .3,
                    duration: .2
                }), this.glTween = r.scrub(this.eventCameraVal, {
                    progress: e,
                    duration: .2,
                    onUpdate: () => {
                        this.GL.dispatchEvent(this.cameraEvent)
                    }
                })) : (this.maskTween = r.scrub(this.maskTarget, {
                    clipPath: "inset(0px 0px 0px 0px round 0vw)",
                    duration: .2
                }), this.textTween = r.scrub(this.visionTxt, {
                    scaleX: 1.3,
                    scaleY: 1.3,
                    duration: .2
                }), this.glTween = r.scrub(this.eventCameraVal, {
                    progress: 0,
                    duration: .2,
                    onUpdate: () => {
                        this.GL.dispatchEvent(this.cameraEvent)
                    }
                }))
            } else this.maskTarget.classList.contains("indexChange") && (this.maskTarget.classList.remove("indexChange"), this.visionTxt.classList.remove("show"))
        } else this.isScrollEnter && (this.isScrollEnter = !1, this.textTween && (this.textTween.kill(), this.textTween = void 0), this.subTopTween && (this.subTopTween.kill(), this.subBottomTween.kill(), this.splitTween.kill(), this.subTopTween = void 0, this.subBottomTween = void 0, this.splitTween = void 0), this.overPosition = scrollY < this.scrollStart ? "top" : "bottom", this.setOverStyle())
    }
    setOverStyle(t = !1) {
        this.overPosition === "top" ? (a.set(this.blurSubTop, {
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
        }), this.glTween = r.scrub(this.eventCameraVal, {
            progress: 0,
            duration: .2,
            onUpdate: () => {
                this.GL.dispatchEvent(this.cameraEvent)
            }
        }), this.maskTween = r.scrub(this.maskTarget, {
            clipPath: "inset(0px 0px 0px 0px round 0vw)",
            duration: .2
        })) : (a.set(this.blurSubTop, {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateZ(15vw)"
        }), a.set(this.blurSubBottom, {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateZ(15vw)"
        }), a.set(this.splitTarget.chars, {
            opacity: 0,
            filter: "blur(5px)",
            transform: "translateZ(15vw)"
        }), this.maskTween = r.scrub(this.maskTarget, {
            clipPath: `inset(${this.maskTop}px ${this.maskRight}px ${this.maskBottom}px ${this.maskLeft}px round ${this.maskRadius}vw)`,
            duration: .2
        }), this.glTween = r.scrub(this.eventCameraVal, {
            progress: 1,
            duration: .2,
            onUpdate: () => {
                this.GL.dispatchEvent(this.cameraEvent)
            }
        }), this.maskTarget.classList.contains("indexChange") || (this.maskTarget.classList.add("indexChange"), this.visionTxt.classList.add("show")))
    }
    onResize({
        windowWidth: t,
        windowHeight: s
    }) {
        this.isSP = d.isSp, this.progressRate = this.isSP ? 4 : 1;
        const {
            scrollY: i
        } = this;
        this.stickyContent.style.position = "static";
        const {
            top: l,
            bottom: n
        } = this.el.getBoundingClientRect();
        this.stickyContent.style.position = "";
        const e = this.stickyContent.getBoundingClientRect(),
            o = this.maskShape.getBoundingClientRect();
        this.maskLeft = o.left, this.maskRight = o.left + (t - o.left - o.right), this.maskTop = o.top - e.top, this.maskBottom = e.bottom - o.bottom, this.isSP ? this.maskRadius = t * .07 : this.maskRadius = t * .03, this.windowHeight = s, this.scrollStart = l + i - s, this.scrollEnd = n + i, this.scrollDistance = this.scrollEnd - this.scrollStart, (i < this.scrollStart || i > this.scrollEnd) && (this.overPosition = i < this.scrollStart ? "top" : "bottom", this.setOverStyle(!0))
    }
}).register();
(class extends h {
    static componentName = "CompanyProfile";
    onInit() {
        this.refs.detail.forEach(t => {
            t.classList.add("-backstage")
        }), this.isSp ? this.refs.detail.forEach(t => {
            this.addIntersectionObserver({
                el: t,
                callback: ({
                    isIntersecting: s
                }, i) => {
                    s && t.classList.remove("-backstage")
                },
                param: {
                    rootMargin: "0% 0% -15% 0%"
                },
                once: !0
            })
        }) : this.addIntersectionObserver({
            el: this.refs.detailWrapper,
            callback: ({
                isIntersecting: t
            }, s) => {
                t && this.refs.detail.forEach((i, l) => {
                    setTimeout(() => {
                        i.classList.remove("-backstage")
                    }, l * 300)
                })
            },
            param: {
                rootMargin: "0% 0% -40% 0%"
            },
            once: !0
        })
    }
}).register();
(class extends g {
    static componentName = "GL";
    static isLocal = !0;
    static isDisableAutoPlayScroll = !0;
    stats;
    gl;
    isInit = !1;
    storedDeltaTime = 0;
    timer = null;
    onInit() {
        super.onInit({
            autoClear: !1,
            pixelRatioMax: 1.5,
            alpha: !0
        }), this.nowBlur = 1, this.nowScene = 0, this.nowCamPos = 0, this.initGl()
    }
    initGl() {
        this.isInit || (this.isInit = !0, this.gl = m.create(this.el, {
            renderer: this.renderer,
            camera: this.camera,
            width: this.width,
            height: this.height,
            pixelRatio: this.pixelRatio,
            isLowerPage: !0
        }), this.emitSelfResize(), this.el.addEventListener("blurchabge", this.blurChange), this.el.addEventListener("scenechange", this.sceneChange), this.el.addEventListener("camerachange", this.cameraChange))
    }
    blurChange = t => {
        const s = Math.max(t.detail.progress(), 0);
        this.nowBlur !== s && (requestAnimationFrame(() => {
            this.stats?.begin(), this.gl.blur(s), this.gl.render(), this.stats?.end()
        }), this.nowBlur = s)
    };
    sceneChange = t => {
        const s = t.detail.progress();
        this.nowScene !== s && (requestAnimationFrame(() => {
            this.stats?.begin(), this.gl.insertPlug(s), this.gl.render(), this.stats?.end()
        }), this.nowScene = s)
    };
    cameraChange = t => {
        const s = t.detail.progress();
        this.nowCamPos !== s && (requestAnimationFrame(() => {
            this.stats?.begin(), this.gl.moveCamera(s), this.gl.render(), this.stats?.end()
        }), this.nowCamPos = s)
    };
    renderCheck() {}
    onLoadDone() {
        this.gl.blur(1), this.gl.initForLowerPage(), this.gl.render()
    }
    onResize() {
        super.onResize(), this.gl?.resize(this.width, this.height, this.pixelRatio)
    }
}).register();
(class extends h {
    static componentName = "mission-split";
    isScrollEnter = !1;
    onInit() {}
    onIntersect({
        isIntersecting: t
    }) {
        t ? (this.el.style.willChange = "background-size", this.playScroll()) : (this.pauseScroll(), this.el.style.willChange = "")
    }
    onScroll({
        scroll: t
    }) {
        if (this.scrollStart <= t && t <= this.scrollEnd) {
            this.isScrollEnter || (this.isScrollEnter = !0, this.windowHeight || (this.windowHeight = window.innerHeight));
            const s = Math.max((1 + (t - this.scrollStart) / this.scrollDistance - 1) * 1.11, 0);
            this.maskTween = r.scrub(this.el, {
                backgroundSize: `${s*100}% 100%`,
                duration: .2
            })
        } else this.isScrollEnter && (this.isScrollEnter = !1, this.maskTween && (this.maskTween.kill(), this.maskTween = void 0), this.overPosition = scrollY < this.scrollStart ? "top" : "bottom", this.setOverStyle())
    }
    setOverStyle(t = !1) {
        this.overPosition === "top" ? a.set(this.el, {
            backgroundSize: "0% 100%"
        }) : a.set(this.el, {
            backgroundSize: "111% 100%"
        })
    }
    onResize({
        windowWidth: t,
        windowHeight: s
    }) {
        const {
            scrollY: i
        } = this, {
            top: l,
            bottom: n,
            height: e
        } = this.el.getBoundingClientRect();
        this.windowHeight = s, this.scrollStart = l + i - s * .7, this.scrollEnd = this.scrollStart + e, this.scrollDistance = this.scrollEnd - this.scrollStart, (!this.windowHeight || i < this.scrollStart || i > this.scrollEnd) && (this.overPosition = i < this.scrollStart ? "top" : "bottom", this.setOverStyle(!0))
    }
}).register();
(class extends h {
    static componentName = "PluginFV";
    isScrollEnter = !1;
    onInit() {
        this.stickyContent = document.querySelector(".copy-wrapper"), this.bgGradation = document.querySelector(".gradation-bg"), this.overlayGradation = document.querySelector(".gradation-bgOver"), this.GL = document.querySelector(".GL"), this.eventSceneVal = {
            progress: 0
        }, this.sceneEvent = new CustomEvent("scenechange", {
            detail: {
                progress: () => this.eventSceneVal.progress
            }
        }), this.ioComponents = this.el?.querySelectorAll('[data-ref="ioSingle"]'), this.ioComponents.forEach((t, s) => {
            this.addIntersectionObserver({
                el: t,
                callback: ({
                    isIntersecting: i
                }, l) => {
                    i && t.classList.add("isIntersect")
                },
                param: {
                    rootMargin: "0% 0% -50% 0%"
                },
                once: !0
            })
        })
    }
    onIntersect({
        isIntersecting: t
    }) {
        t ? (this.bgGradation.style.willChange = "opacity", this.overlayGradation.style.willChange = "opacity", this.playScroll()) : (this.pauseScroll(), this.bgGradation.style.willChange = "", this.overlayGradation.style.willChange = "")
    }
    onScroll({
        scroll: t
    }) {
        if (this.scrollStart <= t && t <= this.scrollEnd) {
            this.isScrollEnter || (this.isScrollEnter = !0, this.windowHeight || (this.windowHeight = window.innerHeight));
            const s = 1 + ((t - this.scrollStart) / this.scrollDistance - 1);
            this.gradTween = r.scrub(this.bgGradation, {
                opacity: `${s}`,
                duration: .2
            }), !this.overlayGradation.classList.contains("isBlend") && s < 1 && this.overlayGradation.classList.add("isBlend"), this.overlayGradation.classList.contains("isBlend") && s === 0 && this.overlayGradation.classList.remove("isBlend"), this.overlayTween = r.scrub(this.overlayGradation, {
                opacity: `${s*.25}`,
                duration: .2
            }), this.glTween = r.scrub(this.eventSceneVal, {
                progress: s,
                duration: .2,
                onUpdate: () => {
                    this.GL.dispatchEvent(this.sceneEvent)
                }
            })
        } else this.isScrollEnter && (this.isScrollEnter = !1, this.overPosition = scrollY < this.scrollStart ? "top" : "bottom", this.gradTween && (this.gradTween.kill(), this.overlayTween.kill(), this.gradTween = void 0, this.overlayTween = void 0), this.setOverStyle())
    }
    setOverStyle(t = !1) {
        this.overPosition === "top" ? (a.set(this.bgGradation, {
            opacity: 0
        }), a.set(this.overlayGradation, {
            opacity: 0
        }), this.eventSceneVal.progress = 0, this.GL.dispatchEvent(this.sceneEvent), this.overlayGradation.classList.contains("isBlend") && this.overlayGradation.classList.remove("isBlend")) : (a.set(this.bgGradation, {
            opacity: 1
        }), a.set(this.overlayGradation, {
            opacity: .25
        }), this.eventSceneVal.progress = 1, this.GL.dispatchEvent(this.sceneEvent), this.overlayGradation.classList.contains("isBlend") || this.overlayGradation.classList.add("isBlend"))
    }
    onResize({
        windowWidth: t,
        windowHeight: s
    }) {
        const {
            scrollY: i
        } = this;
        this.stickyContent.style.position = "static";
        const {
            top: l,
            bottom: n
        } = this.el.getBoundingClientRect();
        this.stickyContent.style.position = "", this.windowHeight = s, this.scrollStart = l + i - s, this.scrollEnd = n + i, this.scrollDistance = this.scrollEnd - this.scrollStart, (i < this.scrollStart || i > this.scrollEnd) && (this.overPosition = i < this.scrollStart ? "top" : "bottom", this.setOverStyle(!0))
    }
}).register();