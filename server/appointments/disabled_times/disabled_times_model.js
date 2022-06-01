const db = require('./../../data/db-config');

const findAll = () => {
  return db('disabled_times');
};

const insert = async (time) => {
  const [disabled_time] = await db('disabled_times').insert(time, ['time']);
  return disabled_time;
};

const remove = async (time) => {
  await db('disabled_times').del().where(time);
  return findAll();
};

module.exports = {
  findAll,
  insert,
  remove,
};
