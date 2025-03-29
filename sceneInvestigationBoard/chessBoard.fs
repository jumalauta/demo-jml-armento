in vec2 texCoord;
out vec4 fragColor;
uniform sampler2D texture0;
uniform vec4 color;
uniform float time;

void main()
{
    vec2 coord=texCoord;
    fragColor = texture2D(texture0, coord);
    coord = mod(coord + vec2(time), vec2(1.0));

    vec2 gridCoord = floor(coord * 100.0 / 10.0);
    if (mod(gridCoord.x + gridCoord.y, 2.0) == 0.0) {
        fragColor.rgb *= 0.0;
    }

    fragColor *= color;
}
