const db = require('../data/db-config');

const findAll = async () => {
  const rows = await db('deleted_appointments');
  return rows;
};

module.exports = {
  findAll,
};
