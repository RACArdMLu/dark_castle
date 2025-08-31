class Player{
    constructor(ctx,x,y){
        this.width = 48;
        this.height = 50;
        this.frame = 0;
        this.image = new Image();
        this.image.src = "./assert/player.png"
        this.x = x || 0;
        this.y = y || 0;
        this.speed = 1;
        this.index = 0;
        this.ctx = ctx;
        this.fps = 100;
        this.Iframe = 0;
       

    }
    walkright(){
        
        this.index = 2;
        // if(this.frame === 2 ) this.x += this.speed;
        // this.frame = 0;
        if(this.Iframe % 10 === 0){
            this.frame++;
        }
        if(this.x < Width-this.width)
        this.x += this.speed;
         if(this.frame >2){this.frame = 0;
            
        }
    //     if((this.Iframe = this.frame - this.fps) > 2){ 

        
    // }
}

    draw(){
            this.Iframe++;
            this.ctx.drawImage(this.image,this.width * this.frame , this.height * this.index,this.width,this.height,this.x,this.y,this.width,this.height);

    }
    walkleft(){
        
        this.index = 1;
        // if(this.frame === 2 ) this.x-=this.speed;
        if(this.Iframe % 10 === 0){
            this.frame++;
        }
        if(this.x>=0)
        this.x-=this.speed;
        if(this.frame > 2) {this.frame = 0;}
        
        
    }
    walkup(){
        
        this.index = 3;
        if(this.Iframe % 10 === 0){
            this.frame++;
        }
        if(this.y>=0)
        this.y-=this.speed;
        if(this.frame > 2){ this.frame = 0;}
       
        
    }
    walkdown(){
        this.index = 0;
        if(this.Iframe % 10 === 0){
            this.frame++;
        }
        if(this.y < Height-this.height)
        this.y+=this.speed;
        
        if(this.frame > 2){ this.frame = 0;}
        
    }

    walk(key){
    // if(this.x >= this.ctx.width-this.width||this.x<=0) key = "stop";
    // if(this.y >=this.ctx.height-this.height|| this.y<=0) key = "stop";
        switch(key){
            case "up":this.walkup();break;
            case "down": this.walkdown();break;
            case "left": this.walkleft();break;
            case "right": this.walkright();break;
        }

    }

}







