function initTitle() {
   class Title extends HTMLElement {
      constructor() {
         super();
      }
      shadow = this.attachShadow({ mode: "open" });
      connectedCallback() {
         if (this.isConnected) {
            const div = document.createElement("div");
            const content = document.createElement("h1");
            const style = document.createElement("style");

            content.textContent = this.textContent || "Un titulo";

            style.textContent = `
                h1{
                color: #009048;
                }
                `;
            div.innerHTML = "";
            div.append(content, style);
            this.shadow.append(div);
         }
      }
   }

   customElements.define("title-comp", Title);
}
export { initTitle };
