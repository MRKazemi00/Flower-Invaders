var ship;
var flowers = [];
var drops = [];
var timer=0;


function setup() {
createCanvas(600,400);

  //Skapa "Fartyget"
  ship = new Ship();

  //Skapa blommorna
sixFlowers();

//En timer för spelet
function timeIt(){
  timer++;
}
setInterval(timeIt, 1000);

}

function draw(){



//Byt bakgrund för varje level
if (level === 2){
background(0);
}
else if (level === 3) {
  background(255,0,128);

}

else if (level ===4) {
  background(0,255,255)
}



fill("green");
textSize(20);
text("Timer:" + timer,450,375);

//visa "ship"
ship.show();
ship.move();






//Visa drops
for (var i=0; i < drops.length; i++){
  drops[i].show();
  drops[i].move();

//Funktion för att blommorna och dropsen ska försvinna när de rör varandra

    for (var j=0; j < flowers.length; j++){
        if (drops[i].hits(flowers[j])){

          drops[i].gone();

          for(var k = 1; k<500; k++){
            flowers[j].gone();
            }

        }

    }
}

//Fortsättningen av funktionen där uppe
deleteLoops(flowers,drops);

//Funktion för att man ska gå till nästa level om man lyckas
success(flowers);

//Funktion för att man ska gå till "Loose screen" om man misslyckas
fail(ship,flowers);


var edge = false;


//Visa blommorna
for (var i=0; i < flowers.length; i++){
flowers[i].show();
flowers[i].move();

//Funktion för att bollarna ska röra sig sidleds
if(flowers[i].x > width-30 || flowers[i].x<0+30){
  edge=true;
  }
}



//Funktion så att blommorna studsar ner när den rör kanten

if (edge){
  for (var i=0; i < flowers.length; i++){
    flowers[i].shiftDown();

    }
  }
}

// Fixar så att man kan röra sig kontinuerligt
function keyReleased () {
if (key !=' ' )
  ship.setDir(0);
}



//Skjuter drops
function keyPressed() {
    if (key===' '){

      var drop = new Drop(ship.x+10, height-20);
      drops.push(drop);

    }
//Rörelsen, höger och vänster
    if (keyCode == RIGHT_ARROW){
      ship.setDir(1);

    }
    else if (keyCode == LEFT_ARROW) {
    ship.setDir(-1);

  }
}
