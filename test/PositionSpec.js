const assert = require('assert');

const Position = require('../src/Position');

describe('Position', () => {
    describe('getPosition', () => {
        it('should return current position', () => {
            const position = new Position(0, 0);
            const currentPosition = position.getPosition();

            assert.deepEqual(currentPosition, { x: 0, y: 0 });
        });
    });

    describe('moveForward', () => {
        it('should increase position by 1 on y axis', () => {
            const position = new Position(0, 0);

            position.moveUp();

            const currentPosition = position.getPosition();

            assert.deepEqual(currentPosition, { x: 0, y: 1 });
        });
    });

    describe('moveDown', () => {
        it('should decrease position by 1 on y axis', () => {
            const position = new Position(0, 0);

            position.moveDown();

            const currentPosition = position.getPosition();

            assert.deepEqual(currentPosition, { x: 0, y: -1 });
        });
    });

    describe('moveLeft', () => {
        it('should decrease position by 1 on x axis', () => {
            const position = new Position(0, 0);

            position.moveLeft();

            const currentPosition = position.getPosition();

            assert.deepEqual(currentPosition, { x: -1, y: 0 });
        });
    });

    describe('moveRight', () => {
        it('should increase position by 1 on x axis', () => {
            const position = new Position(0, 0);

            position.moveRight();

            const currentPosition = position.getPosition();

            assert.deepEqual(currentPosition, { x: 1, y: 0 });
        });
    });
});
