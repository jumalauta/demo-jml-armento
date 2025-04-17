Demo.prototype.addIntroLines = function (definition) {
  const steps = 1000;

  const shapePoints = definition.shapePoints || [];

  const shapePrecision = 2;
    let shapeSize = 0.5; 
    this.loader.addAnimation({
        object:{name:null,properties:{castShadow:false, receiveShadow:true}},
        material:{
          transparent:true,
          frustumCulled:false,
          //map: 'sceneInvestigationBoard/tex_thread.png',
        },
          shape:{type:'SPLINE',
            precision:shapePrecision,
            points:shapePoints,
            extrudeSettings:{steps:steps},
            function:(shape) => {
              const shapePrecision = shape.precision;
              const pointArray = [];
              for (let i = 0; i < shapePrecision; i++) {
                const angleRad = (i / shapePrecision) * 2 * Math.PI;
                pointArray.push([
                  Math.sin(angleRad) * shapeSize,
                  Math.cos(angleRad) * shapeSize
                ]);
              }
    
              return pointArray;
            }
          },
        position:[{x:0,y:0,z:-50},{duration:60,z:1000*1.0-50}],
        "angle":[{"degreesY":180}],
        color:[{r:1,g:0,b:0,a:0.15}],
        //"scale":[{"uniform3d":.1}],
      });
};

Demo.prototype.sceneIntro = function () {
  this.setScene('intro');

  this.loader.addAnimation({
    "light": {
        "type": "Ambient",
        "properties": { "intensity": 2.0 },
        "castShadow": false
    }
    ,"color": [{
        "r": 0.8, "g": 0.8, "b": 0.8
    }]
});    

    this.loader.addAnimation({
      "light": {
          "type": "Directional",
          "properties": { "intensity": 1.5 },
          "castShadow": true
      }
      ,position:[{x:0.5,y:3,z:2}]
    });    

  this.loader.addAnimation({image: '_embedded/defaultWhite.png', color: [{r:0,g:0,b:0}]});
  this.loader.addAnimation({image: 'images/grunge_1.png', additive:true, color: [{a:()=>0.35}], scale:[{uniform2d:3.0},{duration:30,uniform2d:6.0}], angle:[{degreesZ:()=>-getSceneTimeFromStart()*2.0}]});

  for(let i = 0; i < 10; i++)
  {
    this.addEffectStarfield(0,240, 90, "images/bitfont_"+i+".png", 450,450,500, 5.5, null, 0,0,0, 1.0, 0.0, false);
  }

  let numbers =  [2,9,0,8,2,5];
  for(let i = 0; i < numbers.length; i++) {
    this.addEffectStarfield(i*3,240-i*3, 10, "images/bitfont_"+numbers[i]+".png", 450,450,500, 5.5, null, 0,0,0, 1.0, 0.0, true);
  }

  Utils.setSeed(1312);
for(let i = 0; i < 6; i++) {
  let linePath = [];
  for (let j = 0; j < 50; j++) {
    linePath.push([Utils.random()*40-20,Utils.random()*40-20,((i+1)*(j*10+1))-50]);
  }
  this.addIntroLines({
    shapePoints: linePath
  });

}
}