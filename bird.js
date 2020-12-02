class bird extends baseclass{

constructor(x,y){



super(x,y,20,20)


this.image = loadImage("new/bird.png")

}
display(){
            var pos = this.body.position;
             pos.x = mouseX
             pos.y = mouseY

super.display()
           
}


}