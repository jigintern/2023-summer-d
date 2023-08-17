import{getEndJson} from"./getQuizEnd.js";

const urlParams=new URLSearchParams(window.location.search);
const destParameter=urlParams.get("dest");
const endIndex=destParameter.substring(destParameter.indexOf('-') + 1);
console.log(endIndex);

let endData=await getEndJson(endIndex);
console.log(endData);
const tmp=endData.message;
document.getElementById("message").textContent=tmp;

const pushToQuiz = document.getElementById("pushToQuiz")
const pushToIndex = document.getElementById("pushToIndex")
const tmp2 = 30;
const scoreText = "Your Score = " + tmp2;

pushToQuiz.addEventListener("click", () => {
  console.log("fire")
  window.location.href = "/typhoonQuiz/typhoonQuiz.html"
})

pushToIndex.addEventListener("click", () => {
  console.log("fire")
  window.location.href = "/index.html"
})

const score = document.getElementById("score")
score.textContent = scoreText;
