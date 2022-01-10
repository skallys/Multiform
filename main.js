import "./style.css";

import model from "./models/jersey/scene.glb";
import { sketchSelect, switchSketch } from "./sketch";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let camera, scene, renderer, material, drawingCanvas;

init();
setupCanvasDrawing();

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
    2000
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
  // Make sure P5 canvas is loaded before render
  setTimeout(function () {
    drawingCanvas = document.getElementById("drawing-canvas");
    material.emissiveMap = new THREE.CanvasTexture(drawingCanvas);
    animate();
  }, 0);
}

function animate() {
  requestAnimationFrame(animate);
  material.emissiveMap.needsUpdate = true;
  renderer.render(scene, camera);
}

//  Update canvas texture if switch

sketchSelect.addEventListener("input", function () {
  switchSketch(this.value);
  drawingCanvas = document.getElementById("drawing-canvas");
  material.emissiveMap = new THREE.CanvasTexture(drawingCanvas);
});
