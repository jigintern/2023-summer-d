export class ButtonComponent extends HTMLElement{

    constructor(){
        super();
        this.selectButtons=[];
        this.feedbackButton=document.createElement("button");
    }

    connectedCallback(){

        for(let i=0; i<3; i++){

            const selectButton=document.createElement("button");
            selectButton.textContent="ボタン"+i;
            selectButton.style.margin="auto";
            selectButton.style.marginTop="40px";
            selectButton.style.display="flex";
            selectButton.style.width="60%";
            selectButton.style.justifyContent = "center";
            selectButton.style.alignItems = "center";
            selectButton.value=i;
                
            this.selectButtons.push(selectButton);
            this.appendChild(selectButton);

        }

        this.feedbackButton.textContent="次に進む";
        this.feedbackButton.style.margin="auto";
        this.feedbackButton.style.width="30%";
        this.feedbackButton.style.display="flex";
        this.feedbackButton.style.justifyContent="center";
        this.feedbackButton.style.alignItems="center";
        this.feedbackButton.style.display="none";
        this.appendChild( this.feedbackButton);

    }

    feedbackMode(){

        for(let i=0; i<3; i++){
            this.selectButtons[i].style.display="none";
        }

        this.feedbackButton.style.display="block";

    }

    answerMode(){

        for(let i=0; i<3; i++){
            this.selectButtons[i].style.display="block";
        }  

        this.feedbackButton.style.display="none";

    }

}

customElements.define("button-component",ButtonComponent);