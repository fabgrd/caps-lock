import * as THREE from './three.js/build/three.module.js'
import { GLTFLoader } from './three.js/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from './three.js/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controls;
function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);
  camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,5000);
  camera.position.set(0,25,25);
  controls = new THREE.OrbitControls(camera);
  scene.add( new THREE.AxesHelper(500));
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
    animate();
  };

function animate() {
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
init();

new THREE.GLTFLoader().load('model/scene.gltf', result => { 
    model = result.scene.children[0]; 
    });
    scene.add(model);
    animate();

    light = new THREE.SpotLight(0xffa95c,4);
    light.position.set(-50,50,50);
    light.castShadow = true;
    scene.add( light );

    function animate() {
        light.position.set( 
          camera.position.x + 10,
          camera.position.y + 10,
          camera.position.z + 10,
        );
      }