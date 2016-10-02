/**
 * Created by championswimmer on 02/10/16.
 */
const express = require('express');
const router = express.Router();

const courses = [
    {
        name: "Pandora",
        subject: "Android",

    },
    {
        name: "Elixir",
        subject: "Nodejs"
    }
];

router.get('/', (req, res) => {
    res.send(courses);
});

module.exports = router;