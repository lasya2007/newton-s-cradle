class Roof{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,70,600,40,options);
        this.width=600;
        this.height=40;
        World.add(world,this.body);
    }
    display(){
        strokeWeight(2);
        stroke("black");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}