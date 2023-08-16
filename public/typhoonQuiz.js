import {ButtonComponent} from"./Components/buttonComponent.js";
import {TitleComponent} from"./Components/titleComponent.js"
import {getQuiz} from"./typhoonQuiz/getQuiz.js";

const buttonComponent=new ButtonComponent();
const titleComponent=new TitleComponent();
titleComponent.setAttribute("text","");
const panel=document.querySelector(".panel");
panel.appendChild(titleComponent);
panel.appendChild(buttonComponent);

let quizNum=0;
let quizData;

window.onload=function(){

    initSetButtons();
    updateSetButtons();

    buttonComponent.feedbackButton.addEventListener("click",()=>{
       
        buttonComponent.answerMode();
        titleComponent.setAttribute("text",quizData.question);
        titleComponent.connectedCallback();

        backImageChange("sample2.jpg");
    });

};

async function initSetButtons(){

    quizData=await getQuiz(quizNum);
    titleComponent.setAttribute("text",quizData.question);
    titleComponent.connectedCallback();
    for(let i=0; i<3; i++){
        updateButtonWithJson(i)
    }

}

async function updateSetButtons(){

    for(let i=0; i<3; i++){

        buttonComponent.selectButtons[i].addEventListener("click",async()=>{
            let quizAnswer;

            buttonComponent.answerMode();
            backImageChange("sample2.jpg");
            
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
                buttonComponent.feedbackMode();
                titleComponent.setAttribute("text",quizData.advice);
                titleComponent.connectedCallback();
                alert("正解");
            }
            else{
                buttonComponent.feedbackMode();
                titleComponent.setAttribute("text",quizData.advice);
                titleComponent.connectedCallback();
                alert("不正解");
            }

            quizNum++;
            quizData=await getQuiz(quizNum);

            for(let j=0; j<3; j++){
                updateButtonWithJson(j);
            }

        })
    }
}

function updateButtonWithJson(i){

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

function backImageChange(imagePaht){
    panel.style.backgroundImage=`url("/image/${imagePaht}")`;
    panel.style.setProperty("--backimage", `url("/image/${imagePaht}")`);
}