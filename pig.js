class pig extends baseclass {


        constructor(x,y){
        
        var options = {
            'restitution': 0.2,
            'friction': 0.8,
            'density': 1.0
        }
        
        this.body = Bodies.rectangle(x, y, 50, 50, options);
                    this.width = width;
                    this.height = height;
                    this.image = loadImage("new/enemy.png")
                    World.add(world, this.body);
        
        }
        display(){
        var pos = this.body.position;
                    var angle = this.body.angle;
                    push();
                    translate(pos.x, pos.y); rotate(angle);
                    rectMode(CENTER);
                    strokeWeight(2)
            stroke(255) 
                    fill("green");
                    rect(0, 0, 50,50);
                   pop();
        }
        
        
        






}