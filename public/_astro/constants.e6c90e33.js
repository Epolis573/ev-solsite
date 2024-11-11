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
    m as th,
    C as Dl,
    v as Wa,
    D as nh,
    E as ih,
    s as mt,
    F as Rs,
    f as hi
  } from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
  /**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   */ const qr = "151",
    xx = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
    vx = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
    sh = 0,
    Xa = 1,
    rh = 2,
    Nl = 1,
    ah = 2,
    Fi = 3,
    Kt = 0,
    Tt = 1,
    qt = 2,
    Mn = 0,
    ui = 1,
    qa = 2,
    ja = 3,
    Ka = 4,
    oh = 5,
    ai = 100,
    lh = 101,
    ch = 102,
    Ya = 103,
    Za = 104,
    hh = 200,
    uh = 201,
    dh = 202,
    fh = 203,
    Ol = 204,
    Ul = 205,
    ph = 206,
    mh = 207,
    gh = 208,
    _h = 209,
    xh = 210,
    vh = 0,
    Sh = 1,
    Mh = 2,
    Pr = 3,
    yh = 4,
    Th = 5,
    bh = 6,
    Ah = 7,
    Fl = 0,
    Eh = 1,
    wh = 2,
    on = 0,
    Ch = 1,
    Rh = 2,
    Ih = 3,
    Lh = 4,
    Ph = 5,
    Bl = 300,
    mi = 301,
    gi = 302,
    Dr = 303,
    Nr = 304,
    Is = 306,
    _i = 1e3,
    Nt = 1001,
    Es = 1002,
    at = 1003,
    Or = 1004,
    bs = 1005,
    ot = 1006,
    zl = 1007,
    On = 1008,
    Un = 1009,
    Dh = 1010,
    Nh = 1011,
    kl = 1012,
    Oh = 1013,
    Ln = 1014,
    Sn = 1015,
    Vi = 1016,
    Uh = 1017,
    Fh = 1018,
    di = 1020,
    Bh = 1021,
    Ot = 1023,
    zh = 1024,
    kh = 1025,
    Nn = 1026,
    xi = 1027,
    Vh = 1028,
    Gh = 1029,
    Hh = 1030,
    Wh = 1031,
    Xh = 1033,
    $s = 33776,
    Js = 33777,
    Qs = 33778,
    er = 33779,
    $a = 35840,
    Ja = 35841,
    Qa = 35842,
    eo = 35843,
    qh = 36196,
    to = 37492,
    no = 37496,
    io = 37808,
    so = 37809,
    ro = 37810,
    ao = 37811,
    oo = 37812,
    lo = 37813,
    co = 37814,
    ho = 37815,
    uo = 37816,
    fo = 37817,
    po = 37818,
    mo = 37819,
    go = 37820,
    _o = 37821,
    tr = 36492,
    jh = 36283,
    xo = 36284,
    vo = 36285,
    So = 36286,
    Kh = 2200,
    Yh = 2201,
    Zh = 2202,
    Gi = 2300,
    vi = 2301,
    nr = 2302,
    oi = 2400,
    li = 2401,
    ws = 2402,
    jr = 2500,
    $h = 2501,
    Jh = 0,
    Vl = 1,
    Ur = 2,
    Fn = 3e3,
    Fe = 3001,
    Qh = 3200,
    eu = 3201,
    Gl = 0,
    tu = 1,
    Dt = "srgb",
    Si = "srgb-linear",
    Hl = "display-p3",
    ir = 7680,
    nu = 519,
    Fr = 35044,
    Mo = "300 es",
    Br = 1035;
  class kn {
    addEventListener(e, t) {
      this._listeners === void 0 && (this._listeners = {});
      const n = this._listeners;
      n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
    }
    hasEventListener(e, t) {
      if (this._listeners === void 0) return !1;
      const n = this._listeners;
      return n[e] !== void 0 && n[e].indexOf(t) !== -1;
    }
    removeEventListener(e, t) {
      if (this._listeners === void 0) return;
      const i = this._listeners[e];
      if (i !== void 0) {
        const s = i.indexOf(t);
        s !== -1 && i.splice(s, 1);
      }
    }
    dispatchEvent(e) {
      if (this._listeners === void 0) return;
      const n = this._listeners[e.type];
      if (n !== void 0) {
        e.target = this;
        const i = n.slice(0);
        for (let s = 0, r = i.length; s < r; s++) i[s].call(this, e);
        e.target = null;
      }
    }
  }
  const ft = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff"
  ];
  let yo = 1234567;
  const zi = Math.PI / 180,
    Mi = 180 / Math.PI;
  function Vt() {
    const o = (Math.random() * 4294967295) | 0,
      e = (Math.random() * 4294967295) | 0,
      t = (Math.random() * 4294967295) | 0,
      n = (Math.random() * 4294967295) | 0;
    return (
      ft[o & 255] +
      ft[(o >> 8) & 255] +
      ft[(o >> 16) & 255] +
      ft[(o >> 24) & 255] +
      "-" +
      ft[e & 255] +
      ft[(e >> 8) & 255] +
      "-" +
      ft[((e >> 16) & 15) | 64] +
      ft[(e >> 24) & 255] +
      "-" +
      ft[(t & 63) | 128] +
      ft[(t >> 8) & 255] +
      "-" +
      ft[(t >> 16) & 255] +
      ft[(t >> 24) & 255] +
      ft[n & 255] +
      ft[(n >> 8) & 255] +
      ft[(n >> 16) & 255] +
      ft[(n >> 24) & 255]
    ).toLowerCase();
  }
  function ht(o, e, t) {
    return Math.max(e, Math.min(t, o));
  }
  function Kr(o, e) {
    return ((o % e) + e) % e;
  }
  function iu(o, e, t, n, i) {
    return n + ((o - e) * (i - n)) / (t - e);
  }
  function su(o, e, t) {
    return o !== e ? (t - o) / (e - o) : 0;
  }
  function ki(o, e, t) {
    return (1 - t) * o + t * e;
  }
  function ru(o, e, t, n) {
    return ki(o, e, 1 - Math.exp(-t * n));
  }
  function au(o, e = 1) {
    return e - Math.abs(Kr(o, e * 2) - e);
  }
  function ou(o, e, t) {
    return o <= e
      ? 0
      : o >= t
      ? 1
      : ((o = (o - e) / (t - e)), o * o * (3 - 2 * o));
  }
  function lu(o, e, t) {
    return o <= e
      ? 0
      : o >= t
      ? 1
      : ((o = (o - e) / (t - e)), o * o * o * (o * (o * 6 - 15) + 10));
  }
  function cu(o, e) {
    return o + Math.floor(Math.random() * (e - o + 1));
  }
  function hu(o, e) {
    return o + Math.random() * (e - o);
  }
  function uu(o) {
    return o * (0.5 - Math.random());
  }
  function du(o) {
    o !== void 0 && (yo = o);
    let e = (yo += 1831565813);
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  }
  function fu(o) {
    return o * zi;
  }
  function pu(o) {
    return o * Mi;
  }
  function zr(o) {
    return (o & (o - 1)) === 0 && o !== 0;
  }
  function Wl(o) {
    return Math.pow(2, Math.ceil(Math.log(o) / Math.LN2));
  }
  function Xl(o) {
    return Math.pow(2, Math.floor(Math.log(o) / Math.LN2));
  }
  function mu(o, e, t, n, i) {
    const s = Math.cos,
      r = Math.sin,
      a = s(t / 2),
      l = r(t / 2),
      c = s((e + n) / 2),
      h = r((e + n) / 2),
      u = s((e - n) / 2),
      d = r((e - n) / 2),
      p = s((n - e) / 2),
      g = r((n - e) / 2);
    switch (i) {
      case "XYX":
        o.set(a * h, l * u, l * d, a * c);
        break;
      case "YZY":
        o.set(l * d, a * h, l * u, a * c);
        break;
      case "ZXZ":
        o.set(l * u, l * d, a * h, a * c);
        break;
      case "XZX":
        o.set(a * h, l * g, l * p, a * c);
        break;
      case "YXY":
        o.set(l * p, a * h, l * g, a * c);
        break;
      case "ZYZ":
        o.set(l * g, l * p, a * h, a * c);
        break;
      default:
        console.warn(
          "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
            i
        );
    }
  }
  function an(o, e) {
    switch (e.constructor) {
      case Float32Array:
        return o;
      case Uint16Array:
        return o / 65535;
      case Uint8Array:
        return o / 255;
      case Int16Array:
        return Math.max(o / 32767, -1);
      case Int8Array:
        return Math.max(o / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function He(o, e) {
    switch (e.constructor) {
      case Float32Array:
        return o;
      case Uint16Array:
        return Math.round(o * 65535);
      case Uint8Array:
        return Math.round(o * 255);
      case Int16Array:
        return Math.round(o * 32767);
      case Int8Array:
        return Math.round(o * 127);
      default:
        throw new Error("Invalid component type.");
    }
  }
  const gu = {
    DEG2RAD: zi,
    RAD2DEG: Mi,
    generateUUID: Vt,
    clamp: ht,
    euclideanModulo: Kr,
    mapLinear: iu,
    inverseLerp: su,
    lerp: ki,
    damp: ru,
    pingpong: au,
    smoothstep: ou,
    smootherstep: lu,
    randInt: cu,
    randFloat: hu,
    randFloatSpread: uu,
    seededRandom: du,
    degToRad: fu,
    radToDeg: pu,
    isPowerOfTwo: zr,
    ceilPowerOfTwo: Wl,
    floorPowerOfTwo: Xl,
    setQuaternionFromProperEuler: mu,
    normalize: He,
    denormalize: an
  };
  class De {
    constructor(e = 0, t = 0) {
      (De.prototype.isVector2 = !0), (this.x = e), (this.y = t);
    }
    get width() {
      return this.x;
    }
    set width(e) {
      this.x = e;
    }
    get height() {
      return this.y;
    }
    set height(e) {
      this.y = e;
    }
    set(e, t) {
      return (this.x = e), (this.y = t), this;
    }
    setScalar(e) {
      return (this.x = e), (this.y = e), this;
    }
    setX(e) {
      return (this.x = e), this;
    }
    setY(e) {
      return (this.y = e), this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(e) {
      return (this.x = e.x), (this.y = e.y), this;
    }
    add(e) {
      return (this.x += e.x), (this.y += e.y), this;
    }
    addScalar(e) {
      return (this.x += e), (this.y += e), this;
    }
    addVectors(e, t) {
      return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
    }
    addScaledVector(e, t) {
      return (this.x += e.x * t), (this.y += e.y * t), this;
    }
    sub(e) {
      return (this.x -= e.x), (this.y -= e.y), this;
    }
    subScalar(e) {
      return (this.x -= e), (this.y -= e), this;
    }
    subVectors(e, t) {
      return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
    }
    multiply(e) {
      return (this.x *= e.x), (this.y *= e.y), this;
    }
    multiplyScalar(e) {
      return (this.x *= e), (this.y *= e), this;
    }
    divide(e) {
      return (this.x /= e.x), (this.y /= e.y), this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
      const t = this.x,
        n = this.y,
        i = e.elements;
      return (
        (this.x = i[0] * t + i[3] * n + i[6]),
        (this.y = i[1] * t + i[4] * n + i[7]),
        this
      );
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
      );
    }
    clamp(e, t) {
      return (
        (this.x = Math.max(e.x, Math.min(t.x, this.x))),
        (this.y = Math.max(e.y, Math.min(t.y, this.y))),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = Math.max(e, Math.min(t, this.x))),
        (this.y = Math.max(e, Math.min(t, this.y))),
        this
      );
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(e, Math.min(t, n))
      );
    }
    floor() {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    }
    ceil() {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    }
    round() {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        this
      );
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(e) {
      const t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      const n = this.dot(e) / t;
      return Math.acos(ht(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x,
        n = this.y - e.y;
      return t * t + n * n;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
      );
    }
    equals(e) {
      return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
      return (this.x = e[t]), (this.y = e[t + 1]), this;
    }
    toArray(e = [], t = 0) {
      return (e[t] = this.x), (e[t + 1] = this.y), e;
    }
    fromBufferAttribute(e, t) {
      return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
    }
    rotateAround(e, t) {
      const n = Math.cos(t),
        i = Math.sin(t),
        s = this.x - e.x,
        r = this.y - e.y;
      return (this.x = s * n - r * i + e.x), (this.y = s * i + r * n + e.y), this;
    }
    random() {
      return (this.x = Math.random()), (this.y = Math.random()), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }
  class Pe {
    constructor() {
      (Pe.prototype.isMatrix3 = !0),
        (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
    }
    set(e, t, n, i, s, r, a, l, c) {
      const h = this.elements;
      return (
        (h[0] = e),
        (h[1] = i),
        (h[2] = a),
        (h[3] = t),
        (h[4] = s),
        (h[5] = l),
        (h[6] = n),
        (h[7] = r),
        (h[8] = c),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(e) {
      const t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        this
      );
    }
    extractBasis(e, t, n) {
      return (
        e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
      );
    }
    setFromMatrix4(e) {
      const t = e.elements;
      return (
        this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
      );
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements,
        i = t.elements,
        s = this.elements,
        r = n[0],
        a = n[3],
        l = n[6],
        c = n[1],
        h = n[4],
        u = n[7],
        d = n[2],
        p = n[5],
        g = n[8],
        _ = i[0],
        m = i[3],
        f = i[6],
        b = i[1],
        v = i[4],
        y = i[7],
        A = i[2],
        C = i[5],
        I = i[8];
      return (
        (s[0] = r * _ + a * b + l * A),
        (s[3] = r * m + a * v + l * C),
        (s[6] = r * f + a * y + l * I),
        (s[1] = c * _ + h * b + u * A),
        (s[4] = c * m + h * v + u * C),
        (s[7] = c * f + h * y + u * I),
        (s[2] = d * _ + p * b + g * A),
        (s[5] = d * m + p * v + g * C),
        (s[8] = d * f + p * y + g * I),
        this
      );
    }
    multiplyScalar(e) {
      const t = this.elements;
      return (
        (t[0] *= e),
        (t[3] *= e),
        (t[6] *= e),
        (t[1] *= e),
        (t[4] *= e),
        (t[7] *= e),
        (t[2] *= e),
        (t[5] *= e),
        (t[8] *= e),
        this
      );
    }
    determinant() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        i = e[2],
        s = e[3],
        r = e[4],
        a = e[5],
        l = e[6],
        c = e[7],
        h = e[8];
      return (
        t * r * h - t * a * c - n * s * h + n * a * l + i * s * c - i * r * l
      );
    }
    invert() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        i = e[2],
        s = e[3],
        r = e[4],
        a = e[5],
        l = e[6],
        c = e[7],
        h = e[8],
        u = h * r - a * c,
        d = a * l - h * s,
        p = c * s - r * l,
        g = t * u + n * d + i * p;
      if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const _ = 1 / g;
      return (
        (e[0] = u * _),
        (e[1] = (i * c - h * n) * _),
        (e[2] = (a * n - i * r) * _),
        (e[3] = d * _),
        (e[4] = (h * t - i * l) * _),
        (e[5] = (i * s - a * t) * _),
        (e[6] = p * _),
        (e[7] = (n * l - c * t) * _),
        (e[8] = (r * t - n * s) * _),
        this
      );
    }
    transpose() {
      let e;
      const t = this.elements;
      return (
        (e = t[1]),
        (t[1] = t[3]),
        (t[3] = e),
        (e = t[2]),
        (t[2] = t[6]),
        (t[6] = e),
        (e = t[5]),
        (t[5] = t[7]),
        (t[7] = e),
        this
      );
    }
    getNormalMatrix(e) {
      return this.setFromMatrix4(e).invert().transpose();
    }
    transposeIntoArray(e) {
      const t = this.elements;
      return (
        (e[0] = t[0]),
        (e[1] = t[3]),
        (e[2] = t[6]),
        (e[3] = t[1]),
        (e[4] = t[4]),
        (e[5] = t[7]),
        (e[6] = t[2]),
        (e[7] = t[5]),
        (e[8] = t[8]),
        this
      );
    }
    setUvTransform(e, t, n, i, s, r, a) {
      const l = Math.cos(s),
        c = Math.sin(s);
      return (
        this.set(
          n * l,
          n * c,
          -n * (l * r + c * a) + r + e,
          -i * c,
          i * l,
          -i * (-c * r + l * a) + a + t,
          0,
          0,
          1
        ),
        this
      );
    }
    scale(e, t) {
      return this.premultiply(sr.makeScale(e, t)), this;
    }
    rotate(e) {
      return this.premultiply(sr.makeRotation(-e)), this;
    }
    translate(e, t) {
      return this.premultiply(sr.makeTranslation(e, t)), this;
    }
    makeTranslation(e, t) {
      return this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
    }
    makeRotation(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
    }
    makeScale(e, t) {
      return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
    }
    equals(e) {
      const t = this.elements,
        n = e.elements;
      for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        e
      );
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const sr = new Pe();
  function ql(o) {
    for (let e = o.length - 1; e >= 0; --e) if (o[e] >= 65535) return !0;
    return !1;
  }
  function Hi(o) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", o);
  }
  function fi(o) {
    return o < 0.04045
      ? o * 0.0773993808
      : Math.pow(o * 0.9478672986 + 0.0521327014, 2.4);
  }
  function rr(o) {
    return o < 0.0031308 ? o * 12.92 : 1.055 * Math.pow(o, 0.41666) - 0.055;
  }
  const _u = new Pe().fromArray([
      0.8224621, 0.0331941, 0.0170827, 0.177538, 0.9668058, 0.0723974, -1e-7,
      1e-7, 0.9105199
    ]),
    xu = new Pe().fromArray([
      1.2249401, -0.0420569, -0.0196376, -0.2249404, 1.0420571, -0.0786361, 1e-7,
      0, 1.0982735
    ]);
  function vu(o) {
    return o.convertSRGBToLinear().applyMatrix3(xu);
  }
  function Su(o) {
    return o.applyMatrix3(_u).convertLinearToSRGB();
  }
  const Mu = { [Si]: (o) => o, [Dt]: (o) => o.convertSRGBToLinear(), [Hl]: vu },
    yu = { [Si]: (o) => o, [Dt]: (o) => o.convertLinearToSRGB(), [Hl]: Su },
    At = {
      enabled: !1,
      get legacyMode() {
        return (
          console.warn(
            "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
          ),
          !this.enabled
        );
      },
      set legacyMode(o) {
        console.warn(
          "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
        ),
          (this.enabled = !o);
      },
      get workingColorSpace() {
        return Si;
      },
      set workingColorSpace(o) {
        console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
      },
      convert: function (o, e, t) {
        if (this.enabled === !1 || e === t || !e || !t) return o;
        const n = Mu[e],
          i = yu[t];
        if (n === void 0 || i === void 0)
          throw new Error(
            `Unsupported color space conversion, "${e}" to "${t}".`
          );
        return i(n(o));
      },
      fromWorkingColorSpace: function (o, e) {
        return this.convert(o, this.workingColorSpace, e);
      },
      toWorkingColorSpace: function (o, e) {
        return this.convert(o, e, this.workingColorSpace);
      }
    };
  let Gn;
  class jl {
    static getDataURL(e) {
      if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
      let t;
      if (e instanceof HTMLCanvasElement) t = e;
      else {
        Gn === void 0 && (Gn = Hi("canvas")),
          (Gn.width = e.width),
          (Gn.height = e.height);
        const n = Gn.getContext("2d");
        e instanceof ImageData
          ? n.putImageData(e, 0, 0)
          : n.drawImage(e, 0, 0, e.width, e.height),
          (t = Gn);
      }
      return t.width > 2048 || t.height > 2048
        ? (console.warn(
            "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
            e
          ),
          t.toDataURL("image/jpeg", 0.6))
        : t.toDataURL("image/png");
    }
    static sRGBToLinear(e) {
      if (
        (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
      ) {
        const t = Hi("canvas");
        (t.width = e.width), (t.height = e.height);
        const n = t.getContext("2d");
        n.drawImage(e, 0, 0, e.width, e.height);
        const i = n.getImageData(0, 0, e.width, e.height),
          s = i.data;
        for (let r = 0; r < s.length; r++) s[r] = fi(s[r] / 255) * 255;
        return n.putImageData(i, 0, 0), t;
      } else if (e.data) {
        const t = e.data.slice(0);
        for (let n = 0; n < t.length; n++)
          t instanceof Uint8Array || t instanceof Uint8ClampedArray
            ? (t[n] = Math.floor(fi(t[n] / 255) * 255))
            : (t[n] = fi(t[n]));
        return { data: t, width: e.width, height: e.height };
      } else
        return (
          console.warn(
            "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
          ),
          e
        );
    }
  }
  class Kl {
    constructor(e = null) {
      (this.isSource = !0),
        (this.uuid = Vt()),
        (this.data = e),
        (this.version = 0);
    }
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
      const n = { uuid: this.uuid, url: "" },
        i = this.data;
      if (i !== null) {
        let s;
        if (Array.isArray(i)) {
          s = [];
          for (let r = 0, a = i.length; r < a; r++)
            i[r].isDataTexture ? s.push(ar(i[r].image)) : s.push(ar(i[r]));
        } else s = ar(i);
        n.url = s;
      }
      return t || (e.images[this.uuid] = n), n;
    }
  }
  function ar(o) {
    return (typeof HTMLImageElement < "u" && o instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && o instanceof ImageBitmap)
      ? jl.getDataURL(o)
      : o.data
      ? {
          data: Array.from(o.data),
          width: o.width,
          height: o.height,
          type: o.data.constructor.name
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  let Tu = 0;
  class lt extends kn {
    constructor(
      e = lt.DEFAULT_IMAGE,
      t = lt.DEFAULT_MAPPING,
      n = Nt,
      i = Nt,
      s = ot,
      r = On,
      a = Ot,
      l = Un,
      c = lt.DEFAULT_ANISOTROPY,
      h = Fn
    ) {
      super(),
        (this.isTexture = !0),
        Object.defineProperty(this, "id", { value: Tu++ }),
        (this.uuid = Vt()),
        (this.name = ""),
        (this.source = new Kl(e)),
        (this.mipmaps = []),
        (this.mapping = t),
        (this.channel = 0),
        (this.wrapS = n),
        (this.wrapT = i),
        (this.magFilter = s),
        (this.minFilter = r),
        (this.anisotropy = c),
        (this.format = a),
        (this.internalFormat = null),
        (this.type = l),
        (this.offset = new De(0, 0)),
        (this.repeat = new De(1, 1)),
        (this.center = new De(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new Pe()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.encoding = h),
        (this.userData = {}),
        (this.version = 0),
        (this.onUpdate = null),
        (this.isRenderTargetTexture = !1),
        (this.needsPMREMUpdate = !1);
    }
    get image() {
      return this.source.data;
    }
    set image(e = null) {
      this.source.data = e;
    }
    updateMatrix() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (
        (this.name = e.name),
        (this.source = e.source),
        (this.mipmaps = e.mipmaps.slice(0)),
        (this.mapping = e.mapping),
        (this.channel = e.channel),
        (this.wrapS = e.wrapS),
        (this.wrapT = e.wrapT),
        (this.magFilter = e.magFilter),
        (this.minFilter = e.minFilter),
        (this.anisotropy = e.anisotropy),
        (this.format = e.format),
        (this.internalFormat = e.internalFormat),
        (this.type = e.type),
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        (this.rotation = e.rotation),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        this.matrix.copy(e.matrix),
        (this.generateMipmaps = e.generateMipmaps),
        (this.premultiplyAlpha = e.premultiplyAlpha),
        (this.flipY = e.flipY),
        (this.unpackAlignment = e.unpackAlignment),
        (this.encoding = e.encoding),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        (this.needsUpdate = !0),
        this
      );
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
      const n = {
        metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(e).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };
      return (
        Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        t || (e.textures[this.uuid] = n),
        n
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(e) {
      if (this.mapping !== Bl) return e;
      if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
        switch (this.wrapS) {
          case _i:
            e.x = e.x - Math.floor(e.x);
            break;
          case Nt:
            e.x = e.x < 0 ? 0 : 1;
            break;
          case Es:
            Math.abs(Math.floor(e.x) % 2) === 1
              ? (e.x = Math.ceil(e.x) - e.x)
              : (e.x = e.x - Math.floor(e.x));
            break;
        }
      if (e.y < 0 || e.y > 1)
        switch (this.wrapT) {
          case _i:
            e.y = e.y - Math.floor(e.y);
            break;
          case Nt:
            e.y = e.y < 0 ? 0 : 1;
            break;
          case Es:
            Math.abs(Math.floor(e.y) % 2) === 1
              ? (e.y = Math.ceil(e.y) - e.y)
              : (e.y = e.y - Math.floor(e.y));
            break;
        }
      return this.flipY && (e.y = 1 - e.y), e;
    }
    set needsUpdate(e) {
      e === !0 && (this.version++, (this.source.needsUpdate = !0));
    }
  }
  lt.DEFAULT_IMAGE = null;
  lt.DEFAULT_MAPPING = Bl;
  lt.DEFAULT_ANISOTROPY = 1;
  class We {
    constructor(e = 0, t = 0, n = 0, i = 1) {
      (We.prototype.isVector4 = !0),
        (this.x = e),
        (this.y = t),
        (this.z = n),
        (this.w = i);
    }
    get width() {
      return this.z;
    }
    set width(e) {
      this.z = e;
    }
    get height() {
      return this.w;
    }
    set height(e) {
      this.w = e;
    }
    set(e, t, n, i) {
      return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
    }
    setScalar(e) {
      return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
    }
    setX(e) {
      return (this.x = e), this;
    }
    setY(e) {
      return (this.y = e), this;
    }
    setZ(e) {
      return (this.z = e), this;
    }
    setW(e) {
      return (this.w = e), this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        case 3:
          this.w = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(e) {
      return (
        (this.x = e.x),
        (this.y = e.y),
        (this.z = e.z),
        (this.w = e.w !== void 0 ? e.w : 1),
        this
      );
    }
    add(e) {
      return (
        (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
      );
    }
    addScalar(e) {
      return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
    }
    addVectors(e, t) {
      return (
        (this.x = e.x + t.x),
        (this.y = e.y + t.y),
        (this.z = e.z + t.z),
        (this.w = e.w + t.w),
        this
      );
    }
    addScaledVector(e, t) {
      return (
        (this.x += e.x * t),
        (this.y += e.y * t),
        (this.z += e.z * t),
        (this.w += e.w * t),
        this
      );
    }
    sub(e) {
      return (
        (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
      );
    }
    subScalar(e) {
      return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
    }
    subVectors(e, t) {
      return (
        (this.x = e.x - t.x),
        (this.y = e.y - t.y),
        (this.z = e.z - t.z),
        (this.w = e.w - t.w),
        this
      );
    }
    multiply(e) {
      return (
        (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
      );
    }
    multiplyScalar(e) {
      return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
    }
    applyMatrix4(e) {
      const t = this.x,
        n = this.y,
        i = this.z,
        s = this.w,
        r = e.elements;
      return (
        (this.x = r[0] * t + r[4] * n + r[8] * i + r[12] * s),
        (this.y = r[1] * t + r[5] * n + r[9] * i + r[13] * s),
        (this.z = r[2] * t + r[6] * n + r[10] * i + r[14] * s),
        (this.w = r[3] * t + r[7] * n + r[11] * i + r[15] * s),
        this
      );
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    setAxisAngleFromQuaternion(e) {
      this.w = 2 * Math.acos(e.w);
      const t = Math.sqrt(1 - e.w * e.w);
      return (
        t < 1e-4
          ? ((this.x = 1), (this.y = 0), (this.z = 0))
          : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
        this
      );
    }
    setAxisAngleFromRotationMatrix(e) {
      let t, n, i, s;
      const l = e.elements,
        c = l[0],
        h = l[4],
        u = l[8],
        d = l[1],
        p = l[5],
        g = l[9],
        _ = l[2],
        m = l[6],
        f = l[10];
      if (
        Math.abs(h - d) < 0.01 &&
        Math.abs(u - _) < 0.01 &&
        Math.abs(g - m) < 0.01
      ) {
        if (
          Math.abs(h + d) < 0.1 &&
          Math.abs(u + _) < 0.1 &&
          Math.abs(g + m) < 0.1 &&
          Math.abs(c + p + f - 3) < 0.1
        )
          return this.set(1, 0, 0, 0), this;
        t = Math.PI;
        const v = (c + 1) / 2,
          y = (p + 1) / 2,
          A = (f + 1) / 2,
          C = (h + d) / 4,
          I = (u + _) / 4,
          D = (g + m) / 4;
        return (
          v > y && v > A
            ? v < 0.01
              ? ((n = 0), (i = 0.707106781), (s = 0.707106781))
              : ((n = Math.sqrt(v)), (i = C / n), (s = I / n))
            : y > A
            ? y < 0.01
              ? ((n = 0.707106781), (i = 0), (s = 0.707106781))
              : ((i = Math.sqrt(y)), (n = C / i), (s = D / i))
            : A < 0.01
            ? ((n = 0.707106781), (i = 0.707106781), (s = 0))
            : ((s = Math.sqrt(A)), (n = I / s), (i = D / s)),
          this.set(n, i, s, t),
          this
        );
      }
      let b = Math.sqrt(
        (m - g) * (m - g) + (u - _) * (u - _) + (d - h) * (d - h)
      );
      return (
        Math.abs(b) < 0.001 && (b = 1),
        (this.x = (m - g) / b),
        (this.y = (u - _) / b),
        (this.z = (d - h) / b),
        (this.w = Math.acos((c + p + f - 1) / 2)),
        this
      );
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        (this.w = Math.min(this.w, e.w)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        (this.w = Math.max(this.w, e.w)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = Math.max(e.x, Math.min(t.x, this.x))),
        (this.y = Math.max(e.y, Math.min(t.y, this.y))),
        (this.z = Math.max(e.z, Math.min(t.z, this.z))),
        (this.w = Math.max(e.w, Math.min(t.w, this.w))),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = Math.max(e, Math.min(t, this.x))),
        (this.y = Math.max(e, Math.min(t, this.y))),
        (this.z = Math.max(e, Math.min(t, this.z))),
        (this.w = Math.max(e, Math.min(t, this.w))),
        this
      );
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(e, Math.min(t, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        (this.w = Math.floor(this.w)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        (this.w = Math.ceil(this.w)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        (this.w = Math.round(this.w)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
        (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
        this
      );
    }
    negate() {
      return (
        (this.x = -this.x),
        (this.y = -this.y),
        (this.z = -this.z),
        (this.w = -this.w),
        this
      );
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
    }
    lengthSq() {
      return (
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    length() {
      return Math.sqrt(
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    }
    manhattanLength() {
      return (
        Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
      );
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        (this.z += (e.z - this.z) * t),
        (this.w += (e.w - this.w) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        (this.z = e.z + (t.z - e.z) * n),
        (this.w = e.w + (t.w - e.w) * n),
        this
      );
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
    }
    fromArray(e, t = 0) {
      return (
        (this.x = e[t]),
        (this.y = e[t + 1]),
        (this.z = e[t + 2]),
        (this.w = e[t + 3]),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this.x),
        (e[t + 1] = this.y),
        (e[t + 2] = this.z),
        (e[t + 3] = this.w),
        e
      );
    }
    fromBufferAttribute(e, t) {
      return (
        (this.x = e.getX(t)),
        (this.y = e.getY(t)),
        (this.z = e.getZ(t)),
        (this.w = e.getW(t)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        (this.w = Math.random()),
        this
      );
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  }
  class cn extends kn {
    constructor(e = 1, t = 1, n = {}) {
      super(),
        (this.isWebGLRenderTarget = !0),
        (this.width = e),
        (this.height = t),
        (this.depth = 1),
        (this.scissor = new We(0, 0, e, t)),
        (this.scissorTest = !1),
        (this.viewport = new We(0, 0, e, t));
      const i = { width: e, height: t, depth: 1 };
      (this.texture = new lt(
        i,
        n.mapping,
        n.wrapS,
        n.wrapT,
        n.magFilter,
        n.minFilter,
        n.format,
        n.type,
        n.anisotropy,
        n.encoding
      )),
        (this.texture.isRenderTargetTexture = !0),
        (this.texture.flipY = !1),
        (this.texture.generateMipmaps =
          n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
        (this.texture.internalFormat =
          n.internalFormat !== void 0 ? n.internalFormat : null),
        (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : ot),
        (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
        (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
        (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
        (this.samples = n.samples !== void 0 ? n.samples : 0);
    }
    setSize(e, t, n = 1) {
      (this.width !== e || this.height !== t || this.depth !== n) &&
        ((this.width = e),
        (this.height = t),
        (this.depth = n),
        (this.texture.image.width = e),
        (this.texture.image.height = t),
        (this.texture.image.depth = n),
        this.dispose()),
        this.viewport.set(0, 0, e, t),
        this.scissor.set(0, 0, e, t);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      (this.width = e.width),
        (this.height = e.height),
        (this.depth = e.depth),
        this.viewport.copy(e.viewport),
        (this.texture = e.texture.clone()),
        (this.texture.isRenderTargetTexture = !0);
      const t = Object.assign({}, e.texture.image);
      return (
        (this.texture.source = new Kl(t)),
        (this.depthBuffer = e.depthBuffer),
        (this.stencilBuffer = e.stencilBuffer),
        e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
        (this.samples = e.samples),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  class Yl extends lt {
    constructor(e = null, t = 1, n = 1, i = 1) {
      super(null),
        (this.isDataArrayTexture = !0),
        (this.image = { data: e, width: t, height: n, depth: i }),
        (this.magFilter = at),
        (this.minFilter = at),
        (this.wrapR = Nt),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  class bu extends lt {
    constructor(e = null, t = 1, n = 1, i = 1) {
      super(null),
        (this.isData3DTexture = !0),
        (this.image = { data: e, width: t, height: n, depth: i }),
        (this.magFilter = at),
        (this.minFilter = at),
        (this.wrapR = Nt),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  class Gt {
    constructor(e = 0, t = 0, n = 0, i = 1) {
      (this.isQuaternion = !0),
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._w = i);
    }
    static slerpFlat(e, t, n, i, s, r, a) {
      let l = n[i + 0],
        c = n[i + 1],
        h = n[i + 2],
        u = n[i + 3];
      const d = s[r + 0],
        p = s[r + 1],
        g = s[r + 2],
        _ = s[r + 3];
      if (a === 0) {
        (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = h), (e[t + 3] = u);
        return;
      }
      if (a === 1) {
        (e[t + 0] = d), (e[t + 1] = p), (e[t + 2] = g), (e[t + 3] = _);
        return;
      }
      if (u !== _ || l !== d || c !== p || h !== g) {
        let m = 1 - a;
        const f = l * d + c * p + h * g + u * _,
          b = f >= 0 ? 1 : -1,
          v = 1 - f * f;
        if (v > Number.EPSILON) {
          const A = Math.sqrt(v),
            C = Math.atan2(A, f * b);
          (m = Math.sin(m * C) / A), (a = Math.sin(a * C) / A);
        }
        const y = a * b;
        if (
          ((l = l * m + d * y),
          (c = c * m + p * y),
          (h = h * m + g * y),
          (u = u * m + _ * y),
          m === 1 - a)
        ) {
          const A = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
          (l *= A), (c *= A), (h *= A), (u *= A);
        }
      }
      (e[t] = l), (e[t + 1] = c), (e[t + 2] = h), (e[t + 3] = u);
    }
    static multiplyQuaternionsFlat(e, t, n, i, s, r) {
      const a = n[i],
        l = n[i + 1],
        c = n[i + 2],
        h = n[i + 3],
        u = s[r],
        d = s[r + 1],
        p = s[r + 2],
        g = s[r + 3];
      return (
        (e[t] = a * g + h * u + l * p - c * d),
        (e[t + 1] = l * g + h * d + c * u - a * p),
        (e[t + 2] = c * g + h * p + a * d - l * u),
        (e[t + 3] = h * g - a * u - l * d - c * p),
        e
      );
    }
    get x() {
      return this._x;
    }
    set x(e) {
      (this._x = e), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e) {
      (this._y = e), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e) {
      (this._z = e), this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(e) {
      (this._w = e), this._onChangeCallback();
    }
    set(e, t, n, i) {
      return (
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._w = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e) {
      return (
        (this._x = e.x),
        (this._y = e.y),
        (this._z = e.z),
        (this._w = e.w),
        this._onChangeCallback(),
        this
      );
    }
    setFromEuler(e, t) {
      const n = e._x,
        i = e._y,
        s = e._z,
        r = e._order,
        a = Math.cos,
        l = Math.sin,
        c = a(n / 2),
        h = a(i / 2),
        u = a(s / 2),
        d = l(n / 2),
        p = l(i / 2),
        g = l(s / 2);
      switch (r) {
        case "XYZ":
          (this._x = d * h * u + c * p * g),
            (this._y = c * p * u - d * h * g),
            (this._z = c * h * g + d * p * u),
            (this._w = c * h * u - d * p * g);
          break;
        case "YXZ":
          (this._x = d * h * u + c * p * g),
            (this._y = c * p * u - d * h * g),
            (this._z = c * h * g - d * p * u),
            (this._w = c * h * u + d * p * g);
          break;
        case "ZXY":
          (this._x = d * h * u - c * p * g),
            (this._y = c * p * u + d * h * g),
            (this._z = c * h * g + d * p * u),
            (this._w = c * h * u - d * p * g);
          break;
        case "ZYX":
          (this._x = d * h * u - c * p * g),
            (this._y = c * p * u + d * h * g),
            (this._z = c * h * g - d * p * u),
            (this._w = c * h * u + d * p * g);
          break;
        case "YZX":
          (this._x = d * h * u + c * p * g),
            (this._y = c * p * u + d * h * g),
            (this._z = c * h * g - d * p * u),
            (this._w = c * h * u - d * p * g);
          break;
        case "XZY":
          (this._x = d * h * u - c * p * g),
            (this._y = c * p * u - d * h * g),
            (this._z = c * h * g + d * p * u),
            (this._w = c * h * u + d * p * g);
          break;
        default:
          console.warn(
            "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + r
          );
      }
      return t !== !1 && this._onChangeCallback(), this;
    }
    setFromAxisAngle(e, t) {
      const n = t / 2,
        i = Math.sin(n);
      return (
        (this._x = e.x * i),
        (this._y = e.y * i),
        (this._z = e.z * i),
        (this._w = Math.cos(n)),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(e) {
      const t = e.elements,
        n = t[0],
        i = t[4],
        s = t[8],
        r = t[1],
        a = t[5],
        l = t[9],
        c = t[2],
        h = t[6],
        u = t[10],
        d = n + a + u;
      if (d > 0) {
        const p = 0.5 / Math.sqrt(d + 1);
        (this._w = 0.25 / p),
          (this._x = (h - l) * p),
          (this._y = (s - c) * p),
          (this._z = (r - i) * p);
      } else if (n > a && n > u) {
        const p = 2 * Math.sqrt(1 + n - a - u);
        (this._w = (h - l) / p),
          (this._x = 0.25 * p),
          (this._y = (i + r) / p),
          (this._z = (s + c) / p);
      } else if (a > u) {
        const p = 2 * Math.sqrt(1 + a - n - u);
        (this._w = (s - c) / p),
          (this._x = (i + r) / p),
          (this._y = 0.25 * p),
          (this._z = (l + h) / p);
      } else {
        const p = 2 * Math.sqrt(1 + u - n - a);
        (this._w = (r - i) / p),
          (this._x = (s + c) / p),
          (this._y = (l + h) / p),
          (this._z = 0.25 * p);
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(e, t) {
      let n = e.dot(t) + 1;
      return (
        n < Number.EPSILON
          ? ((n = 0),
            Math.abs(e.x) > Math.abs(e.z)
              ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
              : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
          : ((this._x = e.y * t.z - e.z * t.y),
            (this._y = e.z * t.x - e.x * t.z),
            (this._z = e.x * t.y - e.y * t.x),
            (this._w = n)),
        this.normalize()
      );
    }
    angleTo(e) {
      return 2 * Math.acos(Math.abs(ht(this.dot(e), -1, 1)));
    }
    rotateTowards(e, t) {
      const n = this.angleTo(e);
      if (n === 0) return this;
      const i = Math.min(1, t / n);
      return this.slerp(e, i), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return (
        (this._x *= -1),
        (this._y *= -1),
        (this._z *= -1),
        this._onChangeCallback(),
        this
      );
    }
    dot(e) {
      return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
    }
    lengthSq() {
      return (
        this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
      );
    }
    length() {
      return Math.sqrt(
        this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w
      );
    }
    normalize() {
      let e = this.length();
      return (
        e === 0
          ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
          : ((e = 1 / e),
            (this._x = this._x * e),
            (this._y = this._y * e),
            (this._z = this._z * e),
            (this._w = this._w * e)),
        this._onChangeCallback(),
        this
      );
    }
    multiply(e) {
      return this.multiplyQuaternions(this, e);
    }
    premultiply(e) {
      return this.multiplyQuaternions(e, this);
    }
    multiplyQuaternions(e, t) {
      const n = e._x,
        i = e._y,
        s = e._z,
        r = e._w,
        a = t._x,
        l = t._y,
        c = t._z,
        h = t._w;
      return (
        (this._x = n * h + r * a + i * c - s * l),
        (this._y = i * h + r * l + s * a - n * c),
        (this._z = s * h + r * c + n * l - i * a),
        (this._w = r * h - n * a - i * l - s * c),
        this._onChangeCallback(),
        this
      );
    }
    slerp(e, t) {
      if (t === 0) return this;
      if (t === 1) return this.copy(e);
      const n = this._x,
        i = this._y,
        s = this._z,
        r = this._w;
      let a = r * e._w + n * e._x + i * e._y + s * e._z;
      if (
        (a < 0
          ? ((this._w = -e._w),
            (this._x = -e._x),
            (this._y = -e._y),
            (this._z = -e._z),
            (a = -a))
          : this.copy(e),
        a >= 1)
      )
        return (this._w = r), (this._x = n), (this._y = i), (this._z = s), this;
      const l = 1 - a * a;
      if (l <= Number.EPSILON) {
        const p = 1 - t;
        return (
          (this._w = p * r + t * this._w),
          (this._x = p * n + t * this._x),
          (this._y = p * i + t * this._y),
          (this._z = p * s + t * this._z),
          this.normalize(),
          this._onChangeCallback(),
          this
        );
      }
      const c = Math.sqrt(l),
        h = Math.atan2(c, a),
        u = Math.sin((1 - t) * h) / c,
        d = Math.sin(t * h) / c;
      return (
        (this._w = r * u + this._w * d),
        (this._x = n * u + this._x * d),
        (this._y = i * u + this._y * d),
        (this._z = s * u + this._z * d),
        this._onChangeCallback(),
        this
      );
    }
    slerpQuaternions(e, t, n) {
      return this.copy(e).slerp(t, n);
    }
    random() {
      const e = Math.random(),
        t = Math.sqrt(1 - e),
        n = Math.sqrt(e),
        i = 2 * Math.PI * Math.random(),
        s = 2 * Math.PI * Math.random();
      return this.set(
        t * Math.cos(i),
        n * Math.sin(s),
        n * Math.cos(s),
        t * Math.sin(i)
      );
    }
    equals(e) {
      return (
        e._x === this._x &&
        e._y === this._y &&
        e._z === this._z &&
        e._w === this._w
      );
    }
    fromArray(e, t = 0) {
      return (
        (this._x = e[t]),
        (this._y = e[t + 1]),
        (this._z = e[t + 2]),
        (this._w = e[t + 3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this._x),
        (e[t + 1] = this._y),
        (e[t + 2] = this._z),
        (e[t + 3] = this._w),
        e
      );
    }
    fromBufferAttribute(e, t) {
      return (
        (this._x = e.getX(t)),
        (this._y = e.getY(t)),
        (this._z = e.getZ(t)),
        (this._w = e.getW(t)),
        this
      );
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(e) {
      return (this._onChangeCallback = e), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  }
  class R {
    constructor(e = 0, t = 0, n = 0) {
      (R.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
    }
    set(e, t, n) {
      return (
        n === void 0 && (n = this.z),
        (this.x = e),
        (this.y = t),
        (this.z = n),
        this
      );
    }
    setScalar(e) {
      return (this.x = e), (this.y = e), (this.z = e), this;
    }
    setX(e) {
      return (this.x = e), this;
    }
    setY(e) {
      return (this.y = e), this;
    }
    setZ(e) {
      return (this.z = e), this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(e) {
      return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
    }
    add(e) {
      return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
    }
    addScalar(e) {
      return (this.x += e), (this.y += e), (this.z += e), this;
    }
    addVectors(e, t) {
      return (
        (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
      );
    }
    addScaledVector(e, t) {
      return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
    }
    sub(e) {
      return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
    }
    subScalar(e) {
      return (this.x -= e), (this.y -= e), (this.z -= e), this;
    }
    subVectors(e, t) {
      return (
        (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
      );
    }
    multiply(e) {
      return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
    }
    multiplyScalar(e) {
      return (this.x *= e), (this.y *= e), (this.z *= e), this;
    }
    multiplyVectors(e, t) {
      return (
        (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
      );
    }
    applyEuler(e) {
      return this.applyQuaternion(To.setFromEuler(e));
    }
    applyAxisAngle(e, t) {
      return this.applyQuaternion(To.setFromAxisAngle(e, t));
    }
    applyMatrix3(e) {
      const t = this.x,
        n = this.y,
        i = this.z,
        s = e.elements;
      return (
        (this.x = s[0] * t + s[3] * n + s[6] * i),
        (this.y = s[1] * t + s[4] * n + s[7] * i),
        (this.z = s[2] * t + s[5] * n + s[8] * i),
        this
      );
    }
    applyNormalMatrix(e) {
      return this.applyMatrix3(e).normalize();
    }
    applyMatrix4(e) {
      const t = this.x,
        n = this.y,
        i = this.z,
        s = e.elements,
        r = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
      return (
        (this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * r),
        (this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * r),
        (this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * r),
        this
      );
    }
    applyQuaternion(e) {
      const t = this.x,
        n = this.y,
        i = this.z,
        s = e.x,
        r = e.y,
        a = e.z,
        l = e.w,
        c = l * t + r * i - a * n,
        h = l * n + a * t - s * i,
        u = l * i + s * n - r * t,
        d = -s * t - r * n - a * i;
      return (
        (this.x = c * l + d * -s + h * -a - u * -r),
        (this.y = h * l + d * -r + u * -s - c * -a),
        (this.z = u * l + d * -a + c * -r - h * -s),
        this
      );
    }
    project(e) {
      return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
        e.projectionMatrix
      );
    }
    unproject(e) {
      return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
        e.matrixWorld
      );
    }
    transformDirection(e) {
      const t = this.x,
        n = this.y,
        i = this.z,
        s = e.elements;
      return (
        (this.x = s[0] * t + s[4] * n + s[8] * i),
        (this.y = s[1] * t + s[5] * n + s[9] * i),
        (this.z = s[2] * t + s[6] * n + s[10] * i),
        this.normalize()
      );
    }
    divide(e) {
      return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        (this.z = Math.min(this.z, e.z)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        (this.z = Math.max(this.z, e.z)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = Math.max(e.x, Math.min(t.x, this.x))),
        (this.y = Math.max(e.y, Math.min(t.y, this.y))),
        (this.z = Math.max(e.z, Math.min(t.z, this.z))),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = Math.max(e, Math.min(t, this.x))),
        (this.y = Math.max(e, Math.min(t, this.y))),
        (this.z = Math.max(e, Math.min(t, this.z))),
        this
      );
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(e, Math.min(t, n))
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
        this
      );
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        (this.z += (e.z - this.z) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        (this.z = e.z + (t.z - e.z) * n),
        this
      );
    }
    cross(e) {
      return this.crossVectors(this, e);
    }
    crossVectors(e, t) {
      const n = e.x,
        i = e.y,
        s = e.z,
        r = t.x,
        a = t.y,
        l = t.z;
      return (
        (this.x = i * l - s * a),
        (this.y = s * r - n * l),
        (this.z = n * a - i * r),
        this
      );
    }
    projectOnVector(e) {
      const t = e.lengthSq();
      if (t === 0) return this.set(0, 0, 0);
      const n = e.dot(this) / t;
      return this.copy(e).multiplyScalar(n);
    }
    projectOnPlane(e) {
      return or.copy(this).projectOnVector(e), this.sub(or);
    }
    reflect(e) {
      return this.sub(or.copy(e).multiplyScalar(2 * this.dot(e)));
    }
    angleTo(e) {
      const t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      const n = this.dot(e) / t;
      return Math.acos(ht(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x,
        n = this.y - e.y,
        i = this.z - e.z;
      return t * t + n * n + i * i;
    }
    manhattanDistanceTo(e) {
      return (
        Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
      );
    }
    setFromSpherical(e) {
      return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    }
    setFromSphericalCoords(e, t, n) {
      const i = Math.sin(t) * e;
      return (
        (this.x = i * Math.sin(n)),
        (this.y = Math.cos(t) * e),
        (this.z = i * Math.cos(n)),
        this
      );
    }
    setFromCylindrical(e) {
      return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    }
    setFromCylindricalCoords(e, t, n) {
      return (
        (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
      );
    }
    setFromMatrixPosition(e) {
      const t = e.elements;
      return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
    }
    setFromMatrixScale(e) {
      const t = this.setFromMatrixColumn(e, 0).length(),
        n = this.setFromMatrixColumn(e, 1).length(),
        i = this.setFromMatrixColumn(e, 2).length();
      return (this.x = t), (this.y = n), (this.z = i), this;
    }
    setFromMatrixColumn(e, t) {
      return this.fromArray(e.elements, t * 4);
    }
    setFromMatrix3Column(e, t) {
      return this.fromArray(e.elements, t * 3);
    }
    setFromEuler(e) {
      return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
    }
    setFromColor(e) {
      return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z;
    }
    fromArray(e, t = 0) {
      return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
    }
    toArray(e = [], t = 0) {
      return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
    }
    fromBufferAttribute(e, t) {
      return (
        (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        this
      );
    }
    randomDirection() {
      const e = (Math.random() - 0.5) * 2,
        t = Math.random() * Math.PI * 2,
        n = Math.sqrt(1 - e ** 2);
      return (
        (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
      );
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  }
  const or = new R(),
    To = new Gt();
  class hn {
    constructor(
      e = new R(1 / 0, 1 / 0, 1 / 0),
      t = new R(-1 / 0, -1 / 0, -1 / 0)
    ) {
      (this.isBox3 = !0), (this.min = e), (this.max = t);
    }
    set(e, t) {
      return this.min.copy(e), this.max.copy(t), this;
    }
    setFromArray(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t += 3)
        this.expandByPoint(Qt.fromArray(e, t));
      return this;
    }
    setFromBufferAttribute(e) {
      this.makeEmpty();
      for (let t = 0, n = e.count; t < n; t++)
        this.expandByPoint(Qt.fromBufferAttribute(e, t));
      return this;
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this;
    }
    setFromCenterAndSize(e, t) {
      const n = Qt.copy(t).multiplyScalar(0.5);
      return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
    }
    setFromObject(e, t = !1) {
      return this.makeEmpty(), this.expandByObject(e, t);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.min.copy(e.min), this.max.copy(e.max), this;
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    }
    isEmpty() {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    }
    getCenter(e) {
      return this.isEmpty()
        ? e.set(0, 0, 0)
        : e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
      return this.min.min(e), this.max.max(e), this;
    }
    expandByVector(e) {
      return this.min.sub(e), this.max.add(e), this;
    }
    expandByScalar(e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this;
    }
    expandByObject(e, t = !1) {
      if ((e.updateWorldMatrix(!1, !1), e.boundingBox !== void 0))
        e.boundingBox === null && e.computeBoundingBox(),
          Hn.copy(e.boundingBox),
          Hn.applyMatrix4(e.matrixWorld),
          this.union(Hn);
      else {
        const i = e.geometry;
        if (i !== void 0)
          if (t && i.attributes !== void 0 && i.attributes.position !== void 0) {
            const s = i.attributes.position;
            for (let r = 0, a = s.count; r < a; r++)
              Qt.fromBufferAttribute(s, r).applyMatrix4(e.matrixWorld),
                this.expandByPoint(Qt);
          } else
            i.boundingBox === null && i.computeBoundingBox(),
              Hn.copy(i.boundingBox),
              Hn.applyMatrix4(e.matrixWorld),
              this.union(Hn);
      }
      const n = e.children;
      for (let i = 0, s = n.length; i < s; i++) this.expandByObject(n[i], t);
      return this;
    }
    containsPoint(e) {
      return !(
        e.x < this.min.x ||
        e.x > this.max.x ||
        e.y < this.min.y ||
        e.y > this.max.y ||
        e.z < this.min.z ||
        e.z > this.max.z
      );
    }
    containsBox(e) {
      return (
        this.min.x <= e.min.x &&
        e.max.x <= this.max.x &&
        this.min.y <= e.min.y &&
        e.max.y <= this.max.y &&
        this.min.z <= e.min.z &&
        e.max.z <= this.max.z
      );
    }
    getParameter(e, t) {
      return t.set(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y),
        (e.z - this.min.z) / (this.max.z - this.min.z)
      );
    }
    intersectsBox(e) {
      return !(
        e.max.x < this.min.x ||
        e.min.x > this.max.x ||
        e.max.y < this.min.y ||
        e.min.y > this.max.y ||
        e.max.z < this.min.z ||
        e.min.z > this.max.z
      );
    }
    intersectsSphere(e) {
      return (
        this.clampPoint(e.center, Qt),
        Qt.distanceToSquared(e.center) <= e.radius * e.radius
      );
    }
    intersectsPlane(e) {
      let t, n;
      return (
        e.normal.x > 0
          ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
          : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
        e.normal.y > 0
          ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
          : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
        e.normal.z > 0
          ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
          : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
        t <= -e.constant && n >= -e.constant
      );
    }
    intersectsTriangle(e) {
      if (this.isEmpty()) return !1;
      this.getCenter(Ci),
        Qi.subVectors(this.max, Ci),
        Wn.subVectors(e.a, Ci),
        Xn.subVectors(e.b, Ci),
        qn.subVectors(e.c, Ci),
        fn.subVectors(Xn, Wn),
        pn.subVectors(qn, Xn),
        An.subVectors(Wn, qn);
      let t = [
        0,
        -fn.z,
        fn.y,
        0,
        -pn.z,
        pn.y,
        0,
        -An.z,
        An.y,
        fn.z,
        0,
        -fn.x,
        pn.z,
        0,
        -pn.x,
        An.z,
        0,
        -An.x,
        -fn.y,
        fn.x,
        0,
        -pn.y,
        pn.x,
        0,
        -An.y,
        An.x,
        0
      ];
      return !lr(t, Wn, Xn, qn, Qi) ||
        ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !lr(t, Wn, Xn, qn, Qi))
        ? !1
        : (es.crossVectors(fn, pn),
          (t = [es.x, es.y, es.z]),
          lr(t, Wn, Xn, qn, Qi));
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
      return this.clampPoint(e, Qt).distanceTo(e);
    }
    getBoundingSphere(e) {
      return (
        this.isEmpty()
          ? e.makeEmpty()
          : (this.getCenter(e.center),
            (e.radius = this.getSize(Qt).length() * 0.5)),
        e
      );
    }
    intersect(e) {
      return (
        this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    }
    union(e) {
      return this.min.min(e.min), this.max.max(e.max), this;
    }
    applyMatrix4(e) {
      return this.isEmpty()
        ? this
        : (Jt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
          Jt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
          Jt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
          Jt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
          Jt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
          Jt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
          Jt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
          Jt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
          this.setFromPoints(Jt),
          this);
    }
    translate(e) {
      return this.min.add(e), this.max.add(e), this;
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
  }
  const Jt = [
      new R(),
      new R(),
      new R(),
      new R(),
      new R(),
      new R(),
      new R(),
      new R()
    ],
    Qt = new R(),
    Hn = new hn(),
    Wn = new R(),
    Xn = new R(),
    qn = new R(),
    fn = new R(),
    pn = new R(),
    An = new R(),
    Ci = new R(),
    Qi = new R(),
    es = new R(),
    En = new R();
  function lr(o, e, t, n, i) {
    for (let s = 0, r = o.length - 3; s <= r; s += 3) {
      En.fromArray(o, s);
      const a =
          i.x * Math.abs(En.x) + i.y * Math.abs(En.y) + i.z * Math.abs(En.z),
        l = e.dot(En),
        c = t.dot(En),
        h = n.dot(En);
      if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a) return !1;
    }
    return !0;
  }
  const Au = new hn(),
    Ri = new R(),
    cr = new R();
  class un {
    constructor(e = new R(), t = -1) {
      (this.center = e), (this.radius = t);
    }
    set(e, t) {
      return this.center.copy(e), (this.radius = t), this;
    }
    setFromPoints(e, t) {
      const n = this.center;
      t !== void 0 ? n.copy(t) : Au.setFromPoints(e).getCenter(n);
      let i = 0;
      for (let s = 0, r = e.length; s < r; s++)
        i = Math.max(i, n.distanceToSquared(e[s]));
      return (this.radius = Math.sqrt(i)), this;
    }
    copy(e) {
      return this.center.copy(e.center), (this.radius = e.radius), this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), (this.radius = -1), this;
    }
    containsPoint(e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(e) {
      return e.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(e) {
      const t = this.radius + e.radius;
      return e.center.distanceToSquared(this.center) <= t * t;
    }
    intersectsBox(e) {
      return e.intersectsSphere(this);
    }
    intersectsPlane(e) {
      return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(e, t) {
      const n = this.center.distanceToSquared(e);
      return (
        t.copy(e),
        n > this.radius * this.radius &&
          (t.sub(this.center).normalize(),
          t.multiplyScalar(this.radius).add(this.center)),
        t
      );
    }
    getBoundingBox(e) {
      return this.isEmpty()
        ? (e.makeEmpty(), e)
        : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
    }
    applyMatrix4(e) {
      return (
        this.center.applyMatrix4(e),
        (this.radius = this.radius * e.getMaxScaleOnAxis()),
        this
      );
    }
    translate(e) {
      return this.center.add(e), this;
    }
    expandByPoint(e) {
      if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
      Ri.subVectors(e, this.center);
      const t = Ri.lengthSq();
      if (t > this.radius * this.radius) {
        const n = Math.sqrt(t),
          i = (n - this.radius) * 0.5;
        this.center.addScaledVector(Ri, i / n), (this.radius += i);
      }
      return this;
    }
    union(e) {
      return e.isEmpty()
        ? this
        : this.isEmpty()
        ? (this.copy(e), this)
        : (this.center.equals(e.center) === !0
            ? (this.radius = Math.max(this.radius, e.radius))
            : (cr.subVectors(e.center, this.center).setLength(e.radius),
              this.expandByPoint(Ri.copy(e.center).add(cr)),
              this.expandByPoint(Ri.copy(e.center).sub(cr))),
          this);
    }
    equals(e) {
      return e.center.equals(this.center) && e.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const en = new R(),
    hr = new R(),
    ts = new R(),
    mn = new R(),
    ur = new R(),
    ns = new R(),
    dr = new R();
  class Yr {
    constructor(e = new R(), t = new R(0, 0, -1)) {
      (this.origin = e), (this.direction = t);
    }
    set(e, t) {
      return this.origin.copy(e), this.direction.copy(t), this;
    }
    copy(e) {
      return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
    }
    at(e, t) {
      return t.copy(this.origin).addScaledVector(this.direction, e);
    }
    lookAt(e) {
      return this.direction.copy(e).sub(this.origin).normalize(), this;
    }
    recast(e) {
      return this.origin.copy(this.at(e, en)), this;
    }
    closestPointToPoint(e, t) {
      t.subVectors(e, this.origin);
      const n = t.dot(this.direction);
      return n < 0
        ? t.copy(this.origin)
        : t.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(e) {
      return Math.sqrt(this.distanceSqToPoint(e));
    }
    distanceSqToPoint(e) {
      const t = en.subVectors(e, this.origin).dot(this.direction);
      return t < 0
        ? this.origin.distanceToSquared(e)
        : (en.copy(this.origin).addScaledVector(this.direction, t),
          en.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, i) {
      hr.copy(e).add(t).multiplyScalar(0.5),
        ts.copy(t).sub(e).normalize(),
        mn.copy(this.origin).sub(hr);
      const s = e.distanceTo(t) * 0.5,
        r = -this.direction.dot(ts),
        a = mn.dot(this.direction),
        l = -mn.dot(ts),
        c = mn.lengthSq(),
        h = Math.abs(1 - r * r);
      let u, d, p, g;
      if (h > 0) {
        if (((u = r * l - a), (d = r * a - l), (g = s * h), u >= 0)) {
          if (d >= -g) {
            if (d <= g) {
              const _ = 1 / h;
              (u *= _),
                (d *= _),
                (p = u * (u + r * d + 2 * a) + d * (r * u + d + 2 * l) + c);
            } else
              (d = s),
                (u = Math.max(0, -(r * d + a))),
                (p = -u * u + d * (d + 2 * l) + c);
          } else
            (d = -s),
              (u = Math.max(0, -(r * d + a))),
              (p = -u * u + d * (d + 2 * l) + c);
        } else
          d <= -g
            ? ((u = Math.max(0, -(-r * s + a))),
              (d = u > 0 ? -s : Math.min(Math.max(-s, -l), s)),
              (p = -u * u + d * (d + 2 * l) + c))
            : d <= g
            ? ((u = 0),
              (d = Math.min(Math.max(-s, -l), s)),
              (p = d * (d + 2 * l) + c))
            : ((u = Math.max(0, -(r * s + a))),
              (d = u > 0 ? s : Math.min(Math.max(-s, -l), s)),
              (p = -u * u + d * (d + 2 * l) + c));
      } else
        (d = r > 0 ? -s : s),
          (u = Math.max(0, -(r * d + a))),
          (p = -u * u + d * (d + 2 * l) + c);
      return (
        n && n.copy(this.origin).addScaledVector(this.direction, u),
        i && i.copy(hr).addScaledVector(ts, d),
        p
      );
    }
    intersectSphere(e, t) {
      en.subVectors(e.center, this.origin);
      const n = en.dot(this.direction),
        i = en.dot(en) - n * n,
        s = e.radius * e.radius;
      if (i > s) return null;
      const r = Math.sqrt(s - i),
        a = n - r,
        l = n + r;
      return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
    }
    intersectsSphere(e) {
      return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
    distanceToPlane(e) {
      const t = e.normal.dot(this.direction);
      if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
      const n = -(this.origin.dot(e.normal) + e.constant) / t;
      return n >= 0 ? n : null;
    }
    intersectPlane(e, t) {
      const n = this.distanceToPlane(e);
      return n === null ? null : this.at(n, t);
    }
    intersectsPlane(e) {
      const t = e.distanceToPoint(this.origin);
      return t === 0 || e.normal.dot(this.direction) * t < 0;
    }
    intersectBox(e, t) {
      let n, i, s, r, a, l;
      const c = 1 / this.direction.x,
        h = 1 / this.direction.y,
        u = 1 / this.direction.z,
        d = this.origin;
      return (
        c >= 0
          ? ((n = (e.min.x - d.x) * c), (i = (e.max.x - d.x) * c))
          : ((n = (e.max.x - d.x) * c), (i = (e.min.x - d.x) * c)),
        h >= 0
          ? ((s = (e.min.y - d.y) * h), (r = (e.max.y - d.y) * h))
          : ((s = (e.max.y - d.y) * h), (r = (e.min.y - d.y) * h)),
        n > r ||
        s > i ||
        ((s > n || isNaN(n)) && (n = s),
        (r < i || isNaN(i)) && (i = r),
        u >= 0
          ? ((a = (e.min.z - d.z) * u), (l = (e.max.z - d.z) * u))
          : ((a = (e.max.z - d.z) * u), (l = (e.min.z - d.z) * u)),
        n > l || a > i) ||
        ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0)
          ? null
          : this.at(n >= 0 ? n : i, t)
      );
    }
    intersectsBox(e) {
      return this.intersectBox(e, en) !== null;
    }
    intersectTriangle(e, t, n, i, s) {
      ur.subVectors(t, e), ns.subVectors(n, e), dr.crossVectors(ur, ns);
      let r = this.direction.dot(dr),
        a;
      if (r > 0) {
        if (i) return null;
        a = 1;
      } else if (r < 0) (a = -1), (r = -r);
      else return null;
      mn.subVectors(this.origin, e);
      const l = a * this.direction.dot(ns.crossVectors(mn, ns));
      if (l < 0) return null;
      const c = a * this.direction.dot(ur.cross(mn));
      if (c < 0 || l + c > r) return null;
      const h = -a * mn.dot(dr);
      return h < 0 ? null : this.at(h / r, s);
    }
    applyMatrix4(e) {
      return (
        this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
      );
    }
    equals(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class Re {
    constructor() {
      (Re.prototype.isMatrix4 = !0),
        (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    set(e, t, n, i, s, r, a, l, c, h, u, d, p, g, _, m) {
      const f = this.elements;
      return (
        (f[0] = e),
        (f[4] = t),
        (f[8] = n),
        (f[12] = i),
        (f[1] = s),
        (f[5] = r),
        (f[9] = a),
        (f[13] = l),
        (f[2] = c),
        (f[6] = h),
        (f[10] = u),
        (f[14] = d),
        (f[3] = p),
        (f[7] = g),
        (f[11] = _),
        (f[15] = m),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new Re().fromArray(this.elements);
    }
    copy(e) {
      const t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        (t[9] = n[9]),
        (t[10] = n[10]),
        (t[11] = n[11]),
        (t[12] = n[12]),
        (t[13] = n[13]),
        (t[14] = n[14]),
        (t[15] = n[15]),
        this
      );
    }
    copyPosition(e) {
      const t = this.elements,
        n = e.elements;
      return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
    }
    setFromMatrix3(e) {
      const t = e.elements;
      return (
        this.set(
          t[0],
          t[3],
          t[6],
          0,
          t[1],
          t[4],
          t[7],
          0,
          t[2],
          t[5],
          t[8],
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractBasis(e, t, n) {
      return (
        e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
      );
    }
    makeBasis(e, t, n) {
      return (
        this.set(
          e.x,
          t.x,
          n.x,
          0,
          e.y,
          t.y,
          n.y,
          0,
          e.z,
          t.z,
          n.z,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    extractRotation(e) {
      const t = this.elements,
        n = e.elements,
        i = 1 / jn.setFromMatrixColumn(e, 0).length(),
        s = 1 / jn.setFromMatrixColumn(e, 1).length(),
        r = 1 / jn.setFromMatrixColumn(e, 2).length();
      return (
        (t[0] = n[0] * i),
        (t[1] = n[1] * i),
        (t[2] = n[2] * i),
        (t[3] = 0),
        (t[4] = n[4] * s),
        (t[5] = n[5] * s),
        (t[6] = n[6] * s),
        (t[7] = 0),
        (t[8] = n[8] * r),
        (t[9] = n[9] * r),
        (t[10] = n[10] * r),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromEuler(e) {
      const t = this.elements,
        n = e.x,
        i = e.y,
        s = e.z,
        r = Math.cos(n),
        a = Math.sin(n),
        l = Math.cos(i),
        c = Math.sin(i),
        h = Math.cos(s),
        u = Math.sin(s);
      if (e.order === "XYZ") {
        const d = r * h,
          p = r * u,
          g = a * h,
          _ = a * u;
        (t[0] = l * h),
          (t[4] = -l * u),
          (t[8] = c),
          (t[1] = p + g * c),
          (t[5] = d - _ * c),
          (t[9] = -a * l),
          (t[2] = _ - d * c),
          (t[6] = g + p * c),
          (t[10] = r * l);
      } else if (e.order === "YXZ") {
        const d = l * h,
          p = l * u,
          g = c * h,
          _ = c * u;
        (t[0] = d + _ * a),
          (t[4] = g * a - p),
          (t[8] = r * c),
          (t[1] = r * u),
          (t[5] = r * h),
          (t[9] = -a),
          (t[2] = p * a - g),
          (t[6] = _ + d * a),
          (t[10] = r * l);
      } else if (e.order === "ZXY") {
        const d = l * h,
          p = l * u,
          g = c * h,
          _ = c * u;
        (t[0] = d - _ * a),
          (t[4] = -r * u),
          (t[8] = g + p * a),
          (t[1] = p + g * a),
          (t[5] = r * h),
          (t[9] = _ - d * a),
          (t[2] = -r * c),
          (t[6] = a),
          (t[10] = r * l);
      } else if (e.order === "ZYX") {
        const d = r * h,
          p = r * u,
          g = a * h,
          _ = a * u;
        (t[0] = l * h),
          (t[4] = g * c - p),
          (t[8] = d * c + _),
          (t[1] = l * u),
          (t[5] = _ * c + d),
          (t[9] = p * c - g),
          (t[2] = -c),
          (t[6] = a * l),
          (t[10] = r * l);
      } else if (e.order === "YZX") {
        const d = r * l,
          p = r * c,
          g = a * l,
          _ = a * c;
        (t[0] = l * h),
          (t[4] = _ - d * u),
          (t[8] = g * u + p),
          (t[1] = u),
          (t[5] = r * h),
          (t[9] = -a * h),
          (t[2] = -c * h),
          (t[6] = p * u + g),
          (t[10] = d - _ * u);
      } else if (e.order === "XZY") {
        const d = r * l,
          p = r * c,
          g = a * l,
          _ = a * c;
        (t[0] = l * h),
          (t[4] = -u),
          (t[8] = c * h),
          (t[1] = d * u + _),
          (t[5] = r * h),
          (t[9] = p * u - g),
          (t[2] = g * u - p),
          (t[6] = a * h),
          (t[10] = _ * u + d);
      }
      return (
        (t[3] = 0),
        (t[7] = 0),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromQuaternion(e) {
      return this.compose(Eu, e, wu);
    }
    lookAt(e, t, n) {
      const i = this.elements;
      return (
        Et.subVectors(e, t),
        Et.lengthSq() === 0 && (Et.z = 1),
        Et.normalize(),
        gn.crossVectors(n, Et),
        gn.lengthSq() === 0 &&
          (Math.abs(n.z) === 1 ? (Et.x += 1e-4) : (Et.z += 1e-4),
          Et.normalize(),
          gn.crossVectors(n, Et)),
        gn.normalize(),
        is.crossVectors(Et, gn),
        (i[0] = gn.x),
        (i[4] = is.x),
        (i[8] = Et.x),
        (i[1] = gn.y),
        (i[5] = is.y),
        (i[9] = Et.y),
        (i[2] = gn.z),
        (i[6] = is.z),
        (i[10] = Et.z),
        this
      );
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements,
        i = t.elements,
        s = this.elements,
        r = n[0],
        a = n[4],
        l = n[8],
        c = n[12],
        h = n[1],
        u = n[5],
        d = n[9],
        p = n[13],
        g = n[2],
        _ = n[6],
        m = n[10],
        f = n[14],
        b = n[3],
        v = n[7],
        y = n[11],
        A = n[15],
        C = i[0],
        I = i[4],
        D = i[8],
        S = i[12],
        E = i[1],
        W = i[5],
        j = i[9],
        P = i[13],
        O = i[2],
        F = i[6],
        Q = i[10],
        $ = i[14],
        X = i[3],
        Y = i[7],
        ee = i[11],
        ge = i[15];
      return (
        (s[0] = r * C + a * E + l * O + c * X),
        (s[4] = r * I + a * W + l * F + c * Y),
        (s[8] = r * D + a * j + l * Q + c * ee),
        (s[12] = r * S + a * P + l * $ + c * ge),
        (s[1] = h * C + u * E + d * O + p * X),
        (s[5] = h * I + u * W + d * F + p * Y),
        (s[9] = h * D + u * j + d * Q + p * ee),
        (s[13] = h * S + u * P + d * $ + p * ge),
        (s[2] = g * C + _ * E + m * O + f * X),
        (s[6] = g * I + _ * W + m * F + f * Y),
        (s[10] = g * D + _ * j + m * Q + f * ee),
        (s[14] = g * S + _ * P + m * $ + f * ge),
        (s[3] = b * C + v * E + y * O + A * X),
        (s[7] = b * I + v * W + y * F + A * Y),
        (s[11] = b * D + v * j + y * Q + A * ee),
        (s[15] = b * S + v * P + y * $ + A * ge),
        this
      );
    }
    multiplyScalar(e) {
      const t = this.elements;
      return (
        (t[0] *= e),
        (t[4] *= e),
        (t[8] *= e),
        (t[12] *= e),
        (t[1] *= e),
        (t[5] *= e),
        (t[9] *= e),
        (t[13] *= e),
        (t[2] *= e),
        (t[6] *= e),
        (t[10] *= e),
        (t[14] *= e),
        (t[3] *= e),
        (t[7] *= e),
        (t[11] *= e),
        (t[15] *= e),
        this
      );
    }
    determinant() {
      const e = this.elements,
        t = e[0],
        n = e[4],
        i = e[8],
        s = e[12],
        r = e[1],
        a = e[5],
        l = e[9],
        c = e[13],
        h = e[2],
        u = e[6],
        d = e[10],
        p = e[14],
        g = e[3],
        _ = e[7],
        m = e[11],
        f = e[15];
      return (
        g *
          (+s * l * u -
            i * c * u -
            s * a * d +
            n * c * d +
            i * a * p -
            n * l * p) +
        _ *
          (+t * l * p -
            t * c * d +
            s * r * d -
            i * r * p +
            i * c * h -
            s * l * h) +
        m *
          (+t * c * u -
            t * a * p -
            s * r * u +
            n * r * p +
            s * a * h -
            n * c * h) +
        f *
          (-i * a * h - t * l * u + t * a * d + i * r * u - n * r * d + n * l * h)
      );
    }
    transpose() {
      const e = this.elements;
      let t;
      return (
        (t = e[1]),
        (e[1] = e[4]),
        (e[4] = t),
        (t = e[2]),
        (e[2] = e[8]),
        (e[8] = t),
        (t = e[6]),
        (e[6] = e[9]),
        (e[9] = t),
        (t = e[3]),
        (e[3] = e[12]),
        (e[12] = t),
        (t = e[7]),
        (e[7] = e[13]),
        (e[13] = t),
        (t = e[11]),
        (e[11] = e[14]),
        (e[14] = t),
        this
      );
    }
    setPosition(e, t, n) {
      const i = this.elements;
      return (
        e.isVector3
          ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
          : ((i[12] = e), (i[13] = t), (i[14] = n)),
        this
      );
    }
    invert() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        i = e[2],
        s = e[3],
        r = e[4],
        a = e[5],
        l = e[6],
        c = e[7],
        h = e[8],
        u = e[9],
        d = e[10],
        p = e[11],
        g = e[12],
        _ = e[13],
        m = e[14],
        f = e[15],
        b = u * m * c - _ * d * c + _ * l * p - a * m * p - u * l * f + a * d * f,
        v = g * d * c - h * m * c - g * l * p + r * m * p + h * l * f - r * d * f,
        y = h * _ * c - g * u * c + g * a * p - r * _ * p - h * a * f + r * u * f,
        A = g * u * l - h * _ * l - g * a * d + r * _ * d + h * a * m - r * u * m,
        C = t * b + n * v + i * y + s * A;
      if (C === 0)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const I = 1 / C;
      return (
        (e[0] = b * I),
        (e[1] =
          (_ * d * s -
            u * m * s -
            _ * i * p +
            n * m * p +
            u * i * f -
            n * d * f) *
          I),
        (e[2] =
          (a * m * s -
            _ * l * s +
            _ * i * c -
            n * m * c -
            a * i * f +
            n * l * f) *
          I),
        (e[3] =
          (u * l * s -
            a * d * s -
            u * i * c +
            n * d * c +
            a * i * p -
            n * l * p) *
          I),
        (e[4] = v * I),
        (e[5] =
          (h * m * s -
            g * d * s +
            g * i * p -
            t * m * p -
            h * i * f +
            t * d * f) *
          I),
        (e[6] =
          (g * l * s -
            r * m * s -
            g * i * c +
            t * m * c +
            r * i * f -
            t * l * f) *
          I),
        (e[7] =
          (r * d * s -
            h * l * s +
            h * i * c -
            t * d * c -
            r * i * p +
            t * l * p) *
          I),
        (e[8] = y * I),
        (e[9] =
          (g * u * s -
            h * _ * s -
            g * n * p +
            t * _ * p +
            h * n * f -
            t * u * f) *
          I),
        (e[10] =
          (r * _ * s -
            g * a * s +
            g * n * c -
            t * _ * c -
            r * n * f +
            t * a * f) *
          I),
        (e[11] =
          (h * a * s -
            r * u * s -
            h * n * c +
            t * u * c +
            r * n * p -
            t * a * p) *
          I),
        (e[12] = A * I),
        (e[13] =
          (h * _ * i -
            g * u * i +
            g * n * d -
            t * _ * d -
            h * n * m +
            t * u * m) *
          I),
        (e[14] =
          (g * a * i -
            r * _ * i -
            g * n * l +
            t * _ * l +
            r * n * m -
            t * a * m) *
          I),
        (e[15] =
          (r * u * i -
            h * a * i +
            h * n * l -
            t * u * l -
            r * n * d +
            t * a * d) *
          I),
        this
      );
    }
    scale(e) {
      const t = this.elements,
        n = e.x,
        i = e.y,
        s = e.z;
      return (
        (t[0] *= n),
        (t[4] *= i),
        (t[8] *= s),
        (t[1] *= n),
        (t[5] *= i),
        (t[9] *= s),
        (t[2] *= n),
        (t[6] *= i),
        (t[10] *= s),
        (t[3] *= n),
        (t[7] *= i),
        (t[11] *= s),
        this
      );
    }
    getMaxScaleOnAxis() {
      const e = this.elements,
        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, n, i));
    }
    makeTranslation(e, t, n) {
      return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
    }
    makeRotationX(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(e, t) {
      const n = Math.cos(t),
        i = Math.sin(t),
        s = 1 - n,
        r = e.x,
        a = e.y,
        l = e.z,
        c = s * r,
        h = s * a;
      return (
        this.set(
          c * r + n,
          c * a - i * l,
          c * l + i * a,
          0,
          c * a + i * l,
          h * a + n,
          h * l - i * r,
          0,
          c * l - i * a,
          h * l + i * r,
          s * l * l + n,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    }
    makeScale(e, t, n) {
      return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(e, t, n, i, s, r) {
      return this.set(1, n, s, 0, e, 1, r, 0, t, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(e, t, n) {
      const i = this.elements,
        s = t._x,
        r = t._y,
        a = t._z,
        l = t._w,
        c = s + s,
        h = r + r,
        u = a + a,
        d = s * c,
        p = s * h,
        g = s * u,
        _ = r * h,
        m = r * u,
        f = a * u,
        b = l * c,
        v = l * h,
        y = l * u,
        A = n.x,
        C = n.y,
        I = n.z;
      return (
        (i[0] = (1 - (_ + f)) * A),
        (i[1] = (p + y) * A),
        (i[2] = (g - v) * A),
        (i[3] = 0),
        (i[4] = (p - y) * C),
        (i[5] = (1 - (d + f)) * C),
        (i[6] = (m + b) * C),
        (i[7] = 0),
        (i[8] = (g + v) * I),
        (i[9] = (m - b) * I),
        (i[10] = (1 - (d + _)) * I),
        (i[11] = 0),
        (i[12] = e.x),
        (i[13] = e.y),
        (i[14] = e.z),
        (i[15] = 1),
        this
      );
    }
    decompose(e, t, n) {
      const i = this.elements;
      let s = jn.set(i[0], i[1], i[2]).length();
      const r = jn.set(i[4], i[5], i[6]).length(),
        a = jn.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (s = -s),
        (e.x = i[12]),
        (e.y = i[13]),
        (e.z = i[14]),
        Ft.copy(this);
      const c = 1 / s,
        h = 1 / r,
        u = 1 / a;
      return (
        (Ft.elements[0] *= c),
        (Ft.elements[1] *= c),
        (Ft.elements[2] *= c),
        (Ft.elements[4] *= h),
        (Ft.elements[5] *= h),
        (Ft.elements[6] *= h),
        (Ft.elements[8] *= u),
        (Ft.elements[9] *= u),
        (Ft.elements[10] *= u),
        t.setFromRotationMatrix(Ft),
        (n.x = s),
        (n.y = r),
        (n.z = a),
        this
      );
    }
    makePerspective(e, t, n, i, s, r) {
      const a = this.elements,
        l = (2 * s) / (t - e),
        c = (2 * s) / (n - i),
        h = (t + e) / (t - e),
        u = (n + i) / (n - i),
        d = -(r + s) / (r - s),
        p = (-2 * r * s) / (r - s);
      return (
        (a[0] = l),
        (a[4] = 0),
        (a[8] = h),
        (a[12] = 0),
        (a[1] = 0),
        (a[5] = c),
        (a[9] = u),
        (a[13] = 0),
        (a[2] = 0),
        (a[6] = 0),
        (a[10] = d),
        (a[14] = p),
        (a[3] = 0),
        (a[7] = 0),
        (a[11] = -1),
        (a[15] = 0),
        this
      );
    }
    makeOrthographic(e, t, n, i, s, r) {
      const a = this.elements,
        l = 1 / (t - e),
        c = 1 / (n - i),
        h = 1 / (r - s),
        u = (t + e) * l,
        d = (n + i) * c,
        p = (r + s) * h;
      return (
        (a[0] = 2 * l),
        (a[4] = 0),
        (a[8] = 0),
        (a[12] = -u),
        (a[1] = 0),
        (a[5] = 2 * c),
        (a[9] = 0),
        (a[13] = -d),
        (a[2] = 0),
        (a[6] = 0),
        (a[10] = -2 * h),
        (a[14] = -p),
        (a[3] = 0),
        (a[7] = 0),
        (a[11] = 0),
        (a[15] = 1),
        this
      );
    }
    equals(e) {
      const t = this.elements,
        n = e.elements;
      for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        (e[t + 9] = n[9]),
        (e[t + 10] = n[10]),
        (e[t + 11] = n[11]),
        (e[t + 12] = n[12]),
        (e[t + 13] = n[13]),
        (e[t + 14] = n[14]),
        (e[t + 15] = n[15]),
        e
      );
    }
  }
  const jn = new R(),
    Ft = new Re(),
    Eu = new R(0, 0, 0),
    wu = new R(1, 1, 1),
    gn = new R(),
    is = new R(),
    Et = new R(),
    bo = new Re(),
    Ao = new Gt();
  class Ls {
    constructor(e = 0, t = 0, n = 0, i = Ls.DEFAULT_ORDER) {
      (this.isEuler = !0),
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._order = i);
    }
    get x() {
      return this._x;
    }
    set x(e) {
      (this._x = e), this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e) {
      (this._y = e), this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e) {
      (this._z = e), this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(e) {
      (this._order = e), this._onChangeCallback();
    }
    set(e, t, n, i = this._order) {
      return (
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._order = i),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e) {
      return (
        (this._x = e._x),
        (this._y = e._y),
        (this._z = e._z),
        (this._order = e._order),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(e, t = this._order, n = !0) {
      const i = e.elements,
        s = i[0],
        r = i[4],
        a = i[8],
        l = i[1],
        c = i[5],
        h = i[9],
        u = i[2],
        d = i[6],
        p = i[10];
      switch (t) {
        case "XYZ":
          (this._y = Math.asin(ht(a, -1, 1))),
            Math.abs(a) < 0.9999999
              ? ((this._x = Math.atan2(-h, p)), (this._z = Math.atan2(-r, s)))
              : ((this._x = Math.atan2(d, c)), (this._z = 0));
          break;
        case "YXZ":
          (this._x = Math.asin(-ht(h, -1, 1))),
            Math.abs(h) < 0.9999999
              ? ((this._y = Math.atan2(a, p)), (this._z = Math.atan2(l, c)))
              : ((this._y = Math.atan2(-u, s)), (this._z = 0));
          break;
        case "ZXY":
          (this._x = Math.asin(ht(d, -1, 1))),
            Math.abs(d) < 0.9999999
              ? ((this._y = Math.atan2(-u, p)), (this._z = Math.atan2(-r, c)))
              : ((this._y = 0), (this._z = Math.atan2(l, s)));
          break;
        case "ZYX":
          (this._y = Math.asin(-ht(u, -1, 1))),
            Math.abs(u) < 0.9999999
              ? ((this._x = Math.atan2(d, p)), (this._z = Math.atan2(l, s)))
              : ((this._x = 0), (this._z = Math.atan2(-r, c)));
          break;
        case "YZX":
          (this._z = Math.asin(ht(l, -1, 1))),
            Math.abs(l) < 0.9999999
              ? ((this._x = Math.atan2(-h, c)), (this._y = Math.atan2(-u, s)))
              : ((this._x = 0), (this._y = Math.atan2(a, p)));
          break;
        case "XZY":
          (this._z = Math.asin(-ht(r, -1, 1))),
            Math.abs(r) < 0.9999999
              ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(a, s)))
              : ((this._x = Math.atan2(-h, p)), (this._y = 0));
          break;
        default:
          console.warn(
            "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
              t
          );
      }
      return (this._order = t), n === !0 && this._onChangeCallback(), this;
    }
    setFromQuaternion(e, t, n) {
      return (
        bo.makeRotationFromQuaternion(e), this.setFromRotationMatrix(bo, t, n)
      );
    }
    setFromVector3(e, t = this._order) {
      return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
      return Ao.setFromEuler(this), this.setFromQuaternion(Ao, e);
    }
    equals(e) {
      return (
        e._x === this._x &&
        e._y === this._y &&
        e._z === this._z &&
        e._order === this._order
      );
    }
    fromArray(e) {
      return (
        (this._x = e[0]),
        (this._y = e[1]),
        (this._z = e[2]),
        e[3] !== void 0 && (this._order = e[3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this._x),
        (e[t + 1] = this._y),
        (e[t + 2] = this._z),
        (e[t + 3] = this._order),
        e
      );
    }
    _onChange(e) {
      return (this._onChangeCallback = e), this;
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  }
  Ls.DEFAULT_ORDER = "XYZ";
  class Zl {
    constructor() {
      this.mask = 1;
    }
    set(e) {
      this.mask = ((1 << e) | 0) >>> 0;
    }
    enable(e) {
      this.mask |= (1 << e) | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(e) {
      this.mask ^= (1 << e) | 0;
    }
    disable(e) {
      this.mask &= ~((1 << e) | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(e) {
      return (this.mask & e.mask) !== 0;
    }
    isEnabled(e) {
      return (this.mask & ((1 << e) | 0)) !== 0;
    }
  }
  let Cu = 0;
  const Eo = new R(),
    Kn = new Gt(),
    tn = new Re(),
    ss = new R(),
    Ii = new R(),
    Ru = new R(),
    Iu = new Gt(),
    wo = new R(1, 0, 0),
    Co = new R(0, 1, 0),
    Ro = new R(0, 0, 1),
    Lu = { type: "added" },
    Io = { type: "removed" };
  class qe extends kn {
    constructor() {
      super(),
        (this.isObject3D = !0),
        Object.defineProperty(this, "id", { value: Cu++ }),
        (this.uuid = Vt()),
        (this.name = ""),
        (this.type = "Object3D"),
        (this.parent = null),
        (this.children = []),
        (this.up = qe.DEFAULT_UP.clone());
      const e = new R(),
        t = new Ls(),
        n = new Gt(),
        i = new R(1, 1, 1);
      function s() {
        n.setFromEuler(t, !1);
      }
      function r() {
        t.setFromQuaternion(n, void 0, !1);
      }
      t._onChange(s),
        n._onChange(r),
        Object.defineProperties(this, {
          position: { configurable: !0, enumerable: !0, value: e },
          rotation: { configurable: !0, enumerable: !0, value: t },
          quaternion: { configurable: !0, enumerable: !0, value: n },
          scale: { configurable: !0, enumerable: !0, value: i },
          modelViewMatrix: { value: new Re() },
          normalMatrix: { value: new Pe() }
        }),
        (this.matrix = new Re()),
        (this.matrixWorld = new Re()),
        (this.matrixAutoUpdate = qe.DEFAULT_MATRIX_AUTO_UPDATE),
        (this.matrixWorldNeedsUpdate = !1),
        (this.matrixWorldAutoUpdate = qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
        (this.layers = new Zl()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.animations = []),
        (this.userData = {});
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
      this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(e) {
      return this.quaternion.premultiply(e), this;
    }
    setRotationFromAxisAngle(e, t) {
      this.quaternion.setFromAxisAngle(e, t);
    }
    setRotationFromEuler(e) {
      this.quaternion.setFromEuler(e, !0);
    }
    setRotationFromMatrix(e) {
      this.quaternion.setFromRotationMatrix(e);
    }
    setRotationFromQuaternion(e) {
      this.quaternion.copy(e);
    }
    rotateOnAxis(e, t) {
      return Kn.setFromAxisAngle(e, t), this.quaternion.multiply(Kn), this;
    }
    rotateOnWorldAxis(e, t) {
      return Kn.setFromAxisAngle(e, t), this.quaternion.premultiply(Kn), this;
    }
    rotateX(e) {
      return this.rotateOnAxis(wo, e);
    }
    rotateY(e) {
      return this.rotateOnAxis(Co, e);
    }
    rotateZ(e) {
      return this.rotateOnAxis(Ro, e);
    }
    translateOnAxis(e, t) {
      return (
        Eo.copy(e).applyQuaternion(this.quaternion),
        this.position.add(Eo.multiplyScalar(t)),
        this
      );
    }
    translateX(e) {
      return this.translateOnAxis(wo, e);
    }
    translateY(e) {
      return this.translateOnAxis(Co, e);
    }
    translateZ(e) {
      return this.translateOnAxis(Ro, e);
    }
    localToWorld(e) {
      return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(tn.copy(this.matrixWorld).invert())
      );
    }
    lookAt(e, t, n) {
      e.isVector3 ? ss.copy(e) : ss.set(e, t, n);
      const i = this.parent;
      this.updateWorldMatrix(!0, !1),
        Ii.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight
          ? tn.lookAt(Ii, ss, this.up)
          : tn.lookAt(ss, Ii, this.up),
        this.quaternion.setFromRotationMatrix(tn),
        i &&
          (tn.extractRotation(i.matrixWorld),
          Kn.setFromRotationMatrix(tn),
          this.quaternion.premultiply(Kn.invert()));
    }
    add(e) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
        return this;
      }
      return e === this
        ? (console.error(
            "THREE.Object3D.add: object can't be added as a child of itself.",
            e
          ),
          this)
        : (e && e.isObject3D
            ? (e.parent !== null && e.parent.remove(e),
              (e.parent = this),
              this.children.push(e),
              e.dispatchEvent(Lu))
            : console.error(
                "THREE.Object3D.add: object not an instance of THREE.Object3D.",
                e
              ),
          this);
    }
    remove(e) {
      if (arguments.length > 1) {
        for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
        return this;
      }
      const t = this.children.indexOf(e);
      return (
        t !== -1 &&
          ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(Io)),
        this
      );
    }
    removeFromParent() {
      const e = this.parent;
      return e !== null && e.remove(this), this;
    }
    clear() {
      for (let e = 0; e < this.children.length; e++) {
        const t = this.children[e];
        (t.parent = null), t.dispatchEvent(Io);
      }
      return (this.children.length = 0), this;
    }
    attach(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        tn.copy(this.matrixWorld).invert(),
        e.parent !== null &&
          (e.parent.updateWorldMatrix(!0, !1), tn.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(tn),
        this.add(e),
        e.updateWorldMatrix(!1, !0),
        this
      );
    }
    getObjectById(e) {
      return this.getObjectByProperty("id", e);
    }
    getObjectByName(e) {
      return this.getObjectByProperty("name", e);
    }
    getObjectByProperty(e, t) {
      if (this[e] === t) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        const r = this.children[n].getObjectByProperty(e, t);
        if (r !== void 0) return r;
      }
    }
    getObjectsByProperty(e, t) {
      let n = [];
      this[e] === t && n.push(this);
      for (let i = 0, s = this.children.length; i < s; i++) {
        const r = this.children[i].getObjectsByProperty(e, t);
        r.length > 0 && (n = n.concat(r));
      }
      return n;
    }
    getWorldPosition(e) {
      return (
        this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
      );
    }
    getWorldQuaternion(e) {
      return (
        this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ii, e, Ru), e
      );
    }
    getWorldScale(e) {
      return (
        this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ii, Iu, e), e
      );
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(!0, !1);
      const t = this.matrixWorld.elements;
      return e.set(t[8], t[9], t[10]).normalize();
    }
    raycast() {}
    traverse(e) {
      e(this);
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
    }
    traverseVisible(e) {
      if (this.visible === !1) return;
      e(this);
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
    }
    traverseAncestors(e) {
      const t = this.parent;
      t !== null && (e(t), t.traverseAncestors(e));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale),
        (this.matrixWorldNeedsUpdate = !0);
    }
    updateMatrixWorld(e) {
      this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              ),
          (this.matrixWorldNeedsUpdate = !1),
          (e = !0));
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++) {
        const s = t[n];
        (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
      }
    }
    updateWorldMatrix(e, t) {
      const n = this.parent;
      if (
        (e === !0 &&
          n !== null &&
          n.matrixWorldAutoUpdate === !0 &&
          n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        t === !0)
      ) {
        const i = this.children;
        for (let s = 0, r = i.length; s < r; s++) {
          const a = i[s];
          a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
        }
      }
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string",
        n = {};
      t &&
        ((e = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
          nodes: {}
        }),
        (n.metadata = {
          version: 4.5,
          type: "Object",
          generator: "Object3D.toJSON"
        }));
      const i = {};
      (i.uuid = this.uuid),
        (i.type = this.type),
        this.name !== "" && (i.name = this.name),
        this.castShadow === !0 && (i.castShadow = !0),
        this.receiveShadow === !0 && (i.receiveShadow = !0),
        this.visible === !1 && (i.visible = !1),
        this.frustumCulled === !1 && (i.frustumCulled = !1),
        this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
        Object.keys(this.userData).length > 0 && (i.userData = this.userData),
        (i.layers = this.layers.mask),
        (i.matrix = this.matrix.toArray()),
        (i.up = this.up.toArray()),
        this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
        this.isInstancedMesh &&
          ((i.type = "InstancedMesh"),
          (i.count = this.count),
          (i.instanceMatrix = this.instanceMatrix.toJSON()),
          this.instanceColor !== null &&
            (i.instanceColor = this.instanceColor.toJSON()));
      function s(a, l) {
        return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
      }
      if (this.isScene)
        this.background &&
          (this.background.isColor
            ? (i.background = this.background.toJSON())
            : this.background.isTexture &&
              (i.background = this.background.toJSON(e).uuid)),
          this.environment &&
            this.environment.isTexture &&
            this.environment.isRenderTargetTexture !== !0 &&
            (i.environment = this.environment.toJSON(e).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = s(e.geometries, this.geometry);
        const a = this.geometry.parameters;
        if (a !== void 0 && a.shapes !== void 0) {
          const l = a.shapes;
          if (Array.isArray(l))
            for (let c = 0, h = l.length; c < h; c++) {
              const u = l[c];
              s(e.shapes, u);
            }
          else s(e.shapes, l);
        }
      }
      if (
        (this.isSkinnedMesh &&
          ((i.bindMode = this.bindMode),
          (i.bindMatrix = this.bindMatrix.toArray()),
          this.skeleton !== void 0 &&
            (s(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
        this.material !== void 0)
      )
        if (Array.isArray(this.material)) {
          const a = [];
          for (let l = 0, c = this.material.length; l < c; l++)
            a.push(s(e.materials, this.material[l]));
          i.material = a;
        } else i.material = s(e.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let a = 0; a < this.children.length; a++)
          i.children.push(this.children[a].toJSON(e).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let a = 0; a < this.animations.length; a++) {
          const l = this.animations[a];
          i.animations.push(s(e.animations, l));
        }
      }
      if (t) {
        const a = r(e.geometries),
          l = r(e.materials),
          c = r(e.textures),
          h = r(e.images),
          u = r(e.shapes),
          d = r(e.skeletons),
          p = r(e.animations),
          g = r(e.nodes);
        a.length > 0 && (n.geometries = a),
          l.length > 0 && (n.materials = l),
          c.length > 0 && (n.textures = c),
          h.length > 0 && (n.images = h),
          u.length > 0 && (n.shapes = u),
          d.length > 0 && (n.skeletons = d),
          p.length > 0 && (n.animations = p),
          g.length > 0 && (n.nodes = g);
      }
      return (n.object = i), n;
      function r(a) {
        const l = [];
        for (const c in a) {
          const h = a[c];
          delete h.metadata, l.push(h);
        }
        return l;
      }
    }
    clone(e) {
      return new this.constructor().copy(this, e);
    }
    copy(e, t = !0) {
      if (
        ((this.name = e.name),
        this.up.copy(e.up),
        this.position.copy(e.position),
        (this.rotation.order = e.rotation.order),
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
        (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
        (this.layers.mask = e.layers.mask),
        (this.visible = e.visible),
        (this.castShadow = e.castShadow),
        (this.receiveShadow = e.receiveShadow),
        (this.frustumCulled = e.frustumCulled),
        (this.renderOrder = e.renderOrder),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        t === !0)
      )
        for (let n = 0; n < e.children.length; n++) {
          const i = e.children[n];
          this.add(i.clone());
        }
      return this;
    }
  }
  qe.DEFAULT_UP = new R(0, 1, 0);
  qe.DEFAULT_MATRIX_AUTO_UPDATE = !0;
  qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
  const Bt = new R(),
    nn = new R(),
    fr = new R(),
    sn = new R(),
    Yn = new R(),
    Zn = new R(),
    Lo = new R(),
    pr = new R(),
    mr = new R(),
    gr = new R();
  let rs = !1;
  class kt {
    constructor(e = new R(), t = new R(), n = new R()) {
      (this.a = e), (this.b = t), (this.c = n);
    }
    static getNormal(e, t, n, i) {
      i.subVectors(n, t), Bt.subVectors(e, t), i.cross(Bt);
      const s = i.lengthSq();
      return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
    }
    static getBarycoord(e, t, n, i, s) {
      Bt.subVectors(i, t), nn.subVectors(n, t), fr.subVectors(e, t);
      const r = Bt.dot(Bt),
        a = Bt.dot(nn),
        l = Bt.dot(fr),
        c = nn.dot(nn),
        h = nn.dot(fr),
        u = r * c - a * a;
      if (u === 0) return s.set(-2, -1, -1);
      const d = 1 / u,
        p = (c * l - a * h) * d,
        g = (r * h - a * l) * d;
      return s.set(1 - p - g, g, p);
    }
    static containsPoint(e, t, n, i) {
      return (
        this.getBarycoord(e, t, n, i, sn),
        sn.x >= 0 && sn.y >= 0 && sn.x + sn.y <= 1
      );
    }
    static getUV(e, t, n, i, s, r, a, l) {
      return (
        rs === !1 &&
          (console.warn(
            "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
          ),
          (rs = !0)),
        this.getInterpolation(e, t, n, i, s, r, a, l)
      );
    }
    static getInterpolation(e, t, n, i, s, r, a, l) {
      return (
        this.getBarycoord(e, t, n, i, sn),
        l.setScalar(0),
        l.addScaledVector(s, sn.x),
        l.addScaledVector(r, sn.y),
        l.addScaledVector(a, sn.z),
        l
      );
    }
    static isFrontFacing(e, t, n, i) {
      return Bt.subVectors(n, t), nn.subVectors(e, t), Bt.cross(nn).dot(i) < 0;
    }
    set(e, t, n) {
      return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
    }
    setFromPointsAndIndices(e, t, n, i) {
      return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
    }
    setFromAttributeAndIndices(e, t, n, i) {
      return (
        this.a.fromBufferAttribute(e, t),
        this.b.fromBufferAttribute(e, n),
        this.c.fromBufferAttribute(e, i),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
    }
    getArea() {
      return (
        Bt.subVectors(this.c, this.b),
        nn.subVectors(this.a, this.b),
        Bt.cross(nn).length() * 0.5
      );
    }
    getMidpoint(e) {
      return e
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3);
    }
    getNormal(e) {
      return kt.getNormal(this.a, this.b, this.c, e);
    }
    getPlane(e) {
      return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(e, t) {
      return kt.getBarycoord(e, this.a, this.b, this.c, t);
    }
    getUV(e, t, n, i, s) {
      return (
        rs === !1 &&
          (console.warn(
            "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
          ),
          (rs = !0)),
        kt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s)
      );
    }
    getInterpolation(e, t, n, i, s) {
      return kt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
    }
    containsPoint(e) {
      return kt.containsPoint(e, this.a, this.b, this.c);
    }
    isFrontFacing(e) {
      return kt.isFrontFacing(this.a, this.b, this.c, e);
    }
    intersectsBox(e) {
      return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
      const n = this.a,
        i = this.b,
        s = this.c;
      let r, a;
      Yn.subVectors(i, n), Zn.subVectors(s, n), pr.subVectors(e, n);
      const l = Yn.dot(pr),
        c = Zn.dot(pr);
      if (l <= 0 && c <= 0) return t.copy(n);
      mr.subVectors(e, i);
      const h = Yn.dot(mr),
        u = Zn.dot(mr);
      if (h >= 0 && u <= h) return t.copy(i);
      const d = l * u - h * c;
      if (d <= 0 && l >= 0 && h <= 0)
        return (r = l / (l - h)), t.copy(n).addScaledVector(Yn, r);
      gr.subVectors(e, s);
      const p = Yn.dot(gr),
        g = Zn.dot(gr);
      if (g >= 0 && p <= g) return t.copy(s);
      const _ = p * c - l * g;
      if (_ <= 0 && c >= 0 && g <= 0)
        return (a = c / (c - g)), t.copy(n).addScaledVector(Zn, a);
      const m = h * g - p * u;
      if (m <= 0 && u - h >= 0 && p - g >= 0)
        return (
          Lo.subVectors(s, i),
          (a = (u - h) / (u - h + (p - g))),
          t.copy(i).addScaledVector(Lo, a)
        );
      const f = 1 / (m + _ + d);
      return (
        (r = _ * f),
        (a = d * f),
        t.copy(n).addScaledVector(Yn, r).addScaledVector(Zn, a)
      );
    }
    equals(e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
  }
  let Pu = 0;
  class jt extends kn {
    constructor() {
      super(),
        (this.isMaterial = !0),
        Object.defineProperty(this, "id", { value: Pu++ }),
        (this.uuid = Vt()),
        (this.name = ""),
        (this.type = "Material"),
        (this.blending = ui),
        (this.side = Kt),
        (this.vertexColors = !1),
        (this.opacity = 1),
        (this.transparent = !1),
        (this.blendSrc = Ol),
        (this.blendDst = Ul),
        (this.blendEquation = ai),
        (this.blendSrcAlpha = null),
        (this.blendDstAlpha = null),
        (this.blendEquationAlpha = null),
        (this.depthFunc = Pr),
        (this.depthTest = !0),
        (this.depthWrite = !0),
        (this.stencilWriteMask = 255),
        (this.stencilFunc = nu),
        (this.stencilRef = 0),
        (this.stencilFuncMask = 255),
        (this.stencilFail = ir),
        (this.stencilZFail = ir),
        (this.stencilZPass = ir),
        (this.stencilWrite = !1),
        (this.clippingPlanes = null),
        (this.clipIntersection = !1),
        (this.clipShadows = !1),
        (this.shadowSide = null),
        (this.colorWrite = !0),
        (this.precision = null),
        (this.polygonOffset = !1),
        (this.polygonOffsetFactor = 0),
        (this.polygonOffsetUnits = 0),
        (this.dithering = !1),
        (this.alphaToCoverage = !1),
        (this.premultipliedAlpha = !1),
        (this.forceSinglePass = !1),
        (this.visible = !0),
        (this.toneMapped = !0),
        (this.userData = {}),
        (this.version = 0),
        (this._alphaTest = 0);
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(e) {
      this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(e) {
      if (e !== void 0)
        for (const t in e) {
          const n = e[t];
          if (n === void 0) {
            console.warn(
              `THREE.Material: parameter '${t}' has value of undefined.`
            );
            continue;
          }
          const i = this[t];
          if (i === void 0) {
            console.warn(
              `THREE.Material: '${t}' is not a property of THREE.${this.type}.`
            );
            continue;
          }
          i && i.isColor
            ? i.set(n)
            : i && i.isVector3 && n && n.isVector3
            ? i.copy(n)
            : (this[t] = n);
        }
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      t && (e = { textures: {}, images: {} });
      const n = {
        metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" }
      };
      (n.uuid = this.uuid),
        (n.type = this.type),
        this.name !== "" && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        this.roughness !== void 0 && (n.roughness = this.roughness),
        this.metalness !== void 0 && (n.metalness = this.metalness),
        this.sheen !== void 0 && (n.sheen = this.sheen),
        this.sheenColor &&
          this.sheenColor.isColor &&
          (n.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 &&
          (n.sheenRoughness = this.sheenRoughness),
        this.emissive &&
          this.emissive.isColor &&
          (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity &&
          this.emissiveIntensity !== 1 &&
          (n.emissiveIntensity = this.emissiveIntensity),
        this.specular &&
          this.specular.isColor &&
          (n.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 &&
          (n.specularIntensity = this.specularIntensity),
        this.specularColor &&
          this.specularColor.isColor &&
          (n.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (n.shininess = this.shininess),
        this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 &&
          (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap &&
          this.clearcoatMap.isTexture &&
          (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
        this.clearcoatRoughnessMap &&
          this.clearcoatRoughnessMap.isTexture &&
          (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
        this.clearcoatNormalMap &&
          this.clearcoatNormalMap.isTexture &&
          ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
          (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
        this.iridescence !== void 0 && (n.iridescence = this.iridescence),
        this.iridescenceIOR !== void 0 &&
          (n.iridescenceIOR = this.iridescenceIOR),
        this.iridescenceThicknessRange !== void 0 &&
          (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap &&
          this.iridescenceMap.isTexture &&
          (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
        this.iridescenceThicknessMap &&
          this.iridescenceThicknessMap.isTexture &&
          (n.iridescenceThicknessMap =
            this.iridescenceThicknessMap.toJSON(e).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
        this.matcap &&
          this.matcap.isTexture &&
          (n.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap &&
          this.alphaMap.isTexture &&
          (n.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap &&
          this.lightMap.isTexture &&
          ((n.lightMap = this.lightMap.toJSON(e).uuid),
          (n.lightMapIntensity = this.lightMapIntensity)),
        this.aoMap &&
          this.aoMap.isTexture &&
          ((n.aoMap = this.aoMap.toJSON(e).uuid),
          (n.aoMapIntensity = this.aoMapIntensity)),
        this.bumpMap &&
          this.bumpMap.isTexture &&
          ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
          (n.bumpScale = this.bumpScale)),
        this.normalMap &&
          this.normalMap.isTexture &&
          ((n.normalMap = this.normalMap.toJSON(e).uuid),
          (n.normalMapType = this.normalMapType),
          (n.normalScale = this.normalScale.toArray())),
        this.displacementMap &&
          this.displacementMap.isTexture &&
          ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
          (n.displacementScale = this.displacementScale),
          (n.displacementBias = this.displacementBias)),
        this.roughnessMap &&
          this.roughnessMap.isTexture &&
          (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap &&
          this.metalnessMap.isTexture &&
          (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap &&
          this.emissiveMap.isTexture &&
          (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap &&
          this.specularMap.isTexture &&
          (n.specularMap = this.specularMap.toJSON(e).uuid),
        this.specularIntensityMap &&
          this.specularIntensityMap.isTexture &&
          (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
        this.specularColorMap &&
          this.specularColorMap.isTexture &&
          (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
        this.envMap &&
          this.envMap.isTexture &&
          ((n.envMap = this.envMap.toJSON(e).uuid),
          this.combine !== void 0 && (n.combine = this.combine)),
        this.envMapIntensity !== void 0 &&
          (n.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 &&
          (n.refractionRatio = this.refractionRatio),
        this.gradientMap &&
          this.gradientMap.isTexture &&
          (n.gradientMap = this.gradientMap.toJSON(e).uuid),
        this.transmission !== void 0 && (n.transmission = this.transmission),
        this.transmissionMap &&
          this.transmissionMap.isTexture &&
          (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
        this.thickness !== void 0 && (n.thickness = this.thickness),
        this.thicknessMap &&
          this.thicknessMap.isTexture &&
          (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
        this.attenuationDistance !== void 0 &&
          this.attenuationDistance !== 1 / 0 &&
          (n.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 &&
          (n.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (n.size = this.size),
        this.shadowSide !== null && (n.shadowSide = this.shadowSide),
        this.sizeAttenuation !== void 0 &&
          (n.sizeAttenuation = this.sizeAttenuation),
        this.blending !== ui && (n.blending = this.blending),
        this.side !== Kt && (n.side = this.side),
        this.vertexColors && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        this.transparent === !0 && (n.transparent = this.transparent),
        (n.depthFunc = this.depthFunc),
        (n.depthTest = this.depthTest),
        (n.depthWrite = this.depthWrite),
        (n.colorWrite = this.colorWrite),
        (n.stencilWrite = this.stencilWrite),
        (n.stencilWriteMask = this.stencilWriteMask),
        (n.stencilFunc = this.stencilFunc),
        (n.stencilRef = this.stencilRef),
        (n.stencilFuncMask = this.stencilFuncMask),
        (n.stencilFail = this.stencilFail),
        (n.stencilZFail = this.stencilZFail),
        (n.stencilZPass = this.stencilZPass),
        this.rotation !== void 0 &&
          this.rotation !== 0 &&
          (n.rotation = this.rotation),
        this.polygonOffset === !0 && (n.polygonOffset = !0),
        this.polygonOffsetFactor !== 0 &&
          (n.polygonOffsetFactor = this.polygonOffsetFactor),
        this.polygonOffsetUnits !== 0 &&
          (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth !== void 0 &&
          this.linewidth !== 1 &&
          (n.linewidth = this.linewidth),
        this.dashSize !== void 0 && (n.dashSize = this.dashSize),
        this.gapSize !== void 0 && (n.gapSize = this.gapSize),
        this.scale !== void 0 && (n.scale = this.scale),
        this.dithering === !0 && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
        this.premultipliedAlpha === !0 &&
          (n.premultipliedAlpha = this.premultipliedAlpha),
        this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass),
        this.wireframe === !0 && (n.wireframe = this.wireframe),
        this.wireframeLinewidth > 1 &&
          (n.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== "round" &&
          (n.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== "round" &&
          (n.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading === !0 && (n.flatShading = this.flatShading),
        this.visible === !1 && (n.visible = !1),
        this.toneMapped === !1 && (n.toneMapped = !1),
        this.fog === !1 && (n.fog = !1),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData);
      function i(s) {
        const r = [];
        for (const a in s) {
          const l = s[a];
          delete l.metadata, r.push(l);
        }
        return r;
      }
      if (t) {
        const s = i(e.textures),
          r = i(e.images);
        s.length > 0 && (n.textures = s), r.length > 0 && (n.images = r);
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      (this.name = e.name),
        (this.blending = e.blending),
        (this.side = e.side),
        (this.vertexColors = e.vertexColors),
        (this.opacity = e.opacity),
        (this.transparent = e.transparent),
        (this.blendSrc = e.blendSrc),
        (this.blendDst = e.blendDst),
        (this.blendEquation = e.blendEquation),
        (this.blendSrcAlpha = e.blendSrcAlpha),
        (this.blendDstAlpha = e.blendDstAlpha),
        (this.blendEquationAlpha = e.blendEquationAlpha),
        (this.depthFunc = e.depthFunc),
        (this.depthTest = e.depthTest),
        (this.depthWrite = e.depthWrite),
        (this.stencilWriteMask = e.stencilWriteMask),
        (this.stencilFunc = e.stencilFunc),
        (this.stencilRef = e.stencilRef),
        (this.stencilFuncMask = e.stencilFuncMask),
        (this.stencilFail = e.stencilFail),
        (this.stencilZFail = e.stencilZFail),
        (this.stencilZPass = e.stencilZPass),
        (this.stencilWrite = e.stencilWrite);
      const t = e.clippingPlanes;
      let n = null;
      if (t !== null) {
        const i = t.length;
        n = new Array(i);
        for (let s = 0; s !== i; ++s) n[s] = t[s].clone();
      }
      return (
        (this.clippingPlanes = n),
        (this.clipIntersection = e.clipIntersection),
        (this.clipShadows = e.clipShadows),
        (this.shadowSide = e.shadowSide),
        (this.colorWrite = e.colorWrite),
        (this.precision = e.precision),
        (this.polygonOffset = e.polygonOffset),
        (this.polygonOffsetFactor = e.polygonOffsetFactor),
        (this.polygonOffsetUnits = e.polygonOffsetUnits),
        (this.dithering = e.dithering),
        (this.alphaTest = e.alphaTest),
        (this.alphaToCoverage = e.alphaToCoverage),
        (this.premultipliedAlpha = e.premultipliedAlpha),
        (this.forceSinglePass = e.forceSinglePass),
        (this.visible = e.visible),
        (this.toneMapped = e.toneMapped),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
  }
  const $l = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    },
    zt = { h: 0, s: 0, l: 0 },
    as = { h: 0, s: 0, l: 0 };
  function _r(o, e, t) {
    return (
      t < 0 && (t += 1),
      t > 1 && (t -= 1),
      t < 1 / 6
        ? o + (e - o) * 6 * t
        : t < 1 / 2
        ? e
        : t < 2 / 3
        ? o + (e - o) * 6 * (2 / 3 - t)
        : o
    );
  }
  class ye {
    constructor(e, t, n) {
      return (
        (this.isColor = !0),
        (this.r = 1),
        (this.g = 1),
        (this.b = 1),
        t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
      );
    }
    set(e) {
      return (
        e && e.isColor
          ? this.copy(e)
          : typeof e == "number"
          ? this.setHex(e)
          : typeof e == "string" && this.setStyle(e),
        this
      );
    }
    setScalar(e) {
      return (this.r = e), (this.g = e), (this.b = e), this;
    }
    setHex(e, t = Dt) {
      return (
        (e = Math.floor(e)),
        (this.r = ((e >> 16) & 255) / 255),
        (this.g = ((e >> 8) & 255) / 255),
        (this.b = (e & 255) / 255),
        At.toWorkingColorSpace(this, t),
        this
      );
    }
    setRGB(e, t, n, i = At.workingColorSpace) {
      return (
        (this.r = e),
        (this.g = t),
        (this.b = n),
        At.toWorkingColorSpace(this, i),
        this
      );
    }
    setHSL(e, t, n, i = At.workingColorSpace) {
      if (((e = Kr(e, 1)), (t = ht(t, 0, 1)), (n = ht(n, 0, 1)), t === 0))
        this.r = this.g = this.b = n;
      else {
        const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
          r = 2 * n - s;
        (this.r = _r(r, s, e + 1 / 3)),
          (this.g = _r(r, s, e)),
          (this.b = _r(r, s, e - 1 / 3));
      }
      return At.toWorkingColorSpace(this, i), this;
    }
    setStyle(e, t = Dt) {
      function n(s) {
        s !== void 0 &&
          parseFloat(s) < 1 &&
          console.warn(
            "THREE.Color: Alpha component of " + e + " will be ignored."
          );
      }
      let i;
      if ((i = /^(\w+)\(([^\)]*)\)/.exec(e))) {
        let s;
        const r = i[1],
          a = i[2];
        switch (r) {
          case "rgb":
          case "rgba":
            if (
              (s =
                /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  a
                ))
            )
              return (
                (this.r = Math.min(255, parseInt(s[1], 10)) / 255),
                (this.g = Math.min(255, parseInt(s[2], 10)) / 255),
                (this.b = Math.min(255, parseInt(s[3], 10)) / 255),
                At.toWorkingColorSpace(this, t),
                n(s[4]),
                this
              );
            if (
              (s =
                /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  a
                ))
            )
              return (
                (this.r = Math.min(100, parseInt(s[1], 10)) / 100),
                (this.g = Math.min(100, parseInt(s[2], 10)) / 100),
                (this.b = Math.min(100, parseInt(s[3], 10)) / 100),
                At.toWorkingColorSpace(this, t),
                n(s[4]),
                this
              );
            break;
          case "hsl":
          case "hsla":
            if (
              (s =
                /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  a
                ))
            ) {
              const l = parseFloat(s[1]) / 360,
                c = parseFloat(s[2]) / 100,
                h = parseFloat(s[3]) / 100;
              return n(s[4]), this.setHSL(l, c, h, t);
            }
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + e);
        }
      } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
        const s = i[1],
          r = s.length;
        if (r === 3)
          return this.setRGB(
            parseInt(s.charAt(0), 16) / 15,
            parseInt(s.charAt(1), 16) / 15,
            parseInt(s.charAt(2), 16) / 15,
            t
          );
        if (r === 6) return this.setHex(parseInt(s, 16), t);
        console.warn("THREE.Color: Invalid hex color " + e);
      } else if (e && e.length > 0) return this.setColorName(e, t);
      return this;
    }
    setColorName(e, t = Dt) {
      const n = $l[e.toLowerCase()];
      return (
        n !== void 0
          ? this.setHex(n, t)
          : console.warn("THREE.Color: Unknown color " + e),
        this
      );
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(e) {
      return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
    }
    copySRGBToLinear(e) {
      return (this.r = fi(e.r)), (this.g = fi(e.g)), (this.b = fi(e.b)), this;
    }
    copyLinearToSRGB(e) {
      return (this.r = rr(e.r)), (this.g = rr(e.g)), (this.b = rr(e.b)), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(e = Dt) {
      return (
        At.fromWorkingColorSpace(pt.copy(this), e),
        (ht(pt.r * 255, 0, 255) << 16) ^
          (ht(pt.g * 255, 0, 255) << 8) ^
          (ht(pt.b * 255, 0, 255) << 0)
      );
    }
    getHexString(e = Dt) {
      return ("000000" + this.getHex(e).toString(16)).slice(-6);
    }
    getHSL(e, t = At.workingColorSpace) {
      At.fromWorkingColorSpace(pt.copy(this), t);
      const n = pt.r,
        i = pt.g,
        s = pt.b,
        r = Math.max(n, i, s),
        a = Math.min(n, i, s);
      let l, c;
      const h = (a + r) / 2;
      if (a === r) (l = 0), (c = 0);
      else {
        const u = r - a;
        switch (((c = h <= 0.5 ? u / (r + a) : u / (2 - r - a)), r)) {
          case n:
            l = (i - s) / u + (i < s ? 6 : 0);
            break;
          case i:
            l = (s - n) / u + 2;
            break;
          case s:
            l = (n - i) / u + 4;
            break;
        }
        l /= 6;
      }
      return (e.h = l), (e.s = c), (e.l = h), e;
    }
    getRGB(e, t = At.workingColorSpace) {
      return (
        At.fromWorkingColorSpace(pt.copy(this), t),
        (e.r = pt.r),
        (e.g = pt.g),
        (e.b = pt.b),
        e
      );
    }
    getStyle(e = Dt) {
      At.fromWorkingColorSpace(pt.copy(this), e);
      const t = pt.r,
        n = pt.g,
        i = pt.b;
      return e !== Dt
        ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
        : `rgb(${(t * 255) | 0},${(n * 255) | 0},${(i * 255) | 0})`;
    }
    offsetHSL(e, t, n) {
      return (
        this.getHSL(zt),
        (zt.h += e),
        (zt.s += t),
        (zt.l += n),
        this.setHSL(zt.h, zt.s, zt.l),
        this
      );
    }
    add(e) {
      return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
    }
    addColors(e, t) {
      return (
        (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
      );
    }
    addScalar(e) {
      return (this.r += e), (this.g += e), (this.b += e), this;
    }
    sub(e) {
      return (
        (this.r = Math.max(0, this.r - e.r)),
        (this.g = Math.max(0, this.g - e.g)),
        (this.b = Math.max(0, this.b - e.b)),
        this
      );
    }
    multiply(e) {
      return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
    }
    multiplyScalar(e) {
      return (this.r *= e), (this.g *= e), (this.b *= e), this;
    }
    lerp(e, t) {
      return (
        (this.r += (e.r - this.r) * t),
        (this.g += (e.g - this.g) * t),
        (this.b += (e.b - this.b) * t),
        this
      );
    }
    lerpColors(e, t, n) {
      return (
        (this.r = e.r + (t.r - e.r) * n),
        (this.g = e.g + (t.g - e.g) * n),
        (this.b = e.b + (t.b - e.b) * n),
        this
      );
    }
    lerpHSL(e, t) {
      this.getHSL(zt), e.getHSL(as);
      const n = ki(zt.h, as.h, t),
        i = ki(zt.s, as.s, t),
        s = ki(zt.l, as.l, t);
      return this.setHSL(n, i, s), this;
    }
    setFromVector3(e) {
      return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
    }
    applyMatrix3(e) {
      const t = this.r,
        n = this.g,
        i = this.b,
        s = e.elements;
      return (
        (this.r = s[0] * t + s[3] * n + s[6] * i),
        (this.g = s[1] * t + s[4] * n + s[7] * i),
        (this.b = s[2] * t + s[5] * n + s[8] * i),
        this
      );
    }
    equals(e) {
      return e.r === this.r && e.g === this.g && e.b === this.b;
    }
    fromArray(e, t = 0) {
      return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
    }
    toArray(e = [], t = 0) {
      return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
    }
    fromBufferAttribute(e, t) {
      return (
        (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
      );
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  }
  const pt = new ye();
  ye.NAMES = $l;
  class Pn extends jt {
    constructor(e) {
      super(),
        (this.isMeshBasicMaterial = !0),
        (this.type = "MeshBasicMaterial"),
        (this.color = new ye(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.combine = Fl),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        (this.specularMap = e.specularMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        (this.combine = e.combine),
        (this.reflectivity = e.reflectivity),
        (this.refractionRatio = e.refractionRatio),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.fog = e.fog),
        this
      );
    }
  }
  const Je = new R(),
    os = new De();
  class ut {
    constructor(e, t, n = !1) {
      if (Array.isArray(e))
        throw new TypeError(
          "THREE.BufferAttribute: array should be a Typed Array."
        );
      (this.isBufferAttribute = !0),
        (this.name = ""),
        (this.array = e),
        (this.itemSize = t),
        (this.count = e !== void 0 ? e.length / t : 0),
        (this.normalized = n),
        (this.usage = Fr),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.version = 0);
    }
    onUploadCallback() {}
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
    setUsage(e) {
      return (this.usage = e), this;
    }
    copy(e) {
      return (
        (this.name = e.name),
        (this.array = new e.array.constructor(e.array)),
        (this.itemSize = e.itemSize),
        (this.count = e.count),
        (this.normalized = e.normalized),
        (this.usage = e.usage),
        this
      );
    }
    copyAt(e, t, n) {
      (e *= this.itemSize), (n *= t.itemSize);
      for (let i = 0, s = this.itemSize; i < s; i++)
        this.array[e + i] = t.array[n + i];
      return this;
    }
    copyArray(e) {
      return this.array.set(e), this;
    }
    applyMatrix3(e) {
      if (this.itemSize === 2)
        for (let t = 0, n = this.count; t < n; t++)
          os.fromBufferAttribute(this, t),
            os.applyMatrix3(e),
            this.setXY(t, os.x, os.y);
      else if (this.itemSize === 3)
        for (let t = 0, n = this.count; t < n; t++)
          Je.fromBufferAttribute(this, t),
            Je.applyMatrix3(e),
            this.setXYZ(t, Je.x, Je.y, Je.z);
      return this;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.count; t < n; t++)
        Je.fromBufferAttribute(this, t),
          Je.applyMatrix4(e),
          this.setXYZ(t, Je.x, Je.y, Je.z);
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        Je.fromBufferAttribute(this, t),
          Je.applyNormalMatrix(e),
          this.setXYZ(t, Je.x, Je.y, Je.z);
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        Je.fromBufferAttribute(this, t),
          Je.transformDirection(e),
          this.setXYZ(t, Je.x, Je.y, Je.z);
      return this;
    }
    set(e, t = 0) {
      return this.array.set(e, t), this;
    }
    getX(e) {
      let t = this.array[e * this.itemSize];
      return this.normalized && (t = an(t, this.array)), t;
    }
    setX(e, t) {
      return (
        this.normalized && (t = He(t, this.array)),
        (this.array[e * this.itemSize] = t),
        this
      );
    }
    getY(e) {
      let t = this.array[e * this.itemSize + 1];
      return this.normalized && (t = an(t, this.array)), t;
    }
    setY(e, t) {
      return (
        this.normalized && (t = He(t, this.array)),
        (this.array[e * this.itemSize + 1] = t),
        this
      );
    }
    getZ(e) {
      let t = this.array[e * this.itemSize + 2];
      return this.normalized && (t = an(t, this.array)), t;
    }
    setZ(e, t) {
      return (
        this.normalized && (t = He(t, this.array)),
        (this.array[e * this.itemSize + 2] = t),
        this
      );
    }
    getW(e) {
      let t = this.array[e * this.itemSize + 3];
      return this.normalized && (t = an(t, this.array)), t;
    }
    setW(e, t) {
      return (
        this.normalized && (t = He(t, this.array)),
        (this.array[e * this.itemSize + 3] = t),
        this
      );
    }
    setXY(e, t, n) {
      return (
        (e *= this.itemSize),
        this.normalized && ((t = He(t, this.array)), (n = He(n, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        this
      );
    }
    setXYZ(e, t, n, i) {
      return (
        (e *= this.itemSize),
        this.normalized &&
          ((t = He(t, this.array)),
          (n = He(n, this.array)),
          (i = He(i, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        (this.array[e + 2] = i),
        this
      );
    }
    setXYZW(e, t, n, i, s) {
      return (
        (e *= this.itemSize),
        this.normalized &&
          ((t = He(t, this.array)),
          (n = He(n, this.array)),
          (i = He(i, this.array)),
          (s = He(s, this.array))),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        (this.array[e + 2] = i),
        (this.array[e + 3] = s),
        this
      );
    }
    onUpload(e) {
      return (this.onUploadCallback = e), this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const e = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized
      };
      return (
        this.name !== "" && (e.name = this.name),
        this.usage !== Fr && (e.usage = this.usage),
        (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
          (e.updateRange = this.updateRange),
        e
      );
    }
    copyColorsArray() {
      console.error(
        "THREE.BufferAttribute: copyColorsArray() was removed in r144."
      );
    }
    copyVector2sArray() {
      console.error(
        "THREE.BufferAttribute: copyVector2sArray() was removed in r144."
      );
    }
    copyVector3sArray() {
      console.error(
        "THREE.BufferAttribute: copyVector3sArray() was removed in r144."
      );
    }
    copyVector4sArray() {
      console.error(
        "THREE.BufferAttribute: copyVector4sArray() was removed in r144."
      );
    }
  }
  class Jl extends ut {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  }
  class Ql extends ut {
    constructor(e, t, n) {
      super(new Uint32Array(e), t, n);
    }
  }
  class Ct extends ut {
    constructor(e, t, n) {
      super(new Float32Array(e), t, n);
    }
  }
  let Du = 0;
  const Lt = new Re(),
    xr = new qe(),
    $n = new R(),
    wt = new hn(),
    Li = new hn(),
    rt = new R();
  class Rt extends kn {
    constructor() {
      super(),
        (this.isBufferGeometry = !0),
        Object.defineProperty(this, "id", { value: Du++ }),
        (this.uuid = Vt()),
        (this.name = ""),
        (this.type = "BufferGeometry"),
        (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.morphTargetsRelative = !1),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 }),
        (this.userData = {});
    }
    getIndex() {
      return this.index;
    }
    setIndex(e) {
      return (
        Array.isArray(e)
          ? (this.index = new (ql(e) ? Ql : Jl)(e, 1))
          : (this.index = e),
        this
      );
    }
    getAttribute(e) {
      return this.attributes[e];
    }
    setAttribute(e, t) {
      return (this.attributes[e] = t), this;
    }
    deleteAttribute(e) {
      return delete this.attributes[e], this;
    }
    hasAttribute(e) {
      return this.attributes[e] !== void 0;
    }
    addGroup(e, t, n = 0) {
      this.groups.push({ start: e, count: t, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(e, t) {
      (this.drawRange.start = e), (this.drawRange.count = t);
    }
    applyMatrix4(e) {
      const t = this.attributes.position;
      t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
      const n = this.attributes.normal;
      if (n !== void 0) {
        const s = new Pe().getNormalMatrix(e);
        n.applyNormalMatrix(s), (n.needsUpdate = !0);
      }
      const i = this.attributes.tangent;
      return (
        i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        this
      );
    }
    applyQuaternion(e) {
      return Lt.makeRotationFromQuaternion(e), this.applyMatrix4(Lt), this;
    }
    rotateX(e) {
      return Lt.makeRotationX(e), this.applyMatrix4(Lt), this;
    }
    rotateY(e) {
      return Lt.makeRotationY(e), this.applyMatrix4(Lt), this;
    }
    rotateZ(e) {
      return Lt.makeRotationZ(e), this.applyMatrix4(Lt), this;
    }
    translate(e, t, n) {
      return Lt.makeTranslation(e, t, n), this.applyMatrix4(Lt), this;
    }
    scale(e, t, n) {
      return Lt.makeScale(e, t, n), this.applyMatrix4(Lt), this;
    }
    lookAt(e) {
      return xr.lookAt(e), xr.updateMatrix(), this.applyMatrix4(xr.matrix), this;
    }
    center() {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter($n).negate(),
        this.translate($n.x, $n.y, $n.z),
        this
      );
    }
    setFromPoints(e) {
      const t = [];
      for (let n = 0, i = e.length; n < i; n++) {
        const s = e[n];
        t.push(s.x, s.y, s.z || 0);
      }
      return this.setAttribute("position", new Ct(t, 3)), this;
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new hn());
      const e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        console.error(
          'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
          this
        ),
          this.boundingBox.set(
            new R(-1 / 0, -1 / 0, -1 / 0),
            new R(1 / 0, 1 / 0, 1 / 0)
          );
        return;
      }
      if (e !== void 0) {
        if ((this.boundingBox.setFromBufferAttribute(e), t))
          for (let n = 0, i = t.length; n < i; n++) {
            const s = t[n];
            wt.setFromBufferAttribute(s),
              this.morphTargetsRelative
                ? (rt.addVectors(this.boundingBox.min, wt.min),
                  this.boundingBox.expandByPoint(rt),
                  rt.addVectors(this.boundingBox.max, wt.max),
                  this.boundingBox.expandByPoint(rt))
                : (this.boundingBox.expandByPoint(wt.min),
                  this.boundingBox.expandByPoint(wt.max));
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        console.error(
          'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
          this
        );
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new un());
      const e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        console.error(
          'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
          this
        ),
          this.boundingSphere.set(new R(), 1 / 0);
        return;
      }
      if (e) {
        const n = this.boundingSphere.center;
        if ((wt.setFromBufferAttribute(e), t))
          for (let s = 0, r = t.length; s < r; s++) {
            const a = t[s];
            Li.setFromBufferAttribute(a),
              this.morphTargetsRelative
                ? (rt.addVectors(wt.min, Li.min),
                  wt.expandByPoint(rt),
                  rt.addVectors(wt.max, Li.max),
                  wt.expandByPoint(rt))
                : (wt.expandByPoint(Li.min), wt.expandByPoint(Li.max));
          }
        wt.getCenter(n);
        let i = 0;
        for (let s = 0, r = e.count; s < r; s++)
          rt.fromBufferAttribute(e, s),
            (i = Math.max(i, n.distanceToSquared(rt)));
        if (t)
          for (let s = 0, r = t.length; s < r; s++) {
            const a = t[s],
              l = this.morphTargetsRelative;
            for (let c = 0, h = a.count; c < h; c++)
              rt.fromBufferAttribute(a, c),
                l && ($n.fromBufferAttribute(e, c), rt.add($n)),
                (i = Math.max(i, n.distanceToSquared(rt)));
          }
        (this.boundingSphere.radius = Math.sqrt(i)),
          isNaN(this.boundingSphere.radius) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
              this
            );
      }
    }
    computeTangents() {
      const e = this.index,
        t = this.attributes;
      if (
        e === null ||
        t.position === void 0 ||
        t.normal === void 0 ||
        t.uv === void 0
      ) {
        console.error(
          "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
        );
        return;
      }
      const n = e.array,
        i = t.position.array,
        s = t.normal.array,
        r = t.uv.array,
        a = i.length / 3;
      this.hasAttribute("tangent") === !1 &&
        this.setAttribute("tangent", new ut(new Float32Array(4 * a), 4));
      const l = this.getAttribute("tangent").array,
        c = [],
        h = [];
      for (let E = 0; E < a; E++) (c[E] = new R()), (h[E] = new R());
      const u = new R(),
        d = new R(),
        p = new R(),
        g = new De(),
        _ = new De(),
        m = new De(),
        f = new R(),
        b = new R();
      function v(E, W, j) {
        u.fromArray(i, E * 3),
          d.fromArray(i, W * 3),
          p.fromArray(i, j * 3),
          g.fromArray(r, E * 2),
          _.fromArray(r, W * 2),
          m.fromArray(r, j * 2),
          d.sub(u),
          p.sub(u),
          _.sub(g),
          m.sub(g);
        const P = 1 / (_.x * m.y - m.x * _.y);
        isFinite(P) &&
          (f
            .copy(d)
            .multiplyScalar(m.y)
            .addScaledVector(p, -_.y)
            .multiplyScalar(P),
          b
            .copy(p)
            .multiplyScalar(_.x)
            .addScaledVector(d, -m.x)
            .multiplyScalar(P),
          c[E].add(f),
          c[W].add(f),
          c[j].add(f),
          h[E].add(b),
          h[W].add(b),
          h[j].add(b));
      }
      let y = this.groups;
      y.length === 0 && (y = [{ start: 0, count: n.length }]);
      for (let E = 0, W = y.length; E < W; ++E) {
        const j = y[E],
          P = j.start,
          O = j.count;
        for (let F = P, Q = P + O; F < Q; F += 3) v(n[F + 0], n[F + 1], n[F + 2]);
      }
      const A = new R(),
        C = new R(),
        I = new R(),
        D = new R();
      function S(E) {
        I.fromArray(s, E * 3), D.copy(I);
        const W = c[E];
        A.copy(W),
          A.sub(I.multiplyScalar(I.dot(W))).normalize(),
          C.crossVectors(D, W);
        const P = C.dot(h[E]) < 0 ? -1 : 1;
        (l[E * 4] = A.x),
          (l[E * 4 + 1] = A.y),
          (l[E * 4 + 2] = A.z),
          (l[E * 4 + 3] = P);
      }
      for (let E = 0, W = y.length; E < W; ++E) {
        const j = y[E],
          P = j.start,
          O = j.count;
        for (let F = P, Q = P + O; F < Q; F += 3)
          S(n[F + 0]), S(n[F + 1]), S(n[F + 2]);
      }
    }
    computeVertexNormals() {
      const e = this.index,
        t = this.getAttribute("position");
      if (t !== void 0) {
        let n = this.getAttribute("normal");
        if (n === void 0)
          (n = new ut(new Float32Array(t.count * 3), 3)),
            this.setAttribute("normal", n);
        else for (let d = 0, p = n.count; d < p; d++) n.setXYZ(d, 0, 0, 0);
        const i = new R(),
          s = new R(),
          r = new R(),
          a = new R(),
          l = new R(),
          c = new R(),
          h = new R(),
          u = new R();
        if (e)
          for (let d = 0, p = e.count; d < p; d += 3) {
            const g = e.getX(d + 0),
              _ = e.getX(d + 1),
              m = e.getX(d + 2);
            i.fromBufferAttribute(t, g),
              s.fromBufferAttribute(t, _),
              r.fromBufferAttribute(t, m),
              h.subVectors(r, s),
              u.subVectors(i, s),
              h.cross(u),
              a.fromBufferAttribute(n, g),
              l.fromBufferAttribute(n, _),
              c.fromBufferAttribute(n, m),
              a.add(h),
              l.add(h),
              c.add(h),
              n.setXYZ(g, a.x, a.y, a.z),
              n.setXYZ(_, l.x, l.y, l.z),
              n.setXYZ(m, c.x, c.y, c.z);
          }
        else
          for (let d = 0, p = t.count; d < p; d += 3)
            i.fromBufferAttribute(t, d + 0),
              s.fromBufferAttribute(t, d + 1),
              r.fromBufferAttribute(t, d + 2),
              h.subVectors(r, s),
              u.subVectors(i, s),
              h.cross(u),
              n.setXYZ(d + 0, h.x, h.y, h.z),
              n.setXYZ(d + 1, h.x, h.y, h.z),
              n.setXYZ(d + 2, h.x, h.y, h.z);
        this.normalizeNormals(), (n.needsUpdate = !0);
      }
    }
    merge() {
      return (
        console.error(
          "THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."
        ),
        this
      );
    }
    normalizeNormals() {
      const e = this.attributes.normal;
      for (let t = 0, n = e.count; t < n; t++)
        rt.fromBufferAttribute(e, t),
          rt.normalize(),
          e.setXYZ(t, rt.x, rt.y, rt.z);
    }
    toNonIndexed() {
      function e(a, l) {
        const c = a.array,
          h = a.itemSize,
          u = a.normalized,
          d = new c.constructor(l.length * h);
        let p = 0,
          g = 0;
        for (let _ = 0, m = l.length; _ < m; _++) {
          a.isInterleavedBufferAttribute
            ? (p = l[_] * a.data.stride + a.offset)
            : (p = l[_] * h);
          for (let f = 0; f < h; f++) d[g++] = c[p++];
        }
        return new ut(d, h, u);
      }
      if (this.index === null)
        return (
          console.warn(
            "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
          ),
          this
        );
      const t = new Rt(),
        n = this.index.array,
        i = this.attributes;
      for (const a in i) {
        const l = i[a],
          c = e(l, n);
        t.setAttribute(a, c);
      }
      const s = this.morphAttributes;
      for (const a in s) {
        const l = [],
          c = s[a];
        for (let h = 0, u = c.length; h < u; h++) {
          const d = c[h],
            p = e(d, n);
          l.push(p);
        }
        t.morphAttributes[a] = l;
      }
      t.morphTargetsRelative = this.morphTargetsRelative;
      const r = this.groups;
      for (let a = 0, l = r.length; a < l; a++) {
        const c = r[a];
        t.addGroup(c.start, c.count, c.materialIndex);
      }
      return t;
    }
    toJSON() {
      const e = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      if (
        ((e.uuid = this.uuid),
        (e.type = this.type),
        this.name !== "" && (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        this.parameters !== void 0)
      ) {
        const l = this.parameters;
        for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
        return e;
      }
      e.data = { attributes: {} };
      const t = this.index;
      t !== null &&
        (e.data.index = {
          type: t.array.constructor.name,
          array: Array.prototype.slice.call(t.array)
        });
      const n = this.attributes;
      for (const l in n) {
        const c = n[l];
        e.data.attributes[l] = c.toJSON(e.data);
      }
      const i = {};
      let s = !1;
      for (const l in this.morphAttributes) {
        const c = this.morphAttributes[l],
          h = [];
        for (let u = 0, d = c.length; u < d; u++) {
          const p = c[u];
          h.push(p.toJSON(e.data));
        }
        h.length > 0 && ((i[l] = h), (s = !0));
      }
      s &&
        ((e.data.morphAttributes = i),
        (e.data.morphTargetsRelative = this.morphTargetsRelative));
      const r = this.groups;
      r.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(r)));
      const a = this.boundingSphere;
      return (
        a !== null &&
          (e.data.boundingSphere = {
            center: a.center.toArray(),
            radius: a.radius
          }),
        e
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null);
      const t = {};
      this.name = e.name;
      const n = e.index;
      n !== null && this.setIndex(n.clone(t));
      const i = e.attributes;
      for (const c in i) {
        const h = i[c];
        this.setAttribute(c, h.clone(t));
      }
      const s = e.morphAttributes;
      for (const c in s) {
        const h = [],
          u = s[c];
        for (let d = 0, p = u.length; d < p; d++) h.push(u[d].clone(t));
        this.morphAttributes[c] = h;
      }
      this.morphTargetsRelative = e.morphTargetsRelative;
      const r = e.groups;
      for (let c = 0, h = r.length; c < h; c++) {
        const u = r[c];
        this.addGroup(u.start, u.count, u.materialIndex);
      }
      const a = e.boundingBox;
      a !== null && (this.boundingBox = a.clone());
      const l = e.boundingSphere;
      return (
        l !== null && (this.boundingSphere = l.clone()),
        (this.drawRange.start = e.drawRange.start),
        (this.drawRange.count = e.drawRange.count),
        (this.userData = e.userData),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  const Po = new Re(),
    Wt = new Yr(),
    ls = new un(),
    Do = new R(),
    Jn = new R(),
    Qn = new R(),
    ei = new R(),
    vr = new R(),
    cs = new R(),
    hs = new De(),
    us = new De(),
    ds = new De(),
    No = new R(),
    Oo = new R(),
    Uo = new R(),
    fs = new R(),
    ps = new R();
  class yt extends qe {
    constructor(e = new Rt(), t = new Pn()) {
      super(),
        (this.isMesh = !0),
        (this.type = "Mesh"),
        (this.geometry = e),
        (this.material = t),
        this.updateMorphTargets();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        e.morphTargetInfluences !== void 0 &&
          (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        e.morphTargetDictionary !== void 0 &&
          (this.morphTargetDictionary = Object.assign(
            {},
            e.morphTargetDictionary
          )),
        (this.material = e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes,
        n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let s = 0, r = i.length; s < r; s++) {
            const a = i[s].name || String(s);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[a] = s);
          }
        }
      }
    }
    getVertexPosition(e, t) {
      const n = this.geometry,
        i = n.attributes.position,
        s = n.morphAttributes.position,
        r = n.morphTargetsRelative;
      t.fromBufferAttribute(i, e);
      const a = this.morphTargetInfluences;
      if (s && a) {
        cs.set(0, 0, 0);
        for (let l = 0, c = s.length; l < c; l++) {
          const h = a[l],
            u = s[l];
          h !== 0 &&
            (vr.fromBufferAttribute(u, e),
            r ? cs.addScaledVector(vr, h) : cs.addScaledVector(vr.sub(t), h));
        }
        t.add(cs);
      }
      return this.isSkinnedMesh && this.applyBoneTransform(e, t), t;
    }
    raycast(e, t) {
      const n = this.geometry,
        i = this.material,
        s = this.matrixWorld;
      if (
        i === void 0 ||
        (n.boundingSphere === null && n.computeBoundingSphere(),
        ls.copy(n.boundingSphere),
        ls.applyMatrix4(s),
        Wt.copy(e.ray).recast(e.near),
        ls.containsPoint(Wt.origin) === !1 &&
          (Wt.intersectSphere(ls, Do) === null ||
            Wt.origin.distanceToSquared(Do) > (e.far - e.near) ** 2)) ||
        (Po.copy(s).invert(),
        Wt.copy(e.ray).applyMatrix4(Po),
        n.boundingBox !== null && Wt.intersectsBox(n.boundingBox) === !1)
      )
        return;
      let r;
      const a = n.index,
        l = n.attributes.position,
        c = n.attributes.uv,
        h = n.attributes.uv2,
        u = n.attributes.normal,
        d = n.groups,
        p = n.drawRange;
      if (a !== null) {
        if (Array.isArray(i))
          for (let g = 0, _ = d.length; g < _; g++) {
            const m = d[g],
              f = i[m.materialIndex],
              b = Math.max(m.start, p.start),
              v = Math.min(
                a.count,
                Math.min(m.start + m.count, p.start + p.count)
              );
            for (let y = b, A = v; y < A; y += 3) {
              const C = a.getX(y),
                I = a.getX(y + 1),
                D = a.getX(y + 2);
              (r = ms(this, f, e, Wt, c, h, u, C, I, D)),
                r &&
                  ((r.faceIndex = Math.floor(y / 3)),
                  (r.face.materialIndex = m.materialIndex),
                  t.push(r));
            }
          }
        else {
          const g = Math.max(0, p.start),
            _ = Math.min(a.count, p.start + p.count);
          for (let m = g, f = _; m < f; m += 3) {
            const b = a.getX(m),
              v = a.getX(m + 1),
              y = a.getX(m + 2);
            (r = ms(this, i, e, Wt, c, h, u, b, v, y)),
              r && ((r.faceIndex = Math.floor(m / 3)), t.push(r));
          }
        }
      } else if (l !== void 0)
        if (Array.isArray(i))
          for (let g = 0, _ = d.length; g < _; g++) {
            const m = d[g],
              f = i[m.materialIndex],
              b = Math.max(m.start, p.start),
              v = Math.min(
                l.count,
                Math.min(m.start + m.count, p.start + p.count)
              );
            for (let y = b, A = v; y < A; y += 3) {
              const C = y,
                I = y + 1,
                D = y + 2;
              (r = ms(this, f, e, Wt, c, h, u, C, I, D)),
                r &&
                  ((r.faceIndex = Math.floor(y / 3)),
                  (r.face.materialIndex = m.materialIndex),
                  t.push(r));
            }
          }
        else {
          const g = Math.max(0, p.start),
            _ = Math.min(l.count, p.start + p.count);
          for (let m = g, f = _; m < f; m += 3) {
            const b = m,
              v = m + 1,
              y = m + 2;
            (r = ms(this, i, e, Wt, c, h, u, b, v, y)),
              r && ((r.faceIndex = Math.floor(m / 3)), t.push(r));
          }
        }
    }
  }
  function Nu(o, e, t, n, i, s, r, a) {
    let l;
    if (
      (e.side === Tt
        ? (l = n.intersectTriangle(r, s, i, !0, a))
        : (l = n.intersectTriangle(i, s, r, e.side === Kt, a)),
      l === null)
    )
      return null;
    ps.copy(a), ps.applyMatrix4(o.matrixWorld);
    const c = t.ray.origin.distanceTo(ps);
    return c < t.near || c > t.far
      ? null
      : { distance: c, point: ps.clone(), object: o };
  }
  function ms(o, e, t, n, i, s, r, a, l, c) {
    o.getVertexPosition(a, Jn),
      o.getVertexPosition(l, Qn),
      o.getVertexPosition(c, ei);
    const h = Nu(o, e, t, n, Jn, Qn, ei, fs);
    if (h) {
      i &&
        (hs.fromBufferAttribute(i, a),
        us.fromBufferAttribute(i, l),
        ds.fromBufferAttribute(i, c),
        (h.uv = kt.getInterpolation(fs, Jn, Qn, ei, hs, us, ds, new De()))),
        s &&
          (hs.fromBufferAttribute(s, a),
          us.fromBufferAttribute(s, l),
          ds.fromBufferAttribute(s, c),
          (h.uv2 = kt.getInterpolation(fs, Jn, Qn, ei, hs, us, ds, new De()))),
        r &&
          (No.fromBufferAttribute(r, a),
          Oo.fromBufferAttribute(r, l),
          Uo.fromBufferAttribute(r, c),
          (h.normal = kt.getInterpolation(fs, Jn, Qn, ei, No, Oo, Uo, new R())),
          h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
      const u = { a, b: l, c, normal: new R(), materialIndex: 0 };
      kt.getNormal(Jn, Qn, ei, u.normal), (h.face = u);
    }
    return h;
  }
  class qi extends Rt {
    constructor(e = 1, t = 1, n = 1, i = 1, s = 1, r = 1) {
      super(),
        (this.type = "BoxGeometry"),
        (this.parameters = {
          width: e,
          height: t,
          depth: n,
          widthSegments: i,
          heightSegments: s,
          depthSegments: r
        });
      const a = this;
      (i = Math.floor(i)), (s = Math.floor(s)), (r = Math.floor(r));
      const l = [],
        c = [],
        h = [],
        u = [];
      let d = 0,
        p = 0;
      g("z", "y", "x", -1, -1, n, t, e, r, s, 0),
        g("z", "y", "x", 1, -1, n, t, -e, r, s, 1),
        g("x", "z", "y", 1, 1, e, n, t, i, r, 2),
        g("x", "z", "y", 1, -1, e, n, -t, i, r, 3),
        g("x", "y", "z", 1, -1, e, t, n, i, s, 4),
        g("x", "y", "z", -1, -1, e, t, -n, i, s, 5),
        this.setIndex(l),
        this.setAttribute("position", new Ct(c, 3)),
        this.setAttribute("normal", new Ct(h, 3)),
        this.setAttribute("uv", new Ct(u, 2));
      function g(_, m, f, b, v, y, A, C, I, D, S) {
        const E = y / I,
          W = A / D,
          j = y / 2,
          P = A / 2,
          O = C / 2,
          F = I + 1,
          Q = D + 1;
        let $ = 0,
          X = 0;
        const Y = new R();
        for (let ee = 0; ee < Q; ee++) {
          const ge = ee * W - P;
          for (let ae = 0; ae < F; ae++) {
            const V = ae * E - j;
            (Y[_] = V * b),
              (Y[m] = ge * v),
              (Y[f] = O),
              c.push(Y.x, Y.y, Y.z),
              (Y[_] = 0),
              (Y[m] = 0),
              (Y[f] = C > 0 ? 1 : -1),
              h.push(Y.x, Y.y, Y.z),
              u.push(ae / I),
              u.push(1 - ee / D),
              ($ += 1);
          }
        }
        for (let ee = 0; ee < D; ee++)
          for (let ge = 0; ge < I; ge++) {
            const ae = d + ge + F * ee,
              V = d + ge + F * (ee + 1),
              q = d + (ge + 1) + F * (ee + 1),
              ie = d + (ge + 1) + F * ee;
            l.push(ae, V, ie), l.push(V, q, ie), (X += 6);
          }
        a.addGroup(p, X, S), (p += X), (d += $);
      }
    }
    copy(e) {
      return (
        super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
      );
    }
    static fromJSON(e) {
      return new qi(
        e.width,
        e.height,
        e.depth,
        e.widthSegments,
        e.heightSegments,
        e.depthSegments
      );
    }
  }
  function yi(o) {
    const e = {};
    for (const t in o) {
      e[t] = {};
      for (const n in o[t]) {
        const i = o[t][n];
        i &&
        (i.isColor ||
          i.isMatrix3 ||
          i.isMatrix4 ||
          i.isVector2 ||
          i.isVector3 ||
          i.isVector4 ||
          i.isTexture ||
          i.isQuaternion)
          ? i.isRenderTargetTexture
            ? (console.warn(
                "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
              ),
              (e[t][n] = null))
            : (e[t][n] = i.clone())
          : Array.isArray(i)
          ? (e[t][n] = i.slice())
          : (e[t][n] = i);
      }
    }
    return e;
  }
  function vt(o) {
    const e = {};
    for (let t = 0; t < o.length; t++) {
      const n = yi(o[t]);
      for (const i in n) e[i] = n[i];
    }
    return e;
  }
  function Ou(o) {
    const e = [];
    for (let t = 0; t < o.length; t++) e.push(o[t].clone());
    return e;
  }
  function ec(o) {
    return o.getRenderTarget() === null && o.outputEncoding === Fe ? Dt : Si;
  }
  const tc = { clone: yi, merge: vt };
  var Uu = `void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }`,
    Fu = `void main() {
      gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
  }`;
  class Yt extends jt {
    constructor(e) {
      super(),
        (this.isShaderMaterial = !0),
        (this.type = "ShaderMaterial"),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.uniformsGroups = []),
        (this.vertexShader = Uu),
        (this.fragmentShader = Fu),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.forceSinglePass = !0),
        (this.extensions = {
          derivatives: !1,
          fragDepth: !1,
          drawBuffers: !1,
          shaderTextureLOD: !1
        }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv2: [0, 0]
        }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        (this.glslVersion = null),
        e !== void 0 && this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.fragmentShader = e.fragmentShader),
        (this.vertexShader = e.vertexShader),
        (this.uniforms = yi(e.uniforms)),
        (this.uniformsGroups = Ou(e.uniformsGroups)),
        (this.defines = Object.assign({}, e.defines)),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.fog = e.fog),
        (this.lights = e.lights),
        (this.clipping = e.clipping),
        (this.extensions = Object.assign({}, e.extensions)),
        (this.glslVersion = e.glslVersion),
        this
      );
    }
    toJSON(e) {
      const t = super.toJSON(e);
      (t.glslVersion = this.glslVersion), (t.uniforms = {});
      for (const i in this.uniforms) {
        const r = this.uniforms[i].value;
        r && r.isTexture
          ? (t.uniforms[i] = { type: "t", value: r.toJSON(e).uuid })
          : r && r.isColor
          ? (t.uniforms[i] = { type: "c", value: r.getHex() })
          : r && r.isVector2
          ? (t.uniforms[i] = { type: "v2", value: r.toArray() })
          : r && r.isVector3
          ? (t.uniforms[i] = { type: "v3", value: r.toArray() })
          : r && r.isVector4
          ? (t.uniforms[i] = { type: "v4", value: r.toArray() })
          : r && r.isMatrix3
          ? (t.uniforms[i] = { type: "m3", value: r.toArray() })
          : r && r.isMatrix4
          ? (t.uniforms[i] = { type: "m4", value: r.toArray() })
          : (t.uniforms[i] = { value: r });
      }
      Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        (t.vertexShader = this.vertexShader),
        (t.fragmentShader = this.fragmentShader);
      const n = {};
      for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
      return Object.keys(n).length > 0 && (t.extensions = n), t;
    }
  }
  class nc extends qe {
    constructor() {
      super(),
        (this.isCamera = !0),
        (this.type = "Camera"),
        (this.matrixWorldInverse = new Re()),
        (this.projectionMatrix = new Re()),
        (this.projectionMatrixInverse = new Re());
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
        this
      );
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(!0, !1);
      const t = this.matrixWorld.elements;
      return e.set(-t[8], -t[9], -t[10]).normalize();
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(e, t) {
      super.updateWorldMatrix(e, t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class St extends nc {
    constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
      super(),
        (this.isPerspectiveCamera = !0),
        (this.type = "PerspectiveCamera"),
        (this.fov = e),
        (this.zoom = 1),
        (this.near = n),
        (this.far = i),
        (this.focus = 10),
        (this.aspect = t),
        (this.view = null),
        (this.filmGauge = 35),
        (this.filmOffset = 0),
        this.updateProjectionMatrix();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.fov = e.fov),
        (this.zoom = e.zoom),
        (this.near = e.near),
        (this.far = e.far),
        (this.focus = e.focus),
        (this.aspect = e.aspect),
        (this.view = e.view === null ? null : Object.assign({}, e.view)),
        (this.filmGauge = e.filmGauge),
        (this.filmOffset = e.filmOffset),
        this
      );
    }
    setFocalLength(e) {
      const t = (0.5 * this.getFilmHeight()) / e;
      (this.fov = Mi * 2 * Math.atan(t)), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const e = Math.tan(zi * 0.5 * this.fov);
      return (0.5 * this.getFilmHeight()) / e;
    }
    getEffectiveFOV() {
      return Mi * 2 * Math.atan(Math.tan(zi * 0.5 * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    setViewOffset(e, t, n, i, s, r) {
      (this.aspect = e / t),
        this.view === null &&
          (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
          }),
        (this.view.enabled = !0),
        (this.view.fullWidth = e),
        (this.view.fullHeight = t),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = s),
        (this.view.height = r),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const e = this.near;
      let t = (e * Math.tan(zi * 0.5 * this.fov)) / this.zoom,
        n = 2 * t,
        i = this.aspect * n,
        s = -0.5 * i;
      const r = this.view;
      if (this.view !== null && this.view.enabled) {
        const l = r.fullWidth,
          c = r.fullHeight;
        (s += (r.offsetX * i) / l),
          (t -= (r.offsetY * n) / c),
          (i *= r.width / l),
          (n *= r.height / c);
      }
      const a = this.filmOffset;
      a !== 0 && (s += (e * a) / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return (
        (t.object.fov = this.fov),
        (t.object.zoom = this.zoom),
        (t.object.near = this.near),
        (t.object.far = this.far),
        (t.object.focus = this.focus),
        (t.object.aspect = this.aspect),
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        (t.object.filmGauge = this.filmGauge),
        (t.object.filmOffset = this.filmOffset),
        t
      );
    }
  }
  const ti = -90,
    ni = 1;
  class Bu extends qe {
    constructor(e, t, n) {
      super(), (this.type = "CubeCamera"), (this.renderTarget = n);
      const i = new St(ti, ni, e, t);
      (i.layers = this.layers), i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
      const s = new St(ti, ni, e, t);
      (s.layers = this.layers),
        s.up.set(0, 1, 0),
        s.lookAt(-1, 0, 0),
        this.add(s);
      const r = new St(ti, ni, e, t);
      (r.layers = this.layers),
        r.up.set(0, 0, -1),
        r.lookAt(0, 1, 0),
        this.add(r);
      const a = new St(ti, ni, e, t);
      (a.layers = this.layers),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        this.add(a);
      const l = new St(ti, ni, e, t);
      (l.layers = this.layers), l.up.set(0, 1, 0), l.lookAt(0, 0, 1), this.add(l);
      const c = new St(ti, ni, e, t);
      (c.layers = this.layers),
        c.up.set(0, 1, 0),
        c.lookAt(0, 0, -1),
        this.add(c);
    }
    update(e, t) {
      this.parent === null && this.updateMatrixWorld();
      const n = this.renderTarget,
        [i, s, r, a, l, c] = this.children,
        h = e.getRenderTarget(),
        u = e.toneMapping,
        d = e.xr.enabled;
      (e.toneMapping = on), (e.xr.enabled = !1);
      const p = n.texture.generateMipmaps;
      (n.texture.generateMipmaps = !1),
        e.setRenderTarget(n, 0),
        e.render(t, i),
        e.setRenderTarget(n, 1),
        e.render(t, s),
        e.setRenderTarget(n, 2),
        e.render(t, r),
        e.setRenderTarget(n, 3),
        e.render(t, a),
        e.setRenderTarget(n, 4),
        e.render(t, l),
        (n.texture.generateMipmaps = p),
        e.setRenderTarget(n, 5),
        e.render(t, c),
        e.setRenderTarget(h),
        (e.toneMapping = u),
        (e.xr.enabled = d),
        (n.texture.needsPMREMUpdate = !0);
    }
  }
  class ic extends lt {
    constructor(e, t, n, i, s, r, a, l, c, h) {
      (e = e !== void 0 ? e : []),
        (t = t !== void 0 ? t : mi),
        super(e, t, n, i, s, r, a, l, c, h),
        (this.isCubeTexture = !0),
        (this.flipY = !1);
    }
    get images() {
      return this.image;
    }
    set images(e) {
      this.image = e;
    }
  }
  class zu extends cn {
    constructor(e = 1, t = {}) {
      super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
      const n = { width: e, height: e, depth: 1 },
        i = [n, n, n, n, n, n];
      (this.texture = new ic(
        i,
        t.mapping,
        t.wrapS,
        t.wrapT,
        t.magFilter,
        t.minFilter,
        t.format,
        t.type,
        t.anisotropy,
        t.encoding
      )),
        (this.texture.isRenderTargetTexture = !0),
        (this.texture.generateMipmaps =
          t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
        (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : ot);
    }
    fromEquirectangularTexture(e, t) {
      (this.texture.type = t.type),
        (this.texture.encoding = t.encoding),
        (this.texture.generateMipmaps = t.generateMipmaps),
        (this.texture.minFilter = t.minFilter),
        (this.texture.magFilter = t.magFilter);
      const n = {
          uniforms: { tEquirect: { value: null } },
          vertexShader: `
  
                  varying vec3 vWorldDirection;
  
                  vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
  
                      return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
  
                  }
  
                  void main() {
  
                      vWorldDirection = transformDirection( position, modelMatrix );
  
                      #include <begin_vertex>
                      #include <project_vertex>
  
                  }
              `,
          fragmentShader: `
  
                  uniform sampler2D tEquirect;
  
                  varying vec3 vWorldDirection;
  
                  #include <common>
  
                  void main() {
  
                      vec3 direction = normalize( vWorldDirection );
  
                      vec2 sampleUV = equirectUv( direction );
  
                      gl_FragColor = texture2D( tEquirect, sampleUV );
  
                  }
              `
        },
        i = new qi(5, 5, 5),
        s = new Yt({
          name: "CubemapFromEquirect",
          uniforms: yi(n.uniforms),
          vertexShader: n.vertexShader,
          fragmentShader: n.fragmentShader,
          side: Tt,
          blending: Mn
        });
      s.uniforms.tEquirect.value = t;
      const r = new yt(i, s),
        a = t.minFilter;
      return (
        t.minFilter === On && (t.minFilter = ot),
        new Bu(1, 10, this).update(e, r),
        (t.minFilter = a),
        r.geometry.dispose(),
        r.material.dispose(),
        this
      );
    }
    clear(e, t, n, i) {
      const s = e.getRenderTarget();
      for (let r = 0; r < 6; r++) e.setRenderTarget(this, r), e.clear(t, n, i);
      e.setRenderTarget(s);
    }
  }
  const Sr = new R(),
    ku = new R(),
    Vu = new Pe();
  class Cn {
    constructor(e = new R(1, 0, 0), t = 0) {
      (this.isPlane = !0), (this.normal = e), (this.constant = t);
    }
    set(e, t) {
      return this.normal.copy(e), (this.constant = t), this;
    }
    setComponents(e, t, n, i) {
      return this.normal.set(e, t, n), (this.constant = i), this;
    }
    setFromNormalAndCoplanarPoint(e, t) {
      return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
    }
    setFromCoplanarPoints(e, t, n) {
      const i = Sr.subVectors(n, t).cross(ku.subVectors(e, t)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, e), this;
    }
    copy(e) {
      return this.normal.copy(e.normal), (this.constant = e.constant), this;
    }
    normalize() {
      const e = 1 / this.normal.length();
      return this.normal.multiplyScalar(e), (this.constant *= e), this;
    }
    negate() {
      return (this.constant *= -1), this.normal.negate(), this;
    }
    distanceToPoint(e) {
      return this.normal.dot(e) + this.constant;
    }
    distanceToSphere(e) {
      return this.distanceToPoint(e.center) - e.radius;
    }
    projectPoint(e, t) {
      return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
    }
    intersectLine(e, t) {
      const n = e.delta(Sr),
        i = this.normal.dot(n);
      if (i === 0)
        return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
      const s = -(e.start.dot(this.normal) + this.constant) / i;
      return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
    }
    intersectsLine(e) {
      const t = this.distanceToPoint(e.start),
        n = this.distanceToPoint(e.end);
      return (t < 0 && n > 0) || (n < 0 && t > 0);
    }
    intersectsBox(e) {
      return e.intersectsPlane(this);
    }
    intersectsSphere(e) {
      return e.intersectsPlane(this);
    }
    coplanarPoint(e) {
      return e.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(e, t) {
      const n = t || Vu.getNormalMatrix(e),
        i = this.coplanarPoint(Sr).applyMatrix4(e),
        s = this.normal.applyMatrix3(n).normalize();
      return (this.constant = -i.dot(s)), this;
    }
    translate(e) {
      return (this.constant -= e.dot(this.normal)), this;
    }
    equals(e) {
      return e.normal.equals(this.normal) && e.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const wn = new un(),
    gs = new R();
  class Zr {
    constructor(
      e = new Cn(),
      t = new Cn(),
      n = new Cn(),
      i = new Cn(),
      s = new Cn(),
      r = new Cn()
    ) {
      this.planes = [e, t, n, i, s, r];
    }
    set(e, t, n, i, s, r) {
      const a = this.planes;
      return (
        a[0].copy(e),
        a[1].copy(t),
        a[2].copy(n),
        a[3].copy(i),
        a[4].copy(s),
        a[5].copy(r),
        this
      );
    }
    copy(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
      return this;
    }
    setFromProjectionMatrix(e) {
      const t = this.planes,
        n = e.elements,
        i = n[0],
        s = n[1],
        r = n[2],
        a = n[3],
        l = n[4],
        c = n[5],
        h = n[6],
        u = n[7],
        d = n[8],
        p = n[9],
        g = n[10],
        _ = n[11],
        m = n[12],
        f = n[13],
        b = n[14],
        v = n[15];
      return (
        t[0].setComponents(a - i, u - l, _ - d, v - m).normalize(),
        t[1].setComponents(a + i, u + l, _ + d, v + m).normalize(),
        t[2].setComponents(a + s, u + c, _ + p, v + f).normalize(),
        t[3].setComponents(a - s, u - c, _ - p, v - f).normalize(),
        t[4].setComponents(a - r, u - h, _ - g, v - b).normalize(),
        t[5].setComponents(a + r, u + h, _ + g, v + b).normalize(),
        this
      );
    }
    intersectsObject(e) {
      if (e.boundingSphere !== void 0)
        e.boundingSphere === null && e.computeBoundingSphere(),
          wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
      else {
        const t = e.geometry;
        t.boundingSphere === null && t.computeBoundingSphere(),
          wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
      }
      return this.intersectsSphere(wn);
    }
    intersectsSprite(e) {
      return (
        wn.center.set(0, 0, 0),
        (wn.radius = 0.7071067811865476),
        wn.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(wn)
      );
    }
    intersectsSphere(e) {
      const t = this.planes,
        n = e.center,
        i = -e.radius;
      for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < i) return !1;
      return !0;
    }
    intersectsBox(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) {
        const i = t[n];
        if (
          ((gs.x = i.normal.x > 0 ? e.max.x : e.min.x),
          (gs.y = i.normal.y > 0 ? e.max.y : e.min.y),
          (gs.z = i.normal.z > 0 ? e.max.z : e.min.z),
          i.distanceToPoint(gs) < 0)
        )
          return !1;
      }
      return !0;
    }
    containsPoint(e) {
      const t = this.planes;
      for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
      return !0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  function sc() {
    let o = null,
      e = !1,
      t = null,
      n = null;
    function i(s, r) {
      t(s, r), (n = o.requestAnimationFrame(i));
    }
    return {
      start: function () {
        e !== !0 && t !== null && ((n = o.requestAnimationFrame(i)), (e = !0));
      },
      stop: function () {
        o.cancelAnimationFrame(n), (e = !1);
      },
      setAnimationLoop: function (s) {
        t = s;
      },
      setContext: function (s) {
        o = s;
      }
    };
  }
  function Gu(o, e) {
    const t = e.isWebGL2,
      n = new WeakMap();
    function i(c, h) {
      const u = c.array,
        d = c.usage,
        p = o.createBuffer();
      o.bindBuffer(h, p), o.bufferData(h, u, d), c.onUploadCallback();
      let g;
      if (u instanceof Float32Array) g = 5126;
      else if (u instanceof Uint16Array) {
        if (c.isFloat16BufferAttribute) {
          if (t) g = 5131;
          else
            throw new Error(
              "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
            );
        } else g = 5123;
      } else if (u instanceof Int16Array) g = 5122;
      else if (u instanceof Uint32Array) g = 5125;
      else if (u instanceof Int32Array) g = 5124;
      else if (u instanceof Int8Array) g = 5120;
      else if (u instanceof Uint8Array) g = 5121;
      else if (u instanceof Uint8ClampedArray) g = 5121;
      else
        throw new Error(
          "THREE.WebGLAttributes: Unsupported buffer data format: " + u
        );
      return {
        buffer: p,
        type: g,
        bytesPerElement: u.BYTES_PER_ELEMENT,
        version: c.version
      };
    }
    function s(c, h, u) {
      const d = h.array,
        p = h.updateRange;
      o.bindBuffer(u, c),
        p.count === -1
          ? o.bufferSubData(u, 0, d)
          : (t
              ? o.bufferSubData(
                  u,
                  p.offset * d.BYTES_PER_ELEMENT,
                  d,
                  p.offset,
                  p.count
                )
              : o.bufferSubData(
                  u,
                  p.offset * d.BYTES_PER_ELEMENT,
                  d.subarray(p.offset, p.offset + p.count)
                ),
            (p.count = -1)),
        h.onUploadCallback();
    }
    function r(c) {
      return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
    }
    function a(c) {
      c.isInterleavedBufferAttribute && (c = c.data);
      const h = n.get(c);
      h && (o.deleteBuffer(h.buffer), n.delete(c));
    }
    function l(c, h) {
      if (c.isGLBufferAttribute) {
        const d = n.get(c);
        (!d || d.version < c.version) &&
          n.set(c, {
            buffer: c.buffer,
            type: c.type,
            bytesPerElement: c.elementSize,
            version: c.version
          });
        return;
      }
      c.isInterleavedBufferAttribute && (c = c.data);
      const u = n.get(c);
      u === void 0
        ? n.set(c, i(c, h))
        : u.version < c.version && (s(u.buffer, c, h), (u.version = c.version));
    }
    return { get: r, remove: a, update: l };
  }
  class $r extends Rt {
    constructor(e = 1, t = 1, n = 1, i = 1) {
      super(),
        (this.type = "PlaneGeometry"),
        (this.parameters = {
          width: e,
          height: t,
          widthSegments: n,
          heightSegments: i
        });
      const s = e / 2,
        r = t / 2,
        a = Math.floor(n),
        l = Math.floor(i),
        c = a + 1,
        h = l + 1,
        u = e / a,
        d = t / l,
        p = [],
        g = [],
        _ = [],
        m = [];
      for (let f = 0; f < h; f++) {
        const b = f * d - r;
        for (let v = 0; v < c; v++) {
          const y = v * u - s;
          g.push(y, -b, 0), _.push(0, 0, 1), m.push(v / a), m.push(1 - f / l);
        }
      }
      for (let f = 0; f < l; f++)
        for (let b = 0; b < a; b++) {
          const v = b + c * f,
            y = b + c * (f + 1),
            A = b + 1 + c * (f + 1),
            C = b + 1 + c * f;
          p.push(v, y, C), p.push(y, A, C);
        }
      this.setIndex(p),
        this.setAttribute("position", new Ct(g, 3)),
        this.setAttribute("normal", new Ct(_, 3)),
        this.setAttribute("uv", new Ct(m, 2));
    }
    copy(e) {
      return (
        super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
      );
    }
    static fromJSON(e) {
      return new $r(e.width, e.height, e.widthSegments, e.heightSegments);
    }
  }
  var Hu = `#ifdef USE_ALPHAMAP
      diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
  #endif`,
    Wu = `#ifdef USE_ALPHAMAP
      uniform sampler2D alphaMap;
  #endif`,
    Xu = `#ifdef USE_ALPHATEST
      if ( diffuseColor.a < alphaTest ) discard;
  #endif`,
    qu = `#ifdef USE_ALPHATEST
      uniform float alphaTest;
  #endif`,
    ju = `#ifdef USE_AOMAP
      float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
      reflectedLight.indirectDiffuse *= ambientOcclusion;
      #if defined( USE_ENVMAP ) && defined( STANDARD )
          float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
          reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
      #endif
  #endif`,
    Ku = `#ifdef USE_AOMAP
      uniform sampler2D aoMap;
      uniform float aoMapIntensity;
  #endif`,
    Yu = "vec3 transformed = vec3( position );",
    Zu = `vec3 objectNormal = vec3( normal );
  #ifdef USE_TANGENT
      vec3 objectTangent = vec3( tangent.xyz );
  #endif`,
    $u = `float G_BlinnPhong_Implicit( ) {
      return 0.25;
  }
  float D_BlinnPhong( const in float shininess, const in float dotNH ) {
      return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
  }
  vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
      vec3 halfDir = normalize( lightDir + viewDir );
      float dotNH = saturate( dot( normal, halfDir ) );
      float dotVH = saturate( dot( viewDir, halfDir ) );
      vec3 F = F_Schlick( specularColor, 1.0, dotVH );
      float G = G_BlinnPhong_Implicit( );
      float D = D_BlinnPhong( shininess, dotNH );
      return F * ( G * D );
  } // validated`,
    Ju = `#ifdef USE_IRIDESCENCE
      const mat3 XYZ_TO_REC709 = mat3(
           3.2404542, -0.9692660,  0.0556434,
          -1.5371385,  1.8760108, -0.2040259,
          -0.4985314,  0.0415560,  1.0572252
      );
      vec3 Fresnel0ToIor( vec3 fresnel0 ) {
          vec3 sqrtF0 = sqrt( fresnel0 );
          return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
      }
      vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
          return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
      }
      float IorToFresnel0( float transmittedIor, float incidentIor ) {
          return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
      }
      vec3 evalSensitivity( float OPD, vec3 shift ) {
          float phase = 2.0 * PI * OPD * 1.0e-9;
          vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
          vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
          vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
          vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
          xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
          xyz /= 1.0685e-7;
          vec3 rgb = XYZ_TO_REC709 * xyz;
          return rgb;
      }
      vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
          vec3 I;
          float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
          float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
          float cosTheta2Sq = 1.0 - sinTheta2Sq;
          if ( cosTheta2Sq < 0.0 ) {
               return vec3( 1.0 );
          }
          float cosTheta2 = sqrt( cosTheta2Sq );
          float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
          float R12 = F_Schlick( R0, 1.0, cosTheta1 );
          float R21 = R12;
          float T121 = 1.0 - R12;
          float phi12 = 0.0;
          if ( iridescenceIOR < outsideIOR ) phi12 = PI;
          float phi21 = PI - phi12;
          vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
          vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
          vec3 phi23 = vec3( 0.0 );
          if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
          if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
          if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
          float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
          vec3 phi = vec3( phi21 ) + phi23;
          vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
          vec3 r123 = sqrt( R123 );
          vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
          vec3 C0 = R12 + Rs;
          I = C0;
          vec3 Cm = Rs - T121;
          for ( int m = 1; m <= 2; ++ m ) {
              Cm *= r123;
              vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
              I += Cm * Sm;
          }
          return max( I, vec3( 0.0 ) );
      }
  #endif`,
    Qu = `#ifdef USE_BUMPMAP
      uniform sampler2D bumpMap;
      uniform float bumpScale;
      vec2 dHdxy_fwd() {
          vec2 dSTdx = dFdx( vBumpMapUv );
          vec2 dSTdy = dFdy( vBumpMapUv );
          float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
          float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
          float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
          return vec2( dBx, dBy );
      }
      vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
          vec3 vSigmaX = dFdx( surf_pos.xyz );
          vec3 vSigmaY = dFdy( surf_pos.xyz );
          vec3 vN = surf_norm;
          vec3 R1 = cross( vSigmaY, vN );
          vec3 R2 = cross( vN, vSigmaX );
          float fDet = dot( vSigmaX, R1 ) * faceDirection;
          vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
          return normalize( abs( fDet ) * surf_norm - vGrad );
      }
  #endif`,
    ed = `#if NUM_CLIPPING_PLANES > 0
      vec4 plane;
      #pragma unroll_loop_start
      for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
          plane = clippingPlanes[ i ];
          if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
      }
      #pragma unroll_loop_end
      #if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
          bool clipped = true;
          #pragma unroll_loop_start
          for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
              plane = clippingPlanes[ i ];
              clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
          }
          #pragma unroll_loop_end
          if ( clipped ) discard;
      #endif
  #endif`,
    td = `#if NUM_CLIPPING_PLANES > 0
      varying vec3 vClipPosition;
      uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
  #endif`,
    nd = `#if NUM_CLIPPING_PLANES > 0
      varying vec3 vClipPosition;
  #endif`,
    id = `#if NUM_CLIPPING_PLANES > 0
      vClipPosition = - mvPosition.xyz;
  #endif`,
    sd = `#if defined( USE_COLOR_ALPHA )
      diffuseColor *= vColor;
  #elif defined( USE_COLOR )
      diffuseColor.rgb *= vColor;
  #endif`,
    rd = `#if defined( USE_COLOR_ALPHA )
      varying vec4 vColor;
  #elif defined( USE_COLOR )
      varying vec3 vColor;
  #endif`,
    ad = `#if defined( USE_COLOR_ALPHA )
      varying vec4 vColor;
  #elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
      varying vec3 vColor;
  #endif`,
    od = `#if defined( USE_COLOR_ALPHA )
      vColor = vec4( 1.0 );
  #elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
      vColor = vec3( 1.0 );
  #endif
  #ifdef USE_COLOR
      vColor *= color;
  #endif
  #ifdef USE_INSTANCING_COLOR
      vColor.xyz *= instanceColor.xyz;
  #endif`,
    ld = `#define PI 3.141592653589793
  #define PI2 6.283185307179586
  #define PI_HALF 1.5707963267948966
  #define RECIPROCAL_PI 0.3183098861837907
  #define RECIPROCAL_PI2 0.15915494309189535
  #define EPSILON 1e-6
  #ifndef saturate
  #define saturate( a ) clamp( a, 0.0, 1.0 )
  #endif
  #define whiteComplement( a ) ( 1.0 - saturate( a ) )
  float pow2( const in float x ) { return x*x; }
  vec3 pow2( const in vec3 x ) { return x*x; }
  float pow3( const in float x ) { return x*x*x; }
  float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
  float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
  float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
  highp float rand( const in vec2 uv ) {
      const highp float a = 12.9898, b = 78.233, c = 43758.5453;
      highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
      return fract( sin( sn ) * c );
  }
  #ifdef HIGH_PRECISION
      float precisionSafeLength( vec3 v ) { return length( v ); }
  #else
      float precisionSafeLength( vec3 v ) {
          float maxComponent = max3( abs( v ) );
          return length( v / maxComponent ) * maxComponent;
      }
  #endif
  struct IncidentLight {
      vec3 color;
      vec3 direction;
      bool visible;
  };
  struct ReflectedLight {
      vec3 directDiffuse;
      vec3 directSpecular;
      vec3 indirectDiffuse;
      vec3 indirectSpecular;
  };
  struct GeometricContext {
      vec3 position;
      vec3 normal;
      vec3 viewDir;
  #ifdef USE_CLEARCOAT
      vec3 clearcoatNormal;
  #endif
  };
  vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
      return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
  }
  vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
      return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
  }
  mat3 transposeMat3( const in mat3 m ) {
      mat3 tmp;
      tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
      tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
      tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
      return tmp;
  }
  float luminance( const in vec3 rgb ) {
      const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
      return dot( weights, rgb );
  }
  bool isPerspectiveMatrix( mat4 m ) {
      return m[ 2 ][ 3 ] == - 1.0;
  }
  vec2 equirectUv( in vec3 dir ) {
      float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
      float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
      return vec2( u, v );
  }
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
      return RECIPROCAL_PI * diffuseColor;
  }
  vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
      float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
      return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
  }
  float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
      float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
      return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
  } // validated`,
    cd = `#ifdef ENVMAP_TYPE_CUBE_UV
      #define cubeUV_minMipLevel 4.0
      #define cubeUV_minTileSize 16.0
      float getFace( vec3 direction ) {
          vec3 absDirection = abs( direction );
          float face = - 1.0;
          if ( absDirection.x > absDirection.z ) {
              if ( absDirection.x > absDirection.y )
                  face = direction.x > 0.0 ? 0.0 : 3.0;
              else
                  face = direction.y > 0.0 ? 1.0 : 4.0;
          } else {
              if ( absDirection.z > absDirection.y )
                  face = direction.z > 0.0 ? 2.0 : 5.0;
              else
                  face = direction.y > 0.0 ? 1.0 : 4.0;
          }
          return face;
      }
      vec2 getUV( vec3 direction, float face ) {
          vec2 uv;
          if ( face == 0.0 ) {
              uv = vec2( direction.z, direction.y ) / abs( direction.x );
          } else if ( face == 1.0 ) {
              uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
          } else if ( face == 2.0 ) {
              uv = vec2( - direction.x, direction.y ) / abs( direction.z );
          } else if ( face == 3.0 ) {
              uv = vec2( - direction.z, direction.y ) / abs( direction.x );
          } else if ( face == 4.0 ) {
              uv = vec2( - direction.x, direction.z ) / abs( direction.y );
          } else {
              uv = vec2( direction.x, direction.y ) / abs( direction.z );
          }
          return 0.5 * ( uv + 1.0 );
      }
      vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
          float face = getFace( direction );
          float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
          mipInt = max( mipInt, cubeUV_minMipLevel );
          float faceSize = exp2( mipInt );
          highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
          if ( face > 2.0 ) {
              uv.y += faceSize;
              face -= 3.0;
          }
          uv.x += face * faceSize;
          uv.x += filterInt * 3.0 * cubeUV_minTileSize;
          uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
          uv.x *= CUBEUV_TEXEL_WIDTH;
          uv.y *= CUBEUV_TEXEL_HEIGHT;
          #ifdef texture2DGradEXT
              return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
          #else
              return texture2D( envMap, uv ).rgb;
          #endif
      }
      #define cubeUV_r0 1.0
      #define cubeUV_v0 0.339
      #define cubeUV_m0 - 2.0
      #define cubeUV_r1 0.8
      #define cubeUV_v1 0.276
      #define cubeUV_m1 - 1.0
      #define cubeUV_r4 0.4
      #define cubeUV_v4 0.046
      #define cubeUV_m4 2.0
      #define cubeUV_r5 0.305
      #define cubeUV_v5 0.016
      #define cubeUV_m5 3.0
      #define cubeUV_r6 0.21
      #define cubeUV_v6 0.0038
      #define cubeUV_m6 4.0
      float roughnessToMip( float roughness ) {
          float mip = 0.0;
          if ( roughness >= cubeUV_r1 ) {
              mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
          } else if ( roughness >= cubeUV_r4 ) {
              mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
          } else if ( roughness >= cubeUV_r5 ) {
              mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
          } else if ( roughness >= cubeUV_r6 ) {
              mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
          } else {
              mip = - 2.0 * log2( 1.16 * roughness );		}
          return mip;
      }
      vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
          float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
          float mipF = fract( mip );
          float mipInt = floor( mip );
          vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
          if ( mipF == 0.0 ) {
              return vec4( color0, 1.0 );
          } else {
              vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
              return vec4( mix( color0, color1, mipF ), 1.0 );
          }
      }
  #endif`,
    hd = `vec3 transformedNormal = objectNormal;
  #ifdef USE_INSTANCING
      mat3 m = mat3( instanceMatrix );
      transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
      transformedNormal = m * transformedNormal;
  #endif
  transformedNormal = normalMatrix * transformedNormal;
  #ifdef FLIP_SIDED
      transformedNormal = - transformedNormal;
  #endif
  #ifdef USE_TANGENT
      vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
      #ifdef FLIP_SIDED
          transformedTangent = - transformedTangent;
      #endif
  #endif`,
    ud = `#ifdef USE_DISPLACEMENTMAP
      uniform sampler2D displacementMap;
      uniform float displacementScale;
      uniform float displacementBias;
  #endif`,
    dd = `#ifdef USE_DISPLACEMENTMAP
      transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
  #endif`,
    fd = `#ifdef USE_EMISSIVEMAP
      vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
      totalEmissiveRadiance *= emissiveColor.rgb;
  #endif`,
    pd = `#ifdef USE_EMISSIVEMAP
      uniform sampler2D emissiveMap;
  #endif`,
    md = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    gd = `vec4 LinearToLinear( in vec4 value ) {
      return value;
  }
  vec4 LinearTosRGB( in vec4 value ) {
      return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
  }`,
    _d = `#ifdef USE_ENVMAP
      #ifdef ENV_WORLDPOS
          vec3 cameraToFrag;
          if ( isOrthographic ) {
              cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
          } else {
              cameraToFrag = normalize( vWorldPosition - cameraPosition );
          }
          vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
          #ifdef ENVMAP_MODE_REFLECTION
              vec3 reflectVec = reflect( cameraToFrag, worldNormal );
          #else
              vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
          #endif
      #else
          vec3 reflectVec = vReflect;
      #endif
      #ifdef ENVMAP_TYPE_CUBE
          vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
      #else
          vec4 envColor = vec4( 0.0 );
      #endif
      #ifdef ENVMAP_BLENDING_MULTIPLY
          outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
      #elif defined( ENVMAP_BLENDING_MIX )
          outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
      #elif defined( ENVMAP_BLENDING_ADD )
          outgoingLight += envColor.xyz * specularStrength * reflectivity;
      #endif
  #endif`,
    xd = `#ifdef USE_ENVMAP
      uniform float envMapIntensity;
      uniform float flipEnvMap;
      #ifdef ENVMAP_TYPE_CUBE
          uniform samplerCube envMap;
      #else
          uniform sampler2D envMap;
      #endif
      
  #endif`,
    vd = `#ifdef USE_ENVMAP
      uniform float reflectivity;
      #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
          #define ENV_WORLDPOS
      #endif
      #ifdef ENV_WORLDPOS
          varying vec3 vWorldPosition;
          uniform float refractionRatio;
      #else
          varying vec3 vReflect;
      #endif
  #endif`,
    Sd = `#ifdef USE_ENVMAP
      #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
          #define ENV_WORLDPOS
      #endif
      #ifdef ENV_WORLDPOS
          
          varying vec3 vWorldPosition;
      #else
          varying vec3 vReflect;
          uniform float refractionRatio;
      #endif
  #endif`,
    Md = `#ifdef USE_ENVMAP
      #ifdef ENV_WORLDPOS
          vWorldPosition = worldPosition.xyz;
      #else
          vec3 cameraToVertex;
          if ( isOrthographic ) {
              cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
          } else {
              cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
          }
          vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
          #ifdef ENVMAP_MODE_REFLECTION
              vReflect = reflect( cameraToVertex, worldNormal );
          #else
              vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
          #endif
      #endif
  #endif`,
    yd = `#ifdef USE_FOG
      vFogDepth = - mvPosition.z;
  #endif`,
    Td = `#ifdef USE_FOG
      varying float vFogDepth;
  #endif`,
    bd = `#ifdef USE_FOG
      #ifdef FOG_EXP2
          float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
      #else
          float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
      #endif
      gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
  #endif`,
    Ad = `#ifdef USE_FOG
      uniform vec3 fogColor;
      varying float vFogDepth;
      #ifdef FOG_EXP2
          uniform float fogDensity;
      #else
          uniform float fogNear;
          uniform float fogFar;
      #endif
  #endif`,
    Ed = `#ifdef USE_GRADIENTMAP
      uniform sampler2D gradientMap;
  #endif
  vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
      float dotNL = dot( normal, lightDirection );
      vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
      #ifdef USE_GRADIENTMAP
          return vec3( texture2D( gradientMap, coord ).r );
      #else
          vec2 fw = fwidth( coord ) * 0.5;
          return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
      #endif
  }`,
    wd = `#ifdef USE_LIGHTMAP
      vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
      vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
      reflectedLight.indirectDiffuse += lightMapIrradiance;
  #endif`,
    Cd = `#ifdef USE_LIGHTMAP
      uniform sampler2D lightMap;
      uniform float lightMapIntensity;
  #endif`,
    Rd = `LambertMaterial material;
  material.diffuseColor = diffuseColor.rgb;
  material.specularStrength = specularStrength;`,
    Id = `varying vec3 vViewPosition;
  struct LambertMaterial {
      vec3 diffuseColor;
      float specularStrength;
  };
  void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
      float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
      vec3 irradiance = dotNL * directLight.color;
      reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
  }
  void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
      reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
  }
  #define RE_Direct				RE_Direct_Lambert
  #define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
    Ld = `uniform bool receiveShadow;
  uniform vec3 ambientLightColor;
  uniform vec3 lightProbe[ 9 ];
  vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
      float x = normal.x, y = normal.y, z = normal.z;
      vec3 result = shCoefficients[ 0 ] * 0.886227;
      result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
      result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
      result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
      result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
      result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
      result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
      result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
      result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
      return result;
  }
  vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
      vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
      vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
      return irradiance;
  }
  vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
      vec3 irradiance = ambientLightColor;
      return irradiance;
  }
  float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
      #if defined ( LEGACY_LIGHTS )
          if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
              return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
          }
          return 1.0;
      #else
          float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
          if ( cutoffDistance > 0.0 ) {
              distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
          }
          return distanceFalloff;
      #endif
  }
  float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
      return smoothstep( coneCosine, penumbraCosine, angleCosine );
  }
  #if NUM_DIR_LIGHTS > 0
      struct DirectionalLight {
          vec3 direction;
          vec3 color;
      };
      uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
      void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
          light.color = directionalLight.color;
          light.direction = directionalLight.direction;
          light.visible = true;
      }
  #endif
  #if NUM_POINT_LIGHTS > 0
      struct PointLight {
          vec3 position;
          vec3 color;
          float distance;
          float decay;
      };
      uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
      void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
          vec3 lVector = pointLight.position - geometry.position;
          light.direction = normalize( lVector );
          float lightDistance = length( lVector );
          light.color = pointLight.color;
          light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
          light.visible = ( light.color != vec3( 0.0 ) );
      }
  #endif
  #if NUM_SPOT_LIGHTS > 0
      struct SpotLight {
          vec3 position;
          vec3 direction;
          vec3 color;
          float distance;
          float decay;
          float coneCos;
          float penumbraCos;
      };
      uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
      void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
          vec3 lVector = spotLight.position - geometry.position;
          light.direction = normalize( lVector );
          float angleCos = dot( light.direction, spotLight.direction );
          float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
          if ( spotAttenuation > 0.0 ) {
              float lightDistance = length( lVector );
              light.color = spotLight.color * spotAttenuation;
              light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
              light.visible = ( light.color != vec3( 0.0 ) );
          } else {
              light.color = vec3( 0.0 );
              light.visible = false;
          }
      }
  #endif
  #if NUM_RECT_AREA_LIGHTS > 0
      struct RectAreaLight {
          vec3 color;
          vec3 position;
          vec3 halfWidth;
          vec3 halfHeight;
      };
      uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
      uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
  #endif
  #if NUM_HEMI_LIGHTS > 0
      struct HemisphereLight {
          vec3 direction;
          vec3 skyColor;
          vec3 groundColor;
      };
      uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
      vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
          float dotNL = dot( normal, hemiLight.direction );
          float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
          vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
          return irradiance;
      }
  #endif`,
    Pd = `#if defined( USE_ENVMAP )
      vec3 getIBLIrradiance( const in vec3 normal ) {
          #if defined( ENVMAP_TYPE_CUBE_UV )
              vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
              vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
              return PI * envMapColor.rgb * envMapIntensity;
          #else
              return vec3( 0.0 );
          #endif
      }
      vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
          #if defined( ENVMAP_TYPE_CUBE_UV )
              vec3 reflectVec = reflect( - viewDir, normal );
              reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
              reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
              vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
              return envMapColor.rgb * envMapIntensity;
          #else
              return vec3( 0.0 );
          #endif
      }
  #endif`,
    Dd = `ToonMaterial material;
  material.diffuseColor = diffuseColor.rgb;`,
    Nd = `varying vec3 vViewPosition;
  struct ToonMaterial {
      vec3 diffuseColor;
  };
  void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
      vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
      reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
  }
  void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
      reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
  }
  #define RE_Direct				RE_Direct_Toon
  #define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
    Od = `BlinnPhongMaterial material;
  material.diffuseColor = diffuseColor.rgb;
  material.specularColor = specular;
  material.specularShininess = shininess;
  material.specularStrength = specularStrength;`,
    Ud = `varying vec3 vViewPosition;
  struct BlinnPhongMaterial {
      vec3 diffuseColor;
      vec3 specularColor;
      float specularShininess;
      float specularStrength;
  };
  void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
      float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
      vec3 irradiance = dotNL * directLight.color;
      reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
      reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
  }
  void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
      reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
  }
  #define RE_Direct				RE_Direct_BlinnPhong
  #define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
    Fd = `PhysicalMaterial material;
  material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
  vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
  float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
  material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
  material.roughness = min( material.roughness, 1.0 );
  #ifdef IOR
      material.ior = ior;
      #ifdef USE_SPECULAR
          float specularIntensityFactor = specularIntensity;
          vec3 specularColorFactor = specularColor;
          #ifdef USE_SPECULAR_COLORMAP
              specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
          #endif
          #ifdef USE_SPECULAR_INTENSITYMAP
              specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
          #endif
          material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
      #else
          float specularIntensityFactor = 1.0;
          vec3 specularColorFactor = vec3( 1.0 );
          material.specularF90 = 1.0;
      #endif
      material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
  #else
      material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
      material.specularF90 = 1.0;
  #endif
  #ifdef USE_CLEARCOAT
      material.clearcoat = clearcoat;
      material.clearcoatRoughness = clearcoatRoughness;
      material.clearcoatF0 = vec3( 0.04 );
      material.clearcoatF90 = 1.0;
      #ifdef USE_CLEARCOATMAP
          material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
      #endif
      #ifdef USE_CLEARCOAT_ROUGHNESSMAP
          material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
      #endif
      material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
      material.clearcoatRoughness += geometryRoughness;
      material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
  #endif
  #ifdef USE_IRIDESCENCE
      material.iridescence = iridescence;
      material.iridescenceIOR = iridescenceIOR;
      #ifdef USE_IRIDESCENCEMAP
          material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
      #endif
      #ifdef USE_IRIDESCENCE_THICKNESSMAP
          material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
      #else
          material.iridescenceThickness = iridescenceThicknessMaximum;
      #endif
  #endif
  #ifdef USE_SHEEN
      material.sheenColor = sheenColor;
      #ifdef USE_SHEEN_COLORMAP
          material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
      #endif
      material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
      #ifdef USE_SHEEN_ROUGHNESSMAP
          material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
      #endif
  #endif`,
    Bd = `struct PhysicalMaterial {
      vec3 diffuseColor;
      float roughness;
      vec3 specularColor;
      float specularF90;
      #ifdef USE_CLEARCOAT
          float clearcoat;
          float clearcoatRoughness;
          vec3 clearcoatF0;
          float clearcoatF90;
      #endif
      #ifdef USE_IRIDESCENCE
          float iridescence;
          float iridescenceIOR;
          float iridescenceThickness;
          vec3 iridescenceFresnel;
          vec3 iridescenceF0;
      #endif
      #ifdef USE_SHEEN
          vec3 sheenColor;
          float sheenRoughness;
      #endif
      #ifdef IOR
          float ior;
      #endif
      #ifdef USE_TRANSMISSION
          float transmission;
          float transmissionAlpha;
          float thickness;
          float attenuationDistance;
          vec3 attenuationColor;
      #endif
  };
  vec3 clearcoatSpecular = vec3( 0.0 );
  vec3 sheenSpecular = vec3( 0.0 );
  vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
      float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
      float x2 = x * x;
      float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
      return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
  }
  float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
      float a2 = pow2( alpha );
      float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
      float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
      return 0.5 / max( gv + gl, EPSILON );
  }
  float D_GGX( const in float alpha, const in float dotNH ) {
      float a2 = pow2( alpha );
      float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
      return RECIPROCAL_PI * a2 / pow2( denom );
  }
  #ifdef USE_CLEARCOAT
      vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
          vec3 f0 = material.clearcoatF0;
          float f90 = material.clearcoatF90;
          float roughness = material.clearcoatRoughness;
          float alpha = pow2( roughness );
          vec3 halfDir = normalize( lightDir + viewDir );
          float dotNL = saturate( dot( normal, lightDir ) );
          float dotNV = saturate( dot( normal, viewDir ) );
          float dotNH = saturate( dot( normal, halfDir ) );
          float dotVH = saturate( dot( viewDir, halfDir ) );
          vec3 F = F_Schlick( f0, f90, dotVH );
          float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
          float D = D_GGX( alpha, dotNH );
          return F * ( V * D );
      }
  #endif
  vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
      vec3 f0 = material.specularColor;
      float f90 = material.specularF90;
      float roughness = material.roughness;
      float alpha = pow2( roughness );
      vec3 halfDir = normalize( lightDir + viewDir );
      float dotNL = saturate( dot( normal, lightDir ) );
      float dotNV = saturate( dot( normal, viewDir ) );
      float dotNH = saturate( dot( normal, halfDir ) );
      float dotVH = saturate( dot( viewDir, halfDir ) );
      vec3 F = F_Schlick( f0, f90, dotVH );
      #ifdef USE_IRIDESCENCE
          F = mix( F, material.iridescenceFresnel, material.iridescence );
      #endif
      float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
      float D = D_GGX( alpha, dotNH );
      return F * ( V * D );
  }
  vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
      const float LUT_SIZE = 64.0;
      const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
      const float LUT_BIAS = 0.5 / LUT_SIZE;
      float dotNV = saturate( dot( N, V ) );
      vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
      uv = uv * LUT_SCALE + LUT_BIAS;
      return uv;
  }
  float LTC_ClippedSphereFormFactor( const in vec3 f ) {
      float l = length( f );
      return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
  }
  vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
      float x = dot( v1, v2 );
      float y = abs( x );
      float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
      float b = 3.4175940 + ( 4.1616724 + y ) * y;
      float v = a / b;
      float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
      return cross( v1, v2 ) * theta_sintheta;
  }
  vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
      vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
      vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
      vec3 lightNormal = cross( v1, v2 );
      if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
      vec3 T1, T2;
      T1 = normalize( V - N * dot( V, N ) );
      T2 = - cross( N, T1 );
      mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
      vec3 coords[ 4 ];
      coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
      coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
      coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
      coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
      coords[ 0 ] = normalize( coords[ 0 ] );
      coords[ 1 ] = normalize( coords[ 1 ] );
      coords[ 2 ] = normalize( coords[ 2 ] );
      coords[ 3 ] = normalize( coords[ 3 ] );
      vec3 vectorFormFactor = vec3( 0.0 );
      vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
      vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
      vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
      vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
      float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
      return vec3( result );
  }
  #if defined( USE_SHEEN )
  float D_Charlie( float roughness, float dotNH ) {
      float alpha = pow2( roughness );
      float invAlpha = 1.0 / alpha;
      float cos2h = dotNH * dotNH;
      float sin2h = max( 1.0 - cos2h, 0.0078125 );
      return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
  }
  float V_Neubelt( float dotNV, float dotNL ) {
      return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
  }
  vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
      vec3 halfDir = normalize( lightDir + viewDir );
      float dotNL = saturate( dot( normal, lightDir ) );
      float dotNV = saturate( dot( normal, viewDir ) );
      float dotNH = saturate( dot( normal, halfDir ) );
      float D = D_Charlie( sheenRoughness, dotNH );
      float V = V_Neubelt( dotNV, dotNL );
      return sheenColor * ( D * V );
  }
  #endif
  float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
      float dotNV = saturate( dot( normal, viewDir ) );
      float r2 = roughness * roughness;
      float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
      float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
      float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
      return saturate( DG * RECIPROCAL_PI );
  }
  vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
      float dotNV = saturate( dot( normal, viewDir ) );
      const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
      const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
      vec4 r = roughness * c0 + c1;
      float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
      vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
      return fab;
  }
  vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
      vec2 fab = DFGApprox( normal, viewDir, roughness );
      return specularColor * fab.x + specularF90 * fab.y;
  }
  #ifdef USE_IRIDESCENCE
  void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
  #else
  void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
  #endif
      vec2 fab = DFGApprox( normal, viewDir, roughness );
      #ifdef USE_IRIDESCENCE
          vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
      #else
          vec3 Fr = specularColor;
      #endif
      vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
      float Ess = fab.x + fab.y;
      float Ems = 1.0 - Ess;
      vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
      singleScatter += FssEss;
      multiScatter += Fms * Ems;
  }
  #if NUM_RECT_AREA_LIGHTS > 0
      void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
          vec3 normal = geometry.normal;
          vec3 viewDir = geometry.viewDir;
          vec3 position = geometry.position;
          vec3 lightPos = rectAreaLight.position;
          vec3 halfWidth = rectAreaLight.halfWidth;
          vec3 halfHeight = rectAreaLight.halfHeight;
          vec3 lightColor = rectAreaLight.color;
          float roughness = material.roughness;
          vec3 rectCoords[ 4 ];
          rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
          rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
          rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
          vec2 uv = LTC_Uv( normal, viewDir, roughness );
          vec4 t1 = texture2D( ltc_1, uv );
          vec4 t2 = texture2D( ltc_2, uv );
          mat3 mInv = mat3(
              vec3( t1.x, 0, t1.y ),
              vec3(    0, 1,    0 ),
              vec3( t1.z, 0, t1.w )
          );
          vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
          reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
          reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
      }
  #endif
  void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
      float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
      vec3 irradiance = dotNL * directLight.color;
      #ifdef USE_CLEARCOAT
          float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
          vec3 ccIrradiance = dotNLcc * directLight.color;
          clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
      #endif
      #ifdef USE_SHEEN
          sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
      #endif
      reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
      reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
  }
  void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
      reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
  }
  void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
      #ifdef USE_CLEARCOAT
          clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
      #endif
      #ifdef USE_SHEEN
          sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
      #endif
      vec3 singleScattering = vec3( 0.0 );
      vec3 multiScattering = vec3( 0.0 );
      vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
      #ifdef USE_IRIDESCENCE
          computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
      #else
          computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
      #endif
      vec3 totalScattering = singleScattering + multiScattering;
      vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
      reflectedLight.indirectSpecular += radiance * singleScattering;
      reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
      reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
  }
  #define RE_Direct				RE_Direct_Physical
  #define RE_Direct_RectArea		RE_Direct_RectArea_Physical
  #define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
  #define RE_IndirectSpecular		RE_IndirectSpecular_Physical
  float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
      return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
  }`,
    zd = `
  GeometricContext geometry;
  geometry.position = - vViewPosition;
  geometry.normal = normal;
  geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
  #ifdef USE_CLEARCOAT
      geometry.clearcoatNormal = clearcoatNormal;
  #endif
  #ifdef USE_IRIDESCENCE
      float dotNVi = saturate( dot( normal, geometry.viewDir ) );
      if ( material.iridescenceThickness == 0.0 ) {
          material.iridescence = 0.0;
      } else {
          material.iridescence = saturate( material.iridescence );
      }
      if ( material.iridescence > 0.0 ) {
          material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
          material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
      }
  #endif
  IncidentLight directLight;
  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
      PointLight pointLight;
      #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
      PointLightShadow pointLightShadow;
      #endif
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
          pointLight = pointLights[ i ];
          getPointLightInfo( pointLight, geometry, directLight );
          #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
          pointLightShadow = pointLightShadows[ i ];
          directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
          #endif
          RE_Direct( directLight, geometry, material, reflectedLight );
      }
      #pragma unroll_loop_end
  #endif
  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
      SpotLight spotLight;
      vec4 spotColor;
      vec3 spotLightCoord;
      bool inSpotLightMap;
      #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
      SpotLightShadow spotLightShadow;
      #endif
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
          spotLight = spotLights[ i ];
          getSpotLightInfo( spotLight, geometry, directLight );
          #if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
          #define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
          #elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
          #define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
          #else
          #define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
          #endif
          #if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
              spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
              inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
              spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
              directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
          #endif
          #undef SPOT_LIGHT_MAP_INDEX
          #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
          spotLightShadow = spotLightShadows[ i ];
          directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
          #endif
          RE_Direct( directLight, geometry, material, reflectedLight );
      }
      #pragma unroll_loop_end
  #endif
  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
      DirectionalLight directionalLight;
      #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
      DirectionalLightShadow directionalLightShadow;
      #endif
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
          directionalLight = directionalLights[ i ];
          getDirectionalLightInfo( directionalLight, geometry, directLight );
          #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
          directionalLightShadow = directionalLightShadows[ i ];
          directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
          #endif
          RE_Direct( directLight, geometry, material, reflectedLight );
      }
      #pragma unroll_loop_end
  #endif
  #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
      RectAreaLight rectAreaLight;
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
          rectAreaLight = rectAreaLights[ i ];
          RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
      }
      #pragma unroll_loop_end
  #endif
  #if defined( RE_IndirectDiffuse )
      vec3 iblIrradiance = vec3( 0.0 );
      vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
      #if ( NUM_HEMI_LIGHTS > 0 )
          #pragma unroll_loop_start
          for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
              irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
          }
          #pragma unroll_loop_end
      #endif
  #endif
  #if defined( RE_IndirectSpecular )
      vec3 radiance = vec3( 0.0 );
      vec3 clearcoatRadiance = vec3( 0.0 );
  #endif`,
    kd = `#if defined( RE_IndirectDiffuse )
      #ifdef USE_LIGHTMAP
          vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
          vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
          irradiance += lightMapIrradiance;
      #endif
      #if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
          iblIrradiance += getIBLIrradiance( geometry.normal );
      #endif
  #endif
  #if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
      radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
      #ifdef USE_CLEARCOAT
          clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
      #endif
  #endif`,
    Vd = `#if defined( RE_IndirectDiffuse )
      RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
  #endif
  #if defined( RE_IndirectSpecular )
      RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
  #endif`,
    Gd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
      gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
  #endif`,
    Hd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
      uniform float logDepthBufFC;
      varying float vFragDepth;
      varying float vIsPerspective;
  #endif`,
    Wd = `#ifdef USE_LOGDEPTHBUF
      #ifdef USE_LOGDEPTHBUF_EXT
          varying float vFragDepth;
          varying float vIsPerspective;
      #else
          uniform float logDepthBufFC;
      #endif
  #endif`,
    Xd = `#ifdef USE_LOGDEPTHBUF
      #ifdef USE_LOGDEPTHBUF_EXT
          vFragDepth = 1.0 + gl_Position.w;
          vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
      #else
          if ( isPerspectiveMatrix( projectionMatrix ) ) {
              gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
              gl_Position.z *= gl_Position.w;
          }
      #endif
  #endif`,
    qd = `#ifdef USE_MAP
      vec4 sampledDiffuseColor = texture2D( map, vMapUv );
      #ifdef DECODE_VIDEO_TEXTURE
          sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
      #endif
      diffuseColor *= sampledDiffuseColor;
  #endif`,
    jd = `#ifdef USE_MAP
      uniform sampler2D map;
  #endif`,
    Kd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
      #if defined( USE_POINTS_UV )
          vec2 uv = vUv;
      #else
          vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
      #endif
  #endif
  #ifdef USE_MAP
      diffuseColor *= texture2D( map, uv );
  #endif
  #ifdef USE_ALPHAMAP
      diffuseColor.a *= texture2D( alphaMap, uv ).g;
  #endif`,
    Yd = `#if defined( USE_POINTS_UV )
      varying vec2 vUv;
  #else
      #if defined( USE_MAP ) || defined( USE_ALPHAMAP )
          uniform mat3 uvTransform;
      #endif
  #endif
  #ifdef USE_MAP
      uniform sampler2D map;
  #endif
  #ifdef USE_ALPHAMAP
      uniform sampler2D alphaMap;
  #endif`,
    Zd = `float metalnessFactor = metalness;
  #ifdef USE_METALNESSMAP
      vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
      metalnessFactor *= texelMetalness.b;
  #endif`,
    $d = `#ifdef USE_METALNESSMAP
      uniform sampler2D metalnessMap;
  #endif`,
    Jd = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
      vColor *= morphTargetBaseInfluence;
      for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
          #if defined( USE_COLOR_ALPHA )
              if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
          #elif defined( USE_COLOR )
              if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
          #endif
      }
  #endif`,
    Qd = `#ifdef USE_MORPHNORMALS
      objectNormal *= morphTargetBaseInfluence;
      #ifdef MORPHTARGETS_TEXTURE
          for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
              if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
          }
      #else
          objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
          objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
          objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
          objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
      #endif
  #endif`,
    ef = `#ifdef USE_MORPHTARGETS
      uniform float morphTargetBaseInfluence;
      #ifdef MORPHTARGETS_TEXTURE
          uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
          uniform sampler2DArray morphTargetsTexture;
          uniform ivec2 morphTargetsTextureSize;
          vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
              int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
              int y = texelIndex / morphTargetsTextureSize.x;
              int x = texelIndex - y * morphTargetsTextureSize.x;
              ivec3 morphUV = ivec3( x, y, morphTargetIndex );
              return texelFetch( morphTargetsTexture, morphUV, 0 );
          }
      #else
          #ifndef USE_MORPHNORMALS
              uniform float morphTargetInfluences[ 8 ];
          #else
              uniform float morphTargetInfluences[ 4 ];
          #endif
      #endif
  #endif`,
    tf = `#ifdef USE_MORPHTARGETS
      transformed *= morphTargetBaseInfluence;
      #ifdef MORPHTARGETS_TEXTURE
          for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
              if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
          }
      #else
          transformed += morphTarget0 * morphTargetInfluences[ 0 ];
          transformed += morphTarget1 * morphTargetInfluences[ 1 ];
          transformed += morphTarget2 * morphTargetInfluences[ 2 ];
          transformed += morphTarget3 * morphTargetInfluences[ 3 ];
          #ifndef USE_MORPHNORMALS
              transformed += morphTarget4 * morphTargetInfluences[ 4 ];
              transformed += morphTarget5 * morphTargetInfluences[ 5 ];
              transformed += morphTarget6 * morphTargetInfluences[ 6 ];
              transformed += morphTarget7 * morphTargetInfluences[ 7 ];
          #endif
      #endif
  #endif`,
    nf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
  #ifdef FLAT_SHADED
      vec3 fdx = dFdx( vViewPosition );
      vec3 fdy = dFdy( vViewPosition );
      vec3 normal = normalize( cross( fdx, fdy ) );
  #else
      vec3 normal = normalize( vNormal );
      #ifdef DOUBLE_SIDED
          normal *= faceDirection;
      #endif
  #endif
  #ifdef USE_NORMALMAP_TANGENTSPACE
      #ifdef USE_TANGENT
          mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
      #else
          mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
      #endif
      #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
          tbn[0] *= faceDirection;
          tbn[1] *= faceDirection;
      #endif
  #endif
  #ifdef USE_CLEARCOAT_NORMALMAP
      #ifdef USE_TANGENT
          mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
      #else
          mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
      #endif
      #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
          tbn2[0] *= faceDirection;
          tbn2[1] *= faceDirection;
      #endif
  #endif
  vec3 geometryNormal = normal;`,
    sf = `#ifdef USE_NORMALMAP_OBJECTSPACE
      normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
      #ifdef FLIP_SIDED
          normal = - normal;
      #endif
      #ifdef DOUBLE_SIDED
          normal = normal * faceDirection;
      #endif
      normal = normalize( normalMatrix * normal );
  #elif defined( USE_NORMALMAP_TANGENTSPACE )
      vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
      mapN.xy *= normalScale;
      normal = normalize( tbn * mapN );
  #elif defined( USE_BUMPMAP )
      normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
  #endif`,
    rf = `#ifndef FLAT_SHADED
      varying vec3 vNormal;
      #ifdef USE_TANGENT
          varying vec3 vTangent;
          varying vec3 vBitangent;
      #endif
  #endif`,
    af = `#ifndef FLAT_SHADED
      varying vec3 vNormal;
      #ifdef USE_TANGENT
          varying vec3 vTangent;
          varying vec3 vBitangent;
      #endif
  #endif`,
    of = `#ifndef FLAT_SHADED
      vNormal = normalize( transformedNormal );
      #ifdef USE_TANGENT
          vTangent = normalize( transformedTangent );
          vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
      #endif
  #endif`,
    lf = `#ifdef USE_NORMALMAP
      uniform sampler2D normalMap;
      uniform vec2 normalScale;
  #endif
  #ifdef USE_NORMALMAP_OBJECTSPACE
      uniform mat3 normalMatrix;
  #endif
  #if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
      mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
          vec3 q0 = dFdx( eye_pos.xyz );
          vec3 q1 = dFdy( eye_pos.xyz );
          vec2 st0 = dFdx( uv.st );
          vec2 st1 = dFdy( uv.st );
          vec3 N = surf_norm;
          vec3 q1perp = cross( q1, N );
          vec3 q0perp = cross( N, q0 );
          vec3 T = q1perp * st0.x + q0perp * st1.x;
          vec3 B = q1perp * st0.y + q0perp * st1.y;
          float det = max( dot( T, T ), dot( B, B ) );
          float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
          return mat3( T * scale, B * scale, N );
      }
  #endif`,
    cf = `#ifdef USE_CLEARCOAT
      vec3 clearcoatNormal = geometryNormal;
  #endif`,
    hf = `#ifdef USE_CLEARCOAT_NORMALMAP
      vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
      clearcoatMapN.xy *= clearcoatNormalScale;
      clearcoatNormal = normalize( tbn2 * clearcoatMapN );
  #endif`,
    uf = `#ifdef USE_CLEARCOATMAP
      uniform sampler2D clearcoatMap;
  #endif
  #ifdef USE_CLEARCOAT_NORMALMAP
      uniform sampler2D clearcoatNormalMap;
      uniform vec2 clearcoatNormalScale;
  #endif
  #ifdef USE_CLEARCOAT_ROUGHNESSMAP
      uniform sampler2D clearcoatRoughnessMap;
  #endif`,
    df = `#ifdef USE_IRIDESCENCEMAP
      uniform sampler2D iridescenceMap;
  #endif
  #ifdef USE_IRIDESCENCE_THICKNESSMAP
      uniform sampler2D iridescenceThicknessMap;
  #endif`,
    ff = `#ifdef OPAQUE
  diffuseColor.a = 1.0;
  #endif
  #ifdef USE_TRANSMISSION
  diffuseColor.a *= material.transmissionAlpha + 0.1;
  #endif
  gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
    pf = `vec3 packNormalToRGB( const in vec3 normal ) {
      return normalize( normal ) * 0.5 + 0.5;
  }
  vec3 unpackRGBToNormal( const in vec3 rgb ) {
      return 2.0 * rgb.xyz - 1.0;
  }
  const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
  const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
  const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
  const float ShiftRight8 = 1. / 256.;
  vec4 packDepthToRGBA( const in float v ) {
      vec4 r = vec4( fract( v * PackFactors ), v );
      r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
  }
  float unpackRGBAToDepth( const in vec4 v ) {
      return dot( v, UnpackFactors );
  }
  vec2 packDepthToRG( in highp float v ) {
      return packDepthToRGBA( v ).yx;
  }
  float unpackRGToDepth( const in highp vec2 v ) {
      return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
  }
  vec4 pack2HalfToRGBA( vec2 v ) {
      vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
      return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
  }
  vec2 unpackRGBATo2Half( vec4 v ) {
      return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
  }
  float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
      return ( viewZ + near ) / ( near - far );
  }
  float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
      return depth * ( near - far ) - near;
  }
  float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
      return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
  }
  float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
      return ( near * far ) / ( ( far - near ) * depth - far );
  }`,
    mf = `#ifdef PREMULTIPLIED_ALPHA
      gl_FragColor.rgb *= gl_FragColor.a;
  #endif`,
    gf = `vec4 mvPosition = vec4( transformed, 1.0 );
  #ifdef USE_INSTANCING
      mvPosition = instanceMatrix * mvPosition;
  #endif
  mvPosition = modelViewMatrix * mvPosition;
  gl_Position = projectionMatrix * mvPosition;`,
    _f = `#ifdef DITHERING
      gl_FragColor.rgb = dithering( gl_FragColor.rgb );
  #endif`,
    xf = `#ifdef DITHERING
      vec3 dithering( vec3 color ) {
          float grid_position = rand( gl_FragCoord.xy );
          vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
          dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
          return color + dither_shift_RGB;
      }
  #endif`,
    vf = `float roughnessFactor = roughness;
  #ifdef USE_ROUGHNESSMAP
      vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
      roughnessFactor *= texelRoughness.g;
  #endif`,
    Sf = `#ifdef USE_ROUGHNESSMAP
      uniform sampler2D roughnessMap;
  #endif`,
    Mf = `#if NUM_SPOT_LIGHT_COORDS > 0
      varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
  #endif
  #if NUM_SPOT_LIGHT_MAPS > 0
      uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
  #endif
  #ifdef USE_SHADOWMAP
      #if NUM_DIR_LIGHT_SHADOWS > 0
          uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
          varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
          struct DirectionalLightShadow {
              float shadowBias;
              float shadowNormalBias;
              float shadowRadius;
              vec2 shadowMapSize;
          };
          uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
      #endif
      #if NUM_SPOT_LIGHT_SHADOWS > 0
          uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
          struct SpotLightShadow {
              float shadowBias;
              float shadowNormalBias;
              float shadowRadius;
              vec2 shadowMapSize;
          };
          uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
      #endif
      #if NUM_POINT_LIGHT_SHADOWS > 0
          uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
          varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
          struct PointLightShadow {
              float shadowBias;
              float shadowNormalBias;
              float shadowRadius;
              vec2 shadowMapSize;
              float shadowCameraNear;
              float shadowCameraFar;
          };
          uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
      #endif
      float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
          return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
      }
      vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
          return unpackRGBATo2Half( texture2D( shadow, uv ) );
      }
      float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
          float occlusion = 1.0;
          vec2 distribution = texture2DDistribution( shadow, uv );
          float hard_shadow = step( compare , distribution.x );
          if (hard_shadow != 1.0 ) {
              float distance = compare - distribution.x ;
              float variance = max( 0.00000, distribution.y * distribution.y );
              float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
          }
          return occlusion;
      }
      float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
          float shadow = 1.0;
          shadowCoord.xyz /= shadowCoord.w;
          shadowCoord.z += shadowBias;
          bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
          bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
          if ( frustumTest ) {
          #if defined( SHADOWMAP_TYPE_PCF )
              vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
              float dx0 = - texelSize.x * shadowRadius;
              float dy0 = - texelSize.y * shadowRadius;
              float dx1 = + texelSize.x * shadowRadius;
              float dy1 = + texelSize.y * shadowRadius;
              float dx2 = dx0 / 2.0;
              float dy2 = dy0 / 2.0;
              float dx3 = dx1 / 2.0;
              float dy3 = dy1 / 2.0;
              shadow = (
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
              ) * ( 1.0 / 17.0 );
          #elif defined( SHADOWMAP_TYPE_PCF_SOFT )
              vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
              float dx = texelSize.x;
              float dy = texelSize.y;
              vec2 uv = shadowCoord.xy;
              vec2 f = fract( uv * shadowMapSize + 0.5 );
              uv -= f * texelSize;
              shadow = (
                  texture2DCompare( shadowMap, uv, shadowCoord.z ) +
                  texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
                  texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
                  mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
                       texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
                       f.x ) +
                  mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
                       texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
                       f.x ) +
                  mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
                       texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
                       f.y ) +
                  mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
                       texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
                       f.y ) +
                  mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
                            texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
                            f.x ),
                       mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
                            texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
                            f.x ),
                       f.y )
              ) * ( 1.0 / 9.0 );
          #elif defined( SHADOWMAP_TYPE_VSM )
              shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
          #else
              shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
          #endif
          }
          return shadow;
      }
      vec2 cubeToUV( vec3 v, float texelSizeY ) {
          vec3 absV = abs( v );
          float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
          absV *= scaleToCube;
          v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
          vec2 planar = v.xy;
          float almostATexel = 1.5 * texelSizeY;
          float almostOne = 1.0 - almostATexel;
          if ( absV.z >= almostOne ) {
              if ( v.z > 0.0 )
                  planar.x = 4.0 - v.x;
          } else if ( absV.x >= almostOne ) {
              float signX = sign( v.x );
              planar.x = v.z * signX + 2.0 * signX;
          } else if ( absV.y >= almostOne ) {
              float signY = sign( v.y );
              planar.x = v.x + 2.0 * signY + 2.0;
              planar.y = v.z * signY - 2.0;
          }
          return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
      }
      float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
          vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
          vec3 lightToPosition = shadowCoord.xyz;
          float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
          vec3 bd3D = normalize( lightToPosition );
          #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
              vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
              return (
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
              ) * ( 1.0 / 9.0 );
          #else
              return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
          #endif
      }
  #endif`,
    yf = `#if NUM_SPOT_LIGHT_COORDS > 0
      uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
      varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
  #endif
  #ifdef USE_SHADOWMAP
      #if NUM_DIR_LIGHT_SHADOWS > 0
          uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
          varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
          struct DirectionalLightShadow {
              float shadowBias;
              float shadowNormalBias;
              float shadowRadius;
              vec2 shadowMapSize;
          };
          uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
      #endif
      #if NUM_SPOT_LIGHT_SHADOWS > 0
          struct SpotLightShadow {
              float shadowBias;
              float shadowNormalBias;
              float shadowRadius;
              vec2 shadowMapSize;
          };
          uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
      #endif
      #if NUM_POINT_LIGHT_SHADOWS > 0
          uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
          varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
          struct PointLightShadow {
              float shadowBias;
              float shadowNormalBias;
              float shadowRadius;
              vec2 shadowMapSize;
              float shadowCameraNear;
              float shadowCameraFar;
          };
          uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
      #endif
  #endif`,
    Tf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
      vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
      vec4 shadowWorldPosition;
  #endif
  #if defined( USE_SHADOWMAP )
      #if NUM_DIR_LIGHT_SHADOWS > 0
          #pragma unroll_loop_start
          for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
              shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
              vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
          }
          #pragma unroll_loop_end
      #endif
      #if NUM_POINT_LIGHT_SHADOWS > 0
          #pragma unroll_loop_start
          for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
              shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
              vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
          }
          #pragma unroll_loop_end
      #endif
  #endif
  #if NUM_SPOT_LIGHT_COORDS > 0
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
          shadowWorldPosition = worldPosition;
          #if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
              shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
          #endif
          vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
      }
      #pragma unroll_loop_end
  #endif`,
    bf = `float getShadowMask() {
      float shadow = 1.0;
      #ifdef USE_SHADOWMAP
      #if NUM_DIR_LIGHT_SHADOWS > 0
      DirectionalLightShadow directionalLight;
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
          directionalLight = directionalLightShadows[ i ];
          shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      }
      #pragma unroll_loop_end
      #endif
      #if NUM_SPOT_LIGHT_SHADOWS > 0
      SpotLightShadow spotLight;
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
          spotLight = spotLightShadows[ i ];
          shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
      }
      #pragma unroll_loop_end
      #endif
      #if NUM_POINT_LIGHT_SHADOWS > 0
      PointLightShadow pointLight;
      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
          pointLight = pointLightShadows[ i ];
          shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
      }
      #pragma unroll_loop_end
      #endif
      #endif
      return shadow;
  }`,
    Af = `#ifdef USE_SKINNING
      mat4 boneMatX = getBoneMatrix( skinIndex.x );
      mat4 boneMatY = getBoneMatrix( skinIndex.y );
      mat4 boneMatZ = getBoneMatrix( skinIndex.z );
      mat4 boneMatW = getBoneMatrix( skinIndex.w );
  #endif`,
    Ef = `#ifdef USE_SKINNING
      uniform mat4 bindMatrix;
      uniform mat4 bindMatrixInverse;
      uniform highp sampler2D boneTexture;
      uniform int boneTextureSize;
      mat4 getBoneMatrix( const in float i ) {
          float j = i * 4.0;
          float x = mod( j, float( boneTextureSize ) );
          float y = floor( j / float( boneTextureSize ) );
          float dx = 1.0 / float( boneTextureSize );
          float dy = 1.0 / float( boneTextureSize );
          y = dy * ( y + 0.5 );
          vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
          vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
          vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
          vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
          mat4 bone = mat4( v1, v2, v3, v4 );
          return bone;
      }
  #endif`,
    wf = `#ifdef USE_SKINNING
      vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
      vec4 skinned = vec4( 0.0 );
      skinned += boneMatX * skinVertex * skinWeight.x;
      skinned += boneMatY * skinVertex * skinWeight.y;
      skinned += boneMatZ * skinVertex * skinWeight.z;
      skinned += boneMatW * skinVertex * skinWeight.w;
      transformed = ( bindMatrixInverse * skinned ).xyz;
  #endif`,
    Cf = `#ifdef USE_SKINNING
      mat4 skinMatrix = mat4( 0.0 );
      skinMatrix += skinWeight.x * boneMatX;
      skinMatrix += skinWeight.y * boneMatY;
      skinMatrix += skinWeight.z * boneMatZ;
      skinMatrix += skinWeight.w * boneMatW;
      skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
      objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
      #ifdef USE_TANGENT
          objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
      #endif
  #endif`,
    Rf = `float specularStrength;
  #ifdef USE_SPECULARMAP
      vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
      specularStrength = texelSpecular.r;
  #else
      specularStrength = 1.0;
  #endif`,
    If = `#ifdef USE_SPECULARMAP
      uniform sampler2D specularMap;
  #endif`,
    Lf = `#if defined( TONE_MAPPING )
      gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
  #endif`,
    Pf = `#ifndef saturate
  #define saturate( a ) clamp( a, 0.0, 1.0 )
  #endif
  uniform float toneMappingExposure;
  vec3 LinearToneMapping( vec3 color ) {
      return toneMappingExposure * color;
  }
  vec3 ReinhardToneMapping( vec3 color ) {
      color *= toneMappingExposure;
      return saturate( color / ( vec3( 1.0 ) + color ) );
  }
  vec3 OptimizedCineonToneMapping( vec3 color ) {
      color *= toneMappingExposure;
      color = max( vec3( 0.0 ), color - 0.004 );
      return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
  }
  vec3 RRTAndODTFit( vec3 v ) {
      vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
      vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
      return a / b;
  }
  vec3 ACESFilmicToneMapping( vec3 color ) {
      const mat3 ACESInputMat = mat3(
          vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
          vec3( 0.04823, 0.01566, 0.83777 )
      );
      const mat3 ACESOutputMat = mat3(
          vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
          vec3( -0.07367, -0.00605,  1.07602 )
      );
      color *= toneMappingExposure / 0.6;
      color = ACESInputMat * color;
      color = RRTAndODTFit( color );
      color = ACESOutputMat * color;
      return saturate( color );
  }
  vec3 CustomToneMapping( vec3 color ) { return color; }`,
    Df = `#ifdef USE_TRANSMISSION
      material.transmission = transmission;
      material.transmissionAlpha = 1.0;
      material.thickness = thickness;
      material.attenuationDistance = attenuationDistance;
      material.attenuationColor = attenuationColor;
      #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
      #endif
      #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
      #endif
      vec3 pos = vWorldPosition;
      vec3 v = normalize( cameraPosition - pos );
      vec3 n = inverseTransformDirection( normal, viewMatrix );
      vec4 transmission = getIBLVolumeRefraction(
          n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
          pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
          material.attenuationColor, material.attenuationDistance );
      material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
      totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
  #endif`,
    Nf = `#ifdef USE_TRANSMISSION
      uniform float transmission;
      uniform float thickness;
      uniform float attenuationDistance;
      uniform vec3 attenuationColor;
      #ifdef USE_TRANSMISSIONMAP
          uniform sampler2D transmissionMap;
      #endif
      #ifdef USE_THICKNESSMAP
          uniform sampler2D thicknessMap;
      #endif
      uniform vec2 transmissionSamplerSize;
      uniform sampler2D transmissionSamplerMap;
      uniform mat4 modelMatrix;
      uniform mat4 projectionMatrix;
      varying vec3 vWorldPosition;
      float w0( float a ) {
          return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
      }
      float w1( float a ) {
          return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
      }
      float w2( float a ){
          return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
      }
      float w3( float a ) {
          return ( 1.0 / 6.0 ) * ( a * a * a );
      }
      float g0( float a ) {
          return w0( a ) + w1( a );
      }
      float g1( float a ) {
          return w2( a ) + w3( a );
      }
      float h0( float a ) {
          return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
      }
      float h1( float a ) {
          return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
      }
      vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
          uv = uv * texelSize.zw + 0.5;
          vec2 iuv = floor( uv );
          vec2 fuv = fract( uv );
          float g0x = g0( fuv.x );
          float g1x = g1( fuv.x );
          float h0x = h0( fuv.x );
          float h1x = h1( fuv.x );
          float h0y = h0( fuv.y );
          float h1y = h1( fuv.y );
          vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
          vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
          vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
          vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
          
          vec2 lodFudge = pow( 1.95, lod ) / fullSize;
          return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
              g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
      }
      vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
          vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
          vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
          vec2 fLodSizeInv = 1.0 / fLodSize;
          vec2 cLodSizeInv = 1.0 / cLodSize;
          vec2 fullSize = vec2( textureSize( sampler, 0 ) );
          vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
          vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
          return mix( fSample, cSample, fract( lod ) );
      }
      vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
          vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
          vec3 modelScale;
          modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
          modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
          modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
          return normalize( refractionVector ) * thickness * modelScale;
      }
      float applyIorToRoughness( const in float roughness, const in float ior ) {
          return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
      }
      vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
          float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
          return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
      }
      vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
          if ( isinf( attenuationDistance ) ) {
              return radiance;
          } else {
              vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
              vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
          }
      }
      vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
          const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
          const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
          const in vec3 attenuationColor, const in float attenuationDistance ) {
          vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
          vec3 refractedRayExit = position + transmissionRay;
          vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
          vec2 refractionCoords = ndcPos.xy / ndcPos.w;
          refractionCoords += 1.0;
          refractionCoords /= 2.0;
          vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
          vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
          vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
          return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
      }
  #endif`,
    Of = `#ifdef USE_UV
      varying vec2 vUv;
  #endif
  #ifdef USE_MAP
      varying vec2 vMapUv;
  #endif
  #ifdef USE_ALPHAMAP
      varying vec2 vAlphaMapUv;
  #endif
  #ifdef USE_LIGHTMAP
      varying vec2 vLightMapUv;
  #endif
  #ifdef USE_AOMAP
      varying vec2 vAoMapUv;
  #endif
  #ifdef USE_BUMPMAP
      varying vec2 vBumpMapUv;
  #endif
  #ifdef USE_NORMALMAP
      varying vec2 vNormalMapUv;
  #endif
  #ifdef USE_EMISSIVEMAP
      varying vec2 vEmissiveMapUv;
  #endif
  #ifdef USE_METALNESSMAP
      varying vec2 vMetalnessMapUv;
  #endif
  #ifdef USE_ROUGHNESSMAP
      varying vec2 vRoughnessMapUv;
  #endif
  #ifdef USE_CLEARCOATMAP
      varying vec2 vClearcoatMapUv;
  #endif
  #ifdef USE_CLEARCOAT_NORMALMAP
      varying vec2 vClearcoatNormalMapUv;
  #endif
  #ifdef USE_CLEARCOAT_ROUGHNESSMAP
      varying vec2 vClearcoatRoughnessMapUv;
  #endif
  #ifdef USE_IRIDESCENCEMAP
      varying vec2 vIridescenceMapUv;
  #endif
  #ifdef USE_IRIDESCENCE_THICKNESSMAP
      varying vec2 vIridescenceThicknessMapUv;
  #endif
  #ifdef USE_SHEEN_COLORMAP
      varying vec2 vSheenColorMapUv;
  #endif
  #ifdef USE_SHEEN_ROUGHNESSMAP
      varying vec2 vSheenRoughnessMapUv;
  #endif
  #ifdef USE_SPECULARMAP
      varying vec2 vSpecularMapUv;
  #endif
  #ifdef USE_SPECULAR_COLORMAP
      varying vec2 vSpecularColorMapUv;
  #endif
  #ifdef USE_SPECULAR_INTENSITYMAP
      varying vec2 vSpecularIntensityMapUv;
  #endif
  #ifdef USE_TRANSMISSIONMAP
      uniform mat3 transmissionMapTransform;
      varying vec2 vTransmissionMapUv;
  #endif
  #ifdef USE_THICKNESSMAP
      uniform mat3 thicknessMapTransform;
      varying vec2 vThicknessMapUv;
  #endif`,
    Uf = `#ifdef USE_UV
      varying vec2 vUv;
  #endif
  #ifdef USE_UV2
      attribute vec2 uv2;
  #endif
  #ifdef USE_MAP
      uniform mat3 mapTransform;
      varying vec2 vMapUv;
  #endif
  #ifdef USE_ALPHAMAP
      uniform mat3 alphaMapTransform;
      varying vec2 vAlphaMapUv;
  #endif
  #ifdef USE_LIGHTMAP
      uniform mat3 lightMapTransform;
      varying vec2 vLightMapUv;
  #endif
  #ifdef USE_AOMAP
      uniform mat3 aoMapTransform;
      varying vec2 vAoMapUv;
  #endif
  #ifdef USE_BUMPMAP
      uniform mat3 bumpMapTransform;
      varying vec2 vBumpMapUv;
  #endif
  #ifdef USE_NORMALMAP
      uniform mat3 normalMapTransform;
      varying vec2 vNormalMapUv;
  #endif
  #ifdef USE_DISPLACEMENTMAP
      uniform mat3 displacementMapTransform;
      varying vec2 vDisplacementMapUv;
  #endif
  #ifdef USE_EMISSIVEMAP
      uniform mat3 emissiveMapTransform;
      varying vec2 vEmissiveMapUv;
  #endif
  #ifdef USE_METALNESSMAP
      uniform mat3 metalnessMapTransform;
      varying vec2 vMetalnessMapUv;
  #endif
  #ifdef USE_ROUGHNESSMAP
      uniform mat3 roughnessMapTransform;
      varying vec2 vRoughnessMapUv;
  #endif
  #ifdef USE_CLEARCOATMAP
      uniform mat3 clearcoatMapTransform;
      varying vec2 vClearcoatMapUv;
  #endif
  #ifdef USE_CLEARCOAT_NORMALMAP
      uniform mat3 clearcoatNormalMapTransform;
      varying vec2 vClearcoatNormalMapUv;
  #endif
  #ifdef USE_CLEARCOAT_ROUGHNESSMAP
      uniform mat3 clearcoatRoughnessMapTransform;
      varying vec2 vClearcoatRoughnessMapUv;
  #endif
  #ifdef USE_SHEEN_COLORMAP
      uniform mat3 sheenColorMapTransform;
      varying vec2 vSheenColorMapUv;
  #endif
  #ifdef USE_SHEEN_ROUGHNESSMAP
      uniform mat3 sheenRoughnessMapTransform;
      varying vec2 vSheenRoughnessMapUv;
  #endif
  #ifdef USE_IRIDESCENCEMAP
      uniform mat3 iridescenceMapTransform;
      varying vec2 vIridescenceMapUv;
  #endif
  #ifdef USE_IRIDESCENCE_THICKNESSMAP
      uniform mat3 iridescenceThicknessMapTransform;
      varying vec2 vIridescenceThicknessMapUv;
  #endif
  #ifdef USE_SPECULARMAP
      uniform mat3 specularMapTransform;
      varying vec2 vSpecularMapUv;
  #endif
  #ifdef USE_SPECULAR_COLORMAP
      uniform mat3 specularColorMapTransform;
      varying vec2 vSpecularColorMapUv;
  #endif
  #ifdef USE_SPECULAR_INTENSITYMAP
      uniform mat3 specularIntensityMapTransform;
      varying vec2 vSpecularIntensityMapUv;
  #endif
  #ifdef USE_TRANSMISSIONMAP
      uniform mat3 transmissionMapTransform;
      varying vec2 vTransmissionMapUv;
  #endif
  #ifdef USE_THICKNESSMAP
      uniform mat3 thicknessMapTransform;
      varying vec2 vThicknessMapUv;
  #endif`,
    Ff = `#ifdef USE_UV
      vUv = vec3( uv, 1 ).xy;
  #endif
  #ifdef USE_MAP
      vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_ALPHAMAP
      vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_LIGHTMAP
      vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_AOMAP
      vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_BUMPMAP
      vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_NORMALMAP
      vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_DISPLACEMENTMAP
      vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_EMISSIVEMAP
      vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_METALNESSMAP
      vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_ROUGHNESSMAP
      vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_CLEARCOATMAP
      vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_CLEARCOAT_NORMALMAP
      vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_CLEARCOAT_ROUGHNESSMAP
      vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_IRIDESCENCEMAP
      vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_IRIDESCENCE_THICKNESSMAP
      vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_SHEEN_COLORMAP
      vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_SHEEN_ROUGHNESSMAP
      vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_SPECULARMAP
      vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_SPECULAR_COLORMAP
      vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_SPECULAR_INTENSITYMAP
      vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_TRANSMISSIONMAP
      vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
  #endif
  #ifdef USE_THICKNESSMAP
      vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
  #endif`,
    Bf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
      vec4 worldPosition = vec4( transformed, 1.0 );
      #ifdef USE_INSTANCING
          worldPosition = instanceMatrix * worldPosition;
      #endif
      worldPosition = modelMatrix * worldPosition;
  #endif`;
  const zf = `varying vec2 vUv;
  uniform mat3 uvTransform;
  void main() {
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
      gl_Position = vec4( position.xy, 1.0, 1.0 );
  }`,
    kf = `uniform sampler2D t2D;
  uniform float backgroundIntensity;
  varying vec2 vUv;
  void main() {
      vec4 texColor = texture2D( t2D, vUv );
      #ifdef DECODE_VIDEO_TEXTURE
          texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
      #endif
      texColor.rgb *= backgroundIntensity;
      gl_FragColor = texColor;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
  }`,
    Vf = `varying vec3 vWorldDirection;
  #include <common>
  void main() {
      vWorldDirection = transformDirection( position, modelMatrix );
      #include <begin_vertex>
      #include <project_vertex>
      gl_Position.z = gl_Position.w;
  }`,
    Gf = `#ifdef ENVMAP_TYPE_CUBE
      uniform samplerCube envMap;
  #elif defined( ENVMAP_TYPE_CUBE_UV )
      uniform sampler2D envMap;
  #endif
  uniform float flipEnvMap;
  uniform float backgroundBlurriness;
  uniform float backgroundIntensity;
  varying vec3 vWorldDirection;
  #include <cube_uv_reflection_fragment>
  void main() {
      #ifdef ENVMAP_TYPE_CUBE
          vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
      #elif defined( ENVMAP_TYPE_CUBE_UV )
          vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
      #else
          vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
      #endif
      texColor.rgb *= backgroundIntensity;
      gl_FragColor = texColor;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
  }`,
    Hf = `varying vec3 vWorldDirection;
  #include <common>
  void main() {
      vWorldDirection = transformDirection( position, modelMatrix );
      #include <begin_vertex>
      #include <project_vertex>
      gl_Position.z = gl_Position.w;
  }`,
    Wf = `uniform samplerCube tCube;
  uniform float tFlip;
  uniform float opacity;
  varying vec3 vWorldDirection;
  void main() {
      vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
      gl_FragColor = texColor;
      gl_FragColor.a *= opacity;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
  }`,
    Xf = `#include <common>
  #include <uv_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  varying vec2 vHighPrecisionZW;
  void main() {
      #include <uv_vertex>
      #include <skinbase_vertex>
      #ifdef USE_DISPLACEMENTMAP
          #include <beginnormal_vertex>
          #include <morphnormal_vertex>
          #include <skinnormal_vertex>
      #endif
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <displacementmap_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      vHighPrecisionZW = gl_Position.zw;
  }`,
    qf = `#if DEPTH_PACKING == 3200
      uniform float opacity;
  #endif
  #include <common>
  #include <packing>
  #include <uv_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <alphatest_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  varying vec2 vHighPrecisionZW;
  void main() {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( 1.0 );
      #if DEPTH_PACKING == 3200
          diffuseColor.a = opacity;
      #endif
      #include <map_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      #include <logdepthbuf_fragment>
      float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
      #if DEPTH_PACKING == 3200
          gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
      #elif DEPTH_PACKING == 3201
          gl_FragColor = packDepthToRGBA( fragCoordZ );
      #endif
  }`,
    jf = `#define DISTANCE
  varying vec3 vWorldPosition;
  #include <common>
  #include <uv_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <skinbase_vertex>
      #ifdef USE_DISPLACEMENTMAP
          #include <beginnormal_vertex>
          #include <morphnormal_vertex>
          #include <skinnormal_vertex>
      #endif
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <displacementmap_vertex>
      #include <project_vertex>
      #include <worldpos_vertex>
      #include <clipping_planes_vertex>
      vWorldPosition = worldPosition.xyz;
  }`,
    Kf = `#define DISTANCE
  uniform vec3 referencePosition;
  uniform float nearDistance;
  uniform float farDistance;
  varying vec3 vWorldPosition;
  #include <common>
  #include <packing>
  #include <uv_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <alphatest_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main () {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( 1.0 );
      #include <map_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      float dist = length( vWorldPosition - referencePosition );
      dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
      dist = saturate( dist );
      gl_FragColor = packDepthToRGBA( dist );
  }`,
    Yf = `varying vec3 vWorldDirection;
  #include <common>
  void main() {
      vWorldDirection = transformDirection( position, modelMatrix );
      #include <begin_vertex>
      #include <project_vertex>
  }`,
    Zf = `uniform sampler2D tEquirect;
  varying vec3 vWorldDirection;
  #include <common>
  void main() {
      vec3 direction = normalize( vWorldDirection );
      vec2 sampleUV = equirectUv( direction );
      gl_FragColor = texture2D( tEquirect, sampleUV );
      #include <tonemapping_fragment>
      #include <encodings_fragment>
  }`,
    $f = `uniform float scale;
  attribute float lineDistance;
  varying float vLineDistance;
  #include <common>
  #include <uv_pars_vertex>
  #include <color_pars_vertex>
  #include <fog_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      vLineDistance = scale * lineDistance;
      #include <uv_vertex>
      #include <color_vertex>
      #include <morphcolor_vertex>
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      #include <fog_vertex>
  }`,
    Jf = `uniform vec3 diffuse;
  uniform float opacity;
  uniform float dashSize;
  uniform float totalSize;
  varying float vLineDistance;
  #include <common>
  #include <color_pars_fragment>
  #include <uv_pars_fragment>
  #include <map_pars_fragment>
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      if ( mod( vLineDistance, totalSize ) > dashSize ) {
          discard;
      }
      vec3 outgoingLight = vec3( 0.0 );
      vec4 diffuseColor = vec4( diffuse, opacity );
      #include <logdepthbuf_fragment>
      #include <map_fragment>
      #include <color_fragment>
      outgoingLight = diffuseColor.rgb;
      #include <output_fragment>
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
  }`,
    Qf = `#include <common>
  #include <uv_pars_vertex>
  #include <envmap_pars_vertex>
  #include <color_pars_vertex>
  #include <fog_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <color_vertex>
      #include <morphcolor_vertex>
      #if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
          #include <beginnormal_vertex>
          #include <morphnormal_vertex>
          #include <skinbase_vertex>
          #include <skinnormal_vertex>
          #include <defaultnormal_vertex>
      #endif
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      #include <worldpos_vertex>
      #include <envmap_vertex>
      #include <fog_vertex>
  }`,
    ep = `uniform vec3 diffuse;
  uniform float opacity;
  #ifndef FLAT_SHADED
      varying vec3 vNormal;
  #endif
  #include <common>
  #include <dithering_pars_fragment>
  #include <color_pars_fragment>
  #include <uv_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <alphatest_pars_fragment>
  #include <aomap_pars_fragment>
  #include <lightmap_pars_fragment>
  #include <envmap_common_pars_fragment>
  #include <envmap_pars_fragment>
  #include <fog_pars_fragment>
  #include <specularmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( diffuse, opacity );
      #include <logdepthbuf_fragment>
      #include <map_fragment>
      #include <color_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      #include <specularmap_fragment>
      ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
      #ifdef USE_LIGHTMAP
          vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
          reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
      #else
          reflectedLight.indirectDiffuse += vec3( 1.0 );
      #endif
      #include <aomap_fragment>
      reflectedLight.indirectDiffuse *= diffuseColor.rgb;
      vec3 outgoingLight = reflectedLight.indirectDiffuse;
      #include <envmap_fragment>
      #include <output_fragment>
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
      #include <dithering_fragment>
  }`,
    tp = `#define LAMBERT
  varying vec3 vViewPosition;
  #include <common>
  #include <uv_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <envmap_pars_vertex>
  #include <color_pars_vertex>
  #include <fog_pars_vertex>
  #include <normal_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <shadowmap_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <color_vertex>
      #include <morphcolor_vertex>
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <skinbase_vertex>
      #include <skinnormal_vertex>
      #include <defaultnormal_vertex>
      #include <normal_vertex>
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <displacementmap_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      vViewPosition = - mvPosition.xyz;
      #include <worldpos_vertex>
      #include <envmap_vertex>
      #include <shadowmap_vertex>
      #include <fog_vertex>
  }`,
    np = `#define LAMBERT
  uniform vec3 diffuse;
  uniform vec3 emissive;
  uniform float opacity;
  #include <common>
  #include <packing>
  #include <dithering_pars_fragment>
  #include <color_pars_fragment>
  #include <uv_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <alphatest_pars_fragment>
  #include <aomap_pars_fragment>
  #include <lightmap_pars_fragment>
  #include <emissivemap_pars_fragment>
  #include <envmap_common_pars_fragment>
  #include <envmap_pars_fragment>
  #include <fog_pars_fragment>
  #include <bsdfs>
  #include <lights_pars_begin>
  #include <normal_pars_fragment>
  #include <lights_lambert_pars_fragment>
  #include <shadowmap_pars_fragment>
  #include <bumpmap_pars_fragment>
  #include <normalmap_pars_fragment>
  #include <specularmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( diffuse, opacity );
      ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
      vec3 totalEmissiveRadiance = emissive;
      #include <logdepthbuf_fragment>
      #include <map_fragment>
      #include <color_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      #include <specularmap_fragment>
      #include <normal_fragment_begin>
      #include <normal_fragment_maps>
      #include <emissivemap_fragment>
      #include <lights_lambert_fragment>
      #include <lights_fragment_begin>
      #include <lights_fragment_maps>
      #include <lights_fragment_end>
      #include <aomap_fragment>
      vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
      #include <envmap_fragment>
      #include <output_fragment>
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
      #include <dithering_fragment>
  }`,
    ip = `#define MATCAP
  varying vec3 vViewPosition;
  #include <common>
  #include <uv_pars_vertex>
  #include <color_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <fog_pars_vertex>
  #include <normal_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <color_vertex>
      #include <morphcolor_vertex>
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <skinbase_vertex>
      #include <skinnormal_vertex>
      #include <defaultnormal_vertex>
      #include <normal_vertex>
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <displacementmap_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      #include <fog_vertex>
      vViewPosition = - mvPosition.xyz;
  }`,
    sp = `#define MATCAP
  uniform vec3 diffuse;
  uniform float opacity;
  uniform sampler2D matcap;
  varying vec3 vViewPosition;
  #include <common>
  #include <dithering_pars_fragment>
  #include <color_pars_fragment>
  #include <uv_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <alphatest_pars_fragment>
  #include <fog_pars_fragment>
  #include <normal_pars_fragment>
  #include <bumpmap_pars_fragment>
  #include <normalmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( diffuse, opacity );
      #include <logdepthbuf_fragment>
      #include <map_fragment>
      #include <color_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      #include <normal_fragment_begin>
      #include <normal_fragment_maps>
      vec3 viewDir = normalize( vViewPosition );
      vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
      vec3 y = cross( viewDir, x );
      vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
      #ifdef USE_MATCAP
          vec4 matcapColor = texture2D( matcap, uv );
      #else
          vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
      #endif
      vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
      #include <output_fragment>
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
      #include <dithering_fragment>
  }`,
    rp = `#define NORMAL
  #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
      varying vec3 vViewPosition;
  #endif
  #include <common>
  #include <uv_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <normal_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <skinbase_vertex>
      #include <skinnormal_vertex>
      #include <defaultnormal_vertex>
      #include <normal_vertex>
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <displacementmap_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
  #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
      vViewPosition = - mvPosition.xyz;
  #endif
  }`,
    ap = `#define NORMAL
  uniform float opacity;
  #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
      varying vec3 vViewPosition;
  #endif
  #include <packing>
  #include <uv_pars_fragment>
  #include <normal_pars_fragment>
  #include <bumpmap_pars_fragment>
  #include <normalmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      #include <logdepthbuf_fragment>
      #include <normal_fragment_begin>
      #include <normal_fragment_maps>
      gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
      #ifdef OPAQUE
          gl_FragColor.a = 1.0;
      #endif
  }`,
    op = `#define PHONG
  varying vec3 vViewPosition;
  #include <common>
  #include <uv_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <envmap_pars_vertex>
  #include <color_pars_vertex>
  #include <fog_pars_vertex>
  #include <normal_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <shadowmap_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <color_vertex>
      #include <morphcolor_vertex>
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <skinbase_vertex>
      #include <skinnormal_vertex>
      #include <defaultnormal_vertex>
      #include <normal_vertex>
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <displacementmap_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      vViewPosition = - mvPosition.xyz;
      #include <worldpos_vertex>
      #include <envmap_vertex>
      #include <shadowmap_vertex>
      #include <fog_vertex>
  }`,
    lp = `#define PHONG
  uniform vec3 diffuse;
  uniform vec3 emissive;
  uniform vec3 specular;
  uniform float shininess;
  uniform float opacity;
  #include <common>
  #include <packing>
  #include <dithering_pars_fragment>
  #include <color_pars_fragment>
  #include <uv_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <alphatest_pars_fragment>
  #include <aomap_pars_fragment>
  #include <lightmap_pars_fragment>
  #include <emissivemap_pars_fragment>
  #include <envmap_common_pars_fragment>
  #include <envmap_pars_fragment>
  #include <fog_pars_fragment>
  #include <bsdfs>
  #include <lights_pars_begin>
  #include <normal_pars_fragment>
  #include <lights_phong_pars_fragment>
  #include <shadowmap_pars_fragment>
  #include <bumpmap_pars_fragment>
  #include <normalmap_pars_fragment>
  #include <specularmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( diffuse, opacity );
      ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
      vec3 totalEmissiveRadiance = emissive;
      #include <logdepthbuf_fragment>
      #include <map_fragment>
      #include <color_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      #include <specularmap_fragment>
      #include <normal_fragment_begin>
      #include <normal_fragment_maps>
      #include <emissivemap_fragment>
      #include <lights_phong_fragment>
      #include <lights_fragment_begin>
      #include <lights_fragment_maps>
      #include <lights_fragment_end>
      #include <aomap_fragment>
      vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
      #include <envmap_fragment>
      #include <output_fragment>
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
      #include <dithering_fragment>
  }`,
    cp = `#define STANDARD
  varying vec3 vViewPosition;
  #ifdef USE_TRANSMISSION
      varying vec3 vWorldPosition;
  #endif
  #include <common>
  #include <uv_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <color_pars_vertex>
  #include <fog_pars_vertex>
  #include <normal_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <shadowmap_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <color_vertex>
      #include <morphcolor_vertex>
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <skinbase_vertex>
      #include <skinnormal_vertex>
      #include <defaultnormal_vertex>
      #include <normal_vertex>
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <displacementmap_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      vViewPosition = - mvPosition.xyz;
      #include <worldpos_vertex>
      #include <shadowmap_vertex>
      #include <fog_vertex>
  #ifdef USE_TRANSMISSION
      vWorldPosition = worldPosition.xyz;
  #endif
  }`,
    hp = `#define STANDARD
  #ifdef PHYSICAL
      #define IOR
      #define USE_SPECULAR
  #endif
  uniform vec3 diffuse;
  uniform vec3 emissive;
  uniform float roughness;
  uniform float metalness;
  uniform float opacity;
  #ifdef IOR
      uniform float ior;
  #endif
  #ifdef USE_SPECULAR
      uniform float specularIntensity;
      uniform vec3 specularColor;
      #ifdef USE_SPECULAR_COLORMAP
          uniform sampler2D specularColorMap;
      #endif
      #ifdef USE_SPECULAR_INTENSITYMAP
          uniform sampler2D specularIntensityMap;
      #endif
  #endif
  #ifdef USE_CLEARCOAT
      uniform float clearcoat;
      uniform float clearcoatRoughness;
  #endif
  #ifdef USE_IRIDESCENCE
      uniform float iridescence;
      uniform float iridescenceIOR;
      uniform float iridescenceThicknessMinimum;
      uniform float iridescenceThicknessMaximum;
  #endif
  #ifdef USE_SHEEN
      uniform vec3 sheenColor;
      uniform float sheenRoughness;
      #ifdef USE_SHEEN_COLORMAP
          uniform sampler2D sheenColorMap;
      #endif
      #ifdef USE_SHEEN_ROUGHNESSMAP
          uniform sampler2D sheenRoughnessMap;
      #endif
  #endif
  varying vec3 vViewPosition;
  #include <common>
  #include <packing>
  #include <dithering_pars_fragment>
  #include <color_pars_fragment>
  #include <uv_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <alphatest_pars_fragment>
  #include <aomap_pars_fragment>
  #include <lightmap_pars_fragment>
  #include <emissivemap_pars_fragment>
  #include <iridescence_fragment>
  #include <cube_uv_reflection_fragment>
  #include <envmap_common_pars_fragment>
  #include <envmap_physical_pars_fragment>
  #include <fog_pars_fragment>
  #include <lights_pars_begin>
  #include <normal_pars_fragment>
  #include <lights_physical_pars_fragment>
  #include <transmission_pars_fragment>
  #include <shadowmap_pars_fragment>
  #include <bumpmap_pars_fragment>
  #include <normalmap_pars_fragment>
  #include <clearcoat_pars_fragment>
  #include <iridescence_pars_fragment>
  #include <roughnessmap_pars_fragment>
  #include <metalnessmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( diffuse, opacity );
      ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
      vec3 totalEmissiveRadiance = emissive;
      #include <logdepthbuf_fragment>
      #include <map_fragment>
      #include <color_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      #include <roughnessmap_fragment>
      #include <metalnessmap_fragment>
      #include <normal_fragment_begin>
      #include <normal_fragment_maps>
      #include <clearcoat_normal_fragment_begin>
      #include <clearcoat_normal_fragment_maps>
      #include <emissivemap_fragment>
      #include <lights_physical_fragment>
      #include <lights_fragment_begin>
      #include <lights_fragment_maps>
      #include <lights_fragment_end>
      #include <aomap_fragment>
      vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
      vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
      #include <transmission_fragment>
      vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
      #ifdef USE_SHEEN
          float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
          outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
      #endif
      #ifdef USE_CLEARCOAT
          float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
          vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
          outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
      #endif
      #include <output_fragment>
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
      #include <dithering_fragment>
  }`,
    up = `#define TOON
  varying vec3 vViewPosition;
  #include <common>
  #include <uv_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <color_pars_vertex>
  #include <fog_pars_vertex>
  #include <normal_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <shadowmap_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      #include <color_vertex>
      #include <morphcolor_vertex>
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <skinbase_vertex>
      #include <skinnormal_vertex>
      #include <defaultnormal_vertex>
      #include <normal_vertex>
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <displacementmap_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      vViewPosition = - mvPosition.xyz;
      #include <worldpos_vertex>
      #include <shadowmap_vertex>
      #include <fog_vertex>
  }`,
    dp = `#define TOON
  uniform vec3 diffuse;
  uniform vec3 emissive;
  uniform float opacity;
  #include <common>
  #include <packing>
  #include <dithering_pars_fragment>
  #include <color_pars_fragment>
  #include <uv_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <alphatest_pars_fragment>
  #include <aomap_pars_fragment>
  #include <lightmap_pars_fragment>
  #include <emissivemap_pars_fragment>
  #include <gradientmap_pars_fragment>
  #include <fog_pars_fragment>
  #include <bsdfs>
  #include <lights_pars_begin>
  #include <normal_pars_fragment>
  #include <lights_toon_pars_fragment>
  #include <shadowmap_pars_fragment>
  #include <bumpmap_pars_fragment>
  #include <normalmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec4 diffuseColor = vec4( diffuse, opacity );
      ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
      vec3 totalEmissiveRadiance = emissive;
      #include <logdepthbuf_fragment>
      #include <map_fragment>
      #include <color_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      #include <normal_fragment_begin>
      #include <normal_fragment_maps>
      #include <emissivemap_fragment>
      #include <lights_toon_fragment>
      #include <lights_fragment_begin>
      #include <lights_fragment_maps>
      #include <lights_fragment_end>
      #include <aomap_fragment>
      vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
      #include <output_fragment>
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
      #include <dithering_fragment>
  }`,
    fp = `uniform float size;
  uniform float scale;
  #include <common>
  #include <color_pars_vertex>
  #include <fog_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  #ifdef USE_POINTS_UV
      varying vec2 vUv;
      uniform mat3 uvTransform;
  #endif
  void main() {
      #ifdef USE_POINTS_UV
          vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
      #endif
      #include <color_vertex>
      #include <morphcolor_vertex>
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <project_vertex>
      gl_PointSize = size;
      #ifdef USE_SIZEATTENUATION
          bool isPerspective = isPerspectiveMatrix( projectionMatrix );
          if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
      #endif
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      #include <worldpos_vertex>
      #include <fog_vertex>
  }`,
    pp = `uniform vec3 diffuse;
  uniform float opacity;
  #include <common>
  #include <color_pars_fragment>
  #include <map_particle_pars_fragment>
  #include <alphatest_pars_fragment>
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec3 outgoingLight = vec3( 0.0 );
      vec4 diffuseColor = vec4( diffuse, opacity );
      #include <logdepthbuf_fragment>
      #include <map_particle_fragment>
      #include <color_fragment>
      #include <alphatest_fragment>
      outgoingLight = diffuseColor.rgb;
      #include <output_fragment>
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>
  }`,
    mp = `#include <common>
  #include <fog_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <shadowmap_pars_vertex>
  void main() {
      #include <beginnormal_vertex>
      #include <morphnormal_vertex>
      #include <skinbase_vertex>
      #include <skinnormal_vertex>
      #include <defaultnormal_vertex>
      #include <begin_vertex>
      #include <morphtarget_vertex>
      #include <skinning_vertex>
      #include <project_vertex>
      #include <logdepthbuf_vertex>
      #include <worldpos_vertex>
      #include <shadowmap_vertex>
      #include <fog_vertex>
  }`,
    gp = `uniform vec3 color;
  uniform float opacity;
  #include <common>
  #include <packing>
  #include <fog_pars_fragment>
  #include <bsdfs>
  #include <lights_pars_begin>
  #include <logdepthbuf_pars_fragment>
  #include <shadowmap_pars_fragment>
  #include <shadowmask_pars_fragment>
  void main() {
      #include <logdepthbuf_fragment>
      gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
  }`,
    _p = `uniform float rotation;
  uniform vec2 center;
  #include <common>
  #include <uv_pars_vertex>
  #include <fog_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>
  void main() {
      #include <uv_vertex>
      vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
      vec2 scale;
      scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
      scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
      #ifndef USE_SIZEATTENUATION
          bool isPerspective = isPerspectiveMatrix( projectionMatrix );
          if ( isPerspective ) scale *= - mvPosition.z;
      #endif
      vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
      vec2 rotatedPosition;
      rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
      rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
      mvPosition.xy += rotatedPosition;
      gl_Position = projectionMatrix * mvPosition;
      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      #include <fog_vertex>
  }`,
    xp = `uniform vec3 diffuse;
  uniform float opacity;
  #include <common>
  #include <uv_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <alphatest_pars_fragment>
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  void main() {
      #include <clipping_planes_fragment>
      vec3 outgoingLight = vec3( 0.0 );
      vec4 diffuseColor = vec4( diffuse, opacity );
      #include <logdepthbuf_fragment>
      #include <map_fragment>
      #include <alphamap_fragment>
      #include <alphatest_fragment>
      outgoingLight = diffuseColor.rgb;
      #include <output_fragment>
      #include <tonemapping_fragment>
      #include <encodings_fragment>
      #include <fog_fragment>
  }`,
    Ee = {
      alphamap_fragment: Hu,
      alphamap_pars_fragment: Wu,
      alphatest_fragment: Xu,
      alphatest_pars_fragment: qu,
      aomap_fragment: ju,
      aomap_pars_fragment: Ku,
      begin_vertex: Yu,
      beginnormal_vertex: Zu,
      bsdfs: $u,
      iridescence_fragment: Ju,
      bumpmap_pars_fragment: Qu,
      clipping_planes_fragment: ed,
      clipping_planes_pars_fragment: td,
      clipping_planes_pars_vertex: nd,
      clipping_planes_vertex: id,
      color_fragment: sd,
      color_pars_fragment: rd,
      color_pars_vertex: ad,
      color_vertex: od,
      common: ld,
      cube_uv_reflection_fragment: cd,
      defaultnormal_vertex: hd,
      displacementmap_pars_vertex: ud,
      displacementmap_vertex: dd,
      emissivemap_fragment: fd,
      emissivemap_pars_fragment: pd,
      encodings_fragment: md,
      encodings_pars_fragment: gd,
      envmap_fragment: _d,
      envmap_common_pars_fragment: xd,
      envmap_pars_fragment: vd,
      envmap_pars_vertex: Sd,
      envmap_physical_pars_fragment: Pd,
      envmap_vertex: Md,
      fog_vertex: yd,
      fog_pars_vertex: Td,
      fog_fragment: bd,
      fog_pars_fragment: Ad,
      gradientmap_pars_fragment: Ed,
      lightmap_fragment: wd,
      lightmap_pars_fragment: Cd,
      lights_lambert_fragment: Rd,
      lights_lambert_pars_fragment: Id,
      lights_pars_begin: Ld,
      lights_toon_fragment: Dd,
      lights_toon_pars_fragment: Nd,
      lights_phong_fragment: Od,
      lights_phong_pars_fragment: Ud,
      lights_physical_fragment: Fd,
      lights_physical_pars_fragment: Bd,
      lights_fragment_begin: zd,
      lights_fragment_maps: kd,
      lights_fragment_end: Vd,
      logdepthbuf_fragment: Gd,
      logdepthbuf_pars_fragment: Hd,
      logdepthbuf_pars_vertex: Wd,
      logdepthbuf_vertex: Xd,
      map_fragment: qd,
      map_pars_fragment: jd,
      map_particle_fragment: Kd,
      map_particle_pars_fragment: Yd,
      metalnessmap_fragment: Zd,
      metalnessmap_pars_fragment: $d,
      morphcolor_vertex: Jd,
      morphnormal_vertex: Qd,
      morphtarget_pars_vertex: ef,
      morphtarget_vertex: tf,
      normal_fragment_begin: nf,
      normal_fragment_maps: sf,
      normal_pars_fragment: rf,
      normal_pars_vertex: af,
      normal_vertex: of,
      normalmap_pars_fragment: lf,
      clearcoat_normal_fragment_begin: cf,
      clearcoat_normal_fragment_maps: hf,
      clearcoat_pars_fragment: uf,
      iridescence_pars_fragment: df,
      output_fragment: ff,
      packing: pf,
      premultiplied_alpha_fragment: mf,
      project_vertex: gf,
      dithering_fragment: _f,
      dithering_pars_fragment: xf,
      roughnessmap_fragment: vf,
      roughnessmap_pars_fragment: Sf,
      shadowmap_pars_fragment: Mf,
      shadowmap_pars_vertex: yf,
      shadowmap_vertex: Tf,
      shadowmask_pars_fragment: bf,
      skinbase_vertex: Af,
      skinning_pars_vertex: Ef,
      skinning_vertex: wf,
      skinnormal_vertex: Cf,
      specularmap_fragment: Rf,
      specularmap_pars_fragment: If,
      tonemapping_fragment: Lf,
      tonemapping_pars_fragment: Pf,
      transmission_fragment: Df,
      transmission_pars_fragment: Nf,
      uv_pars_fragment: Of,
      uv_pars_vertex: Uf,
      uv_vertex: Ff,
      worldpos_vertex: Bf,
      background_vert: zf,
      background_frag: kf,
      backgroundCube_vert: Vf,
      backgroundCube_frag: Gf,
      cube_vert: Hf,
      cube_frag: Wf,
      depth_vert: Xf,
      depth_frag: qf,
      distanceRGBA_vert: jf,
      distanceRGBA_frag: Kf,
      equirect_vert: Yf,
      equirect_frag: Zf,
      linedashed_vert: $f,
      linedashed_frag: Jf,
      meshbasic_vert: Qf,
      meshbasic_frag: ep,
      meshlambert_vert: tp,
      meshlambert_frag: np,
      meshmatcap_vert: ip,
      meshmatcap_frag: sp,
      meshnormal_vert: rp,
      meshnormal_frag: ap,
      meshphong_vert: op,
      meshphong_frag: lp,
      meshphysical_vert: cp,
      meshphysical_frag: hp,
      meshtoon_vert: up,
      meshtoon_frag: dp,
      points_vert: fp,
      points_frag: pp,
      shadow_vert: mp,
      shadow_frag: gp,
      sprite_vert: _p,
      sprite_frag: xp
    },
    te = {
      common: {
        diffuse: { value: new ye(16777215) },
        opacity: { value: 1 },
        map: { value: null },
        mapTransform: { value: new Pe() },
        alphaMap: { value: null },
        alphaMapTransform: { value: new Pe() },
        alphaTest: { value: 0 }
      },
      specularmap: {
        specularMap: { value: null },
        specularMapTransform: { value: new Pe() }
      },
      envmap: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        reflectivity: { value: 1 },
        ior: { value: 1.5 },
        refractionRatio: { value: 0.98 }
      },
      aomap: {
        aoMap: { value: null },
        aoMapIntensity: { value: 1 },
        aoMapTransform: { value: new Pe() }
      },
      lightmap: {
        lightMap: { value: null },
        lightMapIntensity: { value: 1 },
        lightMapTransform: { value: new Pe() }
      },
      bumpmap: {
        bumpMap: { value: null },
        bumpMapTransform: { value: new Pe() },
        bumpScale: { value: 1 }
      },
      normalmap: {
        normalMap: { value: null },
        normalMapTransform: { value: new Pe() },
        normalScale: { value: new De(1, 1) }
      },
      displacementmap: {
        displacementMap: { value: null },
        displacementMapTransform: { value: new Pe() },
        displacementScale: { value: 1 },
        displacementBias: { value: 0 }
      },
      emissivemap: {
        emissiveMap: { value: null },
        emissiveMapTransform: { value: new Pe() }
      },
      metalnessmap: {
        metalnessMap: { value: null },
        metalnessMapTransform: { value: new Pe() }
      },
      roughnessmap: {
        roughnessMap: { value: null },
        roughnessMapTransform: { value: new Pe() }
      },
      gradientmap: { gradientMap: { value: null } },
      fog: {
        fogDensity: { value: 25e-5 },
        fogNear: { value: 1 },
        fogFar: { value: 2e3 },
        fogColor: { value: new ye(16777215) }
      },
      lights: {
        ambientLightColor: { value: [] },
        lightProbe: { value: [] },
        directionalLights: {
          value: [],
          properties: { direction: {}, color: {} }
        },
        directionalLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        directionalShadowMap: { value: [] },
        directionalShadowMatrix: { value: [] },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {}
          }
        },
        spotLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        spotLightMap: { value: [] },
        spotShadowMap: { value: [] },
        spotLightMatrix: { value: [] },
        pointLights: {
          value: [],
          properties: { color: {}, position: {}, decay: {}, distance: {} }
        },
        pointLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {}
          }
        },
        pointShadowMap: { value: [] },
        pointShadowMatrix: { value: [] },
        hemisphereLights: {
          value: [],
          properties: { direction: {}, skyColor: {}, groundColor: {} }
        },
        rectAreaLights: {
          value: [],
          properties: { color: {}, position: {}, width: {}, height: {} }
        },
        ltc_1: { value: null },
        ltc_2: { value: null }
      },
      points: {
        diffuse: { value: new ye(16777215) },
        opacity: { value: 1 },
        size: { value: 1 },
        scale: { value: 1 },
        map: { value: null },
        alphaMap: { value: null },
        alphaTest: { value: 0 },
        uvTransform: { value: new Pe() }
      },
      sprite: {
        diffuse: { value: new ye(16777215) },
        opacity: { value: 1 },
        center: { value: new De(0.5, 0.5) },
        rotation: { value: 0 },
        map: { value: null },
        mapTransform: { value: new Pe() },
        alphaMap: { value: null },
        alphaTest: { value: 0 }
      }
    },
    Xt = {
      basic: {
        uniforms: vt([
          te.common,
          te.specularmap,
          te.envmap,
          te.aomap,
          te.lightmap,
          te.fog
        ]),
        vertexShader: Ee.meshbasic_vert,
        fragmentShader: Ee.meshbasic_frag
      },
      lambert: {
        uniforms: vt([
          te.common,
          te.specularmap,
          te.envmap,
          te.aomap,
          te.lightmap,
          te.emissivemap,
          te.bumpmap,
          te.normalmap,
          te.displacementmap,
          te.fog,
          te.lights,
          { emissive: { value: new ye(0) } }
        ]),
        vertexShader: Ee.meshlambert_vert,
        fragmentShader: Ee.meshlambert_frag
      },
      phong: {
        uniforms: vt([
          te.common,
          te.specularmap,
          te.envmap,
          te.aomap,
          te.lightmap,
          te.emissivemap,
          te.bumpmap,
          te.normalmap,
          te.displacementmap,
          te.fog,
          te.lights,
          {
            emissive: { value: new ye(0) },
            specular: { value: new ye(1118481) },
            shininess: { value: 30 }
          }
        ]),
        vertexShader: Ee.meshphong_vert,
        fragmentShader: Ee.meshphong_frag
      },
      standard: {
        uniforms: vt([
          te.common,
          te.envmap,
          te.aomap,
          te.lightmap,
          te.emissivemap,
          te.bumpmap,
          te.normalmap,
          te.displacementmap,
          te.roughnessmap,
          te.metalnessmap,
          te.fog,
          te.lights,
          {
            emissive: { value: new ye(0) },
            roughness: { value: 1 },
            metalness: { value: 0 },
            envMapIntensity: { value: 1 }
          }
        ]),
        vertexShader: Ee.meshphysical_vert,
        fragmentShader: Ee.meshphysical_frag
      },
      toon: {
        uniforms: vt([
          te.common,
          te.aomap,
          te.lightmap,
          te.emissivemap,
          te.bumpmap,
          te.normalmap,
          te.displacementmap,
          te.gradientmap,
          te.fog,
          te.lights,
          { emissive: { value: new ye(0) } }
        ]),
        vertexShader: Ee.meshtoon_vert,
        fragmentShader: Ee.meshtoon_frag
      },
      matcap: {
        uniforms: vt([
          te.common,
          te.bumpmap,
          te.normalmap,
          te.displacementmap,
          te.fog,
          { matcap: { value: null } }
        ]),
        vertexShader: Ee.meshmatcap_vert,
        fragmentShader: Ee.meshmatcap_frag
      },
      points: {
        uniforms: vt([te.points, te.fog]),
        vertexShader: Ee.points_vert,
        fragmentShader: Ee.points_frag
      },
      dashed: {
        uniforms: vt([
          te.common,
          te.fog,
          { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }
        ]),
        vertexShader: Ee.linedashed_vert,
        fragmentShader: Ee.linedashed_frag
      },
      depth: {
        uniforms: vt([te.common, te.displacementmap]),
        vertexShader: Ee.depth_vert,
        fragmentShader: Ee.depth_frag
      },
      normal: {
        uniforms: vt([
          te.common,
          te.bumpmap,
          te.normalmap,
          te.displacementmap,
          { opacity: { value: 1 } }
        ]),
        vertexShader: Ee.meshnormal_vert,
        fragmentShader: Ee.meshnormal_frag
      },
      sprite: {
        uniforms: vt([te.sprite, te.fog]),
        vertexShader: Ee.sprite_vert,
        fragmentShader: Ee.sprite_frag
      },
      background: {
        uniforms: {
          uvTransform: { value: new Pe() },
          t2D: { value: null },
          backgroundIntensity: { value: 1 }
        },
        vertexShader: Ee.background_vert,
        fragmentShader: Ee.background_frag
      },
      backgroundCube: {
        uniforms: {
          envMap: { value: null },
          flipEnvMap: { value: -1 },
          backgroundBlurriness: { value: 0 },
          backgroundIntensity: { value: 1 }
        },
        vertexShader: Ee.backgroundCube_vert,
        fragmentShader: Ee.backgroundCube_frag
      },
      cube: {
        uniforms: {
          tCube: { value: null },
          tFlip: { value: -1 },
          opacity: { value: 1 }
        },
        vertexShader: Ee.cube_vert,
        fragmentShader: Ee.cube_frag
      },
      equirect: {
        uniforms: { tEquirect: { value: null } },
        vertexShader: Ee.equirect_vert,
        fragmentShader: Ee.equirect_frag
      },
      distanceRGBA: {
        uniforms: vt([
          te.common,
          te.displacementmap,
          {
            referencePosition: { value: new R() },
            nearDistance: { value: 1 },
            farDistance: { value: 1e3 }
          }
        ]),
        vertexShader: Ee.distanceRGBA_vert,
        fragmentShader: Ee.distanceRGBA_frag
      },
      shadow: {
        uniforms: vt([
          te.lights,
          te.fog,
          { color: { value: new ye(0) }, opacity: { value: 1 } }
        ]),
        vertexShader: Ee.shadow_vert,
        fragmentShader: Ee.shadow_frag
      }
    };
  Xt.physical = {
    uniforms: vt([
      Xt.standard.uniforms,
      {
        clearcoat: { value: 0 },
        clearcoatMap: { value: null },
        clearcoatMapTransform: { value: new Pe() },
        clearcoatNormalMap: { value: null },
        clearcoatNormalMapTransform: { value: new Pe() },
        clearcoatNormalScale: { value: new De(1, 1) },
        clearcoatRoughness: { value: 0 },
        clearcoatRoughnessMap: { value: null },
        clearcoatRoughnessMapTransform: { value: new Pe() },
        iridescence: { value: 0 },
        iridescenceMap: { value: null },
        iridescenceMapTransform: { value: new Pe() },
        iridescenceIOR: { value: 1.3 },
        iridescenceThicknessMinimum: { value: 100 },
        iridescenceThicknessMaximum: { value: 400 },
        iridescenceThicknessMap: { value: null },
        iridescenceThicknessMapTransform: { value: new Pe() },
        sheen: { value: 0 },
        sheenColor: { value: new ye(0) },
        sheenColorMap: { value: null },
        sheenColorMapTransform: { value: new Pe() },
        sheenRoughness: { value: 1 },
        sheenRoughnessMap: { value: null },
        sheenRoughnessMapTransform: { value: new Pe() },
        transmission: { value: 0 },
        transmissionMap: { value: null },
        transmissionMapTransform: { value: new Pe() },
        transmissionSamplerSize: { value: new De() },
        transmissionSamplerMap: { value: null },
        thickness: { value: 0 },
        thicknessMap: { value: null },
        thicknessMapTransform: { value: new Pe() },
        attenuationDistance: { value: 0 },
        attenuationColor: { value: new ye(0) },
        specularColor: { value: new ye(1, 1, 1) },
        specularColorMap: { value: null },
        specularColorMapTransform: { value: new Pe() },
        specularIntensity: { value: 1 },
        specularIntensityMap: { value: null },
        specularIntensityMapTransform: { value: new Pe() }
      }
    ]),
    vertexShader: Ee.meshphysical_vert,
    fragmentShader: Ee.meshphysical_frag
  };
  const _s = { r: 0, b: 0, g: 0 };
  function vp(o, e, t, n, i, s, r) {
    const a = new ye(0);
    let l = s === !0 ? 0 : 1,
      c,
      h,
      u = null,
      d = 0,
      p = null;
    function g(m, f) {
      let b = !1,
        v = f.isScene === !0 ? f.background : null;
      v && v.isTexture && (v = (f.backgroundBlurriness > 0 ? t : e).get(v));
      const y = o.xr,
        A = y.getSession && y.getSession();
      A && A.environmentBlendMode === "additive" && (v = null),
        v === null ? _(a, l) : v && v.isColor && (_(v, 1), (b = !0)),
        (o.autoClear || b) &&
          o.clear(o.autoClearColor, o.autoClearDepth, o.autoClearStencil),
        v && (v.isCubeTexture || v.mapping === Is)
          ? (h === void 0 &&
              ((h = new yt(
                new qi(1, 1, 1),
                new Yt({
                  name: "BackgroundCubeMaterial",
                  uniforms: yi(Xt.backgroundCube.uniforms),
                  vertexShader: Xt.backgroundCube.vertexShader,
                  fragmentShader: Xt.backgroundCube.fragmentShader,
                  side: Tt,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1
                })
              )),
              h.geometry.deleteAttribute("normal"),
              h.geometry.deleteAttribute("uv"),
              (h.onBeforeRender = function (C, I, D) {
                this.matrixWorld.copyPosition(D.matrixWorld);
              }),
              Object.defineProperty(h.material, "envMap", {
                get: function () {
                  return this.uniforms.envMap.value;
                }
              }),
              i.update(h)),
            (h.material.uniforms.envMap.value = v),
            (h.material.uniforms.flipEnvMap.value =
              v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1),
            (h.material.uniforms.backgroundBlurriness.value =
              f.backgroundBlurriness),
            (h.material.uniforms.backgroundIntensity.value =
              f.backgroundIntensity),
            (h.material.toneMapped = v.encoding !== Fe),
            (u !== v || d !== v.version || p !== o.toneMapping) &&
              ((h.material.needsUpdate = !0),
              (u = v),
              (d = v.version),
              (p = o.toneMapping)),
            h.layers.enableAll(),
            m.unshift(h, h.geometry, h.material, 0, 0, null))
          : v &&
            v.isTexture &&
            (c === void 0 &&
              ((c = new yt(
                new $r(2, 2),
                new Yt({
                  name: "BackgroundMaterial",
                  uniforms: yi(Xt.background.uniforms),
                  vertexShader: Xt.background.vertexShader,
                  fragmentShader: Xt.background.fragmentShader,
                  side: Kt,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1
                })
              )),
              c.geometry.deleteAttribute("normal"),
              Object.defineProperty(c.material, "map", {
                get: function () {
                  return this.uniforms.t2D.value;
                }
              }),
              i.update(c)),
            (c.material.uniforms.t2D.value = v),
            (c.material.uniforms.backgroundIntensity.value =
              f.backgroundIntensity),
            (c.material.toneMapped = v.encoding !== Fe),
            v.matrixAutoUpdate === !0 && v.updateMatrix(),
            c.material.uniforms.uvTransform.value.copy(v.matrix),
            (u !== v || d !== v.version || p !== o.toneMapping) &&
              ((c.material.needsUpdate = !0),
              (u = v),
              (d = v.version),
              (p = o.toneMapping)),
            c.layers.enableAll(),
            m.unshift(c, c.geometry, c.material, 0, 0, null));
    }
    function _(m, f) {
      m.getRGB(_s, ec(o)), n.buffers.color.setClear(_s.r, _s.g, _s.b, f, r);
    }
    return {
      getClearColor: function () {
        return a;
      },
      setClearColor: function (m, f = 1) {
        a.set(m), (l = f), _(a, l);
      },
      getClearAlpha: function () {
        return l;
      },
      setClearAlpha: function (m) {
        (l = m), _(a, l);
      },
      render: g
    };
  }
  function Sp(o, e, t, n) {
    const i = o.getParameter(34921),
      s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
      r = n.isWebGL2 || s !== null,
      a = {},
      l = m(null);
    let c = l,
      h = !1;
    function u(O, F, Q, $, X) {
      let Y = !1;
      if (r) {
        const ee = _($, Q, F);
        c !== ee && ((c = ee), p(c.object)),
          (Y = f(O, $, Q, X)),
          Y && b(O, $, Q, X);
      } else {
        const ee = F.wireframe === !0;
        (c.geometry !== $.id || c.program !== Q.id || c.wireframe !== ee) &&
          ((c.geometry = $.id), (c.program = Q.id), (c.wireframe = ee), (Y = !0));
      }
      X !== null && t.update(X, 34963),
        (Y || h) &&
          ((h = !1),
          D(O, F, Q, $),
          X !== null && o.bindBuffer(34963, t.get(X).buffer));
    }
    function d() {
      return n.isWebGL2 ? o.createVertexArray() : s.createVertexArrayOES();
    }
    function p(O) {
      return n.isWebGL2 ? o.bindVertexArray(O) : s.bindVertexArrayOES(O);
    }
    function g(O) {
      return n.isWebGL2 ? o.deleteVertexArray(O) : s.deleteVertexArrayOES(O);
    }
    function _(O, F, Q) {
      const $ = Q.wireframe === !0;
      let X = a[O.id];
      X === void 0 && ((X = {}), (a[O.id] = X));
      let Y = X[F.id];
      Y === void 0 && ((Y = {}), (X[F.id] = Y));
      let ee = Y[$];
      return ee === void 0 && ((ee = m(d())), (Y[$] = ee)), ee;
    }
    function m(O) {
      const F = [],
        Q = [],
        $ = [];
      for (let X = 0; X < i; X++) (F[X] = 0), (Q[X] = 0), ($[X] = 0);
      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: F,
        enabledAttributes: Q,
        attributeDivisors: $,
        object: O,
        attributes: {},
        index: null
      };
    }
    function f(O, F, Q, $) {
      const X = c.attributes,
        Y = F.attributes;
      let ee = 0;
      const ge = Q.getAttributes();
      for (const ae in ge)
        if (ge[ae].location >= 0) {
          const q = X[ae];
          let ie = Y[ae];
          if (
            (ie === void 0 &&
              (ae === "instanceMatrix" &&
                O.instanceMatrix &&
                (ie = O.instanceMatrix),
              ae === "instanceColor" &&
                O.instanceColor &&
                (ie = O.instanceColor)),
            q === void 0 || q.attribute !== ie || (ie && q.data !== ie.data))
          )
            return !0;
          ee++;
        }
      return c.attributesNum !== ee || c.index !== $;
    }
    function b(O, F, Q, $) {
      const X = {},
        Y = F.attributes;
      let ee = 0;
      const ge = Q.getAttributes();
      for (const ae in ge)
        if (ge[ae].location >= 0) {
          let q = Y[ae];
          q === void 0 &&
            (ae === "instanceMatrix" &&
              O.instanceMatrix &&
              (q = O.instanceMatrix),
            ae === "instanceColor" && O.instanceColor && (q = O.instanceColor));
          const ie = {};
          (ie.attribute = q),
            q && q.data && (ie.data = q.data),
            (X[ae] = ie),
            ee++;
        }
      (c.attributes = X), (c.attributesNum = ee), (c.index = $);
    }
    function v() {
      const O = c.newAttributes;
      for (let F = 0, Q = O.length; F < Q; F++) O[F] = 0;
    }
    function y(O) {
      A(O, 0);
    }
    function A(O, F) {
      const Q = c.newAttributes,
        $ = c.enabledAttributes,
        X = c.attributeDivisors;
      (Q[O] = 1),
        $[O] === 0 && (o.enableVertexAttribArray(O), ($[O] = 1)),
        X[O] !== F &&
          ((n.isWebGL2 ? o : e.get("ANGLE_instanced_arrays"))[
            n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
          ](O, F),
          (X[O] = F));
    }
    function C() {
      const O = c.newAttributes,
        F = c.enabledAttributes;
      for (let Q = 0, $ = F.length; Q < $; Q++)
        F[Q] !== O[Q] && (o.disableVertexAttribArray(Q), (F[Q] = 0));
    }
    function I(O, F, Q, $, X, Y) {
      n.isWebGL2 === !0 && (Q === 5124 || Q === 5125)
        ? o.vertexAttribIPointer(O, F, Q, X, Y)
        : o.vertexAttribPointer(O, F, Q, $, X, Y);
    }
    function D(O, F, Q, $) {
      if (
        n.isWebGL2 === !1 &&
        (O.isInstancedMesh || $.isInstancedBufferGeometry) &&
        e.get("ANGLE_instanced_arrays") === null
      )
        return;
      v();
      const X = $.attributes,
        Y = Q.getAttributes(),
        ee = F.defaultAttributeValues;
      for (const ge in Y) {
        const ae = Y[ge];
        if (ae.location >= 0) {
          let V = X[ge];
          if (
            (V === void 0 &&
              (ge === "instanceMatrix" &&
                O.instanceMatrix &&
                (V = O.instanceMatrix),
              ge === "instanceColor" && O.instanceColor && (V = O.instanceColor)),
            V !== void 0)
          ) {
            const q = V.normalized,
              ie = V.itemSize,
              oe = t.get(V);
            if (oe === void 0) continue;
            const U = oe.buffer,
              be = oe.type,
              Me = oe.bytesPerElement;
            if (V.isInterleavedBufferAttribute) {
              const ne = V.data,
                xe = ne.stride,
                ze = V.offset;
              if (ne.isInstancedInterleavedBuffer) {
                for (let fe = 0; fe < ae.locationSize; fe++)
                  A(ae.location + fe, ne.meshPerAttribute);
                O.isInstancedMesh !== !0 &&
                  $._maxInstanceCount === void 0 &&
                  ($._maxInstanceCount = ne.meshPerAttribute * ne.count);
              } else
                for (let fe = 0; fe < ae.locationSize; fe++) y(ae.location + fe);
              o.bindBuffer(34962, U);
              for (let fe = 0; fe < ae.locationSize; fe++)
                I(
                  ae.location + fe,
                  ie / ae.locationSize,
                  be,
                  q,
                  xe * Me,
                  (ze + (ie / ae.locationSize) * fe) * Me
                );
            } else {
              if (V.isInstancedBufferAttribute) {
                for (let ne = 0; ne < ae.locationSize; ne++)
                  A(ae.location + ne, V.meshPerAttribute);
                O.isInstancedMesh !== !0 &&
                  $._maxInstanceCount === void 0 &&
                  ($._maxInstanceCount = V.meshPerAttribute * V.count);
              } else
                for (let ne = 0; ne < ae.locationSize; ne++) y(ae.location + ne);
              o.bindBuffer(34962, U);
              for (let ne = 0; ne < ae.locationSize; ne++)
                I(
                  ae.location + ne,
                  ie / ae.locationSize,
                  be,
                  q,
                  ie * Me,
                  (ie / ae.locationSize) * ne * Me
                );
            }
          } else if (ee !== void 0) {
            const q = ee[ge];
            if (q !== void 0)
              switch (q.length) {
                case 2:
                  o.vertexAttrib2fv(ae.location, q);
                  break;
                case 3:
                  o.vertexAttrib3fv(ae.location, q);
                  break;
                case 4:
                  o.vertexAttrib4fv(ae.location, q);
                  break;
                default:
                  o.vertexAttrib1fv(ae.location, q);
              }
          }
        }
      }
      C();
    }
    function S() {
      j();
      for (const O in a) {
        const F = a[O];
        for (const Q in F) {
          const $ = F[Q];
          for (const X in $) g($[X].object), delete $[X];
          delete F[Q];
        }
        delete a[O];
      }
    }
    function E(O) {
      if (a[O.id] === void 0) return;
      const F = a[O.id];
      for (const Q in F) {
        const $ = F[Q];
        for (const X in $) g($[X].object), delete $[X];
        delete F[Q];
      }
      delete a[O.id];
    }
    function W(O) {
      for (const F in a) {
        const Q = a[F];
        if (Q[O.id] === void 0) continue;
        const $ = Q[O.id];
        for (const X in $) g($[X].object), delete $[X];
        delete Q[O.id];
      }
    }
    function j() {
      P(), (h = !0), c !== l && ((c = l), p(c.object));
    }
    function P() {
      (l.geometry = null), (l.program = null), (l.wireframe = !1);
    }
    return {
      setup: u,
      reset: j,
      resetDefaultState: P,
      dispose: S,
      releaseStatesOfGeometry: E,
      releaseStatesOfProgram: W,
      initAttributes: v,
      enableAttribute: y,
      disableUnusedAttributes: C
    };
  }
  function Mp(o, e, t, n) {
    const i = n.isWebGL2;
    let s;
    function r(c) {
      s = c;
    }
    function a(c, h) {
      o.drawArrays(s, c, h), t.update(h, s, 1);
    }
    function l(c, h, u) {
      if (u === 0) return;
      let d, p;
      if (i) (d = o), (p = "drawArraysInstanced");
      else if (
        ((d = e.get("ANGLE_instanced_arrays")),
        (p = "drawArraysInstancedANGLE"),
        d === null)
      ) {
        console.error(
          "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
        );
        return;
      }
      d[p](s, c, h, u), t.update(h, s, u);
    }
    (this.setMode = r), (this.render = a), (this.renderInstances = l);
  }
  function yp(o, e, t) {
    let n;
    function i() {
      if (n !== void 0) return n;
      if (e.has("EXT_texture_filter_anisotropic") === !0) {
        const I = e.get("EXT_texture_filter_anisotropic");
        n = o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else n = 0;
      return n;
    }
    function s(I) {
      if (I === "highp") {
        if (
          o.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
          o.getShaderPrecisionFormat(35632, 36338).precision > 0
        )
          return "highp";
        I = "mediump";
      }
      return I === "mediump" &&
        o.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
        o.getShaderPrecisionFormat(35632, 36337).precision > 0
        ? "mediump"
        : "lowp";
    }
    const r =
      typeof WebGL2RenderingContext < "u" &&
      o.constructor.name === "WebGL2RenderingContext";
    let a = t.precision !== void 0 ? t.precision : "highp";
    const l = s(a);
    l !== a &&
      (console.warn(
        "THREE.WebGLRenderer:",
        a,
        "not supported, using",
        l,
        "instead."
      ),
      (a = l));
    const c = r || e.has("WEBGL_draw_buffers"),
      h = t.logarithmicDepthBuffer === !0,
      u = o.getParameter(34930),
      d = o.getParameter(35660),
      p = o.getParameter(3379),
      g = o.getParameter(34076),
      _ = o.getParameter(34921),
      m = o.getParameter(36347),
      f = o.getParameter(36348),
      b = o.getParameter(36349),
      v = d > 0,
      y = r || e.has("OES_texture_float"),
      A = v && y,
      C = r ? o.getParameter(36183) : 0;
    return {
      isWebGL2: r,
      drawBuffers: c,
      getMaxAnisotropy: i,
      getMaxPrecision: s,
      precision: a,
      logarithmicDepthBuffer: h,
      maxTextures: u,
      maxVertexTextures: d,
      maxTextureSize: p,
      maxCubemapSize: g,
      maxAttributes: _,
      maxVertexUniforms: m,
      maxVaryings: f,
      maxFragmentUniforms: b,
      vertexTextures: v,
      floatFragmentTextures: y,
      floatVertexTextures: A,
      maxSamples: C
    };
  }
  function Tp(o) {
    const e = this;
    let t = null,
      n = 0,
      i = !1,
      s = !1;
    const r = new Cn(),
      a = new Pe(),
      l = { value: null, needsUpdate: !1 };
    (this.uniform = l),
      (this.numPlanes = 0),
      (this.numIntersection = 0),
      (this.init = function (u, d) {
        const p = u.length !== 0 || d || n !== 0 || i;
        return (i = d), (n = u.length), p;
      }),
      (this.beginShadows = function () {
        (s = !0), h(null);
      }),
      (this.endShadows = function () {
        s = !1;
      }),
      (this.setGlobalState = function (u, d) {
        t = h(u, d, 0);
      }),
      (this.setState = function (u, d, p) {
        const g = u.clippingPlanes,
          _ = u.clipIntersection,
          m = u.clipShadows,
          f = o.get(u);
        if (!i || g === null || g.length === 0 || (s && !m)) s ? h(null) : c();
        else {
          const b = s ? 0 : n,
            v = b * 4;
          let y = f.clippingState || null;
          (l.value = y), (y = h(g, d, v, p));
          for (let A = 0; A !== v; ++A) y[A] = t[A];
          (f.clippingState = y),
            (this.numIntersection = _ ? this.numPlanes : 0),
            (this.numPlanes += b);
        }
      });
    function c() {
      l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
        (e.numPlanes = n),
        (e.numIntersection = 0);
    }
    function h(u, d, p, g) {
      const _ = u !== null ? u.length : 0;
      let m = null;
      if (_ !== 0) {
        if (((m = l.value), g !== !0 || m === null)) {
          const f = p + _ * 4,
            b = d.matrixWorldInverse;
          a.getNormalMatrix(b),
            (m === null || m.length < f) && (m = new Float32Array(f));
          for (let v = 0, y = p; v !== _; ++v, y += 4)
            r.copy(u[v]).applyMatrix4(b, a),
              r.normal.toArray(m, y),
              (m[y + 3] = r.constant);
        }
        (l.value = m), (l.needsUpdate = !0);
      }
      return (e.numPlanes = _), (e.numIntersection = 0), m;
    }
  }
  function bp(o) {
    let e = new WeakMap();
    function t(r, a) {
      return a === Dr ? (r.mapping = mi) : a === Nr && (r.mapping = gi), r;
    }
    function n(r) {
      if (r && r.isTexture && r.isRenderTargetTexture === !1) {
        const a = r.mapping;
        if (a === Dr || a === Nr)
          if (e.has(r)) {
            const l = e.get(r).texture;
            return t(l, r.mapping);
          } else {
            const l = r.image;
            if (l && l.height > 0) {
              const c = new zu(l.height / 2);
              return (
                c.fromEquirectangularTexture(o, r),
                e.set(r, c),
                r.addEventListener("dispose", i),
                t(c.texture, r.mapping)
              );
            } else return null;
          }
      }
      return r;
    }
    function i(r) {
      const a = r.target;
      a.removeEventListener("dispose", i);
      const l = e.get(a);
      l !== void 0 && (e.delete(a), l.dispose());
    }
    function s() {
      e = new WeakMap();
    }
    return { get: n, dispose: s };
  }
  class ji extends nc {
    constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, r = 2e3) {
      super(),
        (this.isOrthographicCamera = !0),
        (this.type = "OrthographicCamera"),
        (this.zoom = 1),
        (this.view = null),
        (this.left = e),
        (this.right = t),
        (this.top = n),
        (this.bottom = i),
        (this.near = s),
        (this.far = r),
        this.updateProjectionMatrix();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.left = e.left),
        (this.right = e.right),
        (this.top = e.top),
        (this.bottom = e.bottom),
        (this.near = e.near),
        (this.far = e.far),
        (this.zoom = e.zoom),
        (this.view = e.view === null ? null : Object.assign({}, e.view)),
        this
      );
    }
    setViewOffset(e, t, n, i, s, r) {
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1
        }),
        (this.view.enabled = !0),
        (this.view.fullWidth = e),
        (this.view.fullHeight = t),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = s),
        (this.view.height = r),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const e = (this.right - this.left) / (2 * this.zoom),
        t = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        i = (this.top + this.bottom) / 2;
      let s = n - e,
        r = n + e,
        a = i + t,
        l = i - t;
      if (this.view !== null && this.view.enabled) {
        const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
          h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        (s += c * this.view.offsetX),
          (r = s + c * this.view.width),
          (a -= h * this.view.offsetY),
          (l = a - h * this.view.height);
      }
      this.projectionMatrix.makeOrthographic(s, r, a, l, this.near, this.far),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return (
        (t.object.zoom = this.zoom),
        (t.object.left = this.left),
        (t.object.right = this.right),
        (t.object.top = this.top),
        (t.object.bottom = this.bottom),
        (t.object.near = this.near),
        (t.object.far = this.far),
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t
      );
    }
  }
  const ci = 4,
    Fo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
    In = 20,
    Mr = new ji(),
    Bo = new ye();
  let yr = null;
  const Rn = (1 + Math.sqrt(5)) / 2,
    ii = 1 / Rn,
    zo = [
      new R(1, 1, 1),
      new R(-1, 1, 1),
      new R(1, 1, -1),
      new R(-1, 1, -1),
      new R(0, Rn, ii),
      new R(0, Rn, -ii),
      new R(ii, 0, Rn),
      new R(-ii, 0, Rn),
      new R(Rn, ii, 0),
      new R(-Rn, ii, 0)
    ];
  class ko {
    constructor(e) {
      (this._renderer = e),
        (this._pingPongRenderTarget = null),
        (this._lodMax = 0),
        (this._cubeSize = 0),
        (this._lodPlanes = []),
        (this._sizeLods = []),
        (this._sigmas = []),
        (this._blurMaterial = null),
        (this._cubemapMaterial = null),
        (this._equirectMaterial = null),
        this._compileMaterial(this._blurMaterial);
    }
    fromScene(e, t = 0, n = 0.1, i = 100) {
      (yr = this._renderer.getRenderTarget()), this._setSize(256);
      const s = this._allocateTargets();
      return (
        (s.depthBuffer = !0),
        this._sceneToCubeUV(e, n, i, s),
        t > 0 && this._blur(s, 0, 0, t),
        this._applyPMREM(s),
        this._cleanup(s),
        s
      );
    }
    fromEquirectangular(e, t = null) {
      return this._fromTexture(e, t);
    }
    fromCubemap(e, t = null) {
      return this._fromTexture(e, t);
    }
    compileCubemapShader() {
      this._cubemapMaterial === null &&
        ((this._cubemapMaterial = Ho()),
        this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      this._equirectMaterial === null &&
        ((this._equirectMaterial = Go()),
        this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(),
        this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
        this._equirectMaterial !== null && this._equirectMaterial.dispose();
    }
    _setSize(e) {
      (this._lodMax = Math.floor(Math.log2(e))),
        (this._cubeSize = Math.pow(2, this._lodMax));
    }
    _dispose() {
      this._blurMaterial !== null && this._blurMaterial.dispose(),
        this._pingPongRenderTarget !== null &&
          this._pingPongRenderTarget.dispose();
      for (let e = 0; e < this._lodPlanes.length; e++)
        this._lodPlanes[e].dispose();
    }
    _cleanup(e) {
      this._renderer.setRenderTarget(yr),
        (e.scissorTest = !1),
        xs(e, 0, 0, e.width, e.height);
    }
    _fromTexture(e, t) {
      e.mapping === mi || e.mapping === gi
        ? this._setSize(
            e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
          )
        : this._setSize(e.image.width / 4),
        (yr = this._renderer.getRenderTarget());
      const n = t || this._allocateTargets();
      return (
        this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
      );
    }
    _allocateTargets() {
      const e = 3 * Math.max(this._cubeSize, 112),
        t = 4 * this._cubeSize,
        n = {
          magFilter: ot,
          minFilter: ot,
          generateMipmaps: !1,
          type: Vi,
          format: Ot,
          encoding: Fn,
          depthBuffer: !1
        },
        i = Vo(e, t, n);
      if (
        this._pingPongRenderTarget === null ||
        this._pingPongRenderTarget.width !== e ||
        this._pingPongRenderTarget.height !== t
      ) {
        this._pingPongRenderTarget !== null && this._dispose(),
          (this._pingPongRenderTarget = Vo(e, t, n));
        const { _lodMax: s } = this;
        ({
          sizeLods: this._sizeLods,
          lodPlanes: this._lodPlanes,
          sigmas: this._sigmas
        } = Ap(s)),
          (this._blurMaterial = Ep(s, e, t));
      }
      return i;
    }
    _compileMaterial(e) {
      const t = new yt(this._lodPlanes[0], e);
      this._renderer.compile(t, Mr);
    }
    _sceneToCubeUV(e, t, n, i) {
      const a = new St(90, 1, t, n),
        l = [1, -1, 1, 1, 1, 1],
        c = [1, 1, 1, -1, -1, -1],
        h = this._renderer,
        u = h.autoClear,
        d = h.toneMapping;
      h.getClearColor(Bo), (h.toneMapping = on), (h.autoClear = !1);
      const p = new Pn({
          name: "PMREM.Background",
          side: Tt,
          depthWrite: !1,
          depthTest: !1
        }),
        g = new yt(new qi(), p);
      let _ = !1;
      const m = e.background;
      m
        ? m.isColor && (p.color.copy(m), (e.background = null), (_ = !0))
        : (p.color.copy(Bo), (_ = !0));
      for (let f = 0; f < 6; f++) {
        const b = f % 3;
        b === 0
          ? (a.up.set(0, l[f], 0), a.lookAt(c[f], 0, 0))
          : b === 1
          ? (a.up.set(0, 0, l[f]), a.lookAt(0, c[f], 0))
          : (a.up.set(0, l[f], 0), a.lookAt(0, 0, c[f]));
        const v = this._cubeSize;
        xs(i, b * v, f > 2 ? v : 0, v, v),
          h.setRenderTarget(i),
          _ && h.render(g, a),
          h.render(e, a);
      }
      g.geometry.dispose(),
        g.material.dispose(),
        (h.toneMapping = d),
        (h.autoClear = u),
        (e.background = m);
    }
    _textureToCubeUV(e, t) {
      const n = this._renderer,
        i = e.mapping === mi || e.mapping === gi;
      i
        ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ho()),
          (this._cubemapMaterial.uniforms.flipEnvMap.value =
            e.isRenderTargetTexture === !1 ? -1 : 1))
        : this._equirectMaterial === null && (this._equirectMaterial = Go());
      const s = i ? this._cubemapMaterial : this._equirectMaterial,
        r = new yt(this._lodPlanes[0], s),
        a = s.uniforms;
      a.envMap.value = e;
      const l = this._cubeSize;
      xs(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(r, Mr);
    }
    _applyPMREM(e) {
      const t = this._renderer,
        n = t.autoClear;
      t.autoClear = !1;
      for (let i = 1; i < this._lodPlanes.length; i++) {
        const s = Math.sqrt(
            this._sigmas[i] * this._sigmas[i] -
              this._sigmas[i - 1] * this._sigmas[i - 1]
          ),
          r = zo[(i - 1) % zo.length];
        this._blur(e, i - 1, i, s, r);
      }
      t.autoClear = n;
    }
    _blur(e, t, n, i, s) {
      const r = this._pingPongRenderTarget;
      this._halfBlur(e, r, t, n, i, "latitudinal", s),
        this._halfBlur(r, e, n, n, i, "longitudinal", s);
    }
    _halfBlur(e, t, n, i, s, r, a) {
      const l = this._renderer,
        c = this._blurMaterial;
      r !== "latitudinal" &&
        r !== "longitudinal" &&
        console.error(
          "blur direction must be either latitudinal or longitudinal!"
        );
      const h = 3,
        u = new yt(this._lodPlanes[i], c),
        d = c.uniforms,
        p = this._sizeLods[n] - 1,
        g = isFinite(s) ? Math.PI / (2 * p) : (2 * Math.PI) / (2 * In - 1),
        _ = s / g,
        m = isFinite(s) ? 1 + Math.floor(h * _) : In;
      m > In &&
        console.warn(
          `sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${In}`
        );
      const f = [];
      let b = 0;
      for (let I = 0; I < In; ++I) {
        const D = I / _,
          S = Math.exp((-D * D) / 2);
        f.push(S), I === 0 ? (b += S) : I < m && (b += 2 * S);
      }
      for (let I = 0; I < f.length; I++) f[I] = f[I] / b;
      (d.envMap.value = e.texture),
        (d.samples.value = m),
        (d.weights.value = f),
        (d.latitudinal.value = r === "latitudinal"),
        a && (d.poleAxis.value = a);
      const { _lodMax: v } = this;
      (d.dTheta.value = g), (d.mipInt.value = v - n);
      const y = this._sizeLods[i],
        A = 3 * y * (i > v - ci ? i - v + ci : 0),
        C = 4 * (this._cubeSize - y);
      xs(t, A, C, 3 * y, 2 * y), l.setRenderTarget(t), l.render(u, Mr);
    }
  }
  function Ap(o) {
    const e = [],
      t = [],
      n = [];
    let i = o;
    const s = o - ci + 1 + Fo.length;
    for (let r = 0; r < s; r++) {
      const a = Math.pow(2, i);
      t.push(a);
      let l = 1 / a;
      r > o - ci ? (l = Fo[r - o + ci - 1]) : r === 0 && (l = 0), n.push(l);
      const c = 1 / (a - 2),
        h = -c,
        u = 1 + c,
        d = [h, h, u, h, u, u, h, h, u, u, h, u],
        p = 6,
        g = 6,
        _ = 3,
        m = 2,
        f = 1,
        b = new Float32Array(_ * g * p),
        v = new Float32Array(m * g * p),
        y = new Float32Array(f * g * p);
      for (let C = 0; C < p; C++) {
        const I = ((C % 3) * 2) / 3 - 1,
          D = C > 2 ? 0 : -1,
          S = [
            I,
            D,
            0,
            I + 2 / 3,
            D,
            0,
            I + 2 / 3,
            D + 1,
            0,
            I,
            D,
            0,
            I + 2 / 3,
            D + 1,
            0,
            I,
            D + 1,
            0
          ];
        b.set(S, _ * g * C), v.set(d, m * g * C);
        const E = [C, C, C, C, C, C];
        y.set(E, f * g * C);
      }
      const A = new Rt();
      A.setAttribute("position", new ut(b, _)),
        A.setAttribute("uv", new ut(v, m)),
        A.setAttribute("faceIndex", new ut(y, f)),
        e.push(A),
        i > ci && i--;
    }
    return { lodPlanes: e, sizeLods: t, sigmas: n };
  }
  function Vo(o, e, t) {
    const n = new cn(o, e, t);
    return (
      (n.texture.mapping = Is),
      (n.texture.name = "PMREM.cubeUv"),
      (n.scissorTest = !0),
      n
    );
  }
  function xs(o, e, t, n, i) {
    o.viewport.set(e, t, n, i), o.scissor.set(e, t, n, i);
  }
  function Ep(o, e, t) {
    const n = new Float32Array(In),
      i = new R(0, 1, 0);
    return new Yt({
      name: "SphericalGaussianBlur",
      defines: {
        n: In,
        CUBEUV_TEXEL_WIDTH: 1 / e,
        CUBEUV_TEXEL_HEIGHT: 1 / t,
        CUBEUV_MAX_MIP: `${o}.0`
      },
      uniforms: {
        envMap: { value: null },
        samples: { value: 1 },
        weights: { value: n },
        latitudinal: { value: !1 },
        dTheta: { value: 0 },
        mipInt: { value: 0 },
        poleAxis: { value: i }
      },
      vertexShader: Jr(),
      fragmentShader: `
  
              precision mediump float;
              precision mediump int;
  
              varying vec3 vOutputDirection;
  
              uniform sampler2D envMap;
              uniform int samples;
              uniform float weights[ n ];
              uniform bool latitudinal;
              uniform float dTheta;
              uniform float mipInt;
              uniform vec3 poleAxis;
  
              #define ENVMAP_TYPE_CUBE_UV
              #include <cube_uv_reflection_fragment>
  
              vec3 getSample( float theta, vec3 axis ) {
  
                  float cosTheta = cos( theta );
                  // Rodrigues' axis-angle rotation
                  vec3 sampleDirection = vOutputDirection * cosTheta
                      + cross( axis, vOutputDirection ) * sin( theta )
                      + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );
  
                  return bilinearCubeUV( envMap, sampleDirection, mipInt );
  
              }
  
              void main() {
  
                  vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );
  
                  if ( all( equal( axis, vec3( 0.0 ) ) ) ) {
  
                      axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );
  
                  }
  
                  axis = normalize( axis );
  
                  gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
                  gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );
  
                  for ( int i = 1; i < n; i++ ) {
  
                      if ( i >= samples ) {
  
                          break;
  
                      }
  
                      float theta = dTheta * float( i );
                      gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
                      gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );
  
                  }
  
              }
          `,
      blending: Mn,
      depthTest: !1,
      depthWrite: !1
    });
  }
  function Go() {
    return new Yt({
      name: "EquirectangularToCubeUV",
      uniforms: { envMap: { value: null } },
      vertexShader: Jr(),
      fragmentShader: `
  
              precision mediump float;
              precision mediump int;
  
              varying vec3 vOutputDirection;
  
              uniform sampler2D envMap;
  
              #include <common>
  
              void main() {
  
                  vec3 outputDirection = normalize( vOutputDirection );
                  vec2 uv = equirectUv( outputDirection );
  
                  gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );
  
              }
          `,
      blending: Mn,
      depthTest: !1,
      depthWrite: !1
    });
  }
  function Ho() {
    return new Yt({
      name: "CubemapToCubeUV",
      uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
      vertexShader: Jr(),
      fragmentShader: `
  
              precision mediump float;
              precision mediump int;
  
              uniform float flipEnvMap;
  
              varying vec3 vOutputDirection;
  
              uniform samplerCube envMap;
  
              void main() {
  
                  gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );
  
              }
          `,
      blending: Mn,
      depthTest: !1,
      depthWrite: !1
    });
  }
  function Jr() {
    return `
  
          precision mediump float;
          precision mediump int;
  
          attribute float faceIndex;
  
          varying vec3 vOutputDirection;
  
          // RH coordinate system; PMREM face-indexing convention
          vec3 getDirection( vec2 uv, float face ) {
  
              uv = 2.0 * uv - 1.0;
  
              vec3 direction = vec3( uv, 1.0 );
  
              if ( face == 0.0 ) {
  
                  direction = direction.zyx; // ( 1, v, u ) pos x
  
              } else if ( face == 1.0 ) {
  
                  direction = direction.xzy;
                  direction.xz *= -1.0; // ( -u, 1, -v ) pos y
  
              } else if ( face == 2.0 ) {
  
                  direction.x *= -1.0; // ( -u, v, 1 ) pos z
  
              } else if ( face == 3.0 ) {
  
                  direction = direction.zyx;
                  direction.xz *= -1.0; // ( -1, v, -u ) neg x
  
              } else if ( face == 4.0 ) {
  
                  direction = direction.xzy;
                  direction.xy *= -1.0; // ( -u, -1, v ) neg y
  
              } else if ( face == 5.0 ) {
  
                  direction.z *= -1.0; // ( u, v, -1 ) neg z
  
              }
  
              return direction;
  
          }
  
          void main() {
  
              vOutputDirection = getDirection( uv, faceIndex );
              gl_Position = vec4( position, 1.0 );
  
          }
      `;
  }
  function wp(o) {
    let e = new WeakMap(),
      t = null;
    function n(a) {
      if (a && a.isTexture) {
        const l = a.mapping,
          c = l === Dr || l === Nr,
          h = l === mi || l === gi;
        if (c || h)
          if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
            a.needsPMREMUpdate = !1;
            let u = e.get(a);
            return (
              t === null && (t = new ko(o)),
              (u = c ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u)),
              e.set(a, u),
              u.texture
            );
          } else {
            if (e.has(a)) return e.get(a).texture;
            {
              const u = a.image;
              if ((c && u && u.height > 0) || (h && u && i(u))) {
                t === null && (t = new ko(o));
                const d = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
                return e.set(a, d), a.addEventListener("dispose", s), d.texture;
              } else return null;
            }
          }
      }
      return a;
    }
    function i(a) {
      let l = 0;
      const c = 6;
      for (let h = 0; h < c; h++) a[h] !== void 0 && l++;
      return l === c;
    }
    function s(a) {
      const l = a.target;
      l.removeEventListener("dispose", s);
      const c = e.get(l);
      c !== void 0 && (e.delete(l), c.dispose());
    }
    function r() {
      (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
    }
    return { get: n, dispose: r };
  }
  function Cp(o) {
    const e = {};
    function t(n) {
      if (e[n] !== void 0) return e[n];
      let i;
      switch (n) {
        case "WEBGL_depth_texture":
          i =
            o.getExtension("WEBGL_depth_texture") ||
            o.getExtension("MOZ_WEBGL_depth_texture") ||
            o.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          i =
            o.getExtension("EXT_texture_filter_anisotropic") ||
            o.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
            o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          i =
            o.getExtension("WEBGL_compressed_texture_s3tc") ||
            o.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
            o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          i =
            o.getExtension("WEBGL_compressed_texture_pvrtc") ||
            o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          i = o.getExtension(n);
      }
      return (e[n] = i), i;
    }
    return {
      has: function (n) {
        return t(n) !== null;
      },
      init: function (n) {
        n.isWebGL2
          ? t("EXT_color_buffer_float")
          : (t("WEBGL_depth_texture"),
            t("OES_texture_float"),
            t("OES_texture_half_float"),
            t("OES_texture_half_float_linear"),
            t("OES_standard_derivatives"),
            t("OES_element_index_uint"),
            t("OES_vertex_array_object"),
            t("ANGLE_instanced_arrays")),
          t("OES_texture_float_linear"),
          t("EXT_color_buffer_half_float"),
          t("WEBGL_multisampled_render_to_texture");
      },
      get: function (n) {
        const i = t(n);
        return (
          i === null &&
            console.warn(
              "THREE.WebGLRenderer: " + n + " extension not supported."
            ),
          i
        );
      }
    };
  }
  function Rp(o, e, t, n) {
    const i = {},
      s = new WeakMap();
    function r(u) {
      const d = u.target;
      d.index !== null && e.remove(d.index);
      for (const g in d.attributes) e.remove(d.attributes[g]);
      d.removeEventListener("dispose", r), delete i[d.id];
      const p = s.get(d);
      p && (e.remove(p), s.delete(d)),
        n.releaseStatesOfGeometry(d),
        d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount,
        t.memory.geometries--;
    }
    function a(u, d) {
      return (
        i[d.id] === !0 ||
          (d.addEventListener("dispose", r),
          (i[d.id] = !0),
          t.memory.geometries++),
        d
      );
    }
    function l(u) {
      const d = u.attributes;
      for (const g in d) e.update(d[g], 34962);
      const p = u.morphAttributes;
      for (const g in p) {
        const _ = p[g];
        for (let m = 0, f = _.length; m < f; m++) e.update(_[m], 34962);
      }
    }
    function c(u) {
      const d = [],
        p = u.index,
        g = u.attributes.position;
      let _ = 0;
      if (p !== null) {
        const b = p.array;
        _ = p.version;
        for (let v = 0, y = b.length; v < y; v += 3) {
          const A = b[v + 0],
            C = b[v + 1],
            I = b[v + 2];
          d.push(A, C, C, I, I, A);
        }
      } else {
        const b = g.array;
        _ = g.version;
        for (let v = 0, y = b.length / 3 - 1; v < y; v += 3) {
          const A = v + 0,
            C = v + 1,
            I = v + 2;
          d.push(A, C, C, I, I, A);
        }
      }
      const m = new (ql(d) ? Ql : Jl)(d, 1);
      m.version = _;
      const f = s.get(u);
      f && e.remove(f), s.set(u, m);
    }
    function h(u) {
      const d = s.get(u);
      if (d) {
        const p = u.index;
        p !== null && d.version < p.version && c(u);
      } else c(u);
      return s.get(u);
    }
    return { get: a, update: l, getWireframeAttribute: h };
  }
  function Ip(o, e, t, n) {
    const i = n.isWebGL2;
    let s;
    function r(d) {
      s = d;
    }
    let a, l;
    function c(d) {
      (a = d.type), (l = d.bytesPerElement);
    }
    function h(d, p) {
      o.drawElements(s, p, a, d * l), t.update(p, s, 1);
    }
    function u(d, p, g) {
      if (g === 0) return;
      let _, m;
      if (i) (_ = o), (m = "drawElementsInstanced");
      else if (
        ((_ = e.get("ANGLE_instanced_arrays")),
        (m = "drawElementsInstancedANGLE"),
        _ === null)
      ) {
        console.error(
          "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
        );
        return;
      }
      _[m](s, p, a, d * l, g), t.update(p, s, g);
    }
    (this.setMode = r),
      (this.setIndex = c),
      (this.render = h),
      (this.renderInstances = u);
  }
  function Lp(o) {
    const e = { geometries: 0, textures: 0 },
      t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    function n(s, r, a) {
      switch ((t.calls++, r)) {
        case 4:
          t.triangles += a * (s / 3);
          break;
        case 1:
          t.lines += a * (s / 2);
          break;
        case 3:
          t.lines += a * (s - 1);
          break;
        case 2:
          t.lines += a * s;
          break;
        case 0:
          t.points += a * s;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", r);
          break;
      }
    }
    function i() {
      t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
    }
    return {
      memory: e,
      render: t,
      programs: null,
      autoReset: !0,
      reset: i,
      update: n
    };
  }
  function Pp(o, e) {
    return o[0] - e[0];
  }
  function Dp(o, e) {
    return Math.abs(e[1]) - Math.abs(o[1]);
  }
  function Np(o, e, t) {
    const n = {},
      i = new Float32Array(8),
      s = new WeakMap(),
      r = new We(),
      a = [];
    for (let c = 0; c < 8; c++) a[c] = [c, 0];
    function l(c, h, u) {
      const d = c.morphTargetInfluences;
      if (e.isWebGL2 === !0) {
        const p =
            h.morphAttributes.position ||
            h.morphAttributes.normal ||
            h.morphAttributes.color,
          g = p !== void 0 ? p.length : 0;
        let _ = s.get(h);
        if (_ === void 0 || _.count !== g) {
          let O = function () {
            j.dispose(), s.delete(h), h.removeEventListener("dispose", O);
          };
          _ !== void 0 && _.texture.dispose();
          const b = h.morphAttributes.position !== void 0,
            v = h.morphAttributes.normal !== void 0,
            y = h.morphAttributes.color !== void 0,
            A = h.morphAttributes.position || [],
            C = h.morphAttributes.normal || [],
            I = h.morphAttributes.color || [];
          let D = 0;
          b === !0 && (D = 1), v === !0 && (D = 2), y === !0 && (D = 3);
          let S = h.attributes.position.count * D,
            E = 1;
          S > e.maxTextureSize &&
            ((E = Math.ceil(S / e.maxTextureSize)), (S = e.maxTextureSize));
          const W = new Float32Array(S * E * 4 * g),
            j = new Yl(W, S, E, g);
          (j.type = Sn), (j.needsUpdate = !0);
          const P = D * 4;
          for (let F = 0; F < g; F++) {
            const Q = A[F],
              $ = C[F],
              X = I[F],
              Y = S * E * 4 * F;
            for (let ee = 0; ee < Q.count; ee++) {
              const ge = ee * P;
              b === !0 &&
                (r.fromBufferAttribute(Q, ee),
                (W[Y + ge + 0] = r.x),
                (W[Y + ge + 1] = r.y),
                (W[Y + ge + 2] = r.z),
                (W[Y + ge + 3] = 0)),
                v === !0 &&
                  (r.fromBufferAttribute($, ee),
                  (W[Y + ge + 4] = r.x),
                  (W[Y + ge + 5] = r.y),
                  (W[Y + ge + 6] = r.z),
                  (W[Y + ge + 7] = 0)),
                y === !0 &&
                  (r.fromBufferAttribute(X, ee),
                  (W[Y + ge + 8] = r.x),
                  (W[Y + ge + 9] = r.y),
                  (W[Y + ge + 10] = r.z),
                  (W[Y + ge + 11] = X.itemSize === 4 ? r.w : 1));
            }
          }
          (_ = { count: g, texture: j, size: new De(S, E) }),
            s.set(h, _),
            h.addEventListener("dispose", O);
        }
        let m = 0;
        for (let b = 0; b < d.length; b++) m += d[b];
        const f = h.morphTargetsRelative ? 1 : 1 - m;
        u.getUniforms().setValue(o, "morphTargetBaseInfluence", f),
          u.getUniforms().setValue(o, "morphTargetInfluences", d),
          u.getUniforms().setValue(o, "morphTargetsTexture", _.texture, t),
          u.getUniforms().setValue(o, "morphTargetsTextureSize", _.size);
      } else {
        const p = d === void 0 ? 0 : d.length;
        let g = n[h.id];
        if (g === void 0 || g.length !== p) {
          g = [];
          for (let v = 0; v < p; v++) g[v] = [v, 0];
          n[h.id] = g;
        }
        for (let v = 0; v < p; v++) {
          const y = g[v];
          (y[0] = v), (y[1] = d[v]);
        }
        g.sort(Dp);
        for (let v = 0; v < 8; v++)
          v < p && g[v][1]
            ? ((a[v][0] = g[v][0]), (a[v][1] = g[v][1]))
            : ((a[v][0] = Number.MAX_SAFE_INTEGER), (a[v][1] = 0));
        a.sort(Pp);
        const _ = h.morphAttributes.position,
          m = h.morphAttributes.normal;
        let f = 0;
        for (let v = 0; v < 8; v++) {
          const y = a[v],
            A = y[0],
            C = y[1];
          A !== Number.MAX_SAFE_INTEGER && C
            ? (_ &&
                h.getAttribute("morphTarget" + v) !== _[A] &&
                h.setAttribute("morphTarget" + v, _[A]),
              m &&
                h.getAttribute("morphNormal" + v) !== m[A] &&
                h.setAttribute("morphNormal" + v, m[A]),
              (i[v] = C),
              (f += C))
            : (_ &&
                h.hasAttribute("morphTarget" + v) === !0 &&
                h.deleteAttribute("morphTarget" + v),
              m &&
                h.hasAttribute("morphNormal" + v) === !0 &&
                h.deleteAttribute("morphNormal" + v),
              (i[v] = 0));
        }
        const b = h.morphTargetsRelative ? 1 : 1 - f;
        u.getUniforms().setValue(o, "morphTargetBaseInfluence", b),
          u.getUniforms().setValue(o, "morphTargetInfluences", i);
      }
    }
    return { update: l };
  }
  function Op(o, e, t, n) {
    let i = new WeakMap();
    function s(l) {
      const c = n.render.frame,
        h = l.geometry,
        u = e.get(l, h);
      return (
        i.get(u) !== c && (e.update(u), i.set(u, c)),
        l.isInstancedMesh &&
          (l.hasEventListener("dispose", a) === !1 &&
            l.addEventListener("dispose", a),
          t.update(l.instanceMatrix, 34962),
          l.instanceColor !== null && t.update(l.instanceColor, 34962)),
        u
      );
    }
    function r() {
      i = new WeakMap();
    }
    function a(l) {
      const c = l.target;
      c.removeEventListener("dispose", a),
        t.remove(c.instanceMatrix),
        c.instanceColor !== null && t.remove(c.instanceColor);
    }
    return { update: s, dispose: r };
  }
  const rc = new lt(),
    ac = new Yl(),
    oc = new bu(),
    lc = new ic(),
    Wo = [],
    Xo = [],
    qo = new Float32Array(16),
    jo = new Float32Array(9),
    Ko = new Float32Array(4);
  function Ti(o, e, t) {
    const n = o[0];
    if (n <= 0 || n > 0) return o;
    const i = e * t;
    let s = Wo[i];
    if ((s === void 0 && ((s = new Float32Array(i)), (Wo[i] = s)), e !== 0)) {
      n.toArray(s, 0);
      for (let r = 1, a = 0; r !== e; ++r) (a += t), o[r].toArray(s, a);
    }
    return s;
  }
  function et(o, e) {
    if (o.length !== e.length) return !1;
    for (let t = 0, n = o.length; t < n; t++) if (o[t] !== e[t]) return !1;
    return !0;
  }
  function tt(o, e) {
    for (let t = 0, n = e.length; t < n; t++) o[t] = e[t];
  }
  function Ps(o, e) {
    let t = Xo[e];
    t === void 0 && ((t = new Int32Array(e)), (Xo[e] = t));
    for (let n = 0; n !== e; ++n) t[n] = o.allocateTextureUnit();
    return t;
  }
  function Up(o, e) {
    const t = this.cache;
    t[0] !== e && (o.uniform1f(this.addr, e), (t[0] = e));
  }
  function Fp(o, e) {
    const t = this.cache;
    if (e.x !== void 0)
      (t[0] !== e.x || t[1] !== e.y) &&
        (o.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
    else {
      if (et(t, e)) return;
      o.uniform2fv(this.addr, e), tt(t, e);
    }
  }
  function Bp(o, e) {
    const t = this.cache;
    if (e.x !== void 0)
      (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
        (o.uniform3f(this.addr, e.x, e.y, e.z),
        (t[0] = e.x),
        (t[1] = e.y),
        (t[2] = e.z));
    else if (e.r !== void 0)
      (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
        (o.uniform3f(this.addr, e.r, e.g, e.b),
        (t[0] = e.r),
        (t[1] = e.g),
        (t[2] = e.b));
    else {
      if (et(t, e)) return;
      o.uniform3fv(this.addr, e), tt(t, e);
    }
  }
  function zp(o, e) {
    const t = this.cache;
    if (e.x !== void 0)
      (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
        (o.uniform4f(this.addr, e.x, e.y, e.z, e.w),
        (t[0] = e.x),
        (t[1] = e.y),
        (t[2] = e.z),
        (t[3] = e.w));
    else {
      if (et(t, e)) return;
      o.uniform4fv(this.addr, e), tt(t, e);
    }
  }
  function kp(o, e) {
    const t = this.cache,
      n = e.elements;
    if (n === void 0) {
      if (et(t, e)) return;
      o.uniformMatrix2fv(this.addr, !1, e), tt(t, e);
    } else {
      if (et(t, n)) return;
      Ko.set(n), o.uniformMatrix2fv(this.addr, !1, Ko), tt(t, n);
    }
  }
  function Vp(o, e) {
    const t = this.cache,
      n = e.elements;
    if (n === void 0) {
      if (et(t, e)) return;
      o.uniformMatrix3fv(this.addr, !1, e), tt(t, e);
    } else {
      if (et(t, n)) return;
      jo.set(n), o.uniformMatrix3fv(this.addr, !1, jo), tt(t, n);
    }
  }
  function Gp(o, e) {
    const t = this.cache,
      n = e.elements;
    if (n === void 0) {
      if (et(t, e)) return;
      o.uniformMatrix4fv(this.addr, !1, e), tt(t, e);
    } else {
      if (et(t, n)) return;
      qo.set(n), o.uniformMatrix4fv(this.addr, !1, qo), tt(t, n);
    }
  }
  function Hp(o, e) {
    const t = this.cache;
    t[0] !== e && (o.uniform1i(this.addr, e), (t[0] = e));
  }
  function Wp(o, e) {
    const t = this.cache;
    if (e.x !== void 0)
      (t[0] !== e.x || t[1] !== e.y) &&
        (o.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
    else {
      if (et(t, e)) return;
      o.uniform2iv(this.addr, e), tt(t, e);
    }
  }
  function Xp(o, e) {
    const t = this.cache;
    if (e.x !== void 0)
      (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
        (o.uniform3i(this.addr, e.x, e.y, e.z),
        (t[0] = e.x),
        (t[1] = e.y),
        (t[2] = e.z));
    else {
      if (et(t, e)) return;
      o.uniform3iv(this.addr, e), tt(t, e);
    }
  }
  function qp(o, e) {
    const t = this.cache;
    if (e.x !== void 0)
      (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
        (o.uniform4i(this.addr, e.x, e.y, e.z, e.w),
        (t[0] = e.x),
        (t[1] = e.y),
        (t[2] = e.z),
        (t[3] = e.w));
    else {
      if (et(t, e)) return;
      o.uniform4iv(this.addr, e), tt(t, e);
    }
  }
  function jp(o, e) {
    const t = this.cache;
    t[0] !== e && (o.uniform1ui(this.addr, e), (t[0] = e));
  }
  function Kp(o, e) {
    const t = this.cache;
    if (e.x !== void 0)
      (t[0] !== e.x || t[1] !== e.y) &&
        (o.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
    else {
      if (et(t, e)) return;
      o.uniform2uiv(this.addr, e), tt(t, e);
    }
  }
  function Yp(o, e) {
    const t = this.cache;
    if (e.x !== void 0)
      (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
        (o.uniform3ui(this.addr, e.x, e.y, e.z),
        (t[0] = e.x),
        (t[1] = e.y),
        (t[2] = e.z));
    else {
      if (et(t, e)) return;
      o.uniform3uiv(this.addr, e), tt(t, e);
    }
  }
  function Zp(o, e) {
    const t = this.cache;
    if (e.x !== void 0)
      (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
        (o.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
        (t[0] = e.x),
        (t[1] = e.y),
        (t[2] = e.z),
        (t[3] = e.w));
    else {
      if (et(t, e)) return;
      o.uniform4uiv(this.addr, e), tt(t, e);
    }
  }
  function $p(o, e, t) {
    const n = this.cache,
      i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
      t.setTexture2D(e || rc, i);
  }
  function Jp(o, e, t) {
    const n = this.cache,
      i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
      t.setTexture3D(e || oc, i);
  }
  function Qp(o, e, t) {
    const n = this.cache,
      i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
      t.setTextureCube(e || lc, i);
  }
  function em(o, e, t) {
    const n = this.cache,
      i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
      t.setTexture2DArray(e || ac, i);
  }
  function tm(o) {
    switch (o) {
      case 5126:
        return Up;
      case 35664:
        return Fp;
      case 35665:
        return Bp;
      case 35666:
        return zp;
      case 35674:
        return kp;
      case 35675:
        return Vp;
      case 35676:
        return Gp;
      case 5124:
      case 35670:
        return Hp;
      case 35667:
      case 35671:
        return Wp;
      case 35668:
      case 35672:
        return Xp;
      case 35669:
      case 35673:
        return qp;
      case 5125:
        return jp;
      case 36294:
        return Kp;
      case 36295:
        return Yp;
      case 36296:
        return Zp;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return $p;
      case 35679:
      case 36299:
      case 36307:
        return Jp;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return Qp;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return em;
    }
  }
  function nm(o, e) {
    o.uniform1fv(this.addr, e);
  }
  function im(o, e) {
    const t = Ti(e, this.size, 2);
    o.uniform2fv(this.addr, t);
  }
  function sm(o, e) {
    const t = Ti(e, this.size, 3);
    o.uniform3fv(this.addr, t);
  }
  function rm(o, e) {
    const t = Ti(e, this.size, 4);
    o.uniform4fv(this.addr, t);
  }
  function am(o, e) {
    const t = Ti(e, this.size, 4);
    o.uniformMatrix2fv(this.addr, !1, t);
  }
  function om(o, e) {
    const t = Ti(e, this.size, 9);
    o.uniformMatrix3fv(this.addr, !1, t);
  }
  function lm(o, e) {
    const t = Ti(e, this.size, 16);
    o.uniformMatrix4fv(this.addr, !1, t);
  }
  function cm(o, e) {
    o.uniform1iv(this.addr, e);
  }
  function hm(o, e) {
    o.uniform2iv(this.addr, e);
  }
  function um(o, e) {
    o.uniform3iv(this.addr, e);
  }
  function dm(o, e) {
    o.uniform4iv(this.addr, e);
  }
  function fm(o, e) {
    o.uniform1uiv(this.addr, e);
  }
  function pm(o, e) {
    o.uniform2uiv(this.addr, e);
  }
  function mm(o, e) {
    o.uniform3uiv(this.addr, e);
  }
  function gm(o, e) {
    o.uniform4uiv(this.addr, e);
  }
  function _m(o, e, t) {
    const n = this.cache,
      i = e.length,
      s = Ps(t, i);
    et(n, s) || (o.uniform1iv(this.addr, s), tt(n, s));
    for (let r = 0; r !== i; ++r) t.setTexture2D(e[r] || rc, s[r]);
  }
  function xm(o, e, t) {
    const n = this.cache,
      i = e.length,
      s = Ps(t, i);
    et(n, s) || (o.uniform1iv(this.addr, s), tt(n, s));
    for (let r = 0; r !== i; ++r) t.setTexture3D(e[r] || oc, s[r]);
  }
  function vm(o, e, t) {
    const n = this.cache,
      i = e.length,
      s = Ps(t, i);
    et(n, s) || (o.uniform1iv(this.addr, s), tt(n, s));
    for (let r = 0; r !== i; ++r) t.setTextureCube(e[r] || lc, s[r]);
  }
  function Sm(o, e, t) {
    const n = this.cache,
      i = e.length,
      s = Ps(t, i);
    et(n, s) || (o.uniform1iv(this.addr, s), tt(n, s));
    for (let r = 0; r !== i; ++r) t.setTexture2DArray(e[r] || ac, s[r]);
  }
  function Mm(o) {
    switch (o) {
      case 5126:
        return nm;
      case 35664:
        return im;
      case 35665:
        return sm;
      case 35666:
        return rm;
      case 35674:
        return am;
      case 35675:
        return om;
      case 35676:
        return lm;
      case 5124:
      case 35670:
        return cm;
      case 35667:
      case 35671:
        return hm;
      case 35668:
      case 35672:
        return um;
      case 35669:
      case 35673:
        return dm;
      case 5125:
        return fm;
      case 36294:
        return pm;
      case 36295:
        return mm;
      case 36296:
        return gm;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return _m;
      case 35679:
      case 36299:
      case 36307:
        return xm;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return vm;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return Sm;
    }
  }
  class ym {
    constructor(e, t, n) {
      (this.id = e),
        (this.addr = n),
        (this.cache = []),
        (this.setValue = tm(t.type));
    }
  }
  class Tm {
    constructor(e, t, n) {
      (this.id = e),
        (this.addr = n),
        (this.cache = []),
        (this.size = t.size),
        (this.setValue = Mm(t.type));
    }
  }
  class bm {
    constructor(e) {
      (this.id = e), (this.seq = []), (this.map = {});
    }
    setValue(e, t, n) {
      const i = this.seq;
      for (let s = 0, r = i.length; s !== r; ++s) {
        const a = i[s];
        a.setValue(e, t[a.id], n);
      }
    }
  }
  const Tr = /(\w+)(\])?(\[|\.)?/g;
  function Yo(o, e) {
    o.seq.push(e), (o.map[e.id] = e);
  }
  function Am(o, e, t) {
    const n = o.name,
      i = n.length;
    for (Tr.lastIndex = 0; ; ) {
      const s = Tr.exec(n),
        r = Tr.lastIndex;
      let a = s[1];
      const l = s[2] === "]",
        c = s[3];
      if ((l && (a = a | 0), c === void 0 || (c === "[" && r + 2 === i))) {
        Yo(t, c === void 0 ? new ym(a, o, e) : new Tm(a, o, e));
        break;
      } else {
        let u = t.map[a];
        u === void 0 && ((u = new bm(a)), Yo(t, u)), (t = u);
      }
    }
  }
  class As {
    constructor(e, t) {
      (this.seq = []), (this.map = {});
      const n = e.getProgramParameter(t, 35718);
      for (let i = 0; i < n; ++i) {
        const s = e.getActiveUniform(t, i),
          r = e.getUniformLocation(t, s.name);
        Am(s, r, this);
      }
    }
    setValue(e, t, n, i) {
      const s = this.map[t];
      s !== void 0 && s.setValue(e, n, i);
    }
    setOptional(e, t, n) {
      const i = t[n];
      i !== void 0 && this.setValue(e, n, i);
    }
    static upload(e, t, n, i) {
      for (let s = 0, r = t.length; s !== r; ++s) {
        const a = t[s],
          l = n[a.id];
        l.needsUpdate !== !1 && a.setValue(e, l.value, i);
      }
    }
    static seqWithValue(e, t) {
      const n = [];
      for (let i = 0, s = e.length; i !== s; ++i) {
        const r = e[i];
        r.id in t && n.push(r);
      }
      return n;
    }
  }
  function Zo(o, e, t) {
    const n = o.createShader(e);
    return o.shaderSource(n, t), o.compileShader(n), n;
  }
  let Em = 0;
  function wm(o, e) {
    const t = o.split(`
  `),
      n = [],
      i = Math.max(e - 6, 0),
      s = Math.min(e + 6, t.length);
    for (let r = i; r < s; r++) {
      const a = r + 1;
      n.push(`${a === e ? ">" : " "} ${a}: ${t[r]}`);
    }
    return n.join(`
  `);
  }
  function Cm(o) {
    switch (o) {
      case Fn:
        return ["Linear", "( value )"];
      case Fe:
        return ["sRGB", "( value )"];
      default:
        return (
          console.warn("THREE.WebGLProgram: Unsupported encoding:", o),
          ["Linear", "( value )"]
        );
    }
  }
  function $o(o, e, t) {
    const n = o.getShaderParameter(e, 35713),
      i = o.getShaderInfoLog(e).trim();
    if (n && i === "") return "";
    const s = /ERROR: 0:(\d+)/.exec(i);
    if (s) {
      const r = parseInt(s[1]);
      return (
        t.toUpperCase() +
        `
  
  ` +
        i +
        `
  
  ` +
        wm(o.getShaderSource(e), r)
      );
    } else return i;
  }
  function Rm(o, e) {
    const t = Cm(e);
    return "vec4 " + o + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
  }
  function Im(o, e) {
    let t;
    switch (e) {
      case Ch:
        t = "Linear";
        break;
      case Rh:
        t = "Reinhard";
        break;
      case Ih:
        t = "OptimizedCineon";
        break;
      case Lh:
        t = "ACESFilmic";
        break;
      case Ph:
        t = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
          (t = "Linear");
    }
    return (
      "vec3 " + o + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
    );
  }
  function Lm(o) {
    return [
      o.extensionDerivatives ||
      o.envMapCubeUVHeight ||
      o.bumpMap ||
      o.normalMapTangentSpace ||
      o.clearcoatNormalMap ||
      o.flatShading ||
      o.shaderID === "physical"
        ? "#extension GL_OES_standard_derivatives : enable"
        : "",
      (o.extensionFragDepth || o.logarithmicDepthBuffer) &&
      o.rendererExtensionFragDepth
        ? "#extension GL_EXT_frag_depth : enable"
        : "",
      o.extensionDrawBuffers && o.rendererExtensionDrawBuffers
        ? "#extension GL_EXT_draw_buffers : require"
        : "",
      (o.extensionShaderTextureLOD || o.envMap || o.transmission) &&
      o.rendererExtensionShaderTextureLod
        ? "#extension GL_EXT_shader_texture_lod : enable"
        : ""
    ].filter(Bi).join(`
  `);
  }
  function Pm(o) {
    const e = [];
    for (const t in o) {
      const n = o[t];
      n !== !1 && e.push("#define " + t + " " + n);
    }
    return e.join(`
  `);
  }
  function Dm(o, e) {
    const t = {},
      n = o.getProgramParameter(e, 35721);
    for (let i = 0; i < n; i++) {
      const s = o.getActiveAttrib(e, i),
        r = s.name;
      let a = 1;
      s.type === 35674 && (a = 2),
        s.type === 35675 && (a = 3),
        s.type === 35676 && (a = 4),
        (t[r] = {
          type: s.type,
          location: o.getAttribLocation(e, r),
          locationSize: a
        });
    }
    return t;
  }
  function Bi(o) {
    return o !== "";
  }
  function Jo(o, e) {
    const t =
      e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return o
      .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
      .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
      .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
      .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
      .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
      .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
      .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
      .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
      .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
      .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
      .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }
  function Qo(o, e) {
    return o
      .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
      .replace(
        /UNION_CLIPPING_PLANES/g,
        e.numClippingPlanes - e.numClipIntersection
      );
  }
  const Nm = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function kr(o) {
    return o.replace(Nm, Om);
  }
  function Om(o, e) {
    const t = Ee[e];
    if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
    return kr(t);
  }
  const Um =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function el(o) {
    return o.replace(Um, Fm);
  }
  function Fm(o, e, t, n) {
    let i = "";
    for (let s = parseInt(e); s < parseInt(t); s++)
      i += n
        .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
        .replace(/UNROLLED_LOOP_INDEX/g, s);
    return i;
  }
  function tl(o) {
    let e =
      "precision " +
      o.precision +
      ` float;
  precision ` +
      o.precision +
      " int;";
    return (
      o.precision === "highp"
        ? (e += `
  #define HIGH_PRECISION`)
        : o.precision === "mediump"
        ? (e += `
  #define MEDIUM_PRECISION`)
        : o.precision === "lowp" &&
          (e += `
  #define LOW_PRECISION`),
      e
    );
  }
  function Bm(o) {
    let e = "SHADOWMAP_TYPE_BASIC";
    return (
      o.shadowMapType === Nl
        ? (e = "SHADOWMAP_TYPE_PCF")
        : o.shadowMapType === ah
        ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
        : o.shadowMapType === Fi && (e = "SHADOWMAP_TYPE_VSM"),
      e
    );
  }
  function zm(o) {
    let e = "ENVMAP_TYPE_CUBE";
    if (o.envMap)
      switch (o.envMapMode) {
        case mi:
        case gi:
          e = "ENVMAP_TYPE_CUBE";
          break;
        case Is:
          e = "ENVMAP_TYPE_CUBE_UV";
          break;
      }
    return e;
  }
  function km(o) {
    let e = "ENVMAP_MODE_REFLECTION";
    if (o.envMap)
      switch (o.envMapMode) {
        case gi:
          e = "ENVMAP_MODE_REFRACTION";
          break;
      }
    return e;
  }
  function Vm(o) {
    let e = "ENVMAP_BLENDING_NONE";
    if (o.envMap)
      switch (o.combine) {
        case Fl:
          e = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case Eh:
          e = "ENVMAP_BLENDING_MIX";
          break;
        case wh:
          e = "ENVMAP_BLENDING_ADD";
          break;
      }
    return e;
  }
  function Gm(o) {
    const e = o.envMapCubeUVHeight;
    if (e === null) return null;
    const t = Math.log2(e) - 2,
      n = 1 / e;
    return {
      texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
      texelHeight: n,
      maxMip: t
    };
  }
  function Hm(o, e, t, n) {
    const i = o.getContext(),
      s = t.defines;
    let r = t.vertexShader,
      a = t.fragmentShader;
    const l = Bm(t),
      c = zm(t),
      h = km(t),
      u = Vm(t),
      d = Gm(t),
      p = t.isWebGL2 ? "" : Lm(t),
      g = Pm(s),
      _ = i.createProgram();
    let m,
      f,
      b = t.glslVersion
        ? "#version " +
          t.glslVersion +
          `
  `
        : "";
    t.isRawShaderMaterial
      ? ((m = [g].filter(Bi).join(`
  `)),
        m.length > 0 &&
          (m += `
  `),
        (f = [p, g].filter(Bi).join(`
  `)),
        f.length > 0 &&
          (f += `
  `))
      : ((m = [
          tl(t),
          "#define SHADER_NAME " + t.shaderName,
          g,
          t.instancing ? "#define USE_INSTANCING" : "",
          t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
          t.useFog && t.fog ? "#define USE_FOG" : "",
          t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
          t.map ? "#define USE_MAP" : "",
          t.envMap ? "#define USE_ENVMAP" : "",
          t.envMap ? "#define " + h : "",
          t.lightMap ? "#define USE_LIGHTMAP" : "",
          t.aoMap ? "#define USE_AOMAP" : "",
          t.bumpMap ? "#define USE_BUMPMAP" : "",
          t.normalMap ? "#define USE_NORMALMAP" : "",
          t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
          t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
          t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
          t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
          t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
          t.specularMap ? "#define USE_SPECULARMAP" : "",
          t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
          t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
          t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          t.metalnessMap ? "#define USE_METALNESSMAP" : "",
          t.alphaMap ? "#define USE_ALPHAMAP" : "",
          t.transmission ? "#define USE_TRANSMISSION" : "",
          t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
          t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
          t.mapUv ? "#define MAP_UV " + t.mapUv : "",
          t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
          t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
          t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
          t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
          t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
          t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
          t.displacementMapUv
            ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
            : "",
          t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
          t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
          t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
          t.clearcoatNormalMapUv
            ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
            : "",
          t.clearcoatRoughnessMapUv
            ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
            : "",
          t.iridescenceMapUv
            ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
            : "",
          t.iridescenceThicknessMapUv
            ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
            : "",
          t.sheenColorMapUv
            ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
            : "",
          t.sheenRoughnessMapUv
            ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
            : "",
          t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
          t.specularColorMapUv
            ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
            : "",
          t.specularIntensityMapUv
            ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
            : "",
          t.transmissionMapUv
            ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
            : "",
          t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
          t.vertexTangents ? "#define USE_TANGENT" : "",
          t.vertexColors ? "#define USE_COLOR" : "",
          t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          t.vertexUvs2 ? "#define USE_UV2" : "",
          t.pointsUvs ? "#define USE_POINTS_UV" : "",
          t.flatShading ? "#define FLAT_SHADED" : "",
          t.skinning ? "#define USE_SKINNING" : "",
          t.morphTargets ? "#define USE_MORPHTARGETS" : "",
          t.morphNormals && t.flatShading === !1
            ? "#define USE_MORPHNORMALS"
            : "",
          t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
          t.morphTargetsCount > 0 && t.isWebGL2
            ? "#define MORPHTARGETS_TEXTURE"
            : "",
          t.morphTargetsCount > 0 && t.isWebGL2
            ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
            : "",
          t.morphTargetsCount > 0 && t.isWebGL2
            ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
            : "",
          t.doubleSided ? "#define DOUBLE_SIDED" : "",
          t.flipSided ? "#define FLIP_SIDED" : "",
          t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          t.shadowMapEnabled ? "#define " + l : "",
          t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
          t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          "uniform mat4 modelMatrix;",
          "uniform mat4 modelViewMatrix;",
          "uniform mat4 projectionMatrix;",
          "uniform mat4 viewMatrix;",
          "uniform mat3 normalMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          "#ifdef USE_INSTANCING",
          "	attribute mat4 instanceMatrix;",
          "#endif",
          "#ifdef USE_INSTANCING_COLOR",
          "	attribute vec3 instanceColor;",
          "#endif",
          "attribute vec3 position;",
          "attribute vec3 normal;",
          "attribute vec2 uv;",
          "#ifdef USE_TANGENT",
          "	attribute vec4 tangent;",
          "#endif",
          "#if defined( USE_COLOR_ALPHA )",
          "	attribute vec4 color;",
          "#elif defined( USE_COLOR )",
          "	attribute vec3 color;",
          "#endif",
          "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
          "	attribute vec3 morphTarget0;",
          "	attribute vec3 morphTarget1;",
          "	attribute vec3 morphTarget2;",
          "	attribute vec3 morphTarget3;",
          "	#ifdef USE_MORPHNORMALS",
          "		attribute vec3 morphNormal0;",
          "		attribute vec3 morphNormal1;",
          "		attribute vec3 morphNormal2;",
          "		attribute vec3 morphNormal3;",
          "	#else",
          "		attribute vec3 morphTarget4;",
          "		attribute vec3 morphTarget5;",
          "		attribute vec3 morphTarget6;",
          "		attribute vec3 morphTarget7;",
          "	#endif",
          "#endif",
          "#ifdef USE_SKINNING",
          "	attribute vec4 skinIndex;",
          "	attribute vec4 skinWeight;",
          "#endif",
          `
  `
        ].filter(Bi).join(`
  `)),
        (f = [
          p,
          tl(t),
          "#define SHADER_NAME " + t.shaderName,
          g,
          t.useFog && t.fog ? "#define USE_FOG" : "",
          t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
          t.map ? "#define USE_MAP" : "",
          t.matcap ? "#define USE_MATCAP" : "",
          t.envMap ? "#define USE_ENVMAP" : "",
          t.envMap ? "#define " + c : "",
          t.envMap ? "#define " + h : "",
          t.envMap ? "#define " + u : "",
          d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
          d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
          d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
          t.lightMap ? "#define USE_LIGHTMAP" : "",
          t.aoMap ? "#define USE_AOMAP" : "",
          t.bumpMap ? "#define USE_BUMPMAP" : "",
          t.normalMap ? "#define USE_NORMALMAP" : "",
          t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
          t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
          t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          t.clearcoat ? "#define USE_CLEARCOAT" : "",
          t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          t.iridescence ? "#define USE_IRIDESCENCE" : "",
          t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
          t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
          t.specularMap ? "#define USE_SPECULARMAP" : "",
          t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
          t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
          t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          t.metalnessMap ? "#define USE_METALNESSMAP" : "",
          t.alphaMap ? "#define USE_ALPHAMAP" : "",
          t.alphaTest ? "#define USE_ALPHATEST" : "",
          t.sheen ? "#define USE_SHEEN" : "",
          t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
          t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
          t.transmission ? "#define USE_TRANSMISSION" : "",
          t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
          t.vertexTangents ? "#define USE_TANGENT" : "",
          t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
          t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          t.vertexUvs2 ? "#define USE_UV2" : "",
          t.pointsUvs ? "#define USE_POINTS_UV" : "",
          t.gradientMap ? "#define USE_GRADIENTMAP" : "",
          t.flatShading ? "#define FLAT_SHADED" : "",
          t.doubleSided ? "#define DOUBLE_SIDED" : "",
          t.flipSided ? "#define FLIP_SIDED" : "",
          t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          t.shadowMapEnabled ? "#define " + l : "",
          t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
          t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
          t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          "uniform mat4 viewMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          t.toneMapping !== on ? "#define TONE_MAPPING" : "",
          t.toneMapping !== on ? Ee.tonemapping_pars_fragment : "",
          t.toneMapping !== on ? Im("toneMapping", t.toneMapping) : "",
          t.dithering ? "#define DITHERING" : "",
          t.opaque ? "#define OPAQUE" : "",
          Ee.encodings_pars_fragment,
          Rm("linearToOutputTexel", t.outputEncoding),
          t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
          `
  `
        ].filter(Bi).join(`
  `))),
      (r = kr(r)),
      (r = Jo(r, t)),
      (r = Qo(r, t)),
      (a = kr(a)),
      (a = Jo(a, t)),
      (a = Qo(a, t)),
      (r = el(r)),
      (a = el(a)),
      t.isWebGL2 &&
        t.isRawShaderMaterial !== !0 &&
        ((b = `#version 300 es
  `),
        (m =
          [
            "precision mediump sampler2DArray;",
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture"
          ].join(`
  `) +
          `
  ` +
          m),
        (f =
          [
            "#define varying in",
            t.glslVersion === Mo
              ? ""
              : "layout(location = 0) out highp vec4 pc_fragColor;",
            t.glslVersion === Mo ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad"
          ].join(`
  `) +
          `
  ` +
          f));
    const v = b + m + r,
      y = b + f + a,
      A = Zo(i, 35633, v),
      C = Zo(i, 35632, y);
    if (
      (i.attachShader(_, A),
      i.attachShader(_, C),
      t.index0AttributeName !== void 0
        ? i.bindAttribLocation(_, 0, t.index0AttributeName)
        : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"),
      i.linkProgram(_),
      o.debug.checkShaderErrors)
    ) {
      const S = i.getProgramInfoLog(_).trim(),
        E = i.getShaderInfoLog(A).trim(),
        W = i.getShaderInfoLog(C).trim();
      let j = !0,
        P = !0;
      if (i.getProgramParameter(_, 35714) === !1) {
        if (((j = !1), typeof o.debug.onShaderError == "function"))
          o.debug.onShaderError(i, _, A, C);
        else {
          const O = $o(i, A, "vertex"),
            F = $o(i, C, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              i.getError() +
              " - VALIDATE_STATUS " +
              i.getProgramParameter(_, 35715) +
              `
  
  Program Info Log: ` +
              S +
              `
  ` +
              O +
              `
  ` +
              F
          );
        }
      } else
        S !== ""
          ? console.warn("THREE.WebGLProgram: Program Info Log:", S)
          : (E === "" || W === "") && (P = !1);
      P &&
        (this.diagnostics = {
          runnable: j,
          programLog: S,
          vertexShader: { log: E, prefix: m },
          fragmentShader: { log: W, prefix: f }
        });
    }
    i.deleteShader(A), i.deleteShader(C);
    let I;
    this.getUniforms = function () {
      return I === void 0 && (I = new As(i, _)), I;
    };
    let D;
    return (
      (this.getAttributes = function () {
        return D === void 0 && (D = Dm(i, _)), D;
      }),
      (this.destroy = function () {
        n.releaseStatesOfProgram(this),
          i.deleteProgram(_),
          (this.program = void 0);
      }),
      (this.name = t.shaderName),
      (this.id = Em++),
      (this.cacheKey = e),
      (this.usedTimes = 1),
      (this.program = _),
      (this.vertexShader = A),
      (this.fragmentShader = C),
      this
    );
  }
  let Wm = 0;
  class Xm {
    constructor() {
      (this.shaderCache = new Map()), (this.materialCache = new Map());
    }
    update(e) {
      const t = e.vertexShader,
        n = e.fragmentShader,
        i = this._getShaderStage(t),
        s = this._getShaderStage(n),
        r = this._getShaderCacheForMaterial(e);
      return (
        r.has(i) === !1 && (r.add(i), i.usedTimes++),
        r.has(s) === !1 && (r.add(s), s.usedTimes++),
        this
      );
    }
    remove(e) {
      const t = this.materialCache.get(e);
      for (const n of t)
        n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
      return this.materialCache.delete(e), this;
    }
    getVertexShaderID(e) {
      return this._getShaderStage(e.vertexShader).id;
    }
    getFragmentShaderID(e) {
      return this._getShaderStage(e.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(e) {
      const t = this.materialCache;
      let n = t.get(e);
      return n === void 0 && ((n = new Set()), t.set(e, n)), n;
    }
    _getShaderStage(e) {
      const t = this.shaderCache;
      let n = t.get(e);
      return n === void 0 && ((n = new qm(e)), t.set(e, n)), n;
    }
  }
  class qm {
    constructor(e) {
      (this.id = Wm++), (this.code = e), (this.usedTimes = 0);
    }
  }
  function jm(o, e, t, n, i, s, r) {
    const a = new Zl(),
      l = new Xm(),
      c = [],
      h = i.isWebGL2,
      u = i.logarithmicDepthBuffer,
      d = i.vertexTextures;
    let p = i.precision;
    const g = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite"
    };
    function _(S) {
      return S === 1 ? "uv2" : "uv";
    }
    function m(S, E, W, j, P) {
      const O = j.fog,
        F = P.geometry,
        Q = S.isMeshStandardMaterial ? j.environment : null,
        $ = (S.isMeshStandardMaterial ? t : e).get(S.envMap || Q),
        X = $ && $.mapping === Is ? $.image.height : null,
        Y = g[S.type];
      S.precision !== null &&
        ((p = i.getMaxPrecision(S.precision)),
        p !== S.precision &&
          console.warn(
            "THREE.WebGLProgram.getParameters:",
            S.precision,
            "not supported, using",
            p,
            "instead."
          ));
      const ee =
          F.morphAttributes.position ||
          F.morphAttributes.normal ||
          F.morphAttributes.color,
        ge = ee !== void 0 ? ee.length : 0;
      let ae = 0;
      F.morphAttributes.position !== void 0 && (ae = 1),
        F.morphAttributes.normal !== void 0 && (ae = 2),
        F.morphAttributes.color !== void 0 && (ae = 3);
      let V, q, ie, oe;
      if (Y) {
        const re = Xt[Y];
        (V = re.vertexShader), (q = re.fragmentShader);
      } else
        (V = S.vertexShader),
          (q = S.fragmentShader),
          l.update(S),
          (ie = l.getVertexShaderID(S)),
          (oe = l.getFragmentShaderID(S));
      const U = o.getRenderTarget(),
        be = P.isInstancedMesh === !0,
        Me = !!S.map,
        ne = !!S.matcap,
        xe = !!$,
        ze = !!S.aoMap,
        fe = !!S.lightMap,
        Ie = !!S.bumpMap,
        nt = !!S.normalMap,
        ct = !!S.displacementMap,
        it = !!S.emissiveMap,
        Qe = !!S.metalnessMap,
        ke = !!S.roughnessMap,
        Ke = S.clearcoat > 0,
        Mt = S.iridescence > 0,
        T = S.sheen > 0,
        x = S.transmission > 0,
        B = Ke && !!S.clearcoatMap,
        Z = Ke && !!S.clearcoatNormalMap,
        J = Ke && !!S.clearcoatRoughnessMap,
        se = Mt && !!S.iridescenceMap,
        ve = Mt && !!S.iridescenceThicknessMap,
        ce = T && !!S.sheenColorMap,
        G = T && !!S.sheenRoughnessMap,
        he = !!S.specularMap,
        pe = !!S.specularColorMap,
        _e = !!S.specularIntensityMap,
        le = x && !!S.transmissionMap,
        ue = x && !!S.thicknessMap,
        Ne = !!S.gradientMap,
        Ve = !!S.alphaMap,
        Ye = S.alphaTest > 0,
        w = !!S.extensions,
        k = !!F.attributes.uv2;
      return {
        isWebGL2: h,
        shaderID: Y,
        shaderName: S.type,
        vertexShader: V,
        fragmentShader: q,
        defines: S.defines,
        customVertexShaderID: ie,
        customFragmentShaderID: oe,
        isRawShaderMaterial: S.isRawShaderMaterial === !0,
        glslVersion: S.glslVersion,
        precision: p,
        instancing: be,
        instancingColor: be && P.instanceColor !== null,
        supportsVertexTextures: d,
        outputEncoding:
          U === null
            ? o.outputEncoding
            : U.isXRRenderTarget === !0
            ? U.texture.encoding
            : Fn,
        map: Me,
        matcap: ne,
        envMap: xe,
        envMapMode: xe && $.mapping,
        envMapCubeUVHeight: X,
        aoMap: ze,
        lightMap: fe,
        bumpMap: Ie,
        normalMap: nt,
        displacementMap: d && ct,
        emissiveMap: it,
        normalMapObjectSpace: nt && S.normalMapType === tu,
        normalMapTangentSpace: nt && S.normalMapType === Gl,
        decodeVideoTexture:
          Me && S.map.isVideoTexture === !0 && S.map.encoding === Fe,
        metalnessMap: Qe,
        roughnessMap: ke,
        clearcoat: Ke,
        clearcoatMap: B,
        clearcoatNormalMap: Z,
        clearcoatRoughnessMap: J,
        iridescence: Mt,
        iridescenceMap: se,
        iridescenceThicknessMap: ve,
        sheen: T,
        sheenColorMap: ce,
        sheenRoughnessMap: G,
        specularMap: he,
        specularColorMap: pe,
        specularIntensityMap: _e,
        transmission: x,
        transmissionMap: le,
        thicknessMap: ue,
        gradientMap: Ne,
        opaque: S.transparent === !1 && S.blending === ui,
        alphaMap: Ve,
        alphaTest: Ye,
        combine: S.combine,
        mapUv: Me && _(S.map.channel),
        aoMapUv: ze && _(S.aoMap.channel),
        lightMapUv: fe && _(S.lightMap.channel),
        bumpMapUv: Ie && _(S.bumpMap.channel),
        normalMapUv: nt && _(S.normalMap.channel),
        displacementMapUv: ct && _(S.displacementMap.channel),
        emissiveMapUv: it && _(S.emissiveMap.channel),
        metalnessMapUv: Qe && _(S.metalnessMap.channel),
        roughnessMapUv: ke && _(S.roughnessMap.channel),
        clearcoatMapUv: B && _(S.clearcoatMap.channel),
        clearcoatNormalMapUv: Z && _(S.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: J && _(S.clearcoatRoughnessMap.channel),
        iridescenceMapUv: se && _(S.iridescenceMap.channel),
        iridescenceThicknessMapUv: ve && _(S.iridescenceThicknessMap.channel),
        sheenColorMapUv: ce && _(S.sheenColorMap.channel),
        sheenRoughnessMapUv: G && _(S.sheenRoughnessMap.channel),
        specularMapUv: he && _(S.specularMap.channel),
        specularColorMapUv: pe && _(S.specularColorMap.channel),
        specularIntensityMapUv: _e && _(S.specularIntensityMap.channel),
        transmissionMapUv: le && _(S.transmissionMap.channel),
        thicknessMapUv: ue && _(S.thicknessMap.channel),
        alphaMapUv: Ve && _(S.alphaMap.channel),
        vertexTangents: nt && !!F.attributes.tangent,
        vertexColors: S.vertexColors,
        vertexAlphas:
          S.vertexColors === !0 &&
          !!F.attributes.color &&
          F.attributes.color.itemSize === 4,
        vertexUvs2: k,
        pointsUvs: P.isPoints === !0 && !!F.attributes.uv && (Me || Ve),
        fog: !!O,
        useFog: S.fog === !0,
        fogExp2: O && O.isFogExp2,
        flatShading: S.flatShading === !0,
        sizeAttenuation: S.sizeAttenuation === !0,
        logarithmicDepthBuffer: u,
        skinning: P.isSkinnedMesh === !0,
        morphTargets: F.morphAttributes.position !== void 0,
        morphNormals: F.morphAttributes.normal !== void 0,
        morphColors: F.morphAttributes.color !== void 0,
        morphTargetsCount: ge,
        morphTextureStride: ae,
        numDirLights: E.directional.length,
        numPointLights: E.point.length,
        numSpotLights: E.spot.length,
        numSpotLightMaps: E.spotLightMap.length,
        numRectAreaLights: E.rectArea.length,
        numHemiLights: E.hemi.length,
        numDirLightShadows: E.directionalShadowMap.length,
        numPointLightShadows: E.pointShadowMap.length,
        numSpotLightShadows: E.spotShadowMap.length,
        numSpotLightShadowsWithMaps: E.numSpotLightShadowsWithMaps,
        numClippingPlanes: r.numPlanes,
        numClipIntersection: r.numIntersection,
        dithering: S.dithering,
        shadowMapEnabled: o.shadowMap.enabled && W.length > 0,
        shadowMapType: o.shadowMap.type,
        toneMapping: S.toneMapped ? o.toneMapping : on,
        useLegacyLights: o.useLegacyLights,
        premultipliedAlpha: S.premultipliedAlpha,
        doubleSided: S.side === qt,
        flipSided: S.side === Tt,
        useDepthPacking: S.depthPacking >= 0,
        depthPacking: S.depthPacking || 0,
        index0AttributeName: S.index0AttributeName,
        extensionDerivatives: w && S.extensions.derivatives === !0,
        extensionFragDepth: w && S.extensions.fragDepth === !0,
        extensionDrawBuffers: w && S.extensions.drawBuffers === !0,
        extensionShaderTextureLOD: w && S.extensions.shaderTextureLOD === !0,
        rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
        rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
        rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
        customProgramCacheKey: S.customProgramCacheKey()
      };
    }
    function f(S) {
      const E = [];
      if (
        (S.shaderID
          ? E.push(S.shaderID)
          : (E.push(S.customVertexShaderID), E.push(S.customFragmentShaderID)),
        S.defines !== void 0)
      )
        for (const W in S.defines) E.push(W), E.push(S.defines[W]);
      return (
        S.isRawShaderMaterial === !1 &&
          (b(E, S), v(E, S), E.push(o.outputEncoding)),
        E.push(S.customProgramCacheKey),
        E.join()
      );
    }
    function b(S, E) {
      S.push(E.precision),
        S.push(E.outputEncoding),
        S.push(E.envMapMode),
        S.push(E.envMapCubeUVHeight),
        S.push(E.mapUv),
        S.push(E.alphaMapUv),
        S.push(E.lightMapUv),
        S.push(E.aoMapUv),
        S.push(E.bumpMapUv),
        S.push(E.normalMapUv),
        S.push(E.displacementMapUv),
        S.push(E.emissiveMapUv),
        S.push(E.metalnessMapUv),
        S.push(E.roughnessMapUv),
        S.push(E.clearcoatMapUv),
        S.push(E.clearcoatNormalMapUv),
        S.push(E.clearcoatRoughnessMapUv),
        S.push(E.iridescenceMapUv),
        S.push(E.iridescenceThicknessMapUv),
        S.push(E.sheenColorMapUv),
        S.push(E.sheenRoughnessMapUv),
        S.push(E.specularMapUv),
        S.push(E.specularColorMapUv),
        S.push(E.specularIntensityMapUv),
        S.push(E.transmissionMapUv),
        S.push(E.thicknessMapUv),
        S.push(E.combine),
        S.push(E.fogExp2),
        S.push(E.sizeAttenuation),
        S.push(E.morphTargetsCount),
        S.push(E.morphAttributeCount),
        S.push(E.numDirLights),
        S.push(E.numPointLights),
        S.push(E.numSpotLights),
        S.push(E.numSpotLightMaps),
        S.push(E.numHemiLights),
        S.push(E.numRectAreaLights),
        S.push(E.numDirLightShadows),
        S.push(E.numPointLightShadows),
        S.push(E.numSpotLightShadows),
        S.push(E.numSpotLightShadowsWithMaps),
        S.push(E.shadowMapType),
        S.push(E.toneMapping),
        S.push(E.numClippingPlanes),
        S.push(E.numClipIntersection),
        S.push(E.depthPacking);
    }
    function v(S, E) {
      a.disableAll(),
        E.isWebGL2 && a.enable(0),
        E.supportsVertexTextures && a.enable(1),
        E.instancing && a.enable(2),
        E.instancingColor && a.enable(3),
        E.matcap && a.enable(4),
        E.envMap && a.enable(5),
        E.normalMapObjectSpace && a.enable(6),
        E.normalMapTangentSpace && a.enable(7),
        E.clearcoat && a.enable(8),
        E.iridescence && a.enable(9),
        E.alphaTest && a.enable(10),
        E.vertexColors && a.enable(11),
        E.vertexAlphas && a.enable(12),
        E.vertexUvs2 && a.enable(13),
        E.vertexTangents && a.enable(14),
        S.push(a.mask),
        a.disableAll(),
        E.fog && a.enable(0),
        E.useFog && a.enable(1),
        E.flatShading && a.enable(2),
        E.logarithmicDepthBuffer && a.enable(3),
        E.skinning && a.enable(4),
        E.morphTargets && a.enable(5),
        E.morphNormals && a.enable(6),
        E.morphColors && a.enable(7),
        E.premultipliedAlpha && a.enable(8),
        E.shadowMapEnabled && a.enable(9),
        E.useLegacyLights && a.enable(10),
        E.doubleSided && a.enable(11),
        E.flipSided && a.enable(12),
        E.useDepthPacking && a.enable(13),
        E.dithering && a.enable(14),
        E.transmission && a.enable(15),
        E.sheen && a.enable(16),
        E.decodeVideoTexture && a.enable(17),
        E.opaque && a.enable(18),
        E.pointsUvs && a.enable(19),
        S.push(a.mask);
    }
    function y(S) {
      const E = g[S.type];
      let W;
      if (E) {
        const j = Xt[E];
        W = tc.clone(j.uniforms);
      } else W = S.uniforms;
      return W;
    }
    function A(S, E) {
      let W;
      for (let j = 0, P = c.length; j < P; j++) {
        const O = c[j];
        if (O.cacheKey === E) {
          (W = O), ++W.usedTimes;
          break;
        }
      }
      return W === void 0 && ((W = new Hm(o, E, S, s)), c.push(W)), W;
    }
    function C(S) {
      if (--S.usedTimes === 0) {
        const E = c.indexOf(S);
        (c[E] = c[c.length - 1]), c.pop(), S.destroy();
      }
    }
    function I(S) {
      l.remove(S);
    }
    function D() {
      l.dispose();
    }
    return {
      getParameters: m,
      getProgramCacheKey: f,
      getUniforms: y,
      acquireProgram: A,
      releaseProgram: C,
      releaseShaderCache: I,
      programs: c,
      dispose: D
    };
  }
  function Km() {
    let o = new WeakMap();
    function e(s) {
      let r = o.get(s);
      return r === void 0 && ((r = {}), o.set(s, r)), r;
    }
    function t(s) {
      o.delete(s);
    }
    function n(s, r, a) {
      o.get(s)[r] = a;
    }
    function i() {
      o = new WeakMap();
    }
    return { get: e, remove: t, update: n, dispose: i };
  }
  function Ym(o, e) {
    return o.groupOrder !== e.groupOrder
      ? o.groupOrder - e.groupOrder
      : o.renderOrder !== e.renderOrder
      ? o.renderOrder - e.renderOrder
      : o.material.id !== e.material.id
      ? o.material.id - e.material.id
      : o.z !== e.z
      ? o.z - e.z
      : o.id - e.id;
  }
  function nl(o, e) {
    return o.groupOrder !== e.groupOrder
      ? o.groupOrder - e.groupOrder
      : o.renderOrder !== e.renderOrder
      ? o.renderOrder - e.renderOrder
      : o.z !== e.z
      ? e.z - o.z
      : o.id - e.id;
  }
  function il() {
    const o = [];
    let e = 0;
    const t = [],
      n = [],
      i = [];
    function s() {
      (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
    }
    function r(u, d, p, g, _, m) {
      let f = o[e];
      return (
        f === void 0
          ? ((f = {
              id: u.id,
              object: u,
              geometry: d,
              material: p,
              groupOrder: g,
              renderOrder: u.renderOrder,
              z: _,
              group: m
            }),
            (o[e] = f))
          : ((f.id = u.id),
            (f.object = u),
            (f.geometry = d),
            (f.material = p),
            (f.groupOrder = g),
            (f.renderOrder = u.renderOrder),
            (f.z = _),
            (f.group = m)),
        e++,
        f
      );
    }
    function a(u, d, p, g, _, m) {
      const f = r(u, d, p, g, _, m);
      p.transmission > 0
        ? n.push(f)
        : p.transparent === !0
        ? i.push(f)
        : t.push(f);
    }
    function l(u, d, p, g, _, m) {
      const f = r(u, d, p, g, _, m);
      p.transmission > 0
        ? n.unshift(f)
        : p.transparent === !0
        ? i.unshift(f)
        : t.unshift(f);
    }
    function c(u, d) {
      t.length > 1 && t.sort(u || Ym),
        n.length > 1 && n.sort(d || nl),
        i.length > 1 && i.sort(d || nl);
    }
    function h() {
      for (let u = e, d = o.length; u < d; u++) {
        const p = o[u];
        if (p.id === null) break;
        (p.id = null),
          (p.object = null),
          (p.geometry = null),
          (p.material = null),
          (p.group = null);
      }
    }
    return {
      opaque: t,
      transmissive: n,
      transparent: i,
      init: s,
      push: a,
      unshift: l,
      finish: h,
      sort: c
    };
  }
  function Zm() {
    let o = new WeakMap();
    function e(n, i) {
      const s = o.get(n);
      let r;
      return (
        s === void 0
          ? ((r = new il()), o.set(n, [r]))
          : i >= s.length
          ? ((r = new il()), s.push(r))
          : (r = s[i]),
        r
      );
    }
    function t() {
      o = new WeakMap();
    }
    return { get: e, dispose: t };
  }
  function $m() {
    const o = {};
    return {
      get: function (e) {
        if (o[e.id] !== void 0) return o[e.id];
        let t;
        switch (e.type) {
          case "DirectionalLight":
            t = { direction: new R(), color: new ye() };
            break;
          case "SpotLight":
            t = {
              position: new R(),
              direction: new R(),
              color: new ye(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0
            };
            break;
          case "PointLight":
            t = { position: new R(), color: new ye(), distance: 0, decay: 0 };
            break;
          case "HemisphereLight":
            t = { direction: new R(), skyColor: new ye(), groundColor: new ye() };
            break;
          case "RectAreaLight":
            t = {
              color: new ye(),
              position: new R(),
              halfWidth: new R(),
              halfHeight: new R()
            };
            break;
        }
        return (o[e.id] = t), t;
      }
    };
  }
  function Jm() {
    const o = {};
    return {
      get: function (e) {
        if (o[e.id] !== void 0) return o[e.id];
        let t;
        switch (e.type) {
          case "DirectionalLight":
            t = {
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new De()
            };
            break;
          case "SpotLight":
            t = {
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new De()
            };
            break;
          case "PointLight":
            t = {
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new De(),
              shadowCameraNear: 1,
              shadowCameraFar: 1e3
            };
            break;
        }
        return (o[e.id] = t), t;
      }
    };
  }
  let Qm = 0;
  function eg(o, e) {
    return (
      (e.castShadow ? 2 : 0) -
      (o.castShadow ? 2 : 0) +
      (e.map ? 1 : 0) -
      (o.map ? 1 : 0)
    );
  }
  function tg(o, e) {
    const t = new $m(),
      n = Jm(),
      i = {
        version: 0,
        hash: {
          directionalLength: -1,
          pointLength: -1,
          spotLength: -1,
          rectAreaLength: -1,
          hemiLength: -1,
          numDirectionalShadows: -1,
          numPointShadows: -1,
          numSpotShadows: -1,
          numSpotMaps: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0
      };
    for (let h = 0; h < 9; h++) i.probe.push(new R());
    const s = new R(),
      r = new Re(),
      a = new Re();
    function l(h, u) {
      let d = 0,
        p = 0,
        g = 0;
      for (let W = 0; W < 9; W++) i.probe[W].set(0, 0, 0);
      let _ = 0,
        m = 0,
        f = 0,
        b = 0,
        v = 0,
        y = 0,
        A = 0,
        C = 0,
        I = 0,
        D = 0;
      h.sort(eg);
      const S = u === !0 ? Math.PI : 1;
      for (let W = 0, j = h.length; W < j; W++) {
        const P = h[W],
          O = P.color,
          F = P.intensity,
          Q = P.distance,
          $ = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
        if (P.isAmbientLight)
          (d += O.r * F * S), (p += O.g * F * S), (g += O.b * F * S);
        else if (P.isLightProbe)
          for (let X = 0; X < 9; X++)
            i.probe[X].addScaledVector(P.sh.coefficients[X], F);
        else if (P.isDirectionalLight) {
          const X = t.get(P);
          if (
            (X.color.copy(P.color).multiplyScalar(P.intensity * S), P.castShadow)
          ) {
            const Y = P.shadow,
              ee = n.get(P);
            (ee.shadowBias = Y.bias),
              (ee.shadowNormalBias = Y.normalBias),
              (ee.shadowRadius = Y.radius),
              (ee.shadowMapSize = Y.mapSize),
              (i.directionalShadow[_] = ee),
              (i.directionalShadowMap[_] = $),
              (i.directionalShadowMatrix[_] = P.shadow.matrix),
              y++;
          }
          (i.directional[_] = X), _++;
        } else if (P.isSpotLight) {
          const X = t.get(P);
          X.position.setFromMatrixPosition(P.matrixWorld),
            X.color.copy(O).multiplyScalar(F * S),
            (X.distance = Q),
            (X.coneCos = Math.cos(P.angle)),
            (X.penumbraCos = Math.cos(P.angle * (1 - P.penumbra))),
            (X.decay = P.decay),
            (i.spot[f] = X);
          const Y = P.shadow;
          if (
            (P.map &&
              ((i.spotLightMap[I] = P.map),
              I++,
              Y.updateMatrices(P),
              P.castShadow && D++),
            (i.spotLightMatrix[f] = Y.matrix),
            P.castShadow)
          ) {
            const ee = n.get(P);
            (ee.shadowBias = Y.bias),
              (ee.shadowNormalBias = Y.normalBias),
              (ee.shadowRadius = Y.radius),
              (ee.shadowMapSize = Y.mapSize),
              (i.spotShadow[f] = ee),
              (i.spotShadowMap[f] = $),
              C++;
          }
          f++;
        } else if (P.isRectAreaLight) {
          const X = t.get(P);
          X.color.copy(O).multiplyScalar(F),
            X.halfWidth.set(P.width * 0.5, 0, 0),
            X.halfHeight.set(0, P.height * 0.5, 0),
            (i.rectArea[b] = X),
            b++;
        } else if (P.isPointLight) {
          const X = t.get(P);
          if (
            (X.color.copy(P.color).multiplyScalar(P.intensity * S),
            (X.distance = P.distance),
            (X.decay = P.decay),
            P.castShadow)
          ) {
            const Y = P.shadow,
              ee = n.get(P);
            (ee.shadowBias = Y.bias),
              (ee.shadowNormalBias = Y.normalBias),
              (ee.shadowRadius = Y.radius),
              (ee.shadowMapSize = Y.mapSize),
              (ee.shadowCameraNear = Y.camera.near),
              (ee.shadowCameraFar = Y.camera.far),
              (i.pointShadow[m] = ee),
              (i.pointShadowMap[m] = $),
              (i.pointShadowMatrix[m] = P.shadow.matrix),
              A++;
          }
          (i.point[m] = X), m++;
        } else if (P.isHemisphereLight) {
          const X = t.get(P);
          X.skyColor.copy(P.color).multiplyScalar(F * S),
            X.groundColor.copy(P.groundColor).multiplyScalar(F * S),
            (i.hemi[v] = X),
            v++;
        }
      }
      b > 0 &&
        (e.isWebGL2 || o.has("OES_texture_float_linear") === !0
          ? ((i.rectAreaLTC1 = te.LTC_FLOAT_1), (i.rectAreaLTC2 = te.LTC_FLOAT_2))
          : o.has("OES_texture_half_float_linear") === !0
          ? ((i.rectAreaLTC1 = te.LTC_HALF_1), (i.rectAreaLTC2 = te.LTC_HALF_2))
          : console.error(
              "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
            )),
        (i.ambient[0] = d),
        (i.ambient[1] = p),
        (i.ambient[2] = g);
      const E = i.hash;
      (E.directionalLength !== _ ||
        E.pointLength !== m ||
        E.spotLength !== f ||
        E.rectAreaLength !== b ||
        E.hemiLength !== v ||
        E.numDirectionalShadows !== y ||
        E.numPointShadows !== A ||
        E.numSpotShadows !== C ||
        E.numSpotMaps !== I) &&
        ((i.directional.length = _),
        (i.spot.length = f),
        (i.rectArea.length = b),
        (i.point.length = m),
        (i.hemi.length = v),
        (i.directionalShadow.length = y),
        (i.directionalShadowMap.length = y),
        (i.pointShadow.length = A),
        (i.pointShadowMap.length = A),
        (i.spotShadow.length = C),
        (i.spotShadowMap.length = C),
        (i.directionalShadowMatrix.length = y),
        (i.pointShadowMatrix.length = A),
        (i.spotLightMatrix.length = C + I - D),
        (i.spotLightMap.length = I),
        (i.numSpotLightShadowsWithMaps = D),
        (E.directionalLength = _),
        (E.pointLength = m),
        (E.spotLength = f),
        (E.rectAreaLength = b),
        (E.hemiLength = v),
        (E.numDirectionalShadows = y),
        (E.numPointShadows = A),
        (E.numSpotShadows = C),
        (E.numSpotMaps = I),
        (i.version = Qm++));
    }
    function c(h, u) {
      let d = 0,
        p = 0,
        g = 0,
        _ = 0,
        m = 0;
      const f = u.matrixWorldInverse;
      for (let b = 0, v = h.length; b < v; b++) {
        const y = h[b];
        if (y.isDirectionalLight) {
          const A = i.directional[d];
          A.direction.setFromMatrixPosition(y.matrixWorld),
            s.setFromMatrixPosition(y.target.matrixWorld),
            A.direction.sub(s),
            A.direction.transformDirection(f),
            d++;
        } else if (y.isSpotLight) {
          const A = i.spot[g];
          A.position.setFromMatrixPosition(y.matrixWorld),
            A.position.applyMatrix4(f),
            A.direction.setFromMatrixPosition(y.matrixWorld),
            s.setFromMatrixPosition(y.target.matrixWorld),
            A.direction.sub(s),
            A.direction.transformDirection(f),
            g++;
        } else if (y.isRectAreaLight) {
          const A = i.rectArea[_];
          A.position.setFromMatrixPosition(y.matrixWorld),
            A.position.applyMatrix4(f),
            a.identity(),
            r.copy(y.matrixWorld),
            r.premultiply(f),
            a.extractRotation(r),
            A.halfWidth.set(y.width * 0.5, 0, 0),
            A.halfHeight.set(0, y.height * 0.5, 0),
            A.halfWidth.applyMatrix4(a),
            A.halfHeight.applyMatrix4(a),
            _++;
        } else if (y.isPointLight) {
          const A = i.point[p];
          A.position.setFromMatrixPosition(y.matrixWorld),
            A.position.applyMatrix4(f),
            p++;
        } else if (y.isHemisphereLight) {
          const A = i.hemi[m];
          A.direction.setFromMatrixPosition(y.matrixWorld),
            A.direction.transformDirection(f),
            m++;
        }
      }
    }
    return { setup: l, setupView: c, state: i };
  }
  function sl(o, e) {
    const t = new tg(o, e),
      n = [],
      i = [];
    function s() {
      (n.length = 0), (i.length = 0);
    }
    function r(u) {
      n.push(u);
    }
    function a(u) {
      i.push(u);
    }
    function l(u) {
      t.setup(n, u);
    }
    function c(u) {
      t.setupView(n, u);
    }
    return {
      init: s,
      state: { lightsArray: n, shadowsArray: i, lights: t },
      setupLights: l,
      setupLightsView: c,
      pushLight: r,
      pushShadow: a
    };
  }
  function ng(o, e) {
    let t = new WeakMap();
    function n(s, r = 0) {
      const a = t.get(s);
      let l;
      return (
        a === void 0
          ? ((l = new sl(o, e)), t.set(s, [l]))
          : r >= a.length
          ? ((l = new sl(o, e)), a.push(l))
          : (l = a[r]),
        l
      );
    }
    function i() {
      t = new WeakMap();
    }
    return { get: n, dispose: i };
  }
  class ig extends jt {
    constructor(e) {
      super(),
        (this.isMeshDepthMaterial = !0),
        (this.type = "MeshDepthMaterial"),
        (this.depthPacking = Qh),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.depthPacking = e.depthPacking),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        this
      );
    }
  }
  class sg extends jt {
    constructor(e) {
      super(),
        (this.isMeshDistanceMaterial = !0),
        (this.type = "MeshDistanceMaterial"),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        this
      );
    }
  }
  const rg = `void main() {
      gl_Position = vec4( position, 1.0 );
  }`,
    ag = `uniform sampler2D shadow_pass;
  uniform vec2 resolution;
  uniform float radius;
  #include <packing>
  void main() {
      const float samples = float( VSM_SAMPLES );
      float mean = 0.0;
      float squared_mean = 0.0;
      float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
      float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
      for ( float i = 0.0; i < samples; i ++ ) {
          float uvOffset = uvStart + i * uvStride;
          #ifdef HORIZONTAL_PASS
              vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
              mean += distribution.x;
              squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
          #else
              float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
              mean += depth;
              squared_mean += depth * depth;
          #endif
      }
      mean = mean / samples;
      squared_mean = squared_mean / samples;
      float std_dev = sqrt( squared_mean - mean * mean );
      gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
  }`;
  function og(o, e, t) {
    let n = new Zr();
    const i = new De(),
      s = new De(),
      r = new We(),
      a = new ig({ depthPacking: eu }),
      l = new sg(),
      c = {},
      h = t.maxTextureSize,
      u = { [Kt]: Tt, [Tt]: Kt, [qt]: qt },
      d = new Yt({
        defines: { VSM_SAMPLES: 8 },
        uniforms: {
          shadow_pass: { value: null },
          resolution: { value: new De() },
          radius: { value: 4 }
        },
        vertexShader: rg,
        fragmentShader: ag
      }),
      p = d.clone();
    p.defines.HORIZONTAL_PASS = 1;
    const g = new Rt();
    g.setAttribute(
      "position",
      new ut(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
    );
    const _ = new yt(g, d),
      m = this;
    (this.enabled = !1),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this.type = Nl),
      (this.render = function (y, A, C) {
        if (
          m.enabled === !1 ||
          (m.autoUpdate === !1 && m.needsUpdate === !1) ||
          y.length === 0
        )
          return;
        const I = o.getRenderTarget(),
          D = o.getActiveCubeFace(),
          S = o.getActiveMipmapLevel(),
          E = o.state;
        E.setBlending(Mn),
          E.buffers.color.setClear(1, 1, 1, 1),
          E.buffers.depth.setTest(!0),
          E.setScissorTest(!1);
        for (let W = 0, j = y.length; W < j; W++) {
          const P = y[W],
            O = P.shadow;
          if (O === void 0) {
            console.warn("THREE.WebGLShadowMap:", P, "has no shadow.");
            continue;
          }
          if (O.autoUpdate === !1 && O.needsUpdate === !1) continue;
          i.copy(O.mapSize);
          const F = O.getFrameExtents();
          if (
            (i.multiply(F),
            s.copy(O.mapSize),
            (i.x > h || i.y > h) &&
              (i.x > h &&
                ((s.x = Math.floor(h / F.x)),
                (i.x = s.x * F.x),
                (O.mapSize.x = s.x)),
              i.y > h &&
                ((s.y = Math.floor(h / F.y)),
                (i.y = s.y * F.y),
                (O.mapSize.y = s.y))),
            O.map === null)
          ) {
            const $ = this.type !== Fi ? { minFilter: at, magFilter: at } : {};
            (O.map = new cn(i.x, i.y, $)),
              (O.map.texture.name = P.name + ".shadowMap"),
              O.camera.updateProjectionMatrix();
          }
          o.setRenderTarget(O.map), o.clear();
          const Q = O.getViewportCount();
          for (let $ = 0; $ < Q; $++) {
            const X = O.getViewport($);
            r.set(s.x * X.x, s.y * X.y, s.x * X.z, s.y * X.w),
              E.viewport(r),
              O.updateMatrices(P, $),
              (n = O.getFrustum()),
              v(A, C, O.camera, P, this.type);
          }
          O.isPointLightShadow !== !0 && this.type === Fi && f(O, C),
            (O.needsUpdate = !1);
        }
        (m.needsUpdate = !1), o.setRenderTarget(I, D, S);
      });
    function f(y, A) {
      const C = e.update(_);
      d.defines.VSM_SAMPLES !== y.blurSamples &&
        ((d.defines.VSM_SAMPLES = y.blurSamples),
        (p.defines.VSM_SAMPLES = y.blurSamples),
        (d.needsUpdate = !0),
        (p.needsUpdate = !0)),
        y.mapPass === null && (y.mapPass = new cn(i.x, i.y)),
        (d.uniforms.shadow_pass.value = y.map.texture),
        (d.uniforms.resolution.value = y.mapSize),
        (d.uniforms.radius.value = y.radius),
        o.setRenderTarget(y.mapPass),
        o.clear(),
        o.renderBufferDirect(A, null, C, d, _, null),
        (p.uniforms.shadow_pass.value = y.mapPass.texture),
        (p.uniforms.resolution.value = y.mapSize),
        (p.uniforms.radius.value = y.radius),
        o.setRenderTarget(y.map),
        o.clear(),
        o.renderBufferDirect(A, null, C, p, _, null);
    }
    function b(y, A, C, I) {
      let D = null;
      const S =
        C.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
      if (S !== void 0) D = S;
      else if (
        ((D = C.isPointLight === !0 ? l : a),
        (o.localClippingEnabled &&
          A.clipShadows === !0 &&
          Array.isArray(A.clippingPlanes) &&
          A.clippingPlanes.length !== 0) ||
          (A.displacementMap && A.displacementScale !== 0) ||
          (A.alphaMap && A.alphaTest > 0) ||
          (A.map && A.alphaTest > 0))
      ) {
        const E = D.uuid,
          W = A.uuid;
        let j = c[E];
        j === void 0 && ((j = {}), (c[E] = j));
        let P = j[W];
        P === void 0 && ((P = D.clone()), (j[W] = P)), (D = P);
      }
      if (
        ((D.visible = A.visible),
        (D.wireframe = A.wireframe),
        I === Fi
          ? (D.side = A.shadowSide !== null ? A.shadowSide : A.side)
          : (D.side = A.shadowSide !== null ? A.shadowSide : u[A.side]),
        (D.alphaMap = A.alphaMap),
        (D.alphaTest = A.alphaTest),
        (D.map = A.map),
        (D.clipShadows = A.clipShadows),
        (D.clippingPlanes = A.clippingPlanes),
        (D.clipIntersection = A.clipIntersection),
        (D.displacementMap = A.displacementMap),
        (D.displacementScale = A.displacementScale),
        (D.displacementBias = A.displacementBias),
        (D.wireframeLinewidth = A.wireframeLinewidth),
        (D.linewidth = A.linewidth),
        C.isPointLight === !0 && D.isMeshDistanceMaterial === !0)
      ) {
        const E = o.properties.get(D);
        E.light = C;
      }
      return D;
    }
    function v(y, A, C, I, D) {
      if (y.visible === !1) return;
      if (
        y.layers.test(A.layers) &&
        (y.isMesh || y.isLine || y.isPoints) &&
        (y.castShadow || (y.receiveShadow && D === Fi)) &&
        (!y.frustumCulled || n.intersectsObject(y))
      ) {
        y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, y.matrixWorld);
        const W = e.update(y),
          j = y.material;
        if (Array.isArray(j)) {
          const P = W.groups;
          for (let O = 0, F = P.length; O < F; O++) {
            const Q = P[O],
              $ = j[Q.materialIndex];
            if ($ && $.visible) {
              const X = b(y, $, I, D);
              o.renderBufferDirect(C, null, W, X, y, Q);
            }
          }
        } else if (j.visible) {
          const P = b(y, j, I, D);
          o.renderBufferDirect(C, null, W, P, y, null);
        }
      }
      const E = y.children;
      for (let W = 0, j = E.length; W < j; W++) v(E[W], A, C, I, D);
    }
  }
  function lg(o, e, t) {
    const n = t.isWebGL2;
    function i() {
      let w = !1;
      const k = new We();
      let K = null;
      const re = new We(0, 0, 0, 0);
      return {
        setMask: function (de) {
          K !== de && !w && (o.colorMask(de, de, de, de), (K = de));
        },
        setLocked: function (de) {
          w = de;
        },
        setClear: function (de, Xe, je, dt, dn) {
          dn === !0 && ((de *= dt), (Xe *= dt), (je *= dt)),
            k.set(de, Xe, je, dt),
            re.equals(k) === !1 && (o.clearColor(de, Xe, je, dt), re.copy(k));
        },
        reset: function () {
          (w = !1), (K = null), re.set(-1, 0, 0, 0);
        }
      };
    }
    function s() {
      let w = !1,
        k = null,
        K = null,
        re = null;
      return {
        setTest: function (de) {
          de ? U(2929) : be(2929);
        },
        setMask: function (de) {
          k !== de && !w && (o.depthMask(de), (k = de));
        },
        setFunc: function (de) {
          if (K !== de) {
            switch (de) {
              case vh:
                o.depthFunc(512);
                break;
              case Sh:
                o.depthFunc(519);
                break;
              case Mh:
                o.depthFunc(513);
                break;
              case Pr:
                o.depthFunc(515);
                break;
              case yh:
                o.depthFunc(514);
                break;
              case Th:
                o.depthFunc(518);
                break;
              case bh:
                o.depthFunc(516);
                break;
              case Ah:
                o.depthFunc(517);
                break;
              default:
                o.depthFunc(515);
            }
            K = de;
          }
        },
        setLocked: function (de) {
          w = de;
        },
        setClear: function (de) {
          re !== de && (o.clearDepth(de), (re = de));
        },
        reset: function () {
          (w = !1), (k = null), (K = null), (re = null);
        }
      };
    }
    function r() {
      let w = !1,
        k = null,
        K = null,
        re = null,
        de = null,
        Xe = null,
        je = null,
        dt = null,
        dn = null;
      return {
        setTest: function (Ze) {
          w || (Ze ? U(2960) : be(2960));
        },
        setMask: function (Ze) {
          k !== Ze && !w && (o.stencilMask(Ze), (k = Ze));
        },
        setFunc: function (Ze, It, Ht) {
          (K !== Ze || re !== It || de !== Ht) &&
            (o.stencilFunc(Ze, It, Ht), (K = Ze), (re = It), (de = Ht));
        },
        setOp: function (Ze, It, Ht) {
          (Xe !== Ze || je !== It || dt !== Ht) &&
            (o.stencilOp(Ze, It, Ht), (Xe = Ze), (je = It), (dt = Ht));
        },
        setLocked: function (Ze) {
          w = Ze;
        },
        setClear: function (Ze) {
          dn !== Ze && (o.clearStencil(Ze), (dn = Ze));
        },
        reset: function () {
          (w = !1),
            (k = null),
            (K = null),
            (re = null),
            (de = null),
            (Xe = null),
            (je = null),
            (dt = null),
            (dn = null);
        }
      };
    }
    const a = new i(),
      l = new s(),
      c = new r(),
      h = new WeakMap(),
      u = new WeakMap();
    let d = {},
      p = {},
      g = new WeakMap(),
      _ = [],
      m = null,
      f = !1,
      b = null,
      v = null,
      y = null,
      A = null,
      C = null,
      I = null,
      D = null,
      S = !1,
      E = null,
      W = null,
      j = null,
      P = null,
      O = null;
    const F = o.getParameter(35661);
    let Q = !1,
      $ = 0;
    const X = o.getParameter(7938);
    X.indexOf("WebGL") !== -1
      ? (($ = parseFloat(/^WebGL (\d)/.exec(X)[1])), (Q = $ >= 1))
      : X.indexOf("OpenGL ES") !== -1 &&
        (($ = parseFloat(/^OpenGL ES (\d)/.exec(X)[1])), (Q = $ >= 2));
    let Y = null,
      ee = {};
    const ge = o.getParameter(3088),
      ae = o.getParameter(2978),
      V = new We().fromArray(ge),
      q = new We().fromArray(ae);
    function ie(w, k, K) {
      const re = new Uint8Array(4),
        de = o.createTexture();
      o.bindTexture(w, de),
        o.texParameteri(w, 10241, 9728),
        o.texParameteri(w, 10240, 9728);
      for (let Xe = 0; Xe < K; Xe++)
        o.texImage2D(k + Xe, 0, 6408, 1, 1, 0, 6408, 5121, re);
      return de;
    }
    const oe = {};
    (oe[3553] = ie(3553, 3553, 1)),
      (oe[34067] = ie(34067, 34069, 6)),
      a.setClear(0, 0, 0, 1),
      l.setClear(1),
      c.setClear(0),
      U(2929),
      l.setFunc(Pr),
      ct(!1),
      it(Xa),
      U(2884),
      Ie(Mn);
    function U(w) {
      d[w] !== !0 && (o.enable(w), (d[w] = !0));
    }
    function be(w) {
      d[w] !== !1 && (o.disable(w), (d[w] = !1));
    }
    function Me(w, k) {
      return p[w] !== k
        ? (o.bindFramebuffer(w, k),
          (p[w] = k),
          n && (w === 36009 && (p[36160] = k), w === 36160 && (p[36009] = k)),
          !0)
        : !1;
    }
    function ne(w, k) {
      let K = _,
        re = !1;
      if (w) {
        if (
          ((K = g.get(k)),
          K === void 0 && ((K = []), g.set(k, K)),
          w.isWebGLMultipleRenderTargets)
        ) {
          const de = w.texture;
          if (K.length !== de.length || K[0] !== 36064) {
            for (let Xe = 0, je = de.length; Xe < je; Xe++) K[Xe] = 36064 + Xe;
            (K.length = de.length), (re = !0);
          }
        } else K[0] !== 36064 && ((K[0] = 36064), (re = !0));
      } else K[0] !== 1029 && ((K[0] = 1029), (re = !0));
      re &&
        (t.isWebGL2
          ? o.drawBuffers(K)
          : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K));
    }
    function xe(w) {
      return m !== w ? (o.useProgram(w), (m = w), !0) : !1;
    }
    const ze = { [ai]: 32774, [lh]: 32778, [ch]: 32779 };
    if (n) (ze[Ya] = 32775), (ze[Za] = 32776);
    else {
      const w = e.get("EXT_blend_minmax");
      w !== null && ((ze[Ya] = w.MIN_EXT), (ze[Za] = w.MAX_EXT));
    }
    const fe = {
      [hh]: 0,
      [uh]: 1,
      [dh]: 768,
      [Ol]: 770,
      [xh]: 776,
      [gh]: 774,
      [ph]: 772,
      [fh]: 769,
      [Ul]: 771,
      [_h]: 775,
      [mh]: 773
    };
    function Ie(w, k, K, re, de, Xe, je, dt) {
      if (w === Mn) {
        f === !0 && (be(3042), (f = !1));
        return;
      }
      if ((f === !1 && (U(3042), (f = !0)), w !== oh)) {
        if (w !== b || dt !== S) {
          if (
            ((v !== ai || C !== ai) &&
              (o.blendEquation(32774), (v = ai), (C = ai)),
            dt)
          )
            switch (w) {
              case ui:
                o.blendFuncSeparate(1, 771, 1, 771);
                break;
              case qa:
                o.blendFunc(1, 1);
                break;
              case ja:
                o.blendFuncSeparate(0, 769, 0, 1);
                break;
              case Ka:
                o.blendFuncSeparate(0, 768, 0, 770);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", w);
                break;
            }
          else
            switch (w) {
              case ui:
                o.blendFuncSeparate(770, 771, 1, 771);
                break;
              case qa:
                o.blendFunc(770, 1);
                break;
              case ja:
                o.blendFuncSeparate(0, 769, 0, 1);
                break;
              case Ka:
                o.blendFunc(0, 768);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", w);
                break;
            }
          (y = null), (A = null), (I = null), (D = null), (b = w), (S = dt);
        }
        return;
      }
      (de = de || k),
        (Xe = Xe || K),
        (je = je || re),
        (k !== v || de !== C) &&
          (o.blendEquationSeparate(ze[k], ze[de]), (v = k), (C = de)),
        (K !== y || re !== A || Xe !== I || je !== D) &&
          (o.blendFuncSeparate(fe[K], fe[re], fe[Xe], fe[je]),
          (y = K),
          (A = re),
          (I = Xe),
          (D = je)),
        (b = w),
        (S = !1);
    }
    function nt(w, k) {
      w.side === qt ? be(2884) : U(2884);
      let K = w.side === Tt;
      k && (K = !K),
        ct(K),
        w.blending === ui && w.transparent === !1
          ? Ie(Mn)
          : Ie(
              w.blending,
              w.blendEquation,
              w.blendSrc,
              w.blendDst,
              w.blendEquationAlpha,
              w.blendSrcAlpha,
              w.blendDstAlpha,
              w.premultipliedAlpha
            ),
        l.setFunc(w.depthFunc),
        l.setTest(w.depthTest),
        l.setMask(w.depthWrite),
        a.setMask(w.colorWrite);
      const re = w.stencilWrite;
      c.setTest(re),
        re &&
          (c.setMask(w.stencilWriteMask),
          c.setFunc(w.stencilFunc, w.stencilRef, w.stencilFuncMask),
          c.setOp(w.stencilFail, w.stencilZFail, w.stencilZPass)),
        ke(w.polygonOffset, w.polygonOffsetFactor, w.polygonOffsetUnits),
        w.alphaToCoverage === !0 ? U(32926) : be(32926);
    }
    function ct(w) {
      E !== w && (w ? o.frontFace(2304) : o.frontFace(2305), (E = w));
    }
    function it(w) {
      w !== sh
        ? (U(2884),
          w !== W &&
            (w === Xa
              ? o.cullFace(1029)
              : w === rh
              ? o.cullFace(1028)
              : o.cullFace(1032)))
        : be(2884),
        (W = w);
    }
    function Qe(w) {
      w !== j && (Q && o.lineWidth(w), (j = w));
    }
    function ke(w, k, K) {
      w
        ? (U(32823),
          (P !== k || O !== K) && (o.polygonOffset(k, K), (P = k), (O = K)))
        : be(32823);
    }
    function Ke(w) {
      w ? U(3089) : be(3089);
    }
    function Mt(w) {
      w === void 0 && (w = 33984 + F - 1),
        Y !== w && (o.activeTexture(w), (Y = w));
    }
    function T(w, k, K) {
      K === void 0 && (Y === null ? (K = 33984 + F - 1) : (K = Y));
      let re = ee[K];
      re === void 0 && ((re = { type: void 0, texture: void 0 }), (ee[K] = re)),
        (re.type !== w || re.texture !== k) &&
          (Y !== K && (o.activeTexture(K), (Y = K)),
          o.bindTexture(w, k || oe[w]),
          (re.type = w),
          (re.texture = k));
    }
    function x() {
      const w = ee[Y];
      w !== void 0 &&
        w.type !== void 0 &&
        (o.bindTexture(w.type, null), (w.type = void 0), (w.texture = void 0));
    }
    function B() {
      try {
        o.compressedTexImage2D.apply(o, arguments);
      } catch (w) {
        console.error("THREE.WebGLState:", w);
      }
    }
    function Z() {
      try {
        o.compressedTexImage3D.apply(o, arguments);
      } catch (w) {
        console.error("THREE.WebGLState:", w);
      }
    }
    function J() {
      try {
        o.texSubImage2D.apply(o, arguments);
      } catch (w) {
        console.error("THREE.WebGLState:", w);
      }
    }
    function se() {
      try {
        o.texSubImage3D.apply(o, arguments);
      } catch (w) {
        console.error("THREE.WebGLState:", w);
      }
    }
    function ve() {
      try {
        o.compressedTexSubImage2D.apply(o, arguments);
      } catch (w) {
        console.error("THREE.WebGLState:", w);
      }
    }
    function ce() {
      try {
        o.compressedTexSubImage3D.apply(o, arguments);
      } catch (w) {
        console.error("THREE.WebGLState:", w);
      }
    }
    function G() {
      try {
        o.texStorage2D.apply(o, arguments);
      } catch (w) {
        console.error("THREE.WebGLState:", w);
      }
    }
    function he() {
      try {
        o.texStorage3D.apply(o, arguments);
      } catch (w) {
        console.error("THREE.WebGLState:", w);
      }
    }
    function pe() {
      try {
        o.texImage2D.apply(o, arguments);
      } catch (w) {
        console.error("THREE.WebGLState:", w);
      }
    }
    function _e() {
      try {
        o.texImage3D.apply(o, arguments);
      } catch (w) {
        console.error("THREE.WebGLState:", w);
      }
    }
    function le(w) {
      V.equals(w) === !1 && (o.scissor(w.x, w.y, w.z, w.w), V.copy(w));
    }
    function ue(w) {
      q.equals(w) === !1 && (o.viewport(w.x, w.y, w.z, w.w), q.copy(w));
    }
    function Ne(w, k) {
      let K = u.get(k);
      K === void 0 && ((K = new WeakMap()), u.set(k, K));
      let re = K.get(w);
      re === void 0 && ((re = o.getUniformBlockIndex(k, w.name)), K.set(w, re));
    }
    function Ve(w, k) {
      const re = u.get(k).get(w);
      h.get(k) !== re &&
        (o.uniformBlockBinding(k, re, w.__bindingPointIndex), h.set(k, re));
    }
    function Ye() {
      o.disable(3042),
        o.disable(2884),
        o.disable(2929),
        o.disable(32823),
        o.disable(3089),
        o.disable(2960),
        o.disable(32926),
        o.blendEquation(32774),
        o.blendFunc(1, 0),
        o.blendFuncSeparate(1, 0, 1, 0),
        o.colorMask(!0, !0, !0, !0),
        o.clearColor(0, 0, 0, 0),
        o.depthMask(!0),
        o.depthFunc(513),
        o.clearDepth(1),
        o.stencilMask(4294967295),
        o.stencilFunc(519, 0, 4294967295),
        o.stencilOp(7680, 7680, 7680),
        o.clearStencil(0),
        o.cullFace(1029),
        o.frontFace(2305),
        o.polygonOffset(0, 0),
        o.activeTexture(33984),
        o.bindFramebuffer(36160, null),
        n === !0 &&
          (o.bindFramebuffer(36009, null), o.bindFramebuffer(36008, null)),
        o.useProgram(null),
        o.lineWidth(1),
        o.scissor(0, 0, o.canvas.width, o.canvas.height),
        o.viewport(0, 0, o.canvas.width, o.canvas.height),
        (d = {}),
        (Y = null),
        (ee = {}),
        (p = {}),
        (g = new WeakMap()),
        (_ = []),
        (m = null),
        (f = !1),
        (b = null),
        (v = null),
        (y = null),
        (A = null),
        (C = null),
        (I = null),
        (D = null),
        (S = !1),
        (E = null),
        (W = null),
        (j = null),
        (P = null),
        (O = null),
        V.set(0, 0, o.canvas.width, o.canvas.height),
        q.set(0, 0, o.canvas.width, o.canvas.height),
        a.reset(),
        l.reset(),
        c.reset();
    }
    return {
      buffers: { color: a, depth: l, stencil: c },
      enable: U,
      disable: be,
      bindFramebuffer: Me,
      drawBuffers: ne,
      useProgram: xe,
      setBlending: Ie,
      setMaterial: nt,
      setFlipSided: ct,
      setCullFace: it,
      setLineWidth: Qe,
      setPolygonOffset: ke,
      setScissorTest: Ke,
      activeTexture: Mt,
      bindTexture: T,
      unbindTexture: x,
      compressedTexImage2D: B,
      compressedTexImage3D: Z,
      texImage2D: pe,
      texImage3D: _e,
      updateUBOMapping: Ne,
      uniformBlockBinding: Ve,
      texStorage2D: G,
      texStorage3D: he,
      texSubImage2D: J,
      texSubImage3D: se,
      compressedTexSubImage2D: ve,
      compressedTexSubImage3D: ce,
      scissor: le,
      viewport: ue,
      reset: Ye
    };
  }
  function cg(o, e, t, n, i, s, r) {
    const a = i.isWebGL2,
      l = i.maxTextures,
      c = i.maxCubemapSize,
      h = i.maxTextureSize,
      u = i.maxSamples,
      d = e.has("WEBGL_multisampled_render_to_texture")
        ? e.get("WEBGL_multisampled_render_to_texture")
        : null,
      p =
        typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
      g = new WeakMap();
    let _;
    const m = new WeakMap();
    let f = !1;
    try {
      f =
        typeof OffscreenCanvas < "u" &&
        new OffscreenCanvas(1, 1).getContext("2d") !== null;
    } catch {}
    function b(T, x) {
      return f ? new OffscreenCanvas(T, x) : Hi("canvas");
    }
    function v(T, x, B, Z) {
      let J = 1;
      if (
        ((T.width > Z || T.height > Z) && (J = Z / Math.max(T.width, T.height)),
        J < 1 || x === !0)
      )
        if (
          (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement) ||
          (typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement) ||
          (typeof ImageBitmap < "u" && T instanceof ImageBitmap)
        ) {
          const se = x ? Xl : Math.floor,
            ve = se(J * T.width),
            ce = se(J * T.height);
          _ === void 0 && (_ = b(ve, ce));
          const G = B ? b(ve, ce) : _;
          return (
            (G.width = ve),
            (G.height = ce),
            G.getContext("2d").drawImage(T, 0, 0, ve, ce),
            console.warn(
              "THREE.WebGLRenderer: Texture has been resized from (" +
                T.width +
                "x" +
                T.height +
                ") to (" +
                ve +
                "x" +
                ce +
                ")."
            ),
            G
          );
        } else
          return (
            "data" in T &&
              console.warn(
                "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                  T.width +
                  "x" +
                  T.height +
                  ")."
              ),
            T
          );
      return T;
    }
    function y(T) {
      return zr(T.width) && zr(T.height);
    }
    function A(T) {
      return a
        ? !1
        : T.wrapS !== Nt ||
            T.wrapT !== Nt ||
            (T.minFilter !== at && T.minFilter !== ot);
    }
    function C(T, x) {
      return T.generateMipmaps && x && T.minFilter !== at && T.minFilter !== ot;
    }
    function I(T) {
      o.generateMipmap(T);
    }
    function D(T, x, B, Z, J = !1) {
      if (a === !1) return x;
      if (T !== null) {
        if (o[T] !== void 0) return o[T];
        console.warn(
          "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
            T +
            "'"
        );
      }
      let se = x;
      return (
        x === 6403 &&
          (B === 5126 && (se = 33326),
          B === 5131 && (se = 33325),
          B === 5121 && (se = 33321)),
        x === 33319 &&
          (B === 5126 && (se = 33328),
          B === 5131 && (se = 33327),
          B === 5121 && (se = 33323)),
        x === 6408 &&
          (B === 5126 && (se = 34836),
          B === 5131 && (se = 34842),
          B === 5121 && (se = Z === Fe && J === !1 ? 35907 : 32856),
          B === 32819 && (se = 32854),
          B === 32820 && (se = 32855)),
        (se === 33325 ||
          se === 33326 ||
          se === 33327 ||
          se === 33328 ||
          se === 34842 ||
          se === 34836) &&
          e.get("EXT_color_buffer_float"),
        se
      );
    }
    function S(T, x, B) {
      return C(T, B) === !0 ||
        (T.isFramebufferTexture && T.minFilter !== at && T.minFilter !== ot)
        ? Math.log2(Math.max(x.width, x.height)) + 1
        : T.mipmaps !== void 0 && T.mipmaps.length > 0
        ? T.mipmaps.length
        : T.isCompressedTexture && Array.isArray(T.image)
        ? x.mipmaps.length
        : 1;
    }
    function E(T) {
      return T === at || T === Or || T === bs ? 9728 : 9729;
    }
    function W(T) {
      const x = T.target;
      x.removeEventListener("dispose", W), P(x), x.isVideoTexture && g.delete(x);
    }
    function j(T) {
      const x = T.target;
      x.removeEventListener("dispose", j), F(x);
    }
    function P(T) {
      const x = n.get(T);
      if (x.__webglInit === void 0) return;
      const B = T.source,
        Z = m.get(B);
      if (Z) {
        const J = Z[x.__cacheKey];
        J.usedTimes--,
          J.usedTimes === 0 && O(T),
          Object.keys(Z).length === 0 && m.delete(B);
      }
      n.remove(T);
    }
    function O(T) {
      const x = n.get(T);
      o.deleteTexture(x.__webglTexture);
      const B = T.source,
        Z = m.get(B);
      delete Z[x.__cacheKey], r.memory.textures--;
    }
    function F(T) {
      const x = T.texture,
        B = n.get(T),
        Z = n.get(x);
      if (
        (Z.__webglTexture !== void 0 &&
          (o.deleteTexture(Z.__webglTexture), r.memory.textures--),
        T.depthTexture && T.depthTexture.dispose(),
        T.isWebGLCubeRenderTarget)
      )
        for (let J = 0; J < 6; J++)
          o.deleteFramebuffer(B.__webglFramebuffer[J]),
            B.__webglDepthbuffer && o.deleteRenderbuffer(B.__webglDepthbuffer[J]);
      else {
        if (
          (o.deleteFramebuffer(B.__webglFramebuffer),
          B.__webglDepthbuffer && o.deleteRenderbuffer(B.__webglDepthbuffer),
          B.__webglMultisampledFramebuffer &&
            o.deleteFramebuffer(B.__webglMultisampledFramebuffer),
          B.__webglColorRenderbuffer)
        )
          for (let J = 0; J < B.__webglColorRenderbuffer.length; J++)
            B.__webglColorRenderbuffer[J] &&
              o.deleteRenderbuffer(B.__webglColorRenderbuffer[J]);
        B.__webglDepthRenderbuffer &&
          o.deleteRenderbuffer(B.__webglDepthRenderbuffer);
      }
      if (T.isWebGLMultipleRenderTargets)
        for (let J = 0, se = x.length; J < se; J++) {
          const ve = n.get(x[J]);
          ve.__webglTexture &&
            (o.deleteTexture(ve.__webglTexture), r.memory.textures--),
            n.remove(x[J]);
        }
      n.remove(x), n.remove(T);
    }
    let Q = 0;
    function $() {
      Q = 0;
    }
    function X() {
      const T = Q;
      return (
        T >= l &&
          console.warn(
            "THREE.WebGLTextures: Trying to use " +
              T +
              " texture units while this GPU supports only " +
              l
          ),
        (Q += 1),
        T
      );
    }
    function Y(T) {
      const x = [];
      return (
        x.push(T.wrapS),
        x.push(T.wrapT),
        x.push(T.wrapR || 0),
        x.push(T.magFilter),
        x.push(T.minFilter),
        x.push(T.anisotropy),
        x.push(T.internalFormat),
        x.push(T.format),
        x.push(T.type),
        x.push(T.generateMipmaps),
        x.push(T.premultiplyAlpha),
        x.push(T.flipY),
        x.push(T.unpackAlignment),
        x.push(T.encoding),
        x.join()
      );
    }
    function ee(T, x) {
      const B = n.get(T);
      if (
        (T.isVideoTexture && Ke(T),
        T.isRenderTargetTexture === !1 &&
          T.version > 0 &&
          B.__version !== T.version)
      ) {
        const Z = T.image;
        if (Z === null)
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but no image data found."
          );
        else if (Z.complete === !1)
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
          );
        else {
          be(B, T, x);
          return;
        }
      }
      t.bindTexture(3553, B.__webglTexture, 33984 + x);
    }
    function ge(T, x) {
      const B = n.get(T);
      if (T.version > 0 && B.__version !== T.version) {
        be(B, T, x);
        return;
      }
      t.bindTexture(35866, B.__webglTexture, 33984 + x);
    }
    function ae(T, x) {
      const B = n.get(T);
      if (T.version > 0 && B.__version !== T.version) {
        be(B, T, x);
        return;
      }
      t.bindTexture(32879, B.__webglTexture, 33984 + x);
    }
    function V(T, x) {
      const B = n.get(T);
      if (T.version > 0 && B.__version !== T.version) {
        Me(B, T, x);
        return;
      }
      t.bindTexture(34067, B.__webglTexture, 33984 + x);
    }
    const q = { [_i]: 10497, [Nt]: 33071, [Es]: 33648 },
      ie = {
        [at]: 9728,
        [Or]: 9984,
        [bs]: 9986,
        [ot]: 9729,
        [zl]: 9985,
        [On]: 9987
      };
    function oe(T, x, B) {
      if (
        (B
          ? (o.texParameteri(T, 10242, q[x.wrapS]),
            o.texParameteri(T, 10243, q[x.wrapT]),
            (T === 32879 || T === 35866) && o.texParameteri(T, 32882, q[x.wrapR]),
            o.texParameteri(T, 10240, ie[x.magFilter]),
            o.texParameteri(T, 10241, ie[x.minFilter]))
          : (o.texParameteri(T, 10242, 33071),
            o.texParameteri(T, 10243, 33071),
            (T === 32879 || T === 35866) && o.texParameteri(T, 32882, 33071),
            (x.wrapS !== Nt || x.wrapT !== Nt) &&
              console.warn(
                "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
              ),
            o.texParameteri(T, 10240, E(x.magFilter)),
            o.texParameteri(T, 10241, E(x.minFilter)),
            x.minFilter !== at &&
              x.minFilter !== ot &&
              console.warn(
                "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
              )),
        e.has("EXT_texture_filter_anisotropic") === !0)
      ) {
        const Z = e.get("EXT_texture_filter_anisotropic");
        if (
          x.magFilter === at ||
          (x.minFilter !== bs && x.minFilter !== On) ||
          (x.type === Sn && e.has("OES_texture_float_linear") === !1) ||
          (a === !1 &&
            x.type === Vi &&
            e.has("OES_texture_half_float_linear") === !1)
        )
          return;
        (x.anisotropy > 1 || n.get(x).__currentAnisotropy) &&
          (o.texParameterf(
            T,
            Z.TEXTURE_MAX_ANISOTROPY_EXT,
            Math.min(x.anisotropy, i.getMaxAnisotropy())
          ),
          (n.get(x).__currentAnisotropy = x.anisotropy));
      }
    }
    function U(T, x) {
      let B = !1;
      T.__webglInit === void 0 &&
        ((T.__webglInit = !0), x.addEventListener("dispose", W));
      const Z = x.source;
      let J = m.get(Z);
      J === void 0 && ((J = {}), m.set(Z, J));
      const se = Y(x);
      if (se !== T.__cacheKey) {
        J[se] === void 0 &&
          ((J[se] = { texture: o.createTexture(), usedTimes: 0 }),
          r.memory.textures++,
          (B = !0)),
          J[se].usedTimes++;
        const ve = J[T.__cacheKey];
        ve !== void 0 &&
          (J[T.__cacheKey].usedTimes--, ve.usedTimes === 0 && O(x)),
          (T.__cacheKey = se),
          (T.__webglTexture = J[se].texture);
      }
      return B;
    }
    function be(T, x, B) {
      let Z = 3553;
      (x.isDataArrayTexture || x.isCompressedArrayTexture) && (Z = 35866),
        x.isData3DTexture && (Z = 32879);
      const J = U(T, x),
        se = x.source;
      t.bindTexture(Z, T.__webglTexture, 33984 + B);
      const ve = n.get(se);
      if (se.version !== ve.__version || J === !0) {
        t.activeTexture(33984 + B),
          o.pixelStorei(37440, x.flipY),
          o.pixelStorei(37441, x.premultiplyAlpha),
          o.pixelStorei(3317, x.unpackAlignment),
          o.pixelStorei(37443, 0);
        const ce = A(x) && y(x.image) === !1;
        let G = v(x.image, ce, !1, h);
        G = Mt(x, G);
        const he = y(G) || a,
          pe = s.convert(x.format, x.encoding);
        let _e = s.convert(x.type),
          le = D(x.internalFormat, pe, _e, x.encoding, x.isVideoTexture);
        oe(Z, x, he);
        let ue;
        const Ne = x.mipmaps,
          Ve = a && x.isVideoTexture !== !0,
          Ye = ve.__version === void 0 || J === !0,
          w = S(x, G, he);
        if (x.isDepthTexture)
          (le = 6402),
            a
              ? x.type === Sn
                ? (le = 36012)
                : x.type === Ln
                ? (le = 33190)
                : x.type === di
                ? (le = 35056)
                : (le = 33189)
              : x.type === Sn &&
                console.error(
                  "WebGLRenderer: Floating point depth texture requires WebGL2."
                ),
            x.format === Nn &&
              le === 6402 &&
              x.type !== kl &&
              x.type !== Ln &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
              ),
              (x.type = Ln),
              (_e = s.convert(x.type))),
            x.format === xi &&
              le === 6402 &&
              ((le = 34041),
              x.type !== di &&
                (console.warn(
                  "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
                ),
                (x.type = di),
                (_e = s.convert(x.type)))),
            Ye &&
              (Ve
                ? t.texStorage2D(3553, 1, le, G.width, G.height)
                : t.texImage2D(3553, 0, le, G.width, G.height, 0, pe, _e, null));
        else if (x.isDataTexture) {
          if (Ne.length > 0 && he) {
            Ve && Ye && t.texStorage2D(3553, w, le, Ne[0].width, Ne[0].height);
            for (let k = 0, K = Ne.length; k < K; k++)
              (ue = Ne[k]),
                Ve
                  ? t.texSubImage2D(
                      3553,
                      k,
                      0,
                      0,
                      ue.width,
                      ue.height,
                      pe,
                      _e,
                      ue.data
                    )
                  : t.texImage2D(
                      3553,
                      k,
                      le,
                      ue.width,
                      ue.height,
                      0,
                      pe,
                      _e,
                      ue.data
                    );
            x.generateMipmaps = !1;
          } else
            Ve
              ? (Ye && t.texStorage2D(3553, w, le, G.width, G.height),
                t.texSubImage2D(3553, 0, 0, 0, G.width, G.height, pe, _e, G.data))
              : t.texImage2D(3553, 0, le, G.width, G.height, 0, pe, _e, G.data);
        } else if (x.isCompressedTexture) {
          if (x.isCompressedArrayTexture) {
            Ve &&
              Ye &&
              t.texStorage3D(35866, w, le, Ne[0].width, Ne[0].height, G.depth);
            for (let k = 0, K = Ne.length; k < K; k++)
              (ue = Ne[k]),
                x.format !== Ot
                  ? pe !== null
                    ? Ve
                      ? t.compressedTexSubImage3D(
                          35866,
                          k,
                          0,
                          0,
                          0,
                          ue.width,
                          ue.height,
                          G.depth,
                          pe,
                          ue.data,
                          0,
                          0
                        )
                      : t.compressedTexImage3D(
                          35866,
                          k,
                          le,
                          ue.width,
                          ue.height,
                          G.depth,
                          0,
                          ue.data,
                          0,
                          0
                        )
                    : console.warn(
                        "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                      )
                  : Ve
                  ? t.texSubImage3D(
                      35866,
                      k,
                      0,
                      0,
                      0,
                      ue.width,
                      ue.height,
                      G.depth,
                      pe,
                      _e,
                      ue.data
                    )
                  : t.texImage3D(
                      35866,
                      k,
                      le,
                      ue.width,
                      ue.height,
                      G.depth,
                      0,
                      pe,
                      _e,
                      ue.data
                    );
          } else {
            Ve && Ye && t.texStorage2D(3553, w, le, Ne[0].width, Ne[0].height);
            for (let k = 0, K = Ne.length; k < K; k++)
              (ue = Ne[k]),
                x.format !== Ot
                  ? pe !== null
                    ? Ve
                      ? t.compressedTexSubImage2D(
                          3553,
                          k,
                          0,
                          0,
                          ue.width,
                          ue.height,
                          pe,
                          ue.data
                        )
                      : t.compressedTexImage2D(
                          3553,
                          k,
                          le,
                          ue.width,
                          ue.height,
                          0,
                          ue.data
                        )
                    : console.warn(
                        "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                      )
                  : Ve
                  ? t.texSubImage2D(
                      3553,
                      k,
                      0,
                      0,
                      ue.width,
                      ue.height,
                      pe,
                      _e,
                      ue.data
                    )
                  : t.texImage2D(
                      3553,
                      k,
                      le,
                      ue.width,
                      ue.height,
                      0,
                      pe,
                      _e,
                      ue.data
                    );
          }
        } else if (x.isDataArrayTexture)
          Ve
            ? (Ye && t.texStorage3D(35866, w, le, G.width, G.height, G.depth),
              t.texSubImage3D(
                35866,
                0,
                0,
                0,
                0,
                G.width,
                G.height,
                G.depth,
                pe,
                _e,
                G.data
              ))
            : t.texImage3D(
                35866,
                0,
                le,
                G.width,
                G.height,
                G.depth,
                0,
                pe,
                _e,
                G.data
              );
        else if (x.isData3DTexture)
          Ve
            ? (Ye && t.texStorage3D(32879, w, le, G.width, G.height, G.depth),
              t.texSubImage3D(
                32879,
                0,
                0,
                0,
                0,
                G.width,
                G.height,
                G.depth,
                pe,
                _e,
                G.data
              ))
            : t.texImage3D(
                32879,
                0,
                le,
                G.width,
                G.height,
                G.depth,
                0,
                pe,
                _e,
                G.data
              );
        else if (x.isFramebufferTexture) {
          if (Ye)
            if (Ve) t.texStorage2D(3553, w, le, G.width, G.height);
            else {
              let k = G.width,
                K = G.height;
              for (let re = 0; re < w; re++)
                t.texImage2D(3553, re, le, k, K, 0, pe, _e, null),
                  (k >>= 1),
                  (K >>= 1);
            }
        } else if (Ne.length > 0 && he) {
          Ve && Ye && t.texStorage2D(3553, w, le, Ne[0].width, Ne[0].height);
          for (let k = 0, K = Ne.length; k < K; k++)
            (ue = Ne[k]),
              Ve
                ? t.texSubImage2D(3553, k, 0, 0, pe, _e, ue)
                : t.texImage2D(3553, k, le, pe, _e, ue);
          x.generateMipmaps = !1;
        } else
          Ve
            ? (Ye && t.texStorage2D(3553, w, le, G.width, G.height),
              t.texSubImage2D(3553, 0, 0, 0, pe, _e, G))
            : t.texImage2D(3553, 0, le, pe, _e, G);
        C(x, he) && I(Z),
          (ve.__version = se.version),
          x.onUpdate && x.onUpdate(x);
      }
      T.__version = x.version;
    }
    function Me(T, x, B) {
      if (x.image.length !== 6) return;
      const Z = U(T, x),
        J = x.source;
      t.bindTexture(34067, T.__webglTexture, 33984 + B);
      const se = n.get(J);
      if (J.version !== se.__version || Z === !0) {
        t.activeTexture(33984 + B),
          o.pixelStorei(37440, x.flipY),
          o.pixelStorei(37441, x.premultiplyAlpha),
          o.pixelStorei(3317, x.unpackAlignment),
          o.pixelStorei(37443, 0);
        const ve = x.isCompressedTexture || x.image[0].isCompressedTexture,
          ce = x.image[0] && x.image[0].isDataTexture,
          G = [];
        for (let k = 0; k < 6; k++)
          !ve && !ce
            ? (G[k] = v(x.image[k], !1, !0, c))
            : (G[k] = ce ? x.image[k].image : x.image[k]),
            (G[k] = Mt(x, G[k]));
        const he = G[0],
          pe = y(he) || a,
          _e = s.convert(x.format, x.encoding),
          le = s.convert(x.type),
          ue = D(x.internalFormat, _e, le, x.encoding),
          Ne = a && x.isVideoTexture !== !0,
          Ve = se.__version === void 0 || Z === !0;
        let Ye = S(x, he, pe);
        oe(34067, x, pe);
        let w;
        if (ve) {
          Ne && Ve && t.texStorage2D(34067, Ye, ue, he.width, he.height);
          for (let k = 0; k < 6; k++) {
            w = G[k].mipmaps;
            for (let K = 0; K < w.length; K++) {
              const re = w[K];
              x.format !== Ot
                ? _e !== null
                  ? Ne
                    ? t.compressedTexSubImage2D(
                        34069 + k,
                        K,
                        0,
                        0,
                        re.width,
                        re.height,
                        _e,
                        re.data
                      )
                    : t.compressedTexImage2D(
                        34069 + k,
                        K,
                        ue,
                        re.width,
                        re.height,
                        0,
                        re.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                    )
                : Ne
                ? t.texSubImage2D(
                    34069 + k,
                    K,
                    0,
                    0,
                    re.width,
                    re.height,
                    _e,
                    le,
                    re.data
                  )
                : t.texImage2D(
                    34069 + k,
                    K,
                    ue,
                    re.width,
                    re.height,
                    0,
                    _e,
                    le,
                    re.data
                  );
            }
          }
        } else {
          (w = x.mipmaps),
            Ne &&
              Ve &&
              (w.length > 0 && Ye++,
              t.texStorage2D(34067, Ye, ue, G[0].width, G[0].height));
          for (let k = 0; k < 6; k++)
            if (ce) {
              Ne
                ? t.texSubImage2D(
                    34069 + k,
                    0,
                    0,
                    0,
                    G[k].width,
                    G[k].height,
                    _e,
                    le,
                    G[k].data
                  )
                : t.texImage2D(
                    34069 + k,
                    0,
                    ue,
                    G[k].width,
                    G[k].height,
                    0,
                    _e,
                    le,
                    G[k].data
                  );
              for (let K = 0; K < w.length; K++) {
                const de = w[K].image[k].image;
                Ne
                  ? t.texSubImage2D(
                      34069 + k,
                      K + 1,
                      0,
                      0,
                      de.width,
                      de.height,
                      _e,
                      le,
                      de.data
                    )
                  : t.texImage2D(
                      34069 + k,
                      K + 1,
                      ue,
                      de.width,
                      de.height,
                      0,
                      _e,
                      le,
                      de.data
                    );
              }
            } else {
              Ne
                ? t.texSubImage2D(34069 + k, 0, 0, 0, _e, le, G[k])
                : t.texImage2D(34069 + k, 0, ue, _e, le, G[k]);
              for (let K = 0; K < w.length; K++) {
                const re = w[K];
                Ne
                  ? t.texSubImage2D(34069 + k, K + 1, 0, 0, _e, le, re.image[k])
                  : t.texImage2D(34069 + k, K + 1, ue, _e, le, re.image[k]);
              }
            }
        }
        C(x, pe) && I(34067),
          (se.__version = J.version),
          x.onUpdate && x.onUpdate(x);
      }
      T.__version = x.version;
    }
    function ne(T, x, B, Z, J) {
      const se = s.convert(B.format, B.encoding),
        ve = s.convert(B.type),
        ce = D(B.internalFormat, se, ve, B.encoding);
      n.get(x).__hasExternalTextures ||
        (J === 32879 || J === 35866
          ? t.texImage3D(J, 0, ce, x.width, x.height, x.depth, 0, se, ve, null)
          : t.texImage2D(J, 0, ce, x.width, x.height, 0, se, ve, null)),
        t.bindFramebuffer(36160, T),
        ke(x)
          ? d.framebufferTexture2DMultisampleEXT(
              36160,
              Z,
              J,
              n.get(B).__webglTexture,
              0,
              Qe(x)
            )
          : (J === 3553 || (J >= 34069 && J <= 34074)) &&
            o.framebufferTexture2D(36160, Z, J, n.get(B).__webglTexture, 0),
        t.bindFramebuffer(36160, null);
    }
    function xe(T, x, B) {
      if ((o.bindRenderbuffer(36161, T), x.depthBuffer && !x.stencilBuffer)) {
        let Z = 33189;
        if (B || ke(x)) {
          const J = x.depthTexture;
          J &&
            J.isDepthTexture &&
            (J.type === Sn ? (Z = 36012) : J.type === Ln && (Z = 33190));
          const se = Qe(x);
          ke(x)
            ? d.renderbufferStorageMultisampleEXT(36161, se, Z, x.width, x.height)
            : o.renderbufferStorageMultisample(36161, se, Z, x.width, x.height);
        } else o.renderbufferStorage(36161, Z, x.width, x.height);
        o.framebufferRenderbuffer(36160, 36096, 36161, T);
      } else if (x.depthBuffer && x.stencilBuffer) {
        const Z = Qe(x);
        B && ke(x) === !1
          ? o.renderbufferStorageMultisample(36161, Z, 35056, x.width, x.height)
          : ke(x)
          ? d.renderbufferStorageMultisampleEXT(
              36161,
              Z,
              35056,
              x.width,
              x.height
            )
          : o.renderbufferStorage(36161, 34041, x.width, x.height),
          o.framebufferRenderbuffer(36160, 33306, 36161, T);
      } else {
        const Z = x.isWebGLMultipleRenderTargets === !0 ? x.texture : [x.texture];
        for (let J = 0; J < Z.length; J++) {
          const se = Z[J],
            ve = s.convert(se.format, se.encoding),
            ce = s.convert(se.type),
            G = D(se.internalFormat, ve, ce, se.encoding),
            he = Qe(x);
          B && ke(x) === !1
            ? o.renderbufferStorageMultisample(36161, he, G, x.width, x.height)
            : ke(x)
            ? d.renderbufferStorageMultisampleEXT(36161, he, G, x.width, x.height)
            : o.renderbufferStorage(36161, G, x.width, x.height);
        }
      }
      o.bindRenderbuffer(36161, null);
    }
    function ze(T, x) {
      if (x && x.isWebGLCubeRenderTarget)
        throw new Error(
          "Depth Texture with cube render targets is not supported"
        );
      if (
        (t.bindFramebuffer(36160, T),
        !(x.depthTexture && x.depthTexture.isDepthTexture))
      )
        throw new Error(
          "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
        );
      (!n.get(x.depthTexture).__webglTexture ||
        x.depthTexture.image.width !== x.width ||
        x.depthTexture.image.height !== x.height) &&
        ((x.depthTexture.image.width = x.width),
        (x.depthTexture.image.height = x.height),
        (x.depthTexture.needsUpdate = !0)),
        ee(x.depthTexture, 0);
      const Z = n.get(x.depthTexture).__webglTexture,
        J = Qe(x);
      if (x.depthTexture.format === Nn)
        ke(x)
          ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Z, 0, J)
          : o.framebufferTexture2D(36160, 36096, 3553, Z, 0);
      else if (x.depthTexture.format === xi)
        ke(x)
          ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Z, 0, J)
          : o.framebufferTexture2D(36160, 33306, 3553, Z, 0);
      else throw new Error("Unknown depthTexture format");
    }
    function fe(T) {
      const x = n.get(T),
        B = T.isWebGLCubeRenderTarget === !0;
      if (T.depthTexture && !x.__autoAllocateDepthBuffer) {
        if (B)
          throw new Error(
            "target.depthTexture not supported in Cube render targets"
          );
        ze(x.__webglFramebuffer, T);
      } else if (B) {
        x.__webglDepthbuffer = [];
        for (let Z = 0; Z < 6; Z++)
          t.bindFramebuffer(36160, x.__webglFramebuffer[Z]),
            (x.__webglDepthbuffer[Z] = o.createRenderbuffer()),
            xe(x.__webglDepthbuffer[Z], T, !1);
      } else
        t.bindFramebuffer(36160, x.__webglFramebuffer),
          (x.__webglDepthbuffer = o.createRenderbuffer()),
          xe(x.__webglDepthbuffer, T, !1);
      t.bindFramebuffer(36160, null);
    }
    function Ie(T, x, B) {
      const Z = n.get(T);
      x !== void 0 && ne(Z.__webglFramebuffer, T, T.texture, 36064, 3553),
        B !== void 0 && fe(T);
    }
    function nt(T) {
      const x = T.texture,
        B = n.get(T),
        Z = n.get(x);
      T.addEventListener("dispose", j),
        T.isWebGLMultipleRenderTargets !== !0 &&
          (Z.__webglTexture === void 0 && (Z.__webglTexture = o.createTexture()),
          (Z.__version = x.version),
          r.memory.textures++);
      const J = T.isWebGLCubeRenderTarget === !0,
        se = T.isWebGLMultipleRenderTargets === !0,
        ve = y(T) || a;
      if (J) {
        B.__webglFramebuffer = [];
        for (let ce = 0; ce < 6; ce++)
          B.__webglFramebuffer[ce] = o.createFramebuffer();
      } else {
        if (((B.__webglFramebuffer = o.createFramebuffer()), se))
          if (i.drawBuffers) {
            const ce = T.texture;
            for (let G = 0, he = ce.length; G < he; G++) {
              const pe = n.get(ce[G]);
              pe.__webglTexture === void 0 &&
                ((pe.__webglTexture = o.createTexture()), r.memory.textures++);
            }
          } else
            console.warn(
              "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
            );
        if (a && T.samples > 0 && ke(T) === !1) {
          const ce = se ? x : [x];
          (B.__webglMultisampledFramebuffer = o.createFramebuffer()),
            (B.__webglColorRenderbuffer = []),
            t.bindFramebuffer(36160, B.__webglMultisampledFramebuffer);
          for (let G = 0; G < ce.length; G++) {
            const he = ce[G];
            (B.__webglColorRenderbuffer[G] = o.createRenderbuffer()),
              o.bindRenderbuffer(36161, B.__webglColorRenderbuffer[G]);
            const pe = s.convert(he.format, he.encoding),
              _e = s.convert(he.type),
              le = D(
                he.internalFormat,
                pe,
                _e,
                he.encoding,
                T.isXRRenderTarget === !0
              ),
              ue = Qe(T);
            o.renderbufferStorageMultisample(36161, ue, le, T.width, T.height),
              o.framebufferRenderbuffer(
                36160,
                36064 + G,
                36161,
                B.__webglColorRenderbuffer[G]
              );
          }
          o.bindRenderbuffer(36161, null),
            T.depthBuffer &&
              ((B.__webglDepthRenderbuffer = o.createRenderbuffer()),
              xe(B.__webglDepthRenderbuffer, T, !0)),
            t.bindFramebuffer(36160, null);
        }
      }
      if (J) {
        t.bindTexture(34067, Z.__webglTexture), oe(34067, x, ve);
        for (let ce = 0; ce < 6; ce++)
          ne(B.__webglFramebuffer[ce], T, x, 36064, 34069 + ce);
        C(x, ve) && I(34067), t.unbindTexture();
      } else if (se) {
        const ce = T.texture;
        for (let G = 0, he = ce.length; G < he; G++) {
          const pe = ce[G],
            _e = n.get(pe);
          t.bindTexture(3553, _e.__webglTexture),
            oe(3553, pe, ve),
            ne(B.__webglFramebuffer, T, pe, 36064 + G, 3553),
            C(pe, ve) && I(3553);
        }
        t.unbindTexture();
      } else {
        let ce = 3553;
        (T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) &&
          (a
            ? (ce = T.isWebGL3DRenderTarget ? 32879 : 35866)
            : console.error(
                "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
              )),
          t.bindTexture(ce, Z.__webglTexture),
          oe(ce, x, ve),
          ne(B.__webglFramebuffer, T, x, 36064, ce),
          C(x, ve) && I(ce),
          t.unbindTexture();
      }
      T.depthBuffer && fe(T);
    }
    function ct(T) {
      const x = y(T) || a,
        B = T.isWebGLMultipleRenderTargets === !0 ? T.texture : [T.texture];
      for (let Z = 0, J = B.length; Z < J; Z++) {
        const se = B[Z];
        if (C(se, x)) {
          const ve = T.isWebGLCubeRenderTarget ? 34067 : 3553,
            ce = n.get(se).__webglTexture;
          t.bindTexture(ve, ce), I(ve), t.unbindTexture();
        }
      }
    }
    function it(T) {
      if (a && T.samples > 0 && ke(T) === !1) {
        const x = T.isWebGLMultipleRenderTargets ? T.texture : [T.texture],
          B = T.width,
          Z = T.height;
        let J = 16384;
        const se = [],
          ve = T.stencilBuffer ? 33306 : 36096,
          ce = n.get(T),
          G = T.isWebGLMultipleRenderTargets === !0;
        if (G)
          for (let he = 0; he < x.length; he++)
            t.bindFramebuffer(36160, ce.__webglMultisampledFramebuffer),
              o.framebufferRenderbuffer(36160, 36064 + he, 36161, null),
              t.bindFramebuffer(36160, ce.__webglFramebuffer),
              o.framebufferTexture2D(36009, 36064 + he, 3553, null, 0);
        t.bindFramebuffer(36008, ce.__webglMultisampledFramebuffer),
          t.bindFramebuffer(36009, ce.__webglFramebuffer);
        for (let he = 0; he < x.length; he++) {
          se.push(36064 + he), T.depthBuffer && se.push(ve);
          const pe =
            ce.__ignoreDepthValues !== void 0 ? ce.__ignoreDepthValues : !1;
          if (
            (pe === !1 &&
              (T.depthBuffer && (J |= 256), T.stencilBuffer && (J |= 1024)),
            G &&
              o.framebufferRenderbuffer(
                36008,
                36064,
                36161,
                ce.__webglColorRenderbuffer[he]
              ),
            pe === !0 &&
              (o.invalidateFramebuffer(36008, [ve]),
              o.invalidateFramebuffer(36009, [ve])),
            G)
          ) {
            const _e = n.get(x[he]).__webglTexture;
            o.framebufferTexture2D(36009, 36064, 3553, _e, 0);
          }
          o.blitFramebuffer(0, 0, B, Z, 0, 0, B, Z, J, 9728),
            p && o.invalidateFramebuffer(36008, se);
        }
        if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), G))
          for (let he = 0; he < x.length; he++) {
            t.bindFramebuffer(36160, ce.__webglMultisampledFramebuffer),
              o.framebufferRenderbuffer(
                36160,
                36064 + he,
                36161,
                ce.__webglColorRenderbuffer[he]
              );
            const pe = n.get(x[he]).__webglTexture;
            t.bindFramebuffer(36160, ce.__webglFramebuffer),
              o.framebufferTexture2D(36009, 36064 + he, 3553, pe, 0);
          }
        t.bindFramebuffer(36009, ce.__webglMultisampledFramebuffer);
      }
    }
    function Qe(T) {
      return Math.min(u, T.samples);
    }
    function ke(T) {
      const x = n.get(T);
      return (
        a &&
        T.samples > 0 &&
        e.has("WEBGL_multisampled_render_to_texture") === !0 &&
        x.__useRenderToTexture !== !1
      );
    }
    function Ke(T) {
      const x = r.render.frame;
      g.get(T) !== x && (g.set(T, x), T.update());
    }
    function Mt(T, x) {
      const B = T.encoding,
        Z = T.format,
        J = T.type;
      return (
        T.isCompressedTexture === !0 ||
          T.isVideoTexture === !0 ||
          T.format === Br ||
          (B !== Fn &&
            (B === Fe
              ? a === !1
                ? e.has("EXT_sRGB") === !0 && Z === Ot
                  ? ((T.format = Br),
                    (T.minFilter = ot),
                    (T.generateMipmaps = !1))
                  : (x = jl.sRGBToLinear(x))
                : (Z !== Ot || J !== Un) &&
                  console.warn(
                    "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                  )
              : console.error(
                  "THREE.WebGLTextures: Unsupported texture encoding:",
                  B
                ))),
        x
      );
    }
    (this.allocateTextureUnit = X),
      (this.resetTextureUnits = $),
      (this.setTexture2D = ee),
      (this.setTexture2DArray = ge),
      (this.setTexture3D = ae),
      (this.setTextureCube = V),
      (this.rebindTextures = Ie),
      (this.setupRenderTarget = nt),
      (this.updateRenderTargetMipmap = ct),
      (this.updateMultisampleRenderTarget = it),
      (this.setupDepthRenderbuffer = fe),
      (this.setupFrameBufferTexture = ne),
      (this.useMultisampledRTT = ke);
  }
  function hg(o, e, t) {
    const n = t.isWebGL2;
    function i(s, r = null) {
      let a;
      if (s === Un) return 5121;
      if (s === Uh) return 32819;
      if (s === Fh) return 32820;
      if (s === Dh) return 5120;
      if (s === Nh) return 5122;
      if (s === kl) return 5123;
      if (s === Oh) return 5124;
      if (s === Ln) return 5125;
      if (s === Sn) return 5126;
      if (s === Vi)
        return n
          ? 5131
          : ((a = e.get("OES_texture_half_float")),
            a !== null ? a.HALF_FLOAT_OES : null);
      if (s === Bh) return 6406;
      if (s === Ot) return 6408;
      if (s === zh) return 6409;
      if (s === kh) return 6410;
      if (s === Nn) return 6402;
      if (s === xi) return 34041;
      if (s === Br)
        return (a = e.get("EXT_sRGB")), a !== null ? a.SRGB_ALPHA_EXT : null;
      if (s === Vh) return 6403;
      if (s === Gh) return 36244;
      if (s === Hh) return 33319;
      if (s === Wh) return 33320;
      if (s === Xh) return 36249;
      if (s === $s || s === Js || s === Qs || s === er)
        if (r === Fe) {
          if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), a !== null)) {
            if (s === $s) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
            if (s === Js) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            if (s === Qs) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
            if (s === er) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
          } else return null;
        } else if (((a = e.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
          if (s === $s) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (s === Js) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (s === Qs) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (s === er) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        } else return null;
      if (s === $a || s === Ja || s === Qa || s === eo)
        if (((a = e.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
          if (s === $a) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (s === Ja) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (s === Qa) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (s === eo) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        } else return null;
      if (s === qh)
        return (
          (a = e.get("WEBGL_compressed_texture_etc1")),
          a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
        );
      if (s === to || s === no)
        if (((a = e.get("WEBGL_compressed_texture_etc")), a !== null)) {
          if (s === to)
            return r === Fe ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
          if (s === no)
            return r === Fe
              ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
              : a.COMPRESSED_RGBA8_ETC2_EAC;
        } else return null;
      if (
        s === io ||
        s === so ||
        s === ro ||
        s === ao ||
        s === oo ||
        s === lo ||
        s === co ||
        s === ho ||
        s === uo ||
        s === fo ||
        s === po ||
        s === mo ||
        s === go ||
        s === _o
      )
        if (((a = e.get("WEBGL_compressed_texture_astc")), a !== null)) {
          if (s === io)
            return r === Fe
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
              : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
          if (s === so)
            return r === Fe
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
              : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
          if (s === ro)
            return r === Fe
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
              : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
          if (s === ao)
            return r === Fe
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
              : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
          if (s === oo)
            return r === Fe
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
              : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
          if (s === lo)
            return r === Fe
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
              : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
          if (s === co)
            return r === Fe
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
              : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
          if (s === ho)
            return r === Fe
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
              : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
          if (s === uo)
            return r === Fe
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
              : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
          if (s === fo)
            return r === Fe
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
              : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
          if (s === po)
            return r === Fe
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
              : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
          if (s === mo)
            return r === Fe
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
              : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
          if (s === go)
            return r === Fe
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
              : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
          if (s === _o)
            return r === Fe
              ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
              : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
        } else return null;
      if (s === tr)
        if (((a = e.get("EXT_texture_compression_bptc")), a !== null)) {
          if (s === tr)
            return r === Fe
              ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
              : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        } else return null;
      if (s === jh || s === xo || s === vo || s === So)
        if (((a = e.get("EXT_texture_compression_rgtc")), a !== null)) {
          if (s === tr) return a.COMPRESSED_RED_RGTC1_EXT;
          if (s === xo) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
          if (s === vo) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
          if (s === So) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
        } else return null;
      return s === di
        ? n
          ? 34042
          : ((a = e.get("WEBGL_depth_texture")),
            a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
        : o[s] !== void 0
        ? o[s]
        : null;
    }
    return { convert: i };
  }
  class ug extends St {
    constructor(e = []) {
      super(), (this.isArrayCamera = !0), (this.cameras = e);
    }
  }
  class Dn extends qe {
    constructor() {
      super(), (this.isGroup = !0), (this.type = "Group");
    }
  }
  const dg = { type: "move" };
  class br {
    constructor() {
      (this._targetRay = null), (this._grip = null), (this._hand = null);
    }
    getHandSpace() {
      return (
        this._hand === null &&
          ((this._hand = new Dn()),
          (this._hand.matrixAutoUpdate = !1),
          (this._hand.visible = !1),
          (this._hand.joints = {}),
          (this._hand.inputState = { pinching: !1 })),
        this._hand
      );
    }
    getTargetRaySpace() {
      return (
        this._targetRay === null &&
          ((this._targetRay = new Dn()),
          (this._targetRay.matrixAutoUpdate = !1),
          (this._targetRay.visible = !1),
          (this._targetRay.hasLinearVelocity = !1),
          (this._targetRay.linearVelocity = new R()),
          (this._targetRay.hasAngularVelocity = !1),
          (this._targetRay.angularVelocity = new R())),
        this._targetRay
      );
    }
    getGripSpace() {
      return (
        this._grip === null &&
          ((this._grip = new Dn()),
          (this._grip.matrixAutoUpdate = !1),
          (this._grip.visible = !1),
          (this._grip.hasLinearVelocity = !1),
          (this._grip.linearVelocity = new R()),
          (this._grip.hasAngularVelocity = !1),
          (this._grip.angularVelocity = new R())),
        this._grip
      );
    }
    dispatchEvent(e) {
      return (
        this._targetRay !== null && this._targetRay.dispatchEvent(e),
        this._grip !== null && this._grip.dispatchEvent(e),
        this._hand !== null && this._hand.dispatchEvent(e),
        this
      );
    }
    connect(e) {
      if (e && e.hand) {
        const t = this._hand;
        if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
      }
      return this.dispatchEvent({ type: "connected", data: e }), this;
    }
    disconnect(e) {
      return (
        this.dispatchEvent({ type: "disconnected", data: e }),
        this._targetRay !== null && (this._targetRay.visible = !1),
        this._grip !== null && (this._grip.visible = !1),
        this._hand !== null && (this._hand.visible = !1),
        this
      );
    }
    update(e, t, n) {
      let i = null,
        s = null,
        r = null;
      const a = this._targetRay,
        l = this._grip,
        c = this._hand;
      if (e && t.session.visibilityState !== "visible-blurred") {
        if (c && e.hand) {
          r = !0;
          for (const _ of e.hand.values()) {
            const m = t.getJointPose(_, n),
              f = this._getHandJoint(c, _);
            m !== null &&
              (f.matrix.fromArray(m.transform.matrix),
              f.matrix.decompose(f.position, f.rotation, f.scale),
              (f.jointRadius = m.radius)),
              (f.visible = m !== null);
          }
          const h = c.joints["index-finger-tip"],
            u = c.joints["thumb-tip"],
            d = h.position.distanceTo(u.position),
            p = 0.02,
            g = 0.005;
          c.inputState.pinching && d > p + g
            ? ((c.inputState.pinching = !1),
              this.dispatchEvent({
                type: "pinchend",
                handedness: e.handedness,
                target: this
              }))
            : !c.inputState.pinching &&
              d <= p - g &&
              ((c.inputState.pinching = !0),
              this.dispatchEvent({
                type: "pinchstart",
                handedness: e.handedness,
                target: this
              }));
        } else
          l !== null &&
            e.gripSpace &&
            ((s = t.getPose(e.gripSpace, n)),
            s !== null &&
              (l.matrix.fromArray(s.transform.matrix),
              l.matrix.decompose(l.position, l.rotation, l.scale),
              s.linearVelocity
                ? ((l.hasLinearVelocity = !0),
                  l.linearVelocity.copy(s.linearVelocity))
                : (l.hasLinearVelocity = !1),
              s.angularVelocity
                ? ((l.hasAngularVelocity = !0),
                  l.angularVelocity.copy(s.angularVelocity))
                : (l.hasAngularVelocity = !1)));
        a !== null &&
          ((i = t.getPose(e.targetRaySpace, n)),
          i === null && s !== null && (i = s),
          i !== null &&
            (a.matrix.fromArray(i.transform.matrix),
            a.matrix.decompose(a.position, a.rotation, a.scale),
            i.linearVelocity
              ? ((a.hasLinearVelocity = !0),
                a.linearVelocity.copy(i.linearVelocity))
              : (a.hasLinearVelocity = !1),
            i.angularVelocity
              ? ((a.hasAngularVelocity = !0),
                a.angularVelocity.copy(i.angularVelocity))
              : (a.hasAngularVelocity = !1),
            this.dispatchEvent(dg)));
      }
      return (
        a !== null && (a.visible = i !== null),
        l !== null && (l.visible = s !== null),
        c !== null && (c.visible = r !== null),
        this
      );
    }
    _getHandJoint(e, t) {
      if (e.joints[t.jointName] === void 0) {
        const n = new Dn();
        (n.matrixAutoUpdate = !1),
          (n.visible = !1),
          (e.joints[t.jointName] = n),
          e.add(n);
      }
      return e.joints[t.jointName];
    }
  }
  class fg extends lt {
    constructor(e, t, n, i, s, r, a, l, c, h) {
      if (((h = h !== void 0 ? h : Nn), h !== Nn && h !== xi))
        throw new Error(
          "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
        );
      n === void 0 && h === Nn && (n = Ln),
        n === void 0 && h === xi && (n = di),
        super(null, i, s, r, a, l, h, n, c),
        (this.isDepthTexture = !0),
        (this.image = { width: e, height: t }),
        (this.magFilter = a !== void 0 ? a : at),
        (this.minFilter = l !== void 0 ? l : at),
        (this.flipY = !1),
        (this.generateMipmaps = !1);
    }
  }
  class pg extends kn {
    constructor(e, t) {
      super();
      const n = this;
      let i = null,
        s = 1,
        r = null,
        a = "local-floor",
        l = 1,
        c = null,
        h = null,
        u = null,
        d = null,
        p = null,
        g = null;
      const _ = t.getContextAttributes();
      let m = null,
        f = null;
      const b = [],
        v = [],
        y = new Set(),
        A = new Map(),
        C = new St();
      C.layers.enable(1), (C.viewport = new We());
      const I = new St();
      I.layers.enable(2), (I.viewport = new We());
      const D = [C, I],
        S = new ug();
      S.layers.enable(1), S.layers.enable(2);
      let E = null,
        W = null;
      (this.cameraAutoUpdate = !0),
        (this.enabled = !1),
        (this.isPresenting = !1),
        (this.getController = function (V) {
          let q = b[V];
          return (
            q === void 0 && ((q = new br()), (b[V] = q)), q.getTargetRaySpace()
          );
        }),
        (this.getControllerGrip = function (V) {
          let q = b[V];
          return q === void 0 && ((q = new br()), (b[V] = q)), q.getGripSpace();
        }),
        (this.getHand = function (V) {
          let q = b[V];
          return q === void 0 && ((q = new br()), (b[V] = q)), q.getHandSpace();
        });
      function j(V) {
        const q = v.indexOf(V.inputSource);
        if (q === -1) return;
        const ie = b[q];
        ie !== void 0 && ie.dispatchEvent({ type: V.type, data: V.inputSource });
      }
      function P() {
        i.removeEventListener("select", j),
          i.removeEventListener("selectstart", j),
          i.removeEventListener("selectend", j),
          i.removeEventListener("squeeze", j),
          i.removeEventListener("squeezestart", j),
          i.removeEventListener("squeezeend", j),
          i.removeEventListener("end", P),
          i.removeEventListener("inputsourceschange", O);
        for (let V = 0; V < b.length; V++) {
          const q = v[V];
          q !== null && ((v[V] = null), b[V].disconnect(q));
        }
        (E = null),
          (W = null),
          e.setRenderTarget(m),
          (p = null),
          (d = null),
          (u = null),
          (i = null),
          (f = null),
          ae.stop(),
          (n.isPresenting = !1),
          n.dispatchEvent({ type: "sessionend" });
      }
      (this.setFramebufferScaleFactor = function (V) {
        (s = V),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
            );
      }),
        (this.setReferenceSpaceType = function (V) {
          (a = V),
            n.isPresenting === !0 &&
              console.warn(
                "THREE.WebXRManager: Cannot change reference space type while presenting."
              );
        }),
        (this.getReferenceSpace = function () {
          return c || r;
        }),
        (this.setReferenceSpace = function (V) {
          c = V;
        }),
        (this.getBaseLayer = function () {
          return d !== null ? d : p;
        }),
        (this.getBinding = function () {
          return u;
        }),
        (this.getFrame = function () {
          return g;
        }),
        (this.getSession = function () {
          return i;
        }),
        (this.setSession = async function (V) {
          if (((i = V), i !== null)) {
            if (
              ((m = e.getRenderTarget()),
              i.addEventListener("select", j),
              i.addEventListener("selectstart", j),
              i.addEventListener("selectend", j),
              i.addEventListener("squeeze", j),
              i.addEventListener("squeezestart", j),
              i.addEventListener("squeezeend", j),
              i.addEventListener("end", P),
              i.addEventListener("inputsourceschange", O),
              _.xrCompatible !== !0 && (await t.makeXRCompatible()),
              i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
            ) {
              const q = {
                antialias: i.renderState.layers === void 0 ? _.antialias : !0,
                alpha: _.alpha,
                depth: _.depth,
                stencil: _.stencil,
                framebufferScaleFactor: s
              };
              (p = new XRWebGLLayer(i, t, q)),
                i.updateRenderState({ baseLayer: p }),
                (f = new cn(p.framebufferWidth, p.framebufferHeight, {
                  format: Ot,
                  type: Un,
                  encoding: e.outputEncoding,
                  stencilBuffer: _.stencil
                }));
            } else {
              let q = null,
                ie = null,
                oe = null;
              _.depth &&
                ((oe = _.stencil ? 35056 : 33190),
                (q = _.stencil ? xi : Nn),
                (ie = _.stencil ? di : Ln));
              const U = { colorFormat: 32856, depthFormat: oe, scaleFactor: s };
              (u = new XRWebGLBinding(i, t)),
                (d = u.createProjectionLayer(U)),
                i.updateRenderState({ layers: [d] }),
                (f = new cn(d.textureWidth, d.textureHeight, {
                  format: Ot,
                  type: Un,
                  depthTexture: new fg(
                    d.textureWidth,
                    d.textureHeight,
                    ie,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    q
                  ),
                  stencilBuffer: _.stencil,
                  encoding: e.outputEncoding,
                  samples: _.antialias ? 4 : 0
                }));
              const be = e.properties.get(f);
              be.__ignoreDepthValues = d.ignoreDepthValues;
            }
            (f.isXRRenderTarget = !0),
              this.setFoveation(l),
              (c = null),
              (r = await i.requestReferenceSpace(a)),
              ae.setContext(i),
              ae.start(),
              (n.isPresenting = !0),
              n.dispatchEvent({ type: "sessionstart" });
          }
        });
      function O(V) {
        for (let q = 0; q < V.removed.length; q++) {
          const ie = V.removed[q],
            oe = v.indexOf(ie);
          oe >= 0 && ((v[oe] = null), b[oe].disconnect(ie));
        }
        for (let q = 0; q < V.added.length; q++) {
          const ie = V.added[q];
          let oe = v.indexOf(ie);
          if (oe === -1) {
            for (let be = 0; be < b.length; be++)
              if (be >= v.length) {
                v.push(ie), (oe = be);
                break;
              } else if (v[be] === null) {
                (v[be] = ie), (oe = be);
                break;
              }
            if (oe === -1) break;
          }
          const U = b[oe];
          U && U.connect(ie);
        }
      }
      const F = new R(),
        Q = new R();
      function $(V, q, ie) {
        F.setFromMatrixPosition(q.matrixWorld),
          Q.setFromMatrixPosition(ie.matrixWorld);
        const oe = F.distanceTo(Q),
          U = q.projectionMatrix.elements,
          be = ie.projectionMatrix.elements,
          Me = U[14] / (U[10] - 1),
          ne = U[14] / (U[10] + 1),
          xe = (U[9] + 1) / U[5],
          ze = (U[9] - 1) / U[5],
          fe = (U[8] - 1) / U[0],
          Ie = (be[8] + 1) / be[0],
          nt = Me * fe,
          ct = Me * Ie,
          it = oe / (-fe + Ie),
          Qe = it * -fe;
        q.matrixWorld.decompose(V.position, V.quaternion, V.scale),
          V.translateX(Qe),
          V.translateZ(it),
          V.matrixWorld.compose(V.position, V.quaternion, V.scale),
          V.matrixWorldInverse.copy(V.matrixWorld).invert();
        const ke = Me + it,
          Ke = ne + it,
          Mt = nt - Qe,
          T = ct + (oe - Qe),
          x = ((xe * ne) / Ke) * ke,
          B = ((ze * ne) / Ke) * ke;
        V.projectionMatrix.makePerspective(Mt, T, x, B, ke, Ke),
          V.projectionMatrixInverse.copy(V.projectionMatrix).invert();
      }
      function X(V, q) {
        q === null
          ? V.matrixWorld.copy(V.matrix)
          : V.matrixWorld.multiplyMatrices(q.matrixWorld, V.matrix),
          V.matrixWorldInverse.copy(V.matrixWorld).invert();
      }
      this.updateCamera = function (V) {
        if (i === null) return;
        (S.near = I.near = C.near = V.near),
          (S.far = I.far = C.far = V.far),
          (E !== S.near || W !== S.far) &&
            (i.updateRenderState({ depthNear: S.near, depthFar: S.far }),
            (E = S.near),
            (W = S.far));
        const q = V.parent,
          ie = S.cameras;
        X(S, q);
        for (let oe = 0; oe < ie.length; oe++) X(ie[oe], q);
        ie.length === 2
          ? $(S, C, I)
          : S.projectionMatrix.copy(C.projectionMatrix),
          Y(V, S, q);
      };
      function Y(V, q, ie) {
        ie === null
          ? V.matrix.copy(q.matrixWorld)
          : (V.matrix.copy(ie.matrixWorld),
            V.matrix.invert(),
            V.matrix.multiply(q.matrixWorld)),
          V.matrix.decompose(V.position, V.quaternion, V.scale),
          V.updateMatrixWorld(!0);
        const oe = V.children;
        for (let U = 0, be = oe.length; U < be; U++) oe[U].updateMatrixWorld(!0);
        V.projectionMatrix.copy(q.projectionMatrix),
          V.projectionMatrixInverse.copy(q.projectionMatrixInverse),
          V.isPerspectiveCamera &&
            ((V.fov = Mi * 2 * Math.atan(1 / V.projectionMatrix.elements[5])),
            (V.zoom = 1));
      }
      (this.getCamera = function () {
        return S;
      }),
        (this.getFoveation = function () {
          if (!(d === null && p === null)) return l;
        }),
        (this.setFoveation = function (V) {
          (l = V),
            d !== null && (d.fixedFoveation = V),
            p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = V);
        }),
        (this.getPlanes = function () {
          return y;
        });
      let ee = null;
      function ge(V, q) {
        if (((h = q.getViewerPose(c || r)), (g = q), h !== null)) {
          const ie = h.views;
          p !== null &&
            (e.setRenderTargetFramebuffer(f, p.framebuffer),
            e.setRenderTarget(f));
          let oe = !1;
          ie.length !== S.cameras.length && ((S.cameras.length = 0), (oe = !0));
          for (let U = 0; U < ie.length; U++) {
            const be = ie[U];
            let Me = null;
            if (p !== null) Me = p.getViewport(be);
            else {
              const xe = u.getViewSubImage(d, be);
              (Me = xe.viewport),
                U === 0 &&
                  (e.setRenderTargetTextures(
                    f,
                    xe.colorTexture,
                    d.ignoreDepthValues ? void 0 : xe.depthStencilTexture
                  ),
                  e.setRenderTarget(f));
            }
            let ne = D[U];
            ne === void 0 &&
              ((ne = new St()),
              ne.layers.enable(U),
              (ne.viewport = new We()),
              (D[U] = ne)),
              ne.matrix.fromArray(be.transform.matrix),
              ne.matrix.decompose(ne.position, ne.quaternion, ne.scale),
              ne.projectionMatrix.fromArray(be.projectionMatrix),
              ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),
              ne.viewport.set(Me.x, Me.y, Me.width, Me.height),
              U === 0 &&
                (S.matrix.copy(ne.matrix),
                S.matrix.decompose(S.position, S.quaternion, S.scale)),
              oe === !0 && S.cameras.push(ne);
          }
        }
        for (let ie = 0; ie < b.length; ie++) {
          const oe = v[ie],
            U = b[ie];
          oe !== null && U !== void 0 && U.update(oe, q, c || r);
        }
        if ((ee && ee(V, q), q.detectedPlanes)) {
          n.dispatchEvent({ type: "planesdetected", data: q.detectedPlanes });
          let ie = null;
          for (const oe of y)
            q.detectedPlanes.has(oe) || (ie === null && (ie = []), ie.push(oe));
          if (ie !== null)
            for (const oe of ie)
              y.delete(oe),
                A.delete(oe),
                n.dispatchEvent({ type: "planeremoved", data: oe });
          for (const oe of q.detectedPlanes)
            if (!y.has(oe))
              y.add(oe),
                A.set(oe, q.lastChangedTime),
                n.dispatchEvent({ type: "planeadded", data: oe });
            else {
              const U = A.get(oe);
              oe.lastChangedTime > U &&
                (A.set(oe, oe.lastChangedTime),
                n.dispatchEvent({ type: "planechanged", data: oe }));
            }
        }
        g = null;
      }
      const ae = new sc();
      ae.setAnimationLoop(ge),
        (this.setAnimationLoop = function (V) {
          ee = V;
        }),
        (this.dispose = function () {});
    }
  }
  function mg(o, e) {
    function t(m, f) {
      m.matrixAutoUpdate === !0 && m.updateMatrix(), f.value.copy(m.matrix);
    }
    function n(m, f) {
      f.color.getRGB(m.fogColor.value, ec(o)),
        f.isFog
          ? ((m.fogNear.value = f.near), (m.fogFar.value = f.far))
          : f.isFogExp2 && (m.fogDensity.value = f.density);
    }
    function i(m, f, b, v, y) {
      f.isMeshBasicMaterial || f.isMeshLambertMaterial
        ? s(m, f)
        : f.isMeshToonMaterial
        ? (s(m, f), u(m, f))
        : f.isMeshPhongMaterial
        ? (s(m, f), h(m, f))
        : f.isMeshStandardMaterial
        ? (s(m, f), d(m, f), f.isMeshPhysicalMaterial && p(m, f, y))
        : f.isMeshMatcapMaterial
        ? (s(m, f), g(m, f))
        : f.isMeshDepthMaterial
        ? s(m, f)
        : f.isMeshDistanceMaterial
        ? (s(m, f), _(m, f))
        : f.isMeshNormalMaterial
        ? s(m, f)
        : f.isLineBasicMaterial
        ? (r(m, f), f.isLineDashedMaterial && a(m, f))
        : f.isPointsMaterial
        ? l(m, f, b, v)
        : f.isSpriteMaterial
        ? c(m, f)
        : f.isShadowMaterial
        ? (m.color.value.copy(f.color), (m.opacity.value = f.opacity))
        : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
    }
    function s(m, f) {
      (m.opacity.value = f.opacity),
        f.color && m.diffuse.value.copy(f.color),
        f.emissive &&
          m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),
        f.map && ((m.map.value = f.map), t(f.map, m.mapTransform)),
        f.alphaMap &&
          ((m.alphaMap.value = f.alphaMap), t(f.alphaMap, m.alphaMapTransform)),
        f.bumpMap &&
          ((m.bumpMap.value = f.bumpMap),
          t(f.bumpMap, m.bumpMapTransform),
          (m.bumpScale.value = f.bumpScale),
          f.side === Tt && (m.bumpScale.value *= -1)),
        f.normalMap &&
          ((m.normalMap.value = f.normalMap),
          t(f.normalMap, m.normalMapTransform),
          m.normalScale.value.copy(f.normalScale),
          f.side === Tt && m.normalScale.value.negate()),
        f.displacementMap &&
          ((m.displacementMap.value = f.displacementMap),
          t(f.displacementMap, m.displacementMapTransform),
          (m.displacementScale.value = f.displacementScale),
          (m.displacementBias.value = f.displacementBias)),
        f.emissiveMap &&
          ((m.emissiveMap.value = f.emissiveMap),
          t(f.emissiveMap, m.emissiveMapTransform)),
        f.specularMap &&
          ((m.specularMap.value = f.specularMap),
          t(f.specularMap, m.specularMapTransform)),
        f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
      const b = e.get(f).envMap;
      if (
        (b &&
          ((m.envMap.value = b),
          (m.flipEnvMap.value =
            b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1),
          (m.reflectivity.value = f.reflectivity),
          (m.ior.value = f.ior),
          (m.refractionRatio.value = f.refractionRatio)),
        f.lightMap)
      ) {
        m.lightMap.value = f.lightMap;
        const v = o.useLegacyLights === !0 ? Math.PI : 1;
        (m.lightMapIntensity.value = f.lightMapIntensity * v),
          t(f.lightMap, m.lightMapTransform);
      }
      f.aoMap &&
        ((m.aoMap.value = f.aoMap),
        (m.aoMapIntensity.value = f.aoMapIntensity),
        t(f.aoMap, m.aoMapTransform));
    }
    function r(m, f) {
      m.diffuse.value.copy(f.color),
        (m.opacity.value = f.opacity),
        f.map && ((m.map.value = f.map), t(f.map, m.mapTransform));
    }
    function a(m, f) {
      (m.dashSize.value = f.dashSize),
        (m.totalSize.value = f.dashSize + f.gapSize),
        (m.scale.value = f.scale);
    }
    function l(m, f, b, v) {
      m.diffuse.value.copy(f.color),
        (m.opacity.value = f.opacity),
        (m.size.value = f.size * b),
        (m.scale.value = v * 0.5),
        f.map && ((m.map.value = f.map), t(f.map, m.uvTransform)),
        f.alphaMap && (m.alphaMap.value = f.alphaMap),
        f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    }
    function c(m, f) {
      m.diffuse.value.copy(f.color),
        (m.opacity.value = f.opacity),
        (m.rotation.value = f.rotation),
        f.map && ((m.map.value = f.map), t(f.map, m.mapTransform)),
        f.alphaMap && (m.alphaMap.value = f.alphaMap),
        f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    }
    function h(m, f) {
      m.specular.value.copy(f.specular),
        (m.shininess.value = Math.max(f.shininess, 1e-4));
    }
    function u(m, f) {
      f.gradientMap && (m.gradientMap.value = f.gradientMap);
    }
    function d(m, f) {
      (m.metalness.value = f.metalness),
        f.metalnessMap &&
          ((m.metalnessMap.value = f.metalnessMap),
          t(f.metalnessMap, m.metalnessMapTransform)),
        (m.roughness.value = f.roughness),
        f.roughnessMap &&
          ((m.roughnessMap.value = f.roughnessMap),
          t(f.roughnessMap, m.roughnessMapTransform)),
        e.get(f).envMap && (m.envMapIntensity.value = f.envMapIntensity);
    }
    function p(m, f, b) {
      (m.ior.value = f.ior),
        f.sheen > 0 &&
          (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),
          (m.sheenRoughness.value = f.sheenRoughness),
          f.sheenColorMap &&
            ((m.sheenColorMap.value = f.sheenColorMap),
            t(f.sheenColorMap, m.sheenColorMapTransform)),
          f.sheenRoughnessMap &&
            ((m.sheenRoughnessMap.value = f.sheenRoughnessMap),
            t(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))),
        f.clearcoat > 0 &&
          ((m.clearcoat.value = f.clearcoat),
          (m.clearcoatRoughness.value = f.clearcoatRoughness),
          f.clearcoatMap &&
            ((m.clearcoatMap.value = f.clearcoatMap),
            t(f.clearcoatMap, m.clearcoatMapTransform)),
          f.clearcoatRoughnessMap &&
            ((m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap),
            t(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)),
          f.clearcoatNormalMap &&
            ((m.clearcoatNormalMap.value = f.clearcoatNormalMap),
            t(f.clearcoatNormalMap, m.clearcoatNormalMapTransform),
            m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),
            f.side === Tt && m.clearcoatNormalScale.value.negate())),
        f.iridescence > 0 &&
          ((m.iridescence.value = f.iridescence),
          (m.iridescenceIOR.value = f.iridescenceIOR),
          (m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0]),
          (m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1]),
          f.iridescenceMap &&
            ((m.iridescenceMap.value = f.iridescenceMap),
            t(f.iridescenceMap, m.iridescenceMapTransform)),
          f.iridescenceThicknessMap &&
            ((m.iridescenceThicknessMap.value = f.iridescenceThicknessMap),
            t(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))),
        f.transmission > 0 &&
          ((m.transmission.value = f.transmission),
          (m.transmissionSamplerMap.value = b.texture),
          m.transmissionSamplerSize.value.set(b.width, b.height),
          f.transmissionMap &&
            ((m.transmissionMap.value = f.transmissionMap),
            t(f.transmissionMap, m.transmissionMapTransform)),
          (m.thickness.value = f.thickness),
          f.thicknessMap &&
            ((m.thicknessMap.value = f.thicknessMap),
            t(f.thicknessMap, m.thicknessMapTransform)),
          (m.attenuationDistance.value = f.attenuationDistance),
          m.attenuationColor.value.copy(f.attenuationColor)),
        (m.specularIntensity.value = f.specularIntensity),
        m.specularColor.value.copy(f.specularColor),
        f.specularColorMap &&
          ((m.specularColorMap.value = f.specularColorMap),
          t(f.specularColorMap, m.specularColorMapTransform)),
        f.specularIntensityMap &&
          ((m.specularIntensityMap.value = f.specularIntensityMap),
          t(f.specularIntensityMap, m.specularIntensityMapTransform));
    }
    function g(m, f) {
      f.matcap && (m.matcap.value = f.matcap);
    }
    function _(m, f) {
      const b = e.get(f).light;
      m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),
        (m.nearDistance.value = b.shadow.camera.near),
        (m.farDistance.value = b.shadow.camera.far);
    }
    return { refreshFogUniforms: n, refreshMaterialUniforms: i };
  }
  function gg(o, e, t, n) {
    let i = {},
      s = {},
      r = [];
    const a = t.isWebGL2 ? o.getParameter(35375) : 0;
    function l(b, v) {
      const y = v.program;
      n.uniformBlockBinding(b, y);
    }
    function c(b, v) {
      let y = i[b.id];
      y === void 0 &&
        (g(b), (y = h(b)), (i[b.id] = y), b.addEventListener("dispose", m));
      const A = v.program;
      n.updateUBOMapping(b, A);
      const C = e.render.frame;
      s[b.id] !== C && (d(b), (s[b.id] = C));
    }
    function h(b) {
      const v = u();
      b.__bindingPointIndex = v;
      const y = o.createBuffer(),
        A = b.__size,
        C = b.usage;
      return (
        o.bindBuffer(35345, y),
        o.bufferData(35345, A, C),
        o.bindBuffer(35345, null),
        o.bindBufferBase(35345, v, y),
        y
      );
    }
    function u() {
      for (let b = 0; b < a; b++) if (r.indexOf(b) === -1) return r.push(b), b;
      return (
        console.error(
          "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
        ),
        0
      );
    }
    function d(b) {
      const v = i[b.id],
        y = b.uniforms,
        A = b.__cache;
      o.bindBuffer(35345, v);
      for (let C = 0, I = y.length; C < I; C++) {
        const D = y[C];
        if (p(D, C, A) === !0) {
          const S = D.__offset,
            E = Array.isArray(D.value) ? D.value : [D.value];
          let W = 0;
          for (let j = 0; j < E.length; j++) {
            const P = E[j],
              O = _(P);
            typeof P == "number"
              ? ((D.__data[0] = P), o.bufferSubData(35345, S + W, D.__data))
              : P.isMatrix3
              ? ((D.__data[0] = P.elements[0]),
                (D.__data[1] = P.elements[1]),
                (D.__data[2] = P.elements[2]),
                (D.__data[3] = P.elements[0]),
                (D.__data[4] = P.elements[3]),
                (D.__data[5] = P.elements[4]),
                (D.__data[6] = P.elements[5]),
                (D.__data[7] = P.elements[0]),
                (D.__data[8] = P.elements[6]),
                (D.__data[9] = P.elements[7]),
                (D.__data[10] = P.elements[8]),
                (D.__data[11] = P.elements[0]))
              : (P.toArray(D.__data, W),
                (W += O.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          o.bufferSubData(35345, S, D.__data);
        }
      }
      o.bindBuffer(35345, null);
    }
    function p(b, v, y) {
      const A = b.value;
      if (y[v] === void 0) {
        if (typeof A == "number") y[v] = A;
        else {
          const C = Array.isArray(A) ? A : [A],
            I = [];
          for (let D = 0; D < C.length; D++) I.push(C[D].clone());
          y[v] = I;
        }
        return !0;
      } else if (typeof A == "number") {
        if (y[v] !== A) return (y[v] = A), !0;
      } else {
        const C = Array.isArray(y[v]) ? y[v] : [y[v]],
          I = Array.isArray(A) ? A : [A];
        for (let D = 0; D < C.length; D++) {
          const S = C[D];
          if (S.equals(I[D]) === !1) return S.copy(I[D]), !0;
        }
      }
      return !1;
    }
    function g(b) {
      const v = b.uniforms;
      let y = 0;
      const A = 16;
      let C = 0;
      for (let I = 0, D = v.length; I < D; I++) {
        const S = v[I],
          E = { boundary: 0, storage: 0 },
          W = Array.isArray(S.value) ? S.value : [S.value];
        for (let j = 0, P = W.length; j < P; j++) {
          const O = W[j],
            F = _(O);
          (E.boundary += F.boundary), (E.storage += F.storage);
        }
        if (
          ((S.__data = new Float32Array(
            E.storage / Float32Array.BYTES_PER_ELEMENT
          )),
          (S.__offset = y),
          I > 0)
        ) {
          C = y % A;
          const j = A - C;
          C !== 0 && j - E.boundary < 0 && ((y += A - C), (S.__offset = y));
        }
        y += E.storage;
      }
      return (
        (C = y % A), C > 0 && (y += A - C), (b.__size = y), (b.__cache = {}), this
      );
    }
    function _(b) {
      const v = { boundary: 0, storage: 0 };
      return (
        typeof b == "number"
          ? ((v.boundary = 4), (v.storage = 4))
          : b.isVector2
          ? ((v.boundary = 8), (v.storage = 8))
          : b.isVector3 || b.isColor
          ? ((v.boundary = 16), (v.storage = 12))
          : b.isVector4
          ? ((v.boundary = 16), (v.storage = 16))
          : b.isMatrix3
          ? ((v.boundary = 48), (v.storage = 48))
          : b.isMatrix4
          ? ((v.boundary = 64), (v.storage = 64))
          : b.isTexture
          ? console.warn(
              "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
            )
          : console.warn(
              "THREE.WebGLRenderer: Unsupported uniform value type.",
              b
            ),
        v
      );
    }
    function m(b) {
      const v = b.target;
      v.removeEventListener("dispose", m);
      const y = r.indexOf(v.__bindingPointIndex);
      r.splice(y, 1), o.deleteBuffer(i[v.id]), delete i[v.id], delete s[v.id];
    }
    function f() {
      for (const b in i) o.deleteBuffer(i[b]);
      (r = []), (i = {}), (s = {});
    }
    return { bind: l, update: c, dispose: f };
  }
  function _g() {
    const o = Hi("canvas");
    return (o.style.display = "block"), o;
  }
  class cc {
    constructor(e = {}) {
      const {
        canvas: t = _g(),
        context: n = null,
        depth: i = !0,
        stencil: s = !0,
        alpha: r = !1,
        antialias: a = !1,
        premultipliedAlpha: l = !0,
        preserveDrawingBuffer: c = !1,
        powerPreference: h = "default",
        failIfMajorPerformanceCaveat: u = !1
      } = e;
      this.isWebGLRenderer = !0;
      let d;
      n !== null ? (d = n.getContextAttributes().alpha) : (d = r);
      let p = null,
        g = null;
      const _ = [],
        m = [];
      (this.domElement = t),
        (this.debug = { checkShaderErrors: !0, onShaderError: null }),
        (this.autoClear = !0),
        (this.autoClearColor = !0),
        (this.autoClearDepth = !0),
        (this.autoClearStencil = !0),
        (this.sortObjects = !0),
        (this.clippingPlanes = []),
        (this.localClippingEnabled = !1),
        (this.outputEncoding = Fn),
        (this.useLegacyLights = !0),
        (this.toneMapping = on),
        (this.toneMappingExposure = 1);
      const f = this;
      let b = !1,
        v = 0,
        y = 0,
        A = null,
        C = -1,
        I = null;
      const D = new We(),
        S = new We();
      let E = null,
        W = t.width,
        j = t.height,
        P = 1,
        O = null,
        F = null;
      const Q = new We(0, 0, W, j),
        $ = new We(0, 0, W, j);
      let X = !1;
      const Y = new Zr();
      let ee = !1,
        ge = !1,
        ae = null;
      const V = new Re(),
        q = new R(),
        ie = {
          background: null,
          fog: null,
          environment: null,
          overrideMaterial: null,
          isScene: !0
        };
      function oe() {
        return A === null ? P : 1;
      }
      let U = n;
      function be(M, N) {
        for (let z = 0; z < M.length; z++) {
          const L = M[z],
            H = t.getContext(L, N);
          if (H !== null) return H;
        }
        return null;
      }
      try {
        const M = {
          alpha: !0,
          depth: i,
          stencil: s,
          antialias: a,
          premultipliedAlpha: l,
          preserveDrawingBuffer: c,
          powerPreference: h,
          failIfMajorPerformanceCaveat: u
        };
        if (
          ("setAttribute" in t &&
            t.setAttribute("data-engine", `three.js r${qr}`),
          t.addEventListener("webglcontextlost", ue, !1),
          t.addEventListener("webglcontextrestored", Ne, !1),
          t.addEventListener("webglcontextcreationerror", Ve, !1),
          U === null)
        ) {
          const N = ["webgl2", "webgl", "experimental-webgl"];
          if (
            (f.isWebGL1Renderer === !0 && N.shift(), (U = be(N, M)), U === null)
          )
            throw be(N)
              ? new Error(
                  "Error creating WebGL context with your selected attributes."
                )
              : new Error("Error creating WebGL context.");
        }
        U.getShaderPrecisionFormat === void 0 &&
          (U.getShaderPrecisionFormat = function () {
            return { rangeMin: 1, rangeMax: 1, precision: 1 };
          });
      } catch (M) {
        throw (console.error("THREE.WebGLRenderer: " + M.message), M);
      }
      let Me,
        ne,
        xe,
        ze,
        fe,
        Ie,
        nt,
        ct,
        it,
        Qe,
        ke,
        Ke,
        Mt,
        T,
        x,
        B,
        Z,
        J,
        se,
        ve,
        ce,
        G,
        he,
        pe;
      function _e() {
        (Me = new Cp(U)),
          (ne = new yp(U, Me, e)),
          Me.init(ne),
          (G = new hg(U, Me, ne)),
          (xe = new lg(U, Me, ne)),
          (ze = new Lp()),
          (fe = new Km()),
          (Ie = new cg(U, Me, xe, fe, ne, G, ze)),
          (nt = new bp(f)),
          (ct = new wp(f)),
          (it = new Gu(U, ne)),
          (he = new Sp(U, Me, it, ne)),
          (Qe = new Rp(U, it, ze, he)),
          (ke = new Op(U, Qe, it, ze)),
          (se = new Np(U, ne, Ie)),
          (B = new Tp(fe)),
          (Ke = new jm(f, nt, ct, Me, ne, he, B)),
          (Mt = new mg(f, fe)),
          (T = new Zm()),
          (x = new ng(Me, ne)),
          (J = new vp(f, nt, ct, xe, ke, d, l)),
          (Z = new og(f, ke, ne)),
          (pe = new gg(U, ze, ne, xe)),
          (ve = new Mp(U, Me, ze, ne)),
          (ce = new Ip(U, Me, ze, ne)),
          (ze.programs = Ke.programs),
          (f.capabilities = ne),
          (f.extensions = Me),
          (f.properties = fe),
          (f.renderLists = T),
          (f.shadowMap = Z),
          (f.state = xe),
          (f.info = ze);
      }
      _e();
      const le = new pg(f, U);
      (this.xr = le),
        (this.getContext = function () {
          return U;
        }),
        (this.getContextAttributes = function () {
          return U.getContextAttributes();
        }),
        (this.forceContextLoss = function () {
          const M = Me.get("WEBGL_lose_context");
          M && M.loseContext();
        }),
        (this.forceContextRestore = function () {
          const M = Me.get("WEBGL_lose_context");
          M && M.restoreContext();
        }),
        (this.getPixelRatio = function () {
          return P;
        }),
        (this.setPixelRatio = function (M) {
          M !== void 0 && ((P = M), this.setSize(W, j, !1));
        }),
        (this.getSize = function (M) {
          return M.set(W, j);
        }),
        (this.setSize = function (M, N, z = !0) {
          if (le.isPresenting) {
            console.warn(
              "THREE.WebGLRenderer: Can't change size while VR device is presenting."
            );
            return;
          }
          (W = M),
            (j = N),
            (t.width = Math.floor(M * P)),
            (t.height = Math.floor(N * P)),
            z === !0 && ((t.style.width = M + "px"), (t.style.height = N + "px")),
            this.setViewport(0, 0, M, N);
        }),
        (this.getDrawingBufferSize = function (M) {
          return M.set(W * P, j * P).floor();
        }),
        (this.setDrawingBufferSize = function (M, N, z) {
          (W = M),
            (j = N),
            (P = z),
            (t.width = Math.floor(M * z)),
            (t.height = Math.floor(N * z)),
            this.setViewport(0, 0, M, N);
        }),
        (this.getCurrentViewport = function (M) {
          return M.copy(D);
        }),
        (this.getViewport = function (M) {
          return M.copy(Q);
        }),
        (this.setViewport = function (M, N, z, L) {
          M.isVector4 ? Q.set(M.x, M.y, M.z, M.w) : Q.set(M, N, z, L),
            xe.viewport(D.copy(Q).multiplyScalar(P).floor());
        }),
        (this.getScissor = function (M) {
          return M.copy($);
        }),
        (this.setScissor = function (M, N, z, L) {
          M.isVector4 ? $.set(M.x, M.y, M.z, M.w) : $.set(M, N, z, L),
            xe.scissor(S.copy($).multiplyScalar(P).floor());
        }),
        (this.getScissorTest = function () {
          return X;
        }),
        (this.setScissorTest = function (M) {
          xe.setScissorTest((X = M));
        }),
        (this.setOpaqueSort = function (M) {
          O = M;
        }),
        (this.setTransparentSort = function (M) {
          F = M;
        }),
        (this.getClearColor = function (M) {
          return M.copy(J.getClearColor());
        }),
        (this.setClearColor = function () {
          J.setClearColor.apply(J, arguments);
        }),
        (this.getClearAlpha = function () {
          return J.getClearAlpha();
        }),
        (this.setClearAlpha = function () {
          J.setClearAlpha.apply(J, arguments);
        }),
        (this.clear = function (M = !0, N = !0, z = !0) {
          let L = 0;
          M && (L |= 16384), N && (L |= 256), z && (L |= 1024), U.clear(L);
        }),
        (this.clearColor = function () {
          this.clear(!0, !1, !1);
        }),
        (this.clearDepth = function () {
          this.clear(!1, !0, !1);
        }),
        (this.clearStencil = function () {
          this.clear(!1, !1, !0);
        }),
        (this.dispose = function () {
          t.removeEventListener("webglcontextlost", ue, !1),
            t.removeEventListener("webglcontextrestored", Ne, !1),
            t.removeEventListener("webglcontextcreationerror", Ve, !1),
            T.dispose(),
            x.dispose(),
            fe.dispose(),
            nt.dispose(),
            ct.dispose(),
            ke.dispose(),
            he.dispose(),
            pe.dispose(),
            Ke.dispose(),
            le.dispose(),
            le.removeEventListener("sessionstart", de),
            le.removeEventListener("sessionend", Xe),
            ae && (ae.dispose(), (ae = null)),
            je.stop();
        });
      function ue(M) {
        M.preventDefault(),
          console.log("THREE.WebGLRenderer: Context Lost."),
          (b = !0);
      }
      function Ne() {
        console.log("THREE.WebGLRenderer: Context Restored."), (b = !1);
        const M = ze.autoReset,
          N = Z.enabled,
          z = Z.autoUpdate,
          L = Z.needsUpdate,
          H = Z.type;
        _e(),
          (ze.autoReset = M),
          (Z.enabled = N),
          (Z.autoUpdate = z),
          (Z.needsUpdate = L),
          (Z.type = H);
      }
      function Ve(M) {
        console.error(
          "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
          M.statusMessage
        );
      }
      function Ye(M) {
        const N = M.target;
        N.removeEventListener("dispose", Ye), w(N);
      }
      function w(M) {
        k(M), fe.remove(M);
      }
      function k(M) {
        const N = fe.get(M).programs;
        N !== void 0 &&
          (N.forEach(function (z) {
            Ke.releaseProgram(z);
          }),
          M.isShaderMaterial && Ke.releaseShaderCache(M));
      }
      (this.renderBufferDirect = function (M, N, z, L, H, me) {
        N === null && (N = ie);
        const Se = H.isMesh && H.matrixWorld.determinant() < 0,
          Te = $c(M, N, z, L, H);
        xe.setMaterial(L, Se);
        let Ae = z.index,
          we = 1;
        L.wireframe === !0 && ((Ae = Qe.getWireframeAttribute(z)), (we = 2));
        const Ce = z.drawRange,
          Le = z.attributes.position;
        let Ge = Ce.start * we,
          gt = (Ce.start + Ce.count) * we;
        me !== null &&
          ((Ge = Math.max(Ge, me.start * we)),
          (gt = Math.min(gt, (me.start + me.count) * we))),
          Ae !== null
            ? ((Ge = Math.max(Ge, 0)), (gt = Math.min(gt, Ae.count)))
            : Le != null &&
              ((Ge = Math.max(Ge, 0)), (gt = Math.min(gt, Le.count)));
        const Ut = gt - Ge;
        if (Ut < 0 || Ut === 1 / 0) return;
        he.setup(H, L, Te, z, Ae);
        let yn,
          $e = ve;
        if (
          (Ae !== null && ((yn = it.get(Ae)), ($e = ce), $e.setIndex(yn)),
          H.isMesh)
        )
          L.wireframe === !0
            ? (xe.setLineWidth(L.wireframeLinewidth * oe()), $e.setMode(1))
            : $e.setMode(4);
        else if (H.isLine) {
          let Oe = L.linewidth;
          Oe === void 0 && (Oe = 1),
            xe.setLineWidth(Oe * oe()),
            H.isLineSegments
              ? $e.setMode(1)
              : H.isLineLoop
              ? $e.setMode(2)
              : $e.setMode(3);
        } else H.isPoints ? $e.setMode(0) : H.isSprite && $e.setMode(4);
        if (H.isInstancedMesh) $e.renderInstances(Ge, Ut, H.count);
        else if (z.isInstancedBufferGeometry) {
          const Oe = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0,
            js = Math.min(z.instanceCount, Oe);
          $e.renderInstances(Ge, Ut, js);
        } else $e.render(Ge, Ut);
      }),
        (this.compile = function (M, N) {
          function z(L, H, me) {
            L.transparent === !0 && L.side === qt && L.forceSinglePass === !1
              ? ((L.side = Tt),
                (L.needsUpdate = !0),
                Ji(L, H, me),
                (L.side = Kt),
                (L.needsUpdate = !0),
                Ji(L, H, me),
                (L.side = qt))
              : Ji(L, H, me);
          }
          (g = x.get(M)),
            g.init(),
            m.push(g),
            M.traverseVisible(function (L) {
              L.isLight &&
                L.layers.test(N.layers) &&
                (g.pushLight(L), L.castShadow && g.pushShadow(L));
            }),
            g.setupLights(f.useLegacyLights),
            M.traverse(function (L) {
              const H = L.material;
              if (H)
                if (Array.isArray(H))
                  for (let me = 0; me < H.length; me++) {
                    const Se = H[me];
                    z(Se, M, L);
                  }
                else z(H, M, L);
            }),
            m.pop(),
            (g = null);
        });
      let K = null;
      function re(M) {
        K && K(M);
      }
      function de() {
        je.stop();
      }
      function Xe() {
        je.start();
      }
      const je = new sc();
      je.setAnimationLoop(re),
        typeof self < "u" && je.setContext(self),
        (this.setAnimationLoop = function (M) {
          (K = M), le.setAnimationLoop(M), M === null ? je.stop() : je.start();
        }),
        le.addEventListener("sessionstart", de),
        le.addEventListener("sessionend", Xe),
        (this.render = function (M, N) {
          if (N !== void 0 && N.isCamera !== !0) {
            console.error(
              "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
            );
            return;
          }
          if (b === !0) return;
          M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(),
            N.parent === null &&
              N.matrixWorldAutoUpdate === !0 &&
              N.updateMatrixWorld(),
            le.enabled === !0 &&
              le.isPresenting === !0 &&
              (le.cameraAutoUpdate === !0 && le.updateCamera(N),
              (N = le.getCamera())),
            M.isScene === !0 && M.onBeforeRender(f, M, N, A),
            (g = x.get(M, m.length)),
            g.init(),
            m.push(g),
            V.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse),
            Y.setFromProjectionMatrix(V),
            (ge = this.localClippingEnabled),
            (ee = B.init(this.clippingPlanes, ge)),
            (p = T.get(M, _.length)),
            p.init(),
            _.push(p),
            dt(M, N, 0, f.sortObjects),
            p.finish(),
            f.sortObjects === !0 && p.sort(O, F),
            ee === !0 && B.beginShadows();
          const z = g.state.shadowsArray;
          if (
            (Z.render(z, M, N),
            ee === !0 && B.endShadows(),
            this.info.autoReset === !0 && this.info.reset(),
            J.render(p, M),
            g.setupLights(f.useLegacyLights),
            N.isArrayCamera)
          ) {
            const L = N.cameras;
            for (let H = 0, me = L.length; H < me; H++) {
              const Se = L[H];
              dn(p, M, Se, Se.viewport);
            }
          } else dn(p, M, N);
          A !== null &&
            (Ie.updateMultisampleRenderTarget(A), Ie.updateRenderTargetMipmap(A)),
            M.isScene === !0 && M.onAfterRender(f, M, N),
            he.resetDefaultState(),
            (C = -1),
            (I = null),
            m.pop(),
            m.length > 0 ? (g = m[m.length - 1]) : (g = null),
            _.pop(),
            _.length > 0 ? (p = _[_.length - 1]) : (p = null);
        });
      function dt(M, N, z, L) {
        if (M.visible === !1) return;
        if (M.layers.test(N.layers)) {
          if (M.isGroup) z = M.renderOrder;
          else if (M.isLOD) M.autoUpdate === !0 && M.update(N);
          else if (M.isLight) g.pushLight(M), M.castShadow && g.pushShadow(M);
          else if (M.isSprite) {
            if (!M.frustumCulled || Y.intersectsSprite(M)) {
              L && q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(V);
              const Se = ke.update(M),
                Te = M.material;
              Te.visible && p.push(M, Se, Te, z, q.z, null);
            }
          } else if (
            (M.isMesh || M.isLine || M.isPoints) &&
            (M.isSkinnedMesh &&
              M.skeleton.frame !== ze.render.frame &&
              (M.skeleton.update(), (M.skeleton.frame = ze.render.frame)),
            !M.frustumCulled || Y.intersectsObject(M))
          ) {
            L && q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(V);
            const Se = ke.update(M),
              Te = M.material;
            if (Array.isArray(Te)) {
              const Ae = Se.groups;
              for (let we = 0, Ce = Ae.length; we < Ce; we++) {
                const Le = Ae[we],
                  Ge = Te[Le.materialIndex];
                Ge && Ge.visible && p.push(M, Se, Ge, z, q.z, Le);
              }
            } else Te.visible && p.push(M, Se, Te, z, q.z, null);
          }
        }
        const me = M.children;
        for (let Se = 0, Te = me.length; Se < Te; Se++) dt(me[Se], N, z, L);
      }
      function dn(M, N, z, L) {
        const H = M.opaque,
          me = M.transmissive,
          Se = M.transparent;
        g.setupLightsView(z),
          ee === !0 && B.setGlobalState(f.clippingPlanes, z),
          me.length > 0 && Ze(H, me, N, z),
          L && xe.viewport(D.copy(L)),
          H.length > 0 && It(H, N, z),
          me.length > 0 && It(me, N, z),
          Se.length > 0 && It(Se, N, z),
          xe.buffers.depth.setTest(!0),
          xe.buffers.depth.setMask(!0),
          xe.buffers.color.setMask(!0),
          xe.setPolygonOffset(!1);
      }
      function Ze(M, N, z, L) {
        if (ae === null) {
          const Te = ne.isWebGL2;
          ae = new cn(1024, 1024, {
            generateMipmaps: !0,
            type: Me.has("EXT_color_buffer_half_float") ? Vi : Un,
            minFilter: On,
            samples: Te && a === !0 ? 4 : 0
          });
        }
        const H = f.getRenderTarget();
        f.setRenderTarget(ae), f.clear();
        const me = f.toneMapping;
        (f.toneMapping = on),
          It(M, z, L),
          Ie.updateMultisampleRenderTarget(ae),
          Ie.updateRenderTargetMipmap(ae);
        let Se = !1;
        for (let Te = 0, Ae = N.length; Te < Ae; Te++) {
          const we = N[Te],
            Ce = we.object,
            Le = we.geometry,
            Ge = we.material,
            gt = we.group;
          if (Ge.side === qt && Ce.layers.test(L.layers)) {
            const Ut = Ge.side;
            (Ge.side = Tt),
              (Ge.needsUpdate = !0),
              Ht(Ce, z, L, Le, Ge, gt),
              (Ge.side = Ut),
              (Ge.needsUpdate = !0),
              (Se = !0);
          }
        }
        Se === !0 &&
          (Ie.updateMultisampleRenderTarget(ae), Ie.updateRenderTargetMipmap(ae)),
          f.setRenderTarget(H),
          (f.toneMapping = me);
      }
      function It(M, N, z) {
        const L = N.isScene === !0 ? N.overrideMaterial : null;
        for (let H = 0, me = M.length; H < me; H++) {
          const Se = M[H],
            Te = Se.object,
            Ae = Se.geometry,
            we = L === null ? Se.material : L,
            Ce = Se.group;
          Te.layers.test(z.layers) && Ht(Te, N, z, Ae, we, Ce);
        }
      }
      function Ht(M, N, z, L, H, me) {
        M.onBeforeRender(f, N, z, L, H, me),
          M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, M.matrixWorld),
          M.normalMatrix.getNormalMatrix(M.modelViewMatrix),
          H.onBeforeRender(f, N, z, L, M, me),
          H.transparent === !0 && H.side === qt && H.forceSinglePass === !1
            ? ((H.side = Tt),
              (H.needsUpdate = !0),
              f.renderBufferDirect(z, N, L, H, M, me),
              (H.side = Kt),
              (H.needsUpdate = !0),
              f.renderBufferDirect(z, N, L, H, M, me),
              (H.side = qt))
            : f.renderBufferDirect(z, N, L, H, M, me),
          M.onAfterRender(f, N, z, L, H, me);
      }
      function Ji(M, N, z) {
        N.isScene !== !0 && (N = ie);
        const L = fe.get(M),
          H = g.state.lights,
          me = g.state.shadowsArray,
          Se = H.state.version,
          Te = Ke.getParameters(M, H.state, me, N, z),
          Ae = Ke.getProgramCacheKey(Te);
        let we = L.programs;
        (L.environment = M.isMeshStandardMaterial ? N.environment : null),
          (L.fog = N.fog),
          (L.envMap = (M.isMeshStandardMaterial ? ct : nt).get(
            M.envMap || L.environment
          )),
          we === void 0 &&
            (M.addEventListener("dispose", Ye),
            (we = new Map()),
            (L.programs = we));
        let Ce = we.get(Ae);
        if (Ce !== void 0) {
          if (L.currentProgram === Ce && L.lightsStateVersion === Se)
            return Va(M, Te), Ce;
        } else
          (Te.uniforms = Ke.getUniforms(M)),
            M.onBuild(z, Te, f),
            M.onBeforeCompile(Te, f),
            (Ce = Ke.acquireProgram(Te, Ae)),
            we.set(Ae, Ce),
            (L.uniforms = Te.uniforms);
        const Le = L.uniforms;
        ((!M.isShaderMaterial && !M.isRawShaderMaterial) || M.clipping === !0) &&
          (Le.clippingPlanes = B.uniform),
          Va(M, Te),
          (L.needsLights = Qc(M)),
          (L.lightsStateVersion = Se),
          L.needsLights &&
            ((Le.ambientLightColor.value = H.state.ambient),
            (Le.lightProbe.value = H.state.probe),
            (Le.directionalLights.value = H.state.directional),
            (Le.directionalLightShadows.value = H.state.directionalShadow),
            (Le.spotLights.value = H.state.spot),
            (Le.spotLightShadows.value = H.state.spotShadow),
            (Le.rectAreaLights.value = H.state.rectArea),
            (Le.ltc_1.value = H.state.rectAreaLTC1),
            (Le.ltc_2.value = H.state.rectAreaLTC2),
            (Le.pointLights.value = H.state.point),
            (Le.pointLightShadows.value = H.state.pointShadow),
            (Le.hemisphereLights.value = H.state.hemi),
            (Le.directionalShadowMap.value = H.state.directionalShadowMap),
            (Le.directionalShadowMatrix.value = H.state.directionalShadowMatrix),
            (Le.spotShadowMap.value = H.state.spotShadowMap),
            (Le.spotLightMatrix.value = H.state.spotLightMatrix),
            (Le.spotLightMap.value = H.state.spotLightMap),
            (Le.pointShadowMap.value = H.state.pointShadowMap),
            (Le.pointShadowMatrix.value = H.state.pointShadowMatrix));
        const Ge = Ce.getUniforms(),
          gt = As.seqWithValue(Ge.seq, Le);
        return (L.currentProgram = Ce), (L.uniformsList = gt), Ce;
      }
      function Va(M, N) {
        const z = fe.get(M);
        (z.outputEncoding = N.outputEncoding),
          (z.instancing = N.instancing),
          (z.skinning = N.skinning),
          (z.morphTargets = N.morphTargets),
          (z.morphNormals = N.morphNormals),
          (z.morphColors = N.morphColors),
          (z.morphTargetsCount = N.morphTargetsCount),
          (z.numClippingPlanes = N.numClippingPlanes),
          (z.numIntersection = N.numClipIntersection),
          (z.vertexAlphas = N.vertexAlphas),
          (z.vertexTangents = N.vertexTangents),
          (z.toneMapping = N.toneMapping);
      }
      function $c(M, N, z, L, H) {
        N.isScene !== !0 && (N = ie), Ie.resetTextureUnits();
        const me = N.fog,
          Se = L.isMeshStandardMaterial ? N.environment : null,
          Te =
            A === null
              ? f.outputEncoding
              : A.isXRRenderTarget === !0
              ? A.texture.encoding
              : Fn,
          Ae = (L.isMeshStandardMaterial ? ct : nt).get(L.envMap || Se),
          we =
            L.vertexColors === !0 &&
            !!z.attributes.color &&
            z.attributes.color.itemSize === 4,
          Ce = !!L.normalMap && !!z.attributes.tangent,
          Le = !!z.morphAttributes.position,
          Ge = !!z.morphAttributes.normal,
          gt = !!z.morphAttributes.color,
          Ut = L.toneMapped ? f.toneMapping : on,
          yn =
            z.morphAttributes.position ||
            z.morphAttributes.normal ||
            z.morphAttributes.color,
          $e = yn !== void 0 ? yn.length : 0,
          Oe = fe.get(L),
          js = g.state.lights;
        if (ee === !0 && (ge === !0 || M !== I)) {
          const bt = M === I && L.id === C;
          B.setState(L, M, bt);
        }
        let st = !1;
        L.version === Oe.__version
          ? ((Oe.needsLights && Oe.lightsStateVersion !== js.state.version) ||
              Oe.outputEncoding !== Te ||
              (H.isInstancedMesh && Oe.instancing === !1) ||
              (!H.isInstancedMesh && Oe.instancing === !0) ||
              (H.isSkinnedMesh && Oe.skinning === !1) ||
              (!H.isSkinnedMesh && Oe.skinning === !0) ||
              Oe.envMap !== Ae ||
              (L.fog === !0 && Oe.fog !== me) ||
              (Oe.numClippingPlanes !== void 0 &&
                (Oe.numClippingPlanes !== B.numPlanes ||
                  Oe.numIntersection !== B.numIntersection)) ||
              Oe.vertexAlphas !== we ||
              Oe.vertexTangents !== Ce ||
              Oe.morphTargets !== Le ||
              Oe.morphNormals !== Ge ||
              Oe.morphColors !== gt ||
              Oe.toneMapping !== Ut ||
              (ne.isWebGL2 === !0 && Oe.morphTargetsCount !== $e)) &&
            (st = !0)
          : ((st = !0), (Oe.__version = L.version));
        let Tn = Oe.currentProgram;
        st === !0 && (Tn = Ji(L, N, H));
        let Ga = !1,
          wi = !1,
          Ks = !1;
        const _t = Tn.getUniforms(),
          bn = Oe.uniforms;
        if (
          (xe.useProgram(Tn.program) && ((Ga = !0), (wi = !0), (Ks = !0)),
          L.id !== C && ((C = L.id), (wi = !0)),
          Ga || I !== M)
        ) {
          if (
            (_t.setValue(U, "projectionMatrix", M.projectionMatrix),
            ne.logarithmicDepthBuffer &&
              _t.setValue(
                U,
                "logDepthBufFC",
                2 / (Math.log(M.far + 1) / Math.LN2)
              ),
            I !== M && ((I = M), (wi = !0), (Ks = !0)),
            L.isShaderMaterial ||
              L.isMeshPhongMaterial ||
              L.isMeshToonMaterial ||
              L.isMeshStandardMaterial ||
              L.envMap)
          ) {
            const bt = _t.map.cameraPosition;
            bt !== void 0 &&
              bt.setValue(U, q.setFromMatrixPosition(M.matrixWorld));
          }
          (L.isMeshPhongMaterial ||
            L.isMeshToonMaterial ||
            L.isMeshLambertMaterial ||
            L.isMeshBasicMaterial ||
            L.isMeshStandardMaterial ||
            L.isShaderMaterial) &&
            _t.setValue(U, "isOrthographic", M.isOrthographicCamera === !0),
            (L.isMeshPhongMaterial ||
              L.isMeshToonMaterial ||
              L.isMeshLambertMaterial ||
              L.isMeshBasicMaterial ||
              L.isMeshStandardMaterial ||
              L.isShaderMaterial ||
              L.isShadowMaterial ||
              H.isSkinnedMesh) &&
              _t.setValue(U, "viewMatrix", M.matrixWorldInverse);
        }
        if (H.isSkinnedMesh) {
          _t.setOptional(U, H, "bindMatrix"),
            _t.setOptional(U, H, "bindMatrixInverse");
          const bt = H.skeleton;
          bt &&
            (ne.floatVertexTextures
              ? (bt.boneTexture === null && bt.computeBoneTexture(),
                _t.setValue(U, "boneTexture", bt.boneTexture, Ie),
                _t.setValue(U, "boneTextureSize", bt.boneTextureSize))
              : console.warn(
                  "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
                ));
        }
        const Ys = z.morphAttributes;
        if (
          ((Ys.position !== void 0 ||
            Ys.normal !== void 0 ||
            (Ys.color !== void 0 && ne.isWebGL2 === !0)) &&
            se.update(H, z, Tn),
          (wi || Oe.receiveShadow !== H.receiveShadow) &&
            ((Oe.receiveShadow = H.receiveShadow),
            _t.setValue(U, "receiveShadow", H.receiveShadow)),
          L.isMeshGouraudMaterial &&
            L.envMap !== null &&
            ((bn.envMap.value = Ae),
            (bn.flipEnvMap.value =
              Ae.isCubeTexture && Ae.isRenderTargetTexture === !1 ? -1 : 1)),
          wi &&
            (_t.setValue(U, "toneMappingExposure", f.toneMappingExposure),
            Oe.needsLights && Jc(bn, Ks),
            me && L.fog === !0 && Mt.refreshFogUniforms(bn, me),
            Mt.refreshMaterialUniforms(bn, L, P, j, ae),
            As.upload(U, Oe.uniformsList, bn, Ie)),
          L.isShaderMaterial &&
            L.uniformsNeedUpdate === !0 &&
            (As.upload(U, Oe.uniformsList, bn, Ie), (L.uniformsNeedUpdate = !1)),
          L.isSpriteMaterial && _t.setValue(U, "center", H.center),
          _t.setValue(U, "modelViewMatrix", H.modelViewMatrix),
          _t.setValue(U, "normalMatrix", H.normalMatrix),
          _t.setValue(U, "modelMatrix", H.matrixWorld),
          L.isShaderMaterial || L.isRawShaderMaterial)
        ) {
          const bt = L.uniformsGroups;
          for (let Zs = 0, eh = bt.length; Zs < eh; Zs++)
            if (ne.isWebGL2) {
              const Ha = bt[Zs];
              pe.update(Ha, Tn), pe.bind(Ha, Tn);
            } else
              console.warn(
                "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
              );
        }
        return Tn;
      }
      function Jc(M, N) {
        (M.ambientLightColor.needsUpdate = N),
          (M.lightProbe.needsUpdate = N),
          (M.directionalLights.needsUpdate = N),
          (M.directionalLightShadows.needsUpdate = N),
          (M.pointLights.needsUpdate = N),
          (M.pointLightShadows.needsUpdate = N),
          (M.spotLights.needsUpdate = N),
          (M.spotLightShadows.needsUpdate = N),
          (M.rectAreaLights.needsUpdate = N),
          (M.hemisphereLights.needsUpdate = N);
      }
      function Qc(M) {
        return (
          M.isMeshLambertMaterial ||
          M.isMeshToonMaterial ||
          M.isMeshPhongMaterial ||
          M.isMeshStandardMaterial ||
          M.isShadowMaterial ||
          (M.isShaderMaterial && M.lights === !0)
        );
      }
      (this.getActiveCubeFace = function () {
        return v;
      }),
        (this.getActiveMipmapLevel = function () {
          return y;
        }),
        (this.getRenderTarget = function () {
          return A;
        }),
        (this.setRenderTargetTextures = function (M, N, z) {
          (fe.get(M.texture).__webglTexture = N),
            (fe.get(M.depthTexture).__webglTexture = z);
          const L = fe.get(M);
          (L.__hasExternalTextures = !0),
            L.__hasExternalTextures &&
              ((L.__autoAllocateDepthBuffer = z === void 0),
              L.__autoAllocateDepthBuffer ||
                (Me.has("WEBGL_multisampled_render_to_texture") === !0 &&
                  (console.warn(
                    "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
                  ),
                  (L.__useRenderToTexture = !1))));
        }),
        (this.setRenderTargetFramebuffer = function (M, N) {
          const z = fe.get(M);
          (z.__webglFramebuffer = N), (z.__useDefaultFramebuffer = N === void 0);
        }),
        (this.setRenderTarget = function (M, N = 0, z = 0) {
          (A = M), (v = N), (y = z);
          let L = !0,
            H = null,
            me = !1,
            Se = !1;
          if (M) {
            const Ae = fe.get(M);
            Ae.__useDefaultFramebuffer !== void 0
              ? (xe.bindFramebuffer(36160, null), (L = !1))
              : Ae.__webglFramebuffer === void 0
              ? Ie.setupRenderTarget(M)
              : Ae.__hasExternalTextures &&
                Ie.rebindTextures(
                  M,
                  fe.get(M.texture).__webglTexture,
                  fe.get(M.depthTexture).__webglTexture
                );
            const we = M.texture;
            (we.isData3DTexture ||
              we.isDataArrayTexture ||
              we.isCompressedArrayTexture) &&
              (Se = !0);
            const Ce = fe.get(M).__webglFramebuffer;
            M.isWebGLCubeRenderTarget
              ? ((H = Ce[N]), (me = !0))
              : ne.isWebGL2 && M.samples > 0 && Ie.useMultisampledRTT(M) === !1
              ? (H = fe.get(M).__webglMultisampledFramebuffer)
              : (H = Ce),
              D.copy(M.viewport),
              S.copy(M.scissor),
              (E = M.scissorTest);
          } else
            D.copy(Q).multiplyScalar(P).floor(),
              S.copy($).multiplyScalar(P).floor(),
              (E = X);
          if (
            (xe.bindFramebuffer(36160, H) &&
              ne.drawBuffers &&
              L &&
              xe.drawBuffers(M, H),
            xe.viewport(D),
            xe.scissor(S),
            xe.setScissorTest(E),
            me)
          ) {
            const Ae = fe.get(M.texture);
            U.framebufferTexture2D(36160, 36064, 34069 + N, Ae.__webglTexture, z);
          } else if (Se) {
            const Ae = fe.get(M.texture),
              we = N || 0;
            U.framebufferTextureLayer(
              36160,
              36064,
              Ae.__webglTexture,
              z || 0,
              we
            );
          }
          C = -1;
        }),
        (this.readRenderTargetPixels = function (M, N, z, L, H, me, Se) {
          if (!(M && M.isWebGLRenderTarget)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
            );
            return;
          }
          let Te = fe.get(M).__webglFramebuffer;
          if ((M.isWebGLCubeRenderTarget && Se !== void 0 && (Te = Te[Se]), Te)) {
            xe.bindFramebuffer(36160, Te);
            try {
              const Ae = M.texture,
                we = Ae.format,
                Ce = Ae.type;
              if (we !== Ot && G.convert(we) !== U.getParameter(35739)) {
                console.error(
                  "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
                );
                return;
              }
              const Le =
                Ce === Vi &&
                (Me.has("EXT_color_buffer_half_float") ||
                  (ne.isWebGL2 && Me.has("EXT_color_buffer_float")));
              if (
                Ce !== Un &&
                G.convert(Ce) !== U.getParameter(35738) &&
                !(
                  Ce === Sn &&
                  (ne.isWebGL2 ||
                    Me.has("OES_texture_float") ||
                    Me.has("WEBGL_color_buffer_float"))
                ) &&
                !Le
              ) {
                console.error(
                  "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
                );
                return;
              }
              N >= 0 &&
                N <= M.width - L &&
                z >= 0 &&
                z <= M.height - H &&
                U.readPixels(N, z, L, H, G.convert(we), G.convert(Ce), me);
            } finally {
              const Ae = A !== null ? fe.get(A).__webglFramebuffer : null;
              xe.bindFramebuffer(36160, Ae);
            }
          }
        }),
        (this.copyFramebufferToTexture = function (M, N, z = 0) {
          const L = Math.pow(2, -z),
            H = Math.floor(N.image.width * L),
            me = Math.floor(N.image.height * L);
          Ie.setTexture2D(N, 0),
            U.copyTexSubImage2D(3553, z, 0, 0, M.x, M.y, H, me),
            xe.unbindTexture();
        }),
        (this.copyTextureToTexture = function (M, N, z, L = 0) {
          const H = N.image.width,
            me = N.image.height,
            Se = G.convert(z.format),
            Te = G.convert(z.type);
          Ie.setTexture2D(z, 0),
            U.pixelStorei(37440, z.flipY),
            U.pixelStorei(37441, z.premultiplyAlpha),
            U.pixelStorei(3317, z.unpackAlignment),
            N.isDataTexture
              ? U.texSubImage2D(3553, L, M.x, M.y, H, me, Se, Te, N.image.data)
              : N.isCompressedTexture
              ? U.compressedTexSubImage2D(
                  3553,
                  L,
                  M.x,
                  M.y,
                  N.mipmaps[0].width,
                  N.mipmaps[0].height,
                  Se,
                  N.mipmaps[0].data
                )
              : U.texSubImage2D(3553, L, M.x, M.y, Se, Te, N.image),
            L === 0 && z.generateMipmaps && U.generateMipmap(3553),
            xe.unbindTexture();
        }),
        (this.copyTextureToTexture3D = function (M, N, z, L, H = 0) {
          if (f.isWebGL1Renderer) {
            console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
            );
            return;
          }
          const me = M.max.x - M.min.x + 1,
            Se = M.max.y - M.min.y + 1,
            Te = M.max.z - M.min.z + 1,
            Ae = G.convert(L.format),
            we = G.convert(L.type);
          let Ce;
          if (L.isData3DTexture) Ie.setTexture3D(L, 0), (Ce = 32879);
          else if (L.isDataArrayTexture) Ie.setTexture2DArray(L, 0), (Ce = 35866);
          else {
            console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
            );
            return;
          }
          U.pixelStorei(37440, L.flipY),
            U.pixelStorei(37441, L.premultiplyAlpha),
            U.pixelStorei(3317, L.unpackAlignment);
          const Le = U.getParameter(3314),
            Ge = U.getParameter(32878),
            gt = U.getParameter(3316),
            Ut = U.getParameter(3315),
            yn = U.getParameter(32877),
            $e = z.isCompressedTexture ? z.mipmaps[0] : z.image;
          U.pixelStorei(3314, $e.width),
            U.pixelStorei(32878, $e.height),
            U.pixelStorei(3316, M.min.x),
            U.pixelStorei(3315, M.min.y),
            U.pixelStorei(32877, M.min.z),
            z.isDataTexture || z.isData3DTexture
              ? U.texSubImage3D(Ce, H, N.x, N.y, N.z, me, Se, Te, Ae, we, $e.data)
              : z.isCompressedArrayTexture
              ? (console.warn(
                  "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
                ),
                U.compressedTexSubImage3D(
                  Ce,
                  H,
                  N.x,
                  N.y,
                  N.z,
                  me,
                  Se,
                  Te,
                  Ae,
                  $e.data
                ))
              : U.texSubImage3D(Ce, H, N.x, N.y, N.z, me, Se, Te, Ae, we, $e),
            U.pixelStorei(3314, Le),
            U.pixelStorei(32878, Ge),
            U.pixelStorei(3316, gt),
            U.pixelStorei(3315, Ut),
            U.pixelStorei(32877, yn),
            H === 0 && L.generateMipmaps && U.generateMipmap(Ce),
            xe.unbindTexture();
        }),
        (this.initTexture = function (M) {
          M.isCubeTexture
            ? Ie.setTextureCube(M, 0)
            : M.isData3DTexture
            ? Ie.setTexture3D(M, 0)
            : M.isDataArrayTexture || M.isCompressedArrayTexture
            ? Ie.setTexture2DArray(M, 0)
            : Ie.setTexture2D(M, 0),
            xe.unbindTexture();
        }),
        (this.resetState = function () {
          (v = 0), (y = 0), (A = null), xe.reset(), he.reset();
        }),
        typeof __THREE_DEVTOOLS__ < "u" &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent("observe", { detail: this })
          );
    }
    get physicallyCorrectLights() {
      return (
        console.warn(
          "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
        ),
        !this.useLegacyLights
      );
    }
    set physicallyCorrectLights(e) {
      console.warn(
        "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
      ),
        (this.useLegacyLights = !e);
    }
  }
  class xg extends cc {}
  xg.prototype.isWebGL1Renderer = !0;
  class vg extends qe {
    constructor() {
      super(),
        (this.isScene = !0),
        (this.type = "Scene"),
        (this.background = null),
        (this.environment = null),
        (this.fog = null),
        (this.backgroundBlurriness = 0),
        (this.backgroundIntensity = 1),
        (this.overrideMaterial = null),
        typeof __THREE_DEVTOOLS__ < "u" &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent("observe", { detail: this })
          );
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        e.background !== null && (this.background = e.background.clone()),
        e.environment !== null && (this.environment = e.environment.clone()),
        e.fog !== null && (this.fog = e.fog.clone()),
        (this.backgroundBlurriness = e.backgroundBlurriness),
        (this.backgroundIntensity = e.backgroundIntensity),
        e.overrideMaterial !== null &&
          (this.overrideMaterial = e.overrideMaterial.clone()),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        this
      );
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return (
        this.fog !== null && (t.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 &&
          (t.object.backgroundBlurriness = this.backgroundBlurriness),
        this.backgroundIntensity !== 1 &&
          (t.object.backgroundIntensity = this.backgroundIntensity),
        t
      );
    }
    get autoUpdate() {
      return (
        console.warn(
          "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
        ),
        this.matrixWorldAutoUpdate
      );
    }
    set autoUpdate(e) {
      console.warn(
        "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
      ),
        (this.matrixWorldAutoUpdate = e);
    }
  }
  class Sg {
    constructor(e, t) {
      (this.isInterleavedBuffer = !0),
        (this.array = e),
        (this.stride = t),
        (this.count = e !== void 0 ? e.length / t : 0),
        (this.usage = Fr),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.version = 0),
        (this.uuid = Vt());
    }
    onUploadCallback() {}
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
    setUsage(e) {
      return (this.usage = e), this;
    }
    copy(e) {
      return (
        (this.array = new e.array.constructor(e.array)),
        (this.count = e.count),
        (this.stride = e.stride),
        (this.usage = e.usage),
        this
      );
    }
    copyAt(e, t, n) {
      (e *= this.stride), (n *= t.stride);
      for (let i = 0, s = this.stride; i < s; i++)
        this.array[e + i] = t.array[n + i];
      return this;
    }
    set(e, t = 0) {
      return this.array.set(e, t), this;
    }
    clone(e) {
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Vt()),
        e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
          (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
      const t = new this.array.constructor(
          e.arrayBuffers[this.array.buffer._uuid]
        ),
        n = new this.constructor(t, this.stride);
      return n.setUsage(this.usage), n;
    }
    onUpload(e) {
      return (this.onUploadCallback = e), this;
    }
    toJSON(e) {
      return (
        e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Vt()),
        e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
          (e.arrayBuffers[this.array.buffer._uuid] = Array.from(
            new Uint32Array(this.array.buffer)
          )),
        {
          uuid: this.uuid,
          buffer: this.array.buffer._uuid,
          type: this.array.constructor.name,
          stride: this.stride
        }
      );
    }
  }
  const xt = new R();
  class Qr {
    constructor(e, t, n, i = !1) {
      (this.isInterleavedBufferAttribute = !0),
        (this.name = ""),
        (this.data = e),
        (this.itemSize = t),
        (this.offset = n),
        (this.normalized = i);
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(e) {
      this.data.needsUpdate = e;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.data.count; t < n; t++)
        xt.fromBufferAttribute(this, t),
          xt.applyMatrix4(e),
          this.setXYZ(t, xt.x, xt.y, xt.z);
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        xt.fromBufferAttribute(this, t),
          xt.applyNormalMatrix(e),
          this.setXYZ(t, xt.x, xt.y, xt.z);
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        xt.fromBufferAttribute(this, t),
          xt.transformDirection(e),
          this.setXYZ(t, xt.x, xt.y, xt.z);
      return this;
    }
    setX(e, t) {
      return (
        this.normalized && (t = He(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset] = t),
        this
      );
    }
    setY(e, t) {
      return (
        this.normalized && (t = He(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset + 1] = t),
        this
      );
    }
    setZ(e, t) {
      return (
        this.normalized && (t = He(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset + 2] = t),
        this
      );
    }
    setW(e, t) {
      return (
        this.normalized && (t = He(t, this.array)),
        (this.data.array[e * this.data.stride + this.offset + 3] = t),
        this
      );
    }
    getX(e) {
      let t = this.data.array[e * this.data.stride + this.offset];
      return this.normalized && (t = an(t, this.array)), t;
    }
    getY(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 1];
      return this.normalized && (t = an(t, this.array)), t;
    }
    getZ(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 2];
      return this.normalized && (t = an(t, this.array)), t;
    }
    getW(e) {
      let t = this.data.array[e * this.data.stride + this.offset + 3];
      return this.normalized && (t = an(t, this.array)), t;
    }
    setXY(e, t, n) {
      return (
        (e = e * this.data.stride + this.offset),
        this.normalized && ((t = He(t, this.array)), (n = He(n, this.array))),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        this
      );
    }
    setXYZ(e, t, n, i) {
      return (
        (e = e * this.data.stride + this.offset),
        this.normalized &&
          ((t = He(t, this.array)),
          (n = He(n, this.array)),
          (i = He(i, this.array))),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        (this.data.array[e + 2] = i),
        this
      );
    }
    setXYZW(e, t, n, i, s) {
      return (
        (e = e * this.data.stride + this.offset),
        this.normalized &&
          ((t = He(t, this.array)),
          (n = He(n, this.array)),
          (i = He(i, this.array)),
          (s = He(s, this.array))),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        (this.data.array[e + 2] = i),
        (this.data.array[e + 3] = s),
        this
      );
    }
    clone(e) {
      if (e === void 0) {
        console.log(
          "THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."
        );
        const t = [];
        for (let n = 0; n < this.count; n++) {
          const i = n * this.data.stride + this.offset;
          for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
        }
        return new ut(
          new this.array.constructor(t),
          this.itemSize,
          this.normalized
        );
      } else
        return (
          e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
          e.interleavedBuffers[this.data.uuid] === void 0 &&
            (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
          new Qr(
            e.interleavedBuffers[this.data.uuid],
            this.itemSize,
            this.offset,
            this.normalized
          )
        );
    }
    toJSON(e) {
      if (e === void 0) {
        console.log(
          "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."
        );
        const t = [];
        for (let n = 0; n < this.count; n++) {
          const i = n * this.data.stride + this.offset;
          for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
        }
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: t,
          normalized: this.normalized
        };
      } else
        return (
          e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
          e.interleavedBuffers[this.data.uuid] === void 0 &&
            (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
          {
            isInterleavedBufferAttribute: !0,
            itemSize: this.itemSize,
            data: this.data.uuid,
            offset: this.offset,
            normalized: this.normalized
          }
        );
    }
  }
  const rl = new R(),
    al = new We(),
    ol = new We(),
    Mg = new R(),
    ll = new Re(),
    si = new R();
  class yg extends yt {
    constructor(e, t) {
      super(e, t),
        (this.isSkinnedMesh = !0),
        (this.type = "SkinnedMesh"),
        (this.bindMode = "attached"),
        (this.bindMatrix = new Re()),
        (this.bindMatrixInverse = new Re()),
        (this.boundingBox = null),
        (this.boundingSphere = null);
    }
    computeBoundingBox() {
      const e = this.geometry;
      this.boundingBox === null && (this.boundingBox = new hn()),
        this.boundingBox.makeEmpty();
      const t = e.getAttribute("position");
      for (let n = 0; n < t.count; n++)
        si.fromBufferAttribute(t, n),
          this.applyBoneTransform(n, si),
          this.boundingBox.expandByPoint(si);
    }
    computeBoundingSphere() {
      const e = this.geometry;
      this.boundingSphere === null && (this.boundingSphere = new un()),
        this.boundingSphere.makeEmpty();
      const t = e.getAttribute("position");
      for (let n = 0; n < t.count; n++)
        si.fromBufferAttribute(t, n),
          this.applyBoneTransform(n, si),
          this.boundingSphere.expandByPoint(si);
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.bindMode = e.bindMode),
        this.bindMatrix.copy(e.bindMatrix),
        this.bindMatrixInverse.copy(e.bindMatrixInverse),
        (this.skeleton = e.skeleton),
        this
      );
    }
    bind(e, t) {
      (this.skeleton = e),
        t === void 0 &&
          (this.updateMatrixWorld(!0),
          this.skeleton.calculateInverses(),
          (t = this.matrixWorld)),
        this.bindMatrix.copy(t),
        this.bindMatrixInverse.copy(t).invert();
    }
    pose() {
      this.skeleton.pose();
    }
    normalizeSkinWeights() {
      const e = new We(),
        t = this.geometry.attributes.skinWeight;
      for (let n = 0, i = t.count; n < i; n++) {
        e.fromBufferAttribute(t, n);
        const s = 1 / e.manhattanLength();
        s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0),
          t.setXYZW(n, e.x, e.y, e.z, e.w);
      }
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e),
        this.bindMode === "attached"
          ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
          : this.bindMode === "detached"
          ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
          : console.warn(
              "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
            );
    }
    applyBoneTransform(e, t) {
      const n = this.skeleton,
        i = this.geometry;
      al.fromBufferAttribute(i.attributes.skinIndex, e),
        ol.fromBufferAttribute(i.attributes.skinWeight, e),
        rl.copy(t).applyMatrix4(this.bindMatrix),
        t.set(0, 0, 0);
      for (let s = 0; s < 4; s++) {
        const r = ol.getComponent(s);
        if (r !== 0) {
          const a = al.getComponent(s);
          ll.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]),
            t.addScaledVector(Mg.copy(rl).applyMatrix4(ll), r);
        }
      }
      return t.applyMatrix4(this.bindMatrixInverse);
    }
    boneTransform(e, t) {
      return (
        console.warn(
          "THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."
        ),
        this.applyBoneTransform(e, t)
      );
    }
  }
  class hc extends qe {
    constructor() {
      super(), (this.isBone = !0), (this.type = "Bone");
    }
  }
  class Tg extends lt {
    constructor(e = null, t = 1, n = 1, i, s, r, a, l, c = at, h = at, u, d) {
      super(null, r, a, l, c, h, i, s, u, d),
        (this.isDataTexture = !0),
        (this.image = { data: e, width: t, height: n }),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  }
  const cl = new Re(),
    bg = new Re();
  class ea {
    constructor(e = [], t = []) {
      (this.uuid = Vt()),
        (this.bones = e.slice(0)),
        (this.boneInverses = t),
        (this.boneMatrices = null),
        (this.boneTexture = null),
        (this.boneTextureSize = 0),
        (this.frame = -1),
        this.init();
    }
    init() {
      const e = this.bones,
        t = this.boneInverses;
      if (((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0))
        this.calculateInverses();
      else if (e.length !== t.length) {
        console.warn(
          "THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."
        ),
          (this.boneInverses = []);
        for (let n = 0, i = this.bones.length; n < i; n++)
          this.boneInverses.push(new Re());
      }
    }
    calculateInverses() {
      this.boneInverses.length = 0;
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const n = new Re();
        this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(),
          this.boneInverses.push(n);
      }
    }
    pose() {
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const n = this.bones[e];
        n && n.matrixWorld.copy(this.boneInverses[e]).invert();
      }
      for (let e = 0, t = this.bones.length; e < t; e++) {
        const n = this.bones[e];
        n &&
          (n.parent && n.parent.isBone
            ? (n.matrix.copy(n.parent.matrixWorld).invert(),
              n.matrix.multiply(n.matrixWorld))
            : n.matrix.copy(n.matrixWorld),
          n.matrix.decompose(n.position, n.quaternion, n.scale));
      }
    }
    update() {
      const e = this.bones,
        t = this.boneInverses,
        n = this.boneMatrices,
        i = this.boneTexture;
      for (let s = 0, r = e.length; s < r; s++) {
        const a = e[s] ? e[s].matrixWorld : bg;
        cl.multiplyMatrices(a, t[s]), cl.toArray(n, s * 16);
      }
      i !== null && (i.needsUpdate = !0);
    }
    clone() {
      return new ea(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
      let e = Math.sqrt(this.bones.length * 4);
      (e = Wl(e)), (e = Math.max(e, 4));
      const t = new Float32Array(e * e * 4);
      t.set(this.boneMatrices);
      const n = new Tg(t, e, e, Ot, Sn);
      return (
        (n.needsUpdate = !0),
        (this.boneMatrices = t),
        (this.boneTexture = n),
        (this.boneTextureSize = e),
        this
      );
    }
    getBoneByName(e) {
      for (let t = 0, n = this.bones.length; t < n; t++) {
        const i = this.bones[t];
        if (i.name === e) return i;
      }
    }
    dispose() {
      this.boneTexture !== null &&
        (this.boneTexture.dispose(), (this.boneTexture = null));
    }
    fromJSON(e, t) {
      this.uuid = e.uuid;
      for (let n = 0, i = e.bones.length; n < i; n++) {
        const s = e.bones[n];
        let r = t[s];
        r === void 0 &&
          (console.warn("THREE.Skeleton: No bone found with UUID:", s),
          (r = new hc())),
          this.bones.push(r),
          this.boneInverses.push(new Re().fromArray(e.boneInverses[n]));
      }
      return this.init(), this;
    }
    toJSON() {
      const e = {
        metadata: {
          version: 4.5,
          type: "Skeleton",
          generator: "Skeleton.toJSON"
        },
        bones: [],
        boneInverses: []
      };
      e.uuid = this.uuid;
      const t = this.bones,
        n = this.boneInverses;
      for (let i = 0, s = t.length; i < s; i++) {
        const r = t[i];
        e.bones.push(r.uuid);
        const a = n[i];
        e.boneInverses.push(a.toArray());
      }
      return e;
    }
  }
  class hl extends ut {
    constructor(e, t, n, i = 1) {
      super(e, t, n),
        (this.isInstancedBufferAttribute = !0),
        (this.meshPerAttribute = i);
    }
    copy(e) {
      return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
    }
    toJSON() {
      const e = super.toJSON();
      return (
        (e.meshPerAttribute = this.meshPerAttribute),
        (e.isInstancedBufferAttribute = !0),
        e
      );
    }
  }
  const ri = new Re(),
    ul = new Re(),
    vs = [],
    dl = new hn(),
    Ag = new Re(),
    Pi = new yt(),
    Di = new un();
  class Eg extends yt {
    constructor(e, t, n) {
      super(e, t),
        (this.isInstancedMesh = !0),
        (this.instanceMatrix = new hl(new Float32Array(n * 16), 16)),
        (this.instanceColor = null),
        (this.count = n),
        (this.boundingBox = null),
        (this.boundingSphere = null);
      for (let i = 0; i < n; i++) this.setMatrixAt(i, Ag);
    }
    computeBoundingBox() {
      const e = this.geometry,
        t = this.count;
      this.boundingBox === null && (this.boundingBox = new hn()),
        e.boundingBox === null && e.computeBoundingBox(),
        this.boundingBox.makeEmpty();
      for (let n = 0; n < t; n++)
        this.getMatrixAt(n, ri),
          dl.copy(e.boundingBox).applyMatrix4(ri),
          this.boundingBox.union(dl);
    }
    computeBoundingSphere() {
      const e = this.geometry,
        t = this.count;
      this.boundingSphere === null && (this.boundingSphere = new un()),
        e.boundingSphere === null && e.computeBoundingSphere(),
        this.boundingSphere.makeEmpty();
      for (let n = 0; n < t; n++)
        this.getMatrixAt(n, ri),
          Di.copy(e.boundingSphere).applyMatrix4(ri),
          this.boundingSphere.union(Di);
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        this.instanceMatrix.copy(e.instanceMatrix),
        e.instanceColor !== null &&
          (this.instanceColor = e.instanceColor.clone()),
        (this.count = e.count),
        this
      );
    }
    getColorAt(e, t) {
      t.fromArray(this.instanceColor.array, e * 3);
    }
    getMatrixAt(e, t) {
      t.fromArray(this.instanceMatrix.array, e * 16);
    }
    raycast(e, t) {
      const n = this.matrixWorld,
        i = this.count;
      if (
        ((Pi.geometry = this.geometry),
        (Pi.material = this.material),
        Pi.material !== void 0 &&
          (this.boundingSphere === null && this.computeBoundingSphere(),
          Di.copy(this.boundingSphere),
          Di.applyMatrix4(n),
          e.ray.intersectsSphere(Di) !== !1))
      )
        for (let s = 0; s < i; s++) {
          this.getMatrixAt(s, ri),
            ul.multiplyMatrices(n, ri),
            (Pi.matrixWorld = ul),
            Pi.raycast(e, vs);
          for (let r = 0, a = vs.length; r < a; r++) {
            const l = vs[r];
            (l.instanceId = s), (l.object = this), t.push(l);
          }
          vs.length = 0;
        }
    }
    setColorAt(e, t) {
      this.instanceColor === null &&
        (this.instanceColor = new hl(
          new Float32Array(this.instanceMatrix.count * 3),
          3
        )),
        t.toArray(this.instanceColor.array, e * 3);
    }
    setMatrixAt(e, t) {
      t.toArray(this.instanceMatrix.array, e * 16);
    }
    updateMorphTargets() {}
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  class ta extends jt {
    constructor(e) {
      super(),
        (this.isLineBasicMaterial = !0),
        (this.type = "LineBasicMaterial"),
        (this.color = new ye(16777215)),
        (this.map = null),
        (this.linewidth = 1),
        (this.linecap = "round"),
        (this.linejoin = "round"),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.linewidth = e.linewidth),
        (this.linecap = e.linecap),
        (this.linejoin = e.linejoin),
        (this.fog = e.fog),
        this
      );
    }
  }
  const fl = new R(),
    pl = new R(),
    ml = new Re(),
    Ar = new Yr(),
    Ss = new un();
  class na extends qe {
    constructor(e = new Rt(), t = new ta()) {
      super(),
        (this.isLine = !0),
        (this.type = "Line"),
        (this.geometry = e),
        (this.material = t),
        this.updateMorphTargets();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.material = e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    computeLineDistances() {
      const e = this.geometry;
      if (e.index === null) {
        const t = e.attributes.position,
          n = [0];
        for (let i = 1, s = t.count; i < s; i++)
          fl.fromBufferAttribute(t, i - 1),
            pl.fromBufferAttribute(t, i),
            (n[i] = n[i - 1]),
            (n[i] += fl.distanceTo(pl));
        e.setAttribute("lineDistance", new Ct(n, 1));
      } else
        console.warn(
          "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
        );
      return this;
    }
    raycast(e, t) {
      const n = this.geometry,
        i = this.matrixWorld,
        s = e.params.Line.threshold,
        r = n.drawRange;
      if (
        (n.boundingSphere === null && n.computeBoundingSphere(),
        Ss.copy(n.boundingSphere),
        Ss.applyMatrix4(i),
        (Ss.radius += s),
        e.ray.intersectsSphere(Ss) === !1)
      )
        return;
      ml.copy(i).invert(), Ar.copy(e.ray).applyMatrix4(ml);
      const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        l = a * a,
        c = new R(),
        h = new R(),
        u = new R(),
        d = new R(),
        p = this.isLineSegments ? 2 : 1,
        g = n.index,
        m = n.attributes.position;
      if (g !== null) {
        const f = Math.max(0, r.start),
          b = Math.min(g.count, r.start + r.count);
        for (let v = f, y = b - 1; v < y; v += p) {
          const A = g.getX(v),
            C = g.getX(v + 1);
          if (
            (c.fromBufferAttribute(m, A),
            h.fromBufferAttribute(m, C),
            Ar.distanceSqToSegment(c, h, d, u) > l)
          )
            continue;
          d.applyMatrix4(this.matrixWorld);
          const D = e.ray.origin.distanceTo(d);
          D < e.near ||
            D > e.far ||
            t.push({
              distance: D,
              point: u.clone().applyMatrix4(this.matrixWorld),
              index: v,
              face: null,
              faceIndex: null,
              object: this
            });
        }
      } else {
        const f = Math.max(0, r.start),
          b = Math.min(m.count, r.start + r.count);
        for (let v = f, y = b - 1; v < y; v += p) {
          if (
            (c.fromBufferAttribute(m, v),
            h.fromBufferAttribute(m, v + 1),
            Ar.distanceSqToSegment(c, h, d, u) > l)
          )
            continue;
          d.applyMatrix4(this.matrixWorld);
          const C = e.ray.origin.distanceTo(d);
          C < e.near ||
            C > e.far ||
            t.push({
              distance: C,
              point: u.clone().applyMatrix4(this.matrixWorld),
              index: v,
              face: null,
              faceIndex: null,
              object: this
            });
        }
      }
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes,
        n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let s = 0, r = i.length; s < r; s++) {
            const a = i[s].name || String(s);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[a] = s);
          }
        }
      }
    }
  }
  const gl = new R(),
    _l = new R();
  class uc extends na {
    constructor(e, t) {
      super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
    }
    computeLineDistances() {
      const e = this.geometry;
      if (e.index === null) {
        const t = e.attributes.position,
          n = [];
        for (let i = 0, s = t.count; i < s; i += 2)
          gl.fromBufferAttribute(t, i),
            _l.fromBufferAttribute(t, i + 1),
            (n[i] = i === 0 ? 0 : n[i - 1]),
            (n[i + 1] = n[i] + gl.distanceTo(_l));
        e.setAttribute("lineDistance", new Ct(n, 1));
      } else
        console.warn(
          "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
        );
      return this;
    }
  }
  class wg extends na {
    constructor(e, t) {
      super(e, t), (this.isLineLoop = !0), (this.type = "LineLoop");
    }
  }
  class dc extends jt {
    constructor(e) {
      super(),
        (this.isPointsMaterial = !0),
        (this.type = "PointsMaterial"),
        (this.color = new ye(16777215)),
        (this.map = null),
        (this.alphaMap = null),
        (this.size = 1),
        (this.sizeAttenuation = !0),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.map = e.map),
        (this.alphaMap = e.alphaMap),
        (this.size = e.size),
        (this.sizeAttenuation = e.sizeAttenuation),
        (this.fog = e.fog),
        this
      );
    }
  }
  const xl = new Re(),
    Vr = new Yr(),
    Ms = new un(),
    ys = new R();
  class Cg extends qe {
    constructor(e = new Rt(), t = new dc()) {
      super(),
        (this.isPoints = !0),
        (this.type = "Points"),
        (this.geometry = e),
        (this.material = t),
        this.updateMorphTargets();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.material = e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    raycast(e, t) {
      const n = this.geometry,
        i = this.matrixWorld,
        s = e.params.Points.threshold,
        r = n.drawRange;
      if (
        (n.boundingSphere === null && n.computeBoundingSphere(),
        Ms.copy(n.boundingSphere),
        Ms.applyMatrix4(i),
        (Ms.radius += s),
        e.ray.intersectsSphere(Ms) === !1)
      )
        return;
      xl.copy(i).invert(), Vr.copy(e.ray).applyMatrix4(xl);
      const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        l = a * a,
        c = n.index,
        u = n.attributes.position;
      if (c !== null) {
        const d = Math.max(0, r.start),
          p = Math.min(c.count, r.start + r.count);
        for (let g = d, _ = p; g < _; g++) {
          const m = c.getX(g);
          ys.fromBufferAttribute(u, m), vl(ys, m, l, i, e, t, this);
        }
      } else {
        const d = Math.max(0, r.start),
          p = Math.min(u.count, r.start + r.count);
        for (let g = d, _ = p; g < _; g++)
          ys.fromBufferAttribute(u, g), vl(ys, g, l, i, e, t, this);
      }
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes,
        n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let s = 0, r = i.length; s < r; s++) {
            const a = i[s].name || String(s);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[a] = s);
          }
        }
      }
    }
  }
  function vl(o, e, t, n, i, s, r) {
    const a = Vr.distanceSqToPoint(o);
    if (a < t) {
      const l = new R();
      Vr.closestPointToPoint(o, l), l.applyMatrix4(n);
      const c = i.ray.origin.distanceTo(l);
      if (c < i.near || c > i.far) return;
      s.push({
        distance: c,
        distanceToRay: Math.sqrt(a),
        point: l,
        index: e,
        face: null,
        object: r
      });
    }
  }
  class Sx extends lt {
    constructor(e, t, n, i, s, r, a, l, c) {
      super(e, t, n, i, s, r, a, l, c),
        (this.isVideoTexture = !0),
        (this.minFilter = r !== void 0 ? r : ot),
        (this.magFilter = s !== void 0 ? s : ot),
        (this.generateMipmaps = !1);
      const h = this;
      function u() {
        (h.needsUpdate = !0), e.requestVideoFrameCallback(u);
      }
      "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(u);
    }
    clone() {
      return new this.constructor(this.image).copy(this);
    }
    update() {
      const e = this.image;
      "requestVideoFrameCallback" in e === !1 &&
        e.readyState >= e.HAVE_CURRENT_DATA &&
        (this.needsUpdate = !0);
    }
  }
  class Mx extends Yt {
    constructor(e) {
      super(e),
        (this.isRawShaderMaterial = !0),
        (this.type = "RawShaderMaterial");
    }
  }
  class ia extends jt {
    constructor(e) {
      super(),
        (this.isMeshStandardMaterial = !0),
        (this.defines = { STANDARD: "" }),
        (this.type = "MeshStandardMaterial"),
        (this.color = new ye(16777215)),
        (this.roughness = 1),
        (this.metalness = 0),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new ye(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = Gl),
        (this.normalScale = new De(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.roughnessMap = null),
        (this.metalnessMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapIntensity = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.flatShading = !1),
        (this.fog = !0),
        this.setValues(e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.defines = { STANDARD: "" }),
        this.color.copy(e.color),
        (this.roughness = e.roughness),
        (this.metalness = e.metalness),
        (this.map = e.map),
        (this.lightMap = e.lightMap),
        (this.lightMapIntensity = e.lightMapIntensity),
        (this.aoMap = e.aoMap),
        (this.aoMapIntensity = e.aoMapIntensity),
        this.emissive.copy(e.emissive),
        (this.emissiveMap = e.emissiveMap),
        (this.emissiveIntensity = e.emissiveIntensity),
        (this.bumpMap = e.bumpMap),
        (this.bumpScale = e.bumpScale),
        (this.normalMap = e.normalMap),
        (this.normalMapType = e.normalMapType),
        this.normalScale.copy(e.normalScale),
        (this.displacementMap = e.displacementMap),
        (this.displacementScale = e.displacementScale),
        (this.displacementBias = e.displacementBias),
        (this.roughnessMap = e.roughnessMap),
        (this.metalnessMap = e.metalnessMap),
        (this.alphaMap = e.alphaMap),
        (this.envMap = e.envMap),
        (this.envMapIntensity = e.envMapIntensity),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.wireframeLinecap = e.wireframeLinecap),
        (this.wireframeLinejoin = e.wireframeLinejoin),
        (this.flatShading = e.flatShading),
        (this.fog = e.fog),
        this
      );
    }
  }
  class Vn extends ia {
    constructor(e) {
      super(),
        (this.isMeshPhysicalMaterial = !0),
        (this.defines = { STANDARD: "", PHYSICAL: "" }),
        (this.type = "MeshPhysicalMaterial"),
        (this.clearcoatMap = null),
        (this.clearcoatRoughness = 0),
        (this.clearcoatRoughnessMap = null),
        (this.clearcoatNormalScale = new De(1, 1)),
        (this.clearcoatNormalMap = null),
        (this.ior = 1.5),
        Object.defineProperty(this, "reflectivity", {
          get: function () {
            return ht((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
          },
          set: function (t) {
            this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
          }
        }),
        (this.iridescenceMap = null),
        (this.iridescenceIOR = 1.3),
        (this.iridescenceThicknessRange = [100, 400]),
        (this.iridescenceThicknessMap = null),
        (this.sheenColor = new ye(0)),
        (this.sheenColorMap = null),
        (this.sheenRoughness = 1),
        (this.sheenRoughnessMap = null),
        (this.transmissionMap = null),
        (this.thickness = 0),
        (this.thicknessMap = null),
        (this.attenuationDistance = 1 / 0),
        (this.attenuationColor = new ye(1, 1, 1)),
        (this.specularIntensity = 1),
        (this.specularIntensityMap = null),
        (this.specularColor = new ye(1, 1, 1)),
        (this.specularColorMap = null),
        (this._sheen = 0),
        (this._clearcoat = 0),
        (this._iridescence = 0),
        (this._transmission = 0),
        this.setValues(e);
    }
    get sheen() {
      return this._sheen;
    }
    set sheen(e) {
      this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
    }
    get clearcoat() {
      return this._clearcoat;
    }
    set clearcoat(e) {
      this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
    }
    get iridescence() {
      return this._iridescence;
    }
    set iridescence(e) {
      this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e);
    }
    get transmission() {
      return this._transmission;
    }
    set transmission(e) {
      this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.defines = { STANDARD: "", PHYSICAL: "" }),
        (this.clearcoat = e.clearcoat),
        (this.clearcoatMap = e.clearcoatMap),
        (this.clearcoatRoughness = e.clearcoatRoughness),
        (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
        (this.clearcoatNormalMap = e.clearcoatNormalMap),
        this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
        (this.ior = e.ior),
        (this.iridescence = e.iridescence),
        (this.iridescenceMap = e.iridescenceMap),
        (this.iridescenceIOR = e.iridescenceIOR),
        (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
        (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
        (this.sheen = e.sheen),
        this.sheenColor.copy(e.sheenColor),
        (this.sheenColorMap = e.sheenColorMap),
        (this.sheenRoughness = e.sheenRoughness),
        (this.sheenRoughnessMap = e.sheenRoughnessMap),
        (this.transmission = e.transmission),
        (this.transmissionMap = e.transmissionMap),
        (this.thickness = e.thickness),
        (this.thicknessMap = e.thicknessMap),
        (this.attenuationDistance = e.attenuationDistance),
        this.attenuationColor.copy(e.attenuationColor),
        (this.specularIntensity = e.specularIntensity),
        (this.specularIntensityMap = e.specularIntensityMap),
        this.specularColor.copy(e.specularColor),
        (this.specularColorMap = e.specularColorMap),
        this
      );
    }
  }
  function _n(o, e, t) {
    return fc(o)
      ? new o.constructor(o.subarray(e, t !== void 0 ? t : o.length))
      : o.slice(e, t);
  }
  function Ts(o, e, t) {
    return !o || (!t && o.constructor === e)
      ? o
      : typeof e.BYTES_PER_ELEMENT == "number"
      ? new e(o)
      : Array.prototype.slice.call(o);
  }
  function fc(o) {
    return ArrayBuffer.isView(o) && !(o instanceof DataView);
  }
  function Rg(o) {
    function e(i, s) {
      return o[i] - o[s];
    }
    const t = o.length,
      n = new Array(t);
    for (let i = 0; i !== t; ++i) n[i] = i;
    return n.sort(e), n;
  }
  function Sl(o, e, t) {
    const n = o.length,
      i = new o.constructor(n);
    for (let s = 0, r = 0; r !== n; ++s) {
      const a = t[s] * e;
      for (let l = 0; l !== e; ++l) i[r++] = o[a + l];
    }
    return i;
  }
  function pc(o, e, t, n) {
    let i = 1,
      s = o[0];
    for (; s !== void 0 && s[n] === void 0; ) s = o[i++];
    if (s === void 0) return;
    let r = s[n];
    if (r !== void 0)
      if (Array.isArray(r))
        do
          (r = s[n]),
            r !== void 0 && (e.push(s.time), t.push.apply(t, r)),
            (s = o[i++]);
        while (s !== void 0);
      else if (r.toArray !== void 0)
        do
          (r = s[n]),
            r !== void 0 && (e.push(s.time), r.toArray(t, t.length)),
            (s = o[i++]);
        while (s !== void 0);
      else
        do (r = s[n]), r !== void 0 && (e.push(s.time), t.push(r)), (s = o[i++]);
        while (s !== void 0);
  }
  class Ki {
    constructor(e, t, n, i) {
      (this.parameterPositions = e),
        (this._cachedIndex = 0),
        (this.resultBuffer = i !== void 0 ? i : new t.constructor(n)),
        (this.sampleValues = t),
        (this.valueSize = n),
        (this.settings = null),
        (this.DefaultSettings_ = {});
    }
    evaluate(e) {
      const t = this.parameterPositions;
      let n = this._cachedIndex,
        i = t[n],
        s = t[n - 1];
      e: {
        t: {
          let r;
          n: {
            i: if (!(e < i)) {
              for (let a = n + 2; ; ) {
                if (i === void 0) {
                  if (e < s) break i;
                  return (
                    (n = t.length),
                    (this._cachedIndex = n),
                    this.copySampleValue_(n - 1)
                  );
                }
                if (n === a) break;
                if (((s = i), (i = t[++n]), e < i)) break t;
              }
              r = t.length;
              break n;
            }
            if (!(e >= s)) {
              const a = t[1];
              e < a && ((n = 2), (s = a));
              for (let l = n - 2; ; ) {
                if (s === void 0)
                  return (this._cachedIndex = 0), this.copySampleValue_(0);
                if (n === l) break;
                if (((i = s), (s = t[--n - 1]), e >= s)) break t;
              }
              (r = n), (n = 0);
              break n;
            }
            break e;
          }
          for (; n < r; ) {
            const a = (n + r) >>> 1;
            e < t[a] ? (r = a) : (n = a + 1);
          }
          if (((i = t[n]), (s = t[n - 1]), s === void 0))
            return (this._cachedIndex = 0), this.copySampleValue_(0);
          if (i === void 0)
            return (
              (n = t.length),
              (this._cachedIndex = n),
              this.copySampleValue_(n - 1)
            );
        }
        (this._cachedIndex = n), this.intervalChanged_(n, s, i);
      }
      return this.interpolate_(n, s, e, i);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e) {
      const t = this.resultBuffer,
        n = this.sampleValues,
        i = this.valueSize,
        s = e * i;
      for (let r = 0; r !== i; ++r) t[r] = n[s + r];
      return t;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {}
  }
  class Ig extends Ki {
    constructor(e, t, n, i) {
      super(e, t, n, i),
        (this._weightPrev = -0),
        (this._offsetPrev = -0),
        (this._weightNext = -0),
        (this._offsetNext = -0),
        (this.DefaultSettings_ = { endingStart: oi, endingEnd: oi });
    }
    intervalChanged_(e, t, n) {
      const i = this.parameterPositions;
      let s = e - 2,
        r = e + 1,
        a = i[s],
        l = i[r];
      if (a === void 0)
        switch (this.getSettings_().endingStart) {
          case li:
            (s = e), (a = 2 * t - n);
            break;
          case ws:
            (s = i.length - 2), (a = t + i[s] - i[s + 1]);
            break;
          default:
            (s = e), (a = n);
        }
      if (l === void 0)
        switch (this.getSettings_().endingEnd) {
          case li:
            (r = e), (l = 2 * n - t);
            break;
          case ws:
            (r = 1), (l = n + i[1] - i[0]);
            break;
          default:
            (r = e - 1), (l = t);
        }
      const c = (n - t) * 0.5,
        h = this.valueSize;
      (this._weightPrev = c / (t - a)),
        (this._weightNext = c / (l - n)),
        (this._offsetPrev = s * h),
        (this._offsetNext = r * h);
    }
    interpolate_(e, t, n, i) {
      const s = this.resultBuffer,
        r = this.sampleValues,
        a = this.valueSize,
        l = e * a,
        c = l - a,
        h = this._offsetPrev,
        u = this._offsetNext,
        d = this._weightPrev,
        p = this._weightNext,
        g = (n - t) / (i - t),
        _ = g * g,
        m = _ * g,
        f = -d * m + 2 * d * _ - d * g,
        b = (1 + d) * m + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1,
        v = (-1 - p) * m + (1.5 + p) * _ + 0.5 * g,
        y = p * m - p * _;
      for (let A = 0; A !== a; ++A)
        s[A] = f * r[h + A] + b * r[c + A] + v * r[l + A] + y * r[u + A];
      return s;
    }
  }
  class mc extends Ki {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
      const s = this.resultBuffer,
        r = this.sampleValues,
        a = this.valueSize,
        l = e * a,
        c = l - a,
        h = (n - t) / (i - t),
        u = 1 - h;
      for (let d = 0; d !== a; ++d) s[d] = r[c + d] * u + r[l + d] * h;
      return s;
    }
  }
  class Lg extends Ki {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e) {
      return this.copySampleValue_(e - 1);
    }
  }
  class Zt {
    constructor(e, t, n, i) {
      if (e === void 0)
        throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (t === void 0 || t.length === 0)
        throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
      (this.name = e),
        (this.times = Ts(t, this.TimeBufferType)),
        (this.values = Ts(n, this.ValueBufferType)),
        this.setInterpolation(i || this.DefaultInterpolation);
    }
    static toJSON(e) {
      const t = e.constructor;
      let n;
      if (t.toJSON !== this.toJSON) n = t.toJSON(e);
      else {
        n = {
          name: e.name,
          times: Ts(e.times, Array),
          values: Ts(e.values, Array)
        };
        const i = e.getInterpolation();
        i !== e.DefaultInterpolation && (n.interpolation = i);
      }
      return (n.type = e.ValueTypeName), n;
    }
    InterpolantFactoryMethodDiscrete(e) {
      return new Lg(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodLinear(e) {
      return new mc(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodSmooth(e) {
      return new Ig(this.times, this.values, this.getValueSize(), e);
    }
    setInterpolation(e) {
      let t;
      switch (e) {
        case Gi:
          t = this.InterpolantFactoryMethodDiscrete;
          break;
        case vi:
          t = this.InterpolantFactoryMethodLinear;
          break;
        case nr:
          t = this.InterpolantFactoryMethodSmooth;
          break;
      }
      if (t === void 0) {
        const n =
          "unsupported interpolation for " +
          this.ValueTypeName +
          " keyframe track named " +
          this.name;
        if (this.createInterpolant === void 0)
          if (e !== this.DefaultInterpolation)
            this.setInterpolation(this.DefaultInterpolation);
          else throw new Error(n);
        return console.warn("THREE.KeyframeTrack:", n), this;
      }
      return (this.createInterpolant = t), this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return Gi;
        case this.InterpolantFactoryMethodLinear:
          return vi;
        case this.InterpolantFactoryMethodSmooth:
          return nr;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(e) {
      if (e !== 0) {
        const t = this.times;
        for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
      }
      return this;
    }
    scale(e) {
      if (e !== 1) {
        const t = this.times;
        for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
      }
      return this;
    }
    trim(e, t) {
      const n = this.times,
        i = n.length;
      let s = 0,
        r = i - 1;
      for (; s !== i && n[s] < e; ) ++s;
      for (; r !== -1 && n[r] > t; ) --r;
      if ((++r, s !== 0 || r !== i)) {
        s >= r && ((r = Math.max(r, 1)), (s = r - 1));
        const a = this.getValueSize();
        (this.times = _n(n, s, r)), (this.values = _n(this.values, s * a, r * a));
      }
      return this;
    }
    validate() {
      let e = !0;
      const t = this.getValueSize();
      t - Math.floor(t) !== 0 &&
        (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
        (e = !1));
      const n = this.times,
        i = this.values,
        s = n.length;
      s === 0 &&
        (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
      let r = null;
      for (let a = 0; a !== s; a++) {
        const l = n[a];
        if (typeof l == "number" && isNaN(l)) {
          console.error(
            "THREE.KeyframeTrack: Time is not a valid number.",
            this,
            a,
            l
          ),
            (e = !1);
          break;
        }
        if (r !== null && r > l) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, r),
            (e = !1);
          break;
        }
        r = l;
      }
      if (i !== void 0 && fc(i))
        for (let a = 0, l = i.length; a !== l; ++a) {
          const c = i[a];
          if (isNaN(c)) {
            console.error(
              "THREE.KeyframeTrack: Value is not a valid number.",
              this,
              a,
              c
            ),
              (e = !1);
            break;
          }
        }
      return e;
    }
    optimize() {
      const e = _n(this.times),
        t = _n(this.values),
        n = this.getValueSize(),
        i = this.getInterpolation() === nr,
        s = e.length - 1;
      let r = 1;
      for (let a = 1; a < s; ++a) {
        let l = !1;
        const c = e[a],
          h = e[a + 1];
        if (c !== h && (a !== 1 || c !== e[0]))
          if (i) l = !0;
          else {
            const u = a * n,
              d = u - n,
              p = u + n;
            for (let g = 0; g !== n; ++g) {
              const _ = t[u + g];
              if (_ !== t[d + g] || _ !== t[p + g]) {
                l = !0;
                break;
              }
            }
          }
        if (l) {
          if (a !== r) {
            e[r] = e[a];
            const u = a * n,
              d = r * n;
            for (let p = 0; p !== n; ++p) t[d + p] = t[u + p];
          }
          ++r;
        }
      }
      if (s > 0) {
        e[r] = e[s];
        for (let a = s * n, l = r * n, c = 0; c !== n; ++c) t[l + c] = t[a + c];
        ++r;
      }
      return (
        r !== e.length
          ? ((this.times = _n(e, 0, r)), (this.values = _n(t, 0, r * n)))
          : ((this.times = e), (this.values = t)),
        this
      );
    }
    clone() {
      const e = _n(this.times, 0),
        t = _n(this.values, 0),
        n = this.constructor,
        i = new n(this.name, e, t);
      return (i.createInterpolant = this.createInterpolant), i;
    }
  }
  Zt.prototype.TimeBufferType = Float32Array;
  Zt.prototype.ValueBufferType = Float32Array;
  Zt.prototype.DefaultInterpolation = vi;
  class bi extends Zt {}
  bi.prototype.ValueTypeName = "bool";
  bi.prototype.ValueBufferType = Array;
  bi.prototype.DefaultInterpolation = Gi;
  bi.prototype.InterpolantFactoryMethodLinear = void 0;
  bi.prototype.InterpolantFactoryMethodSmooth = void 0;
  class gc extends Zt {}
  gc.prototype.ValueTypeName = "color";
  class Wi extends Zt {}
  Wi.prototype.ValueTypeName = "number";
  class Pg extends Ki {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
      const s = this.resultBuffer,
        r = this.sampleValues,
        a = this.valueSize,
        l = (n - t) / (i - t);
      let c = e * a;
      for (let h = c + a; c !== h; c += 4) Gt.slerpFlat(s, 0, r, c - a, r, c, l);
      return s;
    }
  }
  class Bn extends Zt {
    InterpolantFactoryMethodLinear(e) {
      return new Pg(this.times, this.values, this.getValueSize(), e);
    }
  }
  Bn.prototype.ValueTypeName = "quaternion";
  Bn.prototype.DefaultInterpolation = vi;
  Bn.prototype.InterpolantFactoryMethodSmooth = void 0;
  class Ai extends Zt {}
  Ai.prototype.ValueTypeName = "string";
  Ai.prototype.ValueBufferType = Array;
  Ai.prototype.DefaultInterpolation = Gi;
  Ai.prototype.InterpolantFactoryMethodLinear = void 0;
  Ai.prototype.InterpolantFactoryMethodSmooth = void 0;
  class Xi extends Zt {}
  Xi.prototype.ValueTypeName = "vector";
  class Gr {
    constructor(e, t = -1, n, i = jr) {
      (this.name = e),
        (this.tracks = n),
        (this.duration = t),
        (this.blendMode = i),
        (this.uuid = Vt()),
        this.duration < 0 && this.resetDuration();
    }
    static parse(e) {
      const t = [],
        n = e.tracks,
        i = 1 / (e.fps || 1);
      for (let r = 0, a = n.length; r !== a; ++r) t.push(Ng(n[r]).scale(i));
      const s = new this(e.name, e.duration, t, e.blendMode);
      return (s.uuid = e.uuid), s;
    }
    static toJSON(e) {
      const t = [],
        n = e.tracks,
        i = {
          name: e.name,
          duration: e.duration,
          tracks: t,
          uuid: e.uuid,
          blendMode: e.blendMode
        };
      for (let s = 0, r = n.length; s !== r; ++s) t.push(Zt.toJSON(n[s]));
      return i;
    }
    static CreateFromMorphTargetSequence(e, t, n, i) {
      const s = t.length,
        r = [];
      for (let a = 0; a < s; a++) {
        let l = [],
          c = [];
        l.push((a + s - 1) % s, a, (a + 1) % s), c.push(0, 1, 0);
        const h = Rg(l);
        (l = Sl(l, 1, h)),
          (c = Sl(c, 1, h)),
          !i && l[0] === 0 && (l.push(s), c.push(c[0])),
          r.push(
            new Wi(".morphTargetInfluences[" + t[a].name + "]", l, c).scale(1 / n)
          );
      }
      return new this(e, -1, r);
    }
    static findByName(e, t) {
      let n = e;
      if (!Array.isArray(e)) {
        const i = e;
        n = (i.geometry && i.geometry.animations) || i.animations;
      }
      for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
      return null;
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
      const i = {},
        s = /^([\w-]*?)([\d]+)$/;
      for (let a = 0, l = e.length; a < l; a++) {
        const c = e[a],
          h = c.name.match(s);
        if (h && h.length > 1) {
          const u = h[1];
          let d = i[u];
          d || (i[u] = d = []), d.push(c);
        }
      }
      const r = [];
      for (const a in i)
        r.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
      return r;
    }
    static parseAnimation(e, t) {
      if (!e)
        return (
          console.error("THREE.AnimationClip: No animation in JSONLoader data."),
          null
        );
      const n = function (u, d, p, g, _) {
          if (p.length !== 0) {
            const m = [],
              f = [];
            pc(p, m, f, g), m.length !== 0 && _.push(new u(d, m, f));
          }
        },
        i = [],
        s = e.name || "default",
        r = e.fps || 30,
        a = e.blendMode;
      let l = e.length || -1;
      const c = e.hierarchy || [];
      for (let u = 0; u < c.length; u++) {
        const d = c[u].keys;
        if (!(!d || d.length === 0))
          if (d[0].morphTargets) {
            const p = {};
            let g;
            for (g = 0; g < d.length; g++)
              if (d[g].morphTargets)
                for (let _ = 0; _ < d[g].morphTargets.length; _++)
                  p[d[g].morphTargets[_]] = -1;
            for (const _ in p) {
              const m = [],
                f = [];
              for (let b = 0; b !== d[g].morphTargets.length; ++b) {
                const v = d[g];
                m.push(v.time), f.push(v.morphTarget === _ ? 1 : 0);
              }
              i.push(new Wi(".morphTargetInfluence[" + _ + "]", m, f));
            }
            l = p.length * r;
          } else {
            const p = ".bones[" + t[u].name + "]";
            n(Xi, p + ".position", d, "pos", i),
              n(Bn, p + ".quaternion", d, "rot", i),
              n(Xi, p + ".scale", d, "scl", i);
          }
      }
      return i.length === 0 ? null : new this(s, l, i, a);
    }
    resetDuration() {
      const e = this.tracks;
      let t = 0;
      for (let n = 0, i = e.length; n !== i; ++n) {
        const s = this.tracks[n];
        t = Math.max(t, s.times[s.times.length - 1]);
      }
      return (this.duration = t), this;
    }
    trim() {
      for (let e = 0; e < this.tracks.length; e++)
        this.tracks[e].trim(0, this.duration);
      return this;
    }
    validate() {
      let e = !0;
      for (let t = 0; t < this.tracks.length; t++)
        e = e && this.tracks[t].validate();
      return e;
    }
    optimize() {
      for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
      return this;
    }
    clone() {
      const e = [];
      for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
      return new this.constructor(this.name, this.duration, e, this.blendMode);
    }
    toJSON() {
      return this.constructor.toJSON(this);
    }
  }
  function Dg(o) {
    switch (o.toLowerCase()) {
      case "scalar":
      case "double":
      case "float":
      case "number":
      case "integer":
        return Wi;
      case "vector":
      case "vector2":
      case "vector3":
      case "vector4":
        return Xi;
      case "color":
        return gc;
      case "quaternion":
        return Bn;
      case "bool":
      case "boolean":
        return bi;
      case "string":
        return Ai;
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + o);
  }
  function Ng(o) {
    if (o.type === void 0)
      throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const e = Dg(o.type);
    if (o.times === void 0) {
      const t = [],
        n = [];
      pc(o.keys, t, n, "value"), (o.times = t), (o.values = n);
    }
    return e.parse !== void 0
      ? e.parse(o)
      : new e(o.name, o.times, o.values, o.interpolation);
  }
  const zn = {
    enabled: !1,
    files: {},
    add: function (o, e) {
      this.enabled !== !1 && (this.files[o] = e);
    },
    get: function (o) {
      if (this.enabled !== !1) return this.files[o];
    },
    remove: function (o) {
      delete this.files[o];
    },
    clear: function () {
      this.files = {};
    }
  };
  class Og {
    constructor(e, t, n) {
      const i = this;
      let s = !1,
        r = 0,
        a = 0,
        l;
      const c = [];
      (this.onStart = void 0),
        (this.onLoad = e),
        (this.onProgress = t),
        (this.onError = n),
        (this.itemStart = function (h) {
          a++, s === !1 && i.onStart !== void 0 && i.onStart(h, r, a), (s = !0);
        }),
        (this.itemEnd = function (h) {
          r++,
            i.onProgress !== void 0 && i.onProgress(h, r, a),
            r === a && ((s = !1), i.onLoad !== void 0 && i.onLoad());
        }),
        (this.itemError = function (h) {
          i.onError !== void 0 && i.onError(h);
        }),
        (this.resolveURL = function (h) {
          return l ? l(h) : h;
        }),
        (this.setURLModifier = function (h) {
          return (l = h), this;
        }),
        (this.addHandler = function (h, u) {
          return c.push(h, u), this;
        }),
        (this.removeHandler = function (h) {
          const u = c.indexOf(h);
          return u !== -1 && c.splice(u, 2), this;
        }),
        (this.getHandler = function (h) {
          for (let u = 0, d = c.length; u < d; u += 2) {
            const p = c[u],
              g = c[u + 1];
            if ((p.global && (p.lastIndex = 0), p.test(h))) return g;
          }
          return null;
        });
    }
  }
  const Ug = new Og();
  class Ei {
    constructor(e) {
      (this.manager = e !== void 0 ? e : Ug),
        (this.crossOrigin = "anonymous"),
        (this.withCredentials = !1),
        (this.path = ""),
        (this.resourcePath = ""),
        (this.requestHeader = {});
    }
    load() {}
    loadAsync(e, t) {
      const n = this;
      return new Promise(function (i, s) {
        n.load(e, i, t, s);
      });
    }
    parse() {}
    setCrossOrigin(e) {
      return (this.crossOrigin = e), this;
    }
    setWithCredentials(e) {
      return (this.withCredentials = e), this;
    }
    setPath(e) {
      return (this.path = e), this;
    }
    setResourcePath(e) {
      return (this.resourcePath = e), this;
    }
    setRequestHeader(e) {
      return (this.requestHeader = e), this;
    }
  }
  const rn = {};
  class Fg extends Error {
    constructor(e, t) {
      super(e), (this.response = t);
    }
  }
  class Cs extends Ei {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      e === void 0 && (e = ""),
        this.path !== void 0 && (e = this.path + e),
        (e = this.manager.resolveURL(e));
      const s = zn.get(e);
      if (s !== void 0)
        return (
          this.manager.itemStart(e),
          setTimeout(() => {
            t && t(s), this.manager.itemEnd(e);
          }, 0),
          s
        );
      if (rn[e] !== void 0) {
        rn[e].push({ onLoad: t, onProgress: n, onError: i });
        return;
      }
      (rn[e] = []), rn[e].push({ onLoad: t, onProgress: n, onError: i });
      const r = new Request(e, {
          headers: new Headers(this.requestHeader),
          credentials: this.withCredentials ? "include" : "same-origin"
        }),
        a = this.mimeType,
        l = this.responseType;
      fetch(r)
        .then((c) => {
          if (c.status === 200 || c.status === 0) {
            if (
              (c.status === 0 &&
                console.warn("THREE.FileLoader: HTTP Status 0 received."),
              typeof ReadableStream > "u" ||
                c.body === void 0 ||
                c.body.getReader === void 0)
            )
              return c;
            const h = rn[e],
              u = c.body.getReader(),
              d = c.headers.get("Content-Length") || c.headers.get("X-File-Size"),
              p = d ? parseInt(d) : 0,
              g = p !== 0;
            let _ = 0;
            const m = new ReadableStream({
              start(f) {
                b();
                function b() {
                  u.read().then(({ done: v, value: y }) => {
                    if (v) f.close();
                    else {
                      _ += y.byteLength;
                      const A = new ProgressEvent("progress", {
                        lengthComputable: g,
                        loaded: _,
                        total: p
                      });
                      for (let C = 0, I = h.length; C < I; C++) {
                        const D = h[C];
                        D.onProgress && D.onProgress(A);
                      }
                      f.enqueue(y), b();
                    }
                  });
                }
              }
            });
            return new Response(m);
          } else
            throw new Fg(
              `fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,
              c
            );
        })
        .then((c) => {
          switch (l) {
            case "arraybuffer":
              return c.arrayBuffer();
            case "blob":
              return c.blob();
            case "document":
              return c.text().then((h) => new DOMParser().parseFromString(h, a));
            case "json":
              return c.json();
            default:
              if (a === void 0) return c.text();
              {
                const u = /charset="?([^;"\s]*)"?/i.exec(a),
                  d = u && u[1] ? u[1].toLowerCase() : void 0,
                  p = new TextDecoder(d);
                return c.arrayBuffer().then((g) => p.decode(g));
              }
          }
        })
        .then((c) => {
          zn.add(e, c);
          const h = rn[e];
          delete rn[e];
          for (let u = 0, d = h.length; u < d; u++) {
            const p = h[u];
            p.onLoad && p.onLoad(c);
          }
        })
        .catch((c) => {
          const h = rn[e];
          if (h === void 0) throw (this.manager.itemError(e), c);
          delete rn[e];
          for (let u = 0, d = h.length; u < d; u++) {
            const p = h[u];
            p.onError && p.onError(c);
          }
          this.manager.itemError(e);
        })
        .finally(() => {
          this.manager.itemEnd(e);
        }),
        this.manager.itemStart(e);
    }
    setResponseType(e) {
      return (this.responseType = e), this;
    }
    setMimeType(e) {
      return (this.mimeType = e), this;
    }
  }
  class Bg extends Ei {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      this.path !== void 0 && (e = this.path + e),
        (e = this.manager.resolveURL(e));
      const s = this,
        r = zn.get(e);
      if (r !== void 0)
        return (
          s.manager.itemStart(e),
          setTimeout(function () {
            t && t(r), s.manager.itemEnd(e);
          }, 0),
          r
        );
      const a = Hi("img");
      function l() {
        h(), zn.add(e, this), t && t(this), s.manager.itemEnd(e);
      }
      function c(u) {
        h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
      }
      function h() {
        a.removeEventListener("load", l, !1),
          a.removeEventListener("error", c, !1);
      }
      return (
        a.addEventListener("load", l, !1),
        a.addEventListener("error", c, !1),
        e.slice(0, 5) !== "data:" &&
          this.crossOrigin !== void 0 &&
          (a.crossOrigin = this.crossOrigin),
        s.manager.itemStart(e),
        (a.src = e),
        a
      );
    }
  }
  class Ds extends Ei {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      const s = new lt(),
        r = new Bg(this.manager);
      return (
        r.setCrossOrigin(this.crossOrigin),
        r.setPath(this.path),
        r.load(
          e,
          function (a) {
            (s.image = a), (s.needsUpdate = !0), t !== void 0 && t(s);
          },
          n,
          i
        ),
        s
      );
    }
  }
  class Yi extends qe {
    constructor(e, t = 1) {
      super(),
        (this.isLight = !0),
        (this.type = "Light"),
        (this.color = new ye(e)),
        (this.intensity = t);
    }
    dispose() {}
    copy(e, t) {
      return (
        super.copy(e, t),
        this.color.copy(e.color),
        (this.intensity = e.intensity),
        this
      );
    }
    toJSON(e) {
      const t = super.toJSON(e);
      return (
        (t.object.color = this.color.getHex()),
        (t.object.intensity = this.intensity),
        this.groundColor !== void 0 &&
          (t.object.groundColor = this.groundColor.getHex()),
        this.distance !== void 0 && (t.object.distance = this.distance),
        this.angle !== void 0 && (t.object.angle = this.angle),
        this.decay !== void 0 && (t.object.decay = this.decay),
        this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
        this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
        t
      );
    }
  }
  class yx extends Yi {
    constructor(e, t, n) {
      super(e, n),
        (this.isHemisphereLight = !0),
        (this.type = "HemisphereLight"),
        this.position.copy(qe.DEFAULT_UP),
        this.updateMatrix(),
        (this.groundColor = new ye(t));
    }
    copy(e, t) {
      return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
    }
  }
  const Er = new Re(),
    Ml = new R(),
    yl = new R();
  class sa {
    constructor(e) {
      (this.camera = e),
        (this.bias = 0),
        (this.normalBias = 0),
        (this.radius = 1),
        (this.blurSamples = 8),
        (this.mapSize = new De(512, 512)),
        (this.map = null),
        (this.mapPass = null),
        (this.matrix = new Re()),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this._frustum = new Zr()),
        (this._frameExtents = new De(1, 1)),
        (this._viewportCount = 1),
        (this._viewports = [new We(0, 0, 1, 1)]);
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(e) {
      const t = this.camera,
        n = this.matrix;
      Ml.setFromMatrixPosition(e.matrixWorld),
        t.position.copy(Ml),
        yl.setFromMatrixPosition(e.target.matrixWorld),
        t.lookAt(yl),
        t.updateMatrixWorld(),
        Er.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Er),
        n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
        n.multiply(Er);
    }
    getViewport(e) {
      return this._viewports[e];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(e) {
      return (
        (this.camera = e.camera.clone()),
        (this.bias = e.bias),
        (this.radius = e.radius),
        this.mapSize.copy(e.mapSize),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const e = {};
      return (
        this.bias !== 0 && (e.bias = this.bias),
        this.normalBias !== 0 && (e.normalBias = this.normalBias),
        this.radius !== 1 && (e.radius = this.radius),
        (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
          (e.mapSize = this.mapSize.toArray()),
        (e.camera = this.camera.toJSON(!1).object),
        delete e.camera.matrix,
        e
      );
    }
  }
  class zg extends sa {
    constructor() {
      super(new St(50, 1, 0.5, 500)),
        (this.isSpotLightShadow = !0),
        (this.focus = 1);
    }
    updateMatrices(e) {
      const t = this.camera,
        n = Mi * 2 * e.angle * this.focus,
        i = this.mapSize.width / this.mapSize.height,
        s = e.distance || t.far;
      (n !== t.fov || i !== t.aspect || s !== t.far) &&
        ((t.fov = n), (t.aspect = i), (t.far = s), t.updateProjectionMatrix()),
        super.updateMatrices(e);
    }
    copy(e) {
      return super.copy(e), (this.focus = e.focus), this;
    }
  }
  class kg extends Yi {
    constructor(e, t, n = 0, i = Math.PI / 3, s = 0, r = 2) {
      super(e, t),
        (this.isSpotLight = !0),
        (this.type = "SpotLight"),
        this.position.copy(qe.DEFAULT_UP),
        this.updateMatrix(),
        (this.target = new qe()),
        (this.distance = n),
        (this.angle = i),
        (this.penumbra = s),
        (this.decay = r),
        (this.map = null),
        (this.shadow = new zg());
    }
    get power() {
      return this.intensity * Math.PI;
    }
    set power(e) {
      this.intensity = e / Math.PI;
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.distance = e.distance),
        (this.angle = e.angle),
        (this.penumbra = e.penumbra),
        (this.decay = e.decay),
        (this.target = e.target.clone()),
        (this.shadow = e.shadow.clone()),
        this
      );
    }
  }
  const Tl = new Re(),
    Ni = new R(),
    wr = new R();
  class Vg extends sa {
    constructor() {
      super(new St(90, 1, 0.5, 500)),
        (this.isPointLightShadow = !0),
        (this._frameExtents = new De(4, 2)),
        (this._viewportCount = 6),
        (this._viewports = [
          new We(2, 1, 1, 1),
          new We(0, 1, 1, 1),
          new We(3, 1, 1, 1),
          new We(1, 1, 1, 1),
          new We(3, 0, 1, 1),
          new We(1, 0, 1, 1)
        ]),
        (this._cubeDirections = [
          new R(1, 0, 0),
          new R(-1, 0, 0),
          new R(0, 0, 1),
          new R(0, 0, -1),
          new R(0, 1, 0),
          new R(0, -1, 0)
        ]),
        (this._cubeUps = [
          new R(0, 1, 0),
          new R(0, 1, 0),
          new R(0, 1, 0),
          new R(0, 1, 0),
          new R(0, 0, 1),
          new R(0, 0, -1)
        ]);
    }
    updateMatrices(e, t = 0) {
      const n = this.camera,
        i = this.matrix,
        s = e.distance || n.far;
      s !== n.far && ((n.far = s), n.updateProjectionMatrix()),
        Ni.setFromMatrixPosition(e.matrixWorld),
        n.position.copy(Ni),
        wr.copy(n.position),
        wr.add(this._cubeDirections[t]),
        n.up.copy(this._cubeUps[t]),
        n.lookAt(wr),
        n.updateMatrixWorld(),
        i.makeTranslation(-Ni.x, -Ni.y, -Ni.z),
        Tl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Tl);
    }
  }
  class Gg extends Yi {
    constructor(e, t, n = 0, i = 2) {
      super(e, t),
        (this.isPointLight = !0),
        (this.type = "PointLight"),
        (this.distance = n),
        (this.decay = i),
        (this.shadow = new Vg());
    }
    get power() {
      return this.intensity * 4 * Math.PI;
    }
    set power(e) {
      this.intensity = e / (4 * Math.PI);
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.distance = e.distance),
        (this.decay = e.decay),
        (this.shadow = e.shadow.clone()),
        this
      );
    }
  }
  class Hg extends sa {
    constructor() {
      super(new ji(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
    }
  }
  class Wg extends Yi {
    constructor(e, t) {
      super(e, t),
        (this.isDirectionalLight = !0),
        (this.type = "DirectionalLight"),
        this.position.copy(qe.DEFAULT_UP),
        this.updateMatrix(),
        (this.target = new qe()),
        (this.shadow = new Hg());
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(e) {
      return (
        super.copy(e),
        (this.target = e.target.clone()),
        (this.shadow = e.shadow.clone()),
        this
      );
    }
  }
  class Tx extends Yi {
    constructor(e, t) {
      super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight");
    }
  }
  class Hr {
    static decodeText(e) {
      if (typeof TextDecoder < "u") return new TextDecoder().decode(e);
      let t = "";
      for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
      try {
        return decodeURIComponent(escape(t));
      } catch {
        return t;
      }
    }
    static extractUrlBase(e) {
      const t = e.lastIndexOf("/");
      return t === -1 ? "./" : e.slice(0, t + 1);
    }
    static resolveURL(e, t) {
      return typeof e != "string" || e === ""
        ? ""
        : (/^https?:\/\//i.test(t) &&
            /^\//.test(e) &&
            (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
          /^(https?:)?\/\//i.test(e) ||
          /^data:.*,.*$/i.test(e) ||
          /^blob:.*$/i.test(e)
            ? e
            : t + e);
    }
  }
  class Xg extends Ei {
    constructor(e) {
      super(e),
        (this.isImageBitmapLoader = !0),
        typeof createImageBitmap > "u" &&
          console.warn(
            "THREE.ImageBitmapLoader: createImageBitmap() not supported."
          ),
        typeof fetch > "u" &&
          console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
        (this.options = { premultiplyAlpha: "none" });
    }
    setOptions(e) {
      return (this.options = e), this;
    }
    load(e, t, n, i) {
      e === void 0 && (e = ""),
        this.path !== void 0 && (e = this.path + e),
        (e = this.manager.resolveURL(e));
      const s = this,
        r = zn.get(e);
      if (r !== void 0)
        return (
          s.manager.itemStart(e),
          setTimeout(function () {
            t && t(r), s.manager.itemEnd(e);
          }, 0),
          r
        );
      const a = {};
      (a.credentials =
        this.crossOrigin === "anonymous" ? "same-origin" : "include"),
        (a.headers = this.requestHeader),
        fetch(e, a)
          .then(function (l) {
            return l.blob();
          })
          .then(function (l) {
            return createImageBitmap(
              l,
              Object.assign(s.options, { colorSpaceConversion: "none" })
            );
          })
          .then(function (l) {
            zn.add(e, l), t && t(l), s.manager.itemEnd(e);
          })
          .catch(function (l) {
            i && i(l), s.manager.itemError(e), s.manager.itemEnd(e);
          }),
        s.manager.itemStart(e);
    }
  }
  class qg {
    constructor(e = !0) {
      (this.autoStart = e),
        (this.startTime = 0),
        (this.oldTime = 0),
        (this.elapsedTime = 0),
        (this.running = !1);
    }
    start() {
      (this.startTime = bl()),
        (this.oldTime = this.startTime),
        (this.elapsedTime = 0),
        (this.running = !0);
    }
    stop() {
      this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
    }
    getElapsedTime() {
      return this.getDelta(), this.elapsedTime;
    }
    getDelta() {
      let e = 0;
      if (this.autoStart && !this.running) return this.start(), 0;
      if (this.running) {
        const t = bl();
        (e = (t - this.oldTime) / 1e3),
          (this.oldTime = t),
          (this.elapsedTime += e);
      }
      return e;
    }
  }
  function bl() {
    return (typeof performance > "u" ? Date : performance).now();
  }
  class jg {
    constructor(e, t, n) {
      (this.binding = e), (this.valueSize = n);
      let i, s, r;
      switch (t) {
        case "quaternion":
          (i = this._slerp),
            (s = this._slerpAdditive),
            (r = this._setAdditiveIdentityQuaternion),
            (this.buffer = new Float64Array(n * 6)),
            (this._workIndex = 5);
          break;
        case "string":
        case "bool":
          (i = this._select),
            (s = this._select),
            (r = this._setAdditiveIdentityOther),
            (this.buffer = new Array(n * 5));
          break;
        default:
          (i = this._lerp),
            (s = this._lerpAdditive),
            (r = this._setAdditiveIdentityNumeric),
            (this.buffer = new Float64Array(n * 5));
      }
      (this._mixBufferRegion = i),
        (this._mixBufferRegionAdditive = s),
        (this._setIdentity = r),
        (this._origIndex = 3),
        (this._addIndex = 4),
        (this.cumulativeWeight = 0),
        (this.cumulativeWeightAdditive = 0),
        (this.useCount = 0),
        (this.referenceCount = 0);
    }
    accumulate(e, t) {
      const n = this.buffer,
        i = this.valueSize,
        s = e * i + i;
      let r = this.cumulativeWeight;
      if (r === 0) {
        for (let a = 0; a !== i; ++a) n[s + a] = n[a];
        r = t;
      } else {
        r += t;
        const a = t / r;
        this._mixBufferRegion(n, s, 0, a, i);
      }
      this.cumulativeWeight = r;
    }
    accumulateAdditive(e) {
      const t = this.buffer,
        n = this.valueSize,
        i = n * this._addIndex;
      this.cumulativeWeightAdditive === 0 && this._setIdentity(),
        this._mixBufferRegionAdditive(t, i, 0, e, n),
        (this.cumulativeWeightAdditive += e);
    }
    apply(e) {
      const t = this.valueSize,
        n = this.buffer,
        i = e * t + t,
        s = this.cumulativeWeight,
        r = this.cumulativeWeightAdditive,
        a = this.binding;
      if (
        ((this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0), s < 1)
      ) {
        const l = t * this._origIndex;
        this._mixBufferRegion(n, i, l, 1 - s, t);
      }
      r > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
      for (let l = t, c = t + t; l !== c; ++l)
        if (n[l] !== n[l + t]) {
          a.setValue(n, i);
          break;
        }
    }
    saveOriginalState() {
      const e = this.binding,
        t = this.buffer,
        n = this.valueSize,
        i = n * this._origIndex;
      e.getValue(t, i);
      for (let s = n, r = i; s !== r; ++s) t[s] = t[i + (s % n)];
      this._setIdentity(),
        (this.cumulativeWeight = 0),
        (this.cumulativeWeightAdditive = 0);
    }
    restoreOriginalState() {
      const e = this.valueSize * 3;
      this.binding.setValue(this.buffer, e);
    }
    _setAdditiveIdentityNumeric() {
      const e = this._addIndex * this.valueSize,
        t = e + this.valueSize;
      for (let n = e; n < t; n++) this.buffer[n] = 0;
    }
    _setAdditiveIdentityQuaternion() {
      this._setAdditiveIdentityNumeric(),
        (this.buffer[this._addIndex * this.valueSize + 3] = 1);
    }
    _setAdditiveIdentityOther() {
      const e = this._origIndex * this.valueSize,
        t = this._addIndex * this.valueSize;
      for (let n = 0; n < this.valueSize; n++)
        this.buffer[t + n] = this.buffer[e + n];
    }
    _select(e, t, n, i, s) {
      if (i >= 0.5) for (let r = 0; r !== s; ++r) e[t + r] = e[n + r];
    }
    _slerp(e, t, n, i) {
      Gt.slerpFlat(e, t, e, t, e, n, i);
    }
    _slerpAdditive(e, t, n, i, s) {
      const r = this._workIndex * s;
      Gt.multiplyQuaternionsFlat(e, r, e, t, e, n),
        Gt.slerpFlat(e, t, e, t, e, r, i);
    }
    _lerp(e, t, n, i, s) {
      const r = 1 - i;
      for (let a = 0; a !== s; ++a) {
        const l = t + a;
        e[l] = e[l] * r + e[n + a] * i;
      }
    }
    _lerpAdditive(e, t, n, i, s) {
      for (let r = 0; r !== s; ++r) {
        const a = t + r;
        e[a] = e[a] + e[n + r] * i;
      }
    }
  }
  const ra = "\\[\\]\\.:\\/",
    Kg = new RegExp("[" + ra + "]", "g"),
    aa = "[^" + ra + "]",
    Yg = "[^" + ra.replace("\\.", "") + "]",
    Zg = /((?:WC+[\/:])*)/.source.replace("WC", aa),
    $g = /(WCOD+)?/.source.replace("WCOD", Yg),
    Jg = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", aa),
    Qg = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", aa),
    e_ = new RegExp("^" + Zg + $g + Jg + Qg + "$"),
    t_ = ["material", "materials", "bones", "map"];
  class n_ {
    constructor(e, t, n) {
      const i = n || Be.parseTrackName(t);
      (this._targetGroup = e), (this._bindings = e.subscribe_(t, i));
    }
    getValue(e, t) {
      this.bind();
      const n = this._targetGroup.nCachedObjects_,
        i = this._bindings[n];
      i !== void 0 && i.getValue(e, t);
    }
    setValue(e, t) {
      const n = this._bindings;
      for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
        n[i].setValue(e, t);
    }
    bind() {
      const e = this._bindings;
      for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
        e[t].bind();
    }
    unbind() {
      const e = this._bindings;
      for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
        e[t].unbind();
    }
  }
  class Be {
    constructor(e, t, n) {
      (this.path = t),
        (this.parsedPath = n || Be.parseTrackName(t)),
        (this.node = Be.findNode(e, this.parsedPath.nodeName)),
        (this.rootNode = e),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound);
    }
    static create(e, t, n) {
      return e && e.isAnimationObjectGroup
        ? new Be.Composite(e, t, n)
        : new Be(e, t, n);
    }
    static sanitizeNodeName(e) {
      return e.replace(/\s/g, "_").replace(Kg, "");
    }
    static parseTrackName(e) {
      const t = e_.exec(e);
      if (t === null)
        throw new Error("PropertyBinding: Cannot parse trackName: " + e);
      const n = {
          nodeName: t[2],
          objectName: t[3],
          objectIndex: t[4],
          propertyName: t[5],
          propertyIndex: t[6]
        },
        i = n.nodeName && n.nodeName.lastIndexOf(".");
      if (i !== void 0 && i !== -1) {
        const s = n.nodeName.substring(i + 1);
        t_.indexOf(s) !== -1 &&
          ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = s));
      }
      if (n.propertyName === null || n.propertyName.length === 0)
        throw new Error(
          "PropertyBinding: can not parse propertyName from trackName: " + e
        );
      return n;
    }
    static findNode(e, t) {
      if (
        t === void 0 ||
        t === "" ||
        t === "." ||
        t === -1 ||
        t === e.name ||
        t === e.uuid
      )
        return e;
      if (e.skeleton) {
        const n = e.skeleton.getBoneByName(t);
        if (n !== void 0) return n;
      }
      if (e.children) {
        const n = function (s) {
            for (let r = 0; r < s.length; r++) {
              const a = s[r];
              if (a.name === t || a.uuid === t) return a;
              const l = n(a.children);
              if (l) return l;
            }
            return null;
          },
          i = n(e.children);
        if (i) return i;
      }
      return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
      e[t] = this.targetObject[this.propertyName];
    }
    _getValue_array(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, s = n.length; i !== s; ++i) e[t++] = n[i];
    }
    _getValue_arrayElement(e, t) {
      e[t] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(e, t) {
      this.resolvedProperty.toArray(e, t);
    }
    _setValue_direct(e, t) {
      this.targetObject[this.propertyName] = e[t];
    }
    _setValue_direct_setNeedsUpdate(e, t) {
      (this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
      (this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _setValue_array(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
    }
    _setValue_array_setNeedsUpdate(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
      this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
      const n = this.resolvedProperty;
      for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t];
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
      (this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.needsUpdate = !0);
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
      (this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _setValue_fromArray(e, t) {
      this.resolvedProperty.fromArray(e, t);
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
      this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
      this.resolvedProperty.fromArray(e, t),
        (this.targetObject.matrixWorldNeedsUpdate = !0);
    }
    _getValue_unbound(e, t) {
      this.bind(), this.getValue(e, t);
    }
    _setValue_unbound(e, t) {
      this.bind(), this.setValue(e, t);
    }
    bind() {
      let e = this.node;
      const t = this.parsedPath,
        n = t.objectName,
        i = t.propertyName;
      let s = t.propertyIndex;
      if (
        (e || ((e = Be.findNode(this.rootNode, t.nodeName)), (this.node = e)),
        (this.getValue = this._getValue_unavailable),
        (this.setValue = this._setValue_unavailable),
        !e)
      ) {
        console.error(
          "THREE.PropertyBinding: Trying to update node for track: " +
            this.path +
            " but it wasn't found."
        );
        return;
      }
      if (n) {
        let c = t.objectIndex;
        switch (n) {
          case "materials":
            if (!e.material) {
              console.error(
                "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                this
              );
              return;
            }
            if (!e.material.materials) {
              console.error(
                "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
                this
              );
              return;
            }
            e = e.material.materials;
            break;
          case "bones":
            if (!e.skeleton) {
              console.error(
                "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
                this
              );
              return;
            }
            e = e.skeleton.bones;
            for (let h = 0; h < e.length; h++)
              if (e[h].name === c) {
                c = h;
                break;
              }
            break;
          case "map":
            if ("map" in e) {
              e = e.map;
              break;
            }
            if (!e.material) {
              console.error(
                "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                this
              );
              return;
            }
            if (!e.material.map) {
              console.error(
                "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
                this
              );
              return;
            }
            e = e.material.map;
            break;
          default:
            if (e[n] === void 0) {
              console.error(
                "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
                this
              );
              return;
            }
            e = e[n];
        }
        if (c !== void 0) {
          if (e[c] === void 0) {
            console.error(
              "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
              this,
              e
            );
            return;
          }
          e = e[c];
        }
      }
      const r = e[i];
      if (r === void 0) {
        const c = t.nodeName;
        console.error(
          "THREE.PropertyBinding: Trying to update property for track: " +
            c +
            "." +
            i +
            " but it wasn't found.",
          e
        );
        return;
      }
      let a = this.Versioning.None;
      (this.targetObject = e),
        e.needsUpdate !== void 0
          ? (a = this.Versioning.NeedsUpdate)
          : e.matrixWorldNeedsUpdate !== void 0 &&
            (a = this.Versioning.MatrixWorldNeedsUpdate);
      let l = this.BindingType.Direct;
      if (s !== void 0) {
        if (i === "morphTargetInfluences") {
          if (!e.geometry) {
            console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
              this
            );
            return;
          }
          if (!e.geometry.morphAttributes) {
            console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
              this
            );
            return;
          }
          e.morphTargetDictionary[s] !== void 0 &&
            (s = e.morphTargetDictionary[s]);
        }
        (l = this.BindingType.ArrayElement),
          (this.resolvedProperty = r),
          (this.propertyIndex = s);
      } else
        r.fromArray !== void 0 && r.toArray !== void 0
          ? ((l = this.BindingType.HasFromToArray), (this.resolvedProperty = r))
          : Array.isArray(r)
          ? ((l = this.BindingType.EntireArray), (this.resolvedProperty = r))
          : (this.propertyName = i);
      (this.getValue = this.GetterByBindingType[l]),
        (this.setValue = this.SetterByBindingTypeAndVersioning[l][a]);
    }
    unbind() {
      (this.node = null),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound);
    }
  }
  Be.Composite = n_;
  Be.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
  };
  Be.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
  };
  Be.prototype.GetterByBindingType = [
    Be.prototype._getValue_direct,
    Be.prototype._getValue_array,
    Be.prototype._getValue_arrayElement,
    Be.prototype._getValue_toArray
  ];
  Be.prototype.SetterByBindingTypeAndVersioning = [
    [
      Be.prototype._setValue_direct,
      Be.prototype._setValue_direct_setNeedsUpdate,
      Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate
    ],
    [
      Be.prototype._setValue_array,
      Be.prototype._setValue_array_setNeedsUpdate,
      Be.prototype._setValue_array_setMatrixWorldNeedsUpdate
    ],
    [
      Be.prototype._setValue_arrayElement,
      Be.prototype._setValue_arrayElement_setNeedsUpdate,
      Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
    ],
    [
      Be.prototype._setValue_fromArray,
      Be.prototype._setValue_fromArray_setNeedsUpdate,
      Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
    ]
  ];
  class i_ {
    constructor(e, t, n = null, i = t.blendMode) {
      (this._mixer = e),
        (this._clip = t),
        (this._localRoot = n),
        (this.blendMode = i);
      const s = t.tracks,
        r = s.length,
        a = new Array(r),
        l = { endingStart: oi, endingEnd: oi };
      for (let c = 0; c !== r; ++c) {
        const h = s[c].createInterpolant(null);
        (a[c] = h), (h.settings = l);
      }
      (this._interpolantSettings = l),
        (this._interpolants = a),
        (this._propertyBindings = new Array(r)),
        (this._cacheIndex = null),
        (this._byClipCacheIndex = null),
        (this._timeScaleInterpolant = null),
        (this._weightInterpolant = null),
        (this.loop = Yh),
        (this._loopCount = -1),
        (this._startTime = null),
        (this.time = 0),
        (this.timeScale = 1),
        (this._effectiveTimeScale = 1),
        (this.weight = 1),
        (this._effectiveWeight = 1),
        (this.repetitions = 1 / 0),
        (this.paused = !1),
        (this.enabled = !0),
        (this.clampWhenFinished = !1),
        (this.zeroSlopeAtStart = !0),
        (this.zeroSlopeAtEnd = !0);
    }
    play() {
      return this._mixer._activateAction(this), this;
    }
    stop() {
      return this._mixer._deactivateAction(this), this.reset();
    }
    reset() {
      return (
        (this.paused = !1),
        (this.enabled = !0),
        (this.time = 0),
        (this._loopCount = -1),
        (this._startTime = null),
        this.stopFading().stopWarping()
      );
    }
    isRunning() {
      return (
        this.enabled &&
        !this.paused &&
        this.timeScale !== 0 &&
        this._startTime === null &&
        this._mixer._isActiveAction(this)
      );
    }
    isScheduled() {
      return this._mixer._isActiveAction(this);
    }
    startAt(e) {
      return (this._startTime = e), this;
    }
    setLoop(e, t) {
      return (this.loop = e), (this.repetitions = t), this;
    }
    setEffectiveWeight(e) {
      return (
        (this.weight = e),
        (this._effectiveWeight = this.enabled ? e : 0),
        this.stopFading()
      );
    }
    getEffectiveWeight() {
      return this._effectiveWeight;
    }
    fadeIn(e) {
      return this._scheduleFading(e, 0, 1);
    }
    fadeOut(e) {
      return this._scheduleFading(e, 1, 0);
    }
    crossFadeFrom(e, t, n) {
      if ((e.fadeOut(t), this.fadeIn(t), n)) {
        const i = this._clip.duration,
          s = e._clip.duration,
          r = s / i,
          a = i / s;
        e.warp(1, r, t), this.warp(a, 1, t);
      }
      return this;
    }
    crossFadeTo(e, t, n) {
      return e.crossFadeFrom(this, t, n);
    }
    stopFading() {
      const e = this._weightInterpolant;
      return (
        e !== null &&
          ((this._weightInterpolant = null),
          this._mixer._takeBackControlInterpolant(e)),
        this
      );
    }
    setEffectiveTimeScale(e) {
      return (
        (this.timeScale = e),
        (this._effectiveTimeScale = this.paused ? 0 : e),
        this.stopWarping()
      );
    }
    getEffectiveTimeScale() {
      return this._effectiveTimeScale;
    }
    setDuration(e) {
      return (this.timeScale = this._clip.duration / e), this.stopWarping();
    }
    syncWith(e) {
      return (
        (this.time = e.time), (this.timeScale = e.timeScale), this.stopWarping()
      );
    }
    halt(e) {
      return this.warp(this._effectiveTimeScale, 0, e);
    }
    warp(e, t, n) {
      const i = this._mixer,
        s = i.time,
        r = this.timeScale;
      let a = this._timeScaleInterpolant;
      a === null &&
        ((a = i._lendControlInterpolant()), (this._timeScaleInterpolant = a));
      const l = a.parameterPositions,
        c = a.sampleValues;
      return (l[0] = s), (l[1] = s + n), (c[0] = e / r), (c[1] = t / r), this;
    }
    stopWarping() {
      const e = this._timeScaleInterpolant;
      return (
        e !== null &&
          ((this._timeScaleInterpolant = null),
          this._mixer._takeBackControlInterpolant(e)),
        this
      );
    }
    getMixer() {
      return this._mixer;
    }
    getClip() {
      return this._clip;
    }
    getRoot() {
      return this._localRoot || this._mixer._root;
    }
    _update(e, t, n, i) {
      if (!this.enabled) {
        this._updateWeight(e);
        return;
      }
      const s = this._startTime;
      if (s !== null) {
        const l = (e - s) * n;
        l < 0 || n === 0 ? (t = 0) : ((this._startTime = null), (t = n * l));
      }
      t *= this._updateTimeScale(e);
      const r = this._updateTime(t),
        a = this._updateWeight(e);
      if (a > 0) {
        const l = this._interpolants,
          c = this._propertyBindings;
        switch (this.blendMode) {
          case $h:
            for (let h = 0, u = l.length; h !== u; ++h)
              l[h].evaluate(r), c[h].accumulateAdditive(a);
            break;
          case jr:
          default:
            for (let h = 0, u = l.length; h !== u; ++h)
              l[h].evaluate(r), c[h].accumulate(i, a);
        }
      }
    }
    _updateWeight(e) {
      let t = 0;
      if (this.enabled) {
        t = this.weight;
        const n = this._weightInterpolant;
        if (n !== null) {
          const i = n.evaluate(e)[0];
          (t *= i),
            e > n.parameterPositions[1] &&
              (this.stopFading(), i === 0 && (this.enabled = !1));
        }
      }
      return (this._effectiveWeight = t), t;
    }
    _updateTimeScale(e) {
      let t = 0;
      if (!this.paused) {
        t = this.timeScale;
        const n = this._timeScaleInterpolant;
        if (n !== null) {
          const i = n.evaluate(e)[0];
          (t *= i),
            e > n.parameterPositions[1] &&
              (this.stopWarping(),
              t === 0 ? (this.paused = !0) : (this.timeScale = t));
        }
      }
      return (this._effectiveTimeScale = t), t;
    }
    _updateTime(e) {
      const t = this._clip.duration,
        n = this.loop;
      let i = this.time + e,
        s = this._loopCount;
      const r = n === Zh;
      if (e === 0) return s === -1 ? i : r && (s & 1) === 1 ? t - i : i;
      if (n === Kh) {
        s === -1 && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
        e: {
          if (i >= t) i = t;
          else if (i < 0) i = 0;
          else {
            this.time = i;
            break e;
          }
          this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: e < 0 ? -1 : 1
            });
        }
      } else {
        if (
          (s === -1 &&
            (e >= 0
              ? ((s = 0), this._setEndings(!0, this.repetitions === 0, r))
              : this._setEndings(this.repetitions === 0, !0, r)),
          i >= t || i < 0)
        ) {
          const a = Math.floor(i / t);
          (i -= t * a), (s += Math.abs(a));
          const l = this.repetitions - s;
          if (l <= 0)
            this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
              (i = e > 0 ? t : 0),
              (this.time = i),
              this._mixer.dispatchEvent({
                type: "finished",
                action: this,
                direction: e > 0 ? 1 : -1
              });
          else {
            if (l === 1) {
              const c = e < 0;
              this._setEndings(c, !c, r);
            } else this._setEndings(!1, !1, r);
            (this._loopCount = s),
              (this.time = i),
              this._mixer.dispatchEvent({
                type: "loop",
                action: this,
                loopDelta: a
              });
          }
        } else this.time = i;
        if (r && (s & 1) === 1) return t - i;
      }
      return i;
    }
    _setEndings(e, t, n) {
      const i = this._interpolantSettings;
      n
        ? ((i.endingStart = li), (i.endingEnd = li))
        : (e
            ? (i.endingStart = this.zeroSlopeAtStart ? li : oi)
            : (i.endingStart = ws),
          t ? (i.endingEnd = this.zeroSlopeAtEnd ? li : oi) : (i.endingEnd = ws));
    }
    _scheduleFading(e, t, n) {
      const i = this._mixer,
        s = i.time;
      let r = this._weightInterpolant;
      r === null &&
        ((r = i._lendControlInterpolant()), (this._weightInterpolant = r));
      const a = r.parameterPositions,
        l = r.sampleValues;
      return (a[0] = s), (l[0] = t), (a[1] = s + e), (l[1] = n), this;
    }
  }
  const s_ = new Float32Array(1);
  class bx extends kn {
    constructor(e) {
      super(),
        (this._root = e),
        this._initMemoryManager(),
        (this._accuIndex = 0),
        (this.time = 0),
        (this.timeScale = 1);
    }
    _bindAction(e, t) {
      const n = e._localRoot || this._root,
        i = e._clip.tracks,
        s = i.length,
        r = e._propertyBindings,
        a = e._interpolants,
        l = n.uuid,
        c = this._bindingsByRootAndName;
      let h = c[l];
      h === void 0 && ((h = {}), (c[l] = h));
      for (let u = 0; u !== s; ++u) {
        const d = i[u],
          p = d.name;
        let g = h[p];
        if (g !== void 0) ++g.referenceCount, (r[u] = g);
        else {
          if (((g = r[u]), g !== void 0)) {
            g._cacheIndex === null &&
              (++g.referenceCount, this._addInactiveBinding(g, l, p));
            continue;
          }
          const _ = t && t._propertyBindings[u].binding.parsedPath;
          (g = new jg(Be.create(n, p, _), d.ValueTypeName, d.getValueSize())),
            ++g.referenceCount,
            this._addInactiveBinding(g, l, p),
            (r[u] = g);
        }
        a[u].resultBuffer = g.buffer;
      }
    }
    _activateAction(e) {
      if (!this._isActiveAction(e)) {
        if (e._cacheIndex === null) {
          const n = (e._localRoot || this._root).uuid,
            i = e._clip.uuid,
            s = this._actionsByClip[i];
          this._bindAction(e, s && s.knownActions[0]),
            this._addInactiveAction(e, i, n);
        }
        const t = e._propertyBindings;
        for (let n = 0, i = t.length; n !== i; ++n) {
          const s = t[n];
          s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
        }
        this._lendAction(e);
      }
    }
    _deactivateAction(e) {
      if (this._isActiveAction(e)) {
        const t = e._propertyBindings;
        for (let n = 0, i = t.length; n !== i; ++n) {
          const s = t[n];
          --s.useCount === 0 &&
            (s.restoreOriginalState(), this._takeBackBinding(s));
        }
        this._takeBackAction(e);
      }
    }
    _initMemoryManager() {
      (this._actions = []),
        (this._nActiveActions = 0),
        (this._actionsByClip = {}),
        (this._bindings = []),
        (this._nActiveBindings = 0),
        (this._bindingsByRootAndName = {}),
        (this._controlInterpolants = []),
        (this._nActiveControlInterpolants = 0);
      const e = this;
      this.stats = {
        actions: {
          get total() {
            return e._actions.length;
          },
          get inUse() {
            return e._nActiveActions;
          }
        },
        bindings: {
          get total() {
            return e._bindings.length;
          },
          get inUse() {
            return e._nActiveBindings;
          }
        },
        controlInterpolants: {
          get total() {
            return e._controlInterpolants.length;
          },
          get inUse() {
            return e._nActiveControlInterpolants;
          }
        }
      };
    }
    _isActiveAction(e) {
      const t = e._cacheIndex;
      return t !== null && t < this._nActiveActions;
    }
    _addInactiveAction(e, t, n) {
      const i = this._actions,
        s = this._actionsByClip;
      let r = s[t];
      if (r === void 0)
        (r = { knownActions: [e], actionByRoot: {} }),
          (e._byClipCacheIndex = 0),
          (s[t] = r);
      else {
        const a = r.knownActions;
        (e._byClipCacheIndex = a.length), a.push(e);
      }
      (e._cacheIndex = i.length), i.push(e), (r.actionByRoot[n] = e);
    }
    _removeInactiveAction(e) {
      const t = this._actions,
        n = t[t.length - 1],
        i = e._cacheIndex;
      (n._cacheIndex = i), (t[i] = n), t.pop(), (e._cacheIndex = null);
      const s = e._clip.uuid,
        r = this._actionsByClip,
        a = r[s],
        l = a.knownActions,
        c = l[l.length - 1],
        h = e._byClipCacheIndex;
      (c._byClipCacheIndex = h),
        (l[h] = c),
        l.pop(),
        (e._byClipCacheIndex = null);
      const u = a.actionByRoot,
        d = (e._localRoot || this._root).uuid;
      delete u[d],
        l.length === 0 && delete r[s],
        this._removeInactiveBindingsForAction(e);
    }
    _removeInactiveBindingsForAction(e) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        --s.referenceCount === 0 && this._removeInactiveBinding(s);
      }
    }
    _lendAction(e) {
      const t = this._actions,
        n = e._cacheIndex,
        i = this._nActiveActions++,
        s = t[i];
      (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
    }
    _takeBackAction(e) {
      const t = this._actions,
        n = e._cacheIndex,
        i = --this._nActiveActions,
        s = t[i];
      (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
    }
    _addInactiveBinding(e, t, n) {
      const i = this._bindingsByRootAndName,
        s = this._bindings;
      let r = i[t];
      r === void 0 && ((r = {}), (i[t] = r)),
        (r[n] = e),
        (e._cacheIndex = s.length),
        s.push(e);
    }
    _removeInactiveBinding(e) {
      const t = this._bindings,
        n = e.binding,
        i = n.rootNode.uuid,
        s = n.path,
        r = this._bindingsByRootAndName,
        a = r[i],
        l = t[t.length - 1],
        c = e._cacheIndex;
      (l._cacheIndex = c),
        (t[c] = l),
        t.pop(),
        delete a[s],
        Object.keys(a).length === 0 && delete r[i];
    }
    _lendBinding(e) {
      const t = this._bindings,
        n = e._cacheIndex,
        i = this._nActiveBindings++,
        s = t[i];
      (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
    }
    _takeBackBinding(e) {
      const t = this._bindings,
        n = e._cacheIndex,
        i = --this._nActiveBindings,
        s = t[i];
      (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
    }
    _lendControlInterpolant() {
      const e = this._controlInterpolants,
        t = this._nActiveControlInterpolants++;
      let n = e[t];
      return (
        n === void 0 &&
          ((n = new mc(new Float32Array(2), new Float32Array(2), 1, s_)),
          (n.__cacheIndex = t),
          (e[t] = n)),
        n
      );
    }
    _takeBackControlInterpolant(e) {
      const t = this._controlInterpolants,
        n = e.__cacheIndex,
        i = --this._nActiveControlInterpolants,
        s = t[i];
      (e.__cacheIndex = i), (t[i] = e), (s.__cacheIndex = n), (t[n] = s);
    }
    clipAction(e, t, n) {
      const i = t || this._root,
        s = i.uuid;
      let r = typeof e == "string" ? Gr.findByName(i, e) : e;
      const a = r !== null ? r.uuid : e,
        l = this._actionsByClip[a];
      let c = null;
      if (
        (n === void 0 && (r !== null ? (n = r.blendMode) : (n = jr)),
        l !== void 0)
      ) {
        const u = l.actionByRoot[s];
        if (u !== void 0 && u.blendMode === n) return u;
        (c = l.knownActions[0]), r === null && (r = c._clip);
      }
      if (r === null) return null;
      const h = new i_(this, r, t, n);
      return this._bindAction(h, c), this._addInactiveAction(h, a, s), h;
    }
    existingAction(e, t) {
      const n = t || this._root,
        i = n.uuid,
        s = typeof e == "string" ? Gr.findByName(n, e) : e,
        r = s ? s.uuid : e,
        a = this._actionsByClip[r];
      return (a !== void 0 && a.actionByRoot[i]) || null;
    }
    stopAllAction() {
      const e = this._actions,
        t = this._nActiveActions;
      for (let n = t - 1; n >= 0; --n) e[n].stop();
      return this;
    }
    update(e) {
      e *= this.timeScale;
      const t = this._actions,
        n = this._nActiveActions,
        i = (this.time += e),
        s = Math.sign(e),
        r = (this._accuIndex ^= 1);
      for (let c = 0; c !== n; ++c) t[c]._update(i, e, s, r);
      const a = this._bindings,
        l = this._nActiveBindings;
      for (let c = 0; c !== l; ++c) a[c].apply(r);
      return this;
    }
    setTime(e) {
      this.time = 0;
      for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
      return this.update(e);
    }
    getRoot() {
      return this._root;
    }
    uncacheClip(e) {
      const t = this._actions,
        n = e.uuid,
        i = this._actionsByClip,
        s = i[n];
      if (s !== void 0) {
        const r = s.knownActions;
        for (let a = 0, l = r.length; a !== l; ++a) {
          const c = r[a];
          this._deactivateAction(c);
          const h = c._cacheIndex,
            u = t[t.length - 1];
          (c._cacheIndex = null),
            (c._byClipCacheIndex = null),
            (u._cacheIndex = h),
            (t[h] = u),
            t.pop(),
            this._removeInactiveBindingsForAction(c);
        }
        delete i[n];
      }
    }
    uncacheRoot(e) {
      const t = e.uuid,
        n = this._actionsByClip;
      for (const r in n) {
        const a = n[r].actionByRoot,
          l = a[t];
        l !== void 0 &&
          (this._deactivateAction(l), this._removeInactiveAction(l));
      }
      const i = this._bindingsByRootAndName,
        s = i[t];
      if (s !== void 0)
        for (const r in s) {
          const a = s[r];
          a.restoreOriginalState(), this._removeInactiveBinding(a);
        }
    }
    uncacheAction(e, t) {
      const n = this.existingAction(e, t);
      n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
    }
  }
  class Ax {
    constructor(e = 1, t = 0, n = 0) {
      return (this.radius = e), (this.phi = t), (this.theta = n), this;
    }
    set(e, t, n) {
      return (this.radius = e), (this.phi = t), (this.theta = n), this;
    }
    copy(e) {
      return (
        (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
      );
    }
    makeSafe() {
      return (
        (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
      );
    }
    setFromVector3(e) {
      return this.setFromCartesianCoords(e.x, e.y, e.z);
    }
    setFromCartesianCoords(e, t, n) {
      return (
        (this.radius = Math.sqrt(e * e + t * t + n * n)),
        this.radius === 0
          ? ((this.theta = 0), (this.phi = 0))
          : ((this.theta = Math.atan2(e, n)),
            (this.phi = Math.acos(ht(t / this.radius, -1, 1)))),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class Ex extends uc {
    constructor(e = 10, t = 10, n = 4473924, i = 8947848) {
      (n = new ye(n)), (i = new ye(i));
      const s = t / 2,
        r = e / t,
        a = e / 2,
        l = [],
        c = [];
      for (let d = 0, p = 0, g = -a; d <= t; d++, g += r) {
        l.push(-a, 0, g, a, 0, g), l.push(g, 0, -a, g, 0, a);
        const _ = d === s ? n : i;
        _.toArray(c, p),
          (p += 3),
          _.toArray(c, p),
          (p += 3),
          _.toArray(c, p),
          (p += 3),
          _.toArray(c, p),
          (p += 3);
      }
      const h = new Rt();
      h.setAttribute("position", new Ct(l, 3)),
        h.setAttribute("color", new Ct(c, 3));
      const u = new ta({ vertexColors: !0, toneMapped: !1 });
      super(h, u), (this.type = "GridHelper");
    }
    dispose() {
      this.geometry.dispose(), this.material.dispose();
    }
  }
  typeof __THREE_DEVTOOLS__ < "u" &&
    __THREE_DEVTOOLS__.dispatchEvent(
      new CustomEvent("register", { detail: { revision: qr } })
    );
  typeof window < "u" &&
    (window.__THREE__
      ? console.warn("WARNING: Multiple instances of Three.js being imported.")
      : (window.__THREE__ = qr));
  const r_ = {
    uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } },
    vertexShader: `
  
          varying vec2 vUv;
  
          void main() {
  
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
          }`,
    fragmentShader: `
  
          uniform float opacity;
  
          uniform sampler2D tDiffuse;
  
          varying vec2 vUv;
  
          void main() {
  
              gl_FragColor = texture2D( tDiffuse, vUv );
              gl_FragColor.a *= opacity;
  
  
          }`
  };
  class Ns {
    constructor() {
      (this.isPass = !0),
        (this.enabled = !0),
        (this.needsSwap = !0),
        (this.clear = !1),
        (this.renderToScreen = !1);
    }
    setSize() {}
    render() {
      console.error("THREE.Pass: .render() must be implemented in derived pass.");
    }
    dispose() {}
  }
  const a_ = new ji(-1, 1, 1, -1, 0, 1),
    oa = new Rt();
  oa.setAttribute("position", new Ct([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
  oa.setAttribute("uv", new Ct([0, 2, 0, 0, 2, 0], 2));
  class o_ {
    constructor(e) {
      this._mesh = new yt(oa, e);
    }
    dispose() {
      this._mesh.geometry.dispose();
    }
    render(e) {
      e.render(this._mesh, a_);
    }
    get material() {
      return this._mesh.material;
    }
    set material(e) {
      this._mesh.material = e;
    }
  }
  class l_ extends Ns {
    constructor(e, t) {
      super(),
        (this.textureID = t !== void 0 ? t : "tDiffuse"),
        e instanceof Yt
          ? ((this.uniforms = e.uniforms), (this.material = e))
          : e &&
            ((this.uniforms = tc.clone(e.uniforms)),
            (this.material = new Yt({
              defines: Object.assign({}, e.defines),
              uniforms: this.uniforms,
              vertexShader: e.vertexShader,
              fragmentShader: e.fragmentShader
            }))),
        (this.fsQuad = new o_(this.material));
    }
    render(e, t, n) {
      this.uniforms[this.textureID] &&
        (this.uniforms[this.textureID].value = n.texture),
        (this.fsQuad.material = this.material),
        this.renderToScreen
          ? (e.setRenderTarget(null), this.fsQuad.render(e))
          : (e.setRenderTarget(t),
            this.clear &&
              e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
            this.fsQuad.render(e));
    }
    dispose() {
      this.material.dispose(), this.fsQuad.dispose();
    }
  }
  class Al extends Ns {
    constructor(e, t) {
      super(),
        (this.scene = e),
        (this.camera = t),
        (this.clear = !0),
        (this.needsSwap = !1),
        (this.inverse = !1);
    }
    render(e, t, n) {
      const i = e.getContext(),
        s = e.state;
      s.buffers.color.setMask(!1),
        s.buffers.depth.setMask(!1),
        s.buffers.color.setLocked(!0),
        s.buffers.depth.setLocked(!0);
      let r, a;
      this.inverse ? ((r = 0), (a = 1)) : ((r = 1), (a = 0)),
        s.buffers.stencil.setTest(!0),
        s.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE),
        s.buffers.stencil.setFunc(i.ALWAYS, r, 4294967295),
        s.buffers.stencil.setClear(a),
        s.buffers.stencil.setLocked(!0),
        e.setRenderTarget(n),
        this.clear && e.clear(),
        e.render(this.scene, this.camera),
        e.setRenderTarget(t),
        this.clear && e.clear(),
        e.render(this.scene, this.camera),
        s.buffers.color.setLocked(!1),
        s.buffers.depth.setLocked(!1),
        s.buffers.stencil.setLocked(!1),
        s.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295),
        s.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP),
        s.buffers.stencil.setLocked(!0);
    }
  }
  class c_ extends Ns {
    constructor() {
      super(), (this.needsSwap = !1);
    }
    render(e) {
      e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
    }
  }
  class h_ {
    constructor(e, t) {
      if (((this.renderer = e), t === void 0)) {
        const n = e.getSize(new De());
        (this._pixelRatio = e.getPixelRatio()),
          (this._width = n.width),
          (this._height = n.height),
          (t = new cn(
            this._width * this._pixelRatio,
            this._height * this._pixelRatio
          )),
          (t.texture.name = "EffectComposer.rt1");
      } else
        (this._pixelRatio = 1),
          (this._width = t.width),
          (this._height = t.height);
      (this.renderTarget1 = t),
        (this.renderTarget2 = t.clone()),
        (this.renderTarget2.texture.name = "EffectComposer.rt2"),
        (this.writeBuffer = this.renderTarget1),
        (this.readBuffer = this.renderTarget2),
        (this.renderToScreen = !0),
        (this.passes = []),
        (this.copyPass = new l_(r_)),
        (this.clock = new qg());
    }
    swapBuffers() {
      const e = this.readBuffer;
      (this.readBuffer = this.writeBuffer), (this.writeBuffer = e);
    }
    addPass(e) {
      this.passes.push(e),
        e.setSize(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio
        );
    }
    insertPass(e, t) {
      this.passes.splice(t, 0, e),
        e.setSize(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio
        );
    }
    removePass(e) {
      const t = this.passes.indexOf(e);
      t !== -1 && this.passes.splice(t, 1);
    }
    isLastEnabledPass(e) {
      for (let t = e + 1; t < this.passes.length; t++)
        if (this.passes[t].enabled) return !1;
      return !0;
    }
    render(e) {
      e === void 0 && (e = this.clock.getDelta());
      const t = this.renderer.getRenderTarget();
      let n = !1;
      for (let i = 0, s = this.passes.length; i < s; i++) {
        const r = this.passes[i];
        if (r.enabled !== !1) {
          if (
            ((r.renderToScreen =
              this.renderToScreen && this.isLastEnabledPass(i)),
            r.render(this.renderer, this.writeBuffer, this.readBuffer, e, n),
            r.needsSwap)
          ) {
            if (n) {
              const a = this.renderer.getContext(),
                l = this.renderer.state.buffers.stencil;
              l.setFunc(a.NOTEQUAL, 1, 4294967295),
                this.copyPass.render(
                  this.renderer,
                  this.writeBuffer,
                  this.readBuffer,
                  e
                ),
                l.setFunc(a.EQUAL, 1, 4294967295);
            }
            this.swapBuffers();
          }
          Al !== void 0 &&
            (r instanceof Al ? (n = !0) : r instanceof c_ && (n = !1));
        }
      }
      this.renderer.setRenderTarget(t);
    }
    reset(e) {
      if (e === void 0) {
        const t = this.renderer.getSize(new De());
        (this._pixelRatio = this.renderer.getPixelRatio()),
          (this._width = t.width),
          (this._height = t.height),
          (e = this.renderTarget1.clone()),
          e.setSize(
            this._width * this._pixelRatio,
            this._height * this._pixelRatio
          );
      }
      this.renderTarget1.dispose(),
        this.renderTarget2.dispose(),
        (this.renderTarget1 = e),
        (this.renderTarget2 = e.clone()),
        (this.writeBuffer = this.renderTarget1),
        (this.readBuffer = this.renderTarget2);
    }
    setSize(e, t) {
      (this._width = e), (this._height = t);
      const n = this._width * this._pixelRatio,
        i = this._height * this._pixelRatio;
      this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
      for (let s = 0; s < this.passes.length; s++) this.passes[s].setSize(n, i);
    }
    setPixelRatio(e) {
      (this._pixelRatio = e), this.setSize(this._width, this._height);
    }
    dispose() {
      this.renderTarget1.dispose(),
        this.renderTarget2.dispose(),
        this.copyPass.dispose();
    }
  }
  class u_ extends Ns {
    constructor(e, t, n, i, s) {
      super(),
        (this.scene = e),
        (this.camera = t),
        (this.overrideMaterial = n),
        (this.clearColor = i),
        (this.clearAlpha = s !== void 0 ? s : 0),
        (this.clear = !0),
        (this.clearDepth = !1),
        (this.needsSwap = !1),
        (this._oldClearColor = new ye());
    }
    render(e, t, n) {
      const i = e.autoClear;
      e.autoClear = !1;
      let s, r;
      this.overrideMaterial !== void 0 &&
        ((r = this.scene.overrideMaterial),
        (this.scene.overrideMaterial = this.overrideMaterial)),
        this.clearColor &&
          (e.getClearColor(this._oldClearColor),
          (s = e.getClearAlpha()),
          e.setClearColor(this.clearColor, this.clearAlpha)),
        this.clearDepth && e.clearDepth(),
        e.setRenderTarget(this.renderToScreen ? null : n),
        this.clear &&
          e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
        e.render(this.scene, this.camera),
        this.clearColor && e.setClearColor(this._oldClearColor, s),
        this.overrideMaterial !== void 0 && (this.scene.overrideMaterial = r),
        (e.autoClear = i);
    }
  }
  class d_ extends vg {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "rootSceneScale", 1);
    }
    resize(e, t) {
      this.scale.setScalar(t > e ? e / t : 1);
    }
    resizeLandscape(e, t) {
      (this.rootSceneScale = th.isPortrait ? t / e : 1),
        this.scale.setScalar(this.rootSceneScale);
    }
  }
  class wx extends Dl {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "renderer", void 0);
      _defineProperty(this, "scene", void 0);
      _defineProperty(this, "camera", void 0);
      _defineProperty(this, "_composer", void 0);
      _defineProperty(this, "_count", 0);
      _defineProperty(this, "_isInit", !1);
      _defineProperty(this, "isLooseContext", !1);
      _defineProperty(this, "_isDestroy", !1);
    }
    onInit(e = this.option) {
      const {
        canvas: t = this.el,
        isFullSize: n = !1,
        width: i = n ? window.innerWidth : this.el.clientWidth,
        height: s = n
          ? Math.max(window.innerHeight, this.el.clientHeight)
          : this.el.clientHeight,
        fps: r = 60,
        pixelRatio: a,
        pixelRatioMax: l = 1 / 0,
        pixelRatioAbsolute: c,
        alpha: h = !1,
        antialias: u = !1,
        stencil: d = !1,
        powerPreference: p = "low-power",
        logarithmicDepthBuffer: g = !0,
        autoClear: _,
        clearColor: m = 0,
        clearAlpha: f = 0,
        camera: { extraFar: b = 1 } = {},
        isManual: v = !1
      } = e;
      (this.optionSelf = e),
        (this.canvas = t),
        (this.isFullSize = n),
        (this.width = this._initialWidth = i),
        (this.height = this._initialHeight = s),
        (this._isSpecifiedWidth = "width" in e && i !== this.el.clientWidth),
        (this._isSpecifiedHeight = "height" in e && s !== this.el.clientHeight),
        (this.framerate = 60 / r),
        (this.alpha = h),
        (this.antialias = u),
        (this.stencil = d),
        (this.powerPreference = p),
        (this.logarithmicDepthBuffer = g),
        (this.pixelRatioFixed = a || c),
        (this.pixelRatioMax = l),
        (this._isFixedPixelRatio = "pixelRatio" in e),
        (this._isFixedPixelRatioAbsolute = "pixelRatioAbsolute" in e),
        (this.clearColor = m),
        (this.clearAlpha = f),
        (this.extraFar = b),
        (this.onWebglcontextlost = this.onWebglcontextlost.bind(this)),
        v || this.init();
    }
    init() {
      if (this._isInit) return;
      (this._isInit = !0), this.initRenderer(), (this.scene = new d_());
      const { fov: e, aspect: t, near: n, far: i } = this.optionSelf.camera || {};
      this.camera = new St(e, t, n, i);
    }
    initPostProcessing(e) {
      e.length > 0 || (e = [e]);
      const { renderer: t, scene: n, camera: i } = this,
        s = t.getSize(new De()),
        r = t.getPixelRatio();
      (s.width *= r), (s.height *= r);
      const a = (this._composer = new h_(
          t,
          new cn(s.width, s.height, { depthBuffer: !1, stencilBuffer: !1 })
        )),
        l = new u_(n, i);
      a.addPass(l);
      for (let c = 0; c < e.length; c++) {
        const h = e[c];
        (h.renderToScreen = c === e.length - 1), a.addPass(h);
      }
      t.autoClear = !1;
    }
    render() {
      this._isDestroy ||
        (this._composer
          ? this._composer.render()
          : this.renderer && this.renderer.render(this.scene, this.camera));
    }
    onResize() {
      if (!this._isInit || this._isDestroy) return;
      const e = ih(),
        { el: t, renderer: n, scene: i, camera: s } = this,
        r = (this.pixelRatio = this._isFixedPixelRatioAbsolute
          ? this.pixelRatioFixed
          : this._isFixedPixelRatio
          ? Math.min(this.pixelRatioFixed, window.devicePixelRatio)
          : Math.min(window.devicePixelRatio, this.pixelRatioMax));
      t.removeAttribute("width"),
        t.removeAttribute("height"),
        (t.style.width = ""),
        (t.style.height = "");
      const a = (this.width = this.isFullSize
          ? e
          : this._isSpecifiedWidth
          ? Wa(this._initialWidth)
          : t.clientWidth),
        l = (this.height = this.isFullSize
          ? Math.max(nh(), t.clientHeight)
          : this._isSpecifiedHeight
          ? Wa(this._initialHeight)
          : t.clientHeight);
      i.resize(a, l),
        (s.aspect = a / l),
        (s.position.z =
          Math.min(a, l) / 2 / Math.tan((s.fov / 2) * (Math.PI / 180))),
        (s.far = s.position.z + this.extraFar),
        s.updateProjectionMatrix(),
        n.setSize(a, l),
        n.setPixelRatio(r),
        this._composer && this._composer.setSize(a, l),
        a !== 300 && this.render();
    }
    onWebglcontextlost() {
      (this.isLooseContext = !0), this.disposeRenderer();
    }
    initRenderer() {
      this.renderer ||
        ((this.isLooseContext = !1),
        (this.renderer = new cc({
          canvas: this.canvas,
          alpha: this.alpha,
          antialias: this.antialias,
          stencil: this.stencil,
          powerPreference: this.powerPreference,
          logarithmicDepthBuffer: this.logarithmicDepthBuffer
        })),
        "autoClear" in this.optionSelf &&
          (this.renderer.autoClear = this.optionSelf.autoClear),
        this.renderer.setSize(this.width, this.height),
        this.renderer.setPixelRatio(
          Math.min(window.devicePixelRatio, this.pixelRatioMax)
        ),
        this.renderer.setClearColor(this.clearColor, this.clearAlpha),
        (this.renderer.useLegacyLights = !1),
        (this.renderer.outputEncoding = Fe),
        (this.domElement = this.renderer.domElement),
        this.canvas || this.el.appendChild(this.domElement),
        this.domElement.addEventListener(
          "webglcontextlost",
          this.onWebglcontextlost
        ));
    }
    disposeRenderer() {
      this.domElement.removeEventListener(
        "webglcontextlost",
        this.onWebglcontextlost
      ),
        this.renderer &&
          (this.renderer.getContext().getExtension("WEBGL_lose_context") &&
            this.renderer.forceContextLoss(),
          this.renderer.dispose(),
          this.canvas || this.el.removeChild(this.domElement));
    }
    disposeGeometry(e) {
      e && (e.dispose(), (e = null));
    }
    disposeMaterial(e) {
      e && Array.isArray(e)
        ? e.forEach((t) => this.disposeMaterialSingle(t))
        : e && this.disposeMaterialSingle(e);
    }
    disposeMaterialSingle(e) {
      e.map && (e.map.dispose(), (e.map = null)), e.dispose(), (e = null);
    }
    setGroupOpacity(e, t) {
      e.material
        ? (e.material.opacity = t)
        : e.children.forEach((n) => {
            this.setGroupOpacity(n, t);
          });
    }
    onDestroy() {
      (this._isDestroy = !0), this._isInit && this.disposeRenderer();
    }
  }
  var Cx = `attribute vec3 position;
  attribute vec2 uv;
  
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }`;
  const Cr = new WeakMap();
  class f_ extends Ei {
    constructor(e) {
      super(e),
        (this.decoderPath = ""),
        (this.decoderConfig = {}),
        (this.decoderBinary = null),
        (this.decoderPending = null),
        (this.workerLimit = 4),
        (this.workerPool = []),
        (this.workerNextTaskID = 1),
        (this.workerSourceURL = ""),
        (this.defaultAttributeIDs = {
          position: "POSITION",
          normal: "NORMAL",
          color: "COLOR",
          uv: "TEX_COORD"
        }),
        (this.defaultAttributeTypes = {
          position: "Float32Array",
          normal: "Float32Array",
          color: "Float32Array",
          uv: "Float32Array"
        });
    }
    setDecoderPath(e) {
      return (this.decoderPath = e), this;
    }
    setDecoderConfig(e) {
      return (this.decoderConfig = e), this;
    }
    setWorkerLimit(e) {
      return (this.workerLimit = e), this;
    }
    load(e, t, n, i) {
      const s = new Cs(this.manager);
      s.setPath(this.path),
        s.setResponseType("arraybuffer"),
        s.setRequestHeader(this.requestHeader),
        s.setWithCredentials(this.withCredentials),
        s.load(
          e,
          (r) => {
            this.parse(r, t, i);
          },
          n,
          i
        );
    }
    parse(e, t, n) {
      this.decodeDracoFile(e, t, null, null, Dt).catch(n);
    }
    decodeDracoFile(e, t, n, i, s = Si) {
      const r = {
        attributeIDs: n || this.defaultAttributeIDs,
        attributeTypes: i || this.defaultAttributeTypes,
        useUniqueIDs: !!n,
        vertexColorSpace: s
      };
      return this.decodeGeometry(e, r).then(t);
    }
    decodeGeometry(e, t) {
      const n = JSON.stringify(t);
      if (Cr.has(e)) {
        const l = Cr.get(e);
        if (l.key === n) return l.promise;
        if (e.byteLength === 0)
          throw new Error(
            "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
          );
      }
      let i;
      const s = this.workerNextTaskID++,
        r = e.byteLength,
        a = this._getWorker(s, r)
          .then(
            (l) => (
              (i = l),
              new Promise((c, h) => {
                (i._callbacks[s] = { resolve: c, reject: h }),
                  i.postMessage(
                    { type: "decode", id: s, taskConfig: t, buffer: e },
                    [e]
                  );
              })
            )
          )
          .then((l) => this._createGeometry(l.geometry));
      return (
        a
          .catch(() => !0)
          .then(() => {
            i && s && this._releaseTask(i, s);
          }),
        Cr.set(e, { key: n, promise: a }),
        a
      );
    }
    _createGeometry(e) {
      const t = new Rt();
      e.index && t.setIndex(new ut(e.index.array, 1));
      for (let n = 0; n < e.attributes.length; n++) {
        const i = e.attributes[n],
          s = i.name,
          r = i.array,
          a = i.itemSize,
          l = new ut(r, a);
        s === "color" && this._assignVertexColorSpace(l, i.vertexColorSpace),
          t.setAttribute(s, l);
      }
      return t;
    }
    _assignVertexColorSpace(e, t) {
      if (t !== Dt) return;
      const n = new ye();
      for (let i = 0, s = e.count; i < s; i++)
        n.fromBufferAttribute(e, i).convertSRGBToLinear(),
          e.setXYZ(i, n.r, n.g, n.b);
    }
    _loadLibrary(e, t) {
      const n = new Cs(this.manager);
      return (
        n.setPath(this.decoderPath),
        n.setResponseType(t),
        n.setWithCredentials(this.withCredentials),
        new Promise((i, s) => {
          n.load(e, i, void 0, s);
        })
      );
    }
    preload() {
      return this._initDecoder(), this;
    }
    _initDecoder() {
      if (this.decoderPending) return this.decoderPending;
      const e =
          typeof WebAssembly != "object" || this.decoderConfig.type === "js",
        t = [];
      return (
        e
          ? t.push(this._loadLibrary("draco_decoder.js", "text"))
          : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")),
            t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
        (this.decoderPending = Promise.all(t).then((n) => {
          const i = n[0];
          e || (this.decoderConfig.wasmBinary = n[1]);
          const s = p_.toString(),
            r = [
              "/* draco decoder */",
              i,
              "",
              "/* worker */",
              s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))
            ].join(`
  `);
          this.workerSourceURL = URL.createObjectURL(new Blob([r]));
        })),
        this.decoderPending
      );
    }
    _getWorker(e, t) {
      return this._initDecoder().then(() => {
        if (this.workerPool.length < this.workerLimit) {
          const i = new Worker(this.workerSourceURL);
          (i._callbacks = {}),
            (i._taskCosts = {}),
            (i._taskLoad = 0),
            i.postMessage({ type: "init", decoderConfig: this.decoderConfig }),
            (i.onmessage = function (s) {
              const r = s.data;
              switch (r.type) {
                case "decode":
                  i._callbacks[r.id].resolve(r);
                  break;
                case "error":
                  i._callbacks[r.id].reject(r);
                  break;
                default:
                  console.error(
                    'THREE.DRACOLoader: Unexpected message, "' + r.type + '"'
                  );
              }
            }),
            this.workerPool.push(i);
        } else
          this.workerPool.sort(function (i, s) {
            return i._taskLoad > s._taskLoad ? -1 : 1;
          });
        const n = this.workerPool[this.workerPool.length - 1];
        return (n._taskCosts[e] = t), (n._taskLoad += t), n;
      });
    }
    _releaseTask(e, t) {
      (e._taskLoad -= e._taskCosts[t]),
        delete e._callbacks[t],
        delete e._taskCosts[t];
    }
    debug() {
      console.log(
        "Task load: ",
        this.workerPool.map((e) => e._taskLoad)
      );
    }
    dispose() {
      for (let e = 0; e < this.workerPool.length; ++e)
        this.workerPool[e].terminate();
      return (
        (this.workerPool.length = 0),
        this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL),
        this
      );
    }
  }
  function p_() {
    let o, e;
    onmessage = function (r) {
      const a = r.data;
      switch (a.type) {
        case "init":
          (o = a.decoderConfig),
            (e = new Promise(function (h) {
              (o.onModuleLoaded = function (u) {
                h({ draco: u });
              }),
                DracoDecoderModule(o);
            }));
          break;
        case "decode":
          const l = a.buffer,
            c = a.taskConfig;
          e.then((h) => {
            const u = h.draco,
              d = new u.Decoder();
            try {
              const p = t(u, d, new Int8Array(l), c),
                g = p.attributes.map((_) => _.array.buffer);
              p.index && g.push(p.index.array.buffer),
                self.postMessage({ type: "decode", id: a.id, geometry: p }, g);
            } catch (p) {
              console.error(p),
                self.postMessage({ type: "error", id: a.id, error: p.message });
            } finally {
              u.destroy(d);
            }
          });
          break;
      }
    };
    function t(r, a, l, c) {
      const h = c.attributeIDs,
        u = c.attributeTypes;
      let d, p;
      const g = a.GetEncodedGeometryType(l);
      if (g === r.TRIANGULAR_MESH)
        (d = new r.Mesh()), (p = a.DecodeArrayToMesh(l, l.byteLength, d));
      else if (g === r.POINT_CLOUD)
        (d = new r.PointCloud()),
          (p = a.DecodeArrayToPointCloud(l, l.byteLength, d));
      else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
      if (!p.ok() || d.ptr === 0)
        throw new Error("THREE.DRACOLoader: Decoding failed: " + p.error_msg());
      const _ = { index: null, attributes: [] };
      for (const m in h) {
        const f = self[u[m]];
        let b, v;
        if (c.useUniqueIDs) (v = h[m]), (b = a.GetAttributeByUniqueId(d, v));
        else {
          if (((v = a.GetAttributeId(d, r[h[m]])), v === -1)) continue;
          b = a.GetAttribute(d, v);
        }
        const y = i(r, a, d, m, f, b);
        m === "color" && (y.vertexColorSpace = c.vertexColorSpace),
          _.attributes.push(y);
      }
      return g === r.TRIANGULAR_MESH && (_.index = n(r, a, d)), r.destroy(d), _;
    }
    function n(r, a, l) {
      const h = l.num_faces() * 3,
        u = h * 4,
        d = r._malloc(u);
      a.GetTrianglesUInt32Array(l, u, d);
      const p = new Uint32Array(r.HEAPF32.buffer, d, h).slice();
      return r._free(d), { array: p, itemSize: 1 };
    }
    function i(r, a, l, c, h, u) {
      const d = u.num_components(),
        g = l.num_points() * d,
        _ = g * h.BYTES_PER_ELEMENT,
        m = s(r, h),
        f = r._malloc(_);
      a.GetAttributeDataArrayForAllPoints(l, u, m, _, f);
      const b = new h(r.HEAPF32.buffer, f, g).slice();
      return r._free(f), { name: c, array: b, itemSize: d };
    }
    function s(r, a) {
      switch (a) {
        case Float32Array:
          return r.DT_FLOAT32;
        case Int8Array:
          return r.DT_INT8;
        case Int16Array:
          return r.DT_INT16;
        case Int32Array:
          return r.DT_INT32;
        case Uint8Array:
          return r.DT_UINT8;
        case Uint16Array:
          return r.DT_UINT16;
        case Uint32Array:
          return r.DT_UINT32;
      }
    }
  }
  function El(o, e) {
    if (e === Jh)
      return (
        console.warn(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
        ),
        o
      );
    if (e === Ur || e === Vl) {
      let t = o.getIndex();
      if (t === null) {
        const r = [],
          a = o.getAttribute("position");
        if (a !== void 0) {
          for (let l = 0; l < a.count; l++) r.push(l);
          o.setIndex(r), (t = o.getIndex());
        } else
          return (
            console.error(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
            ),
            o
          );
      }
      const n = t.count - 2,
        i = [];
      if (e === Ur)
        for (let r = 1; r <= n; r++)
          i.push(t.getX(0)), i.push(t.getX(r)), i.push(t.getX(r + 1));
      else
        for (let r = 0; r < n; r++)
          r % 2 === 0
            ? (i.push(t.getX(r)), i.push(t.getX(r + 1)), i.push(t.getX(r + 2)))
            : (i.push(t.getX(r + 2)), i.push(t.getX(r + 1)), i.push(t.getX(r)));
      i.length / 3 !== n &&
        console.error(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
        );
      const s = o.clone();
      return s.setIndex(i), s.clearGroups(), s;
    } else
      return (
        console.error(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
          e
        ),
        o
      );
  }
  class m_ extends Ei {
    constructor(e) {
      super(e),
        (this.dracoLoader = null),
        (this.ktx2Loader = null),
        (this.meshoptDecoder = null),
        (this.pluginCallbacks = []),
        this.register(function (t) {
          return new S_(t);
        }),
        this.register(function (t) {
          return new w_(t);
        }),
        this.register(function (t) {
          return new C_(t);
        }),
        this.register(function (t) {
          return new R_(t);
        }),
        this.register(function (t) {
          return new y_(t);
        }),
        this.register(function (t) {
          return new T_(t);
        }),
        this.register(function (t) {
          return new b_(t);
        }),
        this.register(function (t) {
          return new A_(t);
        }),
        this.register(function (t) {
          return new v_(t);
        }),
        this.register(function (t) {
          return new E_(t);
        }),
        this.register(function (t) {
          return new M_(t);
        }),
        this.register(function (t) {
          return new __(t);
        }),
        this.register(function (t) {
          return new I_(t);
        }),
        this.register(function (t) {
          return new L_(t);
        });
    }
    load(e, t, n, i) {
      const s = this;
      let r;
      this.resourcePath !== ""
        ? (r = this.resourcePath)
        : this.path !== ""
        ? (r = this.path)
        : (r = Hr.extractUrlBase(e)),
        this.manager.itemStart(e);
      const a = function (c) {
          i ? i(c) : console.error(c),
            s.manager.itemError(e),
            s.manager.itemEnd(e);
        },
        l = new Cs(this.manager);
      l.setPath(this.path),
        l.setResponseType("arraybuffer"),
        l.setRequestHeader(this.requestHeader),
        l.setWithCredentials(this.withCredentials),
        l.load(
          e,
          function (c) {
            try {
              s.parse(
                c,
                r,
                function (h) {
                  t(h), s.manager.itemEnd(e);
                },
                a
              );
            } catch (h) {
              a(h);
            }
          },
          n,
          a
        );
    }
    setDRACOLoader(e) {
      return (this.dracoLoader = e), this;
    }
    setDDSLoader() {
      throw new Error(
        'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
      );
    }
    setKTX2Loader(e) {
      return (this.ktx2Loader = e), this;
    }
    setMeshoptDecoder(e) {
      return (this.meshoptDecoder = e), this;
    }
    register(e) {
      return (
        this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
        this
      );
    }
    unregister(e) {
      return (
        this.pluginCallbacks.indexOf(e) !== -1 &&
          this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
        this
      );
    }
    parse(e, t, n, i) {
      let s;
      const r = {},
        a = {},
        l = new TextDecoder();
      if (typeof e == "string") s = JSON.parse(e);
      else if (e instanceof ArrayBuffer) {
        if (l.decode(new Uint8Array(e, 0, 4)) === _c) {
          try {
            r[Ue.KHR_BINARY_GLTF] = new P_(e);
          } catch (u) {
            i && i(u);
            return;
          }
          s = JSON.parse(r[Ue.KHR_BINARY_GLTF].content);
        } else s = JSON.parse(l.decode(e));
      } else s = e;
      if (s.asset === void 0 || s.asset.version[0] < 2) {
        i &&
          i(
            new Error(
              "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
            )
          );
        return;
      }
      const c = new X_(s, {
        path: t || this.resourcePath || "",
        crossOrigin: this.crossOrigin,
        requestHeader: this.requestHeader,
        manager: this.manager,
        ktx2Loader: this.ktx2Loader,
        meshoptDecoder: this.meshoptDecoder
      });
      c.fileLoader.setRequestHeader(this.requestHeader);
      for (let h = 0; h < this.pluginCallbacks.length; h++) {
        const u = this.pluginCallbacks[h](c);
        (a[u.name] = u), (r[u.name] = !0);
      }
      if (s.extensionsUsed)
        for (let h = 0; h < s.extensionsUsed.length; ++h) {
          const u = s.extensionsUsed[h],
            d = s.extensionsRequired || [];
          switch (u) {
            case Ue.KHR_MATERIALS_UNLIT:
              r[u] = new x_();
              break;
            case Ue.KHR_DRACO_MESH_COMPRESSION:
              r[u] = new D_(s, this.dracoLoader);
              break;
            case Ue.KHR_TEXTURE_TRANSFORM:
              r[u] = new N_();
              break;
            case Ue.KHR_MESH_QUANTIZATION:
              r[u] = new O_();
              break;
            default:
              d.indexOf(u) >= 0 &&
                a[u] === void 0 &&
                console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
          }
        }
      c.setExtensions(r), c.setPlugins(a), c.parse(n, i);
    }
    parseAsync(e, t) {
      const n = this;
      return new Promise(function (i, s) {
        n.parse(e, t, i, s);
      });
    }
  }
  function g_() {
    let o = {};
    return {
      get: function (e) {
        return o[e];
      },
      add: function (e, t) {
        o[e] = t;
      },
      remove: function (e) {
        delete o[e];
      },
      removeAll: function () {
        o = {};
      }
    };
  }
  const Ue = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
  };
  class __ {
    constructor(e) {
      (this.parser = e),
        (this.name = Ue.KHR_LIGHTS_PUNCTUAL),
        (this.cache = { refs: {}, uses: {} });
    }
    _markDefs() {
      const e = this.parser,
        t = this.parser.json.nodes || [];
      for (let n = 0, i = t.length; n < i; n++) {
        const s = t[n];
        s.extensions &&
          s.extensions[this.name] &&
          s.extensions[this.name].light !== void 0 &&
          e._addNodeRef(this.cache, s.extensions[this.name].light);
      }
    }
    _loadLight(e) {
      const t = this.parser,
        n = "light:" + e;
      let i = t.cache.get(n);
      if (i) return i;
      const s = t.json,
        l = (((s.extensions && s.extensions[this.name]) || {}).lights || [])[e];
      let c;
      const h = new ye(16777215);
      l.color !== void 0 && h.fromArray(l.color);
      const u = l.range !== void 0 ? l.range : 0;
      switch (l.type) {
        case "directional":
          (c = new Wg(h)), c.target.position.set(0, 0, -1), c.add(c.target);
          break;
        case "point":
          (c = new Gg(h)), (c.distance = u);
          break;
        case "spot":
          (c = new kg(h)),
            (c.distance = u),
            (l.spot = l.spot || {}),
            (l.spot.innerConeAngle =
              l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0),
            (l.spot.outerConeAngle =
              l.spot.outerConeAngle !== void 0
                ? l.spot.outerConeAngle
                : Math.PI / 4),
            (c.angle = l.spot.outerConeAngle),
            (c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle),
            c.target.position.set(0, 0, -1),
            c.add(c.target);
          break;
        default:
          throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
      }
      return (
        c.position.set(0, 0, 0),
        (c.decay = 2),
        vn(c, l),
        l.intensity !== void 0 && (c.intensity = l.intensity),
        (c.name = t.createUniqueName(l.name || "light_" + e)),
        (i = Promise.resolve(c)),
        t.cache.add(n, i),
        i
      );
    }
    getDependency(e, t) {
      if (e === "light") return this._loadLight(t);
    }
    createNodeAttachment(e) {
      const t = this,
        n = this.parser,
        s = n.json.nodes[e],
        a = ((s.extensions && s.extensions[this.name]) || {}).light;
      return a === void 0
        ? null
        : this._loadLight(a).then(function (l) {
            return n._getNodeRef(t.cache, a, l);
          });
    }
  }
  class x_ {
    constructor() {
      this.name = Ue.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return Pn;
    }
    extendParams(e, t, n) {
      const i = [];
      (e.color = new ye(1, 1, 1)), (e.opacity = 1);
      const s = t.pbrMetallicRoughness;
      if (s) {
        if (Array.isArray(s.baseColorFactor)) {
          const r = s.baseColorFactor;
          e.color.fromArray(r), (e.opacity = r[3]);
        }
        s.baseColorTexture !== void 0 &&
          i.push(n.assignTexture(e, "map", s.baseColorTexture, Fe));
      }
      return Promise.all(i);
    }
  }
  class v_ {
    constructor(e) {
      (this.parser = e), (this.name = Ue.KHR_MATERIALS_EMISSIVE_STRENGTH);
    }
    extendMaterialParams(e, t) {
      const i = this.parser.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = i.extensions[this.name].emissiveStrength;
      return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
    }
  }
  class S_ {
    constructor(e) {
      (this.parser = e), (this.name = Ue.KHR_MATERIALS_CLEARCOAT);
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vn;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [],
        r = i.extensions[this.name];
      if (
        (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor),
        r.clearcoatTexture !== void 0 &&
          s.push(n.assignTexture(t, "clearcoatMap", r.clearcoatTexture)),
        r.clearcoatRoughnessFactor !== void 0 &&
          (t.clearcoatRoughness = r.clearcoatRoughnessFactor),
        r.clearcoatRoughnessTexture !== void 0 &&
          s.push(
            n.assignTexture(
              t,
              "clearcoatRoughnessMap",
              r.clearcoatRoughnessTexture
            )
          ),
        r.clearcoatNormalTexture !== void 0 &&
          (s.push(
            n.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)
          ),
          r.clearcoatNormalTexture.scale !== void 0))
      ) {
        const a = r.clearcoatNormalTexture.scale;
        t.clearcoatNormalScale = new De(a, a);
      }
      return Promise.all(s);
    }
  }
  class M_ {
    constructor(e) {
      (this.parser = e), (this.name = Ue.KHR_MATERIALS_IRIDESCENCE);
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vn;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [],
        r = i.extensions[this.name];
      return (
        r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor),
        r.iridescenceTexture !== void 0 &&
          s.push(n.assignTexture(t, "iridescenceMap", r.iridescenceTexture)),
        r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor),
        t.iridescenceThicknessRange === void 0 &&
          (t.iridescenceThicknessRange = [100, 400]),
        r.iridescenceThicknessMinimum !== void 0 &&
          (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum),
        r.iridescenceThicknessMaximum !== void 0 &&
          (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum),
        r.iridescenceThicknessTexture !== void 0 &&
          s.push(
            n.assignTexture(
              t,
              "iridescenceThicknessMap",
              r.iridescenceThicknessTexture
            )
          ),
        Promise.all(s)
      );
    }
  }
  class y_ {
    constructor(e) {
      (this.parser = e), (this.name = Ue.KHR_MATERIALS_SHEEN);
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vn;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [];
      (t.sheenColor = new ye(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1);
      const r = i.extensions[this.name];
      return (
        r.sheenColorFactor !== void 0 &&
          t.sheenColor.fromArray(r.sheenColorFactor),
        r.sheenRoughnessFactor !== void 0 &&
          (t.sheenRoughness = r.sheenRoughnessFactor),
        r.sheenColorTexture !== void 0 &&
          s.push(n.assignTexture(t, "sheenColorMap", r.sheenColorTexture, Fe)),
        r.sheenRoughnessTexture !== void 0 &&
          s.push(
            n.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)
          ),
        Promise.all(s)
      );
    }
  }
  class T_ {
    constructor(e) {
      (this.parser = e), (this.name = Ue.KHR_MATERIALS_TRANSMISSION);
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vn;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [],
        r = i.extensions[this.name];
      return (
        r.transmissionFactor !== void 0 &&
          (t.transmission = r.transmissionFactor),
        r.transmissionTexture !== void 0 &&
          s.push(n.assignTexture(t, "transmissionMap", r.transmissionTexture)),
        Promise.all(s)
      );
    }
  }
  class b_ {
    constructor(e) {
      (this.parser = e), (this.name = Ue.KHR_MATERIALS_VOLUME);
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vn;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [],
        r = i.extensions[this.name];
      (t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0),
        r.thicknessTexture !== void 0 &&
          s.push(n.assignTexture(t, "thicknessMap", r.thicknessTexture)),
        (t.attenuationDistance = r.attenuationDistance || 1 / 0);
      const a = r.attenuationColor || [1, 1, 1];
      return (t.attenuationColor = new ye(a[0], a[1], a[2])), Promise.all(s);
    }
  }
  class A_ {
    constructor(e) {
      (this.parser = e), (this.name = Ue.KHR_MATERIALS_IOR);
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vn;
    }
    extendMaterialParams(e, t) {
      const i = this.parser.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = i.extensions[this.name];
      return (t.ior = s.ior !== void 0 ? s.ior : 1.5), Promise.resolve();
    }
  }
  class E_ {
    constructor(e) {
      (this.parser = e), (this.name = Ue.KHR_MATERIALS_SPECULAR);
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vn;
    }
    extendMaterialParams(e, t) {
      const n = this.parser,
        i = n.json.materials[e];
      if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
      const s = [],
        r = i.extensions[this.name];
      (t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1),
        r.specularTexture !== void 0 &&
          s.push(n.assignTexture(t, "specularIntensityMap", r.specularTexture));
      const a = r.specularColorFactor || [1, 1, 1];
      return (
        (t.specularColor = new ye(a[0], a[1], a[2])),
        r.specularColorTexture !== void 0 &&
          s.push(
            n.assignTexture(t, "specularColorMap", r.specularColorTexture, Fe)
          ),
        Promise.all(s)
      );
    }
  }
  class w_ {
    constructor(e) {
      (this.parser = e), (this.name = Ue.KHR_TEXTURE_BASISU);
    }
    loadTexture(e) {
      const t = this.parser,
        n = t.json,
        i = n.textures[e];
      if (!i.extensions || !i.extensions[this.name]) return null;
      const s = i.extensions[this.name],
        r = t.options.ktx2Loader;
      if (!r) {
        if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error(
            "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
          );
        return null;
      }
      return t.loadTextureImage(e, s.source, r);
    }
  }
  class C_ {
    constructor(e) {
      (this.parser = e),
        (this.name = Ue.EXT_TEXTURE_WEBP),
        (this.isSupported = null);
    }
    loadTexture(e) {
      const t = this.name,
        n = this.parser,
        i = n.json,
        s = i.textures[e];
      if (!s.extensions || !s.extensions[t]) return null;
      const r = s.extensions[t],
        a = i.images[r.source];
      let l = n.textureLoader;
      if (a.uri) {
        const c = n.options.manager.getHandler(a.uri);
        c !== null && (l = c);
      }
      return this.detectSupport().then(function (c) {
        if (c) return n.loadTextureImage(e, r.source, l);
        if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
          throw new Error(
            "THREE.GLTFLoader: WebP required by asset but unsupported."
          );
        return n.loadTexture(e);
      });
    }
    detectSupport() {
      return (
        this.isSupported ||
          (this.isSupported = new Promise(function (e) {
            const t = new Image();
            (t.src =
              "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
              (t.onload = t.onerror =
                function () {
                  e(t.height === 1);
                });
          })),
        this.isSupported
      );
    }
  }
  class R_ {
    constructor(e) {
      (this.parser = e),
        (this.name = Ue.EXT_TEXTURE_AVIF),
        (this.isSupported = null);
    }
    loadTexture(e) {
      const t = this.name,
        n = this.parser,
        i = n.json,
        s = i.textures[e];
      if (!s.extensions || !s.extensions[t]) return null;
      const r = s.extensions[t],
        a = i.images[r.source];
      let l = n.textureLoader;
      if (a.uri) {
        const c = n.options.manager.getHandler(a.uri);
        c !== null && (l = c);
      }
      return this.detectSupport().then(function (c) {
        if (c) return n.loadTextureImage(e, r.source, l);
        if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
          throw new Error(
            "THREE.GLTFLoader: AVIF required by asset but unsupported."
          );
        return n.loadTexture(e);
      });
    }
    detectSupport() {
      return (
        this.isSupported ||
          (this.isSupported = new Promise(function (e) {
            const t = new Image();
            (t.src =
              "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI="),
              (t.onload = t.onerror =
                function () {
                  e(t.height === 1);
                });
          })),
        this.isSupported
      );
    }
  }
  class I_ {
    constructor(e) {
      (this.name = Ue.EXT_MESHOPT_COMPRESSION), (this.parser = e);
    }
    loadBufferView(e) {
      const t = this.parser.json,
        n = t.bufferViews[e];
      if (n.extensions && n.extensions[this.name]) {
        const i = n.extensions[this.name],
          s = this.parser.getDependency("buffer", i.buffer),
          r = this.parser.options.meshoptDecoder;
        if (!r || !r.supported) {
          if (
            t.extensionsRequired &&
            t.extensionsRequired.indexOf(this.name) >= 0
          )
            throw new Error(
              "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
            );
          return null;
        }
        return s.then(function (a) {
          const l = i.byteOffset || 0,
            c = i.byteLength || 0,
            h = i.count,
            u = i.byteStride,
            d = new Uint8Array(a, l, c);
          return r.decodeGltfBufferAsync
            ? r
                .decodeGltfBufferAsync(h, u, d, i.mode, i.filter)
                .then(function (p) {
                  return p.buffer;
                })
            : r.ready.then(function () {
                const p = new ArrayBuffer(h * u);
                return (
                  r.decodeGltfBuffer(
                    new Uint8Array(p),
                    h,
                    u,
                    d,
                    i.mode,
                    i.filter
                  ),
                  p
                );
              });
        });
      } else return null;
    }
  }
  class L_ {
    constructor(e) {
      (this.name = Ue.EXT_MESH_GPU_INSTANCING), (this.parser = e);
    }
    createNodeMesh(e) {
      const t = this.parser.json,
        n = t.nodes[e];
      if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
        return null;
      const i = t.meshes[n.mesh];
      for (const c of i.primitives)
        if (
          c.mode !== Pt.TRIANGLES &&
          c.mode !== Pt.TRIANGLE_STRIP &&
          c.mode !== Pt.TRIANGLE_FAN &&
          c.mode !== void 0
        )
          return null;
      const r = n.extensions[this.name].attributes,
        a = [],
        l = {};
      for (const c in r)
        a.push(
          this.parser
            .getDependency("accessor", r[c])
            .then((h) => ((l[c] = h), l[c]))
        );
      return a.length < 1
        ? null
        : (a.push(this.parser.createNodeMesh(e)),
          Promise.all(a).then((c) => {
            const h = c.pop(),
              u = h.isGroup ? h.children : [h],
              d = c[0].count,
              p = [];
            for (const g of u) {
              const _ = new Re(),
                m = new R(),
                f = new Gt(),
                b = new R(1, 1, 1),
                v = new Eg(g.geometry, g.material, d);
              for (let y = 0; y < d; y++)
                l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, y),
                  l.ROTATION && f.fromBufferAttribute(l.ROTATION, y),
                  l.SCALE && b.fromBufferAttribute(l.SCALE, y),
                  v.setMatrixAt(y, _.compose(m, f, b));
              for (const y in l)
                y !== "TRANSLATION" &&
                  y !== "ROTATION" &&
                  y !== "SCALE" &&
                  g.geometry.setAttribute(y, l[y]);
              qe.prototype.copy.call(v, g),
                this.parser.assignFinalMaterial(v),
                p.push(v);
            }
            return h.isGroup ? (h.clear(), h.add(...p), h) : p[0];
          }));
    }
  }
  const _c = "glTF",
    Oi = 12,
    wl = { JSON: 1313821514, BIN: 5130562 };
  class P_ {
    constructor(e) {
      (this.name = Ue.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
      const t = new DataView(e, 0, Oi),
        n = new TextDecoder();
      if (
        ((this.header = {
          magic: n.decode(new Uint8Array(e.slice(0, 4))),
          version: t.getUint32(4, !0),
          length: t.getUint32(8, !0)
        }),
        this.header.magic !== _c)
      )
        throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      if (this.header.version < 2)
        throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
      const i = this.header.length - Oi,
        s = new DataView(e, Oi);
      let r = 0;
      for (; r < i; ) {
        const a = s.getUint32(r, !0);
        r += 4;
        const l = s.getUint32(r, !0);
        if (((r += 4), l === wl.JSON)) {
          const c = new Uint8Array(e, Oi + r, a);
          this.content = n.decode(c);
        } else if (l === wl.BIN) {
          const c = Oi + r;
          this.body = e.slice(c, c + a);
        }
        r += a;
      }
      if (this.content === null)
        throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
  }
  class D_ {
    constructor(e, t) {
      if (!t)
        throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      (this.name = Ue.KHR_DRACO_MESH_COMPRESSION),
        (this.json = e),
        (this.dracoLoader = t),
        this.dracoLoader.preload();
    }
    decodePrimitive(e, t) {
      const n = this.json,
        i = this.dracoLoader,
        s = e.extensions[this.name].bufferView,
        r = e.extensions[this.name].attributes,
        a = {},
        l = {},
        c = {};
      for (const h in r) {
        const u = Wr[h] || h.toLowerCase();
        a[u] = r[h];
      }
      for (const h in e.attributes) {
        const u = Wr[h] || h.toLowerCase();
        if (r[h] !== void 0) {
          const d = n.accessors[e.attributes[h]],
            p = pi[d.componentType];
          (c[u] = p.name), (l[u] = d.normalized === !0);
        }
      }
      return t.getDependency("bufferView", s).then(function (h) {
        return new Promise(function (u) {
          i.decodeDracoFile(
            h,
            function (d) {
              for (const p in d.attributes) {
                const g = d.attributes[p],
                  _ = l[p];
                _ !== void 0 && (g.normalized = _);
              }
              u(d);
            },
            a,
            c
          );
        });
      });
    }
  }
  class N_ {
    constructor() {
      this.name = Ue.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(e, t) {
      return (
        ((t.texCoord === void 0 || t.texCoord === e.channel) &&
          t.offset === void 0 &&
          t.rotation === void 0 &&
          t.scale === void 0) ||
          ((e = e.clone()),
          t.texCoord !== void 0 && (e.channel = t.texCoord),
          t.offset !== void 0 && e.offset.fromArray(t.offset),
          t.rotation !== void 0 && (e.rotation = t.rotation),
          t.scale !== void 0 && e.repeat.fromArray(t.scale),
          (e.needsUpdate = !0)),
        e
      );
    }
  }
  class O_ {
    constructor() {
      this.name = Ue.KHR_MESH_QUANTIZATION;
    }
  }
  class xc extends Ki {
    constructor(e, t, n, i) {
      super(e, t, n, i);
    }
    copySampleValue_(e) {
      const t = this.resultBuffer,
        n = this.sampleValues,
        i = this.valueSize,
        s = e * i * 3 + i;
      for (let r = 0; r !== i; r++) t[r] = n[s + r];
      return t;
    }
    interpolate_(e, t, n, i) {
      const s = this.resultBuffer,
        r = this.sampleValues,
        a = this.valueSize,
        l = a * 2,
        c = a * 3,
        h = i - t,
        u = (n - t) / h,
        d = u * u,
        p = d * u,
        g = e * c,
        _ = g - c,
        m = -2 * p + 3 * d,
        f = p - d,
        b = 1 - m,
        v = f - d + u;
      for (let y = 0; y !== a; y++) {
        const A = r[_ + y + a],
          C = r[_ + y + l] * h,
          I = r[g + y + a],
          D = r[g + y] * h;
        s[y] = b * A + v * C + m * I + f * D;
      }
      return s;
    }
  }
  const U_ = new Gt();
  class F_ extends xc {
    interpolate_(e, t, n, i) {
      const s = super.interpolate_(e, t, n, i);
      return U_.fromArray(s).normalize().toArray(s), s;
    }
  }
  const Pt = {
      FLOAT: 5126,
      FLOAT_MAT3: 35675,
      FLOAT_MAT4: 35676,
      FLOAT_VEC2: 35664,
      FLOAT_VEC3: 35665,
      FLOAT_VEC4: 35666,
      LINEAR: 9729,
      REPEAT: 10497,
      SAMPLER_2D: 35678,
      POINTS: 0,
      LINES: 1,
      LINE_LOOP: 2,
      LINE_STRIP: 3,
      TRIANGLES: 4,
      TRIANGLE_STRIP: 5,
      TRIANGLE_FAN: 6,
      UNSIGNED_BYTE: 5121,
      UNSIGNED_SHORT: 5123
    },
    pi = {
      5120: Int8Array,
      5121: Uint8Array,
      5122: Int16Array,
      5123: Uint16Array,
      5125: Uint32Array,
      5126: Float32Array
    },
    Cl = { 9728: at, 9729: ot, 9984: Or, 9985: zl, 9986: bs, 9987: On },
    Rl = { 33071: Nt, 33648: Es, 10497: _i },
    Rr = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
    Wr = {
      POSITION: "position",
      NORMAL: "normal",
      TANGENT: "tangent",
      TEXCOORD_0: "uv",
      TEXCOORD_1: "uv2",
      COLOR_0: "color",
      WEIGHTS_0: "skinWeight",
      JOINTS_0: "skinIndex"
    },
    xn = {
      scale: "scale",
      translation: "position",
      rotation: "quaternion",
      weights: "morphTargetInfluences"
    },
    B_ = { CUBICSPLINE: void 0, LINEAR: vi, STEP: Gi },
    Ir = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
  function z_(o) {
    return (
      o.DefaultMaterial === void 0 &&
        (o.DefaultMaterial = new ia({
          color: 16777215,
          emissive: 0,
          metalness: 1,
          roughness: 1,
          transparent: !1,
          depthTest: !0,
          side: Kt
        })),
      o.DefaultMaterial
    );
  }
  function Ui(o, e, t) {
    for (const n in t.extensions)
      o[n] === void 0 &&
        ((e.userData.gltfExtensions = e.userData.gltfExtensions || {}),
        (e.userData.gltfExtensions[n] = t.extensions[n]));
  }
  function vn(o, e) {
    e.extras !== void 0 &&
      (typeof e.extras == "object"
        ? Object.assign(o.userData, e.extras)
        : console.warn(
            "THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras
          ));
  }
  function k_(o, e, t) {
    let n = !1,
      i = !1,
      s = !1;
    for (let c = 0, h = e.length; c < h; c++) {
      const u = e[c];
      if (
        (u.POSITION !== void 0 && (n = !0),
        u.NORMAL !== void 0 && (i = !0),
        u.COLOR_0 !== void 0 && (s = !0),
        n && i && s)
      )
        break;
    }
    if (!n && !i && !s) return Promise.resolve(o);
    const r = [],
      a = [],
      l = [];
    for (let c = 0, h = e.length; c < h; c++) {
      const u = e[c];
      if (n) {
        const d =
          u.POSITION !== void 0
            ? t.getDependency("accessor", u.POSITION)
            : o.attributes.position;
        r.push(d);
      }
      if (i) {
        const d =
          u.NORMAL !== void 0
            ? t.getDependency("accessor", u.NORMAL)
            : o.attributes.normal;
        a.push(d);
      }
      if (s) {
        const d =
          u.COLOR_0 !== void 0
            ? t.getDependency("accessor", u.COLOR_0)
            : o.attributes.color;
        l.push(d);
      }
    }
    return Promise.all([Promise.all(r), Promise.all(a), Promise.all(l)]).then(
      function (c) {
        const h = c[0],
          u = c[1],
          d = c[2];
        return (
          n && (o.morphAttributes.position = h),
          i && (o.morphAttributes.normal = u),
          s && (o.morphAttributes.color = d),
          (o.morphTargetsRelative = !0),
          o
        );
      }
    );
  }
  function V_(o, e) {
    if ((o.updateMorphTargets(), e.weights !== void 0))
      for (let t = 0, n = e.weights.length; t < n; t++)
        o.morphTargetInfluences[t] = e.weights[t];
    if (e.extras && Array.isArray(e.extras.targetNames)) {
      const t = e.extras.targetNames;
      if (o.morphTargetInfluences.length === t.length) {
        o.morphTargetDictionary = {};
        for (let n = 0, i = t.length; n < i; n++)
          o.morphTargetDictionary[t[n]] = n;
      } else
        console.warn(
          "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
        );
    }
  }
  function G_(o) {
    const e = o.extensions && o.extensions[Ue.KHR_DRACO_MESH_COMPRESSION];
    let t;
    return (
      e
        ? (t = "draco:" + e.bufferView + ":" + e.indices + ":" + Il(e.attributes))
        : (t = o.indices + ":" + Il(o.attributes) + ":" + o.mode),
      t
    );
  }
  function Il(o) {
    let e = "";
    const t = Object.keys(o).sort();
    for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + o[t[n]] + ";";
    return e;
  }
  function Xr(o) {
    switch (o) {
      case Int8Array:
        return 1 / 127;
      case Uint8Array:
        return 1 / 255;
      case Int16Array:
        return 1 / 32767;
      case Uint16Array:
        return 1 / 65535;
      default:
        throw new Error(
          "THREE.GLTFLoader: Unsupported normalized accessor component type."
        );
    }
  }
  function H_(o) {
    return o.search(/\.jpe?g($|\?)/i) > 0 || o.search(/^data\:image\/jpeg/) === 0
      ? "image/jpeg"
      : o.search(/\.webp($|\?)/i) > 0 || o.search(/^data\:image\/webp/) === 0
      ? "image/webp"
      : "image/png";
  }
  const W_ = new Re();
  class X_ {
    constructor(e = {}, t = {}) {
      (this.json = e),
        (this.extensions = {}),
        (this.plugins = {}),
        (this.options = t),
        (this.cache = new g_()),
        (this.associations = new Map()),
        (this.primitiveCache = {}),
        (this.nodeCache = {}),
        (this.meshCache = { refs: {}, uses: {} }),
        (this.cameraCache = { refs: {}, uses: {} }),
        (this.lightCache = { refs: {}, uses: {} }),
        (this.sourceCache = {}),
        (this.textureCache = {}),
        (this.nodeNamesUsed = {});
      let n = !1,
        i = !1,
        s = -1;
      typeof navigator < "u" &&
        ((n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0),
        (i = navigator.userAgent.indexOf("Firefox") > -1),
        (s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1)),
        typeof createImageBitmap > "u" || n || (i && s < 98)
          ? (this.textureLoader = new Ds(this.options.manager))
          : (this.textureLoader = new Xg(this.options.manager)),
        this.textureLoader.setCrossOrigin(this.options.crossOrigin),
        this.textureLoader.setRequestHeader(this.options.requestHeader),
        (this.fileLoader = new Cs(this.options.manager)),
        this.fileLoader.setResponseType("arraybuffer"),
        this.options.crossOrigin === "use-credentials" &&
          this.fileLoader.setWithCredentials(!0);
    }
    setExtensions(e) {
      this.extensions = e;
    }
    setPlugins(e) {
      this.plugins = e;
    }
    parse(e, t) {
      const n = this,
        i = this.json,
        s = this.extensions;
      this.cache.removeAll(),
        (this.nodeCache = {}),
        this._invokeAll(function (r) {
          return r._markDefs && r._markDefs();
        }),
        Promise.all(
          this._invokeAll(function (r) {
            return r.beforeRoot && r.beforeRoot();
          })
        )
          .then(function () {
            return Promise.all([
              n.getDependencies("scene"),
              n.getDependencies("animation"),
              n.getDependencies("camera")
            ]);
          })
          .then(function (r) {
            const a = {
              scene: r[0][i.scene || 0],
              scenes: r[0],
              animations: r[1],
              cameras: r[2],
              asset: i.asset,
              parser: n,
              userData: {}
            };
            Ui(s, a, i),
              vn(a, i),
              Promise.all(
                n._invokeAll(function (l) {
                  return l.afterRoot && l.afterRoot(a);
                })
              ).then(function () {
                e(a);
              });
          })
          .catch(t);
    }
    _markDefs() {
      const e = this.json.nodes || [],
        t = this.json.skins || [],
        n = this.json.meshes || [];
      for (let i = 0, s = t.length; i < s; i++) {
        const r = t[i].joints;
        for (let a = 0, l = r.length; a < l; a++) e[r[a]].isBone = !0;
      }
      for (let i = 0, s = e.length; i < s; i++) {
        const r = e[i];
        r.mesh !== void 0 &&
          (this._addNodeRef(this.meshCache, r.mesh),
          r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)),
          r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
      }
    }
    _addNodeRef(e, t) {
      t !== void 0 &&
        (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
    }
    _getNodeRef(e, t, n) {
      if (e.refs[t] <= 1) return n;
      const i = n.clone(),
        s = (r, a) => {
          const l = this.associations.get(r);
          l != null && this.associations.set(a, l);
          for (const [c, h] of r.children.entries()) s(h, a.children[c]);
        };
      return s(n, i), (i.name += "_instance_" + e.uses[t]++), i;
    }
    _invokeOne(e) {
      const t = Object.values(this.plugins);
      t.push(this);
      for (let n = 0; n < t.length; n++) {
        const i = e(t[n]);
        if (i) return i;
      }
      return null;
    }
    _invokeAll(e) {
      const t = Object.values(this.plugins);
      t.unshift(this);
      const n = [];
      for (let i = 0; i < t.length; i++) {
        const s = e(t[i]);
        s && n.push(s);
      }
      return n;
    }
    getDependency(e, t) {
      const n = e + ":" + t;
      let i = this.cache.get(n);
      if (!i) {
        switch (e) {
          case "scene":
            i = this.loadScene(t);
            break;
          case "node":
            i = this._invokeOne(function (s) {
              return s.loadNode && s.loadNode(t);
            });
            break;
          case "mesh":
            i = this._invokeOne(function (s) {
              return s.loadMesh && s.loadMesh(t);
            });
            break;
          case "accessor":
            i = this.loadAccessor(t);
            break;
          case "bufferView":
            i = this._invokeOne(function (s) {
              return s.loadBufferView && s.loadBufferView(t);
            });
            break;
          case "buffer":
            i = this.loadBuffer(t);
            break;
          case "material":
            i = this._invokeOne(function (s) {
              return s.loadMaterial && s.loadMaterial(t);
            });
            break;
          case "texture":
            i = this._invokeOne(function (s) {
              return s.loadTexture && s.loadTexture(t);
            });
            break;
          case "skin":
            i = this.loadSkin(t);
            break;
          case "animation":
            i = this._invokeOne(function (s) {
              return s.loadAnimation && s.loadAnimation(t);
            });
            break;
          case "camera":
            i = this.loadCamera(t);
            break;
          default:
            if (
              ((i = this._invokeOne(function (s) {
                return s != this && s.getDependency && s.getDependency(e, t);
              })),
              !i)
            )
              throw new Error("Unknown type: " + e);
            break;
        }
        this.cache.add(n, i);
      }
      return i;
    }
    getDependencies(e) {
      let t = this.cache.get(e);
      if (!t) {
        const n = this,
          i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
        (t = Promise.all(
          i.map(function (s, r) {
            return n.getDependency(e, r);
          })
        )),
          this.cache.add(e, t);
      }
      return t;
    }
    loadBuffer(e) {
      const t = this.json.buffers[e],
        n = this.fileLoader;
      if (t.type && t.type !== "arraybuffer")
        throw new Error(
          "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
        );
      if (t.uri === void 0 && e === 0)
        return Promise.resolve(this.extensions[Ue.KHR_BINARY_GLTF].body);
      const i = this.options;
      return new Promise(function (s, r) {
        n.load(Hr.resolveURL(t.uri, i.path), s, void 0, function () {
          r(
            new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".')
          );
        });
      });
    }
    loadBufferView(e) {
      const t = this.json.bufferViews[e];
      return this.getDependency("buffer", t.buffer).then(function (n) {
        const i = t.byteLength || 0,
          s = t.byteOffset || 0;
        return n.slice(s, s + i);
      });
    }
    loadAccessor(e) {
      const t = this,
        n = this.json,
        i = this.json.accessors[e];
      if (i.bufferView === void 0 && i.sparse === void 0) {
        const r = Rr[i.type],
          a = pi[i.componentType],
          l = i.normalized === !0,
          c = new a(i.count * r);
        return Promise.resolve(new ut(c, r, l));
      }
      const s = [];
      return (
        i.bufferView !== void 0
          ? s.push(this.getDependency("bufferView", i.bufferView))
          : s.push(null),
        i.sparse !== void 0 &&
          (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)),
          s.push(this.getDependency("bufferView", i.sparse.values.bufferView))),
        Promise.all(s).then(function (r) {
          const a = r[0],
            l = Rr[i.type],
            c = pi[i.componentType],
            h = c.BYTES_PER_ELEMENT,
            u = h * l,
            d = i.byteOffset || 0,
            p =
              i.bufferView !== void 0
                ? n.bufferViews[i.bufferView].byteStride
                : void 0,
            g = i.normalized === !0;
          let _, m;
          if (p && p !== u) {
            const f = Math.floor(d / p),
              b =
                "InterleavedBuffer:" +
                i.bufferView +
                ":" +
                i.componentType +
                ":" +
                f +
                ":" +
                i.count;
            let v = t.cache.get(b);
            v ||
              ((_ = new c(a, f * p, (i.count * p) / h)),
              (v = new Sg(_, p / h)),
              t.cache.add(b, v)),
              (m = new Qr(v, l, (d % p) / h, g));
          } else a === null ? (_ = new c(i.count * l)) : (_ = new c(a, d, i.count * l)), (m = new ut(_, l, g));
          if (i.sparse !== void 0) {
            const f = Rr.SCALAR,
              b = pi[i.sparse.indices.componentType],
              v = i.sparse.indices.byteOffset || 0,
              y = i.sparse.values.byteOffset || 0,
              A = new b(r[1], v, i.sparse.count * f),
              C = new c(r[2], y, i.sparse.count * l);
            a !== null && (m = new ut(m.array.slice(), m.itemSize, m.normalized));
            for (let I = 0, D = A.length; I < D; I++) {
              const S = A[I];
              if (
                (m.setX(S, C[I * l]),
                l >= 2 && m.setY(S, C[I * l + 1]),
                l >= 3 && m.setZ(S, C[I * l + 2]),
                l >= 4 && m.setW(S, C[I * l + 3]),
                l >= 5)
              )
                throw new Error(
                  "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
                );
            }
          }
          return m;
        })
      );
    }
    loadTexture(e) {
      const t = this.json,
        n = this.options,
        s = t.textures[e].source,
        r = t.images[s];
      let a = this.textureLoader;
      if (r.uri) {
        const l = n.manager.getHandler(r.uri);
        l !== null && (a = l);
      }
      return this.loadTextureImage(e, s, a);
    }
    loadTextureImage(e, t, n) {
      const i = this,
        s = this.json,
        r = s.textures[e],
        a = s.images[t],
        l = (a.uri || a.bufferView) + ":" + r.sampler;
      if (this.textureCache[l]) return this.textureCache[l];
      const c = this.loadImageSource(t, n)
        .then(function (h) {
          (h.flipY = !1),
            (h.name = r.name || a.name || ""),
            h.name === "" &&
              typeof a.uri == "string" &&
              a.uri.startsWith("data:image/") === !1 &&
              (h.name = a.uri);
          const d = (s.samplers || {})[r.sampler] || {};
          return (
            (h.magFilter = Cl[d.magFilter] || ot),
            (h.minFilter = Cl[d.minFilter] || On),
            (h.wrapS = Rl[d.wrapS] || _i),
            (h.wrapT = Rl[d.wrapT] || _i),
            i.associations.set(h, { textures: e }),
            h
          );
        })
        .catch(function () {
          return null;
        });
      return (this.textureCache[l] = c), c;
    }
    loadImageSource(e, t) {
      const n = this,
        i = this.json,
        s = this.options;
      if (this.sourceCache[e] !== void 0)
        return this.sourceCache[e].then((u) => u.clone());
      const r = i.images[e],
        a = self.URL || self.webkitURL;
      let l = r.uri || "",
        c = !1;
      if (r.bufferView !== void 0)
        l = n.getDependency("bufferView", r.bufferView).then(function (u) {
          c = !0;
          const d = new Blob([u], { type: r.mimeType });
          return (l = a.createObjectURL(d)), l;
        });
      else if (r.uri === void 0)
        throw new Error(
          "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
        );
      const h = Promise.resolve(l)
        .then(function (u) {
          return new Promise(function (d, p) {
            let g = d;
            t.isImageBitmapLoader === !0 &&
              (g = function (_) {
                const m = new lt(_);
                (m.needsUpdate = !0), d(m);
              }),
              t.load(Hr.resolveURL(u, s.path), g, void 0, p);
          });
        })
        .then(function (u) {
          return (
            c === !0 && a.revokeObjectURL(l),
            (u.userData.mimeType = r.mimeType || H_(r.uri)),
            u
          );
        })
        .catch(function (u) {
          throw (console.error("THREE.GLTFLoader: Couldn't load texture", l), u);
        });
      return (this.sourceCache[e] = h), h;
    }
    assignTexture(e, t, n, i) {
      const s = this;
      return this.getDependency("texture", n.index).then(function (r) {
        if (!r) return null;
        if (
          (n.texCoord !== void 0 &&
            n.texCoord > 0 &&
            ((r = r.clone()), (r.channel = n.texCoord)),
          s.extensions[Ue.KHR_TEXTURE_TRANSFORM])
        ) {
          const a =
            n.extensions !== void 0
              ? n.extensions[Ue.KHR_TEXTURE_TRANSFORM]
              : void 0;
          if (a) {
            const l = s.associations.get(r);
            (r = s.extensions[Ue.KHR_TEXTURE_TRANSFORM].extendTexture(r, a)),
              s.associations.set(r, l);
          }
        }
        return i !== void 0 && (r.encoding = i), (e[t] = r), r;
      });
    }
    assignFinalMaterial(e) {
      const t = e.geometry;
      let n = e.material;
      const i = t.attributes.tangent === void 0,
        s = t.attributes.color !== void 0,
        r = t.attributes.normal === void 0;
      if (e.isPoints) {
        const a = "PointsMaterial:" + n.uuid;
        let l = this.cache.get(a);
        l ||
          ((l = new dc()),
          jt.prototype.copy.call(l, n),
          l.color.copy(n.color),
          (l.map = n.map),
          (l.sizeAttenuation = !1),
          this.cache.add(a, l)),
          (n = l);
      } else if (e.isLine) {
        const a = "LineBasicMaterial:" + n.uuid;
        let l = this.cache.get(a);
        l ||
          ((l = new ta()),
          jt.prototype.copy.call(l, n),
          l.color.copy(n.color),
          (l.map = n.map),
          this.cache.add(a, l)),
          (n = l);
      }
      if (i || s || r) {
        let a = "ClonedMaterial:" + n.uuid + ":";
        i && (a += "derivative-tangents:"),
          s && (a += "vertex-colors:"),
          r && (a += "flat-shading:");
        let l = this.cache.get(a);
        l ||
          ((l = n.clone()),
          s && (l.vertexColors = !0),
          r && (l.flatShading = !0),
          i &&
            (l.normalScale && (l.normalScale.y *= -1),
            l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)),
          this.cache.add(a, l),
          this.associations.set(l, this.associations.get(n))),
          (n = l);
      }
      e.material = n;
    }
    getMaterialType() {
      return ia;
    }
    loadMaterial(e) {
      const t = this,
        n = this.json,
        i = this.extensions,
        s = n.materials[e];
      let r;
      const a = {},
        l = s.extensions || {},
        c = [];
      if (l[Ue.KHR_MATERIALS_UNLIT]) {
        const u = i[Ue.KHR_MATERIALS_UNLIT];
        (r = u.getMaterialType()), c.push(u.extendParams(a, s, t));
      } else {
        const u = s.pbrMetallicRoughness || {};
        if (
          ((a.color = new ye(1, 1, 1)),
          (a.opacity = 1),
          Array.isArray(u.baseColorFactor))
        ) {
          const d = u.baseColorFactor;
          a.color.fromArray(d), (a.opacity = d[3]);
        }
        u.baseColorTexture !== void 0 &&
          c.push(t.assignTexture(a, "map", u.baseColorTexture, Fe)),
          (a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1),
          (a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1),
          u.metallicRoughnessTexture !== void 0 &&
            (c.push(
              t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)
            ),
            c.push(
              t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture)
            )),
          (r = this._invokeOne(function (d) {
            return d.getMaterialType && d.getMaterialType(e);
          })),
          c.push(
            Promise.all(
              this._invokeAll(function (d) {
                return d.extendMaterialParams && d.extendMaterialParams(e, a);
              })
            )
          );
      }
      s.doubleSided === !0 && (a.side = qt);
      const h = s.alphaMode || Ir.OPAQUE;
      if (
        (h === Ir.BLEND
          ? ((a.transparent = !0), (a.depthWrite = !1))
          : ((a.transparent = !1),
            h === Ir.MASK &&
              (a.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)),
        s.normalTexture !== void 0 &&
          r !== Pn &&
          (c.push(t.assignTexture(a, "normalMap", s.normalTexture)),
          (a.normalScale = new De(1, 1)),
          s.normalTexture.scale !== void 0))
      ) {
        const u = s.normalTexture.scale;
        a.normalScale.set(u, u);
      }
      return (
        s.occlusionTexture !== void 0 &&
          r !== Pn &&
          (c.push(t.assignTexture(a, "aoMap", s.occlusionTexture)),
          s.occlusionTexture.strength !== void 0 &&
            (a.aoMapIntensity = s.occlusionTexture.strength)),
        s.emissiveFactor !== void 0 &&
          r !== Pn &&
          (a.emissive = new ye().fromArray(s.emissiveFactor)),
        s.emissiveTexture !== void 0 &&
          r !== Pn &&
          c.push(t.assignTexture(a, "emissiveMap", s.emissiveTexture, Fe)),
        Promise.all(c).then(function () {
          const u = new r(a);
          return (
            s.name && (u.name = s.name),
            vn(u, s),
            t.associations.set(u, { materials: e }),
            s.extensions && Ui(i, u, s),
            u
          );
        })
      );
    }
    createUniqueName(e) {
      const t = Be.sanitizeNodeName(e || "");
      let n = t;
      for (let i = 1; this.nodeNamesUsed[n]; ++i) n = t + "_" + i;
      return (this.nodeNamesUsed[n] = !0), n;
    }
    loadGeometries(e) {
      const t = this,
        n = this.extensions,
        i = this.primitiveCache;
      function s(a) {
        return n[Ue.KHR_DRACO_MESH_COMPRESSION]
          .decodePrimitive(a, t)
          .then(function (l) {
            return Ll(l, a, t);
          });
      }
      const r = [];
      for (let a = 0, l = e.length; a < l; a++) {
        const c = e[a],
          h = G_(c),
          u = i[h];
        if (u) r.push(u.promise);
        else {
          let d;
          c.extensions && c.extensions[Ue.KHR_DRACO_MESH_COMPRESSION]
            ? (d = s(c))
            : (d = Ll(new Rt(), c, t)),
            (i[h] = { primitive: c, promise: d }),
            r.push(d);
        }
      }
      return Promise.all(r);
    }
    loadMesh(e) {
      const t = this,
        n = this.json,
        i = this.extensions,
        s = n.meshes[e],
        r = s.primitives,
        a = [];
      for (let l = 0, c = r.length; l < c; l++) {
        const h =
          r[l].material === void 0
            ? z_(this.cache)
            : this.getDependency("material", r[l].material);
        a.push(h);
      }
      return (
        a.push(t.loadGeometries(r)),
        Promise.all(a).then(function (l) {
          const c = l.slice(0, l.length - 1),
            h = l[l.length - 1],
            u = [];
          for (let p = 0, g = h.length; p < g; p++) {
            const _ = h[p],
              m = r[p];
            let f;
            const b = c[p];
            if (
              m.mode === Pt.TRIANGLES ||
              m.mode === Pt.TRIANGLE_STRIP ||
              m.mode === Pt.TRIANGLE_FAN ||
              m.mode === void 0
            )
              (f = s.isSkinnedMesh === !0 ? new yg(_, b) : new yt(_, b)),
                f.isSkinnedMesh === !0 && f.normalizeSkinWeights(),
                m.mode === Pt.TRIANGLE_STRIP
                  ? (f.geometry = El(f.geometry, Vl))
                  : m.mode === Pt.TRIANGLE_FAN &&
                    (f.geometry = El(f.geometry, Ur));
            else if (m.mode === Pt.LINES) f = new uc(_, b);
            else if (m.mode === Pt.LINE_STRIP) f = new na(_, b);
            else if (m.mode === Pt.LINE_LOOP) f = new wg(_, b);
            else if (m.mode === Pt.POINTS) f = new Cg(_, b);
            else
              throw new Error(
                "THREE.GLTFLoader: Primitive mode unsupported: " + m.mode
              );
            Object.keys(f.geometry.morphAttributes).length > 0 && V_(f, s),
              (f.name = t.createUniqueName(s.name || "mesh_" + e)),
              vn(f, s),
              m.extensions && Ui(i, f, m),
              t.assignFinalMaterial(f),
              u.push(f);
          }
          for (let p = 0, g = u.length; p < g; p++)
            t.associations.set(u[p], { meshes: e, primitives: p });
          if (u.length === 1) return u[0];
          const d = new Dn();
          t.associations.set(d, { meshes: e });
          for (let p = 0, g = u.length; p < g; p++) d.add(u[p]);
          return d;
        })
      );
    }
    loadCamera(e) {
      let t;
      const n = this.json.cameras[e],
        i = n[n.type];
      if (!i) {
        console.warn("THREE.GLTFLoader: Missing camera parameters.");
        return;
      }
      return (
        n.type === "perspective"
          ? (t = new St(
              gu.radToDeg(i.yfov),
              i.aspectRatio || 1,
              i.znear || 1,
              i.zfar || 2e6
            ))
          : n.type === "orthographic" &&
            (t = new ji(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)),
        n.name && (t.name = this.createUniqueName(n.name)),
        vn(t, n),
        Promise.resolve(t)
      );
    }
    loadSkin(e) {
      const t = this.json.skins[e],
        n = [];
      for (let i = 0, s = t.joints.length; i < s; i++)
        n.push(this._loadNodeShallow(t.joints[i]));
      return (
        t.inverseBindMatrices !== void 0
          ? n.push(this.getDependency("accessor", t.inverseBindMatrices))
          : n.push(null),
        Promise.all(n).then(function (i) {
          const s = i.pop(),
            r = i,
            a = [],
            l = [];
          for (let c = 0, h = r.length; c < h; c++) {
            const u = r[c];
            if (u) {
              a.push(u);
              const d = new Re();
              s !== null && d.fromArray(s.array, c * 16), l.push(d);
            } else
              console.warn(
                'THREE.GLTFLoader: Joint "%s" could not be found.',
                t.joints[c]
              );
          }
          return new ea(a, l);
        })
      );
    }
    loadAnimation(e) {
      const n = this.json.animations[e],
        i = n.name ? n.name : "animation_" + e,
        s = [],
        r = [],
        a = [],
        l = [],
        c = [];
      for (let h = 0, u = n.channels.length; h < u; h++) {
        const d = n.channels[h],
          p = n.samplers[d.sampler],
          g = d.target,
          _ = g.node,
          m = n.parameters !== void 0 ? n.parameters[p.input] : p.input,
          f = n.parameters !== void 0 ? n.parameters[p.output] : p.output;
        g.node !== void 0 &&
          (s.push(this.getDependency("node", _)),
          r.push(this.getDependency("accessor", m)),
          a.push(this.getDependency("accessor", f)),
          l.push(p),
          c.push(g));
      }
      return Promise.all([
        Promise.all(s),
        Promise.all(r),
        Promise.all(a),
        Promise.all(l),
        Promise.all(c)
      ]).then(function (h) {
        const u = h[0],
          d = h[1],
          p = h[2],
          g = h[3],
          _ = h[4],
          m = [];
        for (let f = 0, b = u.length; f < b; f++) {
          const v = u[f],
            y = d[f],
            A = p[f],
            C = g[f],
            I = _[f];
          if (v === void 0) continue;
          v.updateMatrix();
          let D;
          switch (xn[I.path]) {
            case xn.weights:
              D = Wi;
              break;
            case xn.rotation:
              D = Bn;
              break;
            case xn.position:
            case xn.scale:
            default:
              D = Xi;
              break;
          }
          const S = v.name ? v.name : v.uuid,
            E = C.interpolation !== void 0 ? B_[C.interpolation] : vi,
            W = [];
          xn[I.path] === xn.weights
            ? v.traverse(function (P) {
                P.morphTargetInfluences && W.push(P.name ? P.name : P.uuid);
              })
            : W.push(S);
          let j = A.array;
          if (A.normalized) {
            const P = Xr(j.constructor),
              O = new Float32Array(j.length);
            for (let F = 0, Q = j.length; F < Q; F++) O[F] = j[F] * P;
            j = O;
          }
          for (let P = 0, O = W.length; P < O; P++) {
            const F = new D(W[P] + "." + xn[I.path], y.array, j, E);
            C.interpolation === "CUBICSPLINE" &&
              ((F.createInterpolant = function ($) {
                const X = this instanceof Bn ? F_ : xc;
                return new X(this.times, this.values, this.getValueSize() / 3, $);
              }),
              (F.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline =
                !0)),
              m.push(F);
          }
        }
        return new Gr(i, void 0, m);
      });
    }
    createNodeMesh(e) {
      const t = this.json,
        n = this,
        i = t.nodes[e];
      return i.mesh === void 0
        ? null
        : n.getDependency("mesh", i.mesh).then(function (s) {
            const r = n._getNodeRef(n.meshCache, i.mesh, s);
            return (
              i.weights !== void 0 &&
                r.traverse(function (a) {
                  if (a.isMesh)
                    for (let l = 0, c = i.weights.length; l < c; l++)
                      a.morphTargetInfluences[l] = i.weights[l];
                }),
              r
            );
          });
    }
    loadNode(e) {
      const t = this.json,
        n = this,
        i = t.nodes[e],
        s = n._loadNodeShallow(e),
        r = [],
        a = i.children || [];
      for (let c = 0, h = a.length; c < h; c++)
        r.push(n.getDependency("node", a[c]));
      const l =
        i.skin === void 0
          ? Promise.resolve(null)
          : n.getDependency("skin", i.skin);
      return Promise.all([s, Promise.all(r), l]).then(function (c) {
        const h = c[0],
          u = c[1],
          d = c[2];
        d !== null &&
          h.traverse(function (p) {
            p.isSkinnedMesh && p.bind(d, W_);
          });
        for (let p = 0, g = u.length; p < g; p++) h.add(u[p]);
        return h;
      });
    }
    _loadNodeShallow(e) {
      const t = this.json,
        n = this.extensions,
        i = this;
      if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
      const s = t.nodes[e],
        r = s.name ? i.createUniqueName(s.name) : "",
        a = [],
        l = i._invokeOne(function (c) {
          return c.createNodeMesh && c.createNodeMesh(e);
        });
      return (
        l && a.push(l),
        s.camera !== void 0 &&
          a.push(
            i.getDependency("camera", s.camera).then(function (c) {
              return i._getNodeRef(i.cameraCache, s.camera, c);
            })
          ),
        i
          ._invokeAll(function (c) {
            return c.createNodeAttachment && c.createNodeAttachment(e);
          })
          .forEach(function (c) {
            a.push(c);
          }),
        (this.nodeCache[e] = Promise.all(a).then(function (c) {
          let h;
          if (
            (s.isBone === !0
              ? (h = new hc())
              : c.length > 1
              ? (h = new Dn())
              : c.length === 1
              ? (h = c[0])
              : (h = new qe()),
            h !== c[0])
          )
            for (let u = 0, d = c.length; u < d; u++) h.add(c[u]);
          if (
            (s.name && ((h.userData.name = s.name), (h.name = r)),
            vn(h, s),
            s.extensions && Ui(n, h, s),
            s.matrix !== void 0)
          ) {
            const u = new Re();
            u.fromArray(s.matrix), h.applyMatrix4(u);
          } else s.translation !== void 0 && h.position.fromArray(s.translation), s.rotation !== void 0 && h.quaternion.fromArray(s.rotation), s.scale !== void 0 && h.scale.fromArray(s.scale);
          return (
            i.associations.has(h) || i.associations.set(h, {}),
            (i.associations.get(h).nodes = e),
            h
          );
        })),
        this.nodeCache[e]
      );
    }
    loadScene(e) {
      const t = this.extensions,
        n = this.json.scenes[e],
        i = this,
        s = new Dn();
      n.name && (s.name = i.createUniqueName(n.name)),
        vn(s, n),
        n.extensions && Ui(t, s, n);
      const r = n.nodes || [],
        a = [];
      for (let l = 0, c = r.length; l < c; l++)
        a.push(i.getDependency("node", r[l]));
      return Promise.all(a).then(function (l) {
        for (let h = 0, u = l.length; h < u; h++) s.add(l[h]);
        const c = (h) => {
          const u = new Map();
          for (const [d, p] of i.associations)
            (d instanceof jt || d instanceof lt) && u.set(d, p);
          return (
            h.traverse((d) => {
              const p = i.associations.get(d);
              p != null && u.set(d, p);
            }),
            u
          );
        };
        return (i.associations = c(s)), s;
      });
    }
  }
  function q_(o, e, t) {
    const n = e.attributes,
      i = new hn();
    if (n.POSITION !== void 0) {
      const a = t.json.accessors[n.POSITION],
        l = a.min,
        c = a.max;
      if (l !== void 0 && c !== void 0) {
        if (
          (i.set(new R(l[0], l[1], l[2]), new R(c[0], c[1], c[2])), a.normalized)
        ) {
          const h = Xr(pi[a.componentType]);
          i.min.multiplyScalar(h), i.max.multiplyScalar(h);
        }
      } else {
        console.warn(
          "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
        );
        return;
      }
    } else return;
    const s = e.targets;
    if (s !== void 0) {
      const a = new R(),
        l = new R();
      for (let c = 0, h = s.length; c < h; c++) {
        const u = s[c];
        if (u.POSITION !== void 0) {
          const d = t.json.accessors[u.POSITION],
            p = d.min,
            g = d.max;
          if (p !== void 0 && g !== void 0) {
            if (
              (l.setX(Math.max(Math.abs(p[0]), Math.abs(g[0]))),
              l.setY(Math.max(Math.abs(p[1]), Math.abs(g[1]))),
              l.setZ(Math.max(Math.abs(p[2]), Math.abs(g[2]))),
              d.normalized)
            ) {
              const _ = Xr(pi[d.componentType]);
              l.multiplyScalar(_);
            }
            a.max(l);
          } else
            console.warn(
              "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
            );
        }
      }
      i.expandByVector(a);
    }
    o.boundingBox = i;
    const r = new un();
    i.getCenter(r.center),
      (r.radius = i.min.distanceTo(i.max) / 2),
      (o.boundingSphere = r);
  }
  function Ll(o, e, t) {
    const n = e.attributes,
      i = [];
    function s(r, a) {
      return t.getDependency("accessor", r).then(function (l) {
        o.setAttribute(a, l);
      });
    }
    for (const r in n) {
      const a = Wr[r] || r.toLowerCase();
      a in o.attributes || i.push(s(n[r], a));
    }
    if (e.indices !== void 0 && !o.index) {
      const r = t.getDependency("accessor", e.indices).then(function (a) {
        o.setIndex(a);
      });
      i.push(r);
    }
    return (
      vn(o, e),
      q_(o, e, t),
      Promise.all(i).then(function () {
        return e.targets !== void 0 ? k_(o, e.targets, t) : o;
      })
    );
  }
  function Pl(o) {
    const e = new Map(),
      t = new Map(),
      n = o.clone();
    return (
      vc(o, n, function (i, s) {
        e.set(s, i), t.set(i, s);
      }),
      n.traverse(function (i) {
        if (!i.isSkinnedMesh) return;
        const s = i,
          r = e.get(i),
          a = r.skeleton.bones;
        (s.skeleton = r.skeleton.clone()),
          s.bindMatrix.copy(r.bindMatrix),
          (s.skeleton.bones = a.map(function (l) {
            return t.get(l);
          })),
          s.bind(s.skeleton, s.bindMatrix);
      }),
      n
    );
  }
  function vc(o, e, t) {
    t(o, e);
    for (let n = 0; n < o.children.length; n++)
      vc(o.children[n], e.children[n], t);
  }
  const Lr = 2.2;
  zn.enabled = !0;
  let ln;
  function Rx(
    o,
    { onLoad: e, onProgress: t, onError: n, isAddToLoadingWait: i } = {}
  ) {
    ln = ln || new Ds();
    const s = o
      ? ln.load(
          o,
          (r) => {
            e && e(r);
          },
          t,
          n
        )
      : null;
    return (
      i &&
        s &&
        (mt.loadingCountList[mt.pageId].push(
          new Promise(async (r) => {
            r(await s);
          })
        ),
        Rs()),
      s
    );
  }
  function Ix(o, e = {}) {
    return /\.png$/.test(o) ? Sc(o, e) : /\.jpe?g$/.test(o) ? Mc(o, e) : null;
  }
  function Lx({ src: o, format: e }, t = {}) {
    return e === "png" ? Sc(o, t) : /^jpe?g$/.test(e) ? Mc(o, t) : null;
  }
  function Sc(
    o,
    { onLoad: e, onProgress: t, onError: n, isAddToLoadingWait: i } = {}
  ) {
    ln = ln || new Ds();
    let s;
    if (i) {
      const a = new Promise((l) => {
        s = l;
      });
      mt.loadingCountList[mt.pageId].push(a);
    }
    return o
      ? ln.load(
          o,
          (a) => {
            j_(a), e && e(a), i && (s(a), Rs());
          },
          t,
          n
        )
      : null;
  }
  function Mc(
    o,
    { onLoad: e, onProgress: t, onError: n, isAddToLoadingWait: i } = {}
  ) {
    ln = ln || new Ds();
    let s;
    if (i) {
      const a = new Promise((l) => {
        s = l;
      });
      mt.loadingCountList[mt.pageId].push(a);
    }
    return o
      ? ln.load(
          o,
          (a) => {
            K_(a), e && e(a), i && (s(a), Rs());
          },
          t,
          n
        )
      : null;
  }
  function j_(o, e = ot) {
    (o.anisotropy = 0), (o.magFilter = o.minFilter = e);
  }
  function K_(o, e = ot) {
    o.magFilter = o.minFilter = e;
  }
  function Px(
    o,
    {
      onLoad: e,
      onProgress: t,
      onError: n,
      isSkeleton: i,
      disableCache: s,
      isAddToLoadingWait: r
    } = {}
  ) {
    if (!s && mt.gltf[o]) {
      const c = mt.gltf[o];
      e && e(c, i ? Pl(c.scene) : c.scene.clone());
      return;
    }
    mt.gltfLoader =
      mt.gltfLoader ||
      (() => {
        const c = new m_(),
          h = new f_();
        return h.setDecoderPath("/gl/draco/"), c.setDRACOLoader(h), c;
      })();
    let a;
    if (r) {
      const c = new Promise((h) => {
        a = h;
      });
      mt.loadingCountList[mt.pageId].push(c);
    }
    return o
      ? mt.gltfLoader.load(
          o,
          (c) => {
            c.scene.traverse((h) => {
              h.isMesh && (h.material.side = Kt);
            }),
              s || (mt.gltf[o] = c),
              e && e(c, s ? c.scene : i ? Pl(c.scene) : c.scene.clone()),
              r && (a(c), Rs());
          },
          t,
          n
        )
      : null;
  }
  function Dx(o) {
    const e = {};
    return (
      Object.keys(o).forEach((t) => {
        e[t] = { value: o[t] };
      }),
      e
    );
  }
  function Nx(o) {
    return o;
  }
  function Ox(o, e, t) {
    return [hi(o.x, e.x, t), hi(o.y, e.y, t), hi(o.z, e.z, t)];
  }
  function Ux(o, e, t) {
    return [hi(o.r, e.r, t), hi(o.g, e.g, t), hi(o.b, e.b, t)];
  }
  function Fx(o) {
    return new ye(Math.pow(o.r, Lr), Math.pow(o.g, Lr), Math.pow(o.b, Lr));
  }
  class Bx extends Dl {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "isDisposed", !1);
      _defineProperty(this, "disposeTargets", new Map());
      _defineProperty(this, "meshes", {});
      _defineProperty(this, "textures", {});
      _defineProperty(this, "renderTargets", {});
    }
    dispose() {
      (this.isDisposed = !0),
        this.scene && this.disposeScene(this.scene),
        this.scene2D && this.disposeScene(this.scene2D),
        this.sceneBackground && this.disposeScene(this.sceneBackground),
        this.sceneCar && this.disposeScene(this.sceneCar),
        this.sceneSky && this.disposeScene(this.sceneSky),
        this.sceneLoading && this.disposeScene(this.sceneLoading),
        this.basicScene && this.disposeScene(this.basicScene),
        this.sceneText && this.disposeScene(this.sceneText);
      for (const [e, t] of Object.entries(this.meshes))
        t.dispose(), delete this.meshes[e];
      for (const [e, t] of Object.entries(this.textures))
        t.dispose(), delete this.textures[e];
      for (const [e, t] of Object.entries(this.renderTargets))
        t.dispose(), delete this.renderTargets[e];
      this.postprocessing && this.postprocessing.dispose();
    }
    resizeScene(e, t) {
      this.scene && this.scene.resize(e, t),
        this.sceneBackground && this.sceneBackground.resize(e, t),
        this.sceneCar && this.sceneCar.resize(e, t),
        this.sceneSky && this.sceneSky.resize(e, t),
        this.basicScene && this.basicScene.resize(e, t);
    }
    addDisposeTarget(e, t) {
      let n = this.disposeTargets.get(e);
      n || ((n = []), this.disposeTargets.set(e, n)), n.push(t);
    }
    disposeScene(e) {
      let t = this.disposeTargets.get(e);
      t || ((t = []), this.disposeTargets.set(e, t)),
        e !== null &&
          e !== void 0 &&
          e.traverse((n) => {
            if (n.name === "glTF")
              t.push(n),
                n.children.forEach((i, s) => {
                  this.disposeScene(i);
                });
            else if (
              n.isScene ||
              n.isGroup ||
              (n.isObject3D && !n.isMesh && !n.isLight)
            )
              n.children.forEach((i, s) => {
                this.disposeScene(i);
              });
            else if (n.isMesh)
              if (n.dispose) n.dispose(), t.push(n);
              else {
                const { geometry: i, material: s } = n;
                i && i.dispose(),
                  Array.isArray(s)
                    ? s.forEach((r) => {
                        this.disposeMaterial(r);
                      })
                    : s && this.disposeMaterial(s),
                  t.push(n);
              }
          }),
        t.forEach((n) => {
          e.remove(n);
        });
    }
    disposeMaterial(e) {
      e.map && e.map.dispose(),
        e.lightMap && e.lightMap.dispose(),
        e.bumpMap && e.bumpMap.dispose(),
        e.normalMap && e.normalMap.dispose(),
        e.specularMap && e.specularMap.dispose(),
        e.envMap && e.envMap.dispose(),
        e.alphaMap && e.alphaMap.dispose(),
        e.aoMap && e.aoMap.dispose(),
        e.displacementMap && e.displacementMap.dispose(),
        e.emissiveMap && e.emissiveMap.dispose(),
        e.gradientMap && e.gradientMap.dispose(),
        e.metalnessMap && e.metalnessMap.dispose(),
        e.roughnessMap && e.roughnessMap.dispose(),
        e.dispose();
    }
    restore() {
      (this.isDisposed = !1),
        this.scene && this.restoreScene(this.scene),
        this.scene2D && this.restoreScene(this.scene2D),
        this.sceneBackground && this.restoreScene(this.sceneBackground),
        this.sceneCar && this.restoreScene(this.sceneCar),
        this.sceneSky && this.restoreScene(this.sceneSky),
        this.sceneLoading && this.restoreScene(this.sceneLoading),
        this.basicScene && this.restoreScene(this.basicScene),
        this.sceneText && this.restoreScene(this.sceneText);
    }
    restoreScene(e) {
      const t = this.disposeTargets.get(e);
      t &&
        t.forEach((n) => {
          e.add(n);
        });
    }
    onDestroy() {
      mt.enablePane && this.folder && mt.pane.remove(this.folder);
    }
  }
  class zx extends yt {
    disposeGeometry(e) {
      e && e.dispose();
    }
    disposeMaterial(e) {
      e && Array.isArray(e)
        ? e.forEach((t) => this.disposeMaterialSingle(t))
        : e && this.disposeMaterialSingle(e);
    }
    disposeMaterialSingle(e) {
      e.map && e.map.dispose(), e.dispose();
    }
    dispose() {
      this.disposeGeometry(this.geometry), this.disposeMaterial(this.material);
    }
  }
  var kx = `varying vec2 vUv;
  
  void main () {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }`;
  class Vx extends ji {
    constructor({ width: e = 2, height: t = 2, near: n = 0.1, far: i = 2 } = {}) {
      super(e / -2, e / 2, t / 2, t / -2, n, i), (this.position.z = 1);
    }
    resize(e, t) {
      (this.left = e / -2),
        (this.right = e / 2),
        (this.top = t / 2),
        (this.bottom = t / -2),
        this.updateProjectionMatrix();
    }
  }
  const $t = 220,
    yc = -$t,
    Tc = 0,
    bc = Tc - yc,
    la = 0,
    Ac = la + 40,
    Y_ = Ac - la,
    Ec = 0,
    Os = $t,
    ca = Os - Ec,
    wc = Os - ca * 0.25,
    ha = Os,
    Z_ = ha - wc,
    Us = ha + 10,
    Cc = Us + 250,
    Rc = Cc - Us,
    ua = Us + Rc * 0.3,
    da = ua + 200,
    $_ = da - ua,
    Fs = da,
    Ic = Fs + ca * 0.5,
    J_ = Ic - Fs,
    Lc = 0.33,
    Q_ = Lc + 0.33,
    fa = Fs,
    pa = fa + $t * 1.2,
    ex = pa - fa,
    Bs = pa,
    zs = Bs + 300,
    ma = zs - Bs,
    ga = 0.7,
    Pc = Bs + ma * ga,
    Dc = zs - ma * Math.min(1 - ga, 0.1),
    tx = Dc - Pc,
    _a = zs,
    Zi = _a + $t,
    xa = Zi - _a,
    Nc = Zi - xa * 0.2,
    Oc = Zi - xa * 0.1,
    Uc = Oc - Nc,
    va = Zi + Uc * 1.5,
    Sa = va + 150,
    nx = Sa - va,
    Fc = 0.33,
    ix = Fc + 0.33,
    Ma = Sa,
    ya = Ma + $t,
    sx = ya - Ma,
    Ta = ya,
    ks = Ta + 200,
    Bc = ks - Ta,
    ba = ks + 100,
    $i = ba + $t,
    Vs = $i - ba,
    zc = ks - Bc * 0.3,
    kc = $i - Vs * 0.4,
    rx = kc - zc,
    Vc = $i - Vs * 0.2,
    Aa = $i - Vs * 0.1,
    Gc = Aa - Vc,
    Gs = Aa + Gc * 0.4,
    Hs = Gs + 400,
    Hc = Hs - Gs,
    Wc = Gs + Hc * 0.2,
    Xc = Hs,
    ax = Xc - Wc,
    Ws = Hs,
    Xs = Ws + $t,
    ox = Xs - Ws,
    qc = Ws,
    Ea = Xs + 400,
    lx = Ea - qc,
    jc = Xs + 10,
    wa = Ea,
    cx = wa - jc,
    Ca = wa - 30,
    Ra = Ca + 300,
    hx = Ra - Ca,
    qs = Ra,
    Kc = qs + $t,
    Yc = Kc - qs,
    Ia = 100,
    La = 50,
    Pa = qs + Yc * 0.8,
    Da = Pa + La,
    ux = Da - Pa,
    Na = Da + Ia,
    Oa = Na + La,
    dx = Oa - Na,
    Ua = Oa + Ia,
    Fa = Ua + La,
    fx = Fa - Ua,
    Ba = Fa + Ia,
    za = Ba + $t,
    px = za - Ba,
    ka = za + 1,
    Zc = ka + bc,
    mx = Zc - ka,
    gx = 0.2 - 0.01,
    Gx = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          ABOUT_BIRDS_EYE_RUN_DISTANCE: lx,
          ABOUT_BIRDS_EYE_RUN_POSITION_END: Ea,
          ABOUT_BIRDS_EYE_RUN_POSITION_START: qc,
          ABOUT_BIRD_DISTANCE: ax,
          ABOUT_BIRD_POSITION_END: Xc,
          ABOUT_BIRD_POSITION_START: Wc,
          ABOUT_SKY_TEXT_DISTANCE: hx,
          ABOUT_SKY_TEXT_POSITION_END: Ra,
          ABOUT_SKY_TEXT_POSITION_START: Ca,
          ABOUT_TEXT_DISTANCE: Hc,
          ABOUT_TEXT_POSITION_END: Hs,
          ABOUT_TEXT_POSITION_START: Gs,
          ABOUT_TITLE_DISTANCE: Gc,
          ABOUT_TITLE_POSITION_END: Aa,
          ABOUT_TITLE_POSITION_START: Vc,
          CHARGING_METER_DISTANCE: tx,
          CHARGING_METER_POSITION_END: Dc,
          CHARGING_METER_POSITION_START: Pc,
          CHARGING_METER_START_RATE: ga,
          CHARGING_TEXT_DISTANCE: ma,
          CHARGING_TEXT_POSITION_END: zs,
          CHARGING_TEXT_POSITION_START: Bs,
          INTRO_GO_NEXT_DISTANCE: J_,
          INTRO_GO_NEXT_POSITION_END: Ic,
          INTRO_GO_NEXT_POSITION_START: Fs,
          INTRO_SLIDE_DISTANCE: Rc,
          INTRO_SLIDE_POSITION_END: Cc,
          INTRO_SLIDE_POSITION_START: Us,
          INTRO_TEXT_DISTANCE: $_,
          INTRO_TEXT_POSITION_END: da,
          INTRO_TEXT_POSITION_START: ua,
          INTRO_TITLE_DISTANCE: Z_,
          INTRO_TITLE_POSITION_END: ha,
          INTRO_TITLE_POSITION_START: wc,
          KV_TITLE_DISTANCE: Y_,
          KV_TITLE_POSITION_END: Ac,
          KV_TITLE_POSITION_START: la,
          NEWS_BALLOON_DISTANCE: ux,
          NEWS_BALLOON_POSITION_END: Da,
          NEWS_BALLOON_POSITION_START: Pa,
          NEWS_CONTENT_2_DISTANCE: dx,
          NEWS_CONTENT_2_POSITION_END: Oa,
          NEWS_CONTENT_2_POSITION_START: Na,
          NEWS_CONTENT_3_DISTANCE: fx,
          NEWS_CONTENT_3_POSITION_END: Fa,
          NEWS_CONTENT_3_POSITION_START: Ua,
          SCROLL_TEXT_INTRO_POSITION: Lc,
          SCROLL_TEXT_SERVICE_POSITION: Fc,
          SCROLL_TEXT_SERVICE_TRANSITION_POSITION: ix,
          SCROLL_TEXT_TRANSITION_POSITION: Q_,
          SERVICE_OPPOSITE_CAR_DISTANCE: rx,
          SERVICE_OPPOSITE_CAR_POSITION_END: kc,
          SERVICE_OPPOSITE_CAR_POSITION_START: zc,
          SERVICE_OPPOSITE_TEXT_DISTANCE: Bc,
          SERVICE_OPPOSITE_TEXT_POSITION_END: ks,
          SERVICE_OPPOSITE_TEXT_POSITION_START: Ta,
          SERVICE_TEXT_DISTANCE: nx,
          SERVICE_TEXT_POSITION_END: Sa,
          SERVICE_TEXT_POSITION_START: va,
          SERVICE_TITLE_DISTANCE: Uc,
          SERVICE_TITLE_POSITION_END: Oc,
          SERVICE_TITLE_POSITION_START: Nc,
          START_HEADER_ENERGY_RATE: gx,
          TOP_TRANSITION_ABOUT_BIRDS_EYE_DISTANCE: ox,
          TOP_TRANSITION_ABOUT_BIRDS_EYE_POSITION_END: Xs,
          TOP_TRANSITION_ABOUT_BIRDS_EYE_POSITION_START: Ws,
          TOP_TRANSITION_ABOUT_DISTANCE: Vs,
          TOP_TRANSITION_ABOUT_POSITION_END: $i,
          TOP_TRANSITION_ABOUT_POSITION_START: ba,
          TOP_TRANSITION_ABOUT_SKY_DISTANCE: cx,
          TOP_TRANSITION_ABOUT_SKY_POSITION_END: wa,
          TOP_TRANSITION_ABOUT_SKY_POSITION_START: jc,
          TOP_TRANSITION_CHARGING_DISTANCE: ex,
          TOP_TRANSITION_CHARGING_POSITION_END: pa,
          TOP_TRANSITION_CHARGING_POSITION_START: fa,
          TOP_TRANSITION_DISTANCE: $t,
          TOP_TRANSITION_FOOTER_DISTANCE: px,
          TOP_TRANSITION_FOOTER_POSITION_END: za,
          TOP_TRANSITION_FOOTER_POSITION_START: Ba,
          TOP_TRANSITION_INTRO_DISTANCE: ca,
          TOP_TRANSITION_INTRO_POSITION_END: Os,
          TOP_TRANSITION_INTRO_POSITION_START: Ec,
          TOP_TRANSITION_KV_DISTANCE: bc,
          TOP_TRANSITION_KV_LOOP_DISTANCE: mx,
          TOP_TRANSITION_KV_LOOP_POSITION_END: Zc,
          TOP_TRANSITION_KV_LOOP_POSITION_START: ka,
          TOP_TRANSITION_KV_POSITION_END: Tc,
          TOP_TRANSITION_KV_POSITION_START: yc,
          TOP_TRANSITION_NEWS_DISTANCE: Yc,
          TOP_TRANSITION_NEWS_POSITION_END: Kc,
          TOP_TRANSITION_NEWS_POSITION_START: qs,
          TOP_TRANSITION_SERVICE_DISTANCE: xa,
          TOP_TRANSITION_SERVICE_OPPOSITE_DISTANCE: sx,
          TOP_TRANSITION_SERVICE_OPPOSITE_POSITION_END: ya,
          TOP_TRANSITION_SERVICE_OPPOSITE_POSITION_START: Ma,
          TOP_TRANSITION_SERVICE_POSITION_END: Zi,
          TOP_TRANSITION_SERVICE_POSITION_START: _a
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    );
  export {
    Re as $,
    Tx as A,
    h_ as B,
    ye as C,
    Wg as D,
    Ls as E,
    yx as F,
    Bx as G,
    Vi as H,
    qt as I,
    Sa as J,
    Fc as K,
    va as L,
    yt as M,
    Oc as N,
    ji as O,
    $r as P,
    Nc as Q,
    Mx as R,
    vg as S,
    wx as T,
    Zi as U,
    De as V,
    cn as W,
    _a as X,
    bx as Y,
    nx as Z,
    Uc as _,
    Nx as a,
    Rc as a$,
    Pl as a0,
    Xs as a1,
    Ws as a2,
    Xc as a3,
    Wc as a4,
    Hs as a5,
    Gs as a6,
    Aa as a7,
    Vc as a8,
    $i as a9,
    Ba as aA,
    px as aB,
    Fa as aC,
    Yt as aD,
    kx as aE,
    Rx as aF,
    Tc as aG,
    gx as aH,
    rx as aI,
    kc as aJ,
    ks as aK,
    Ta as aL,
    ix as aM,
    Bc as aN,
    Ix as aO,
    Gt as aP,
    gu as aQ,
    Ic as aR,
    Fs as aS,
    da as aT,
    ua as aU,
    Cc as aV,
    Us as aW,
    ha as aX,
    wc as aY,
    J_ as aZ,
    $_ as a_,
    ba as aa,
    Hc as ab,
    Gc as ac,
    Vs as ad,
    wa as ae,
    jc as af,
    Ea as ag,
    qc as ah,
    ox as ai,
    Gx as aj,
    za as ak,
    ya as al,
    ka as am,
    Zc as an,
    mx as ao,
    Ec as ap,
    Os as aq,
    ca as ar,
    xa as as,
    Ma as at,
    sx as au,
    zc as av,
    cx as aw,
    qs as ax,
    Kc as ay,
    Yc as az,
    Px as b,
    Z_ as b0,
    Ra as b1,
    Ca as b2,
    hx as b3,
    Ua as b4,
    Oa as b5,
    Na as b6,
    Da as b7,
    Pa as b8,
    kg as b9,
    Ux as ba,
    Ac as bb,
    la as bc,
    Fx as bd,
    Y_ as be,
    Ns as bf,
    at as bg,
    ig as bh,
    eu as bi,
    Mn as bj,
    tc as bk,
    o_ as bl,
    kn as bm,
    xx as bn,
    vx as bo,
    Ax as bp,
    Dx as c,
    R as d,
    St as e,
    Ex as f,
    Vx as g,
    Sx as h,
    zx as i,
    Dc as j,
    Pc as k,
    Lx as l,
    Ox as m,
    zs as n,
    Q_ as o,
    Bs as p,
    pa as q,
    Lc as r,
    fa as s,
    Cx as t,
    tx as u,
    ma as v,
    ga as w,
    ex as x,
    d_ as y,
    Dn as z
  };
  