import "./style.css";
import "./sketch";
import * as THREE from "three";

let camera, scene, renderer, mesh, material;

init();
setupCanvasDrawing();
animate();

function init() {
  const rendererElement = document.getElementById("renderer");
  renderer = new THREE.WebGLRenderer({
    canvas: rendererElement,
    antialias: true
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(
    rendererElement.clientWidth,
    rendererElement.clientHeight
  );

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xa0a0a0);

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 500;

  material = new THREE.MeshBasicMaterial();

  mesh = new THREE.Mesh(
    new THREE.BoxGeometry(200, 200, 200),
    material
  );
  // scene.add(mesh);

  window.addEventListener("resize", onWindowResize);
}

// Sets up the drawing canvas and adds it as the material map

// function setupCanvasDrawing() {
//   // get canvas and context
//   setTimeout(function () {
//     const drawingCanvas = document.getElementById("drawing-canvas");
//     material.map = new THREE.CanvasTexture(drawingCanvas);
//   }, 0);
// }

// function onWindowResize() {
//   camera.updateProjectionMatrix();
// }

// function animate() {
//   requestAnimationFrame(animate);
//   material.map.needsUpdate = true;

//   mesh.rotation.x += 0.01;
//   mesh.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }
