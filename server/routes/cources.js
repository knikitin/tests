const express = require('express');
const db = require('../database/connection_manager');
const cource = require('../database/models/cource');
const router = express.Router();

router.get('/', function(req, res, next) {
    cource.findAll().then(cources => {
        res.status(200).json(cources);
    })    
    .catch((err) => {
        res.status(500).json({ message: err.message });
    });
});

router.post('/', function(req, res, next) {
    cource.create({name: req.body.name, themesId: req.body.themesId })
    .then((result) => {
        res.status(200).json({ message: 'New cource created', data: result });
    })
    .catch((err) => {
        res.status(500).json({ message: err.message });
    });
});
  

module.exports = router;
