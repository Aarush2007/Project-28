class Stone {
    constructor(){
        var options = {
            restitution: 0,
            isStatic: false,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.circle(windowWidth-1270,windowHeight-300,20,options)
        World.add(world,this.body);
        this.image = loadImage("stone.png");
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,0,70,70);
        pop();
    }
}