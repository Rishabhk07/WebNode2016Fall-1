/**
 * Created by championswimmer on 01/10/16.
 */
const express = require('express');
const app = express();


app.use('/', express.static(__dirname + '/public_html'));

app.get('/add', function (req, res) {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);

    res.send(''+ (a+b))
});

app.listen(3434, () => {
    console.log('http://localhost:3434/');
})