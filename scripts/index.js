let board = [];
let whoseTurn = 0;
// let x = $('.x');
// let o = $('.o');

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

const isX = function(player){
  return player === 'x';
};
//is player x

const isO = function(player){
  return player === 'o';
};
//is player o

const isPlayerTurn = function(){
  return isX(player) && whoseTurn === 0 || isO(player) && whoseTurn === 1;
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
}

const play = function(player, cell){
    board[cell] = player;
    setCell(cell, player);
};
//player is able to play their token in a cell

const setCell = function(cell, player){
  $('#' + cell).html('<img src = ./images/'+ player +'.png style="width: 90px">');
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
  $('.board div').on('click', function(event){
    selectSquare($(this));
    let targetCell = $(this).attr('id');
    if (isVacantCell(targetCell)){
    play(player, targetCell);
  }
  });
  console.log(board);
});
