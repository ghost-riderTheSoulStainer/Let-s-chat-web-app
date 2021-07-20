//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCMspkcte4uylC2glkEIVxx9cKYdO8lV2w",
      authDomain: "let-s-chat-web-app-c39bb.firebaseapp.com",
      databaseURL: "https://let-s-chat-web-app-c39bb-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-web-app-c39bb",
      storageBucket: "let-s-chat-web-app-c39bb.appspot.com",
      messagingSenderId: "13821960118",
      appId: "1:13821960118:web:538dad522f909e54032b17"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

name_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
button_tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelikes(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

row=name_tag+message_tag+button_tag+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}
function updatelikes(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}