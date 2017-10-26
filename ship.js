function Ship(){
//Where it spawns
  this.x = width/2;
  this.xdir=0;
//Show function
  this.show = function(){
      fill(255);
      rect(this.x, height-20, 20, 20);
    }

//Move function
this.move= function () {
  this.x += this.xdir*4;
//  console.log(this.xdir)
}

this.setDir = function (dir) {
this.xdir = dir;
this.x  = this.x + this.xdir;
}

}
