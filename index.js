const Discord = require("discord.js");
const { init } = require("./database/init");
const { read } = require("./database/read");
const { write } = require("./database/write");
const client = new Discord.Client();

const { getArtifactData } = require("./stats/stats.js");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  const command = msg.content.split(" ")[0];

  if (msg.content.startsWith("artifacts")) {
    const data = await getArtifactData();
    console.log(data);

    const artifactEmbed = new Discord.MessageEmbed()
      .setTitle("Artifacts")
      .setDescription(data);

    msg.reply(artifactEmbed);
  } else if (command === "!main") {
    const playerMain = msg.content.split(" ")[1];
    write(msg.member.user.id, { main: playerMain });
    msg.reply(`Added ${playerMain} as your main`);
  }
});

client.login(process.env.TOKEN);
