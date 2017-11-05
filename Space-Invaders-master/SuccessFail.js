var level = 2;

function gameOver() {
  createCanvas(600,400);
  background("black");
  fill("red");
  textSize(50);




  text("Game Over",150,150);
  text("Earth is doomed.",100,250);


}

function fail(ship,flowers){
  for (var i = 0; i < flowers.length; i++) {
var distance = dist(ship.x, ship.y, flowers[i].x, flowers[i].y);
    if (distance < flowers[i].r || flowers[i].y > height){
      flowers[i].gone();
      gameOver();
    }
  }
}
function success(flowers) {
  if(flowers.length === 0){
    nextLevel();
  }
}

function nextLevel() {

 if (level === 2){
      level += 1;
    sixFlowers();
    twelveFlowers();

  }


else if (level === 3){

    console.log("Hellu")
    sixFlowers();
    twelveFlowers();
    eighteenFlowers();
    level += 1;
  }

}

function sixFlowers() {
  for (var i=0; i < 6; i++){
  flowers[i] = new Flower(i*80+80, 60);
}
}

function twelveFlowers() {
   for(var i=6; i < 12; i++){
  flowers[i] = new Flower((i-6)*80+80, 125);
}
}

function eighteenFlowers() {
   for(var i=12; i < 18; i++){
  flowers[i] = new Flower((i-12)*80+80, 190);
}
}
