
let boardSize = 0;

while (true) {
    if (!(boardSize >= 1) || !(boardSize <= 100) || isNaN(boardSize)) {
        boardSize = prompt("Enter a number between 1 and 100: ")
    }
    else {
        setupBoard(boardSize);
        break;
    }
} 


function setupBoard(size) {
    alert(size);
}

const gameCont = document.querySelector('.game-container');


(boardSize >= 1 && boardSize <= 100 && Number.isInteger(boardSize)) 