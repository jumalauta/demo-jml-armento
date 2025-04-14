in vec2 texCoord;
out vec4 fragColor;
uniform sampler2D texture0;
uniform vec4 color;
uniform float time;
uniform float iteration;
uniform float strength;
void main()
{
    float t = time;
    vec2 coord=texCoord;

    coord.t = mod(coord.t - time*0.1, 1.0);
    coord.t += (cos(coord.s*12.0 + t*1.0)*0.05)+(sin(coord.s*20.0 + t*1.0)*0.05);
    coord.s += (sin(coord.t*12.0 + t*1.0)*0.05);

    fragColor = texture2D(texture0, coord) * color;
}
