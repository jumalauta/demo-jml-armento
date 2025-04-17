
Demo.prototype.sceneCulturalMatrix = function () 
{
  this.loader.setScene('culturalMatrix');
  
  const timeStep = 0.2;

  const matrixNumbers =
  [
    [3,1],[0,7],[0,3],
    [0,8],[2,0],[2,5],
    [2,9],[0,8],[2,5]
  ];
  
  let matrixPositions =
  [
    [-1,-1],[0,-1],[1,-1],
    [-1, 0],[0, 0],[1, 0],
    [-1, 1],[0, 1],[1, 1]
  ]


  this.loader.addAnimation({fbo:{name:'culturalMatrix',action:'begin',storeDepth:false}});

  this.loader.addAnimation([
    {
      id:'matrixParent',
      object: null,
      position: [
        {
          x: 0,
          y: 0,
          z: 0
        }
      ],
      scale: [{ uniform2d: ()=>1.0+.05*Math.sin(2.4*getSceneTimeFromStart()) }],
    }
  ]);

  this.loader.addAnimation([
    {
      id:'matrixParent2',
      object: null,
      position: [
        {
          x: 0,
          y: 0,
          z: 0
        }
      ],
      scale: [{ uniform2d: ()=>1.1-.05*Math.sin(2.4*getSceneTimeFromStart()) }],
    }
  ]);

    this.loader.addAnimation({
        "light": {
            "type": "Directional",
            "properties": { "intensity": 3.85 },
            "castShadow": false
        }
        ,position:[{x:0,y:0,z:5}]
    });    
    
    let nextTimeStep = 0.0;
    let prevTime = 1000.0;
    this.loader.addAnimation({
        runPreFunction: ()=>
            {
                if (prevTime > getSceneTimeFromStart())
                    nextTimeStep = getSceneTimeFromStart()+timeStep;

                if (getSceneTimeFromStart() > nextTimeStep)
                {
                    matrixPositions = shuffleArray(matrixPositions);
                    nextTimeStep = getSceneTimeFromStart()+timeStep;
                }

                prevTime = getSceneTimeFromStart();
            }
    })

    const size = .5;  
    for(let i=0; i<matrixNumbers.length;i++)
    {
        let red = 1.0;
        let green = 1.0;
        let blue = 1.0;
        if(i>5)
        {
            green = 0.0;
            blue = 0.0;
        }
        else
        {
            red = 0.0;
        }
        for(let k=0; k<2;k++)
        {
            this.loader.addAnimation([{
                parent: 'matrixParent',
                image: {
                    name: 'images/bitfont_'+matrixNumbers[i][k]+'.png'
                },
                perspective: '3d',
                position: [
                    {
                    x: ()=>matrixPositions[i][0]*size+k*.23 -.1,
                    y: ()=>matrixPositions[i][1]*size +.25,
                    z: 0
                    }
                ], 
                color: [{r:red,g:green,b:blue}],
                scale: [{ uniform2d: 1.5 }],
                }
            ]);
        }
    }

    this.loader.addAnimation([{
        text:{string:'\[',name:"multiSceneEffects/monoSpace.ttf"
        },
        parent: 'matrixParent2',
        perspective:"3d", 
        color:[{"r":1.0,"g":1.0,"b":1.0}],
        position:[{x:-.85, y:.25}],
        scale: [{ x: 8.0, y: 14 }],
        // angle:[{degreesZ:zAngle+Math.random()}]
      }]);

      this.loader.addAnimation([{
        text:{string:'\]',name:"multiSceneEffects/monoSpace.ttf"
        },
        parent: 'matrixParent2',
        perspective:"3d", 
        color:[{"r":1.0,"g":1.0,"b":1.0}],
        position:[{x:.85, y:.25}],
        scale: [{ x: 8.0, y: 14 }],
        // angle:[{degreesZ:zAngle+Math.random()}]
      }]);

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
        scale: [{ uniform2d: .9 }],
    }
    ]);



    this.loader.addAnimation({fbo:{name:'culturalMatrix',action:'unbind'}});
}

function shuffleArray (arr)
{
    let j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = arr[index];
        arr[index] = arr[j];
        arr[j] = x;
    }
    return arr;        
}

