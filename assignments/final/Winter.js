class Winter{
    constructor(){

        this.snow = [];
        this.offsets = [];
        

        for (let i = 0; i < numSnowParticles; i++){
            this.offsets.push(random(500));
            this.snow.push(new Snow(random(width), random(height), this.offsets[i]));
            
         }

         this.predator = new Predator(foxImg, width - 30, height - 194);
         this.prey = new Prey(bunnyImg, width - 60, height - 160);
    }

    draw(){

        // Set background color
        push();
        
        noStroke();
        fill(239, 16, 98);
        translate(0, 0);
        rect(0, 0, width, height);

        pop();

        //Create ground
        push();

        noStroke();
        fill(236, 7, 85);
        translate(0, height - 100);
        rect(0, 0, width, 100);
        
        pop();

        for (let particle of this.snow){
            particle.show();
        }

        this.prey.draw();
        this.predator.draw();

    }

    update(){
        let count = 0;
        for (let particle of this.snow){
            particle.update();
            count++;
        }

        this.predator.update()
        this.prey.update();
    }

    nextSeason(){
        currentSeason = season_2;
    }


}



// Palette: 
// #A3BCF9 hsb: 223, 35, 98 jordy blue
// #D1D2F9 hsb: 239, 16, 98 periwinkle
// #7796CB hsb: 218, 41, 80 vista blue
// #C9CAD9 hsb: 236, 7, 85 french gray
// #576490 hsb: 226, 40, 56 ultra violet
