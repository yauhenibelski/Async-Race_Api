import { createColorCar } from '../utils/create_a_car_by_color';
import Component from './template/component';
import SelectRemoveButtonsBlock from './SelectRemoveButtonsBlock';

class CarBlock extends Component {
  private carColor: string;

  private carName: string;

  constructor(id: number, carName: string, carColor: string) {
    super('div', 'car-container');
    this.container.id = `${id}`;
    this.carColor = carColor;
    this.carName = carName;
  }

  private createCarBlock() {
    const selectRemoveButtonsBlock = new SelectRemoveButtonsBlock(
      this.container.id,
    ).render();

    const carName = document.createElement('p');
    carName.innerHTML = this.carName;
    selectRemoveButtonsBlock.append(carName);

    this.container.append(selectRemoveButtonsBlock);
    this.container.append(createColorCar(this.carColor));
  }

  render(): HTMLElement {
    this.createCarBlock();
    return this.container;
  }
}
export default CarBlock;
