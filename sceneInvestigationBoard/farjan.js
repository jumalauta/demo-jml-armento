Demo.prototype.sceneFarjan = function () 
{
  this.loader.setScene('farjan');
  this.loader.addAnimation({fbo:{name:'farjan',action:'begin',storeDepth:false}});

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
            y: .5,
            z: 0
          }
        ],  
        scale: [{ uniform2d: 3.9 }],
      }
    ]);

    this.loader.addAnimation([
      {
        image: {
          name: 'images/tex_sun.png'
        },
        perspective: '2d',
        position: [
          {
            x: .23,
            y: ()=>Math.sin(getSceneTimeFromStart()*2.25)*.02+.30,
            z: 0
          }
        ],  
        scale: [{ uniform2d: 0.57 }],
        color: [{
          r: 0., g: .0, "b": 0.
      }]
      }
    ]);

    this.loader.addAnimation([
      {
        image: {
          name: 'images/tex_sun.png'
        },
        perspective: '2d',
        position: [
          {
            x: .23,
            y: ()=>Math.sin(getSceneTimeFromStart()*1.95)*.02+.31,
            z: 0
          }
        ],  
        scale: [{ uniform2d: 0.57 }],
      }
    ]);

    this.loader.addAnimation(
      {
        image: {
          name: 'images/kevin.png'
        },
        perspective: '2d',
        position: [
          {
            x: .23,
            y: ()=>Math.sin(getSceneTimeFromStart()*1.95)*.02+.31,
            z: 0
          }
        ],  
        scale: [{ uniform2d: 0.57 }],
        color: [{a:0},{duration:2.5},{a:1,duration:7}]
      }
    );

    this.loader.addAnimation([
      {
        image: {
          name: 'images/tex_waves.png'
        },
        perspective: '2d',
        position: [
          {
            x: ()=>Math.sin(getSceneTimeFromStart()*2.0)*.05+.4,
            y: ()=>Math.sin(getSceneTimeFromStart()*1.0)*.15-.38,
            z: 0
          }
        ],  
        scale: [{ uniform2d: 2.75 }],
        color: [{
          r: 0.35, g: .35, "b": 0.75
      }]
      }
    ]);

    this.loader.addAnimation([
      {
        image: {
          name: 'images/tex_boat.png'
        },
        perspective: '2d',
        position: [
          {
            x: ()=>Math.sin(getSceneTimeFromStart()*.75)*.06-.2,
            y: ()=>Math.sin(getSceneTimeFromStart()*1.25)*.06-.25,
            z: 0
          }
        ],
        angle: [{ degreesZ: ()=>Math.sin(getSceneTimeFromStart()*2.0)*20+10}],
        scale: [{ uniform2d: 2.0 }],

      }
    ]);

    this.loader.addAnimation([
      {
        image: {
          name: 'images/tex_waves.png'
        },
        perspective: '2d',
        position: [
          {
            x: ()=>Math.sin(getSceneTimeFromStart()*2)*.05+.25,
            y: ()=>Math.sin(getSceneTimeFromStart())*.05-.4,
            z: 0
          }
        ],  
        scale: [{ uniform2d: 2.75 }],
        color: [{
          r: 0.5, g: .5, "b": 1.0
      }]
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


  this.loader.addAnimation({fbo:{name:'farjan',action:'unbind'}});
}