var hScores = document.querySelector(".showScores");
let retString = localStorage.getItem("dataKey");
let retArray = JSON.parse(retString);
console.log(retArray);

hScores.innerHTML = (retArray[0]["initials"] + " " + retArray[0]["score"]); 

hScores.innerHTML = (retArray[1]["initials"] + " " + retArray[1]["score"]); 
hScores.innerHTML = (retArray[2]["initials"] + " " + retArray[2]["score"]); 
hScores.innerHTML = (retArray[3]["initials"] + " " + retArray[3]["score"]); 