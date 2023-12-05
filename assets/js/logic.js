var divStartScreen = document.querySelector("#start-screen");
var buttonStart = document.querySelector("#start");
var divQuestions = document.querySelector("#questions");
var h2Question = document.querySelector("#question-title");
var divChoices = document.querySelector("#choices");
var spanTime = document.querySelector("#time");
var divEndScreen = document.querySelector("#end-screen");
var spanFinalScore = document.querySelector("#final-score");
var inputInitials = document.querySelector("#initials");
var buttonSubmit = document.querySelector("#submit");
var divFeedback = document.querySelector("#feedback");

let questionIndex = 0;
let countdownTimer = 0;
let orderList = document.createElement("ol");
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
  
  let highscore = JSON.parse(localStorage.getItem("scores")) || [];
buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault;
  let initialStore = inputInitials.value;
  let currentScore = {
    initial: initialStore,
    score: countdownTimer,
  };
  highscore.push(currentScore);
  console.log(currentScore);
  highscore.sort(function (a, b) {
    // return a.score + b.score;
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
  localStorage.setItem("scores", JSON.stringify(highscore));
  document.location.assign("highscores.html");
});
  