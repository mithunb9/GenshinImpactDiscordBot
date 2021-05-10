const axios = require("axios").default;

const getArtifactData = async () => {
  let response;
  let artifactData = [];

  try {
    response = await axios.get("https://api.genshin.dev/artifacts/");

    for (let artifact of response.data) {
      let artifactQuery = await getSpecificArtifactData(artifact);

      artifactData.push(artifactQuery);
    }

    return {
      list: response.data,
      data: artifactData,
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
