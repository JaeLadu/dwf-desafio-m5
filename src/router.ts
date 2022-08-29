import { mountWelcome } from "./pages/welcome";
import { mountInstructions } from "./pages/instructions";
import { mountPlay } from "./pages/play";

const routes = [
   {
      route: /\B\/\B|\/dwf-desafio-m5\/\B|\/welcome$/,
      do: mountWelcome,
   },
   {
      route: /\/dwf-desafio-m5\/instructions|\/instructions$/,
      do: mountInstructions,
   },
   {
      route: /\/dwf-desafio-m5\/play|\/play$/,
      do: mountPlay,
   },
];

function handleRoute(newRoute: string) {
   const root = document.querySelector(".root");
   routes.forEach((r) => {
      if (r.route.test(newRoute)) {
         r.do(root);
      }
   });
}
export { handleRoute };
