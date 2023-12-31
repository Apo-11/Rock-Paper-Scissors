
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
            ++playerWin
            return `You Won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()}!
            current score: ${playerWin} - ${computerWin}`;


            case (playerSelection === "rock" && computerSelection === "paper"
            || playerSelection === "paper" && computerSelection === "scissors"
            || playerSelection === "scissors" && computerSelection === "rock"):
            ++computerWin
            return `You Lost! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} sucks against ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()}!
            current score: ${playerWin} - ${computerWin} `;


            case (playerSelection === computerSelection):
                let playerChoice = prompt(`You drew! You both choose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}!
                Let's play another round. Rock, paper or scissors?`).toLowerCase()
                return(playRound(playerChoice, getComputerChoice()))
                break;

            default:
                return "Unexpected error in switch"

        }
    }
    else {
        return "Error, please insert Rock, Paper or Scissors"
    }
    
}

function game() {
    switch(true) {
        case (playerWin === 3):
            console.log("Congratulation! You Won!")
            break;

        case(computerWin === 3):
            console.log("Sorry! You Lost!")
            break;

        default: {
            let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase()
            console.log (playerChoice) 
            console.log(playRound(playerChoice, getComputerChoice()))
    }
    
    
   }

}

let playerWin = 0
let computerWin = 0
for(;playerWin <=3 || computerWin <= 3;){
    game()
}

