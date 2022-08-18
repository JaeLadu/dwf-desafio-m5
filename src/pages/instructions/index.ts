function mountInstructions(root) {
   const title = document.createElement("subtitle-comp");
   title.textContent =
      "Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.";

   const button = document.createElement("button-comp");
   button.setAttribute("text", "Jugar!");
   button.setAttribute("target", "/");

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
      gap: 11vh;
   }
   `;

   container.append(title, button, moveSelector);
   root.innerHTML = "";
   root.append(container, style);
}
export { mountInstructions };
