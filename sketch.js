const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1,bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    var ground_options ={ isStatic: true } 
    ground = Bodies.rectangle(600,390,1200,20,ground_options); World.add(world,ground);
    
    box1 = new box(700,320,70,70);
    box2 = new box(920,320,70,70);
    pig1 = new pig(810, 350);
    log1 = new log(810,260,300, PI/2);

    box3 = new box(700,240,70,70);
    box4 = new box(920,240,70,70);
    pig3 = new pig(810, 220);

    log3 =  new log(810,180,300, PI/2);

    box5 = new box(810,160,70,70);
    log4 = new log(760,120,150, PI/7);
    log5 = new log(870,120,150, -PI/7);

    bird1 = new bird(100,100);
    console.log(bird1)

}

function draw(){
    background(0);
    Engine.update(engine);

    rectMode(CENTER); rect(ground.position.x,ground.position.y,400,20);

     box1.display();
    box2.display();
    pig1.display();
    log1.display();


    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird1.display();
}