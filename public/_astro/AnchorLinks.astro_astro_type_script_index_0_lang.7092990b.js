import {
    C as i,
    S as o,
    a as n,
    s as l
  } from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
  (class extends i {
    static componentName = "SectionTitle";
    onInit() {
      if (this.el?.classList.contains("js_io")) {
        const e = [];
        (this.splitTarget = new o(this.el?.querySelector(".title-ja"), {
          type: "chars",
          charsClass: "SectionTitle-splitTxt"
        })),
          this.splitTarget.chars.forEach((s, r) => {
            e.push(0.3 * n.utils.random(0, 1)),
              (s.style.transitionDelay = `${e[r]}s,${e[r]}s,${e[r]}s`),
              (s.style.opacity = 0),
              (s.style.filter = `blur(${e[r] * 10}px)`),
              (s.style.transform = `translateZ(${(0.5 + e[r] / 2) * 12}vw)`);
          }),
          this.addIntersectionObserver({
            el: this.el,
            callback: ({ isIntersecting: s }, r) => {
              s &&
                (this.el.classList.add("isIntersect_title"),
                this.splitTarget.chars.forEach((a, c) => {
                  (a.style.opacity = 1),
                    (a.style.filter = "blur(0px)"),
                    (a.style.transform = "translateZ(0vw)");
                }));
            },
            param: {
              rootMargin: "0% 0% -20% 0%"
            },
            once: !0
          });
      }
    }
  }).register();
  (class extends i {
    static componentName = "AnchorLinks";
    onInit() {
      (this.anchorLinks = this.el.querySelectorAll("a")),
        this.anchorLinks.forEach((t, e) => {
          if (!l.view.querySelector(t.getAttribute("href"))) {
            t.parentElement.remove();
            return;
          }
          t.addEventListener("click", this.ankerScroll);
        });
    }
    ankerScroll(t) {
      switch ((t.preventDefault(), t.target.getAttribute("data-second"))) {
        case "secondView":
          gsap.to(window, {
            duration: 1.2,
            ease: "power3.out",
            scrollTo: {
              y: t.target.getAttribute("href"),
              offsetY: -window.innerHeight,
              autoKill: !1
            }
          });
          break;
        case "secondViewWHY":
          gsap.to(window, {
            duration: 1.2,
            ease: "power3.out",
            scrollTo: {
              y: window.innerHeight * 2,
              autoKill: !1
            }
          });
          break;
        default:
          gsap.to(window, {
            duration: 1.2,
            ease: "power3.out",
            scrollTo: {
              y: t.target.getAttribute("href"),
              autoKill: !1
            }
          });
      }
    }
    onEnterCompleted() {
      this.anchorLinks.forEach((t, e) => {
        t.removeEventListener("click", this.ankerScroll);
      }),
        (this.anchorLinks = void 0);
    }
  }).register();
  