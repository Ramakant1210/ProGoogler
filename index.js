var questionText = document.getElementById("question");
var btn = document.getElementById("btn");
var input = document.getElementById("answerInput");
var backgroundElement = document.getElementById("particles-js");
var timer = document.getElementById("timer");

//The var firebaseConfig is used to store firebase database versions animationDuration
//to be changed by the new database values
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


const user = {};

var colors = ["#1abc9c","#c0392b","#f1c40f","#8e44ad","#2980b9","#d35400","#44bd32","#6F1E51","#3742fa"];
var questions = [
    {
        question : "No. of moon earth used to have earlier?",
        answer : "2"
    },
    {
        question : "In which decade was the SPICE simulator introduced?(yyyy)",
        answer : "1970"
    },
    {
        question : "When was the first bollywood movie produced?(yyyy)",
        answer : "1913"
    },

	{
        question : "name the flying fish",
        answer : "exocoetidae"
    },
    {
        question : "Which method is used for data transfer in bluetooth(_____  _____)",
        answer : "asynchronous connectionless"
    },
    {
        question : "No of bones in human feet?",
        answer : "26"
    },
    {
        question : "Reliability, availability and serviceability (RAS) is a computer hardware engineering term was introduced by _____",
        answer : "ibm"
    },
    {
        question : "The Most Popular Programming Languages According to Google",
        answer : "python"
    },
    {
        question : "_______is a Danish computer scientist who is famous for designing and developing the C++ programming language.",
        answer : "bjarne stroustrup"
    },
    {
        question : "which is a strongly-typed functional programming language(__  ______)",
        answer : "f sharp"
    },
    {
        question : "Java was originally developed by?",
        answer : "james gosling"
    },
    {
        question : "At which cricket ground india won their first ever T20I series in NewZealand after Super over",
        answer : "seddon park"
    },
    {
        question : "________Cricket Ground is the worlds largest cricket stadium in the world with a total capacity of 100,024",
        answer : "melbourne"
    },
    {
        question : "Who is the youngest Triple Champion in Formula One History?",
        answer : "sebastian vettel"
    },
    {
        question : "Fianchetto is the strategy in the game of:",
        answer : "chess"
    },
    {
        question : "________is an American technology executive. She has been the CEO of YouTube since February 2014.",
        answer : "susan diane wojcicki"
    },
    {
        question : "Which is the first calculating device?",
        answer : "abacus"
    },
    {
        question : "Who is the ceo of World Bank Group?",
        answer : "kristalina georgieva"
    },
    {
        question : "Who is the CEO of Urban Clap?",
        answer : "abhiraj bhal"
    },
    {
        question : "Which mineral contains both magnesium and calcium?",
        answer : "dolomite"
    },
    {
        question : "Working principle of washing machine is",
        answer : "centrifugation"
    },
    {
        question : "Who is the CEO of Whats App?",
        answer : "jan koum"
    },
    {
        question : "What is the name of the first mobile gaming app invented?",
        answer : "tetris"
    },
    {
        question : "Paul Buchheit Google developer started the project named:",
        answer : "gmail"
    },
    {
        question : "The IMDB rating of ‘Breaking Bad:",
        answer : "9.5"
    },
    {
        question : "Which is the first indian company to be listed on the US NASDAQ?(____  _____)",
        answer : "infosys technologies"
    },
    {
        question : "Richest Man in World (name surname)",
        answer : "jeff bezos"
    },
    {
        question : "What is the capital of virginia",
        answer : "richmond"
    },

    {
        question : "Snapdragon 801 has the highest bandwidth of ______GB/s",
        answer : "14.9"
    },
    {
        question : "The world’s first autonomous pods has launched in which city?",
        answer : "dubai"
    },
    {
        question : "Andiod is licensed under which licensing license?",
        answer : "apache mit"
    },
    {
        question : "Verification is process of",
        answer : "authentication"
    },
    {
        question : "The granular noice is reduce by(____  ___  ___  ___)",
        answer : "reducing the step size"
    },
    {
        question : "Latest book of Bjarne Stroustrup?",
        answer : "tour of c++"
    },
    {
        question : "Computer Space was created by(FirstName LastName FirstName LastName",
        answer : "nolan bushnell ted dabne"
    },
    {
        question : "Who is known as Father of Video Games",
        answer : "baer"
    },
    {
        question : "Development of a nanoplate was done in which lab?(____  _____  _____)",
        answer : "brookhaven national lab"
    },
    {
        question : "What is the cost of first eyephone?? (not iPhone)(Only Number)",
        answer : "500"
    },
    {
        question : "What is the input device used to track the emotions of a user by a simple touch on it?",
        answer : "emotion mouse"
    },
    {
        question : "Which firm invested 3 million dollars in the company zip2?",
        answer : "mohr davidow ventures"
    },
    {
        question : "Under what name the founder of wiki leaks started hacking?",
        answer : "mendax"
    },
    {
        question : "What is the command to print data on the webpage?",
        answer : "echo"
    },
    {
        question : "What did Mark Zuckerberg named his first messenger software?",
        answer : "zucknet"
    },
    {
        question : "Unmodulated signal coming from a transmitter is know as?(____  ____)",
        answer : "baseband signal"
    },
    {
        question : "No of innings Rahul Dravid played in test?",
        answer : "286"
    },
    {
        question : "When were blue jeans invented?(yyyy)",
        answer : "1850"
    },
    {
        question : "The original name of Bank of America was ?",
        answer : "bank of italy"
    },
    {
        question : "Previous name of LOC",
        answer : "cease fire line"
    },
    {
        question : "In which programming language we cannot able to use friend function?",
        answer : "java"
    },
    {
        question : "Which book publishes notable record?",
        answer : "guinness world records"
    },
    {
        question : "What is the default port for MySQL Server?",
        answer : "3306"
    },
    {
        question : "Hawaii was originally called as ?",
        answer : "sandwich islands"
    },
    {
        question : "The most sung song on earth is ?",
        answer : "happy birthday to you"
    },
    {
        question : "When was the last appearance of the yellow kid noted?(yyyy)",
        answer : "1898"
    },
    {
        question : "What was the first message sent over the internet?",
        answer : "login"
    },
    {
        question : "What was samsung's first technical product?",
        answer : "black and white television set"
    },
    {
        question : "A group of frogs is called as ?",
        answer : "army"
    },
    {
        question : "What is the pH of the soil on Mars?",
        answer : "7.7"
    },
    {
        question : "Who is the first person to become a billionaire (U.S. dollars) by writing books?",
        answer : "rowling"
    },
    {
        question : "In Nov 2014 which Palm Island was complete?",
        answer : "palm jumeirah"
    },
    {
        question : "Which was the first search engine?",
        answer : "archie"
    },
    {
        question : "In which year the youngest Australian emerged to score a Century ?",
        answer : "1948"
    },
    {
        question : "Turbo Cidaris belongs to clade?",
        answer : "vetigastropoda"
    },
    {
        question : "Robert E. Kahn and Vint Cerf invented ______",
        answer : "internet"
    },
    {
        question : "The term bicycle was coined in _________",
        answer : "france"
    },
    {
        question : "George Eastman's first camera was called as?",
        answer : "kodak"
    },
    {
        question : "ISRO has also launched __ foreign satellites till date",
        answer : "29"
    },
];

