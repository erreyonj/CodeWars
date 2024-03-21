// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.


function isSolved(board) {
    class Board{
        constructor(boardArr){
            this.a = boardArr[0][0]
            this.b = boardArr[0][1]
            this.c = boardArr[0][2]
            this.d = boardArr[1][0]
            this.e = boardArr[1][1]
            this.f = boardArr[1][2]
            this.g = boardArr[2][0]
            this.h = boardArr[2][1]
            this.i = boardArr[2][2]
        } 
    }
    let game = new Board(board)
    let one = () => {
        if(game.a === 1 && game.b === 1 && game.c === 1 ||
            game.d === 1 && game.e === 1 && game.f === 1||
            game.g === 1 && game.h === 1 && game.i === 1||
            game.a === 1 && game.d === 1 && game.g === 1||
            game.b === 1 && game.e === 1 && game.h === 1||
            game.c === 1 && game.f === 1 && game.i === 1||
            game.a === 1 && game.e === 1 && game.i === 1||
            game.c === 1 && game.e === 1 && game.g === 1){
            return 1
        } 
        return false
    }
    let two = () => {
        if(game.a === 2 && game.b === 2 && game.c === 2 ||
            game.d === 2 && game.e === 2 && game.f === 2||
            game.g === 2 && game.h === 2 && game.i === 2||
            game.a === 2 && game.d === 2 && game.g === 2||
            game.b === 2 && game.e === 2 && game.h === 2||
            game.c === 2 && game.f === 2 && game.i === 2||
            game.a === 2 && game.e === 2 && game.i === 2||
            game.c === 2 && game.e === 2 && game.g === 2){
            return 2
        } 
        return false
    }
    let drawOrInc = () => {
        if(one() === false && two() === false){
            if(Object.values(game).indexOf(0) === -1){
                return 0
            }
            return -1
        }

    }
    if(one() === 1){
        return 1
    } else if(two() === 2){
        return 2
    } else return drawOrInc()
}