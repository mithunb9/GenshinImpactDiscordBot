const Discord = require("discord.js");
const client = new Discord.Client();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "mithun") {
    msg.reply("Siddarth is gay");
  } else if (msg.content === "stats") {
  }
});

client.login(process.env.TOKEN);
