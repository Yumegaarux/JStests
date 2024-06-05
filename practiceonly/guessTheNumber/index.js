let randomNum = Math.floor(Math.random() * 11);
let score = 5;

function guess(){
    let guessNumber = document.getElementById("guessNumber").value;
    if (guessNumber == randomNum){
        document.getElementById("numberHolder").textContent = "You win! Your score is: " + score;
    }
    else if(guessNumber < randomNum){
        document.getElementById("numberHolder").textContent = "Your number is a bit too low, try again!";
        score--;
    }
    else if(guessNumber > randomNum){
        document.getElementById("numberHolder").textContent = "Your number is a bit too high, try again!";
        score--;
    }
}