const db = require("../data/db-config");

const findAll = () => {
  return db("completed_appointments");
};

const findById = (appointment_id) => {
  return db("completed_appointments").where({ appointment_id });
};

module.exports = {
  findAll,
  findById,
};
