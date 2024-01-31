let dots = [];
let numDots = 100;
let gravity = .098;



function setup() {
 createCanvas(800, 600);
 colorMode(HSB);
 noStroke();

 for (let i = 0; i < numDots; i++){
  let x = width / numDots * i;
  dots[i] = new Dot(x, height/2, 10, i)
 }

}

function draw() {
  background(0, 0, 100)
  
  for (let i = 0; i < dots.length; i++){
    dots[i].update();
  }

}

class Dot{
  constructor(x, y, diameter, id){
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.diameter = diameter;
    
    this.id = id;
    
    this.hue = this.id / numDots * 360;
    
  }

  update(){
   // let vectorToMouse = createVector(mouseX - this.position.x, mouseY - this.position.y);
   // vectorToMouse.normalize();


   // this.velocity = vectorToMouse;

    this.velocity.y += gravity

    this.position.add(this.velocity);

    if (this.position.y > height){
      this.velocity.y *= -1;
    }

    fill(this.hue, 50, 100);
    ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
  }
}