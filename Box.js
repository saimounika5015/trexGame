class Box{
 constructor(x,y,w,h){

    var prop={
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body=Body.rectangle(x,y,w,h,prop);
    this.width=w;
    this.height=h;
    World.add(abWorld,this.body);

 }
 display(){

    rectMode(CENTER);
    fill("green")
	rect(this.body.position.x,this.body.position.y,this.width,this.height);

 }



}