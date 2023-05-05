import { createColorCar } from '../utils/create_a_car_by_color';
import Button from './template/button';
import Component from './template/component';

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
    const selectRemoveButtonsBlock = document.createElement('div');
    selectRemoveButtonsBlock.className = 'select-remove-buttons';

    selectRemoveButtonsBlock.append(
      new Button('Select', () => console.log('select')).render(),
    );
    selectRemoveButtonsBlock.append(
      new Button('Remove', () => console.log('remove')).render(),
    );

    selectRemoveButtonsBlock.append(
      new Button('Start', () => console.log('start')).render(),
    );

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
