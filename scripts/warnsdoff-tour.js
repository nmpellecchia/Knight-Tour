import { updateBoard } from './board.js';

export function startTour(boardSize, firstMove) {
	// Generate a 2D array with the board length
	const board = Array(boardSize)
		.fill(0)
		.map(() => Array(boardSize).fill(0));
	const moveList = Array();

	moveList.push(firstMove);
	//Update the board
	getFirstMove(firstMove, board);
	updateBoard(moveList.length, firstMove);
	// Start the tour
	return setTimeout(() => updateKnightTour(moveList, board), 500);
}

function getFirstMove(firstMove, board) {
	//Set the board in the correct coordinates == to the number of moves (In this case, 1)
	board[firstMove[0]][firstMove[1]] = 1;
}

function getPossibleMoves(position) {
	const possibleMoves = [
		[position[0] + 2, position[1] + 1],
		[position[0] + 1, position[1] + 2],
		[position[0] - 2, position[1] - 1],
		[position[0] - 1, position[1] - 2],
		[position[0] + 2, position[1] - 1],
		[position[0] + 1, position[1] - 2],
		[position[0] - 2, position[1] + 1],
		[position[0] - 1, position[1] + 2],
	];

	return possibleMoves;
}

function areMovesAllowed(moves, board) {
	//Filter moves that go off the board
	const legalMoves = moves.filter((move) => {
		return (
			move[0] >= 0 &&
			move[0] < board.length &&
			move[1] >= 0 &&
			move[1] < board.length &&
			// Verify knight won't land on a visited square //
			board[move[0]][move[1]] == 0
		);
	});

	return legalMoves;
}

function isTourCompleted(moveList, board) {
	// The total amount of squares the knight needs to visit
	const totalPossibleMoves = board.length ** 2;
	//The amount of squares it visited
	const movesMade = moveList.length;

	return movesMade == totalPossibleMoves;
}

function updateKnightTour(moveList, board) {
	const lastMove = moveList[moveList.length - 1];

	if (isTourCompleted(moveList, board)) {
		return true;
	}

	//Get ALL moves for current position
	const possibleMoves = getPossibleMoves(lastMove);
	// Only let the legal moves
	const legalMoves = areMovesAllowed(possibleMoves, board);

	// Order them based on the possible future moves each one has
	const orderedMoves = orderMovesByDegree(legalMoves, board);

	//Move the knight
	for (let i = 0; i < orderedMoves.length; i++) {
		const currentMove = orderedMoves[i];

		moveList.push(currentMove);
		board[currentMove[0]][currentMove[1]] = moveList.length;
		updateBoard(moveList.length, currentMove);

		// Check if a solution is found
		// The timeout is only visual, can be removed without repercursions
		if (setTimeout(() => updateKnightTour(moveList, board), 500)) {
			return true;
		}
		//No solution was found, delete the movement and try the next one
		moveList.pop();
		board[currentMove[0]][currentMove[1]] = 0;
	}
	// No solution was found
	window.alert('No solution found');
	return false;
}

function orderMovesByDegree(moves, board) {
	const orderedMoves = moves.sort((moveA, moveB) => {
		//Get all the moves possible from those positions
		const possibleMovesA = getPossibleMoves(moveA);
		const possibleMovesB = getPossibleMoves(moveB);
		//Order them from least to most moves possibles
		return areMovesAllowed(possibleMovesA, board).length >
			areMovesAllowed(possibleMovesB, board).length
			? 1
			: -1;
	});

	return orderedMoves;
}
