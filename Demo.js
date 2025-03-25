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
includeFile('multiSceneEffects/particleStream.js');
includeFile('multiSceneEffects/EffectStarfield.js');
includeFile('sceneIntro/intro.js');
includeFile('sceneIntro/introTexts.js');
includeFile('sceneInvestigationBoard/investigationBoard.js');
includeFile('sceneInvestigationBoard/redThread.js');
includeFile('sceneInvestigationBoard/chemTrail.js');
includeFile('sceneInvestigationBoard/farjan.js');
includeFile('sceneInvestigationBoard/flatTorus.js');
includeFile('sceneInvestigationBoard/greetings.js');
includeFile('sceneInvestigationBoard/aliens.js');
includeFile('sceneInvestigationBoard/introPolaroid.js');
includeFile('sceneInvestigationBoard/endZoomer.js');
includeFile('sceneInvestigationBoard/AsmA.js');
includeFile('sceneInvestigationBoard/chess.js');
includeFile('sceneInvestigationBoard/anagram.js');
includeFile('sceneInvestigationBoard/mrna.js');

Demo.prototype.cameraSetup = function(stopCamAt) {
  this.loader.addAnimation({
      "camera": "cam1"
      ,"position":[{"x":0,"y":0,"z":-5}]
      ,"lookAt":[{"x":0.0,"y":0.0,"z":0.0}]
      ,"up":[{"x":0,"y":1,"z":0}]
      ,"perspective":[{"fov":75,"aspect":16/9,"near":.05,"far":1000}]
      ,"distYawPitch":[-5.0,1,2.0]
      ,"instableTimer":[0.0,0.0,0.0,0.0,0.0]
      ,"runPreFunction": (animation)=>{
          if (stopCamAt !== undefined) {
              if (getSceneTimeFromStart() >= stopCamAt) {
                  return;
              }
          }

          for(let i=0;i<animation.instableTimer.length;i++)
              {
                  animation.instableTimer[i]+=Math.random()*getDeltaTime();
              }
          let distance = .05*Sync.get('Cam:Instability')*Math.sin(2*animation.instableTimer[3])+Sync.get('Cam:Distance');
          let pitch = (Sync.get('Cam:Instability')*5*Math.cos(2*animation.instableTimer[1])+Sync.get('Cam:Yaw'))*deg2rad;
          let roll = (Sync.get('Cam:Instability')*5*Math.sin(2*animation.instableTimer[2])+Sync.get('Cam:Pitch'))*deg2rad;
          let yaw = 0.0;
          let target = [Sync.get('Cam:TargetX'),Sync.get('Cam:TargetY'),Sync.get('Cam:TargetZ')]
          let points = [0,0,distance];
          let cosa = Math.cos(yaw),
              sina = Math.sin(yaw);
          let cosb = Math.cos(pitch),
              sinb = Math.sin(pitch);
          let cosc = Math.cos(roll),
              sinc = Math.sin(roll);
          let Axx = cosa*cosb,
              Axy = cosa*sinb*sinc - sina*cosc,
              Axz = cosa*sinb*cosc + sina*sinc;
          let Ayx = sina*cosb,
              Ayy = sina*sinb*sinc + cosa*cosc,
              Ayz = sina*sinb*cosc - cosa*sinc;
          let Azx = -sinb,
              Azy = cosb*sinc,
              Azz = cosb*cosc;
          let px = points[0];
          let py = points[1];
          let pz = points[2];
          let newPoints = [
              (Axx*px + Axy*py + Axz*pz) + target[0],
              Ayx*px + Ayy*py + Ayz*pz + target[1],
              Azx*px + Azy*py + Azz*pz + target[2]
              ];
          window.camPos = newPoints;
          window.camPosLength = Math.sqrt(newPoints[0]*newPoints[0]+newPoints[1]*newPoints[1]+newPoints[2]*newPoints[2]);
          animation.position[0].x = newPoints[0];
          animation.position[0].y = newPoints[1];
          animation.position[0].z = newPoints[2];
          animation.lookAt[0].x = Sync.get('Cam:Instability')*.25*Math.sin(2*animation.instableTimer[3])+Sync.get('Cam:TargetX');
          animation.lookAt[0].y = Sync.get('Cam:Instability')*.25*Math.cos(2*animation.instableTimer[4])+Sync.get('Cam:TargetY');
          animation.lookAt[0].z = Sync.get('Cam:TargetZ');
          animation.perspective[0].fov = Sync.get('Cam:FOV');
          window.camNear = animation.perspective[0].near;
          window.camFar = animation.perspective[0].far;
          window.camFov = animation.perspective[0].fov*deg2rad;
        }
  });       

  this.loader.addAnimation({
      "light": {
          "type": "Directional",
          "properties": { "intensity": 6.85 },
          "castShadow": true
      }
      ,position:[{x:()=>window.camPos[0],y:()=>window.camPos[1],z:()=>window.camPos[2]+2.0}]
      
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
  this.sceneIntroTexts();
  this.sceneInvestigationBoard();
  this.sceneChemTrail();
  this.sceneFarjan();
  this.sceneFlatTorus();
  this.sceneGreetings();
  this.sceneAliens();
  this.sceneIntroPolaroid();
  this.sceneEndZoomer ();
  this.sceneAsmA ();
  this.sceneChess ();
  this.sceneAnagram();
  this.sceneMrna();

  this.loader.setScene('main');

  const scenes = [ 
    {start: 0*window.pattern, duration: 9*window.pattern, name: 'intro', dof:true, polaroid:false},
    {start: 0*window.pattern, duration: 9*window.pattern, name: 'introTexts', dof:false, polaroid:false},
    {start: 9*window.pattern, duration: 48*window.pattern, name: 'investigationBoard', dof:true, polaroid:false},
    //polaroid scenes
    {start: 9*window.pattern, duration: 48*window.pattern, name: 'chemTrail', dof:false, polaroid:true},
    {start: 9*window.pattern, duration: 48*window.pattern, name: 'farjan', dof:false, polaroid:true},
    {start: 9*window.pattern, duration: 48*window.pattern, name: 'flatTorus', dof:false, polaroid:true},
    {start: 9*window.pattern, duration: 48*window.pattern, name: 'greetings', dof:false, polaroid:true},
    {start: 9*window.pattern, duration: 48*window.pattern, name: 'aliens', dof:false, polaroid:true},
    {start: 9*window.pattern, duration: 48*window.pattern, name: 'introPolaroid', dof:false, polaroid:true},
    {start: 9*window.pattern, duration: 48*window.pattern, name: 'endZoomer', dof:false, polaroid:true},
    {start: 9*window.pattern, duration: 48*window.pattern, name: 'AsmA', dof:false, polaroid:true},
    {start: 9*window.pattern, duration: 48*window.pattern, name: 'chess', dof:false, polaroid:true},
    {start: 9*window.pattern, duration: 48*window.pattern, name: 'anagram', dof:false, polaroid:true},
    {start: 9*window.pattern, duration: 48*window.pattern, name: 'mrna', dof:false, polaroid:true}
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
        if (!scene.polaroid || !scene.prePostProcessing) {
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
