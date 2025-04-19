Demo.prototype.sceneOutro = function () {
    this.setScene('outro');
    
    Utils.setSeed(6666);

    this.loader.addAnimation({image: '_embedded/defaultWhite.png', color: [{r:0,g:0,b:0}]});
  
    const polaroids = [
        'mrna.color.fbo',
        'images/falseflag.png',
        'flatTorus.color.fbo',
        'elite.color.fbo',     
        'deepState.color.fbo',
        'greetings.color.fbo',
        'introPolaroid.color.fbo',
        'anagram3.color.fbo',
        'chemTrail.color.fbo',
        'anagram0.color.fbo',
        'anagram1.color.fbo',
        'anagram2.color.fbo',
        'lamer.color.fbo',
        'plasma.color.fbo',
        'culturalMatrix.color.fbo',
        'pyramid.color.fbo',
        'AsmA.color.fbo',
        'images/invitation_qr.png',
    ]
    
    const nonPolaroids = [
      'bzm.color.fbo',
      'farjan.color.fbo',
      'wordCloud.color.fbo',
      'film2.color.fbo',
      'film1.color.fbo',
    ]
    const pictures = [
      'images/believe_aulanko.png',
      'images/believe_aulanko.png',
    ];

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
          scale: [{ uniform3d: 2.0 }]
        }
      ]);


      this.loader.addAnimation([
        {
          image: 'images/end_graffiti.png',
          perspective: "3d",
          position: [{
              x: -0.3,
              y: 1.0,
              z: -.15
            }],
          scale: [{ uniform3d: 3.5 }],
          color: [{a:.1}],
          material:{
            transparent:true,
            //depthTest: true,
           // depthWrite: true,
            blending: 'NormalBlending'
          },
          angle: [
            {
              degreesZ: 17,
            }
          ],
          shader:{
            name: 'sceneOutro/graffiti.fs'
          }     
        }
      ]);

      this.loader.addAnimation([
        {
          id:'creditsPaper',
          object: {
            name: 'sceneInvestigationBoard/paper.obj'
          },
          position: [
            {
              x: 2.2,
              y: -1.2,
              z: -.15
            }
          ],
          angle: [
            {
              degreesX: 90,
              degreesY: 15,
            }
          ],
          color: [{r:()=>Sync.get('Misc:EndpaperColor') ,g:()=>Sync.get('Misc:EndpaperColor'),b:()=>Sync.get('Misc:EndpaperColor')}],
          scale: [{ x: .2, z: .23 }]
        }
      ]);
      this.loader.addAnimation([
        {
          image: 'images/factCheck.png',
          perspective: "3d",
          position: [{
              x: 2.13,
              y: -1.39,
              z: -.14
            }],
          scale: [{ uniform3d: 0.05 }],
          color: [{r:.5,g:0,b:0,a:.55}],
          material:{
            transparent:true,
            //depthTest: true,
           // depthWrite: true,
            blending: 'NormalBlending'
          },
          angle: [
            {
              degreesZ: ()=>- 15,
            }
        ],
        }
      ]);
    // Investigators
    // Anteeksi Henkilö
    // Haluttu Maksullinen Engine

    // Informants
    // Astu / Jumalauta
    // Kaunis Espanjalainen tyttö
    // Ylvaes

    // Data leaks
    // Assembly organizing
    // Bzm Org
    
    this.creditsText({text:'Investigators',x:-.25,y:-.8, scale:.9});
    this.creditsText({text:'Anteeksi Henkilö',x:.3,y:-.6, scale:.77});
    this.creditsText({text:'Haluttu Maksullinen Engine',x:0,y:-.45, scale:.77});

    this.creditsText({text:'Informants',x:-.35,y:-.2, scale:.9});
    this.creditsText({text:'Astu / Jumalauta',x:.29,y:0, scale:.77});
    this.creditsText({id:'Kaunis Espanjalainen Tyttö', text:'Kaunis Espanjalainen Tyttö, Ylvaes',x:0,y:.15, scale:.55});

    this.creditsText({text:'Data Leaks',x:-.35,y:.4, scale:.9});
    this.creditsText({text:'Assembly Organizing',x:.2,y:.6, scale:.77});
    this.creditsText({text:'Bzm DisOrg',x:.49,y:.75, scale:.77});


    for(let i = 0; i< polaroids.length; i++)
    {
        let random3 = Utils.random()*2-1;
        let random = Utils.random();
        let random2 = Utils.random();
        this.loader.addAnimation([
            {
            material: {
                map: polaroids[i],
            },
            object: {
                name: 'sceneInvestigationBoard/polaroid.obj',
            },
            color: [{r:.25,g:.25,b:.25}],
            position: [
                {
                x: Utils.random()*4-2,
                y: ()=>8+(random*.2+.1)*Sync.get('Misc:PicDrop'),
                z: Utils.random()*3+1
                }
            ],
            angle: [
                {
                  degreesZ: ()=>random*360+getSceneTimeFromStart()*35.0*random3,
                  degreesY: ()=>180+ Math.sin(random*360+getSceneTimeFromStart())*30-15, // Utils.random()*50-25,
                  degreesX: ()=>Math.sin(random2*360+getSceneTimeFromStart())*20-10 // Utils.random()*30-15 
                }
            ],
            scale: [{ uniform3d: 0.75 }]
            }
        ]);
    }

    for(let i = 0; i< nonPolaroids.length; i++)
      {
          let random3 = Utils.random()*2-1;
          let random = Utils.random();
          let random2 = Utils.random();
          this.loader.addAnimation([
              {
              material: {
                  map: nonPolaroids[i],
              },
              object: {
                  name: 'sceneInvestigationBoard/15X10.obj',
              },
              color: [{r:.25,g:.25,b:.25}],
              position: [
                  {
                  x: Utils.random()*4-2,
                  y: ()=>8+(random*.2+.1)*Sync.get('Misc:PicDrop'),
                  z: Utils.random()*3+1
                  }
              ],
              angle: [
                  {
                  degreesZ: ()=>random*180+getSceneTimeFromStart()*35.0*random3,
                  degreesY: ()=>180+ Math.sin(random*360+random3*getSceneTimeFromStart())*30-15, // Utils.random()*50-25,
                  degreesX: ()=>Math.sin(random2*360+getSceneTimeFromStart())*20-10 // Utils.random()*30-15 
                  }
              ],
              scale: [{ uniform3d: 0.75 }]
              }
          ]);
      }

      for(let i = 0; i< pictures.length; i++)
        {
            let random3 = Utils.random()*2-1;
            let random = Utils.random();
            let random2 = Utils.random();
            this.loader.addAnimation([
                {
                image: {
                    name: pictures[i],
                },
                material: {
                  side: 'DoubleSide'
                },
                perspective: "3d",
                color: [{r:.35,g:.35,b:.35}],
                position: [
                    {
                    x: Utils.random()*4-2,
                    y: ()=>8+(random*.2+.1)*Sync.get('Misc:PicDrop'),
                    z: Utils.random()*3+1
                    }
                ],
                angle: [
                    {
                    degreesZ: ()=>random*180+getSceneTimeFromStart()*35.0*random3,
                    degreesY: ()=>180+ Math.sin(random*360+random3*getSceneTimeFromStart())*30-15, // Utils.random()*50-25,
                    degreesX: ()=>Math.sin(random2*360+getSceneTimeFromStart())*20-10 // Utils.random()*30-15 
                    }
                ],
                scale: [{ uniform3d: 0.2 }]
                }
            ]);
        }
    }

