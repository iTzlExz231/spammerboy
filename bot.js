const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("635540343647109168")
setInterval(function() {
channel.send(`Wdashا`);
}, 30)
})

client.login(process.env.BOT_TOKEN);