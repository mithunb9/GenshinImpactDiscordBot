const fs = require("fs");
const { getArtifactData } = require("./artifacts");

const initializeData = () => {
  const start = new Date();
  // code here

  fs.writeFile("artifacts.json", JSON.stringify(getArtifactData()), (err) => {
    if (err) console.error(err);
  });

  const end = new Date() - start;
  console.log(`Initializing data took ${end}ms`);
};

module.exports = { initializeData };
