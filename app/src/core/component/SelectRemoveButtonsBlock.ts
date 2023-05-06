import { deleteCar } from '../api/deleteCar';
import RaceBlock from './RaceBlock';
import Button from './template/button';
import Component from './template/component';

class SelectRemoveButtonsBlock extends Component {
  constructor(carId: string) {
    super('div', 'select-remove-buttons');
    this.container.id = carId;
  }

  private createBlock() {
    this.container.append(
      new Button('Select', () => console.log('select')).render(),
    );
    this.container.append(
      new Button('Remove', async () => {
        await deleteCar(this.container.id);
        await RaceBlock.recreateComponent();
      }).render(),
    );

    this.container.append(
      new Button('Start', () => console.log('start')).render(),
    );
  }

  render(): HTMLElement {
    this.createBlock();
    return this.container;
  }
}
export default SelectRemoveButtonsBlock;
