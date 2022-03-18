exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("user_name", 200).notNullable();
      users.string("username", 200).notNullable().unique();
      users.string("password", 200).notNullable();
      users.boolean("admin").defaultsTo(false);
      users.timestamps(false, true);
    })
    .createTable("appointments", (appointments) => {
      appointments.increments("appointment_id");
      appointments.text("appointment_month");
      appointments.text("appointment_day");
      appointments.text("appointment_year");
      appointments.string("appointment_time");
      appointments.string("client_name");
      appointments.string("client_phone", 200);
      appointments.string("client_set");
      appointments.boolean("client_refill");
      appointments.string("client_refillSet");
      appointments.boolean("client_Soak");
      appointments.string("client_details");
    })
    .createTable("deleted_appointments", (deleted) => {
      deleted.increments("appointment_id");
      deleted.text("appointment_month");
      deleted.text("appointment_day");
      deleted.text("appointment_year");
      deleted.string("appointment_time");
      deleted.string("client_name");
      deleted.string("client_phone", 200);
      deleted.string("client_set");
      deleted.boolean("client_refill");
      deleted.string("client_refillSet");
      deleted.boolean("client_Soak");
      deleted.string("client_details");
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("deleted_appointments");
  await knex.schema.dropTableIfExists("appointments");
  await knex.schema.dropTableIfExists("users");
};
