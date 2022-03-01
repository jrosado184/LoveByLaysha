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
      appointments.text("appointment_date");
      appointments.string("appointment_time");
      appointments.string("client_name");
      appointments.string("client_phone", 200);
      appointments.string("client_set");
      appointments.boolean("client_refill");
      appointments.string("client_refillSet");
      appointments.boolean("client_Soak");
      appointments.string("client_details");
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("appointments");
  await knex.schema.dropTableIfExists("users");
};
