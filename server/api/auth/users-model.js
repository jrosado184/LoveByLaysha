const db = require("../data/db-config");

const findAll = () => {
  return db("users");
};

const findBy = (filter) => {
  return db("users").where(filter);
};

const insert = async (item) => {
  const [user_id] = await db("users").insert(item, [
    "user_id",
    "user_name",
    "username",
    "password",
    "admin",
  ]);
  return user_id;
};

module.exports = {
  findAll,
  findBy,
  insert,
};
