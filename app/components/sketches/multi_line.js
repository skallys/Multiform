import { sketches, sketchWidth, createControl } from "../sketches";

const multiLine = {
  name: "Multi Line",
  sketch: (sketch) => {
    let lineQuantity = 5;
    //namespacing
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      cnv.class("control-target");
      sketch.background(0);
      setupQuantityControl();
    };
    sketch.draw = () => {
      sketch.background(0);

      sketch.stroke(255);
      for (let x = 0; x <= sketch.width; x += sketch.width / 5) {
        for (let y = 0; y <= sketch.height; y += sketch.height / 3) {
          for (let i = 0; i <= sketch.width / 5; i += lineQuantity) {
            if (((x + y) / 2) % 2 == 0) {
              sketch.line(x, y, x - i, y - sketch.height / 3);
            } else {
              sketch.line(x, y, x + i, y + sketch.height / 3);
            }
          }
        }
      }
    };
    const setupQuantityControl = () => {
      let element = document.createElement("input");
      let control = createControl(element, true, {
        name: "Quantity",
        type: "range",
        min: 1,
        max: 5,
        step: 0.2,
        value: lineQuantity
      });

      element.addEventListener("input", () => {
        control.innerHTML = element.value;
        lineQuantity = element.value;
      });
    };
  }
};
sketches.push(multiLine);
