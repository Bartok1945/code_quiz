//High score page pops up after last question local storage
//styling- hiding stuff
//end game function when timer is zero or all questions answered
//reset highscore function


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


//functions
function setTime() {
    var timerInterval = setInterval(function () {
        time--;
        secondsLeft.textContent = "Time Left " + time;

        if (time === 0) {
            clearInterval(timerInterval);
    }

    }, 1000);
}

function renderQuestion() {
    document.querySelector(".questions").textContent = questions[currentIndex].title;
    document.querySelector("#choiceA").textContent = questions[currentIndex].choices[0];
    document.querySelector("#choiceB").textContent = questions[currentIndex].choices[1];
    document.querySelector("#choiceC").textContent = questions[currentIndex].choices[2];
    document.querySelector("#choiceD").textContent = questions[currentIndex].choices[3];

}

function startQuiz() {
    currentIndex = 0;
    time = 100;
    renderQuestion();
    setTime();
}

function endQuiz() {
if (time === 0) {
    
}
}

function checkAnswer() {
    if (this.textContent === questions[currentIndex].answer) {
        time += 5;
    }
    else {
        time -= 5;
    }
    currentIndex++;
    renderQuestion();
}
// function countdown() {
// count down from 100
// }



//event listeners
var answerBtns = document.querySelectorAll(".answerbtn")
for (var i = 0; i < answerBtns.length; i++) {
    answerBtns[i].addEventListener("click", checkAnswer);
}
document.getElementById("start").addEventListener("click", startQuiz);
