let board = [];

const initializeBoard = function(){
  for (let i = 0; i < 9; i++){
    board.push(null);
  }
};

const drawBoard = function(array){
  for(let i = 0; i < array.length; i++){
    $('.board').append('<div class = square' + ' data-cell = ' + i +'></div>');
  }
};

$(document).ready(function() {
  initializeBoard();
  drawBoard(board);
});
