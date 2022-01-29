import "./styles/style.css";
import "./components/sketches/lines";
import "./components/sketches/random_lines";
import "./components/sketches/cat";
import "./components/sketches/small_ellipses";
import "./components/sketches/rectangles";

import { sketches, switchSketch } from "./components/sketches";
import { init, setCanvasTexture } from "./components/renderer";

let currentSketch;
let rendererIsLoaded = init();

document
  .getElementById("canvas")
  .addEventListener("click", function () {
    let content = this.querySelector("canvas");
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      console.log(content.style.visibility);
      content.style.opacity = "1";
    } else {
      content.style.opacity = "0";
    }
  });

if (rendererIsLoaded) {
  createSelect();
}

// Create select dropdown
function createSelect() {
  // Default sketch
  currentSketch = switchSketch(0);

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
