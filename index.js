var equation = ['',[],''];
var index = 0;
function calculate(x){
    var operators = ["+/-", "%", "/", "x", "-", "+", "."];
    if (x == "="){
        var operator = equation[1][0];
        var left = parseInt(equation[0]);
        var right = parseInt(equation[2]);
        var answer;
        switch(operator){
            case "%":
                answer = (1 / 100) * left;
                break;
            case "+":
                answer = left + right;
                break;
            case "-":
                answer = left - right;
                break;
            case "/":
                answer = left / right;
                break;
            case "x":
                answer = left * right;
                break;
            default:
                answer = "Default answer";
        }
        console.log(operator);
        document.getElementById("answerbox").innerHTML = answer;
    }
    else if (x == "AC"){
        document.getElementById("answerbox").innerHTML = 0;
        equation = ['',[],''];
        printEquation();
        index = 0;
    }
    else if (operators.includes(x)){
        index = 1;
        equation[index].push(x);
        document.getElementById("answerbox").innerHTML = x;
        index = 2;
        printEquation();
    }
    else{
        equation[index] += x;
        printEquation();
    }
}

function printEquation(){
    document.getElementById("equation").innerHTML = equation;
}

// Popup instructions 
window.onload = function(){
    window.onclick = function(event){
        if(event.target == popup){
            document.getElementById("popup").style.display = "none";
        }
    }
    document.getElementById("continue").onclick = function(event){
        document.getElementById("popup").style.display = "none";
    }
}