import Component from './template/component';
import { Car as CarType } from '../types/car';
import { getCars } from '../api/getCars';
import CarBlock from './CarBlock';

class RaceBlock extends Component {
  static cars: CarType[] = [];

  constructor() {
    super('div', 'race-block');
  }

  render(): HTMLElement {
    getCars()
      .then((result) => { RaceBlock.cars = [...result]; })
      .then(() => {
        RaceBlock.cars.forEach((car) => {
          this.container.append(
            new CarBlock(car.id, car.name, car.color).render(),
          );
        });
      });
    return this.container;
  }
}
export default RaceBlock;
