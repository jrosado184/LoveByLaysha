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
      res.status(201).json(appoint);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.json({
    message: err.message,
    custom: "error in the appointments router",
  });
});

module.exports = router;
