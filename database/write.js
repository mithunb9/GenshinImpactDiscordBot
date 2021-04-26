const firebase = require("firebase/app");

const { init } = require("./init");
const { read } = require("./read");

init();

async function write(userID, data) {
  const details = await read(userID);
  firebase
    .firestore()
    .collection("players")
    .doc(userID)
    .set({
      ...details,
      ...data,
    });
}

module.exports = { write };
