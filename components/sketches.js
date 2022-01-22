import p5 from "p5";

export const sketchWidth = 600;

export let sketches = [];

let currentSketch;
let currentSketchControls = [];

// You may add as many sketches as you want, they will be added to the dropdown and update the renderer. You must however use the same object structure as the examples.

// Sketch 6
export const createControl = (e, labels, options) => {
  const controls = document.getElementById("p5-controls");
  let container = document.createElement("div");
  let label = document.createElement("label");
  let value = document.createElement("span");
  container.classList.add("option");
  label.innerHTML = options.name;
  for (const attribute in options) {
    e.setAttribute(attribute, options[attribute]);
  }

  if (labels) {
    container.appendChild(label);
    label.appendChild(value);
  }
  value.innerHTML = e.value;
  container.appendChild(e);
  controls.appendChild(container);
  currentSketchControls.push(container);
  return value;
};

// Sketch switching mechanism
export const switchSketch = (n) => {
  console.log(sketches);

  if (currentSketch) {
    if (currentSketchControls.length > 0) {
      currentSketchControls.forEach((e) => {
        e.remove();
      });
      currentSketchControls = [];
    }
    currentSketch.remove();
  }
  currentSketch = new p5(sketches[n].sketch, "p5-container");
  // Return active sketch object
  return sketches[n];
};
