exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id');
      users.string('user_name', 200).notNullable();
      users.string('username', 200).notNullable().unique();
      users.string('password', 200).notNullable();
      users.boolean('admin').defaultsTo(false);
      users.timestamps(false, true);
    })
    .createTable('appointments', (appointments) => {
      appointments.increments('appointment_id');
      appointments.string('appointment_month').required();
      appointments.integer('appointment_day').required();
      appointments.integer('appointment_year').required();
      appointments.string('appointment_time').required();
      appointments.string('client_name').required();
      appointments.integer('client_phone', 200).required();
      appointments.string('client_set');
      appointments.boolean('client_refill');
      appointments.string('client_refillSet');
      appointments.boolean('client_Soak');
      appointments.string('client_details');
      appointments.string('images');
    })
    .createTable('completed_appointments', (completed) => {
      completed.increments('appointment_id');
      completed.text('appointment_month');
      completed.text('appointment_day');
      completed.text('appointment_year');
      completed.string('appointment_time');
      completed.string('client_name');
      completed.string('client_phone', 200);
      completed.string('client_set');
      completed.boolean('client_refill');
      completed.string('client_refillSet');
      completed.boolean('client_Soak');
      completed.string('client_details');
      completed.string('images');
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('completed_appointments');
  await knex.schema.dropTableIfExists('appointments');
  await knex.schema.dropTableIfExists('users');
};
