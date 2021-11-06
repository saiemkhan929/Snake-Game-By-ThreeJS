import {
    BoxBufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
  } from "https://cdn.skypack.dev/three@0.132.2";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js?module";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js?module";


const container = document.querySelector('#scene-container');

// create scene
const scene = new Scene();

// set scene background color
scene.background = new Color('skyblue');

// Camera setup
const fov = 35; // 
const aspectRatio = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;

const camera = new PerspectiveCamera(fov, aspectRatio, near, far); 

// Set camera position
camera.position.set(0,0,10);

// create Geometry
const geometry = new BoxBufferGeometry(2,2,2); // width, height, depth

// create material
const material = new MeshBasicMaterial();

// create mesh
const cube = new Mesh(geometry, material);

// Add mesh to scene
scene.add(cube);

// create renderer
const renderer = new WebGLRenderer();

// define renderer size
renderer.setSize(container.clientWidth, container.clientHeight);

// set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the canvas created by renderer to the HTML
container.append(renderer.domElement);

// render the scene
renderer.render(scene, camera);