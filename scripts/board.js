function drawBoard(boardSize) {
  const board = document.querySelector('.chessboard');
  /* Change size according to the screen size so it doesn't overflow */
  const sqSize = window.innerWidth < 450 ? 2.5 : 3;
  //Remove all childs from the board, if not will cause display errors
  eraseBoard(board);

  //Styling the board so it has the correct shape
  board.style.gridTemplateColumns = `repeat(${boardSize}, ${sqSize}rem)`;
  // Generate the board
  for (let row = 0; row < boardSize; row++) {
    for (let column = 0; column < boardSize; column++) {
      const square = document.createElement('div');
      square.classList.add(`sq${row}-${column}`);

      // When the sum of columns and rows is even the square is always white
      (row + column) % 2 == 0
        ? (square.style.backgroundColor = '#DADADA') // "Light"
        : (square.style.backgroundColor = '#BABABA'); // "Dark"
      // dynamic styling
      square.style.height = `${sqSize}rem`;
      square.style.width = `${sqSize}rem`;
      square.style.lineHeight = `${sqSize}rem`;
      square.style.textAlign = 'center';

      board.appendChild(square);
    }
  }
}

function updateBoard(moveNumber, move) {
  // Get the HTML square
  const boardSquare = document.querySelector(`.sq${move[0]}-${move[1]}`);

  boardSquare.textContent = moveNumber;
}

function eraseBoard(board) {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

function setStartingPosition(newPosition) {
  const previousPosition = document.querySelector('#selected');
  // Deselect the previous position
  previousPosition ? previousPosition.removeAttribute('id') : '';
  // Select the new one
  newPosition.id = 'selected';
}

export { drawBoard, updateBoard, setStartingPosition };
