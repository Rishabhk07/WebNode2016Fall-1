/**
 * Created by championswimmer on 10/09/16.
 */

function incrementer (baseVal, increment) {
    this.originalVal = baseVal;
    return {
        incr: function () {
            baseVal += increment;
            console.log(baseVal)
        },
        original: baseVal
    }
}

obj = {
    a: 10,
    b: 20
};

var a = incrementer(10,5);
var b = incrementer(6,2);
for (let i = 0; i < 10; i++) {
    a.incr();
    console.log(a.original);
}
for (let i = 0; i < 10; i++) {
    b.incr();
}

