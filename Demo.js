/*
bpm 80, mutta ticks per beat 6
tä on siis 3/4 ja 4/4 juttuja synkopoituna
ei nyt ihan loppuun asti, mut tästä voi alkaa kasaamaan jo demoa

---

Intro:
-Paljon numeroita ruudulla. Esim starfield numeroilla tunnelissa
-Yksittäisiä numeroita ”valikoituu” joukosta, kunnes muodostavat numerosarjan

Tekstit samaan aikaan:
Multiple independent parties have witnessed their existence, but so far no coherent theory has been presented

This documentation will present new facts and theories and try to answer into three questions:
-What?
-Where?
-When?

Jumalauta Independent Research Force presents:

THE NUMBERS

Part 2:
Tämä on käytännössä koko loppudemo:
Investigation board

Kiinnitetyissä polaroideissa yms jollain tapaa animoituja tai effuja sisältäviä asioita esim:
-Glitchieffuilla olevia screenshotteja demojen kohdista missä numerosarja on ollut
-Färjan (tekstiehdotus: BIG FÄRJAN HIDING THE TRUTH?
-All-seeing eye pyörimässä
-Rotatoiva Aulangon suuri huvila (Sauli modellaa)
-Hämeenlinnan rajat (2D-plane ja esim teksti ”FLAT HÄMEENLINNA PROVED”
-Jotain perusjuttuja oikeita määriä, esim starfield missä 29 tähteä, 8 metapalloa, joku 25 polygonin juttu
-numerologiajuttu missä 666 muuttuu 290825:ksi. Pentagrammi taustagraffaan
-Eri compoja esiteltynä joidenkin taustaeffujen kanssa
-Greetsit ja creditsit
-Lopussa näytetään sisään zoomaava kokonaiskuva investigation boardista. ”It’s all connected”. Zoomataan keskimmäiseen kuvaan mihin kaikki yhtyy ja siinä zoomataan pilviverhon läpi hämeenlinnaan Aulangon suurelle huvilalle ja kamera glitchaa pois

Part 3:
Muffled voice ja spektrogrammi tai jotain ja subtitlet:
”I have seen the truth and now these visions wont stop haunting me. I have to be there. I have to be there. I have to be there.”
*/

const deg2rad = 0.01745329251;
window.camPos = [0.0,0.0,0.0];
window.camPosLength = 1.0;
window.camFov = 0.0;
window.beat = 60/80;
window.tick = window.beat/6;
window.pattern = window.beat*4;
window.camNear = 0.0;
window.camFar = 0.0;
includeFile('multiSceneEffects/PostProcess.js');
includeFile('multiSceneEffects/dof.js')
includeFile('multiSceneEffects/EffectExplosion.js');
includeFile('sceneIntro/intro.js');
includeFile('sceneInvestigationBoard/investigationBoard.js');
Demo.prototype.cameraSetup = function() {
  this.loader.addAnimation({
      "camera": "cam1"
      ,"position":[{"x":0,"y":0,"z":0.0}]
      ,"lookAt":[{"x":0,"y":0.0,"z":0.0}]
      ,"up":[{"x":0,"y":1,"z":0}]
      ,"perspective":[{"fov":45,"aspect":16/9,"near":0.1,"far":1000}]
      ,"runPreFunction": (animation)=>{
          animation.position[0].x = 0 + Sync.get('General:CamRot')*Math.sin(Sync.get('General:CamRotSpeed')*getSceneTimeFromStart());
          animation.position[0].z = Sync.get('General:CamDistance') + Sync.get('General:CamRot')*Math.cos(Sync.get('General:CamRotSpeed')*getSceneTimeFromStart());
          animation.position[0].y = Sync.get('General:CamY');
          window.camPos = [animation.position[0].x,animation.position[0].y,animation.position[0].z];
          window.camNear = animation.perspective[0].near;
          //window.camFar = animation.perspective[0].far;
          window.camFar = animation.perspective[0].far;
          window.camFov = animation.perspective[0].fov*deg2rad;
          
          // console.log("camPos "+window.camPos);
          // console.log("camInvProjMat: " + window.camInvProjMat.elements + " camToWorldMat: "+ window.camToWorldMat.elements);
        }
  });    

  this.loader.addAnimation({
      "light": {
          "type": "Directional",
          "properties": { "intensity": 2.85 },
          "castShadow": true
      }
      ,position:[{x:()=>window.camPos[0],y:()=>window.camPos[1],z:()=>window.camPos[2]}]
      
      ,"color": [{
          "r": ()=>Sync.get('Light:R'), "g": ()=>Sync.get('Light:G'), "b": ()=>Sync.get('Light:B')
      }]
  });    
};

