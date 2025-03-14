
Demo.prototype.sceneInvestigationBoard = function () {
  this.setScene('investigationBoard');

  this.loader.addAnimation({image: '_embedded/defaultWhite.png', color: [{r:.6,g:.3,b:.1}]});
  //this.loader.addAnimation({image: 'chemTrail.color.fbo'});

  this.loader.addAnimation([
    {
      object: {
        name: 'sceneInvestigationBoard/investigationboard.obj'
      },
      position: [{
          x: 0,
          y: 0,
          z: 0
        }],
      angle: [{ degreesY: -90,}],
      scale: [{ uniform3d: 1.1 }]
    }
  ]);

  // center
  this.polaroid(0.0 ,0, 0, -3,.5,'chemTrail.color.fbo');

  // left bottom corner
  this.polaroid(0.0 ,-1.65, -.88, -1.5,.43,'chemTrail.color.fbo');
  this.polaroid(0.0 ,-1.3, -.9, 2,.38,'chemTrail.color.fbo');
  this.polaroid(0.0 ,-.95, -.91, -1,.35,'chemTrail.color.fbo');
  this.polaroid(0.0 ,-.60, -.97, 15,.37,'chemTrail.color.fbo');
  
  // left center
  this.polaroid(0.0 ,-1.25, 0, -2,.55,'chemTrail.color.fbo');
 
  // left top corner
  this.polaroid(0.0 ,-1.65, 1.0, -10,.33,'chemTrail.color.fbo');
  this.polaroid(0.0 ,-1.35, .9, 5,.33,'farjan.color.fbo');

  // top center
  this.polaroid(0.0 ,-.22, .95, -1,.25,'chemTrail.color.fbo');
  this.polaroid(0.0 ,-.25, .7, 2,.25,'chemTrail.color.fbo');
  this.polaroid(0.0 ,.0, .95 , -4,.25,'chemTrail.color.fbo');
  this.polaroid(0.0 ,.0, .7, 1,.25,'chemTrail.color.fbo');

  // right top corner
  this.polaroid(0.0 ,1.37, .7, 5,.75,'chemTrail.color.fbo');
  this.polaroid(0.0 ,1.0, .55, 5,.28,'chemTrail.color.fbo');

  // right center

  this.polaroid(0.0 ,.9, -.2, 90,.28,'chemTrail.color.fbo');

  // right bottom corner
  this.polaroid(0.0 ,1.55, -.7, -3,.25,'chemTrail.color.fbo');
  this.polaroid(0.0 ,1.56, -1., 1,.28,'chemTrail.color.fbo');
  this.polaroid(0.0 ,1.25, -.9, -2,.45,'chemTrail.color.fbo');

  // bottom center

  this.polaroid(0.0 ,.2, -.9, -85,.45,'chemTrail.color.fbo');

}

Demo.prototype.polaroid = function (startTime, x, y, zAngle, scale, imageName)
{


  this.loader.addAnimation([
    {
      start: startTime,
      material: {
        map: imageName
      },
      object: {
        name: 'sceneInvestigationBoard/polaroid.obj'
      },
      color: [{r:.25,g:.25,b:.25}],
      position: [
        {
          x: x,
          y: y,
          z: 0
        }
      ],
      angle: [
        {
          degreesZ: zAngle,
          degreesY: 180
        }
      ],
      scale: [{ uniform3d: scale }]
    }
  ]);
}



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

Demo.prototype.sceneFarjan = function () 
{
  this.loader.setScene('farjan');
  this.loader.addAnimation({fbo:{name:'farjan',action:'begin',storeDepth:false}});

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
          name: 'images/tex_waves.png'
        },
        perspective: '2d',
        position: [
          {
            x: ()=>Math.sin(getSceneTimeFromStart()*2.5)*.05+.3,
            y: ()=>Math.sin(getSceneTimeFromStart()*1.5)*.07-.15,
            z: 0
          }
        ],  
        scale: [{ uniform2d: 1.9 }],
        color: [{
          r: 0.35, g: .35, "b": 0.75
      }]
      }
    ]);

    this.loader.addAnimation([
      {
        image: {
          name: 'images/tex_waves.png'
        },
        perspective: '2d',
        position: [
          {
            x: ()=>Math.sin(getSceneTimeFromStart()*2)*.05+.25,
            y: ()=>Math.sin(getSceneTimeFromStart())*.05-.25,
            z: 0
          }
        ],  
        scale: [{ uniform2d: 1.9 }],
        color: [{
          r: 0.5, g: .5, "b": 1.0
      }]
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


  this.loader.addAnimation({fbo:{name:'farjan',action:'unbind'}});
}