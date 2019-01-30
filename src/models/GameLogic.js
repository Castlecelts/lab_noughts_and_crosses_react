
var GameLogic = function () {

}

GameLogic.prototype.hasBoard = function (board) {
    if (board.length === 9) {
        return true;
    }
    else return false;
}


module.exports = GameLogic;