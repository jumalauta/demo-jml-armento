function rotateY(point, angle) {
  const radians = angle * (Math.PI / 180);
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);

  const x = point.x * cos - point.z * sin;
  const y = point.y;
  const z = point.x * sin + point.z * cos;

  return { x, y, z };
}


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
          const scatter = 0.04;
          particles[i] = {
            "x": x+Utils.random()*scatter-scatter/2.0,
            "y": y+Utils.random()*scatter-scatter/2.0,
            "z": z+Utils.random()*scatter-scatter/2.0,
            "scale": Utils.random()*0.7+0.3,
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
        //degreesY:()=>getSceneTimeFromStart()*60,              
        degreesZ:()=>Math.sin(getSceneTimeFromStart()*1.5)*15,      
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

        const particle = particles[i];

        let scale = particleSize*particle.scale*((Math.sin(getSceneTimeFromStart()*4.0+particle.x+particle.y+particle.z)*0.5+0.5)*0.5+0.5);

        const rotatedPosition = rotateY(particle, -getSceneTimeFromStart()*40);
        object.position.x = rotatedPosition.x;
        object.position.y = rotatedPosition.y;
        object.position.z = rotatedPosition.z;

        if (object.position.x > -0.6 && object.position.x < -0.0 && object.position.z > 0.0) {
          let xAsPercent = Math.abs(object.position.x+0.0)/0.6;
          xAsPercent = xAsPercent < 0.5 ? xAsPercent * 2.0 : xAsPercent * 2.0 - 1.0;

          scale *= 2.5*(xAsPercent);
          color.r = 1.0;
          color.g = 1.0;
          color.b = xAsPercent;
        } else {
          color.r = 1.0;
          color.g = 1.0;
          color.b = 0.0;
        }

        object.scale.x = scale;
        object.scale.y = scale;
        object.scale.z = scale;
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