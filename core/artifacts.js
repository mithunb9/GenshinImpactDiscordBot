const axios = require("axios").default;

const getArtifactData = async (scope = "") => {
  let response;

  try {
    response = await axios.get("https://api.genshin.dev/artifacts/");

    for (let artifact of response.data) {
      console.log(artifact);
    }

    return {
      list: response.data,
    };
  } catch (err) {
    console.error("Error getting artifact data", err);
  }
};

const getSpecificArtifactData = async (scope = "") => {
  let response;

  try {
    response = await axios.get(`https://api.genshin.dev/artifacts/${scope}`);

    return response.data;
  } catch (err) {
    console.error("Error getting specific artifact data", err);
  }
};
module.exports = { getArtifactData };
