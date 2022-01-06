import "./sketch";
import "./style.css";
import * as THREE from "three";
import { MeshPhongMaterial } from "three";

let camera, scene, renderer, mesh, material;

init();
setupCanvasDrawing();
animate();

function init() {
  const rendererElement = document.getElementById("renderer");
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: rendererElement
  });

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );

  camera.position.set(0, 0, 5);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xa0a0a0);

  material = new THREE.MeshStandardMaterial();

  mesh = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), material);
  mesh.position.set(0, 0, 0);
  scene.add(mesh);
  renderer.setSize(
    rendererElement.clientWidth,
    rendererElement.clientHeight
  );

  // LIGHTS
  const light = new THREE.AmbientLight(0x404040); // soft white light
  scene.add(light);

  window.addEventListener("resize", onWindowResize);
}

// Sets up the drawing canvas and adds it as the material map

function setupCanvasDrawing() {
  // get canvas and context

  // draw white background

  // set canvas as material.map (this could be done to any map, bump, displacement etc.)
  setTimeout(function () {
    const drawingCanvas = document.getElementById("drawing-canvas");
    material.map = new THREE.CanvasTexture(drawingCanvas);
  }, 0);

  // set the variable to keep track of when to draw
}

function draw() {}

function onWindowResize() {
  camera.updateProjectionMatrix();
}

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  material.map.needsUpdate = true;
  renderer.render(scene, camera);
}
