import * as THREE from './three.js/build/three.module.js'
import { GLTFLoader } from './three.js/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from './three.js/examples/jsm/controls/OrbitControls.js';

const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

const loader =  new GLTFLoader()
loader.load('./tex/Antoine-3D.glb', function(glb){
    console.log(glb)
    const root = glb.scene
    root.scale.set(0.008, 0.008, 0.008)
    root.position.set(0, -1)
    scene.add(root)  
}, function (xhr) {
    console.log(xhr.loaded/xhr.total * 100 + '% loaded');
}, function(error) {
    console.log('Une erreur frr');
})

// const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
// scene.add(hemiLight);

const light = new THREE.SpotLight(0xffffff,4);
light.position.set(-50, 50, 50);
light.castShadow = true;
scene.add( light );


// Boiler Plate Code
const sizes = {
    width: 690,
    height: 880
}

const camera = new THREE.PerspectiveCamera(40, sizes.width/sizes.height, 0.2, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas,
    antialias: true,
    alpha: true
})

let controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.09;
controls.autoRotate = true;
controls.autoRotateSpeed = 1;
controls.target.set(-0.5,0,0)

controls.screenSpacePanning = false;

controls.minDistance = 5;
controls.maxDistance = 10;

controls.maxPolarAngle = Math.PI / 2;

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.outputEncoding = true

function animate(){
    light.position.set( 
        camera.position.x + 10,
        camera.position.y + 10,
        camera.position.z + 10,
      );
    requestAnimationFrame(animate)
    controls.update();
    renderer.render(scene, camera)
}

animate()