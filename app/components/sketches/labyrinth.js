import { sketches, sketchWidth, createControl } from "../sketches";

const labyrinth = {
  name: "Labyrinth",
  sketch: (sketch) => {
    //namespacing
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      //pas besoin de toucher
      sketch.pixelDensity(2);
      //Création d'une id et d'une classe pour plus tard
      cnv.id("drawing-canvas");
      cnv.class("control-target");
      sketch.background(0);
      setupQuantityControl();
    };

    let x = 0;
    let y = 0;
    let spacing = 20;

    sketch.draw = () => {
      sketch.stroke(255);
      if(sketch.random(1) < 0.5){
          sketch.line(x,y,x + spacing,y + spacing);
      } else {
          sketch.line(x,y + spacing,x + spacing,y);
      }
      x = x + spacing;
      if(x > sketch.width){
          x = 0;
          y = y + spacing
      }
    };

    const setupQuantityControl = () => {
        let element = document.createElement("input");
        let control = createControl(element, true, {
          name: "Spacing",
          type: "range",
          min: 10,
          max: 100,
          step: 1,
          value: spacing
        });
  
        element.addEventListener("input", () => {
          control.innerHTML = element.value;
          spacing = element.value;
          resetSketch();
        });
      };

      const setupBeginControl = () => {
        let element = document.createElement("input");
        let control = createControl(element, true, {
          name: "Begin",
          type: "range",
          min: 0,
          max: 100,
          step: 1,
          value: y
        });
  
        element.addEventListener("input", () => {
          control.innerHTML = element.value;
          y = element.value;
          resetSketch();
        });
      };
  }
};
sketches.push(labyrinth);