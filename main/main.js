function computerPlay() {
    var gameArray = ['Rock', 'Paper', 'Scissors'];
    var randomIndex = Math.floor(Math.random()*gameArray.length);
    var randomElement = gameArray[randomIndex];
    return randomElement;
}

console.log(computerPlay());



function gamePlay(playerSelection, computerSelection) {
    let answer = prompt("Rock, Paper or Scissors?");
    playerSelection = answer.toUpperCase();
    let option = computerPlay();
    computerSelection = option.toUpperCase();

    switch(playerSelection) {
        case "ROCK": 
        if(computerSelection == "ROCK") {
            return "It's a tie!";
        }
        else if(computerSelection == "PAPER") {
            return "You Lose! Paper beats Rock!";
        }
        else if(computerSelection == "SCISSORS") {
            return "You Win! Rock beats Scissors!";
        }
        case "PAPER": 
        if(computerSelection == "PAPER") {
            return "It's a tie!";
        }
        else if(computerSelection == "SCISSORS") {
            return "You Lose! Scissors beats Paper!";
        }
        else if(computerSelection == "ROCK") {
            return "You Win! Paper beats Rock!";
        }
        case "SCISSORS": 
        if(computerSelection == "SCISSORS") {
            return "It's a tie!";
        }
        else if(computerSelection == "ROCK") {
            return "You Lose! Rock beats Scissors!";
        }
        else if(computerSelection == "PAPER") {
            return "You Win! Scissors beats Paper!";
        }
    }
}

console.log(gamePlay());

