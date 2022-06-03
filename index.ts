import Game from "./src/game";
import {MEDIUM, SEX} from "./src/constants";

const game = new Game(
  MEDIUM
);

game.addHero('Maximus', SEX.male);
