
class Particle {
    constructor(x, y, h, vel) {
        this.pos = createVector(x, y);
        this.vel = vel;
        this.acc = createVector(0, 0);

        this.hue = (h + random(20)) % 360;

        this.mass = random(1, 5);

        // Make the radius have something to do with the mass.
        this.radius = 1 + sqrt(this.mass);

        this.lifetime = random(50, 80);
    }


    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }


    update() {
        this.lifetime--;
        if (this.lifetime < 0) {
            this.destroy = true;
        }

        // MOVEMENT
        this.vel.add(this.acc); // Apply acceleration (and thus the forces) to vel
        this.vel.limit(5); // This limits the magnitude of the velocity vector
        this.pos.add(this.vel); // Apply velocity to position

        this.acc.mult(0);
    }

    show() {
        push();

        noStroke();

        translate(this.pos.x, this.pos.y);
        // Set fill with lifetime affecting alpha
        fill(this.hue, 50, 100, 0.5 - map(this.lifetime, 0, 100, .5, 0));
        ellipse(0, 0, this.radius * 2);

        pop();
    }
}
