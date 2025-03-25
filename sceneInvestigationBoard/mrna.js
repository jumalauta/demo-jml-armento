Demo.prototype.sceneMrna = function () 
{
  this.loader.setScene('mrna');
  this.loader.addAnimation({fbo:{name:'mrna',action:'begin',storeDepth:false}});

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

    const deg2rad = 0.01745329251;
    const localCamPos = [0.0, 0.0, 0.0];
    const localCamDir = [0.0, 0.0, 0.1];
    const camFov = 75.0 * deg2rad;
    this.loader.addAnimation({
      image: ['_embedded/defaultWhite.png'],
      perspective: '3d',
      position:[{"x":0.0,"y":0.0,"z":0.0}],
      scale: [{ uniform2d: 1.0}],        
      "material":{
        depthTest: true,
        depthWrite: true,
        blending: 'NormalBlending'
      },
      "shader":{
        "name":["multiSceneEffects/rayMarcher.vs","multiSceneEffects/rayMarcher.fs"],
        "variable":
        [          
          {"name":"MAX_STEPS","type":"float","value":[100.0]},
          {"name":"inCamPos","type":"vec3","value":[localCamPos]},
          {"name":"camDirection","type":"vec3","value":[localCamDir]},
          {"name":"camNear","type":"mat4","value":[.05]},
          {"name":"camFar","type":"mat4","value":[1000]},
          {"name":"camFov","type":"mat4","value":[camFov]},
          {"name":"carrotPosZ","type":"float","value":[0]}
        ]
      }
  });

  this.loader.addAnimation({fbo:{name:'mrna',action:'unbind'}});
}
