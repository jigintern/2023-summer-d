export class ButtonComponent extends HTMLElement {
    constructor() {
        super();
        this.selectButtons =[];
    }
    connectedCallback() {
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
    }
}

customElements.define("button-component", ButtonComponent);