function mountPlay(root) {
   const counter = document.createElement("counter-comp");

   const moveSelector = document.createElement("move-selector-comp");
   moveSelector.setAttribute("big", "yes");
   moveSelector.shadowRoot?.addEventListener(
      "selected",
      (e: CustomEventInit) => {
         console.log(e.detail);
      }
   );

   const container = document.createElement("div");
   container.classList.add("container");
   // counter.classList.add("counter");

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

   root.innerHTML = "";
   container.append(counter, moveSelector);
   root.append(container, style);
}
export { mountPlay };
