in vec2 texCoord;
in vec3 rayDirection;

out vec4 fragColor;

uniform sampler2D texture0;
uniform sampler2D texture2;
uniform float time;

uniform float timeMultiplier;
uniform float invert;
uniform float rotation;
uniform float rotation2;
uniform float rotation3;
uniform float speed;
uniform float MAX_STEPS;


uniform vec3 inCamPos;
uniform float camFov;
uniform vec3 camDirection;
uniform float camNear;
uniform float camFar;
uniform float outro;
uniform float carrotPosZ;

uniform int effectType; // 0 = metaballs, 1 = mengerish tunnel
vec3 camPos;
vec3 surfacePos;

float mengerdivisor = 2.0;
uniform float MAX_DIST;

#define PI 3.14159265359
#define BOTTOMSCALE 0.25
#define SURFACESCALE 0.15
mat2 Rot(float angle) 
{
	float s = sin(angle);
	float c = cos(angle);
	return mat2(c, -s, s, c);
}

float Cross(vec3 point)
{
	point = abs(point);
	vec3 d = vec3(max(point.x, point.y),
				  max(point.y, point.z),
				  max(point.z, point.x));
	return min(d.x, min(d.y, d.z)) - (1.0/mengerdivisor);
}

float CrossRep(vec3 point)
{
	vec3 q = mod(point + 1.0, 2.3) - 1.0;
	return Cross(q);
}
float CrossRepScale(vec3 point, float scale)
{    
	return CrossRep(point * scale) / scale;
}
float Cone( vec3 pos, vec3 rot, vec2 c, float h )
{
  vec3 p = pos;
  float q = length(p.xz);
  return max(dot(c.xy,vec2(q,p.y)),-h-p.y);
}

float Capsule( vec3 pos, vec3 rot, float h, float r )
{
  pos.y -= clamp( pos.y, 0.0, h );
  return length( pos ) - r;
}


