const config = {
    apiKey: "AIzaSyAd2-c3y7CdmjLb0fUZm31uqwGDTCTncic",
    authDomain: "test-project-pratice.firebaseapp.com",
    databaseURL: "https://test-project-pratice-default-rtdb.firebaseio.com",
    projectId: "test-project-pratice",
    storageBucket: "test-project-pratice.appspot.com",
    messagingSenderId: "373970629913",
    appId: "1:373970629913:web:5ccd990e3d9c112cf28188"
  };

firebase.initializeApp(config);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getitem("room_name");
function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}