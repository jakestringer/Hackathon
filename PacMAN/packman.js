function setup() {
  pacX = 50;
  pacY = 50;

  createCanvas(700, 700);
}

//This function draws the actual pac man sprite
function draw() {
  // fill(0);
  // rect(0,0,690,690);
  // rect(10,10,10,10);
  fill(0);
  ellipse(pacX, pacY, pacX+50, paxy+50);
  ellipse(0,0,50,50);
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
