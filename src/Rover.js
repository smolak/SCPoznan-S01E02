const Direction = require('./Direction');

class Rover {
    constructor(startingPosition, startingDirection) {
        this.position = startingPosition;
        this.direction = new Direction(startingDirection);
    }

    getPosition() {
        return this.position.getPosition();
    }

    getDirection() {
        return this.direction.getDirection();
    }

    turnLeft() {
        this.direction.turnLeft();
    }

    turnRight() {
        this.direction.turnRight();
    }

    moveForward() {
        switch(this.direction.getDirection()) {
            case Direction.NORTH:
                this.position.moveUp();
                break;
            case Direction.EAST:
                this.position.moveRight();
                break;
            case Direction.SOUTH:
                this.position.moveDown();
                break;
            case Direction.WEST:
                this.position.moveLeft();
                break;
        }
    }

    moveBackward() {
        switch(this.direction.getDirection()) {
            case Direction.NORTH:
                this.position.moveDown();
                break;
            case Direction.EAST:
                this.position.moveLeft();
                break;
            case Direction.SOUTH:
                this.position.moveUp();
                break;
            case Direction.WEST:
                this.position.moveRight();
                break;
        }
    }
}

module.exports = Rover;
