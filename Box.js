class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:1.0,
            density:0.4
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("white");
        stroke("green");
        rect(0,0,this.width,this.height);
        pop();
    }
    }