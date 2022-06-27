const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
 client.user.setActivity("Im ready")
 client.user.setStatus("idle")
 console.log("hi");
});

client.login("OTg5MTE1NjkxNTY1MjExNjg4.GNmDmm.aQAbkZL_dWU-WxbrdHdvR6Rek-zZUeW9irUpek");
