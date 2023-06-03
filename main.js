function preload() {

}

function setup() {
   canvas = createCanvas(350, 350);
   canvas.center()
   vid = createCapture(VIDEO)
vid.hide()
  }
  
function draw() {
  image(vid, 20,20,310,310);
    fill("pink");
    stroke("pink");
    circle(20, 20, 20);
    fill("red");
    stroke("red");
    circle(330, 20, 20);
    fill("pink");
    stroke("pink");
    circle(330, 330, 20);
    fill("red");
    stroke("red");
    circle(20, 330, 20);
}

function take_pic() {
  save("backgroundfilter.png")
}