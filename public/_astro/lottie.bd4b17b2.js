import {
    x as commonjsGlobal,
    y as getDefaultExportFromCjs
} from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
var lottie = {
    exports: {}
};
(function(module, exports) {
    typeof navigator < "u" && function(t, e) {
        module.exports = e()
    }(commonjsGlobal, function() {
        var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            _useWebWorker = !1,
            initialDefaultFrame = -999999,
            setWebWorker = function(e) {
                _useWebWorker = !!e
            },
            getWebWorker = function() {
                return _useWebWorker
            },
            setLocationHref = function(e) {
                locationHref = e
            },
            getLocationHref = function() {
                return locationHref
            };

        function createTag(t) {
            return document.createElement(t)
        }

        function extendPrototype(t, e) {
            var r, i = t.length,
                s;
            for (r = 0; r < i; r += 1) {
                s = t[r].prototype;
                for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e.prototype[a] = s[a])
            }
        }

        function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction(t) {
            function e() {}
            return e.prototype = t, e
        }
        var audioControllerFactory = function() {
                function t(e) {
                    this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1
                }
                return t.prototype = {
                        addAudio: function(r) {
                            this.audios.push(r)
                        },
                        pause: function() {
                            var r, i = this.audios.length;
                            for (r = 0; r < i; r += 1) this.audios[r].pause()
                        },
                        resume: function() {
                            var r, i = this.audios.length;
                            for (r = 0; r < i; r += 1) this.audios[r].resume()
                        },
                        setRate: function(r) {
                            var i, s = this.audios.length;
                            for (i = 0; i < s; i += 1) this.audios[i].setRate(r)
                        },
                        createAudio: function(r) {
                            return this.audioFactory ? this.audioFactory(r) : window.Howl ? new window.Howl({
                                src: [r]
                            }) : {
                                isPlaying: !1,
                                play: function() {
                                    this.isPlaying = !0
                                },
                                seek: function() {
                                    this.isPlaying = !1
                                },
                                playing: function() {},
                                rate: function() {},
                                setVolume: function() {}
                            }
                        },
                        setAudioFactory: function(r) {
                            this.audioFactory = r
                        },
                        setVolume: function(r) {
                            this._volume = r, this._updateVolume()
                        },
                        mute: function() {
                            this._isMuted = !0, this._updateVolume()
                        },
                        unmute: function() {
                            this._isMuted = !1, this._updateVolume()
                        },
                        getVolume: function() {
                            return this._volume
                        },
                        _updateVolume: function() {
                            var r, i = this.audios.length;
                            for (r = 0; r < i; r += 1) this.audios[r].volume(this._volume * (this._isMuted ? 0 : 1))
                        }
                    },
                    function() {
                        return new t
                    }
            }(),
            createTypedArray = function() {
                function t(r, i) {
                    var s = 0,
                        a = [],
                        n;
                    switch (r) {
                        case "int16":
                        case "uint8c":
                            n = 1;
                            break;
                        default:
                            n = 1.1;
                            break
                    }
                    for (s = 0; s < i; s += 1) a.push(n);
                    return a
                }

                function e(r, i) {
                    return r === "float32" ? new Float32Array(i) : r === "int16" ? new Int16Array(i) : r === "uint8c" ? new Uint8ClampedArray(i) : t(r, i)
                }
                return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t
            }();

        function createSizedArray(t) {
            return Array.apply(null, {
                length: t
            })
        }

        function _typeof$6(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$6 = function(r) {
                return typeof r
            } : _typeof$6 = function(r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }, _typeof$6(t)
        }
        var subframeEnabled = !0,
            expressionsPlugin = null,
            expressionsInterfaces = null,
            idPrefix$1 = "",
            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            bmPow = Math.pow,
            bmSqrt = Math.sqrt,
            bmFloor = Math.floor,
            bmMax = Math.max,
            bmMin = Math.min,
            BMMath = {};
        (function() {
            var t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                e, r = t.length;
            for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
        })(), BMMath.random = Math.random, BMMath.abs = function(t) {
            var e = _typeof$6(t);
            if (e === "object" && t.length) {
                var r = createSizedArray(t.length),
                    i, s = t.length;
                for (i = 0; i < s; i += 1) r[i] = Math.abs(t[i]);
                return r
            }
            return Math.abs(t)
        };
        var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = .5519;

        function styleDiv(t) {
            t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(t, e, r, i) {
            this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
            this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, r, i) {
            this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, r) {
            this.type = t, this.firstFrame = e, this.totalFrames = r
        }

        function BMDestroyEvent(t, e) {
            this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent(t, e) {
            this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent(t) {
            this.type = "configError", this.nativeError = t
        }
        var createElementID = function() {
            var t = 0;
            return function() {
                return t += 1, idPrefix$1 + "__lottie_element_" + t
            }
        }();

        function HSVtoRGB(t, e, r) {
            var i, s, a, n, h, o, p, d;
            switch (n = Math.floor(t * 6), h = t * 6 - n, o = r * (1 - e), p = r * (1 - h * e), d = r * (1 - (1 - h) * e), n % 6) {
                case 0:
                    i = r, s = d, a = o;
                    break;
                case 1:
                    i = p, s = r, a = o;
                    break;
                case 2:
                    i = o, s = r, a = d;
                    break;
                case 3:
                    i = o, s = p, a = r;
                    break;
                case 4:
                    i = d, s = o, a = r;
                    break;
                case 5:
                    i = r, s = o, a = p;
                    break
            }
            return [i, s, a]
        }

        function RGBtoHSV(t, e, r) {
            var i = Math.max(t, e, r),
                s = Math.min(t, e, r),
                a = i - s,
                n, h = i === 0 ? 0 : a / i,
                o = i / 255;
            switch (i) {
                case s:
                    n = 0;
                    break;
                case t:
                    n = e - r + a * (e < r ? 6 : 0), n /= 6 * a;
                    break;
                case e:
                    n = r - t + a * 2, n /= 6 * a;
                    break;
                case r:
                    n = t - e + a * 4, n /= 6 * a;
                    break
            }
            return [n, h, o]
        }

        function addSaturationToRGB(t, e) {
            var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
            return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addBrightnessToRGB(t, e) {
            var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
            return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addHueToRGB(t, e) {
            var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
            return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
        }
        var rgbToHex = function() {
                var t = [],
                    e, r;
                for (e = 0; e < 256; e += 1) r = e.toString(16), t[e] = r.length === 1 ? "0" + r : r;
                return function(i, s, a) {
                    return i < 0 && (i = 0), s < 0 && (s = 0), a < 0 && (a = 0), "#" + t[i] + t[s] + t[a]
                }
            }(),
            setSubframeEnabled = function(e) {
                subframeEnabled = !!e
            },
            getSubframeEnabled = function() {
                return subframeEnabled
            },
            setExpressionsPlugin = function(e) {
                expressionsPlugin = e
            },
            getExpressionsPlugin = function() {
                return expressionsPlugin
            },
            setExpressionInterfaces = function(e) {
                expressionsInterfaces = e
            },
            getExpressionInterfaces = function() {
                return expressionsInterfaces
            },
            setDefaultCurveSegments = function(e) {
                defaultCurveSegments = e
            },
            getDefaultCurveSegments = function() {
                return defaultCurveSegments
            },
            setIdPrefix = function(e) {
                idPrefix$1 = e
            };

        function createNS(t) {
            return document.createElementNS(svgNS, t)
        }

        function _typeof$5(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$5 = function(r) {
                return typeof r
            } : _typeof$5 = function(r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }, _typeof$5(t)
        }
        var dataManager = function() {
                var t = 1,
                    e = [],
                    r, i, s = {
                        onmessage: function() {},
                        postMessage: function(g) {
                            r({
                                data: g
                            })
                        }
                    },
                    a = {
                        postMessage: function(g) {
                            s.onmessage({
                                data: g
                            })
                        }
                    };

                function n(u) {
                    if (window.Worker && window.Blob && getWebWorker()) {
                        var g = new Blob(["var _workerSelf = self; self.onmessage = ", u.toString()], {
                                type: "text/javascript"
                            }),
                            y = URL.createObjectURL(g);
                        return new Worker(y)
                    }
                    return r = u, s
                }

                function h() {
                    i || (i = n(function(g) {
                        function y() {
                            function C(w, M) {
                                var _, E, A = w.length,
                                    V, k, O, N;
                                for (E = 0; E < A; E += 1)
                                    if (_ = w[E], "ks" in _ && !_.completed) {
                                        if (_.completed = !0, _.hasMask) {
                                            var z = _.masksProperties;
                                            for (k = z.length, V = 0; V < k; V += 1)
                                                if (z[V].pt.k.i) b(z[V].pt.k);
                                                else
                                                    for (N = z[V].pt.k.length, O = 0; O < N; O += 1) z[V].pt.k[O].s && b(z[V].pt.k[O].s[0]), z[V].pt.k[O].e && b(z[V].pt.k[O].e[0])
                                        }
                                        _.ty === 0 ? (_.layers = f(_.refId, M), C(_.layers, M)) : _.ty === 4 ? l(_.shapes) : _.ty === 5 && B(_)
                                    }
                            }

                            function c(w, M) {
                                if (w) {
                                    var _ = 0,
                                        E = w.length;
                                    for (_ = 0; _ < E; _ += 1) w[_].t === 1 && (w[_].data.layers = f(w[_].data.refId, M), C(w[_].data.layers, M))
                                }
                            }

                            function m(w, M) {
                                for (var _ = 0, E = M.length; _ < E;) {
                                    if (M[_].id === w) return M[_];
                                    _ += 1
                                }
                                return null
                            }

                            function f(w, M) {
                                var _ = m(w, M);
                                return _ ? _.layers.__used ? JSON.parse(JSON.stringify(_.layers)) : (_.layers.__used = !0, _.layers) : null
                            }

                            function l(w) {
                                var M, _ = w.length,
                                    E, A;
                                for (M = _ - 1; M >= 0; M -= 1)
                                    if (w[M].ty === "sh")
                                        if (w[M].ks.k.i) b(w[M].ks.k);
                                        else
                                            for (A = w[M].ks.k.length, E = 0; E < A; E += 1) w[M].ks.k[E].s && b(w[M].ks.k[E].s[0]), w[M].ks.k[E].e && b(w[M].ks.k[E].e[0]);
                                else w[M].ty === "gr" && l(w[M].it)
                            }

                            function b(w) {
                                var M, _ = w.i.length;
                                for (M = 0; M < _; M += 1) w.i[M][0] += w.v[M][0], w.i[M][1] += w.v[M][1], w.o[M][0] += w.v[M][0], w.o[M][1] += w.v[M][1]
                            }

                            function P(w, M) {
                                var _ = M ? M.split(".") : [100, 100, 100];
                                return w[0] > _[0] ? !0 : _[0] > w[0] ? !1 : w[1] > _[1] ? !0 : _[1] > w[1] ? !1 : w[2] > _[2] ? !0 : _[2] > w[2] ? !1 : null
                            }
                            var x = function() {
                                    var w = [4, 4, 14];

                                    function M(E) {
                                        var A = E.t.d;
                                        E.t.d = {
                                            k: [{
                                                s: A,
                                                t: 0
                                            }]
                                        }
                                    }

                                    function _(E) {
                                        var A, V = E.length;
                                        for (A = 0; A < V; A += 1) E[A].ty === 5 && M(E[A])
                                    }
                                    return function(E) {
                                        if (P(w, E.v) && (_(E.layers), E.assets)) {
                                            var A, V = E.assets.length;
                                            for (A = 0; A < V; A += 1) E.assets[A].layers && _(E.assets[A].layers)
                                        }
                                    }
                                }(),
                                T = function() {
                                    var w = [4, 7, 99];
                                    return function(M) {
                                        if (M.chars && !P(w, M.v)) {
                                            var _, E = M.chars.length;
                                            for (_ = 0; _ < E; _ += 1) {
                                                var A = M.chars[_];
                                                A.data && A.data.shapes && (l(A.data.shapes), A.data.ip = 0, A.data.op = 99999, A.data.st = 0, A.data.sr = 1, A.data.ks = {
                                                    p: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    s: {
                                                        k: [100, 100],
                                                        a: 0
                                                    },
                                                    a: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    r: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    o: {
                                                        k: 100,
                                                        a: 0
                                                    }
                                                }, M.chars[_].t || (A.data.shapes.push({
                                                    ty: "no"
                                                }), A.data.shapes[0].it.push({
                                                    p: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    s: {
                                                        k: [100, 100],
                                                        a: 0
                                                    },
                                                    a: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    r: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    o: {
                                                        k: 100,
                                                        a: 0
                                                    },
                                                    sk: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    sa: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    ty: "tr"
                                                })))
                                            }
                                        }
                                    }
                                }(),
                                F = function() {
                                    var w = [5, 7, 15];

                                    function M(E) {
                                        var A = E.t.p;
                                        typeof A.a == "number" && (A.a = {
                                            a: 0,
                                            k: A.a
                                        }), typeof A.p == "number" && (A.p = {
                                            a: 0,
                                            k: A.p
                                        }), typeof A.r == "number" && (A.r = {
                                            a: 0,
                                            k: A.r
                                        })
                                    }

                                    function _(E) {
                                        var A, V = E.length;
                                        for (A = 0; A < V; A += 1) E[A].ty === 5 && M(E[A])
                                    }
                                    return function(E) {
                                        if (P(w, E.v) && (_(E.layers), E.assets)) {
                                            var A, V = E.assets.length;
                                            for (A = 0; A < V; A += 1) E.assets[A].layers && _(E.assets[A].layers)
                                        }
                                    }
                                }(),
                                R = function() {
                                    var w = [4, 1, 9];

                                    function M(E) {
                                        var A, V = E.length,
                                            k, O;
                                        for (A = 0; A < V; A += 1)
                                            if (E[A].ty === "gr") M(E[A].it);
                                            else if (E[A].ty === "fl" || E[A].ty === "st")
                                            if (E[A].c.k && E[A].c.k[0].i)
                                                for (O = E[A].c.k.length, k = 0; k < O; k += 1) E[A].c.k[k].s && (E[A].c.k[k].s[0] /= 255, E[A].c.k[k].s[1] /= 255, E[A].c.k[k].s[2] /= 255, E[A].c.k[k].s[3] /= 255), E[A].c.k[k].e && (E[A].c.k[k].e[0] /= 255, E[A].c.k[k].e[1] /= 255, E[A].c.k[k].e[2] /= 255, E[A].c.k[k].e[3] /= 255);
                                            else E[A].c.k[0] /= 255, E[A].c.k[1] /= 255, E[A].c.k[2] /= 255, E[A].c.k[3] /= 255
                                    }

                                    function _(E) {
                                        var A, V = E.length;
                                        for (A = 0; A < V; A += 1) E[A].ty === 4 && M(E[A].shapes)
                                    }
                                    return function(E) {
                                        if (P(w, E.v) && (_(E.layers), E.assets)) {
                                            var A, V = E.assets.length;
                                            for (A = 0; A < V; A += 1) E.assets[A].layers && _(E.assets[A].layers)
                                        }
                                    }
                                }(),
                                L = function() {
                                    var w = [4, 4, 18];

                                    function M(E) {
                                        var A, V = E.length,
                                            k, O;
                                        for (A = V - 1; A >= 0; A -= 1)
                                            if (E[A].ty === "sh")
                                                if (E[A].ks.k.i) E[A].ks.k.c = E[A].closed;
                                                else
                                                    for (O = E[A].ks.k.length, k = 0; k < O; k += 1) E[A].ks.k[k].s && (E[A].ks.k[k].s[0].c = E[A].closed), E[A].ks.k[k].e && (E[A].ks.k[k].e[0].c = E[A].closed);
                                        else E[A].ty === "gr" && M(E[A].it)
                                    }

                                    function _(E) {
                                        var A, V, k = E.length,
                                            O, N, z, q;
                                        for (V = 0; V < k; V += 1) {
                                            if (A = E[V], A.hasMask) {
                                                var H = A.masksProperties;
                                                for (N = H.length, O = 0; O < N; O += 1)
                                                    if (H[O].pt.k.i) H[O].pt.k.c = H[O].cl;
                                                    else
                                                        for (q = H[O].pt.k.length, z = 0; z < q; z += 1) H[O].pt.k[z].s && (H[O].pt.k[z].s[0].c = H[O].cl), H[O].pt.k[z].e && (H[O].pt.k[z].e[0].c = H[O].cl)
                                            }
                                            A.ty === 4 && M(A.shapes)
                                        }
                                    }
                                    return function(E) {
                                        if (P(w, E.v) && (_(E.layers), E.assets)) {
                                            var A, V = E.assets.length;
                                            for (A = 0; A < V; A += 1) E.assets[A].layers && _(E.assets[A].layers)
                                        }
                                    }
                                }();

                            function I(w) {
                                w.__complete || (R(w), x(w), T(w), F(w), L(w), C(w.layers, w.assets), c(w.chars, w.assets), w.__complete = !0)
                            }

                            function B(w) {
                                w.t.a.length === 0 && "m" in w.t.p
                            }
                            var D = {};
                            return D.completeData = I, D.checkColors = R, D.checkChars = T, D.checkPathProperties = F, D.checkShapes = L, D.completeLayers = C, D
                        }
                        if (a.dataManager || (a.dataManager = y()), a.assetLoader || (a.assetLoader = function() {
                                function C(m) {
                                    var f = m.getResponseHeader("content-type");
                                    return f && m.responseType === "json" && f.indexOf("json") !== -1 || m.response && _typeof$5(m.response) === "object" ? m.response : m.response && typeof m.response == "string" ? JSON.parse(m.response) : m.responseText ? JSON.parse(m.responseText) : null
                                }

                                function c(m, f, l, b) {
                                    var P, x = new XMLHttpRequest;
                                    try {
                                        x.responseType = "json"
                                    } catch {}
                                    x.onreadystatechange = function() {
                                        if (x.readyState === 4)
                                            if (x.status === 200) P = C(x), l(P);
                                            else try {
                                                P = C(x), l(P)
                                            } catch (T) {
                                                b && b(T)
                                            }
                                    };
                                    try {
                                        x.open(["G", "E", "T"].join(""), m, !0)
                                    } catch {
                                        x.open(["G", "E", "T"].join(""), f + "/" + m, !0)
                                    }
                                    x.send()
                                }
                                return {
                                    load: c
                                }
                            }()), g.data.type === "loadAnimation") a.assetLoader.load(g.data.path, g.data.fullPath, function(C) {
                            a.dataManager.completeData(C), a.postMessage({
                                id: g.data.id,
                                payload: C,
                                status: "success"
                            })
                        }, function() {
                            a.postMessage({
                                id: g.data.id,
                                status: "error"
                            })
                        });
                        else if (g.data.type === "complete") {
                            var v = g.data.animation;
                            a.dataManager.completeData(v), a.postMessage({
                                id: g.data.id,
                                payload: v,
                                status: "success"
                            })
                        } else g.data.type === "loadData" && a.assetLoader.load(g.data.path, g.data.fullPath, function(C) {
                            a.postMessage({
                                id: g.data.id,
                                payload: C,
                                status: "success"
                            })
                        }, function() {
                            a.postMessage({
                                id: g.data.id,
                                status: "error"
                            })
                        })
                    }), i.onmessage = function(u) {
                        var g = u.data,
                            y = g.id,
                            v = e[y];
                        e[y] = null, g.status === "success" ? v.onComplete(g.payload) : v.onError && v.onError()
                    })
                }

                function o(u, g) {
                    t += 1;
                    var y = "processId_" + t;
                    return e[y] = {
                        onComplete: u,
                        onError: g
                    }, y
                }

                function p(u, g, y) {
                    h();
                    var v = o(g, y);
                    i.postMessage({
                        type: "loadAnimation",
                        path: u,
                        fullPath: window.location.origin + window.location.pathname,
                        id: v
                    })
                }

                function d(u, g, y) {
                    h();
                    var v = o(g, y);
                    i.postMessage({
                        type: "loadData",
                        path: u,
                        fullPath: window.location.origin + window.location.pathname,
                        id: v
                    })
                }

                function S(u, g, y) {
                    h();
                    var v = o(g, y);
                    i.postMessage({
                        type: "complete",
                        animation: u,
                        id: v
                    })
                }
                return {
                    loadAnimation: p,
                    loadData: d,
                    completeAnimation: S
                }
            }(),
            ImagePreloader = function() {
                var t = function() {
                    var c = createTag("canvas");
                    c.width = 1, c.height = 1;
                    var m = c.getContext("2d");
                    return m.fillStyle = "rgba(0,0,0,0)", m.fillRect(0, 0, 1, 1), c
                }();

                function e() {
                    this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }

                function r() {
                    this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }

                function i(c, m, f) {
                    var l = "";
                    if (c.e) l = c.p;
                    else if (m) {
                        var b = c.p;
                        b.indexOf("images/") !== -1 && (b = b.split("/")[1]), l = m + b
                    } else l = f, l += c.u ? c.u : "", l += c.p;
                    return l
                }

                function s(c) {
                    var m = 0,
                        f = setInterval(function() {
                            var l = c.getBBox();
                            (l.width || m > 500) && (this._imageLoaded(), clearInterval(f)), m += 1
                        }.bind(this), 50)
                }

                function a(c) {
                    var m = i(c, this.assetsPath, this.path),
                        f = createNS("image");
                    isSafari ? this.testImageLoaded(f) : f.addEventListener("load", this._imageLoaded, !1), f.addEventListener("error", function() {
                        l.img = t, this._imageLoaded()
                    }.bind(this), !1), f.setAttributeNS("http://www.w3.org/1999/xlink", "href", m), this._elementHelper.append ? this._elementHelper.append(f) : this._elementHelper.appendChild(f);
                    var l = {
                        img: f,
                        assetData: c
                    };
                    return l
                }

                function n(c) {
                    var m = i(c, this.assetsPath, this.path),
                        f = createTag("img");
                    f.crossOrigin = "anonymous", f.addEventListener("load", this._imageLoaded, !1), f.addEventListener("error", function() {
                        l.img = t, this._imageLoaded()
                    }.bind(this), !1), f.src = m;
                    var l = {
                        img: f,
                        assetData: c
                    };
                    return l
                }

                function h(c) {
                    var m = {
                            assetData: c
                        },
                        f = i(c, this.assetsPath, this.path);
                    return dataManager.loadData(f, function(l) {
                        m.img = l, this._footageLoaded()
                    }.bind(this), function() {
                        m.img = {}, this._footageLoaded()
                    }.bind(this)), m
                }

                function o(c, m) {
                    this.imagesLoadedCb = m;
                    var f, l = c.length;
                    for (f = 0; f < l; f += 1) c[f].layers || (!c[f].t || c[f].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(c[f]))) : c[f].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(c[f]))))
                }

                function p(c) {
                    this.path = c || ""
                }

                function d(c) {
                    this.assetsPath = c || ""
                }

                function S(c) {
                    for (var m = 0, f = this.images.length; m < f;) {
                        if (this.images[m].assetData === c) return this.images[m].img;
                        m += 1
                    }
                    return null
                }

                function u() {
                    this.imagesLoadedCb = null, this.images.length = 0
                }

                function g() {
                    return this.totalImages === this.loadedAssets
                }

                function y() {
                    return this.totalFootages === this.loadedFootagesCount
                }

                function v(c, m) {
                    c === "svg" ? (this._elementHelper = m, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                }

                function C() {
                    this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = h.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                }
                return C.prototype = {
                    loadAssets: o,
                    setAssetsPath: d,
                    setPath: p,
                    loadedImages: g,
                    loadedFootages: y,
                    destroy: u,
                    getAsset: S,
                    createImgData: n,
                    createImageData: a,
                    imageLoaded: e,
                    footageLoaded: r,
                    setCacheType: v
                }, C
            }();

        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function(e, r) {
                if (this._cbs[e])
                    for (var i = this._cbs[e], s = 0; s < i.length; s += 1) i[s](r)
            },
            addEventListener: function(e, r) {
                return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(r),
                    function() {
                        this.removeEventListener(e, r)
                    }.bind(this)
            },
            removeEventListener: function(e, r) {
                if (!r) this._cbs[e] = null;
                else if (this._cbs[e]) {
                    for (var i = 0, s = this._cbs[e].length; i < s;) this._cbs[e][i] === r && (this._cbs[e].splice(i, 1), i -= 1, s -= 1), i += 1;
                    this._cbs[e].length || (this._cbs[e] = null)
                }
            }
        };
        var markerParser = function() {
                function t(e) {
                    for (var r = e.split(`\r
`), i = {}, s, a = 0, n = 0; n < r.length; n += 1) s = r[n].split(":"), s.length === 2 && (i[s[0]] = s[1].trim(), a += 1);
                    if (a === 0) throw new Error;
                    return i
                }
                return function(e) {
                    for (var r = [], i = 0; i < e.length; i += 1) {
                        var s = e[i],
                            a = {
                                time: s.tm,
                                duration: s.dr
                            };
                        try {
                            a.payload = JSON.parse(e[i].cm)
                        } catch {
                            try {
                                a.payload = t(e[i].cm)
                            } catch {
                                a.payload = {
                                    name: e[i].cm
                                }
                            }
                        }
                        r.push(a)
                    }
                    return r
                }
            }(),
            ProjectInterface = function() {
                function t(e) {
                    this.compositions.push(e)
                }
                return function() {
                    function e(r) {
                        for (var i = 0, s = this.compositions.length; i < s;) {
                            if (this.compositions[i].data && this.compositions[i].data.nm === r) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
                            i += 1
                        }
                        return null
                    }
                    return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                }
            }(),
            renderers = {},
            registerRenderer = function(e, r) {
                renderers[e] = r
            };

        function getRenderer(t) {
            return renderers[t]
        }

        function getRegisteredRenderer() {
            if (renderers.canvas) return "canvas";
            for (var t in renderers)
                if (renderers[t]) return t;
            return ""
        }

        function _typeof$4(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$4 = function(r) {
                return typeof r
            } : _typeof$4 = function(r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }, _typeof$4(t)
        }
        var AnimationItem = function() {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0)
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            t.animType ? e = t.animType : t.renderer && (e = t.renderer);
            var r = getRenderer(e);
            this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === !0 ? this.loop = !0 : t.loop === !1 ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : !0, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : !0, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function() {
            this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function(t) {
            dataManager.completeAnimation(t, this.configAnimation)
        }, AnimationItem.prototype.setData = function(t, e) {
            e && _typeof$4(e) !== "object" && (e = JSON.parse(e));
            var r = {
                    wrapper: t,
                    animationData: e
                },
                i = t.attributes;
            r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
            var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
            s === "false" ? r.loop = !1 : s === "true" ? r.loop = !0 : s !== "" && (r.loop = parseInt(s, 10));
            var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : i.getNamedItem("bm-autoplay") ? i.getNamedItem("bm-autoplay").value : !0;
            r.autoplay = a !== "false", r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
            var n = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
            n === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
        }, AnimationItem.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e = this.animationData.layers,
                r, i = e.length,
                s = t.layers,
                a, n = s.length;
            for (a = 0; a < n; a += 1)
                for (r = 0; r < i;) {
                    if (e[r].id === s[a].id) {
                        e[r] = s[a];
                        break
                    }
                    r += 1
                }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                for (i = t.assets.length, r = 0; r < i; r += 1) this.animationData.assets.push(t.assets[r]);
            this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function(t) {
            this.animationData = t;
            var e = getExpressionsPlugin();
            e && e.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
            var t = this.animationData.segments;
            if (!t || t.length === 0 || !this.autoloadSegments) {
                this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
                return
            }
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
                this.trigger("data_failed")
            }.bind(this))
        }, AnimationItem.prototype.loadSegments = function() {
            var t = this.animationData.segments;
            t || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function() {
            this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function() {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function(t) {
            if (this.renderer) try {
                this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
            } catch (e) {
                this.triggerConfigError(e)
            }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function() {
            if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
                this.isLoaded = !0;
                var t = getExpressionsPlugin();
                t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                    this.trigger("DOMLoaded")
                }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
            }
        }, AnimationItem.prototype.resize = function(t, e) {
            var r = typeof t == "number" ? t : void 0,
                i = typeof e == "number" ? e : void 0;
            this.renderer.updateContainerSize(r, i)
        }, AnimationItem.prototype.setSubframe = function(t) {
            this.isSubframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function() {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
        }, AnimationItem.prototype.renderFrame = function() {
            if (!(this.isLoaded === !1 || !this.renderer)) try {
                this.renderer.renderFrame(this.currentFrame + this.firstFrame)
            } catch (t) {
                this.triggerRenderFrameError(t)
            }
        }, AnimationItem.prototype.play = function(t) {
            t && this.name !== t || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_pause"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(t) {
            t && this.name !== t || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_play"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function(t) {
            t && this.name !== t || (this.isPaused === !0 ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(t) {
            t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function(t) {
            for (var e, r = 0; r < this.markers.length; r += 1)
                if (e = this.markers[r], e.payload && e.payload.name === t) return e;
            return null
        }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
            if (!(r && this.name !== r)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var s = this.getMarkerData(t);
                    s && this.goToAndStop(s.time, !0)
                } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause()
            }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
            if (!(r && this.name !== r)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var s = this.getMarkerData(t);
                    s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0))
                } else this.goToAndStop(i, e, r);
                this.play()
            }
        }, AnimationItem.prototype.advanceTime = function(t) {
            if (!(this.isPaused === !0 || this.isLoaded === !1)) {
                var e = this.currentRawFrame + t * this.frameModifier,
                    r = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (r = !0, e = 0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
            }
        }, AnimationItem.prototype.adjustSegment = function(t, e) {
            this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(t, e) {
            var r = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0)
        }, AnimationItem.prototype.playSegments = function(t, e) {
            if (e && (this.segments.length = 0), _typeof$4(t[0]) === "object") {
                var r, i = t.length;
                for (r = 0; r < i; r += 1) this.segments.push(t[r])
            } else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(t) {
            this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function(t) {
            return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), !0) : !1
        }, AnimationItem.prototype.destroy = function(t) {
            t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
            this.currentRawFrame = t, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(t) {
            this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(t) {
            this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setLoop = function(t) {
            this.loop = t
        }, AnimationItem.prototype.setVolume = function(t, e) {
            e && this.name !== e || this.audioController.setVolume(t)
        }, AnimationItem.prototype.getVolume = function() {
            return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function(t) {
            t && this.name !== t || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function(t) {
            t && this.name !== t || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function() {
            return this.path
        }, AnimationItem.prototype.getAssetsPath = function(t) {
            var e = "";
            if (t.e) e = t.p;
            else if (this.assetsPath) {
                var r = t.p;
                r.indexOf("images/") !== -1 && (r = r.split("/")[1]), e = this.assetsPath + r
            } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e
        }, AnimationItem.prototype.getAssetData = function(t) {
            for (var e = 0, r = this.assets.length; e < r;) {
                if (t === this.assets[e].id) return this.assets[e];
                e += 1
            }
            return null
        }, AnimationItem.prototype.hide = function() {
            this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
            this.renderer.show()
        }, AnimationItem.prototype.getDuration = function(t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
            try {
                var i = this.renderer.getElementByPath(t);
                i.updateDocumentData(e, r)
            } catch {}
        }, AnimationItem.prototype.trigger = function(t) {
            if (this._cbs && this._cbs[t]) switch (t) {
                case "enterFrame":
                    this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case "drawnFrame":
                    this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                    break;
                case "loopComplete":
                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                default:
                    this.triggerEvent(t)
            }
            t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        }, AnimationItem.prototype.triggerConfigError = function(t) {
            var e = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        };
        var animationManager = function() {
                var t = {},
                    e = [],
                    r = 0,
                    i = 0,
                    s = 0,
                    a = !0,
                    n = !1;

                function h(M) {
                    for (var _ = 0, E = M.target; _ < i;) e[_].animation === E && (e.splice(_, 1), _ -= 1, i -= 1, E.isPaused || S()), _ += 1
                }

                function o(M, _) {
                    if (!M) return null;
                    for (var E = 0; E < i;) {
                        if (e[E].elem === M && e[E].elem !== null) return e[E].animation;
                        E += 1
                    }
                    var A = new AnimationItem;
                    return u(A, M), A.setData(M, _), A
                }

                function p() {
                    var M, _ = e.length,
                        E = [];
                    for (M = 0; M < _; M += 1) E.push(e[M].animation);
                    return E
                }

                function d() {
                    s += 1, R()
                }

                function S() {
                    s -= 1
                }

                function u(M, _) {
                    M.addEventListener("destroy", h), M.addEventListener("_active", d), M.addEventListener("_idle", S), e.push({
                        elem: _,
                        animation: M
                    }), i += 1
                }

                function g(M) {
                    var _ = new AnimationItem;
                    return u(_, null), _.setParams(M), _
                }

                function y(M, _) {
                    var E;
                    for (E = 0; E < i; E += 1) e[E].animation.setSpeed(M, _)
                }

                function v(M, _) {
                    var E;
                    for (E = 0; E < i; E += 1) e[E].animation.setDirection(M, _)
                }

                function C(M) {
                    var _;
                    for (_ = 0; _ < i; _ += 1) e[_].animation.play(M)
                }

                function c(M) {
                    var _ = M - r,
                        E;
                    for (E = 0; E < i; E += 1) e[E].animation.advanceTime(_);
                    r = M, s && !n ? window.requestAnimationFrame(c) : a = !0
                }

                function m(M) {
                    r = M, window.requestAnimationFrame(c)
                }

                function f(M) {
                    var _;
                    for (_ = 0; _ < i; _ += 1) e[_].animation.pause(M)
                }

                function l(M, _, E) {
                    var A;
                    for (A = 0; A < i; A += 1) e[A].animation.goToAndStop(M, _, E)
                }

                function b(M) {
                    var _;
                    for (_ = 0; _ < i; _ += 1) e[_].animation.stop(M)
                }

                function P(M) {
                    var _;
                    for (_ = 0; _ < i; _ += 1) e[_].animation.togglePause(M)
                }

                function x(M) {
                    var _;
                    for (_ = i - 1; _ >= 0; _ -= 1) e[_].animation.destroy(M)
                }

                function T(M, _, E) {
                    var A = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                        V, k = A.length;
                    for (V = 0; V < k; V += 1) E && A[V].setAttribute("data-bm-type", E), o(A[V], M);
                    if (_ && k === 0) {
                        E || (E = "svg");
                        var O = document.getElementsByTagName("body")[0];
                        O.innerText = "";
                        var N = createTag("div");
                        N.style.width = "100%", N.style.height = "100%", N.setAttribute("data-bm-type", E), O.appendChild(N), o(N, M)
                    }
                }

                function F() {
                    var M;
                    for (M = 0; M < i; M += 1) e[M].animation.resize()
                }

                function R() {
                    !n && s && a && (window.requestAnimationFrame(m), a = !1)
                }

                function L() {
                    n = !0
                }

                function I() {
                    n = !1, R()
                }

                function B(M, _) {
                    var E;
                    for (E = 0; E < i; E += 1) e[E].animation.setVolume(M, _)
                }

                function D(M) {
                    var _;
                    for (_ = 0; _ < i; _ += 1) e[_].animation.mute(M)
                }

                function w(M) {
                    var _;
                    for (_ = 0; _ < i; _ += 1) e[_].animation.unmute(M)
                }
                return t.registerAnimation = o, t.loadAnimation = g, t.setSpeed = y, t.setDirection = v, t.play = C, t.pause = f, t.stop = b, t.togglePause = P, t.searchAnimations = T, t.resize = F, t.goToAndStop = l, t.destroy = x, t.freeze = L, t.unfreeze = I, t.setVolume = B, t.mute = D, t.unmute = w, t.getRegisteredAnimations = p, t
            }(),
            BezierFactory = function() {
                var t = {};
                t.getBezierEasing = r;
                var e = {};

                function r(m, f, l, b, P) {
                    var x = P || ("bez_" + m + "_" + f + "_" + l + "_" + b).replace(/\./g, "p");
                    if (e[x]) return e[x];
                    var T = new c([m, f, l, b]);
                    return e[x] = T, T
                }
                var i = 4,
                    s = .001,
                    a = 1e-7,
                    n = 10,
                    h = 11,
                    o = 1 / (h - 1),
                    p = typeof Float32Array == "function";

                function d(m, f) {
                    return 1 - 3 * f + 3 * m
                }

                function S(m, f) {
                    return 3 * f - 6 * m
                }

                function u(m) {
                    return 3 * m
                }

                function g(m, f, l) {
                    return ((d(f, l) * m + S(f, l)) * m + u(f)) * m
                }

                function y(m, f, l) {
                    return 3 * d(f, l) * m * m + 2 * S(f, l) * m + u(f)
                }

                function v(m, f, l, b, P) {
                    var x, T, F = 0;
                    do T = f + (l - f) / 2, x = g(T, b, P) - m, x > 0 ? l = T : f = T; while (Math.abs(x) > a && ++F < n);
                    return T
                }

                function C(m, f, l, b) {
                    for (var P = 0; P < i; ++P) {
                        var x = y(f, l, b);
                        if (x === 0) return f;
                        var T = g(f, l, b) - m;
                        f -= T / x
                    }
                    return f
                }

                function c(m) {
                    this._p = m, this._mSampleValues = p ? new Float32Array(h) : new Array(h), this._precomputed = !1, this.get = this.get.bind(this)
                }
                return c.prototype = {
                    get: function(f) {
                        var l = this._p[0],
                            b = this._p[1],
                            P = this._p[2],
                            x = this._p[3];
                        return this._precomputed || this._precompute(), l === b && P === x ? f : f === 0 ? 0 : f === 1 ? 1 : g(this._getTForX(f), b, x)
                    },
                    _precompute: function() {
                        var f = this._p[0],
                            l = this._p[1],
                            b = this._p[2],
                            P = this._p[3];
                        this._precomputed = !0, (f !== l || b !== P) && this._calcSampleValues()
                    },
                    _calcSampleValues: function() {
                        for (var f = this._p[0], l = this._p[2], b = 0; b < h; ++b) this._mSampleValues[b] = g(b * o, f, l)
                    },
                    _getTForX: function(f) {
                        for (var l = this._p[0], b = this._p[2], P = this._mSampleValues, x = 0, T = 1, F = h - 1; T !== F && P[T] <= f; ++T) x += o;
                        --T;
                        var R = (f - P[T]) / (P[T + 1] - P[T]),
                            L = x + R * o,
                            I = y(L, l, b);
                        return I >= s ? C(f, L, l, b) : I === 0 ? L : v(f, x, x + o, l, b)
                    }
                }, t
            }(),
            pooling = function() {
                function t(e) {
                    return e.concat(createSizedArray(e.length))
                }
                return {
                    double: t
                }
            }(),
            poolFactory = function() {
                return function(t, e, r) {
                    var i = 0,
                        s = t,
                        a = createSizedArray(s),
                        n = {
                            newElement: h,
                            release: o
                        };

                    function h() {
                        var p;
                        return i ? (i -= 1, p = a[i]) : p = e(), p
                    }

                    function o(p) {
                        i === s && (a = pooling.double(a), s *= 2), r && r(p), a[i] = p, i += 1
                    }
                    return n
                }
            }(),
            bezierLengthPool = function() {
                function t() {
                    return {
                        addedLength: 0,
                        percents: createTypedArray("float32", getDefaultCurveSegments()),
                        lengths: createTypedArray("float32", getDefaultCurveSegments())
                    }
                }
                return poolFactory(8, t)
            }(),
            segmentsLengthPool = function() {
                function t() {
                    return {
                        lengths: [],
                        totalLength: 0
                    }
                }

                function e(r) {
                    var i, s = r.lengths.length;
                    for (i = 0; i < s; i += 1) bezierLengthPool.release(r.lengths[i]);
                    r.lengths.length = 0
                }
                return poolFactory(8, t, e)
            }();

        function bezFunction() {
            var t = Math;

            function e(u, g, y, v, C, c) {
                var m = u * v + g * C + y * c - C * v - c * u - y * g;
                return m > -.001 && m < .001
            }

            function r(u, g, y, v, C, c, m, f, l) {
                if (y === 0 && c === 0 && l === 0) return e(u, g, v, C, m, f);
                var b = t.sqrt(t.pow(v - u, 2) + t.pow(C - g, 2) + t.pow(c - y, 2)),
                    P = t.sqrt(t.pow(m - u, 2) + t.pow(f - g, 2) + t.pow(l - y, 2)),
                    x = t.sqrt(t.pow(m - v, 2) + t.pow(f - C, 2) + t.pow(l - c, 2)),
                    T;
                return b > P ? b > x ? T = b - P - x : T = x - P - b : x > P ? T = x - P - b : T = P - b - x, T > -1e-4 && T < 1e-4
            }
            var i = function() {
                return function(u, g, y, v) {
                    var C = getDefaultCurveSegments(),
                        c, m, f, l, b, P = 0,
                        x, T = [],
                        F = [],
                        R = bezierLengthPool.newElement();
                    for (f = y.length, c = 0; c < C; c += 1) {
                        for (b = c / (C - 1), x = 0, m = 0; m < f; m += 1) l = bmPow(1 - b, 3) * u[m] + 3 * bmPow(1 - b, 2) * b * y[m] + 3 * (1 - b) * bmPow(b, 2) * v[m] + bmPow(b, 3) * g[m], T[m] = l, F[m] !== null && (x += bmPow(T[m] - F[m], 2)), F[m] = T[m];
                        x && (x = bmSqrt(x), P += x), R.percents[c] = b, R.lengths[c] = P
                    }
                    return R.addedLength = P, R
                }
            }();

            function s(u) {
                var g = segmentsLengthPool.newElement(),
                    y = u.c,
                    v = u.v,
                    C = u.o,
                    c = u.i,
                    m, f = u._length,
                    l = g.lengths,
                    b = 0;
                for (m = 0; m < f - 1; m += 1) l[m] = i(v[m], v[m + 1], C[m], c[m + 1]), b += l[m].addedLength;
                return y && f && (l[m] = i(v[m], v[0], C[m], c[0]), b += l[m].addedLength), g.totalLength = b, g
            }

            function a(u) {
                this.segmentLength = 0, this.points = new Array(u)
            }

            function n(u, g) {
                this.partialLength = u, this.point = g
            }
            var h = function() {
                var u = {};
                return function(g, y, v, C) {
                    var c = (g[0] + "_" + g[1] + "_" + y[0] + "_" + y[1] + "_" + v[0] + "_" + v[1] + "_" + C[0] + "_" + C[1]).replace(/\./g, "p");
                    if (!u[c]) {
                        var m = getDefaultCurveSegments(),
                            f, l, b, P, x, T = 0,
                            F, R, L = null;
                        g.length === 2 && (g[0] !== y[0] || g[1] !== y[1]) && e(g[0], g[1], y[0], y[1], g[0] + v[0], g[1] + v[1]) && e(g[0], g[1], y[0], y[1], y[0] + C[0], y[1] + C[1]) && (m = 2);
                        var I = new a(m);
                        for (b = v.length, f = 0; f < m; f += 1) {
                            for (R = createSizedArray(b), x = f / (m - 1), F = 0, l = 0; l < b; l += 1) P = bmPow(1 - x, 3) * g[l] + 3 * bmPow(1 - x, 2) * x * (g[l] + v[l]) + 3 * (1 - x) * bmPow(x, 2) * (y[l] + C[l]) + bmPow(x, 3) * y[l], R[l] = P, L !== null && (F += bmPow(R[l] - L[l], 2));
                            F = bmSqrt(F), T += F, I.points[f] = new n(F, R), L = R
                        }
                        I.segmentLength = T, u[c] = I
                    }
                    return u[c]
                }
            }();

            function o(u, g) {
                var y = g.percents,
                    v = g.lengths,
                    C = y.length,
                    c = bmFloor((C - 1) * u),
                    m = u * g.addedLength,
                    f = 0;
                if (c === C - 1 || c === 0 || m === v[c]) return y[c];
                for (var l = v[c] > m ? -1 : 1, b = !0; b;)
                    if (v[c] <= m && v[c + 1] > m ? (f = (m - v[c]) / (v[c + 1] - v[c]), b = !1) : c += l, c < 0 || c >= C - 1) {
                        if (c === C - 1) return y[c];
                        b = !1
                    } return y[c] + (y[c + 1] - y[c]) * f
            }

            function p(u, g, y, v, C, c) {
                var m = o(C, c),
                    f = 1 - m,
                    l = t.round((f * f * f * u[0] + (m * f * f + f * m * f + f * f * m) * y[0] + (m * m * f + f * m * m + m * f * m) * v[0] + m * m * m * g[0]) * 1e3) / 1e3,
                    b = t.round((f * f * f * u[1] + (m * f * f + f * m * f + f * f * m) * y[1] + (m * m * f + f * m * m + m * f * m) * v[1] + m * m * m * g[1]) * 1e3) / 1e3;
                return [l, b]
            }
            var d = createTypedArray("float32", 8);

            function S(u, g, y, v, C, c, m) {
                C < 0 ? C = 0 : C > 1 && (C = 1);
                var f = o(C, m);
                c = c > 1 ? 1 : c;
                var l = o(c, m),
                    b, P = u.length,
                    x = 1 - f,
                    T = 1 - l,
                    F = x * x * x,
                    R = f * x * x * 3,
                    L = f * f * x * 3,
                    I = f * f * f,
                    B = x * x * T,
                    D = f * x * T + x * f * T + x * x * l,
                    w = f * f * T + x * f * l + f * x * l,
                    M = f * f * l,
                    _ = x * T * T,
                    E = f * T * T + x * l * T + x * T * l,
                    A = f * l * T + x * l * l + f * T * l,
                    V = f * l * l,
                    k = T * T * T,
                    O = l * T * T + T * l * T + T * T * l,
                    N = l * l * T + T * l * l + l * T * l,
                    z = l * l * l;
                for (b = 0; b < P; b += 1) d[b * 4] = t.round((F * u[b] + R * y[b] + L * v[b] + I * g[b]) * 1e3) / 1e3, d[b * 4 + 1] = t.round((B * u[b] + D * y[b] + w * v[b] + M * g[b]) * 1e3) / 1e3, d[b * 4 + 2] = t.round((_ * u[b] + E * y[b] + A * v[b] + V * g[b]) * 1e3) / 1e3, d[b * 4 + 3] = t.round((k * u[b] + O * y[b] + N * v[b] + z * g[b]) * 1e3) / 1e3;
                return d
            }
            return {
                getSegmentsLength: s,
                getNewSegment: S,
                getPointInSegment: p,
                buildBezierData: h,
                pointOnLine2D: e,
                pointOnLine3D: r
            }
        }
        var bez = bezFunction(),
            initFrame = initialDefaultFrame,
            mathAbs = Math.abs;

        function interpolateValue(t, e) {
            var r = this.offsetTime,
                i;
            this.propType === "multidimensional" && (i = createTypedArray("float32", this.pv.length));
            for (var s = e.lastIndex, a = s, n = this.keyframes.length - 1, h = !0, o, p, d; h;) {
                if (o = this.keyframes[a], p = this.keyframes[a + 1], a === n - 1 && t >= p.t - r) {
                    o.h && (o = p), s = 0;
                    break
                }
                if (p.t - r > t) {
                    s = a;
                    break
                }
                a < n - 1 ? a += 1 : (s = 0, h = !1)
            }
            d = this.keyframesMetadata[a] || {};
            var S, u, g, y, v, C, c = p.t - r,
                m = o.t - r,
                f;
            if (o.to) {
                d.bezierData || (d.bezierData = bez.buildBezierData(o.s, p.s || o.e, o.to, o.ti));
                var l = d.bezierData;
                if (t >= c || t < m) {
                    var b = t >= c ? l.points.length - 1 : 0;
                    for (u = l.points[b].point.length, S = 0; S < u; S += 1) i[S] = l.points[b].point[S]
                } else {
                    d.__fnct ? C = d.__fnct : (C = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, d.__fnct = C), g = C((t - m) / (c - m));
                    var P = l.segmentLength * g,
                        x, T = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastAddedLength : 0;
                    for (v = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastPoint : 0, h = !0, y = l.points.length; h;) {
                        if (T += l.points[v].partialLength, P === 0 || g === 0 || v === l.points.length - 1) {
                            for (u = l.points[v].point.length, S = 0; S < u; S += 1) i[S] = l.points[v].point[S];
                            break
                        } else if (P >= T && P < T + l.points[v + 1].partialLength) {
                            for (x = (P - T) / l.points[v + 1].partialLength, u = l.points[v].point.length, S = 0; S < u; S += 1) i[S] = l.points[v].point[S] + (l.points[v + 1].point[S] - l.points[v].point[S]) * x;
                            break
                        }
                        v < y - 1 ? v += 1 : h = !1
                    }
                    e._lastPoint = v, e._lastAddedLength = T - l.points[v].partialLength, e._lastKeyframeIndex = a
                }
            } else {
                var F, R, L, I, B;
                if (n = o.s.length, f = p.s || o.e, this.sh && o.h !== 1)
                    if (t >= c) i[0] = f[0], i[1] = f[1], i[2] = f[2];
                    else if (t <= m) i[0] = o.s[0], i[1] = o.s[1], i[2] = o.s[2];
                else {
                    var D = createQuaternion(o.s),
                        w = createQuaternion(f),
                        M = (t - m) / (c - m);
                    quaternionToEuler(i, slerp(D, w, M))
                } else
                    for (a = 0; a < n; a += 1) o.h !== 1 && (t >= c ? g = 1 : t < m ? g = 0 : (o.o.x.constructor === Array ? (d.__fnct || (d.__fnct = []), d.__fnct[a] ? C = d.__fnct[a] : (F = o.o.x[a] === void 0 ? o.o.x[0] : o.o.x[a], R = o.o.y[a] === void 0 ? o.o.y[0] : o.o.y[a], L = o.i.x[a] === void 0 ? o.i.x[0] : o.i.x[a], I = o.i.y[a] === void 0 ? o.i.y[0] : o.i.y[a], C = BezierFactory.getBezierEasing(F, R, L, I).get, d.__fnct[a] = C)) : d.__fnct ? C = d.__fnct : (F = o.o.x, R = o.o.y, L = o.i.x, I = o.i.y, C = BezierFactory.getBezierEasing(F, R, L, I).get, o.keyframeMetadata = C), g = C((t - m) / (c - m)))), f = p.s || o.e, B = o.h === 1 ? o.s[a] : o.s[a] + (f[a] - o.s[a]) * g, this.propType === "multidimensional" ? i[a] = B : i = B
            }
            return e.lastIndex = s, i
        }

        function slerp(t, e, r) {
            var i = [],
                s = t[0],
                a = t[1],
                n = t[2],
                h = t[3],
                o = e[0],
                p = e[1],
                d = e[2],
                S = e[3],
                u, g, y, v, C;
            return g = s * o + a * p + n * d + h * S, g < 0 && (g = -g, o = -o, p = -p, d = -d, S = -S), 1 - g > 1e-6 ? (u = Math.acos(g), y = Math.sin(u), v = Math.sin((1 - r) * u) / y, C = Math.sin(r * u) / y) : (v = 1 - r, C = r), i[0] = v * s + C * o, i[1] = v * a + C * p, i[2] = v * n + C * d, i[3] = v * h + C * S, i
        }

        function quaternionToEuler(t, e) {
            var r = e[0],
                i = e[1],
                s = e[2],
                a = e[3],
                n = Math.atan2(2 * i * a - 2 * r * s, 1 - 2 * i * i - 2 * s * s),
                h = Math.asin(2 * r * i + 2 * s * a),
                o = Math.atan2(2 * r * a - 2 * i * s, 1 - 2 * r * r - 2 * s * s);
            t[0] = n / degToRads, t[1] = h / degToRads, t[2] = o / degToRads
        }

        function createQuaternion(t) {
            var e = t[0] * degToRads,
                r = t[1] * degToRads,
                i = t[2] * degToRads,
                s = Math.cos(e / 2),
                a = Math.cos(r / 2),
                n = Math.cos(i / 2),
                h = Math.sin(e / 2),
                o = Math.sin(r / 2),
                p = Math.sin(i / 2),
                d = s * a * n - h * o * p,
                S = h * o * n + s * a * p,
                u = h * a * n + s * o * p,
                g = s * o * n - h * a * p;
            return [S, u, g, d]
        }

        function getValueAtCurrentTime() {
            var t = this.comp.renderedFrame - this.offsetTime,
                e = this.keyframes[0].t - this.offsetTime,
                r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < e && t < e))) {
                this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                var i = this.interpolateValue(t, this._caching);
                this.pv = i
            }
            return this._caching.lastFrame = t, this.pv
        }

        function setVValue(t) {
            var e;
            if (this.propType === "unidimensional") e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
            else
                for (var r = 0, i = this.v.length; r < i;) e = t[r] * this.mult, mathAbs(this.v[r] - e) > 1e-5 && (this.v[r] = e, this._mdf = !0), r += 1
        }

        function processEffectsSequence() {
            if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
                if (this.lock) {
                    this.setVValue(this.pv);
                    return
                }
                this.lock = !0, this._mdf = this._isFirstFrame;
                var t, e = this.effectsSequence.length,
                    r = this.kf ? this.pv : this.data.k;
                for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function addEffect(t) {
            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }

        function ValueProperty(t, e, r, i) {
            this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function MultiDimensionalProperty(t, e, r, i) {
            this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
            var s, a = e.k.length;
            for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), s = 0; s < a; s += 1) this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function KeyframedValueProperty(t, e, r, i) {
            this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
            }, this.k = !0, this.kf = !0, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty(t, e, r, i) {
            this.propType = "multidimensional";
            var s, a = e.k.length,
                n, h, o, p;
            for (s = 0; s < a - 1; s += 1) e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (n = e.k[s].s, h = e.k[s + 1].s, o = e.k[s].to, p = e.k[s].ti, (n.length === 2 && !(n[0] === h[0] && n[1] === h[1]) && bez.pointOnLine2D(n[0], n[1], h[0], h[1], n[0] + o[0], n[1] + o[1]) && bez.pointOnLine2D(n[0], n[1], h[0], h[1], h[0] + p[0], h[1] + p[1]) || n.length === 3 && !(n[0] === h[0] && n[1] === h[1] && n[2] === h[2]) && bez.pointOnLine3D(n[0], n[1], n[2], h[0], h[1], h[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && bez.pointOnLine3D(n[0], n[1], n[2], h[0], h[1], h[2], h[0] + p[0], h[1] + p[1], h[2] + p[2])) && (e.k[s].to = null, e.k[s].ti = null), n[0] === h[0] && n[1] === h[1] && o[0] === 0 && o[1] === 0 && p[0] === 0 && p[1] === 0 && (n.length === 2 || n[2] === h[2] && o[2] === 0 && p[2] === 0) && (e.k[s].to = null, e.k[s].ti = null));
            this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
            var d = e.k[0].s.length;
            for (this.v = createTypedArray("float32", d), this.pv = createTypedArray("float32", d), s = 0; s < d; s += 1) this.v[s] = initFrame, this.pv[s] = initFrame;
            this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: createTypedArray("float32", d)
            }, this.addEffect = addEffect
        }
        var PropertyFactory = function() {
            function t(r, i, s, a, n) {
                i.sid && (i = r.globalData.slotManager.getProp(i));
                var h;
                if (!i.k.length) h = new ValueProperty(r, i, a, n);
                else if (typeof i.k[0] == "number") h = new MultiDimensionalProperty(r, i, a, n);
                else switch (s) {
                    case 0:
                        h = new KeyframedValueProperty(r, i, a, n);
                        break;
                    case 1:
                        h = new KeyframedMultidimensionalProperty(r, i, a, n);
                        break
                }
                return h.effectsSequence.length && n.addDynamicProperty(h), h
            }
            var e = {
                getProp: t
            };
            return e
        }();

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function(e) {
                this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
            },
            iterateDynamicProperties: function() {
                this._mdf = !1;
                var e, r = this.dynamicProperties.length;
                for (e = 0; e < r; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
            },
            initDynamicPropertyContainer: function(e) {
                this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
            }
        };
        var pointPool = function() {
            function t() {
                return createTypedArray("float32", 2)
            }
            return poolFactory(8, t)
        }();

        function ShapePath() {
            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(t, e) {
            this.c = t, this.setLength(e);
            for (var r = 0; r < e;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
        }, ShapePath.prototype.setLength = function(t) {
            for (; this._maxLength < t;) this.doubleArrayLength();
            this._length = t
        }, ShapePath.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(t, e, r, i, s) {
            var a;
            switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                case "v":
                    a = this.v;
                    break;
                case "i":
                    a = this.i;
                    break;
                case "o":
                    a = this.o;
                    break;
                default:
                    a = [];
                    break
            }(!a[i] || a[i] && !s) && (a[i] = pointPool.newElement()), a[i][0] = t, a[i][1] = e
        }, ShapePath.prototype.setTripleAt = function(t, e, r, i, s, a, n, h) {
            this.setXYAt(t, e, "v", n, h), this.setXYAt(r, i, "o", n, h), this.setXYAt(s, a, "i", n, h)
        }, ShapePath.prototype.reverse = function() {
            var t = new ShapePath;
            t.setPathData(this.c, this._length);
            var e = this.v,
                r = this.o,
                i = this.i,
                s = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), s = 1);
            var a = this._length - 1,
                n = this._length,
                h;
            for (h = s; h < n; h += 1) t.setTripleAt(e[a][0], e[a][1], i[a][0], i[a][1], r[a][0], r[a][1], h, !1), a -= 1;
            return t
        }, ShapePath.prototype.length = function() {
            return this._length
        };
        var shapePool = function() {
            function t() {
                return new ShapePath
            }

            function e(s) {
                var a = s._length,
                    n;
                for (n = 0; n < a; n += 1) pointPool.release(s.v[n]), pointPool.release(s.i[n]), pointPool.release(s.o[n]), s.v[n] = null, s.i[n] = null, s.o[n] = null;
                s._length = 0, s.c = !1
            }

            function r(s) {
                var a = i.newElement(),
                    n, h = s._length === void 0 ? s.v.length : s._length;
                for (a.setLength(h), a.c = s.c, n = 0; n < h; n += 1) a.setTripleAt(s.v[n][0], s.v[n][1], s.o[n][0], s.o[n][1], s.i[n][0], s.i[n][1], n);
                return a
            }
            var i = poolFactory(4, t, e);
            return i.clone = r, i
        }();

        function ShapeCollection() {
            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }
        ShapeCollection.prototype.addShape = function(t) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function() {
            var t;
            for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
            this._length = 0
        };
        var shapeCollectionPool = function() {
                var t = {
                        newShapeCollection: s,
                        release: a
                    },
                    e = 0,
                    r = 4,
                    i = createSizedArray(r);

                function s() {
                    var n;
                    return e ? (e -= 1, n = i[e]) : n = new ShapeCollection, n
                }

                function a(n) {
                    var h, o = n._length;
                    for (h = 0; h < o; h += 1) shapePool.release(n.shapes[h]);
                    n._length = 0, e === r && (i = pooling.double(i), r *= 2), i[e] = n, e += 1
                }
                return t
            }(),
            ShapePropertyFactory = function() {
                var t = -999999;

                function e(c, m, f) {
                    var l = f.lastIndex,
                        b, P, x, T, F, R, L, I, B, D = this.keyframes;
                    if (c < D[0].t - this.offsetTime) b = D[0].s[0], x = !0, l = 0;
                    else if (c >= D[D.length - 1].t - this.offsetTime) b = D[D.length - 1].s ? D[D.length - 1].s[0] : D[D.length - 2].e[0], x = !0;
                    else {
                        for (var w = l, M = D.length - 1, _ = !0, E, A, V; _ && (E = D[w], A = D[w + 1], !(A.t - this.offsetTime > c));) w < M - 1 ? w += 1 : _ = !1;
                        if (V = this.keyframesMetadata[w] || {}, x = E.h === 1, l = w, !x) {
                            if (c >= A.t - this.offsetTime) I = 1;
                            else if (c < E.t - this.offsetTime) I = 0;
                            else {
                                var k;
                                V.__fnct ? k = V.__fnct : (k = BezierFactory.getBezierEasing(E.o.x, E.o.y, E.i.x, E.i.y).get, V.__fnct = k), I = k((c - (E.t - this.offsetTime)) / (A.t - this.offsetTime - (E.t - this.offsetTime)))
                            }
                            P = A.s ? A.s[0] : E.e[0]
                        }
                        b = E.s[0]
                    }
                    for (R = m._length, L = b.i[0].length, f.lastIndex = l, T = 0; T < R; T += 1)
                        for (F = 0; F < L; F += 1) B = x ? b.i[T][F] : b.i[T][F] + (P.i[T][F] - b.i[T][F]) * I, m.i[T][F] = B, B = x ? b.o[T][F] : b.o[T][F] + (P.o[T][F] - b.o[T][F]) * I, m.o[T][F] = B, B = x ? b.v[T][F] : b.v[T][F] + (P.v[T][F] - b.v[T][F]) * I, m.v[T][F] = B
                }

                function r() {
                    var c = this.comp.renderedFrame - this.offsetTime,
                        m = this.keyframes[0].t - this.offsetTime,
                        f = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                        l = this._caching.lastFrame;
                    return l !== t && (l < m && c < m || l > f && c > f) || (this._caching.lastIndex = l < c ? this._caching.lastIndex : 0, this.interpolateShape(c, this.pv, this._caching)), this._caching.lastFrame = c, this.pv
                }

                function i() {
                    this.paths = this.localShapeCollection
                }

                function s(c, m) {
                    if (c._length !== m._length || c.c !== m.c) return !1;
                    var f, l = c._length;
                    for (f = 0; f < l; f += 1)
                        if (c.v[f][0] !== m.v[f][0] || c.v[f][1] !== m.v[f][1] || c.o[f][0] !== m.o[f][0] || c.o[f][1] !== m.o[f][1] || c.i[f][0] !== m.i[f][0] || c.i[f][1] !== m.i[f][1]) return !1;
                    return !0
                }

                function a(c) {
                    s(this.v, c) || (this.v = shapePool.clone(c), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                }

                function n() {
                    if (this.elem.globalData.frameId !== this.frameId) {
                        if (!this.effectsSequence.length) {
                            this._mdf = !1;
                            return
                        }
                        if (this.lock) {
                            this.setVValue(this.pv);
                            return
                        }
                        this.lock = !0, this._mdf = !1;
                        var c;
                        this.kf ? c = this.pv : this.data.ks ? c = this.data.ks.k : c = this.data.pt.k;
                        var m, f = this.effectsSequence.length;
                        for (m = 0; m < f; m += 1) c = this.effectsSequence[m](c);
                        this.setVValue(c), this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }

                function h(c, m, f) {
                    this.propType = "shape", this.comp = c.comp, this.container = c, this.elem = c, this.data = m, this.k = !1, this.kf = !1, this._mdf = !1;
                    var l = f === 3 ? m.pt.k : m.ks.k;
                    this.v = shapePool.clone(l), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                }

                function o(c) {
                    this.effectsSequence.push(c), this.container.addDynamicProperty(this)
                }
                h.prototype.interpolateShape = e, h.prototype.getValue = n, h.prototype.setVValue = a, h.prototype.addEffect = o;

                function p(c, m, f) {
                    this.propType = "shape", this.comp = c.comp, this.elem = c, this.container = c, this.offsetTime = c.data.st, this.keyframes = f === 3 ? m.pt.k : m.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                    var l = this.keyframes[0].s[0].i.length;
                    this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, l), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                        lastFrame: t,
                        lastIndex: 0
                    }, this.effectsSequence = [r.bind(this)]
                }
                p.prototype.getValue = n, p.prototype.interpolateShape = e, p.prototype.setVValue = a, p.prototype.addEffect = o;
                var d = function() {
                        var c = roundCorner;

                        function m(f, l) {
                            this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = l.d, this.elem = f, this.comp = f.comp, this.frameId = -1, this.initDynamicPropertyContainer(f), this.p = PropertyFactory.getProp(f, l.p, 1, 0, this), this.s = PropertyFactory.getProp(f, l.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                        }
                        return m.prototype = {
                            reset: i,
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                            },
                            convertEllToPath: function() {
                                var l = this.p.v[0],
                                    b = this.p.v[1],
                                    P = this.s.v[0] / 2,
                                    x = this.s.v[1] / 2,
                                    T = this.d !== 3,
                                    F = this.v;
                                F.v[0][0] = l, F.v[0][1] = b - x, F.v[1][0] = T ? l + P : l - P, F.v[1][1] = b, F.v[2][0] = l, F.v[2][1] = b + x, F.v[3][0] = T ? l - P : l + P, F.v[3][1] = b, F.i[0][0] = T ? l - P * c : l + P * c, F.i[0][1] = b - x, F.i[1][0] = T ? l + P : l - P, F.i[1][1] = b - x * c, F.i[2][0] = T ? l + P * c : l - P * c, F.i[2][1] = b + x, F.i[3][0] = T ? l - P : l + P, F.i[3][1] = b + x * c, F.o[0][0] = T ? l + P * c : l - P * c, F.o[0][1] = b - x, F.o[1][0] = T ? l + P : l - P, F.o[1][1] = b + x * c, F.o[2][0] = T ? l - P * c : l + P * c, F.o[2][1] = b + x, F.o[3][0] = T ? l - P : l + P, F.o[3][1] = b - x * c
                            }
                        }, extendPrototype([DynamicPropertyContainer], m), m
                    }(),
                    S = function() {
                        function c(m, f) {
                            this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = m, this.comp = m.comp, this.data = f, this.frameId = -1, this.d = f.d, this.initDynamicPropertyContainer(m), f.sy === 1 ? (this.ir = PropertyFactory.getProp(m, f.ir, 0, 0, this), this.is = PropertyFactory.getProp(m, f.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(m, f.pt, 0, 0, this), this.p = PropertyFactory.getProp(m, f.p, 1, 0, this), this.r = PropertyFactory.getProp(m, f.r, 0, degToRads, this), this.or = PropertyFactory.getProp(m, f.or, 0, 0, this), this.os = PropertyFactory.getProp(m, f.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                        }
                        return c.prototype = {
                            reset: i,
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                            },
                            convertStarToPath: function() {
                                var f = Math.floor(this.pt.v) * 2,
                                    l = Math.PI * 2 / f,
                                    b = !0,
                                    P = this.or.v,
                                    x = this.ir.v,
                                    T = this.os.v,
                                    F = this.is.v,
                                    R = 2 * Math.PI * P / (f * 2),
                                    L = 2 * Math.PI * x / (f * 2),
                                    I, B, D, w, M = -Math.PI / 2;
                                M += this.r.v;
                                var _ = this.data.d === 3 ? -1 : 1;
                                for (this.v._length = 0, I = 0; I < f; I += 1) {
                                    B = b ? P : x, D = b ? T : F, w = b ? R : L;
                                    var E = B * Math.cos(M),
                                        A = B * Math.sin(M),
                                        V = E === 0 && A === 0 ? 0 : A / Math.sqrt(E * E + A * A),
                                        k = E === 0 && A === 0 ? 0 : -E / Math.sqrt(E * E + A * A);
                                    E += +this.p.v[0], A += +this.p.v[1], this.v.setTripleAt(E, A, E - V * w * D * _, A - k * w * D * _, E + V * w * D * _, A + k * w * D * _, I, !0), b = !b, M += l * _
                                }
                            },
                            convertPolygonToPath: function() {
                                var f = Math.floor(this.pt.v),
                                    l = Math.PI * 2 / f,
                                    b = this.or.v,
                                    P = this.os.v,
                                    x = 2 * Math.PI * b / (f * 4),
                                    T, F = -Math.PI * .5,
                                    R = this.data.d === 3 ? -1 : 1;
                                for (F += this.r.v, this.v._length = 0, T = 0; T < f; T += 1) {
                                    var L = b * Math.cos(F),
                                        I = b * Math.sin(F),
                                        B = L === 0 && I === 0 ? 0 : I / Math.sqrt(L * L + I * I),
                                        D = L === 0 && I === 0 ? 0 : -L / Math.sqrt(L * L + I * I);
                                    L += +this.p.v[0], I += +this.p.v[1], this.v.setTripleAt(L, I, L - B * x * P * R, I - D * x * P * R, L + B * x * P * R, I + D * x * P * R, T, !0), F += l * R
                                }
                                this.paths.length = 0, this.paths[0] = this.v
                            }
                        }, extendPrototype([DynamicPropertyContainer], c), c
                    }(),
                    u = function() {
                        function c(m, f) {
                            this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = m, this.comp = m.comp, this.frameId = -1, this.d = f.d, this.initDynamicPropertyContainer(m), this.p = PropertyFactory.getProp(m, f.p, 1, 0, this), this.s = PropertyFactory.getProp(m, f.s, 1, 0, this), this.r = PropertyFactory.getProp(m, f.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                        }
                        return c.prototype = {
                            convertRectToPath: function() {
                                var f = this.p.v[0],
                                    l = this.p.v[1],
                                    b = this.s.v[0] / 2,
                                    P = this.s.v[1] / 2,
                                    x = bmMin(b, P, this.r.v),
                                    T = x * (1 - roundCorner);
                                this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(f + b, l - P + x, f + b, l - P + x, f + b, l - P + T, 0, !0), this.v.setTripleAt(f + b, l + P - x, f + b, l + P - T, f + b, l + P - x, 1, !0), x !== 0 ? (this.v.setTripleAt(f + b - x, l + P, f + b - x, l + P, f + b - T, l + P, 2, !0), this.v.setTripleAt(f - b + x, l + P, f - b + T, l + P, f - b + x, l + P, 3, !0), this.v.setTripleAt(f - b, l + P - x, f - b, l + P - x, f - b, l + P - T, 4, !0), this.v.setTripleAt(f - b, l - P + x, f - b, l - P + T, f - b, l - P + x, 5, !0), this.v.setTripleAt(f - b + x, l - P, f - b + x, l - P, f - b + T, l - P, 6, !0), this.v.setTripleAt(f + b - x, l - P, f + b - T, l - P, f + b - x, l - P, 7, !0)) : (this.v.setTripleAt(f - b, l + P, f - b + T, l + P, f - b, l + P, 2), this.v.setTripleAt(f - b, l - P, f - b, l - P + T, f - b, l - P, 3))) : (this.v.setTripleAt(f + b, l - P + x, f + b, l - P + T, f + b, l - P + x, 0, !0), x !== 0 ? (this.v.setTripleAt(f + b - x, l - P, f + b - x, l - P, f + b - T, l - P, 1, !0), this.v.setTripleAt(f - b + x, l - P, f - b + T, l - P, f - b + x, l - P, 2, !0), this.v.setTripleAt(f - b, l - P + x, f - b, l - P + x, f - b, l - P + T, 3, !0), this.v.setTripleAt(f - b, l + P - x, f - b, l + P - T, f - b, l + P - x, 4, !0), this.v.setTripleAt(f - b + x, l + P, f - b + x, l + P, f - b + T, l + P, 5, !0), this.v.setTripleAt(f + b - x, l + P, f + b - T, l + P, f + b - x, l + P, 6, !0), this.v.setTripleAt(f + b, l + P - x, f + b, l + P - x, f + b, l + P - T, 7, !0)) : (this.v.setTripleAt(f - b, l - P, f - b + T, l - P, f - b, l - P, 1, !0), this.v.setTripleAt(f - b, l + P, f - b, l + P - T, f - b, l + P, 2, !0), this.v.setTripleAt(f + b, l + P, f + b - T, l + P, f + b, l + P, 3, !0)))
                            },
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                            },
                            reset: i
                        }, extendPrototype([DynamicPropertyContainer], c), c
                    }();

                function g(c, m, f) {
                    var l;
                    if (f === 3 || f === 4) {
                        var b = f === 3 ? m.pt : m.ks,
                            P = b.k;
                        P.length ? l = new p(c, m, f) : l = new h(c, m, f)
                    } else f === 5 ? l = new u(c, m) : f === 6 ? l = new d(c, m) : f === 7 && (l = new S(c, m));
                    return l.k && c.addDynamicProperty(l), l
                }

                function y() {
                    return h
                }

                function v() {
                    return p
                }
                var C = {};
                return C.getShapeProp = g, C.getConstructorFunction = y, C.getKeyframedConstructorFunction = v, C
            }();
        /*!
         Transformation Matrix v2.0
         (c) Epistemex 2014-2015
         www.epistemex.com
         By Ken Fyrstenberg
         Contributions by leeoniya.
         License: MIT, header required.
         */
        var Matrix = function() {
            var t = Math.cos,
                e = Math.sin,
                r = Math.tan,
                i = Math.round;

            function s() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function a(_) {
                if (_ === 0) return this;
                var E = t(_),
                    A = e(_);
                return this._t(E, -A, 0, 0, A, E, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function n(_) {
                if (_ === 0) return this;
                var E = t(_),
                    A = e(_);
                return this._t(1, 0, 0, 0, 0, E, -A, 0, 0, A, E, 0, 0, 0, 0, 1)
            }

            function h(_) {
                if (_ === 0) return this;
                var E = t(_),
                    A = e(_);
                return this._t(E, 0, A, 0, 0, 1, 0, 0, -A, 0, E, 0, 0, 0, 0, 1)
            }

            function o(_) {
                if (_ === 0) return this;
                var E = t(_),
                    A = e(_);
                return this._t(E, -A, 0, 0, A, E, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function p(_, E) {
                return this._t(1, E, _, 1, 0, 0)
            }

            function d(_, E) {
                return this.shear(r(_), r(E))
            }

            function S(_, E) {
                var A = t(E),
                    V = e(E);
                return this._t(A, V, 0, 0, -V, A, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(_), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(A, -V, 0, 0, V, A, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function u(_, E, A) {
                return !A && A !== 0 && (A = 1), _ === 1 && E === 1 && A === 1 ? this : this._t(_, 0, 0, 0, 0, E, 0, 0, 0, 0, A, 0, 0, 0, 0, 1)
            }

            function g(_, E, A, V, k, O, N, z, q, H, U, tt, J, $, W, X) {
                return this.props[0] = _, this.props[1] = E, this.props[2] = A, this.props[3] = V, this.props[4] = k, this.props[5] = O, this.props[6] = N, this.props[7] = z, this.props[8] = q, this.props[9] = H, this.props[10] = U, this.props[11] = tt, this.props[12] = J, this.props[13] = $, this.props[14] = W, this.props[15] = X, this
            }

            function y(_, E, A) {
                return A = A || 0, _ !== 0 || E !== 0 || A !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, _, E, A, 1) : this
            }

            function v(_, E, A, V, k, O, N, z, q, H, U, tt, J, $, W, X) {
                var G = this.props;
                if (_ === 1 && E === 0 && A === 0 && V === 0 && k === 0 && O === 1 && N === 0 && z === 0 && q === 0 && H === 0 && U === 1 && tt === 0) return G[12] = G[12] * _ + G[15] * J, G[13] = G[13] * O + G[15] * $, G[14] = G[14] * U + G[15] * W, G[15] *= X, this._identityCalculated = !1, this;
                var j = G[0],
                    et = G[1],
                    at = G[2],
                    rt = G[3],
                    Q = G[4],
                    it = G[5],
                    st = G[6],
                    Y = G[7],
                    nt = G[8],
                    ot = G[9],
                    Z = G[10],
                    ht = G[11],
                    K = G[12],
                    lt = G[13],
                    ft = G[14],
                    pt = G[15];
                return G[0] = j * _ + et * k + at * q + rt * J, G[1] = j * E + et * O + at * H + rt * $, G[2] = j * A + et * N + at * U + rt * W, G[3] = j * V + et * z + at * tt + rt * X, G[4] = Q * _ + it * k + st * q + Y * J, G[5] = Q * E + it * O + st * H + Y * $, G[6] = Q * A + it * N + st * U + Y * W, G[7] = Q * V + it * z + st * tt + Y * X, G[8] = nt * _ + ot * k + Z * q + ht * J, G[9] = nt * E + ot * O + Z * H + ht * $, G[10] = nt * A + ot * N + Z * U + ht * W, G[11] = nt * V + ot * z + Z * tt + ht * X, G[12] = K * _ + lt * k + ft * q + pt * J, G[13] = K * E + lt * O + ft * H + pt * $, G[14] = K * A + lt * N + ft * U + pt * W, G[15] = K * V + lt * z + ft * tt + pt * X, this._identityCalculated = !1, this
            }

            function C() {
                return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
            }

            function c(_) {
                for (var E = 0; E < 16;) {
                    if (_.props[E] !== this.props[E]) return !1;
                    E += 1
                }
                return !0
            }

            function m(_) {
                var E;
                for (E = 0; E < 16; E += 1) _.props[E] = this.props[E];
                return _
            }

            function f(_) {
                var E;
                for (E = 0; E < 16; E += 1) this.props[E] = _[E]
            }

            function l(_, E, A) {
                return {
                    x: _ * this.props[0] + E * this.props[4] + A * this.props[8] + this.props[12],
                    y: _ * this.props[1] + E * this.props[5] + A * this.props[9] + this.props[13],
                    z: _ * this.props[2] + E * this.props[6] + A * this.props[10] + this.props[14]
                }
            }

            function b(_, E, A) {
                return _ * this.props[0] + E * this.props[4] + A * this.props[8] + this.props[12]
            }

            function P(_, E, A) {
                return _ * this.props[1] + E * this.props[5] + A * this.props[9] + this.props[13]
            }

            function x(_, E, A) {
                return _ * this.props[2] + E * this.props[6] + A * this.props[10] + this.props[14]
            }

            function T() {
                var _ = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                    E = this.props[5] / _,
                    A = -this.props[1] / _,
                    V = -this.props[4] / _,
                    k = this.props[0] / _,
                    O = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / _,
                    N = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / _,
                    z = new Matrix;
                return z.props[0] = E, z.props[1] = A, z.props[4] = V, z.props[5] = k, z.props[12] = O, z.props[13] = N, z
            }

            function F(_) {
                var E = this.getInverseMatrix();
                return E.applyToPointArray(_[0], _[1], _[2] || 0)
            }

            function R(_) {
                var E, A = _.length,
                    V = [];
                for (E = 0; E < A; E += 1) V[E] = F(_[E]);
                return V
            }

            function L(_, E, A) {
                var V = createTypedArray("float32", 6);
                if (this.isIdentity()) V[0] = _[0], V[1] = _[1], V[2] = E[0], V[3] = E[1], V[4] = A[0], V[5] = A[1];
                else {
                    var k = this.props[0],
                        O = this.props[1],
                        N = this.props[4],
                        z = this.props[5],
                        q = this.props[12],
                        H = this.props[13];
                    V[0] = _[0] * k + _[1] * N + q, V[1] = _[0] * O + _[1] * z + H, V[2] = E[0] * k + E[1] * N + q, V[3] = E[0] * O + E[1] * z + H, V[4] = A[0] * k + A[1] * N + q, V[5] = A[0] * O + A[1] * z + H
                }
                return V
            }

            function I(_, E, A) {
                var V;
                return this.isIdentity() ? V = [_, E, A] : V = [_ * this.props[0] + E * this.props[4] + A * this.props[8] + this.props[12], _ * this.props[1] + E * this.props[5] + A * this.props[9] + this.props[13], _ * this.props[2] + E * this.props[6] + A * this.props[10] + this.props[14]], V
            }

            function B(_, E) {
                if (this.isIdentity()) return _ + "," + E;
                var A = this.props;
                return Math.round((_ * A[0] + E * A[4] + A[12]) * 100) / 100 + "," + Math.round((_ * A[1] + E * A[5] + A[13]) * 100) / 100
            }

            function D() {
                for (var _ = 0, E = this.props, A = "matrix3d(", V = 1e4; _ < 16;) A += i(E[_] * V) / V, A += _ === 15 ? ")" : ",", _ += 1;
                return A
            }

            function w(_) {
                var E = 1e4;
                return _ < 1e-6 && _ > 0 || _ > -1e-6 && _ < 0 ? i(_ * E) / E : _
            }

            function M() {
                var _ = this.props,
                    E = w(_[0]),
                    A = w(_[1]),
                    V = w(_[4]),
                    k = w(_[5]),
                    O = w(_[12]),
                    N = w(_[13]);
                return "matrix(" + E + "," + A + "," + V + "," + k + "," + O + "," + N + ")"
            }
            return function() {
                this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = h, this.rotateZ = o, this.skew = d, this.skewFromAxis = S, this.shear = p, this.scale = u, this.setTransform = g, this.translate = y, this.transform = v, this.applyToPoint = l, this.applyToX = b, this.applyToY = P, this.applyToZ = x, this.applyToPointArray = I, this.applyToTriplePoints = L, this.applyToPointStringified = B, this.toCSS = D, this.to2dCSS = M, this.clone = m, this.cloneFromProps = f, this.equals = c, this.inversePoints = R, this.inversePoint = F, this.getInverseMatrix = T, this._t = this.transform, this.isIdentity = C, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
            }
        }();

        function _typeof$3(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$3 = function(r) {
                return typeof r
            } : _typeof$3 = function(r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }, _typeof$3(t)
        }
        var lottie = {};

        function setLocation(t) {
            setLocationHref(t)
        }

        function searchAnimations() {
            animationManager.searchAnimations()
        }

        function setSubframeRendering(t) {
            setSubframeEnabled(t)
        }

        function setPrefix(t) {
            setIdPrefix(t)
        }

        function loadAnimation(t) {
            return animationManager.loadAnimation(t)
        }

        function setQuality(t) {
            if (typeof t == "string") switch (t) {
                case "high":
                    setDefaultCurveSegments(200);
                    break;
                default:
                case "medium":
                    setDefaultCurveSegments(50);
                    break;
                case "low":
                    setDefaultCurveSegments(10);
                    break
            } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t)
        }

        function inBrowser() {
            return typeof navigator < "u"
        }

        function installPlugin(t, e) {
            t === "expressions" && setExpressionsPlugin(e)
        }

        function getFactory(t) {
            switch (t) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix;
                default:
                    return null
            }
        }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.11.0";

        function checkReady() {
            document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(t) {
            for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
                var i = e[r].split("=");
                if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
            }
            return null
        }
        var queryString = "";
        {
            var scripts = document.getElementsByTagName("script"),
                index = scripts.length - 1,
                myScript = scripts[index] || {
                    src: ""
                };
            queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
            _typeof$3(exports) !== "object" && (window.bodymovin = lottie)
        } catch (t) {}
        var ShapeModifiers = function() {
            var t = {},
                e = {};
            t.registerModifier = r, t.getModifier = i;

            function r(s, a) {
                e[s] || (e[s] = a)
            }

            function i(s, a, n) {
                return new e[s](a, n)
            }
            return t
        }();

        function ShapeModifier() {}
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
            if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {
                    shape: t.sh,
                    data: t,
                    localShapeCollection: shapeCollectionPool.newShapeCollection()
                };
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
            }
        }, ShapeModifier.prototype.init = function(t, e) {
            this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier);

        function TrimModifier() {}
        extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
            this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function(t) {
            t.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, s) {
            var a = [];
            e <= 1 ? a.push({
                s: t,
                e
            }) : t >= 1 ? a.push({
                s: t - 1,
                e: e - 1
            }) : (a.push({
                s: t,
                e: 1
            }), a.push({
                s: 0,
                e: e - 1
            }));
            var n = [],
                h, o = a.length,
                p;
            for (h = 0; h < o; h += 1)
                if (p = a[h], !(p.e * s < i || p.s * s > i + r)) {
                    var d, S;
                    p.s * s <= i ? d = 0 : d = (p.s * s - i) / r, p.e * s >= i + r ? S = 1 : S = (p.e * s - i) / r, n.push([d, S])
                } return n.length || n.push([0, 0]), n
        }, TrimModifier.prototype.releasePathsData = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
            return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function(t) {
            var e, r;
            if (this._mdf || t) {
                var i = this.o.v % 360 / 360;
                if (i < 0 && (i += 1), this.s.v > 1 ? e = 1 + i : this.s.v < 0 ? e = 0 + i : e = this.s.v + i, this.e.v > 1 ? r = 1 + i : this.e.v < 0 ? r = 0 + i : r = this.e.v + i, e > r) {
                    var s = e;
                    e = r, r = s
                }
                e = Math.round(e * 1e4) * 1e-4, r = Math.round(r * 1e4) * 1e-4, this.sValue = e, this.eValue = r
            } else e = this.sValue, r = this.eValue;
            var a, n, h = this.shapes.length,
                o, p, d, S, u, g = 0;
            if (r === e)
                for (n = 0; n < h; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
            else if (r === 1 && e === 0 || r === 0 && e === 1) {
                if (this._mdf)
                    for (n = 0; n < h; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
            } else {
                var y = [],
                    v, C;
                for (n = 0; n < h; n += 1)
                    if (v = this.shapes[n], !v.shape._mdf && !this._mdf && !t && this.m !== 2) v.shape.paths = v.localShapeCollection;
                    else {
                        if (a = v.shape.paths, p = a._length, u = 0, !v.shape._mdf && v.pathsData.length) u = v.totalShapeLength;
                        else {
                            for (d = this.releasePathsData(v.pathsData), o = 0; o < p; o += 1) S = bez.getSegmentsLength(a.shapes[o]), d.push(S), u += S.totalLength;
                            v.totalShapeLength = u, v.pathsData = d
                        }
                        g += u, v.shape._mdf = !0
                    } var c = e,
                    m = r,
                    f = 0,
                    l;
                for (n = h - 1; n >= 0; n -= 1)
                    if (v = this.shapes[n], v.shape._mdf) {
                        for (C = v.localShapeCollection, C.releaseShapes(), this.m === 2 && h > 1 ? (l = this.calculateShapeEdges(e, r, v.totalShapeLength, f, g), f += v.totalShapeLength) : l = [
                                [c, m]
                            ], p = l.length, o = 0; o < p; o += 1) {
                            c = l[o][0], m = l[o][1], y.length = 0, m <= 1 ? y.push({
                                s: v.totalShapeLength * c,
                                e: v.totalShapeLength * m
                            }) : c >= 1 ? y.push({
                                s: v.totalShapeLength * (c - 1),
                                e: v.totalShapeLength * (m - 1)
                            }) : (y.push({
                                s: v.totalShapeLength * c,
                                e: v.totalShapeLength
                            }), y.push({
                                s: 0,
                                e: v.totalShapeLength * (m - 1)
                            }));
                            var b = this.addShapes(v, y[0]);
                            if (y[0].s !== y[0].e) {
                                if (y.length > 1) {
                                    var P = v.shape.paths.shapes[v.shape.paths._length - 1];
                                    if (P.c) {
                                        var x = b.pop();
                                        this.addPaths(b, C), b = this.addShapes(v, y[1], x)
                                    } else this.addPaths(b, C), b = this.addShapes(v, y[1])
                                }
                                this.addPaths(b, C)
                            }
                        }
                        v.shape.paths = C
                    }
            }
        }, TrimModifier.prototype.addPaths = function(t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) e.addShape(t[r])
        }, TrimModifier.prototype.addSegment = function(t, e, r, i, s, a, n) {
            s.setXYAt(e[0], e[1], "o", a), s.setXYAt(r[0], r[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(i[0], i[1], "v", a + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
            e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
        }, TrimModifier.prototype.addShapes = function(t, e, r) {
            var i = t.pathsData,
                s = t.shape.paths.shapes,
                a, n = t.shape.paths._length,
                h, o, p = 0,
                d, S, u, g, y = [],
                v, C = !0;
            for (r ? (S = r._length, v = r._length) : (r = shapePool.newElement(), S = 0, v = 0), y.push(r), a = 0; a < n; a += 1) {
                for (u = i[a].lengths, r.c = s[a].c, o = s[a].c ? u.length : u.length + 1, h = 1; h < o; h += 1)
                    if (d = u[h - 1], p + d.addedLength < e.s) p += d.addedLength, r.c = !1;
                    else if (p > e.e) {
                    r.c = !1;
                    break
                } else e.s <= p && e.e >= p + d.addedLength ? (this.addSegment(s[a].v[h - 1], s[a].o[h - 1], s[a].i[h], s[a].v[h], r, S, C), C = !1) : (g = bez.getNewSegment(s[a].v[h - 1], s[a].v[h], s[a].o[h - 1], s[a].i[h], (e.s - p) / d.addedLength, (e.e - p) / d.addedLength, u[h - 1]), this.addSegmentFromArray(g, r, S, C), C = !1, r.c = !1), p += d.addedLength, S += 1;
                if (s[a].c && u.length) {
                    if (d = u[h - 1], p <= e.e) {
                        var c = u[h - 1].addedLength;
                        e.s <= p && e.e >= p + c ? (this.addSegment(s[a].v[h - 1], s[a].o[h - 1], s[a].i[0], s[a].v[0], r, S, C), C = !1) : (g = bez.getNewSegment(s[a].v[h - 1], s[a].v[0], s[a].o[h - 1], s[a].i[0], (e.s - p) / c, (e.e - p) / c, u[h - 1]), this.addSegmentFromArray(g, r, S, C), C = !1, r.c = !1)
                    } else r.c = !1;
                    p += d.addedLength, S += 1
                }
                if (r._length && (r.setXYAt(r.v[v][0], r.v[v][1], "i", v), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), p > e.e) break;
                a < n - 1 && (r = shapePool.newElement(), C = !0, y.push(r), S = 0)
            }
            return y
        };

        function PuckerAndBloatModifier() {}
        extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
            var r = e / 100,
                i = [0, 0],
                s = t._length,
                a = 0;
            for (a = 0; a < s; a += 1) i[0] += t.v[a][0], i[1] += t.v[a][1];
            i[0] /= s, i[1] /= s;
            var n = shapePool.newElement();
            n.c = t.c;
            var h, o, p, d, S, u;
            for (a = 0; a < s; a += 1) h = t.v[a][0] + (i[0] - t.v[a][0]) * r, o = t.v[a][1] + (i[1] - t.v[a][1]) * r, p = t.o[a][0] + (i[0] - t.o[a][0]) * -r, d = t.o[a][1] + (i[1] - t.o[a][1]) * -r, S = t.i[a][0] + (i[0] - t.i[a][0]) * -r, u = t.i[a][1] + (i[1] - t.i[a][1]) * -r, n.setTripleAt(h, o, p, d, S, u, a);
            return n
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length,
                s, a, n = this.amount.v;
            if (n !== 0) {
                var h, o;
                for (r = 0; r < i; r += 1) {
                    if (h = this.shapes[r], o = h.localShapeCollection, !(!h.shape._mdf && !this._mdf && !t))
                        for (o.releaseShapes(), h.shape._mdf = !0, e = h.shape.paths.shapes, a = h.shape.paths._length, s = 0; s < a; s += 1) o.addShape(this.processPath(e[s], n));
                    h.shape.paths = h.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function() {
            var t = [0, 0];

            function e(o) {
                var p = this._mdf;
                this.iterateDynamicProperties(), this._mdf = this._mdf || p, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            }

            function r(o) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || o) {
                        var p;
                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                            var d, S;
                            if (p = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (d = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / p, 0), S = this.p.getValueAtTime(this.p.keyframes[0].t / p, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (d = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / p, 0), S = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / p, 0)) : (d = this.p.pv, S = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / p, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                d = [], S = [];
                                var u = this.px,
                                    g = this.py;
                                u._caching.lastFrame + u.offsetTime <= u.keyframes[0].t ? (d[0] = u.getValueAtTime((u.keyframes[0].t + .01) / p, 0), d[1] = g.getValueAtTime((g.keyframes[0].t + .01) / p, 0), S[0] = u.getValueAtTime(u.keyframes[0].t / p, 0), S[1] = g.getValueAtTime(g.keyframes[0].t / p, 0)) : u._caching.lastFrame + u.offsetTime >= u.keyframes[u.keyframes.length - 1].t ? (d[0] = u.getValueAtTime(u.keyframes[u.keyframes.length - 1].t / p, 0), d[1] = g.getValueAtTime(g.keyframes[g.keyframes.length - 1].t / p, 0), S[0] = u.getValueAtTime((u.keyframes[u.keyframes.length - 1].t - .01) / p, 0), S[1] = g.getValueAtTime((g.keyframes[g.keyframes.length - 1].t - .01) / p, 0)) : (d = [u.pv, g.pv], S[0] = u.getValueAtTime((u._caching.lastFrame + u.offsetTime - .01) / p, u.offsetTime), S[1] = g.getValueAtTime((g._caching.lastFrame + g.offsetTime - .01) / p, g.offsetTime))
                            } else S = t, d = S;
                            this.v.rotate(-Math.atan2(d[1] - S[1], d[0] - S[0]))
                        }
                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }
                    this.frameId = this.elem.globalData.frameId
                }
            }

            function i() {
                if (!this.a.k) this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
                else return;
                if (!this.s.effectsSequence.length) this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
                else return;
                if (this.sk)
                    if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
                    else return;
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
            }

            function s() {}

            function a(o) {
                this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = !0
            }

            function n(o, p, d) {
                if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = p, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(d || o), p.p && p.p.s ? (this.px = PropertyFactory.getProp(o, p.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o, p.p.y, 0, 0, this), p.p.z && (this.pz = PropertyFactory.getProp(o, p.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o, p.p || {
                        k: [0, 0, 0]
                    }, 1, 0, this), p.rx) {
                    if (this.rx = PropertyFactory.getProp(o, p.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o, p.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o, p.rz, 0, degToRads, this), p.or.k[0].ti) {
                        var S, u = p.or.k.length;
                        for (S = 0; S < u; S += 1) p.or.k[S].to = null, p.or.k[S].ti = null
                    }
                    this.or = PropertyFactory.getProp(o, p.or, 1, degToRads, this), this.or.sh = !0
                } else this.r = PropertyFactory.getProp(o, p.r || {
                    k: 0
                }, 0, degToRads, this);
                p.sk && (this.sk = PropertyFactory.getProp(o, p.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o, p.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o, p.a || {
                    k: [0, 0, 0]
                }, 1, 0, this), this.s = PropertyFactory.getProp(o, p.s || {
                    k: [100, 100, 100]
                }, 1, .01, this), p.o ? this.o = PropertyFactory.getProp(o, p.o, 0, .01, o) : this.o = {
                    _mdf: !1,
                    v: 1
                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
            }
            n.prototype = {
                applyToMatrix: e,
                getValue: r,
                precalculateMatrix: i,
                autoOrient: s
            }, extendPrototype([DynamicPropertyContainer], n), n.prototype.addDynamicProperty = a, n.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;

            function h(o, p, d) {
                return new n(o, p, d)
            }
            return {
                getTransformProperty: h
            }
        }();

        function RepeaterModifier() {}
        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, a) {
            var n = a ? -1 : 1,
                h = i.s.v[0] + (1 - i.s.v[0]) * (1 - s),
                o = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
            t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / h : h, a ? 1 / o : o), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
        }, RepeaterModifier.prototype.init = function(t, e, r, i) {
            for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;) r -= 1, this._elements.unshift(e[r]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) t[e]._processed = !1, t[e].ty === "gr" && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function(t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) t[r]._render = e, t[r].ty === "gr" && this.changeGroupRender(t[r].it, e)
        }, RepeaterModifier.prototype.processShapes = function(t) {
            var e, r, i, s, a, n = !1;
            if (this._mdf || t) {
                var h = Math.ceil(this.c.v);
                if (this._groups.length < h) {
                    for (; this._groups.length < h;) {
                        var o = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        o.it.push({
                            a: {
                                a: 0,
                                ix: 1,
                                k: [0, 0]
                            },
                            nm: "Transform",
                            o: {
                                a: 0,
                                ix: 7,
                                k: 100
                            },
                            p: {
                                a: 0,
                                ix: 2,
                                k: [0, 0]
                            },
                            r: {
                                a: 1,
                                ix: 6,
                                k: [{
                                    s: 0,
                                    e: 0,
                                    t: 0
                                }, {
                                    s: 0,
                                    e: 0,
                                    t: 1
                                }]
                            },
                            s: {
                                a: 0,
                                ix: 3,
                                k: [100, 100]
                            },
                            sa: {
                                a: 0,
                                ix: 5,
                                k: 0
                            },
                            sk: {
                                a: 0,
                                ix: 4,
                                k: 0
                            },
                            ty: "tr"
                        }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1
                    }
                    this.elem.reloadShapes(), n = !0
                }
                a = 0;
                var p;
                for (i = 0; i <= this._groups.length - 1; i += 1) {
                    if (p = a < h, this._groups[i]._render = p, this.changeGroupRender(this._groups[i].it, p), !p) {
                        var d = this.elemsData[i].it,
                            S = d[d.length - 1];
                        S.transform.op.v !== 0 ? (S.transform.op._mdf = !0, S.transform.op.v = 0) : S.transform.op._mdf = !1
                    }
                    a += 1
                }
                this._currentCopies = h;
                var u = this.o.v,
                    g = u % 1,
                    y = u > 0 ? Math.floor(u) : Math.ceil(u),
                    v = this.pMatrix.props,
                    C = this.rMatrix.props,
                    c = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var m = 0;
                if (u > 0) {
                    for (; m < y;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), m += 1;
                    g && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, g, !1), m += g)
                } else if (u < 0) {
                    for (; m > y;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), m -= 1;
                    g && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -g, !0), m -= g)
                }
                i = this.data.m === 1 ? 0 : this._currentCopies - 1, s = this.data.m === 1 ? 1 : -1, a = this._currentCopies;
                for (var f, l; a;) {
                    if (e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, l = r.length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), m !== 0) {
                        for ((i !== 0 && s === 1 || i !== this._currentCopies - 1 && s === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(C[0], C[1], C[2], C[3], C[4], C[5], C[6], C[7], C[8], C[9], C[10], C[11], C[12], C[13], C[14], C[15]), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), f = 0; f < l; f += 1) r[f] = this.matrix.props[f];
                        this.matrix.reset()
                    } else
                        for (this.matrix.reset(), f = 0; f < l; f += 1) r[f] = this.matrix.props[f];
                    m += 1, a -= 1, i += s
                }
            } else
                for (a = this._currentCopies, i = 0, s = 1; a;) e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += s;
            return n
        }, RepeaterModifier.prototype.addShape = function() {};

        function RoundCornersModifier() {}
        extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
            var r = shapePool.newElement();
            r.c = t.c;
            var i, s = t._length,
                a, n, h, o, p, d, S = 0,
                u, g, y, v, C, c;
            for (i = 0; i < s; i += 1) a = t.v[i], h = t.o[i], n = t.i[i], a[0] === h[0] && a[1] === h[1] && a[0] === n[0] && a[1] === n[1] ? (i === 0 || i === s - 1) && !t.c ? (r.setTripleAt(a[0], a[1], h[0], h[1], n[0], n[1], S), S += 1) : (i === 0 ? o = t.v[s - 1] : o = t.v[i - 1], p = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), d = p ? Math.min(p / 2, e) / p : 0, C = a[0] + (o[0] - a[0]) * d, u = C, c = a[1] - (a[1] - o[1]) * d, g = c, y = u - (u - a[0]) * roundCorner, v = g - (g - a[1]) * roundCorner, r.setTripleAt(u, g, y, v, C, c, S), S += 1, i === s - 1 ? o = t.v[0] : o = t.v[i + 1], p = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), d = p ? Math.min(p / 2, e) / p : 0, y = a[0] + (o[0] - a[0]) * d, u = y, v = a[1] + (o[1] - a[1]) * d, g = v, C = u - (u - a[0]) * roundCorner, c = g - (g - a[1]) * roundCorner, r.setTripleAt(u, g, y, v, C, c, S), S += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], S), S += 1);
            return r
        }, RoundCornersModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length,
                s, a, n = this.rd.v;
            if (n !== 0) {
                var h, o;
                for (r = 0; r < i; r += 1) {
                    if (h = this.shapes[r], o = h.localShapeCollection, !(!h.shape._mdf && !this._mdf && !t))
                        for (o.releaseShapes(), h.shape._mdf = !0, e = h.shape.paths.shapes, a = h.shape.paths._length, s = 0; s < a; s += 1) o.addShape(this.processPath(e[s], n));
                    h.shape.paths = h.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };

        function floatEqual(t, e) {
            return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e))
        }

        function floatZero(t) {
            return Math.abs(t) <= 1e-5
        }

        function lerp(t, e, r) {
            return t * (1 - r) + e * r
        }

        function lerpPoint(t, e, r) {
            return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)]
        }

        function quadRoots(t, e, r) {
            if (t === 0) return [];
            var i = e * e - 4 * t * r;
            if (i < 0) return [];
            var s = -e / (2 * t);
            if (i === 0) return [s];
            var a = Math.sqrt(i) / (2 * t);
            return [s - a, s + a]
        }

        function polynomialCoefficients(t, e, r, i) {
            return [-t + 3 * e - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t]
        }

        function singlePoint(t) {
            return new PolynomialBezier(t, t, t, t, !1)
        }

        function PolynomialBezier(t, e, r, i, s) {
            s && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), s && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
            var a = polynomialCoefficients(t[0], e[0], r[0], i[0]),
                n = polynomialCoefficients(t[1], e[1], r[1], i[1]);
            this.a = [a[0], n[0]], this.b = [a[1], n[1]], this.c = [a[2], n[2]], this.d = [a[3], n[3]], this.points = [t, e, r, i]
        }
        PolynomialBezier.prototype.point = function(t) {
            return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
        }, PolynomialBezier.prototype.derivative = function(t) {
            return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
        }, PolynomialBezier.prototype.tangentAngle = function(t) {
            var e = this.derivative(t);
            return Math.atan2(e[1], e[0])
        }, PolynomialBezier.prototype.normalAngle = function(t) {
            var e = this.derivative(t);
            return Math.atan2(e[0], e[1])
        }, PolynomialBezier.prototype.inflectionPoints = function() {
            var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
            if (floatZero(t)) return [];
            var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
                r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
            if (r < 0) return [];
            var i = Math.sqrt(r);
            return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter(function(s) {
                return s > 0 && s < 1
            })
        }, PolynomialBezier.prototype.split = function(t) {
            if (t <= 0) return [singlePoint(this.points[0]), this];
            if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
            var e = lerpPoint(this.points[0], this.points[1], t),
                r = lerpPoint(this.points[1], this.points[2], t),
                i = lerpPoint(this.points[2], this.points[3], t),
                s = lerpPoint(e, r, t),
                a = lerpPoint(r, i, t),
                n = lerpPoint(s, a, t);
            return [new PolynomialBezier(this.points[0], e, s, n, !0), new PolynomialBezier(n, a, i, this.points[3], !0)]
        };

        function extrema(t, e) {
            var r = t.points[0][e],
                i = t.points[t.points.length - 1][e];
            if (r > i) {
                var s = i;
                i = r, r = s
            }
            for (var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1)
                if (a[n] > 0 && a[n] < 1) {
                    var h = t.point(a[n])[e];
                    h < r ? r = h : h > i && (i = h)
                } return {
                min: r,
                max: i
            }
        }
        PolynomialBezier.prototype.bounds = function() {
            return {
                x: extrema(this, 0),
                y: extrema(this, 1)
            }
        }, PolynomialBezier.prototype.boundingBox = function() {
            var t = this.bounds();
            return {
                left: t.x.min,
                right: t.x.max,
                top: t.y.min,
                bottom: t.y.max,
                width: t.x.max - t.x.min,
                height: t.y.max - t.y.min,
                cx: (t.x.max + t.x.min) / 2,
                cy: (t.y.max + t.y.min) / 2
            }
        };

        function intersectData(t, e, r) {
            var i = t.boundingBox();
            return {
                cx: i.cx,
                cy: i.cy,
                width: i.width,
                height: i.height,
                bez: t,
                t: (e + r) / 2,
                t1: e,
                t2: r
            }
        }

        function splitData(t) {
            var e = t.bez.split(.5);
            return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
        }

        function boxIntersect(t, e) {
            return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height
        }

        function intersectsImpl(t, e, r, i, s, a) {
            if (boxIntersect(t, e)) {
                if (r >= a || t.width <= i && t.height <= i && e.width <= i && e.height <= i) {
                    s.push([t.t, e.t]);
                    return
                }
                var n = splitData(t),
                    h = splitData(e);
                intersectsImpl(n[0], h[0], r + 1, i, s, a), intersectsImpl(n[0], h[1], r + 1, i, s, a), intersectsImpl(n[1], h[0], r + 1, i, s, a), intersectsImpl(n[1], h[1], r + 1, i, s, a)
            }
        }
        PolynomialBezier.prototype.intersections = function(t, e, r) {
            e === void 0 && (e = 2), r === void 0 && (r = 7);
            var i = [];
            return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r), i
        }, PolynomialBezier.shapeSegment = function(t, e) {
            var r = (e + 1) % t.length();
            return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0)
        }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
            var r = (e + 1) % t.length();
            return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0)
        };

        function crossProduct(t, e) {
            return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }

        function lineIntersection(t, e, r, i) {
            var s = [t[0], t[1], 1],
                a = [e[0], e[1], 1],
                n = [r[0], r[1], 1],
                h = [i[0], i[1], 1],
                o = crossProduct(crossProduct(s, a), crossProduct(n, h));
            return floatZero(o[2]) ? null : [o[0] / o[2], o[1] / o[2]]
        }

        function polarOffset(t, e, r) {
            return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r]
        }

        function pointDistance(t, e) {
            return Math.hypot(t[0] - e[0], t[1] - e[1])
        }

        function pointEqual(t, e) {
            return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
        }

        function ZigZagModifier() {}
        extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
        };

        function setPoint(t, e, r, i, s, a, n) {
            var h = r - Math.PI / 2,
                o = r + Math.PI / 2,
                p = e[0] + Math.cos(r) * i * s,
                d = e[1] - Math.sin(r) * i * s;
            t.setTripleAt(p, d, p + Math.cos(h) * a, d - Math.sin(h) * a, p + Math.cos(o) * n, d - Math.sin(o) * n, t.length())
        }

        function getPerpendicularVector(t, e) {
            var r = [e[0] - t[0], e[1] - t[1]],
                i = -Math.PI * .5,
                s = [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]];
            return s
        }

        function getProjectingAngle(t, e) {
            var r = e === 0 ? t.length() - 1 : e - 1,
                i = (e + 1) % t.length(),
                s = t.v[r],
                a = t.v[i],
                n = getPerpendicularVector(s, a);
            return Math.atan2(0, 1) - Math.atan2(n[1], n[0])
        }

        function zigZagCorner(t, e, r, i, s, a, n) {
            var h = getProjectingAngle(e, r),
                o = e.v[r % e._length],
                p = e.v[r === 0 ? e._length - 1 : r - 1],
                d = e.v[(r + 1) % e._length],
                S = a === 2 ? Math.sqrt(Math.pow(o[0] - p[0], 2) + Math.pow(o[1] - p[1], 2)) : 0,
                u = a === 2 ? Math.sqrt(Math.pow(o[0] - d[0], 2) + Math.pow(o[1] - d[1], 2)) : 0;
            setPoint(t, e.v[r % e._length], h, n, i, u / ((s + 1) * 2), S / ((s + 1) * 2))
        }

        function zigZagSegment(t, e, r, i, s, a) {
            for (var n = 0; n < i; n += 1) {
                var h = (n + 1) / (i + 1),
                    o = s === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                    p = e.normalAngle(h),
                    d = e.point(h);
                setPoint(t, d, p, a, r, o / ((i + 1) * 2), o / ((i + 1) * 2)), a = -a
            }
            return a
        }
        ZigZagModifier.prototype.processPath = function(t, e, r, i) {
            var s = t._length,
                a = shapePool.newElement();
            if (a.c = t.c, t.c || (s -= 1), s === 0) return a;
            var n = -1,
                h = PolynomialBezier.shapeSegment(t, 0);
            zigZagCorner(a, t, 0, e, r, i, n);
            for (var o = 0; o < s; o += 1) n = zigZagSegment(a, h, e, r, i, -n), o === s - 1 && !t.c ? h = null : h = PolynomialBezier.shapeSegment(t, (o + 1) % s), zigZagCorner(a, t, o + 1, e, r, i, n);
            return a
        }, ZigZagModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length,
                s, a, n = this.amplitude.v,
                h = Math.max(0, Math.round(this.frequency.v)),
                o = this.pointsType.v;
            if (n !== 0) {
                var p, d;
                for (r = 0; r < i; r += 1) {
                    if (p = this.shapes[r], d = p.localShapeCollection, !(!p.shape._mdf && !this._mdf && !t))
                        for (d.releaseShapes(), p.shape._mdf = !0, e = p.shape.paths.shapes, a = p.shape.paths._length, s = 0; s < a; s += 1) d.addShape(this.processPath(e[s], n, h, o));
                    p.shape.paths = p.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };

        function linearOffset(t, e, r) {
            var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
            return [polarOffset(t, i, r), polarOffset(e, i, r)]
        }

        function offsetSegment(t, e) {
            var r, i, s, a, n, h, o;
            o = linearOffset(t.points[0], t.points[1], e), r = o[0], i = o[1], o = linearOffset(t.points[1], t.points[2], e), s = o[0], a = o[1], o = linearOffset(t.points[2], t.points[3], e), n = o[0], h = o[1];
            var p = lineIntersection(r, i, s, a);
            p === null && (p = i);
            var d = lineIntersection(n, h, s, a);
            return d === null && (d = n), new PolynomialBezier(r, p, d, h)
        }

        function joinLines(t, e, r, i, s) {
            var a = e.points[3],
                n = r.points[0];
            if (i === 3 || pointEqual(a, n)) return a;
            if (i === 2) {
                var h = -e.tangentAngle(1),
                    o = -r.tangentAngle(0) + Math.PI,
                    p = lineIntersection(a, polarOffset(a, h + Math.PI / 2, 100), n, polarOffset(n, h + Math.PI / 2, 100)),
                    d = p ? pointDistance(p, a) : pointDistance(a, n) / 2,
                    S = polarOffset(a, h, 2 * d * roundCorner);
                return t.setXYAt(S[0], S[1], "o", t.length() - 1), S = polarOffset(n, o, 2 * d * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], S[0], S[1], t.length()), n
            }
            var u = pointEqual(a, e.points[2]) ? e.points[0] : e.points[2],
                g = pointEqual(n, r.points[1]) ? r.points[3] : r.points[1],
                y = lineIntersection(u, a, n, g);
            return y && pointDistance(y, a) < s ? (t.setTripleAt(y[0], y[1], y[0], y[1], y[0], y[1], t.length()), y) : a
        }

        function getIntersection(t, e) {
            var r = t.intersections(e);
            return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
        }

        function pruneSegmentIntersection(t, e) {
            var r = t.slice(),
                i = e.slice(),
                s = getIntersection(t[t.length - 1], e[0]);
            return s && (r[t.length - 1] = t[t.length - 1].split(s[0])[0], i[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1]), s) ? [
                [t[0].split(s[0])[0]],
                [e[e.length - 1].split(s[1])[1]]
            ] : [r, i]
        }

        function pruneIntersections(t) {
            for (var e, r = 1; r < t.length; r += 1) e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
            return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
        }

        function offsetSegmentSplit(t, e) {
            var r = t.inflectionPoints(),
                i, s, a, n;
            if (r.length === 0) return [offsetSegment(t, e)];
            if (r.length === 1 || floatEqual(r[1], 1)) return a = t.split(r[0]), i = a[0], s = a[1], [offsetSegment(i, e), offsetSegment(s, e)];
            a = t.split(r[0]), i = a[0];
            var h = (r[1] - r[0]) / (1 - r[0]);
            return a = a[1].split(h), n = a[0], s = a[1], [offsetSegment(i, e), offsetSegment(n, e), offsetSegment(s, e)]
        }

        function OffsetPathModifier() {}
        extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
        }, OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
            var s = shapePool.newElement();
            s.c = t.c;
            var a = t.length();
            t.c || (a -= 1);
            var n, h, o, p = [];
            for (n = 0; n < a; n += 1) o = PolynomialBezier.shapeSegment(t, n), p.push(offsetSegmentSplit(o, e));
            if (!t.c)
                for (n = a - 1; n >= 0; n -= 1) o = PolynomialBezier.shapeSegmentInverted(t, n), p.push(offsetSegmentSplit(o, e));
            p = pruneIntersections(p);
            var d = null,
                S = null;
            for (n = 0; n < p.length; n += 1) {
                var u = p[n];
                for (S && (d = joinLines(s, S, u[0], r, i)), S = u[u.length - 1], h = 0; h < u.length; h += 1) o = u[h], d && pointEqual(o.points[0], d) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), d = o.points[3]
            }
            return p.length && joinLines(s, S, p[0][0], r, i), s
        }, OffsetPathModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length,
                s, a, n = this.amount.v,
                h = this.miterLimit.v,
                o = this.lineJoin;
            if (n !== 0) {
                var p, d;
                for (r = 0; r < i; r += 1) {
                    if (p = this.shapes[r], d = p.localShapeCollection, !(!p.shape._mdf && !this._mdf && !t))
                        for (d.releaseShapes(), p.shape._mdf = !0, e = p.shape.paths.shapes, a = p.shape.paths._length, s = 0; s < a; s += 1) d.addShape(this.processPath(e[s], n, o, h));
                    p.shape.paths = p.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };

        function getFontProperties(t) {
            for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", s = e.length, a, n = 0; n < s; n += 1) switch (a = e[n].toLowerCase(), a) {
                case "italic":
                    i = "italic";
                    break;
                case "bold":
                    r = "700";
                    break;
                case "black":
                    r = "900";
                    break;
                case "medium":
                    r = "500";
                    break;
                case "regular":
                case "normal":
                    r = "400";
                    break;
                case "light":
                case "thin":
                    r = "200";
                    break
            }
            return {
                style: i,
                weight: t.fWeight || r
            }
        }
        var FontManager = function() {
            var t = 5e3,
                e = {
                    w: 0,
                    size: 0,
                    shapes: [],
                    data: {
                        shapes: []
                    }
                },
                r = [];
            r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
            var i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
                s = [65039, 8205];

            function a(l) {
                var b = l.split(","),
                    P, x = b.length,
                    T = [];
                for (P = 0; P < x; P += 1) b[P] !== "sans-serif" && b[P] !== "monospace" && T.push(b[P]);
                return T.join(",")
            }

            function n(l, b) {
                var P = createTag("span");
                P.setAttribute("aria-hidden", !0), P.style.fontFamily = b;
                var x = createTag("span");
                x.innerText = "giItT1WQy@!-/#", P.style.position = "absolute", P.style.left = "-10000px", P.style.top = "-10000px", P.style.fontSize = "300px", P.style.fontVariant = "normal", P.style.fontStyle = "normal", P.style.fontWeight = "normal", P.style.letterSpacing = "0", P.appendChild(x), document.body.appendChild(P);
                var T = x.offsetWidth;
                return x.style.fontFamily = a(l) + ", " + b, {
                    node: x,
                    w: T,
                    parent: P
                }
            }

            function h() {
                var l, b = this.fonts.length,
                    P, x, T = b;
                for (l = 0; l < b; l += 1) this.fonts[l].loaded ? T -= 1 : this.fonts[l].fOrigin === "n" || this.fonts[l].origin === 0 ? this.fonts[l].loaded = !0 : (P = this.fonts[l].monoCase.node, x = this.fonts[l].monoCase.w, P.offsetWidth !== x ? (T -= 1, this.fonts[l].loaded = !0) : (P = this.fonts[l].sansCase.node, x = this.fonts[l].sansCase.w, P.offsetWidth !== x && (T -= 1, this.fonts[l].loaded = !0)), this.fonts[l].loaded && (this.fonts[l].sansCase.parent.parentNode.removeChild(this.fonts[l].sansCase.parent), this.fonts[l].monoCase.parent.parentNode.removeChild(this.fonts[l].monoCase.parent)));
                T !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            }

            function o(l, b) {
                var P = document.body && b ? "svg" : "canvas",
                    x, T = getFontProperties(l);
                if (P === "svg") {
                    var F = createNS("text");
                    F.style.fontSize = "100px", F.setAttribute("font-family", l.fFamily), F.setAttribute("font-style", T.style), F.setAttribute("font-weight", T.weight), F.textContent = "1", l.fClass ? (F.style.fontFamily = "inherit", F.setAttribute("class", l.fClass)) : F.style.fontFamily = l.fFamily, b.appendChild(F), x = F
                } else {
                    var R = new OffscreenCanvas(500, 500).getContext("2d");
                    R.font = T.style + " " + T.weight + " 100px " + l.fFamily, x = R
                }

                function L(I) {
                    return P === "svg" ? (x.textContent = I, x.getComputedTextLength()) : x.measureText(I).width
                }
                return {
                    measureText: L
                }
            }

            function p(l, b) {
                if (!l) {
                    this.isLoaded = !0;
                    return
                }
                if (this.chars) {
                    this.isLoaded = !0, this.fonts = l.list;
                    return
                }
                if (!document.body) {
                    this.isLoaded = !0, l.list.forEach(function(M) {
                        M.helper = o(M), M.cache = {}
                    }), this.fonts = l.list;
                    return
                }
                var P = l.list,
                    x, T = P.length,
                    F = T;
                for (x = 0; x < T; x += 1) {
                    var R = !0,
                        L, I;
                    if (P[x].loaded = !1, P[x].monoCase = n(P[x].fFamily, "monospace"), P[x].sansCase = n(P[x].fFamily, "sans-serif"), !P[x].fPath) P[x].loaded = !0, F -= 1;
                    else if (P[x].fOrigin === "p" || P[x].origin === 3) {
                        if (L = document.querySelectorAll('style[f-forigin="p"][f-family="' + P[x].fFamily + '"], style[f-origin="3"][f-family="' + P[x].fFamily + '"]'), L.length > 0 && (R = !1), R) {
                            var B = createTag("style");
                            B.setAttribute("f-forigin", P[x].fOrigin), B.setAttribute("f-origin", P[x].origin), B.setAttribute("f-family", P[x].fFamily), B.type = "text/css", B.innerText = "@font-face {font-family: " + P[x].fFamily + "; font-style: normal; src: url('" + P[x].fPath + "');}", b.appendChild(B)
                        }
                    } else if (P[x].fOrigin === "g" || P[x].origin === 1) {
                        for (L = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), I = 0; I < L.length; I += 1) L[I].href.indexOf(P[x].fPath) !== -1 && (R = !1);
                        if (R) {
                            var D = createTag("link");
                            D.setAttribute("f-forigin", P[x].fOrigin), D.setAttribute("f-origin", P[x].origin), D.type = "text/css", D.rel = "stylesheet", D.href = P[x].fPath, document.body.appendChild(D)
                        }
                    } else if (P[x].fOrigin === "t" || P[x].origin === 2) {
                        for (L = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), I = 0; I < L.length; I += 1) P[x].fPath === L[I].src && (R = !1);
                        if (R) {
                            var w = createTag("link");
                            w.setAttribute("f-forigin", P[x].fOrigin), w.setAttribute("f-origin", P[x].origin), w.setAttribute("rel", "stylesheet"), w.setAttribute("href", P[x].fPath), b.appendChild(w)
                        }
                    }
                    P[x].helper = o(P[x], b), P[x].cache = {}, this.fonts.push(P[x])
                }
                F === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
            }

            function d(l) {
                if (l) {
                    this.chars || (this.chars = []);
                    var b, P = l.length,
                        x, T = this.chars.length,
                        F;
                    for (b = 0; b < P; b += 1) {
                        for (x = 0, F = !1; x < T;) this.chars[x].style === l[b].style && this.chars[x].fFamily === l[b].fFamily && this.chars[x].ch === l[b].ch && (F = !0), x += 1;
                        F || (this.chars.push(l[b]), T += 1)
                    }
                }
            }

            function S(l, b, P) {
                for (var x = 0, T = this.chars.length; x < T;) {
                    if (this.chars[x].ch === l && this.chars[x].style === b && this.chars[x].fFamily === P) return this.chars[x];
                    x += 1
                }
                return (typeof l == "string" && l.charCodeAt(0) !== 13 || !l) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", l, b, P)), e
            }

            function u(l, b, P) {
                var x = this.getFontByName(b),
                    T = l.charCodeAt(0);
                if (!x.cache[T + 1]) {
                    var F = x.helper;
                    if (l === " ") {
                        var R = F.measureText("|" + l + "|"),
                            L = F.measureText("||");
                        x.cache[T + 1] = (R - L) / 100
                    } else x.cache[T + 1] = F.measureText(l) / 100
                }
                return x.cache[T + 1] * P
            }

            function g(l) {
                for (var b = 0, P = this.fonts.length; b < P;) {
                    if (this.fonts[b].fName === l) return this.fonts[b];
                    b += 1
                }
                return this.fonts[0]
            }

            function y(l, b) {
                var P = l.toString(16) + b.toString(16);
                return i.indexOf(P) !== -1
            }

            function v(l, b) {
                return b ? l === s[0] && b === s[1] : l === s[1]
            }

            function C(l) {
                return r.indexOf(l) !== -1
            }

            function c() {
                this.isLoaded = !0
            }
            var m = function() {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
            };
            m.isModifier = y, m.isZeroWidthJoiner = v, m.isCombinedCharacter = C;
            var f = {
                addChars: d,
                addFonts: p,
                getCharData: S,
                getFontByName: g,
                measureText: u,
                checkLoadedFonts: h,
                setIsLoaded: c
            };
            return m.prototype = f, m
        }();

        function SlotManager(t) {
            this.animationData = t
        }
        SlotManager.prototype.getProp = function(t) {
            return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
        };

        function slotFactory(t) {
            return new SlotManager(t)
        }

        function RenderableElement() {}
        RenderableElement.prototype = {
            initRenderable: function() {
                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
            },
            addRenderableComponent: function(e) {
                this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e)
            },
            removeRenderableComponent: function(e) {
                this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
            },
            prepareRenderableFrame: function(e) {
                this.checkLayerLimits(e)
            },
            checkTransparency: function() {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
            },
            checkLayerLimits: function(e) {
                this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
            },
            renderRenderable: function() {
                var e, r = this.renderableComponents.length;
                for (e = 0; e < r; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
            },
            sourceRectAtTime: function() {
                return {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                }
            },
            getLayerSize: function() {
                return this.data.ty === 5 ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {
                    w: this.data.width,
                    h: this.data.height
                }
            }
        };
        var getBlendMode = function() {
            var t = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            };
            return function(e) {
                return t[e] || ""
            }
        }();

        function SliderEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function AngleEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function ColorEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function PointEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function LayerIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function MaskIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function CheckboxEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function NoValueEffect() {
            this.p = {}
        }

        function EffectsManager(t, e) {
            var r = t.ef || [];
            this.effectElements = [];
            var i, s = r.length,
                a;
            for (i = 0; i < s; i += 1) a = new GroupEffect(r[i], e), this.effectElements.push(a)
        }

        function GroupEffect(t, e) {
            this.init(t, e)
        }
        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var r, i = this.data.ef.length,
                s, a = this.data.ef;
            for (r = 0; r < i; r += 1) {
                switch (s = null, a[r].ty) {
                    case 0:
                        s = new SliderEffect(a[r], e, this);
                        break;
                    case 1:
                        s = new AngleEffect(a[r], e, this);
                        break;
                    case 2:
                        s = new ColorEffect(a[r], e, this);
                        break;
                    case 3:
                        s = new PointEffect(a[r], e, this);
                        break;
                    case 4:
                    case 7:
                        s = new CheckboxEffect(a[r], e, this);
                        break;
                    case 10:
                        s = new LayerIndexEffect(a[r], e, this);
                        break;
                    case 11:
                        s = new MaskIndexEffect(a[r], e, this);
                        break;
                    case 5:
                        s = new EffectsManager(a[r], e);
                        break;
                    default:
                        s = new NoValueEffect(a[r]);
                        break
                }
                s && this.effectElements.push(s)
            }
        };

        function BaseElement() {}
        BaseElement.prototype = {
            checkMasks: function() {
                if (!this.data.hasMask) return !1;
                for (var e = 0, r = this.data.masksProperties.length; e < r;) {
                    if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== !1) return !0;
                    e += 1
                }
                return !1
            },
            initExpressions: function() {
                var e = getExpressionInterfaces();
                if (e) {
                    var r = e("layer"),
                        i = e("effects"),
                        s = e("shape"),
                        a = e("text"),
                        n = e("comp");
                    this.layerInterface = r(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var h = i.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(h), this.data.ty === 0 || this.data.xt ? this.compInterface = n(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface)
                }
            },
            setBlendMode: function() {
                var e = getBlendMode(this.data.bm),
                    r = this.baseElement || this.layerElement;
                r.style["mix-blend-mode"] = e
            },
            initBaseData: function(e, r, i) {
                this.globalData = r, this.comp = i, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
            },
            getType: function() {
                return this.type
            },
            sourceRectAtTime: function() {}
        };

        function FrameElement() {}
        FrameElement.prototype = {
            initFrame: function() {
                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
            },
            prepareProperties: function(e, r) {
                var i, s = this.dynamicProperties.length;
                for (i = 0; i < s; i += 1)(r || this._isParent && this.dynamicProperties[i].propType === "transform") && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
            },
            addDynamicProperty: function(e) {
                this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e)
            }
        };

        function FootageElement(t, e, r) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r)
        }
        FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
            return null
        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
            var t = getExpressionInterfaces();
            if (t) {
                var e = t("footage");
                this.layerInterface = e(this)
            }
        }, FootageElement.prototype.getFootageData = function() {
            return this.footageData
        };

        function AudioElement(t, e, r) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
            var i = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
                k: [100]
            }, 1, .01, this)
        }
        AudioElement.prototype.prepareFrame = function(t) {
            if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
            else {
                var e = this.tm.v;
                this._currentTime = e
            }
            this._volume = this.lv.v[0];
            var r = this._volume * this._volumeMultiplier;
            this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
            this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function() {
            this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function() {
            this._canPlay = !0
        }, AudioElement.prototype.setRate = function(t) {
            this.audio.rate(t)
        }, AudioElement.prototype.volume = function(t) {
            this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
        }, AudioElement.prototype.getBaseElement = function() {
            return null
        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {};

        function BaseRenderer() {}
        BaseRenderer.prototype.checkLayers = function(t) {
            var e, r = this.layers.length,
                i;
            for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e], i.ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : !1;
            this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(t) {
            switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 6:
                    return this.createAudio(t);
                case 13:
                    return this.createCamera(t);
                case 15:
                    return this.createFootage(t);
                default:
                    return this.createNull(t)
            }
        }, BaseRenderer.prototype.createCamera = function() {
            throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function(t) {
            return new AudioElement(t, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function(t) {
            return new FootageElement(t, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.buildItem(t);
            this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(t) {
            this.completeLayers = !1;
            var e, r = t.length,
                i, s = this.layers.length;
            for (e = 0; e < r; e += 1)
                for (i = 0; i < s;) {
                    if (this.layers[i].id === t[e].id) {
                        this.layers[i] = t[e];
                        break
                    }
                    i += 1
                }
        }, BaseRenderer.prototype.setProjectInterface = function(t) {
            this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
            for (var i = this.elements, s = this.layers, a = 0, n = s.length; a < n;) s[a].ind == e && (!i[a] || i[a] === !0 ? (this.buildItem(a), this.addPendingElement(t)) : (r.push(i[a]), i[a].setAsParent(), s[a].parent !== void 0 ? this.buildElementParenting(t, s[a].parent, r) : t.setHierarchy(r))), a += 1
        }, BaseRenderer.prototype.addPendingElement = function(t) {
            this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1)
                if (t[e].xt) {
                    var i = this.createComp(t[e]);
                    i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                }
        }, BaseRenderer.prototype.getElementById = function(t) {
            var e, r = this.elements.length;
            for (e = 0; e < r; e += 1)
                if (this.elements[e].data.ind === t) return this.elements[e];
            return null
        }, BaseRenderer.prototype.getElementByPath = function(t) {
            var e = t.shift(),
                r;
            if (typeof e == "number") r = this.elements[e];
            else {
                var i, s = this.elements.length;
                for (i = 0; i < s; i += 1)
                    if (this.elements[i].data.nm === e) {
                        r = this.elements[i];
                        break
                    }
            }
            return t.length === 0 ? r : r.getElementByPath(t)
        }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
            this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                w: t.w,
                h: t.h
            }
        };

        function TransformElement() {}
        TransformElement.prototype = {
            initTransform: function() {
                this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                        o: 0
                    },
                    _matMdf: !1,
                    _opMdf: !1,
                    mat: new Matrix
                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
            },
            renderTransform: function() {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                    var e, r = this.finalTransform.mat,
                        i = 0,
                        s = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; i < s;) {
                            if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break
                            }
                            i += 1
                        }
                    if (this.finalTransform._matMdf)
                        for (e = this.finalTransform.mProp.v.props, r.cloneFromProps(e), i = 0; i < s; i += 1) e = this.hierarchy[i].finalTransform.mProp.v.props, r.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
                }
            },
            globalToLocal: function(e) {
                var r = [];
                r.push(this.finalTransform);
                for (var i = !0, s = this.comp; i;) s.finalTransform ? (s.data.hasMask && r.splice(0, 0, s.finalTransform), s = s.comp) : i = !1;
                var a, n = r.length,
                    h;
                for (a = 0; a < n; a += 1) h = r[a].mat.applyToPointArray(0, 0, 0), e = [e[0] - h[0], e[1] - h[1], 0];
                return e
            },
            mHelper: new Matrix
        };

        function MaskElement(t, e, r) {
            this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var i = this.globalData.defs,
                s, a = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(a), this.solidPath = "";
            var n, h = this.masksProperties,
                o = 0,
                p = [],
                d, S, u = createElementID(),
                g, y, v, C, c = "clipPath",
                m = "clip-path";
            for (s = 0; s < a; s += 1)
                if ((h[s].mode !== "a" && h[s].mode !== "n" || h[s].inv || h[s].o.k !== 100 || h[s].o.x) && (c = "mask", m = "mask"), (h[s].mode === "s" || h[s].mode === "i") && o === 0 ? (g = createNS("rect"), g.setAttribute("fill", "#ffffff"), g.setAttribute("width", this.element.comp.data.w || 0), g.setAttribute("height", this.element.comp.data.h || 0), p.push(g)) : g = null, n = createNS("path"), h[s].mode === "n") this.viewData[s] = {
                    op: PropertyFactory.getProp(this.element, h[s].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, h[s], 3),
                    elem: n,
                    lastPath: ""
                }, i.appendChild(n);
                else {
                    o += 1, n.setAttribute("fill", h[s].mode === "s" ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero");
                    var f;
                    if (h[s].x.k !== 0 ? (c = "mask", m = "mask", C = PropertyFactory.getProp(this.element, h[s].x, 0, null, this.element), f = createElementID(), y = createNS("filter"), y.setAttribute("id", f), v = createNS("feMorphology"), v.setAttribute("operator", "erode"), v.setAttribute("in", "SourceGraphic"), v.setAttribute("radius", "0"), y.appendChild(v), i.appendChild(y), n.setAttribute("stroke", h[s].mode === "s" ? "#000000" : "#ffffff")) : (v = null, C = null), this.storedData[s] = {
                            elem: n,
                            x: C,
                            expan: v,
                            lastPath: "",
                            lastOperator: "",
                            filterId: f,
                            lastRadius: 0
                        }, h[s].mode === "i") {
                        S = p.length;
                        var l = createNS("g");
                        for (d = 0; d < S; d += 1) l.appendChild(p[d]);
                        var b = createNS("mask");
                        b.setAttribute("mask-type", "alpha"), b.setAttribute("id", u + "_" + o), b.appendChild(n), i.appendChild(b), l.setAttribute("mask", "url(" + getLocationHref() + "#" + u + "_" + o + ")"), p.length = 0, p.push(l)
                    } else p.push(n);
                    h[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
                        elem: n,
                        lastPath: "",
                        op: PropertyFactory.getProp(this.element, h[s].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, h[s], 3),
                        invRect: g
                    }, this.viewData[s].prop.k || this.drawPath(h[s], this.viewData[s].prop.v, this.viewData[s])
                } for (this.maskElement = createNS(c), a = p.length, s = 0; s < a; s += 1) this.maskElement.appendChild(p[s]);
            o > 0 && (this.maskElement.setAttribute("id", u), this.element.maskedElement.setAttribute(m, "url(" + getLocationHref() + "#" + u + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }
        MaskElement.prototype.getMaskProperty = function(t) {
            return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function(t) {
            var e = this.element.finalTransform.mat,
                r, i = this.masksProperties.length;
            for (r = 0; r < i; r += 1)
                if ((this.viewData[r].prop._mdf || t) && this.drawPath(this.masksProperties[r], this.viewData[r].prop.v, this.viewData[r]), (this.viewData[r].op._mdf || t) && this.viewData[r].elem.setAttribute("fill-opacity", this.viewData[r].op.v), this.masksProperties[r].mode !== "n" && (this.viewData[r].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[r].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[r].x && (this.storedData[r].x._mdf || t))) {
                    var s = this.storedData[r].expan;
                    this.storedData[r].x.v < 0 ? (this.storedData[r].lastOperator !== "erode" && (this.storedData[r].lastOperator = "erode", this.storedData[r].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[r].filterId + ")")), s.setAttribute("radius", -this.storedData[r].x.v)) : (this.storedData[r].lastOperator !== "dilate" && (this.storedData[r].lastOperator = "dilate", this.storedData[r].elem.setAttribute("filter", null)), this.storedData[r].elem.setAttribute("stroke-width", this.storedData[r].x.v * 2))
                }
        }, MaskElement.prototype.getMaskelement = function() {
            return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t
        }, MaskElement.prototype.drawPath = function(t, e, r) {
            var i = " M" + e.v[0][0] + "," + e.v[0][1],
                s, a;
            for (a = e._length, s = 1; s < a; s += 1) i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
            if (e.c && a > 1 && (i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== i) {
                var n = "";
                r.elem && (e.c && (n = t.inv ? this.solidPath + i : i), r.elem.setAttribute("d", n)), r.lastPath = i
            }
        }, MaskElement.prototype.destroy = function() {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = function() {
                var t = {};
                t.createFilter = e, t.createAlphaToLuminanceFilter = r;

                function e(i, s) {
                    var a = createNS("filter");
                    return a.setAttribute("id", i), s !== !0 && (a.setAttribute("filterUnits", "objectBoundingBox"), a.setAttribute("x", "0%"), a.setAttribute("y", "0%"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%")), a
                }

                function r() {
                    var i = createNS("feColorMatrix");
                    return i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i
                }
                return t
            }(),
            featureSupport = function() {
                var t = {
                    maskType: !0,
                    svgLumaHidden: !0,
                    offscreenCanvas: typeof OffscreenCanvas < "u"
                };
                return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
            }(),
            registeredEffects = {},
            idPrefix = "filter_result_";

        function SVGEffects(t) {
            var e, r = "SourceGraphic",
                i = t.data.ef ? t.data.ef.length : 0,
                s = createElementID(),
                a = filtersFactory.createFilter(s, !0),
                n = 0;
            this.filters = [];
            var h;
            for (e = 0; e < i; e += 1) {
                h = null;
                var o = t.data.ef[e].ty;
                if (registeredEffects[o]) {
                    var p = registeredEffects[o].effect;
                    h = new p(a, t.effectsManager.effectElements[e], t, idPrefix + n, r), r = idPrefix + n, registeredEffects[o].countsAsEffect && (n += 1)
                }
                h && this.filters.push(h)
            }
            n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this)
        }
        SVGEffects.prototype.renderFrame = function(t) {
            var e, r = this.filters.length;
            for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
        };

        function registerEffect(t, e, r) {
            registeredEffects[t] = {
                effect: e,
                countsAsEffect: r
            }
        }

        function SVGBaseElement() {}
        SVGBaseElement.prototype = {
            initRendererElement: function() {
                this.layerElement = createNS("g")
            },
            createContainerElements: function() {
                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var e = null;
                if (this.data.td) {
                    this.matteMasks = {};
                    var r = createNS("g");
                    r.setAttribute("id", this.layerId), r.appendChild(this.layerElement), e = r, this.globalData.defs.appendChild(r)
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
                    var i = createNS("clipPath"),
                        s = createNS("path");
                    s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var a = createElementID();
                    if (i.setAttribute("id", a), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
                        var n = createNS("g");
                        n.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), n.appendChild(this.layerElement), this.transformedElement = n, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                    } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")")
                }
                this.data.bm !== 0 && this.setBlendMode()
            },
            renderElement: function() {
                this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
            },
            destroyBaseElement: function() {
                this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
            },
            getBaseElement: function() {
                return this.data.hd ? null : this.baseElement
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
            },
            getMatte: function(e) {
                if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
                    var r = this.layerId + "_" + e,
                        i, s, a, n;
                    if (e === 1 || e === 3) {
                        var h = createNS("mask");
                        h.setAttribute("id", r), h.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), a = createNS("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(a), this.globalData.defs.appendChild(h), !featureSupport.maskType && e === 1 && (h.setAttribute("mask-type", "luminance"), i = createElementID(), s = filtersFactory.createFilter(i), this.globalData.defs.appendChild(s), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), n.appendChild(a), h.appendChild(n), n.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"))
                    } else if (e === 2) {
                        var o = createNS("mask");
                        o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
                        var p = createNS("g");
                        o.appendChild(p), i = createElementID(), s = filtersFactory.createFilter(i);
                        var d = createNS("feComponentTransfer");
                        d.setAttribute("in", "SourceGraphic"), s.appendChild(d);
                        var S = createNS("feFuncA");
                        S.setAttribute("type", "table"), S.setAttribute("tableValues", "1.0 0.0"), d.appendChild(S), this.globalData.defs.appendChild(s);
                        var u = createNS("rect");
                        u.setAttribute("width", this.comp.data.w), u.setAttribute("height", this.comp.data.h), u.setAttribute("x", "0"), u.setAttribute("y", "0"), u.setAttribute("fill", "#ffffff"), u.setAttribute("opacity", "0"), p.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), p.appendChild(u), a = createNS("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), p.appendChild(a), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), p.appendChild(u), n.appendChild(this.layerElement), p.appendChild(n)), this.globalData.defs.appendChild(o)
                    }
                    this.matteMasks[e] = r
                }
                return this.matteMasks[e]
            },
            setMatte: function(e) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")")
            }
        };

        function HierarchyElement() {}
        HierarchyElement.prototype = {
            initHierarchy: function() {
                this.hierarchy = [], this._isParent = !1, this.checkParenting()
            },
            setHierarchy: function(e) {
                this.hierarchy = e
            },
            setAsParent: function() {
                this._isParent = !0
            },
            checkParenting: function() {
                this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
            }
        };

        function RenderableDOMElement() {}(function() {
            var t = {
                initElement: function(r, i, s) {
                    this.initFrame(), this.initBaseData(r, i, s), this.initTransform(r, i, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                },
                hide: function() {
                    if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                        var r = this.baseElement || this.layerElement;
                        r.style.display = "none", this.hidden = !0
                    }
                },
                show: function() {
                    if (this.isInRange && !this.isTransparent) {
                        if (!this.data.hd) {
                            var r = this.baseElement || this.layerElement;
                            r.style.display = "block"
                        }
                        this.hidden = !1, this._isFirstFrame = !0
                    }
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                renderInnerContent: function() {},
                prepareFrame: function(r) {
                    this._mdf = !1, this.prepareRenderableFrame(r), this.prepareProperties(r, this.isInRange), this.checkTransparency()
                },
                destroy: function() {
                    this.innerElem = null, this.destroyBaseElement()
                }
            };
            extendPrototype([RenderableElement, createProxyFunction(t)], RenderableDOMElement)
        })();

        function IImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, r), this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            }
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() {
            return this.sourceRect
        };

        function ProcessedElement(t, e) {
            this.elem = t, this.pos = e
        }

        function IShapeElement() {}
        IShapeElement.prototype = {
            addShapeToModifiers: function(e) {
                var r, i = this.shapeModifiers.length;
                for (r = 0; r < i; r += 1) this.shapeModifiers[r].addShape(e)
            },
            isShapeInAnimatedModifiers: function(e) {
                for (var r = 0, i = this.shapeModifiers.length; r < i;)
                    if (this.shapeModifiers[r].isAnimatedWithShape(e)) return !0;
                return !1
            },
            renderModifiers: function() {
                if (this.shapeModifiers.length) {
                    var e, r = this.shapes.length;
                    for (e = 0; e < r; e += 1) this.shapes[e].sh.reset();
                    r = this.shapeModifiers.length;
                    var i;
                    for (e = r - 1; e >= 0 && (i = this.shapeModifiers[e].processShapes(this._isFirstFrame), !i); e -= 1);
                }
            },
            searchProcessedElement: function(e) {
                for (var r = this.processedElements, i = 0, s = r.length; i < s;) {
                    if (r[i].elem === e) return r[i].pos;
                    i += 1
                }
                return 0
            },
            addProcessedElement: function(e, r) {
                for (var i = this.processedElements, s = i.length; s;)
                    if (s -= 1, i[s].elem === e) {
                        i[s].pos = r;
                        return
                    } i.push(new ProcessedElement(e, r))
            },
            prepareFrame: function(e) {
                this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
            }
        };
        var lineCapEnum = {
                1: "butt",
                2: "round",
                3: "square"
            },
            lineJoinEnum = {
                1: "miter",
                2: "round",
                3: "bevel"
            };

        function SVGShapeData(t, e, r) {
            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
            for (var i = 0, s = t.length; i < s;) {
                if (t[i].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break
                }
                i += 1
            }
        }
        SVGShapeData.prototype.setAsAnimated = function() {
            this._isAnimated = !0
        };

        function SVGStyleData(t, e) {
            this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = t.hd === !0, this.pElem = createNS("path"), this.msElem = null
        }
        SVGStyleData.prototype.reset = function() {
            this.d = "", this._mdf = !1
        };

        function DashProperty(t, e, r, i) {
            this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
            var s, a = e.length || 0,
                n;
            for (s = 0; s < a; s += 1) n = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[s] = {
                n: e[s].n,
                p: n
            };
            this.k || this.getValue(!0), this._isAnimated = this.k
        }
        DashProperty.prototype.getValue = function(t) {
            if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                var e = 0,
                    r = this.dataProps.length;
                for (this.renderer === "svg" && (this.dashStr = ""), e = 0; e < r; e += 1) this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
            }
        }, extendPrototype([DynamicPropertyContainer], DashProperty);

        function SVGStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
        }
        extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);

        function SVGFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
        }
        extendPrototype([DynamicPropertyContainer], SVGFillStyleData);

        function SVGNoStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r
        }
        extendPrototype([DynamicPropertyContainer], SVGNoStyleData);

        function GradientProperty(t, e, r) {
            this.data = e, this.c = createTypedArray("uint8c", e.p * 4);
            var i = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
            this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }
        GradientProperty.prototype.comparePoints = function(t, e) {
            for (var r = 0, i = this.o.length / 2, s; r < i;) {
                if (s = Math.abs(t[r * 4] - t[e * 4 + r * 2]), s > .01) return !1;
                r += 1
            }
            return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
            if (this.o.length / 2 !== this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e;) {
                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                    t += 1
                } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0
        }, GradientProperty.prototype.getValue = function(t) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                var e, r = this.data.p * 4,
                    i, s;
                for (e = 0; e < r; e += 1) i = e % 4 === 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
                if (this.o.length)
                    for (r = this.prop.v.length, e = this.data.p * 4; e < r; e += 1) i = e % 2 === 0 ? 100 : 1, s = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== s && (this.o[e - this.data.p * 4] = s, this._omdf = !t);
                this._mdf = !t
            }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty);

        function SVGGradientFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
        }
        SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                k: 0
            }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                k: 0
            }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
            var r = createElementID(),
                i = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
            i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
            var s = [],
                a, n, h;
            for (h = e.g.p * 4, n = 0; n < h; n += 4) a = createNS("stop"), i.appendChild(a), s.push(a);
            t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = s
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var r, i, s, a = createNS("mask"),
                    n = createNS("path");
                a.appendChild(n);
                var h = createElementID(),
                    o = createElementID();
                a.setAttribute("id", o);
                var p = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
                p.setAttribute("id", h), p.setAttribute("spreadMethod", "pad"), p.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var d = this.stops;
                for (i = t.g.p * 4; i < s; i += 2) r = createNS("stop"), r.setAttribute("stop-color", "rgb(255,255,255)"), p.appendChild(r), d.push(r);
                n.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + h + ")"), t.ty === "gs" && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)), this.of = p, this.ms = a, this.ost = d, this.maskId = o, e.msElem = n
            }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);

        function SVGGradientStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
        }
        extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);

        function ShapeGroupData() {
            this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(t, e, r) {
            this.transform = {
                mProps: t,
                op: e,
                container: r
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        var buildShapeString = function(e, r, i, s) {
                if (r === 0) return "";
                var a = e.o,
                    n = e.i,
                    h = e.v,
                    o, p = " M" + s.applyToPointStringified(h[0][0], h[0][1]);
                for (o = 1; o < r; o += 1) p += " C" + s.applyToPointStringified(a[o - 1][0], a[o - 1][1]) + " " + s.applyToPointStringified(n[o][0], n[o][1]) + " " + s.applyToPointStringified(h[o][0], h[o][1]);
                return i && r && (p += " C" + s.applyToPointStringified(a[o - 1][0], a[o - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(h[0][0], h[0][1]), p += "z"), p
            },
            SVGElementsRenderer = function() {
                var t = new Matrix,
                    e = new Matrix,
                    r = {
                        createRenderFunction: i
                    };

                function i(S) {
                    switch (S.ty) {
                        case "fl":
                            return h;
                        case "gf":
                            return p;
                        case "gs":
                            return o;
                        case "st":
                            return d;
                        case "sh":
                        case "el":
                        case "rc":
                        case "sr":
                            return n;
                        case "tr":
                            return s;
                        case "no":
                            return a;
                        default:
                            return null
                    }
                }

                function s(S, u, g) {
                    (g || u.transform.op._mdf) && u.transform.container.setAttribute("opacity", u.transform.op.v), (g || u.transform.mProps._mdf) && u.transform.container.setAttribute("transform", u.transform.mProps.v.to2dCSS())
                }

                function a() {}

                function n(S, u, g) {
                    var y, v, C, c, m, f, l = u.styles.length,
                        b = u.lvl,
                        P, x, T, F, R;
                    for (f = 0; f < l; f += 1) {
                        if (c = u.sh._mdf || g, u.styles[f].lvl < b) {
                            for (x = e.reset(), F = b - u.styles[f].lvl, R = u.transformers.length - 1; !c && F > 0;) c = u.transformers[R].mProps._mdf || c, F -= 1, R -= 1;
                            if (c)
                                for (F = b - u.styles[f].lvl, R = u.transformers.length - 1; F > 0;) T = u.transformers[R].mProps.v.props, x.transform(T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9], T[10], T[11], T[12], T[13], T[14], T[15]), F -= 1, R -= 1
                        } else x = t;
                        if (P = u.sh.paths, v = P._length, c) {
                            for (C = "", y = 0; y < v; y += 1) m = P.shapes[y], m && m._length && (C += buildShapeString(m, m._length, m.c, x));
                            u.caches[f] = C
                        } else C = u.caches[f];
                        u.styles[f].d += S.hd === !0 ? "" : C, u.styles[f]._mdf = c || u.styles[f]._mdf
                    }
                }

                function h(S, u, g) {
                    var y = u.style;
                    (u.c._mdf || g) && y.pElem.setAttribute("fill", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || g) && y.pElem.setAttribute("fill-opacity", u.o.v)
                }

                function o(S, u, g) {
                    p(S, u, g), d(S, u, g)
                }

                function p(S, u, g) {
                    var y = u.gf,
                        v = u.g._hasOpacity,
                        C = u.s.v,
                        c = u.e.v;
                    if (u.o._mdf || g) {
                        var m = S.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                        u.style.pElem.setAttribute(m, u.o.v)
                    }
                    if (u.s._mdf || g) {
                        var f = S.t === 1 ? "x1" : "cx",
                            l = f === "x1" ? "y1" : "cy";
                        y.setAttribute(f, C[0]), y.setAttribute(l, C[1]), v && !u.g._collapsable && (u.of.setAttribute(f, C[0]), u.of.setAttribute(l, C[1]))
                    }
                    var b, P, x, T;
                    if (u.g._cmdf || g) {
                        b = u.cst;
                        var F = u.g.c;
                        for (x = b.length, P = 0; P < x; P += 1) T = b[P], T.setAttribute("offset", F[P * 4] + "%"), T.setAttribute("stop-color", "rgb(" + F[P * 4 + 1] + "," + F[P * 4 + 2] + "," + F[P * 4 + 3] + ")")
                    }
                    if (v && (u.g._omdf || g)) {
                        var R = u.g.o;
                        for (u.g._collapsable ? b = u.cst : b = u.ost, x = b.length, P = 0; P < x; P += 1) T = b[P], u.g._collapsable || T.setAttribute("offset", R[P * 2] + "%"), T.setAttribute("stop-opacity", R[P * 2 + 1])
                    }
                    if (S.t === 1)(u.e._mdf || g) && (y.setAttribute("x2", c[0]), y.setAttribute("y2", c[1]), v && !u.g._collapsable && (u.of.setAttribute("x2", c[0]), u.of.setAttribute("y2", c[1])));
                    else {
                        var L;
                        if ((u.s._mdf || u.e._mdf || g) && (L = Math.sqrt(Math.pow(C[0] - c[0], 2) + Math.pow(C[1] - c[1], 2)), y.setAttribute("r", L), v && !u.g._collapsable && u.of.setAttribute("r", L)), u.e._mdf || u.h._mdf || u.a._mdf || g) {
                            L || (L = Math.sqrt(Math.pow(C[0] - c[0], 2) + Math.pow(C[1] - c[1], 2)));
                            var I = Math.atan2(c[1] - C[1], c[0] - C[0]),
                                B = u.h.v;
                            B >= 1 ? B = .99 : B <= -1 && (B = -.99);
                            var D = L * B,
                                w = Math.cos(I + u.a.v) * D + C[0],
                                M = Math.sin(I + u.a.v) * D + C[1];
                            y.setAttribute("fx", w), y.setAttribute("fy", M), v && !u.g._collapsable && (u.of.setAttribute("fx", w), u.of.setAttribute("fy", M))
                        }
                    }
                }

                function d(S, u, g) {
                    var y = u.style,
                        v = u.d;
                    v && (v._mdf || g) && v.dashStr && (y.pElem.setAttribute("stroke-dasharray", v.dashStr), y.pElem.setAttribute("stroke-dashoffset", v.dashoffset[0])), u.c && (u.c._mdf || g) && y.pElem.setAttribute("stroke", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || g) && y.pElem.setAttribute("stroke-opacity", u.o.v), (u.w._mdf || g) && (y.pElem.setAttribute("stroke-width", u.w.v), y.msElem && y.msElem.setAttribute("stroke-width", u.w.v))
                }
                return r
            }();

        function SVGShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
            var t, e = this.shapes.length,
                r, i, s = this.stylesList.length,
                a, n = [],
                h = !1;
            for (i = 0; i < s; i += 1) {
                for (a = this.stylesList[i], h = !1, n.length = 0, t = 0; t < e; t += 1) r = this.shapes[t], r.styles.indexOf(a) !== -1 && (n.push(r), h = r._isAnimated || h);
                n.length > 1 && h && this.setShapesAsAnimated(n)
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
            var r, i = new SVGStyleData(t, e),
                s = i.pElem;
            if (t.ty === "st") r = new SVGStrokeStyleData(this, t, i);
            else if (t.ty === "fl") r = new SVGFillStyleData(this, t, i);
            else if (t.ty === "gf" || t.ty === "gs") {
                var a = t.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
                r = new a(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))
            } else t.ty === "no" && (r = new SVGNoStyleData(this, t, i));
            return (t.ty === "st" || t.ty === "gs") && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), t.lj === 1 && s.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
            var e = new ShapeGroupData;
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
            var r = TransformPropertyFactory.getTransformProperty(this, t, this),
                i = new SVGTransformData(r, r.o, e);
            return this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
            var i = 4;
            t.ty === "rc" ? i = 5 : t.ty === "el" ? i = 6 : t.ty === "sr" && (i = 7);
            var s = ShapePropertyFactory.getShapeProp(this, t, i, this),
                a = new SVGShapeData(e, r, s);
            return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
            for (var r = 0, i = this.animatedContents.length; r < i;) {
                if (this.animatedContents[r].element === e) return;
                r += 1
            }
            this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t),
                element: e,
                data: t
            })
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
            var e = t.styles,
                r, i = this.stylesList.length;
            for (r = 0; r < i; r += 1) this.stylesList[r].closed || e.push(this.stylesList[r])
        }, SVGShapeElement.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, s, a, n) {
            var h = [].concat(a),
                o, p = t.length - 1,
                d, S, u = [],
                g = [],
                y, v, C;
            for (o = p; o >= 0; o -= 1) {
                if (C = this.searchProcessedElement(t[o]), C ? e[o] = r[C - 1] : t[o]._render = n, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") C ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), u.push(e[o].style);
                else if (t[o].ty === "gr") {
                    if (!C) e[o] = this.createGroupElement(t[o]);
                    else
                        for (S = e[o].it.length, d = 0; d < S; d += 1) e[o].prevViewData[d] = e[o].it[d];
                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, h, n), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr)
                } else t[o].ty === "tr" ? (C || (e[o] = this.createTransformElement(t[o], i)), y = e[o].transform, h.push(y)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (C || (e[o] = this.createShapeElement(t[o], h, s)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (C ? (v = e[o], v.closed = !1) : (v = ShapeModifiers.getModifier(t[o].ty), v.init(this, t[o]), e[o] = v, this.shapeModifiers.push(v)), g.push(v)) : t[o].ty === "rp" && (C ? (v = e[o], v.closed = !0) : (v = ShapeModifiers.getModifier(t[o].ty), e[o] = v, v.init(this, t, o, e), this.shapeModifiers.push(v), n = !1), g.push(v));
                this.addProcessedElement(t[o], o + 1)
            }
            for (p = u.length, o = 0; o < p; o += 1) u[o].closed = !0;
            for (p = g.length, o = 0; o < p; o += 1) g[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() {
            this.renderModifiers();
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].reset();
            for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function() {
            var t, e = this.animatedContents.length,
                r;
            for (t = 0; t < e; t += 1) r = this.animatedContents[t], (this._isFirstFrame || r.element._isAnimated) && r.data !== !0 && r.fn(r.data, r.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        };

        function LetterProps(t, e, r, i, s, a) {
            this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = s, this.p = a, this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!r,
                fc: !!i,
                m: !0,
                p: !0
            }
        }
        LetterProps.prototype.update = function(t, e, r, i, s, a) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var n = !1;
            return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== s && (this.m = s, this._mdf.m = !0, n = !0), a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && (this.p = a, this._mdf.p = !0, n = !0), n
        };

        function TextProperty(t, e) {
            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }
        TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }, TextProperty.prototype.setCurrentData = function(t) {
            t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function() {
            return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function() {
            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function(t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function(t) {
            if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData,
                    r = this.keysIndex;
                if (this.lock) {
                    this.setCurrentData(this.currentData);
                    return
                }
                this.lock = !0, this._mdf = !1;
                var i, s = this.effectsSequence.length,
                    a = t || this.data.d.k[this.keysIndex].s;
                for (i = 0; i < s; i += 1) r !== this.keysIndex ? a = this.effectsSequence[i](a, a.t) : a = this.effectsSequence[i](this.currentData, a.t);
                e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }, TextProperty.prototype.getKeyframeValue = function() {
            for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);) r += 1;
            return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(t) {
            for (var e = [], r = 0, i = t.length, s, a, n = !1; r < i;) s = t.charCodeAt(r), FontManager.isCombinedCharacter(s) ? e[e.length - 1] += t.charAt(r) : s >= 55296 && s <= 56319 ? (a = t.charCodeAt(r + 1), a >= 56320 && a <= 57343 ? (n || FontManager.isModifier(s, a) ? (e[e.length - 1] += t.substr(r, 2), n = !1) : e.push(t.substr(r, 2)), r += 1) : e.push(t.charAt(r))) : s > 56319 ? (a = t.charCodeAt(r + 1), FontManager.isZeroWidthJoiner(s, a) ? (n = !0, e[e.length - 1] += t.substr(r, 2), r += 1) : e.push(t.charAt(r))) : FontManager.isZeroWidthJoiner(s) ? (e[e.length - 1] += t.charAt(r), n = !0) : e.push(t.charAt(r)), r += 1;
            return e
        }, TextProperty.prototype.completeTextData = function(t) {
            t.__complete = !0;
            var e = this.elem.globalData.fontManager,
                r = this.data,
                i = [],
                s, a, n, h = 0,
                o, p = r.m.g,
                d = 0,
                S = 0,
                u = 0,
                g = [],
                y = 0,
                v = 0,
                C, c, m = e.getFontByName(t.f),
                f, l = 0,
                b = getFontProperties(m);
            t.fWeight = b.weight, t.fStyle = b.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), a = t.finalText.length, t.finalLineHeight = t.lh;
            var P = t.tr / 1e3 * t.finalSize,
                x;
            if (t.sz)
                for (var T = !0, F = t.sz[0], R = t.sz[1], L, I; T;) {
                    I = this.buildFinalText(t.t), L = 0, y = 0, a = I.length, P = t.tr / 1e3 * t.finalSize;
                    var B = -1;
                    for (s = 0; s < a; s += 1) x = I[s].charCodeAt(0), n = !1, I[s] === " " ? B = s : (x === 13 || x === 3) && (y = 0, n = !0, L += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (f = e.getCharData(I[s], m.fStyle, m.fFamily), l = n ? 0 : f.w * t.finalSize / 100) : l = e.measureText(I[s], t.f, t.finalSize), y + l > F && I[s] !== " " ? (B === -1 ? a += 1 : s = B, L += t.finalLineHeight || t.finalSize * 1.2, I.splice(s, B === s ? 1 : 0, "\r"), B = -1, y = 0) : (y += l, y += P);
                    L += m.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && R < L ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = I, a = t.finalText.length, T = !1)
                }
            y = -P, l = 0;
            var D = 0,
                w;
            for (s = 0; s < a; s += 1)
                if (n = !1, w = t.finalText[s], x = w.charCodeAt(0), x === 13 || x === 3 ? (D = 0, g.push(y), v = y > v ? y : v, y = -2 * P, o = "", n = !0, u += 1) : o = w, e.chars ? (f = e.getCharData(w, m.fStyle, e.getFontByName(t.f).fFamily), l = n ? 0 : f.w * t.finalSize / 100) : l = e.measureText(o, t.f, t.finalSize), w === " " ? D += l + P : (y += l + P + D, D = 0), i.push({
                        l,
                        an: l,
                        add: d,
                        n,
                        anIndexes: [],
                        val: o,
                        line: u,
                        animatorJustifyOffset: 0
                    }), p == 2) {
                    if (d += l, o === "" || o === " " || s === a - 1) {
                        for ((o === "" || o === " ") && (d -= l); S <= s;) i[S].an = d, i[S].ind = h, i[S].extra = l, S += 1;
                        h += 1, d = 0
                    }
                } else if (p == 3) {
                if (d += l, o === "" || s === a - 1) {
                    for (o === "" && (d -= l); S <= s;) i[S].an = d, i[S].ind = h, i[S].extra = l, S += 1;
                    d = 0, h += 1
                }
            } else i[h].ind = h, i[h].extra = 0, h += 1;
            if (t.l = i, v = y > v ? y : v, g.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else switch (t.boxWidth = v, t.j) {
                case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                default:
                    t.justifyOffset = 0
            }
            t.lineWidths = g;
            var M = r.a,
                _, E;
            c = M.length;
            var A, V, k = [];
            for (C = 0; C < c; C += 1) {
                for (_ = M[C], _.a.sc && (t.strokeColorAnim = !0), _.a.sw && (t.strokeWidthAnim = !0), (_.a.fc || _.a.fh || _.a.fs || _.a.fb) && (t.fillColorAnim = !0), V = 0, A = _.s.b, s = 0; s < a; s += 1) E = i[s], E.anIndexes[C] = V, (A == 1 && E.val !== "" || A == 2 && E.val !== "" && E.val !== " " || A == 3 && (E.n || E.val == " " || s == a - 1) || A == 4 && (E.n || s == a - 1)) && (_.s.rn === 1 && k.push(V), V += 1);
                r.a[C].s.totalChars = V;
                var O = -1,
                    N;
                if (_.s.rn === 1)
                    for (s = 0; s < a; s += 1) E = i[s], O != E.anIndexes[C] && (O = E.anIndexes[C], N = k.splice(Math.floor(Math.random() * k.length), 1)[0]), E.anIndexes[C] = N
            }
            t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = m.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
            e = e === void 0 ? this.keysIndex : e;
            var r = this.copyData({}, this.data.d.k[e].s);
            r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.setCurrentData(r), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function(t) {
            this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function(t) {
            this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function() {
            var t = Math.max,
                e = Math.min,
                r = Math.floor;

            function i(a, n) {
                this._currentTextLength = -1, this.k = !1, this.data = n, this.elem = a, this.comp = a.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(a), this.s = PropertyFactory.getProp(a, n.s || {
                    k: 0
                }, 0, 0, this), "e" in n ? this.e = PropertyFactory.getProp(a, n.e, 0, 0, this) : this.e = {
                    v: 100
                }, this.o = PropertyFactory.getProp(a, n.o || {
                    k: 0
                }, 0, 0, this), this.xe = PropertyFactory.getProp(a, n.xe || {
                    k: 0
                }, 0, 0, this), this.ne = PropertyFactory.getProp(a, n.ne || {
                    k: 0
                }, 0, 0, this), this.sm = PropertyFactory.getProp(a, n.sm || {
                    k: 100
                }, 0, 0, this), this.a = PropertyFactory.getProp(a, n.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
            }
            i.prototype = {
                getMult: function(n) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var h = 0,
                        o = 0,
                        p = 1,
                        d = 1;
                    this.ne.v > 0 ? h = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? p = 1 - this.xe.v / 100 : d = 1 + this.xe.v / 100;
                    var S = BezierFactory.getBezierEasing(h, o, p, d).get,
                        u = 0,
                        g = this.finalS,
                        y = this.finalE,
                        v = this.data.sh;
                    if (v === 2) y === g ? u = n >= y ? 1 : 0 : u = t(0, e(.5 / (y - g) + (n - g) / (y - g), 1)), u = S(u);
                    else if (v === 3) y === g ? u = n >= y ? 0 : 1 : u = 1 - t(0, e(.5 / (y - g) + (n - g) / (y - g), 1)), u = S(u);
                    else if (v === 4) y === g ? u = 0 : (u = t(0, e(.5 / (y - g) + (n - g) / (y - g), 1)), u < .5 ? u *= 2 : u = 1 - 2 * (u - .5)), u = S(u);
                    else if (v === 5) {
                        if (y === g) u = 0;
                        else {
                            var C = y - g;
                            n = e(t(0, n + .5 - g), y - g);
                            var c = -C / 2 + n,
                                m = C / 2;
                            u = Math.sqrt(1 - c * c / (m * m))
                        }
                        u = S(u)
                    } else v === 6 ? (y === g ? u = 0 : (n = e(t(0, n + .5 - g), y - g), u = (1 + Math.cos(Math.PI + Math.PI * 2 * n / (y - g))) / 2), u = S(u)) : (n >= r(g) && (n - g < 0 ? u = t(0, e(e(y, 1) - (g - n), 1)) : u = t(0, e(y - n, 1))), u = S(u));
                    if (this.sm.v !== 100) {
                        var f = this.sm.v * .01;
                        f === 0 && (f = 1e-8);
                        var l = .5 - f * .5;
                        u < l ? u = 0 : (u = (u - l) / f, u > 1 && (u = 1))
                    }
                    return u * this.a.v
                },
                getValue: function(n) {
                    this.iterateDynamicProperties(), this._mdf = n || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, n && this.data.r === 2 && (this.e.v = this._currentTextLength);
                    var h = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
                        o = this.o.v / h,
                        p = this.s.v / h + o,
                        d = this.e.v / h + o;
                    if (p > d) {
                        var S = p;
                        p = d, d = S
                    }
                    this.finalS = p, this.finalE = d
                }
            }, extendPrototype([DynamicPropertyContainer], i);

            function s(a, n, h) {
                return new i(a, n)
            }
            return {
                getTextSelectorProp: s
            }
        }();

        function TextAnimatorDataProperty(t, e, r) {
            var i = {
                    propType: !1
                },
                s = PropertyFactory.getProp,
                a = e.a;
            this.a = {
                r: a.r ? s(t, a.r, 0, degToRads, r) : i,
                rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
                ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
                sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
                sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
                s: a.s ? s(t, a.s, 1, .01, r) : i,
                a: a.a ? s(t, a.a, 1, 0, r) : i,
                o: a.o ? s(t, a.o, 0, .01, r) : i,
                p: a.p ? s(t, a.p, 1, 0, r) : i,
                sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
                sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
                fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
                fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
                fs: a.fs ? s(t, a.fs, 0, .01, r) : i,
                fb: a.fb ? s(t, a.fb, 0, .01, r) : i,
                t: a.t ? s(t, a.t, 0, 0, r) : i
            }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
        }

        function TextAnimatorProperty(t, e, r) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                alignment: {}
            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
        }
        TextAnimatorProperty.prototype.searchProperties = function() {
            var t, e = this._textData.a.length,
                r, i = PropertyFactory.getProp;
            for (t = 0; t < e; t += 1) r = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, r, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                a: i(this._elem, this._textData.p.a, 0, 0, this),
                f: i(this._elem, this._textData.p.f, 0, 0, this),
                l: i(this._elem, this._textData.p.l, 0, 0, this),
                r: i(this._elem, this._textData.p.r, 0, 0, this),
                p: i(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
            if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                this._isFirstFrame = !1;
                var r = this._moreOptions.alignment.v,
                    i = this._animatorsData,
                    s = this._textData,
                    a = this.mHelper,
                    n = this._renderType,
                    h = this.renderedLetters.length,
                    o, p, d, S, u = t.l,
                    g, y, v, C, c, m, f, l, b, P, x, T, F, R, L;
                if (this._hasMaskedPath) {
                    if (L = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var I = L.v;
                        this._pathData.r.v && (I = I.reverse()), g = {
                            tLength: 0,
                            segments: []
                        }, S = I._length - 1;
                        var B;
                        for (T = 0, d = 0; d < S; d += 1) B = bez.buildBezierData(I.v[d], I.v[d + 1], [I.o[d][0] - I.v[d][0], I.o[d][1] - I.v[d][1]], [I.i[d + 1][0] - I.v[d + 1][0], I.i[d + 1][1] - I.v[d + 1][1]]), g.tLength += B.segmentLength, g.segments.push(B), T += B.segmentLength;
                        d = S, L.v.c && (B = bez.buildBezierData(I.v[d], I.v[0], [I.o[d][0] - I.v[d][0], I.o[d][1] - I.v[d][1]], [I.i[0][0] - I.v[0][0], I.i[0][1] - I.v[0][1]]), g.tLength += B.segmentLength, g.segments.push(B), T += B.segmentLength), this._pathData.pi = g
                    }
                    if (g = this._pathData.pi, y = this._pathData.f.v, f = 0, m = 1, C = 0, c = !0, P = g.segments, y < 0 && L.v.c)
                        for (g.tLength < Math.abs(y) && (y = -Math.abs(y) % g.tLength), f = P.length - 1, b = P[f].points, m = b.length - 1; y < 0;) y += b[m].partialLength, m -= 1, m < 0 && (f -= 1, b = P[f].points, m = b.length - 1);
                    b = P[f].points, l = b[m - 1], v = b[m], x = v.partialLength
                }
                S = u.length, o = 0, p = 0;
                var D = t.finalSize * 1.2 * .714,
                    w = !0,
                    M, _, E, A, V;
                A = i.length;
                var k, O = -1,
                    N, z, q, H = y,
                    U = f,
                    tt = m,
                    J = -1,
                    $, W, X, G, j, et, at, rt, Q = "",
                    it = this.defaultPropsArray,
                    st;
                if (t.j === 2 || t.j === 1) {
                    var Y = 0,
                        nt = 0,
                        ot = t.j === 2 ? -.5 : -1,
                        Z = 0,
                        ht = !0;
                    for (d = 0; d < S; d += 1)
                        if (u[d].n) {
                            for (Y && (Y += nt); Z < d;) u[Z].animatorJustifyOffset = Y, Z += 1;
                            Y = 0, ht = !0
                        } else {
                            for (E = 0; E < A; E += 1) M = i[E].a, M.t.propType && (ht && t.j === 2 && (nt += M.t.v * ot), _ = i[E].s, k = _.getMult(u[d].anIndexes[E], s.a[E].s.totalChars), k.length ? Y += M.t.v * k[0] * ot : Y += M.t.v * k * ot);
                            ht = !1
                        } for (Y && (Y += nt); Z < d;) u[Z].animatorJustifyOffset = Y, Z += 1
                }
                for (d = 0; d < S; d += 1) {
                    if (a.reset(), $ = 1, u[d].n) o = 0, p += t.yOffset, p += w ? 1 : 0, y = H, w = !1, this._hasMaskedPath && (f = U, m = tt, b = P[f].points, l = b[m - 1], v = b[m], x = v.partialLength, C = 0), Q = "", rt = "", et = "", st = "", it = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (J !== u[d].line) {
                                switch (t.j) {
                                    case 1:
                                        y += T - t.lineWidths[u[d].line];
                                        break;
                                    case 2:
                                        y += (T - t.lineWidths[u[d].line]) / 2;
                                        break
                                }
                                J = u[d].line
                            }
                            O !== u[d].ind && (u[O] && (y += u[O].extra), y += u[d].an / 2, O = u[d].ind), y += r[0] * u[d].an * .005;
                            var K = 0;
                            for (E = 0; E < A; E += 1) M = i[E].a, M.p.propType && (_ = i[E].s, k = _.getMult(u[d].anIndexes[E], s.a[E].s.totalChars), k.length ? K += M.p.v[0] * k[0] : K += M.p.v[0] * k), M.a.propType && (_ = i[E].s, k = _.getMult(u[d].anIndexes[E], s.a[E].s.totalChars), k.length ? K += M.a.v[0] * k[0] : K += M.a.v[0] * k);
                            for (c = !0, this._pathData.a.v && (y = u[0].an * .5 + (T - this._pathData.f.v - u[0].an * .5 - u[u.length - 1].an * .5) * O / (S - 1), y += this._pathData.f.v); c;) C + x >= y + K || !b ? (F = (y + K - C) / v.partialLength, z = l.point[0] + (v.point[0] - l.point[0]) * F, q = l.point[1] + (v.point[1] - l.point[1]) * F, a.translate(-r[0] * u[d].an * .005, -(r[1] * D) * .01), c = !1) : b && (C += v.partialLength, m += 1, m >= b.length && (m = 0, f += 1, P[f] ? b = P[f].points : L.v.c ? (m = 0, f = 0, b = P[f].points) : (C -= v.partialLength, b = null)), b && (l = v, v = b[m], x = v.partialLength));
                            N = u[d].an / 2 - u[d].add, a.translate(-N, 0, 0)
                        } else N = u[d].an / 2 - u[d].add, a.translate(-N, 0, 0), a.translate(-r[0] * u[d].an * .005, -r[1] * D * .01, 0);
                        for (E = 0; E < A; E += 1) M = i[E].a, M.t.propType && (_ = i[E].s, k = _.getMult(u[d].anIndexes[E], s.a[E].s.totalChars), (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? k.length ? y += M.t.v * k[0] : y += M.t.v * k : k.length ? o += M.t.v * k[0] : o += M.t.v * k));
                        for (t.strokeWidthAnim && (X = t.sw || 0), t.strokeColorAnim && (t.sc ? W = [t.sc[0], t.sc[1], t.sc[2]] : W = [0, 0, 0]), t.fillColorAnim && t.fc && (G = [t.fc[0], t.fc[1], t.fc[2]]), E = 0; E < A; E += 1) M = i[E].a, M.a.propType && (_ = i[E].s, k = _.getMult(u[d].anIndexes[E], s.a[E].s.totalChars), k.length ? a.translate(-M.a.v[0] * k[0], -M.a.v[1] * k[1], M.a.v[2] * k[2]) : a.translate(-M.a.v[0] * k, -M.a.v[1] * k, M.a.v[2] * k));
                        for (E = 0; E < A; E += 1) M = i[E].a, M.s.propType && (_ = i[E].s, k = _.getMult(u[d].anIndexes[E], s.a[E].s.totalChars), k.length ? a.scale(1 + (M.s.v[0] - 1) * k[0], 1 + (M.s.v[1] - 1) * k[1], 1) : a.scale(1 + (M.s.v[0] - 1) * k, 1 + (M.s.v[1] - 1) * k, 1));
                        for (E = 0; E < A; E += 1) {
                            if (M = i[E].a, _ = i[E].s, k = _.getMult(u[d].anIndexes[E], s.a[E].s.totalChars), M.sk.propType && (k.length ? a.skewFromAxis(-M.sk.v * k[0], M.sa.v * k[1]) : a.skewFromAxis(-M.sk.v * k, M.sa.v * k)), M.r.propType && (k.length ? a.rotateZ(-M.r.v * k[2]) : a.rotateZ(-M.r.v * k)), M.ry.propType && (k.length ? a.rotateY(M.ry.v * k[1]) : a.rotateY(M.ry.v * k)), M.rx.propType && (k.length ? a.rotateX(M.rx.v * k[0]) : a.rotateX(M.rx.v * k)), M.o.propType && (k.length ? $ += (M.o.v * k[0] - $) * k[0] : $ += (M.o.v * k - $) * k), t.strokeWidthAnim && M.sw.propType && (k.length ? X += M.sw.v * k[0] : X += M.sw.v * k), t.strokeColorAnim && M.sc.propType)
                                for (j = 0; j < 3; j += 1) k.length ? W[j] += (M.sc.v[j] - W[j]) * k[0] : W[j] += (M.sc.v[j] - W[j]) * k;
                            if (t.fillColorAnim && t.fc) {
                                if (M.fc.propType)
                                    for (j = 0; j < 3; j += 1) k.length ? G[j] += (M.fc.v[j] - G[j]) * k[0] : G[j] += (M.fc.v[j] - G[j]) * k;
                                M.fh.propType && (k.length ? G = addHueToRGB(G, M.fh.v * k[0]) : G = addHueToRGB(G, M.fh.v * k)), M.fs.propType && (k.length ? G = addSaturationToRGB(G, M.fs.v * k[0]) : G = addSaturationToRGB(G, M.fs.v * k)), M.fb.propType && (k.length ? G = addBrightnessToRGB(G, M.fb.v * k[0]) : G = addBrightnessToRGB(G, M.fb.v * k))
                            }
                        }
                        for (E = 0; E < A; E += 1) M = i[E].a, M.p.propType && (_ = i[E].s, k = _.getMult(u[d].anIndexes[E], s.a[E].s.totalChars), this._hasMaskedPath ? k.length ? a.translate(0, M.p.v[1] * k[0], -M.p.v[2] * k[1]) : a.translate(0, M.p.v[1] * k, -M.p.v[2] * k) : k.length ? a.translate(M.p.v[0] * k[0], M.p.v[1] * k[1], -M.p.v[2] * k[2]) : a.translate(M.p.v[0] * k, M.p.v[1] * k, -M.p.v[2] * k));
                        if (t.strokeWidthAnim && (et = X < 0 ? 0 : X), t.strokeColorAnim && (at = "rgb(" + Math.round(W[0] * 255) + "," + Math.round(W[1] * 255) + "," + Math.round(W[2] * 255) + ")"), t.fillColorAnim && t.fc && (rt = "rgb(" + Math.round(G[0] * 255) + "," + Math.round(G[1] * 255) + "," + Math.round(G[2] * 255) + ")"), this._hasMaskedPath) {
                            if (a.translate(0, -t.ls), a.translate(0, r[1] * D * .01 + p, 0), this._pathData.p.v) {
                                R = (v.point[1] - l.point[1]) / (v.point[0] - l.point[0]);
                                var lt = Math.atan(R) * 180 / Math.PI;
                                v.point[0] < l.point[0] && (lt += 180), a.rotate(-lt * Math.PI / 180)
                            }
                            a.translate(z, q, 0), y -= r[0] * u[d].an * .005, u[d + 1] && O !== u[d + 1].ind && (y += u[d].an / 2, y += t.tr * .001 * t.finalSize)
                        } else {
                            switch (a.translate(o, p, 0), t.ps && a.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                case 1:
                                    a.translate(u[d].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[u[d].line]), 0, 0);
                                    break;
                                case 2:
                                    a.translate(u[d].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[u[d].line]) / 2, 0, 0);
                                    break
                            }
                            a.translate(0, -t.ls), a.translate(N, 0, 0), a.translate(r[0] * u[d].an * .005, r[1] * D * .01, 0), o += u[d].l + t.tr * .001 * t.finalSize
                        }
                        n === "html" ? Q = a.toCSS() : n === "svg" ? Q = a.to2dCSS() : it = [a.props[0], a.props[1], a.props[2], a.props[3], a.props[4], a.props[5], a.props[6], a.props[7], a.props[8], a.props[9], a.props[10], a.props[11], a.props[12], a.props[13], a.props[14], a.props[15]], st = $
                    }
                    h <= d ? (V = new LetterProps(st, et, at, rt, Q, it), this.renderedLetters.push(V), h += 1, this.lettersChangedFlag = !0) : (V = this.renderedLetters[d], this.lettersChangedFlag = V.update(st, et, at, rt, Q, it) || this.lettersChangedFlag)
                }
            }
        }, TextAnimatorProperty.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);

        function ITextElement() {}
        ITextElement.prototype.initElement = function(t, e, r) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        }, ITextElement.prototype.createPathShape = function(t, e) {
            var r, i = e.length,
                s, a = "";
            for (r = 0; r < i; r += 1) e[r].ty === "sh" && (s = e[r].ks.k, a += buildShapeString(s, s.i.length, !0, t));
            return a
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
            this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function(t) {
            this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
            this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, s) {
            switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
                    break
            }
            e.translate(i, s, 0)
        }, ITextElement.prototype.buildColor = function(t) {
            return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {};
        var emptyShapeData = {
            shapes: []
        };

        function SVGTextLottieElement(t, e, r) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
            for (var e = 0, r = t.length, i = [], s = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s), s = "") : s += t[e], e += 1;
            return i.push(s), i
        }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
            if (t.shapes && t.shapes.length) {
                var r = t.shapes[0];
                if (r.it) {
                    var i = r.it[r.it.length - 1];
                    i.s && (i.s.k[0] = e, i.s.k[1] = e)
                }
            }
            return t
        }, SVGTextLottieElement.prototype.buildNewText = function() {
            this.addDynamicProperty(this);
            var t, e, r = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
            var i = this.globalData.fontManager.getFontByName(r.f);
            if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
            else {
                this.layerElement.setAttribute("font-family", i.fFamily);
                var s = r.fWeight,
                    a = r.fStyle;
                this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s)
            }
            this.layerElement.setAttribute("aria-label", r.t);
            var n = r.l || [],
                h = !!this.globalData.fontManager.chars;
            e = n.length;
            var o, p = this.mHelper,
                d = "",
                S = this.data.singleShape,
                u = 0,
                g = 0,
                y = !0,
                v = r.tr * .001 * r.finalSize;
            if (S && !h && !r.sz) {
                var C = this.textContainer,
                    c = "start";
                switch (r.j) {
                    case 1:
                        c = "end";
                        break;
                    case 2:
                        c = "middle";
                        break;
                    default:
                        c = "start";
                        break
                }
                C.setAttribute("text-anchor", c), C.setAttribute("letter-spacing", v);
                var m = this.buildTextContents(r.finalText);
                for (e = m.length, g = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1) o = this.textSpans[t].span || createNS("tspan"), o.textContent = m[t], o.setAttribute("x", 0), o.setAttribute("y", g), o.style.display = "inherit", C.appendChild(o), this.textSpans[t] || (this.textSpans[t] = {
                    span: null,
                    glyph: null
                }), this.textSpans[t].span = o, g += r.finalLineHeight;
                this.layerElement.appendChild(C)
            } else {
                var f = this.textSpans.length,
                    l;
                for (t = 0; t < e; t += 1) {
                    if (this.textSpans[t] || (this.textSpans[t] = {
                            span: null,
                            childSpan: null,
                            glyph: null
                        }), !h || !S || t === 0) {
                        if (o = f > t ? this.textSpans[t].span : createNS(h ? "g" : "text"), f <= t) {
                            if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, h) {
                                var b = createNS("g");
                                o.appendChild(b), this.textSpans[t].childSpan = b
                            }
                            this.textSpans[t].span = o, this.layerElement.appendChild(o)
                        }
                        o.style.display = "inherit"
                    }
                    if (p.reset(), S && (n[t].n && (u = -v, g += r.yOffset, g += y ? 1 : 0, y = !1), this.applyTextPropertiesToMatrix(r, p, n[t].line, u, g), u += n[t].l || 0, u += v), h) {
                        l = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
                        var P;
                        if (l.t === 1) P = new SVGCompElement(l.data, this.globalData, this);
                        else {
                            var x = emptyShapeData;
                            l.data && l.data.shapes && (x = this.buildShapeData(l.data, r.finalSize)), P = new SVGShapeElement(x, this.globalData, this)
                        }
                        if (this.textSpans[t].glyph) {
                            var T = this.textSpans[t].glyph;
                            this.textSpans[t].childSpan.removeChild(T.layerElement), T.destroy()
                        }
                        this.textSpans[t].glyph = P, P._debug = !0, P.prepareFrame(0), P.renderFrame(), this.textSpans[t].childSpan.appendChild(P.layerElement), l.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
                    } else S && o.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), o.textContent = n[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                }
                S && o && o.setAttribute("d", d)
            }
            for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
            this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                this._sizeChanged = !1;
                var t = this.layerElement.getBBox();
                this.bbox = {
                    top: t.y,
                    left: t.x,
                    width: t.width,
                    height: t.height
                }
            }
            return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function() {
            var t, e = this.textSpans.length,
                r;
            for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1) r = this.textSpans[t].glyph, r && (r.prepareFrame(this.comp.renderedFrame - this.data.st), r._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
            if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                this._sizeChanged = !0;
                var t, e, r = this.textAnimator.renderedLetters,
                    i = this.textProperty.currentData.l;
                e = i.length;
                var s, a, n;
                for (t = 0; t < e; t += 1) i[t].n || (s = r[t], a = this.textSpans[t].span, n = this.textSpans[t].glyph, n && n.renderFrame(), s._mdf.m && a.setAttribute("transform", s.m), s._mdf.o && a.setAttribute("opacity", s.o), s._mdf.sw && a.setAttribute("stroke-width", s.sw), s._mdf.sc && a.setAttribute("stroke", s.sc), s._mdf.fc && a.setAttribute("fill", s.fc))
            }
        };

        function ISolidElement(t, e, r) {
            this.initElement(t, e, r)
        }
        extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
        };

        function NullElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
        }
        NullElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0)
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
            return null
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);

        function SVGRendererBase() {}
        extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
            return new NullElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function(t) {
            return new SVGShapeElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function(t) {
            return new SVGTextLottieElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function(t) {
            return new IImageElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function(t) {
            return new ISolidElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function(t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
            var r = createNS("clipPath"),
                i = createNS("rect");
            i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
            var s = createElementID();
            r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRendererBase.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
            var e = 0,
                r = this.layers.length;
            for (e = 0; e < r; e += 1)
                if (this.layers[e].ind === t) return e;
            return -1
        }, SVGRendererBase.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!(e[t] || this.layers[t].ty === 99)) {
                e[t] = !0;
                var r = this.createItem(this.layers[t]);
                if (e[t] = r, getExpressionsPlugin() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
                    var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                    if (i === -1) return;
                    if (!this.elements[i] || this.elements[i] === !0) this.buildItem(i), this.addPendingElement(r);
                    else {
                        var s = e[i],
                            a = s.getMatte(this.layers[t].tt);
                        r.setMatte(a)
                    }
                }
            }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt)
                    for (var e = 0, r = this.elements.length; e < r;) {
                        if (this.elements[e] === t) {
                            var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                                s = this.elements[i],
                                a = s.getMatte(this.layers[e].tt);
                            t.setMatte(a);
                            break
                        }
                        e += 1
                    }
            }
        }, SVGRendererBase.prototype.renderFrame = function(t) {
            if (!(this.renderedFrame === t || this.destroyed)) {
                t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                var e, r = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf)
                    for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }
        }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
            var r = t.getBaseElement();
            if (r) {
                for (var i = 0, s; i < e;) this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (s = this.elements[i].getBaseElement()), i += 1;
                s ? this.layerElement.insertBefore(r, s) : this.layerElement.appendChild(r)
            }
        }, SVGRendererBase.prototype.hide = function() {
            this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function() {
            this.layerElement.style.display = "block"
        };

        function ICompElement() {}
        extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(t) {
            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                }
                var r, i = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
            }
        }, ICompElement.prototype.renderInnerContent = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, ICompElement.prototype.setElements = function(t) {
            this.elements = t
        }, ICompElement.prototype.getElements = function() {
            return this.elements
        }, ICompElement.prototype.destroyElements = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
        }, ICompElement.prototype.destroy = function() {
            this.destroyElements(), this.destroyBaseElement()
        };

        function SVGCompElement(t, e, r) {
            this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }
        extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
            return new SVGCompElement(t, this.globalData, this)
        };

        function SVGRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
            var r = "";
            if (e && e.title) {
                var i = createNS("title"),
                    s = createElementID();
                i.setAttribute("id", s), i.textContent = e.title, this.svgElement.appendChild(i), r += s
            }
            if (e && e.description) {
                var a = createNS("desc"),
                    n = createElementID();
                a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + n
            }
            r && this.svgElement.setAttribute("aria-labelledby", r);
            var h = createNS("defs");
            this.svgElement.appendChild(h);
            var o = createNS("g");
            this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = {
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                progressiveLoad: e && e.progressiveLoad || !1,
                hideOnTransparent: !(e && e.hideOnTransparent === !1),
                viewBoxOnly: e && e.viewBoxOnly || !1,
                viewBoxSize: e && e.viewBoxSize || !1,
                className: e && e.className || "",
                id: e && e.id || "",
                focusable: e && e.focusable,
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "100%",
                    height: e && e.filterSize && e.filterSize.height || "100%",
                    x: e && e.filterSize && e.filterSize.x || "0%",
                    y: e && e.filterSize && e.filterSize.y || "0%"
                },
                width: e && e.width,
                height: e && e.height,
                runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: h,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }
        extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
            return new SVGCompElement(t, this.globalData, this)
        };

        function CVContextData() {
            this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1;
            var t, e = 15;
            for (this.savedOp = createTypedArray("float32", e), t = 0; t < e; t += 1) this.saved[t] = createTypedArray("float32", 16);
            this._length = e
        }
        CVContextData.prototype.duplicate = function() {
            var t = this._length * 2,
                e = this.savedOp;
            this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
            var r = 0;
            for (r = this._length; r < t; r += 1) this.saved[r] = createTypedArray("float32", 16);
            this._length = t
        }, CVContextData.prototype.reset = function() {
            this.cArrPos = 0, this.cTr.reset(), this.cO = 1
        }, CVContextData.prototype.popTransform = function() {
            var t = this.saved[this.cArrPos],
                e, r = this.cTr.props;
            for (e = 0; e < 16; e += 1) r[e] = t[e];
            return t
        }, CVContextData.prototype.popOpacity = function() {
            var t = this.savedOp[this.cArrPos];
            return this.cO = t, t
        }, CVContextData.prototype.pop = function() {
            this.cArrPos -= 1;
            var t = this.popTransform(),
                e = this.popOpacity();
            return {
                transform: t,
                opacity: e
            }
        }, CVContextData.prototype.push = function() {
            var t = this.cTr.props;
            this._length <= this.cArrPos && this.duplicate();
            var e, r = this.saved[this.cArrPos];
            for (e = 0; e < 16; e += 1) r[e] = t[e];
            this.savedOp[this.cArrPos] = this.cO, this.cArrPos += 1
        }, CVContextData.prototype.getTransform = function() {
            return this.cTr
        }, CVContextData.prototype.getOpacity = function() {
            return this.cO
        }, CVContextData.prototype.setOpacity = function(t) {
            this.cO = t
        };

        function ShapeTransformManager() {
            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }
        ShapeTransformManager.prototype = {
            addTransformSequence: function(e) {
                var r, i = e.length,
                    s = "_";
                for (r = 0; r < i; r += 1) s += e[r].transform.key + "_";
                var a = this.sequences[s];
                return a || (a = {
                    transforms: [].concat(e),
                    finalTransform: new Matrix,
                    _mdf: !1
                }, this.sequences[s] = a, this.sequenceList.push(a)), a
            },
            processSequence: function(e, r) {
                for (var i = 0, s = e.transforms.length, a = r; i < s && !r;) {
                    if (e.transforms[i].transform.mProps._mdf) {
                        a = !0;
                        break
                    }
                    i += 1
                }
                if (a) {
                    var n;
                    for (e.finalTransform.reset(), i = s - 1; i >= 0; i -= 1) n = e.transforms[i].transform.mProps.v.props, e.finalTransform.transform(n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9], n[10], n[11], n[12], n[13], n[14], n[15])
                }
                e._mdf = a
            },
            processSequences: function(e) {
                var r, i = this.sequenceList.length;
                for (r = 0; r < i; r += 1) this.processSequence(this.sequenceList[r], e)
            },
            getNewKey: function() {
                return this.transform_key_count += 1, "_" + this.transform_key_count
            }
        };
        var lumaLoader = function() {
            var e = "__lottie_element_luma_buffer",
                r = null,
                i = null,
                s = null;

            function a() {
                var o = createNS("svg"),
                    p = createNS("filter"),
                    d = createNS("feColorMatrix");
                return p.setAttribute("id", e), d.setAttribute("type", "matrix"), d.setAttribute("color-interpolation-filters", "sRGB"), d.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), p.appendChild(d), o.appendChild(p), o.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (o.style.display = "none"), o
            }

            function n() {
                r || (s = a(), document.body.appendChild(s), r = createTag("canvas"), i = r.getContext("2d"), i.filter = "url(#" + e + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1))
            }

            function h(o) {
                return r || n(), r.width = o.width, r.height = o.height, i.filter = "url(#" + e + ")", r
            }
            return {
                load: n,
                get: h
            }
        };

        function createCanvas(t, e) {
            if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
            var r = createTag("canvas");
            return r.width = t, r.height = e, r
        }
        var assetLoader = function() {
            return {
                loadLumaCanvas: lumaLoader.load,
                getLumaCanvas: lumaLoader.get,
                createCanvas
            }
        }();

        function CVEffects() {}
        CVEffects.prototype.renderFrame = function() {};

        function CVMaskElement(t, e) {
            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
            var r, i = this.masksProperties.length,
                s = !1;
            for (r = 0; r < i; r += 1) this.masksProperties[r].mode !== "n" && (s = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
            this.hasMasks = s, s && this.element.addRenderableComponent(this)
        }
        CVMaskElement.prototype.renderFrame = function() {
            if (this.hasMasks) {
                var t = this.element.finalTransform.mat,
                    e = this.element.canvasContext,
                    r, i = this.masksProperties.length,
                    s, a, n;
                for (e.beginPath(), r = 0; r < i; r += 1)
                    if (this.masksProperties[r].mode !== "n") {
                        this.masksProperties[r].inv && (e.moveTo(0, 0), e.lineTo(this.element.globalData.compSize.w, 0), e.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), e.lineTo(0, this.element.globalData.compSize.h), e.lineTo(0, 0)), n = this.viewData[r].v, s = t.applyToPointArray(n.v[0][0], n.v[0][1], 0), e.moveTo(s[0], s[1]);
                        var h, o = n._length;
                        for (h = 1; h < o; h += 1) a = t.applyToTriplePoints(n.o[h - 1], n.i[h], n.v[h]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                        a = t.applyToTriplePoints(n.o[h - 1], n.i[0], n.v[0]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5])
                    } this.element.globalData.renderer.save(!0), e.clip()
            }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
            this.element = null
        };

        function CVBaseElement() {}
        var operationsMap = {
            1: "source-in",
            2: "source-out",
            3: "source-in",
            4: "source-out"
        };
        CVBaseElement.prototype = {
            createElements: function() {},
            initRendererElement: function() {},
            createContainerElements: function() {
                if (this.data.tt >= 1) {
                    this.buffers = [];
                    var e = this.globalData.canvasContext,
                        r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                    this.buffers.push(r);
                    var i = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                    this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                }
                this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects
            },
            createContent: function() {},
            setBlendMode: function() {
                var e = this.globalData;
                if (e.blendMode !== this.data.bm) {
                    e.blendMode = this.data.bm;
                    var r = getBlendMode(this.data.bm);
                    e.canvasContext.globalCompositeOperation = r
                }
            },
            createRenderableComponents: function() {
                this.maskManager = new CVMaskElement(this.data, this)
            },
            hideElement: function() {
                !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0)
            },
            showElement: function() {
                this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
            },
            clearCanvas: function(e) {
                e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
            },
            prepareLayer: function() {
                if (this.data.tt >= 1) {
                    var e = this.buffers[0],
                        r = e.getContext("2d");
                    this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                }
            },
            exitLayer: function() {
                if (this.data.tt >= 1) {
                    var e = this.buffers[1],
                        r = e.getContext("2d");
                    this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
                    var i = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
                    if (i.renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                        var s = assetLoader.getLumaCanvas(this.canvasContext.canvas),
                            a = s.getContext("2d");
                        a.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(s, 0, 0)
                    }
                    this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                }
            },
            renderFrame: function(e) {
                if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !e)) {
                    this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                    var r = this.data.ty === 0;
                    this.prepareLayer(), this.globalData.renderer.save(r), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(r), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                }
            },
            destroy: function() {
                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
            },
            mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;

        function CVShapeData(t, e, r, i) {
            this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
            var s = 4;
            e.ty === "rc" ? s = 5 : e.ty === "el" ? s = 6 : e.ty === "sr" && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
            var a, n = r.length,
                h;
            for (a = 0; a < n; a += 1) r[a].closed || (h = {
                transforms: i.addTransformSequence(r[a].transforms),
                trNodes: []
            }, this.styledShapes.push(h), r[a].elements.push(h))
        }
        CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;

        function CVShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function(t, e) {
            var r = {
                    data: t,
                    type: t.ty,
                    preTransforms: this.transformsManager.addTransformSequence(e),
                    transforms: [],
                    elements: [],
                    closed: t.hd === !0
                },
                i = {};
            if (t.ty === "fl" || t.ty === "st" ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : (t.ty === "gf" || t.ty === "gs") && (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
                    k: 0
                }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
                    k: 0
                }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), t.ty === "st" || t.ty === "gs") {
                if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], t.lj == 1 && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
                    var s = new DashProperty(this, t.d, "canvas", this);
                    i.d = s, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
                }
            } else r.r = t.r === 2 ? "evenodd" : "nonzero";
            return this.stylesList.push(r), i.style = r, i
        }, CVShapeElement.prototype.createGroupElement = function() {
            var t = {
                it: [],
                prevViewData: []
            };
            return t
        }, CVShapeElement.prototype.createTransformElement = function(t) {
            var e = {
                transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                    mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                }
            };
            return e
        }, CVShapeElement.prototype.createShapeElement = function(t) {
            var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
            return this.shapes.push(e), this.addShapeToModifiers(e), e
        }, CVShapeElement.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
            var e, r = this.stylesList.length;
            for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) t[e].closed = !0
        }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, s) {
            var a, n = t.length - 1,
                h, o, p = [],
                d = [],
                S, u, g, y = [].concat(s);
            for (a = n; a >= 0; a -= 1) {
                if (S = this.searchProcessedElement(t[a]), S ? e[a] = r[S - 1] : t[a]._shouldRender = i, t[a].ty === "fl" || t[a].ty === "st" || t[a].ty === "gf" || t[a].ty === "gs") S ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], y), p.push(e[a].style);
                else if (t[a].ty === "gr") {
                    if (!S) e[a] = this.createGroupElement(t[a]);
                    else
                        for (o = e[a].it.length, h = 0; h < o; h += 1) e[a].prevViewData[h] = e[a].it[h];
                    this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, y)
                } else t[a].ty === "tr" ? (S || (g = this.createTransformElement(t[a]), e[a] = g), y.push(e[a]), this.addTransformToStyleList(e[a])) : t[a].ty === "sh" || t[a].ty === "rc" || t[a].ty === "el" || t[a].ty === "sr" ? S || (e[a] = this.createShapeElement(t[a])) : t[a].ty === "tm" || t[a].ty === "rd" || t[a].ty === "pb" || t[a].ty === "zz" || t[a].ty === "op" ? (S ? (u = e[a], u.closed = !1) : (u = ShapeModifiers.getModifier(t[a].ty), u.init(this, t[a]), e[a] = u, this.shapeModifiers.push(u)), d.push(u)) : t[a].ty === "rp" && (S ? (u = e[a], u.closed = !0) : (u = ShapeModifiers.getModifier(t[a].ty), e[a] = u, u.init(this, t, a, e), this.shapeModifiers.push(u), i = !1), d.push(u));
                this.addProcessedElement(t[a], a + 1)
            }
            for (this.removeTransformFromStyleList(), this.closeStyles(p), n = d.length, a = 0; a < n; a += 1) d[a].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
            var t, e = this.stylesList.length,
                r, i, s, a, n, h, o = this.globalData.renderer,
                p = this.globalData.canvasContext,
                d, S;
            for (t = 0; t < e; t += 1)
                if (S = this.stylesList[t], d = S.type, !((d === "st" || d === "gs") && S.wi === 0 || !S.data._shouldRender || S.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
                    for (o.save(), n = S.elements, d === "st" || d === "gs" ? (p.strokeStyle = d === "st" ? S.co : S.grd, p.lineWidth = S.wi, p.lineCap = S.lc, p.lineJoin = S.lj, p.miterLimit = S.ml || 0) : p.fillStyle = d === "fl" ? S.co : S.grd, o.ctxOpacity(S.coOp), d !== "st" && d !== "gs" && p.beginPath(), o.ctxTransform(S.preTransforms.finalTransform.props), i = n.length, r = 0; r < i; r += 1) {
                        for ((d === "st" || d === "gs") && (p.beginPath(), S.da && (p.setLineDash(S.da), p.lineDashOffset = S.do)), h = n[r].trNodes, a = h.length, s = 0; s < a; s += 1) h[s].t === "m" ? p.moveTo(h[s].p[0], h[s].p[1]) : h[s].t === "c" ? p.bezierCurveTo(h[s].pts[0], h[s].pts[1], h[s].pts[2], h[s].pts[3], h[s].pts[4], h[s].pts[5]) : p.closePath();
                        (d === "st" || d === "gs") && (p.stroke(), S.da && p.setLineDash(this.dashResetter))
                    }
                    d !== "st" && d !== "gs" && p.fill(S.r), o.restore()
                }
        }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
            var s, a = e.length - 1,
                n;
            for (n = t, s = a; s >= 0; s -= 1) e[s].ty === "tr" ? (n = r[s].transform, this.renderShapeTransform(t, n)) : e[s].ty === "sh" || e[s].ty === "el" || e[s].ty === "rc" || e[s].ty === "sr" ? this.renderPath(e[s], r[s]) : e[s].ty === "fl" ? this.renderFill(e[s], r[s], n) : e[s].ty === "st" ? this.renderStroke(e[s], r[s], n) : e[s].ty === "gf" || e[s].ty === "gs" ? this.renderGradientFill(e[s], r[s], n) : e[s].ty === "gr" ? this.renderShape(n, e[s].it, r[s].it) : e[s].ty;
            i && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var r = t.trNodes,
                    i = e.paths,
                    s, a, n, h = i._length;
                r.length = 0;
                var o = t.transforms.finalTransform;
                for (n = 0; n < h; n += 1) {
                    var p = i.shapes[n];
                    if (p && p.v) {
                        for (a = p._length, s = 1; s < a; s += 1) s === 1 && r.push({
                            t: "m",
                            p: o.applyToPointArray(p.v[0][0], p.v[0][1], 0)
                        }), r.push({
                            t: "c",
                            pts: o.applyToTriplePoints(p.o[s - 1], p.i[s], p.v[s])
                        });
                        a === 1 && r.push({
                            t: "m",
                            p: o.applyToPointArray(p.v[0][0], p.v[0][1], 0)
                        }), p.c && a && (r.push({
                            t: "c",
                            pts: o.applyToTriplePoints(p.o[s - 1], p.i[0], p.v[0])
                        }), r.push({
                            t: "z"
                        }))
                    }
                }
                t.trNodes = r
            }
        }, CVShapeElement.prototype.renderPath = function(t, e) {
            if (t.hd !== !0 && t._shouldRender) {
                var r, i = e.styledShapes.length;
                for (r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
            }
        }, CVShapeElement.prototype.renderFill = function(t, e, r) {
            var i = e.style;
            (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
            var i = e.style,
                s;
            if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || t.t !== 1 && (e.h._mdf || e.a._mdf)) {
                var a = this.globalData.canvasContext,
                    n = e.s.v,
                    h = e.e.v;
                if (t.t === 1) s = a.createLinearGradient(n[0], n[1], h[0], h[1]);
                else {
                    var o = Math.sqrt(Math.pow(n[0] - h[0], 2) + Math.pow(n[1] - h[1], 2)),
                        p = Math.atan2(h[1] - n[1], h[0] - n[0]),
                        d = e.h.v;
                    d >= 1 ? d = .99 : d <= -1 && (d = -.99);
                    var S = o * d,
                        u = Math.cos(p + e.a.v) * S + n[0],
                        g = Math.sin(p + e.a.v) * S + n[1];
                    s = a.createRadialGradient(u, g, 0, n[0], n[1], o)
                }
                var y, v = t.g.p,
                    C = e.g.c,
                    c = 1;
                for (y = 0; y < v; y += 1) e.g._hasOpacity && e.g._collapsable && (c = e.g.o[y * 2 + 1]), s.addColorStop(C[y * 4] / 100, "rgba(" + C[y * 4 + 1] + "," + C[y * 4 + 2] + "," + C[y * 4 + 3] + "," + c + ")");
                i.grd = s
            }
            i.coOp = e.o.v * r.opacity
        }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
            var i = e.style,
                s = e.d;
            s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function() {
            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        };

        function CVTextElement(t, e, r) {
            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: ""
            }, this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
            var r = !1;
            t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
            var i = this.globalData.fontManager.getFontByName(t.f),
                s, a, n = t.l,
                h = this.mHelper;
            this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
            var o, p, d, S, u, g, y, v, C, c, m = this.data.singleShape,
                f = t.tr * .001 * t.finalSize,
                l = 0,
                b = 0,
                P = !0,
                x = 0;
            for (s = 0; s < a; s += 1) {
                o = this.globalData.fontManager.getCharData(t.finalText[s], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), p = o && o.data || {}, h.reset(), m && n[s].n && (l = -f, b += t.yOffset, b += P ? 1 : 0, P = !1), u = p.shapes ? p.shapes[0].it : [], y = u.length, h.scale(t.finalSize / 100, t.finalSize / 100), m && this.applyTextPropertiesToMatrix(t, h, n[s].line, l, b), C = createSizedArray(y - 1);
                var T = 0;
                for (g = 0; g < y; g += 1)
                    if (u[g].ty === "sh") {
                        for (S = u[g].ks.k.i.length, v = u[g].ks.k, c = [], d = 1; d < S; d += 1) d === 1 && c.push(h.applyToX(v.v[0][0], v.v[0][1], 0), h.applyToY(v.v[0][0], v.v[0][1], 0)), c.push(h.applyToX(v.o[d - 1][0], v.o[d - 1][1], 0), h.applyToY(v.o[d - 1][0], v.o[d - 1][1], 0), h.applyToX(v.i[d][0], v.i[d][1], 0), h.applyToY(v.i[d][0], v.i[d][1], 0), h.applyToX(v.v[d][0], v.v[d][1], 0), h.applyToY(v.v[d][0], v.v[d][1], 0));
                        c.push(h.applyToX(v.o[d - 1][0], v.o[d - 1][1], 0), h.applyToY(v.o[d - 1][0], v.o[d - 1][1], 0), h.applyToX(v.i[0][0], v.i[0][1], 0), h.applyToY(v.i[0][0], v.i[0][1], 0), h.applyToX(v.v[0][0], v.v[0][1], 0), h.applyToY(v.v[0][0], v.v[0][1], 0)), C[T] = c, T += 1
                    } m && (l += n[s].l, l += f), this.textSpans[x] ? this.textSpans[x].elem = C : this.textSpans[x] = {
                    elem: C
                }, x += 1
            }
        }, CVTextElement.prototype.renderInnerContent = function() {
            var t = this.canvasContext;
            t.font = this.values.fValue, t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var e, r, i, s, a, n, h = this.textAnimator.renderedLetters,
                o = this.textProperty.currentData.l;
            r = o.length;
            var p, d = null,
                S = null,
                u = null,
                g, y;
            for (e = 0; e < r; e += 1)
                if (!o[e].n) {
                    if (p = h[e], p && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(p.p), this.globalData.renderer.ctxOpacity(p.o)), this.fill) {
                        for (p && p.fc ? d !== p.fc && (d = p.fc, t.fillStyle = p.fc) : d !== this.values.fill && (d = this.values.fill, t.fillStyle = this.values.fill), g = this.textSpans[e].elem, s = g.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
                            for (y = g[i], n = y.length, this.globalData.canvasContext.moveTo(y[0], y[1]), a = 2; a < n; a += 6) this.globalData.canvasContext.bezierCurveTo(y[a], y[a + 1], y[a + 2], y[a + 3], y[a + 4], y[a + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                    }
                    if (this.stroke) {
                        for (p && p.sw ? u !== p.sw && (u = p.sw, t.lineWidth = p.sw) : u !== this.values.sWidth && (u = this.values.sWidth, t.lineWidth = this.values.sWidth), p && p.sc ? S !== p.sc && (S = p.sc, t.strokeStyle = p.sc) : S !== this.values.stroke && (S = this.values.stroke, t.strokeStyle = this.values.stroke), g = this.textSpans[e].elem, s = g.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
                            for (y = g[i], n = y.length, this.globalData.canvasContext.moveTo(y[0], y[1]), a = 2; a < n; a += 6) this.globalData.canvasContext.bezierCurveTo(y[a], y[a + 1], y[a + 2], y[a + 3], y[a + 4], y[a + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                    }
                    p && this.globalData.renderer.restore()
                }
        };

        function CVImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var t = createTag("canvas");
                t.width = this.assetData.w, t.height = this.assetData.h;
                var e = t.getContext("2d"),
                    r = this.img.width,
                    i = this.img.height,
                    s = r / i,
                    a = this.assetData.w / this.assetData.h,
                    n, h, o = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                s > a && o === "xMidYMid slice" || s < a && o !== "xMidYMid slice" ? (h = i, n = h * a) : (n = r, h = n / a), e.drawImage(this.img, (r - n) / 2, (i - h) / 2, n, h, 0, 0, this.assetData.w, this.assetData.h), this.img = t
            }
        }, CVImageElement.prototype.renderInnerContent = function() {
            this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function() {
            this.img = null
        };

        function CVSolidElement(t, e, r) {
            this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
            var t = this.canvasContext;
            t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
        };

        function CanvasRendererBase(t, e) {
            this.animationItem = t, this.renderConfig = {
                clearCanvas: e && e.clearCanvas !== void 0 ? e.clearCanvas : !0,
                context: e && e.context || null,
                progressiveLoad: e && e.progressiveLoad || !1,
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                className: e && e.className || "",
                id: e && e.id || ""
            }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
        }
        extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
            return new CVShapeElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createText = function(t) {
            return new CVTextElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createImage = function(t) {
            return new CVImageElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createSolid = function(t) {
            return new CVSolidElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
            if (!(t[0] === 1 && t[1] === 0 && t[4] === 0 && t[5] === 1 && t[12] === 0 && t[13] === 0)) {
                if (!this.renderConfig.clearCanvas) {
                    this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
                    return
                }
                this.transformMat.cloneFromProps(t);
                var e = this.contextData.getTransform(),
                    r = e.props;
                this.transformMat.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]), e.cloneFromProps(this.transformMat.props);
                var i = e.props;
                this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
            }
        }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
            var e = this.contextData.getOpacity();
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.globalAlpha *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha = e;
                return
            }
            e *= t < 0 ? 0 : t, this.contextData.setOpacity(e), this.globalData.currentGlobalAlpha !== e && (this.canvasContext.globalAlpha = e, this.globalData.currentGlobalAlpha = e)
        }, CanvasRendererBase.prototype.reset = function() {
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.restore();
                return
            }
            this.contextData.reset()
        }, CanvasRendererBase.prototype.save = function(t) {
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.save();
                return
            }
            t && this.canvasContext.save(), this.contextData.push()
        }, CanvasRendererBase.prototype.restore = function(t) {
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.restore();
                return
            }
            t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over");
            var e = this.contextData.pop(),
                r = e.transform,
                i = e.opacity;
            this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i, this.globalData.currentGlobalAlpha = i)
        }, CanvasRendererBase.prototype.configAnimation = function(t) {
            if (this.animationItem.wrapper) {
                this.animationItem.container = createTag("canvas");
                var e = this.animationItem.container.style;
                e.width = "100%", e.height = "100%";
                var r = "0px 0px 0px";
                e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
            } else this.canvasContext = this.renderConfig.context;
            this.data = t, this.layers = t.layers, this.transformCanvas = {
                w: t.w,
                h: t.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0
            }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
        }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
            this.reset();
            var r, i;
            t ? (r = t, i = e, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr);
            var s, a;
            if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
                var n = this.renderConfig.preserveAspectRatio.split(" "),
                    h = n[1] || "meet",
                    o = n[0] || "xMidYMid",
                    p = o.substr(0, 4),
                    d = o.substr(4);
                s = r / i, a = this.transformCanvas.w / this.transformCanvas.h, a > s && h === "meet" || a < s && h === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), p === "xMid" && (a < s && h === "meet" || a > s && h === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : p === "xMax" && (a < s && h === "meet" || a > s && h === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, d === "YMid" && (a > s && h === "meet" || a < s && h === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : d === "YMax" && (a > s && h === "meet" || a < s && h === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0
            } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function() {
            this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
            var t, e = this.layers ? this.layers.length : 0;
            for (t = e - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
            if (!(this.renderedFrame === t && this.renderConfig.clearCanvas === !0 && !e || this.destroyed || t === -1)) {
                this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                var r, i = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), r = 0; r < i; r += 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
                if (this.globalData._mdf) {
                    for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                    this.renderConfig.clearCanvas !== !0 && this.restore()
                }
            }
        }, CanvasRendererBase.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!(e[t] || this.layers[t].ty === 99)) {
                var r = this.createItem(this.layers[t], this, this.globalData);
                e[t] = r, r.initExpressions()
            }
        }, CanvasRendererBase.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                var t = this.pendingElements.pop();
                t.checkParenting()
            }
        }, CanvasRendererBase.prototype.hide = function() {
            this.animationItem.container.style.display = "none"
        }, CanvasRendererBase.prototype.show = function() {
            this.animationItem.container.style.display = "block"
        };

        function CVCompElement(t, e, r) {
            this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }
        extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
            var t = this.canvasContext;
            t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip();
            var e, r = this.layers.length;
            for (e = r - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }, CVCompElement.prototype.destroy = function() {
            var t, e = this.layers.length;
            for (t = e - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.layers = null, this.elements = null
        }, CVCompElement.prototype.createComp = function(t) {
            return new CVCompElement(t, this.globalData, this)
        };

        function CanvasRenderer(t, e) {
            this.animationItem = t, this.renderConfig = {
                clearCanvas: e && e.clearCanvas !== void 0 ? e.clearCanvas : !0,
                context: e && e.context || null,
                progressiveLoad: e && e.progressiveLoad || !1,
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                className: e && e.className || "",
                id: e && e.id || "",
                runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
            }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
        }
        extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
            return new CVCompElement(t, this.globalData, this)
        };

        function HBaseElement() {}
        HBaseElement.prototype = {
            checkBlendMode: function() {},
            initRendererElement: function() {
                this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
            },
            createContainerElements: function() {
                this.renderableEffectsManager = new CVEffects, this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode()
            },
            renderElement: function() {
                var e = this.transformedElement ? this.transformedElement.style : {};
                if (this.finalTransform._matMdf) {
                    var r = this.finalTransform.mat.toCSS();
                    e.transform = r, e.webkitTransform = r
                }
                this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
            },
            destroy: function() {
                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData)
            },
            addEffects: function() {},
            setMatte: function() {}
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;

        function HSolidElement(t, e, r) {
            this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
            var t;
            this.data.hasMask ? (t = createNS("rect"), t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : (t = createTag("div"), t.style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
        };

        function HShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }
        }
        extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
            var t;
            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
            else {
                t = createNS("svg");
                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
        }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
            var r = t.sh.v,
                i = t.transformers,
                s, a = r._length,
                n, h, o, p;
            if (!(a <= 1)) {
                for (s = 0; s < a - 1; s += 1) n = this.getTransformedPoint(i, r.v[s]), h = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[s + 1]), p = this.getTransformedPoint(i, r.v[s + 1]), this.checkBounds(n, h, o, p, e);
                r.c && (n = this.getTransformedPoint(i, r.v[s]), h = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[0]), p = this.getTransformedPoint(i, r.v[0]), this.checkBounds(n, h, o, p, e))
            }
        }, HShapeElement.prototype.checkBounds = function(t, e, r, i, s) {
            this.getBoundsOfCurve(t, e, r, i);
            var a = this.shapeBoundingBox;
            s.x = bmMin(a.left, s.x), s.xMax = bmMax(a.right, s.xMax), s.y = bmMin(a.top, s.y), s.yMax = bmMax(a.bottom, s.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
            for (var s = [
                    [t[0], i[0]],
                    [t[1], i[1]]
                ], a, n, h, o, p, d, S, u = 0; u < 2; ++u) n = 6 * t[u] - 12 * e[u] + 6 * r[u], a = -3 * t[u] + 9 * e[u] - 9 * r[u] + 3 * i[u], h = 3 * e[u] - 3 * t[u], n |= 0, a |= 0, h |= 0, a === 0 && n === 0 || (a === 0 ? (o = -h / n, o > 0 && o < 1 && s[u].push(this.calculateF(o, t, e, r, i, u))) : (p = n * n - 4 * h * a, p >= 0 && (d = (-n + bmSqrt(p)) / (2 * a), d > 0 && d < 1 && s[u].push(this.calculateF(d, t, e, r, i, u)), S = (-n - bmSqrt(p)) / (2 * a), S > 0 && S < 1 && s[u].push(this.calculateF(S, t, e, r, i, u)))));
            this.shapeBoundingBox.left = bmMin.apply(null, s[0]), this.shapeBoundingBox.top = bmMin.apply(null, s[1]), this.shapeBoundingBox.right = bmMax.apply(null, s[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, s[1])
        }, HShapeElement.prototype.calculateF = function(t, e, r, i, s, a) {
            return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bmPow(t, 2) * i[a] + bmPow(t, 3) * s[a]
        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e)
        }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
            var r = 0;
            if (t.keyframes) {
                for (var i = 0; i < t.keyframes.length; i += 1) {
                    var s = t.keyframes[i].s;
                    s > r && (r = s)
                }
                r *= t.mult
            } else r = t.v * t.mult;
            e.x -= r, e.xMax += r, e.y -= r, e.yMax += r
        }, HShapeElement.prototype.currentBoxContains = function(t) {
            return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }, HShapeElement.prototype.renderInnerContent = function() {
            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                var t = this.tempBoundingBox,
                    e = 999999;
                if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                var r = !1;
                if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                    this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                    var i = this.shapeCont.style,
                        s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    i.transform = s, i.webkitTransform = s
                }
            }
        };

        function HTextElement(t, e, r) {
            this.textSpans = [], this.textPaths = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
            if (this.isMasked = this.checkMasks(), this.isMasked) {
                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                var t = createNS("g");
                this.maskedElement.appendChild(t), this.innerElem = t
            } else this.renderType = "html", this.innerElem = this.layerElement;
            this.checkParenting()
        }, HTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style,
                r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
            var i = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars)
                if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", i.fClass) this.innerElem.className = i.fClass;
                else {
                    e.fontFamily = i.fFamily;
                    var s = t.fWeight,
                        a = t.fStyle;
                    e.fontStyle = a, e.fontWeight = s
                } var n, h, o = t.l;
            h = o.length;
            var p, d, S, u = this.mHelper,
                g, y = "",
                v = 0;
            for (n = 0; n < h; n += 1) {
                if (this.globalData.fontManager.chars ? (this.textPaths[v] ? p = this.textPaths[v] : (p = createNS("path"), p.setAttribute("stroke-linecap", lineCapEnum[1]), p.setAttribute("stroke-linejoin", lineJoinEnum[2]), p.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[v] ? (d = this.textSpans[v], S = d.children[0]) : (d = createTag("div"), d.style.lineHeight = 0, S = createNS("svg"), S.appendChild(p), styleDiv(d)))) : this.isMasked ? p = this.textPaths[v] ? this.textPaths[v] : createNS("text") : this.textSpans[v] ? (d = this.textSpans[v], p = this.textPaths[v]) : (d = createTag("span"), styleDiv(d), p = createTag("span"), styleDiv(p), d.appendChild(p)), this.globalData.fontManager.chars) {
                    var C = this.globalData.fontManager.getCharData(t.finalText[n], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily),
                        c;
                    if (C ? c = C.data : c = null, u.reset(), c && c.shapes && c.shapes.length && (g = c.shapes[0].it, u.scale(t.finalSize / 100, t.finalSize / 100), y = this.createPathShape(u, g), p.setAttribute("d", y)), this.isMasked) this.innerElem.appendChild(p);
                    else {
                        if (this.innerElem.appendChild(d), c && c.shapes) {
                            document.body.appendChild(S);
                            var m = S.getBBox();
                            S.setAttribute("width", m.width + 2), S.setAttribute("height", m.height + 2), S.setAttribute("viewBox", m.x - 1 + " " + (m.y - 1) + " " + (m.width + 2) + " " + (m.height + 2));
                            var f = S.style,
                                l = "translate(" + (m.x - 1) + "px," + (m.y - 1) + "px)";
                            f.transform = l, f.webkitTransform = l, o[n].yOffset = m.y - 1
                        } else S.setAttribute("width", 1), S.setAttribute("height", 1);
                        d.appendChild(S)
                    }
                } else if (p.textContent = o[n].val, p.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(p);
                else {
                    this.innerElem.appendChild(d);
                    var b = p.style,
                        P = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                    b.transform = P, b.webkitTransform = P
                }
                this.isMasked ? this.textSpans[v] = p : this.textSpans[v] = d, this.textSpans[v].style.display = "block", this.textPaths[v] = p, v += 1
            }
            for (; v < this.textSpans.length;) this.textSpans[v].style.display = "none", v += 1
        }, HTextElement.prototype.renderInnerContent = function() {
            var t;
            if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                if (this.isMasked && this.finalTransform._matMdf) {
                    this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                    var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                    t.transform = e, t.webkitTransform = e
                }
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
                var r, i, s = 0,
                    a = this.textAnimator.renderedLetters,
                    n = this.textProperty.currentData.l;
                i = n.length;
                var h, o, p;
                for (r = 0; r < i; r += 1) n[r].n ? s += 1 : (o = this.textSpans[r], p = this.textPaths[r], h = a[s], s += 1, h._mdf.m && (this.isMasked ? o.setAttribute("transform", h.m) : (o.style.webkitTransform = h.m, o.style.transform = h.m)), o.style.opacity = h.o, h.sw && h._mdf.sw && p.setAttribute("stroke-width", h.sw), h.sc && h._mdf.sc && p.setAttribute("stroke", h.sc), h.fc && h._mdf.fc && (p.setAttribute("fill", h.fc), p.style.color = h.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var d = this.innerElem.getBBox();
                    this.currentBBox.w !== d.width && (this.currentBBox.w = d.width, this.svgElement.setAttribute("width", d.width)), this.currentBBox.h !== d.height && (this.currentBBox.h = d.height, this.svgElement.setAttribute("height", d.height));
                    var S = 1;
                    if (this.currentBBox.w !== d.width + S * 2 || this.currentBBox.h !== d.height + S * 2 || this.currentBBox.x !== d.x - S || this.currentBBox.y !== d.y - S) {
                        this.currentBBox.w = d.width + S * 2, this.currentBBox.h = d.height + S * 2, this.currentBBox.x = d.x - S, this.currentBBox.y = d.y - S, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                        var u = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        t.transform = u, t.webkitTransform = u
                    }
                }
            }
        };

        function HCameraElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
            var i = PropertyFactory.getProp;
            if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                var s, a = t.ks.or.k.length;
                for (s = 0; s < a; s += 1) t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null
            }
            this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                mProp: this
            }
        }
        extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
            var t, e = this.comp.threeDElements.length,
                r, i, s;
            for (t = 0; t < e; t += 1)
                if (r = this.comp.threeDElements[t], r.type === "3d") {
                    i = r.perspectiveElem.style, s = r.container.style;
                    var a = this.pe.v + "px",
                        n = "0px 0px 0px",
                        h = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    i.perspective = a, i.webkitPerspective = a, s.transformOrigin = n, s.mozTransformOrigin = n, s.webkitTransformOrigin = n, i.transform = h, i.webkitTransform = h
                }
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
            var t = this._isFirstFrame,
                e, r;
            if (this.hierarchy)
                for (r = this.hierarchy.length, e = 0; e < r; e += 1) t = this.hierarchy[e].finalTransform.mProp._mdf || t;
            if (t || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(), this.hierarchy)
                    for (r = this.hierarchy.length - 1, e = r; e >= 0; e -= 1) {
                        var i = this.hierarchy[e].finalTransform.mProp;
                        this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                    }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                    var s;
                    this.p ? s = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : s = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                    var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)),
                        n = [s[0] / a, s[1] / a, s[2] / a],
                        h = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                        o = Math.atan2(n[1], h),
                        p = Math.atan2(n[0], -n[2]);
                    this.mat.rotateY(p).rotateX(-o)
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                var d = !this._prevMat.equals(this.mat);
                if ((d || this.pe._mdf) && this.comp.threeDElements) {
                    r = this.comp.threeDElements.length;
                    var S, u, g;
                    for (e = 0; e < r; e += 1)
                        if (S = this.comp.threeDElements[e], S.type === "3d") {
                            if (d) {
                                var y = this.mat.toCSS();
                                g = S.container.style, g.transform = y, g.webkitTransform = y
                            }
                            this.pe._mdf && (u = S.perspectiveElem.style, u.perspective = this.pe.v + "px", u.webkitPerspective = this.pe.v + "px")
                        } this.mat.clone(this._prevMat)
                }
            }
            this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0)
        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
            return null
        };

        function HImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
        }
        extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData),
                e = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        };

        function HybridRendererBase(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && e.hideOnTransparent === !1),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }
        extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                var t = this.pendingElements.pop();
                t.checkParenting()
            }
        }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
            var r = t.getBaseElement();
            if (r) {
                var i = this.layers[e];
                if (!i.ddd || !this.supports3d)
                    if (this.threeDElements) this.addTo3dContainer(r, e);
                    else {
                        for (var s = 0, a, n, h; s < e;) this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement && (n = this.elements[s], h = this.layers[s].ddd ? this.getThreeDContainerByPos(s) : n.getBaseElement(), a = h || a), s += 1;
                        a ? (!i.ddd || !this.supports3d) && this.layerElement.insertBefore(r, a) : (!i.ddd || !this.supports3d) && this.layerElement.appendChild(r)
                    }
                else this.addTo3dContainer(r, e)
            }
        }, HybridRendererBase.prototype.createShape = function(t) {
            return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createText = function(t) {
            return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createCamera = function(t) {
            return this.camera = new HCameraElement(t, this.globalData, this), this.camera
        }, HybridRendererBase.prototype.createImage = function(t) {
            return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createSolid = function(t) {
            return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
            for (var e = 0, r = this.threeDElements.length; e < r;) {
                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                e += 1
            }
            return null
        }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
            var r = createTag("div"),
                i, s;
            styleDiv(r);
            var a = createTag("div");
            if (styleDiv(a), e === "3d") {
                i = r.style, i.width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
                var n = "50% 50%";
                i.webkitTransformOrigin = n, i.mozTransformOrigin = n, i.transformOrigin = n, s = a.style;
                var h = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                s.transform = h, s.webkitTransform = h
            }
            r.appendChild(a);
            var o = {
                container: a,
                perspectiveElem: r,
                startPos: t,
                endPos: t,
                type: e
            };
            return this.threeDElements.push(o), o
        }, HybridRendererBase.prototype.build3dContainers = function() {
            var t, e = this.layers.length,
                r, i = "";
            for (t = 0; t < e; t += 1) this.layers[t].ddd && this.layers[t].ty !== 3 ? (i !== "3d" && (i = "3d", r = this.createThreeDContainer(t, "3d")), r.endPos = Math.max(r.endPos, t)) : (i !== "2d" && (i = "2d", r = this.createThreeDContainer(t, "2d")), r.endPos = Math.max(r.endPos, t));
            for (e = this.threeDElements.length, t = e - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
            for (var r = 0, i = this.threeDElements.length; r < i;) {
                if (e <= this.threeDElements[r].endPos) {
                    for (var s = this.threeDElements[r].startPos, a; s < e;) this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()), s += 1;
                    a ? this.threeDElements[r].container.insertBefore(t, a) : this.threeDElements[r].container.appendChild(t);
                    break
                }
                r += 1
            }
        }, HybridRendererBase.prototype.configAnimation = function(t) {
            var e = createTag("div"),
                r = this.animationItem.wrapper,
                i = e.style;
            i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
            var s = createNS("svg");
            s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
            var a = createNS("defs");
            s.appendChild(a), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function() {
            var t = this.animationItem.wrapper.offsetWidth,
                e = this.animationItem.wrapper.offsetHeight,
                r = t / e,
                i = this.globalData.compSize.w / this.globalData.compSize.h,
                s, a, n, h;
            i > r ? (s = t / this.globalData.compSize.w, a = t / this.globalData.compSize.w, n = 0, h = (e - this.globalData.compSize.h * (t / this.globalData.compSize.w)) / 2) : (s = e / this.globalData.compSize.h, a = e / this.globalData.compSize.h, n = (t - this.globalData.compSize.w * (e / this.globalData.compSize.h)) / 2, h = 0);
            var o = this.resizerElem.style;
            o.webkitTransform = "matrix3d(" + s + ",0,0,0,0," + a + ",0,0,0,0,1,0," + n + "," + h + ",0,1)", o.transform = o.webkitTransform
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
            this.resizerElem.style.display = "none"
        }, HybridRendererBase.prototype.show = function() {
            this.resizerElem.style.display = "block"
        }, HybridRendererBase.prototype.initItems = function() {
            if (this.buildAllItems(), this.camera) this.camera.setup();
            else {
                var t = this.globalData.compSize.w,
                    e = this.globalData.compSize.h,
                    r, i = this.threeDElements.length;
                for (r = 0; r < i; r += 1) {
                    var s = this.threeDElements[r].perspectiveElem.style;
                    s.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px", s.perspective = s.webkitPerspective
                }
            }
        }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
            var e, r = t.length,
                i = createTag("div");
            for (e = 0; e < r; e += 1)
                if (t[e].xt) {
                    var s = this.createComp(t[e], i, this.globalData.comp, null);
                    s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
                }
        };

        function HCompElement(t, e, r) {
            this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }
        extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function(t, e) {
            for (var r = 0, i; r < e;) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
            i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
        }, HCompElement.prototype.createComp = function(t) {
            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        };

        function HybridRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && e.hideOnTransparent === !1),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                },
                runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }
        extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        };
        var CompExpressionInterface = function() {
                return function(t) {
                    function e(r) {
                        for (var i = 0, s = t.layers.length; i < s;) {
                            if (t.layers[i].nm === r || t.layers[i].ind === r) return t.elements[i].layerInterface;
                            i += 1
                        }
                        return null
                    }
                    return Object.defineProperty(e, "_name", {
                        value: t.data.nm
                    }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
                }
            }(),
            Expressions = function() {
                var t = {};
                t.initExpressions = e;

                function e(r) {
                    var i = 0,
                        s = [];

                    function a() {
                        i += 1
                    }

                    function n() {
                        i -= 1, i === 0 && o()
                    }

                    function h(p) {
                        s.indexOf(p) === -1 && s.push(p)
                    }

                    function o() {
                        var p, d = s.length;
                        for (p = 0; p < d; p += 1) s[p].release();
                        s.length = 0
                    }
                    r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = a, r.renderer.globalData.popExpression = n, r.renderer.globalData.registerExpressionProperty = h
                }
                return t
            }(),
            MaskManagerInterface = function() {
                function t(r, i) {
                    this._mask = r, this._data = i
                }
                Object.defineProperty(t.prototype, "maskPath", {
                    get: function() {
                        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                    }
                }), Object.defineProperty(t.prototype, "maskOpacity", {
                    get: function() {
                        return this._mask.op.k && this._mask.op.getValue(), this._mask.op.v * 100
                    }
                });
                var e = function(i) {
                    var s = createSizedArray(i.viewData.length),
                        a, n = i.viewData.length;
                    for (a = 0; a < n; a += 1) s[a] = new t(i.viewData[a], i.masksProperties[a]);
                    var h = function(p) {
                        for (a = 0; a < n;) {
                            if (i.masksProperties[a].nm === p) return s[a];
                            a += 1
                        }
                        return null
                    };
                    return h
                };
                return e
            }(),
            ExpressionPropertyInterface = function() {
                var t = {
                        pv: 0,
                        v: 0,
                        mult: 1
                    },
                    e = {
                        pv: [0, 0, 0],
                        v: [0, 0, 0],
                        mult: 1
                    };

                function r(n, h, o) {
                    Object.defineProperty(n, "velocity", {
                        get: function() {
                            return h.getVelocityAtTime(h.comp.currentFrame)
                        }
                    }), n.numKeys = h.keyframes ? h.keyframes.length : 0, n.key = function(p) {
                        if (!n.numKeys) return 0;
                        var d = "";
                        "s" in h.keyframes[p - 1] ? d = h.keyframes[p - 1].s : "e" in h.keyframes[p - 2] ? d = h.keyframes[p - 2].e : d = h.keyframes[p - 2].s;
                        var S = o === "unidimensional" ? new Number(d) : Object.assign({}, d);
                        return S.time = h.keyframes[p - 1].t / h.elem.comp.globalData.frameRate, S.value = o === "unidimensional" ? d[0] : d, S
                    }, n.valueAtTime = h.getValueAtTime, n.speedAtTime = h.getSpeedAtTime, n.velocityAtTime = h.getVelocityAtTime, n.propertyGroup = h.propertyGroup
                }

                function i(n) {
                    (!n || !("pv" in n)) && (n = t);
                    var h = 1 / n.mult,
                        o = n.pv * h,
                        p = new Number(o);
                    return p.value = o, r(p, n, "unidimensional"),
                        function() {
                            return n.k && n.getValue(), o = n.v * h, p.value !== o && (p = new Number(o), p.value = o, r(p, n, "unidimensional")), p
                        }
                }

                function s(n) {
                    (!n || !("pv" in n)) && (n = e);
                    var h = 1 / n.mult,
                        o = n.data && n.data.l || n.pv.length,
                        p = createTypedArray("float32", o),
                        d = createTypedArray("float32", o);
                    return p.value = d, r(p, n, "multidimensional"),
                        function() {
                            n.k && n.getValue();
                            for (var S = 0; S < o; S += 1) d[S] = n.v[S] * h, p[S] = d[S];
                            return p
                        }
                }

                function a() {
                    return t
                }
                return function(n) {
                    return n ? n.propType === "unidimensional" ? i(n) : s(n) : a
                }
            }(),
            TransformExpressionInterface = function() {
                return function(t) {
                    function e(n) {
                        switch (n) {
                            case "scale":
                            case "Scale":
                            case "ADBE Scale":
                            case 6:
                                return e.scale;
                            case "rotation":
                            case "Rotation":
                            case "ADBE Rotation":
                            case "ADBE Rotate Z":
                            case 10:
                                return e.rotation;
                            case "ADBE Rotate X":
                                return e.xRotation;
                            case "ADBE Rotate Y":
                                return e.yRotation;
                            case "position":
                            case "Position":
                            case "ADBE Position":
                            case 2:
                                return e.position;
                            case "ADBE Position_0":
                                return e.xPosition;
                            case "ADBE Position_1":
                                return e.yPosition;
                            case "ADBE Position_2":
                                return e.zPosition;
                            case "anchorPoint":
                            case "AnchorPoint":
                            case "Anchor Point":
                            case "ADBE AnchorPoint":
                            case 1:
                                return e.anchorPoint;
                            case "opacity":
                            case "Opacity":
                            case 11:
                                return e.opacity;
                            default:
                                return null
                        }
                    }
                    Object.defineProperty(e, "rotation", {
                        get: ExpressionPropertyInterface(t.r || t.rz)
                    }), Object.defineProperty(e, "zRotation", {
                        get: ExpressionPropertyInterface(t.rz || t.r)
                    }), Object.defineProperty(e, "xRotation", {
                        get: ExpressionPropertyInterface(t.rx)
                    }), Object.defineProperty(e, "yRotation", {
                        get: ExpressionPropertyInterface(t.ry)
                    }), Object.defineProperty(e, "scale", {
                        get: ExpressionPropertyInterface(t.s)
                    });
                    var r, i, s, a;
                    return t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                        get: function() {
                            return t.p ? a() : [r(), i(), s ? s() : 0]
                        }
                    }), Object.defineProperty(e, "xPosition", {
                        get: ExpressionPropertyInterface(t.px)
                    }), Object.defineProperty(e, "yPosition", {
                        get: ExpressionPropertyInterface(t.py)
                    }), Object.defineProperty(e, "zPosition", {
                        get: ExpressionPropertyInterface(t.pz)
                    }), Object.defineProperty(e, "anchorPoint", {
                        get: ExpressionPropertyInterface(t.a)
                    }), Object.defineProperty(e, "opacity", {
                        get: ExpressionPropertyInterface(t.o)
                    }), Object.defineProperty(e, "skew", {
                        get: ExpressionPropertyInterface(t.sk)
                    }), Object.defineProperty(e, "skewAxis", {
                        get: ExpressionPropertyInterface(t.sa)
                    }), Object.defineProperty(e, "orientation", {
                        get: ExpressionPropertyInterface(t.or)
                    }), e
                }
            }(),
            LayerExpressionInterface = function() {
                function t(p) {
                    var d = new Matrix;
                    if (p !== void 0) {
                        var S = this._elem.finalTransform.mProp.getValueAtTime(p);
                        S.clone(d)
                    } else {
                        var u = this._elem.finalTransform.mProp;
                        u.applyToMatrix(d)
                    }
                    return d
                }

                function e(p, d) {
                    var S = this.getMatrix(d);
                    return S.props[12] = 0, S.props[13] = 0, S.props[14] = 0, this.applyPoint(S, p)
                }

                function r(p, d) {
                    var S = this.getMatrix(d);
                    return this.applyPoint(S, p)
                }

                function i(p, d) {
                    var S = this.getMatrix(d);
                    return S.props[12] = 0, S.props[13] = 0, S.props[14] = 0, this.invertPoint(S, p)
                }

                function s(p, d) {
                    var S = this.getMatrix(d);
                    return this.invertPoint(S, p)
                }

                function a(p, d) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var S, u = this._elem.hierarchy.length;
                        for (S = 0; S < u; S += 1) this._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(p)
                    }
                    return p.applyToPointArray(d[0], d[1], d[2] || 0)
                }

                function n(p, d) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var S, u = this._elem.hierarchy.length;
                        for (S = 0; S < u; S += 1) this._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(p)
                    }
                    return p.inversePoint(d)
                }

                function h(p) {
                    var d = new Matrix;
                    if (d.reset(), this._elem.finalTransform.mProp.applyToMatrix(d), this._elem.hierarchy && this._elem.hierarchy.length) {
                        var S, u = this._elem.hierarchy.length;
                        for (S = 0; S < u; S += 1) this._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(d);
                        return d.inversePoint(p)
                    }
                    return d.inversePoint(p)
                }

                function o() {
                    return [1, 1, 1, 1]
                }
                return function(p) {
                    var d;

                    function S(v) {
                        g.mask = new MaskManagerInterface(v, p)
                    }

                    function u(v) {
                        g.effect = v
                    }

                    function g(v) {
                        switch (v) {
                            case "ADBE Root Vectors Group":
                            case "Contents":
                            case 2:
                                return g.shapeInterface;
                            case 1:
                            case 6:
                            case "Transform":
                            case "transform":
                            case "ADBE Transform Group":
                                return d;
                            case 4:
                            case "ADBE Effect Parade":
                            case "effects":
                            case "Effects":
                                return g.effect;
                            case "ADBE Text Properties":
                                return g.textInterface;
                            default:
                                return null
                        }
                    }
                    g.getMatrix = t, g.invertPoint = n, g.applyPoint = a, g.toWorld = r, g.toWorldVec = e, g.fromWorld = s, g.fromWorldVec = i, g.toComp = r, g.fromComp = h, g.sampleImage = o, g.sourceRectAtTime = p.sourceRectAtTime.bind(p), g._elem = p, d = TransformExpressionInterface(p.finalTransform.mProp);
                    var y = getDescriptor(d, "anchorPoint");
                    return Object.defineProperties(g, {
                        hasParent: {
                            get: function() {
                                return p.hierarchy.length
                            }
                        },
                        parent: {
                            get: function() {
                                return p.hierarchy[0].layerInterface
                            }
                        },
                        rotation: getDescriptor(d, "rotation"),
                        scale: getDescriptor(d, "scale"),
                        position: getDescriptor(d, "position"),
                        opacity: getDescriptor(d, "opacity"),
                        anchorPoint: y,
                        anchor_point: y,
                        transform: {
                            get: function() {
                                return d
                            }
                        },
                        active: {
                            get: function() {
                                return p.isInRange
                            }
                        }
                    }), g.startTime = p.data.st, g.index = p.data.ind, g.source = p.data.refId, g.height = p.data.ty === 0 ? p.data.h : 100, g.width = p.data.ty === 0 ? p.data.w : 100, g.inPoint = p.data.ip / p.comp.globalData.frameRate, g.outPoint = p.data.op / p.comp.globalData.frameRate, g._name = p.data.nm, g.registerMaskInterface = S, g.registerEffectsInterface = u, g
                }
            }(),
            propertyGroupFactory = function() {
                return function(t, e) {
                    return function(r) {
                        return r = r === void 0 ? 1 : r, r <= 0 ? t : e(r - 1)
                    }
                }
            }(),
            PropertyInterface = function() {
                return function(t, e) {
                    var r = {
                        _name: t
                    };

                    function i(s) {
                        return s = s === void 0 ? 1 : s, s <= 0 ? r : e(s - 1)
                    }
                    return i
                }
            }(),
            EffectsExpressionInterface = function() {
                var t = {
                    createEffectsInterface: e
                };

                function e(s, a) {
                    if (s.effectsManager) {
                        var n = [],
                            h = s.data.ef,
                            o, p = s.effectsManager.effectElements.length;
                        for (o = 0; o < p; o += 1) n.push(r(h[o], s.effectsManager.effectElements[o], a, s));
                        var d = s.data.ef || [],
                            S = function(g) {
                                for (o = 0, p = d.length; o < p;) {
                                    if (g === d[o].nm || g === d[o].mn || g === d[o].ix) return n[o];
                                    o += 1
                                }
                                return null
                            };
                        return Object.defineProperty(S, "numProperties", {
                            get: function() {
                                return d.length
                            }
                        }), S
                    }
                    return null
                }

                function r(s, a, n, h) {
                    function o(g) {
                        for (var y = s.ef, v = 0, C = y.length; v < C;) {
                            if (g === y[v].nm || g === y[v].mn || g === y[v].ix) return y[v].ty === 5 ? d[v] : d[v]();
                            v += 1
                        }
                        throw new Error
                    }
                    var p = propertyGroupFactory(o, n),
                        d = [],
                        S, u = s.ef.length;
                    for (S = 0; S < u; S += 1) s.ef[S].ty === 5 ? d.push(r(s.ef[S], a.effectElements[S], a.effectElements[S].propertyGroup, h)) : d.push(i(a.effectElements[S], s.ef[S].ty, h, p));
                    return s.mn === "ADBE Color Control" && Object.defineProperty(o, "color", {
                        get: function() {
                            return d[0]()
                        }
                    }), Object.defineProperties(o, {
                        numProperties: {
                            get: function() {
                                return s.np
                            }
                        },
                        _name: {
                            value: s.nm
                        },
                        propertyGroup: {
                            value: p
                        }
                    }), o.enabled = s.en !== 0, o.active = o.enabled, o
                }

                function i(s, a, n, h) {
                    var o = ExpressionPropertyInterface(s.p);

                    function p() {
                        return a === 10 ? n.comp.compInterface(s.p.v) : o()
                    }
                    return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", h)), p
                }
                return t
            }(),
            ShapePathInterface = function() {
                return function(e, r, i) {
                    var s = r.sh;

                    function a(h) {
                        return h === "Shape" || h === "shape" || h === "Path" || h === "path" || h === "ADBE Vector Shape" || h === 2 ? a.path : null
                    }
                    var n = propertyGroupFactory(a, i);
                    return s.setGroupProperty(PropertyInterface("Path", n)), Object.defineProperties(a, {
                        path: {
                            get: function() {
                                return s.k && s.getValue(), s
                            }
                        },
                        shape: {
                            get: function() {
                                return s.k && s.getValue(), s
                            }
                        },
                        _name: {
                            value: e.nm
                        },
                        ix: {
                            value: e.ix
                        },
                        propertyIndex: {
                            value: e.ix
                        },
                        mn: {
                            value: e.mn
                        },
                        propertyGroup: {
                            value: i
                        }
                    }), a
                }
            }(),
            ShapeExpressionInterface = function() {
                function t(y, v, C) {
                    var c = [],
                        m, f = y ? y.length : 0;
                    for (m = 0; m < f; m += 1) y[m].ty === "gr" ? c.push(r(y[m], v[m], C)) : y[m].ty === "fl" ? c.push(i(y[m], v[m], C)) : y[m].ty === "st" ? c.push(n(y[m], v[m], C)) : y[m].ty === "tm" ? c.push(h(y[m], v[m], C)) : y[m].ty === "tr" || (y[m].ty === "el" ? c.push(p(y[m], v[m], C)) : y[m].ty === "sr" ? c.push(d(y[m], v[m], C)) : y[m].ty === "sh" ? c.push(ShapePathInterface(y[m], v[m], C)) : y[m].ty === "rc" ? c.push(S(y[m], v[m], C)) : y[m].ty === "rd" ? c.push(u(y[m], v[m], C)) : y[m].ty === "rp" ? c.push(g(y[m], v[m], C)) : y[m].ty === "gf" ? c.push(s(y[m], v[m], C)) : c.push(a(y[m], v[m])));
                    return c
                }

                function e(y, v, C) {
                    var c, m = function(b) {
                        for (var P = 0, x = c.length; P < x;) {
                            if (c[P]._name === b || c[P].mn === b || c[P].propertyIndex === b || c[P].ix === b || c[P].ind === b) return c[P];
                            P += 1
                        }
                        return typeof b == "number" ? c[b - 1] : null
                    };
                    m.propertyGroup = propertyGroupFactory(m, C), c = t(y.it, v.it, m.propertyGroup), m.numProperties = c.length;
                    var f = o(y.it[y.it.length - 1], v.it[v.it.length - 1], m.propertyGroup);
                    return m.transform = f, m.propertyIndex = y.cix, m._name = y.nm, m
                }

                function r(y, v, C) {
                    var c = function(b) {
                        switch (b) {
                            case "ADBE Vectors Group":
                            case "Contents":
                            case 2:
                                return c.content;
                            default:
                                return c.transform
                        }
                    };
                    c.propertyGroup = propertyGroupFactory(c, C);
                    var m = e(y, v, c.propertyGroup),
                        f = o(y.it[y.it.length - 1], v.it[v.it.length - 1], c.propertyGroup);
                    return c.content = m, c.transform = f, Object.defineProperty(c, "_name", {
                        get: function() {
                            return y.nm
                        }
                    }), c.numProperties = y.np, c.propertyIndex = y.ix, c.nm = y.nm, c.mn = y.mn, c
                }

                function i(y, v, C) {
                    function c(m) {
                        return m === "Color" || m === "color" ? c.color : m === "Opacity" || m === "opacity" ? c.opacity : null
                    }
                    return Object.defineProperties(c, {
                        color: {
                            get: ExpressionPropertyInterface(v.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(v.o)
                        },
                        _name: {
                            value: y.nm
                        },
                        mn: {
                            value: y.mn
                        }
                    }), v.c.setGroupProperty(PropertyInterface("Color", C)), v.o.setGroupProperty(PropertyInterface("Opacity", C)), c
                }

                function s(y, v, C) {
                    function c(m) {
                        return m === "Start Point" || m === "start point" ? c.startPoint : m === "End Point" || m === "end point" ? c.endPoint : m === "Opacity" || m === "opacity" ? c.opacity : null
                    }
                    return Object.defineProperties(c, {
                        startPoint: {
                            get: ExpressionPropertyInterface(v.s)
                        },
                        endPoint: {
                            get: ExpressionPropertyInterface(v.e)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(v.o)
                        },
                        type: {
                            get: function() {
                                return "a"
                            }
                        },
                        _name: {
                            value: y.nm
                        },
                        mn: {
                            value: y.mn
                        }
                    }), v.s.setGroupProperty(PropertyInterface("Start Point", C)), v.e.setGroupProperty(PropertyInterface("End Point", C)), v.o.setGroupProperty(PropertyInterface("Opacity", C)), c
                }

                function a() {
                    function y() {
                        return null
                    }
                    return y
                }

                function n(y, v, C) {
                    var c = propertyGroupFactory(x, C),
                        m = propertyGroupFactory(P, c);

                    function f(T) {
                        Object.defineProperty(P, y.d[T].nm, {
                            get: ExpressionPropertyInterface(v.d.dataProps[T].p)
                        })
                    }
                    var l, b = y.d ? y.d.length : 0,
                        P = {};
                    for (l = 0; l < b; l += 1) f(l), v.d.dataProps[l].p.setGroupProperty(m);

                    function x(T) {
                        return T === "Color" || T === "color" ? x.color : T === "Opacity" || T === "opacity" ? x.opacity : T === "Stroke Width" || T === "stroke width" ? x.strokeWidth : null
                    }
                    return Object.defineProperties(x, {
                        color: {
                            get: ExpressionPropertyInterface(v.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(v.o)
                        },
                        strokeWidth: {
                            get: ExpressionPropertyInterface(v.w)
                        },
                        dash: {
                            get: function() {
                                return P
                            }
                        },
                        _name: {
                            value: y.nm
                        },
                        mn: {
                            value: y.mn
                        }
                    }), v.c.setGroupProperty(PropertyInterface("Color", c)), v.o.setGroupProperty(PropertyInterface("Opacity", c)), v.w.setGroupProperty(PropertyInterface("Stroke Width", c)), x
                }

                function h(y, v, C) {
                    function c(f) {
                        return f === y.e.ix || f === "End" || f === "end" ? c.end : f === y.s.ix ? c.start : f === y.o.ix ? c.offset : null
                    }
                    var m = propertyGroupFactory(c, C);
                    return c.propertyIndex = y.ix, v.s.setGroupProperty(PropertyInterface("Start", m)), v.e.setGroupProperty(PropertyInterface("End", m)), v.o.setGroupProperty(PropertyInterface("Offset", m)), c.propertyIndex = y.ix, c.propertyGroup = C, Object.defineProperties(c, {
                        start: {
                            get: ExpressionPropertyInterface(v.s)
                        },
                        end: {
                            get: ExpressionPropertyInterface(v.e)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(v.o)
                        },
                        _name: {
                            value: y.nm
                        }
                    }), c.mn = y.mn, c
                }

                function o(y, v, C) {
                    function c(f) {
                        return y.a.ix === f || f === "Anchor Point" ? c.anchorPoint : y.o.ix === f || f === "Opacity" ? c.opacity : y.p.ix === f || f === "Position" ? c.position : y.r.ix === f || f === "Rotation" || f === "ADBE Vector Rotation" ? c.rotation : y.s.ix === f || f === "Scale" ? c.scale : y.sk && y.sk.ix === f || f === "Skew" ? c.skew : y.sa && y.sa.ix === f || f === "Skew Axis" ? c.skewAxis : null
                    }
                    var m = propertyGroupFactory(c, C);
                    return v.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", m)), v.transform.mProps.p.setGroupProperty(PropertyInterface("Position", m)), v.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", m)), v.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", m)), v.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", m)), v.transform.mProps.sk && (v.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", m)), v.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", m))), v.transform.op.setGroupProperty(PropertyInterface("Opacity", m)), Object.defineProperties(c, {
                        opacity: {
                            get: ExpressionPropertyInterface(v.transform.mProps.o)
                        },
                        position: {
                            get: ExpressionPropertyInterface(v.transform.mProps.p)
                        },
                        anchorPoint: {
                            get: ExpressionPropertyInterface(v.transform.mProps.a)
                        },
                        scale: {
                            get: ExpressionPropertyInterface(v.transform.mProps.s)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(v.transform.mProps.r)
                        },
                        skew: {
                            get: ExpressionPropertyInterface(v.transform.mProps.sk)
                        },
                        skewAxis: {
                            get: ExpressionPropertyInterface(v.transform.mProps.sa)
                        },
                        _name: {
                            value: y.nm
                        }
                    }), c.ty = "tr", c.mn = y.mn, c.propertyGroup = C, c
                }

                function p(y, v, C) {
                    function c(l) {
                        return y.p.ix === l ? c.position : y.s.ix === l ? c.size : null
                    }
                    var m = propertyGroupFactory(c, C);
                    c.propertyIndex = y.ix;
                    var f = v.sh.ty === "tm" ? v.sh.prop : v.sh;
                    return f.s.setGroupProperty(PropertyInterface("Size", m)), f.p.setGroupProperty(PropertyInterface("Position", m)), Object.defineProperties(c, {
                        size: {
                            get: ExpressionPropertyInterface(f.s)
                        },
                        position: {
                            get: ExpressionPropertyInterface(f.p)
                        },
                        _name: {
                            value: y.nm
                        }
                    }), c.mn = y.mn, c
                }

                function d(y, v, C) {
                    function c(l) {
                        return y.p.ix === l ? c.position : y.r.ix === l ? c.rotation : y.pt.ix === l ? c.points : y.or.ix === l || l === "ADBE Vector Star Outer Radius" ? c.outerRadius : y.os.ix === l ? c.outerRoundness : y.ir && (y.ir.ix === l || l === "ADBE Vector Star Inner Radius") ? c.innerRadius : y.is && y.is.ix === l ? c.innerRoundness : null
                    }
                    var m = propertyGroupFactory(c, C),
                        f = v.sh.ty === "tm" ? v.sh.prop : v.sh;
                    return c.propertyIndex = y.ix, f.or.setGroupProperty(PropertyInterface("Outer Radius", m)), f.os.setGroupProperty(PropertyInterface("Outer Roundness", m)), f.pt.setGroupProperty(PropertyInterface("Points", m)), f.p.setGroupProperty(PropertyInterface("Position", m)), f.r.setGroupProperty(PropertyInterface("Rotation", m)), y.ir && (f.ir.setGroupProperty(PropertyInterface("Inner Radius", m)), f.is.setGroupProperty(PropertyInterface("Inner Roundness", m))), Object.defineProperties(c, {
                        position: {
                            get: ExpressionPropertyInterface(f.p)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(f.r)
                        },
                        points: {
                            get: ExpressionPropertyInterface(f.pt)
                        },
                        outerRadius: {
                            get: ExpressionPropertyInterface(f.or)
                        },
                        outerRoundness: {
                            get: ExpressionPropertyInterface(f.os)
                        },
                        innerRadius: {
                            get: ExpressionPropertyInterface(f.ir)
                        },
                        innerRoundness: {
                            get: ExpressionPropertyInterface(f.is)
                        },
                        _name: {
                            value: y.nm
                        }
                    }), c.mn = y.mn, c
                }

                function S(y, v, C) {
                    function c(l) {
                        return y.p.ix === l ? c.position : y.r.ix === l ? c.roundness : y.s.ix === l || l === "Size" || l === "ADBE Vector Rect Size" ? c.size : null
                    }
                    var m = propertyGroupFactory(c, C),
                        f = v.sh.ty === "tm" ? v.sh.prop : v.sh;
                    return c.propertyIndex = y.ix, f.p.setGroupProperty(PropertyInterface("Position", m)), f.s.setGroupProperty(PropertyInterface("Size", m)), f.r.setGroupProperty(PropertyInterface("Rotation", m)), Object.defineProperties(c, {
                        position: {
                            get: ExpressionPropertyInterface(f.p)
                        },
                        roundness: {
                            get: ExpressionPropertyInterface(f.r)
                        },
                        size: {
                            get: ExpressionPropertyInterface(f.s)
                        },
                        _name: {
                            value: y.nm
                        }
                    }), c.mn = y.mn, c
                }

                function u(y, v, C) {
                    function c(l) {
                        return y.r.ix === l || l === "Round Corners 1" ? c.radius : null
                    }
                    var m = propertyGroupFactory(c, C),
                        f = v;
                    return c.propertyIndex = y.ix, f.rd.setGroupProperty(PropertyInterface("Radius", m)), Object.defineProperties(c, {
                        radius: {
                            get: ExpressionPropertyInterface(f.rd)
                        },
                        _name: {
                            value: y.nm
                        }
                    }), c.mn = y.mn, c
                }

                function g(y, v, C) {
                    function c(l) {
                        return y.c.ix === l || l === "Copies" ? c.copies : y.o.ix === l || l === "Offset" ? c.offset : null
                    }
                    var m = propertyGroupFactory(c, C),
                        f = v;
                    return c.propertyIndex = y.ix, f.c.setGroupProperty(PropertyInterface("Copies", m)), f.o.setGroupProperty(PropertyInterface("Offset", m)), Object.defineProperties(c, {
                        copies: {
                            get: ExpressionPropertyInterface(f.c)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(f.o)
                        },
                        _name: {
                            value: y.nm
                        }
                    }), c.mn = y.mn, c
                }
                return function(y, v, C) {
                    var c;

                    function m(l) {
                        if (typeof l == "number") return l = l === void 0 ? 1 : l, l === 0 ? C : c[l - 1];
                        for (var b = 0, P = c.length; b < P;) {
                            if (c[b]._name === l) return c[b];
                            b += 1
                        }
                        return null
                    }

                    function f() {
                        return C
                    }
                    return m.propertyGroup = propertyGroupFactory(m, f), c = t(y, v, m.propertyGroup), m.numProperties = c.length, m._name = "Contents", m
                }
            }(),
            TextExpressionInterface = function() {
                return function(t) {
                    var e;

                    function r(i) {
                        switch (i) {
                            case "ADBE Text Document":
                                return r.sourceText;
                            default:
                                return null
                        }
                    }
                    return Object.defineProperty(r, "sourceText", {
                        get: function() {
                            t.textProperty.getValue();
                            var s = t.textProperty.currentData.t;
                            return (!e || s !== e.value) && (e = new String(s), e.value = s || new String(s), Object.defineProperty(e, "style", {
                                get: function() {
                                    return {
                                        fillColor: t.textProperty.currentData.fc
                                    }
                                }
                            })), e
                        }
                    }), r
                }
            }();

        function _typeof$2(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$2 = function(r) {
                return typeof r
            } : _typeof$2 = function(r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }, _typeof$2(t)
        }
        var FootageInterface = function() {
                var t = function(i) {
                        var s = "",
                            a = i.getFootageData();

                        function n() {
                            return s = "", a = i.getFootageData(), h
                        }

                        function h(o) {
                            if (a[o]) return s = o, a = a[o], _typeof$2(a) === "object" ? h : a;
                            var p = o.indexOf(s);
                            if (p !== -1) {
                                var d = parseInt(o.substr(p + s.length), 10);
                                return a = a[d], _typeof$2(a) === "object" ? h : a
                            }
                            return ""
                        }
                        return n
                    },
                    e = function(i) {
                        function s(a) {
                            return a === "Outline" ? s.outlineInterface() : null
                        }
                        return s._name = "Outline", s.outlineInterface = t(i), s
                    };
                return function(r) {
                    function i(s) {
                        return s === "Data" ? i.dataInterface : null
                    }
                    return i._name = "Data", i.dataInterface = e(r), i
                }
            }(),
            interfaces = {
                layer: LayerExpressionInterface,
                effects: EffectsExpressionInterface,
                comp: CompExpressionInterface,
                shape: ShapeExpressionInterface,
                text: TextExpressionInterface,
                footage: FootageInterface
            };

        function getInterface(t) {
            return interfaces[t] || null
        }

        function _typeof$1(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function(r) {
                return typeof r
            } : _typeof$1 = function(r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }, _typeof$1(t)
        }

        function seedRandom(t, e) {
            var r = this,
                i = 256,
                s = 6,
                a = 52,
                n = "random",
                h = e.pow(i, s),
                o = e.pow(2, a),
                p = o * 2,
                d = i - 1,
                S;

            function u(f, l, b) {
                var P = [];
                l = l === !0 ? {
                    entropy: !0
                } : l || {};
                var x = C(v(l.entropy ? [f, m(t)] : f === null ? c() : f, 3), P),
                    T = new g(P),
                    F = function() {
                        for (var L = T.g(s), I = h, B = 0; L < o;) L = (L + B) * i, I *= i, B = T.g(1);
                        for (; L >= p;) L /= 2, I /= 2, B >>>= 1;
                        return (L + B) / I
                    };
                return F.int32 = function() {
                    return T.g(4) | 0
                }, F.quick = function() {
                    return T.g(4) / 4294967296
                }, F.double = F, C(m(T.S), t), (l.pass || b || function(R, L, I, B) {
                    return B && (B.S && y(B, T), R.state = function() {
                        return y(T, {})
                    }), I ? (e[n] = R, L) : R
                })(F, x, "global" in l ? l.global : this == e, l.state)
            }
            e["seed" + n] = u;

            function g(f) {
                var l, b = f.length,
                    P = this,
                    x = 0,
                    T = P.i = P.j = 0,
                    F = P.S = [];
                for (b || (f = [b++]); x < i;) F[x] = x++;
                for (x = 0; x < i; x++) F[x] = F[T = d & T + f[x % b] + (l = F[x])], F[T] = l;
                P.g = function(R) {
                    for (var L, I = 0, B = P.i, D = P.j, w = P.S; R--;) L = w[B = d & B + 1], I = I * i + w[d & (w[B] = w[D = d & D + L]) + (w[D] = L)];
                    return P.i = B, P.j = D, I
                }
            }

            function y(f, l) {
                return l.i = f.i, l.j = f.j, l.S = f.S.slice(), l
            }

            function v(f, l) {
                var b = [],
                    P = _typeof$1(f),
                    x;
                if (l && P == "object")
                    for (x in f) try {
                        b.push(v(f[x], l - 1))
                    } catch {}
                return b.length ? b : P == "string" ? f : f + "\0"
            }

            function C(f, l) {
                for (var b = f + "", P, x = 0; x < b.length;) l[d & x] = d & (P ^= l[d & x] * 19) + b.charCodeAt(x++);
                return m(l)
            }

            function c() {
                try {
                    var f = new Uint8Array(i);
                    return (r.crypto || r.msCrypto).getRandomValues(f), m(f)
                } catch {
                    var l = r.navigator,
                        b = l && l.plugins;
                    return [+new Date, r, b, r.screen, m(t)]
                }
            }

            function m(f) {
                return String.fromCharCode.apply(0, f)
            }
            C(e.random(), t)
        }

        function initialize$2(t) {
            seedRandom([], t)
        }
        var propTypes = {
            SHAPE: "shape"
        };

        function _typeof(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(r) {
                return typeof r
            } : _typeof = function(r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }, _typeof(t)
        }
        var ExpressionManager = function() {
                var ob = {},
                    Math = BMMath,
                    window = null,
                    document = null,
                    XMLHttpRequest = null,
                    fetch = null,
                    frames = null;
                initialize$2(BMMath);

                function $bm_isInstanceOfArray(t) {
                    return t.constructor === Array || t.constructor === Float32Array
                }

                function isNumerable(t, e) {
                    return t === "number" || t === "boolean" || t === "string" || e instanceof Number
                }

                function $bm_neg(t) {
                    var e = _typeof(t);
                    if (e === "number" || e === "boolean" || t instanceof Number) return -t;
                    if ($bm_isInstanceOfArray(t)) {
                        var r, i = t.length,
                            s = [];
                        for (r = 0; r < i; r += 1) s[r] = -t[r];
                        return s
                    }
                    return t.propType ? t.v : -t
                }
                var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                    easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                    easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                function sum(t, e) {
                    var r = _typeof(t),
                        i = _typeof(e);
                    if (r === "string" || i === "string" || isNumerable(r, t) && isNumerable(i, e)) return t + e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return t = t.slice(0), t[0] += e, t;
                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t + e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var s = 0, a = t.length, n = e.length, h = []; s < a || s < n;)(typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? h[s] = t[s] + e[s] : h[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
                        return h
                    }
                    return 0
                }
                var add = sum;

                function sub(t, e) {
                    var r = _typeof(t),
                        i = _typeof(e);
                    if (isNumerable(r, t) && isNumerable(i, e)) return r === "string" && (t = parseInt(t, 10)), i === "string" && (e = parseInt(e, 10)), t - e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return t = t.slice(0), t[0] -= e, t;
                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t - e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var s = 0, a = t.length, n = e.length, h = []; s < a || s < n;)(typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? h[s] = t[s] - e[s] : h[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
                        return h
                    }
                    return 0
                }

                function mul(t, e) {
                    var r = _typeof(t),
                        i = _typeof(e),
                        s;
                    if (isNumerable(r, t) && isNumerable(i, e)) return t * e;
                    var a, n;
                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
                        for (n = t.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1) s[a] = t[a] * e;
                        return s
                    }
                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
                        for (n = e.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1) s[a] = t * e[a];
                        return s
                    }
                    return 0
                }

                function div(t, e) {
                    var r = _typeof(t),
                        i = _typeof(e),
                        s;
                    if (isNumerable(r, t) && isNumerable(i, e)) return t / e;
                    var a, n;
                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
                        for (n = t.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1) s[a] = t[a] / e;
                        return s
                    }
                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
                        for (n = e.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1) s[a] = t / e[a];
                        return s
                    }
                    return 0
                }

                function mod(t, e) {
                    return typeof t == "string" && (t = parseInt(t, 10)), typeof e == "string" && (e = parseInt(e, 10)), t % e
                }
                var $bm_sum = sum,
                    $bm_sub = sub,
                    $bm_mul = mul,
                    $bm_div = div,
                    $bm_mod = mod;

                function clamp(t, e, r) {
                    if (e > r) {
                        var i = r;
                        r = e, e = i
                    }
                    return Math.min(Math.max(t, e), r)
                }

                function radiansToDegrees(t) {
                    return t / degToRads
                }
                var radians_to_degrees = radiansToDegrees;

                function degreesToRadians(t) {
                    return t * degToRads
                }
                var degrees_to_radians = radiansToDegrees,
                    helperLengthArray = [0, 0, 0, 0, 0, 0];

                function length(t, e) {
                    if (typeof t == "number" || t instanceof Number) return e = e || 0, Math.abs(t - e);
                    e || (e = helperLengthArray);
                    var r, i = Math.min(t.length, e.length),
                        s = 0;
                    for (r = 0; r < i; r += 1) s += Math.pow(e[r] - t[r], 2);
                    return Math.sqrt(s)
                }

                function normalize(t) {
                    return div(t, length(t))
                }

                function rgbToHsl(t) {
                    var e = t[0],
                        r = t[1],
                        i = t[2],
                        s = Math.max(e, r, i),
                        a = Math.min(e, r, i),
                        n, h, o = (s + a) / 2;
                    if (s === a) n = 0, h = 0;
                    else {
                        var p = s - a;
                        switch (h = o > .5 ? p / (2 - s - a) : p / (s + a), s) {
                            case e:
                                n = (r - i) / p + (r < i ? 6 : 0);
                                break;
                            case r:
                                n = (i - e) / p + 2;
                                break;
                            case i:
                                n = (e - r) / p + 4;
                                break
                        }
                        n /= 6
                    }
                    return [n, h, o, t[3]]
                }

                function hue2rgb(t, e, r) {
                    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                }

                function hslToRgb(t) {
                    var e = t[0],
                        r = t[1],
                        i = t[2],
                        s, a, n;
                    if (r === 0) s = i, n = i, a = i;
                    else {
                        var h = i < .5 ? i * (1 + r) : i + r - i * r,
                            o = 2 * i - h;
                        s = hue2rgb(o, h, e + 1 / 3), a = hue2rgb(o, h, e), n = hue2rgb(o, h, e - 1 / 3)
                    }
                    return [s, a, n, t[3]]
                }

                function linear(t, e, r, i, s) {
                    if ((i === void 0 || s === void 0) && (i = e, s = r, e = 0, r = 1), r < e) {
                        var a = r;
                        r = e, e = a
                    }
                    if (t <= e) return i;
                    if (t >= r) return s;
                    var n = r === e ? 0 : (t - e) / (r - e);
                    if (!i.length) return i + (s - i) * n;
                    var h, o = i.length,
                        p = createTypedArray("float32", o);
                    for (h = 0; h < o; h += 1) p[h] = i[h] + (s[h] - i[h]) * n;
                    return p
                }

                function random(t, e) {
                    if (e === void 0 && (t === void 0 ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                        var r, i = e.length;
                        t || (t = createTypedArray("float32", i));
                        var s = createTypedArray("float32", i),
                            a = BMMath.random();
                        for (r = 0; r < i; r += 1) s[r] = t[r] + a * (e[r] - t[r]);
                        return s
                    }
                    t === void 0 && (t = 0);
                    var n = BMMath.random();
                    return t + n * (e - t)
                }

                function createPath(t, e, r, i) {
                    var s, a = t.length,
                        n = shapePool.newElement();
                    n.setPathData(!!i, a);
                    var h = [0, 0],
                        o, p;
                    for (s = 0; s < a; s += 1) o = e && e[s] ? e[s] : h, p = r && r[s] ? r[s] : h, n.setTripleAt(t[s][0], t[s][1], p[0] + t[s][0], p[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
                    return n
                }

                function initiateExpression(elem, data, property) {
                    function noOp(t) {
                        return t
                    }
                    if (!elem.globalData.renderConfig.runExpressions) return noOp;
                    var val = data.x,
                        needsVelocity = /velocity(?![\w\d])/.test(val),
                        _needsRandom = val.indexOf("random") !== -1,
                        elemType = elem.data.ty,
                        transform, $bm_transform, content, effect, thisProperty = property;
                    thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                        get: function() {
                            return thisProperty.v
                        }
                    }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                        width = elem.data.sw ? elem.data.sw : 0,
                        height = elem.data.sh ? elem.data.sh : 0,
                        name = elem.data.nm,
                        loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                        numKeys = property.kf ? data.k.length : 0,
                        active = !this.data || this.data.hd !== !0,
                        wiggle = function t(e, r) {
                            var i, s, a = this.pv.length ? this.pv.length : 1,
                                n = createTypedArray("float32", a);
                            e = 5;
                            var h = Math.floor(time * e);
                            for (i = 0, s = 0; i < h;) {
                                for (s = 0; s < a; s += 1) n[s] += -r + r * 2 * BMMath.random();
                                i += 1
                            }
                            var o = time * e,
                                p = o - Math.floor(o),
                                d = createTypedArray("float32", a);
                            if (a > 1) {
                                for (s = 0; s < a; s += 1) d[s] = this.pv[s] + n[s] + (-r + r * 2 * BMMath.random()) * p;
                                return d
                            }
                            return this.pv + n[0] + (-r + r * 2 * BMMath.random()) * p
                        }.bind(this);
                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));

                    function loopInDuration(t, e) {
                        return loopIn(t, e, !0)
                    }

                    function loopOutDuration(t, e) {
                        return loopOut(t, e, !0)
                    }
                    this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

                    function lookAt(t, e) {
                        var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                            i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads,
                            s = -Math.atan2(r[1], r[2]) / degToRads;
                        return [s, i, 0]
                    }

                    function easeOut(t, e, r, i, s) {
                        return applyEase(easeOutBez, t, e, r, i, s)
                    }

                    function easeIn(t, e, r, i, s) {
                        return applyEase(easeInBez, t, e, r, i, s)
                    }

                    function ease(t, e, r, i, s) {
                        return applyEase(easeInOutBez, t, e, r, i, s)
                    }

                    function applyEase(t, e, r, i, s, a) {
                        s === void 0 ? (s = r, a = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
                        var n = t(e);
                        if ($bm_isInstanceOfArray(s)) {
                            var h, o = s.length,
                                p = createTypedArray("float32", o);
                            for (h = 0; h < o; h += 1) p[h] = (a[h] - s[h]) * n + s[h];
                            return p
                        }
                        return (a - s) * n + s
                    }

                    function nearestKey(t) {
                        var e, r = data.k.length,
                            i, s;
                        if (!data.k.length || typeof data.k[0] == "number") i = 0, s = 0;
                        else if (i = -1, t *= elem.comp.globalData.frameRate, t < data.k[0].t) i = 1, s = data.k[0].t;
                        else {
                            for (e = 0; e < r - 1; e += 1)
                                if (t === data.k[e].t) {
                                    i = e + 1, s = data.k[e].t;
                                    break
                                } else if (t > data.k[e].t && t < data.k[e + 1].t) {
                                t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, s = data.k[e + 1].t) : (i = e + 1, s = data.k[e].t);
                                break
                            }
                            i === -1 && (i = e + 1, s = data.k[e].t)
                        }
                        var a = {};
                        return a.index = i, a.time = s / elem.comp.globalData.frameRate, a
                    }

                    function key(t) {
                        var e, r, i;
                        if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + t);
                        t -= 1, e = {
                            time: data.k[t].t / elem.comp.globalData.frameRate,
                            value: []
                        };
                        var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                        for (i = s.length, r = 0; r < i; r += 1) e[r] = s[r], e.value[r] = s[r];
                        return e
                    }

                    function framesToTime(t, e) {
                        return e || (e = elem.comp.globalData.frameRate), t / e
                    }

                    function timeToFrames(t, e) {
                        return !t && t !== 0 && (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                    }

                    function seedRandom(t) {
                        BMMath.seedrandom(randSeed + t)
                    }

                    function sourceRectAtTime() {
                        return elem.sourceRectAtTime()
                    }

                    function substring(t, e) {
                        return typeof value == "string" ? e === void 0 ? value.substring(t) : value.substring(t, e) : ""
                    }

                    function substr(t, e) {
                        return typeof value == "string" ? e === void 0 ? value.substr(t) : value.substr(t, e) : ""
                    }

                    function posterizeTime(t) {
                        time = t === 0 ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                    }
                    var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind,
                        hasParent = !!(elem.hierarchy && elem.hierarchy.length),
                        parent, randSeed = Math.floor(Math.random() * 1e6),
                        globalData = elem.globalData;

                    function executeExpression(t) {
                        return value = t, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !!(elem.hierarchy && elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt)
                    }
                    return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                }
                return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath], ob
            }(),
            expressionHelpers = function() {
                function t(n, h, o) {
                    h.x && (o.k = !0, o.x = !0, o.initiateExpression = ExpressionManager.initiateExpression, o.effectsSequence.push(o.initiateExpression(n, h, o).bind(o)))
                }

                function e(n) {
                    return n *= this.elem.globalData.frameRate, n -= this.offsetTime, n !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < n ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(n, this._cachingAtTime), this._cachingAtTime.lastFrame = n), this._cachingAtTime.value
                }

                function r(n) {
                    var h = -.01,
                        o = this.getValueAtTime(n),
                        p = this.getValueAtTime(n + h),
                        d = 0;
                    if (o.length) {
                        var S;
                        for (S = 0; S < o.length; S += 1) d += Math.pow(p[S] - o[S], 2);
                        d = Math.sqrt(d) * 100
                    } else d = 0;
                    return d
                }

                function i(n) {
                    if (this.vel !== void 0) return this.vel;
                    var h = -.001,
                        o = this.getValueAtTime(n),
                        p = this.getValueAtTime(n + h),
                        d;
                    if (o.length) {
                        d = createTypedArray("float32", o.length);
                        var S;
                        for (S = 0; S < o.length; S += 1) d[S] = (p[S] - o[S]) / h
                    } else d = (p - o) / h;
                    return d
                }

                function s() {
                    return this.pv
                }

                function a(n) {
                    this.propertyGroup = n
                }
                return {
                    searchExpressions: t,
                    getSpeedAtTime: r,
                    getVelocityAtTime: i,
                    getValueAtTime: e,
                    getStaticValueAtTime: s,
                    setGroupProperty: a
                }
            }();

        function addPropertyDecorator() {
            function t(u, g, y) {
                if (!this.k || !this.keyframes) return this.pv;
                u = u ? u.toLowerCase() : "";
                var v = this.comp.renderedFrame,
                    C = this.keyframes,
                    c = C[C.length - 1].t;
                if (v <= c) return this.pv;
                var m, f;
                y ? (g ? m = Math.abs(c - this.elem.comp.globalData.frameRate * g) : m = Math.max(0, c - this.elem.data.ip), f = c - m) : ((!g || g > C.length - 1) && (g = C.length - 1), f = C[C.length - 1 - g].t, m = c - f);
                var l, b, P;
                if (u === "pingpong") {
                    var x = Math.floor((v - f) / m);
                    if (x % 2 !== 0) return this.getValueAtTime((m - (v - f) % m + f) / this.comp.globalData.frameRate, 0)
                } else if (u === "offset") {
                    var T = this.getValueAtTime(f / this.comp.globalData.frameRate, 0),
                        F = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                        R = this.getValueAtTime(((v - f) % m + f) / this.comp.globalData.frameRate, 0),
                        L = Math.floor((v - f) / m);
                    if (this.pv.length) {
                        for (P = new Array(T.length), b = P.length, l = 0; l < b; l += 1) P[l] = (F[l] - T[l]) * L + R[l];
                        return P
                    }
                    return (F - T) * L + R
                } else if (u === "continue") {
                    var I = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                        B = this.getValueAtTime((c - .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (P = new Array(I.length), b = P.length, l = 0; l < b; l += 1) P[l] = I[l] + (I[l] - B[l]) * ((v - c) / this.comp.globalData.frameRate) / 5e-4;
                        return P
                    }
                    return I + (I - B) * ((v - c) / .001)
                }
                return this.getValueAtTime(((v - f) % m + f) / this.comp.globalData.frameRate, 0)
            }

            function e(u, g, y) {
                if (!this.k) return this.pv;
                u = u ? u.toLowerCase() : "";
                var v = this.comp.renderedFrame,
                    C = this.keyframes,
                    c = C[0].t;
                if (v >= c) return this.pv;
                var m, f;
                y ? (g ? m = Math.abs(this.elem.comp.globalData.frameRate * g) : m = Math.max(0, this.elem.data.op - c), f = c + m) : ((!g || g > C.length - 1) && (g = C.length - 1), f = C[g].t, m = f - c);
                var l, b, P;
                if (u === "pingpong") {
                    var x = Math.floor((c - v) / m);
                    if (x % 2 === 0) return this.getValueAtTime(((c - v) % m + c) / this.comp.globalData.frameRate, 0)
                } else if (u === "offset") {
                    var T = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                        F = this.getValueAtTime(f / this.comp.globalData.frameRate, 0),
                        R = this.getValueAtTime((m - (c - v) % m + c) / this.comp.globalData.frameRate, 0),
                        L = Math.floor((c - v) / m) + 1;
                    if (this.pv.length) {
                        for (P = new Array(T.length), b = P.length, l = 0; l < b; l += 1) P[l] = R[l] - (F[l] - T[l]) * L;
                        return P
                    }
                    return R - (F - T) * L
                } else if (u === "continue") {
                    var I = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                        B = this.getValueAtTime((c + .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (P = new Array(I.length), b = P.length, l = 0; l < b; l += 1) P[l] = I[l] + (I[l] - B[l]) * (c - v) / .001;
                        return P
                    }
                    return I + (I - B) * (c - v) / .001
                }
                return this.getValueAtTime((m - ((c - v) % m + c)) / this.comp.globalData.frameRate, 0)
            }

            function r(u, g) {
                if (!this.k) return this.pv;
                if (u = (u || .4) * .5, g = Math.floor(g || 5), g <= 1) return this.pv;
                var y = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    v = y - u,
                    C = y + u,
                    c = g > 1 ? (C - v) / (g - 1) : 1,
                    m = 0,
                    f = 0,
                    l;
                this.pv.length ? l = createTypedArray("float32", this.pv.length) : l = 0;
                for (var b; m < g;) {
                    if (b = this.getValueAtTime(v + m * c), this.pv.length)
                        for (f = 0; f < this.pv.length; f += 1) l[f] += b[f];
                    else l += b;
                    m += 1
                }
                if (this.pv.length)
                    for (f = 0; f < this.pv.length; f += 1) l[f] /= g;
                else l /= g;
                return l
            }

            function i(u) {
                this._transformCachingAtTime || (this._transformCachingAtTime = {
                    v: new Matrix
                });
                var g = this._transformCachingAtTime.v;
                if (g.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                    var y = this.a.getValueAtTime(u);
                    g.translate(-y[0] * this.a.mult, -y[1] * this.a.mult, y[2] * this.a.mult)
                }
                if (this.appliedTransformations < 2) {
                    var v = this.s.getValueAtTime(u);
                    g.scale(v[0] * this.s.mult, v[1] * this.s.mult, v[2] * this.s.mult)
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var C = this.sk.getValueAtTime(u),
                        c = this.sa.getValueAtTime(u);
                    g.skewFromAxis(-C * this.sk.mult, c * this.sa.mult)
                }
                if (this.r && this.appliedTransformations < 4) {
                    var m = this.r.getValueAtTime(u);
                    g.rotate(-m * this.r.mult)
                } else if (!this.r && this.appliedTransformations < 4) {
                    var f = this.rz.getValueAtTime(u),
                        l = this.ry.getValueAtTime(u),
                        b = this.rx.getValueAtTime(u),
                        P = this.or.getValueAtTime(u);
                    g.rotateZ(-f * this.rz.mult).rotateY(l * this.ry.mult).rotateX(b * this.rx.mult).rotateZ(-P[2] * this.or.mult).rotateY(P[1] * this.or.mult).rotateX(P[0] * this.or.mult)
                }
                if (this.data.p && this.data.p.s) {
                    var x = this.px.getValueAtTime(u),
                        T = this.py.getValueAtTime(u);
                    if (this.data.p.z) {
                        var F = this.pz.getValueAtTime(u);
                        g.translate(x * this.px.mult, T * this.py.mult, -F * this.pz.mult)
                    } else g.translate(x * this.px.mult, T * this.py.mult, 0)
                } else {
                    var R = this.p.getValueAtTime(u);
                    g.translate(R[0] * this.p.mult, R[1] * this.p.mult, -R[2] * this.p.mult)
                }
                return g
            }

            function s() {
                return this.v.clone(new Matrix)
            }
            var a = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(u, g, y) {
                var v = a(u, g, y);
                return v.dynamicProperties.length ? v.getValueAtTime = i.bind(v) : v.getValueAtTime = s.bind(v), v.setGroupProperty = expressionHelpers.setGroupProperty, v
            };
            var n = PropertyFactory.getProp;
            PropertyFactory.getProp = function(u, g, y, v, C) {
                var c = n(u, g, y, v, C);
                c.kf ? c.getValueAtTime = expressionHelpers.getValueAtTime.bind(c) : c.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(c), c.setGroupProperty = expressionHelpers.setGroupProperty, c.loopOut = t, c.loopIn = e, c.smooth = r, c.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(c), c.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(c), c.numKeys = g.a === 1 ? g.k.length : 0, c.propertyIndex = g.ix;
                var m = 0;
                return y !== 0 && (m = createTypedArray("float32", g.a === 1 ? g.k[0].s.length : g.k.length)), c._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: m
                }, expressionHelpers.searchExpressions(u, g, c), c.k && C.addDynamicProperty(c), c
            };

            function h(u) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), u *= this.elem.globalData.frameRate, u -= this.offsetTime, u !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < u ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = u, this.interpolateShape(u, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
            }
            var o = ShapePropertyFactory.getConstructorFunction(),
                p = ShapePropertyFactory.getKeyframedConstructorFunction();

            function d() {}
            d.prototype = {
                vertices: function(g, y) {
                    this.k && this.getValue();
                    var v = this.v;
                    y !== void 0 && (v = this.getValueAtTime(y, 0));
                    var C, c = v._length,
                        m = v[g],
                        f = v.v,
                        l = createSizedArray(c);
                    for (C = 0; C < c; C += 1) g === "i" || g === "o" ? l[C] = [m[C][0] - f[C][0], m[C][1] - f[C][1]] : l[C] = [m[C][0], m[C][1]];
                    return l
                },
                points: function(g) {
                    return this.vertices("v", g)
                },
                inTangents: function(g) {
                    return this.vertices("i", g)
                },
                outTangents: function(g) {
                    return this.vertices("o", g)
                },
                isClosed: function() {
                    return this.v.c
                },
                pointOnPath: function(g, y) {
                    var v = this.v;
                    y !== void 0 && (v = this.getValueAtTime(y, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(v));
                    for (var C = this._segmentsLength, c = C.lengths, m = C.totalLength * g, f = 0, l = c.length, b = 0, P; f < l;) {
                        if (b + c[f].addedLength > m) {
                            var x = f,
                                T = v.c && f === l - 1 ? 0 : f + 1,
                                F = (m - b) / c[f].addedLength;
                            P = bez.getPointInSegment(v.v[x], v.v[T], v.o[x], v.i[T], F, c[f]);
                            break
                        } else b += c[f].addedLength;
                        f += 1
                    }
                    return P || (P = v.c ? [v.v[0][0], v.v[0][1]] : [v.v[v._length - 1][0], v.v[v._length - 1][1]]), P
                },
                vectorOnPath: function(g, y, v) {
                    g == 1 ? g = this.v.c : g == 0 && (g = .999);
                    var C = this.pointOnPath(g, y),
                        c = this.pointOnPath(g + .001, y),
                        m = c[0] - C[0],
                        f = c[1] - C[1],
                        l = Math.sqrt(Math.pow(m, 2) + Math.pow(f, 2));
                    if (l === 0) return [0, 0];
                    var b = v === "tangent" ? [m / l, f / l] : [-f / l, m / l];
                    return b
                },
                tangentOnPath: function(g, y) {
                    return this.vectorOnPath(g, y, "tangent")
                },
                normalOnPath: function(g, y) {
                    return this.vectorOnPath(g, y, "normal")
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }, extendPrototype([d], o), extendPrototype([d], p), p.prototype.getValueAtTime = h, p.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var S = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(u, g, y, v, C) {
                var c = S(u, g, y, v, C);
                return c.propertyIndex = g.ix, c.lock = !1, y === 3 ? expressionHelpers.searchExpressions(u, g.pt, c) : y === 4 && expressionHelpers.searchExpressions(u, g.ks, c), c.k && u.addDynamicProperty(c), c
            }
        }

        function initialize$1() {
            addPropertyDecorator()
        }

        function addDecorator() {
            function t() {
                return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
            }
            TextProperty.prototype.getExpressionValue = function(e, r) {
                var i = this.calculateExpression(r);
                if (e.t !== i) {
                    var s = {};
                    return this.copyData(s, e), s.t = i.toString(), s.__complete = !1, s
                }
                return e
            }, TextProperty.prototype.searchProperty = function() {
                var e = this.searchKeyframes(),
                    r = this.searchExpressions();
                return this.kf = e || r, this.kf
            }, TextProperty.prototype.searchExpressions = t
        }

        function initialize() {
            addDecorator()
        }

        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
            createMergeNode: function t(e, r) {
                var i = createNS("feMerge");
                i.setAttribute("result", e);
                var s, a;
                for (a = 0; a < r.length; a += 1) s = createNS("feMergeNode"), s.setAttribute("in", r[a]), i.appendChild(s), i.appendChild(s);
                return i
            }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(t, e, r, i, s) {
            this.filterManager = e;
            var a = createNS("feColorMatrix");
            a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", i + "_tint_1"), t.appendChild(a), a = createNS("feColorMatrix"), a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_2"), t.appendChild(a), this.matrixFilter = a;
            var n = this.createMergeNode(i, [s, i + "_tint_1", i + "_tint_2"]);
            t.appendChild(n)
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    i = this.filterManager.effectElements[2].p.v / 100;
                this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
            }
        };

        function SVGFillFilter(t, e, r, i) {
            this.filterManager = e;
            var s = createNS("feColorMatrix");
            s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i), t.appendChild(s), this.matrixFilter = s
        }
        SVGFillFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v,
                    r = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
            }
        };

        function SVGStrokeEffect(t, e, r) {
            this.initialized = !1, this.filterManager = e, this.elem = r, this.paths = []
        }
        SVGStrokeEffect.prototype.initialize = function() {
            var t = this.elem.layerElement.children || this.elem.layerElement.childNodes,
                e, r, i, s;
            for (this.filterManager.effectElements[1].p.v === 1 ? (s = this.elem.maskManager.masksProperties.length, i = 0) : (i = this.filterManager.effectElements[0].p.v - 1, s = i + 1), r = createNS("g"), r.setAttribute("fill", "none"), r.setAttribute("stroke-linecap", "round"), r.setAttribute("stroke-dashoffset", 1), i; i < s; i += 1) e = createNS("path"), r.appendChild(e), this.paths.push({
                p: e,
                m: i
            });
            if (this.filterManager.effectElements[10].p.v === 3) {
                var a = createNS("mask"),
                    n = createElementID();
                a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(r), this.elem.globalData.defs.appendChild(a);
                var h = createNS("g");
                for (h.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); t[0];) h.appendChild(t[0]);
                this.elem.layerElement.appendChild(h), this.masker = a, r.setAttribute("stroke", "#fff")
            } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
                if (this.filterManager.effectElements[10].p.v === 2)
                    for (t = this.elem.layerElement.children || this.elem.layerElement.childNodes; t.length;) this.elem.layerElement.removeChild(t[0]);
                this.elem.layerElement.appendChild(r), this.elem.layerElement.removeAttribute("mask"), r.setAttribute("stroke", "#fff")
            }
            this.initialized = !0, this.pathMasker = r
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
            this.initialized || this.initialize();
            var e, r = this.paths.length,
                i, s;
            for (e = 0; e < r; e += 1)
                if (this.paths[e].m !== -1 && (i = this.elem.maskManager.viewData[this.paths[e].m], s = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                    var a;
                    if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                        var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01,
                            h = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01,
                            o = s.getTotalLength();
                        a = "0 0 0 " + o * n + " ";
                        var p = o * (h - n),
                            d = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01,
                            S = Math.floor(p / d),
                            u;
                        for (u = 0; u < S; u += 1) a += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
                        a += "0 " + o * 10 + " 0 0"
                    } else a = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
                    s.setAttribute("stroke-dasharray", a)
                } if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
                var g = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(g[0] * 255) + "," + bmFloor(g[1] * 255) + "," + bmFloor(g[2] * 255) + ")")
            }
        };

        function SVGTritoneFilter(t, e, r, i) {
            this.filterManager = e;
            var s = createNS("feColorMatrix");
            s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(s);
            var a = createNS("feComponentTransfer");
            a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), this.matrixFilter = a;
            var n = createNS("feFuncR");
            n.setAttribute("type", "table"), a.appendChild(n), this.feFuncR = n;
            var h = createNS("feFuncG");
            h.setAttribute("type", "table"), a.appendChild(h), this.feFuncG = h;
            var o = createNS("feFuncB");
            o.setAttribute("type", "table"), a.appendChild(o), this.feFuncB = o, t.appendChild(a)
        }
        SVGTritoneFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    i = this.filterManager.effectElements[2].p.v,
                    s = i[0] + " " + r[0] + " " + e[0],
                    a = i[1] + " " + r[1] + " " + e[1],
                    n = i[2] + " " + r[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n)
            }
        };

        function SVGProLevelsFilter(t, e, r, i) {
            this.filterManager = e;
            var s = this.filterManager.effectElements,
                a = createNS("feComponentTransfer");
            (s[10].p.k || s[10].p.v !== 0 || s[11].p.k || s[11].p.v !== 1 || s[12].p.k || s[12].p.v !== 1 || s[13].p.k || s[13].p.v !== 0 || s[14].p.k || s[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (s[17].p.k || s[17].p.v !== 0 || s[18].p.k || s[18].p.v !== 1 || s[19].p.k || s[19].p.v !== 1 || s[20].p.k || s[20].p.v !== 0 || s[21].p.k || s[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (s[24].p.k || s[24].p.v !== 0 || s[25].p.k || s[25].p.v !== 1 || s[26].p.k || s[26].p.v !== 1 || s[27].p.k || s[27].p.v !== 0 || s[28].p.k || s[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (s[31].p.k || s[31].p.v !== 0 || s[32].p.k || s[32].p.v !== 1 || s[33].p.k || s[33].p.v !== 1 || s[34].p.k || s[34].p.v !== 0 || s[35].p.k || s[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(a)), (s[3].p.k || s[3].p.v !== 0 || s[4].p.k || s[4].p.v !== 1 || s[5].p.k || s[5].p.v !== 1 || s[6].p.k || s[6].p.v !== 0 || s[7].p.k || s[7].p.v !== 1) && (a = createNS("feComponentTransfer"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), t.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
        }
        SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
            var r = createNS(t);
            return r.setAttribute("type", "table"), e.appendChild(r), r
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, s) {
            for (var a = 0, n = 256, h, o = Math.min(t, e), p = Math.max(t, e), d = Array.call(null, {
                    length: n
                }), S, u = 0, g = s - i, y = e - t; a <= 256;) h = a / 256, h <= o ? S = y < 0 ? s : i : h >= p ? S = y < 0 ? i : s : S = i + g * Math.pow((h - t) / y, 1 / r), d[u] = S, u += 1, a += 256 / (n - 1);
            return d.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e, r = this.filterManager.effectElements;
                this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
            }
        };

        function SVGDropShadowEffect(t, e, r, i, s) {
            var a = e.container.globalData.renderConfig.filterSize,
                n = e.data.fs || a;
            t.setAttribute("x", n.x || a.x), t.setAttribute("y", n.y || a.y), t.setAttribute("width", n.width || a.width), t.setAttribute("height", n.height || a.height), this.filterManager = e;
            var h = createNS("feGaussianBlur");
            h.setAttribute("in", "SourceAlpha"), h.setAttribute("result", i + "_drop_shadow_1"), h.setAttribute("stdDeviation", "0"), this.feGaussianBlur = h, t.appendChild(h);
            var o = createNS("feOffset");
            o.setAttribute("dx", "25"), o.setAttribute("dy", "0"), o.setAttribute("in", i + "_drop_shadow_1"), o.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = o, t.appendChild(o);
            var p = createNS("feFlood");
            p.setAttribute("flood-color", "#00ff00"), p.setAttribute("flood-opacity", "1"), p.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = p, t.appendChild(p);
            var d = createNS("feComposite");
            d.setAttribute("in", i + "_drop_shadow_3"), d.setAttribute("in2", i + "_drop_shadow_2"), d.setAttribute("operator", "in"), d.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(d);
            var S = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
            t.appendChild(S)
        }
        extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                    var e = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(e[0] * 255), Math.round(e[1] * 255), Math.round(e[2] * 255)))
                }
                if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var r = this.filterManager.effectElements[3].p.v,
                        i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                        s = r * Math.cos(i),
                        a = r * Math.sin(i);
                    this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a)
                }
            }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, r) {
            this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
        }
        SVGMatte3Effect.prototype.findSymbol = function(t) {
            for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
                if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                e += 1
            }
            return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
            var r = t.layerElement.parentNode;
            if (r) {
                for (var i = r.children, s = 0, a = i.length; s < a && i[s] !== t.layerElement;) s += 1;
                var n;
                s <= a - 2 && (n = i[s + 1]);
                var h = createNS("use");
                h.setAttribute("href", "#" + e), n ? r.insertBefore(h, n) : r.appendChild(h)
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
            if (!this.findSymbol(e)) {
                var r = createElementID(),
                    i = createNS("mask");
                i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                var s = t.globalData.defs;
                s.appendChild(i);
                var a = createNS("symbol");
                a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), s.appendChild(a);
                var n = createNS("use");
                n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = !1, e.show()
            }
            t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
            for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
            this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
            this.initialized || this.initialize()
        };

        function SVGGaussianBlurEffect(t, e, r, i) {
            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
            var s = createNS("feGaussianBlur");
            s.setAttribute("result", i), t.appendChild(s), this.feGaussianBlur = s
        }
        return SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = .3,
                    r = this.filterManager.effectElements[0].p.v * e,
                    i = this.filterManager.effectElements[1].p.v,
                    s = i == 3 ? 0 : r,
                    a = i == 2 ? 0 : r;
                this.feGaussianBlur.setAttribute("stdDeviation", s + " " + a);
                var n = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", n)
            }
        }, registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, !0), registerEffect(21, SVGFillFilter, !0), registerEffect(22, SVGStrokeEffect, !1), registerEffect(23, SVGTritoneFilter, !0), registerEffect(24, SVGProLevelsFilter, !0), registerEffect(25, SVGDropShadowEffect, !0), registerEffect(28, SVGMatte3Effect, !1), registerEffect(29, SVGGaussianBlurEffect, !0), lottie
    })
})(lottie, lottie.exports);
var lottieExports = lottie.exports;
const Lottie = getDefaultExportFromCjs(lottieExports);
export {
    Lottie as L
};