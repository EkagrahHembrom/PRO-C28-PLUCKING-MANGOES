class Mango{
     constructer(x,y,width, height, angle){
       var options= {
       isStatic:true,
       restitution :0,
       friction :1,
  }  
  this.body = Bodies.circle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);
}
}