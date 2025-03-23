Demo.prototype.sceneAsmA = function () 
{
  this.loader.setScene('AsmA');
  this.loader.addAnimation({fbo:{name:'AsmA',action:'begin',storeDepth:false}});

    this.loader.addAnimation({
      "light": {
          "type": "Directional",
          "properties": { "intensity": 3.85 },
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
            x: 0,
            y: 0,
            z: 0
          }
        ],  
        scale: [{ uniform2d: 1.9 }],
      }
    ]);

    this.loader.addAnimation([
      {
        object: {
          name: '3d_models/asm_A.obj'
        },
        position: [
          {
            x: 0,
            y: .2,
            z: 0
          }
        ],
        angle: [
          {
            degreesX: 90,
            degreesZ: () => 55*getSceneTimeFromStart(),
          }
        ],
        scale: [{ uniform3d: ()=>(1.0-Sync.get('Misc:AsmAGlitch'))*4.5 }]
      } 
    ]);

    this.loader.addAnimation([
      {
        object: {
          name: '3d_models/obj_allseeing.obj'
        },
        position: [
          {
            x: 0, 
            y: .35,
            z: 0
          }
        ],
        angle: [
          {
            degreesY: () => 55*getSceneTimeFromStart(),
          }
        ],
        scale: [{ uniform3d: ()=>(Sync.get('Misc:AsmAGlitch'))*.65  }]
      }
    ]);

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

  this.loader.addAnimation({fbo:{name:'AsmA',action:'unbind'}});
}
