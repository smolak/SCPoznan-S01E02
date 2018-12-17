const NORTH = 'N';
const SOUTH = 'S';
const EAST = 'E';
const WEST = 'W';

class Direction {
    constructor(direction) {
        this.direction = direction;
    }

    static get NORTH() {
        return NORTH;
    }

    static get SOUTH() {
        return SOUTH;
    }

    static get EAST() {
        return EAST;
    }

    static get WEST() {
        return WEST;
    }

    turnLeft() {
        const leftTurns = {
            [NORTH]: WEST,
            [WEST]: SOUTH,
            [SOUTH]: EAST,
            [EAST]: NORTH
        };

        this.direction = leftTurns[this.direction];
    }

    turnRight() {
        const rightTurns = {
            [NORTH]: EAST,
            [EAST]: SOUTH,
            [SOUTH]: WEST,
            [WEST]: NORTH
        };

        this.direction = rightTurns[this.direction];
    }

    getDirection() {
        return this.direction;
    }
}

module.exports = Direction;
