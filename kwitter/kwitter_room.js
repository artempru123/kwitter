
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

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose :"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"; 
      
            
      
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}