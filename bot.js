const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("505428950881927188")
setInterval(function() {
channel.send(`see`);
}, 25)
})
 
 
client.login('NDc2NTgyOTM2MzIyMjQ0NjA5.DrUF-A.NqM4TB3yMLs4_AuZCZI6kk_LPgw');
