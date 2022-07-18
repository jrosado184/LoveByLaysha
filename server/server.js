const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const adminRouter = require('./auth/users-router');
const appointRouter = require('./appointments/appointments-router');
const completedRouter = require('./appointments/completed-router');
const disabledDays = require('./appointments/disabled days/disabled-router');
const disabledTimes = require('./appointments/disabled_times/disabled_times_router');
const serveStatic = require('serve-static');
const path = require('path');

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
  serveStatic(path.join(__dirname, '..', 'client', 'public'), {
    maxAge: '1d',
  })
);
server.use(
  serveStatic(path.join(__dirname, '..', 'client', 'public', 'scr', 'assets'), {
    maxAge: '31536000',
  })
);

server.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public'));
});

module.exports = server;
