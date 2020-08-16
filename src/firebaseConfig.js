import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBruEZlSbLeog--zytiTMwnKNElVQDKLK4",
    authDomain: "juli-v-zemoga-app.firebaseapp.com",
    databaseURL: "https://juli-v-zemoga-app.firebaseio.com",
    projectId: "juli-v-zemoga-app",
    storageBucket: "juli-v-zemoga-app.appspot.com",
    messagingSenderId: "429749815586",
    appId: "1:429749815586:web:a079e7d5e695f3cf5cbd7b"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;