function initCounter() {
   class Counter extends HTMLElement {
      static get observedAttributes() {
         return ["count"];
      }
      constructor() {
         super();
      }
      shadow = this.attachShadow({ mode: "open" });

      connectedCallback() {
         if (this.isConnected) {
            const container = document.createElement("div");

            this.setAttribute("count", "3");

            container.textContent = this.getAttribute("count");

            const style = document.createElement("style");
            style.textContent = `
            div{
               width: 100%;
               text-align: center;
               font-size: 200px;
               font-weight: 700;
            }
            `;

            setInterval(() => {
               if (this.getAttribute("count") !== "1") {
                  this.setAttribute(
                     "count",
                     (Number(this.getAttribute("count")) - 1).toString()
                  );
               } else {
                  clearInterval();
               }
            }, 1000);

            this.shadow.append(container, style);
         }
      }

      attributeChangedCallback(name, oldV, newV) {
         const div = this.shadow.querySelector("div");

         if (name == "count" && div) {
            div.textContent = newV;
         }
      }
   }
   customElements.define("counter-comp", Counter);
}

export { initCounter };
