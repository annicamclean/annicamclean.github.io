'use strict';
(function () {
    let usersChoice = ' ';
    let changePicture = null;
    let pictureChanged = 0;
    let shuffle = 0;
    let computerChoice = ' ';
    let yourWins = 0;
    let yourLosses = 0;
    let yourTies = 0;

    window.addEventListener('load', init);

    function init() {
        id('rock').addEventListener('click', userChoose.bind(null, 1));
        id('paper').addEventListener('click', userChoose.bind(null, 2));
        id('scissors').addEventListener('click', userChoose.bind(null, 3));
        id('play-again').addEventListener('click', playAgain);
        id('reset-counter').addEventListener('click', resetCounter);
    }

    function userChoose(number) {
        if (usersChoice === ' ') {
            if (number === 1) {
                let rock = id('rock');
                rock.classList.add('chosen');
                rock.classList.remove('not-chosen');
                usersChoice = 'rock';
                computerNow();
            } else if (number === 2) {
                let paper = id('paper');
                paper.classList.add('chosen');
                paper.classList.remove('not-chosen');
                usersChoice = 'paper';
                computerNow();
            } else {
                let scissors = id('scissors');
                scissors.classList.remove('not-chosen');
                scissors.classList.add('chosen');
                usersChoice = 'scissors';
                computerNow();
            }
        }

    }

    function computerNow() {
        changePicture = setInterval(changingPicture, 500);
    }

    function changingPicture() {
        if (pictureChanged !== 6) {
            let computerPic = id('computer-choice');
            if (shuffle === 0) {
                computerPic.src = "./images/paper.PNG";
                pictureChanged++;
                shuffle++;
            } else if (shuffle === 1) {
                computerPic.src = "./images/rock.PNG";
                pictureChanged++;
                shuffle++;
            } else {
                computerPic.src = "./images/scissors.PNG";
                pictureChanged++;
                shuffle -= 2;
            }
        } else {
            clearInterval(changePicture);
            computerChose();
        }
    }

    function computerChose() {
        let computerNumber = Math.floor(Math.random() * 3);
        console.log(computerNumber);
        let computerPic = id('computer-choice');
        if (computerNumber === 0) {
            computerChoice = 'rock';
            computerPic.src = "./images/rock.PNG";
            computerPic.classList.add('chosen');
        } else if (computerNumber === 1) {
            computerChoice = 'paper';
            computerPic.src = "./images/paper.PNG";
            computerPic.classList.add('chosen');
        } else {
            computerChoice = 'scissors';
            computerPic.src = "./images/scissors.PNG";
            computerPic.classList.add('chosen');
        }
        whoWon();
    }

    function whoWon() {
        let result = id('results');
        if (computerChoice === usersChoice) {
            result.innerHTML = "You TIED with the Computer";
            yourTies++;
        } else if (usersChoice === 'rock') {
            if (computerChoice === 'paper') {
                result.innerHTML = "You LOST to the Computer";
                yourTies++;
            } else {
                result.innerHTML = "You WON against the Computer";
                yourWins++;
            }
        } else if (usersChoice === 'paper') {
            if (computerChoice === 'rock') {
                result.innerHTML = "You WON against the Computer";
                yourWins++;
            } else {
                result.innerHTML = "You LOST to the Computer";
                yourLosses++;
            }
        } else {
            if (computerChoice === 'rock') {
                result.innerHTML = "You LOST to the Computer";
                yourLosses++;
            } else {
                result.innerHTML = "You WON against the Computer";
                yourWins++;
            }
        }
        let playAgainButton = id('play-again');
        playAgainButton.classList.add('show');
        playAgainButton.classList.remove('hide');

        let gameUpdate = id('game-counter');
        gameUpdate.innerHTML = `Wins: ${yourWins} Losses: ${yourLosses} Ties: ${yourTies}`;
    }

    function playAgain() {
        let pictureReset = document.querySelector('.chosen');
        pictureReset.classList.add('not-chosen');
        pictureReset.classList.remove('chosen');
        usersChoice = ' ';
        let computerPic = id('computer-choice');
        computerChoice = ' ';
        computerPic.src = "./images/question-mark.PNG";
        computerPic.classList.remove('chosen');
        shuffle = 0;
        changePicture = null;
        pictureChanged = 0;
        let playAgainButton = id('play-again');
        playAgainButton.classList.add('hide');
        playAgainButton.classList.remove('show');
    }

    function resetCounter() {
        yourWins = 0;
        yourLosses = 0;
        yourTies = 0;
        let gameUpdate = id('game-counter');
        gameUpdate.innerHTML = `Wins: ${yourWins} Losses: ${yourLosses} Ties: ${yourTies}`;
    }
    /* -------------------- Helper Function -------------------- */
    /**
     * id helper function
     * @param {String} idName name of id
     * @return {Object} element with id name
     */
    function id(idName) {
        return document.getElementById(idName);
    }

})();