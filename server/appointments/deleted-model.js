const db = require("../data/db-config");

const findAll = async () => {
  const rows = await db("deleted_appointments");
  const custom = rows.map((row) => {
    const newRow = [
      {
        appointment_date: {
          appointment_month: row.appointment_month,
          appointment_day: row.appointment_day,
          appointment_year: row.appointment_year,
        },
        appointment_id: row.appointment_id,
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

module.exports = {
  findAll,
};
