import p5 from "p5";

let sketch = function (p) {
  p.setup = function () {
    let cnv = p.createCanvas(window.innerWidth / 3.33, 400);
    cnv.id("drawing-canvas");
    p.background(0, 0, 0, 1);
  };
  p.draw = function () {
    p.rect(p.mouseX, p.mouseY, 10, 10);
  };
};

new p5(sketch, "p5-container");
