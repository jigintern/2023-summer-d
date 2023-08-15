import {ButtonComponent} from"./buttonComponent.js";
import {TitleComponent} from"./titleComponent.js"
import {jsonLoad} from"./jsonLoder.js";

const buttonComponent=new ButtonComponent();
const titleComponent=new TitleComponent();
titleComponent.setAttribute("text", "adadwdawd");
const panel=document.querySelector(".panel");
panel.appendChild(buttonComponent);
panel.appendChild(titleComponent);


let quizNum=0;
let quizData;

window.onload = function() {
    initSetButtons();
    updateSetButtons();
    titleComponent.setAttribute("text", "新しいテキスト");
    titleComponent.connectedCallback();
};

function initSetButtons(){
    for(let i=0; i<3; i++){
        updateButtonWithJson(i)
    }
}

function updateSetButtons(){
    for(let i=0; i<3; i++){
        buttonComponent.selectButtons[i].addEventListener("click",async()=>{
            let quizAnswer;

            switch(quizData.answer){
                case "A":
                    quizAnswer=0;
                    break;
                case "B":
                    quizAnswer=1;
                    break;
                case "C":
                    quizAnswer=2;
                    break;
            }

            if(quizAnswer==buttonComponent.selectButtons[i].value){
                alert("正解");
            }
            else{
                alert("不正解");
            }

            quizNum++;
            for(let j=0; j<3; j++){
                updateButtonWithJson(j);
            }
        })
    }
}

async function updateButtonWithJson(i){
    quizData=await jsonLoad(quizNum);
    switch(i){
        case 0:
            buttonComponent.selectButtons[i].textContent=quizData.choices.A;
            break;
        case 1:
            buttonComponent.selectButtons[i].textContent=quizData.choices.B;
            break;
        case 2:
            buttonComponent.selectButtons[i].textContent=quizData.choices.C;
            break;
    }
}