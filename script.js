function getComputerChoice() {
    let numberChoice = Math.floor(Math.random() * 3);
    let choice = 
    numberChoice === 0 ? "rock"
    : (numberChoice === 1) ? "paper"
    : "scissors"

    return choice;
};


function playRound(playerSelection, computerSelection){
    console.log(playerSelection + " versus " + computerSelection)
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        switch (true) {
            case (playerSelection === "rock" && computerSelection === "scissors"
            || playerSelection === "paper" && computerSelection === "rock"
            || playerSelection === "scissors" && computerSelection === "paper"):
            return `You Won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()}!`;


            case (playerSelection === "rock" && computerSelection === "paper"
            || playerSelection === "paper" && computerSelection === "scissors"
            || playerSelection === "scissors" && computerSelection === "rock"):
            return `You Lost! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} sucks against ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()}!`;


            case (playerSelection === computerSelection):
            return `You drew! You both choose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}`;

            default:
                return "Unexpected error in switch"

        }
    }
    else {
        return "Error, please insert Rock, Paper or Scissors"
    }
    
}


console.log ("Computer choice: " + getComputerChoice())
let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase()
console.log (playerChoice)
console.log(playRound(playerChoice, getComputerChoice()))
