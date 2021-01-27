var canva;
var MyQuizGame;

function setup(){
  canvas = createCanvas(850,400);
}


function draw(){
  background("pink");
  drawSprites();

  stroke("black");
  textSize(20);
  fill("black");
  text("MyQuizGame : 1"+ MyQuizGame, 270, 30);

  stroke("black");
  textSize(20);
  fill("black");
  text("1 : Everyone" + 1, 100, 100);

  stroke("black");
  textSize(20);
  fill("black");
  text("2 : Envelope" + 1, 100, 120);

  stroke("black");
  textSize(20);
  fill("black");
  text("3 : Estimate" + 1, 100, 140);

  stroke("black");
  textSize(20);
  fill("black");
  text("4 : Example" + 1, 100, 160);

  stroke("black");
  textSize(20);
  fill("black");
  text(" Enter your name here..." + 1, 100, 200);

  stroke("black");
  textSize(20);
  fill("black");
  text("Enter the correct option no." + 1, 400, 200);

  stroke("black");
  textSize(20);
  fill("black");
  text("Question:- What starts and ends with letter 'E', but has only one letter???" + 1, 170, 60);

  
}
