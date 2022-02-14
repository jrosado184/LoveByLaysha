const Users = require("./users-model");

const checkBody = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(422).json({ message: "username and password are required" });
  } else {
    next();
  }
};

const checkExists = async (req, res, next) => {
  const { username } = req.body;
  const users = await Users.findAll();
  const exists = users.some((user) => user.username === username);
  if (exists) {
    res.status(422).json({ message: "username already exists" });
  } else {
    next();
  }
};

module.exports = {
  checkBody,
  checkExists,
};
