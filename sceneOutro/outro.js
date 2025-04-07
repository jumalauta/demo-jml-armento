Demo.prototype.sceneOutro = function () {
    this.setScene('outro');
  
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
    
    for(let i = 0; i< polaroids.length; i++)
    {
        let random = Math.random();
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
                x: Math.random()*3-1.5,
                y: ()=>8+(random*.2+.1)*Sync.get('Misc:PicDrop'),
                z: Math.random()*2-1
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