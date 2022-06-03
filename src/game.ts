import {Area, GameMap} from "./location";
import {SEX, SMALL} from "./constants";
import Bog from "./ecology/bog";
import EcologyInterface from "./ecology/ecologyInterface";
import {getSize, rand} from "./utils";
import Meadow from "./ecology/meadow";
import Human from "./human";

export default class Game {
  heroes: Human[] = [];
  map: GameMap;

  public constructor(size: number = SMALL) {
    const sizeObject = getSize(size);
    const fields: Area[] = [];

    for (let i = 0; i < sizeObject.width * sizeObject.height; i++) {
      fields.push(new Area(
          [sizeObject.areaWidth, sizeObject.areaHeight],
          Game.randEcology()
        )
      );
    }

    this.map = new GameMap(fields);
  }

  public addHero(name: string, sex: SEX) {
    this.heroes.push(new Human(name, sex));
  }

  private static randEcology(): EcologyInterface {
    switch (rand(0, 1)) {
      case 0: return new Bog();
      case 1: return new Meadow();
    }

    return new Bog();
  }
}