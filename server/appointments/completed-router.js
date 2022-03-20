const router = require("express").Router();
const Completed = require("./completed-model");
const { checkId } = require("./completed-middleware");

router.get("/", (req, res, next) => {
  Completed.findAll()
    .then((completed) => {
      res.json(completed);
    })
    .catch(next);
});

router.get("/:id", checkId, (req, res, next) => {
  Completed.findById(req.params.id)
    .then((appoint) => {
      res.json(appoint);
    })
    .catch(next);
});

router.use = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    custom: "There was an error in the completed appointments router",
  });
};

module.exports = router;
