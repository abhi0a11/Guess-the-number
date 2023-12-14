'use strict'

// const x = function(){
//     console.log(document.querySelector('.guess').value);
// }
// document.querySelector('.check').addEventListener('click',x)

// Math.random() generates number between 0 and 1
//Math.trunc() removes decimal digits

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function(feedback){
    document.querySelector('.message').textContent = feedback;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('⛔ No number!');
    }
    else if ( guess > 20 || guess < 1) {
        displayMessage('😬 Guess between 1 and 20');
    }
    else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.highscore').textContent = highScore = Math.max(score,highScore);
    }
    else if (guess !== secretNumber && score > 0) {
        // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High' : '📉 Too Low';

        displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
        score--;
        document.querySelector('.score').textContent = score;
        if(score == 0) {
            displayMessage('You Lost the game!');
        } 
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});