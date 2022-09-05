const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "hello" });
});

router.use((err, req, res, next) => {
  res
    .status(500)
    .json({ message: err.message, custom: "error in the reschedule router" });
});

module.exports = router;
