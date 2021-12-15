function setup(){
    canvas=createCanvas(670,490);
    canvas.position(400,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,150,70,400,270);
    fill("red");
    stroke("orchid")
    circle(50,40,70)
    circle(50,400,70)
    circle(630,40,70)
    circle(630,400,70)
    fill("green");
    rect(45,40,13,360)
    rect(625,40,13,360)
    rect(50,40,580,13)
    rect(50,400,580,13)
}
function take_snapshot(){
    save("Picture Saved!!")
}