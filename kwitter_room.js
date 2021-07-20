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
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='selectedroom(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function logout(){
      window.location="index.html";
      localStorage.removeItem("user_name");
}
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"addingroomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function selectedroom(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}