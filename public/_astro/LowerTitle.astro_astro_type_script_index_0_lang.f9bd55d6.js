import {
    C as e,
    m as i
  } from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
  (class extends e {
    static componentName = "gradation_bg";
    isScrollEnter = (() => !1)();
    onInit() {
      (this.bg = this.el.querySelector(".bg-grad")),
        (this.isAnimate = !this.el?.classList.contains("-none")),
        this.el.classList.remove("addMaskImage"),
        requestAnimationFrame(() => {
          this.el.classList.add("addMaskImage");
        }),
        this.addIntersectionObserver({
          el: this.el,
          callback: ({ isIntersecting: s }, t) => {
            s
              ? this.bg.classList.contains("-noAnim") ||
                this.bg.classList.add("isAnimate")
              : this.bg.classList.contains("-noAnim") ||
                this.bg.classList.remove("isAnimate");
          },
          param: {
            rootMargin: "0% 0% 0% 0%"
          },
          once: !1
        }),
        this.addIntersectionObserver({
          el: this.el,
          callback: ({ isIntersecting: s }, t) => {
            s
              ? this.el.classList.add("isIntersect")
              : this.el.classList.remove("isIntersect");
          },
          param: {
            rootMargin: "0% 0% -50% 0%"
          },
          once: !1
        });
    }
  }).register();
  (class extends e {
    static componentName = "LowerTitle";
    onInit() {
      if (
        ((this.pageTitle = this.el),
        (this.mainTxt = document.querySelector(".mainTxt")),
        (this.isSP = i.isSp),
        !this.isSP)
      ) {
        const { top: s } = this.mainTxt.getBoundingClientRect();
        this.pageTitle.style.top = s + "px";
      }
    }
    onResize({ windowWidth: s, windowHeight: t }) {
      if (((this.isSP = i.isSp), !this.isSP)) {
        const { top: a } = this.mainTxt.getBoundingClientRect();
        this.pageTitle.style.top = a + "px";
      }
    }
  }).register();
  