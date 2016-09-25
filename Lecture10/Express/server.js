/**
 * Created by championswimmer on 24/09/16.
 */
const express = require('express');
const app = express();


console.log(__dirname);
app.use('/', express.static(__dirname + '/public_html'))

var a  = function () {
    //custom middleware
    //handles get or post requests

}

// www.example.com -> app.get('/')
// www.example.com/myawesomestuff -> app.get('/myawesomestuff')
app.get('/add', function (req, res) {
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    res.send('Sum = ' + (a + b) )
})

app.listen(3000, function () {
    console.log('Server running on http://localhost:3000/ ')
    console.log('Server running on http://0.0.0.0:3000/ ')
    console.log('Server running on http://127.0.0.1:3000/ ')
})