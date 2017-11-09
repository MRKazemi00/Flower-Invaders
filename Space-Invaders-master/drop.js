function Drop(x, y) {
  this.x = x;
  this.y= y;
  this.r= 8;
  this.toDelete = false;

//Visa "Drops" (Skotten som kommer från fartyget)
  this.show = function(){
      noStroke();
      fill(150, 0, 255);
      ellipse(this.x, this.y, this.r*2, this.r*2);
    }

//Evaporerar dropsen genom att göra toDelete sann
    this.gone = function(){
      this.toDelete = true;

    }

//En funktion så att den upptäcker när den träffar blommorna
    this.hits = function(flower){

      var d= dist(this.x, this.y, flower.x, flower.y);
      if( d < this.r + flower.r){
        return true;
      } else{

        return false;
      }

    }
//rörelsefunktionen för drops
    this.move = function(){
    this.y = this.y-4;
    }

}
