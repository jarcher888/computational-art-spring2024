class ParticleSystem{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.particles = [];
        this.offsets = [];

        this.active = false;



    }

    update(){
        this.particles.push(new Particle(this.pos.x, this.pos.y));

        for (let i = 0; i < this.particles.length; i++){
            this.offsets.push(i + random(100));
        }

        if (this.active){
            for (let particle of this.particles){
                particle.update();
                particle.show();
            }
        }

        for (let i = this.particles.length - 1; i >= 0; i--){
            if (this.particles[i].lifetime < 0){
                this.particles.splice(i, 1);
            }
        }
    }
}