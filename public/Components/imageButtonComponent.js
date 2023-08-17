class ImageButton extends HTMLElement{

    constructor(){

        super();
        this.attachShadow({mode:"open"});
        this.imagePath=this.getAttribute("imagePath") || "";
        this.buttonId=this.getAttribute("buttonId") || "";

        this.shadowRoot.innerHTML=`
            <style>
            #${this.buttonId}{
                background-image: url("${this.imagePath}");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: center;
                border: none;
                width: 100px;
                height: 100px;
            }
            </style>
            <button id=${this.buttonId}></button>
        `;
    }

    connectedCallback(){

        const url=this.getAttribute("url") || ""; 
        this.shadowRoot.getElementById(this.buttonId).addEventListener('click',()=>{
          window.location.href=url;
        });
        
    } 

}

customElements.define("image-button",ImageButton);