
Demo.prototype.sceneFlatTorus = function () 
{
  this.loader.setScene('flatTorus');
  this.loader.addAnimation({fbo:{name:'flatTorus',action:'begin',storeDepth:false}});

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
          name: '3d_models/flatorus.obj'
        },
        position: [
          {
            x: 0,
            y: 0.3,
            z: 0
          }
        ],
        angle: [
          {
            degreesX:  () => 55*getSceneTimeFromStart()*2.0,
            degreesZ: () => 55*getSceneTimeFromStart(),
            degreesY: 15,
 
          }
        ],
        scale: [{ uniform3d: 0.3 }]
      }
    ]);

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

  this.loader.addAnimation({fbo:{name:'flatTorus',action:'unbind'}});
}
