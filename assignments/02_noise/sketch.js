let numCircles = 10;
let rotateAngle = 0;
let alpha = .01;


function setup() {
 createCanvas(800, 600);
 colorMode(HSB);
 angleMode(RADIANS);
 translate(400, 300);

}

let xoff = 0; 

function draw() {
  background(0, 0, 100, alpha);
  
  if (alpha == 0){
    stroke('white');
    noStroke();
  }else{
    stroke('black');
  }

  translate(400, 300);
  let radius = map(noise(xoff), 0, 1, 50, 500);
  noFill();
  circle(0, 0, radius / 2);
  let angle = radians(360 / numCircles);
  rotate(rotateAngle);
  
  rotateAngle += map(noise(xoff), 0, 1, -.1, .1);
  
  
  for (let i = 0; i < numCircles; i++){
    let hue = map(i, 0, numCircles, 0, 360);
    fill(hue, 100, 100);
    line(0, 0, cos(angle) * 50, sin(angle) * 50);
    circle(cos(angle) * radius / 2, sin(angle) * radius / 2, 10);
    angle += radians(360 / numCircles);

    xoff+=.001;
    
  }
  
}
