const divStartScreen = document.querySelector("#start-screen");
const buttonStart = document.querySelector("#start");
const divQuestions = document.querySelector("#questions");
const h2Question = document.querySelector("#question-title");
const divChoices = document.querySelector("#choices");
const spanTime = document.querySelector("#time");
const divEndScreen = document.querySelector("#end-screen");
const spanFinalScore = document.querySelector("#final-score");
const inputInitials = document.querySelector("#initials");
const buttonSubmit = document.querySelector("#submit");
const divFeedback = document.querySelector("#feedback");

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
  