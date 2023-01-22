const Eris = require("eris");
const keepAlive = require("./server");
keepAlive();

require('dotenv').config();

const bot = new Eris(process.env.TOKEN);

bot.connect();

//no recomiendo modificar este codigo
