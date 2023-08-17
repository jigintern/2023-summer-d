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
            selectButton.style.width="50vw";
            selectButton.style.justifyContent ="center";
            selectButton.style.alignItems="center";
            selectButton.style.backgroundColor="#f3cc03";
            selectButton.style.fontSize="20px";
            selectButton.style.padding="25px";
            selectButton.style.borderRadius="10px";
            selectButton.style.transition='all 0.2s';
            selectButton.value=i;
            selectButton.addEventListener('mouseover', () => {
                selectButton.style.cursor='pointer';
                selectButton.style.transform='translateY(-5px)';
                selectButton.style.boxShadow='0px 5px darkgray';
            })
            selectButton.addEventListener('mouseout', () => {
                selectButton.style.cursor='auto';
                selectButton.style.transform='none';
                selectButton.style.boxShadow='none';
            })
            
                
            this.selectButtons.push(selectButton);
            this.appendChild(selectButton);

        }

        this.feedbackButton.style.margin="auto";
        this.feedbackButton.style.width="150px";
        this.feedbackButton.style.height="150px";
        this.feedbackButton.style.display="flex";
        this.feedbackButton.style.justifyContent="center";
        this.feedbackButton.style.alignItems="center";
        this.feedbackButton.style.display="none";
        this.feedbackButton.style.backgroundColor="#24E724";
        this.feedbackButton.style.marginTop="50px";
        this.feedbackButton.style.backgroundImage=`url("/image/feedbuckButton2.jpg")`;
        this.feedbackButton.style.backgroundRepeat="no-repeat";
        this.feedbackButton.style.backgroundSize = "100% 100%";
        this.feedbackButton.style.backgroundPosition="center";
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