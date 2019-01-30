var GameLogic = require('./GameLogic');
var assert = require('assert');

describe('gameLogic', function () {

    beforeEach(function () {
        gameLogic = new GameLogic()
    })

    it('hasBoard', function () {
        assert.equal(gameLogic.hasBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]), true);
    })

});


