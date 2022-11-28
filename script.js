'use strict';

let randomNumber = function(){
      return Math.trunc(Math.random() * 20) + 1
}
let secretNumber = randomNumber();

let score = 20;
document.querySelector('.score').textContent = score;

let highScores = [];

function displayName(message) {
      document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function(){
      const guess = Number(document.querySelector('.guess').value);
      if(!guess) {
            displayName('⛔ No number!');
      } else if (guess === secretNumber){
            displayName('😊 Correct Number...!');
            score++;
            document.querySelector('.score').textContent = score;
            document.querySelector('.number').textContent = secretNumber; 
            document.querySelector('body').style.backgroundColor = '#60b347';
            highScores.push(score);
            document.querySelector('.highscore').textContent = highScores.reduce((acc, currentValue) => {
                  if(acc > currentValue) {
                        return acc
                  } else {
                        return currentValue
                  }
            })
      } else if(guess !== secretNumber) {
            if(!score) {
                  displayName('😢 You lost the game!')
                  return
            }
            displayName(guess > secretNumber ? ' Too high...!' : 'Too small...!');
            score--;
            document.querySelector('.score').textContent = score;
      } 
})

document.querySelector('.again').addEventListener('click', function(){
      displayName('Start guessing...');
      document.querySelector('.score').textContent = score = 20;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = null;
      document.querySelector('body').style.backgroundColor = '#222';
      secretNumber = randomNumber();
      highScores = [];
})