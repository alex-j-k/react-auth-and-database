import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDRpO_zTtAd0ZTtTHSP7Gt8PZiOaZopsfg",
    authDomain: "react-auth-and-database.firebaseapp.com",
    projectId: "react-auth-and-database",
    storageBucket: "react-auth-and-database.appspot.com",
    messagingSenderId: "57130381675",
    appId: "1:57130381675:web:980dc0fbb76ccc58741c2e"
  };

var Firebase = firebase.initializeApp(firebaseConfig); 
 
export default Firebase;