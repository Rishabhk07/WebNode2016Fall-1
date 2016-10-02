/**
 * Created by championswimmer on 02/10/16.
 */
const express = require('express');
const router = express.Router();

const teachers = [
    {
        name: "Arnav",
        subjects: ["Android", "Nodejs"]

    },
    {
        name: "Prateek",
        subjects: ["C++", "GameDev"]
    }
];

router.get('/', (req, res) => {
    res.render('teachers', {
        teachers: teachers
    });
});

module.exports = router;