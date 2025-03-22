
Demo.prototype.sceneIntroPolaroid = function () 
{
  this.loader.setScene('introPolaroid');
  this.loader.addAnimation({fbo:{name:'introPolaroid',action:'begin',storeDepth:false}});

    this.loader.addAnimation({
      "light": {
          "type": "Directional",
          "properties": { "intensity": 5.85 },
          "castShadow": false
      }
      ,position:[{x:0,y:0,z:5}]
    });    


    this.loader.addAnimation({image: '_embedded/defaultWhite.png', color: [{r:0,g:0,b:0}]});

    for(let i = 0; i < 10; i++)
    {
      this.addEffectStarfield(0,240, 100, "images/bitfont_"+i+".png", 450,450,500, 5.5, null, 0,0,0);
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

  this.loader.addAnimation({fbo:{name:'introPolaroid',action:'unbind'}});
}
