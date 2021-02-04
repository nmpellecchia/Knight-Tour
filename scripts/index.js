import { drawBoard } from './board.js';
import { startTour } from './warnsdoff-tour.js';

function initialize() {
	const defaultBoardSize = 8; //This will come from user input in the future;
	const firstMove = [0, 0]; // This could be target from click on the board??

	drawBoard(defaultBoardSize);
	changeBoardSize();
	/* startTour(boardSize, firstMove); */
}

function changeBoardSize() {
	// Select the full form to be able of detect a submit
	const selectors = document.querySelector('.selectors');
	const boardSize = document.querySelector('.board-size');

	selectors.addEventListener('submit', (e) => {
		e.preventDefault();
		// Convert str to int to avoid any error later
		const intBoardSize = parseInt(boardSize.value);

		drawBoard(intBoardSize);
	});
}

initialize();
