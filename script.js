'use strict';
/*
console.log(document.querySelector(".message").textContent);
document.querySelector('.message').textContent = '😊  Correct Number...!'

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 12;
*/

document.querySelector('.check').addEventListener('click', function(){
      const guess = Number(document.querySelector('.guess').value);
      if(!guess) {
            document.querySelector('.message').textContent = '⛔ No number!'
      }
})