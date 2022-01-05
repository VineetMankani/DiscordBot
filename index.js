console.log('Starting..');

require("dotenv").config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: 513 });

client.login(process.env.TOKEN);

client.on("ready", ()=> {
    console.log('Ready!')
})

const commandHandler = require("./commands")

client.on('messageCreate', commandHandler)