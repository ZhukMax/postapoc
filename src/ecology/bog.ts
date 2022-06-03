import EcologyInterface from "./ecologyInterface";

export default class Bog implements EcologyInterface {
    constructor(public readonly name = 'bog',
                public readonly damage = 2) {
    }
}