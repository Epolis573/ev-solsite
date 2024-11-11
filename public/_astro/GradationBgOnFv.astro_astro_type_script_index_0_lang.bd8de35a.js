import { C as e } from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
(class extends e {
  static componentName = "GradationBgOnFv";
  static intersectOptions = {
    rootMargin: "0% 0% 0% 0%"
  };
  onInit() {
    (this.bg = this.el.querySelector(".bg-grad-container")),
      this.randomAnimationStart(this.bg.querySelector(".bg-grad1"), 18),
      this.randomAnimationStart(this.bg.querySelector(".bg-grad2"), 32),
      this.randomAnimationStart(this.bg.querySelector(".bg-grad3"), 20);
  }
  onIntersect({ isIntersecting: t }) {
    t
      ? ((this.bg.style.willChange = "transform,opacity"),
        this.bg.classList.add("isAnimate"))
      : ((this.bg.style.willChange = ""),
        this.bg.classList.remove("isAnimate"));
  }
  randomAnimationStart(t, i) {
    const a = "animation-delay:-" + Math.floor(Math.random() * i) + "s";
    t.setAttribute("style", a);
  }
}).register();
