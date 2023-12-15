// Retrieve the high scores from local storage
var highScoresList = document.querySelector("highscores");

// Parse the JSON string into a JavaScript array
var scoresArray = highscores ? JSON.parse(highscores) : [];

// Select the HTML element to display the high scores
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

// localStorage.clear();


