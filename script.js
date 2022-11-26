'use strict';


const secretNumber = Math.floor(Math.random( )*20);

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.again').addEventListener('click', () => {
      document.querySelector('.score').textContent = 20;
      document.querySelector('input').value = null;
      document.querySelector('.number').textContent = Math.floor(Math.random( )*20);
})


document.querySelector('.check').addEventListener('click', ()=> {
      const guess = parseInt(document.querySelector('input').value);
      const messageContainer = document.querySelector('.message');
      const scoreContainer = document.querySelector('.score');
      const score = parseInt(document.querySelector('.score').textContent);

      // When user is lost.
      if(score === 1) {
            messageContainer.textContent = 'You lost!';
            scoreContainer.textContent = score - 1;
            return
      } 
      // When user has chance to guess.
      else if(score) {
            // When the user guess is empty
            if(!guess) { messageCo  ntainer.textContent = 'No input!'}
            // When the user guess is accepted
            else if(guess === secretNumber) {
                  document.querySelector('body').style.backgroundColor = 'green';
                  messageContainer.textContent = 'Success! 👍';
            } else if (guess > secretNumber) {
                  scoreContainer.textContent = score - 1;
                  messageContainer.textContent = 'Too  ! 😒'; 
            } else if (guess < secretNumber) {
                  scoreContainer.textContent = score - 1;
                  messageContainer.textContent = 'Too low! 😒'
            }
      }
      
}) 
