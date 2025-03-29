Demo.prototype.sceneWordCloud = function () 
{
  this.loader.setScene('wordCloud');
  this.loader.addAnimation({fbo:{name:'wordCloud',action:'begin',storeDepth:false}});

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
          name: 'images/word_cloud.png'
        },
        perspective: '2d',
        position: [
          {
            y: 0,
            x: ()=>Sync.get('Misc:WordCloudY'),
            z: 0
          }
        ],  
        angle: [
          {
            degreesZ: 90
          }
        ],  
        scale: [{ uniform2d: 4.8 }],
      }
    ]);

    this.loader.addAnimation([
      {
        image: {
          name: 'images/word_cloud.png'
        },
        perspective: '2d',
        additive: true,
        position: [
          {
            y: ()=>Sync.get('Misc:WordCloudY')*.5,
            x: ()=>-Sync.get('Misc:WordCloudY')*.5,
            z: 0
          }
        ],  
        color:[{r:0.5,g:.5,b:.5}],
        angle: [
          {
            degreesZ: 90
          }
        ],  
        scale: [{ uniform2d: 9.6 }],
      }
    ]);

    this.loader.addAnimation([
      {
        image: {
          name: 'sceneInvestigationBoard/tex_15X10.png'
        },
        perspective: '2d',
        position: [
          {
            x: 0,
            y: 0,
            z: 0
          }
        ],  
        scale: [{ uniform2d: .855 }],
        color: [{ r: 1.0, g: 1.0, "b": 1.0 }]
      }]);

  this.loader.addAnimation({fbo:{name:'wordCloud',action:'unbind'}});
}
