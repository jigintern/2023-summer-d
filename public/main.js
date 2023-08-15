const quizContainer=document.createElement("div");
const questionText=document.createElement("h1");

class QuizComponent extends HTMLElement {
    constructor() {
        super();
        quizContainer.style.width="100%";
        quizContainer.style.height="100%";
        quizContainer.style.margin="auto";
        quizContainer.style.backgroundImage="url(image/sample.jpg)";
        quizContainer.style.backgroundRepeat="no-repeat";                                    
        quizContainer.style.backgroundPosition="center center";      
        quizContainer.style.backgroundSize="contain"; 
        quizContainer.style.width="100%";                  
        quizContainer.style.height=window.innerHeight;   
        quizContainer.style.border="10px solid yellow";
        this.appendChild(quizContainer);
    

        questionText.textContent="問題文";
        //questionText.style.position="absolute";
        questionText.style.color="white";
        quizContainer.appendChild(questionText);
        for(let i=0; i<3; i++){
            const selectButton=document.createElement("button");
            selectButton.textContent="ボタン"+i;
            selectButton.style.margin="auto";
            selectButton.style.marginTop="40px";
            selectButton.style.display="flex";
            selectButton.style.width="60%";
            selectButton.style.justifyContent = "center";
            selectButton.style.alignItems = "center";
            //selectButton.style.position="absolute";
            selectButton.value=i;

            selectButton.addEventListener("click",function(){
                console.log(this.value);
            });

            quizContainer.appendChild(selectButton);
        }

        async function jsonLoad(quizNum){
            fetch("/quiz/"+quizNum)
            .then(response =>{
            return response.json();
            })
            .then(quizData =>{
                console.log(quizData);
                this.correctNum=1;
            })
            .catch(error =>{
                console.error(error);
            });
        }

      }
}

customElements.define("quiz-component", QuizComponent);