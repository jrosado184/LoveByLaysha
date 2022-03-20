const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const adminRouter = require("./auth/users-router");
const appointRouter = require("./appointments/appointments-router");
const deletedRouter = require("./appointments/deleted-router");
const completedRouter = require("./appointments/completed-router");

const server = express();
server.use(express.json());
server.use(fileUpload());
server.use(helmet());
server.use(cors());
server.use("/api/users", adminRouter);
server.use("/api/appointments", appointRouter);
server.use("/api/deletedAppointments", deletedRouter);
server.use("/api/completedAppointments", completedRouter);

server.get("/", async (req, res) => {
  res.send("Welcome to LoveByLayshas server");
});

module.exports = server;
