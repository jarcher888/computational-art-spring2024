class ParticleSystem{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.particles = [];

        this.active = false;

        this.boomHeight = random(0, height/2);
        this.speed = random(3, 5);

        this.hue = random(360);
    }

    update(){

        

        if (this.pos.y < this.boomHeight){
            this.active = true;
          }else{
            fill(0, 0, 0);
            ellipse(this.pos.x, this.pos.y, 20, 20);
            this.pos.y -= this.speed;
          }

        if (this.active){
            this.particles.push(new Particle(this.pos.x, this.pos.y, this.hue));
        }


        for (let particle of this.particles){
            particle.update();
            particle.show();
        }

        for (let i = this.particles.length - 1; i >= 0; i--){
            if (this.particles[i].destroy){
                this.particles.splice(i, 1);
            }
        }
    }
}