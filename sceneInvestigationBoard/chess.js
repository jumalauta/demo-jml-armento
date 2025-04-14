Demo.prototype.sceneChess = function () 
{
  this.loader.setScene('chess'); 
  this.loader.addAnimation({fbo:{name:'chess',action:'begin',storeDepth:false}});
  this.loader.addAnimation({
    "camera": "cam2"
    ,"position":[{"x":() => Sync.get(`Chess:camPosX`)||4,"y":() => Sync.get(`Chess:camPosY`)||1,"z":() => Sync.get(`Chess:camPosZ`)||1.5}]
    ,"lookAt":[{"x":() => Sync.get(`Chess:camLookX`)||2,"y":() => Sync.get(`Chess:camLookY`),"z":() => Sync.get(`Chess:camLookZ`)}]
    ,"up":[{"x":0,"y":1,"z":0}]
    ,"perspective":[{"fov":75,"aspect":16/9,"near":.05,"far":1000}]
    ,"distYawPitch":[0,0,0]
    ,"instableTimer":[0.0,0.0,0.0,0.0,0.0]
  });

    this.loader.addAnimation({
      "light": {
          "type": "Directional",
          "properties": { "intensity": 4.0 },
          "castShadow": true
      }
      ,position:[{x:0.5,y:3,z:2}]
    });    

    this.loader.addAnimation({image: '_embedded/defaultWhite.png', color: [{r:.6,g:.3,b:.1}]});

    const s = 0.5;

    const boardShader = {
      // extend generated material shader
      fragmentShaderPrefix:`
uniform float bloodTime;
uniform float bloodRadius;
//uniform vec4 color;// = vec4(1);

float drawBlood()
{
  

  vec2 uv = vMapUv.xy;
  vec2 position = vec2(0.5,-0.5);
  float radius = bloodRadius;

	if (radius <= 0.)
	{
		return 0.;
	}

  float t = (sin(bloodTime*0.3)+1.)/2.*10.+35.;

  vec2 circleDeform = vec2(0.005,0.005);
	vec2 deformUv = uv;
	deformUv.x += sin(uv.y*t+t*4.)*circleDeform.x+sin(uv.x*t+t*3.)*circleDeform.x;
	deformUv.y += cos(uv.x*t+t*4.)*circleDeform.y;

	float distance = length(position - deformUv);
	float circleDistance = distance - radius;
	if (circleDistance < radius)
	{
    return 1.0-min(distance/1.0,1.0);
	}

	return 0.;
}

void drawBoard()
{
    vec2 coord=vMapUv;
    //fragColor = texture(map, vMapUv);
    //coord = mod(coord + vec2(time), vec2(1.0));

    float blood = drawBlood();
    if (blood > 0.0) {
        gl_FragColor.rgb *= vec3(0.3, 0.1, 0.1);
    } else {
      gl_FragColor.rgba *= vec4(0.9);
    }
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
      shader:{...boardShader,
        variable:
        [
          {name:"bloodRadius","value":[()=>Sync.get('Chess:BloodRadius')]},
          {name:"bloodTime","value":[()=>Sync.get('Chess:BloodTime')]},
        ]
      },
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
      let angle = [{degreesY:piece.player*(176 + Utils.random() * 8)+(piece.name=='knight'?90:0)}];
      let position = [
        {
          x: s*piece.x,
          y: 0.0,
          z: s*piece.z
        }
      ];
      if (pieceId == '0_pawn_4' || pieceId == '1_pawn_4') {
        position = [
          {
            x: () => s*(piece.x + Sync.get(`Chess:${pieceId}_x`)),
            y: () => s*Sync.get(`Chess:${pieceId}_y`),
            z: () => s*(piece.z + Sync.get(`Chess:${pieceId}_z`))
          }
        ];
        angle[0].degreesX = () => Sync.get(`Chess:${pieceId}_degreesX`);
      }

      if (pieceId.startsWith('0_pawn')) {
        const degY = angle[0].degreesY;
        const sinCosFunc = Utils.random() < 0.2 ? Math.sin : Math.cos;
        const shootAngle = Utils.random() * 3;
        const shootPos = Utils.random() * Math.PI * 2;
        angle[0].degreesY = () => Sync.get(`Chess:Shoot`)*sinCosFunc((shootPos + getSceneTimeFromStart()*0.5)*(10.0-degY))*(4+shootAngle) + degY;
      }

      if (pieceId.startsWith('1_') && pieceId != '1_pawn_4') {
        const degY = angle[0].degreesY;
        const sinCosFunc = Utils.random() < 0.5 ? Math.sin : Math.cos;
        const deadX = 90;
        const deadY = -10 + Utils.random() * 20;
        const deadZ = -50 + Utils.random() * 100;
        angle[0].degreesX = () => Sync.get(`Chess:Shoot`)*sinCosFunc((piece.x + piece.z + getSceneTimeFromStart()*40.0))*(1-Sync.get(`Chess:DeathFall`)) + Sync.get(`Chess:DeathFall`)*deadX;
        angle[0].degreesZ = () => Sync.get(`Chess:DeathFall`)*deadZ;
        angle[0].degreesY = () => Sync.get(`Chess:Shoot`)*sinCosFunc((piece.x + piece.z + getSceneTimeFromStart()*40.0))*(1-Sync.get(`Chess:DeathFall`)) + degY  + Sync.get(`Chess:DeathFall`)*deadY;
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
          angle: angle,
        }
      );

      if (pieceId.startsWith('0_pawn') && pieceId != '0_pawn_4') {
        const akId = `${pieceId}_ak`;
        const posZ = -0.03 + Utils.random() * 0.06;
        const posY = 0.67 + Utils.random() * 0.06;
        const degreesY = 86 + Utils.random() * 8;
        const degreesX = -5 + Utils.random() * 10;
        this.loader.addAnimation(
          {
            parent: pieceId,
            id: akId,
            object: {
              name: '3d_models/obj_ak.obj'
            },
            position: [
              {
                x: (0.30 + Utils.random() * 0.01) * (Utils.random() < 0.3 ? -1 : 1),
                y: () => (Sync.get('Chess:Shoot'))*Math.sin(posZ+getSceneTimeFromStart()*60.0)*0.01 + posY,
                z: () => (Sync.get('Chess:Shoot'))*Math.sin(posY+getSceneTimeFromStart()*30.0)*0.015 + posZ,
              }
            ],
            angle: [{
              degreesY:() => Sync.get('Chess:Shoot')*Math.sin(posZ+getSceneTimeFromStart()*60.0)*2 + degreesY,
              degreesX:() => Sync.get('Chess:Shoot')*Math.sin(posY+getSceneTimeFromStart()*30.0)*2 + degreesX
            }],
            scale: [
              { uniform3d: () => Sync.get(`Chess:ak47_scale`) },
            ]
          } 
        );

        const muzzleAlpha = ()=>{
          //return 1.0;
          const ak47BurstRate = 100./60.*15.;
          const value = Sync.get('Chess:Shoot')*((Math.sin(ak47BurstRate * (getSceneTimeFromStart() + piece.x + piece.z + 10.0))+1)/2);
          return value<0.95?0.0:1.0;
          //return 0.0;
        };
        const muzzleAdditive = true;

        this.loader.addAnimation({
          "parent":akId
         ,"image":{
            "name":"images/muzzle_flame.png"
          }
          ,"additive":muzzleAdditive
          ,"perspective":"3d"
          ,"position":[{
            "x":-3.25,
            "y":0.5,
            "z":0
          }]
          ,"color":[{"a":muzzleAlpha}]
          ,"angle":[{
            "degreesY":-90,
            }]
          ,"scale":[{"uniform3d":()=>2.0+Math.sin(i*getSceneTimeFromStart()*20.0)*0.1}]
          ,"shader":{"name":"sceneInvestigationBoard/muzzle.fs"
            ,"variable": [
              {"name":"strength","value":[1.0]},
              {"name":"iteration","value":[Utils.random()*30.0]}
            ]
            }
        });  
        this.loader.addAnimation({
          "parent":akId
         ,"image":{
            "name":"images/tex_muzzle.png"
          }
          ,"additive":muzzleAdditive
          ,"perspective":"3d"
          ,"position":[{
            "x":-4.3,
            "y":0.4,
            "z":0
          }]
          ,"color":[{"a":muzzleAlpha}]
          ,"angle":[{
            "degreesY":0,
            }]
          ,"scale":[{"uniform3d":()=>1.0+Math.sin(i*getSceneTimeFromStart()*20.0)*0.1}]
          ,"shader":{"name":"sceneInvestigationBoard/muzzle.fs"
            ,"variable": [
              {"name":"strength","value":[1.0]},
              {"name":"iteration","value":[Utils.random()*30.0]}
            ]
            }
        });  
        this.loader.addAnimation({
          "parent":akId
         ,"image":{
            "name":"images/tex_muzzle.png"
          }
          ,"additive":muzzleAdditive
          ,"perspective":"3d"
          ,"position":[{
            "x":-4.3,
            "y":0.4,
            "z":0
          }]
          ,"color":[{"a":muzzleAlpha}]
          ,"angle":[{
            "degreesX":-90,
            }]
          ,"scale":[{"uniform3d":()=>1.0+Math.sin(i*getSceneTimeFromStart()*20.0)*0.1}]
          ,"shader":{"name":"sceneInvestigationBoard/muzzle.fs"
            ,"variable": [
              {"name":"strength","value":[1.0]},
              {"name":"iteration","value":[Utils.random()*30.0]}
            ]
            }
        });  
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

    /*this.loader.addAnimation([
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
      }]);*/

  this.loader.addAnimation({fbo:{name:'chess',action:'unbind'}});
}
