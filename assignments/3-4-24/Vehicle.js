class Vehicle {
    constructor(x, y, target) {
        // For more detailed comments on how pos, vel, acc, and addForce work
        // see the Dot example from 2-15-24.

        this.pos = createVector(x, y);
        this.vel = createVector(1, 0);
        this.acc = createVector(0, 0);

        this.target = target;
        this.maxSpeed = 2;
        this.maxForce = 0.1;

        this.dim = 5 + random(5);

        this.hue = 0;
        this.saturation = 0;
        this.brightness = random(0, 80);

        this.mass = 1;
    }

    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    seek(t, arrive) {
        // 1. Compute the desired velocity and set it to be maxSpeed
        let desired = p5.Vector.sub(t, this.pos);
        let distance = desired.mag();
        let speed = this.maxSpeed;

        if (arrive && distance < 100){
            speed = map(distance, 0, 100, 0, this.maxSpeed);
        }

        desired.setMag(speed);

        // 2. Compute the force by seeing the the change is in velocities
        // to move from the current velocity to the desired velocity and limit
        // its magnitude.
        let force = p5.Vector.sub(desired, this.velocity);
        force.limit(this.maxForce);

        // 3. Apple this "steering" force. 
        this.addForce(force);
    }

    wrap(){
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
        
    }

    flee(t) {

        let desired = p5.Vector.sub(t, this.pos);

        if (desired.mag() < 100){

        
            desired.setMag(this.maxSpeed);

        
            let force = p5.Vector.sub(desired, this.velocity);
            force.limit(this.maxForce);
            force.mult(-1);

         
            this.addForce(force);
        }
    }

    update() {
        // What actions is this agent pursuing?
        this.seek(this.target, true);
        // this.flee(this.target);

        // MOVEMENT
        this.vel.add(this.acc); // Apply acceleration (and thus the forces) to vel
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel); // Apply velocity to position

        this.acc.set(0,0);
        this.wrap();
    }

    show() {
        push();

        translate(this.pos.x, this.pos.y);

        // Heading is the amount of rotation
        let angle = this.vel.heading();
        rotate(angle);

        fill(this.hue, this.saturation, this.brightness);

        // Draw a triangle
        beginShape();
        vertex(this.dim, 0);
        vertex(-this.dim, this.dim/2);
        vertex(-this.dim, -this.dim/2);
        endShape(CLOSE);

        pop();
    }
}