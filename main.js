import "./styles/style.css";

import { sketches, switchSketch } from "./components/sketches";
import { init, setCanvasTexture } from "./components/renderer";

let currentSketch;

let rendererIsLoaded = init();

if (rendererIsLoaded) {
  createSelect();
}

// Create select dropdown
function createSelect() {
  // Default sketch
  currentSketch = switchSketch(5);

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
