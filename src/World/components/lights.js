import { DirectionalLight,PointLight,SpotLight } from "https://cdn.skypack.dev/three@0.132.2";

function createLights(){
    const light = new DirectionalLight('white',40); // color, intensity
    
    // move light to left right towards us
    light.position.set(0,0,10);

    return light;
}

export {createLights};