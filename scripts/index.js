let board = [];
let whoseTurn = 0;
let winner;

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

const isPlayerTurn = function(){
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
    if(winCheck() || tieCheck()){
      $('.board').children().off();
      setTimeout(function(){
        restartGame()}, 3000);
    } else {
      turnSwitch();
    }
};
//player is able to play their token in a cell

const setCell = function(cell, player){
  $('#' + cell).html('<img src = ./images/'+ player +'.png style="width: 90px">').removeClass('unoccupied').removeClass('selected').addClass('occupied').off();
  board[cell] = player;
};
//visually updates cell with player token


const horizontalWin = function(){
    if(board[0] !== null && board[0] === board[1] && board[0] === board[2]){
      winner = board[0];
    } else if (board[3] !== null && board[3] === board[4] && board[3] === board[5]){
      winner = board[3];
    } else if (board[6] !== null && board[6] === board[7] && board[6] === board[8]){
      winner = board[6];
    }
  return winner;
};
//checks for horizontal set up for possible win


const verticalWin = function(){
    if(board[0] !== null && board[0] === board[3] && board[0] === board[6]){
      winner = board[0];
    } else if (board[1] !== null && board[1] === board[4] && board[1] === board[7]){
      winner = board[1];
    } else if (board[2] !== null && board[2] === board[5] && board[2] === board[8]){
      winner = board[2];
    }
  return winner;
};
//checks for vertical setup for possible win

const diagonalWin = function(){
  if (board[4] !== null){
    if (board[4] === board[0] && board[4] === board[8] || board[4] === board[2] && board[4] === board[6]){
      winner = board[4];
    }
  }
  return winner;
};
//checks for diagonal setup for possible win

const winCheck = function(){
  // if(xCount >= 3 || oCount >= 3){
    return horizontalWin() || verticalWin() || diagonalWin();
  // }
};
//checks if a player has won

const tieCheck = function(){
  return ($('.occupied').length === 9);
};

const setUpHandlers = function(){
  $('.board div').on('click', function(event){
    selectSquare($(this));
    let targetCell = $(this).attr('id');
    targetCell = parseFloat(targetCell);
    if (isVacantCell(targetCell)){
    play(targetCell);
  }
  });
};
//sets up event handlers on cells

const restartGame = function(){
  board = [];
  $('.board').empty();
  initializeBoard();
  drawBoard(board);
  setUpHandlers();
  whoseTurn = 0;
  xCount = 0;
  oCount = 0;
  winner = null;
};


$(document).ready(function() {
  initializeBoard();
  drawBoard(board);
  setUpHandlers();
});

//after 5 on second round of game, win function returns true. why?
