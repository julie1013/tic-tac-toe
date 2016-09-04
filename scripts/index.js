let board = [];
let x = $('.x');
let o = $('.o');

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
};

// const isWin = function(array){
//   for (let i = 0; i < array.length; i++){
//     if
//   }
// };

const horizontalAdjacent = function(firstCell, adjacentCellOne, adjacentCellTwo){
  if (Math.abs(adjacentCellOne - firstCell) === 1){
    if(Math.abs(adjacentCellTwo - firstCell) === 1 || Math.abs(adjacentCellTwo - firstCell) === 2){
      return true;
    } else {
      return false;
    }
  }
};

const verticalAdjacent = function(firstCell, adjacentCellOne, adjacentCellTwo){
  if(Math.abs(adjacentCellOne - firstCell) === 3){
    if(Math.abs(adjacentCellTwo - firstCell) === 3 || Math.abs(adjacentCellTwo - firstCell) === 6){
      return true;
    } else {
      return false;
    }
  }
};

const diagonalAdjacent = function(firstCell, adjacentCellOne, adjacentCellTwo){
  if (Math.abs(adjacentCellOne - firstCell) === 4){
    if(Math.abs(adjacentCellTwo - firstCell === 4) || Math.abs(adjacentCellTwo - firstCell === 8)){
      return true;
    } else {
      return false;
    }
  }
};

// const horizontalWin = function(array, space, player){
//   for(let i = 0; i < array.length; i++){
//     if(!areBothSpacesOccupied(Math.abs(i - 1), Math.abs(i - 2)) || !areBothSpacesOccupied(Math.abs(i - 1), Math.abs(i - 1))){
//       return false;
//     } else if (areBothSpacesOccupied(Math.abs(i - 1)) || areBothSpacesOccupied(Math.abs(i - 2))){
//       if(isSameToken(x, x) || isSameToken(o, o)){
//         return true;
//       }
//     }
//   }
// };

// const verticalWin = function(array){
//   for(let i = 0; i < array.length; i++){
//     if(!areBothSpacesOccupied(Math.abs(i)))
//   }
// };

const isSameToken = function(player, token){
  return player === token;
};

const areBothSpacesOccupied = function(a, b){
  return a !== null && b !==null
};

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
