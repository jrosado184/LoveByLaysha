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
    .createTable("clients", (clients) => {
      clients.increments("client_id");
      clients.string("client_name").notNullable();
      clients.string("client_phone").notNullable().unique();
      clients.string("client_set").defaultsTo("none");
      clients.boolean("client_refill").defaultsTo(false);
      clients.string("client_refillSet").defaultsTo("none");
      clients.boolean("client_soak").defaultsTo(false);
      clients.string("client_details");
    })
    .createTable("appointments", (appointments) => {
      appointments.increments("appointment_id");
      appointments.string("appointment_date").notNullable().unique();
      appointments.string("appointment_time").notNullable().unique();
      appointments
        .integer("client_id")
        .references("client_id")
        .inTable("clients")
        .unsigned();
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("appointments");
  await knex.schema.dropTableIfExists("clients");
  await knex.schema.dropTableIfExists("users");
};
