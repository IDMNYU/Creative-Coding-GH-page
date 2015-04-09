var bgHue = 20, bgSaturation = 100;

function preload(){
}

function setup() {
  //create our drawing canvas
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {
  background(bgHue,bgSaturation,240);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  bgHue = windowWidth % 255;
  bgSaturation = windowHeight % 255;
}
