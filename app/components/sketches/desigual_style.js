import { sketches, sketchWidth, createControl } from "../sketches";

const desigualStyle = {
  name: "Desigual Style",
  sketch: (sketch) => {
    let clr = 0;
    let rectangles = [];
    //namespacing

    class Rectangle {
      constructor() {
        this.x = sketch.random(sketch.width);
        this.y = sketch.random(sketch.height);
        this.w = sketch.random(100);
        this.h = sketch.random(100);
        this.c = [255, 0, 0];
      }

      draw() {
        sketch.noFill();
        sketch.stroke(this.c[0], this.c[1], this.c[2]);
        sketch.rect(this.x, this.y, this.w, this.h);
      }
      changeColor(r, g, b) {
        this.c = [r, g, b];
      }
    }

    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      //pas besoin de toucher
      sketch.pixelDensity(2);
      //Création d'une id et d'une classe pour plus tard
      cnv.id("drawing-canvas");
      cnv.class("control-target");
      sketch.background(220);
      setupResetControl();
      setupStrokeControl();
      for (let i = 0; i < 100; i++) {
        let r = new Rectangle();
        rectangles.push(r);
      }
    };

    sketch.draw = () => {
      for (let r of rectangles) {
        r.draw();
      }
    };

    const resetSketch = () => {
      sketch.background(220);
      rectangles = [];
      for (let i = 0; i < 100; i++) {
        let r = new Rectangle();
        rectangles.push(r);
      }
    };

    const setupResetControl = () => {
      let element = document.createElement("a");
      createControl(element, false, {
        class: "resetBtn",
      });
      element.innerHTML = "Reset";
      element.addEventListener("click", () => {
        resetSketch();
      });
    };
    //color
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
        for (let r of rectangles) {
          r.changeColor(parseInt(element.value, 10), 0, 0);
        }
        // clr = parseInt(element.value, 10);
      });
    };
  },
};
sketches.push(desigualStyle);
