import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-nk46f7Q2XoY6p15sZd4E_JiIr_qx7n4",
    authDomain: "ninja-chat-d3150.firebaseapp.com",
    databaseURL: "https://ninja-chat-d3150.firebaseio.com",
    projectId: "ninja-chat-d3150",
    storageBucket: "ninja-chat-d3150.appspot.com",
    messagingSenderId: "559631902199",
    appId: "1:559631902199:web:d4dd3bcc522b7a15827af2"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();