import AbstractVaccine from "./abstractVaccine";
import Bog from "../ecology/bog";

export default class BogImmunity extends AbstractVaccine {
    period = 350;
    type = Bog;
}