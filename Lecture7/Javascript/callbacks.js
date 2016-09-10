/**
 * Created by championswimmer on 10/09/16.
 */

function funOne (cb1, param1) {
    if (typeof cb1 == "function") {
        cb1(param1)
    } else {
        param1 = cb1
    }
    
    console.log("In funOne" + param1)
}

funOne(function (num) {
    console.log("In Callback " + num)
}, 10);

funOne(20);

