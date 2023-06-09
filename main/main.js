function computerPlay() {
    var gameArray = ['Rock', 'Paper', 'Scissors'];
    var randomIndex = Math.floor(Math.random() * gameArray.length);
    var randomElement = gameArray[randomIndex];
    return randomElement;
}

console.log(computerPlay());

let wins = 0;
let ties = 0;
let losses = 0;

function playRound(playerSelection, computerSelection) {
    let answer = prompt("Rock, Paper or Scissors?");
    playerSelection = answer.toUpperCase();
    let option = computerPlay();
    computerSelection = option.toUpperCase();

    switch (playerSelection) {
        case "ROCK":
            switch (computerSelection) {
                case "ROCK":
                    ties++;
                    return alert("It's a tie!");
                case "PAPER":
                    losses++;
                    return alert("You Lose! Paper beats Rock!");
                case "SCISSORS":
                    wins++;
                    return alert("You Win! Rock beats Scissors!");
            }
        case "PAPER":
            switch (computerSelection) {
                case "PAPER":
                    ties++;
                    return alert("It's a tie!");
                case "SCISSORS":
                    losses++;
                    return alert("You Lose! Scissors beats Paper!");
                case "ROCK":
                    wins++;
                    return alert("You Win! Paper beats Rock!");
            }
        case "SCISSORS":
            switch (computerSelection) {
                case "SCISSORS":
                    ties++;
                    return alert("It's a tie!");
                case "ROCK":
                    losses++;
                    return alert("You Lose! Rock beats Scissors!");
                case "PAPER":
                    wins++;
                    return alert("You Win! Scissors beats Paper!");
            }
    }
}

function game() {
    let counter = 0;

    while (counter < 5) {
        playRound();
        counter++;
    }

    if (counter === 5) {
        alert("Game over! Scores: \n wins: " + wins + " ties: " + ties + " losses: " + losses);

        if (wins > losses) {
            alert("You are the winner!");
        }
        else if (losses > wins) {
            alert("Oh no, you lost..");
        }
        else {
            alert("It seems to be a tie")
        }
    }
}

game();