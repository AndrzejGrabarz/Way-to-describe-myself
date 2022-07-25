let cnv;
let bubble;
let bubbles = [];
let recolor;

function setup() {
  cnv = createCanvas(1200, 800);
  centerCanvas();
  
  for( let i = 0; i <100; i++ ) {

    let x = random(100,1100);
    let y = random(100,700);
    let r = random(10,50);
    bubbles[i] = new Bubble(x,y,r,random(-5,5),random(-5,5));

  }
  
} 


function draw() {
    background(0);
  
    for( let i = 0; i <bubbles.length; i++ ) {
        
        
        bubbles[i].show();
        bubbles[i].move();
        bubbles[i].collision();
        
    
      }

}



class Bubble {
    constructor(x,y,r,speedX,speedY) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.speedX = speedX;
        this.speedY = speedY;
        this.red = 255;
        this.green = 255;
        this.blue = 255;
    
    }

    show() {
        fill(this.red,this.green,this.blue)
        ellipseMode(CENTER)
        ellipse(this.x,this.y,this.r*2)
    }

    move() {
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;

    }


    collision (){

        if(this.x > width -  this.r || this.x < 0 + this.r){
            this.speedX = this.speedX *-1;
            this.red = random(255);
            this.green = random(255);
            this.blue = random(255);
        }

        if(this.y > height -  this.r || this.y - this.r  < 0){
            this.speedY = this.speedY *-1;
            this.red = random(255);
            this.green = random(255);
            this.blue = random(255);
        }

    }


    contain(mx,my){

        let d = dist(mx,my,this.x,this.y)

        if(d < this.r){
            
        
            console.log("huj")

        } 
       
       
    }

    // changeColor(){
    //     this.red = 0;
    //     this.green = 200;
    //     this.blue = 200;
        
    // }   

}




function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x, y);
  }


function windowResized() {
    centerCanvas();
}