import {ButtonComponent} from"./buttonComponent.js";
import {jsonLoad} from"./jsonLoder.js";

const buttonComponent=new ButtonComponent();
const panel=document.querySelector(".panel");
panel.appendChild(buttonComponent);

window.onload = function() {
    buttonsTextUpdate(0);
};

async function buttonsTextUpdate(quizNum){
    for(let i=0; i<3; i++){
        const quizData=await jsonLoad(quizNum);

        switch(i){
            case 0:
                buttonComponent.selectButtons[i].textContent=quizData.choices.A;
                console.log(quizData.choices.A);
                break;
            case 1:
                buttonComponent.selectButtons[i].textContent=quizData.choices.B;
                console.log(quizData.choices.B);
                break;
            case 2:
                buttonComponent.selectButtons[i].textContent=quizData.choices.C;
                console.log(quizData.choices.C);
                break;
        }
        
    }
}


