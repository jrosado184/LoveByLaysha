const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./.././uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

const adminRouter = require("./auth/users-router");
const appointRouter = require("./appointments/appointments-router");
const deletedRouter = require("./appointments/deleted-router");
const completedRouter = require("./appointments/completed-router");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(fileUpload());
server.use("/api/users", adminRouter);
server.use("/api/appointments", appointRouter);
server.use("/api/deletedAppointments", deletedRouter);
server.use("/api/completedAppointments", completedRouter);

server.get("/", async (req, res) => {
  res.send("Welcome to LoveByLayshas server");
});

server.post("/upload", upload.single("image"), async (req, res) => {
  console.log("hey");
});

module.exports = server;
