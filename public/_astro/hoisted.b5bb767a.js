var _Class;
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[r] = t),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
import {
  P as s,
  C as i
} from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
(class extends s {
  onInit() {
    this.addIntersectionObserver({
      el: this.refs.line,
      callback: ({ isIntersecting: e }, t) => {
        console.log("isIntersecting", e);
      },
      param: {
        rootMargin: "-15% 0%"
      },
      once: !0
    });
  }
}).register();
((_Class = class extends i {
  onInit() {
    this.el.classList.add("-backstage");
  }
  onIntersect({ isIntersecting: e }, t) {
    e && this.el.classList.remove("-backstage");
  }
}),
_defineProperty(_Class, "componentName", "PrivacyPolicyItem"),
_defineProperty(_Class, "intersectOptions", {
  rootMargin: "-30% 0%"
}),
_defineProperty(_Class, "intersectOnce", !0),
_Class).register();
