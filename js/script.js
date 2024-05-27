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
function getRandomNumber(){
    let randomNumber =Math.floor(Math.random()*3)+1;
    return randomNumber;
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