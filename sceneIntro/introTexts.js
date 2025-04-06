
Demo.prototype.sceneIntroTexts = function () {
    this.setScene('introTexts');
  
    this.introText(0, 13, 0, 7, 3, "JUMALAUTA");
    this.introText(0, 13, 0, 4, 3, "TRUTH DIVISION");
    this.introText(0, 13, 0, 0, 3, "PRESENTS");
    
    this.introText(9, 14, 0, 2, 3, "Summis vita");
    this.introText(9, 14, 0, -2, 3, "In Armento");

}


Demo.prototype.introText = function (startTime, durationTime, x, y, scale, textString)
{

this.loader.addAnimation([{
  start: startTime, duration: durationTime,
  text:{string:textString,name:"multiSceneEffects/monoSpace.ttf"
  },
  perspective:"3d", 
  color:[{"r":0.0,"g":0.0,"b":0.0,"a":0.0}
    ,{duration:durationTime*.15},{a:1}
    ,{duration:durationTime*.05},{a:1}
    ,{duration:durationTime*.3},{a:0}
  ],
  position:[{x:x+.25, y:y-.25, z:-20}],
  scale: [{ uniform3d: 23.0 }],
  }]);

  this.loader.addAnimation([{
    start: startTime, duration: durationTime,
    text:{string:textString,name:"multiSceneEffects/monoSpace.ttf"
    },
    perspective:"3d", 
    color:[{"r":0.0,"g":0.0,"b":0.0,"a":0.0}
        ,{duration:durationTime*.15},{a:1}
        ,{duration:durationTime*.05},{a:1}
        ,{duration:durationTime*.3},{a:0}
      ],
    position:[{x:x-.25, y:y+.25, z:-20}],
    scale: [{ uniform3d: 23.0 }],
    }]);

  this.loader.addAnimation([{
    start: startTime, duration: durationTime,
    text:{string:textString,name:"multiSceneEffects/monoSpace.ttf"
    },
    perspective:"3d", 
    color:[{"r":.35,"g":.35,"b":.35,"a":0.0}
        ,{duration:durationTime*.15},{a:1}
        ,{duration:durationTime*.05},{a:1}
        ,{duration:durationTime*.3},{a:0}
      ],
    position:[{x:x, y:y, z:-20}],
    scale: [{ uniform3d: 23.0 }],
    }]);
}