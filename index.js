const Discord = require("discord.js");
const { init } = require("./database/init");
const { read } = require("./database/read");
const { write } = require("./database/write");
const client = new Discord.Client();
const { initializeData } = require("./core/startup");

// initializeData();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  const command = msg.content.split(" ")[0];
  let subCommand = msg.content.split(" ")[1];

  if (msg.content.startsWith("artifacts")) {
    // const data = await getArtifactData();
    // const artifactEmbed = new Discord.MessageEmbed().setTitle("Artifacts");
    // data.forEach((key, val) => {
    //   artifactEmbed.addField(key, val + 1, true);
    // });
    // msg.reply(artifactEmbed);
  } else if (msg.content.startsWith("artifact")) {
    // if (!isNaN(subCommand)) {
    //   const data = await getArtifactData();
    //   subCommand = data[subCommand - 1];
    // }
    // const data = await getArtifactData(subCommand);
    // const artifactEmbed = new Discord.MessageEmbed().setTitle(data.name);
    // artifactEmbed
    //   .addField("Max Rarity", data.max_rarity)
    //   .addField("Two Piece Bonus", data["2-piece_bonus"])
    //   .addField("Four PIece Bonus", data["4-piece_bonus"])
    //   .setThumbnail(
    //     "https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Item_Adventurer%27s_Flower.png/revision/latest/scale-to-width-down/256?cb=20201120051635"
    //   );
    // msg.reply(artifactEmbed);
  } else if (command === "!main") {
    const playerMain = msg.content.split(" ")[1];
    write(msg.member.user.id, { main: playerMain });
    msg.reply(`Added ${playerMain} as your main`);
  }
});

client.login(process.env.TOKEN);
