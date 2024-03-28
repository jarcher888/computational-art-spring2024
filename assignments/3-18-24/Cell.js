class Cell {
    constructor(angle, xIndex, yIndex) {
        this.angle = angle;

        this.xIndex = xIndex;
        this.yIndex = yIndex;

        this.hue = map(this.angle, 0, 2 * PI, 100, 300);

        this.offsetX = random(-1, 1);
        this.offsetY = random(-1, 1);
        this.offsetRotation = 0;

        this.scaleOffset = 0;
    }

    update() {
        this.angle += 0.001;
        this.hue = map(this.angle, 0, 2 * PI, 100, 300);
        this.hue = (this.hue + 360) % 360;

        this.offsetX += random(-1, 1);
        this.offsetY += random(-1, 1);
        this.offsetRotation += 0.01;

        this.scaleOffset += random(-.01, .01);
    }

    show() {
        let x = cellWidth * this.xIndex + this.offsetX;
        let y = cellHeight * this.yIndex + this.offsetY;

        push();

        translate(x + cellWidth/2, y + cellHeight/2);
        rectMode(CENTER);
        fill(this.hue, 70, 100);
        rotate(this.offsetRotation);
        scale(this.scaleOffset);
        rect(0, 0, cellWidth, cellHeight);
        rotate(this.angle);
  
        // stroke(0);
        // line(-cellWidth/2, 0, cellWidth/2, 0);
        // line(cellWidth/2, 0, cellWidth/4, -cellHeight/4);
        // line(cellWidth/2, 0, cellWidth/4, cellHeight/4);
        
        pop();
    }
}