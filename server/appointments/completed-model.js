const db = require("../data/db-config");

const findAll = () => {
  return db("completed_appointments");
};

module.exports = {
  findAll,
};
