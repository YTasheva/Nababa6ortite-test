var selectOlist = document.querySelector("ol");
let highscore = JSON.parse(localStorage.getItem("scores")) || [];
for (let i = 0; i < highscore.length; i++) {
  let li = document.createElement("li");
  selectOlist.appendChild(li);
  // p = document.createElement("div")
  li.textContent = `${highscore[i].initial} (${highscore[i].score}) points`;
  // li.appendChild(p);
}

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  localStorage.removeItem("scores");
  selectOlist.textContent = "";
});