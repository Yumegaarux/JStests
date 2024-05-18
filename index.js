const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");
const statusLabel = document.getElementById("statusLabel");
const userScoreLbl = document.getElementById("userScoreLbl");
const computerScoreLbl = document.getElementById("computerScoreLbl");

let userChoice = 0;
let userScore = 0;
let computerScore = 0;

btnRock.onclick = function(){
    userChoice = 1;
    playGame();
} 
btnPaper.onclick = function(){
    userChoice = 2;
    playGame();
}
btnScissors.onclick = function(){
    userChoice = 3;
    playGame();
}

function playGame(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (userChoice == computerChoice){
        statusLabel.textContent = "It's a draw!";
    }

    else if (
        (userChoice == 1 && computerChoice == 3) || 
        (userChoice == 2 && computerChoice == 1) || 
        (userChoice == 3 && computerChoice == 2)
    ){
        statusLabel.textContent = "You win!";
        userScore++;
        userScoreLbl.textContent = "Your Score: " + userScore;
    }

    else{
        statusLabel.textContent = "You Lose!";
        computerScore++;
        computerScoreLbl.textContent = "Computer Score: " + computerScore;
    }

    if (computerScore == 3){
        statusLabel.textContent = "Well played! Better luck next time"
    }

    else if (userScore == 3){
        statusLabel.textContent = "Good Game! You won!"
    }

    
}