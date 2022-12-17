'use strict';

/*
// for practices DOM manipulation, this write some code and we see the change elements text and value
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉CorrecT Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Refactoring function for message class of elements
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // call the function for refactoring
    displayMessage('⛔ No Number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉CorrecT Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // highscore logic
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // refactoring codes
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too High...!' : '📉Too Low...!';
      displayMessage(guess > secretNumber ? '📈Too High...!' : '📉Too Low...!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😔You lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
  // repeat codes, we refactoring up line
  // when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too High...!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😔You lost the Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too Low...!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😔You lost the Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //}
  */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // message, score, secret number and guess reset initial value
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // button and page background to initial value
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
