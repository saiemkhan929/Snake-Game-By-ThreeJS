import {World} from './World/World.js';

// creating the main function
function main(){
    // Get the reference of the container element
    const container = document.querySelector('#scene-container');
    
    // create instance of the world app
    const world = new World(container);

    // render the scene
    world.render();
}

// call main to start the app
main();
