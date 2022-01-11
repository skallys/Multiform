import "./styles/style.css";

import model from "./models/jersey/scene.glb";
import * as THREE from "three";

import { sketches, switchSketch } from "./components/sketches";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let camera, scene, renderer, material, targetCanvas, currentSketch;

init();
setupCanvasDrawing();
createSelect();

function init() {
  // RENDERER
  const rendererElement = document.getElementById("renderer");
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: rendererElement
  });

  renderer.setSize(
    rendererElement.clientWidth,
    rendererElement.clientHeight
  );

  // CAMERA
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );

  camera.position.set(0, 0, 3);

  // SCENE
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  // MATERIAL
  material = new THREE.MeshStandardMaterial({
    emissive: new THREE.Color(0xffffff),
    side: THREE.DoubleSide
  });

  // MODEL
  const loader = new GLTFLoader();
  loader.load(
    model,
    function (gltf) {
      //log meshes
      // gltf.scene.traverse((child) => {
      //   console.log(child);
      // });

      gltf.scene.position.set(-0.2, 0.05, 0);
      gltf.scene.scale.set(3, 2.5, 3);

      scene.add(gltf.scene);
      setMaterialsOnGLTF(gltf.scene);
    },
    // called while loading is progressing
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function (error) {
      console.log("An error happened");
    }
  );

  // SET MATERIAL TO MODEL MESHES
  function setMaterialsOnGLTF(gltfScene) {
    if (gltfScene.material) {
      gltfScene.material = material;
    }
    if (!gltfScene.children) {
      return;
    }
    for (let i = 0; i < gltfScene.children.length; i++) {
      setMaterialsOnGLTF(gltfScene.children[i]);
    }
  }

  // CONTROLS
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  // LIGHTS
  // const light = new THREE.AmbientLight(0x404040); // soft white light
  // scene.add(light);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(10, -10, 0);
  scene.add(directionalLight);
}

function setupCanvasDrawing() {
  // Load P5 instance to be first sketch in sketches array.
  // Set currenSketch variable to be the sketch object returned from
  // switchSketch function.
  currentSketch = switchSketch(0);
  // Make sure P5 canvas is loaded before render
  setTimeout(function () {
    setCanvasTexture();
    animate();
  }, 0);
}

function animate() {
  requestAnimationFrame(animate);
  material.emissiveMap.needsUpdate = true;
  renderer.render(scene, camera);
}

function setCanvasTexture() {
  targetCanvas = document.getElementById("drawing-canvas");
  material.emissiveMap = new THREE.CanvasTexture(targetCanvas);
}

// Create select dropdown
function createSelect() {
  // Get <select> element from DOM
  const selectElement = document.getElementById("sketch-select");

  sketches.forEach(function (e, i) {
    // For each sketch in sketches array, create a new option element + text node
    // from name in object. Use index as the value, for use in switch
    let element = document.createElement("option");
    let content = document.createTextNode(e.name);
    element.appendChild(content);
    element.value = i;
    selectElement.appendChild(element);
    if (currentSketch == e) {
      element.selected = true;
    }
  });

  selectElement.addEventListener("input", function () {
    currentSketch = switchSketch(this.value);
    setCanvasTexture();
  });
}
