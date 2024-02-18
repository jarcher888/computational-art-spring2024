let dots = [];
let numDots = 5;

let gravitationalConstant = 0.00001;
let downwardGravity;
let wind;
let springs = [];

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);

  downwardGravity = createVector(0, 0.38);
  wind = createVector(-0.1, 0);
  
  // Create all the dots
  for (let i = 0; i < numDots; i++) {
    let x = map(i, 0, numDots, 100, width);
    let y = 100;
    dots.push(new Dot(x, y, i+1));
  }


  for(let i = 1; i < dots.length; i++){
    springs.push(new Spring(dots[i-1], dots[i], 50, -.1));
  }

  background(0, 0, 100);
}

function draw() {
  background(0, 0, 100, 0.1);

  dots[0].pos.x = mouseX;
  dots[0].pos.y = mouseY;


  // Update and draw all the dots
  for (let dot of dots) {
    dot.update();
    dot.show();
  }

  for (let spring of springs){
    spring.update();
    spring.show();
  }

  noStroke();
  fill(360 * .65, 60, 100, .4);
  rect(0, height/2, width, height/2);
}