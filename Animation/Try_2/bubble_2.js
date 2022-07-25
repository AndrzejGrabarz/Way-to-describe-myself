
let canv;

let box = [];
let r;



function  setup(){
    canv = createCanvas(1200,800);
    centerCanvas();

    canv.mousePressed(Press)
    info = createP("Press or dragg mouse ")
   
   button = createButton("Clear");
   button.mousePressed(resetTable)

   

   slider = createSlider(0,255,100);
   slider.style("margin", 40)
   slider.position(700, 100);

// for(let i=0; i < 20; i++) {

//     let x = random(width);
//     let y = random(height);
//     let r = random(10,50);


//     box[i] = new Something (x, y, r)

// }

}




function draw(){
background(0);

for(let i=0; i < box.length; i++) {

    if(mouseIsPressed === true){
        box[i].show_ell()
    }else{
        box[i].show_rect()
        box[i].snake()
        box[i].collision()
    }
   

}

}



class Something {
    constructor(tempx,tempy,tempr){
        this.x = tempx;
        this.y = tempy;
        this.r = tempr;
        
    }

    show_rect() {
        fill(slider.value())
        noStroke()
        rect(this.x,this.y,this.r)

    }


    show_ell() {
        fill(slider.value())
        noStroke()
        ellipse(this.x,this.y,this.r)

    }


    snake() {

        this.x = this.x + random(-5,5);
        this.y= this.y + random(-5,5);

    }


    collision () {

        if( this.x > width) {
            this.x = 0
        }else if (this.x < 0) {
            this.x = 1200
        }

        if( this.y > height) {
            this.y = 0
        
        }else if (this.y < 0) {
            this.y = 800
        }
    }

}

function resetTable() {
    box = []
}


   



function Press() {
     r = random(10,50)
    let newBox = new Something(mouseX,mouseY,r)
    box.push(newBox)
    console.log("menel")

}



function mouseDragged() {
 
     r = random(10,50);
    let newBox = new Something(mouseX,mouseY,r)
    box.push(newBox)
    
    

}






function  centerCanvas(){
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    canv.position(x,y)
}


function windowResized() {
    centerCanvas();
}