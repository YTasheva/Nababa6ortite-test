// Retrieve the high scores from local storage
var highScoresList = document.querySelector("ol");
var highScores = JSON.parse(localStorage.getItem("scores")) || [];
for (let i = 0; i < highScores.length; i++) {
  let li = document.createElement("li");
  highScoresList.appendChild(li);
  li.textContent = highScores[i].initials + " - " + highScores[i].score;
}

// Remove the high scores from local storage
var buttonClear = document.getElementById("#clear");
buttonClear.addEventListener("click", function () {
  localStorage.removeItem("scores");
  highScoresList.innerHTML = "";
});




