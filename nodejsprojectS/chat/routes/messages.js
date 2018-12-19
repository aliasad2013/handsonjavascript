var express = require('express');
var router = express.Router();

router.route('/').
    post(function (req, res) {
        console.log(req.body);
        res.send(`Message received from: ${req.body.from} to ${req.body.to} with message ${req.body.message}`);
    });

module.exports = router;