/**
 * Created by championswimmer on 08/10/16.
 */

/*
 create table if not exists todolist
 (id INTEGER PRIMARY KEY AUTO_INCREMENT,
 todo TEXT, done BOOLEAN);
 */

const express = require('express');
const bodyparser = require('body-parser');
const todos = require('./todos');

const app = express();

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.get('/showtodos', (req, res) => {
    todos.show((rows) => {
        res.send(rows)
    })
});
app.post('/addtodo', (req, res) => {


    console.log(req.body);

    todos.add(req.body.todo, req.body.done, (rows) => {
        res.send('Successfully added')
    })

});
app.post('/dotodo', (req, res) => {

});
app.post('/deltodo', (req, res) => {

})

app.listen(3000, () => {
    console.log('http://localhost:3000/');
})