Demo.prototype.sceneDeepState = function () 
{
  this.loader.setScene('deepState');
  this.loader.addAnimation({fbo:{name:'deepState',action:'begin',storeDepth:false}});

    this.loader.addAnimation({
      "light": {
          "type": "Directional",
          "properties": { "intensity": 3.85 },
          "castShadow": false
      }
      ,position:[{x:0,y:0,z:5}]
    });    



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
        depthWrite: false,
        blending: 'NormalBlending'
      },
      "shader":{
        "name":["multiSceneEffects/rayMarcher.vs","multiSceneEffects/rayMarcher.fs"],
        "variable":
        [          
          {"name":"MAX_STEPS","type":"float","value":[150.0]},
          {"name":"MAX_DIST","type":"float","value":[40.0]},
          {"name":"inCamPos","type":"vec3","value":[localCamPos]},
          {"name":"camDirection","type":"vec3","value":[localCamDir]},
          {"name":"camNear","type":"mat4","value":[.05]},
          {"name":"camFar","type":"mat4","value":[1000]},
          {"name":"camFov","type":"mat4","value":[camFov]},
          {"name":"effectType","type":"int","value":[1]}
        ]
      }
  });

  const logoAlpha = 0.45;
  this.loader.addAnimation(
    {
      image: {
        name: 'images/logo_assembly.png'
      },
      position: [
        {
          x: 0,
          y: 0,
        }
      ],  

      scale: [{ uniform2d: 0.15 }],
      color:[{a:()=>Sync.get('Misc:Logo')}]
    }
  );

  this.loader.addAnimation(
    {
      image: {
        name: 'images/logo_revision_part_2.png'
      },
      position: [
        {
          x: 0,
          y: 0,
        }
      ],  

      scale: [{ uniform2d: 0.18 }],
      color:[{a:()=>1-Sync.get('Misc:Logo')}],
      angle: [{degreesZ: ()=>getSceneTimeFromStart()*50.0 }],
    }
  );

  this.loader.addAnimation(
    {
      image: {
        name: 'images/logo_fist.png'
      },
      position: [
        {
          x: 0,
          y: 0,
        }
      ],  

      scale: [{ uniform2d: 0.15 }],
      color:[{a:()=>1-Sync.get('Misc:Logo')}]
    }
  );

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

  const fragShaderSuffix = `
  vec2 coord=vMapUv.xy;
  coord.t=coord.t+fakeTime;
  gl_FragColor = texture2D(map, coord);
  float x = mod((vMapUv.y)*1.0,0.1);
  if (x>0.05){
   x = 0.1-x;
  }
  gl_FragColor.rgb*=min(0.7+x/0.05*0.3*1.0, 1.0);
`;

  this.loader.addAnimation([
    {
      object: {
        name: '3d_models/meter.obj'
      },
      textureProperties: [{ wrapS: 'RepeatWrapping', wrapT: 'RepeatWrapping'}],
      position: [
        {
          x: -0.8, 
          y: -1.225,
          z: 0
        }
      ],
      angle: [
        {
          degreesX: 90,
        }
      ],
      scale: [{ uniform3d: 0.2, z:0.2 }],
      shader:{
        fragmentShaderPrefix:`
          uniform float fakeTime;
        `,
        fragmentShaderSuffix: fragShaderSuffix,
        variable: [
          { name: 'fakeTime', value: [()=>Sync.get('Misc:Digit3')] }
        ]
      } 
    }
  ]);

  this.loader.addAnimation([
    {
      object: {
        name: '3d_models/meter.obj'
      },
      textureProperties: [{ wrapS: 'RepeatWrapping', wrapT: 'RepeatWrapping'}],
      position: [
        {
          x: -0.4, 
          y: -1.225,
          z: 0
        }
      ],
      angle: [
        {
          degreesX: 90,
        }
      ],
      scale: [{ uniform3d: 0.2, z:0.2 }],
      shader:{
        fragmentShaderPrefix:`
          uniform float fakeTime;
        `,
        fragmentShaderSuffix: fragShaderSuffix,
        variable: [
          { name: 'fakeTime', value: [()=>Sync.get('Misc:Digit2')] }
        ]
      } 
    }
  ]);

  this.loader.addAnimation([
    {
      object: {
        name: '3d_models/meter.obj'
      },
      textureProperties: [{ wrapS: 'RepeatWrapping', wrapT: 'RepeatWrapping'}],
      position: [
        {
          x: 0.0, 
          y: -1.225,
          z: 0
        }
      ],
      angle: [
        {
          degreesX: 90,
        }
      ],
      scale: [{ uniform3d: 0.2, z:0.2 }],
      shader:{
        fragmentShaderPrefix:`
          uniform float fakeTime;
        `,
        fragmentShaderSuffix:fragShaderSuffix,
        variable: [
          { name: 'fakeTime', value: [()=>Sync.get('Misc:Digit1')] }
        ]
      } 
    }
  ]);

  this.loader.addAnimation([
    {
      object: {
        name: '3d_models/meter.obj'
      },
      textureProperties: [{ wrapS: 'RepeatWrapping', wrapT: 'RepeatWrapping'}],
      position: [
        {
          x: 0.4, 
          y: -1.225,
          z: 0
        }
      ],
      angle: [
        {
          degreesX: 90,
        }
      ],
      scale: [{ uniform3d: 0.2, z:0.2 }],
      shader:{
        fragmentShaderPrefix:`
          uniform float fakeTime;
        `,
        fragmentShaderSuffix:fragShaderSuffix,
        variable: [
          { name: 'fakeTime', value: [()=>Sync.get('Misc:Digit0')] }
        ]
      } 
    }
  ]);

  this.loader.addAnimation([{
    text:{string:`ft`,name:"multiSceneEffects/monoSpace.ttf"},
    perspective:"2d",
    position:[{x:0.15, y:-.38}],
    scale: [{ uniform3d: 4.0 }],
    color:[{r:0,g:0,b:0}]
}]);

  this.loader.addAnimation({fbo:{name:'deepState',action:'unbind'}});
}
