import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyAvt1PsHDy_KxJSNx9RuyNPJdaVc-6vh74",
    authDomain: "spotify-clone-3d57a.firebaseapp.com",
    projectId: "spotify-clone-3d57a",
    storageBucket: "spotify-clone-3d57a.appspot.com",
    messagingSenderId: "898897340868",
    appId: "1:898897340868:web:df7995fd1b9d3024e6dc91"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;