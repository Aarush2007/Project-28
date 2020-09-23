class Mango {
    constructor(x,y,r){
        var options = {
            restitution: 0,
            isStatic: true,
            friction: 1
        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.radius = r;

        this.image = loadImage("mango.png");
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }
}