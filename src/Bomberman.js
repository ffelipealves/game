export default class Bomberman{

    constructor(x,y,tileSize,velocity,tileMap){
        this.x=x;
        this.y=y;
        this.tileSize=tileSize;
        this.velocity=velocity;
        this.tileMap=tileMap;
        this.#loadBombermanImages();
    }

    draw(ctx){

    }
    #loadBombermanImages(){
        const bombermanImage0 = new Image();
        bombermanImage1.src="../images/soldier0.png";
        const bombermanImage1 = new Image();
        bombermanImage1.src="../images/soldier1.png";
        const bombermanImage2 = new Image();
        bombermanImage1.src="../images/soldier2.png";
        const bombermanImage3 = new Image();
        bombermanImage1.src="../images/soldier3.png";

        this.bombermanImages = [bombermanImage0,bombermanImage1,bombermanImage2,bombermanImage3]

        this.bombermanImageIndex = 0;
    }

}


//Bomberman(column * this.tileSize, row * this.tileSize, this.tileSize, velocity, this);