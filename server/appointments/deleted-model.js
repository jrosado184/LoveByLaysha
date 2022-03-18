const db = require("../data/db-config");

const findAll = () => {
  return db("deleted_appointments");
};

module.exports = {
  findAll,
};
