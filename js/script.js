let argButtonName;

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

let computerMove,
playerMove,
randomNumber;

/**
 * Opisy ruchów
 */
 function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie rozpoznaję tego ruchu' + argMoveId + '.');
    return 'Nieznany ruch';
  }

}

/**
 * Wyniki gry
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);

  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Brawo Ty! Wygrywasz!');

  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Brawo Ty! Wygrywasz!');

  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Brawo Ty! Wygrywasz!');

  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
  }
  else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
}



  
  playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);

  displayResult(playerMove, computerMove);

}

const buttonRock = document.getElementById('button-rock'),
buttonPaper = document.getElementById('button-paper'),
buttonScissors = document.getElementById('button-scissors');


buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });

