
Demo.prototype.sceneAnagram = function () 
{
  this.loader.setScene('anagram');
  
  const anagramStartTimes=
  [
    196.0*window.tick,
    220.0*window.tick,
    244.0*window.tick,
    268.0*window.tick
  ];
  const scrambleOrder=
  [
    [1,2,0,3,7,5,12,1,4,6,9,10,11,4,3,8,2],
    [4,10,2,9,6,1,1,12,3,2,0,11,8,7,3,5],
    [3,1,10,4,4,5,6,5,6,2,0,11,2,12,8,7,1,9,7,3],
    [11,1,4,10,8,7,1,0,2,3,3,6,9,2,5,12]
  ];
  const anagramHeights =
  [
    [0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2],
    [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,2],
  ];
  const scrambleHeights =
  [
    [1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0],
    [1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1],
    [0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1]
  ];
  const inStrings=
  [
    `COMMIESUCTIONPITS`,     
    'POLITICSDOWNTIME',     
    'PROPHETICAGNOSTICISM',
    `NEPOTICDOOMTIMES`
  ];
  
  
      
  for(let k=0;k<4;k++)
  {
    let inString = inStrings[k];
    this.loader.addAnimation({fbo:{name:'anagram'+k,action:'begin',storeDepth:false}});

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
    this.loader.addAnimation({fbo:{name:'anagram'+k,action:'unbind'}});
    }

}
