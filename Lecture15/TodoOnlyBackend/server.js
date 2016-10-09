/**
 * Created by championswimmer on 08/10/16.
 */

const express = require('express');
const bodyParser = require('body-parser');
const tododb = require('./tododb');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use('/', express.static(__dirname + '/public'));

app.get('/showtodos', (req, res) => {
    tododb.show((rows) => {
        res.render('todos', {todos: rows})
        // {todos: [ {}, {} ]}
    })
});
app.post('/addtodo', (req, res) => {
    tododb.add(req.body.todo, false, () => {
        res.redirect('/showtodos')
    })
})

app.listen(3000, () => {
    console.log('Server started');
})