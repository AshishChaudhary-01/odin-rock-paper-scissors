let humanScore = 0;
let computerScore = 0;
let draw = false;

function getRandomNumber(){
    let randomNumber =Math.floor(Math.random()*3)+1;
    return randomNumber;
}
function getComputerChoice(){
    let computerChoice;
    randomNumber = getRandomNumber();
    if(randomNumber == 1)
        computerChoice= "ROCK";
    if(randomNumber == 2)
        computerChoice = "PAPER";
    if(randomNumber == 3)
        computerChoice = "SCISSOR";
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice! Rock | Paper | Scissor ");
    if(humanChoice.trim() === ""){
        console.log("Input Null! Try Again!");
        return getHumanChoice();
    }else{
        humanChoice = humanChoice.toUpperCase();
        if(humanChoice!=="ROCK" && humanChoice!=="PAPER" && humanChoice!=="SCISSOR"){
            console.log("Invalid Input! Please Try Again!");
            return getHumanChoice();
        }else{
            return humanChoice;
        }
    }
}

function playRound(humanChoice, computerChoice){
    humanChoice= getHumanChoice();
    computerChoice= getComputerChoice();
    // Player plays Rock
    if(humanChoice =="ROCK"){
        if(computerChoice == "SCISSOR"){
            console.log("You won! Rock beats Scissor");
            humanScore += 1;
        }
        if(computerChoice == "PAPER"){
            console.log("You Lose! Paper beats Rock");
            computerScore += 1;
        }
        else
            console.log("Draw! Both played Rock");
    }

    // Player plays Paper
    if(humanChoice =="PAPER"){
        if(computerChoice == "ROCK"){
            console.log("You won! Paper beats Rock");
            humanScore += 1;
        }
        if(computerChoice == "SCISSOR"){
            console.log("You Lose! Scissor beats Paper");
            computerScore += 1;
        }
        else
            console.log("Draw! Both played Paper");
    }
    // Player plays Scissor
    if(humanChoice =="SCISSORS"){
        if(computerChoice == "PAPER"){
            console.log("You won! Scissor beats Paper");
            humanScore += 1;
        }
        if(computerChoice == "ROCK"){
            console.log("You Lose! Rock beats Scissor");
            computerScore += 1;
        }
        else
            console.log("Draw! Both played Scissor");
    }
}

function playGame(){
    let i;
    for(i=0; i<5; i++){
        playRound();
    }
    if(humanScore>computerScore){
        console.log("Yay! You Won!");
        console.log("Your Score: "+ humanScore + " Computer Score: "+ computerScore);
    }

    if(computerScore>humanScore){
        console.log("Too Bad! You Lost!");
        console.log("Your Score: "+ humanScore + " Computer Score: "+ computerScore);
    }
    else
        console.log("You Drawed");
        console.log("Your Score: "+ humanScore + " Computer Score: "+ computerScore);
}
