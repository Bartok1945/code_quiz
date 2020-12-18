function displayScores() {
    console.log("works");
    if (localStorage.getItem("Scores") === null) {
        scoresArr = [];
    }
    else {
        console.log("works");
        scoresArr = JSON.parse(localStorage.getItem("Scores"));
    }
    scoresArr.forEach((score) => {
        var appendListItems = document.querySelector(".highscore");
        var listItems = document.createElement("li");
        listItems.textContent = score;
        appendListItems.append(listItems);
        console.log("score ", score);
    })
}

displayScores();