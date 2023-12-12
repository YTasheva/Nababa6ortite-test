// Retrieved the high scores from local storage
var highscores = localStorage.getItem("scores");

// Parsed the JSON string into a JavaScript array
var scoresArray = JSON.parse(scores);

// Selected the HTML element where you want to display the high scores
var highScore = document.getElementById("scores");

// Loop over the array of high scores
for (var i = 0; i < scoresArray.length; i++) {
  var newScoreElement = document.createElement("li");
  newScoreElement.textContent = scoresArray[i].initials + ": " + scoresArray[i].score;
  highScoresList.appendChild(newScoreElement);
}

// Removed the high scores from local storage
var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function () {
  localStorage.removeItem("scores");
  highScoresList.innerHTML = "";
});

localStorage.clear();

