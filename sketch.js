import p5 from "p5";

export let currentSketch;

export const sketchSelect = document.getElementById("p5-select");

const a = (sketch) => {
  sketch.setup = () => {
    let cnv = sketch.createCanvas(window.innerWidth / 3.33, 400);
    sketch.pixelDensity(2);
    cnv.id("drawing-canvas");
    sketch.background(255, 0, 0, 255);
  };
  sketch.draw = function () {
    sketch.rect(sketch.mouseX, sketch.mouseY, 10, 10);
  };
};

const b = (sketch) => {
  sketch.setup = () => {
    let cnv = sketch.createCanvas(window.innerWidth / 3.33, 400);
    sketch.pixelDensity(2);
    cnv.id("drawing-canvas");
    sketch.background(40, 40, 40, 255);
  };
  sketch.draw = function () {
    sketch.ellipse(sketch.mouseX, sketch.mouseY, 10, 10);
  };
};

const c = (sketch) => {
  sketch.setup = () => {
    let cnv = sketch.createCanvas(window.innerWidth / 3.33, 400);
    sketch.pixelDensity(2);
    cnv.id("drawing-canvas");
    sketch.background(0, 255, 0, 255);
  };
  sketch.draw = function () {
    sketch.ellipse(sketch.mouseX, sketch.mouseY, 50, 50);
  };
};

const d = (sketch) => {
  sketch.setup = () => {
    let cnv = sketch.createCanvas(window.innerWidth / 3.33, 400);
    sketch.pixelDensity(2);
    cnv.id("drawing-canvas");
    sketch.background(0, 0, 255, 255);
  };
  sketch.draw = function () {
    sketch.ellipse(sketch.mouseX, sketch.mouseY, 100, 100);
  };
};

// Sketch switching mechanism
export const sketches = [a, b, c, d];
export function switchSketch(n) {
  currentSketch.remove();
  currentSketch = new p5(sketches[n], "p5-container");
}

currentSketch = new p5(a, "p5-container");
// sketchSelect.addEventListener("input", function () {
//   document.getElementById("drawing-canvas").remove();
//   currentSketch = new p5(sketches[this.value], "p5-container");
// });
