import { sketches, sketchWidth, createControl } from "../sketches";

const multiLine = {
  name: "Multi Line",
  sketch: (sketch) => {
    let lineQuantity = 5;
    let clr = 1;
    //namespacing
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      cnv.class("control-target");
      sketch.background(0);
      setupQuantityControl();
      setupStrokeControl();
    };
    sketch.draw = () => {
      sketch.background(0);
      sketch.stroke(0, clr, 255);
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

    //espace entre les lignes
    const setupQuantityControl = () => {
      let element = document.createElement("input");
      let control = createControl(element, true, {
        name: "Spacing",
        type: "range",
        min: 5,
        max: 100,
        step: 1,
        value: lineQuantity,
      });

      element.addEventListener("input", () => {
        control.innerHTML = element.value;
        lineQuantity = parseInt(element.value, 10);
      });
    };

    const setupStrokeControl = () => {
      let element = document.createElement("input");
      let control = createControl(element, true, {
        name: "Color",
        type: "range",
        min: 0,
        max: 255,
        step: 1,
        value: clr,
      });

      element.addEventListener("input", () => {
        control.innerHTML = element.value;
        clr = parseInt(element.value, 10);
      });
    };
  },
};
sketches.push(multiLine);
