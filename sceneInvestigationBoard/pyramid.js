Demo.prototype.scenePyramid = function () 
{
  this.loader.setScene('pyramid');
  this.loader.addAnimation({fbo:{name:'pyramid',action:'begin',storeDepth:false}});

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
          name: 'images/dollarbg.png'
        },
        perspective: '2d',
        position: [
          {
            x: 0,
            y: 0,
            z: 0
          }
        ],
        angle:[{                      
          degreesZ:()=>getSceneTimeFromStart()*4,      
        }],
        scale: [{ uniform2d: 1.9 }],
        color: [{
          r: .5, g: .5, b: .5
      }]
      }
    ]);

    this.loader.addAnimation([
      {
        id: 'mainPyramid',
        object: {
          name: '3d_models/pyramidscheme.obj'
        },
        position: [
          {
            x: 0,
            y: 1.5,
            z: -  .5
          }
        ],
        angle: [
          {
            degreesZ: 15  ,
            degreesY: () => - 55*getSceneTimeFromStart(),
          }
        ],
        scale: [{ uniform3d: ()=>Sync.get('Pyramid:MainPyramidScale') }]
      } 
    ]);

  const pyramidX = [-1, -1, 1, 1,
                    -2,0,2,-2,0,2,-2,0,2];
  const pyramidZ = [1, -1, -1, 1,
                    -2,-2,-2,0,0,0,2,2,2];
  const pyramidY = [-1.5,-1.5,-1.5,-1.5,
                    -3,-3,-3,-3,-3,-3,-3,-3,-3]

  for(let i=0;i<13;i++)
  {
    let syncName = 'Pyramid:PyramidScale'+i;
    this.loader.addAnimation([
      {
        parent: 'mainPyramid',
        object: {
          name: '3d_models/pyramidscheme.obj'
        },
        scale: [{ "uniform3d": () => Sync.get(syncName)}],
        position: [
          {
            x: pyramidX[i],
            y: pyramidY[i],
            z: pyramidZ[i]
          }
        ]
      } 
    ]);
  }

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

  this.loader.addAnimation({fbo:{name:'pyramid',action:'unbind'}});
}
