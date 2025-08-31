// import { Player } from "./player.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const Width = canvas.width = 800;
const Height = canvas.height = 600;
const fps = 30;
const me = new Player(ctx,375,500);
const listener = new KeyListen(me);
const map = new loadmap(ctx);

function game(){
    ctx.clearRect(0,0,Width,Height); 
    map.load();
    me.walk(listener.key);
    me.draw();
    if(me.y<=375) listener.key ="stop";
    console.log(me);
    if(me.x>350&&me.x<me.width+350&&me.y<375&&me.y>375-me.height) map.enter();
    requestAnimationFrame(game);
 }

 
setTimeout(() => {
                    game();
                }, 1000 / this.fps);


