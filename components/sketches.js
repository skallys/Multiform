import p5 from "p5";

// Must import images here for vite to handle static asset correctly
import catImage from "../images/cat.jpeg";

export let sketches = [];
let currentSketch;

// You may add as many sketches as you want, they will be added to the dropdown
// and update the renderer. You must however use the same object structure as the examples.

//  Sketch 1
const a = {
  name: "Cat",
  sketch: (sketch) => {
    let img;
    sketch.setup = () => {
      let cnv = sketch.createCanvas(window.innerWidth / 3.33, 400);
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
      let cnv = sketch.createCanvas(window.innerWidth / 3.33, 400);
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
      let cnv = sketch.createCanvas(window.innerWidth / 3.33, 400);
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
      let cnv = sketch.createCanvas(window.innerWidth / 3.33, 400);
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
      let cnv = sketch.createCanvas(window.innerWidth / 3.33, 400);
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

// Sketch switching mechanism
export function switchSketch(n) {
  if (currentSketch) {
    currentSketch.remove();
  }
  currentSketch = new p5(sketches[n].sketch, "p5-container");
  // Return active sketch object
  return sketches[n];
}
