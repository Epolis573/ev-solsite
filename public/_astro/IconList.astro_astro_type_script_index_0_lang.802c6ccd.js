import { C as r } from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
import { L as o } from "./lottie.bd4b17b2.js";
(class extends r {
  static componentName = "IconList";
  onInit() {
    (this.iconDom = this.el?.querySelectorAll(".head-icon")),
      (this.iconArray = []),
      (this.delayArray = []),
      this.iconDom.forEach((a, t) => {
        this.delayArray.push({
          timer: null,
          delay: Math.random() * 3e3 + 1e3
        });
      }),
      this.iconDom.forEach((a, t) => {
        const e = o.loadAnimation({
          container: a,
          renderer: "svg",
          autoplay: !1,
          loop: !1,
          path: a.getAttribute("data-path")
        });
        this.iconArray.push(e),
          e.addEventListener("complete", () => {
            clearTimeout(this.delayArray[t].timer),
              (this.delayArray[t].delay = Math.random() * 3e3 + 1e3),
              (this.delayArray[t].timer = setTimeout(() => {
                this.iconArray[t].goToAndPlay(0);
              }, this.delayArray[t].delay));
          });
      }),
      this.iconDom.forEach((a, t) => {
        this.addIntersectionObserver({
          el: a,
          callback: ({ isIntersecting: e }, i) => {
            e
              ? (this.iconArray[t].goToAndStop(0),
                (this.delayArray[t].timer = setTimeout(() => {
                  this.iconArray[t].play();
                }, this.delayArray[t].delay)))
              : (this.iconArray[t].pause(),
                this.iconArray[t].goToAndStop(0),
                clearTimeout(this.delayArray[t].timer));
          },
          param: {
            rootMargin: "0% 0% 0% 0%"
          },
          once: !1
        });
      });
  }
  onEnterCompleted() {
    this.iconArray.forEach((a, t) => {
      a.destroy();
    });
  }
}).register();
