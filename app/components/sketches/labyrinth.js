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
      setupStrokeControl();
    };

    let x = 0;
    let y = 0;
    let spacing = 30;
    let strk = 1

    sketch.draw = () => {
      sketch.stroke(strk, 0, 255);
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
      if (y + spacing > sketch.height) {
        sketch.background(0);
        y = 0;
      }
    };

    const setupQuantityControl = () => {
      // create the element
        let element = document.createElement("input");
        // use helper function to create control. First prameter is the control element itself.
        let control = createControl(element, true, {
          name: "Spacing",
          type: "range",
          min: 10,
          max: 100,
          step: 1,
          value: spacing
        });
  
        //Listen to input changes and set resdable value
        element.addEventListener("input", () => {
          control.innerHTML = element.value;
          spacing = parseInt(element.value, 10);
          //resetSketch()
        });
      };

      const resetSketch = (_x, _y) => {
        sketch.background(0);
        x = _x;
        y = _y;
      }

      const setupStrokeControl = () => {
        let element = document.createElement("input");
        let control = createControl(element, true, {
          name: "color",
          type: "range",
          min: 0,
          max: 255,
          step: 1,
          value: strk
        });
  
        element.addEventListener("input", () => {
          control.innerHTML = element.value;
          strk = parseInt(element.value, 10);
        });
      };
  }
};
sketches.push(labyrinth);