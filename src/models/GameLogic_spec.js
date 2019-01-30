var GameLogic = require('./GameLogic');
var assert = require('assert');

describe('gameLogic', function () {

    let gameLogic;
    let board1;

    beforeEach(function () {
        gameLogic = new GameLogic()
        boardLosing = [0, 1, 0, 0, 0, 1, 0, 0, 0]
        board1 = [1, 0, 0, 1, 0, 0, 1, 0, 0]
        boardVertical = [1, 1, 1, 0, 0, 0, 0, 0, 0]
        boardDiagonal = [1, 0, 0, 0, 1, 0, 0, 0, 1]
    })

    it('hasresult', function () {
        assert.equal(gameLogic.result, 0)
    })

    it('hasBoard', function () {
        assert.equal(gameLogic.hasBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]), true);
    })

    it('horizontalcheckindex0True', function () {
        gameLogic.horizontalCheck(board1, 0)
        assert.equal(gameLogic.result, 1)
    })

    it('verticalcheckindex0True', function () {
        gameLogic.verticalCheck(boardVertical, 0)
        assert.equal(gameLogic.result, 1)
    })

    it('diagonalcheckindex0True', function () {
        gameLogic.diagonalCheck(boardDiagonal)
        assert.equal(gameLogic.result, 1)
    })

    it('hasWon', function () {
        assert.equal(gameLogic.hasWon(board1), 1)
    })

    it('hasWonFalse', function () {
        assert.equal(gameLogic.hasWon(boardLosing), 0)
    })

    it('hasWonVert', function () {
        assert.equal(gameLogic.hasWon(boardVertical), 1)
    })

    it('hasWonDiag', function () {
        assert.equal(gameLogic.hasWon(boardDiagonal), 1)
    })


});


