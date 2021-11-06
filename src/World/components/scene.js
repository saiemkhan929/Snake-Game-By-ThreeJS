import { Color, Scene} from "https://cdn.skypack.dev/three@0.132.2";

function createScene(){
    // create scene
    const scene = new Scene();

    // set scene background color
    scene.background = new Color('skyblue');

    return scene;
}

export {createScene};