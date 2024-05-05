class Prey{
    constructor(img, x, y){
        this.img = img;
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        this.speed = .01;
        this.maxSpeed = 3;

        

    }

    draw(){
        image(this.img, this.pos.x, this.pos.y);
    }

    update(){
            this.flee()

            this.vel.sub(this.acc);
            this.vel.limit(this.maxSpeed);
            this.pos.add(this.vel);
        
    }

    flee(){
    
        let vecToPredator = p5.Vector.sub(currentSeason.predator.pos, this.pos);
        
        if (vecToPredator.mag() < 100){
            this.speed += .1;
        }else if (vecToPredator.mag() > 100 && this.speed > 1){
            this.speed -= 1;
        }
        this.acc.x += this.speed;
    }
}
