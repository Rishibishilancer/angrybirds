class baseclass {

    constructor(x, y, width, height,angle) {
        var options = {
            'restitution': 0.2,
            'friction': 0.8,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;

            this.image = loadImage("new/base.png")
            World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y); rotate(angle);
        imageMode(CENTER);
        fill("brown");
        image(0, 0, this.width, this.height);
       pop();
}
}