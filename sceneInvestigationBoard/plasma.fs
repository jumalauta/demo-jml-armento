in vec2 texCoord;
out vec4 fragColor;
uniform sampler2D texture0;
uniform float time;// = 1.0;

vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main()
{
	vec2 uv = (sin(time)*2.+4.0)*texCoord.xy;

    float i = cos(uv.x+sin(time))+sin(-uv.y-time*.1)+cos(sin(uv.x+sin(time)*.3))*4.5+cos(uv.y-time+sin(time)*.24)*1.5
    +cos(uv.x-uv.y +time)+(sin(uv.x)*.10+sin(uv.y)*.4);

    vec3 color = vec3(-sin(cos(uv.x*5.0-time*-4.1)-4.2831853 * -i), sin(cos(uv.y*21.1)+time*5.+5.2831853 * i), sin(uv.y)+sin(12.1*uv.y+uv.x)+sin(time+ 2.2831853 * i));

    vec3 hsv = rgb2hsv(color);

    hsv.x = mod(hsv.x+time,1.0);

    fragColor =  vec4(hsv2rgb(hsv), 1.0);
}