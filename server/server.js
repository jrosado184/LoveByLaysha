const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const adminRouter = require('./auth/users-router');
const appointRouter = require('./appointments/appointments-router');
const completedRouter = require('./appointments/completed-router');
const disabledDays = require('./appointments/disabled days/disabled-router');
const disabledTimes = require('./appointments/disabled_times/disabled_times_router');

const path = require('path');

const options = {
  etag: true,
  maxAge: 360000,
  redirect: true,
};

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use('/api/users', adminRouter);
server.use('/api/appointments', appointRouter);
server.use('/api/completedAppointments', completedRouter);
server.use('/api/disabledDays', disabledDays);
server.use('/api/disabledTimes', disabledTimes);
server.use(
  express.static(path.join(__dirname, '..', 'client', 'public'), options)
);

server.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'favicon.ico'));
});

module.exports = server;
