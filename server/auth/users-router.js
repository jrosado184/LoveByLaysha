const bcrypt = require("bcryptjs");
const createToken = require("./create-token");
const router = require("express").Router();
const Users = require("./users-model");
const { checkBody, checkExists } = require("./users-middleware");

router.get("/", (req, res, next) => {
  Users.findAll().then((users) => {
    res.json(users);
  });
});

router.post("/register", checkBody, checkExists, (req, res, next) => {
  const { user_name, username, password, admin } = req.body;
  const hash = bcrypt.hashSync(password, 8);
  Users.insert({ user_name, username, password: hash, admin })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next);
});

router.post("/login", checkBody, (req, res, next) => {
  let { username, password } = req.body;
  Users.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = createToken(user);
        res.json({ message: `welcome, ${username}`, token });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.json({
    message: err.message,
    custom: "error in the auth router",
  });
});

module.exports = router;
