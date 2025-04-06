Demo.prototype.sceneInvestigationBoard = function () {
  this.setScene('investigationBoard');

  this.loader.addAnimation({image: '_embedded/defaultWhite.png', color: [{r:.6,g:.3,b:.1}]});

  //this.loader.addAnimation({image: 'chemTrail.color.fbo'});
  this.addShadowFigure();

  this.loader.addAnimation([
    {
      object: {
        name: 'sceneInvestigationBoard/investigationboard.obj'
      },
      position: [{
          x: 0,
          y: 0,
          z: 0
        }],
      angle: [{ degreesY: -90,}],
      scale: [{ uniform3d: 1.1 }]
    }
  ]);

  // center 
  this.photo15x10(0.0 ,0, 0, -3,.5,'endZoomer.color.fbo');
  this.textPaperAnimated(124,.5, -.2, 0.3, .5, 0, 2, .35, .2,.12,'???',{visible:false});
  this.textPaperAnimated(134 ,.5, -.2, 0.3, .5, 0.01, 2, .35, .6 ,.12,'Assembly Summer 2025',{visible:false});
  this.textPaperAnimated(129,.5, .45, 0.05, .5, 0, 2, .35, .25 ,.12,'290825?',{visible:false});
  this.textPaperAnimated(133,.5, .51, 0.05, .5, 0.01, 2, .35, .42 ,.12,'31.07.-03.08.2025',{visible:false});

  this.textPaperAnimated(137,.5, .51, -0.04, .5, 0.0, 2, .35, .42 ,.12,'MESSUKESKUS',{visible:false});
  

  this.textPaperAnimated(130,.5, .51, -0.11, .5, 0.01, 2, .35, .40 ,.11,'HÄMEENLINNA',{visible:false});
  this.textPaperAnimated(132,.5, .505, -0.11, .5, 0.02, -1, .35, .32 ,.11,'HELSINKI',{visible:false});

  this.textPaperAnimated(120.5,.5, .51, -0.19, .5, 0.00, 6, .35, .26 ,.12,'NIBIRU',{visible:false});
  this.textPaperAnimated(122,.5, .51, -0.19, .5, 0.01, -2, .35, .27 ,.12,'EARTH',{visible:false});
  this.textPaperAnimated(125,.5, .51, -0.19, .5, 0.02, 3, .35, .27 ,.12,'EUROPE',{visible:false});
  this.textPaperAnimated(127,.5, .51, -0.19, .5, 0.03, 1, .35, .3 ,.12,'FINLAND',{visible:false});
  // left bottom corner 
  this.textPaper(0, -1.15, -.71, 6, .35, .5,.5,'',{visible:false});
  this.polaroid(0.0 ,-1.5, -.78, -15.5,.43,'mrna.color.fbo');
  
  this.textPaper(0, -1.65, -0.55, 3, .35, .2,.12,'mRNA',{visible:false});
  
  this.text(0, -1.21, -.6, 10, .41,'mETABALL','handWriting');
  this.text(0, -1.15, -.675, 5, .36,'RAYMARCHING','handWriting');
  this.text(0, -1.1, -.75, 8, .39,'NEARFIELD','handWriting');
  this.text(0, -1.15, -.825, 9, .35,'ACTION','handWriting');

  this.polaroid(0.0 ,-.7, -.9, 2,.38,'flatTorus.color.fbo');
  this.textPaper(0, -.75, -1.05, 3, .25, .5,.12,'TORUS IS FLAT!');
  this.textPaper(0, -.61, -1.085, -2, .25, .4,.12,'RESEARCH IT!');
//  this.polaroid(0.0 ,-.95, -.91, -1,.35,'chemTrail.color.fbo');
//  this.polaroid(0.0 ,-.60, -.97, 15,.37,'chemTrail.color.fbo');
  
  // left center
  // Cam 1 photo 3
  this.polaroid(0.0 ,-1.15, 0, -2,.55,'AsmA.color.fbo',{visible:false});
  this.polaroid(0.0 ,-1.35, .5, 5,.4,'deepState.color.fbo',{visible:false});
  this.textPaper(0, -1.65, .6, 3, .35, .36,.12,'DEEP STATE',{visible:false});
  this.textPaper(0, -1.7, .54, -3, .35, .36,.12,'HoW DEEP',{visible:false});
  this.textPaper(0, -1.65, .48, 4, .35, .36,.12,'DOES IT GO?!',{visible:false});
  // left top corner

  this.photo15x10(0.0 ,-1.65, 1.0, -10,.33,'film1.color.fbo',{visible:false});
  this.photo15x10(0.0 ,-1.25, .9, 5,.33,'farjan.color.fbo',{visible:false});
  this.textPaper(0,-1.25, 1.05, 15, .25, .88,.12,'BIG FÄRJAN IS HIDING THE TRUTH',{visible:false});
  
  // top center
  this.photo15x10(0.0 ,-.22, .95, 90,.25,'wordCloud.color.fbo',{visible:false});
  this.textPaper(0,.026, 1.1, 5, .35, .28,.1,'DEMOPARTY',{visible:false});
  this.textPaper(0,.042, 1.05, -2, .35, .34,.1,'ORGANIZATION',{visible:false});
  this.textPaper(0,.03, .98, 3, .32, .24,.1,'IS HIDING',{visible:false});
  this.textPaper(0,.03, .9, -3, .45, .265,.09,'THE TRUTH',{visible:false});
  this.textPaper(0,.0, .83, 1, .35, .21,.1,'BEHIND',{visible:false});
  this.textPaper(0,.06, .77, -2, .32, .17,.08,'FACTS',{visible:false});

  // right top corner
  this.polaroid(0.0 ,1.37, .7, -7.5,.75,'greetings.color.fbo');
  this.animatedPolaroid(91.0 ,1.0, .65, 5,.28,'aliens.color.fbo', 5.0, 4.5 , 3.55, 5);

  // right center
  this.polaroid(0.0 ,1.5, -.2, 90,.28,'introPolaroid.color.fbo',{visible:false});
    // linedraw 1, photo 2
  this.polaroid(0.0 ,0.84, -.14, -3,.28,'elite.color.fbo',{visible:false});
  this.polaroid(0.0 ,1.07, -.04, 2,.25,'chess.color.fbo',{visible:false});
  this.textPaper(0,.82, .1, 6, .25, .46,.12,'DARK ASSEMBLY',{visible:false});
  this.textPaper(0,.76, .04, -3, .25, .23,.12,'OF THE',{visible:false});
  this.textPaper(0,.89, .04, 4 , .4, .162,.09,'ELITE',{visible:false});
  this.textPaper(0,1.12, -.22, 5, .25, .56,.32,'',{visible:false});
  this.text(0, 1.08, -.16, 4, .14,'Insider claim:','monoSpace');
  this.text(0, 1.1, -.194, 4, .14,'"Beginner friendly','monoSpace');
  this.text(0, 1.093, -.219, 4, .14,'competitions are','monoSpace');
  this.text(0, 1.114, -.244, 4, .14,'used to recruit new','monoSpace');
  this.text(0, 1.11, -.274, 4, .14,'cultist acolytes."','monoSpace');
  this.polaroid(0.0 ,0.8, -.75, -5,.32,'chess.color.fbo',{visible:false});
  // right bottom corner
  this.polaroid(0.0 ,1.55, -.7, 90,.25,'chemTrail.color.fbo');
  this.polaroid(0.0 ,1.25, -.9, -2,.45,'chemTrail.color.fbo');
  
  this.textPaper(0, 1.6, -.97, 20, 1., .16,.16,'');
  this.text(0, 1.55, -.89, 17, .4,'CHEMTRAILS=','handWriting');
  this.text(0, 1.6, -.96, 17, .35,'CLAnDESTINE','handWriting');
  this.text(0, 1.63, -1.01, 17, .35,'PARTICLE ENGINE','handWriting');
  this.text(0, 1.66, -1.055, 17, .35,'TESTS!?','handWriting');
  // bottom center
    // linedraw 1, photo 3
  this.photo15x10(0.0 ,.04, -.88, -5,.35,'bzm.color.fbo',{visible:false});
  this.text(0, .04, -.73, 5, .25,'THE PARTY IS OUT THERE','monoSpace',0);
  this.textPaper(0,.14, -1.05, 11 , .3, .71,.1,'SUB ROSA SHADOW EVENT',{visible:false});
    // cam 2
  this.polaroid(0.0 ,-.8, .95 , 5,.23,'anagram0.color.fbo',{visible:false});
  this.polaroid(0.0 ,-.65, .375 , 5,.23,'anagram1.color.fbo',{visible:false});
  this.polaroid(0.0 ,-.65 , -.375 , 5,.23,'anagram2.color.fbo',{visible:false});
  this.polaroid(0.0 ,-1.5, -.375 , 5,.23,'anagram3.color.fbo',{visible:false});
  
  // pre-aliens

  
  this.polaroid(0.0 ,.67, 1.07, -7.5,.25,'plasma.color.fbo');
  this.textPaper(0, .4, 1.17, 5, .35, .4 ,.1,'MOTIVATIONS?!',{visible:false});
  this.textPaper(0, .46, 1.07, 5, .25, .45,.1,'OLDSCHOOL EFFECT',{visible:false});
  this.textPaper(0, .48, 1.02, -2, .25, .32,.1,'VISUAL LSD',{visible:false});
  this.textPaper(0, .48, .97, 3, .25, .37,.1,'MIND CONTROL',{visible:false});

  this.polaroid(0.0 ,.67, .77, 5.5,.24,'culturalMatrix.color.fbo');
  this.textPaper(0, .49, .8, 5, .25, .27,.1,'CULTURAL',{visible:false});
  this.textPaper(0, .50, .76, -2, .25, .26,.1,'MATRIXM',{visible:false});
 
  this.textPaper(0, .65, .67, -2, .2, .57,.1,'the numbers dont match!',{visible:false});
  
  this.polaroid(0.0 ,.67, .47, -9.5,.26,'chemTrail.color.fbo');
  this.textPaper(0, .44, .5, 5, .25, .47,.1,'GAME COMPETITION',{visible:false});
  this.textPaper(0, .44, .45, 5, .25, .50,.1,'MILITARY INDUSTRIAL',{visible:false});
  this.textPaper(0, .45, .4, -1, .25, .52,.1,'COMPLEX PROPAGANDA',{visible:false});
  

  this.polaroid(0.0 ,.47, .22 , 4.5,.23,'images/invitation_qr.png');
  
  this.photo15x10(0.0 ,-.41, -.40 , -10,.23,'film2.color.fbo');


  // upper left corner thread
  this.addRedThread({
    shapePoints: [
      [-1.69, 1.17],
      [-1.27, 1.07],
      [-0.8, 1.07],
      [-0.65, 0.49],
      [0.015, 0.03], // Finland
      [1.5, -0.09],
    ]
  });

  // upper-central starting cam path thread
  this.addRedThread({
    shapePoints: [
      [-.25, 1.08],
      [0.9, -0.005],
      [0.2, -0.71],
      [-0.64, -0.253],
      [-1.17, 0.28],
    ]
  });

  // upper central-left starting cam path thread
  this.addRedThread({
    shapePoints: [
      [-0.83, 1.05],
      [-0.67, 0.49],
      [-0.69, -0.253],
      [-1.5, -0.258],
    ]
  });

}

