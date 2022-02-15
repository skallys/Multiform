import "./styles/style.css";
import "../styles/common.css";

import "./components/sketches/labyrinth";
import "./components/sketches/london_rain";
import "./components/sketches/multi_line";
import "./components/sketches/desigual_style";

import { sketches, switchSketch } from "./components/sketches";
import { init, setCanvasTexture } from "./components/renderer";
import { waitForCanvas } from "./components/utils";

let currentSketch;
let currentSketchIndex = 0;
let rendererIsLoaded = init();

window.addEventListener("load", () => {
  waitForCanvas().then(() => {
    let controls = document.querySelectorAll(".app-control");
    controls.forEach((e) => {
      let toggle = e.querySelector(".toggle");
      e.addEventListener("mouseup", () => {
        if (!e.classList.contains("active")) {
          e.classList.add("active");
          e.classList.remove("picto");
        }
      });
      toggle.addEventListener("click", (event) => {
        if (e.classList.contains("active")) {
          e.classList.remove("active");
          e.classList.add("picto");
        }
      });
    });
  });
  if (rendererIsLoaded) {
    createSelect();
  }
});

// Controler qui permet de switch les sketchs
//next
const nextSketch = () => {
  currentSketchIndex++;
  if (currentSketchIndex >= sketches.length) {
    currentSketchIndex = 0;
  }
  switchSketch(currentSketchIndex);
  setCanvasTexture();
};
//previous
const previousSketch = () => {
  currentSketchIndex--;
  if (currentSketchIndex < 0) {
    currentSketchIndex = sketches.length - 1;
  }
  switchSketch(currentSketchIndex);
  setCanvasTexture();
};
//controller
function createSelect() {
  // Default sketch
  switchSketch(currentSketchIndex);
  document.querySelector("#fdroite").addEventListener("click", nextSketch);
  document.querySelector("#fgauche").addEventListener("click", previousSketch);
}

//boutons radios
let genderOptions = document.querySelectorAll(".fema");
let sizeOptions = document.querySelectorAll(".xxl");

const selectOption = function (elementsToCheck) {
  this.classList.add("active");
  elementsToCheck.forEach((option) => {
    if (this !== option) {
      option.classList.remove("active");
    }
  });
};

//FORM
genderOptions.forEach((option) => {
  option.addEventListener("click", selectOption.bind(option, genderOptions));
});

//SIZE
sizeOptions.forEach((option) => {
  option.addEventListener("click", selectOption.bind(option, sizeOptions));
  // a encore debuger
  //
});
