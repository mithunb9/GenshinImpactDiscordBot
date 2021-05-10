const axios = require("axios").default;

const getArtifactData = async (scope = "") => {
  let response;

  try {
    response = await axios.get("https://api.genshin.dev/artifacts/");

    return {
      list: response.data,
    };
  } catch (err) {
    console.error("Error getting artifact data", err);
  }
};

const getAllArtifactData = async (scope = "") => {
  let response;

  try {
    response = await axios.get(`https://api.genshin.dev/artifacts/${scope}`)
  }
};
module.exports = { getArtifactData };
