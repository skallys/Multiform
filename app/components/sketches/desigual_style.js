import { sketches, sketchWidth, createControl } from "../sketches";

const desigualStyle = {
  name: "Desigual Style",
  sketch: (sketch) => {
    let clr = 0;
    //namespacing
    const rectangles = function(){
        for(let i = 0; i < 100; i++){
            let r = sketch.random(100);
            let x = sketch.random(600);
            let y = sketch.random(400);
            sketch.rect(x, y, i, r);
            sketch.noFill();
            sketch.stroke(clr, 255, 0);
        }
        setupResetControl();
        setupStrokeControl();
    }

    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      //pas besoin de toucher
      sketch.pixelDensity(2);
      //Création d'une id et d'une classe pour plus tard
      cnv.id("drawing-canvas");
      cnv.class("control-target");
      sketch.background(255,255,0);
      rectangles();
    };

    sketch.draw = () => {
    };

    const resetSketch = () => {
        sketch.background(0, 0, 255, 255);
        sketch.setup();
      }

      //le bouton reset se multiplie ?
    const setupResetControl = () => {
        let element = document.createElement("a");
        createControl(element, false, {
          class: "resetBtn"
        });
        element.innerHTML = "Reset";
        element.addEventListener("click", () => {
          resetSketch();
        });
      };

      const setupStrokeControl = () => {
        let element = document.createElement("input");
        let control = createControl(element, true, {
          name: "color",
          type: "range",
          min: 0,
          max: 255,
          step: 1,
          value: clr
        });
  
        element.addEventListener("input", () => {
          control.innerHTML = element.value;
          clr = parseInt(element.value, 10);
        });
      };
  }
};
sketches.push(desigualStyle);