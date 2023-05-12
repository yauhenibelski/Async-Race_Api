import { Car } from '../types/types';
import { createColorCar } from '../utils/create_a_car_by_color';
import RaceBlock from './RaceBlock';
import Component from './template/component';
import UpdateRemoveButtonsBlock from './UpdateRemoveButtonsBlock';

class CarBlock extends Component {
  private carName: string;

  private carHTML: HTMLElement;

  constructor({ name, color, id }: Car) {
    super('div', 'car-container');
    this.container.id = `${id}`;
    this.carName = name;
    this.carHTML = createColorCar(color);
  }

  private createCarBlock() {
    const updateRemoveButtonsBlock = new UpdateRemoveButtonsBlock(
      +this.container.id,
      this.carHTML,
    ).render();

    const carName = document.createElement('p');
    carName.innerHTML = this.carName;
    updateRemoveButtonsBlock.append(carName);

    this.container.append(updateRemoveButtonsBlock);
    this.container.append(this.carHTML);
    RaceBlock.currentCars.push([this.carHTML, +this.container.id]);
  }

  render(): HTMLElement {
    this.createCarBlock();
    return this.container;
  }
}
export default CarBlock;
