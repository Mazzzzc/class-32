class Ball{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:1.0,
            density:0.4
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=r
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("brown");
        stroke("green");
        ellipse(0,0,this.r);
        pop();
    }
    }