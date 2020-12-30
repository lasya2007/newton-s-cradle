class Rope{
    constructor(body1,body2,xOffset,yOffset){
        this.offsetX=xOffset;
        this.offsetY=yOffset;
        var options={
            bodyA:body1,
            bodyB:body2,
            stiffness:0.3,
           // length:100,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var a=this.chain.bodyA.position;
        var b=this.chain.bodyB.position;
        strokeWeight(3);
        stroke("white");
        var bX=b.x+this.offsetX;
        var bY=b.y+this.offsetY;
        line(a.x,a.y,bX,bY);
    }
}