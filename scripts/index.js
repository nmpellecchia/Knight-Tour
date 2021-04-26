import { drawBoard, setStartingPosition } from './board.js';
import { startTour, stopTour } from './warnsdoff-tour.js';

// Refactor this file
function initialize() {
  let boardSize = 8;

  drawBoard(boardSize);
}

initialize();
//Declare the default moves in case the user doesn't change anything
let boardSize = 8;
let firstMove = [0, 0];

//Start over this file, listeners outside functions or this will become a mess to read

const $board = document.querySelector('.chessboard');
const $selectors = document.querySelector('.selectors');
const $boardSize = document.querySelector('.board-size');
const $startButton = document.querySelector('.start');

// Listen if the board size was changed by the user
$selectors.addEventListener('submit', e => {
  e.preventDefault();
  stopTour();
  // Convert str to int to avoid any error later
  const intBoardSize = parseInt($boardSize.value);
  //redraw the board
  drawBoard(intBoardSize);
  boardSize = intBoardSize;
});
// change the starting position
$board.addEventListener('click', e => {
  stopTour();
  // Mark the selected position on the document
  setStartingPosition(e.target);
  // Get the coordinates and convert them from str to int to avoid any error
  const strFirstMove = e.target.className.match(/\d+/g);
  firstMove = strFirstMove.map(position => {
    return parseInt(position);
  });
});
// Start the tour
$startButton.addEventListener('click', () => {
  //In case a tour was already executing
  stopTour();
  //Redraw the board to clear all squares if a tour was done before
  drawBoard(boardSize);
  startTour(boardSize, firstMove);
  console.log(boardSize);
  console.log(firstMove);
});
