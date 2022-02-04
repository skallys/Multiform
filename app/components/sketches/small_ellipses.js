import { sketches, sketchWidth } from "../sketches";

const smallEllipses = {
  name: "Small Ellipses",
  sketch: (sketch) => {
    //namespacing
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      //pas besoin de toucher
      sketch.pixelDensity(2);
      //Création d'une id et d'une classe pour plus tard
      cnv.id("drawing-canvas");
      cnv.class("control-target");

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
