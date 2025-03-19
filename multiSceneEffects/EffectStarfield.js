Demo.prototype.addEffectStarfield = function (startTime, durationTime, amountOfParticles, texture, areaSizeX,areaSizeY,areaSizeZ, particleSize, parentId,x,y,z, speed = 1.0, directionFlip = 0.0)
{
  const recalcThreshold = 0.1;

  let stars = new Array(amountOfParticles);
  const sizeX = areaSizeX;
  const sizeY = areaSizeY;
  const sizeZ = areaSizeZ;
  for (let i = 0; i < stars.length; i++) {
    let z1 = Utils.random()
    stars[i] = {
      "x0": Utils.random()*sizeX*2-sizeX,
      "y0": Utils.random()*sizeY*2-sizeY,
      "x1": Utils.random()*sizeX*2-sizeX,
      "y1": Utils.random()*sizeY*2-sizeY,
      "z1": Utils.random()*sizeZ*2-sizeZ,
      "z2": 0
    };
  }

  z = -50;
  this.loader.addAnimation({
    "start":startTime, "duration":durationTime,
    "image": texture,
    textureProperties: [{},{minFilter: 'NearestMipmapNearestFilter', magFilter: 'LinearFilter'}],
    "parent":parentId,
    "position":[{
      "x":x,
      "y":y,
      "z":z,
    }],
    "angle":[{"degreesY":180}],
    "perspective": "3d",
    "billboard": true,
    "additive": true,
    "material":{
      "blending": 'AdditiveBlending',
      "transparent":true,
      "depthWrite":false,

    },
    "scale":[{"uniform3d":.1}],
    "instancer": {
      "count": stars.length,
      "runInstanceFunction": (properties) => {

        const i = properties.index;
        const count = properties.count;
        const time = properties.time;
        let object = properties.object;
        let color = properties.color;

        const scale = particleSize;
        object.scale.x = scale;
        object.scale.y = scale;
        object.scale.z = scale;   

        const percent = -(.15*getSceneTimeFromStart())%1.0;
        stars[i].z2 = (percent*sizeZ*2+stars[i].z1);
        if(stars[i].z2<-sizeZ)
          stars[i].z2+=sizeZ*2;

        object.position.z = stars[i].z2;
        object.position.x = stars[i].x1;
        object.position.y = stars[i].y1;

        }
      }
    
  });
}