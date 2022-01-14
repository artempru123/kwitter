
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmstgPvc-DrloyV8u3NQUvQjxFVIU3tTY",
  authDomain: "project-c2c68.firebaseapp.com",
  databaseURL: "https://project-c2c68-default-rtdb.firebaseio.com",
  projectId: "project-c2c68",
  storageBucket: "project-c2c68.appspot.com",
  messagingSenderId: "986304834086",
  appId: "1:986304834086:web:2accc725ee15a82cf854e7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update ({
    purpose:"adding user"
});
}