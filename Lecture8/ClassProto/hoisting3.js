/**
 * Created by championswimmer on 11/09/16.
 */
"use strict";

var one = function () {
    console.log("ONE");
    two();
    three();
};

var two = function () {
    console.log("TWO");
};

one();


var three = function () {
    console.log("THREE");
};

