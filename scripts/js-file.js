
let boardSize = 0;

const gameCont = document.querySelector('.game-container');

//prompt user for board size
while (true) {
    if (!(boardSize >= 1) || !(boardSize <= 100) || isNaN(boardSize)) {
        boardSize = prompt("Enter a number between 1 and 100: ")
    }
    else {
        setupBoard(boardSize);
        break;
    }
} 

//create board with x and y dimensions
function setupBoard(size) {

    const paddingRoom = 16 * size
    const dimension = (960 - paddingRoom) / size;
    const dimensionPx = dimension + "px";

    for (i = 1; i <= (size ** 2); i++) {
        //create element
        const square = document.createElement('div');
        square.classList.add('tile');
        square.style.width = dimensionPx;
        square.style.height = dimensionPx;

        square.addEventListener('mouseover', (e) => {
            e.target.classList.toggle('tile-on');
        });

        square.addEventListener('mouseleave', (e) => {
            e.target.classList.toggle('tile-on');
        });

        gameCont.appendChild(square);
    }
}



