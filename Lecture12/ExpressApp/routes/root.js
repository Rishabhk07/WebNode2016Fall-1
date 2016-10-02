/**
 * Created by championswimmer on 02/10/16.
 */
const express = require('express');
const router = express.Router();

const links = [
    {
        name: "Teachers",
        desc: "Show Teachers",
        path: '/teachers'

    },
    {
        name: "Courses",
        desc: "Show Courses",
        subject: '/courses'
    }
];

router.get('/', (req, res) => {
    res.send(links);
});

module.exports = router;