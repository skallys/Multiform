import { sketches, sketchWidth } from "../sketches";

const rectangles = {
  name: "Rectangles",
  sketch: (sketch) => {
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      cnv.class("control-target");
      sketch.background(0, 255, 255, 255);
    };
    sketch.draw = () => {
      if (
        document
          .querySelector(".app-control#canvas")
          .classList.contains("active")
      ) {
        sketch.rect(sketch.mouseX, sketch.mouseY, 100, 100);
      }
    };
  }
};
sketches.push(rectangles);
