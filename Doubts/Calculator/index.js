/**
 * Created by championswimmer on 21/09/16.
 */
var val1, val2, op, result;

window.onload = function () {
    
}

function addInput(val) {
    var currentValue = document.getElementById("calcbox").value
    currentValue += val;
    document.getElementById("calcbox").value = currentValue;
}

function addOperator(operator) {
    switch (operator) {
        case '+': case '-': case '*': case '/':
            val1 = parseInt(document.getElementById("calcbox").value)
            document.getElementById("calcbox").value = ''
            op = operator;
            break;
        case '=':
            val2 = parseInt(document.getElementById("calcbox").value)
            document.getElementById("calcbox").value = calculate(val1, val2, op)
            break;
        case 'C':
            document.getElementById("calcbox").value = ''
            break;

    }
}

function calculate (v1, v2, o) {
    switch (o) {
        case '+': 
            return v1 + v2;
            break;
        case '-':
            return v1 - v2;
            break;
        case '*':
            return v1 * v2;
            break;
        case '/':
            return v1 / v2;
            break;
        
    }
}