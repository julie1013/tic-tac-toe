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

const isValidMove = function(array){
  for(let i = 0; i < array.length; i++){
    return array[i] === null;
  }
}

const move = function(array){
    if(isValidMove(board)){
      alert("hi");
  }
};

$(document).ready(function() {
  initializeBoard();
  drawBoard(board);
  $(".square").on("click", function(event){
    move(board);
  });
});
