
Demo.prototype.sceneGreetings = function () 
{
  this.loader.setScene('greetings');
  this.loader.addAnimation({fbo:{name:'greetings',action:'begin',storeDepth:false}});

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
      perspective: '3d',
      position: [
        {
          x: ()=>.01*Math.cos(2*getSceneTimeFromStart()),
          y: .5,
          z: -1
        }
      ],
      color:[{r:0.7,g:0.7,b:0.7}],
      scale: [{ uniform2d: 2.5 }],
    }
  ]);

  
  this.loader.addAnimation({
    image: ['images/greets_layer_2.png'],
    perspective: '2d',

    scale: [{ uniform2d: 2.3}],
    textureProperties: [{ wrapS: 'RepeatWrapping', wrapT: 'RepeatWrapping'}],
    position: [{y:-.08}],

    color:[{r:0.1,g:0.1,b:0.1}],
    shader:{
      name:["multiSceneEffects/uvscroll.fs"],
      variable:
      [          
        {name:"fakeTime","type":"float","value":[()=>getSceneTimeFromStart()*.05]}        
      ]
    }
  });

  this.loader.addAnimation({
    image: ['images/greets_layer_2.png'],
    perspective: '2d',

    scale: [{ uniform2d: 2.3}],
    textureProperties: [{ wrapS: 'RepeatWrapping', wrapT: 'RepeatWrapping'}],
    position: [{z:-0.2, y:-.17}],

    color:[{r:0.2,g:0.2,b:0.2}],
    shader:{
      name:["multiSceneEffects/uvscroll.fs"],
      variable:
      [          
        {name:"fakeTime","type":"float","value":[()=>getSceneTimeFromStart()*.15]}        
      ]
    }
  });

  this.loader.addAnimation({
    image: ['images/greets_layer_2.png'],
    perspective: '2d',

    scale: [{ uniform2d: 2.3}],
    textureProperties: [{ wrapS: 'RepeatWrapping', wrapT: 'RepeatWrapping'}],
    position: [{z:-0.3, y:-.4}],

    color:[{r:0.35,g:0.35,b:0.35}],
    shader:{
      name:["multiSceneEffects/uvscroll.fs"],
      variable:
      [          
        {name:"fakeTime","type":"float","value":[()=>getSceneTimeFromStart()*.2]}        
      ]
    }
  });


  this.loader.addAnimation([
    {
      id:'ufo',
      object: null,
      position: [
        {
          x: 0,
          y: () => .8+0.1*Math.sin(1.75*getSceneTimeFromStart()),
          z: 0
        }
      ],
      angle: [
        {
         // degreesY: () => 100*getSceneTimeFromStart(),
          degreesZ: () => 7*Math.sin(2*getSceneTimeFromStart()),
         // degreesZ: () => 180 -2*Math.sin(1.5*getSceneTimeFromStart()),

        }
      ]      
    }
  ]);

    this.loader.addAnimation([
      {
        parent: 'ufo',
        object: {
          name: '3d_models/ufo.obj'
        },
        angle: [
          {
            degreesY:  () => 100*getSceneTimeFromStart(),
          //  degreesX: () => 5*Math.sin(2*getSceneTimeFromStart()),
            degreesX: () => 185 -8*Math.sin(3*getSceneTimeFromStart()),
 
          }
        ],
        scale: [{ uniform3d: 0.3 }]
      }
    ]);

    const greets = `BRAINSTORM - COMPUTER CLUB MAGNETISM - DARKLITE - DEKADENCE - MFX - WIDE LOAD - GORBAT SOFT - POO-BRAIN - RBBS - SPACEPIGS - UNIQUE - U+1F35E - MATT CURRENT - GRAYMARCHERS - BYTERAPERS - FUTURE CREW - CR!SP - `;
    const greetsLen = greets.length*(350./97.);

    this.loader.addAnimation([{
        parent:'ufo',
        "text":{"string":greets,
        "name":"multiSceneEffects/monoSpace.ttf",
        "parameters": {depth:0.2,bevelEnabled:true,bevelThickness:0.02,bevelSize:0.02,bevelSegments:6}
        },
        angle: [
            {
              degreesZ: -90
            }
          ],
        "perspective":"3d",
        "color":[{"r":()=>Math.random()*4,"g":()=>Math.random()*4,"b":()=>Math.random()*4}],

        position: [
            {
              x: 0,
              y: -0.05,
              z: 0
            }
          ],
        "scale":[{"uniform3d":2.0}]
          ,shader:{
            vertexShaderPrefix:`
              uniform float time;
              uniform float beater;
              uniform float lenght;
            `,
            vertexShaderSuffix:`
              float amp = 4.;
              float t = clamp(sin(time * 3.28 + 0.5) * amp, -amp/2., 0.);
              vec3 pos = position;
              float size = 0.2;
              pos.y = pos.y + .25*sin(time+pos.x);
              pos.x = mod(pos.x-time*20., lenght);
              pos.z = pos.z;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            `,
            variable: [
              { name: 'lenght', value: [greetsLen] }
            ]
          } 
      }]);
      
      this.loader.addAnimation({
        image: ['images/greets_layer_2.png'],
        perspective: '3d',
        scale: [{ uniform2d: 2.3}],
        textureProperties: [{ wrapS: 'RepeatWrapping', wrapT: 'RepeatWrapping'}],
        position: [{z:0.1, y:-1.7}],
        color:[{r:0.5,g:0.5,b:0.5}],
        material:{
          transparent:true,
        },

        shader:{
          name:["multiSceneEffects/uvscroll.fs"],
          variable:
          [          
            {name:"fakeTime","type":"float","value":[()=>getSceneTimeFromStart()*.25]}        
          ]
        }
      });
      
      this.loader.addAnimation([
        {
          image: {
            name: 'sceneInvestigationBoard/tex_antipolaroid.png'
          },
          perspective: '2d',
          material:{
            transparent:true,
          },
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



  this.loader.addAnimation({fbo:{name:'greetings',action:'unbind'}});
}
