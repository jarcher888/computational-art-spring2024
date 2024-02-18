let dots = [];
let numDots = 30;

let gravity;
let wind;

function setup() {
 createCanvas(800, 600);
 colorMode(HSB);

 gravity = createVector(0, 0.38);
 wind = createVector(-.1, 0);

 for (let i = 0; i < numDots; i++){
  let x = map(i, 0, numDots, 0, width);
  let y = random(0, height);
  dots.push(new Dot(x, y, 10, i+1));
 }
}

function draw() {
  background(0, 0, 100);

  for (let dot of dots){
    dot.update();
    dot.show();
  }
}
