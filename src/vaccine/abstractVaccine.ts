import EcologyInterface from "../ecology/ecologyInterface";
import VaccineInterface from "./vaccineInterface";

export default abstract class AbstractVaccine implements VaccineInterface {
    abstract period: number;
    abstract type: EcologyInterface;

    get date(): number {
        return this._date;
    }

    protected constructor(private _date: number) {
    }

    /**
     * Закончилось ли действие вакцины
     * @param now
     */
    public isOverdue(now: number): boolean {
        return (now - (this.period + this.date)) > 0;
    }
}