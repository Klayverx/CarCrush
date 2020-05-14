export default class Player {
    constructor(context, x, y) {
        this.context = context;
        this.x = x;
        this.y = y;

        this.asset = new Image();
        this.asset.src = './assets/blue.png'

        this.offset = 100;

        this.height = 138;
        this.width = 70;
    }

    collide(enemy) {
        if (this.x === enemy.x) {
            if (this.y <= (enemy.y + enemy.height) && (this.y + this.height) > enemy.y ) {
                return true;
            }
        }
    }

    show() {
        this.context.drawImage(this.asset, this.x, this.y);
    }

    move(direction) {
        if (this.x !== 36) {
            if (direction === 'LEFT') {
                this.x -= this.offset;
            }
        }

        if (this.x !== 336) {
            if (direction === 'RIGHT') {
                this.x += this.offset;
            }
        }
    }
}