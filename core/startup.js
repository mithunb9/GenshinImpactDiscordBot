const fs = require("fs");
const { getArtifactData } = require("./artifacts");

const initializeData = async () => {
  const start = new Date();
  // code here

  let artifactData = JSON.stringify(await getArtifactData());

  fs.writeFile("./core/data/artifacts.json", artifactData, (err) => {
    if (err) console.error(err);
  });

  const end = new Date() - start;
  console.log(`Initializing data took ${end}ms`);
};

module.exports = { initializeData };
