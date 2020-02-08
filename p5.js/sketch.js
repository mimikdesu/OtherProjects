let x = 50;


let circle = {
    x : 50,
    y : 100,
    r : 25
};


function setup() {
    createCanvas(400, 400);
    
    
}

function draw() {
    
    background(0,100,200);
    noStroke();
    fill(250, 200, 200);
    ellipse(circle.x,circle.y,circle.r,circle.r);
    circle.x++;
}
