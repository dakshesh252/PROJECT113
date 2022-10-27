function setup(){
    canvas = createCanvas(680,480);
    canvas.position(550,270);
    video = createCapture(VIDEO);
    video.hide();
    circle_color = "";
    rectangle_color ="";
}


function draw(){
    circle_color = document.getElementById("one").value;
    image(video,0,0,680,480);
    let c = color(circle_color);
fill(c);
noStroke();
ellipse(90, 80, 100, 100);
ellipse(90,400,100,100);
ellipse(580,400,100,100);
ellipse(580,80,100,100);

rectangle_color = document.getElementById("two").value;
let r = color(rectangle_color);
fill(r);
noStroke();
rect(135, 60, 400, 35);
rect(135, 385, 400, 35);
rect(75, 125, 35, 230);
rect(565, 125, 35, 230);
}


function take_snapshot(){
    save("my_Pic.png")
}