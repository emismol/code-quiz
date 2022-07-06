

const timeValue = document.querySelector('#time');
//const timerTime = new timeValue(0).getTime();
var timerCount
var stopwatch 

let question = [

    {question: "Here is the text for the question 1",
     answers: ["Answer a", "Answer b", "Answer c", "Answer d"],
     correct: 1},
    {question: "Here is the text for question 2",
     answers: ["Answer a", "Answer b", "Answer c", "Answer d"],
     correct: 1}     

]


function countUp(){
    //const timeNow = new timeValue().getTime;
    //let difference = timerTime + timeNow;
    //const secValue = Math.floor(difference/(1000) % 60 );
    timeValue.innerHTML = timerCount;
    //secValue.innerHTML = secValue;
    timerCount++;
}

function beginQuiz() {

    // Get the timer started
    timerCount = 0
    stopwatch = setInterval(countUp, 1000);

    // Hide the starting/home section
    document.querySelector('#start-quiz').style.display="none";

    // Show the questions section...
    document.querySelector('.questions').style.display="block";

}

// Add click event listener to start button
document.getElementById("start").addEventListener("click", beginQuiz);