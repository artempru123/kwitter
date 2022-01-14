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
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value ="";
           
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
