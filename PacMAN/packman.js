function setup() {
  pacX = 0;
  pacY = 0;

  createCanvas(700, 700);
}

//This function draws the actual pac man sprite
function draw() {
  fill(255);
  rect(0,0,690,690);
  fill(255,255,0);
  nostroke();
  ellipse(pacX, pacY, 50, 50);
}

function keyPressed() {
  var keyIndex = -1;
  if(key == 'a' && pacX >=50) {
    pacX--;
  }
  if(key == 'w' && pacY >=50){
    pacY++;
  }
  if(key == 'd' && packX<=950){
    pacX++;
  }
  if(key == 's' && packY<=950){
    packY--;
  }
}
