const router = require("express").Router();
const Appoint = require("./reschedule_model");

router.get("/", (req, res, next) => {
  const { confirmation, client_name } = req.body;
  Appoint.findBy(confirmation, client_name)
    .then((confirm) => {
      res.json(confirm);
    })
    .catch(next);
});

router.use((req, res, next) => {
  res.status(500).json({
    message: "error in the reschedule router",
  });
});

module.exports = router;
