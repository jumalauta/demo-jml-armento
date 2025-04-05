Demo.prototype.sceneBzm = function () 
{
  this.loader.setScene('bzm');
  this.loader.addAnimation({fbo:{name:'bzm',action:'begin',storeDepth:false}});

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
          name: 'images/bzm_truth_2.png'
        },
        perspective: '2d',
        position: [
          {
            x: ()=>Sync.get('Misc:BZM')*.01*Math.sin(5*getSceneTimeFromStart()),
            y: 0,
            z: 0
          }
        ],  
        scale: [{ uniform2d: 1.15 }],
      }
    ]);

    this.loader.addAnimation([
      {
        image: {
          name: 'images/bzm_truth_1.png'
        },
        perspective: '2d',
        position: [
          {
            x: ()=>Sync.get('Misc:BZM')*.01*Math.sin(5*getSceneTimeFromStart()),
            y: 0,
            z: 0
          }
        ],  
        scale: [{ uniform2d: 1.15 }],
        color: [{ a: ()=>Sync.get('Misc:BZM') }]
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
        scale: [{ uniform2d: .875 }],
        color: [{ r: 1.0, g: 1.0, b: 1.0 }]
      }]);

  this.loader.addAnimation({fbo:{name:'bzm',action:'unbind'}});
}
