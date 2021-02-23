class Boy{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("boy.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image,150,575,200,300);
      }
    }