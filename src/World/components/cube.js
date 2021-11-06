import { BoxGeometry, Mesh, MeshStandardMaterial } from "https://cdn.skypack.dev/three@0.132.2";

function createCube(width=2,height=2,depth=5, position={x:0,y:0,z:0}, color="peachpuff"){
    // create Geometry
    const geometry = new BoxGeometry(width,height,depth); // width, height, depth

    // create material
    const material = new MeshStandardMaterial({color});

    // create mesh
    const cube = new Mesh(geometry, material);
    cube.position.x = position.x;
    cube.position.y = position.y;
    cube.position.z = position.z;

    cube.rotation.set(0, 0, 0);

    return cube;
}

export { createCube };