const db = require('../data/db-config');

const findAll = async () => {
  const rows = await db('completed_appointments');
  return rows;
};

const findById = async (appointment_id) => {
  const rows = await db('completed_appointments').where({ appointment_id });
  return rows;
};

module.exports = {
  findAll,
  findById,
};
