/**
 * Created by championswimmer on 08/10/16.
 */


function afterThreeSeconds() {
    console.log('Really after 3 seconds');
}

function prepareHelloWorld(someCallback) {
    var helloWorld = function (someCallback) {
        console.log('Hello World');
        someCallback();
    }
    return helloWorld;
}

setTimeout(prepareHelloWorld(function () {

}), 3000);

console.log('After 3 seconds');


/* =============================================== */



query("query string", callback) //definition

function addTodos(todo, cb) {
    query("" + todo, function(err, rows, fields) {
        //this will run when query is finished
        cb(rows)
    })
}
app.post('/addtodos', (req, res) => {
    addTodos(req.body.todo, function (rows) {
        // result of todo having been called
        res.send(rows)
    })
});

function someCallback() {
    console.log("All tasks done");
}

function someFunction(someParam, someCallback) {
    some2Function(some2Param, function () {
        some3Function(some3Param, function () {
            some4Function(some4Param, function () {
                someCallback();
            })
        })
    })
}

