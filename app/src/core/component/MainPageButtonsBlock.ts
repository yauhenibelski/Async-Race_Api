import CreateUpdateCar from './CreateUpdateCar';
import Button from './template/button';
import Component from './template/component';
import { generateRandomCars } from '../utils/GaragePage/generateRandomCars';
import { startRace } from '../utils/GaragePage/startRace';

class MainPageButtonsBlock extends Component {
  constructor() {
    super('div', 'buttons-container');
  }

  private renderButtonsBlock() {
    const div = document.createElement('div');
    div.className = 'buttons-block';
    div.append(new Button('Race', startRace).render());
    div.append(new Button('Generate Cars', () => { generateRandomCars(100); }).render());
    this.container.append(div);
  }

  render(): HTMLElement {
    this.container.append(new CreateUpdateCar('Create car').render());
    this.renderButtonsBlock();
    return this.container;
  }
}
export default MainPageButtonsBlock;
