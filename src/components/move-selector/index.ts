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

            const piedra = document.createElement("img");
            piedra.classList.add("piedra");
            piedra.setAttribute("src", piedraImg);

            const papel = document.createElement("img");
            papel.classList.add("papel");
            papel.setAttribute("src", papelImg);

            const tijera = document.createElement("img");
            tijera.classList.add("tijera");
            tijera.setAttribute("src", tijeraImg);

            const style = document.createElement("style");
            style.textContent = `
            .container{
                display: flex;
                align-items:flex-end;
                gap: 45px;
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
