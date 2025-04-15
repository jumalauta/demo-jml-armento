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
          {"name":"MAX_DIST","type":"float","value":[200.0]},
          {"name":"MAX_STEPS","type":"float","value":[100.0]},
          {"name":"inCamPos","type":"vec3","value":[localCamPos]},
          {"name":"camDirection","type":"vec3","value":[localCamDir]},
          {"name":"camNear","type":"mat4","value":[.05]},
          {"name":"camFar","type":"mat4","value":[1000]},
          {"name":"camFov","type":"mat4","value":[camFov]},
          {"name":"effectType","type":"int","value":[0]},
          {"name":"objPos1Mul","type":"vec4","value": [()=>Sync.get('mrna:objPos1X'),()=>Sync.get('mrna:objPos1Y'),()=>Sync.get('mrna:objPos1Z'),()=>Sync.get('mrna:obj1Size')]},
          {"name":"objPos2Mul","type":"vec4","value": [()=>Sync.get('mrna:objPos2X'),()=>Sync.get('mrna:objPos2Y'),()=>Sync.get('mrna:objPos2Z'),()=>Sync.get('mrna:obj2Size')]},
          {"name":"objPos3Mul","type":"vec4","value": [()=>Sync.get('mrna:objPos3X'),()=>Sync.get('mrna:objPos3Y'),()=>Sync.get('mrna:objPos3Z'),()=>Sync.get('mrna:obj3Size')]},
          {"name":"objPos4Mul","type":"vec4","value": [()=>Sync.get('mrna:objPos4X'),()=>Sync.get('mrna:objPos4Y'),()=>Sync.get('mrna:objPos4Z'),()=>Sync.get('mrna:obj4Size')]},
          {"name":"objSmooth", "type":"vec3","value": [()=>Sync.get('mrna:smooth1'),()=>Sync.get('mrna:smooth2'),()=>Sync.get('mrna:smooth3')]},
        ]
      }
  });
  const pistonPercent = 0.1; 
  this.loader.addAnimation([
    {
      image: {
        name: 'images/syringe_piston.png'
      },
      perspective: '2d',
      angle: [
        {

          degreesZ: ()=>-61.1
        }
      ], 
      position: [
        {
          x: () => 0.74 - (0.74-0.58)*Sync.get('mrna:pistonPercent'),
          y: () => -2.35 + (2.35-1.83)*Sync.get('mrna:pistonPercent'),
          z: 0
        }
      ],  
      scale: [{ uniform2d: 5.5 }],
    }
  ]);

  this.loader.addAnimation([
    {
      image: {
        name: 'images/syringe.png'
      },
      perspective: '2d',
      angle: [
        {

          degreesZ: ()=>-15
        }
      ], 
      position: [
        {
          x: 0.04,
          y: -0.03,
          z: 0
        }
      ],  
      scale: [{ uniform2d: 1.1 }],
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
      scale: [{ uniform2d: 0.9 }],
    }
  ]);

  this.loader.addAnimation({fbo:{name:'mrna',action:'unbind'}});
}
