/**
 * Created by championswimmer on 12/10/16.
 */

const express = require('express');
const route = express.Router();

route.get('/all', (req, res) => {
    res.send("All users here")
})

route.post('/add', (req,res) => {

})