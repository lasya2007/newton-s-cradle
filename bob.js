class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.r=50;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIANS);
        fill("green");
        strokeWeight(2);
        stroke("black");
        ellipse(0,0,this.r*2,this.r*2);
        pop();
    }
}