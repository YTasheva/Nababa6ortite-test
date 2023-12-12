// References to elements
var divScreenStart = document.querySelector("#start-screen");
var startBtn = document.querySelector("#start-button");
var questionsDiv = document.querySelector("#questionsDiv");
var questionTitle = document.querySelector("#question-title");
var choicesDiv = document.querySelector("#choicesDiv");
var spanTime = document.querySelector("#time");
var divEndScreen = document.querySelector("#end-screen");
var spanFinalScore = document.querySelector("#final-score");
var inputInitials = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit-button");
var divFeedback = document.querySelector("#feedback");

//Other variables
var questionIndex = 0;
var countdownTimer = 0;



//When the button is clicked, timer starts
var time = 61;
function startQuiz() {
questionIndex = 0;
totalTime = 60;
timeLeft

var orderList = document.createElement("p");
divChoices.appendChild(orderList);
let ol = document.querySelector("ol");

ol.addEventListener("click", function (event) {
    let element = event.target;
    if (element.matches("button")) {
      let state = element.getAttribute("data-state");
      if (state == questions[questionIndex].correct) {
        message("Correct!");
      } else {
        message("Wrong!");
        countdownTimer -= 10;
        console.log(countdownTimer);
      }
      questionIndex++;
      ol.textContent = "";
      getQuestion(questionIndex);
    }
  });

  /*** Functions */

  function startQuiz() {}
function message(string) {
  console.log(string);
  let p1 = document.createElement("p");
  p1.textContent = string;
  divChoices.appendChild(p1);
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
    // clearInterval(intervalId);
  }

  function getQuestion(index) {
    if (index < questions.length) {
      h2Question.textContent = questions[index].question;
      console.log(index);
      console.log(questions.length);
      for (let i = 0; i < questions[index].answers.length; i++) {
        let li = document.createElement("li");
        let selectOlist = document.querySelector("ol");
        selectOlist.appendChild(li);
        let buttonAnswer = document.createElement("button");
        buttonAnswer.setAttribute("data-state", i);
        buttonAnswer.textContent = questions[index].answers[i];
        li.appendChild(buttonAnswer);
      }
    } else {
      h2Question.textContent = "";
    }
  }

  buttonStart.addEventListener("click", function () {
    startCountdown();
    // divStartScreen.classList.remove("start");
    // divStartScreen.classList.add("hide");
    divStartScreen.setAttribute("class", "hide");
    divQuestions.setAttribute("class", "");
    getQuestion(questionIndex);
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









