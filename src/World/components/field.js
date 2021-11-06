import { PlaneGeometry, Mesh, MeshBasicMaterial, GridHelper } from "https://cdn.skypack.dev/three@0.132.2";

function createField(){
    const geometry = new PlaneGeometry( 1, 1 );
    const material = new MeshBasicMaterial( {color: 0xBFBFBF, side: THREE.DoubleSide} );
    const field = new Mesh( geometry, material );

    const size = 1;
    const divisions = 10;

    const gridHelper = new GridHelper( size, divisions );
    gridHelper.rotation.x =  Math.PI / 2; // 90 degree rotation
    field.add(gridHelper);

    return field;
}

export { createField };