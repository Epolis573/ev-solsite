import { C as a } from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
const t = {
    src: "/_astro/brush_border_top.6d828e83.png",
    width: 1600,
    height: 306,
    format: "png"
  },
  n = {
    src: "/_astro/brush_border_bottom.96228be0.png",
    width: 1600,
    height: 306,
    format: "png"
  };
(class extends a {
  static componentName = "BrushContainer";
  onInit() {
    if (this.el.classList.contains("-top")) {
      this.el.classList.remove("-top");
      const s = new Image();
      (s.onload = () => {
        this.el.classList.add("-top");
      }),
        (s.src = t.src);
    }
    if (this.el.classList.contains("-bottom")) {
      this.el.classList.remove("-bottom");
      const s = new Image();
      (s.onload = () => {
        this.el.classList.add("-bottom");
      }),
        (s.src = n.src);
    }
    if (this.el.classList.contains("-both")) {
      this.el.classList.remove("-both");
      let s = !1,
        o = !1;
      const e = new Image();
      (e.onload = () => {
        (s = !0), o && this.el.classList.add("-both");
      }),
        (e.src = t.src);
      const i = new Image();
      (i.onload = () => {
        (o = !0), s && this.el.classList.add("-both");
      }),
        (i.src = t.src);
    }
  }
}).register();
