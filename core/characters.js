const fs = require("fs");

const axios = require("axios");

const getCharacterData = async () => {
  const response = await axios.get("https://api.genshin.dev/characters");
  const data = await response.data;

  console.log(data);
};

getCharacterData();
