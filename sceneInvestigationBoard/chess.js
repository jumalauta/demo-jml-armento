
Demo.prototype.meshAsParticles = function ()
{
  let startTime = 0;
  let durationTime = 40;
  let texture = 'multiSceneEffects/tex_basicParticle.png';
  let particleSize = 0.02;
  let parentId = null;

  const meshVertexCount = 782;
  let particles = new Array(meshVertexCount);

  this.loader.addAnimation(
    {
      end:-1,
      object: {
        name: '3d_models/chess_tower.obj'
      },
      position: [
        {
          x: 0.8,
          y: 0.45,
          z: 0
        }
      ],
      scale: [{ uniform3d: 0.3 }],
      objectOnLoadFunction:(meshData) => {
        if (!meshData.mesh[0].position) {
          throw new Error("Mesh position not found");
        }
        if (meshVertexCount != meshData.mesh[0].position.count/3) {
          throw new Error("Mesh vertex count mismatch");
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
        x: 0.8,
        y: 0.45,
        z: 0
      }
    ],
    scale: [{ uniform3d: 0.3 }],
    "perspective": "3d",
    "billboard": true,
    "additive": true,
    "material":{
      "blending": 'AdditiveBlending',
      "transparent":true,
      "depthWrite":false,

    },
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
}

Demo.prototype.sceneChess = function () 
{
  this.loader.setScene('chess'); 
  this.loader.addAnimation({fbo:{name:'chess',action:'begin',storeDepth:false}});

    this.loader.addAnimation({
      "light": {
          "type": "Directional",
          "properties": { "intensity": 5.85 },
          "castShadow": false
      }
      ,position:[{x:0,y:0,z:5}]
    });    

    this.loader.addAnimation({
      image: '_embedded/defaultWhite.png',
      color: [{r:1.0,g:0.0,b:0.0}],
      shader: {
        name: 'sceneInvestigationBoard/chessBoard.fs'
    }
    });

    this.meshAsParticles();

    /*this.loader.addAnimation(
      {
        object: {
          name: '3d_models/chess_tower.obj'
        },
        position: [
          {
            x: 0.8,
            y: 0.45,
            z: 0
          }
        ],
        scale: [{ uniform3d: 0.3 }],
        //color: [{r:.45,g:.0,b:.0}],
      }
    );*/
    this.loader.addAnimation(
        {
          object: {
            name: '3d_models/chess_queen.obj'
          },
          position: [
            {
              x: 0.0,
              y: 0.45,
              z: 0
            }
          ],
          scale: [{ uniform3d: 0.3 }],
          //color: [{r:.45,g:.0,b:.0}],
        }
      );
      this.loader.addAnimation(
        {
          object: {
            name: '3d_models/chess_king.obj'
          },
          position: [
            {
              x: -0.8,
              y: 0.45,
              z: 0
            }
          ],
          scale: [{ uniform3d: 0.3 }],
          //color: [{r:.45,g:.0,b:.0}],
        }
      );
      this.loader.addAnimation(
        {
          object: {
            name: '3d_models/chess_bishop.obj'
          },
          position: [
            {
              x: -0.8,
              y: -0.6,
              z: 0
            }
          ],
          scale: [{ uniform3d: 0.3 }],
          //color: [{r:.45,g:.0,b:.0}],
        }
      );

      this.loader.addAnimation(
        {
          object: {
            name: '3d_models/chess_knight.obj'
          },
          position: [
            {
              x: -0.0,
              y: -0.6,
              z: 0
            }
          ],
          scale: [{ uniform3d: 0.3 }],
          //color: [{r:.45,g:.0,b:.0}],
          angle:[{degreesY:()=>getSceneTimeFromStart()*100}]
        }
      );


      this.loader.addAnimation(
        {
          object: {
            name: '3d_models/chess_pawn.obj'
          },
          position: [
            {
              x: 0.8,
              y: -0.6,
              z: 0
            }
          ],
          scale: [{ uniform3d: 0.3 }],
          //color: [{r:.45,g:.0,b:.0}],
        }
      );

      /*this.loader.addAnimation({
        text:{string:"MEDIA",name:"multiSceneEffects/handWriting.ttf"
        },
        perspective:"2d", 
        color:[{"r":1.0,"g":0.0,"b":0.0}],
        position:[{x:0, y:0}],
        scale: [{ uniform3d: 1.0 }],
    });*/
    
    this.loader.addAnimation(
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
    );

  this.loader.addAnimation({fbo:{name:'chess',action:'unbind'}});
}
