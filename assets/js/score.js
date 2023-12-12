// Retrieve the high scores from local storage
var highscores = localStorage.getItem("scores");

// Parse the JSON string into a JavaScript array
var scoresArray = JSON.parse(highscores);

// Select the HTML element where you want to display the high scores
var highScoresList = document.getElementById("scores");

// Loop over the array of high scores
for (var i = 0; i < scoresArray.length; i++) {
  var newScoreElement = document.createElement("li");
  newScoreElement.textContent = scoresArray[i].initials + ": " + scoresArray[i].score;
  highScoresList.appendChild(newScoreElement);
}

// Remove the high scores from local storage
var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function () {
  localStorage.removeItem("scores");
  highScoresList.innerHTML = "";
});

// Clear all local storage
localStorage.clear();

