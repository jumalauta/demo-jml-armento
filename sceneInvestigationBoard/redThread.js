Demo.prototype.addPin = function (x,y, pinConf) {
  let pinConfig = pinConf || {x:0, y:0};
  if (pinConfig.visible !== false) {
    const pinX = x + pinConfig.x;
    const pinY = y + pinConfig.y;
    let animationDefinition = {
        object: {
        name: `3d_models/pin${Math.ceil(Utils.random()*4)}.obj`
        },
        position: [
        {
            x: pinX - 0.001 + Utils.random()*0.002,
            y: pinY - 0.001 + Utils.random()*0.002,
            z: -0.003 + Utils.random()*0.006
        }
        ],
        angle: [
        {
            degreesX: 87+Utils.random()*6,
            degreesY: -3+Utils.random()*6
        }
        ],
        scale: [{ uniform3d: 0.05 }]
    };

    if (pinConfig.startTime) {
        animationDefinition.start = pinConfig.startTime;
        animationDefinition.position.push({...animationDefinition.position[0]});
        animationDefinition.position[0].z = pinConfig.zStart;
        animationDefinition.position[1].duration = pinConfig.animDuration;
    }

    this.loader.addAnimation(
        animationDefinition
    );    
  }
};

Demo.prototype.addRedThread = function (definition) {
  const steps = 100;
  const drawDuration = 3;

  const shapePoints = definition.shapePoints || [];
  const shapePointSize = 100;
  /*for (let i = 0; i < shapePointSize; i++) {
    const angleRad = (i / shapePointSize) * 2 * Math.PI;
    shapePoints.push([
      Math.cos(angleRad) * 0.4,
      Math.sin(angleRad) * 0.4
    ]);
  }*/

  for (let i = 0; i < shapePoints.length; i++) {
    this.addPin(shapePoints[i][0], shapePoints[i][1]);
  }

  //const shapeSize = 0.002;
  const shapePrecision = 2;
    let shapeSize = 0.001;
    this.loader.addAnimation({
        object:{name:null,properties:{castShadow:false, receiveShadow:true}},
        material:{
          transparent:true,
          frustumCulled:false,
          //map: 'sceneInvestigationBoard/tex_thread.png',
        },
          shape:{type:'SPLINE',
            precision:shapePrecision,
            points:shapePoints,
            extrudeSettings:{steps:steps},
            function:(shape) => {
              const shapePrecision = shape.precision;
              const pointArray = [];
              for (let i = 0; i < shapePrecision; i++) {
                const angleRad = (i / shapePrecision) * 2 * Math.PI;
                pointArray.push([
                  Math.sin(angleRad) * shapeSize,
                  Math.cos(angleRad) * shapeSize
                ]);
              }
    
              return pointArray;
            }
          },
        position:[{x:0,y:0,z:shapeSize*(2)}],
        color:[{r:1,g:0,b:0,a:1}],
      });

      shapeSize = 0.002;
      this.loader.addAnimation({
          object:{name:null,properties:{castShadow:false, receiveShadow:false}},
          material:{
            transparent:true,
            frustumCulled:false,
            //map: 'sceneInvestigationBoard/tex_thread.png',
          },
            shape:{type:'SPLINE',
              precision:shapePrecision,
              points:shapePoints,
              extrudeSettings:{steps:steps},
              function:(shape) => {
                const shapePrecision = shape.precision;
                const pointArray = [];
                for (let i = 0; i < shapePrecision; i++) {
                  const angleRad = (i / shapePrecision) * 2 * Math.PI;
                  pointArray.push([
                    Math.sin(angleRad) * shapeSize,
                    Math.cos(angleRad) * shapeSize
                  ]);
                }
      
                return pointArray;
              }
            },
          position:[{x:-shapeSize*(0.5),y:shapeSize*(0.5),z:shapeSize*(0.5)}],
          color:[{r:0,g:0,b:0,a:0.5}],
        });
  };
