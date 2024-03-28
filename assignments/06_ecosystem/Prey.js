class Prey{
    constructor(x, y, target, index){
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.acc = createVector(0, 0);

        this.target = target;
        this.maxSpeed = 3;
        this.maxForce = 0.05;

        this.radius = 5 + random(5);

        this.hue = random(170, 280);
        this.saturation = 100;
        this.brightness = 100;

        this.range = 100;

        this.mass = 1;

        this.lifetime = random(300, 500);
        this.maxLife = this.lifetime;

        this.index = index

        //Add lifetime ('reproduction')
        background(0, 0, 100)
    }

    wrap(){
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
    }

    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }
    cohesion(closePrey) {
        if (closePrey.length > 0) {
            let sumPositions = createVector(0, 0);
            for (let prey_ of closePrey) {
                sumPositions.add(prey_.pos);
            }
            sumPositions.div(closePrey.length);
            let desired = p5.Vector.sub(sumPositions, this.pos);
            desired.setMag(this.maxSpeed);
            let steeringForce = p5.Vector.sub(desired, this.vel);
            steeringForce.limit(this.maxForce);

            return steeringForce;
        }

        return createVector(0, 0);
    }

    separation(closePrey){
        let sumOfAnglesToPrey = createVector(0,0);
        for (let prey_ of closePrey){
            let dirToPrey = p5.Vector.sub(prey_.pos, this.pos);
            sumOfAnglesToPrey.add(dirToPrey);
        }
        if (closePrey.length !== 0){
            sumOfAnglesToPrey.div(closePrey.length);
        }
        sumOfAnglesToPrey.setMag(this.maxSpeed);
        sumOfAnglesToPrey.mult(-1);

        let steeringForce = p5.Vector.sub(sumOfAnglesToPrey, this.vel);
        steeringForce.limit(this.maxForce);

        return steeringForce;

    }

    //FLEE function
    flee(t) {
        // 1. Compute the desired velocity and set it to be maxSpeed
        let desired = p5.Vector.sub(t, this.pos);

        desired.mult(-1);

        let distance = desired.mag();

        // If the caller passed in true, and we are close to the target, scale our
        // speed based on the distance.
        
        desired.setMag(this.maxSpeed);
        

        // 2. Compute the force by seeing the the change is in velocities
        // to move from the current velocity to the desired velocity and limit
        // its magnitude.
        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxForce);

        // 3. Apple this "steering" force. 
        this.addForce(steer);
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




    getClosePrey(){
        let closePrey = [];
        for (let prey_ of prey) {
            if (prey_ !== this) {
                if (dist(prey_.pos.x, prey_.pos.y, this.pos.x, this.pos.y) < this.range) {
                    closePrey.push(prey_);
                }
            }
        }
        return closePrey;
    }
    
    update(){
        let closePredators = this.getClosePredators();
        if (closePredators){
            for (let predator of closePredators){
                this.flee(predator.pos)
            }
        }

        this.lifetime--;
        if (this.lifetime < 0){
            let x = random(100)
            if (x > 80 && prey.length < 250){
                prey.push(new Prey(random(this.pos.x - 10, this.pos.x + 10), random(this.pos.y - 10, this.pos.y + 10), this.target, prey.length));
            }
            this.lifetime = this.maxLife;
        }


        let closePrey = this.getClosePrey();

        let cohesionForce = this.cohesion(closePrey);
        
        cohesionForce.mult(2);
        this.addForce(cohesionForce);

        let separationForce = this.separation(closePrey);
        separationForce.mult(1);
        this.addForce(separationForce);

        


        this.vel.add(this.acc); // Apply acceleration (and thus the forces) to vel
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel); // Apply velocity to position


        this.acc.set(0,0);
    }

    show(){
        push();


        translate(this.pos.x, this.pos.y);

        // let angle = this.vel.heading();
        // rotate(angle);

        fill(this.hue, this.saturation, this.brightness);

        ellipse(0, 0, this.radius);

        pop();
    }

    
}