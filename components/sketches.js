import p5 from "p5";
import { hexToRgb } from "./utils";

// Must import images here for vite to handle static asset correctly
import catImage from "../images/cat.jpeg";

const controls = document.getElementById("p5-controls");
const sketchWidth = 600;

export let sketches = [];
let currentSketch;
let currentSketchControls = [];

// You may add as many sketches as you want, they will be added to the dropdown and update the renderer. You must however use the same object structure as the examples.

//  Sketch 1
const a = {
  name: "Cat",
  sketch: (sketch) => {
    // Must use sketch object to use p5.js features
    let img;
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      sketch.background(255, 0, 0, 255);
      img = sketch.loadImage(catImage);
    };
    sketch.draw = function () {
      sketch.image(img, sketch.mouseX, sketch.mouseY);
    };
  }
};
sketches.push(a);

// Sketch 2
const b = {
  name: "Small Ellipses",
  sketch: (sketch) => {
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      sketch.background(40, 40, 40, 255);
    };
    sketch.draw = function () {
      sketch.ellipse(sketch.mouseX, sketch.mouseY, 10, 10);
    };
  }
};
sketches.push(b);

// Sketch 3
const c = {
  name: "Medium Ellipses",
  sketch: (sketch) => {
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      sketch.background(0, 255, 0, 255);
    };
    sketch.draw = function () {
      sketch.ellipse(sketch.mouseX, sketch.mouseY, 50, 50);
    };
  }
};
sketches.push(c);

//  Sketch 4
const d = {
  name: "Big Ellipses",
  sketch: (sketch) => {
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      sketch.background(0, 0, 255, 255);
    };
    sketch.draw = function () {
      sketch.ellipse(sketch.mouseX, sketch.mouseY, 100, 100);
    };
  }
};
sketches.push(d);

// Sketch 5
const e = {
  name: "Rectangles",
  sketch: (sketch) => {
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      sketch.background(0, 255, 255, 255);
    };
    sketch.draw = function () {
      sketch.rect(sketch.mouseX, sketch.mouseY, 100, 100);
    };
  }
};
sketches.push(e);

// Sketch 6
const f = {
  name: "Lines",
  sketch: (sketch) => {
    let offset = 0;
    let linesValue, speedValue, backgroundValues, strokeValues;

    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      linesValue = sketch.setupLinesControl();
      speedValue = sketch.setupSpeedControl();
      backgroundValues = sketch.setupBackgroundControl();
      strokeValues = sketch.setupStrokeControl();
      sketch.background(hexToRgb(backgroundValues));
      sketch.stroke(hexToRgb(strokeValues));
    };
    sketch.draw = function () {
      for (let i = 0; i < sketch.width; i = i + linesValue) {
        sketch.line(i, 0 + offset, i, 0);
      }
      offset += speedValue;
      if (offset > sketch.height) {
        offset = 0;
        sketch.background(backgroundValues);
        sketch.stroke(strokeValues);
      }
    };

    sketch.setupLinesControl = () => {
      // Create the element
      let element = document.createElement("input");

      // Use helper function to create control. First parameter is the control element itself. Second parameter is an object with control attributes. Name property is displayed. createControl returns its label element for display the value.
      let control = createControl(element, {
        name: "Line Spacing",
        type: "range",
        max: 40,
        min: 1,
        value: 3
      });

      // // Listen to input changes and set readable value
      element.addEventListener("input", () => {
        linesValue = parseInt(element.value);
        control.innerHTML = linesValue;
        sketch.background(backgroundValues);
        offset = 0;
      });

      // // Return value of input for sketch
      return parseInt(element.value);
    };

    sketch.setupSpeedControl = () => {
      let element = document.createElement("input");
      let control = createControl(element, {
        name: "Speed",
        type: "range",
        max: 4,
        min: 0,
        value: 1,
        step: 0.1
      });
      element.addEventListener("input", () => {
        speedValue = parseFloat(element.value);
        control.innerHTML = speedValue;
      });
      return parseFloat(element.value);
    };

    sketch.setupBackgroundControl = () => {
      let element = document.createElement("input");
      let control = createControl(element, {
        name: "Background",
        type: "color",
        value: "#000000"
      });
      element.addEventListener("input", () => {
        backgroundValues = hexToRgb(element.value);
        control.innerHTML = backgroundValues;
        sketch.background(backgroundValues);
      });
      return element.value;
    };

    sketch.setupStrokeControl = () => {
      let element = document.createElement("input");
      let control = createControl(element, {
        name: "Stroke",
        type: "color",
        value: "#ffffff"
      });
      element.addEventListener("input", () => {
        strokeValues = hexToRgb(element.value);
        control.innerHTML = strokeValues;
        sketch.stroke(strokeValues);
      });
      return element.value;
    };
  }
};
sketches.push(f);

function createControl(e, options) {
  let container = document.createElement("div");
  let label = document.createElement("label");
  let value = document.createElement("span");
  container.classList.add("option");
  label.innerHTML = options.name;
  for (const attribute in options) {
    e.setAttribute(attribute, options[attribute]);
  }
  value.innerHTML = e.value;
  container.appendChild(label);
  label.appendChild(value);
  container.appendChild(e);
  controls.appendChild(container);
  currentSketchControls.push(container);
  return value;
}

// Sketch switching mechanism
export function switchSketch(n) {
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
}
