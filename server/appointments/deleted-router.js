const router = require("express").Router();
const Deleted = require("./deleted-model");

router.get("/", (req, res, next) => {
  Deleted.findAll()
    .then((deleted) => {
      res.json(deleted);
    })
    .catch(next);
});

router.use = (err, req, res, next) => {
  res.json({
    message: err.message,
    custom: "There was an error in the deleted appointments router",
  });
};

module.exports = router;