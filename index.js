const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { token, prefix } require("./config.json");

client.on("ready", () => {
 client.user.setActivity(`Im ready`)
 client.user.setStatus("dnd")
 console.log("hi");
});

client.on("guildCreate", guild => {
  const channel = client.guild.channels.cache.get("977887542789668865")
  const embed = new MessageEmbed()
  .setTitle("Joined")
  .setColor("RANDOM")
 channel.send(embed);
});

client.login(token);
