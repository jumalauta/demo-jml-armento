
Demo.prototype.sceneIntroTexts = function () {
    this.setScene('introTexts');
  
    this.introText(0, 12, 0, 7, 3, "JUMALAUTA");
    this.introText(0, 12, 0, 4, 3, "TRUTH DIVISION");
    this.introText(0, 12, 0, 0, 3, "PRESENTS");
    
    this.introText(12, 12, 0, 2, 3, "ASSEMBLY SUMMER 2025");
    this.introText(12, 12, 0, -2, 3, "INVITATION?");

}


Demo.prototype.introText = function (startTime, duration, x, y, scale, textString)
{

this.loader.addAnimation([{
  start: startTime, duration: duration,
  text:{string:textString,name:"multiSceneEffects/monoSpace.ttf"
  },
  perspective:"3d", 
  color:[{"r":0.0,"g":0.0,"b":0.0,"a":0.0}
    ,{duration:duration*.05},{a:1}
    ,{duration:duration*.35},{a:1}
    ,{duration:duration*.2},{a:0}
  ],
  position:[{x:x+.25, y:y-.25, z:-20}],
  scale: [{ uniform3d: 23.0 }],
  }]);

  this.loader.addAnimation([{
    start: startTime, duration: duration,
    text:{string:textString,name:"multiSceneEffects/monoSpace.ttf"
    },
    perspective:"3d", 
    color:[{"r":0.0,"g":0.0,"b":0.0,"a":0.0}
        ,{duration:duration*.05},{a:1}
        ,{duration:duration*.35},{a:1}
        ,{duration:duration*.1},{a:0}
      ],
    position:[{x:x-.25, y:y+.25, z:-20}],
    scale: [{ uniform3d: 23.0 }],
    }]);

  this.loader.addAnimation([{
    start: startTime, duration: duration,
    text:{string:textString,name:"multiSceneEffects/monoSpace.ttf"
    },
    perspective:"3d", 
    color:[{"r":.35,"g":.35,"b":.35,"a":0.0}
        ,{duration:duration*.05},{a:1}
        ,{duration:duration*.35},{a:1}
        ,{duration:duration*.1},{a:0}
      ],
    position:[{x:x, y:y, z:-20}],
    scale: [{ uniform3d: 23.0 }],
    }]);
}