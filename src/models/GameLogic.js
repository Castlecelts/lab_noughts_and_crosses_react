class GameLogic {
    static result = 0;
    static getResult = function () {
        return GameLogic.result;
    }

    static hasWon = function (board) {
        const verticalIndex = [0, 1, 2];
        verticalIndex.forEach(element => {
            GameLogic.verticalCheck(board, element)
        });
        const horizontalIndex = [0, 3, 6];
        horizontalIndex.forEach(element => {
            GameLogic.horizontalCheck(board, element)
        })
        GameLogic.diagonalCheck(board)

        return GameLogic.result
    }

    static verticalCheck = function (board, index) {
        if (board[index] === board[index + 3] && board[index] === board[index + 6] && board[index] !== 0) {
            GameLogic.result = board[index]
        }
    }

    static horizontalCheck = function (board, index) {
        if (board[index] === board[index + 1] && board[index] === board[index + 2] && board[index] !== 0) {
            GameLogic.result = board[index]
        }
    }

    static diagonalCheck = function (board) {
        if (board[0] === board[4] && board[0] === board[8] && board[0] !== 0) {
            GameLogic.result = board[4]
        } else if (board[2] === board[4] && board[2] === board[6] && board[2] !== 0) {
            GameLogic.result = board[4]
        }
    }

}

// GameLogic.prototype.getResult = function () {
//     return this.result;
// }

// GameLogic.prototype.hasBoard = function (board) {
//     if (board.length === 9) {
//         return true;
//     }
//     else return false;
// }
// GameLogic.prototype.hasWon = function (board) {
//     horizontalIndex = [0, 1, 2];
//     horizontalIndex.forEach(element => {
//         this.horizontalCheck(board, element)
//     });
//     verticalIndex = [0, 3, 7];
//     verticalIndex.forEach(element => {
//         this.verticalCheck(board, element)
//     })
//     this.diagonalCheck(board)

//     return this.result
// }

// GameLogic.prototype.horizontalCheck = function (board, index) {
//     if (board[index] === board[index + 3] && board[index] === board[index + 6] && board[index] !== 0) {
//         this.result = board[index]
//     }
// }

// GameLogic.prototype.verticalCheck = function (board, index) {
//     if (board[index] === board[index + 1] && board[index] === board[index + 2] && board[index] !== 0) {
//         this.result = board[index]
//     }
// }

// GameLogic.prototype.diagonalCheck = function (board) {
//     if (board[0] === board[4] && board[0] === board[8] && board[0] !== 0) {
//         this.result = board[4]
//     } else if (board[2] === board[4] && board[2] === board[6] && board[2] !== 0) {
//         this.result = board[4]
//     }
// }

export default GameLogic;
