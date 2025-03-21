
Demo.prototype.sceneGreetings = function () 
{
  this.loader.setScene('greetings');
  this.loader.addAnimation({fbo:{name:'greetings',action:'begin',storeDepth:false}});

    this.loader.addAnimation({
      "light": {
          "type": "Directional",
          "properties": { "intensity": 5.85 },
          "castShadow": false
      }
      ,position:[{x:0,y:0,z:5}]
    });    


    this.addEffectStarfield(0,240, 100, "multiSceneEffects/tex_basicParticle.png", 450,450,500, 5.5, null, 0,0,0);

    this.loader.addAnimation([
      {
        object: {
          name: '3d_models/ufo.obj'
        },
        position: [
          {
            x: 0,
            y: () => .8+0.1*Math.sin(1.75*getSceneTimeFromStart()),
            z: 0
          }
        ],
        angle: [
          {
            degreesY:  () => 100*getSceneTimeFromStart(),
            degreesX: () => 5*Math.sin(2*getSceneTimeFromStart()),
            degreesZ: () => 180 -2*Math.sin(1.5*getSceneTimeFromStart()),
 
          }
        ],
        scale: [{ uniform3d: 0.3 }]
      }
    ]);
/*
    this.loader.addAnimation([
      {
        image: {
          name: 'sceneInvestigationBoard/tex_polaroid.png'
        },
        perspective: '2d',
        position: [
          {
            x: 0,
            y: 0,
            z: 0
          }
        ],  
        scale: [{ uniform2d: .9 }],
      }
    ]);
*/
  this.loader.addAnimation({fbo:{name:'greetings',action:'unbind'}});
}
