var start = document.querySelector('#start-quiz')
var questions = document.querySelector('.questions')
var highScores = document.querySelector(".high-scores")

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
     correct: 2}
     {question: "Arrays in JavaScript can be used to store___",
     answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
     correct: 3}
     {question: "String values must be enclosed within ___ when being assigned to variables",
     answers: ["commas", "curly brackets", "quotes", "parenthesis"],
     correct: 2} 
     {question: "A very useful tool used during development and debugging for printing content to the debugger is",
     answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
     correct: 2} 
]


function countUp(){
    //const timeNow = new timeValue().getTime;
    //let difference = timerTime + timeNow;
    //const secValue = Math.floor(difference/(1000) % 60 );
    timeValue.innerHTML = timerCount;
    //secValue.innerHTML = secValue;
    timerCount--;
}

function beginQuiz() {

    // Get the timer started
    timerCount = 75
    stopwatch = setInterval(countUp, 1000);

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

//code quiz answer question move page with array of objects, click and move page
//incerase question index by one, display questions again (will be a while loop)
//if timer reaches zero or if index = question.length end quiz and submit initals and display high scores 
// Add click event listener to start button
document.getElementById("start").addEventListener("click", beginQuiz);