const piedraImg = require("../../elements/piedra.svg");
const papelImg = require("../../elements/papel.svg");
const tijeraImg = require("../../elements/tijera.svg");

function initMoveSelector() {
   class MoveSelector extends HTMLElement {
      constructor() {
         super();
      }
      shadow = this.attachShadow({ mode: "open" });
      connectedCallback() {
         if (this.isConnected) {
            const container = document.createElement("div");
            container.classList.add("container");
            if (this.getAttribute("big") == "yes") {
               container.classList.add("big");
            }

            const piedra = document.createElement("img");
            piedra.classList.add("play");
            piedra.setAttribute("src", piedraImg);
            piedra.setAttribute("play", "piedra");
            piedra.addEventListener("click", () => {
               console.log(piedra.getAttribute("play"));
            });

            const papel = document.createElement("img");
            papel.classList.add("play");
            papel.setAttribute("src", papelImg);
            papel.setAttribute("play", "papel");
            papel.addEventListener("click", () => {
               console.log(papel.getAttribute("play"));
            });

            const tijera = document.createElement("img");
            tijera.classList.add("play");
            tijera.setAttribute("src", tijeraImg);
            tijera.setAttribute("play", "tijera");
            tijera.addEventListener("click", () => {
               console.log(tijera.getAttribute("play"));
            });

            const style = document.createElement("style");
            style.textContent = `
            .container{
                display: flex;
                align-items:flex-end;
                gap: 45px;
                height:100%
            }
            .big{
               height:35vh;
            }
            .play{
               height:100%;
            }
            `;

            container.append(piedra, papel, tijera);
            this.shadow.append(container, style);
         }
      }
   }
   customElements.define("move-selector-comp", MoveSelector);
}
export { initMoveSelector };
