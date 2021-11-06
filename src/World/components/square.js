import { BufferGeometry, Vector3, Mesh, MeshStandardMaterial,  DoubleSide} from "https://cdn.skypack.dev/three@0.132.2";

function createSqaure(){
    // create empty wireframe
    const geo = new BufferGeometry();

    // 6 vertices - 3 for for each face
    const vertices = new Array(6);
    vertices[0] = new Vector3(0,0,0);
    vertices[1] = new Vector3(1,0,0);
    vertices[2] = new Vector3(0,1,0);
    vertices[3] = new Vector3(0,1,0);
    vertices[4] = new Vector3(1,0,0);
    vertices[5] = new Vector3(1,1,0);

    // Make geometry by vertices
    geo.setFromPoints(vertices);

    // make mesh
    const material = new MeshStandardMaterial({color:'tomato', side: DoubleSide});
    const sqaure = new Mesh(geo, material);

    return sqaure;
}

export { createSqaure };