Demo.prototype.textPaper = function (startTime, x, y, zAngle, scale, paperScaleX, paperScaleY, textString, pinConfig)
{
  this.addPin(x, y, pinConfig);

  this.loader.addAnimation([{
    start:startTime,
    text:{string:textString,name:"multiSceneEffects/handWriting.ttf"
    },
    perspective:"3d", 
    color:[{"r":0.0,"g":0.0,"b":0.0}],
    position:[{x:x, y:y}],
    scale: [{ uniform3d: scale }],
    angle:[{degreesZ:zAngle+Math.random()}]
  }]);

  this.loader.addAnimation([
    {
      start:startTime,
      object: {
        name: 'sceneInvestigationBoard/paper.obj'
      },
      position: [
        {
          x: x,
          y: y,
          z: 0
        }
      ],
      angle: [
        {
          degreesX: 90,
          degreesY: zAngle,
        }
      ],
      color: [{r:.3 ,g:.3,b:.3}],
      scale: [{ x: scale*paperScaleX, z: scale*paperScaleY }]
    }
  ]);
}

Demo.prototype.textPaperAnimated = function (startTime, animDur, x, y, zStart, z, zAngle, scale, paperScaleX, paperScaleY, textString, pinConfig)
{
  this.addPin(x, y, pinConfig);

  this.loader.addAnimation([{
    start:startTime,
    text:{string:textString,name:"multiSceneEffects/handWriting.ttf"
    },
    perspective:"3d", 
    color:[{"r":0.0,"g":0.0,"b":0.0}],
    position:[{x:x, y:y, z:zStart},
    {duration:animDur, z:z}],
    scale: [{ uniform3d: scale }],
    angle:[{degreesZ:zAngle+Math.random()}]
    }]);

  this.loader.addAnimation([
    {
      start:startTime,
      object: {
        name: 'sceneInvestigationBoard/paper.obj'
      },
      position: [
        {
          x: x,
          y: y,
          z: zStart
        },
        {duration:animDur, z:z}],
      angle: [
        {
          degreesX: 90,
          degreesY: zAngle,
        }
      ],
      color: [{r:.3 ,g:.3,b:.3}],
      scale: [{ x: scale*paperScaleX, z: scale*paperScaleY }]
    }
  ]);
}

