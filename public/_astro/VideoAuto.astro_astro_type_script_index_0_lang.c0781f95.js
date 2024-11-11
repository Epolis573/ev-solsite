import {
    C as d,
    V as u,
    a as v,
    i as y,
    g as h,
    m as p,
    b as P
  } from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
  (class extends d {}).register();
  class b {
    constructor(t, e, s, r) {
      (this.canvas = t),
        (this.startColor = s),
        (this.endColor = r),
        (this.ctx = this.canvas.getContext("2d")),
        (this.endAngle = 2 * Math.PI);
    }
    drawCircle(t) {
      if (t.top > 0 && t.top < this.canvas.height - t.width) {
        const e = t.width / 2;
        (this.ctx.fillStyle = `rgba(${t.color[0]}, ${t.color[1]}, ${t.color[2]}, 0.4)`),
          this.ctx.beginPath(),
          this.ctx.arc(t.left + e, t.top + e, e, 0, this.endAngle),
          this.ctx.fill();
      }
      (this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)"),
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    resizeCanvas(t, e) {
      (this.canvas.width = this.canvas.clientWidth), (this.canvas.height = e);
    }
  }
  function f(i) {
    return i.charAt(0) == "#" ? i.substring(1, 7) : i;
  }
  function m(i) {
    var t = [];
    return (
      (t[0] = parseInt(f(i).substring(0, 2), 16)),
      (t[1] = parseInt(f(i).substring(2, 4), 16)),
      (t[2] = parseInt(f(i).substring(4, 6), 16)),
      t
    );
  }
  function A(i, t, e) {
    const s = m(i),
      r = m(t),
      a = e;
    let o = 0;
    const c = [];
    for (let n = 0; n < a; n++) {
      const l = [];
      (o += 1 / a),
        (l[0] = s[0] * o + (1 - o) * r[0]),
        (l[1] = s[1] * o + (1 - o) * r[1]),
        (l[2] = s[2] * o + (1 - o) * r[2]),
        c.push(l);
    }
    return c;
  }
  (class extends d {
    static componentName = "Flow";
    static selectorRoot = "[data-parallax-flow]";
    isScrollEnter = (() => !1)();
    onInit() {
      (this.movieCircle = this.el?.querySelector(".bgMovie")),
        (this.lineBg = this.el?.querySelector(".bgContainer")),
        (this.sectionFirst = this.el?.querySelector(".firstFlow")),
        (this.videoComponents = this.el
          ?.querySelector(".bgMovie")
          .querySelectorAll("video")),
        (this.videoArray = []),
        this.videoComponents.forEach((e) => {
          this.videoArray.push(new u(e));
        }),
        (this.canvas = this.el?.querySelector("canvas")),
        (this.repeatParent = this.el?.querySelector(".repeat-parent")),
        (this.drawCanvas = new b(this.canvas, this.el)),
        (this.colorArray = A("#28ad5c", "#3289c7", 100)),
        (this.urlBarDifference = 0);
      const { top: i, bottom: t } = this.el.getBoundingClientRect();
      (this.ioStart = i + scrollY - window.innerHeight),
        (this.ioEnd = t + scrollY),
        (this.firstLoad = !0);
    }
    onIntersect({ isIntersecting: i }) {
      i
        ? this.isSP ||
          (this.firstLoad &&
            (this.videoArray.forEach((t, e) => {
              e > 0 && t.load();
            }),
            (this.firstLoad = !1)),
          (this.movieCircle.style.willChange = "transform"),
          (this.repeatParent.style.willChange = "transform"),
          this.playScroll(),
          v.ticker.add(this.onTick),
          window.scrollY < this.ioStart + (this.ioEnd - this.ioStart) / 2
            ? this.videoCheck(0)
            : this.videoCheck(1))
        : this.isSP ||
          (this.pauseScroll(),
          v.ticker.remove(this.onTick),
          (this.movieCircle.style.willChange = ""),
          (this.repeatParent.style.willChange = ""),
          this.videoArray.forEach((t) => {
            t.pause();
          }));
    }
    onTick() {
      this.circleBound &&
        this.circleBound.color &&
        this.drawCanvas.drawCircle(this.circleBound);
    }
    onScroll({ scroll: i }) {
      if (!this.isSP && this.scrollStart <= i && i <= this.scrollEnd) {
        this.isScrollEnter || (this.isScrollEnter = !0),
          y && (this.urlBarDifference = window.innerHeight - this.windowHeight),
          (this.circleBound.top =
            i - this.scrollStart + this.urlBarDifference / 2);
        const t = 1 + (this.circleBound.top / this.scrollDistance - 1),
          e = Math.abs(((4 * t) % 2) - 1),
          s = e * this.moveX - this.moveX,
          r = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${s},0,0,1)`,
          a = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${t * -this.repeatUp},0,1)`;
        v.set(this.movieCircle, {
          transform: `${r}`
        }),
          (this.tweenRepeat = h.scrub(this.repeatParent, {
            transform: `${a}`,
            duration: 0.2
          })),
          this.videoCheck(t),
          this.isSP ||
            ((this.circleBound.left = this.leftCircle + s),
            (this.circleBound.color = this.colorArray[Math.floor(e * 100)]));
      } else
        this.isScrollEnter &&
          ((this.isScrollEnter = !1),
          v.set(this.movieCircle, {
            transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1)"
          }),
          i > this.scrollEnd
            ? (this.videoCheck(1),
              (this.circleBound.top = this.scrollEnd),
              (this.circleBound.left = this.leftCircle),
              (this.tweenRepeat = h.scrub(this.repeatParent, {
                transform: `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${-this
                  .repeatUp},0,1)`,
                duration: 0.1
              })))
            : (this.videoCheck(0),
              (this.circleBound.top = 0),
              (this.circleBound.left = this.leftCircle),
              (this.tweenRepeat = h.scrub(this.repeatParent, {
                transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",
                duration: 0.1
              }))));
    }
    videoCheck(i) {
      const t = i % 0.25 > 0.2 ? 1 : 0,
        e = Math.floor(i / 0.25) + t,
        s = Math.max(e - 1, 0);
      Math.min((i % 0.25) * 4, 1) >= 0 &&
        (e !== s && this.videoArray[s].pause(),
        this.videoArray[e].play(),
        this.videoComponents[e].classList.add("current"),
        this.videoComponents.forEach((a, o) => {
          o > e && a.classList.remove("current");
        }));
    }
    onResize({ windowWidth: i, windowHeight: t }) {
      (this.movieCircle.style.transform = ""),
        !this.isSP &&
          p.isSp &&
          this.videoArray.forEach((S) => {
            S.pause();
          }),
        (this.isSP = p.isSp);
      const { scrollY: e } = this,
        {
          width: s,
          height: r,
          top: a,
          bottom: o
        } = this.el.getBoundingClientRect(),
        {
          width: c,
          height: n,
          left: l
        } = this.movieCircle.getBoundingClientRect(),
        { width: g } = this.lineBg.getBoundingClientRect(),
        { height: w } = this.sectionFirst.getBoundingClientRect(),
        C = (t - n) / 2 + n;
      (this.windowHeight = t),
        (this.repeatUp = this.windowHeight * 0.4),
        (this.moveX = g * 0.91 - c / 2),
        (this.ioStart = a + e - t),
        (this.ioEnd = o + e),
        (this.scrollStart = a + C + e - t),
        (this.scrollEnd = this.scrollStart + w * 4),
        (this.scrollDistance = this.scrollEnd - this.scrollStart),
        this.isSP ||
          ((this.leftCircle = l),
          (this.circleBound = {
            width: c,
            height: n
          }),
          this.drawCanvas.resizeCanvas(s, r),
          this.drawCanvas.clearCanvas);
    }
  }).register();
  (class extends d {
    static componentName = "FeatureItem";
    onInit() {
      (this.movieParent = this.el.querySelector(".image")),
        (this.video = this.el.querySelector("video")),
        (this.isSP = p.isSp),
        (this.videoComponent = new u(this.video)),
        this.isSP && this.videoComponent.load(),
        this.isSP ||
          h.set(this.movie, {
            autoAlpha: 0,
            scale: 0.8
          }),
        this.addIntersectionObserver({
          el: this.movieParent,
          callback: ({ isIntersecting: i }, t) => {
            i && !this.isSP && this.videoComponent.load(),
              i && this.isSP
                ? (this.movieParent.classList.add("isIntersect"),
                  this.videoComponent.pause(),
                  (this.video.currentTime = 0),
                  this.videoComponent.play())
                : !i &&
                  this.isSP &&
                  this.movieParent.classList.remove("isIntersect");
          },
          param: {
            rootMargin: "0% 0% 0% 0%"
          },
          once: !1
        });
    }
    onMouseenter() {
      this.isSP ||
        (this.tween && (this.tween.kill(), (this.tween = void 0)),
        this.videoComponent.pause(),
        (this.video.currentTime = 0),
        (this.tl = h.timeline()),
        this.tl
          .to(this.movieParent, {
            autoAlpha: 1,
            duration: 0.4,
            ease: "power4.out",
            onStart: () => {
              this.videoComponent.play();
            }
          })
          .to(this.movieParent, {
            autoAlpha: 0,
            duration: 0.4,
            delay: this.video.duration - 0.8,
            ease: "power2.out"
          }));
    }
    onMouseleave() {
      this.isSP ||
        (this.tl && (this.tl.kill(), (this.tl = void 0)),
        (this.tween = h.to(this.movieParent, {
          autoAlpha: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            this.videoComponent.pause();
          }
        })));
    }
    onResize({ windowWidth: i, windowHeighwwqwet: t }) {
      (this.isSP = p.isSp),
        this.isSP ||
          (this.movieParent.classList.remove("isIntersect"),
          h.set(this.movieParent, {
            autoAlpha: 0
          }));
    }
  }).register();
  (class extends d {
    static componentName = "FlowChild";
    onInit() {
      (this.flowBg = this.el.querySelector(".flowchild-bg")),
        this.addIntersectionObserver({
          el: this.flowBg,
          callback: ({ isIntersecting: i }, t) => {
            i && this.flowBg.classList.add("isIntersect");
          },
          param: {
            rootMargin: "0% 0% -100% 0%"
          },
          once: !0
        });
    }
  }).register();
  const x = 0;
  (class extends d {
    static componentName = "VideoAuto";
    isIntersecting = (() => !1)();
    onInit() {
      const { delay: i = 0, thumbnailTime: t = x } = this.el.dataset.cVideoAuto
        ? JSON.parse(this.el.dataset.cVideoAuto)
        : {};
      (this.video = new u(this.el, {
        thumbnailTime: t
      })),
        (this.delay = i);
    }
    play() {
      this.video.play();
    }
    pause() {
      this.video.pause();
    }
    onIntersect({ isIntersecting: i }) {
      (this.isIntersecting = i),
        i
          ? P
            ? gsap.delayedCall(this.delay, () => {
                this.play();
              })
            : this.play()
          : this.pause();
    }
    onOpenModal() {
      this.pause();
    }
    onStartCloseModal() {
      this.isIntersecting && this.play();
    }
  }).register();
  