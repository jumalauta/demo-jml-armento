
Demo.prototype.sceneCulturalMatrix = function () 
{
  this.loader.setScene('culturalMatrix');
  
  const matrixNumbers =
  [
    [3,1],[0,7],[0,3],
    [0,8],[2,0],[2,5],
    [2,9],[0,8],[2,5]
  ];
  
  let matrixPositions =
  {
    
  }
  let matrixImages = [];
      
  for(let i=0;i<matrixNumbers.length;i++)
  {
    for(let k=0;k<matrixNumbers[i].length;k++)
    {

    }
  }
    let inString = inStrings[k];
    this.loader.addAnimation({fbo:{name:'culturalMatrix',action:'begin',storeDepth:false}});

        this.loader.addAnimation({
        "light": {
            "type": "Directional",
            "properties": { "intensity": 5.85 },
            "castShadow": false
        }
        ,position:[{x:0,y:0,z:5}]
        });    


        const charWidth = 0.1;
        for(let i=0;i<inString.length;i++)
        {
            let outString = inString.charAt(i);

            let animPosition = scrambleOrder[k][i];
            this.loader.addAnimation([{
                "text":{"string":(outString),
                "name":"multiSceneEffects/monoSpace.ttf",
                "parameters": {depth:0.2,bevelEnabled:false,bevelThickness:0.02,bevelSize:0.00,bevelSegments:0}
                },
                angle: [
                    {
                    degreesZ: 0
                    } 
                ],
                "perspective":"3d",
                "color":[{"r":1.0,"g":1.0,"b":1.0}],

                position: [
                    {
                    x: -1+charWidth*i,
                    y: .4-anagramHeights[k][i]*0.2,
                    z: 0
                    }
                    ,{duration:anagramStartTimes[k]+i*.05},
                    {
                        x: -1+charWidth*i,
                        y: .6-anagramHeights[k][i]*0.2,
                        z: 0
                    }
                    ,{duration:.05},
                        {
                            x: -.5+charWidth*animPosition,
                            y: .2-scrambleHeights[k][i]*0.2,
                            z: 0
                        }
                ],
                "scale":[{"uniform3d":1.3}]
            }]);
        }
    this.loader.addAnimation({fbo:{name:'culturalMatrix',action:'unbind'}});
    
    }


