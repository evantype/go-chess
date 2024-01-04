// Объект для хранения текущего состояния игры
let state = {
    board: [...Array(8)].map(x=>Array(8).fill(null)), // 8x8 массив для представления доски
    currentTurn: 'white', // цвет фигур текущего игрока (белый начинает)
};

window.onload = () => {
    renderBoard();
    placeCheckers();
}

// Функция для отображения доски
function renderBoard() {
    const board = document.getElementById("checkers-board");
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            let cell = document.createElement("div");
            cell.classList.add('cell');
            if((i + j) % 2 === 0) {
                cell.classList.add('white');
            } else {
                cell.classList.add('black');
            }
            cell.id = `cell-${i}-${j}`; // пригодится позже для идентификации ячеек
            board.appendChild(cell);
        }
    }
}

// Функция для размещения шашек на доске в начальной позиции
function placeCheckers() {
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            let cell = document.getElementById(`cell-${i}-${j}`);
            if(i < 3 && (i + j) % 2 === 1) {
                state.board[i][j] = 'white';
                cell.classList.add('white-checker');
            }
            if(i >= 5 && (i + j) % 2 === 1) {
                state.board[i][j] = 'black';
                cell.classList.add('black-checker');
            }
        }
    }
}