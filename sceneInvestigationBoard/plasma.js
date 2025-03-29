
Demo.prototype.scenePlasma = function () 
{
  this.loader.setScene('plasma');
  
    this.loader.addAnimation({fbo:{name:'plasma',action:'begin',storeDepth:false}});
        this.loader.addAnimation({
        "light": {
            "type": "Directional",
            "properties": { "intensity": 5.85 },
            "castShadow": false
        }
        ,position:[{x:0,y:0,z:5}]
        });    

    this.loader.addAnimation({
        image: ['_embedded/defaultWhite.png'],
        perspective: '3d',
        position:[{"x":0.0,"y":0.0,"z":0.0}],
        scale: [{ uniform2d: 1.5}],
        angle: [
            {
              degreesZ: ()=>5*getSceneTimeFromStart(),
            }
          ],
        material:{
          depthTest: true,
          depthWrite: true,
          blending: 'NormalBlending'
        },
        shader:{
          name:["sceneInvestigationBoard/plasma.fs"]
        }
    });
    
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
        scale: [{ uniform2d: 0.9 }],
      }
    ]);
  this.loader.addAnimation({fbo:{name:'plasma',action:'unbind'}});

}
