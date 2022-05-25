const express = require('express');
const Disabled = require('./disabled-model');
const { checkExistingDay } = require('./disabled-middleware.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  Disabled.findAll()
    .then((disabled) => {
      res.json(disabled);
    })
    .catch(next);
});

router.post('/', checkExistingDay, (req, res, next) => {
  Disabled.insert(req.body)
    .then((disabled) => {
      res.status(201).json(disabled);
    })
    .catch(next);
});

router.delete('/', (req, res, next) => {
  Disabled.remove(req.body)
    .then((disabled) => {
      res.json(disabled);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
    custom: 'Error in the disabled days router',
  });
});

module.exports = router;
