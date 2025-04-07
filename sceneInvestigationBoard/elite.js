Demo.prototype.sceneElite = function ()
{
  this.loader.setScene('elite'); 
  this.loader.addAnimation({fbo:{name:'elite',action:'begin',storeDepth:false}});
  
  let startTime = 0;
  let durationTime = 40;
  let texture = 'multiSceneEffects/tex_basicParticle.png';
  let particleSize = 0.1;
  let parentId = null;

  const meshVertexCount = 240;
  let particles = new Array(meshVertexCount);
  const deg2rad = 0.01745329251;
  const localCamPos = [0.0, 0.0, 0.0];
  const localCamDir = [0.0, 0.0, 0.1];
  const camFov = 75.0 * deg2rad;
  this.loader.addAnimation({
    image: ['_embedded/defaultWhite.png'],
    perspective: '3d',
    position:[{"x":0.0,"y":0.0,"z":1.0}],
    scale: [{ uniform2d: 1.0}],

    "material":{
      depthTest: false,
      depthWrite: false,
      blending: 'NormalBlending'
    },
    "shader":{
      "name":["multiSceneEffects/rayMarcher.vs","multiSceneEffects/rayMarcher.fs"],
      "variable":
      [          
        {"name":"MAX_STEPS","type":"float","value":[45.0]},
        {"name":"MAX_DIST","type":"float","value":[30.0]},
        {"name":"inCamPos","type":"vec3","value":[localCamPos]},
        {"name":"camDirection","type":"vec3","value":[localCamDir]},
        {"name":"camNear","type":"mat4","value":[.05]},
        {"name":"camFar","type":"mat4","value":[100]},
        {"name":"camFov","type":"mat4","value":[camFov]},
        {"name":"effectType","type":"int","value":[2]}
      ]
    }
});

  this.loader.addAnimation(
    {
      end:-1,
      object: {
        name: '3d_models/crown.obj'
      },
      position: [
        {
          x: 0.0,
          y: 0.0,
          z: 0
        }
      ],

      scale: [{ uniform3d: 0.4 }],
      objectOnLoadFunction:(meshData) => {
        if (!meshData.mesh[0].position) {
          throw new Error("Mesh position not found");
        }
        if (meshVertexCount != meshData.mesh[0].position.count/3) {
         // throw new Error("Mesh vertex count mismatch");
        }

        for (let i = 0; i < particles.length; i++) {
          const x = meshData.mesh[0].position.array[i*3+0];
          const y = meshData.mesh[0].position.array[i*3+1];
          const z = meshData.mesh[0].position.array[i*3+2];
          particles[i] = {
            "x": x,
            "y": y,
            "z": z,
          };
        }
      }
      //color: [{r:.45,g:.0,b:.0}],
    }
  );

  this.loader.addAnimation({
    "start":startTime, "duration":durationTime,
    "image": texture,
    textureProperties: [{},{minFilter: 'NearestMipmapNearestFilter', magFilter: 'LinearFilter'}],
    "parent":parentId,
    position: [
      {
        x: 0.0,
        y: -.1,
        z: 0
      }
    ],
    angle:[{             
        degreesY:()=>getSceneTimeFromStart()*60,              
        degreesZ:()=>Math.sin(getSceneTimeFromStart()*2)*15,      
      }],
    scale: [{ uniform3d: 0.7 }],
    "perspective": "3d",
    "billboard": true,
    "additive": true,
    "material":{
      "blending": 'AdditiveBlending',
      "transparent":true,
      "depthWrite":false,

    },
    color: [{r:1,g:1,b:0}],
    //"scale":[{"uniform3d":.1}],
    "instancer": {
      "count": particles.length,
      "runInstanceFunction": (properties) => {

        const i = properties.index;
        const count = properties.count;
        const time = properties.time;
        let object = properties.object;
        let color = properties.color;

        const scale = particleSize;
        object.scale.x = scale;
        object.scale.y = scale;
        object.scale.z = scale;   

        const particle = particles[i];

        object.position.x = particle.x;
        object.position.y = particle.y;
        object.position.z = particle.z;
      }
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

  this.loader.addAnimation({fbo:{name:'elite',action:'unbind'}});
}