const db = require("../data/db-config");

const findAll = () => {
  return db("appointments");
};

const findById = async (id) => {
  const rows = await db("appointments").where("appointment_id", id);

  const custom = rows.map((row) => {
    const newRow = [
      {
        appointment_date: {
          appointment_month: row.appointment_month,
          appointment_day: row.appointment_day,
          appointment_year: row.appointment_year,
        },
        appointment_time: row.appointment_time,
        client_name: row.client_name,
        client_phone: row.client_phone,
        client_set: row.client_set,
        client_refill: row.client_refill,
        client_refillSet: row.client_refillSet,
        client_Soak: row.client_Soak,
        client_details: row.client_details,
        images: row.images,
      },
    ];
    return newRow;
  });
  return custom[0];
};

const findBy = async (filter) => {
  const rows = await db("appointments").where(filter);
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
    "images",
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
};
