class log extends baseclass {

    constructor(x, y,angle) {
        var options = {
            'restitution': 0.2,
            'friction': 0.8,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x, y, 20, 150, options);
        Matter.Body.setAngle(this.body,angle)
this.image = loadImage("new/wood1.png")

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y); rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(0, 0, 20, 100);
       pop();
    }

}