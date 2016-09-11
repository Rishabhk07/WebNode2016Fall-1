/**
 * Created by championswimmer on 11/09/16.
 */

one = function () {
    console.log("ONE");
    two();
    three();
};

two = function () {
    console.log("TWO");
};
one();

three = function () {
    console.log("THREE");
};

