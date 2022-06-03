import EcologyInterface from "./ecologyInterface";

export default class Meadow implements EcologyInterface {
    constructor(public readonly name = 'meadow',
                public readonly damage = 0) {
    }
}