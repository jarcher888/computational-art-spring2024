class Vehicle{
    constructor(x, y, target){
        this.pos = createVector(x, y);
        this.vel = createVector(1,0);
        this.acc = createVector(0, 0);

        this.target = target;
        this.maxSpeed = 3;
        this.maxForce = .4;

        this.dim = 20;

        this.mass = 1;
    }

    addForce(force){
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }


    wrap(){
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
        
    }

    seek(){
        let desired = p5.Vector.sub(this.target, this.pos);
        desired.setMag(this.maxSpeed);

        let force = p5.Vector.sub(desired, this.vel);
        force.limit(this.maxForce);
        this.addForce(force);
    }


    update(){
        this.seek();

        // this.addForce(gravity);

        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);

        //this.wrap();

        this.acc.mult(0);
    }

    show(){

        push();

        translate(this.pos.x, this.pos.y);
        let angle = this.vel.heading();
        rotate(angle);

        beginShape();

        vertex(this.dim, 0);
        vertex(-this.dim, this.dim/2);
        vertex(-this.dim, -this.dim/2);

        endShape(CLOSE);
        

        pop();

    }
}