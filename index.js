const Eris = require("eris");
const keepAlive = require("./server");
const consola = require("./consol")

keepAlive();

require('dotenv').config();

const bot = new Eris(process.env.TOKEN);

bot.connect();

console.clear();
consola();

//no recomiendo modificar este codigo
