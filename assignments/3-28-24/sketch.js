let count = 0;

let segments = [];
let numGenerations = 5;

function setup() {
 createCanvas(600, 400);
 colorMode(HSB);

 background(0, 0, 100);

 stroke(0, 0, 100);

 rectMode(CENTER);
 noFill();

 let start = createVector(100, 100);
 let end = createVector(500, 100);
 segments.push(new KochLine(start, end));

 start = createVector(100, 100);
 end = createVector(300, 300);
 segments.push(new KochLine(end, start));

 start = createVector(300, 300);
 end = createVector(500, 100);
 segments.push(new KochLine(end, start));

 for (let i = 0; i < numGenerations; i++){
    generate();
 }

}

function draw() {
  background(0, 0, 0);

  for (let segment of segments){
    segment.update();
    segment.show();
  }

  // count = 0;

  // push();
  // translate(width / 2, height/2);
  // scale(map(noise(frameCount * 0.002), 0, 1, 1, 5));
  // rotate(frameCount * 0.005);
  // drawCircles(0, 0, 400);
  // pop();

}

function generate(){
  let next = [];
  for (let segment of segments){
    segment.createKochLinePoints();
    next.push(new KochLine(segment.a, segment.b));
    next.push(new KochLine(segment.b, segment.c));
    next.push(new KochLine(segment.c, segment.d));
    next.push(new KochLine(segment.d, segment.e));
  }
  segments = next;
}

function drawCircles(x, y, diameter){
  count++;

  let h = map(count + frameCount * 0.1, 0, 24, 0, 360) % 360;
  stroke(h, 50, 100);

  if (count % 2 === 0){
    ellipse(x, y, diameter);
  }else{
    rect(x, y, diameter, diameter);
  }
  
  if (diameter > 1){
    drawCircles(x, y, diameter/map(sin(frameCount * 0.01), -1, 1, 1.1, 2));
  }else {
    // console.log(count);
  }
}