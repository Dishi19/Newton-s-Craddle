class Roof{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        fill(167, 98, 204);
        stroke(167, 98, 204);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}