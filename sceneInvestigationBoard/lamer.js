Demo.prototype.sceneLamer = function ()
{
  this.loader.setScene('lamer'); 
  this.loader.addAnimation({fbo:{name:'lamer',action:'begin',storeDepth:false}});
  
  this.loader.addAnimation([
    {
      image: {
        name: 'images/bar.png'
      },
      perspective: '2d',
      position: [
        {
          x: 0,
          y: ()=>.1+.3*Math.sin(2*getSceneTimeFromStart()),
          z: 0
        }
      ],  
      scale: [{ x: 30, y:5.0 }],
      color: [{ r: ()=>Math.abs(Math.sin(5*getSceneTimeFromStart())), g: 0.0, b: 1.0 }]
    }
  ]);

  this.loader.addAnimation([
    {
      image: {
        name: 'images/bar.png'
      },
      perspective: '2d',
      position: [
        {
          x: 0,
          y: ()=>.1+.3*Math.sin(.75+2*getSceneTimeFromStart()),
          z: 0
        }
      ],  
      scale: [{ x: 30, y:5.0 }],
      color: [{ r: 0.0, g: 1.0, b: ()=>Math.abs(Math.sin(5*getSceneTimeFromStart())) }]
    }
  ]);

  this.loader.addAnimation([
    {
      image: {
        name: 'images/bar.png'
      },
      perspective: '2d',
      position: [
        {
          x: 0,
          y: ()=>.1+.3*Math.sin(1.5+2*getSceneTimeFromStart()),
          z: 0
        }
      ],  
      scale: [{ x: 30, y:5.0 }],
      color: [{ r: 1.0, g: ()=>Math.abs(Math.sin(5*getSceneTimeFromStart())), b: 0.0 }]
    }
  ]);

  this.loader.addAnimation([
    {
      image: {
        name: 'images/bar.png'
      },
      perspective: '2d',
      position: [
        {
          x: 0,
          y: ()=>.1+.3*Math.sin(2.25+2*getSceneTimeFromStart()),
          z: 0
        }
      ],  
      scale: [{ x: 30, y:5.0 }],
      color: [{ r: ()=>Math.abs(Math.sin(5*getSceneTimeFromStart())), g: 1.0, b: 0.0 }]
    }
  ]);

  this.loader.addAnimation([
    {
      image: {
        name: 'images/bar.png'
      },
      perspective: '2d',
      position: [
        {
          x: 0,
          y: ()=>.1+.3*Math.sin(3+2*getSceneTimeFromStart()),
          z: 0
        }
      ],  
      scale: [{ x: 30, y:5.0 }],
      color: [{ r: 1.0, g: 0.0, b: ()=>Math.abs(Math.sin(5*getSceneTimeFromStart())) }]
    }
  ]);

  this.loader.addAnimation([
    {
      image: {
        name: 'images/bar.png'
      },
      perspective: '2d',
      position: [
        {
          x: 0,
          y: ()=>.1+.3*Math.sin(3.75+2*getSceneTimeFromStart()),
          z: 0
        }
      ],  
      scale: [{ x: 30, y:5.0 }],
      color: [{ r: 0.0, g: ()=>Math.abs(Math.sin(5*getSceneTimeFromStart())), b: 1.0 }]
    }
  ]);

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
      scale: [{ uniform2d: 0.9 }],
    }
  ]);


  this.loader.addAnimation([{
    text:{string:'The DooM Crew is proud to PREZENT our first d3m0: The Cradle of Demonic Demons. Greetings fly out to Future Crew, Jumalauta, and all the eliteZ in the DEM0SCENE!',name:"multiSceneEffects/monoSpace.ttf"
    },
    perspective:"2d", 
    color:[{"r":()=>.75+.25*Math.random(),"g":()=>.75+.25*Math.random(),"b":()=>.75+.25*Math.random()}],
    position:[{x:()=>3+-0.5*(getSceneTimeFromStart()-5)%5, y:()=>.1+.3*Math.sin(1.0*getSceneTimeFromStart())}],
    scale: [{ uniform2d: 3.0 }],    
    }]);

  this.loader.addAnimation({fbo:{name:'lamer',action:'unbind'}});
}