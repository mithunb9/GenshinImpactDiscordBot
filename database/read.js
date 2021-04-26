const firebase = require("firebase/app");

const { init } = require("./init");

init();

async function read(userID) {
  const collections = await firebase.firestore().collection("players").get();
  for (const doc of collections.docs) {
    if (userID == doc.id) {
      return doc.data();
    }
  }
}

module.exports = { read };
