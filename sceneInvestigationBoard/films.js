Demo.prototype.sceneFilms = function () 
{
  this.loader.setScene('films');

  this.loader.addAnimation({fbo:{name:'film1',action:'begin',storeDepth:false}});

  this.loader.addAnimation({
    duration: 6*window.pattern,
    image: {name:"images/film1.mp4", video:{speed:1.5,loop:true} }
    ,scale:[{x:2.0,y:2.0}]
  });

  this.loader.addAnimation(
    {
      start: 5*window.pattern,
      image: {
        name: 'images/film1_still.png'
      },
      color: [{ a:0 }, { a:1.0, duration: window.pattern }],
      scale:[{x:2.0,y:2.0}]
    });

  this.loader.addAnimation(
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
    });


  this.loader.addAnimation({fbo:{name:'film1',action:'unbind'}});

  this.loader.addAnimation({fbo:{name:'film2',action:'begin',storeDepth:false}});

  this.loader.addAnimation({
    image: {name:"images/film1.mp4", video:{speed:1.0,loop:true} }
    ,scale:[{x:2.0,y:2.0}]
  });

  this.loader.addAnimation({
    image: {name:"images/film2.mp4", video:{speed:4.0,loop:true} }
    ,scale:[{x:2.0,y:2.0}]
    ,color:[{a:0.5}]
  });

  this.loader.addAnimation(
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
    });

  this.loader.addAnimation({fbo:{name:'film2',action:'unbind'}});
}
