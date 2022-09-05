require("dotenv").config();

const server = require("./server/server");

const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log("listening on " + port);
});