float rand(vec2 p) {
	return fract(sin(dot(p, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noiseTex(vec2 p, float scale) {

	vec2 n = floor(p*(scale));
	vec2 f = fract(p*(scale));
    f = vec2(smoothstep(0.,1.,f.x),smoothstep(0.,1.,f.y));
	float c1 = rand(n), c2 = rand(n+vec2(1.,0.)), c3 = rand(n+vec2(0.,1.)), c4 = rand(n+vec2(1.,1.));
    return mix(mix(c1,c2,f.x), mix(c3,c4,f.x), f.y);
}

vec4 sand(vec3 p) {
    vec3 sandColor = vec3(1.0,.45,.1);
	float sandPos = p.y - 1.6*noiseTex(p.zx, BOTTOMSCALE) + noiseTex(p.xz*vec2(2.5,1.),BOTTOMSCALE)/(100.+25.0*sin(time)) - noiseTex(p.xz*150.,BOTTOMSCALE)/350.;

    return vec4(sandPos, sandColor);
}




vec4 Sphere(vec3 point, vec3 pos, float scale, vec3 sphereColor)
{ 
	return vec4(length(point - pos)-scale, sphereColor);
}

vec4 Union(vec4 a, vec4 b)
{
    return a.x < b.x ? a : b; 
}
/*
float smin(float a, float b, float k) {
    float h = clamp(0.5 + 0.5*(a-b)/k, 0.0, 1.0);
    return mix(a, b, h) - k*h*(1.0-h);
}
*/
vec4 smin(vec4 a, vec4 b, float k) {
    float h = clamp(0.5 + 0.5*(a.x-b.x)/k, 0.0, 1.0);
    float blend = k*h*(1.0-h);
 
    return mix(a, b, h) - vec4(blend, -blend*1.0,-blend*1.0,-blend*1.0);
}

vec4 GetDist(vec3 point)
{
    vec4 distObjects;

    if(effectType == 0)
    {
        vec3 objPos1 = vec3((sin(time*3.))*1.5,sin(cos(time*1.5))*5.0,-15.0+sin(sin(time*3.))*1.0);
        vec3 objPos2 = vec3((-sin(time*1.5))*1.5,sin(cos(-time*3.))*5.0,-15.0+sin(sin(time*3.))*1.0);
        vec3 objPos3 = vec3(sin(cos(-time*3.))*2.0,sin(cos(-time*2.))*2.0,-15.0+sin(sin(time*1.5))*3.0);
        vec3 objPos4 = vec3(0.0,(-sin(time*2.5435))*5.0,-15.0+sin(sin(time*1.5))*3.0);
        surfacePos = vec3(0.0,18.0,0.0);
        vec4 sphereObj1 = Sphere(point, objPos1, 1.925, vec3(0.0,0.0,0.0));
        vec4 sphereObj2 = Sphere(point, objPos2, 1.925, vec3(0.2,.2,.2));
        vec4 sphereObj3 = Sphere(point, objPos3, 1.925, vec3(1.0,0.6,1.2));
        vec4 sphereObj4 = Sphere(point, objPos4, 1.925, vec3(0.6,1.1,0.4));
        distObjects = smin(sphereObj1, sphereObj2, 1.45);
        vec4 distObjects2 = smin(sphereObj3, sphereObj4, 1.45);
        distObjects = smin(distObjects,distObjects2, 1.475);
    }
    if(effectType == 1)
    {
        float objects;
        float scale = 1.0;
        for(int i=0;i<4;i++)
        {
            objects = max(objects, -CrossRepScale(point+vec3(.0,.0-.2,-2.*time), scale));
            scale *=1.55;
        }
        vec3 color = vec3(0.0,1.0-(objects*objects)* 5.,0.5);
        if(objects<.026)
             color = vec3(0);

        distObjects = vec4(objects, color);
    }
    

    return distObjects;
}


vec4 RayMarch(vec3 rayOrigin, vec3 rayDir)
{
    float distOrigin = camNear;
    vec3 distColor = vec3(.0,.0,.0);
	float SURFACE_DIST = .025; // this should be uniform calculated using camera fov
    vec3 bgColor = vec3(0.0,0.0,0.0);

    for(float i=0.; i<MAX_STEPS;i++)
    {
        vec3 pointOnRay = rayOrigin+rayDir*distOrigin;        
        vec4 distScene = GetDist(pointOnRay);
        distOrigin += distScene.x;
        if(distOrigin>=MAX_DIST) discard;
        if(distScene.x<SURFACE_DIST) break;

        distColor = mix (distScene.yzw, bgColor, distOrigin/MAX_DIST );

    }
    
    return vec4(distOrigin, distColor);
}

vec3 GetNormal(vec3 point)
{
    vec4 distColor = GetDist(point);
    float dist = distColor.x;
    vec2 e = vec2(.05,0.);
    vec3 normal = dist - vec3(
        GetDist(point-e.xyy).x, //e.xyy = 0.1,0,0
        GetDist(point-e.yxy).x,
        GetDist(point-e.yyx).x); 
        
    return normalize(normal);
}

float GetLight(vec3 point)
{
    
    vec3 lightPos = camPos+vec3(0.0,0.,.0);
    //lightPos.xz-=vec2(sin(time),cos(time))*11.;
    vec3 light = normalize(lightPos-point);

    vec3 normal = GetNormal(point);
    float diffuse = clamp(dot(normal, light),0.0,1.0);
    diffuse +=0.5;
    

    return diffuse;
}




 
void main()
{
    camPos = inCamPos;

    vec4 dist = RayMarch(camPos, rayDirection); 
    vec3 point = camPos + rayDirection * dist.r;
    
    float diffuse = GetLight(point);
    vec3 col = vec3(dist.y*diffuse, dist.z*diffuse, dist.w*diffuse);

    float z =  (dist.x * dot(camDirection, rayDirection));
    float ndcDepth = -((camFar + camNear) / (camNear - camFar)) + ((2.0 * (camFar) * camNear) / (camNear - camFar)) / z;
    gl_FragDepth = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.;
    
    vec3 bgCol = vec3(0.0,0.0,0.0);

      //  col = mix(col, bgCol, (dist.x)/(MAX_DIST));

    fragColor = vec4(col,1.0);
} 