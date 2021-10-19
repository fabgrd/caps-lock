import * as THREE from './three.js/build/three.module.js'
import {GLTFLoader} from './three.js/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from './three.js/examples/jsm/controls/OrbitControls.js';

const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

const loader =  new GLTFLoader()
loader.load('./tex/Default.glb', function(glb){
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

const light = new THREE.DirectionalLight(0xffffff, 2.5)
light.position.set(2, 3, 4)
scene.add(light)

// Boiler Plate Code
const sizes = {
    width: 690,
    height: 930
}

const camera = new THREE.PerspectiveCamera(40, sizes.width/sizes.height, 0.2, 100)
camera.position.x = 0
camera.position.y = 1.5
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

controls.screenSpacePanning = false;

controls.minDistance = 5;
controls.maxDistance = 5;

controls.maxPolarAngle = Math.PI / 2;

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.outputEncoding = true

function animate(){
    requestAnimationFrame(animate)
    controls.update();
    renderer.render(scene, camera)
}

animate()