Demo.prototype.sceneChemTrail = function () 
{
  this.loader.setScene('chemTrail');
  this.loader.addAnimation({fbo:{name:'chemTrail',action:'begin',storeDepth:false}});

    this.loader.addAnimation({
      "light": {
          "type": "Directional",
          "properties": { "intensity": 3.85 },
          "castShadow": false
      }
      ,position:[{x:0,y:0,z:5}]
    });    

    this.loader.addAnimation([
      {
        image: {
          name: 'images/sky.png'
        },
        perspective: '2d',
        position: [
          {
            x: 0,
            y: 0,
            z: 0
          }
        ],  
        scale: [{ uniform2d: 1.9 }],
      }
    ]);

    this.loader.addAnimation([
      {
        object: {
          name: '3d_models/f15.obj'
        },
        position: [
          {
            x: 0,
            y: .6,
            z: 0
          }
        ],
        angle: [
          {
            degreesX: 55,
            degreesZ: () => 55*getSceneTimeFromStart(),
            degreesY: 15,
 
          }
        ],
        scale: [{ uniform3d: 0.2 }]
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

    this.addEffectParticleStream(0,200,100,.25,"multiSceneEffects/tex_basicParticle.png",.25,-.1,0,5,5,.02,100);

  this.loader.addAnimation({fbo:{name:'chemTrail',action:'unbind'}});
}
