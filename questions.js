//variables 
var questions = [
    {
        title: "Who is Luke Skywalker/'s Father?" ;
        choices: ["Master Yoda", "Han Solo", "Darth Vader", "R2-D2"];
        answer: "Darth Vader";
      
    },
    {
        title: "Who trained Obi-Wan Kenobi?";
        choices: ["Qui-Gon Jinn", "Master Yoda", "Your Mom", "Luke Skywalker" ];
        answer: "Qui-Gon Jinn";
    },
    {
        title: "What was the first planet destroyed by the Death Star?";
        choices: ["Tatooine", "Alderan", "Naboo", "Hoth"];
        answer: "Alderan";
    },
    {
        title: "What is the name of the primary starfighter used by the Rebellion?";
        choices: ["Y-wing", "A-wing", "V-wing", "X-wing"];
        answer: "X-wing";
    },
    {
        title: "What is Chewbacca/'s home planet?";
        choices: ["Kashyyyk", "Dantooine", "Mustafar", "Geonosis"];
        answer: "Kashyyyk";
    },
];

var score = ;

var time = 100;

var secondsLeft = document.querySelector(".seconds-left");


//functions

function countdown() {
count down from 100
}

function addOrSubTime() {
if correct add 5 seconds
else subtract 5 seconds
}





//for loop to cycle through questions do I even need this???
for(var i = 0; i < questions.length; i++) {

}

//event listeners
document.getElementById("start").addEventListener("click", countdown);