const router = require("express").Router();
const Completed = require("./completed-model");

router.get("/", (req, res, next) => {
  Completed.findAll()
    .then((completed) => {
      res.json(completed);
    })
    .catch(next);
});

router.get("/:Id", (req, res, next) => {
  Completed.findById()
    .then((appoint) => {
      res.json(appoint);
    })
    .catch(next);
});

router.use = (err, req, res, next) => {
  res.json({
    message: err.message,
    custom: "There was an error in the completed appointments router",
  });
};

module.exports = router;
