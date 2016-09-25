/**
 * Created by championswimmer on 24/09/16.
 */
const express = require('express');
const app = express();

function m1 (req, res, next) {
    console.log('m1');
    next();

}
function m2 (req, res, next) {
    console.log('m2');
    next();

}



app.use('/hello', (req,res,next) => {
    console.log('Hello');
    res.send('Hello')
    next()
})


app.use((req, res, next) => {
    console.log('Path invalid');
    res.send('Path invalid')
})

app.listen(2222, () => {
    console.log('http://localhost:2222/');
})