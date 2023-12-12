// Step 1: Retrieve the high scores from local storage
var highscores = localStorage.getItem("scores");

// Step 2: Parse the JSON string into a JavaScript array
var scoresArray = JSON.parse(scores);

// Step 3: Select the HTML element where you want to display the high scores
var highScore = document.getElementById("scores");

// Step 4: Loop over the array of high scores
for (var i = 0; i < scoresArray.length; i++) {
  // Step 5: For each high score, create a new HTML element
  var newScoreElement = document.createElement("li");

  // Step 6: Set the text content of the new element to the high score
  newScoreElement.textContent = scoresArray[i].initials + ": " + scoresArray[i].score;

  // Step 7: Append the new element to the selected HTML element
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

