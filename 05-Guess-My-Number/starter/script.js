'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'You Got it!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 19;
// document.querySelector('.guess').value = 4;
// console.log(document.querySelector('.guess').value);

// randomly generate the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
document.querySelector('.check').addEventListener('click', function () {
  if (score > 1) {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      // Player didn't guess
      displayMessage('⛔You gotta guess a number!');
    } else if (guess === secretNumber) {
      // Player wins!
      displayMessage('🏆You got it!!!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      score--;
      displayMessage(guess > secretNumber ? '⬇️Too high!' : '⬆️Too low!');
    }
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = '⚔️You Died';
    document.querySelector('body').style.backgroundColor = '#FF0000';
  }
});

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
