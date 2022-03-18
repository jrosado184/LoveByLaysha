const router = require("express").Router();
const Deleted = require("./deleted-model");

router.get("/", (req, res, next) => {
  Deleted.findAll().then((deleted) => {
    res.json(deleted);
  });
});

module.exports = router;
