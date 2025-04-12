Demo.prototype.sceneMilitary = function () 
{
  this.loader.setScene('military');
  this.loader.addAnimation({fbo:{name:'military',action:'begin',storeDepth:false}});

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
          name: 'images/nukebg.png'
        },
        perspective: '2d',
        position: [
          {
            x: 0,
            y: 0,
            z: 0
          }
        ],  
        scale: [{ uniform2d: ()=>Math.sin(1.5*getSceneTimeFromStart())*.1+1.95 }],
      }
    ]);

    this.loader.addAnimation([
      {
        object: {
          name: '3d_models/propagandaAK.obj'
        },
        position: [
          {
            x: 0,
            y: .2,
            z: -1
          }
        ],
        angle: [
          {
            degreesX: () => 55*getSceneTimeFromStart(),
            degreesZ: () => 55*getSceneTimeFromStart()
          }
        ],
        scale: [{ uniform3d: 0.5 }]
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

  this.loader.addAnimation({fbo:{name:'military',action:'unbind'}});
}
