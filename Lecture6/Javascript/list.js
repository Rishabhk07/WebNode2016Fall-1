/**
 * Created by championswimmer on 01/09/16.
 */
"use strict";
window.onload = function () {

    var list = document.getElementById('list');
    var gen = document.getElementById('fizzbuzz');
    var N = document.getElementById('N');
    var time = document.getElementById('time');


    gen.onclick = function () {
        var n = parseInt(N.value);
        var start = Date.now();
        var myList = "";
        for (var i = 0; i < n; i++) {
            var o = "";
            if (i%3 == 0) {
                o +=  "fizz"
            }
            if (i%5 == 0) {
                o +=  "buzz"
            }
            if (o === "") {
                o += i;
            }

            myList += "<li>" + o + "</li>";
        }
        list.innerHTML = myList;
        var elapsed = Date.now() - start;
        time.innerHTML = elapsed;
    }

};