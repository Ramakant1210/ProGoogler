
btn.addEventListener("click",function(){
var firebaseConfig = {
    apiKey: "AIzaSyAn9khukpZXwEciAS8DiW1kleEX1LTBEyg",
    authDomain: "pror-fcb40.firebaseapp.com",
    databaseURL: "https://pror-fcb40.firebaseio.com",
    projectId: "pror-fcb40",
    storageBucket: "pror-fcb40.appspot.com",
    messagingSenderId: "848594044535",
    appId: "1:848594044535:web:d54f69924d97d77b142872",
    measurementId: "G-7F9NKVRS35"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);   //to be used before using any firebase service
  firebase.analytics();

database = firebase.database();

var ref = database.ref('players');

ref.orderByChild("score_game").limitToLast(20).on("child_added", snap => {
 console.log(snap.val());
});

/*
ref.on('value', gotData, errData);

function gotData(data){
  //console.log(data.val());
  var scores = data.val();
  var keys = Object.keys(scores).orderByChild('score_game');
  console.log(keys);

  for(i=0; i<keys.length; i++){
    var k = keys[i];
    var name = scores[k].userName;
    var mobile = scores[k].userPhoneNumber;
    var scr = scores[k].score_game;
    //console.log(name,mobile,scr);
    var li = document.createElement('li',name + ':' + mobile + ':' +scr);
   //li.parent('scoreList');
  }
}
function errData(err){
  console.log('Error!!!');
  console.log(err);
}*/
});
