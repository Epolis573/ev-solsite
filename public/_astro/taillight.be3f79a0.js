var n = `precision highp float;

varying vec2 vUv;

void main() {
  float color = min(max(1. - pow((length((vUv - 0.5) / vec2(1.2, 1.)) - 0.1) * 2., 10.), 0.), 0.75);

  gl_FragColor = vec4(vec3(0.), color);
}`,
  o = `precision highp float;

varying vec2 vUv;

uniform sampler2D uTexture;

void main() {
  vec2 uv = vUv;

  
  

  

  vec4 color = texture2D(uTexture, uv);
  
  

  
  
  gl_FragColor = color;
  
}`,
  c = `precision highp float;

uniform sampler2D uTexture;
uniform float uOpacity;

varying vec2 vUv;

const float GAMMA_FACTOR = 2.2;
const vec3 THEME_COLOR = vec3(30., 206., 115.) / 255.;
const vec3 NIGHT_MODE_COLOR_1 = THEME_COLOR;
const vec3 NIGHT_MODE_COLOR_2 = vec3(207., 181., 31.) / 255.;
const vec3 NIGHT_MODE_COLOR_3 = vec3(49., 31., 207.) / 255.;
const vec3 NIGHT_MODE_COLOR_4 = vec3(207., 49., 31.) / 255.;

vec3 LinearToGamma(vec3 color) {
  return pow(color.rgb, vec3(1.0 / GAMMA_FACTOR));
}
vec3 GammaToLinear(vec3 color) {
  return pow(color.rgb, vec3(GAMMA_FACTOR));
}

const vec2 uResolutionObject = vec2(4., 4.);

void main() {
  vec2 uv = vUv;
  uv.y = 1. - uv.y;
  
  
  
  

  vec4 color = texture2D(uTexture, uv);
  
  
  
  color.rgb = GammaToLinear(color.rgb);
  

  
  
  
  
  
  
  
  
  color.a *= uOpacity;

  gl_FragColor = color;
  
  
  
}`;
const e = {
  src: "/_astro/headlight.0fde656a.png",
  width: 1187,
  height: 744,
  format: "png"
};
var r = `precision highp float;

uniform sampler2D uTexture;
uniform float uOpacity;

varying vec2 vUv;

const float GAMMA_FACTOR = 2.2;
const vec3 THEME_COLOR = vec3(30., 206., 115.) / 255.;
const vec3 NIGHT_MODE_COLOR_1 = THEME_COLOR;
const vec3 NIGHT_MODE_COLOR_2 = vec3(207., 181., 31.) / 255.;
const vec3 NIGHT_MODE_COLOR_3 = vec3(49., 31., 207.) / 255.;
const vec3 NIGHT_MODE_COLOR_4 = vec3(207., 49., 31.) / 255.;

vec3 GammaToLinear(vec3 color) {
  return pow(color.rgb, vec3(GAMMA_FACTOR));
}

void main() {
  vec2 uv = vUv;
  uv.y = 1. - uv.y;

  vec4 color = texture2D(uTexture, uv);
  
  color.rgb = GammaToLinear(color.rgb);

  color.a *= uOpacity;

  gl_FragColor = color;
  
  
  
}`;
const v = {
  src: "/_astro/taillight.bbbec3c9.png",
  width: 1240,
  height: 488,
  format: "png"
};
export { v as a, o as b, n as c, c as h, e as i, r as t };
