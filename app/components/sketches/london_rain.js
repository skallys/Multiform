import { sketches, sketchWidth, createControl } from "../sketches";

const londonRain = {
  name: "London rain",
  sketch: (sketch) => {
    //namespacing

    let t = 10;
    //set up
    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      //pas besoin de toucher
      sketch.pixelDensity(2);
      //Création d'une id et d'une classe pour plus tard
      cnv.id("drawing-canvas");
      cnv.class("control-target");
      sketch.background(230);
      setupSizeControl();
      setupResetControl();
    };
    //Draw
    sketch.draw = () => {
      if (sketch.mouseIsPressed) {
        sketch.line(
          sketch.mouseX,
          sketch.mouseY,
          sketch.mouseX,
          sketch.mouseY + t
        );
        sketch.stroke(0);
      }
    };

    const setupSizeControl = () => {
      // create the element
      let element = document.createElement("input");
      // use helper function to create control. First prameter is the control element itself.
      let control = createControl(element, true, {
        name: "rain drop's size",
        type: "range",
        min: 10,
        max: 200,
        step: 1,
        value: t,
      });

      //Listen to input changes and set resdable value
      element.addEventListener("input", () => {
        control.innerHTML = element.value;
        t = parseInt(element.value, 10);
        resetSketch();
      });
    };

    const setupResetControl = () => {
      let element = document.createElement("a");
      createControl(element, false, {
        class: "resetBtn",
      });
      element.innerHTML = "Reset";
      element.addEventListener("click", () => {
        sketch.background(230);
      });
    };
  },
};
sketches.push(londonRain);
