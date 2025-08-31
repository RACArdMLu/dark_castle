class loadmap{
    constructor(ctx,x,y){
        this.ctx = ctx;
        this.x =x||0;
        this.y = y||0;
        this.id = "map-1"//bedroom
        this.width = Width;
        this.height = Height;
        this.image = new Image();
        this.image.src = "assert/map/map-1.png";
    }
    load(){
        this.ctx.drawImage(this.image,0,0,this.width,this.height,0,0,this.width,this.height);
    }
    enter(){
        window.location.href="scene/scene0-3.html";
    }

}