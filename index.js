let endText = document.getElementById("ping");

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
            return null
        } else if (computerSelection == "Paper") {
            endText.innerText = ("Computer get one point!");
            return 2
        } else {
            endText.innerText = ("You get one point!");
            return 1
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            endText.innerText = ("You get one point!");
            return 1
        } else if (computerSelection == "Paper") {
            endText.innerText = ("No one get the point!");
            return null
        } else {

            endText.innerText = ("Computer get one point!");
            return 2
        }
    } else {
        if (computerSelection == "Rock") {

            endText.innerText = ("Computer get one point!");
            return 2
        } else if (computerSelection == "Paper") {

            endText.innerText = ("You get one point!");
            return 1
        } else {
            endText.innerText = ("No one get the point!");
            return null
        }
    }

}
/*
function game() {
    let counter = 0;
    let score;
    for(let i = 0; i < 5; i++) {
        let result = play('Rock', computerPlay());
        if (result == 1) {
            counter++;
        }
        else if (result == 2) {
            counter--;
        } else {

        }
        
    }
    if (counter > 0) {
        score = "You WIN!";
    }
    else if (counter < 0) {
        score = "You LOSE!";
    }
    else {
        score = "DRAW!"
    }
    return score
}



*/