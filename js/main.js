import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

function init(){ 

    //param de la ball
    var pokeball = {
            scene : null,
        };

    const w =window.innerWidth;
    const h = window.innerHeight;
    
    const scene = new THREE.Scene();

    const fov = 75;
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera( fov, w / h, near, far );
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(w, h);

    let ambientLight = new THREE.AmbientLight({color:'white'}, 2.5);
    scene.add(ambientLight);

    camera.position.z = 6;
    document.body.appendChild( renderer.domElement );

    //loader de la pokeball
    var animatePoke;
    const gltfLoader = new GLTFLoader();
    //ajout de la pokeball à la scene
    gltfLoader.load("../assets/images/Pokeball/pokeball.gltf", (gltf)=>{
        
        console.log(gltf)
        scene.add(gltf.scene)
        
        pokeball.gameboyPlane = gltf.scene.children[0]
        pokeball.gameboyPlane.visible = false
        pokeball.scene = gltf.scene.children[1]
        
        //console.log(gltf.scene)
        gltf.scene.rotation.y = 3;
        gltf.scene.rotation.x = 0.25;

        animatePoke = gltf.scene;

        scene.traverse((child)=>{
            if(child.isMesh){
                child.material.morphTargets = true
            }
        })

        scene.traverse((child)=>{
            if(child.isMesh && child.material.isMeshStandardMaterial)
            {
                child.material.envMapIntensity = 1
            }
        })    
    });

    function animate() {
        
        //fait tourner la pokeball horizontalement
        if (animatePoke) animatePoke.rotation.y += 0.005;
        //render le tout
        renderer.render( scene, camera );
    }
    
    renderer.setAnimationLoop( animate );
}
init();
