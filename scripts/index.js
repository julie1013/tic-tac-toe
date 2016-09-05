let board = [];
let whoseTurn = 0;

const initializeBoard = function(){
  for (let i = 0; i < 9; i++){
    board.push(null);
  }
};
//sets up an array for the board

const drawBoard = function(array){
  for(let i = 0; i < array.length; i++){
    $('.board').append('<div id =' + i + '></div>');
    $('.board div').addClass('square').addClass('unoccupied');
  }
};
//sets up the board visually

const isX = function(){
  let player = 'x';
  return player;
};
//is player x

const isO = function(){
  let player = 'o';
  return player;
};
//is player o

const isPlayerTurn = function(player){
  if (whoseTurn === 0){
    player = 'x';
  } else {
    player = 'o';
  }
  return player;
};
//returns whose turn it is

const turnSwitch = function(){
  if (whoseTurn === 1) {
    whoseTurn = 0;
  } else {
    whoseTurn = 1;
  }
};
//switches between turns

const isVacantCell = function(cell){
  return board[cell] === null;
};
//checks if cell is vacant

const selectSquare = function(element){
  $(element).addClass('selected');
  $(element).siblings().removeClass('selected');
};
//adds selected class to square that is clicked

const play = function(cell){
    player = isPlayerTurn();
    setCell(cell, player);
    turnSwitch();
};
//player is able to play their token in a cell

const setCell = function(cell, player){
  $('#' + cell).html('<img src = ./images/'+ player +'.png style="width: 90px">').removeClass('unoccupied').removeClass('selected').addClass('occupied');
};
//visually updates cell with player token

const horizontalAdjacent = function(firstCell, adjacentCellOne, adjacentCellTwo){
  if (Math.abs(adjacentCellOne - firstCell) === 1){
    if(Math.abs(adjacentCellTwo - firstCell) === 1 || Math.abs(adjacentCellTwo - firstCell) === 2){
      return true;
    } else {
      return false;
    }
  }
  return false;
};
//checks for horizontal set up for possible win

const verticalAdjacent = function(firstCell, adjacentCellOne, adjacentCellTwo){
  if(Math.abs(adjacentCellOne - firstCell) === 3){
    if(Math.abs(adjacentCellTwo - firstCell) === 3 || Math.abs(adjacentCellTwo - firstCell) === 6){
      return true;
    } else {
      return false;
    }
  }
  return false;
};
//checks for vertical setup for possible win

const diagonalAdjacent = function(firstCell, adjacentCellOne, adjacentCellTwo){
  if (Math.abs(adjacentCellOne - firstCell) === 4){
    if(Math.abs(adjacentCellTwo - firstCell === 4) || Math.abs(adjacentCellTwo - firstCell === 8)){
      return true;
    } else {
      return false;
    }
  }
  return false;
};
//checks for diagonal setup for possible win

const sameThree = function(firstCell, adjacentCellOne, adjacentCellTwo){
  return (board[firstCell] === 'x' && board[adjacentCellOne] === 'x' && board[adjacentCellTwo] === 'x') ||
  (board[firstCell] === 'o' && board[adjacentCellOne] === 'o' && board[adjacentCellTwo] === 'o');
};
//checks if the same three tokens are in adjacent cells

const winCheck = function(firstCell, adjacentCellOne, adjacentCellTwo){
  if (sameThree(firstCell, adjacentCellOne, adjacentCellTwo)){
    if(horizontalAdjacent(firstCell, adjacentCellOne, adjacentCellTwo) ||
      verticalAdjacent(firstCell, adjacentCellOne, adjacentCellTwo) ||
      diagonalAdjacent(firstCell, adjacentCellOne, adjacentCellTwo)){
        return true;
      } else {
        return false;
      }
  }
  return false;
};
//checks if a player has won

$(document).ready(function() {
  initializeBoard();
  drawBoard(board);
  isPlayerTurn();
  $('.board div').on('click', function(event){
    selectSquare($(this));
    let targetCell = $(this).attr('id');
    targetCell = parseFloat(targetCell);
    if (isVacantCell(targetCell)){
    play(targetCell);
  }
  });
  console.log(board);
});
