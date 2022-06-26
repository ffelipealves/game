import Bomberman from './Bomberman.js'
export default class TileMap {
    constructor(tileSize) {
        this.tileSize = tileSize

        this.grass = new Image()
        this.grass.src = "../images/grass.png"

        this.wall = new Image()
        this.wall.src = "../images/wall.png"

        this.stone = new Image()
        this.stone.src = "../images/stone.png"
    }
    //0 - grass
    //1 - stone
    //2 - wall
    //3 - bomberman

    map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

    ];


    draw(ctx) {

        for (let row = 0; row < this.map.length; row++) {
            for (let column = 0; column < this.map[row].length; column++) {
                let tile = this.map[row][column];
                if (tile == 2) {
                    this.#drawWall(ctx, column, row, this.tileSize)
                }
                else if (tile == 0) {
                    this.#drawGrass(ctx, column, row, this.tileSize)
                }
                else if (tile == 1) {
                    this.#drawStone(ctx, column, row, this.tileSize)
                }
            }
        }


    }

    #drawWall(ctx, column, row, size) {
        ctx.drawImage(this.wall, column * this.tileSize, row * this.tileSize, size, size)
    }

    #drawGrass(ctx, column, row, size) {
        ctx.drawImage(this.grass, column * this.tileSize, row * this.tileSize, size, size)
    }

    #drawStone(ctx, column, row, size) {
        ctx.drawImage(this.stone, column * this.tileSize, row * this.tileSize, size, size)
    }

    getBomberman(velocity) {
        for (let row = 0; row < this.map.length; row++) {
            for (let column = 0; column < this.map[row].lenght; column++) {
                let tile = this.map[row][column];
                if (tile == 3) {
                    this.map[row][column] = 0;
                    return new Bomberman(column * this.tileSize, row * this.tileSize, this.tileSize, velocity, this);
                }
            }
        }
    }

    setCanvasSize(canvas) {
        canvas.width = this.map[0].length * this.tileSize;
        canvas.height = this.map.length * this.tileSize;
    }
}