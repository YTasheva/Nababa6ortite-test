// Retrieve the high scores from local storage
var highscores = localStorage.getItem("scores");

// Parse the JSON string into a JavaScript array
var scoresArray = JSON.parse(scores);

// Select the HTML element where you want to display the high scores
var highScore = document.getElementById("scores");

// Loop over the array of high scores
for (var i = 0; i < scoresArray.length; i++) {
  // For each high score, create a new HTML element
  var newScoreElement = document.createElement("li");

  // Set the text content of the new element to the high score
  newScoreElement.textContent = scoresArray[i].initials + ": " + scoresArray[i].score;

  // Append the new element to the selected HTML element
  highScoresList.appendChild(newScoreElement);
}

// Remove the high scores from local storage
var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function () {
  localStorage.removeItem("scores");
  highScoresList.innerHTML = "";
});

// Clear all data from local storage
localStorage.clear();

