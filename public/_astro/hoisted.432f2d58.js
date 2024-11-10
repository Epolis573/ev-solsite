import {
    P as o,
    C as a,
    e as n,
    g as i,
    S as l,
    M as h,
    v as r
} from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
import "./GradationBgOnFv.astro_astro_type_script_index_0_lang.bd8de35a.js";
(class extends o {
    onInit() {
        this.on("mouseenterNewsItem", e => this.focusItem(e)), this.on("mouseleaveNewsItem", e => this.blurItem(e))
    }
    onEnter() {}
    onMouseenter() {}
    focusItem(e) {
        this.$items = this.el?.querySelectorAll(".NewsItem"), this.$items.forEach((t, s) => {
            s == e ? t.classList.add("-focus") : t.classList.add("-blur")
        })
    }
    blurItem(e) {
        this.$items.forEach((t, s) => {
            t.classList.remove("-blur", "-focus")
        })
    }
}).register();
(class extends a {
    static componentName = "NewsItem";
    onInit() {
        this.index = this.el.dataset.index
    }
    onMouseenter() {
        n.emit("mouseenterNewsItem", this.index)
    }
    onMouseleave(e) {
        n.emit("mouseleaveNewsItem", this.index)
    }
}).register();
(class extends a {
    static componentName = "LowerFv2";
    static intersectOptions = {
        rootMargin: "0% 0%"
    };
    onInit() {
        this.mainTxt = this.refs.titleMain, this.subTxt = this.refs.titleSub
    }
    onScroll({
        scroll: e
    }) {
        this.scrollStart <= e && e <= this.scrollEnd ? (this.isScrollEnter || (this.isScrollEnter = !0, this.showTitle()), this.onScrollHandler(e)) : this.isScrollEnter && e >= 0 && (this.isScrollEnter = !1, this.hideTitle(), this.mainTween && (this.mainTween.kill(), this.subTween.kill(), this.mainTween = void 0, this.subTween = void 0), gsap.set(this.mainTxt, {
            opacity: "0",
            filter: "blur(0px)",
            transform: "none"
        }), gsap.set(this.subTxt, {
            opacity: "0",
            filter: "blur(0px)",
            transform: "none"
        }))
    }
    onResize({
        windowWidth: e,
        windowHeight: t
    }) {
        this.mainTxt.style.opacity = "", this.mainTxt.style.filter = "", this.mainTxt.style.transform = "", this.subTxt.style.opacity = "", this.subTxt.style.filter = "", this.subTxt.style.transform = "";
        const {
            scrollY: s
        } = this;
        this.el.getBoundingClientRect(), this.scrollStart = 0, this.scrollEnd = t * .2, this.scrollDistance = this.scrollEnd - this.scrollStart, this.onScrollHandler(s)
    }
    onScrollHandler(e) {
        const t = 1 - e / this.scrollDistance * 1,
            s = e / this.scrollDistance * 1 * 6;
        this.mainTween = i.scrub(this.mainTxt, {
            opacity: `${t}`,
            filter: `blur(${s}px)`,
            duration: .2
        }), this.subTween = i.scrub(this.subTxt, {
            opacity: `${t}`,
            filter: `blur(${s}px)`,
            duration: .2
        })
    }
    showTitle() {
        this.refs.title.style.display = "block"
    }
    hideTitle() {
        this.refs.title.style.display = "none"
    }
}).register();
(class extends a {
    static componentName = "FilterBlock";
    onInit() {
        this.select = [...this.el.querySelectorAll("[data-sort-item-input]")][0], this.onChangeHandler = this.onChange.bind(this), this.select.addEventListener("change", this.onChangeHandler), this.onChangeHandler()
    }
    onChange(e) {
        this.refs.currentTag.innerHTML = this.select.value
    }
    onDestroy() {
        this.select.removeEventListener("change", this.onChangeHandler)
    }
}).register();
(class extends a {
    static componentName = "ReadMore";
    onInit() {
        this.index = this.el.dataset.index, this.splitTarget = new l(this.refs.item, {
            type: "chars",
            charsClass: "item-actor"
        });
        let e = gsap.utils.shuffle([0, 1, 2, 3, 4, 5, 6, 7]);
        this.splitTarget.chars.forEach((t, s) => {
            t.dataset.delayIndex = e[s]
        }), this.marquee = h.create(this.el), this.on("mouseenterNewsItem", t => {
            t == this.index && this.activateMarquee()
        }), this.on("mouseleaveNewsItem", t => {
            t == this.index && this.deactivateMarquee()
        })
    }
    activateMarquee() {
        this.marquee.play(), this.el.classList.add("-active")
    }
    deactivateMarquee() {
        this.marquee.pause(), this.el.classList.remove("-active")
    }
}).register();
(class extends a {
    static componentName = "ButtonPager";
    onInit() {
        this.arrowDefault = this.refs["arrow-default"], this.arrowHover = this.refs["arrow-hover"]
    }
    onMouseenter() {
        i.fromTo(this.arrowDefault, {
            x: 0
        }, {
            autoAlpha: 0,
            x: r(15),
            duration: .6,
            ease: "Power4.easeOut"
        }), i.fromTo(this.arrowHover, {
            x: r(-15)
        }, {
            autoAlpha: 1,
            x: 0,
            duration: .8,
            ease: "Expo.easeOut"
        })
    }
    onMouseleave() {
        i.fromTo(this.arrowHover, {
            x: 0
        }, {
            autoAlpha: 0,
            x: r(15),
            duration: .6,
            ease: "Power4.easeOut"
        }), i.fromTo(this.arrowDefault, {
            x: r(-15)
        }, {
            autoAlpha: 1,
            x: 0,
            duration: .8,
            ease: "Expo.easeOut"
        })
    }
}).register();