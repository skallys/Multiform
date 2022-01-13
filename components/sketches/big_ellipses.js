import { sketches, sketchWidth } from "../sketches";

//  Sketch 4
const bigEllipses = {
  name: "Big Ellipses",
  sketch: (sketch) => {
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      sketch.background(0, 0, 255, 255);
    };
    sketch.draw = () => {
      sketch.ellipse(sketch.mouseX, sketch.mouseY, 100, 100);
    };
  }
};
sketches.push(bigEllipses);
