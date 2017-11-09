function Ship(){
//Spawnpoint för fartyget
  this.x = width/2;
  this.xdir=0;
//Visa fartyget
  this.show = function(){
      fill(255);
      rect(this.x, height-20, 20, 20);
    }

//Funktionen för rörelse i x-led
this.move= function () {
  this.x += this.xdir*4;
}

this.setDir = function (dir) {
this.xdir = dir;
this.x  = this.x + this.xdir;
}

}
