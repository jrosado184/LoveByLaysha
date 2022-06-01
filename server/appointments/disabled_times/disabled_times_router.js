const express = require('express');
const Time = require('./disabled_times_model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Time.findAll()
    .then((time) => {
      res.json(time);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Time.insert(req.body)
    .then((time) => {
      res.json(time);
    })
    .catch(next);
});

router.delete('/', (req, res, next) => {
  Time.remove(req.body)
    .then((time) => {
      res.json(time);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

module.exports = router;
