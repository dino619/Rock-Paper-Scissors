let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScore();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove == 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose!';
    } else if (computerMove === 'paper') {
      result = 'You win!';
    } else {
      result = 'Tie!';
    }
  } else if (playerMove == 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie!';
    } else if (computerMove === 'paper') {
      result = 'You lose!';
    } else {
      result = 'You win!';
    }
  } else if (playerMove == 'paper') {
    if (computerMove === 'rock') {
      result = 'You win!';
    } else if (computerMove === 'paper') {
      result = 'Tie!';
    } else {
      result = 'You lose!';
    }
  }

  if (result === 'You win!') {
    score.wins++;
  } else if (result === 'You lose!') {
    score.losses++;
  } else {
    score.ties++;
  }

  updateScore();

  document.querySelector('.js-result').textContent = result;

  document.querySelector('.js-moves').textContent = `You picked ${moveToEmoji(
    playerMove
  )}. The computer picked ${moveToEmoji(computerMove)}.`;

  localStorage.setItem('score', JSON.stringify(score));
}

function updateScore() {
  document.querySelector(
    '.js-score'
  ).textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}

function moveToEmoji(move) {
  if (move === 'rock') {
    return '✊';
  } else if (move === 'paper') {
    return '✋';
  } else {
    return '✌️';
  }
}
