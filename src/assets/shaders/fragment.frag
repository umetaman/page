varying vec2 v_uv;
uniform float u_time;
uniform float u_width;
uniform float u_height;
uniform vec3 u_backgroundColor;
uniform vec3 u_color;
uniform float u_animation;

vec3 lerpVec3(vec3 a, vec3 b, float t) {
    float x = mix(a.x, b.x, t);
    float y = mix(a.y, b.y, t);
    float z = mix(a.z, b.z, t);
    return vec3(x, y, z);
}

void main() {
    float u = v_uv.x;
    float v = v_uv.y;

    // remap uv
    if(u_width > u_height){
        float aspect = u_width / u_height;
        float diffX = aspect - 1.0f;
        diffX *= 0.5f;
        u = u * aspect - diffX;
    } else {
        float aspect = u_height / u_width;
        float diffY = aspect - 1.0f;
        diffY *= 0.5f;
        v = v * aspect - diffY;
    }

    vec2 squareUV = vec2(u, v);

    // repeat
    u = mod(u / 0.05f, 1.0f);
    v = mod(v / 0.05f, 1.0f);

    // render color
    float r = abs(u - 0.5f) / 0.5f;
    float g = abs(v - 0.5f) / 0.5f;

    float radius = u_time + distance(squareUV, vec2(0.5f, 0.5f)) * 3.0f;
    float vertical = u_time * 0.5f + (squareUV.x + squareUV.y) * 0.5f;

    float t = mix(vertical, radius, u_animation);

    t *= -2.0f;
    
    float s = sin(t);
    r = smoothstep(s, s - 0.1f, r);
    g = smoothstep(s, s - 0.1f, g);

    float c = 1.0 - min(r,g);
    vec3 color = mix(u_color, u_backgroundColor, c);

    gl_FragColor = vec4(color, 1.0f);
    // gl_FragColor = vec4(u, v, 0, 1.0f);
}