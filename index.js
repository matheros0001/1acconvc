const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
 client.user.setActivity("Im ready")
 client.user.setStatus("idle")
 console.log("hi");
});

client.on("guildCreate", async (guild) => {
  const channel = client.guild.channels.cache.get("977887542789668865")
  const embed = new MessageEmbed()
  .setTitle("Joined")
  .setColor("RANDOM")
 channel.send(embed);

client.login("OTg5MTE1NjkxNTY1MjExNjg4.GNmDmm.aQAbkZL_dWU-WxbrdHdvR6Rek-zZUeW9irUpek");
