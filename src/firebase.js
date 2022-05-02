import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBDY1MBLGYoD3YW69ZA-KR_LLL1W0V2U6s",
  authDomain: "task-authentication.firebaseapp.com",
  databaseURL: "https://task-authentication-default-rtdb.firebaseio.com",
  projectId: "task-authentication",
  storageBucket: "task-authentication.appspot.com",
  messagingSenderId: "456447512627",
  appId: "1:456447512627:web:7e1475d0c8f97b16dd1346",
};
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
