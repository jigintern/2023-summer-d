export class TitleComponent extends HTMLElement{

    constructor(){
        super();
        this.titleText=document.createElement("h1");
    }

    connectedCallback(){
        const text=this.getAttribute("text") || "読み込みエラー";
        this.titleText.textContent=text;
        this.titleText.style.display="flex";
        this.titleText.style.justifyContent="center";
        this.titleText.style.alignItems="center";
        this.titleText.style.color="white"
        this.titleText.style.marginTop="15vh"; 
        this.titleText.style.backgroundColor="#f3cc03"; 
        this.titleText.style.color="black"; 
        this.titleText.style.marginBottom="30px"; 
        this.titleText.style.padding="25px";
        this.titleText.style.borderRadius="10px";
        
        this.appendChild(this.titleText);
    }

}

customElements.define("title-component",TitleComponent);