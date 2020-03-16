
var r = 0;
var g = 50;
var b= 255;



function setup(){

  createCanvas(1200,400);
}


function draw(){

// background....
r = map(mouseX,1200,400,0,255);
b = map(mouseX,1200,400,255,0);
g = map(mouseX,1200,400,0,25);

background(r,g,b);


// Mouse Pointer
fill("yellow");
ellipse(mouseX,200,50,50);


}