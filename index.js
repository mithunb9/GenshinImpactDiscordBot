const Discord = require("discord.js");
const { init } = require("./database/init");
const { read } = require("./database/read");
const { write } = require("./database/write");
const client = new Discord.Client();
const { initializeData } = require("./core/startup");

const characterInformation = require("./core/data/characters.json");

const { data } = require("cheerio/lib/api/attributes");

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
  } else if (msg.content.startsWith("artifact")) {
  } else if (command === "!add") {
    const playerCharacter = msg.content.split(" ")[1];
    let userID = msg.member.user.id;
    if (characterInformation[playerCharacter]) {
      let remindDays = characterInformation[playerCharacter]["talentDays"];
      for (let day of remindDays) {
        write(day, {
          [userID]: {
            message: `You will need to do your ${playerCharacter}'s talent level up domain today`,
          },
        });
      }
      msg.reply(`Set reminders for ${playerCharacter}`);
    } else {
      msg.reply("Character not found!");
    }
  }
});

client.login(process.env.TOKEN);
