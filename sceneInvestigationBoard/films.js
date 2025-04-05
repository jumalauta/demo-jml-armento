Demo.prototype.sceneFilms = function () 
{
  this.loader.setScene('films');

  this.loader.addAnimation({fbo:{name:'film1',action:'begin',storeDepth:false}});

  /*this.loader.addAnimation({
    image: {name:"images/shadow_test_temp.mp4", video:{speed:1.25,loop:true} }
    //,scale:[{x:4.0,y:4.0}], color:[{a:0.2,r:blackness,g:blackness,b:blackness}]
  });*/

  this.loader.addAnimation({fbo:{name:'film1',action:'unbind'}});

  this.loader.addAnimation({fbo:{name:'film2',action:'begin',storeDepth:false}});

  /*this.loader.addAnimation({
    image: {name:"images/shadow_test_temp.mp4", video:{speed:2.0,loop:true} }
    //,scale:[{x:4.0,y:4.0}], color:[{a:0.2,r:blackness,g:blackness,b:blackness}]
  });*/

  this.loader.addAnimation({fbo:{name:'film2',action:'unbind'}});
}
