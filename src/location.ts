import EcologyInterface from './ecology/ecologyInterface';

export type Position = {
    x: number;
    y: number;
};

export class GameMap {
    constructor(private fields: Area[]) {
    }

    public getField(position: number): Area {
        return this.fields[position];
    }
}

export class Area {
    constructor(private size: number[], private ecology: EcologyInterface) {
    }

    public getSize(): number[] {
        return this.size;
    }
}