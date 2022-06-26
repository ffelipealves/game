import TileMap from "./TileMap.js";

const tileSize = 32;
const velocity = 1;

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const tileMap = new TileMap(tileSize);
const bomberman = tileMap.getBomberman(velocity)

//redraw our screen in each call
function gameLoop(){
    
    tileMap.draw(ctx);
    bomberman.draw(ctx);

}


tileMap.setCanvasSize(canvas);

//calls a functions every x period of time 
setInterval(gameLoop,1000/75);