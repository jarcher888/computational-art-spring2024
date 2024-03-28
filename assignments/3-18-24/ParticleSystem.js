
class ParticleSystem {
    constructor(x, y, parent) {
        this.pos = createVector(x, y);
        this.particles = [];

        this.active = true;

        this.hue = random(360);

        this.parent = parent;
    }

    update() {
        // If active, create a particle every time update is called
        if (this.active) {
            if (frameCount % 5 === 0) {
                this.particles.push(new Particle(this.pos.x, this.pos.y, this.hue, this.parent.vel));
            }
        }

        // Update and display all the particle system's particles
        for (let particle of this.particles) {
            particle.update();
            particle.show();
        }

        // If the particle's lifetime reached zero, remove it from the system's array
        for (let i = this.particles.length - 1; i >= 0; i--) {
            if (this.particles[i].destroy) {
                this.particles.splice(i, 1);
            }
        }
    }
}
