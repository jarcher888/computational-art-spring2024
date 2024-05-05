class Predator{
    constructor(img, x, y, tag){
        this.img = img;
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        this.tag = tag;

        this.speed = .01;
        this.maxSpeed = 3;

    }

    draw(){
        image(this.img, this.pos.x, this.pos.y);
        
    }

    update(){
        this.chase();

        this.vel.sub(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);

        this.acc.set(0, 0);
    
        if (this.pos.x < -50){
            this.pos.x = width + random(40, 60);
            currentSeason.prey.pos.x = width
            currentSeason.nextSeason();
        }
    }

    chase(){
        let vecToPrey = p5.Vector.sub(currentSeason.prey.pos, this.pos);
        if (vecToPrey.mag() < 100){
            this.speed += .01;
        }else if (vecToPrey.mag() > 100 && this.speed > 1){
            this.speed -= .01;
        }
        this.acc.x += this.speed;
    }
}