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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// For testing
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = '⛔ No Number!')
    );

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉CorrecT Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High...!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too Low...!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
