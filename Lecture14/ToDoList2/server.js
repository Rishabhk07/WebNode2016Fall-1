/**
 * Created by championswimmer on 06/10/16.
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post('/addtodo', function(req, res) {
    console.log(req.body);
    res.send("Todo has been added");
})
app.get('/showtodos', function(req, res) {

})
app.get('/addtodo', function (req, res) {
    res.send("Add Todo")
})


app.use('/', express.static(__dirname + '/public_html'));


app.listen(3000, () => {
    console.log('http://localhost:3000/');
})