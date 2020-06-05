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
ref.on('value', gotData, errData);

function gotData(data){
  console.log(data);
}
function errData(err){
  console.log('Error!!!');
  console.log(err);
}
