var n=`precision highp float;

uniform sampler2D uTexture;
uniform float uTime;
uniform float uInterval;
uniform float uPositionY;
uniform float uSpeed;
uniform vec2 uScale;
uniform float uRotation;
uniform float uDarkness;
uniform float uBloom;
uniform float uOpacity;
uniform float uOffset;

varying vec2 vUv;

const float PI = 3.1415926;
const float PI2 = 6.2831853;
const float GAMMA_FACTOR = 2.2;

vec2 fitCover(vec2 coord, vec2 inputResolution, vec2 outputResolution) {
  vec2 ratio = vec2(
    min((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),
    min((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)
  );
  return coord * ratio + (1. - ratio) * 0.5;
}
vec2 rotate(vec2 uv, float rad, vec2 offset) {
  uv += offset;
  uv -= 0.5;
  uv *= mat2(cos(rad),sin(rad),-sin(rad),cos(rad));
  uv += 0.5;
  uv -= offset;
  return uv;
}
vec4 texture2DInnerRange(sampler2D t, vec2 uv) {
  return (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) ? vec4(0.) : texture2D(t, uv);
}

#pragma glslify: export(texture2DInnerRange)
vec2 repeatUv(vec2 uv) {
  return fract(uv);
}

#pragma glslify: export(repeatUv)
vec3 GammaToLinear(vec3 color) {
  return pow(color.rgb, vec3(GAMMA_FACTOR));
}

const vec2 resolutionImage = vec2(146., 46.);

void main() {
  vec2 uv = vUv;
  uv.x = 1. - uv.x;
  uv = rotate(uv, PI * uRotation, vec2(0.));
  uv /= uScale;
  
  uv.x += uOffset * uInterval;
  uv.y += uPositionY;
  uv.x -= uTime * uSpeed * mix(0.8, 1.2, uOffset);
  
  uv.x = mod(uv.x, uInterval);
  

  

  vec4 color = texture2DInnerRange(uTexture, uv);

  
  color.rgb = GammaToLinear(color.rgb);

  color.rgb /= uDarkness;

  gl_FragColor = color;
  
  gl_FragColor.a = pow(gl_FragColor.a, 1. / uBloom) * uOpacity;
  
  
  
}`;export{n as s};