Demo.prototype.creditsText = function (cText)
{
  this.loader.addAnimation([{
    parent:'creditsPaper',
    text:{string:cText.text,name:"multiSceneEffects/monoSpace.ttf"},
    perspective:"3d", 
    color:[{"r":0.0,"g":0.0,"b":0.0}],
    position:[{x:cText.x, z:cText.y}],
    scale: [{ uniform3d: cText.scale }],
    angle: [
      {
        degreesX: -90
      }]
    }]);
  
  let redactedString = 'REDACTED:'+(cText.id||cText.text);
  this.loader.addAnimation([{
    parent:'creditsPaper',
    text:{string:`-REDACTED-`,name:"multiSceneEffects/monoSpace.ttf"},
    perspective:"3d", 
    color:[{"r":1.0,"g":1.0,"b":1.0,"a":()=>Sync.get(redactedString)}],
    position:[{x:cText.x, z:cText.y}],
    scale: [{ uniform3d: .9 }],
    angle: [{degreesX: -90}]
    }]);

  this.loader.addAnimation({
    parent:'creditsPaper',
    image: '_embedded/defaultWhite.png',
    color: [{r:0,g:0,b:0,"a":()=>Sync.get(redactedString)}],
    perspective:"3d",
    position:[{x:cText.x, z:cText.y }],
    scale: [{ x: .0175*Math.max(cText.scale*cText.text.length, 9.0), y:.05 }],
    angle: [{degreesX: -90}]
    });
}