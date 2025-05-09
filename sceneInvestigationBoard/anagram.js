
Demo.prototype.sceneAnagram = function () 
{
  this.loader.setScene('anagram');
  
  const anagramStartTimes=
  [ 
    196.0*window.tick+4.5*window.pattern,   
    220.0*window.tick+4.5*window.pattern,    
    244.0*window.tick+4.5*window.pattern,
    268.0*window.tick+4.5*window.pattern
  ];
  const scrambleOrder=
  [ 
    [3+3,1+3,10,4,4+3,5,6,5+3,6+3,2+3,0+3,11,2,12,8,7,1,9,7+3,3],       
    [1,2,0+4.5,3,7,5,12,1+4.5,4+4.5,6,9,10,11,4,3+4.5,8,2+4.5],
    [4,10,2+5,9,6,1+5,1,12,3+5,2,0+5,11,8,7,3,5],
    [11,1+5,4,10,8,7,1,0+5,2,3+5,3,6,9,2+5,5,12]    
  ];
  const scrambleHeights =
  [   
    [0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1],
    [1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0],
    [1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1],    
    [1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1]
  ];

  const anagramHeights =
  [ 
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],      
    [-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],    
    [-1,-1,-1,-1,-1,-1,-1,0,0,0,0,1,1,1,1,1],
  ];

  const anagramOffsets =
  [3,-1,3,-1];

  const anagramLineOffsets =
  [-10,-4,-8,-5];
  
  const inStrings=
  [
    'PROPHETICAGNOSTICISM',
    `COMMIESUCTIONPITS`,         
    'POLITICSDOWNTIME',         
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

      this.loader.addAnimation([
        {
          image: {
            name: 'images/sky.png'
          },
          perspective: '2d',
          position: [
            {
              x: ()=>.01*Math.cos(2*getSceneTimeFromStart()),
              y: ()=>.01*Math.sin(getSceneTimeFromStart()),
              z: 0
            }
          ],
          color:[{r:0.7,g:0.7,b:0.7}],
          scale: [{ uniform2d: 1.9 }],
        }
      ]);

      if(k==1)
        {
          this.loader.addAnimation([
            {
              object: {
                name: '3d_models/airhorn.obj'
              },
              position: [
                {
                  x: 0, 
                  y: -.1,
                  z: -3
                }
              ],
              angle: [
                {
                  degreesX: () => 3*Math.sin(3*getSceneTimeFromStart()),
                  degreesY: () => -155*getSceneTimeFromStart(),
                }
              ],
              scale: [{ uniform3d: ()=>Sync.get('Misc:Airhorn') }]
            }
          ]);
        }

      if(k==2)
      {
        this.loader.addAnimation([
          {
            object: {
              name: '3d_models/vhs.obj'
            },
            position: [
              {
                x: 0, 
                y: 0,
                z: -3
              }
            ],
            angle: [
              {
                degreesZ: () => 54+78*getSceneTimeFromStart(),
                degreesY: () => 155*getSceneTimeFromStart(),
              }
            ],
            scale: [{ uniform3d: .07  }]
          }
        ]);
      }

      if(k==0)
        {
          this.loader.addAnimation([
            {
              object: {
                name: '3d_models/squareCompass.obj'
              },
              position: [
                {
                  x: 0, 
                  y: 0,
                  z: -3
                }
              ],
              angle: [
                {
                  degreesX: 90,
                  degreesZ: () => -145*getSceneTimeFromStart(),
                }
              ],
              scale: [{ uniform3d: 1.1  }]
            }
          ]);
        }

      if(k==3)
        {
          this.loader.addAnimation([{
            "text":{"string":'N',
            "name":"multiSceneEffects/monoSpace.ttf",
            "parameters": {depth:0.2,bevelEnabled:false,bevelThickness:0.02,bevelSize:0.00,bevelSegments:0}
            },
            angle: [
                {
                degreesZ: 0
                } 
            ],
            "perspective":"3d",
            "color":[{"r":0.0,"g":0.0,"b":0.0,"a":()=>Sync.get('Misc:DuckEvil')}],

            position: [
                {
                x: .41-0.02,
                y: -.49-0.02,
                z: -0.02
                }
            ],
            "scale":[{"uniform3d":2.1}]
        }]);
        this.loader.addAnimation([{
          "text":{"string":'N',
          "name":"multiSceneEffects/monoSpace.ttf",
          "parameters": {depth:0.2,bevelEnabled:false,bevelThickness:0.02,bevelSize:0.00,bevelSegments:0}
          },
          angle: [
              {
              degreesZ: 0
              } 
          ],
          "perspective":"3d",
          "color":[{"r":1.0,"g":0.0,"b":0.0,"a":()=>Sync.get('Misc:DuckEvil')}],

          position: [
              {
              x: .41,
              y: -.49,
              z: 0
              }
          ],
          "scale":[{"uniform3d":2.1}]
      }]);

          this.loader.addAnimation([
            {
              object: {
                name: '3d_models/duck.obj'
              },
              position: [
                {
                  x: 0, 
                  y: 0,
                  z: -3
                }
              ],
              angle: [
                {
                  degreesX: () => 15*Math.sin(15+3*getSceneTimeFromStart()),
                  degreesY: () => 95-155*getSceneTimeFromStart(),
                }
              ],
              scale: [{ uniform3d: .05}]
            }
          ]);

          this.loader.addAnimation([
            {
              object: {
                name: '3d_models/duckEvil.obj'
              },
              position: [
                {
                  x: 0, 
                  y: 0,
                  z: -3
                }
              ],
              angle: [
                {
                  degreesX: () => 15*Math.sin(15+3*getSceneTimeFromStart()),
                  degreesY: () => 95-155*getSceneTimeFromStart(),
                }
              ],
              scale: [{ uniform3d: ()=>.05*Sync.get('Misc:DuckEvil')}]
            }
          ]);

        }
      
      const shadeDiff = 0.02;
      const charWidth = 0.155;
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
              "color":[{"r":0.0,"g":0.0,"b":0.0}],

              position: [
                  {
                  x: -1+charWidth*i + anagramLineOffsets[k]*charWidth*anagramHeights[k][i] + anagramOffsets[k]*charWidth,
                  y: .6-anagramHeights[k][i]*0.2,
                  z: 0
                  }
                  ,{duration:anagramStartTimes[k]+i*.05},
                  {
                      x: -1+charWidth*i + anagramLineOffsets[k]*charWidth*anagramHeights[k][i]+ anagramOffsets[k]*charWidth,
                      y: .8-anagramHeights[k][i]*0.2,
                      z: 0
                  }
                  ,{duration:.05},
                      {
                          x: -1+charWidth*animPosition,
                          y: -.5-scrambleHeights[k][i]*0.2,
                          z: 0
                      }
              ],
              "scale":[{"uniform3d":2.1}]
          }]);
          
          let r = 1.0;
          let g = 1.0;
          let b = 1.0;
          if(k==3 && (i == 1 || i == 7 || i == 9 || i == 13))
          {
            g = ()=>1.0-Sync.get('Misc:DuckEvil');
            b = ()=>1.0-Sync.get('Misc:DuckEvil');
          }
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
            "color":[{"r":r,"g":g,"b":b}],

            position: [
                {
                x: shadeDiff+-1+charWidth*i + anagramLineOffsets[k]*charWidth*anagramHeights[k][i] + anagramOffsets[k]*charWidth,
                y: shadeDiff+.6-anagramHeights[k][i]*0.2,
                z: shadeDiff
                }
                ,{duration:anagramStartTimes[k]+i*.05},
                {
                    x: shadeDiff+-1+charWidth*i + anagramLineOffsets[k]*charWidth*anagramHeights[k][i]+ anagramOffsets[k]*charWidth,
                    y: shadeDiff+.8-anagramHeights[k][i]*0.2,
                    z: shadeDiff
                }
                ,{duration:.05},
                    {
                        x: shadeDiff-1+charWidth*animPosition,
                        y: shadeDiff-.5-scrambleHeights[k][i]*0.2,
                        z: shadeDiff
                    }
            ],
            "scale":[{"uniform3d":2.1}]
        }]);

        }


      this.loader.addAnimation([
        {
          image: {
            name: 'sceneInvestigationBoard/tex_antipolaroid.png'
          },
          perspective: '2d',
          position: [
            {
              x: 0,
              y: 0,
              z: 0
            }
          ],  
          scale: [{ x: .93, y: .922 }],
        }
      ]);        
    this.loader.addAnimation({fbo:{name:'anagram'+k,action:'unbind'}});
    }

}
