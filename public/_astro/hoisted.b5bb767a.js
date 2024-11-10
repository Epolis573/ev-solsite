import {
    P as s,
    C as i
} from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
(class extends s {
    onInit() {
        this.addIntersectionObserver({
            el: this.refs.line,
            callback: ({
                isIntersecting: e
            }, t) => {
                console.log("isIntersecting", e)
            },
            param: {
                rootMargin: "-15% 0%"
            },
            once: !0
        })
    }
}).register();
(class extends i {
    static componentName = "PrivacyPolicyItem";
    onInit() {
        this.el.classList.add("-backstage")
    }
    static intersectOptions = {
        rootMargin: "-30% 0%"
    };
    static intersectOnce = !0;
    onIntersect({
        isIntersecting: e
    }, t) {
        e && this.el.classList.remove("-backstage")
    }
}).register();