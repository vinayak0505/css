// This function clear all the values
var pre = 0;
var sign = '+';

function clearScreen() {
    document.getElementById("result").innerHTML = "";
}

// This function display values
function display(value) {
    switch (value) {
        case '+':
        case '*':
        case '/':
        case '-':
        case '%':
            if (!isNaN(document.getElementById("result").innerText)) {
                pre = document.getElementById("result").innerText;
            }
            sign = value;
            document.getElementById("result").innerText = sign;
            break;
        case '+/-':
            if (!isNaN(document.getElementById("result").innerText)) {
                document.getElementById("result").innerText = -1 * document.getElementById("result").innerText;
            }
            break;
        default:
            if (!isNaN(document.getElementById("result").innerText)) {
                document.getElementById("result").innerText += value;
            } else {
                document.getElementById("result").innerText = value;
            }
            break;
    }
}

// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").innerText;
    if(isNaN(p)){
        document.getElementById("result").innerText = 'please enter a number';
        setTimeout(function () {
            document.getElementById("result").innerText = "";
        }, 500);
        return;
    }
    if (sign == '/' && (p == 0 || p == "")) {
        document.getElementById("result").innerText = 'divide by zero not possible';
        setTimeout(function () {
            document.getElementById("result").innerText = "";
        }, 500);
        return;
    }
    var q = eval(pre + sign + p);
    document.getElementById("result").innerText = q;
}