var ok = "#2ecc71";
var medium = "#e67e22";
var alert = "#e74c3c";

var startTime = 0;
var duration = 60000 * 20;

var roundFinished = false;
var remainingTime;
var addedToDatabase = false;

startTime = (new Date()).getTime();
remainingTime = duration - ((new Date()).getTime() - startTime);

var interval = setInterval(intervalCode,1000);

function startTimer(){
setTimeout(function(){

    roundFinished = true;
    timer.classList.remove("flash");
    canvas.classList.remove("flash");

    btn.style.visibility = "invisible";

    createUser();
},duration)
}

function intervalCode(){
    remainingTime = duration - ((new Date()).getTime() - startTime);
    console.log(remainingTime);


    if(remainingTime > 0){


    var time = millisToMinutesAndSeconds(remainingTime);

    timer.innerText = time;

    drawArc();
    }

}

function millisToMinutesAndSeconds(millis){
    var minutes = Math.floor((millis / 60000));
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    if(minutes == 0 && seconds <= 15){
        animateTimer();
    }
    return (seconds == 60 ? (minutes + 1) + " : 00" : minutes + " : " + (seconds < 10 ? "0" : "") + seconds);
}

function animateTimer(){
    timer.classList.add("flash");
    timer.style.animationDuration = "2s";
    timer.style.animationIterationCount = "infinite";
    canvas.classList.add("animated");
    canvas.classList.add("flash");
    canvas.style.animationDuration = "2s";
    canvas.style.animationIterationCount = "infinite";
}

