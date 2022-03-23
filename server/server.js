const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');

const adminRouter = require('./auth/users-router');
const appointRouter = require('./appointments/appointments-router');
const deletedRouter = require('./appointments/deleted-router');
const completedRouter = require('./appointments/completed-router');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(
  fileUpload({
    createParentPath: true,
  })
);
server.use(express.urlencoded({ extended: true }));
server.use('/api/users', adminRouter);
server.use('/api/appointments', appointRouter);
server.use('/api/deletedAppointments', deletedRouter);
server.use('/api/completedAppointments', completedRouter);

server.get('/', async (req, res) => {
  res.send('Welcome to LoveByLayshas server');
});

server.post('/image', async (req, res) => {
  let image = req.files;

  for (let img in image) {
    image[img].mv(`./images/${image[img].name}`, (err) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).json(image[img].name);
      }
    });
  }
});

module.exports = server;
