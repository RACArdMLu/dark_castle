class KeyListen{
    constructor(me){
        this.key = " ";
        this.me = me;
        // this.keydownfunction = function(){
            
        // }
    window.addEventListener("keydown",e => {
        switch(e.key){
            case "ArrowUp":this.key = "up";break;
            case "ArrowDown": this.key="down";break;
            case "ArrowLeft": this.key="left";break;
            case "ArrowRight": this.key="right";break;
        }
        
    })
    window.addEventListener("keyup",e=>{
        this.key ='stop';
    })
    }
    

    // unbind(){
    //     window.removeEventListener("keydown");
    // }

    
}