class Block{
    constructor(x, y, width, height){
        var options={
            friction: 1.0,
            restitution: 0.8,
            density: 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        rotate(angle);
        rectMode(CENTER);
        pop();
      }
      }