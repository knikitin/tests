const express = require('express');
const db = require('../database/connection_manager');
const theme = require('../database/models/theme');
const router = express.Router();

router.get('/', function(req, res, next) {
  theme.findAll({raw: true}).then(t => {
    res.json(t);
  })
  .catch((err) => {
    res.status(500).json({ message: err.message });
  });
});

router.post('/', function(req, res, next) {
  theme.create({name: req.body.name, parentId: req.body.parentId })        
  .then((result) => {
      res.status(200).json({ message: 'New theme created', data: result });
  })
  .catch((err) => {
      res.status(500).json({ message: err.message });
  });
});


module.exports = router;
