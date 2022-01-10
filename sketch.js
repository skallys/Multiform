import p5 from "p5";

export let currentSketch;

export const sketchSelect = document.getElementById("p5-select");
export let sketches = [];

//  Sketch 1
const a = {
  name: "Rectangles",
  sketch: (sketch) => {
    sketch.setup = () => {
      let cnv = sketch.createCanvas(window.innerWidth / 3.33, 400);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      sketch.background(255, 0, 0, 255);
    };
    sketch.draw = function () {
      sketch.rect(sketch.mouseX, sketch.mouseY, 10, 10);
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

// Sketch switching mechanism
export function switchSketch(n) {
  if (currentSketch) {
    currentSketch.remove();
  }
  currentSketch = new p5(sketches[n].sketch, "p5-container");
}
