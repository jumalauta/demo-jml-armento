
Demo.prototype.sceneEndZoomer = function () 
{
  this.loader.setScene('endZoomer');
  this.loader.addAnimation({fbo:{name:'endZoomer',action:'begin',storeDepth:false}});

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
          name: '3d_models/flatearth.obj'
        },
        position: [
          {
            x: ()=>Sync.get('EndZoomer:FlatEarthX'),
            y: ()=>Sync.get('EndZoomer:FlatEarthY'),
            z: 0
          }
        ],
        angle: [
          {

            degreesX: ()=>Sync.get('EndZoomer:FlatEarthRotX'), // 55
            degreesY: ()=>Sync.get('EndZoomer:FlatEarthRotY')
          }
        ],
        scale: [{ uniform3d: ()=>Sync.get('EndZoomer:FlatScale'), }] // 1.3
      }
    ]);



  this.loader.addAnimation([
  {
    image: {
      name: 'images/earth_zoom_level_1.png'
    },
    perspective: '2d',
    position: [
      {
        x: ()=>Sync.get('EndZoomer:Image1X'),
        y: ()=>Sync.get('EndZoomer:Image1Y'),
        z: 0
      }
    ],
    scale: [{ uniform2d: ()=>Sync.get('EndZoomer:Image1Scale') }],
    color: [{ r: 2.0, g: 2.0, b: 2.0, a: ()=>Sync.get('EndZoomer:Image1A')}]
  }]);

  this.loader.addAnimation([
  {
    image: {
      name: 'images/earth_zoom_level_2.png'
    },
    perspective: '2d',
    position: [
      {
        x: ()=>Sync.get('EndZoomer:Image2X'),
        y: ()=>Sync.get('EndZoomer:Image2Y'),
        z: 0
      }
    ],
    scale: [{ uniform2d: ()=>Sync.get('EndZoomer:Image2Scale') }],
    color: [{ r: 2.0, g: 2.0, b: 2.0, a: ()=>Sync.get('EndZoomer:Image2A')}]
  }]);
 
  this.loader.addAnimation([
  {
    image: {
      name: 'images/earth_zoom_level_3.png'
    },
    perspective: '2d',
    position: [
      {
        x: ()=>Sync.get('EndZoomer:Image3X'),
        y: ()=>Sync.get('EndZoomer:Image3Y'),
        z: 0
      }
    ],
    scale: [{ uniform2d: ()=>Sync.get('EndZoomer:Image3Scale') }],
    color: [{ r: 2.0, g: 2.0, b: 2.0, a: ()=>Sync.get('EndZoomer:Image3A')}]
  }]);

  this.loader.addAnimation([
  {
    image: {
      name: 'images/earth_zoom_level_4.png'
    },
    perspective: '2d',
    position: [
      {
        x: ()=>Sync.get('EndZoomer:Image4X'),
        y: ()=>Sync.get('EndZoomer:Image4Y'),
        z: 0
      }
    ],
    scale: [{ uniform2d: ()=>Sync.get('EndZoomer:Image4Scale') }],
    color: [{ r: 1.5, g: 1.5, b: 1.5, a: ()=>Sync.get('EndZoomer:Image4A')}]
  }]);  

  this.loader.addAnimation([
  {
    image: {
      name: 'images/earth_zoom_level_5.png'
    },
    perspective: '2d',
    position: [
      {
        x: ()=>Sync.get('EndZoomer:Image5X'),
        y: ()=>Sync.get('EndZoomer:Image5Y'),
        z: 0
      }
    ],
    scale: [{ uniform2d: ()=>Sync.get('EndZoomer:Image5Scale') }],
    color: [{ r: 1.5, g: 1.5, b: 1.5, a: ()=>Sync.get('EndZoomer:Image5A')}]
  }]);  

  this.loader.addAnimation([
  {
    image: {
      name: 'images/earth_zoom_level_6.png'
    },
    perspective: '2d',
    position: [
      {
        x: ()=>Sync.get('EndZoomer:Image6X'),
        y: ()=>Sync.get('EndZoomer:Image6Y'),
        z: 0
      }
    ],
    scale: [{ uniform2d: ()=>Sync.get('EndZoomer:Image6Scale') }],
    color: [{ r: 1.4, g: 1.4, b: 1.4, a: ()=>Sync.get('EndZoomer:Image6A')}]
  }]);  

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
        color: [{ r: 1.3, g: 1.3, "b": 1.3 }]
      }]);

  this.loader.addAnimation({fbo:{name:'endZoomer',action:'unbind'}});
}
