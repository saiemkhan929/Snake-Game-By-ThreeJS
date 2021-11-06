import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { orbitController } from './systems/orbitController.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { AxesHelper } from "https://cdn.skypack.dev/three@0.132.2";
import {createSqaure} from './components/square.js'
import {createRoof} from './components/roof.js'
import {createField} from './components/field.js'
import {createBall} from './components/ball.js'

// js private styled properties
let camera, renderer, scene, controls, ballPositionsMatrix = [];

class World {
    constructor(container){
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);
        controls = orbitController(camera, renderer.domElement);

        const axesHelper = new AxesHelper( 5 );
        const light = createLights();
        const square = createField();

        this.createBallPositions()

        const ball = createBall();
        const ballPositionIndex = this.getRndInteger(0,100);
        const ballPosition = ballPositionsMatrix[ballPositionIndex];
        ball.position.set(ballPosition.x, ballPosition.y, ballPosition.z)
        square.add(ball); // add ball to the board
        scene.add(square, light, axesHelper);

        // update control
        controls.update();

        // Create Resizer
        const resizer = new Resizer(container, camera, renderer);
    }


    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

    createBallPositions = ()=> {
        let index = 0;
        for(let row = -0.45; row <= 0.46; row += .10 ){
            for(let col = 0.45; col >= -0.46; col -= .10 ){
                ballPositionsMatrix[index] = {
                    x: row,
                    y: col,
                    z: .045
                }

                index++;
            }
        }

        console.log(ballPositionsMatrix)
    }

    animate = (ms) => {
        requestAnimationFrame( this.animate );

        controls.update();
        renderer.render(scene, camera);
    }

    render(){
        // draw the frame
        this.animate()
    }
}

export {World};