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
    "camera": "cam2"
    ,"position":[{"x":4,"y":3,"z":5.5}]
    ,"lookAt":[{"x":2.0,"y":0.0,"z":0.0}]
    ,"up":[{"x":0,"y":1,"z":0}]
    ,"perspective":[{"fov":75,"aspect":16/9,"near":.05,"far":1000}]
    ,"distYawPitch":[0,0,0]
    ,"instableTimer":[0.0,0.0,0.0,0.0,0.0]
  });

    this.loader.addAnimation({
      "light": {
          "type": "Directional",
          "properties": { "intensity": 5.85 },
          "castShadow": true
      }
      ,position:[{x:0.5,y:3,z:2}]
    });    

    this.loader.addAnimation({image: '_embedded/defaultWhite.png', color: [{r:.6,g:.3,b:.1}]});

    const s = 0.5;

    const boardShader = {
      // extend generated material shader
      fragmentShaderPrefix:`
uniform float time;

void drawBoard()
{
    vec2 coord=vMapUv;
    //fragColor = texture(map, vMapUv);
    //coord = mod(coord + vec2(time), vec2(1.0));

    vec2 gridCoord = floor(coord * 80.0 / 10.0);
    if (mod(gridCoord.x + gridCoord.y, 2.0) == 0.0) {
        gl_FragColor.rgb *= 0.0;
        //discard;
    }
}
      `,
      fragmentShaderSuffix:`
        drawBoard();
      `
    };

    this.loader.addAnimation({
      object: '_embedded/defaultWhite.png',
      shape: { type: 'PLANE', width: s*8, height: s*8 },
      shader:{...boardShader},
      position: [
        {
          x: s*8/2.-s/2,
          y: 0,
          z: s*8/2-s/2,
        }
      ],
      angle: [{degreesX:-90}],
    });

    let pieces = [];

    const colors = [{r:1,g:1,b:1},{r:0.45,g:0,b:0}];
    pieces.push({
      x:0,
      z:0,
      name: 'tower',
      player: 0,
    });
    pieces.push({
      x:1,
      z:0,
      name: 'knight',
      player: 0,
    });
    pieces.push({
      x:2,
      z:0,
      name: 'bishop',
      player: 0,
    });
    pieces.push({
      x:3,
      z:0,
      name: 'queen',
      player: 0,
    });
    pieces.push({
      x:4,
      z:0,
      name: 'king',
      player: 0,
    });
    pieces.push({
      x:5,
      z:0,
      name: 'bishop',
      player: 0,
    });
    pieces.push({
      x:6,
      z:0,
      name: 'knight',
      player: 0,
    });
    pieces.push({
      x:7,
      z:0,
      name: 'tower',
      player: 0,
    });

    for(let i = 0; i < 8; i++){
      pieces.push({
        x:i,
        z:1,
        name: 'pawn',
        player: 0,
      });
    };

    pieces.push({
      x:0,
      z:7,
      name: 'tower',
      player: 1,
    });
    pieces.push({
      x:1,
      z:7,
      name: 'knight',
      player: 1,
    });
    pieces.push({
      x:2,
      z:7,
      name: 'bishop',
      player: 1,
    });
    pieces.push({
      x:3,
      z:7,
      name: 'queen',
      player: 1,
    });
    pieces.push({
      x:4,
      z:7,
      name: 'king',
      player: 1,
    });
    pieces.push({
      x:5,
      z:7,
      name: 'bishop',
      player: 1,
    });
    pieces.push({
      x:6,
      z:7,
      name: 'knight',
      player: 1,
    });
    pieces.push({
      x:7,
      z:7,
      name: 'tower',
      player: 1,
    });

    for(let i = 0; i < 8; i++){
      pieces.push({
        x:i,
        z:6,
        name: 'pawn',
        player: 1,
      });
    };

    for(let i = 0; i < pieces.length; i++){
      const piece = pieces[i];
      const pieceId = `${piece.player}_${piece.name}_${piece.x}`;
      let position = [
        {
          x: s*piece.x,
          y: 0.0,
          z: s*piece.z
        }
      ];
      if (pieceId == '0_pawn_4') {
        position.push({
          //e2 -> e4
          duration: 1,
          x: s*piece.x,
          y: 0.0,
          z: s*(piece.z + 2)
        });
      }

      if (pieceId == '1_pawn_4') {
        position.push({
          //e7 -> e5
          start: 1.5,
          duration: 1,
          x: s*piece.x,
          y: 0.0,
          z: s*(piece.z - 2)
        });
      }

      this.loader.addAnimation(
        {
          id: pieceId,
          object: {
            name: `3d_models/chess_${piece.name}.obj`
          },
          position: position,
          scale: [{ uniform3d: 0.25 }],
          color: [colors[piece.player]],
          angle:[{degreesY:piece.player*180+(piece.name=='knight'?90:0)}],
        }
      );

      if (pieceId.startsWith('0_pawn')) {
        this.loader.addAnimation(
          {
            parent: pieceId,
            object: {
              name: '3d_models/obj_ak.obj'
            },
            position: [
              {
                x: 0.31,
                y: 0.7,
                z: 0
              }
            ],
            angle: [{degreesY:90}],
            scale: [
              { uniform3d: 0.0 },
              { duration: 2.5},
              { duration: 0.5, uniform2d: 0.4 },
            ]
          } 
        );
      }    
  }

  /*this.loader.addAnimation({
        text:{string:"MEDIA",name:"multiSceneEffects/handWriting.ttf"
        },
        perspective:"2d", 
        color:[{"r":1.0,"g":0.0,"b":0.0}],
        position:[{x:0, y:0}],
        scale: [{ uniform3d: 1.0 }],
    });*/
    
    /*this.loader.addAnimation(
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
    );*/

    this.loader.addAnimation([
      {
        image: {
          name: 'sceneInvestigationBoard/tex_15X10.png'
        },
        perspective: '2d',
        position: [
          {
            x: 0,
            y: 0,
            z: 0
          }
        ],  
        scale: [{ uniform2d: .855 }],
        color: [{ r: 1.0, g: 1.0, "b": 1.0 }]
      }]);

  this.loader.addAnimation({fbo:{name:'chess',action:'unbind'}});
}
