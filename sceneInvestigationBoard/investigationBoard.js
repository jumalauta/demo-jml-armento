
Demo.prototype.sceneInvestigationBoard = function () {
  this.chemTrail(0,0,0,0);
  
  this.setScene('investigationBoard');

  this.loader.addAnimation({image: '_embedded/defaultWhite.png', color: [{r:.6,g:.3,b:.1}]});
  this.loader.addAnimation({image:'chemTrail.color.fbo'});
  this.polaroid(0,0,0,'chemTrail');
}

Demo.prototype.polaroid = function (startTime, x, y, imageName)
{
  this.loader.addAnimation([
    {
      start: startTime,
      object: {
        name: 'sceneInvestigationBoard/polaroid.obj'
      },
      image: ['chemTrail.color.fbo'],
      position: [
        {
          x: x,
          y: y,
          z: 0
        }
      ],
      angle: [
        {
          degreesZ: () => 25*Math.sin(getSceneTimeFromStart())
        }
      ],
      scale: [{ uniform3d: 0.5 }]
    }
  ]);
}
Demo.prototype.chemTrail = function (start, duration, x, y)
{
  this.loader.addAnimation({fbo:{name:'chemTrail',action:'begin',storeDepth:false}});

    this.loader.addAnimation({image: 'multiSceneEffects/lut.png', color: [{r:0,g:.5,b:1}]});

  this.loader.addAnimation({fbo:{name:'chemTrail',action:'unbind'}});
}

