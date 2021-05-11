const firebase = require("firebase/app");

const { init } = require("./init");
const { read } = require("./read");

init();

async function write(userID, data) {
  firebase.firestore().collection("days").doc(userID).update(data);
}

module.exports = { write };
