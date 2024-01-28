let dots = [];
let numDots = 50;
let saturation = 100;
let value = 100;
let scaleFactor = 1;


function setup() {
 createCanvas(800, 600);
 colorMode(HSB);
 noStroke();


 for (let i = 0; i < numDots; i++){
  let x = width / numDots * i;
  dots[i] = new Dot(x, random(0, 600), 30, i / numDots * 360);
 }

}

function draw() {
  background(0, 0, 100);
  
  for (let i = 0; i < dots.length; i++){
    dots[i].update();
  }

}


class Dot {
  constructor(x, y, diameter, hue){
    this.hue = hue;
    this.position = createVector(x, y);
    //this.velocity = createVector(5, 3);
    this.diameter = diameter;

  }

  update(){
    if (scaleFactor < 25){
      scaleFactor += .0001;
    }
    this.position.x += random(-scaleFactor * 2, scaleFactor * 2);
    this.position.y += random(-scaleFactor * 2, scaleFactor * 2);

    this.diameter += scaleFactor * .1;
  
    //saturaton -= .0000001;
    value -= .002;
    saturation -= .003;

    circle(this.position.x, this.position.y, this.diameter);
  
    fill(this.hue % 360, saturation, value);
  }

  
}

