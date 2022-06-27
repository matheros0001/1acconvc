const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  client.channels.cache.get("Voice id").join();
})

client.on("ready", () => {
   client.user.setStatus("dnd") // You can change it to online, dnd, idle
   client.user.setActivity("Activity");
 console.log(`Successfully logined as ${client.user.tag} `)
});

client.login("Token");
