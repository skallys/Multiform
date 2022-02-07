import model from "../models/jersey/scene.glb";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { waitForCanvas } from "./utils";

let camera, scene, renderer, material, targetCanvas;

export const init = () => {
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
  //saloua: ici pour que le jersey ne soit pas déformé: (window.innerWidth/100)*66.7) /100 + *66.7 c'est pour que celà entre bien dans la fenêtre qui fait 66.7% de la taille de la fenêtre.
  camera = new THREE.PerspectiveCamera(
    50,
    ((window.innerWidth / 100) * 66.7) / window.innerHeight,
    1,
    5000
  );

  camera.position.set(-1, 0, 2.5);

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
    (gltf) => {
      gltf.scene.position.set(0, 0, 0);
      gltf.scene.scale.set(3, 3, 3);
      scene.add(gltf.scene);
      setMaterialsOnGLTF(gltf.scene);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log("An error happened");
    }
  );

  // SET MATERIAL TO MODEL MESHES

  // CONTROLS
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  // LIGHTS
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(10, -10, 0);
  scene.add(directionalLight);
  setupCanvasDrawing();
  return true;
};

const setMaterialsOnGLTF = (gltfScene) => {
  if (gltfScene.material) {
    gltfScene.material = material;
  }
  if (!gltfScene.children) {
    return;
  }
  for (let i = 0; i < gltfScene.children.length; i++) {
    setMaterialsOnGLTF(gltfScene.children[i]);
  }
};

const setupCanvasDrawing = async () => {
  await waitForCanvas().then(() => {
    setCanvasTexture();
    animate();
  });
};

const animate = () => {
  requestAnimationFrame(animate);
  material.emissiveMap.needsUpdate = true;
  renderer.render(scene, camera);
};

export const setCanvasTexture = () => {
  targetCanvas = document.getElementById("drawing-canvas");
  material.emissiveMap = new THREE.CanvasTexture(targetCanvas);
};
