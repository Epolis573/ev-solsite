const n={src:"/_astro/cloud_01.60726504.png",width:1436,height:1800,format:"png"};var o=`precision highp float;

varying vec2 vUv;

uniform sampler2D uTexture;
uniform float uProgress;

const float GAMMA_FACTOR = 2.2;

void main() {
  vec2 uv = vUv;

  
  
  

  vec4 color = texture2D(uTexture, uv);

  color.rgb = pow(color.rgb, vec3(GAMMA_FACTOR));

  
  color.a *= uProgress;

  gl_FragColor = color;
  
}`;export{o as a,n as i};
