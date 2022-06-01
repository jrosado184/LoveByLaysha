const db = require("./../../data/db-config");

const findAll = () => {
  return db("disabled_times");
};

const insert = async (body) => {
  const [del] = await db("disabled_times").insert(body, [
    "time",
    "year",
    "month",
    "day",
  ]);
  return del;
};

const remove = async (time) => {
  await db("disabled_times").del().where(time);
  return findAll();
};

module.exports = {
  findAll,
  insert,
  remove,
};
