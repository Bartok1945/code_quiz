//variable
var homeBtn = document.getElementById("home");
var clearBtn = document.getElementById("clear"); 
var highScores = document.querySelector(".highscore");

//event listener and quiz reset
homeBtn.addEventListener("click", function() {
    window.location.assign("index.html");
})
//clearing highscores off page and localStorage
clearBtn.addEventListener("click", function() {
    localStorage.clear();
    highScores.innerHTML = "";
})

//Renders highscores to the page
function displayScores() {
    if (localStorage.getItem("Scores") === null) {
        scoresArr = [];
    }
    else {
        
        scoresArr = JSON.parse(localStorage.getItem("Scores"));
    }
    scoresArr.forEach((score) => {
        var appendListItems = document.querySelector(".highscore");
        var listItems = document.createElement("li");
        listItems.textContent = score;
        appendListItems.append(listItems);
    })
}

displayScores();
