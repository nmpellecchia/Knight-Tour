import { drawBoard, setStartingPosition } from './board.js';
import { startTour } from './warnsdoff-tour.js';

function initialize() {
	let boardSize = 8; //This will come from user input in the future;
	let firstMove = [0, 0]; // This could be target from click on the board??

	drawBoard(boardSize);

	/* changeBoardSize(boardSize);
	changeStartingPosition(firstMove); */

	/* startTour(boardSize, firstMove); */

	/* const startButton = document.querySelector('.start');
	startButton.addEventListener('click', () => {
		console.log(boardSize);
		console.log(firstMove);
		startTour(boardSize, firstMove);
	}); */
}
/* 
function changeBoardSize(boardSize) {
	// Select the full form to be able of detect a submit
	const selectors = document.querySelector('.selectors');
	const newBoardSize = document.querySelector('.board-size');

	selectors.addEventListener('submit', (e) => {
		e.preventDefault();
		// Convert str to int to avoid any error later
		const intBoardSize = parseInt(newBoardSize.value);
		//redraw the board
		drawBoard(intBoardSize);
		// Return the new value
		boardSize = intBoardSize;
		console.log(boardSize);

		return boardSize;
	});
}

function changeStartingPosition(firstMove) {
	const board = document.querySelector('.chessboard');

	board.addEventListener('click', (e) => {
		// Mark the selected position on the document
		setStartingPosition(e.target);
		// Set the first move to the selected coordinates
		const newFirstMove = e.target.className.match(/\d+/g);
		firstMove = newFirstMove;

		console.log(firstMove);
		return firstMove;
	});
} */

initialize();
//Declare the default moves in case the user doesn't change anything
let boardSize = 8;
let firstMove = [0, 0];

//Start over this file, listeners outside functions or this will become a mess to read

const $board = document.querySelector('.chessboard');
const $selectors = document.querySelector('.selectors');
const $boardSize = document.querySelector('.board-size'); // Unused?
const $startButton = document.querySelector('.start');

// Listen if the board size was changed by the user
$selectors.addEventListener('submit', (e) => {
	e.preventDefault();
	// Convert str to int to avoid any error later
	const intBoardSize = parseInt($boardSize.value);
	//redraw the board
	drawBoard(intBoardSize);
	boardSize = intBoardSize;
});
// change the starting position
$board.addEventListener('click', (e) => {
	// Mark the selected position on the document
	setStartingPosition(e.target);
	// Set the first move to the selected coordinates
	const strFirstMove = e.target.className.match(/\d+/g);
	firstMove = strFirstMove.map((position) => {
		return parseInt(position);
	});
});
// Start the tour
$startButton.addEventListener('click', () => {
	startTour(boardSize, firstMove);
	console.log(boardSize);
	console.log(firstMove);
});
