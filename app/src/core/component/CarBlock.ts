import { Car } from '../types/car';
import { createColorCar } from '../utils/create_a_car_by_color';
import Component from './template/component';
import UpdateRemoveButtonsBlock from './UpdateRemoveButtonsBlock';

class CarBlock extends Component {
  private carColor: string;

  private carName: string;

  constructor({ name, color, id }: Car) {
    super('div', 'car-container');
    this.container.id = `${id}`;
    this.carColor = color;
    this.carName = name;
  }

  private createCarBlock() {
    const updateRemoveButtonsBlock = new UpdateRemoveButtonsBlock(
      +this.container.id,
    ).render();

    const carName = document.createElement('p');
    carName.innerHTML = this.carName;
    updateRemoveButtonsBlock.append(carName);

    this.container.append(updateRemoveButtonsBlock);
    this.container.append(createColorCar(this.carColor));
  }

  render(): HTMLElement {
    this.createCarBlock();
    return this.container;
  }
}
export default CarBlock;
