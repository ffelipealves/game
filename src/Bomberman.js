export default class Bomberman {
  constructor(x, y, tileSize, velocity, tileMap) {
    this.x = x;
    this.y = y;
    this.tileSize = tileSize;
    this.velocity = velocity;
    this.tileMap = tileMap;
    this.#loadBombermanImages();
  }

  draw(ctx) {
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
}
