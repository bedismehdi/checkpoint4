
function bolde(){

document.getElementById("bd").style.backgroundColor ="lightgreen"; 
if (document.getElementById("texte").style.fontWeight==""){
document.getElementById("texte").style.fontWeight="bold";
}
else
document.getElementById("texte").style.fontStyle="";
}
function ii(){
document.getElementById("bd1").style.backgroundColor ="red";
if (document.getElementById("texte").style.fontStyle==""){
    document.getElementById("texte").style.fontStyle="italic";
    }
    else
    document.getElementById("texte").style.fontStyle="";
    
}
function un(){
    document.getElementById("bd2").style.backgroundColor ="blue";
 if (document.getElementById("texte").style.textDecoration==""){
        document.getElementById("texte").style.textDecoration="underline";
        }
 else
        document.getElementById("texte").style.textDecoration="";
        
    }



function pxx(){
document.getElementById("texte").style.fontSize=document.getElementById("pxx").value;
}
function pxx1(){
document.getElementById("texte").style.fontFamily=document.getElementById("pxx1").value;
}
var firebaseConfig = {
    apiKey: "AIzaSyBTX7qly_3WpXvqjQ-DNz74MVwyCm-CU6s",
    authDomain: "bedixx-3571b.firebaseapp.com",
    databaseURL: "https://bedixx-3571b.firebaseio.com",
    projectId: "bedixx-3571b",
    storageBucket: "",
    messagingSenderId: "3923123735",
    appId: "1:3923123735:web:c7c619974aeaffa3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var messagesRef=firebase.database().ref('mydatabase');//setting the name of your data base
  function SubmitForm(e){
      event.preventDefault();
     // GetValues
     var name=document.getElementById('name').value;
     var track =document.getElementById("track").value;
     var email=document.getElementById('email').value;
     var number=document.getElementById("number").value;
     saveMessage(name,track,email,number); //sending to our database)
  }
  document.getElementById('contactform').addEventListener('submit',SubmitForm);
  //save message to firebase
  function saveMessage(name,track,email,number){
      var newmessageref=messagesRef.push();
      newmessageref.set({
          name:name,
          track:track,
          email:email,
          number:number,
      });
  }