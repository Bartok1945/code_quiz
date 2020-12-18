


//variables 
var questions = [
    {
        title: "Who is Luke Skywalker's Father?",
        choices: ["Master Yoda", "Han Solo", "Darth Vader", "R2-D2"],
        answer: "Darth Vader",

    },
    {
        title: "Who trained Obi-Wan Kenobi?",
        choices: ["Qui-Gon Jinn", "Master Yoda", "Your Mom", "Luke Skywalker"],
        answer: "Qui-Gon Jinn",
    },
    {
        title: "What was the first planet destroyed by the Death Star?",
        choices: ["Tatooine", "Alderan", "Naboo", "Hoth"],
        answer: "Alderan",
    },
    {
        title: "What is the name of the primary starfighter used by the Rebellion?",
        choices: ["Y-wing", "A-wing", "V-wing", "X-wing"],
        answer: "X-wing",
    },
    {
        title: "What is Chewbacca/'s home planet?",
        choices: ["Kashyyyk", "Dantooine", "Mustafar", "Geonosis"],
        answer: "Kashyyyk",
    },
];
var score = 0;
var time = 100;
var secondsLeft = document.querySelector(".seconds-left");
var currentIndex;
var startBtn = document.getElementById("click-start");
var showQuestions = document.querySelector(".wrapper")
var enterInitials = document.getElementById("enter-initials")
var initials = document.getElementById("initials");

//functions

//Starts Timer
function setTime() {
    var timerInterval = setInterval(function () {
        time--;
        secondsLeft.textContent = "Time Left " + time;

        if (time === 0 || currentIndex > 4) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

//Renders Questions and possible answers
function renderQuestion() {
    document.querySelector(".questions").textContent = questions[currentIndex]?.title;
    document.querySelector("#choiceA").textContent = questions[currentIndex]?.choices[0];
    document.querySelector("#choiceB").textContent = questions[currentIndex]?.choices[1];
    document.querySelector("#choiceC").textContent = questions[currentIndex]?.choices[2];
    document.querySelector("#choiceD").textContent = questions[currentIndex]?.choices[3];

}

//Hides splash page and show question wrapper
function startQuiz() {
    startBtn.style.display = 'none';
    showQuestions.style.display = "block";
    currentIndex = 0;
    time = 100;
    renderQuestion();
    setTime();
}

//attaches checkAnswer listener to the answer buttons
var answerBtns = document.querySelectorAll(".answerbtn")
for (var i = 0; i < answerBtns.length; i++) {
    answerBtns[i].addEventListener("click", checkAnswer);
}
//Validating answers and checks quiz progress
function checkAnswer() {
    if (this.textContent === questions[currentIndex].answer) {
        time += 5;
    }
    else {
        time -= 5;
    }
    currentIndex++;
    if (currentIndex === questions.length) {
        showQuestions.style.display = 'none';
        enterInitials.style.display = "block";
    }
    renderQuestion();
}
//Storing scores in localStorage 
function submitScore() {

    var scoresArr = JSON.parse(localStorage.getItem("Scores")) || [];
    scoresArr.push(initials.value + " - " + time);
    localStorage.setItem("Scores", JSON.stringify(scoresArr))
    window.location.assign("highscores.html")
}
//event listeners

document.getElementById("start").addEventListener("click", startQuiz);

document.querySelector(".highscore").addEventListener("click", submitScore);
