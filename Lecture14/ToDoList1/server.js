/**
 * Created by championswimmer on 06/10/16.
 */

const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/public_html'));

app.listen(3000, () => {
    console.log('http://localhost:3000/');
})