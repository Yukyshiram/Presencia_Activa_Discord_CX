const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send("Tu cuenta esta on!");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("Presencia activa, engañando a Vicemi!");
  });
}

module.exports = keepAlive;
