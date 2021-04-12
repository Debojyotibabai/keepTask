import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDUHUwI1lmEoFT_KCeZzliTh2xAkVmKh-c",
  authDomain: "keep-task-c75f3.firebaseapp.com",
  databaseURL: "https://keep-task-c75f3-default-rtdb.firebaseio.com",
  projectId: "keep-task-c75f3",
  storageBucket: "keep-task-c75f3.appspot.com",
  messagingSenderId: "291985982394",
  appId: "1:291985982394:web:0f66b43cbfdb292e5f9383",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
