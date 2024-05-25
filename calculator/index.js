const screenNum = document.getElementById("screen");

    
function inputCalculator(selectedNum){
    screenNum.value += selectedNum;
}

function calculate(){
    screenNum.value = eval(screenNum.value);
}

function clearScreen(){
    screenNum.value = "";
}