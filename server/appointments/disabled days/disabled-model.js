const db = require('../../data/db-config');

const findAll = () => {
  return db('disabled_days');
};

const insert = async (day) => {
  const [disabled] = await db('disabled_days').insert(day, [
    'year',
    'month',
    'day',
  ]);
  return disabled;
};

const remove = async (body) => {
  await db('disabled_days').del().where(body);
  return findAll();
};

module.exports = {
  findAll,
  insert,
  remove,
};
