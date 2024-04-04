class Circle{
    constructor(x, y, r, i){
        this.x = x;
        this.y = y;
        this.r = r;
        this.index = i;

        this.hue = random(170, 270);
    }

    show(){
        stroke(this.hue, 100, 100);
        push();
        translate(this.x,this.y);
        ellipse(this.x, this.y, this.r);
        pop();
    }

    update(){
        // this.r += 10;
        if (this.r > 500){
            // circles.splice(this.index, 1);
        }
    }
}

