import AbstractAnimal from "./abstractAnimal";
import { Position } from "../location";

export default class Bear extends AbstractAnimal {
  public constructor() {
    super();
    this.setHealth(300, 600);
  }

  protected move(distance: Position): boolean {
    this.position.x += distance.x;
    this.position.y += distance.y;
    return true;
  }
}