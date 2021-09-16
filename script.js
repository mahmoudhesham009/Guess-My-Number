'use strict';

let target = 0;
let highScore = 0;
let isGameStopped = false;

startTheGame();
document.querySelector(".check")
    .addEventListener('click', function () {
        let x = document.querySelector('.guess').value;
        if (isGameStopped) return;
        if (!Boolean(x)) {
            document.querySelector('.message').textContent = 'inter a propteat value !!';
            return;
        }
        if (x == target) {
            winner();
            stopTheGame();
            return;
        }
        else if (x < target) {
            document.querySelector('.message').textContent = 'it is higher number';
            document.querySelector('.score').textContent--;

        }
        else if (x > target) {
            document.querySelector('.message').textContent = 'it is lower number';
            document.querySelector('.score').textContent--;

        }
        if (Number(document.querySelector('.score').textContent) === 1) {
            document.querySelector('.message').textContent = 'losser';
            stopTheGame();
        }

    });

document.querySelector('.again')
    .addEventListener('click', function () { startTheGame(); });



function startTheGame() {
    target = parseInt(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'select number...';
    document.querySelector('.score').textContent = 20;
    isGameStopped = false;
    console.log(target);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';


}

function winner() {
    document.querySelector('.message').textContent = 'congratulation 🎉🎉';
    if (Number(document.querySelector('.score').textContent) > highScore)
        highScore = document.querySelector('.score').textContent;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = target;
}

function stopTheGame() {
    isGameStopped = true;
}


