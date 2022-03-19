const db = require("../data/db-config");

const findAll = () => {
  return db("completed_appointments");
};

const findById = async (id) => {
  const row = await db("completed_appointments").where({ id });
  return row;
};

module.exports = {
  findAll,
  findById,
};
