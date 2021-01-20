export function drawBoard(boardSize) {
	const board = document.querySelector('.chessboard');
	const sqSize = 3;
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
			/* square.style.zIndex = 0; */
			square.style.lineHeight = `${sqSize}rem`;
			square.style.textAlign = 'center';
			// Test only, remove
			/* square.textContent = `${row}-${column}`; */
			board.appendChild(square);
		}
	}
}
