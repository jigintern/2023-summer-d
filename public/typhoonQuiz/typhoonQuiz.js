import {ButtonComponent} from"../Components/buttonComponent.js";
import {TitleComponent} from"../Components/titleComponent.js"
import {getQuiz} from"./getQuiz.js";
import {gameStateCheck} from"./gameStateCheck.js";
import "../Components/imageButtonComponent.js"

const buttonComponent=new ButtonComponent();
const titleComponent=new TitleComponent();
titleComponent.setAttribute("text","");
const panel=document.querySelector(".panel");

panel.appendChild(titleComponent);
panel.appendChild(buttonComponent);

let quizDestination=0;
let quizData;
let gameState=0; //0だとゲーム中 1だとゲームオーバー 2だとゴール 3だと怪我によるゲームオーバー


window.onload=function(){

    initSetButtons();
    updateSetButtons();

    buttonComponent.feedbackButton.addEventListener("click",async()=>{

        if(gameState==1){
            alert("ゲームオーバー");
            window.location.href="../ending/gameover.html?dist="+quizDestination;
        }
        else if(gameState==2){
            alert("ゴール");
            window.location.href="../ending/gameclear.html?dist="+quizDestination;
        }
        else if(gameState==3){
            alert("ゲームオーバー");
            quizDestination="e-9"
            window.location.href="../ending/gameover.html?dist="+quizDestination;
        }

        quizData=await getQuiz(quizDestination);

        for(let j=0; j<3; j++){
            updateButtonWithJson(j);
        }

        buttonComponent.answerMode();
        titleComponent.setAttribute("text",quizData.question);
        titleComponent.connectedCallback();

        backImageChange(quizData.image);
    });

};

async function initSetButtons(){

    quizData=await getQuiz(quizDestination);
    titleComponent.setAttribute("text",quizData.question);
    titleComponent.connectedCallback();
    for(let i=0; i<3; i++){
        updateButtonWithJson(i)
    }

}

function updateSetButtons(){

    buttonComponent.selectButtons.forEach(button=>{

        button.addEventListener("click",async()=>{

            let quizAnswer;

            switch(parseInt(button.value)){
                case 0:
                    quizAnswer="A";
                    break;
                case 1:
                    quizAnswer="B";
                    break;
                case 2:
                    quizAnswer="C";
                    break;
            }

            const choice=quizData.choices[quizAnswer];
            
            if(choice.isCorrect){
                buttonComponent.feedbackMode();
                titleComponent.setAttribute("text",quizData.advice);
                titleComponent.connectedCallback();
                titleComponent.titleText.style.backgroundColor="#24E724";
                alert("正解");
            }
            else{
                buttonComponent.feedbackMode();
                titleComponent.setAttribute("text",quizData.advice);
                titleComponent.connectedCallback();
                titleComponent.titleText.style.backgroundColor="#B82E49";
                alert("不正解");
            }

            gameState=gameStateCheck(choice);
            quizDestination=choice.dest;

        })
    })
}


function updateButtonWithJson(i){

    switch(i){
        case 0:
            buttonComponent.selectButtons[i].textContent="A: "+quizData.choices.A.text;
            break;
        case 1:
            buttonComponent.selectButtons[i].textContent="B: "+quizData.choices.B.text;
            break;
        case 2:
            buttonComponent.selectButtons[i].textContent="C: "+quizData.choices.C.text;
            break;
    }

}

function backImageChange(imagePaht){
    panel.style.backgroundImage=`url("/image/${imagePaht}")`;
    panel.style.setProperty("--backimage", `url("/image/${imagePaht}")`);
}
