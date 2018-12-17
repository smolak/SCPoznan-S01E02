const assert = require('assert');

const Rover = require('../src/Rover');
const Direction = require('../src/Direction');
const Position = require('../src/Position');

describe('Rover', () => {
    it('should start at given position', () => {
        const startingPosition = new Position(0, 0);
        const rover = new Rover(startingPosition, Direction.NORTH);

        const currentPosition = rover.getPosition();

        assert.deepEqual(currentPosition, { x: 0, y: 0 });
    });

    it('should face given direction', () => {
        const startingPosition = new Position(0, 0);
        const rover = new Rover(startingPosition, Direction.NORTH);

        const currentDirection = rover.getDirection();

        assert.equal(currentDirection, Direction.NORTH);
    });

    describe('turnLeft', () => {
        describe('when facing north', () => {
            it('should face west', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.NORTH);

                rover.turnLeft();

                const currentDirection = rover.getDirection();

                assert.equal(currentDirection, Direction.WEST);
            });
        });

        describe('when facing west', () => {
            it('should face south', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.WEST);

                rover.turnLeft();

                const currentDirection = rover.getDirection();

                assert.equal(currentDirection, Direction.SOUTH);
            });
        });

        describe('when facing south', () => {
            it('should face east', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.SOUTH);

                rover.turnLeft();

                const currentDirection = rover.getDirection();

                assert.equal(currentDirection, Direction.EAST);
            });
        });

        describe('when facing east', () => {
            it('should face north', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.EAST);

                rover.turnLeft();

                const currentDirection = rover.getDirection();

                assert.equal(currentDirection, Direction.NORTH);
            });
        });
    });

    describe('turnRight', () => {
        describe('when facing north', () => {
            it('should face east', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.NORTH);

                rover.turnRight();

                const currentDirection = rover.getDirection();

                assert.equal(currentDirection, Direction.EAST);
            });
        });

        describe('when facing east', () => {
            it('should face south', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.EAST);

                rover.turnRight();

                const currentDirection = rover.getDirection();

                assert.equal(currentDirection, Direction.SOUTH);
            });
        });

        describe('when facing south', () => {
            it('should face west', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.SOUTH);

                rover.turnRight();

                const currentDirection = rover.getDirection();

                assert.equal(currentDirection, Direction.WEST);
            });
        });

        describe('when facing west', () => {
            it('should face north', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.WEST);

                rover.turnRight();

                const currentDirection = rover.getDirection();

                assert.equal(currentDirection, Direction.NORTH);
            });
        });
    });

    describe('moveForward', () => {
        describe('when facing north', () => {
            it('should increase position by 1 on y axis', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.NORTH);

                rover.moveForward();

                const currentPosition = rover.getPosition();

                assert.deepEqual(currentPosition, { x: 0, y: 1 });
            });
        });

        describe('when facing east', () => {
            it('should increase position by 1 on x axis', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.EAST);

                rover.moveForward();

                const currentPosition = rover.getPosition();

                assert.deepEqual(currentPosition, { x: 1, y: 0 });
            });
        });

        describe('when facing south', () => {
            it('should decrease position by 1 on y axis', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.SOUTH);

                rover.moveForward();

                const currentPosition = rover.getPosition();

                assert.deepEqual(currentPosition, { x: 0, y: -1 });
            });
        });

        describe('when facing west', () => {
            it('should decrease position by 1 on x axis', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.WEST);

                rover.moveForward();

                const currentPosition = rover.getPosition();

                assert.deepEqual(currentPosition, { x: -1, y: 0 });
            });
        });
    });

    describe('moveBackward', () => {
        describe('when facing north', () => {
            it('should decrease position by 1 on y axis', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.NORTH);

                rover.moveBackward();

                const currentPosition = rover.getPosition();

                assert.deepEqual(currentPosition, { x: 0, y: -1 });
            });
        });

        describe('when facing east', () => {
            it('should decrease position by 1 on x axis', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.EAST);

                rover.moveBackward();

                const currentPosition = rover.getPosition();

                assert.deepEqual(currentPosition, { x: -1, y: 0 });
            });
        });

        describe('when facing south', () => {
            it('should increase position by 1 on y axis', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.SOUTH);

                rover.moveBackward();

                const currentPosition = rover.getPosition();

                assert.deepEqual(currentPosition, { x: 0, y: 1 });
            });
        });

        describe('when facing west', () => {
            it('should increase position by 1 on x axis', () => {
                const startingPosition = new Position(0, 0);
                const rover = new Rover(startingPosition, Direction.WEST);

                rover.moveBackward();

                const currentPosition = rover.getPosition();

                assert.deepEqual(currentPosition, { x: 1, y: 0 });
            });
        });
    });
});
