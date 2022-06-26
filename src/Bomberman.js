import MovingDirection from "./Moviment.js";
export default class Bomberman {
  constructor(x, y, tileSize, velocity, tileMap) {
    this.x = x;
    this.y = y;
    this.tileSize = tileSize;
    this.velocity = velocity;
    this.tileMap = tileMap;

    this.currentMovingDirection = null;
    this.requestMovingDirection = null;

    document.addEventListener("keydown", this.#keydown);

    this.#loadBombermanImages();
  }

  draw(ctx) {
    this.#move();
    ctx.drawImage(
      this.bombermanImages[this.bombermanImageIndex],
      this.x,
      this.y,
      this.tileSize,
      this.tileSize
    );
  }

  #loadBombermanImages() {
    const bombermanImage1 = new Image();
    bombermanImage1.src = "../images/soldier0.png";

    const bombermanImage2 = new Image();
    bombermanImage2.src = "../images/soldier1.png";

    const bombermanImage3 = new Image();
    bombermanImage3.src = "../images/soldier2.png";

    const bombermanImage4 = new Image();
    bombermanImage4.src = "../images/soldier3.png";

    this.bombermanImages = [
      bombermanImage1,
      bombermanImage2,
      bombermanImage3,
      bombermanImage4,
    ];

    this.bombermanImageIndex = 0;
  }

  #keydown = (event) => {
    //up
    if (event.keyCode == 38) {
      if (this.currentMovingDirection == MovingDirection.down)
        this.currentMovingDirection = MovingDirection.up;
      this.requestMovingDirection = MovingDirection.up;
    }
    //down
    if (event.keyCode == 40) {
      if (this.currentMovingDirection == MovingDirection.up)
        this.currentMovingDirection = MovingDirection.down;
      this.requestMovingDirection = MovingDirection.down;
    }
    //left
    if (event.keyCode == 37) {
      if (this.currentMovingDirection == MovingDirection.right)
        this.currentMovingDirection = MovingDirection.left;
      this.requestMovingDirection = MovingDirection.left;
    }
    //right
    if (event.keyCode == 39) {
      if (this.currentMovingDirection == MovingDirection.left)
        this.currentMovingDirection = MovingDirection.right;
      this.requestMovingDirection = MovingDirection.right;
    }
  };

  #move() {
    if (this.currentMovingDirection !== this.requestMovingDirection) {
      if (
        Number.isInteger(this.x / this.tileSize) &&
        Number.isInteger(this.y / this.tileSize)
      ) {
        this.currentMovingDirection = this.requestMovingDirection;
      }
    }
    switch(this.currentMovingDirection){
      case MovingDirection.up:
      this.y -= this.velocity;
      break;
      case MovingDirection.down:
      this.y += this.velocity;
      break;
      case MovingDirection.left:
      this.x -= this.velocity;
      break;
      case MovingDirection.right:
      this.x += this.velocity;
      break;
    }
  }
}
