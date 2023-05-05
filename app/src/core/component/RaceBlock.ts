import Component from './template/component';
import { Car as CarType } from '../types/car';
import { getCars } from '../api/getCars';
import CarBlock from './CarBlock';

class RaceBlock extends Component {
  static container: HTMLElement;

  constructor() {
    super('div', 'race-block');
    RaceBlock.container = this.container;
  }

  static async createBlock() {
    const { response, totalCount } = await getCars();

    if (totalCount ? !parseInt(totalCount, 10) : false) {
      const h2 = document.createElement('h2');
      h2.innerHTML = 'No cars in the garage';

      this.container.append(h2);
    } else {
      response.then((cars) => {
        cars.forEach((car: CarType) => {
          this.container.append(
            new CarBlock(car.id, car.name, car.color).render(),
          );
        });
      });
    }
  }

  static async refreshComponent() {
    const { totalCount } = await getCars();
    if (totalCount ? !parseInt(totalCount, 10) : false) {
      this.container.innerHTML = '';
      RaceBlock.createBlock();
    }
  }

  render(): HTMLElement {
    RaceBlock.createBlock();
    return this.container;
  }
}
export default RaceBlock;
