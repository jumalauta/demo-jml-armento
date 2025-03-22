
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


    this.addEffectStarfield(0,240, 100, "multiSceneEffects/tex_basicParticle.png", 450,450,500, 5.5, null, 0,0,0);

    this.loader.addAnimation([
      {
        object: {
          name: '3d_models/ufo.obj'
        },
        position: [
          {
            x: 0,
            y: () => .8+0.1*Math.sin(1.75*getSceneTimeFromStart()),
            z: 0
          }
        ],
        angle: [
          {
            degreesY:  () => 100*getSceneTimeFromStart(),
            degreesX: () => 5*Math.sin(2*getSceneTimeFromStart()),
            degreesZ: () => 180 -2*Math.sin(1.5*getSceneTimeFromStart()),
 
          }
        ],
        scale: [{ uniform3d: 0.3 }]
      }
    ]);

    this.loader.addAnimation([{
        "text":{"string":`MFX - WIDE LOAD - GORBAT SOFT - UNIQUE - MATT CURRENT - GRAYMARCHERS - BYTERAPERS - FUTURE CREW`,
        "name":"multiSceneEffects/handWriting.ttf",
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
              y: 0.75,
              z: 0
            }
          ],
        "scale":[{"uniform3d":2.0}]
          ,shader:{
            // heart beat
            vertexShaderPrefix:`
              uniform float time;
              uniform float beater;
            `,
            vertexShaderSuffix:`
              float lenght = 250.;
              float amp = 4.;
              float t = clamp(sin(time * 3.28 + 0.5) * amp, -amp/2., 0.);
              vec3 pos = position;
              float size = 0.2;
              pos.y = pos.y + .25*sin(time+pos.x);
              pos.x = mod(pos.x-time*20., lenght);
              pos.z = pos.z;


              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            `
          } 
      }]);

/*
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
*/
  this.loader.addAnimation({fbo:{name:'greetings',action:'unbind'}});
}
