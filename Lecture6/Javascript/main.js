/**
 * Created by championswimmer on 01/09/16.
 */

var button, a, b, result;

// function add () {
//     var c = a.value + b.value;
//     result.innherHTML = c;
// }

window.onload = function () {
    button = document.getElementById('add');
    a = document.getElementById('a');
    b = document.getElementById('b');
    result = document.getElementById('result');
    
    button.onclick = function () {
        var c = parseInt(a.value) + parseInt(b.value);
        result.innerHTML =  c;
    };
};





