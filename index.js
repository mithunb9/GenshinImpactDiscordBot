const Discord = require("discord.js");
const client = new Discord.Client();

const { getArtifactData } = require("./stats/stats.js");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  if (msg.content === "mithun") {
    msg.reply("Siddarth is gay");
  } else if (msg.content === "artifacts") {
    const data = await getArtifactData();
    console.log(data);

    const artifactEmbed = new Discord.MessageEmbed()
      .setTitle("Artifacts")
      .setDescription(data);

    msg.reply(artifactEmbed);
  }
});

client.login(process.env.TOKEN);
