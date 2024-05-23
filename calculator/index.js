const screenNum = document.getElementById("screen");

    
function inputCalculator(selectedNum){
    screenNum.value += selectedNum;
}

function inputDelete(){
    screenNum.value--;
}