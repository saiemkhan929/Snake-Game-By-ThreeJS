import { BufferGeometry, Vector3, Mesh, MeshStandardMaterial,  DoubleSide, Scene} from "https://cdn.skypack.dev/three@0.132.2";

function createRoof({w= 1, l=2, h=0.8}){

    // create empty wireframe
    const geo = new BufferGeometry();

    // 6 vertices - 3 for for each face
    const vertices = new Array(6);
    // vertices[0] = new Vector3(0,0,-1);
    // vertices[1] = new Vector3(0,0,1);
    // vertices[2] = new Vector3(0,1,0);
    // vertices[3] = new Vector3(5,0,-1);
    // vertices[4] = new Vector3(5,0,1);
    // vertices[5] = new Vector3(5,1,0);
  console.log(w,l,h)
    vertices[0] = new Vector3(0,0,-w);
    vertices[1] = new Vector3(0,0,w);
    vertices[2] = new Vector3(0,h,0);
    vertices[3] = new Vector3(l,0,-w);
    vertices[4] = new Vector3(l,0,w);
    vertices[5] = new Vector3(l,h,0);

    // Make geometry by vertices
    geo.setFromPoints(vertices);

    // faces - main array
    const facesIndices = [
        0,1,2, // front face
        3,4,5, // back face
        2,5,0, // left top half
        0,5,3, // left down half
        2,5,4, // right top half
        1,4,2, // right down half
    ];


    geo.setIndex(facesIndices);

    // make mesh
    const material = new MeshStandardMaterial({color:'tomato', side: DoubleSide});
    const sqaure = new Mesh(geo, material);

    sqaure.rotation.x = .5

    return sqaure;
}

export { createRoof };