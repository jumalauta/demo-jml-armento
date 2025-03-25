
Demo.prototype.sceneIntro = function () {
  this.setScene('intro');

  this.loader.addAnimation({image: '_embedded/defaultWhite.png', color: [{r:0,g:0,b:0}]});

  for(let i = 0; i < 10; i++)
  {
    this.addEffectStarfield(0,240, 100, "images/bitfont_"+i+".png", 450,450,500, 5.5, null, 0,0,0);
  }

}