Demo.prototype.sceneShadow = function () 
{
  this.loader.setScene('shadow');
  this.loader.addAnimation({fbo:{name:'shadow',action:'begin',storeDepth:false}});

  this.loader.addAnimation({
    "image": ["images/shadow_temp.png"],
    scale:[{x: 0.4, y: 0.24}],
    shader: {
        name: 'sceneInvestigationBoard/chromakey.fs',
        /*variable: [
        {"name":"shiftHue", "value":[()=>Sync.get('CatSkullCycle:Hue')]},
        {"name":"shiftSaturation", "value":[()=>Sync.get('CatSkullCycle:Saturation')]},
        {"name":"shiftValue", "value":[()=>Sync.get('CatSkullCycle:Shift')]},
        {"name":"centerize","value":[()=>Sync.get('CatSkullCycle:Centerize')]}
    //    {"name":"shiftHue", "value":[()=>Math.sin(getSceneTimeFromStart()*2.0)]},
    //    {"name":"shiftSaturation", "value":[()=>Math.sin(getSceneTimeFromStart()*0.1)]},
    //    {"name":"shiftValue", "value":[()=>Math.sin(getSceneTimeFromStart()*10.0)]}
        ]*/
    }
  });

  this.loader.addAnimation({fbo:{name:'shadow',action:'unbind'}});
};

Demo.prototype.addShadowFigure = function() {
  this.loader.addAnimation({
    light: {
        type: 'Spot',
        properties: {
          intensity: 0.8,
          distance:0,
          decay:0,
          angle:Math.PI/3
        },
        castShadow: false,
        texture: 'shadow.color.fbo', // add an optional custom texture to spot light
    },
    position: [{ x: 0, y: 0, z: 3.0 }]
  });
};
