class Ground {
    
    constructor(x,y,w,h){
        var ground_options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,ground_options)
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("green");
        rect(0,0,this.w,this.h);
        pop();
    };

}