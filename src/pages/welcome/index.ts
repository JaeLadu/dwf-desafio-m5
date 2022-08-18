function mountWelcome(root) {
   const title = document.createElement("title-comp");
   title.textContent = "Piedra, Papel o Tijera";
   title.addEventListener("click", () => {
      console.log("click");
   });

   const button = document.createElement("button-comp");
   button.setAttribute("text", "Empezar");
   button.setAttribute("target", "/desdeboton");

   const moveSelector = document.createElement("move-selector-comp");

   const container = document.createElement("div");
   container.classList.add("container");

   const style = document.createElement("style");
   style.textContent = `
   .container{
      min-height: 80vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      
   }
   `;

   container.append(title, button, moveSelector);
   root.append(container, style);
}
export { mountWelcome };
