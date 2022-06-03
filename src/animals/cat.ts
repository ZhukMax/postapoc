import AbstractAnimal from "./abstractAnimal";
import { Position } from "../location";

export default class Cat extends AbstractAnimal {
  public constructor() {
    super();
    this.setHealth(20, 70);
  }

  protected move(distance: Position): boolean {
    this.position.x += distance.x;
    this.position.y += distance.y;
    return true;
  }
}