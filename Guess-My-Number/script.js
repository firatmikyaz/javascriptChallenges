'use strict';

// for practices DOM manipulation, this write some code and we see the change elements text and value
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉CorrecT Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;