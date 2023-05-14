import { Car, CurrentCar } from '../types/types';
import { createColorCar } from '../utils/create_a_car_by_color';
import RaceBlock from './RaceBlock';
import Component from './template/component';
import UpdateRemoveButtonsBlock from './UpdateRemoveButtonsBlock';

class CarBlock extends Component {
  private car: CurrentCar;

  constructor({ name, color, id }: Car) {
    super('div', 'car-container');
    this.container.id = `${id}`;

    this.car = {
      name,
      color,
      id,
      HTML: createColorCar(color),
    };
  }

  private createCarBlock() {
    const updateRemoveButtonsBlock = new UpdateRemoveButtonsBlock(
      +this.container.id,
      this.car.HTML,
    ).render();

    const carName = document.createElement('p');
    carName.innerHTML = this.car.name;
    updateRemoveButtonsBlock.append(carName);

    this.container.append(updateRemoveButtonsBlock);
    this.container.append(this.car.HTML);
    RaceBlock.currentCars.push(this.car);
  }

  render(): HTMLElement {
    this.createCarBlock();
    return this.container;
  }
}
export default CarBlock;
