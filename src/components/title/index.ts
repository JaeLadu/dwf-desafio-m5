function initTitle() {
   class Title extends HTMLElement {
      constructor() {
         super();
      }
      shadow = this.attachShadow({ mode: "open" });
      connectedCallback() {
         const content = document.createElement("h1");
         const style = document.createElement("style");

         content.textContent = this.textContent || "Un titulo";

         style.textContent = `
             h1{
                 color: #009048;
                }
                `;
         this.shadow.children;
         this.shadow.append(content, style);
      }
   }

   customElements.define("title-comp", Title);
}
export { initTitle };
