var highscores = localStorage.getItem("high scores");
    var scoresArray;

    if (highscores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(highscores)
    }

    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    showhighscores();
  }
  










var selectOlist = document.querySelector("ol");
let highscore = JSON.parse(localStorage.getItem("scores")) || [];
for (let i = 0; i < highscore.length; i++) {
  let li = document.createElement("li");
  selectOlist.appendChild(li);
  // p = document.createElement("div")
  li.textContent = `${highscore[i].initial} (${highscore[i].score}) points`;
  // li.appendChild(p);
}

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  localStorage.removeItem("scores");
  selectOlist.textContent = "";
});