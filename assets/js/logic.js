// References to elements
var startScreen = document.querySelector("#start-screen");
var startButtonQuiz = document.querySelector("#start");
var questionsDiv = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choicesDiv = document.querySelector("#choices");
var spanTime = document.querySelector("#time");
var EndScreen = document.querySelector("#end-screen");
var finalScoreP = document.querySelector("#final-score");
var inputInitials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var Feedback = document.querySelector("#feedback");

//Other variables
var quesIndex = 0;
var countTimer = 0;
var olList = document.createElement("ol");
choicesDiv.appendChild(olList);
var ol = document.querySelector("ol");

//Event listener for highScoresList
ol.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button")) {
    var state = element.getAttribute("data-state");
    if (state == questions[quesIndex].correct) {
      message("Correct!");
    } else {
      message("Wrong!");
      countTimer -= 10;
      console.log(countTimer);
    }
    quesIndex++;
    ol.textContent = "";
    displayQuestion(quesIndex);
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
    clearTimeout(function () {
      clearInterval(clearId);
    }, 1000);
  }, 1000);
}

function countdownOn() {
  countTimer = 60;
  spanTime.textContent = countTimer;
  let intervalId = setInterval(function () {
    countTimer--;
    spanTime.textContent = countTimer;
    console.log(countTimer);
    if (countTimer > 0 && quesIndex >= questions.length) {
      clearInterval(intervalId);
      spanTime.textContent = countTimer;
      questionsDiv.setAttribute("class", "hide");
      EndScreen.setAttribute("class", "start");
      finalScoreP.textContent = countTimer;
    }
    if (countTimer <= 0) {
      clearInterval(intervalId);
      spanTime.textContent = 0;
      questionsDiv.setAttribute("class", "hide");
      EndScreen.setAttribute("class", "start");
      finalScoreP.textContent = 0;
    }
  }, 1000);
}

function stopCount() {
  // clearInterval(countTimer);
  // spanTime.textContent = countTimer;
}

function displayQuestion(index) {
  if (index < questions.length) {
    questionTitle.textContent = questions[index].question;
    console.log(index);
    console.log(questions.length);
    for (let i = 0; i < questions[index].answers.length; i++) {
      let li = document.createElement("li");
      let highScoresList = document.querySelector("ol");
      highScoresList.appendChild(li);
      let buttonAnswerOn = document.createElement("button");
      buttonAnswerOn.setAttribute("data-state", i);
      buttonAnswerOn.textContent = questions[index].answers[i];
      li.appendChild(buttonAnswerOn);
    }
  } else {
    questionTitle.textContent = "";
  }
}

startButtonQuiz.addEventListener("click", function () {
  countdownOn();

  startScreen.setAttribute("class", "hide");
  questionsDiv.setAttribute("class", "");
  displayQuestion(quesIndex);
});

var highScores = JSON.parse(localStorage.getItem("scores")) || []; 
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  var initialsStore = inputInitials.value;
  var finalScore = {
    initials: initialsStore,
    score: countTimer,
  };
  highScores.push(finalScore);
  console.log(finalScore);
  highScores.sort(function (a, b) {
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

  // Save the JSON string in local storage
  localStorage.setItem("scores", JSON.stringify(highScores));
  document.location.assign("highcores.html");
});

