import { deleteCar } from '../api/deleteCar';
import RaceBlock from './RaceBlock';
import Button from './template/button';
import Component from './template/component';
import { focusUpdateInput } from '../utils/GaragePage/ focusUpdateInput';
import { startResetCar } from '../utils/GaragePage/startResetCar';

class UpdateRemoveButtonsBlock extends Component {
  private carId: number;

  private carHTML: HTMLElement;

  constructor(carId: number, carHTML: HTMLElement) {
    super('div', 'select-remove-buttons');
    this.carHTML = carHTML;
    this.carId = carId;
  }

  private createBlock() {
    this.container.append(
      new Button('Update Car', () => { focusUpdateInput(this.carId); }).render(),
    );
    this.container.append(
      new Button('Remove', async () => {
        await deleteCar(this.carId);
        RaceBlock.render();
      }).render(),
    );

    this.container.append(
      new Button('Start', async (e) => {
        const button = e?.currentTarget as HTMLButtonElement;
        startResetCar(this.carHTML, this.carId, button);
      }).render(),
    );
  }

  render(): HTMLElement {
    this.createBlock();
    return this.container;
  }
}
export default UpdateRemoveButtonsBlock;
