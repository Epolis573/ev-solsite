import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);

// Initialize the GLTFLoader and DRACOLoader
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();

// Set the decoder path to where your Draco files are located
dracoLoader.setDecoderPath('/gl/draco/');
loader.setDRACOLoader(dracoLoader);



