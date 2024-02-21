export function hola(){
  console.log("Hola Mundo");
}

export function checkBoard(board: Array<Array<string>>): boolean {

  let checker: boolean = true;
  let allowedChars: Array<string> = ['-', 'N', 'B'];

  for (let index = 0; index < board.length; index++) {
    const element = board[index];
    if (element.length !== 8) { checker = false; }
    for(let square of element){
      if(square in allowedChars) { continue; }
      else {checker = false; }
    }
  }

  return checker; 
}

export function checkAttack(board: Array<Array<string>>): boolean {

  if (!checkBoard(board)){
    throw new Error('El formato del tablero no es válido.');
  }

  return undefined;
}
