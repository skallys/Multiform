import { sketches, sketchWidth, createControl } from "../sketches";

const desigualStyle = {
  name: "Desigual Style",
  sketch: (sketch) => {
    //namespacing
    const rectangles = function(){
        for(let i = 0; i < 100; i++){
            let r = sketch.random(100);
            let x = sketch.random(600);
            let y = sketch.random(400);
            sketch.rect(x, y, i, r);
            sketch.noFill();
            sketch.stroke(1);
        }
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

  }
};
sketches.push(desigualStyle);