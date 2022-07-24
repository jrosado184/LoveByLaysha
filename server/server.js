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

let setCache = function (req, res, next) {
  // here you can define period in second, this one is 5 minutes
  const period = '31536000';

  // you only want to cache for GET requests
  if (req.method == 'GET') {
    res.set('Cache-control', `public, max-age=${period}`);
  } else {
    // for the other requests set strict no caching parameters
    res.set('Cache-control', `no-store`);
  }

  // remember to call next() to pass on the request
  next();
};

// now call the new middleware function in your app

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
    maxAge: '31536000',
  })
);
server.use(
  serveStatic(path.join(__dirname, '..', 'client', 'public', 'src', 'assets'), {
    maxAge: '31536000',
  })
);
server.use(
  serveStatic(path.join(__dirname, '..', 'client', 'build', 'static'), {
    maxAge: '31536000',
  })
);
server.use(setCache);

server.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public'), {
    maxAge: '31536000',
  });
  res.sendFile(
    path.join(__dirname, '..', 'client', 'public', 'src', 'assets'),
    {
      maxAge: '31536000',
    }
  );
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'static'), {
    maxAge: '31536000',
  });
});

module.exports = server;
