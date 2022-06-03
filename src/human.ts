import AbstractAnimal from './animals/abstractAnimal';
import Creature from "./creature";
import {Position} from "./location";
import {
    FEMALE_MAX_HEALTH,
    FEMALE_MIN_HEALTH,
    MALE_MAX_HEALTH,
    MALE_MIN_HEALTH,
    SEX
} from "./constants";

export default class Human extends Creature {
    get animals(): AbstractAnimal[] {
        return this._animals ?? [];
    }

    set animals(value: AbstractAnimal[]) {
        this._animals = value;
    }
    private _animals: AbstractAnimal[] | undefined;

    public constructor(public readonly name: string,
                       public readonly sex: SEX) {
        super();
        this.legs = 2;
        if (this.sex === SEX.male) {
            this.setHealth(MALE_MIN_HEALTH, MALE_MAX_HEALTH);
        } else {
            this.setHealth(FEMALE_MIN_HEALTH, FEMALE_MAX_HEALTH);
        }
    }

    public tame(animal: AbstractAnimal) {
        this._animals?.push(animal);
    }

    public move(distance: Position): boolean {
        this.position.x += distance.x;
        this.position.y += distance.y;
        return true;
    }
}