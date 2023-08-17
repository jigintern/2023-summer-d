import{getEndJson} from"./getQuizEnd.js";

const urlParams=new URLSearchParams(window.location.search);
const distParameter=urlParams.get("dist");
const endIndex=distParameter.substring(distParameter.indexOf('-') + 1);
console.log(endIndex);

let endData= await getEndJson(endIndex);
console.log(endData);
const tmp = endData.message;
document.getElementById("message").textContent = tmp;
