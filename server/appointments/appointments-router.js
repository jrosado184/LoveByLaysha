const router = require('express').Router();
const Appoint = require('./appointments-model');
const {
  checkBody,
  checkId,
  checkExists,
} = require('./appointments-middleware');

router.get('/', (req, res, next) => {
  Appoint.findAll()
    .then((appoint) => {
      {
        res.json(appoint);
      }
    })
    .catch(next);
});

router.get('/:id', checkId, (req, res, next) => {
  Appoint.findById(req.params.id)
    .then((appoint) => {
      res.json(appoint);
    })
    .catch(next);
});

router.post('/', checkExists, checkBody, (req, res, next) => {
  Appoint.insert(req.body)
    .then((appoint) => {
      res.status(201).json(appoint);
    })
    .catch(next);
});

router.put('/:id', checkBody, checkId, (req, res, next) => {
  Appoint.update(req.params.id, req.body)
    .then((newAppoint) => {
      res.status(200).json(newAppoint);
    })
    .catch(next);
});

router.delete('/:id', checkId, (req, res, next) => {
  Appoint.remove(req.params.id)
    .then((appoint) => {
      res.json(appoint);
    })
    .catch(next);
});

router.delete('/completed/:id', checkId, (req, res, next) => {
  Appoint.removeCompleted(req.params.id)
    .then((appoint) => {
      res.json(appoint);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    custom: 'error in the appointments  router',
  });
});

module.exports = router;
