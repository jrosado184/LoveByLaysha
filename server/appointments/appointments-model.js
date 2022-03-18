const db = require("../data/db-config");

const findAll = () => {
  return db("appointments");
};

const findById = async (id) => {
  const rows = await db("appointments").where("appointment_id", id);
  return rows;
};

const insert = async (appointments) => {
  const [appoint_id] = await db("appointments").insert(appointments, [
    "appointment_month",
    "appointment_day",
    "appointment_year",
    "appointment_time",
    "client_name",
    "client_phone",
    "client_set",
    "client_refill",
    "client_refillSet",
    "client_Soak",
    "client_details",
  ]);
  return appoint_id;
};

const remove = async (appointment_id) => {
  const row = await db("appointments")
    .del()
    .where("appointment_id", appointment_id)
    .returning("*");
  const deleted = await db("deleted_appointments").insert(row);
  return deleted;
};

module.exports = {
  findAll,
  insert,
  findById,
  remove,
};
