class Rain{
    constructor(x, y){
        this.pos = createVector(x, y);
        

    }

    draw(){
        push();
        noStroke();
        fill(240, 70, 70);
        ellipse(this.pos.x, this.pos.y, 1, 50);
        pop();
    }

    update(){

        if (this.pos.y  + 25 < height - 100){
            this.pos.y += 3;
        }else{
            this.wrap();
        }
    }

    wrap(){
        this.pos.x = random(width);
        this.pos.y = 0;
    }

    
}