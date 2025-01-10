<template>
    <div class="pokeball-div">
        <canvas id="pokeball" ref="pokeball"></canvas>
    </div>
    <hr class="separateur-plat" id="pokeball-sep-plat" />
    <div class="pokeball-div" id="bonus">
        <p class="text-about" id="pokeball-texte">
            <span>Voici un modèle 3D d'une pokeball réalisé avec Blender qui tourne sur elle même. </span>
            <span>Ceci a été réaliser pour m'amuser sur mon temps libre. La librairie utilisé est Three js.</span>
        </p>
        <Lien titre="Vous pouvez cliquer sur le lien pour accèder à la librairie" lien="https://threejs.org"
            classP="texteGauche text-about"></Lien>
    </div>
</template>
<script setup>
    import '~/assets/pokeball.css';
    
    import Lien from './lien.vue';
    
    import {Scene, WebGLRenderer, PerspectiveCamera, AmbientLight } from "three";
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

    const pokeball = ref(null);
    function init() {
        //param de la ball
        var pokeballParam = {
                scene : null,
            };
        
        const h = 225;
        const w = 320;

        const renderer = new WebGLRenderer({
            antialias : true,
            canvas : pokeball.value,
        });

        renderer.setClearColor( 0xffffff, 0);

        const fov= 60;
        const aspect = w/h;
        const near= 0.1;
        const far= 700;
        const camera = new PerspectiveCamera(fov, aspect, near, far)
        camera.position.z = 2.5;

        const scene = new Scene();

        let ambientLight = new AmbientLight({color:'white'}, 2.5);
        scene.add(ambientLight);


        //loader de la pokeball
        var animatePoke;
        const gltfLoader = new GLTFLoader();
        //ajout de la pokeball à la scene
        gltfLoader.load('Pokeball/pokeball.gltf', (gltf)=>{
            scene.add(gltf.scene)
            
            pokeballParam.gameboyPlane = gltf.scene.children[0]
            pokeballParam.gameboyPlane.visible = false
            pokeballParam.scene = gltf.scene.children[1]
            
            gltf.scene.rotation.y = 3;
            gltf.scene.rotation.x = 0.25;

            animatePoke = gltf.scene;
            animatePoke.position.y+=-1;

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

    onMounted(() => {
        init();
    })

</script>