var level = 2;
var grade;
//Om man misslyckas att döda alla blommor så förlorar man
function fail(ship,flowers){
  for (var i = 0; i < flowers.length; i++) {
var distance = dist(ship.x, ship.y, flowers[i].x, flowers[i].y);
    if (distance < flowers[i].r || flowers[i].y > height-60){
      flowers[i].gone();
      gameOver();
      deleteloops();
    }
  }
}

//"LooseScreen" om man förlorar
function gameOver() {
  createCanvas(600,400);
  background("black");
  fill("red");
  textSize(50);




  text("Game Over",150,150);
  text("Earth is doomed.",100,250);

}

//"winScreen" om man vinner
function winScreen(){

  //Scoresystem för spelet
  if(timer<20){
  grade="A";
  }
  else if (timer<40) {
  grade="C";
  }
  else {
 grade="E";
  }


  createCanvas(600,400);
  background("black");
  fill("green");
  textSize(50);




  text("You won! GR8 jobb!",100,150);
  text("Your got the grade: " + grade,20,250);

deleteloops();



  }



//Om man dödar alla "Flowers" går man till nästa level
function success(flowers) {
    if(flowers.length === 0){
      nextLevel();
    }
  }

//Function för att gå till nästa level, olika många blommor för olika level
function nextLevel() {

 if (level === 2){
      level += 1;
    sixFlowers();
    twelveFlowers();

  }


else if (level === 3){

    sixFlowers();
    twelveFlowers();
    eighteenFlowers();
    level += 1;
  }

  else if (level === 4){
    level += 1;
    winScreen();


  }

}

//Om leveln ska ha sex blommor
function sixFlowers() {
  for (var i=0; i < 6; i++){
  flowers[i] = new Flower(i*80+80, 60);
}
}

//Om leveln ska ha 12 blommor
function twelveFlowers() {
   for(var i=6; i < 12; i++){
  flowers[i] = new Flower((i-6)*80+80, 125);
}
}

//Om leveln ska ha 18 blommor
function eighteenFlowers() {
   for(var i=12; i < 18; i++){
  flowers[i] = new Flower((i-12)*80+80, 190);
}
}
