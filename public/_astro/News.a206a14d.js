import{m as v,s as l,z as K,_ as oe,g as f,e as g,f as I}from"./PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js";import{C as L,d as p,E as C,V as x,G as ae,y as O,z as A,B as ne,l as w,e as re,g as he,D as le,F as ue,c as P,a as B,i as _,P as F,R as T,t as R,b as D,$ as m,Y as j,an as G,am as X,ak as V,aA as Y,aC as $,b4 as Z,b5 as q,b6 as J,b7 as Q,b8 as ee,ay as te,ax as se,m as ie,I as ce,aH as pe}from"./constants.e6c90e33.js";import{B as de,g as me,e as fe}from"./easing.ca1274dc.js";import{c as ge,h as ve,t as xe,b as Se,i as ke,a as ye}from"./taillight.be3f79a0.js";import{i as z,a as we}from"./image.63ed914f.js";import{i as U}from"./cloud_02.dbe4073e.js";import{s as Te}from"./spark.83ebcaee.js";import{n as N,S as b}from"./project.49f9dddf.js";var Re=`precision highp float;

varying vec2 vUv;

const float GAMMA_FACTOR = 2.2;
const vec3 THEME_COLOR = vec3(30., 206., 115.) / 255.;
const vec3 NIGHT_MODE_COLOR_1 = THEME_COLOR;
const vec3 NIGHT_MODE_COLOR_2 = vec3(207., 181., 31.) / 255.;
const vec3 NIGHT_MODE_COLOR_3 = vec3(49., 31., 207.) / 255.;
const vec3 NIGHT_MODE_COLOR_4 = vec3(207., 49., 31.) / 255.;

vec2 fitContain(vec2 coord, vec2 inputResolution, vec2 outputResolution) {
  vec2 ratio = vec2(
    max((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),
    max((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)
  );
  return coord * ratio + (1. - ratio) * 0.5;
}

#pragma glslify: export(fitContain)

void main() {
  vec4 color = vec4(THEME_COLOR, 0.);
  color.rgb = pow(color.rgb, vec3(GAMMA_FACTOR));

  float opacity = min(max(1. - pow((length((vUv - 0.5) / vec2(1.2, 1.)) - 0.1) * 2., 10.), 0.), 0.75);
  color.a = opacity;

  gl_FragColor = color;
  
  
}`;const H={src:"/_astro/b-body_shyanai.2d1d6f51.png",width:1600,height:258,format:"png"},Ce={src:"/_astro/sea_fukan.327deebd.jpg",width:2400,height:670,format:"jpg"},Pe={src:"/_astro/sea_fukan.efd2184d.jpg",width:1200,height:335,format:"jpg"},_e={src:"/_astro/mountain_fukan.b591a9a8.jpg",width:2400,height:670,format:"jpg"},Fe={src:"/_astro/mountain_fukan.71fbc575.jpg",width:1200,height:335,format:"jpg"},Ie={src:"/_astro/sea_fukan_night.1a76eba4.jpg",width:2400,height:670,format:"jpg"},Me={src:"/_astro/sea_fukan_night.e524fd32.jpg",width:1200,height:335,format:"jpg"},be={src:"/_astro/mountain_fukan_night.ae4b6c0b.jpg",width:2400,height:670,format:"jpg"},Oe={src:"/_astro/mountain_fukan_night.68cfa00a.jpg",width:1200,height:335,format:"jpg"};var Ne=`precision highp float;

varying vec2 vUv;

uniform sampler2D uTexture01;
uniform sampler2D uTexture02;

uniform vec2 uResolutionObject;
uniform vec2 uResolutionImage01;
uniform vec2 uResolutionImage02;

uniform float uTime;
uniform vec2 uOffset;
uniform float uSpreadBack;
uniform float uSpreadFront;
uniform float uSpreadCurve;
uniform float uFadeIn;
uniform float uOpacity;

struct Cloud {
  float speed;
  float scale;
  float offset;
};
uniform Cloud uCloud[2];

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
vec4 texture2DInnerRange(sampler2D t, vec2 uv) {
  return (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) ? vec4(0.) : texture2D(t, uv);
}

#pragma glslify: export(texture2DInnerRange)
vec4 overlayTransparentImages(vec4 colorBack, vec4 colorFront) {
  return mix(colorBack, colorFront, colorFront.a);
}

#pragma glslify: export(overlayTransparentImages)

void main() {
  vec2 uv = vUv;

  uv.x -= 0.5;
  uv.x *= (1. - pow(uv.y * uSpreadFront, uSpreadCurve)) / uSpreadBack;
  uv.x += 0.5;

  vec2 uv01 = fitCover(uv, uResolutionImage01, uResolutionObject);
  uv01 = getZoomedUv(uv01, uCloud[0].scale, vec2(0.));
  uv01.y = fract(uv01.y - uTime * uCloud[0].speed + uCloud[0].offset);

  vec2 uv02 = fitCover(uv, uResolutionImage02, uResolutionObject);
  uv02 = getZoomedUv(uv02, uCloud[1].scale, vec2(0.));
  uv02.y = fract(uv02.y - uTime * uCloud[1].speed + uCloud[1].offset);

  
  
  

  vec4 color = overlayTransparentImages(texture2DInnerRange(uTexture01, uv01), texture2DInnerRange(uTexture02, uv02));
  
  
  
  
  
  
  

  
  color.a *= smoothstep(0., uFadeIn, vUv.y);

  color.a *= uOpacity;

  gl_FragColor = color;
  
}`;const Ee={src:"/_astro/spark_long.bb1ae1de.png",width:288,height:46,format:"png"};var Be=`precision highp float;

varying vec2 vUv;

uniform sampler2D uTexture;
uniform sampler2D uTextureFooter;
uniform vec2 uResolutionObject;
uniform vec2 uResolutionImage;
uniform float uTime;
uniform float uSpread;
uniform float uScale;
uniform float uDarkness;
uniform float uOpacity;
uniform float uFooterProgress;
uniform vec3 uBackgroundColor;

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
vec2 repeatUvReverse(vec2 uv) {
  return vec2(
    mod(uv.x, 2.) < 1. ? fract(uv.x) : 1. - fract(uv.x),
    mod(uv.y, 2.) < 1. ? fract(uv.y) : 1. - fract(uv.y)
  );
}

#pragma glslify: export(repeatUvReverse)
vec4 texture2DInnerRange(sampler2D t, vec2 uv) {
  return (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) ? vec4(0.) : texture2D(t, uv);
}

#pragma glslify: export(texture2DInnerRange)

void main() {
  vec2 uv = vUv;

  uv -= 0.5;
  uv.x *= 1. + (0.5 - length(uv - vec2(0., 0.5))) * uSpread;
  uv.y += uTime;
  uv += 0.5;

  uv = fitCover(uv, uResolutionImage, uResolutionObject);
  uv = getZoomedUv(uv, uScale, vec2(0.));
  uv = repeatUvReverse(uv);

  vec4 color = mix(texture2DInnerRange(uTexture, uv), texture2DInnerRange(uTextureFooter, uv), uFooterProgress);
  color.rgb = mix(color.rgb, uBackgroundColor, 1. - uOpacity);
  color.rgb *= uDarkness;

  gl_FragColor = color;
  
}`;const W={src:"/_astro/404-text.8c23cda1.png",width:626,height:310,format:"png"},y=Math.PI*.1549,E=y*.4,e={backgroundColor:new L(.71,.75,.68),camera:{fov:48,fovTransitionOut:28,position:new p(v.isSp?-1.73:-1.8,-9.3,0),positionTransitionOut:new p(v.isSp?-1.73:-1.8,-9.3,-50),position404End:new p(v.isSp?-1.73:-1.8,-8.3,-51),far:1e3,lookAt:new p(v.isSp?-30:-80,-10,-400),lookAtEnd:new p(-4,-10,-400),lookAt404End:new p(-4,-10,-400)},directionalLight:{color:new L(1,1,1),intensity:2,position:new p(.35,100,10)},ambientLight:{color:new L(1,1,1),intensity:2},street:{position:new p(0,3e3,0),model:{position:new p(0,0,0)}},car:{individual:[{position:new p(-2.3,-10.4,-13),start:0,isOtherSide:!1},{position:new p(2.3,-10.2,0),start:0,isOtherSide:!0},{position:new p(2.3,-10.2,0),start:Math.PI*.2,isOtherSide:!0}],scale:.9,speed:.01,headlight:{position:new p(.2,0,4.5+3),scale:new p(1.5,3,1),opacity:.4},taillight:{position:new p(0,0,-2.8),scale:new p(1,1,1),opacity:.35}},streetBackground:{position:new p(-.8,240,-990),positionEnd:new p(1,240,-990),rotation:new C(.1,.2,0),rotationEnd:new C(.1,0,0),size:new p(2400,380,1),scale:1.12,scaleEnd:1.4,spread:1,darkness:.95,opacity:.64,speed:.025},sky:{position:new p(0,190,-700),rotation:new C(1.45,-.05,0),scale:new p(3200,460,1),offset:new x(0,0),spreadBack:.02,spreadFront:.07,spreadCurve:.004,fadeIn:.1,speed:.6,footerSpeed:.2,clouds:[{speed:.01,scale:.5,offset:.3},{speed:.05,scale:.15,offset:0}]},title:{position:new p(0,38,0)},move:{streetDistance:.02,streetBackgroundDistance:.5,skyDistance:10,carDistance:.3,moveDuration:11,carDelayRate:.1,carMoveDuration:17,carMoveEase:"power1.in",streetRotation:0,streetPositionY:0,changeStreetPosition:.7,changeBackgroundPosition:.26,hideFushaPosition:.2,hideSeaPosition:.08,goCarPosition:.035,showContentsPosition:.04},spark:{speed:.7,interval:5,positionY:-1.63,scale:new x(.5,.3),rotation:.5,darkness:1,bloom:.6,opacity:1},text404:{position:new p(-1.8,v.isSp?-5.43:-4,-50),position404End:new p(-1.8,-9,-50),scale:v.isSp?3.15:4.65},speed:.02,stop:!1},S={mNear:11,mFar:e.camera.far*.93,maxblur:3.5,maxblurLower:8,blurFocus:1.4,blurExponent:1.5,blurCenter:new x(.08,.02),bokehNear:0,bokehFarBack:1.4,bokehFarFront:.03,fogNear:.8,fogFar:1,brightness:.8,brightnessLower:.42,whiteness:0,whitenessLower:.4,noiseProgress:1,monochromeMax:.22,uRay:[{center:new x(1.18,v.isSp?1.5:1.3),rotation:.03,speed:.1*.5,offset:5,width:.059,edge:.01,rayDistance:v.isSp?5.5:4.5,opacity:.8,centerEnd:new x(1.18-.05,v.isSp?1.5:1.3)},{center:new x(1.06,v.isSp?1.5:1.3),rotation:.04,speed:.5*.5,offset:.023,width:.037,edge:.042,rayDistance:v.isSp?6.83:5,opacity:.4,centerEnd:new x(1.06-.05,v.isSp?1.5:1.3)},{center:new x(.38,v.isSp?1.5:1.3),rotation:.03,speed:.2*.5,offset:0,width:.04,edge:.01,rayDistance:3.6,opacity:.67,centerEnd:new x(.38-.05,v.isSp?1.5:1.3)}]};class Xe extends ae{scene=new O;sceneCar=new O;sceneSky=new O;sceneText=new O;scene2D=new O;camera;camera2D;lookAt=e.camera.lookAt.clone();cameraPosition=e.camera.position.clone();folder;street=new A;cars=[];postprocessing={composer:ne,bokeh:de};carMixers=[];footerTweens=[];sparks=[];uniformsSparks=[];isFooter=!1;isChangeBackground=!1;isHideFusha=!1;isHideSea=!1;isGoCar=!1;isShowContents=!1;isStop=!1;footerProgress=0;hideSeaProgress=0;hideFushaProgress=0;time=0;carPosition=0;isRunTransition=!1;isRunTransitionKv=!1;isRunBalloon=!1;isRunContent2=!1;isRunContent3=!1;isRunFooter=!1;isLowerPage=!1;isTransitionedNext=!1;isTransitionedNextKv=!1;isCompleteShowFooter=!1;isStartedFooter=!1;isShowFooter=!1;isStartAnimation=!1;onInit(){this.isLowerPage=this.option.isLowerPage,l.enablePane&&(this.folder=l.pane.addFolder({title:"News",expanded:!1}),this.folder.addInput(e,"speed",{min:0})),this.option.isNight&&(this.textures.Spark=w(Ee,{})),this.textures.headlight=w(ke,{}),this.textures.taillight=w(ye,{}),this.initScene(),this.initCamera(),this.initLight(),this.initSky(),this.initStreet(),this.isLowerPage?(this.initStreetFooter(),this.init404Text()):(this.initCar(),setTimeout(()=>{this.initStreetFooter()},1e3)),this.initPostprocessing(),this.HeaderEnergy=l.components.HeaderEnergy,this.on("changeScene",(t,o=!1)=>{switch(t){case"News":o&&(l.components.topNews.show(),l.components.topFooter.hide());break;case"Footer":o||this.showFooter();break}})}initScene(){this.sceneSky.background=e.backgroundColor}initCamera(){if(this.camera=new re(e.camera.fov,this.option.camera.aspect,this.option.camera.near,e.camera.far),this.camera.position.copy(this.cameraPosition),this.setLookAt(),this.camera2D=new he,l.enablePane){const t=this.folder.addFolder({title:"camera",expanded:!1});t.addInput(this,"cameraPosition",{label:"position"}).on("change",()=>{this.camera.position.copy(this.cameraPosition),this.setLookAt()}),t.addInput(this.camera,"fov",{min:5,max:179}).on("change",()=>{this.camera.updateProjectionMatrix()}),t.addInput(this.camera,"far",{min:0}).on("change",()=>{this.camera.updateProjectionMatrix()}),t.addInput(this,"lookAt").on("change",()=>{this.setLookAt()})}}setLookAt(){const t=this.lookAt.clone().add(new p(0,this.cameraPosition.y));this.camera.lookAt(t)}initLight(){{const t=new le(e.directionalLight.color,e.directionalLight.intensity);t.position.copy(e.directionalLight.position),this.scene.add(t),this.sceneCar.add(t.clone())}{const t=new ue(16777215,16777215,1);t.position.set(0,50,0),this.scene.add(t),this.sceneCar.add(t.clone())}}initSky(){this.initStreetBackground(),this.initCloud()}initStreetBackground(){const t=this.option.isNight?this.isSp?Me:Ie:this.isSp?Pe:Ce,o=this.textures.StreetBackground=w(t,{}),s=this.option.isNight?this.isSp?Oe:be:this.isSp?Fe:_e,i=w(s,{}),n=P({uTexture:o,uTextureFooter:i,uResolutionObject:new x(e.streetBackground.size.x,e.streetBackground.size.y),uResolutionImage:new x(t.width,t.height),uTime:0,uSpread:e.streetBackground.spread,uScale:e.streetBackground.scale,uDarkness:e.streetBackground.darkness,uOpacity:e.streetBackground.opacity,uBackgroundColor:e.backgroundColor,uFooterProgress:0});this.uniformsStreetBackground=B(n);const u=this.meshStreetBackground=new _(new F(1,1),new T({uniforms:n,vertexShader:R,fragmentShader:Be}));if(u.position.copy(e.streetBackground.position),u.rotation.copy(e.streetBackground.rotation),u.scale.set(e.streetBackground.size.x,e.streetBackground.size.y,1),this.sceneSky.add(u),l.enablePane){const c=this.folder.addFolder({title:"街背景",expanded:!1});c.addInput(u,"visible"),c.addInput(u,"position"),c.addInput(u,"rotation"),c.addInput(u,"scale",{label:"全体の広さ",x:{min:0},y:{min:0},z:{min:0}}).on("change",()=>{this.uniformsStreetBackground.uResolutionObject.value.set(u.scale.x,u.scale.y)}),c.addInput(this.uniformsStreetBackground.uScale,"value",{label:"scale",min:0}),c.addInput(this.uniformsStreetBackground.uSpread,"value",{label:"歪み",min:0,max:2}),c.addInput(this.uniformsStreetBackground.uDarkness,"value",{label:"darkness"}),c.addInput(this.uniformsStreetBackground.uOpacity,"value",{label:"opacity",min:0,max:1}),c.addInput(e.streetBackground,"speed",{min:0,max:.2,step:.001})}}initCloud(){const t=this.textures.imageCloud01=w(z,{}),o=this.textures.imageCloud02=w(U,{}),s=P({uTexture01:t,uTexture02:o,uResolutionObject:new x(e.sky.scale.x,e.sky.scale.y),uResolutionImage01:new x(z.width,z.height),uResolutionImage02:new x(U.width,U.height),uTime:0,uOffset:e.sky.offset,uSpreadBack:e.sky.spreadBack,uSpreadFront:e.sky.spreadFront,uSpreadCurve:e.sky.spreadCurve,uFadeIn:e.sky.fadeIn,uCloud:e.sky.clouds,uOpacity:1});this.uniformsSky=B(s);const i=new _(new F(1,1),new T({uniforms:s,vertexShader:R,fragmentShader:Ne,transparent:!0}));if(i.position.copy(e.sky.position),i.rotation.copy(e.sky.rotation),i.scale.set(e.sky.scale.x,e.sky.scale.y,1),this.sceneSky.add(i),l.enablePane){const n=this.folder.addFolder({title:"空",expanded:!1});n.addInput(i,"visible"),n.addInput(i,"position"),n.addInput(i,"rotation"),n.addInput(i,"scale",{label:"全体の広さ",x:{min:0},y:{min:0},z:{min:0}}).on("change",()=>{this.uniformsSky.uResolutionObject.value.set(i.scale.x,i.scale.y)}),n.addInput(this.uniformsSky.uSpreadBack,"value",{label:"奥の広がり",min:0,max:.1}),n.addInput(this.uniformsSky.uSpreadFront,"value",{label:"手前の広がり",min:0,max:1}),n.addInput(this.uniformsSky.uSpreadCurve,"value",{label:"広がりカーブ",min:0,max:.01,step:1e-4}),n.addInput(this.uniformsSky.uFadeIn,"value",{label:"fadeIn",min:0,max:1}),n.addInput(e.sky,"speed",{min:0,max:5}),this.uniformsSky.uCloud.value.forEach((u,c)=>{const h=n.addFolder({title:`雲${c+1}`});h.addInput(u,"speed",{min:0,max:.5}),h.addInput(u,"scale",{min:0,max:1}),h.addInput(u,"offset",{min:0})})}}initStreet(){let t;if(l.enablePane&&(t=this.folder.addFolder({title:"街",expanded:!1})),this.street=new A,this.street.position.copy(e.street.position),this.scene.add(this.street),this.isLowerPage)return;let o;this.option.isNight&&(o=this.textures.Spark),D(this.option.isNight?"/gl/night/optimize/colony_land_v8_line.glb":"/gl/optimize/colony_land_v8.glb",{onLoad:(s,i)=>{const n=i,{animations:u}=s;if(n.name="glTF",n.traverse(h=>{if(h.isMesh){h.material.transparent=!0,h.material.alphaTest=.5;const a=h.name.startsWith("Cylinder");if(this.option.isNight&&(h.name.startsWith("lamp_")||a)&&(a&&(h.material.roughness=1,h.material.metalness=1),h.material.emissive.copy(N),h.renderOrder=2),this.option.isNight&&!this.isLowerPage&&h.name.startsWith("spark_")){const r=h.name==="spark_03009"||h.name==="spark_03010"||h.name==="spark_03011",d=P({uTexture:o,uSpeed:e.spark.speed,uInterval:e.spark.interval,uPositionY:e.spark.positionY,uScale:e.spark.scale,uRotation:e.spark.rotation,uDarkness:e.spark.darkness,uBloom:e.spark.bloom,uOpacity:e.spark.opacity,uOffset:Math.random(),uTime:0}),k=B(d);this.uniformsSparks.push(k);const M=new T({uniforms:d,vertexShader:R,fragmentShader:Te,side:ce,transparent:!0,alphaTest:.5,depthTest:r,depthWrite:r});h.material=M,h.renderOrder=1,this.sparks.push(h)}h.material.opacity=1}}),l.enablePane&&this.option.isNight){const h=t.addFolder({title:"光ライン"});h.addInput(e.spark,"speed",{min:0,max:2}).on("change",({value:a})=>{this.uniformsSparks.forEach(r=>{r.uSpeed.value=a})}),h.addInput(e.spark,"interval",{min:0,max:10}).on("change",({value:a})=>{this.uniformsSparks.forEach(r=>{r.uInterval.value=a})}),h.addInput(e.spark,"positionY",{min:-5,max:5}).on("change",({value:a})=>{this.uniformsSparks.forEach(r=>{r.uPositionY.value=a})}),h.addInput(e.spark,"scale",{x:{min:0,max:2},y:{min:0,max:2}}).on("change",({value:a})=>{this.uniformsSparks.forEach(r=>{r.uScale.value=a})}),h.addInput(e.spark,"rotation",{min:0,max:2}).on("change",({value:a})=>{this.uniformsSparks.forEach(r=>{r.uRotation.value=a})}),h.addInput(e.spark,"darkness",{min:0,max:1}).on("change",({value:a})=>{this.uniformsSparks.forEach(r=>{r.uDarkness.value=a})}),h.addInput(e.spark,"bloom",{min:0,max:2}).on("change",({value:a})=>{this.uniformsSparks.forEach(r=>{r.uBloom.value=a})}),h.addInput(e.spark,"opacity",{min:0,max:1}).on("change",({value:a})=>{this.uniformsSparks.forEach(r=>{r.uOpacity.value=a})})}n.position.copy(e.street.model.position),n.applyMatrix4(new m().makeRotationFromEuler(new C(0,0,Math.PI*-.00316))),n.applyMatrix4(new m().makeTranslation(0,-e.street.position.y,0)),n.applyMatrix4(new m().makeRotationFromEuler(new C(0,Math.PI*.5,Math.PI*-.012)));const c=n.clone();c.applyMatrix4(new m().makeRotationX(y)),this.streetModel=n,this.streetModel2=c,this.isSp||(this.streetMixer=new j(n),this.street2Mixer=new j(c),u.forEach(h=>{this.streetMixer.clipAction(h).play(),this.street2Mixer.clipAction(h).play()})),l.enablePane&&(t.addInput(this.street,"visible"),t.addInput(n,"visible",{label:"1つ目表示"}),t.addInput(c,"visible",{label:"2つ目表示"}),t.addInput(this.street.rotation,"x",{label:"回転"}),t.addInput(this.street.position,"y",{label:"全体位置",min:0,max:3e3,step:10}).on("change",()=>{n.position.copy(e.street.model.position),n.applyMatrix4(new m().makeTranslation(0,-this.street.position.y,0)),c.position.copy(n.position),c.rotation.copy(n.rotation),c.matrix.copy(n.matrix),c.applyMatrix4(new m().makeRotationX(y))}),t.addInput(n.position,"x",{label:"横位置"}).on("change",({value:h})=>{c.position.x=h}))}})}initStreetFooter(){l.enablePane&&this.folder.addFolder({title:"街（フッター）"}),D(this.option.isNight?"/gl/night/optimize/colony_mountain_v10_line.glb":"/gl/optimize/colony_mountain_v10.glb",{onLoad:(t,o)=>{const s=o;if(s.name="glTF",s.position.copy(e.street.model.position),s.applyMatrix4(new m().makeRotationFromEuler(new C(0,0,Math.PI*-.00316))),s.applyMatrix4(new m().makeRotationZ(e.move.streetRotation)),s.applyMatrix4(new m().makeTranslation(0,-e.street.position.y,0)),s.applyMatrix4(new m().makeRotationFromEuler(new C(0,Math.PI*.5,Math.PI*-.012))),s.applyMatrix4(new m().makeTranslation(0,e.move.streetPositionY,0)),this.footerModel=s,this.footerModelPosition=s.position.clone(),this.footerModelRotation=s.rotation.clone(),s.traverse(i=>{if(i.isMesh){if(i.name==="colony_road"){const{material:u}=i,c=P({uProgress:0});this.uniformsFooterRoad=B(c),u.onBeforeCompile=h=>{h.defines.USE_UV="",Object.assign(h.uniforms,c);const a="void main() {";h.fragmentShader=h.fragmentShader.replace(a,`
                  uniform float uProgress;
                  ${a}`);const r="#include <dithering_fragment>";h.fragmentShader=h.fragmentShader.replace(r,`${r}
                  const vec3 themeColor = vec3(30., 206., 115.) / 255.;
                  const vec3 groundColor = vec3(30., 206., 115.) / 255.;
                  // gl_FragColor.rgb = vec3(vUv, 1.);
                  float t = min(max(-vUv.y / 0.28 + uProgress, 0.), 1.);
                  gl_FragColor.rgb = mix(
                    gl_FragColor.rgb,
                    
                      mix(
                        gl_FragColor.rgb,
                        pow(groundColor, vec3(2.2)),
                        0.32
                      )
                    ,
                    t
                  );
                  float waveLength = 0.1;
                  float t2 = t;
                  t2 *= smoothstep(0., waveLength, t2) * smoothstep(waveLength * 2., waveLength, t2);
                  t2 *= min(-vUv.y / 0.28 + 1., 1.);
                  t2 *= pow(cos(t2 * 80.) * 0.5 + 0.5, 0.2);
                  gl_FragColor.rgb = mix(
                    gl_FragColor.rgb,
                    themeColor,
                    t2
                  );
                  // gl_FragColor.rgb = vec3(t2);
                  `)}}const n=i.name.startsWith("Cylinder");this.option.isNight&&(i.name.startsWith("lamp_")||n)&&(n&&(i.material.roughness=1,i.material.metalness=1),i.material.emissive.copy(N)),this.option.isNight&&i.name.startsWith("spark_")&&(i.material.alphaTest=.5,i.material.opacity=0),i.name.startsWith("spark_")||(i.material.alphaTest=.5,i.material.opacity=1)}}),this.isFooter){const n=-(this.street.rotation.x-E)+y*e.move.changeStreetPosition;this.footerModel.position.copy(this.footerModelPosition),this.footerModel.rotation.copy(this.footerModelRotation),this.footerModel?.applyMatrix4(new m().makeRotationX(n)),this.street.add(this.footerModel)}else this.isDisposed&&this.addDisposeTarget(this.street,this.footerModel)},isAddToLoadingWait:this.isLowerPage})}initCar(){let t;l.enablePane&&(t=this.folder.addFolder({title:"car",expanded:!1})),D("/gl/car_v7_out3.glb",{onLoad:(o,s)=>{const i=s,{animations:n}=o;this.addCar(i,n,t)}}),this.isSp||D(this.option.isNight?"/gl/night/optimize/car_B_v3_yellow.glb":"/gl/optimize/car_B_v3_yellow.glb",{onLoad:(o,s)=>{const i=s,{animations:n}=o;this.addCar(i,n,t,!0)}})}addCar(t,o,s,i=!1){t.name="glTF";const n=this.textures.headlight,u=this.textures.taillight;this.option.isNight&&!i&&t.traverse(a=>{if(a.isMesh)switch(a.material=a.material.clone(),a.material.name){case"lamp":case"emission":a.material.roughness=1,a.material.metalness=0,a.material.emissive.copy(new L(Math.pow(N.r,5.6),Math.pow(N.g,5.6),Math.pow(N.b,5.6)));break}}),t.scale.setScalar(e.car.scale),l.enablePane&&s.addInput(e.car,"scale").on("change",()=>{this.cars.forEach(a=>{a.scale.setScalar(e.car.scale/t.scale.x)})});const c=new _(new F(1.8,4.3),new T({vertexShader:R,fragmentShader:ge,transparent:!0}));c.rotateX(Math.PI*-.5);const h=new A;if(h.add(t,c),this.sceneCar.position.copy(e.street.position),this.option.isNight){{const a=P({uTexture:n,uOpacity:e.car.headlight.opacity}),r=new _(new F(4,4),new T({uniforms:a,vertexShader:R,fragmentShader:ve,transparent:!0}));if(r.name="headlight",r.rotateX(Math.PI*-.5),r.position.copy(e.car.headlight.position),r.scale.copy(e.car.headlight.scale),h.add(r),l.enablePane){const d=s.addFolder({title:"ヘッドライト"});d.addInput(r,"position",{x:{step:.1},y:{step:.1},z:{step:.1}}),d.addInput(r,"rotation"),d.addInput(r,"scale",{x:{step:.1},y:{step:.1},z:{step:.1}}),d.addInput(a.uOpacity,"value",{label:"opacity",min:0,max:1})}}if(!i){const a=new _(new F(1.1,.03),new T({vertexShader:R,fragmentShader:Re,transparent:!0,depthTest:!1}));a.position.set(0,.93,-2.1),a.rotateX(Math.PI*1),h.add(a)}{const a=P({uTexture:u,uOpacity:e.car.taillight.opacity}),r=new _(new F(2,2),new T({uniforms:a,vertexShader:R,fragmentShader:xe,transparent:!0}));if(r.rotateX(Math.PI*-.5),r.position.copy(e.car.taillight.position),r.scale.copy(e.car.taillight.scale),h.add(r),l.enablePane){const d=s.addFolder({title:"テールランプ"});d.addInput(r,"position",{x:{step:.1},y:{step:.1},z:{step:.1}}),d.addInput(r,"rotation"),d.addInput(r,"scale",{x:{step:.1},y:{step:.1},z:{step:.1}}),d.addInput(a.uOpacity,"value",{label:"opacity",min:0,max:1})}}}e.car.individual.forEach((a,r)=>{if(a.isOtherSide&&!i||!a.isOtherSide&&i)return;const d=h.clone();if(this.cars.push(d),d.position.copy(a.position),a.isOtherSide?(d.applyMatrix4(new m().makeTranslation(0,-e.street.position.y,0)),d.applyMatrix4(new m().makeRotationX(a.start)),d.children.forEach(k=>{k.name==="headlight"&&(k.material=k.material.clone(),k.material.depthTest=!1)})):(d.applyMatrix4(new m().makeTranslation(0,-e.street.position.y,0)),d.rotation.copy(new C(0,Math.PI,0)),this.carInitialMatrix=d.matrix.clone()),!this.isSp){const k=new j(d);this.carMixers.push(k),o.forEach(M=>{k.clipAction(M).play()})}})}initInsideCar(){const t=this.textures.InsideCar=w(H,{}),o=P({uTexture:t,noiseMin:.5,noiseMax:.75}),s=this.meshInsideCar=new _(new F(1,1),new T({uniforms:o,vertexShader:R,fragmentShader:Se,transparent:!0}));this.scene2D.add(s)}init404Text(){const t=e.text404,o=this.textures["404Text"]=w(W,{}),s=P({uTexture:o,uProgress:1}),i=this.mesh404Text=new _(new F(1,1),new T({uniforms:s,vertexShader:R,fragmentShader:we,transparent:!0}));i.position.copy(t.position),i.scale.set(W.width*.01*t.scale,W.height*.01*t.scale,1),this.sceneText.add(i)}initPostprocessing(){const{width:t,height:o,pixelRatio:s}=this.option,i=me({width:t,height:o,pixelRatio:s,camera:this.camera,folder:this.folder,effectController:K(K({},S),{maxblur:this.isLowerPage?S.maxblurLower:S.maxblur,maxblurFull:this.isLowerPage?1:0,brightness:this.isLowerPage?S.brightnessLower:S.brightness,whiteness:this.isLowerPage?S.whitenessLower:S.whiteness}),isNight:this.option.isNight});this.postprocessing=i}initOrbitControls(){oe(()=>import("./OrbitControls.105ec41e.js"),["_astro/OrbitControls.105ec41e.js","_astro/constants.e6c90e33.js","_astro/PageTop.astro_astro_type_script_index_0_lang.b1bb8cc1.js"]).then(({OrbitControls:t})=>{const o=this.controls=new t(this.camera,this.option.renderer.domElement);o.addEventListener("change",()=>{this.camera.far=e.camera.far+o.getDistance(),this.camera.updateProjectionMatrix(),this.setLookAt()}),o.maxDistance=5e4,o.update(),this.setLookAt()})}showFooter(){if(this.isFooter)return;this.isFooter=!0;const o=-(this.street.rotation.x-E)+y*e.move.changeStreetPosition;this.footerModel&&(this.footerModel.position.copy(this.footerModelPosition),this.footerModel.rotation.copy(this.footerModelRotation),this.footerModel.applyMatrix4(new m().makeRotationX(o)),this.street.add(this.footerModel));const{time:s}=this,i=this.street.rotation.x-(y*e.move.changeStreetPosition+e.move.streetDistance),n=e.move.moveDuration,u="move";this.headerEnergyScrollRate=this.HeaderEnergy.scrollRate,this.footerTweens=[],this.footerTweens.push(f.to(this.lookAt,{x:e.camera.lookAtEnd.x,duration:n,ease:u,onUpdate:()=>{this.setLookAt()}}));const c=f.to(this.street.rotation,{x:i,duration:n,ease:u,onUpdate:()=>{!this.isChangeBackground&&-(i-this.street.rotation.x)<e.move.changeBackgroundPosition&&(this.isChangeBackground=!0,this.footerTweens.push(gsap.to(this.uniformsStreetBackground.uFooterProgress,{value:1,duration:2,ease:"power3.out"}))),!this.isHideFusha&&-(i-this.street.rotation.x)<e.move.hideFushaPosition&&(this.isHideFusha=!0,this.footerTweens.push(gsap.to(this,{hideFushaProgress:1,duration:3,ease:"power2.out",onUpdate:()=>{const a=1-this.hideFushaProgress;this.streetModel.traverse(r=>{r.isMesh&&this.isFusha(r)&&(r.material.opacity=a)}),this.streetModel2.traverse(r=>{r.isMesh&&this.isFusha(r)&&(r.material.opacity=a)})}}))),!this.isHideSea&&-(i-this.street.rotation.x)<e.move.hideSeaPosition&&(this.isHideSea=!0,this.footerTweens.push(gsap.to(this,{hideSeaProgress:1,duration:1,ease:"power1.out",onUpdate:()=>{const a=1-this.hideSeaProgress;this.streetModel.traverse(r=>{r.isMesh&&(this.isFusha(r)||(r.material.opacity=a,r.name.startsWith("spark_")&&(r.material.uniforms.uOpacity.value=a)))}),this.streetModel2.traverse(r=>{r.isMesh&&(this.isFusha(r)||(r.material.opacity=a,r.name.startsWith("spark_")&&(r.material.uniforms.uOpacity.value=a)))})},onComplete:()=>{this.streetModel.visible=!1,this.streetModel2.visible=!1}}))),!this.isGoCar&&-(i-this.street.rotation.x)<e.move.goCarPosition&&(this.isGoCar=!0,this.cars.forEach((a,r)=>{if(a.visible=!0,!e.car.individual[r].isOtherSide){const k=this.carPosition;let M=this.carPosition;this.footerTweens.push(this.tweenCarShowFooter=f.to(this,{carPosition:k+e.move.carDistance,duration:e.move.carMoveDuration,delay:e.move.moveDuration*e.move.carDelayRate,ease:e.move.carMoveEase,onUpdate:()=>{a.applyMatrix4(new m().makeRotationX(this.carPosition-M)),M=this.carPosition}}))}})),!this.isShowContents&&-(i-this.street.rotation.x)<e.move.showContentsPosition&&(this.isShowContents=!0,this.footerTweens.push(gsap.delayedCall(1.8,()=>{this.uniformsFooterRoad&&this.footerTweens.push(f.to(this.uniformsFooterRoad.uProgress,{value:1,duration:3,ease:"sine.in"})),this.footerTweens.push(gsap.delayedCall(1,()=>{this.isCompleteShowFooter=!0,g.emit("top:arriveAtFooter"),l.components.topFooter.showContents(()=>{g.emit("top:showCompleteFooter")})}))})));const h=c.progress();!this.isShowFooter&&h>=.5?(this.isShowFooter=!0,l.components.topNews.hide(),l.components.topFooter.show()):this.isShowFooter&&h<.5&&(this.isShowFooter=!1,l.components.topNews.show(),l.components.topFooter.hide()),this.HeaderEnergy.scroll(I(this.headerEnergyScrollRate,1-pe,h))}});this.footerTweens.push(c),f.set(this.uniformsStreetBackground.uScale,{value:e.streetBackground.scale}),this.footerTweens.push(f.to(this.uniformsStreetBackground.uTime,{value:`+=${e.move.streetBackgroundDistance}`,duration:n,ease:u})),this.footerTweens.push(f.to(this.uniformsStreetBackground.uScale,{value:e.streetBackground.scaleEnd,duration:n,ease:u})),f.set(this.meshStreetBackground.position,{x:e.streetBackground.position.x}),this.footerTweens.push(f.to(this.meshStreetBackground.position,{x:e.streetBackground.rotationEnd.x,duration:n,ease:u})),f.set(this.meshStreetBackground.rotation,{y:e.streetBackground.rotation.y}),this.footerTweens.push(f.to(this.meshStreetBackground.rotation,{y:e.streetBackground.rotationEnd.y,duration:n,ease:u})),f.set(this.uniformsSky.uTime,{value:s*e.sky.speed}),this.footerTweens.push(f.to(this.uniformsSky.uTime,{value:s*e.sky.speed+e.move.skyDistance,duration:n,ease:u,onComplete:()=>{e.sky.speed=e.sky.footerSpeed,this.isStop=!0}})),this.option.isNight||this.postprocessing.bokehUniformsWithoutValue.uRay.value.forEach((h,a)=>{f.set(h.center,{x:S.uRay[a].center.x}),this.footerTweens.push(f.to(h.center,{x:S.uRay[a].centerEnd.x,duration:n,ease:u})),f.set(h,{rotation:S.uRay[a].rotation}),this.footerTweens.push(f.to(h,{rotation:S.uRay[a].rotation-.001,duration:n,ease:u}))})}showNews(){if(!this.isFooter)return;if(this.isFooter=!1,this.isStartedFooter=!1,this.footerModel){const i=-(-(this.street.rotation.x-E)+y*e.move.changeStreetPosition);this.footerModel.applyMatrix4(new m().makeRotationX(i)),this.street.remove(this.footerModel)}const{time:t}=this,o=this.street.rotation.x;this.lookAt.x=e.camera.lookAt.x,this.setLookAt(),this.street.rotation.x=o,this.isChangeBackground=!1,this.uniformsStreetBackground.uFooterProgress.value=0,this.isHideFusha=!1,this.hideFushaProgress=0,this.streetModel.traverse(s=>{s.isMesh&&this.isFusha(s)&&(s.material.opacity=1)}),this.streetModel2.traverse(s=>{s.isMesh&&this.isFusha(s)&&(s.material.opacity=1)}),this.isHideSea=!1,this.hideSeaProgress=0,this.streetModel.traverse(s=>{s.isMesh&&!this.isFusha(s)&&(s.material.opacity=1)}),this.streetModel2.traverse(s=>{s.isMesh&&!this.isFusha(s)&&(s.material.opacity=1)}),this.streetModel.visible=!0,this.streetModel2.visible=!0,this.isGoCar=!1,this.cars.forEach((s,i)=>{s.visible=!0,e.car.individual[i].isOtherSide||(this.tweenCarShowFooter&&(this.tweenCarShowFooter.kill(),this.tweenCarShowFooter=null),this.carPosition=0,s.position.set(0,0,0),s.rotation.copy(new C(0,Math.PI,0)),s.applyMatrix4(this.carInitialMatrix))}),this.isShowContents=!1,this.uniformsFooterRoad&&(this.uniformsFooterRoad.uProgress.value=0),this.uniformsStreetBackground.uScale.value=e.streetBackground.scale,this.meshStreetBackground.position.x=e.streetBackground.rotation.x,this.meshStreetBackground.rotation.y=e.streetBackground.rotation.y,this.uniformsSky.uTime.value=t*e.sky.speed,e.sky.speed=e.sky.footerSpeed,this.isStop=!1,this.option.isNight||this.postprocessing.bokehUniformsWithoutValue.uRay.value.forEach((s,i)=>{f.set(s.center,{x:S.uRay[i].center.x}),f.set(s,{rotation:S.uRay[i].rotation})})}setFooter(){if(this.cars.forEach((s,i)=>{s.visible=!1}),this.isLowerPage||this.uniformsFooterRoad&&(this.uniformsFooterRoad.uProgress.value=1),this.footerModel){const i=-(this.street.rotation.x-E)+y*e.move.changeStreetPosition;this.footerModel.position.copy(this.footerModelPosition),this.footerModel.rotation.copy(this.footerModelRotation),this.footerModel?.applyMatrix4(new m().makeRotationX(i)),this.street.add(this.footerModel)}const{time:t}=this,o=this.street.rotation.x-(y*e.move.changeStreetPosition+e.move.streetDistance);this.lookAt.x=e.camera.lookAtEnd.x,this.setLookAt(),this.street.rotation.x=o,this.uniformsStreetBackground.uFooterProgress.value=1,this.hideFushaProgress=1,this.hideSeaProgress=1,this.streetModel&&(this.streetModel.visible=!1),this.streetModel2&&(this.streetModel2.visible=!1),this.uniformsStreetBackground.uTime.value=e.move.streetBackgroundDistance,this.uniformsStreetBackground.uScale.value=e.streetBackground.scaleEnd,this.meshStreetBackground.position.x=e.streetBackground.rotationEnd.x,this.meshStreetBackground.rotation.y=e.streetBackground.rotationEnd.y,this.uniformsSky.uTime.value=t*e.sky.speed+e.move.skyDistance,e.sky.speed=e.sky.footerSpeed,this.isStop=!0,this.option.isNight||this.postprocessing.bokehUniformsWithoutValue.uRay.value.forEach((s,i)=>{s.opacity=0}),this.isFooter=!0}isFusha(t){return t.name.startsWith("fusha")||t.name.startsWith("blade")}progressSpark(t){const o=t;this.uniformsSparks.forEach(s=>{s.uTime.value=-(.03+o*4)})}progress404(t){const o=e.camera;this.cameraPosition.y=I(o.position.y,o.position404End.y,t),this.cameraPosition.z=I(o.position.z,o.position404End.z,t),this.camera.position.copy(this.cameraPosition),this.lookAt.y=I(o.lookAtEnd.y,o.lookAt404End.y,t),this.setLookAt(),this.mesh404Text.position.y=I(e.text404.position.y,e.text404.position404End.y,t)}timeScale(t){for(let o=0;o<this.footerTweens.length;o=o+1|0){const s=this.footerTweens[o];if(o===0)if(this.isStartedFooter&&(s.time()===0||t<0&&this.isChangeBackground)){this.footerTweens.forEach(i=>{i.kill()}),this.showNews(),g.emit("top:startTransition:footer",!0),this.isTransitionedNext=!1;break}else this.isStartedFooter=!0;s.timeScale(t)}}resize(t,o,s){this.camera.aspect=t/o,this.camera.updateProjectionMatrix(),this.camera2D.resize(t,o),this.postprocessing.resize(t,o,s),this.meshInsideCar?.position.set(0,-(o-H.height)/2,0),this.meshInsideCar?.scale.set(t,H.height*l.variableSizeRate,1)}showOnInit(){l.components.topNews.showBalloon()}scroll(t,o){t>=G?(this.isRunTransitionKv&&(this.isRunTransitionKv=!1,g.emit("changeHeaderLocationCurrentIndex",b.indexOf("Footer"))),!this.isTransitionedNextKv&&l.nextScene==="Footer"&&l.scrollDirection===1&&(this.isTransitionedNextKv=!0,g.emit("top:startTransition:kv"))):X<t&&t<G?this.isRunTransitionKv||(this.isRunTransitionKv=!0,l.scrollDirection===-1?(this.isTransitionedNextKv=!1,g.emit("changeHeaderLocationCurrentIndex",b.indexOf("Footer"))):this.isTransitionedNextKv||(this.isTransitionedNextKv=!0,g.emit("top:startTransition:kv"))):t<=X&&this.isRunTransitionKv&&(this.isRunTransitionKv=!1,l.scrollDirection===-1&&(g.emit("top:startTransition:kv",!0),g.emit("changeScene","Footer",{isBack:!0}))),t>=V?(this.isRunFooter&&(this.isRunFooter=!1,g.emit("changeHeaderLocationCurrentIndex",b.indexOf("Footer"))),!this.isTransitionedNext&&l.nextScene==="News"&&l.scrollDirection===1&&(this.isTransitionedNext=!0,g.emit("top:startTransition:footer"))):Y<t&&t<V?this.isRunFooter||(this.isRunFooter=!0,this.isCompleteShowFooter=!1,this.isTransitionedNextKv=!1,l.components.topNews.hideContent3(),l.scrollDirection===-1?(g.emit("top:startTransition:footer",!0),g.emit("changeHeaderLocationCurrentIndex",b.indexOf("News")),this.showNews(),l.components.topFooter.hideContents(),this.isTransitionedNext=!1):this.isTransitionedNext||(this.isTransitionedNext=!0,g.emit("top:startTransition:footer"))):t<=Y&&this.isRunFooter&&(this.isRunFooter=!1,this.isCompleteShowFooter=!1,g.emit("changeScene","News",{isBack:!0})),t>=$?this.isRunContent3&&(this.isRunContent3=!1):Z<t&&t<$?this.isRunContent3||(this.isRunContent3=!0,l.components.topNews.showContent3(),l.components.topNews.hideContent2()):t<=Z&&this.isRunContent3&&(this.isRunContent3=!1),t>=q?this.isRunContent2&&(this.isRunContent2=!1):J<t&&t<q?this.isRunContent2||(this.isRunContent2=!0,l.components.topNews.showContent2(),l.components.topNews.hideBalloon(),l.components.topNews.hideContent3()):t<=J&&this.isRunContent2&&(this.isRunContent2=!1),t>=Q?this.isRunBalloon&&(this.isRunBalloon=!1):ee<t&&t<Q?this.isRunBalloon||(this.isRunBalloon=!0,l.components.topNews.showBalloon(),l.components.topNews.hideContent2()):t<=ee&&this.isRunBalloon&&(this.isRunBalloon=!1,l.scrollDirection===-1&&(g.emit("top:startTransition:news",!0),l.components.topNews.hideBalloon())),t>=te?this.isRunTransition&&(this.isRunTransition=!1,g.emit("changeHeaderLocationCurrentIndex",b.indexOf("News"))):se<t&&t<te?this.isRunTransition||(this.isRunTransition=!0,this.isTransitionedNext=!1,this.isTransitionedNextKv=!1,l.scrollDirection===-1&&g.emit("changeHeaderLocationCurrentIndex",b.indexOf("About"))):t<=se&&this.isRunTransition&&(this.isRunTransition=!1,g.emit("changeScene","AboutSky",{isBack:!0}))}tick(t,o,s){const i=o*.001;if(!this.isFooter){const n=t*e.speed%y;this.street.rotation.x=E-n,this.isStartAnimation&&(this.streetMixer?.update(i),this.street2Mixer?.update(i)),this.uniformsStreetBackground.uTime.value+=i*e.streetBackground.speed,this.postprocessing.bokeh_uniforms.time.value=t}this.cars.length>0&&(this.cars.forEach((n,u)=>{e.car.individual[u].isOtherSide?n.applyMatrix4(new m().makeRotationX(i*-e.car.speed)):n.applyMatrix4(new m().makeRotationX(i*e.car.speed*Math.sin(t*.5)*.03))}),this.isStartAnimation&&this.carMixers.forEach(n=>{n.time>n._actions[0]._clip.duration/3&&n.setTime(0),n.update(i)})),(!this.isFooter||this.isStop)&&(this.uniformsSky.uTime.value+=i*e.sky.speed),this.option.isNight&&this.progressSpark(t),this.time=t}render(t=null){this.option.renderer.setRenderTarget(this.postprocessing.rtTextureColor),this.option.renderer.clear(),this.option.renderer.render(this.scene,this.camera),this.option.renderer.clearDepth(),this.option.renderer.render(this.sceneCar,this.camera),this.option.renderer.setRenderTarget(this.postprocessing.rtTextureColorBack),this.option.renderer.clear(),this.option.renderer.render(this.sceneSky,this.camera),this.scene.overrideMaterial=this.postprocessing.materialDepth,this.sceneCar.overrideMaterial=this.postprocessing.materialDepth,this.option.renderer.setRenderTarget(this.postprocessing.rtTextureDepth),this.option.renderer.clear(),this.option.renderer.render(this.scene,this.camera),this.option.renderer.render(this.sceneCar,this.camera),this.scene.overrideMaterial=null,this.sceneCar.overrideMaterial=null,this.option.renderer.setRenderTarget(t),this.option.renderer.render(this.postprocessing.scene,this.postprocessing.camera),this.option.renderer.clearDepth(),this.option.renderer.render(this.sceneText,this.camera),this.option.renderer.clearDepth(),this.option.renderer.render(this.scene2D,this.camera2D)}makeTransitionOut(t){const o=fe["quint.inOut"](t*.85)/.85;this.camera.position.set(...ie(e.camera.position,e.camera.positionTransitionOut,o)),this.camera.fov=I(e.camera.fov,e.camera.fovTransitionOut,o),this.setLookAt(),this.camera.updateProjectionMatrix()}show(t=!1){t&&(this.setFooter(),l.components.topFooter.showContents())}hide(t=!1){t||(l.components.topFooter.hide(),this.footerTweens.forEach(o=>{o.kill()}),this.footerTweens=[])}showComplete(t=!1){t&&(this.isCompleteShowFooter=!0)}start(t=!1){gsap.delayedCall(t||this.isLowerPage?0:.1,()=>{this.isDisposed?this.addDisposeTarget(this.street,this.streetModel):this.street.add(this.streetModel)}),gsap.delayedCall(t||this.isLowerPage?0:.15,()=>{this.isDisposed?this.addDisposeTarget(this.street,this.streetModel2):this.street.add(this.streetModel2)}),gsap.delayedCall(t||this.isLowerPage?0:.2,()=>{this.cars.forEach((o,s)=>{gsap.delayedCall((t||this.isLowerPage?0:.3)*s,()=>{e.car.individual[s].isOtherSide?this.isDisposed?this.addDisposeTarget(this.street,o):this.street.add(o):this.isDisposed?this.addDisposeTarget(this.sceneCar,o):this.sceneCar.add(o)})})}),gsap.delayedCall(t||this.isLowerPage?0:.6,()=>{this.isStartAnimation=!0}),t||(this.camera.position.set(...ie(e.camera.position,e.camera.positionTransitionOut,0)),this.camera.fov=I(e.camera.fov,e.camera.fovTransitionOut,0),this.setLookAt(),this.camera.updateProjectionMatrix(),this.showNews())}}export{Xe as N,Ce as a,Fe as b,_e as c,H as d,Me as e,Ie as f,Oe as g,be as h,Pe as i,Ee as j,Ne as s,Re as t};
