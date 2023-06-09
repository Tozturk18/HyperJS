import * as HYPER from '../libs/HYPERJS.js';

const renderer = new HYPER.Renderer( window.innerWidth, window.innerHeight );

const scene = new HYPER.Scene();

const camera = new HYPER.Camera( window.innerWidth/window.innerHeight, 75 );

const squareGeometry = new HYPER.SquareGeometry(100,100,0);

/*const squareMaterial = new HYPER.BasicMaterial({
    color:          "#0000ff",
    fill:           true,
    strokeColor:    "#ff0000",
    strokeWidth:    5
});*/

const squareMaterial = new HYPER.PhongMaterial({
    color:          "#0000ff",
    fill:           true,
});

const square = new HYPER.Mesh(squareGeometry, squareMaterial);
//square.position = new HYPER.Vector3(-200,200,0);

scene.add(square);

const light = new HYPER.PointLight( new HYPER.Vector3(0,0,0), 100, "#ff0000" );

light.position = new HYPER.Vector3(250,0,0);

scene.add(light);


renderer.render(scene,camera);
function animate() {
    requestAnimationFrame(animate);

    square.rotate( new HYPER.Quaternion(0,1,0,0.005) );

    renderer.render(scene,camera);
}

animate();


window.onresize = () => {
    renderer.setSize( window.innerWidth, window.innerHeight );
};