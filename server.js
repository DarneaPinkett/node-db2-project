const express = require("express");

const server = express();

server.use(express.jso());
server.use("/cars/api", carRouter);

module.exports = server;