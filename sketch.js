import p5 from "p5";

let sketch = function (p) {
  let offset = 0;
  p.setup = function () {
    let cnv = p.createCanvas(window.innerWidth / 3.33, 400);
    p.pixelDensity(5);
    cnv.id("drawing-canvas");
  };
  p.draw = function () {
    p.background(0, 0, 0, 255);

    for (let i = 0; i < p.width; i += 5) {
      p.stroke(255, 255, 255);
      p.line(i + offset, 0, i * offset, p.height);
    }
    p.rect(p.mouseX, p.mouseY, 10, 10);
    offset += 0.001;
  };
};

new p5(sketch, "p5-container");
