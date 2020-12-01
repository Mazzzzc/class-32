class Rope{
    constructor(bodyA,pointA){
        var options={
            bodyA:bodyA,
            pointA:pointA,
            stiffness:1.2,
            length:200
        }
        this.pointA=pointA;
        this.string=Constraint.create(options);
        World.add(world,this.string);
    }
    display(){
        if(this.string.bodyA){
        var pos=this.string.bodyA.position
        var point=this.pointA
        stroke("gray");
        strokeWeight(4);
        line(pointA.x,pointA.y,pos.x,pos.y);
    }
    }
}