Demo.prototype.setScene = function (sceneName) {
    this.loader.setScene(sceneName);
    this.cameraSetup();
};

const settings = new Settings();
settings.engine.preload = false;
settings.demo.renderer.sortObjects = false;
settings.demo.renderer.logarithmicDepthBuffer = false;
settings.demo.sync.rocketFile = 'sync/demo.rocket';
settings.demo.sync.beatsPerMinute = 80;
settings.demo.sync.rowsPerBeat = 6;
settings.demo.camera.near = 0.1;
settings.demo.camera.far = 1000.0;
settings.demo.image.texture.minFilter = 'NearestFilter';
settings.demo.image.texture.magFilter = 'NearestFilter';
//settings.demo.image.texture.wrapS = 'RepeatWrapping';
//settings.demo.image.texture.wrapT = 'RepeatWrapping';
settings.demo.fbo.color.texture.minFilter = 'NearestFilter';
settings.demo.fbo.color.texture.magFilter = 'NearestFilter';
//settings.demo.fbo.color.texture.wrapS = 'RepeatWrapping';
//settings.demo.fbo.color.texture.wrapT = 'RepeatWrapping';

Demo.prototype.init = function () {
  const start = 0;
  const duration = 180;
  const bpm = 80;
  const beat = 60/bpm;
  const pattern = beat*6;

  this.sceneIntro();
  this.sceneInvestigationBoard();
  this.loader.setScene('main');

  const scenes = [
    {start: 0*window.pattern, duration: 8*window.pattern, name: 'intro',dof:true},
    {start: 9*window.pattern, duration: 48*window.pattern, name: 'investigationBoard',dof:true},
  ];

  scenes.forEach((scene) => {
    this.loader.addAnimation({start: scene.start, duration: scene.duration, scene:{name:scene.name, fbo:{name:scene.name + 'Fbo'}}});
  });

  this.loader.addAnimation({fbo:{name:'screenDof',action:'begin',storeDepth:false}});
    scenes.forEach((scene) => {
        if (scene.dof) {
            this.loader.addAnimation({start: scene.start, duration: scene.duration, color:scene.color, image: [scene.name + 'Fbo.depth.fbo',scene.name + 'Fbo.color.fbo'],
            material:{blending:'CustomBlending', blendEquation:'MaxEquation', blendSrc:'SrcColorFactor', blendDst:'SrcColorFactor'},
            shader: {name: 'multiSceneEffects/depthToColor.fs'}
            });
        }
    });
  this.loader.addAnimation({fbo:{name:'screenDof',action:'unbind'}});

  this.loader.addAnimation({fbo:{name:'screenFbo',action:'begin',storeDepth:false}});
    scenes.forEach((scene) => {
        if (!scene.prePostProcessing) {
            this.loader.addAnimation({start: scene.start, duration: scene.duration, color:scene.color, image: scene.name + 'Fbo.color.fbo'});
        }

    });
  this.loader.addAnimation({fbo:{name:'screenFbo',action:'unbind'}});
  
  this.loader.addAnimation({fbo:{name:'blur',action:'begin',storeDepth:false}});
    this.loader.addAnimation({image: 'screenFbo.color.fbo',
        shader: { name: 'multiSceneEffects/gaussianBlur.fs',
            variable: [
            {"name":"directions", "value":[32.0]},
            {"name":"quality", "value":[4.0]},
            {"name":"size", "value":[16.0]}
            ]}
    });
  this.loader.addAnimation({fbo:{name:'blur',action:'unbind'}});

  this.loader.addAnimation({fbo:{name:'postProcessableFbo',action:'begin',storeDepth:false}});
    this.loader.addAnimation({
        image: ['screenFbo.color.fbo', 'blur.color.fbo', 'screenDof.color.fbo'],
        shader: { name: 'multiSceneEffects/dof.fs',
            variable: [
                {"name":"dofCenter", "value":[()=>Sync.get('General:dofCenter')]},
                {"name":"dofWidth", "value":[0.1]}
                ]}
    });
  this.loader.addAnimation({fbo:{name:'postProcessableFbo',action:'unbind'}});

  this.addPostProcess('postProcessableFbo.color.fbo');
};
