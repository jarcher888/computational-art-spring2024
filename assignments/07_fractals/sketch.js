let count;

function setup() {
 createCanvas(800, 600);
 colorMode(HSB);
 noFill();

}

function draw() {
  
  background(0, 0, 0, .05);
  stroke(0, 0, 100)

  count = 0;

  push();
  translate(width / 2, height/2);
  scale(map(sin(frameCount * 0.01), -1, 1, -1.5, 35));
  rotate(-map(sin(frameCount * 0.01), -1, 1, 1, 5));
  drawCircle(0, 0, 400);
  pop();
  

}

function drawCircle(x, y, r){
  count++;

  let h = map(count + frameCount * .01, 0, 1023, 0, 360) % 360;

  stroke(h, 50, 100);


  if (r > 1){

    
    ellipse(x, y, r);

    drawCircle(x + 70, y, r/2);
    drawCircle(x - 50, y, r/2);
    drawCircle(x, y + 30 , r/10);
    drawCircle(x, y - 30, r/10);
  }else {
    // console.log(count);
  }
    
  
}

