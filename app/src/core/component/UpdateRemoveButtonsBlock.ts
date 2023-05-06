import { deleteCar } from '../api/deleteCar';
import RaceBlock from './RaceBlock';
import Button from './template/button';
import Component from './template/component';
import { focusUpdateInput } from '../utils/GaragePage/ focusUpdateInput';

class UpdateRemoveButtonsBlock extends Component {
  constructor(carId: number) {
    super('div', 'select-remove-buttons');
    this.container.id = `${carId}`;
  }

  private createBlock() {
    this.container.append(
      new Button('Update Car', () => { focusUpdateInput(+this.container.id); }).render(),
    );
    this.container.append(
      new Button('Remove', async () => {
        await deleteCar(this.container.id);
        RaceBlock.reCreateComponent();
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
export default UpdateRemoveButtonsBlock;
