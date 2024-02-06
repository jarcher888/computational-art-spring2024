let circles = [];
let numCircles = 20;
let rotateAngle = 0;
let offsets = [];
//let angle = radians(18);


function setup() {
 createCanvas(800, 600);
 colorMode(HSB);
 angleMode(RADIANS);
 translate(400, 300);


//  for (let i = 0; i < numCircles; i++){
//   circles[i] = new customCircle(cos(radians(18)) * 50, sin(radians(18)) * 50, 10, 0);
//   offsets[i] = 0;
//  }

}

//let xoff = 0;

let xoff = 0;
let rotateOff = 0;
let radiusOff = 0;

function draw() {
  background(0, 0, 100);
  
  // for (let i = 0; i < numCircles; i++){
  //   circles[i].update();
  // }


  // let rotateAngle = 360 / numCircles;
  // let smallCircleRadius = 50;
  
  //radians(rotateAngle);
  //rotate(angle);
  //strokeWeight(10);
  translate(400, 300);
  let radius = map(noise(radiusOff), 0, 1, 50, 200);
  circle(0, 0, 50);
  let angle = radians(18);
  rotate(rotateAngle);
  
  
  //line(0, 0, x, sin(3 *PI/2) * 50);

  
  rotateAngle += map(noise(rotateOff), 0, 1, -.1, .1);
  //console.log(baseAngle);
  //rotateAngle += rotateAngle;
  
  for (let i = 0; i < numCircles; i++){
    let x = map(noise(xoff), 0, 1, radius - 25, radius + 25);
    //line(0, 0, cos(angle) * 50, sin(angle) * 50);
    circle(cos(angle) * radius / 2 + x, sin(angle) * radius / 2, 10);
    angle += radians(18);

    xoff+=.01;
    
  }
    

  
}

// class customCircle{
//   constructor(x, y, radius, offset){
//     this.position = createVector(x, y);
//     this.radius = radius;
//     this.offset = offset;
//   }

//   update(){
//     fill(255, 0, 0);
//     ellipse(this.position.x, this.position.y, this.radius / 2);
    
//   }
// }
