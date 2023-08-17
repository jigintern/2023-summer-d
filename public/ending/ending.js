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