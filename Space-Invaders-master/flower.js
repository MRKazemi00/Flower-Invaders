function Flower(x, y) {
  this.x = x;
  this.y= y;
  this.r=30;
  this.toDelete=false;

  this.xdir=1;


//Evaporate flower
  this.gone = function () {

fill(random(0,255),random(0,255),random(0,255));
   ellipse(this.x, this.y, this.r*random(2,5), this.r*random(2,5));

   this.toDelete = true;
 }

this.move = function(){
  this.x = this.x + this.xdir;
}

  this.show = function(){
    noStroke();
      fill(255, 0, 200, 150);
      ellipse(this.x, this.y, this.r*2, this.r*2);
    }

this.shiftDown = function () {
this.xdir = this.xdir * -1;
this.y = this.y + this.r;

}


}
