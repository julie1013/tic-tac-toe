let board = [];
// let x = $('.x');
// let o = $('.o');

const initializeBoard = function(){
  for (let i = 0; i < 9; i++){
    board.push(null);
  }
};

const drawBoard = function(array){
  for(let i = 0; i < array.length; i++){
    $('.board').append('<div class = square id =' + i +'></div>');
  }
};



const isVacantCell = function(cell){
  return board[cell] === null;
};


const play = function(player, cell){
  if (isVacantCell(cell)){
    board[cell] = player;
    setCell(cell, player);
  };
};

const setCell = function(cell, player){
  $(cell).append(player);
};

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

const sameThree = function(firstCell, adjacentCellOne, adjacentCellTwo){
  return (board[firstCell] === 'x' && board[adjacentCellOne] === 'x' && board[adjacentCellTwo] === 'x') ||
  (board[firstCell] === 'o' && board[adjacentCellOne] === 'o' && board[adjacentCellTwo] === 'o');
};

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


$(document).ready(function() {
  initializeBoard();
  drawBoard(board);
  // $(".square").on("click", function(event){
  //   move(board);
  // });
  console.log(board);
});
