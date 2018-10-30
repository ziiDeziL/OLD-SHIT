const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
let channel =     client.channels.get("505428950881927188")
setInterval(function() {
channel.send(`see`);
}, 25)
})
  }
});

client.login(process.env.BOT_TOKEN);
