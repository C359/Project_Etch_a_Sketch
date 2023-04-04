


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

    const paddingRoom = 12 * size
    const dimension = (600 - paddingRoom) / size;
    const dimensionPx = dimension + "px";

    for (i = 1; i <= (size ** 2); i++) {
        //create element
        const square = document.createElement('div');
        square.classList.add('tile');
        square.style.width = dimensionPx;
        square.style.height = dimensionPx;

        square.addEventListener('mouseover', (e) => {
            let currentBg = window.getComputedStyle(e.target).backgroundColor
            let rgbCol = currentBg.match(/\d+/g);
            let colVal = Math.floor(+rgbCol[0] * 0.9)
            let newBg = `rgb(${colVal},${colVal},${colVal})`

            e.target.style.backgroundColor = newBg;
            console.log(colVal);
           
        });

        /*square.addEventListener('mouseleave', (e) => {
            e.target.classList.toggle('tile-on');
        });*/

        gameCont.appendChild(square);
    }

}


