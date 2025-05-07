console.log("Hello World");

let computerChoice;
let humanChoice;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*10);
    computerChoice;
    if (randomNumber < 3) {
        computerChoice = "Rock";
    }
    else if (randomNumber < 6) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    humanChoice = prompt("Enter your choice");
    return humanChoice;
}

let humanScore
let computerScore

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase()
    computerChoice = computerChoice.toUpperCase()

    if (humanChoice === computerChoice) {
        return; // No points awarded for a tie
    }

    switch(humanChoice) {
        case "ROCK":
            if (computerChoice === "PAPER") {
                computerScore += 1;
            }
            else if (computerChoice === "SCISSORS") {
                humanScore += 1;
            }
            break;

        case "PAPER":
            if (computerChoice === "SCISSORS") {
                computerScore += 1;
            }
            else if (computerChoice === "ROCK") {
                humanScore += 1;
            }
            break;

        case "SCISSORS":
            if (computerChoice === "ROCK") {
                computerScore += 1;
            }
            else if (computerChoice === "PAPER") {
                humanScore += 1;
            }
            break;
    }
}

function playGame(){
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("Human Choice:", humanChoice, "\nComputer Choice:", computerChoice);
    }
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);
}

console.log(playGame())