
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
    [7,8,1,9,4,11,18,10,13,14,18,18,2,5,12,15,16,17,3],
    [9,15,3,12,11,14,6,17,5,4,7,1,16,13,2,8,10],
    [4,2,11,13,5,14,17,16,7,9,3,1,20,19,8,15,18,10,6,21,12],
    [16,10,9,4,13,12,6,5,1,7,15,3,17,11,14,8,2,17]
  ];
  const inStrings=
  [
    `COMMIE_PIT_SUCTIONS`,
    'POLITICS_DOWNTIME',     
    'PROPHETIC_AGNOSTICISM',
    `NEPOTIC_DOOM_TIMES`
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
                    y: 0.2,
                    z: 0
                    }
                    ,{duration:anagramStartTimes[k]+i*.05},
                    {
                        x: -1+charWidth*i,
                        y: 0.2,
                        z: 0
                    }
                    ,{duration:.05},
                        {
                            x: -1+charWidth*animPosition,
                            y: 0.0,
                            z: 0
                        }
                ],
                "scale":[{"uniform3d":1.3}]
            }]);
        }
    this.loader.addAnimation({fbo:{name:'anagram'+k,action:'unbind'}});
    }

}
