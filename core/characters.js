const fs = require("fs");

const axios = require("axios");

const getCharacterData = async () => {
  let userInformation = {};
  const response = await axios.get("https://api.genshin.dev/characters");
  const characters_array = await response.data;

  for (let character of characters_array) {
    userInformation[character] = { talentDays: [] };
  }

  fs.writeFile("./data/characters.json", JSON.stringify(userInformation), (err) => {
    if (err) console.error(err);
  });

  console.log("File edited");
};

getCharacterData();
