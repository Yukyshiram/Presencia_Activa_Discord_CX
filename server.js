const express = require("express");
const server = express();
const chalk = require('chalk');
const consola = require("./consol")

server.all("/", (req, res) => {
  res.send("Tu cuenta esta on!");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("El servidor esta listo");
    console.clear();
  });
}

module.exports = keepAlive;
