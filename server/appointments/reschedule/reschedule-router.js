const express = require('express');
const router = express.Router();
const Reschedule = require('./reschedule-model');

router.get('/', (req, res, next) => {
  const { client_name, confirmation } = req.body;

  Reschedule.findBy(confirmation, client_name)
    .then((reschedule) => {
      res.json(reschedule);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res
    .status(500)
    .json({ message: err.message, custom: 'error in the reschedule router' });
});

module.exports = router;
