import { SphereGeometry, Mesh, MeshBasicMaterial } from "https://cdn.skypack.dev/three@0.132.2";

function createBall(){
    const geometry = new SphereGeometry( 1, 32,32);
    const material = new MeshBasicMaterial( {color: 'red', side: THREE.DoubleSide} );
    const ball = new Mesh( geometry, material );
    const size = .04;
    ball.scale.set(size, size, size)


    return ball;
}

export { createBall };