Demo.prototype.text = function (startTime, x, y, zAngle, scale, textString, font, color = 0.0)
{
//"multiSceneEffects/handWriting.ttf"
  this.loader.addAnimation([{
    start:startTime,
    text:{string:textString,name:"multiSceneEffects/" + font + ".ttf"
    },
    perspective:"3d", 
    color:[{"r":color,"g":color,"b":color}],
    position:[{x:x, y:y}],
    scale: [{ uniform3d: scale }],
    angle:[{degreesZ:zAngle+Math.random()}]
    }]);
}


Demo.prototype.polaroid = function (startTime, x, y, zAngle, scale, imageName, pinConfig)
{
  let pinX = x;
  let pinY = y+scale/2.0;
  this.addPin(pinX, pinY, pinConfig);
  
  this.loader.addAnimation([
    {
      start: startTime,
      material: {
        map: imageName
      },
      object: {
        name: 'sceneInvestigationBoard/polaroid.obj'
      },
      color: [{r:.25,g:.25,b:.25}],
      position: [
        {
          x: x,
          y: y,
          z: 0
        }
      ],
      angle: [
        {
          degreesZ: zAngle,
          degreesY: 180
        }
      ],
      scale: [{ uniform3d: scale }]
    }
  ]);
}

Demo.prototype.animatedPolaroid = function (startTime, x, y, zAngle, scale, imageName, animDuration, xStart,yStart, zStart, pinConfig)
{
  let pinX = x;
  let pinY = y+scale/2.0;
  this.addPin(pinX, pinY, {x:0, y:0, startTime:startTime+0.2, animDuration:animDuration, zStart:zStart, ...pinConfig});

  this.loader.addAnimation([
    {
      start: startTime,
      material: {
        map: imageName
      },
      object: {
        name: 'sceneInvestigationBoard/polaroid.obj'
      },
      color: [{r:.25,g:.25,b:.25}],
      position: [
        {
          x: xStart,
          y: yStart,
          z: zStart
        },
      {duration:animDuration, x:x,y:y, z:0}],
      angle: [
        {
          degreesZ: zAngle,
          degreesY: 180
        }
      ],
      scale: [{ uniform3d: scale }]
    }
  ]);
}

Demo.prototype.photo15x10 = function (startTime, x, y, zAngle, scale, imageName, pinConfig)
{
  let pinX = x;
  let pinY = y+scale/2.0;
  this.addPin(pinX, pinY, pinConfig);

  this.loader.addAnimation([
    {
      start: startTime,
      material: {
        map: imageName
      },
      object: {
        name: 'sceneInvestigationBoard/15X10.obj'
      },
      color: [{r:.25,g:.25,b:.25}],
      position: [
        {
          x: x,
          y: y,
          z: 0
        }
      ],
      angle: [
        {
          degreesZ: zAngle,
          degreesY: 180
        }
      ],
      scale: [{ uniform3d: scale }]
    }
  ]);
}
