class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }

    moveUp() {
        this.y += 1;
    }

    moveDown() {
        this.y -= 1;
    }

    moveLeft() {
        this.x -= 1;
    }

    moveRight() {
        this.x += 1;
    }
}

module.exports = Position;
