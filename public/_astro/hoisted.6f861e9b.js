import {
    P as s,
    C as l
  } from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
  import "./GradationBgOnFv.astro_astro_type_script_index_0_lang.bd8de35a.js";
  (class extends s {}).register();
  (class extends l {
    static componentName = "PaginationOnDetail";
    onInit() {
      (this.titles = [...this.el.querySelectorAll(".title")]),
        this.setTitleHeight();
    }
    onResize() {
      this.setTitleHeight();
    }
    setTitleHeight() {
      let t = 0;
      this.titles.forEach((e) => {
        const i = e.clientHeight;
        i > t && (t = i);
      }),
        this.titles.forEach((e) => {
          e.style.height = t + "px";
        });
    }
  }).register();
  