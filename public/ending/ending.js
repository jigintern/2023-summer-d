import{getEndJson} from"./getQuizEnd.js";

let endData= await getEndJson(0);
console.log(endData);
const tmp = "災害で死んでしまった";
document.getElementById("message").textContent = tmp;
