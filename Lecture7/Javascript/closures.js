/**
 * Created by championswimmer on 10/09/16.
 */
"use strict";
function counter (base) {
    var count = base;
    return function (incr) {
        count += incr;
        return count;
    }
}

var myCounter = counter(10);
console.log(myCounter(5));
console.log(myCounter(1));


var anotherCounter = counter(12);
console.log(anotherCounter(3));
console.log(anotherCounter(2));
