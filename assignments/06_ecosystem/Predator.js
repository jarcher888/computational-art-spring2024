
class Predator {
    constructor(x, y, target, index) {
        // For more detailed comments on how pos, vel, acc, and addForce work
        // see the Dot example from 2-15-24.

        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.acc = createVector(0, 0);

        this.target = target;
        this.maxSpeed = 6;
        this.maxForce = 0.05;
        this.cohesionScalar = 2;
        

        this.dim = 10 + random(5);

        this.hue = random(0, 70);
        this.saturation = 100;
        this.brightness = 100;

        this.range = 100;

        this.mass = 1;

        this.index = index;

        this.hunger = random(400, 600);
        this.maxHunger = this.hunger;
        this.lifetime = 0;
        background(0, 0, 100)
    }

    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    seek(t, arrive, i) {
        // 1. Compute the desired velocity and set it to be maxSpeed
        let desired = p5.Vector.sub(t, this.pos);

        // desired.mult(-1);

        let distance = desired.mag();

        // If the caller passed in true, and we are close to the target, scale our
        // speed based on the distance.
        if (arrive && distance < 20) {
            // let speed = map(distance, 0, 100, 0, this.maxSpeed);
            // desired.setMag(speed);
            prey.splice(i, 1);
            this.hunger = this.maxHunger;
        } else {
            desired.setMag(this.maxSpeed);
        }

        // 2. Compute the force by seeing the the change is in velocities
        // to move from the current velocity to the desired velocity and limit
        // its magnitude.
        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxForce);

        // 3. Apple this "steering" force. 
        this.addForce(steer);
    }

    wrap() {
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
    }


    getClosePredators(){
        let closePredators = [];
        for (let predator of predators) {
            if (predator !== this) {
                if (dist(predator.pos.x, predator.pos.y, this.pos.x, this.pos.y) < this.range) {
                    closePredators.push(predator);
                }
            }
        }
        return closePredators;
    }
    cohesion(closePredators) {
        if (closePredators.length > 0) {
            let sumPositions = createVector(0, 0);
            for (let predator of closePredators) {
                sumPositions.add(predator.pos);
            }
            sumPositions.div(closePredators.length);
            let desired = p5.Vector.sub(sumPositions, this.pos);
            desired.setMag(this.maxSpeed);
            let steeringForce = p5.Vector.sub(desired, this.vel);
            steeringForce.limit(this.maxForce);

            return steeringForce;
        }

        return createVector(0, 0);
    }

    separation(closePredators){
        let sumOfAnglesToPredators = createVector(0,0);
        for (let predator of closePredators){
            let dirToPredator = p5.Vector.sub(predator.pos, this.pos);
            sumOfAnglesToPredators.add(dirToPredator);
        }
        if (closePredators.length !== 0){
            sumOfAnglesToPredators.div(closePredators.length);
        }
        sumOfAnglesToPredators.setMag(this.maxSpeed);
        sumOfAnglesToPredators.mult(-1);

        let steeringForce = p5.Vector.sub(sumOfAnglesToPredators, this.vel);
        steeringForce.limit(this.maxForce);

        return steeringForce;

    }

    alignment(closePredators){
        let sumOfVelocities = createVector(0,0);
        for (let predator of closePredators){
            sumOfVelocities.add(predator.vel);
        }
        if (closePredators.length > 0){
            sumOfVelocities.div(closePredators.length);
        }
        sumOfVelocities.setMag(this.maxSpeed);

        let steeringForce = p5.Vector.sub(sumOfVelocities, this.vel);
        steeringForce.limit(this.maxForce);

        return steeringForce;

    }

    getClosestPrey(){
        let closestPrey = prey[0];
        for (let prey_ of prey) {
            if (prey_ !== this) {
                if (dist(prey_.pos.x, prey_.pos.y, this.pos.x, this.pos.y) < dist(closestPrey.pos.x, closestPrey.pos.y, this.pos.x, this.pos.y)) {
                    closestPrey = prey_;
                }
            }
        }
        return closestPrey;
    }


    update() {
        this.lifetime++;

        if (this.lifetime % 500 == 0){
            predators.push(new Predator(random(this.pos.x - 10, this.pos.x + 10), random(this.pos.y - 10, this.pos.y + 10), target, predators.length));
        }
        

        this.hunger -= .5;

        if (this.hunger < this.maxHunger / 2){
            if (this.cohesionScalar > 0){
                this.cohesionScalar-=.1;
            }
            let closestPrey = this.getClosestPrey()
            this.seek(closestPrey.pos, true, closestPrey.index);
            
        }else if (this.cohesionScalar < 3){
            this.cohesionScalar += .1;
        }

        if (this.hunger < 0){
            predators.splice(this.index, 1);
        }

        
        let closePredators = this.getClosePredators();

        // What actions is this agent pursuing?
        let cohesionForce = this.cohesion(closePredators);
        
        cohesionForce.mult(this.cohesionScalar);
        this.addForce(cohesionForce);
        

        let separationForce = this.separation(closePredators);
        separationForce.mult(1);
        this.addForce(separationForce);

        let alignmentForce = this.alignment(closePredators);
        alignmentForce.mult(1);
        this.addForce(alignmentForce);

        // this.dim = map(this.pos.y, height, 0, 1, 20)

        

        // MOVEMENT
        this.vel.add(this.acc); // Apply acceleration (and thus the forces) to vel
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel); // Apply velocity to position


        this.acc.set(0,0);
    }

    show() {
        push();


        translate(this.pos.x, this.pos.y);

        // fill(0, 0, 10, 0.08);
        // noStroke();
        // ellipse(0, 0, this.range * 2);

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
