var ship;
var flowers = [];
var drops = [];

function setup() {
  createCanvas(600,400);

  //Create ship
  ship = new Ship();

  //Create flowers
  for (var i=0; i < 6; i++){
  flowers[i] = new Flower(i*80+80, 60);
}
}

function draw(){
background(0);

//Show the ship
ship.show();
//console.log(ship.xdir)
ship.move();
console.log(ship.x);

//Show drops
for (var i=0; i < drops.length; i++){
  drops[i].show();
  drops[i].move();

//Remove flowers and drops
    for (var j=0; j < flowers.length; j++){
        if (drops[i].hits(flowers[j])){
            for(var k = 1; k<500; k++){
              flowers[j].gone();
            }
            drops[i].gone();
        }
     }
}

deleteLoops(flowers,drops);

var edge = false;

//Show flowers
for (var i=0; i < flowers.length; i++){
flowers[i].show();
flowers[i].move();


//The flowers movement
if(flowers[i].x > width-30 || flowers[i].x<0+30){
  edge=true;
  }
}

if (edge){
  for (var i=0; i < flowers.length; i++){
    flowers[i].shiftDown();

    }
  }
}


function keyReleased () {
if (key !=' ' )
  ship.setDir(0);
}



//Shoot drops
function keyPressed() {
    if (key===' '){

      var drop = new Drop(ship.x+10, height-20);
      drops.push(drop);

    }

    if (keyCode == RIGHT_ARROW){
      ship.setDir(1);
      console.log("R")
    }
  else if (keyCode == LEFT_ARROW) {
    ship.setDir(-1);
    console.log("L")
  }
}
