import firebase from "firebase/app";
import "firebase/database";

var config = {
  databaseURL: "http://localhost:9000?ns=emulator-test-1",
  projectId: "emulator-test-1",
};
firebase.initializeApp(config);
firebase.setLogLevel("silent")
console.log("pushing")
firebase.database().ref('/path').push('value')
  .then(() => console.log("pushed"))
  .catch(() => console.log("caught"));  