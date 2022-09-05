const db = require("../../data/db-config");

const findBy = async (confirmation, client_name) => {
  const rows = await db("appointments")
    .where("confirmation", confirmation)
    .where("client_name", client_name);

  return rows;
};

module.exports = {
  findBy,
};
