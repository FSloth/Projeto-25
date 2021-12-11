class Papel{
    constructor(x,y,r) {
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2,
    }
    this.image = loadImage("paper.png")
    this.Body = Bodies.circle(x,y,(r-20)/2,options)
    this.r = r;
    World.add(world,this.Body)
    }
    display(){
    
    var pos = this.Body.position;
    var angle = this.Body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER)
    image(this.image,0,0,this.r,this.r)
    pop();
    }

}