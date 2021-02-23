class Launcher{
    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY},
        }
        console.log(options);
        this.body = Constraint.create(options)
        World.add(world,this.body)
    }
    attach(body){
        this.body.bodyA = body;
    }
    
    fly(){
        this.body.bodyA = null;
    }
    
    display(){
        if(this.body.bodyA) {
        var pointA = this.body.bodyA.position
        var pointB = this.body.bodyB.position
        push();
        strokeWeight(3);
        stroke("Orange");
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
        pop();
        }
    }
}