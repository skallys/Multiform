import model from "../models/jersey/scene.glb";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let camera, scene, renderer, material, targetCanvas;

export function init() {
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
      gltf.scene.position.set(-0.2, 0.05, 0);
      gltf.scene.scale.set(3, 2.5, 3);
      scene.add(gltf.scene);
      setMaterialsOnGLTF(gltf.scene);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      setupCanvasDrawing();
    },
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
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(10, -10, 0);
  scene.add(directionalLight);
}

function setupCanvasDrawing() {
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

export function setCanvasTexture() {
  targetCanvas = document.getElementById("drawing-canvas");
  material.emissiveMap = new THREE.CanvasTexture(targetCanvas);
}
