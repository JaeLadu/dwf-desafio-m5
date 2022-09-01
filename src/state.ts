const state = {
   score: {
      computer: 0,
      player: 0,
   },

   currentGame: {
      playerMove: "papel",
      computerMove: "",
      result: "",
   },

   getScore() {
      return this.score;
   },

   SelectPlay(newPlay: string) {
      this.currentGame.playerMove = newPlay;
   },

   computerMove() {
      const moves = ["piedra", "papel", "tijera"];

      this.currentGame.computerMove = moves[Math.floor(Math.random() * 2.99)];
   },

   getResult() {
      this.computerMove();

      if (this.currentGame.playerMove !== "") {
         const result =
            resultsMap[this.currentGame.playerMove][
               this.currentGame.computerMove
            ];
         this.currentGame.result = result;
      } else {
         this.currentGame.result = "lose";
      }

      this.updateScore(this.currentGame.result);

      return this.currentGame;
   },

   updateScore(result: "win" | "lose" | "tie") {
      if (result == "lose") {
         this.score.computer++;
      }
      if (result == "win") {
         this.score.player++;
      }
   },
};

const resultsMap = {
   piedra: {
      piedra: "tie",
      papel: "lose",
      tijera: "win",
   },
   papel: {
      piedra: "win",
      papel: "tie",
      tijera: "lose",
   },
   tijera: {
      piedra: "lose",
      papel: "win",
      tijera: "tie",
   },
};

export { state };
