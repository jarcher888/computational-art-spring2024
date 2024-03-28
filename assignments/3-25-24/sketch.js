let count = 0;

function setup() {
 createCanvas(800, 600);
 colorMode(HSB);

//  noFill();
//  drawCircle(width /2, height / 2, 400);
  background(0, 0, 100);

  translate(width/2, height);
  branch(150);
}

function draw() {
   //background(0, 0, 100)
}

function drawCircle(x, y, w){
  stroke(map(count, 0, 100000, 0, 360), 60, 100);
  ellipse(x, y, w);

  count++;

  if (w > 5){
    drawCircle(x,y, w/2)
    drawCircle(x-50, y, w/2);
    drawCircle(x+50, y, w/2);
    drawCircle(x, y-50, w/2);
    drawCircle(x, y+50, w/2);
  }
}

function branch(l){
  count++;

  strokeWeight(1 + count * 0.1)
  line(0, 0, 0, -l);
  translate(0, -l);

  l = l * .6;

  if (l > 5){
    if (random() > .3){
      push();
      rotate(radians(-45));
      branch(l)
      pop();
    }

    push();
    rotate(radians(45));
    branch(l)
    pop();
  }
}