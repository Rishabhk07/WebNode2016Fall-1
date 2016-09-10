/**
 * Created by championswimmer on 10/09/16.
 */


function myFunc(myCallback, arg) {

    var retFrm = myCallback((arg+1));
    console.log(retFrm)
}

myFunc(function (num){
    console.log(num);
    return (num + 1)
}, 10);

function newCallback( num ) {
    console.log("new  calllback " + num)
}
myFunc(newCallback, 10);

function add (num1, num2) {
    return num1 + num2;
}

add(10,20);
var m = 11, n = 12;
add (m,n);

myFunc(10);

// myFunc(function (num) {
//     console.log('Call back says = ' + num)
// }, 10);

// myFunc(10);