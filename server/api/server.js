const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const db = require("./data/db-config");
const adminRouter = require("./auth/users-router");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/users", adminRouter);

server.get("/", async (req, res) => {
  res.send("Welcome to LoveByLayshas server");
});

module.exports = server;
