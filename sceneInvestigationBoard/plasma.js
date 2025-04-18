
var flashTexts = 0;
var currentFlash = 0; 

Demo.prototype.scenePlasma = function () 
{


  this.loader.setScene('plasma');
  
    this.loader.addAnimation({fbo:{name:'plasma',action:'begin',storeDepth:false}});
        this.loader.addAnimation({
        "light": {
            "type": "Directional",
            "properties": { "intensity": 5.85 },
            "castShadow": false
        }
        ,position:[{x:0,y:0,z:5}]
        });    

    this.loader.addAnimation({
        image: ['_embedded/defaultWhite.png'],
        perspective: '3d',
        position:[{"x":0.0,"y":0.0,"z":0.0}],
        scale: [{ uniform2d: 1.5}],
        angle: [
            {
              degreesZ: ()=>5*getSceneTimeFromStart(),
            }
          ],
        material:{
          depthTest: true,
          depthWrite: true,
          blending: 'NormalBlending'
        },
        shader:{
          name:["sceneInvestigationBoard/plasma.fs"]
        }
    });

    this.flashText('OBEY');
    this.flashText('VOTE');
    this.flashText('BUY');
    this.flashText('PARTY');
    this.flashText('DEMO');

    this.loader.addAnimation({
      runPreFunction: ()=>
          {
             currentFlash=Math.floor(1+Math.random()*flashTexts);

          }
  })

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
        scale: [{ uniform2d: 0.9 }],
      }
    ]);
  this.loader.addAnimation({fbo:{name:'plasma',action:'unbind'}});

}

Demo.prototype.flashText = function (text)
{
  let myFlash = flashTexts;
  this.loader.addAnimation([{
    text:{string:text,name:"multiSceneEffects/monoSpace.ttf"
    },
    perspective:'3d', 
    color:[{"r":()=>Math.random(),"g":()=>Math.random(),"b":()=>Math.random()}],
    position:[{x:0, y:.2}],
    scale: [{ uniform3d: ()=>
      {
        if(currentFlash == myFlash)
        {
          return Math.random()*2.0+3;
        }
        else
        {
          return 0.0;
        }
      }
       }],
    material:{
    // depthTest: !depthSort,
    //  transparent:depthSort,
    }
  }]);
  flashTexts++;
}