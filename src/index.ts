export function checkBoard(board: Array<Array<string>>): boolean {

  for (let index = 0; index < board.length; index++) {
    const element = board[index];
    if (element.length !== 8) { return false; }
    else if(board.length !== 8) { return false; }
    for(let square of element){
      if(square === "-" || square === 'N' || square === 'B') { continue; }
      else { return false; }
    }
  }

  return true; 
}

export function getPositions(board: string[][]): number[][]{
  
  let positions: Array<Array<number>> = [];

  for (let row = 0; row < board.length; row++) {
    const element = board[row];
    for (let square = 0; square < element.length; square++) {
      const aux = element[square];
      if(aux === 'N' || aux === 'B'){
        positions.push([row + 1, square + 1]);
      }
    }
  }

  if(positions.length !== 2) {
    throw new Error('Solo debe haber una reina de cada color.')
  }

  return positions;
}

export function checkAttack(board: Array<Array<string>>): boolean {

  if (!checkBoard(board)){
    throw new Error('El formato del tablero no es válido.');
  }

  const positions = getPositions(board);

  if(positions[0][0] === positions[1][0] || positions[0][1] === positions[1][1] || (positions[0][0] - positions[0][1]) === (positions[1][0] - positions[1][1])) {
    return true;
  }
  else { return false; }

}