'use strict';
/*
console.log(document.querySelector(".message").textContent);
document.querySelector('.message').textContent = '😊  Correct Number...!'

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 12;
*/
const secretNumber = Math.trunc(Math.random() * 100) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;
document.querySelector('.score').textContent = score;


document.querySelector('.check').addEventListener('click', function(){
      const guess = Number(document.querySelector('.guess').value);
      if(!guess) {
            document.querySelector('.message').textContent = '⛔ No number!'
      } else if (guess === secretNumber){
            document.querySelector('.message').textContent = '😊 Correct Number...!';
            score++;
            document.querySelector('.score').textContent = score;
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