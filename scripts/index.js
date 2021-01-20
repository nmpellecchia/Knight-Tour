import { drawBoard } from './board.js';
import { startTour } from './warnsdoff-tour.js';

function initialize() {
	const boardSize = 4; //This will come from user input in the future;
	const firstMove = [0, 0]; // This could be target from click on the board??

	drawBoard(boardSize);
	startTour(boardSize, firstMove);
}

initialize();
