function preload() {

}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function modelLoaded() {
console.log("PoseNet is initialized");
}

function draw() {
    image(video,0,0,300,300);

    fill(255,0,0);
    stroke(255,0,0);
    circle(10,20,80);

    fill(0,128,0);
    stroke(0,128,0);
    rect(40,0,480,20);

    fill(255,0,0);
    stroke(255,0,0);
    circle(300,20,80);

    fill(0,128,0);
    stroke(0,128,0);
    rect(0,60,20,460);

    fill(255,0,0);
    stroke(255,0,0);
    circle(10,290,80);

    fill(0,128,0);
    stroke(0,128,0);
    rect(50,280,460,20);

    fill(0,128,0);
    stroke(0,128,0);
    rect(280,50,20,460);

    fill(255,0,0);
    stroke(255,0,0);
    circle(300,280,80);

}


function take_snapshot() {
    save("Julia.png");
}