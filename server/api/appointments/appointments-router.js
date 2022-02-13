const router = require("express").Router();
const Appoint = require("./appointments-model");

router.get("/", (req, res) => {
  Appoint.findAll().then((appoint) => {
    {
      res.json(appoint);
    }
  });
});

router.post("/", (req, res) => {
  Appoint.insert(req.body).then((appoint) => {
    res.json(appoint);
  });
});

module.exports = router;
