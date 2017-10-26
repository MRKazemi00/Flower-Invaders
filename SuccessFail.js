var level = 2;

function gameOver() {
  createCanvas(600,400);
  background("black");
  fill("red");
  textSize(50);

stopAll();

  lose.play();
  text("Game Over",150,150);
  text("Earth is doomed.",100,250);
  loopOn = false;
  noLoop();
}

function fail(ship,aliens){
  for (var i = 0; i < aliens.length; i++) {
var distance = dist(ship.x, ship.y, aliens[i].x, aliens[i].y);
    if (distance < aliens[i].r || aliens[i].y > height){
      aliens[i].gone();
      gameOver();
    }
  }
}
function success(aliens) {
  if(aliens.length === 0){
    nextLevel();
  }
}

function nextLevel() {

 if (level === 2){
      level += 1;
    tenAliens();
    twentyAliens();
  }

  function tenAliens() {
    for (var i = 0; i < 10; i++) {
      aliens[i] = new Alien(i*45+12, 35);
    }
  }
