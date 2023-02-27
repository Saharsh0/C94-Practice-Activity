
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDy1s3-51uDOPhHYKRyRDZdTh46uvQY1ZU",
    authDomain: "c94-practice-activity-87c56.firebaseapp.com",
    databaseURL: "https://c94-practice-activity-87c56-default-rtdb.firebaseio.com",
    projectId: "c94-practice-activity-87c56",
    storageBucket: "c94-practice-activity-87c56.appspot.com",
    messagingSenderId: "149352653817",
    appId: "1:149352653817:web:098fccb97bb39fb91c1328",
    measurementId: "G-EQ0J992QXK"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function adduser()
{
    var user_name = document.getElementById("username").value
    firebase.database().ref("/").child(user_name).update({
        purpose: "Adding User Name"
    });
    document.getElementById("username").value = ""
}