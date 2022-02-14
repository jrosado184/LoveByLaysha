const router = require("express").Router();
const Appoint = require("./appointments-model");
const restricted = require("./restricted");

router.get("/", restricted, (req, res, next) => {
  Appoint.findAll()
    .then((appoint) => {
      {
        res.json(appoint);
      }
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Appoint.insert(req.body)
    .then((appoint) => {
      res.json(appoint);
    })
    .catch(next);
});

module.exports = router;
