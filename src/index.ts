import { initTitle } from "./components/title";

(() => {
   initTitle();
   const container = document.createElement("div");
   const title = document.createElement("title-comp");

   title.textContent = "Un titulo personalizado";

   const root = document.querySelector(".root");

   container.append(title);
   root?.append(container);

   const boton = document.querySelector("button");
   boton?.addEventListener("click", () => {
      container.innerHTML = "";
      title.textContent = `Un cambio en el titulo ${Math.random()}`;
      container.append(title);
   });
})();
