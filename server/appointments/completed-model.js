const db = require('../data/db-config');

const findAll = async () => {
  const rows = await db('completed_appointments');
  return rows;
};

const findById = async (appointment_id) => {
  const rows = await db('completed_appointments').where({ appointment_id });
  return rows;
};

const remove = async (appointment_id) => {
  return await db('completed_appointments').del().where({ appointment_id });
};

module.exports = {
  findAll,
  findById,
  remove,
};
