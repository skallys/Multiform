import { sketches, sketchWidth } from "../sketches";

const smallEllipses = {
  name: "Small Ellipses",
  sketch: (sketch) => {
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      sketch.background(40, 40, 40, 255);
    };
    sketch.draw = () => {
      if (sketch.mouseIsPressed) {
        sketch.ellipse(sketch.mouseX, sketch.mouseY, 10, 10);
      }
    };
  }
};
sketches.push(smallEllipses);
