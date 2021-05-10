const fs = require("fs");

const initializeData = () => {
  const start = new Date();
  // code here
  fs.writeFile("artifacts.js", (err, data) => {
    if (err) console.error(err);
  });
  const end = new Date() - start;
  console.log(`Initializing data took ${end}ms`);
};

module.exports = { initializeData };
