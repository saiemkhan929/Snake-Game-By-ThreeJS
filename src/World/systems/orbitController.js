import { OrbitControls} from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";

function orbitController(camera, domElement){
    return new OrbitControls(camera, domElement);
}

export {orbitController};