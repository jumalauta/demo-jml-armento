
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
  this.photo15x10(0.0 ,0, 0, -3,.5,'endZoomer.color.fbo');

  // left bottom corner
  this.polaroid(0.0 ,-1.65, -.88, -1.5,.43,'chemTrail.color.fbo');
  this.polaroid(0.0 ,-1.3, -.9, 2,.38,'flatTorus.color.fbo');
  this.textPaper(0, -1.35, -1.05, 3, .25, .5,.12,'TORUS IS FLAT!');
  this.textPaper(0, -1.21, -1.085, -2, .25, .4,.12,'RESEARCH IT!');
  this.polaroid(0.0 ,-.95, -.91, -1,.35,'chemTrail.color.fbo');
  this.polaroid(0.0 ,-.60, -.97, 15,.37,'chemTrail.color.fbo');
  
  // left center
  // Cam 1 photo 3
  this.polaroid(0.0 ,-1.15, 0, -2,.55,'AsmA.color.fbo',{visible:false});
 
  // left top corner
  this.polaroid(0.0 ,-1.65, 1.0, -10,.33,'chemTrail.color.fbo',{visible:false});
  this.photo15x10(0.0 ,-1.25, .9, 5,.33,'farjan.color.fbo',{visible:false});
  this.textPaper(0,-1.25, 1.05, 15, .25, .88,.12,'BIG FÄRJAN IS HIDING THE TRUTH',{visible:false});
  
  // top center
  this.polaroid(0.0 ,-.22, .95, -1,.25,'chemTrail.color.fbo',{visible:false});
  this.polaroid(0.0 ,-.25, .7, 2,.25,'chemTrail.color.fbo');
  this.polaroid(0.0 ,.0, .95 , -4,.25,'chemTrail.color.fbo');
  this.polaroid(0.0 ,.0, .7, 1,.25,'chemTrail.color.fbo');

  // right top corner
  this.polaroid(0.0 ,1.37, .7, 5,.75,'greetings.color.fbo');
  this.animatedPolaroid(91.0 ,1.0, .65, 5,.28,'aliens.color.fbo', 5.0, 4.5 , 3.55, 5);

  // right center
  this.polaroid(0.0 ,1.5, -.2, 90,.28,'introPolaroid.color.fbo',{visible:false});
    // linedraw 1, photo 2
  this.polaroid(0.0 ,0.9, -.15, 2,.28,'introPolaroid.color.fbo',{visible:false});

  // right bottom corner
  this.polaroid(0.0 ,1.55, -.7, -3,.25,'chemTrail.color.fbo');
  this.polaroid(0.0 ,1.56, -1., 1,.28,'chemTrail.color.fbo');
  this.polaroid(0.0 ,1.25, -.9, -2,.45,'chemTrail.color.fbo');

  // bottom center
    // linedraw 1, photo 3
  this.polaroid(0.0 ,.2, -.9, -85,.45,'chemTrail.color.fbo',{visible:false});

  // cam 2
  // cam 2
  this.polaroid(0.0 ,-.8, .95 , 5,.23,'introPolaroid.color.fbo',{visible:false});
  this.polaroid(0.0 ,-.65, .375 , 5,.23,'introPolaroid.color.fbo',{visible:false});
  this.polaroid(0.0 ,-.65 , -.375 , 5,.23,'introPolaroid.color.fbo',{visible:false});
  this.polaroid(0.0 ,-1.5, -.375 , 5,.23,'introPolaroid.color.fbo',{visible:false});
  
  // upper left corner thread
  this.addRedThread({
    shapePoints: [
      [-1.69, 1.17],
      [-1.27, 1.07],
      [-0.8, 1.07],
      [-0.65, 0.49],
      [0.015, 0.03], // Finland
      [1.5, -0.09],
    ]
  });

  // upper-central starting cam path thread
  this.addRedThread({
    shapePoints: [
      [-.25, 1.08],
      [0.9, -0.005],
      [0.2, -0.71],
      [-0.64, -0.253],
      [-1.17, 0.28],
    ]
  });

  // upper central-left starting cam path thread
  this.addRedThread({
    shapePoints: [
      [-0.83, 1.05],
      [-0.67, 0.49],
      [-0.69, -0.253],
      [-1.5, -0.258],
    ]
  });

}

Demo.prototype.textPaper = function (startTime, x, y, zAngle, scale, paperScaleX, paperScaleY, textString, pinConfig)
{
  this.addPin(x, y, pinConfig);

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

Demo.prototype.polaroid = function (startTime, x, y, zAngle, scale, imageName, pinConfig)
{
  let pinX = x;
  let pinY = y+scale/2.0;
  this.addPin(pinX, pinY, pinConfig);
  
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

Demo.prototype.animatedPolaroid = function (startTime, x, y, zAngle, scale, imageName, animDuration, xStart,yStart, zStart, pinConfig)
{
  let pinX = x;
  let pinY = y+scale/2.0;
  this.addPin(pinX, pinY, {x:0, y:0, startTime:startTime+0.2, animDuration:animDuration, zStart:zStart, ...pinConfig});

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
          x: xStart,
          y: yStart,
          z: zStart
        },
      {duration:animDuration, x:x,y:y, z:0}],
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

Demo.prototype.photo15x10 = function (startTime, x, y, zAngle, scale, imageName, pinConfig)
{
  let pinX = x;
  let pinY = y+scale/2.0;
  this.addPin(pinX, pinY, pinConfig);

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
