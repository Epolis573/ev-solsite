import {
  bf as me,
  W as L,
  bg as Q,
  bh as ge,
  bi as be,
  bj as xe,
  bk as Ce,
  aD as w,
  bl as De,
  C as ye,
  V as m,
  aE as fe,
  P as Me,
  aF as de,
  S as Fe,
  g as ke,
  H as G,
  c as we,
  i as Se,
  a as q
} from "./constants.e6c90e33.js";
import {
  z as k,
  i as W,
  s as Oe
} from "./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";
const Ie = {
  defines: {
    DEPTH_PACKING: 1,
    PERSPECTIVE_CAMERA: 1
  },
  uniforms: {
    tColor: {
      value: null
    },
    tDepth: {
      value: null
    },
    focus: {
      value: 1
    },
    aspect: {
      value: 1
    },
    aperture: {
      value: 0.025
    },
    maxblur: {
      value: 0.01
    },
    nearClip: {
      value: 1
    },
    farClip: {
      value: 1e3
    }
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`
};
class tn extends me {
  constructor(a, f, c) {
    super(), (this.scene = a), (this.camera = f);
    const C = c.focus !== void 0 ? c.focus : 1,
      y = c.aspect !== void 0 ? c.aspect : f.aspect,
      I = c.aperture !== void 0 ? c.aperture : 0.025,
      d = c.maxblur !== void 0 ? c.maxblur : 1;
    (this.renderTargetDepth = new L(1, 1, {
      minFilter: Q,
      magFilter: Q
    })),
      (this.renderTargetDepth.texture.name = "BokehPass.depth"),
      (this.materialDepth = new ge()),
      (this.materialDepth.depthPacking = be),
      (this.materialDepth.blending = xe);
    const n = Ie,
      s = Ce.clone(n.uniforms);
    (s.tDepth.value = this.renderTargetDepth.texture),
      (s.focus.value = C),
      (s.aspect.value = y),
      (s.aperture.value = I),
      (s.maxblur.value = d),
      (s.nearClip.value = f.near),
      (s.farClip.value = f.far),
      (this.materialBokeh = new w({
        defines: Object.assign({}, n.defines),
        uniforms: s,
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader
      })),
      (this.uniforms = s),
      (this.needsSwap = !1),
      (this.fsQuad = new De(this.materialBokeh)),
      (this._oldClearColor = new ye());
  }
  render(a, f, c) {
    (this.scene.overrideMaterial = this.materialDepth),
      a.getClearColor(this._oldClearColor);
    const C = a.getClearAlpha(),
      y = a.autoClear;
    (a.autoClear = !1),
      a.setClearColor(16777215),
      a.setClearAlpha(1),
      a.setRenderTarget(this.renderTargetDepth),
      a.clear(),
      a.render(this.scene, this.camera),
      (this.uniforms.tColor.value = c.texture),
      (this.uniforms.nearClip.value = this.camera.near),
      (this.uniforms.farClip.value = this.camera.far),
      this.renderToScreen
        ? (a.setRenderTarget(null), this.fsQuad.render(a))
        : (a.setRenderTarget(f), a.clear(), this.fsQuad.render(a)),
      (this.scene.overrideMaterial = null),
      a.setClearColor(this._oldClearColor),
      a.setClearAlpha(C),
      (a.autoClear = y);
  }
  setSize(a, f) {
    this.renderTargetDepth.setSize(a, f);
  }
  dispose() {
    this.renderTargetDepth.dispose(),
      this.materialDepth.dispose(),
      this.materialBokeh.dispose(),
      this.fsQuad.dispose();
  }
}
var Ne = `#define PI 3.141592653589793
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

#ifdef USE_ALPHAHASH

	varying vec3 vPosition;

#endif

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

} 

varying vec2 vUv;

uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform float textureWidth;
uniform float textureHeight;

uniform float focalDepth;  
uniform float focalLength; 
uniform float fstop; 
uniform bool showFocus; 

uniform float znear; 
uniform float zfar; 

const int samples = SAMPLES; 
const int rings = RINGS; 

const int maxringsamples = rings * samples;

uniform bool manualdof; 
float ndofstart = 1.0; 
float ndofdist = 2.0; 
float fdofstart = 1.0; 
float fdofdist = 3.0; 

float CoC = 0.03; 

uniform bool vignetting; 

float vignout = 1.3; 
float vignin = 0.0; 
float vignfade = 22.0; 

uniform bool shaderFocus;

uniform vec2 focusCoords;

uniform float maxblur;

uniform float threshold; 
uniform float gain; 

uniform float bias; 
uniform float fringe; 

uniform bool noise; 

uniform float dithering;

uniform bool depthblur; 
float dbsize = 1.25; 

/*
next part is experimental
not looking good with small sample and ring count
looks okay starting from samples = 4, rings = 4
*/

uniform bool pentagon; 
float feather = 0.4; 

float penta(vec2 coords) {
  
  float scale = float(rings) - 1.3;
  vec4  HS0 = vec4( 1.0,         0.0,         0.0,  1.0);
  vec4  HS1 = vec4( 0.309016994, 0.951056516, 0.0,  1.0);
  vec4  HS2 = vec4(-0.809016994, 0.587785252, 0.0,  1.0);
  vec4  HS3 = vec4(-0.809016994,-0.587785252, 0.0,  1.0);
  vec4  HS4 = vec4( 0.309016994,-0.951056516, 0.0,  1.0);
  vec4  HS5 = vec4( 0.0        ,0.0         , 1.0,  1.0);

  vec4  one = vec4( 1.0 );

  vec4 P = vec4((coords),vec2(scale, scale));

  vec4 dist = vec4(0.0);
  float inorout = -4.0;

  dist.x = dot( P, HS0 );
  dist.y = dot( P, HS1 );
  dist.z = dot( P, HS2 );
  dist.w = dot( P, HS3 );

  dist = smoothstep( -feather, feather, dist );

  inorout += dot( dist, one );

  dist.x = dot( P, HS4 );
  dist.y = HS5.w - abs( P.z );

  dist = smoothstep( -feather, feather, dist );
  inorout += dist.x;

  return clamp( inorout, 0.0, 1.0 );
}

float bdepth(vec2 coords) {
  
  float d = 0.0;
  float kernel[9];
  vec2 offset[9];

  vec2 wh = vec2(1.0/textureWidth,1.0/textureHeight) * dbsize;

  offset[0] = vec2(-wh.x,-wh.y);
  offset[1] = vec2( 0.0, -wh.y);
  offset[2] = vec2( wh.x -wh.y);

  offset[3] = vec2(-wh.x,  0.0);
  offset[4] = vec2( 0.0,   0.0);
  offset[5] = vec2( wh.x,  0.0);

  offset[6] = vec2(-wh.x, wh.y);
  offset[7] = vec2( 0.0,  wh.y);
  offset[8] = vec2( wh.x, wh.y);

  kernel[0] = 1.0/16.0;   kernel[1] = 2.0/16.0;   kernel[2] = 1.0/16.0;
  kernel[3] = 2.0/16.0;   kernel[4] = 4.0/16.0;   kernel[5] = 2.0/16.0;
  kernel[6] = 1.0/16.0;   kernel[7] = 2.0/16.0;   kernel[8] = 1.0/16.0;

  for( int i=0; i<9; i++ ) {
    float tmp = texture2D(tDepth, coords + offset[i]).r;
    d += tmp * kernel[i];
  }

  return d;
}

vec3 color(vec2 coords,float blur) {
  

  vec3 col = vec3(0.0);
  vec2 texel = vec2(1.0/textureWidth,1.0/textureHeight);

  col.r = texture2D(tColor,coords + vec2(0.0,1.0)*texel*fringe*blur).r;
  col.g = texture2D(tColor,coords + vec2(-0.866,-0.5)*texel*fringe*blur).g;
  col.b = texture2D(tColor,coords + vec2(0.866,-0.5)*texel*fringe*blur).b;

  vec3 lumcoeff = vec3(0.299,0.587,0.114);
  float lum = dot(col.rgb, lumcoeff);
  float thresh = max((lum-threshold)*gain, 0.0);
  return col+mix(vec3(0.0),col,thresh*blur);
}

vec3 debugFocus(vec3 col, float blur, float depth) {
  float edge = 0.002*depth; 
  float m = clamp(smoothstep(0.0,edge,blur),0.0,1.0);
  float e = clamp(smoothstep(1.0-edge,1.0,blur),0.0,1.0);

  col = mix(col,vec3(1.0,0.5,0.0),(1.0-m)*0.6);
  col = mix(col,vec3(0.0,0.5,1.0),((1.0-e)-(1.0-m))*0.2);

  return col;
}

float linearize(float depth) {
  return -zfar * znear / (depth * (zfar - znear) - zfar);
}

float vignette() {
  float dist = distance(vUv.xy, vec2(0.5,0.5));
  dist = smoothstep(vignout+(fstop/vignfade), vignin+(fstop/vignfade), dist);
  return clamp(dist,0.0,1.0);
}

float gather(float i, float j, int ringsamples, inout vec3 col, float w, float h, float blur) {
  float rings2 = float(rings);
  float step = PI*2.0 / float(ringsamples);
  float pw = cos(j*step)*i;
  float ph = sin(j*step)*i;
  float p = 1.0;
  if (pentagon) {
    p = penta(vec2(pw,ph));
  }
  col += color(vUv.xy + vec2(pw*w,ph*h), blur) * mix(1.0, i/rings2, bias) * p;
  return 1.0 * mix(1.0, i /rings2, bias) * p;
}

void main() {
  

  float depth = linearize(texture2D(tDepth,vUv.xy).x);

  
  if ( depthblur ) {
    depth = linearize(bdepth(vUv.xy));
  }

  

  float fDepth = focalDepth;

  if (shaderFocus) {

    fDepth = linearize(texture2D(tDepth,focusCoords).x);

  }

  

  float blur = 0.0;

  if (manualdof) {
    float a = depth-fDepth; 
    float b = (a-fdofstart)/fdofdist; 
    float c = (-a-ndofstart)/ndofdist; 
    blur = (a>0.0) ? b : c;
  } else {
    float f = focalLength; 
    float d = fDepth*1000.0; 
    float o = depth*1000.0; 

    float a = (o*f)/(o-f);
    float b = (d*f)/(d-f);
    float c = (d-f)/(d*fstop*CoC);

    blur = abs(a-b)*c;
  }

  blur = clamp(blur,0.0,1.0);

  

  vec2 noise = vec2(rand(vUv.xy), rand( vUv.xy + vec2( 0.4, 0.6 ) ) )*dithering*blur;

  

  float w = (1.0/textureWidth)*blur*maxblur+noise.x;
  float h = (1.0/textureHeight)*blur*maxblur+noise.y;

  

  vec3 col = vec3(0.0);

  if(blur < 0.05) {
    
    col = texture2D(tColor, vUv.xy).rgb;
  } else {
    col = texture2D(tColor, vUv.xy).rgb;
    float s = 1.0;
    int ringsamples;

    for (int i = 1; i <= rings; i++) {
      /*unboxstart*/
      ringsamples = i * samples;

      for (int j = 0 ; j < maxringsamples ; j++) {
        if (j >= ringsamples) break;
        s += gather(float(i), float(j), ringsamples, col, w, h, blur);
      }
      /*unboxend*/
    }

    col /= s; 
  }

  if (showFocus) {
    col = debugFocus(col, blur, depth);
  }

  if (vignetting) {
    col *= vignette();
  }

  gl_FragColor.rgb = col;
  gl_FragColor.a = 1.0;

  #if defined( TONE_MAPPING )

  	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

  #endif

  gl_FragColor = linearToOutputTexel( gl_FragColor );
  
}`;
new m(), fe;
const p = {
  uniforms: {
    mNear: {
      value: 1
    },
    mFar: {
      value: 1e3
    },
    bokehNear: {
      value: 0
    },
    bokehFarBack: {
      value: 1
    },
    bokehFarFront: {
      value: 1
    }
  },
  vertexShader: `

    varying float vViewZDepth;

    void main() {

      #include <begin_vertex>
      #include <project_vertex>

      vViewZDepth = - mvPosition.z;

    }`,
  vertexShaderY: `

    varying float vViewZDepth;

    void main() {

      #include <begin_vertex>
      #include <project_vertex>

      vViewZDepth = - mvPosition.y;

    }`,
  vertexShaderNone: `

    varying float vViewZDepth;

    void main() {

      #include <begin_vertex>
      #include <project_vertex>

      vViewZDepth = 10000.;

    }`,
  vertexShaderForce: `

    varying float vViewZDepth;

    void main() {

      #include <begin_vertex>
      #include <project_vertex>

      vViewZDepth = 0.;

    }`,
  fragmentShader: `

    uniform float mNear;
    uniform float mFar;

    uniform float bokehNear;
    uniform float bokehFarBack;
    uniform float bokehFarFront;

    varying float vViewZDepth;

    void main() {

      float depth = 0. + (vViewZDepth - mNear) * (1. - 0.) / (mFar - mNear);
      // depth = fract(depth*(step(mod(depth,2.),1.)*2.-1.));
      // float color = 1.0 - depth;
      // float color = depth;

      float bokeh = depth - bokehNear;
      bokeh = abs(bokeh / (bokeh < 0. ? bokehFarFront : bokehFarBack));
      // bokeh = abs(bokeh);
      // bokeh = bokeh < 0. ? smoothstep(0., 0.0095, -bokeh) : bokeh > 1. ? -bokeh + 2. : pow(bokeh, 1.5);
      bokeh = min(max(bokeh, 0.), 1.);

      gl_FragColor = vec4( vec3( depth, bokeh, 0. ), 1.0 );
      // gl_FragColor = vec4( vec3( vViewZDepth / 700. ), 1.0 );

    }`
};
var _e = `#define PI 3.141592653589793

varying vec2 vUv;

uniform sampler2D tColorBack;
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform vec2 objectResolution;
uniform sampler2D tNoise;
uniform sampler2D tNoiseDark;
uniform vec2 textureResolution;
uniform float noiseProgress;
uniform float noiseDarkness;

uniform bool hideNoise;
uniform bool showDepth;
uniform bool showBokeh;

/* 境界線ぼかし（色ずらし） */
uniform float rShift;
uniform float rShiftOpacity;

/* ぼかし（像のダブらし） */

/* ホワイトノイズ */
uniform float noiseMin;
uniform float noiseMax;
uniform float noiseGrayScale;

/* fog */
uniform float fogNear;
uniform float fogFar;

uniform float brightness;
uniform float whiteness;

/* 光 */
struct Ray {
  vec2 center;
  float rotation;
  float speed;
  float offset;
  float width;
  float edge;
  float rayDistance;
  float opacity;
};
uniform Ray uRay[3];

/* animation */
uniform float time;

uniform bool transparent;
uniform float opacity;

uniform float maxblur;
uniform float maxblurFull;
uniform float blurFocus;
uniform float blurExponent;
uniform vec2 blurCenter;

/* ナイトモード */
uniform bool uIsNightMode;
uniform bool uIsNightModeLogo;

uniform float nightModeThreshold1;
uniform float nightModeThreshold2;
uniform float nightModeThreshold3;
uniform float nightModeThreshold4;
uniform float nightModeBrightness1;
uniform float nightModeBrightness2;
uniform float nightModeBrightness3;
uniform float nightModeBrightness4;
uniform float monochromeMax;
uniform float monochromeExponent;

const float GAMMA_FACTOR = 2.2;
const vec3 THEME_COLOR = vec3(30., 206., 115.) / 255.;
const vec3 NIGHT_MODE_COLOR_1 = THEME_COLOR;
const vec3 NIGHT_MODE_COLOR_2 = vec3(207., 181., 31.) / 255.;
const vec3 NIGHT_MODE_COLOR_3 = vec3(49., 31., 207.) / 255.;
const vec3 NIGHT_MODE_COLOR_4 = vec3(207., 49., 31.) / 255.;

highp float random(vec2 co)
{
  highp float a = 12.9898;
  highp float b = 78.233;
  highp float c = 43758.5453;
  highp float dt= dot(co.xy ,vec2(a,b));
  highp float sn= mod(dt,3.14);
  return fract(sin(sn) * c);
}
vec2 fitContain(vec2 coord, vec2 inputResolution, vec2 outputResolution) {
  vec2 ratio = vec2(
    max((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),
    max((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)
  );
  return coord * ratio + (1. - ratio) * 0.5;
}

#pragma glslify: export(fitContain)
vec2 fitCover(vec2 coord, vec2 inputResolution, vec2 outputResolution) {
  vec2 ratio = vec2(
    min((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),
    min((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)
  );
  return coord * ratio + (1. - ratio) * 0.5;
}
vec3 colorBurn(vec3 colorSrc, vec3 colorDist) {
  return vec3(
    (colorSrc.r == 0.) ? 0. : (1. - ((1. - colorDist.r) / colorSrc.r)),
    (colorSrc.g == 0.) ? 0. : (1. - ((1. - colorDist.g) / colorSrc.g)),
    (colorSrc.b == 0.) ? 0. : (1. - ((1. - colorDist.b) / colorSrc.b))
  );
}
vec3 colorDodge(vec3 colorSrc, vec3 colorDist) {
  return vec3(
    (colorSrc.r == 1.) ? 1. : min(1., colorDist.r / (1. - colorSrc.r)),
    (colorSrc.g == 1.) ? 1. : min(1., colorDist.g / (1. - colorSrc.g)),
    (colorSrc.b == 1.) ? 1. : min(1., colorDist.b / (1. - colorSrc.b))
  );
}
vec3 overlay(vec3 colorSrc, vec3 colorDist) {
  return vec3(
    (colorDist.r <= 0.5) ? (2. * colorSrc.r * colorDist.r) : (1. - 2. * (1. - colorDist.r) * (1. - colorSrc.r)),
    (colorDist.g <= 0.5) ? (2. * colorSrc.g * colorDist.g) : (1. - 2. * (1. - colorDist.g) * (1. - colorSrc.g)),
    (colorDist.b <= 0.5) ? (2. * colorSrc.b * colorDist.b) : (1. - 2. * (1. - colorDist.b) * (1. - colorSrc.b))
  );
}

vec2 getUvPolar(vec2 uv) {
  vec2 uvPolar = vec2(0.5) - uv;
  float radius = length(uvPolar) * 2.;
  float angle = atan(uvPolar.y, uvPolar.x);
  return vec2(radius, angle / (PI * 2.));
}
float shapeRayGradation(vec2 uv, vec2 center, float rotation, float width, float edge, float rayDistance) {
  uv -= center;
  vec2 uvPolar = getUvPolar(uv);
  uvPolar.y -= rotation;
  float ray = smoothstep(0., edge, uvPolar.y) * smoothstep(edge * 2. + width, edge + width, uvPolar.y);
  ray *= max(1. - uvPolar.x / rayDistance, 0.);
  return ray;
}
float map(float num, float fromMin, float fromMax, float toMin, float toMax) {
  return toMin + (num - fromMin) * (toMax - toMin) / (fromMax - fromMin);
}
float mapClamp(float num, float fromMin, float fromMax, float toMin, float toMax) {
  return
    num <= fromMin ? toMin
    : num >= fromMax ? toMax
    : toMin + (num - fromMin) * (toMax - toMin) / (fromMax - fromMin);
}

#define R_LUMINANCE 0.298912
#define G_LUMINANCE 0.586611
#define B_LUMINANCE 0.114478

const vec3 MONOCHROME_SCALE = vec3(R_LUMINANCE, G_LUMINANCE, B_LUMINANCE);

vec3 monochrome(vec3 color) {
  return vec3(dot(color, MONOCHROME_SCALE));
}

vec4 LinearToGamma4(vec4 color) {
  return vec4(pow(color.rgb, vec3(1.0 / GAMMA_FACTOR)), color.w);
}

vec4 texture2Dgamma(sampler2D tex, vec2 uv) {
  
  return LinearToGamma4(texture2D(tex, uv));
}

/* fog */
vec3 fog(vec3 color, vec3 colorBack, float depth) {
  return mix(color, colorBack, mapClamp(depth, fogNear, fogFar, 0., 1.));
}

/* ray */
vec3 tierRays(vec3 color, vec2 uv, float time, Ray ray) {
  float t = (sin((time + ray.offset) * ray.speed) + 1.) * 0.5;
  float r = shapeRayGradation(uv, ray.center, PI * ray.rotation, ray.width, ray.edge, ray.rayDistance * mix(0.8, 1., t));
  return mix(color, vec3(1.), r * ray.opacity);
}

/* gaussian blur */

const int LOD = 2; 
const int sLOD = 1 << LOD; 
const float sigma = float(samples) * 0.25;

float gaussian(vec2 i) {
  return exp(-0.5 * dot(i /= sigma, i)) / (6.28 * sigma * sigma);
}

vec4 blur(sampler2D sp, vec2 U, vec2 scale) {
  vec4 O = vec4(0.);
  int s = samples / sLOD;
  int s2 = s * s;
  float a = 0.;

  for (int i = 0; i < s2; i++) {
    vec2 d = vec2(i % s, i / s) * float(sLOD) - float(samples) / 2.;
    vec4 c = texture2D(sp, U + scale * d, float(LOD));
    
    float g = gaussian(d);
    O.rgb += g * c.rgb;
    O.a += c.a;
    a += g * c.a;
  }
  O.a /= float(s2);

  
  return vec4(vec3(a > 0. ? O.rgb / a : O.rgb), O.a);
  
  
}

vec4 blurBack(sampler2D sp, sampler2D spBase, vec2 U, vec2 scale) {
  vec4 O = vec4(0.);
  int s = samples / sLOD;
  int s2 = s * s;
  float a = 0.;

  for (int i = 0; i < s2; i++) {
    vec2 d = vec2(i % s, i / s) * float(sLOD) - float(samples) / 2.;
    vec2 uv = U + scale * d;
    vec4 c = texture2D(sp, uv, float(LOD));
    float g = gaussian(d);
    O.rgb += g * mix(texture2D(spBase, uv, float(LOD)), c, c.a).rgb;
    O.a += c.a;
    a += g * c.a;
  }
  O.a /= float(s2);

  return vec4(vec3(a > 0. ? O.rgb / a : O.rgb), O.a);
  
}

vec4 blurDepth(sampler2D sp, vec2 U, vec2 scale) {
  vec4 O = vec4(0.);
  int s = samplesDepth / sLOD;

  for (int i = 0; i < s * s; i++) {
    vec2 d = vec2(i % s, i / s) * float(sLOD) - float(samplesDepth) / 2.;
    O += gaussian(d) * texture2D(sp, U + scale * d, float(LOD));
  }

  return O.a > 0. ? O / O.a : O;
  
}

/* main */
void main() {
  /* depth */
  vec4 depthColor = texture2D(tDepth, vUv);
  float depth = depthColor.r;

  /* bokeh */
  
  vec2 blurScale = vec2(0.0002 * maxblur);
  
  float bokeh = (blurScale.x == 0. ? depthColor : mix(blurDepth(tDepth, vUv, blurScale), vec4(1.), maxblurFull)).g;
  
  

  
  
  
  
  
  
  
  
  bokeh = max(bokeh, min(pow(length(vUv - (0.5 + blurCenter)) * blurFocus, blurExponent), 1.));

  /* color */
  vec4 colorBack = texture2D(tColorBack, vUv);
  
  
  

  /* color */
  vec4 color = texture2Dgamma(tColor, vUv);

  /* fog */
  color.rgb = fog(color.rgb, colorBack.rgb, depth);

  
  
  
  
  
  

  /* gaussian blur */
  
  vec4 colorBlur = blurScale.x == 0. ? texture2D(tColor, vUv) : mix(blur(tColor, vUv, blurScale), blurBack(tColor, tColorBack, vUv, blurScale), maxblurFull);
  colorBlur = LinearToGamma4(colorBlur);
  colorBlur.rgb = fog(colorBlur.rgb, colorBack.rgb, depth);

  color.rgb = mix(color.rgb, colorBlur.rgb, bokeh);
  
  
  

  color.rgb = mix(colorBack.rgb, color.rgb, color.a);
  
  
  

  /* 境界線ぼかし（色ずらし） */
  float colorRed = texture2Dgamma(tColor, vec2(vUv.x - 0.001 * rShift, vUv.y)).r;
  color.r = max(color.r, colorRed * rShiftOpacity);

  /* ぼかし（像のダブらし） */
  
  
  
  

  
  
  

  
  
  
  
  
  
  

  /* noise */
  
  

  
  
  vec2 noiseUv = fitCover(vUv, textureResolution, objectResolution);
  vec3 colorSrc = mix(mix(texture2D(tNoise, noiseUv), texture2D(tNoiseDark, noiseUv), noiseProgress * noiseDarkness).rgb, vec3(mix(noiseMin, noiseMax, random(noiseUv)), mix(noiseMin, noiseMax, random(noiseUv + 0.1)), mix(noiseMin, noiseMax, random(noiseUv - 0.1))), noiseGrayScale);
  

  /* color */
  vec3 colorDist = color.rgb;

  
  
  
  
  
  gl_FragColor.rgb = uIsNightMode || hideNoise ? colorDist : overlay(colorSrc, colorDist);
  
  
  
  
  

  /* 明度 */
  gl_FragColor.rgb *= brightness;

  /* 白さ */
  gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.), whiteness);

  /* 光 */
  vec2 uvRay = fitContain(vUv, vec2(1.), objectResolution);
  gl_FragColor.rgb = tierRays(gl_FragColor.rgb, uvRay, time, uRay[0]);
  gl_FragColor.rgb = tierRays(gl_FragColor.rgb, uvRay, time, uRay[1]);
  gl_FragColor.rgb = tierRays(gl_FragColor.rgb, uvRay, time, uRay[2]);

  
  
  
  gl_FragColor.a = transparent ? colorBlur.a : 1.;
  
  
  
  
  
  
  
  
  
  
  

  gl_FragColor.a *= opacity;

  gl_FragColor.rgb = transparent ? colorBlur.rgb : gl_FragColor.rgb;

  /* ナイトモード */
  if (uIsNightMode) {
    vec3 originalColor = gl_FragColor.rgb;
    vec3 monochromeColor = pow(monochrome(originalColor), vec3(monochromeExponent)) * monochromeMax;
    

    
    

    gl_FragColor.rgb = mix(
        
    THEME_COLOR,
        
    monochromeColor,
        
    
    
    
    
    
    
    
    
    
    
    
    
    min(
      
    min(
      
    min(
      
    mapClamp(smoothstep(0., nightModeThreshold1, distance(originalColor, NIGHT_MODE_COLOR_1)), 0., 1., (1. - nightModeBrightness1), 1.)
      
    , uIsNightModeLogo ? 1. : mapClamp(smoothstep(0., nightModeThreshold2, distance(originalColor, NIGHT_MODE_COLOR_2)), 0., 1., (1. - nightModeBrightness2), 1.)
      
    )
      
    , mapClamp(smoothstep(0., nightModeThreshold3, distance(originalColor, NIGHT_MODE_COLOR_3)), 0., 1., (1. - nightModeBrightness3), 1.)
      
    )
      
    , mapClamp(smoothstep(0., nightModeThreshold4, distance(originalColor, NIGHT_MODE_COLOR_4)), 0., 1., (1. - nightModeBrightness4), 1.)
      
    )
        
        
        
        
        
        
        
        
    );
    

    if (uIsNightModeLogo) {
      gl_FragColor.rgb = mix(
          
      vec3(1.),
          
      gl_FragColor.rgb,
          
      smoothstep(0., nightModeThreshold2, distance(originalColor, NIGHT_MODE_COLOR_2))
        
      );
    }

    /* タイトル白色 */
    
    
    
    
    
    
    
    
    
  }

  gl_FragColor.rgb = showBokeh ? vec3(bokeh) : showDepth ? vec3(depth) : gl_FragColor.rgb;
  
  
  
  
  
}`;
const z = {
    src: "/_astro/noise.4311fcc9.jpg",
    width: 1600,
    height: 964,
    format: "jpg"
  },
  Be = {
    src: "/_astro/noise_dark.d435da1e.jpg",
    width: 1600,
    height: 964,
    format: "jpg"
  },
  Ue = {
    hideNoise: !1,
    showDepth: !1,
    showBokeh: !1,
    mNear: 0.1,
    mFar: 550,
    maxblur: 2,
    maxblurNight: 2,
    maxblurFull: 0,
    blurFocus: 1,
    blurExponent: 1,
    blurCenter: new m(),
    rShift: 2,
    rShiftOpacity: 0.6,
    noiseMin: 0.85,
    noiseMax: 1,
    noiseGrayScale: 0,
    bokehNear: 0,
    bokehFarBack: 1,
    bokehFarFront: 1,
    fogNear: 1,
    fogFar: 1,
    brightness: 1,
    brightnessNight: 1,
    whiteness: 0,
    noiseProgress: 0,
    noiseDarkness: 1,
    uRay: [
      {
        center: new m(),
        rotation: 0,
        speed: 0,
        offset: 0,
        width: 0,
        edge: 0,
        rayDistance: 0,
        opacity: 0
      },
      {
        center: new m(),
        rotation: 0,
        speed: 0,
        offset: 0,
        width: 0,
        edge: 0,
        rayDistance: 0,
        opacity: 0
      },
      {
        center: new m(),
        rotation: 0,
        speed: 0,
        offset: 0,
        width: 0,
        edge: 0,
        rayDistance: 0,
        opacity: 0
      }
    ],
    time: 0,
    transparent: !1,
    opacity: 1,
    uIsNightMode: !1,
    uIsNightModeLogo: !1,
    nightModeThreshold1: 0.5,
    nightModeThreshold2: 0.5,
    nightModeThreshold3: 0.5,
    nightModeThreshold4: 0.5,
    nightModeBrightness1: 1,
    nightModeBrightness2: 0.5,
    nightModeBrightness3: 0.3,
    nightModeBrightness4: 1,
    monochromeMax: 0.25,
    monochromeExponent: 1
  },
  Re = new Me(),
  Ee = de(z.src),
  Te = de(Be.src);
function rn(e) {
  var _e$effectController, _e$effectController2;
  const {
      pixelRatio: a,
      camera: f,
      folder: c,
      transparent: C = !1,
      isDirectionY: y = !1,
      minNear: I = 0,
      isNight: d = !1
    } = e,
    n = k(Ue, e.effectController || {});
  !d &&
    ((_e$effectController = e.effectController) === null ||
    _e$effectController === void 0
      ? void 0
      : _e$effectController.uRay) &&
    (n.uRay = [
      ...((_e$effectController2 = e.effectController) === null ||
      _e$effectController2 === void 0
        ? void 0
        : _e$effectController2.uRay.map((o) => k({}, o)))
    ]);
  const s = e.width * a,
    M = e.height * a,
    V = new Fe(),
    j = new ke(),
    N = new L(s, M, {
      type: G
    }),
    _ = new L(s, M, {
      type: G
    }),
    B = new L(s, M, {
      type: G
    }),
    K = {
      uniforms: {
        hideNoise: n.hideNoise,
        showDepth: n.showDepth,
        showBokeh: n.showBokeh,
        mNear: n.mNear,
        mFar: n.mFar,
        tColorBack: null,
        tColor: null,
        tDepth: null,
        objectResolution: new m(s, M),
        tNoise: null,
        tNoiseDark: null,
        textureResolution: new m(z.width, z.height),
        noiseProgress: n.noiseProgress,
        noiseDarkness: n.noiseDarkness,
        maxblur: n[d ? "maxblurNight" : "maxblur"],
        maxblurFull: n.maxblurFull,
        blurFocus: n.blurFocus,
        blurExponent: n.blurExponent,
        blurCenter: n.blurCenter,
        rShift: d ? 0 : n.rShift,
        rShiftOpacity: d ? 0 : n.rShiftOpacity,
        noiseMin: n.noiseMin,
        noiseMax: n.noiseMax,
        noiseGrayScale: n.noiseGrayScale,
        bokehNear: n.bokehNear,
        bokehFarBack: n.bokehFarBack,
        bokehFarFront: n.bokehFarFront,
        fogNear: n.fogNear,
        fogFar: n.fogFar,
        brightness: n[d ? "brightnessNight" : "brightness"],
        whiteness: n.whiteness,
        uRay: n.uRay,
        time: n.time,
        transparent: C,
        opacity: n.opacity,
        uIsNightMode: d,
        uIsNightModeLogo: n.uIsNightModeLogo,
        nightModeThreshold1: n.nightModeThreshold1,
        nightModeThreshold2: n.nightModeThreshold2,
        nightModeThreshold3: n.nightModeThreshold3,
        nightModeThreshold4: n.nightModeThreshold4,
        nightModeBrightness1: n.nightModeBrightness1,
        nightModeBrightness2: n.nightModeBrightness2,
        nightModeBrightness3: n.nightModeBrightness3,
        nightModeBrightness4: n.nightModeBrightness4,
        monochromeMax: n.monochromeMax,
        monochromeExponent: n.monochromeExponent
      },
      vertexShader: fe,
      fragmentShader: _e
    },
    h = we(K.uniforms);
  (h.tColorBack.value = N.texture),
    (h.tColor.value = _.texture),
    (h.tDepth.value = B.texture),
    (h.objectResolution.value = new m(s, M)),
    (h.tNoise.value = Ee),
    (h.tNoiseDark.value = Te);
  const Z = new w({
      uniforms: h,
      vertexShader: K.vertexShader,
      fragmentShader: K.fragmentShader,
      transparent: C,
      defines: {
        samples: W ? 15 : 30,
        samplesDepth: W ? 5 : 20
      }
    }),
    r = q(h),
    U = new Se(Re, Z);
  V.add(U);
  const g = new w({
    uniforms: k({}, p.uniforms),
    vertexShader: p[y ? "vertexShaderY" : "vertexShader"],
    fragmentShader: p.fragmentShader
  });
  (g.uniforms.mNear.value = n.mNear),
    (g.uniforms.mFar.value = n.mFar),
    (g.uniforms.bokehNear.value = n.bokehNear),
    (g.uniforms.bokehFarBack.value = n.bokehFarBack),
    (g.uniforms.bokehFarFront.value = n.bokehFarFront);
  const F = q(g.uniforms),
    R = new w({
      uniforms: k({}, p.uniforms),
      vertexShader: p.vertexShaderNone,
      fragmentShader: p.fragmentShader
    });
  (R.uniforms.mNear.value = n.mNear), (R.uniforms.mFar.value = n.mFar);
  const E = new w({
    uniforms: k({}, p.uniforms),
    vertexShader: p.vertexShaderForce,
    fragmentShader: p.fragmentShader
  });
  if (
    ((E.uniforms.mNear.value = n.mNear),
    (E.uniforms.mFar.value = n.mFar),
    Oe.enablePane && c)
  ) {
    const { title: o } = c,
      u = c.addFolder({
        title: "postprocessing",
        expanded: d
      });
    u.addInput(r.hideNoise, "value", {
      label: "hideNoise",
      presetKey: `${o} hideNoise`
    }),
      u.addInput(r.transparent, "value", {
        label: "ぼかしのみ表示",
        presetKey: `${o} transparent`
      });
    {
      const t = u.addFolder({
        title: "depth",
        expanded: !1
      });
      t.addInput(r.showDepth, "value", {
        label: "showDepth",
        presetKey: `${o} showDepth`
      }),
        t.addInput(F.mNear, "value", {
          label: "mNear",
          presetKey: `${o} mNear`,
          min: I,
          max: f.far * 2
        }),
        t.addInput(F.mFar, "value", {
          label: "mFar",
          presetKey: `${o} mFar`,
          min: I,
          max: f.far * 2
        });
    }
    {
      const t = u.addFolder({
        title: "ぼかし",
        expanded: !1
      });
      t.addInput(r.showBokeh, "value", {
        label: "showBokeh",
        presetKey: `${o} showBokeh`
      }),
        t.addInput(r.maxblur, "value", {
          label: "maxblur",
          presetKey: `${o} maxblur`,
          min: 0,
          max: 10,
          step: 0.1
        }),
        t.addInput(r.maxblurFull, "value", {
          label: "maxblurFull",
          presetKey: `${o} maxblurFull`,
          min: 0,
          max: 10,
          step: 0.1
        }),
        t.addInput(r.blurFocus, "value", {
          label: "blurFocus",
          presetKey: `${o} blurFocus`,
          min: 0,
          max: 10,
          step: 0.1
        }),
        t.addInput(r.blurExponent, "value", {
          label: "blurExponent",
          presetKey: `${o} blurExponent`,
          min: 0,
          max: 10,
          step: 0.1
        }),
        t.addInput(r.blurCenter, "value", {
          label: "blurCenter",
          presetKey: `${o} blurCenter`,
          x: {
            step: 0.01
          },
          y: {
            step: 0.01
          }
        }),
        t.addInput(F.bokehNear, "value", {
          label: "bokehNear",
          presetKey: `${o} bokehNear`,
          min: 0,
          step: 0.01
        }),
        t.addInput(F.bokehFarBack, "value", {
          label: "bokehFarBack",
          presetKey: `${o} bokehFarBack`,
          min: 0,
          step: 0.01
        }),
        t.addInput(F.bokehFarFront, "value", {
          label: "bokehFarFront",
          presetKey: `${o} bokehFarFront`,
          min: 0,
          step: 0.01
        });
    }
    {
      const t = u.addFolder({
        title: "境界線ぼかし（色ずらし）",
        expanded: !1
      });
      t.addInput(r.rShift, "value", {
        label: "rShift",
        presetKey: `${o} rShift`,
        min: 0,
        max: 3
      }),
        t.addInput(r.rShiftOpacity, "value", {
          label: "rShiftOpacity",
          presetKey: `${o} rShiftOpacity`,
          min: 0,
          max: 1
        });
    }
    {
      const t = u.addFolder({
        title: "ホワイトノイズ",
        expanded: !1
      });
      t.addInput(r.noiseMin, "value", {
        label: "noiseMin",
        presetKey: `${o} noiseMin`,
        min: 0,
        max: 1
      }),
        t.addInput(r.noiseMax, "value", {
          label: "noiseMax",
          presetKey: `${o} noiseMax`,
          min: 0,
          max: 1
        }),
        t.addInput(r.noiseGrayScale, "value", {
          label: "noiseGrayScale",
          presetKey: `${o} noiseGrayScale`,
          min: 0,
          max: 1
        }),
        t.addInput(r.noiseDarkness, "value", {
          label: "暗いノイズ",
          presetKey: `${o} noiseDarkness`,
          min: 0,
          max: 1
        });
    }
    {
      const t = u.addFolder({
        title: "フォグ",
        expanded: !1
      });
      t.addInput(r.fogNear, "value", {
        label: "near",
        presetKey: `${o} fogNear`,
        min: 0,
        max: 1
      }),
        t.addInput(r.fogFar, "value", {
          label: "far",
          presetKey: `${o} fogFar`,
          min: 0,
          max: 1
        });
    }
    {
      const t = u.addFolder({
        title: "明度",
        expanded: !1
      });
      t.addInput(r.brightness, "value", {
        label: "明度",
        presetKey: `${o} brightness`,
        min: 0,
        max: 1
      }),
        t.addInput(r.whiteness, "value", {
          label: "白さ",
          presetKey: `${o} whiteness`,
          min: 0,
          max: 1
        });
    }
    {
      const t = u.addFolder({
        title: "光",
        expanded: !1
      });
      r.uRay.value.forEach((i, b) => {
        const v = `ray ${b + 1}`,
          x = t.addFolder({
            title: v,
            expanded: i.opacity > 0
          });
        x.addInput(i, "center", {
          presetKey: `${o} ${v} center`,
          x: {
            min: -2,
            max: 2
          },
          y: {
            min: -2,
            max: 2,
            inverted: !0
          }
        }),
          x.addInput(i, "rotation", {
            presetKey: `${o} ${v} rotation`,
            min: 0,
            max: 0.2,
            step: 0.001
          }),
          x.addInput(i, "speed", {
            presetKey: `${o} ${v} speed`,
            min: 0
          }),
          x.addInput(i, "offset", {
            presetKey: `${o} ${v} offset`,
            min: 0,
            max: 0.1,
            step: 0.001
          }),
          x.addInput(i, "width", {
            presetKey: `${o} ${v} width`,
            min: 0,
            max: 0.1,
            step: 0.001
          }),
          x.addInput(i, "edge", {
            presetKey: `${o} ${v} edge`,
            min: 0,
            max: 0.1,
            step: 0.001
          }),
          x.addInput(i, "rayDistance", {
            presetKey: `${o} ${v} rayDistance`,
            min: 0
          }),
          x.addInput(i, "opacity", {
            presetKey: `${o} ${v} opacity`,
            min: 0,
            max: 1
          });
      });
    }
    u.addInput(r.opacity, "value", {
      label: "opacity",
      presetKey: `${o} opacity`,
      min: 0,
      max: 1
    });
    {
      const t = u.addFolder({
        title: "ナイトモード",
        expanded: d
      });
      t.addInput(r.uIsNightMode, "value", {
        label: "ナイトモード",
        presetKey: `${o} uIsNightMode`
      }),
        t.addInput(r.nightModeThreshold1, "value", {
          label: "しきい値 1",
          presetKey: `${o} nightModeThreshold1`,
          min: 0,
          max: 1,
          step: 0.01
        }),
        t.addInput(r.nightModeThreshold2, "value", {
          label: "しきい値 2",
          presetKey: `${o} nightModeThreshold2`,
          min: 0,
          max: 1,
          step: 0.01
        }),
        t.addInput(r.nightModeThreshold3, "value", {
          label: "しきい値 3",
          presetKey: `${o} nightModeThreshold3`,
          min: 0,
          max: 1,
          step: 0.01
        }),
        t.addInput(r.nightModeThreshold4, "value", {
          label: "しきい値（背景）",
          presetKey: `${o} nightModeThreshold4`,
          min: 0,
          max: 1,
          step: 0.01
        }),
        t.addInput(r.nightModeBrightness1, "value", {
          label: "明るさ 1",
          presetKey: `${o} nightModeBrightness1`,
          min: 0,
          max: 1,
          step: 0.01
        }),
        t.addInput(r.nightModeBrightness2, "value", {
          label: "明るさ 2",
          presetKey: `${o} nightModeBrightness2`,
          min: 0,
          max: 1,
          step: 0.01
        }),
        t.addInput(r.nightModeBrightness3, "value", {
          label: "明るさ 3",
          presetKey: `${o} nightModeBrightness3`,
          min: 0,
          max: 1,
          step: 0.01
        }),
        t.addInput(r.nightModeBrightness4, "value", {
          label: "明るさ（背景）",
          presetKey: `${o} nightModeBrightness4`,
          min: 0,
          max: 1,
          step: 0.01
        }),
        t.addInput(r.monochromeMax, "value", {
          label: "明るさ",
          presetKey: `${o} monochromeMax`,
          min: 0,
          max: 1,
          step: 0.01
        }),
        t.addInput(r.monochromeExponent, "value", {
          label: "トーンカーブ",
          presetKey: `${o} monochromeExponent`,
          min: 0,
          max: 5,
          step: 0.01
        });
    }
  }
  return {
    scene: V,
    camera: j,
    rtTextureColorBack: N,
    rtTextureColor: _,
    rtTextureDepth: B,
    bokeh_uniforms: h,
    bokehUniformsWithoutValue: r,
    materialBokeh: Z,
    materialDepth: g,
    materialDepthNone: R,
    materialDepthForce: E,
    quad: U,
    resize(o, u, t) {
      const i = o * t,
        b = u * t;
      j.resize(i, b),
        N.setSize(i, b),
        _.setSize(i, b),
        B.setSize(i, b),
        (h.objectResolution.value = new m(i, b)),
        U.scale.set(i, b, 1);
    },
    dispose() {
      N.dispose(),
        _.dispose(),
        B.dispose(),
        g.dispose(),
        R.dispose(),
        E.dispose(),
        U.dispose();
    }
  };
}
const { pow: l, sqrt: A, sin: S, cos: he, PI: O } = Math,
  H = 1.70158,
  T = H * 1.525,
  ve = H + 1,
  pe = (2 * O) / 3,
  Y = (2 * O) / 4.5,
  P = 7.5625,
  D = 2.75;
function J(e) {
  return e;
}
function X(e) {
  return e * e;
}
function ee(e) {
  return 1 - (1 - e) * (1 - e);
}
function ne(e) {
  return e < 0.5 ? 2 * e * e : 1 - l(-2 * e + 2, 2) / 2;
}
function oe(e) {
  return e * e * e;
}
function te(e) {
  return 1 - l(1 - e, 3);
}
function re(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - l(-2 * e + 2, 3) / 2;
}
function ae(e) {
  return e * e * e * e;
}
function le(e) {
  return 1 - l(1 - e, 4);
}
function ie(e) {
  return e < 0.5 ? 8 * e * e * e * e : 1 - l(-2 * e + 2, 4) / 2;
}
function se(e) {
  return e * e * e * e * e;
}
function ce(e) {
  return 1 - l(1 - e, 5);
}
function ue(e) {
  return e < 0.5 ? 16 * e * e * e * e * e : 1 - l(-2 * e + 2, 5) / 2;
}
function Pe(e) {
  return 1 - he((e * O) / 2);
}
function Le(e) {
  return S((e * O) / 2);
}
function Ae(e) {
  return -(he(O * e) - 1) / 2;
}
function $e(e) {
  return e === 0 ? 0 : l(2, 10 * e - 10);
}
function He(e) {
  return e === 1 ? 1 : 1 - l(2, -10 * e);
}
function Ke(e) {
  return e === 0
    ? 0
    : e === 1
    ? 1
    : e < 0.5
    ? l(2, 20 * e - 10) / 2
    : (2 - l(2, -20 * e + 10)) / 2;
}
function Ge(e) {
  return 1 - A(1 - l(e, 2));
}
function ze(e) {
  return A(1 - l(e - 1, 2));
}
function Ve(e) {
  return e < 0.5
    ? (1 - A(1 - l(2 * e, 2))) / 2
    : (A(1 - l(-2 * e + 2, 2)) + 1) / 2;
}
function je(e) {
  return ve * e * e * e - H * e * e;
}
function Ze(e) {
  return 1 + ve * l(e - 1, 3) + H * l(e - 1, 2);
}
function Qe(e) {
  return e < 0.5
    ? (l(2 * e, 2) * ((T + 1) * 2 * e - T)) / 2
    : (l(2 * e - 2, 2) * ((T + 1) * (e * 2 - 2) + T) + 2) / 2;
}
function qe(e) {
  return e === 0
    ? 0
    : e === 1
    ? 1
    : -l(2, 10 * e - 10) * S((e * 10 - 10.75) * pe);
}
function We(e) {
  return e === 0
    ? 0
    : e === 1
    ? 1
    : l(2, -10 * e) * S((e * 10 - 0.75) * pe) + 1;
}
function Ye(e) {
  return e === 0
    ? 0
    : e === 1
    ? 1
    : e < 0.5
    ? -(l(2, 20 * e - 10) * S((20 * e - 11.125) * Y)) / 2
    : (l(2, -20 * e + 10) * S((20 * e - 11.125) * Y)) / 2 + 1;
}
function $(e) {
  return e < 1 / D
    ? P * e * e
    : e < 2 / D
    ? P * (e -= 1.5 / D) * e + 0.75
    : e < 2.5 / D
    ? P * (e -= 2.25 / D) * e + 0.9375
    : P * (e -= 2.625 / D) * e + 0.984375;
}
function Je(e) {
  return 1 - $(1 - e);
}
const Xe = $;
function en(e) {
  return e < 0.5 ? (1 - $(1 - 2 * e)) / 2 : (1 + $(2 * e - 1)) / 2;
}
const an = {
  linear: J,
  none: J,
  "sine.in": Pe,
  "sine.out": Le,
  "sine.inOut": Ae,
  "quad.in": X,
  "quad.out": ee,
  "quad.inOut": ne,
  "power1.in": X,
  "power1.out": ee,
  "power1.inOut": ne,
  "cubic.in": oe,
  "cubic.out": te,
  "cubic.inOut": re,
  "power2.in": oe,
  "power2.out": te,
  "power2.inOut": re,
  "quart.in": ae,
  "quart.out": le,
  "quart.inOut": ie,
  "power3.in": ae,
  "power3.out": le,
  "power3.inOut": ie,
  "quint.in": se,
  "quint.out": ce,
  "quint.inOut": ue,
  "power4.in": se,
  "power4.out": ce,
  "power4.inOut": ue,
  "expo.in": $e,
  "expo.out": He,
  "expo.inOut": Ke,
  "circ.in": Ge,
  "circ.out": ze,
  "circ.inOut": Ve,
  "back.in": je,
  "back.out": Ze,
  "back.inOut": Qe,
  "elastic.in": qe,
  "elastic.out": We,
  "elastic.inOut": Ye,
  "bounce.in": Je,
  "bounce.out": Xe,
  "bounce.inOut": en
};
export { tn as B, an as e, rn as g, z as i };
