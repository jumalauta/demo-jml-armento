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
  const steps = 1000;

  let shapePoints = definition.shapePoints || [];

    for (let i = 0; i < shapePoints.length; i++) {
      this.addPin(shapePoints[i].x, shapePoints[i].y, shapePoints[i].pinConfig);
    }

  let newShapePoints = [];
  newShapePoints.push(shapePoints[0]);
  for (let i = 1; i < shapePoints.length; i++) {
    const p1 = shapePoints[i-1];
    const p2 = shapePoints[i];
    const xLength = Math.abs(p1.x - p2.x);
    const yLength = Math.abs(p1.y - p2.y);
    let xBias = 0.0;
    let yBias = 0.0;
    const centerPos = p1.centerPos || {x:0, y:0};

    const startPos = {
      x: p1.x < p2.x ? 0 : 1,
      y: p1.y < p2.y ? 0 : 1,
    };
    if (startPos.x === 0 && startPos.y === 0) {
      xBias = 0.0;
      yBias = 0.0;
    } else if (startPos.x === 0 && startPos.y === 1) {
      xBias = -0.1;
      yBias = -0.1;
    } else if (startPos.x === 1 && startPos.y === 0) {
      xBias = -0.1;
      yBias = -0.3;
    } else if (startPos.x === 1 && startPos.y === 1) {
      xBias = -0.1;
      yBias = -0.5;
    } else {
      xBias = 0.0;
      yBias = 0.0;
    }
    xBias = 0.0;
    yBias = 0.0;

    const pmidpoint = {
      x:(p1.x + p2.x) / 2 + xLength*xBias*0.5 + centerPos.x,
      y:(p1.y + p2.y) / 2 + yLength*yBias*0.5 + centerPos.y,
    };
    newShapePoints.push(pmidpoint);
    newShapePoints.push(p2);
  }

  shapePoints = newShapePoints;

  const processedShapePoints = [];
  for (let i = 0; i < shapePoints.length; i++) {
    const p1 = shapePoints[i];
    processedShapePoints.push([p1.x, p1.y]);
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
            points:processedShapePoints,
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
              points:processedShapePoints,
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
