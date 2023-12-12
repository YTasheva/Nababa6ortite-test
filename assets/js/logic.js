// References to elements
var StartScreen = document.querySelector("#start-screen");
var startGame = document.querySelector("#start-game");
var questionsDiv = document.querySelector("#questionsDiv");
var questionTitle = document.querySelector("#question-title");
var choicesDiv = document.querySelector("#choices");
var spanTime = document.querySelector("#time");
var EndScreen = document.querySelector("#hide");
var finalScoreP = document.querySelector("#final-score");
var inputInitials = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit-button");
var Feedback = document.querySelector("#feedback-hide");

//Other variables
var questionIndex = 0;
var countdownTimer = 0;
var highScoresList = document.createElement("highscores")
choicesDiv.appendChild(highScoresList);
var highScoresList = document.querySelector("highscores");

//Event listener for highScoresList
highScoresList.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button")) {
    var state = element.getAttribute("data-state");
    if (state == questions[questionIndex].correct) {
      message("Correct!");
    } else {
      message("Wrong!");
      countdownTimer -= 10;
      console.log(countdownTimer);
    }
    questionIndex++;
    highScoresList.textContent = "";
    getQuestion(questionIndex);
  }
});

  //Functions

  function startGame() {}
function message(string) {
  console.log(string);
  let p1 = document.createElement("p");
  p1.textContent = string;
  choicesDiv.appendChild(p1);
  let clearId = setInterval(function () {
    p1.textContent = "";
    console.log((p1.textContent = ""));
    setTimeout(function () {
      clearInterval(clearId);
    }, 1000);
  }, 1000);
}

function startCountdown() {
    countdownTimer = 60;
    spanTime.textContent = countdownTimer;
    let intervalId = setInterval(function () {
      countdownTimer--;
      spanTime.textContent = countdownTimer;
      console.log(countdownTimer);
      if (countdownTimer > 0 && questionIndex >= questions.length) {
        clearInterval(intervalId);
        spanTime.textContent = countdownTimer;
        divQuestions.setAttribute("class", "hide");
        divEndScreen.setAttribute("class", "start");
        spanFinalScore.textContent = countdownTimer;
      }
      if (countdownTimer <= 0) {
        clearInterval(intervalId);
        spanTime.textContent = 0;
        divQuestions.setAttribute("class", "hide");
        divEndScreen.setAttribute("class", "start");
        spanFinalScore.textContent = 0;
      }
    }, 1000);
  }

  function stopCountdown() {
  }

  function displayQuestions(index) {
    if (questionIndex < questions.length) {
      questionTitle.textContent = questions[questionIndex].question;
      console.log(questionIndex);
      console.log(questions.length);
      for (let i = 0; i < questions[questionIndex].answers.length; i++) {
        let li = document.createElement("li");
        let highScoresList = document.querySelector("ol");
        highScoreslist.appendChild(li);
        let buttonAnswer = document.createElement("button");
        buttonAnswer.setAttribute("data-state", i);
        buttonAnswer.textContent = questions[index].answers[i];
        li.appendChild(buttonAnswer);
      }
    } else {
      questionTitle.textContent = "";
    }
  }

  startQuizz.addEventListener("click", function () {
    startCountdown();
    divScreenStart.setAttribute("class", "hide");
    questionsDiv.setAttribute("class", "");
    displayQuestions(questionIndex);
  });
  
  // Retrieves the high scores from local storage
var highscore = localStorage.getItem("scores");

// Parses the JSON string into a JavaScript array
var scoresArray = JSON.parse(scores) || [];
submitBtn.addEventListener("click", function (event) {
  event.preventDefault;

// Add newScore to scoresArray
var newScore = { initials: "ABC", score: 100 };
scoresArray.push(newScore);
console.log(newScore);
scoresArray.sort(function(a, b) {
  return a.score + b.score;
  if (a.score > b.score) {
    return -1;
  }

  if (a.score == b.score) {
    return 0;
  }       

  if (a.score < b.score) {
    return 1;
  }
});

// Converts the array back into a JSON string
var scoresJSON = JSON.stringify(scoresArray);

// Saves the JSON string in local storage
localStorage.setItem("scores", scoresJSON);
document.location.assign("highscores.html");
}









