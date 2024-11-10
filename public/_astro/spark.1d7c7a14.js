var n=`precision highp float;

varying vec2 vUv;

uniform sampler2D uTexture;
uniform vec2 uResolutionObject;
uniform vec2 uResolutionImage;
uniform vec2 uRotationCenter;
uniform vec2 uOffset;
uniform float uTime;
uniform float uSpread;
uniform float uScale;
uniform float uDarkness;
uniform float uRotation;
uniform float uFadePosition;
uniform float uFadeRate;
uniform float uOpacity;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec3 uBackgroundColor;

const float PI = 3.1415926;
const float PI2 = 6.2831853;

const vec3 THEME_COLOR = vec3(30., 206., 115.) / 255.;
const vec3 NIGHT_MODE_COLOR_1 = THEME_COLOR;
const vec3 NIGHT_MODE_COLOR_2 = vec3(207., 181., 31.) / 255.;
const vec3 NIGHT_MODE_COLOR_3 = vec3(49., 31., 207.) / 255.;
const vec3 NIGHT_MODE_COLOR_4 = vec3(207., 49., 31.) / 255.;

vec2 fitCover(vec2 coord, vec2 inputResolution, vec2 outputResolution) {
  vec2 ratio = vec2(
    min((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),
    min((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)
  );
  return coord * ratio + (1. - ratio) * 0.5;
}
vec2 getZoomedUv(vec2 uv, float zoom, vec2 origin) {
  origin.x = -origin.x;
  uv += origin;
  float scale = 1. / zoom;
  return uv * scale - 0.5 * (scale - 1.);
}
vec2 rotate(vec2 uv, float rad, vec2 offset) {
  uv += offset;
  uv -= 0.5;
  uv *= mat2(cos(rad),sin(rad),-sin(rad),cos(rad));
  uv += 0.5;
  uv -= offset;
  return uv;
}
vec2 repeatUv(vec2 uv) {
  return fract(uv);
}

#pragma glslify: export(repeatUv)
vec4 texture2DInnerRange(sampler2D t, vec2 uv) {
  return (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) ? vec4(0.) : texture2D(t, uv);
}

#pragma glslify: export(texture2DInnerRange)

void main() {
  vec2 uv = vUv;

  uv = rotate(uv, uRotation, uRotationCenter);

  
  uv.x *= 1. - sin(uv.y * PI) * uSpread;
  uv.y += uTime;
  

  uv = getZoomedUv(uv, uScale, uOffset);
  uv = fitCover(uv, uResolutionImage, uResolutionObject);
  uv = repeatUv(uv);

  vec4 color = texture2DInnerRange(uTexture, uv);

  

  float opacity = mix(1., uOpacity, smoothstep(0., 1., distance(color.rgb, NIGHT_MODE_COLOR_4)));
  color.rgb = mix(uBackgroundColor, color.rgb, opacity * min(max((1. - vUv.x * (vUv.y * 1.5)) * uFadeRate * 3., 0.), 1.));
  color.rgb = mix(uColor, color.rgb, min(max(((1. - vUv.x / (vUv.y * 2.5)) * uFadeRate - uFadePosition), 0.), 1.));
  color.rgb *= uDarkness;
  color.a *= uAlpha;

  gl_FragColor = color;
  
}`;const o={src:"/_astro/background_night.59ea5718.jpg",width:1600,height:964,format:"jpg"},e={src:"/_astro/spark.1cd623da.png",width:146,height:46,format:"png"};export{o as a,e as i,n as s};
