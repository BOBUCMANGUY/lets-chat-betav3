

var firebaseConfig = {
  apiKey: "AIzaSyAd2-c3y7CdmjLb0fUZm31uqwGDTCTncic",
  authDomain: "test-project-pratice.firebaseapp.com",
  databaseURL: "https://test-project-pratice-default-rtdb.firebaseio.com",
  projectId: "test-project-pratice",
  storageBucket: "test-project-pratice.appspot.com",
  messagingSenderId: "373970629913",
  appId: "1:373970629913:web:5ccd990e3d9c112cf28188"
};
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome!"+user_name+"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose:"adding_room_name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name"+Room_names);
row="<div class='room_name' id=" +Room_names +"onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}