function setup(){
    createCanvas(200,200);
    angleMode(DEGREES);


}

function drawArc(){
    clear();

    strokeWeight(4);
    //stroke(255, 100, 150);
    noStroke();
    fill(255,255,255);
    ellipse(width/2,height/2,190,190);
    stroke(ok);
    let end = map(remainingTime,0,duration,0,360);

    noFill();
    if(end >= 0){
        arc(width/2,height/2,180,180,0,end);

    }

}


var canvas = document.getElementById("defaultCanvas0");
function setColor(){
    if(remainingTime > duration - (1000 * 10)){
        stroke(ok);
    }
    else if(remainingTime < duration - (1000 * 10) && remainingTime > duration - (1000 * 20)){
        stroke(medium);
    }
    else{
        stroke(alert);
    }
}

function removeQuestion(question){

    for(var i = 0; i < questions.length; i++){
        if(question == questions[i]){
            questions.splice(i,1);
        }
    }
}
var randomQuestionNumber = Math.floor(Math.random() * questions.length);
var correctQuestions = [];
var wrongQuestions = [];

var currentQuestion = questions[randomQuestionNumber];
removeQuestion(currentQuestion);


questionText.innerText = currentQuestion.question;
var randomNumber = Math.floor(Math.random() * 9);
backgroundElement.style.background = colors[randomNumber];


btn.addEventListener("click",function(){
    if(!roundFinished){
        if(questions.length != 0){
        //Get a random number to select a random color as a background
        var randomNumber = Math.floor(Math.random() * 10);


        //Set the background color from colors arraylist
        backgroundElement.style.background = colors[randomNumber];

        //Listen for animation end event and remove class
        backgroundElement.addEventListener("onanimationend",function(){
            background.classList.remove("fadeIn");
        })

        //Get the answer from input field
        var answer = input.value;

        //Convert the answer to lower case
        answer = answer.toLowerCase();

        //if answer is correct add it to correct answers array

        answer = answer.replace(/\n/g,"");
        console.log(currentQuestion.answer);
        if(answer == currentQuestion.answer){
            correctQuestions.push(currentQuestion);
        }
        //else add it to wrong answers array
        else{
            currentQuestion.answered = answer;
            wrongQuestions.push(currentQuestion);
        }

        //Change the current question to random question from questions array
        var randomQuestionNumber = Math.floor(Math.random() * questions.length);
        currentQuestion = questions[randomQuestionNumber];
        removeQuestion(currentQuestion);


        //set the text for question from current question
        questionText.innerText = currentQuestion.question;

        //add animation class to animate question
        questionText.classList.add("fadeInRight");

        //Add animationend event listener to remove animation class on animation end
        questionText.addEventListener("animationend",function(){
            questionText.classList.remove("fadeInRight");
        })



        //Set the input field to empty field
        input.value = "";

        }
        else{

            createUser();
        }
    }
    else{
        createUser();
        console.log("Time out");

    }


});




const name = document.getElementById("name");
const phone = document.getElementById("phone");
const score = document.getElementById("score");
const message = document.getElementsByClassName("message")[0];


function pushFirebase(){
user.name = localStorage.getItem("name");

user.phone = localStorage.getItem("phone");

user.correctQuestions = correctQuestions;
user.wrongQuestions = wrongQuestions;
user.score = correctQuestions.length;

  const userName=user.name;
  const userPhoneNumber=user.phone;
  const score_game = user.score;
  console.log("pushFirebase");

  const fb = firebase.database().ref();


  console.log("User Name is ----"+userName);



  console.log("User PhoneNumber is ----"+userPhoneNumber);
  console.log("User Score is ... "+ score_game);

  data={userName,userPhoneNumber,score_game};

   fb.child('players/').push(data);


}
function storeValues()
{
  console.log("C");


}


function createUser(){
    console.log("Inside Create User");
    noStroke();
    clearInterval(interval);
    timer.innerText = "0 : 00";
    roundFinished = true;
    btn.style.display = "none";
    user.name = localStorage.getItem("name");
    console.log("user Name is :----"+user.name);
    user.phone = localStorage.getItem("phone");
    user.correctQuestions = correctQuestions;
    user.wrongQuestions = wrongQuestions;
    user.score = correctQuestions.length;
    user.round = 2;

    name.innerText = "Name : " + user.name;
    phone.innerText = "Phone : " + user.phone;
    score.innerText = "Your Score is : " + user.score;
    message.style.display = "block";
    pushFirebase();
}
