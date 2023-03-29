


const gameCont = document.querySelector('.game-container');

const playBtn = document.getElementById('btn');

playBtn.addEventListener('click', getBoardSize);


//prompt user for board size
function getBoardSize() {

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
}

//create board with x and y dimensions
function setupBoard(size) {

    //clear board if setup already
    if(gameCont.childElementCount != 0) {gameCont.replaceChildren()}

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


