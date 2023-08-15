export class TitleComponent extends HTMLElement{
    constructor(){
        super();
        this.titleText=document.createElement("h1");
    }
    connectedCallback() {
        const text=this.getAttribute("text") || "読み込みエラー";
        this.titleText.textContent=text;
        this.titleText.style.color="white";
        this.appendChild(this.titleText);
    }
}

customElements.define("title-component",TitleComponent);