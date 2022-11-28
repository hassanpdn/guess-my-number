'use strict';
/*
console.log(document.querySelector(".message").textContent);
document.querySelector('.message').textContent = '😊  Correct Number...!'

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 12;
*/

let randomNumber = function(){
      return Math.trunc(Math.random() * 100) + 1
}
let secretNumber = randomNumber();

let score = 20;
document.querySelector('.score').textContent = score;

let highScores = [];

document.querySelector('.check').addEventListener('click', function(){
      const guess = Number(document.querySelector('.guess').value);
      if(!guess) {
            document.querySelector('.message').textContent = '⛔ No number!'
      } else if (guess === secretNumber){
            document.querySelector('.message').textContent = '😊 Correct Number...!';
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
      } else if(guess > secretNumber) {
            if(!score) {
                  document.querySelector('.message').textContent = '😒 😢 You lost the game!'
                  return
            }
            document.querySelector('.message').textContent = ' Too high...!'
            score--;
            document.querySelector('.score').textContent = score;
      }  else if(guess < secretNumber) {
            if(!score) {
                  document.querySelector('.message').textContent = ' 😢 You lost the game!'
                  return
            }
            document.querySelector('.message').textContent = '😒 Too Small...!'
            score--;
            document.querySelector('.score').textContent = score;
      }
})

document.querySelector('.again').addEventListener('click', function(){
      document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.score').textContent = score = 20;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = null;
      document.querySelector('body').style.backgroundColor = '#222';
      secretNumber = randomNumber();
      highScores = [];
})