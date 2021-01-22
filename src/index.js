const express = require("express");

const server = express();

const cors = require("cors");

const services = require("./services");

server.use(express.json());

server.use(cors());
server.use("/api", services);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.info(" ✅  Server is running on port " + port);
});

server.on("error", (error) => {
  console.error(" ❌ Error : server is not running :  " + error);
});
