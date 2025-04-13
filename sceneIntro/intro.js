
Demo.prototype.sceneIntro = function () {
  this.setScene('intro');

  this.loader.addAnimation({image: '_embedded/defaultWhite.png', color: [{r:0,g:0,b:0}]});

  for(let i = 0; i < 10; i++)
  {
    this.addEffectStarfield(0,240, 90, "images/bitfont_"+i+".png", 450,450,500, 5.5, null, 0,0,0, 1.0, 0.0, false);
  }

  let numbers =  [2,9,0,8,2,5];
  for(let i = 0; i < numbers.length; i++) {
    this.addEffectStarfield(i*3,240-i*3, 10, "images/bitfont_"+numbers[i]+".png", 450,450,500, 5.5, null, 0,0,0, 1.0, 0.0, true);
  }
  
}