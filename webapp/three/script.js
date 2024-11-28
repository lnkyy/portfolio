import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';


console.log("coucou");

function init() {
    console.log("présent chef");
    
    const h = window.innerHeight;
    const w = window.innerWidth;

    const renderer = new THREE.WebGLRenderer({antialias : true});
    renderer.setSize(w, h);
    //renderer.setAnimationLoop(animate);
    document.getElementById("container-sphere").appendChild(renderer.domElement);

    const fov= 75;
    const aspect = w/h;
    const near= 0.1;
    const far= 1000;
    const camera = new THREE.Camera(fov, aspect, near, far)
    camera.position.z = 5;


    const scene = new THREE.Scene();

    //faire mes objets
    /*
    const geometry = new THREE.SphereGeometry( 16, 32, 16 ); 
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
    const sphere = new THREE.Mesh( geometry, material );
    scene.add(sphere);
    */

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    console.log(scene)

    //let controls = new OrbitControls(camera, renderer.domElement);
    


    renderer.render( scene, camera );
    console.log("au revoir chef");
}

init();