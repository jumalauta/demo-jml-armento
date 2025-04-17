Demo.prototype.sceneAliens = function () 
{
  this.loader.setScene('aliens');
  this.loader.addAnimation({fbo:{name:'aliens',action:'begin',storeDepth:false}});

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
          name: 'images/aliens_mika.png'
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

    this.loader.addAnimation([{
      text:{string:'ALIENS',name:"multiSceneEffects/monoSpace.ttf"
      },
      perspective:"2d", 
      color:[{"r":0.0,"g":0.0,"b":0.0}],
      position:[{x:0, y:()=>.012*Math.sin(6*getSceneTimeFromStart())-.37}],
      scale: [{ uniform3d: 4.0 }],
      angle:[{degreesZ:()=>1*Math.sin(3*getSceneTimeFromStart())}]
    }]);

  this.loader.addAnimation({fbo:{name:'aliens',action:'unbind'}});
}
