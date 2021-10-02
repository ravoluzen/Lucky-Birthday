const birthDate = document.querySelector("#birthday");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-btn");
const outputText = document.querySelector("#result");

function luckyOrNot(){

    const birthday = birthDate.value;
    const sum = calculateSum(birthday);

    if(sum && birthday){
        if(sum % luckyNumber.value === 0){
            outputText.innerText = "Hurray! Your birthday is lucky!🥳🥳";
        }else{
            outputText.innerText = "Oops, your birthday is not that lucky.😞😞"
        }
    }else{

        outputText.innerText = "Enter right info you dum dum!🙃🙃";
    }
}

function calculateSum(birthday){

    const birthNums = birthday.replaceAll("-", "");
    let sum = 0;

    for(let i = 0; i < birthNums.length; i++){
        sum += birthNums[i];
    }
    return sum;
};


checkButton.addEventListener("click", luckyOrNot);