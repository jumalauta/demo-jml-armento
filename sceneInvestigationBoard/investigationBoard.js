
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
  this.photo15x10(0.0 ,-1.25, .9, 5,.33,'farjan.color.fbo');

  // top center
  this.polaroid(0.0 ,-.22, .95, -1,.25,'chemTrail.color.fbo');
  this.polaroid(0.0 ,-.25, .7, 2,.25,'chemTrail.color.fbo');
  this.polaroid(0.0 ,.0, .95 , -4,.25,'chemTrail.color.fbo');
  this.polaroid(0.0 ,.0, .7, 1,.25,'chemTrail.color.fbo');
  this.textPaper(0,-1.25, 1.05, 15, .25, .88,.12,'BIG FÄRJAN IS HIDING THE TRUTH');

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
Demo.prototype.textPaper = function (startTime, x, y, zAngle, scale, paperScaleX, paperScaleY, textString)
{
  this.loader.addAnimation([{
    text:{string:textString,name:"multiSceneEffects/handWriting.ttf"
    },
    perspective:"3d", 
    color:[{"r":0.0,"g":0.0,"b":0.0}],
    position:[{x:x, y:y}],
    scale: [{ uniform3d: scale }],
    angle:[{degreesZ:zAngle+Math.random()}]
    }]);

  this.loader.addAnimation([
    {

      object: {
        name: 'sceneInvestigationBoard/paper.obj'
      },
      position: [
        {
          x: x,
          y: y,
          z: 0
        }
      ],
      angle: [
        {
          degreesX: 90,
          degreesY: zAngle,
        }
      ],
      color: [{r:.45,g:.45,b:.45}],
      scale: [{ x: scale*paperScaleX, z: scale*paperScaleY }]
    }
  ]);
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

Demo.prototype.photo15x10 = function (startTime, x, y, zAngle, scale, imageName)
{


  this.loader.addAnimation([
    {
      start: startTime,
      material: {
        map: imageName
      },
      object: {
        name: 'sceneInvestigationBoard/15X10.obj'
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
