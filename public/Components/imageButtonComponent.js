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
            #${this.buttonId}:hover{
                opacity:0.5;
              }
            </style>
            <button id=${this.buttonId}></button>
        `;
    }

    connectedCallback(){

        const url=this.getAttribute("url") || ""; 
        const isConfirm=this.getAttribute("isConfirm") || ""; 
        this.shadowRoot.getElementById(this.buttonId).addEventListener('click',()=>{
            isConfirm ? this.confirmURLOpen(url) : window.location.href=url;
          
        });
        
    } 

    confirmURLOpen(url){
        confirm("処理を実行しますか？")?window.location.href=url:"";
    }

}

customElements.define("image-button",ImageButton);