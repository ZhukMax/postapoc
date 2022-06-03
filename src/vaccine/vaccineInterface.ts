import EcologyInterface from "../ecology/ecologyInterface";

export default interface VaccineInterface {
    period: number;
    type: EcologyInterface;
    date: number;
}