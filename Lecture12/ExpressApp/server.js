/**
 * Created by championswimmer on 02/10/16.
 */
const express = require('express');
const path = require('path');
const app = express();

//Routes
const teachers = require('./routes/teachers');
const courses = require('./routes/courses');
const root = require('./routes/root');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use('/teachers', teachers);
app.use('/courses', courses);
app.use('/', root);
app.use('/', express.static(path.join(__dirname, 'public')))


app.listen(3333, () => {
    console.log('http://localhost:3333/');
});