import { sketches, sketchWidth, createControl } from "../sketches";

//  Sketch 4
const randomEllipses = {
  name: "Random Ellipses",
  sketch: (sketch) => {
    let quantity = 100;

    class Ball {
      constructor(posX, posY, speedX, speedY) {
        this.posX = posX;
        this.posY = posY;
        this.speedX = speedX;
        this.speedY = speedY;
        sketch.noStroke();
      }
      update() {
        sketch.fill(sketch.random(0, 255));
        this.posX += this.speedX;
        this.posY += this.speedY;
        sketch.ellipse(this.posX, this.posY, 3, 3);
      }
    }

    const balls = [];
    const createBalls = (n) => {
      for (let i = 0; i < n; i++) {
        let _ball = new Ball(
          sketch.random(0, sketch.width),
          sketch.random(0, sketch.height),
          sketch.random(-3, 3),
          sketch.random(-3, 3)
        );
        balls.push(_ball);
      }
    };

    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketchWidth, 400);
      sketch.pixelDensity(2);
      cnv.id("drawing-canvas");
      sketch.background(0, 0, 255, 255);
      createBalls(quantity);
      sketch.setupResetControl();
    };
    sketch.draw = () => {
      balls.forEach((ball) => {
        ball.update();
      });
    };

    sketch.setupResetControl = () => {
      let element = document.createElement("a");
      let control = createControl(element, false, {
        class: "reset"
      });
      element.innerHTML = "Reset";

      element.addEventListener("click", () => {
        sketch.background(0, 0, 255, 255);
        createBalls(quantity);
      });
    };
  }
};
sketches.push(randomEllipses);
