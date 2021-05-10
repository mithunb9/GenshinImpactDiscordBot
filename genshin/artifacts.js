const axios = require("axios").default;

const getArtifactData = async (scope = "") => {
  let response;
  try {
    response = await axios.get(`https://api.genshin.dev/artifacts/${scope}`);
  } catch (err) {
    return { error: "Error connecting to API." };
  }

  return response.data;
};

module.exports = { getArtifactData };
