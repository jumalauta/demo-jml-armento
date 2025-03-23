
Demo.prototype.sceneAnagram = function () 
{
  this.loader.setScene('anagram');
  this.loader.addAnimation({fbo:{name:'anagram',action:'begin',storeDepth:false}});

    this.loader.addAnimation({
      "light": {
          "type": "Directional",
          "properties": { "intensity": 5.85 },
          "castShadow": false
      }
      ,position:[{x:0,y:0,z:5}]
    });    

    const scrambleOrder = [8,1,11,3,7,6,9,15,2,16,13,14,4,5,10,0,17];
    
    this.loader.addAnimation([{
        "text":{"string":(()=>stringScrambler(`NEPOTIC DOOM TIMES`,`DEMO COMPETITIONS`,scrambleOrder,Sync.get('Anagram:FirstPercentage'))),
        "name":"multiSceneEffects/monoSpace.ttf",
        "parameters": {depth:0.2,bevelEnabled:true,bevelThickness:0.02,bevelSize:0.02,bevelSegments:0}
        },
        angle: [
            {
              degreesZ: 0
            } 
          ],
        "perspective":"3d",
        "color":[{"r":()=>Math.random()*4,"g":()=>Math.random()*4,"b":()=>Math.random()*4}],

        position: [
            {
              x: 0,
              y: 0.2,
              z: 0
            }
          ],
        "scale":[{"uniform3d":1.3}]
      }]);
  this.loader.addAnimation({fbo:{name:'anagram',action:'unbind'}});
}

function stringScrambler(firstString, secondString, scrambleOrder, percentage)
{
    let step = 1.0/firstString.length;
    let stepsChanged = percentage/step;
    let outputString = "";
    if(percentage>0)
    {
        let charArray1 = firstString.split("");
        let charArray2 = secondString.split("", stepsChanged);

        for(let i=0;i<stepsChanged;i++)
        {
            charArray1[scrambleOrder[i]] = " ";
        }
        outputString = charArray1.join("") + '\n' + charArray2.join("");
    }
    else outputString = firstString;
    
    return outputString;
}

