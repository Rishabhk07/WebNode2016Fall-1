/**
 * Created by championswimmer on 17/09/16.
 */
"use strict";

const autofare = require('./autofare');
const busfare = require('./busfare');
const metrofare = require('./metrofare');

var prompt = require('prompt-sync')();

prompt.start();
prompt.get(['vehicle', 'kilometers', 'stops', 'time'],
    (err, result) => {
        if (!err) {
            console.log('km = ' + result.kilometers);
            console.log('stops = ' + result.stops);
            console.log('time = ' + result.kilometers);
        }
});
