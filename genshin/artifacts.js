const axios = require("axios").default;

const getArtifactData = async (scope = "") => {
  console.log(scope);
  const response = await axios.get(
    `https://api.genshin.dev/artifacts/${scope}`
  );

  if (scope !== "") {
  }
  return response.data;
};

module.exports = { getArtifactData };
