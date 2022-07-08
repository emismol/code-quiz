var start = document.querySelector('#start-quiz')
var questions = document.querySelector('.questions')
var highScores = document.querySelector(".high-scores")
var initalLog = document.querySelector("#initials")

var questionHeader = document.querySelector(".question-text")
var answer1 = document.querySelector("#option-a")
var answer2 = document.querySelector("#option-b")
var answer3 = document.querySelector("#option-c")
var answer4 = document.querySelector("#option-d")

const timeValue = document.querySelector('#time');
//const timerTime = new timeValue(0).getTime();
var timerCount
var stopwatch 
var questionIndex = 0
let question = [
    {question: "Commonly used data types DO Not include___",
     answers: ["strings", "booleans", "alerts", "numbers"],
     correct: 1},
    {question: "The condition in an if/else statement is enclosed with ___.",
     answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
     correct: 2},
     {question: "Arrays in JavaScript can be used to store___",
     answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
     correct: 3},
     {question: "String values must be enclosed within ___ when being assigned to variables",
     answers: ["commas", "curly brackets", "quotes", "parenthesis"],
     correct: 2},
     {question: "A very useful tool used during development and debugging for printing content to the debugger is",
     answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
     correct: 2} 
]


function countDown(){
    //const timeNow = new timeValue().getTime;
    //let difference = timerTime + timeNow;
    //const secValue = Math.floor(difference/(1000) % 60 );
    timeValue.innerHTML = timerCount;
    //secValue.innerHTML = secValue;
    timerCount--;
    if (timerCount <= 0) endQuiz();
}

function beginQuiz() {

    // Get the timer started
    timerCount = 75
    stopwatch = setInterval(countDown, 1000);

    // Hide the starting/home section
    start.style.display="none";

    // Show the questions section...
    questions.style.display="block";

    displayQuestions ()  

}
function displayQuestions(){
    questionHeader.textContent = question[questionIndex].question
    answer1.textContent = question[questionIndex].answers[0]
    answer2.textContent = question[questionIndex].answers[1]
    answer3.textContent = question[questionIndex].answers[2]
    answer4.textContent = question[questionIndex].answers[3]
}

function checkAnswer(buttonClicked){

    // See if the answer was correct.
    let correct = buttonClicked == question[questionIndex].correct;

    // If not, subtract 10 seconds from timer
    if (correct == 0) timerCount -= 10;

    // Increment the questionIndex
    questionIndex++;

    // If there is another question, display it.
    if (questionIndex < question.length) {
        displayQuestions();
    } else {
        // Otherwise show end-game info.
        endQuiz();
    }

}

function endQuiz() {
    
    // Stop timer
    clearInterval(stopwatch);
    
    // Hide the questions section
    questions.style.display="none";

    highScores.style.display="block";
    // Display the high score section


    /*
    Scores concepts

    high_scores = [
        {initials:"ABC",
         score:34},
        {...}
    ]
    */

    //Load the high_scores from localstorage.
    //let hs = localStorage.getItem("highScores");
    //if (hs == null) {
        // If it does not exist, create an empty one.
       // hs = [];
    //} else {
       // hs = JSON.parse(hs); // Converts the stored string into a data structure
   // }

    // Allow the user/winner, to enter initials.

    // Collect the initials from the web page, 
    // when the submit button is pressed, use document.getElementById() to get the initials
    document.querySelector("#initialBtn").addEventListener("click", function(event){
        event.preventDefault();

        let hs;
        
        // load the high score array from localstorage
        let hs_raw = localStorage.getItem('high_scores');
        if (hs_raw == null) {
            hs = [];
        } else {
            hs = JSON.parse(hs_raw);
        }

        // add the player's score to the array
        var user = {
            playerInitials: initalLog.value.trim(),
            score: timerCount
        };
        hs.push(user);

        // save the array to localstorage
        localStorage.setItem("high_scores",JSON.stringify(hs));

        // update display of scores
        let html = "<h2>High Scores</h2><p>";
        for (obj of hs) {
            html += obj.playerInitials + " " + obj.score + "<br>";
        }
        html += "</p>";
        document.getElementById("highscorelist").innerHTML = html;


        //localStorage.setItem("player",JSON.stringify(user))
        //console.log(user);


        //var getPlayer = localStorage.getItem(player);
         
    });
    //GET ITEM in preventDefault 
    //after console.log(user); 
    
    // from the input box, add the initials and the score (timerCount) to the hs object.
    //hs.push({initials:"SHM", score:timerCount})

    // Save the new high_scores to localstorage.
    // localStorage.setItem("highScores",hs);

    // Display the high scores 
    //highScores.style.display=display;
}


//code quiz answer question move page with array of objects, click and move page
//incerase question index by one, display questions again (will be a while loop)
//if timer reaches zero or if index = question.length end quiz and submit initals and display high scores 
// Add click event listener to start button
document.getElementById("start").addEventListener("click", beginQuiz);
// Place a click-event listener on each button
//document.getElementsByClassName("questions").addEventListener("click",nextQuestion);

document.getElementById("option-a").addEventListener('click', function() {
    checkAnswer(0);
})
document.getElementById("option-b").addEventListener('click', function() {
    checkAnswer(1);
})
document.getElementById("option-c").addEventListener('click', function() {
    checkAnswer(2);
})
document.getElementById("option-d").addEventListener('click', function() {
    checkAnswer(3);
})

//answers array log 1,2,3,2,2