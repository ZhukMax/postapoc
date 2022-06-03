import { Position } from "./location";
import { rand } from "./utils";

export default abstract class Creature {
  protected health: number = 100;
  protected force: number = 10;
  protected legs: number | undefined;

  get position(): Position {
    return this._position;
  }

  set position(value: Position) {
    this._position = value;
  }
  protected _position: Position = { x: 0, y: 0 };

  protected abstract move(distance: Position): boolean;

  protected setHealth(min: number, max: number) {
    this.health = rand(min, max);
  }

  protected setForce() {
    this.force = this.health / 10 - rand(1, 3);
    this.force = (this.force < 1) ? 1 : this.force;
  }
}