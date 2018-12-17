const assert = require('assert');

const Direction = require('../src/Direction');

describe('Direction', () => {
    describe('turnLeft', () => {
        it('when facing north, should face west', () => {
            const direction = new Direction(Direction.NORTH);

            direction.turnLeft();

            const currentDirection = direction.getDirection();

            assert.equal(currentDirection, Direction.WEST);
        });

        it('when facing west, should face south', () => {
            const direction = new Direction(Direction.WEST);

            direction.turnLeft();

            const currentDirection = direction.getDirection();

            assert.equal(currentDirection, Direction.SOUTH);
        });

        it('when facing south, should face east', () => {
            const direction = new Direction(Direction.SOUTH);

            direction.turnLeft();

            const currentDirection = direction.getDirection();

            assert.equal(currentDirection, Direction.EAST);
        });

        it('when facing east, should face north', () => {
            const direction = new Direction(Direction.EAST);

            direction.turnLeft();

            const currentDirection = direction.getDirection();

            assert.equal(currentDirection, Direction.NORTH);
        });
    });

    describe('turnRight', () => {
        it('when facing north, should face east', () => {
            const direction = new Direction(Direction.NORTH);

            direction.turnRight();

            const currentDirection = direction.getDirection();

            assert.equal(currentDirection, Direction.EAST);
        });

        it('when facing east, should face south', () => {
            const direction = new Direction(Direction.EAST);

            direction.turnRight();

            const currentDirection = direction.getDirection();

            assert.equal(currentDirection, Direction.SOUTH);
        });

        it('when facing south, should face west', () => {
            const direction = new Direction(Direction.SOUTH);

            direction.turnRight();

            const currentDirection = direction.getDirection();

            assert.equal(currentDirection, Direction.WEST);
        });

        it('when facing west, should face north', () => {
            const direction = new Direction(Direction.WEST);

            direction.turnRight();

            const currentDirection = direction.getDirection();

            assert.equal(currentDirection, Direction.NORTH);
        });
    });
});
