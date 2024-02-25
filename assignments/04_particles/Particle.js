class Particle{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.hue = random(360);

        this.mass = random(10, 20);
        this.radius = this.mass * 3;
        
        this.lifetime = 200;
    }

    addForce(force){
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    update(){
        this.lifetime -= 2;

        if (this.lifetime > 196){
            this.addForce(exhaust);
        }

        this.addForce(gravity);
        this.addForce(wind);
        

        this.vel.add(this.acc);
        this.pos.add(this.vel);

        this.acc.mult(0);
    }

    show(){

        push();

        noStroke();

        translate(this.pos.x, this.pos.y);
        fill(this.hue, 0, 50, .5);
        ellipse(0, 0, this.radius);
        pop();

    }
}