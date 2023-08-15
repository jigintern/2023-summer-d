import {ButtonComponent} from"./buttonComponent.js";
import {jsonLoad} from"./jsonLoder.js";

const buttonComponent=new ButtonComponent();
const panel=document.querySelector(".panel");
panel.appendChild(buttonComponent);

let quizNum=0;

window.onload = function() {
    initSetButtons();
    updateSetButtons();
};

function initSetButtons(){
    for(let i=0; i<3; i++){
        updateButtonWithJson(i)
    }
}

function updateSetButtons(){
    for(let i=0; i<3; i++){
        buttonComponent.selectButtons[i].addEventListener("click",async()=>{
            quizNum++;
            //ボタンをクリックしたら選択肢分のテキストを更新
            for(let j=0; j<3; j++){
                updateButtonWithJson(j);
            }
        })
    }
}

async function updateButtonWithJson(i){
    const quizData=await jsonLoad(quizNum);
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