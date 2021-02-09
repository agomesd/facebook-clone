import firebase from "firebase";

const firebaseConfig = {
  apiKey: "*********************************",
  authDomain: "facebook-clone-c385f.firebaseapp.com",
  databaseURL: "https://facebook-clone-c385f.firebaseio.com",
  projectId: "facebook-clone-c385f",
  storageBucket: "facebook-clone-c385f.appspot.com",
  messagingSenderId: "441895420183",
  appId: "1:441895420183:web:f53c46745e8ed711247752",
  measurementId: "G-6SPXLZNGRW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
