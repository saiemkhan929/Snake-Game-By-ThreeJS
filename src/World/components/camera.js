import { PerspectiveCamera } from "https://cdn.skypack.dev/three@0.132.2";

function createCamera(){

    const camera = new PerspectiveCamera(
        35, // Field of View
        1, // Aspect ratio dummy value
        0.1, // near clipping plane 
        100, // far clipping plane
        ); 

    // Set camera position
    camera.position.set(0,0,10);
    camera.zoom = 6;

    return camera;
}

export {createCamera};