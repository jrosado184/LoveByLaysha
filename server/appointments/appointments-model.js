const db = require("../data/db-config");

const findAll = async () => {
  const rows = await db("appointments");
  return rows;
};

const findById = async (id) => {
  const rows = await db("appointments").where("appointment_id", id);
  return rows;
};

const findBy = async (name, confirmation) => {
  const rows = await db("appointments").where(name, confirmation);
  return rows;
};

const insert = async (appointments) => {
  const [appoint_id] = await db("appointments").insert(appointments, [
    "confirmation",
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
    "images",
  ]);
  return appoint_id;
};
const update = async (id, body) => {
  await db("appointments").update(body).where("appointment_id", id);
  return findById(id);
};

const remove = async (appointment_id) => {
  const row = await db("appointments")
    .del()
    .where("appointment_id", appointment_id)
    .returning("*");
  return row;
};

const removeCompleted = async (appointment_id) => {
  const row = await db("appointments")
    .del()
    .where("appointment_id", appointment_id)
    .returning("*");
  const completed = await db("completed_appointments").insert(row);
  return completed;
};

module.exports = {
  findAll,
  insert,
  findById,
  remove,
  removeCompleted,
  findBy,
  update,
};
