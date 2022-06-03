import Creature from "../creature";
import VaccineInterface from "../vaccine/vaccineInterface";
import EcologyInterface from "../ecology/ecologyInterface";

export default abstract class AbstractAnimal extends Creature {
  private vaccines: VaccineInterface[] = [];

  protected constructor() {
    super();
    this.legs = 4;
  }

  protected addVaccine(vaccine: VaccineInterface) {
    this.vaccines.push(vaccine);
  }

  protected checkVaccines(ecology: EcologyInterface) {
    this.health -= ecology.damage;
    this.vaccines.map((vaccine) => {
      if (vaccine.type.name === ecology.name) {
        this.health += ecology.damage;
      }
    });
  }
}