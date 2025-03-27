
Demo.prototype.sceneChess = function () 
{
  this.loader.setScene('chess'); 
  this.loader.addAnimation({fbo:{name:'chess',action:'begin',storeDepth:false}});

    this.loader.addAnimation({
      "light": {
          "type": "Directional",
          "properties": { "intensity": 5.85 },
          "castShadow": false
      }
      ,position:[{x:0,y:0,z:5}]
    });    

    this.loader.addAnimation(
      {
        object: {
          name: '3d_models/chess_tower.obj'
        },
        position: [
          {
            x: 0.8,
            y: 0.45,
            z: 0
          }
        ],
        scale: [{ uniform3d: 0.3 }],
        //color: [{r:.45,g:.0,b:.0}],
      }
    );
    this.loader.addAnimation(
        {
          object: {
            name: '3d_models/chess_queen.obj'
          },
          position: [
            {
              x: 0.0,
              y: 0.45,
              z: 0
            }
          ],
          scale: [{ uniform3d: 0.3 }],
          //color: [{r:.45,g:.0,b:.0}],
        }
      );
      this.loader.addAnimation(
        {
          object: {
            name: '3d_models/chess_king.obj'
          },
          position: [
            {
              x: -0.8,
              y: 0.45,
              z: 0
            }
          ],
          scale: [{ uniform3d: 0.3 }],
          //color: [{r:.45,g:.0,b:.0}],
        }
      );
      this.loader.addAnimation(
        {
          object: {
            name: '3d_models/chess_bishop.obj'
          },
          position: [
            {
              x: -0.8,
              y: -0.6,
              z: 0
            }
          ],
          scale: [{ uniform3d: 0.3 }],
          //color: [{r:.45,g:.0,b:.0}],
        }
      );

      this.loader.addAnimation(
        {
          object: {
            name: '3d_models/chess_knight.obj'
          },
          position: [
            {
              x: -0.0,
              y: -0.6,
              z: 0
            }
          ],
          scale: [{ uniform3d: 0.3 }],
          //color: [{r:.45,g:.0,b:.0}],
          angle:[{degreesY:()=>getSceneTimeFromStart()*100}]
        }
      );


      this.loader.addAnimation(
        {
          object: {
            name: '3d_models/chess_pawn.obj'
          },
          position: [
            {
              x: 0.8,
              y: -0.6,
              z: 0
            }
          ],
          scale: [{ uniform3d: 0.3 }],
          //color: [{r:.45,g:.0,b:.0}],
        }
      );

      /*this.loader.addAnimation({
        text:{string:"MEDIA",name:"multiSceneEffects/handWriting.ttf"
        },
        perspective:"2d", 
        color:[{"r":1.0,"g":0.0,"b":0.0}],
        position:[{x:0, y:0}],
        scale: [{ uniform3d: 1.0 }],
    });*/
    
    this.loader.addAnimation(
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
    );

  this.loader.addAnimation({fbo:{name:'chess',action:'unbind'}});
}
