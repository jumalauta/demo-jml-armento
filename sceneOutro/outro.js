Demo.prototype.sceneOutro = function () {
    this.setScene('outro');
    
    Utils.setSeed(290825);

    this.loader.addAnimation({image: '_embedded/defaultWhite.png', color: [{r:0,g:0,b:0}]});
  
    const polaroids = [
        'mrna.color.fbo',
        'elite.color.fbo',
        'flatTorus.color.fbo',
        'AsmA.color.fbo',
        'deepState.color.fbo',
        'greetings.color.fbo',
        'introPolaroid.color.fbo',
        'lamer.color.fbo',
        'chemTrail.color.fbo',
        'bzm.color.fbo',
        'anagram0.color.fbo',
        'anagram1.color.fbo',
        'anagram2.color.fbo',
        'anagram3.color.fbo',
        'plasma.color.fbo',
        'culturalMatrix.color.fbo'
    ]
    
    this.loader.addAnimation([
        {
          object: {
            name: '3d_models/temp_room.obj'
          },
          position: [{
              x: 0,
              y: 0,
              z: 0
            }],
          angle: [{ degreesY: -90,}],
          scale: [{ uniform3d: 1.1 }]
        }
      ]);

      this.loader.addAnimation([
        {
          object: {
            name: 'sceneInvestigationBoard/paper.obj'
          },
          position: [
            {
              x: 2.2,
              y: -1.2,
              z: -.085
            }
          ],
          angle: [
            {
              degreesX: 90,
              degreesY: 15,
            }
          ],
          color: [{r:.3 ,g:.3,b:.3}],
          scale: [{ x: .2, z: .2 }]
        }
      ]);
  

    for(let i = 0; i< polaroids.length; i++)
    {
        let random = Utils.random();
        this.loader.addAnimation([
            {
            material: {
                map: polaroids[i]
            },
            object: {
                name: 'sceneInvestigationBoard/polaroid.obj'
            },
            color: [{r:.25,g:.25,b:.25}],
            position: [
                {
                x: Utils.random()*3-1.5,
                y: ()=>8+(random*.2+.1)*Sync.get('Misc:PicDrop'),
                z: Utils.random()*3-1
                }
            ],
            angle: [
                {
                degreesZ: ()=>getSceneTimeFromStart()*35.0,
                degreesY: ()=>180
                }
            ],
            scale: [{ uniform3d: 1.0 }]
            }
        ]);
        

    }
  
  }