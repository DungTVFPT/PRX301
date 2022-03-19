var ops = ['+', '-', '*'];
var condition = [true, false];
var score = 0;
var level = 0;
var conditionCheck = false;


// Function to evalute Strings
function evaluate(fn) {
    return new Function('return ' + fn)();
}

function myFunction() {
    let x = Math.floor(Math.random() * 1000);
    let y = Math.floor(Math.random() * 1000);
    let operator = ops[Math.floor(Math.random() * 3)];


    let operatorStr = document.getElementById("operator");
    let resultStr = document.getElementById("result");
    operatorStr.innerHTML = x + " " + operator + " " + y;

    conditionCheck = condition[Math.floor(Math.random() * 2)];
    //let allInputs = operatorStr.innerHTML;
    if (conditionCheck) {
        resultStr.innerHTML = evaluate(operatorStr.innerHTML);
    } else {
        resultStr.innerHTML = evaluate(operatorStr.innerHTML) + getRandomInt(-10, 10);
    }


}

function myFunctionCorrect() {
    let scoreDisplay = document.getElementById("score");
    let levelDisplay = document.getElementById("level");
    if (conditionCheck) {
        score++;
        document.getElementById("progressbarPct").style.width = score * 60 + "px";
        if (score >= 5) {
            level++;
            levelDisplay.innerHTML = "Level: " + level;
            score = 0;
            document.getElementById("progressbarPct").style.width = "0px";
        }
        scoreDisplay.innerHTML = "Score: " + score;
    } else {
        score = 0;
        level = 0;
        scoreDisplay.innerHTML = "Score: " + score;
        levelDisplay.innerHTML = "Level: " + level;
        document.getElementById("progressbarPct").style.width = "0px";
        alert("Game over!");
    }
    myFunction();
}

function myFunctionFail() {
    let scoreDisplay = document.getElementById("score");
    let levelDisplay = document.getElementById("level");
    if (!conditionCheck) {
        score++;
        document.getElementById("progressbarPct").style.width = score * 60 + "px";
        if (score >= 5) {
            level++;
            levelDisplay.innerHTML = "Level: " + level;
            score = 0;
            document.getElementById("progressbarPct").style.width = "0px";
        }
        scoreDisplay.innerHTML = "Score: " + score;
    } else {
        score = 0;
        level = 0;
        scoreDisplay.innerHTML = "Score: " + score;
        levelDisplay.innerHTML = "Level: " + level;
        document.getElementById("progressbarPct").style.width = "0px";
        alert("Game over!");
    }
    myFunction();
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}