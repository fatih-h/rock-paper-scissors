let counter = 5;
let yourHP = 5;
let computerHP = 5;

let endText = document.getElementById("ping");
let resultText = document.getElementById("theEnd");

let hp1 = document.getElementById("you");
let hp2 = document.getElementById("computer");

playerPlay();


function playerPlay() {

    document.getElementById("left").addEventListener('click', () => {
        play('Rock', computerPlay());


    });
    document.getElementById("mid").addEventListener('click', () => {
        play('Paper', computerPlay());

    });
    document.getElementById("right").addEventListener('click', () => {
        play('Scissors', computerPlay());
    });
}

function computerPlay() {
    let number = Math.floor(Math.random() * 3 + 1);

    if (number == 1) {
        return "Rock";
    } else if (number == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function play(playerSelection, computerSelection) {


    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            endText.innerText = ("No one get the point!");

        } else if (computerSelection == "Paper") {
            endText.innerText = ("Computer get one point!");
            yourHP--;
        } else {
            endText.innerText = ("You get one point!");
            computerHP--;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            endText.innerText = ("You get one point!");
            computerHP--;
        } else if (computerSelection == "Paper") {
            endText.innerText = ("No one get the point!");

        } else {

            endText.innerText = ("Computer get one point!");
            yourHP--;
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {

            endText.innerText = ("Computer get one point!");
            yourHP--;
        } else if (computerSelection == "Paper") {

            endText.innerText = ("You get one point!");
            computerHP--;
        } else {
            endText.innerText = ("No one get the point!");

        }
    }
    hp1.innerText = yourHP;
    hp2.innerHTML = computerHP;
    if (yourHP == 0 || computerHP == 0) {
        if (yourHP > computerHP) {
            resultText.innerText = "You WIN!";
        } else if (yourHP == computerHP) {
            resultText.innerText = "DRAW!";
        } else {
            resultText.innerText = "You LOSE!";
        }
        counter = 5;
        yourHP = 5;
        computerHP = 5;
        return false
    } else {
        resultText.innerText = "vs";
    }

}

